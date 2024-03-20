/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/mobile-menu.js":
/*!*******************************!*\
  !*** ./src/js/mobile-menu.js ***!
  \*******************************/
/***/ (() => {

//Adding selectors to mobile menu modal window, mobile menu opening button and mobile menu closing button
var mobileMenu = document.querySelector(".mobile-menu");
var menuBtnOpen = document.querySelector(".menu-btn-open");
var menuBtnClose = document.querySelectorAll(".menu-btn-close");
//Creating a function to toggle mobile menu class for opening and closing of modal window
var toggleMenu = function toggleMenu() {
  return mobileMenu.classList.toggle("is-open");
};
//Adding the previous function on click event for modal opening and closing buttons
menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.forEach(function (el) {
  el.addEventListener("click", toggleMenu);
});

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ (() => {

//Adding selectors to the call request form window, opening and closing button of this window
var modal = document.querySelector(".backdrop");
var modalBtnOpen = document.querySelector(".modal-btn-open");
var modalBtnClose = document.querySelector(".modal-btn-close");
//Creating a function to toggle form window class for opening and closing of the window
var toggleModal = function toggleModal() {
  return modal.classList.toggle("is-hidden");
};
//Adding the previous function on click event for window opening and closing buttons
modalBtnOpen.addEventListener("click", toggleModal);
modalBtnClose.addEventListener("click", toggleModal);

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
//Adding selectors to procedure section elements
var wrapper = document.querySelector(".wrapper");
var carousel = document.querySelector(".carousel");
var firstCardWidth = carousel.querySelector(".card").offsetWidth;
var arrowBtns = document.querySelectorAll(".wrapper i");
var carouselChildrens = _toConsumableArray(carousel.children);
var isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId;
// Get the number of cards that can fit in the carousel at once
var cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(function (card) {
  carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});
// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(function (card) {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});
// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");
// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
  });
});
var dragStart = function dragStart(e) {
  isDragging = true;
  carousel.classList.add("dragging");
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};
var dragging = function dragging(e) {
  if (!isDragging) return;
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};
var dragStop = function dragStop() {
  isDragging = false;
  carousel.classList.remove("dragging");
};
var infiniteScroll = function infiniteScroll() {
  // If the carousel is at the beginning, scroll to the end
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
    // If the carousel is at the end, scroll to the beginning
  } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }
};
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", function () {
  return clearTimeout(timeoutId);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/html_images/hero-title_image.jpg */ "./src/html_images/hero-title_image.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --color_primary_dark: #000000;
  --color_primary_light: #ffffff;
  --color_secondary_light: #2b7fff;
  --color_secondary_dark: #011c44;
}

ul {
  list-style-type: none;
}

body {
  color: var(--color_primarydark);
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

p {
  margin: 0;
}

address {
  font-style: normal;
}

.section {
  padding: 48px 0;
}

.section-titles {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.3;
  margin-left: auto;
  margin-right: auto;
  color: var(--color_secondary_dark);
  font-family: "Play", sans-serif;
}
@media screen and (min-width: 1280px) {
  .section-titles {
    font-size: 64px;
  }
}

.section-titles.centered {
  text-align: center;
}

.visually-hidden {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.link {
  color: var(--color_secondary_dark);
  text-decoration: none;
}
.link:hover {
  color: var(--color_secondary_light);
}

.link_footer {
  color: var(--color_primary_light);
  text-decoration: none;
}
.link_footer:hover {
  color: var(--color_secondary_light);
  text-decoration: none;
}

.button {
  padding: 16px 32px;
  background-color: var(--color_secondary_light);
  color: var(--color_primary_light);
  border-radius: 32px;
  border: solid;
  cursor: pointer;
  margin: 20px 0;
}
.button:hover {
  background-color: black;
  color: white;
}

.modal-btn-close {
  position: absolute;
  top: 40px;
  right: 40px;
}

.modal-btn-open {
  padding: 16px 32px;
  cursor: pointer;
  font-weight: 600;
}

.swiper-button-prev,
.swiper-button-next {
  border: 0;
  background-color: transparent;
  display: none;
}

.swiper-button-next,
.swiper-rtl .swiper-button-prev {
  right: -20px !important;
  left: auto;
}

.swiper-button-prev,
.swiper-rtl .swiper-button-next {
  left: -50px !important;
  right: auto;
}

.container {
  width: 100%;
  max-width: 1288px;
  margin: 0 auto;
}

.header {
  display: flex;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: 2;
}
.header__container {
  display: flex;
  flex-grow: 1;
  align-items: center;
  background-color: transparent;
  gap: 40px;
  z-index: 2;
  justify-content: space-around;
}
@media screen and (min-width: 1280px) {
  .header__container {
    background-color: rgba(255, 255, 255, 0.2509803922);
  }
}
.header__nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  gap: 40px;
}
.header__menu {
  display: none;
}
@media screen and (min-width: 1280px) {
  .header__menu {
    display: flex;
    flex-grow: 1;
    justify-content: space-evenly;
    gap: 5px;
  }
}
.header__burger {
  background-color: transparent;
  margin: 20px 20px;
  border: none;
  fill: aliceblue;
}
@media screen and (min-width: 1280px) {
  .header__burger {
    display: none;
  }
}
.header__logo_text {
  margin: 20px 20px;
  color: var(--color_secondary_light);
  font-family: "Play", sans-serif;
}
.header__nav-icons {
  display: none;
}
@media screen and (min-width: 1280px) {
  .header__nav-icons {
    display: flex;
    gap: 40px;
    margin-right: 20px;
  }
}
.header__icon {
  font-size: 1.5em;
  color: #011c44;
}
.header__icon:hover {
  color: var(--color_secondary_light);
}

.fa-bars {
  color: white;
  font-size: 1.5em;
}
.fa-bars:hover {
  color: var(--color_secondary_light);
}

.hero-section {
  background: linear-gradient(0deg, #ffffff 1.62%, rgba(255, 255, 255, 0.850898) 5.31%, rgba(255, 255, 255, 0.193204) 58.65%, rgba(255, 255, 255, 0) 72.78%), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  height: 424px;
  position: relative;
}
@media screen and (min-width: 768px) {
  .hero-section {
    height: 824px;
  }
}
@media screen and (min-width: 1280px) {
  .hero-section {
    height: 1024px;
  }
}
.hero-section__name {
  font-size: 21px;
  margin-bottom: 16px;
  color: var(--color_secondary_dark);
  padding-left: 10px;
  margin: 0;
  text-align: center;
}
@media screen and (min-width: 1280px) {
  .hero-section__name {
    text-align: start;
  }
}
.hero-section__title {
  color: var(--color_secondary_light);
  font-family: "Play", sans-serif;
  font-size: 54px;
  font-weight: 700;
  margin-bottom: 0;
  line-height: 1;
  margin-top: 0;
  text-align: center;
}
@media screen and (min-width: 768px) {
  .hero-section__title {
    font-size: 90px;
  }
}
@media screen and (min-width: 1280px) {
  .hero-section__title {
    text-align: start;
    max-width: 529px;
    font-size: 120px;
  }
}
.hero-section__button {
  display: flex;
  margin: 20px auto;
  max-width: 219px;
  align-items: center;
  justify-content: center;
}
@media screen and (min-width: 1280px) {
  .hero-section__button {
    margin: 20px 0;
  }
}
.hero-section__under_call_button {
  font-weight: 400;
  font-size: 12px;
  margin-top: 20px;
  text-align: center;
}
@media screen and (min-width: 1280px) {
  .hero-section__under_call_button {
    text-align: start;
    max-width: 238px;
  }
}

.accent {
  color: var(--color_secondary_light);
}

.intro-section {
  padding-bottom: 0;
}
.intro-section__transformation {
  position: relative;
  display: flex;
}
.intro-section__transformation-text {
  display: flex;
  flex-direction: column;
  gap: 40px;
  font-size: 22px;
  text-align: center;
}
@media screen and (min-width: 1280px) {
  .intro-section__transformation-text {
    max-width: 709px;
    text-align: start;
  }
}
.intro-section__intro-title {
  margin-bottom: 0;
  margin-top: 0;
  font-family: "Play", sans-serif;
  font-weight: 700;
  margin-left: 1;
}
@media screen and (min-width: 1280px) {
  .intro-section__intro-title {
    margin-left: 0;
    margin-bottom: 53px;
    margin-top: 53px;
  }
}
.intro-section__info {
  padding: 0 50px;
}
@media screen and (min-width: 768px) {
  .intro-section__info {
    padding: 0 200px;
  }
}
@media screen and (min-width: 1280px) {
  .intro-section__info {
    padding: 0;
  }
}
.intro-section__transformation-pics {
  display: none;
}
@media screen and (min-width: 1280px) {
  .intro-section__transformation-pics {
    display: block;
  }
}
.intro-section__image {
  border-radius: 50%;
  display: none;
}
@media screen and (min-width: 1280px) {
  .intro-section__image {
    display: block;
  }
}
.intro-section__image2 {
  position: relative;
  border-radius: 50%;
  left: 172px;
  display: none;
}
@media screen and (min-width: 1280px) {
  .intro-section__image2 {
    display: block;
  }
}
.intro-section__star {
  fill: #011f4a;
  position: absolute;
  top: 361px;
  right: 376px;
}
.intro-section__star2 {
  fill: var(--color_secondary_light);
  position: absolute;
  top: 18px;
  right: -30px;
}

.why-section {
  background: rgb(255, 255, 255);
  background: linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(241, 243, 255) 43%, rgb(241, 243, 255) 100%);
  z-index: -1;
  position: relative;
  padding-bottom: 0;
}
.why-section__title {
  max-width: 450px;
  margin-top: 0;
}
@media screen and (min-width: 1280px) {
  .why-section__title {
    margin-top: 53px;
  }
}
.why-section__reasons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding-left: 0;
  flex-wrap: wrap;
}
.why-section__reason {
  border: 1px solid lightgray;
  border-radius: 32px;
  height: 181px;
  width: 316px;
  display: flex;
  align-items: center;
  padding: 24px 32px;
  background-color: white;
}
@media screen and (min-width: 1280px) {
  .why-section__reason {
    margin: 0 auto;
  }
}
.why-section__reasons-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 32px;
  padding: 24px, 32px;
}
.why-section__reason-article {
  width: 252px;
  text-align: center;
}
.why-section__reason-text {
  margin: 0;
}

