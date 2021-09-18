"use strict";
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./components/Enclose.js":
/*!*******************************!*\
  !*** ./components/Enclose.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_vishr_OneDrive_Desktop_games_and_applications_projects_Lemon8_lemon8_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\vishr\\OneDrive\\Desktop\\games and applications\\projects\\Lemon8\\lemon8_app\\components\\Enclose.js",
    _this = undefined,
    _templateObject,
    _s = $RefreshSig$();








var Enclose = function Enclose(_ref) {
  _s();

  var children = _ref.children;

  var _useColorMode = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorMode)(),
      colorMode = _useColorMode.colorMode;

  var bgColor = {
    light: 'pink',
    dark: '#F6AD55'
  };
  var color = {
    light: 'black',
    dark: 'white'
  };
  var navHoverBg = {
    dark: 'red.400'
  };
  var StickyNav = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_3__.default)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex)(_templateObject || (_templateObject = (0,C_Users_vishr_OneDrive_Desktop_games_and_applications_projects_Lemon8_lemon8_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n        position: sticky;\n        top: 0;\n        transition: height .5s, line-height .5s;\n        "])));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(StickyNav, {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: "1600px",
      minWidth: "356px",
      height: "100px",
      width: "100%",
      bg: bgColor[colorMode],
      as: "nav",
      px: [2, 6, 30],
      py: 2,
      mt: 0,
      mb: [0, 0, 8],
      mx: "auto",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/",
          passHref: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
            as: "a",
            variant: "ghost",
            p: [1, 2, 4],
            _hover: {
              backgroundColor: navHoverBg[colorMode]
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
              fontSize: "lg",
              fontWeight: "bold",
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/blog",
          passHref: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
            as: "a",
            variant: "ghost",
            p: [1, 2, 4],
            _hover: {
              backgroundColor: navHoverBg[colorMode]
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
              fontSize: "lg",
              fontWeight: "bold",
              children: "Blog"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {
      as: "main",
      justifyContent: "center",
      flexDirection: "column",
      bg: "pink",
      height: "660",
      color: color[colorMode],
      px: [0, 4, 40],
      mt: [4, 8, -10],
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Enclose, "2Uu86IH3do63pkN3s1ysdRMmJuc=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorMode];
});

_c = Enclose;
/* harmony default export */ __webpack_exports__["default"] = (Enclose);

var _c;

