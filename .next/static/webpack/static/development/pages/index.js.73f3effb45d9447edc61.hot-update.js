webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ContentSection/index.js":
/*!********************************************!*\
  !*** ./components/ContentSection/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./components/ContentSection/style.js");
/* harmony import */ var _ContentEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ContentEmpty */ "./components/ContentEmpty/index.js");
var _jsxFileName = "/mnt/c/Users/CebuDev5/Projects/move-app/components/ContentSection/index.js";





var propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
var defaultProps = {
  children: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_PROPS"].contentEmpty
};
function ContentSection(_ref) {
  var title = _ref.title,
      children = _ref.children,
      bottomBorder = _ref.bottomBorder,
      padded = _ref.padded;
  var sectionTitle = title ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, title) : null;
  var hr = bottomBorder ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }) : null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["Content"], {
    padded: padded,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, sectionTitle, children, hr);
}
ContentSection.propTypes = propTypes;
ContentSection.defaultProps = defaultProps;

/***/ })

})
//# sourceMappingURL=index.js.73f3effb45d9447edc61.hot-update.js.map