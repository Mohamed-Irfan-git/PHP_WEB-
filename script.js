
$(document).ready(function() {
    window.showForm = function(formId) {
        $(".form-box").removeClass("active");
        $("#" + formId).addClass("active");
    }
});