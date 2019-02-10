<?php
namespace App\Http\Controllers;

use App\Helpers\LumenHelper;
use App\Http\Controllers\Controller;
use App\Models\Submissions;
use App\Models\WpUser;
use Carbon\Carbon;

class SubmssionsShortcodeController extends Controller {
	protected $helper, $request, $auth, $user;

	/**
	 * Create a new controller instance.
	 * @var $helper LumenHelper
	 * @var $user WpUser
	 * $user
	 */
	public function __construct(LumenHelper $helper) {
		$this->helper  = $helper;
		$this->request = $this->helper->request();
	}

	public function template($parameters, $content) {

		/*
			default params
			[submssions status=1 per_page=4 pagename='paginatepage' filter_by='upcoming' type='training'][/submssions]
		*/
		$status       = $parameters['status'] ? $parameters['status'] : 1;
		$type         = $parameters['type'] ? $parameters['type'] : 'event';
		$per_page     = $parameters['per_page'] ? $parameters['per_page'] : 3;
		$operator     = "<";
		$typeselected = 'past';
		if (!empty($parameters['filter_by']) && $parameters['filter_by'] == 'upcoming') {
			$operator     = ">";
			$typeselected = 'upcoming';
		} else {
			$operator     = "<";
			$typeselected = 'past';
		}
		$pageName = !empty($parameters['pagename']) ? $parameters['pagename'] : 'pagination_page';

		switch ($type) {
		case 'training':
			$filterby = 'training_issued_date';
			break;
		case 'event':
			$filterby = 'event_start_date';
			break;
		case 'journal':
			$filterby = 'journal_issued_date';
			break;
		default:
			$filterby = 'event_start_date';
			break;
		}

		//Get Paginated Data from Database
		$this->submssions = Submissions::where('Approval', $status)->where('type', $type)->where($filterby, $operator, Carbon::now())
			->orderBy('id', 'desc')
			->paginate($per_page, $columns = ['*'], $pageName, $this->request->get($pageName))
			->setPath($this->request->url())
			->appends($this->request->only('page'));

		return $this->helper->view('shortcodes.submssions', array(
			'submssions'   => $this->submssions,
			'request'      => $this->request,
			'type'         => $type,
			'typeselected' => $typeselected,
		));

	}
}
