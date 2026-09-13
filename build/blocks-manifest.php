<?php
// This file is generated. Do not modify it manually.
return array(
	'orthodox-calendar-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'orthodox-calendar-block/orthodox-calendar-block',
		'version' => '0.1.0',
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
