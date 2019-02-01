@php
get_header();
@endphp
<div class="container">

    @yield('heading')
    <div id="page">
    	 @include('messages')
        @yield('content')

    </div>
    <!-- #poststuff -->
</div> <!-- .wrap -->
@php
get_footer();
@endphp