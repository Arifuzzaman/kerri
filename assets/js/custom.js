/*-----------------------------------------------------------
* Template Name    : Copy Theme
* Author           : Md. Arifuzzaman
* Version          : 1.0.0
* Created          : March 2020
* File Description : Main Js file of the template
*------------------------------------------------------------
*/
$(window).on("load", function () {
        var e = $(".work-filter"),
            a = $("#menu-filter");
        e.isotope({ filter: "*", layoutMode: "masonry", animationOptions: { duration: 750, easing: "linear" } }),
            a.find("a").on("click", function () {
                var o = $(this).attr("data-filter");
                return a.find("a").removeClass("active"), $(this).addClass("active"), e.isotope({ filter: o, animationOptions: { animationDuration: 750, easing: "linear", queue: !1 } }), !1;
            });
    }),

$(window).on("scroll", function () {
    $(window).scrollTop() >= 50 ? $(".sticky").addClass("stickyadd") : $(".sticky").removeClass("stickyadd");
}),
    
    /*Testimonial JS*/
     $(".owl-carousel").owlCarousel({
         animateOut: 'fadeOut',
        animateIn: 'fadeInDown',
        loop: true,
        margin: 15,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause:true,
        nav: false,
        dots: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            600: {
                items: 1
            },
            900: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });
    
    
    
    
    $(document).on("click", ".navbar-collapse.show", function (e) {
        $(e.target).is("a") && $(this).collapse("hide");
    }),
    $(".navbar-nav a, .scroll_down a").on("click", function (e) {
        var a = $(this);
        $("html, body")
            .stop()
            .animate({ scrollTop: $(a.attr("href")).offset().top - 0 }, 1500, "easeInOutExpo"),
            e.preventDefault();
    }),
    $("#navbarCollapse").scrollspy({ offset: 20 }),
    $(".element").each(function () {
        var e = $(this);
        e.typed({ strings: e.attr("data-elements").split(","), typeSpeed: 100, backDelay: 3e3 });
    }),

    $("#status").fadeOut(),
    $("#preloader").delay(350).fadeOut("slow"),
    $("body").delay(350).css({ overflow: "visible" }),
    $(window).on("scroll", function () {
        $(this).scrollTop() > 100 ? $(".back_top").fadeIn() : $(".back_top").fadeOut();
    }),
    $(".back_top").click(function () {
        return $("html, body").animate({ scrollTop: 0 }, 1e3), !1;
    }),
    $("#wave_img").length && $("#wave_img").wavify({ height: 100, bones: 3, amplitude: 50, color: "#fff", speed: 0.25 });
