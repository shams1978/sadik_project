$(function () {
    $('#datetimepicker1').datetimepicker({
        format: 'DD/MM/YYYY'
    });


    /* flash message */
    $(".alert").fadeTo(2000, 500).fadeOut(500, function(){
        $(".alert").alert('close');
    });


    /* Jquery DataTables */
    $('#table_id').DataTable({
        processing: true,
        serverSide: true,
        ajax: $(this).data('url')
    });


});


