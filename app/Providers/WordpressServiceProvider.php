<?php
namespace App\Providers;
use Illuminate\Support\ServiceProvider;

class WordpressServiceProvider extends ServiceProvider {

	/** @var \App\Helpers\LumenHelper $lumenHelper **/
	/** @var \App\Helpers\WpHelper $wpHelper **/
	private $wpHelper, $lumenHelper, $absolutePath;

	/**
	 * WordpressServiceProvider constructor.
	 * @param $app \Illuminate\Contracts\Foundation\Application
	 */
	public function __construct($app) {
		parent::__construct($app);
		$this->lumenHelper = $this->app->make('lumenHelper');
		$this->wpHelper    = $this->lumenHelper->wpHelper();
	}

	/**
	 * Register any application services.
	 * @return void
	 */
	public function register() {
		/*
			|--------------------------------------------------------------------------
			| Codestar Framework option pages
			|--------------------------------------------------------------------------
			|
		*/

		if (!class_exists('CSF')) {
			$this->wpHelper->WpRegister('plugins/codestar/codestar-framework');
			$this->wpHelper->WpRegister('plugins/codestar/config');
		}
		/*
			|--------------------------------------------------------------------------
			| visualcomposer
			|--------------------------------------------------------------------------
			|
		*/
		$this->wpHelper->WpRegister('plugins/visualcomposer/Vc');

		/*
			|--------------------------------------------------------------------------
			| Metaboxes
			|--------------------------------------------------------------------------
			|
		*/
		$this->wpHelper->WpRegister('plugins/meta-box/meta-box');
		$this->wpHelper->WpRegister('plugins/meta-box/metaboxes-config');

		/** Add FrontEnd Widget **/
		$this->wpHelper
			->addWidget(
				\App\Widgets\ExampleFrontEndWidget::class
			);

		/** Add Admin Bar Nodes **/
		$this->wpHelper
			->addAdminBarNode(
				false,
				'lumen_bar_node2',
				'Lumen Bar Node',
				'#'
			)->addAdminBarNode(
			'lumen_bar_node2',
			'lumen_bar_node2_child1',
			'Node Child 1',
			'#'
		)->addAdminBarNode(
			'lumen_bar_node2',
			'lumen_bar_node2_child2',
			'Node Child 2',
			'#'
		)->addAdminBarNode(
			'lumen_bar_node2',
			'lumen_bar_node2_child3',
			'Node Child 2',
			'#'
		);

		/** Add Shortcodes **/
		$this->wpHelper
			->addShortcode(
				'auth_register',
				function ($parameters, $content) {
					return $this->app->call('\App\Http\Controllers\Auth\RegisterShortcodeController@template', compact('parameters', 'content'));
				}
			)
			->addShortcode(
				'auth_login',
				function ($parameters, $content) {
					return $this->app->call('\App\Http\Controllers\Auth\LoginShortcodeController@template', compact('parameters', 'content'));
				}
			);

		/** Add Nav Menu MetaBoxes **/
		$this->wpHelper->addMetaBox(
			'example_menu_meta_box',
			'Truediv Routes',
			function ($object, $arguments) {
				$this->lumenHelper
					->response($this->app->call('\App\Http\Controllers\ExampleMetaBoxController@menuMetaBox', compact('object', 'arguments')))
					->sendContent();
			},
			'nav-menus',
			'side',
			'default',
			2
		);

		/** Add Dashboard Widget **/

		$this->wpHelper
			->addAdminPanel(
				'lumen_page',
				'Larash',
				'Larash',
				function () {
					$this->lumenHelper
						->response($this->lumenHelper->view('admin-intro'))
						->sendContent();
				},
				'manage_options',
				'',
				null
			)
			->addAdminSubPanel(
				'lumen_page',
				'lumen_sub_page',
				'WpPost Demo',
				'WpPost Demo',
				function () {
					$this->lumenHelper
						->response($this->app->call('\App\Http\Controllers\ExampleAdminController@template'))
						->sendContent();
				},
				'manage_options'
			)->addAdminSubPanel(
			'lumen_page',
			'lumen_settings',
			'Settings',
			'Settings',
			function () {
				$this->lumenHelper
					->response($this->app->call('\App\Http\Controllers\SettingsController@template'))
					->sendContent();
			},
			'manage_options'
		);

		/** Add WP Rest API Route **/
//        $this->wpHelper
		//            ->addRestRoute('wp-lumen/api/v1', '/test', array(
		//                'methods'  => ['get'],
		//                'callback' => function(){
		//                    return $this->app->call('\App\Http\Controllers\ExampleWpRestRouteController@get');
		//                },
		//            ));

		/** Add CSS & Scripts **/
		$this->wpHelper
			->enqueueStyle(
				'lumen',
				$this->lumenHelper->asset('resources/assets/build/example.css'),
				array(),
				'1.0.0',
				'all'
			)
			->enqueueScript(
				'lumen',
				$this->lumenHelper->asset('resources/assets/build/example.js'),
				array('jquery'),
				'1.0.0',
				true
			);

	}
}
