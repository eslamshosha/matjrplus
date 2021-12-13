
//sidenav
function openNav() {
    $('#main').toggleClass("active");
    $("body").toggleClass("overflow");
    $('.overlay-box').fadeToggle('500');
}
$('.overlay-box').click(function () {
    $('#main').removeClass("active");
    $("body").removeClass("overflow");
    $('.overlay-box').fadeOut('500');
})

//sidenav
  $(document).ready(function() {
      new WOW().init();
      
    // //main Slider Carousel
    ///////// ** main** /////////
    var specials = new Swiper('.main-slider .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.main-slider .swiper-btn-next',
            prevEl: '.main-slider .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 1,
            },
            1199: {
                slidesPerView: 1,
            },
        },
    });
    // //categories Slider Carousel
    var categories = new Swiper('.categories-slider .swiper-container', {
        loop: true,
        autoplay: false,
        breakpoints: {
            0: {
                slidesPerView: 3,
                spaceBetween: 8,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 8,
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 8,
            },
            1199: {
                slidesPerView: 7,
                spaceBetween: 8,
            },
        },
    });
    //autoComplete
    const autoCompleteJS = new autoComplete({
        data: {
            src: ["Sauce - Thousand Island", "Wild Boar - Tenderloin", "Goat - Whole Cut"]
        },
        resultItem: {
            highlight: {
                render: true
            }
        }
    });
});