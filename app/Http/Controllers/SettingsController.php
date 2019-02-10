<?php namespace App\Http\Controllers;
use App\Helpers\LumenHelper;
use App\Models\Documents;
use App\Models\WpPost;

class SettingsController extends Controller {
	protected $post, $request, $auth, $helper, $settings;

	/**
	 * Create a new controller instance.
	 * @param $helper LumenHelper
	 * @param $post WpPost
	 * @throws \Exception
	 */
	public function __construct(LumenHelper $helper, WpPost $post) {
		$this->post     = $post;
		$this->helper   = $helper;
		$this->request  = $this->helper->request();
		$this->auth     = $this->helper->auth();
		$this->settings = $this->helper->make('settings');
		if ($this->request->filled('action')) {
			$this->data();
		}

		if ($this->request->filled('import-export')) {
			dd('yes import handle');
		}
	}

	/**
	 * Process the Request Data
	 * @throws \Exception
	 */
	private function data() {

		$this->helper->validateCSRF();

		switch ($this->request->get('action')) {
		case 'forget':
			$this->settings->forget($this->request->get('key'));
			break;
		case 'add':
			$this->settings->set($this->request->only(['key', 'value']));
			break;
		case 'update':
			$this->settings->set($this->request->only(['key', 'value']), true);
			break;
		}
		$this->settings->save();
	}

	/**
	 * Show the view
	 * @throws \Exception
	 */
	public function template() {
		return $this->helper->view('admin-settings', array(
			'settings' => $this->settings,
		));
	}

	public function importExport() {
		return $this->helper->view('export-import', array(
			'helper' => $this->helper,
		));
	}

	public function ExportPost() {
		global $wpdb;
		$filename = 'ExportSub';
		$date     = date("Y-m-d H:i:s");
		$output   = fopen('php://output', 'w');

		$result = $wpdb->get_results("SELECT * FROM {$wpdb->prefix}submissions", ARRAY_A);

		$data = ["id", "type",
			"journal_author",
			"journal_organization",
			"journal_authors",
			"journal_issued_date",
			"journal_title",
			"journal_abstract",
			"journal_name",
			"journal_website",
			"journal_keywords",
			"event_organizer",
			"event_sponsor",
			"event_title",
			"event_start_date",
			"event_duration",
			"event_summary_type",
			"event_audience_target",
			"event_related_report",
			"event_report_author",
			"event_report_organization",
			"event_report_title",
			"event_report_abstract",
			"event_website",
			"event_keywords",
			"training_organizer",
			"training_title",
			"training_provider",
			"training_fee",
			"training_type",
			"training_duration",
			"training_description",
			"training_issued_date",
			"training_website",
			"training_keywords",
			"report_organization",
			"report_title",
			"yearofrelease",
			"report_authors",
			"report_abstract",
			"stateplan",
			"yearterm",
			"report_keywords",
			"Approval",
			"reason_approve",
			"user_id",
		];

		fputcsv($output, $data);

		foreach ($result as $key => $value) {

			$modified_values = array(
				$value['id'],
				$value['type'],
				$value['journal_author'],
				$value['journal_organization'],
				$value['journal_authors'],
				$value['journal_issued_date'],
				$value['journal_title'],
				$value['journal_abstract'],
				$value['journal_name'],
				$value['journal_website'],
				$value['journal_keywords'],
				$value['event_organizer'],
				$value['event_sponsor'],
				$value['event_title'],
				$value['event_start_date'],
				$value['event_duration'],
				$value['event_summary_type'],
				$value['event_audience_target'],
				$value['event_related_report'],
				$value['event_report_author'],
				$value['event_report_organization'],
				$value['event_report_title'],
				$value['event_report_abstract'],
				$value['event_website'],
				$value['event_keywords'],
				$value['training_organizer'],
				$value['training_title'],
				$value['training_provider'],
				$value['training_fee'],
				$value['training_type'],
				$value['training_duration'],
				$value['training_description'],
				$value['training_issued_date'],
				$value['training_website'],
				$value['training_keywords'],
				$value['report_organization'],
				$value['report_title'],
				$value['yearofrelease'],
				$value['report_authors'],
				$value['report_abstract'],
				$value['stateplan'],
				$value['yearterm'],
				$value['report_keywords'],
				$value['Approval'],
				$value['reason_approve'],
				$value['user_id'],

			);
			fputcsv($output, $modified_values);
		}

		header("Pragma: public");
		header("Expires: 0");
		header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
		header("Cache-Control: private", false);
		header('Content-Type: text/csv; charset=utf-8');
		// header("Content-Type: application/octet-stream");
		header("Content-Disposition: attachment; filename=\"" . $filename . " " . $date . ".csv\";");
		// header('Content-Disposition: attachment; filename=lunchbox_orders.csv');
		header("Content-Transfer-Encoding: binary");
		exit;
	}

