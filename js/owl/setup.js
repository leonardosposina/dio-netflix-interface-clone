$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots:false,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    800: {
      items: 4
    },
    1000: {
      items: 5
    }
  }
})