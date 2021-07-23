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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --blue: #051f38;\n  --white: #ffffff;\n  --dark: rgb(48, 47, 47);\n}\nhtml {\n  width: 100%;\n  height: 100%;\n  font-family: sans-serif;\n}\nbody {\n  width: 100%;\n  height: 100%;\n  background-color: var(--blue);\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  grid-template-rows: repeat(15, 1fr);\n  color: ghostwhite;\n}\n\n.main-weather {\n  position: fixed;\n  height: 90%;\n  width: 100%;\n  background-color: var(--dark);\n  grid-column: 1/13;\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  grid-template-rows: repeat(12, 1fr);\n  padding: 20px;\n  box-sizing: border-box;\n}\nform {\n  grid-column: 2/12;\n  grid-row: 1/2;\n  justify-content: center;\n  align-items: center;\n}\nform input {\n  width: 97%;\n  height: 70%;\n}\n.initial-message{\n  grid-column: 2/12;\n  grid-row: 3/4;\n  align-self: center;\n  align-self: center;\n  text-align: center;\n}\n.current-temp-data {\n  grid-row: 2/7;\n  grid-column: 1/6;\n  padding: 4%;\n}\n.main-highlow {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 15px;\n}\n.current-temp {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  font-size: 6em;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.c {\n  font-size: 0.5em;\n}\n.feels-like {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main-conditions {\n  grid-row: 3/8;\n  grid-column: 8/13;\n}\n.main-conditions div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.main-icon {\n  margin-top: 30px;\n}\n.city-name {\n  grid-row: 7/9;\n  grid-column: 1/10;\n  font-size: 1.3em;\n  padding: 2%;\n  display: flex;\n  align-items: center;\n}\n.hourly-forecast {\n  grid-row: 9/13;\n  grid-column: 1/13;\n  display: flex;\n  overflow: scroll;\n  align-items: center;\n}\n.hour-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  border: 1px solid black;\n  border-radius: 4px;\n  margin: 10px;\n  margin-top: 0;\n  margin-bottom: 0;\n  height: 96%;\n  min-width: 70px;\n}\n.small-icon {\n  width: 60px;\n  margin-top: -10px;\n  margin-bottom: -10px;\n}\n.hour-precip {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.8em;\n}\n\n/******* Weekly Forecast ********/\n\n.weekly-forecast {\n  margin-top: 10%;\n  z-index: 10;\n  grid-row: 14/16;\n  grid-column: 1/13;\n  transition: ease-in-out .4s;\n\n}\n.weekly-forecast.hidden{\n  margin-top:1000%;\n  transition: ease-in-out .6s;\n}\n.weekly-forecast header{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgba(17, 16, 16, 0.953);\n  font-size: 1.3em;\n  padding-bottom: 10px;;\n}\n.weekly-forecast p{\n  background-color: rgba(17, 16, 16, 0.953);\n  margin-top: -6px;\n  width: 20%;\n  text-align: center;\n  border-radius: 5px;\n  color:white;\n}\n#today-forecast {\n  margin-top: 0px;\n/*   border-top-left-radius: 15px;\n  border-top-right-radius: 15px; */\n\n}\n.day-forecast {\n  border-top: 1px solid black;\n  margin-top: 0px;\n  background-color: rgba(17, 16, 16, 0.953);\n  backdrop-filter: blur(6px);\n  color: white;\n  padding: 10px;\n}\n\n.day-overview {\n  display: flex;\n  justify-content: space-between;\n}\n.day-name {\n  font-size: 1.3em;\n}\n\n.day-overview-right {\n  display: flex;\n  align-items: center;\n}\n.forecast-expand {\n  margin-left: 20px;\n  padding-top: 20px;\n  font-size: 1.5em;\n  transform: rotate(180deg);\n}\n\n.day-details li {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 6px;\n  padding-right: 10%;\n  padding-left: 10%;\n}\n\n/****Nav Menu*****/\n\nnav {\n  height: 100%;\n}\na {\n  text-decoration: none !important;\n  color: #232323;\n  transition: color 0.3s ease;\n}\n\na:hover {\n  color: #2ecc71;\n}\n\n#menuToggle {\n  height: 100%;\n  display: block;\n  position: fixed;\n  top: 27px;\n  right: 2.5%;\n  z-index: 1;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n#menuToggle input {\n  display: block;\n  width: 40px;\n  height: 32px;\n  position: absolute;\n  top: -7px;\n  left: -5px;\n  cursor: pointer;\n  opacity: 0;\n  z-index: 10;\n  -webkit-touch-callout: none;\n}\n\n#menuToggle span {\n  display: block;\n  width: 33px;\n  height: 4px;\n  margin-bottom: 5px;\n  position: relative;\n  background: #cdcdcd;\n  border-radius: 3px;\n  z-index: 5;\n  transform-origin: 4px 0px;\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),\n    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;\n}\n\n#menuToggle span:first-child {\n  transform-origin: 0% 0%;\n}\n\n#menuToggle span:nth-last-child(2) {\n  transform-origin: 0% 100%;\n}\n\n#menuToggle input:checked ~ span {\n  opacity: 1;\n  transform: rotate(45deg) translate(-2px, -1px);\n  background: #232323;\n}\n\n#menuToggle input:checked ~ span:nth-last-child(3) {\n  opacity: 0;\n  transform: rotate(0deg) scale(0.2, 0.2);\n}\n\n#menuToggle input:checked ~ span:nth-last-child(2) {\n  opacity: 1;\n  transform: rotate(-45deg) translate(0, -1px);\n}\n\n#menu {\n  position: absolute;\n  width: 200px;\n  height: 100%;\n  margin: -100px 0 0 0;\n  padding: 50px;\n  padding-top: 125px;\n  right: -100px;\n  background: #ededed;\n  list-style-type: none;\n  -webkit-font-smoothing: antialiased;\n  transform-origin: 0% 0%;\n  transform: translate(100%, 0);\n\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n}\n\n#menu li {\n  padding: 10px 0;\n  font-size: 22px;\n}\n\n#menuToggle input:checked ~ ul {\n  transform: scale(1, 1);\n  opacity: 1;\n}\n\n/*Loader*/\n.loader {\n  border: 16px solid #f3f3f3; /* Light grey */\n  border-top: 16px solid #3498db; /* Blue */\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  animation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,gBAAgB;EAChB,uBAAuB;AACzB;AACA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;AACzB;AACA;EACE,WAAW;EACX,YAAY;EACZ,6BAA6B;EAC7B,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,WAAW;EACX,6BAA6B;EAC7B,iBAAiB;EACjB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,UAAU;EACV,WAAW;AACb;AACA;EACE,iBAAiB;EACjB,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,gBAAgB;EAChB,WAAW;AACb;AACA;EACE,aAAa;EACb,6BAA6B;EAC7B,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,cAAc;EACd,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,iBAAiB;EACjB,gBAAgB;EAChB,WAAW;EACX,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,cAAc;EACd,iBAAiB;EACjB,aAAa;EACb,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;EAC7B,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,WAAW;EACX,eAAe;AACjB;AACA;EACE,WAAW;EACX,iBAAiB;EACjB,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA,iCAAiC;;AAEjC;EACE,eAAe;EACf,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,2BAA2B;;AAE7B;AACA;EACE,gBAAgB;EAChB,2BAA2B;AAC7B;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,yCAAyC;EACzC,gBAAgB;EAChB,oBAAoB;AACtB;AACA;EACE,yCAAyC;EACzC,gBAAgB;EAChB,UAAU;EACV,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,eAAe;AACjB;kCACkC;;AAElC;AACA;EACE,2BAA2B;EAC3B,eAAe;EACf,yCAAyC;EACzC,0BAA0B;EAC1B,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;EACf,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA,kBAAkB;;AAElB;EACE,YAAY;AACd;AACA;EACE,gCAAgC;EAChC,cAAc;EACd,2BAA2B;AAC7B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,eAAe;EACf,SAAS;EACT,WAAW;EACX,UAAU;EACV,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,eAAe;EACf,UAAU;EACV,WAAW;EACX,2BAA2B;AAC7B;;AAEA;EACE,cAAc;EACd,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,UAAU;EACV,yBAAyB;EACzB;wEACsE;AACxE;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,UAAU;EACV,8CAA8C;EAC9C,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,uCAAuC;AACzC;;AAEA;EACE,UAAU;EACV,4CAA4C;AAC9C;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,oBAAoB;EACpB,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,mCAAmC;EACnC,uBAAuB;EACvB,6BAA6B;;EAE7B,2DAA2D;AAC7D;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,UAAU;AACZ;;AAEA,SAAS;AACT;EACE,0BAA0B,EAAE,eAAe;EAC3C,8BAA8B,EAAE,SAAS;EACzC,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,kCAAkC;AACpC;;AAEA;EACE,KAAK,uBAAuB,EAAE;EAC9B,OAAO,yBAAyB,EAAE;AACpC","sourcesContent":[":root {\n  --blue: #051f38;\n  --white: #ffffff;\n  --dark: rgb(48, 47, 47);\n}\nhtml {\n  width: 100%;\n  height: 100%;\n  font-family: sans-serif;\n}\nbody {\n  width: 100%;\n  height: 100%;\n  background-color: var(--blue);\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  grid-template-rows: repeat(15, 1fr);\n  color: ghostwhite;\n}\n\n.main-weather {\n  position: fixed;\n  height: 90%;\n  width: 100%;\n  background-color: var(--dark);\n  grid-column: 1/13;\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  grid-template-rows: repeat(12, 1fr);\n  padding: 20px;\n  box-sizing: border-box;\n}\nform {\n  grid-column: 2/12;\n  grid-row: 1/2;\n  justify-content: center;\n  align-items: center;\n}\nform input {\n  width: 97%;\n  height: 70%;\n}\n.initial-message{\n  grid-column: 2/12;\n  grid-row: 3/4;\n  align-self: center;\n  align-self: center;\n  text-align: center;\n}\n.current-temp-data {\n  grid-row: 2/7;\n  grid-column: 1/6;\n  padding: 4%;\n}\n.main-highlow {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 15px;\n}\n.current-temp {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  font-size: 6em;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.c {\n  font-size: 0.5em;\n}\n.feels-like {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main-conditions {\n  grid-row: 3/8;\n  grid-column: 8/13;\n}\n.main-conditions div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.main-icon {\n  margin-top: 30px;\n}\n.city-name {\n  grid-row: 7/9;\n  grid-column: 1/10;\n  font-size: 1.3em;\n  padding: 2%;\n  display: flex;\n  align-items: center;\n}\n.hourly-forecast {\n  grid-row: 9/13;\n  grid-column: 1/13;\n  display: flex;\n  overflow: scroll;\n  align-items: center;\n}\n.hour-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  border: 1px solid black;\n  border-radius: 4px;\n  margin: 10px;\n  margin-top: 0;\n  margin-bottom: 0;\n  height: 96%;\n  min-width: 70px;\n}\n.small-icon {\n  width: 60px;\n  margin-top: -10px;\n  margin-bottom: -10px;\n}\n.hour-precip {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.8em;\n}\n\n/******* Weekly Forecast ********/\n\n.weekly-forecast {\n  margin-top: 10%;\n  z-index: 10;\n  grid-row: 14/16;\n  grid-column: 1/13;\n  transition: ease-in-out .4s;\n\n}\n.weekly-forecast.hidden{\n  margin-top:1000%;\n  transition: ease-in-out .6s;\n}\n.weekly-forecast header{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgba(17, 16, 16, 0.953);\n  font-size: 1.3em;\n  padding-bottom: 10px;;\n}\n.weekly-forecast p{\n  background-color: rgba(17, 16, 16, 0.953);\n  margin-top: -6px;\n  width: 20%;\n  text-align: center;\n  border-radius: 5px;\n  color:white;\n}\n#today-forecast {\n  margin-top: 0px;\n/*   border-top-left-radius: 15px;\n  border-top-right-radius: 15px; */\n\n}\n.day-forecast {\n  border-top: 1px solid black;\n  margin-top: 0px;\n  background-color: rgba(17, 16, 16, 0.953);\n  backdrop-filter: blur(6px);\n  color: white;\n  padding: 10px;\n}\n\n.day-overview {\n  display: flex;\n  justify-content: space-between;\n}\n.day-name {\n  font-size: 1.3em;\n}\n\n.day-overview-right {\n  display: flex;\n  align-items: center;\n}\n.forecast-expand {\n  margin-left: 20px;\n  padding-top: 20px;\n  font-size: 1.5em;\n  transform: rotate(180deg);\n}\n\n.day-details li {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 6px;\n  padding-right: 10%;\n  padding-left: 10%;\n}\n\n/****Nav Menu*****/\n\nnav {\n  height: 100%;\n}\na {\n  text-decoration: none !important;\n  color: #232323;\n  transition: color 0.3s ease;\n}\n\na:hover {\n  color: #2ecc71;\n}\n\n#menuToggle {\n  height: 100%;\n  display: block;\n  position: fixed;\n  top: 27px;\n  right: 2.5%;\n  z-index: 1;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n#menuToggle input {\n  display: block;\n  width: 40px;\n  height: 32px;\n  position: absolute;\n  top: -7px;\n  left: -5px;\n  cursor: pointer;\n  opacity: 0;\n  z-index: 10;\n  -webkit-touch-callout: none;\n}\n\n#menuToggle span {\n  display: block;\n  width: 33px;\n  height: 4px;\n  margin-bottom: 5px;\n  position: relative;\n  background: #cdcdcd;\n  border-radius: 3px;\n  z-index: 5;\n  transform-origin: 4px 0px;\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),\n    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;\n}\n\n#menuToggle span:first-child {\n  transform-origin: 0% 0%;\n}\n\n#menuToggle span:nth-last-child(2) {\n  transform-origin: 0% 100%;\n}\n\n#menuToggle input:checked ~ span {\n  opacity: 1;\n  transform: rotate(45deg) translate(-2px, -1px);\n  background: #232323;\n}\n\n#menuToggle input:checked ~ span:nth-last-child(3) {\n  opacity: 0;\n  transform: rotate(0deg) scale(0.2, 0.2);\n}\n\n#menuToggle input:checked ~ span:nth-last-child(2) {\n  opacity: 1;\n  transform: rotate(-45deg) translate(0, -1px);\n}\n\n#menu {\n  position: absolute;\n  width: 200px;\n  height: 100%;\n  margin: -100px 0 0 0;\n  padding: 50px;\n  padding-top: 125px;\n  right: -100px;\n  background: #ededed;\n  list-style-type: none;\n  -webkit-font-smoothing: antialiased;\n  transform-origin: 0% 0%;\n  transform: translate(100%, 0);\n\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n}\n\n#menu li {\n  padding: 10px 0;\n  font-size: 22px;\n}\n\n#menuToggle input:checked ~ ul {\n  transform: scale(1, 1);\n  opacity: 1;\n}\n\n/*Loader*/\n.loader {\n  border: 16px solid #f3f3f3; /* Light grey */\n  border-top: 16px solid #3498db; /* Blue */\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  animation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}"],"sourceRoot":""}]);
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
  if (document.getElementById("menu-button").classList.contains("active"))
    document.getElementById("weekly-forecast").classList.add("hidden");
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
  const crd = pos.coords;
  console.log(crd);
  const reverseGeocodeData = await (0,_forecast__WEBPACK_IMPORTED_MODULE_2__.reverseGeocode)(crd.latitude, crd.longitude);
  const weatherData = await (0,_forecast__WEBPACK_IMPORTED_MODULE_2__.getWeather)(crd.latitude, crd.longitude);
  console.log(reverseGeocodeData.data[0].label);
  console.log(weatherData);

  (0,_main_weather__WEBPACK_IMPORTED_MODULE_1__.populateMain)(weatherData, reverseGeocodeData.data[0]);
  (0,_weekly_forecast__WEBPACK_IMPORTED_MODULE_0__.populateWeeklyForecast)(weatherData);
  if (document.getElementById("menu-button").classList.contains("active"))
    document.getElementById("weekly-forecast").classList.add("hidden");

  return crd;
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
  const message = document.createElement("div")
  message.id = "initial-message"
  message.classList.add("initial-message")
  message.textContent = "Search for a city and press 'Enter' to get started"
  document.getElementById("main-weather").appendChild(message)


}

