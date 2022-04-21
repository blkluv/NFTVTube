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

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("Null"),
      currentAccount = _useState2[0],
      setCurrentAccount = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null),
      accountBalance = _useState3[0],
      setAccountBalance = _useState3[1];

  useEffect(function () {
    window.ethereum.on("accountsChanged", handleAccountsChanged);
    handleReload();
  }, []);
  useEffect(function () {
    updateETHBalance();
  }, [currentAccount]);

  var handleAccountsChanged = function handleAccountsChanged(a) {
    setCurrentAccount(a[0]);
  };

  var connectWallect = /*#__PURE__*/function () {
    var _ref2 = (0,E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var accounts;
      return E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(typeof window.ethereum !== "undefined")) {
                _context.next = 14;
                break;
              }

              _context.prev = 1;
              _context.next = 4;
              return window.ethereum.request({
                method: "eth_requestAccounts"
              });

            case 4:
              accounts = _context.sent;

              if (accounts) {
                setCurrentAccount(accounts[0]);
                setIsConnected(true);
              }

              fetchResponse(accounts[0]);
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              console.error(_context.t0);

            case 12:
              _context.next = 15;
              break;

            case 14:
              alert("Wallet not found");

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
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
                  "x-api-key": "e4777a2e-a801-4bd9-a105-97ea95c1f13b_100"
                }
              });

            case 2:
              response = _context2.sent;
              signatureId = response.data.signatureId;
              _context2.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_7___default().get("https://api-eu1.tatum.io/v3/kms/" + signatureId, {
                headers: {
                  "x-api-key": "e4777a2e-a801-4bd9-a105-97ea95c1f13b_100"
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
          lineNumber: 94,
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
                lineNumber: 98,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: "/stream",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                className: "mr-6 text-white font-Oswald",
                children: "Stream Video"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: "/create-nft",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                className: "mr-6 text-white font-Oswald",
                children: "Create Video"
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
              href: "/my-nfts",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                className: "mr-6 text-white font-Oswald",
                children: "My Videos"
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
              href: "/dashboard",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                className: "mr-6 text-white",
                children: "Dashboard"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, this), isConnected ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "text-white bg-pink-600 px-5 py-3 rounded-md mx-3",
            children: "Connected"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 15
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "bg-gray-100 px-5 py-3 rounded-md mx-2",
            onClick: connectWallect,
            children: "Connect Wallet"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 5
  }, this);
}

