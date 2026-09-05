<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
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