import autoCompleteFunc from "./modules/autoComplete";
import { easepick } from "@easepick/bundle";
import { TimePlugin } from "@easepick/time-plugin";

const picker = new easepick.create({
  element: "#datepicker",
  css: ["https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css"],
  zIndex: 10,
  format: "HH:mm, DD/MM/YY",
  plugins: [TimePlugin],
  TimePlugin: {
    format: "HH:mm",
  },
});
autoCompleteFunc();
//
// import mobileNav from "./modules/mobile-nav.js";

// mobileNav();
