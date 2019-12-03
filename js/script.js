$(document).ready(function(){
    new WOW().init();
   // blog Carousal
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        dots:false,
        responsive:{
            0:{
                items:1,
                nav:true,
            },
            600:{
                items:3,
                nav:true,
            },
            1000:{
                items:3,
                nav:true,
            }
        },
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')]
    });
    // click to scroll top
    $("#scrollUp button").click(function () {
        $("html, body").animate({
            scrollTop:0
        },2500);
    })

});