<?php
namespace App\Http\Controllers;
use App\Helpers\LumenHelper;
use App\Helpers\WpHelper;
use App\Models\Documents;
use App\Models\Submissions;
use App\Models\WpPost;
use Laravel\Lumen\Application;

class SubmssionsController extends Controller {
	private $helper, $post, $request, $wphelper;

	/**
	 * Create a new controller instance.
	 * @param array $metabox_attributes (injected automatically)
	 */
	public function __construct(LumenHelper $helper, WpPost $post, WpHelper $wphelper, Application $app) {
		$this->helper   = $helper;
		$this->request  = $this->helper->request();
		$this->post     = $post;
		$this->wpHelper = $this->helper->wpHelper();

	}

	public function template() {

		$helper        = $this->helper;
		$this->request = $this->helper->request();

		$type = isset($_GET['tab']) ? $_GET['tab'] : 'journal';

		//Get Paginated Data from Database
		$submissions = Submissions::where('type', $type)
			->orderBy('id', 'desc')
			->get();

		return $this->helper->view('admin.Submssions.index', array(
			'submissions' => $submissions,
			'request'     => $this->request,
			'type'        => $type,
			'helper'      => $this->helper,

		));

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

			$this->validate($this->request, [
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
			$data = $this->request->all();

		} elseif ($subtype == 'event') {

			$this->validate($this->request,
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

			$data = $this->request->all();

		} elseif ($subtype == 'training') {

			$this->validate($this->request,
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

			$data = $this->request->all();

		} elseif ($subtype == 'reports') {

			$this->validate($this->request,
				[
					'report_organization' => 'required|string',
					'report_title'        => 'required|string',
					'yearofrelease'       => 'required|date',
					'report_authors'      => 'required|string',
					'report_abstract'     => 'required|string',
					'stateplan'           => 'sometimess|nullable|string',
					'yearterm'            => 'sometimess|nullable|string',
					'report_keywords'     => 'required|string',

				]);
			$data = $this->request->all();
		}

		// check if validate is fails

		// store data in database

		Submissions::where('id', $id)->update($data);
		// check if request has files then store it
		if (!empty($_FILES) && isset($_FILES['uploadDoc'])) {

			$this->validate($this->request,
				[
					'uploadDoc' => 'mimes:jpeg,png,bmp,tiff,pdf,jpg,zip,rar|max:4096',
				], [
					'required' => 'The :attribute field is required.',
					'mimes'    => 'Only jpeg,png,bmp,tiff,pdf,jpg are allowed.',
				]);

			$file = wp_upload_bits($_FILES['uploadDoc']['name'], null, @file_get_contents($_FILES['uploadDoc']['tmp_name']));

			if (FALSE === $file['error']) {

				\App\Models\Documents::Create(
					[
						'name'          => $file['url'],
						'submission_id' => $submssion->id,
					]);

			}

		}

		return redirect(admin_url('?page=NTSCUserSubmission&tab=' . $subtype . '&success=updated successfully'));

	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function destroy($id) {
		$subtype = Submissions::whereId($this->request->docId)->first()->type;
		Submissions::find($id)->delete();
		return redirect(admin_url('?page=NTSCUserSubmission&tab=' . $subtype . '&success=deleted successfully'));
	}

	public function multi_delete() {
		$ids = explode(',', $this->request->items);

		if (is_array($ids)) {
			Submissions::destroy($ids);
		} else {
			Submissions::whereId($this->request->items)->delete();
		}

		return redirect(admin_url('?page=NTSCUserSubmission&success=deleted successfully'));
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

		return redirect(admin_url('?page=NTSCUserSubmission&tab=' . $subm->type . '&success=approved successfully set'));
	}

	public function DocDelete() {

		Documents::where('id', $this->request->docId)->delete();
		$subtype = Submissions::whereId($this->request->docId)->first()->type;

		return redirect(admin_url('?page=NTSCUserSubmission&tab=' . $subtype . '&success=document deleted successfully'));
	}

}
