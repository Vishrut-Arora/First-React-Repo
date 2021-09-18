"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Container.js":
/*!*********************************!*\
  !*** ./components/Container.js ***!
  \*********************************/
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


var _jsxFileName = "C:\\Users\\vishr\\OneDrive\\Desktop\\games and applications\\projects\\Lemon8\\lemon8_app\\components\\Container.js",
    _this = undefined,
    _templateObject,
    _s = $RefreshSig$();








var Container = function Container(_ref) {
  _s();

  var children = _ref.children;

  var _useColorMode = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorMode)(),
      colorMode = _useColorMode.colorMode;

  var bgColor = {
    light: 'white',
    dark: '#F6AD55'
  };
  var color = {
    light: 'black',
    dark: 'white'
  };
  var navHoverBg = {
    dark: 'red.400'
  };
  var StickyNav = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_3__.default)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex)(_templateObject || (_templateObject = (0,C_Users_vishr_OneDrive_Desktop_games_and_applications_projects_Lemon8_lemon8_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n        position: sticky;\n        z-index: 10;\n        top: 0;\n        backdrop-filter: saturate(180%) blur(20px);\n        transition: height .5s, line-height .5s;\n        "])));
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
          href: "/Index",
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
              lineNumber: 61,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
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
              lineNumber: 68,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
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
      lineNumber: 77,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Container, "2Uu86IH3do63pkN3s1ysdRMmJuc=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorMode];
});

_c = Container;
/* harmony default export */ __webpack_exports__["default"] = (Container);

var _c;

$RefreshReg$(_c, "Container");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmFlMGY0OWMwODYwZTM4ZGU3NmEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBT0E7QUFDQTs7OztBQUdBLElBQU1RLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUNoQyxzQkFBc0JSLDhEQUFZLEVBQWxDO0FBQUEsTUFBUVMsU0FBUixpQkFBUUEsU0FBUjs7QUFFQSxNQUFNQyxPQUFPLEdBQUc7QUFDWkMsSUFBQUEsS0FBSyxFQUFFLE9BREs7QUFFWkMsSUFBQUEsSUFBSSxFQUFFO0FBRk0sR0FBaEI7QUFLQSxNQUFNQyxLQUFLLEdBQUc7QUFDVkYsSUFBQUEsS0FBSyxFQUFFLE9BREc7QUFFVkMsSUFBQUEsSUFBSSxFQUFFO0FBRkksR0FBZDtBQUtBLE1BQU1FLFVBQVUsR0FBRztBQUNmRixJQUFBQSxJQUFJLEVBQUU7QUFEUyxHQUFuQjtBQUlBLE1BQU1HLFNBQVMsR0FBR1Qsd0RBQU0sQ0FBQ0osa0RBQUQsQ0FBVCx3WkFBZjtBQVFBLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsU0FBRDtBQUNJLG1CQUFhLEVBQUMsS0FEbEI7QUFFSSxvQkFBYyxFQUFDLGVBRm5CO0FBR0ksZ0JBQVUsRUFBQyxRQUhmO0FBSUksY0FBUSxFQUFDLFFBSmI7QUFLSSxjQUFRLEVBQUMsT0FMYjtBQU1JLFlBQU0sRUFBQyxPQU5YO0FBT0ksV0FBSyxFQUFDLE1BUFY7QUFRSSxRQUFFLEVBQUVRLE9BQU8sQ0FBQ0QsU0FBRCxDQVJmO0FBU0ksUUFBRSxFQUFDLEtBVFA7QUFVSSxRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLEVBQVAsQ0FWUjtBQVdJLFFBQUUsRUFBRSxDQVhSO0FBWUksUUFBRSxFQUFFLENBWlI7QUFhSSxRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FiUjtBQWNJLFFBQUUsRUFBQyxNQWRQO0FBQUEsNkJBZ0JJLDhEQUFDLGlEQUFEO0FBQUEsZ0NBRUksOERBQUMsa0RBQUQ7QUFBVSxjQUFJLEVBQUMsUUFBZjtBQUF3QixrQkFBUSxNQUFoQztBQUFBLGlDQUNJLDhEQUFDLG9EQUFEO0FBQVEsY0FBRSxFQUFDLEdBQVg7QUFBZSxtQkFBTyxFQUFDLE9BQXZCO0FBQStCLGFBQUMsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFsQztBQUE2QyxrQkFBTSxFQUFFO0FBQUVPLGNBQUFBLGVBQWUsRUFBRUYsVUFBVSxDQUFDTCxTQUFEO0FBQTdCLGFBQXJEO0FBQUEsbUNBQ0EsOERBQUMsa0RBQUQ7QUFBTSxzQkFBUSxFQUFDLElBQWY7QUFBb0Isd0JBQVUsRUFBQyxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBU0ksOERBQUMsa0RBQUQ7QUFBVSxjQUFJLEVBQUMsT0FBZjtBQUF1QixrQkFBUSxNQUEvQjtBQUFBLGlDQUNJLDhEQUFDLG9EQUFEO0FBQVEsY0FBRSxFQUFDLEdBQVg7QUFBZSxtQkFBTyxFQUFDLE9BQXZCO0FBQStCLGFBQUMsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFsQztBQUE2QyxrQkFBTSxFQUFFO0FBQUVPLGNBQUFBLGVBQWUsRUFBRUYsVUFBVSxDQUFDTCxTQUFEO0FBQTdCLGFBQXJEO0FBQUEsbUNBQ0EsOERBQUMsa0RBQUQ7QUFBTSxzQkFBUSxFQUFDLElBQWY7QUFBb0Isd0JBQVUsRUFBQyxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFxQ0ksOERBQUMsa0RBQUQ7QUFDSSxRQUFFLEVBQUMsTUFEUDtBQUVJLG9CQUFjLEVBQUMsUUFGbkI7QUFHSSxtQkFBYSxFQUFDLFFBSGxCO0FBSUksUUFBRSxFQUFDLE1BSlA7QUFLSSxZQUFNLEVBQUMsS0FMWDtBQU1JLFdBQUssRUFBRUksS0FBSyxDQUFDSixTQUFELENBTmhCO0FBT0ksUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxFQUFQLENBUFI7QUFRSSxRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQUMsRUFBUixDQVJSO0FBQUEsZ0JBVUtEO0FBVkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXJDSjtBQUFBLGtCQURKO0FBcURILENBOUVEOztHQUFNRDtVQUNvQlA7OztLQURwQk87QUFnRk4sK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHtcclxuICAgIHVzZUNvbG9yTW9kZSxcclxuICAgIEJ1dHRvbixcclxuICAgIEZsZXgsXHJcbiAgICBCb3gsXHJcbiAgICBUZXh0XHJcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXHJcblxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgeyBjb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpXHJcblxyXG4gICAgY29uc3QgYmdDb2xvciA9IHtcclxuICAgICAgICBsaWdodDogJ3doaXRlJyxcclxuICAgICAgICBkYXJrOiAnI0Y2QUQ1NSdcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb2xvciA9IHtcclxuICAgICAgICBsaWdodDogJ2JsYWNrJyxcclxuICAgICAgICBkYXJrOiAnd2hpdGUnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmF2SG92ZXJCZyA9IHtcclxuICAgICAgICBkYXJrOiAncmVkLjQwMCcsXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgU3RpY2t5TmF2ID0gc3R5bGVkKEZsZXgpYFxyXG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgLjVzLCBsaW5lLWhlaWdodCAuNXM7XHJcbiAgICAgICAgYFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFN0aWNreU5hdlxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cInJvd1wiXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aD1cIjE2MDBweFwiXHJcbiAgICAgICAgICAgICAgICBtaW5XaWR0aD1cIjM1NnB4XCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMHB4XCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICBiZz17YmdDb2xvcltjb2xvck1vZGVdfVxyXG4gICAgICAgICAgICAgICAgYXM9XCJuYXZcIlxyXG4gICAgICAgICAgICAgICAgcHg9e1syLCA2LCAzMF19XHJcbiAgICAgICAgICAgICAgICBweT17Mn1cclxuICAgICAgICAgICAgICAgIG10PXswfVxyXG4gICAgICAgICAgICAgICAgbWI9e1swLCAwLCA4XX1cclxuICAgICAgICAgICAgICAgIG14PVwiYXV0b1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxCb3ggPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvSW5kZXhcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBhcz1cImFcIiB2YXJpYW50PVwiZ2hvc3RcIiBwPXtbMSwgMiwgNF19IF9ob3Zlcj17eyBiYWNrZ3JvdW5kQ29sb3I6IG5hdkhvdmVyQmdbY29sb3JNb2RlXSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJsZ1wiIGZvbnRXZWlnaHQ9XCJib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvYmxvZ1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGFzPVwiYVwiIHZhcmlhbnQ9XCJnaG9zdFwiIHA9e1sxLCAyLCA0XX0gX2hvdmVyPXt7IGJhY2tncm91bmRDb2xvcjogbmF2SG92ZXJCZ1tjb2xvck1vZGVdIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cImxnXCIgZm9udFdlaWdodD1cImJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJsb2dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgICAgPC9TdGlja3lOYXYgPlxyXG4gICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgICAgYXM9XCJtYWluXCJcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgYmc9XCJwaW5rXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjY2MFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3JbY29sb3JNb2RlXX1cclxuICAgICAgICAgICAgICAgIHB4PXtbMCwgNCwgNDBdfVxyXG4gICAgICAgICAgICAgICAgbXQ9e1s0LCA4LCAtMTBdfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuICAgICAgICAgICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lclxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb2xvck1vZGUiLCJCdXR0b24iLCJGbGV4IiwiQm94IiwiVGV4dCIsIk5leHRMaW5rIiwic3R5bGVkIiwiQ29udGFpbmVyIiwiY2hpbGRyZW4iLCJjb2xvck1vZGUiLCJiZ0NvbG9yIiwibGlnaHQiLCJkYXJrIiwiY29sb3IiLCJuYXZIb3ZlckJnIiwiU3RpY2t5TmF2IiwiYmFja2dyb3VuZENvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==