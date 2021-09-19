/*
-------------------------------------------------------------------------
* Template Name    : Atrikt - Multi Purpose Html5 Landing Page          *
* Author           : ParExcellence                                      *
* Version          : 1.0.0                                              *
* File Description : Main Css file of the template                      *
*------------------------------------------------------------------------
*/
$(document).ready(function () {
    "use strict";
    /*----MAIN SLIDER JS-----*/
    (function ($) {
        var interleaveOffset = 0.5;
        var swiperOptions = {
            loop: true,
            speed: 1000,
            grabCursor: true,
            watchSlidesProgress: true,
            mousewheelControl: true,
            keyboardControl: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            on: {
                progress: function () {
                    var swiper = this;
                    for (var i = 0; i < swiper.slides.length; i++) {
                        var slideProgress = swiper.slides[i].progress;
                        var innerOffset = swiper.width * interleaveOffset;
                        var innerTranslate = slideProgress * innerOffset;
                        swiper.slides[i].querySelector(".slide-inner").style.transform =
                            "translate3d(" + innerTranslate + "px, 0, 0)";
                    }
                },
                touchStart: function () {
                    var swiper = this;
                    for (var i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].style.transition = "";
                    }
                },
                setTransition: function (speed) {
                    var swiper = this;
                    for (var i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].style.transition = speed + "ms";
                        swiper.slides[i].querySelector(".slide-inner").style.transition =
                            speed + "ms";
                    }
                }
            }
        };
        var swiper = new Swiper(".main-slider", swiperOptions);
    })(jQuery);

    /*----TESTIMONIAL SLIDER-----*/
    (function ($) {
        if ($('.swiper-container').length > 0) {
            var swiper = new Swiper('.client-container', {
                slidesPerView: 1,
                draggable: true,
                spaceBetween: 10,
                // init: false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }
            });
        }
    })(jQuery);
    /*----SET BACKGROUND IMAGE-----*/
    (function ($) {
        $(".bg-image").css('background', function () {
            var bg = ('url(' + $(this).data("image-src") + ') no-repeat center center');
            return bg;
        });
    })(jQuery);
    /*----SCALE IMAGE-----*/
    (function ($) {
        var controller = new ScrollMagic.Controller();
        var slides = $('.scale-image');
        for (var i = 0; i < slides.length; i++) {
            var image = $('img', slides[i]);
            var tween = TweenMax.to(image, 1, { scale: 1.2, ease: Power0.easeNone });
            var scene = new ScrollMagic
                .Scene({
                    triggerElement: slides[i],
                    duration: "200%",
                    triggerHook: 'onEnter'
                })
                .setTween(tween)
                .addTo(controller);
        }
    })(jQuery);
    
   
    /*----ONSCROLL JS-----*/
    $(window).on("scroll", function () {
        "use strict";

        /*----COUNTER JS-----*/
        var a = 0;
        (function ($) {
            var CounterLength = $('#counter');
            if (CounterLength.length > 0) {
                var oTop = $('#counter').offset().top - window.innerHeight;
                if (a == 0 && $(window).scrollTop() > oTop) {
                    $('.counter-value').each(function () {
                        var $this = $(this),
                            countTo = $this.attr('data-count');
                        $({
                            countNum: $this.text()
                        }).animate({
                            countNum: countTo
                        },
                            {
                                duration: 2000,
                                easing: 'swing',
                                step: function () {
                                    $this.text(Math.floor(this.countNum));
                                },
                                complete: function () {
                                    $this.text(this.countNum);
                                    //alert('finished');
                                }
                            });
                    });
                    a = 1;
                }
            }
        })(jQuery);

        var sections = $('section'),
            nav = $('.onepage-scroll'),
            nav_height = nav.outerHeight() + 25,
            win_scroll_top = $(window).scrollTop();
        win_scroll_top >= 20 ? $("nav").addClass("sticky-header") : $(".sticky").removeClass("sticky-header");
        win_scroll_top > 100 ? $(".back_top").fadeIn() : $(".back_top").fadeOut();
        /*----ON SCROLL CHANGE ACTIVE MENU-----*/
        var cur_pos = $(this).scrollTop();
        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();
            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('li').removeClass('active');
                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('active');
                 $(this).addClass("active");
            }
        });
    }),
     $(".menu-close-btn").on("click", function () {
        $('.navbar-collapse').removeClass('show');
    }), 
     $(".onepage-scroll .nav-item a").on("click", function (o) {
        var t = $(this);
        $('.nav-item').removeClass('active');
        $(t).parent().addClass('active');

    var target = $($(t).attr('href'));
    // if target is valid, scroll to
    if(target && target.offset()){
        $('html, body').stop().animate({
            scrollTop: target.offset().top-50
        }, 1500);
    }
        }), $(document).on("click", ".navbar-collapse.show", function (o) {
            $(o.target).is("a") && $(this).collapse("hide")
        }), $(".back_top").on("click", function () {
            return $("html, body").animate({
                scrollTop: 0
            }, 1e3), !1
        });

        FooterHeight();
    });


