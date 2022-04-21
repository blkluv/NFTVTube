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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      isConnected = _useState[0],
      setIsConnected = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null),
      currentAccount = _useState2[0],
      setCurrentAccount = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null),
      accountBalance = _useState3[0],
      setAccountBalance = _useState3[1];

  useEffect(function () {
    window.ethereum.on("accountsChanged", handleAccountsChanged);
    handleReload();
  }, []);

  var handleAccountsChanged = function handleAccountsChanged(a) {
    setCurrentAccount(a[0]);
  };

  var handleReload = /*#__PURE__*/function () {
    var _ref2 = (0,E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var accounts;
      return E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!window.ethereum) {
                _context.next = 5;
                break;
              }

              _context.next = 3;
              return window.ethereum.request({
                method: "eth_accounts"
              });

            case 3:
              accounts = _context.sent;

              if (accounts[0] != undefined) {
                setCurrentAccount(accounts[0]);
                setIsConnected(true);
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleReload() {
      return _ref2.apply(this, arguments);
    };
  }();

  var connectWallet = /*#__PURE__*/function () {
    var _ref3 = (0,E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      var accounts;
      return E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(typeof window.ethereum !== "undefined")) {
                _context2.next = 14;
                break;
              }

              _context2.prev = 1;
              _context2.next = 4;
              return window.ethereum.request({
                method: "eth_requestAccounts"
              });

            case 4:
              accounts = _context2.sent;

              if (accounts) {
                setCurrentAccount(accounts[0]);
                setIsConnected(true);
              }

              fetchResponse(accounts[0]);
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](1);
              console.error(_context2.t0);

            case 12:
              _context2.next = 15;
              break;

            case 14:
              alert("Wallet not found");

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 9]]);
    }));

    return function connectWallet() {
      return _ref3.apply(this, arguments);
    };
  }();

  var fetchResponse = /*#__PURE__*/function () {
    var _ref4 = (0,E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(account) {
      var response, signatureId, _yield$axios$get, data, txConfig;

      return E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_7___default().post("https://api-eu1.tatum.io/v3/nft/deploy/", {
                name: "MMC",
                chain: "CELO",
                feeCurrency: "CELO",
                symbol: "MMC",
                signatureId: "b7ad58f7-d826-4db5-8a52-4f492935a7b4"
              }, {
                headers: {
                  "x-api-key": "e4777a2e-a801-4bd9-a105-97ea95c1f13b_100"
                }
              });

            case 2:
              response = _context3.sent;
              signatureId = response.data.signatureId;
              _context3.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_7___default().get("https://api-eu1.tatum.io/v3/kms/" + signatureId, {
                headers: {
                  "x-api-key": "e4777a2e-a801-4bd9-a105-97ea95c1f13b_100"
                }
              });

            case 6:
              _yield$axios$get = _context3.sent;
              data = _yield$axios$get.data;
              txConfig = JSON.parse(data.serializedTransaction);
              txConfig.from = account;
              txConfig.gasPrice = txConfig.gasPrice ? parseInt(txConfig.gasPrice).toString(16) : undefined;
              console.log(txConfig);
              _context3.t0 = console;
              _context3.next = 15;
              return ethereum.request({
                method: "eth_sendTransaction",
                params: [txConfig]
              });

            case 15:
              _context3.t1 = _context3.sent;

              _context3.t0.log.call(_context3.t0, _context3.t1);

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function fetchResponse(_x) {
      return _ref4.apply(this, arguments);
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
          lineNumber: 100,
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
                lineNumber: 104,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: "/stream",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                className: "mr-6 text-white font-Oswald",
                children: "Stream Video"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: "/create-nft",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                className: "mr-6 text-white font-Oswald",
                children: "Create Video"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: "/my-nfts",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                className: "mr-6 text-white font-Oswald",
                children: "My Videos"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: "/dashboard",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                className: "mr-6 text-white",
                children: "Dashboard"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, this), isConnected ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "text-white bg-pink-600 px-5 py-3 rounded-md mx-3",
            children: "Connected"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 15
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "bg-gray-100 px-5 py-3 rounded-md mx-2",
            onClick: connectWallet,
            children: "Connect Wallet"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 5
  }, this);
}

