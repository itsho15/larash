@extends('layouts.default')

@section('heading')
  <h1>login</h1>
@endsection

@section('content')
<form  method="POST" action="">
        <input type="hidden" name="_token" value="{{ wpLumen()->csrf() }}"/>
         <div class="form-group">
            <label for="user_email">emailaddress:</label>

            <input type="text" class="form-control" id="user_email" name="user_email" value="">
        </div>

        <div class="form-group">
            <label for="user_pass">password:</label>
            <input type="password" class="form-control" id="user_pass" name="user_pass" value="">
        </div>
         <button type="submit" class="btn btn-primary">Submit</button>
 </form>
@endsection

