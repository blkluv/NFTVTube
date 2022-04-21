self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/lib.esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3modal */ "./node_modules/web3modal/dist/index.js");
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _artifacts_contracts_NFTMarketplace_sol_NFTMarketplace_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json */ "./artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "E:\\programming\\projects\\Work\\NFTVTube\\pages\\index.js",
    _s = $RefreshSig$();







function Home() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      nfts = _useState[0],
      setNfts = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('not-loaded'),
      loadingState = _useState2[0],
      setLoadingState = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    loadNFTs();
  }, []);

  function loadNFTs() {
    return _loadNFTs.apply(this, arguments);
  }

  function _loadNFTs() {
    _loadNFTs = (0,E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      var provider, contract, data, items;
      return E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              /* create a generic provider and query for unsold market items */
              provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.providers.JsonRpcProvider("https://rpc-mumbai.matic.today");
              contract = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_6__.marketplaceAddress, _artifacts_contracts_NFTMarketplace_sol_NFTMarketplace_json__WEBPACK_IMPORTED_MODULE_7__.abi, provider);
              _context2.next = 4;
              return contract.fetchMarketItems();

            case 4:
              data = _context2.sent;
              _context2.next = 7;
              return Promise.all(data.map( /*#__PURE__*/function () {
                var _ref = (0,E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(i) {
                  var tokenUri, meta, price, item;
                  return E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return contract.tokenURI(i.tokenId);

                        case 2:
                          tokenUri = _context.sent;
                          _context.next = 5;
                          return axios__WEBPACK_IMPORTED_MODULE_4___default().get(tokenUri);

                        case 5:
                          meta = _context.sent;
                          price = ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.formatUnits(i.price.toString(), 'ether');
                          item = {
                            price: price,
                            tokenId: i.tokenId.toNumber(),
                            seller: i.seller,
                            owner: i.owner,
                            image: meta.data.image,
                            name: meta.data.name,
                            description: meta.data.description
                          };
                          return _context.abrupt("return", item);

                        case 9:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x2) {
                  return _ref.apply(this, arguments);
                };
              }()));

            case 7:
              items = _context2.sent;
              setNfts(items);
              setLoadingState('loaded');

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _loadNFTs.apply(this, arguments);
  }

  function buyNft(_x) {
    return _buyNft.apply(this, arguments);
  }

  function _buyNft() {
    _buyNft = (0,E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(nft) {
      var web3Modal, connection, provider, signer, contract, price, transaction;
      return E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              /* needs the user to sign the transaction, so will use Web3Provider and sign it */
              web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_5___default())();
              _context3.next = 3;
              return web3Modal.connect();

            case 3:
              connection = _context3.sent;
              provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.providers.Web3Provider(connection);
              signer = provider.getSigner();
              contract = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_6__.marketplaceAddress, _artifacts_contracts_NFTMarketplace_sol_NFTMarketplace_json__WEBPACK_IMPORTED_MODULE_7__.abi, signer);
              /* user will be prompted to pay the asking proces to complete the transaction */

              price = ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.parseUnits(nft.price.toString(), 'ether');
              _context3.next = 10;
              return contract.createMarketSale(nft.tokenId, {
                value: price
              });

            case 10:
              transaction = _context3.sent;
              _context3.next = 13;
              return transaction.wait();

            case 13:
              loadNFTs();

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _buyNft.apply(this, arguments);
  }

  if (loadingState === 'loaded' && !nfts.length) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
    className: "px-20 py-10 text-3xl",
    children: "Currently no asset in marketplace"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 58
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "flex justify-center bg-red-100 my-20 ",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "px-4",
      style: {
        maxWidth: '1600px'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4",
        children: nfts.map(function (nft, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "border shadow rounded-xl overflow-hidden bg-white px-3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("iframe", {
                className: "rounded-xl mt-4",
                src: nft.image,
                frameBorder: "0" //scrolling="auto"
                //height="100%"
                ,
                width: "100%"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 13
              }, _this)
            }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "p-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                style: {
                  height: '64px'
                },
                className: "text-2xl font-bold",
                children: nft.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                style: {
                  height: '70px',
                  overflow: 'hidden'
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                  className: "text-gray-500",
                  children: nft.description
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "p-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                className: "text-2xl font-bold text-black",
                children: [nft.price, " MATIC"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                className: "mt-4 w-full bg-pink-500 text-white font-bold py-2 px-12 rounded",
                onClick: function onClick() {
                  return buyNft(nft);
                },
                children: "Buy"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 17
            }, _this)]
          }, i, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, this);
}

