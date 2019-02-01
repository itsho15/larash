{{--Customize your layout to match your theme.--}}
@php
get_header();
 @endphp
 <h1>test</h1>

    @foreach($posts as $post)
       <div class="col-lg-4">

        <div class="uc-seassions">
            <h3>{{ $post->post_title }}</h3>
            <div class="uc-thumb">
                <span class="address">{{ $post->post_modified }}</span>
            </div>
            <div class="uc-meta">
                <span class="date"> {{ $post->author->display_name }}</span>
                <!--<span class="time">15:30 -17:30</span>-->
            </div>

        </div>


		</div>

        @endforeach


 <div class="tablenav bottom alignleft">
        {!! $posts->links('pagination.default') !!}
  </div>

@php
get_footer();

@endphp