	public function exportdocpost() {
		$filenamedoc = 'Exportdoc';
		$datedoc     = date("Y-m-d H:i:s");
		$outputdoc   = fopen('php://output', 'w');

		$resultdoc = Documents::all()->toArray();
		$data      = ['id', 'name', 'submission_id'];

		fputcsv($outputdoc, $data);

		foreach ($resultdoc as $key => $value) {

			$modified_values = array(
				$value['id'],
				$value['name'],
				$value['submission_id'],
			);
			fputcsv($outputdoc, $modified_values);
		}

		header("Pragma: public");
		header("Expires: 0");
		header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
		header("Cache-Control: private", false);
		header('Content-Type: text/csv; charset=utf-8');
		// header("Content-Type: application/octet-stream");
		header("Content-Disposition: attachment; filename=\"" . $filenamedoc . " " . $datedoc . ".csv\";");
		// header('Content-Disposition: attachment; filename=lunchbox_orders.csv');
		header("Content-Transfer-Encoding: binary");
		exit;
	}

	public function ImportSub() {

		if (!empty($_FILES) && $_FILES['ImportFileSub']['name'] != "") {
			$type = explode(".", $_FILES['ImportFileSub']['name']);

			if (strtolower(end($type)) == 'csv') {

				$file = file_get_contents($_FILES['ImportFileSub']['tmp_name']);

				global $wpdb;
				$wpdb->query(" TRUNCATE TABLE wp_submissions ");

				foreach (explode("\n", trim($file)) as $index => $record) {

					$out = explode(",", $record);
					if ($index) {

						$data = [];
						foreach ($arr as $key => $value) {
							$data[$value] = $out[$key];
						}

						$insert = $wpdb->insert('wp_submissions', str_replace('"', "", $data));

					} else {
						$arr = explode(",", $record);
					}
				}

				if ($insert > 0) {
					return redirect(admin_url('admin.php?page=import_export&success=Submissions Imported Successfully'));

				} else {
					return redirect(admin_url('admin.php?page=import_export&error=please Check Your Csv File Maybe You Upload Documents Csv And This Allow only for Submissions'));
				}

			} else {
				return redirect(admin_url('admin.php?page=import_export&error=Sorry, mime type not allowed Only Csv Files Allowed'));
			}
		}
	}

	public function importdoc() {

		if (!empty($_FILES) && $_FILES['ImportFileDoc']['name'] != "") {
			$type = explode(".", $_FILES['ImportFileDoc']['name']);

			if (strtolower(end($type)) == 'csv') {

				$file = file_get_contents($_FILES['ImportFileDoc']['tmp_name']);

				global $wpdb;
				$wpdb->query(" TRUNCATE TABLE wp_documents ");

				foreach (explode("\n", trim($file)) as $index => $record) {

					$out = explode(",", $record);
					if ($index) {

						$data = [];
						foreach ($arr as $key => $value) {
							$data[$value] = $out[$key];
						}

						$insert = $wpdb->insert('wp_documents', str_replace('"', "", $data));

					} else {
						$arr = explode(",", $record);
					}
				}

				if ($insert > 0) {

					return redirect(admin_url('admin.php?page=import_export&success=Documents Imported Successfully'));
				} else {
					return redirect(admin_url('admin.php?page=import_export&error=please Check Your Csv File Maybe You Upload Submissions Csv And This Allow only for Documents'));
				}

			} else {
				return redirect(admin_url('admin.php?page=import_export&error=Sorry, mime type not allowed Only Csv Files Allowed'));

			}
		}
	}

}