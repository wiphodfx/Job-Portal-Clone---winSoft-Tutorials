var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    // el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ----------------------------ON SCROLL SLIDE IN----------------------------

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveals");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var reavealTop = reveals[i].getBoundingClientRect().top;

    var reavealPoint = 150;

    if (reavealTop < windowHeight - reavealPoint) {
      reveals[i].classList.add("active");
    } else {
      // reveals[i].classList.remove("active");
    }
  }
}
