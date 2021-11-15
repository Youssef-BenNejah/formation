"use strict";
self["webpackHotUpdate_N_E"]("pages/forgot-password",{

/***/ "./pages/forgot-password.js":
/*!**********************************!*\
  !*** ./pages/forgot-password.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_projet_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_projet_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_projet_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_projet_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/client/link */ "./node_modules/next/dist/client/link.js");
/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_forms_ForgotPasswordForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/forms/ForgotPasswordForm */ "./components/forms/ForgotPasswordForm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context */ "./context/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\projet\\client\\pages\\forgot-password.js",
    _this = undefined,
    _s = $RefreshSig$();





 // import AuthForm from '../components/forms/authForm';







var ForgotPassword = function ForgotPassword() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      email = _useState2[0],
      setEmail = _useState2[1]; // const [name, setName] = useState('');


  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      newpassword = _useState3[0],
      setNewPassword = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      secret = _useState4[0],
      setSecret = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      ok = _useState5[0],
      setOk = _useState5[1];

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_context__WEBPACK_IMPORTED_MODULE_8__.UserContext),
      state = _useContext[0],
      setstate = _useContext[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = (0,C_projet_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_projet_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      var _yield$axios$post, data;

      return C_projet_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.prev = 1;
              setLoading(true);
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_2___default().post("/forgot-password", {
                email: email,
                newpassword: newpassword,
                secret: secret
              });

            case 5:
              _yield$axios$post = _context.sent;
              data = _yield$axios$post.data;
              setName('');
              setEmail('');
              setNewPassword('');
              setSecret('');
              setOk(data.ok);
              setLoading(false);
              _context.next = 19;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](1);
              react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(_context.t0.response.data);
              setLoading(false);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 15]]);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  if (state && state.token) router.push("/");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
    className: "container-fluid",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      className: "row py-5 img-default  -light",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "col-4 text-center"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      className: "row py-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "col-md-6 offset-md-3",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_forms_ForgotPasswordForm__WEBPACK_IMPORTED_MODULE_5__.default, {
          handleSubmit: handleSubmit,
          name: name,
          setName: setName,
          email: email,
          setEmail: setEmail,
          password: password,
          setPassword: setPassword,
          secret: secret,
          setSecret: setSecret
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 20
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, _this), loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h1", {
        children: "Loading.."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 29
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          className: "col",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Modal, {
            title: "congrat !",
            visible: ok,
            onCancel: function onCancel() {
              return setOk(false);
            },
            footer: null,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
              children: " Congrat ! You can now login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 28
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_dist_client_link__WEBPACK_IMPORTED_MODULE_4___default()), {
              href: "/login",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
                className: "btn btn-primary btn-sm",
                children: "Login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 32
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 28
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 24
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 20
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 20
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 9
  }, _this);
};

_s(ForgotPassword, "VzjB1qbdyd3uTd9fowszWqXP89U=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter];
});

_c = ForgotPassword;
/* harmony default export */ __webpack_exports__["default"] = (ForgotPassword);

var _c;

