<?php namespace App\Http\Controllers;
use App\Helpers\LumenHelper;
use App\Models\WpPost;

class ExampleMetaBoxController extends Controller {
	private $helper, $post, $request;
	/**
	 * Create a new controller instance.
	 * @param array $metabox_attributes (injected automatically)
	 */
	public function __construct(LumenHelper $helper, WpPost $post) {
		$this->helper  = $helper;
		$this->request = $this->helper->request();
		$this->post    = $post;
	}
	public function template($post, $metabox_attributes) {
		$post = $this->post->with('meta')->find($post->ID);
		return $this->helper->view('meta_box', compact('post', 'metabox_attributes'));
	}
	public function save($post, $post_id, $update) {

		//The user is allowed to update the post...
		if ($this->request->filled('lumen_meta_test') && $this->request->user()->can('update-post', $post)) {

			$this->post = $this->post->with('meta')->find($post_id);

			if ($this->post->meta()->where('meta_key', 'lumen_meta_test')->exists()) {
				$this->post->meta()->where('meta_key', 'lumen_meta_test')->update(array(
					'meta_value' => $this->request->get('lumen_meta_test'),
				));
			} else {
				$this->post->meta()->create(array(
					'meta_key'   => 'lumen_meta_test',
					'meta_value' => $this->request->get('lumen_meta_test'),
				));
			}

			//$newpost = new WpPost();
			//$newpost->post_title = str_random(16);
			//$newpost->post_name = str_random(16);
			//$newpost->post_author = 1;
			//$newpost->save();
			//$newpost->attachTaxonomy(22);
			//$newpost->detachTaxonomy(22);
		}
	}

	public function menuMetaBox() {
		$routes = app('router')->getRoutes();

		foreach ($routes as $key => $value) {
			if ($value['method'] == 'GET') {
				$allroutes[] = $value['uri'];

			}
		}
		$key = 1;

		?>

		<div id="CustomPluginLinks" class="posttypediv">
        		<div id="tabs-panel-wishlist-login" class="tabs-panel tabs-panel-active">
        			<ul id ="wishlist-login-checklist" class="categorychecklist form-no-clear">
        				<?php foreach ($allroutes as $route) {?>
        				<li>
        					<label class="menu-item-title">
        						<input type="checkbox" class="menu-item-checkbox" name="menu-item[-<?php echo $key ?>][menu-item-object-id]" value="-<?php echo $key ?>"><?php echo ltrim($route, '/'); ?>
        					</label>
        					<input type="hidden" class="menu-item-type" name="menu-item[-<?php echo $key ?>][menu-item-type]" value="custom">
        					<input type="hidden" class="menu-item-title" name="menu-item[-<?php echo $key ?>][menu-item-title]" value="<?php echo ltrim($route, '/'); ?>">
        					<input type="hidden" class="menu-item-url" name="menu-item[-<?php echo $key ?>][menu-item-url]" value="<?php bloginfo("wpurl");?>/<?php echo ltrim($route, '/'); ?>">
        					<input type="hidden" class="menu-item-classes" name="menu-item[-<?php echo $key ?>][menu-item-classes]" value="<?php echo ltrim($route, '/'); ?>-pop">
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
}
