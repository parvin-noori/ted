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

    }
    
    //show/more less button
    $('.show-more-btn').click(function (e) {
        $('.desc-list').slideToggle();
        $('.mainContent .desc').toggleClass('limit');
        $(this).find('span').text() === 'show more' ? $(this).find('span').text('show less') : $(this).find('span').text('show more');
        $(this).find('i').toggleClass('fa-chevron-up fa-chevron-down');
    })
});