$RefreshReg$(_c, "Enclose");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy4yM2VlZmVjZGI4OGY4YzU5NGRiZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFPQTtBQUNBOzs7O0FBR0EsSUFBTVEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQzlCLHNCQUFzQlIsOERBQVksRUFBbEM7QUFBQSxNQUFRUyxTQUFSLGlCQUFRQSxTQUFSOztBQUVBLE1BQU1DLE9BQU8sR0FBRztBQUNaQyxJQUFBQSxLQUFLLEVBQUUsTUFESztBQUVaQyxJQUFBQSxJQUFJLEVBQUU7QUFGTSxHQUFoQjtBQUtBLE1BQU1DLEtBQUssR0FBRztBQUNWRixJQUFBQSxLQUFLLEVBQUUsT0FERztBQUVWQyxJQUFBQSxJQUFJLEVBQUU7QUFGSSxHQUFkO0FBS0EsTUFBTUUsVUFBVSxHQUFHO0FBQ2ZGLElBQUFBLElBQUksRUFBRTtBQURTLEdBQW5CO0FBSUEsTUFBTUcsU0FBUyxHQUFHVCx3REFBTSxDQUFDSixrREFBRCxDQUFULDZVQUFmO0FBTUEsc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyxTQUFEO0FBQ0ksbUJBQWEsRUFBQyxLQURsQjtBQUVJLG9CQUFjLEVBQUMsZUFGbkI7QUFHSSxnQkFBVSxFQUFDLFFBSGY7QUFJSSxjQUFRLEVBQUMsUUFKYjtBQUtJLGNBQVEsRUFBQyxPQUxiO0FBTUksWUFBTSxFQUFDLE9BTlg7QUFPSSxXQUFLLEVBQUMsTUFQVjtBQVFJLFFBQUUsRUFBRVEsT0FBTyxDQUFDRCxTQUFELENBUmY7QUFTSSxRQUFFLEVBQUMsS0FUUDtBQVVJLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sRUFBUCxDQVZSO0FBV0ksUUFBRSxFQUFFLENBWFI7QUFZSSxRQUFFLEVBQUUsQ0FaUjtBQWFJLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQWJSO0FBY0ksUUFBRSxFQUFDLE1BZFA7QUFBQSw2QkFnQkksOERBQUMsaURBQUQ7QUFBQSxnQ0FFSSw4REFBQyxrREFBRDtBQUFVLGNBQUksRUFBQyxHQUFmO0FBQW1CLGtCQUFRLE1BQTNCO0FBQUEsaUNBQ0ksOERBQUMsb0RBQUQ7QUFBUSxjQUFFLEVBQUMsR0FBWDtBQUFlLG1CQUFPLEVBQUMsT0FBdkI7QUFBK0IsYUFBQyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQWxDO0FBQTZDLGtCQUFNLEVBQUU7QUFBRU8sY0FBQUEsZUFBZSxFQUFFRixVQUFVLENBQUNMLFNBQUQ7QUFBN0IsYUFBckQ7QUFBQSxtQ0FDQSw4REFBQyxrREFBRDtBQUFNLHNCQUFRLEVBQUMsSUFBZjtBQUFvQix3QkFBVSxFQUFDLE1BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFTSSw4REFBQyxrREFBRDtBQUFVLGNBQUksRUFBQyxPQUFmO0FBQXVCLGtCQUFRLE1BQS9CO0FBQUEsaUNBQ0ksOERBQUMsb0RBQUQ7QUFBUSxjQUFFLEVBQUMsR0FBWDtBQUFlLG1CQUFPLEVBQUMsT0FBdkI7QUFBK0IsYUFBQyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQWxDO0FBQTZDLGtCQUFNLEVBQUU7QUFBRU8sY0FBQUEsZUFBZSxFQUFFRixVQUFVLENBQUNMLFNBQUQ7QUFBN0IsYUFBckQ7QUFBQSxtQ0FDQSw4REFBQyxrREFBRDtBQUFNLHNCQUFRLEVBQUMsSUFBZjtBQUFvQix3QkFBVSxFQUFDLE1BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQXFDSSw4REFBQyxrREFBRDtBQUNJLFFBQUUsRUFBQyxNQURQO0FBRUksb0JBQWMsRUFBQyxRQUZuQjtBQUdJLG1CQUFhLEVBQUMsUUFIbEI7QUFJSSxRQUFFLEVBQUMsTUFKUDtBQUtJLFlBQU0sRUFBQyxLQUxYO0FBTUksV0FBSyxFQUFFSSxLQUFLLENBQUNKLFNBQUQsQ0FOaEI7QUFPSSxRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLEVBQVAsQ0FQUjtBQVFJLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBQyxFQUFSLENBUlI7QUFBQSxnQkFVS0Q7QUFWTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckNKO0FBQUEsa0JBREo7QUFxREgsQ0E1RUQ7O0dBQU1EO1VBQ29CUDs7O0tBRHBCTztBQThFTiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0VuY2xvc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHtcclxuICAgIHVzZUNvbG9yTW9kZSxcclxuICAgIEJ1dHRvbixcclxuICAgIEZsZXgsXHJcbiAgICBCb3gsXHJcbiAgICBUZXh0XHJcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXHJcblxyXG5cclxuY29uc3QgRW5jbG9zZSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IHsgY29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKVxyXG5cclxuICAgIGNvbnN0IGJnQ29sb3IgPSB7XHJcbiAgICAgICAgbGlnaHQ6ICdwaW5rJyxcclxuICAgICAgICBkYXJrOiAnI0Y2QUQ1NSdcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb2xvciA9IHtcclxuICAgICAgICBsaWdodDogJ2JsYWNrJyxcclxuICAgICAgICBkYXJrOiAnd2hpdGUnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmF2SG92ZXJCZyA9IHtcclxuICAgICAgICBkYXJrOiAncmVkLjQwMCcsXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgU3RpY2t5TmF2ID0gc3R5bGVkKEZsZXgpYFxyXG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAuNXMsIGxpbmUtaGVpZ2h0IC41cztcclxuICAgICAgICBgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U3RpY2t5TmF2XHJcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwicm93XCJcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgIG1heFdpZHRoPVwiMTYwMHB4XCJcclxuICAgICAgICAgICAgICAgIG1pbldpZHRoPVwiMzU2cHhcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwcHhcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgIGJnPXtiZ0NvbG9yW2NvbG9yTW9kZV19XHJcbiAgICAgICAgICAgICAgICBhcz1cIm5hdlwiXHJcbiAgICAgICAgICAgICAgICBweD17WzIsIDYsIDMwXX1cclxuICAgICAgICAgICAgICAgIHB5PXsyfVxyXG4gICAgICAgICAgICAgICAgbXQ9ezB9XHJcbiAgICAgICAgICAgICAgICBtYj17WzAsIDAsIDhdfVxyXG4gICAgICAgICAgICAgICAgbXg9XCJhdXRvXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEJveCA+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBhcz1cImFcIiB2YXJpYW50PVwiZ2hvc3RcIiBwPXtbMSwgMiwgNF19IF9ob3Zlcj17eyBiYWNrZ3JvdW5kQ29sb3I6IG5hdkhvdmVyQmdbY29sb3JNb2RlXSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJsZ1wiIGZvbnRXZWlnaHQ9XCJib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvYmxvZ1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGFzPVwiYVwiIHZhcmlhbnQ9XCJnaG9zdFwiIHA9e1sxLCAyLCA0XX0gX2hvdmVyPXt7IGJhY2tncm91bmRDb2xvcjogbmF2SG92ZXJCZ1tjb2xvck1vZGVdIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cImxnXCIgZm9udFdlaWdodD1cImJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJsb2dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgICAgPC9TdGlja3lOYXYgPlxyXG4gICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgICAgYXM9XCJtYWluXCJcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgYmc9XCJwaW5rXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjY2MFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3JbY29sb3JNb2RlXX1cclxuICAgICAgICAgICAgICAgIHB4PXtbMCwgNCwgNDBdfVxyXG4gICAgICAgICAgICAgICAgbXQ9e1s0LCA4LCAtMTBdfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuICAgICAgICAgICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVuY2xvc2VcclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29sb3JNb2RlIiwiQnV0dG9uIiwiRmxleCIsIkJveCIsIlRleHQiLCJOZXh0TGluayIsInN0eWxlZCIsIkVuY2xvc2UiLCJjaGlsZHJlbiIsImNvbG9yTW9kZSIsImJnQ29sb3IiLCJsaWdodCIsImRhcmsiLCJjb2xvciIsIm5hdkhvdmVyQmciLCJTdGlja3lOYXYiLCJiYWNrZ3JvdW5kQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9