module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation */ "./components/Navigation.js");
var _jsxFileName = "/Users/maho15/Projects/djneuro/components/Layout.js";


var layoutStyle = {}; // const Layout = Page => {
//     return () => (
//         <div style={layoutStyle}>
//             <Navigation />
//             <Page />
//         </div>
//     );
// };

var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: layoutStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/maho15/Projects/djneuro/components/Navigation.js";


var linkStyle = {
  marginRight: '8px'
};

var Navigation = function Navigation() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Services")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Team")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/newsIndex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "News")));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/newsIndex.js":
/*!****************************!*\
  !*** ./pages/newsIndex.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gray-matter */ "gray-matter");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");







var _jsxFileName = "/Users/maho15/Projects/djneuro/pages/newsIndex.js";






var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(_default, _React$Component);

  function _default() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _default);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(_default).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Layout_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "News"), this.props.posts.map(function (_ref) {
        var data = _ref.document.data,
            slug = _ref.slug;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, data.date.toString().split('T')[0]), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: {
            pathname: '/post',
            query: {
              id: slug
            }
          },
          key: slug,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, data.title)));
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var posts;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Get contents from posts folder
                posts = function (items) {
                  // console.log(items);
                  var keys = items.keys();
                  var values = keys.map(items);
                  var data = keys.map(function (key, index) {
                    // Create slug from filename
                    var slug = key.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.');
                    var value = values[index]; // Parse document

                    var document = gray_matter__WEBPACK_IMPORTED_MODULE_8___default()(value.default); // document = { content: '', data: { title:'', date: 2018-12-04T00:00:00.000Z}, isEmpty: false, excerpt: '', orig: <Buffer 2d 2d...>}

                    return {
                      document: document,
                      slug: slug
                    };
                  }); // console.log(data[0]);

                  var sortedData = lodash__WEBPACK_IMPORTED_MODULE_9___default.a.orderBy(data, ['document.data.date'], ['asc']);

                  console.log(sortedData);
                  return sortedData;
                }(__webpack_require__("./posts sync recursive \\.md$")); // console.log(posts[0].document.data);


                return _context.abrupt("return", {
                  posts: posts
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ }),

/***/ "./posts sync recursive \\.md$":
/*!**************************!*\
  !*** ./posts sync \.md$ ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./A-Showcase-for-Janelia-Datasets.md": "./posts/A-Showcase-for-Janelia-Datasets.md",
	"./Completion-of-IBL-Project-M2-and-Starting-M3.md": "./posts/Completion-of-IBL-Project-M2-and-Starting-M3.md",
	"./Completion-of-Pilot-Project-with-UCSD.md": "./posts/Completion-of-Pilot-Project-with-UCSD.md",
	"./DataJoint-Workshop-in-Princeton.md": "./posts/DataJoint-Workshop-in-Princeton.md",
	"./Dr-Austin-Hilberg-and-Dr-Shan-Shen-Join-Vathes-Team-as-Data-Scientists.md": "./posts/Dr-Austin-Hilberg-and-Dr-Shan-Shen-Join-Vathes-Team-as-Data-Scientists.md",
	"./MAP-contract.md": "./posts/MAP-contract.md",
	"./Multi-photon-Pipeline-with-Moser-Group.md": "./posts/Multi-photon-Pipeline-with-Moser-Group.md",
	"./Neuro-Reproducibility-Hackashop.md": "./posts/Neuro-Reproducibility-Hackashop.md",
	"./NeuroNex-Sponsors-a-Two-Day-DataJoint-Workshop-in-Houston.md": "./posts/NeuroNex-Sponsors-a-Two-Day-DataJoint-Workshop-in-Houston.md",
	"./Princeton-Neuroscience-Institute-Hires-Vathes-to-Expand-the-Documentation-for-DataJoint.md": "./posts/Princeton-Neuroscience-Institute-Hires-Vathes-to-Expand-the-Documentation-for-DataJoint.md",
	"./Princeton-Neuroscience-Institute-Partners-with-Vathes-to-Support-the-Adoption-of-DataJoint.md": "./posts/Princeton-Neuroscience-Institute-Partners-with-Vathes-to-Support-the-Adoption-of-DataJoint.md",
	"./Vathes-Completes-the-mLIMS-Synchronization-Project-for-the-Moser-Group.md": "./posts/Vathes-Completes-the-mLIMS-Synchronization-Project-for-the-Moser-Group.md",
	"./Vathes-Conducts-a-Two-Day-Workshop-at-Princeton-University.md": "./posts/Vathes-Conducts-a-Two-Day-Workshop-at-Princeton-University.md",
	"./Vathes-Conducts-a-Two-Day-Workshop-for-the-Moser-Group.md": "./posts/Vathes-Conducts-a-Two-Day-Workshop-for-the-Moser-Group.md",
	"./Vathes-Exhibiting-at-Bernstein-Conference-in-September-2018.md": "./posts/Vathes-Exhibiting-at-Bernstein-Conference-in-September-2018.md",
	"./Vathes-Meets-with-International-Brain-Lab-Data-Science-Team.md": "./posts/Vathes-Meets-with-International-Brain-Lab-Data-Science-Team.md",
	"./Vathes-Reaches-Agreement-with-the-International-Brain-Lab-to-Develop-Their-Pipeline-for-Data-Processing-and-Analysis.md": "./posts/Vathes-Reaches-Agreement-with-the-International-Brain-Lab-to-Develop-Their-Pipeline-for-Data-Processing-and-Analysis.md",
	"./Vathes-Welcomes-Dr-Thinh-Nguyen-as-Data-Scientist.md": "./posts/Vathes-Welcomes-Dr-Thinh-Nguyen-as-Data-Scientist.md",
	"./Vathes-attends-the-2017-Society-for-Neuroscience-Conference.md": "./posts/Vathes-attends-the-2017-Society-for-Neuroscience-Conference.md",
	"./Vathes-contracts-with-Matt-McGinley-lab.md": "./posts/Vathes-contracts-with-Matt-McGinley-lab.md",
	"./Vathes-team-visits-Harvard.md": "./posts/Vathes-team-visits-Harvard.md",
	"./Vathes-team-visits-Janelia-Farm.md": "./posts/Vathes-team-visits-Janelia-Farm.md",
	"./Vathes-team-visits-University-of-Utah.md": "./posts/Vathes-team-visits-University-of-Utah.md",
	"./Welcome-Chris.md": "./posts/Welcome-Chris.md",
	"./Welcoming-Raphael-Guzman-to-Our-Team.md": "./posts/Welcoming-Raphael-Guzman-to-Our-Team.md"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./posts sync recursive \\.md$";

/***/ }),

