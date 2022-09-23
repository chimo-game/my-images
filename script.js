$("input[type='text'], textarea").on("keyup", function () {
    if ($(this).val() != "" && $("textarea").val() != "" && $("input[name='category']").is(":checked") == true) {
        $("input[type='submit']").removeAttr("disabled");
    }
});

$("input[name='category']").on("change", function () {
    if ($(this).val() != "" && $("textarea").val() != "" && $("input[name='category']").is(":checked") == true) {
        $("input[type='submit']").removeAttr("disabled");
    }
});