<?php
/**
 * Plugin Name:       Orthodox Calendar Block
 * Description:       Displays daily Orthodox Calendar information from 
 * Version:           0.10.0
 * Requires at least: 6.8.0
 * Requires PHP:      7.4
 * Author:            Dustin Vietzke, David L
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       orthodox-calendar-block
 *
 * @package OrthodoxCalendar
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

define( 'ORTHOCAL_DIR', __DIR__ );
define( 'ORTHODOX_CALENDAR_BLOCK_VERSION', "0.10.0" );
define( 'ORTHODOX_CALENDAR_BLOCK_ALLOWED_HOST', 'www.holytrinityorthodox.com' );


/**
 * Registers the block(s) metadata from the `blocks-manifest.php` and registers the block type(s)
 * based on the registered block metadata. Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */
function orthocalbl_create_block_init() {
	// Create a nonce
    $nonce = wp_create_nonce('orthocalbl-request');

    // Register your block script
    wp_register_script(
        'orthocalbl-script',
        plugins_url('./orthocalbl.js', __FILE__),
        array(),
        '0.2.0',
		true
    );

	wp_localize_script( 'orthocalbl-script', 'oc_data', array(
        'url' => admin_url('admin-ajax.php?action=orthocalbl_request', __FILE__),
        'ocnonce' => $nonce,
	));


	wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
}
add_action( 'init', 'orthocalbl_create_block_init' );



function orthocalbl_enqueue_if_block_is_present(){
	if ( has_block('orthodox-calendar-block/orthodox-calendar-block', get_the_ID()) ) {
		wp_enqueue_script('orthocalbl-script');
	}
}
add_action('wp_enqueue_scripts','orthocalbl_enqueue_if_block_is_present');
add_action('admin_enqueue_scripts','orthocalbl_enqueue_if_block_is_present');



/**
 * Convert Windows-1251 content to UTF-8.
 *
 * @param string $content string to convert
 * @return string
 */
function orthocalbl_content_to_utf8( $content ) {
	if ( !is_string( $content ) || empty($content) ) {
		return '';
	}

	$str_return = $content;

	if ( function_exists( 'mb_convert_encoding' ) ) {
		$converted = mb_convert_encoding( $content, 'UTF-8', 'Windows-1251' );
		if ( $converted !== false ) {
			$str_return = $converted;
		}
	} else if ( function_exists( 'iconv' ) ) {
		$converted = iconv( 'Windows-1251', 'UTF-8//IGNORE', $content );
		if ( $converted !== false ) {
			$str_return = $converted;
		}
	}

	return $str_return;
}


/**
 * Allowed HTML tags and atts
 *
 * @return array
 */
function orthocalbl_get_allowed_html() {
	return array(
		'p'      => array( 'class' => true ),
		'span'   => array( 'class' => true ),
		'a'      => array(
			'class'               => true,
			'href'                => true,
			'title'               => true,
			'data-orthodox-popup' => true,
			'target'			  => true,
		),
		'img'    => array(
			'src'    => true,
			'alt'    => true,
			'title'  => true,
			'border' => true,
			'width'  => true,
			'height' => true,
		),
		'b'      => array(),
		'strong' => array(),
		'i'      => array(),
		'em'     => array(),
		'sup'    => array(),
		'br'     => array(),
	);
}

function orthocalbl_get_site_url( $lang ) {
	$rootPath = "https://" . ORTHODOX_CALENDAR_BLOCK_ALLOWED_HOST . "/";
	$langPath = ($lang == "en") ? "" :  $lang . "/";
	$calendarPath = "calendar/";

	return $rootPath . $langPath . $calendarPath;
}

/**
 * Convert relative URLs in selected remote tags to absolute safe URLs.
 *
 * @param string $html Remote HTML.
 * @return string
 */