/***/ "./posts/A-Showcase-for-Janelia-Datasets.md":
/*!**************************************************!*\
  !*** ./posts/A-Showcase-for-Janelia-Datasets.md ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: A Showcase for Janelia Datasets\ndate: 2018-12-04 \ntags:\n- Janelia Farm\n- DataJoint\n- NWB\ncategories: \n- News\n---\n\n![alt text](./static/posts/A-Showcase-for-Janelia-Datasets/hhmi_janelia_logo.png \"HHMI Janelia logo\")\nVathes LLC has launched a project in collaboration with [Karel Svoboda's Lab](https://www.janelia.org/lab/svoboda-lab) at the Janelia Research Campus of the Howard Hughes Medical Institute to showcase DataJoint pipelines for their recent publications.  Each pipeline will have the ability to export data into the Neuroscience Without Borders 2.0 format. The project will be completed in the fall of 2019 and its home page will be [https://github.com/vathes/NWB-showcase](https://github.com/vathes/NWB-showcase)");

/***/ }),

/***/ "./posts/Completion-of-IBL-Project-M2-and-Starting-M3.md":
/*!***************************************************************!*\
  !*** ./posts/Completion-of-IBL-Project-M2-and-Starting-M3.md ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: Completion of IBL Project Milestone 2 and Starting Milestone 3\nlayout: postNew.pug\ndate: 2019-03-12\ntags:\n- DataJoint\n- IBL\ncategories: \n- News\n---\n\n![alt text](./static/posts/Completion-of-IBL-Project-M2-and-Starting-M3/IBL%20logo.png \"IBL Logo\")\nVathes has successfully completed Milestone 2 of our contract with the [International Brain Laboratory (IBL)](https://www.internationalbrainlab.com/), where we developed data pipelines to handle the core mouse and behavioral information collected through IBL projects. In Milestone 3, Vathes will continue to develop and extend the data pipeline, and we are excited to be developing a web interface to support intuitive navigation of the massive behavioral and electrophysiological data collected by IBL.");

/***/ }),

/***/ "./posts/Completion-of-Pilot-Project-with-UCSD.md":
/*!********************************************************!*\
  !*** ./posts/Completion-of-Pilot-Project-with-UCSD.md ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: Completion of Pilot Project with UCSD\nlayout: postNew.pug\ndate: 2019-03-15\ntags:\n- DataJoint\n- UCSD\ncategories: \n- News\n---\nVathes successfully completed the pilot phase of an ongoing project with UCSD. The project aims to establish an overarching data pipeline and workflow using DataJoint for a multi-lab collaborative large scale microscopy neuroimaging project, aiming to define/expand mouse brain atlases using machine learning approaches. As a core component of the project, Neuroglancer will be used as the web-based, 3D visualization and annotation software. To this end, Vathes is committed to develop and support toolsets for seamless integration between DataJoint and Neuroglancer.");

/***/ }),

