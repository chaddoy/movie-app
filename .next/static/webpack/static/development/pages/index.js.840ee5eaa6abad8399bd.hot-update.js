webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout/index.js":
/*!************************************!*\
  !*** ./components/Layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles */ "./styles/index.js");
/* harmony import */ var _HeadTags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../HeadTags */ "./components/HeadTags/index.js");
/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../NotFound */ "./components/NotFound/index.js");
var _jsxFileName = "/mnt/c/Users/CebuDev5/Projects/move-app/components/Layout/index.js";







var propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
var defaultProps = {
  children: _utils_constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_PROPS"].notFound
};
function Layout(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["GlobalStyle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    style: {
      backgroundColor: '#f3f7fe'
    },
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeadTags__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: _utils_constants__WEBPACK_IMPORTED_MODULE_3__["MOVIE"].title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), children))));
}
Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

/***/ }),

/***/ "./utils/constants.js":
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/*! exports provided: MOVIE, DEFAULT_PROPS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVIE", function() { return MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PROPS", function() { return DEFAULT_PROPS; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_NotFound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NotFound */ "./components/NotFound/index.js");
var _jsxFileName = "/mnt/c/Users/CebuDev5/Projects/move-app/utils/constants.js";


var MOVIE = {
  title: 'Alita: Battle Angel',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kevka/128.jpg',
  synopsis: 'Sequi consequatur et magni omnis porro tempore mollitia. Quasi deleniti voluptas et maiores aspernatur. Fuga adipisci quaerat esse consequuntur voluptatem nisi ut. Numquam consequatur enim alias nostrum. Reprehenderit aut explicabo dolor. Repellat omnis odit sapiente sit enim ab debitis molestiae. Fugiat et tenetur. Vel quo dolorum enim eaque. Eum adipisci qui et et tempore odit porro. Expedita aspernatur debitis. Qui dolores quo animi molestias dolor non esse. Consequuntur voluptatem sint veritatis repellendus praesentium eveniet et quibusdam. In magni et quis enim id et sunt iusto. Cum repudiandae sint aspernatur et deserunt a minima. Occaecati voluptate velit in minima officiis architecto voluptate architecto reprehenderit. Quod aut maiores praesentium voluptatem tempore consequatur animi necessitatibus.',
  poster: 'http://lorempixel.com/480/640/nature/',
  relatedVideos: [{
    id: 'b764a6bd-0967-4d25-8d38-b50cdbe1c5ba',
    title: 'Movie 1',
    poster: 'http://lorempixel.com/480/640/nature/'
  }, {
    id: 'a1b08947-c76e-41d3-974b-27f996aeeb34',
    title: 'Movie 2',
    poster: 'http://lorempixel.com/480/640/nature/'
  }, {
    id: 'a0c8085f-b817-497b-92a6-b92da1189feb',
    title: 'Movie 3',
    poster: 'http://lorempixel.com/480/640/nature/'
  }, {
    id: 'f4d76865-8ae1-4ca8-bd76-f8367e57f77d',
    title: 'Movie 4',
    poster: 'http://lorempixel.com/480/640/nature/'
  }, {
    id: '0e0489d9-5a5a-4388-8c05-7d5289270c1d',
    title: 'Movie 5',
    poster: 'http://lorempixel.com/480/640/nature/'
  }]
};
var DEFAULT_PROPS = {
  poster: 'https://www.classicposters.com/images/nopicture.gif',
  notFound: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NotFound__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  })
};

/***/ })

})
//# sourceMappingURL=index.js.840ee5eaa6abad8399bd.hot-update.js.map