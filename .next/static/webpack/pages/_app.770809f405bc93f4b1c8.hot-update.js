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

  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    window.ethereum.on("accountsChanged", handleAccountsChanged);
    handleReload();
  }, []);

  var handleAccountsChanged = function handleAccountsChanged(a) {
    setCurrentAccount(a[0]);
    console.log("accounts changed");
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
          lineNumber: 101,
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
                lineNumber: 105,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: "/stream",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                className: "mr-6 text-white font-Oswald",
                children: "Stream Video"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: "/create-nft",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                className: "mr-6 text-white font-Oswald",
                children: "Create Video"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: "/my-nfts",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                className: "mr-6 text-white font-Oswald",
                children: "My Videos"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: "/dashboard",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                className: "mr-6 text-white",
                children: "Dashboard"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, this), isConnected ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "text-white bg-pink-600 px-5 py-3 rounded-md mx-3",
            children: "Connected"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 15
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "bg-gray-100 px-5 py-3 rounded-md mx-2",
            onClick: connectWallet,
            children: "Connect Wallet"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 98,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZVN0YXRlIiwiaXNDb25uZWN0ZWQiLCJzZXRJc0Nvbm5lY3RlZCIsImN1cnJlbnRBY2NvdW50Iiwic2V0Q3VycmVudEFjY291bnQiLCJhY2NvdW50QmFsYW5jZSIsInNldEFjY291bnRCYWxhbmNlIiwidXNlRWZmZWN0Iiwid2luZG93IiwiZXRoZXJldW0iLCJvbiIsImhhbmRsZUFjY291bnRzQ2hhbmdlZCIsImhhbmRsZVJlbG9hZCIsImEiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdCIsIm1ldGhvZCIsImFjY291bnRzIiwidW5kZWZpbmVkIiwiY29ubmVjdFdhbGxldCIsImZldGNoUmVzcG9uc2UiLCJlcnJvciIsImFsZXJ0IiwiYWNjb3VudCIsImF4aW9zIiwibmFtZSIsImNoYWluIiwiZmVlQ3VycmVuY3kiLCJzeW1ib2wiLCJzaWduYXR1cmVJZCIsImhlYWRlcnMiLCJyZXNwb25zZSIsImRhdGEiLCJ0eENvbmZpZyIsIkpTT04iLCJwYXJzZSIsInNlcmlhbGl6ZWRUcmFuc2FjdGlvbiIsImZyb20iLCJnYXNQcmljZSIsInBhcnNlSW50IiwidG9TdHJpbmciLCJwYXJhbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsT0FBeUM7QUFBQTs7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhOztBQUFBLGtCQUNEQywrQ0FBUSxDQUFDLEtBQUQsQ0FEUDtBQUFBLE1BQ2hDQyxXQURnQztBQUFBLE1BQ25CQyxjQURtQjs7QUFBQSxtQkFFS0YsK0NBQVEsQ0FBQyxJQUFELENBRmI7QUFBQSxNQUVoQ0csY0FGZ0M7QUFBQSxNQUVoQkMsaUJBRmdC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bGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjc3MDgwOWY0MDViYzkzZjRiMWM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBwYWdlcy9fYXBwLmpzICovXHJcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICBjb25zdCBbaXNDb25uZWN0ZWQsIHNldElzQ29ubmVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY3VycmVudEFjY291bnQsIHNldEN1cnJlbnRBY2NvdW50XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFthY2NvdW50QmFsYW5jZSwgc2V0QWNjb3VudEJhbGFuY2VdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuZXRoZXJldW0ub24oXCJhY2NvdW50c0NoYW5nZWRcIiwgaGFuZGxlQWNjb3VudHNDaGFuZ2VkKTtcclxuICAgIGhhbmRsZVJlbG9hZCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWNjb3VudHNDaGFuZ2VkID0gKGEpID0+IHtcclxuICAgIHNldEN1cnJlbnRBY2NvdW50KGFbMF0pO1xyXG4gICAgY29uc29sZS5sb2coXCJhY2NvdW50cyBjaGFuZ2VkXCIpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVsb2FkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xyXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcclxuICAgICAgICBtZXRob2Q6IFwiZXRoX2FjY291bnRzXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoYWNjb3VudHNbMF0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudHNbMF0pO1xyXG4gICAgICAgIHNldElzQ29ubmVjdGVkKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoYWNjb3VudHMpIHtcclxuICAgICAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKTtcclxuICAgICAgICAgIHNldElzQ29ubmVjdGVkKHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmV0Y2hSZXNwb25zZShhY2NvdW50c1swXSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoXCJXYWxsZXQgbm90IGZvdW5kXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoUmVzcG9uc2UgPSBhc3luYyAoYWNjb3VudCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICBcImh0dHBzOi8vYXBpLWV1MS50YXR1bS5pby92My9uZnQvZGVwbG95L1wiLFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJNTUNcIixcclxuICAgICAgICBjaGFpbjogXCJDRUxPXCIsXHJcbiAgICAgICAgZmVlQ3VycmVuY3k6IFwiQ0VMT1wiLFxyXG4gICAgICAgIHN5bWJvbDogXCJNTUNcIixcclxuICAgICAgICBzaWduYXR1cmVJZDogXCJiN2FkNThmNy1kODI2LTRkYjUtOGE1Mi00ZjQ5MjkzNWE3YjRcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwieC1hcGkta2V5XCI6IFwiZTQ3NzdhMmUtYTgwMS00YmQ5LWExMDUtOTdlYTk1YzFmMTNiXzEwMFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgeyBzaWduYXR1cmVJZCB9ID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgXCJodHRwczovL2FwaS1ldTEudGF0dW0uaW8vdjMva21zL1wiICsgc2lnbmF0dXJlSWQsXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIngtYXBpLWtleVwiOiBcImU0Nzc3YTJlLWE4MDEtNGJkOS1hMTA1LTk3ZWE5NWMxZjEzYl8xMDBcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHR4Q29uZmlnID0gSlNPTi5wYXJzZShkYXRhLnNlcmlhbGl6ZWRUcmFuc2FjdGlvbik7XHJcbiAgICB0eENvbmZpZy5mcm9tID0gYWNjb3VudDtcclxuICAgIHR4Q29uZmlnLmdhc1ByaWNlID0gdHhDb25maWcuZ2FzUHJpY2VcclxuICAgICAgPyBwYXJzZUludCh0eENvbmZpZy5nYXNQcmljZSkudG9TdHJpbmcoMTYpXHJcbiAgICAgIDogdW5kZWZpbmVkO1xyXG4gICAgY29uc29sZS5sb2codHhDb25maWcpO1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIGF3YWl0IGV0aGVyZXVtLnJlcXVlc3Qoe1xyXG4gICAgICAgIG1ldGhvZDogXCJldGhfc2VuZFRyYW5zYWN0aW9uXCIsXHJcbiAgICAgICAgcGFyYW1zOiBbdHhDb25maWddLFxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJweC01IHB5LTEwIGJnLWdyYXktOTAwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtaW4tdy1tZCBweC0xNlwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtd2hpdGVcIj4gTkZUVlR1YmUgPC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC00IGZvbnQtYm9sZCBtbC04IHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtci00IHRleHQtd2hpdGUgZm9udC1Pc3dhbGRcIj5Ib21lPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3N0cmVhbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibXItNiB0ZXh0LXdoaXRlIGZvbnQtT3N3YWxkXCI+U3RyZWFtIFZpZGVvPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NyZWF0ZS1uZnRcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1yLTYgdGV4dC13aGl0ZSBmb250LU9zd2FsZFwiPkNyZWF0ZSBWaWRlbzwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9teS1uZnRzXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtci02IHRleHQtd2hpdGUgZm9udC1Pc3dhbGRcIj5NeSBWaWRlb3M8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtci02IHRleHQtd2hpdGVcIj5EYXNoYm9hcmQ8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHtpc0Nvbm5lY3RlZCA/IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctcGluay02MDAgcHgtNSBweS0zIHJvdW5kZWQtbWQgbXgtM1wiPlxyXG4gICAgICAgICAgICAgICAgQ29ubmVjdGVkXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS0xMDAgcHgtNSBweS0zIHJvdW5kZWQtbWQgbXgtMlwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb25uZWN0V2FsbGV0fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENvbm5lY3QgV2FsbGV0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9