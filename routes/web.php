<?php
/** @var $router \Illuminate\Routing\Router */
$router->get('test-theme', 'ExampleRouteThemeViewController@show');

$router->get('truediv/login', 'Auth\AuthController@login');
$router->post('truediv/login', 'Auth\AuthController@loginPost');

$router->get('truediv/register', 'Auth\AuthController@register');
$router->post('truediv/register', 'Auth\AuthController@registerPost');

//$router->get('/key-generate', function() {
//	return str_random(32);
//});