/***/ "./posts/DataJoint-Workshop-in-Princeton.md":
/*!**************************************************!*\
  !*** ./posts/DataJoint-Workshop-in-Princeton.md ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: DataJoint Workshop in Princeton\nlayout: postNew.pug\ndate: 2019-02-16\ntags:\n- DataJoint\n- PNI\n- workshops\ncategories: \n- Events\n---\n![alt text](./static/posts/DataJoint-Workshop-in-Princeton/PNI%20logo.png \"PNI Logo\")\nVathes conducted a 3 day DataJoint workshop at Princeton as part of our continued involvement with Princeton U19 project {% post_link \"Princeton-Neuroscience-Institute-Partners-with-Vathes-to-Support-the-Adoption-of-DataJoint\" \"U19 project\" %}. We were excited to cover topics ranging from DataJoint introduction, infrastructure setup and management as well as hands-on design and implementation of data pipelines. Vathes will continue to be involved in Princeton’s U19 project, providing support on data pipeline development and deployment.");

/***/ }),

/***/ "./posts/Dr-Austin-Hilberg-and-Dr-Shan-Shen-Join-Vathes-Team-as-Data-Scientists.md":
/*!*****************************************************************************************!*\
  !*** ./posts/Dr-Austin-Hilberg-and-Dr-Shan-Shen-Join-Vathes-Team-as-Data-Scientists.md ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: Dr. Austin Hilberg and Dr. Shan Shen Join Vathes Team as Data Scientists\nlayout: postNew.pug\ndate: 2018-06-18 \ntags:\n- team\ncategories: \n- News\n---\n\n![alt text](./static/posts/Dr-Austin-Hilberg-and-Dr-Shan-Shen-Join-Vathes-Team-as-Data-Scientists/Austin&Shan.jpg \"Austin and Shan\")\nVathes is excited to welcome Austin Hilberg and Shan Shen to the team. \nAustin Hilberg has a Ph.D. in Biomedical Engineering from UCLA, where he studied the human visual system and visual attention control using fMRI and EEG. Since graduating, he has been working in Silicon Valley developing medical ultrasound systems. In his spare time, he enjoys creating virtual reality experiences and tinkering with electronic devices. Austin is very excited to apply his engineering, programming, and neuroscience background to his role as a Data Scientist at Vathes.\n&nbsp;\nShan Shen has a Ph.D. in Neuroscience from Baylor College of Medicine. During her graduate training, she studied feedback circuits in mouse visual cortex with a wide range of techniques including optogenetics, imaging and electrophysiology. She also has experience working on human visual psychophysics, using Bayesian modeling. Throughout her academic career, she has been using DataJoint to organize data and facilitate analysis. With a combination of experience in experiments, modeling, and data analysis, Shan is very excited to work as a Data Scientist at Vathes and is looking forward to helping neuroscientists build efficient pipelines for data analysis. \n\n\n");

/***/ }),

/***/ "./posts/MAP-contract.md":
/*!*******************************!*\
  !*** ./posts/MAP-contract.md ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: Vathes joins a multi-lab collaborative project to study neural circuits of decision making\nlayout: postNew.pug\ndate: 2017-08-01 11:40:51\ntags:\n- MAP\n- DataJoint\ncategories: \n- News\n---\n\nVathes LLC began work under a service agreement to build and support the data pipeline for the multi-lab collaborative project nicknamed the “Mesoscale Activity Project” or MAP.  This three-year project aims to analyze brain-wide neural activity during behavior and publish the datasets for the general scientific community.  A more detailed description of the project can found at  \nhttps://www.simonsfoundation.org/funded-project/%20multi-regional-neuronal-dynamics-of-memory-guided-flexible-behavior/\n");

/***/ }),

/***/ "./posts/Multi-photon-Pipeline-with-Moser-Group.md":
/*!*********************************************************!*\
  !*** ./posts/Multi-photon-Pipeline-with-Moser-Group.md ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: Multi-photon Pipeline with Moser Group\nlayout: postNew.pug\ndate: 2019-03-18\ntags:\n- DataJoint\n- Moser Group\n- Kavli Institute\ncategories: \n- News\n---\n![alt text](./static/posts/Multi-photon-Pipeline-with-Moser-Group/Kavli.png \"Kavli Institute Logo\")\nVathes is thrilled to extend the ongoing project with Moser group from Kavli institute to now support the development and extension of multi-photon imaging data pipelines, in addition to the continued involvement and development of the electrophysiology pipeline in freely behaving animals. The pipeline aims to seamlessly connect data acquisition, pre-processing, and behavioral analysis.\n");

/***/ }),

