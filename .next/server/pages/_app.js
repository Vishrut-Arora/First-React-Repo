"use strict";
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\vishr\\OneDrive\\Desktop\\games and applications\\projects\\Lemon8\\lemon8_app\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const GlobalStyle = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.Global, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), children]
  }, void 0, true);
};

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {
    resetCSS: true,
    theme: _styles_theme__WEBPACK_IMPORTED_MODULE_2__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ColorModeProvider, {
      options: {
        initialColorMode: "light",
        useSystemColorMode: true
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(GlobalStyle, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./styles/theme.js":
/*!*************************!*\
  !*** ./styles/theme.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/theme-tools */ "@chakra-ui/theme-tools");
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const fonts = _objectSpread(_objectSpread({}, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.theme.fonts), {}, {
  body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  heading: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
});

const breakpoints = (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.createBreakpoints)({
  sm: "40em",
  md: "52em",
  lg: "64em",
  lg: "62em"
});

const overrides = _objectSpread(_objectSpread({}, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.theme), {}, {
  fonts,
  breakpoints,
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "29px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px"
  }
});

const customTheme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)(overrides);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customTheme);

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "@chakra-ui/theme-tools":
/*!*****************************************!*\
  !*** external "@chakra-ui/theme-tools" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxNQUFNTyxXQUFXLEdBQUcsQ0FBQztBQUFFQyxFQUFBQTtBQUFGLENBQUQsS0FBa0I7QUFHcEMsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUdBLFFBRkg7QUFBQSxrQkFERjtBQU1ELENBVEQ7O0FBV0EsU0FBU0MsS0FBVCxDQUFlO0FBQUVDLEVBQUFBLFNBQUY7QUFBYUMsRUFBQUE7QUFBYixDQUFmLEVBQXlDO0FBQ3ZDLHNCQUNFLDhEQUFDLDREQUFEO0FBQWdCLFlBQVEsTUFBeEI7QUFBeUIsU0FBSyxFQUFFUCxrREFBaEM7QUFBQSwyQkFDRSw4REFBQywrREFBRDtBQUNFLGFBQU8sRUFBRTtBQUNQUSxRQUFBQSxnQkFBZ0IsRUFBRSxPQURYO0FBRVBDLFFBQUFBLGtCQUFrQixFQUFFO0FBRmIsT0FEWDtBQUFBLDZCQU1FLDhEQUFDLFdBQUQ7QUFBQSwrQkFDRSw4REFBQyxTQUFELG9CQUFlRixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWNEOztBQUVELGlFQUFlRixLQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1TLEtBQUssbUNBQ0pILHlEQURJO0FBRVBJLEVBQUFBLElBQUksRUFBRyxxSUFGQTtBQUdQQyxFQUFBQSxPQUFPLEVBQUc7QUFISCxFQUFYOztBQU1BLE1BQU1DLFdBQVcsR0FBR0oseUVBQWlCLENBQUM7QUFDbENLLEVBQUFBLEVBQUUsRUFBRSxNQUQ4QjtBQUVsQ0MsRUFBQUEsRUFBRSxFQUFFLE1BRjhCO0FBR2xDQyxFQUFBQSxFQUFFLEVBQUUsTUFIOEI7QUFJbENBLEVBQUFBLEVBQUUsRUFBRTtBQUo4QixDQUFELENBQXJDOztBQU9BLE1BQU1DLFNBQVMsbUNBQ1JWLG1EQURRO0FBRVhHLEVBQUFBLEtBRlc7QUFHWEcsRUFBQUEsV0FIVztBQUlYSyxFQUFBQSxXQUFXLEVBQUU7QUFDVEMsSUFBQUEsTUFBTSxFQUFFLEdBREM7QUFFVEMsSUFBQUEsTUFBTSxFQUFFLEdBRkM7QUFHVEMsSUFBQUEsSUFBSSxFQUFFO0FBSEcsR0FKRjtBQVNYQyxFQUFBQSxTQUFTLEVBQUU7QUFDUEMsSUFBQUEsRUFBRSxFQUFFLE1BREc7QUFFUFQsSUFBQUEsRUFBRSxFQUFFLE1BRkc7QUFHUEMsSUFBQUEsRUFBRSxFQUFFLE1BSEc7QUFJUEMsSUFBQUEsRUFBRSxFQUFFLE1BSkc7QUFLUFEsSUFBQUEsRUFBRSxFQUFFLE1BTEc7QUFNUCxXQUFPLE1BTkE7QUFPUCxXQUFPLE1BUEE7QUFRUCxXQUFPLE1BUkE7QUFTUCxXQUFPLE1BVEE7QUFVUCxXQUFPO0FBVkE7QUFUQSxFQUFmOztBQXVCQSxNQUFNNUIsV0FBVyxHQUFHWSw2REFBVyxDQUFDUyxTQUFELENBQS9CO0FBRUEsaUVBQWVyQixXQUFmOzs7Ozs7Ozs7O0FDMUNBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZW1vbjhfYXBwLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9sZW1vbjhfYXBwLy4vc3R5bGVzL3RoZW1lLmpzIiwid2VicGFjazovL2xlbW9uOF9hcHAvZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vbGVtb244X2FwcC9leHRlcm5hbCBcIkBjaGFrcmEtdWkvdGhlbWUtdG9vbHNcIiIsIndlYnBhY2s6Ly9sZW1vbjhfYXBwL2V4dGVybmFsIFwiQGVtb3Rpb24vcmVhY3RcIiIsIndlYnBhY2s6Ly9sZW1vbjhfYXBwL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9sZW1vbjhfYXBwL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIsIENvbG9yTW9kZVByb3ZpZGVyLCB1c2VDb2xvck1vZGUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IGN1c3RvbVRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcbmltcG9ydCB7IEdsb2JhbCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXG5cbmNvbnN0IEdsb2JhbFN0eWxlID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEdsb2JhbC8+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC8+XG4gIClcbn1cblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPENoYWtyYVByb3ZpZGVyIHJlc2V0Q1NTIHRoZW1lPXtjdXN0b21UaGVtZX0+XG4gICAgICA8Q29sb3JNb2RlUHJvdmlkZXJcbiAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgIGluaXRpYWxDb2xvck1vZGU6IFwibGlnaHRcIixcbiAgICAgICAgICB1c2VTeXN0ZW1Db2xvck1vZGU6IHRydWUsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxHbG9iYWxTdHlsZT5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvR2xvYmFsU3R5bGU+XG4gICAgICA8L0NvbG9yTW9kZVByb3ZpZGVyPlxuICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHAiLCJpbXBvcnQgeyB0aGVtZSBhcyBjaGFrcmFUaGVtZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxyXG5pbXBvcnQgeyBjcmVhdGVCcmVha3BvaW50cyB9IGZyb20gXCJAY2hha3JhLXVpL3RoZW1lLXRvb2xzXCJcclxuXHJcbmNvbnN0IGZvbnRzID0ge1xyXG4gICAgLi4uY2hha3JhVGhlbWUuZm9udHMsXHJcbiAgICBib2R5OiBgSW50ZXIsLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmLFwiQXBwbGUgQ29sb3IgRW1vamlcIixcIlNlZ29lIFVJIEVtb2ppXCIsXCJTZWdvZSBVSSBTeW1ib2xcImAsXHJcbiAgICBoZWFkaW5nOiBgSW50ZXIsLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmLFwiQXBwbGUgQ29sb3IgRW1vamlcIixcIlNlZ29lIFVJIEVtb2ppXCIsXCJTZWdvZSBVSSBTeW1ib2xcImBcclxufVxyXG5cclxuY29uc3QgYnJlYWtwb2ludHMgPSBjcmVhdGVCcmVha3BvaW50cyh7XHJcbiAgICBzbTogXCI0MGVtXCIsXHJcbiAgICBtZDogXCI1MmVtXCIsXHJcbiAgICBsZzogXCI2NGVtXCIsXHJcbiAgICBsZzogXCI2MmVtXCIsXHJcbn0pXHJcblxyXG5jb25zdCBvdmVycmlkZXMgPSB7XHJcbiAgICAuLi5jaGFrcmFUaGVtZSxcclxuICAgIGZvbnRzLFxyXG4gICAgYnJlYWtwb2ludHMsXHJcbiAgICBmb250V2VpZ2h0czoge1xyXG4gICAgICAgIG5vcm1hbDogMzAwLFxyXG4gICAgICAgIG1lZGl1bTogNjAwLFxyXG4gICAgICAgIGJvbGQ6IDcwMFxyXG4gICAgfSxcclxuICAgIGZvbnRTaXplczoge1xyXG4gICAgICAgIHhzOiBcIjEycHhcIixcclxuICAgICAgICBzbTogXCIxNHB4XCIsXHJcbiAgICAgICAgbWQ6IFwiMTZweFwiLFxyXG4gICAgICAgIGxnOiBcIjI5cHhcIixcclxuICAgICAgICB4bDogXCIyMHB4XCIsXHJcbiAgICAgICAgXCIyeGxcIjogXCIyNHB4XCIsXHJcbiAgICAgICAgXCIzeGxcIjogXCIyOHB4XCIsXHJcbiAgICAgICAgXCI0eGxcIjogXCIzNnB4XCIsXHJcbiAgICAgICAgXCI1eGxcIjogXCI0OHB4XCIsXHJcbiAgICAgICAgXCI2eGxcIjogXCI2NHB4XCIsXHJcbiAgICB9LFxyXG59XHJcblxyXG5jb25zdCBjdXN0b21UaGVtZSA9IGV4dGVuZFRoZW1lKG92ZXJyaWRlcylcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1c3RvbVRoZW1lIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3RoZW1lLXRvb2xzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJDaGFrcmFQcm92aWRlciIsIkNvbG9yTW9kZVByb3ZpZGVyIiwidXNlQ29sb3JNb2RlIiwiY3VzdG9tVGhlbWUiLCJHbG9iYWwiLCJjc3MiLCJHbG9iYWxTdHlsZSIsImNoaWxkcmVuIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJpbml0aWFsQ29sb3JNb2RlIiwidXNlU3lzdGVtQ29sb3JNb2RlIiwidGhlbWUiLCJjaGFrcmFUaGVtZSIsImV4dGVuZFRoZW1lIiwiY3JlYXRlQnJlYWtwb2ludHMiLCJmb250cyIsImJvZHkiLCJoZWFkaW5nIiwiYnJlYWtwb2ludHMiLCJzbSIsIm1kIiwibGciLCJvdmVycmlkZXMiLCJmb250V2VpZ2h0cyIsIm5vcm1hbCIsIm1lZGl1bSIsImJvbGQiLCJmb250U2l6ZXMiLCJ4cyIsInhsIl0sInNvdXJjZVJvb3QiOiIifQ==