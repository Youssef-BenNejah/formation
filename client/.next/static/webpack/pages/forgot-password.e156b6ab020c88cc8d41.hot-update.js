"use strict";
self["webpackHotUpdate_N_E"]("pages/forgot-password",{

/***/ "./components/forms/ForgotPasswordForm.js":
/*!************************************************!*\
  !*** ./components/forms/ForgotPasswordForm.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\projet\\client\\components\\forms\\ForgotPasswordForm.js",
    _this = undefined;




var ForgotPasswordForm = function ForgotPasswordForm(_ref) {
  var handleSubmit = _ref.handleSubmit,
      email = _ref.email,
      newpassword = _ref.newpassword,
      secret = _ref.secret,
      setNewPassword = _ref.setNewPassword,
      setSecret = _ref.setSecret,
      setEmail = _ref.setEmail,
      page = _ref.page;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    onSubmit: handleSubmit,
    children: [page !== "login" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "form-group p-2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "text-muted",
          children: "Your name "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        values: name,
        onChange: function onChange(event) {
          return setName(event.target.value);
        },
        className: "form-control",
        placeholder: "Enter your name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "form-group p-2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "text-muted",
          children: "Email adress "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "email",
        className: "form-control",
        values: email,
        onChange: function onChange(event) {
          return setEmail(event.target.value);
        },
        placeholder: "Enter your email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "form-group p-2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "text-muted",
          children: "Your password "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "password",
        className: "form-control",
        placeholder: "Enter your password",
        values: newpassword,
        onChange: function onChange(event) {
          return setNewPassword(event.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, _this), page !== "login" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form-group p-2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: "text-muted",
            children: "Pick a  question "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
          className: "form-control p-2",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            children: "what is your favourite color ?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            children: "what is your best friend name ?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            children: "what city you were born ?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
          className: "form-text text-muted",
          children: "you can use this to rest your password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form-group p-2",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          className: "form-control",
          placeholder: "write your answer is here",
          values: secret,
          onChange: function onChange(event) {
            return setSecret(event.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }, _this)]
    }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "form-group p-",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        disabled: page === 'login' ? !email || !email : !name || !email || !secret || !password,
        className: "btn btn-primary col-12",
        children: "submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, _this);
};

_c = ForgotPasswordForm;
/* harmony default export */ __webpack_exports__["default"] = (ForgotPasswordForm);

var _c;

$RefreshReg$(_c, "ForgotPasswordForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZm9yZ290LXBhc3N3b3JkLmUxNTZiNmFiMDIwYzg4Y2M4ZDQxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxNQUN2QkMsWUFEdUIsUUFDdkJBLFlBRHVCO0FBQUEsTUFDUkMsS0FEUSxRQUNSQSxLQURRO0FBQUEsTUFDREMsV0FEQyxRQUNEQSxXQURDO0FBQUEsTUFDWUMsTUFEWixRQUNZQSxNQURaO0FBQUEsTUFDcUJDLGNBRHJCLFFBQ3FCQSxjQURyQjtBQUFBLE1BQ3FDQyxTQURyQyxRQUNxQ0EsU0FEckM7QUFBQSxNQUNnREMsUUFEaEQsUUFDZ0RBLFFBRGhEO0FBQUEsTUFDMERDLElBRDFELFFBQzBEQSxJQUQxRDtBQUFBLHNCQUd2QjtBQUFNLFlBQVEsRUFBRVAsWUFBaEI7QUFBQSxlQUNLTyxJQUFJLEtBQUssT0FBVCxpQkFDRztBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBLDhCQUNJO0FBQUEsK0JBQ0k7QUFBTyxtQkFBUyxFQUFDLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBSUk7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixjQUFNLEVBQUVDLElBQTNCO0FBQWlDLGdCQUFRLEVBQUcsa0JBQUFDLEtBQUs7QUFBQSxpQkFBSUMsT0FBTyxDQUFDRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsS0FBZCxDQUFYO0FBQUEsU0FBakQ7QUFBbUYsaUJBQVMsRUFBQyxjQUE3RjtBQUE0RyxtQkFBVyxFQUFDO0FBQXhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGUixlQVdJO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUEsOEJBQ0k7QUFBQSwrQkFDSTtBQUFPLG1CQUFTLEVBQUMsWUFB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b3RQYXNzd29yZEZvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRm9yZ290UGFzc3dvcmRGb3JtID0gKHtcclxuICAgIGhhbmRsZVN1Ym1pdCwgIGVtYWlsLCBuZXdwYXNzd29yZCwgc2VjcmV0LCAgc2V0TmV3UGFzc3dvcmQsIHNldFNlY3JldCwgc2V0RW1haWwsIHBhZ2VcclxufSkgPT4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAge3BhZ2UgIT09IFwibG9naW5cIiAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBwLTJcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPllvdXIgbmFtZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlcz17bmFtZX0gb25DaGFuZ2U9eyhldmVudCA9PiBzZXROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSkpfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbmFtZVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcC0yXCI+XHJcbiAgICAgICAgICAgIDxzbWFsbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+RW1haWwgYWRyZXNzIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZXM9e2VtYWlsfSBvbkNoYW5nZT17KGV2ZW50ID0+IHNldEVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSkpfSBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIiAvPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5Zb3VyIHBhc3N3b3JkIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBwYXNzd29yZFwiIHZhbHVlcz17bmV3cGFzc3dvcmR9IG9uQ2hhbmdlPXsoZXZlbnQgPT4gc2V0TmV3UGFzc3dvcmQoZXZlbnQudGFyZ2V0LnZhbHVlKSl9IC8+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7cGFnZSAhPT0gXCJsb2dpblwiICYmICg8PlxyXG5cclxuICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBwLTJcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlBpY2sgYSAgcXVlc3Rpb24gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPndoYXQgaXMgeW91ciBmYXZvdXJpdGUgY29sb3IgPzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+d2hhdCBpcyB5b3VyIGJlc3QgZnJpZW5kIG5hbWUgPzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+d2hhdCBjaXR5IHlvdSB3ZXJlIGJvcm4gPzwvb3B0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgeW91IGNhbiB1c2UgdGhpcyB0byByZXN0IHlvdXIgcGFzc3dvcmRcclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIndyaXRlIHlvdXIgYW5zd2VyIGlzIGhlcmVcIiB2YWx1ZXM9e3NlY3JldH0gb25DaGFuZ2U9eyhldmVudCA9PiBzZXRTZWNyZXQoZXZlbnQudGFyZ2V0LnZhbHVlKSl9IC8+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz4pfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBwLVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXtwYWdlID09PSAnbG9naW4nID9cclxuICAgICAgICAgICAgICAgICFlbWFpbCB8fCAhZW1haWwgOlxyXG4gICAgICAgICAgICAgICAgIW5hbWUgfHwgIWVtYWlsIHx8ICFzZWNyZXQgfHwgIXBhc3N3b3JkfSBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeSBjb2wtMTInPlxyXG4gICAgICAgICAgICAgICAgc3VibWl0XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZm9ybT5cclxuXHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcmdvdFBhc3N3b3JkRm9ybTsiXSwibmFtZXMiOlsiRm9yZ290UGFzc3dvcmRGb3JtIiwiaGFuZGxlU3VibWl0IiwiZW1haWwiLCJuZXdwYXNzd29yZCIsInNlY3JldCIsInNldE5ld1Bhc3N3b3JkIiwic2V0U2VjcmV0Iiwic2V0RW1haWwiLCJwYWdlIiwibmFtZSIsImV2ZW50Iiwic2V0TmFtZSIsInRhcmdldCIsInZhbHVlIiwicGFzc3dvcmQiXSwic291cmNlUm9vdCI6IiJ9