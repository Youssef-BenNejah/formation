"use strict";
self["webpackHotUpdate_N_E"]("pages/user/dashboard",{

/***/ "./components/routes/UserRoute.js":
/*!****************************************!*\
  !*** ./components/routes/UserRoute.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_projet_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_projet_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_projet_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_projet_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context */ "./context/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\projet\\client\\components\\routes\\UserRoute.js",
    _this = undefined,
    _s = $RefreshSig$();










var userRoute = function userRoute(_ref) {
  _s();

  var children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      ok = _useState[0],
      setOk = _useState[1];

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_5__.UserContext),
      state = _useContext[0];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (state && state.token) getCurrentUser();
  }, [state && state.token]);

  var getCurrentUser = /*#__PURE__*/function () {
    var _ref2 = (0,C_projet_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_projet_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var _yield$axios$get, data;

      return C_projet_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_3___default().get("".concat("http://localhost:8000/api", "/current-user"), {
                headers: {
                  Authorization: "Bearer ".concat(state.token)
                }
              });

            case 3:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              if (data.ok) setOk(true);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              router.push("/login");

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function getCurrentUser() {
      return _ref2.apply(this, arguments);
    };
  }();

   true && state === null && setTimeout(function () {
    getCurrentUser();
  }, 1000);
  return !ok ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.SyncOutlined, {
    spin: true,
    className: "d-flex justify-content-center display-1 text-primary p-5"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: children
  }, void 0, false);
};

_s(userRoute, "r/+bvop+X/qr3NGDLNzxxqX+yCM=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

/* harmony default export */ __webpack_exports__["default"] = (userRoute);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9kYXNoYm9hcmQuZTFkZTkwNzdkODk4OTRjNGVkY2UuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBLElBQU1PLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUNoQyxrQkFBb0JQLCtDQUFRLENBQUMsS0FBRCxDQUE1QjtBQUFBLE1BQU9RLEVBQVA7QUFBQSxNQUFXQyxLQUFYOztBQUNBLG9CQUFnQlIsaURBQVUsQ0FBQ0ksaURBQUQsQ0FBMUI7QUFBQSxNQUFPSyxLQUFQOztBQUNBLE1BQU1DLE1BQU0sR0FBR1Isc0RBQVMsRUFBeEI7QUFDQUosRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSVcsS0FBSyxJQUFJQSxLQUFLLENBQUNFLEtBQW5CLEVBQ0lDLGNBQWM7QUFDckIsR0FIUSxFQUdOLENBQUNILEtBQUssSUFBSUEsS0FBSyxDQUFDRSxLQUFoQixDQUhNLENBQVQ7O0FBS0EsTUFBTUMsY0FBYztBQUFBLGtQQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRVFYLGdEQUFBLFdBQWFhLDJCQUFiLG9CQUF5RDtBQUM1RUcsZ0JBQUFBLE9BQU8sRUFBRTtBQUNMQyxrQkFBQUEsYUFBYSxtQkFBWVQsS0FBSyxDQUFDRSxLQUFsQjtBQURSO0FBRG1FLGVBQXpELENBRlI7O0FBQUE7QUFBQTtBQUVQUSxjQUFBQSxJQUZPLG9CQUVQQSxJQUZPO0FBT2Ysa0JBQUlBLElBQUksQ0FBQ1osRUFBVCxFQUFhQyxLQUFLLENBQUMsSUFBRCxDQUFMO0FBUEU7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFTZkUsY0FBQUEsTUFBTSxDQUFDVSxJQUFQLENBQVksUUFBWjs7QUFUZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFkUixjQUFjO0FBQUE7QUFBQTtBQUFBLEtBQXBCOztBQVlDLFdBQW1CSCxLQUFLLEtBQUssSUFBN0IsSUFBcUNZLFVBQVUsQ0FBQyxZQUFJO0FBQ2hEVCxJQUFBQSxjQUFjO0FBQ2pCLEdBRjhDLEVBRTdDLElBRjZDLENBQS9DO0FBS0QsU0FBTyxDQUFDTCxFQUFELGdCQUNILDhEQUFDLDJEQUFEO0FBQWMsUUFBSSxNQUFsQjtBQUFtQixhQUFTLEVBQUM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURHLGdCQUdIO0FBQUEsY0FDS0Q7QUFETCxtQkFISjtBQU9ILENBakNEOztHQUFNRDtVQUdhSDs7O0FBZ0NuQiwrREFBZUcsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3JvdXRlcy9Vc2VyUm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTeW5jT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dFwiO1xyXG5cclxuXHJcbmNvbnN0IHVzZXJSb3V0ZSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFtvaywgc2V0T2tdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3N0YXRlXSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXRlICYmIHN0YXRlLnRva2VuKVxyXG4gICAgICAgICAgICBnZXRDdXJyZW50VXNlcigpO1xyXG4gICAgfSwgW3N0YXRlICYmIHN0YXRlLnRva2VuXSk7XHJcblxyXG4gICAgY29uc3QgZ2V0Q3VycmVudFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJfS9jdXJyZW50LXVzZXJgLCB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3N0YXRlLnRva2VufWBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLm9rKSBzZXRPayh0cnVlKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAgcHJvY2Vzcy5icm93c2VyICYmIHN0YXRlID09PSBudWxsICYmIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgICB9LDEwMDApXHJcblxyXG5cclxuICAgIHJldHVybiAhb2sgPyAoXHJcbiAgICAgICAgPFN5bmNPdXRsaW5lZCBzcGluIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGRpc3BsYXktMSB0ZXh0LXByaW1hcnkgcC01XCIgLz5cclxuICAgICkgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VyUm91dGU7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsImF4aW9zIiwidXNlUm91dGVyIiwiU3luY091dGxpbmVkIiwiVXNlckNvbnRleHQiLCJ1c2VyUm91dGUiLCJjaGlsZHJlbiIsIm9rIiwic2V0T2siLCJzdGF0ZSIsInJvdXRlciIsInRva2VuIiwiZ2V0Q3VycmVudFVzZXIiLCJnZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJkYXRhIiwicHVzaCIsInNldFRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9