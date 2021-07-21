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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --blue: #051f38;\n    --white: #ffffff;\n    --dark: rgb(48, 47, 47);\n  }\n  html {\n    width: 100%;\n    height: 100%;\n    font-family: sans-serif;\n  }\n  body {\n    width: 100%;\n    height: 100%;\n    background-color: var(--blue);\n    display: grid;\n    grid-template-columns: repeat(12, 1fr);\n    grid-template-rows: repeat(12, 1fr);\n    color: ghostwhite;\n  }\n  body div {\n  }\n  .main-weather {\n    position: fixed;\n    height: 79%;\n    background-color: var(--dark);\n    grid-column: 1/13;\n    display: grid;\n    grid-template-columns: repeat(12, 1fr);\n    grid-template-rows: repeat(12, 1fr);\n    padding: 20px;\n  }\n  form {\n    grid-column: 2/12;\n    grid-row: 1/2;\n    justify-content: center;\n    align-items: center;\n  }\n  form input {\n    width: 97%;\n    height: 70%;\n  }\n  .current-temp-data {\n    grid-row: 2/7;\n    grid-column: 1/6;\n    padding: 4%;\n  }\n  .main-highlow {\n    display: flex;\n    justify-content: space-around;\n    margin-top: 15px;\n  }\n  .current-temp {\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    font-size: 6em;\n    margin-top: 15px;\n    margin-bottom: 15px;\n  }\n  .c {\n    font-size: 0.5em;\n  }\n  .feels-like {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .main-conditions {\n    grid-row: 2/7;\n    grid-column: 8/13;\n  }\n  .main-conditions div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .main-icon {\n    margin-top: 30px;\n  }\n  .city-name {\n    grid-row: 7/9;\n    grid-column: 1/10;\n    font-size: 1.3em;\n    padding: 2%;\n    display: flex;\n    align-items: center;\n  }\n  .hourly-forecast {\n    grid-row: 9/13;\n    grid-column: 1/13;\n    display: flex;\n    overflow: scroll;\n    align-items: center;\n  }\n  .hour-info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    border: 1px solid black;\n    border-radius: 4px;\n    margin: 10px;\n    margin-top: 0;\n    margin-bottom: 0;\n    height: 96%;\n    min-width: 70px;\n  }\n  .small-icon {\n    width: 60px;\n    margin-top: -10px;\n    margin-bottom: -10px;\n  }\n  .hour-precip {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: 0.8em;\n  }\n  \n  /* *****************+ */\n  \n  .weekly-forecast {\n    z-index: 10;\n    grid-row: 11/13;\n    grid-column: 1/13;\n  }\n  #today-forecast{\n    margin-top: -3px;\n    border-top-left-radius: 15px;\n    border-top-right-radius: 15px;\n  }\n  .day-forecast {\n    border-top: 1px solid black;\n    margin-top: 0px;\n    background-color: rgba(17, 16, 16, 0.953);\n    backdrop-filter: blur(6px);\n    color: white;\n    padding: 10px;\n  }\n  \n  .day-overview {\n    display: flex;\n    justify-content: space-between;\n  }\n  .day-name {\n    font-size: 1.3em;\n  }\n  \n  .day-overview-right {\n    display: flex;\n    align-items: center;\n  }\n  .forecast-expand{\n    margin-left:20px;\n    padding-top: 20px;\n    font-size: 1.5em;\n    transform: rotate(180deg);\n  }\n  \n  .day-details li {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 6px;\n    padding-right: 10%;\n    padding-left: 10%;\n  }\n  ", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,gBAAgB;IAChB,uBAAuB;EACzB;EACA;IACE,WAAW;IACX,YAAY;IACZ,uBAAuB;EACzB;EACA;IACE,WAAW;IACX,YAAY;IACZ,6BAA6B;IAC7B,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,iBAAiB;EACnB;EACA;EACA;EACA;IACE,eAAe;IACf,WAAW;IACX,6BAA6B;IAC7B,iBAAiB;IACjB,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,aAAa;EACf;EACA;IACE,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;EACrB;EACA;IACE,UAAU;IACV,WAAW;EACb;EACA;IACE,aAAa;IACb,gBAAgB;IAChB,WAAW;EACb;EACA;IACE,aAAa;IACb,6BAA6B;IAC7B,gBAAgB;EAClB;EACA;IACE,aAAa;IACb,uBAAuB;IACvB,uBAAuB;IACvB,cAAc;IACd,gBAAgB;IAChB,mBAAmB;EACrB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;EACrB;EACA;IACE,aAAa;IACb,iBAAiB;EACnB;EACA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;EACzB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,aAAa;IACb,iBAAiB;IACjB,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,iBAAiB;IACjB,aAAa;IACb,gBAAgB;IAChB,mBAAmB;EACrB;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,WAAW;IACX,eAAe;EACjB;EACA;IACE,WAAW;IACX,iBAAiB;IACjB,oBAAoB;EACtB;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;EAClB;;EAEA,uBAAuB;;EAEvB;IACE,WAAW;IACX,eAAe;IACf,iBAAiB;EACnB;EACA;IACE,gBAAgB;IAChB,4BAA4B;IAC5B,6BAA6B;EAC/B;EACA;IACE,2BAA2B;IAC3B,eAAe;IACf,yCAAyC;IACzC,0BAA0B;IAC1B,YAAY;IACZ,aAAa;EACf;;EAEA;IACE,aAAa;IACb,8BAA8B;EAChC;EACA;IACE,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,mBAAmB;EACrB;EACA;IACE,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,yBAAyB;EAC3B;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,eAAe;IACf,kBAAkB;IAClB,iBAAiB;EACnB","sourcesContent":[":root {\n    --blue: #051f38;\n    --white: #ffffff;\n    --dark: rgb(48, 47, 47);\n  }\n  html {\n    width: 100%;\n    height: 100%;\n    font-family: sans-serif;\n  }\n  body {\n    width: 100%;\n    height: 100%;\n    background-color: var(--blue);\n    display: grid;\n    grid-template-columns: repeat(12, 1fr);\n    grid-template-rows: repeat(12, 1fr);\n    color: ghostwhite;\n  }\n  body div {\n  }\n  .main-weather {\n    position: fixed;\n    height: 79%;\n    background-color: var(--dark);\n    grid-column: 1/13;\n    display: grid;\n    grid-template-columns: repeat(12, 1fr);\n    grid-template-rows: repeat(12, 1fr);\n    padding: 20px;\n  }\n  form {\n    grid-column: 2/12;\n    grid-row: 1/2;\n    justify-content: center;\n    align-items: center;\n  }\n  form input {\n    width: 97%;\n    height: 70%;\n  }\n  .current-temp-data {\n    grid-row: 2/7;\n    grid-column: 1/6;\n    padding: 4%;\n  }\n  .main-highlow {\n    display: flex;\n    justify-content: space-around;\n    margin-top: 15px;\n  }\n  .current-temp {\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    font-size: 6em;\n    margin-top: 15px;\n    margin-bottom: 15px;\n  }\n  .c {\n    font-size: 0.5em;\n  }\n  .feels-like {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .main-conditions {\n    grid-row: 2/7;\n    grid-column: 8/13;\n  }\n  .main-conditions div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .main-icon {\n    margin-top: 30px;\n  }\n  .city-name {\n    grid-row: 7/9;\n    grid-column: 1/10;\n    font-size: 1.3em;\n    padding: 2%;\n    display: flex;\n    align-items: center;\n  }\n  .hourly-forecast {\n    grid-row: 9/13;\n    grid-column: 1/13;\n    display: flex;\n    overflow: scroll;\n    align-items: center;\n  }\n  .hour-info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    border: 1px solid black;\n    border-radius: 4px;\n    margin: 10px;\n    margin-top: 0;\n    margin-bottom: 0;\n    height: 96%;\n    min-width: 70px;\n  }\n  .small-icon {\n    width: 60px;\n    margin-top: -10px;\n    margin-bottom: -10px;\n  }\n  .hour-precip {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: 0.8em;\n  }\n  \n  /* *****************+ */\n  \n  .weekly-forecast {\n    z-index: 10;\n    grid-row: 11/13;\n    grid-column: 1/13;\n  }\n  #today-forecast{\n    margin-top: -3px;\n    border-top-left-radius: 15px;\n    border-top-right-radius: 15px;\n  }\n  .day-forecast {\n    border-top: 1px solid black;\n    margin-top: 0px;\n    background-color: rgba(17, 16, 16, 0.953);\n    backdrop-filter: blur(6px);\n    color: white;\n    padding: 10px;\n  }\n  \n  .day-overview {\n    display: flex;\n    justify-content: space-between;\n  }\n  .day-name {\n    font-size: 1.3em;\n  }\n  \n  .day-overview-right {\n    display: flex;\n    align-items: center;\n  }\n  .forecast-expand{\n    margin-left:20px;\n    padding-top: 20px;\n    font-size: 1.5em;\n    transform: rotate(180deg);\n  }\n  \n  .day-details li {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 6px;\n    padding-right: 10%;\n    padding-left: 10%;\n  }\n  "],"sourceRoot":""}]);
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
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely&appid=${_config__WEBPACK_IMPORTED_MODULE_0__.weatherAPI}`
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
/* harmony export */   "unix": () => (/* binding */ unix)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _forecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecast */ "./src/forecast.js");
/* harmony import */ var _main_weather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-weather */ "./src/main-weather.js");
/* harmony import */ var _weekly_forecast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weekly-forecast */ "./src/weekly-forecast.js");





const searchForm = document.getElementById("search-form");
const searchBar = document.getElementById("search-bar");

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const geocodeData = await (0,_forecast__WEBPACK_IMPORTED_MODULE_1__.geocode)(searchBar.value);
  const weatherData = await (0,_forecast__WEBPACK_IMPORTED_MODULE_1__.getWeather)(
    Math.floor(geocodeData.latitude * 100) / 100,
    Math.floor(geocodeData.longitude * 100) / 100
  );
  console.log(geocodeData);
  console.log(weatherData);
  (0,_main_weather__WEBPACK_IMPORTED_MODULE_2__.populateMain)(weatherData, geocodeData);
  (0,_weekly_forecast__WEBPACK_IMPORTED_MODULE_3__.populateWeeklyForecast)(weatherData)
});

function removeChildren(parent) {
  //removes all children of an element
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function unix(unixString) {
  const dateObj = new Date(unixString * 1000);
  function time(){
    return dateObj.toTimeString().slice(0, 5);
  }
  function day(){
    const day = dateObj.toDateString().slice(0,3)
    if(day==="Sun") return "Sunday"
    if(day==="Mon") return "Monday"
    if(day==="Tue") return "Tuesday"
    if(day==="Wed") return "Wednesday"
    if(day==="Thu") return "Thursday"
    if(day==="Fri") return "Friday"
    if(day==="Sat") return "Saturday"
  }
  return {time, day}
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
    ${Math.floor(weatherData.current.temp / 1)}<span class="c" id="c">°C</span>
    </div>
    <div class="feels-like" id="feels-like">Feels like ${Math.floor(
      weatherData.current.feels_like / 1
    )}°C</div>
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
const d2d = __webpack_require__(/*! degrees-to-direction */ "./node_modules/degrees-to-direction/lib.js"); //converts wind degrees to a compass direction


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
          <div>${weatherData.daily[i].wind_speed}km/h 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrMS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjazEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazEvLi9ub2RlX21vZHVsZXMvZGVncmVlcy10by1kaXJlY3Rpb24vbGliLmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2sxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazEvLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vc3JjL2ZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2sxLy4vc3JjL21haW4td2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrMS8uL3NyYy93ZWVrbHktZm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjazEvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjazEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2sxL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjazEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrMS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLGlEQUFpRCxzQkFBc0IsdUJBQXVCLDhCQUE4QixLQUFLLFVBQVUsa0JBQWtCLG1CQUFtQiw4QkFBOEIsS0FBSyxVQUFVLGtCQUFrQixtQkFBbUIsb0NBQW9DLG9CQUFvQiw2Q0FBNkMsMENBQTBDLHdCQUF3QixLQUFLLGNBQWMsS0FBSyxtQkFBbUIsc0JBQXNCLGtCQUFrQixvQ0FBb0Msd0JBQXdCLG9CQUFvQiw2Q0FBNkMsMENBQTBDLG9CQUFvQixLQUFLLFVBQVUsd0JBQXdCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEtBQUssZ0JBQWdCLGlCQUFpQixrQkFBa0IsS0FBSyx3QkFBd0Isb0JBQW9CLHVCQUF1QixrQkFBa0IsS0FBSyxtQkFBbUIsb0JBQW9CLG9DQUFvQyx1QkFBdUIsS0FBSyxtQkFBbUIsb0JBQW9CLDhCQUE4Qiw4QkFBOEIscUJBQXFCLHVCQUF1QiwwQkFBMEIsS0FBSyxRQUFRLHVCQUF1QixLQUFLLGlCQUFpQixvQkFBb0IsOEJBQThCLDBCQUEwQixLQUFLLHNCQUFzQixvQkFBb0Isd0JBQXdCLEtBQUssMEJBQTBCLG9CQUFvQiwwQkFBMEIsOEJBQThCLEtBQUssZ0JBQWdCLHVCQUF1QixLQUFLLGdCQUFnQixvQkFBb0Isd0JB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X0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tYmx1ZTogIzA1MWYzODtcXG4gICAgLS13aGl0ZTogI2ZmZmZmZjtcXG4gICAgLS1kYXJrOiByZ2IoNDgsIDQ3LCA0Nyk7XFxuICB9XFxuICBodG1sIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICB9XFxuICBib2R5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMiwgMWZyKTtcXG4gICAgY29sb3I6IGdob3N0d2hpdGU7XFxuICB9XFxuICBib2R5IGRpdiB7XFxuICB9XFxuICAubWFpbi13ZWF0aGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBoZWlnaHQ6IDc5JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIGdyaWQtY29sdW1uOiAxLzEzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTIsIDFmcik7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICB9XFxuICBmb3JtIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMTI7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgZm9ybSBpbnB1dCB7XFxuICAgIHdpZHRoOiA5NyU7XFxuICAgIGhlaWdodDogNzAlO1xcbiAgfVxcbiAgLmN1cnJlbnQtdGVtcC1kYXRhIHtcXG4gICAgZ3JpZC1yb3c6IDIvNztcXG4gICAgZ3JpZC1jb2x1bW46IDEvNjtcXG4gICAgcGFkZGluZzogNCU7XFxuICB9XFxuICAubWFpbi1oaWdobG93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICB9XFxuICAuY3VycmVudC10ZW1wIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBmb250LXNpemU6IDZlbTtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIH1cXG4gIC5jIHtcXG4gICAgZm9udC1zaXplOiAwLjVlbTtcXG4gIH1cXG4gIC5mZWVscy1saWtlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAubWFpbi1jb25kaXRpb25zIHtcXG4gICAgZ3JpZC1yb3c6IDIvNztcXG4gICAgZ3JpZC1jb2x1bW46IDgvMTM7XFxuICB9XFxuICAubWFpbi1jb25kaXRpb25zIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbiAgLm1haW4taWNvbiB7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICB9XFxuICAuY2l0eS1uYW1lIHtcXG4gICAgZ3JpZC1yb3c6IDcvOTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMTA7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLmhvdXJseS1mb3JlY2FzdCB7XFxuICAgIGdyaWQtcm93OiA5LzEzO1xcbiAgICBncmlkLWNvbHVtbjogMS8xMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIC5ob3VyLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICBoZWlnaHQ6IDk2JTtcXG4gICAgbWluLXdpZHRoOiA3MHB4O1xcbiAgfVxcbiAgLnNtYWxsLWljb24ge1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xcbiAgfVxcbiAgLmhvdXItcHJlY2lwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxuICB9XFxuICBcXG4gIC8qICoqKioqKioqKioqKioqKioqKyAqL1xcbiAgXFxuICAud2Vla2x5LWZvcmVjYXN0IHtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIGdyaWQtcm93OiAxMS8xMztcXG4gICAgZ3JpZC1jb2x1bW46IDEvMTM7XFxuICB9XFxuICAjdG9kYXktZm9yZWNhc3R7XFxuICAgIG1hcmdpbi10b3A6IC0zcHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xcbiAgfVxcbiAgLmRheS1mb3JlY2FzdCB7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3LCAxNiwgMTYsIDAuOTUzKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDZweCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gIH1cXG4gIFxcbiAgLmRheS1vdmVydmlldyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG4gIC5kYXktbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICB9XFxuICBcXG4gIC5kYXktb3ZlcnZpZXctcmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLmZvcmVjYXN0LWV4cGFuZHtcXG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICB9XFxuICBcXG4gIC5kYXktZGV0YWlscyBsaSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLXRvcDogNnB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XFxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xcbiAgfVxcbiAgXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQ0FBbUM7SUFDbkMsaUJBQWlCO0VBQ25CO0VBQ0E7RUFDQTtFQUNBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsbUNBQW1DO0lBQ25DLGFBQWE7RUFDZjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsV0FBVztFQUNiO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjtFQUNBO0lBQ0UsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGVBQWU7RUFDakI7RUFDQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCOztFQUVBLHVCQUF1Qjs7RUFFdkI7SUFDRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YseUNBQXlDO0lBQ3pDLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tYmx1ZTogIzA1MWYzODtcXG4gICAgLS13aGl0ZTogI2ZmZmZmZjtcXG4gICAgLS1kYXJrOiByZ2IoNDgsIDQ3LCA0Nyk7XFxuICB9XFxuICBodG1sIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICB9XFxuICBib2R5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMiwgMWZyKTtcXG4gICAgY29sb3I6IGdob3N0d2hpdGU7XFxuICB9XFxuICBib2R5IGRpdiB7XFxuICB9XFxuICAubWFpbi13ZWF0aGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBoZWlnaHQ6IDc5JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIGdyaWQtY29sdW1uOiAxLzEzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTIsIDFmcik7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICB9XFxuICBmb3JtIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMTI7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgZm9ybSBpbnB1dCB7XFxuICAgIHdpZHRoOiA5NyU7XFxuICAgIGhlaWdodDogNzAlO1xcbiAgfVxcbiAgLmN1cnJlbnQtdGVtcC1kYXRhIHtcXG4gICAgZ3JpZC1yb3c6IDIvNztcXG4gICAgZ3JpZC1jb2x1bW46IDEvNjtcXG4gICAgcGFkZGluZzogNCU7XFxuICB9XFxuICAubWFpbi1oaWdobG93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICB9XFxuICAuY3VycmVudC10ZW1wIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBmb250LXNpemU6IDZlbTtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIH1cXG4gIC5jIHtcXG4gICAgZm9udC1zaXplOiAwLjVlbTtcXG4gIH1cXG4gIC5mZWVscy1saWtlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAubWFpbi1jb25kaXRpb25zIHtcXG4gICAgZ3JpZC1yb3c6IDIvNztcXG4gICAgZ3JpZC1jb2x1bW46IDgvMTM7XFxuICB9XFxuICAubWFpbi1jb25kaXRpb25zIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbiAgLm1haW4taWNvbiB7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICB9XFxuICAuY2l0eS1uYW1lIHtcXG4gICAgZ3JpZC1yb3c6IDcvOTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMTA7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLmhvdXJseS1mb3JlY2FzdCB7XFxuICAgIGdyaWQtcm93OiA5LzEzO1xcbiAgICBncmlkLWNvbHVtbjogMS8xMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIC5ob3VyLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICBoZWlnaHQ6IDk2JTtcXG4gICAgbWluLXdpZHRoOiA3MHB4O1xcbiAgfVxcbiAgLnNtYWxsLWljb24ge1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xcbiAgfVxcbiAgLmhvdXItcHJlY2lwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxuICB9XFxuICBcXG4gIC8qICoqKioqKioqKioqKioqKioqKyAqL1xcbiAgXFxuICAud2Vla2x5LWZvcmVjYXN0IHtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIGdyaWQtcm93OiAxMS8xMztcXG4gICAgZ3JpZC1jb2x1bW46IDEvMTM7XFxuICB9XFxuICAjdG9kYXktZm9yZWNhc3R7XFxuICAgIG1hcmdpbi10b3A6IC0zcHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xcbiAgfVxcbiAgLmRheS1mb3JlY2FzdCB7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3LCAxNiwgMTYsIDAuOTUzKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDZweCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gIH1cXG4gIFxcbiAgLmRheS1vdmVydmlldyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG4gIC5kYXktbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICB9XFxuICBcXG4gIC5kYXktb3ZlcnZpZXctcmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLmZvcmVjYXN0LWV4cGFuZHtcXG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICB9XFxuICBcXG4gIC5kYXktZGV0YWlscyBsaSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLXRvcDogNnB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XFxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xcbiAgfVxcbiAgXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkKSB7XG4gIGlmICh0eXBlb2YgZCAhPT0gJ251bWJlcicgfHwgaXNOYU4oZCkpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICAvLyBrZWVwIHdpdGhpbiB0aGUgcmFuZ2U6IDAgPD0gZCA8IDM2MFxuICBkID0gZCAlIDM2MDtcblxuICBpZiAoMTEuMjUgPD0gZCAmJiBkIDwgMzMuNzUpIHtcbiAgICByZXR1cm4gXCJOTkVcIjtcbiAgfSBlbHNlIGlmICgzMy43NSA8PSBkICYmIGQgPCA1Ni4yNSkge1xuICAgIHJldHVybiBcIk5FXCI7XG4gIH0gZWxzZSBpZiAoNTYuMjUgPD0gZCAmJiBkIDwgNzguNzUpIHtcbiAgICByZXR1cm4gXCJFTkVcIjtcbiAgfSBlbHNlIGlmICg3OC43NSA8PSBkICYmIGQgPCAxMDEuMjUpIHtcbiAgICByZXR1cm4gXCJFXCI7XG4gIH0gZWxzZSBpZiAoMTAxLjI1IDw9IGQgJiYgZCA8IDEyMy43NSkge1xuICAgIHJldHVybiBcIkVTRVwiO1xuICB9IGVsc2UgaWYgKDEyMy43NSA8PSBkICYmIGQgPCAxNDYuMjUpIHtcbiAgICByZXR1cm4gXCJTRVwiO1xuICB9IGVsc2UgaWYgKDE0Ni4yNSA8PSBkICYmIGQgPCAxNjguNzUpIHtcbiAgICByZXR1cm4gXCJTU0VcIjtcbiAgfSBlbHNlIGlmICgxNjguNzUgPD0gZCAmJiBkIDwgMTkxLjI1KSB7XG4gICAgcmV0dXJuIFwiU1wiO1xuICB9IGVsc2UgaWYgKDE5MS4yNSA8PSBkICYmIGQgPCAyMTMuNzUpIHtcbiAgICByZXR1cm4gXCJTU1dcIjtcbiAgfSBlbHNlIGlmICgyMTMuNzUgPD0gZCAmJiBkIDwgMjM2LjI1KSB7XG4gICAgcmV0dXJuIFwiU1dcIjtcbiAgfSBlbHNlIGlmICgyMzYuMjUgPD0gZCAmJiBkIDwgMjU4Ljc1KSB7XG4gICAgcmV0dXJuIFwiV1NXXCI7XG4gIH0gZWxzZSBpZiAoMjU4Ljc1IDw9IGQgJiYgZCA8IDI4MS4yNSkge1xuICAgIHJldHVybiBcIldcIjtcbiAgfSBlbHNlIGlmICgyODEuMjUgPD0gZCAmJiBkIDwgMzAzLjc1KSB7XG4gICAgcmV0dXJuIFwiV05XXCI7XG4gIH0gZWxzZSBpZiAoMzAzLjc1IDw9IGQgJiYgZCA8IDMyNi4yNSkge1xuICAgIHJldHVybiBcIk5XXCI7XG4gIH0gZWxzZSBpZiAoMzI2LjI1IDw9IGQgJiYgZCA8IDM0OC43NSkge1xuICAgIHJldHVybiBcIk5OV1wiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIk5cIjtcbiAgfVxufTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgZ2V0VGFyZ2V0IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IGZ1bmN0aW9uKGNzcywgc3R5bGUpe1xuICAgICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgICB9XG4gIH07XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbihzdHlsZSkge1xuICAgICAgICB2YXIgbm9uY2UgPVxuICAgICAgICAgIHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgICAgICBpZiAobm9uY2UpIHtcbiAgICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKHN0eWxlKXtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KFwiaGVhZFwiKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiXG4gICAgICApO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH07XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYXJnZXQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsImNvbnN0IHdlYXRoZXJBUEkgPVwiOTQwNTYyYmVkNGVhOGViODlkZGMwY2M4ZTNhYWMyYjRcIlxuY29uc3QgcGxhY2VzQVBJID0gXCJBSXphU3lEMldtQzAyRkpSaDQ3VWxYM1ZHeUJwTEZLejZNeC1xQ3dcIlxuY29uc3QgZ2VvY29kaW5nQVBJID0gXCJmY2YyMDdkNTg2NDE2ZGI1ODAyODI0ODA3NjhhNjRlNlwiXG5cbmV4cG9ydHt3ZWF0aGVyQVBJLCBnZW9jb2RpbmdBUEl9IiwiaW1wb3J0IHsgd2VhdGhlckFQSSwgZ2VvY29kaW5nQVBJIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5cbi8vIGNvbnRhaW5zIHNjcmlwdHMgZm9yIGNvbW11bmljYXRpbmcgd2l0aCBBUElzIGFuZCBmb3JtYXRpbmcgZGF0YS5cblxuXG5jb25zdCBnZW9jb2RlID0gYXN5bmMgKHNlYXJjaFRleHQpID0+IHtcbiAgLy9yZXR1cm5zIGFuIG9iamVjdCB3aXRoIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUgaW5mb3JtYXRpb24gZnJvbSBzZWFyY2ggdGV4dFxuICBjb25zdCBVUkwgPSBgaHR0cDovL2FwaS5wb3NpdGlvbnN0YWNrLmNvbS92MS9mb3J3YXJkP2FjY2Vzc19rZXk9JHtnZW9jb2RpbmdBUEl9JnF1ZXJ5PSR7c2VhcmNoVGV4dH1gO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTCk7XG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuICB9XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoXG4gICAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtYmFyXCIpXG4gICAgICAgIC52YWx1ZS5zcGxpdChcIixcIilbMF1cbiAgICAgICAgLnRvTG93ZXJDYXNlKCkgPT09IGRhdGEuZGF0YVtpXS5uYW1lLnRvTG93ZXJDYXNlKClcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhLmRhdGFbaV07XG4gICAgfVxuICB9XG4gIHJldHVybiBkYXRhLmRhdGFbMF07XG59O1xuXG5jb25zdCBnZXRXZWF0aGVyID0gYXN5bmMgKGxhdCwgbG9uKSA9PiB7XG4gIC8vdXNlcyB0aGUgb25lIGNhbGwgYXBpIGZyb20gb3BlbndlYXRoZXJtYXAub3JnIHRvIGdldCBkZXRhaWxlZCB3ZWF0aGVyIGluZm9ybWF0aW9uIGZvciBhIGxvY2F0aW9uIGZyb20gbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZVxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mdW5pdHM9aW1wZXJpYWwmZXhjbHVkZT1taW51dGVseSZhcHBpZD0ke3dlYXRoZXJBUEl9YFxuICApO1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcbiAgfVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cblxuZXhwb3J0IHsgZ2VvY29kZSwgZ2V0V2VhdGhlcn07XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgZ2VvY29kZSwgZ2V0V2VhdGhlciB9IGZyb20gXCIuL2ZvcmVjYXN0XCI7XG5pbXBvcnQgeyBwb3B1bGF0ZU1haW4gfSBmcm9tIFwiLi9tYWluLXdlYXRoZXJcIjtcbmltcG9ydCB7IHBvcHVsYXRlV2Vla2x5Rm9yZWNhc3QgfSBmcm9tIFwiLi93ZWVrbHktZm9yZWNhc3RcIjtcblxuY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWZvcm1cIik7XG5jb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1iYXJcIik7XG5cbnNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhc3luYyAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGdlb2NvZGVEYXRhID0gYXdhaXQgZ2VvY29kZShzZWFyY2hCYXIudmFsdWUpO1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXIoXG4gICAgTWF0aC5mbG9vcihnZW9jb2RlRGF0YS5sYXRpdHVkZSAqIDEwMCkgLyAxMDAsXG4gICAgTWF0aC5mbG9vcihnZW9jb2RlRGF0YS5sb25naXR1ZGUgKiAxMDApIC8gMTAwXG4gICk7XG4gIGNvbnNvbGUubG9nKGdlb2NvZGVEYXRhKTtcbiAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICBwb3B1bGF0ZU1haW4od2VhdGhlckRhdGEsIGdlb2NvZGVEYXRhKTtcbiAgcG9wdWxhdGVXZWVrbHlGb3JlY2FzdCh3ZWF0aGVyRGF0YSlcbn0pO1xuXG5mdW5jdGlvbiByZW1vdmVDaGlsZHJlbihwYXJlbnQpIHtcbiAgLy9yZW1vdmVzIGFsbCBjaGlsZHJlbiBvZiBhbiBlbGVtZW50XG4gIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5peCh1bml4U3RyaW5nKSB7XG4gIGNvbnN0IGRhdGVPYmogPSBuZXcgRGF0ZSh1bml4U3RyaW5nICogMTAwMCk7XG4gIGZ1bmN0aW9uIHRpbWUoKXtcbiAgICByZXR1cm4gZGF0ZU9iai50b1RpbWVTdHJpbmcoKS5zbGljZSgwLCA1KTtcbiAgfVxuICBmdW5jdGlvbiBkYXkoKXtcbiAgICBjb25zdCBkYXkgPSBkYXRlT2JqLnRvRGF0ZVN0cmluZygpLnNsaWNlKDAsMylcbiAgICBpZihkYXk9PT1cIlN1blwiKSByZXR1cm4gXCJTdW5kYXlcIlxuICAgIGlmKGRheT09PVwiTW9uXCIpIHJldHVybiBcIk1vbmRheVwiXG4gICAgaWYoZGF5PT09XCJUdWVcIikgcmV0dXJuIFwiVHVlc2RheVwiXG4gICAgaWYoZGF5PT09XCJXZWRcIikgcmV0dXJuIFwiV2VkbmVzZGF5XCJcbiAgICBpZihkYXk9PT1cIlRodVwiKSByZXR1cm4gXCJUaHVyc2RheVwiXG4gICAgaWYoZGF5PT09XCJGcmlcIikgcmV0dXJuIFwiRnJpZGF5XCJcbiAgICBpZihkYXk9PT1cIlNhdFwiKSByZXR1cm4gXCJTYXR1cmRheVwiXG4gIH1cbiAgcmV0dXJuIHt0aW1lLCBkYXl9XG59XG5cbmV4cG9ydCB7IHJlbW92ZUNoaWxkcmVuLCB1bml4IH07XG4iLCJpbXBvcnQgeyByZW1vdmVDaGlsZHJlbiwgdW5peCB9IGZyb20gXCIuXCI7XG5cblxuXG5mdW5jdGlvbiBuZXdIb3VySW5mbyhob3VybHlPYmopIHtcbiAgY29uc3QgaG91ckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob3VySW5mby5jbGFzc0xpc3QuYWRkKFwiaG91ci1pbmZvXCIpO1xuXG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZW1wLmNsYXNzTGlzdC5hZGQoXCJob3VyLXRlbXBcIik7XG4gIHRlbXAudGV4dENvbnRlbnQgPSBgJHtNYXRoLmZsb29yKGhvdXJseU9iai50ZW1wIC8gMSl9wrBgO1xuICBob3VySW5mby5hcHBlbmRDaGlsZCh0ZW1wKTtcblxuICBjb25zdCBpY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaWNvbkRpdi5jbGFzc0xpc3QuYWRkKFwiaG91ci1pY29uXCIpO1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaWNvbi5jbGFzc0xpc3QuYWRkKFwic21hbGwtaWNvblwiKTtcbiAgaWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtob3VybHlPYmoud2VhdGhlclswXS5pY29ufUAyeC5wbmdgO1xuICBpY29uRGl2LmFwcGVuZENoaWxkKGljb24pO1xuICBob3VySW5mby5hcHBlbmRDaGlsZChpY29uRGl2KTtcblxuICBjb25zdCBwcmVjaXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcmVjaXBEaXYuY2xhc3NMaXN0LmFkZChcImhvdXItcHJlY2lwXCIpO1xuICBwcmVjaXBEaXYuaW5uZXJIVE1MID0gXCI8ZGl2PnByZWNpcDo8L2Rpdj5cIjtcbiAgY29uc3QgcG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcG9wLnRleHRDb250ZW50ID0gYCR7aG91cmx5T2JqLnBvcH0lYDtcbiAgcHJlY2lwRGl2LmFwcGVuZENoaWxkKHBvcCk7XG4gIGhvdXJJbmZvLmFwcGVuZENoaWxkKHByZWNpcERpdik7XG5cbiAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpbWUuY2xhc3NMaXN0LmFkZChcImhvdXItdGltZVwiKTtcbiAgdGltZS50ZXh0Q29udGVudCA9IHVuaXgoaG91cmx5T2JqLmR0KS50aW1lKCk7XG4gIGhvdXJJbmZvLmFwcGVuZENoaWxkKHRpbWUpO1xuXG4gIHJldHVybiBob3VySW5mbztcbn1cblxuZnVuY3Rpb24gY3VycmVudFRlbXAod2VhdGhlckRhdGEpIHtcbiAgY29uc3QgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRlbXBEaXYuY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtdGVtcC1kYXRhXCIpO1xuICB0ZW1wRGl2LmlkID0gXCJjdXJyZW50LXRlbXAtZGF0YVwiO1xuICB0ZW1wRGl2LmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwibWFpbi1oaWdobG93XCIgaWQ9XCJtYWluLWhpZ2hsb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjdXJyZW50LWhpZ2hcIiBpZD1cImN1cnJlbnQtaGlnaFwiPkhpZ2g6ICR7TWF0aC5mbG9vcihcbiAgICAgICAgd2VhdGhlckRhdGEuZGFpbHlbMF0udGVtcC5tYXggLyAxXG4gICAgICApfcKwPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC1sb3dcIiBpZD1cImN1cnJlbnQtbG93XCI+TG93OiAke01hdGguZmxvb3IoXG4gICAgICAgIHdlYXRoZXJEYXRhLmRhaWx5WzBdLnRlbXAubWluXG4gICAgICApfcKwPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtdGVtcFwiIGlkPVwiY3VycmVudC10ZW1wXCI+XG4gICAgJHtNYXRoLmZsb29yKHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcCAvIDEpfTxzcGFuIGNsYXNzPVwiY1wiIGlkPVwiY1wiPsKwQzwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZmVlbHMtbGlrZVwiIGlkPVwiZmVlbHMtbGlrZVwiPkZlZWxzIGxpa2UgJHtNYXRoLmZsb29yKFxuICAgICAgd2VhdGhlckRhdGEuY3VycmVudC5mZWVsc19saWtlIC8gMVxuICAgICl9wrBDPC9kaXY+XG4gICAgYDtcblxuICByZXR1cm4gdGVtcERpdjtcbn1cblxuZnVuY3Rpb24gY3VycmVudENvbmRpdGlvbnMod2VhdGhlckRhdGEpIHtcbiAgY29uc3QgY29uZGl0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbmRpdGlvbnMuY2xhc3NMaXN0LmFkZChcIm1haW4tY29uZGl0aW9uc1wiKTtcbiAgY29uZGl0aW9ucy5pZCA9IFwibWFpbi1jb25kaXRpb25zXCI7XG4gIGNvbmRpdGlvbnMuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJtYWluLWljb25cIiBpZD1cIm1haW4taWNvblwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGlkPVwiaWNvbi1pbWdcIlxuICAgICAgICAgICAgc3JjPVwiaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt3ZWF0aGVyRGF0YS5jdXJyZW50LndlYXRoZXJbMF0uaWNvbn1AMngucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWRlc2NyaXB0aW9uXCIgaWQ9XCJtYWluLWRlc2NyaXB0aW9uXCI+JHt3ZWF0aGVyRGF0YS5jdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb259PC9kaXY+XG4gICAgYDtcbiAgcmV0dXJuIGNvbmRpdGlvbnM7XG59XG5cbmZ1bmN0aW9uIHBsYWNlTmFtZShnZW9jb2RlRGF0YSkge1xuICBjb25zdCBwbGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBsYWNlLmNsYXNzTGlzdC5hZGQoXCJjaXR5LW5hbWVcIik7XG4gIHBsYWNlLmlkID0gXCJjaXR5LW5hbWVcIjtcbiAgcGxhY2UudGV4dENvbnRlbnQgPSBnZW9jb2RlRGF0YS5sYWJlbDtcbiAgcmV0dXJuIHBsYWNlO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUhvdXJseSh3ZWF0aGVyRGF0YSkge1xuICBjb25zdCBob3VybHlDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvdXJseS1mb3JlY2FzdFwiKTtcbiAgcmVtb3ZlQ2hpbGRyZW4oaG91cmx5Q29udGFpbmVyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgaG91cmx5Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0hvdXJJbmZvKHdlYXRoZXJEYXRhLmhvdXJseVtpXSkpO1xuICB9XG59XG5mdW5jdGlvbiBwb3B1bGF0ZU1haW4od2VhdGhlckRhdGEsIGdlb2NvZGVEYXRhKSB7XG4gIGNvbnN0IG1haW5XZWF0aGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLXdlYXRoZXJcIik7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtdGVtcC1kYXRhXCIpKSB7XG4gICAgbWFpbldlYXRoZXIucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXRlbXAtZGF0YVwiKSk7XG4gIH1cbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1jb25kaXRpb25zXCIpKSB7XG4gICAgbWFpbldlYXRoZXIucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbmRpdGlvbnNcIikpO1xuICB9XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNpdHktbmFtZVwiKSkge1xuICAgIG1haW5XZWF0aGVyLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2l0eS1uYW1lXCIpKTtcbiAgfVxuXG4gIG1haW5XZWF0aGVyLmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wKHdlYXRoZXJEYXRhKSk7XG4gIG1haW5XZWF0aGVyLmFwcGVuZENoaWxkKGN1cnJlbnRDb25kaXRpb25zKHdlYXRoZXJEYXRhKSk7XG4gIG1haW5XZWF0aGVyLmFwcGVuZENoaWxkKHBsYWNlTmFtZShnZW9jb2RlRGF0YSkpO1xuICBwb3B1bGF0ZUhvdXJseSh3ZWF0aGVyRGF0YSk7XG59XG5cbmV4cG9ydCB7IHBvcHVsYXRlTWFpbiB9O1xuIiwiY29uc3QgZDJkID0gcmVxdWlyZShcImRlZ3JlZXMtdG8tZGlyZWN0aW9uXCIpOyAvL2NvbnZlcnRzIHdpbmQgZGVncmVlcyB0byBhIGNvbXBhc3MgZGlyZWN0aW9uXG5pbXBvcnQgeyB1bml4IH0gZnJvbSBcIi5cIjtcblxuZnVuY3Rpb24gY3JlYXRlV2Vla2x5Rm9yZWNhc3Qod2VhdGhlckRhdGEpIHtcbiAgbGV0IGZvcmVjYXN0TGlzdCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgIGxldCBkYXk7XG4gICAgY29uc3QgZm9yZWNhc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcmVjYXN0RGl2LmNsYXNzTGlzdC5hZGQoXCJkYXktZm9yZWNhc3RcIik7XG4gICAgaWYgKGkgPT09IDApIHtcbiAgICAgIGRheSA9IFwiVG9kYXkncyBmb3JlY2FzdFwiO1xuICAgICAgZm9yZWNhc3REaXYuaWQgPSBcInRvZGF5LWZvcmVjYXN0XCI7XG4gICAgfSBlbHNlIGRheSA9IHVuaXgod2VhdGhlckRhdGEuZGFpbHlbaV0uZHQpLmRheSgpO1xuXG4gICAgZm9yZWNhc3REaXYuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJkYXktb3ZlcnZpZXdcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkYXktb3ZlcnZpZXctbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGF5LW5hbWVcIj4ke2RheX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRheS1kZXNjcmlwdGlvblwiPiR7XG4gICAgICAgICAgd2VhdGhlckRhdGEuZGFpbHlbaV0ud2VhdGhlclswXS5kZXNjcmlwdGlvblxuICAgICAgICB9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkYXktb3ZlcnZpZXctcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRheS1pY29uXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3M9XCJzbWFsbC1pY29uIGRheS1pY29uXCJcbiAgICAgICAgICAgIHNyYz1cImh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7XG4gICAgICAgICAgICAgIHdlYXRoZXJEYXRhLmRhaWx5W2ldLndlYXRoZXJbMF0uaWNvblxuICAgICAgICAgICAgfUAyeC5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRheS1oaWdobG93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRheS1oaWdoXCI+JHtNYXRoLmZsb29yKFxuICAgICAgICAgICAgd2VhdGhlckRhdGEuZGFpbHlbaV0udGVtcC5tYXggLyAxXG4gICAgICAgICAgKX3CsFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXktbG93XCI+JHtNYXRoLmZsb29yKHdlYXRoZXJEYXRhLmRhaWx5W2ldLnRlbXAubWluIC8gMSl9wrBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8dWwgY2xhc3M9XCJkYXktZGV0YWlsc1wiPlxuICAgICAgICA8bGk+PGRpdj5QcmVjaXBpdGF0aW9uPC9kaXY+IDxkaXY+JHtNYXRoLmZsb29yKFxuICAgICAgICAgICh3ZWF0aGVyRGF0YS5kYWlseVtpXS5wb3AgKiAxMDApIC8gMVxuICAgICAgICApfSU8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPjxkaXY+V2luZDwvZGl2PiBcbiAgICAgICAgICA8ZGl2PiR7d2VhdGhlckRhdGEuZGFpbHlbaV0ud2luZF9zcGVlZH1rbS9oIFxuICAgICAgICAgICR7ZDJkKHdlYXRoZXJEYXRhLmRhaWx5W2ldLndpbmRfZGVnKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPjxkaXY+SHVtaWRpdHk8L2Rpdj4gPGRpdj4ke3dlYXRoZXJEYXRhLmRhaWx5W2ldLmh1bWlkaXR5fSU8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPjxkaXY+VVYgSW5kZXg8L2Rpdj4gPGRpdj4ke3dlYXRoZXJEYXRhLmRhaWx5W2ldLnV2aX08L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPjxkaXY+U3VucmlzZS9TdW5zZXQ8L2Rpdj4gPGRpdj4ke3VuaXgoXG4gICAgICAgICAgd2VhdGhlckRhdGEuZGFpbHlbaV0uc3VucmlzZVxuICAgICAgICApLnRpbWUoKX0vJHt1bml4KHdlYXRoZXJEYXRhLmRhaWx5W2ldLnN1bnNldCkudGltZSgpfTwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgIDwvdWw+YDtcbiAgICBmb3JlY2FzdExpc3QucHVzaChmb3JlY2FzdERpdik7XG4gIH1cbiAgcmV0dXJuIGZvcmVjYXN0TGlzdDtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVXZWVrbHlGb3JlY2FzdCh3ZWF0aGVyRGF0YSkge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWVrbHktZm9yZWNhc3RcIikpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2Vla2x5LWZvcmVjYXN0XCIpKTtcbiAgfVxuICBjb25zdCB3ZWVrbHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3ZWVrbHlEaXYuY2xhc3NMaXN0LmFkZChcIndlZWtseS1mb3JlY2FzdFwiKTtcbiAgd2Vla2x5RGl2LmlkID0gXCJ3ZWVrbHktZm9yZWNhc3RcIjtcbiAgY3JlYXRlV2Vla2x5Rm9yZWNhc3Qod2VhdGhlckRhdGEpLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICB3ZWVrbHlEaXYuYXBwZW5kQ2hpbGQobm9kZSk7XG4gIH0pO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdlZWtseURpdik7XG59XG5cbmV4cG9ydCB7IHBvcHVsYXRlV2Vla2x5Rm9yZWNhc3QgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=