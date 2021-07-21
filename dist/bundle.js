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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --blue: #051f38;\n    --white: #ffffff;\n    --dark: rgb(48, 47, 47);\n  }\n  html {\n    width: 100%;\n    height: 100%;\n    font-family: sans-serif;\n  }\n  body {\n    width: 100%;\n    height: 100%;\n    background-color: var(--blue);\n    display: grid;\n    grid-template-columns: repeat(12, 1fr);\n    grid-template-rows: repeat(15, 1fr);\n    color: ghostwhite;\n  \n  }\n  body div {\n  }\n  .main-weather {\n    position: fixed;\n    height: 85%;\n    width: 100%;\n    background-color: var(--dark);\n    grid-column: 1/13;\n    display: grid;\n    grid-template-columns: repeat(12, 1fr);\n    grid-template-rows: repeat(12, 1fr);\n    padding: 20px;\n    box-sizing: border-box;\n  }\n  form {\n    grid-column: 2/12;\n    grid-row: 1/2;\n    justify-content: center;\n    align-items: center;\n  }\n  form input {\n    width: 97%;\n    height: 70%;\n  }\n  .current-temp-data {\n    grid-row: 2/7;\n    grid-column: 1/6;\n    padding: 4%;\n  }\n  .main-highlow {\n    display: flex;\n    justify-content: space-around;\n    margin-top: 15px;\n  }\n  .current-temp {\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    font-size: 6em;\n    margin-top: 15px;\n    margin-bottom: 15px;\n  }\n  .c {\n    font-size: 0.5em;\n  }\n  .feels-like {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .main-conditions {\n    grid-row: 3/8;\n    grid-column: 8/13;\n  }\n  .main-conditions div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .main-icon {\n    margin-top: 30px;\n  }\n  .city-name {\n    grid-row: 7/9;\n    grid-column: 1/10;\n    font-size: 1.3em;\n    padding: 2%;\n    display: flex;\n    align-items: center;\n  }\n  .hourly-forecast {\n    grid-row: 9/13;\n    grid-column: 1/13;\n    display: flex;\n    overflow: scroll;\n    align-items: center;\n  }\n  .hour-info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    border: 1px solid black;\n    border-radius: 4px;\n    margin: 10px;\n    margin-top: 0;\n    margin-bottom: 0;\n    height: 96%;\n    min-width: 70px;\n  }\n  .small-icon {\n    width: 60px;\n    margin-top: -10px;\n    margin-bottom: -10px;\n  }\n  .hour-precip {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: 0.8em;\n  }\n  \n  /* *****************+ */\n  \n  .weekly-forecast {\n    margin-top: -3%;\n    z-index: 10;\n    grid-row: 14/16;\n    grid-column: 1/13;\n  }\n  #today-forecast{\n    margin-top: -3px;\n    border-top-left-radius: 15px;\n    border-top-right-radius: 15px;\n  }\n  .day-forecast {\n    border-top: 1px solid black;\n    margin-top: 0px;\n    background-color: rgba(17, 16, 16, 0.953);\n    backdrop-filter: blur(6px);\n    color: white;\n    padding: 10px;\n  }\n  \n  .day-overview {\n    display: flex;\n    justify-content: space-between;\n  }\n  .day-name {\n    font-size: 1.3em;\n  }\n  \n  .day-overview-right {\n    display: flex;\n    align-items: center;\n  }\n  .forecast-expand{\n    margin-left:20px;\n    padding-top: 20px;\n    font-size: 1.5em;\n    transform: rotate(180deg);\n  }\n  \n  .day-details li {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 6px;\n    padding-right: 10%;\n    padding-left: 10%;\n  }\n \n/****Hamburger Menu***/\n\n\nnav{\n  height: 100%;\n}\na {\n  text-decoration: none !important;\n  color: #232323;\n  transition: color 0.3s ease;\n}\n\na:hover {\n  color: #2ecc71;\n}\n\n#menuToggle {\n  height: 100%;\n  display: block;\n  position: fixed;\n  top: 27px;\n  right: 2.5%;\n  z-index: 1;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n#menuToggle input {\n  display: block;\n  width: 40px;\n  height: 32px;\n  position: absolute;\n  top: -7px;\n  left: -5px;\n  cursor: pointer;\n  opacity: 0;\n  z-index: 10;\n  -webkit-touch-callout: none;\n}\n\n#menuToggle span {\n  display: block;\n  width: 33px;\n  height: 4px;\n  margin-bottom: 5px;\n  position: relative;\n  background: #cdcdcd;\n  border-radius: 3px;\n  z-index: 5;\n  transform-origin: 4px 0px;\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),\n  background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),\n  opacity 0.55s ease;\n}\n\n#menuToggle span:first-child {\n  transform-origin: 0% 0%;\n}\n\n#menuToggle span:nth-last-child(2) {\n  transform-origin: 0% 100%;\n}\n\n#menuToggle input:checked~span {\n  opacity: 1;\n  transform: rotate(45deg) translate(-2px, -1px);\n  background: #232323;\n}\n\n#menuToggle input:checked~span:nth-last-child(3) {\n  opacity: 0;\n  transform: rotate(0deg) scale(0.2, 0.2);\n}\n\n#menuToggle input:checked~span:nth-last-child(2) {\n  opacity: 1;\n  transform: rotate(-45deg) translate(0, -1px);\n}\n\n#menu {\n  position: absolute;\n  width: 200px;\n  height: 100%;\n  margin: -100px 0 0 0;\n  padding: 50px;\n  padding-top: 125px;\n  right: -100px;\n  background: #ededed;\n  list-style-type: none;\n  -webkit-font-smoothing: antialiased;\n  transform-origin: 0% 0%;\n  transform: translate(100%, 0);\n\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);\n}\n\n#menu li {\n  padding: 10px 0;\n  font-size: 22px;\n}\n\n#menuToggle input:checked~ul {\n  transform: scale(1.0, 1.0);\n  opacity: 1;\n}\n\n\n\n  /**********C/F Slider**************/\n  /* The switch - the box around the slider */\n  .switch {\n    grid-column: 12/13;\n    grid-row: 1/2;\n    position: relative;\n    display: inline-block;\n    width: 30px;\n    height: 15px;\n  }\n  \n  /* Hide default HTML checkbox */\n  .switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n  \n  /* The slider */\n  .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n  }\n  \n  .slider:before {\n    position: absolute;\n    content: \"\";\n    height: 12px;\n    width: 12px;\n    top:1px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n  }\n  \n  input:checked + .slider {\n    background-color: #2196F3;\n  }\n  \n  input:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n  }\n  \n  input:checked + .slider:before {\n    -webkit-transform: translateX(10px);\n    -ms-transform: translateX(10px);\n    transform: translateX(10px);\n  }\n  \n  /* Rounded sliders */\n  .slider.round {\n    border-radius: 34px;\n  }\n  \n  .slider.round:before {\n    border-radius: 50%;\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,gBAAgB;IAChB,uBAAuB;EACzB;EACA;IACE,WAAW;IACX,YAAY;IACZ,uBAAuB;EACzB;EACA;IACE,WAAW;IACX,YAAY;IACZ,6BAA6B;IAC7B,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,iBAAiB;;EAEnB;EACA;EACA;EACA;IACE,eAAe;IACf,WAAW;IACX,WAAW;IACX,6BAA6B;IAC7B,iBAAiB;IACjB,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,aAAa;IACb,sBAAsB;EACxB;EACA;IACE,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;EACrB;EACA;IACE,UAAU;IACV,WAAW;EACb;EACA;IACE,aAAa;IACb,gBAAgB;IAChB,WAAW;EACb;EACA;IACE,aAAa;IACb,6BAA6B;IAC7B,gBAAgB;EAClB;EACA;IACE,aAAa;IACb,uBAAuB;IACvB,uBAAuB;IACvB,cAAc;IACd,gBAAgB;IAChB,mBAAmB;EACrB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;EACrB;EACA;IACE,aAAa;IACb,iBAAiB;EACnB;EACA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;EACzB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,aAAa;IACb,iBAAiB;IACjB,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,iBAAiB;IACjB,aAAa;IACb,gBAAgB;IAChB,mBAAmB;EACrB;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,WAAW;IACX,eAAe;EACjB;EACA;IACE,WAAW;IACX,iBAAiB;IACjB,oBAAoB;EACtB;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;EAClB;;EAEA,uBAAuB;;EAEvB;IACE,eAAe;IACf,WAAW;IACX,eAAe;IACf,iBAAiB;EACnB;EACA;IACE,gBAAgB;IAChB,4BAA4B;IAC5B,6BAA6B;EAC/B;EACA;IACE,2BAA2B;IAC3B,eAAe;IACf,yCAAyC;IACzC,0BAA0B;IAC1B,YAAY;IACZ,aAAa;EACf;;EAEA;IACE,aAAa;IACb,8BAA8B;EAChC;EACA;IACE,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,mBAAmB;EACrB;EACA;IACE,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,yBAAyB;EAC3B;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,eAAe;IACf,kBAAkB;IAClB,iBAAiB;EACnB;;AAEF,sBAAsB;;;AAGtB;EACE,YAAY;AACd;AACA;EACE,gCAAgC;EAChC,cAAc;EACd,2BAA2B;AAC7B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,eAAe;EACf,SAAS;EACT,WAAW;EACX,UAAU;EACV,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,eAAe;EACf,UAAU;EACV,WAAW;EACX,2BAA2B;AAC7B;;AAEA;EACE,cAAc;EACd,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,UAAU;EACV,yBAAyB;EACzB;;oBAEkB;AACpB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,UAAU;EACV,8CAA8C;EAC9C,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,uCAAuC;AACzC;;AAEA;EACE,UAAU;EACV,4CAA4C;AAC9C;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,oBAAoB;EACpB,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,mCAAmC;EACnC,uBAAuB;EACvB,6BAA6B;;EAE7B,6DAA6D;AAC/D;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,0BAA0B;EAC1B,UAAU;AACZ;;;;EAIE,mCAAmC;EACnC,2CAA2C;EAC3C;IACE,kBAAkB;IAClB,aAAa;IACb,kBAAkB;IAClB,qBAAqB;IACrB,WAAW;IACX,YAAY;EACd;;EAEA,+BAA+B;EAC/B;IACE,UAAU;IACV,QAAQ;IACR,SAAS;EACX;;EAEA,eAAe;EACf;IACE,kBAAkB;IAClB,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,sBAAsB;IACtB,uBAAuB;IACvB,eAAe;EACjB;;EAEA;IACE,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,OAAO;IACP,SAAS;IACT,WAAW;IACX,uBAAuB;IACvB,uBAAuB;IACvB,eAAe;EACjB;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,2BAA2B;EAC7B;;EAEA;IACE,mCAAmC;IACnC,+BAA+B;IAC/B,2BAA2B;EAC7B;;EAEA,oBAAoB;EACpB;IACE,mBAAmB;EACrB;;EAEA;IACE,kBAAkB;EACpB","sourcesContent":[":root {\n    --blue: #051f38;\n    --white: #ffffff;\n    --dark: rgb(48, 47, 47);\n  }\n  html {\n    width: 100%;\n    height: 100%;\n    font-family: sans-serif;\n  }\n  body {\n    width: 100%;\n    height: 100%;\n    background-color: var(--blue);\n    display: grid;\n    grid-template-columns: repeat(12, 1fr);\n    grid-template-rows: repeat(15, 1fr);\n    color: ghostwhite;\n  \n  }\n  body div {\n  }\n  .main-weather {\n    position: fixed;\n    height: 85%;\n    width: 100%;\n    background-color: var(--dark);\n    grid-column: 1/13;\n    display: grid;\n    grid-template-columns: repeat(12, 1fr);\n    grid-template-rows: repeat(12, 1fr);\n    padding: 20px;\n    box-sizing: border-box;\n  }\n  form {\n    grid-column: 2/12;\n    grid-row: 1/2;\n    justify-content: center;\n    align-items: center;\n  }\n  form input {\n    width: 97%;\n    height: 70%;\n  }\n  .current-temp-data {\n    grid-row: 2/7;\n    grid-column: 1/6;\n    padding: 4%;\n  }\n  .main-highlow {\n    display: flex;\n    justify-content: space-around;\n    margin-top: 15px;\n  }\n  .current-temp {\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    font-size: 6em;\n    margin-top: 15px;\n    margin-bottom: 15px;\n  }\n  .c {\n    font-size: 0.5em;\n  }\n  .feels-like {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .main-conditions {\n    grid-row: 3/8;\n    grid-column: 8/13;\n  }\n  .main-conditions div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .main-icon {\n    margin-top: 30px;\n  }\n  .city-name {\n    grid-row: 7/9;\n    grid-column: 1/10;\n    font-size: 1.3em;\n    padding: 2%;\n    display: flex;\n    align-items: center;\n  }\n  .hourly-forecast {\n    grid-row: 9/13;\n    grid-column: 1/13;\n    display: flex;\n    overflow: scroll;\n    align-items: center;\n  }\n  .hour-info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    border: 1px solid black;\n    border-radius: 4px;\n    margin: 10px;\n    margin-top: 0;\n    margin-bottom: 0;\n    height: 96%;\n    min-width: 70px;\n  }\n  .small-icon {\n    width: 60px;\n    margin-top: -10px;\n    margin-bottom: -10px;\n  }\n  .hour-precip {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: 0.8em;\n  }\n  \n  /* *****************+ */\n  \n  .weekly-forecast {\n    margin-top: -3%;\n    z-index: 10;\n    grid-row: 14/16;\n    grid-column: 1/13;\n  }\n  #today-forecast{\n    margin-top: -3px;\n    border-top-left-radius: 15px;\n    border-top-right-radius: 15px;\n  }\n  .day-forecast {\n    border-top: 1px solid black;\n    margin-top: 0px;\n    background-color: rgba(17, 16, 16, 0.953);\n    backdrop-filter: blur(6px);\n    color: white;\n    padding: 10px;\n  }\n  \n  .day-overview {\n    display: flex;\n    justify-content: space-between;\n  }\n  .day-name {\n    font-size: 1.3em;\n  }\n  \n  .day-overview-right {\n    display: flex;\n    align-items: center;\n  }\n  .forecast-expand{\n    margin-left:20px;\n    padding-top: 20px;\n    font-size: 1.5em;\n    transform: rotate(180deg);\n  }\n  \n  .day-details li {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 6px;\n    padding-right: 10%;\n    padding-left: 10%;\n  }\n \n/****Hamburger Menu***/\n\n\nnav{\n  height: 100%;\n}\na {\n  text-decoration: none !important;\n  color: #232323;\n  transition: color 0.3s ease;\n}\n\na:hover {\n  color: #2ecc71;\n}\n\n#menuToggle {\n  height: 100%;\n  display: block;\n  position: fixed;\n  top: 27px;\n  right: 2.5%;\n  z-index: 1;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n#menuToggle input {\n  display: block;\n  width: 40px;\n  height: 32px;\n  position: absolute;\n  top: -7px;\n  left: -5px;\n  cursor: pointer;\n  opacity: 0;\n  z-index: 10;\n  -webkit-touch-callout: none;\n}\n\n#menuToggle span {\n  display: block;\n  width: 33px;\n  height: 4px;\n  margin-bottom: 5px;\n  position: relative;\n  background: #cdcdcd;\n  border-radius: 3px;\n  z-index: 5;\n  transform-origin: 4px 0px;\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),\n  background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),\n  opacity 0.55s ease;\n}\n\n#menuToggle span:first-child {\n  transform-origin: 0% 0%;\n}\n\n#menuToggle span:nth-last-child(2) {\n  transform-origin: 0% 100%;\n}\n\n#menuToggle input:checked~span {\n  opacity: 1;\n  transform: rotate(45deg) translate(-2px, -1px);\n  background: #232323;\n}\n\n#menuToggle input:checked~span:nth-last-child(3) {\n  opacity: 0;\n  transform: rotate(0deg) scale(0.2, 0.2);\n}\n\n#menuToggle input:checked~span:nth-last-child(2) {\n  opacity: 1;\n  transform: rotate(-45deg) translate(0, -1px);\n}\n\n#menu {\n  position: absolute;\n  width: 200px;\n  height: 100%;\n  margin: -100px 0 0 0;\n  padding: 50px;\n  padding-top: 125px;\n  right: -100px;\n  background: #ededed;\n  list-style-type: none;\n  -webkit-font-smoothing: antialiased;\n  transform-origin: 0% 0%;\n  transform: translate(100%, 0);\n\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);\n}\n\n#menu li {\n  padding: 10px 0;\n  font-size: 22px;\n}\n\n#menuToggle input:checked~ul {\n  transform: scale(1.0, 1.0);\n  opacity: 1;\n}\n\n\n\n  /**********C/F Slider**************/\n  /* The switch - the box around the slider */\n  .switch {\n    grid-column: 12/13;\n    grid-row: 1/2;\n    position: relative;\n    display: inline-block;\n    width: 30px;\n    height: 15px;\n  }\n  \n  /* Hide default HTML checkbox */\n  .switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n  \n  /* The slider */\n  .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n  }\n  \n  .slider:before {\n    position: absolute;\n    content: \"\";\n    height: 12px;\n    width: 12px;\n    top:1px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n  }\n  \n  input:checked + .slider {\n    background-color: #2196F3;\n  }\n  \n  input:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n  }\n  \n  input:checked + .slider:before {\n    -webkit-transform: translateX(10px);\n    -ms-transform: translateX(10px);\n    transform: translateX(10px);\n  }\n  \n  /* Rounded sliders */\n  .slider.round {\n    border-radius: 34px;\n  }\n  \n  .slider.round:before {\n    border-radius: 50%;\n  }"],"sourceRoot":""}]);
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
/* harmony export */   "getWeather": () => (/* binding */ getWeather)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./src/nav.js");