.wave {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  fill: var(--color_primary_white);
}

.services-section__title {
  margin-bottom: 10px;
}
@media screen and (min-width: 1280px) {
  .services-section__title {
    margin-bottom: 53px;
  }
}
.services-section__photos {
  position: relative;
  left: 20px;
}
.services-section .swiper-wrapper {
  padding-left: 0;
}
.services-section__text_photo2, .services-section__text_photo3 {
  position: absolute;
  z-index: 2;
  font-size: 22px;
  color: white;
  width: 100px;
}
.services-section__text_photo2 {
  right: 152px;
  bottom: 24px;
}
.services-section__text_photo3 {
  right: 141px;
  bottom: 27px;
}

.carousel-button_left,
.carousel-button_right {
  display: none;
  border: 1px solid black;
  background-color: transparent;
  position: absolute;
  top: 200px;
  border-radius: 50%;
  padding: 10px;
}
@media screen and (min-width: 1280px) {
  .carousel-button_left,
  .carousel-button_right {
    display: block;
  }
}

.carousel_button {
  display: none !important;
}
@media screen and (min-width: 1280px) {
  .carousel_button {
    display: flex !important;
  }
}

.carousel-button_right {
  right: -20px;
  transform: rotate(180deg);
}

.carousel-button_left:hover,
.carousel-button_right:hover {
  background-color: var(--color_secondary_light);
  fill: white;
  border: transparent;
}

.swiper {
  width: 100%;
  height: 90%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  object-fit: cover;
}

.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: 0px !important;
}

.pagination {
  left: 20px !important;
}

.wrapper {
  max-width: 1100px;
  width: 100%;
  position: relative;
  margin: 0;
}
@media screen and (min-width: 1280px) {
  .wrapper {
    margin: 0 0 50px 50px;
  }
}

.wrapper i {
  top: 50%;
  height: 50px;
  width: 50px;
  cursor: pointer;
  font-size: 1.25rem;
  position: absolute;
  text-align: center;
  line-height: 50px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.23);
  transform: translateY(-50%);
  transition: transform 0.1s linear;
}

.wrapper i:active {
  transform: translateY(-50%) scale(0.85);
}

.wrapper i:first-child {
  left: -22px;
}

.wrapper i:last-child {
  right: -22px;
}

.wrapper .carousel {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 33.3333333333%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 16px;
  border-radius: 8px;
  scroll-behavior: smooth;
  scrollbar-width: none;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.carousel.no-transition {
  scroll-behavior: auto;
}

.carousel.dragging {
  scroll-snap-type: none;
  scroll-behavior: auto;
}

.carousel.dragging .card {
  cursor: grab;
  user-select: none;
}

.carousel :where(.card, .img) {
  display: flex;
  justify-content: center;
  align-items: left;
}

.carousel .card {
  scroll-snap-align: start;
  max-width: 345px;
  list-style: none;
  cursor: pointer;
  padding-bottom: 15px;
  flex-direction: column;
  border-radius: 8px;
  justify-content: flex-end;
}
@media screen and (max-width: 600px) {
  .carousel .card {
    scroll-snap-align: center;
  }
}

.carousel .card .img {
  height: 148px;
  width: 148px;
  border-radius: 50%;
}

.card .img img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fff;
}

@media screen and (max-width: 1120px) {
  .wrapper .carousel {
    grid-auto-columns: calc(50% + 5px);
  }
}
@media screen and (max-width: 600px) {
  .wrapper .carousel {
    grid-auto-columns: 110%;
  }
}
.howtofind_section {
  padding-top: 0;
  position: relative;
  padding-bottom: 0;
}
@media screen and (min-width: 1280px) {
  .howtofind_section {
    padding-bottom: 40px;
  }
}
.howtofind_section__container {
  display: flex;
  justify-content: center;
}
.howtofind_section__-container {
  max-width: 1059px;
}
.howtofind_section__howtofind {
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 265px;
}
@media screen and (min-width: 768px) {
  .howtofind_section__howtofind {
    margin-bottom: auto;
  }
}
@media screen and (min-width: 1280px) {
  .howtofind_section__howtofind {
    flex-wrap: nowrap;
    justify-content: space-between;
  }
}
.howtofind_section__text {
  background-color: #011f4a;
  border-radius: 32px;
  color: #ffffff;
  max-width: 422px;
  max-height: 482px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: top;
  justify-content: center;
  gap: 40px;
  padding: 4px 50px;
}
.howtofind_section__map {
  max-width: 505px;
  width: 100%;
  position: absolute;
  border: none;
  flex-shrink: 0;
  height: 244px;
  bottom: 0;
}
@media screen and (min-width: 768px) {
  .howtofind_section__map {
    position: static;
    width: 505px;
    height: 481px;
  }
}
@media screen and (min-width: 1280px) {
  .howtofind_section__map {
    width: 605px;
    height: 481px;
  }
}
.howtofind_section__form-title {
  font-size: 22px;
  text-align: center;
  font-weight: 600;
  max-width: 280px;
  margin: 48px 52px 0;
}
.howtofind_section__form-field {
  margin-bottom: 32px;
  text-align: center;
}
.howtofind_section__form-label {
  display: block;
}
.howtofind_section__form_button {
  margin: 20px;
}
.howtofind_section__input {
  padding: 16px 15px;
  width: 100%;
  border-radius: 32px;
  border: 1px solid #a18268;
  background-color: white;
  font-size: 16px;
  line-height: 1.17;
}
.howtofind_section__input::placeholder {
  color: black;
  font-size: 16px;
  line-height: 1.17;
}
.howtofind_section__approve {
  font-size: 12px;
  color: #747272;
  max-width: 213px;
  margin: 0 auto;
  text-align: center;
}

