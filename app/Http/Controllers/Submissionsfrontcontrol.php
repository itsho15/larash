<?php
namespace App\Http\Controllers;
use App\Helpers\LumenHelper;
use App\Helpers\WpHelper;
use App\Models\Documents;
use App\Models\Submissions;
use App\Models\WpPost;

class Submissionsfrontcontrol extends Controller {
	private $helper, $post, $request, $wphelper;

	/**
	 * Create a new controller instance.
	 * @param array $metabox_attributes (injected automatically)
	 */
	public function __construct(LumenHelper $helper, WpPost $post, WpHelper $wphelper) {
		$this->helper   = $helper;
		$this->request  = $this->helper->request();
		$this->post     = $post;
		$this->wpHelper = $this->helper->wpHelper();

	}

	public function frontcontrol() {
		$helper        = $this->helper;
		$this->request = $this->helper->request();

		$type = isset($_GET['tab']) ? $_GET['tab'] : 'journal';

		//Get Paginated Data from Database
		$submissions = Submissions::where('type', $type)
			->orderBy('id', 'desc')
			->get();

		$user_info = get_userdata(get_current_user_id());

		if (is_user_logged_in()) {
			if (implode(', ', $user_info->roles) == 'reviewSubm' || implode(', ', $user_info->roles) == 'administrator') {
				return $this->helper->view('front.Submssions.control', array(
					'submissions' => $submissions,
					'request'     => $this->request,
					'type'        => $type,
					'helper'      => $this->helper,
				));
			} else {
				echo 'you don`t have permssions to view this page';
			}
		} else {
			return redirect('my-account');
		}

	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */

	public function update($id) {

		$subtype = Submissions::whereId($id)->first()->type;
		if ($subtype == 'journal') {

			$validator = \Validator::make($this->request->all(), [
				'journal_author'       => 'required|string',
				'journal_organization' => 'required|string',
				'journal_authors'      => 'required|string',
				'journal_issued_date'  => 'required|date',
				'journal_title'        => 'required|string',
				'journal_abstract'     => 'required|string',
				'journal_name'         => 'required|string',
				'journal_website'      => 'required|url',
				'journal_keywords'     => 'required|string',

			]);

			$data = [
				'journal_author'       => $this->request->journal_author,
				'journal_organization' => $this->request->journal_organization,
				'journal_authors'      => $this->request->journal_authors,
				'journal_issued_date'  => $this->request->journal_issued_date,
				'journal_title'        => $this->request->journal_title,
				'journal_abstract'     => $this->request->journal_abstract,
				'journal_name'         => $this->request->journal_name,
				'journal_website'      => $this->request->journal_website,
				'journal_keywords'     => $this->request->journal_keywords,
			];

		} elseif ($subtype == 'event') {

			$validator = \Validator::make($this->request->all(),
				[
					'event_organizer'           => 'required|string',
					'event_sponsor'             => 'required|string',
					'event_title'               => 'required|string',
					'event_start_date'          => 'required|date',
					'event_summary_type'        => 'required|string',
					'event_audience_target'     => 'required|string',
					'event_report_author'       => 'sometimes|nullable|string',
					'event_report_organization' => 'sometimes|nullable|string',
					'event_report_title'        => 'sometimes|nullable|string',
					'event_report_abstract'     => 'sometimes|nullable|string',
					'event_website'             => 'required|url',
					'event_keywords'            => 'required|string',

				], [
					'event_organizer' => $this->helper->trans('plugin.event_organizer'),
				]);

			$data = [
				'event_organizer'           => $this->request->event_organizer,
				'event_sponsor'             => $this->request->event_sponsor,
				'event_title'               => $this->request->event_title,
				'event_start_date'          => $this->request->event_start_date,
				'event_summary_type'        => $this->request->event_summary_type,
				'event_duration'            => $this->request->event_duration,
				'event_audience_target'     => $this->request->event_audience_target,
				'event_report_author'       => $this->request->event_report_author,
				'event_report_organization' => $this->request->event_report_organization,
				'event_report_title'        => $this->request->event_report_title,
				'event_website'             => $this->request->event_website,
				'event_keywords'            => $this->request->event_keywords,
			];

		} elseif ($subtype == 'training') {

			$validator = \Validator::make($this->request->all(),
				[
					'training_organizer'   => 'required|string',
					'training_title'       => 'required|string',
					'training_provider'    => 'required|string',
					'training_fee'         => 'required|string',
					'training_type'        => 'required|string',
					'training_duration'    => 'required|string',
					'training_description' => 'required|string',
					'training_issued_date' => 'required|date',
					'training_website'     => 'required|url',
					'training_keywords'    => 'required|string',

				], [
					'training_organizer'   => $this->helper->trans('plugin.training_organizer'),
					'training_title'       => $this->helper->trans('plugin.training_title'),
					'training_provider'    => $this->helper->trans('plugin.training_provider'),
					'training_fee'         => $this->helper->trans('plugin.training_fee'),
					'training_type'        => $this->helper->trans('plugin.training_type'),
					'training_duration'    => $this->helper->trans('plugin.training_duration'),
					'training_description' => $this->helper->trans('plugin.training_description'),
					'training_issued_date' => $this->helper->trans('plugin.training_issued_date'),
					'training_website'     => $this->helper->trans('plugin.training_website'),
					'training_keywords'    => $this->helper->trans('plugin.training_keywords'),

				]);

			$data = [
				'training_organizer'   => $this->request->training_organizer,
				'training_title'       => $this->request->training_title,
				'training_provider'    => $this->request->training_provider,
				'training_fee'         => $this->request->training_fee,
				'training_type'        => $this->request->training_type,
				'training_duration'    => $this->request->training_duration,
				'training_description' => $this->request->training_description,
				'training_issued_date' => $this->request->training_issued_date,
				'training_website'     => $this->request->training_website,
				'training_keywords'    => $this->request->training_keywords,
			];
		} elseif ($subtype == 'reports') {

			$validator = \Validator::make($this->request->all(),
				[
					'report_organization' => 'required|string',
					'report_title'        => 'required|string',
					'yearofrelease'       => 'required|date',
					'report_authors'      => 'required|string',
					'report_abstract'     => 'required|string',
					'stateplan'           => 'sometimes|nullable|string',
					'yearterm'            => 'sometimes|nullable|string',
					'report_keywords'     => 'required|string',

				]);

			$data = [
				'report_organization' => $this->request->report_organization,
				'report_title'        => $this->request->report_title,
				'yearofrelease'       => $this->request->yearofrelease,
				'report_authors'      => $this->request->report_authors,
				'report_abstract'     => $this->request->report_abstract,
				'report_keywords'     => $this->request->report_keywords,
				'stateplan'           => $this->request->stateplan,
				'yearterm'            => $this->request->yearterm,
			];
		}

		// check if validate is fails
		if ($validator->fails()) {
			$this->helper->session()->flash('errors', json_decode($validator->errors(), true));
			return $this->helper->redirect(url('admin/control'));
		}
		// store data in database

		Submissions::where('id', $id)->update($data);
		// check if request has files then store it
		if (!empty($_FILES) && isset($_FILES['uploadDoc'])) {

			$validator = \Validator::make($this->request->all(),
				[
					'uploadDoc' => 'mimes:jpeg,png,bmp,tiff,pdf,jpg,zip,rar|max:4096',
				], [
					'required' => 'The :attribute field is required.',
					'mimes'    => 'Only jpeg,png,bmp,tiff,pdf,jpg are allowed.',
				]);

			if ($validator->fails()) {
				$this->helper->session()->flash('errors', json_decode($validator->errors(), true));
				return $this->helper->redirect(url('admin/control'));
			}

			$file = wp_upload_bits($_FILES['uploadDoc']['name'], null, @file_get_contents($_FILES['uploadDoc']['tmp_name']));

			if (FALSE === $file['error']) {

				\App\Models\Documents::Create(
					[
						'name'          => $file['url'],
						'submission_id' => $id,
					]);

			}

		}

		$this->helper->session()->flash('success', 'updated Successfully!');
		return redirect(url('admin/control'));

	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function destroy($id) {
		Submissions::find($id)->delete();
		$this->helper->session()->flash('success', 'deleted successfully!');
		return redirect(url('admin/control'));
	}

	public function multi_delete() {
		$ids = explode(',', $this->request->items);

		if (is_array($ids)) {
			Submissions::destroy($ids);
		} else {
			Submissions::whereId($this->request->items)->delete();
		}
		$this->helper->session()->flash('success', 'deleted successfully!');
		return redirect(url('admin/control'));
	}

	public function approve($id) {
		$subm = Submissions::whereId($id)->first();
		if ($this->request->YesOrNo == 0) {
			$subm->Approval       = 0;
			$subm->approved_by    = get_current_user_id();
			$subm->reason_approve = $this->request->reason_approve;
			$subm->save();
		} else {
			$subm->Approval       = 1;
			$subm->approved_by    = get_current_user_id();
			$subm->reason_approve = null;
			$subm->save();
		}
		$this->helper->session()->flash('success', 'approved successfully set!');
		return redirect(url('admin/control'));
	}

	public function DocDelete() {

		Documents::where('id', $this->request->docId)->delete();
		$this->helper->session()->flash('success', 'document deleted successfully!');
		return redirect(url('admin/control'));
	}

}
