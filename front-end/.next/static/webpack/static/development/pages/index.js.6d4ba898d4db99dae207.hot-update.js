webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var trulioo_react_EmbedID__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! trulioo-react/EmbedID */ "./node_modules/trulioo-react/EmbedID.js");
/* harmony import */ var trulioo_react_EmbedID__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(trulioo_react_EmbedID__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "/Users/mkotsollaris/projects/routrid-frontend/front-end/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  p {\n    font-family: \"Roboto Light ,Times New Roman\", Times, serif;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}












var Graph = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function () {
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
var Home = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function () {
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
        lineNumber: 39
      },
      __self: this
    }, __jsx(Home, {
      name: currentUser,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }));
  }

  return __jsx(_context_VerificationContext__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(GlobalStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })), __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "routrid")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(_components_Signup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    handleResponse: handleResponse,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }))));
} // const FirstRow = styled(Row)`
//     background-image: url('/static/images/hompage_image_one.svg');
//     background-size: cover;
//     background-repeat: no-repeat;
//     padding-bottom: 24%;
//     padding-right: 0;
//   `;
//   const BottomRowTitle = styled(Row)`
//     background-color: #ECECFA;
//   `;
//   const FeaturedSpacesTitle = styled.p`
//     color: #A940A2;
//     font-size: 2rem;
//     text-align: center;
//     margin-top: -50%
//   `;
//   const BottomRow = styled(Row)`
//     background-color: #ECECFA;
//   `;
//   const FeaturedSpaces = styled.p`
//     background-image: url('/static/images/rooms.svg');
//     background-repeat: no-repeat;
//     padding: 15%;
//     background-position: center;  
//     margin-top: -14%;
//   `;

/***/ })

})
//# sourceMappingURL=index.js.6d4ba898d4db99dae207.hot-update.js.map