$(function () {
    var contentwidth = jQuery(window).width();
    if ((contentwidth) >= '992') {
        $(".dropdown").hover(
            function () {
                $('.dropdown-menu', this).stop(true, true).show();
                $(this).toggleClass('open');
            },
            function () {
                $('.dropdown-menu', this).stop(true, true).hide();
                $(this).toggleClass('open');
            });
    } 
});
/*----WOW ANIMATION-----*/
(function ($) {
    var length = $('.wow').length;
    if (length >= 1) {
        wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
        });
        wow.init();
    }
})(jQuery);
$(window).resize(function () {
    FooterHeight();
});
/*----FOOTER HEIGHT JS-----*/
function FooterHeight() {
    var footerHeight = $("footer").outerHeight();
    $('.main-content').css('margin-bottom', footerHeight);
}

/*----ISOTOP JS-----*/

if (('.portfolio-items').length > 0) {
    var $container = $('.portfolio-items');
    var $filter = $('#portfolio-filter');
    //$container.isotope({
    //    filter: '*',
    //    layoutMode: 'masonry',
    //    animationOptions: {
    //        //duration: 750,
    //        easing: 'linear'
    //    }
    //});
    $filter.find('a').on("click", function () {
        var selector = $(this).attr('data-filter');
        $filter.find('a').removeClass('active');
        $(this).addClass('active');
        $container.isotope({
            filter: selector,
            animationOptions: {
                easing: 'linear',
                queue: false,
                touchSensitivity: 2,
            }
        });
        return false;
    });
}
/*----MAGNIFIC POPUP JS-----*/
if (('.portfolio-items').length > 0) {
    $('.portfolio-items').each(function () {
        $(this).magnificPopup({
            delegate: '.js-zoom-gallery',
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });
}

    /*----COUNTER JS-----*/
    $.fn.jQuerySimpleCounter = function( options ) {
            var settings = $.extend({
                start:  0,
                end:    100,
                easing: 'swing',
                duration: 400,
                complete: ''
            }, options );

            var thisElement = $(this);

            $({count: settings.start}).animate({count: settings.end}, {
                duration: settings.duration,
                easing: settings.easing,
                step: function() {
                    var mathCount = Math.ceil(this.count);
                    thisElement.text(mathCount);
                },
                complete: settings.complete
            });
        };


    $('#number1').jQuerySimpleCounter({end: 69,duration: 3000});
    $('#number2').jQuerySimpleCounter({end: 45,duration: 3000});
    $('#number3').jQuerySimpleCounter({end: 212,duration: 2000});
    $('#number4').jQuerySimpleCounter({end: 64,duration: 3000});

    
/*----------------SERVICES PROGRESSBAR JS ------------*/


$('.bar-percentage[data-percentage]').each(function () {
  var progress = $(this);
  var percentage = Math.ceil($(this).attr('data-percentage'));
  $({countNum: 0}).animate({countNum: percentage}, {
    duration: 2000,
    easing:'linear',
    step: function() {
      // What todo on every count
      var pct = Math.floor(this.countNum) + '%';
      progress.text(pct) && progress.siblings().children().css('width',pct);
    }
  });
});
