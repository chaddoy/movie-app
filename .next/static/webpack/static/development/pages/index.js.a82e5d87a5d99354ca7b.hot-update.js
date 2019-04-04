webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SynopsisSection/index.js":
/*!*********************************************!*\
  !*** ./components/SynopsisSection/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SynopsisSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./components/SynopsisSection/style.js");
/* harmony import */ var _LoadingParagraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../LoadingParagraph */ "./components/LoadingParagraph/index.js");
/* harmony import */ var _LoadingImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../LoadingImage */ "./components/LoadingImage/index.js");
var _jsxFileName = "/mnt/c/Users/CebuDev5/Projects/move-app/components/SynopsisSection/index.js";







var propTypes = {
  synopsis: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  poster: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
var defaultProps = {
  poster: _utils_constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_PROPS"].notFoundImg
};
function SynopsisSection(_ref) {
  var synopsis = _ref.synopsis,
      poster = _ref.poster,
      loading = _ref.loading;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["SynopsisContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: {
      size: 12,
      order: 2
    },
    sm: {
      size: 12,
      order: 2
    },
    md: {
      size: 9,
      order: 1
    },
    className: "synopsis",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingParagraph__WEBPACK_IMPORTED_MODULE_5__["default"], {
    numberOfBars: 30,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }) : synopsis), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: {
      size: 12,
      order: 1
    },
    sm: {
      size: 12,
      order: 1
    },
    md: {
      size: 3,
      order: 2
    },
    className: "poster",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingImage__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: poster,
    alt: "",
    style: {
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }))));
}
SynopsisSection.propTypes = propTypes;
SynopsisSection.defaultProps = defaultProps;

/***/ })

})
//# sourceMappingURL=index.js.a82e5d87a5d99354ca7b.hot-update.js.map