function orthocalbl_normalize_remote_urls( $html, $lang ) {
	$site_url = orthocalbl_get_site_url( $lang );

	foreach ( array( 'href', 'src' ) as $attribute ) {
		$html = preg_replace_callback(
			'/<' . ( 'href' === $attribute ? 'a' : 'img' ) . '\\b[^>]*\\s' . $attribute . '\\s*=\\s*(["\'])(.*?)\\1[^>]*>/i',
			function ( $matches ) use ( $attribute, $site_url, $lang ) {
				$url = html_entity_decode( $matches[2], ENT_QUOTES, 'UTF-8' );
				if ( '' === $url || 0 === strpos( $url, '#' ) || preg_match( '#^javascript:#i', $url ) ) {
					return $matches[0];
				}

				$absolute = wp_http_validate_url( $url ) ? $url : '';
				if ( '' === $absolute ) {
					$absolute = esc_url_raw( $url, array( 'http', 'https' ) );
				}

				if ( '' !== $absolute && 0 !== strpos( $absolute, 'http://' ) && 0 !== strpos( $absolute, 'https://' ) ) {
					$absolute = trailingslashit( $site_url ) . ltrim( $url, '/' );
				}

				if ( '' === $absolute || ! orthocalbl_is_allowed_remote_url( $absolute, $lang ) ) {
					return preg_replace( '/\\s' . preg_quote( $attribute, '/' ) . '\\s*=\\s*(["\'])(.*?)\\1/i', '', $matches[0] );
				}

				return preg_replace_callback(
					'/\\s' . preg_quote( $attribute, '/' ) . '\\s*=\\s*(["\'])(.*?)\\1/i',
					function ( $attribute_match ) use ( $attribute, $absolute ) {
						return ' ' . $attribute . '="' . esc_attr( $absolute ) . '"';
					},
					$matches[0]
				);
			},
			$html
		);
	}

	return is_string( $html ) ? $html : '';
}

/**
 * Return allowed base URL paths for the selected language.
 *
 * @return array
 */
function orthocalbl_get_allowed_paths( $lang ) {
	$site_url = orthocalbl_get_site_url( $lang );
	$parts  = wp_parse_url( $site_url );
	$path   = isset( $parts['path'] ) ? untrailingslashit( $parts['path'] ) : '';
	return array( $path );
}

/**
 * Determine whether a remote URL is permitted.
 *
 * @param string $url URL.
 * @return bool
 */
function orthocalbl_is_allowed_remote_url( $url, $lang ) {
	$url = esc_url_raw( $url );
	if ( '' === $url ) {
		return false;
	}

	$parts = wp_parse_url( $url );
	if ( empty( $parts['scheme'] ) || empty( $parts['host'] ) ) {
		return false;
	}

	if ( 'https' !== strtolower( $parts['scheme'] ) || ORTHODOX_CALENDAR_BLOCK_ALLOWED_HOST !== strtolower( $parts['host'] ) ) {
		return false;
	}

	$path = isset( $parts['path'] ) ? $parts['path'] : '/';
	foreach ( orthocalbl_get_allowed_paths( $lang ) as $allowed_path ) {
		if ( 0 === strpos( untrailingslashit( $path ), $allowed_path ) ) {
			return true;
		}
	}

	return false;
}

/**
 * Replace the known popup inline JavaScript with a safe data attribute.
 *
 * @param string $html Calendar HTML.
 * @return string
 */
function orthocalbl_prepare_popup_links( $html ) {
	if ( ! is_string( $html ) || '' === $html ) {
		return '';
	}

	$dom = new DOMDocument;                 		// init new DOMDocument
	$dom->loadHTML($html);                  		// load HTML into it
	$xpath = new DOMXPath($dom);            		// create a new XPath
	$nodes = $xpath->query('//*[@onclick]');  		// Find elements with an onclick attribute
	foreach ($nodes as $node) {              		// Iterate over found elements
		$node->removeAttribute('onclick');    		// Remove onclick attribute
	}
	$anchors = $dom->getElementsByTagName("a");
	foreach ($anchors as $link) {              		// Iterate over found elements
		$link->setAttribute('target', '_blank');    // Add attribute to open in new window by default
	}
	
	return $dom->saveHTML();
}

function orthocalbl_check_tag_attribute_urls( $html, $tagname, $att, $lang ) {
	$regex_tag = '/<' . $tagname . '\b[^>]*>/i';
	$regex_att = '/\s' . $att . '\s*=\s*(["\'])(.*?)\1/i';

	return preg_replace_callback(
		$regex_tag,
		function ( $matches ) use ( $regex_att, $lang ) {
			$tag = $matches[0];
			if ( preg_match( $regex_att, $tag, $href ) ) {
				$url = html_entity_decode( $href[2], ENT_QUOTES, 'UTF-8' );
				if ( ! orthocalbl_is_allowed_remote_url( $url, $lang ) ) {
					$tag = preg_replace( $regex_att, '', $tag );
				}
			}
			return $tag;
		},
		$html
	);
}

