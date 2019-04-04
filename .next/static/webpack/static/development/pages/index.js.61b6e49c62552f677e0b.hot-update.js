webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MovieCard/index.js":
/*!***************************************!*\
  !*** ./components/MovieCard/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MovieCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./components/MovieCard/style.js");
/* harmony import */ var _LoadingImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LoadingImage */ "./components/LoadingImage/index.js");
var _jsxFileName = "/mnt/c/Users/CebuDev5/Projects/move-app/components/MovieCard/index.js";





var propTypes = {};
var defaultProps = {};
function MovieCard(_ref) {
  var title = _ref.title,
      poster = _ref.poster,
      loading = _ref.loading;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["CardContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "loading-gradient",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardImg"], {
    top: true,
    width: "100%",
    src: poster,
    alt: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["LoadingCardTitle"], {
    className: "loading-gradient",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["LoadingCardButton"], {
    className: "loading-gradient",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })));
}
MovieCard.propTypes = propTypes;
MovieCard.defaultProps = defaultProps;

/***/ })

})
//# sourceMappingURL=index.js.61b6e49c62552f677e0b.hot-update.js.map