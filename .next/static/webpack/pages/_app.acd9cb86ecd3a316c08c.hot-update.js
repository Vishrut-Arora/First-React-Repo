"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_vishr_OneDrive_Desktop_games_and_applications_projects_Lemon8_lemon8_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\vishr\\OneDrive\\Desktop\\games and applications\\projects\\Lemon8\\lemon8_app\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_vishr_OneDrive_Desktop_games_and_applications_projects_Lemon8_lemon8_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var GlobalStyle = function GlobalStyle(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {}, void 0, false);
};

_c = GlobalStyle;

function MyApp(_ref2) {
  var Component = _ref2.Component,
      pageProps = _ref2.pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ChakraProvider, {
    resetCSS: true,
    theme: _styles_theme__WEBPACK_IMPORTED_MODULE_2__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ColorModeProvider, {
      options: {
        initialColorMode: "light",
        useSystemColorMode: true
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(GlobalStyle, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

_c2 = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c, _c2;

$RefreshReg$(_c, "GlobalStyle");
$RefreshReg$(_c2, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hY2Q5Y2I4NmVjZDNhMzE2YzA4Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1PLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBR3BDLHNCQUNFLDZJQURGO0FBTUQsQ0FURDs7S0FBTUQ7O0FBV04sU0FBU0UsS0FBVCxRQUF5QztBQUFBLE1BQXhCQyxTQUF3QixTQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxTQUFhLFNBQWJBLFNBQWE7QUFDdkMsc0JBQ0UsOERBQUMsNERBQUQ7QUFBZ0IsWUFBUSxNQUF4QjtBQUF5QixTQUFLLEVBQUVQLGtEQUFoQztBQUFBLDJCQUNFLDhEQUFDLCtEQUFEO0FBQ0UsYUFBTyxFQUFFO0FBQ1BRLFFBQUFBLGdCQUFnQixFQUFFLE9BRFg7QUFFUEMsUUFBQUEsa0JBQWtCLEVBQUU7QUFGYixPQURYO0FBQUEsNkJBTUUsOERBQUMsV0FBRDtBQUFBLCtCQUNFLDhEQUFDLFNBQUQsb0JBQWVGLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBY0Q7O01BZlFGO0FBaUJULCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIsIENvbG9yTW9kZVByb3ZpZGVyLCB1c2VDb2xvck1vZGUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IGN1c3RvbVRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcbmltcG9ydCB7IEdsb2JhbCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXG5cbmNvbnN0IEdsb2JhbFN0eWxlID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIDxHbG9iYWwvPlxuICAgICAge2NoaWxkcmVufSAqL31cbiAgICA8Lz5cbiAgKVxufVxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Q2hha3JhUHJvdmlkZXIgcmVzZXRDU1MgdGhlbWU9e2N1c3RvbVRoZW1lfT5cbiAgICAgIDxDb2xvck1vZGVQcm92aWRlclxuICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgaW5pdGlhbENvbG9yTW9kZTogXCJsaWdodFwiLFxuICAgICAgICAgIHVzZVN5c3RlbUNvbG9yTW9kZTogdHJ1ZSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEdsb2JhbFN0eWxlPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9HbG9iYWxTdHlsZT5cbiAgICAgIDwvQ29sb3JNb2RlUHJvdmlkZXI+XG4gICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcCJdLCJuYW1lcyI6WyJSZWFjdCIsIkNoYWtyYVByb3ZpZGVyIiwiQ29sb3JNb2RlUHJvdmlkZXIiLCJ1c2VDb2xvck1vZGUiLCJjdXN0b21UaGVtZSIsIkdsb2JhbCIsImNzcyIsIkdsb2JhbFN0eWxlIiwiY2hpbGRyZW4iLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImluaXRpYWxDb2xvck1vZGUiLCJ1c2VTeXN0ZW1Db2xvck1vZGUiXSwic291cmNlUm9vdCI6IiJ9