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

                return function (_x) {
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
        className: "flex flex-col bg-gray-900 items-center w-screen mx-20",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "max-w-max m-5",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("iframe", {
            className: "rounded-xl object-cover w-full",
            src: selectedNft.image
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex  justify-between w-full my-10 px-96 bg-red-100",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "my-6 w-full bg-green-300",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              className: "text-6xl font-semibold text-white uppercase",
              children: selectedNft.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-xl text-white my-5",
              children: selectedNft.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 19
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex flex-col bg-green-300",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              children: [selectedNft.price, " MATIC"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "my-3 text-white text-md bg-pink-600 rounded-md",
              children: "Buy Now"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 19
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: " Not Loaded "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 91,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTkZUcy9bdG9rZW5JZF0uanMiXSwibmFtZXMiOlsiTkZUUGFnZSIsInVzZVN0YXRlIiwibmZ0cyIsInNldE5mdHMiLCJzZWxlY3RlZE5mdCIsInNldFNlbGVjdGVkTmZ0IiwiaXNMb2FkZWQiLCJzZXRJc0xvYWRlZCIsInJvdXRlciIsInVzZVJvdXRlciIsInRva2VuSWQiLCJxdWVyeSIsInVzZUVmZmVjdCIsImxvYWRORlRzIiwidXBkYXRlU2VsZWN0ZWRORlQiLCJwcm92aWRlciIsImV0aGVycyIsImNvbnRyYWN0IiwibWFya2V0cGxhY2VBZGRyZXNzIiwiTkZUTWFya2V0cGxhY2UiLCJmZXRjaE1hcmtldEl0ZW1zIiwiZGF0YSIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpIiwidG9rZW5VUkkiLCJ0b2tlblVyaSIsImF4aW9zIiwibWV0YSIsInByaWNlIiwidG9TdHJpbmciLCJpdGVtIiwidG9OdW1iZXIiLCJzZWxsZXIiLCJvd25lciIsImltYWdlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaXRlbXMiLCJjb25zb2xlIiwibG9nIiwibmZ0IiwiTnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxrQkFDSUMsK0NBQVEsQ0FBQyxFQUFELENBRFo7QUFBQSxNQUNiQyxJQURhO0FBQUEsTUFDUEMsT0FETzs7QUFBQSxtQkFFa0JGLCtDQUFRLENBQUMsSUFBRCxDQUYxQjtBQUFBLE1BRWJHLFdBRmE7QUFBQSxNQUVBQyxjQUZBOztBQUFBLG1CQUdZSiwrQ0FBUSxDQUFDLEtBQUQsQ0FIcEI7QUFBQSxNQUdiSyxRQUhhO0FBQUEsTUFHSEMsV0FIRzs7QUFLcEIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNB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QUFvSE4sK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvTkZUcy9bdG9rZW5JZF0uYmRmOTk1OTdlNzk0ZThkNGFiNjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgV2ViM01vZGFsIGZyb20gXCJ3ZWIzbW9kYWxcIjtcclxuXHJcbmltcG9ydCB7IG1hcmtldHBsYWNlQWRkcmVzcyB9IGZyb20gXCIuLi8uLi9jb25maWdcIjtcclxuXHJcbmltcG9ydCBORlRNYXJrZXRwbGFjZSBmcm9tIFwiLi4vLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9ORlRNYXJrZXRwbGFjZS5zb2wvTkZUTWFya2V0cGxhY2UuanNvblwiO1xyXG5cclxuY29uc3QgTkZUUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbbmZ0cywgc2V0TmZ0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkTmZ0LCBzZXRTZWxlY3RlZE5mdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgdG9rZW5JZCA9IHJvdXRlci5xdWVyeS50b2tlbklkO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4gbG9hZE5GVHMoKSwgW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB1cGRhdGVTZWxlY3RlZE5GVCgpLCBbbmZ0c10pO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBsb2FkTkZUcygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuSnNvblJwY1Byb3ZpZGVyKFxyXG4gICAgICAgIFwiaHR0cHM6Ly9ycGMtbXVtYmFpLm1hdGljLnRvZGF5XCJcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxyXG4gICAgICAgIG1hcmtldHBsYWNlQWRkcmVzcyxcclxuICAgICAgICBORlRNYXJrZXRwbGFjZS5hYmksXHJcbiAgICAgICAgcHJvdmlkZXJcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGNvbnRyYWN0LmZldGNoTWFya2V0SXRlbXMoKTtcclxuXHJcbiAgICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgZGF0YS5tYXAoYXN5bmMgKGkpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHRva2VuVXJpID0gYXdhaXQgY29udHJhY3QudG9rZW5VUkkoaS50b2tlbklkKTtcclxuICAgICAgICAgIGNvbnN0IG1ldGEgPSBhd2FpdCBheGlvcy5nZXQodG9rZW5VcmkpO1xyXG4gICAgICAgICAgbGV0IHByaWNlID0gZXRoZXJzLnV0aWxzLmZvcm1hdFVuaXRzKGkucHJpY2UudG9TdHJpbmcoKSwgXCJldGhlclwiKTtcclxuICAgICAgICAgIGxldCBpdGVtID0ge1xyXG4gICAgICAgICAgICBwcmljZSxcclxuICAgICAgICAgICAgdG9rZW5JZDogaS50b2tlbklkLnRvTnVtYmVyKCksXHJcbiAgICAgICAgICAgIHNlbGxlcjogaS5zZWxsZXIsXHJcbiAgICAgICAgICAgIG93bmVyOiBpLm93bmVyLFxyXG4gICAgICAgICAgICBpbWFnZTogbWV0YS5kYXRhLmltYWdlLFxyXG4gICAgICAgICAgICBuYW1lOiBtZXRhLmRhdGEubmFtZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IG1ldGEuZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG5cclxuICAgICAgc2V0TmZ0cyhpdGVtcyk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJMb2FkIE5mdCBlcnJvcjogXCIsIGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCB1cGRhdGVTZWxlY3RlZE5GVCA9IGFzeW5jICgpID0+IHtcclxuICAgIG5mdHMubWFwKChuZnQpID0+IHtcclxuICAgICAgaWYgKE51bWJlcih0b2tlbklkKSA9PT0gbmZ0LnRva2VuSWQpIHtcclxuICAgICAgICBzZXRTZWxlY3RlZE5mdChuZnQpO1xyXG4gICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTkZUIE5vdCBGb3VuZFwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gYXN5bmMgZnVuY3Rpb24gYnV5TmZ0KG5mdCkge1xyXG4gIC8vICAgICBhbGVydChcImNhbGxpbmdcIilcclxuICAvLyAgICAgLyogbmVlZHMgdGhlIHVzZXIgdG8gc2lnbiB0aGUgdHJhbnNhY3Rpb24sIHNvIHdpbGwgdXNlIFdlYjNQcm92aWRlciBhbmQgc2lnbiBpdCAqL1xyXG4gIC8vICAgICBjb25zdCB3ZWIzTW9kYWwgPSBuZXcgV2ViM01vZGFsKCk7XHJcbiAgLy8gICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCB3ZWIzTW9kYWwuY29ubmVjdCgpO1xyXG4gIC8vICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihjb25uZWN0aW9uKTtcclxuICAvLyAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgLy8gICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcclxuICAvLyAgICAgICBtYXJrZXRwbGFjZUFkZHJlc3MsXHJcbiAgLy8gICAgICAgTkZUTWFya2V0cGxhY2UuYWJpLFxyXG4gIC8vICAgICAgIHNpZ25lclxyXG4gIC8vICAgICApO1xyXG5cclxuICAvLyAgICAgLyogdXNlciB3aWxsIGJlIHByb21wdGVkIHRvIHBheSB0aGUgYXNraW5nIHByb2NlcyB0byBjb21wbGV0ZSB0aGUgdHJhbnNhY3Rpb24gKi9cclxuICAvLyAgICAgY29uc3QgcHJpY2UgPSBldGhlcnMudXRpbHMucGFyc2VVbml0cyhuZnQucHJpY2UudG9TdHJpbmcoKSwgXCJldGhlclwiKTtcclxuICAvLyAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCBjb250cmFjdC5jcmVhdGVNYXJrZXRTYWxlKG5mdC50b2tlbklkLCB7XHJcbiAgLy8gICAgICAgdmFsdWU6IHByaWNlLFxyXG4gIC8vICAgICB9KTtcclxuICAvLyAgICAgYXdhaXQgdHJhbnNhY3Rpb24ud2FpdCgpO1xyXG4gIC8vICAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2lzTG9hZGVkID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGJnLWdyYXktOTAwIGl0ZW1zLWNlbnRlciB3LXNjcmVlbiBteC0yMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1heCBtLTVcIj5cclxuICAgICAgICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIG9iamVjdC1jb3ZlciB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtzZWxlY3RlZE5mdC5pbWFnZX1cclxuICAgICAgICAgICAgICA+PC9pZnJhbWU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggIGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgbXktMTAgcHgtOTYgYmctcmVkLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS02IHctZnVsbCBiZy1ncmVlbi0zMDBcIj5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNnhsIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWROZnQubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LXdoaXRlIG15LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWROZnQuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGJnLWdyZWVuLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDE+e3NlbGVjdGVkTmZ0LnByaWNlfSBNQVRJQzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibXktMyB0ZXh0LXdoaXRlIHRleHQtbWQgYmctcGluay02MDAgcm91bmRlZC1tZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEJ1eSBOb3dcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8aDE+IE5vdCBMb2FkZWQgPC9oMT5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBORlRQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9