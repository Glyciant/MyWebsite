$(document).ready(function() {
    setTimeout(function() {
        $("#overlay1").fadeIn(function() {
            setTimeout(function() {
                $("#content").fadeIn();
            }, 500);
        });
    }, 500);
});