// contains scripts for communicating with APIs and formating data.


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






const searchForm = document.getElementById("search-form");
const searchBar = document.getElementById("search-bar");
const main = document.getElementById("main-weather");
main.appendChild((0,_nav__WEBPACK_IMPORTED_MODULE_4__.navMenu)());
console.log((0,_nav__WEBPACK_IMPORTED_MODULE_4__.getDegrees)());


async function populateAllWeatherData() {
  const geocodeData = await (0,_forecast__WEBPACK_IMPORTED_MODULE_1__.geocode)(searchBar.value);
  const weatherData = await (0,_forecast__WEBPACK_IMPORTED_MODULE_1__.getWeather)(
    Math.floor(geocodeData.latitude * 100) / 100,
    Math.floor(geocodeData.longitude * 100) / 100
  );
  console.log(geocodeData);
  console.log(weatherData);
  (0,_main_weather__WEBPACK_IMPORTED_MODULE_2__.populateMain)(weatherData, geocodeData);
  (0,_weekly_forecast__WEBPACK_IMPORTED_MODULE_3__.populateWeeklyForecast)(weatherData);
}

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  populateAllWeatherData()
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



let degreeType


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
    ${Math.floor(weatherData.current.temp / 1)}<span class="c" id="c">°${degreeType}</span>
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
  const hourlyContainer = document.getElementById("hourly-forecast");
  (0,___WEBPACK_IMPORTED_MODULE_0__.removeChildren)(hourlyContainer);
  for (let i = 0; i < 24; i++) {
    hourlyContainer.appendChild(newHourInfo(weatherData.hourly[i]));
  }
}
function populateMain(weatherData, geocodeData) {
  ((0,_nav__WEBPACK_IMPORTED_MODULE_1__.getUnitType)()==="metric")? degreeType = "C": degreeType = "F"
  
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

  mainWeather.appendChild(currentTemp(weatherData));
  mainWeather.appendChild(currentConditions(weatherData));
  mainWeather.appendChild(placeName(geocodeData));
  populateHourly(weatherData);
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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");




let unitType = "metric";

const changeUnits = (e) => {
  e.preventDefault();
  if (e.target.id === "c") unitType = "metric";
  else unitType = "imperial";
  (0,___WEBPACK_IMPORTED_MODULE_0__.populateAllWeatherData)()

};

function navMenu() {
  const nav = document.createElement("nav");
  nav.role = "navigation";
  const menuToggle = document.createElement("div");
  menuToggle.id = "menuToggle";
  nav.appendChild(menuToggle);
  menuToggle.innerHTML = `
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    `;
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



let distanceType

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
  ((0,_nav__WEBPACK_IMPORTED_MODULE_1__.getUnitType)()==="metric")? distanceType = "km": distanceType = "mi"
  
  if (document.getElementById("weekly-forecast")) {
    document.body.removeChild(document.getElementById("weekly-forecast"));
  }
  const weeklyDiv = document.createElement("div");
  weeklyDiv.classList.add("weekly-forecast");
  weeklyDiv.id = "weekly-forecast";
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrMS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjazEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazEvLi9ub2RlX21vZHVsZXMvZGVncmVlcy10by1kaXJlY3Rpb24vbGliLmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2sxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazEvLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vc3JjL2ZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vc3JjL21haW4td2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrMS8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazEvLi9zcmMvd2Vla2x5LWZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYnBhY2sxL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2sxL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2sxL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrMS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2sxL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjazEvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxpREFBaUQsc0JBQXNCLHVCQUF1Qiw4QkFBOEIsS0FBSyxVQUFVLGtCQUFrQixtQkFBbUIsOEJBQThCLEtBQUssVUFBVSxrQkFBa0IsbUJBQW1CLG9DQUFvQyxvQkFBb0IsNkNBQTZDLDBDQUEwQyx3QkFBd0IsU0FBUyxjQUFjLEtBQUssbUJBQW1CLHNCQUFzQixrQkFBa0Isa0JBQWtCLG9DQUFvQyx3QkFBd0Isb0JBQW9CLDZDQUE2QywwQ0FBMEMsb0JBQW9CLDZCQUE2QixLQUFLLFVBQVUsd0JBQXdCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEtBQUssZ0JBQWdCLGlCQUFpQixrQkFBa0IsS0FBSyx3QkFBd0Isb0JBQW9CLHVCQUF1QixrQkFBa0IsS0FBSyxtQkFBbUIsb0JBQW9CLG9DQUFvQyx1QkFBdUIsS0FBSyxtQkFBbUIsb0JBQW9CLDhCQUE4Qiw4QkFBOEIscUJBQXFCLHVCQUF1QiwwQkFBMEIsS0FBSyxRQUFRLHVCQUF1QixLQUFLLGlCQUFpQixvQkFBb0IsOEJBQThCLDBCQUEwQixLQUFLLHNCQUFzQixvQkFBb0Isd0JBQXdCLEtBQUssMEJBQTBCLG9CQUFvQiwwQkFBMEIs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WSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxjQUFjLE1BQU0sVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxPQUFPLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFB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ZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRWtDOzs7Ozs7O1VDcEZsQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1ibHVlOiAjMDUxZjM4O1xcbiAgICAtLXdoaXRlOiAjZmZmZmZmO1xcbiAgICAtLWRhcms6IHJnYig0OCwgNDcsIDQ3KTtcXG4gIH1cXG4gIGh0bWwge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIH1cXG4gIGJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDE1LCAxZnIpO1xcbiAgICBjb2xvcjogZ2hvc3R3aGl0ZTtcXG4gIFxcbiAgfVxcbiAgYm9keSBkaXYge1xcbiAgfVxcbiAgLm1haW4td2VhdGhlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgaGVpZ2h0OiA4NSU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMTM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMiwgMWZyKTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIH1cXG4gIGZvcm0ge1xcbiAgICBncmlkLWNvbHVtbjogMi8xMjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICBmb3JtIGlucHV0IHtcXG4gICAgd2lkdGg6IDk3JTtcXG4gICAgaGVpZ2h0OiA3MCU7XFxuICB9XFxuICAuY3VycmVudC10ZW1wLWRhdGEge1xcbiAgICBncmlkLXJvdzogMi83O1xcbiAgICBncmlkLWNvbHVtbjogMS82O1xcbiAgICBwYWRkaW5nOiA0JTtcXG4gIH1cXG4gIC5tYWluLWhpZ2hsb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gIH1cXG4gIC5jdXJyZW50LXRlbXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGZvbnQtc2l6ZTogNmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgfVxcbiAgLmMge1xcbiAgICBmb250LXNpemU6IDAuNWVtO1xcbiAgfVxcbiAgLmZlZWxzLWxpa2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIC5tYWluLWNvbmRpdGlvbnMge1xcbiAgICBncmlkLXJvdzogMy84O1xcbiAgICBncmlkLWNvbHVtbjogOC8xMztcXG4gIH1cXG4gIC5tYWluLWNvbmRpdGlvbnMgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuICAubWFpbi1pY29uIHtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gIH1cXG4gIC5jaXR5LW5hbWUge1xcbiAgICBncmlkLXJvdzogNy85O1xcbiAgICBncmlkLWNvbHVtbjogMS8xMDtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAuaG91cmx5LWZvcmVjYXN0IHtcXG4gICAgZ3JpZC1yb3c6IDkvMTM7XFxuICAgIGdyaWQtY29sdW1uOiAxLzEzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLmhvdXItaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIGhlaWdodDogOTYlO1xcbiAgICBtaW4td2lkdGg6IDcwcHg7XFxuICB9XFxuICAuc21hbGwtaWNvbiB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XFxuICB9XFxuICAuaG91ci1wcmVjaXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXG4gIH1cXG4gIFxcbiAgLyogKioqKioqKioqKioqKioqKiorICovXFxuICBcXG4gIC53ZWVrbHktZm9yZWNhc3Qge1xcbiAgICBtYXJnaW4tdG9wOiAtMyU7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBncmlkLXJvdzogMTQvMTY7XFxuICAgIGdyaWQtY29sdW1uOiAxLzEzO1xcbiAgfVxcbiAgI3RvZGF5LWZvcmVjYXN0e1xcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcXG4gIH1cXG4gIC5kYXktZm9yZWNhc3Qge1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxuICAgIG1hcmdpbi10b3A6IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNywgMTYsIDE2LCAwLjk1Myk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig2cHgpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuICBcXG4gIC5kYXktb3ZlcnZpZXcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuICAuZGF5LW5hbWUge1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgfVxcbiAgXFxuICAuZGF5LW92ZXJ2aWV3LXJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIC5mb3JlY2FzdC1leHBhbmR7XFxuICAgIG1hcmdpbi1sZWZ0OjIwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgfVxcbiAgXFxuICAuZGF5LWRldGFpbHMgbGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi10b3A6IDZweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG4gIH1cXG4gXFxuLyoqKipIYW1idXJnZXIgTWVudSoqKi9cXG5cXG5cXG5uYXZ7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogIzIzMjMyMztcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXG59XFxuXFxuYTpob3ZlciB7XFxuICBjb2xvcjogIzJlY2M3MTtcXG59XFxuXFxuI21lbnVUb2dnbGUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDI3cHg7XFxuICByaWdodDogMi41JTtcXG4gIHotaW5kZXg6IDE7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbiNtZW51VG9nZ2xlIGlucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC03cHg7XFxuICBsZWZ0OiAtNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcbn1cXG5cXG4jbWVudVRvZ2dsZSBzcGFuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDMzcHg7XFxuICBoZWlnaHQ6IDRweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6ICNjZGNkY2Q7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICB6LWluZGV4OiA1O1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogNHB4IDBweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjc3LCAwLjIsIDAuMDUsIDEuMCksXFxuICBiYWNrZ3JvdW5kIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAuMiwgMC4wNSwgMS4wKSxcXG4gIG9wYWNpdHkgMC41NXMgZWFzZTtcXG59XFxuXFxuI21lbnVUb2dnbGUgc3BhbjpmaXJzdC1jaGlsZCB7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcXG59XFxuXFxuI21lbnVUb2dnbGUgc3BhbjpudGgtbGFzdC1jaGlsZCgyKSB7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xcbn1cXG5cXG4jbWVudVRvZ2dsZSBpbnB1dDpjaGVja2VkfnNwYW4ge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLTJweCwgLTFweCk7XFxuICBiYWNrZ3JvdW5kOiAjMjMyMzIzO1xcbn1cXG5cXG4jbWVudVRvZ2dsZSBpbnB1dDpjaGVja2VkfnNwYW46bnRoLWxhc3QtY2hpbGQoMykge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDAuMiwgMC4yKTtcXG59XFxuXFxuI21lbnVUb2dnbGUgaW5wdXQ6Y2hlY2tlZH5zcGFuOm50aC1sYXN0LWNoaWxkKDIpIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgwLCAtMXB4KTtcXG59XFxuXFxuI21lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAtMTAwcHggMCAwIDA7XFxuICBwYWRkaW5nOiA1MHB4O1xcbiAgcGFkZGluZy10b3A6IDEyNXB4O1xcbiAgcmlnaHQ6IC0xMDBweDtcXG4gIGJhY2tncm91bmQ6ICNlZGVkZWQ7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgMCk7XFxuXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC43NywgMC4yLCAwLjA1LCAxLjApO1xcbn1cXG5cXG4jbWVudSBsaSB7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbiNtZW51VG9nZ2xlIGlucHV0OmNoZWNrZWR+dWwge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAsIDEuMCk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5cXG5cXG4gIC8qKioqKioqKioqQy9GIFNsaWRlcioqKioqKioqKioqKioqL1xcbiAgLyogVGhlIHN3aXRjaCAtIHRoZSBib3ggYXJvdW5kIHRoZSBzbGlkZXIgKi9cXG4gIC5zd2l0Y2gge1xcbiAgICBncmlkLWNvbHVtbjogMTIvMTM7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgfVxcbiAgXFxuICAvKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xcbiAgLnN3aXRjaCBpbnB1dCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICB9XFxuICBcXG4gIC8qIFRoZSBzbGlkZXIgKi9cXG4gIC5zbGlkZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbiAgfVxcbiAgXFxuICAuc2xpZGVyOmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGhlaWdodDogMTJweDtcXG4gICAgd2lkdGg6IDEycHg7XFxuICAgIHRvcDoxcHg7XFxuICAgIGxlZnQ6IDRweDtcXG4gICAgYm90dG9tOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbiAgfVxcbiAgXFxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XFxuICB9XFxuICBcXG4gIGlucHV0OmZvY3VzICsgLnNsaWRlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcXG4gIH1cXG4gIFxcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcXG4gIH1cXG4gIFxcbiAgLyogUm91bmRlZCBzbGlkZXJzICovXFxuICAuc2xpZGVyLnJvdW5kIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcXG4gIH1cXG4gIFxcbiAgLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQ0FBbUM7SUFDbkMsaUJBQWlCOztFQUVuQjtFQUNBO0VBQ0E7RUFDQTtJQUNFLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztJ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QUFvQjtFQUNwQjtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tYmx1ZTogIzA1MWYzODtcXG4gICAgLS13aGl0ZTogI2ZmZmZmZjtcXG4gICAgLS1kYXJrOiByZ2IoNDgsIDQ3LCA0Nyk7XFxuICB9XFxuICBodG1sIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICB9XFxuICBib2R5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxNSwgMWZyKTtcXG4gICAgY29sb3I6IGdob3N0d2hpdGU7XFxuICBcXG4gIH1cXG4gIGJvZHkgZGl2IHtcXG4gIH1cXG4gIC5tYWluLXdlYXRoZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGhlaWdodDogODUlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIGdyaWQtY29sdW1uOiAxLzEzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTIsIDFmcik7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuICBmb3JtIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMTI7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgZm9ybSBpbnB1dCB7XFxuICAgIHdpZHRoOiA5NyU7XFxuICAgIGhlaWdodDogNzAlO1xcbiAgfVxcbiAgLmN1cnJlbnQtdGVtcC1kYXRhIHtcXG4gICAgZ3JpZC1yb3c6IDIvNztcXG4gICAgZ3JpZC1jb2x1bW46IDEvNjtcXG4gICAgcGFkZGluZzogNCU7XFxuICB9XFxuICAubWFpbi1oaWdobG93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICB9XFxuICAuY3VycmVudC10ZW1wIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBmb250LXNpemU6IDZlbTtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIH1cXG4gIC5jIHtcXG4gICAgZm9udC1zaXplOiAwLjVlbTtcXG4gIH1cXG4gIC5mZWVscy1saWtlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAubWFpbi1jb25kaXRpb25zIHtcXG4gICAgZ3JpZC1yb3c6IDMvODtcXG4gICAgZ3JpZC1jb2x1bW46IDgvMTM7XFxuICB9XFxuICAubWFpbi1jb25kaXRpb25zIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbiAgLm1haW4taWNvbiB7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICB9XFxuICAuY2l0eS1uYW1lIHtcXG4gICAgZ3JpZC1yb3c6IDcvOTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMTA7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLmhvdXJseS1mb3JlY2FzdCB7XFxuICAgIGdyaWQtcm93OiA5LzEzO1xcbiAgICBncmlkLWNvbHVtbjogMS8xMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIC5ob3VyLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICBoZWlnaHQ6IDk2JTtcXG4gICAgbWluLXdpZHRoOiA3MHB4O1xcbiAgfVxcbiAgLnNtYWxsLWljb24ge1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xcbiAgfVxcbiAgLmhvdXItcHJlY2lwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxuICB9XFxuICBcXG4gIC8qICoqKioqKioqKioqKioqKioqKyAqL1xcbiAgXFxuICAud2Vla2x5LWZvcmVjYXN0IHtcXG4gICAgbWFyZ2luLXRvcDogLTMlO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgZ3JpZC1yb3c6IDE0LzE2O1xcbiAgICBncmlkLWNvbHVtbjogMS8xMztcXG4gIH1cXG4gICN0b2RheS1mb3JlY2FzdHtcXG4gICAgbWFyZ2luLXRvcDogLTNweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XFxuICB9XFxuICAuZGF5LWZvcmVjYXN0IHtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcsIDE2LCAxNiwgMC45NTMpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNnB4KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgfVxcbiAgXFxuICAuZGF5LW92ZXJ2aWV3IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcbiAgLmRheS1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG4gIH1cXG4gIFxcbiAgLmRheS1vdmVydmlldy1yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAuZm9yZWNhc3QtZXhwYW5ke1xcbiAgICBtYXJnaW4tbGVmdDoyMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gIH1cXG4gIFxcbiAgLmRheS1kZXRhaWxzIGxpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tdG9wOiA2cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxuICB9XFxuIFxcbi8qKioqSGFtYnVyZ2VyIE1lbnUqKiovXFxuXFxuXFxubmF2e1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbiAgY29sb3I6ICMyMzIzMjM7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgY29sb3I6ICMyZWNjNzE7XFxufVxcblxcbiNtZW51VG9nZ2xlIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAyN3B4O1xcbiAgcmlnaHQ6IDIuNSU7XFxuICB6LWluZGV4OiAxO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jbWVudVRvZ2dsZSBpbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtN3B4O1xcbiAgbGVmdDogLTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDA7XFxuICB6LWluZGV4OiAxMDtcXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG59XFxuXFxuI21lbnVUb2dnbGUgc3BhbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAzM3B4O1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiAjY2RjZGNkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgei1pbmRleDogNTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDRweCAwcHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC43NywgMC4yLCAwLjA1LCAxLjApLFxcbiAgYmFja2dyb3VuZCAwLjVzIGN1YmljLWJlemllcigwLjc3LCAwLjIsIDAuMDUsIDEuMCksXFxuICBvcGFjaXR5IDAuNTVzIGVhc2U7XFxufVxcblxcbiNtZW51VG9nZ2xlIHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxufVxcblxcbiNtZW51VG9nZ2xlIHNwYW46bnRoLWxhc3QtY2hpbGQoMikge1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcXG59XFxuXFxuI21lbnVUb2dnbGUgaW5wdXQ6Y2hlY2tlZH5zcGFuIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC0ycHgsIC0xcHgpO1xcbiAgYmFja2dyb3VuZDogIzIzMjMyMztcXG59XFxuXFxuI21lbnVUb2dnbGUgaW5wdXQ6Y2hlY2tlZH5zcGFuOm50aC1sYXN0LWNoaWxkKDMpIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgwLjIsIDAuMik7XFxufVxcblxcbiNtZW51VG9nZ2xlIGlucHV0OmNoZWNrZWR+c3BhbjpudGgtbGFzdC1jaGlsZCgyKSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoMCwgLTFweCk7XFxufVxcblxcbiNtZW51IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogLTEwMHB4IDAgMCAwO1xcbiAgcGFkZGluZzogNTBweDtcXG4gIHBhZGRpbmctdG9wOiAxMjVweDtcXG4gIHJpZ2h0OiAtMTAwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsIDApO1xcblxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAuMiwgMC4wNSwgMS4wKTtcXG59XFxuXFxuI21lbnUgbGkge1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4jbWVudVRvZ2dsZSBpbnB1dDpjaGVja2VkfnVsIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wLCAxLjApO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuXFxuXFxuICAvKioqKioqKioqKkMvRiBTbGlkZXIqKioqKioqKioqKioqKi9cXG4gIC8qIFRoZSBzd2l0Y2ggLSB0aGUgYm94IGFyb3VuZCB0aGUgc2xpZGVyICovXFxuICAuc3dpdGNoIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEyLzEzO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gIH1cXG4gIFxcbiAgLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cXG4gIC5zd2l0Y2ggaW5wdXQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgfVxcbiAgXFxuICAvKiBUaGUgc2xpZGVyICovXFxuICAuc2xpZGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG4gIH1cXG4gIFxcbiAgLnNsaWRlcjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBoZWlnaHQ6IDEycHg7XFxuICAgIHdpZHRoOiAxMnB4O1xcbiAgICB0b3A6MXB4O1xcbiAgICBsZWZ0OiA0cHg7XFxuICAgIGJvdHRvbTogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG4gIH1cXG4gIFxcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xcbiAgfVxcbiAgXFxuICBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XFxuICB9XFxuICBcXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XFxuICB9XFxuICBcXG4gIC8qIFJvdW5kZWQgc2xpZGVycyAqL1xcbiAgLnNsaWRlci5yb3VuZCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxuICB9XFxuICBcXG4gIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZCkge1xuICBpZiAodHlwZW9mIGQgIT09ICdudW1iZXInIHx8IGlzTmFOKGQpKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgLy8ga2VlcCB3aXRoaW4gdGhlIHJhbmdlOiAwIDw9IGQgPCAzNjBcbiAgZCA9IGQgJSAzNjA7XG5cbiAgaWYgKDExLjI1IDw9IGQgJiYgZCA8IDMzLjc1KSB7XG4gICAgcmV0dXJuIFwiTk5FXCI7XG4gIH0gZWxzZSBpZiAoMzMuNzUgPD0gZCAmJiBkIDwgNTYuMjUpIHtcbiAgICByZXR1cm4gXCJORVwiO1xuICB9IGVsc2UgaWYgKDU2LjI1IDw9IGQgJiYgZCA8IDc4Ljc1KSB7XG4gICAgcmV0dXJuIFwiRU5FXCI7XG4gIH0gZWxzZSBpZiAoNzguNzUgPD0gZCAmJiBkIDwgMTAxLjI1KSB7XG4gICAgcmV0dXJuIFwiRVwiO1xuICB9IGVsc2UgaWYgKDEwMS4yNSA8PSBkICYmIGQgPCAxMjMuNzUpIHtcbiAgICByZXR1cm4gXCJFU0VcIjtcbiAgfSBlbHNlIGlmICgxMjMuNzUgPD0gZCAmJiBkIDwgMTQ2LjI1KSB7XG4gICAgcmV0dXJuIFwiU0VcIjtcbiAgfSBlbHNlIGlmICgxNDYuMjUgPD0gZCAmJiBkIDwgMTY4Ljc1KSB7XG4gICAgcmV0dXJuIFwiU1NFXCI7XG4gIH0gZWxzZSBpZiAoMTY4Ljc1IDw9IGQgJiYgZCA8IDE5MS4yNSkge1xuICAgIHJldHVybiBcIlNcIjtcbiAgfSBlbHNlIGlmICgxOTEuMjUgPD0gZCAmJiBkIDwgMjEzLjc1KSB7XG4gICAgcmV0dXJuIFwiU1NXXCI7XG4gIH0gZWxzZSBpZiAoMjEzLjc1IDw9IGQgJiYgZCA8IDIzNi4yNSkge1xuICAgIHJldHVybiBcIlNXXCI7XG4gIH0gZWxzZSBpZiAoMjM2LjI1IDw9IGQgJiYgZCA8IDI1OC43NSkge1xuICAgIHJldHVybiBcIldTV1wiO1xuICB9IGVsc2UgaWYgKDI1OC43NSA8PSBkICYmIGQgPCAyODEuMjUpIHtcbiAgICByZXR1cm4gXCJXXCI7XG4gIH0gZWxzZSBpZiAoMjgxLjI1IDw9IGQgJiYgZCA8IDMwMy43NSkge1xuICAgIHJldHVybiBcIldOV1wiO1xuICB9IGVsc2UgaWYgKDMwMy43NSA8PSBkICYmIGQgPCAzMjYuMjUpIHtcbiAgICByZXR1cm4gXCJOV1wiO1xuICB9IGVsc2UgaWYgKDMyNi4yNSA8PSBkICYmIGQgPCAzNDguNzUpIHtcbiAgICByZXR1cm4gXCJOTldcIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJOXCI7XG4gIH1cbn07XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGdldFRhcmdldCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBmdW5jdGlvbihjc3MsIHN0eWxlKXtcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9O1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgdmFyIG5vbmNlID1cbiAgICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihzdHlsZSl7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChcImhlYWRcIik7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9O1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFyZ2V0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJjb25zdCB3ZWF0aGVyQVBJID1cIjk0MDU2MmJlZDRlYThlYjg5ZGRjMGNjOGUzYWFjMmI0XCJcbmNvbnN0IHBsYWNlc0FQSSA9IFwiQUl6YVN5RDJXbUMwMkZKUmg0N1VsWDNWR3lCcExGS3o2TXgtcUN3XCJcbmNvbnN0IGdlb2NvZGluZ0FQSSA9IFwiZmNmMjA3ZDU4NjQxNmRiNTgwMjgyNDgwNzY4YTY0ZTZcIlxuXG5leHBvcnR7d2VhdGhlckFQSSwgZ2VvY29kaW5nQVBJfSIsImltcG9ydCB7IHdlYXRoZXJBUEksIGdlb2NvZGluZ0FQSSB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgZ2V0VW5pdFR5cGUgfSBmcm9tIFwiLi9uYXZcIjtcblxuLy8gY29udGFpbnMgc2NyaXB0cyBmb3IgY29tbXVuaWNhdGluZyB3aXRoIEFQSXMgYW5kIGZvcm1hdGluZyBkYXRhLlxuXG5cbmNvbnN0IGdlb2NvZGUgPSBhc3luYyAoc2VhcmNoVGV4dCkgPT4ge1xuICAvL3JldHVybnMgYW4gb2JqZWN0IHdpdGggbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBpbmZvcm1hdGlvbiBmcm9tIHNlYXJjaCB0ZXh0XG4gIGNvbnN0IFVSTCA9IGBodHRwOi8vYXBpLnBvc2l0aW9uc3RhY2suY29tL3YxL2ZvcndhcmQ/YWNjZXNzX2tleT0ke2dlb2NvZGluZ0FQSX0mcXVlcnk9JHtzZWFyY2hUZXh0fWA7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMKTtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG4gIH1cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuZGF0YS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1iYXJcIilcbiAgICAgICAgLnZhbHVlLnNwbGl0KFwiLFwiKVswXVxuICAgICAgICAudG9Mb3dlckNhc2UoKSA9PT0gZGF0YS5kYXRhW2ldLm5hbWUudG9Mb3dlckNhc2UoKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGEuZGF0YVtpXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRhdGEuZGF0YVswXTtcbn07XG5cbmNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAobGF0LCBsb24pID0+IHtcbiAgLy91c2VzIHRoZSBvbmUgY2FsbCBhcGkgZnJvbSBvcGVud2VhdGhlcm1hcC5vcmcgdG8gZ2V0IGRldGFpbGVkIHdlYXRoZXIgaW5mb3JtYXRpb24gZm9yIGEgbG9jYXRpb24gZnJvbSBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZ1bml0cz0ke2dldFVuaXRUeXBlKCl9JmV4Y2x1ZGU9bWludXRlbHkmYXBwaWQ9JHt3ZWF0aGVyQVBJfWBcbiAgKTtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG4gIH1cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5cbmV4cG9ydCB7IGdlb2NvZGUsIGdldFdlYXRoZXJ9O1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGdlb2NvZGUsIGdldFdlYXRoZXIgfSBmcm9tIFwiLi9mb3JlY2FzdFwiO1xuaW1wb3J0IHsgcG9wdWxhdGVNYWluIH0gZnJvbSBcIi4vbWFpbi13ZWF0aGVyXCI7XG5pbXBvcnQgeyBwb3B1bGF0ZVdlZWtseUZvcmVjYXN0IH0gZnJvbSBcIi4vd2Vla2x5LWZvcmVjYXN0XCI7XG5pbXBvcnQgeyBuYXZNZW51LCBnZXREZWdyZWVzIH0gZnJvbSBcIi4vbmF2XCI7XG5cbmNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1mb3JtXCIpO1xuY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtYmFyXCIpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi13ZWF0aGVyXCIpO1xubWFpbi5hcHBlbmRDaGlsZChuYXZNZW51KCkpO1xuY29uc29sZS5sb2coZ2V0RGVncmVlcygpKTtcblxuXG5hc3luYyBmdW5jdGlvbiBwb3B1bGF0ZUFsbFdlYXRoZXJEYXRhKCkge1xuICBjb25zdCBnZW9jb2RlRGF0YSA9IGF3YWl0IGdlb2NvZGUoc2VhcmNoQmFyLnZhbHVlKTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKFxuICAgIE1hdGguZmxvb3IoZ2VvY29kZURhdGEubGF0aXR1ZGUgKiAxMDApIC8gMTAwLFxuICAgIE1hdGguZmxvb3IoZ2VvY29kZURhdGEubG9uZ2l0dWRlICogMTAwKSAvIDEwMFxuICApO1xuICBjb25zb2xlLmxvZyhnZW9jb2RlRGF0YSk7XG4gIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgcG9wdWxhdGVNYWluKHdlYXRoZXJEYXRhLCBnZW9jb2RlRGF0YSk7XG4gIHBvcHVsYXRlV2Vla2x5Rm9yZWNhc3Qod2VhdGhlckRhdGEpO1xufVxuXG5zZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgYXN5bmMgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBwb3B1bGF0ZUFsbFdlYXRoZXJEYXRhKClcbn0pO1xuXG5mdW5jdGlvbiByZW1vdmVDaGlsZHJlbihwYXJlbnQpIHtcbiAgLy9yZW1vdmVzIGFsbCBjaGlsZHJlbiBvZiBhbiBlbGVtZW50XG4gIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5peCh1bml4U3RyaW5nKSB7XG4gIGNvbnN0IGRhdGVPYmogPSBuZXcgRGF0ZSh1bml4U3RyaW5nICogMTAwMCk7XG4gIGZ1bmN0aW9uIHRpbWUoKSB7XG4gICAgcmV0dXJuIGRhdGVPYmoudG9UaW1lU3RyaW5nKCkuc2xpY2UoMCwgNSk7XG4gIH1cbiAgZnVuY3Rpb24gZGF5KCkge1xuICAgIGNvbnN0IGRheSA9IGRhdGVPYmoudG9EYXRlU3RyaW5nKCkuc2xpY2UoMCwgMyk7XG4gICAgaWYgKGRheSA9PT0gXCJTdW5cIikgcmV0dXJuIFwiU3VuZGF5XCI7XG4gICAgaWYgKGRheSA9PT0gXCJNb25cIikgcmV0dXJuIFwiTW9uZGF5XCI7XG4gICAgaWYgKGRheSA9PT0gXCJUdWVcIikgcmV0dXJuIFwiVHVlc2RheVwiO1xuICAgIGlmIChkYXkgPT09IFwiV2VkXCIpIHJldHVybiBcIldlZG5lc2RheVwiO1xuICAgIGlmIChkYXkgPT09IFwiVGh1XCIpIHJldHVybiBcIlRodXJzZGF5XCI7XG4gICAgaWYgKGRheSA9PT0gXCJGcmlcIikgcmV0dXJuIFwiRnJpZGF5XCI7XG4gICAgaWYgKGRheSA9PT0gXCJTYXRcIikgcmV0dXJuIFwiU2F0dXJkYXlcIjtcbiAgfVxuICByZXR1cm4geyB0aW1lLCBkYXkgfTtcbn1cblxuZXhwb3J0IHsgcmVtb3ZlQ2hpbGRyZW4sIHVuaXgsIHBvcHVsYXRlQWxsV2VhdGhlckRhdGEgfTtcbiIsImltcG9ydCB7IHJlbW92ZUNoaWxkcmVuLCB1bml4IH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IGdldFVuaXRUeXBlIH0gZnJvbSBcIi4vbmF2XCI7XG5cbmxldCBkZWdyZWVUeXBlXG5cblxuZnVuY3Rpb24gbmV3SG91ckluZm8oaG91cmx5T2JqKSB7XG4gIGNvbnN0IGhvdXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG91ckluZm8uY2xhc3NMaXN0LmFkZChcImhvdXItaW5mb1wiKTtcblxuICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGVtcC5jbGFzc0xpc3QuYWRkKFwiaG91ci10ZW1wXCIpO1xuICB0ZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5mbG9vcihob3VybHlPYmoudGVtcCAvIDEpfcKwYDtcbiAgaG91ckluZm8uYXBwZW5kQ2hpbGQodGVtcCk7XG5cbiAgY29uc3QgaWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGljb25EaXYuY2xhc3NMaXN0LmFkZChcImhvdXItaWNvblwiKTtcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGljb24uY2xhc3NMaXN0LmFkZChcInNtYWxsLWljb25cIik7XG4gIGljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7aG91cmx5T2JqLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYDtcbiAgaWNvbkRpdi5hcHBlbmRDaGlsZChpY29uKTtcbiAgaG91ckluZm8uYXBwZW5kQ2hpbGQoaWNvbkRpdik7XG5cbiAgY29uc3QgcHJlY2lwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJlY2lwRGl2LmNsYXNzTGlzdC5hZGQoXCJob3VyLXByZWNpcFwiKTtcbiAgcHJlY2lwRGl2LmlubmVySFRNTCA9IFwiPGRpdj5wcmVjaXA6PC9kaXY+XCI7XG4gIGNvbnN0IHBvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBvcC50ZXh0Q29udGVudCA9IGAke2hvdXJseU9iai5wb3B9JWA7XG4gIHByZWNpcERpdi5hcHBlbmRDaGlsZChwb3ApO1xuICBob3VySW5mby5hcHBlbmRDaGlsZChwcmVjaXBEaXYpO1xuXG4gIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aW1lLmNsYXNzTGlzdC5hZGQoXCJob3VyLXRpbWVcIik7XG4gIHRpbWUudGV4dENvbnRlbnQgPSB1bml4KGhvdXJseU9iai5kdCkudGltZSgpO1xuICBob3VySW5mby5hcHBlbmRDaGlsZCh0aW1lKTtcblxuICByZXR1cm4gaG91ckluZm87XG59XG5cbmZ1bmN0aW9uIGN1cnJlbnRUZW1wKHdlYXRoZXJEYXRhKSB7XG4gIGNvbnN0IHRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZW1wRGl2LmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50LXRlbXAtZGF0YVwiKTtcbiAgdGVtcERpdi5pZCA9IFwiY3VycmVudC10ZW1wLWRhdGFcIjtcbiAgdGVtcERpdi5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cIm1haW4taGlnaGxvd1wiIGlkPVwibWFpbi1oaWdobG93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC1oaWdoXCIgaWQ9XCJjdXJyZW50LWhpZ2hcIj5IaWdoOiAke01hdGguZmxvb3IoXG4gICAgICAgIHdlYXRoZXJEYXRhLmRhaWx5WzBdLnRlbXAubWF4IC8gMVxuICAgICAgKX3CsDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtbG93XCIgaWQ9XCJjdXJyZW50LWxvd1wiPkxvdzogJHtNYXRoLmZsb29yKFxuICAgICAgICB3ZWF0aGVyRGF0YS5kYWlseVswXS50ZW1wLm1pblxuICAgICAgKX3CsDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjdXJyZW50LXRlbXBcIiBpZD1cImN1cnJlbnQtdGVtcFwiPlxuICAgICR7TWF0aC5mbG9vcih3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXAgLyAxKX08c3BhbiBjbGFzcz1cImNcIiBpZD1cImNcIj7CsCR7ZGVncmVlVHlwZX08L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZlZWxzLWxpa2VcIiBpZD1cImZlZWxzLWxpa2VcIj5GZWVscyBsaWtlICR7TWF0aC5mbG9vcihcbiAgICAgIHdlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNfbGlrZSAvIDFcbiAgICApfcKwJHtkZWdyZWVUeXBlfTwvZGl2PlxuICAgIGA7XG5cbiAgcmV0dXJuIHRlbXBEaXY7XG59XG5cbmZ1bmN0aW9uIGN1cnJlbnRDb25kaXRpb25zKHdlYXRoZXJEYXRhKSB7XG4gIGNvbnN0IGNvbmRpdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25kaXRpb25zLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbmRpdGlvbnNcIik7XG4gIGNvbmRpdGlvbnMuaWQgPSBcIm1haW4tY29uZGl0aW9uc1wiO1xuICBjb25kaXRpb25zLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwibWFpbi1pY29uXCIgaWQ9XCJtYWluLWljb25cIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBpZD1cImljb24taW1nXCJcbiAgICAgICAgICAgIHNyYz1cImh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7d2VhdGhlckRhdGEuY3VycmVudC53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1kZXNjcmlwdGlvblwiIGlkPVwibWFpbi1kZXNjcmlwdGlvblwiPiR7d2VhdGhlckRhdGEuY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgIGA7XG4gIHJldHVybiBjb25kaXRpb25zO1xufVxuXG5mdW5jdGlvbiBwbGFjZU5hbWUoZ2VvY29kZURhdGEpIHtcbiAgY29uc3QgcGxhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGFjZS5jbGFzc0xpc3QuYWRkKFwiY2l0eS1uYW1lXCIpO1xuICBwbGFjZS5pZCA9IFwiY2l0eS1uYW1lXCI7XG4gIHBsYWNlLnRleHRDb250ZW50ID0gZ2VvY29kZURhdGEubGFiZWw7XG4gIHJldHVybiBwbGFjZTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVIb3VybHkod2VhdGhlckRhdGEpIHtcbiAgY29uc3QgaG91cmx5Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob3VybHktZm9yZWNhc3RcIik7XG4gIHJlbW92ZUNoaWxkcmVuKGhvdXJseUNvbnRhaW5lcik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuICAgIGhvdXJseUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdIb3VySW5mbyh3ZWF0aGVyRGF0YS5ob3VybHlbaV0pKTtcbiAgfVxufVxuZnVuY3Rpb24gcG9wdWxhdGVNYWluKHdlYXRoZXJEYXRhLCBnZW9jb2RlRGF0YSkge1xuICAoZ2V0VW5pdFR5cGUoKT09PVwibWV0cmljXCIpPyBkZWdyZWVUeXBlID0gXCJDXCI6IGRlZ3JlZVR5cGUgPSBcIkZcIlxuICBcbiAgY29uc3QgbWFpbldlYXRoZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4td2VhdGhlclwiKTtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC10ZW1wLWRhdGFcIikpIHtcbiAgICBtYWluV2VhdGhlci5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtdGVtcC1kYXRhXCIpKTtcbiAgfVxuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbmRpdGlvbnNcIikpIHtcbiAgICBtYWluV2VhdGhlci5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tY29uZGl0aW9uc1wiKSk7XG4gIH1cbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2l0eS1uYW1lXCIpKSB7XG4gICAgbWFpbldlYXRoZXIucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaXR5LW5hbWVcIikpO1xuICB9XG5cbiAgbWFpbldlYXRoZXIuYXBwZW5kQ2hpbGQoY3VycmVudFRlbXAod2VhdGhlckRhdGEpKTtcbiAgbWFpbldlYXRoZXIuYXBwZW5kQ2hpbGQoY3VycmVudENvbmRpdGlvbnMod2VhdGhlckRhdGEpKTtcbiAgbWFpbldlYXRoZXIuYXBwZW5kQ2hpbGQocGxhY2VOYW1lKGdlb2NvZGVEYXRhKSk7XG4gIHBvcHVsYXRlSG91cmx5KHdlYXRoZXJEYXRhKTtcbn1cblxuZXhwb3J0IHsgcG9wdWxhdGVNYWluIH07XG4iLCJpbXBvcnQgeyBwb3B1bGF0ZUFsbFdlYXRoZXJEYXRhIH0gZnJvbSBcIi5cIjtcblxuXG5cbmxldCB1bml0VHlwZSA9IFwibWV0cmljXCI7XG5cbmNvbnN0IGNoYW5nZVVuaXRzID0gKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAoZS50YXJnZXQuaWQgPT09IFwiY1wiKSB1bml0VHlwZSA9IFwibWV0cmljXCI7XG4gIGVsc2UgdW5pdFR5cGUgPSBcImltcGVyaWFsXCI7XG4gIHBvcHVsYXRlQWxsV2VhdGhlckRhdGEoKVxuXG59O1xuXG5mdW5jdGlvbiBuYXZNZW51KCkge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICBuYXYucm9sZSA9IFwibmF2aWdhdGlvblwiO1xuICBjb25zdCBtZW51VG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudVRvZ2dsZS5pZCA9IFwibWVudVRvZ2dsZVwiO1xuICBuYXYuYXBwZW5kQ2hpbGQobWVudVRvZ2dsZSk7XG4gIG1lbnVUb2dnbGUuaW5uZXJIVE1MID0gYFxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxuICAgIDxzcGFuPjwvc3Bhbj5cbiAgICA8c3Bhbj48L3NwYW4+XG4gICAgPHNwYW4+PC9zcGFuPlxuICAgIGA7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICB1bC5pZCA9IFwibWVudVwiO1xuICBtZW51VG9nZ2xlLmFwcGVuZENoaWxkKHVsKTtcblxuICBjb25zdCBjZmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBjZmNvbnRhaW5lci5pZCA9IFwiYy1mXCI7XG4gIHVsLmFwcGVuZENoaWxkKGNmY29udGFpbmVyKTtcblxuICBjb25zdCBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYy5pZCA9IFwiY1wiO1xuICBjLmNsYXNzTGlzdC5hZGQoXCJ1bml0QnV0dG9uXCIpO1xuICBjLnRleHRDb250ZW50ID0gXCLCsENcIjtcbiAgYy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjaGFuZ2VVbml0cyhlKTtcbiAgfSk7XG5cbiAgY29uc3QgZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGYuaWQgPSBcImZcIjtcbiAgZi50ZXh0Q29udGVudCA9IFwiwrBGXCI7XG4gIGYuY2xhc3NMaXN0LmFkZChcInVuaXRCdXR0b25cIik7XG4gIGYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY2hhbmdlVW5pdHMoZSk7XG4gIH0pO1xuICBjZmNvbnRhaW5lci5hcHBlbmRDaGlsZChjKTtcbiAgY2Zjb250YWluZXIuYXBwZW5kQ2hpbGQoZik7XG4gIGNvbnN0IG1lbnVUaXRsZXMgPSBbXCJIb21lXCIsIFwiQWJvdXRcIiwgXCJHaXRodWJcIl07XG5cbiAgbWVudVRpdGxlcy5mb3JFYWNoKCh0aXRsZSkgPT4ge1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBhLmhyZWYgPSBcIiNcIjtcbiAgICBhLmlubmVySFRNTCA9IGA8bGk+JHt0aXRsZX08L2xpPmA7XG4gICAgdWwuYXBwZW5kQ2hpbGQoYSk7XG4gIH0pO1xuICByZXR1cm4gbmF2O1xufVxuXG5mdW5jdGlvbiBnZXRVbml0VHlwZSgpIHtcbiAgcmV0dXJuIHVuaXRUeXBlO1xufVxuZnVuY3Rpb24gZ2V0RGVncmVlcygpIHtcbiAgcmV0dXJuIHVuaXRUeXBlID09IFwibWV0cmljXCIgPyBcIkNcIiA6IFwiRlwiO1xufVxuXG5leHBvcnQgeyBuYXZNZW51LCBnZXRVbml0VHlwZSwgZ2V0RGVncmVlcyB9O1xuIiwiY29uc3QgZDJkID0gcmVxdWlyZShcImRlZ3JlZXMtdG8tZGlyZWN0aW9uXCIpOyAvL2NvbnZlcnRzIHdpbmQgZGVncmVlcyB0byBhIGNvbXBhc3MgZGlyZWN0aW9uXG5pbXBvcnQgeyB1bml4IH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IGdldFVuaXRUeXBlIH0gZnJvbSBcIi4vbmF2XCI7XG5cbmxldCBkaXN0YW5jZVR5cGVcblxuZnVuY3Rpb24gY3JlYXRlV2Vla2x5Rm9yZWNhc3Qod2VhdGhlckRhdGEpIHtcbiAgbGV0IGZvcmVjYXN0TGlzdCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgIGxldCBkYXk7XG4gICAgY29uc3QgZm9yZWNhc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcmVjYXN0RGl2LmNsYXNzTGlzdC5hZGQoXCJkYXktZm9yZWNhc3RcIik7XG4gICAgaWYgKGkgPT09IDApIHtcbiAgICAgIGRheSA9IFwiVG9kYXkncyBmb3JlY2FzdFwiO1xuICAgICAgZm9yZWNhc3REaXYuaWQgPSBcInRvZGF5LWZvcmVjYXN0XCI7XG4gICAgfSBlbHNlIGRheSA9IHVuaXgod2VhdGhlckRhdGEuZGFpbHlbaV0uZHQpLmRheSgpO1xuXG4gICAgZm9yZWNhc3REaXYuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJkYXktb3ZlcnZpZXdcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkYXktb3ZlcnZpZXctbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGF5LW5hbWVcIj4ke2RheX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRheS1kZXNjcmlwdGlvblwiPiR7XG4gICAgICAgICAgd2VhdGhlckRhdGEuZGFpbHlbaV0ud2VhdGhlclswXS5kZXNjcmlwdGlvblxuICAgICAgICB9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkYXktb3ZlcnZpZXctcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRheS1pY29uXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3M9XCJzbWFsbC1pY29uIGRheS1pY29uXCJcbiAgICAgICAgICAgIHNyYz1cImh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7XG4gICAgICAgICAgICAgIHdlYXRoZXJEYXRhLmRhaWx5W2ldLndlYXRoZXJbMF0uaWNvblxuICAgICAgICAgICAgfUAyeC5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRheS1oaWdobG93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRheS1oaWdoXCI+JHtNYXRoLmZsb29yKFxuICAgICAgICAgICAgd2VhdGhlckRhdGEuZGFpbHlbaV0udGVtcC5tYXggLyAxXG4gICAgICAgICAgKX3CsFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXktbG93XCI+JHtNYXRoLmZsb29yKHdlYXRoZXJEYXRhLmRhaWx5W2ldLnRlbXAubWluIC8gMSl9wrBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8dWwgY2xhc3M9XCJkYXktZGV0YWlsc1wiPlxuICAgICAgICA8bGk+PGRpdj5QcmVjaXBpdGF0aW9uPC9kaXY+IDxkaXY+JHtNYXRoLmZsb29yKFxuICAgICAgICAgICh3ZWF0aGVyRGF0YS5kYWlseVtpXS5wb3AgKiAxMDApIC8gMVxuICAgICAgICApfSU8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPjxkaXY+V2luZDwvZGl2PiBcbiAgICAgICAgICA8ZGl2PiR7d2VhdGhlckRhdGEuZGFpbHlbaV0ud2luZF9zcGVlZH0gJHtkaXN0YW5jZVR5cGV9L2ggXG4gICAgICAgICAgJHtkMmQod2VhdGhlckRhdGEuZGFpbHlbaV0ud2luZF9kZWcpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+PGRpdj5IdW1pZGl0eTwvZGl2PiA8ZGl2PiR7d2VhdGhlckRhdGEuZGFpbHlbaV0uaHVtaWRpdHl9JTwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+PGRpdj5VViBJbmRleDwvZGl2PiA8ZGl2PiR7d2VhdGhlckRhdGEuZGFpbHlbaV0udXZpfTwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+PGRpdj5TdW5yaXNlL1N1bnNldDwvZGl2PiA8ZGl2PiR7dW5peChcbiAgICAgICAgICB3ZWF0aGVyRGF0YS5kYWlseVtpXS5zdW5yaXNlXG4gICAgICAgICkudGltZSgpfS8ke3VuaXgod2VhdGhlckRhdGEuZGFpbHlbaV0uc3Vuc2V0KS50aW1lKCl9PC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgPC91bD5gO1xuICAgIGZvcmVjYXN0TGlzdC5wdXNoKGZvcmVjYXN0RGl2KTtcbiAgfVxuICByZXR1cm4gZm9yZWNhc3RMaXN0O1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVdlZWtseUZvcmVjYXN0KHdlYXRoZXJEYXRhKSB7XG4gIChnZXRVbml0VHlwZSgpPT09XCJtZXRyaWNcIik/IGRpc3RhbmNlVHlwZSA9IFwia21cIjogZGlzdGFuY2VUeXBlID0gXCJtaVwiXG4gIFxuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWVrbHktZm9yZWNhc3RcIikpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2Vla2x5LWZvcmVjYXN0XCIpKTtcbiAgfVxuICBjb25zdCB3ZWVrbHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3ZWVrbHlEaXYuY2xhc3NMaXN0LmFkZChcIndlZWtseS1mb3JlY2FzdFwiKTtcbiAgd2Vla2x5RGl2LmlkID0gXCJ3ZWVrbHktZm9yZWNhc3RcIjtcbiAgY3JlYXRlV2Vla2x5Rm9yZWNhc3Qod2VhdGhlckRhdGEpLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICB3ZWVrbHlEaXYuYXBwZW5kQ2hpbGQobm9kZSk7XG4gIH0pO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdlZWtseURpdik7XG59XG5cbmV4cG9ydCB7IHBvcHVsYXRlV2Vla2x5Rm9yZWNhc3QgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=