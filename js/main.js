jQuery(document).on('ready', function ($) {
    "use strict";
    /* SCROLLSPY ACTIVE
        =======================*/
    $('body').scrollspy({
        target: '.mainmenu',
        offset: 50
    });
    /* Mobile menu click then remove
    ==========================*/
    $(".mainmenu ul.nav.navbar-nav li a").on("click", function () {
        $(".mainmenu .navbar-collapse").removeClass("in");
    });
    /* owlCarousel Slider Active
    =============================*/
    $('.sponser').owlCarousel({
        loop: true,
        responsiveClass: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
    });
    /* Client-Carousel Slider Active
    =============================*/
    $('.client-carousel').owlCarousel({
        loop: true,
        responsiveClass: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 500,
        center: true,
        items: 1,
        animateInClass: "fadeIn",
        animateOut: "fadeOut",
    });
    /* Scroll to top
    ===================*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /* jQuery Skillbar Active 
    ===========================*/
    $('.skillbar').each(function () {
        jQuery(this).appear(function () {
            jQuery(this).find('.count-bar').animate({
                width: jQuery(this).attr('data-percent')
            }, 3000);
            var percent = jQuery(this).attr('data-percent');
            jQuery(this).find('.count').html('<span>' + percent + '</span>');
        });
    });

    /*jQuery Type JS
    =================*/
    $("#type").typed({
        strings: ["Designer And Art Director.", "Développeur web.", "Développeur frontal","Développeur BackEnd.","Concepteur et analyseur de projets "],
        typeSpeed: 0,
        loop: true,
        cursorChar: "+",
    });
    /* === Animation on Scroll === */
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: false, // trigger animations on mobile devices (default is true)
        live: false // act on asynchronously loaded content (default is true)
    });
    wow.init();

    $('#nav-icon1').click(function () {
        $(this).toggleClass('open');
    });
    $('#nav-icon1').on('click', function () {
        $('.mainmenu-area').toggleClass('open-menu');
        $('.menu-icon').toggleClass('icon-fade-bg');

    });

    $('.single-award').on('mouseenter', function () {
        $('.single-award').removeClass('red-bg');
        $(this).addClass('red-bg');
    });
    $('.single-award').mouseleave(function () {
        $('.single-award').removeClass('red-bg');
        $('.single-award.active').addClass('red-bg');
    });

    $('.about-photo').on('mouseenter', function () {
        $('.about-photo .about-address').slideToggle(300);
    });
    $('.about-photo').on('mouseleave', function () {
        $('.about-photo .about-address').slideToggle(300);
    });


    $('.single-process a').on('mouseenter', function () {
        $(this).tab('show');
    });


}(jQuery));
/* Preloader Js
===================*/
jQuery(window).on("load", function () {
    $('.preload').fadeOut(500);
});