function populateFromUserLocation() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrMS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjazEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazEvLi9ub2RlX21vZHVsZXMvZGVncmVlcy10by1kaXJlY3Rpb24vbGliLmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2sxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazEvLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vc3JjL2ZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vc3JjL21haW4td2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrMS8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazEvLi9zcmMvdXNlci1sb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrMS8uL3NyYy93ZWVrbHktZm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjazEvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjazEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2sxL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjazEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrMS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLGlEQUFpRCxvQkFBb0IscUJBQXFCLDRCQUE0QixHQUFHLFFBQVEsZ0JBQWdCLGlCQUFpQiw0QkFBNEIsR0FBRyxRQUFRLGdCQUFnQixpQkFBaUIsa0NBQWtDLGtCQUFrQiwyQ0FBMkMsd0NBQXdDLHNCQUFzQixHQUFHLG1CQUFtQixvQkFBb0IsZ0JBQWdCLGdCQUFnQixrQ0FBa0Msc0JBQXNCLGtCQUFrQiwyQ0FBMkMsd0NBQXdDLGtCQUFrQiwyQkFBMkIsR0FBRyxRQUFRLHNCQUFzQixrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLGNBQWMsZUFBZSxnQkFBZ0IsR0FBRyxtQkFBbUIsc0JBQXNCLGtCQUFrQix1QkFBdUIsdUJBQXVCLHVCQUF1QixHQUFHLHNCQUFzQixrQkFBa0IscUJBQXFCLGdCQUFnQixHQUFHLGlCQUFpQixrQkFBa0Isa0NBQWtDLHFCQUFxQixHQUFHLGlCQUFpQixrQkFBa0IsNEJBQTRCLDRCQUE0QixtQkFBbUIscUJBQXFCLHdCQUF3QixHQUFHLE1BQU0scUJBQXFCLEdBQUcsZUFB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VUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGNBQWMsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxPQUFPLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUss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QUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsaUNBQWlDLDhDQUE4QztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxpQkFBaUIsZ0NBQWdDLEdBQUcsYUFBYTtBQUNqRSxZQUFZO0FBQ1o7QUFDQTtBQUNBLHVDQUF1Qyw4QkFBOEI7QUFDckU7QUFDQSx1Q0FBdUMseUJBQXlCO0FBQ2hFO0FBQ0EsNkNBQTZDLHVDQUFJO0FBQ2pEO0FBQ0EsaUJBQWlCLEdBQUcsdUNBQUkscUNBQXFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsaURBQVc7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFa0M7Ozs7Ozs7VUN6RmxDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1ibHVlOiAjMDUxZjM4O1xcbiAgLS13aGl0ZTogI2ZmZmZmZjtcXG4gIC0tZGFyazogcmdiKDQ4LCA0NywgNDcpO1xcbn1cXG5odG1sIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDE1LCAxZnIpO1xcbiAgY29sb3I6IGdob3N0d2hpdGU7XFxufVxcblxcbi5tYWluLXdlYXRoZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgZ3JpZC1jb2x1bW46IDEvMTM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMiwgMWZyKTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5mb3JtIHtcXG4gIGdyaWQtY29sdW1uOiAyLzEyO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuZm9ybSBpbnB1dCB7XFxuICB3aWR0aDogOTclO1xcbiAgaGVpZ2h0OiA3MCU7XFxufVxcbi5pbml0aWFsLW1lc3NhZ2V7XFxuICBncmlkLWNvbHVtbjogMi8xMjtcXG4gIGdyaWQtcm93OiAzLzQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5jdXJyZW50LXRlbXAtZGF0YSB7XFxuICBncmlkLXJvdzogMi83O1xcbiAgZ3JpZC1jb2x1bW46IDEvNjtcXG4gIHBhZGRpbmc6IDQlO1xcbn1cXG4ubWFpbi1oaWdobG93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcbi5jdXJyZW50LXRlbXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmb250LXNpemU6IDZlbTtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4uYyB7XFxuICBmb250LXNpemU6IDAuNWVtO1xcbn1cXG4uZmVlbHMtbGlrZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubWFpbi1jb25kaXRpb25zIHtcXG4gIGdyaWQtcm93OiAzLzg7XFxuICBncmlkLWNvbHVtbjogOC8xMztcXG59XFxuLm1haW4tY29uZGl0aW9ucyBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLm1haW4taWNvbiB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG4uY2l0eS1uYW1lIHtcXG4gIGdyaWQtcm93OiA3Lzk7XFxuICBncmlkLWNvbHVtbjogMS8xMDtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxuICBwYWRkaW5nOiAyJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaG91cmx5LWZvcmVjYXN0IHtcXG4gIGdyaWQtcm93OiA5LzEzO1xcbiAgZ3JpZC1jb2x1bW46IDEvMTM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5ob3VyLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG1hcmdpbjogMTBweDtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiA5NiU7XFxuICBtaW4td2lkdGg6IDcwcHg7XFxufVxcbi5zbWFsbC1pY29uIHtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgbWFyZ2luLXRvcDogLTEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcXG59XFxuLmhvdXItcHJlY2lwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG59XFxuXFxuLyoqKioqKiogV2Vla2x5IEZvcmVjYXN0ICoqKioqKioqL1xcblxcbi53ZWVrbHktZm9yZWNhc3Qge1xcbiAgbWFyZ2luLXRvcDogMTAlO1xcbiAgei1pbmRleDogMTA7XFxuICBncmlkLXJvdzogMTQvMTY7XFxuICBncmlkLWNvbHVtbjogMS8xMztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IC40cztcXG5cXG59XFxuLndlZWtseS1mb3JlY2FzdC5oaWRkZW57XFxuICBtYXJnaW4tdG9wOjEwMDAlO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgLjZzO1xcbn1cXG4ud2Vla2x5LWZvcmVjYXN0IGhlYWRlcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcsIDE2LCAxNiwgMC45NTMpO1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4OztcXG59XFxuLndlZWtseS1mb3JlY2FzdCBwe1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNywgMTYsIDE2LCAwLjk1Myk7XFxuICBtYXJnaW4tdG9wOiAtNnB4O1xcbiAgd2lkdGg6IDIwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOndoaXRlO1xcbn1cXG4jdG9kYXktZm9yZWNhc3Qge1xcbiAgbWFyZ2luLXRvcDogMHB4O1xcbi8qICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4OyAqL1xcblxcbn1cXG4uZGF5LWZvcmVjYXN0IHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbi10b3A6IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcsIDE2LCAxNiwgMC45NTMpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDZweCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZGF5LW92ZXJ2aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5kYXktbmFtZSB7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbn1cXG5cXG4uZGF5LW92ZXJ2aWV3LXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZm9yZWNhc3QtZXhwYW5kIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuLmRheS1kZXRhaWxzIGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tdG9wOiA2cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG59XFxuXFxuLyoqKipOYXYgTWVudSoqKioqL1xcblxcbm5hdiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogIzIzMjMyMztcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXG59XFxuXFxuYTpob3ZlciB7XFxuICBjb2xvcjogIzJlY2M3MTtcXG59XFxuXFxuI21lbnVUb2dnbGUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDI3cHg7XFxuICByaWdodDogMi41JTtcXG4gIHotaW5kZXg6IDE7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbiNtZW51VG9nZ2xlIGlucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC03cHg7XFxuICBsZWZ0OiAtNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcbn1cXG5cXG4jbWVudVRvZ2dsZSBzcGFuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDMzcHg7XFxuICBoZWlnaHQ6IDRweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6ICNjZGNkY2Q7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICB6LWluZGV4OiA1O1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogNHB4IDBweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjc3LCAwLjIsIDAuMDUsIDEpLFxcbiAgICBiYWNrZ3JvdW5kIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAuMiwgMC4wNSwgMSksIG9wYWNpdHkgMC41NXMgZWFzZTtcXG59XFxuXFxuI21lbnVUb2dnbGUgc3BhbjpmaXJzdC1jaGlsZCB7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcXG59XFxuXFxuI21lbnVUb2dnbGUgc3BhbjpudGgtbGFzdC1jaGlsZCgyKSB7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xcbn1cXG5cXG4jbWVudVRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gc3BhbiB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtMnB4LCAtMXB4KTtcXG4gIGJhY2tncm91bmQ6ICMyMzIzMjM7XFxufVxcblxcbiNtZW51VG9nZ2xlIGlucHV0OmNoZWNrZWQgfiBzcGFuOm50aC1sYXN0LWNoaWxkKDMpIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgwLjIsIDAuMik7XFxufVxcblxcbiNtZW51VG9nZ2xlIGlucHV0OmNoZWNrZWQgfiBzcGFuOm50aC1sYXN0LWNoaWxkKDIpIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgwLCAtMXB4KTtcXG59XFxuXFxuI21lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAtMTAwcHggMCAwIDA7XFxuICBwYWRkaW5nOiA1MHB4O1xcbiAgcGFkZGluZy10b3A6IDEyNXB4O1xcbiAgcmlnaHQ6IC0xMDBweDtcXG4gIGJhY2tncm91bmQ6ICNlZGVkZWQ7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgMCk7XFxuXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC43NywgMC4yLCAwLjA1LCAxKTtcXG59XFxuXFxuI21lbnUgbGkge1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4jbWVudVRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gdWwge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi8qTG9hZGVyKi9cXG4ubG9hZGVyIHtcXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzOyAvKiBMaWdodCBncmV5ICovXFxuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7IC8qIEJsdWUgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUEsaUNBQWlDOztBQUVqQztFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiwyQkFBMkI7O0FBRTdCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix5Q0FBeUM7RUFDekMsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UseUNBQXlDO0VBQ3pDLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7QUFDakI7a0NBQ2tDOztBQUVsQztBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZix5Q0FBeUM7RUFDekMsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBLGtCQUFrQjs7QUFFbEI7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0VBQ1gsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixlQUFlO0VBQ2YsVUFBVTtFQUNWLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHlCQUF5QjtFQUN6Qjt3RUFDc0U7QUFDeEU7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsOENBQThDO0VBQzlDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsbUNBQW1DO0VBQ25DLHVCQUF1QjtFQUN2Qiw2QkFBNkI7O0VBRTdCLDJEQUEyRDtBQUM3RDs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjs7QUFFQSxTQUFTO0FBQ1Q7RUFDRSwwQkFBMEIsRUFBRSxlQUFlO0VBQzNDLDhCQUE4QixFQUFFLFNBQVM7RUFDekMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsS0FBSyx1QkFBdUIsRUFBRTtFQUM5QixPQUFPLHlCQUF5QixFQUFFO0FBQ3BDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tYmx1ZTogIzA1MWYzODtcXG4gIC0td2hpdGU6ICNmZmZmZmY7XFxuICAtLWRhcms6IHJnYig0OCwgNDcsIDQ3KTtcXG59XFxuaHRtbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxNSwgMWZyKTtcXG4gIGNvbG9yOiBnaG9zdHdoaXRlO1xcbn1cXG5cXG4ubWFpbi13ZWF0aGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gIGdyaWQtY29sdW1uOiAxLzEzO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTIsIDFmcik7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuZm9ybSB7XFxuICBncmlkLWNvbHVtbjogMi8xMjtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmZvcm0gaW5wdXQge1xcbiAgd2lkdGg6IDk3JTtcXG4gIGhlaWdodDogNzAlO1xcbn1cXG4uaW5pdGlhbC1tZXNzYWdle1xcbiAgZ3JpZC1jb2x1bW46IDIvMTI7XFxuICBncmlkLXJvdzogMy80O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uY3VycmVudC10ZW1wLWRhdGEge1xcbiAgZ3JpZC1yb3c6IDIvNztcXG4gIGdyaWQtY29sdW1uOiAxLzY7XFxuICBwYWRkaW5nOiA0JTtcXG59XFxuLm1haW4taGlnaGxvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG4uY3VycmVudC10ZW1wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZm9udC1zaXplOiA2ZW07XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLmMge1xcbiAgZm9udC1zaXplOiAwLjVlbTtcXG59XFxuLmZlZWxzLWxpa2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1haW4tY29uZGl0aW9ucyB7XFxuICBncmlkLXJvdzogMy84O1xcbiAgZ3JpZC1jb2x1bW46IDgvMTM7XFxufVxcbi5tYWluLWNvbmRpdGlvbnMgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5tYWluLWljb24ge1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuLmNpdHktbmFtZSB7XFxuICBncmlkLXJvdzogNy85O1xcbiAgZ3JpZC1jb2x1bW46IDEvMTA7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbiAgcGFkZGluZzogMiU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhvdXJseS1mb3JlY2FzdCB7XFxuICBncmlkLXJvdzogOS8xMztcXG4gIGdyaWQtY29sdW1uOiAxLzEzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaG91ci1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXJnaW46IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIGhlaWdodDogOTYlO1xcbiAgbWluLXdpZHRoOiA3MHB4O1xcbn1cXG4uc21hbGwtaWNvbiB7XFxuICB3aWR0aDogNjBweDtcXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XFxufVxcbi5ob3VyLXByZWNpcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxufVxcblxcbi8qKioqKioqIFdlZWtseSBGb3JlY2FzdCAqKioqKioqKi9cXG5cXG4ud2Vla2x5LWZvcmVjYXN0IHtcXG4gIG1hcmdpbi10b3A6IDEwJTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgZ3JpZC1yb3c6IDE0LzE2O1xcbiAgZ3JpZC1jb2x1bW46IDEvMTM7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAuNHM7XFxuXFxufVxcbi53ZWVrbHktZm9yZWNhc3QuaGlkZGVue1xcbiAgbWFyZ2luLXRvcDoxMDAwJTtcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IC42cztcXG59XFxuLndlZWtseS1mb3JlY2FzdCBoZWFkZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3LCAxNiwgMTYsIDAuOTUzKTtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDs7XFxufVxcbi53ZWVrbHktZm9yZWNhc3QgcHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcsIDE2LCAxNiwgMC45NTMpO1xcbiAgbWFyZ2luLXRvcDogLTZweDtcXG4gIHdpZHRoOiAyMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjp3aGl0ZTtcXG59XFxuI3RvZGF5LWZvcmVjYXN0IHtcXG4gIG1hcmdpbi10b3A6IDBweDtcXG4vKiAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDsgKi9cXG5cXG59XFxuLmRheS1mb3JlY2FzdCB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW4tdG9wOiAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3LCAxNiwgMTYsIDAuOTUzKTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig2cHgpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmRheS1vdmVydmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uZGF5LW5hbWUge1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG59XFxuXFxuLmRheS1vdmVydmlldy1yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZvcmVjYXN0LWV4cGFuZCB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcblxcbi5kYXktZGV0YWlscyBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLXRvcDogNnB4O1xcbiAgcGFkZGluZy1yaWdodDogMTAlO1xcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XFxufVxcblxcbi8qKioqTmF2IE1lbnUqKioqKi9cXG5cXG5uYXYge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbiAgY29sb3I6ICMyMzIzMjM7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgY29sb3I6ICMyZWNjNzE7XFxufVxcblxcbiNtZW51VG9nZ2xlIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAyN3B4O1xcbiAgcmlnaHQ6IDIuNSU7XFxuICB6LWluZGV4OiAxO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jbWVudVRvZ2dsZSBpbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtN3B4O1xcbiAgbGVmdDogLTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDA7XFxuICB6LWluZGV4OiAxMDtcXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG59XFxuXFxuI21lbnVUb2dnbGUgc3BhbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAzM3B4O1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiAjY2RjZGNkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgei1pbmRleDogNTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDRweCAwcHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC43NywgMC4yLCAwLjA1LCAxKSxcXG4gICAgYmFja2dyb3VuZCAwLjVzIGN1YmljLWJlemllcigwLjc3LCAwLjIsIDAuMDUsIDEpLCBvcGFjaXR5IDAuNTVzIGVhc2U7XFxufVxcblxcbiNtZW51VG9nZ2xlIHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxufVxcblxcbiNtZW51VG9nZ2xlIHNwYW46bnRoLWxhc3QtY2hpbGQoMikge1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcXG59XFxuXFxuI21lbnVUb2dnbGUgaW5wdXQ6Y2hlY2tlZCB+IHNwYW4ge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLTJweCwgLTFweCk7XFxuICBiYWNrZ3JvdW5kOiAjMjMyMzIzO1xcbn1cXG5cXG4jbWVudVRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gc3BhbjpudGgtbGFzdC1jaGlsZCgzKSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMC4yLCAwLjIpO1xcbn1cXG5cXG4jbWVudVRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gc3BhbjpudGgtbGFzdC1jaGlsZCgyKSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoMCwgLTFweCk7XFxufVxcblxcbiNtZW51IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogLTEwMHB4IDAgMCAwO1xcbiAgcGFkZGluZzogNTBweDtcXG4gIHBhZGRpbmctdG9wOiAxMjVweDtcXG4gIHJpZ2h0OiAtMTAwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsIDApO1xcblxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAuMiwgMC4wNSwgMSk7XFxufVxcblxcbiNtZW51IGxpIHtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuI21lbnVUb2dnbGUgaW5wdXQ6Y2hlY2tlZCB+IHVsIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4vKkxvYWRlciovXFxuLmxvYWRlciB7XFxuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMzsgLyogTGlnaHQgZ3JleSAqL1xcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiOyAvKiBCbHVlICovXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMTIwcHg7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZCkge1xuICBpZiAodHlwZW9mIGQgIT09ICdudW1iZXInIHx8IGlzTmFOKGQpKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgLy8ga2VlcCB3aXRoaW4gdGhlIHJhbmdlOiAwIDw9IGQgPCAzNjBcbiAgZCA9IGQgJSAzNjA7XG5cbiAgaWYgKDExLjI1IDw9IGQgJiYgZCA8IDMzLjc1KSB7XG4gICAgcmV0dXJuIFwiTk5FXCI7XG4gIH0gZWxzZSBpZiAoMzMuNzUgPD0gZCAmJiBkIDwgNTYuMjUpIHtcbiAgICByZXR1cm4gXCJORVwiO1xuICB9IGVsc2UgaWYgKDU2LjI1IDw9IGQgJiYgZCA8IDc4Ljc1KSB7XG4gICAgcmV0dXJuIFwiRU5FXCI7XG4gIH0gZWxzZSBpZiAoNzguNzUgPD0gZCAmJiBkIDwgMTAxLjI1KSB7XG4gICAgcmV0dXJuIFwiRVwiO1xuICB9IGVsc2UgaWYgKDEwMS4yNSA8PSBkICYmIGQgPCAxMjMuNzUpIHtcbiAgICByZXR1cm4gXCJFU0VcIjtcbiAgfSBlbHNlIGlmICgxMjMuNzUgPD0gZCAmJiBkIDwgMTQ2LjI1KSB7XG4gICAgcmV0dXJuIFwiU0VcIjtcbiAgfSBlbHNlIGlmICgxNDYuMjUgPD0gZCAmJiBkIDwgMTY4Ljc1KSB7XG4gICAgcmV0dXJuIFwiU1NFXCI7XG4gIH0gZWxzZSBpZiAoMTY4Ljc1IDw9IGQgJiYgZCA8IDE5MS4yNSkge1xuICAgIHJldHVybiBcIlNcIjtcbiAgfSBlbHNlIGlmICgxOTEuMjUgPD0gZCAmJiBkIDwgMjEzLjc1KSB7XG4gICAgcmV0dXJuIFwiU1NXXCI7XG4gIH0gZWxzZSBpZiAoMjEzLjc1IDw9IGQgJiYgZCA8IDIzNi4yNSkge1xuICAgIHJldHVybiBcIlNXXCI7XG4gIH0gZWxzZSBpZiAoMjM2LjI1IDw9IGQgJiYgZCA8IDI1OC43NSkge1xuICAgIHJldHVybiBcIldTV1wiO1xuICB9IGVsc2UgaWYgKDI1OC43NSA8PSBkICYmIGQgPCAyODEuMjUpIHtcbiAgICByZXR1cm4gXCJXXCI7XG4gIH0gZWxzZSBpZiAoMjgxLjI1IDw9IGQgJiYgZCA8IDMwMy43NSkge1xuICAgIHJldHVybiBcIldOV1wiO1xuICB9IGVsc2UgaWYgKDMwMy43NSA8PSBkICYmIGQgPCAzMjYuMjUpIHtcbiAgICByZXR1cm4gXCJOV1wiO1xuICB9IGVsc2UgaWYgKDMyNi4yNSA8PSBkICYmIGQgPCAzNDguNzUpIHtcbiAgICByZXR1cm4gXCJOTldcIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJOXCI7XG4gIH1cbn07XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGdldFRhcmdldCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBmdW5jdGlvbihjc3MsIHN0eWxlKXtcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9O1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgdmFyIG5vbmNlID1cbiAgICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihzdHlsZSl7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChcImhlYWRcIik7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9O1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFyZ2V0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJjb25zdCB3ZWF0aGVyQVBJID1cIjk0MDU2MmJlZDRlYThlYjg5ZGRjMGNjOGUzYWFjMmI0XCJcbmNvbnN0IHBsYWNlc0FQSSA9IFwiQUl6YVN5RDJXbUMwMkZKUmg0N1VsWDNWR3lCcExGS3o2TXgtcUN3XCJcbmNvbnN0IGdlb2NvZGluZ0FQSSA9IFwiZmNmMjA3ZDU4NjQxNmRiNTgwMjgyNDgwNzY4YTY0ZTZcIlxuXG5leHBvcnR7d2VhdGhlckFQSSwgZ2VvY29kaW5nQVBJfSIsImltcG9ydCB7IHdlYXRoZXJBUEksIGdlb2NvZGluZ0FQSSB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgZ2V0VW5pdFR5cGUgfSBmcm9tIFwiLi9uYXZcIjtcblxuLy8gY29udGFpbnMgZnVuY3Rpb25zIGZvciBjb21tdW5pY2F0aW5nIHdpdGggQVBJcyBhbmQgZm9ybWF0aW5nIGRhdGEuXG5cbmNvbnN0IGdlb2NvZGUgPSBhc3luYyAoc2VhcmNoVGV4dCkgPT4ge1xuICAvL3JldHVybnMgYW4gb2JqZWN0IHdpdGggbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBpbmZvcm1hdGlvbiBmcm9tIHNlYXJjaCB0ZXh0XG4gIGNvbnN0IFVSTCA9IGBodHRwOi8vYXBpLnBvc2l0aW9uc3RhY2suY29tL3YxL2ZvcndhcmQ/YWNjZXNzX2tleT0ke2dlb2NvZGluZ0FQSX0mcXVlcnk9JHtzZWFyY2hUZXh0fWA7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMKTtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG4gIH1cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuZGF0YS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1iYXJcIilcbiAgICAgICAgLnZhbHVlLnNwbGl0KFwiLFwiKVswXVxuICAgICAgICAudG9Mb3dlckNhc2UoKSA9PT0gZGF0YS5kYXRhW2ldLm5hbWUudG9Mb3dlckNhc2UoKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGEuZGF0YVtpXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRhdGEuZGF0YVswXTtcbn07XG5cbmNvbnN0IHJldmVyc2VHZW9jb2RlID0gYXN5bmMgKGxhdCwgbG9uKSA9PiB7XG4gIGNvbnN0IFVSTCA9IGBodHRwOi8vYXBpLnBvc2l0aW9uc3RhY2suY29tL3YxL3JldmVyc2U/YWNjZXNzX2tleT1mY2YyMDdkNTg2NDE2ZGI1ODAyODI0ODA3NjhhNjRlNiZxdWVyeT0ke2xhdH0sJHtsb259YDtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkwpO1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcbiAgfVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YVxufTtcblxuY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChsYXQsIGxvbikgPT4ge1xuICAvL3VzZXMgdGhlIG9uZSBjYWxsIGFwaSBmcm9tIG9wZW53ZWF0aGVybWFwLm9yZyB0byBnZXQgZGV0YWlsZWQgd2VhdGhlciBpbmZvcm1hdGlvbiBmb3IgYSBsb2NhdGlvbiBmcm9tIGxhdGl0dWRlIGFuZCBsb25naXR1ZGVcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsb259JnVuaXRzPSR7Z2V0VW5pdFR5cGUoKX0mZXhjbHVkZT1taW51dGVseSZhcHBpZD0ke3dlYXRoZXJBUEl9YFxuICApO1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcbiAgfVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCB7IGdlb2NvZGUsIHJldmVyc2VHZW9jb2RlLCBnZXRXZWF0aGVyIH07XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgZ2VvY29kZSwgZ2V0V2VhdGhlciB9IGZyb20gXCIuL2ZvcmVjYXN0XCI7XG5pbXBvcnQgeyBwb3B1bGF0ZU1haW4gfSBmcm9tIFwiLi9tYWluLXdlYXRoZXJcIjtcbmltcG9ydCB7IHBvcHVsYXRlV2Vla2x5Rm9yZWNhc3QgfSBmcm9tIFwiLi93ZWVrbHktZm9yZWNhc3RcIjtcbmltcG9ydCB7IG5hdk1lbnUsIGdldERlZ3JlZXMgfSBmcm9tIFwiLi9uYXZcIjtcbmltcG9ydCB7IHBvcHVsYXRlRnJvbVVzZXJMb2NhdGlvbiB9IGZyb20gXCIuL3VzZXItbG9jYXRpb25cIjtcblxuY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWZvcm1cIik7XG5jb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1iYXJcIik7XG5jb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLXdlYXRoZXJcIik7XG5tYWluLmFwcGVuZENoaWxkKG5hdk1lbnUoKSk7XG5jb25zb2xlLmxvZyhnZXREZWdyZWVzKCkpO1xuXG5wb3B1bGF0ZUZyb21Vc2VyTG9jYXRpb24oKTtcblxuYXN5bmMgZnVuY3Rpb24gcG9wdWxhdGVBbGxXZWF0aGVyRGF0YSgpIHtcbiAgY29uc3QgZ2VvY29kZURhdGEgPSBhd2FpdCBnZW9jb2RlKHNlYXJjaEJhci52YWx1ZSk7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlcihcbiAgICBNYXRoLmZsb29yKGdlb2NvZGVEYXRhLmxhdGl0dWRlICogMTAwKSAvIDEwMCxcbiAgICBNYXRoLmZsb29yKGdlb2NvZGVEYXRhLmxvbmdpdHVkZSAqIDEwMCkgLyAxMDBcbiAgKTtcbiAgY29uc29sZS5sb2coZ2VvY29kZURhdGEpO1xuICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluaXRpYWwtbWVzc2FnZVwiKSkge1xuICAgIG1haW4ucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbml0aWFsLW1lc3NhZ2VcIikpO1xuICB9XG4gIHBvcHVsYXRlTWFpbih3ZWF0aGVyRGF0YSwgZ2VvY29kZURhdGEpO1xuICBwb3B1bGF0ZVdlZWtseUZvcmVjYXN0KHdlYXRoZXJEYXRhKTtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS1idXR0b25cIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2Vla2x5LWZvcmVjYXN0XCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG59XG5cbnNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhc3luYyAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHBvcHVsYXRlQWxsV2VhdGhlckRhdGEoKTtcbn0pO1xuXG5mdW5jdGlvbiByZW1vdmVDaGlsZHJlbihwYXJlbnQpIHtcbiAgLy9yZW1vdmVzIGFsbCBjaGlsZHJlbiBvZiBhbiBlbGVtZW50XG4gIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5peCh1bml4U3RyaW5nKSB7XG4gIGNvbnN0IGRhdGVPYmogPSBuZXcgRGF0ZSh1bml4U3RyaW5nICogMTAwMCk7XG4gIGZ1bmN0aW9uIHRpbWUoKSB7XG4gICAgcmV0dXJuIGRhdGVPYmoudG9UaW1lU3RyaW5nKCkuc2xpY2UoMCwgNSk7XG4gIH1cbiAgZnVuY3Rpb24gZGF5KCkge1xuICAgIGNvbnN0IGRheSA9IGRhdGVPYmoudG9EYXRlU3RyaW5nKCkuc2xpY2UoMCwgMyk7XG4gICAgaWYgKGRheSA9PT0gXCJTdW5cIikgcmV0dXJuIFwiU3VuZGF5XCI7XG4gICAgaWYgKGRheSA9PT0gXCJNb25cIikgcmV0dXJuIFwiTW9uZGF5XCI7XG4gICAgaWYgKGRheSA9PT0gXCJUdWVcIikgcmV0dXJuIFwiVHVlc2RheVwiO1xuICAgIGlmIChkYXkgPT09IFwiV2VkXCIpIHJldHVybiBcIldlZG5lc2RheVwiO1xuICAgIGlmIChkYXkgPT09IFwiVGh1XCIpIHJldHVybiBcIlRodXJzZGF5XCI7XG4gICAgaWYgKGRheSA9PT0gXCJGcmlcIikgcmV0dXJuIFwiRnJpZGF5XCI7XG4gICAgaWYgKGRheSA9PT0gXCJTYXRcIikgcmV0dXJuIFwiU2F0dXJkYXlcIjtcbiAgfVxuICByZXR1cm4geyB0aW1lLCBkYXkgfTtcbn1cblxuZXhwb3J0IHsgcmVtb3ZlQ2hpbGRyZW4sIHVuaXgsIHBvcHVsYXRlQWxsV2VhdGhlckRhdGEgfTtcbiIsImltcG9ydCB7IHJlbW92ZUNoaWxkcmVuLCB1bml4IH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IGdldFVuaXRUeXBlIH0gZnJvbSBcIi4vbmF2XCI7XG5cbmxldCBkZWdyZWVUeXBlO1xuXG5mdW5jdGlvbiBuZXdIb3VySW5mbyhob3VybHlPYmopIHtcbiAgY29uc3QgaG91ckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob3VySW5mby5jbGFzc0xpc3QuYWRkKFwiaG91ci1pbmZvXCIpO1xuXG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZW1wLmNsYXNzTGlzdC5hZGQoXCJob3VyLXRlbXBcIik7XG4gIHRlbXAudGV4dENvbnRlbnQgPSBgJHtNYXRoLmZsb29yKGhvdXJseU9iai50ZW1wIC8gMSl9wrBgO1xuICBob3VySW5mby5hcHBlbmRDaGlsZCh0ZW1wKTtcblxuICBjb25zdCBpY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaWNvbkRpdi5jbGFzc0xpc3QuYWRkKFwiaG91ci1pY29uXCIpO1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaWNvbi5jbGFzc0xpc3QuYWRkKFwic21hbGwtaWNvblwiKTtcbiAgaWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtob3VybHlPYmoud2VhdGhlclswXS5pY29ufUAyeC5wbmdgO1xuICBpY29uRGl2LmFwcGVuZENoaWxkKGljb24pO1xuICBob3VySW5mby5hcHBlbmRDaGlsZChpY29uRGl2KTtcblxuICBjb25zdCBwcmVjaXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcmVjaXBEaXYuY2xhc3NMaXN0LmFkZChcImhvdXItcHJlY2lwXCIpO1xuICBwcmVjaXBEaXYuaW5uZXJIVE1MID0gXCI8ZGl2PnByZWNpcDo8L2Rpdj5cIjtcbiAgY29uc3QgcG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcG9wLnRleHRDb250ZW50ID0gYCR7aG91cmx5T2JqLnBvcH0lYDtcbiAgcHJlY2lwRGl2LmFwcGVuZENoaWxkKHBvcCk7XG4gIGhvdXJJbmZvLmFwcGVuZENoaWxkKHByZWNpcERpdik7XG5cbiAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpbWUuY2xhc3NMaXN0LmFkZChcImhvdXItdGltZVwiKTtcbiAgdGltZS50ZXh0Q29udGVudCA9IHVuaXgoaG91cmx5T2JqLmR0KS50aW1lKCk7XG4gIGhvdXJJbmZvLmFwcGVuZENoaWxkKHRpbWUpO1xuXG4gIHJldHVybiBob3VySW5mbztcbn1cblxuZnVuY3Rpb24gY3VycmVudFRlbXAod2VhdGhlckRhdGEpIHtcbiAgY29uc3QgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRlbXBEaXYuY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtdGVtcC1kYXRhXCIpO1xuICB0ZW1wRGl2LmlkID0gXCJjdXJyZW50LXRlbXAtZGF0YVwiO1xuICB0ZW1wRGl2LmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwibWFpbi1oaWdobG93XCIgaWQ9XCJtYWluLWhpZ2hsb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjdXJyZW50LWhpZ2hcIiBpZD1cImN1cnJlbnQtaGlnaFwiPkhpZ2g6ICR7TWF0aC5mbG9vcihcbiAgICAgICAgd2VhdGhlckRhdGEuZGFpbHlbMF0udGVtcC5tYXggLyAxXG4gICAgICApfcKwPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC1sb3dcIiBpZD1cImN1cnJlbnQtbG93XCI+TG93OiAke01hdGguZmxvb3IoXG4gICAgICAgIHdlYXRoZXJEYXRhLmRhaWx5WzBdLnRlbXAubWluXG4gICAgICApfcKwPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtdGVtcFwiIGlkPVwiY3VycmVudC10ZW1wXCI+XG4gICAgJHtNYXRoLmZsb29yKFxuICAgICAgd2VhdGhlckRhdGEuY3VycmVudC50ZW1wIC8gMVxuICAgICl9PHNwYW4gY2xhc3M9XCJjXCIgaWQ9XCJjXCI+wrAke2RlZ3JlZVR5cGV9PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmZWVscy1saWtlXCIgaWQ9XCJmZWVscy1saWtlXCI+RmVlbHMgbGlrZSAke01hdGguZmxvb3IoXG4gICAgICB3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzX2xpa2UgLyAxXG4gICAgKX3CsCR7ZGVncmVlVHlwZX08L2Rpdj5cbiAgICBgO1xuXG4gIHJldHVybiB0ZW1wRGl2O1xufVxuXG5mdW5jdGlvbiBjdXJyZW50Q29uZGl0aW9ucyh3ZWF0aGVyRGF0YSkge1xuICBjb25zdCBjb25kaXRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uZGl0aW9ucy5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb25kaXRpb25zXCIpO1xuICBjb25kaXRpb25zLmlkID0gXCJtYWluLWNvbmRpdGlvbnNcIjtcbiAgY29uZGl0aW9ucy5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cIm1haW4taWNvblwiIGlkPVwibWFpbi1pY29uXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgaWQ9XCJpY29uLWltZ1wiXG4gICAgICAgICAgICBzcmM9XCJodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3dlYXRoZXJEYXRhLmN1cnJlbnQud2VhdGhlclswXS5pY29ufUAyeC5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tZGVzY3JpcHRpb25cIiBpZD1cIm1haW4tZGVzY3JpcHRpb25cIj4ke3dlYXRoZXJEYXRhLmN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICBgO1xuICByZXR1cm4gY29uZGl0aW9ucztcbn1cblxuZnVuY3Rpb24gcGxhY2VOYW1lKGdlb2NvZGVEYXRhKSB7XG4gIGNvbnN0IHBsYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxhY2UuY2xhc3NMaXN0LmFkZChcImNpdHktbmFtZVwiKTtcbiAgcGxhY2UuaWQgPSBcImNpdHktbmFtZVwiO1xuICBwbGFjZS50ZXh0Q29udGVudCA9IGdlb2NvZGVEYXRhLmxhYmVsO1xuICByZXR1cm4gcGxhY2U7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlSG91cmx5KHdlYXRoZXJEYXRhKSB7XG4gIGNvbnN0IGhvdXJseUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG91cmx5LWZvcmVjYXN0XCIpO1xuICByZW1vdmVDaGlsZHJlbihob3VybHlDb250YWluZXIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpKyspIHtcbiAgICBob3VybHlDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3SG91ckluZm8od2VhdGhlckRhdGEuaG91cmx5W2ldKSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHBvcHVsYXRlTWFpbih3ZWF0aGVyRGF0YSwgZ2VvY29kZURhdGEpIHtcbiAgZ2V0VW5pdFR5cGUoKSA9PT0gXCJtZXRyaWNcIiA/IChkZWdyZWVUeXBlID0gXCJDXCIpIDogKGRlZ3JlZVR5cGUgPSBcIkZcIik7XG5cbiAgY29uc3QgbWFpbldlYXRoZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4td2VhdGhlclwiKTtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC10ZW1wLWRhdGFcIikpIHtcbiAgICBtYWluV2VhdGhlci5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtdGVtcC1kYXRhXCIpKTtcbiAgfVxuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbmRpdGlvbnNcIikpIHtcbiAgICBtYWluV2VhdGhlci5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tY29uZGl0aW9uc1wiKSk7XG4gIH1cbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2l0eS1uYW1lXCIpKSB7XG4gICAgbWFpbldlYXRoZXIucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaXR5LW5hbWVcIikpO1xuICB9XG5cbiAgbWFpbldlYXRoZXIuYXBwZW5kQ2hpbGQoY3VycmVudFRlbXAod2VhdGhlckRhdGEpKTtcbiAgbWFpbldlYXRoZXIuYXBwZW5kQ2hpbGQoY3VycmVudENvbmRpdGlvbnMod2VhdGhlckRhdGEpKTtcbiAgbWFpbldlYXRoZXIuYXBwZW5kQ2hpbGQocGxhY2VOYW1lKGdlb2NvZGVEYXRhKSk7XG4gIHBvcHVsYXRlSG91cmx5KHdlYXRoZXJEYXRhKTtcbn1cblxuZXhwb3J0IHsgcG9wdWxhdGVNYWluIH07XG4iLCJpbXBvcnQgeyBwb3B1bGF0ZUZyb21Vc2VyTG9jYXRpb24gfSBmcm9tIFwiLi91c2VyLWxvY2F0aW9uXCJcblxuaW1wb3J0IHsgcG9wdWxhdGVBbGxXZWF0aGVyRGF0YSB9IGZyb20gXCIuXCI7XG5cbmxldCB1bml0VHlwZSA9IFwiaW1wZXJpYWxcIjtcblxuY29uc3QgY2hhbmdlVW5pdHMgPSAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGlmIChlLnRhcmdldC5pZCA9PT0gXCJjXCIpIHVuaXRUeXBlID0gXCJtZXRyaWNcIjtcbiAgZWxzZSB1bml0VHlwZSA9IFwiaW1wZXJpYWxcIjtcbiAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtYmFyXCIpLnZhbHVlKSBwb3B1bGF0ZUFsbFdlYXRoZXJEYXRhKClcbiAgZWxzZSBwb3B1bGF0ZUZyb21Vc2VyTG9jYXRpb24oKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWVrbHktZm9yZWNhc3RcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKVxuXG59O1xuXG5mdW5jdGlvbiBoaWRlV2Vla2x5KCkge1xuICBcbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS1idXR0b25cIik7XG4gIGNvbnN0IHdlZWtseSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2Vla2x5LWZvcmVjYXN0XCIpO1xuXG4gIGlmIChtZW51QnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgIHdlZWtseS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSBlbHNlIHtcbiAgICB3ZWVrbHkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwZW5kU3BhbihwYXJlbnQsIG51bSkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBuYXZNZW51KCkge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICBuYXYucm9sZSA9IFwibmF2aWdhdGlvblwiO1xuICBjb25zdCBtZW51VG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudVRvZ2dsZS5pZCA9IFwibWVudVRvZ2dsZVwiO1xuICBuYXYuYXBwZW5kQ2hpbGQobWVudVRvZ2dsZSk7XG5cbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbWVudUJ1dHRvbi50eXBlID0gXCJjaGVja2JveFwiO1xuICBtZW51QnV0dG9uLmlkID0gXCJtZW51LWJ1dHRvblwiO1xuICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlV2Vla2x5KTtcbiAgbWVudVRvZ2dsZS5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcblxuICBhcHBlbmRTcGFuKG1lbnVUb2dnbGUsIDMpO1xuXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICB1bC5pZCA9IFwibWVudVwiO1xuICBtZW51VG9nZ2xlLmFwcGVuZENoaWxkKHVsKTtcblxuICBjb25zdCBjZmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBjZmNvbnRhaW5lci5pZCA9IFwiYy1mXCI7XG4gIHVsLmFwcGVuZENoaWxkKGNmY29udGFpbmVyKTtcblxuICBjb25zdCBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYy5pZCA9IFwiY1wiO1xuICBjLmNsYXNzTGlzdC5hZGQoXCJ1bml0QnV0dG9uXCIpO1xuICBjLnRleHRDb250ZW50ID0gXCLCsENcIjtcbiAgYy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjaGFuZ2VVbml0cyhlKTtcbiAgfSk7XG5cbiAgY29uc3QgZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGYuaWQgPSBcImZcIjtcbiAgZi50ZXh0Q29udGVudCA9IFwiwrBGXCI7XG4gIGYuY2xhc3NMaXN0LmFkZChcInVuaXRCdXR0b25cIik7XG4gIGYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY2hhbmdlVW5pdHMoZSk7XG4gIH0pO1xuICBjZmNvbnRhaW5lci5hcHBlbmRDaGlsZChjKTtcbiAgY2Zjb250YWluZXIuYXBwZW5kQ2hpbGQoZik7XG4gIGNvbnN0IG1lbnVUaXRsZXMgPSBbXCJIb21lXCIsIFwiQWJvdXRcIiwgXCJHaXRodWJcIixdO1xuXG4gIG1lbnVUaXRsZXMuZm9yRWFjaCgodGl0bGUpID0+IHtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgYS5ocmVmID0gXCIjXCI7XG4gICAgYS5pbm5lckhUTUwgPSBgPGxpPiR7dGl0bGV9PC9saT5gO1xuICAgIGEuaWQgPSB0aXRsZTtcbiAgICB1bC5hcHBlbmRDaGlsZChhKTtcbiAgfSk7XG4gIHJldHVybiBuYXY7XG59XG5cbmZ1bmN0aW9uIGdldFVuaXRUeXBlKCkge1xuICByZXR1cm4gdW5pdFR5cGU7XG59XG5mdW5jdGlvbiBnZXREZWdyZWVzKCkge1xuICByZXR1cm4gdW5pdFR5cGUgPT0gXCJtZXRyaWNcIiA/IFwiQ1wiIDogXCJGXCI7XG59XG5cbmV4cG9ydCB7IG5hdk1lbnUsIGdldFVuaXRUeXBlLCBnZXREZWdyZWVzIH07XG4iLCJpbXBvcnQgeyBwb3B1bGF0ZVdlZWtseUZvcmVjYXN0IH0gZnJvbSBcIi4vd2Vla2x5LWZvcmVjYXN0XCI7XG5pbXBvcnQgeyBwb3B1bGF0ZU1haW4gfSBmcm9tIFwiLi9tYWluLXdlYXRoZXJcIjtcbmltcG9ydCB7IGdldFdlYXRoZXIsIHJldmVyc2VHZW9jb2RlIH0gZnJvbSBcIi4vZm9yZWNhc3RcIjtcblxudmFyIG9wdGlvbnMgPSB7XG4gIGVuYWJsZUhpZ2hBY2N1cmFjeTogdHJ1ZSxcbiAgdGltZW91dDogNTAwMCxcbiAgbWF4aW11bUFnZTogMCxcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIHN1Y2Nlc3MocG9zKSB7XG4gIGNvbnN0IGNyZCA9IHBvcy5jb29yZHM7XG4gIGNvbnNvbGUubG9nKGNyZCk7XG4gIGNvbnN0IHJldmVyc2VHZW9jb2RlRGF0YSA9IGF3YWl0IHJldmVyc2VHZW9jb2RlKGNyZC5sYXRpdHVkZSwgY3JkLmxvbmdpdHVkZSk7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlcihjcmQubGF0aXR1ZGUsIGNyZC5sb25naXR1ZGUpO1xuICBjb25zb2xlLmxvZyhyZXZlcnNlR2VvY29kZURhdGEuZGF0YVswXS5sYWJlbCk7XG4gIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcblxuICBwb3B1bGF0ZU1haW4od2VhdGhlckRhdGEsIHJldmVyc2VHZW9jb2RlRGF0YS5kYXRhWzBdKTtcbiAgcG9wdWxhdGVXZWVrbHlGb3JlY2FzdCh3ZWF0aGVyRGF0YSk7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtYnV0dG9uXCIpLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSlcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlZWtseS1mb3JlY2FzdFwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXG4gIHJldHVybiBjcmQ7XG59XG5cbmZ1bmN0aW9uIGVycm9yKGVycikge1xuICBjb25zb2xlLndhcm4oYEVSUk9SKCR7ZXJyLmNvZGV9KTogJHtlcnIubWVzc2FnZX1gKTtcbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgbWVzc2FnZS5pZCA9IFwiaW5pdGlhbC1tZXNzYWdlXCJcbiAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwiaW5pdGlhbC1tZXNzYWdlXCIpXG4gIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlNlYXJjaCBmb3IgYSBjaXR5IGFuZCBwcmVzcyAnRW50ZXInIHRvIGdldCBzdGFydGVkXCJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLXdlYXRoZXJcIikuYXBwZW5kQ2hpbGQobWVzc2FnZSlcblxuXG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlRnJvbVVzZXJMb2NhdGlvbigpIHtcbiAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihzdWNjZXNzLCBlcnJvciwgb3B0aW9ucyk7XG5cbn1cblxuZXhwb3J0IHsgcG9wdWxhdGVGcm9tVXNlckxvY2F0aW9uIH07XG4iLCJjb25zdCBkMmQgPSByZXF1aXJlKFwiZGVncmVlcy10by1kaXJlY3Rpb25cIik7IC8vY29udmVydHMgd2luZCBkZWdyZWVzIHRvIGEgY29tcGFzcyBkaXJlY3Rpb25cbmltcG9ydCB7IHVuaXggfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgZ2V0VW5pdFR5cGUgfSBmcm9tIFwiLi9uYXZcIjtcblxubGV0IGRpc3RhbmNlVHlwZTtcblxuZnVuY3Rpb24gY3JlYXRlV2Vla2x5Rm9yZWNhc3Qod2VhdGhlckRhdGEpIHtcbiAgbGV0IGZvcmVjYXN0TGlzdCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgIGxldCBkYXk7XG4gICAgY29uc3QgZm9yZWNhc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcmVjYXN0RGl2LmNsYXNzTGlzdC5hZGQoXCJkYXktZm9yZWNhc3RcIik7XG4gICAgaWYgKGkgPT09IDApIHtcbiAgICAgIGRheSA9IFwiVG9kYXkncyBmb3JlY2FzdFwiO1xuICAgICAgZm9yZWNhc3REaXYuaWQgPSBcInRvZGF5LWZvcmVjYXN0XCI7XG4gICAgfSBlbHNlIGRheSA9IHVuaXgod2VhdGhlckRhdGEuZGFpbHlbaV0uZHQpLmRheSgpO1xuXG4gICAgZm9yZWNhc3REaXYuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJkYXktb3ZlcnZpZXdcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkYXktb3ZlcnZpZXctbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGF5LW5hbWVcIj4ke2RheX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRheS1kZXNjcmlwdGlvblwiPiR7XG4gICAgICAgICAgd2VhdGhlckRhdGEuZGFpbHlbaV0ud2VhdGhlclswXS5kZXNjcmlwdGlvblxuICAgICAgICB9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkYXktb3ZlcnZpZXctcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRheS1pY29uXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3M9XCJzbWFsbC1pY29uIGRheS1pY29uXCJcbiAgICAgICAgICAgIHNyYz1cImh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7XG4gICAgICAgICAgICAgIHdlYXRoZXJEYXRhLmRhaWx5W2ldLndlYXRoZXJbMF0uaWNvblxuICAgICAgICAgICAgfUAyeC5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRheS1oaWdobG93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRheS1oaWdoXCI+JHtNYXRoLmZsb29yKFxuICAgICAgICAgICAgd2VhdGhlckRhdGEuZGFpbHlbaV0udGVtcC5tYXggLyAxXG4gICAgICAgICAgKX3CsFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXktbG93XCI+JHtNYXRoLmZsb29yKHdlYXRoZXJEYXRhLmRhaWx5W2ldLnRlbXAubWluIC8gMSl9wrBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8dWwgY2xhc3M9XCJkYXktZGV0YWlsc1wiPlxuICAgICAgICA8bGk+PGRpdj5QcmVjaXBpdGF0aW9uPC9kaXY+IDxkaXY+JHtNYXRoLmZsb29yKFxuICAgICAgICAgICh3ZWF0aGVyRGF0YS5kYWlseVtpXS5wb3AgKiAxMDApIC8gMVxuICAgICAgICApfSU8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPjxkaXY+V2luZDwvZGl2PiBcbiAgICAgICAgICA8ZGl2PiR7d2VhdGhlckRhdGEuZGFpbHlbaV0ud2luZF9zcGVlZH0gJHtkaXN0YW5jZVR5cGV9L2ggXG4gICAgICAgICAgJHtkMmQod2VhdGhlckRhdGEuZGFpbHlbaV0ud2luZF9kZWcpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+PGRpdj5IdW1pZGl0eTwvZGl2PiA8ZGl2PiR7d2VhdGhlckRhdGEuZGFpbHlbaV0uaHVtaWRpdHl9JTwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+PGRpdj5VViBJbmRleDwvZGl2PiA8ZGl2PiR7d2VhdGhlckRhdGEuZGFpbHlbaV0udXZpfTwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+PGRpdj5TdW5yaXNlL1N1bnNldDwvZGl2PiA8ZGl2PiR7dW5peChcbiAgICAgICAgICB3ZWF0aGVyRGF0YS5kYWlseVtpXS5zdW5yaXNlXG4gICAgICAgICkudGltZSgpfS8ke3VuaXgod2VhdGhlckRhdGEuZGFpbHlbaV0uc3Vuc2V0KS50aW1lKCl9PC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgPC91bD5gO1xuICAgIGZvcmVjYXN0TGlzdC5wdXNoKGZvcmVjYXN0RGl2KTtcbiAgfVxuICByZXR1cm4gZm9yZWNhc3RMaXN0O1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVdlZWtseUZvcmVjYXN0KHdlYXRoZXJEYXRhKSB7XG4gIGdldFVuaXRUeXBlKCkgPT09IFwibWV0cmljXCIgPyAoZGlzdGFuY2VUeXBlID0gXCJrbVwiKSA6IChkaXN0YW5jZVR5cGUgPSBcIm1pXCIpO1xuXG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlZWtseS1mb3JlY2FzdFwiKSkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWVrbHktZm9yZWNhc3RcIikpO1xuICB9XG4gIGNvbnN0IHdlZWtseURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdlZWtseURpdi5jbGFzc0xpc3QuYWRkKFwid2Vla2x5LWZvcmVjYXN0XCIpO1xuICB3ZWVrbHlEaXYuaWQgPSBcIndlZWtseS1mb3JlY2FzdFwiO1xuICB3ZWVrbHlEaXYuaW5uZXJIVE1MID0gYFxuICA8aGVhZGVyIGNsYXNzPVwid2Vla2x5LWhlYWRlclwiIGlkPVwid2Vla2x5LWhlYWRlclwiPlxuICA8cD5ePC9wPlxuICA8ZGl2PjgtZGF5IGZvcmVjYXN0OjwvZGl2PlxuICA8L2hlYWRlcj5gO1xuICBjcmVhdGVXZWVrbHlGb3JlY2FzdCh3ZWF0aGVyRGF0YSkuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgIHdlZWtseURpdi5hcHBlbmRDaGlsZChub2RlKTtcbiAgfSk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQod2Vla2x5RGl2KTtcbn1cblxuZXhwb3J0IHsgcG9wdWxhdGVXZWVrbHlGb3JlY2FzdCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==