webpackHotUpdate_N_E("pages/productos/[producto]",{

/***/ "./components/prods/Prods_banner.js":
/*!******************************************!*\
  !*** ./components/prods/Prods_banner.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Prods_banner; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar _jsxFileName = \"/home/peter/webdev/com-expi/components/prods/Prods_banner.js\";\n//exporting component\nfunction Prods_banner(props) {\n  var bgImg = {\n    backgroundImage: \"url(/images/productos/banners/\".concat(props.imgBanner, \".png)\"),\n    backgroundSize: 'cover',\n    backgroundPosition: 'center'\n  };\n  var bgImgCostero = {\n    backgroundImage: \"url(/images/productos/banners/\".concat(props.imgBanner, \".png)\"),\n    backgroundSize: 'cover',\n    backgroundPosition: 'top'\n  }; // style={props.imgBanner == 'costero' ? bgImgCostero :bgImg}\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: \"Prod_banner container-xl px-0\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"banner img-fluid\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"/images/productos/banners/\".concat(props.imgBanner, \".png\"),\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"d-flex justify-content-center justify-content-lg-start border-bot-2 py-5\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"col-6 col-md-4 col-lg-3\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            className: \"w-100\",\n            src: \"/images/productos/logos/\".concat(props.imgLogo, \".png\"),\n            alt: \"logo\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n_c = Prods_banner;\n\nvar _c;\n\n$RefreshReg$(_c, \"Prods_banner\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kcy9Qcm9kc19iYW5uZXIuanM/ODYzNCJdLCJuYW1lcyI6WyJQcm9kc19iYW5uZXIiLCJwcm9wcyIsImJnSW1nIiwiYmFja2dyb3VuZEltYWdlIiwiaW1nQmFubmVyIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiZ0ltZ0Nvc3Rlcm8iLCJpbWdMb2dvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDZSxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUUxQyxNQUFJQyxLQUFLLEdBQUc7QUFDVkMsbUJBQWUsMENBQW1DRixLQUFLLENBQUNHLFNBQXpDLFVBREw7QUFFVkMsa0JBQWMsRUFBRSxPQUZOO0FBR1ZDLHNCQUFrQixFQUFFO0FBSFYsR0FBWjtBQUtBLE1BQUlDLFlBQVksR0FBRztBQUNqQkosbUJBQWUsMENBQW1DRixLQUFLLENBQUNHLFNBQXpDLFVBREU7QUFFakJDLGtCQUFjLEVBQUUsT0FGQztBQUdqQkMsc0JBQWtCLEVBQUU7QUFISCxHQUFuQixDQVAwQyxDQVkxQzs7QUFDQSxzQkFDRTtBQUFBLDJCQUNFO0FBQVMsZUFBUyxFQUFDLCtCQUFuQjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxrQkFBZjtBQUFBLCtCQUNFO0FBQUssYUFBRyxzQ0FBK0JMLEtBQUssQ0FBQ0csU0FBckMsU0FBUjtBQUE4RCxhQUFHLEVBQUM7QUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFO0FBQUssaUJBQVMsRUFBQywwRUFBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyx5QkFBZjtBQUFBLGlDQUNJO0FBQUsscUJBQVMsRUFBQyxPQUFmO0FBQXVCLGVBQUcsb0NBQTZCSCxLQUFLLENBQUNPLE9BQW5DLFNBQTFCO0FBQTRFLGVBQUcsRUFBQztBQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWNEO0tBM0J1QlIsWSIsImZpbGUiOiIuL2NvbXBvbmVudHMvcHJvZHMvUHJvZHNfYmFubmVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9leHBvcnRpbmcgY29tcG9uZW50XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kc19iYW5uZXIocHJvcHMpIHtcblxuICBsZXQgYmdJbWcgPSB7XG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKC9pbWFnZXMvcHJvZHVjdG9zL2Jhbm5lcnMvJHtwcm9wcy5pbWdCYW5uZXJ9LnBuZylgLFxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gIH1cbiAgbGV0IGJnSW1nQ29zdGVybyA9IHtcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoL2ltYWdlcy9wcm9kdWN0b3MvYmFubmVycy8ke3Byb3BzLmltZ0Jhbm5lcn0ucG5nKWAsXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAndG9wJyxcbiAgfVxuICAvLyBzdHlsZT17cHJvcHMuaW1nQmFubmVyID09ICdjb3N0ZXJvJyA/IGJnSW1nQ29zdGVybyA6YmdJbWd9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nUHJvZF9iYW5uZXIgY29udGFpbmVyLXhsIHB4LTAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmFubmVyIGltZy1mbHVpZCc+XG4gICAgICAgICAgPGltZyBzcmM9e2AvaW1hZ2VzL3Byb2R1Y3Rvcy9iYW5uZXJzLyR7cHJvcHMuaW1nQmFubmVyfS5wbmdgfSBhbHQ9XCJcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIganVzdGlmeS1jb250ZW50LWxnLXN0YXJ0IGJvcmRlci1ib3QtMiBweS01Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTYgY29sLW1kLTQgY29sLWxnLTMnPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0ndy0xMDAnIHNyYz17YC9pbWFnZXMvcHJvZHVjdG9zL2xvZ29zLyR7cHJvcHMuaW1nTG9nb30ucG5nYH0gYWx0PVwibG9nb1wiIC8+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/prods/Prods_banner.js\n");

/***/ })

})