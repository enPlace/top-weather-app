/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --blue: #051f38;\n  --white: #ffffff;\n  --dark: rgb(48, 47, 47);\n}\nhtml {\n  width: 100%;\n  height: 100%;\n  font-family: sans-serif;\n}\nbody {\n  width: 100%;\n  height: 100%;\n  background-color: var(--dark);\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  grid-template-rows: repeat(15, 1fr);\n  color: ghostwhite;\n}\n\n.main-weather {\n  position: fixed;\n  height: 100vh;\n  min-height: 520px;\n  width: 100%;\n  background-color: transparent;\n  grid-column: 1/13;\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  grid-template-rows: repeat(12, 1fr);\n  padding: 20px;\n  box-sizing: border-box;\n  transition: 1s ease-in-out;\n  background-size: cover;\n}\nform {\n  margin-right: -10px;\n  display: flex;\n  grid-column: 1/11;\n  grid-row: 1/2;\n  justify-content: center;\n  align-items: center;\n}\nform input {\n  width: 97%;\n  height: 70%;\n}\nform button {\n  height: 80%;\n  border: none;\n  border-radius: 2px;\n  background-color: rgba(248, 248, 248, 0.864);\n  margin-left: 5px;\n}\n.initial-message {\n  grid-column: 2/12;\n  grid-row: 3/4;\n  align-self: center;\n  align-self: center;\n  text-align: center;\n}\n.current-temp-data {\n  grid-row: 2/6;\n  grid-column: 1/6;\n  border-radius: 10px;\n}\n.current-temp-data.dark {\n  background-color: rgba(0, 0, 0, 0.789);\n}\n.main-highlow {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 15px;\n}\n.current-temp {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  font-size: 5em;\n  /*  margin-top: 15px;\n  margin-bottom: 15px; */\n}\n.current-temp-data div {\n  padding: 5px;\n}\n.c {\n  font-size: 0.5em;\n}\n.feels-like {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main-conditions {\n  grid-row: 2/6;\n  grid-column: 8/13;\n  border-radius: 10px;\n}\n.main-conditions.dark {\n  background-color: rgba(228, 228, 228, 0.72);\n}\n\n.main-conditions div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.main-description {\n  padding: 5px;\n  margin-top: -8px;\n}\n.main-description.dark {\n  background-color: rgba(0, 0, 0, 0.871);\n  border-radius: 10px;\n}\n.main-icon {\n  margin-top: 30px;\n}\n.city-name {\n  margin-top: 20px;\n  grid-row: 6/7;\n  grid-column: 1/8;\n  font-size: 1.3em;\n  display: flex;\n  align-items: center;\n  border-radius: 10px;\n}\n.city-name.dark {\n  background-color: rgba(0, 0, 0, 0.789);\n\n  padding: 10px;\n}\n.hourly-forecast {\n  background-color: rgba(0, 0, 0, 0);\n  margin-top: 40px;\n  grid-row: 7/11;\n  grid-column: 1/13;\n  display: flex;\n  overflow: scroll;\n  align-items: center;\n  overflow-y: hidden;\n}\n.hour-info {\n  background-color: rgba(0, 0, 0, 0.707);\n  backdrop-filter: blur(6px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  border: 1px solid black;\n  border-radius: 4px;\n  margin: 10px;\n  margin-top: 0;\n  margin-bottom: 0;\n  height: 96%;\n  min-width: 70px;\n}\n.small-icon {\n  width: 60px;\n  margin-top: -10px;\n  margin-bottom: -10px;\n}\n.hour-precip {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.8em;\n}\n\n/******* Weekly Forecast ********/\n\n.weekly-forecast {\n  margin-top: 10%;\n  z-index: 10;\n  grid-row: 14/16;\n  grid-column: 1/13;\n  transition: ease-in-out 0.4s;\n}\n.weekly-forecast.hidden {\n  margin-top: 1000%;\n  transition: ease-in-out 0.6s;\n}\n.weekly-forecast header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgba(17, 16, 16, 0.953);\n  font-size: 1.3em;\n  padding-bottom: 10px;\n}\n.weekly-forecast p {\n  background-color: rgba(17, 16, 16, 0.953);\n  margin-top: -6px;\n  width: 20%;\n  text-align: center;\n  border-radius: 5px;\n  color: white;\n}\n#today-forecast {\n  margin-top: 0px;\n  /*   border-top-left-radius: 15px;\n  border-top-right-radius: 15px; */\n}\n.day-forecast {\n  border-top: 1px solid black;\n  margin-top: 0px;\n  background-color: rgba(17, 16, 16, 0.953);\n  backdrop-filter: blur(6px);\n  color: white;\n  padding: 10px;\n}\n\n.day-overview {\n  display: flex;\n  justify-content: space-between;\n}\n.day-name {\n  font-size: 1.3em;\n}\n\n.day-overview-right {\n  display: flex;\n  align-items: center;\n}\n.forecast-expand {\n  margin-left: 20px;\n  padding-top: 20px;\n  font-size: 1.5em;\n  transform: rotate(180deg);\n}\n\n.day-details li {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 6px;\n  padding-right: 10%;\n  padding-left: 10%;\n}\n\n/****Nav Menu*****/\n\nnav {\n  height: 100%;\n}\na {\n  text-decoration: none !important;\n  color: #232323;\n  transition: color 0.3s ease;\n}\n\na:hover {\n  color: #2ecc71;\n}\n\n#menuToggle {\n  height: 100%;\n  display: block;\n  position: fixed;\n  top: 34px;\n  right: 2.5%;\n  z-index: 1;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n#menuToggle input {\n  display: block;\n  width: 40px;\n  height: 32px;\n  position: absolute;\n  top: -7px;\n  left: -5px;\n  cursor: pointer;\n  opacity: 0;\n  z-index: 10;\n  -webkit-touch-callout: none;\n}\n\n#menuToggle span {\n  display: block;\n  width: 33px;\n  height: 4px;\n  margin-bottom: 5px;\n  position: relative;\n  background: #cdcdcd;\n  border-radius: 3px;\n  z-index: 5;\n  transform-origin: 4px 0px;\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),\n    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;\n}\n\n#menuToggle span:first-child {\n  transform-origin: 0% 0%;\n}\n\n#menuToggle span:nth-last-child(2) {\n  transform-origin: 0% 100%;\n}\n\n#menuToggle input:checked ~ span {\n  opacity: 1;\n  transform: rotate(45deg) translate(-2px, -1px);\n  background: #cdcdcd;\n}\n\n#menuToggle input:checked ~ span:nth-last-child(3) {\n  opacity: 0;\n  transform: rotate(0deg) scale(0.2, 0.2);\n}\n\n#menuToggle input:checked ~ span:nth-last-child(2) {\n  opacity: 1;\n  transform: rotate(-45deg) translate(0, -1px);\n}\n\n#menu {\n  color: ghostwhite;\n  position: absolute;\n  width: 250px;\n  height: 100%;\n  margin: -100px 0 0 0;\n  padding: 0px;\n  padding-top: 125px;\n  right: -50px;\n  background: rgb(26, 26, 26);\n  list-style-type: none;\n  -webkit-font-smoothing: antialiased;\n  transform-origin: 0% 0%;\n  transform: translate(100%, 0);\n\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n}\n\n#menu li {\n \n  padding: 10px;\n  padding-left: 40px;\n  font-size: 22px;\n  color: ghostwhite;\n  border-bottom:1px solid white;\n  width: 100%;\n  display: flex;\n  margin-bottom: 3px;\n}\n#menu button {\nmargin-bottom: 15px;\nmargin-left: 40px;\nborder-radius: 50%;\nwidth: 43px;\nheight: 43px;\nbackground-color: var(--dark);\ncolor: ghostwhite;\nborder: none;\nborder: 2px solid transparent;\nfont-size: 20px;\nbox-shadow: 1px 1px 1px rgb(111, 110, 110) inset;\n\n\n}\n#menu button:active{\n  \n  box-shadow: -1px -1px 1px 0px rgb(111, 110, 110) inset;\n}\n\n#menuToggle input:checked ~ ul {\n  transform: scale(1, 1);\n  opacity: 1;\n}\n\n\n/***********Loader*******************/\n.loader-container {\n  display: none;\n}\n.loader-container.active {\n  justify-self: center;\n  align-self: center;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.625);\n  width: 120vw;\n  height: 120vh;\n  z-index: 1;\n}\n#load-message {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: -100px;\n  margin-bottom: 50px;\n\n  background-color: rgba(0, 0, 0, 0.953);\n  border-radius: 30px;\n  width: 200px;\n  height: 100px;\n}\n.loader {\n  justify-self: center;\n  align-self: center;\n\n  border: 16px solid gray; /* Light grey */\n  border-top: 2px solid rgb(237, 102, 53);\n  border-bottom: 2px solid rgb(237, 102, 53); /* Blue */\n  border-radius: 70%;\n  width: 120px;\n  height: 120px;\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@media screen and (min-width: 410px) {\n  .weekly-forecast {\n    margin-top: 4%;\n  }\n\n  ::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n    border-radius: 0px;\n    background-color: #020202e8;\n  }\n  .gallery::-webkit-scrollbar-track {\n    background-color: black;\n  }\n\n  ::-webkit-scrollbar {\n    height: 7px;\n    width: 6px;\n    background-color: #f5f5f5;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    width: 5px;\n    border-radius: 10px;\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    background-color: rgba(233, 233, 233, 0.837);\n  }\n}\n\n@media screen and (min-width: 754px) {\n  body {\n    display: flex;\n    flex-direction: column;\n    position: initial;\n  }\n  #menuToggle{\n    top: 25px;\n  }\n  form {\n    grid-column: 2/12;\n    margin: 0;\n  }\n  form button{\n    display: none;\n  }\n  .main-weather {\n    padding: 0px;\n    grid-row: 1/15;\n    position: initial;\n    height: 550px;\n    width: 100vw;\n  }\n  #search-bar {\n    margin-top: 20px;\n  }\n  .current-temp-data {\n    grid-row: 3/7;\n    grid-column: 2/4;\n    padding: 4%;\n    justify-content: space-between;\n    padding: 0px;\n  }\n  .main-conditions {\n    grid-row: 4/7;\n    grid-column: 10/12;\n    margin-top: -30px;\n  }\n  .main-conditions div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .main-icon {\n    margin-top: 0px;\n    padding: 0px;\n  }\n  #icon-img {\n    width: 150px;\n  }\n  .city-name {\n    grid-row: 3/6;\n    margin-top: 30px;\n    grid-column: 5/9;\n    font-size: 1.3em;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 2em;\n    text-align: center;\n  }\n\n  .hourly-forecast {\n    background-color: rgba(0, 0, 0, 0.316);\n    grid-row: 8/13;\n    grid-column: 2/12;\n    display: flex;\n    overflow: scroll;\n    align-items: center;\n    overflow-y: hidden;\n  }\n  .hour-info {\n    background-color: var(--dark);\n    border-color: transparent;\n  }\n\n  .weekly-forecast {\n    grid-row: 15/16;\n    margin-top: 0px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    background: black;\n    z-index: 0;\n    padding-bottom: 50px;\n  }\n  .weekly-forecast.hidden {\n    margin-top: 0%;\n    transition: ease-in-out 0.6s;\n    z-index: 0;\n  }\n  .weekly-forecast p {\n    display: none;\n  }\n  .weekly-forecast header {\n    padding: 20px;\n    width: 100%;\n  }\n  #today-forecast {\n    width: 100%;\n    margin: 0;\n  }\n  #today-forecast .day-overview {\n    justify-content: center;\n  }\n  #today-forecast .day-overview-left {\n    margin-right: 45px;\n  }\n  #today-forecast .day-overview-left div {\n    margin: 5px;\n  }\n  #today-forecast .day-details {\n    padding-left: 30%;\n    padding-right: 30%;\n  }\n  #today-forecast .day-details li {\n    justify-content: space-between;\n  }\n\n  .day-forecast {\n    width: 250px;\n    margin: 10px;\n    padding: 20px;\n  }\n  .day-details li {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 6px;\n    padding-right: 6px;\n    padding-left: 6px;\n    font-size: 0.9em;\n  }\n  .loader-container.active {\n    justify-self: center;\n    align-self: center;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(0, 0, 0, 0.625);\n    width: 100vw;\n    height: 100vh;\n  }\n}\n\n@media screen and (max-height: 524px){\n  .city-name{ \n    display: none;}\n}\n\n\n@media screen and (max-height: 405px){\n  .city-name{ \n    display: none;}\n  .hourly-forecast{\n    display: none;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,gBAAgB;EAChB,uBAAuB;AACzB;AACA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;AACzB;AACA;EACE,WAAW;EACX,YAAY;EACZ,6BAA6B;EAC7B,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,iBAAiB;EACjB,WAAW;EACX,6BAA6B;EAC7B,iBAAiB;EACjB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,aAAa;EACb,sBAAsB;EACtB,0BAA0B;EAC1B,sBAAsB;AACxB;AACA;EACE,mBAAmB;EACnB,aAAa;EACb,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,UAAU;EACV,WAAW;AACb;AACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,4CAA4C;EAC5C,gBAAgB;AAClB;AACA;EACE,iBAAiB;EACjB,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,sCAAsC;AACxC;AACA;EACE,aAAa;EACb,6BAA6B;EAC7B,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,cAAc;EACd;wBACsB;AACxB;AACA;EACE,YAAY;AACd;AACA;EACE,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,2CAA2C;AAC7C;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,sCAAsC;EACtC,mBAAmB;AACrB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,sCAAsC;;EAEtC,a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aAAa;AACf;AACA;EACE,oBAAoB;EACpB,kBAAkB;;EAElB,uBAAuB,EAAE,eAAe;EACxC,uCAAuC;EACvC,0CAA0C,EAAE,SAAS;EACrD,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,kCAAkC;AACpC;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE;IACE,cAAc;EAChB;;EAEA;IACE,oDAAoD;IACpD,4CAA4C;IAC5C,kBAAkB;IAClB,2BAA2B;EAC7B;EACA;IACE,uBAAuB;EACzB;;EAEA;IACE,WAAW;IACX,UAAU;IACV,yBAAyB;EAC3B;;EAEA;IACE,UAAU;IACV,mBAAmB;IACnB,oDAAoD;IACpD,4CAA4C;EAC9C;AACF;;AAEA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,iBAAiB;EACnB;EACA;IACE,SAAS;EACX;EACA;IACE,iBAAiB;IACjB,SAAS;EACX;EACA;IACE,aAAa;EACf;EACA;IACE,YAAY;IACZ,cAAc;IACd,iBAAiB;IACjB,aAAa;IACb,YAAY;EACd;EACA;IACE,gBAAgB;EAClB;EACA;IACE,aAAa;IACb,gBAAgB;IAChB,WAAW;IACX,8BAA8B;IAC9B,YAAY;EACd;EACA;IACE,aAAa;IACb,kBAAkB;IAClB,iBAAiB;EACnB;EACA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;EACzB;EACA;IACE,eAAe;IACf,YAAY;EACd;EACA;IACE,YAAY;EACd;EACA;IACE,aAAa;IACb,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,kBAAkB;EACpB;;EAEA;IACE,sCAAsC;IACtC,cAAc;IACd,iBAAiB;IACjB,aAAa;IACb,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;EACpB;EACA;IACE,6BAA6B;IAC7B,yBAAyB;EAC3B;;EAEA;IACE,eAAe;IACf,eAAe;IACf,aAAa;IACb,eAAe;IACf,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,UAAU;IACV,oBAAoB;EACtB;EACA;IACE,cAAc;IACd,4BAA4B;IAC5B,UAAU;EACZ;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;IACb,WAAW;EACb;EACA;IACE,WAAW;IACX,SAAS;EACX;EACA;IACE,uBAAuB;EACzB;EACA;IACE,kBAAkB;EACpB;EACA;IACE,WAAW;EACb;EACA;IACE,iBAAiB;IACjB,kBAAkB;EACpB;EACA;IACE,8BAA8B;EAChC;;EAEA;IACE,YAAY;IACZ,YAAY;IACZ,aAAa;EACf;EACA;IACE,aAAa;IACb,8BAA8B;IAC9B,eAAe;IACf,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;EAClB;EACA;IACE,oBAAoB;IACpB,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,sCAAsC;IACtC,YAAY;IACZ,aAAa;EACf;AACF;;AAEA;EACE;IACE,aAAa,CAAC;AAClB;;;AAGA;EACE;IACE,aAAa,CAAC;EAChB;IACE,aAAa;EACf;AACF","sourcesContent":[":root {\n  --blue: #051f38;\n  --white: #ffffff;\n  --dark: rgb(48, 47, 47);\n}\nhtml {\n  width: 100%;\n  height: 100%;\n  font-family: sans-serif;\n}\nbody {\n  width: 100%;\n  height: 100%;\n  background-color: var(--dark);\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  grid-template-rows: repeat(15, 1fr);\n  color: ghostwhite;\n}\n\n.main-weather {\n  position: fixed;\n  height: 100vh;\n  min-height: 520px;\n  width: 100%;\n  background-color: transparent;\n  grid-column: 1/13;\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  grid-template-rows: repeat(12, 1fr);\n  padding: 20px;\n  box-sizing: border-box;\n  transition: 1s ease-in-out;\n  background-size: cover;\n}\nform {\n  margin-right: -10px;\n  display: flex;\n  grid-column: 1/11;\n  grid-row: 1/2;\n  justify-content: center;\n  align-items: center;\n}\nform input {\n  width: 97%;\n  height: 70%;\n}\nform button {\n  height: 80%;\n  border: none;\n  border-radius: 2px;\n  background-color: rgba(248, 248, 248, 0.864);\n  margin-left: 5px;\n}\n.initial-message {\n  grid-column: 2/12;\n  grid-row: 3/4;\n  align-self: center;\n  align-self: center;\n  text-align: center;\n}\n.current-temp-data {\n  grid-row: 2/6;\n  grid-column: 1/6;\n  border-radius: 10px;\n}\n.current-temp-data.dark {\n  background-color: rgba(0, 0, 0, 0.789);\n}\n.main-highlow {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 15px;\n}\n.current-temp {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  font-size: 5em;\n  /*  margin-top: 15px;\n  margin-bottom: 15px; */\n}\n.current-temp-data div {\n  padding: 5px;\n}\n.c {\n  font-size: 0.5em;\n}\n.feels-like {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main-conditions {\n  grid-row: 2/6;\n  grid-column: 8/13;\n  border-radius: 10px;\n}\n.main-conditions.dark {\n  background-color: rgba(228, 228, 228, 0.72);\n}\n\n.main-conditions div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.main-description {\n  padding: 5px;\n  margin-top: -8px;\n}\n.main-description.dark {\n  background-color: rgba(0, 0, 0, 0.871);\n  border-radius: 10px;\n}\n.main-icon {\n  margin-top: 30px;\n}\n.city-name {\n  margin-top: 20px;\n  grid-row: 6/7;\n  grid-column: 1/8;\n  font-size: 1.3em;\n  display: flex;\n  align-items: center;\n  border-radius: 10px;\n}\n.city-name.dark {\n  background-color: rgba(0, 0, 0, 0.789);\n\n  padding: 10px;\n}\n.hourly-forecast {\n  background-color: rgba(0, 0, 0, 0);\n  margin-top: 40px;\n  grid-row: 7/11;\n  grid-column: 1/13;\n  display: flex;\n  overflow: scroll;\n  align-items: center;\n  overflow-y: hidden;\n}\n.hour-info {\n  background-color: rgba(0, 0, 0, 0.707);\n  backdrop-filter: blur(6px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  border: 1px solid black;\n  border-radius: 4px;\n  margin: 10px;\n  margin-top: 0;\n  margin-bottom: 0;\n  height: 96%;\n  min-width: 70px;\n}\n.small-icon {\n  width: 60px;\n  margin-top: -10px;\n  margin-bottom: -10px;\n}\n.hour-precip {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.8em;\n}\n\n/******* Weekly Forecast ********/\n\n.weekly-forecast {\n  margin-top: 10%;\n  z-index: 10;\n  grid-row: 14/16;\n  grid-column: 1/13;\n  transition: ease-in-out 0.4s;\n}\n.weekly-forecast.hidden {\n  margin-top: 1000%;\n  transition: ease-in-out 0.6s;\n}\n.weekly-forecast header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgba(17, 16, 16, 0.953);\n  font-size: 1.3em;\n  padding-bottom: 10px;\n}\n.weekly-forecast p {\n  background-color: rgba(17, 16, 16, 0.953);\n  margin-top: -6px;\n  width: 20%;\n  text-align: center;\n  border-radius: 5px;\n  color: white;\n}\n#today-forecast {\n  margin-top: 0px;\n  /*   border-top-left-radius: 15px;\n  border-top-right-radius: 15px; */\n}\n.day-forecast {\n  border-top: 1px solid black;\n  margin-top: 0px;\n  background-color: rgba(17, 16, 16, 0.953);\n  backdrop-filter: blur(6px);\n  color: white;\n  padding: 10px;\n}\n\n.day-overview {\n  display: flex;\n  justify-content: space-between;\n}\n.day-name {\n  font-size: 1.3em;\n}\n\n.day-overview-right {\n  display: flex;\n  align-items: center;\n}\n.forecast-expand {\n  margin-left: 20px;\n  padding-top: 20px;\n  font-size: 1.5em;\n  transform: rotate(180deg);\n}\n\n.day-details li {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 6px;\n  padding-right: 10%;\n  padding-left: 10%;\n}\n\n/****Nav Menu*****/\n\nnav {\n  height: 100%;\n}\na {\n  text-decoration: none !important;\n  color: #232323;\n  transition: color 0.3s ease;\n}\n\na:hover {\n  color: #2ecc71;\n}\n\n#menuToggle {\n  height: 100%;\n  display: block;\n  position: fixed;\n  top: 34px;\n  right: 2.5%;\n  z-index: 1;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n#menuToggle input {\n  display: block;\n  width: 40px;\n  height: 32px;\n  position: absolute;\n  top: -7px;\n  left: -5px;\n  cursor: pointer;\n  opacity: 0;\n  z-index: 10;\n  -webkit-touch-callout: none;\n}\n\n#menuToggle span {\n  display: block;\n  width: 33px;\n  height: 4px;\n  margin-bottom: 5px;\n  position: relative;\n  background: #cdcdcd;\n  border-radius: 3px;\n  z-index: 5;\n  transform-origin: 4px 0px;\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),\n    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;\n}\n\n#menuToggle span:first-child {\n  transform-origin: 0% 0%;\n}\n\n#menuToggle span:nth-last-child(2) {\n  transform-origin: 0% 100%;\n}\n\n#menuToggle input:checked ~ span {\n  opacity: 1;\n  transform: rotate(45deg) translate(-2px, -1px);\n  background: #cdcdcd;\n}\n\n#menuToggle input:checked ~ span:nth-last-child(3) {\n  opacity: 0;\n  transform: rotate(0deg) scale(0.2, 0.2);\n}\n\n#menuToggle input:checked ~ span:nth-last-child(2) {\n  opacity: 1;\n  transform: rotate(-45deg) translate(0, -1px);\n}\n\n#menu {\n  color: ghostwhite;\n  position: absolute;\n  width: 250px;\n  height: 100%;\n  margin: -100px 0 0 0;\n  padding: 0px;\n  padding-top: 125px;\n  right: -50px;\n  background: rgb(26, 26, 26);\n  list-style-type: none;\n  -webkit-font-smoothing: antialiased;\n  transform-origin: 0% 0%;\n  transform: translate(100%, 0);\n\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n}\n\n#menu li {\n \n  padding: 10px;\n  padding-left: 40px;\n  font-size: 22px;\n  color: ghostwhite;\n  border-bottom:1px solid white;\n  width: 100%;\n  display: flex;\n  margin-bottom: 3px;\n}\n#menu button {\nmargin-bottom: 15px;\nmargin-left: 40px;\nborder-radius: 50%;\nwidth: 43px;\nheight: 43px;\nbackground-color: var(--dark);\ncolor: ghostwhite;\nborder: none;\nborder: 2px solid transparent;\nfont-size: 20px;\nbox-shadow: 1px 1px 1px rgb(111, 110, 110) inset;\n\n\n}\n#menu button:active{\n  \n  box-shadow: -1px -1px 1px 0px rgb(111, 110, 110) inset;\n}\n\n#menuToggle input:checked ~ ul {\n  transform: scale(1, 1);\n  opacity: 1;\n}\n\n\n/***********Loader*******************/\n.loader-container {\n  display: none;\n}\n.loader-container.active {\n  justify-self: center;\n  align-self: center;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.625);\n  width: 120vw;\n  height: 120vh;\n  z-index: 1;\n}\n#load-message {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: -100px;\n  margin-bottom: 50px;\n\n  background-color: rgba(0, 0, 0, 0.953);\n  border-radius: 30px;\n  width: 200px;\n  height: 100px;\n}\n.loader {\n  justify-self: center;\n  align-self: center;\n\n  border: 16px solid gray; /* Light grey */\n  border-top: 2px solid rgb(237, 102, 53);\n  border-bottom: 2px solid rgb(237, 102, 53); /* Blue */\n  border-radius: 70%;\n  width: 120px;\n  height: 120px;\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@media screen and (min-width: 410px) {\n  .weekly-forecast {\n    margin-top: 4%;\n  }\n\n  ::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n    border-radius: 0px;\n    background-color: #020202e8;\n  }\n  .gallery::-webkit-scrollbar-track {\n    background-color: black;\n  }\n\n  ::-webkit-scrollbar {\n    height: 7px;\n    width: 6px;\n    background-color: #f5f5f5;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    width: 5px;\n    border-radius: 10px;\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    background-color: rgba(233, 233, 233, 0.837);\n  }\n}\n\n@media screen and (min-width: 754px) {\n  body {\n    display: flex;\n    flex-direction: column;\n    position: initial;\n  }\n  #menuToggle{\n    top: 25px;\n  }\n  form {\n    grid-column: 2/12;\n    margin: 0;\n  }\n  form button{\n    display: none;\n  }\n  .main-weather {\n    padding: 0px;\n    grid-row: 1/15;\n    position: initial;\n    height: 550px;\n    width: 100vw;\n  }\n  #search-bar {\n    margin-top: 20px;\n  }\n  .current-temp-data {\n    grid-row: 3/7;\n    grid-column: 2/4;\n    padding: 4%;\n    justify-content: space-between;\n    padding: 0px;\n  }\n  .main-conditions {\n    grid-row: 4/7;\n    grid-column: 10/12;\n    margin-top: -30px;\n  }\n  .main-conditions div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .main-icon {\n    margin-top: 0px;\n    padding: 0px;\n  }\n  #icon-img {\n    width: 150px;\n  }\n  .city-name {\n    grid-row: 3/6;\n    margin-top: 30px;\n    grid-column: 5/9;\n    font-size: 1.3em;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 2em;\n    text-align: center;\n  }\n\n  .hourly-forecast {\n    background-color: rgba(0, 0, 0, 0.316);\n    grid-row: 8/13;\n    grid-column: 2/12;\n    display: flex;\n    overflow: scroll;\n    align-items: center;\n    overflow-y: hidden;\n  }\n  .hour-info {\n    background-color: var(--dark);\n    border-color: transparent;\n  }\n\n  .weekly-forecast {\n    grid-row: 15/16;\n    margin-top: 0px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    background: black;\n    z-index: 0;\n    padding-bottom: 50px;\n  }\n  .weekly-forecast.hidden {\n    margin-top: 0%;\n    transition: ease-in-out 0.6s;\n    z-index: 0;\n  }\n  .weekly-forecast p {\n    display: none;\n  }\n  .weekly-forecast header {\n    padding: 20px;\n    width: 100%;\n  }\n  #today-forecast {\n    width: 100%;\n    margin: 0;\n  }\n  #today-forecast .day-overview {\n    justify-content: center;\n  }\n  #today-forecast .day-overview-left {\n    margin-right: 45px;\n  }\n  #today-forecast .day-overview-left div {\n    margin: 5px;\n  }\n  #today-forecast .day-details {\n    padding-left: 30%;\n    padding-right: 30%;\n  }\n  #today-forecast .day-details li {\n    justify-content: space-between;\n  }\n\n  .day-forecast {\n    width: 250px;\n    margin: 10px;\n    padding: 20px;\n  }\n  .day-details li {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 6px;\n    padding-right: 6px;\n    padding-left: 6px;\n    font-size: 0.9em;\n  }\n  .loader-container.active {\n    justify-self: center;\n    align-self: center;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(0, 0, 0, 0.625);\n    width: 100vw;\n    height: 100vh;\n  }\n}\n\n@media screen and (max-height: 524px){\n  .city-name{ \n    display: none;}\n}\n\n\n@media screen and (max-height: 405px){\n  .city-name{ \n    display: none;}\n  .hourly-forecast{\n    display: none;\n  }\n}"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/degrees-to-direction/lib.js":
/*!**************************************************!*\
  !*** ./node_modules/degrees-to-direction/lib.js ***!
  \**************************************************/
