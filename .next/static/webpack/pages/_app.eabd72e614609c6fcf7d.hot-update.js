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
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, this)
  }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZVN0YXRlIiwiY29ubmVjdGVkQWNjb3VudCIsInNldENvbm5lY3RlZEFjY291bnQiLCJpc0Nvbm5lY3RlZCIsInNldElzQ29ubmVjdGVkIiwiY29ubmVjdFdhbGxlY3QiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwiYWNjb3VudHMiLCJmZXRjaFJlc3BvbnNlIiwiZXJyb3IiLCJhbGVydCIsImFjY291bnQiLCJheGlvcyIsIm5hbWUiLCJjaGFpbiIsImZlZUN1cnJlbmN5Iiwic3ltYm9sIiwic2lnbmF0dXJlSWQiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJkYXRhIiwidHhDb25maWciLCJKU09OIiwicGFyc2UiLCJzZXJpYWxpemVkVHJhbnNhY3Rpb24iLCJmcm9tIiwiZ2FzUHJpY2UiLCJwYXJzZUludCIsInRvU3RyaW5nIiwidW5kZWZpbmVkIiwicGFyYW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULE9BQXlDO0FBQUE7O0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTs7QUFBQSxrQkFDU0MsK0NBQVEsQ0FBQyxJQUFELENBRGpCO0FBQUEsTUFDaENDLGdCQURnQztBQUFBLE1BQ2RDLG1CQURjOztBQUFBLG1CQUVERiwrQ0FBUSxDQUFDLEtBQUQsQ0FGUDtBQUFBLE1BRWhDRyxXQUZnQztBQUFBLE1BRW5CQyxjQUZtQjs7QUFJdkMsTUFBTUMsY0FBYztBQUFBLGdVQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNyQkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7O0FBRHFCLG9CQUVqQixPQUFPQyxNQUFNLENBQUNDLFFBQWQsS0FBMkIsV0FGVjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEscUJBSU1ELE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0I7QUFDN0NDLHNCQUFNLEVBQUU7QUFEcUMsZUFBeEIsQ0FKTjs7QUFBQTtBQUlYQyxzQkFKVzs7QUFRakIsa0JBQUlBLFFBQUosRUFBYztBQUNaVixtQ0FBbUIsQ0FBQ1UsUUFBUSxDQUFDLENBQUQsQ0FBVCxDQUFuQjtBQUNBUiw4QkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNEOztBQUVEUywyQkFBYSxDQUFDRCxRQUFRLENBQUMsQ0FBRCxDQUFULENBQWI7QUFiaUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFlakJOLHFCQUFPLENBQUNRLEtBQVI7O0FBZmlCO0FBQUE7QUFBQTs7QUFBQTtBQWtCbkJDLG1CQUFLLENBQUMsa0JBQUQsQ0FBTDs7QUFsQm1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWRWLGNBQWM7QUFBQTtBQUFBO0FBQUEsS0FBcEI7O0FBc0JBLE1BQU1RLGFBQWE7QUFBQSxnVUFBRyxrQkFBT0csT0FBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDR0MsaURBQUEsQ0FDckIseUNBRHFCLEVBRXJCO0FBQ0VDLG9CQUFJLEVBQUUsS0FEUjtBQUVFQyxxQkFBSyxFQUFFLE1BRlQ7QUFHRUMsMkJBQVcsRUFBRSxNQUhmO0FBSUVDLHNCQUFNLEVBQUUsS0FKVjtBQUtFQywyQkFBVyxFQUFFO0FBTGYsZUFGcUIsRUFTckI7QUFDRUMsdUJBQU8sRUFBRTtBQUNQLCtCQUFhO0FBRE47QUFEWCxlQVRxQixDQURIOztBQUFBO0FBQ2RDLHNCQURjO0FBaUJaRix5QkFqQlksR0FpQklFLFFBQVEsQ0FBQ0MsSUFqQmIsQ0FpQlpILFdBakJZO0FBQUE7QUFBQSxxQkFtQkdMLGdEQUFBLENBQ3JCLHFDQUFxQ0ssV0FEaEIsRUFFckI7QUFDRUMsdUJBQU8sRUFBRTtBQUNQLCtCQUFhO0FBRE47QUFEWCxlQUZxQixDQW5CSDs7QUFBQTtBQUFBO0FBbUJaRSxrQkFuQlksb0JBbUJaQSxJQW5CWTtBQTRCZEMsc0JBNUJjLEdBNEJIQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsSUFBSSxDQUFDSSxxQkFBaEIsQ0E1Qkc7QUE2QnBCSCxzQkFBUSxDQUFDSSxJQUFULEdBQWdCZCxPQUFoQjtBQUNBVSxzQkFBUSxDQUFDSyxRQUFULEdBQW9CTCxRQUFRLENBQUNLLFFBQVQsR0FDaEJDLFFBQVEsQ0FBQ04sUUFBUSxDQUFDSyxRQUFWLENBQVIsQ0FBNEJFLFFBQTVCLENBQXFDLEVBQXJDLENBRGdCLEdBRWhCQyxTQUZKO0FBR0E1QixxQkFBTyxDQUFDQyxHQUFSLENBQVltQixRQUFaO0FBakNvQiw2QkFrQ3BCcEIsT0FsQ29CO0FBQUE7QUFBQSxxQkFtQ1pHLFFBQVEsQ0FBQ0MsT0FBVCxDQUFpQjtBQUNyQkMsc0JBQU0sRUFBRSxxQkFEYTtBQUVyQndCLHNCQUFNLEVBQUUsQ0FBQ1QsUUFBRDtBQUZhLGVBQWpCLENBbkNZOztBQUFBO0FBQUE7O0FBQUEsMkJBa0NabkIsR0FsQ1k7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBYk0sYUFBYTtBQUFBO0FBQUE7QUFBQSxLQUFuQjs7QUEwQ0Esc0JBQ0U7QUFBQSwyQkFzQ0UsOERBQUMsU0FBRCxvQkFBZWQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdENGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBDRDs7R0E5R1FGLEs7O0tBQUFBLEs7QUFnSFQsK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lYWJkNzJlNjE0NjA5YzZmY2Y3ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogcGFnZXMvX2FwcC5qcyAqL1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICBjb25zdCBbY29ubmVjdGVkQWNjb3VudCwgc2V0Q29ubmVjdGVkQWNjb3VudF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaXNDb25uZWN0ZWQsIHNldElzQ29ubmVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgY29ubmVjdFdhbGxlY3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcclxuICAgICAgICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChhY2NvdW50cykge1xyXG4gICAgICAgICAgc2V0Q29ubmVjdGVkQWNjb3VudChhY2NvdW50c1swXSk7XHJcbiAgICAgICAgICBzZXRJc0Nvbm5lY3RlZCh0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZldGNoUmVzcG9uc2UoYWNjb3VudHNbMF0pO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KFwiV2FsbGV0IG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaFJlc3BvbnNlID0gYXN5bmMgKGFjY291bnQpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgXCJodHRwczovL2FwaS1ldTEudGF0dW0uaW8vdjMvbmZ0L2RlcGxveS9cIixcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiTU1DXCIsXHJcbiAgICAgICAgY2hhaW46IFwiQ0VMT1wiLFxyXG4gICAgICAgIGZlZUN1cnJlbmN5OiBcIkNFTE9cIixcclxuICAgICAgICBzeW1ib2w6IFwiTU1DXCIsXHJcbiAgICAgICAgc2lnbmF0dXJlSWQ6IFwiYjdhZDU4ZjctZDgyNi00ZGI1LThhNTItNGY0OTI5MzVhN2I0XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIngtYXBpLWtleVwiOiBcIjk1MWNhYmUwNGRlMTQzYjk4Yjc1YzRkNGVkNGQyZDk5XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB7IHNpZ25hdHVyZUlkIH0gPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICBcImh0dHBzOi8vYXBpLWV1MS50YXR1bS5pby92My9rbXMvXCIgKyBzaWduYXR1cmVJZCxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwieC1hcGkta2V5XCI6IFwiOTUxY2FiZTA0ZGUxNDNiOThiNzVjNGQ0ZWQ0ZDJkOTlcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHR4Q29uZmlnID0gSlNPTi5wYXJzZShkYXRhLnNlcmlhbGl6ZWRUcmFuc2FjdGlvbik7XHJcbiAgICB0eENvbmZpZy5mcm9tID0gYWNjb3VudDtcclxuICAgIHR4Q29uZmlnLmdhc1ByaWNlID0gdHhDb25maWcuZ2FzUHJpY2VcclxuICAgICAgPyBwYXJzZUludCh0eENvbmZpZy5nYXNQcmljZSkudG9TdHJpbmcoMTYpXHJcbiAgICAgIDogdW5kZWZpbmVkO1xyXG4gICAgY29uc29sZS5sb2codHhDb25maWcpO1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIGF3YWl0IGV0aGVyZXVtLnJlcXVlc3Qoe1xyXG4gICAgICAgIG1ldGhvZDogXCJldGhfc2VuZFRyYW5zYWN0aW9uXCIsXHJcbiAgICAgICAgcGFyYW1zOiBbdHhDb25maWddLFxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgey8qIDxuYXYgY2xhc3NOYW1lPVwiYm9yZGVyLWIgcHgtNSBweS0xMCBiZy1ncmF5LTkwMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbWluLXctbWQgcHgtMTZcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+IE5GVFZUdWJlIDwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtNCBmb250LWJvbGQgbWwtOCB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibXItNCB0ZXh0LXdoaXRlIGZvbnQtT3N3YWxkXCI+SG9tZTwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zdHJlYW1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1yLTYgdGV4dC13aGl0ZSBmb250LU9zd2FsZFwiPlN0cmVhbSBWaWRlbzwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jcmVhdGUtbmZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtci02IHRleHQtd2hpdGUgZm9udC1Pc3dhbGRcIj5DcmVhdGUgVmlkZW88L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbXktbmZ0c1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibXItNiB0ZXh0LXdoaXRlIGZvbnQtT3N3YWxkXCI+TXkgVmlkZW9zPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibXItNiB0ZXh0LXdoaXRlXCI+RGFzaGJvYXJkPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7aXNDb25uZWN0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLXBpbmstNjAwIHB4LTUgcHktMyByb3VuZGVkLW1kIG14LTNcIj5cclxuICAgICAgICAgICAgICAgIENvbm5lY3RlZFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIHB4LTUgcHktMyByb3VuZGVkLW1kIG14LTJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y29ubmVjdFdhbGxlY3R9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ29ubmVjdCBXYWxsZXRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj4gKi99XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9