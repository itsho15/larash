<?php
// Control core classes for avoid errors
if (class_exists('CSF')) {

	//
	// Set a unique slug-like ID
	$prefix = 'truediv';

	//
	// Create options
	CSF::createOptions($prefix, array(

		// framework title
		'framework_title'         => 'portfolio <small>by truediv</small>',
		'framework_class'         => '',

		// menu settings
		'menu_title'              => 'Theme Options',
		'menu_slug'               => 'lumenlaravel',
		'menu_type'               => 'menu',
		'menu_capability'         => 'manage_options',
		'menu_icon'               => null,
		'menu_position'           => null,
		'menu_hidden'             => false,
		'menu_parent'             => '',

		// menu extras
		'show_bar_menu'           => true,
		'show_sub_menu'           => true,
		'show_network_menu'       => true,
		'show_in_customizer'      => true,

		'show_search'             => true,
		'show_reset_all'          => true,
		'show_reset_section'      => true,
		'show_footer'             => true,
		'show_all_options'        => true,
		'sticky_header'           => true,
		'save_defaults'           => true,
		'ajax_save'               => true,

		// admin bar menu settings
		'admin_bar_menu_icon'     => '',
		'admin_bar_menu_priority' => 80,

		// footer
		'footer_text'             => 'footer text',
		'footer_after'            => 'after',
		'footer_credit'           => '<p id="footer-left" class="alignleft">
		Thank you for creating with <a href="http://codestarframework.com/" target="_blank">mytheme Framework</a>	</p>',

		// database model
		'database'                => '', // options, transient, theme_mod, network
		'transient_time'          => 0,

		// contextual help
		'contextual_help'         => array(),
		'contextual_help_sidebar' => '',

		// typography options
		'enqueue_webfont'         => true,
		'async_webfont'           => false,

		// others
		'output_css'              => true,

	));

	//
	// Create a section
	CSF::createSection($prefix, array(
		'title'  => 'Tab Title 1',
		'fields' => array(
			//
			// A text field
			array(
				'id'    => 'opttext',
				'type'  => 'text',
				'title' => 'Simple Text',
			),
			array(
				'id'      => 'post_meta',
				'type'    => 'checkbox',
				'title'   => esc_html__('Post Meta', 'TRUEDIV_TEXTDOMAIN'),
				'options' => array(
					'Author'     => 'Author', // 0
					'Categories' => 'Categories', // 2
					'Date'       => 'Date', // 1
				),
				'default' => array('Author', 'Date', 'Categories'),
			),
			array(
				'id'     => 'opt-group-1',
				'type'   => 'group',
				'title'  => 'Group',
				'fields' => array(
					array(
						'id'    => 'opt-text',
						'type'  => 'text',
						'title' => 'Text',
					),
					array(
						'id'    => 'opt-color',
						'type'  => 'color',
						'title' => 'Color',
					),
					array(
						'id'    => 'opt-switcher',
						'type'  => 'switcher',
						'title' => 'Switcher',
					),
				),
			),

		),
	));

	//
	// Create a section
	CSF::createSection($prefix, array(
		'title'  => 'Tab Title 2',
		'fields' => array(

			// A textarea field
			array(
				'id'    => 'opttextarea',
				'type'  => 'textarea',
				'title' => 'Simple Textarea',
			),

		),
	));

}