/***/ "./posts/Neuro-Reproducibility-Hackashop.md":
/*!**************************************************!*\
  !*** ./posts/Neuro-Reproducibility-Hackashop.md ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: Neuro Reproducibility Hackashop\nlayout: postNew.pug\ndate: 2019-03-08\ntags:\n- DataJoint\n- NeuroNex\ncategories: \n- News\n---\n![alt text](./static/posts/Neuro-Reproducibility-Hackashop/NeuroReproducibilityHackashop.png \"Neuro Reproducibility Hackashop sign\")\nThe 2019 Neuro Reproducibility Hackashop saw the presentation of many exciting developments for researchers and tool builders within the Neuroscience community. With the goal of promoting reproducibility and interoperability of neuro toolsets, Vathes has worked closely with community leaders and tool builders and is committed to multiple upcoming interoperability efforts. Specifically, Vathes engineers have worked closely with NWB developers to outline a practical and effective pathway for enabling export capabilities  from DataJoint pipelines into NWB 2.0 files. Furthermore, we are very excited to start an interoperability project with the Gigantum team, in which a DataJoint pipeline can be configured to be used as an input to a Gigantum project. \n");

/***/ }),

/***/ "./posts/NeuroNex-Sponsors-a-Two-Day-DataJoint-Workshop-in-Houston.md":
/*!****************************************************************************!*\
  !*** ./posts/NeuroNex-Sponsors-a-Two-Day-DataJoint-Workshop-in-Houston.md ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: NeuroNex Sponsors a Two-Day DataJoint Workshop in Houston\nlayout: postNew.pug\ndate: 2018-04-19 \ntags:\n- DataJoint\n- workshops\n- NeuroNex\ncategories: \n- Events\n---\n&nbsp;\nEdgar Y. Walker and Dimitri Yatsenko ran a two-day workshop on DataJoint sponsored by NeuroNex. The workshop was open to the public and targeted researchers with an interest in stronger data organization tools who had no prior experience working with DataJoint. Edgar led the workshop as the primary instructor. \n\nDay one covered introductory topics with demonstrations and exercises throughout the workshop. Day two covered hands-on applications of DataJoint, such as building a data pipeline from scratch for an existing project and extending an existing data pipeline with new analysis tables. Edgar also reviewed best practices for integrating DataJoint with other technologies such as GitHub and Docker.\n\nAll workshop materials are available at https://github.com/datajoint/neuronex_workshop_2018, and the videos are available at the following [link](https://www.youtube.com/playlist?list=PLRr0NOw6KdgJfF2gH-nCdJSnSGU_unVrV).\n\n<!-- more -->\n#### Workshop Videos\n[Introduction](https://www.youtube.com/watch?v=XkYf1SbRK0w) - Dimitri Yatsenko presents the background, motivation, and overview of DataJoint.\n{% youtube XkYf1SbRK0w %}\n\nSessions 0-7 \n• Session 0 – [Getting Connected](https://www.youtube.com/watch?v=QaGxJopGZg4) - Edgar Y. Walker describes how to set up DataJoint to connect with a database server.\n<!-- {% youtube QaGxJopGZg4 %} -->\n• Session 1 – [Getting Started with DataJoint](https://www.youtube.com/watch?v=NL8d4pdjMd0) - Edgar Y. Walker presents background concepts of a data pipeline, and shows how to use DataJoint to define a first pipeline with manual tables. He then shows how to insert, query, and delete data in the pipeline.\n<!-- {% youtube NL8d4pdjMd0 %} -->\n• Session 2 – [Imported and Computed Tables](https://www.youtube.com/watch?v=cBspbVHH14M) - Edgar Y. Walker shows how to extend a data pipeline with imported tables to import and store data present in external files. He then demonstrates how to define computations and their results as computed tables in the pipeline, taking a simple spike detection algorithm as an example.\n<!-- {% youtube cBspbVHH14M %} -->\n• Session 3 - [Design Patterns and Complex Query](https://www.youtube.com/watch?v=0MkDfjbgfEo) - Edgar Y. Walker revisits design patterns encountered in the example pipelines and discusses pipeline design. He then covers multiple advanced query exercises.\n<!-- {% youtube 0MkDfjbgfEo %} -->\n• Session 4 – [Case Study 1](https://www.youtube.com/watch?v=batpqziO8og) - Edgar Y. Walker presents a case study for designing a new data pipeline based on a specific research project.\n<!-- {% youtube batpqziO8og %} -->\n• Session 5 – [Case Study 2](https://www.youtube.com/watch?v=cSG9w1Boca8) - Edgar Y. Walker presents a case study where the students extend an existing data pipeline with new computations.\n<!-- {% youtube cSG9w1Boca8 %} -->\n• Session 6 - [Best Practices for Pipeline Design and Maintenance](https://www.youtube.com/watch?v=dE40CkUrwOg) - Edgar Y. Walker presents various tools and technologies that can be used together with DataJoint to facilitate data sharing and reproducible research. In particular, Edgar covers Git, GitHub and Docker.\n<!-- {% youtube dE40CkUrwOg %} -->\n• Session 7 - [Future Developments, Resources and Workshop Recap](https://www.youtube.com/watch?v=Z9NvAIXsNu4) - Dimitri Yatsenko discusses the upcoming roadmap for DataJoint and surrounding technology development. Edgar Y. Walker then provides a recap of the workshop and discusses further learning resources.\n<!-- {% youtube Z9NvAIXsNu4 %} -->\n");

/***/ }),

