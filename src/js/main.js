import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTestInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize";
import accordion from "./modules/accordion";
import burger from "./modules/burger";
import scrolling from "./modules/scrilling";
import drop from "./modules/drop";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  forms();
  modals();
  checkTestInputs('[name="name"]');
  checkTestInputs('[name="message"]');
  sliders(
    ".feedback-slider-item",
    "horizontal",
    ".main-prev-btn",
    ".main-next-btn"
  );
  mask('[name="phone"]');
  showMoreStyles(".button-styles", "#styles .row");
  sliders(".main-slider-item", "vertical");
  calc("#size", "#material", "#options", ".promocode", ".calc-price");
  filter();
  pictureSize(".sizes-block");
  accordion(".accordion-heading");
  burger(".burger-menu", ".burger");
  scrolling(".pageup");
  drop();
});