$RefreshReg$(_c, "ForgotPassword");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZm9yZ290LXBhc3N3b3JkLjgxYWRmMjFiMzFjZmMxYmJiZjU1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBR0EsSUFBTVMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQUE7O0FBRXpCLGtCQUEyQkgsK0NBQVEsQ0FBQyxLQUFELENBQW5DO0FBQUEsTUFBT0ksT0FBUDtBQUFBLE1BQWVDLFVBQWY7O0FBQ0EsbUJBQTBCTCwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQSxNQUFPTSxLQUFQO0FBQUEsTUFBY0MsUUFBZCxpQkFIeUIsQ0FJekI7OztBQUNBLG1CQUFzQ1AsK0NBQVEsQ0FBQyxFQUFELENBQTlDO0FBQUEsTUFBT1EsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFDQSxtQkFBNEJULCtDQUFRLENBQUMsRUFBRCxDQUFwQztBQUFBLE1BQU9VLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLG1CQUFvQlgsK0NBQVEsQ0FBQyxLQUFELENBQTVCO0FBQUEsTUFBT1ksRUFBUDtBQUFBLE1BQVdDLEtBQVg7O0FBQ0Esb0JBQTBCZCxpREFBVSxDQUFDRyxpREFBRCxDQUFwQztBQUFBLE1BQU9ZLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLE1BQU1DLE1BQU0sR0FBR2Ysc0RBQVMsRUFBeEI7O0FBR0EsTUFBTWdCLFlBQVk7QUFBQSxpUEFBRyxpQkFBT0MsQ0FBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCQSxjQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFEaUI7QUFHYmQsY0FBQUEsVUFBVSxDQUFDLElBQUQsQ0FBVjtBQUhhO0FBQUEscUJBSVVYLGlEQUFBLHFCQUNuQjtBQUVJWSxnQkFBQUEsS0FBSyxFQUFMQSxLQUZKO0FBR0lFLGdCQUFBQSxXQUFXLEVBQVhBLFdBSEo7QUFJSUUsZ0JBQUFBLE1BQU0sRUFBTkE7QUFKSixlQURtQixDQUpWOztBQUFBO0FBQUE7QUFJTFcsY0FBQUEsSUFKSyxxQkFJTEEsSUFKSztBQVliQyxjQUFBQSxPQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0FmLGNBQUFBLFFBQVEsQ0FBQyxFQUFELENBQVI7QUFDQUUsY0FBQUEsY0FBYyxDQUFDLEVBQUQsQ0FBZDtBQUNBRSxjQUFBQSxTQUFTLENBQUMsRUFBRCxDQUFUO0FBQ0FFLGNBQUFBLEtBQUssQ0FBQ1EsSUFBSSxDQUFDVCxFQUFOLENBQUw7QUFDQVAsY0FBQUEsVUFBVSxDQUFDLEtBQUQsQ0FBVjtBQWpCYTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXFCYlYsY0FBQUEsdURBQUEsQ0FBWSxZQUFJNkIsUUFBSixDQUFhSCxJQUF6QjtBQUNBaEIsY0FBQUEsVUFBVSxDQUFDLEtBQUQsQ0FBVjs7QUF0QmE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWlksWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUEwQkEsTUFBR0gsS0FBSyxJQUFJQSxLQUFLLENBQUNXLEtBQWxCLEVBQXlCVCxNQUFNLENBQUNVLElBQVAsQ0FBWSxHQUFaO0FBR3pCLHNCQUVJO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsOEJBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBS0k7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxzQkFBZjtBQUFBLCtCQUNHLDhEQUFDLHlFQUFEO0FBQ0Msc0JBQVksRUFBRVQsWUFEZjtBQUVDLGNBQUksRUFBR1UsSUFGUjtBQUdDLGlCQUFPLEVBQUVMLE9BSFY7QUFJQyxlQUFLLEVBQUVoQixLQUpSO0FBS0Msa0JBQVEsRUFBRUMsUUFMWDtBQU1DLGtCQUFRLEVBQUVxQixRQU5YO0FBT0MscUJBQVcsRUFBRUMsV0FQZDtBQVFDLGdCQUFNLEVBQUVuQixNQVJUO0FBU0MsbUJBQVMsRUFBRUM7QUFUWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBaUJNUCxPQUFPLGdCQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUgsZ0JBQ047QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSwrQkFDQTtBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGlDQUNJLDhEQUFDLHdDQUFEO0FBQ0ksaUJBQUssRUFBQyxXQURWO0FBRUksbUJBQU8sRUFBRVEsRUFGYjtBQUdJLG9CQUFRLEVBQUU7QUFBQSxxQkFBTUMsS0FBSyxDQUFDLEtBQUQsQ0FBWDtBQUFBLGFBSGQ7QUFJSSxrQkFBTSxFQUFFLElBSlo7QUFBQSxvQ0FLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMSixlQU1JLDhEQUFDLDhEQUFEO0FBQU0sa0JBQUksRUFBQyxRQUFYO0FBQUEscUNBQ0k7QUFBRyx5QkFBUyxFQUFDLHdCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWxCUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGSjtBQWdESCxDQXpGRDs7R0FBTVY7VUFTYUY7OztLQVRiRTtBQTBGTiwrREFBZUEsY0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9mb3Jnb3QtcGFzc3dvcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvZGlzdC9jbGllbnQvbGluayc7XHJcbi8vIGltcG9ydCBBdXRoRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm1zL2F1dGhGb3JtJztcclxuaW1wb3J0IEZvcmdvdFBhc3N3b3JkRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm1zL0ZvcmdvdFBhc3N3b3JkRm9ybSc7XHJcblxyXG5pbXBvcnQge3VzZUNvbnRleHQsdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0JztcclxuXHJcblxyXG5jb25zdCBGb3Jnb3RQYXNzd29yZCA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgW2xvYWRpbmcsc2V0TG9hZGluZ109dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICAvLyBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbmV3cGFzc3dvcmQsIHNldE5ld1Bhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWNyZXQsIHNldFNlY3JldF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbb2ssIHNldE9rXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0c3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dClcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoYC9mb3Jnb3QtcGFzc3dvcmRgLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3cGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VjcmV0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHNldE5hbWUoJycpO1xyXG4gICAgICAgICAgICBzZXRFbWFpbCgnJyk7XHJcbiAgICAgICAgICAgIHNldE5ld1Bhc3N3b3JkKCcnKTtcclxuICAgICAgICAgICAgc2V0U2VjcmV0KCcnKTtcclxuICAgICAgICAgICAgc2V0T2soZGF0YS5vayk7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcihlcnIucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBpZihzdGF0ZSAmJiBzdGF0ZS50b2tlbikgcm91dGVyLnB1c2goXCIvXCIpXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHktNSBpbWctZGVmYXVsdCAgLWxpZ2h0XCIgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHktNVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZmZzZXQtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgPEZvcmdvdFBhc3N3b3JkRm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldE5hbWU9e3NldE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldEVtYWlsPXtzZXRFbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZD17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGFzc3dvcmQ9e3NldFBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlY3JldD17c2VjcmV0fVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNlY3JldD17c2V0U2VjcmV0fVxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyA8aDE+TG9hZGluZy4uPC9oMT4gOiBcclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImNvbmdyYXQgIVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e29rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gc2V0T2soZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmb290ZXI9e251bGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4gQ29uZ3JhdCAhIFlvdSBjYW4gbm93IGxvZ2luPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCI+TG9naW48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZvcmdvdFBhc3N3b3JkOyJdLCJuYW1lcyI6WyJheGlvcyIsInRvYXN0IiwiTW9kYWwiLCJMaW5rIiwiRm9yZ290UGFzc3dvcmRGb3JtIiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiVXNlckNvbnRleHQiLCJGb3Jnb3RQYXNzd29yZCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZW1haWwiLCJzZXRFbWFpbCIsIm5ld3Bhc3N3b3JkIiwic2V0TmV3UGFzc3dvcmQiLCJzZWNyZXQiLCJzZXRTZWNyZXQiLCJvayIsInNldE9rIiwic3RhdGUiLCJzZXRzdGF0ZSIsInJvdXRlciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJkYXRhIiwic2V0TmFtZSIsImVycm9yIiwicmVzcG9uc2UiLCJ0b2tlbiIsInB1c2giLCJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCJdLCJzb3VyY2VSb290IjoiIn0=