<?php
/**
 * Plugin Name:       Orthodox Calendar Block
 * Description:       Displays daily Orthodox Calendar information
 * Version:           0.2.0
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

define('ORTHOCAL_DIR', __DIR__);


/**
 * Registers the block(s) metadata from the `blocks-manifest.php` and registers the block type(s)
 * based on the registered block metadata. Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */
function create_block_orthodox_calendar_block_init() {
	// Create a nonce
    $nonce = wp_create_nonce('orthodox-calendar-request');

    // Register your block script
    wp_register_script(
        'orthodox-calendar-block-script',
        plugins_url('./orthodox-calendar-block.js', __FILE__),
        array(),
        '0.2.0',
		true
    );

	wp_localize_script( 'orthodox-calendar-block-script', 'oc_data', array(
        'url' => admin_url('admin-ajax.php?action=orthodox_calendar_request', __FILE__),
        'ocnonce' => $nonce,
	));

	wp_enqueue_script('orthodox-calendar-block-script');

	wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
}
add_action( 'init', 'create_block_orthodox_calendar_block_init' );



  // For logged-in users
add_action('wp_ajax_orthodox_calendar_request', 'orthodox_calendar_request');
// For non-logged-in users
add_action('wp_ajax_nopriv_orthodox_calendar_request', 'orthodox_calendar_request');
function orthodox_calendar_request() {

	if ( !isset( $_REQUEST['ocnonce'] ) || !wp_verify_nonce( $_REQUEST['ocnonce'], 'orthodox-calendar-request' ) ) {
		wp_send_json_error( wp_kses_post("<p>Nonce shall pass.</p>") );
	}


	$contents = '<p>No data</p>';
	$editor = getRequestVarInt('editor', 0);
	$liveinfo = getRequestVarInt('liveinfo');

	$dt = getRequestVarInt('dt');
	$header = getRequestVarInt('header');
	$lives = getRequestVarInt('lives', 3);
	$scripture = getRequestVarInt('scripture');
	$trp = getRequestVarInt('trp', 0);

	if ( !$liveinfo ) {
		$contents = getStaticText($dt, $header, $lives, $scripture, $trp);
	} else {


		// Initialize an URL to the variable 
		$url = "https://www.holytrinityorthodox.com/calendar/calendar2.php"; 
		
		// Use get_headers() function 
		$headers = @get_headers($url);
		
		// Use condition to check the existence of URL 
		if ($headers && strpos( $headers[0], '200')) {
			$date = getdate();
			$month = getRequestVarInt('month', $date['mon']);
			$year = getRequestVarInt('year', $date['year']);
			$today = getRequestVarInt('today', $date['mday']);

			$path = "https://www.holytrinityorthodox.com/calendar/calendar2.php?month=$month&today=$today&year=$year&dt=$dt&header=$header&lives=$lives&scripture=$scripture&trp=$trp";

			$contents = file_get_contents($path);
		} 
		else if ($editor) {
			$contents = getStaticText($dt, $header, $lives, $scripture, $trp);
		} else {
			$contents = "<p>Blessed is he who comes in the name of the LORD.</p>";
		}

	}

    wp_send_json_success(wp_kses_post($contents));
}


/**
 * Get named var value from reqeust
 *
 * @param string $name
 * @param integer $default
 * @return integer
 */
function getRequestVarInt($name, $default = 1) {
	if (isset( $_REQUEST[$name] )) {
		return (int)wp_unslash($_REQUEST[$name]);
	}
	return $default;
}

/**
 * Determing if running on a local server
 *
 * @return boolean
 */
function OrthodoxCalendar_is_local() {
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
function getStaticFileText($file) {
	$path = ORTHOCAL_DIR . '/static-text/' . $file . '.html';
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
function getStaticText($date, $header, $lives, $scripture, $troparion) {
	$contents = '';

	$contents .= getOCDate($date);
	$contents .= getOCHeader($header);
	$contents .= getOCLives($lives);
	$contents .= getOCScriptures($scripture);
	$contents .= getOCTroparion($troparion);

	return $contents;
}

/**
 * Get date contents
 *
 * @param integer $date
 * @return string
 */
function getOCDate($date) {
	return $date ? getStaticFileText('date') : '';
}

/**
 * Get header contents
 *
 * @param integer $date
 * @return string
 */
function getOCHeader($header) {
	return $header ? getStaticFileText('header') : '';
}

/**
 * Get lives contents
 *
 * @param integer $date
 * @return string
 */
function getOCLives($lives) {
	return $lives ? getStaticFileText('lives-' . $lives) : '';
}

/**
 * Get scripture contents
 *
 * @param integer $date
 * @return string
 */
function getOCScriptures($scripture) {
	return $scripture ? getStaticFileText('scripture-' . $scripture) : '';
}

/**
 * Get troparion contents
 *
 * @param integer $date
 * @return string
 */
function getOCTroparion($troparion) {
	return $troparion ? getStaticFileText('troparion-' . $troparion) : '';
}