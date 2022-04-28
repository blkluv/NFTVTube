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

                return function (_x) {
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
  }(); // async function buyNft(nft) {
  //     alert("calling")
  //     /* needs the user to sign the transaction, so will use Web3Provider and sign it */
  //     const web3Modal = new Web3Modal();
  //     const connection = await web3Modal.connect();
  //     const provider = new ethers.providers.Web3Provider(connection);
  //     const signer = provider.getSigner();
  //     const contract = new ethers.Contract(
  //       marketplaceAddress,
  //       NFTMarketplace.abi,
  //       signer
  //     );
  //     /* user will be prompted to pay the asking proces to complete the transaction */
  //     const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
  //     const transaction = await contract.createMarketSale(nft.tokenId, {
  //       value: price,
  //     });
  //     await transaction.wait();
  //   }


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: isLoaded ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex items-start justify-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "max-w-max m-5",
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
          className: "text-6xl text-center font-semibold text-white uppercase",
          children: selectedNft.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex items-center justify-evenly",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "text-3xl font-semibold text-white capitalize mx-3",
            children: ["price: ", selectedNft.price, " MATIC"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "my-3 text-black bg-gray-300 h-10 w-32 rounded-xl",
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
          className: "text-xl ",
          children: ["Description: ", selectedNft.description]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 118,
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
      lineNumber: 122,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTkZUcy9bdG9rZW5JZF0uanMiXSwibmFtZXMiOlsiTkZUUGFnZSIsInVzZVN0YXRlIiwibmZ0cyIsInNldE5mdHMiLCJzZWxlY3RlZE5mdCIsInNldFNlbGVjdGVkTmZ0IiwiaXNMb2FkZWQiLCJzZXRJc0xvYWRlZCIsInJvdXRlciIsInVzZVJvdXRlciIsInRva2VuSWQiLCJxdWVyeSIsInVzZUVmZmVjdCIsImxvYWRORlRzIiwidXBkYXRlU2VsZWN0ZWRORlQiLCJwcm92aWRlciIsImV0aGVycyIsImNvbnRyYWN0IiwibWFya2V0cGxhY2VBZGRyZXNzIiwiTkZUTWFya2V0cGxhY2UiLCJmZXRjaE1hcmtldEl0ZW1zIiwiZGF0YSIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpIiwidG9rZW5VUkkiLCJ0b2tlblVyaSIsImF4aW9zIiwibWV0YSIsInByaWNlIiwidG9TdHJpbmciLCJpdGVtIiwidG9OdW1iZXIiLCJzZWxsZXIiLCJvd25lciIsImltYWdlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaXRlbXMiLCJuZnQiLCJOdW1iZXIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxrQkFDSUMsK0NBQVEsQ0FBQyxFQUFELENBRFo7QUFBQSxNQUNiQyxJQURhO0FBQUEsTUFDUEMsT0FETzs7QUFBQSxtQkFFa0JGLCtDQUFRLENBQUMsSUFBRCxDQUYxQjtBQUFBLE1BRWJHLFdBRmE7QUFBQSxNQUVBQyxjQUZBOztBQUFBLG1CQUdZSiwrQ0FBUSxDQUFDLEtBQUQsQ0FIcEI7QUFBQSxNQUdiSyxRQUhhO0FBQUEsTUFHSEMsV0FIRzs7QUFLcEIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNB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QSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsZUFBZjtBQUFBLGlDQUNFO0FBQ0UscUJBQVMsRUFBQyx1Q0FEWjtBQUVFLGVBQUcsRUFBRUYsV0FBVyxDQUFDZ0M7QUFGbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFpQkU7QUFBSSxtQkFBUyxFQUFDLHlEQUFkO0FBQUEsb0JBQXlFaEMsV0FBVyxDQUFDaUM7QUFBckY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqQkYsZUFrQkU7QUFBSyxtQkFBUyxFQUFDLGtDQUFmO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFDLG1EQUFkO0FBQUEsa0NBQTBFakMsV0FBVyxDQUFDMEIsS0FBdEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFDRSxxQkFBUyxFQUFDLGtEQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsQkYsZUEyQkU7QUFBSSxtQkFBUyxFQUFDLFVBQWQ7QUFBQSxzQ0FBdUMxQixXQUFXLENBQUNrQyxXQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFETyxnQkFpQ1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFsQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUNELENBbEhEOztHQUFNdEMsTztVQUtXUyxrRDs7O0tBTFhULE87QUFvSE4sK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvTkZUcy9bdG9rZW5JZF0uODU4MmMxNThmZTAwNTY2NGY0ODguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgV2ViM01vZGFsIGZyb20gXCJ3ZWIzbW9kYWxcIjtcclxuXHJcblxyXG5pbXBvcnQgeyBtYXJrZXRwbGFjZUFkZHJlc3MgfSBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgTkZUTWFya2V0cGxhY2UgZnJvbSBcIi4uLy4uL2FydGlmYWN0cy9jb250cmFjdHMvTkZUTWFya2V0cGxhY2Uuc29sL05GVE1hcmtldHBsYWNlLmpzb25cIjtcclxuXHJcbmNvbnN0IE5GVFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW25mdHMsIHNldE5mdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZE5mdCwgc2V0U2VsZWN0ZWROZnRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHRva2VuSWQgPSByb3V0ZXIucXVlcnkudG9rZW5JZDtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IGxvYWRORlRzKCksIFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4gdXBkYXRlU2VsZWN0ZWRORlQoKSwgW25mdHNdKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gbG9hZE5GVHMoKSB7XHJcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLkpzb25ScGNQcm92aWRlcihcclxuICAgICAgXCJodHRwczovL3JwYy1tdW1iYWkubWF0aWMudG9kYXlcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcclxuICAgICAgbWFya2V0cGxhY2VBZGRyZXNzLFxyXG4gICAgICBORlRNYXJrZXRwbGFjZS5hYmksXHJcbiAgICAgIHByb3ZpZGVyXHJcbiAgICApO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGNvbnRyYWN0LmZldGNoTWFya2V0SXRlbXMoKTtcclxuXHJcbiAgICBjb25zdCBpdGVtcyA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICBkYXRhLm1hcChhc3luYyAoaSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRva2VuVXJpID0gYXdhaXQgY29udHJhY3QudG9rZW5VUkkoaS50b2tlbklkKTtcclxuICAgICAgICBjb25zdCBtZXRhID0gYXdhaXQgYXhpb3MuZ2V0KHRva2VuVXJpKTtcclxuICAgICAgICBsZXQgcHJpY2UgPSBldGhlcnMudXRpbHMuZm9ybWF0VW5pdHMoaS5wcmljZS50b1N0cmluZygpLCBcImV0aGVyXCIpO1xyXG4gICAgICAgIGxldCBpdGVtID0ge1xyXG4gICAgICAgICAgcHJpY2UsXHJcbiAgICAgICAgICB0b2tlbklkOiBpLnRva2VuSWQudG9OdW1iZXIoKSxcclxuICAgICAgICAgIHNlbGxlcjogaS5zZWxsZXIsXHJcbiAgICAgICAgICBvd25lcjogaS5vd25lcixcclxuICAgICAgICAgIGltYWdlOiBtZXRhLmRhdGEuaW1hZ2UsXHJcbiAgICAgICAgICBuYW1lOiBtZXRhLmRhdGEubmFtZSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBtZXRhLmRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgc2V0TmZ0cyhpdGVtcyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB1cGRhdGVTZWxlY3RlZE5GVCA9IGFzeW5jICgpID0+IHtcclxuICAgIG5mdHMubWFwKChuZnQpID0+IHtcclxuICAgICAgaWYgKE51bWJlcih0b2tlbklkKSA9PT0gbmZ0LnRva2VuSWQpIHtcclxuICAgICAgICBzZXRTZWxlY3RlZE5mdChuZnQpO1xyXG4gICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTkZUIE5vdCBGb3VuZFwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gYXN5bmMgZnVuY3Rpb24gYnV5TmZ0KG5mdCkge1xyXG4gIC8vICAgICBhbGVydChcImNhbGxpbmdcIilcclxuICAvLyAgICAgLyogbmVlZHMgdGhlIHVzZXIgdG8gc2lnbiB0aGUgdHJhbnNhY3Rpb24sIHNvIHdpbGwgdXNlIFdlYjNQcm92aWRlciBhbmQgc2lnbiBpdCAqL1xyXG4gIC8vICAgICBjb25zdCB3ZWIzTW9kYWwgPSBuZXcgV2ViM01vZGFsKCk7XHJcbiAgLy8gICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCB3ZWIzTW9kYWwuY29ubmVjdCgpO1xyXG4gIC8vICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihjb25uZWN0aW9uKTtcclxuICAvLyAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgLy8gICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcclxuICAvLyAgICAgICBtYXJrZXRwbGFjZUFkZHJlc3MsXHJcbiAgLy8gICAgICAgTkZUTWFya2V0cGxhY2UuYWJpLFxyXG4gIC8vICAgICAgIHNpZ25lclxyXG4gIC8vICAgICApO1xyXG5cclxuICAvLyAgICAgLyogdXNlciB3aWxsIGJlIHByb21wdGVkIHRvIHBheSB0aGUgYXNraW5nIHByb2NlcyB0byBjb21wbGV0ZSB0aGUgdHJhbnNhY3Rpb24gKi9cclxuICAvLyAgICAgY29uc3QgcHJpY2UgPSBldGhlcnMudXRpbHMucGFyc2VVbml0cyhuZnQucHJpY2UudG9TdHJpbmcoKSwgXCJldGhlclwiKTtcclxuICAvLyAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCBjb250cmFjdC5jcmVhdGVNYXJrZXRTYWxlKG5mdC50b2tlbklkLCB7XHJcbiAgLy8gICAgICAgdmFsdWU6IHByaWNlLFxyXG4gIC8vICAgICB9KTtcclxuICAvLyAgICAgYXdhaXQgdHJhbnNhY3Rpb24ud2FpdCgpO1xyXG4gIC8vICAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2lzTG9hZGVkID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1heCBtLTVcIj5cclxuICAgICAgICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIG9iamVjdC1jb3ZlciB3LWZ1bGwgaC1mdWxsXCJcclxuICAgICAgICAgICAgICAgIHNyYz17c2VsZWN0ZWROZnQuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDwvaWZyYW1lPlxyXG4gICAgICAgICAgICAgIHsvKiA8aWZyYW1lXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIG10LTQgaC01LzYgdy1zY3JlZW4gcHgtMjQgcHktMiBvYmplY3QtZmlsbFwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e3NlbGVjdGVkTmZ0LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcclxuICAgICAgICAgICAgICAgIC8vc2Nyb2xsaW5nPVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAvLyBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgIC8vIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgLy8gd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICA+PC9pZnJhbWU+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNnhsIHRleHQtY2VudGVyIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSB1cHBlcmNhc2VcIj57c2VsZWN0ZWROZnQubmFtZX08L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZXZlbmx5XCI+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBjYXBpdGFsaXplIG14LTNcIj5wcmljZToge3NlbGVjdGVkTmZ0LnByaWNlfSBNQVRJQzwvaDE+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktMyB0ZXh0LWJsYWNrIGJnLWdyYXktMzAwIGgtMTAgdy0zMiByb3VuZGVkLXhsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBCdXkgTm93XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgXCI+RGVzY3JpcHRpb246IHtzZWxlY3RlZE5mdC5kZXNjcmlwdGlvbn08L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGgxPiBOb3QgTG9hZGVkIDwvaDE+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTkZUUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==