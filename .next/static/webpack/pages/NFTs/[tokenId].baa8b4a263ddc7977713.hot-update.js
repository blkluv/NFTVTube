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
      className: "bg-red-100 h-screen w-screen flex justify-centeritems-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spinners__WEBPACK_IMPORTED_MODULE_10__.ClipLoader, {
        loading: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTkZUcy9bdG9rZW5JZF0uanMiXSwibmFtZXMiOlsiTkZUUGFnZSIsInVzZVN0YXRlIiwibmZ0cyIsInNldE5mdHMiLCJzZWxlY3RlZE5mdCIsInNldFNlbGVjdGVkTmZ0IiwiaXNMb2FkZWQiLCJzZXRJc0xvYWRlZCIsInJvdXRlciIsInVzZVJvdXRlciIsInRva2VuSWQiLCJxdWVyeSIsInVzZUVmZmVjdCIsImxvYWRORlRzIiwidXBkYXRlU2VsZWN0ZWRORlQiLCJwcm92aWRlciIsImV0aGVycyIsImNvbnRyYWN0IiwibWFya2V0cGxhY2VBZGRyZXNzIiwiTkZUTWFya2V0cGxhY2UiLCJmZXRjaE1hcmtldEl0ZW1zIiwiZGF0YSIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpIiwidG9rZW5VUkkiLCJ0b2tlblVyaSIsImF4aW9zIiwibWV0YSIsInByaWNlIiwidG9TdHJpbmciLCJpdGVtIiwidG9OdW1iZXIiLCJzZWxsZXIiLCJvd25lciIsImltYWdlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaXRlbXMiLCJjb25zb2xlIiwibG9nIiwibmZ0IiwiTnVtYmVyIiwiYnV5TmZ0Iiwid2ViM01vZGFsIiwiV2ViM01vZGFsIiwiY29ubmVjdCIsImNvbm5lY3Rpb24iLCJzaWduZXIiLCJnZXRTaWduZXIiLCJjcmVhdGVNYXJrZXRTYWxlIiwidmFsdWUiLCJ0cmFuc2FjdGlvbiIsIndhaXQiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxrQkFDSUMsK0NBQVEsQ0FBQyxFQUFELENBRFo7QUFBQSxNQUNiQyxJQURhO0FBQUEsTUFDUEMsT0FETzs7QUFBQSxtQkFFa0JGLCtDQUFRLENBQUMsSUFBRCxDQUYxQjtB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QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0RELENBcElEOztHQUFNdkQsTztVQUtXUyxrRDs7O0tBTFhULE87QUFzSU4sK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvTkZUcy9bdG9rZW5JZF0uYmFhOGI0YTI2M2RkYzc5Nzc3MTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgV2ViM01vZGFsIGZyb20gXCJ3ZWIzbW9kYWxcIjtcclxuaW1wb3J0IHtDbGlwTG9hZGVyfSBmcm9tIFwicmVhY3Qtc3Bpbm5lcnNcIlxyXG5cclxuaW1wb3J0IHsgbWFya2V0cGxhY2VBZGRyZXNzIH0gZnJvbSBcIi4uLy4uL2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IE5GVE1hcmtldHBsYWNlIGZyb20gXCIuLi8uLi9hcnRpZmFjdHMvY29udHJhY3RzL05GVE1hcmtldHBsYWNlLnNvbC9ORlRNYXJrZXRwbGFjZS5qc29uXCI7XHJcblxyXG5jb25zdCBORlRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtuZnRzLCBzZXROZnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2VsZWN0ZWROZnQsIHNldFNlbGVjdGVkTmZ0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB0b2tlbklkID0gcm91dGVyLnF1ZXJ5LnRva2VuSWQ7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiBsb2FkTkZUcygpLCBbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHVwZGF0ZVNlbGVjdGVkTkZUKCksIFtuZnRzXSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGxvYWRORlRzKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5Kc29uUnBjUHJvdmlkZXIoXHJcbiAgICAgICAgXCJodHRwczovL3JwYy1tdW1iYWkubWF0aWMudG9kYXlcIlxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXHJcbiAgICAgICAgbWFya2V0cGxhY2VBZGRyZXNzLFxyXG4gICAgICAgIE5GVE1hcmtldHBsYWNlLmFiaSxcclxuICAgICAgICBwcm92aWRlclxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgY29udHJhY3QuZmV0Y2hNYXJrZXRJdGVtcygpO1xyXG5cclxuICAgICAgY29uc3QgaXRlbXMgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgICBkYXRhLm1hcChhc3luYyAoaSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdG9rZW5VcmkgPSBhd2FpdCBjb250cmFjdC50b2tlblVSSShpLnRva2VuSWQpO1xyXG4gICAgICAgICAgY29uc3QgbWV0YSA9IGF3YWl0IGF4aW9zLmdldCh0b2tlblVyaSk7XHJcbiAgICAgICAgICBsZXQgcHJpY2UgPSBldGhlcnMudXRpbHMuZm9ybWF0VW5pdHMoaS5wcmljZS50b1N0cmluZygpLCBcImV0aGVyXCIpO1xyXG4gICAgICAgICAgbGV0IGl0ZW0gPSB7XHJcbiAgICAgICAgICAgIHByaWNlLFxyXG4gICAgICAgICAgICB0b2tlbklkOiBpLnRva2VuSWQudG9OdW1iZXIoKSxcclxuICAgICAgICAgICAgc2VsbGVyOiBpLnNlbGxlcixcclxuICAgICAgICAgICAgb3duZXI6IGkub3duZXIsXHJcbiAgICAgICAgICAgIGltYWdlOiBtZXRhLmRhdGEuaW1hZ2UsXHJcbiAgICAgICAgICAgIG5hbWU6IG1ldGEuZGF0YS5uYW1lLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogbWV0YS5kYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBzZXROZnRzKGl0ZW1zKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkxvYWQgTmZ0IGVycm9yOiBcIiwgZXJyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVNlbGVjdGVkTkZUID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbmZ0cy5tYXAoKG5mdCkgPT4ge1xyXG4gICAgICBpZiAoTnVtYmVyKHRva2VuSWQpID09PSBuZnQudG9rZW5JZCkge1xyXG4gICAgICAgIHNldFNlbGVjdGVkTmZ0KG5mdCk7XHJcbiAgICAgICAgc2V0SXNMb2FkZWQodHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJORlQgTm90IEZvdW5kXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBidXlOZnQobmZ0KSB7XHJcbiAgICAvKiBuZWVkcyB0aGUgdXNlciB0byBzaWduIHRoZSB0cmFuc2FjdGlvbiwgc28gd2lsbCB1c2UgV2ViM1Byb3ZpZGVyIGFuZCBzaWduIGl0ICovXHJcbiAgICBcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHdlYjNNb2RhbCA9IG5ldyBXZWIzTW9kYWwoKTtcclxuICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHdlYjNNb2RhbC5jb25uZWN0KCk7XHJcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGNvbm5lY3Rpb24pO1xyXG4gICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcclxuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxyXG4gICAgICAgIG1hcmtldHBsYWNlQWRkcmVzcyxcclxuICAgICAgICBORlRNYXJrZXRwbGFjZS5hYmksXHJcbiAgICAgICAgc2lnbmVyXHJcbiAgICAgICk7XHJcbiAgICAgIC8qIHVzZXIgd2lsbCBiZSBwcm9tcHRlZCB0byBwYXkgdGhlIGFza2luZyBwcm9jZXMgdG8gY29tcGxldGUgdGhlIHRyYW5zYWN0aW9uICovXHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBwcmljZSA9IGV0aGVycy51dGlscy5wYXJzZVVuaXRzKG5mdC5wcmljZS50b1N0cmluZygpLCBcImV0aGVyXCIpO1xyXG4gICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IGNvbnRyYWN0LmNyZWF0ZU1hcmtldFNhbGUobmZ0LnRva2VuSWQsIHtcclxuICAgICAgICB2YWx1ZTogcHJpY2UsXHJcbiAgICAgIH0pO1xyXG4gICAgICBhd2FpdCB0cmFuc2FjdGlvbi53YWl0KCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJidXkgRXJyb3I6IFwiLCBlcnIpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7aXNMb2FkZWQgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYmctZ3JheS05MDAgaXRlbXMtY2VudGVyIHctc2NyZWVuIG14LTIwXCI+XHJcbiAgICAgICAgICAgIDxpZnJhbWVcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIG9iamVjdC1jb3ZlciB3LTMvNiBoLTk2IG14LTM2IG10LTEyXCJcclxuICAgICAgICAgICAgICBzcmM9e3NlbGVjdGVkTmZ0LmltYWdlfVxyXG4gICAgICAgICAgICA+PC9pZnJhbWU+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgdy1mdWxsIG15LTEwIHB4LTMyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS02IHctMy80IG0tNVwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNnhsIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkTmZ0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LXdoaXRlIG15LTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZE5mdC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHctMS80IGJnLWcgbS01XCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTN4bCAgbXktM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWROZnQucHJpY2V9IE1BVElDXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteS0zIHRleHQtd2hpdGUgdGV4dC1tZCBiZy1waW5rLTYwMCByb3VuZGVkLW1kIHB4LTIwIHB5LTQgXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICBidXlOZnQoc2VsZWN0ZWROZnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9Y2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJCdXkgZXJyb3I6XCIsIGVycilcclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEJ1eSBOb3dcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtMTAwIGgtc2NyZWVuIHctc2NyZWVuIGZsZXgganVzdGlmeS1jZW50ZXJpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPENsaXBMb2FkZXIgbG9hZGluZyAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTkZUUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==