/***/ "./posts/Princeton-Neuroscience-Institute-Hires-Vathes-to-Expand-the-Documentation-for-DataJoint.md":
/*!**********************************************************************************************************!*\
  !*** ./posts/Princeton-Neuroscience-Institute-Hires-Vathes-to-Expand-the-Documentation-for-DataJoint.md ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: Princeton Neuroscience Institute Hires Vathes to Expand the Documentation for DataJoint\nlayout: postNew.pug\ndate: 2018-05-28 \ntags:\n- DataJoint\n- PNI\ncategories: \n- News\n---\n![alt text](./static/posts/Princeton-Neuroscience-Institute-Hires-Vathes-to-Expand-the-Documentation-for-DataJoint/PNI%20logo.png \"PNI Logo\")\n&nbsp;\nVathes entered into a contract with Princeton Neuroscience Institute (PNI) to complete thorough technical reference documentation for DataJoint by December 15, 2018.\n\n<!-- more -->");

/***/ }),

/***/ "./posts/Princeton-Neuroscience-Institute-Partners-with-Vathes-to-Support-the-Adoption-of-DataJoint.md":
/*!*************************************************************************************************************!*\
  !*** ./posts/Princeton-Neuroscience-Institute-Partners-with-Vathes-to-Support-the-Adoption-of-DataJoint.md ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: Princeton Neuroscience Institute Partners with Vathes to Support the Adoption of DataJoint\nlayout: postNew.pug\ndate: 2018-05-24 \ntags:\n- DataJoint\n- PNI\ncategories: \n- News\n---\n![alt text](./static/posts/Princeton-Neuroscience-Institute-Partners-with-Vathes-to-Support-the-Adoption-of-DataJoint/PNI%20logo.png \"PNI Logo\")\n&nbsp;\nBuilding off a {% post_link \"Vathes-Conducts-a-Two-Day-Workshop-at-Princeton-University\" \"January Workshop\" %} for the Princeton U19 group, Vathes and the Princeton Neuroscience Institute (PNI) officially entered a contract. Vathes will provide support for developing DataJoint pipeline for their U19 projects and support the adoption of DataJoint by PNI labs.\n\n<!-- more -->");

/***/ }),

/***/ "./posts/Vathes-Completes-the-mLIMS-Synchronization-Project-for-the-Moser-Group.md":
/*!*****************************************************************************************!*\
  !*** ./posts/Vathes-Completes-the-mLIMS-Synchronization-Project-for-the-Moser-Group.md ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: Vathes Completes the mLIMS Synchronization Project for the Moser Group\nlayout: postNew.pug\ndate: 2018-05-10 \ntags:\n- DataJoint\n- Moser Group\n- Kavli Institute\ncategories: \n- News\n---\n![alt text](./static/posts/Vathes-Completes-the-mLIMS-Synchronization-Project-for-the-Moser-Group/Kavli.png \"Kavli Institute Logo\")\nWorking closely with [Moser group](https://www.ntnu.edu/kavli/research/moser) and [BIOINFORX](https://bioinforx.com/) developers, Vathes completed the design of a DataJoint data pipeline to represent data stored in mLIMS and developed a utility to continuously synchronize data entered into [mLIMS]((https://bioinforx.com/lims2/product_mlims.php) into the DataJoint pipeline.\n\n<!-- more -->");

/***/ }),

