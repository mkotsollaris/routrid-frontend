webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Transaction.js":
/*!***********************************!*\
  !*** ./components/Transaction.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Transaction; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown */ "./components/Dropdown.js");
var _jsxFileName = "/Users/mkotsollaris/projects/routrid-frontend/front-end/components/Transaction.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Transaction(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "Route Preference: ", __jsx(_Dropdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _context_VerificationContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/VerificationContext */ "./context/VerificationContext.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Signup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Signup */ "./components/Signup.jsx");
/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Dropdown */ "./components/Dropdown.js");
/* harmony import */ var _components_Transaction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Transaction */ "./components/Transaction.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var trulioo_react_EmbedID__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! trulioo-react/EmbedID */ "./node_modules/trulioo-react/EmbedID.js");
/* harmony import */ var trulioo_react_EmbedID__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(trulioo_react_EmbedID__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "/Users/mkotsollaris/projects/routrid-frontend/front-end/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  p {\n    font-family: \"Roboto Light ,Times New Roman\", Times, serif;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}














var Graph = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/Graph */ "./components/Graph.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/Graph */ "./components/Graph.js")];
    },
    modules: ['../components/Graph']
  }
});
var Home = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("styles"), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ../components/Home */ "./components/Home.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/Home */ "./components/Home.js")];
    },
    modules: ['../components/Home']
  }
});
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["createGlobalStyle"])(_templateObject());
function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      currentUser = _useState[0],
      setCurrentUser = _useState[1];

  function handleResponse(e) {
    console.log('response', e);
    setCurrentUser('Menelaos');
  }

  if (currentUser) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx(Home, {
      name: currentUser,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }));
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(_components_Transaction__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })); // return (
  //   <VerificationProvider value={{}}>
  //     <Container>
  //       <GlobalStyle />
  //       <Row>
  //         <Header />
  //       </Row>
  //       <Head>
  //         <title>routrid</title>
  //       </Head>
  //       <Row>
  //         <Singup handleResponse={handleResponse} />
  //       </Row>
  //     </Container>
  //   </VerificationProvider>
  // );
}

/***/ })

})
//# sourceMappingURL=index.js.2bf5227046ad6c7411be.hot-update.js.map