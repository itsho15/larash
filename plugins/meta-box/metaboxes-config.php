<?php
function your_prefix_get_meta_box($meta_boxes) {
	$prefix = 'larash-';

	$meta_boxes[] = array(
		'id'         => 'untitled',
		'title'      => esc_html__('Untitled Metabox', 'larash'),
		'post_types' => array('post', 'page'),
		'context'    => 'advanced',
		'priority'   => 'default',
		'autosave'   => 'true',
		'fields'     => array(
			array(
				'id'   => $prefix . 'text_1',
				'type' => 'text',
				'name' => esc_html__('Text', 'larash'),
			),
			array(
				'id'          => $prefix . 'url_2',
				'type'        => 'url',
				'name'        => esc_html__('URL', 'larash'),
				'desc'        => esc_html__('Description', 'larash'),
				'placeholder' => esc_html__('url', 'larash'),
				'attributes'  => array(),
			),
			array(
				'id'   => $prefix . 'range_3',
				'name' => esc_html__('Range', 'larash'),
				'type' => 'range',
				'max'  => '9',
				'step' => 'any',
			),
			array(
				'id'   => $prefix . 'wysiwyg_4',
				'name' => esc_html__('WYSIWYG', 'larash'),
				'type' => 'wysiwyg',
				'desc' => esc_html__('Description', 'larash'),
			),
			array(
				'id'   => $prefix . 'map_5',
				'type' => 'map',
				'name' => esc_html__('Map', 'larash'),
			),
			array(
				'id'   => $prefix . 'datetime_6',
				'type' => 'datetime',
				'name' => esc_html__('Date Time Picker', 'larash'),
				'desc' => esc_html__('date time', 'larash'),
			),
			array(
				'id'         => $prefix . 'post_7',
				'type'       => 'post',
				'name'       => esc_html__('Post', 'larash'),
				'post_type'  => 'post',
				'field_type' => 'select_advanced',
			),
			array(
				'id'         => $prefix . 'taxonomy_8',
				'type'       => 'taxonomy',
				'name'       => esc_html__('Taxonomy', 'larash'),
				'taxonomy'   => 'category',
				'field_type' => 'select',
			),
			array(
				'id'         => $prefix . 'taxonomy_advanced_9',
				'type'       => 'taxonomy_advanced',
				'name'       => esc_html__('Taxonomy Advanced', 'larash'),
				'taxonomy'   => 'category',
				'field_type' => 'select',
			),
			array(
				'id'        => $prefix . 'file_10',
				'type'      => 'file',
				'name'      => esc_html__('File', 'larash'),
				'mime_type' => '',
			),
			array(
				'id'   => $prefix . 'image_11',
				'type' => 'image',
				'name' => esc_html__('Image Upload', 'larash'),
			),
			array(
				'id'               => $prefix . 'video_12',
				'type'             => 'video',
				'name'             => esc_html__('Video', 'larash'),
				'max_file_uploads' => 4,
			),
			array(
				'id'   => $prefix . 'image_advanced_13',
				'type' => 'image_advanced',
				'name' => esc_html__('Image Advanced', 'larash'),
			),
		),
	);

	return $meta_boxes;
}
add_filter('rwmb_meta_boxes', 'your_prefix_get_meta_box', 1);