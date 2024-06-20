$(function () {

    mainVisualSlide('.main_slide', 'images/main_visual');

    function mainVisualSlide(slide, bg) {
        new Swiper(slide, {
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
                        background: `url(./${bg}01.jpg) no-repeat left center/100vw 100%`
                    })
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
    }





})