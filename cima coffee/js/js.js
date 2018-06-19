/*global $, jQuery, alert*/
/*control of interval between slides*/
$(document).ready(function () {

    "use strict";
    
    // Nice Scrolling
    $("html").niceScroll();

    $('.carousel').carousel({

        interval: 6000

    });

    // Show color option on the gear

    $(".gear-check").click(function () {
        
        $(".color-option").fadeToggle();
        
    });

    // Change Theme Color On Click

    var colorLi = $(".color-option ul li"),
        scrollButton = $("#scroll-top");

    colorLi.eq(0).css("backgroundColor", "#E41B17").end()
        .eq(1).css("backgroundColor", "#E426D5").end()
        .eq(2).css("backgroundColor", "#009AFF").end()
        .eq(3).css("backgroundColor", "#FFD500");

    colorLi.click(function () {
        
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
        
    });

    // Caching The Scroll Top Element
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 480) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
        //console.log($(this).scrollTop());
        
    });
    
    scrollButton.click(function () { $("html,body").animate({scrollTop : 0}, 1000); });

});

// Loading Screen

window.onload = function () {

    "use strict";
    
    $(".loading-overlay .spinner").fadeOut(1000,
        function () {
            
            $("body").css("overflow", "auto");
            $(this).parent().fadeOut(2000,
                function () {
                    $(this).remove();
                });
        });
};

