
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:App" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App.html">App</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Helpers" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Helpers.html">Helpers</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Helpers_DebugBarWordpressDbCollector" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Helpers/DebugBarWordpressDbCollector.html">DebugBarWordpressDbCollector</a>                    </div>                </li>                            <li data-name="class:App_Helpers_LumenHelper" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Helpers/LumenHelper.html">LumenHelper</a>                    </div>                </li>                            <li data-name="class:App_Helpers_TimezoneHelper" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Helpers/TimezoneHelper.html">TimezoneHelper</a>                    </div>                </li>                            <li data-name="class:App_Helpers_WpHelper" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Helpers/WpHelper.html">WpHelper</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Http" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http.html">Http</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Http_Controllers" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http/Controllers.html">Controllers</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Http_Controllers_Auth" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http/Controllers/Auth.html">Auth</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Http_Controllers_Auth_AuthController" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="App/Http/Controllers/Auth/AuthController.html">AuthController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_Auth_LoginShortcodeController" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="App/Http/Controllers/Auth/LoginShortcodeController.html">LoginShortcodeController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_Auth_RegisterShortcodeController" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="App/Http/Controllers/Auth/RegisterShortcodeController.html">RegisterShortcodeController</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:App_Http_Controllers_Controller" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/Controller.html">Controller</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_ExampleAdminController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/ExampleAdminController.html">ExampleAdminController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_ExampleAuthUserController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/ExampleAuthUserController.html">ExampleAuthUserController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_ExampleCacheController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/ExampleCacheController.html">ExampleCacheController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_ExampleMetaBoxController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/ExampleMetaBoxController.html">ExampleMetaBoxController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_ExamplePostsModelController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/ExamplePostsModelController.html">ExamplePostsModelController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_ExampleRouteThemeViewController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/ExampleRouteThemeViewController.html">ExampleRouteThemeViewController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_ExampleTranslationController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/ExampleTranslationController.html">ExampleTranslationController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_ExampleWpRestRouteController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/ExampleWpRestRouteController.html">ExampleWpRestRouteController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_GlobalController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/GlobalController.html">GlobalController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_SettingsController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/SettingsController.html">SettingsController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_Submissionsfrontcontrol" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/Submissionsfrontcontrol.html">Submissionsfrontcontrol</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_SubmssionsController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/SubmssionsController.html">SubmssionsController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_SubmssionsControllerFront" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/SubmssionsControllerFront.html">SubmssionsControllerFront</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_SubmssionsShortcodeController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/SubmssionsShortcodeController.html">SubmssionsShortcodeController</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Http_Middleware" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http/Middleware.html">Middleware</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Http_Middleware_Authenticate" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Middleware/Authenticate.html">Authenticate</a>                    </div>                </li>                            <li data-name="class:App_Http_Middleware_ExampleMiddleware" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Middleware/ExampleMiddleware.html">ExampleMiddleware</a>                    </div>                </li>                            <li data-name="class:App_Http_Middleware_SilenceWp404s" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Middleware/SilenceWp404s.html">SilenceWp404s</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Models" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Models.html">Models</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Models_JSON" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Models/JSON.html">JSON</a>                    </div>                </li>                            <li data-name="class:App_Models_WpComment" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Models/WpComment.html">WpComment</a>                    </div>                </li>                            <li data-name="class:App_Models_WpCommentMeta" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Models/WpCommentMeta.html">WpCommentMeta</a>                    </div>                </li>                            <li data-name="class:App_Models_WpOptions" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Models/WpOptions.html">WpOptions</a>                    </div>                </li>                            <li data-name="class:App_Models_WpPost" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Models/WpPost.html">WpPost</a>                    </div>                </li>                            <li data-name="class:App_Models_WpPostMeta" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Models/WpPostMeta.html">WpPostMeta</a>                    </div>                </li>                            <li data-name="class:App_Models_WpTerm" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Models/WpTerm.html">WpTerm</a>                    </div>                </li>                            <li data-name="class:App_Models_WpTermMeta" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Models/WpTermMeta.html">WpTermMeta</a>                    </div>                </li>                            <li data-name="class:App_Models_WpTermRelationships" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Models/WpTermRelationships.html">WpTermRelationships</a>                    </div>                </li>                            <li data-name="class:App_Models_WpTermTaxonomy" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Models/WpTermTaxonomy.html">WpTermTaxonomy</a>                    </div>                </li>                            <li data-name="class:App_Models_WpUser" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Models/WpUser.html">WpUser</a>                    </div>                </li>                            <li data-name="class:App_Models_WpUserMeta" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Models/WpUserMeta.html">WpUserMeta</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Traits" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Traits.html">Traits</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Traits_WpPageEnabled" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Traits/WpPageEnabled.html">WpPageEnabled</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Utilities" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Utilities.html">Utilities</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Utilities_Activate" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Utilities/Activate.html">Activate</a>                    </div>                </li>                            <li data-name="class:App_Utilities_DeActivate" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Utilities/DeActivate.html">DeActivate</a>                    </div>                </li>                            <li data-name="class:App_Utilities_UnInstall" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Utilities/UnInstall.html">UnInstall</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "App.html", "name": "App", "doc": "Namespace App"},{"type": "Namespace", "link": "App/Helpers.html", "name": "App\\Helpers", "doc": "Namespace App\\Helpers"},{"type": "Namespace", "link": "App/Http.html", "name": "App\\Http", "doc": "Namespace App\\Http"},{"type": "Namespace", "link": "App/Http/Controllers.html", "name": "App\\Http\\Controllers", "doc": "Namespace App\\Http\\Controllers"},{"type": "Namespace", "link": "App/Http/Controllers/Auth.html", "name": "App\\Http\\Controllers\\Auth", "doc": "Namespace App\\Http\\Controllers\\Auth"},{"type": "Namespace", "link": "App/Http/Middleware.html", "name": "App\\Http\\Middleware", "doc": "Namespace App\\Http\\Middleware"},{"type": "Namespace", "link": "App/Models.html", "name": "App\\Models", "doc": "Namespace App\\Models"},{"type": "Namespace", "link": "App/Traits.html", "name": "App\\Traits", "doc": "Namespace App\\Traits"},{"type": "Namespace", "link": "App/Utilities.html", "name": "App\\Utilities", "doc": "Namespace App\\Utilities"},
            
            {"type": "Class", "fromName": "App\\Helpers", "fromLink": "App/Helpers.html", "link": "App/Helpers/DebugBarWordpressDbCollector.html", "name": "App\\Helpers\\DebugBarWordpressDbCollector", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Helpers\\DebugBarWordpressDbCollector", "fromLink": "App/Helpers/DebugBarWordpressDbCollector.html", "link": "App/Helpers/DebugBarWordpressDbCollector.html#method___construct", "name": "App\\Helpers\\DebugBarWordpressDbCollector::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\DebugBarWordpressDbCollector", "fromLink": "App/Helpers/DebugBarWordpressDbCollector.html", "link": "App/Helpers/DebugBarWordpressDbCollector.html#method_collect", "name": "App\\Helpers\\DebugBarWordpressDbCollector::collect", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\DebugBarWordpressDbCollector", "fromLink": "App/Helpers/DebugBarWordpressDbCollector.html", "link": "App/Helpers/DebugBarWordpressDbCollector.html#method_getName", "name": "App\\Helpers\\DebugBarWordpressDbCollector::getName", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\DebugBarWordpressDbCollector", "fromLink": "App/Helpers/DebugBarWordpressDbCollector.html", "link": "App/Helpers/DebugBarWordpressDbCollector.html#method_getWidgets", "name": "App\\Helpers\\DebugBarWordpressDbCollector::getWidgets", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\DebugBarWordpressDbCollector", "fromLink": "App/Helpers/DebugBarWordpressDbCollector.html", "link": "App/Helpers/DebugBarWordpressDbCollector.html#method_getAssets", "name": "App\\Helpers\\DebugBarWordpressDbCollector::getAssets", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Helpers", "fromLink": "App/Helpers.html", "link": "App/Helpers/LumenHelper.html", "name": "App\\Helpers\\LumenHelper", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method___construct", "name": "App\\Helpers\\LumenHelper::__construct", "doc": "&quot;Construct Get Plugin Container from Static Array&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_getNamespace", "name": "App\\Helpers\\LumenHelper::getNamespace", "doc": "&quot;Get Application Namespace&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_plugin", "name": "App\\Helpers\\LumenHelper::plugin", "doc": "&quot;Get Lumen Plugin Instance&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_loadConfigurations", "name": "App\\Helpers\\LumenHelper::loadConfigurations", "doc": "&quot;Load Configurations.&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_app", "name": "App\\Helpers\\LumenHelper::app", "doc": "&quot;Get Lumen App&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_session", "name": "App\\Helpers\\LumenHelper::session", "doc": "&quot;Get Session&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_csrf", "name": "App\\Helpers\\LumenHelper::csrf", "doc": "&quot;Get CSRF Token&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_validateCSRF", "name": "App\\Helpers\\LumenHelper::validateCSRF", "doc": "&quot;Validate CSRF Token&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_wpHelper", "name": "App\\Helpers\\LumenHelper::wpHelper", "doc": "&quot;Get wpHelper&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_cache", "name": "App\\Helpers\\LumenHelper::cache", "doc": "&quot;Get Cache&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_auth", "name": "App\\Helpers\\LumenHelper::auth", "doc": "&quot;Get Auth&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_asset", "name": "App\\Helpers\\LumenHelper::asset", "doc": "&quot;Get Public Asset&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_abort", "name": "App\\Helpers\\LumenHelper::abort", "doc": "&quot;Throw an HttpException with the given data.&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_make", "name": "App\\Helpers\\LumenHelper::make", "doc": "&quot;Get the available container instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_base_path", "name": "App\\Helpers\\LumenHelper::base_path", "doc": "&quot;Get the path to the base of the install.&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_decrypt", "name": "App\\Helpers\\LumenHelper::decrypt", "doc": "&quot;Decrypt the given value.&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_dispatch", "name": "App\\Helpers\\LumenHelper::dispatch", "doc": "&quot;Dispatch a job to its appropriate handler.&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_config", "name": "App\\Helpers\\LumenHelper::config", "doc": "&quot;Get \/ set the specified configuration value.&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_database_path", "name": "App\\Helpers\\LumenHelper::database_path", "doc": "&quot;Get the path to the database directory of the install.&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_encrypt", "name": "App\\Helpers\\LumenHelper::encrypt", "doc": "&quot;Encrypt the given value.&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_env", "name": "App\\Helpers\\LumenHelper::env", "doc": "&quot;Gets the value of an environment variable. Supports boolean, empty and null.&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_event", "name": "App\\Helpers\\LumenHelper::event", "doc": "&quot;Fire an event and call the listeners.&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_factory", "name": "App\\Helpers\\LumenHelper::factory", "doc": "&quot;Create a model factory builder for a given class, name, and amount.&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_info", "name": "App\\Helpers\\LumenHelper::info", "doc": "&quot;Write some information to the log.&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_redirect", "name": "App\\Helpers\\LumenHelper::redirect", "doc": "&quot;Get an instance of the redirector.&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_resource_path", "name": "App\\Helpers\\LumenHelper::resource_path", "doc": "&quot;Get the path to the resources folder.&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_validator", "name": "App\\Helpers\\LumenHelper::validator", "doc": "&quot;Make Validator&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_request", "name": "App\\Helpers\\LumenHelper::request", "doc": "&quot;Return the current request from the application.&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_response", "name": "App\\Helpers\\LumenHelper::response", "doc": "&quot;Return a new response from the application.&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_route", "name": "App\\Helpers\\LumenHelper::route", "doc": "&quot;Generate a URL to a named route.&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_storage_path", "name": "App\\Helpers\\LumenHelper::storage_path", "doc": "&quot;Get the path to the storage folder.&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_trans", "name": "App\\Helpers\\LumenHelper::trans", "doc": "&quot;Translate the given message.&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_trans_choice", "name": "App\\Helpers\\LumenHelper::trans_choice", "doc": "&quot;Translates the given message based on a count.&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_url", "name": "App\\Helpers\\LumenHelper::url", "doc": "&quot;Generate a url for the application.&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_view", "name": "App\\Helpers\\LumenHelper::view", "doc": "&quot;Get the evaluated view contents for the given view.&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\LumenHelper", "fromLink": "App/Helpers/LumenHelper.html", "link": "App/Helpers/LumenHelper.html#method_recursiveCollection", "name": "App\\Helpers\\LumenHelper::recursiveCollection", "doc": "&quot;Get an Instance of A Recursive Collection&quot;"},
            
            {"type": "Class", "fromName": "App\\Helpers", "fromLink": "App/Helpers.html", "link": "App/Helpers/TimezoneHelper.html", "name": "App\\Helpers\\TimezoneHelper", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Helpers\\TimezoneHelper", "fromLink": "App/Helpers/TimezoneHelper.html", "link": "App/Helpers/TimezoneHelper.html#method_getOffset", "name": "App\\Helpers\\TimezoneHelper::getOffset", "doc": "&quot;Get WP Timezone Offset +00:00&quot;"},
            
            {"type": "Class", "fromName": "App\\Helpers", "fromLink": "App/Helpers.html", "link": "App/Helpers/WpHelper.html", "name": "App\\Helpers\\WpHelper", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Helpers\\WpHelper", "fromLink": "App/Helpers/WpHelper.html", "link": "App/Helpers/WpHelper.html#method___construct", "name": "App\\Helpers\\WpHelper::__construct", "doc": "&quot;WpHelper Constructor&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\WpHelper", "fromLink": "App/Helpers/WpHelper.html", "link": "App/Helpers/WpHelper.html#method_WpRegister", "name": "App\\Helpers\\WpHelper::WpRegister", "doc": "&quot;get config file&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\WpHelper", "fromLink": "App/Helpers/WpHelper.html", "link": "App/Helpers/WpHelper.html#method_addMenuLink", "name": "App\\Helpers\\WpHelper::addMenuLink", "doc": "&quot;Adds Page to a WordPress NavMenu&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\WpHelper", "fromLink": "App/Helpers/WpHelper.html", "link": "App/Helpers/WpHelper.html#method_addRestRoute", "name": "App\\Helpers\\WpHelper::addRestRoute", "doc": "&quot;Add REST API Route&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\WpHelper", "fromLink": "App/Helpers/WpHelper.html", "link": "App/Helpers/WpHelper.html#method_addPluginLinks", "name": "App\\Helpers\\WpHelper::addPluginLinks", "doc": "&quot;Add Admin Notice&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\WpHelper", "fromLink": "App/Helpers/WpHelper.html", "link": "App/Helpers/WpHelper.html#method_addShortcode", "name": "App\\Helpers\\WpHelper::addShortcode", "doc": "&quot;Add Shortcode&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\WpHelper", "fromLink": "App/Helpers/WpHelper.html", "link": "App/Helpers/WpHelper.html#method_addAdminNotice", "name": "App\\Helpers\\WpHelper::addAdminNotice", "doc": "&quot;Add Admin Notice&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\WpHelper", "fromLink": "App/Helpers/WpHelper.html", "link": "App/Helpers/WpHelper.html#method_addMetaBox", "name": "App\\Helpers\\WpHelper::addMetaBox", "doc": "&quot;Add Shortcode&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\WpHelper", "fromLink": "App/Helpers/WpHelper.html", "link": "App/Helpers/WpHelper.html#method_addWidget", "name": "App\\Helpers\\WpHelper::addWidget", "doc": "&quot;Add Widget&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\WpHelper", "fromLink": "App/Helpers/WpHelper.html", "link": "App/Helpers/WpHelper.html#method_addDashboardWidget", "name": "App\\Helpers\\WpHelper::addDashboardWidget", "doc": "&quot;Add Widget&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\WpHelper", "fromLink": "App/Helpers/WpHelper.html", "link": "App/Helpers/WpHelper.html#method_addAdminPanel", "name": "App\\Helpers\\WpHelper::addAdminPanel", "doc": "&quot;Add Admin Panel&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\WpHelper", "fromLink": "App/Helpers/WpHelper.html", "link": "App/Helpers/WpHelper.html#method_addAdminSubPanel", "name": "App\\Helpers\\WpHelper::addAdminSubPanel", "doc": "&quot;Add Admin Panel&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\WpHelper", "fromLink": "App/Helpers/WpHelper.html", "link": "App/Helpers/WpHelper.html#method_addAction", "name": "App\\Helpers\\WpHelper::addAction", "doc": "&quot;Add Action&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\WpHelper", "fromLink": "App/Helpers/WpHelper.html", "link": "App/Helpers/WpHelper.html#method_addAdminBarNode", "name": "App\\Helpers\\WpHelper::addAdminBarNode", "doc": "&quot;Add Admin Bar Node&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\WpHelper", "fromLink": "App/Helpers/WpHelper.html", "link": "App/Helpers/WpHelper.html#method_enqueueStyle", "name": "App\\Helpers\\WpHelper::enqueueStyle", "doc": "&quot;Enqueue Style&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\WpHelper", "fromLink": "App/Helpers/WpHelper.html", "link": "App/Helpers/WpHelper.html#method_enqueueScript", "name": "App\\Helpers\\WpHelper::enqueueScript", "doc": "&quot;Enqueue Script&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\WpHelper", "fromLink": "App/Helpers/WpHelper.html", "link": "App/Helpers/WpHelper.html#method_AddTabsPanel", "name": "App\\Helpers\\WpHelper::AddTabsPanel", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\WpHelper", "fromLink": "App/Helpers/WpHelper.html", "link": "App/Helpers/WpHelper.html#method_getGlobalPost", "name": "App\\Helpers\\WpHelper::getGlobalPost", "doc": "&quot;Get Wp Global Post Object&quot;"},
                    {"type": "Method", "fromName": "App\\Helpers\\WpHelper", "fromLink": "App/Helpers/WpHelper.html", "link": "App/Helpers/WpHelper.html#method_getWpDatabaseConnection", "name": "App\\Helpers\\WpHelper::getWpDatabaseConnection", "doc": "&quot;Get WP Database&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers\\Auth", "fromLink": "App/Http/Controllers/Auth.html", "link": "App/Http/Controllers/Auth/AuthController.html", "name": "App\\Http\\Controllers\\Auth\\AuthController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\AuthController", "fromLink": "App/Http/Controllers/Auth/AuthController.html", "link": "App/Http/Controllers/Auth/AuthController.html#method___construct", "name": "App\\Http\\Controllers\\Auth\\AuthController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\AuthController", "fromLink": "App/Http/Controllers/Auth/AuthController.html", "link": "App/Http/Controllers/Auth/AuthController.html#method_registerPost", "name": "App\\Http\\Controllers\\Auth\\AuthController::registerPost", "doc": "&quot;Register a new user.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\AuthController", "fromLink": "App/Http/Controllers/Auth/AuthController.html", "link": "App/Http/Controllers/Auth/AuthController.html#method_loginPost", "name": "App\\Http\\Controllers\\Auth\\AuthController::loginPost", "doc": "&quot;Login an existing user.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\AuthController", "fromLink": "App/Http/Controllers/Auth/AuthController.html", "link": "App/Http/Controllers/Auth/AuthController.html#method_login", "name": "App\\Http\\Controllers\\Auth\\AuthController::login", "doc": "&quot;Login an existing user.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\AuthController", "fromLink": "App/Http/Controllers/Auth/AuthController.html", "link": "App/Http/Controllers/Auth/AuthController.html#method_register", "name": "App\\Http\\Controllers\\Auth\\AuthController::register", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\AuthController", "fromLink": "App/Http/Controllers/Auth/AuthController.html", "link": "App/Http/Controllers/Auth/AuthController.html#method_sendResetEmail", "name": "App\\Http\\Controllers\\Auth\\AuthController::sendResetEmail", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\AuthController", "fromLink": "App/Http/Controllers/Auth/AuthController.html", "link": "App/Http/Controllers/Auth/AuthController.html#method_resetPassword", "name": "App\\Http\\Controllers\\Auth\\AuthController::resetPassword", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\AuthController", "fromLink": "App/Http/Controllers/Auth/AuthController.html", "link": "App/Http/Controllers/Auth/AuthController.html#method_logout", "name": "App\\Http\\Controllers\\Auth\\AuthController::logout", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers\\Auth", "fromLink": "App/Http/Controllers/Auth.html", "link": "App/Http/Controllers/Auth/LoginShortcodeController.html", "name": "App\\Http\\Controllers\\Auth\\LoginShortcodeController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\LoginShortcodeController", "fromLink": "App/Http/Controllers/Auth/LoginShortcodeController.html", "link": "App/Http/Controllers/Auth/LoginShortcodeController.html#method___construct", "name": "App\\Http\\Controllers\\Auth\\LoginShortcodeController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\LoginShortcodeController", "fromLink": "App/Http/Controllers/Auth/LoginShortcodeController.html", "link": "App/Http/Controllers/Auth/LoginShortcodeController.html#method_template", "name": "App\\Http\\Controllers\\Auth\\LoginShortcodeController::template", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers\\Auth", "fromLink": "App/Http/Controllers/Auth.html", "link": "App/Http/Controllers/Auth/RegisterShortcodeController.html", "name": "App\\Http\\Controllers\\Auth\\RegisterShortcodeController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\RegisterShortcodeController", "fromLink": "App/Http/Controllers/Auth/RegisterShortcodeController.html", "link": "App/Http/Controllers/Auth/RegisterShortcodeController.html#method___construct", "name": "App\\Http\\Controllers\\Auth\\RegisterShortcodeController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\RegisterShortcodeController", "fromLink": "App/Http/Controllers/Auth/RegisterShortcodeController.html", "link": "App/Http/Controllers/Auth/RegisterShortcodeController.html#method_template", "name": "App\\Http\\Controllers\\Auth\\RegisterShortcodeController::template", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/Controller.html", "name": "App\\Http\\Controllers\\Controller", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/ExampleAdminController.html", "name": "App\\Http\\Controllers\\ExampleAdminController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\ExampleAdminController", "fromLink": "App/Http/Controllers/ExampleAdminController.html", "link": "App/Http/Controllers/ExampleAdminController.html#method___construct", "name": "App\\Http\\Controllers\\ExampleAdminController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\ExampleAdminController", "fromLink": "App/Http/Controllers/ExampleAdminController.html", "link": "App/Http/Controllers/ExampleAdminController.html#method_template", "name": "App\\Http\\Controllers\\ExampleAdminController::template", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/ExampleAuthUserController.html", "name": "App\\Http\\Controllers\\ExampleAuthUserController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\ExampleAuthUserController", "fromLink": "App/Http/Controllers/ExampleAuthUserController.html", "link": "App/Http/Controllers/ExampleAuthUserController.html#method___construct", "name": "App\\Http\\Controllers\\ExampleAuthUserController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\ExampleAuthUserController", "fromLink": "App/Http/Controllers/ExampleAuthUserController.html", "link": "App/Http/Controllers/ExampleAuthUserController.html#method_show", "name": "App\\Http\\Controllers\\ExampleAuthUserController::show", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/ExampleCacheController.html", "name": "App\\Http\\Controllers\\ExampleCacheController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\ExampleCacheController", "fromLink": "App/Http/Controllers/ExampleCacheController.html", "link": "App/Http/Controllers/ExampleCacheController.html#method___construct", "name": "App\\Http\\Controllers\\ExampleCacheController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\ExampleCacheController", "fromLink": "App/Http/Controllers/ExampleCacheController.html", "link": "App/Http/Controllers/ExampleCacheController.html#method_show", "name": "App\\Http\\Controllers\\ExampleCacheController::show", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/ExampleMetaBoxController.html", "name": "App\\Http\\Controllers\\ExampleMetaBoxController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\ExampleMetaBoxController", "fromLink": "App/Http/Controllers/ExampleMetaBoxController.html", "link": "App/Http/Controllers/ExampleMetaBoxController.html#method___construct", "name": "App\\Http\\Controllers\\ExampleMetaBoxController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\ExampleMetaBoxController", "fromLink": "App/Http/Controllers/ExampleMetaBoxController.html", "link": "App/Http/Controllers/ExampleMetaBoxController.html#method_template", "name": "App\\Http\\Controllers\\ExampleMetaBoxController::template", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\ExampleMetaBoxController", "fromLink": "App/Http/Controllers/ExampleMetaBoxController.html", "link": "App/Http/Controllers/ExampleMetaBoxController.html#method_save", "name": "App\\Http\\Controllers\\ExampleMetaBoxController::save", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\ExampleMetaBoxController", "fromLink": "App/Http/Controllers/ExampleMetaBoxController.html", "link": "App/Http/Controllers/ExampleMetaBoxController.html#method_menuMetaBox", "name": "App\\Http\\Controllers\\ExampleMetaBoxController::menuMetaBox", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/ExamplePostsModelController.html", "name": "App\\Http\\Controllers\\ExamplePostsModelController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\ExamplePostsModelController", "fromLink": "App/Http/Controllers/ExamplePostsModelController.html", "link": "App/Http/Controllers/ExamplePostsModelController.html#method___construct", "name": "App\\Http\\Controllers\\ExamplePostsModelController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\ExamplePostsModelController", "fromLink": "App/Http/Controllers/ExamplePostsModelController.html", "link": "App/Http/Controllers/ExamplePostsModelController.html#method_show", "name": "App\\Http\\Controllers\\ExamplePostsModelController::show", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\ExamplePostsModelController", "fromLink": "App/Http/Controllers/ExamplePostsModelController.html", "link": "App/Http/Controllers/ExamplePostsModelController.html#method_save", "name": "App\\Http\\Controllers\\ExamplePostsModelController::save", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/ExampleRouteThemeViewController.html", "name": "App\\Http\\Controllers\\ExampleRouteThemeViewController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\ExampleRouteThemeViewController", "fromLink": "App/Http/Controllers/ExampleRouteThemeViewController.html", "link": "App/Http/Controllers/ExampleRouteThemeViewController.html#method___construct", "name": "App\\Http\\Controllers\\ExampleRouteThemeViewController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\ExampleRouteThemeViewController", "fromLink": "App/Http/Controllers/ExampleRouteThemeViewController.html", "link": "App/Http/Controllers/ExampleRouteThemeViewController.html#method_show", "name": "App\\Http\\Controllers\\ExampleRouteThemeViewController::show", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/ExampleTranslationController.html", "name": "App\\Http\\Controllers\\ExampleTranslationController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\ExampleTranslationController", "fromLink": "App/Http/Controllers/ExampleTranslationController.html", "link": "App/Http/Controllers/ExampleTranslationController.html#method___construct", "name": "App\\Http\\Controllers\\ExampleTranslationController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\ExampleTranslationController", "fromLink": "App/Http/Controllers/ExampleTranslationController.html", "link": "App/Http/Controllers/ExampleTranslationController.html#method_show", "name": "App\\Http\\Controllers\\ExampleTranslationController::show", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/ExampleWpRestRouteController.html", "name": "App\\Http\\Controllers\\ExampleWpRestRouteController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\ExampleWpRestRouteController", "fromLink": "App/Http/Controllers/ExampleWpRestRouteController.html", "link": "App/Http/Controllers/ExampleWpRestRouteController.html#method___construct", "name": "App\\Http\\Controllers\\ExampleWpRestRouteController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\ExampleWpRestRouteController", "fromLink": "App/Http/Controllers/ExampleWpRestRouteController.html", "link": "App/Http/Controllers/ExampleWpRestRouteController.html#method_get", "name": "App\\Http\\Controllers\\ExampleWpRestRouteController::get", "doc": "&quot;Create a new controller instance.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/GlobalController.html", "name": "App\\Http\\Controllers\\GlobalController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\GlobalController", "fromLink": "App/Http/Controllers/GlobalController.html", "link": "App/Http/Controllers/GlobalController.html#method___construct", "name": "App\\Http\\Controllers\\GlobalController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\GlobalController", "fromLink": "App/Http/Controllers/GlobalController.html", "link": "App/Http/Controllers/GlobalController.html#method_AddLinksToMenu", "name": "App\\Http\\Controllers\\GlobalController::AddLinksToMenu", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\GlobalController", "fromLink": "App/Http/Controllers/GlobalController.html", "link": "App/Http/Controllers/GlobalController.html#method_Tabs", "name": "App\\Http\\Controllers\\GlobalController::Tabs", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\GlobalController", "fromLink": "App/Http/Controllers/GlobalController.html", "link": "App/Http/Controllers/GlobalController.html#method_callbackTabs", "name": "App\\Http\\Controllers\\GlobalController::callbackTabs", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/SettingsController.html", "name": "App\\Http\\Controllers\\SettingsController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\SettingsController", "fromLink": "App/Http/Controllers/SettingsController.html", "link": "App/Http/Controllers/SettingsController.html#method___construct", "name": "App\\Http\\Controllers\\SettingsController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\SettingsController", "fromLink": "App/Http/Controllers/SettingsController.html", "link": "App/Http/Controllers/SettingsController.html#method_template", "name": "App\\Http\\Controllers\\SettingsController::template", "doc": "&quot;Show the view&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\SettingsController", "fromLink": "App/Http/Controllers/SettingsController.html", "link": "App/Http/Controllers/SettingsController.html#method_importExport", "name": "App\\Http\\Controllers\\SettingsController::importExport", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\SettingsController", "fromLink": "App/Http/Controllers/SettingsController.html", "link": "App/Http/Controllers/SettingsController.html#method_ExportPost", "name": "App\\Http\\Controllers\\SettingsController::ExportPost", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\SettingsController", "fromLink": "App/Http/Controllers/SettingsController.html", "link": "App/Http/Controllers/SettingsController.html#method_exportdocpost", "name": "App\\Http\\Controllers\\SettingsController::exportdocpost", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\SettingsController", "fromLink": "App/Http/Controllers/SettingsController.html", "link": "App/Http/Controllers/SettingsController.html#method_ImportSub", "name": "App\\Http\\Controllers\\SettingsController::ImportSub", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\SettingsController", "fromLink": "App/Http/Controllers/SettingsController.html", "link": "App/Http/Controllers/SettingsController.html#method_importdoc", "name": "App\\Http\\Controllers\\SettingsController::importdoc", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/Submissionsfrontcontrol.html", "name": "App\\Http\\Controllers\\Submissionsfrontcontrol", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\Submissionsfrontcontrol", "fromLink": "App/Http/Controllers/Submissionsfrontcontrol.html", "link": "App/Http/Controllers/Submissionsfrontcontrol.html#method___construct", "name": "App\\Http\\Controllers\\Submissionsfrontcontrol::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Submissionsfrontcontrol", "fromLink": "App/Http/Controllers/Submissionsfrontcontrol.html", "link": "App/Http/Controllers/Submissionsfrontcontrol.html#method_frontcontrol", "name": "App\\Http\\Controllers\\Submissionsfrontcontrol::frontcontrol", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Submissionsfrontcontrol", "fromLink": "App/Http/Controllers/Submissionsfrontcontrol.html", "link": "App/Http/Controllers/Submissionsfrontcontrol.html#method_update", "name": "App\\Http\\Controllers\\Submissionsfrontcontrol::update", "doc": "&quot;Update the specified resource in storage.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Submissionsfrontcontrol", "fromLink": "App/Http/Controllers/Submissionsfrontcontrol.html", "link": "App/Http/Controllers/Submissionsfrontcontrol.html#method_destroy", "name": "App\\Http\\Controllers\\Submissionsfrontcontrol::destroy", "doc": "&quot;Remove the specified resource from storage.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Submissionsfrontcontrol", "fromLink": "App/Http/Controllers/Submissionsfrontcontrol.html", "link": "App/Http/Controllers/Submissionsfrontcontrol.html#method_multi_delete", "name": "App\\Http\\Controllers\\Submissionsfrontcontrol::multi_delete", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Submissionsfrontcontrol", "fromLink": "App/Http/Controllers/Submissionsfrontcontrol.html", "link": "App/Http/Controllers/Submissionsfrontcontrol.html#method_approve", "name": "App\\Http\\Controllers\\Submissionsfrontcontrol::approve", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Submissionsfrontcontrol", "fromLink": "App/Http/Controllers/Submissionsfrontcontrol.html", "link": "App/Http/Controllers/Submissionsfrontcontrol.html#method_DocDelete", "name": "App\\Http\\Controllers\\Submissionsfrontcontrol::DocDelete", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/SubmssionsController.html", "name": "App\\Http\\Controllers\\SubmssionsController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\SubmssionsController", "fromLink": "App/Http/Controllers/SubmssionsController.html", "link": "App/Http/Controllers/SubmssionsController.html#method___construct", "name": "App\\Http\\Controllers\\SubmssionsController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\SubmssionsController", "fromLink": "App/Http/Controllers/SubmssionsController.html", "link": "App/Http/Controllers/SubmssionsController.html#method_template", "name": "App\\Http\\Controllers\\SubmssionsController::template", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\SubmssionsController", "fromLink": "App/Http/Controllers/SubmssionsController.html", "link": "App/Http/Controllers/SubmssionsController.html#method_update", "name": "App\\Http\\Controllers\\SubmssionsController::update", "doc": "&quot;Update the specified resource in storage.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\SubmssionsController", "fromLink": "App/Http/Controllers/SubmssionsController.html", "link": "App/Http/Controllers/SubmssionsController.html#method_destroy", "name": "App\\Http\\Controllers\\SubmssionsController::destroy", "doc": "&quot;Remove the specified resource from storage.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\SubmssionsController", "fromLink": "App/Http/Controllers/SubmssionsController.html", "link": "App/Http/Controllers/SubmssionsController.html#method_multi_delete", "name": "App\\Http\\Controllers\\SubmssionsController::multi_delete", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\SubmssionsController", "fromLink": "App/Http/Controllers/SubmssionsController.html", "link": "App/Http/Controllers/SubmssionsController.html#method_approve", "name": "App\\Http\\Controllers\\SubmssionsController::approve", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\SubmssionsController", "fromLink": "App/Http/Controllers/SubmssionsController.html", "link": "App/Http/Controllers/SubmssionsController.html#method_DocDelete", "name": "App\\Http\\Controllers\\SubmssionsController::DocDelete", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/SubmssionsControllerFront.html", "name": "App\\Http\\Controllers\\SubmssionsControllerFront", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\SubmssionsControllerFront", "fromLink": "App/Http/Controllers/SubmssionsControllerFront.html", "link": "App/Http/Controllers/SubmssionsControllerFront.html#method___construct", "name": "App\\Http\\Controllers\\SubmssionsControllerFront::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\SubmssionsControllerFront", "fromLink": "App/Http/Controllers/SubmssionsControllerFront.html", "link": "App/Http/Controllers/SubmssionsControllerFront.html#method_index", "name": "App\\Http\\Controllers\\SubmssionsControllerFront::index", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\SubmssionsControllerFront", "fromLink": "App/Http/Controllers/SubmssionsControllerFront.html", "link": "App/Http/Controllers/SubmssionsControllerFront.html#method_show", "name": "App\\Http\\Controllers\\SubmssionsControllerFront::show", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\SubmssionsControllerFront", "fromLink": "App/Http/Controllers/SubmssionsControllerFront.html", "link": "App/Http/Controllers/SubmssionsControllerFront.html#method_single", "name": "App\\Http\\Controllers\\SubmssionsControllerFront::single", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\SubmssionsControllerFront", "fromLink": "App/Http/Controllers/SubmssionsControllerFront.html", "link": "App/Http/Controllers/SubmssionsControllerFront.html#method_store", "name": "App\\Http\\Controllers\\SubmssionsControllerFront::store", "doc": "&quot;Store a newly created resource in storage.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\SubmssionsControllerFront", "fromLink": "App/Http/Controllers/SubmssionsControllerFront.html", "link": "App/Http/Controllers/SubmssionsControllerFront.html#method_edit", "name": "App\\Http\\Controllers\\SubmssionsControllerFront::edit", "doc": "&quot;Show the form for editing the specified resource.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\SubmssionsControllerFront", "fromLink": "App/Http/Controllers/SubmssionsControllerFront.html", "link": "App/Http/Controllers/SubmssionsControllerFront.html#method_update", "name": "App\\Http\\Controllers\\SubmssionsControllerFront::update", "doc": "&quot;Update the specified resource in storage.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\SubmssionsControllerFront", "fromLink": "App/Http/Controllers/SubmssionsControllerFront.html", "link": "App/Http/Controllers/SubmssionsControllerFront.html#method_destroy", "name": "App\\Http\\Controllers\\SubmssionsControllerFront::destroy", "doc": "&quot;Remove the specified resource from storage.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\SubmssionsControllerFront", "fromLink": "App/Http/Controllers/SubmssionsControllerFront.html", "link": "App/Http/Controllers/SubmssionsControllerFront.html#method_DocDelete", "name": "App\\Http\\Controllers\\SubmssionsControllerFront::DocDelete", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/SubmssionsShortcodeController.html", "name": "App\\Http\\Controllers\\SubmssionsShortcodeController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\SubmssionsShortcodeController", "fromLink": "App/Http/Controllers/SubmssionsShortcodeController.html", "link": "App/Http/Controllers/SubmssionsShortcodeController.html#method___construct", "name": "App\\Http\\Controllers\\SubmssionsShortcodeController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\SubmssionsShortcodeController", "fromLink": "App/Http/Controllers/SubmssionsShortcodeController.html", "link": "App/Http/Controllers/SubmssionsShortcodeController.html#method_template", "name": "App\\Http\\Controllers\\SubmssionsShortcodeController::template", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Middleware", "fromLink": "App/Http/Middleware.html", "link": "App/Http/Middleware/Authenticate.html", "name": "App\\Http\\Middleware\\Authenticate", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Middleware\\Authenticate", "fromLink": "App/Http/Middleware/Authenticate.html", "link": "App/Http/Middleware/Authenticate.html#method___construct", "name": "App\\Http\\Middleware\\Authenticate::__construct", "doc": "&quot;Create a new middleware instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Middleware\\Authenticate", "fromLink": "App/Http/Middleware/Authenticate.html", "link": "App/Http/Middleware/Authenticate.html#method_handle", "name": "App\\Http\\Middleware\\Authenticate::handle", "doc": "&quot;Handle an incoming request.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Middleware", "fromLink": "App/Http/Middleware.html", "link": "App/Http/Middleware/ExampleMiddleware.html", "name": "App\\Http\\Middleware\\ExampleMiddleware", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Middleware\\ExampleMiddleware", "fromLink": "App/Http/Middleware/ExampleMiddleware.html", "link": "App/Http/Middleware/ExampleMiddleware.html#method_handle", "name": "App\\Http\\Middleware\\ExampleMiddleware::handle", "doc": "&quot;Handle an incoming request.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Middleware\\ExampleMiddleware", "fromLink": "App/Http/Middleware/ExampleMiddleware.html", "link": "App/Http/Middleware/ExampleMiddleware.html#method_terminate", "name": "App\\Http\\Middleware\\ExampleMiddleware::terminate", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Middleware", "fromLink": "App/Http/Middleware.html", "link": "App/Http/Middleware/SilenceWp404s.html", "name": "App\\Http\\Middleware\\SilenceWp404s", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Middleware\\SilenceWp404s", "fromLink": "App/Http/Middleware/SilenceWp404s.html", "link": "App/Http/Middleware/SilenceWp404s.html#method_handle", "name": "App\\Http\\Middleware\\SilenceWp404s::handle", "doc": "&quot;Handle an incoming request.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Middleware\\SilenceWp404s", "fromLink": "App/Http/Middleware/SilenceWp404s.html", "link": "App/Http/Middleware/SilenceWp404s.html#method_terminate", "name": "App\\Http\\Middleware\\SilenceWp404s::terminate", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Models", "fromLink": "App/Models.html", "link": "App/Models/JSON.html", "name": "App\\Models\\JSON", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Models\\JSON", "fromLink": "App/Models/JSON.html", "link": "App/Models/JSON.html#method___construct", "name": "App\\Models\\JSON::__construct", "doc": "&quot;JSON constructor.&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\JSON", "fromLink": "App/Models/JSON.html", "link": "App/Models/JSON.html#method_forget", "name": "App\\Models\\JSON::forget", "doc": "&quot;Forget Key \/ Value Pair in the JSON storage file.&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\JSON", "fromLink": "App/Models/JSON.html", "link": "App/Models/JSON.html#method_set", "name": "App\\Models\\JSON::set", "doc": "&quot;Set a key \/ value pair entry in the JSON storage file.&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\JSON", "fromLink": "App/Models/JSON.html", "link": "App/Models/JSON.html#method_get", "name": "App\\Models\\JSON::get", "doc": "&quot;Get a key \/ value pair entry from the JSON storage file.&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\JSON", "fromLink": "App/Models/JSON.html", "link": "App/Models/JSON.html#method_all", "name": "App\\Models\\JSON::all", "doc": "&quot;Get all entries from the JSON storage file.&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\JSON", "fromLink": "App/Models/JSON.html", "link": "App/Models/JSON.html#method_save", "name": "App\\Models\\JSON::save", "doc": "&quot;Save the JSON storage file.&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\JSON", "fromLink": "App/Models/JSON.html", "link": "App/Models/JSON.html#method_flush", "name": "App\\Models\\JSON::flush", "doc": "&quot;Flush the JSON storage file.&quot;"},
            
            {"type": "Class", "fromName": "App\\Models", "fromLink": "App/Models.html", "link": "App/Models/WpComment.html", "name": "App\\Models\\WpComment", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Models", "fromLink": "App/Models.html", "link": "App/Models/WpCommentMeta.html", "name": "App\\Models\\WpCommentMeta", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Models", "fromLink": "App/Models.html", "link": "App/Models/WpOptions.html", "name": "App\\Models\\WpOptions", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Models", "fromLink": "App/Models.html", "link": "App/Models/WpPost.html", "name": "App\\Models\\WpPost", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Models\\WpPost", "fromLink": "App/Models/WpPost.html", "link": "App/Models/WpPost.html#method_getPermalinkAttribute", "name": "App\\Models\\WpPost::getPermalinkAttribute", "doc": "&quot;Get Permalink by Traversal&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\WpPost", "fromLink": "App/Models/WpPost.html", "link": "App/Models/WpPost.html#method_parent", "name": "App\\Models\\WpPost::parent", "doc": "&quot;Post Parent Relationship&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\WpPost", "fromLink": "App/Models/WpPost.html", "link": "App/Models/WpPost.html#method_author", "name": "App\\Models\\WpPost::author", "doc": "&quot;Post Author Relationship&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\WpPost", "fromLink": "App/Models/WpPost.html", "link": "App/Models/WpPost.html#method_children", "name": "App\\Models\\WpPost::children", "doc": "&quot;Post Children Relationship&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\WpPost", "fromLink": "App/Models/WpPost.html", "link": "App/Models/WpPost.html#method_toWpPost", "name": "App\\Models\\WpPost::toWpPost", "doc": "&quot;Convert Eloquent Model to WP_Post Object&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\WpPost", "fromLink": "App/Models/WpPost.html", "link": "App/Models/WpPost.html#method_getMeta", "name": "App\\Models\\WpPost::getMeta", "doc": "&quot;Get WpMeta Fields&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\WpPost", "fromLink": "App/Models/WpPost.html", "link": "App/Models/WpPost.html#method_meta", "name": "App\\Models\\WpPost::meta", "doc": "&quot;Post Meta Relationship&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\WpPost", "fromLink": "App/Models/WpPost.html", "link": "App/Models/WpPost.html#method_taxonomy", "name": "App\\Models\\WpPost::taxonomy", "doc": "&quot;Taxonomy Relationship&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\WpPost", "fromLink": "App/Models/WpPost.html", "link": "App/Models/WpPost.html#method_attachTaxonomy", "name": "App\\Models\\WpPost::attachTaxonomy", "doc": "&quot;Attach Taxonomy Relationship&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\WpPost", "fromLink": "App/Models/WpPost.html", "link": "App/Models/WpPost.html#method_detachTaxonomy", "name": "App\\Models\\WpPost::detachTaxonomy", "doc": "&quot;DeAttach Taxonomy Relationship&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\WpPost", "fromLink": "App/Models/WpPost.html", "link": "App/Models/WpPost.html#method_getPostContentAttribute", "name": "App\\Models\\WpPost::getPostContentAttribute", "doc": "&quot;Get Post Content Formatted&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\WpPost", "fromLink": "App/Models/WpPost.html", "link": "App/Models/WpPost.html#method_getPostDateAttribute", "name": "App\\Models\\WpPost::getPostDateAttribute", "doc": "&quot;Get Post Date Attribute&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\WpPost", "fromLink": "App/Models/WpPost.html", "link": "App/Models/WpPost.html#method_getPostModifiedAttribute", "name": "App\\Models\\WpPost::getPostModifiedAttribute", "doc": "&quot;Get Post Modified Attribute&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\WpPost", "fromLink": "App/Models/WpPost.html", "link": "App/Models/WpPost.html#method_boot", "name": "App\\Models\\WpPost::boot", "doc": "&quot;Model Callbacks - Set additional WP_POST dates&quot;"},
            
            {"type": "Class", "fromName": "App\\Models", "fromLink": "App/Models.html", "link": "App/Models/WpPostMeta.html", "name": "App\\Models\\WpPostMeta", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Models\\WpPostMeta", "fromLink": "App/Models/WpPostMeta.html", "link": "App/Models/WpPostMeta.html#method_boot", "name": "App\\Models\\WpPostMeta::boot", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\WpPostMeta", "fromLink": "App/Models/WpPostMeta.html", "link": "App/Models/WpPostMeta.html#method_post", "name": "App\\Models\\WpPostMeta::post", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\WpPostMeta", "fromLink": "App/Models/WpPostMeta.html", "link": "App/Models/WpPostMeta.html#method_getMetaValueAttribute", "name": "App\\Models\\WpPostMeta::getMetaValueAttribute", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Models", "fromLink": "App/Models.html", "link": "App/Models/WpTerm.html", "name": "App\\Models\\WpTerm", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Models\\WpTerm", "fromLink": "App/Models/WpTerm.html", "link": "App/Models/WpTerm.html#method_meta", "name": "App\\Models\\WpTerm::meta", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\WpTerm", "fromLink": "App/Models/WpTerm.html", "link": "App/Models/WpTerm.html#method_taxonomy", "name": "App\\Models\\WpTerm::taxonomy", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\WpTerm", "fromLink": "App/Models/WpTerm.html", "link": "App/Models/WpTerm.html#method_posts", "name": "App\\Models\\WpTerm::posts", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Models", "fromLink": "App/Models.html", "link": "App/Models/WpTermMeta.html", "name": "App\\Models\\WpTermMeta", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Models\\WpTermMeta", "fromLink": "App/Models/WpTermMeta.html", "link": "App/Models/WpTermMeta.html#method_term", "name": "App\\Models\\WpTermMeta::term", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Models", "fromLink": "App/Models.html", "link": "App/Models/WpTermRelationships.html", "name": "App\\Models\\WpTermRelationships", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Models", "fromLink": "App/Models.html", "link": "App/Models/WpTermTaxonomy.html", "name": "App\\Models\\WpTermTaxonomy", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Models\\WpTermTaxonomy", "fromLink": "App/Models/WpTermTaxonomy.html", "link": "App/Models/WpTermTaxonomy.html#method_term", "name": "App\\Models\\WpTermTaxonomy::term", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Models", "fromLink": "App/Models.html", "link": "App/Models/WpUser.html", "name": "App\\Models\\WpUser", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Models\\WpUser", "fromLink": "App/Models/WpUser.html", "link": "App/Models/WpUser.html#method_meta", "name": "App\\Models\\WpUser::meta", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\WpUser", "fromLink": "App/Models/WpUser.html", "link": "App/Models/WpUser.html#method_setUserPassAttribute", "name": "App\\Models\\WpUser::setUserPassAttribute", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\WpUser", "fromLink": "App/Models/WpUser.html", "link": "App/Models/WpUser.html#method_wpLogin", "name": "App\\Models\\WpUser::wpLogin", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Models\\WpUser", "fromLink": "App/Models/WpUser.html", "link": "App/Models/WpUser.html#method_boot", "name": "App\\Models\\WpUser::boot", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Models", "fromLink": "App/Models.html", "link": "App/Models/WpUserMeta.html", "name": "App\\Models\\WpUserMeta", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Models\\WpUserMeta", "fromLink": "App/Models/WpUserMeta.html", "link": "App/Models/WpUserMeta.html#method_meta", "name": "App\\Models\\WpUserMeta::meta", "doc": "&quot;&quot;"},
            
            {"type": "Trait", "fromName": "App\\Traits", "fromLink": "App/Traits.html", "link": "App/Traits/WpPageEnabled.html", "name": "App\\Traits\\WpPageEnabled", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Traits\\WpPageEnabled", "fromLink": "App/Traits/WpPageEnabled.html", "link": "App/Traits/WpPageEnabled.html#method_setPageTitle", "name": "App\\Traits\\WpPageEnabled::setPageTitle", "doc": "&quot;Set WP Page Title &amp;amp; Silence 404s&quot;"},
            
            {"type": "Class", "fromName": "App\\Utilities", "fromLink": "App/Utilities.html", "link": "App/Utilities/Activate.html", "name": "App\\Utilities\\Activate", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Utilities\\Activate", "fromLink": "App/Utilities/Activate.html", "link": "App/Utilities/Activate.html#method_init", "name": "App\\Utilities\\Activate::init", "doc": "&quot;Class Initialization called by Hook (Requires Static Method)&quot;"},
                    {"type": "Method", "fromName": "App\\Utilities\\Activate", "fromLink": "App/Utilities/Activate.html", "link": "App/Utilities/Activate.html#method___construct", "name": "App\\Utilities\\Activate::__construct", "doc": "&quot;Class Constructor called by init()&quot;"},
                    {"type": "Method", "fromName": "App\\Utilities\\Activate", "fromLink": "App/Utilities/Activate.html", "link": "App/Utilities/Activate.html#method_schema", "name": "App\\Utilities\\Activate::schema", "doc": "&quot;Modify Database Schema&quot;"},
                    {"type": "Method", "fromName": "App\\Utilities\\Activate", "fromLink": "App/Utilities/Activate.html", "link": "App/Utilities/Activate.html#method_data", "name": "App\\Utilities\\Activate::data", "doc": "&quot;Insert Database Data&quot;"},
            
            {"type": "Class", "fromName": "App\\Utilities", "fromLink": "App/Utilities.html", "link": "App/Utilities/DeActivate.html", "name": "App\\Utilities\\DeActivate", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Utilities\\DeActivate", "fromLink": "App/Utilities/DeActivate.html", "link": "App/Utilities/DeActivate.html#method_init", "name": "App\\Utilities\\DeActivate::init", "doc": "&quot;Class Initialization called by Hook (Requires Static Method)&quot;"},
                    {"type": "Method", "fromName": "App\\Utilities\\DeActivate", "fromLink": "App/Utilities/DeActivate.html", "link": "App/Utilities/DeActivate.html#method___construct", "name": "App\\Utilities\\DeActivate::__construct", "doc": "&quot;Class Constructor called by init()&quot;"},
                    {"type": "Method", "fromName": "App\\Utilities\\DeActivate", "fromLink": "App/Utilities/DeActivate.html", "link": "App/Utilities/DeActivate.html#method_schema", "name": "App\\Utilities\\DeActivate::schema", "doc": "&quot;Modify Database Schema&quot;"},
                    {"type": "Method", "fromName": "App\\Utilities\\DeActivate", "fromLink": "App/Utilities/DeActivate.html", "link": "App/Utilities/DeActivate.html#method_data", "name": "App\\Utilities\\DeActivate::data", "doc": "&quot;Process Data&quot;"},
            
            {"type": "Class", "fromName": "App\\Utilities", "fromLink": "App/Utilities.html", "link": "App/Utilities/UnInstall.html", "name": "App\\Utilities\\UnInstall", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Utilities\\UnInstall", "fromLink": "App/Utilities/UnInstall.html", "link": "App/Utilities/UnInstall.html#method_init", "name": "App\\Utilities\\UnInstall::init", "doc": "&quot;Class Initialization called by Hook (Requires Static Method)&quot;"},
                    {"type": "Method", "fromName": "App\\Utilities\\UnInstall", "fromLink": "App/Utilities/UnInstall.html", "link": "App/Utilities/UnInstall.html#method___construct", "name": "App\\Utilities\\UnInstall::__construct", "doc": "&quot;Class Constructor called by init()&quot;"},
                    {"type": "Method", "fromName": "App\\Utilities\\UnInstall", "fromLink": "App/Utilities/UnInstall.html", "link": "App/Utilities/UnInstall.html#method_schema", "name": "App\\Utilities\\UnInstall::schema", "doc": "&quot;Modify Database Schema&quot;"},
                    {"type": "Method", "fromName": "App\\Utilities\\UnInstall", "fromLink": "App/Utilities/UnInstall.html", "link": "App/Utilities/UnInstall.html#method_data", "name": "App\\Utilities\\UnInstall::data", "doc": "&quot;Process Data&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


