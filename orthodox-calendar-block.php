<?php
/**
 * Plugin Name:       Orthodox Calendar Block
 * Description:       Displays daily Orthodox Calendar information from 
 * Version:           0.7.0
 * Requires at least: 6.8.0
 * Requires PHP:      7.4
 * Author:            Dustin Vietzke, David L
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       orthocalbl
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
        'url' => admin_url('admin-ajax.php?action=orthodox_calendar_request', __FILE__),
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



  // For logged-in users
add_action('wp_ajax_orthodox_calendar_request', 'orthocalbl_ajax_request');
// For non-logged-in users
add_action('wp_ajax_nopriv_orthodox_calendar_request', 'orthocalbl_ajax_request');
function orthocalbl_ajax_request() {

	if ( !isset( $_REQUEST['ocnonce'] ) || !wp_verify_nonce( $_REQUEST['ocnonce'], 'orthocalbl-request' ) ) {
		wp_send_json_error( wp_kses_post("<p>Nonce shall pass.</p>") );
	}


	$contents = '<p>No data</p>';
	$editor = orthocalbl_get_request_var_int('editor', 0);
	$liveinfo = orthocalbl_get_request_var_int('liveinfo');

	$dt = orthocalbl_get_request_var_int('dt');
	$header = orthocalbl_get_request_var_int('header');
	$lives = orthocalbl_get_request_var_int('lives', 3);
	$scripture = orthocalbl_get_request_var_int('scripture');
	$trp = orthocalbl_get_request_var_int('trp', 0);

	if ( !$liveinfo ) {
		$contents = orthocalbl_get_static_text($dt, $header, $lives, $scripture, $trp);
	} else {
		$date = getdate();
		$month = orthocalbl_get_request_var_int('month', $date['mon']);
		$year = orthocalbl_get_request_var_int('year', $date['year']);
		$today = orthocalbl_get_request_var_int('today', $date['mday']);

		$rootPath = "https://www.holytrinityorthodox.com/calendar/calendar2.php";
		$qsps = "?month=$month&today=$today&year=$year&dt=$dt&header=$header&lives=$lives&scripture=$scripture&trp=$trp";
		$path = $rootPath . $qsps;

		$response = wp_remote_get( $path );
		$body = wp_remote_retrieve_body( $response );

		if ( $body !== '' ) {
			$contents = $body;
		} else if ( $editor ) {
			$contents = orthocalbl_get_static_text($dt, $header, $lives, $scripture, $trp);
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
function orthocalbl_get_request_var_int($name, $default = 1) {
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