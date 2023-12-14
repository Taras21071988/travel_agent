import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const swiperVert = new Swiper("#testimonials-col-1", {
  direction: "vertical",
  slidesPerView: 4,
  spaceBetween: 32,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
});

export default swiperVert;
