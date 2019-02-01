<?php

namespace App\Http\Controllers;

use App\Helpers\LumenHelper;
use App\Models\WpPost;
use App\Traits\WpPageEnabled;

class ExampleRouteThemeViewController extends Controller {
	protected $helper, $vehicle;
	use WpPageEnabled;
	/**
	 * Create a new controller instance.
	 */
	public function __construct(LumenHelper $helper) {
		$this->setPageTitle('Test Theme');
		$this->helper  = $helper;
		$this->request = $this->helper->request();
		$this->auth    = $this->helper->auth();

		$this->middleware('auth');

	}

	public function show() {

		$this->post = WpPost::where('post_status', 'Publish')
			->whereIn('post_type', ['post'])
			->orderBy('post_title', 'asc')
			->paginate($items = 3, $columns = ['*'], $pageName = 'osama', $this->request->get('osama'))
			->setPath($this->request->url())
			->appends($this->request->only('osama'));

		return $this->helper->view('test-theme', array(
			'posts' => $this->post,
		));

	}
}
