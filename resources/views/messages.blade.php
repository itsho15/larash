@if($helper->session()->has('success'))

<div class="alert alert-success">
	<p class="text-center"> <i class="fa fa-check-square fa-lg" aria-hidden="true"></i> {{ $helper->session()->get('success') }} </p>
</div>

@endif

@if(isset($_GET['success']))

	@php
	$class = 'updated notice-info';
	$message = __( $_GET['success']);

	printf( '<div class="%1$s"><p>%2$s</p></div>', esc_attr( $class ), esc_html( $message ) );
	@endphp
@endif


@if($helper->session()->has('error') )

<div class="alert alert-danger">
	<p class="text-center"> <i class="fa fa-exclamation-triangle fa-lg" aria-hidden="true"></i> {{ $helper->session()->get('error') }} </p>
</div>

@endif

@if($helper->session()->has('info') )

<div class="alert alert-info">
	<p class="text-center">
		<i class="fa fa-exclamation fa-lg" aria-hidden="true"></i>
	{{ $helper->session()->get('info') }}
    </p>
</div>

@endif

@if($helper->session()->get('errors') >0 )

	<div class="alert alert-danger ">

	@foreach($helper->session()->get('errors') as $key => $value)

		@foreach($value as $validate)
			<span>
			{{ str_replace('validation.', '', $validate) }}
		    </span>
		@endforeach
	@endforeach

	</div>

@endif
