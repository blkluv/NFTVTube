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
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-spinners */ "./node_modules/react-spinners/index.js");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_10__);
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
              _context3.prev = 0;
              provider = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.providers.JsonRpcProvider("https://rpc-mumbai.matic.today");
              contract = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_7__.marketplaceAddress, _artifacts_contracts_NFTMarketplace_sol_NFTMarketplace_json__WEBPACK_IMPORTED_MODULE_8__.abi, provider);
              _context3.next = 5;
              return contract.fetchMarketItems();

            case 5:
              data = _context3.sent;
              _context3.next = 8;
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

            case 8:
              items = _context3.sent;
              setNfts(items);
              _context3.next = 15;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](0);
              console.log("Load Nft error: ", _context3.t0);

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 12]]);
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
              _context4.prev = 0;
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
              _context4.next = 19;
              break;

            case 16:
              _context4.prev = 16;
              _context4.t0 = _context4["catch"](0);
              console.log("buy Error: ", _context4.t0);

            case 19:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 16]]);
    }));
    return _buyNft.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: isLoaded ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex items-start justify-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col bg-gray-900 items-center w-screen mx-20",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("iframe", {
          className: "rounded-xl object-cover w-3/6 h-96 mx-36 mt-12",
          src: selectedNft.image
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex items-center justify-start w-full my-10 px-32",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "my-6 w-3/4 m-5",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              className: "text-6xl font-semibold text-white uppercase",
              children: selectedNft.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-xl text-white my-10",
              children: selectedNft.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex flex-col items-center w-1/4 bg-g m-5",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              className: "text-white text-3xl  my-3",
              children: [selectedNft.price, " MATIC"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "my-3 text-white text-md bg-pink-600 rounded-md px-20 py-4 ",
              onClick: function onClick() {
                try {
                  buyNft(selectedNft);
                } catch (err) {
                  console.log("Buy error:", err);
                }
              },
              children: "Buy Now"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "bg-red-100 h-screen w-screen flex justify-center items-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spinners__WEBPACK_IMPORTED_MODULE_10__.ClipLoader, {
        loading: true,
        size: 72
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 97,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTkZUcy9bdG9rZW5JZF0uanMiXSwibmFtZXMiOlsiTkZUUGFnZSIsInVzZVN0YXRlIiwibmZ0cyIsInNldE5mdHMiLCJzZWxlY3RlZE5mdCIsInNldFNlbGVjdGVkTmZ0IiwiaXNMb2FkZWQiLCJzZXRJc0xvYWRlZCIsInJvdXRlciIsInVzZVJvdXRlciIsInRva2VuSWQiLCJxdWVyeSIsInVzZUVmZmVjdCIsImxvYWRORlRzIiwidXBkYXRlU2VsZWN0ZWRORlQiLCJwcm92aWRlciIsImV0aGVycyIsImNvbnRyYWN0IiwibWFya2V0cGxhY2VBZGRyZXNzIiwiTkZUTWFya2V0cGxhY2UiLCJmZXRjaE1hcmtldEl0ZW1zIiwiZGF0YSIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpIiwidG9rZW5VUkkiLCJ0b2tlblVyaSIsImF4aW9zIiwibWV0YSIsInByaWNlIiwidG9TdHJpbmciLCJpdGVtIiwidG9OdW1iZXIiLCJzZWxsZXIiLCJvd25lciIsImltYWdlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaXRlbXMiLCJjb25zb2xlIiwibG9nIiwibmZ0IiwiTnVtYmVyIiwiYnV5TmZ0Iiwid2ViM01vZGFsIiwiV2ViM01vZGFsIiwiY29ubmVjdCIsImNvbm5lY3Rpb24iLCJzaWduZXIiLCJnZXRTaWduZXIiLCJjcmVhdGVNYXJrZXRTYWxlIiwidmFsdWUiLCJ0cmFuc2FjdGlvbiIsIndhaXQiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxrQkFDSUMsK0NBQVEsQ0FBQyxFQUFELENBRFo7QUFBQSxNQUNiQyxJQURhO0FBQUEsTUFDUEMsT0FETzs7QUFBQSxtQkFFa0JGLCtDQUFRLENBQUMsSUFBRCxDQUYxQjtB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O0FBQUE7QUFBQTtBQUFBO0FBekNOO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdERCxDQXBJRDs7R0FBTXZELE87VUFLV1Msa0Q7OztLQUxYVCxPO0FBc0lOLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL05GVHMvW3Rva2VuSWRdLmJiYWJlMzNmNjBhNzU3MzdjMjAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFdlYjNNb2RhbCBmcm9tIFwid2ViM21vZGFsXCI7XHJcbmltcG9ydCB7Q2xpcExvYWRlcn0gZnJvbSBcInJlYWN0LXNwaW5uZXJzXCJcclxuXHJcbmltcG9ydCB7IG1hcmtldHBsYWNlQWRkcmVzcyB9IGZyb20gXCIuLi8uLi9jb25maWdcIjtcclxuXHJcbmltcG9ydCBORlRNYXJrZXRwbGFjZSBmcm9tIFwiLi4vLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9ORlRNYXJrZXRwbGFjZS5zb2wvTkZUTWFya2V0cGxhY2UuanNvblwiO1xyXG5cclxuY29uc3QgTkZUUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbbmZ0cywgc2V0TmZ0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkTmZ0LCBzZXRTZWxlY3RlZE5mdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgdG9rZW5JZCA9IHJvdXRlci5xdWVyeS50b2tlbklkO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4gbG9hZE5GVHMoKSwgW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB1cGRhdGVTZWxlY3RlZE5GVCgpLCBbbmZ0c10pO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBsb2FkTkZUcygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuSnNvblJwY1Byb3ZpZGVyKFxyXG4gICAgICAgIFwiaHR0cHM6Ly9ycGMtbXVtYmFpLm1hdGljLnRvZGF5XCJcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxyXG4gICAgICAgIG1hcmtldHBsYWNlQWRkcmVzcyxcclxuICAgICAgICBORlRNYXJrZXRwbGFjZS5hYmksXHJcbiAgICAgICAgcHJvdmlkZXJcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGNvbnRyYWN0LmZldGNoTWFya2V0SXRlbXMoKTtcclxuXHJcbiAgICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgZGF0YS5tYXAoYXN5bmMgKGkpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHRva2VuVXJpID0gYXdhaXQgY29udHJhY3QudG9rZW5VUkkoaS50b2tlbklkKTtcclxuICAgICAgICAgIGNvbnN0IG1ldGEgPSBhd2FpdCBheGlvcy5nZXQodG9rZW5VcmkpO1xyXG4gICAgICAgICAgbGV0IHByaWNlID0gZXRoZXJzLnV0aWxzLmZvcm1hdFVuaXRzKGkucHJpY2UudG9TdHJpbmcoKSwgXCJldGhlclwiKTtcclxuICAgICAgICAgIGxldCBpdGVtID0ge1xyXG4gICAgICAgICAgICBwcmljZSxcclxuICAgICAgICAgICAgdG9rZW5JZDogaS50b2tlbklkLnRvTnVtYmVyKCksXHJcbiAgICAgICAgICAgIHNlbGxlcjogaS5zZWxsZXIsXHJcbiAgICAgICAgICAgIG93bmVyOiBpLm93bmVyLFxyXG4gICAgICAgICAgICBpbWFnZTogbWV0YS5kYXRhLmltYWdlLFxyXG4gICAgICAgICAgICBuYW1lOiBtZXRhLmRhdGEubmFtZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IG1ldGEuZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG5cclxuICAgICAgc2V0TmZ0cyhpdGVtcyk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJMb2FkIE5mdCBlcnJvcjogXCIsIGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCB1cGRhdGVTZWxlY3RlZE5GVCA9IGFzeW5jICgpID0+IHtcclxuICAgIG5mdHMubWFwKChuZnQpID0+IHtcclxuICAgICAgaWYgKE51bWJlcih0b2tlbklkKSA9PT0gbmZ0LnRva2VuSWQpIHtcclxuICAgICAgICBzZXRTZWxlY3RlZE5mdChuZnQpO1xyXG4gICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTkZUIE5vdCBGb3VuZFwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gYnV5TmZ0KG5mdCkge1xyXG4gICAgLyogbmVlZHMgdGhlIHVzZXIgdG8gc2lnbiB0aGUgdHJhbnNhY3Rpb24sIHNvIHdpbGwgdXNlIFdlYjNQcm92aWRlciBhbmQgc2lnbiBpdCAqL1xyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB3ZWIzTW9kYWwgPSBuZXcgV2ViM01vZGFsKCk7XHJcbiAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCB3ZWIzTW9kYWwuY29ubmVjdCgpO1xyXG4gICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihjb25uZWN0aW9uKTtcclxuICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcclxuICAgICAgICBtYXJrZXRwbGFjZUFkZHJlc3MsXHJcbiAgICAgICAgTkZUTWFya2V0cGxhY2UuYWJpLFxyXG4gICAgICAgIHNpZ25lclxyXG4gICAgICApO1xyXG4gICAgICAvKiB1c2VyIHdpbGwgYmUgcHJvbXB0ZWQgdG8gcGF5IHRoZSBhc2tpbmcgcHJvY2VzIHRvIGNvbXBsZXRlIHRoZSB0cmFuc2FjdGlvbiAqL1xyXG4gICAgICBcclxuICAgICAgY29uc3QgcHJpY2UgPSBldGhlcnMudXRpbHMucGFyc2VVbml0cyhuZnQucHJpY2UudG9TdHJpbmcoKSwgXCJldGhlclwiKTtcclxuICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCBjb250cmFjdC5jcmVhdGVNYXJrZXRTYWxlKG5mdC50b2tlbklkLCB7XHJcbiAgICAgICAgdmFsdWU6IHByaWNlLFxyXG4gICAgICB9KTtcclxuICAgICAgYXdhaXQgdHJhbnNhY3Rpb24ud2FpdCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYnV5IEVycm9yOiBcIiwgZXJyKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2lzTG9hZGVkID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGJnLWdyYXktOTAwIGl0ZW1zLWNlbnRlciB3LXNjcmVlbiBteC0yMFwiPlxyXG4gICAgICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC14bCBvYmplY3QtY292ZXIgdy0zLzYgaC05NiBteC0zNiBtdC0xMlwiXHJcbiAgICAgICAgICAgICAgc3JjPXtzZWxlY3RlZE5mdC5pbWFnZX1cclxuICAgICAgICAgICAgPjwvaWZyYW1lPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0IHctZnVsbCBteS0xMCBweC0zMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNiB3LTMvNCBtLTVcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTZ4bCBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZE5mdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC13aGl0ZSBteS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWROZnQuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB3LTEvNCBiZy1nIG0tNVwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0zeGwgIG15LTNcIj5cclxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkTmZ0LnByaWNlfSBNQVRJQ1xyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktMyB0ZXh0LXdoaXRlIHRleHQtbWQgYmctcGluay02MDAgcm91bmRlZC1tZCBweC0yMCBweS00IFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgYnV5TmZ0KHNlbGVjdGVkTmZ0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgfWNhdGNoKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQnV5IGVycm9yOlwiLCBlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBCdXkgTm93XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcmVkLTEwMCBoLXNjcmVlbiB3LXNjcmVlbiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8Q2xpcExvYWRlciBsb2FkaW5nIHNpemU9ezcyfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTkZUUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==