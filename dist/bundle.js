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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --blue: #051f38;\n  --white: #ffffff;\n  --dark: rgb(48, 47, 47);\n}\nhtml {\n  width: 100%;\n  height: 100%;\n  font-family: sans-serif;\n}\nbody {\n  width: 100%;\n  height: 100%;\n  background-color: var(--blue);\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  grid-template-rows: repeat(15, 1fr);\n  color: ghostwhite;\n}\n\n.main-weather {\n  position: fixed;\n  height: 90%;\n  width: 100%;\n  background-color: var(--dark);\n  grid-column: 1/13;\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  grid-template-rows: repeat(12, 1fr);\n  padding: 20px;\n  box-sizing: border-box;\n}\nform {\n  grid-column: 2/12;\n  grid-row: 1/2;\n  justify-content: center;\n  align-items: center;\n}\nform input {\n  width: 97%;\n  height: 70%;\n}\n.initial-message {\n  grid-column: 2/12;\n  grid-row: 3/4;\n  align-self: center;\n  align-self: center;\n  text-align: center;\n}\n.current-temp-data {\n  grid-row: 2/7;\n  grid-column: 1/6;\n  padding: 4%;\n}\n.main-highlow {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 15px;\n}\n.current-temp {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  font-size: 6em;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.c {\n  font-size: 0.5em;\n}\n.feels-like {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main-conditions {\n  grid-row: 3/8;\n  grid-column: 8/13;\n}\n.main-conditions div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.main-icon {\n  margin-top: 30px;\n}\n.city-name {\n  grid-row: 7/9;\n  grid-column: 1/10;\n  font-size: 1.3em;\n  padding: 2%;\n  display: flex;\n  align-items: center;\n}\n.hourly-forecast {\n  grid-row: 9/13;\n  grid-column: 1/13;\n  display: flex;\n  overflow: scroll;\n  align-items: center;\n}\n.hour-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  border: 1px solid black;\n  border-radius: 4px;\n  margin: 10px;\n  margin-top: 0;\n  margin-bottom: 0;\n  height: 96%;\n  min-width: 70px;\n}\n.small-icon {\n  width: 60px;\n  margin-top: -10px;\n  margin-bottom: -10px;\n}\n.hour-precip {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.8em;\n}\n\n/******* Weekly Forecast ********/\n\n.weekly-forecast {\n  margin-top: 10%;\n  z-index: 10;\n  grid-row: 14/16;\n  grid-column: 1/13;\n  transition: ease-in-out 0.4s;\n}\n.weekly-forecast.hidden {\n  margin-top: 1000%;\n  transition: ease-in-out 0.6s;\n}\n.weekly-forecast header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgba(17, 16, 16, 0.953);\n  font-size: 1.3em;\n  padding-bottom: 10px;\n}\n.weekly-forecast p {\n  background-color: rgba(17, 16, 16, 0.953);\n  margin-top: -6px;\n  width: 20%;\n  text-align: center;\n  border-radius: 5px;\n  color: white;\n}\n#today-forecast {\n  margin-top: 0px;\n  /*   border-top-left-radius: 15px;\n  border-top-right-radius: 15px; */\n}\n.day-forecast {\n  border-top: 1px solid black;\n  margin-top: 0px;\n  background-color: rgba(17, 16, 16, 0.953);\n  backdrop-filter: blur(6px);\n  color: white;\n  padding: 10px;\n}\n\n.day-overview {\n  display: flex;\n  justify-content: space-between;\n}\n.day-name {\n  font-size: 1.3em;\n}\n\n.day-overview-right {\n  display: flex;\n  align-items: center;\n}\n.forecast-expand {\n  margin-left: 20px;\n  padding-top: 20px;\n  font-size: 1.5em;\n  transform: rotate(180deg);\n}\n\n.day-details li {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 6px;\n  padding-right: 10%;\n  padding-left: 10%;\n}\n\n/****Nav Menu*****/\n\nnav {\n  height: 100%;\n}\na {\n  text-decoration: none !important;\n  color: #232323;\n  transition: color 0.3s ease;\n}\n\na:hover {\n  color: #2ecc71;\n}\n\n#menuToggle {\n  height: 100%;\n  display: block;\n  position: fixed;\n  top: 27px;\n  right: 2.5%;\n  z-index: 1;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n#menuToggle input {\n  display: block;\n  width: 40px;\n  height: 32px;\n  position: absolute;\n  top: -7px;\n  left: -5px;\n  cursor: pointer;\n  opacity: 0;\n  z-index: 10;\n  -webkit-touch-callout: none;\n}\n\n#menuToggle span {\n  display: block;\n  width: 33px;\n  height: 4px;\n  margin-bottom: 5px;\n  position: relative;\n  background: #cdcdcd;\n  border-radius: 3px;\n  z-index: 5;\n  transform-origin: 4px 0px;\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),\n    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;\n}\n\n#menuToggle span:first-child {\n  transform-origin: 0% 0%;\n}\n\n#menuToggle span:nth-last-child(2) {\n  transform-origin: 0% 100%;\n}\n\n#menuToggle input:checked ~ span {\n  opacity: 1;\n  transform: rotate(45deg) translate(-2px, -1px);\n  background: #232323;\n}\n\n#menuToggle input:checked ~ span:nth-last-child(3) {\n  opacity: 0;\n  transform: rotate(0deg) scale(0.2, 0.2);\n}\n\n#menuToggle input:checked ~ span:nth-last-child(2) {\n  opacity: 1;\n  transform: rotate(-45deg) translate(0, -1px);\n}\n\n#menu {\n  position: absolute;\n  width: 200px;\n  height: 100%;\n  margin: -100px 0 0 0;\n  padding: 50px;\n  padding-top: 125px;\n  right: -100px;\n  background: #ededed;\n  list-style-type: none;\n  -webkit-font-smoothing: antialiased;\n  transform-origin: 0% 0%;\n  transform: translate(100%, 0);\n\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n}\n\n#menu li {\n  padding: 10px 0;\n  font-size: 22px;\n}\n\n#menuToggle input:checked ~ ul {\n  transform: scale(1, 1);\n  opacity: 1;\n}\n\n/*Loader*/\n.loader-container {\n  display: none;\n}\n.loader-container.active {\n  justify-self: center;\n  align-self: center;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.625);\n  width: 100%;\n  height: 1000%;\n}\n#load-message {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: -100px;\n  margin-bottom: 50px;\n \n  background-color: rgba(0, 0, 0, 0.953);\n  border-radius:30px;\n  width: 200px;\n  height: 100px;\n}\n.loader {\n  justify-self: center;\n  align-self: center;\n\n  border: 16px solid gray; /* Light grey */\n  border-top: 2px solid rgb(237, 102, 53);\n  border-bottom: 2px solid rgb(237, 102, 53); /* Blue */\n  border-radius: 70%;\n  width: 120px;\n  height: 120px;\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,gBAAgB;EAChB,uBAAuB;AACzB;AACA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;AACzB;AACA;EACE,WAAW;EACX,YAAY;EACZ,6BAA6B;EAC7B,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,WAAW;EACX,6BAA6B;EAC7B,iBAAiB;EACjB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,UAAU;EACV,WAAW;AACb;AACA;EACE,iBAAiB;EACjB,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,gBAAgB;EAChB,WAAW;AACb;AACA;EACE,aAAa;EACb,6BAA6B;EAC7B,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,cAAc;EACd,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,iBAAiB;EACjB,gBAAgB;EAChB,WAAW;EACX,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,cAAc;EACd,iBAAiB;EACjB,aAAa;EACb,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;EAC7B,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,WAAW;EACX,eAAe;AACjB;AACA;EACE,WAAW;EACX,iBAAiB;EACjB,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA,iCAAiC;;AAEjC;EACE,eAAe;EACf,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,4BAA4B;AAC9B;AACA;EACE,iBAAiB;EACjB,4BAA4B;AAC9B;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,yCAAyC;EACzC,gBAAgB;EAChB,oBAAoB;AACtB;AACA;EACE,yCAAyC;EACzC,gBAAgB;EAChB,UAAU;EACV,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,eAAe;EACf;kCACgC;AAClC;AACA;EACE,2BAA2B;EAC3B,eAAe;EACf,yCAAyC;EACzC,0BAA0B;EAC1B,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;EACf,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA,kBAAkB;;AAElB;EACE,YAAY;AACd;AACA;EACE,gCAAgC;EAChC,cAAc;EACd,2BAA2B;AAC7B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,eAAe;EACf,SAAS;EACT,WAAW;EACX,UAAU;EACV,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,eAAe;EACf,UAAU;EACV,WAAW;EACX,2BAA2B;AAC7B;;AAEA;EACE,cAAc;EACd,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,UAAU;EACV,yBAAyB;EACzB;wEACsE;AACxE;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,UAAU;EACV,8CAA8C;EAC9C,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,uCAAuC;AACzC;;AAEA;EACE,UAAU;EACV,4CAA4C;AAC9C;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,oBAAoB;EACpB,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,mCAAmC;EACnC,uBAAuB;EACvB,6BAA6B;;EAE7B,2DAA2D;AAC7D;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,UAAU;AACZ;;AAEA,SAAS;AACT;EACE,aAAa;AACf;AACA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,sCAAsC;EACtC,WAAW;EACX,aAAa;AACf;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;;EAEnB,sCAAsC;EACtC,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;AACA;EACE,oBAAoB;EACpB,kBAAkB;;EAElB,uBAAuB,EAAE,eAAe;EACxC,uCAAuC;EACvC,0CAA0C,EAAE,SAAS;EACrD,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,kCAAkC;AACpC;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF","sourcesContent":[":root {\n  --blue: #051f38;\n  --white: #ffffff;\n  --dark: rgb(48, 47, 47);\n}\nhtml {\n  width: 100%;\n  height: 100%;\n  font-family: sans-serif;\n}\nbody {\n  width: 100%;\n  height: 100%;\n  background-color: var(--blue);\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  grid-template-rows: repeat(15, 1fr);\n  color: ghostwhite;\n}\n\n.main-weather {\n  position: fixed;\n  height: 90%;\n  width: 100%;\n  background-color: var(--dark);\n  grid-column: 1/13;\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  grid-template-rows: repeat(12, 1fr);\n  padding: 20px;\n  box-sizing: border-box;\n}\nform {\n  grid-column: 2/12;\n  grid-row: 1/2;\n  justify-content: center;\n  align-items: center;\n}\nform input {\n  width: 97%;\n  height: 70%;\n}\n.initial-message {\n  grid-column: 2/12;\n  grid-row: 3/4;\n  align-self: center;\n  align-self: center;\n  text-align: center;\n}\n.current-temp-data {\n  grid-row: 2/7;\n  grid-column: 1/6;\n  padding: 4%;\n}\n.main-highlow {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 15px;\n}\n.current-temp {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  font-size: 6em;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.c {\n  font-size: 0.5em;\n}\n.feels-like {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main-conditions {\n  grid-row: 3/8;\n  grid-column: 8/13;\n}\n.main-conditions div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.main-icon {\n  margin-top: 30px;\n}\n.city-name {\n  grid-row: 7/9;\n  grid-column: 1/10;\n  font-size: 1.3em;\n  padding: 2%;\n  display: flex;\n  align-items: center;\n}\n.hourly-forecast {\n  grid-row: 9/13;\n  grid-column: 1/13;\n  display: flex;\n  overflow: scroll;\n  align-items: center;\n}\n.hour-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  border: 1px solid black;\n  border-radius: 4px;\n  margin: 10px;\n  margin-top: 0;\n  margin-bottom: 0;\n  height: 96%;\n  min-width: 70px;\n}\n.small-icon {\n  width: 60px;\n  margin-top: -10px;\n  margin-bottom: -10px;\n}\n.hour-precip {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.8em;\n}\n\n/******* Weekly Forecast ********/\n\n.weekly-forecast {\n  margin-top: 10%;\n  z-index: 10;\n  grid-row: 14/16;\n  grid-column: 1/13;\n  transition: ease-in-out 0.4s;\n}\n.weekly-forecast.hidden {\n  margin-top: 1000%;\n  transition: ease-in-out 0.6s;\n}\n.weekly-forecast header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgba(17, 16, 16, 0.953);\n  font-size: 1.3em;\n  padding-bottom: 10px;\n}\n.weekly-forecast p {\n  background-color: rgba(17, 16, 16, 0.953);\n  margin-top: -6px;\n  width: 20%;\n  text-align: center;\n  border-radius: 5px;\n  color: white;\n}\n#today-forecast {\n  margin-top: 0px;\n  /*   border-top-left-radius: 15px;\n  border-top-right-radius: 15px; */\n}\n.day-forecast {\n  border-top: 1px solid black;\n  margin-top: 0px;\n  background-color: rgba(17, 16, 16, 0.953);\n  backdrop-filter: blur(6px);\n  color: white;\n  padding: 10px;\n}\n\n.day-overview {\n  display: flex;\n  justify-content: space-between;\n}\n.day-name {\n  font-size: 1.3em;\n}\n\n.day-overview-right {\n  display: flex;\n  align-items: center;\n}\n.forecast-expand {\n  margin-left: 20px;\n  padding-top: 20px;\n  font-size: 1.5em;\n  transform: rotate(180deg);\n}\n\n.day-details li {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 6px;\n  padding-right: 10%;\n  padding-left: 10%;\n}\n\n/****Nav Menu*****/\n\nnav {\n  height: 100%;\n}\na {\n  text-decoration: none !important;\n  color: #232323;\n  transition: color 0.3s ease;\n}\n\na:hover {\n  color: #2ecc71;\n}\n\n#menuToggle {\n  height: 100%;\n  display: block;\n  position: fixed;\n  top: 27px;\n  right: 2.5%;\n  z-index: 1;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n#menuToggle input {\n  display: block;\n  width: 40px;\n  height: 32px;\n  position: absolute;\n  top: -7px;\n  left: -5px;\n  cursor: pointer;\n  opacity: 0;\n  z-index: 10;\n  -webkit-touch-callout: none;\n}\n\n#menuToggle span {\n  display: block;\n  width: 33px;\n  height: 4px;\n  margin-bottom: 5px;\n  position: relative;\n  background: #cdcdcd;\n  border-radius: 3px;\n  z-index: 5;\n  transform-origin: 4px 0px;\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),\n    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;\n}\n\n#menuToggle span:first-child {\n  transform-origin: 0% 0%;\n}\n\n#menuToggle span:nth-last-child(2) {\n  transform-origin: 0% 100%;\n}\n\n#menuToggle input:checked ~ span {\n  opacity: 1;\n  transform: rotate(45deg) translate(-2px, -1px);\n  background: #232323;\n}\n\n#menuToggle input:checked ~ span:nth-last-child(3) {\n  opacity: 0;\n  transform: rotate(0deg) scale(0.2, 0.2);\n}\n\n#menuToggle input:checked ~ span:nth-last-child(2) {\n  opacity: 1;\n  transform: rotate(-45deg) translate(0, -1px);\n}\n\n#menu {\n  position: absolute;\n  width: 200px;\n  height: 100%;\n  margin: -100px 0 0 0;\n  padding: 50px;\n  padding-top: 125px;\n  right: -100px;\n  background: #ededed;\n  list-style-type: none;\n  -webkit-font-smoothing: antialiased;\n  transform-origin: 0% 0%;\n  transform: translate(100%, 0);\n\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n}\n\n#menu li {\n  padding: 10px 0;\n  font-size: 22px;\n}\n\n#menuToggle input:checked ~ ul {\n  transform: scale(1, 1);\n  opacity: 1;\n}\n\n/*Loader*/\n.loader-container {\n  display: none;\n}\n.loader-container.active {\n  justify-self: center;\n  align-self: center;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.625);\n  width: 100%;\n  height: 1000%;\n}\n#load-message {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: -100px;\n  margin-bottom: 50px;\n \n  background-color: rgba(0, 0, 0, 0.953);\n  border-radius:30px;\n  width: 200px;\n  height: 100px;\n}\n.loader {\n  justify-self: center;\n  align-self: center;\n\n  border: 16px solid gray; /* Light grey */\n  border-top: 2px solid rgb(237, 102, 53);\n  border-bottom: 2px solid rgb(237, 102, 53); /* Blue */\n  border-radius: 70%;\n  width: 120px;\n  height: 120px;\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n"],"sourceRoot":""}]);
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
  const hourlyContainer = document.getElementById("hourly-forecast");
  (0,___WEBPACK_IMPORTED_MODULE_0__.removeChildren)(hourlyContainer);
  for (let i = 0; i < 24; i++) {
    hourlyContainer.appendChild(newHourInfo(weatherData.hourly[i]));
  }
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
/* harmony import */ var _user_location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-location */ "./src/user-location.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");