/***/ "./posts/Vathes-Conducts-a-Two-Day-Workshop-at-Princeton-University.md":
/*!*****************************************************************************!*\
  !*** ./posts/Vathes-Conducts-a-Two-Day-Workshop-at-Princeton-University.md ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: Vathes Conducts a Two-Day Workshop at Princeton University\nlayout: postNew.pug\ndate: 2018-01-10 \ntags:\n- DataJoint\n- workshops\n- PNI\ncategories: \n- Events\n---\nDimitri Yatsenko and Edgar Y. Walker travelled to Princeton Neuroscience Institute (PNI) to run a two-day introductory workshop on how to build neuroscience data pipelines using DataJoint. Approximately fifty researchers involved with the [Princeton U19 program](https://www.princeton.edu/news/2017/10/24/seven-princeton-researchers-receive-nih-brain-initiative-awards) attended the workshop. On the first day, Dimitri and Edgar covered the basic principles and concepts of DataJoint. On day two, they covered applied examples, and the participants translated an existing project into the DataJoint pipeline with support from the instructors. \n&nbsp;\n![alt text](./static/posts/Vathes-Conducts-a-Two-Day-Workshop-at-Princeton-University/Princeton1.jpg \"Edgar visiting Princeton\")\n![alt text](./static/posts/Vathes-Conducts-a-Two-Day-Workshop-at-Princeton-University/Princeton2.jpg \"Dimitri visiting Princeton\")\n\n<!-- more -->");

/***/ }),

/***/ "./posts/Vathes-Conducts-a-Two-Day-Workshop-for-the-Moser-Group.md":
/*!*************************************************************************!*\
  !*** ./posts/Vathes-Conducts-a-Two-Day-Workshop-for-the-Moser-Group.md ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: Vathes Conducts a Two-Day Workshop for the Moser Group\nlayout: postNew.pug\ndate: 2018-02-01 \ntags:\n- DataJoint\n- workshops\n- Moser Group\n- Kavli Institute\ncategories: \n- Events\n---\n![alt text](./static/posts/Vathes-Conducts-a-Two-Day-Workshop-for-the-Moser-Group/Kavli.png \"Kavli Institute Logo\")\nDimitri Yatsenko and Edgar Y. Walker visited the Moser group (2014 Nobel Laureates) at NTNU [Kavli Institute](https://www.ntnu.edu/kavli/research/moser) to present on DataJoint. During the visit, Vathes reached an agreement to develop a DataJoint data pipeline that will stay synchronized to mouse and rat colony data organized and managed by [mLIMS](https://bioinforx.com/lims2/product_mlims.php). This development will allow the Moser group to have unified access to information relevant for experimental data collection and analysis through DataJoint, while at the same time leveraging well-established solutions for specialized data entry and management, such as the animal colony information handled by mLIMS.\n&nbsp;\n![alt text](./static/posts/Vathes-Conducts-a-Two-Day-Workshop-for-the-Moser-Group/MoserLabVisit.jpg \"Group photo with the Moser Lab\")\n\n<!-- more -->");

/***/ }),

/***/ "./posts/Vathes-Exhibiting-at-Bernstein-Conference-in-September-2018.md":
/*!******************************************************************************!*\
  !*** ./posts/Vathes-Exhibiting-at-Bernstein-Conference-in-September-2018.md ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: Vathes Exhibiting at Bernstein Conference in September 2018\nlayout: postNew.pug\ndate: 2018-08-15\ntags:\n- DataJoint\n- Bernstein Conference\ncategories: \n- Events\n---\n\n![alt text](./static/posts/Vathes-Exhibiting-at-Bernstein-Conference-in-September-2018/Bernstein_Conference_Flyer_2018.jpg \"Bernstein Conference 2018 Flyer Image\")\nFrom September 26-28, 2018, the Vathes team will be attending the [Bernstein Conference](http://bernstein-conference.de/) as an exhibitor. The Bernstein Conference is the largest annual Computational Neuroscience conference in Europe, and Vathes is looking forward to sharing information about our services with attendees. \n\n<!-- more -->\n");

/***/ }),

/***/ "./posts/Vathes-Meets-with-International-Brain-Lab-Data-Science-Team.md":
/*!******************************************************************************!*\
  !*** ./posts/Vathes-Meets-with-International-Brain-Lab-Data-Science-Team.md ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: Vathes Meets with International Brain Lab Data Science Team\nlayout: postNew.pug\ndate: 2018-01-30 \ntags:\n- DataJoint\n- IBL\ncategories: \n- Events\n---\n![alt text](./static/posts/Vathes-Meets-with-International-Brain-Lab-Data-Science-Team/IBL%20logo.png\" \"IBL Logo\")\nDimitri Yatsenko and Edgar Y. Walker travelled to the UK to present DataJoint to Kenneth Harris's group at UCL and discussed the integration of DataJoint with [International Brain Lab](https://www.internationalbrainlab.com/) projects.\n&nbsp;\n![alt text](./static/posts/Vathes-Meets-with-International-Brain-Lab-Data-Science-Team/UKvisit1.jpg \"Edgar in London\")\n![alt text](./static/posts/Vathes-Meets-with-International-Brain-Lab-Data-Science-Team/UKvisit2.jpg \"Dimitri in London\")\n\n<!-- more -->");

/***/ }),

