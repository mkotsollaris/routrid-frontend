exports.ids = [0];
exports.modules = {

/***/ "./components/Graph.js":
/*!*****************************!*\
  !*** ./components/Graph.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mermaid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mermaid */ "mermaid");
/* harmony import */ var mermaid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mermaid__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/mkotsollaris/projects/routrid-frontend/front-end/components/Graph.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (() => {
  let counter = 0;

  function visualize() {
    console.log('@visualize');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(function () {
      const input = document.getElementById("input");
      const output = document.getElementById("output");
      console.log('output', output);
      mermaid__WEBPACK_IMPORTED_MODULE_2__["mermaidAPI"].render(`theGraph`, input.value, function (svgCode) {
        output.innerHTML = svgCode;
      });
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {// mermaidAPI.initialize({
    //     startOnLoad: false
    // });
    // $(function () {
    //     const input = document.getElementById("input");
    //     const output = document.getElementById("output");
    //     console.log('output',output)
    //     mermaidAPI.render('theGraph', input.value, function (svgCode) {
    //         output.innerHTML = svgCode;
    //     });
    // });
  }, []);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("textarea", {
    name: "",
    id: "input",
    cols: "30",
    rows: "10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "graph LR; A-->B;"), __jsx("button", {
    onClick: () => visualize(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "Visualize"), __jsx("div", {
    id: "output",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }));
});

/***/ })

};;
//# sourceMappingURL=0.js.map