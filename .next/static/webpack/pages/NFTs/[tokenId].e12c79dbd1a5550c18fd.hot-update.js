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
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: " Not Loaded "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTkZUcy9bdG9rZW5JZF0uanMiXSwibmFtZXMiOlsiTkZUUGFnZSIsInVzZVN0YXRlIiwibmZ0cyIsInNldE5mdHMiLCJzZWxlY3RlZE5mdCIsInNldFNlbGVjdGVkTmZ0IiwiaXNMb2FkZWQiLCJzZXRJc0xvYWRlZCIsInJvdXRlciIsInVzZVJvdXRlciIsInRva2VuSWQiLCJxdWVyeSIsInVzZUVmZmVjdCIsImxvYWRORlRzIiwidXBkYXRlU2VsZWN0ZWRORlQiLCJwcm92aWRlciIsImV0aGVycyIsImNvbnRyYWN0IiwibWFya2V0cGxhY2VBZGRyZXNzIiwiTkZUTWFya2V0cGxhY2UiLCJmZXRjaE1hcmtldEl0ZW1zIiwiZGF0YSIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpIiwidG9rZW5VUkkiLCJ0b2tlblVyaSIsImF4aW9zIiwibWV0YSIsInByaWNlIiwidG9TdHJpbmciLCJpdGVtIiwidG9OdW1iZXIiLCJzZWxsZXIiLCJvd25lciIsImltYWdlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaXRlbXMiLCJjb25zb2xlIiwibG9nIiwibmZ0IiwiTnVtYmVyIiwiYnV5TmZ0Iiwid2ViM01vZGFsIiwiV2ViM01vZGFsIiwiY29ubmVjdCIsImNvbm5lY3Rpb24iLCJzaWduZXIiLCJnZXRTaWduZXIiLCJjcmVhdGVNYXJrZXRTYWxlIiwidmFsdWUiLCJ0cmFuc2FjdGlvbiIsIndhaXQiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0lDLCtDQUFRLENBQUMsRUFBRCxDQURaO0FBQUEsTUFDYkMsSUFEYTtBQUFBLE1BQ1BDLE9BRE87O0FBQUEsbUJBRWtCRiwrQ0FBUSxDQUFDLElBQUQsQ0FGMUI7QUFB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QSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL05GVHMvW3Rva2VuSWRdLmUxMmM3OWRiZDFhNTU1MGMxOGZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFdlYjNNb2RhbCBmcm9tIFwid2ViM21vZGFsXCI7XHJcbmltcG9ydCB7Q2xpcExvYWRlcn0gZnJvbSBcInJlYWN0LXNwaW5uZXJzXCJcclxuXHJcbmltcG9ydCB7IG1hcmtldHBsYWNlQWRkcmVzcyB9IGZyb20gXCIuLi8uLi9jb25maWdcIjtcclxuXHJcbmltcG9ydCBORlRNYXJrZXRwbGFjZSBmcm9tIFwiLi4vLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9ORlRNYXJrZXRwbGFjZS5zb2wvTkZUTWFya2V0cGxhY2UuanNvblwiO1xyXG5cclxuY29uc3QgTkZUUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbbmZ0cywgc2V0TmZ0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkTmZ0LCBzZXRTZWxlY3RlZE5mdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgdG9rZW5JZCA9IHJvdXRlci5xdWVyeS50b2tlbklkO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4gbG9hZE5GVHMoKSwgW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB1cGRhdGVTZWxlY3RlZE5GVCgpLCBbbmZ0c10pO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBsb2FkTkZUcygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuSnNvblJwY1Byb3ZpZGVyKFxyXG4gICAgICAgIFwiaHR0cHM6Ly9ycGMtbXVtYmFpLm1hdGljLnRvZGF5XCJcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxyXG4gICAgICAgIG1hcmtldHBsYWNlQWRkcmVzcyxcclxuICAgICAgICBORlRNYXJrZXRwbGFjZS5hYmksXHJcbiAgICAgICAgcHJvdmlkZXJcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGNvbnRyYWN0LmZldGNoTWFya2V0SXRlbXMoKTtcclxuXHJcbiAgICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgZGF0YS5tYXAoYXN5bmMgKGkpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHRva2VuVXJpID0gYXdhaXQgY29udHJhY3QudG9rZW5VUkkoaS50b2tlbklkKTtcclxuICAgICAgICAgIGNvbnN0IG1ldGEgPSBhd2FpdCBheGlvcy5nZXQodG9rZW5VcmkpO1xyXG4gICAgICAgICAgbGV0IHByaWNlID0gZXRoZXJzLnV0aWxzLmZvcm1hdFVuaXRzKGkucHJpY2UudG9TdHJpbmcoKSwgXCJldGhlclwiKTtcclxuICAgICAgICAgIGxldCBpdGVtID0ge1xyXG4gICAgICAgICAgICBwcmljZSxcclxuICAgICAgICAgICAgdG9rZW5JZDogaS50b2tlbklkLnRvTnVtYmVyKCksXHJcbiAgICAgICAgICAgIHNlbGxlcjogaS5zZWxsZXIsXHJcbiAgICAgICAgICAgIG93bmVyOiBpLm93bmVyLFxyXG4gICAgICAgICAgICBpbWFnZTogbWV0YS5kYXRhLmltYWdlLFxyXG4gICAgICAgICAgICBuYW1lOiBtZXRhLmRhdGEubmFtZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IG1ldGEuZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG5cclxuICAgICAgc2V0TmZ0cyhpdGVtcyk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJMb2FkIE5mdCBlcnJvcjogXCIsIGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCB1cGRhdGVTZWxlY3RlZE5GVCA9IGFzeW5jICgpID0+IHtcclxuICAgIG5mdHMubWFwKChuZnQpID0+IHtcclxuICAgICAgaWYgKE51bWJlcih0b2tlbklkKSA9PT0gbmZ0LnRva2VuSWQpIHtcclxuICAgICAgICBzZXRTZWxlY3RlZE5mdChuZnQpO1xyXG4gICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTkZUIE5vdCBGb3VuZFwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gYnV5TmZ0KG5mdCkge1xyXG4gICAgLyogbmVlZHMgdGhlIHVzZXIgdG8gc2lnbiB0aGUgdHJhbnNhY3Rpb24sIHNvIHdpbGwgdXNlIFdlYjNQcm92aWRlciBhbmQgc2lnbiBpdCAqL1xyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB3ZWIzTW9kYWwgPSBuZXcgV2ViM01vZGFsKCk7XHJcbiAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCB3ZWIzTW9kYWwuY29ubmVjdCgpO1xyXG4gICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihjb25uZWN0aW9uKTtcclxuICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcclxuICAgICAgICBtYXJrZXRwbGFjZUFkZHJlc3MsXHJcbiAgICAgICAgTkZUTWFya2V0cGxhY2UuYWJpLFxyXG4gICAgICAgIHNpZ25lclxyXG4gICAgICApO1xyXG4gICAgICAvKiB1c2VyIHdpbGwgYmUgcHJvbXB0ZWQgdG8gcGF5IHRoZSBhc2tpbmcgcHJvY2VzIHRvIGNvbXBsZXRlIHRoZSB0cmFuc2FjdGlvbiAqL1xyXG4gICAgICBcclxuICAgICAgY29uc3QgcHJpY2UgPSBldGhlcnMudXRpbHMucGFyc2VVbml0cyhuZnQucHJpY2UudG9TdHJpbmcoKSwgXCJldGhlclwiKTtcclxuICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCBjb250cmFjdC5jcmVhdGVNYXJrZXRTYWxlKG5mdC50b2tlbklkLCB7XHJcbiAgICAgICAgdmFsdWU6IHByaWNlLFxyXG4gICAgICB9KTtcclxuICAgICAgYXdhaXQgdHJhbnNhY3Rpb24ud2FpdCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYnV5IEVycm9yOiBcIiwgZXJyKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2lzTG9hZGVkID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGJnLWdyYXktOTAwIGl0ZW1zLWNlbnRlciB3LXNjcmVlbiBteC0yMFwiPlxyXG4gICAgICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC14bCBvYmplY3QtY292ZXIgdy0zLzYgaC05NiBteC0zNiBtdC0xMlwiXHJcbiAgICAgICAgICAgICAgc3JjPXtzZWxlY3RlZE5mdC5pbWFnZX1cclxuICAgICAgICAgICAgPjwvaWZyYW1lPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0IHctZnVsbCBteS0xMCBweC0zMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNiB3LTMvNCBtLTVcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTZ4bCBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZE5mdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC13aGl0ZSBteS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWROZnQuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB3LTEvNCBiZy1nIG0tNVwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0zeGwgIG15LTNcIj5cclxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkTmZ0LnByaWNlfSBNQVRJQ1xyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktMyB0ZXh0LXdoaXRlIHRleHQtbWQgYmctcGluay02MDAgcm91bmRlZC1tZCBweC0yMCBweS00IFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgYnV5TmZ0KHNlbGVjdGVkTmZ0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgfWNhdGNoKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQnV5IGVycm9yOlwiLCBlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBCdXkgTm93XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8aDE+IE5vdCBMb2FkZWQgPC9oMT5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBORlRQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9