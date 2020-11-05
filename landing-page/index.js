(function () {
    //toggling the hamburger btn.
    $(".navbar-toggler").on("click", function () {
        $("#navbarTogglerDemo01").toggle();
    });

    //toggling the contact us form.
    $(".contact-us-btn").on("click", function (e) {
        $(".contact-us-form-overlay").removeClass("hide");

        $("#collapseContactForm").toggle();
    });

    $(".contact-us-form-container").on("click", function (e) {
        e.stopPropagation();
    });

    //toggling the contact us form by clicking outside it.
    $(".contact-us-form-overlay").on("click", function (e) {
        $("#collapseContactForm").toggle();
    });

    $("form").submit(function (e) {
        e.preventDefault();
    });
})();
