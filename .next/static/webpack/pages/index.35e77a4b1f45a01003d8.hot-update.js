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
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/lib.esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3modal */ "./node_modules/web3modal/dist/index.js");
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _artifacts_contracts_NFTMarketplace_sol_NFTMarketplace_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json */ "./artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "E:\\programming\\projects\\Work\\NFTVTube\\pages\\index.js",
    _s = $RefreshSig$();








function Home() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      nfts = _useState[0],
      setNfts = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),
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
              provider = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.providers.JsonRpcProvider("https://rpc-mumbai.matic.today");
              contract = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_7__.marketplaceAddress, _artifacts_contracts_NFTMarketplace_sol_NFTMarketplace_json__WEBPACK_IMPORTED_MODULE_8__.abi, provider);
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
                          price = ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.utils.formatUnits(i.price.toString(), "ether");
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
              setLoadingState(false);

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
              provider = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.providers.Web3Provider(connection);
              signer = provider.getSigner();
              contract = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_7__.marketplaceAddress, _artifacts_contracts_NFTMarketplace_sol_NFTMarketplace_json__WEBPACK_IMPORTED_MODULE_8__.abi, signer);
              /* user will be prompted to pay the asking proces to complete the transaction */

              price = ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.utils.parseUnits(nft.price.toString(), "ether");
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

  if (loadingState === false && !nfts.length) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
    className: "px-20 py-10 text-3xl",
    children: "Currently no asset in marketplace"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 7
  }, this);else if (loadingState === true) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: " h-screen w-screen flex justify-center items-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ClipLoader, {
        loading: true,
        size: 200,
        color: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, this);
  }
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "flex justify-center m-20",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "px-4",
      style: {
        maxWidth: "1600px"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4",
        children: nfts.map(function (nft, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "shadow rounded-xl overflow-hidden bg-white px-3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("iframe", {
                className: "rounded-xl mt-4",
                src: nft.image,
                frameBorder: "0",
                width: "100%"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 17
              }, _this)
            }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "p-4 my-1 flex flex-col items-center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                href: "NFTs/".concat(nft.tokenId),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                  className: "text-2xl font-bold my-2 ",
                  children: nft.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                style: {
                  overflow: "hidden"
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                  className: "text-gray-500 my-3",
                  children: nft.description
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "p-4 flex flex-col items-center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                className: "text-2xl font-bold text-black",
                children: [nft.price, " MATIC"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                className: "mt-4 w-full bg-pink-500 text-white font-bold py-2 px-12 rounded",
                onClick: function onClick() {
                  return buyNft(nft);
                },
                children: "Buy"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 15
            }, _this)]
          }, i, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 5
  }, this);
}

