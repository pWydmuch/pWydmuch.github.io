$(window).on("scroll", () => {
    if ($(window).scrollTop()) {
      $('nav').addClass('white');
    } else {
      $('nav').removeClass('white');
    }
  })

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }