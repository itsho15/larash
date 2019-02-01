<div class="wrap about-wrap">
    <h1>About Page Title</h1>

	@php
		$active_tab = isset( $_GET[ 'tab' ] ) ? $_GET[ 'tab' ] : 'Tab1';
	@endphp
    <div class="about-text">About text treatment</div>
    <h2 class="nav-tab-wrapper">
        <a href="?page=lumen_page&tab=Tab1" class="nav-tab <?php echo $active_tab == 'Tab1' ? 'nav-tab-active' : ''; ?> ">Tab1</a>
        <a href="?page=lumen_page&tab=Tab2" class="nav-tab <?php echo $active_tab == 'Tab2' ? 'nav-tab-active' : ''; ?>">Tab 2</a>
        <a href="?page=lumen_page&tab=Tab3" class="nav-tab <?php echo $active_tab == 'Tab3' ? 'nav-tab-active' : ''; ?>">Tab 3</a>
    </h2>
</div>