.footer {
  background-color: var(--color_secondary_dark);
  position: relative;
}
.footer__nav {
  display: block;
  text-align: center;
}
@media screen and (min-width: 1280px) {
  .footer__nav {
    display: flex;
    align-items: top;
    flex-grow: 1;
    gap: 40px;
  }
}
.footer__menu {
  display: block;
  gap: 0;
  flex-grow: 1;
  justify-content: space-evenly;
  margin-top: 15px;
}
@media screen and (min-width: 1280px) {
  .footer__menu {
    gap: 64px;
    display: flex;
  }
}
.footer__menu1 {
  padding-left: 0;
}
@media screen and (min-width: 1280px) {
  .footer__menu1 {
    padding-left: 40px;
  }
}
.footer__menu2 {
  display: none;
}
@media screen and (min-width: 1280px) {
  .footer__menu2 {
    display: block;
  }
}
.footer__icons {
  display: flex;
  gap: 24px;
  padding-left: 0;
  justify-content: center;
}
@media screen and (min-width: 1280px) {
  .footer__icons {
    justify-content: flex-start;
    padding-left: 70px;
  }
}
.footer__icon {
  color: white;
  font-size: 1.5em;
}
.footer__icon:hover {
  color: var(--color_secondary_light);
}
.footer__policy {
  margin-top: 0;
  margin-right: 10px;
  padding-left: 0;
}
@media screen and (min-width: 1280px) {
  .footer__policy {
    padding-left: 40px;
    margin-top: 35px;
  }
}
.footer__container {
  display: block;
  align-items: top;
  gap: 40px;
}
@media screen and (min-width: 1280px) {
  .footer__container {
    display: flex;
  }
}
.footer__logo_text {
  color: var(--color_secondary_light);
  font-family: "Play", sans-serif;
  margin-top: 0;
  position: relative;
  top: 10px;
  margin-left: 10px;
}
@media screen and (min-width: 768px) {
  .footer__logo_text {
    margin-top: 35px;
    top: 10px;
  }
}
@media screen and (min-width: 1280px) {
  .footer__logo_text {
    top: 0px;
  }
}
.footer__after {
  display: none;
}
@media screen and (min-width: 1280px) {
  .footer__after {
    display: block;
    width: 247px;
    height: 152px;
    position: absolute;
    content: "";
    background-repeat: no-repeat;
    bottom: 0;
    right: 0;
  }
}
.footer__copyright {
  color: #747272;
  font-size: 13px;
  font-weight: 400;
  position: relative;
  z-index: 10;
}
.footer__contact_item {
  text-decoration: none;
  color: var(--color_primary_light);
}
.footer__contact_item:hover {
  color: var(--color_secondary_light);
}

