webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TitleSection/index.js":
/*!******************************************!*\
  !*** ./components/TitleSection/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style */ "./components/TitleSection/style.js");





var _jsxFileName = "/mnt/c/Users/CebuDev5/Projects/move-app/components/TitleSection/index.js";




var propTypes = {
  loading: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  avatar: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired
};

var index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(index, _React$Component);

  function index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(index, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          loading = _this$props.loading,
          avatar = _this$props.avatar,
          title = _this$props.title;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_8__["TitleContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        xs: "12",
        sm: "12",
        md: "9",
        lg: "10",
        className: "no-padding",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "display-table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "display-table-cell",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        xs: "auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, loading ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_8__["LoadingAvatar"], {
        className: "loading-gradient",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_8__["Avatar"], {
        src: avatar,
        alt: title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        className: "no-padding",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_8__["Title"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "vertical-aligned",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, loading ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_8__["LoadingTitle"], {
        className: "loading-gradient",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_8__["LoadingSubtitle"], {
        className: "loading-gradient",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, title, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "\u2605"))))))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        xs: "12",
        sm: "12",
        md: "3",
        lg: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        className: "btn-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        xs: "4",
        sm: "4",
        md: "12",
        className: "btn-col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, loading ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_8__["LoadingButton"], {
        className: "loading-gradient",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        className: "action-btn",
        outline: true,
        block: true,
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Play video")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        xs: "4",
        sm: "4",
        md: "12",
        className: "btn-col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, loading ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_8__["LoadingButton"], {
        className: "loading-gradient",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        className: "action-btn",
        outline: true,
        block: true,
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Watch later")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        xs: "4",
        sm: "4",
        md: "12",
        className: "btn-col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, loading ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_8__["LoadingButton"], {
        className: "loading-gradient",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        className: "action-btn",
        outline: true,
        block: true,
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Share"))))));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);


index.propTypes = propTypes;

/***/ })

})
//# sourceMappingURL=index.js.afed81ecdd5657d7b8ea.hot-update.js.map