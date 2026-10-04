<?php
// This file is generated. Do not modify it manually.
return array(
	'orthodox-calendar-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'orthodox-calendar-block/orthodox-calendar-block',
		'version' => '0.10.1',
		'title' => 'Orthodox Calendar',
		'category' => 'widgets',
		'icon' => 'calendar-alt',
		'description' => 'Displays the daily Orthodox Calendar information',
		'example' => array(
			
		),
		'attributes' => array(
			'dp' => array(
				'type' => 'integer',
				'default' => 0
			),
			'dt' => array(
				'type' => 'integer',
				'default' => 1
			),
			'hh' => array(
				'type' => 'integer',
				'default' => 1
			),
			'll' => array(
				'type' => 'integer',
				'default' => 3
			),
			'ss' => array(
				'type' => 'integer',
				'default' => 1
			),
			'tt' => array(
				'type' => 'integer',
				'default' => 1
			),
			'pw' => array(
				'type' => 'integer',
				'default' => 600
			),
			'ph' => array(
				'type' => 'integer',
				'default' => 500
			),
			'pr' => array(
				'type' => 'string',
				'default' => 'yes'
			),
			'pd' => array(
				'type' => 'string',
				'default' => 'yes'
			),
			'ps' => array(
				'type' => 'string',
				'default' => 'yes'
			),
			'ln' => array(
				'type' => 'array',
				'default' => array(
					'en',
					'ru'
				)
			),
			'dl' => array(
				'type' => 'string',
				'default' => 'en'
			),
			'btn_language' => array(
				'type' => 'integer',
				'default' => '0'
			),
			'btn_today' => array(
				'type' => 'integer',
				'default' => '1'
			),
			'btn_day' => array(
				'type' => 'integer',
				'default' => '1'
			),
			'text_prev' => array(
				'type' => 'string',
				'default' => '❰'
			),
			'text_prev_acc' => array(
				'type' => 'string',
				'default' => 'Previous Day'
			),
			'text_curr' => array(
				'type' => 'string',
				'default' => '⬤'
			),
			'text_curr_acc' => array(
				'type' => 'string',
				'default' => 'Today'
			),
			'text_next' => array(
				'type' => 'string',
				'default' => '❱'
			),
			'text_next_acc' => array(
				'type' => 'string',
				'default' => 'Next Day'
			),
			'text_date' => array(
				'type' => 'string',
				'default' => 'Show Date Picker'
			),
			'text_date_acc' => array(
				'type' => 'string',
				'default' => 'Pick Date'
			),
			'text_week_prev' => array(
				'type' => 'string',
				'default' => '❰❰'
			),
			'text_week_prev_acc' => array(
				'type' => 'string',
				'default' => 'Previous Week'
			),
			'text_week_next' => array(
				'type' => 'string',
				'default' => '❱❱'
			),
			'text_week_next_acc' => array(
				'type' => 'string',
				'default' => 'Previous Week'
			),
			'text_language' => array(
				'type' => 'string',
				'default' => '”'
			),
			'text_language_acc' => array(
				'type' => 'string',
				'default' => 'Switch Language'
			)
		),
		'supports' => array(
			'color' => array(
				'text' => true,
				'background' => true
			),
			'interactivity' => true
		),
		'textdomain' => 'orthodox-calendar-block',
		'viewScript' => 'file:./view.js',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'styles' => array(
			array(
				'name' => 'none',
				'label' => 'None',
				'isDefault' => true
			),
			array(
				'name' => 'blue',
				'label' => 'Blue'
			),
			array(
				'name' => 'grey',
				'label' => 'Grey'
			),
			array(
				'name' => 'red',
				'label' => 'Red'
			)
		)
	)
);
