// preloader
$(window).on('load', function () {
  $('#preloader').delay(1050).fadeOut('slow');
  $('body').delay(3850).css({ overflow: 'visible' });
});

// scroll header bg animation start
$(document).ready(function () {
  // scroll to top
  $('#to_top').on('click', function () {
    window.scrollTo(0, 10);
  });
  // navbar background toggle on scroll
  $(window).scroll(function () {
    let top = $(document).scrollTop();
    if (top > 170) {
      $('header nav').css('background', '#111');
      $('header nav').addClass('shadow');
      $('#to_top').addClass('active');
    } else {
      $('header nav').css('background', 'transparent');
      $('header nav').removeClass('shadow');
      $('#to_top').removeClass('active');
    }
  });
});

$(document).ready(function () {
  // toggle mobile navigation
  $('.toggle_btn').click(function () {
    $('#mob-menu').slideDown('slow');
    $('.mobnav ul').show();
  });
  $('#close').click(function () {
    $('#mob-menu').slideUp('slow');
  });
  $('.mobnav ul li a').click(function () {
    $('#mob-menu').fadeOut();
  });
});

// AOS
AOS.init({
  offset: 120,
  duration: 700,
  once: true,
});

// owl carousel
let owl = $('.owl-carousel');
owl.owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: true,
  items: 1,
  autoplayHoverPause: true,
  animateOut: 'slideOutDown',
  animateIn: 'flipInX',
  responsive: {
    0: {
      items: 1,
    },
    700: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});
owl.on('mousewheel', '.owl-stage', function (e) {
  if (e.deltaY > 0) {
    owl.trigger('next.owl');
  } else {
    owl.trigger('prev.owl');
  }
  e.preventDefault();
});

// scroll to top when refreshed
window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 1);
  }, 0);
};
