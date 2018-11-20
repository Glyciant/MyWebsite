$(document).ready(function() {
    $("[data-toggle=\"tooltip\"]").tooltip();
    setTimeout(function() {
        $("#header-image").fadeIn(function() {
            setTimeout(function() {
                $("#header-content-top").fadeIn(function() {
                    setTimeout(function() {
                        $("#header-content-middle").fadeIn();
                        $("#header-content-bottom").fadeIn();
                    }, 200);
                });
            }, 200);
        });
    }, 500);
});