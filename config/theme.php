<?php

return [
	/*

	*/
	'custom_routes'       => [
		'custom1', 'custom2',
	],
	/*
		    |--------------------------------------------------------------------------
		    | Add theme support
		    |--------------------------------------------------------------------------
		    |
		    | Arrays passed to the add_theme_support function.
		    |
	*/

	'add_theme_support'   => [
		[
			'feature' => 'post-thumbnails',
			'options' => ['post'],
		],

	],

	/*
		    |--------------------------------------------------------------------------
		    | Register custom post types
		    |--------------------------------------------------------------------------
		    | A series of array taking the form of:
		    |
		    | name: string,
		    | slug: string,
		    | [ args: array ]
		    |
	*/

	'post_types'          => [

		[
			'name' => 'products_new',
			'slug' => 'products_new',
			'args' => [
				'labels'             => [
					'name'               => _x('products_new', 'Post Type General Name', 'text_domain'),
					'singular_name'      => _x('products_new', 'Post Type Singular Name', 'text_domain'),
					'menu_name'          => __('Products', 'text_domain'),
					'parent_item_colon'  => __('Parent Item:', 'text_domain'),
					'all_items'          => __('All Items', 'text_domain'),
					'view_item'          => __('View Item', 'text_domain'),
					'add_new_item'       => __('Add New Item', 'text_domain'),
					'add_new'            => __('Add New', 'text_domain'),
					'edit_item'          => __('Edit Item', 'text_domain'),
					'update_item'        => __('Update Item', 'text_domain'),
					'search_items'       => __('Search Item', 'text_domain'),
					'not_found'          => __('Not found', 'text_domain'),
					'not_found_in_trash' => __('Not found in Trash', 'text_domain'),
				],
				'description'        => __('Description.', 'your-plugin-textdomain'),
				'public'             => true,
				'publicly_queryable' => true,
				'show_ui'            => true,
				'show_in_menu'       => true,
				'query_var'          => true,
				'rewrite'            => array('slug' => 'products_new'),
				'capability_type'    => 'post',
				'has_archive'        => true,
				'hierarchical'       => true,
				'menu_position'      => null,
				'taxonomies'         => array('productsCat'),
				'menu_icon'          => 'dashicons-cart',
				'supports'           => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'trackbacks', 'custom-fields', 'page-attributes', 'post-formats', 'comments'),

			],
		],

		[
			'name' => 'news',
			'slug' => 'news',
			'args' => [
				'labels' => [
					'name'               => _x('news', 'Post Type General Name', 'text_domain'),
					'singular_name'      => _x('news', 'Post Type Singular Name', 'text_domain'),
					'menu_name'          => __('news', 'text_domain'),
					'parent_item_colon'  => __('Parent Item:', 'text_domain'),
					'all_items'          => __('All Items', 'text_domain'),
					'view_item'          => __('View Item', 'text_domain'),
					'add_new_item'       => __('Add New Item', 'text_domain'),
					'add_new'            => __('Add New', 'text_domain'),
					'edit_item'          => __('Edit Item', 'text_domain'),
					'update_item'        => __('Update Item', 'text_domain'),
					'search_items'       => __('Search Item', 'text_domain'),
					'not_found'          => __('Not found', 'text_domain'),
					'not_found_in_trash' => __('Not found in Trash', 'text_domain'),
				],

			],
		],

	],

	/*
		    |--------------------------------------------------------------------------
		    | Register custom taxonomies
		    |--------------------------------------------------------------------------
		    | A series of array taking the form of:
		    |
		    | name: string,
		    | slug: string,
		    | [ object_type: array|string ],
		    | [ args: array ]
		    |
	*/

	'taxonomies'          => [
		[
			'name'        => 'productsCat',
			'slug'        => 'productsCat-slug',
			'object_type' => 'products_new',
			'args'        => [],
		],
		[
			'name'        => 'news',
			'slug'        => 'news-slug',
			'object_type' => 'news',
			'args'        => [],
		],

	],

	/*
		    |--------------------------------------------------------------------------
		    | Hint Text For Thumbnail
		    |--------------------------------------------------------------------------
		    |
		    | Set your hint text for thumbnails.
		    | For example : 'The default size of thumbnail is 300×200'
		    | the usual Laravel view path has already been registered for you.
		    |
	*/

	'thumbnail_hint_text' => [
		'post' => 'Image size：655 × 368',
	],

	/*
		    |--------------------------------------------------------------------------
		    | Editor Styles
		    |--------------------------------------------------------------------------
		    |
		    | CSS for WordPress's rich editor.
		    |
	*/

	//'editor_styles'       => public_url('css/article-style.css'),

	/*
		    |--------------------------------------------------------------------------
		    | Title Placeholder
		    |--------------------------------------------------------------------------
		    |
		    | Set the tile-placeholder for Custom-Post-Type
		    | key is the slug of custom post type
		    | value is the placeholder text
		    |
	*/

	'title_placeholder'   => [
		'author' => 'Author Name',
		'books'  => 'Book Title',
	],

	/*
		    |--------------------------------------------------------------------------
		    | Remove Menu Page
		    |--------------------------------------------------------------------------
		    |
		    | remove unused page from admin page.
		    |
	*/

	//'remove_menu_page'    => ['edit.php', 'edit-comments.php'],

	/*
		    |---------------------------------------------------------------------------
		    | Navigation menus
		    |---------------------------------------------------------------------------
		    |
		    | Register navigation menus for a theme
		    |
	*/

	'menus'               => ['menu_location' => 'menu_description'],

	/*
		    |--------------------------------------------------------------------------
		    | Image Sizes
		    |--------------------------------------------------------------------------
		    |
		    | Set image-size for custom-post-type
		    |
	*/

	'image_sizes'         => [
		['single--blog', 655, 368, true],
	],

	/*
		    |--------------------------------------------------------------------------
		    | Excerpt Length
		    |--------------------------------------------------------------------------
		    |
		    | Set the length of excerpt
		    |
	*/

	'excerpt_length'      => 100,

	/*
		    |--------------------------------------------------------------------------
		    | Excerpt More String
		    |--------------------------------------------------------------------------
		    |
		    | Excerpt More String
		    |
	*/

	'excerpt_more'        => '...',

	/*
		    |--------------------------------------------------------------------------
		    | Remove Version
		    |--------------------------------------------------------------------------
		    |
		    | If remove the WordPress version meta tag inside <head>
		    |
	*/

	'remove_version'      => false,

	/*
		    |--------------------------------------------------------------------------
		    | Page Templates
		    |--------------------------------------------------------------------------
		    |
		    | Register your page templates.
		    | You can refer the template name by `$post->page_template`.
		    | Chances are that you are going to lookup `$post->page_template` in
		    | controllers to determine which view is going to be used.
		    |
	*/

	'page_templates'      => [
		[
			'post_type' => ['page', 'post'],
			'name'      => 'Template Name',
		],

	],

	/*
		    |--------------------------------------------------------------------------
		    | Admin Page Assets
		    |--------------------------------------------------------------------------
		    |
		    | Enqueuing both scripts and styles to admin page.
		    |
	*/

];