/**
 * Sanitize remote HTML and remove unapproved URLs.
 *
 * @param string $html Calendar HTML.
 * @return string
 */
function orthocalbl_sanitize_html( $html, $lang ) {
	if ( empty($html) ||  ! is_string( $html ) ) {
		return '';
	}

	$html = orthocalbl_prepare_popup_links( $html );
	$html = orthocalbl_normalize_remote_urls( $html, $lang );
	$html = orthocalbl_check_tag_attribute_urls( $html, 'a', 'href', $lang );
	$html = orthocalbl_check_tag_attribute_urls( $html, 'img', 'src', $lang );
	$html = wp_kses( $html, orthocalbl_get_allowed_html() );

	return is_string( $html ) ? $html : '';
}


function orthocalbl_get_languages() {
	return [
		[ "label" => __("English", "orthocalbl"), "code" => "en" ],
		[ "label" => __("Russian", "orthocalbl"), "code" => "ru" ]
	];
}


function orthocalbl_validate_languate_code( $lang ) {
	$langs = orthocalbl_get_languages();

	foreach ( $langs as $data ) {
		foreach ( $data as $key => $value ) {
			if ( $key === "code" && $value === $lang ) {
				return true;
			}
		}
	}

	return false;
}

// For logged-in users
add_action('wp_ajax_orthocalbl_request', 'orthocalbl_ajax_request');
// For non-logged-in users
add_action('wp_ajax_nopriv_orthocalbl_request', 'orthocalbl_ajax_request');
function orthocalbl_ajax_request() {

	if ( !isset( $_REQUEST['ocnonce'] ) || !wp_verify_nonce( $_REQUEST['ocnonce'], 'orthocalbl-request' ) ) {
		wp_send_json_error( wp_kses_post("<p>Nonce shall pass.</p>") );
	}


	$contents = '<p>No data</p>';
	$editor = orthocalbl_get_request_var_int('editor', 0, 0, 1);
	$liveinfo = orthocalbl_get_request_var_int('liveinfo', 1, 0, 1);

	$dt = orthocalbl_get_request_var_int('dt', 1, 0, 1);
	$header = orthocalbl_get_request_var_int('header', 1, 0, 1);
	$lives = orthocalbl_get_request_var_int('lives', 3, 0, 1);
	$scripture = orthocalbl_get_request_var_int('scripture', 1, 0, 1);
	$trp = orthocalbl_get_request_var_int('trp', 0, 0, 1);
	$lang = orthocalbl_get_request_var_string('language', "en");

	// default to English if bad language code sent
	if ( ! orthocalbl_validate_languate_code($lang) ) {
		$lang = "en";
	}

	if ( !$liveinfo ) {
		$contents = orthocalbl_get_static_text($dt, $header, $lives, $scripture, $trp);
	} else {
		$date = getdate();
		$month = orthocalbl_get_request_var_int('month', $date['mon'], 1, 12 );
		$year = orthocalbl_get_request_var_int('year', $date['year'], 1, 31 );
		$day = orthocalbl_get_request_var_int('today', $date['mday'], 1900, 2100 );

		if ( ! checkdate( $month, $day, $year ) ) {
			wp_send_json_error( 'Invalid date: ' . $month . ' ' . $day . ', ' . $year, 400 );
		}

		$root_path = orthocalbl_get_site_url($lang);
		$remote_path = $root_path . "calendar2.php";

		$remote_path = add_query_arg(
			array(
				'month'     => $month,
				'today'     => $day,
				'year'      => $year,
				'dt'        => $dt,
				'header'    => $header,
				'lives'     => $lives,
				'trp'       => $trp,
				'scripture' => $scripture,
			),
			$remote_path
		);

		$response = wp_remote_get(
			$remote_path,
			array(
				'timeout'     => 15,
				'redirection' => 3,
				'user-agent'  => 'Orthodox Calendar Block/' . ORTHODOX_CALENDAR_BLOCK_VERSION . '; ' . home_url( '/' ),
			)
		);

		// this checks for 200 response code also
		$body = wp_remote_retrieve_body( $response );

		if ( !empty($body) ) {
			$contents = orthocalbl_content_to_utf8( $body );
		} else if ( $editor ) {
			$contents = orthocalbl_get_static_text($dt, $header, $lives, $scripture, $trp);
		} else {
			$contents = "<p>Blessed is he who comes in the name of the LORD.</p>";
		}
	}

	$contents = orthocalbl_sanitize_html( $contents, $lang );

    wp_send_json_success($contents);
}