/***/ ((module) => {

module.exports = function(d) {
  if (typeof d !== 'number' || isNaN(d)) {
    return -1;
  }

  // keep within the range: 0 <= d < 360
  d = d % 360;

  if (11.25 <= d && d < 33.75) {
    return "NNE";
  } else if (33.75 <= d && d < 56.25) {
    return "NE";
  } else if (56.25 <= d && d < 78.75) {
    return "ENE";
  } else if (78.75 <= d && d < 101.25) {
    return "E";
  } else if (101.25 <= d && d < 123.75) {
    return "ESE";
  } else if (123.75 <= d && d < 146.25) {
    return "SE";
  } else if (146.25 <= d && d < 168.75) {
    return "SSE";
  } else if (168.75 <= d && d < 191.25) {
    return "S";
  } else if (191.25 <= d && d < 213.75) {
    return "SSW";
  } else if (213.75 <= d && d < 236.25) {
    return "SW";
  } else if (236.25 <= d && d < 258.75) {
    return "WSW";
  } else if (258.75 <= d && d < 281.25) {
    return "W";
  } else if (281.25 <= d && d < 303.75) {
    return "WNW";
  } else if (303.75 <= d && d < 326.25) {
    return "NW";
  } else if (326.25 <= d && d < 348.75) {
    return "NNW";
  } else {
    return "N";
  }
};


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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

module.exports = getTarget;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./src/change-background.js":
/*!**********************************!*\
  !*** ./src/change-background.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changebg": () => (/* binding */ changebg)
/* harmony export */ });
/* harmony import */ var _images_clear_sky_pexels_francesco_ungaro_281260_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/clear-sky/pexels-francesco-ungaro-281260.jpg */ "./src/images/clear-sky/pexels-francesco-ungaro-281260.jpg");
/* harmony import */ var _images_clear_sky_pexels_juan_733475_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/clear-sky/pexels-juan-733475.jpg */ "./src/images/clear-sky/pexels-juan-733475.jpg");
/* harmony import */ var _images_few_clouds_pexels_skitterphoto_3768_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/few-clouds/pexels-skitterphoto-3768.jpg */ "./src/images/few-clouds/pexels-skitterphoto-3768.jpg");
/* harmony import */ var _images_few_clouds_pexels_roberto_nickson_2885320_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/few-clouds/pexels-roberto-nickson-2885320.jpg */ "./src/images/few-clouds/pexels-roberto-nickson-2885320.jpg");
/* harmony import */ var _images_scattered_clouds_pexels_pixabay_158163_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/scattered-clouds/pexels-pixabay-158163.jpg */ "./src/images/scattered-clouds/pexels-pixabay-158163.jpg");
/* harmony import */ var _images_scattered_clouds_pexels_brett_sayles_3910141_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/scattered-clouds/pexels-brett-sayles-3910141.jpg */ "./src/images/scattered-clouds/pexels-brett-sayles-3910141.jpg");
/* harmony import */ var _images_broken_clouds_broken2_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/broken-clouds/broken2.jpg */ "./src/images/broken-clouds/broken2.jpg");
/* harmony import */ var _images_rain_dayrain_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/rain/dayrain.jpg */ "./src/images/rain/dayrain.jpg");
/* harmony import */ var _images_rain_pexels_aleksandar_pasaric_2068411_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/rain/pexels-aleksandar-pasaric-2068411.jpg */ "./src/images/rain/pexels-aleksandar-pasaric-2068411.jpg");
/* harmony import */ var _images_thunderstorm_pexels_andre_furtado_1162251_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/thunderstorm/pexels-andre-furtado-1162251.jpg */ "./src/images/thunderstorm/pexels-andre-furtado-1162251.jpg");
/* harmony import */ var _images_thunderstorm_pexels_johannes_plenio_1118869_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/thunderstorm/pexels-johannes-plenio-1118869.jpg */ "./src/images/thunderstorm/pexels-johannes-plenio-1118869.jpg");
/* harmony import */ var _images_snow_pexels_henrikas_mackevicius_4069601_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/snow/pexels-henrikas-mackevicius-4069601.jpg */ "./src/images/snow/pexels-henrikas-mackevicius-4069601.jpg");
/* harmony import */ var _images_snow_nightsnow2_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/snow/nightsnow2.jpg */ "./src/images/snow/nightsnow2.jpg");
/* harmony import */ var _images_mist_pexels_nohk_1715476_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/mist/pexels-nohk-1715476.jpg */ "./src/images/mist/pexels-nohk-1715476.jpg");
/* harmony import */ var _images_mist_fog_night_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/mist/fog-night.jpg */ "./src/images/mist/fog-night.jpg");






 //this one has a problem with conditions description















function darkify(option) {
  const temp = document.getElementById("current-temp-data");
  const description = document.getElementById("main-description");
  const name = document.getElementById("city-name");
  const conditions = document.getElementById("main-conditions")

  if (option == "dark") {
    temp.classList.add("dark");
    conditions.classList.add("dark");
    name.classList.add("dark");
    description.classList.add("dark")
  } else {
    temp.classList.remove("dark");
    conditions.classList.remove("dark");
    name.classList.remove("dark");
    description.classList.remove("dark")
  }
}

