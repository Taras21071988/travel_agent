import ScrollReveal from "scrollreveal";

const reveal = ScrollReveal({
  distance: "60px",
  duration: 2800,
});

reveal.reveal(".discover__title", {
  origin: "left",
});
reveal.reveal(" #sliderPrev", {
  delay: 1000,
  origin: "right",
});
reveal.reveal(" #sliderNext", {
  delay: 1000,
  origin: "left",
});
reveal.reveal(".discover__text", {
  origin: "right",
});
reveal.reveal(".discover__form", {
  origin: "bottom",
  delay: 1200,
});
reveal.reveal(".header, .popular__title", {
  origin: "top",
});
reveal.reveal(".hint-discover", {
  origin: "top",
  distance: "80px",
  delay: 1000,
});
reveal.reveal(".discorev__picture-img", {
  scale: 0.75,
});
reveal.reveal(".scroll-down", {
  scale: 0,
  delay: 500,
});

reveal.reveal(".partners", { delay: 2000 });
reveal.reveal(".container-right", { distance: "0px", opacity: 0 });

export default reveal;
