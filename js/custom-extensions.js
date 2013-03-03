$(document).on("slideenter",
    function() {
        $('html, body').animate({
            scrollLeft: $(".current").offset().left - $("slides").offset().left - (window.innerWidth / 2) - $(".current").width / 2
        }, 200);
    }
);