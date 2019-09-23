webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Signup.jsx":
/*!*******************************!*\
  !*** ./components/Signup.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Singup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var trulioo_react_EmbedID__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! trulioo-react/EmbedID */ "./node_modules/trulioo-react/EmbedID.js");
/* harmony import */ var trulioo_react_EmbedID__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(trulioo_react_EmbedID__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/mkotsollaris/projects/routrid-frontend/front-end/components/Signup.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Singup() {
  function handleResponse() {//TODO
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(trulioo_react_EmbedID__WEBPACK_IMPORTED_MODULE_1___default.a, {
    url: "http://localhost:3111",
    handleResponse: handleResponse,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/SignupComponent.jsx":
/*!****************************************!*\
  !*** ./components/SignupComponent.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _StyledNavLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StyledNavLink */ "./components/StyledNavLink.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/mkotsollaris/projects/routrid-frontend/front-end/components/SignupComponent.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


 //import EmbedID from 'trulioo-react/EmbedID'


var EmbedID = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! trulioo-react/EmbedID */ "./node_modules/trulioo-react/EmbedID.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! trulioo-react/EmbedID */ "./node_modules/trulioo-react/EmbedID.js")];
    },
    modules: ['trulioo-react/EmbedID']
  }
});

var SignupComponent = function SignupComponent(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      show = _useState[0],
      setShow = _useState[1];

  var handleShow = function handleShow() {
    console.log('Open Modal');
    setShow(true);
  };

  var handleClose = function handleClose(e) {
    console.log('Closing Modal');
    setShow(false);
    e && e.stopPropagation();
  };

  var handleResponse = function handleResponse() {
    alert('Hooray');
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_StyledNavLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "primary",
    onClick: handleShow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Sign up"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Modal"], {
    show: show,
    onHide: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Modal"].Header, {
    closeButton: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Modal"].Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Sign up")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Modal"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(EmbedID, {
    url: "http://localhost:3111",
    handleSubmit: function handleSubmit() {
      return alert('Verified');
    },
    handleResponse: function handleResponse() {
      return alert('Verified');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SignupComponent);

/***/ })

})
//# sourceMappingURL=index.js.9ac2fc10627b02a7d6eb.hot-update.js.map