_s(Home, "DL6OJ8B7YCUHYFOUoPi2JI8l+/o=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwibmZ0cyIsInNldE5mdHMiLCJsb2FkaW5nU3RhdGUiLCJzZXRMb2FkaW5nU3RhdGUiLCJ1c2VFZmZlY3QiLCJsb2FkTkZUcyIsInByb3ZpZGVyIiwiZXRoZXJzIiwiY29udHJhY3QiLCJtYXJrZXRwbGFjZUFkZHJlc3MiLCJORlRNYXJrZXRwbGFjZSIsImZldGNoTWFya2V0SXRlbXMiLCJkYXRhIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsImkiLCJ0b2tlblVSSSIsInRva2VuSWQiLCJ0b2tlblVyaSIsImF4aW9zIiwibWV0YSIsInByaWNlIiwidG9TdHJpbmciLCJpdGVtIiwidG9OdW1iZXIiLCJzZWxsZXIiLCJvd25lciIsImltYWdlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaXRlbXMiLCJidXlOZnQiLCJuZnQiLCJ3ZWIzTW9kYWwiLCJXZWIzTW9kYWwiLCJjb25uZWN0IiwiY29ubmVjdGlvbiIsInNpZ25lciIsImdldFNpZ25lciIsImNyZWF0ZU1hcmtldFNhbGUiLCJ2YWx1ZSIsInRyYW5zYWN0aW9uIiwid2FpdCIsImxlbmd0aCIsIm1heFdpZHRoIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDTEMsK0NBQVEsQ0FBQyxFQUFELENBREg7QUFBQSxNQUN0QkMsSUFEc0I7QUFBQSxNQUNoQkMsT0FEZ0I7O0FBQUEsbUJBRVdGLCtDQUFRLENBQUMsWUFBRCxDQUZuQjtBQUFBLE1BRXRCRyxZQUZzQjtBQUFBLE1BRVJDLGVBRlE7O0FBSTdCQyxrREFBUyxDQUFDLFlBQU07QUFDZEMsWUFBUTtBQUNULEdBRlEsRUFFTixFQUZNLENBQVQ7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QTtBQUFBO0FBQUEscUJBYkYsZUFvQkU7QUFBSyx1QkFBUyxFQUFDLEtBQWY7QUFBQSxzQ0FDRTtBQUFHLHlCQUFTLEVBQUMsK0JBQWI7QUFBQSwyQkFBOENHLEdBQUcsQ0FBQ1gsS0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUU7QUFBUSx5QkFBUyxFQUFDLGlFQUFsQjtBQUFvRix1QkFBTyxFQUFFO0FBQUEseUJBQU1VLE1BQU0sQ0FBQ0MsR0FBRCxDQUFaO0FBQUEsaUJBQTdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFwQkY7QUFBQSxhQUFVakIsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURPO0FBQUEsU0FBVDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUNEOztHQXpGdUJsQixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjkxMDA1OTVmOWZhZTQyNTMyMDczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgV2ViM01vZGFsIGZyb20gJ3dlYjNtb2RhbCdcclxuXHJcbmltcG9ydCB7XHJcbiAgbWFya2V0cGxhY2VBZGRyZXNzXHJcbn0gZnJvbSAnLi4vY29uZmlnJ1xyXG5cclxuaW1wb3J0IE5GVE1hcmtldHBsYWNlIGZyb20gJy4uL2FydGlmYWN0cy9jb250cmFjdHMvTkZUTWFya2V0cGxhY2Uuc29sL05GVE1hcmtldHBsYWNlLmpzb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtuZnRzLCBzZXROZnRzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtsb2FkaW5nU3RhdGUsIHNldExvYWRpbmdTdGF0ZV0gPSB1c2VTdGF0ZSgnbm90LWxvYWRlZCcpXHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvYWRORlRzKClcclxuICB9LCBbXSlcclxuICBhc3luYyBmdW5jdGlvbiBsb2FkTkZUcygpIHtcclxuICAgIC8qIGNyZWF0ZSBhIGdlbmVyaWMgcHJvdmlkZXIgYW5kIHF1ZXJ5IGZvciB1bnNvbGQgbWFya2V0IGl0ZW1zICovXHJcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLkpzb25ScGNQcm92aWRlcihcImh0dHBzOi8vcnBjLW11bWJhaS5tYXRpYy50b2RheVwiKVxyXG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KG1hcmtldHBsYWNlQWRkcmVzcywgTkZUTWFya2V0cGxhY2UuYWJpLCBwcm92aWRlcilcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjb250cmFjdC5mZXRjaE1hcmtldEl0ZW1zKClcclxuXHJcbiAgICAvKlxyXG4gICAgKiAgbWFwIG92ZXIgaXRlbXMgcmV0dXJuZWQgZnJvbSBzbWFydCBjb250cmFjdCBhbmQgZm9ybWF0IFxyXG4gICAgKiAgdGhlbSBhcyB3ZWxsIGFzIGZldGNoIHRoZWlyIHRva2VuIG1ldGFkYXRhXHJcbiAgICAqL1xyXG4gICAgY29uc3QgaXRlbXMgPSBhd2FpdCBQcm9taXNlLmFsbChkYXRhLm1hcChhc3luYyBpID0+IHtcclxuICAgICAgY29uc3QgdG9rZW5VcmkgPSBhd2FpdCBjb250cmFjdC50b2tlblVSSShpLnRva2VuSWQpXHJcbiAgICAgIGNvbnN0IG1ldGEgPSBhd2FpdCBheGlvcy5nZXQodG9rZW5VcmkpXHJcbiAgICAgIGxldCBwcmljZSA9IGV0aGVycy51dGlscy5mb3JtYXRVbml0cyhpLnByaWNlLnRvU3RyaW5nKCksICdldGhlcicpXHJcbiAgICAgIGxldCBpdGVtID0ge1xyXG4gICAgICAgIHByaWNlLFxyXG4gICAgICAgIHRva2VuSWQ6IGkudG9rZW5JZC50b051bWJlcigpLFxyXG4gICAgICAgIHNlbGxlcjogaS5zZWxsZXIsXHJcbiAgICAgICAgb3duZXI6IGkub3duZXIsXHJcbiAgICAgICAgaW1hZ2U6IG1ldGEuZGF0YS5pbWFnZSxcclxuICAgICAgICBuYW1lOiBtZXRhLmRhdGEubmFtZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogbWV0YS5kYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBpdGVtXHJcbiAgICB9KSlcclxuICAgIHNldE5mdHMoaXRlbXMpXHJcbiAgICBzZXRMb2FkaW5nU3RhdGUoJ2xvYWRlZCcpIFxyXG4gIH1cclxuICBhc3luYyBmdW5jdGlvbiBidXlOZnQobmZ0KSB7XHJcbiAgICAvKiBuZWVkcyB0aGUgdXNlciB0byBzaWduIHRoZSB0cmFuc2FjdGlvbiwgc28gd2lsbCB1c2UgV2ViM1Byb3ZpZGVyIGFuZCBzaWduIGl0ICovXHJcbiAgICBjb25zdCB3ZWIzTW9kYWwgPSBuZXcgV2ViM01vZGFsKClcclxuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCB3ZWIzTW9kYWwuY29ubmVjdCgpXHJcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihjb25uZWN0aW9uKVxyXG4gICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKClcclxuICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChtYXJrZXRwbGFjZUFkZHJlc3MsIE5GVE1hcmtldHBsYWNlLmFiaSwgc2lnbmVyKVxyXG5cclxuICAgIC8qIHVzZXIgd2lsbCBiZSBwcm9tcHRlZCB0byBwYXkgdGhlIGFza2luZyBwcm9jZXMgdG8gY29tcGxldGUgdGhlIHRyYW5zYWN0aW9uICovXHJcbiAgICBjb25zdCBwcmljZSA9IGV0aGVycy51dGlscy5wYXJzZVVuaXRzKG5mdC5wcmljZS50b1N0cmluZygpLCAnZXRoZXInKSAgIFxyXG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCBjb250cmFjdC5jcmVhdGVNYXJrZXRTYWxlKG5mdC50b2tlbklkLCB7XHJcbiAgICAgIHZhbHVlOiBwcmljZVxyXG4gICAgfSlcclxuICAgIGF3YWl0IHRyYW5zYWN0aW9uLndhaXQoKVxyXG4gICAgbG9hZE5GVHMoKVxyXG4gIH1cclxuICBpZiAobG9hZGluZ1N0YXRlID09PSAnbG9hZGVkJyAmJiAhbmZ0cy5sZW5ndGgpIHJldHVybiAoPGgxIGNsYXNzTmFtZT1cInB4LTIwIHB5LTEwIHRleHQtM3hsXCI+Q3VycmVudGx5IG5vIGFzc2V0IGluIG1hcmtldHBsYWNlPC9oMT4pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBiZy1yZWQtMTAwIG15LTIwIFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTRcIiBzdHlsZT17eyBtYXhXaWR0aDogJzE2MDBweCcgfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IGdhcC00IHB0LTRcIj5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmZ0cy5tYXAoKG5mdCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJib3JkZXIgc2hhZG93IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGJnLXdoaXRlIHB4LTNcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aWZyYW1lIGNsYXNzTmFtZT1cInJvdW5kZWQteGwgbXQtNFwiXHJcbiAgICAgICAgICAgICAgc3JjPXtuZnQuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcclxuICAgICAgICAgICAgICAvL3Njcm9sbGluZz1cImF1dG9cIlxyXG4gICAgICAgICAgICAgLy9oZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgID48L2lmcmFtZT5cclxuXHJcbiAgICAgICAgICAgIDwvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGhlaWdodDogJzY0cHgnIH19IGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPntuZnQubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNzBweCcsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+e25mdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtYmxhY2tcIj57bmZ0LnByaWNlfSBNQVRJQzwvcD5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtdC00IHctZnVsbCBiZy1waW5rLTUwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTEyIHJvdW5kZWRcIiBvbkNsaWNrPXsoKSA9PiBidXlOZnQobmZ0KX0+QnV5PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9