let unitType = "imperial";

const changeUnits = (e) => {
  e.preventDefault();
  if (e.target.id === "c") unitType = "metric";
  else unitType = "imperial";
  if(document.getElementById("search-bar").value) (0,___WEBPACK_IMPORTED_MODULE_1__.populateAllWeatherData)()
  else (0,_user_location__WEBPACK_IMPORTED_MODULE_0__.populateFromUserLocation)();
  document.getElementById("weekly-forecast").classList.add("hidden")


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
  const menuTitles = ["Home", "About", "Github",];

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
  return crd;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrMS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjazEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazEvLi9ub2RlX21vZHVsZXMvZGVncmVlcy10by1kaXJlY3Rpb24vbGliLmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2sxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazEvLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vc3JjL2ZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vc3JjL21haW4td2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrMS8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazEvLi9zcmMvdXNlci1sb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrMS8uL3NyYy93ZWVrbHktZm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjazEvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjazEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2sxL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjazEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrMS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLGlEQUFpRCxvQkFBb0IscUJBQXFCLDRCQUE0QixHQUFHLFFBQVEsZ0JBQWdCLGlCQUFpQiw0QkFBNEIsR0FBRyxRQUFRLGdCQUFnQixpQkFBaUIsa0NBQWtDLGtCQUFrQiwyQ0FBMkMsd0NBQXdDLHNCQUFzQixHQUFHLG1CQUFtQixvQkFBb0IsZ0JBQWdCLGdCQUFnQixrQ0FBa0Msc0JBQXNCLGtCQUFrQiwyQ0FBMkMsd0NBQXdDLGtCQUFrQiwyQkFBMkIsR0FBRyxRQUFRLHNCQUFzQixrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLGNBQWMsZUFBZSxnQkFBZ0IsR0FBRyxvQkFBb0Isc0JBQXNCLGtCQUFrQix1QkFBdUIsdUJBQXVCLHVCQUF1QixHQUFHLHNCQUFzQixrQkFBa0IscUJBQXFCLGdCQUFnQixHQUFHLGlCQUFpQixrQkFBa0Isa0NBQWtDLHFCQUFxQixHQUFHLGlCQUFpQixrQkFBa0IsNEJBQTRCLDRCQUE0QixtQkFBbUIscUJBQXFCLHdCQUF3QixHQUFHLE1BQU0scUJBQXFCLEdBQUcsZUFB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S0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssT0FBTyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxPQUFPLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sVUFBVSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLGNBQWMsdUJBQXVCLGFBQWEsdUJBQXVCLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLGdDQUFnQyxvQkFBb0IscUJBQXFCLDRCQUE0QixHQUFHLFFBQVEsZ0JBQWdCLGlCQUFpQiw0QkFBNEIsR0FBRyxRQUFRLGdCQUFnQixpQkFBaUIsa0NBQWtDLGtCQUFrQiwyQ0FBMkMsd0NBQXdDLHNCQUFzQixHQUFHLG1CQUFtQixvQkFBb0IsZ0JBQWdCLGdCQUFnQixrQ0FBa0Msc0JBQXNCLGtCQUFrQiwyQ0FBMkMsd0NBQXdDLGtCQUFrQiwyQkFBMkIsR0FBRyxRQUFRLHNCQUFzQixrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLGNBQWMsZUFBZSxnQkFBZ0IsR0FBRyxvQkFBb0Isc0JBQXNCLGtCQUFrQix1QkFBdUIsdUJBQXVCLHVCQUF1QixHQUFHLHNCQUFzQixrQkFBa0IscUJBQXFCLGdCQUFnQixHQUFHLGlCQUFpQixrQkFBa0Isa0NBQWtDLHFCQUFxQixHQUFHLGlCQUFpQixrQkFBa0IsNEJBQTRCLDRCQUE0QixtQkFBbUIscUJBQXFCLHdCQUF3QixHQUFHLE1BQU0scUJBQXFCLEdBQUcsZUFBZSxrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLG9CQUFvQixrQkFBa0Isc0JBQXNCLEdBQUcsd0JBQXdCLGtCQUFrQix3QkFBd0IsNEJBQTRCLEdBQUcsY0FBYyxxQkFBcUIsR0FBRyxjQUFjLGtCQUFrQixzQkFBc0IscUJBQXFCLGdCQUFnQixrQkFBa0Isd0JBQXdCLEdBQUcsb0JBQW9CLG1CQUFtQixzQkFBc0Isa0JBQWtCLHFCQUFxQix3QkFBd0IsR0FBRyxjQUFjLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGtDQUFrQyw0QkFBNEIsdUJBQXVCLGlCQUFpQixrQkFBa0IscUJBQXFCLGdCQUFnQixvQkFBb0IsR0FBRyxlQUFlLGdCQUFnQixzQkFBc0IseUJBQXlCLEdBQUcsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixxQkFBcUIsR0FBRyw0REFBNEQsb0JBQW9CLGdCQUFnQixvQkFBb0Isc0JBQXNCLGlDQUFpQyxHQUFHLDJCQUEyQixzQkFBc0IsaUNBQWlDLEdBQUcsMkJBQTJCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDhDQUE4QyxxQkFBcUIseUJBQXlCLEdBQUcsc0JBQXNCLDhDQUE4QyxxQkFBcUIsZUFBZSx1QkFBdUIsdUJBQXVCLGlCQUFpQixHQUFHLG1CQUFtQixvQkFBb0Isc0NBQXNDLGtDQUFrQyxNQUFNLGlCQUFpQixnQ0FBZ0Msb0JBQW9CLDhDQUE4QywrQkFBK0IsaUJBQWlCLGtCQUFrQixHQUFHLG1CQUFtQixrQkFBa0IsbUNBQW1DLEdBQUcsYUFBYSxxQkFBcUIsR0FBRyx5QkFBeUIsa0JBQWtCLHdCQUF3QixHQUFHLG9CQUFvQixzQkFBc0Isc0JBQXNCLHFCQUFxQiw4QkFBOEIsR0FBRyxxQkFBcUIsa0JBQWtCLG1DQUFtQyxvQkFBb0IsdUJBQXVCLHNCQUFzQixHQUFHLGdDQUFnQyxpQkFBaUIsR0FBRyxLQUFLLHFDQUFxQyxtQkFBbUIsZ0NBQWdDLEdBQUcsYUFBYSxtQkFBbUIsR0FBRyxpQkFBaUIsaUJBQWlCLG1CQUFtQixvQkFBb0IsY0FBYyxnQkFBZ0IsZUFBZSw4QkFBOEIsc0JBQXNCLEdBQUcsdUJBQXVCLG1CQUFtQixnQkFBZ0IsaUJBQWlCLHVCQUF1QixjQUFjLGVBQWUsb0JBQW9CLGVBQWUsZ0JBQWdCLGdDQUFnQyxHQUFHLHNCQUFzQixtQkFBbUIsZ0JBQWdCLGdCQUFnQix1QkFBdUIsdUJBQXVCLHdCQUF3Qix1QkFBdUIsZUFBZSw4QkFBOEIsMklBQTJJLEdBQUcsa0NBQWtDLDRCQUE0QixHQUFHLHdDQUF3Qyw4QkFBOEIsR0FBRyxzQ0FBc0MsZUFBZSxtREFBbUQsd0JBQXdCLEdBQUcsd0RBQXdELGVBQWUsNENBQTRDLEdBQUcsd0RBQXdELGVBQWUsaURBQWlELEdBQUcsV0FBVyx1QkFBdUIsaUJBQWlCLGlCQUFpQix5QkFBeUIsa0JBQWtCLHVCQUF1QixrQkFBa0Isd0JBQXdCLDBCQUEwQix3Q0FBd0MsNEJBQTRCLGtDQUFrQyxrRUFBa0UsR0FBRyxjQUFjLG9CQUFvQixvQkFBb0IsR0FBRyxvQ0FBb0MsMkJBQTJCLGVBQWUsR0FBRyxtQ0FBbUMsa0JBQWtCLEdBQUcsNEJBQTRCLHlCQUF5Qix1QkFBdUIsdUJBQXVCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0QiwyQ0FBMkMsZ0JBQWdCLGtCQUFrQixHQUFHLGlCQUFpQixrQkFBa0IsNEJBQTRCLHdCQUF3Qix1QkFBdUIsd0JBQXdCLDhDQUE4Qyx1QkFBdUIsaUJBQWlCLGtCQUFrQixHQUFHLFdBQVcseUJBQXlCLHVCQUF1Qiw4QkFBOEIsNkRBQTZELCtDQUErQyxrQ0FBa0MsaUJBQWlCLGtCQUFrQix1Q0FBdUMsR0FBRyxxQkFBcUIsUUFBUSw4QkFBOEIsS0FBSyxVQUFVLGdDQUFnQyxLQUFLLEdBQUcscUJBQXFCO0FBQ25wZ0I7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7OztBQ2pFYTs7QUFFYixpQ0FBaUMsMkhBQTJIOztBQUU1Siw2QkFBNkIsa0tBQWtLOztBQUUvTCxpREFBaUQsZ0JBQWdCLGdFQUFnRSx3REFBd0QsNkRBQTZELHNEQUFzRCxrSEFBa0g7O0FBRTlaLHNDQUFzQyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxrQkFBa0IsRUFBRSxhQUFhOztBQUVyTCx3Q0FBd0MsOEZBQThGLHdCQUF3QixlQUFlLGVBQWUsZ0JBQWdCLFlBQVksTUFBTSx3QkFBd0IsK0JBQStCLGFBQWEscUJBQXFCLG1DQUFtQyxFQUFFLEVBQUUsY0FBYyxXQUFXLFVBQVUsRUFBRSxVQUFVLE1BQU0saURBQWlELEVBQUUsVUFBVSxrQkFBa0IsRUFBRSxFQUFFLGFBQWE7O0FBRW5mLCtCQUErQixvQ0FBb0M7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUFzRjtBQUN0RixNQUF3RztBQUN4RyxNQUFtRzs7OztBQUluRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwyRkFBUzs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxtRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLG1GQUFPLElBQUksMEZBQWMsR0FBRywwRkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7OztBQ2pEaEU7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscURBQXFEOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwyQjs7Ozs7Ozs7Ozs7QUMxQmE7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQ2hHYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQzs7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGb0Q7QUFDaEI7O0FBRXBDOztBQUVBO0FBQ0E7QUFDQSxvRUFBb0UsaURBQVksQ0FBQyxTQUFTLFdBQVc7QUFDckc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyR0FBMkcsSUFBSSxHQUFHLElBQUk7QUFDdEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELElBQUksT0FBTyxJQUFJLFNBQVMsaURBQVcsR0FBRywwQkFBMEIsK0NBQVUsQ0FBQztBQUN0STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEMUI7QUFDNEI7QUFDSDtBQUNhO0FBQ2Y7QUFDZTs7QUFFM0Q7QUFDQTtBQUNBOztBQUVBLGlCQUFpQiw2Q0FBTztBQUN4QixZQUFZLGdEQUFVOztBQUV0Qix3RUFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrREFBTztBQUNyQyw4QkFBOEIscURBQVU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkRBQVk7QUFDaEIsSUFBSSx3RUFBc0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFd0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RFZjtBQUNMOztBQUVwQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QiwrQkFBK0I7QUFDdkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsMEJBQTBCO0FBQzNFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsY0FBYztBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsdUNBQUk7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQSxRQUFRO0FBQ1IsdURBQXVEO0FBQ3ZEO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNLDBCQUEwQixXQUFXO0FBQzNDO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0EsTUFBTSxHQUFHLFdBQVc7QUFDcEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELG9DQUFvQztBQUN4RjtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsMkNBQTJDO0FBQ3pHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxpREFBYztBQUNoQixpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaURBQVc7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhrQzs7QUFFZjs7QUFFM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QseURBQXNCO0FBQ3hFLE9BQU8sd0VBQXdCO0FBQy9COzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixNQUFNO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakdlO0FBQ2I7QUFDVTs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx5REFBYztBQUNuRDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIscURBQVU7QUFDeEM7QUFDQTtBQUNBLElBQUksMkRBQVk7QUFDaEIsSUFBSSx3RUFBc0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixTQUFTLEtBQUssWUFBWTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRW9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRHBDLFlBQVksbUJBQU8sQ0FBQyx3RUFBc0IsRUFBRTtBQUNuQjtBQUNXOztBQUVwQzs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxZQUFZLHVDQUFJOztBQUVyQjtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsSUFBSTtBQUNwQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsaUNBQWlDLDhDQUE4QztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxpQkFBaUIsZ0NBQWdDLEdBQUcsYUFBYTtBQUNqRSxZQUFZO0FBQ1o7QUFDQTtBQUNBLHVDQUF1Qyw4QkFBOEI7QUFDckU7QUFDQSx1Q0FBdUMseUJBQXlCO0FBQ2hFO0FBQ0EsNkNBQTZDLHVDQUFJO0FBQ2pEO0FBQ0EsaUJBQWlCLEdBQUcsdUNBQUkscUNBQXFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsaURBQVc7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFa0M7Ozs7Ozs7VUN6RmxDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1ibHVlOiAjMDUxZjM4O1xcbiAgLS13aGl0ZTogI2ZmZmZmZjtcXG4gIC0tZGFyazogcmdiKDQ4LCA0NywgNDcpO1xcbn1cXG5odG1sIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDE1LCAxZnIpO1xcbiAgY29sb3I6IGdob3N0d2hpdGU7XFxufVxcblxcbi5tYWluLXdlYXRoZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgZ3JpZC1jb2x1bW46IDEvMTM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMiwgMWZyKTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5mb3JtIHtcXG4gIGdyaWQtY29sdW1uOiAyLzEyO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuZm9ybSBpbnB1dCB7XFxuICB3aWR0aDogOTclO1xcbiAgaGVpZ2h0OiA3MCU7XFxufVxcbi5pbml0aWFsLW1lc3NhZ2Uge1xcbiAgZ3JpZC1jb2x1bW46IDIvMTI7XFxuICBncmlkLXJvdzogMy80O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uY3VycmVudC10ZW1wLWRhdGEge1xcbiAgZ3JpZC1yb3c6IDIvNztcXG4gIGdyaWQtY29sdW1uOiAxLzY7XFxuICBwYWRkaW5nOiA0JTtcXG59XFxuLm1haW4taGlnaGxvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG4uY3VycmVudC10ZW1wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZm9udC1zaXplOiA2ZW07XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLmMge1xcbiAgZm9udC1zaXplOiAwLjVlbTtcXG59XFxuLmZlZWxzLWxpa2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1haW4tY29uZGl0aW9ucyB7XFxuICBncmlkLXJvdzogMy84O1xcbiAgZ3JpZC1jb2x1bW46IDgvMTM7XFxufVxcbi5tYWluLWNvbmRpdGlvbnMgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5tYWluLWljb24ge1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuLmNpdHktbmFtZSB7XFxuICBncmlkLXJvdzogNy85O1xcbiAgZ3JpZC1jb2x1bW46IDEvMTA7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbiAgcGFkZGluZzogMiU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhvdXJseS1mb3JlY2FzdCB7XFxuICBncmlkLXJvdzogOS8xMztcXG4gIGdyaWQtY29sdW1uOiAxLzEzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaG91ci1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXJnaW46IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIGhlaWdodDogOTYlO1xcbiAgbWluLXdpZHRoOiA3MHB4O1xcbn1cXG4uc21hbGwtaWNvbiB7XFxuICB3aWR0aDogNjBweDtcXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XFxufVxcbi5ob3VyLXByZWNpcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxufVxcblxcbi8qKioqKioqIFdlZWtseSBGb3JlY2FzdCAqKioqKioqKi9cXG5cXG4ud2Vla2x5LWZvcmVjYXN0IHtcXG4gIG1hcmdpbi10b3A6IDEwJTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgZ3JpZC1yb3c6IDE0LzE2O1xcbiAgZ3JpZC1jb2x1bW46IDEvMTM7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjRzO1xcbn1cXG4ud2Vla2x5LWZvcmVjYXN0LmhpZGRlbiB7XFxuICBtYXJnaW4tdG9wOiAxMDAwJTtcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuNnM7XFxufVxcbi53ZWVrbHktZm9yZWNhc3QgaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcsIDE2LCAxNiwgMC45NTMpO1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4ud2Vla2x5LWZvcmVjYXN0IHAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNywgMTYsIDE2LCAwLjk1Myk7XFxuICBtYXJnaW4tdG9wOiAtNnB4O1xcbiAgd2lkdGg6IDIwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuI3RvZGF5LWZvcmVjYXN0IHtcXG4gIG1hcmdpbi10b3A6IDBweDtcXG4gIC8qICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4OyAqL1xcbn1cXG4uZGF5LWZvcmVjYXN0IHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbi10b3A6IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcsIDE2LCAxNiwgMC45NTMpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDZweCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZGF5LW92ZXJ2aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5kYXktbmFtZSB7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbn1cXG5cXG4uZGF5LW92ZXJ2aWV3LXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZm9yZWNhc3QtZXhwYW5kIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuLmRheS1kZXRhaWxzIGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tdG9wOiA2cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG59XFxuXFxuLyoqKipOYXYgTWVudSoqKioqL1xcblxcbm5hdiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogIzIzMjMyMztcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXG59XFxuXFxuYTpob3ZlciB7XFxuICBjb2xvcjogIzJlY2M3MTtcXG59XFxuXFxuI21lbnVUb2dnbGUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDI3cHg7XFxuICByaWdodDogMi41JTtcXG4gIHotaW5kZXg6IDE7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbiNtZW51VG9nZ2xlIGlucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC03cHg7XFxuICBsZWZ0OiAtNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcbn1cXG5cXG4jbWVudVRvZ2dsZSBzcGFuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDMzcHg7XFxuICBoZWlnaHQ6IDRweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6ICNjZGNkY2Q7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICB6LWluZGV4OiA1O1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogNHB4IDBweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjc3LCAwLjIsIDAuMDUsIDEpLFxcbiAgICBiYWNrZ3JvdW5kIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAuMiwgMC4wNSwgMSksIG9wYWNpdHkgMC41NXMgZWFzZTtcXG59XFxuXFxuI21lbnVUb2dnbGUgc3BhbjpmaXJzdC1jaGlsZCB7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcXG59XFxuXFxuI21lbnVUb2dnbGUgc3BhbjpudGgtbGFzdC1jaGlsZCgyKSB7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xcbn1cXG5cXG4jbWVudVRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gc3BhbiB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtMnB4LCAtMXB4KTtcXG4gIGJhY2tncm91bmQ6ICMyMzIzMjM7XFxufVxcblxcbiNtZW51VG9nZ2xlIGlucHV0OmNoZWNrZWQgfiBzcGFuOm50aC1sYXN0LWNoaWxkKDMpIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgwLjIsIDAuMik7XFxufVxcblxcbiNtZW51VG9nZ2xlIGlucHV0OmNoZWNrZWQgfiBzcGFuOm50aC1sYXN0LWNoaWxkKDIpIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgwLCAtMXB4KTtcXG59XFxuXFxuI21lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAtMTAwcHggMCAwIDA7XFxuICBwYWRkaW5nOiA1MHB4O1xcbiAgcGFkZGluZy10b3A6IDEyNXB4O1xcbiAgcmlnaHQ6IC0xMDBweDtcXG4gIGJhY2tncm91bmQ6ICNlZGVkZWQ7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgMCk7XFxuXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC43NywgMC4yLCAwLjA1LCAxKTtcXG59XFxuXFxuI21lbnUgbGkge1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4jbWVudVRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gdWwge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi8qTG9hZGVyKi9cXG4ubG9hZGVyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubG9hZGVyLWNvbnRhaW5lci5hY3RpdmUge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42MjUpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMDAlO1xcbn1cXG4jbG9hZC1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAtMTAwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45NTMpO1xcbiAgYm9yZGVyLXJhZGl1czozMHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuLmxvYWRlciB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG4gIGJvcmRlcjogMTZweCBzb2xpZCBncmF5OyAvKiBMaWdodCBncmV5ICovXFxuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiKDIzNywgMTAyLCA1Myk7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDIzNywgMTAyLCA1Myk7IC8qIEJsdWUgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDcwJTtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDZC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QUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1COztFQUVuQixzQ0FBc0M7RUFDdEMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7O0VBRWxCLHVCQUF1QixFQUFFLGVBQWU7RUFDeEMsdUNBQXVDO0VBQ3ZDLDBDQUEwQyxFQUFFLFNBQVM7RUFDckQsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tYmx1ZTogIzA1MWYzODtcXG4gIC0td2hpdGU6ICNmZmZmZmY7XFxuICAtLWRhcms6IHJnYig0OCwgNDcsIDQ3KTtcXG59XFxuaHRtbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxNSwgMWZyKTtcXG4gIGNvbG9yOiBnaG9zdHdoaXRlO1xcbn1cXG5cXG4ubWFpbi13ZWF0aGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gIGdyaWQtY29sdW1uOiAxLzEzO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTIsIDFmcik7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuZm9ybSB7XFxuICBncmlkLWNvbHVtbjogMi8xMjtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmZvcm0gaW5wdXQge1xcbiAgd2lkdGg6IDk3JTtcXG4gIGhlaWdodDogNzAlO1xcbn1cXG4uaW5pdGlhbC1tZXNzYWdlIHtcXG4gIGdyaWQtY29sdW1uOiAyLzEyO1xcbiAgZ3JpZC1yb3c6IDMvNDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmN1cnJlbnQtdGVtcC1kYXRhIHtcXG4gIGdyaWQtcm93OiAyLzc7XFxuICBncmlkLWNvbHVtbjogMS82O1xcbiAgcGFkZGluZzogNCU7XFxufVxcbi5tYWluLWhpZ2hsb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuLmN1cnJlbnQtdGVtcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGZvbnQtc2l6ZTogNmVtO1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbi5jIHtcXG4gIGZvbnQtc2l6ZTogMC41ZW07XFxufVxcbi5mZWVscy1saWtlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tYWluLWNvbmRpdGlvbnMge1xcbiAgZ3JpZC1yb3c6IDMvODtcXG4gIGdyaWQtY29sdW1uOiA4LzEzO1xcbn1cXG4ubWFpbi1jb25kaXRpb25zIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubWFpbi1pY29uIHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcbi5jaXR5LW5hbWUge1xcbiAgZ3JpZC1yb3c6IDcvOTtcXG4gIGdyaWQtY29sdW1uOiAxLzEwO1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5ob3VybHktZm9yZWNhc3Qge1xcbiAgZ3JpZC1yb3c6IDkvMTM7XFxuICBncmlkLWNvbHVtbjogMS8xMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhvdXItaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBoZWlnaHQ6IDk2JTtcXG4gIG1pbi13aWR0aDogNzBweDtcXG59XFxuLnNtYWxsLWljb24ge1xcbiAgd2lkdGg6IDYwcHg7XFxuICBtYXJnaW4tdG9wOiAtMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xcbn1cXG4uaG91ci1wcmVjaXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbn1cXG5cXG4vKioqKioqKiBXZWVrbHkgRm9yZWNhc3QgKioqKioqKiovXFxuXFxuLndlZWtseS1mb3JlY2FzdCB7XFxuICBtYXJnaW4tdG9wOiAxMCU7XFxuICB6LWluZGV4OiAxMDtcXG4gIGdyaWQtcm93OiAxNC8xNjtcXG4gIGdyaWQtY29sdW1uOiAxLzEzO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC40cztcXG59XFxuLndlZWtseS1mb3JlY2FzdC5oaWRkZW4ge1xcbiAgbWFyZ2luLXRvcDogMTAwMCU7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjZzO1xcbn1cXG4ud2Vla2x5LWZvcmVjYXN0IGhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3LCAxNiwgMTYsIDAuOTUzKTtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLndlZWtseS1mb3JlY2FzdCBwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcsIDE2LCAxNiwgMC45NTMpO1xcbiAgbWFyZ2luLXRvcDogLTZweDtcXG4gIHdpZHRoOiAyMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbiN0b2RheS1mb3JlY2FzdCB7XFxuICBtYXJnaW4tdG9wOiAwcHg7XFxuICAvKiAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDsgKi9cXG59XFxuLmRheS1mb3JlY2FzdCB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW4tdG9wOiAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3LCAxNiwgMTYsIDAuOTUzKTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig2cHgpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmRheS1vdmVydmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uZGF5LW5hbWUge1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG59XFxuXFxuLmRheS1vdmVydmlldy1yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZvcmVjYXN0LWV4cGFuZCB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcblxcbi5kYXktZGV0YWlscyBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLXRvcDogNnB4O1xcbiAgcGFkZGluZy1yaWdodDogMTAlO1xcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XFxufVxcblxcbi8qKioqTmF2IE1lbnUqKioqKi9cXG5cXG5uYXYge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbiAgY29sb3I6ICMyMzIzMjM7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgY29sb3I6ICMyZWNjNzE7XFxufVxcblxcbiNtZW51VG9nZ2xlIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAyN3B4O1xcbiAgcmlnaHQ6IDIuNSU7XFxuICB6LWluZGV4OiAxO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jbWVudVRvZ2dsZSBpbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtN3B4O1xcbiAgbGVmdDogLTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDA7XFxuICB6LWluZGV4OiAxMDtcXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG59XFxuXFxuI21lbnVUb2dnbGUgc3BhbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAzM3B4O1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiAjY2RjZGNkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgei1pbmRleDogNTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDRweCAwcHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC43NywgMC4yLCAwLjA1LCAxKSxcXG4gICAgYmFja2dyb3VuZCAwLjVzIGN1YmljLWJlemllcigwLjc3LCAwLjIsIDAuMDUsIDEpLCBvcGFjaXR5IDAuNTVzIGVhc2U7XFxufVxcblxcbiNtZW51VG9nZ2xlIHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxufVxcblxcbiNtZW51VG9nZ2xlIHNwYW46bnRoLWxhc3QtY2hpbGQoMikge1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcXG59XFxuXFxuI21lbnVUb2dnbGUgaW5wdXQ6Y2hlY2tlZCB+IHNwYW4ge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLTJweCwgLTFweCk7XFxuICBiYWNrZ3JvdW5kOiAjMjMyMzIzO1xcbn1cXG5cXG4jbWVudVRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gc3BhbjpudGgtbGFzdC1jaGlsZCgzKSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMC4yLCAwLjIpO1xcbn1cXG5cXG4jbWVudVRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gc3BhbjpudGgtbGFzdC1jaGlsZCgyKSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoMCwgLTFweCk7XFxufVxcblxcbiNtZW51IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogLTEwMHB4IDAgMCAwO1xcbiAgcGFkZGluZzogNTBweDtcXG4gIHBhZGRpbmctdG9wOiAxMjVweDtcXG4gIHJpZ2h0OiAtMTAwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsIDApO1xcblxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAuMiwgMC4wNSwgMSk7XFxufVxcblxcbiNtZW51IGxpIHtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuI21lbnVUb2dnbGUgaW5wdXQ6Y2hlY2tlZCB+IHVsIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4vKkxvYWRlciovXFxuLmxvYWRlci1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmxvYWRlci1jb250YWluZXIuYWN0aXZlIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjI1KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAwJTtcXG59XFxuI2xvYWQtbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogLTEwMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOTUzKTtcXG4gIGJvcmRlci1yYWRpdXM6MzBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcbi5sb2FkZXIge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxuICBib3JkZXI6IDE2cHggc29saWQgZ3JheTsgLyogTGlnaHQgZ3JleSAqL1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYigyMzcsIDEwMiwgNTMpO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigyMzcsIDEwMiwgNTMpOyAvKiBCbHVlICovXFxuICBib3JkZXItcmFkaXVzOiA3MCU7XFxuICB3aWR0aDogMTIwcHg7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkKSB7XG4gIGlmICh0eXBlb2YgZCAhPT0gJ251bWJlcicgfHwgaXNOYU4oZCkpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICAvLyBrZWVwIHdpdGhpbiB0aGUgcmFuZ2U6IDAgPD0gZCA8IDM2MFxuICBkID0gZCAlIDM2MDtcblxuICBpZiAoMTEuMjUgPD0gZCAmJiBkIDwgMzMuNzUpIHtcbiAgICByZXR1cm4gXCJOTkVcIjtcbiAgfSBlbHNlIGlmICgzMy43NSA8PSBkICYmIGQgPCA1Ni4yNSkge1xuICAgIHJldHVybiBcIk5FXCI7XG4gIH0gZWxzZSBpZiAoNTYuMjUgPD0gZCAmJiBkIDwgNzguNzUpIHtcbiAgICByZXR1cm4gXCJFTkVcIjtcbiAgfSBlbHNlIGlmICg3OC43NSA8PSBkICYmIGQgPCAxMDEuMjUpIHtcbiAgICByZXR1cm4gXCJFXCI7XG4gIH0gZWxzZSBpZiAoMTAxLjI1IDw9IGQgJiYgZCA8IDEyMy43NSkge1xuICAgIHJldHVybiBcIkVTRVwiO1xuICB9IGVsc2UgaWYgKDEyMy43NSA8PSBkICYmIGQgPCAxNDYuMjUpIHtcbiAgICByZXR1cm4gXCJTRVwiO1xuICB9IGVsc2UgaWYgKDE0Ni4yNSA8PSBkICYmIGQgPCAxNjguNzUpIHtcbiAgICByZXR1cm4gXCJTU0VcIjtcbiAgfSBlbHNlIGlmICgxNjguNzUgPD0gZCAmJiBkIDwgMTkxLjI1KSB7XG4gICAgcmV0dXJuIFwiU1wiO1xuICB9IGVsc2UgaWYgKDE5MS4yNSA8PSBkICYmIGQgPCAyMTMuNzUpIHtcbiAgICByZXR1cm4gXCJTU1dcIjtcbiAgfSBlbHNlIGlmICgyMTMuNzUgPD0gZCAmJiBkIDwgMjM2LjI1KSB7XG4gICAgcmV0dXJuIFwiU1dcIjtcbiAgfSBlbHNlIGlmICgyMzYuMjUgPD0gZCAmJiBkIDwgMjU4Ljc1KSB7XG4gICAgcmV0dXJuIFwiV1NXXCI7XG4gIH0gZWxzZSBpZiAoMjU4Ljc1IDw9IGQgJiYgZCA8IDI4MS4yNSkge1xuICAgIHJldHVybiBcIldcIjtcbiAgfSBlbHNlIGlmICgyODEuMjUgPD0gZCAmJiBkIDwgMzAzLjc1KSB7XG4gICAgcmV0dXJuIFwiV05XXCI7XG4gIH0gZWxzZSBpZiAoMzAzLjc1IDw9IGQgJiYgZCA8IDMyNi4yNSkge1xuICAgIHJldHVybiBcIk5XXCI7XG4gIH0gZWxzZSBpZiAoMzI2LjI1IDw9IGQgJiYgZCA8IDM0OC43NSkge1xuICAgIHJldHVybiBcIk5OV1wiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIk5cIjtcbiAgfVxufTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgZ2V0VGFyZ2V0IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IGZ1bmN0aW9uKGNzcywgc3R5bGUpe1xuICAgICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgICB9XG4gIH07XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbihzdHlsZSkge1xuICAgICAgICB2YXIgbm9uY2UgPVxuICAgICAgICAgIHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgICAgICBpZiAobm9uY2UpIHtcbiAgICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKHN0eWxlKXtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KFwiaGVhZFwiKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiXG4gICAgICApO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH07XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYXJnZXQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsImNvbnN0IHdlYXRoZXJBUEkgPVwiOTQwNTYyYmVkNGVhOGViODlkZGMwY2M4ZTNhYWMyYjRcIlxuY29uc3QgcGxhY2VzQVBJID0gXCJBSXphU3lEMldtQzAyRkpSaDQ3VWxYM1ZHeUJwTEZLejZNeC1xQ3dcIlxuY29uc3QgZ2VvY29kaW5nQVBJID0gXCJmY2YyMDdkNTg2NDE2ZGI1ODAyODI0ODA3NjhhNjRlNlwiXG5cbmV4cG9ydHt3ZWF0aGVyQVBJLCBnZW9jb2RpbmdBUEl9IiwiaW1wb3J0IHsgd2VhdGhlckFQSSwgZ2VvY29kaW5nQVBJIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgeyBnZXRVbml0VHlwZSB9IGZyb20gXCIuL25hdlwiO1xuXG4vLyBjb250YWlucyBmdW5jdGlvbnMgZm9yIGNvbW11bmljYXRpbmcgd2l0aCBBUElzIGFuZCBmb3JtYXRpbmcgZGF0YS5cblxuY29uc3QgZ2VvY29kZSA9IGFzeW5jIChzZWFyY2hUZXh0KSA9PiB7XG4gIC8vcmV0dXJucyBhbiBvYmplY3Qgd2l0aCBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIGluZm9ybWF0aW9uIGZyb20gc2VhcmNoIHRleHRcbiAgY29uc3QgVVJMID0gYGh0dHA6Ly9hcGkucG9zaXRpb25zdGFjay5jb20vdjEvZm9yd2FyZD9hY2Nlc3Nfa2V5PSR7Z2VvY29kaW5nQVBJfSZxdWVyeT0ke3NlYXJjaFRleHR9YDtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkwpO1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcbiAgfVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKFxuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWJhclwiKVxuICAgICAgICAudmFsdWUuc3BsaXQoXCIsXCIpWzBdXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpID09PSBkYXRhLmRhdGFbaV0ubmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YS5kYXRhW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGF0YS5kYXRhWzBdO1xufTtcblxuY29uc3QgcmV2ZXJzZUdlb2NvZGUgPSBhc3luYyAobGF0LCBsb24pID0+IHtcbiAgY29uc3QgVVJMID0gYGh0dHA6Ly9hcGkucG9zaXRpb25zdGFjay5jb20vdjEvcmV2ZXJzZT9hY2Nlc3Nfa2V5PWZjZjIwN2Q1ODY0MTZkYjU4MDI4MjQ4MDc2OGE2NGU2JnF1ZXJ5PSR7bGF0fSwke2xvbn1gO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTCk7XG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuICB9XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhXG59O1xuXG5jb25zdCBnZXRXZWF0aGVyID0gYXN5bmMgKGxhdCwgbG9uKSA9PiB7XG4gIC8vdXNlcyB0aGUgb25lIGNhbGwgYXBpIGZyb20gb3BlbndlYXRoZXJtYXAub3JnIHRvIGdldCBkZXRhaWxlZCB3ZWF0aGVyIGluZm9ybWF0aW9uIGZvciBhIGxvY2F0aW9uIGZyb20gbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZVxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mdW5pdHM9JHtnZXRVbml0VHlwZSgpfSZleGNsdWRlPW1pbnV0ZWx5JmFwcGlkPSR7d2VhdGhlckFQSX1gXG4gICk7XG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuICB9XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IHsgZ2VvY29kZSwgcmV2ZXJzZUdlb2NvZGUsIGdldFdlYXRoZXIgfTtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBnZW9jb2RlLCBnZXRXZWF0aGVyIH0gZnJvbSBcIi4vZm9yZWNhc3RcIjtcbmltcG9ydCB7IHBvcHVsYXRlTWFpbiB9IGZyb20gXCIuL21haW4td2VhdGhlclwiO1xuaW1wb3J0IHsgcG9wdWxhdGVXZWVrbHlGb3JlY2FzdCB9IGZyb20gXCIuL3dlZWtseS1mb3JlY2FzdFwiO1xuaW1wb3J0IHsgbmF2TWVudSwgZ2V0RGVncmVlcyB9IGZyb20gXCIuL25hdlwiO1xuaW1wb3J0IHsgcG9wdWxhdGVGcm9tVXNlckxvY2F0aW9uIH0gZnJvbSBcIi4vdXNlci1sb2NhdGlvblwiO1xuXG5jb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtZm9ybVwiKTtcbmNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWJhclwiKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4td2VhdGhlclwiKTtcblxubWFpbi5hcHBlbmRDaGlsZChuYXZNZW51KCkpO1xuY29uc29sZS5sb2coZ2V0RGVncmVlcygpKTtcblxucG9wdWxhdGVGcm9tVXNlckxvY2F0aW9uKCk7XG5cbmFzeW5jIGZ1bmN0aW9uIHBvcHVsYXRlQWxsV2VhdGhlckRhdGEoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGVyLWNvbnRhaW5lclwiKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB0cnkge1xuICAgIGNvbnN0IGdlb2NvZGVEYXRhID0gYXdhaXQgZ2VvY29kZShzZWFyY2hCYXIudmFsdWUpO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlcihcbiAgICAgIE1hdGguZmxvb3IoZ2VvY29kZURhdGEubGF0aXR1ZGUgKiAxMDApIC8gMTAwLFxuICAgICAgTWF0aC5mbG9vcihnZW9jb2RlRGF0YS5sb25naXR1ZGUgKiAxMDApIC8gMTAwXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhnZW9jb2RlRGF0YSk7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluaXRpYWwtbWVzc2FnZVwiKSkge1xuICAgICAgbWFpbi5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluaXRpYWwtbWVzc2FnZVwiKSk7XG4gICAgfVxuICAgIHBvcHVsYXRlTWFpbih3ZWF0aGVyRGF0YSwgZ2VvY29kZURhdGEpO1xuICAgIHBvcHVsYXRlV2Vla2x5Rm9yZWNhc3Qod2VhdGhlckRhdGEpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGVyLWNvbnRhaW5lclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtYnV0dG9uXCIpLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWVrbHktZm9yZWNhc3RcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB9XG4gIH0gY2F0Y2gge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGVyLWNvbnRhaW5lclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9XG59XG5cbnNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhc3luYyAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHBvcHVsYXRlQWxsV2VhdGhlckRhdGEoKTtcbn0pO1xuXG5mdW5jdGlvbiByZW1vdmVDaGlsZHJlbihwYXJlbnQpIHtcbiAgLy9yZW1vdmVzIGFsbCBjaGlsZHJlbiBvZiBhbiBlbGVtZW50XG4gIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5peCh1bml4U3RyaW5nKSB7XG4gIGNvbnN0IGRhdGVPYmogPSBuZXcgRGF0ZSh1bml4U3RyaW5nICogMTAwMCk7XG4gIGZ1bmN0aW9uIHRpbWUoKSB7XG4gICAgcmV0dXJuIGRhdGVPYmoudG9UaW1lU3RyaW5nKCkuc2xpY2UoMCwgNSk7XG4gIH1cbiAgZnVuY3Rpb24gZGF5KCkge1xuICAgIGNvbnN0IGRheSA9IGRhdGVPYmoudG9EYXRlU3RyaW5nKCkuc2xpY2UoMCwgMyk7XG4gICAgaWYgKGRheSA9PT0gXCJTdW5cIikgcmV0dXJuIFwiU3VuZGF5XCI7XG4gICAgaWYgKGRheSA9PT0gXCJNb25cIikgcmV0dXJuIFwiTW9uZGF5XCI7XG4gICAgaWYgKGRheSA9PT0gXCJUdWVcIikgcmV0dXJuIFwiVHVlc2RheVwiO1xuICAgIGlmIChkYXkgPT09IFwiV2VkXCIpIHJldHVybiBcIldlZG5lc2RheVwiO1xuICAgIGlmIChkYXkgPT09IFwiVGh1XCIpIHJldHVybiBcIlRodXJzZGF5XCI7XG4gICAgaWYgKGRheSA9PT0gXCJGcmlcIikgcmV0dXJuIFwiRnJpZGF5XCI7XG4gICAgaWYgKGRheSA9PT0gXCJTYXRcIikgcmV0dXJuIFwiU2F0dXJkYXlcIjtcbiAgfVxuICByZXR1cm4geyB0aW1lLCBkYXkgfTtcbn1cblxuZXhwb3J0IHsgcmVtb3ZlQ2hpbGRyZW4sIHVuaXgsIHBvcHVsYXRlQWxsV2VhdGhlckRhdGEgfTtcbiIsImltcG9ydCB7IHJlbW92ZUNoaWxkcmVuLCB1bml4IH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IGdldFVuaXRUeXBlIH0gZnJvbSBcIi4vbmF2XCI7XG5cbmxldCBkZWdyZWVUeXBlO1xuXG5mdW5jdGlvbiBuZXdIb3VySW5mbyhob3VybHlPYmopIHtcbiAgY29uc3QgaG91ckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob3VySW5mby5jbGFzc0xpc3QuYWRkKFwiaG91ci1pbmZvXCIpO1xuXG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZW1wLmNsYXNzTGlzdC5hZGQoXCJob3VyLXRlbXBcIik7XG4gIHRlbXAudGV4dENvbnRlbnQgPSBgJHtNYXRoLmZsb29yKGhvdXJseU9iai50ZW1wIC8gMSl9wrBgO1xuICBob3VySW5mby5hcHBlbmRDaGlsZCh0ZW1wKTtcblxuICBjb25zdCBpY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaWNvbkRpdi5jbGFzc0xpc3QuYWRkKFwiaG91ci1pY29uXCIpO1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaWNvbi5jbGFzc0xpc3QuYWRkKFwic21hbGwtaWNvblwiKTtcbiAgaWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtob3VybHlPYmoud2VhdGhlclswXS5pY29ufUAyeC5wbmdgO1xuICBpY29uRGl2LmFwcGVuZENoaWxkKGljb24pO1xuICBob3VySW5mby5hcHBlbmRDaGlsZChpY29uRGl2KTtcblxuICBjb25zdCBwcmVjaXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcmVjaXBEaXYuY2xhc3NMaXN0LmFkZChcImhvdXItcHJlY2lwXCIpO1xuICBwcmVjaXBEaXYuaW5uZXJIVE1MID0gXCI8ZGl2PnByZWNpcDo8L2Rpdj5cIjtcbiAgY29uc3QgcG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcG9wLnRleHRDb250ZW50ID0gYCR7aG91cmx5T2JqLnBvcH0lYDtcbiAgcHJlY2lwRGl2LmFwcGVuZENoaWxkKHBvcCk7XG4gIGhvdXJJbmZvLmFwcGVuZENoaWxkKHByZWNpcERpdik7XG5cbiAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpbWUuY2xhc3NMaXN0LmFkZChcImhvdXItdGltZVwiKTtcbiAgdGltZS50ZXh0Q29udGVudCA9IHVuaXgoaG91cmx5T2JqLmR0KS50aW1lKCk7XG4gIGhvdXJJbmZvLmFwcGVuZENoaWxkKHRpbWUpO1xuXG4gIHJldHVybiBob3VySW5mbztcbn1cblxuZnVuY3Rpb24gY3VycmVudFRlbXAod2VhdGhlckRhdGEpIHtcbiAgY29uc3QgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRlbXBEaXYuY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtdGVtcC1kYXRhXCIpO1xuICB0ZW1wRGl2LmlkID0gXCJjdXJyZW50LXRlbXAtZGF0YVwiO1xuICB0ZW1wRGl2LmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwibWFpbi1oaWdobG93XCIgaWQ9XCJtYWluLWhpZ2hsb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjdXJyZW50LWhpZ2hcIiBpZD1cImN1cnJlbnQtaGlnaFwiPkhpZ2g6ICR7TWF0aC5mbG9vcihcbiAgICAgICAgd2VhdGhlckRhdGEuZGFpbHlbMF0udGVtcC5tYXggLyAxXG4gICAgICApfcKwPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC1sb3dcIiBpZD1cImN1cnJlbnQtbG93XCI+TG93OiAke01hdGguZmxvb3IoXG4gICAgICAgIHdlYXRoZXJEYXRhLmRhaWx5WzBdLnRlbXAubWluXG4gICAgICApfcKwPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtdGVtcFwiIGlkPVwiY3VycmVudC10ZW1wXCI+XG4gICAgJHtNYXRoLmZsb29yKFxuICAgICAgd2VhdGhlckRhdGEuY3VycmVudC50ZW1wIC8gMVxuICAgICl9PHNwYW4gY2xhc3M9XCJjXCIgaWQ9XCJjXCI+wrAke2RlZ3JlZVR5cGV9PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmZWVscy1saWtlXCIgaWQ9XCJmZWVscy1saWtlXCI+RmVlbHMgbGlrZSAke01hdGguZmxvb3IoXG4gICAgICB3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzX2xpa2UgLyAxXG4gICAgKX3CsCR7ZGVncmVlVHlwZX08L2Rpdj5cbiAgICBgO1xuXG4gIHJldHVybiB0ZW1wRGl2O1xufVxuXG5mdW5jdGlvbiBjdXJyZW50Q29uZGl0aW9ucyh3ZWF0aGVyRGF0YSkge1xuICBjb25zdCBjb25kaXRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uZGl0aW9ucy5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb25kaXRpb25zXCIpO1xuICBjb25kaXRpb25zLmlkID0gXCJtYWluLWNvbmRpdGlvbnNcIjtcbiAgY29uZGl0aW9ucy5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cIm1haW4taWNvblwiIGlkPVwibWFpbi1pY29uXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgaWQ9XCJpY29uLWltZ1wiXG4gICAgICAgICAgICBzcmM9XCJodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3dlYXRoZXJEYXRhLmN1cnJlbnQud2VhdGhlclswXS5pY29ufUAyeC5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tZGVzY3JpcHRpb25cIiBpZD1cIm1haW4tZGVzY3JpcHRpb25cIj4ke3dlYXRoZXJEYXRhLmN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICBgO1xuICByZXR1cm4gY29uZGl0aW9ucztcbn1cblxuZnVuY3Rpb24gcGxhY2VOYW1lKGdlb2NvZGVEYXRhKSB7XG4gIGNvbnN0IHBsYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxhY2UuY2xhc3NMaXN0LmFkZChcImNpdHktbmFtZVwiKTtcbiAgcGxhY2UuaWQgPSBcImNpdHktbmFtZVwiO1xuICBwbGFjZS50ZXh0Q29udGVudCA9IGdlb2NvZGVEYXRhLmxhYmVsO1xuICByZXR1cm4gcGxhY2U7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlSG91cmx5KHdlYXRoZXJEYXRhKSB7XG4gIGNvbnN0IGhvdXJseUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG91cmx5LWZvcmVjYXN0XCIpO1xuICByZW1vdmVDaGlsZHJlbihob3VybHlDb250YWluZXIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpKyspIHtcbiAgICBob3VybHlDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3SG91ckluZm8od2VhdGhlckRhdGEuaG91cmx5W2ldKSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHBvcHVsYXRlTWFpbih3ZWF0aGVyRGF0YSwgZ2VvY29kZURhdGEpIHtcbiAgZ2V0VW5pdFR5cGUoKSA9PT0gXCJtZXRyaWNcIiA/IChkZWdyZWVUeXBlID0gXCJDXCIpIDogKGRlZ3JlZVR5cGUgPSBcIkZcIik7XG5cbiAgY29uc3QgbWFpbldlYXRoZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4td2VhdGhlclwiKTtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC10ZW1wLWRhdGFcIikpIHtcbiAgICBtYWluV2VhdGhlci5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtdGVtcC1kYXRhXCIpKTtcbiAgfVxuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbmRpdGlvbnNcIikpIHtcbiAgICBtYWluV2VhdGhlci5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tY29uZGl0aW9uc1wiKSk7XG4gIH1cbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2l0eS1uYW1lXCIpKSB7XG4gICAgbWFpbldlYXRoZXIucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaXR5LW5hbWVcIikpO1xuICB9XG5cbiAgbWFpbldlYXRoZXIuYXBwZW5kQ2hpbGQoY3VycmVudFRlbXAod2VhdGhlckRhdGEpKTtcbiAgbWFpbldlYXRoZXIuYXBwZW5kQ2hpbGQoY3VycmVudENvbmRpdGlvbnMod2VhdGhlckRhdGEpKTtcbiAgbWFpbldlYXRoZXIuYXBwZW5kQ2hpbGQocGxhY2VOYW1lKGdlb2NvZGVEYXRhKSk7XG4gIHBvcHVsYXRlSG91cmx5KHdlYXRoZXJEYXRhKTtcbn1cblxuZXhwb3J0IHsgcG9wdWxhdGVNYWluIH07XG4iLCJpbXBvcnQgeyBwb3B1bGF0ZUZyb21Vc2VyTG9jYXRpb24gfSBmcm9tIFwiLi91c2VyLWxvY2F0aW9uXCJcblxuaW1wb3J0IHsgcG9wdWxhdGVBbGxXZWF0aGVyRGF0YSB9IGZyb20gXCIuXCI7XG5cbmxldCB1bml0VHlwZSA9IFwiaW1wZXJpYWxcIjtcblxuY29uc3QgY2hhbmdlVW5pdHMgPSAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGlmIChlLnRhcmdldC5pZCA9PT0gXCJjXCIpIHVuaXRUeXBlID0gXCJtZXRyaWNcIjtcbiAgZWxzZSB1bml0VHlwZSA9IFwiaW1wZXJpYWxcIjtcbiAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtYmFyXCIpLnZhbHVlKSBwb3B1bGF0ZUFsbFdlYXRoZXJEYXRhKClcbiAgZWxzZSBwb3B1bGF0ZUZyb21Vc2VyTG9jYXRpb24oKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWVrbHktZm9yZWNhc3RcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKVxuXG5cbn07XG5cbmZ1bmN0aW9uIGhpZGVXZWVrbHkoKSB7XG4gIFxuICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWJ1dHRvblwiKTtcbiAgY29uc3Qgd2Vla2x5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWVrbHktZm9yZWNhc3RcIik7XG5cbiAgaWYgKG1lbnVCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgd2Vla2x5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9IGVsc2Uge1xuICAgIHdlZWtseS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBlbmRTcGFuKHBhcmVudCwgbnVtKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHNwYW4pO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5hdk1lbnUoKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIG5hdi5yb2xlID0gXCJuYXZpZ2F0aW9uXCI7XG4gIGNvbnN0IG1lbnVUb2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51VG9nZ2xlLmlkID0gXCJtZW51VG9nZ2xlXCI7XG4gIG5hdi5hcHBlbmRDaGlsZChtZW51VG9nZ2xlKTtcblxuICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBtZW51QnV0dG9uLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gIG1lbnVCdXR0b24uaWQgPSBcIm1lbnUtYnV0dG9uXCI7XG4gIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVXZWVrbHkpO1xuICBtZW51VG9nZ2xlLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuXG4gIGFwcGVuZFNwYW4obWVudVRvZ2dsZSwgMyk7XG5cbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHVsLmlkID0gXCJtZW51XCI7XG4gIG1lbnVUb2dnbGUuYXBwZW5kQ2hpbGQodWwpO1xuXG4gIGNvbnN0IGNmY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGNmY29udGFpbmVyLmlkID0gXCJjLWZcIjtcbiAgdWwuYXBwZW5kQ2hpbGQoY2Zjb250YWluZXIpO1xuXG4gIGNvbnN0IGMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjLmlkID0gXCJjXCI7XG4gIGMuY2xhc3NMaXN0LmFkZChcInVuaXRCdXR0b25cIik7XG4gIGMudGV4dENvbnRlbnQgPSBcIsKwQ1wiO1xuICBjLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNoYW5nZVVuaXRzKGUpO1xuICB9KTtcblxuICBjb25zdCBmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZi5pZCA9IFwiZlwiO1xuICBmLnRleHRDb250ZW50ID0gXCLCsEZcIjtcbiAgZi5jbGFzc0xpc3QuYWRkKFwidW5pdEJ1dHRvblwiKTtcbiAgZi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjaGFuZ2VVbml0cyhlKTtcbiAgfSk7XG4gIGNmY29udGFpbmVyLmFwcGVuZENoaWxkKGMpO1xuICBjZmNvbnRhaW5lci5hcHBlbmRDaGlsZChmKTtcbiAgY29uc3QgbWVudVRpdGxlcyA9IFtcIkhvbWVcIiwgXCJBYm91dFwiLCBcIkdpdGh1YlwiLF07XG5cbiAgbWVudVRpdGxlcy5mb3JFYWNoKCh0aXRsZSkgPT4ge1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBhLmhyZWYgPSBcIiNcIjtcbiAgICBhLmlubmVySFRNTCA9IGA8bGk+JHt0aXRsZX08L2xpPmA7XG4gICAgYS5pZCA9IHRpdGxlO1xuICAgIHVsLmFwcGVuZENoaWxkKGEpO1xuICB9KTtcbiAgcmV0dXJuIG5hdjtcbn1cblxuZnVuY3Rpb24gZ2V0VW5pdFR5cGUoKSB7XG4gIHJldHVybiB1bml0VHlwZTtcbn1cbmZ1bmN0aW9uIGdldERlZ3JlZXMoKSB7XG4gIHJldHVybiB1bml0VHlwZSA9PSBcIm1ldHJpY1wiID8gXCJDXCIgOiBcIkZcIjtcbn1cblxuZXhwb3J0IHsgbmF2TWVudSwgZ2V0VW5pdFR5cGUsIGdldERlZ3JlZXMgfTtcbiIsImltcG9ydCB7IHBvcHVsYXRlV2Vla2x5Rm9yZWNhc3QgfSBmcm9tIFwiLi93ZWVrbHktZm9yZWNhc3RcIjtcbmltcG9ydCB7IHBvcHVsYXRlTWFpbiB9IGZyb20gXCIuL21haW4td2VhdGhlclwiO1xuaW1wb3J0IHsgZ2V0V2VhdGhlciwgcmV2ZXJzZUdlb2NvZGUgfSBmcm9tIFwiLi9mb3JlY2FzdFwiO1xuXG52YXIgb3B0aW9ucyA9IHtcbiAgZW5hYmxlSGlnaEFjY3VyYWN5OiB0cnVlLFxuICB0aW1lb3V0OiA1MDAwLFxuICBtYXhpbXVtQWdlOiAwLFxufTtcblxuYXN5bmMgZnVuY3Rpb24gc3VjY2Vzcyhwb3MpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjcmQgPSBwb3MuY29vcmRzO1xuICAgIGNvbnNvbGUubG9nKGNyZCk7XG4gICAgY29uc3QgcmV2ZXJzZUdlb2NvZGVEYXRhID0gYXdhaXQgcmV2ZXJzZUdlb2NvZGUoXG4gICAgICBjcmQubGF0aXR1ZGUsXG4gICAgICBjcmQubG9uZ2l0dWRlXG4gICAgKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXIoY3JkLmxhdGl0dWRlLCBjcmQubG9uZ2l0dWRlKTtcbiAgICBjb25zb2xlLmxvZyhyZXZlcnNlR2VvY29kZURhdGEuZGF0YVswXS5sYWJlbCk7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICAgIHBvcHVsYXRlTWFpbih3ZWF0aGVyRGF0YSwgcmV2ZXJzZUdlb2NvZGVEYXRhLmRhdGFbMF0pO1xuICAgIHBvcHVsYXRlV2Vla2x5Rm9yZWNhc3Qod2VhdGhlckRhdGEpO1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtYnV0dG9uXCIpLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWVrbHktZm9yZWNhc3RcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkZXItY29udGFpbmVyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0gY2F0Y2gge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGVyLWNvbnRhaW5lclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9XG4gIHJldHVybiBjcmQ7XG59XG5cbmZ1bmN0aW9uIGVycm9yKGVycikge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRlci1jb250YWluZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgY29uc29sZS53YXJuKGBFUlJPUigke2Vyci5jb2RlfSk6ICR7ZXJyLm1lc3NhZ2V9YCk7XG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZXNzYWdlLmlkID0gXCJpbml0aWFsLW1lc3NhZ2VcIjtcbiAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwiaW5pdGlhbC1tZXNzYWdlXCIpO1xuICBtZXNzYWdlLnRleHRDb250ZW50ID0gXCJTZWFyY2ggZm9yIGEgY2l0eSBhbmQgcHJlc3MgJ0VudGVyJyB0byBnZXQgc3RhcnRlZFwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4td2VhdGhlclwiKS5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVGcm9tVXNlckxvY2F0aW9uKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRlci1jb250YWluZXJcIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihzdWNjZXNzLCBlcnJvciwgb3B0aW9ucyk7XG59XG5cbmV4cG9ydCB7IHBvcHVsYXRlRnJvbVVzZXJMb2NhdGlvbiB9O1xuIiwiY29uc3QgZDJkID0gcmVxdWlyZShcImRlZ3JlZXMtdG8tZGlyZWN0aW9uXCIpOyAvL2NvbnZlcnRzIHdpbmQgZGVncmVlcyB0byBhIGNvbXBhc3MgZGlyZWN0aW9uXG5pbXBvcnQgeyB1bml4IH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IGdldFVuaXRUeXBlIH0gZnJvbSBcIi4vbmF2XCI7XG5cbmxldCBkaXN0YW5jZVR5cGU7XG5cbmZ1bmN0aW9uIGNyZWF0ZVdlZWtseUZvcmVjYXN0KHdlYXRoZXJEYXRhKSB7XG4gIGxldCBmb3JlY2FzdExpc3QgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICBsZXQgZGF5O1xuICAgIGNvbnN0IGZvcmVjYXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JlY2FzdERpdi5jbGFzc0xpc3QuYWRkKFwiZGF5LWZvcmVjYXN0XCIpO1xuICAgIGlmIChpID09PSAwKSB7XG4gICAgICBkYXkgPSBcIlRvZGF5J3MgZm9yZWNhc3RcIjtcbiAgICAgIGZvcmVjYXN0RGl2LmlkID0gXCJ0b2RheS1mb3JlY2FzdFwiO1xuICAgIH0gZWxzZSBkYXkgPSB1bml4KHdlYXRoZXJEYXRhLmRhaWx5W2ldLmR0KS5kYXkoKTtcblxuICAgIGZvcmVjYXN0RGl2LmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiZGF5LW92ZXJ2aWV3XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGF5LW92ZXJ2aWV3LWxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRheS1uYW1lXCI+JHtkYXl9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkYXktZGVzY3JpcHRpb25cIj4ke1xuICAgICAgICAgIHdlYXRoZXJEYXRhLmRhaWx5W2ldLndlYXRoZXJbMF0uZGVzY3JpcHRpb25cbiAgICAgICAgfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGF5LW92ZXJ2aWV3LXJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkYXktaWNvblwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGNsYXNzPVwic21hbGwtaWNvbiBkYXktaWNvblwiXG4gICAgICAgICAgICBzcmM9XCJodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke1xuICAgICAgICAgICAgICB3ZWF0aGVyRGF0YS5kYWlseVtpXS53ZWF0aGVyWzBdLmljb25cbiAgICAgICAgICAgIH1AMngucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkYXktaGlnaGxvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXktaGlnaFwiPiR7TWF0aC5mbG9vcihcbiAgICAgICAgICAgIHdlYXRoZXJEYXRhLmRhaWx5W2ldLnRlbXAubWF4IC8gMVxuICAgICAgICAgICl9wrBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF5LWxvd1wiPiR7TWF0aC5mbG9vcih3ZWF0aGVyRGF0YS5kYWlseVtpXS50ZW1wLm1pbiAvIDEpfcKwXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHVsIGNsYXNzPVwiZGF5LWRldGFpbHNcIj5cbiAgICAgICAgPGxpPjxkaXY+UHJlY2lwaXRhdGlvbjwvZGl2PiA8ZGl2PiR7TWF0aC5mbG9vcihcbiAgICAgICAgICAod2VhdGhlckRhdGEuZGFpbHlbaV0ucG9wICogMTAwKSAvIDFcbiAgICAgICAgKX0lPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT48ZGl2PldpbmQ8L2Rpdj4gXG4gICAgICAgICAgPGRpdj4ke3dlYXRoZXJEYXRhLmRhaWx5W2ldLndpbmRfc3BlZWR9ICR7ZGlzdGFuY2VUeXBlfS9oIFxuICAgICAgICAgICR7ZDJkKHdlYXRoZXJEYXRhLmRhaWx5W2ldLndpbmRfZGVnKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPjxkaXY+SHVtaWRpdHk8L2Rpdj4gPGRpdj4ke3dlYXRoZXJEYXRhLmRhaWx5W2ldLmh1bWlkaXR5fSU8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPjxkaXY+VVYgSW5kZXg8L2Rpdj4gPGRpdj4ke3dlYXRoZXJEYXRhLmRhaWx5W2ldLnV2aX08L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPjxkaXY+U3VucmlzZS9TdW5zZXQ8L2Rpdj4gPGRpdj4ke3VuaXgoXG4gICAgICAgICAgd2VhdGhlckRhdGEuZGFpbHlbaV0uc3VucmlzZVxuICAgICAgICApLnRpbWUoKX0vJHt1bml4KHdlYXRoZXJEYXRhLmRhaWx5W2ldLnN1bnNldCkudGltZSgpfTwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgIDwvdWw+YDtcbiAgICBmb3JlY2FzdExpc3QucHVzaChmb3JlY2FzdERpdik7XG4gIH1cbiAgcmV0dXJuIGZvcmVjYXN0TGlzdDtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVXZWVrbHlGb3JlY2FzdCh3ZWF0aGVyRGF0YSkge1xuICBnZXRVbml0VHlwZSgpID09PSBcIm1ldHJpY1wiID8gKGRpc3RhbmNlVHlwZSA9IFwia21cIikgOiAoZGlzdGFuY2VUeXBlID0gXCJtaVwiKTtcblxuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWVrbHktZm9yZWNhc3RcIikpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2Vla2x5LWZvcmVjYXN0XCIpKTtcbiAgfVxuICBjb25zdCB3ZWVrbHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3ZWVrbHlEaXYuY2xhc3NMaXN0LmFkZChcIndlZWtseS1mb3JlY2FzdFwiKTtcbiAgd2Vla2x5RGl2LmlkID0gXCJ3ZWVrbHktZm9yZWNhc3RcIjtcbiAgd2Vla2x5RGl2LmlubmVySFRNTCA9IGBcbiAgPGhlYWRlciBjbGFzcz1cIndlZWtseS1oZWFkZXJcIiBpZD1cIndlZWtseS1oZWFkZXJcIj5cbiAgPHA+XjwvcD5cbiAgPGRpdj44LWRheSBmb3JlY2FzdDo8L2Rpdj5cbiAgPC9oZWFkZXI+YDtcbiAgY3JlYXRlV2Vla2x5Rm9yZWNhc3Qod2VhdGhlckRhdGEpLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICB3ZWVrbHlEaXYuYXBwZW5kQ2hpbGQobm9kZSk7XG4gIH0pO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdlZWtseURpdik7XG59XG5cbmV4cG9ydCB7IHBvcHVsYXRlV2Vla2x5Rm9yZWNhc3QgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=