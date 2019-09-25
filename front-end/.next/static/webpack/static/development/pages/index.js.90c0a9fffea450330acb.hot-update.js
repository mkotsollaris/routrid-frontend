webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo */ "./components/Logo.js");
/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/header.css */ "./styles/header.css");
/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_header_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Signup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Signup */ "./components/Signup.jsx");
var _jsxFileName = "/Users/mkotsollaris/projects/routrid-frontend/front-end/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Header(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      renderSingup = _useState[0],
      setRenderSignup = _useState[1];

  function logoutClick() {
    setRenderSignup(true);
  }

  if (renderSingup) {
    location.reload();
  }

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    expand: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Brand, {
    className: "mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Toggle, {
    "aria-controls": "basic-navbar-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Collapse, {
    id: "basic-navbar-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    className: "mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "light",
    onClick: function onClick() {
      logoutClick();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Logout"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    inline: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(StyledButton, {
    variant: "outline-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Profile"))))));
}
var StyledForm = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"]).withConfig({
  displayName: "Header__StyledForm",
  componentId: "sc-1d4dlu-0"
})([""]);
var StyledButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"]).withConfig({
  displayName: "Header__StyledButton",
  componentId: "sc-1d4dlu-1"
})(["&&&{background-color:#ECCA6B;border-color:#ECCA6B;color:white;margin-right:.5rem;};", ":hover &&&{background-color:white;color:#A940A2;}"], StyledForm);

/***/ })

})
//# sourceMappingURL=index.js.90c0a9fffea450330acb.hot-update.js.map