self["webpackHotUpdate_N_E"]("pages/NFTs/[tokenId]",{

/***/ "./pages/NFTs/[tokenId].js":
/*!*********************************!*\
  !*** ./pages/NFTs/[tokenId].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/lib.esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! web3modal */ "./node_modules/web3modal/dist/index.js");
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _artifacts_contracts_NFTMarketplace_sol_NFTMarketplace_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json */ "./artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "E:\\programming\\projects\\Work\\NFTVTube\\pages\\NFTs\\[tokenId].js",
    _this = undefined,
    _s = $RefreshSig$();









var NFTPage = function NFTPage() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
      nfts = _useState[0],
      setNfts = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      selectedNft = _useState2[0],
      setSelectedNft = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      isLoaded = _useState3[0],
      setIsLoaded = _useState3[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  var tokenId = router.query.tokenId;
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    return loadNFTs();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    return updateSelectedNFT();
  }, [nfts]);

  function loadNFTs() {
    return _loadNFTs.apply(this, arguments);
  }

  function _loadNFTs() {
    _loadNFTs = (0,E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
      var provider, contract, data, items;
      return E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              provider = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.providers.JsonRpcProvider("https://rpc-mumbai.matic.today");
              contract = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_7__.marketplaceAddress, _artifacts_contracts_NFTMarketplace_sol_NFTMarketplace_json__WEBPACK_IMPORTED_MODULE_8__.abi, provider);
              _context3.next = 4;
              return contract.fetchMarketItems();

            case 4:
              data = _context3.sent;
              _context3.next = 7;
              return Promise.all(data.map( /*#__PURE__*/function () {
                var _ref2 = (0,E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(i) {
                  var tokenUri, meta, price, item;
                  return E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return contract.tokenURI(i.tokenId);

                        case 2:
                          tokenUri = _context2.sent;
                          _context2.next = 5;
                          return axios__WEBPACK_IMPORTED_MODULE_5___default().get(tokenUri);

                        case 5:
                          meta = _context2.sent;
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
                          return _context2.abrupt("return", item);

                        case 9:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function (_x2) {
                  return _ref2.apply(this, arguments);
                };
              }()));

            case 7:
              items = _context3.sent;
              setNfts(items);

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _loadNFTs.apply(this, arguments);
  }

  var updateSelectedNFT = /*#__PURE__*/function () {
    var _ref = (0,E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      return E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              nfts.map(function (nft) {
                if (Number(tokenId) === nft.tokenId) {
                  setSelectedNft(nft);
                  setIsLoaded(true);
                } else {
                  console.log("NFT Not Found");
                }
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function updateSelectedNFT() {
      return _ref.apply(this, arguments);
    };
  }();

  function buyNft(_x) {
    return _buyNft.apply(this, arguments);
  }

  function _buyNft() {
    _buyNft = (0,E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(nft) {
      var web3Modal, connection, provider, signer, contract, price, transaction;
      return E_programming_projects_Work_NFTVTube_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              alert("calling");
              /* needs the user to sign the transaction, so will use Web3Provider and sign it */

              web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_6___default())();
              _context4.next = 4;
              return web3Modal.connect();

            case 4:
              connection = _context4.sent;
              provider = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.providers.Web3Provider(connection);
              signer = provider.getSigner();
              contract = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_7__.marketplaceAddress, _artifacts_contracts_NFTMarketplace_sol_NFTMarketplace_json__WEBPACK_IMPORTED_MODULE_8__.abi, signer);
              /* user will be prompted to pay the asking proces to complete the transaction */

              price = ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.utils.parseUnits(nft.price.toString(), "ether");
              _context4.next = 11;
              return contract.createMarketSale(nft.tokenId, {
                value: price
              });

            case 11:
              transaction = _context4.sent;
              _context4.next = 14;
              return transaction.wait();

            case 14:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _buyNft.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: isLoaded ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex bg-red-100 items-start justify-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col bg-green-100 ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "h-96 bg-green-900 max-w-max ",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("iframe", {
            className: "rounded-xl object-cover w-full h-full",
            src: selectedNft.image
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: ["Name: ", selectedNft.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex items-center justify-evenly",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            children: ["price: ", selectedNft.price, " MATIC"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "my-3 text-black bg-gray-300 h-10 w-32 rounded-xl",
            onClick: function onClick() {
              return buyNft(selectedNft);
            },
            children: "Buy Now"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: ["Description: ", selectedNft.description]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: " Not Loaded "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 5
  }, _this);
};

_s(NFTPage, "8kdGgqQIwSLeSz5/62Ml69yrmQE=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = NFTPage;
/* harmony default export */ __webpack_exports__["default"] = (NFTPage);

var _c;

$RefreshReg$(_c, "NFTPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTkZUcy9bdG9rZW5JZF0uanMiXSwibmFtZXMiOlsiTkZUUGFnZSIsInVzZVN0YXRlIiwibmZ0cyIsInNldE5mdHMiLCJzZWxlY3RlZE5mdCIsInNldFNlbGVjdGVkTmZ0IiwiaXNMb2FkZWQiLCJzZXRJc0xvYWRlZCIsInJvdXRlciIsInVzZVJvdXRlciIsInRva2VuSWQiLCJxdWVyeSIsInVzZUVmZmVjdCIsImxvYWRORlRzIiwidXBkYXRlU2VsZWN0ZWRORlQiLCJwcm92aWRlciIsImV0aGVycyIsImNvbnRyYWN0IiwibWFya2V0cGxhY2VBZGRyZXNzIiwiTkZUTWFya2V0cGxhY2UiLCJmZXRjaE1hcmtldEl0ZW1zIiwiZGF0YSIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpIiwidG9rZW5VUkkiLCJ0b2tlblVyaSIsImF4aW9zIiwibWV0YSIsInByaWNlIiwidG9TdHJpbmciLCJpdGVtIiwidG9OdW1iZXIiLCJzZWxsZXIiLCJvd25lciIsImltYWdlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaXRlbXMiLCJuZnQiLCJOdW1iZXIiLCJjb25zb2xlIiwibG9nIiwiYnV5TmZ0IiwiYWxlcnQiLCJ3ZWIzTW9kYWwiLCJXZWIzTW9kYWwiLCJjb25uZWN0IiwiY29ubmVjdGlvbiIsInNpZ25lciIsImdldFNpZ25lciIsImNyZWF0ZU1hcmtldFNhbGUiLCJ2YWx1ZSIsInRyYW5zYWN0aW9uIiwid2FpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0lDLCtDQUFRLENBQUMsRUFBRCxDQURaO0FBQUEsTUFDYkMsSUFEYTtBQUFBLE1BQ1BDLE9BRE87O0FBQUEsbUJBRWtCRiwrQ0FBUSxDQUFDLElBQUQsQ0FGMUI7QUFBQSxN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QkFERixlQWlCRTtBQUFBLCtCQUFXaEMsV0FBVyxDQUFDaUMsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpCRixlQWtCRTtBQUFLLG1CQUFTLEVBQUMsa0NBQWY7QUFBQSxrQ0FDRTtBQUFBLGtDQUFZakMsV0FBVyxDQUFDMEIsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFDRSxxQkFBUyxFQUFDLGtEQURaO0FBRUUsbUJBQU8sRUFBRTtBQUFBLHFCQUFNYyxNQUFNLENBQUN4QyxXQUFELENBQVo7QUFBQSxhQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsQkYsZUE0QkU7QUFBQSxzQ0FBa0JBLFdBQVcsQ0FBQ2tDLFdBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE1QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURPLGdCQWtDUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW5DSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3Q0QsQ0FuSEQ7O0dBQU10QyxPO1VBS1dTLGtEOzs7S0FMWFQsTztBQXFITiwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ORlRzL1t0b2tlbklkXS45Njc5MzBlNzViM2JmZjE1YzE4YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSBcIndlYjNtb2RhbFwiO1xyXG5cclxuXHJcbmltcG9ydCB7IG1hcmtldHBsYWNlQWRkcmVzcyB9IGZyb20gXCIuLi8uLi9jb25maWdcIjtcclxuXHJcbmltcG9ydCBORlRNYXJrZXRwbGFjZSBmcm9tIFwiLi4vLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9ORlRNYXJrZXRwbGFjZS5zb2wvTkZUTWFya2V0cGxhY2UuanNvblwiO1xyXG5cclxuY29uc3QgTkZUUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbbmZ0cywgc2V0TmZ0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkTmZ0LCBzZXRTZWxlY3RlZE5mdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgdG9rZW5JZCA9IHJvdXRlci5xdWVyeS50b2tlbklkO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4gbG9hZE5GVHMoKSwgW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB1cGRhdGVTZWxlY3RlZE5GVCgpLCBbbmZ0c10pO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBsb2FkTkZUcygpIHtcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuSnNvblJwY1Byb3ZpZGVyKFxyXG4gICAgICBcImh0dHBzOi8vcnBjLW11bWJhaS5tYXRpYy50b2RheVwiXHJcbiAgICApO1xyXG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxyXG4gICAgICBtYXJrZXRwbGFjZUFkZHJlc3MsXHJcbiAgICAgIE5GVE1hcmtldHBsYWNlLmFiaSxcclxuICAgICAgcHJvdmlkZXJcclxuICAgICk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgY29udHJhY3QuZmV0Y2hNYXJrZXRJdGVtcygpO1xyXG5cclxuICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgIGRhdGEubWFwKGFzeW5jIChpKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9rZW5VcmkgPSBhd2FpdCBjb250cmFjdC50b2tlblVSSShpLnRva2VuSWQpO1xyXG4gICAgICAgIGNvbnN0IG1ldGEgPSBhd2FpdCBheGlvcy5nZXQodG9rZW5VcmkpO1xyXG4gICAgICAgIGxldCBwcmljZSA9IGV0aGVycy51dGlscy5mb3JtYXRVbml0cyhpLnByaWNlLnRvU3RyaW5nKCksIFwiZXRoZXJcIik7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSB7XHJcbiAgICAgICAgICBwcmljZSxcclxuICAgICAgICAgIHRva2VuSWQ6IGkudG9rZW5JZC50b051bWJlcigpLFxyXG4gICAgICAgICAgc2VsbGVyOiBpLnNlbGxlcixcclxuICAgICAgICAgIG93bmVyOiBpLm93bmVyLFxyXG4gICAgICAgICAgaW1hZ2U6IG1ldGEuZGF0YS5pbWFnZSxcclxuICAgICAgICAgIG5hbWU6IG1ldGEuZGF0YS5uYW1lLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IG1ldGEuZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICBzZXROZnRzKGl0ZW1zKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVNlbGVjdGVkTkZUID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbmZ0cy5tYXAoKG5mdCkgPT4ge1xyXG4gICAgICBpZiAoTnVtYmVyKHRva2VuSWQpID09PSBuZnQudG9rZW5JZCkge1xyXG4gICAgICAgIHNldFNlbGVjdGVkTmZ0KG5mdCk7XHJcbiAgICAgICAgc2V0SXNMb2FkZWQodHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJORlQgTm90IEZvdW5kXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBidXlOZnQobmZ0KSB7XHJcbiAgICAgIGFsZXJ0KFwiY2FsbGluZ1wiKVxyXG4gICAgICAvKiBuZWVkcyB0aGUgdXNlciB0byBzaWduIHRoZSB0cmFuc2FjdGlvbiwgc28gd2lsbCB1c2UgV2ViM1Byb3ZpZGVyIGFuZCBzaWduIGl0ICovXHJcbiAgICAgIGNvbnN0IHdlYjNNb2RhbCA9IG5ldyBXZWIzTW9kYWwoKTtcclxuICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHdlYjNNb2RhbC5jb25uZWN0KCk7XHJcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGNvbm5lY3Rpb24pO1xyXG4gICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcclxuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxyXG4gICAgICAgIG1hcmtldHBsYWNlQWRkcmVzcyxcclxuICAgICAgICBORlRNYXJrZXRwbGFjZS5hYmksXHJcbiAgICAgICAgc2lnbmVyXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvKiB1c2VyIHdpbGwgYmUgcHJvbXB0ZWQgdG8gcGF5IHRoZSBhc2tpbmcgcHJvY2VzIHRvIGNvbXBsZXRlIHRoZSB0cmFuc2FjdGlvbiAqL1xyXG4gICAgICBjb25zdCBwcmljZSA9IGV0aGVycy51dGlscy5wYXJzZVVuaXRzKG5mdC5wcmljZS50b1N0cmluZygpLCBcImV0aGVyXCIpO1xyXG4gICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IGNvbnRyYWN0LmNyZWF0ZU1hcmtldFNhbGUobmZ0LnRva2VuSWQsIHtcclxuICAgICAgICB2YWx1ZTogcHJpY2UsXHJcbiAgICAgIH0pO1xyXG4gICAgICBhd2FpdCB0cmFuc2FjdGlvbi53YWl0KCk7XHJcbiAgICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7aXNMb2FkZWQgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGJnLXJlZC0xMDAgaXRlbXMtc3RhcnQganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBiZy1ncmVlbi0xMDAgXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC05NiBiZy1ncmVlbi05MDAgbWF4LXctbWF4IFwiPlxyXG4gICAgICAgICAgICAgIDxpZnJhbWVcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQteGwgb2JqZWN0LWNvdmVyIHctZnVsbCBoLWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtzZWxlY3RlZE5mdC5pbWFnZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPC9pZnJhbWU+XHJcbiAgICAgICAgICAgICAgey8qIDxpZnJhbWVcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQteGwgbXQtNCBoLTUvNiB3LXNjcmVlbiBweC0yNCBweS0yIG9iamVjdC1maWxsXCJcclxuICAgICAgICAgICAgICAgIHNyYz17c2VsZWN0ZWROZnQuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgLy9zY3JvbGxpbmc9XCJhdXRvXCJcclxuICAgICAgICAgICAgICAgIC8vIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgLy8gaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAvLyB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgID48L2lmcmFtZT4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDE+TmFtZToge3NlbGVjdGVkTmZ0Lm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWV2ZW5seVwiPlxyXG4gICAgICAgICAgICAgIDxoMT5wcmljZToge3NlbGVjdGVkTmZ0LnByaWNlfSBNQVRJQzwvaDE+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktMyB0ZXh0LWJsYWNrIGJnLWdyYXktMzAwIGgtMTAgdy0zMiByb3VuZGVkLXhsXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGJ1eU5mdChzZWxlY3RlZE5mdCl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQnV5IE5vd1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxoMT5EZXNjcmlwdGlvbjoge3NlbGVjdGVkTmZ0LmRlc2NyaXB0aW9ufTwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8aDE+IE5vdCBMb2FkZWQgPC9oMT5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBORlRQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9