function changeMainBg(importedImage) {
  const main = document.getElementById("main-weather");
  main.style.background = `url(${importedImage}) no-repeat center center`;
  main.style.backgroundSize = "cover";
}

function changebg(iconCode) {
  if (iconCode == "01d") {
    changeMainBg(_images_clear_sky_pexels_francesco_ungaro_281260_jpg__WEBPACK_IMPORTED_MODULE_0__);
    darkify();
  }
  if (iconCode == "01n") {
    changeMainBg(_images_clear_sky_pexels_juan_733475_jpg__WEBPACK_IMPORTED_MODULE_1__);
    darkify();
  }

  if (iconCode == "02d") {
    changeMainBg(_images_few_clouds_pexels_skitterphoto_3768_jpg__WEBPACK_IMPORTED_MODULE_2__);
    darkify();
  }
  if (iconCode == "02n") {
    changeMainBg(_images_few_clouds_pexels_roberto_nickson_2885320_jpg__WEBPACK_IMPORTED_MODULE_3__);
    darkify();
  }
  if (iconCode == "03d") {
    changeMainBg(_images_scattered_clouds_pexels_pixabay_158163_jpg__WEBPACK_IMPORTED_MODULE_4__);
    darkify("dark");
  } //this one has a problem with conditions description
  if (iconCode == "03n") {
    changeMainBg(_images_scattered_clouds_pexels_brett_sayles_3910141_jpg__WEBPACK_IMPORTED_MODULE_5__);
    darkify();
  }
  if (iconCode == "04d") {
    changeMainBg(_images_broken_clouds_broken2_jpg__WEBPACK_IMPORTED_MODULE_6__);
    darkify();
  }
  if (iconCode == "04n") {
    changeMainBg(_images_scattered_clouds_pexels_brett_sayles_3910141_jpg__WEBPACK_IMPORTED_MODULE_5__);
    darkify();
  }
  if (iconCode == "09d" || iconCode == "10d") {
    changeMainBg(_images_rain_dayrain_jpg__WEBPACK_IMPORTED_MODULE_7__);
    darkify();
  }
  if (iconCode == "09n" || iconCode == "10n") {
    changeMainBg(_images_rain_pexels_aleksandar_pasaric_2068411_jpg__WEBPACK_IMPORTED_MODULE_8__);
    darkify();
  }
  if (iconCode == "11d") {
    changeMainBg(_images_thunderstorm_pexels_andre_furtado_1162251_jpg__WEBPACK_IMPORTED_MODULE_9__);
    darkify();
  }
  if (iconCode == "11n") {
    changeMainBg(_images_thunderstorm_pexels_johannes_plenio_1118869_jpg__WEBPACK_IMPORTED_MODULE_10__);
    darkify();
  }
  if (iconCode == "13d") {
    changeMainBg(_images_snow_pexels_henrikas_mackevicius_4069601_jpg__WEBPACK_IMPORTED_MODULE_11__);
    darkify("dark");
  }
  if (iconCode == "13n") {
    changeMainBg(_images_snow_nightsnow2_jpg__WEBPACK_IMPORTED_MODULE_12__);
    darkify();
  }
  if (iconCode == "50d") {
    changeMainBg(_images_mist_pexels_nohk_1715476_jpg__WEBPACK_IMPORTED_MODULE_13__);
    darkify("dark");
  }
  if (iconCode == "50n") {
    changeMainBg(_images_mist_fog_night_jpg__WEBPACK_IMPORTED_MODULE_14__);
    darkify();
  }
}




/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weatherAPI": () => (/* binding */ weatherAPI),
/* harmony export */   "geocodingAPI": () => (/* binding */ geocodingAPI)
/* harmony export */ });


const weatherAPI ="940562bed4ea8eb89ddc0cc8e3aac2b4"
const placesAPI = "AIzaSyD2WmC02FJRh47UlX3VGyBpLFKz6Mx-qCw"
const geocodingAPI = "fcf207d586416db580282480768a64e6"



/***/ }),

/***/ "./src/forecast.js":
/*!*************************!*\
  !*** ./src/forecast.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "geocode": () => (/* binding */ geocode),
/* harmony export */   "reverseGeocode": () => (/* binding */ reverseGeocode),
/* harmony export */   "getWeather": () => (/* binding */ getWeather)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./src/nav.js");



// contains functions for communicating with APIs and formating data.

const geocode = async (searchText) => {
  //returns an object with latitude and longitude information from search text
  const URL = `http://api.positionstack.com/v1/forward?access_key=${_config__WEBPACK_IMPORTED_MODULE_0__.geocodingAPI}&query=${searchText}`;
  const response = await fetch(URL);
  if (!response.ok) {
    throw Error(response.status);
  }
  const data = await response.json();

  for (let i = 0; i < data.data.length; i++) {
    if (
      document
        .getElementById("search-bar")
        .value.split(",")[0]
        .toLowerCase() === data.data[i].name.toLowerCase()
    ) {
      return data.data[i];
    }
  }
  return data.data[0];
};

const reverseGeocode = async (lat, lon) => {
  const URL = `http://api.positionstack.com/v1/reverse?access_key=fcf207d586416db580282480768a64e6&query=${lat},${lon}`;
  const response = await fetch(URL);
  if (!response.ok) {
    throw Error(response.status);
  }
  const data = await response.json();
  return data
};

const getWeather = async (lat, lon) => {
  //uses the one call api from openweathermap.org to get detailed weather information for a location from latitude and longitude
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${(0,_nav__WEBPACK_IMPORTED_MODULE_1__.getUnitType)()}&exclude=minutely&appid=${_config__WEBPACK_IMPORTED_MODULE_0__.weatherAPI}`
  );
  if (!response.ok) {
    throw Error(response.status);
  }
  const data = await response.json();
  return data;
};




/***/ }),

/***/ "./src/images/broken-clouds/broken2.jpg":
/*!**********************************************!*\
  !*** ./src/images/broken-clouds/broken2.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ac1347459a6cbc0b4c3d.jpg";

/***/ }),

/***/ "./src/images/clear-sky/pexels-francesco-ungaro-281260.jpg":
/*!*****************************************************************!*\
  !*** ./src/images/clear-sky/pexels-francesco-ungaro-281260.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "da6ecc6ccf334008ad15.jpg";

/***/ }),

/***/ "./src/images/clear-sky/pexels-juan-733475.jpg":
/*!*****************************************************!*\
  !*** ./src/images/clear-sky/pexels-juan-733475.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e2c9286ce2f179d0cf90.jpg";

/***/ }),

/***/ "./src/images/few-clouds/pexels-roberto-nickson-2885320.jpg":
/*!******************************************************************!*\
  !*** ./src/images/few-clouds/pexels-roberto-nickson-2885320.jpg ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cacaec39817095747e04.jpg";

/***/ }),

/***/ "./src/images/few-clouds/pexels-skitterphoto-3768.jpg":
/*!************************************************************!*\
  !*** ./src/images/few-clouds/pexels-skitterphoto-3768.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ccae97df18a077868144.jpg";

/***/ }),

/***/ "./src/images/mist/fog-night.jpg":
/*!***************************************!*\
  !*** ./src/images/mist/fog-night.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "66f744984e31f7aa6a1c.jpg";

/***/ }),

/***/ "./src/images/mist/pexels-nohk-1715476.jpg":
/*!*************************************************!*\
  !*** ./src/images/mist/pexels-nohk-1715476.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1a28fed85a2ce13539ad.jpg";

/***/ }),

/***/ "./src/images/rain/dayrain.jpg":
/*!*************************************!*\
  !*** ./src/images/rain/dayrain.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "eafe7498a0daa2a50876.jpg";

/***/ }),

/***/ "./src/images/rain/pexels-aleksandar-pasaric-2068411.jpg":
/*!***************************************************************!*\
  !*** ./src/images/rain/pexels-aleksandar-pasaric-2068411.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "60645232ae8e4c03f7be.jpg";

/***/ }),

/***/ "./src/images/scattered-clouds/pexels-brett-sayles-3910141.jpg":
/*!*********************************************************************!*\
  !*** ./src/images/scattered-clouds/pexels-brett-sayles-3910141.jpg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a5a8ec801b6065831f3b.jpg";

/***/ }),

/***/ "./src/images/scattered-clouds/pexels-pixabay-158163.jpg":
/*!***************************************************************!*\
  !*** ./src/images/scattered-clouds/pexels-pixabay-158163.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4c9d6b074b9e88d118f9.jpg";

/***/ }),

/***/ "./src/images/snow/nightsnow2.jpg":
/*!****************************************!*\
  !*** ./src/images/snow/nightsnow2.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d9a03d28fd684e210491.jpg";

/***/ }),

/***/ "./src/images/snow/pexels-henrikas-mackevicius-4069601.jpg":
/*!*****************************************************************!*\
  !*** ./src/images/snow/pexels-henrikas-mackevicius-4069601.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "937974489e269952ae04.jpg";

/***/ }),

/***/ "./src/images/thunderstorm/pexels-andre-furtado-1162251.jpg":
/*!******************************************************************!*\
  !*** ./src/images/thunderstorm/pexels-andre-furtado-1162251.jpg ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0376f33b867cd3a09d6e.jpg";

/***/ }),

/***/ "./src/images/thunderstorm/pexels-johannes-plenio-1118869.jpg":
/*!********************************************************************!*\
  !*** ./src/images/thunderstorm/pexels-johannes-plenio-1118869.jpg ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c0597e9396bc37456d4c.jpg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeChildren": () => (/* binding */ removeChildren),
/* harmony export */   "unix": () => (/* binding */ unix),
/* harmony export */   "populateAllWeatherData": () => (/* binding */ populateAllWeatherData)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _forecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecast */ "./src/forecast.js");
/* harmony import */ var _main_weather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-weather */ "./src/main-weather.js");
/* harmony import */ var _weekly_forecast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weekly-forecast */ "./src/weekly-forecast.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav */ "./src/nav.js");
/* harmony import */ var _user_location__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-location */ "./src/user-location.js");








const searchForm = document.getElementById("search-form");
const searchBar = document.getElementById("search-bar");
const main = document.getElementById("main-weather");
console.log("940562bed4ea8eb89ddc0cc8e3aac2b4")
console.log("fcf207d586416db580282480768a64e6")
main.appendChild((0,_nav__WEBPACK_IMPORTED_MODULE_4__.navMenu)());
console.log((0,_nav__WEBPACK_IMPORTED_MODULE_4__.getDegrees)());

(0,_user_location__WEBPACK_IMPORTED_MODULE_5__.populateFromUserLocation)();

async function populateAllWeatherData() {
  document.getElementById("loader-container").classList.add("active");
  try {
    const geocodeData = await (0,_forecast__WEBPACK_IMPORTED_MODULE_1__.geocode)(searchBar.value);
    const weatherData = await (0,_forecast__WEBPACK_IMPORTED_MODULE_1__.getWeather)(
      Math.floor(geocodeData.latitude * 100) / 100,
      Math.floor(geocodeData.longitude * 100) / 100
    );
    console.log(geocodeData);
    console.log(weatherData);
    if (document.getElementById("initial-message")) {
      main.removeChild(document.getElementById("initial-message"));
    }
    (0,_main_weather__WEBPACK_IMPORTED_MODULE_2__.populateMain)(weatherData, geocodeData);
    (0,_weekly_forecast__WEBPACK_IMPORTED_MODULE_3__.populateWeeklyForecast)(weatherData);
    document.getElementById("loader-container").classList.remove("active");
    if (document.getElementById("menu-button").classList.contains("active")) {
      document.getElementById("weekly-forecast").classList.add("hidden");
    }
  } catch {
    document.getElementById("loader-container").classList.remove("active");
  }
}

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  populateAllWeatherData();
});

function removeChildren(parent) {
  //removes all children of an element
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function unix(unixString) {
  const dateObj = new Date(unixString * 1000);
  function time() {
    return dateObj.toTimeString().slice(0, 5);
  }
  function day() {
    const day = dateObj.toDateString().slice(0, 3);
    if (day === "Sun") return "Sunday";
    if (day === "Mon") return "Monday";
    if (day === "Tue") return "Tuesday";
    if (day === "Wed") return "Wednesday";
    if (day === "Thu") return "Thursday";
    if (day === "Fri") return "Friday";
    if (day === "Sat") return "Saturday";
  }
  return { time, day };
}




/***/ }),

/***/ "./src/main-weather.js":
/*!*****************************!*\
  !*** ./src/main-weather.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "populateMain": () => (/* binding */ populateMain)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./src/nav.js");
/* harmony import */ var _change_background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-background */ "./src/change-background.js");






let degreeType;

function newHourInfo(hourlyObj) {
  const hourInfo = document.createElement("div");
  hourInfo.classList.add("hour-info");

  const temp = document.createElement("div");
  temp.classList.add("hour-temp");
  temp.textContent = `${Math.floor(hourlyObj.temp / 1)}°`;
  hourInfo.appendChild(temp);

  const iconDiv = document.createElement("div");
  iconDiv.classList.add("hour-icon");
  const icon = document.createElement("img");
  icon.classList.add("small-icon");
  icon.src = `http://openweathermap.org/img/wn/${hourlyObj.weather[0].icon}@2x.png`;
  iconDiv.appendChild(icon);
  hourInfo.appendChild(iconDiv);

  const precipDiv = document.createElement("div");
  precipDiv.classList.add("hour-precip");
  precipDiv.innerHTML = "<div>precip:</div>";
  const pop = document.createElement("div");
  pop.textContent = `${hourlyObj.pop}%`;
  precipDiv.appendChild(pop);
  hourInfo.appendChild(precipDiv);

  const time = document.createElement("div");
  time.classList.add("hour-time");
  time.textContent = (0,___WEBPACK_IMPORTED_MODULE_0__.unix)(hourlyObj.dt).time();
  hourInfo.appendChild(time);

  return hourInfo;
}

function currentTemp(weatherData) {
  const tempDiv = document.createElement("div");
  tempDiv.classList.add("current-temp-data");
  tempDiv.id = "current-temp-data";
  tempDiv.innerHTML = `
    <div class="main-highlow" id="main-highlow">
      <div class="current-high" id="current-high">High: ${Math.floor(
        weatherData.daily[0].temp.max / 1
      )}°</div>
      <div class="current-low" id="current-low">Low: ${Math.floor(
        weatherData.daily[0].temp.min
      )}°</div>
    </div>
    <div class="current-temp" id="current-temp">
    ${Math.floor(
      weatherData.current.temp / 1
    )}<span class="c" id="c">°${degreeType}</span>
    </div>
    <div class="feels-like" id="feels-like">Feels like ${Math.floor(
      weatherData.current.feels_like / 1
    )}°${degreeType}</div>
    `;

  return tempDiv;
}

function currentConditions(weatherData) {
  const conditions = document.createElement("div");
  conditions.classList.add("main-conditions");
  conditions.id = "main-conditions";
  conditions.innerHTML = `
    <div class="main-icon" id="main-icon">
          <img
            id="icon-img"
            src="http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png"
            alt=""
          />
        </div>
        <div class="main-description" id="main-description">${weatherData.current.weather[0].description}</div>
    `;
  return conditions;
}

function placeName(geocodeData) {
  const place = document.createElement("div");
  place.classList.add("city-name");
  place.id = "city-name";
  place.textContent = geocodeData.label;
  return place;
}

function populateHourly(weatherData) {
  const hourlyContainer = document.createElement("div");
  hourlyContainer.id = "hourly-forecast"
  hourlyContainer.classList.add("hourly-forecast")
  for (let i = 0; i < 24; i++) {
    hourlyContainer.appendChild(newHourInfo(weatherData.hourly[i]));
  }
  return hourlyContainer
}
function populateMain(weatherData, geocodeData) {
  (0,_nav__WEBPACK_IMPORTED_MODULE_1__.getUnitType)() === "metric" ? (degreeType = "C") : (degreeType = "F");

  const mainWeather = document.getElementById("main-weather");
  if (document.getElementById("current-temp-data")) {
    mainWeather.removeChild(document.getElementById("current-temp-data"));
  }
  if (document.getElementById("main-conditions")) {
    mainWeather.removeChild(document.getElementById("main-conditions"));
  }
  if (document.getElementById("city-name")) {
    mainWeather.removeChild(document.getElementById("city-name"));
  }
  if (document.getElementById("hourly-forecast")){
    mainWeather.removeChild(document.getElementById("hourly-forecast"))
  }
 
  mainWeather.appendChild(currentTemp(weatherData));
  mainWeather.appendChild(currentConditions(weatherData));
  mainWeather.appendChild(placeName(geocodeData));
  mainWeather.appendChild(populateHourly(weatherData));
  (0,_change_background__WEBPACK_IMPORTED_MODULE_2__.changebg)(weatherData.current.weather[0].icon)
}




/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navMenu": () => (/* binding */ navMenu),
/* harmony export */   "getUnitType": () => (/* binding */ getUnitType),
/* harmony export */   "getDegrees": () => (/* binding */ getDegrees)
/* harmony export */ });
/* harmony import */ var _user_location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-location */ "./src/user-location.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");




