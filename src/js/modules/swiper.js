import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const swiper = new Swiper("#swiper-popular", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: 4,
  spaceBetween: 32,
  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev",
  },
});

export default swiper;
