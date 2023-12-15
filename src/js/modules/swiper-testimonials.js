import Swiper from "swiper/bundle";
import "swiper/css/bundle";

function swiperTestim() {
  const swiperVert1 = new Swiper("#testimonials-col-1", {
    loop: true,
    direction: "vertical",
    slidesPerView: "auto",
    spaceBetween: 32,
    grabCursor: true,
    ally: false,
    freeMode: true,
    speed: 5000,
    autoplay: {
      enabled: true,
      delay: 0.5,
      disableOnInteraction: false,
    },
  });
  const swiperVert2 = new Swiper("#testimonials-col-2", {
    loop: true,
    direction: "vertical",
    slidesPerView: "auto",
    spaceBetween: 32,
    grabCursor: true,
    ally: false,
    freeMode: true,
    speed: 5000,
    autoplay: {
      reverseDirection: true,
      enabled: true,
      delay: 0.5,
      disableOnInteraction: false,
    },
  });
  const swiperVert3 = new Swiper("#testimonials-col-3", {
    loop: true,
    direction: "vertical",
    slidesPerView: "auto",
    spaceBetween: 32,
    grabCursor: true,
    ally: false,
    freeMode: true,
    speed: 5500,
    autoplay: {
      enabled: true,
      delay: 0.5,
      disableOnInteraction: false,
    },
  });
}

export default swiperTestim;
