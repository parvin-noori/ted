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
    });


    //copy link pate
    $('#pageLink').val(window.location.href);
    $('#copyLink-button').click(function () {
        // Get the text field
        let copyText = document.getElementById("pageLink");

        // Select the text field
        copyText.select();


        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
    });

    //extend and reduce search form in header
    $('.searchBtn').click(function () {
        $('.search-form').addClass('extended-form');
        $('.main-menu').addClass('opacity-0');
        $('.searchInput').focus()
    })

    function reduceSearchForm() {
        $('.search-form').removeClass('extended-form');
        $('.main-menu').removeClass('opacity-0');
        $('.search-form')[0].reset();
    };
    $('#closeBtn').click(function () {
        reduceSearchForm();
    });


    $(document).click(function (e) {
        var container = $('.search-form');
        var searchBtn = $('.searchBtn');

        if (!container.is(e.target) && !searchBtn.is(e.target) && container.has(e.target).length === 0 && searchBtn.has(e.target).length === 0) {
            reduceSearchForm()
        }
    });

    // back from search list to main menu
    let responsiveSearchFilterList = $('.responsiveSearchFilterList');
    const mobileMenu = document.getElementById('mobileMenu');

    $('.hideSearchListBtn').click(function () {
        responsiveSearchFilterList.addClass('hideSearchList')
    })

    mobileMenu.addEventListener('hidden.bs.offcanvas', event => {
        if (responsiveSearchFilterList.hasClass('hideSearchList')) {
            responsiveSearchFilterList.removeClass('hideSearchList')
        }
    })
});

