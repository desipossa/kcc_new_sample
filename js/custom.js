$(function () {
    console.log($('.mainVisual .util svg circle').get(0).getTotalLength());

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    });


    $('.mainVideo .video_wrap .info .close').on('click', function () {
        $('.mainVideo .info .desc').slideUp(1000, 'easeOutBounce');
    });

    $('.mainVideo .video_wrap .info .open').on('click', function () {
        $('.mainVideo .info .desc').slideDown(1000, 'easeOutBounce');
    });


    $('.footer .ft .site button').on('click', function () {
        $(this).toggleClass('on');
        $(this).next().toggle();
    })
});


$(function () {

    mainVisualSlide('.main_slide', 'images/main_visual');



    function mainVisualSlide(slide, bg) {
        const sl = new Swiper(slide, {
            effect: 'fade',
            loop: true,
            fadeEffect: {
                crossFade: true
            },
            allowTouchMove: false,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            speed: 1,
            on: {

                init: function () {
                    $(`${slide}.ks .slide`).css({
                        background: `url(./${bg}01.jpg) no-repeat fixed left center/100vw 100%`
                    });

                    $('.mainVisual .util .controll').addClass('on')
                },

                slideChangeTransitionStart: function () {
                    let index = this.realIndex;
                    const current = $(`${slide}.ks .swiper-slide-active`);
                    $(`${slide}.ks .swiper-slide:not(.swiper-slide-active)`).find('.slide .bg').css({ width: 0 });
                    $(`${slide}.ks .swiper-slide:not(.swiper-slide-active)`).find('.slide').children().remove();

                    $('.mainVisual .util .controll').removeClass('on')
                },
                slideChangeTransitionEnd: function () {
                    let index = this.realIndex;
                    let total = this.slides.length;
                    console.log(total)
                    const current = $(`${slide}.ks .swiper-slide-active`);
                    const a = new Array(6);

                    for (let i = 0; i < a.length; i++) {
                        current.find('.slide').append('<div class="bg_wrap"><span class="bg"></span></div>')
                    }

                    const span = $(`${slide}.ks .slide .bg`);
                    span.each(function (idx, itm) {
                        $(itm)
                            .css({
                                background: `url(./${bg}0${index % total + 1}.jpg) no-repeat calc((-100vw / ${a.length} * ${idx})) center/100vw 100%`
                            })
                            .animate({ width: '100%' }, 1000, function () {
                                $(`${slide} .slide`).css({
                                    background: `url(./${bg}0${index % total + 1}.jpg) no-repeat left center/100vw 100%`
                                })
                            })
                    });

                    current.addClass('on').siblings().removeClass('on');
                    $('.mainVisual .util .controll').addClass('on')

                }
            }
        });


        let turn = false;

        $('.mainVisual .util .controll .cont').on('click', function () {
            $(this).toggleClass('on');
            if (turn) {
                sl.autoplay.start();
            } else {
                sl.autoplay.pause();
            }

            turn = !turn;
        });


        $('.mainVisual .util .controll .prev').on('click', function () {
            sl.slidePrev();
        });

        $('.mainVisual .util .controll .next').on('click', function () {
            sl.slideNext();
        });
    }




});