let unitType = "imperial";

const changeUnits = (e) => {
  e.preventDefault();
  if (e.target.id === "c") unitType = "metric";
  else unitType = "imperial";
  if (document.getElementById("search-bar").value) (0,___WEBPACK_IMPORTED_MODULE_1__.populateAllWeatherData)();
  else (0,_user_location__WEBPACK_IMPORTED_MODULE_0__.populateFromUserLocation)();
  document.getElementById("weekly-forecast").classList.add("hidden");
};

function hideWeekly() {
  const menuButton = document.getElementById("menu-button");
  const weekly = document.getElementById("weekly-forecast");

  if (menuButton.classList.contains("active")) {
    weekly.classList.remove("hidden");
    menuButton.classList.remove("active");
  } else {
    weekly.classList.add("hidden");
    menuButton.classList.add("active");
  }
}

function appendSpan(parent, num) {
  for (let i = 0; i < num; i++) {
    const span = document.createElement("span");
    parent.appendChild(span);
  }
}

function navMenu() {
  const nav = document.createElement("nav");
  nav.role = "navigation";
  const menuToggle = document.createElement("div");
  menuToggle.id = "menuToggle";
  nav.appendChild(menuToggle);

  const menuButton = document.createElement("input");
  menuButton.type = "checkbox";
  menuButton.id = "menu-button";
  menuButton.addEventListener("click", hideWeekly);
  menuToggle.appendChild(menuButton);

  appendSpan(menuToggle, 3);

  const ul = document.createElement("ul");
  ul.id = "menu";
  menuToggle.appendChild(ul);

  const cfcontainer = document.createElement("a");
  cfcontainer.id = "c-f";
  ul.appendChild(cfcontainer);

  const c = document.createElement("button");
  c.id = "c";
  c.classList.add("unitButton");
  c.textContent = "°C";
  c.addEventListener("click", (e) => {
    changeUnits(e);
  });

  const f = document.createElement("button");
  f.id = "f";
  f.textContent = "°F";
  f.classList.add("unitButton");
  f.addEventListener("click", (e) => {
    changeUnits(e);
  });
  cfcontainer.appendChild(c);
  cfcontainer.appendChild(f);
  const menuTitles = ["Home", "About", "Github"];

  menuTitles.forEach((title) => {
    const a = document.createElement("a");
    a.href = "#";
    a.innerHTML = `<li>${title}</li>`;
    a.id = title;
    ul.appendChild(a);
  });
  return nav;
}

function getUnitType() {
  return unitType;
}
function getDegrees() {
  return unitType == "metric" ? "C" : "F";
}




/***/ }),

/***/ "./src/user-location.js":
/*!******************************!*\
  !*** ./src/user-location.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "populateFromUserLocation": () => (/* binding */ populateFromUserLocation)
/* harmony export */ });
/* harmony import */ var _weekly_forecast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weekly-forecast */ "./src/weekly-forecast.js");
/* harmony import */ var _main_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-weather */ "./src/main-weather.js");
/* harmony import */ var _forecast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forecast */ "./src/forecast.js");




var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

async function success(pos) {
  try {
    const crd = pos.coords;
    console.log(crd);
    const reverseGeocodeData = await (0,_forecast__WEBPACK_IMPORTED_MODULE_2__.reverseGeocode)(
      crd.latitude,
      crd.longitude
    );
    const weatherData = await (0,_forecast__WEBPACK_IMPORTED_MODULE_2__.getWeather)(crd.latitude, crd.longitude);
    console.log(reverseGeocodeData.data[0].label);
    console.log(weatherData);
    (0,_main_weather__WEBPACK_IMPORTED_MODULE_1__.populateMain)(weatherData, reverseGeocodeData.data[0]);
    (0,_weekly_forecast__WEBPACK_IMPORTED_MODULE_0__.populateWeeklyForecast)(weatherData);
    if (document.getElementById("menu-button").classList.contains("active")) {
      document.getElementById("weekly-forecast").classList.add("hidden");
    }
    document.getElementById("loader-container").classList.remove("active");
  } catch {
    document.getElementById("loader-container").classList.remove("active");
  }

}

function error(err) {
  document.getElementById("loader-container").classList.remove("active");
  console.warn(`ERROR(${err.code}): ${err.message}`);
  const message = document.createElement("div");
  message.id = "initial-message";
  message.classList.add("initial-message");
  message.textContent = "Search for a city and press 'Enter' to get started";
  document.getElementById("main-weather").appendChild(message);
}

function populateFromUserLocation() {
  document.getElementById("loader-container").classList.add("active");
  navigator.geolocation.getCurrentPosition(success, error, options);
}




/***/ }),

/***/ "./src/weekly-forecast.js":
/*!********************************!*\
  !*** ./src/weekly-forecast.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "populateWeeklyForecast": () => (/* binding */ populateWeeklyForecast)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./src/nav.js");
const d2d = __webpack_require__(/*! degrees-to-direction */ "./node_modules/degrees-to-direction/lib.js"); //converts wind degrees to a compass direction



let distanceType;

function createWeeklyForecast(weatherData) {
  let forecastList = [];
  for (let i = 0; i < 8; i++) {
    let day;
    const forecastDiv = document.createElement("div");
    forecastDiv.classList.add("day-forecast");
    if (i === 0) {
      day = "Today's forecast";
      forecastDiv.id = "today-forecast";
    } else day = (0,___WEBPACK_IMPORTED_MODULE_0__.unix)(weatherData.daily[i].dt).day();

    forecastDiv.innerHTML = `
    <div class="day-overview">
      <div class="day-overview-left">
        <div class="day-name">${day}</div>
        <div class="day-description">${
          weatherData.daily[i].weather[0].description
        }</div>
      </div>
      <div class="day-overview-right">
        <div class="day-icon">
          <img
            class="small-icon day-icon"
            src="http://openweathermap.org/img/wn/${
              weatherData.daily[i].weather[0].icon
            }@2x.png"
            alt=""
          />
        </div>
        <div class="day-highlow">
          <div class="day-high">${Math.floor(
            weatherData.daily[i].temp.max / 1
          )}°
          </div>
          <div class="day-low">${Math.floor(weatherData.daily[i].temp.min / 1)}°
          </div>
        </div>
      </div>
    </div>
    <ul class="day-details">
        <li><div>Precipitation</div> <div>${Math.floor(
          (weatherData.daily[i].pop * 100) / 1
        )}%</div>
        </li>
        <li><div>Wind</div> 
          <div>${weatherData.daily[i].wind_speed} ${distanceType}/h 
          ${d2d(weatherData.daily[i].wind_deg)}
          </div>
        </li>
        <li><div>Humidity</div> <div>${weatherData.daily[i].humidity}%</div>
        </li>
        <li><div>UV Index</div> <div>${weatherData.daily[i].uvi}</div>
        </li>
        <li><div>Sunrise/Sunset</div> <div>${(0,___WEBPACK_IMPORTED_MODULE_0__.unix)(
          weatherData.daily[i].sunrise
        ).time()}/${(0,___WEBPACK_IMPORTED_MODULE_0__.unix)(weatherData.daily[i].sunset).time()}</div>
        </li>
    </ul>`;
    forecastList.push(forecastDiv);
  }
  return forecastList;
}

