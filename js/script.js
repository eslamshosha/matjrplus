//sidenav
function openNav() {
  $("#main").toggleClass("active");
  $("body").toggleClass("overflow");
  $(".overlay-box").fadeToggle("500");
}
$(".overlay-box").click(function () {
  $("#main").removeClass("active");
  $("body").removeClass("overflow");
  $(".overlay-box").fadeOut("500");
});
///////fixednav
// NAVBAR STICKY
var $stickyNav = $(".navbar-sticky");

$(window).on("scroll load", function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 120) {
    $stickyNav.addClass("navbar-sticky-moved-up");
  } else {
    $stickyNav.removeClass("navbar-sticky-moved-up");
  }
  // apply transition
  if (scroll >= 150) {
    $stickyNav.addClass("navbar-sticky-transitioned");
  } else {
    $stickyNav.removeClass("navbar-sticky-transitioned");
  }
  // sticky on
  if (scroll >= 250) {
    $stickyNav.addClass("navbar-sticky-on");
  } else {
    $stickyNav.removeClass("navbar-sticky-on");
  }
});

//sidenav
$(document).ready(function () {
  new WOW().init();

  $(".logged-drop").on("click", function () {
    $(".logged-content").toggleClass("open");
    $(".overlay-box2").fadeToggle("500");
  });
  $(".overlay-box2").on("click", function () {
    $(".logged-content").removeClass("open");
    $(".overlay-box2").fadeToggle("500");
  });

  // //main Slider Carousel
  ///////// ** main** /////////
  var specials = new Swiper(".main-slider .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-slider .swiper-btn-next",
      prevEl: ".main-slider .swiper-btn-prev",
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
  var categories = new Swiper(".categories-slider .swiper-container", {
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
  ///////// **product-qty** /////////
  $(".qty-plus").on("click", function () {
    var $parentElm = $(this).parents(".item-qty");
    var maxVal = parseInt($parentElm.find(".qty-input").attr("data-max"));
    var value = $parentElm.find(".qty-input").val();
    if (value < maxVal) {
      value++;
    }
    $parentElm.find(".qty-input").val(value);
  });
  $(".qty-minus").on("click", function () {
    var $parentElm = $(this).parents(".item-qty");
    var minVal = parseInt($parentElm.find(".qty-input").attr("data-min"));
    var value = $parentElm.find(".qty-input").val();
    if (value > minVal) {
      value--;
    }
    $parentElm.find(".qty-input").val(value);
  });

  ///checkout page
  ///////// ** select address ** /////////
  $(".adress-item>input").on("change", function () {
    if ($(this).is(":checked")) {
      var addressText = $.trim($(this).siblings(".address-text").text());
      $(".locationInput").val(addressText);
      $("#addressBook-modal").modal("hide");
    }
  });
  ///////// ** select time ** /////////
  $(".select-date").on("click", function () {
    if ($("input.select-date").is(":checked")) {
      $("#date-modal").modal("show");
    }
  });

  $(".new-address-select").select2();

  if ($(window).width() > 1199) {
    // $(".datePicker").flatpickr({
    //   locale: document.dir == "rtl" ? "ar" : "en",
    //   minDate: "today",
    //   dateFormat: "d M Y",
    //   defaultDate: "today",
    // });
  }
  //autoComplete
  const autoCompleteJS = new autoComplete({
    data: {
      src: [
        "Sauce - Thousand Island",
        "Wild Boar - Tenderloin",
        "Goat - Whole Cut",
      ],
    },
    resultItem: {
      highlight: {
        render: true,
      },
    },
  });
  if ($(window).width() <= 991) {
    $(".register-section .user-ancor").removeAttr("data-toggle");
    $(".register-section .user-ancor").removeAttr("data-target");
  }

  $("#comment-link").on("click", function (e) {
    e.preventDefault();
    $("a[href=#tab-review]").click();
    $("html, body").animate(
      {
        scrollTop: $("#tab-review").offset().top - 100,
      },
      1000
    );
    $("#input-review").focus();
  });
});
