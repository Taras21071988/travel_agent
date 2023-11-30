import autoCompleteFunc from "./modules/autoComplete";
import { easepick } from "@easepick/bundle";


const picker = new easepick.create({
  element: document.getElementById("datepicker"),
  css: ["https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css"],
});

autoCompleteFunc();
//
// import mobileNav from "./modules/mobile-nav.js";

// mobileNav();
