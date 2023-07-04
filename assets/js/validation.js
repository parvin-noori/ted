$(function () {

    var validator= $("#form-card").validate({

        rules: {
            autoAddress: {
                required: true,

            },
            addressDetails: {
                required: true,

            },
            addressTitle: {
                required: true,

            },
            action: "required"
        },
        messages: {
            autoAddress: {
                required: "الزامیست",
            },
            addressDetails: {
                required: "الزامیست",
            },
            addressTitle: {
                required: "الزامیست",
            },
        },
        submitHandler: function (form) {
            //submit map form
                console.log($('#form-card').serializeArray())
        }
    });
    $(".edit-location").click(function() {
        validator.resetForm();
        $('#form-card')[0].reset();
        $('.form-card .search-box__item input').removeClass("error");
    });
});