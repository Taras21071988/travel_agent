import autoCompleteFunc from "./modules/autoComplete";
import picker from "./modules/picker";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 32,
  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev",
  },
});

autoCompleteFunc();
picker;

// import mobileNav from "./modules/mobile-nav.js";

// mobileNav();