function populateWeeklyForecast(weatherData) {
  (0,_nav__WEBPACK_IMPORTED_MODULE_1__.getUnitType)() === "metric" ? (distanceType = "km") : (distanceType = "mi");

  if (document.getElementById("weekly-forecast")) {
    document.body.removeChild(document.getElementById("weekly-forecast"));
  }
  const weeklyDiv = document.createElement("div");
  weeklyDiv.classList.add("weekly-forecast");
  weeklyDiv.id = "weekly-forecast";
  weeklyDiv.innerHTML = `
  <header class="weekly-header" id="weekly-header">
  <p>^</p>
  <div>8-day forecast:</div>
  </header>`;
  createWeeklyForecast(weatherData).forEach((node) => {
    weeklyDiv.appendChild(node);
  });
  document.body.appendChild(weeklyDiv);
}




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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrMS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjazEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazEvLi9ub2RlX21vZHVsZXMvZGVncmVlcy10by1kaXJlY3Rpb24vbGliLmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2sxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazEvLi9zcmMvY2hhbmdlLWJhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazEvLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vc3JjL2ZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vc3JjL21haW4td2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrMS8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazEvLi9zcmMvdXNlci1sb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrMS8uL3NyYy93ZWVrbHktZm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjazEvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjazEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2sxL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjazEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrMS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2sxL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2sxL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsaURBQWlELG9CQUFvQixxQkFBcUIsNEJBQTRCLEdBQUcsUUFBUSxnQkFBZ0IsaUJBQWlCLDRCQUE0QixHQUFHLFFBQVEsZ0JBQWdCLGlCQUFpQixrQ0FBa0Msa0JBQWtCLDJDQUEyQyx3Q0FBd0Msc0JBQXNCLEdBQUcsbUJBQW1CLG9CQUFvQixrQkFBa0Isc0JBQXNCLGdCQUFnQixrQ0FBa0Msc0JBQXNCLGtCQUFrQiwyQ0FBMkMsd0NBQXdDLGtCQUFrQiwyQkFBMkIsK0JBQStCLDJCQUEyQixHQUFHLFFBQVEsd0JBQXdCLGtCQUFrQixzQkFBc0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxjQUFjLGVBQWUsZ0JBQWdCLEdBQUcsZUFBZSxnQkFBZ0Is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QUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssT0FBTyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxPQUFPLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLGNBQWMsTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLGNBQWMsdUJBQXVCLGFBQWEsdUJBQXVCLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVB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bnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWJsdWU6ICMwNTFmMzg7XFxuICAtLXdoaXRlOiAjZmZmZmZmO1xcbiAgLS1kYXJrOiByZ2IoNDgsIDQ3LCA0Nyk7XFxufVxcbmh0bWwge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTUsIDFmcik7XFxuICBjb2xvcjogZ2hvc3R3aGl0ZTtcXG59XFxuXFxuLm1haW4td2VhdGhlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWluLWhlaWdodDogNTIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZ3JpZC1jb2x1bW46IDEvMTM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMiwgMWZyKTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdHJhbnNpdGlvbjogMXMgZWFzZS1pbi1vdXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5mb3JtIHtcXG4gIG1hcmdpbi1yaWdodDogLTEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ3JpZC1jb2x1bW46IDEvMTE7XFxuICBncmlkLXJvdzogMS8yO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5mb3JtIGlucHV0IHtcXG4gIHdpZHRoOiA5NyU7XFxuICBoZWlnaHQ6IDcwJTtcXG59XFxuZm9ybSBidXR0b24ge1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMjQ4LCAyNDgsIDAuODY0KTtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcbi5pbml0aWFsLW1lc3NhZ2Uge1xcbiAgZ3JpZC1jb2x1bW46IDIvMTI7XFxuICBncmlkLXJvdzogMy80O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uY3VycmVudC10ZW1wLWRhdGEge1xcbiAgZ3JpZC1yb3c6IDIvNjtcXG4gIGdyaWQtY29sdW1uOiAxLzY7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uY3VycmVudC10ZW1wLWRhdGEuZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzg5KTtcXG59XFxuLm1haW4taGlnaGxvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG4uY3VycmVudC10ZW1wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZm9udC1zaXplOiA1ZW07XFxuICAvKiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7ICovXFxufVxcbi5jdXJyZW50LXRlbXAtZGF0YSBkaXYge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG4uYyB7XFxuICBmb250LXNpemU6IDAuNWVtO1xcbn1cXG4uZmVlbHMtbGlrZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubWFpbi1jb25kaXRpb25zIHtcXG4gIGdyaWQtcm93OiAyLzY7XFxuICBncmlkLWNvbHVtbjogOC8xMztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5tYWluLWNvbmRpdGlvbnMuZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyOCwgMjI4LCAyMjgsIDAuNzIpO1xcbn1cXG5cXG4ubWFpbi1jb25kaXRpb25zIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubWFpbi1kZXNjcmlwdGlvbiB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW4tdG9wOiAtOHB4O1xcbn1cXG4ubWFpbi1kZXNjcmlwdGlvbi5kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NzEpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLm1haW4taWNvbiB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG4uY2l0eS1uYW1lIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBncmlkLXJvdzogNi83O1xcbiAgZ3JpZC1jb2x1bW46IDEvODtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5jaXR5LW5hbWUuZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzg5KTtcXG5cXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5ob3VybHktZm9yZWNhc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxuICBncmlkLXJvdzogNy8xMTtcXG4gIGdyaWQtY29sdW1uOiAxLzEzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG4uaG91ci1pbmZvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43MDcpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDZweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBoZWlnaHQ6IDk2JTtcXG4gIG1pbi13aWR0aDogNzBweDtcXG59XFxuLnNtYWxsLWljb24ge1xcbiAgd2lkdGg6IDYwcHg7XFxuICBtYXJnaW4tdG9wOiAtMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xcbn1cXG4uaG91ci1wcmVjaXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbn1cXG5cXG4vKioqKioqKiBXZWVrbHkgRm9yZWNhc3QgKioqKioqKiovXFxuXFxuLndlZWtseS1mb3JlY2FzdCB7XFxuICBtYXJnaW4tdG9wOiAxMCU7XFxuICB6LWluZGV4OiAxMDtcXG4gIGdyaWQtcm93OiAxNC8xNjtcXG4gIGdyaWQtY29sdW1uOiAxLzEzO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC40cztcXG59XFxuLndlZWtseS1mb3JlY2FzdC5oaWRkZW4ge1xcbiAgbWFyZ2luLXRvcDogMTAwMCU7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjZzO1xcbn1cXG4ud2Vla2x5LWZvcmVjYXN0IGhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3LCAxNiwgMTYsIDAuOTUzKTtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLndlZWtseS1mb3JlY2FzdCBwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcsIDE2LCAxNiwgMC45NTMpO1xcbiAgbWFyZ2luLXRvcDogLTZweDtcXG4gIHdpZHRoOiAyMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbiN0b2RheS1mb3JlY2FzdCB7XFxuICBtYXJnaW4tdG9wOiAwcHg7XFxuICAvKiAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDsgKi9cXG59XFxuLmRheS1mb3JlY2FzdCB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW4tdG9wOiAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3LCAxNiwgMTYsIDAuOTUzKTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig2cHgpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmRheS1vdmVydmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uZGF5LW5hbWUge1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG59XFxuXFxuLmRheS1vdmVydmlldy1yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZvcmVjYXN0LWV4cGFuZCB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcblxcbi5kYXktZGV0YWlscyBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLXRvcDogNnB4O1xcbiAgcGFkZGluZy1yaWdodDogMTAlO1xcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XFxufVxcblxcbi8qKioqTmF2IE1lbnUqKioqKi9cXG5cXG5uYXYge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbiAgY29sb3I6ICMyMzIzMjM7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgY29sb3I6ICMyZWNjNzE7XFxufVxcblxcbiNtZW51VG9nZ2xlIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAzNHB4O1xcbiAgcmlnaHQ6IDIuNSU7XFxuICB6LWluZGV4OiAxO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jbWVudVRvZ2dsZSBpbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtN3B4O1xcbiAgbGVmdDogLTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDA7XFxuICB6LWluZGV4OiAxMDtcXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG59XFxuXFxuI21lbnVUb2dnbGUgc3BhbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAzM3B4O1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiAjY2RjZGNkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgei1pbmRleDogNTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDRweCAwcHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC43NywgMC4yLCAwLjA1LCAxKSxcXG4gICAgYmFja2dyb3VuZCAwLjVzIGN1YmljLWJlemllcigwLjc3LCAwLjIsIDAuMDUsIDEpLCBvcGFjaXR5IDAuNTVzIGVhc2U7XFxufVxcblxcbiNtZW51VG9nZ2xlIHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxufVxcblxcbiNtZW51VG9nZ2xlIHNwYW46bnRoLWxhc3QtY2hpbGQoMikge1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcXG59XFxuXFxuI21lbnVUb2dnbGUgaW5wdXQ6Y2hlY2tlZCB+IHNwYW4ge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLTJweCwgLTFweCk7XFxuICBiYWNrZ3JvdW5kOiAjY2RjZGNkO1xcbn1cXG5cXG4jbWVudVRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gc3BhbjpudGgtbGFzdC1jaGlsZCgzKSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMC4yLCAwLjIpO1xcbn1cXG5cXG4jbWVudVRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gc3BhbjpudGgtbGFzdC1jaGlsZCgyKSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoMCwgLTFweCk7XFxufVxcblxcbiNtZW51IHtcXG4gIGNvbG9yOiBnaG9zdHdoaXRlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAtMTAwcHggMCAwIDA7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBwYWRkaW5nLXRvcDogMTI1cHg7XFxuICByaWdodDogLTUwcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjYsIDI2LCAyNik7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgMCk7XFxuXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC43NywgMC4yLCAwLjA1LCAxKTtcXG59XFxuXFxuI21lbnUgbGkge1xcbiBcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBjb2xvcjogZ2hvc3R3aGl0ZTtcXG4gIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIHdoaXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbn1cXG4jbWVudSBidXR0b24ge1xcbm1hcmdpbi1ib3R0b206IDE1cHg7XFxubWFyZ2luLWxlZnQ6IDQwcHg7XFxuYm9yZGVyLXJhZGl1czogNTAlO1xcbndpZHRoOiA0M3B4O1xcbmhlaWdodDogNDNweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG5jb2xvcjogZ2hvc3R3aGl0ZTtcXG5ib3JkZXI6IG5vbmU7XFxuYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuZm9udC1zaXplOiAyMHB4O1xcbmJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYigxMTEsIDExMCwgMTEwKSBpbnNldDtcXG5cXG5cXG59XFxuI21lbnUgYnV0dG9uOmFjdGl2ZXtcXG4gIFxcbiAgYm94LXNoYWRvdzogLTFweCAtMXB4IDFweCAwcHggcmdiKDExMSwgMTEwLCAxMTApIGluc2V0O1xcbn1cXG5cXG4jbWVudVRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gdWwge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcblxcbi8qKioqKioqKioqKkxvYWRlcioqKioqKioqKioqKioqKioqKiovXFxuLmxvYWRlci1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmxvYWRlci1jb250YWluZXIuYWN0aXZlIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjI1KTtcXG4gIHdpZHRoOiAxMjB2dztcXG4gIGhlaWdodDogMTIwdmg7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4jbG9hZC1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAtMTAwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjk1Myk7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuLmxvYWRlciB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG4gIGJvcmRlcjogMTZweCBzb2xpZCBncmF5OyAvKiBMaWdodCBncmV5ICovXFxuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiKDIzNywgMTAyLCA1Myk7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDIzNywgMTAyLCA1Myk7IC8qIEJsdWUgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDcwJTtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MTBweCkge1xcbiAgLndlZWtseS1mb3JlY2FzdCB7XFxuICAgIG1hcmdpbi10b3A6IDQlO1xcbiAgfVxcblxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjAyMDJlODtcXG4gIH1cXG4gIC5nYWxsZXJ5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgfVxcblxcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGhlaWdodDogN3B4O1xcbiAgICB3aWR0aDogNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbiAgfVxcblxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIHdpZHRoOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMzLCAyMzMsIDIzMywgMC44MzcpO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NTRweCkge1xcbiAgYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBpbml0aWFsO1xcbiAgfVxcbiAgI21lbnVUb2dnbGV7XFxuICAgIHRvcDogMjVweDtcXG4gIH1cXG4gIGZvcm0ge1xcbiAgICBncmlkLWNvbHVtbjogMi8xMjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcbiAgZm9ybSBidXR0b257XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAubWFpbi13ZWF0aGVyIHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBncmlkLXJvdzogMS8xNTtcXG4gICAgcG9zaXRpb246IGluaXRpYWw7XFxuICAgIGhlaWdodDogNTUwcHg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gIH1cXG4gICNzZWFyY2gtYmFyIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gIH1cXG4gIC5jdXJyZW50LXRlbXAtZGF0YSB7XFxuICAgIGdyaWQtcm93OiAzLzc7XFxuICAgIGdyaWQtY29sdW1uOiAyLzQ7XFxuICAgIHBhZGRpbmc6IDQlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gIH1cXG4gIC5tYWluLWNvbmRpdGlvbnMge1xcbiAgICBncmlkLXJvdzogNC83O1xcbiAgICBncmlkLWNvbHVtbjogMTAvMTI7XFxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xcbiAgfVxcbiAgLm1haW4tY29uZGl0aW9ucyBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG4gIC5tYWluLWljb24ge1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gIH1cXG4gICNpY29uLWltZyB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gIH1cXG4gIC5jaXR5LW5hbWUge1xcbiAgICBncmlkLXJvdzogMy82O1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBncmlkLWNvbHVtbjogNS85O1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5ob3VybHktZm9yZWNhc3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzE2KTtcXG4gICAgZ3JpZC1yb3c6IDgvMTM7XFxuICAgIGdyaWQtY29sdW1uOiAyLzEyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICB9XFxuICAuaG91ci1pbmZvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB9XFxuXFxuICAud2Vla2x5LWZvcmVjYXN0IHtcXG4gICAgZ3JpZC1yb3c6IDE1LzE2O1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICB6LWluZGV4OiAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG4gIH1cXG4gIC53ZWVrbHktZm9yZWNhc3QuaGlkZGVuIHtcXG4gICAgbWFyZ2luLXRvcDogMCU7XFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuNnM7XFxuICAgIHotaW5kZXg6IDA7XFxuICB9XFxuICAud2Vla2x5LWZvcmVjYXN0IHAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLndlZWtseS1mb3JlY2FzdCBoZWFkZXIge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gICN0b2RheS1mb3JlY2FzdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuICAjdG9kYXktZm9yZWNhc3QgLmRheS1vdmVydmlldyB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbiAgI3RvZGF5LWZvcmVjYXN0IC5kYXktb3ZlcnZpZXctbGVmdCB7XFxuICAgIG1hcmdpbi1yaWdodDogNDVweDtcXG4gIH1cXG4gICN0b2RheS1mb3JlY2FzdCAuZGF5LW92ZXJ2aWV3LWxlZnQgZGl2IHtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICB9XFxuICAjdG9kYXktZm9yZWNhc3QgLmRheS1kZXRhaWxzIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMCU7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMwJTtcXG4gIH1cXG4gICN0b2RheS1mb3JlY2FzdCAuZGF5LWRldGFpbHMgbGkge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuXFxuICAuZGF5LWZvcmVjYXN0IHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICB9XFxuICAuZGF5LWRldGFpbHMgbGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi10b3A6IDZweDtcXG4gICAgcGFkZGluZy1yaWdodDogNnB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcXG4gICAgZm9udC1zaXplOiAwLjllbTtcXG4gIH1cXG4gIC5sb2FkZXItY29udGFpbmVyLmFjdGl2ZSB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42MjUpO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA1MjRweCl7XFxuICAuY2l0eS1uYW1leyBcXG4gICAgZGlzcGxheTogbm9uZTt9XFxufVxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0MDVweCl7XFxuICAuY2l0eS1uYW1leyBcXG4gICAgZGlzcGxheTogbm9uZTt9XFxuICAuaG91cmx5LWZvcmVjYXN0e1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw0Q0FBNEM7RUFDNUMsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsY0FBYztFQUNkO3dCQUNzQjtBQUN4QjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHNDQUFzQztFQUN0QyxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxzQ0FBc0M7O0VBRXRDLGFBQWE7QUFDZjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usc0NBQXNDO0VBQ3RDLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUEsaUNBQWlDOztBQUVqQztFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHlDQUF5QztFQUN6QyxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSx5Q0FBeUM7RUFDekMsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmO2tDQUNnQztBQUNsQztBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZix5Q0FBeUM7RUFDekMsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBLGtCQUFrQjs7QUFFbEI7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0VBQ1gsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixlQUFlO0VBQ2YsVUFBVTtFQUNWLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHlCQUF5QjtFQUN6Qjt3RUFDc0U7QUFDeEU7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsOENBQThDO0VBQzlDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLG1DQUFtQztFQUNuQyx1QkFBdUI7RUFDdkIsNkJBQTZCOztFQUU3QiwyREFBMkQ7QUFDN0Q7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEIsV0FBVztBQUNYLFlBQVk7QUFDWiw2QkFBNkI7QUFDN0IsaUJBQWlCO0FBQ2pCLFlBQVk7QUFDWiw2QkFBNkI7QUFDN0IsZUFBZTtBQUNmLGdEQUFnRDs7O0FBR2hEO0FBQ0E7O0VBRUUsc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjs7O0FBR0EscUNBQXFDO0FBQ3JDO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtBQUNaO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1COztFQUVuQixzQ0FBc0M7RUFDdEMsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7O0VBRWxCLHVCQUF1QixFQUFFLGVBQWU7RUFDeEMsdUNBQXVDO0VBQ3ZDLDBDQUEwQyxFQUFFLFNBQVM7RUFDckQsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usb0RBQW9EO0lBQ3BELDRDQUE0QztJQUM1QyxrQkFBa0I7SUFDbEIsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsVUFBVTtJQUNWLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsb0RBQW9EO0lBQ3BELDRDQUE0QztFQUM5QztBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsU0FBUztFQUNYO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixZQUFZO0VBQ2Q7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLFlBQVk7RUFDZDtFQUNBO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsWUFBWTtFQUNkO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usc0NBQXNDO0lBQ3RDLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSw2QkFBNkI7SUFDN0IseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7SUFDZixhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7SUFDYixXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7SUFDWCxTQUFTO0VBQ1g7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0Usb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1osYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWEsQ0FBQztBQUNsQjs7O0FBR0E7RUFDRTtJQUNFLGFBQWEsQ0FBQztFQUNoQjtJQUNFLGFBQWE7RUFDZjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tYmx1ZTogIzA1MWYzODtcXG4gIC0td2hpdGU6ICNmZmZmZmY7XFxuICAtLWRhcms6IHJnYig0OCwgNDcsIDQ3KTtcXG59XFxuaHRtbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxNSwgMWZyKTtcXG4gIGNvbG9yOiBnaG9zdHdoaXRlO1xcbn1cXG5cXG4ubWFpbi13ZWF0aGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtaW4taGVpZ2h0OiA1MjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBncmlkLWNvbHVtbjogMS8xMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEyLCAxZnIpO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0cmFuc2l0aW9uOiAxcyBlYXNlLWluLW91dDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcbmZvcm0ge1xcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBncmlkLWNvbHVtbjogMS8xMTtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmZvcm0gaW5wdXQge1xcbiAgd2lkdGg6IDk3JTtcXG4gIGhlaWdodDogNzAlO1xcbn1cXG5mb3JtIGJ1dHRvbiB7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAyNDgsIDI0OCwgMC44NjQpO1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuLmluaXRpYWwtbWVzc2FnZSB7XFxuICBncmlkLWNvbHVtbjogMi8xMjtcXG4gIGdyaWQtcm93OiAzLzQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5jdXJyZW50LXRlbXAtZGF0YSB7XFxuICBncmlkLXJvdzogMi82O1xcbiAgZ3JpZC1jb2x1bW46IDEvNjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5jdXJyZW50LXRlbXAtZGF0YS5kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43ODkpO1xcbn1cXG4ubWFpbi1oaWdobG93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcbi5jdXJyZW50LXRlbXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmb250LXNpemU6IDVlbTtcXG4gIC8qICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDsgKi9cXG59XFxuLmN1cnJlbnQtdGVtcC1kYXRhIGRpdiB7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcbi5jIHtcXG4gIGZvbnQtc2l6ZTogMC41ZW07XFxufVxcbi5mZWVscy1saWtlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tYWluLWNvbmRpdGlvbnMge1xcbiAgZ3JpZC1yb3c6IDIvNjtcXG4gIGdyaWQtY29sdW1uOiA4LzEzO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLm1haW4tY29uZGl0aW9ucy5kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI4LCAyMjgsIDIyOCwgMC43Mik7XFxufVxcblxcbi5tYWluLWNvbmRpdGlvbnMgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5tYWluLWRlc2NyaXB0aW9uIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG1hcmdpbi10b3A6IC04cHg7XFxufVxcbi5tYWluLWRlc2NyaXB0aW9uLmRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3MSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4ubWFpbi1pY29uIHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcbi5jaXR5LW5hbWUge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGdyaWQtcm93OiA2Lzc7XFxuICBncmlkLWNvbHVtbjogMS84O1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLmNpdHktbmFtZS5kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43ODkpO1xcblxcbiAgcGFkZGluZzogMTBweDtcXG59XFxuLmhvdXJseS1mb3JlY2FzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG4gIGdyaWQtcm93OiA3LzExO1xcbiAgZ3JpZC1jb2x1bW46IDEvMTM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcbi5ob3VyLWluZm8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcwNyk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNnB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXJnaW46IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIGhlaWdodDogOTYlO1xcbiAgbWluLXdpZHRoOiA3MHB4O1xcbn1cXG4uc21hbGwtaWNvbiB7XFxuICB3aWR0aDogNjBweDtcXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XFxufVxcbi5ob3VyLXByZWNpcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxufVxcblxcbi8qKioqKioqIFdlZWtseSBGb3JlY2FzdCAqKioqKioqKi9cXG5cXG4ud2Vla2x5LWZvcmVjYXN0IHtcXG4gIG1hcmdpbi10b3A6IDEwJTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgZ3JpZC1yb3c6IDE0LzE2O1xcbiAgZ3JpZC1jb2x1bW46IDEvMTM7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjRzO1xcbn1cXG4ud2Vla2x5LWZvcmVjYXN0LmhpZGRlbiB7XFxuICBtYXJnaW4tdG9wOiAxMDAwJTtcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuNnM7XFxufVxcbi53ZWVrbHktZm9yZWNhc3QgaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcsIDE2LCAxNiwgMC45NTMpO1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4ud2Vla2x5LWZvcmVjYXN0IHAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNywgMTYsIDE2LCAwLjk1Myk7XFxuICBtYXJnaW4tdG9wOiAtNnB4O1xcbiAgd2lkdGg6IDIwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuI3RvZGF5LWZvcmVjYXN0IHtcXG4gIG1hcmdpbi10b3A6IDBweDtcXG4gIC8qICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4OyAqL1xcbn1cXG4uZGF5LWZvcmVjYXN0IHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbi10b3A6IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcsIDE2LCAxNiwgMC45NTMpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDZweCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZGF5LW92ZXJ2aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5kYXktbmFtZSB7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbn1cXG5cXG4uZGF5LW92ZXJ2aWV3LXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZm9yZWNhc3QtZXhwYW5kIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuLmRheS1kZXRhaWxzIGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tdG9wOiA2cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG59XFxuXFxuLyoqKipOYXYgTWVudSoqKioqL1xcblxcbm5hdiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogIzIzMjMyMztcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXG59XFxuXFxuYTpob3ZlciB7XFxuICBjb2xvcjogIzJlY2M3MTtcXG59XFxuXFxuI21lbnVUb2dnbGUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDM0cHg7XFxuICByaWdodDogMi41JTtcXG4gIHotaW5kZXg6IDE7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbiNtZW51VG9nZ2xlIGlucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC03cHg7XFxuICBsZWZ0OiAtNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcbn1cXG5cXG4jbWVudVRvZ2dsZSBzcGFuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDMzcHg7XFxuICBoZWlnaHQ6IDRweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6ICNjZGNkY2Q7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICB6LWluZGV4OiA1O1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogNHB4IDBweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjc3LCAwLjIsIDAuMDUsIDEpLFxcbiAgICBiYWNrZ3JvdW5kIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAuMiwgMC4wNSwgMSksIG9wYWNpdHkgMC41NXMgZWFzZTtcXG59XFxuXFxuI21lbnVUb2dnbGUgc3BhbjpmaXJzdC1jaGlsZCB7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcXG59XFxuXFxuI21lbnVUb2dnbGUgc3BhbjpudGgtbGFzdC1jaGlsZCgyKSB7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xcbn1cXG5cXG4jbWVudVRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gc3BhbiB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtMnB4LCAtMXB4KTtcXG4gIGJhY2tncm91bmQ6ICNjZGNkY2Q7XFxufVxcblxcbiNtZW51VG9nZ2xlIGlucHV0OmNoZWNrZWQgfiBzcGFuOm50aC1sYXN0LWNoaWxkKDMpIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgwLjIsIDAuMik7XFxufVxcblxcbiNtZW51VG9nZ2xlIGlucHV0OmNoZWNrZWQgfiBzcGFuOm50aC1sYXN0LWNoaWxkKDIpIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgwLCAtMXB4KTtcXG59XFxuXFxuI21lbnUge1xcbiAgY29sb3I6IGdob3N0d2hpdGU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IC0xMDBweCAwIDAgMDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIHBhZGRpbmctdG9wOiAxMjVweDtcXG4gIHJpZ2h0OiAtNTBweDtcXG4gIGJhY2tncm91bmQ6IHJnYigyNiwgMjYsIDI2KTtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAwKTtcXG5cXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjc3LCAwLjIsIDAuMDUsIDEpO1xcbn1cXG5cXG4jbWVudSBsaSB7XFxuIFxcbiAgcGFkZGluZzogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogNDBweDtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGNvbG9yOiBnaG9zdHdoaXRlO1xcbiAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgd2hpdGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tYm90dG9tOiAzcHg7XFxufVxcbiNtZW51IGJ1dHRvbiB7XFxubWFyZ2luLWJvdHRvbTogMTVweDtcXG5tYXJnaW4tbGVmdDogNDBweDtcXG5ib3JkZXItcmFkaXVzOiA1MCU7XFxud2lkdGg6IDQzcHg7XFxuaGVpZ2h0OiA0M3B4O1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbmNvbG9yOiBnaG9zdHdoaXRlO1xcbmJvcmRlcjogbm9uZTtcXG5ib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG5mb250LXNpemU6IDIwcHg7XFxuYm94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiKDExMSwgMTEwLCAxMTApIGluc2V0O1xcblxcblxcbn1cXG4jbWVudSBidXR0b246YWN0aXZle1xcbiAgXFxuICBib3gtc2hhZG93OiAtMXB4IC0xcHggMXB4IDBweCByZ2IoMTExLCAxMTAsIDExMCkgaW5zZXQ7XFxufVxcblxcbiNtZW51VG9nZ2xlIGlucHV0OmNoZWNrZWQgfiB1bCB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuXFxuLyoqKioqKioqKioqTG9hZGVyKioqKioqKioqKioqKioqKioqKi9cXG4ubG9hZGVyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubG9hZGVyLWNvbnRhaW5lci5hY3RpdmUge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42MjUpO1xcbiAgd2lkdGg6IDEyMHZ3O1xcbiAgaGVpZ2h0OiAxMjB2aDtcXG4gIHotaW5kZXg6IDE7XFxufVxcbiNsb2FkLW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IC0xMDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOTUzKTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG4ubG9hZGVyIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcblxcbiAgYm9yZGVyOiAxNnB4IHNvbGlkIGdyYXk7IC8qIExpZ2h0IGdyZXkgKi9cXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2IoMjM3LCAxMDIsIDUzKTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMjM3LCAxMDIsIDUzKTsgLyogQmx1ZSAqL1xcbiAgYm9yZGVyLXJhZGl1czogNzAlO1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQxMHB4KSB7XFxuICAud2Vla2x5LWZvcmVjYXN0IHtcXG4gICAgbWFyZ2luLXRvcDogNCU7XFxuICB9XFxuXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyMDIwMmU4O1xcbiAgfVxcbiAgLmdhbGxlcnk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB9XFxuXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgaGVpZ2h0OiA3cHg7XFxuICAgIHdpZHRoOiA2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxuICB9XFxuXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgd2lkdGg6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzMsIDIzMywgMjMzLCAwLjgzNyk7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc1NHB4KSB7XFxuICBib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IGluaXRpYWw7XFxuICB9XFxuICAjbWVudVRvZ2dsZXtcXG4gICAgdG9wOiAyNXB4O1xcbiAgfVxcbiAgZm9ybSB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzEyO1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuICBmb3JtIGJ1dHRvbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5tYWluLXdlYXRoZXIge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGdyaWQtcm93OiAxLzE1O1xcbiAgICBwb3NpdGlvbjogaW5pdGlhbDtcXG4gICAgaGVpZ2h0OiA1NTBweDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgfVxcbiAgI3NlYXJjaC1iYXIge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgfVxcbiAgLmN1cnJlbnQtdGVtcC1kYXRhIHtcXG4gICAgZ3JpZC1yb3c6IDMvNztcXG4gICAgZ3JpZC1jb2x1bW46IDIvNDtcXG4gICAgcGFkZGluZzogNCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgfVxcbiAgLm1haW4tY29uZGl0aW9ucyB7XFxuICAgIGdyaWQtcm93OiA0Lzc7XFxuICAgIGdyaWQtY29sdW1uOiAxMC8xMjtcXG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XFxuICB9XFxuICAubWFpbi1jb25kaXRpb25zIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbiAgLm1haW4taWNvbiB7XFxuICAgIG1hcmdpbi10b3A6IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgfVxcbiAgI2ljb24taW1nIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgfVxcbiAgLmNpdHktbmFtZSB7XFxuICAgIGdyaWQtcm93OiAzLzY7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIGdyaWQtY29sdW1uOiA1Lzk7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmhvdXJseS1mb3JlY2FzdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMTYpO1xcbiAgICBncmlkLXJvdzogOC8xMztcXG4gICAgZ3JpZC1jb2x1bW46IDIvMTI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gIH1cXG4gIC5ob3VyLWluZm8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIH1cXG5cXG4gIC53ZWVrbHktZm9yZWNhc3Qge1xcbiAgICBncmlkLXJvdzogMTUvMTY7XFxuICAgIG1hcmdpbi10b3A6IDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIHotaW5kZXg6IDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcbiAgfVxcbiAgLndlZWtseS1mb3JlY2FzdC5oaWRkZW4ge1xcbiAgICBtYXJnaW4tdG9wOiAwJTtcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC42cztcXG4gICAgei1pbmRleDogMDtcXG4gIH1cXG4gIC53ZWVrbHktZm9yZWNhc3QgcCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAud2Vla2x5LWZvcmVjYXN0IGhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgI3RvZGF5LWZvcmVjYXN0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG4gICN0b2RheS1mb3JlY2FzdCAuZGF5LW92ZXJ2aWV3IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuICAjdG9kYXktZm9yZWNhc3QgLmRheS1vdmVydmlldy1sZWZ0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0NXB4O1xcbiAgfVxcbiAgI3RvZGF5LWZvcmVjYXN0IC5kYXktb3ZlcnZpZXctbGVmdCBkaXYge1xcbiAgICBtYXJnaW46IDVweDtcXG4gIH1cXG4gICN0b2RheS1mb3JlY2FzdCAuZGF5LWRldGFpbHMge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwJTtcXG4gICAgcGFkZGluZy1yaWdodDogMzAlO1xcbiAgfVxcbiAgI3RvZGF5LWZvcmVjYXN0IC5kYXktZGV0YWlscyBsaSB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG5cXG4gIC5kYXktZm9yZWNhc3Qge1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gIH1cXG4gIC5kYXktZGV0YWlscyBsaSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLXRvcDogNnB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XFxuICAgIHBhZGRpbmctbGVmdDogNnB4O1xcbiAgICBmb250LXNpemU6IDAuOWVtO1xcbiAgfVxcbiAgLmxvYWRlci1jb250YWluZXIuYWN0aXZlIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYyNSk7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDUyNHB4KXtcXG4gIC5jaXR5LW5hbWV7IFxcbiAgICBkaXNwbGF5OiBub25lO31cXG59XFxuXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQwNXB4KXtcXG4gIC5jaXR5LW5hbWV7IFxcbiAgICBkaXNwbGF5OiBub25lO31cXG4gIC5ob3VybHktZm9yZWNhc3R7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZCkge1xuICBpZiAodHlwZW9mIGQgIT09ICdudW1iZXInIHx8IGlzTmFOKGQpKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgLy8ga2VlcCB3aXRoaW4gdGhlIHJhbmdlOiAwIDw9IGQgPCAzNjBcbiAgZCA9IGQgJSAzNjA7XG5cbiAgaWYgKDExLjI1IDw9IGQgJiYgZCA8IDMzLjc1KSB7XG4gICAgcmV0dXJuIFwiTk5FXCI7XG4gIH0gZWxzZSBpZiAoMzMuNzUgPD0gZCAmJiBkIDwgNTYuMjUpIHtcbiAgICByZXR1cm4gXCJORVwiO1xuICB9IGVsc2UgaWYgKDU2LjI1IDw9IGQgJiYgZCA8IDc4Ljc1KSB7XG4gICAgcmV0dXJuIFwiRU5FXCI7XG4gIH0gZWxzZSBpZiAoNzguNzUgPD0gZCAmJiBkIDwgMTAxLjI1KSB7XG4gICAgcmV0dXJuIFwiRVwiO1xuICB9IGVsc2UgaWYgKDEwMS4yNSA8PSBkICYmIGQgPCAxMjMuNzUpIHtcbiAgICByZXR1cm4gXCJFU0VcIjtcbiAgfSBlbHNlIGlmICgxMjMuNzUgPD0gZCAmJiBkIDwgMTQ2LjI1KSB7XG4gICAgcmV0dXJuIFwiU0VcIjtcbiAgfSBlbHNlIGlmICgxNDYuMjUgPD0gZCAmJiBkIDwgMTY4Ljc1KSB7XG4gICAgcmV0dXJuIFwiU1NFXCI7XG4gIH0gZWxzZSBpZiAoMTY4Ljc1IDw9IGQgJiYgZCA8IDE5MS4yNSkge1xuICAgIHJldHVybiBcIlNcIjtcbiAgfSBlbHNlIGlmICgxOTEuMjUgPD0gZCAmJiBkIDwgMjEzLjc1KSB7XG4gICAgcmV0dXJuIFwiU1NXXCI7XG4gIH0gZWxzZSBpZiAoMjEzLjc1IDw9IGQgJiYgZCA8IDIzNi4yNSkge1xuICAgIHJldHVybiBcIlNXXCI7XG4gIH0gZWxzZSBpZiAoMjM2LjI1IDw9IGQgJiYgZCA8IDI1OC43NSkge1xuICAgIHJldHVybiBcIldTV1wiO1xuICB9IGVsc2UgaWYgKDI1OC43NSA8PSBkICYmIGQgPCAyODEuMjUpIHtcbiAgICByZXR1cm4gXCJXXCI7XG4gIH0gZWxzZSBpZiAoMjgxLjI1IDw9IGQgJiYgZCA8IDMwMy43NSkge1xuICAgIHJldHVybiBcIldOV1wiO1xuICB9IGVsc2UgaWYgKDMwMy43NSA8PSBkICYmIGQgPCAzMjYuMjUpIHtcbiAgICByZXR1cm4gXCJOV1wiO1xuICB9IGVsc2UgaWYgKDMyNi4yNSA8PSBkICYmIGQgPCAzNDguNzUpIHtcbiAgICByZXR1cm4gXCJOTldcIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJOXCI7XG4gIH1cbn07XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGdldFRhcmdldCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBmdW5jdGlvbihjc3MsIHN0eWxlKXtcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9O1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgdmFyIG5vbmNlID1cbiAgICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihzdHlsZSl7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChcImhlYWRcIik7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9O1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFyZ2V0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJpbXBvcnQgY2xlYXJTa3lEYXkgZnJvbSBcIi4vaW1hZ2VzL2NsZWFyLXNreS9wZXhlbHMtZnJhbmNlc2NvLXVuZ2Fyby0yODEyNjAuanBnXCI7XG5pbXBvcnQgY2xlYXJTa3lOaWdodCBmcm9tIFwiLi9pbWFnZXMvY2xlYXItc2t5L3BleGVscy1qdWFuLTczMzQ3NS5qcGdcIjtcblxuaW1wb3J0IGZld0Nsb3Vkc0RheSBmcm9tIFwiLi9pbWFnZXMvZmV3LWNsb3Vkcy9wZXhlbHMtc2tpdHRlcnBob3RvLTM3NjguanBnXCI7XG5pbXBvcnQgZmV3Q2xvdWRzTmlnaHQgZnJvbSBcIi4vaW1hZ2VzL2Zldy1jbG91ZHMvcGV4ZWxzLXJvYmVydG8tbmlja3Nvbi0yODg1MzIwLmpwZ1wiO1xuXG5pbXBvcnQgc2NhdHRlcmVkQ2xvdWRzRGF5IGZyb20gXCIuL2ltYWdlcy9zY2F0dGVyZWQtY2xvdWRzL3BleGVscy1waXhhYmF5LTE1ODE2My5qcGdcIjsgLy90aGlzIG9uZSBoYXMgYSBwcm9ibGVtIHdpdGggY29uZGl0aW9ucyBkZXNjcmlwdGlvblxuaW1wb3J0IHNjYXR0ZXJlZENsb3Vkc05pZ2h0IGZyb20gXCIuL2ltYWdlcy9zY2F0dGVyZWQtY2xvdWRzL3BleGVscy1icmV0dC1zYXlsZXMtMzkxMDE0MS5qcGdcIjtcblxuaW1wb3J0IGJyb2tlbkNsb3Vkc0RheSBmcm9tIFwiLi9pbWFnZXMvYnJva2VuLWNsb3Vkcy9icm9rZW4yLmpwZ1wiO1xuXG5pbXBvcnQgc2hvd2VyUmFpbkRheSBmcm9tIFwiLi9pbWFnZXMvcmFpbi9kYXlyYWluLmpwZ1wiO1xuaW1wb3J0IHNob3dlclJhaW5OaWdodCBmcm9tIFwiLi9pbWFnZXMvcmFpbi9wZXhlbHMtYWxla3NhbmRhci1wYXNhcmljLTIwNjg0MTEuanBnXCI7XG5cbmltcG9ydCB0aHVuZGVyc3Rvcm1EYXkgZnJvbSBcIi4vaW1hZ2VzL3RodW5kZXJzdG9ybS9wZXhlbHMtYW5kcmUtZnVydGFkby0xMTYyMjUxLmpwZ1wiO1xuaW1wb3J0IHRodW5kZXJzdG9ybU5pZ2h0IGZyb20gXCIuL2ltYWdlcy90aHVuZGVyc3Rvcm0vcGV4ZWxzLWpvaGFubmVzLXBsZW5pby0xMTE4ODY5LmpwZ1wiO1xuXG5pbXBvcnQgc25vd0RheSBmcm9tIFwiLi9pbWFnZXMvc25vdy9wZXhlbHMtaGVucmlrYXMtbWFja2V2aWNpdXMtNDA2OTYwMS5qcGdcIjtcbmltcG9ydCBzbm93TmlnaHQgZnJvbSBcIi4vaW1hZ2VzL3Nub3cvbmlnaHRzbm93Mi5qcGdcIjtcblxuaW1wb3J0IG1pc3REYXkgZnJvbSBcIi4vaW1hZ2VzL21pc3QvcGV4ZWxzLW5vaGstMTcxNTQ3Ni5qcGdcIjtcbmltcG9ydCBtaXN0TmlnaHQgZnJvbSBcIi4vaW1hZ2VzL21pc3QvZm9nLW5pZ2h0LmpwZ1wiXG5mdW5jdGlvbiBkYXJraWZ5KG9wdGlvbikge1xuICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXRlbXAtZGF0YVwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tZGVzY3JpcHRpb25cIik7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNpdHktbmFtZVwiKTtcbiAgY29uc3QgY29uZGl0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1jb25kaXRpb25zXCIpXG5cbiAgaWYgKG9wdGlvbiA9PSBcImRhcmtcIikge1xuICAgIHRlbXAuY2xhc3NMaXN0LmFkZChcImRhcmtcIik7XG4gICAgY29uZGl0aW9ucy5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKTtcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpXG4gIH0gZWxzZSB7XG4gICAgdGVtcC5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya1wiKTtcbiAgICBjb25kaXRpb25zLmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrXCIpO1xuICAgIG5hbWUuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIik7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIilcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VNYWluQmcoaW1wb3J0ZWRJbWFnZSkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLXdlYXRoZXJcIik7XG4gIG1haW4uc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtpbXBvcnRlZEltYWdlfSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXJgO1xuICBtYWluLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJjb3ZlclwiO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2ViZyhpY29uQ29kZSkge1xuICBpZiAoaWNvbkNvZGUgPT0gXCIwMWRcIikge1xuICAgIGNoYW5nZU1haW5CZyhjbGVhclNreURheSk7XG4gICAgZGFya2lmeSgpO1xuICB9XG4gIGlmIChpY29uQ29kZSA9PSBcIjAxblwiKSB7XG4gICAgY2hhbmdlTWFpbkJnKGNsZWFyU2t5TmlnaHQpO1xuICAgIGRhcmtpZnkoKTtcbiAgfVxuXG4gIGlmIChpY29uQ29kZSA9PSBcIjAyZFwiKSB7XG4gICAgY2hhbmdlTWFpbkJnKGZld0Nsb3Vkc0RheSk7XG4gICAgZGFya2lmeSgpO1xuICB9XG4gIGlmIChpY29uQ29kZSA9PSBcIjAyblwiKSB7XG4gICAgY2hhbmdlTWFpbkJnKGZld0Nsb3Vkc05pZ2h0KTtcbiAgICBkYXJraWZ5KCk7XG4gIH1cbiAgaWYgKGljb25Db2RlID09IFwiMDNkXCIpIHtcbiAgICBjaGFuZ2VNYWluQmcoc2NhdHRlcmVkQ2xvdWRzRGF5KTtcbiAgICBkYXJraWZ5KFwiZGFya1wiKTtcbiAgfSAvL3RoaXMgb25lIGhhcyBhIHByb2JsZW0gd2l0aCBjb25kaXRpb25zIGRlc2NyaXB0aW9uXG4gIGlmIChpY29uQ29kZSA9PSBcIjAzblwiKSB7XG4gICAgY2hhbmdlTWFpbkJnKHNjYXR0ZXJlZENsb3Vkc05pZ2h0KTtcbiAgICBkYXJraWZ5KCk7XG4gIH1cbiAgaWYgKGljb25Db2RlID09IFwiMDRkXCIpIHtcbiAgICBjaGFuZ2VNYWluQmcoYnJva2VuQ2xvdWRzRGF5KTtcbiAgICBkYXJraWZ5KCk7XG4gIH1cbiAgaWYgKGljb25Db2RlID09IFwiMDRuXCIpIHtcbiAgICBjaGFuZ2VNYWluQmcoc2NhdHRlcmVkQ2xvdWRzTmlnaHQpO1xuICAgIGRhcmtpZnkoKTtcbiAgfVxuICBpZiAoaWNvbkNvZGUgPT0gXCIwOWRcIiB8fCBpY29uQ29kZSA9PSBcIjEwZFwiKSB7XG4gICAgY2hhbmdlTWFpbkJnKHNob3dlclJhaW5EYXkpO1xuICAgIGRhcmtpZnkoKTtcbiAgfVxuICBpZiAoaWNvbkNvZGUgPT0gXCIwOW5cIiB8fCBpY29uQ29kZSA9PSBcIjEwblwiKSB7XG4gICAgY2hhbmdlTWFpbkJnKHNob3dlclJhaW5OaWdodCk7XG4gICAgZGFya2lmeSgpO1xuICB9XG4gIGlmIChpY29uQ29kZSA9PSBcIjExZFwiKSB7XG4gICAgY2hhbmdlTWFpbkJnKHRodW5kZXJzdG9ybURheSk7XG4gICAgZGFya2lmeSgpO1xuICB9XG4gIGlmIChpY29uQ29kZSA9PSBcIjExblwiKSB7XG4gICAgY2hhbmdlTWFpbkJnKHRodW5kZXJzdG9ybU5pZ2h0KTtcbiAgICBkYXJraWZ5KCk7XG4gIH1cbiAgaWYgKGljb25Db2RlID09IFwiMTNkXCIpIHtcbiAgICBjaGFuZ2VNYWluQmcoc25vd0RheSk7XG4gICAgZGFya2lmeShcImRhcmtcIik7XG4gIH1cbiAgaWYgKGljb25Db2RlID09IFwiMTNuXCIpIHtcbiAgICBjaGFuZ2VNYWluQmcoc25vd05pZ2h0KTtcbiAgICBkYXJraWZ5KCk7XG4gIH1cbiAgaWYgKGljb25Db2RlID09IFwiNTBkXCIpIHtcbiAgICBjaGFuZ2VNYWluQmcobWlzdERheSk7XG4gICAgZGFya2lmeShcImRhcmtcIik7XG4gIH1cbiAgaWYgKGljb25Db2RlID09IFwiNTBuXCIpIHtcbiAgICBjaGFuZ2VNYWluQmcobWlzdE5pZ2h0KTtcbiAgICBkYXJraWZ5KCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgY2hhbmdlYmcgfTtcbiIsIlxuXG5jb25zdCB3ZWF0aGVyQVBJID1wcm9jZXNzLmVudi5XRUFUSEVSX0tFWVxuY29uc3QgcGxhY2VzQVBJID0gXCJBSXphU3lEMldtQzAyRkpSaDQ3VWxYM1ZHeUJwTEZLejZNeC1xQ3dcIlxuY29uc3QgZ2VvY29kaW5nQVBJID0gcHJvY2Vzcy5lbnYuR0VPX0tFWVxuXG5leHBvcnR7d2VhdGhlckFQSSwgZ2VvY29kaW5nQVBJfSIsImltcG9ydCB7IHdlYXRoZXJBUEksIGdlb2NvZGluZ0FQSSB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgZ2V0VW5pdFR5cGUgfSBmcm9tIFwiLi9uYXZcIjtcblxuLy8gY29udGFpbnMgZnVuY3Rpb25zIGZvciBjb21tdW5pY2F0aW5nIHdpdGggQVBJcyBhbmQgZm9ybWF0aW5nIGRhdGEuXG5cbmNvbnN0IGdlb2NvZGUgPSBhc3luYyAoc2VhcmNoVGV4dCkgPT4ge1xuICAvL3JldHVybnMgYW4gb2JqZWN0IHdpdGggbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBpbmZvcm1hdGlvbiBmcm9tIHNlYXJjaCB0ZXh0XG4gIGNvbnN0IFVSTCA9IGBodHRwOi8vYXBpLnBvc2l0aW9uc3RhY2suY29tL3YxL2ZvcndhcmQ/YWNjZXNzX2tleT0ke2dlb2NvZGluZ0FQSX0mcXVlcnk9JHtzZWFyY2hUZXh0fWA7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMKTtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG4gIH1cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuZGF0YS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1iYXJcIilcbiAgICAgICAgLnZhbHVlLnNwbGl0KFwiLFwiKVswXVxuICAgICAgICAudG9Mb3dlckNhc2UoKSA9PT0gZGF0YS5kYXRhW2ldLm5hbWUudG9Mb3dlckNhc2UoKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGEuZGF0YVtpXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRhdGEuZGF0YVswXTtcbn07XG5cbmNvbnN0IHJldmVyc2VHZW9jb2RlID0gYXN5bmMgKGxhdCwgbG9uKSA9PiB7XG4gIGNvbnN0IFVSTCA9IGBodHRwOi8vYXBpLnBvc2l0aW9uc3RhY2suY29tL3YxL3JldmVyc2U/YWNjZXNzX2tleT1mY2YyMDdkNTg2NDE2ZGI1ODAyODI0ODA3NjhhNjRlNiZxdWVyeT0ke2xhdH0sJHtsb259YDtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkwpO1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcbiAgfVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YVxufTtcblxuY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChsYXQsIGxvbikgPT4ge1xuICAvL3VzZXMgdGhlIG9uZSBjYWxsIGFwaSBmcm9tIG9wZW53ZWF0aGVybWFwLm9yZyB0byBnZXQgZGV0YWlsZWQgd2VhdGhlciBpbmZvcm1hdGlvbiBmb3IgYSBsb2NhdGlvbiBmcm9tIGxhdGl0dWRlIGFuZCBsb25naXR1ZGVcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsb259JnVuaXRzPSR7Z2V0VW5pdFR5cGUoKX0mZXhjbHVkZT1taW51dGVseSZhcHBpZD0ke3dlYXRoZXJBUEl9YFxuICApO1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcbiAgfVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCB7IGdlb2NvZGUsIHJldmVyc2VHZW9jb2RlLCBnZXRXZWF0aGVyIH07XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgZ2VvY29kZSwgZ2V0V2VhdGhlciB9IGZyb20gXCIuL2ZvcmVjYXN0XCI7XG5pbXBvcnQgeyBwb3B1bGF0ZU1haW4gfSBmcm9tIFwiLi9tYWluLXdlYXRoZXJcIjtcbmltcG9ydCB7IHBvcHVsYXRlV2Vla2x5Rm9yZWNhc3QgfSBmcm9tIFwiLi93ZWVrbHktZm9yZWNhc3RcIjtcbmltcG9ydCB7IG5hdk1lbnUsIGdldERlZ3JlZXMgfSBmcm9tIFwiLi9uYXZcIjtcbmltcG9ydCB7IHBvcHVsYXRlRnJvbVVzZXJMb2NhdGlvbiB9IGZyb20gXCIuL3VzZXItbG9jYXRpb25cIjtcblxuXG5jb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtZm9ybVwiKTtcbmNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWJhclwiKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4td2VhdGhlclwiKTtcbmNvbnNvbGUubG9nKHByb2Nlc3MuZW52LldFQVRIRVJfS0VZKVxuY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuR0VPX0tFWSlcbm1haW4uYXBwZW5kQ2hpbGQobmF2TWVudSgpKTtcbmNvbnNvbGUubG9nKGdldERlZ3JlZXMoKSk7XG5cbnBvcHVsYXRlRnJvbVVzZXJMb2NhdGlvbigpO1xuXG5hc3luYyBmdW5jdGlvbiBwb3B1bGF0ZUFsbFdlYXRoZXJEYXRhKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRlci1jb250YWluZXJcIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgdHJ5IHtcbiAgICBjb25zdCBnZW9jb2RlRGF0YSA9IGF3YWl0IGdlb2NvZGUoc2VhcmNoQmFyLnZhbHVlKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXIoXG4gICAgICBNYXRoLmZsb29yKGdlb2NvZGVEYXRhLmxhdGl0dWRlICogMTAwKSAvIDEwMCxcbiAgICAgIE1hdGguZmxvb3IoZ2VvY29kZURhdGEubG9uZ2l0dWRlICogMTAwKSAvIDEwMFxuICAgICk7XG4gICAgY29uc29sZS5sb2coZ2VvY29kZURhdGEpO1xuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbml0aWFsLW1lc3NhZ2VcIikpIHtcbiAgICAgIG1haW4ucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbml0aWFsLW1lc3NhZ2VcIikpO1xuICAgIH1cbiAgICBwb3B1bGF0ZU1haW4od2VhdGhlckRhdGEsIGdlb2NvZGVEYXRhKTtcbiAgICBwb3B1bGF0ZVdlZWtseUZvcmVjYXN0KHdlYXRoZXJEYXRhKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRlci1jb250YWluZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWJ1dHRvblwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2Vla2x5LWZvcmVjYXN0XCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgfVxuICB9IGNhdGNoIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRlci1jb250YWluZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfVxufVxuXG5zZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgYXN5bmMgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBwb3B1bGF0ZUFsbFdlYXRoZXJEYXRhKCk7XG59KTtcblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGRyZW4ocGFyZW50KSB7XG4gIC8vcmVtb3ZlcyBhbGwgY2hpbGRyZW4gb2YgYW4gZWxlbWVudFxuICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuaXgodW5peFN0cmluZykge1xuICBjb25zdCBkYXRlT2JqID0gbmV3IERhdGUodW5peFN0cmluZyAqIDEwMDApO1xuICBmdW5jdGlvbiB0aW1lKCkge1xuICAgIHJldHVybiBkYXRlT2JqLnRvVGltZVN0cmluZygpLnNsaWNlKDAsIDUpO1xuICB9XG4gIGZ1bmN0aW9uIGRheSgpIHtcbiAgICBjb25zdCBkYXkgPSBkYXRlT2JqLnRvRGF0ZVN0cmluZygpLnNsaWNlKDAsIDMpO1xuICAgIGlmIChkYXkgPT09IFwiU3VuXCIpIHJldHVybiBcIlN1bmRheVwiO1xuICAgIGlmIChkYXkgPT09IFwiTW9uXCIpIHJldHVybiBcIk1vbmRheVwiO1xuICAgIGlmIChkYXkgPT09IFwiVHVlXCIpIHJldHVybiBcIlR1ZXNkYXlcIjtcbiAgICBpZiAoZGF5ID09PSBcIldlZFwiKSByZXR1cm4gXCJXZWRuZXNkYXlcIjtcbiAgICBpZiAoZGF5ID09PSBcIlRodVwiKSByZXR1cm4gXCJUaHVyc2RheVwiO1xuICAgIGlmIChkYXkgPT09IFwiRnJpXCIpIHJldHVybiBcIkZyaWRheVwiO1xuICAgIGlmIChkYXkgPT09IFwiU2F0XCIpIHJldHVybiBcIlNhdHVyZGF5XCI7XG4gIH1cbiAgcmV0dXJuIHsgdGltZSwgZGF5IH07XG59XG5cbmV4cG9ydCB7IHJlbW92ZUNoaWxkcmVuLCB1bml4LCBwb3B1bGF0ZUFsbFdlYXRoZXJEYXRhIH07XG4iLCJpbXBvcnQgeyByZW1vdmVDaGlsZHJlbiwgdW5peCB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBnZXRVbml0VHlwZSB9IGZyb20gXCIuL25hdlwiO1xuaW1wb3J0IHsgY2hhbmdlYmcgfSBmcm9tIFwiLi9jaGFuZ2UtYmFja2dyb3VuZFwiO1xuXG5cblxubGV0IGRlZ3JlZVR5cGU7XG5cbmZ1bmN0aW9uIG5ld0hvdXJJbmZvKGhvdXJseU9iaikge1xuICBjb25zdCBob3VySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvdXJJbmZvLmNsYXNzTGlzdC5hZGQoXCJob3VyLWluZm9cIik7XG5cbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRlbXAuY2xhc3NMaXN0LmFkZChcImhvdXItdGVtcFwiKTtcbiAgdGVtcC50ZXh0Q29udGVudCA9IGAke01hdGguZmxvb3IoaG91cmx5T2JqLnRlbXAgLyAxKX3CsGA7XG4gIGhvdXJJbmZvLmFwcGVuZENoaWxkKHRlbXApO1xuXG4gIGNvbnN0IGljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpY29uRGl2LmNsYXNzTGlzdC5hZGQoXCJob3VyLWljb25cIik7XG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpY29uLmNsYXNzTGlzdC5hZGQoXCJzbWFsbC1pY29uXCIpO1xuICBpY29uLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2hvdXJseU9iai53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2A7XG4gIGljb25EaXYuYXBwZW5kQ2hpbGQoaWNvbik7XG4gIGhvdXJJbmZvLmFwcGVuZENoaWxkKGljb25EaXYpO1xuXG4gIGNvbnN0IHByZWNpcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByZWNpcERpdi5jbGFzc0xpc3QuYWRkKFwiaG91ci1wcmVjaXBcIik7XG4gIHByZWNpcERpdi5pbm5lckhUTUwgPSBcIjxkaXY+cHJlY2lwOjwvZGl2PlwiO1xuICBjb25zdCBwb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwb3AudGV4dENvbnRlbnQgPSBgJHtob3VybHlPYmoucG9wfSVgO1xuICBwcmVjaXBEaXYuYXBwZW5kQ2hpbGQocG9wKTtcbiAgaG91ckluZm8uYXBwZW5kQ2hpbGQocHJlY2lwRGl2KTtcblxuICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGltZS5jbGFzc0xpc3QuYWRkKFwiaG91ci10aW1lXCIpO1xuICB0aW1lLnRleHRDb250ZW50ID0gdW5peChob3VybHlPYmouZHQpLnRpbWUoKTtcbiAgaG91ckluZm8uYXBwZW5kQ2hpbGQodGltZSk7XG5cbiAgcmV0dXJuIGhvdXJJbmZvO1xufVxuXG5mdW5jdGlvbiBjdXJyZW50VGVtcCh3ZWF0aGVyRGF0YSkge1xuICBjb25zdCB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGVtcERpdi5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC10ZW1wLWRhdGFcIik7XG4gIHRlbXBEaXYuaWQgPSBcImN1cnJlbnQtdGVtcC1kYXRhXCI7XG4gIHRlbXBEaXYuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJtYWluLWhpZ2hsb3dcIiBpZD1cIm1haW4taGlnaGxvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtaGlnaFwiIGlkPVwiY3VycmVudC1oaWdoXCI+SGlnaDogJHtNYXRoLmZsb29yKFxuICAgICAgICB3ZWF0aGVyRGF0YS5kYWlseVswXS50ZW1wLm1heCAvIDFcbiAgICAgICl9wrA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjdXJyZW50LWxvd1wiIGlkPVwiY3VycmVudC1sb3dcIj5Mb3c6ICR7TWF0aC5mbG9vcihcbiAgICAgICAgd2VhdGhlckRhdGEuZGFpbHlbMF0udGVtcC5taW5cbiAgICAgICl9wrA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC10ZW1wXCIgaWQ9XCJjdXJyZW50LXRlbXBcIj5cbiAgICAke01hdGguZmxvb3IoXG4gICAgICB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXAgLyAxXG4gICAgKX08c3BhbiBjbGFzcz1cImNcIiBpZD1cImNcIj7CsCR7ZGVncmVlVHlwZX08L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZlZWxzLWxpa2VcIiBpZD1cImZlZWxzLWxpa2VcIj5GZWVscyBsaWtlICR7TWF0aC5mbG9vcihcbiAgICAgIHdlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNfbGlrZSAvIDFcbiAgICApfcKwJHtkZWdyZWVUeXBlfTwvZGl2PlxuICAgIGA7XG5cbiAgcmV0dXJuIHRlbXBEaXY7XG59XG5cbmZ1bmN0aW9uIGN1cnJlbnRDb25kaXRpb25zKHdlYXRoZXJEYXRhKSB7XG4gIGNvbnN0IGNvbmRpdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25kaXRpb25zLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbmRpdGlvbnNcIik7XG4gIGNvbmRpdGlvbnMuaWQgPSBcIm1haW4tY29uZGl0aW9uc1wiO1xuICBjb25kaXRpb25zLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwibWFpbi1pY29uXCIgaWQ9XCJtYWluLWljb25cIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBpZD1cImljb24taW1nXCJcbiAgICAgICAgICAgIHNyYz1cImh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7d2VhdGhlckRhdGEuY3VycmVudC53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1kZXNjcmlwdGlvblwiIGlkPVwibWFpbi1kZXNjcmlwdGlvblwiPiR7d2VhdGhlckRhdGEuY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgIGA7XG4gIHJldHVybiBjb25kaXRpb25zO1xufVxuXG5mdW5jdGlvbiBwbGFjZU5hbWUoZ2VvY29kZURhdGEpIHtcbiAgY29uc3QgcGxhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGFjZS5jbGFzc0xpc3QuYWRkKFwiY2l0eS1uYW1lXCIpO1xuICBwbGFjZS5pZCA9IFwiY2l0eS1uYW1lXCI7XG4gIHBsYWNlLnRleHRDb250ZW50ID0gZ2VvY29kZURhdGEubGFiZWw7XG4gIHJldHVybiBwbGFjZTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVIb3VybHkod2VhdGhlckRhdGEpIHtcbiAgY29uc3QgaG91cmx5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG91cmx5Q29udGFpbmVyLmlkID0gXCJob3VybHktZm9yZWNhc3RcIlxuICBob3VybHlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhvdXJseS1mb3JlY2FzdFwiKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpKyspIHtcbiAgICBob3VybHlDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3SG91ckluZm8od2VhdGhlckRhdGEuaG91cmx5W2ldKSk7XG4gIH1cbiAgcmV0dXJuIGhvdXJseUNvbnRhaW5lclxufVxuZnVuY3Rpb24gcG9wdWxhdGVNYWluKHdlYXRoZXJEYXRhLCBnZW9jb2RlRGF0YSkge1xuICBnZXRVbml0VHlwZSgpID09PSBcIm1ldHJpY1wiID8gKGRlZ3JlZVR5cGUgPSBcIkNcIikgOiAoZGVncmVlVHlwZSA9IFwiRlwiKTtcblxuICBjb25zdCBtYWluV2VhdGhlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi13ZWF0aGVyXCIpO1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXRlbXAtZGF0YVwiKSkge1xuICAgIG1haW5XZWF0aGVyLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC10ZW1wLWRhdGFcIikpO1xuICB9XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tY29uZGl0aW9uc1wiKSkge1xuICAgIG1haW5XZWF0aGVyLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1jb25kaXRpb25zXCIpKTtcbiAgfVxuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaXR5LW5hbWVcIikpIHtcbiAgICBtYWluV2VhdGhlci5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNpdHktbmFtZVwiKSk7XG4gIH1cbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG91cmx5LWZvcmVjYXN0XCIpKXtcbiAgICBtYWluV2VhdGhlci5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvdXJseS1mb3JlY2FzdFwiKSlcbiAgfVxuIFxuICBtYWluV2VhdGhlci5hcHBlbmRDaGlsZChjdXJyZW50VGVtcCh3ZWF0aGVyRGF0YSkpO1xuICBtYWluV2VhdGhlci5hcHBlbmRDaGlsZChjdXJyZW50Q29uZGl0aW9ucyh3ZWF0aGVyRGF0YSkpO1xuICBtYWluV2VhdGhlci5hcHBlbmRDaGlsZChwbGFjZU5hbWUoZ2VvY29kZURhdGEpKTtcbiAgbWFpbldlYXRoZXIuYXBwZW5kQ2hpbGQocG9wdWxhdGVIb3VybHkod2VhdGhlckRhdGEpKTtcbiAgY2hhbmdlYmcod2VhdGhlckRhdGEuY3VycmVudC53ZWF0aGVyWzBdLmljb24pXG59XG5cbmV4cG9ydCB7IHBvcHVsYXRlTWFpbiB9O1xuIiwiaW1wb3J0IHsgcG9wdWxhdGVGcm9tVXNlckxvY2F0aW9uIH0gZnJvbSBcIi4vdXNlci1sb2NhdGlvblwiO1xuXG5pbXBvcnQgeyBwb3B1bGF0ZUFsbFdlYXRoZXJEYXRhIH0gZnJvbSBcIi5cIjtcblxubGV0IHVuaXRUeXBlID0gXCJpbXBlcmlhbFwiO1xuXG5jb25zdCBjaGFuZ2VVbml0cyA9IChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKGUudGFyZ2V0LmlkID09PSBcImNcIikgdW5pdFR5cGUgPSBcIm1ldHJpY1wiO1xuICBlbHNlIHVuaXRUeXBlID0gXCJpbXBlcmlhbFwiO1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtYmFyXCIpLnZhbHVlKSBwb3B1bGF0ZUFsbFdlYXRoZXJEYXRhKCk7XG4gIGVsc2UgcG9wdWxhdGVGcm9tVXNlckxvY2F0aW9uKCk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2Vla2x5LWZvcmVjYXN0XCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG59O1xuXG5mdW5jdGlvbiBoaWRlV2Vla2x5KCkge1xuICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWJ1dHRvblwiKTtcbiAgY29uc3Qgd2Vla2x5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWVrbHktZm9yZWNhc3RcIik7XG5cbiAgaWYgKG1lbnVCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgd2Vla2x5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9IGVsc2Uge1xuICAgIHdlZWtseS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBlbmRTcGFuKHBhcmVudCwgbnVtKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHNwYW4pO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5hdk1lbnUoKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIG5hdi5yb2xlID0gXCJuYXZpZ2F0aW9uXCI7XG4gIGNvbnN0IG1lbnVUb2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51VG9nZ2xlLmlkID0gXCJtZW51VG9nZ2xlXCI7XG4gIG5hdi5hcHBlbmRDaGlsZChtZW51VG9nZ2xlKTtcblxuICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBtZW51QnV0dG9uLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gIG1lbnVCdXR0b24uaWQgPSBcIm1lbnUtYnV0dG9uXCI7XG4gIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVXZWVrbHkpO1xuICBtZW51VG9nZ2xlLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuXG4gIGFwcGVuZFNwYW4obWVudVRvZ2dsZSwgMyk7XG5cbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHVsLmlkID0gXCJtZW51XCI7XG4gIG1lbnVUb2dnbGUuYXBwZW5kQ2hpbGQodWwpO1xuXG4gIGNvbnN0IGNmY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGNmY29udGFpbmVyLmlkID0gXCJjLWZcIjtcbiAgdWwuYXBwZW5kQ2hpbGQoY2Zjb250YWluZXIpO1xuXG4gIGNvbnN0IGMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjLmlkID0gXCJjXCI7XG4gIGMuY2xhc3NMaXN0LmFkZChcInVuaXRCdXR0b25cIik7XG4gIGMudGV4dENvbnRlbnQgPSBcIsKwQ1wiO1xuICBjLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNoYW5nZVVuaXRzKGUpO1xuICB9KTtcblxuICBjb25zdCBmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZi5pZCA9IFwiZlwiO1xuICBmLnRleHRDb250ZW50ID0gXCLCsEZcIjtcbiAgZi5jbGFzc0xpc3QuYWRkKFwidW5pdEJ1dHRvblwiKTtcbiAgZi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjaGFuZ2VVbml0cyhlKTtcbiAgfSk7XG4gIGNmY29udGFpbmVyLmFwcGVuZENoaWxkKGMpO1xuICBjZmNvbnRhaW5lci5hcHBlbmRDaGlsZChmKTtcbiAgY29uc3QgbWVudVRpdGxlcyA9IFtcIkhvbWVcIiwgXCJBYm91dFwiLCBcIkdpdGh1YlwiXTtcblxuICBtZW51VGl0bGVzLmZvckVhY2goKHRpdGxlKSA9PiB7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGEuaHJlZiA9IFwiI1wiO1xuICAgIGEuaW5uZXJIVE1MID0gYDxsaT4ke3RpdGxlfTwvbGk+YDtcbiAgICBhLmlkID0gdGl0bGU7XG4gICAgdWwuYXBwZW5kQ2hpbGQoYSk7XG4gIH0pO1xuICByZXR1cm4gbmF2O1xufVxuXG5mdW5jdGlvbiBnZXRVbml0VHlwZSgpIHtcbiAgcmV0dXJuIHVuaXRUeXBlO1xufVxuZnVuY3Rpb24gZ2V0RGVncmVlcygpIHtcbiAgcmV0dXJuIHVuaXRUeXBlID09IFwibWV0cmljXCIgPyBcIkNcIiA6IFwiRlwiO1xufVxuXG5leHBvcnQgeyBuYXZNZW51LCBnZXRVbml0VHlwZSwgZ2V0RGVncmVlcyB9O1xuIiwiaW1wb3J0IHsgcG9wdWxhdGVXZWVrbHlGb3JlY2FzdCB9IGZyb20gXCIuL3dlZWtseS1mb3JlY2FzdFwiO1xuaW1wb3J0IHsgcG9wdWxhdGVNYWluIH0gZnJvbSBcIi4vbWFpbi13ZWF0aGVyXCI7XG5pbXBvcnQgeyBnZXRXZWF0aGVyLCByZXZlcnNlR2VvY29kZSB9IGZyb20gXCIuL2ZvcmVjYXN0XCI7XG5cbnZhciBvcHRpb25zID0ge1xuICBlbmFibGVIaWdoQWNjdXJhY3k6IHRydWUsXG4gIHRpbWVvdXQ6IDUwMDAsXG4gIG1heGltdW1BZ2U6IDAsXG59O1xuXG5hc3luYyBmdW5jdGlvbiBzdWNjZXNzKHBvcykge1xuICB0cnkge1xuICAgIGNvbnN0IGNyZCA9IHBvcy5jb29yZHM7XG4gICAgY29uc29sZS5sb2coY3JkKTtcbiAgICBjb25zdCByZXZlcnNlR2VvY29kZURhdGEgPSBhd2FpdCByZXZlcnNlR2VvY29kZShcbiAgICAgIGNyZC5sYXRpdHVkZSxcbiAgICAgIGNyZC5sb25naXR1ZGVcbiAgICApO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlcihjcmQubGF0aXR1ZGUsIGNyZC5sb25naXR1ZGUpO1xuICAgIGNvbnNvbGUubG9nKHJldmVyc2VHZW9jb2RlRGF0YS5kYXRhWzBdLmxhYmVsKTtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gICAgcG9wdWxhdGVNYWluKHdlYXRoZXJEYXRhLCByZXZlcnNlR2VvY29kZURhdGEuZGF0YVswXSk7XG4gICAgcG9wdWxhdGVXZWVrbHlGb3JlY2FzdCh3ZWF0aGVyRGF0YSk7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS1idXR0b25cIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlZWtseS1mb3JlY2FzdFwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIH1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRlci1jb250YWluZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSBjYXRjaCB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkZXItY29udGFpbmVyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH1cblxufVxuXG5mdW5jdGlvbiBlcnJvcihlcnIpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkZXItY29udGFpbmVyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIGNvbnNvbGUud2FybihgRVJST1IoJHtlcnIuY29kZX0pOiAke2Vyci5tZXNzYWdlfWApO1xuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVzc2FnZS5pZCA9IFwiaW5pdGlhbC1tZXNzYWdlXCI7XG4gIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcImluaXRpYWwtbWVzc2FnZVwiKTtcbiAgbWVzc2FnZS50ZXh0Q29udGVudCA9IFwiU2VhcmNoIGZvciBhIGNpdHkgYW5kIHByZXNzICdFbnRlcicgdG8gZ2V0IHN0YXJ0ZWRcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLXdlYXRoZXJcIikuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlRnJvbVVzZXJMb2NhdGlvbigpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkZXItY29udGFpbmVyXCIpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oc3VjY2VzcywgZXJyb3IsIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgeyBwb3B1bGF0ZUZyb21Vc2VyTG9jYXRpb24gfTtcbiIsImNvbnN0IGQyZCA9IHJlcXVpcmUoXCJkZWdyZWVzLXRvLWRpcmVjdGlvblwiKTsgLy9jb252ZXJ0cyB3aW5kIGRlZ3JlZXMgdG8gYSBjb21wYXNzIGRpcmVjdGlvblxuaW1wb3J0IHsgdW5peCB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBnZXRVbml0VHlwZSB9IGZyb20gXCIuL25hdlwiO1xuXG5sZXQgZGlzdGFuY2VUeXBlO1xuXG5mdW5jdGlvbiBjcmVhdGVXZWVrbHlGb3JlY2FzdCh3ZWF0aGVyRGF0YSkge1xuICBsZXQgZm9yZWNhc3RMaXN0ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgbGV0IGRheTtcbiAgICBjb25zdCBmb3JlY2FzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9yZWNhc3REaXYuY2xhc3NMaXN0LmFkZChcImRheS1mb3JlY2FzdFwiKTtcbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgZGF5ID0gXCJUb2RheSdzIGZvcmVjYXN0XCI7XG4gICAgICBmb3JlY2FzdERpdi5pZCA9IFwidG9kYXktZm9yZWNhc3RcIjtcbiAgICB9IGVsc2UgZGF5ID0gdW5peCh3ZWF0aGVyRGF0YS5kYWlseVtpXS5kdCkuZGF5KCk7XG5cbiAgICBmb3JlY2FzdERpdi5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cImRheS1vdmVydmlld1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImRheS1vdmVydmlldy1sZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkYXktbmFtZVwiPiR7ZGF5fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGF5LWRlc2NyaXB0aW9uXCI+JHtcbiAgICAgICAgICB3ZWF0aGVyRGF0YS5kYWlseVtpXS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uXG4gICAgICAgIH08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImRheS1vdmVydmlldy1yaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGF5LWljb25cIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBjbGFzcz1cInNtYWxsLWljb24gZGF5LWljb25cIlxuICAgICAgICAgICAgc3JjPVwiaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtcbiAgICAgICAgICAgICAgd2VhdGhlckRhdGEuZGFpbHlbaV0ud2VhdGhlclswXS5pY29uXG4gICAgICAgICAgICB9QDJ4LnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGF5LWhpZ2hsb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF5LWhpZ2hcIj4ke01hdGguZmxvb3IoXG4gICAgICAgICAgICB3ZWF0aGVyRGF0YS5kYWlseVtpXS50ZW1wLm1heCAvIDFcbiAgICAgICAgICApfcKwXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRheS1sb3dcIj4ke01hdGguZmxvb3Iod2VhdGhlckRhdGEuZGFpbHlbaV0udGVtcC5taW4gLyAxKX3CsFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDx1bCBjbGFzcz1cImRheS1kZXRhaWxzXCI+XG4gICAgICAgIDxsaT48ZGl2PlByZWNpcGl0YXRpb248L2Rpdj4gPGRpdj4ke01hdGguZmxvb3IoXG4gICAgICAgICAgKHdlYXRoZXJEYXRhLmRhaWx5W2ldLnBvcCAqIDEwMCkgLyAxXG4gICAgICAgICl9JTwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+PGRpdj5XaW5kPC9kaXY+IFxuICAgICAgICAgIDxkaXY+JHt3ZWF0aGVyRGF0YS5kYWlseVtpXS53aW5kX3NwZWVkfSAke2Rpc3RhbmNlVHlwZX0vaCBcbiAgICAgICAgICAke2QyZCh3ZWF0aGVyRGF0YS5kYWlseVtpXS53aW5kX2RlZyl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT48ZGl2Pkh1bWlkaXR5PC9kaXY+IDxkaXY+JHt3ZWF0aGVyRGF0YS5kYWlseVtpXS5odW1pZGl0eX0lPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT48ZGl2PlVWIEluZGV4PC9kaXY+IDxkaXY+JHt3ZWF0aGVyRGF0YS5kYWlseVtpXS51dml9PC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT48ZGl2PlN1bnJpc2UvU3Vuc2V0PC9kaXY+IDxkaXY+JHt1bml4KFxuICAgICAgICAgIHdlYXRoZXJEYXRhLmRhaWx5W2ldLnN1bnJpc2VcbiAgICAgICAgKS50aW1lKCl9LyR7dW5peCh3ZWF0aGVyRGF0YS5kYWlseVtpXS5zdW5zZXQpLnRpbWUoKX08L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICA8L3VsPmA7XG4gICAgZm9yZWNhc3RMaXN0LnB1c2goZm9yZWNhc3REaXYpO1xuICB9XG4gIHJldHVybiBmb3JlY2FzdExpc3Q7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlV2Vla2x5Rm9yZWNhc3Qod2VhdGhlckRhdGEpIHtcbiAgZ2V0VW5pdFR5cGUoKSA9PT0gXCJtZXRyaWNcIiA/IChkaXN0YW5jZVR5cGUgPSBcImttXCIpIDogKGRpc3RhbmNlVHlwZSA9IFwibWlcIik7XG5cbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2Vla2x5LWZvcmVjYXN0XCIpKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlZWtseS1mb3JlY2FzdFwiKSk7XG4gIH1cbiAgY29uc3Qgd2Vla2x5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd2Vla2x5RGl2LmNsYXNzTGlzdC5hZGQoXCJ3ZWVrbHktZm9yZWNhc3RcIik7XG4gIHdlZWtseURpdi5pZCA9IFwid2Vla2x5LWZvcmVjYXN0XCI7XG4gIHdlZWtseURpdi5pbm5lckhUTUwgPSBgXG4gIDxoZWFkZXIgY2xhc3M9XCJ3ZWVrbHktaGVhZGVyXCIgaWQ9XCJ3ZWVrbHktaGVhZGVyXCI+XG4gIDxwPl48L3A+XG4gIDxkaXY+OC1kYXkgZm9yZWNhc3Q6PC9kaXY+XG4gIDwvaGVhZGVyPmA7XG4gIGNyZWF0ZVdlZWtseUZvcmVjYXN0KHdlYXRoZXJEYXRhKS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgd2Vla2x5RGl2LmFwcGVuZENoaWxkKG5vZGUpO1xuICB9KTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh3ZWVrbHlEaXYpO1xufVxuXG5leHBvcnQgeyBwb3B1bGF0ZVdlZWtseUZvcmVjYXN0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==