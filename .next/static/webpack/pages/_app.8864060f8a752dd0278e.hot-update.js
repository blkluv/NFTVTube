self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "E:\\programming\\projects\\Work\\NFTVTube\\pages\\_app.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* pages/_app.js */





function MyApp(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null),
      connectedAccount = _useState[0],
      setConnectedAccount = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      isConnected = _useState2[0],
      setIsConnected = _useState2[1];

  var connectWallect = /*#__PURE__*/function () {
    var _ref2 = (0,E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var accounts;
      return E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("hello");

              if (!(typeof window.ethereum !== "undefined")) {
                _context.next = 15;
                break;
              }

              _context.prev = 2;
              _context.next = 5;
              return window.ethereum.request({
                method: "eth_requestAccounts"
              });

            case 5:
              accounts = _context.sent;

              if (accounts) {
                setConnectedAccount(accounts[0]);
                setIsConnected(true);
              }

              fetchResponse(accounts[0]);
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](2);
              console.error(_context.t0);

            case 13:
              _context.next = 16;
              break;

            case 15:
              alert("Wallet not found");

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 10]]);
    }));

    return function connectWallect() {
      return _ref2.apply(this, arguments);
    };
  }();

  var fetchResponse = /*#__PURE__*/function () {
    var _ref3 = (0,E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(account) {
      var response, signatureId, _yield$axios$get, data, txConfig;

      return E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_7___default().post("https://api-eu1.tatum.io/v3/nft/deploy/", {
                name: "MMC",
                chain: "CELO",
                feeCurrency: "CELO",
                symbol: "MMC",
                signatureId: "b7ad58f7-d826-4db5-8a52-4f492935a7b4"
              }, {
                headers: {
                  "x-api-key": "951cabe04de143b98b75c4d4ed4d2d99"
                }
              });

            case 2:
              response = _context2.sent;
              signatureId = response.data.signatureId;
              _context2.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_7___default().get("https://api-eu1.tatum.io/v3/kms/" + signatureId, {
                headers: {
                  "x-api-key": "951cabe04de143b98b75c4d4ed4d2d99"
                }
              });

            case 6:
              _yield$axios$get = _context2.sent;
              data = _yield$axios$get.data;
              txConfig = JSON.parse(data.serializedTransaction);
              txConfig.from = account;
              txConfig.gasPrice = txConfig.gasPrice ? parseInt(txConfig.gasPrice).toString(16) : undefined;
              console.log(txConfig);
              _context2.t0 = console;
              _context2.next = 15;
              return ethereum.request({
                method: "eth_sendTransaction",
                params: [txConfig]
              });

            case 15:
              _context2.t1 = _context2.sent;

              _context2.t0.log.call(_context2.t0, _context2.t1);

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function fetchResponse(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("nav", {
      className: "px-5 py-10 bg-gray-900",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "flex justify-between min-w-md px-16",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          className: "text-3xl font-bold text-white",
          children: " NFTVTube "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "flex",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "flex mt-4 font-bold ml-8 text-left",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: "/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                className: "mr-4 text-white font-Oswald",
                children: "Home"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: "/stream",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                className: "mr-6 text-white font-Oswald",
                children: "Stream Video"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: "/create-nft",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                className: "mr-6 text-white font-Oswald",
                children: "Create Video"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: "/my-nfts",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                className: "mr-6 text-white font-Oswald",
                children: "My Videos"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: "/dashboard",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                className: "mr-6 text-white",
                children: "Dashboard"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, this), isConnected ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "text-white bg-pink-600 px-5 py-3 rounded-md mx-3",
            children: "Connected"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 15
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "bg-gray-100 px-5 py-3 rounded-md mx-2",
            onClick: connectWallect,
            children: "Connect Wallet"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 5
  }, this);
}

_s(MyApp, "ZE8JHbfqKcF4apG6TyY5R7j6n2g=");

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZVN0YXRlIiwiY29ubmVjdGVkQWNjb3VudCIsInNldENvbm5lY3RlZEFjY291bnQiLCJpc0Nvbm5lY3RlZCIsInNldElzQ29ubmVjdGVkIiwiY29ubmVjdFdhbGxlY3QiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwiYWNjb3VudHMiLCJmZXRjaFJlc3BvbnNlIiwiZXJyb3IiLCJhbGVydCIsImFjY291bnQiLCJheGlvcyIsIm5hbWUiLCJjaGFpbiIsImZlZUN1cnJlbmN5Iiwic3ltYm9sIiwic2lnbmF0dXJlSWQiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJkYXRhIiwidHhDb25maWciLCJKU09OIiwicGFyc2UiLCJzZXJpYWxpemVkVHJhbnNhY3Rpb24iLCJmcm9tIiwiZ2FzUHJpY2UiLCJwYXJzZUludCIsInRvU3RyaW5nIiwidW5kZWZpbmVkIiwicGFyYW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULE9BQXlDO0FBQUE7O0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTs7QUFBQSxrQkFDU0MsK0NBQVEsQ0FBQyxJQUFELENBRGpCO0FBQUEsTUFDaENDLGdCQURnQztBQUFBLE1BQ2RDLG1CQURjOztBQUFBLG1CQUVERiwrQ0FBUSxDQUFDLEtBQUQsQ0FGUDtBQUFBLE1BRWhDRyxXQUZnQztBQUFBLE1BRW5CQyxjQUZtQjs7QUFJdkMsTUFBTUMsY0FBYztBQUFBLGdVQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNyQkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7O0FB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O0FBQUEsWUF0Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwQ0Q7O0dBOUdRRixLOztLQUFBQSxLO0FBZ0hULCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuODg2NDA2MGY4YTc1MmRkMDI3OGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHBhZ2VzL19hcHAuanMgKi9cclxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgY29uc3QgW2Nvbm5lY3RlZEFjY291bnQsIHNldENvbm5lY3RlZEFjY291bnRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2lzQ29ubmVjdGVkLCBzZXRJc0Nvbm5lY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGNvbm5lY3RXYWxsZWN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJoZWxsb1wiKTtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoYWNjb3VudHMpIHtcclxuICAgICAgICAgIHNldENvbm5lY3RlZEFjY291bnQoYWNjb3VudHNbMF0pO1xyXG4gICAgICAgICAgc2V0SXNDb25uZWN0ZWQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmZXRjaFJlc3BvbnNlKGFjY291bnRzWzBdKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIldhbGxldCBub3QgZm91bmRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hSZXNwb25zZSA9IGFzeW5jIChhY2NvdW50KSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgIFwiaHR0cHM6Ly9hcGktZXUxLnRhdHVtLmlvL3YzL25mdC9kZXBsb3kvXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIk1NQ1wiLFxyXG4gICAgICAgIGNoYWluOiBcIkNFTE9cIixcclxuICAgICAgICBmZWVDdXJyZW5jeTogXCJDRUxPXCIsXHJcbiAgICAgICAgc3ltYm9sOiBcIk1NQ1wiLFxyXG4gICAgICAgIHNpZ25hdHVyZUlkOiBcImI3YWQ1OGY3LWQ4MjYtNGRiNS04YTUyLTRmNDkyOTM1YTdiNFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJ4LWFwaS1rZXlcIjogXCI5NTFjYWJlMDRkZTE0M2I5OGI3NWM0ZDRlZDRkMmQ5OVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgeyBzaWduYXR1cmVJZCB9ID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgXCJodHRwczovL2FwaS1ldTEudGF0dW0uaW8vdjMva21zL1wiICsgc2lnbmF0dXJlSWQsXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIngtYXBpLWtleVwiOiBcIjk1MWNhYmUwNGRlMTQzYjk4Yjc1YzRkNGVkNGQyZDk5XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB0eENvbmZpZyA9IEpTT04ucGFyc2UoZGF0YS5zZXJpYWxpemVkVHJhbnNhY3Rpb24pO1xyXG4gICAgdHhDb25maWcuZnJvbSA9IGFjY291bnQ7XHJcbiAgICB0eENvbmZpZy5nYXNQcmljZSA9IHR4Q29uZmlnLmdhc1ByaWNlXHJcbiAgICAgID8gcGFyc2VJbnQodHhDb25maWcuZ2FzUHJpY2UpLnRvU3RyaW5nKDE2KVxyXG4gICAgICA6IHVuZGVmaW5lZDtcclxuICAgIGNvbnNvbGUubG9nKHR4Q29uZmlnKTtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHtcclxuICAgICAgICBtZXRob2Q6IFwiZXRoX3NlbmRUcmFuc2FjdGlvblwiLFxyXG4gICAgICAgIHBhcmFtczogW3R4Q29uZmlnXSxcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwicHgtNSBweS0xMCBiZy1ncmF5LTkwMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbWluLXctbWQgcHgtMTZcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+IE5GVFZUdWJlIDwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtNCBmb250LWJvbGQgbWwtOCB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibXItNCB0ZXh0LXdoaXRlIGZvbnQtT3N3YWxkXCI+SG9tZTwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zdHJlYW1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1yLTYgdGV4dC13aGl0ZSBmb250LU9zd2FsZFwiPlN0cmVhbSBWaWRlbzwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jcmVhdGUtbmZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtci02IHRleHQtd2hpdGUgZm9udC1Pc3dhbGRcIj5DcmVhdGUgVmlkZW88L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbXktbmZ0c1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibXItNiB0ZXh0LXdoaXRlIGZvbnQtT3N3YWxkXCI+TXkgVmlkZW9zPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibXItNiB0ZXh0LXdoaXRlXCI+RGFzaGJvYXJkPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7aXNDb25uZWN0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLXBpbmstNjAwIHB4LTUgcHktMyByb3VuZGVkLW1kIG14LTNcIj5cclxuICAgICAgICAgICAgICAgIENvbm5lY3RlZFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIHB4LTUgcHktMyByb3VuZGVkLW1kIG14LTJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y29ubmVjdFdhbGxlY3R9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ29ubmVjdCBXYWxsZXRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=