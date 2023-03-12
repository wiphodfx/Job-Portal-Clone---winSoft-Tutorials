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

// -------------------------OPEN FEATURES TAB-------------------------

var tabLinks = document.getElementsByClassName("job-tablinks");
var tabContents = document.getElementsByClassName("jobWrapper");

function openTab(tabname) {
  for (tablink of tabLinks) {
    tablink.classList.remove("active-tablink");
  }

  for (tabcontent of tabContents) {
    tabcontent.classList.remove("activeJD");
  }
  event.currentTarget.classList.add("active-tablink");
  document.getElementById(tabname).classList.add("activeJD");
}

// ------------------------TESTIMONIAL SCRIPT------------------------

var userText = document.getElementById("slide1");
var activeText = document.getElementsByClassName("testimonial-text");
var btn = document.getElementsByClassName("btn1");

//        function moveCont(){
//            document.getElementById("slide").style.animationDirection ="reverse";
//        }

btn[0].onclick = function () {
  userText.style.transform = "translateX(0px)";
  for (btns of btn) {
    btns.classList.remove("active-btn1");
    for (activeTxt of activeText) {
      activeTxt.classList.remove("active-text1");
    }
  }
  let i = Array.from(btn).indexOf(event.target);
  this.classList.add("active-btn1");
  activeText[i + 1].classList.add("active-text1");
};

btn[1].onclick = function () {
  userText.style.transform = "translateX(-377px)";
  for (btns of btn) {
    btns.classList.remove("active-btn1");
    for (activeTxt of activeText) {
      activeTxt.classList.remove("active-text1");
    }
  }
  let i = Array.from(btn).indexOf(event.target);
  this.classList.add("active-btn1");
  activeText[i + 1].classList.add("active-text1");
};

btn[2].onclick = function () {
  userText.style.transform = "translateX(-754px)";
  for (btns of btn) {
    btns.classList.remove("active-btn1");
    for (activeTxt of activeText) {
      activeTxt.classList.remove("active-text1");
    }
  }
  let i = Array.from(btn).indexOf(event.target);
  this.classList.add("active-btn1");
  activeText[i + 1].classList.add("active-text1");
};

btn[3].onclick = function () {
  userText.style.transform = "translateX(-1131px)";
  for (btns of btn) {
    btns.classList.remove("active-btn1");
    for (activeTxt of activeText) {
      activeTxt.classList.remove("active-text1");
    }
  }
  let i = Array.from(btn).indexOf(event.target);
  this.classList.add("active-btn1");
  activeText[i + 1].classList.add("active-text1");
};
