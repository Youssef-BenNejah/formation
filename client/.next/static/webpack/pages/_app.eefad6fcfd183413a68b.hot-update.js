"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserContext": function() { return /* binding */ UserContext; },
/* harmony export */   "UserProvider": function() { return /* binding */ UserProvider; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next */ "next");
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");
var _jsxFileName = "C:\\projet\\client\\context\\index.js",
    _this = undefined,
    _s = $RefreshSig$();






var UserContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();

var UserProvider = function UserProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    user: {},
    token: ""
  }),
      state = _useState[0],
      setState = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setState(JSON.parse(window.localStorage.getItem('auth')));
  }, []);
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  var token = state && state.token ? state.token : "";
  (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.baseURL) = process.env.NEXT_PUBLIC_api;
  (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.headers.common.Authorization) = "Bearer ".concat(token);
  axios__WEBPACK_IMPORTED_MODULE_0___default().interceptors.response.use(function (response) {
    //do something before request is sent
    return response;
  }, function (error) {
    var res = error.response;

    if (res.status === 401 && res.config && !res.config.__isRteryRequest) {
      setState(null);
      window.localStorage.removeItem("auth");
      router.push("login");
    }
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(UserContext.Provider, {
    value: [state, setState],
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, _this);
};

_s(UserProvider, "3JJ5CIJE6Rv/xN69pcterFfEyqI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = UserProvider;


var _c;

$RefreshReg$(_c, "UserProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lZWZhZDZmY2ZkMTgzNDEzYTY4Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1NLFdBQVcsZ0JBQUdILG9EQUFhLEVBQWpDOztBQUNBLElBQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUNuQyxrQkFBMEJOLCtDQUFRLENBQUM7QUFDL0JPLElBQUFBLElBQUksRUFBRSxFQUR5QjtBQUUvQkMsSUFBQUEsS0FBSyxFQUFFO0FBRndCLEdBQUQsQ0FBbEM7QUFBQSxNQUFPQyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFJQVIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1pRLElBQUFBLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsTUFBNUIsQ0FBWCxDQUFELENBQVI7QUFFSCxHQUhRLEVBR04sRUFITSxDQUFUO0FBS0EsTUFBTUMsTUFBTSxHQUFDYixzREFBUyxFQUF0QjtBQUNBLE1BQU1LLEtBQUssR0FBRUMsS0FBSyxJQUFJQSxLQUFLLENBQUNELEtBQWYsR0FBdUJDLEtBQUssQ0FBQ0QsS0FBN0IsR0FBcUMsRUFBbEQ7QUFDQVYsRUFBQUEsK0RBQUEsR0FBdUJxQixPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZUFBbkM7QUFDQXZCLEVBQUFBLG9GQUFBLG9CQUEwRFUsS0FBMUQ7QUFDQVYsRUFBQUEsc0VBQUEsQ0FDSSxVQUFVMkIsUUFBVixFQUFvQjtBQUNoQjtBQUNBLFdBQU9BLFFBQVA7QUFDSCxHQUpMLEVBS0ksVUFBVUUsS0FBVixFQUFpQjtBQUNiLFFBQUlDLEdBQUcsR0FBR0QsS0FBSyxDQUFDRixRQUFoQjs7QUFDQSxRQUFJRyxHQUFHLENBQUNDLE1BQUosS0FBZSxHQUFmLElBQXNCRCxHQUFHLENBQUNFLE1BQTFCLElBQW9DLENBQUNGLEdBQUcsQ0FBQ0UsTUFBSixDQUFXQyxnQkFBcEQsRUFBc0U7QUFDbEVyQixNQUFBQSxRQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0FHLE1BQUFBLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQmtCLFVBQXBCLENBQStCLE1BQS9CO0FBQ0FoQixNQUFBQSxNQUFNLENBQUNpQixJQUFQLENBQVksT0FBWjtBQUVIO0FBQ0osR0FiTDtBQWVBLHNCQUNJLDhEQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRSxDQUFDeEIsS0FBRCxFQUFRQyxRQUFSLENBQTdCO0FBQUEsY0FDS0o7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFLSCxDQWxDRDs7R0FBTUQ7VUFVV0Y7OztLQVZYRTtBQW1DTiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IG5leHQgZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmNvbnN0IFVzZXJQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHVzZXI6IHt9LFxyXG4gICAgICAgIHRva2VuOiBcIlwiLFxyXG4gICAgfSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFN0YXRlKEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpKVxyXG5cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCByb3V0ZXI9dXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB0b2tlbiA9c3RhdGUgJiYgc3RhdGUudG9rZW4gPyBzdGF0ZS50b2tlbiA6IFwiXCI7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5iYXNlVVJMPXByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX2FwaTtcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uW1wiQXV0aG9yaXphdGlvblwiXT0gYEJlYXJlciAke3Rva2VufWAgO1xyXG4gICAgYXhpb3MuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcclxuICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgLy9kbyBzb21ldGhpbmcgYmVmb3JlIHJlcXVlc3QgaXMgc2VudFxyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IGVycm9yLnJlc3BvbnNlO1xyXG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAxICYmIHJlcy5jb25maWcgJiYgIXJlcy5jb25maWcuX19pc1J0ZXJ5UmVxdWVzdCkge1xyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoXCIpO1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCJsb2dpblwiKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbc3RhdGUsIHNldFN0YXRlXX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCB7IFVzZXJDb250ZXh0LCBVc2VyUHJvdmlkZXIgfTsiXSwibmFtZXMiOlsiYXhpb3MiLCJuZXh0IiwidXNlU3RhdGUiLCJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiVXNlckNvbnRleHQiLCJVc2VyUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJ0b2tlbiIsInN0YXRlIiwic2V0U3RhdGUiLCJKU09OIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicm91dGVyIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX2FwaSIsImhlYWRlcnMiLCJjb21tb24iLCJpbnRlcmNlcHRvcnMiLCJyZXNwb25zZSIsInVzZSIsImVycm9yIiwicmVzIiwic3RhdHVzIiwiY29uZmlnIiwiX19pc1J0ZXJ5UmVxdWVzdCIsInJlbW92ZUl0ZW0iLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==