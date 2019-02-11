@extends('admin.layouts.default')

@section('heading')
    <h1></h1>

@endsection

@section('content')

<table id="table_id" class="display">
    <thead>
         <tr>
            <th scope="col">Title</th>
            <th scope="col">Modified</th>
            <th scope="col">Author</th>
        </tr>
    </thead>

    <tbody>

         @foreach($posts as $post)
                <tr>
                    <td class="column-primary" data-colname="Event">

                        {{ $post->post_title }}
                    </td>
                    <td>
                        {{ $post->post_modified }}
                    </td>
                    <td>
                        {{ $post->author->display_name }}
                    </td>
                </tr>
        @endforeach

    </tbody>

</table>

<script type="text/javascript">

jQuery(document).ready(function($) {

    $('#table_id').DataTable({
            'dom': 'Blfrtip',
            'buttons'  : [
                { extend: 'print', className: 'button print' },
                { extend: 'csv', className: 'button csv' },
                { extend: 'excel', className: 'button excel' },
                { extend: 'pdf', className: 'button pdf' },
                { extend: 'copy', className: 'button copy' },
                {'text' : '<span class="dashicons dashicons-no"></span> ', 'className' : 'button delete delBtn',},
            ],
            "processing": true,
            responsive: true
    });



});

</script>
@endsection