.backdrop {
  position: fixed;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px 0;
  transition: opacity 1s, visibility 1s;
}
.backdrop.is-hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.modal {
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 560px;
  background-color: #011c44;
  border-radius: 32px;
  padding: 48px;
  overflow-y: auto;
}
.modal__cross-button {
  border: none;
  background-color: transparent;
  position: absolute;
  top: 20px;
  right: 20px;
  color: white;
  cursor: pointer;
}
.modal__cross-button:hover {
  color: var(--color_secondary_light);
}
.modal__form-title {
  margin-bottom: 8px;
  color: white;
  text-align: center;
  font-size: 40px;
  margin-top: 0;
}
.modal__form-instruction {
  position: relative;
  margin: 0 auto 30px;
  text-align: center;
  color: white;
  font-size: 18px;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.form-field {
  margin-bottom: 32px;
}
.form-field__input {
  padding: 16px 42px;
  width: 310px;
  border-radius: 32px;
  border: 1px solid white;
  font-size: 16px;
  line-height: 1.17;
}
.form-field__input:focus {
  border-color: gray;
  outline: none;
  background-color: white;
}
.form-field__input::placeholder {
  color: black;
  font-size: 16px;
  line-height: 1.17;
}
.form-field__label {
  display: block;
}
.form-field__terms {
  margin: 0 auto;
  max-width: 220px;
  font-size: 12px;
  text-align: center;
  color: #747272;
}
.form-field__terms-link {
  color: white;
}
.form-field:focus::placeholder {
  color: var(--color_primarydark);
}
.form-field__button {
  margin: 0 auto 24px;
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  transform: translateX(100%);
  transition: transform 0.5s;
}
.mobile-menu.is-open {
  transform: translateX(0);
}
.mobile-menu__logo {
  margin: 20px 0;
  color: var(--color_secondary_light);
  font-family: "Play", sans-serif;
}
.mobile-menu__button {
  background-color: transparent;
  cursor: pointer;
  border: none;
  position: absolute;
  top: 36px;
  right: 100px;
}
.mobile-menu__button:hover {
  color: var(--color_secondary_light);
}
.mobile-menu__nav {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px;
}
.mobile-menu__link {
  text-decoration: none;
  color: var(--color_primarydark);
}
.mobile-menu__link:hover {
  color: var(--color_secondary_light);
}
.mobile-menu__nav-icons {
  margin-left: 20px;
  display: flex;
  gap: 20px;
}`, "",{"version":3,"sources":["webpack://./src/scss/utils/_variables.scss","webpack://./src/scss/main.scss","webpack://./src/scss/_base.scss","webpack://./src/scss/components/_links.scss","webpack://./src/scss/components/_buttons.scss","webpack://./src/scss/components/_containers.scss","webpack://./src/scss/layouts/_header-section.scss","webpack://./src/scss/layouts/_hero-section.scss","webpack://./src/scss/layouts/_intro-section.scss","webpack://./src/scss/layouts/_why-section.scss","webpack://./src/scss/layouts/_services-section.scss","webpack://./src/scss/layouts/_howtofind-section.scss","webpack://./src/scss/layouts/_footer-section.scss","webpack://./src/scss/layouts/_form-section.scss","webpack://./src/scss/layouts/_mobile-menu.scss"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --color_primary_dark: #000000;\n  --color_primary_light: #ffffff;\n  --color_secondary_light: #2b7fff;\n  --color_secondary_dark: #011c44;\n}\n\n$bp-mobile: 480px;\n$bp-tablet: 768px;\n$bp-desktop: 1280px;\n","@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap\");\n:root {\n  --color_primary_dark: #000000;\n  --color_primary_light: #ffffff;\n  --color_secondary_light: #2b7fff;\n  --color_secondary_dark: #011c44;\n}\n\nul {\n  list-style-type: none;\n}\n\nbody {\n  color: var(--color_primarydark);\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 1.5;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n}\n\np {\n  margin: 0;\n}\n\naddress {\n  font-style: normal;\n}\n\n.section {\n  padding: 48px 0;\n}\n\n.section-titles {\n  font-size: 48px;\n  font-weight: 700;\n  line-height: 1.3;\n  margin-left: auto;\n  margin-right: auto;\n  color: var(--color_secondary_dark);\n  font-family: \"Play\", sans-serif;\n}\n@media screen and (min-width: 1280px) {\n  .section-titles {\n    font-size: 64px;\n  }\n}\n\n.section-titles.centered {\n  text-align: center;\n}\n\n.visually-hidden {\n  position: absolute;\n  left: -10000px;\n  top: auto;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n}\n\n.link {\n  color: var(--color_secondary_dark);\n  text-decoration: none;\n}\n.link:hover {\n  color: var(--color_secondary_light);\n}\n\n.link_footer {\n  color: var(--color_primary_light);\n  text-decoration: none;\n}\n.link_footer:hover {\n  color: var(--color_secondary_light);\n  text-decoration: none;\n}\n\n.button {\n  padding: 16px 32px;\n  background-color: var(--color_secondary_light);\n  color: var(--color_primary_light);\n  border-radius: 32px;\n  border: solid;\n  cursor: pointer;\n  margin: 20px 0;\n}\n.button:hover {\n  background-color: black;\n  color: white;\n}\n\n.modal-btn-close {\n  position: absolute;\n  top: 40px;\n  right: 40px;\n}\n\n.modal-btn-open {\n  padding: 16px 32px;\n  cursor: pointer;\n  font-weight: 600;\n}\n\n.swiper-button-prev,\n.swiper-button-next {\n  border: 0;\n  background-color: transparent;\n  display: none;\n}\n\n.swiper-button-next,\n.swiper-rtl .swiper-button-prev {\n  right: -20px !important;\n  left: auto;\n}\n\n.swiper-button-prev,\n.swiper-rtl .swiper-button-next {\n  left: -50px !important;\n  right: auto;\n}\n\n.container {\n  width: 100%;\n  max-width: 1288px;\n  margin: 0 auto;\n}\n\n.header {\n  display: flex;\n  top: 0;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  z-index: 2;\n}\n.header__container {\n  display: flex;\n  flex-grow: 1;\n  align-items: center;\n  background-color: transparent;\n  gap: 40px;\n  z-index: 2;\n  justify-content: space-around;\n}\n@media screen and (min-width: 1280px) {\n  .header__container {\n    background-color: rgba(255, 255, 255, 0.2509803922);\n  }\n}\n.header__nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-grow: 1;\n  gap: 40px;\n}\n.header__menu {\n  display: none;\n}\n@media screen and (min-width: 1280px) {\n  .header__menu {\n    display: flex;\n    flex-grow: 1;\n    justify-content: space-evenly;\n    gap: 5px;\n  }\n}\n.header__burger {\n  background-color: transparent;\n  margin: 20px 20px;\n  border: none;\n  fill: aliceblue;\n}\n@media screen and (min-width: 1280px) {\n  .header__burger {\n    display: none;\n  }\n}\n.header__logo_text {\n  margin: 20px 20px;\n  color: var(--color_secondary_light);\n  font-family: \"Play\", sans-serif;\n}\n.header__nav-icons {\n  display: none;\n}\n@media screen and (min-width: 1280px) {\n  .header__nav-icons {\n    display: flex;\n    gap: 40px;\n    margin-right: 20px;\n  }\n}\n.header__icon {\n  font-size: 1.5em;\n  color: #011c44;\n}\n.header__icon:hover {\n  color: var(--color_secondary_light);\n}\n\n.fa-bars {\n  color: white;\n  font-size: 1.5em;\n}\n.fa-bars:hover {\n  color: var(--color_secondary_light);\n}\n\n.hero-section {\n  background: linear-gradient(0deg, #ffffff 1.62%, rgba(255, 255, 255, 0.850898) 5.31%, rgba(255, 255, 255, 0.193204) 58.65%, rgba(255, 255, 255, 0) 72.78%), url(\"/src/html_images/hero-title_image.jpg\");\n  background-repeat: no-repeat;\n  background-position: center top;\n  background-size: cover;\n  padding: 100px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  justify-content: center;\n  height: 424px;\n  position: relative;\n}\n@media screen and (min-width: 768px) {\n  .hero-section {\n    height: 824px;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .hero-section {\n    height: 1024px;\n  }\n}\n.hero-section__name {\n  font-size: 21px;\n  margin-bottom: 16px;\n  color: var(--color_secondary_dark);\n  padding-left: 10px;\n  margin: 0;\n  text-align: center;\n}\n@media screen and (min-width: 1280px) {\n  .hero-section__name {\n    text-align: start;\n  }\n}\n.hero-section__title {\n  color: var(--color_secondary_light);\n  font-family: \"Play\", sans-serif;\n  font-size: 54px;\n  font-weight: 700;\n  margin-bottom: 0;\n  line-height: 1;\n  margin-top: 0;\n  text-align: center;\n}\n@media screen and (min-width: 768px) {\n  .hero-section__title {\n    font-size: 90px;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .hero-section__title {\n    text-align: start;\n    max-width: 529px;\n    font-size: 120px;\n  }\n}\n.hero-section__button {\n  display: flex;\n  margin: 20px auto;\n  max-width: 219px;\n  align-items: center;\n  justify-content: center;\n}\n@media screen and (min-width: 1280px) {\n  .hero-section__button {\n    margin: 20px 0;\n  }\n}\n.hero-section__under_call_button {\n  font-weight: 400;\n  font-size: 12px;\n  margin-top: 20px;\n  text-align: center;\n}\n@media screen and (min-width: 1280px) {\n  .hero-section__under_call_button {\n    text-align: start;\n    max-width: 238px;\n  }\n}\n\n.accent {\n  color: var(--color_secondary_light);\n}\n\n.intro-section {\n  padding-bottom: 0;\n}\n.intro-section__transformation {\n  position: relative;\n  display: flex;\n}\n.intro-section__transformation-text {\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n  font-size: 22px;\n  text-align: center;\n}\n@media screen and (min-width: 1280px) {\n  .intro-section__transformation-text {\n    max-width: 709px;\n    text-align: start;\n  }\n}\n.intro-section__intro-title {\n  margin-bottom: 0;\n  margin-top: 0;\n  font-family: \"Play\", sans-serif;\n  font-weight: 700;\n  margin-left: 1;\n}\n@media screen and (min-width: 1280px) {\n  .intro-section__intro-title {\n    margin-left: 0;\n    margin-bottom: 53px;\n    margin-top: 53px;\n  }\n}\n.intro-section__info {\n  padding: 0 50px;\n}\n@media screen and (min-width: 768px) {\n  .intro-section__info {\n    padding: 0 200px;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .intro-section__info {\n    padding: 0;\n  }\n}\n.intro-section__transformation-pics {\n  display: none;\n}\n@media screen and (min-width: 1280px) {\n  .intro-section__transformation-pics {\n    display: block;\n  }\n}\n.intro-section__image {\n  border-radius: 50%;\n  display: none;\n}\n@media screen and (min-width: 1280px) {\n  .intro-section__image {\n    display: block;\n  }\n}\n.intro-section__image2 {\n  position: relative;\n  border-radius: 50%;\n  left: 172px;\n  display: none;\n}\n@media screen and (min-width: 1280px) {\n  .intro-section__image2 {\n    display: block;\n  }\n}\n.intro-section__star {\n  fill: #011f4a;\n  position: absolute;\n  top: 361px;\n  right: 376px;\n}\n.intro-section__star2 {\n  fill: var(--color_secondary_light);\n  position: absolute;\n  top: 18px;\n  right: -30px;\n}\n\n.why-section {\n  background: rgb(255, 255, 255);\n  background: linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(241, 243, 255) 43%, rgb(241, 243, 255) 100%);\n  z-index: -1;\n  position: relative;\n  padding-bottom: 0;\n}\n.why-section__title {\n  max-width: 450px;\n  margin-top: 0;\n}\n@media screen and (min-width: 1280px) {\n  .why-section__title {\n    margin-top: 53px;\n  }\n}\n.why-section__reasons {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 40px;\n  padding-left: 0;\n  flex-wrap: wrap;\n}\n.why-section__reason {\n  border: 1px solid lightgray;\n  border-radius: 32px;\n  height: 181px;\n  width: 316px;\n  display: flex;\n  align-items: center;\n  padding: 24px 32px;\n  background-color: white;\n}\n@media screen and (min-width: 1280px) {\n  .why-section__reason {\n    margin: 0 auto;\n  }\n}\n.why-section__reasons-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  gap: 32px;\n  padding: 24px, 32px;\n}\n.why-section__reason-article {\n  width: 252px;\n  text-align: center;\n}\n.why-section__reason-text {\n  margin: 0;\n}\n\n.wave {\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  overflow: hidden;\n  line-height: 0;\n  fill: var(--color_primary_white);\n}\n\n.services-section__title {\n  margin-bottom: 10px;\n}\n@media screen and (min-width: 1280px) {\n  .services-section__title {\n    margin-bottom: 53px;\n  }\n}\n.services-section__photos {\n  position: relative;\n  left: 20px;\n}\n.services-section .swiper-wrapper {\n  padding-left: 0;\n}\n.services-section__text_photo2, .services-section__text_photo3 {\n  position: absolute;\n  z-index: 2;\n  font-size: 22px;\n  color: white;\n  width: 100px;\n}\n.services-section__text_photo2 {\n  right: 152px;\n  bottom: 24px;\n}\n.services-section__text_photo3 {\n  right: 141px;\n  bottom: 27px;\n}\n\n.carousel-button_left,\n.carousel-button_right {\n  display: none;\n  border: 1px solid black;\n  background-color: transparent;\n  position: absolute;\n  top: 200px;\n  border-radius: 50%;\n  padding: 10px;\n}\n@media screen and (min-width: 1280px) {\n  .carousel-button_left,\n  .carousel-button_right {\n    display: block;\n  }\n}\n\n.carousel_button {\n  display: none !important;\n}\n@media screen and (min-width: 1280px) {\n  .carousel_button {\n    display: flex !important;\n  }\n}\n\n.carousel-button_right {\n  right: -20px;\n  transform: rotate(180deg);\n}\n\n.carousel-button_left:hover,\n.carousel-button_right:hover {\n  background-color: var(--color_secondary_light);\n  fill: white;\n  border: transparent;\n}\n\n.swiper {\n  width: 100%;\n  height: 90%;\n}\n\n.swiper-slide {\n  text-align: center;\n  font-size: 18px;\n  background: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.swiper-slide img {\n  display: block;\n  object-fit: cover;\n}\n\n.swiper-horizontal > .swiper-pagination-bullets,\n.swiper-pagination-bullets.swiper-pagination-horizontal,\n.swiper-pagination-custom,\n.swiper-pagination-fraction {\n  bottom: 0px !important;\n}\n\n.pagination {\n  left: 20px !important;\n}\n\n.wrapper {\n  max-width: 1100px;\n  width: 100%;\n  position: relative;\n  margin: 0;\n}\n@media screen and (min-width: 1280px) {\n  .wrapper {\n    margin: 0 0 50px 50px;\n  }\n}\n\n.wrapper i {\n  top: 50%;\n  height: 50px;\n  width: 50px;\n  cursor: pointer;\n  font-size: 1.25rem;\n  position: absolute;\n  text-align: center;\n  line-height: 50px;\n  background: #fff;\n  border-radius: 50%;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.23);\n  transform: translateY(-50%);\n  transition: transform 0.1s linear;\n}\n\n.wrapper i:active {\n  transform: translateY(-50%) scale(0.85);\n}\n\n.wrapper i:first-child {\n  left: -22px;\n}\n\n.wrapper i:last-child {\n  right: -22px;\n}\n\n.wrapper .carousel {\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 33.3333333333%;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  gap: 16px;\n  border-radius: 8px;\n  scroll-behavior: smooth;\n  scrollbar-width: none;\n}\n\n.carousel::-webkit-scrollbar {\n  display: none;\n}\n\n.carousel.no-transition {\n  scroll-behavior: auto;\n}\n\n.carousel.dragging {\n  scroll-snap-type: none;\n  scroll-behavior: auto;\n}\n\n.carousel.dragging .card {\n  cursor: grab;\n  user-select: none;\n}\n\n.carousel :where(.card, .img) {\n  display: flex;\n  justify-content: center;\n  align-items: left;\n}\n\n.carousel .card {\n  scroll-snap-align: start;\n  max-width: 345px;\n  list-style: none;\n  cursor: pointer;\n  padding-bottom: 15px;\n  flex-direction: column;\n  border-radius: 8px;\n  justify-content: flex-end;\n}\n@media screen and (max-width: 600px) {\n  .carousel .card {\n    scroll-snap-align: center;\n  }\n}\n\n.carousel .card .img {\n  height: 148px;\n  width: 148px;\n  border-radius: 50%;\n}\n\n.card .img img {\n  width: 140px;\n  height: 140px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 4px solid #fff;\n}\n\n@media screen and (max-width: 1120px) {\n  .wrapper .carousel {\n    grid-auto-columns: calc(50% + 5px);\n  }\n}\n@media screen and (max-width: 600px) {\n  .wrapper .carousel {\n    grid-auto-columns: 110%;\n  }\n}\n.howtofind_section {\n  padding-top: 0;\n  position: relative;\n  padding-bottom: 0;\n}\n@media screen and (min-width: 1280px) {\n  .howtofind_section {\n    padding-bottom: 40px;\n  }\n}\n.howtofind_section__container {\n  display: flex;\n  justify-content: center;\n}\n.howtofind_section__-container {\n  max-width: 1059px;\n}\n.howtofind_section__howtofind {\n  display: flex;\n  gap: 40px;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-bottom: 265px;\n}\n@media screen and (min-width: 768px) {\n  .howtofind_section__howtofind {\n    margin-bottom: auto;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .howtofind_section__howtofind {\n    flex-wrap: nowrap;\n    justify-content: space-between;\n  }\n}\n.howtofind_section__text {\n  background-color: #011f4a;\n  border-radius: 32px;\n  color: #ffffff;\n  max-width: 422px;\n  max-height: 482px;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: top;\n  justify-content: center;\n  gap: 40px;\n  padding: 4px 50px;\n}\n.howtofind_section__map {\n  max-width: 505px;\n  width: 100%;\n  position: absolute;\n  border: none;\n  flex-shrink: 0;\n  height: 244px;\n  bottom: 0;\n}\n@media screen and (min-width: 768px) {\n  .howtofind_section__map {\n    position: static;\n    width: 505px;\n    height: 481px;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .howtofind_section__map {\n    width: 605px;\n    height: 481px;\n  }\n}\n.howtofind_section__form-title {\n  font-size: 22px;\n  text-align: center;\n  font-weight: 600;\n  max-width: 280px;\n  margin: 48px 52px 0;\n}\n.howtofind_section__form-field {\n  margin-bottom: 32px;\n  text-align: center;\n}\n.howtofind_section__form-label {\n  display: block;\n}\n.howtofind_section__form_button {\n  margin: 20px;\n}\n.howtofind_section__input {\n  padding: 16px 15px;\n  width: 100%;\n  border-radius: 32px;\n  border: 1px solid #a18268;\n  background-color: white;\n  font-size: 16px;\n  line-height: 1.17;\n}\n.howtofind_section__input::placeholder {\n  color: black;\n  font-size: 16px;\n  line-height: 1.17;\n}\n.howtofind_section__approve {\n  font-size: 12px;\n  color: #747272;\n  max-width: 213px;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.footer {\n  background-color: var(--color_secondary_dark);\n  position: relative;\n}\n.footer__nav {\n  display: block;\n  text-align: center;\n}\n@media screen and (min-width: 1280px) {\n  .footer__nav {\n    display: flex;\n    align-items: top;\n    flex-grow: 1;\n    gap: 40px;\n  }\n}\n.footer__menu {\n  display: block;\n  gap: 0;\n  flex-grow: 1;\n  justify-content: space-evenly;\n  margin-top: 15px;\n}\n@media screen and (min-width: 1280px) {\n  .footer__menu {\n    gap: 64px;\n    display: flex;\n  }\n}\n.footer__menu1 {\n  padding-left: 0;\n}\n@media screen and (min-width: 1280px) {\n  .footer__menu1 {\n    padding-left: 40px;\n  }\n}\n.footer__menu2 {\n  display: none;\n}\n@media screen and (min-width: 1280px) {\n  .footer__menu2 {\n    display: block;\n  }\n}\n.footer__icons {\n  display: flex;\n  gap: 24px;\n  padding-left: 0;\n  justify-content: center;\n}\n@media screen and (min-width: 1280px) {\n  .footer__icons {\n    justify-content: flex-start;\n    padding-left: 70px;\n  }\n}\n.footer__icon {\n  color: white;\n  font-size: 1.5em;\n}\n.footer__icon:hover {\n  color: var(--color_secondary_light);\n}\n.footer__policy {\n  margin-top: 0;\n  margin-right: 10px;\n  padding-left: 0;\n}\n@media screen and (min-width: 1280px) {\n  .footer__policy {\n    padding-left: 40px;\n    margin-top: 35px;\n  }\n}\n.footer__container {\n  display: block;\n  align-items: top;\n  gap: 40px;\n}\n@media screen and (min-width: 1280px) {\n  .footer__container {\n    display: flex;\n  }\n}\n.footer__logo_text {\n  color: var(--color_secondary_light);\n  font-family: \"Play\", sans-serif;\n  margin-top: 0;\n  position: relative;\n  top: 10px;\n  margin-left: 10px;\n}\n@media screen and (min-width: 768px) {\n  .footer__logo_text {\n    margin-top: 35px;\n    top: 10px;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .footer__logo_text {\n    top: 0px;\n  }\n}\n.footer__after {\n  display: none;\n}\n@media screen and (min-width: 1280px) {\n  .footer__after {\n    display: block;\n    width: 247px;\n    height: 152px;\n    position: absolute;\n    content: \"\";\n    background-repeat: no-repeat;\n    bottom: 0;\n    right: 0;\n  }\n}\n.footer__copyright {\n  color: #747272;\n  font-size: 13px;\n  font-weight: 400;\n  position: relative;\n  z-index: 10;\n}\n.footer__contact_item {\n  text-decoration: none;\n  color: var(--color_primary_light);\n}\n.footer__contact_item:hover {\n  color: var(--color_secondary_light);\n}\n\n.backdrop {\n  position: fixed;\n  z-index: 3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 20px 0;\n  transition: opacity 1s, visibility 1s;\n}\n.backdrop.is-hidden {\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n}\n\n.modal {\n  position: relative;\n  width: 100%;\n  max-width: 400px;\n  height: 100%;\n  max-height: 560px;\n  background-color: #011c44;\n  border-radius: 32px;\n  padding: 48px;\n  overflow-y: auto;\n}\n.modal__cross-button {\n  border: none;\n  background-color: transparent;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  color: white;\n  cursor: pointer;\n}\n.modal__cross-button:hover {\n  color: var(--color_secondary_light);\n}\n.modal__form-title {\n  margin-bottom: 8px;\n  color: white;\n  text-align: center;\n  font-size: 40px;\n  margin-top: 0;\n}\n.modal__form-instruction {\n  position: relative;\n  margin: 0 auto 30px;\n  text-align: center;\n  color: white;\n  font-size: 18px;\n}\n\n.contact-form {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-field {\n  margin-bottom: 32px;\n}\n.form-field__input {\n  padding: 16px 42px;\n  width: 310px;\n  border-radius: 32px;\n  border: 1px solid white;\n  font-size: 16px;\n  line-height: 1.17;\n}\n.form-field__input:focus {\n  border-color: gray;\n  outline: none;\n  background-color: white;\n}\n.form-field__input::placeholder {\n  color: black;\n  font-size: 16px;\n  line-height: 1.17;\n}\n.form-field__label {\n  display: block;\n}\n.form-field__terms {\n  margin: 0 auto;\n  max-width: 220px;\n  font-size: 12px;\n  text-align: center;\n  color: #747272;\n}\n.form-field__terms-link {\n  color: white;\n}\n.form-field:focus::placeholder {\n  color: var(--color_primarydark);\n}\n.form-field__button {\n  margin: 0 auto 24px;\n}\n\n.mobile-menu {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  transform: translateX(100%);\n  transition: transform 0.5s;\n}\n.mobile-menu.is-open {\n  transform: translateX(0);\n}\n.mobile-menu__logo {\n  margin: 20px 0;\n  color: var(--color_secondary_light);\n  font-family: \"Play\", sans-serif;\n}\n.mobile-menu__button {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n  position: absolute;\n  top: 36px;\n  right: 100px;\n}\n.mobile-menu__button:hover {\n  color: var(--color_secondary_light);\n}\n.mobile-menu__nav {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin: 20px;\n}\n.mobile-menu__link {\n  text-decoration: none;\n  color: var(--color_primarydark);\n}\n.mobile-menu__link:hover {\n  color: var(--color_secondary_light);\n}\n.mobile-menu__nav-icons {\n  margin-left: 20px;\n  display: flex;\n  gap: 20px;\n}","ul {\n  list-style-type: none;\n}\nbody {\n  color: var(--color_primarydark);\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 1.5;\n}\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n}\np {\n  margin: 0;\n}\naddress {\n  font-style: normal;\n}\n.section {\n  padding: 48px 0;\n}\n.section-titles {\n  font-size: 48px;\n  font-weight: 700;\n  line-height: 1.3;\n  margin-left: auto;\n  margin-right: auto;\n  color: var(--color_secondary_dark);\n  font-family: \"Play\", sans-serif;\n  @media screen and (min-width: $bp-desktop) {\n    font-size: 64px;\n  }\n}\n.section-titles.centered {\n  text-align: center;\n}\n.visually-hidden {\n  position: absolute;\n  left: -10000px;\n  top: auto;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n}\n",".link {\n  color: var(--color_secondary_dark);\n  text-decoration: none;\n  &:hover {\n    color: var(--color_secondary_light);\n  }\n}\n.link_footer {\n  color: var(--color_primary_light);\n  text-decoration: none;\n  &:hover {\n    color: var(--color_secondary_light);\n    text-decoration: none;\n  }\n}\n",".button {\n  padding: 16px 32px;\n  background-color: var(--color_secondary_light);\n  color: var(--color_primary_light);\n  border-radius: 32px;\n  border: solid;\n  cursor: pointer;\n  &:hover {\n    background-color: black;\n    color: white;\n  }\n  margin: 20px 0;\n}\n.modal-btn-close {\n  position: absolute;\n  top: 40px;\n  right: 40px;\n}\n.modal-btn-open {\n  padding: 16px 32px;\n  cursor: pointer;\n  font-weight: 600;\n}\n.swiper-button-prev,\n.swiper-button-next {\n  border: 0;\n  background-color: transparent;\n  display: none;\n}\n\n.swiper-button-next,\n.swiper-rtl .swiper-button-prev {\n  right: -20px !important;\n  left: auto;\n}\n.swiper-button-prev,\n.swiper-rtl .swiper-button-next {\n  left: -50px !important;\n  right: auto;\n}\n",".container {\n  width: 100%;\n  max-width: 1288px;\n  margin: 0 auto;\n}\n",".header {\n  display: flex;\n  top: 0;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  z-index: 2;\n\n  &__container {\n    display: flex;\n    flex-grow: 1;\n    align-items: center;\n\n    background-color: transparent;\n    gap: 40px;\n    z-index: 2;\n    justify-content: space-around;\n\n    @media screen and (min-width: $bp-desktop) {\n      background-color: #ffffff40;\n    }\n  }\n  &__nav {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-grow: 1;\n    gap: 40px;\n  }\n\n  &__menu {\n    display: none;\n    @media screen and (min-width: $bp-desktop) {\n      display: flex;\n      flex-grow: 1;\n      justify-content: space-evenly;\n      gap: 5px;\n    }\n  }\n  &__burger {\n    background-color: transparent;\n    margin: 20px 20px;\n    border: none;\n    fill: aliceblue;\n    @media screen and (min-width: $bp-desktop) {\n      display: none;\n    }\n  }\n  &__logo_text {\n    margin: 20px 20px;\n    color: var(--color_secondary_light);\n    font-family: \"Play\", sans-serif;\n    @media screen and (min-width: $bp-desktop) {\n    }\n  }\n  &__nav-icons {\n    display: none;\n    @media screen and (min-width: $bp-desktop) {\n      display: flex;\n      gap: 40px;\n      margin-right: 20px;\n    }\n  }\n\n  &__icon {\n    font-size: 1.5em;\n    color: #011c44;\n  }\n  &__icon {\n    &:hover {\n      color: var(--color_secondary_light);\n    }\n  }\n}\n\n.fa-bars {\n  color: white;\n  font-size: 1.5em;\n  &:hover {\n    color: var(--color_secondary_light);\n  }\n}\n",".hero-section {\n  background: linear-gradient(\n      0deg,\n      #ffffff 1.62%,\n      rgba(255, 255, 255, 0.850898) 5.31%,\n      rgba(255, 255, 255, 0.193204) 58.65%,\n      rgba(255, 255, 255, 0) 72.78%\n    ),\n    url(\"/src/html_images/hero-title_image.jpg\");\n  background-repeat: no-repeat;\n  background-position: center top;\n  background-size: cover;\n  padding: 100px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  justify-content: center;\n  height: 424px;\n\n  position: relative;\n\n  @media screen and (min-width: $bp-tablet) {\n    height: 824px;\n  }\n  @media screen and (min-width: $bp-desktop) {\n    height: 1024px;\n  }\n\n  &__name {\n    font-size: 21px;\n    margin-bottom: 16px;\n    color: var(--color_secondary_dark);\n    padding-left: 10px;\n    margin: 0;\n    text-align: center;\n    @media screen and (min-width: $bp-desktop) {\n      text-align: start;\n    }\n  }\n\n  &__title {\n    color: var(--color_secondary_light);\n    font-family: \"Play\", sans-serif;\n    font-size: 54px;\n    font-weight: 700;\n    margin-bottom: 0;\n    line-height: 1;\n    margin-top: 0;\n    text-align: center;\n    @media screen and (min-width: $bp-tablet) {\n      font-size: 90px;\n    }\n    @media screen and (min-width: $bp-desktop) {\n      text-align: start;\n      max-width: 529px;\n      font-size: 120px;\n    }\n  }\n\n  &__button {\n    display: flex;\n    margin: 20px auto;\n    max-width: 219px;\n    align-items: center;\n    justify-content: center;\n\n    @media screen and (min-width: $bp-desktop) {\n      margin: 20px 0;\n    }\n  }\n\n  &__under_call_button {\n    font-weight: 400;\n    font-size: 12px;\n    margin-top: 20px;\n    text-align: center;\n    @media screen and (min-width: $bp-desktop) {\n      text-align: start;\n      max-width: 238px;\n    }\n  }\n}\n\n.accent {\n  color: var(--color_secondary_light);\n}\n",".intro-section {\n  padding-bottom: 0;\n  &__transformation {\n    position: relative;\n    display: flex;\n  }\n  &__transformation-text {\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n    font-size: 22px;\n    text-align: center;\n\n    @media screen and (min-width: $bp-desktop) {\n      max-width: 709px;\n\n      text-align: start;\n    }\n  }\n\n  &__intro-title {\n    margin-bottom: 0;\n    margin-top: 0;\n    font-family: \"Play\", sans-serif;\n    font-weight: 700;\n    margin-left: 1;\n    @media screen and (min-width: $bp-desktop) {\n      margin-left: 0;\n      margin-bottom: 53px;\n      margin-top: 53px;\n    }\n  }\n\n  &__info {\n    padding: 0 50px;\n    @media screen and (min-width: $bp-tablet) {\n      padding: 0 200px;\n    }\n    @media screen and (min-width: $bp-desktop) {\n      padding: 0;\n    }\n  }\n\n  &__transformation-pics {\n    display: none;\n    @media screen and (min-width: $bp-desktop) {\n      display: block;\n    }\n  }\n\n  &__image {\n    border-radius: 50%;\n    display: none;\n    @media screen and (min-width: $bp-desktop) {\n      display: block;\n    }\n  }\n  &__image2 {\n    position: relative;\n    border-radius: 50%;\n    left: 172px;\n    display: none;\n    @media screen and (min-width: $bp-desktop) {\n      display: block;\n    }\n  }\n  &__star {\n    fill: #011f4a;\n    position: absolute;\n    top: 361px;\n    right: 376px;\n  }\n  &__star2 {\n    fill: var(--color_secondary_light);\n    position: absolute;\n    top: 18px;\n    right: -30px;\n  }\n}\n",".why-section {\n  background: rgb(255, 255, 255);\n  background: linear-gradient(\n    0deg,\n    rgba(255, 255, 255, 1) 0%,\n    rgba(241, 243, 255, 1) 43%,\n    rgba(241, 243, 255, 1) 100%\n  );\n  z-index: -1;\n  position: relative;\n  padding-bottom: 0;\n\n  &__title {\n    max-width: 450px;\n    margin-top: 0;\n    @media screen and (min-width: $bp-desktop) {\n      margin-top: 53px;\n    }\n  }\n\n  &__reasons {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 40px;\n    padding-left: 0;\n    flex-wrap: wrap;\n  }\n  &__reason {\n    border: 1px solid lightgray;\n    border-radius: 32px;\n    height: 181px;\n    width: 316px;\n    display: flex;\n    align-items: center;\n    padding: 24px 32px;\n    background-color: white;\n\n    @media screen and (min-width: $bp-desktop) {\n      margin: 0 auto;\n    }\n  }\n  &__reasons-container {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    gap: 32px;\n    padding: 24px, 32px;\n  }\n  &__reason-article {\n    width: 252px;\n    text-align: center;\n  }\n  &__reason-text {\n    margin: 0;\n  }\n}\n\n.wave {\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  overflow: hidden;\n  line-height: 0;\n  fill: var(--color_primary_white);\n}\n",".services-section {\n  &__title {\n    margin-bottom: 10px;\n    @media screen and (min-width: $bp-desktop) {\n      margin-bottom: 53px;\n    }\n  }\n  &__photos {\n    position: relative;\n    left: 20px;\n  }\n\n  .swiper-wrapper {\n    padding-left: 0;\n  }\n\n  &__text_photo2,\n  &__text_photo3 {\n    position: absolute;\n    z-index: 2;\n    font-size: 22px;\n    color: white;\n    width: 100px;\n  }\n\n  &__text_photo2 {\n    right: 152px;\n    bottom: 24px;\n  }\n  &__text_photo3 {\n    right: 141px;\n    bottom: 27px;\n  }\n}\n\n.carousel-button_left,\n.carousel-button_right {\n  display: none;\n  border: 1px solid black;\n  background-color: transparent;\n  position: absolute;\n  top: 200px;\n  border-radius: 50%;\n  padding: 10px;\n  @media screen and (min-width: $bp-desktop) {\n    display: block;\n  }\n}\n.carousel_button {\n  display: none !important;\n  @media screen and (min-width: $bp-desktop) {\n    display: flex !important;\n  }\n}\n\n.carousel-button_right {\n  right: -20px;\n  transform: rotate(180deg);\n}\n\n.carousel-button_left:hover,\n.carousel-button_right:hover {\n  background-color: var(--color_secondary_light);\n  fill: white;\n  border: transparent;\n}\n\n.swiper {\n  width: 100%;\n  height: 90%;\n}\n\n.swiper-slide {\n  text-align: center;\n  font-size: 18px;\n  background: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.swiper-slide img {\n  display: block;\n  object-fit: cover;\n}\n\n.swiper-horizontal > .swiper-pagination-bullets,\n.swiper-pagination-bullets.swiper-pagination-horizontal,\n.swiper-pagination-custom,\n.swiper-pagination-fraction {\n  bottom: 0px !important;\n}\n\n.pagination {\n  left: 20px !important;\n}\n\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap\");\n\n.wrapper {\n  max-width: 1100px;\n  width: 100%;\n  position: relative;\n  margin: 0;\n  @media screen and (min-width: $bp-desktop) {\n    margin: 0 0 50px 50px;\n  }\n}\n.wrapper i {\n  top: 50%;\n  height: 50px;\n  width: 50px;\n  cursor: pointer;\n  font-size: 1.25rem;\n  position: absolute;\n  text-align: center;\n  line-height: 50px;\n  background: #fff;\n  border-radius: 50%;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.23);\n  transform: translateY(-50%);\n  transition: transform 0.1s linear;\n}\n.wrapper i:active {\n  transform: translateY(-50%) scale(0.85);\n}\n.wrapper i:first-child {\n  left: -22px;\n}\n.wrapper i:last-child {\n  right: -22px;\n}\n.wrapper .carousel {\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: calc((100% / 3));\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  gap: 16px;\n  border-radius: 8px;\n  scroll-behavior: smooth;\n  scrollbar-width: none;\n}\n.carousel::-webkit-scrollbar {\n  display: none;\n}\n.carousel.no-transition {\n  scroll-behavior: auto;\n}\n.carousel.dragging {\n  scroll-snap-type: none;\n  scroll-behavior: auto;\n}\n.carousel.dragging .card {\n  cursor: grab;\n  user-select: none;\n}\n.carousel :where(.card, .img) {\n  display: flex;\n  justify-content: center;\n  align-items: left;\n}\n.carousel .card {\n  scroll-snap-align: start;\n  max-width: 345px;\n  list-style: none;\n  cursor: pointer;\n  padding-bottom: 15px;\n  flex-direction: column;\n  border-radius: 8px;\n  justify-content: flex-end;\n  @media screen and (max-width: 600px) {\n    scroll-snap-align: center;\n  }\n}\n.carousel .card .img {\n  height: 148px;\n  width: 148px;\n  border-radius: 50%;\n}\n.card .img img {\n  width: 140px;\n  height: 140px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 4px solid #fff;\n}\n\n@media screen and (max-width: 1120px) {\n  .wrapper .carousel {\n    grid-auto-columns: calc((100% / 2) + 5px);\n  }\n}\n@media screen and (max-width: 600px) {\n  .wrapper .carousel {\n    grid-auto-columns: 110%;\n  }\n}\n",".howtofind_section {\n  padding-top: 0;\n  position: relative;\n  padding-bottom: 0;\n  @media screen and (min-width: $bp-desktop) {\n    padding-bottom: 40px;\n  }\n  &__container {\n    display: flex;\n    justify-content: center;\n  }\n  &__-container {\n    max-width: 1059px;\n  }\n  &__howtofind {\n    display: flex;\n    gap: 40px;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n\n    margin-bottom: 265px;\n\n    @media screen and (min-width: $bp-tablet) {\n      margin-bottom: auto;\n    }\n    @media screen and (min-width: $bp-desktop) {\n      flex-wrap: nowrap;\n      justify-content: space-between;\n    }\n  }\n  &__text {\n    background-color: #011f4a;\n    border-radius: 32px;\n    color: #ffffff;\n    max-width: 422px;\n    max-height: 482px;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: top;\n    justify-content: center;\n    gap: 40px;\n    padding: 4px 50px;\n  }\n  &__map {\n    max-width: 505px;\n    width: 100%;\n    position: absolute;\n    border: none;\n    flex-shrink: 0;\n    height: 244px;\n\n    bottom: 0;\n    @media screen and (min-width: $bp-tablet) {\n      position: static;\n      width: 505px;\n      height: 481px;\n    }\n    @media screen and (min-width: $bp-desktop) {\n      width: 605px;\n      height: 481px;\n    }\n  }\n  &__form-title {\n    font-size: 22px;\n    text-align: center;\n    font-weight: 600;\n    max-width: 280px;\n    margin: 48px 52px 0;\n    @media screen and (min-width: $bp-desktop) {\n    }\n  }\n  &__form-field {\n    margin-bottom: 32px;\n    text-align: center;\n  }\n  &__form-label {\n    display: block;\n  }\n  &__form_button {\n    margin: 20px;\n  }\n  &__input {\n    padding: 16px 15px;\n    width: 100%;\n    border-radius: 32px;\n    border: 1px solid #a18268;\n    background-color: white;\n    font-size: 16px;\n    line-height: 1.17;\n    &::placeholder {\n      color: black;\n      font-size: 16px;\n      line-height: 1.17;\n    }\n  }\n  &__approve {\n    font-size: 12px;\n    color: #747272;\n    max-width: 213px;\n    margin: 0 auto;\n    text-align: center;\n  }\n}\n",".footer {\n  background-color: var(--color_secondary_dark);\n  position: relative;\n\n  &__nav {\n    display: block;\n    text-align: center;\n    @media screen and (min-width: $bp-desktop) {\n      display: flex;\n      align-items: top;\n      flex-grow: 1;\n      gap: 40px;\n    }\n  }\n  &__menu {\n    display: block;\n    gap: 0;\n    flex-grow: 1;\n    justify-content: space-evenly;\n    margin-top: 15px;\n\n    @media screen and (min-width: $bp-desktop) {\n      gap: 64px;\n      display: flex;\n    }\n  }\n  &__menu1 {\n    padding-left: 0;\n    @media screen and (min-width: $bp-desktop) {\n      padding-left: 40px;\n    }\n  }\n  &__menu2 {\n    display: none;\n    @media screen and (min-width: $bp-desktop) {\n      display: block;\n    }\n  }\n  &__icons {\n    display: flex;\n    gap: 24px;\n    padding-left: 0;\n    justify-content: center;\n    @media screen and (min-width: $bp-desktop) {\n      justify-content: flex-start;\n      padding-left: 70px;\n    }\n  }\n  &__icon {\n    color: white;\n    font-size: 1.5em;\n    &:hover {\n      color: var(--color_secondary_light);\n    }\n  }\n  &__policy {\n    margin-top: 0;\n    margin-right: 10px;\n    padding-left: 0;\n    @media screen and (min-width: $bp-desktop) {\n      padding-left: 40px;\n      margin-top: 35px;\n    }\n  }\n  &__container {\n    display: block;\n    align-items: top;\n    gap: 40px;\n    @media screen and (min-width: $bp-desktop) {\n      display: flex;\n    }\n  }\n  &__logo_text {\n    color: var(--color_secondary_light);\n    font-family: \"Play\", sans-serif;\n    margin-top: 0;\n    position: relative;\n    top: 10px;\n    margin-left: 10px;\n    @media screen and (min-width: $bp-tablet) {\n      margin-top: 35px;\n      top: 10px;\n    }\n    @media screen and (min-width: $bp-desktop) {\n      top: 0px;\n    }\n  }\n  &__after {\n    display: none;\n\n    @media screen and (min-width: $bp-desktop) {\n      display: block;\n      width: 247px;\n      height: 152px;\n\n      position: absolute;\n      content: \"\";\n      background-repeat: no-repeat;\n      bottom: 0;\n      right: 0;\n    }\n  }\n  &__copyright {\n    color: #747272;\n    font-size: 13px;\n    font-weight: 400;\n    position: relative;\n    z-index: 10;\n  }\n  &__contact_item {\n    text-decoration: none;\n    color: var(--color_primary_light);\n    &:hover {\n      color: var(--color_secondary_light);\n    }\n  }\n}\n",".backdrop {\n  position: fixed;\n  z-index: 3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 20px 0;\n  transition: opacity 1s, visibility 1s;\n\n  &.is-hidden {\n    opacity: 0;\n    visibility: hidden;\n    pointer-events: none;\n  }\n}\n.modal {\n  position: relative;\n  width: 100%;\n  max-width: 400px;\n  height: 100%;\n  max-height: 560px;\n  background-color: #011c44;\n  border-radius: 32px;\n  padding: 48px;\n  overflow-y: auto;\n\n  &__cross-button {\n    border: none;\n    background-color: transparent;\n    position: absolute;\n    top: 20px;\n    right: 20px;\n    color: white;\n    cursor: pointer;\n    &:hover {\n      color: var(--color_secondary_light);\n    }\n  }\n  &__form-title {\n    margin-bottom: 8px;\n    color: white;\n    text-align: center;\n    font-size: 40px;\n    margin-top: 0;\n  }\n  &__form-instruction {\n    position: relative;\n    margin: 0 auto 30px;\n    text-align: center;\n    color: white;\n    font-size: 18px;\n  }\n}\n\n.contact-form {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-field {\n  margin-bottom: 32px;\n\n  &__input {\n    padding: 16px 42px;\n    width: 310px;\n    border-radius: 32px;\n    border: 1px solid white;\n    font-size: 16px;\n    line-height: 1.17;\n    &:focus {\n      border-color: gray;\n      outline: none;\n      background-color: white;\n    }\n    &::placeholder {\n      color: black;\n      font-size: 16px;\n      line-height: 1.17;\n    }\n  }\n  &__label {\n    display: block;\n  }\n  &__terms {\n    margin: 0 auto;\n    max-width: 220px;\n    font-size: 12px;\n    text-align: center;\n    color: #747272;\n  }\n  &__terms-link {\n    color: white;\n  }\n  &:focus::placeholder {\n    color: var(--color_primarydark);\n  }\n  &__button {\n    margin: 0 auto 24px;\n  }\n}\n",".mobile-menu {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  transform: translateX(100%);\n  transition: transform 0.5s;\n  &.is-open {\n    transform: translateX(0);\n  }\n  &__logo {\n    margin: 20px 0;\n    color: var(--color_secondary_light);\n    font-family: \"Play\", sans-serif;\n  }\n  &__button {\n    background-color: transparent;\n    cursor: pointer;\n    border: none;\n    position: absolute;\n    top: 36px;\n    right: 100px;\n    &:hover {\n      color: var(--color_secondary_light);\n    }\n  }\n  &__nav {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    margin: 20px;\n  }\n  &__link {\n    text-decoration: none;\n    color: var(--color_primarydark);\n    &:hover {\n      color: var(--color_secondary_light);\n    }\n  }\n  &__nav-icons {\n    margin-left: 20px;\n    display: flex;\n    gap: 20px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/html_images/hero-title_image.jpg":
/*!**********************************************!*\
  !*** ./src/html_images/hero-title_image.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/hero-title_imagef852606a8d73bd191d62.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/slider */ "./src/js/slider.js");
/* harmony import */ var _js_slider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_slider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/modal */ "./src/js/modal.js");
/* harmony import */ var _js_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_mobile_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/mobile-menu */ "./src/js/mobile-menu.js");
/* harmony import */ var _js_mobile_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_mobile_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");




})();

/******/ })()
;
//# sourceMappingURL=bundle6a175c3db1107e670d64.js.map