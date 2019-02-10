<?php
namespace App\Http\Controllers;
use App\Helpers\LumenHelper;
use App\Helpers\WpHelper;
use App\Models\WpPost;

class GlobalController extends Controller {
	private $helper, $post, $request, $wphelper, $app, $lumenHelper;
	/**
	 * Create a new controller instance.
	 * @param array $metabox_attributes (injected automatically)
	 */
	public function __construct(LumenHelper $helper, WpPost $post, WpHelper $wphelper) {

		$this->helper   = $helper;
		$this->request  = $this->helper->request();
		$this->post     = $post;
		$this->wphelper = $wphelper;

		$this->app = $helper->app();

	}

	public function AddLinksToMenu() {

		$allRoutes = ['upload/yourresearch', 'my-submssion'];
		$key       = 1;

		?>

		<div id="CustomPluginLinks" class="posttypediv">
        		<div id="tabs-panel-wishlist-login" class="tabs-panel tabs-panel-active">
        			<ul id ="wishlist-login-checklist" class="categorychecklist form-no-clear">
        				<?php foreach ($allRoutes as $route) {?>
        				<li>
        					<label class="menu-item-title">
        						<input type="checkbox" class="menu-item-checkbox" name="menu-item[-<?php echo $key ?>][menu-item-object-id]" value="-<?php echo $key ?>"><?php echo $route ?>
        					</label>
        					<input type="hidden" class="menu-item-type" name="menu-item[-<?php echo $key ?>][menu-item-type]" value="custom">
        					<input type="hidden" class="menu-item-title" name="menu-item[-<?php echo $key ?>][menu-item-title]" value="<?php echo $route ?>">
        					<input type="hidden" class="menu-item-url" name="menu-item[-<?php echo $key ?>][menu-item-url]" value="<?php bloginfo("wpurl");?>/<?php echo $route ?>">
        					<input type="hidden" class="menu-item-classes" name="menu-item[-<?php echo $key ?>][menu-item-classes]" value="<?php echo $route ?>-pop">
        				</li>
        				<?php $key++;?>

        				<?php }?>
        			</ul>
        		</div>

        		<p class="button-controls">
        			<span class="list-controls">
        				<a href="<?php bloginfo("wpurl");?>/wp-admin/nav-menus.php?page-tab=all&amp;selectall=1#CustomPluginLinks" class="select-all">Select All</a>
        			</span>
        			<span class="add-to-menu">
        				<input type="submit" class="button-secondary submit-add-to-menu right" value="Add to Menu" name="add-post-type-menu-item" id="submit-CustomPluginLinks">
        				<span class="spinner"></span>
        			</span>
        		</p>
        </div>

       <?php

	}

	public function Tabs() {

		$this->wphelper->AddTabsPanel([
			'journal'  => 'journal',
			'event'    => 'event',
			'training' => 'training',
			'reports'  => 'reports',
		],
			'All User Submmtions',
			'NTSCUserSubmission',
			'journal', $this->callbackTabs('journal'));
	}

	public function callbackTabs($default) {

		$active_tab = isset($_GET['tab']) ? $_GET['tab'] : $default;
		return $this->app->call('\App\Http\Controllers\SubmssionsController@template');
	}

}
