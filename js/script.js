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