/**
 * Get named var value from reqeust
 *
 * @param string $name
 * @param integer $default
 * @return integer
 */
function orthocalbl_get_request_var_int($name, $default, $min, $max) {
	if ( !isset( $_REQUEST[$name] ) ) {
		return $default;
	}
	
	$value = absint( wp_unslash($_REQUEST[$name]) );
	$inrang = ( $value < $min || $max < $value  );
	return ( $inrang ) ? $default : $value;
}



/**
 * Retrieve and validate an integer request value.
 *
 * @param string $key Request parameter.
 * @param int    $default Default value.
 * @param int    $min Minimum value.
 * @param int    $max Maximum value.
 * @return int
 */
function orthocalbl_get_request_int( $key, $default, $min, $max ) {
	if ( ! isset( $_POST[ $key ] ) ) {
		return $default;
	}

	$value = absint( wp_unslash( $_POST[ $key ] ) );
	return ( $value < $min || $value > $max ) ? $default : $value;
}


/**
 * Get named var value from reqeust
 *
 * @param string $name
 * @param string $default
 * @return string
 */
function orthocalbl_get_request_var_string($name, $default = "") {
	if (isset( $_REQUEST[$name] )) {
		return (string)wp_unslash($_REQUEST[$name]);
	}
	return $default;
}

/**
 * Determing if running on a local server
 *
 * @return boolean
 */
function orthocalbl_is_local() {
  $whitelist = array(
    '127.0.0.1',
    '::1'
  );

  $remote_addr = array_key_exists('REMOTE_ADDR', $_SERVER) ? sanitize_text_field(wp_unslash($_SERVER['REMOTE_ADDR'])) : '';

  $isLocal = in_array($remote_addr , $whitelist);

  return $isLocal;
}


/**
 * Return contents from a static calendar file
 *
 * @param string $file
 * @return string
 */
function orthocalbl_get_static_file_text($file) {
	$path = ORTHOCAL_DIR . '/build/static-text/' . $file . '.html';
	$contents = '';

	try {
		$contents = file_get_contents($path);
	} catch (\Throwable $th) {
		// ignore and return empty string
	}

	return $contents;
}


/**
 * Return contents of static calendar files
 *
 * @param integer $date
 * @param integer $header
 * @param integer $lives
 * @param integer $scripture
 * @param integer $troparion
 * @return string
 */
function orthocalbl_get_static_text($date, $header, $lives, $scripture, $troparion) {
	$contents = '';

	$contents .= orthocalbl_get_date($date);
	$contents .= orthocalbl_get_header($header);
	$contents .= orthocalbl_get_lives($lives);
	$contents .= orthocalbl_get_scriptures($scripture);
	$contents .= orthocalbl_get_troparion($troparion);

	return $contents;
}

/**
 * Get date contents
 *
 * @param integer $date
 * @return string
 */
function orthocalbl_get_date($date) {
	return $date ? orthocalbl_get_static_file_text('date') : '';
}

/**
 * Get header contents
 *
 * @param integer $date
 * @return string
 */
function orthocalbl_get_header($header) {
	return $header ? orthocalbl_get_static_file_text('header') : '';
}

/**
 * Get lives contents
 *
 * @param integer $date
 * @return string
 */
function orthocalbl_get_lives($lives) {
	return $lives ? orthocalbl_get_static_file_text('lives-' . $lives) : '';
}

/**
 * Get scripture contents
 *
 * @param integer $date
 * @return string
 */
function orthocalbl_get_scriptures($scripture) {
	return $scripture ? orthocalbl_get_static_file_text('scripture-' . $scripture) : '';
}

/**
 * Get troparion contents
 *
 * @param integer $date
 * @return string
 */
function orthocalbl_get_troparion($troparion) {
	return $troparion ? orthocalbl_get_static_file_text('troparion-' . $troparion) : '';
}