_s(Home, "FbijjIHfgDpJA13l74POjqDtbZA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwibmZ0cyIsInNldE5mdHMiLCJsb2FkaW5nU3RhdGUiLCJzZXRMb2FkaW5nU3RhdGUiLCJ1c2VFZmZlY3QiLCJsb2FkTkZUcyIsInByb3ZpZGVyIiwiZXRoZXJzIiwiY29udHJhY3QiLCJtYXJrZXRwbGFjZUFkZHJlc3MiLCJORlRNYXJrZXRwbGFjZSIsImZldGNoTWFya2V0SXRlbXMiLCJkYXRhIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsImkiLCJ0b2tlblVSSSIsInRva2VuSWQiLCJ0b2tlblVyaSIsImF4aW9zIiwibWV0YSIsInByaWNlIiwidG9TdHJpbmciLCJpdGVtIiwidG9OdW1iZXIiLCJzZWxsZXIiLCJvd25lciIsImltYWdlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaXRlbXMiLCJidXlOZnQiLCJuZnQiLCJ3ZWIzTW9kYWwiLCJXZWIzTW9kYWwiLCJjb25uZWN0IiwiY29ubmVjdGlvbiIsInNpZ25lciIsImdldFNpZ25lciIsImNyZWF0ZU1hcmtldFNhbGUiLCJ2YWx1ZSIsInRyYW5zYWN0aW9uIiwid2FpdCIsImxlbmd0aCIsIm1heFdpZHRoIiwib3ZlcmZsb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0xDLCtDQUFRLENBQUMsRUFBRCxDQURIO0FBQUEsTUFDdEJDLElBRHNCO0FBQUEsTUFDaEJDLE9BRGdCOztBQUFBLG1CQUVXRiwrQ0FBUSxDQUFDLElBQUQsQ0FGbkI7QUFBQSxNQUV0QkcsWUFGc0I7QUFBQSxNQUVSQyxlQUZROztBQUk3QkMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RDLFlBQVE7QUFDVCxHQUZRLEVBRU4sRUFGTSxDQUFUOztB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LGVBS0U7QUFBSyxxQkFBSyxFQUFFO0FBQUVpQiwwQkFBUSxFQUFFO0FBQVosaUJBQVo7QUFBQSx1Q0FDRTtBQUFHLDJCQUFTLEVBQUMsb0JBQWI7QUFBQSw0QkFBbUNiLEdBQUcsQ0FBQ0g7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWJGLGVBdUJFO0FBQUssdUJBQVMsRUFBQyxnQ0FBZjtBQUFBLHNDQUNFO0FBQUcseUJBQVMsRUFBQywrQkFBYjtBQUFBLDJCQUNHRyxHQUFHLENBQUNYLEtBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBSUU7QUFDRSx5QkFBUyxFQUFDLGlFQURaO0FBRUUsdUJBQU8sRUFBRTtBQUFBLHlCQUFNVSxNQUFNLENBQUNDLEdBQUQsQ0FBWjtBQUFBLGlCQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF2QkY7QUFBQSxhQUNPakIsQ0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURRO0FBQUEsU0FBVDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkNEOztHQXpIdUJsQixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM1ZTc3YTRiMWY0NWEwMTAwM2Q4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgV2ViM01vZGFsIGZyb20gXCJ3ZWIzbW9kYWxcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBtYXJrZXRwbGFjZUFkZHJlc3MgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgTkZUTWFya2V0cGxhY2UgZnJvbSBcIi4uL2FydGlmYWN0cy9jb250cmFjdHMvTkZUTWFya2V0cGxhY2Uuc29sL05GVE1hcmtldHBsYWNlLmpzb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW25mdHMsIHNldE5mdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nU3RhdGUsIHNldExvYWRpbmdTdGF0ZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvYWRORlRzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBsb2FkTkZUcygpIHtcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuSnNvblJwY1Byb3ZpZGVyKFxyXG4gICAgICBcImh0dHBzOi8vcnBjLW11bWJhaS5tYXRpYy50b2RheVwiXHJcbiAgICApO1xyXG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxyXG4gICAgICBtYXJrZXRwbGFjZUFkZHJlc3MsXHJcbiAgICAgIE5GVE1hcmtldHBsYWNlLmFiaSxcclxuICAgICAgcHJvdmlkZXJcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGNvbnRyYWN0LmZldGNoTWFya2V0SXRlbXMoKTtcclxuICAgIFxyXG4gICAgY29uc3QgaXRlbXMgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgZGF0YS5tYXAoYXN5bmMgKGkpID0+IHtcclxuICAgICAgICBjb25zdCB0b2tlblVyaSA9IGF3YWl0IGNvbnRyYWN0LnRva2VuVVJJKGkudG9rZW5JZCk7XHJcbiAgICAgICAgY29uc3QgbWV0YSA9IGF3YWl0IGF4aW9zLmdldCh0b2tlblVyaSk7XHJcbiAgICAgICAgbGV0IHByaWNlID0gZXRoZXJzLnV0aWxzLmZvcm1hdFVuaXRzKGkucHJpY2UudG9TdHJpbmcoKSwgXCJldGhlclwiKTtcclxuICAgICAgICBsZXQgaXRlbSA9IHtcclxuICAgICAgICAgIHByaWNlLFxyXG4gICAgICAgICAgdG9rZW5JZDogaS50b2tlbklkLnRvTnVtYmVyKCksXHJcbiAgICAgICAgICBzZWxsZXI6IGkuc2VsbGVyLFxyXG4gICAgICAgICAgb3duZXI6IGkub3duZXIsXHJcbiAgICAgICAgICBpbWFnZTogbWV0YS5kYXRhLmltYWdlLFxyXG4gICAgICAgICAgbmFtZTogbWV0YS5kYXRhLm5hbWUsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogbWV0YS5kYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgc2V0TmZ0cyhpdGVtcyk7XHJcbiAgICBzZXRMb2FkaW5nU3RhdGUoZmFsc2UpO1xyXG4gIH1cclxuICBcclxuICBhc3luYyBmdW5jdGlvbiBidXlOZnQobmZ0KSB7XHJcbiAgICAvKiBuZWVkcyB0aGUgdXNlciB0byBzaWduIHRoZSB0cmFuc2FjdGlvbiwgc28gd2lsbCB1c2UgV2ViM1Byb3ZpZGVyIGFuZCBzaWduIGl0ICovXHJcbiAgICBjb25zdCB3ZWIzTW9kYWwgPSBuZXcgV2ViM01vZGFsKCk7XHJcbiAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgd2ViM01vZGFsLmNvbm5lY3QoKTtcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGNvbm5lY3Rpb24pO1xyXG4gICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXHJcbiAgICAgIG1hcmtldHBsYWNlQWRkcmVzcyxcclxuICAgICAgTkZUTWFya2V0cGxhY2UuYWJpLFxyXG4gICAgICBzaWduZXJcclxuICAgICk7XHJcblxyXG4gICAgLyogdXNlciB3aWxsIGJlIHByb21wdGVkIHRvIHBheSB0aGUgYXNraW5nIHByb2NlcyB0byBjb21wbGV0ZSB0aGUgdHJhbnNhY3Rpb24gKi9cclxuICAgIGNvbnN0IHByaWNlID0gZXRoZXJzLnV0aWxzLnBhcnNlVW5pdHMobmZ0LnByaWNlLnRvU3RyaW5nKCksIFwiZXRoZXJcIik7XHJcbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IGNvbnRyYWN0LmNyZWF0ZU1hcmtldFNhbGUobmZ0LnRva2VuSWQsIHtcclxuICAgICAgdmFsdWU6IHByaWNlLFxyXG4gICAgfSk7XHJcbiAgICBhd2FpdCB0cmFuc2FjdGlvbi53YWl0KCk7XHJcbiAgICBsb2FkTkZUcygpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGxvYWRpbmdTdGF0ZSA9PT0gZmFsc2UgJiYgIW5mdHMubGVuZ3RoKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInB4LTIwIHB5LTEwIHRleHQtM3hsXCI+XHJcbiAgICAgICAgQ3VycmVudGx5IG5vIGFzc2V0IGluIG1hcmtldHBsYWNlXHJcbiAgICAgIDwvaDE+XHJcbiAgICApO1xyXG4gIFxyXG4gIGVsc2UgaWYgKGxvYWRpbmdTdGF0ZSA9PT0gdHJ1ZSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgaC1zY3JlZW4gdy1zY3JlZW4gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8Q2xpcExvYWRlciBsb2FkaW5nIHNpemU9ezIwMH0gY29sb3I9XCJ3aGl0ZVwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuICggXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbS0yMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTRcIiBzdHlsZT17eyBtYXhXaWR0aDogXCIxNjAwcHhcIiB9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgZ2FwLTQgcHQtNFwiPlxyXG4gICAgICAgICAge25mdHMubWFwKChuZnQsIGkpID0+IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gYmctd2hpdGUgcHgtM1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGlmcmFtZVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIG10LTRcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9e25mdC5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgID48L2lmcmFtZT5cclxuICAgICAgICAgICAgICA8Lz5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgbXktMSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YE5GVHMvJHtuZnQudG9rZW5JZH1gfT5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbXktMiBcIj57bmZ0Lm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBvdmVyZmxvdzogXCJoaWRkZW5cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBteS0zXCI+e25mdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWJsYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtuZnQucHJpY2V9IE1BVElDXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsIGJnLXBpbmstNTAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtMTIgcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGJ1eU5mdChuZnQpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBCdXlcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==