@extends('admin.layouts.default')

@section('heading')
<h1>WP Lumen Plugin Framework</h1>
@endsection
@php
		$active_tab = isset( $_GET[ 'tab' ] ) ? $_GET[ 'tab' ] : 'Tab1';
@endphp

@include('admin.parts.tabs')


@section('content')
     @if( $active_tab == 'Tab1' )
		   @include('admin.tabcontent1')
		 @elseif($active_tab == 'Tab2')
		   @include('admin.tabcontent2')
	 @endif
@endsection