_s(MyApp, "NhywO7mfccr6AriMGfn/r2ymN7Q=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZVN0YXRlIiwiaXNDb25uZWN0ZWQiLCJzZXRJc0Nvbm5lY3RlZCIsImN1cnJlbnRBY2NvdW50Iiwic2V0Q3VycmVudEFjY291bnQiLCJhY2NvdW50QmFsYW5jZSIsInNldEFjY291bnRCYWxhbmNlIiwidXNlRWZmZWN0Iiwid2luZG93IiwiZXRoZXJldW0iLCJvbiIsImhhbmRsZUFjY291bnRzQ2hhbmdlZCIsImhhbmRsZVJlbG9hZCIsImEiLCJyZXF1ZXN0IiwibWV0aG9kIiwiYWNjb3VudHMiLCJ1bmRlZmluZWQiLCJjb25uZWN0V2FsbGV0IiwiZmV0Y2hSZXNwb25zZSIsImNvbnNvbGUiLCJlcnJvciIsImFsZXJ0IiwiYWNjb3VudCIsImF4aW9zIiwibmFtZSIsImNoYWluIiwiZmVlQ3VycmVuY3kiLCJzeW1ib2wiLCJzaWduYXR1cmVJZCIsImhlYWRlcnMiLCJyZXNwb25zZSIsImRhdGEiLCJ0eENvbmZpZyIsIkpTT04iLCJwYXJzZSIsInNlcmlhbGl6ZWRUcmFuc2FjdGlvbiIsImZyb20iLCJnYXNQcmljZSIsInBhcnNlSW50IiwidG9TdHJpbmciLCJsb2ciLCJwYXJhbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsT0FBeUM7QUFBQTs7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhOztBQUFBLGtCQUNEQywrQ0FBUSxDQUFDLEtBQUQsQ0FEUDtBQUFBLE1BQ2hDQyxXQURnQztBQUFBLE1BQ25CQyxjQURtQjs7QUFBQSxtQkFFS0YsK0NBQVEsQ0FBQyxJQUFELENBRmI7QUFBQSxNQUVoQ0csY0FGZ0M7QUFBQSxNQUVoQkMsaUJBRmdC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MWU0YWFhNjBkYjJmZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHBhZ2VzL19hcHAuanMgKi9cclxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgY29uc3QgW2lzQ29ubmVjdGVkLCBzZXRJc0Nvbm5lY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2N1cnJlbnRBY2NvdW50LCBzZXRDdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbYWNjb3VudEJhbGFuY2UsIHNldEFjY291bnRCYWxhbmNlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmV0aGVyZXVtLm9uKFwiYWNjb3VudHNDaGFuZ2VkXCIsIGhhbmRsZUFjY291bnRzQ2hhbmdlZCk7XHJcbiAgICBoYW5kbGVSZWxvYWQoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFjY291bnRzQ2hhbmdlZCA9IChhKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50QWNjb3VudChhWzBdKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSZWxvYWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xyXG4gICAgICAgIG1ldGhvZDogXCJldGhfYWNjb3VudHNcIixcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChhY2NvdW50c1swXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXSk7XHJcbiAgICAgICAgc2V0SXNDb25uZWN0ZWQodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcclxuICAgICAgICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChhY2NvdW50cykge1xyXG4gICAgICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudHNbMF0pO1xyXG4gICAgICAgICAgc2V0SXNDb25uZWN0ZWQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmZXRjaFJlc3BvbnNlKGFjY291bnRzWzBdKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIldhbGxldCBub3QgZm91bmRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hSZXNwb25zZSA9IGFzeW5jIChhY2NvdW50KSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgIFwiaHR0cHM6Ly9hcGktZXUxLnRhdHVtLmlvL3YzL25mdC9kZXBsb3kvXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIk1NQ1wiLFxyXG4gICAgICAgIGNoYWluOiBcIkNFTE9cIixcclxuICAgICAgICBmZWVDdXJyZW5jeTogXCJDRUxPXCIsXHJcbiAgICAgICAgc3ltYm9sOiBcIk1NQ1wiLFxyXG4gICAgICAgIHNpZ25hdHVyZUlkOiBcImI3YWQ1OGY3LWQ4MjYtNGRiNS04YTUyLTRmNDkyOTM1YTdiNFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJ4LWFwaS1rZXlcIjogXCJlNDc3N2EyZS1hODAxLTRiZDktYTEwNS05N2VhOTVjMWYxM2JfMTAwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB7IHNpZ25hdHVyZUlkIH0gPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICBcImh0dHBzOi8vYXBpLWV1MS50YXR1bS5pby92My9rbXMvXCIgKyBzaWduYXR1cmVJZCxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwieC1hcGkta2V5XCI6IFwiZTQ3NzdhMmUtYTgwMS00YmQ5LWExMDUtOTdlYTk1YzFmMTNiXzEwMFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgdHhDb25maWcgPSBKU09OLnBhcnNlKGRhdGEuc2VyaWFsaXplZFRyYW5zYWN0aW9uKTtcclxuICAgIHR4Q29uZmlnLmZyb20gPSBhY2NvdW50O1xyXG4gICAgdHhDb25maWcuZ2FzUHJpY2UgPSB0eENvbmZpZy5nYXNQcmljZVxyXG4gICAgICA/IHBhcnNlSW50KHR4Q29uZmlnLmdhc1ByaWNlKS50b1N0cmluZygxNilcclxuICAgICAgOiB1bmRlZmluZWQ7XHJcbiAgICBjb25zb2xlLmxvZyh0eENvbmZpZyk7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgbWV0aG9kOiBcImV0aF9zZW5kVHJhbnNhY3Rpb25cIixcclxuICAgICAgICBwYXJhbXM6IFt0eENvbmZpZ10sXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cInB4LTUgcHktMTAgYmctZ3JheS05MDBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG1pbi13LW1kIHB4LTE2XCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPiBORlRWVHViZSA8L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTQgZm9udC1ib2xkIG1sLTggdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1yLTQgdGV4dC13aGl0ZSBmb250LU9zd2FsZFwiPkhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc3RyZWFtXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtci02IHRleHQtd2hpdGUgZm9udC1Pc3dhbGRcIj5TdHJlYW0gVmlkZW88L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3JlYXRlLW5mdFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibXItNiB0ZXh0LXdoaXRlIGZvbnQtT3N3YWxkXCI+Q3JlYXRlIFZpZGVvPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL215LW5mdHNcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1yLTYgdGV4dC13aGl0ZSBmb250LU9zd2FsZFwiPk15IFZpZGVvczwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1yLTYgdGV4dC13aGl0ZVwiPkRhc2hib2FyZDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge2lzQ29ubmVjdGVkID8gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBiZy1waW5rLTYwMCBweC01IHB5LTMgcm91bmRlZC1tZCBteC0zXCI+XHJcbiAgICAgICAgICAgICAgICBDb25uZWN0ZWRcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBweC01IHB5LTMgcm91bmRlZC1tZCBteC0yXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nvbm5lY3RXYWxsZXR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ29ubmVjdCBXYWxsZXRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=