_s(MyApp, "dSKDt9IS9I89h7KJah9pi/G2EBI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZVN0YXRlIiwiaXNDb25uZWN0ZWQiLCJzZXRJc0Nvbm5lY3RlZCIsImN1cnJlbnRBY2NvdW50Iiwic2V0Q3VycmVudEFjY291bnQiLCJhY2NvdW50QmFsYW5jZSIsInNldEFjY291bnRCYWxhbmNlIiwidXNlRWZmZWN0Iiwid2luZG93IiwiZXRoZXJldW0iLCJvbiIsImhhbmRsZUFjY291bnRzQ2hhbmdlZCIsImhhbmRsZVJlbG9hZCIsInVwZGF0ZUVUSEJhbGFuY2UiLCJhIiwiY29ubmVjdFdhbGxlY3QiLCJyZXF1ZXN0IiwibWV0aG9kIiwiYWNjb3VudHMiLCJmZXRjaFJlc3BvbnNlIiwiY29uc29sZSIsImVycm9yIiwiYWxlcnQiLCJhY2NvdW50IiwiYXhpb3MiLCJuYW1lIiwiY2hhaW4iLCJmZWVDdXJyZW5jeSIsInN5bWJvbCIsInNpZ25hdHVyZUlkIiwiaGVhZGVycyIsInJlc3BvbnNlIiwiZGF0YSIsInR4Q29uZmlnIiwiSlNPTiIsInBhcnNlIiwic2VyaWFsaXplZFRyYW5zYWN0aW9uIiwiZnJvbSIsImdhc1ByaWNlIiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsInVuZGVmaW5lZCIsImxvZyIsInBhcmFtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxPQUF5QztBQUFBOztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7O0FBQUEsa0JBQ0RDLCtDQUFRLENBQUMsS0FBRCxDQURQO0FBQUEsTUFDaENDLFdBRGdDO0FBQUEsTUFDbkJDLGNBRG1COztBQUFBLG1CQUVLRiwrQ0FBUSxDQUFDLE1BQUQsQ0FGYjtBQUFBLE1BRWhDRyxjQUZn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OERBQUMsa0RBQUQ7QUFBTSxrQkFBSSxFQUFDLFlBQVg7QUFBQSxxQ0FDRTtBQUFHLHlCQUFTLEVBQUMsaUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQW1CR2xCLFdBQVcsZ0JBQ1Y7QUFBSyxxQkFBUyxFQUFDLGtEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURVLGdCQUtWO0FBQ0UscUJBQVMsRUFBQyx1Q0FEWjtBQUVFLG1CQUFPLEVBQUVjLGNBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBeEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFzQ0UsOERBQUMsU0FBRCxvQkFBZWhCLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBDRDs7R0E3SFFGLEs7O0tBQUFBLEs7QUErSFQsK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lZTU3ZGMxMjE3MjNmYjZhOGZjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogcGFnZXMvX2FwcC5qcyAqL1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICBjb25zdCBbaXNDb25uZWN0ZWQsIHNldElzQ29ubmVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY3VycmVudEFjY291bnQsIHNldEN1cnJlbnRBY2NvdW50XSA9IHVzZVN0YXRlKFwiTnVsbFwiKTtcclxuICBjb25zdCBbYWNjb3VudEJhbGFuY2UsIHNldEFjY291bnRCYWxhbmNlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmV0aGVyZXVtLm9uKFwiYWNjb3VudHNDaGFuZ2VkXCIsIGhhbmRsZUFjY291bnRzQ2hhbmdlZCk7XHJcbiAgICBoYW5kbGVSZWxvYWQoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB1cGRhdGVFVEhCYWxhbmNlKCk7XHJcbiAgfSwgW2N1cnJlbnRBY2NvdW50XSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFjY291bnRzQ2hhbmdlZCA9IChhKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50QWNjb3VudChhWzBdKTtcclxuICB9O1xyXG5cclxuICBcclxuXHJcbiAgY29uc3QgY29ubmVjdFdhbGxlY3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIixcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGFjY291bnRzKSB7XHJcbiAgICAgICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXSk7XHJcbiAgICAgICAgICBzZXRJc0Nvbm5lY3RlZCh0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZldGNoUmVzcG9uc2UoYWNjb3VudHNbMF0pO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KFwiV2FsbGV0IG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaFJlc3BvbnNlID0gYXN5bmMgKGFjY291bnQpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgXCJodHRwczovL2FwaS1ldTEudGF0dW0uaW8vdjMvbmZ0L2RlcGxveS9cIixcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiTU1DXCIsXHJcbiAgICAgICAgY2hhaW46IFwiQ0VMT1wiLFxyXG4gICAgICAgIGZlZUN1cnJlbmN5OiBcIkNFTE9cIixcclxuICAgICAgICBzeW1ib2w6IFwiTU1DXCIsXHJcbiAgICAgICAgc2lnbmF0dXJlSWQ6IFwiYjdhZDU4ZjctZDgyNi00ZGI1LThhNTItNGY0OTI5MzVhN2I0XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIngtYXBpLWtleVwiOiBcImU0Nzc3YTJlLWE4MDEtNGJkOS1hMTA1LTk3ZWE5NWMxZjEzYl8xMDBcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHsgc2lnbmF0dXJlSWQgfSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgIFwiaHR0cHM6Ly9hcGktZXUxLnRhdHVtLmlvL3YzL2ttcy9cIiArIHNpZ25hdHVyZUlkLFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJ4LWFwaS1rZXlcIjogXCJlNDc3N2EyZS1hODAxLTRiZDktYTEwNS05N2VhOTVjMWYxM2JfMTAwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB0eENvbmZpZyA9IEpTT04ucGFyc2UoZGF0YS5zZXJpYWxpemVkVHJhbnNhY3Rpb24pO1xyXG4gICAgdHhDb25maWcuZnJvbSA9IGFjY291bnQ7XHJcbiAgICB0eENvbmZpZy5nYXNQcmljZSA9IHR4Q29uZmlnLmdhc1ByaWNlXHJcbiAgICAgID8gcGFyc2VJbnQodHhDb25maWcuZ2FzUHJpY2UpLnRvU3RyaW5nKDE2KVxyXG4gICAgICA6IHVuZGVmaW5lZDtcclxuICAgIGNvbnNvbGUubG9nKHR4Q29uZmlnKTtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHtcclxuICAgICAgICBtZXRob2Q6IFwiZXRoX3NlbmRUcmFuc2FjdGlvblwiLFxyXG4gICAgICAgIHBhcmFtczogW3R4Q29uZmlnXSxcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwicHgtNSBweS0xMCBiZy1ncmF5LTkwMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbWluLXctbWQgcHgtMTZcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+IE5GVFZUdWJlIDwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtNCBmb250LWJvbGQgbWwtOCB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibXItNCB0ZXh0LXdoaXRlIGZvbnQtT3N3YWxkXCI+SG9tZTwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zdHJlYW1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1yLTYgdGV4dC13aGl0ZSBmb250LU9zd2FsZFwiPlN0cmVhbSBWaWRlbzwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jcmVhdGUtbmZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtci02IHRleHQtd2hpdGUgZm9udC1Pc3dhbGRcIj5DcmVhdGUgVmlkZW88L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbXktbmZ0c1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibXItNiB0ZXh0LXdoaXRlIGZvbnQtT3N3YWxkXCI+TXkgVmlkZW9zPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibXItNiB0ZXh0LXdoaXRlXCI+RGFzaGJvYXJkPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7aXNDb25uZWN0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLXBpbmstNjAwIHB4LTUgcHktMyByb3VuZGVkLW1kIG14LTNcIj5cclxuICAgICAgICAgICAgICAgIENvbm5lY3RlZFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIHB4LTUgcHktMyByb3VuZGVkLW1kIG14LTJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y29ubmVjdFdhbGxlY3R9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ29ubmVjdCBXYWxsZXRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=