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
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./components/MovieCard/style.js");
/* harmony import */ var _LoadingImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../LoadingImage */ "./components/LoadingImage/index.js");
var _jsxFileName = "/mnt/c/Users/CebuDev5/Projects/move-app/components/MovieCard/index.js";






var propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  poster: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
var defaultProps = {
  poster: _utils_constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_PROPS"].notFoundImg
};
function MovieCard(_ref) {
  var title = _ref.title,
      poster = _ref.poster,
      loading = _ref.loading;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["CardContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "loading-gradient",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardImg"], {
    top: true,
    width: "100%",
    src: poster,
    alt: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["LoadingCardTitle"], {
    className: "loading-gradient",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, title), loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["LoadingCardButton"], {
    className: "loading-gradient",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    block: true,
    color: "primary",
    className: "watch-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Watch")));
}
MovieCard.propTypes = propTypes;
MovieCard.defaultProps = defaultProps;

/***/ })

})
//# sourceMappingURL=index.js.4d06711cc0f2932026f5.hot-update.js.map