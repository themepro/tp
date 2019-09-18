;
(function ($) {
    "use strict";
    $(document).ready(function () {
        /*-------------------------------------------------------------------
                                For ScrollIt Js
                -------------------------------------------------------------------*/
        $.scrollIt({
            upKey: 38,
            downKey: 40,
            easing: 'linear',
            scrollTime: 500,
            activeClass: 'active',
            onPageChange: null,
            topOffset: -80
        });

        /*-------------------------------------------------------------------
                                    For Back To Top Js
                    -------------------------------------------------------------------*/
        $(".back-to-top").click(function (event) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            return false;
        });

        /*-------------------------------------------------------------------
                                    For Isotope Js
                  -------------------------------------------------------------------*/
        var $grid = $('.popUp').isotope({

            masonry: {
                gutter: 20
            }
        });

        /*-------------------------------------------------------------------
                                For Filter Js
              -------------------------------------------------------------------*/
        $('.filter-part').on('click', 'button', function () {

            var filterValue = $(this).attr('data-filter');
            $('.filter-part button').removeClass("current");
            $(this).addClass("current");
            $grid.isotope({
                filter: filterValue,
                stagger: 60
            });
        });

        /*-------------------------------------------------------------------
                                    For PopUp Js
                    -------------------------------------------------------------------*/
        $('.zoom-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            image: {
                verticalFit: true
            },
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS
                opener: function (element) {
                    return element.find('img');
                }
            }
        });

        /*-------------------------------------------------------------------
                                    For Owl-Carousel Js
                    -------------------------------------------------------------------*/
        $('.owl-carousel').owlCarousel({
            loop: true,
            items: 1,
            itemsDesktop: [1000, 1],
            itemsDesktopSmall: [979, 1],
            itemsTablet: [768, 1],
            pagination: true,
            navigation: false,
            navigationText: ["", ""],
            slideSpeed: 1000,
            singleItem: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true
        })

        /*-------------------------------------------------------------------
                                For Counter Js
                -------------------------------------------------------------------*/
        $('.counter').countUp();

        /*-------------------------------------------------------------------
                                    For Parallax Js
                    -------------------------------------------------------------------*/
        $('.hero').parallax({
            imageSrc: './images/hero.jpg'
        });

        $('.counterup').parallax({
            imageSrc: './images/counter-bg.jpg'
        });


    });
    $(window).on('load', function () {

        /*-------------------------------------------------------------------
	  					For Sticky Js
	  	-------------------------------------------------------------------*/
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('header').addClass('sticky');
            } else {
                $('header').removeClass('sticky');
            }
        });

        /*-------------------------------------------------------------------
	  					For Back To Top Js
	  	-------------------------------------------------------------------*/
        $(window).scroll(function () {
            var height = $(window).scrollTop();
            if (height > 100) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        });

        /*-------------------------------------------------------------------
        	  					For Progress Bar Js
        	  	-------------------------------------------------------------------*/
        $(window).on("scroll", function () {
            var my_skill = ".about .skills .skill";
            if ($(my_skill).length !== 0) {
                spy_scroll(my_skill);
            }

            /*-------------------------------------------------------------------
            	  					For Sticky Header Js
                      -------------------------------------------------------------------*/
            var scrollTop = $(".top");
            if (scrollTop.length !== 0) {
                if ($(window).scrollTop() >= $(".about").offset().top) {
                    scrollTop.addClass("scroll_top_show");
                } else {
                    scrollTop.removeClass("scroll_top_show");
                }
            }
        });

        /*-------------------------------------------------------------------
    	  					For Prealoder Js
              -------------------------------------------------------------------*/

        $.fakeLoader({
            timeToHide: 500,
            bgColor: "#ffb100",
            spinner: "spinner5"
        });
    });
})(jQuery);