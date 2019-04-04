webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/RelatedSection/index.js":
/*!********************************************!*\
  !*** ./components/RelatedSection/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RelatedSection; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./components/RelatedSection/style.js");
/* harmony import */ var _MovieCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MovieCard */ "./components/MovieCard/index.js");

var _jsxFileName = "/mnt/c/Users/CebuDev5/Projects/move-app/components/RelatedSection/index.js";





var propTypes = {};
var defaultProps = {};
function RelatedSection(_ref) {
  var relatedVideos = _ref.relatedVideos;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["RelatedContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, relatedVideos.map(function (movie) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      key: movie.id,
      className: "moviecard-col",
      xs: "6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MovieCard__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, movie, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    })));
  })));
}
RelatedSection.propTypes = propTypes;
RelatedSection.defaultProps = defaultProps;

/***/ })

})
//# sourceMappingURL=index.js.59244352bd4d9e2f5e7b.hot-update.js.map