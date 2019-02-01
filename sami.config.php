<?php
use Sami\Sami;
use Symfony\Component\Finder\Finder;
$iterator = Finder::create()
	->files()
	->name('*.php')
	->exclude('node_modules')
	->exclude('resources')
	->exclude('database')
	->exclude('config')
	->exclude('routes')
	->exclude('bootstrap')
	->exclude('storage')
	->exclude('vendor')
	->exclude('larash.php')
	->in(__DIR__ . '/app/Http/Middleware')
	->in(__DIR__ . '/app/Helpers')
	->in(__DIR__ . '/app/Models')
	->in(__DIR__ . '/app/Traits')
	->in(__DIR__ . '/app/Utilities')
;

return new Sami($iterator, [
	'theme'     => 'default',
	'title'     => 'larash Plugin Framework Documentation',
	'build_dir' => __DIR__ . '/_docs/build',
	'cache_dir' => __DIR__ . '/_docs/cache',
]);