/***/ "./posts/Vathes-Reaches-Agreement-with-the-International-Brain-Lab-to-Develop-Their-Pipeline-for-Data-Processing-and-Analysis.md":
/*!***************************************************************************************************************************************!*\
  !*** ./posts/Vathes-Reaches-Agreement-with-the-International-Brain-Lab-to-Develop-Their-Pipeline-for-Data-Processing-and-Analysis.md ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: Vathes Reaches Agreement with the International Brain Lab to Develop Their Pipeline for Data Processing and Analysis\nlayout: postNew.pug\ndate: 2018-05-20\ntags:\n- DataJoint\n- IBL\ncategories: \n- News\n---\n![alt text](./static/posts/Vathes-Reaches-Agreement-with-the-International-Brain-Lab-to-Develop-Their-Pipeline-for-Data-Processing-and-Analysis/IBL%20logo.png \"IBL Logo\")\nDataJoint was elected as the official platform for the data collection and analysis for the [International Brain Lab (IBL)](https://www.internationalbrainlab.com/). Over a one-year period, Vathes will work with participating labs to develop a data pipeline and support related developments in the DataJoint framework and web visualization platforms.\n\n<!-- more -->");

/***/ }),

/***/ "./posts/Vathes-Welcomes-Dr-Thinh-Nguyen-as-Data-Scientist.md":
/*!********************************************************************!*\
  !*** ./posts/Vathes-Welcomes-Dr-Thinh-Nguyen-as-Data-Scientist.md ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: Vathes Welcomes Dr. Thinh Nguyen as Data Scientist\nlayout: postNew.pug\ndate: 2018-12-03 \ntags:\n- team\ncategories: \n- News\n---\n\n![alt text](./static/posts/Vathes-Welcomes-Dr-Thinh-Nguyen-as-Data-Scientist/thinh_welcome.jpg \"Thinh\")\nVathes is excited to have Thinh Nguyen join the team. \nThinh has a Ph.D. in Biomedical Engineering from University of Houston, specialized in computational neuroscience, where he developed methodology for multimodal integration of EEG and fMRI toward neuroimaging research. Thinh is also highly passionate in the field of Machine Learning and A.I. in neuroscience applications. As a Data Scientist at Vathes, Thinh is very excited to use his computational neuroscience and programming background toward building data engineering solutions for scientists to advance the field of Neuroscience.\n\n<!-- more -->");

/***/ }),

/***/ "./posts/Vathes-attends-the-2017-Society-for-Neuroscience-Conference.md":
/*!******************************************************************************!*\
  !*** ./posts/Vathes-attends-the-2017-Society-for-Neuroscience-Conference.md ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: Vathes Attends the 2017 Society for Neuroscience Conference\nlayout: postNew.pug\ndate: 2017-11-15\ntags:\n- DataJoint\n- workshops\n- SfN\ncategories: \n- Events\n---\n![alt text](./static/posts/Vathes-Attends-the-2017-Society-for-Neuroscience-Conference/SFN%202017%20Logo.png \"SfN Logo\")\nVathes sponsored an exhibit at the 2017 Society for Neuroscience conference. We were thrilled to meet with lots of neuroscientists interested in learning about DataJoint and we were delighted to meet existing users!\n\n![alt text](./static/posts/Vathes-Attends-the-2017-Society-for-Neuroscience-Conference/SfN1.jpg \"from left to right, Andreas Tolias, Jake Reimer, Edgar Y. Walker, Dimitri Yatsenko, and Chris Turner\")\n\n<!-- more -->");

/***/ }),

/***/ "./posts/Vathes-contracts-with-Matt-McGinley-lab.md":
/*!**********************************************************!*\
  !*** ./posts/Vathes-contracts-with-Matt-McGinley-lab.md ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: Vathes contracts with Matt McGinley lab\nlayout: postNew.pug\ndate: 2018-10-03 10:31:16\ntags:\n- DataJoint\ncategories: \n- News\n---\n\n![alt text](./static/posts/Vathes-contracts-with-Matt-McGinley-lab/djlogo.png \"DataJoint logo\")\nIn October Vathes began a contract with [Matt McGinley](https://www.bcm.edu/people/view/matthew-mcginley-ph-d/be79961e-1ea8-11e6-a974-005056b104be) to support him as he transitions his behavioral and neural data acquisition to DataJoint pipelines.\n\n<!-- more -->\n");

/***/ }),

