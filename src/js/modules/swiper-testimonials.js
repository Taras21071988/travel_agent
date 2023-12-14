import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const swiperVert = new Swiper("#testimonials-col-1", {
  loop: true,
  direction: "vertical",
  slidesPerView: "auto",
  spaceBetween: 32,
  grabCursor: true,
  ally: false,
  freeMode: true,
  speed: 8000,
  autoplay: {
    enabled: true,
    delay: 0.5,
    disableOnInteraction: false,
  },
});

export default swiperVert;
