$(document).ready(function () {


    new Swiper('.slider', {});

    new Swiper(".newest", {
        slidesPerView: 2,
        slidesPerGroup:1,
        spaceBetween: 10,
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
                slidesPerGroup:2,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
                slidesPerGroup:3,
            },
            992: {
                slidesPerView: 3,
                slidesPerGroup:3,
            },
            1024: {
                slidesPerView: 5,
                slidesPerGroup:5,
            },
        },
    });
});

