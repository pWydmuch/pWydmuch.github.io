$(window).on("scroll", () => {
    if ($(window).scrollTop()) {
      $('nav').addClass('white');
    } else {
      $('nav').removeClass('white');
    }
  })