/***/ "./posts/Vathes-team-visits-Harvard.md":
/*!*********************************************!*\
  !*** ./posts/Vathes-team-visits-Harvard.md ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: Vathes team visits Harvard\nlayout: postNew.pug\ndate: 2017-09-07 19:40:34\ntags:\n- Harvard\n- DataJoint\ncategories: \n- Events\n---\nVathes presented the DataJoint framework at the Systems Neuroscience Club at Harvard Medical School, which was followed by discussions with several neuroscience labs who are using or considering to adopt DataJoint for their data pipelines.\n\n![alt text](./static/posts/Vathes-team-visits-Harvard/harvardvisit.jpg \"Dimitri and Edgar in front of the Harvard Medical School\")\n\n<!-- more -->");

/***/ }),

/***/ "./posts/Vathes-team-visits-Janelia-Farm.md":
/*!**************************************************!*\
  !*** ./posts/Vathes-team-visits-Janelia-Farm.md ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: Vathes team visits Janelia Farm\nlayout: postNew.pug\ndate: 2017-05-18 13:47:23\ntags:\n- Janelia Farm\n- DataJoint\n- workshops\ncategories: \n- Events\n---\n\nDimitri and Edgar presented at Janelia Farm and spent two days meeting with a number of interested labs there.\n\n![alt text](./static/posts/Vathes-team-visits-Janelia-Farm/atJaneliaFarm.jpg \"Dimitri and Edgar at Janelia Farm\")\n&nbsp;\n<!-- more -->\n&nbsp;\n#### Presentation Video\nCheckout the recording of their full presentation!\n<!-- {% youtube uXQ8pa2AM1s %} -->");

/***/ }),

/***/ "./posts/Vathes-team-visits-University-of-Utah.md":
/*!********************************************************!*\
  !*** ./posts/Vathes-team-visits-University-of-Utah.md ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: Vathes team visits University of Utah\nlayout: postNew.pug\ndate: 2017-06-12 19:33:20\ntags:\n- DataJoint\n- University of Utah\ncategories: \n- Events\n---\nDimitri and Edgar presented at the University of Utah and spent a full day learning about the cutting-edge neuroscience research conducted at the University of Utah, and discussing how DataJoint might be able to help!\n\n![alt text](./static/posts/Vathes-team-visits-University-of-Utah/utahvisit.jpg \"Dimitri and Edgar in Utah\")\n\n<!-- more -->");

/***/ }),

/***/ "./posts/Welcome-Chris.md":
/*!********************************!*\
  !*** ./posts/Welcome-Chris.md ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: Christopher Turner joins the Vathes team\nlayout: postNew.pug\ndate: 2017-08-07 09:38:55\ntags:\n- team\ncategories: \n- News\n---\nVathes welcomes Christopher Turner, who joined the company in the role of a product engineer in July. A technical professional with 15 years of software and systems development, Chris will lead efforts in software development and operations support.\n\n![alt text](./static/posts/Welcome-Chris/welcomeChris.jpg \"Chris at TMCx\")\n\n<!-- more -->");

/***/ }),

/***/ "./posts/Welcoming-Raphael-Guzman-to-Our-Team.md":
/*!*******************************************************!*\
  !*** ./posts/Welcoming-Raphael-Guzman-to-Our-Team.md ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: Welcoming Raphael Guzman to Our Team\nlayout: postNew.pug\ndate: 2019-04-08\ntags:\n- team\ncategories: \n- News\n---\nVathes welcomes Raphael Guzman, a University of Houston Alumnus, who joins the company in the role of Software Engineer. As a technical professional with 10 years in software and network engineering, Raphael brings proficiency in Web Services, IoT, Edge appliance development, Computational Fluid Dynamics, and Finite Element Modeling. Among other projects, Raphael will join forces with the DataJoint library development team, in particular driving the MATLAB development forward.\n\n<!-- more -->\n![alt text](./static/posts/Welcoming-Raphael-Guzman-to-Our-Team/Raphael_in_the_garden1.jpg \"Raphael headshot in the garden\")\n![alt text](./static/posts/Welcoming-Raphael-Guzman-to-Our-Team/Raphael_in_the_garden2.jpg \"Raphael in conversation\")\n");

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./pages/newsIndex.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/maho15/Projects/djneuro/pages/newsIndex.js */"./pages/newsIndex.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gray-matter");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=newsIndex.js.map