<?php
/**
 * @link              https://hishamdev.info/
 * @since             1.0
 * @package           https://documentation.larash.hishamdev.info/docs/larash-plugin/
 * @wordpress-plugin
 *
 * Plugin Name:       Larash Plugin Framework
 * Plugin URI:        https://documentation.larash.hishamdev.info/docs/larash-plugin/
 * Description:       (Lumen Framework 5.6 , codestar framework , custom post types this plugin for developers)
 * Version:           1.0
 * Author:            hisham hilmy
 * Author URI:        https://hishamdev.info/
 * License:           © Copyright 2017 All Rights Reserved.
 * License URI:       http://www.SomeDev.com/terms
 */

/*
|--------------------------------------------------------------------------
| Environment Settings
|--------------------------------------------------------------------------
| To make our plugin portable, we don't use an .env file.  However, if you
| want to use one, simple add one to the plugin's directory.
 */
putenv('APP_ENV=production');
putenv('APP_DEBUG=true');
/*
|--------------------------------------------------------------------------
| Create The Application
|--------------------------------------------------------------------------
| First we need to get an application instance. This creates an instance
| of the application / container and bootstraps the application so it
| is ready to receive HTTP / Console requests from the environment.
 */
$app = require __DIR__ . '/bootstrap/app.php';

/*
|--------------------------------------------------------------------------
| Override the Application Error Reporting Level
|--------------------------------------------------------------------------
| You can override the error reporting level to disable output and prevent
| warning thrown by other plugins.
 */
error_reporting((config('app.debug') ? E_ALL : 0));

/*
|--------------------------------------------------------------------------
| Resolve Plugin from LumenHelper Example
|--------------------------------------------------------------------------
| You can resolve each plugin by it's namespace.
 */
//dd(\App\Helpers\LumenHelper::plugin('App')->config());

if (!function_exists('wpLumen')) {
	function wpLumen($namespace = null) {
		return \App\Helpers\LumenHelper::plugin($namespace);
	}
}
/*
|--------------------------------------------------------------------------
| Codestar Framework option pages
|--------------------------------------------------------------------------
|
 */
if (!class_exists('CSF')) {
	require_once plugin_dir_path(__FILE__) . '/plugins/codestar/codestar-framework.php';
	require_once plugin_dir_path(__FILE__) . '/plugins/codestar/config.php';
}
/*
|--------------------------------------------------------------------------
| visualcomposer
|--------------------------------------------------------------------------
|
 */
require_once plugin_dir_path(__FILE__) . '/plugins/visualcomposer/Vc.php';