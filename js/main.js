$(window).scroll(() => {
  let scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $("header").addClass('nav-dark');
  } else {
    $("header").removeClass("nav-dark");
  }
});
