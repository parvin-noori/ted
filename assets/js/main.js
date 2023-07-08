$(document).ready(function () {

//slider
    new Swiper('.slider', {});

//swiper
    new Swiper(".newest", {
        slidesPerView: 1.5,
        slidesPerGroup: 1,
        // spaceBetween: 10,
        spaceBetween: 18,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination-newest",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next-newest",
            prevEl: ".swiper-button-prev-newest",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            768: {
                slidesPerView: 3,

                slidesPerGroup: 3,
            },
            992: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            1200: {
                slidesPerView: 5,
                slidesPerGroup: 5,
            },
        },
    });

    //video in single page
    if ($('#video2').length > 0) {
        //video js(about this class)
        let video2 = videojs("video2");

        video2.ready(function () {
            overlay = $('#' + $(this).attr('id')).closest('.video-wrapper').find('.overlay');
            video2.vhs = null;

        });

        // video2.on("play", function () {
        //     overlay.addClass('d-none');
        //     overlay.removeClass('d-flex')
        // });
        // video2.on("pause", function () {
        //     overlay.addClass('d-flex');
        //     overlay.removeClass('d-none')
        // })
    }
});

