self["webpackHotUpdate_N_E"]("pages/NFTs/[tokenId]",{

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stylis */ "./node_modules/@emotion/cache/node_modules/stylis/index.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js");





var last = function last(arr) {
  return arr.length ? arr[arr.length - 1] : null;
}; // based on https://github.com/thysultan/stylis.js/blob/e6843c373ebcbbfade25ebcc23f540ed8508da0a/src/Tokenizer.js#L239-L244


var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;

  while (true) {
    previous = character;
    character = (0,stylis__WEBPACK_IMPORTED_MODULE_3__.peek)(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }

    if ((0,stylis__WEBPACK_IMPORTED_MODULE_3__.token)(character)) {
      break;
    }

    (0,stylis__WEBPACK_IMPORTED_MODULE_3__.next)();
  }

  return (0,stylis__WEBPACK_IMPORTED_MODULE_3__.slice)(begin, stylis__WEBPACK_IMPORTED_MODULE_3__.position);
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch ((0,stylis__WEBPACK_IMPORTED_MODULE_3__.token)(character)) {
      case 0:
        // &\f
        if (character === 38 && (0,stylis__WEBPACK_IMPORTED_MODULE_3__.peek)() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += identifierWithPointTracking(stylis__WEBPACK_IMPORTED_MODULE_3__.position - 1, points, index);
        break;

      case 2:
        parsed[index] += (0,stylis__WEBPACK_IMPORTED_MODULE_3__.delimit)(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = (0,stylis__WEBPACK_IMPORTED_MODULE_3__.peek)() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += (0,stylis__WEBPACK_IMPORTED_MODULE_3__.from)(character);
    }
  } while (character = (0,stylis__WEBPACK_IMPORTED_MODULE_3__.next)());

  return parsed;
};

var getRules = function getRules(value, points) {
  return (0,stylis__WEBPACK_IMPORTED_MODULE_3__.dealloc)(toRules((0,stylis__WEBPACK_IMPORTED_MODULE_3__.alloc)(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }

  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};
var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';

var isIgnoringComment = function isIgnoringComment(element) {
  return !!element && element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};

var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
  return function (element, index, children) {
    if (element.type !== 'rule') return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);

    if (unsafePseudoClasses && cache.compat !== true) {
      var prevElement = index > 0 ? children[index - 1] : null;

      if (prevElement && isIgnoringComment(last(prevElement.children))) {
        return;
      }

      unsafePseudoClasses.forEach(function (unsafePseudoClass) {
        console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
      });
    }
  };
};

var isImportRule = function isImportRule(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};

var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }

  return false;
}; // use this to remove incorrect elements from further processing
// so they don't get handed to the `sheet` (or anything else)
// as that could potentially lead to additional logs which in turn could be overhelming to the user


var nullifyElement = function nullifyElement(element) {
  element.type = '';
  element.value = '';
  element["return"] = '';
  element.children = '';
  element.props = '';
};

var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }

  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};

var defaultStylisPlugins = [stylis__WEBPACK_IMPORTED_MODULE_3__.prefixer];

var createCache = function createCache(options) {
  var key = options.key;

  if ( true && !key) {
    throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\n" + "If multiple caches share the same key they might \"fight\" for each other's style elements.");
  }

  if ( key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  if (true) {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {}; // $FlowFixMe

  var container;
  var nodesToHydrate = [];

  {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  if (true) {
    omnipresentPlugins.push(createUnsafeSelectorsAlarm({
      get compat() {
        return cache.compat;
      }

    }), incorrectImportAlarm);
  }

  {
    var currentSheet;
    var finalizingPlugins = [stylis__WEBPACK_IMPORTED_MODULE_3__.stringify,  true ? function (element) {
      if (!element.root) {
        if (element["return"]) {
          currentSheet.insert(element["return"]);
        } else if (element.value && element.type !== stylis__WEBPACK_IMPORTED_MODULE_3__.COMMENT) {
          // insert empty rule in non-production environments
          // so @emotion/jest can grab `key` from the (JS)DOM for caches without any rules inserted yet
          currentSheet.insert(element.value + "{}");
        }
      }
    } : 0];
    var serializer = (0,stylis__WEBPACK_IMPORTED_MODULE_3__.middleware)(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return (0,stylis__WEBPACK_IMPORTED_MODULE_3__.serialize)((0,stylis__WEBPACK_IMPORTED_MODULE_3__.compile)(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      if ( true && serialized.map !== undefined) {
        currentSheet = {
          insert: function insert(rule) {
            sheet.insert(rule + serialized.map);
          }
        };
      }

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }

  var cache = {
    key: key,
    sheet: new _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__.StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

/* harmony default export */ __webpack_exports__["default"] = (createCache);


/***/ }),

/***/ "./node_modules/@emotion/cache/node_modules/stylis/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@emotion/cache/node_modules/stylis/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Enum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Enum.js */ "./node_modules/@emotion/cache/node_modules/stylis/src/Enum.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _src_Enum_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _src_Enum_js__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _src_Utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Utility.js */ "./node_modules/@emotion/cache/node_modules/stylis/src/Utility.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _src_Utility_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _src_Utility_js__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _src_Parser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/Parser.js */ "./node_modules/@emotion/cache/node_modules/stylis/src/Parser.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _src_Parser_js__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _src_Parser_js__WEBPACK_IMPORTED_MODULE_2__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _src_Prefixer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/Prefixer.js */ "./node_modules/@emotion/cache/node_modules/stylis/src/Prefixer.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _src_Prefixer_js__WEBPACK_IMPORTED_MODULE_3__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _src_Prefixer_js__WEBPACK_IMPORTED_MODULE_3__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _src_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/Tokenizer.js */ "./node_modules/@emotion/cache/node_modules/stylis/src/Tokenizer.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _src_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _src_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _src_Serializer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/Serializer.js */ "./node_modules/@emotion/cache/node_modules/stylis/src/Serializer.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _src_Serializer_js__WEBPACK_IMPORTED_MODULE_5__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _src_Serializer_js__WEBPACK_IMPORTED_MODULE_5__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _src_Middleware_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/Middleware.js */ "./node_modules/@emotion/cache/node_modules/stylis/src/Middleware.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _src_Middleware_js__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _src_Middleware_js__WEBPACK_IMPORTED_MODULE_6__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);









/***/ }),

/***/ "./node_modules/@emotion/cache/node_modules/stylis/src/Enum.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/cache/node_modules/stylis/src/Enum.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MS": function() { return /* binding */ MS; },
/* harmony export */   "MOZ": function() { return /* binding */ MOZ; },
/* harmony export */   "WEBKIT": function() { return /* binding */ WEBKIT; },
/* harmony export */   "COMMENT": function() { return /* binding */ COMMENT; },
/* harmony export */   "RULESET": function() { return /* binding */ RULESET; },
/* harmony export */   "DECLARATION": function() { return /* binding */ DECLARATION; },
/* harmony export */   "PAGE": function() { return /* binding */ PAGE; },
/* harmony export */   "MEDIA": function() { return /* binding */ MEDIA; },
/* harmony export */   "IMPORT": function() { return /* binding */ IMPORT; },
/* harmony export */   "CHARSET": function() { return /* binding */ CHARSET; },
/* harmony export */   "VIEWPORT": function() { return /* binding */ VIEWPORT; },
/* harmony export */   "SUPPORTS": function() { return /* binding */ SUPPORTS; },
/* harmony export */   "DOCUMENT": function() { return /* binding */ DOCUMENT; },
/* harmony export */   "NAMESPACE": function() { return /* binding */ NAMESPACE; },
/* harmony export */   "KEYFRAMES": function() { return /* binding */ KEYFRAMES; },
/* harmony export */   "FONT_FACE": function() { return /* binding */ FONT_FACE; },
/* harmony export */   "COUNTER_STYLE": function() { return /* binding */ COUNTER_STYLE; },
/* harmony export */   "FONT_FEATURE_VALUES": function() { return /* binding */ FONT_FEATURE_VALUES; }
/* harmony export */ });
var MS = '-ms-'
var MOZ = '-moz-'
var WEBKIT = '-webkit-'

var COMMENT = 'comm'
var RULESET = 'rule'
var DECLARATION = 'decl'

var PAGE = '@page'
var MEDIA = '@media'
var IMPORT = '@import'
var CHARSET = '@charset'
var VIEWPORT = '@viewport'
var SUPPORTS = '@supports'
var DOCUMENT = '@document'
var NAMESPACE = '@namespace'
var KEYFRAMES = '@keyframes'
var FONT_FACE = '@font-face'
var COUNTER_STYLE = '@counter-style'
var FONT_FEATURE_VALUES = '@font-feature-values'


/***/ }),

/***/ "./node_modules/@emotion/cache/node_modules/stylis/src/Middleware.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@emotion/cache/node_modules/stylis/src/Middleware.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "middleware": function() { return /* binding */ middleware; },
/* harmony export */   "rulesheet": function() { return /* binding */ rulesheet; },
/* harmony export */   "prefixer": function() { return /* binding */ prefixer; },
/* harmony export */   "namespace": function() { return /* binding */ namespace; }
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/@emotion/cache/node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/@emotion/cache/node_modules/stylis/src/Utility.js");
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tokenizer.js */ "./node_modules/@emotion/cache/node_modules/stylis/src/Tokenizer.js");
/* harmony import */ var _Serializer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Serializer.js */ "./node_modules/@emotion/cache/node_modules/stylis/src/Serializer.js");
/* harmony import */ var _Prefixer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Prefixer.js */ "./node_modules/@emotion/cache/node_modules/stylis/src/Prefixer.js");






/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(collection)

	return function (element, index, children, callback) {
		var output = ''

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || ''

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element)
	}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */
function prefixer (element, index, children, callback) {
	if (element.length > -1)
		if (!element.return)
			switch (element.type) {
				case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.DECLARATION: element.return = (0,_Prefixer_js__WEBPACK_IMPORTED_MODULE_2__.prefix)(element.value, element.length)
					break
				case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.KEYFRAMES:
					return (0,_Serializer_js__WEBPACK_IMPORTED_MODULE_3__.serialize)([(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {value: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(element.value, '@', '@' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT)})], callback)
				case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET:
					if (element.length)
						return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.combine)(element.props, function (value) {
							switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /(::plac\w+|:read-\w+)/)) {
								// :read-(only|write)
								case ':read-only': case ':read-write':
									return (0,_Serializer_js__WEBPACK_IMPORTED_MODULE_3__.serialize)([(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(read-\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + '$1')]})], callback)
								// :placeholder
								case '::placeholder':
									return (0,_Serializer_js__WEBPACK_IMPORTED_MODULE_3__.serialize)([
										(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'input-$1')]}),
										(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + '$1')]}),
										(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'input-$1')]})
									], callback)
							}

							return ''
						})
			}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 */
function namespace (element) {
	switch (element.type) {
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET:
			element.props = element.props.map(function (value) {
				return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.combine)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.tokenize)(value), function (value, index, children) {
					switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 0)) {
						// \f
						case 12:
							return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(value, 1, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(value))
						// \0 ( + > ~
						case 0: case 40: case 43: case 62: case 126:
							return value
						// :
						case 58:
							if (children[++index] === 'global')
								children[index] = '', children[++index] = '\f' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(children[index], index = 1, -1)
						// \s
						case 32:
							return index === 1 ? '' : value
						default:
							switch (index) {
								case 0: element = value
									return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children) > 1 ? '' : value
								case index = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children) - 1: case 2:
									return index === 2 ? value + element + element : value + element
								default:
									return value
							}
					}
				})
			})
	}
}


/***/ }),

/***/ "./node_modules/@emotion/cache/node_modules/stylis/src/Parser.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/cache/node_modules/stylis/src/Parser.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compile": function() { return /* binding */ compile; },
/* harmony export */   "parse": function() { return /* binding */ parse; },
/* harmony export */   "ruleset": function() { return /* binding */ ruleset; },
/* harmony export */   "comment": function() { return /* binding */ comment; },
/* harmony export */   "declaration": function() { return /* binding */ declaration; }
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/@emotion/cache/node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/@emotion/cache/node_modules/stylis/src/Utility.js");
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tokenizer.js */ "./node_modules/@emotion/cache/node_modules/stylis/src/Tokenizer.js");




/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.dealloc)(parse('', null, null, null, [''], value = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.alloc)(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0
	var offset = 0
	var length = pseudo
	var atrule = 0
	var property = 0
	var previous = 0
	var variable = 1
	var scanning = 1
	var ampersand = 1
	var character = 0
	var type = ''
	var props = rules
	var children = rulesets
	var reference = rule
	var characters = type

	while (scanning)
		switch (previous = character, character = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)()) {
			// (
			case 40:
				if (previous != 108 && characters.charCodeAt(length - 1) == 58) {
					if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.indexof)(characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)(character), '&', '&\f'), '&\f') != -1)
						ampersand = -1
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)(character)
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.whitespace)(previous)
				break
			// \
			case 92:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.escaping)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)() - 1, 7)
				continue
			// /
			case 47:
				switch ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)()) {
					case 42: case 47:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(comment((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.commenter)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)(), (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)()), root, parent), declarations)
						break
					default:
						characters += '/'
				}
				break
			// {
			case 123 * variable:
				points[index++] = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) * ampersand
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0
					// ;
					case 59 + offset:
						if (property > 0 && ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) - length))
							(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(characters, ' ', '') + ';', rule, parent, length - 2), declarations)
						break
					// @ ;
					case 59: characters += ';'
					// { rule/at-rule
					default:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets)

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children)
							else
								switch (atrule) {
									// d m s
									case 100: case 109: case 115:
										parse(value, reference, reference, rule && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children)
										break
									default:
										parse(characters, reference, reference, reference, [''], children, 0, points, children)
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo
				break
			// :
			case 58:
				length = 1 + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters), property = previous
			default:
				if (variable < 1)
					if (character == 123)
						--variable
					else if (character == 125 && variable++ == 0 && (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.prev)() == 125)
						continue

				switch (characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.from)(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1)
						break
					// ,
					case 44:
						points[index++] = ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) - 1) * ampersand, ampersand = 1
						break
					// @
					case 64:
						// -
						if ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)() === 45)
							characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)())

						atrule = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)(), offset = length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(type = characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.identifier)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)())), character++
						break
					// -
					case 45:
						if (previous === 45 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) == 2)
							variable = 0
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
	var post = offset - 1
	var rule = offset === 0 ? rules : ['']
	var size = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.sizeof)(rule)

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, post + 1, post = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.abs)(j = points[i])), z = value; x < size; ++x)
			if (z = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.trim)(j > 0 ? rule[x] + ' ' + y : (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(y, /&\f/g, rule[x])))
				props[k++] = z

	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, offset === 0 ? _Enum_js__WEBPACK_IMPORTED_MODULE_2__.RULESET : type, props, children, length)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */
function comment (value, root, parent) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__.COMMENT, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.from)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.char)()), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, 2, -2), 0)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */
function declaration (value, root, parent, length) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__.DECLARATION, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, 0, length), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, length + 1, -1), length)
}


/***/ }),

/***/ "./node_modules/@emotion/cache/node_modules/stylis/src/Prefixer.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@emotion/cache/node_modules/stylis/src/Prefixer.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prefix": function() { return /* binding */ prefix; }
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/@emotion/cache/node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/@emotion/cache/node_modules/stylis/src/Utility.js");



/**
 * @param {string} value
 * @param {number} length
 * @return {string}
 */
function prefix (value, length) {
	switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.hash)(value, length)) {
		// color-adjust
		case 5103:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'print-' + value + value
		// animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
		case 5737: case 4201: case 3177: case 3433: case 1641: case 4457: case 2921:
		// text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
		case 5572: case 6356: case 5844: case 3191: case 6645: case 3005:
		// mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
		case 6391: case 5879: case 5623: case 6135: case 4599: case 4855:
		// background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
		case 4215: case 6389: case 5109: case 5365: case 5621: case 3829:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + value
		// appearance, user-select, transform, hyphens, text-size-adjust
		case 5349: case 4246: case 4810: case 6968: case 2756:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + value + value
		// flex, flex-direction
		case 6828: case 4268:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + value + value
		// order
		case 6165:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-' + value + value
		// align-items
		case 5187:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(\w+).+(:[^]+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-$1$2' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-$1$2') + value
		// align-self
		case 5443:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-item-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /flex-|-self/, '') + value
		// align-content
		case 4675:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-line-pack' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /align-content|flex-|-self/, '') + value
		// flex-shrink
		case 5548:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'shrink', 'negative') + value
		// flex-basis
		case 5292:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'basis', 'preferred-size') + value
		// flex-grow
		case 6060:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-grow', '') + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'grow', 'positive') + value
		// transition
		case 4554:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /([^-])(transform)/g, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2') + value
		// cursor
		case 6187:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(zoom-|grab)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1'), /(image-set)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1'), value, '') + value
		// background, background-image
		case 5495: case 3959:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(image-set\([^]*)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1' + '$`$1')
		// justify-content
		case 4968:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)(flex-)?(.*)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-pack:$3' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + value
		// (margin|padding)-inline-(start|end)
		case 4095: case 3583: case 4068: case 2532:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+)-inline(.+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1$2') + value
		// (min|max)?(width|height|inline-size|block-size)
		case 8116: case 7059: case 5753: case 5535:
		case 5445: case 5701: case 4933: case 4677:
		case 5533: case 5789: case 5021: case 4765:
			// stretch, max-content, min-content, fill-available
			if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(value) - 1 - length > 6)
				switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 1)) {
					// (m)ax-content, (m)in-content
					case 109:
						// -
						if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 4) !== 45)
							break
					// (f)ill-available, (f)it-content
					case 102:
						return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)(.+)-([^]+)/, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2-$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 3) == 108 ? '$3' : '$2-$3')) + value
					// (s)tretch
					case 115:
						return ~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(value, 'stretch') ? prefix((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'stretch', 'fill-available'), length) + value : value
				}
			break
		// position: sticky
		case 4949:
			// (s)ticky?
			if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 1) !== 115)
				break
		// display: (flex|inline-flex)
		case 6444:
			switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(value) - 3 - (~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(value, '!important') && 10))) {
				// stic(k)y
				case 107:
					return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, ':', ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT) + value
				// (inline-)?fl(e)x
				case 101:
					return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + '$2box$3') + value
			}
			break
		// writing-mode
		case 5936:
			switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 11)) {
				// vertical-l(r)
				case 114:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb') + value
				// vertical-r(l)
				case 108:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value
				// horizontal(-)tb
				case 45:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'lr') + value
			}

			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + value + value
	}

	return value
}


/***/ }),

/***/ "./node_modules/@emotion/cache/node_modules/stylis/src/Serializer.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@emotion/cache/node_modules/stylis/src/Serializer.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serialize": function() { return /* binding */ serialize; },
/* harmony export */   "stringify": function() { return /* binding */ stringify; }
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/@emotion/cache/node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/@emotion/cache/node_modules/stylis/src/Utility.js");



/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = ''
	var length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children)

	for (var i = 0; i < length; i++)
		output += callback(children[i], i, children, callback) || ''

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.IMPORT: case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.DECLARATION: return element.return = element.return || element.value
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.COMMENT: return ''
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET: element.value = element.props.join(',')
	}

	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}


/***/ }),

/***/ "./node_modules/@emotion/cache/node_modules/stylis/src/Tokenizer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@emotion/cache/node_modules/stylis/src/Tokenizer.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "line": function() { return /* binding */ line; },
/* harmony export */   "column": function() { return /* binding */ column; },
/* harmony export */   "length": function() { return /* binding */ length; },
/* harmony export */   "position": function() { return /* binding */ position; },
/* harmony export */   "character": function() { return /* binding */ character; },
/* harmony export */   "characters": function() { return /* binding */ characters; },
/* harmony export */   "node": function() { return /* binding */ node; },
/* harmony export */   "copy": function() { return /* binding */ copy; },
/* harmony export */   "char": function() { return /* binding */ char; },
/* harmony export */   "prev": function() { return /* binding */ prev; },
/* harmony export */   "next": function() { return /* binding */ next; },
/* harmony export */   "peek": function() { return /* binding */ peek; },
/* harmony export */   "caret": function() { return /* binding */ caret; },
/* harmony export */   "slice": function() { return /* binding */ slice; },
/* harmony export */   "token": function() { return /* binding */ token; },
/* harmony export */   "alloc": function() { return /* binding */ alloc; },
/* harmony export */   "dealloc": function() { return /* binding */ dealloc; },
/* harmony export */   "delimit": function() { return /* binding */ delimit; },
/* harmony export */   "tokenize": function() { return /* binding */ tokenize; },
/* harmony export */   "whitespace": function() { return /* binding */ whitespace; },
/* harmony export */   "tokenizer": function() { return /* binding */ tokenizer; },
/* harmony export */   "escaping": function() { return /* binding */ escaping; },
/* harmony export */   "delimiter": function() { return /* binding */ delimiter; },
/* harmony export */   "commenter": function() { return /* binding */ commenter; },
/* harmony export */   "identifier": function() { return /* binding */ identifier; }
/* harmony export */ });
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/@emotion/cache/node_modules/stylis/src/Utility.js");


var line = 1
var column = 1
var length = 0
var position = 0
var character = 0
var characters = ''

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy (root, props) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.assign)(node('', null, null, '', null, null, 0), root, {length: -root.length}, props)
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, --position) : 0

	if (column--, character === 10)
		column = 1, line--

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < length ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, position++) : 0

	if (column++, character === 10)
		column = 1, line++

	return character
}

/**
 * @return {number}
 */
function peek () {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.trim)(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {string} value
 * @return {string[]}
 */
function tokenize (value) {
	return dealloc(tokenizer(alloc(value)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next()
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {string[]} children
 * @return {string[]}
 */
function tokenizer (children) {
	while (next())
		switch (token(character)) {
			case 0: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(identifier(position - 1), children)
				break
			case 2: ;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(delimit(character), children)
				break
			default: ;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.from)(character), children)
		}

	return children
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character)
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type)
				break
			// \
			case 92:
				next()
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.from)(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next()

	return slice(index, position)
}


/***/ }),

/***/ "./node_modules/@emotion/cache/node_modules/stylis/src/Utility.js":
/*!************************************************************************!*\
  !*** ./node_modules/@emotion/cache/node_modules/stylis/src/Utility.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "abs": function() { return /* binding */ abs; },
/* harmony export */   "from": function() { return /* binding */ from; },
/* harmony export */   "assign": function() { return /* binding */ assign; },
/* harmony export */   "hash": function() { return /* binding */ hash; },
/* harmony export */   "trim": function() { return /* binding */ trim; },
/* harmony export */   "match": function() { return /* binding */ match; },
/* harmony export */   "replace": function() { return /* binding */ replace; },
/* harmony export */   "indexof": function() { return /* binding */ indexof; },
/* harmony export */   "charat": function() { return /* binding */ charat; },
/* harmony export */   "substr": function() { return /* binding */ substr; },
/* harmony export */   "strlen": function() { return /* binding */ strlen; },
/* harmony export */   "sizeof": function() { return /* binding */ sizeof; },
/* harmony export */   "append": function() { return /* binding */ append; },
/* harmony export */   "combine": function() { return /* binding */ combine; }
/* harmony export */ });
/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode

/**
 * @param {object}
 * @return {object}
 */
var assign = Object.assign

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3)
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */
function indexof (value, search) {
	return value.indexOf(search)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine (array, callback) {
	return array.map(callback).join('')
}


/***/ }),

/***/ "./node_modules/@emotion/hash/dist/hash.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/hash.browser.esm.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["default"] = (murmur2);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0__);


// this file isolates this package that is not tree-shakeable
// and if this module doesn't actually contain any logic of its own
// then Rollup just use 'hoist-non-react-statics' directly in other chunks

var hoistNonReactStatics = (function (targetComponent, sourceComponent) {
  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___default()(targetComponent, sourceComponent);
});

/* harmony default export */ __webpack_exports__["default"] = (hoistNonReactStatics);


/***/ }),

/***/ "./node_modules/@emotion/react/dist/emotion-element-cbed451f.browser.esm.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@emotion/react/dist/emotion-element-cbed451f.browser.esm.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": function() { return /* binding */ CacheProvider; },
/* harmony export */   "E": function() { return /* binding */ Emotion; },
/* harmony export */   "T": function() { return /* binding */ ThemeContext; },
/* harmony export */   "_": function() { return /* binding */ __unsafe_useEmotionCache; },
/* harmony export */   "a": function() { return /* binding */ useTheme; },
/* harmony export */   "b": function() { return /* binding */ ThemeProvider; },
/* harmony export */   "c": function() { return /* binding */ createEmotionProps; },
/* harmony export */   "d": function() { return /* binding */ withTheme; },
/* harmony export */   "h": function() { return /* binding */ hasOwnProperty; },
/* harmony export */   "u": function() { return /* binding */ useInsertionEffectMaybe; },
/* harmony export */   "w": function() { return /* binding */ withEmotionCache; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");
/* harmony import */ var _isolated_hnrs_dist_emotion_react_isolated_hnrs_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js */ "./node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js");









var hasOwnProperty = {}.hasOwnProperty;

var EmotionCacheContext = /* #__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */(0,_emotion_cache__WEBPACK_IMPORTED_MODULE_1__.default)({
  key: 'css'
}) : null);

if (true) {
  EmotionCacheContext.displayName = 'EmotionCacheContext';
}

var CacheProvider = EmotionCacheContext.Provider;
var __unsafe_useEmotionCache = function useEmotionCache() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(EmotionCacheContext);
};

var withEmotionCache = function withEmotionCache(func) {
  // $FlowFixMe
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
    // the cache will never be null in the browser
    var cache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(EmotionCacheContext);
    return func(props, cache, ref);
  });
};

var ThemeContext = /* #__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});

if (true) {
  ThemeContext.displayName = 'EmotionThemeContext';
}

var useTheme = function useTheme() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);
};

var getTheme = function getTheme(outerTheme, theme) {
  if (typeof theme === 'function') {
    var mergedTheme = theme(outerTheme);

    if ( true && (mergedTheme == null || typeof mergedTheme !== 'object' || Array.isArray(mergedTheme))) {
      throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
    }

    return mergedTheme;
  }

  if ( true && (theme == null || typeof theme !== 'object' || Array.isArray(theme))) {
    throw new Error('[ThemeProvider] Please make your theme prop a plain object');
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__.default)({}, outerTheme, theme);
};

var createCacheWithTheme = /* #__PURE__ */(0,_emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__.default)(function (outerTheme) {
  return (0,_emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__.default)(function (theme) {
    return getTheme(outerTheme, theme);
  });
});
var ThemeProvider = function ThemeProvider(props) {
  var theme = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);

  if (props.theme !== theme) {
    theme = createCacheWithTheme(theme)(props.theme);
  }

  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ThemeContext.Provider, {
    value: theme
  }, props.children);
};
function withTheme(Component) {
  var componentName = Component.displayName || Component.name || 'Component';

  var render = function render(props, ref) {
    var theme = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__.default)({
      theme: theme,
      ref: ref
    }, props));
  }; // $FlowFixMe


  var WithTheme = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render);
  WithTheme.displayName = "WithTheme(" + componentName + ")";
  return (0,_isolated_hnrs_dist_emotion_react_isolated_hnrs_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.default)(WithTheme, Component);
}

var getLastPart = function getLastPart(functionName) {
  // The match may be something like 'Object.createEmotionProps' or
  // 'Loader.prototype.render'
  var parts = functionName.split('.');
  return parts[parts.length - 1];
};

var getFunctionNameFromStackTraceLine = function getFunctionNameFromStackTraceLine(line) {
  // V8
  var match = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(line);
  if (match) return getLastPart(match[1]); // Safari / Firefox

  match = /^([A-Za-z0-9$.]+)@/.exec(line);
  if (match) return getLastPart(match[1]);
  return undefined;
};

var internalReactFunctionNames = /* #__PURE__ */new Set(['renderWithHooks', 'processChild', 'finishClassComponent', 'renderToString']); // These identifiers come from error stacks, so they have to be valid JS
// identifiers, thus we only need to replace what is a valid character for JS,
// but not for CSS.

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var getLabelFromStackTrace = function getLabelFromStackTrace(stackTrace) {
  if (!stackTrace) return undefined;
  var lines = stackTrace.split('\n');

  for (var i = 0; i < lines.length; i++) {
    var functionName = getFunctionNameFromStackTraceLine(lines[i]); // The first line of V8 stack traces is just "Error"

    if (!functionName) continue; // If we reach one of these, we have gone too far and should quit

    if (internalReactFunctionNames.has(functionName)) break; // The component name is the first function in the stack that starts with an
    // uppercase letter

    if (/^[A-Z]/.test(functionName)) return sanitizeIdentifier(functionName);
  }

  return undefined;
};

var useInsertionEffect = react__WEBPACK_IMPORTED_MODULE_0__['useInsertion' + 'Effect'] ? react__WEBPACK_IMPORTED_MODULE_0__['useInsertion' + 'Effect'] : function useInsertionEffect(create) {
  create();
};
function useInsertionEffectMaybe(create) {

  useInsertionEffect(create);
}

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
  if ( true && typeof props.css === 'string' && // check if there is a css declaration
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + props.css + "`");
  }

  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type; // For performance, only call getLabelFromStackTrace in development and when
  // the label hasn't already been computed

  if ( true && !!props.css && (typeof props.css !== 'object' || typeof props.css.name !== 'string' || props.css.name.indexOf('-') === -1)) {
    var label = getLabelFromStackTrace(new Error().stack);
    if (label) newProps[labelPropName] = label;
  }

  return newProps;
};

var Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
      serialized = _ref.serialized,
      isStringTag = _ref.isStringTag;
  (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_4__.registerStyles)(cache, serialized, isStringTag);
  var rules = useInsertionEffectMaybe(function () {
    return (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_4__.insertStyles)(cache, serialized, isStringTag);
  });

  return null;
};

var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
  var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var WrappedComponent = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_4__.getRegisteredStyles)(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__.serializeStyles)(registeredStyles, undefined, (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext));

  if ( true && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__.serializeStyles)([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( false || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Insertion, {
    cache: cache,
    serialized: serialized,
    isStringTag: typeof WrappedComponent === 'string'
  }), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrappedComponent, newProps));
});

if (true) {
  Emotion.displayName = 'EmotionCssPropInternal';
}




/***/ }),

/***/ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheProvider": function() { return /* reexport safe */ _emotion_element_cbed451f_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.C; },
/* harmony export */   "ThemeContext": function() { return /* reexport safe */ _emotion_element_cbed451f_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.T; },
/* harmony export */   "ThemeProvider": function() { return /* reexport safe */ _emotion_element_cbed451f_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.b; },
/* harmony export */   "__unsafe_useEmotionCache": function() { return /* reexport safe */ _emotion_element_cbed451f_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__._; },
/* harmony export */   "useTheme": function() { return /* reexport safe */ _emotion_element_cbed451f_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.a; },
/* harmony export */   "withEmotionCache": function() { return /* reexport safe */ _emotion_element_cbed451f_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.w; },
/* harmony export */   "withTheme": function() { return /* reexport safe */ _emotion_element_cbed451f_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.d; },
/* harmony export */   "ClassNames": function() { return /* binding */ ClassNames; },
/* harmony export */   "Global": function() { return /* binding */ Global; },
/* harmony export */   "createElement": function() { return /* binding */ jsx; },
/* harmony export */   "css": function() { return /* binding */ css; },
/* harmony export */   "jsx": function() { return /* binding */ jsx; },
/* harmony export */   "keyframes": function() { return /* binding */ keyframes; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js");
/* harmony import */ var _emotion_element_cbed451f_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emotion-element-cbed451f.browser.esm.js */ "./node_modules/@emotion/react/dist/emotion-element-cbed451f.browser.esm.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js");












var pkg = {
	name: "@emotion/react",
	version: "11.9.0",
	main: "dist/emotion-react.cjs.js",
	module: "dist/emotion-react.esm.js",
	browser: {
		"./dist/emotion-react.cjs.js": "./dist/emotion-react.browser.cjs.js",
		"./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
	},
	types: "types/index.d.ts",
	files: [
		"src",
		"dist",
		"jsx-runtime",
		"jsx-dev-runtime",
		"_isolated-hnrs",
		"types/*.d.ts",
		"macro.js",
		"macro.d.ts",
		"macro.js.flow"
	],
	sideEffects: false,
	author: "Emotion Contributors",
	license: "MIT",
	scripts: {
		"test:typescript": "dtslint types"
	},
	dependencies: {
		"@babel/runtime": "^7.13.10",
		"@emotion/babel-plugin": "^11.7.1",
		"@emotion/cache": "^11.7.1",
		"@emotion/serialize": "^1.0.3",
		"@emotion/utils": "^1.1.0",
		"@emotion/weak-memoize": "^0.2.5",
		"hoist-non-react-statics": "^3.3.1"
	},
	peerDependencies: {
		"@babel/core": "^7.0.0",
		react: ">=16.8.0"
	},
	peerDependenciesMeta: {
		"@babel/core": {
			optional: true
		},
		"@types/react": {
			optional: true
		}
	},
	devDependencies: {
		"@babel/core": "^7.13.10",
		"@emotion/css": "11.9.0",
		"@emotion/css-prettifier": "1.0.1",
		"@emotion/server": "11.4.0",
		"@emotion/styled": "11.8.1",
		"@types/react": "^16.9.11",
		dtslint: "^4.2.1",
		"html-tag-names": "^1.1.2",
		react: "16.14.0",
		"svg-tag-names": "^1.1.1",
		typescript: "^4.5.5"
	},
	repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
	publishConfig: {
		access: "public"
	},
	"umd:main": "dist/emotion-react.umd.min.js",
	preconstruct: {
		entrypoints: [
			"./index.js",
			"./jsx-runtime.js",
			"./jsx-dev-runtime.js",
			"./_isolated-hnrs.js"
		],
		umdName: "emotionReact"
	}
};

var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !_emotion_element_cbed451f_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.h.call(props, 'css')) {
    // $FlowFixMe
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = _emotion_element_cbed451f_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.E;
  createElementArgArray[1] = (0,_emotion_element_cbed451f_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.c)(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
};

var useInsertionEffect = react__WEBPACK_IMPORTED_MODULE_0__['useInsertion' + 'Effect'] ? react__WEBPACK_IMPORTED_MODULE_0__['useInsertion' + 'Effect'] : react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;
var warnedAboutCssPropForGlobal = false; // maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag

var Global = /* #__PURE__ */(0,_emotion_element_cbed451f_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.w)(function (props, cache) {
  if ( true && !warnedAboutCssPropForGlobal && ( // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;
  var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_7__.serializeStyles)([styles], undefined, (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_emotion_element_cbed451f_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.T));
  // but it is based on a constant that will never change at runtime
  // it's effectively like having two implementations and switching them out
  // so it's not actually breaking anything


  var sheetRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  useInsertionEffect(function () {
    var key = cache.key + "-global"; // use case of https://github.com/emotion-js/emotion/issues/2675

    var sheet = new cache.sheet.constructor({
      key: key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false; // $FlowFixMe

    var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");

    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }

    if (node !== null) {
      rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

      node.setAttribute('data-emotion', key);
      sheet.hydrate([node]);
    }

    sheetRef.current = [sheet, rehydrating];
    return function () {
      sheet.flush();
    };
  }, [cache]);
  useInsertionEffect(function () {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0],
        rehydrating = sheetRefCurrent[1];

    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }

    if (serialized.next !== undefined) {
      // insert keyframes
      (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_6__.insertStyles)(cache, serialized.next, true);
    }

    if (sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }

    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});

if (true) {
  Global.displayName = 'EmotionGlobal';
}

function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_7__.serializeStyles)(args);
}

var keyframes = function keyframes() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            if ( true && arg.styles !== undefined && arg.name !== undefined) {
              console.error('You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n' + '`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.');
            }

            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_6__.getRegisteredStyles)(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
      serializedArr = _ref.serializedArr;
  var rules = (0,_emotion_element_cbed451f_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.u)(function () {

    for (var i = 0; i < serializedArr.length; i++) {
      var res = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_6__.insertStyles)(cache, serializedArr[i], false);
    }
  });

  return null;
};

var ClassNames = /* #__PURE__ */(0,_emotion_element_cbed451f_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.w)(function (props, cache) {
  var hasRendered = false;
  var serializedArr = [];

  var css = function css() {
    if (hasRendered && "development" !== 'production') {
      throw new Error('css can only be used during render');
    }

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_7__.serializeStyles)(args, cache.registered);
    serializedArr.push(serialized); // registration has to happen here as the result of this might get consumed by `cx`

    (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_6__.registerStyles)(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };

  var cx = function cx() {
    if (hasRendered && "development" !== 'production') {
      throw new Error('cx can only be used during render');
    }

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return merge(cache.registered, css, classnames(args));
  };

  var content = {
    css: css,
    cx: cx,
    theme: (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_emotion_element_cbed451f_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.T)
  };
  var ele = props.children(content);
  hasRendered = true;
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Insertion, {
    cache: cache,
    serializedArr: serializedArr
  }), ele);
});

if (true) {
  ClassNames.displayName = 'EmotionClassNames';
}

if (true) {
  var isBrowser = "object" !== 'undefined'; // #1727 for some reason Jest evaluates modules twice if some consuming module gets mocked with jest.mock

  var isJest = typeof jest !== 'undefined';

  if (isBrowser && !isJest) {
    // globalThis has wide browser support - https://caniuse.com/?search=globalThis, Node.js 12 and later
    var globalContext = // $FlowIgnore
    typeof globalThis !== 'undefined' ? globalThis // eslint-disable-line no-undef
    : isBrowser ? window : __webpack_require__.g;
    var globalKey = "__EMOTION_REACT_" + pkg.version.split('.')[0] + "__";

    if (globalContext[globalKey]) {
      console.warn('You are loading @emotion/react when it is already loaded. Running ' + 'multiple instances may cause problems. This can happen if multiple ' + 'versions are used, or if multiple builds of the same version are ' + 'used.');
    }

    globalContext[globalKey] = true;
  }
}




/***/ }),

/***/ "./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serializeStyles": function() { return /* binding */ serializeStyles; }
/* harmony export */ });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/hash.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js");




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */(0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_2__.default)(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__.default[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (true) {
  var contentValuePattern = /(var|attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
  var contentValues = ['normal', 'none', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if ( true && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if ( true && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        } else if (true) {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (true) {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if ( true && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern;

if (true) {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    if ( true && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {
      if ( true && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (true) {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = (0,_emotion_hash__WEBPACK_IMPORTED_MODULE_0__.default)(styles) + identifierName;

  if (true) {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),

/***/ "./node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleSheet": function() { return /* binding */ StyleSheet; }
/* harmony export */ });
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? "development" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (true) {
      var isImportRule = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;

      if (isImportRule && this._alreadyInsertedOrderInsensitiveRule) {
        // this would only cause problem in speedy mode
        // but we don't want enabling speedy to affect the observable behavior
        // so we report this error at all times
        console.error("You're attempting to insert the following rule:\n" + rule + '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.');
      }
      this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule;
    }

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if ( true && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear){/.test(rule)) {
          console.error("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;

    if (true) {
      this._alreadyInsertedOrderInsensitiveRule = false;
    }
  };

  return StyleSheet;
}();




/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRegisteredStyles": function() { return /* binding */ getRegisteredStyles; },
/* harmony export */   "insertStyles": function() { return /* binding */ insertStyles; },
/* harmony export */   "registerStyles": function() { return /* binding */ registerStyles; }
/* harmony export */ });
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false ) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};




/***/ }),

/***/ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (weakMemoize);


/***/ }),

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


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-spinners/BarLoader.js":
/*!**************************************************!*\
  !*** ./node_modules/react-spinners/BarLoader.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/** @jsx jsx */
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_1 = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/react-spinners/helpers/index.js");
var long = react_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {left: -35%;right: 100%}\n  60% {left: 100%;right: -90%}\n  100% {left: 100%;right: -90%}\n"], ["\n  0% {left: -35%;right: 100%}\n  60% {left: 100%;right: -90%}\n  100% {left: 100%;right: -90%}\n"])));
var short = react_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  0% {left: -200%;right: 100%}\n  60% {left: 107%;right: -8%}\n  100% {left: 107%;right: -8%}\n"], ["\n  0% {left: -200%;right: 100%}\n  60% {left: 107%;right: -8%}\n  100% {left: 107%;right: -8%}\n"])));
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.style = function (i) {
            var _a = _this.props, height = _a.height, color = _a.color, speedMultiplier = _a.speedMultiplier;
            return react_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      position: absolute;\n      height: ", ";\n      overflow: hidden;\n      background-color: ", ";\n      background-clip: padding-box;\n      display: block;\n      border-radius: 2px;\n      will-change: left, right;\n      animation-fill-mode: forwards;\n      animation: ", " ", "s\n        ", "\n        ", "\n        infinite;\n    "], ["\n      position: absolute;\n      height: ", ";\n      overflow: hidden;\n      background-color: ", ";\n      background-clip: padding-box;\n      display: block;\n      border-radius: 2px;\n      will-change: left, right;\n      animation-fill-mode: forwards;\n      animation: ", " ", "s\n        ", "\n        ",
                "\n        infinite;\n    "])), helpers_1.cssValue(height), color, i === 1 ? long : short, 2.1 / speedMultiplier, i === 2 ? 1.15 / speedMultiplier + "s" : "", i === 1
                ? "cubic-bezier(0.65, 0.815, 0.735, 0.395)"
                : "cubic-bezier(0.165, 0.84, 0.44, 1)");
        };
        _this.wrapper = function () {
            var _a = _this.props, width = _a.width, height = _a.height, color = _a.color;
            return react_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      position: relative;\n      width: ", ";\n      height: ", ";\n      overflow: hidden;\n      background-color: ", ";\n      background-clip: padding-box;\n    "], ["\n      position: relative;\n      width: ", ";\n      height: ", ";\n      overflow: hidden;\n      background-color: ", ";\n      background-clip: padding-box;\n    "])), helpers_1.cssValue(width), helpers_1.cssValue(height), helpers_1.calculateRgba(color, 0.2));
        };
        return _this;
    }
    Loader.prototype.render = function () {
        var _a = this.props, loading = _a.loading, css = _a.css;
        return loading ? (react_1.jsx("span", { css: [this.wrapper(), css] },
            react_1.jsx("span", { css: this.style(1) }),
            react_1.jsx("span", { css: this.style(2) }))) : null;
    };
    Loader.defaultProps = helpers_1.heightWidthDefaults(4, 100);
    return Loader;
}(React.PureComponent));
exports.default = Loader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./node_modules/react-spinners/BeatLoader.js":
/*!***************************************************!*\
  !*** ./node_modules/react-spinners/BeatLoader.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/** @jsx jsx */
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_1 = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/react-spinners/helpers/index.js");
var beat = react_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  50% {transform: scale(0.75);opacity: 0.2}\n  100% {transform: scale(1);opacity: 1}\n"], ["\n  50% {transform: scale(0.75);opacity: 0.2}\n  100% {transform: scale(1);opacity: 1}\n"])));
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.style = function (i) {
            var _a = _this.props, color = _a.color, size = _a.size, margin = _a.margin, speedMultiplier = _a.speedMultiplier;
            return react_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      display: inline-block;\n      background-color: ", ";\n      width: ", ";\n      height: ", ";\n      margin: ", ";\n      border-radius: 100%;\n      animation: ", " ", "s ", "\n        infinite linear;\n      animation-fill-mode: both;\n    "], ["\n      display: inline-block;\n      background-color: ", ";\n      width: ", ";\n      height: ", ";\n      margin: ", ";\n      border-radius: 100%;\n      animation: ", " ", "s ", "\n        infinite linear;\n      animation-fill-mode: both;\n    "])), color, helpers_1.cssValue(size), helpers_1.cssValue(size), helpers_1.cssValue(margin), beat, 0.7 / speedMultiplier, i % 2 ? "0s" : 0.35 / speedMultiplier + "s");
        };
        return _this;
    }
    Loader.prototype.render = function () {
        var _a = this.props, loading = _a.loading, css = _a.css;
        return loading ? (react_1.jsx("span", { css: [css] },
            react_1.jsx("span", { css: this.style(1) }),
            react_1.jsx("span", { css: this.style(2) }),
            react_1.jsx("span", { css: this.style(3) }))) : null;
    };
    Loader.defaultProps = helpers_1.sizeMarginDefaults(15);
    return Loader;
}(React.PureComponent));
exports.default = Loader;
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./node_modules/react-spinners/BounceLoader.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-spinners/BounceLoader.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/** @jsx jsx */
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_1 = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/react-spinners/helpers/index.js");
var bounce = react_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0%, 100% {transform: scale(0)}\n  50% {transform: scale(1.0)}\n"], ["\n  0%, 100% {transform: scale(0)}\n  50% {transform: scale(1.0)}\n"])));
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.style = function (i) {
            var _a = _this.props, color = _a.color, size = _a.size, speedMultiplier = _a.speedMultiplier;
            return react_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      position: absolute;\n      height: ", ";\n      width: ", ";\n      background-color: ", ";\n      border-radius: 100%;\n      opacity: 0.6;\n      top: 0;\n      left: 0;\n      animation-fill-mode: both;\n      animation: ", " ", "s ", "\n        infinite ease-in-out;\n    "], ["\n      position: absolute;\n      height: ", ";\n      width: ", ";\n      background-color: ", ";\n      border-radius: 100%;\n      opacity: 0.6;\n      top: 0;\n      left: 0;\n      animation-fill-mode: both;\n      animation: ", " ", "s ", "\n        infinite ease-in-out;\n    "])), helpers_1.cssValue(size), helpers_1.cssValue(size), color, bounce, 2.1 / speedMultiplier, i === 1 ? 1 / speedMultiplier + "s" : "0s");
        };
        _this.wrapper = function () {
            var size = _this.props.size;
            return react_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      position: relative;\n      width: ", ";\n      height: ", ";\n    "], ["\n      position: relative;\n      width: ", ";\n      height: ", ";\n    "])), helpers_1.cssValue(size), helpers_1.cssValue(size));
        };
        return _this;
    }
    Loader.prototype.render = function () {
        var _a = this.props, loading = _a.loading, css = _a.css;
        return loading ? (react_1.jsx("span", { css: [this.wrapper(), css] },
            react_1.jsx("span", { css: this.style(1) }),
            react_1.jsx("span", { css: this.style(2) }))) : null;
    };
    Loader.defaultProps = helpers_1.sizeDefaults(60);
    return Loader;
}(React.PureComponent));
exports.default = Loader;
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./node_modules/react-spinners/CircleLoader.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-spinners/CircleLoader.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/** @jsx jsx */
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_1 = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/react-spinners/helpers/index.js");
var circle = react_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {transform: rotate(0deg)}\n  50% {transform: rotate(180deg)}\n  100% {transform: rotate(360deg)}\n"], ["\n  0% {transform: rotate(0deg)}\n  50% {transform: rotate(180deg)}\n  100% {transform: rotate(360deg)}\n"])));
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.style = function (i) {
            var _a = _this.props, size = _a.size, color = _a.color, speedMultiplier = _a.speedMultiplier;
            var _b = helpers_1.parseLengthAndUnit(size), value = _b.value, unit = _b.unit;
            return react_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      position: absolute;\n      height: ", ";\n      width: ", ";\n      border: 1px solid ", ";\n      border-radius: 100%;\n      transition: 2s;\n      border-bottom: none;\n      border-right: none;\n      top: ", "%;\n      left: ", "%;\n      animation-fill-mode: \"\";\n      animation: ", " ", "s ", "s infinite linear;\n    "], ["\n      position: absolute;\n      height: ", ";\n      width: ", ";\n      border: 1px solid ", ";\n      border-radius: 100%;\n      transition: 2s;\n      border-bottom: none;\n      border-right: none;\n      top: ", "%;\n      left: ", "%;\n      animation-fill-mode: \"\";\n      animation: ", " ", "s ", "s infinite linear;\n    "])), "" + value * (1 - i / 10) + unit, "" + value * (1 - i / 10) + unit, color, i * 0.7 * 2.5, i * 0.35 * 2.5, circle, 1 / speedMultiplier, (i * 0.2) / speedMultiplier);
        };
        _this.wrapper = function () {
            var size = _this.props.size;
            return react_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      position: relative;\n      width: ", ";\n      height: ", ";\n    "], ["\n      position: relative;\n      width: ", ";\n      height: ", ";\n    "])), helpers_1.cssValue(size), helpers_1.cssValue(size));
        };
        return _this;
    }
    Loader.prototype.render = function () {
        var _a = this.props, loading = _a.loading, css = _a.css;
        return loading ? (react_1.jsx("span", { css: [this.wrapper(), css] },
            react_1.jsx("span", { css: this.style(0) }),
            react_1.jsx("span", { css: this.style(1) }),
            react_1.jsx("span", { css: this.style(2) }),
            react_1.jsx("span", { css: this.style(3) }),
            react_1.jsx("span", { css: this.style(4) }))) : null;
    };
    Loader.defaultProps = helpers_1.sizeDefaults(50);
    return Loader;
}(React.PureComponent));
exports.default = Loader;
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./node_modules/react-spinners/ClimbingBoxLoader.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-spinners/ClimbingBoxLoader.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/** @jsx jsx */
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_1 = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/react-spinners/helpers/index.js");
var climbingBox = react_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {transform:translate(0, -1em) rotate(-45deg)}\n  5% {transform:translate(0, -1em) rotate(-50deg)}\n  20% {transform:translate(1em, -2em) rotate(47deg)}\n  25% {transform:translate(1em, -2em) rotate(45deg)}\n  30% {transform:translate(1em, -2em) rotate(40deg)}\n  45% {transform:translate(2em, -3em) rotate(137deg)}\n  50% {transform:translate(2em, -3em) rotate(135deg)}\n  55% {transform:translate(2em, -3em) rotate(130deg)}\n  70% {transform:translate(3em, -4em) rotate(217deg)}\n  75% {transform:translate(3em, -4em) rotate(220deg)}\n  100% {transform:translate(0, -1em) rotate(-225deg)}\n"], ["\n  0% {transform:translate(0, -1em) rotate(-45deg)}\n  5% {transform:translate(0, -1em) rotate(-50deg)}\n  20% {transform:translate(1em, -2em) rotate(47deg)}\n  25% {transform:translate(1em, -2em) rotate(45deg)}\n  30% {transform:translate(1em, -2em) rotate(40deg)}\n  45% {transform:translate(2em, -3em) rotate(137deg)}\n  50% {transform:translate(2em, -3em) rotate(135deg)}\n  55% {transform:translate(2em, -3em) rotate(130deg)}\n  70% {transform:translate(3em, -4em) rotate(217deg)}\n  75% {transform:translate(3em, -4em) rotate(220deg)}\n  100% {transform:translate(0, -1em) rotate(-225deg)}\n"])));
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.style = function () {
            var _a = _this.props, color = _a.color, speedMultiplier = _a.speedMultiplier;
            return react_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      position: absolute;\n      left: 0;\n      bottom: -0.1em;\n      height: 1em;\n      width: 1em;\n      background-color: transparent;\n      border-radius: 15%;\n      border: 0.25em solid ", ";\n      transform: translate(0, -1em) rotate(-45deg);\n      animation-fill-mode: both;\n      animation: ", " ", "s infinite cubic-bezier(0.79, 0, 0.47, 0.97);\n    "], ["\n      position: absolute;\n      left: 0;\n      bottom: -0.1em;\n      height: 1em;\n      width: 1em;\n      background-color: transparent;\n      border-radius: 15%;\n      border: 0.25em solid ", ";\n      transform: translate(0, -1em) rotate(-45deg);\n      animation-fill-mode: both;\n      animation: ", " ", "s infinite cubic-bezier(0.79, 0, 0.47, 0.97);\n    "])), color, climbingBox, 2.5 / speedMultiplier);
        };
        _this.wrapper = function () {
            var size = _this.props.size;
            return react_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      margin-top: -2.7em;\n      margin-left: -2.7em;\n      width: 5.4em;\n      height: 5.4em;\n      font-size: ", ";\n    "], ["\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      margin-top: -2.7em;\n      margin-left: -2.7em;\n      width: 5.4em;\n      height: 5.4em;\n      font-size: ", ";\n    "])), helpers_1.cssValue(size));
        };
        _this.hill = function () {
            var color = _this.props.color;
            return react_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      position: absolute;\n      width: 7.1em;\n      height: 7.1em;\n      top: 1.7em;\n      left: 1.7em;\n      border-left: 0.25em solid ", ";\n      transform: rotate(45deg);\n    "], ["\n      position: absolute;\n      width: 7.1em;\n      height: 7.1em;\n      top: 1.7em;\n      left: 1.7em;\n      border-left: 0.25em solid ", ";\n      transform: rotate(45deg);\n    "])), color);
        };
        _this.container = function () {
            return react_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      position: relative;\n      width: 7.1em;\n      height: 7.1em;\n    "], ["\n      position: relative;\n      width: 7.1em;\n      height: 7.1em;\n    "])));
        };
        return _this;
    }
    Loader.prototype.render = function () {
        var _a = this.props, loading = _a.loading, css = _a.css;
        return loading ? (react_1.jsx("span", { css: [this.container(), css] },
            react_1.jsx("span", { css: this.wrapper() },
                react_1.jsx("span", { css: this.style() }),
                react_1.jsx("span", { css: this.hill() })))) : null;
    };
    Loader.defaultProps = helpers_1.sizeDefaults(15);
    return Loader;
}(React.PureComponent));
exports.default = Loader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "./node_modules/react-spinners/ClipLoader.js":
/*!***************************************************!*\
  !*** ./node_modules/react-spinners/ClipLoader.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/** @jsx jsx */
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_1 = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/react-spinners/helpers/index.js");
var clip = react_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {transform: rotate(0deg) scale(1)}\n  50% {transform: rotate(180deg) scale(0.8)}\n  100% {transform: rotate(360deg) scale(1)}\n"], ["\n  0% {transform: rotate(0deg) scale(1)}\n  50% {transform: rotate(180deg) scale(0.8)}\n  100% {transform: rotate(360deg) scale(1)}\n"])));
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.style = function () {
            var _a = _this.props, size = _a.size, color = _a.color, speedMultiplier = _a.speedMultiplier;
            return react_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      background: transparent !important;\n      width: ", ";\n      height: ", ";\n      border-radius: 100%;\n      border: 2px solid;\n      border-color: ", ";\n      border-bottom-color: transparent;\n      display: inline-block;\n      animation: ", " ", "s 0s infinite linear;\n      animation-fill-mode: both;\n    "], ["\n      background: transparent !important;\n      width: ", ";\n      height: ", ";\n      border-radius: 100%;\n      border: 2px solid;\n      border-color: ", ";\n      border-bottom-color: transparent;\n      display: inline-block;\n      animation: ", " ", "s 0s infinite linear;\n      animation-fill-mode: both;\n    "])), helpers_1.cssValue(size), helpers_1.cssValue(size), color, clip, 0.75 / speedMultiplier);
        };
        return _this;
    }
    Loader.prototype.render = function () {
        var _a = this.props, loading = _a.loading, css = _a.css;
        return loading ? react_1.jsx("span", { css: [this.style(), css] }) : null;
    };
    Loader.defaultProps = helpers_1.sizeDefaults(35);
    return Loader;
}(React.PureComponent));
exports.default = Loader;
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./node_modules/react-spinners/ClockLoader.js":
/*!****************************************************!*\
  !*** ./node_modules/react-spinners/ClockLoader.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/** @jsx jsx */
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_1 = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/react-spinners/helpers/index.js");
var rotate = react_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  100% { transform: rotate(360deg) }\n"], ["\n  100% { transform: rotate(360deg) }\n"])));
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wrapper = function () {
            var _a = _this.props, size = _a.size, color = _a.color, speedMultiplier = _a.speedMultiplier;
            var _b = helpers_1.parseLengthAndUnit(size), value = _b.value, unit = _b.unit;
            return react_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      position: relative;\n      width: ", ";\n      height: ", ";\n      background-color: transparent;\n      box-shadow: inset 0px 0px 0px 2px ", ";\n      border-radius: 50%;\n\n      &:after,\n      &:before {\n        position: absolute;\n        content: \"\";\n        background-color: ", ";\n      }\n\n      &:after {\n        width: ", "px;\n        height: 2px;\n        top: ", "px;\n        left: ", "px;\n        transform-origin: 1px 1px;\n        animation: ", " ", "s linear infinite;\n      }\n\n      &:before {\n        width: ", "px;\n        height: 2px;\n        top: ", "px;\n        left: ", "px;\n        transform-origin: 1px 1px;\n        animation: ", " ", "s linear infinite;\n      }\n    "], ["\n      position: relative;\n      width: ", ";\n      height: ", ";\n      background-color: transparent;\n      box-shadow: inset 0px 0px 0px 2px ", ";\n      border-radius: 50%;\n\n      &:after,\n      &:before {\n        position: absolute;\n        content: \"\";\n        background-color: ", ";\n      }\n\n      &:after {\n        width: ", "px;\n        height: 2px;\n        top: ", "px;\n        left: ", "px;\n        transform-origin: 1px 1px;\n        animation: ", " ", "s linear infinite;\n      }\n\n      &:before {\n        width: ", "px;\n        height: 2px;\n        top: ", "px;\n        left: ", "px;\n        transform-origin: 1px 1px;\n        animation: ", " ", "s linear infinite;\n      }\n    "])), "" + value + unit, "" + value + unit, color, color, value / 2.4, value / 2 - 1, value / 2 - 1, rotate, 2 / speedMultiplier, value / 3, value / 2 - 1, value / 2 - 1, rotate, 8 / speedMultiplier);
        };
        return _this;
    }
    Loader.prototype.render = function () {
        var _a = this.props, loading = _a.loading, css = _a.css;
        return loading ? react_1.jsx("span", { css: [this.wrapper(), css] }) : null;
    };
    Loader.defaultProps = helpers_1.sizeDefaults(50);
    return Loader;
}(React.PureComponent));
exports.default = Loader;
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./node_modules/react-spinners/DotLoader.js":
/*!**************************************************!*\
  !*** ./node_modules/react-spinners/DotLoader.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/** @jsx jsx */
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_1 = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/react-spinners/helpers/index.js");
var rotate = react_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  100% {transform: rotate(360deg)}\n"], ["\n  100% {transform: rotate(360deg)}\n"])));
var bounce = react_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  0%, 100% {transform: scale(0)}\n  50% {transform: scale(1.0)}\n"], ["\n  0%, 100% {transform: scale(0)}\n  50% {transform: scale(1.0)}\n"])));
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.style = function (i) {
            var _a = _this.props, size = _a.size, color = _a.color, speedMultiplier = _a.speedMultiplier;
            var _b = helpers_1.parseLengthAndUnit(size), value = _b.value, unit = _b.unit;
            return react_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      position: absolute;\n      top: ", ";\n      bottom: ", ";\n      height: ", ";\n      width: ", ";\n      background-color: ", ";\n      border-radius: 100%;\n      animation-fill-mode: forwards;\n      animation: ", " ", "s ", " infinite linear;\n    "], ["\n      position: absolute;\n      top: ", ";\n      bottom: ", ";\n      height: ", ";\n      width: ", ";\n      background-color: ", ";\n      border-radius: 100%;\n      animation-fill-mode: forwards;\n      animation: ", " ", "s ", " infinite linear;\n    "])), i % 2 ? "0" : "auto", i % 2 ? "auto" : "0", "" + value / 2 + unit, "" + value / 2 + unit, color, bounce, 2 / speedMultiplier, i === 2 ? "-1s" : "0s");
        };
        _this.wrapper = function () {
            var _a = _this.props, size = _a.size, speedMultiplier = _a.speedMultiplier;
            return react_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      position: relative;\n      width: ", ";\n      height: ", ";\n      animation-fill-mode: forwards;\n      animation: ", " ", "s 0s infinite linear;\n    "], ["\n      position: relative;\n      width: ", ";\n      height: ", ";\n      animation-fill-mode: forwards;\n      animation: ", " ", "s 0s infinite linear;\n    "])), helpers_1.cssValue(size), helpers_1.cssValue(size), rotate, 2 / speedMultiplier);
        };
        return _this;
    }
    Loader.prototype.render = function () {
        var _a = this.props, loading = _a.loading, css = _a.css;
        return loading ? (react_1.jsx("span", { css: [this.wrapper(), css] },
            react_1.jsx("span", { css: this.style(1) }),
            react_1.jsx("span", { css: this.style(2) }))) : null;
    };
    Loader.defaultProps = helpers_1.sizeDefaults(60);
    return Loader;
}(React.PureComponent));
exports.default = Loader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./node_modules/react-spinners/FadeLoader.js":
/*!***************************************************!*\
  !*** ./node_modules/react-spinners/FadeLoader.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/** @jsx jsx */
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_1 = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/react-spinners/helpers/index.js");
var fade = react_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  50% {opacity: 0.3}\n  100% {opacity: 1}\n"], ["\n  50% {opacity: 0.3}\n  100% {opacity: 1}\n"])));
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.radius = function () {
            var margin = _this.props.margin;
            var value = helpers_1.parseLengthAndUnit(margin).value;
            return value + 18;
        };
        _this.quarter = function () {
            return _this.radius() / 2 + _this.radius() / 5.5;
        };
        _this.style = function (i) {
            var _a = _this.props, height = _a.height, width = _a.width, margin = _a.margin, color = _a.color, radius = _a.radius, speedMultiplier = _a.speedMultiplier;
            return react_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      position: absolute;\n      width: ", ";\n      height: ", ";\n      margin: ", ";\n      background-color: ", ";\n      border-radius: ", ";\n      transition: 2s;\n      animation-fill-mode: \"both\";\n      animation: ", " ", "s ", "s infinite ease-in-out;\n    "], ["\n      position: absolute;\n      width: ", ";\n      height: ", ";\n      margin: ", ";\n      background-color: ", ";\n      border-radius: ", ";\n      transition: 2s;\n      animation-fill-mode: \"both\";\n      animation: ", " ", "s ", "s infinite ease-in-out;\n    "])), helpers_1.cssValue(width), helpers_1.cssValue(height), helpers_1.cssValue(margin), color, helpers_1.cssValue(radius), fade, 1.2 / speedMultiplier, i * 0.12);
        };
        _this.wrapper = function () {
            return react_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      position: relative;\n      font-size: 0;\n      top: ", "px;\n      left: ", "px;\n      width: ", "px;\n      height: ", "px;\n    "], ["\n      position: relative;\n      font-size: 0;\n      top: ", "px;\n      left: ", "px;\n      width: ", "px;\n      height: ", "px;\n    "])), _this.radius(), _this.radius(), _this.radius() * 3, _this.radius() * 3);
        };
        _this.a = function () { return react_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    ", ";\n    top: ", "px;\n    left: 0;\n  "], ["\n    ", ";\n    top: ", "px;\n    left: 0;\n  "])), _this.style(1), _this.radius()); };
        _this.b = function () { return react_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    ", ";\n    top: ", "px;\n    left: ", "px;\n    transform: rotate(-45deg);\n  "], ["\n    ", ";\n    top: ", "px;\n    left: ", "px;\n    transform: rotate(-45deg);\n  "])), _this.style(2), _this.quarter(), _this.quarter()); };
        _this.c = function () { return react_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    ", ";\n    top: 0;\n    left: ", "px;\n    transform: rotate(90deg);\n  "], ["\n    ", ";\n    top: 0;\n    left: ", "px;\n    transform: rotate(90deg);\n  "])), _this.style(3), _this.radius()); };
        _this.d = function () { return react_1.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    ", ";\n    top: ", "px;\n    left: ", "px;\n    transform: rotate(45deg);\n  "], ["\n    ", ";\n    top: ", "px;\n    left: ", "px;\n    transform: rotate(45deg);\n  "])), _this.style(4), -_this.quarter(), _this.quarter()); };
        _this.e = function () { return react_1.css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    ", ";\n    top: ", "px;\n    left: 0;\n  "], ["\n    ", ";\n    top: ", "px;\n    left: 0;\n  "])), _this.style(5), -_this.radius()); };
        _this.f = function () { return react_1.css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    ", ";\n    top: ", "px;\n    left: ", "px;\n    transform: rotate(-45deg);\n  "], ["\n    ", ";\n    top: ", "px;\n    left: ", "px;\n    transform: rotate(-45deg);\n  "])), _this.style(6), -_this.quarter(), -_this.quarter()); };
        _this.g = function () { return react_1.css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    ", ";\n    top: 0;\n    left: ", "px;\n    transform: rotate(90deg);\n  "], ["\n    ", ";\n    top: 0;\n    left: ", "px;\n    transform: rotate(90deg);\n  "])), _this.style(7), -_this.radius()); };
        _this.h = function () { return react_1.css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    ", ";\n    top: ", "px;\n    left: ", "px;\n    transform: rotate(45deg);\n  "], ["\n    ", ";\n    top: ", "px;\n    left: ", "px;\n    transform: rotate(45deg);\n  "])), _this.style(8), _this.quarter(), -_this.quarter()); };
        return _this;
    }
    Loader.prototype.render = function () {
        var _a = this.props, loading = _a.loading, css = _a.css;
        return loading ? (react_1.jsx("span", { css: [this.wrapper(), css] },
            react_1.jsx("span", { css: this.a() }),
            react_1.jsx("span", { css: this.b() }),
            react_1.jsx("span", { css: this.c() }),
            react_1.jsx("span", { css: this.d() }),
            react_1.jsx("span", { css: this.e() }),
            react_1.jsx("span", { css: this.f() }),
            react_1.jsx("span", { css: this.g() }),
            react_1.jsx("span", { css: this.h() }))) : null;
    };
    Loader.defaultProps = helpers_1.heightWidthRadiusDefaults(15, 5, 2);
    return Loader;
}(React.PureComponent));
exports.default = Loader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;


/***/ }),

/***/ "./node_modules/react-spinners/GridLoader.js":
/*!***************************************************!*\
  !*** ./node_modules/react-spinners/GridLoader.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/** @jsx jsx */
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_1 = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/react-spinners/helpers/index.js");
var grid = react_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {transform: scale(1)}\n  50% {transform: scale(0.5); opacity: 0.7}\n  100% {transform: scale(1);opacity: 1}\n"], ["\n  0% {transform: scale(1)}\n  50% {transform: scale(0.5); opacity: 0.7}\n  100% {transform: scale(1);opacity: 1}\n"])));
var random = function (top) { return Math.random() * top; };
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.style = function (rand) {
            var _a = _this.props, color = _a.color, size = _a.size, margin = _a.margin, speedMultiplier = _a.speedMultiplier;
            return react_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      display: inline-block;\n      background-color: ", ";\n      width: ", ";\n      height: ", ";\n      margin: ", ";\n      border-radius: 100%;\n      animation-fill-mode: \"both\";\n      animation: ", " ", "s ", "s infinite ease;\n    "], ["\n      display: inline-block;\n      background-color: ", ";\n      width: ", ";\n      height: ", ";\n      margin: ", ";\n      border-radius: 100%;\n      animation-fill-mode: \"both\";\n      animation: ", " ", "s ", "s infinite ease;\n    "])), color, helpers_1.cssValue(size), helpers_1.cssValue(size), helpers_1.cssValue(margin), grid, (rand / 100 + 0.6) / speedMultiplier, rand / 100 - 0.2);
        };
        _this.wrapper = function () {
            var _a = _this.props, size = _a.size, margin = _a.margin;
            var sizeWithUnit = helpers_1.parseLengthAndUnit(size);
            var marginWithUnit = helpers_1.parseLengthAndUnit(margin);
            var width = "" + (parseFloat(sizeWithUnit.value.toString()) * 3 + parseFloat(marginWithUnit.value.toString()) * 6) + sizeWithUnit.unit;
            return react_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      width: ", ";\n      font-size: 0;\n    "], ["\n      width: ", ";\n      font-size: 0;\n    "])), width);
        };
        return _this;
    }
    Loader.prototype.render = function () {
        var _a = this.props, loading = _a.loading, css = _a.css;
        return loading ? (react_1.jsx("span", { css: [this.wrapper(), css] },
            react_1.jsx("span", { css: this.style(random(100)) }),
            react_1.jsx("span", { css: this.style(random(100)) }),
            react_1.jsx("span", { css: this.style(random(100)) }),
            react_1.jsx("span", { css: this.style(random(100)) }),
            react_1.jsx("span", { css: this.style(random(100)) }),
            react_1.jsx("span", { css: this.style(random(100)) }),
            react_1.jsx("span", { css: this.style(random(100)) }),
            react_1.jsx("span", { css: this.style(random(100)) }),
            react_1.jsx("span", { css: this.style(random(100)) }))) : null;
    };
    Loader.defaultProps = helpers_1.sizeMarginDefaults(15);
    return Loader;
}(React.PureComponent));
exports.default = Loader;
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./node_modules/react-spinners/HashLoader.js":
/*!***************************************************!*\
  !*** ./node_modules/react-spinners/HashLoader.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/** @jsx jsx */
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_1 = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
var index_1 = __webpack_require__(/*! ./helpers/index */ "./node_modules/react-spinners/helpers/index.js");
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.thickness = function () {
            var size = _this.props.size;
            var value = index_1.parseLengthAndUnit(size).value;
            return value / 5;
        };
        _this.lat = function () {
            var size = _this.props.size;
            var value = index_1.parseLengthAndUnit(size).value;
            return (value - _this.thickness()) / 2;
        };
        _this.offset = function () { return _this.lat() - _this.thickness(); };
        _this.color = function () {
            var color = _this.props.color;
            return index_1.calculateRgba(color, 0.75);
        };
        _this.before = function () {
            var size = _this.props.size;
            var color = _this.color();
            var lat = _this.lat();
            var thickness = _this.thickness();
            var offset = _this.offset();
            return react_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      0% {width: ", "px;box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n      35% {width: ", ";box-shadow: 0 ", "px ", ", 0 ", "px ", "}\n      70% {width: ", "px;box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n      100% {box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n    "], ["\n      0% {width: ", "px;box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n      35% {width: ", ";box-shadow: 0 ", "px ", ", 0 ", "px ", "}\n      70% {width: ", "px;box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n      100% {box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n    "])), thickness, lat, -offset, color, -lat, offset, color, index_1.cssValue(size), -offset, color, offset, color, thickness, -lat, -offset, color, lat, offset, color, lat, -offset, color, -lat, offset, color);
        };
        _this.after = function () {
            var size = _this.props.size;
            var color = _this.color();
            var lat = _this.lat();
            var thickness = _this.thickness();
            var offset = _this.offset();
            return react_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      0% {height: ", "px;box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n      35% {height: ", ";box-shadow: ", "px 0 ", ", ", "px 0 ", "}\n      70% {height: ", "px;box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n      100% {box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n    "], ["\n      0% {height: ", "px;box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n      35% {height: ", ";box-shadow: ", "px 0 ", ", ", "px 0 ", "}\n      70% {height: ", "px;box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n      100% {box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n    "])), thickness, offset, lat, color, -offset, -lat, color, index_1.cssValue(size), offset, color, -offset, color, thickness, offset, -lat, color, -offset, lat, color, offset, lat, color, -offset, -lat, color);
        };
        _this.style = function (i) {
            var _a = _this.props, size = _a.size, speedMultiplier = _a.speedMultiplier;
            var _b = index_1.parseLengthAndUnit(size), value = _b.value, unit = _b.unit;
            return react_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      position: absolute;\n      content: \"\";\n      top: 50%;\n      left: 50%;\n      display: block;\n      width: ", ";\n      height: ", ";\n      border-radius: ", ";\n      transform: translate(-50%, -50%);\n      animation-fill-mode: none;\n      animation: ", " ", "s infinite;\n    "], ["\n      position: absolute;\n      content: \"\";\n      top: 50%;\n      left: 50%;\n      display: block;\n      width: ", ";\n      height: ", ";\n      border-radius: ", ";\n      transform: translate(-50%, -50%);\n      animation-fill-mode: none;\n      animation: ", " ", "s infinite;\n    "])), "" + value / 5 + unit, "" + value / 5 + unit, "" + value / 10 + unit, i === 1 ? _this.before() : _this.after(), 2 / speedMultiplier);
        };
        _this.wrapper = function () {
            var size = _this.props.size;
            return react_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      position: relative;\n      width: ", ";\n      height: ", ";\n      transform: rotate(165deg);\n    "], ["\n      position: relative;\n      width: ", ";\n      height: ", ";\n      transform: rotate(165deg);\n    "])), index_1.cssValue(size), index_1.cssValue(size));
        };
        return _this;
    }
    Loader.prototype.render = function () {
        var _a = this.props, loading = _a.loading, css = _a.css;
        return loading ? (react_1.jsx("span", { css: [this.wrapper(), css] },
            react_1.jsx("span", { css: this.style(1) }),
            react_1.jsx("span", { css: this.style(2) }))) : null;
    };
    Loader.defaultProps = index_1.sizeDefaults(50);
    return Loader;
}(React.PureComponent));
exports.default = Loader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./node_modules/react-spinners/MoonLoader.js":
/*!***************************************************!*\
  !*** ./node_modules/react-spinners/MoonLoader.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/** @jsx jsx */
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_1 = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/react-spinners/helpers/index.js");
var moon = react_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  100% {transform: rotate(360deg)}\n"], ["\n  100% {transform: rotate(360deg)}\n"])));
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.moonSize = function () {
            var size = _this.props.size;
            var value = helpers_1.parseLengthAndUnit(size).value;
            return value / 7;
        };
        _this.ballStyle = function (size) {
            return react_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      width: ", ";\n      height: ", ";\n      border-radius: 100%;\n    "], ["\n      width: ", ";\n      height: ", ";\n      border-radius: 100%;\n    "])), helpers_1.cssValue(size), helpers_1.cssValue(size));
        };
        _this.wrapper = function () {
            var _a = _this.props, size = _a.size, speedMultiplier = _a.speedMultiplier;
            var _b = helpers_1.parseLengthAndUnit(size), value = _b.value, unit = _b.unit;
            return react_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      position: relative;\n      width: ", ";\n      height: ", ";\n      animation: ", " ", "s 0s infinite linear;\n      animation-fill-mode: forwards;\n    "], ["\n      position: relative;\n      width: ", ";\n      height: ", ";\n      animation: ", " ", "s 0s infinite linear;\n      animation-fill-mode: forwards;\n    "])), "" + (value + _this.moonSize() * 2) + unit, "" + (value + _this.moonSize() * 2) + unit, moon, 0.6 / speedMultiplier);
        };
        _this.ball = function () {
            var _a = _this.props, color = _a.color, size = _a.size, speedMultiplier = _a.speedMultiplier;
            var _b = helpers_1.parseLengthAndUnit(size), value = _b.value, unit = _b.unit;
            return react_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      ", ";\n      background-color: ", ";\n      opacity: 0.8;\n      position: absolute;\n      top: ", ";\n      animation: ", " ", "s 0s infinite linear;\n      animation-fill-mode: forwards;\n    "], ["\n      ", ";\n      background-color: ", ";\n      opacity: 0.8;\n      position: absolute;\n      top: ", ";\n      animation: ", " ", "s 0s infinite linear;\n      animation-fill-mode: forwards;\n    "])), _this.ballStyle(_this.moonSize()), color, "" + (value / 2 - _this.moonSize() / 2) + unit, moon, 0.6 / speedMultiplier);
        };
        _this.circle = function () {
            var _a = _this.props, size = _a.size, color = _a.color;
            var value = helpers_1.parseLengthAndUnit(size).value;
            return react_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      ", ";\n      border: ", "px solid ", ";\n      opacity: 0.1;\n      box-sizing: content-box;\n      position: absolute;\n    "], ["\n      ", ";\n      border: ", "px solid ", ";\n      opacity: 0.1;\n      box-sizing: content-box;\n      position: absolute;\n    "])), _this.ballStyle(value), _this.moonSize(), color);
        };
        return _this;
    }
    Loader.prototype.render = function () {
        var _a = this.props, loading = _a.loading, css = _a.css;
        return loading ? (react_1.jsx("span", { css: [this.wrapper(), css] },
            react_1.jsx("span", { css: this.ball() }),
            react_1.jsx("span", { css: this.circle() }))) : null;
    };
    Loader.defaultProps = helpers_1.sizeDefaults(60);
    return Loader;
}(React.PureComponent));
exports.default = Loader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "./node_modules/react-spinners/PacmanLoader.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-spinners/PacmanLoader.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/** @jsx jsx */
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_1 = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/react-spinners/helpers/index.js");
var pacman = [
    react_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    0% {transform: rotate(0deg)}\n    50% {transform: rotate(-44deg)}\n  "], ["\n    0% {transform: rotate(0deg)}\n    50% {transform: rotate(-44deg)}\n  "]))),
    react_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    0% {transform: rotate(0deg)}\n    50% {transform: rotate(44deg)}\n  "], ["\n    0% {transform: rotate(0deg)}\n    50% {transform: rotate(44deg)}\n  "])))
];
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ball = function () {
            var size = _this.props.size;
            var _a = helpers_1.parseLengthAndUnit(size), value = _a.value, unit = _a.unit;
            return react_1.keyframes(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      75% {opacity: 0.7}\n      100% {transform: translate(", ", ", ")}\n    "], ["\n      75% {opacity: 0.7}\n      100% {transform: translate(", ", ", ")}\n    "])), "" + -4 * value + unit, "" + -value / 4 + unit);
        };
        _this.ballStyle = function (i) {
            var _a = _this.props, color = _a.color, margin = _a.margin, size = _a.size, speedMultiplier = _a.speedMultiplier;
            var _b = helpers_1.parseLengthAndUnit(size), value = _b.value, unit = _b.unit;
            return react_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      width: ", ";\n      height: ", ";\n      background-color: ", ";\n      margin: ", ";\n      border-radius: 100%;\n      transform: translate(0, ", ");\n      position: absolute;\n      top: ", ";\n      left: ", ";\n      animation: ", " ", "s ", "s infinite linear;\n      animation-fill-mode: both;\n    "], ["\n      width: ", ";\n      height: ", ";\n      background-color: ", ";\n      margin: ", ";\n      border-radius: 100%;\n      transform: translate(0, ", ");\n      position: absolute;\n      top: ", ";\n      left: ", ";\n      animation: ", " ", "s ", "s infinite linear;\n      animation-fill-mode: both;\n    "])), "" + value / 3 + unit, "" + value / 3 + unit, color, helpers_1.cssValue(margin), "" + -value / 4 + unit, "" + value + unit, "" + value * 4 + unit, _this.ball(), 1 / speedMultiplier, i * 0.25);
        };
        _this.s1 = function () {
            return helpers_1.cssValue(_this.props.size) + " solid transparent";
        };
        _this.s2 = function () {
            var color = _this.props.color;
            return helpers_1.cssValue(_this.props.size) + " solid " + color;
        };
        _this.pacmanStyle = function (i) {
            var _a = _this.props, size = _a.size, speedMultiplier = _a.speedMultiplier;
            var s1 = _this.s1();
            var s2 = _this.s2();
            return react_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      width: 0;\n      height: 0;\n      border-right: ", ";\n      border-top: ", ";\n      border-left: ", ";\n      border-bottom: ", ";\n      border-radius: ", ";\n      position: absolute;\n      animation: ", " ", "s infinite ease-in-out;\n      animation-fill-mode: both;\n    "], ["\n      width: 0;\n      height: 0;\n      border-right: ", ";\n      border-top: ", ";\n      border-left: ", ";\n      border-bottom: ", ";\n      border-radius: ", ";\n      position: absolute;\n      animation: ", " ", "s infinite ease-in-out;\n      animation-fill-mode: both;\n    "])), s1, i === 0 ? s1 : s2, s2, i === 0 ? s2 : s1, helpers_1.cssValue(size), pacman[i], 0.8 / speedMultiplier);
        };
        _this.wrapper = function () {
            return react_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      position: relative;\n      font-size: 0;\n      height: ", ";\n      width: ", ";\n    "], ["\n      position: relative;\n      font-size: 0;\n      height: ", ";\n      width: ", ";\n    "])), helpers_1.cssValue(_this.props.size), helpers_1.cssValue(_this.props.size));
        };
        _this.pac = function () { return _this.pacmanStyle(0); };
        _this.man = function () { return _this.pacmanStyle(1); };
        return _this;
    }
    Loader.prototype.render = function () {
        var _a = this.props, loading = _a.loading, css = _a.css;
        return loading ? (react_1.jsx("span", { css: [this.wrapper(), css] },
            react_1.jsx("span", { css: this.pac() }),
            react_1.jsx("span", { css: this.man() }),
            react_1.jsx("span", { css: this.ballStyle(2) }),
            react_1.jsx("span", { css: this.ballStyle(3) }),
            react_1.jsx("span", { css: this.ballStyle(4) }),
            react_1.jsx("span", { css: this.ballStyle(5) }))) : null;
    };
    Loader.defaultProps = helpers_1.sizeMarginDefaults(25);
    return Loader;
}(React.PureComponent));
exports.default = Loader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./node_modules/react-spinners/PropagateLoader.js":
/*!********************************************************!*\
  !*** ./node_modules/react-spinners/PropagateLoader.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/** @jsx jsx */
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_1 = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/react-spinners/helpers/index.js");
// 1.5 4.5 7.5
var distance = [1, 3, 5];
var propagate = [
    react_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      25% {transform: translateX(-", "rem) scale(0.75)}\n      50% {transform: translateX(-", "rem) scale(0.6)}\n      75% {transform: translateX(-", "rem) scale(0.5)}\n      95% {transform: translateX(0rem) scale(1)}\n    "], ["\n      25% {transform: translateX(-", "rem) scale(0.75)}\n      50% {transform: translateX(-", "rem) scale(0.6)}\n      75% {transform: translateX(-", "rem) scale(0.5)}\n      95% {transform: translateX(0rem) scale(1)}\n    "])), distance[0], distance[1], distance[2]),
    react_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      25% {transform: translateX(-", "rem) scale(0.75)}\n      50% {transform: translateX(-", "rem) scale(0.6)}\n      75% {transform: translateX(-", "rem) scale(0.6)}\n      95% {transform: translateX(0rem) scale(1)}\n    "], ["\n      25% {transform: translateX(-", "rem) scale(0.75)}\n      50% {transform: translateX(-", "rem) scale(0.6)}\n      75% {transform: translateX(-", "rem) scale(0.6)}\n      95% {transform: translateX(0rem) scale(1)}\n    "])), distance[0], distance[1], distance[1]),
    react_1.keyframes(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      25% {transform: translateX(-", "rem) scale(0.75)}\n      75% {transform: translateX(-", "rem) scale(0.75)}\n      95% {transform: translateX(0rem) scale(1)}\n    "], ["\n      25% {transform: translateX(-", "rem) scale(0.75)}\n      75% {transform: translateX(-", "rem) scale(0.75)}\n      95% {transform: translateX(0rem) scale(1)}\n    "])), distance[0], distance[0]),
    react_1.keyframes(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      25% {transform: translateX(", "rem) scale(0.75)}\n      75% {transform: translateX(", "rem) scale(0.75)}\n      95% {transform: translateX(0rem) scale(1)}\n    "], ["\n      25% {transform: translateX(", "rem) scale(0.75)}\n      75% {transform: translateX(", "rem) scale(0.75)}\n      95% {transform: translateX(0rem) scale(1)}\n    "])), distance[0], distance[0]),
    react_1.keyframes(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      25% {transform: translateX(", "rem) scale(0.75)}\n      50% {transform: translateX(", "rem) scale(0.6)}\n      75% {transform: translateX(", "rem) scale(0.6)}\n      95% {transform: translateX(0rem) scale(1)}\n    "], ["\n      25% {transform: translateX(", "rem) scale(0.75)}\n      50% {transform: translateX(", "rem) scale(0.6)}\n      75% {transform: translateX(", "rem) scale(0.6)}\n      95% {transform: translateX(0rem) scale(1)}\n    "])), distance[0], distance[1], distance[1]),
    react_1.keyframes(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      25% {transform: translateX(", "rem) scale(0.75)}\n      50% {transform: translateX(", "rem) scale(0.6)}\n      75% {transform: translateX(", "rem) scale(0.5)}\n      95% {transform: translateX(0rem) scale(1)}\n    "], ["\n      25% {transform: translateX(", "rem) scale(0.75)}\n      50% {transform: translateX(", "rem) scale(0.6)}\n      75% {transform: translateX(", "rem) scale(0.5)}\n      95% {transform: translateX(0rem) scale(1)}\n    "])), distance[0], distance[1], distance[2])
];
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.style = function (i) {
            var _a = _this.props, size = _a.size, color = _a.color, speedMultiplier = _a.speedMultiplier;
            var _b = helpers_1.parseLengthAndUnit(size), value = _b.value, unit = _b.unit;
            return react_1.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      position: absolute;\n      font-size: ", ";\n      width: ", ";\n      height: ", ";\n      background: ", ";\n      border-radius: 50%;\n      animation: ", " ", "s infinite;\n      animation-fill-mode: forwards;\n    "], ["\n      position: absolute;\n      font-size: ", ";\n      width: ", ";\n      height: ", ";\n      background: ", ";\n      border-radius: 50%;\n      animation: ", " ", "s infinite;\n      animation-fill-mode: forwards;\n    "])), "" + value / 3 + unit, "" + value + unit, "" + value + unit, color, propagate[i], 1.5 / speedMultiplier);
        };
        _this.wrapper = function () {
            return react_1.css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      position: relative;\n    "], ["\n      position: relative;\n    "])));
        };
        return _this;
    }
    Loader.prototype.render = function () {
        var _a = this.props, loading = _a.loading, css = _a.css;
        return loading ? (react_1.jsx("span", { css: [this.wrapper(), css] },
            react_1.jsx("span", { css: this.style(0) }),
            react_1.jsx("span", { css: this.style(1) }),
            react_1.jsx("span", { css: this.style(2) }),
            react_1.jsx("span", { css: this.style(3) }),
            react_1.jsx("span", { css: this.style(4) }),
            react_1.jsx("span", { css: this.style(5) }))) : null;
    };
    Loader.defaultProps = helpers_1.sizeDefaults(15);
    return Loader;
}(React.PureComponent));
exports.default = Loader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;


/***/ }),

/***/ "./node_modules/react-spinners/PuffLoader.js":
/*!***************************************************!*\
  !*** ./node_modules/react-spinners/PuffLoader.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/** @jsx jsx */
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_1 = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/react-spinners/helpers/index.js");
var puff = [
    react_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0%  {transform: scale(0)}\n  100% {transform: scale(1.0)}\n"], ["\n  0%  {transform: scale(0)}\n  100% {transform: scale(1.0)}\n"]))),
    react_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  0%  {opacity: 1}\n  100% {opacity: 0}\n"], ["\n  0%  {opacity: 1}\n  100% {opacity: 0}\n"])))
];
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getSize = function () {
            return _this.props.size;
        };
        _this.style = function (i) {
            var _a = _this.props, color = _a.color, speedMultiplier = _a.speedMultiplier;
            return react_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      position: absolute;\n      height: ", ";\n      width: ", ";\n      border: thick solid ", ";\n      border-radius: 50%;\n      opacity: 1;\n      top: 0;\n      left: 0;\n      animation-fill-mode: both;\n      animation: ", ", ", ";\n      animation-duration: ", "s;\n      animation-iteration-count: infinite;\n      animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1), cubic-bezier(0.3, 0.61, 0.355, 1);\n      animation-delay: ", ";\n    "], ["\n      position: absolute;\n      height: ", ";\n      width: ", ";\n      border: thick solid ", ";\n      border-radius: 50%;\n      opacity: 1;\n      top: 0;\n      left: 0;\n      animation-fill-mode: both;\n      animation: ", ", ", ";\n      animation-duration: ", "s;\n      animation-iteration-count: infinite;\n      animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1), cubic-bezier(0.3, 0.61, 0.355, 1);\n      animation-delay: ", ";\n    "])), helpers_1.cssValue(_this.getSize()), helpers_1.cssValue(_this.getSize()), color, puff[0], puff[1], 2 / speedMultiplier, i === 1 ? "-1s" : "0s");
        };
        _this.wrapper = function () {
            return react_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      position: relative;\n      width: ", ";\n      height: ", ";\n    "], ["\n      position: relative;\n      width: ", ";\n      height: ", ";\n    "])), helpers_1.cssValue(_this.getSize()), helpers_1.cssValue(_this.getSize()));
        };
        return _this;
    }
    Loader.prototype.render = function () {
        var _a = this.props, loading = _a.loading, css = _a.css;
        return loading ? (react_1.jsx("span", { css: [this.wrapper(), css] },
            react_1.jsx("span", { css: this.style(1) }),
            react_1.jsx("span", { css: this.style(2) }))) : null;
    };
    Loader.defaultProps = helpers_1.sizeDefaults(60);
    return Loader;
}(React.PureComponent));
exports.default = Loader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./node_modules/react-spinners/PulseLoader.js":
/*!****************************************************!*\
  !*** ./node_modules/react-spinners/PulseLoader.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/** @jsx jsx */
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_1 = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/react-spinners/helpers/index.js");
var pulse = react_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {transform: scale(1);opacity: 1}\n  45% {transform: scale(0.1);opacity: 0.7}\n  80% {transform: scale(1);opacity: 1}\n"], ["\n  0% {transform: scale(1);opacity: 1}\n  45% {transform: scale(0.1);opacity: 0.7}\n  80% {transform: scale(1);opacity: 1}\n"])));
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.style = function (i) {
            var _a = _this.props, color = _a.color, size = _a.size, margin = _a.margin, speedMultiplier = _a.speedMultiplier;
            return react_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      background-color: ", ";\n      width: ", ";\n      height: ", ";\n      margin: ", ";\n      border-radius: 100%;\n      display: inline-block;\n      animation: ", " ", "s ", "s infinite\n        cubic-bezier(0.2, 0.68, 0.18, 1.08);\n      animation-fill-mode: both;\n    "], ["\n      background-color: ", ";\n      width: ", ";\n      height: ", ";\n      margin: ", ";\n      border-radius: 100%;\n      display: inline-block;\n      animation: ", " ", "s ", "s infinite\n        cubic-bezier(0.2, 0.68, 0.18, 1.08);\n      animation-fill-mode: both;\n    "])), color, helpers_1.cssValue(size), helpers_1.cssValue(size), helpers_1.cssValue(margin), pulse, 0.75 / speedMultiplier, (i * 0.12) / speedMultiplier);
        };
        return _this;
    }
    Loader.prototype.render = function () {
        var _a = this.props, loading = _a.loading, css = _a.css;
        return loading ? (react_1.jsx("span", { css: [css] },
            react_1.jsx("span", { css: this.style(1) }),
            react_1.jsx("span", { css: this.style(2) }),
            react_1.jsx("span", { css: this.style(3) }))) : null;
    };
    Loader.defaultProps = helpers_1.sizeMarginDefaults(15);
    return Loader;
}(React.PureComponent));
exports.default = Loader;
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./node_modules/react-spinners/RingLoader.js":
/*!***************************************************!*\
  !*** ./node_modules/react-spinners/RingLoader.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/** @jsx jsx */
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_1 = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/react-spinners/helpers/index.js");
var right = react_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)}\n  100% {transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg)}\n"], ["\n  0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)}\n  100% {transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg)}\n"])));
var left = react_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)}\n  100% {transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg)}\n"], ["\n  0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)}\n  100% {transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg)}\n"])));
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getSize = function () {
            return _this.props.size;
        };
        _this.style = function (i) {
            var _a = _this.props, color = _a.color, speedMultiplier = _a.speedMultiplier;
            var _b = helpers_1.parseLengthAndUnit(_this.getSize()), value = _b.value, unit = _b.unit;
            return react_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: ", ";\n      height: ", ";\n      border: ", " solid ", ";\n      opacity: 0.4;\n      border-radius: 100%;\n      animation-fill-mode: forwards;\n      perspective: 800px;\n      animation: ", " ", "s 0s infinite linear;\n    "], ["\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: ", ";\n      height: ", ";\n      border: ", " solid ", ";\n      opacity: 0.4;\n      border-radius: 100%;\n      animation-fill-mode: forwards;\n      perspective: 800px;\n      animation: ", " ", "s 0s infinite linear;\n    "])), "" + value + unit, "" + value + unit, "" + value / 10 + unit, color, i === 1 ? right : left, 2 / speedMultiplier);
        };
        _this.wrapper = function () {
            return react_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      width: ", ";\n      height: ", ";\n      position: relative;\n    "], ["\n      width: ", ";\n      height: ", ";\n      position: relative;\n    "])), helpers_1.cssValue(_this.getSize()), helpers_1.cssValue(_this.getSize()));
        };
        return _this;
    }
    Loader.prototype.render = function () {
        var _a = this.props, loading = _a.loading, css = _a.css;
        return loading ? (react_1.jsx("span", { css: [this.wrapper(), css] },
            react_1.jsx("span", { css: this.style(1) }),
            react_1.jsx("span", { css: this.style(2) }))) : null;
    };
    Loader.defaultProps = helpers_1.sizeDefaults(60);
    return Loader;
}(React.PureComponent));
exports.default = Loader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./node_modules/react-spinners/RiseLoader.js":
/*!***************************************************!*\
  !*** ./node_modules/react-spinners/RiseLoader.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/** @jsx jsx */
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_1 = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/react-spinners/helpers/index.js");
var riseAmount = 30;
var even = react_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {transform: scale(1.1)}\n  25% {transform: translateY(-", "px)}\n  50% {transform: scale(0.4)}\n  75% {transform: translateY(", "px)}\n  100% {transform: translateY(0) scale(1.0)}\n"], ["\n  0% {transform: scale(1.1)}\n  25% {transform: translateY(-", "px)}\n  50% {transform: scale(0.4)}\n  75% {transform: translateY(", "px)}\n  100% {transform: translateY(0) scale(1.0)}\n"])), riseAmount, riseAmount);
var odd = react_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  0% {transform: scale(0.4)}\n  25% {transform: translateY(", "px)}\n  50% {transform: scale(1.1)}\n  75% {transform: translateY(", "px)}\n  100% {transform: translateY(0) scale(0.75)}\n"], ["\n  0% {transform: scale(0.4)}\n  25% {transform: translateY(", "px)}\n  50% {transform: scale(1.1)}\n  75% {transform: translateY(", "px)}\n  100% {transform: translateY(0) scale(0.75)}\n"])), riseAmount, -riseAmount);
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.style = function (i) {
            var _a = _this.props, color = _a.color, size = _a.size, margin = _a.margin, speedMultiplier = _a.speedMultiplier;
            return react_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      background-color: ", ";\n      width: ", ";\n      height: ", ";\n      margin: ", ";\n      border-radius: 100%;\n      display: inline-block;\n      animation: ", " ", "s 0s infinite cubic-bezier(0.15, 0.46, 0.9, 0.6);\n      animation-fill-mode: both;\n    "], ["\n      background-color: ", ";\n      width: ", ";\n      height: ", ";\n      margin: ", ";\n      border-radius: 100%;\n      display: inline-block;\n      animation: ", " ", "s 0s infinite cubic-bezier(0.15, 0.46, 0.9, 0.6);\n      animation-fill-mode: both;\n    "])), color, helpers_1.cssValue(size), helpers_1.cssValue(size), helpers_1.cssValue(margin), i % 2 === 0 ? even : odd, 1 / speedMultiplier);
        };
        return _this;
    }
    Loader.prototype.render = function () {
        var _a = this.props, loading = _a.loading, css = _a.css;
        return loading ? (react_1.jsx("span", { css: [css] },
            react_1.jsx("span", { css: this.style(1) }),
            react_1.jsx("span", { css: this.style(2) }),
            react_1.jsx("span", { css: this.style(3) }),
            react_1.jsx("span", { css: this.style(4) }),
            react_1.jsx("span", { css: this.style(5) }))) : null;
    };
    Loader.defaultProps = helpers_1.sizeMarginDefaults(15);
    return Loader;
}(React.PureComponent));
exports.default = Loader;
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./node_modules/react-spinners/RotateLoader.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-spinners/RotateLoader.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/** @jsx jsx */
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_1 = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/react-spinners/helpers/index.js");
var rotate = react_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {transform: rotate(0deg)}\n  50% {transform: rotate(180deg)}\n  100% {transform: rotate(360deg)}\n"], ["\n  0% {transform: rotate(0deg)}\n  50% {transform: rotate(180deg)}\n  100% {transform: rotate(360deg)}\n"])));
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.style = function (i) {
            var margin = _this.props.margin;
            var _a = helpers_1.parseLengthAndUnit(margin), value = _a.value, unit = _a.unit;
            var left = (i % 2 ? -1 : 1) * (26 + value);
            return react_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      opacity: 0.8;\n      position: absolute;\n      top: 0;\n      left: ", "", ";\n    "], ["\n      opacity: 0.8;\n      position: absolute;\n      top: 0;\n      left: ", "", ";\n    "])), left, unit);
        };
        _this.ball = function () {
            var _a = _this.props, color = _a.color, size = _a.size;
            return react_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      background-color: ", ";\n      width: ", ";\n      height: ", ";\n      border-radius: 100%;\n    "], ["\n      background-color: ", ";\n      width: ", ";\n      height: ", ";\n      border-radius: 100%;\n    "])), color, helpers_1.cssValue(size), helpers_1.cssValue(size));
        };
        _this.wrapper = function () {
            var speedMultiplier = _this.props.speedMultiplier;
            return react_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      ", ";\n      display: inline-block;\n      position: relative;\n      animation-fill-mode: both;\n      animation: ", " ", "s 0s infinite cubic-bezier(0.7, -0.13, 0.22, 0.86);\n    "], ["\n      ", ";\n      display: inline-block;\n      position: relative;\n      animation-fill-mode: both;\n      animation: ", " ", "s 0s infinite cubic-bezier(0.7, -0.13, 0.22, 0.86);\n    "])), _this.ball(), rotate, 1 / speedMultiplier);
        };
        _this.long = function () { return react_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    ", ";\n    ", ";\n  "], ["\n    ", ";\n    ", ";\n  "])), _this.ball(), _this.style(1)); };
        _this.short = function () { return react_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    ", ";\n    ", ";\n  "], ["\n    ", ";\n    ", ";\n  "])), _this.ball(), _this.style(2)); };
        return _this;
    }
    Loader.prototype.render = function () {
        var _a = this.props, loading = _a.loading, css = _a.css;
        return loading ? (react_1.jsx("span", { css: [this.wrapper(), css] },
            react_1.jsx("span", { css: this.long() }),
            react_1.jsx("span", { css: this.short() }))) : null;
    };
    Loader.defaultProps = helpers_1.sizeMarginDefaults(15);
    return Loader;
}(React.PureComponent));
exports.default = Loader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./node_modules/react-spinners/ScaleLoader.js":
/*!****************************************************!*\
  !*** ./node_modules/react-spinners/ScaleLoader.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/** @jsx jsx */
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_1 = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/react-spinners/helpers/index.js");
var scale = react_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {transform: scaley(1.0)}\n  50% {transform: scaley(0.4)}\n  100% {transform: scaley(1.0)}\n"], ["\n  0% {transform: scaley(1.0)}\n  50% {transform: scaley(0.4)}\n  100% {transform: scaley(1.0)}\n"])));
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.style = function (i) {
            var _a = _this.props, color = _a.color, width = _a.width, height = _a.height, margin = _a.margin, radius = _a.radius, speedMultiplier = _a.speedMultiplier;
            return react_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      background-color: ", ";\n      width: ", ";\n      height: ", ";\n      margin: ", ";\n      border-radius: ", ";\n      display: inline-block;\n      animation: ", " ", "s ", "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);\n      animation-fill-mode: both;\n    "], ["\n      background-color: ", ";\n      width: ", ";\n      height: ", ";\n      margin: ", ";\n      border-radius: ", ";\n      display: inline-block;\n      animation: ", " ", "s ", "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);\n      animation-fill-mode: both;\n    "])), color, helpers_1.cssValue(width), helpers_1.cssValue(height), helpers_1.cssValue(margin), helpers_1.cssValue(radius), scale, 1 / speedMultiplier, i * 0.1);
        };
        return _this;
    }
    Loader.prototype.render = function () {
        var _a = this.props, loading = _a.loading, css = _a.css;
        return loading ? (react_1.jsx("span", { css: [css] },
            react_1.jsx("span", { css: this.style(1) }),
            react_1.jsx("span", { css: this.style(2) }),
            react_1.jsx("span", { css: this.style(3) }),
            react_1.jsx("span", { css: this.style(4) }),
            react_1.jsx("span", { css: this.style(5) }))) : null;
    };
    Loader.defaultProps = helpers_1.heightWidthRadiusDefaults(35, 4, 2);
    return Loader;
}(React.PureComponent));
exports.default = Loader;
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./node_modules/react-spinners/SkewLoader.js":
/*!***************************************************!*\
  !*** ./node_modules/react-spinners/SkewLoader.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/** @jsx jsx */
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_1 = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/react-spinners/helpers/index.js");
var skew = react_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  25% {transform: perspective(100px) rotateX(180deg) rotateY(0)}\n  50% {transform: perspective(100px) rotateX(180deg) rotateY(180deg)}\n  75% {transform: perspective(100px) rotateX(0) rotateY(180deg)}\n  100% {transform: perspective(100px) rotateX(0) rotateY(0)}\n"], ["\n  25% {transform: perspective(100px) rotateX(180deg) rotateY(0)}\n  50% {transform: perspective(100px) rotateX(180deg) rotateY(180deg)}\n  75% {transform: perspective(100px) rotateX(0) rotateY(180deg)}\n  100% {transform: perspective(100px) rotateX(0) rotateY(0)}\n"])));
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.style = function () {
            var _a = _this.props, color = _a.color, speedMultiplier = _a.speedMultiplier, size = _a.size;
            return react_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      width: 0;\n      height: 0;\n      border-left: ", " solid transparent;\n      border-right: ", " solid transparent;\n      border-bottom: ", " solid ", ";\n      display: inline-block;\n      animation: ", " ", "s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9);\n      animation-fill-mode: both;\n    "], ["\n      width: 0;\n      height: 0;\n      border-left: ", " solid transparent;\n      border-right: ", " solid transparent;\n      border-bottom: ", " solid ", ";\n      display: inline-block;\n      animation: ", " ", "s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9);\n      animation-fill-mode: both;\n    "])), helpers_1.cssValue(size), helpers_1.cssValue(size), helpers_1.cssValue(size), color, skew, 3 / speedMultiplier);
        };
        return _this;
    }
    Loader.prototype.render = function () {
        var _a = this.props, loading = _a.loading, css = _a.css;
        return loading ? react_1.jsx("span", { css: [this.style(), css] }) : null;
    };
    Loader.defaultProps = helpers_1.sizeDefaults(20);
    return Loader;
}(React.PureComponent));
exports.default = Loader;
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./node_modules/react-spinners/SquareLoader.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-spinners/SquareLoader.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/** @jsx jsx */
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_1 = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/react-spinners/helpers/index.js");
var square = react_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  25% {transform: rotateX(180deg) rotateY(0)}\n  50% {transform: rotateX(180deg) rotateY(180deg)}\n  75% {transform: rotateX(0) rotateY(180deg)}\n  100% {transform: rotateX(0) rotateY(0)}\n"], ["\n  25% {transform: rotateX(180deg) rotateY(0)}\n  50% {transform: rotateX(180deg) rotateY(180deg)}\n  75% {transform: rotateX(0) rotateY(180deg)}\n  100% {transform: rotateX(0) rotateY(0)}\n"])));
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.style = function () {
            var _a = _this.props, color = _a.color, size = _a.size, speedMultiplier = _a.speedMultiplier;
            return react_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      background-color: ", ";\n      width: ", ";\n      height: ", ";\n      display: inline-block;\n      animation: ", " ", "s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9);\n      animation-fill-mode: both;\n    "], ["\n      background-color: ", ";\n      width: ", ";\n      height: ", ";\n      display: inline-block;\n      animation: ", " ", "s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9);\n      animation-fill-mode: both;\n    "])), color, helpers_1.cssValue(size), helpers_1.cssValue(size), square, 3 / speedMultiplier);
        };
        return _this;
    }
    Loader.prototype.render = function () {
        var _a = this.props, loading = _a.loading, css = _a.css;
        return loading ? react_1.jsx("span", { css: [this.style(), css] }) : null;
    };
    Loader.defaultProps = helpers_1.sizeDefaults(50);
    return Loader;
}(React.PureComponent));
exports.default = Loader;
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./node_modules/react-spinners/SyncLoader.js":
/*!***************************************************!*\
  !*** ./node_modules/react-spinners/SyncLoader.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/** @jsx jsx */
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_1 = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
var proptypes_1 = __webpack_require__(/*! ./helpers/proptypes */ "./node_modules/react-spinners/helpers/proptypes.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/react-spinners/helpers/index.js");
var sync = react_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  33% {transform: translateY(10px)}\n  66% {transform: translateY(-10px)}\n  100% {transform: translateY(0)}\n"], ["\n  33% {transform: translateY(10px)}\n  66% {transform: translateY(-10px)}\n  100% {transform: translateY(0)}\n"])));
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.style = function (i) {
            var _a = _this.props, color = _a.color, size = _a.size, margin = _a.margin, speedMultiplier = _a.speedMultiplier;
            return react_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      background-color: ", ";\n      width: ", ";\n      height: ", ";\n      margin: ", ";\n      border-radius: 100%;\n      display: inline-block;\n      animation: ", " ", "s ", "s infinite ease-in-out;\n      animation-fill-mode: both;\n    "], ["\n      background-color: ", ";\n      width: ", ";\n      height: ", ";\n      margin: ", ";\n      border-radius: 100%;\n      display: inline-block;\n      animation: ", " ", "s ", "s infinite ease-in-out;\n      animation-fill-mode: both;\n    "])), color, helpers_1.cssValue(size), helpers_1.cssValue(size), helpers_1.cssValue(margin), sync, 0.6 / speedMultiplier, i * 0.07);
        };
        return _this;
    }
    Loader.prototype.render = function () {
        var _a = this.props, loading = _a.loading, css = _a.css;
        return loading ? (react_1.jsx("span", { css: [css] },
            react_1.jsx("span", { css: this.style(1) }),
            react_1.jsx("span", { css: this.style(2) }),
            react_1.jsx("span", { css: this.style(3) }))) : null;
    };
    Loader.defaultProps = proptypes_1.sizeMarginDefaults(15);
    return Loader;
}(React.PureComponent));
exports.default = Loader;
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./node_modules/react-spinners/helpers/colors.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-spinners/helpers/colors.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.calculateRgba = void 0;
var BasicColors;
(function (BasicColors) {
    BasicColors["maroon"] = "#800000";
    BasicColors["red"] = "#FF0000";
    BasicColors["orange"] = "#FFA500";
    BasicColors["yellow"] = "#FFFF00";
    BasicColors["olive"] = "#808000";
    BasicColors["green"] = "#008000";
    BasicColors["purple"] = "#800080";
    BasicColors["fuchsia"] = "#FF00FF";
    BasicColors["lime"] = "#00FF00";
    BasicColors["teal"] = "#008080";
    BasicColors["aqua"] = "#00FFFF";
    BasicColors["blue"] = "#0000FF";
    BasicColors["navy"] = "#000080";
    BasicColors["black"] = "#000000";
    BasicColors["gray"] = "#808080";
    BasicColors["silver"] = "#C0C0C0";
    BasicColors["white"] = "#FFFFFF";
})(BasicColors || (BasicColors = {}));
var calculateRgba = function (color, opacity) {
    if (Object.keys(BasicColors).includes(color)) {
        color = BasicColors[color];
    }
    if (color[0] === "#") {
        color = color.slice(1);
    }
    if (color.length === 3) {
        var res_1 = "";
        color.split("").forEach(function (c) {
            res_1 += c;
            res_1 += c;
        });
        color = res_1;
    }
    var rgbValues = (color.match(/.{2}/g) || [])
        .map(function (hex) { return parseInt(hex, 16); })
        .join(", ");
    return "rgba(" + rgbValues + ", " + opacity + ")";
};
exports.calculateRgba = calculateRgba;


/***/ }),

/***/ "./node_modules/react-spinners/helpers/index.js":
/*!******************************************************!*\
  !*** ./node_modules/react-spinners/helpers/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./proptypes */ "./node_modules/react-spinners/helpers/proptypes.js"), exports);
__exportStar(__webpack_require__(/*! ./colors */ "./node_modules/react-spinners/helpers/colors.js"), exports);
__exportStar(__webpack_require__(/*! ./unitConverter */ "./node_modules/react-spinners/helpers/unitConverter.js"), exports);


/***/ }),

/***/ "./node_modules/react-spinners/helpers/proptypes.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-spinners/helpers/proptypes.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.heightWidthRadiusDefaults = exports.heightWidthDefaults = exports.sizeMarginDefaults = exports.sizeDefaults = void 0;
/*
 * DefaultProps object for different loaders
 */
var commonValues = {
    loading: true,
    color: "#000000",
    css: "",
    speedMultiplier: 1
};
function sizeDefaults(sizeValue) {
    return Object.assign({}, commonValues, { size: sizeValue });
}
exports.sizeDefaults = sizeDefaults;
function sizeMarginDefaults(sizeValue) {
    return Object.assign({}, sizeDefaults(sizeValue), {
        margin: 2
    });
}
exports.sizeMarginDefaults = sizeMarginDefaults;
function heightWidthDefaults(height, width) {
    return Object.assign({}, commonValues, {
        height: height,
        width: width
    });
}
exports.heightWidthDefaults = heightWidthDefaults;
function heightWidthRadiusDefaults(height, width, radius) {
    if (radius === void 0) { radius = 2; }
    return Object.assign({}, heightWidthDefaults(height, width), {
        radius: radius,
        margin: 2
    });
}
exports.heightWidthRadiusDefaults = heightWidthRadiusDefaults;


/***/ }),

/***/ "./node_modules/react-spinners/helpers/unitConverter.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-spinners/helpers/unitConverter.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cssValue = exports.parseLengthAndUnit = void 0;
var cssUnit = {
    cm: true,
    mm: true,
    in: true,
    px: true,
    pt: true,
    pc: true,
    em: true,
    ex: true,
    ch: true,
    rem: true,
    vw: true,
    vh: true,
    vmin: true,
    vmax: true,
    "%": true
};
/**
 * If size is a number, append px to the value as default unit.
 * If size is a string, validate against list of valid units.
 * If unit is valid, return size as is.
 * If unit is invalid, console warn issue, replace with px as the unit.
 *
 * @param {(number | string)} size
 * @return {LengthObject} LengthObject
 */
function parseLengthAndUnit(size) {
    if (typeof size === "number") {
        return {
            value: size,
            unit: "px"
        };
    }
    var value;
    var valueString = (size.match(/^[0-9.]*/) || "").toString();
    if (valueString.includes(".")) {
        value = parseFloat(valueString);
    }
    else {
        value = parseInt(valueString, 10);
    }
    var unit = (size.match(/[^0-9]*$/) || "").toString();
    if (cssUnit[unit]) {
        return {
            value: value,
            unit: unit
        };
    }
    console.warn("React Spinners: " + size + " is not a valid css value. Defaulting to " + value + "px.");
    return {
        value: value,
        unit: "px"
    };
}
exports.parseLengthAndUnit = parseLengthAndUnit;
/**
 * Take value as an input and return valid css value
 *
 * @param {(number | string)} value
 * @return {string} valid css value
 */
function cssValue(value) {
    var lengthWithunit = parseLengthAndUnit(value);
    return "" + lengthWithunit.value + lengthWithunit.unit;
}
exports.cssValue = cssValue;


/***/ }),

/***/ "./node_modules/react-spinners/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-spinners/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SyncLoader = exports.SquareLoader = exports.SkewLoader = exports.ScaleLoader = exports.RotateLoader = exports.RiseLoader = exports.RingLoader = exports.PuffLoader = exports.PulseLoader = exports.PropagateLoader = exports.PacmanLoader = exports.MoonLoader = exports.HashLoader = exports.GridLoader = exports.FadeLoader = exports.DotLoader = exports.ClockLoader = exports.ClipLoader = exports.ClimbingBoxLoader = exports.CircleLoader = exports.BounceLoader = exports.BeatLoader = exports.BarLoader = void 0;
var BarLoader_1 = __webpack_require__(/*! ./BarLoader */ "./node_modules/react-spinners/BarLoader.js");
Object.defineProperty(exports, "BarLoader", ({ enumerable: true, get: function () { return __importDefault(BarLoader_1).default; } }));
var BeatLoader_1 = __webpack_require__(/*! ./BeatLoader */ "./node_modules/react-spinners/BeatLoader.js");
Object.defineProperty(exports, "BeatLoader", ({ enumerable: true, get: function () { return __importDefault(BeatLoader_1).default; } }));
var BounceLoader_1 = __webpack_require__(/*! ./BounceLoader */ "./node_modules/react-spinners/BounceLoader.js");
Object.defineProperty(exports, "BounceLoader", ({ enumerable: true, get: function () { return __importDefault(BounceLoader_1).default; } }));
var CircleLoader_1 = __webpack_require__(/*! ./CircleLoader */ "./node_modules/react-spinners/CircleLoader.js");
Object.defineProperty(exports, "CircleLoader", ({ enumerable: true, get: function () { return __importDefault(CircleLoader_1).default; } }));
var ClimbingBoxLoader_1 = __webpack_require__(/*! ./ClimbingBoxLoader */ "./node_modules/react-spinners/ClimbingBoxLoader.js");
Object.defineProperty(exports, "ClimbingBoxLoader", ({ enumerable: true, get: function () { return __importDefault(ClimbingBoxLoader_1).default; } }));
var ClipLoader_1 = __webpack_require__(/*! ./ClipLoader */ "./node_modules/react-spinners/ClipLoader.js");
Object.defineProperty(exports, "ClipLoader", ({ enumerable: true, get: function () { return __importDefault(ClipLoader_1).default; } }));
var ClockLoader_1 = __webpack_require__(/*! ./ClockLoader */ "./node_modules/react-spinners/ClockLoader.js");
Object.defineProperty(exports, "ClockLoader", ({ enumerable: true, get: function () { return __importDefault(ClockLoader_1).default; } }));
var DotLoader_1 = __webpack_require__(/*! ./DotLoader */ "./node_modules/react-spinners/DotLoader.js");
Object.defineProperty(exports, "DotLoader", ({ enumerable: true, get: function () { return __importDefault(DotLoader_1).default; } }));
var FadeLoader_1 = __webpack_require__(/*! ./FadeLoader */ "./node_modules/react-spinners/FadeLoader.js");
Object.defineProperty(exports, "FadeLoader", ({ enumerable: true, get: function () { return __importDefault(FadeLoader_1).default; } }));
var GridLoader_1 = __webpack_require__(/*! ./GridLoader */ "./node_modules/react-spinners/GridLoader.js");
Object.defineProperty(exports, "GridLoader", ({ enumerable: true, get: function () { return __importDefault(GridLoader_1).default; } }));
var HashLoader_1 = __webpack_require__(/*! ./HashLoader */ "./node_modules/react-spinners/HashLoader.js");
Object.defineProperty(exports, "HashLoader", ({ enumerable: true, get: function () { return __importDefault(HashLoader_1).default; } }));
var MoonLoader_1 = __webpack_require__(/*! ./MoonLoader */ "./node_modules/react-spinners/MoonLoader.js");
Object.defineProperty(exports, "MoonLoader", ({ enumerable: true, get: function () { return __importDefault(MoonLoader_1).default; } }));
var PacmanLoader_1 = __webpack_require__(/*! ./PacmanLoader */ "./node_modules/react-spinners/PacmanLoader.js");
Object.defineProperty(exports, "PacmanLoader", ({ enumerable: true, get: function () { return __importDefault(PacmanLoader_1).default; } }));
var PropagateLoader_1 = __webpack_require__(/*! ./PropagateLoader */ "./node_modules/react-spinners/PropagateLoader.js");
Object.defineProperty(exports, "PropagateLoader", ({ enumerable: true, get: function () { return __importDefault(PropagateLoader_1).default; } }));
var PulseLoader_1 = __webpack_require__(/*! ./PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
Object.defineProperty(exports, "PulseLoader", ({ enumerable: true, get: function () { return __importDefault(PulseLoader_1).default; } }));
var PuffLoader_1 = __webpack_require__(/*! ./PuffLoader */ "./node_modules/react-spinners/PuffLoader.js");
Object.defineProperty(exports, "PuffLoader", ({ enumerable: true, get: function () { return __importDefault(PuffLoader_1).default; } }));
var RingLoader_1 = __webpack_require__(/*! ./RingLoader */ "./node_modules/react-spinners/RingLoader.js");
Object.defineProperty(exports, "RingLoader", ({ enumerable: true, get: function () { return __importDefault(RingLoader_1).default; } }));
var RiseLoader_1 = __webpack_require__(/*! ./RiseLoader */ "./node_modules/react-spinners/RiseLoader.js");
Object.defineProperty(exports, "RiseLoader", ({ enumerable: true, get: function () { return __importDefault(RiseLoader_1).default; } }));
var RotateLoader_1 = __webpack_require__(/*! ./RotateLoader */ "./node_modules/react-spinners/RotateLoader.js");
Object.defineProperty(exports, "RotateLoader", ({ enumerable: true, get: function () { return __importDefault(RotateLoader_1).default; } }));
var ScaleLoader_1 = __webpack_require__(/*! ./ScaleLoader */ "./node_modules/react-spinners/ScaleLoader.js");
Object.defineProperty(exports, "ScaleLoader", ({ enumerable: true, get: function () { return __importDefault(ScaleLoader_1).default; } }));
var SkewLoader_1 = __webpack_require__(/*! ./SkewLoader */ "./node_modules/react-spinners/SkewLoader.js");
Object.defineProperty(exports, "SkewLoader", ({ enumerable: true, get: function () { return __importDefault(SkewLoader_1).default; } }));
var SquareLoader_1 = __webpack_require__(/*! ./SquareLoader */ "./node_modules/react-spinners/SquareLoader.js");
Object.defineProperty(exports, "SquareLoader", ({ enumerable: true, get: function () { return __importDefault(SquareLoader_1).default; } }));
var SyncLoader_1 = __webpack_require__(/*! ./SyncLoader */ "./node_modules/react-spinners/SyncLoader.js");
Object.defineProperty(exports, "SyncLoader", ({ enumerable: true, get: function () { return __importDefault(SyncLoader_1).default; } }));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9jYWNoZS9kaXN0L2Vtb3Rpb24tY2FjaGUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9jYWNoZS9ub2RlX21vZHVsZXMvc3R5bGlzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vY2FjaGUvbm9kZV9tb2R1bGVzL3N0eWxpcy9zcmMvRW51bS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2NhY2hlL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL01pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9jYWNoZS9ub2RlX21vZHVsZXMvc3R5bGlzL3NyYy9QYXJzZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9jYWNoZS9ub2RlX21vZHVsZXMvc3R5bGlzL3NyYy9QcmVmaXhlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2NhY2hlL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL1NlcmlhbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9jYWNoZS9ub2RlX21vZHVsZXMvc3R5bGlzL3NyYy9Ub2tlbml6ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9jYWNoZS9ub2RlX21vZHVsZXMvc3R5bGlzL3NyYy9VdGlsaXR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vaGFzaC9kaXN0L2hhc2guYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvZW1vdGlvbi1tZW1vaXplLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vcmVhY3QvX2lzb2xhdGVkLWhucnMvZGlzdC9lbW90aW9uLXJlYWN0LV9pc29sYXRlZC1obnJzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vcmVhY3QvZGlzdC9lbW90aW9uLWVsZW1lbnQtY2JlZDQ1MWYuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9yZWFjdC9kaXN0L2Vtb3Rpb24tcmVhY3QuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zZXJpYWxpemUvZGlzdC9lbW90aW9uLXNlcmlhbGl6ZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3NoZWV0L2Rpc3QvZW1vdGlvbi1zaGVldC5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3VuaXRsZXNzL2Rpc3QvdW5pdGxlc3MuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91dGlscy9kaXN0L2Vtb3Rpb24tdXRpbHMuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi93ZWFrLW1lbW9pemUvZGlzdC93ZWFrLW1lbW9pemUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL05GVHMvW3Rva2VuSWRdLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXJzL0JhckxvYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXJzL0JlYXRMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zcGlubmVycy9Cb3VuY2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zcGlubmVycy9DaXJjbGVMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zcGlubmVycy9DbGltYmluZ0JveExvYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXJzL0NsaXBMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zcGlubmVycy9DbG9ja0xvYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXJzL0RvdExvYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXJzL0ZhZGVMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zcGlubmVycy9HcmlkTG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3Bpbm5lcnMvSGFzaExvYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXJzL01vb25Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zcGlubmVycy9QYWNtYW5Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zcGlubmVycy9Qcm9wYWdhdGVMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zcGlubmVycy9QdWZmTG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3Bpbm5lcnMvUHVsc2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zcGlubmVycy9SaW5nTG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3Bpbm5lcnMvUmlzZUxvYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXJzL1JvdGF0ZUxvYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXJzL1NjYWxlTG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3Bpbm5lcnMvU2tld0xvYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXJzL1NxdWFyZUxvYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXJzL1N5bmNMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zcGlubmVycy9oZWxwZXJzL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXJzL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zcGlubmVycy9oZWxwZXJzL3Byb3B0eXBlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXJzL2hlbHBlcnMvdW5pdENvbnZlcnRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXJzL2luZGV4LmpzIl0sIm5hbWVzIjpbIk5GVFBhZ2UiLCJ1c2VTdGF0ZSIsIm5mdHMiLCJzZXROZnRzIiwic2VsZWN0ZWROZnQiLCJzZXRTZWxlY3RlZE5mdCIsImlzTG9hZGVkIiwic2V0SXNMb2FkZWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ0b2tlbklkIiwicXVlcnkiLCJ1c2VFZmZlY3QiLCJsb2FkTkZUcyIsInVwZGF0ZVNlbGVjdGVkTkZUIiwicHJvdmlkZXIiLCJldGhlcnMiLCJjb250cmFjdCIsIm1hcmtldHBsYWNlQWRkcmVzcyIsIk5GVE1hcmtldHBsYWNlIiwiZmV0Y2hNYXJrZXRJdGVtcyIsImRhdGEiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaSIsInRva2VuVVJJIiwidG9rZW5VcmkiLCJheGlvcyIsIm1ldGEiLCJwcmljZSIsInRvU3RyaW5nIiwiaXRlbSIsInRvTnVtYmVyIiwic2VsbGVyIiwib3duZXIiLCJpbWFnZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIml0ZW1zIiwiY29uc29sZSIsImxvZyIsIm5mdCIsIk51bWJlciIsImJ1eU5mdCIsIndlYjNNb2RhbCIsIldlYjNNb2RhbCIsImNvbm5lY3QiLCJjb25uZWN0aW9uIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwiY3JlYXRlTWFya2V0U2FsZSIsInZhbHVlIiwidHJhbnNhY3Rpb24iLCJ3YWl0IiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEI0QztBQUN3SDtBQUNySTtBQUNMOztBQUUxQjtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxn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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUN0R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7OztBQUliLElBQUksSUFBcUM7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEU7QUFDMUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7O0FBRWpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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ODNiMjk2Mjk4NjIwNTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gJ0BlbW90aW9uL3NoZWV0JztcbmltcG9ydCB7IGRlYWxsb2MsIGFsbG9jLCBuZXh0LCB0b2tlbiwgZnJvbSwgcGVlaywgZGVsaW1pdCwgc2xpY2UsIHBvc2l0aW9uLCBzdHJpbmdpZnksIENPTU1FTlQsIHJ1bGVzaGVldCwgbWlkZGxld2FyZSwgcHJlZml4ZXIsIHNlcmlhbGl6ZSwgY29tcGlsZSB9IGZyb20gJ3N0eWxpcyc7XG5pbXBvcnQgJ0BlbW90aW9uL3dlYWstbWVtb2l6ZSc7XG5pbXBvcnQgJ0BlbW90aW9uL21lbW9pemUnO1xuXG52YXIgbGFzdCA9IGZ1bmN0aW9uIGxhc3QoYXJyKSB7XG4gIHJldHVybiBhcnIubGVuZ3RoID8gYXJyW2Fyci5sZW5ndGggLSAxXSA6IG51bGw7XG59OyAvLyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vdGh5c3VsdGFuL3N0eWxpcy5qcy9ibG9iL2U2ODQzYzM3M2ViY2JiZmFkZTI1ZWJjYzIzZjU0MGVkODUwOGRhMGEvc3JjL1Rva2VuaXplci5qcyNMMjM5LUwyNDRcblxuXG52YXIgaWRlbnRpZmllcldpdGhQb2ludFRyYWNraW5nID0gZnVuY3Rpb24gaWRlbnRpZmllcldpdGhQb2ludFRyYWNraW5nKGJlZ2luLCBwb2ludHMsIGluZGV4KSB7XG4gIHZhciBwcmV2aW91cyA9IDA7XG4gIHZhciBjaGFyYWN0ZXIgPSAwO1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgcHJldmlvdXMgPSBjaGFyYWN0ZXI7XG4gICAgY2hhcmFjdGVyID0gcGVlaygpOyAvLyAmXFxmXG5cbiAgICBpZiAocHJldmlvdXMgPT09IDM4ICYmIGNoYXJhY3RlciA9PT0gMTIpIHtcbiAgICAgIHBvaW50c1tpbmRleF0gPSAxO1xuICAgIH1cblxuICAgIGlmICh0b2tlbihjaGFyYWN0ZXIpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBuZXh0KCk7XG4gIH1cblxuICByZXR1cm4gc2xpY2UoYmVnaW4sIHBvc2l0aW9uKTtcbn07XG5cbnZhciB0b1J1bGVzID0gZnVuY3Rpb24gdG9SdWxlcyhwYXJzZWQsIHBvaW50cykge1xuICAvLyBwcmV0ZW5kIHdlJ3ZlIHN0YXJ0ZWQgd2l0aCBhIGNvbW1hXG4gIHZhciBpbmRleCA9IC0xO1xuICB2YXIgY2hhcmFjdGVyID0gNDQ7XG5cbiAgZG8ge1xuICAgIHN3aXRjaCAodG9rZW4oY2hhcmFjdGVyKSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICAvLyAmXFxmXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IDM4ICYmIHBlZWsoKSA9PT0gMTIpIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIG5vdCAxMDAlIGNvcnJlY3QsIHdlIGRvbid0IGFjY291bnQgZm9yIGxpdGVyYWwgc2VxdWVuY2VzIGhlcmUgLSBsaWtlIGZvciBleGFtcGxlIHF1b3RlZCBzdHJpbmdzXG4gICAgICAgICAgLy8gc3R5bGlzIGluc2VydHMgXFxmIGFmdGVyICYgdG8ga25vdyB3aGVuICYgd2hlcmUgaXQgc2hvdWxkIHJlcGxhY2UgdGhpcyBzZXF1ZW5jZSB3aXRoIHRoZSBjb250ZXh0IHNlbGVjdG9yXG4gICAgICAgICAgLy8gYW5kIHdoZW4gaXQgc2hvdWxkIGp1c3QgY29uY2F0ZW5hdGUgdGhlIG91dGVyIGFuZCBpbm5lciBzZWxlY3RvcnNcbiAgICAgICAgICAvLyBpdCdzIHZlcnkgdW5saWtlbHkgZm9yIHRoaXMgc2VxdWVuY2UgdG8gYWN0dWFsbHkgYXBwZWFyIGluIGEgZGlmZmVyZW50IGNvbnRleHQsIHNvIHdlIGp1c3QgbGV2ZXJhZ2UgdGhpcyBmYWN0IGhlcmVcbiAgICAgICAgICBwb2ludHNbaW5kZXhdID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcnNlZFtpbmRleF0gKz0gaWRlbnRpZmllcldpdGhQb2ludFRyYWNraW5nKHBvc2l0aW9uIC0gMSwgcG9pbnRzLCBpbmRleCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHBhcnNlZFtpbmRleF0gKz0gZGVsaW1pdChjaGFyYWN0ZXIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA0OlxuICAgICAgICAvLyBjb21tYVxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSA0NCkge1xuICAgICAgICAgIC8vIGNvbG9uXG4gICAgICAgICAgcGFyc2VkWysraW5kZXhdID0gcGVlaygpID09PSA1OCA/ICcmXFxmJyA6ICcnO1xuICAgICAgICAgIHBvaW50c1tpbmRleF0gPSBwYXJzZWRbaW5kZXhdLmxlbmd0aDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAvLyBmYWxsdGhyb3VnaFxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBwYXJzZWRbaW5kZXhdICs9IGZyb20oY2hhcmFjdGVyKTtcbiAgICB9XG4gIH0gd2hpbGUgKGNoYXJhY3RlciA9IG5leHQoKSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG5cbnZhciBnZXRSdWxlcyA9IGZ1bmN0aW9uIGdldFJ1bGVzKHZhbHVlLCBwb2ludHMpIHtcbiAgcmV0dXJuIGRlYWxsb2ModG9SdWxlcyhhbGxvYyh2YWx1ZSksIHBvaW50cykpO1xufTsgLy8gV2Vha1NldCB3b3VsZCBiZSBtb3JlIGFwcHJvcHJpYXRlLCBidXQgb25seSBXZWFrTWFwIGlzIHN1cHBvcnRlZCBpbiBJRTExXG5cblxudmFyIGZpeGVkRWxlbWVudHMgPSAvKiAjX19QVVJFX18gKi9uZXcgV2Vha01hcCgpO1xudmFyIGNvbXBhdCA9IGZ1bmN0aW9uIGNvbXBhdChlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50LnR5cGUgIT09ICdydWxlJyB8fCAhZWxlbWVudC5wYXJlbnQgfHwgLy8gcG9zaXRpdmUgLmxlbmd0aCBpbmRpY2F0ZXMgdGhhdCB0aGlzIHJ1bGUgY29udGFpbnMgcHNldWRvXG4gIC8vIG5lZ2F0aXZlIC5sZW5ndGggaW5kaWNhdGVzIHRoYXQgdGhpcyBydWxlIGhhcyBiZWVuIGFscmVhZHkgcHJlZml4ZWRcbiAgZWxlbWVudC5sZW5ndGggPCAxKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHZhbHVlID0gZWxlbWVudC52YWx1ZSxcbiAgICAgIHBhcmVudCA9IGVsZW1lbnQucGFyZW50O1xuICB2YXIgaXNJbXBsaWNpdFJ1bGUgPSBlbGVtZW50LmNvbHVtbiA9PT0gcGFyZW50LmNvbHVtbiAmJiBlbGVtZW50LmxpbmUgPT09IHBhcmVudC5saW5lO1xuXG4gIHdoaWxlIChwYXJlbnQudHlwZSAhPT0gJ3J1bGUnKSB7XG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgICBpZiAoIXBhcmVudCkgcmV0dXJuO1xuICB9IC8vIHNob3J0LWNpcmN1aXQgZm9yIHRoZSBzaW1wbGVzdCBjYXNlXG5cblxuICBpZiAoZWxlbWVudC5wcm9wcy5sZW5ndGggPT09IDEgJiYgdmFsdWUuY2hhckNvZGVBdCgwKSAhPT0gNThcbiAgLyogY29sb24gKi9cbiAgJiYgIWZpeGVkRWxlbWVudHMuZ2V0KHBhcmVudCkpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gaWYgdGhpcyBpcyBhbiBpbXBsaWNpdGx5IGluc2VydGVkIHJ1bGUgKHRoZSBvbmUgZWFnZXJseSBpbnNlcnRlZCBhdCB0aGUgZWFjaCBuZXcgbmVzdGVkIGxldmVsKVxuICAvLyB0aGVuIHRoZSBwcm9wcyBoYXMgYWxyZWFkeSBiZWVuIG1hbmlwdWxhdGVkIGJlZm9yZWhhbmQgYXMgdGhleSB0aGF0IGFycmF5IGlzIHNoYXJlZCBiZXR3ZWVuIGl0IGFuZCBpdHMgXCJydWxlIHBhcmVudFwiXG5cblxuICBpZiAoaXNJbXBsaWNpdFJ1bGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBmaXhlZEVsZW1lbnRzLnNldChlbGVtZW50LCB0cnVlKTtcbiAgdmFyIHBvaW50cyA9IFtdO1xuICB2YXIgcnVsZXMgPSBnZXRSdWxlcyh2YWx1ZSwgcG9pbnRzKTtcbiAgdmFyIHBhcmVudFJ1bGVzID0gcGFyZW50LnByb3BzO1xuXG4gIGZvciAodmFyIGkgPSAwLCBrID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBwYXJlbnRSdWxlcy5sZW5ndGg7IGorKywgaysrKSB7XG4gICAgICBlbGVtZW50LnByb3BzW2tdID0gcG9pbnRzW2ldID8gcnVsZXNbaV0ucmVwbGFjZSgvJlxcZi9nLCBwYXJlbnRSdWxlc1tqXSkgOiBwYXJlbnRSdWxlc1tqXSArIFwiIFwiICsgcnVsZXNbaV07XG4gICAgfVxuICB9XG59O1xudmFyIHJlbW92ZUxhYmVsID0gZnVuY3Rpb24gcmVtb3ZlTGFiZWwoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC50eXBlID09PSAnZGVjbCcpIHtcbiAgICB2YXIgdmFsdWUgPSBlbGVtZW50LnZhbHVlO1xuXG4gICAgaWYgKCAvLyBjaGFyY29kZSBmb3IgbFxuICAgIHZhbHVlLmNoYXJDb2RlQXQoMCkgPT09IDEwOCAmJiAvLyBjaGFyY29kZSBmb3IgYlxuICAgIHZhbHVlLmNoYXJDb2RlQXQoMikgPT09IDk4KSB7XG4gICAgICAvLyB0aGlzIGlnbm9yZXMgbGFiZWxcbiAgICAgIGVsZW1lbnRbXCJyZXR1cm5cIl0gPSAnJztcbiAgICAgIGVsZW1lbnQudmFsdWUgPSAnJztcbiAgICB9XG4gIH1cbn07XG52YXIgaWdub3JlRmxhZyA9ICdlbW90aW9uLWRpc2FibGUtc2VydmVyLXJlbmRlcmluZy11bnNhZmUtc2VsZWN0b3Itd2FybmluZy1wbGVhc2UtZG8tbm90LXVzZS10aGlzLXRoZS13YXJuaW5nLWV4aXN0cy1mb3ItYS1yZWFzb24nO1xuXG52YXIgaXNJZ25vcmluZ0NvbW1lbnQgPSBmdW5jdGlvbiBpc0lnbm9yaW5nQ29tbWVudChlbGVtZW50KSB7XG4gIHJldHVybiAhIWVsZW1lbnQgJiYgZWxlbWVudC50eXBlID09PSAnY29tbScgJiYgZWxlbWVudC5jaGlsZHJlbi5pbmRleE9mKGlnbm9yZUZsYWcpID4gLTE7XG59O1xuXG52YXIgY3JlYXRlVW5zYWZlU2VsZWN0b3JzQWxhcm0gPSBmdW5jdGlvbiBjcmVhdGVVbnNhZmVTZWxlY3RvcnNBbGFybShjYWNoZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4LCBjaGlsZHJlbikge1xuICAgIGlmIChlbGVtZW50LnR5cGUgIT09ICdydWxlJykgcmV0dXJuO1xuICAgIHZhciB1bnNhZmVQc2V1ZG9DbGFzc2VzID0gZWxlbWVudC52YWx1ZS5tYXRjaCgvKDpmaXJzdHw6bnRofDpudGgtbGFzdCktY2hpbGQvZyk7XG5cbiAgICBpZiAodW5zYWZlUHNldWRvQ2xhc3NlcyAmJiBjYWNoZS5jb21wYXQgIT09IHRydWUpIHtcbiAgICAgIHZhciBwcmV2RWxlbWVudCA9IGluZGV4ID4gMCA/IGNoaWxkcmVuW2luZGV4IC0gMV0gOiBudWxsO1xuXG4gICAgICBpZiAocHJldkVsZW1lbnQgJiYgaXNJZ25vcmluZ0NvbW1lbnQobGFzdChwcmV2RWxlbWVudC5jaGlsZHJlbikpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdW5zYWZlUHNldWRvQ2xhc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uICh1bnNhZmVQc2V1ZG9DbGFzcykge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVGhlIHBzZXVkbyBjbGFzcyBcXFwiXCIgKyB1bnNhZmVQc2V1ZG9DbGFzcyArIFwiXFxcIiBpcyBwb3RlbnRpYWxseSB1bnNhZmUgd2hlbiBkb2luZyBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuIFRyeSBjaGFuZ2luZyBpdCB0byBcXFwiXCIgKyB1bnNhZmVQc2V1ZG9DbGFzcy5zcGxpdCgnLWNoaWxkJylbMF0gKyBcIi1vZi10eXBlXFxcIi5cIik7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59O1xuXG52YXIgaXNJbXBvcnRSdWxlID0gZnVuY3Rpb24gaXNJbXBvcnRSdWxlKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQudHlwZS5jaGFyQ29kZUF0KDEpID09PSAxMDUgJiYgZWxlbWVudC50eXBlLmNoYXJDb2RlQXQoMCkgPT09IDY0O1xufTtcblxudmFyIGlzUHJlcGVuZGVkV2l0aFJlZ3VsYXJSdWxlcyA9IGZ1bmN0aW9uIGlzUHJlcGVuZGVkV2l0aFJlZ3VsYXJSdWxlcyhpbmRleCwgY2hpbGRyZW4pIHtcbiAgZm9yICh2YXIgaSA9IGluZGV4IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAoIWlzSW1wb3J0UnVsZShjaGlsZHJlbltpXSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07IC8vIHVzZSB0aGlzIHRvIHJlbW92ZSBpbmNvcnJlY3QgZWxlbWVudHMgZnJvbSBmdXJ0aGVyIHByb2Nlc3Npbmdcbi8vIHNvIHRoZXkgZG9uJ3QgZ2V0IGhhbmRlZCB0byB0aGUgYHNoZWV0YCAob3IgYW55dGhpbmcgZWxzZSlcbi8vIGFzIHRoYXQgY291bGQgcG90ZW50aWFsbHkgbGVhZCB0byBhZGRpdGlvbmFsIGxvZ3Mgd2hpY2ggaW4gdHVybiBjb3VsZCBiZSBvdmVyaGVsbWluZyB0byB0aGUgdXNlclxuXG5cbnZhciBudWxsaWZ5RWxlbWVudCA9IGZ1bmN0aW9uIG51bGxpZnlFbGVtZW50KGVsZW1lbnQpIHtcbiAgZWxlbWVudC50eXBlID0gJyc7XG4gIGVsZW1lbnQudmFsdWUgPSAnJztcbiAgZWxlbWVudFtcInJldHVyblwiXSA9ICcnO1xuICBlbGVtZW50LmNoaWxkcmVuID0gJyc7XG4gIGVsZW1lbnQucHJvcHMgPSAnJztcbn07XG5cbnZhciBpbmNvcnJlY3RJbXBvcnRBbGFybSA9IGZ1bmN0aW9uIGluY29ycmVjdEltcG9ydEFsYXJtKGVsZW1lbnQsIGluZGV4LCBjaGlsZHJlbikge1xuICBpZiAoIWlzSW1wb3J0UnVsZShlbGVtZW50KSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChlbGVtZW50LnBhcmVudCkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJgQGltcG9ydGAgcnVsZXMgY2FuJ3QgYmUgbmVzdGVkIGluc2lkZSBvdGhlciBydWxlcy4gUGxlYXNlIG1vdmUgaXQgdG8gdGhlIHRvcCBsZXZlbCBhbmQgcHV0IGl0IGJlZm9yZSByZWd1bGFyIHJ1bGVzLiBLZWVwIGluIG1pbmQgdGhhdCB0aGV5IGNhbiBvbmx5IGJlIHVzZWQgd2l0aGluIGdsb2JhbCBzdHlsZXMuXCIpO1xuICAgIG51bGxpZnlFbGVtZW50KGVsZW1lbnQpO1xuICB9IGVsc2UgaWYgKGlzUHJlcGVuZGVkV2l0aFJlZ3VsYXJSdWxlcyhpbmRleCwgY2hpbGRyZW4pKSB7XG4gICAgY29uc29sZS5lcnJvcihcImBAaW1wb3J0YCBydWxlcyBjYW4ndCBiZSBhZnRlciBvdGhlciBydWxlcy4gUGxlYXNlIHB1dCB5b3VyIGBAaW1wb3J0YCBydWxlcyBiZWZvcmUgeW91ciBvdGhlciBydWxlcy5cIik7XG4gICAgbnVsbGlmeUVsZW1lbnQoZWxlbWVudCk7XG4gIH1cbn07XG5cbnZhciBkZWZhdWx0U3R5bGlzUGx1Z2lucyA9IFtwcmVmaXhlcl07XG5cbnZhciBjcmVhdGVDYWNoZSA9IGZ1bmN0aW9uIGNyZWF0ZUNhY2hlKG9wdGlvbnMpIHtcbiAgdmFyIGtleSA9IG9wdGlvbnMua2V5O1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFrZXkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgaGF2ZSB0byBjb25maWd1cmUgYGtleWAgZm9yIHlvdXIgY2FjaGUuIFBsZWFzZSBtYWtlIHN1cmUgaXQncyB1bmlxdWUgKGFuZCBub3QgZXF1YWwgdG8gJ2NzcycpIGFzIGl0J3MgdXNlZCBmb3IgbGlua2luZyBzdHlsZXMgdG8geW91ciBjYWNoZS5cXG5cIiArIFwiSWYgbXVsdGlwbGUgY2FjaGVzIHNoYXJlIHRoZSBzYW1lIGtleSB0aGV5IG1pZ2h0IFxcXCJmaWdodFxcXCIgZm9yIGVhY2ggb3RoZXIncyBzdHlsZSBlbGVtZW50cy5cIik7XG4gIH1cblxuICBpZiAoIGtleSA9PT0gJ2NzcycpIHtcbiAgICB2YXIgc3NyU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInN0eWxlW2RhdGEtZW1vdGlvbl06bm90KFtkYXRhLXNdKVwiKTsgLy8gZ2V0IFNTUmVkIHN0eWxlcyBvdXQgb2YgdGhlIHdheSBvZiBSZWFjdCdzIGh5ZHJhdGlvblxuICAgIC8vIGRvY3VtZW50LmhlYWQgaXMgYSBzYWZlIHBsYWNlIHRvIG1vdmUgdGhlbSB0byh0aG91Z2ggbm90ZSBkb2N1bWVudC5oZWFkIGlzIG5vdCBuZWNlc3NhcmlseSB0aGUgbGFzdCBwbGFjZSB0aGV5IHdpbGwgYmUpXG4gICAgLy8gbm90ZSB0aGlzIHZlcnkgdmVyeSBpbnRlbnRpb25hbGx5IHRhcmdldHMgYWxsIHN0eWxlIGVsZW1lbnRzIHJlZ2FyZGxlc3Mgb2YgdGhlIGtleSB0byBlbnN1cmVcbiAgICAvLyB0aGF0IGNyZWF0aW5nIGEgY2FjaGUgd29ya3MgaW5zaWRlIG9mIHJlbmRlciBvZiBhIFJlYWN0IGNvbXBvbmVudFxuXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChzc3JTdHlsZXMsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAvLyB3ZSB3YW50IHRvIG9ubHkgbW92ZSBlbGVtZW50cyB3aGljaCBoYXZlIGEgc3BhY2UgaW4gdGhlIGRhdGEtZW1vdGlvbiBhdHRyaWJ1dGUgdmFsdWVcbiAgICAgIC8vIGJlY2F1c2UgdGhhdCBpbmRpY2F0ZXMgdGhhdCBpdCBpcyBhbiBFbW90aW9uIDExIHNlcnZlci1zaWRlIHJlbmRlcmVkIHN0eWxlIGVsZW1lbnRzXG4gICAgICAvLyB3aGlsZSB3ZSB3aWxsIGFscmVhZHkgaWdub3JlIEVtb3Rpb24gMTEgY2xpZW50LXNpZGUgaW5zZXJ0ZWQgc3R5bGVzIGJlY2F1c2Ugb2YgdGhlIDpub3QoW2RhdGEtc10pIHBhcnQgaW4gdGhlIHNlbGVjdG9yXG4gICAgICAvLyBFbW90aW9uIDEwIGNsaWVudC1zaWRlIGluc2VydGVkIHN0eWxlcyBkaWQgbm90IGhhdmUgZGF0YS1zIChidXQgaW1wb3J0YW50bHkgZGlkIG5vdCBoYXZlIGEgc3BhY2UgaW4gdGhlaXIgZGF0YS1lbW90aW9uIGF0dHJpYnV0ZXMpXG4gICAgICAvLyBzbyBjaGVja2luZyBmb3IgdGhlIHNwYWNlIGVuc3VyZXMgdGhhdCBsb2FkaW5nIEVtb3Rpb24gMTEgYWZ0ZXIgRW1vdGlvbiAxMCBoYXMgaW5zZXJ0ZWQgc29tZSBzdHlsZXNcbiAgICAgIC8vIHdpbGwgbm90IHJlc3VsdCBpbiB0aGUgRW1vdGlvbiAxMCBzdHlsZXMgYmVpbmcgZGVzdHJveWVkXG4gICAgICB2YXIgZGF0YUVtb3Rpb25BdHRyaWJ1dGUgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1lbW90aW9uJyk7XG5cbiAgICAgIGlmIChkYXRhRW1vdGlvbkF0dHJpYnV0ZS5pbmRleE9mKCcgJykgPT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1zJywgJycpO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHN0eWxpc1BsdWdpbnMgPSBvcHRpb25zLnN0eWxpc1BsdWdpbnMgfHwgZGVmYXVsdFN0eWxpc1BsdWdpbnM7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgaWYgKC9bXmEtei1dLy50ZXN0KGtleSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkVtb3Rpb24ga2V5IG11c3Qgb25seSBjb250YWluIGxvd2VyIGNhc2UgYWxwaGFiZXRpY2FsIGNoYXJhY3RlcnMgYW5kIC0gYnV0IFxcXCJcIiArIGtleSArIFwiXFxcIiB3YXMgcGFzc2VkXCIpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpbnNlcnRlZCA9IHt9OyAvLyAkRmxvd0ZpeE1lXG5cbiAgdmFyIGNvbnRhaW5lcjtcbiAgdmFyIG5vZGVzVG9IeWRyYXRlID0gW107XG5cbiAge1xuICAgIGNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyIHx8IGRvY3VtZW50LmhlYWQ7XG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCggLy8gdGhpcyBtZWFucyB3ZSB3aWxsIGlnbm9yZSBlbGVtZW50cyB3aGljaCBkb24ndCBoYXZlIGEgc3BhY2UgaW4gdGhlbSB3aGljaFxuICAgIC8vIG1lYW5zIHRoYXQgdGhlIHN0eWxlIGVsZW1lbnRzIHdlJ3JlIGxvb2tpbmcgYXQgYXJlIG9ubHkgRW1vdGlvbiAxMSBzZXJ2ZXItcmVuZGVyZWQgc3R5bGUgZWxlbWVudHNcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3R5bGVbZGF0YS1lbW90aW9uXj1cXFwiXCIgKyBrZXkgKyBcIiBcXFwiXVwiKSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHZhciBhdHRyaWIgPSBub2RlLmdldEF0dHJpYnV0ZShcImRhdGEtZW1vdGlvblwiKS5zcGxpdCgnICcpOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXR0cmliLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGluc2VydGVkW2F0dHJpYltpXV0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBub2Rlc1RvSHlkcmF0ZS5wdXNoKG5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIF9pbnNlcnQ7XG5cbiAgdmFyIG9tbmlwcmVzZW50UGx1Z2lucyA9IFtjb21wYXQsIHJlbW92ZUxhYmVsXTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIG9tbmlwcmVzZW50UGx1Z2lucy5wdXNoKGNyZWF0ZVVuc2FmZVNlbGVjdG9yc0FsYXJtKHtcbiAgICAgIGdldCBjb21wYXQoKSB7XG4gICAgICAgIHJldHVybiBjYWNoZS5jb21wYXQ7XG4gICAgICB9XG5cbiAgICB9KSwgaW5jb3JyZWN0SW1wb3J0QWxhcm0pO1xuICB9XG5cbiAge1xuICAgIHZhciBjdXJyZW50U2hlZXQ7XG4gICAgdmFyIGZpbmFsaXppbmdQbHVnaW5zID0gW3N0cmluZ2lmeSwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICBpZiAoIWVsZW1lbnQucm9vdCkge1xuICAgICAgICBpZiAoZWxlbWVudFtcInJldHVyblwiXSkge1xuICAgICAgICAgIGN1cnJlbnRTaGVldC5pbnNlcnQoZWxlbWVudFtcInJldHVyblwiXSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC52YWx1ZSAmJiBlbGVtZW50LnR5cGUgIT09IENPTU1FTlQpIHtcbiAgICAgICAgICAvLyBpbnNlcnQgZW1wdHkgcnVsZSBpbiBub24tcHJvZHVjdGlvbiBlbnZpcm9ubWVudHNcbiAgICAgICAgICAvLyBzbyBAZW1vdGlvbi9qZXN0IGNhbiBncmFiIGBrZXlgIGZyb20gdGhlIChKUylET00gZm9yIGNhY2hlcyB3aXRob3V0IGFueSBydWxlcyBpbnNlcnRlZCB5ZXRcbiAgICAgICAgICBjdXJyZW50U2hlZXQuaW5zZXJ0KGVsZW1lbnQudmFsdWUgKyBcInt9XCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSA6IHJ1bGVzaGVldChmdW5jdGlvbiAocnVsZSkge1xuICAgICAgY3VycmVudFNoZWV0Lmluc2VydChydWxlKTtcbiAgICB9KV07XG4gICAgdmFyIHNlcmlhbGl6ZXIgPSBtaWRkbGV3YXJlKG9tbmlwcmVzZW50UGx1Z2lucy5jb25jYXQoc3R5bGlzUGx1Z2lucywgZmluYWxpemluZ1BsdWdpbnMpKTtcblxuICAgIHZhciBzdHlsaXMgPSBmdW5jdGlvbiBzdHlsaXMoc3R5bGVzKSB7XG4gICAgICByZXR1cm4gc2VyaWFsaXplKGNvbXBpbGUoc3R5bGVzKSwgc2VyaWFsaXplcik7XG4gICAgfTtcblxuICAgIF9pbnNlcnQgPSBmdW5jdGlvbiBpbnNlcnQoc2VsZWN0b3IsIHNlcmlhbGl6ZWQsIHNoZWV0LCBzaG91bGRDYWNoZSkge1xuICAgICAgY3VycmVudFNoZWV0ID0gc2hlZXQ7XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHNlcmlhbGl6ZWQubWFwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3VycmVudFNoZWV0ID0ge1xuICAgICAgICAgIGluc2VydDogZnVuY3Rpb24gaW5zZXJ0KHJ1bGUpIHtcbiAgICAgICAgICAgIHNoZWV0Lmluc2VydChydWxlICsgc2VyaWFsaXplZC5tYXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgc3R5bGlzKHNlbGVjdG9yID8gc2VsZWN0b3IgKyBcIntcIiArIHNlcmlhbGl6ZWQuc3R5bGVzICsgXCJ9XCIgOiBzZXJpYWxpemVkLnN0eWxlcyk7XG5cbiAgICAgIGlmIChzaG91bGRDYWNoZSkge1xuICAgICAgICBjYWNoZS5pbnNlcnRlZFtzZXJpYWxpemVkLm5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0ge1xuICAgIGtleToga2V5LFxuICAgIHNoZWV0OiBuZXcgU3R5bGVTaGVldCh7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgbm9uY2U6IG9wdGlvbnMubm9uY2UsXG4gICAgICBzcGVlZHk6IG9wdGlvbnMuc3BlZWR5LFxuICAgICAgcHJlcGVuZDogb3B0aW9ucy5wcmVwZW5kLFxuICAgICAgaW5zZXJ0aW9uUG9pbnQ6IG9wdGlvbnMuaW5zZXJ0aW9uUG9pbnRcbiAgICB9KSxcbiAgICBub25jZTogb3B0aW9ucy5ub25jZSxcbiAgICBpbnNlcnRlZDogaW5zZXJ0ZWQsXG4gICAgcmVnaXN0ZXJlZDoge30sXG4gICAgaW5zZXJ0OiBfaW5zZXJ0XG4gIH07XG4gIGNhY2hlLnNoZWV0Lmh5ZHJhdGUobm9kZXNUb0h5ZHJhdGUpO1xuICByZXR1cm4gY2FjaGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDYWNoZTtcbiIsImV4cG9ydCAqIGZyb20gJy4vc3JjL0VudW0uanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9VdGlsaXR5LmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvUGFyc2VyLmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvUHJlZml4ZXIuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9Ub2tlbml6ZXIuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9TZXJpYWxpemVyLmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvTWlkZGxld2FyZS5qcydcbiIsImV4cG9ydCB2YXIgTVMgPSAnLW1zLSdcbmV4cG9ydCB2YXIgTU9aID0gJy1tb3otJ1xuZXhwb3J0IHZhciBXRUJLSVQgPSAnLXdlYmtpdC0nXG5cbmV4cG9ydCB2YXIgQ09NTUVOVCA9ICdjb21tJ1xuZXhwb3J0IHZhciBSVUxFU0VUID0gJ3J1bGUnXG5leHBvcnQgdmFyIERFQ0xBUkFUSU9OID0gJ2RlY2wnXG5cbmV4cG9ydCB2YXIgUEFHRSA9ICdAcGFnZSdcbmV4cG9ydCB2YXIgTUVESUEgPSAnQG1lZGlhJ1xuZXhwb3J0IHZhciBJTVBPUlQgPSAnQGltcG9ydCdcbmV4cG9ydCB2YXIgQ0hBUlNFVCA9ICdAY2hhcnNldCdcbmV4cG9ydCB2YXIgVklFV1BPUlQgPSAnQHZpZXdwb3J0J1xuZXhwb3J0IHZhciBTVVBQT1JUUyA9ICdAc3VwcG9ydHMnXG5leHBvcnQgdmFyIERPQ1VNRU5UID0gJ0Bkb2N1bWVudCdcbmV4cG9ydCB2YXIgTkFNRVNQQUNFID0gJ0BuYW1lc3BhY2UnXG5leHBvcnQgdmFyIEtFWUZSQU1FUyA9ICdAa2V5ZnJhbWVzJ1xuZXhwb3J0IHZhciBGT05UX0ZBQ0UgPSAnQGZvbnQtZmFjZSdcbmV4cG9ydCB2YXIgQ09VTlRFUl9TVFlMRSA9ICdAY291bnRlci1zdHlsZSdcbmV4cG9ydCB2YXIgRk9OVF9GRUFUVVJFX1ZBTFVFUyA9ICdAZm9udC1mZWF0dXJlLXZhbHVlcydcbiIsImltcG9ydCB7TVMsIE1PWiwgV0VCS0lULCBSVUxFU0VULCBLRVlGUkFNRVMsIERFQ0xBUkFUSU9OfSBmcm9tICcuL0VudW0uanMnXG5pbXBvcnQge21hdGNoLCBjaGFyYXQsIHN1YnN0ciwgc3RybGVuLCBzaXplb2YsIHJlcGxhY2UsIGNvbWJpbmV9IGZyb20gJy4vVXRpbGl0eS5qcydcbmltcG9ydCB7Y29weSwgdG9rZW5pemV9IGZyb20gJy4vVG9rZW5pemVyLmpzJ1xuaW1wb3J0IHtzZXJpYWxpemV9IGZyb20gJy4vU2VyaWFsaXplci5qcydcbmltcG9ydCB7cHJlZml4fSBmcm9tICcuL1ByZWZpeGVyLmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7ZnVuY3Rpb25bXX0gY29sbGVjdGlvblxuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlIChjb2xsZWN0aW9uKSB7XG5cdHZhciBsZW5ndGggPSBzaXplb2YoY29sbGVjdGlvbilcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4LCBjaGlsZHJlbiwgY2FsbGJhY2spIHtcblx0XHR2YXIgb3V0cHV0ID0gJydcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG5cdFx0XHRvdXRwdXQgKz0gY29sbGVjdGlvbltpXShlbGVtZW50LCBpbmRleCwgY2hpbGRyZW4sIGNhbGxiYWNrKSB8fCAnJ1xuXG5cdFx0cmV0dXJuIG91dHB1dFxuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG5leHBvcnQgZnVuY3Rpb24gcnVsZXNoZWV0IChjYWxsYmFjaykge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRpZiAoIWVsZW1lbnQucm9vdClcblx0XHRcdGlmIChlbGVtZW50ID0gZWxlbWVudC5yZXR1cm4pXG5cdFx0XHRcdGNhbGxiYWNrKGVsZW1lbnQpXG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gZWxlbWVudFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0ge29iamVjdFtdfSBjaGlsZHJlblxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByZWZpeGVyIChlbGVtZW50LCBpbmRleCwgY2hpbGRyZW4sIGNhbGxiYWNrKSB7XG5cdGlmIChlbGVtZW50Lmxlbmd0aCA+IC0xKVxuXHRcdGlmICghZWxlbWVudC5yZXR1cm4pXG5cdFx0XHRzd2l0Y2ggKGVsZW1lbnQudHlwZSkge1xuXHRcdFx0XHRjYXNlIERFQ0xBUkFUSU9OOiBlbGVtZW50LnJldHVybiA9IHByZWZpeChlbGVtZW50LnZhbHVlLCBlbGVtZW50Lmxlbmd0aClcblx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRjYXNlIEtFWUZSQU1FUzpcblx0XHRcdFx0XHRyZXR1cm4gc2VyaWFsaXplKFtjb3B5KGVsZW1lbnQsIHt2YWx1ZTogcmVwbGFjZShlbGVtZW50LnZhbHVlLCAnQCcsICdAJyArIFdFQktJVCl9KV0sIGNhbGxiYWNrKVxuXHRcdFx0XHRjYXNlIFJVTEVTRVQ6XG5cdFx0XHRcdFx0aWYgKGVsZW1lbnQubGVuZ3RoKVxuXHRcdFx0XHRcdFx0cmV0dXJuIGNvbWJpbmUoZWxlbWVudC5wcm9wcywgZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRcdHN3aXRjaCAobWF0Y2godmFsdWUsIC8oOjpwbGFjXFx3K3w6cmVhZC1cXHcrKS8pKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gOnJlYWQtKG9ubHl8d3JpdGUpXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnOnJlYWQtb25seSc6IGNhc2UgJzpyZWFkLXdyaXRlJzpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBzZXJpYWxpemUoW2NvcHkoZWxlbWVudCwge3Byb3BzOiBbcmVwbGFjZSh2YWx1ZSwgLzoocmVhZC1cXHcrKS8sICc6JyArIE1PWiArICckMScpXX0pXSwgY2FsbGJhY2spXG5cdFx0XHRcdFx0XHRcdFx0Ly8gOnBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnOjpwbGFjZWhvbGRlcic6XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc2VyaWFsaXplKFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29weShlbGVtZW50LCB7cHJvcHM6IFtyZXBsYWNlKHZhbHVlLCAvOihwbGFjXFx3KykvLCAnOicgKyBXRUJLSVQgKyAnaW5wdXQtJDEnKV19KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29weShlbGVtZW50LCB7cHJvcHM6IFtyZXBsYWNlKHZhbHVlLCAvOihwbGFjXFx3KykvLCAnOicgKyBNT1ogKyAnJDEnKV19KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29weShlbGVtZW50LCB7cHJvcHM6IFtyZXBsYWNlKHZhbHVlLCAvOihwbGFjXFx3KykvLCBNUyArICdpbnB1dC0kMScpXX0pXG5cdFx0XHRcdFx0XHRcdFx0XHRdLCBjYWxsYmFjaylcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHJldHVybiAnJ1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gZWxlbWVudFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0ge29iamVjdFtdfSBjaGlsZHJlblxuICovXG5leHBvcnQgZnVuY3Rpb24gbmFtZXNwYWNlIChlbGVtZW50KSB7XG5cdHN3aXRjaCAoZWxlbWVudC50eXBlKSB7XG5cdFx0Y2FzZSBSVUxFU0VUOlxuXHRcdFx0ZWxlbWVudC5wcm9wcyA9IGVsZW1lbnQucHJvcHMubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gY29tYmluZSh0b2tlbml6ZSh2YWx1ZSksIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIGNoaWxkcmVuKSB7XG5cdFx0XHRcdFx0c3dpdGNoIChjaGFyYXQodmFsdWUsIDApKSB7XG5cdFx0XHRcdFx0XHQvLyBcXGZcblx0XHRcdFx0XHRcdGNhc2UgMTI6XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzdWJzdHIodmFsdWUsIDEsIHN0cmxlbih2YWx1ZSkpXG5cdFx0XHRcdFx0XHQvLyBcXDAgKCArID4gflxuXHRcdFx0XHRcdFx0Y2FzZSAwOiBjYXNlIDQwOiBjYXNlIDQzOiBjYXNlIDYyOiBjYXNlIDEyNjpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlXG5cdFx0XHRcdFx0XHQvLyA6XG5cdFx0XHRcdFx0XHRjYXNlIDU4OlxuXHRcdFx0XHRcdFx0XHRpZiAoY2hpbGRyZW5bKytpbmRleF0gPT09ICdnbG9iYWwnKVxuXHRcdFx0XHRcdFx0XHRcdGNoaWxkcmVuW2luZGV4XSA9ICcnLCBjaGlsZHJlblsrK2luZGV4XSA9ICdcXGYnICsgc3Vic3RyKGNoaWxkcmVuW2luZGV4XSwgaW5kZXggPSAxLCAtMSlcblx0XHRcdFx0XHRcdC8vIFxcc1xuXHRcdFx0XHRcdFx0Y2FzZSAzMjpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGluZGV4ID09PSAxID8gJycgOiB2YWx1ZVxuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0c3dpdGNoIChpbmRleCkge1xuXHRcdFx0XHRcdFx0XHRcdGNhc2UgMDogZWxlbWVudCA9IHZhbHVlXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc2l6ZW9mKGNoaWxkcmVuKSA+IDEgPyAnJyA6IHZhbHVlXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSBpbmRleCA9IHNpemVvZihjaGlsZHJlbikgLSAxOiBjYXNlIDI6XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gaW5kZXggPT09IDIgPyB2YWx1ZSArIGVsZW1lbnQgKyBlbGVtZW50IDogdmFsdWUgKyBlbGVtZW50XG5cdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fSlcblx0fVxufVxuIiwiaW1wb3J0IHtDT01NRU5ULCBSVUxFU0VULCBERUNMQVJBVElPTn0gZnJvbSAnLi9FbnVtLmpzJ1xuaW1wb3J0IHthYnMsIHRyaW0sIGZyb20sIHNpemVvZiwgc3RybGVuLCBzdWJzdHIsIGFwcGVuZCwgcmVwbGFjZSwgaW5kZXhvZn0gZnJvbSAnLi9VdGlsaXR5LmpzJ1xuaW1wb3J0IHtub2RlLCBjaGFyLCBwcmV2LCBuZXh0LCBwZWVrLCBjYXJldCwgYWxsb2MsIGRlYWxsb2MsIGRlbGltaXQsIHdoaXRlc3BhY2UsIGVzY2FwaW5nLCBpZGVudGlmaWVyLCBjb21tZW50ZXJ9IGZyb20gJy4vVG9rZW5pemVyLmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7b2JqZWN0W119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlICh2YWx1ZSkge1xuXHRyZXR1cm4gZGVhbGxvYyhwYXJzZSgnJywgbnVsbCwgbnVsbCwgbnVsbCwgWycnXSwgdmFsdWUgPSBhbGxvYyh2YWx1ZSksIDAsIFswXSwgdmFsdWUpKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0P30gcGFyZW50XG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBydWxlXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBydWxlc1xuICogQHBhcmFtIHtzdHJpbmdbXX0gcnVsZXNldHNcbiAqIEBwYXJhbSB7bnVtYmVyW119IHBzZXVkb1xuICogQHBhcmFtIHtudW1iZXJbXX0gcG9pbnRzXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBkZWNsYXJhdGlvbnNcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlICh2YWx1ZSwgcm9vdCwgcGFyZW50LCBydWxlLCBydWxlcywgcnVsZXNldHMsIHBzZXVkbywgcG9pbnRzLCBkZWNsYXJhdGlvbnMpIHtcblx0dmFyIGluZGV4ID0gMFxuXHR2YXIgb2Zmc2V0ID0gMFxuXHR2YXIgbGVuZ3RoID0gcHNldWRvXG5cdHZhciBhdHJ1bGUgPSAwXG5cdHZhciBwcm9wZXJ0eSA9IDBcblx0dmFyIHByZXZpb3VzID0gMFxuXHR2YXIgdmFyaWFibGUgPSAxXG5cdHZhciBzY2FubmluZyA9IDFcblx0dmFyIGFtcGVyc2FuZCA9IDFcblx0dmFyIGNoYXJhY3RlciA9IDBcblx0dmFyIHR5cGUgPSAnJ1xuXHR2YXIgcHJvcHMgPSBydWxlc1xuXHR2YXIgY2hpbGRyZW4gPSBydWxlc2V0c1xuXHR2YXIgcmVmZXJlbmNlID0gcnVsZVxuXHR2YXIgY2hhcmFjdGVycyA9IHR5cGVcblxuXHR3aGlsZSAoc2Nhbm5pbmcpXG5cdFx0c3dpdGNoIChwcmV2aW91cyA9IGNoYXJhY3RlciwgY2hhcmFjdGVyID0gbmV4dCgpKSB7XG5cdFx0XHQvLyAoXG5cdFx0XHRjYXNlIDQwOlxuXHRcdFx0XHRpZiAocHJldmlvdXMgIT0gMTA4ICYmIGNoYXJhY3RlcnMuY2hhckNvZGVBdChsZW5ndGggLSAxKSA9PSA1OCkge1xuXHRcdFx0XHRcdGlmIChpbmRleG9mKGNoYXJhY3RlcnMgKz0gcmVwbGFjZShkZWxpbWl0KGNoYXJhY3RlciksICcmJywgJyZcXGYnKSwgJyZcXGYnKSAhPSAtMSlcblx0XHRcdFx0XHRcdGFtcGVyc2FuZCA9IC0xXG5cdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0fVxuXHRcdFx0Ly8gXCIgJyBbXG5cdFx0XHRjYXNlIDM0OiBjYXNlIDM5OiBjYXNlIDkxOlxuXHRcdFx0XHRjaGFyYWN0ZXJzICs9IGRlbGltaXQoY2hhcmFjdGVyKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Ly8gXFx0IFxcbiBcXHIgXFxzXG5cdFx0XHRjYXNlIDk6IGNhc2UgMTA6IGNhc2UgMTM6IGNhc2UgMzI6XG5cdFx0XHRcdGNoYXJhY3RlcnMgKz0gd2hpdGVzcGFjZShwcmV2aW91cylcblx0XHRcdFx0YnJlYWtcblx0XHRcdC8vIFxcXG5cdFx0XHRjYXNlIDkyOlxuXHRcdFx0XHRjaGFyYWN0ZXJzICs9IGVzY2FwaW5nKGNhcmV0KCkgLSAxLCA3KVxuXHRcdFx0XHRjb250aW51ZVxuXHRcdFx0Ly8gL1xuXHRcdFx0Y2FzZSA0Nzpcblx0XHRcdFx0c3dpdGNoIChwZWVrKCkpIHtcblx0XHRcdFx0XHRjYXNlIDQyOiBjYXNlIDQ3OlxuXHRcdFx0XHRcdFx0YXBwZW5kKGNvbW1lbnQoY29tbWVudGVyKG5leHQoKSwgY2FyZXQoKSksIHJvb3QsIHBhcmVudCksIGRlY2xhcmF0aW9ucylcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdGNoYXJhY3RlcnMgKz0gJy8nXG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWtcblx0XHRcdC8vIHtcblx0XHRcdGNhc2UgMTIzICogdmFyaWFibGU6XG5cdFx0XHRcdHBvaW50c1tpbmRleCsrXSA9IHN0cmxlbihjaGFyYWN0ZXJzKSAqIGFtcGVyc2FuZFxuXHRcdFx0Ly8gfSA7IFxcMFxuXHRcdFx0Y2FzZSAxMjUgKiB2YXJpYWJsZTogY2FzZSA1OTogY2FzZSAwOlxuXHRcdFx0XHRzd2l0Y2ggKGNoYXJhY3Rlcikge1xuXHRcdFx0XHRcdC8vIFxcMCB9XG5cdFx0XHRcdFx0Y2FzZSAwOiBjYXNlIDEyNTogc2Nhbm5pbmcgPSAwXG5cdFx0XHRcdFx0Ly8gO1xuXHRcdFx0XHRcdGNhc2UgNTkgKyBvZmZzZXQ6XG5cdFx0XHRcdFx0XHRpZiAocHJvcGVydHkgPiAwICYmIChzdHJsZW4oY2hhcmFjdGVycykgLSBsZW5ndGgpKVxuXHRcdFx0XHRcdFx0XHRhcHBlbmQocHJvcGVydHkgPiAzMiA/IGRlY2xhcmF0aW9uKGNoYXJhY3RlcnMgKyAnOycsIHJ1bGUsIHBhcmVudCwgbGVuZ3RoIC0gMSkgOiBkZWNsYXJhdGlvbihyZXBsYWNlKGNoYXJhY3RlcnMsICcgJywgJycpICsgJzsnLCBydWxlLCBwYXJlbnQsIGxlbmd0aCAtIDIpLCBkZWNsYXJhdGlvbnMpXG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdC8vIEAgO1xuXHRcdFx0XHRcdGNhc2UgNTk6IGNoYXJhY3RlcnMgKz0gJzsnXG5cdFx0XHRcdFx0Ly8geyBydWxlL2F0LXJ1bGVcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0YXBwZW5kKHJlZmVyZW5jZSA9IHJ1bGVzZXQoY2hhcmFjdGVycywgcm9vdCwgcGFyZW50LCBpbmRleCwgb2Zmc2V0LCBydWxlcywgcG9pbnRzLCB0eXBlLCBwcm9wcyA9IFtdLCBjaGlsZHJlbiA9IFtdLCBsZW5ndGgpLCBydWxlc2V0cylcblxuXHRcdFx0XHRcdFx0aWYgKGNoYXJhY3RlciA9PT0gMTIzKVxuXHRcdFx0XHRcdFx0XHRpZiAob2Zmc2V0ID09PSAwKVxuXHRcdFx0XHRcdFx0XHRcdHBhcnNlKGNoYXJhY3RlcnMsIHJvb3QsIHJlZmVyZW5jZSwgcmVmZXJlbmNlLCBwcm9wcywgcnVsZXNldHMsIGxlbmd0aCwgcG9pbnRzLCBjaGlsZHJlbilcblx0XHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRcdHN3aXRjaCAoYXRydWxlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBkIG0gc1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAxMDA6IGNhc2UgMTA5OiBjYXNlIDExNTpcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGFyc2UodmFsdWUsIHJlZmVyZW5jZSwgcmVmZXJlbmNlLCBydWxlICYmIGFwcGVuZChydWxlc2V0KHZhbHVlLCByZWZlcmVuY2UsIHJlZmVyZW5jZSwgMCwgMCwgcnVsZXMsIHBvaW50cywgdHlwZSwgcnVsZXMsIHByb3BzID0gW10sIGxlbmd0aCksIGNoaWxkcmVuKSwgcnVsZXMsIGNoaWxkcmVuLCBsZW5ndGgsIHBvaW50cywgcnVsZSA/IHByb3BzIDogY2hpbGRyZW4pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYXJzZShjaGFyYWN0ZXJzLCByZWZlcmVuY2UsIHJlZmVyZW5jZSwgcmVmZXJlbmNlLCBbJyddLCBjaGlsZHJlbiwgMCwgcG9pbnRzLCBjaGlsZHJlbilcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpbmRleCA9IG9mZnNldCA9IHByb3BlcnR5ID0gMCwgdmFyaWFibGUgPSBhbXBlcnNhbmQgPSAxLCB0eXBlID0gY2hhcmFjdGVycyA9ICcnLCBsZW5ndGggPSBwc2V1ZG9cblx0XHRcdFx0YnJlYWtcblx0XHRcdC8vIDpcblx0XHRcdGNhc2UgNTg6XG5cdFx0XHRcdGxlbmd0aCA9IDEgKyBzdHJsZW4oY2hhcmFjdGVycyksIHByb3BlcnR5ID0gcHJldmlvdXNcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGlmICh2YXJpYWJsZSA8IDEpXG5cdFx0XHRcdFx0aWYgKGNoYXJhY3RlciA9PSAxMjMpXG5cdFx0XHRcdFx0XHQtLXZhcmlhYmxlXG5cdFx0XHRcdFx0ZWxzZSBpZiAoY2hhcmFjdGVyID09IDEyNSAmJiB2YXJpYWJsZSsrID09IDAgJiYgcHJldigpID09IDEyNSlcblx0XHRcdFx0XHRcdGNvbnRpbnVlXG5cblx0XHRcdFx0c3dpdGNoIChjaGFyYWN0ZXJzICs9IGZyb20oY2hhcmFjdGVyKSwgY2hhcmFjdGVyICogdmFyaWFibGUpIHtcblx0XHRcdFx0XHQvLyAmXG5cdFx0XHRcdFx0Y2FzZSAzODpcblx0XHRcdFx0XHRcdGFtcGVyc2FuZCA9IG9mZnNldCA+IDAgPyAxIDogKGNoYXJhY3RlcnMgKz0gJ1xcZicsIC0xKVxuXHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHQvLyAsXG5cdFx0XHRcdFx0Y2FzZSA0NDpcblx0XHRcdFx0XHRcdHBvaW50c1tpbmRleCsrXSA9IChzdHJsZW4oY2hhcmFjdGVycykgLSAxKSAqIGFtcGVyc2FuZCwgYW1wZXJzYW5kID0gMVxuXHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHQvLyBAXG5cdFx0XHRcdFx0Y2FzZSA2NDpcblx0XHRcdFx0XHRcdC8vIC1cblx0XHRcdFx0XHRcdGlmIChwZWVrKCkgPT09IDQ1KVxuXHRcdFx0XHRcdFx0XHRjaGFyYWN0ZXJzICs9IGRlbGltaXQobmV4dCgpKVxuXG5cdFx0XHRcdFx0XHRhdHJ1bGUgPSBwZWVrKCksIG9mZnNldCA9IGxlbmd0aCA9IHN0cmxlbih0eXBlID0gY2hhcmFjdGVycyArPSBpZGVudGlmaWVyKGNhcmV0KCkpKSwgY2hhcmFjdGVyKytcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0Ly8gLVxuXHRcdFx0XHRcdGNhc2UgNDU6XG5cdFx0XHRcdFx0XHRpZiAocHJldmlvdXMgPT09IDQ1ICYmIHN0cmxlbihjaGFyYWN0ZXJzKSA9PSAyKVxuXHRcdFx0XHRcdFx0XHR2YXJpYWJsZSA9IDBcblx0XHRcdFx0fVxuXHRcdH1cblxuXHRyZXR1cm4gcnVsZXNldHNcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7b2JqZWN0fSByb290XG4gKiBAcGFyYW0ge29iamVjdD99IHBhcmVudFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBydWxlc1xuICogQHBhcmFtIHtudW1iZXJbXX0gcG9pbnRzXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtzdHJpbmdbXX0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nW119IGNoaWxkcmVuXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBydWxlc2V0ICh2YWx1ZSwgcm9vdCwgcGFyZW50LCBpbmRleCwgb2Zmc2V0LCBydWxlcywgcG9pbnRzLCB0eXBlLCBwcm9wcywgY2hpbGRyZW4sIGxlbmd0aCkge1xuXHR2YXIgcG9zdCA9IG9mZnNldCAtIDFcblx0dmFyIHJ1bGUgPSBvZmZzZXQgPT09IDAgPyBydWxlcyA6IFsnJ11cblx0dmFyIHNpemUgPSBzaXplb2YocnVsZSlcblxuXHRmb3IgKHZhciBpID0gMCwgaiA9IDAsIGsgPSAwOyBpIDwgaW5kZXg7ICsraSlcblx0XHRmb3IgKHZhciB4ID0gMCwgeSA9IHN1YnN0cih2YWx1ZSwgcG9zdCArIDEsIHBvc3QgPSBhYnMoaiA9IHBvaW50c1tpXSkpLCB6ID0gdmFsdWU7IHggPCBzaXplOyArK3gpXG5cdFx0XHRpZiAoeiA9IHRyaW0oaiA+IDAgPyBydWxlW3hdICsgJyAnICsgeSA6IHJlcGxhY2UoeSwgLyZcXGYvZywgcnVsZVt4XSkpKVxuXHRcdFx0XHRwcm9wc1trKytdID0gelxuXG5cdHJldHVybiBub2RlKHZhbHVlLCByb290LCBwYXJlbnQsIG9mZnNldCA9PT0gMCA/IFJVTEVTRVQgOiB0eXBlLCBwcm9wcywgY2hpbGRyZW4sIGxlbmd0aClcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAqIEBwYXJhbSB7b2JqZWN0fSByb290XG4gKiBAcGFyYW0ge29iamVjdD99IHBhcmVudFxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tbWVudCAodmFsdWUsIHJvb3QsIHBhcmVudCkge1xuXHRyZXR1cm4gbm9kZSh2YWx1ZSwgcm9vdCwgcGFyZW50LCBDT01NRU5ULCBmcm9tKGNoYXIoKSksIHN1YnN0cih2YWx1ZSwgMiwgLTIpLCAwKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0P30gcGFyZW50XG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWNsYXJhdGlvbiAodmFsdWUsIHJvb3QsIHBhcmVudCwgbGVuZ3RoKSB7XG5cdHJldHVybiBub2RlKHZhbHVlLCByb290LCBwYXJlbnQsIERFQ0xBUkFUSU9OLCBzdWJzdHIodmFsdWUsIDAsIGxlbmd0aCksIHN1YnN0cih2YWx1ZSwgbGVuZ3RoICsgMSwgLTEpLCBsZW5ndGgpXG59XG4iLCJpbXBvcnQge01TLCBNT1osIFdFQktJVH0gZnJvbSAnLi9FbnVtLmpzJ1xuaW1wb3J0IHtoYXNoLCBjaGFyYXQsIHN0cmxlbiwgaW5kZXhvZiwgcmVwbGFjZX0gZnJvbSAnLi9VdGlsaXR5LmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJlZml4ICh2YWx1ZSwgbGVuZ3RoKSB7XG5cdHN3aXRjaCAoaGFzaCh2YWx1ZSwgbGVuZ3RoKSkge1xuXHRcdC8vIGNvbG9yLWFkanVzdFxuXHRcdGNhc2UgNTEwMzpcblx0XHRcdHJldHVybiBXRUJLSVQgKyAncHJpbnQtJyArIHZhbHVlICsgdmFsdWVcblx0XHQvLyBhbmltYXRpb24sIGFuaW1hdGlvbi0oZGVsYXl8ZGlyZWN0aW9ufGR1cmF0aW9ufGZpbGwtbW9kZXxpdGVyYXRpb24tY291bnR8bmFtZXxwbGF5LXN0YXRlfHRpbWluZy1mdW5jdGlvbilcblx0XHRjYXNlIDU3Mzc6IGNhc2UgNDIwMTogY2FzZSAzMTc3OiBjYXNlIDM0MzM6IGNhc2UgMTY0MTogY2FzZSA0NDU3OiBjYXNlIDI5MjE6XG5cdFx0Ly8gdGV4dC1kZWNvcmF0aW9uLCBmaWx0ZXIsIGNsaXAtcGF0aCwgYmFja2ZhY2UtdmlzaWJpbGl0eSwgY29sdW1uLCBib3gtZGVjb3JhdGlvbi1icmVha1xuXHRcdGNhc2UgNTU3MjogY2FzZSA2MzU2OiBjYXNlIDU4NDQ6IGNhc2UgMzE5MTogY2FzZSA2NjQ1OiBjYXNlIDMwMDU6XG5cdFx0Ly8gbWFzaywgbWFzay1pbWFnZSwgbWFzay0obW9kZXxjbGlwfHNpemUpLCBtYXNrLShyZXBlYXR8b3JpZ2luKSwgbWFzay1wb3NpdGlvbiwgbWFzay1jb21wb3NpdGUsXG5cdFx0Y2FzZSA2MzkxOiBjYXNlIDU4Nzk6IGNhc2UgNTYyMzogY2FzZSA2MTM1OiBjYXNlIDQ1OTk6IGNhc2UgNDg1NTpcblx0XHQvLyBiYWNrZ3JvdW5kLWNsaXAsIGNvbHVtbnMsIGNvbHVtbi0oY291bnR8ZmlsbHxnYXB8cnVsZXxydWxlLWNvbG9yfHJ1bGUtc3R5bGV8cnVsZS13aWR0aHxzcGFufHdpZHRoKVxuXHRcdGNhc2UgNDIxNTogY2FzZSA2Mzg5OiBjYXNlIDUxMDk6IGNhc2UgNTM2NTogY2FzZSA1NjIxOiBjYXNlIDM4Mjk6XG5cdFx0XHRyZXR1cm4gV0VCS0lUICsgdmFsdWUgKyB2YWx1ZVxuXHRcdC8vIGFwcGVhcmFuY2UsIHVzZXItc2VsZWN0LCB0cmFuc2Zvcm0sIGh5cGhlbnMsIHRleHQtc2l6ZS1hZGp1c3Rcblx0XHRjYXNlIDUzNDk6IGNhc2UgNDI0NjogY2FzZSA0ODEwOiBjYXNlIDY5Njg6IGNhc2UgMjc1Njpcblx0XHRcdHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1PWiArIHZhbHVlICsgTVMgKyB2YWx1ZSArIHZhbHVlXG5cdFx0Ly8gZmxleCwgZmxleC1kaXJlY3Rpb25cblx0XHRjYXNlIDY4Mjg6IGNhc2UgNDI2ODpcblx0XHRcdHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgdmFsdWUgKyB2YWx1ZVxuXHRcdC8vIG9yZGVyXG5cdFx0Y2FzZSA2MTY1OlxuXHRcdFx0cmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyAnZmxleC0nICsgdmFsdWUgKyB2YWx1ZVxuXHRcdC8vIGFsaWduLWl0ZW1zXG5cdFx0Y2FzZSA1MTg3OlxuXHRcdFx0cmV0dXJuIFdFQktJVCArIHZhbHVlICsgcmVwbGFjZSh2YWx1ZSwgLyhcXHcrKS4rKDpbXl0rKS8sIFdFQktJVCArICdib3gtJDEkMicgKyBNUyArICdmbGV4LSQxJDInKSArIHZhbHVlXG5cdFx0Ly8gYWxpZ24tc2VsZlxuXHRcdGNhc2UgNTQ0Mzpcblx0XHRcdHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgJ2ZsZXgtaXRlbS0nICsgcmVwbGFjZSh2YWx1ZSwgL2ZsZXgtfC1zZWxmLywgJycpICsgdmFsdWVcblx0XHQvLyBhbGlnbi1jb250ZW50XG5cdFx0Y2FzZSA0Njc1OlxuXHRcdFx0cmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyAnZmxleC1saW5lLXBhY2snICsgcmVwbGFjZSh2YWx1ZSwgL2FsaWduLWNvbnRlbnR8ZmxleC18LXNlbGYvLCAnJykgKyB2YWx1ZVxuXHRcdC8vIGZsZXgtc2hyaW5rXG5cdFx0Y2FzZSA1NTQ4OlxuXHRcdFx0cmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyByZXBsYWNlKHZhbHVlLCAnc2hyaW5rJywgJ25lZ2F0aXZlJykgKyB2YWx1ZVxuXHRcdC8vIGZsZXgtYmFzaXNcblx0XHRjYXNlIDUyOTI6XG5cdFx0XHRyZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArIHJlcGxhY2UodmFsdWUsICdiYXNpcycsICdwcmVmZXJyZWQtc2l6ZScpICsgdmFsdWVcblx0XHQvLyBmbGV4LWdyb3dcblx0XHRjYXNlIDYwNjA6XG5cdFx0XHRyZXR1cm4gV0VCS0lUICsgJ2JveC0nICsgcmVwbGFjZSh2YWx1ZSwgJy1ncm93JywgJycpICsgV0VCS0lUICsgdmFsdWUgKyBNUyArIHJlcGxhY2UodmFsdWUsICdncm93JywgJ3Bvc2l0aXZlJykgKyB2YWx1ZVxuXHRcdC8vIHRyYW5zaXRpb25cblx0XHRjYXNlIDQ1NTQ6XG5cdFx0XHRyZXR1cm4gV0VCS0lUICsgcmVwbGFjZSh2YWx1ZSwgLyhbXi1dKSh0cmFuc2Zvcm0pL2csICckMScgKyBXRUJLSVQgKyAnJDInKSArIHZhbHVlXG5cdFx0Ly8gY3Vyc29yXG5cdFx0Y2FzZSA2MTg3OlxuXHRcdFx0cmV0dXJuIHJlcGxhY2UocmVwbGFjZShyZXBsYWNlKHZhbHVlLCAvKHpvb20tfGdyYWIpLywgV0VCS0lUICsgJyQxJyksIC8oaW1hZ2Utc2V0KS8sIFdFQktJVCArICckMScpLCB2YWx1ZSwgJycpICsgdmFsdWVcblx0XHQvLyBiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kLWltYWdlXG5cdFx0Y2FzZSA1NDk1OiBjYXNlIDM5NTk6XG5cdFx0XHRyZXR1cm4gcmVwbGFjZSh2YWx1ZSwgLyhpbWFnZS1zZXRcXChbXl0qKS8sIFdFQktJVCArICckMScgKyAnJGAkMScpXG5cdFx0Ly8ganVzdGlmeS1jb250ZW50XG5cdFx0Y2FzZSA0OTY4OlxuXHRcdFx0cmV0dXJuIHJlcGxhY2UocmVwbGFjZSh2YWx1ZSwgLyguKzopKGZsZXgtKT8oLiopLywgV0VCS0lUICsgJ2JveC1wYWNrOiQzJyArIE1TICsgJ2ZsZXgtcGFjazokMycpLCAvcy4rLWJbXjtdKy8sICdqdXN0aWZ5JykgKyBXRUJLSVQgKyB2YWx1ZSArIHZhbHVlXG5cdFx0Ly8gKG1hcmdpbnxwYWRkaW5nKS1pbmxpbmUtKHN0YXJ0fGVuZClcblx0XHRjYXNlIDQwOTU6IGNhc2UgMzU4MzogY2FzZSA0MDY4OiBjYXNlIDI1MzI6XG5cdFx0XHRyZXR1cm4gcmVwbGFjZSh2YWx1ZSwgLyguKyktaW5saW5lKC4rKS8sIFdFQktJVCArICckMSQyJykgKyB2YWx1ZVxuXHRcdC8vIChtaW58bWF4KT8od2lkdGh8aGVpZ2h0fGlubGluZS1zaXplfGJsb2NrLXNpemUpXG5cdFx0Y2FzZSA4MTE2OiBjYXNlIDcwNTk6IGNhc2UgNTc1MzogY2FzZSA1NTM1OlxuXHRcdGNhc2UgNTQ0NTogY2FzZSA1NzAxOiBjYXNlIDQ5MzM6IGNhc2UgNDY3Nzpcblx0XHRjYXNlIDU1MzM6IGNhc2UgNTc4OTogY2FzZSA1MDIxOiBjYXNlIDQ3NjU6XG5cdFx0XHQvLyBzdHJldGNoLCBtYXgtY29udGVudCwgbWluLWNvbnRlbnQsIGZpbGwtYXZhaWxhYmxlXG5cdFx0XHRpZiAoc3RybGVuKHZhbHVlKSAtIDEgLSBsZW5ndGggPiA2KVxuXHRcdFx0XHRzd2l0Y2ggKGNoYXJhdCh2YWx1ZSwgbGVuZ3RoICsgMSkpIHtcblx0XHRcdFx0XHQvLyAobSlheC1jb250ZW50LCAobSlpbi1jb250ZW50XG5cdFx0XHRcdFx0Y2FzZSAxMDk6XG5cdFx0XHRcdFx0XHQvLyAtXG5cdFx0XHRcdFx0XHRpZiAoY2hhcmF0KHZhbHVlLCBsZW5ndGggKyA0KSAhPT0gNDUpXG5cdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0Ly8gKGYpaWxsLWF2YWlsYWJsZSwgKGYpaXQtY29udGVudFxuXHRcdFx0XHRcdGNhc2UgMTAyOlxuXHRcdFx0XHRcdFx0cmV0dXJuIHJlcGxhY2UodmFsdWUsIC8oLis6KSguKyktKFteXSspLywgJyQxJyArIFdFQktJVCArICckMi0kMycgKyAnJDEnICsgTU9aICsgKGNoYXJhdCh2YWx1ZSwgbGVuZ3RoICsgMykgPT0gMTA4ID8gJyQzJyA6ICckMi0kMycpKSArIHZhbHVlXG5cdFx0XHRcdFx0Ly8gKHMpdHJldGNoXG5cdFx0XHRcdFx0Y2FzZSAxMTU6XG5cdFx0XHRcdFx0XHRyZXR1cm4gfmluZGV4b2YodmFsdWUsICdzdHJldGNoJykgPyBwcmVmaXgocmVwbGFjZSh2YWx1ZSwgJ3N0cmV0Y2gnLCAnZmlsbC1hdmFpbGFibGUnKSwgbGVuZ3RoKSArIHZhbHVlIDogdmFsdWVcblx0XHRcdFx0fVxuXHRcdFx0YnJlYWtcblx0XHQvLyBwb3NpdGlvbjogc3RpY2t5XG5cdFx0Y2FzZSA0OTQ5OlxuXHRcdFx0Ly8gKHMpdGlja3k/XG5cdFx0XHRpZiAoY2hhcmF0KHZhbHVlLCBsZW5ndGggKyAxKSAhPT0gMTE1KVxuXHRcdFx0XHRicmVha1xuXHRcdC8vIGRpc3BsYXk6IChmbGV4fGlubGluZS1mbGV4KVxuXHRcdGNhc2UgNjQ0NDpcblx0XHRcdHN3aXRjaCAoY2hhcmF0KHZhbHVlLCBzdHJsZW4odmFsdWUpIC0gMyAtICh+aW5kZXhvZih2YWx1ZSwgJyFpbXBvcnRhbnQnKSAmJiAxMCkpKSB7XG5cdFx0XHRcdC8vIHN0aWMoayl5XG5cdFx0XHRcdGNhc2UgMTA3OlxuXHRcdFx0XHRcdHJldHVybiByZXBsYWNlKHZhbHVlLCAnOicsICc6JyArIFdFQktJVCkgKyB2YWx1ZVxuXHRcdFx0XHQvLyAoaW5saW5lLSk/ZmwoZSl4XG5cdFx0XHRcdGNhc2UgMTAxOlxuXHRcdFx0XHRcdHJldHVybiByZXBsYWNlKHZhbHVlLCAvKC4rOikoW147IV0rKSg7fCEuKyk/LywgJyQxJyArIFdFQktJVCArIChjaGFyYXQodmFsdWUsIDE0KSA9PT0gNDUgPyAnaW5saW5lLScgOiAnJykgKyAnYm94JDMnICsgJyQxJyArIFdFQktJVCArICckMiQzJyArICckMScgKyBNUyArICckMmJveCQzJykgKyB2YWx1ZVxuXHRcdFx0fVxuXHRcdFx0YnJlYWtcblx0XHQvLyB3cml0aW5nLW1vZGVcblx0XHRjYXNlIDU5MzY6XG5cdFx0XHRzd2l0Y2ggKGNoYXJhdCh2YWx1ZSwgbGVuZ3RoICsgMTEpKSB7XG5cdFx0XHRcdC8vIHZlcnRpY2FsLWwocilcblx0XHRcdFx0Y2FzZSAxMTQ6XG5cdFx0XHRcdFx0cmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyByZXBsYWNlKHZhbHVlLCAvW3N2aF1cXHcrLVt0YmxyXXsyfS8sICd0YicpICsgdmFsdWVcblx0XHRcdFx0Ly8gdmVydGljYWwtcihsKVxuXHRcdFx0XHRjYXNlIDEwODpcblx0XHRcdFx0XHRyZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArIHJlcGxhY2UodmFsdWUsIC9bc3ZoXVxcdystW3RibHJdezJ9LywgJ3RiLXJsJykgKyB2YWx1ZVxuXHRcdFx0XHQvLyBob3Jpem9udGFsKC0pdGJcblx0XHRcdFx0Y2FzZSA0NTpcblx0XHRcdFx0XHRyZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArIHJlcGxhY2UodmFsdWUsIC9bc3ZoXVxcdystW3RibHJdezJ9LywgJ2xyJykgKyB2YWx1ZVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArIHZhbHVlICsgdmFsdWVcblx0fVxuXG5cdHJldHVybiB2YWx1ZVxufVxuIiwiaW1wb3J0IHtJTVBPUlQsIENPTU1FTlQsIFJVTEVTRVQsIERFQ0xBUkFUSU9OLCBLRVlGUkFNRVN9IGZyb20gJy4vRW51bS5qcydcbmltcG9ydCB7c3RybGVuLCBzaXplb2Z9IGZyb20gJy4vVXRpbGl0eS5qcydcblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdFtdfSBjaGlsZHJlblxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZSAoY2hpbGRyZW4sIGNhbGxiYWNrKSB7XG5cdHZhciBvdXRwdXQgPSAnJ1xuXHR2YXIgbGVuZ3RoID0gc2l6ZW9mKGNoaWxkcmVuKVxuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG5cdFx0b3V0cHV0ICs9IGNhbGxiYWNrKGNoaWxkcmVuW2ldLCBpLCBjaGlsZHJlbiwgY2FsbGJhY2spIHx8ICcnXG5cblx0cmV0dXJuIG91dHB1dFxufVxuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBlbGVtZW50XG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7b2JqZWN0W119IGNoaWxkcmVuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5naWZ5IChlbGVtZW50LCBpbmRleCwgY2hpbGRyZW4sIGNhbGxiYWNrKSB7XG5cdHN3aXRjaCAoZWxlbWVudC50eXBlKSB7XG5cdFx0Y2FzZSBJTVBPUlQ6IGNhc2UgREVDTEFSQVRJT046IHJldHVybiBlbGVtZW50LnJldHVybiA9IGVsZW1lbnQucmV0dXJuIHx8IGVsZW1lbnQudmFsdWVcblx0XHRjYXNlIENPTU1FTlQ6IHJldHVybiAnJ1xuXHRcdGNhc2UgS0VZRlJBTUVTOiByZXR1cm4gZWxlbWVudC5yZXR1cm4gPSBlbGVtZW50LnZhbHVlICsgJ3snICsgc2VyaWFsaXplKGVsZW1lbnQuY2hpbGRyZW4sIGNhbGxiYWNrKSArICd9J1xuXHRcdGNhc2UgUlVMRVNFVDogZWxlbWVudC52YWx1ZSA9IGVsZW1lbnQucHJvcHMuam9pbignLCcpXG5cdH1cblxuXHRyZXR1cm4gc3RybGVuKGNoaWxkcmVuID0gc2VyaWFsaXplKGVsZW1lbnQuY2hpbGRyZW4sIGNhbGxiYWNrKSkgPyBlbGVtZW50LnJldHVybiA9IGVsZW1lbnQudmFsdWUgKyAneycgKyBjaGlsZHJlbiArICd9JyA6ICcnXG59XG4iLCJpbXBvcnQge2Zyb20sIHRyaW0sIGNoYXJhdCwgc3RybGVuLCBzdWJzdHIsIGFwcGVuZCwgYXNzaWdufSBmcm9tICcuL1V0aWxpdHkuanMnXG5cbmV4cG9ydCB2YXIgbGluZSA9IDFcbmV4cG9ydCB2YXIgY29sdW1uID0gMVxuZXhwb3J0IHZhciBsZW5ndGggPSAwXG5leHBvcnQgdmFyIHBvc2l0aW9uID0gMFxuZXhwb3J0IHZhciBjaGFyYWN0ZXIgPSAwXG5leHBvcnQgdmFyIGNoYXJhY3RlcnMgPSAnJ1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3QgfCBudWxsfSByb290XG4gKiBAcGFyYW0ge29iamVjdCB8IG51bGx9IHBhcmVudFxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7c3RyaW5nW10gfCBzdHJpbmd9IHByb3BzXG4gKiBAcGFyYW0ge29iamVjdFtdIHwgc3RyaW5nfSBjaGlsZHJlblxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9kZSAodmFsdWUsIHJvb3QsIHBhcmVudCwgdHlwZSwgcHJvcHMsIGNoaWxkcmVuLCBsZW5ndGgpIHtcblx0cmV0dXJuIHt2YWx1ZTogdmFsdWUsIHJvb3Q6IHJvb3QsIHBhcmVudDogcGFyZW50LCB0eXBlOiB0eXBlLCBwcm9wczogcHJvcHMsIGNoaWxkcmVuOiBjaGlsZHJlbiwgbGluZTogbGluZSwgY29sdW1uOiBjb2x1bW4sIGxlbmd0aDogbGVuZ3RoLCByZXR1cm46ICcnfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSByb290XG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHkgKHJvb3QsIHByb3BzKSB7XG5cdHJldHVybiBhc3NpZ24obm9kZSgnJywgbnVsbCwgbnVsbCwgJycsIG51bGwsIG51bGwsIDApLCByb290LCB7bGVuZ3RoOiAtcm9vdC5sZW5ndGh9LCBwcm9wcylcbn1cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFyICgpIHtcblx0cmV0dXJuIGNoYXJhY3RlclxufVxuXG4vKipcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByZXYgKCkge1xuXHRjaGFyYWN0ZXIgPSBwb3NpdGlvbiA+IDAgPyBjaGFyYXQoY2hhcmFjdGVycywgLS1wb3NpdGlvbikgOiAwXG5cblx0aWYgKGNvbHVtbi0tLCBjaGFyYWN0ZXIgPT09IDEwKVxuXHRcdGNvbHVtbiA9IDEsIGxpbmUtLVxuXG5cdHJldHVybiBjaGFyYWN0ZXJcbn1cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXh0ICgpIHtcblx0Y2hhcmFjdGVyID0gcG9zaXRpb24gPCBsZW5ndGggPyBjaGFyYXQoY2hhcmFjdGVycywgcG9zaXRpb24rKykgOiAwXG5cblx0aWYgKGNvbHVtbisrLCBjaGFyYWN0ZXIgPT09IDEwKVxuXHRcdGNvbHVtbiA9IDEsIGxpbmUrK1xuXG5cdHJldHVybiBjaGFyYWN0ZXJcbn1cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwZWVrICgpIHtcblx0cmV0dXJuIGNoYXJhdChjaGFyYWN0ZXJzLCBwb3NpdGlvbilcbn1cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYXJldCAoKSB7XG5cdHJldHVybiBwb3NpdGlvblxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBiZWdpblxuICogQHBhcmFtIHtudW1iZXJ9IGVuZFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2xpY2UgKGJlZ2luLCBlbmQpIHtcblx0cmV0dXJuIHN1YnN0cihjaGFyYWN0ZXJzLCBiZWdpbiwgZW5kKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbiAodHlwZSkge1xuXHRzd2l0Y2ggKHR5cGUpIHtcblx0XHQvLyBcXDAgXFx0IFxcbiBcXHIgXFxzIHdoaXRlc3BhY2UgdG9rZW5cblx0XHRjYXNlIDA6IGNhc2UgOTogY2FzZSAxMDogY2FzZSAxMzogY2FzZSAzMjpcblx0XHRcdHJldHVybiA1XG5cdFx0Ly8gISArICwgLyA+IEAgfiBpc29sYXRlIHRva2VuXG5cdFx0Y2FzZSAzMzogY2FzZSA0MzogY2FzZSA0NDogY2FzZSA0NzogY2FzZSA2MjogY2FzZSA2NDogY2FzZSAxMjY6XG5cdFx0Ly8gOyB7IH0gYnJlYWtwb2ludCB0b2tlblxuXHRcdGNhc2UgNTk6IGNhc2UgMTIzOiBjYXNlIDEyNTpcblx0XHRcdHJldHVybiA0XG5cdFx0Ly8gOiBhY2NvbXBhbmllZCB0b2tlblxuXHRcdGNhc2UgNTg6XG5cdFx0XHRyZXR1cm4gM1xuXHRcdC8vIFwiICcgKCBbIG9wZW5pbmcgZGVsaW1pdCB0b2tlblxuXHRcdGNhc2UgMzQ6IGNhc2UgMzk6IGNhc2UgNDA6IGNhc2UgOTE6XG5cdFx0XHRyZXR1cm4gMlxuXHRcdC8vICkgXSBjbG9zaW5nIGRlbGltaXQgdG9rZW5cblx0XHRjYXNlIDQxOiBjYXNlIDkzOlxuXHRcdFx0cmV0dXJuIDFcblx0fVxuXG5cdHJldHVybiAwXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHthbnlbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFsbG9jICh2YWx1ZSkge1xuXHRyZXR1cm4gbGluZSA9IGNvbHVtbiA9IDEsIGxlbmd0aCA9IHN0cmxlbihjaGFyYWN0ZXJzID0gdmFsdWUpLCBwb3NpdGlvbiA9IDAsIFtdXG59XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcmV0dXJuIHthbnl9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWFsbG9jICh2YWx1ZSkge1xuXHRyZXR1cm4gY2hhcmFjdGVycyA9ICcnLCB2YWx1ZVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxpbWl0ICh0eXBlKSB7XG5cdHJldHVybiB0cmltKHNsaWNlKHBvc2l0aW9uIC0gMSwgZGVsaW1pdGVyKHR5cGUgPT09IDkxID8gdHlwZSArIDIgOiB0eXBlID09PSA0MCA/IHR5cGUgKyAxIDogdHlwZSkpKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7c3RyaW5nW119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZSAodmFsdWUpIHtcblx0cmV0dXJuIGRlYWxsb2ModG9rZW5pemVyKGFsbG9jKHZhbHVlKSkpXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdoaXRlc3BhY2UgKHR5cGUpIHtcblx0d2hpbGUgKGNoYXJhY3RlciA9IHBlZWsoKSlcblx0XHRpZiAoY2hhcmFjdGVyIDwgMzMpXG5cdFx0XHRuZXh0KClcblx0XHRlbHNlXG5cdFx0XHRicmVha1xuXG5cdHJldHVybiB0b2tlbih0eXBlKSA+IDIgfHwgdG9rZW4oY2hhcmFjdGVyKSA+IDMgPyAnJyA6ICcgJ1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nW119IGNoaWxkcmVuXG4gKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRva2VuaXplciAoY2hpbGRyZW4pIHtcblx0d2hpbGUgKG5leHQoKSlcblx0XHRzd2l0Y2ggKHRva2VuKGNoYXJhY3RlcikpIHtcblx0XHRcdGNhc2UgMDogYXBwZW5kKGlkZW50aWZpZXIocG9zaXRpb24gLSAxKSwgY2hpbGRyZW4pXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIDI6IGFwcGVuZChkZWxpbWl0KGNoYXJhY3RlciksIGNoaWxkcmVuKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0ZGVmYXVsdDogYXBwZW5kKGZyb20oY2hhcmFjdGVyKSwgY2hpbGRyZW4pXG5cdFx0fVxuXG5cdHJldHVybiBjaGlsZHJlblxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGluZyAoaW5kZXgsIGNvdW50KSB7XG5cdHdoaWxlICgtLWNvdW50ICYmIG5leHQoKSlcblx0XHQvLyBub3QgMC05IEEtRiBhLWZcblx0XHRpZiAoY2hhcmFjdGVyIDwgNDggfHwgY2hhcmFjdGVyID4gMTAyIHx8IChjaGFyYWN0ZXIgPiA1NyAmJiBjaGFyYWN0ZXIgPCA2NSkgfHwgKGNoYXJhY3RlciA+IDcwICYmIGNoYXJhY3RlciA8IDk3KSlcblx0XHRcdGJyZWFrXG5cblx0cmV0dXJuIHNsaWNlKGluZGV4LCBjYXJldCgpICsgKGNvdW50IDwgNiAmJiBwZWVrKCkgPT0gMzIgJiYgbmV4dCgpID09IDMyKSlcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdHlwZVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsaW1pdGVyICh0eXBlKSB7XG5cdHdoaWxlIChuZXh0KCkpXG5cdFx0c3dpdGNoIChjaGFyYWN0ZXIpIHtcblx0XHRcdC8vIF0gKSBcIiAnXG5cdFx0XHRjYXNlIHR5cGU6XG5cdFx0XHRcdHJldHVybiBwb3NpdGlvblxuXHRcdFx0Ly8gXCIgJ1xuXHRcdFx0Y2FzZSAzNDogY2FzZSAzOTpcblx0XHRcdFx0aWYgKHR5cGUgIT09IDM0ICYmIHR5cGUgIT09IDM5KVxuXHRcdFx0XHRcdGRlbGltaXRlcihjaGFyYWN0ZXIpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHQvLyAoXG5cdFx0XHRjYXNlIDQwOlxuXHRcdFx0XHRpZiAodHlwZSA9PT0gNDEpXG5cdFx0XHRcdFx0ZGVsaW1pdGVyKHR5cGUpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHQvLyBcXFxuXHRcdFx0Y2FzZSA5Mjpcblx0XHRcdFx0bmV4dCgpXG5cdFx0XHRcdGJyZWFrXG5cdFx0fVxuXG5cdHJldHVybiBwb3NpdGlvblxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbW1lbnRlciAodHlwZSwgaW5kZXgpIHtcblx0d2hpbGUgKG5leHQoKSlcblx0XHQvLyAvL1xuXHRcdGlmICh0eXBlICsgY2hhcmFjdGVyID09PSA0NyArIDEwKVxuXHRcdFx0YnJlYWtcblx0XHQvLyAvKlxuXHRcdGVsc2UgaWYgKHR5cGUgKyBjaGFyYWN0ZXIgPT09IDQyICsgNDIgJiYgcGVlaygpID09PSA0Nylcblx0XHRcdGJyZWFrXG5cblx0cmV0dXJuICcvKicgKyBzbGljZShpbmRleCwgcG9zaXRpb24gLSAxKSArICcqJyArIGZyb20odHlwZSA9PT0gNDcgPyB0eXBlIDogbmV4dCgpKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpZmllciAoaW5kZXgpIHtcblx0d2hpbGUgKCF0b2tlbihwZWVrKCkpKVxuXHRcdG5leHQoKVxuXG5cdHJldHVybiBzbGljZShpbmRleCwgcG9zaXRpb24pXG59XG4iLCIvKipcbiAqIEBwYXJhbSB7bnVtYmVyfVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgdmFyIGFicyA9IE1hdGguYWJzXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCB2YXIgZnJvbSA9IFN0cmluZy5mcm9tQ2hhckNvZGVcblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH1cbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IHZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNoICh2YWx1ZSwgbGVuZ3RoKSB7XG5cdHJldHVybiAoKCgoKCgobGVuZ3RoIDw8IDIpIF4gY2hhcmF0KHZhbHVlLCAwKSkgPDwgMikgXiBjaGFyYXQodmFsdWUsIDEpKSA8PCAyKSBeIGNoYXJhdCh2YWx1ZSwgMikpIDw8IDIpIF4gY2hhcmF0KHZhbHVlLCAzKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJpbSAodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlLnRyaW0oKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtSZWdFeHB9IHBhdHRlcm5cbiAqIEByZXR1cm4ge3N0cmluZz99XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaCAodmFsdWUsIHBhdHRlcm4pIHtcblx0cmV0dXJuICh2YWx1ZSA9IHBhdHRlcm4uZXhlYyh2YWx1ZSkpID8gdmFsdWVbMF0gOiB2YWx1ZVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHsoc3RyaW5nfFJlZ0V4cCl9IHBhdHRlcm5cbiAqIEBwYXJhbSB7c3RyaW5nfSByZXBsYWNlbWVudFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZSAodmFsdWUsIHBhdHRlcm4sIHJlcGxhY2VtZW50KSB7XG5cdHJldHVybiB2YWx1ZS5yZXBsYWNlKHBhdHRlcm4sIHJlcGxhY2VtZW50KVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtzdHJpbmd9IHNlYXJjaFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhvZiAodmFsdWUsIHNlYXJjaCkge1xuXHRyZXR1cm4gdmFsdWUuaW5kZXhPZihzZWFyY2gpXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYXJhdCAodmFsdWUsIGluZGV4KSB7XG5cdHJldHVybiB2YWx1ZS5jaGFyQ29kZUF0KGluZGV4KSB8IDBcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBiZWdpblxuICogQHBhcmFtIHtudW1iZXJ9IGVuZFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RyICh2YWx1ZSwgYmVnaW4sIGVuZCkge1xuXHRyZXR1cm4gdmFsdWUuc2xpY2UoYmVnaW4sIGVuZClcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmxlbiAodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlLmxlbmd0aFxufVxuXG4vKipcbiAqIEBwYXJhbSB7YW55W119IHZhbHVlXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaXplb2YgKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZS5sZW5ndGhcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqIEBwYXJhbSB7YW55W119IGFycmF5XG4gKiBAcmV0dXJuIHthbnl9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmQgKHZhbHVlLCBhcnJheSkge1xuXHRyZXR1cm4gYXJyYXkucHVzaCh2YWx1ZSksIHZhbHVlXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmdbXX0gYXJyYXlcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lIChhcnJheSwgY2FsbGJhY2spIHtcblx0cmV0dXJuIGFycmF5Lm1hcChjYWxsYmFjaykuam9pbignJylcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vZ2FyeWNvdXJ0L211cm11cmhhc2gtanNcbi8vIFBvcnRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hYXBwbGVieS9zbWhhc2hlci9ibG9iLzYxYTA1MzBmMjgyNzdmMmU4NTBiZmMzOTYwMGNlNjFkMDJiNTE4ZGUvc3JjL011cm11ckhhc2gyLmNwcCNMMzctTDg2XG5mdW5jdGlvbiBtdXJtdXIyKHN0cikge1xuICAvLyAnbScgYW5kICdyJyBhcmUgbWl4aW5nIGNvbnN0YW50cyBnZW5lcmF0ZWQgb2ZmbGluZS5cbiAgLy8gVGhleSdyZSBub3QgcmVhbGx5ICdtYWdpYycsIHRoZXkganVzdCBoYXBwZW4gdG8gd29yayB3ZWxsLlxuICAvLyBjb25zdCBtID0gMHg1YmQxZTk5NTtcbiAgLy8gY29uc3QgciA9IDI0O1xuICAvLyBJbml0aWFsaXplIHRoZSBoYXNoXG4gIHZhciBoID0gMDsgLy8gTWl4IDQgYnl0ZXMgYXQgYSB0aW1lIGludG8gdGhlIGhhc2hcblxuICB2YXIgayxcbiAgICAgIGkgPSAwLFxuICAgICAgbGVuID0gc3RyLmxlbmd0aDtcblxuICBmb3IgKDsgbGVuID49IDQ7ICsraSwgbGVuIC09IDQpIHtcbiAgICBrID0gc3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmIHwgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCA4IHwgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCAxNiB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgMjQ7XG4gICAgayA9XG4gICAgLyogTWF0aC5pbXVsKGssIG0pOiAqL1xuICAgIChrICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGsgPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNik7XG4gICAgayBePVxuICAgIC8qIGsgPj4+IHI6ICovXG4gICAgayA+Pj4gMjQ7XG4gICAgaCA9XG4gICAgLyogTWF0aC5pbXVsKGssIG0pOiAqL1xuICAgIChrICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGsgPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNikgXlxuICAgIC8qIE1hdGguaW11bChoLCBtKTogKi9cbiAgICAoaCAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChoID4+PiAxNikgKiAweGU5OTUgPDwgMTYpO1xuICB9IC8vIEhhbmRsZSB0aGUgbGFzdCBmZXcgYnl0ZXMgb2YgdGhlIGlucHV0IGFycmF5XG5cblxuICBzd2l0Y2ggKGxlbikge1xuICAgIGNhc2UgMzpcbiAgICAgIGggXj0gKHN0ci5jaGFyQ29kZUF0KGkgKyAyKSAmIDB4ZmYpIDw8IDE2O1xuXG4gICAgY2FzZSAyOlxuICAgICAgaCBePSAoc3RyLmNoYXJDb2RlQXQoaSArIDEpICYgMHhmZikgPDwgODtcblxuICAgIGNhc2UgMTpcbiAgICAgIGggXj0gc3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmO1xuICAgICAgaCA9XG4gICAgICAvKiBNYXRoLmltdWwoaCwgbSk6ICovXG4gICAgICAoaCAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChoID4+PiAxNikgKiAweGU5OTUgPDwgMTYpO1xuICB9IC8vIERvIGEgZmV3IGZpbmFsIG1peGVzIG9mIHRoZSBoYXNoIHRvIGVuc3VyZSB0aGUgbGFzdCBmZXdcbiAgLy8gYnl0ZXMgYXJlIHdlbGwtaW5jb3Jwb3JhdGVkLlxuXG5cbiAgaCBePSBoID4+PiAxMztcbiAgaCA9XG4gIC8qIE1hdGguaW11bChoLCBtKTogKi9cbiAgKGggJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoaCA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KTtcbiAgcmV0dXJuICgoaCBeIGggPj4+IDE1KSA+Pj4gMCkudG9TdHJpbmcoMzYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtdXJtdXIyO1xuIiwiZnVuY3Rpb24gbWVtb2l6ZShmbikge1xuICB2YXIgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChjYWNoZVthcmddID09PSB1bmRlZmluZWQpIGNhY2hlW2FyZ10gPSBmbihhcmcpO1xuICAgIHJldHVybiBjYWNoZVthcmddO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplO1xuIiwiaW1wb3J0IGhvaXN0Tm9uUmVhY3RTdGF0aWNzJDEgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuXG4vLyB0aGlzIGZpbGUgaXNvbGF0ZXMgdGhpcyBwYWNrYWdlIHRoYXQgaXMgbm90IHRyZWUtc2hha2VhYmxlXG4vLyBhbmQgaWYgdGhpcyBtb2R1bGUgZG9lc24ndCBhY3R1YWxseSBjb250YWluIGFueSBsb2dpYyBvZiBpdHMgb3duXG4vLyB0aGVuIFJvbGx1cCBqdXN0IHVzZSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnIGRpcmVjdGx5IGluIG90aGVyIGNodW5rc1xuXG52YXIgaG9pc3ROb25SZWFjdFN0YXRpY3MgPSAoZnVuY3Rpb24gKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50KSB7XG4gIHJldHVybiBob2lzdE5vblJlYWN0U3RhdGljcyQxKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBob2lzdE5vblJlYWN0U3RhdGljcztcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIGZvcndhcmRSZWYsIGNyZWF0ZUVsZW1lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNyZWF0ZUNhY2hlIGZyb20gJ0BlbW90aW9uL2NhY2hlJztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCB3ZWFrTWVtb2l6ZSBmcm9tICdAZW1vdGlvbi93ZWFrLW1lbW9pemUnO1xuaW1wb3J0IGhvaXN0Tm9uUmVhY3RTdGF0aWNzIGZyb20gJy4uL19pc29sYXRlZC1obnJzL2Rpc3QvZW1vdGlvbi1yZWFjdC1faXNvbGF0ZWQtaG5ycy5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBnZXRSZWdpc3RlcmVkU3R5bGVzLCByZWdpc3RlclN0eWxlcywgaW5zZXJ0U3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vdXRpbHMnO1xuaW1wb3J0IHsgc2VyaWFsaXplU3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vc2VyaWFsaXplJztcblxudmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5cbnZhciBFbW90aW9uQ2FjaGVDb250ZXh0ID0gLyogI19fUFVSRV9fICovY3JlYXRlQ29udGV4dCggLy8gd2UncmUgZG9pbmcgdGhpcyB0byBhdm9pZCBwcmVjb25zdHJ1Y3QncyBkZWFkIGNvZGUgZWxpbWluYXRpb24gaW4gdGhpcyBvbmUgY2FzZVxuLy8gYmVjYXVzZSB0aGlzIG1vZHVsZSBpcyBwcmltYXJpbHkgaW50ZW5kZWQgZm9yIHRoZSBicm93c2VyIGFuZCBub2RlXG4vLyBidXQgaXQncyBhbHNvIHJlcXVpcmVkIGluIHJlYWN0IG5hdGl2ZSBhbmQgc2ltaWxhciBlbnZpcm9ubWVudHMgc29tZXRpbWVzXG4vLyBhbmQgd2UgY291bGQgaGF2ZSBhIHNwZWNpYWwgYnVpbGQganVzdCBmb3IgdGhhdFxuLy8gYnV0IHRoaXMgaXMgbXVjaCBlYXNpZXIgYW5kIHRoZSBuYXRpdmUgcGFja2FnZXNcbi8vIG1pZ2h0IHVzZSBhIGRpZmZlcmVudCB0aGVtZSBjb250ZXh0IGluIHRoZSBmdXR1cmUgYW55d2F5XG50eXBlb2YgSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnID8gLyogI19fUFVSRV9fICovY3JlYXRlQ2FjaGUoe1xuICBrZXk6ICdjc3MnXG59KSA6IG51bGwpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBFbW90aW9uQ2FjaGVDb250ZXh0LmRpc3BsYXlOYW1lID0gJ0Vtb3Rpb25DYWNoZUNvbnRleHQnO1xufVxuXG52YXIgQ2FjaGVQcm92aWRlciA9IEVtb3Rpb25DYWNoZUNvbnRleHQuUHJvdmlkZXI7XG52YXIgX191bnNhZmVfdXNlRW1vdGlvbkNhY2hlID0gZnVuY3Rpb24gdXNlRW1vdGlvbkNhY2hlKCkge1xuICByZXR1cm4gdXNlQ29udGV4dChFbW90aW9uQ2FjaGVDb250ZXh0KTtcbn07XG5cbnZhciB3aXRoRW1vdGlvbkNhY2hlID0gZnVuY3Rpb24gd2l0aEVtb3Rpb25DYWNoZShmdW5jKSB7XG4gIC8vICRGbG93Rml4TWVcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gICAgLy8gdGhlIGNhY2hlIHdpbGwgbmV2ZXIgYmUgbnVsbCBpbiB0aGUgYnJvd3NlclxuICAgIHZhciBjYWNoZSA9IHVzZUNvbnRleHQoRW1vdGlvbkNhY2hlQ29udGV4dCk7XG4gICAgcmV0dXJuIGZ1bmMocHJvcHMsIGNhY2hlLCByZWYpO1xuICB9KTtcbn07XG5cbnZhciBUaGVtZUNvbnRleHQgPSAvKiAjX19QVVJFX18gKi9jcmVhdGVDb250ZXh0KHt9KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgVGhlbWVDb250ZXh0LmRpc3BsYXlOYW1lID0gJ0Vtb3Rpb25UaGVtZUNvbnRleHQnO1xufVxuXG52YXIgdXNlVGhlbWUgPSBmdW5jdGlvbiB1c2VUaGVtZSgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcbn07XG5cbnZhciBnZXRUaGVtZSA9IGZ1bmN0aW9uIGdldFRoZW1lKG91dGVyVGhlbWUsIHRoZW1lKSB7XG4gIGlmICh0eXBlb2YgdGhlbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgbWVyZ2VkVGhlbWUgPSB0aGVtZShvdXRlclRoZW1lKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIChtZXJnZWRUaGVtZSA9PSBudWxsIHx8IHR5cGVvZiBtZXJnZWRUaGVtZSAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShtZXJnZWRUaGVtZSkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tUaGVtZVByb3ZpZGVyXSBQbGVhc2UgcmV0dXJuIGFuIG9iamVjdCBmcm9tIHlvdXIgdGhlbWUgZnVuY3Rpb24sIGkuZS4gdGhlbWU9eygpID0+ICh7fSl9IScpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXJnZWRUaGVtZTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICh0aGVtZSA9PSBudWxsIHx8IHR5cGVvZiB0aGVtZSAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheSh0aGVtZSkpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdbVGhlbWVQcm92aWRlcl0gUGxlYXNlIG1ha2UgeW91ciB0aGVtZSBwcm9wIGEgcGxhaW4gb2JqZWN0Jyk7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIG91dGVyVGhlbWUsIHRoZW1lKTtcbn07XG5cbnZhciBjcmVhdGVDYWNoZVdpdGhUaGVtZSA9IC8qICNfX1BVUkVfXyAqL3dlYWtNZW1vaXplKGZ1bmN0aW9uIChvdXRlclRoZW1lKSB7XG4gIHJldHVybiB3ZWFrTWVtb2l6ZShmdW5jdGlvbiAodGhlbWUpIHtcbiAgICByZXR1cm4gZ2V0VGhlbWUob3V0ZXJUaGVtZSwgdGhlbWUpO1xuICB9KTtcbn0pO1xudmFyIFRoZW1lUHJvdmlkZXIgPSBmdW5jdGlvbiBUaGVtZVByb3ZpZGVyKHByb3BzKSB7XG4gIHZhciB0aGVtZSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcblxuICBpZiAocHJvcHMudGhlbWUgIT09IHRoZW1lKSB7XG4gICAgdGhlbWUgPSBjcmVhdGVDYWNoZVdpdGhUaGVtZSh0aGVtZSkocHJvcHMudGhlbWUpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KFRoZW1lQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiB0aGVtZVxuICB9LCBwcm9wcy5jaGlsZHJlbik7XG59O1xuZnVuY3Rpb24gd2l0aFRoZW1lKENvbXBvbmVudCkge1xuICB2YXIgY29tcG9uZW50TmFtZSA9IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcblxuICB2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHByb3BzLCByZWYpIHtcbiAgICB2YXIgdGhlbWUgPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgdGhlbWU6IHRoZW1lLFxuICAgICAgcmVmOiByZWZcbiAgICB9LCBwcm9wcykpO1xuICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICB2YXIgV2l0aFRoZW1lID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYocmVuZGVyKTtcbiAgV2l0aFRoZW1lLmRpc3BsYXlOYW1lID0gXCJXaXRoVGhlbWUoXCIgKyBjb21wb25lbnROYW1lICsgXCIpXCI7XG4gIHJldHVybiBob2lzdE5vblJlYWN0U3RhdGljcyhXaXRoVGhlbWUsIENvbXBvbmVudCk7XG59XG5cbnZhciBnZXRMYXN0UGFydCA9IGZ1bmN0aW9uIGdldExhc3RQYXJ0KGZ1bmN0aW9uTmFtZSkge1xuICAvLyBUaGUgbWF0Y2ggbWF5IGJlIHNvbWV0aGluZyBsaWtlICdPYmplY3QuY3JlYXRlRW1vdGlvblByb3BzJyBvclxuICAvLyAnTG9hZGVyLnByb3RvdHlwZS5yZW5kZXInXG4gIHZhciBwYXJ0cyA9IGZ1bmN0aW9uTmFtZS5zcGxpdCgnLicpO1xuICByZXR1cm4gcGFydHNbcGFydHMubGVuZ3RoIC0gMV07XG59O1xuXG52YXIgZ2V0RnVuY3Rpb25OYW1lRnJvbVN0YWNrVHJhY2VMaW5lID0gZnVuY3Rpb24gZ2V0RnVuY3Rpb25OYW1lRnJvbVN0YWNrVHJhY2VMaW5lKGxpbmUpIHtcbiAgLy8gVjhcbiAgdmFyIG1hdGNoID0gL15cXHMrYXRcXHMrKFtBLVphLXowLTkkLl0rKVxccy8uZXhlYyhsaW5lKTtcbiAgaWYgKG1hdGNoKSByZXR1cm4gZ2V0TGFzdFBhcnQobWF0Y2hbMV0pOyAvLyBTYWZhcmkgLyBGaXJlZm94XG5cbiAgbWF0Y2ggPSAvXihbQS1aYS16MC05JC5dKylALy5leGVjKGxpbmUpO1xuICBpZiAobWF0Y2gpIHJldHVybiBnZXRMYXN0UGFydChtYXRjaFsxXSk7XG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG52YXIgaW50ZXJuYWxSZWFjdEZ1bmN0aW9uTmFtZXMgPSAvKiAjX19QVVJFX18gKi9uZXcgU2V0KFsncmVuZGVyV2l0aEhvb2tzJywgJ3Byb2Nlc3NDaGlsZCcsICdmaW5pc2hDbGFzc0NvbXBvbmVudCcsICdyZW5kZXJUb1N0cmluZyddKTsgLy8gVGhlc2UgaWRlbnRpZmllcnMgY29tZSBmcm9tIGVycm9yIHN0YWNrcywgc28gdGhleSBoYXZlIHRvIGJlIHZhbGlkIEpTXG4vLyBpZGVudGlmaWVycywgdGh1cyB3ZSBvbmx5IG5lZWQgdG8gcmVwbGFjZSB3aGF0IGlzIGEgdmFsaWQgY2hhcmFjdGVyIGZvciBKUyxcbi8vIGJ1dCBub3QgZm9yIENTUy5cblxudmFyIHNhbml0aXplSWRlbnRpZmllciA9IGZ1bmN0aW9uIHNhbml0aXplSWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHJldHVybiBpZGVudGlmaWVyLnJlcGxhY2UoL1xcJC9nLCAnLScpO1xufTtcblxudmFyIGdldExhYmVsRnJvbVN0YWNrVHJhY2UgPSBmdW5jdGlvbiBnZXRMYWJlbEZyb21TdGFja1RyYWNlKHN0YWNrVHJhY2UpIHtcbiAgaWYgKCFzdGFja1RyYWNlKSByZXR1cm4gdW5kZWZpbmVkO1xuICB2YXIgbGluZXMgPSBzdGFja1RyYWNlLnNwbGl0KCdcXG4nKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGZ1bmN0aW9uTmFtZSA9IGdldEZ1bmN0aW9uTmFtZUZyb21TdGFja1RyYWNlTGluZShsaW5lc1tpXSk7IC8vIFRoZSBmaXJzdCBsaW5lIG9mIFY4IHN0YWNrIHRyYWNlcyBpcyBqdXN0IFwiRXJyb3JcIlxuXG4gICAgaWYgKCFmdW5jdGlvbk5hbWUpIGNvbnRpbnVlOyAvLyBJZiB3ZSByZWFjaCBvbmUgb2YgdGhlc2UsIHdlIGhhdmUgZ29uZSB0b28gZmFyIGFuZCBzaG91bGQgcXVpdFxuXG4gICAgaWYgKGludGVybmFsUmVhY3RGdW5jdGlvbk5hbWVzLmhhcyhmdW5jdGlvbk5hbWUpKSBicmVhazsgLy8gVGhlIGNvbXBvbmVudCBuYW1lIGlzIHRoZSBmaXJzdCBmdW5jdGlvbiBpbiB0aGUgc3RhY2sgdGhhdCBzdGFydHMgd2l0aCBhblxuICAgIC8vIHVwcGVyY2FzZSBsZXR0ZXJcblxuICAgIGlmICgvXltBLVpdLy50ZXN0KGZ1bmN0aW9uTmFtZSkpIHJldHVybiBzYW5pdGl6ZUlkZW50aWZpZXIoZnVuY3Rpb25OYW1lKTtcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG52YXIgdXNlSW5zZXJ0aW9uRWZmZWN0ID0gUmVhY3RbJ3VzZUluc2VydGlvbicgKyAnRWZmZWN0J10gPyBSZWFjdFsndXNlSW5zZXJ0aW9uJyArICdFZmZlY3QnXSA6IGZ1bmN0aW9uIHVzZUluc2VydGlvbkVmZmVjdChjcmVhdGUpIHtcbiAgY3JlYXRlKCk7XG59O1xuZnVuY3Rpb24gdXNlSW5zZXJ0aW9uRWZmZWN0TWF5YmUoY3JlYXRlKSB7XG5cbiAgdXNlSW5zZXJ0aW9uRWZmZWN0KGNyZWF0ZSk7XG59XG5cbnZhciB0eXBlUHJvcE5hbWUgPSAnX19FTU9USU9OX1RZUEVfUExFQVNFX0RPX05PVF9VU0VfXyc7XG52YXIgbGFiZWxQcm9wTmFtZSA9ICdfX0VNT1RJT05fTEFCRUxfUExFQVNFX0RPX05PVF9VU0VfXyc7XG52YXIgY3JlYXRlRW1vdGlvblByb3BzID0gZnVuY3Rpb24gY3JlYXRlRW1vdGlvblByb3BzKHR5cGUsIHByb3BzKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBwcm9wcy5jc3MgPT09ICdzdHJpbmcnICYmIC8vIGNoZWNrIGlmIHRoZXJlIGlzIGEgY3NzIGRlY2xhcmF0aW9uXG4gIHByb3BzLmNzcy5pbmRleE9mKCc6JykgIT09IC0xKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU3RyaW5ncyBhcmUgbm90IGFsbG93ZWQgYXMgY3NzIHByb3AgdmFsdWVzLCBwbGVhc2Ugd3JhcCBpdCBpbiBhIGNzcyB0ZW1wbGF0ZSBsaXRlcmFsIGZyb20gJ0BlbW90aW9uL3JlYWN0JyBsaWtlIHRoaXM6IGNzc2BcIiArIHByb3BzLmNzcyArIFwiYFwiKTtcbiAgfVxuXG4gIHZhciBuZXdQcm9wcyA9IHt9O1xuXG4gIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCBrZXkpKSB7XG4gICAgICBuZXdQcm9wc1trZXldID0gcHJvcHNba2V5XTtcbiAgICB9XG4gIH1cblxuICBuZXdQcm9wc1t0eXBlUHJvcE5hbWVdID0gdHlwZTsgLy8gRm9yIHBlcmZvcm1hbmNlLCBvbmx5IGNhbGwgZ2V0TGFiZWxGcm9tU3RhY2tUcmFjZSBpbiBkZXZlbG9wbWVudCBhbmQgd2hlblxuICAvLyB0aGUgbGFiZWwgaGFzbid0IGFscmVhZHkgYmVlbiBjb21wdXRlZFxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICEhcHJvcHMuY3NzICYmICh0eXBlb2YgcHJvcHMuY3NzICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgcHJvcHMuY3NzLm5hbWUgIT09ICdzdHJpbmcnIHx8IHByb3BzLmNzcy5uYW1lLmluZGV4T2YoJy0nKSA9PT0gLTEpKSB7XG4gICAgdmFyIGxhYmVsID0gZ2V0TGFiZWxGcm9tU3RhY2tUcmFjZShuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgaWYgKGxhYmVsKSBuZXdQcm9wc1tsYWJlbFByb3BOYW1lXSA9IGxhYmVsO1xuICB9XG5cbiAgcmV0dXJuIG5ld1Byb3BzO1xufTtcblxudmFyIEluc2VydGlvbiA9IGZ1bmN0aW9uIEluc2VydGlvbihfcmVmKSB7XG4gIHZhciBjYWNoZSA9IF9yZWYuY2FjaGUsXG4gICAgICBzZXJpYWxpemVkID0gX3JlZi5zZXJpYWxpemVkLFxuICAgICAgaXNTdHJpbmdUYWcgPSBfcmVmLmlzU3RyaW5nVGFnO1xuICByZWdpc3RlclN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZCwgaXNTdHJpbmdUYWcpO1xuICB2YXIgcnVsZXMgPSB1c2VJbnNlcnRpb25FZmZlY3RNYXliZShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGluc2VydFN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZCwgaXNTdHJpbmdUYWcpO1xuICB9KTtcblxuICByZXR1cm4gbnVsbDtcbn07XG5cbnZhciBFbW90aW9uID0gLyogI19fUFVSRV9fICovd2l0aEVtb3Rpb25DYWNoZShmdW5jdGlvbiAocHJvcHMsIGNhY2hlLCByZWYpIHtcbiAgdmFyIGNzc1Byb3AgPSBwcm9wcy5jc3M7IC8vIHNvIHRoYXQgdXNpbmcgYGNzc2AgZnJvbSBgZW1vdGlvbmAgYW5kIHBhc3NpbmcgdGhlIHJlc3VsdCB0byB0aGUgY3NzIHByb3Agd29ya3NcbiAgLy8gbm90IHBhc3NpbmcgdGhlIHJlZ2lzdGVyZWQgY2FjaGUgdG8gc2VyaWFsaXplU3R5bGVzIGJlY2F1c2UgaXQgd291bGRcbiAgLy8gbWFrZSBjZXJ0YWluIGJhYmVsIG9wdGltaXNhdGlvbnMgbm90IHBvc3NpYmxlXG5cbiAgaWYgKHR5cGVvZiBjc3NQcm9wID09PSAnc3RyaW5nJyAmJiBjYWNoZS5yZWdpc3RlcmVkW2Nzc1Byb3BdICE9PSB1bmRlZmluZWQpIHtcbiAgICBjc3NQcm9wID0gY2FjaGUucmVnaXN0ZXJlZFtjc3NQcm9wXTtcbiAgfVxuXG4gIHZhciBXcmFwcGVkQ29tcG9uZW50ID0gcHJvcHNbdHlwZVByb3BOYW1lXTtcbiAgdmFyIHJlZ2lzdGVyZWRTdHlsZXMgPSBbY3NzUHJvcF07XG4gIHZhciBjbGFzc05hbWUgPSAnJztcblxuICBpZiAodHlwZW9mIHByb3BzLmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICBjbGFzc05hbWUgPSBnZXRSZWdpc3RlcmVkU3R5bGVzKGNhY2hlLnJlZ2lzdGVyZWQsIHJlZ2lzdGVyZWRTdHlsZXMsIHByb3BzLmNsYXNzTmFtZSk7XG4gIH0gZWxzZSBpZiAocHJvcHMuY2xhc3NOYW1lICE9IG51bGwpIHtcbiAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUgKyBcIiBcIjtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkID0gc2VyaWFsaXplU3R5bGVzKHJlZ2lzdGVyZWRTdHlsZXMsIHVuZGVmaW5lZCwgdXNlQ29udGV4dChUaGVtZUNvbnRleHQpKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBzZXJpYWxpemVkLm5hbWUuaW5kZXhPZignLScpID09PSAtMSkge1xuICAgIHZhciBsYWJlbEZyb21TdGFjayA9IHByb3BzW2xhYmVsUHJvcE5hbWVdO1xuXG4gICAgaWYgKGxhYmVsRnJvbVN0YWNrKSB7XG4gICAgICBzZXJpYWxpemVkID0gc2VyaWFsaXplU3R5bGVzKFtzZXJpYWxpemVkLCAnbGFiZWw6JyArIGxhYmVsRnJvbVN0YWNrICsgJzsnXSk7XG4gICAgfVxuICB9XG5cbiAgY2xhc3NOYW1lICs9IGNhY2hlLmtleSArIFwiLVwiICsgc2VyaWFsaXplZC5uYW1lO1xuICB2YXIgbmV3UHJvcHMgPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywga2V5KSAmJiBrZXkgIT09ICdjc3MnICYmIGtleSAhPT0gdHlwZVByb3BOYW1lICYmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nIHx8IGtleSAhPT0gbGFiZWxQcm9wTmFtZSkpIHtcbiAgICAgIG5ld1Byb3BzW2tleV0gPSBwcm9wc1trZXldO1xuICAgIH1cbiAgfVxuXG4gIG5ld1Byb3BzLnJlZiA9IHJlZjtcbiAgbmV3UHJvcHMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KEluc2VydGlvbiwge1xuICAgIGNhY2hlOiBjYWNoZSxcbiAgICBzZXJpYWxpemVkOiBzZXJpYWxpemVkLFxuICAgIGlzU3RyaW5nVGFnOiB0eXBlb2YgV3JhcHBlZENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgfSksIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIG5ld1Byb3BzKSk7XG59KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgRW1vdGlvbi5kaXNwbGF5TmFtZSA9ICdFbW90aW9uQ3NzUHJvcEludGVybmFsJztcbn1cblxuZXhwb3J0IHsgQ2FjaGVQcm92aWRlciBhcyBDLCBFbW90aW9uIGFzIEUsIFRoZW1lQ29udGV4dCBhcyBULCBfX3Vuc2FmZV91c2VFbW90aW9uQ2FjaGUgYXMgXywgdXNlVGhlbWUgYXMgYSwgVGhlbWVQcm92aWRlciBhcyBiLCBjcmVhdGVFbW90aW9uUHJvcHMgYXMgYywgd2l0aFRoZW1lIGFzIGQsIGhhc093blByb3BlcnR5IGFzIGgsIHVzZUluc2VydGlvbkVmZmVjdE1heWJlIGFzIHUsIHdpdGhFbW90aW9uQ2FjaGUgYXMgdyB9O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VDb250ZXh0LCB1c2VSZWYsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICdAZW1vdGlvbi9jYWNoZSc7XG5pbXBvcnQgeyBoIGFzIGhhc093blByb3BlcnR5LCBFIGFzIEVtb3Rpb24sIGMgYXMgY3JlYXRlRW1vdGlvblByb3BzLCB3IGFzIHdpdGhFbW90aW9uQ2FjaGUsIFQgYXMgVGhlbWVDb250ZXh0LCB1IGFzIHVzZUluc2VydGlvbkVmZmVjdE1heWJlIH0gZnJvbSAnLi9lbW90aW9uLWVsZW1lbnQtY2JlZDQ1MWYuYnJvd3Nlci5lc20uanMnO1xuZXhwb3J0IHsgQyBhcyBDYWNoZVByb3ZpZGVyLCBUIGFzIFRoZW1lQ29udGV4dCwgYiBhcyBUaGVtZVByb3ZpZGVyLCBfIGFzIF9fdW5zYWZlX3VzZUVtb3Rpb25DYWNoZSwgYSBhcyB1c2VUaGVtZSwgdyBhcyB3aXRoRW1vdGlvbkNhY2hlLCBkIGFzIHdpdGhUaGVtZSB9IGZyb20gJy4vZW1vdGlvbi1lbGVtZW50LWNiZWQ0NTFmLmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCAnQGVtb3Rpb24vd2Vhay1tZW1vaXplJztcbmltcG9ydCAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuaW1wb3J0ICcuLi9faXNvbGF0ZWQtaG5ycy9kaXN0L2Vtb3Rpb24tcmVhY3QtX2lzb2xhdGVkLWhucnMuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgaW5zZXJ0U3R5bGVzLCByZWdpc3RlclN0eWxlcywgZ2V0UmVnaXN0ZXJlZFN0eWxlcyB9IGZyb20gJ0BlbW90aW9uL3V0aWxzJztcbmltcG9ydCB7IHNlcmlhbGl6ZVN0eWxlcyB9IGZyb20gJ0BlbW90aW9uL3NlcmlhbGl6ZSc7XG5cbnZhciBwa2cgPSB7XG5cdG5hbWU6IFwiQGVtb3Rpb24vcmVhY3RcIixcblx0dmVyc2lvbjogXCIxMS45LjBcIixcblx0bWFpbjogXCJkaXN0L2Vtb3Rpb24tcmVhY3QuY2pzLmpzXCIsXG5cdG1vZHVsZTogXCJkaXN0L2Vtb3Rpb24tcmVhY3QuZXNtLmpzXCIsXG5cdGJyb3dzZXI6IHtcblx0XHRcIi4vZGlzdC9lbW90aW9uLXJlYWN0LmNqcy5qc1wiOiBcIi4vZGlzdC9lbW90aW9uLXJlYWN0LmJyb3dzZXIuY2pzLmpzXCIsXG5cdFx0XCIuL2Rpc3QvZW1vdGlvbi1yZWFjdC5lc20uanNcIjogXCIuL2Rpc3QvZW1vdGlvbi1yZWFjdC5icm93c2VyLmVzbS5qc1wiXG5cdH0sXG5cdHR5cGVzOiBcInR5cGVzL2luZGV4LmQudHNcIixcblx0ZmlsZXM6IFtcblx0XHRcInNyY1wiLFxuXHRcdFwiZGlzdFwiLFxuXHRcdFwianN4LXJ1bnRpbWVcIixcblx0XHRcImpzeC1kZXYtcnVudGltZVwiLFxuXHRcdFwiX2lzb2xhdGVkLWhucnNcIixcblx0XHRcInR5cGVzLyouZC50c1wiLFxuXHRcdFwibWFjcm8uanNcIixcblx0XHRcIm1hY3JvLmQudHNcIixcblx0XHRcIm1hY3JvLmpzLmZsb3dcIlxuXHRdLFxuXHRzaWRlRWZmZWN0czogZmFsc2UsXG5cdGF1dGhvcjogXCJFbW90aW9uIENvbnRyaWJ1dG9yc1wiLFxuXHRsaWNlbnNlOiBcIk1JVFwiLFxuXHRzY3JpcHRzOiB7XG5cdFx0XCJ0ZXN0OnR5cGVzY3JpcHRcIjogXCJkdHNsaW50IHR5cGVzXCJcblx0fSxcblx0ZGVwZW5kZW5jaWVzOiB7XG5cdFx0XCJAYmFiZWwvcnVudGltZVwiOiBcIl43LjEzLjEwXCIsXG5cdFx0XCJAZW1vdGlvbi9iYWJlbC1wbHVnaW5cIjogXCJeMTEuNy4xXCIsXG5cdFx0XCJAZW1vdGlvbi9jYWNoZVwiOiBcIl4xMS43LjFcIixcblx0XHRcIkBlbW90aW9uL3NlcmlhbGl6ZVwiOiBcIl4xLjAuM1wiLFxuXHRcdFwiQGVtb3Rpb24vdXRpbHNcIjogXCJeMS4xLjBcIixcblx0XHRcIkBlbW90aW9uL3dlYWstbWVtb2l6ZVwiOiBcIl4wLjIuNVwiLFxuXHRcdFwiaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3NcIjogXCJeMy4zLjFcIlxuXHR9LFxuXHRwZWVyRGVwZW5kZW5jaWVzOiB7XG5cdFx0XCJAYmFiZWwvY29yZVwiOiBcIl43LjAuMFwiLFxuXHRcdHJlYWN0OiBcIj49MTYuOC4wXCJcblx0fSxcblx0cGVlckRlcGVuZGVuY2llc01ldGE6IHtcblx0XHRcIkBiYWJlbC9jb3JlXCI6IHtcblx0XHRcdG9wdGlvbmFsOiB0cnVlXG5cdFx0fSxcblx0XHRcIkB0eXBlcy9yZWFjdFwiOiB7XG5cdFx0XHRvcHRpb25hbDogdHJ1ZVxuXHRcdH1cblx0fSxcblx0ZGV2RGVwZW5kZW5jaWVzOiB7XG5cdFx0XCJAYmFiZWwvY29yZVwiOiBcIl43LjEzLjEwXCIsXG5cdFx0XCJAZW1vdGlvbi9jc3NcIjogXCIxMS45LjBcIixcblx0XHRcIkBlbW90aW9uL2Nzcy1wcmV0dGlmaWVyXCI6IFwiMS4wLjFcIixcblx0XHRcIkBlbW90aW9uL3NlcnZlclwiOiBcIjExLjQuMFwiLFxuXHRcdFwiQGVtb3Rpb24vc3R5bGVkXCI6IFwiMTEuOC4xXCIsXG5cdFx0XCJAdHlwZXMvcmVhY3RcIjogXCJeMTYuOS4xMVwiLFxuXHRcdGR0c2xpbnQ6IFwiXjQuMi4xXCIsXG5cdFx0XCJodG1sLXRhZy1uYW1lc1wiOiBcIl4xLjEuMlwiLFxuXHRcdHJlYWN0OiBcIjE2LjE0LjBcIixcblx0XHRcInN2Zy10YWctbmFtZXNcIjogXCJeMS4xLjFcIixcblx0XHR0eXBlc2NyaXB0OiBcIl40LjUuNVwiXG5cdH0sXG5cdHJlcG9zaXRvcnk6IFwiaHR0cHM6Ly9naXRodWIuY29tL2Vtb3Rpb24tanMvZW1vdGlvbi90cmVlL21haW4vcGFja2FnZXMvcmVhY3RcIixcblx0cHVibGlzaENvbmZpZzoge1xuXHRcdGFjY2VzczogXCJwdWJsaWNcIlxuXHR9LFxuXHRcInVtZDptYWluXCI6IFwiZGlzdC9lbW90aW9uLXJlYWN0LnVtZC5taW4uanNcIixcblx0cHJlY29uc3RydWN0OiB7XG5cdFx0ZW50cnlwb2ludHM6IFtcblx0XHRcdFwiLi9pbmRleC5qc1wiLFxuXHRcdFx0XCIuL2pzeC1ydW50aW1lLmpzXCIsXG5cdFx0XHRcIi4vanN4LWRldi1ydW50aW1lLmpzXCIsXG5cdFx0XHRcIi4vX2lzb2xhdGVkLWhucnMuanNcIlxuXHRcdF0sXG5cdFx0dW1kTmFtZTogXCJlbW90aW9uUmVhY3RcIlxuXHR9XG59O1xuXG52YXIganN4ID0gZnVuY3Rpb24ganN4KHR5cGUsIHByb3BzKSB7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG4gIGlmIChwcm9wcyA9PSBudWxsIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCAnY3NzJykpIHtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgfVxuXG4gIHZhciBhcmdzTGVuZ3RoID0gYXJncy5sZW5ndGg7XG4gIHZhciBjcmVhdGVFbGVtZW50QXJnQXJyYXkgPSBuZXcgQXJyYXkoYXJnc0xlbmd0aCk7XG4gIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVswXSA9IEVtb3Rpb247XG4gIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVsxXSA9IGNyZWF0ZUVtb3Rpb25Qcm9wcyh0eXBlLCBwcm9wcyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmdzTGVuZ3RoOyBpKyspIHtcbiAgICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbaV0gPSBhcmdzW2ldO1xuICB9IC8vICRGbG93Rml4TWVcblxuXG4gIHJldHVybiBjcmVhdGVFbGVtZW50LmFwcGx5KG51bGwsIGNyZWF0ZUVsZW1lbnRBcmdBcnJheSk7XG59O1xuXG52YXIgdXNlSW5zZXJ0aW9uRWZmZWN0ID0gUmVhY3RbJ3VzZUluc2VydGlvbicgKyAnRWZmZWN0J10gPyBSZWFjdFsndXNlSW5zZXJ0aW9uJyArICdFZmZlY3QnXSA6IHVzZUxheW91dEVmZmVjdDtcbnZhciB3YXJuZWRBYm91dENzc1Byb3BGb3JHbG9iYWwgPSBmYWxzZTsgLy8gbWFpbnRhaW4gcGxhY2Ugb3ZlciByZXJlbmRlcnMuXG4vLyBpbml0aWFsIHJlbmRlciBmcm9tIGJyb3dzZXIsIGluc2VydEJlZm9yZSBjb250ZXh0LnNoZWV0LnRhZ3NbMF0gb3IgaWYgYSBzdHlsZSBoYXNuJ3QgYmVlbiBpbnNlcnRlZCB0aGVyZSB5ZXQsIGFwcGVuZENoaWxkXG4vLyBpbml0aWFsIGNsaWVudC1zaWRlIHJlbmRlciBmcm9tIFNTUiwgdXNlIHBsYWNlIG9mIGh5ZHJhdGluZyB0YWdcblxudmFyIEdsb2JhbCA9IC8qICNfX1BVUkVfXyAqL3dpdGhFbW90aW9uQ2FjaGUoZnVuY3Rpb24gKHByb3BzLCBjYWNoZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhd2FybmVkQWJvdXRDc3NQcm9wRm9yR2xvYmFsICYmICggLy8gY2hlY2sgZm9yIGNsYXNzTmFtZSBhcyB3ZWxsIHNpbmNlIHRoZSB1c2VyIGlzXG4gIC8vIHByb2JhYmx5IHVzaW5nIHRoZSBjdXN0b20gY3JlYXRlRWxlbWVudCB3aGljaFxuICAvLyBtZWFucyBpdCB3aWxsIGJlIHR1cm5lZCBpbnRvIGEgY2xhc3NOYW1lIHByb3BcbiAgLy8gJEZsb3dGaXhNZSBJIGRvbid0IHJlYWxseSB3YW50IHRvIGFkZCBpdCB0byB0aGUgdHlwZSBzaW5jZSBpdCBzaG91bGRuJ3QgYmUgdXNlZFxuICBwcm9wcy5jbGFzc05hbWUgfHwgcHJvcHMuY3NzKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJJdCBsb29rcyBsaWtlIHlvdSdyZSB1c2luZyB0aGUgY3NzIHByb3Agb24gR2xvYmFsLCBkaWQgeW91IG1lYW4gdG8gdXNlIHRoZSBzdHlsZXMgcHJvcCBpbnN0ZWFkP1wiKTtcbiAgICB3YXJuZWRBYm91dENzc1Byb3BGb3JHbG9iYWwgPSB0cnVlO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IHByb3BzLnN0eWxlcztcbiAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoW3N0eWxlc10sIHVuZGVmaW5lZCwgdXNlQ29udGV4dChUaGVtZUNvbnRleHQpKTtcbiAgLy8gYnV0IGl0IGlzIGJhc2VkIG9uIGEgY29uc3RhbnQgdGhhdCB3aWxsIG5ldmVyIGNoYW5nZSBhdCBydW50aW1lXG4gIC8vIGl0J3MgZWZmZWN0aXZlbHkgbGlrZSBoYXZpbmcgdHdvIGltcGxlbWVudGF0aW9ucyBhbmQgc3dpdGNoaW5nIHRoZW0gb3V0XG4gIC8vIHNvIGl0J3Mgbm90IGFjdHVhbGx5IGJyZWFraW5nIGFueXRoaW5nXG5cblxuICB2YXIgc2hlZXRSZWYgPSB1c2VSZWYoKTtcbiAgdXNlSW5zZXJ0aW9uRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIga2V5ID0gY2FjaGUua2V5ICsgXCItZ2xvYmFsXCI7IC8vIHVzZSBjYXNlIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9lbW90aW9uLWpzL2Vtb3Rpb24vaXNzdWVzLzI2NzVcblxuICAgIHZhciBzaGVldCA9IG5ldyBjYWNoZS5zaGVldC5jb25zdHJ1Y3Rvcih7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIG5vbmNlOiBjYWNoZS5zaGVldC5ub25jZSxcbiAgICAgIGNvbnRhaW5lcjogY2FjaGUuc2hlZXQuY29udGFpbmVyLFxuICAgICAgc3BlZWR5OiBjYWNoZS5zaGVldC5pc1NwZWVkeVxuICAgIH0pO1xuICAgIHZhciByZWh5ZHJhdGluZyA9IGZhbHNlOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzdHlsZVtkYXRhLWVtb3Rpb249XFxcIlwiICsga2V5ICsgXCIgXCIgKyBzZXJpYWxpemVkLm5hbWUgKyBcIlxcXCJdXCIpO1xuXG4gICAgaWYgKGNhY2hlLnNoZWV0LnRhZ3MubGVuZ3RoKSB7XG4gICAgICBzaGVldC5iZWZvcmUgPSBjYWNoZS5zaGVldC50YWdzWzBdO1xuICAgIH1cblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICByZWh5ZHJhdGluZyA9IHRydWU7IC8vIGNsZWFyIHRoZSBoYXNoIHNvIHRoaXMgbm9kZSB3b24ndCBiZSByZWNvZ25pemFibGUgYXMgcmVoeWRyYXRhYmxlIGJ5IG90aGVyIDxHbG9iYWwvPnNcblxuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZW1vdGlvbicsIGtleSk7XG4gICAgICBzaGVldC5oeWRyYXRlKFtub2RlXSk7XG4gICAgfVxuXG4gICAgc2hlZXRSZWYuY3VycmVudCA9IFtzaGVldCwgcmVoeWRyYXRpbmddO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBzaGVldC5mbHVzaCgpO1xuICAgIH07XG4gIH0sIFtjYWNoZV0pO1xuICB1c2VJbnNlcnRpb25FZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBzaGVldFJlZkN1cnJlbnQgPSBzaGVldFJlZi5jdXJyZW50O1xuICAgIHZhciBzaGVldCA9IHNoZWV0UmVmQ3VycmVudFswXSxcbiAgICAgICAgcmVoeWRyYXRpbmcgPSBzaGVldFJlZkN1cnJlbnRbMV07XG5cbiAgICBpZiAocmVoeWRyYXRpbmcpIHtcbiAgICAgIHNoZWV0UmVmQ3VycmVudFsxXSA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzZXJpYWxpemVkLm5leHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gaW5zZXJ0IGtleWZyYW1lc1xuICAgICAgaW5zZXJ0U3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkLm5leHQsIHRydWUpO1xuICAgIH1cblxuICAgIGlmIChzaGVldC50YWdzLmxlbmd0aCkge1xuICAgICAgLy8gaWYgdGhpcyBkb2Vzbid0IGV4aXN0IHRoZW4gaXQgd2lsbCBiZSBudWxsIHNvIHRoZSBzdHlsZSBlbGVtZW50IHdpbGwgYmUgYXBwZW5kZWRcbiAgICAgIHZhciBlbGVtZW50ID0gc2hlZXQudGFnc1tzaGVldC50YWdzLmxlbmd0aCAtIDFdLm5leHRFbGVtZW50U2libGluZztcbiAgICAgIHNoZWV0LmJlZm9yZSA9IGVsZW1lbnQ7XG4gICAgICBzaGVldC5mbHVzaCgpO1xuICAgIH1cblxuICAgIGNhY2hlLmluc2VydChcIlwiLCBzZXJpYWxpemVkLCBzaGVldCwgZmFsc2UpO1xuICB9LCBbY2FjaGUsIHNlcmlhbGl6ZWQubmFtZV0pO1xuICByZXR1cm4gbnVsbDtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBHbG9iYWwuZGlzcGxheU5hbWUgPSAnRW1vdGlvbkdsb2JhbCc7XG59XG5cbmZ1bmN0aW9uIGNzcygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBzZXJpYWxpemVTdHlsZXMoYXJncyk7XG59XG5cbnZhciBrZXlmcmFtZXMgPSBmdW5jdGlvbiBrZXlmcmFtZXMoKSB7XG4gIHZhciBpbnNlcnRhYmxlID0gY3NzLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgdmFyIG5hbWUgPSBcImFuaW1hdGlvbi1cIiArIGluc2VydGFibGUubmFtZTsgLy8gJEZsb3dGaXhNZVxuXG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBzdHlsZXM6IFwiQGtleWZyYW1lcyBcIiArIG5hbWUgKyBcIntcIiArIGluc2VydGFibGUuc3R5bGVzICsgXCJ9XCIsXG4gICAgYW5pbTogMSxcbiAgICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gXCJfRU1PX1wiICsgdGhpcy5uYW1lICsgXCJfXCIgKyB0aGlzLnN0eWxlcyArIFwiX0VNT19cIjtcbiAgICB9XG4gIH07XG59O1xuXG52YXIgY2xhc3NuYW1lcyA9IGZ1bmN0aW9uIGNsYXNzbmFtZXMoYXJncykge1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIGNscyA9ICcnO1xuXG4gIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgYXJnID0gYXJnc1tpXTtcbiAgICBpZiAoYXJnID09IG51bGwpIGNvbnRpbnVlO1xuICAgIHZhciB0b0FkZCA9IHZvaWQgMDtcblxuICAgIHN3aXRjaCAodHlwZW9mIGFyZykge1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuICAgICAgICAgICAgdG9BZGQgPSBjbGFzc25hbWVzKGFyZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGFyZy5zdHlsZXMgIT09IHVuZGVmaW5lZCAmJiBhcmcubmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1lvdSBoYXZlIHBhc3NlZCBzdHlsZXMgY3JlYXRlZCB3aXRoIGBjc3NgIGZyb20gYEBlbW90aW9uL3JlYWN0YCBwYWNrYWdlIHRvIHRoZSBgY3hgLlxcbicgKyAnYGN4YCBpcyBtZWFudCB0byBjb21wb3NlIGNsYXNzIG5hbWVzIChzdHJpbmdzKSBzbyB5b3Ugc2hvdWxkIGNvbnZlcnQgdGhvc2Ugc3R5bGVzIHRvIGEgY2xhc3MgbmFtZSBieSBwYXNzaW5nIHRoZW0gdG8gdGhlIGBjc3NgIHJlY2VpdmVkIGZyb20gPENsYXNzTmFtZXMvPiBjb21wb25lbnQuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRvQWRkID0gJyc7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gYXJnKSB7XG4gICAgICAgICAgICAgIGlmIChhcmdba10gJiYgaykge1xuICAgICAgICAgICAgICAgIHRvQWRkICYmICh0b0FkZCArPSAnICcpO1xuICAgICAgICAgICAgICAgIHRvQWRkICs9IGs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB7XG4gICAgICAgICAgdG9BZGQgPSBhcmc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodG9BZGQpIHtcbiAgICAgIGNscyAmJiAoY2xzICs9ICcgJyk7XG4gICAgICBjbHMgKz0gdG9BZGQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNscztcbn07XG5cbmZ1bmN0aW9uIG1lcmdlKHJlZ2lzdGVyZWQsIGNzcywgY2xhc3NOYW1lKSB7XG4gIHZhciByZWdpc3RlcmVkU3R5bGVzID0gW107XG4gIHZhciByYXdDbGFzc05hbWUgPSBnZXRSZWdpc3RlcmVkU3R5bGVzKHJlZ2lzdGVyZWQsIHJlZ2lzdGVyZWRTdHlsZXMsIGNsYXNzTmFtZSk7XG5cbiAgaWYgKHJlZ2lzdGVyZWRTdHlsZXMubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICByZXR1cm4gcmF3Q2xhc3NOYW1lICsgY3NzKHJlZ2lzdGVyZWRTdHlsZXMpO1xufVxuXG52YXIgSW5zZXJ0aW9uID0gZnVuY3Rpb24gSW5zZXJ0aW9uKF9yZWYpIHtcbiAgdmFyIGNhY2hlID0gX3JlZi5jYWNoZSxcbiAgICAgIHNlcmlhbGl6ZWRBcnIgPSBfcmVmLnNlcmlhbGl6ZWRBcnI7XG4gIHZhciBydWxlcyA9IHVzZUluc2VydGlvbkVmZmVjdE1heWJlKGZ1bmN0aW9uICgpIHtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VyaWFsaXplZEFyci5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHJlcyA9IGluc2VydFN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZEFycltpXSwgZmFsc2UpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG52YXIgQ2xhc3NOYW1lcyA9IC8qICNfX1BVUkVfXyAqL3dpdGhFbW90aW9uQ2FjaGUoZnVuY3Rpb24gKHByb3BzLCBjYWNoZSkge1xuICB2YXIgaGFzUmVuZGVyZWQgPSBmYWxzZTtcbiAgdmFyIHNlcmlhbGl6ZWRBcnIgPSBbXTtcblxuICB2YXIgY3NzID0gZnVuY3Rpb24gY3NzKCkge1xuICAgIGlmIChoYXNSZW5kZXJlZCAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NzcyBjYW4gb25seSBiZSB1c2VkIGR1cmluZyByZW5kZXInKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoYXJncywgY2FjaGUucmVnaXN0ZXJlZCk7XG4gICAgc2VyaWFsaXplZEFyci5wdXNoKHNlcmlhbGl6ZWQpOyAvLyByZWdpc3RyYXRpb24gaGFzIHRvIGhhcHBlbiBoZXJlIGFzIHRoZSByZXN1bHQgb2YgdGhpcyBtaWdodCBnZXQgY29uc3VtZWQgYnkgYGN4YFxuXG4gICAgcmVnaXN0ZXJTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGZhbHNlKTtcbiAgICByZXR1cm4gY2FjaGUua2V5ICsgXCItXCIgKyBzZXJpYWxpemVkLm5hbWU7XG4gIH07XG5cbiAgdmFyIGN4ID0gZnVuY3Rpb24gY3goKSB7XG4gICAgaWYgKGhhc1JlbmRlcmVkICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3ggY2FuIG9ubHkgYmUgdXNlZCBkdXJpbmcgcmVuZGVyJyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lcmdlKGNhY2hlLnJlZ2lzdGVyZWQsIGNzcywgY2xhc3NuYW1lcyhhcmdzKSk7XG4gIH07XG5cbiAgdmFyIGNvbnRlbnQgPSB7XG4gICAgY3NzOiBjc3MsXG4gICAgY3g6IGN4LFxuICAgIHRoZW1lOiB1c2VDb250ZXh0KFRoZW1lQ29udGV4dClcbiAgfTtcbiAgdmFyIGVsZSA9IHByb3BzLmNoaWxkcmVuKGNvbnRlbnQpO1xuICBoYXNSZW5kZXJlZCA9IHRydWU7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoSW5zZXJ0aW9uLCB7XG4gICAgY2FjaGU6IGNhY2hlLFxuICAgIHNlcmlhbGl6ZWRBcnI6IHNlcmlhbGl6ZWRBcnJcbiAgfSksIGVsZSk7XG59KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgQ2xhc3NOYW1lcy5kaXNwbGF5TmFtZSA9ICdFbW90aW9uQ2xhc3NOYW1lcyc7XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBpc0Jyb3dzZXIgPSBcIm9iamVjdFwiICE9PSAndW5kZWZpbmVkJzsgLy8gIzE3MjcgZm9yIHNvbWUgcmVhc29uIEplc3QgZXZhbHVhdGVzIG1vZHVsZXMgdHdpY2UgaWYgc29tZSBjb25zdW1pbmcgbW9kdWxlIGdldHMgbW9ja2VkIHdpdGggamVzdC5tb2NrXG5cbiAgdmFyIGlzSmVzdCA9IHR5cGVvZiBqZXN0ICE9PSAndW5kZWZpbmVkJztcblxuICBpZiAoaXNCcm93c2VyICYmICFpc0plc3QpIHtcbiAgICAvLyBnbG9iYWxUaGlzIGhhcyB3aWRlIGJyb3dzZXIgc3VwcG9ydCAtIGh0dHBzOi8vY2FuaXVzZS5jb20vP3NlYXJjaD1nbG9iYWxUaGlzLCBOb2RlLmpzIDEyIGFuZCBsYXRlclxuICAgIHZhciBnbG9iYWxDb250ZXh0ID0gLy8gJEZsb3dJZ25vcmVcbiAgICB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICA6IGlzQnJvd3NlciA/IHdpbmRvdyA6IGdsb2JhbDtcbiAgICB2YXIgZ2xvYmFsS2V5ID0gXCJfX0VNT1RJT05fUkVBQ1RfXCIgKyBwa2cudmVyc2lvbi5zcGxpdCgnLicpWzBdICsgXCJfX1wiO1xuXG4gICAgaWYgKGdsb2JhbENvbnRleHRbZ2xvYmFsS2V5XSkge1xuICAgICAgY29uc29sZS53YXJuKCdZb3UgYXJlIGxvYWRpbmcgQGVtb3Rpb24vcmVhY3Qgd2hlbiBpdCBpcyBhbHJlYWR5IGxvYWRlZC4gUnVubmluZyAnICsgJ211bHRpcGxlIGluc3RhbmNlcyBtYXkgY2F1c2UgcHJvYmxlbXMuIFRoaXMgY2FuIGhhcHBlbiBpZiBtdWx0aXBsZSAnICsgJ3ZlcnNpb25zIGFyZSB1c2VkLCBvciBpZiBtdWx0aXBsZSBidWlsZHMgb2YgdGhlIHNhbWUgdmVyc2lvbiBhcmUgJyArICd1c2VkLicpO1xuICAgIH1cblxuICAgIGdsb2JhbENvbnRleHRbZ2xvYmFsS2V5XSA9IHRydWU7XG4gIH1cbn1cblxuZXhwb3J0IHsgQ2xhc3NOYW1lcywgR2xvYmFsLCBqc3ggYXMgY3JlYXRlRWxlbWVudCwgY3NzLCBqc3gsIGtleWZyYW1lcyB9O1xuIiwiaW1wb3J0IGhhc2hTdHJpbmcgZnJvbSAnQGVtb3Rpb24vaGFzaCc7XG5pbXBvcnQgdW5pdGxlc3MgZnJvbSAnQGVtb3Rpb24vdW5pdGxlc3MnO1xuaW1wb3J0IG1lbW9pemUgZnJvbSAnQGVtb3Rpb24vbWVtb2l6ZSc7XG5cbnZhciBJTExFR0FMX0VTQ0FQRV9TRVFVRU5DRV9FUlJPUiA9IFwiWW91IGhhdmUgaWxsZWdhbCBlc2NhcGUgc2VxdWVuY2UgaW4geW91ciB0ZW1wbGF0ZSBsaXRlcmFsLCBtb3N0IGxpa2VseSBpbnNpZGUgY29udGVudCdzIHByb3BlcnR5IHZhbHVlLlxcbkJlY2F1c2UgeW91IHdyaXRlIHlvdXIgQ1NTIGluc2lkZSBhIEphdmFTY3JpcHQgc3RyaW5nIHlvdSBhY3R1YWxseSBoYXZlIHRvIGRvIGRvdWJsZSBlc2NhcGluZywgc28gZm9yIGV4YW1wbGUgXFxcImNvbnRlbnQ6ICdcXFxcMDBkNyc7XFxcIiBzaG91bGQgYmVjb21lIFxcXCJjb250ZW50OiAnXFxcXFxcXFwwMGQ3JztcXFwiLlxcbllvdSBjYW4gcmVhZCBtb3JlIGFib3V0IHRoaXMgaGVyZTpcXG5odHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9UZW1wbGF0ZV9saXRlcmFscyNFUzIwMThfcmV2aXNpb25fb2ZfaWxsZWdhbF9lc2NhcGVfc2VxdWVuY2VzXCI7XG52YXIgVU5ERUZJTkVEX0FTX09CSkVDVF9LRVlfRVJST1IgPSBcIllvdSBoYXZlIHBhc3NlZCBpbiBmYWxzeSB2YWx1ZSBhcyBzdHlsZSBvYmplY3QncyBrZXkgKGNhbiBoYXBwZW4gd2hlbiBpbiBleGFtcGxlIHlvdSBwYXNzIHVuZXhwb3J0ZWQgY29tcG9uZW50IGFzIGNvbXB1dGVkIGtleSkuXCI7XG52YXIgaHlwaGVuYXRlUmVnZXggPSAvW0EtWl18Xm1zL2c7XG52YXIgYW5pbWF0aW9uUmVnZXggPSAvX0VNT18oW15fXSs/KV8oW15dKj8pX0VNT18vZztcblxudmFyIGlzQ3VzdG9tUHJvcGVydHkgPSBmdW5jdGlvbiBpc0N1c3RvbVByb3BlcnR5KHByb3BlcnR5KSB7XG4gIHJldHVybiBwcm9wZXJ0eS5jaGFyQ29kZUF0KDEpID09PSA0NTtcbn07XG5cbnZhciBpc1Byb2Nlc3NhYmxlVmFsdWUgPSBmdW5jdGlvbiBpc1Byb2Nlc3NhYmxlVmFsdWUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlICE9PSAnYm9vbGVhbic7XG59O1xuXG52YXIgcHJvY2Vzc1N0eWxlTmFtZSA9IC8qICNfX1BVUkVfXyAqL21lbW9pemUoZnVuY3Rpb24gKHN0eWxlTmFtZSkge1xuICByZXR1cm4gaXNDdXN0b21Qcm9wZXJ0eShzdHlsZU5hbWUpID8gc3R5bGVOYW1lIDogc3R5bGVOYW1lLnJlcGxhY2UoaHlwaGVuYXRlUmVnZXgsICctJCYnKS50b0xvd2VyQ2FzZSgpO1xufSk7XG5cbnZhciBwcm9jZXNzU3R5bGVWYWx1ZSA9IGZ1bmN0aW9uIHByb2Nlc3NTdHlsZVZhbHVlKGtleSwgdmFsdWUpIHtcbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlICdhbmltYXRpb24nOlxuICAgIGNhc2UgJ2FuaW1hdGlvbk5hbWUnOlxuICAgICAge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKGFuaW1hdGlvblJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gsIHAxLCBwMikge1xuICAgICAgICAgICAgY3Vyc29yID0ge1xuICAgICAgICAgICAgICBuYW1lOiBwMSxcbiAgICAgICAgICAgICAgc3R5bGVzOiBwMixcbiAgICAgICAgICAgICAgbmV4dDogY3Vyc29yXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHAxO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gIH1cblxuICBpZiAodW5pdGxlc3Nba2V5XSAhPT0gMSAmJiAhaXNDdXN0b21Qcm9wZXJ0eShrZXkpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdmFsdWUgIT09IDApIHtcbiAgICByZXR1cm4gdmFsdWUgKyAncHgnO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGNvbnRlbnRWYWx1ZVBhdHRlcm4gPSAvKHZhcnxhdHRyfGNvdW50ZXJzP3x1cmx8KCgocmVwZWF0aW5nLSk/KGxpbmVhcnxyYWRpYWwpKXxjb25pYyktZ3JhZGllbnQpXFwofChuby0pPyhvcGVufGNsb3NlKS1xdW90ZS87XG4gIHZhciBjb250ZW50VmFsdWVzID0gWydub3JtYWwnLCAnbm9uZScsICdpbml0aWFsJywgJ2luaGVyaXQnLCAndW5zZXQnXTtcbiAgdmFyIG9sZFByb2Nlc3NTdHlsZVZhbHVlID0gcHJvY2Vzc1N0eWxlVmFsdWU7XG4gIHZhciBtc1BhdHRlcm4gPSAvXi1tcy0vO1xuICB2YXIgaHlwaGVuUGF0dGVybiA9IC8tKC4pL2c7XG4gIHZhciBoeXBoZW5hdGVkQ2FjaGUgPSB7fTtcblxuICBwcm9jZXNzU3R5bGVWYWx1ZSA9IGZ1bmN0aW9uIHByb2Nlc3NTdHlsZVZhbHVlKGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5ID09PSAnY29udGVudCcpIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnIHx8IGNvbnRlbnRWYWx1ZXMuaW5kZXhPZih2YWx1ZSkgPT09IC0xICYmICFjb250ZW50VmFsdWVQYXR0ZXJuLnRlc3QodmFsdWUpICYmICh2YWx1ZS5jaGFyQXQoMCkgIT09IHZhbHVlLmNoYXJBdCh2YWx1ZS5sZW5ndGggLSAxKSB8fCB2YWx1ZS5jaGFyQXQoMCkgIT09ICdcIicgJiYgdmFsdWUuY2hhckF0KDApICE9PSBcIidcIikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IHNlZW0gdG8gYmUgdXNpbmcgYSB2YWx1ZSBmb3IgJ2NvbnRlbnQnIHdpdGhvdXQgcXVvdGVzLCB0cnkgcmVwbGFjaW5nIGl0IHdpdGggYGNvbnRlbnQ6ICdcXFwiXCIgKyB2YWx1ZSArIFwiXFxcIidgXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcm9jZXNzZWQgPSBvbGRQcm9jZXNzU3R5bGVWYWx1ZShrZXksIHZhbHVlKTtcblxuICAgIGlmIChwcm9jZXNzZWQgIT09ICcnICYmICFpc0N1c3RvbVByb3BlcnR5KGtleSkgJiYga2V5LmluZGV4T2YoJy0nKSAhPT0gLTEgJiYgaHlwaGVuYXRlZENhY2hlW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgaHlwaGVuYXRlZENhY2hlW2tleV0gPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcihcIlVzaW5nIGtlYmFiLWNhc2UgZm9yIGNzcyBwcm9wZXJ0aWVzIGluIG9iamVjdHMgaXMgbm90IHN1cHBvcnRlZC4gRGlkIHlvdSBtZWFuIFwiICsga2V5LnJlcGxhY2UobXNQYXR0ZXJuLCAnbXMtJykucmVwbGFjZShoeXBoZW5QYXR0ZXJuLCBmdW5jdGlvbiAoc3RyLCBfY2hhcikge1xuICAgICAgICByZXR1cm4gX2NoYXIudG9VcHBlckNhc2UoKTtcbiAgICAgIH0pICsgXCI/XCIpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZXNzZWQ7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIGludGVycG9sYXRpb24pIHtcbiAgaWYgKGludGVycG9sYXRpb24gPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmIChpbnRlcnBvbGF0aW9uLl9fZW1vdGlvbl9zdHlsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGludGVycG9sYXRpb24udG9TdHJpbmcoKSA9PT0gJ05PX0NPTVBPTkVOVF9TRUxFQ1RPUicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IHNlbGVjdG9ycyBjYW4gb25seSBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggQGVtb3Rpb24vYmFiZWwtcGx1Z2luLicpO1xuICAgIH1cblxuICAgIHJldHVybiBpbnRlcnBvbGF0aW9uO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlb2YgaW50ZXJwb2xhdGlvbikge1xuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAge1xuICAgICAgICBpZiAoaW50ZXJwb2xhdGlvbi5hbmltID09PSAxKSB7XG4gICAgICAgICAgY3Vyc29yID0ge1xuICAgICAgICAgICAgbmFtZTogaW50ZXJwb2xhdGlvbi5uYW1lLFxuICAgICAgICAgICAgc3R5bGVzOiBpbnRlcnBvbGF0aW9uLnN0eWxlcyxcbiAgICAgICAgICAgIG5leHQ6IGN1cnNvclxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIGludGVycG9sYXRpb24ubmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnRlcnBvbGF0aW9uLnN0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIG5leHQgPSBpbnRlcnBvbGF0aW9uLm5leHQ7XG5cbiAgICAgICAgICBpZiAobmV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBub3QgdGhlIG1vc3QgZWZmaWNpZW50IHRoaW5nIGV2ZXIgYnV0IHRoaXMgaXMgYSBwcmV0dHkgcmFyZSBjYXNlXG4gICAgICAgICAgICAvLyBhbmQgdGhlcmUgd2lsbCBiZSB2ZXJ5IGZldyBpdGVyYXRpb25zIG9mIHRoaXMgZ2VuZXJhbGx5XG4gICAgICAgICAgICB3aGlsZSAobmV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGN1cnNvciA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuZXh0Lm5hbWUsXG4gICAgICAgICAgICAgICAgc3R5bGVzOiBuZXh0LnN0eWxlcyxcbiAgICAgICAgICAgICAgICBuZXh0OiBjdXJzb3JcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgbmV4dCA9IG5leHQubmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgc3R5bGVzID0gaW50ZXJwb2xhdGlvbi5zdHlsZXMgKyBcIjtcIjtcblxuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGludGVycG9sYXRpb24ubWFwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHN0eWxlcyArPSBpbnRlcnBvbGF0aW9uLm1hcDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gc3R5bGVzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNyZWF0ZVN0cmluZ0Zyb21PYmplY3QobWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIGludGVycG9sYXRpb24pO1xuICAgICAgfVxuXG4gICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAge1xuICAgICAgICBpZiAobWVyZ2VkUHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhciBwcmV2aW91c0N1cnNvciA9IGN1cnNvcjtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gaW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcyk7XG4gICAgICAgICAgY3Vyc29yID0gcHJldmlvdXNDdXJzb3I7XG4gICAgICAgICAgcmV0dXJuIGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Z1bmN0aW9ucyB0aGF0IGFyZSBpbnRlcnBvbGF0ZWQgaW4gY3NzIGNhbGxzIHdpbGwgYmUgc3RyaW5naWZpZWQuXFxuJyArICdJZiB5b3Ugd2FudCB0byBoYXZlIGEgY3NzIGNhbGwgYmFzZWQgb24gcHJvcHMsIGNyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGNzcyBjYWxsIGxpa2UgdGhpc1xcbicgKyAnbGV0IGR5bmFtaWNTdHlsZSA9IChwcm9wcykgPT4gY3NzYGNvbG9yOiAke3Byb3BzLmNvbG9yfWBcXG4nICsgJ0l0IGNhbiBiZSBjYWxsZWQgZGlyZWN0bHkgd2l0aCBwcm9wcyBvciBpbnRlcnBvbGF0ZWQgaW4gYSBzdHlsZWQgY2FsbCBsaWtlIHRoaXNcXG4nICsgXCJsZXQgU29tZUNvbXBvbmVudCA9IHN0eWxlZCgnZGl2JylgJHtkeW5hbWljU3R5bGV9YFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHZhciBtYXRjaGVkID0gW107XG4gICAgICAgIHZhciByZXBsYWNlZCA9IGludGVycG9sYXRpb24ucmVwbGFjZShhbmltYXRpb25SZWdleCwgZnVuY3Rpb24gKG1hdGNoLCBwMSwgcDIpIHtcbiAgICAgICAgICB2YXIgZmFrZVZhck5hbWUgPSBcImFuaW1hdGlvblwiICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgICAgICAgbWF0Y2hlZC5wdXNoKFwiY29uc3QgXCIgKyBmYWtlVmFyTmFtZSArIFwiID0ga2V5ZnJhbWVzYFwiICsgcDIucmVwbGFjZSgvXkBrZXlmcmFtZXMgYW5pbWF0aW9uLVxcdysvLCAnJykgKyBcImBcIik7XG4gICAgICAgICAgcmV0dXJuIFwiJHtcIiArIGZha2VWYXJOYW1lICsgXCJ9XCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaGVkLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2BrZXlmcmFtZXNgIG91dHB1dCBnb3QgaW50ZXJwb2xhdGVkIGludG8gcGxhaW4gc3RyaW5nLCBwbGVhc2Ugd3JhcCBpdCB3aXRoIGBjc3NgLlxcblxcbicgKyAnSW5zdGVhZCBvZiBkb2luZyB0aGlzOlxcblxcbicgKyBbXS5jb25jYXQobWF0Y2hlZCwgW1wiYFwiICsgcmVwbGFjZWQgKyBcImBcIl0pLmpvaW4oJ1xcbicpICsgJ1xcblxcbllvdSBzaG91bGQgd3JhcCBpdCB3aXRoIGBjc3NgIGxpa2UgdGhpczpcXG5cXG4nICsgKFwiY3NzYFwiICsgcmVwbGFjZWQgKyBcImBcIikpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICB9IC8vIGZpbmFsaXplIHN0cmluZyB2YWx1ZXMgKHJlZ3VsYXIgc3RyaW5ncyBhbmQgZnVuY3Rpb25zIGludGVycG9sYXRlZCBpbnRvIGNzcyBjYWxscylcblxuXG4gIGlmIChyZWdpc3RlcmVkID09IG51bGwpIHtcbiAgICByZXR1cm4gaW50ZXJwb2xhdGlvbjtcbiAgfVxuXG4gIHZhciBjYWNoZWQgPSByZWdpc3RlcmVkW2ludGVycG9sYXRpb25dO1xuICByZXR1cm4gY2FjaGVkICE9PSB1bmRlZmluZWQgPyBjYWNoZWQgOiBpbnRlcnBvbGF0aW9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHJpbmdGcm9tT2JqZWN0KG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBvYmopIHtcbiAgdmFyIHN0cmluZyA9ICcnO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgICAgc3RyaW5nICs9IGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIG9ialtpXSkgKyBcIjtcIjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yICh2YXIgX2tleSBpbiBvYmopIHtcbiAgICAgIHZhciB2YWx1ZSA9IG9ialtfa2V5XTtcblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKHJlZ2lzdGVyZWQgIT0gbnVsbCAmJiByZWdpc3RlcmVkW3ZhbHVlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3RyaW5nICs9IF9rZXkgKyBcIntcIiArIHJlZ2lzdGVyZWRbdmFsdWVdICsgXCJ9XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNQcm9jZXNzYWJsZVZhbHVlKHZhbHVlKSkge1xuICAgICAgICAgIHN0cmluZyArPSBwcm9jZXNzU3R5bGVOYW1lKF9rZXkpICsgXCI6XCIgKyBwcm9jZXNzU3R5bGVWYWx1ZShfa2V5LCB2YWx1ZSkgKyBcIjtcIjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKF9rZXkgPT09ICdOT19DT01QT05FTlRfU0VMRUNUT1InICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbXBvbmVudCBzZWxlY3RvcnMgY2FuIG9ubHkgYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIEBlbW90aW9uL2JhYmVsLXBsdWdpbi4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWVbMF0gPT09ICdzdHJpbmcnICYmIChyZWdpc3RlcmVkID09IG51bGwgfHwgcmVnaXN0ZXJlZFt2YWx1ZVswXV0gPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdmFsdWUubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBpZiAoaXNQcm9jZXNzYWJsZVZhbHVlKHZhbHVlW19pXSkpIHtcbiAgICAgICAgICAgICAgc3RyaW5nICs9IHByb2Nlc3NTdHlsZU5hbWUoX2tleSkgKyBcIjpcIiArIHByb2Nlc3NTdHlsZVZhbHVlKF9rZXksIHZhbHVlW19pXSkgKyBcIjtcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGludGVycG9sYXRlZCA9IGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIHZhbHVlKTtcblxuICAgICAgICAgIHN3aXRjaCAoX2tleSkge1xuICAgICAgICAgICAgY2FzZSAnYW5pbWF0aW9uJzpcbiAgICAgICAgICAgIGNhc2UgJ2FuaW1hdGlvbk5hbWUnOlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IHByb2Nlc3NTdHlsZU5hbWUoX2tleSkgKyBcIjpcIiArIGludGVycG9sYXRlZCArIFwiO1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfa2V5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihVTkRFRklORURfQVNfT0JKRUNUX0tFWV9FUlJPUik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IF9rZXkgKyBcIntcIiArIGludGVycG9sYXRlZCArIFwifVwiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxudmFyIGxhYmVsUGF0dGVybiA9IC9sYWJlbDpcXHMqKFteXFxzO1xcbntdKylcXHMqKDt8JCkvZztcbnZhciBzb3VyY2VNYXBQYXR0ZXJuO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBzb3VyY2VNYXBQYXR0ZXJuID0gL1xcL1xcKiNcXHNzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb25cXC9qc29uO1xcUytcXHMrXFwqXFwvL2c7XG59IC8vIHRoaXMgaXMgdGhlIGN1cnNvciBmb3Iga2V5ZnJhbWVzXG4vLyBrZXlmcmFtZXMgYXJlIHN0b3JlZCBvbiB0aGUgU2VyaWFsaXplZFN0eWxlcyBvYmplY3QgYXMgYSBsaW5rZWQgbGlzdFxuXG5cbnZhciBjdXJzb3I7XG52YXIgc2VyaWFsaXplU3R5bGVzID0gZnVuY3Rpb24gc2VyaWFsaXplU3R5bGVzKGFyZ3MsIHJlZ2lzdGVyZWQsIG1lcmdlZFByb3BzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXJnc1swXSA9PT0gJ29iamVjdCcgJiYgYXJnc1swXSAhPT0gbnVsbCAmJiBhcmdzWzBdLnN0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGFyZ3NbMF07XG4gIH1cblxuICB2YXIgc3RyaW5nTW9kZSA9IHRydWU7XG4gIHZhciBzdHlsZXMgPSAnJztcbiAgY3Vyc29yID0gdW5kZWZpbmVkO1xuICB2YXIgc3RyaW5ncyA9IGFyZ3NbMF07XG5cbiAgaWYgKHN0cmluZ3MgPT0gbnVsbCB8fCBzdHJpbmdzLnJhdyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RyaW5nTW9kZSA9IGZhbHNlO1xuICAgIHN0eWxlcyArPSBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBzdHJpbmdzKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBzdHJpbmdzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoSUxMRUdBTF9FU0NBUEVfU0VRVUVOQ0VfRVJST1IpO1xuICAgIH1cblxuICAgIHN0eWxlcyArPSBzdHJpbmdzWzBdO1xuICB9IC8vIHdlIHN0YXJ0IGF0IDEgc2luY2Ugd2UndmUgYWxyZWFkeSBoYW5kbGVkIHRoZSBmaXJzdCBhcmdcblxuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgIHN0eWxlcyArPSBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBhcmdzW2ldKTtcblxuICAgIGlmIChzdHJpbmdNb2RlKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBzdHJpbmdzW2ldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihJTExFR0FMX0VTQ0FQRV9TRVFVRU5DRV9FUlJPUik7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlcyArPSBzdHJpbmdzW2ldO1xuICAgIH1cbiAgfVxuXG4gIHZhciBzb3VyY2VNYXA7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBzdHlsZXMgPSBzdHlsZXMucmVwbGFjZShzb3VyY2VNYXBQYXR0ZXJuLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIHNvdXJjZU1hcCA9IG1hdGNoO1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0pO1xuICB9IC8vIHVzaW5nIGEgZ2xvYmFsIHJlZ2V4IHdpdGggLmV4ZWMgaXMgc3RhdGVmdWwgc28gbGFzdEluZGV4IGhhcyB0byBiZSByZXNldCBlYWNoIHRpbWVcblxuXG4gIGxhYmVsUGF0dGVybi5sYXN0SW5kZXggPSAwO1xuICB2YXIgaWRlbnRpZmllck5hbWUgPSAnJztcbiAgdmFyIG1hdGNoOyAvLyBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzViODA5YzJjZjI5NDk4MDBhMGY2MWZiNVxuXG4gIHdoaWxlICgobWF0Y2ggPSBsYWJlbFBhdHRlcm4uZXhlYyhzdHlsZXMpKSAhPT0gbnVsbCkge1xuICAgIGlkZW50aWZpZXJOYW1lICs9ICctJyArIC8vICRGbG93Rml4TWUgd2Uga25vdyBpdCdzIG5vdCBudWxsXG4gICAgbWF0Y2hbMV07XG4gIH1cblxuICB2YXIgbmFtZSA9IGhhc2hTdHJpbmcoc3R5bGVzKSArIGlkZW50aWZpZXJOYW1lO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gJEZsb3dGaXhNZSBTZXJpYWxpemVkU3R5bGVzIHR5cGUgZG9lc24ndCBoYXZlIHRvU3RyaW5nIHByb3BlcnR5IChhbmQgd2UgZG9uJ3Qgd2FudCB0byBhZGQgaXQpXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICAgIG1hcDogc291cmNlTWFwLFxuICAgICAgbmV4dDogY3Vyc29yLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gXCJZb3UgaGF2ZSB0cmllZCB0byBzdHJpbmdpZnkgb2JqZWN0IHJldHVybmVkIGZyb20gYGNzc2AgZnVuY3Rpb24uIEl0IGlzbid0IHN1cHBvc2VkIHRvIGJlIHVzZWQgZGlyZWN0bHkgKGUuZy4gYXMgdmFsdWUgb2YgdGhlIGBjbGFzc05hbWVgIHByb3ApLCBidXQgcmF0aGVyIGhhbmRlZCB0byBlbW90aW9uIHNvIGl0IGNhbiBoYW5kbGUgaXQgKGUuZy4gYXMgdmFsdWUgb2YgYGNzc2AgcHJvcCkuXCI7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICBuZXh0OiBjdXJzb3JcbiAgfTtcbn07XG5cbmV4cG9ydCB7IHNlcmlhbGl6ZVN0eWxlcyB9O1xuIiwiLypcblxuQmFzZWQgb2ZmIGdsYW1vcidzIFN0eWxlU2hlZXQsIHRoYW5rcyBTdW5pbCDinaTvuI9cblxuaGlnaCBwZXJmb3JtYW5jZSBTdHlsZVNoZWV0IGZvciBjc3MtaW4tanMgc3lzdGVtc1xuXG4tIHVzZXMgbXVsdGlwbGUgc3R5bGUgdGFncyBiZWhpbmQgdGhlIHNjZW5lcyBmb3IgbWlsbGlvbnMgb2YgcnVsZXNcbi0gdXNlcyBgaW5zZXJ0UnVsZWAgZm9yIGFwcGVuZGluZyBpbiBwcm9kdWN0aW9uIGZvciAqbXVjaCogZmFzdGVyIHBlcmZvcm1hbmNlXG5cbi8vIHVzYWdlXG5cbmltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tICdAZW1vdGlvbi9zaGVldCdcblxubGV0IHN0eWxlU2hlZXQgPSBuZXcgU3R5bGVTaGVldCh7IGtleTogJycsIGNvbnRhaW5lcjogZG9jdW1lbnQuaGVhZCB9KVxuXG5zdHlsZVNoZWV0Lmluc2VydCgnI2JveCB7IGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgfScpXG4tIGFwcGVuZHMgYSBjc3MgcnVsZSBpbnRvIHRoZSBzdHlsZXNoZWV0XG5cbnN0eWxlU2hlZXQuZmx1c2goKVxuLSBlbXB0aWVzIHRoZSBzdHlsZXNoZWV0IG9mIGFsbCBpdHMgY29udGVudHNcblxuKi9cbi8vICRGbG93Rml4TWVcbmZ1bmN0aW9uIHNoZWV0Rm9yVGFnKHRhZykge1xuICBpZiAodGFnLnNoZWV0KSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHJldHVybiB0YWcuc2hlZXQ7XG4gIH0gLy8gdGhpcyB3ZWlyZG5lc3MgYnJvdWdodCB0byB5b3UgYnkgZmlyZWZveFxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRvY3VtZW50LnN0eWxlU2hlZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldLm93bmVyTm9kZSA9PT0gdGFnKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICByZXR1cm4gZG9jdW1lbnQuc3R5bGVTaGVldHNbaV07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB0YWcuc2V0QXR0cmlidXRlKCdkYXRhLWVtb3Rpb24nLCBvcHRpb25zLmtleSk7XG5cbiAgaWYgKG9wdGlvbnMubm9uY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHRhZy5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgb3B0aW9ucy5ub25jZSk7XG4gIH1cblxuICB0YWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpKTtcbiAgdGFnLnNldEF0dHJpYnV0ZSgnZGF0YS1zJywgJycpO1xuICByZXR1cm4gdGFnO1xufVxuXG52YXIgU3R5bGVTaGVldCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0eWxlU2hlZXQob3B0aW9ucykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLl9pbnNlcnRUYWcgPSBmdW5jdGlvbiAodGFnKSB7XG4gICAgICB2YXIgYmVmb3JlO1xuXG4gICAgICBpZiAoX3RoaXMudGFncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaWYgKF90aGlzLmluc2VydGlvblBvaW50KSB7XG4gICAgICAgICAgYmVmb3JlID0gX3RoaXMuaW5zZXJ0aW9uUG9pbnQubmV4dFNpYmxpbmc7XG4gICAgICAgIH0gZWxzZSBpZiAoX3RoaXMucHJlcGVuZCkge1xuICAgICAgICAgIGJlZm9yZSA9IF90aGlzLmNvbnRhaW5lci5maXJzdENoaWxkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJlZm9yZSA9IF90aGlzLmJlZm9yZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmVmb3JlID0gX3RoaXMudGFnc1tfdGhpcy50YWdzLmxlbmd0aCAtIDFdLm5leHRTaWJsaW5nO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5jb250YWluZXIuaW5zZXJ0QmVmb3JlKHRhZywgYmVmb3JlKTtcblxuICAgICAgX3RoaXMudGFncy5wdXNoKHRhZyk7XG4gICAgfTtcblxuICAgIHRoaXMuaXNTcGVlZHkgPSBvcHRpb25zLnNwZWVkeSA9PT0gdW5kZWZpbmVkID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA6IG9wdGlvbnMuc3BlZWR5O1xuICAgIHRoaXMudGFncyA9IFtdO1xuICAgIHRoaXMuY3RyID0gMDtcbiAgICB0aGlzLm5vbmNlID0gb3B0aW9ucy5ub25jZTsgLy8ga2V5IGlzIHRoZSB2YWx1ZSBvZiB0aGUgZGF0YS1lbW90aW9uIGF0dHJpYnV0ZSwgaXQncyB1c2VkIHRvIGlkZW50aWZ5IGRpZmZlcmVudCBzaGVldHNcblxuICAgIHRoaXMua2V5ID0gb3B0aW9ucy5rZXk7XG4gICAgdGhpcy5jb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lcjtcbiAgICB0aGlzLnByZXBlbmQgPSBvcHRpb25zLnByZXBlbmQ7XG4gICAgdGhpcy5pbnNlcnRpb25Qb2ludCA9IG9wdGlvbnMuaW5zZXJ0aW9uUG9pbnQ7XG4gICAgdGhpcy5iZWZvcmUgPSBudWxsO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFN0eWxlU2hlZXQucHJvdG90eXBlO1xuXG4gIF9wcm90by5oeWRyYXRlID0gZnVuY3Rpb24gaHlkcmF0ZShub2Rlcykge1xuICAgIG5vZGVzLmZvckVhY2godGhpcy5faW5zZXJ0VGFnKTtcbiAgfTtcblxuICBfcHJvdG8uaW5zZXJ0ID0gZnVuY3Rpb24gaW5zZXJ0KHJ1bGUpIHtcbiAgICAvLyB0aGUgbWF4IGxlbmd0aCBpcyBob3cgbWFueSBydWxlcyB3ZSBoYXZlIHBlciBzdHlsZSB0YWcsIGl0J3MgNjUwMDAgaW4gc3BlZWR5IG1vZGVcbiAgICAvLyBpdCdzIDEgaW4gZGV2IGJlY2F1c2Ugd2UgaW5zZXJ0IHNvdXJjZSBtYXBzIHRoYXQgbWFwIGEgc2luZ2xlIHJ1bGUgdG8gYSBsb2NhdGlvblxuICAgIC8vIGFuZCB5b3UgY2FuIG9ubHkgaGF2ZSBvbmUgc291cmNlIG1hcCBwZXIgc3R5bGUgdGFnXG4gICAgaWYgKHRoaXMuY3RyICUgKHRoaXMuaXNTcGVlZHkgPyA2NTAwMCA6IDEpID09PSAwKSB7XG4gICAgICB0aGlzLl9pbnNlcnRUYWcoY3JlYXRlU3R5bGVFbGVtZW50KHRoaXMpKTtcbiAgICB9XG5cbiAgICB2YXIgdGFnID0gdGhpcy50YWdzW3RoaXMudGFncy5sZW5ndGggLSAxXTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgaXNJbXBvcnRSdWxlID0gcnVsZS5jaGFyQ29kZUF0KDApID09PSA2NCAmJiBydWxlLmNoYXJDb2RlQXQoMSkgPT09IDEwNTtcblxuICAgICAgaWYgKGlzSW1wb3J0UnVsZSAmJiB0aGlzLl9hbHJlYWR5SW5zZXJ0ZWRPcmRlckluc2Vuc2l0aXZlUnVsZSkge1xuICAgICAgICAvLyB0aGlzIHdvdWxkIG9ubHkgY2F1c2UgcHJvYmxlbSBpbiBzcGVlZHkgbW9kZVxuICAgICAgICAvLyBidXQgd2UgZG9uJ3Qgd2FudCBlbmFibGluZyBzcGVlZHkgdG8gYWZmZWN0IHRoZSBvYnNlcnZhYmxlIGJlaGF2aW9yXG4gICAgICAgIC8vIHNvIHdlIHJlcG9ydCB0aGlzIGVycm9yIGF0IGFsbCB0aW1lc1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiWW91J3JlIGF0dGVtcHRpbmcgdG8gaW5zZXJ0IHRoZSBmb2xsb3dpbmcgcnVsZTpcXG5cIiArIHJ1bGUgKyAnXFxuXFxuYEBpbXBvcnRgIHJ1bGVzIG11c3QgYmUgYmVmb3JlIGFsbCBvdGhlciB0eXBlcyBvZiBydWxlcyBpbiBhIHN0eWxlc2hlZXQgYnV0IG90aGVyIHJ1bGVzIGhhdmUgYWxyZWFkeSBiZWVuIGluc2VydGVkLiBQbGVhc2UgZW5zdXJlIHRoYXQgYEBpbXBvcnRgIHJ1bGVzIGFyZSBiZWZvcmUgYWxsIG90aGVyIHJ1bGVzLicpO1xuICAgICAgfVxuICAgICAgdGhpcy5fYWxyZWFkeUluc2VydGVkT3JkZXJJbnNlbnNpdGl2ZVJ1bGUgPSB0aGlzLl9hbHJlYWR5SW5zZXJ0ZWRPcmRlckluc2Vuc2l0aXZlUnVsZSB8fCAhaXNJbXBvcnRSdWxlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzU3BlZWR5KSB7XG4gICAgICB2YXIgc2hlZXQgPSBzaGVldEZvclRhZyh0YWcpO1xuXG4gICAgICB0cnkge1xuICAgICAgICAvLyB0aGlzIGlzIHRoZSB1bHRyYWZhc3QgdmVyc2lvbiwgd29ya3MgYWNyb3NzIGJyb3dzZXJzXG4gICAgICAgIC8vIHRoZSBiaWcgZHJhd2JhY2sgaXMgdGhhdCB0aGUgY3NzIHdvbid0IGJlIGVkaXRhYmxlIGluIGRldnRvb2xzXG4gICAgICAgIHNoZWV0Lmluc2VydFJ1bGUocnVsZSwgc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIS86KC1tb3otcGxhY2Vob2xkZXJ8LW1vei1mb2N1cy1pbm5lcnwtbW96LWZvY3VzcmluZ3wtbXMtaW5wdXQtcGxhY2Vob2xkZXJ8LW1vei1yZWFkLXdyaXRlfC1tb3otcmVhZC1vbmx5fC1tcy1jbGVhcil7Ly50ZXN0KHJ1bGUpKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZXJlIHdhcyBhIHByb2JsZW0gaW5zZXJ0aW5nIHRoZSBmb2xsb3dpbmcgcnVsZTogXFxcIlwiICsgcnVsZSArIFwiXFxcIlwiLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0YWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocnVsZSkpO1xuICAgIH1cblxuICAgIHRoaXMuY3RyKys7XG4gIH07XG5cbiAgX3Byb3RvLmZsdXNoID0gZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHRoaXMudGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgIHJldHVybiB0YWcucGFyZW50Tm9kZSAmJiB0YWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YWcpO1xuICAgIH0pO1xuICAgIHRoaXMudGFncyA9IFtdO1xuICAgIHRoaXMuY3RyID0gMDtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aGlzLl9hbHJlYWR5SW5zZXJ0ZWRPcmRlckluc2Vuc2l0aXZlUnVsZSA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gU3R5bGVTaGVldDtcbn0oKTtcblxuZXhwb3J0IHsgU3R5bGVTaGVldCB9O1xuIiwidmFyIHVuaXRsZXNzS2V5cyA9IHtcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDEsXG4gIGJvcmRlckltYWdlT3V0c2V0OiAxLFxuICBib3JkZXJJbWFnZVNsaWNlOiAxLFxuICBib3JkZXJJbWFnZVdpZHRoOiAxLFxuICBib3hGbGV4OiAxLFxuICBib3hGbGV4R3JvdXA6IDEsXG4gIGJveE9yZGluYWxHcm91cDogMSxcbiAgY29sdW1uQ291bnQ6IDEsXG4gIGNvbHVtbnM6IDEsXG4gIGZsZXg6IDEsXG4gIGZsZXhHcm93OiAxLFxuICBmbGV4UG9zaXRpdmU6IDEsXG4gIGZsZXhTaHJpbms6IDEsXG4gIGZsZXhOZWdhdGl2ZTogMSxcbiAgZmxleE9yZGVyOiAxLFxuICBncmlkUm93OiAxLFxuICBncmlkUm93RW5kOiAxLFxuICBncmlkUm93U3BhbjogMSxcbiAgZ3JpZFJvd1N0YXJ0OiAxLFxuICBncmlkQ29sdW1uOiAxLFxuICBncmlkQ29sdW1uRW5kOiAxLFxuICBncmlkQ29sdW1uU3BhbjogMSxcbiAgZ3JpZENvbHVtblN0YXJ0OiAxLFxuICBtc0dyaWRSb3c6IDEsXG4gIG1zR3JpZFJvd1NwYW46IDEsXG4gIG1zR3JpZENvbHVtbjogMSxcbiAgbXNHcmlkQ29sdW1uU3BhbjogMSxcbiAgZm9udFdlaWdodDogMSxcbiAgbGluZUhlaWdodDogMSxcbiAgb3BhY2l0eTogMSxcbiAgb3JkZXI6IDEsXG4gIG9ycGhhbnM6IDEsXG4gIHRhYlNpemU6IDEsXG4gIHdpZG93czogMSxcbiAgekluZGV4OiAxLFxuICB6b29tOiAxLFxuICBXZWJraXRMaW5lQ2xhbXA6IDEsXG4gIC8vIFNWRy1yZWxhdGVkIHByb3BlcnRpZXNcbiAgZmlsbE9wYWNpdHk6IDEsXG4gIGZsb29kT3BhY2l0eTogMSxcbiAgc3RvcE9wYWNpdHk6IDEsXG4gIHN0cm9rZURhc2hhcnJheTogMSxcbiAgc3Ryb2tlRGFzaG9mZnNldDogMSxcbiAgc3Ryb2tlTWl0ZXJsaW1pdDogMSxcbiAgc3Ryb2tlT3BhY2l0eTogMSxcbiAgc3Ryb2tlV2lkdGg6IDFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVuaXRsZXNzS2V5cztcbiIsInZhciBpc0Jyb3dzZXIgPSBcIm9iamVjdFwiICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIGdldFJlZ2lzdGVyZWRTdHlsZXMocmVnaXN0ZXJlZCwgcmVnaXN0ZXJlZFN0eWxlcywgY2xhc3NOYW1lcykge1xuICB2YXIgcmF3Q2xhc3NOYW1lID0gJyc7XG4gIGNsYXNzTmFtZXMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICBpZiAocmVnaXN0ZXJlZFtjbGFzc05hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlZ2lzdGVyZWRTdHlsZXMucHVzaChyZWdpc3RlcmVkW2NsYXNzTmFtZV0gKyBcIjtcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJhd0NsYXNzTmFtZSArPSBjbGFzc05hbWUgKyBcIiBcIjtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmF3Q2xhc3NOYW1lO1xufVxudmFyIHJlZ2lzdGVyU3R5bGVzID0gZnVuY3Rpb24gcmVnaXN0ZXJTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGlzU3RyaW5nVGFnKSB7XG4gIHZhciBjbGFzc05hbWUgPSBjYWNoZS5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcblxuICBpZiAoIC8vIHdlIG9ubHkgbmVlZCB0byBhZGQgdGhlIHN0eWxlcyB0byB0aGUgcmVnaXN0ZXJlZCBjYWNoZSBpZiB0aGVcbiAgLy8gY2xhc3MgbmFtZSBjb3VsZCBiZSB1c2VkIGZ1cnRoZXIgZG93blxuICAvLyB0aGUgdHJlZSBidXQgaWYgaXQncyBhIHN0cmluZyB0YWcsIHdlIGtub3cgaXQgd29uJ3RcbiAgLy8gc28gd2UgZG9uJ3QgaGF2ZSB0byBhZGQgaXQgdG8gcmVnaXN0ZXJlZCBjYWNoZS5cbiAgLy8gdGhpcyBpbXByb3ZlcyBtZW1vcnkgdXNhZ2Ugc2luY2Ugd2UgY2FuIGF2b2lkIHN0b3JpbmcgdGhlIHdob2xlIHN0eWxlIHN0cmluZ1xuICAoaXNTdHJpbmdUYWcgPT09IGZhbHNlIHx8IC8vIHdlIG5lZWQgdG8gYWx3YXlzIHN0b3JlIGl0IGlmIHdlJ3JlIGluIGNvbXBhdCBtb2RlIGFuZFxuICAvLyBpbiBub2RlIHNpbmNlIGVtb3Rpb24tc2VydmVyIHJlbGllcyBvbiB3aGV0aGVyIGEgc3R5bGUgaXMgaW5cbiAgLy8gdGhlIHJlZ2lzdGVyZWQgY2FjaGUgdG8ga25vdyB3aGV0aGVyIGEgc3R5bGUgaXMgZ2xvYmFsIG9yIG5vdFxuICAvLyBhbHNvLCBub3RlIHRoYXQgdGhpcyBjaGVjayB3aWxsIGJlIGRlYWQgY29kZSBlbGltaW5hdGVkIGluIHRoZSBicm93c2VyXG4gIGlzQnJvd3NlciA9PT0gZmFsc2UgKSAmJiBjYWNoZS5yZWdpc3RlcmVkW2NsYXNzTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgIGNhY2hlLnJlZ2lzdGVyZWRbY2xhc3NOYW1lXSA9IHNlcmlhbGl6ZWQuc3R5bGVzO1xuICB9XG59O1xudmFyIGluc2VydFN0eWxlcyA9IGZ1bmN0aW9uIGluc2VydFN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZCwgaXNTdHJpbmdUYWcpIHtcbiAgcmVnaXN0ZXJTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGlzU3RyaW5nVGFnKTtcbiAgdmFyIGNsYXNzTmFtZSA9IGNhY2hlLmtleSArIFwiLVwiICsgc2VyaWFsaXplZC5uYW1lO1xuXG4gIGlmIChjYWNoZS5pbnNlcnRlZFtzZXJpYWxpemVkLm5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgY3VycmVudCA9IHNlcmlhbGl6ZWQ7XG5cbiAgICBkbyB7XG4gICAgICB2YXIgbWF5YmVTdHlsZXMgPSBjYWNoZS5pbnNlcnQoc2VyaWFsaXplZCA9PT0gY3VycmVudCA/IFwiLlwiICsgY2xhc3NOYW1lIDogJycsIGN1cnJlbnQsIGNhY2hlLnNoZWV0LCB0cnVlKTtcblxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9IHdoaWxlIChjdXJyZW50ICE9PSB1bmRlZmluZWQpO1xuICB9XG59O1xuXG5leHBvcnQgeyBnZXRSZWdpc3RlcmVkU3R5bGVzLCBpbnNlcnRTdHlsZXMsIHJlZ2lzdGVyU3R5bGVzIH07XG4iLCJ2YXIgd2Vha01lbW9pemUgPSBmdW5jdGlvbiB3ZWFrTWVtb2l6ZShmdW5jKSB7XG4gIC8vICRGbG93Rml4TWUgZmxvdyBkb2Vzbid0IGluY2x1ZGUgYWxsIG5vbi1wcmltaXRpdmUgdHlwZXMgYXMgYWxsb3dlZCBmb3Igd2Vha21hcHNcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoY2FjaGUuaGFzKGFyZykpIHtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoYXJnKTtcbiAgICB9XG5cbiAgICB2YXIgcmV0ID0gZnVuYyhhcmcpO1xuICAgIGNhY2hlLnNldChhcmcsIHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdlYWtNZW1vaXplO1xuIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSBcIndlYjNtb2RhbFwiO1xyXG5pbXBvcnQge0NsaXBMb2FkZXJ9IGZyb20gXCJyZWFjdC1zcGlubmVyc1wiXHJcblxyXG5pbXBvcnQgeyBtYXJrZXRwbGFjZUFkZHJlc3MgfSBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgTkZUTWFya2V0cGxhY2UgZnJvbSBcIi4uLy4uL2FydGlmYWN0cy9jb250cmFjdHMvTkZUTWFya2V0cGxhY2Uuc29sL05GVE1hcmtldHBsYWNlLmpzb25cIjtcclxuXHJcbmNvbnN0IE5GVFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW25mdHMsIHNldE5mdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZE5mdCwgc2V0U2VsZWN0ZWROZnRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHRva2VuSWQgPSByb3V0ZXIucXVlcnkudG9rZW5JZDtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IGxvYWRORlRzKCksIFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4gdXBkYXRlU2VsZWN0ZWRORlQoKSwgW25mdHNdKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gbG9hZE5GVHMoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLkpzb25ScGNQcm92aWRlcihcclxuICAgICAgICBcImh0dHBzOi8vcnBjLW11bWJhaS5tYXRpYy50b2RheVwiXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcclxuICAgICAgICBtYXJrZXRwbGFjZUFkZHJlc3MsXHJcbiAgICAgICAgTkZUTWFya2V0cGxhY2UuYWJpLFxyXG4gICAgICAgIHByb3ZpZGVyXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjb250cmFjdC5mZXRjaE1hcmtldEl0ZW1zKCk7XHJcblxyXG4gICAgICBjb25zdCBpdGVtcyA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICAgIGRhdGEubWFwKGFzeW5jIChpKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB0b2tlblVyaSA9IGF3YWl0IGNvbnRyYWN0LnRva2VuVVJJKGkudG9rZW5JZCk7XHJcbiAgICAgICAgICBjb25zdCBtZXRhID0gYXdhaXQgYXhpb3MuZ2V0KHRva2VuVXJpKTtcclxuICAgICAgICAgIGxldCBwcmljZSA9IGV0aGVycy51dGlscy5mb3JtYXRVbml0cyhpLnByaWNlLnRvU3RyaW5nKCksIFwiZXRoZXJcIik7XHJcbiAgICAgICAgICBsZXQgaXRlbSA9IHtcclxuICAgICAgICAgICAgcHJpY2UsXHJcbiAgICAgICAgICAgIHRva2VuSWQ6IGkudG9rZW5JZC50b051bWJlcigpLFxyXG4gICAgICAgICAgICBzZWxsZXI6IGkuc2VsbGVyLFxyXG4gICAgICAgICAgICBvd25lcjogaS5vd25lcixcclxuICAgICAgICAgICAgaW1hZ2U6IG1ldGEuZGF0YS5pbWFnZSxcclxuICAgICAgICAgICAgbmFtZTogbWV0YS5kYXRhLm5hbWUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBtZXRhLmRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHNldE5mdHMoaXRlbXMpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiTG9hZCBOZnQgZXJyb3I6IFwiLCBlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdXBkYXRlU2VsZWN0ZWRORlQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBuZnRzLm1hcCgobmZ0KSA9PiB7XHJcbiAgICAgIGlmIChOdW1iZXIodG9rZW5JZCkgPT09IG5mdC50b2tlbklkKSB7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWROZnQobmZ0KTtcclxuICAgICAgICBzZXRJc0xvYWRlZCh0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5GVCBOb3QgRm91bmRcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGJ1eU5mdChuZnQpIHtcclxuICAgIC8qIG5lZWRzIHRoZSB1c2VyIHRvIHNpZ24gdGhlIHRyYW5zYWN0aW9uLCBzbyB3aWxsIHVzZSBXZWIzUHJvdmlkZXIgYW5kIHNpZ24gaXQgKi9cclxuICAgIFxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgd2ViM01vZGFsID0gbmV3IFdlYjNNb2RhbCgpO1xyXG4gICAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgd2ViM01vZGFsLmNvbm5lY3QoKTtcclxuICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoY29ubmVjdGlvbik7XHJcbiAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG4gICAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXHJcbiAgICAgICAgbWFya2V0cGxhY2VBZGRyZXNzLFxyXG4gICAgICAgIE5GVE1hcmtldHBsYWNlLmFiaSxcclxuICAgICAgICBzaWduZXJcclxuICAgICAgKTtcclxuICAgICAgLyogdXNlciB3aWxsIGJlIHByb21wdGVkIHRvIHBheSB0aGUgYXNraW5nIHByb2NlcyB0byBjb21wbGV0ZSB0aGUgdHJhbnNhY3Rpb24gKi9cclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHByaWNlID0gZXRoZXJzLnV0aWxzLnBhcnNlVW5pdHMobmZ0LnByaWNlLnRvU3RyaW5nKCksIFwiZXRoZXJcIik7XHJcbiAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgY29udHJhY3QuY3JlYXRlTWFya2V0U2FsZShuZnQudG9rZW5JZCwge1xyXG4gICAgICAgIHZhbHVlOiBwcmljZSxcclxuICAgICAgfSk7XHJcbiAgICAgIGF3YWl0IHRyYW5zYWN0aW9uLndhaXQoKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImJ1eSBFcnJvcjogXCIsIGVycilcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtpc0xvYWRlZCA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBiZy1ncmF5LTkwMCBpdGVtcy1jZW50ZXIgdy1zY3JlZW4gbXgtMjBcIj5cclxuICAgICAgICAgICAgPGlmcmFtZVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQteGwgb2JqZWN0LWNvdmVyIHctMy82IGgtOTYgbXgtMzYgbXQtMTJcIlxyXG4gICAgICAgICAgICAgIHNyYz17c2VsZWN0ZWROZnQuaW1hZ2V9XHJcbiAgICAgICAgICAgID48L2lmcmFtZT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCB3LWZ1bGwgbXktMTAgcHgtMzJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTYgdy0zLzQgbS01XCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWROZnQubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtd2hpdGUgbXktMTBcIj5cclxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkTmZ0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdy0xLzQgYmctZyBtLTVcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtM3hsICBteS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZE5mdC5wcmljZX0gTUFUSUNcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTMgdGV4dC13aGl0ZSB0ZXh0LW1kIGJnLXBpbmstNjAwIHJvdW5kZWQtbWQgcHgtMjAgcHktNCBcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGJ1eU5mdChzZWxlY3RlZE5mdClcclxuICAgICAgICAgICAgICAgICAgICAgIH1jYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJ1eSBlcnJvcjpcIiwgZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQnV5IE5vd1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q2xpcExvYWRlciBsb2FkaW5nPjwvQ2xpcExvYWRlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTkZUUGFnZTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbi8qKlxuICogQ29weXJpZ2h0IDIwMTUsIFlhaG9vISBJbmMuXG4gKiBDb3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuIFNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4gKi9cbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgY29udGV4dFR5cGU6IHRydWUsXG4gIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogdHJ1ZSxcbiAgbWl4aW5zOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgbmFtZTogdHJ1ZSxcbiAgbGVuZ3RoOiB0cnVlLFxuICBwcm90b3R5cGU6IHRydWUsXG4gIGNhbGxlcjogdHJ1ZSxcbiAgY2FsbGVlOiB0cnVlLFxuICBhcmd1bWVudHM6IHRydWUsXG4gIGFyaXR5OiB0cnVlXG59O1xudmFyIEZPUldBUkRfUkVGX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIHJlbmRlcjogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlXG59O1xudmFyIE1FTU9fU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgY29tcGFyZTogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIFRZUEVfU1RBVElDUyA9IHt9O1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuRm9yd2FyZFJlZl0gPSBGT1JXQVJEX1JFRl9TVEFUSUNTO1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuTWVtb10gPSBNRU1PX1NUQVRJQ1M7XG5cbmZ1bmN0aW9uIGdldFN0YXRpY3MoY29tcG9uZW50KSB7XG4gIC8vIFJlYWN0IHYxNi4xMSBhbmQgYmVsb3dcbiAgaWYgKHJlYWN0SXMuaXNNZW1vKGNvbXBvbmVudCkpIHtcbiAgICByZXR1cm4gTUVNT19TVEFUSUNTO1xuICB9IC8vIFJlYWN0IHYxNi4xMiBhbmQgYWJvdmVcblxuXG4gIHJldHVybiBUWVBFX1NUQVRJQ1NbY29tcG9uZW50WyckJHR5cGVvZiddXSB8fCBSRUFDVF9TVEFUSUNTO1xufVxuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBvYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuZnVuY3Rpb24gaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQsIGJsYWNrbGlzdCkge1xuICBpZiAodHlwZW9mIHNvdXJjZUNvbXBvbmVudCAhPT0gJ3N0cmluZycpIHtcbiAgICAvLyBkb24ndCBob2lzdCBvdmVyIHN0cmluZyAoaHRtbCkgY29tcG9uZW50c1xuICAgIGlmIChvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgIHZhciBpbmhlcml0ZWRDb21wb25lbnQgPSBnZXRQcm90b3R5cGVPZihzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgICBpZiAoaW5oZXJpdGVkQ29tcG9uZW50ICYmIGluaGVyaXRlZENvbXBvbmVudCAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgaW5oZXJpdGVkQ29tcG9uZW50LCBibGFja2xpc3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgaWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAga2V5cyA9IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2VDb21wb25lbnQpKTtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0U3RhdGljcyA9IGdldFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50KTtcbiAgICB2YXIgc291cmNlU3RhdGljcyA9IGdldFN0YXRpY3Moc291cmNlQ29tcG9uZW50KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmICghS05PV05fU1RBVElDU1trZXldICYmICEoYmxhY2tsaXN0ICYmIGJsYWNrbGlzdFtrZXldKSAmJiAhKHNvdXJjZVN0YXRpY3MgJiYgc291cmNlU3RhdGljc1trZXldKSAmJiAhKHRhcmdldFN0YXRpY3MgJiYgdGFyZ2V0U3RhdGljc1trZXldKSkge1xuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2VDb21wb25lbnQsIGtleSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBBdm9pZCBmYWlsdXJlcyBmcm9tIHJlYWQtb25seSBwcm9wZXJ0aWVzXG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaG9pc3ROb25SZWFjdFN0YXRpY3M7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSAvLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG5cbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19tYWtlVGVtcGxhdGVPYmplY3QgPSAodGhpcyAmJiB0aGlzLl9fbWFrZVRlbXBsYXRlT2JqZWN0KSB8fCBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICAgIHJldHVybiBjb29rZWQ7XG59O1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqIEBqc3gganN4ICovXG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciByZWFjdF8xID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0XCIpO1xudmFyIGhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIik7XG52YXIgbG9uZyA9IHJlYWN0XzEua2V5ZnJhbWVzKHRlbXBsYXRlT2JqZWN0XzEgfHwgKHRlbXBsYXRlT2JqZWN0XzEgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gIDAlIHtsZWZ0OiAtMzUlO3JpZ2h0OiAxMDAlfVxcbiAgNjAlIHtsZWZ0OiAxMDAlO3JpZ2h0OiAtOTAlfVxcbiAgMTAwJSB7bGVmdDogMTAwJTtyaWdodDogLTkwJX1cXG5cIl0sIFtcIlxcbiAgMCUge2xlZnQ6IC0zNSU7cmlnaHQ6IDEwMCV9XFxuICA2MCUge2xlZnQ6IDEwMCU7cmlnaHQ6IC05MCV9XFxuICAxMDAlIHtsZWZ0OiAxMDAlO3JpZ2h0OiAtOTAlfVxcblwiXSkpKTtcbnZhciBzaG9ydCA9IHJlYWN0XzEua2V5ZnJhbWVzKHRlbXBsYXRlT2JqZWN0XzIgfHwgKHRlbXBsYXRlT2JqZWN0XzIgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gIDAlIHtsZWZ0OiAtMjAwJTtyaWdodDogMTAwJX1cXG4gIDYwJSB7bGVmdDogMTA3JTtyaWdodDogLTglfVxcbiAgMTAwJSB7bGVmdDogMTA3JTtyaWdodDogLTglfVxcblwiXSwgW1wiXFxuICAwJSB7bGVmdDogLTIwMCU7cmlnaHQ6IDEwMCV9XFxuICA2MCUge2xlZnQ6IDEwNyU7cmlnaHQ6IC04JX1cXG4gIDEwMCUge2xlZnQ6IDEwNyU7cmlnaHQ6IC04JX1cXG5cIl0pKSk7XG52YXIgTG9hZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMb2FkZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTG9hZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3R5bGUgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsIGhlaWdodCA9IF9hLmhlaWdodCwgY29sb3IgPSBfYS5jb2xvciwgc3BlZWRNdWx0aXBsaWVyID0gX2Euc3BlZWRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzMgfHwgKHRlbXBsYXRlT2JqZWN0XzMgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiwgXCI7XFxuICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgICAgd2lsbC1jaGFuZ2U6IGxlZnQsIHJpZ2h0O1xcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiIFwiLCBcInNcXG4gICAgICAgIFwiLCBcIlxcbiAgICAgICAgXCIsIFwiXFxuICAgICAgICBpbmZpbml0ZTtcXG4gICAgXCJdLCBbXCJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiwgXCI7XFxuICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgICAgd2lsbC1jaGFuZ2U6IGxlZnQsIHJpZ2h0O1xcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiIFwiLCBcInNcXG4gICAgICAgIFwiLCBcIlxcbiAgICAgICAgXCIsXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIGluZmluaXRlO1xcbiAgICBcIl0pKSwgaGVscGVyc18xLmNzc1ZhbHVlKGhlaWdodCksIGNvbG9yLCBpID09PSAxID8gbG9uZyA6IHNob3J0LCAyLjEgLyBzcGVlZE11bHRpcGxpZXIsIGkgPT09IDIgPyAxLjE1IC8gc3BlZWRNdWx0aXBsaWVyICsgXCJzXCIgOiBcIlwiLCBpID09PSAxXG4gICAgICAgICAgICAgICAgPyBcImN1YmljLWJlemllcigwLjY1LCAwLjgxNSwgMC43MzUsIDAuMzk1KVwiXG4gICAgICAgICAgICAgICAgOiBcImN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSlcIik7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLndyYXBwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcywgd2lkdGggPSBfYS53aWR0aCwgaGVpZ2h0ID0gX2EuaGVpZ2h0LCBjb2xvciA9IF9hLmNvbG9yO1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzQgfHwgKHRlbXBsYXRlT2JqZWN0XzQgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IFwiLCBcIjtcXG4gICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgICBcIl0sIFtcIlxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogXCIsIFwiO1xcbiAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxuICAgIFwiXSkpLCBoZWxwZXJzXzEuY3NzVmFsdWUod2lkdGgpLCBoZWxwZXJzXzEuY3NzVmFsdWUoaGVpZ2h0KSwgaGVscGVyc18xLmNhbGN1bGF0ZVJnYmEoY29sb3IsIDAuMikpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIExvYWRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBsb2FkaW5nID0gX2EubG9hZGluZywgY3NzID0gX2EuY3NzO1xuICAgICAgICByZXR1cm4gbG9hZGluZyA/IChyZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IFt0aGlzLndyYXBwZXIoKSwgY3NzXSB9LFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDEpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDIpIH0pKSkgOiBudWxsO1xuICAgIH07XG4gICAgTG9hZGVyLmRlZmF1bHRQcm9wcyA9IGhlbHBlcnNfMS5oZWlnaHRXaWR0aERlZmF1bHRzKDQsIDEwMCk7XG4gICAgcmV0dXJuIExvYWRlcjtcbn0oUmVhY3QuUHVyZUNvbXBvbmVudCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gTG9hZGVyO1xudmFyIHRlbXBsYXRlT2JqZWN0XzEsIHRlbXBsYXRlT2JqZWN0XzIsIHRlbXBsYXRlT2JqZWN0XzMsIHRlbXBsYXRlT2JqZWN0XzQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX21ha2VUZW1wbGF0ZU9iamVjdCA9ICh0aGlzICYmIHRoaXMuX19tYWtlVGVtcGxhdGVPYmplY3QpIHx8IGZ1bmN0aW9uIChjb29rZWQsIHJhdykge1xuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gICAgcmV0dXJuIGNvb2tlZDtcbn07XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKiogQGpzeCBqc3ggKi9cbnZhciBSZWFjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3RcIik7XG52YXIgaGVscGVyc18xID0gcmVxdWlyZShcIi4vaGVscGVyc1wiKTtcbnZhciBiZWF0ID0gcmVhY3RfMS5rZXlmcmFtZXModGVtcGxhdGVPYmplY3RfMSB8fCAodGVtcGxhdGVPYmplY3RfMSA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgNTAlIHt0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO29wYWNpdHk6IDAuMn1cXG4gIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMSk7b3BhY2l0eTogMX1cXG5cIl0sIFtcIlxcbiAgNTAlIHt0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO29wYWNpdHk6IDAuMn1cXG4gIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMSk7b3BhY2l0eTogMX1cXG5cIl0pKSk7XG52YXIgTG9hZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMb2FkZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTG9hZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3R5bGUgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsIGNvbG9yID0gX2EuY29sb3IsIHNpemUgPSBfYS5zaXplLCBtYXJnaW4gPSBfYS5tYXJnaW4sIHNwZWVkTXVsdGlwbGllciA9IF9hLnNwZWVkTXVsdGlwbGllcjtcbiAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmNzcyh0ZW1wbGF0ZU9iamVjdF8yIHx8ICh0ZW1wbGF0ZU9iamVjdF8yID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IFwiLCBcIjtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIG1hcmdpbjogXCIsIFwiO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyBcIiwgXCJcXG4gICAgICAgIGluZmluaXRlIGxpbmVhcjtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICBcIl0sIFtcIlxcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiwgXCI7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBtYXJnaW46IFwiLCBcIjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiIFwiLCBcInMgXCIsIFwiXFxuICAgICAgICBpbmZpbml0ZSBsaW5lYXI7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gICAgXCJdKSksIGNvbG9yLCBoZWxwZXJzXzEuY3NzVmFsdWUoc2l6ZSksIGhlbHBlcnNfMS5jc3NWYWx1ZShzaXplKSwgaGVscGVyc18xLmNzc1ZhbHVlKG1hcmdpbiksIGJlYXQsIDAuNyAvIHNwZWVkTXVsdGlwbGllciwgaSAlIDIgPyBcIjBzXCIgOiAwLjM1IC8gc3BlZWRNdWx0aXBsaWVyICsgXCJzXCIpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIExvYWRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBsb2FkaW5nID0gX2EubG9hZGluZywgY3NzID0gX2EuY3NzO1xuICAgICAgICByZXR1cm4gbG9hZGluZyA/IChyZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IFtjc3NdIH0sXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUoMSkgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUoMikgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUoMykgfSkpKSA6IG51bGw7XG4gICAgfTtcbiAgICBMb2FkZXIuZGVmYXVsdFByb3BzID0gaGVscGVyc18xLnNpemVNYXJnaW5EZWZhdWx0cygxNSk7XG4gICAgcmV0dXJuIExvYWRlcjtcbn0oUmVhY3QuUHVyZUNvbXBvbmVudCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gTG9hZGVyO1xudmFyIHRlbXBsYXRlT2JqZWN0XzEsIHRlbXBsYXRlT2JqZWN0XzI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX21ha2VUZW1wbGF0ZU9iamVjdCA9ICh0aGlzICYmIHRoaXMuX19tYWtlVGVtcGxhdGVPYmplY3QpIHx8IGZ1bmN0aW9uIChjb29rZWQsIHJhdykge1xuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gICAgcmV0dXJuIGNvb2tlZDtcbn07XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKiogQGpzeCBqc3ggKi9cbnZhciBSZWFjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3RcIik7XG52YXIgaGVscGVyc18xID0gcmVxdWlyZShcIi4vaGVscGVyc1wiKTtcbnZhciBib3VuY2UgPSByZWFjdF8xLmtleWZyYW1lcyh0ZW1wbGF0ZU9iamVjdF8xIHx8ICh0ZW1wbGF0ZU9iamVjdF8xID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAwJSwgMTAwJSB7dHJhbnNmb3JtOiBzY2FsZSgwKX1cXG4gIDUwJSB7dHJhbnNmb3JtOiBzY2FsZSgxLjApfVxcblwiXSwgW1wiXFxuICAwJSwgMTAwJSB7dHJhbnNmb3JtOiBzY2FsZSgwKX1cXG4gIDUwJSB7dHJhbnNmb3JtOiBzY2FsZSgxLjApfVxcblwiXSkpKTtcbnZhciBMb2FkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExvYWRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMb2FkZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zdHlsZSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcywgY29sb3IgPSBfYS5jb2xvciwgc2l6ZSA9IF9hLnNpemUsIHNwZWVkTXVsdGlwbGllciA9IF9hLnNwZWVkTXVsdGlwbGllcjtcbiAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmNzcyh0ZW1wbGF0ZU9iamVjdF8yIHx8ICh0ZW1wbGF0ZU9iamVjdF8yID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogXCIsIFwiO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgICAgb3BhY2l0eTogMC42O1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyBcIiwgXCJcXG4gICAgICAgIGluZmluaXRlIGVhc2UtaW4tb3V0O1xcbiAgICBcIl0sIFtcIlxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IFwiLCBcIjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgIG9wYWNpdHk6IDAuNjtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiIFwiLCBcInMgXCIsIFwiXFxuICAgICAgICBpbmZpbml0ZSBlYXNlLWluLW91dDtcXG4gICAgXCJdKSksIGhlbHBlcnNfMS5jc3NWYWx1ZShzaXplKSwgaGVscGVyc18xLmNzc1ZhbHVlKHNpemUpLCBjb2xvciwgYm91bmNlLCAyLjEgLyBzcGVlZE11bHRpcGxpZXIsIGkgPT09IDEgPyAxIC8gc3BlZWRNdWx0aXBsaWVyICsgXCJzXCIgOiBcIjBzXCIpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy53cmFwcGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNpemUgPSBfdGhpcy5wcm9wcy5zaXplO1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzMgfHwgKHRlbXBsYXRlT2JqZWN0XzMgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgXCJdLCBbXCJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgXCJdKSksIGhlbHBlcnNfMS5jc3NWYWx1ZShzaXplKSwgaGVscGVyc18xLmNzc1ZhbHVlKHNpemUpKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBMb2FkZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgbG9hZGluZyA9IF9hLmxvYWRpbmcsIGNzcyA9IF9hLmNzcztcbiAgICAgICAgcmV0dXJuIGxvYWRpbmcgPyAocmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiBbdGhpcy53cmFwcGVyKCksIGNzc10gfSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5zdHlsZSgxKSB9KSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5zdHlsZSgyKSB9KSkpIDogbnVsbDtcbiAgICB9O1xuICAgIExvYWRlci5kZWZhdWx0UHJvcHMgPSBoZWxwZXJzXzEuc2l6ZURlZmF1bHRzKDYwKTtcbiAgICByZXR1cm4gTG9hZGVyO1xufShSZWFjdC5QdXJlQ29tcG9uZW50KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBMb2FkZXI7XG52YXIgdGVtcGxhdGVPYmplY3RfMSwgdGVtcGxhdGVPYmplY3RfMiwgdGVtcGxhdGVPYmplY3RfMztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fbWFrZVRlbXBsYXRlT2JqZWN0ID0gKHRoaXMgJiYgdGhpcy5fX21ha2VUZW1wbGF0ZU9iamVjdCkgfHwgZnVuY3Rpb24gKGNvb2tlZCwgcmF3KSB7XG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cbiAgICByZXR1cm4gY29va2VkO1xufTtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKiBAanN4IGpzeCAqL1xudmFyIFJlYWN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3RfMSA9IHJlcXVpcmUoXCJAZW1vdGlvbi9yZWFjdFwiKTtcbnZhciBoZWxwZXJzXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzXCIpO1xudmFyIGNpcmNsZSA9IHJlYWN0XzEua2V5ZnJhbWVzKHRlbXBsYXRlT2JqZWN0XzEgfHwgKHRlbXBsYXRlT2JqZWN0XzEgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gIDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKX1cXG4gIDUwJSB7dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKX1cXG4gIDEwMCUge3RyYW5zZm9ybTogcm90YXRlKDM2MGRlZyl9XFxuXCJdLCBbXCJcXG4gIDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKX1cXG4gIDUwJSB7dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKX1cXG4gIDEwMCUge3RyYW5zZm9ybTogcm90YXRlKDM2MGRlZyl9XFxuXCJdKSkpO1xudmFyIExvYWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTG9hZGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExvYWRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnN0eWxlID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLCBzaXplID0gX2Euc2l6ZSwgY29sb3IgPSBfYS5jb2xvciwgc3BlZWRNdWx0aXBsaWVyID0gX2Euc3BlZWRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgdmFyIF9iID0gaGVscGVyc18xLnBhcnNlTGVuZ3RoQW5kVW5pdChzaXplKSwgdmFsdWUgPSBfYi52YWx1ZSwgdW5pdCA9IF9iLnVuaXQ7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfMiB8fCAodGVtcGxhdGVPYmplY3RfMiA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIFwiLCBcIjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgIHRyYW5zaXRpb246IDJzO1xcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICAgIHRvcDogXCIsIFwiJTtcXG4gICAgICBsZWZ0OiBcIiwgXCIlO1xcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IFxcXCJcXFwiO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiIFwiLCBcInMgXCIsIFwicyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgIFwiXSwgW1wiXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgXCIsIFwiO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgICAgdHJhbnNpdGlvbjogMnM7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgdG9wOiBcIiwgXCIlO1xcbiAgICAgIGxlZnQ6IFwiLCBcIiU7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogXFxcIlxcXCI7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyBcIiwgXCJzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgXCJdKSksIFwiXCIgKyB2YWx1ZSAqICgxIC0gaSAvIDEwKSArIHVuaXQsIFwiXCIgKyB2YWx1ZSAqICgxIC0gaSAvIDEwKSArIHVuaXQsIGNvbG9yLCBpICogMC43ICogMi41LCBpICogMC4zNSAqIDIuNSwgY2lyY2xlLCAxIC8gc3BlZWRNdWx0aXBsaWVyLCAoaSAqIDAuMikgLyBzcGVlZE11bHRpcGxpZXIpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy53cmFwcGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNpemUgPSBfdGhpcy5wcm9wcy5zaXplO1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzMgfHwgKHRlbXBsYXRlT2JqZWN0XzMgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgXCJdLCBbXCJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgXCJdKSksIGhlbHBlcnNfMS5jc3NWYWx1ZShzaXplKSwgaGVscGVyc18xLmNzc1ZhbHVlKHNpemUpKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBMb2FkZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgbG9hZGluZyA9IF9hLmxvYWRpbmcsIGNzcyA9IF9hLmNzcztcbiAgICAgICAgcmV0dXJuIGxvYWRpbmcgPyAocmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiBbdGhpcy53cmFwcGVyKCksIGNzc10gfSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5zdHlsZSgwKSB9KSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5zdHlsZSgxKSB9KSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5zdHlsZSgyKSB9KSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5zdHlsZSgzKSB9KSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5zdHlsZSg0KSB9KSkpIDogbnVsbDtcbiAgICB9O1xuICAgIExvYWRlci5kZWZhdWx0UHJvcHMgPSBoZWxwZXJzXzEuc2l6ZURlZmF1bHRzKDUwKTtcbiAgICByZXR1cm4gTG9hZGVyO1xufShSZWFjdC5QdXJlQ29tcG9uZW50KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBMb2FkZXI7XG52YXIgdGVtcGxhdGVPYmplY3RfMSwgdGVtcGxhdGVPYmplY3RfMiwgdGVtcGxhdGVPYmplY3RfMztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fbWFrZVRlbXBsYXRlT2JqZWN0ID0gKHRoaXMgJiYgdGhpcy5fX21ha2VUZW1wbGF0ZU9iamVjdCkgfHwgZnVuY3Rpb24gKGNvb2tlZCwgcmF3KSB7XG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cbiAgICByZXR1cm4gY29va2VkO1xufTtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKiBAanN4IGpzeCAqL1xudmFyIFJlYWN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3RfMSA9IHJlcXVpcmUoXCJAZW1vdGlvbi9yZWFjdFwiKTtcbnZhciBoZWxwZXJzXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzXCIpO1xudmFyIGNsaW1iaW5nQm94ID0gcmVhY3RfMS5rZXlmcmFtZXModGVtcGxhdGVPYmplY3RfMSB8fCAodGVtcGxhdGVPYmplY3RfMSA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgMCUge3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgLTFlbSkgcm90YXRlKC00NWRlZyl9XFxuICA1JSB7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAtMWVtKSByb3RhdGUoLTUwZGVnKX1cXG4gIDIwJSB7dHJhbnNmb3JtOnRyYW5zbGF0ZSgxZW0sIC0yZW0pIHJvdGF0ZSg0N2RlZyl9XFxuICAyNSUge3RyYW5zZm9ybTp0cmFuc2xhdGUoMWVtLCAtMmVtKSByb3RhdGUoNDVkZWcpfVxcbiAgMzAlIHt0cmFuc2Zvcm06dHJhbnNsYXRlKDFlbSwgLTJlbSkgcm90YXRlKDQwZGVnKX1cXG4gIDQ1JSB7dHJhbnNmb3JtOnRyYW5zbGF0ZSgyZW0sIC0zZW0pIHJvdGF0ZSgxMzdkZWcpfVxcbiAgNTAlIHt0cmFuc2Zvcm06dHJhbnNsYXRlKDJlbSwgLTNlbSkgcm90YXRlKDEzNWRlZyl9XFxuICA1NSUge3RyYW5zZm9ybTp0cmFuc2xhdGUoMmVtLCAtM2VtKSByb3RhdGUoMTMwZGVnKX1cXG4gIDcwJSB7dHJhbnNmb3JtOnRyYW5zbGF0ZSgzZW0sIC00ZW0pIHJvdGF0ZSgyMTdkZWcpfVxcbiAgNzUlIHt0cmFuc2Zvcm06dHJhbnNsYXRlKDNlbSwgLTRlbSkgcm90YXRlKDIyMGRlZyl9XFxuICAxMDAlIHt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIC0xZW0pIHJvdGF0ZSgtMjI1ZGVnKX1cXG5cIl0sIFtcIlxcbiAgMCUge3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgLTFlbSkgcm90YXRlKC00NWRlZyl9XFxuICA1JSB7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAtMWVtKSByb3RhdGUoLTUwZGVnKX1cXG4gIDIwJSB7dHJhbnNmb3JtOnRyYW5zbGF0ZSgxZW0sIC0yZW0pIHJvdGF0ZSg0N2RlZyl9XFxuICAyNSUge3RyYW5zZm9ybTp0cmFuc2xhdGUoMWVtLCAtMmVtKSByb3RhdGUoNDVkZWcpfVxcbiAgMzAlIHt0cmFuc2Zvcm06dHJhbnNsYXRlKDFlbSwgLTJlbSkgcm90YXRlKDQwZGVnKX1cXG4gIDQ1JSB7dHJhbnNmb3JtOnRyYW5zbGF0ZSgyZW0sIC0zZW0pIHJvdGF0ZSgxMzdkZWcpfVxcbiAgNTAlIHt0cmFuc2Zvcm06dHJhbnNsYXRlKDJlbSwgLTNlbSkgcm90YXRlKDEzNWRlZyl9XFxuICA1NSUge3RyYW5zZm9ybTp0cmFuc2xhdGUoMmVtLCAtM2VtKSByb3RhdGUoMTMwZGVnKX1cXG4gIDcwJSB7dHJhbnNmb3JtOnRyYW5zbGF0ZSgzZW0sIC00ZW0pIHJvdGF0ZSgyMTdkZWcpfVxcbiAgNzUlIHt0cmFuc2Zvcm06dHJhbnNsYXRlKDNlbSwgLTRlbSkgcm90YXRlKDIyMGRlZyl9XFxuICAxMDAlIHt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIC0xZW0pIHJvdGF0ZSgtMjI1ZGVnKX1cXG5cIl0pKSk7XG52YXIgTG9hZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMb2FkZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTG9hZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcywgY29sb3IgPSBfYS5jb2xvciwgc3BlZWRNdWx0aXBsaWVyID0gX2Euc3BlZWRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzIgfHwgKHRlbXBsYXRlT2JqZWN0XzIgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICBib3R0b206IC0wLjFlbTtcXG4gICAgICBoZWlnaHQ6IDFlbTtcXG4gICAgICB3aWR0aDogMWVtO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1JTtcXG4gICAgICBib3JkZXI6IDAuMjVlbSBzb2xpZCBcIiwgXCI7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTFlbSkgcm90YXRlKC00NWRlZyk7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIGluZmluaXRlIGN1YmljLWJlemllcigwLjc5LCAwLCAwLjQ3LCAwLjk3KTtcXG4gICAgXCJdLCBbXCJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICBib3R0b206IC0wLjFlbTtcXG4gICAgICBoZWlnaHQ6IDFlbTtcXG4gICAgICB3aWR0aDogMWVtO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1JTtcXG4gICAgICBib3JkZXI6IDAuMjVlbSBzb2xpZCBcIiwgXCI7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTFlbSkgcm90YXRlKC00NWRlZyk7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIGluZmluaXRlIGN1YmljLWJlemllcigwLjc5LCAwLCAwLjQ3LCAwLjk3KTtcXG4gICAgXCJdKSksIGNvbG9yLCBjbGltYmluZ0JveCwgMi41IC8gc3BlZWRNdWx0aXBsaWVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMud3JhcHBlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzaXplID0gX3RoaXMucHJvcHMuc2l6ZTtcbiAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmNzcyh0ZW1wbGF0ZU9iamVjdF8zIHx8ICh0ZW1wbGF0ZU9iamVjdF8zID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICBtYXJnaW4tdG9wOiAtMi43ZW07XFxuICAgICAgbWFyZ2luLWxlZnQ6IC0yLjdlbTtcXG4gICAgICB3aWR0aDogNS40ZW07XFxuICAgICAgaGVpZ2h0OiA1LjRlbTtcXG4gICAgICBmb250LXNpemU6IFwiLCBcIjtcXG4gICAgXCJdLCBbXCJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiA1MCU7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICAgIG1hcmdpbi10b3A6IC0yLjdlbTtcXG4gICAgICBtYXJnaW4tbGVmdDogLTIuN2VtO1xcbiAgICAgIHdpZHRoOiA1LjRlbTtcXG4gICAgICBoZWlnaHQ6IDUuNGVtO1xcbiAgICAgIGZvbnQtc2l6ZTogXCIsIFwiO1xcbiAgICBcIl0pKSwgaGVscGVyc18xLmNzc1ZhbHVlKHNpemUpKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuaGlsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjb2xvciA9IF90aGlzLnByb3BzLmNvbG9yO1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzQgfHwgKHRlbXBsYXRlT2JqZWN0XzQgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgd2lkdGg6IDcuMWVtO1xcbiAgICAgIGhlaWdodDogNy4xZW07XFxuICAgICAgdG9wOiAxLjdlbTtcXG4gICAgICBsZWZ0OiAxLjdlbTtcXG4gICAgICBib3JkZXItbGVmdDogMC4yNWVtIHNvbGlkIFwiLCBcIjtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgIFwiXSwgW1wiXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHdpZHRoOiA3LjFlbTtcXG4gICAgICBoZWlnaHQ6IDcuMWVtO1xcbiAgICAgIHRvcDogMS43ZW07XFxuICAgICAgbGVmdDogMS43ZW07XFxuICAgICAgYm9yZGVyLWxlZnQ6IDAuMjVlbSBzb2xpZCBcIiwgXCI7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICBcIl0pKSwgY29sb3IpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5jb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfNSB8fCAodGVtcGxhdGVPYmplY3RfNSA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB3aWR0aDogNy4xZW07XFxuICAgICAgaGVpZ2h0OiA3LjFlbTtcXG4gICAgXCJdLCBbXCJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgd2lkdGg6IDcuMWVtO1xcbiAgICAgIGhlaWdodDogNy4xZW07XFxuICAgIFwiXSkpKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBMb2FkZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgbG9hZGluZyA9IF9hLmxvYWRpbmcsIGNzcyA9IF9hLmNzcztcbiAgICAgICAgcmV0dXJuIGxvYWRpbmcgPyAocmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiBbdGhpcy5jb250YWluZXIoKSwgY3NzXSB9LFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLndyYXBwZXIoKSB9LFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5zdHlsZSgpIH0pLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5oaWxsKCkgfSkpKSkgOiBudWxsO1xuICAgIH07XG4gICAgTG9hZGVyLmRlZmF1bHRQcm9wcyA9IGhlbHBlcnNfMS5zaXplRGVmYXVsdHMoMTUpO1xuICAgIHJldHVybiBMb2FkZXI7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IExvYWRlcjtcbnZhciB0ZW1wbGF0ZU9iamVjdF8xLCB0ZW1wbGF0ZU9iamVjdF8yLCB0ZW1wbGF0ZU9iamVjdF8zLCB0ZW1wbGF0ZU9iamVjdF80LCB0ZW1wbGF0ZU9iamVjdF81O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19tYWtlVGVtcGxhdGVPYmplY3QgPSAodGhpcyAmJiB0aGlzLl9fbWFrZVRlbXBsYXRlT2JqZWN0KSB8fCBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICAgIHJldHVybiBjb29rZWQ7XG59O1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqIEBqc3gganN4ICovXG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciByZWFjdF8xID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0XCIpO1xudmFyIGhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIik7XG52YXIgY2xpcCA9IHJlYWN0XzEua2V5ZnJhbWVzKHRlbXBsYXRlT2JqZWN0XzEgfHwgKHRlbXBsYXRlT2JqZWN0XzEgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gIDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgxKX1cXG4gIDUwJSB7dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKSBzY2FsZSgwLjgpfVxcbiAgMTAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxKX1cXG5cIl0sIFtcIlxcbiAgMCUge3RyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDEpfVxcbiAgNTAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpIHNjYWxlKDAuOCl9XFxuICAxMDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEpfVxcblwiXSkpKTtcbnZhciBMb2FkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExvYWRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMb2FkZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLCBzaXplID0gX2Euc2l6ZSwgY29sb3IgPSBfYS5jb2xvciwgc3BlZWRNdWx0aXBsaWVyID0gX2Euc3BlZWRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzIgfHwgKHRlbXBsYXRlT2JqZWN0XzIgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgICBib3JkZXI6IDJweCBzb2xpZDtcXG4gICAgICBib3JkZXItY29sb3I6IFwiLCBcIjtcXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyAwcyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gICAgXCJdLCBbXCJcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgICBib3JkZXI6IDJweCBzb2xpZDtcXG4gICAgICBib3JkZXItY29sb3I6IFwiLCBcIjtcXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyAwcyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gICAgXCJdKSksIGhlbHBlcnNfMS5jc3NWYWx1ZShzaXplKSwgaGVscGVyc18xLmNzc1ZhbHVlKHNpemUpLCBjb2xvciwgY2xpcCwgMC43NSAvIHNwZWVkTXVsdGlwbGllcik7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTG9hZGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIGxvYWRpbmcgPSBfYS5sb2FkaW5nLCBjc3MgPSBfYS5jc3M7XG4gICAgICAgIHJldHVybiBsb2FkaW5nID8gcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiBbdGhpcy5zdHlsZSgpLCBjc3NdIH0pIDogbnVsbDtcbiAgICB9O1xuICAgIExvYWRlci5kZWZhdWx0UHJvcHMgPSBoZWxwZXJzXzEuc2l6ZURlZmF1bHRzKDM1KTtcbiAgICByZXR1cm4gTG9hZGVyO1xufShSZWFjdC5QdXJlQ29tcG9uZW50KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBMb2FkZXI7XG52YXIgdGVtcGxhdGVPYmplY3RfMSwgdGVtcGxhdGVPYmplY3RfMjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fbWFrZVRlbXBsYXRlT2JqZWN0ID0gKHRoaXMgJiYgdGhpcy5fX21ha2VUZW1wbGF0ZU9iamVjdCkgfHwgZnVuY3Rpb24gKGNvb2tlZCwgcmF3KSB7XG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cbiAgICByZXR1cm4gY29va2VkO1xufTtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKiBAanN4IGpzeCAqL1xudmFyIFJlYWN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3RfMSA9IHJlcXVpcmUoXCJAZW1vdGlvbi9yZWFjdFwiKTtcbnZhciBoZWxwZXJzXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzXCIpO1xudmFyIHJvdGF0ZSA9IHJlYWN0XzEua2V5ZnJhbWVzKHRlbXBsYXRlT2JqZWN0XzEgfHwgKHRlbXBsYXRlT2JqZWN0XzEgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIH1cXG5cIl0sIFtcIlxcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgfVxcblwiXSkpKTtcbnZhciBMb2FkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExvYWRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMb2FkZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy53cmFwcGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsIHNpemUgPSBfYS5zaXplLCBjb2xvciA9IF9hLmNvbG9yLCBzcGVlZE11bHRpcGxpZXIgPSBfYS5zcGVlZE11bHRpcGxpZXI7XG4gICAgICAgICAgICB2YXIgX2IgPSBoZWxwZXJzXzEucGFyc2VMZW5ndGhBbmRVbml0KHNpemUpLCB2YWx1ZSA9IF9iLnZhbHVlLCB1bml0ID0gX2IudW5pdDtcbiAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmNzcyh0ZW1wbGF0ZU9iamVjdF8yIHx8ICh0ZW1wbGF0ZU9iamVjdF8yID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggMnB4IFwiLCBcIjtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuXFxuICAgICAgJjphZnRlcixcXG4gICAgICAmOmJlZm9yZSB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IFwiLCBcIjtcXG4gICAgICB9XFxuXFxuICAgICAgJjphZnRlciB7XFxuICAgICAgICB3aWR0aDogXCIsIFwicHg7XFxuICAgICAgICBoZWlnaHQ6IDJweDtcXG4gICAgICAgIHRvcDogXCIsIFwicHg7XFxuICAgICAgICBsZWZ0OiBcIiwgXCJweDtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDFweCAxcHg7XFxuICAgICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIGxpbmVhciBpbmZpbml0ZTtcXG4gICAgICB9XFxuXFxuICAgICAgJjpiZWZvcmUge1xcbiAgICAgICAgd2lkdGg6IFwiLCBcInB4O1xcbiAgICAgICAgaGVpZ2h0OiAycHg7XFxuICAgICAgICB0b3A6IFwiLCBcInB4O1xcbiAgICAgICAgbGVmdDogXCIsIFwicHg7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxcHggMXB4O1xcbiAgICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyBsaW5lYXIgaW5maW5pdGU7XFxuICAgICAgfVxcbiAgICBcIl0sIFtcIlxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMHB4IDJweCBcIiwgXCI7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcblxcbiAgICAgICY6YWZ0ZXIsXFxuICAgICAgJjpiZWZvcmUge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiwgXCI7XFxuICAgICAgfVxcblxcbiAgICAgICY6YWZ0ZXIge1xcbiAgICAgICAgd2lkdGg6IFwiLCBcInB4O1xcbiAgICAgICAgaGVpZ2h0OiAycHg7XFxuICAgICAgICB0b3A6IFwiLCBcInB4O1xcbiAgICAgICAgbGVmdDogXCIsIFwicHg7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxcHggMXB4O1xcbiAgICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyBsaW5lYXIgaW5maW5pdGU7XFxuICAgICAgfVxcblxcbiAgICAgICY6YmVmb3JlIHtcXG4gICAgICAgIHdpZHRoOiBcIiwgXCJweDtcXG4gICAgICAgIGhlaWdodDogMnB4O1xcbiAgICAgICAgdG9wOiBcIiwgXCJweDtcXG4gICAgICAgIGxlZnQ6IFwiLCBcInB4O1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMXB4IDFweDtcXG4gICAgICAgIGFuaW1hdGlvbjogXCIsIFwiIFwiLCBcInMgbGluZWFyIGluZmluaXRlO1xcbiAgICAgIH1cXG4gICAgXCJdKSksIFwiXCIgKyB2YWx1ZSArIHVuaXQsIFwiXCIgKyB2YWx1ZSArIHVuaXQsIGNvbG9yLCBjb2xvciwgdmFsdWUgLyAyLjQsIHZhbHVlIC8gMiAtIDEsIHZhbHVlIC8gMiAtIDEsIHJvdGF0ZSwgMiAvIHNwZWVkTXVsdGlwbGllciwgdmFsdWUgLyAzLCB2YWx1ZSAvIDIgLSAxLCB2YWx1ZSAvIDIgLSAxLCByb3RhdGUsIDggLyBzcGVlZE11bHRpcGxpZXIpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIExvYWRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBsb2FkaW5nID0gX2EubG9hZGluZywgY3NzID0gX2EuY3NzO1xuICAgICAgICByZXR1cm4gbG9hZGluZyA/IHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogW3RoaXMud3JhcHBlcigpLCBjc3NdIH0pIDogbnVsbDtcbiAgICB9O1xuICAgIExvYWRlci5kZWZhdWx0UHJvcHMgPSBoZWxwZXJzXzEuc2l6ZURlZmF1bHRzKDUwKTtcbiAgICByZXR1cm4gTG9hZGVyO1xufShSZWFjdC5QdXJlQ29tcG9uZW50KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBMb2FkZXI7XG52YXIgdGVtcGxhdGVPYmplY3RfMSwgdGVtcGxhdGVPYmplY3RfMjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fbWFrZVRlbXBsYXRlT2JqZWN0ID0gKHRoaXMgJiYgdGhpcy5fX21ha2VUZW1wbGF0ZU9iamVjdCkgfHwgZnVuY3Rpb24gKGNvb2tlZCwgcmF3KSB7XG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cbiAgICByZXR1cm4gY29va2VkO1xufTtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKiBAanN4IGpzeCAqL1xudmFyIFJlYWN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3RfMSA9IHJlcXVpcmUoXCJAZW1vdGlvbi9yZWFjdFwiKTtcbnZhciBoZWxwZXJzXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzXCIpO1xudmFyIHJvdGF0ZSA9IHJlYWN0XzEua2V5ZnJhbWVzKHRlbXBsYXRlT2JqZWN0XzEgfHwgKHRlbXBsYXRlT2JqZWN0XzEgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gIDEwMCUge3RyYW5zZm9ybTogcm90YXRlKDM2MGRlZyl9XFxuXCJdLCBbXCJcXG4gIDEwMCUge3RyYW5zZm9ybTogcm90YXRlKDM2MGRlZyl9XFxuXCJdKSkpO1xudmFyIGJvdW5jZSA9IHJlYWN0XzEua2V5ZnJhbWVzKHRlbXBsYXRlT2JqZWN0XzIgfHwgKHRlbXBsYXRlT2JqZWN0XzIgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gIDAlLCAxMDAlIHt0cmFuc2Zvcm06IHNjYWxlKDApfVxcbiAgNTAlIHt0cmFuc2Zvcm06IHNjYWxlKDEuMCl9XFxuXCJdLCBbXCJcXG4gIDAlLCAxMDAlIHt0cmFuc2Zvcm06IHNjYWxlKDApfVxcbiAgNTAlIHt0cmFuc2Zvcm06IHNjYWxlKDEuMCl9XFxuXCJdKSkpO1xudmFyIExvYWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTG9hZGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExvYWRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnN0eWxlID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLCBzaXplID0gX2Euc2l6ZSwgY29sb3IgPSBfYS5jb2xvciwgc3BlZWRNdWx0aXBsaWVyID0gX2Euc3BlZWRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgdmFyIF9iID0gaGVscGVyc18xLnBhcnNlTGVuZ3RoQW5kVW5pdChzaXplKSwgdmFsdWUgPSBfYi52YWx1ZSwgdW5pdCA9IF9iLnVuaXQ7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfMyB8fCAodGVtcGxhdGVPYmplY3RfMyA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IFwiLCBcIjtcXG4gICAgICBib3R0b206IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IFwiLCBcIjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiIFwiLCBcInMgXCIsIFwiIGluZmluaXRlIGxpbmVhcjtcXG4gICAgXCJdLCBbXCJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiBcIiwgXCI7XFxuICAgICAgYm90dG9tOiBcIiwgXCI7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiwgXCI7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIFwiLCBcIiBpbmZpbml0ZSBsaW5lYXI7XFxuICAgIFwiXSkpLCBpICUgMiA/IFwiMFwiIDogXCJhdXRvXCIsIGkgJSAyID8gXCJhdXRvXCIgOiBcIjBcIiwgXCJcIiArIHZhbHVlIC8gMiArIHVuaXQsIFwiXCIgKyB2YWx1ZSAvIDIgKyB1bml0LCBjb2xvciwgYm91bmNlLCAyIC8gc3BlZWRNdWx0aXBsaWVyLCBpID09PSAyID8gXCItMXNcIiA6IFwiMHNcIik7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLndyYXBwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcywgc2l6ZSA9IF9hLnNpemUsIHNwZWVkTXVsdGlwbGllciA9IF9hLnNwZWVkTXVsdGlwbGllcjtcbiAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmNzcyh0ZW1wbGF0ZU9iamVjdF80IHx8ICh0ZW1wbGF0ZU9iamVjdF80ID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyAwcyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgIFwiXSwgW1wiXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyAwcyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgIFwiXSkpLCBoZWxwZXJzXzEuY3NzVmFsdWUoc2l6ZSksIGhlbHBlcnNfMS5jc3NWYWx1ZShzaXplKSwgcm90YXRlLCAyIC8gc3BlZWRNdWx0aXBsaWVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBMb2FkZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgbG9hZGluZyA9IF9hLmxvYWRpbmcsIGNzcyA9IF9hLmNzcztcbiAgICAgICAgcmV0dXJuIGxvYWRpbmcgPyAocmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiBbdGhpcy53cmFwcGVyKCksIGNzc10gfSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5zdHlsZSgxKSB9KSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5zdHlsZSgyKSB9KSkpIDogbnVsbDtcbiAgICB9O1xuICAgIExvYWRlci5kZWZhdWx0UHJvcHMgPSBoZWxwZXJzXzEuc2l6ZURlZmF1bHRzKDYwKTtcbiAgICByZXR1cm4gTG9hZGVyO1xufShSZWFjdC5QdXJlQ29tcG9uZW50KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBMb2FkZXI7XG52YXIgdGVtcGxhdGVPYmplY3RfMSwgdGVtcGxhdGVPYmplY3RfMiwgdGVtcGxhdGVPYmplY3RfMywgdGVtcGxhdGVPYmplY3RfNDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fbWFrZVRlbXBsYXRlT2JqZWN0ID0gKHRoaXMgJiYgdGhpcy5fX21ha2VUZW1wbGF0ZU9iamVjdCkgfHwgZnVuY3Rpb24gKGNvb2tlZCwgcmF3KSB7XG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cbiAgICByZXR1cm4gY29va2VkO1xufTtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKiBAanN4IGpzeCAqL1xudmFyIFJlYWN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3RfMSA9IHJlcXVpcmUoXCJAZW1vdGlvbi9yZWFjdFwiKTtcbnZhciBoZWxwZXJzXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzXCIpO1xudmFyIGZhZGUgPSByZWFjdF8xLmtleWZyYW1lcyh0ZW1wbGF0ZU9iamVjdF8xIHx8ICh0ZW1wbGF0ZU9iamVjdF8xID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICA1MCUge29wYWNpdHk6IDAuM31cXG4gIDEwMCUge29wYWNpdHk6IDF9XFxuXCJdLCBbXCJcXG4gIDUwJSB7b3BhY2l0eTogMC4zfVxcbiAgMTAwJSB7b3BhY2l0eTogMX1cXG5cIl0pKSk7XG52YXIgTG9hZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMb2FkZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTG9hZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMucmFkaXVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1hcmdpbiA9IF90aGlzLnByb3BzLm1hcmdpbjtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGhlbHBlcnNfMS5wYXJzZUxlbmd0aEFuZFVuaXQobWFyZ2luKS52YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSArIDE4O1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5xdWFydGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJhZGl1cygpIC8gMiArIF90aGlzLnJhZGl1cygpIC8gNS41O1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5zdHlsZSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcywgaGVpZ2h0ID0gX2EuaGVpZ2h0LCB3aWR0aCA9IF9hLndpZHRoLCBtYXJnaW4gPSBfYS5tYXJnaW4sIGNvbG9yID0gX2EuY29sb3IsIHJhZGl1cyA9IF9hLnJhZGl1cywgc3BlZWRNdWx0aXBsaWVyID0gX2Euc3BlZWRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzIgfHwgKHRlbXBsYXRlT2JqZWN0XzIgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBtYXJnaW46IFwiLCBcIjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiwgXCI7XFxuICAgICAgYm9yZGVyLXJhZGl1czogXCIsIFwiO1xcbiAgICAgIHRyYW5zaXRpb246IDJzO1xcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IFxcXCJib3RoXFxcIjtcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIFwiLCBcInMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxuICAgIFwiXSwgW1wiXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgbWFyZ2luOiBcIiwgXCI7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogXCIsIFwiO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IFwiLCBcIjtcXG4gICAgICB0cmFuc2l0aW9uOiAycztcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBcXFwiYm90aFxcXCI7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyBcIiwgXCJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xcbiAgICBcIl0pKSwgaGVscGVyc18xLmNzc1ZhbHVlKHdpZHRoKSwgaGVscGVyc18xLmNzc1ZhbHVlKGhlaWdodCksIGhlbHBlcnNfMS5jc3NWYWx1ZShtYXJnaW4pLCBjb2xvciwgaGVscGVyc18xLmNzc1ZhbHVlKHJhZGl1cyksIGZhZGUsIDEuMiAvIHNwZWVkTXVsdGlwbGllciwgaSAqIDAuMTIpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy53cmFwcGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzMgfHwgKHRlbXBsYXRlT2JqZWN0XzMgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgZm9udC1zaXplOiAwO1xcbiAgICAgIHRvcDogXCIsIFwicHg7XFxuICAgICAgbGVmdDogXCIsIFwicHg7XFxuICAgICAgd2lkdGg6IFwiLCBcInB4O1xcbiAgICAgIGhlaWdodDogXCIsIFwicHg7XFxuICAgIFwiXSwgW1wiXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGZvbnQtc2l6ZTogMDtcXG4gICAgICB0b3A6IFwiLCBcInB4O1xcbiAgICAgIGxlZnQ6IFwiLCBcInB4O1xcbiAgICAgIHdpZHRoOiBcIiwgXCJweDtcXG4gICAgICBoZWlnaHQ6IFwiLCBcInB4O1xcbiAgICBcIl0pKSwgX3RoaXMucmFkaXVzKCksIF90aGlzLnJhZGl1cygpLCBfdGhpcy5yYWRpdXMoKSAqIDMsIF90aGlzLnJhZGl1cygpICogMyk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmEgPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdF8xLmNzcyh0ZW1wbGF0ZU9iamVjdF80IHx8ICh0ZW1wbGF0ZU9iamVjdF80ID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgIFwiLCBcIjtcXG4gICAgdG9wOiBcIiwgXCJweDtcXG4gICAgbGVmdDogMDtcXG4gIFwiXSwgW1wiXFxuICAgIFwiLCBcIjtcXG4gICAgdG9wOiBcIiwgXCJweDtcXG4gICAgbGVmdDogMDtcXG4gIFwiXSkpLCBfdGhpcy5zdHlsZSgxKSwgX3RoaXMucmFkaXVzKCkpOyB9O1xuICAgICAgICBfdGhpcy5iID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfNSB8fCAodGVtcGxhdGVPYmplY3RfNSA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICBcIiwgXCI7XFxuICAgIHRvcDogXCIsIFwicHg7XFxuICAgIGxlZnQ6IFwiLCBcInB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgXCJdLCBbXCJcXG4gICAgXCIsIFwiO1xcbiAgICB0b3A6IFwiLCBcInB4O1xcbiAgICBsZWZ0OiBcIiwgXCJweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIFwiXSkpLCBfdGhpcy5zdHlsZSgyKSwgX3RoaXMucXVhcnRlcigpLCBfdGhpcy5xdWFydGVyKCkpOyB9O1xuICAgICAgICBfdGhpcy5jID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfNiB8fCAodGVtcGxhdGVPYmplY3RfNiA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICBcIiwgXCI7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogXCIsIFwicHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIFwiXSwgW1wiXFxuICAgIFwiLCBcIjtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiBcIiwgXCJweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgXCJdKSksIF90aGlzLnN0eWxlKDMpLCBfdGhpcy5yYWRpdXMoKSk7IH07XG4gICAgICAgIF90aGlzLmQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdF8xLmNzcyh0ZW1wbGF0ZU9iamVjdF83IHx8ICh0ZW1wbGF0ZU9iamVjdF83ID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgIFwiLCBcIjtcXG4gICAgdG9wOiBcIiwgXCJweDtcXG4gICAgbGVmdDogXCIsIFwicHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIFwiXSwgW1wiXFxuICAgIFwiLCBcIjtcXG4gICAgdG9wOiBcIiwgXCJweDtcXG4gICAgbGVmdDogXCIsIFwicHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIFwiXSkpLCBfdGhpcy5zdHlsZSg0KSwgLV90aGlzLnF1YXJ0ZXIoKSwgX3RoaXMucXVhcnRlcigpKTsgfTtcbiAgICAgICAgX3RoaXMuZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzggfHwgKHRlbXBsYXRlT2JqZWN0XzggPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgXCIsIFwiO1xcbiAgICB0b3A6IFwiLCBcInB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgXCJdLCBbXCJcXG4gICAgXCIsIFwiO1xcbiAgICB0b3A6IFwiLCBcInB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgXCJdKSksIF90aGlzLnN0eWxlKDUpLCAtX3RoaXMucmFkaXVzKCkpOyB9O1xuICAgICAgICBfdGhpcy5mID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfOSB8fCAodGVtcGxhdGVPYmplY3RfOSA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICBcIiwgXCI7XFxuICAgIHRvcDogXCIsIFwicHg7XFxuICAgIGxlZnQ6IFwiLCBcInB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgXCJdLCBbXCJcXG4gICAgXCIsIFwiO1xcbiAgICB0b3A6IFwiLCBcInB4O1xcbiAgICBsZWZ0OiBcIiwgXCJweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIFwiXSkpLCBfdGhpcy5zdHlsZSg2KSwgLV90aGlzLnF1YXJ0ZXIoKSwgLV90aGlzLnF1YXJ0ZXIoKSk7IH07XG4gICAgICAgIF90aGlzLmcgPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdF8xLmNzcyh0ZW1wbGF0ZU9iamVjdF8xMCB8fCAodGVtcGxhdGVPYmplY3RfMTAgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgXCIsIFwiO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IFwiLCBcInB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICBcIl0sIFtcIlxcbiAgICBcIiwgXCI7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogXCIsIFwicHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIFwiXSkpLCBfdGhpcy5zdHlsZSg3KSwgLV90aGlzLnJhZGl1cygpKTsgfTtcbiAgICAgICAgX3RoaXMuaCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzExIHx8ICh0ZW1wbGF0ZU9iamVjdF8xMSA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICBcIiwgXCI7XFxuICAgIHRvcDogXCIsIFwicHg7XFxuICAgIGxlZnQ6IFwiLCBcInB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICBcIl0sIFtcIlxcbiAgICBcIiwgXCI7XFxuICAgIHRvcDogXCIsIFwicHg7XFxuICAgIGxlZnQ6IFwiLCBcInB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICBcIl0pKSwgX3RoaXMuc3R5bGUoOCksIF90aGlzLnF1YXJ0ZXIoKSwgLV90aGlzLnF1YXJ0ZXIoKSk7IH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTG9hZGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIGxvYWRpbmcgPSBfYS5sb2FkaW5nLCBjc3MgPSBfYS5jc3M7XG4gICAgICAgIHJldHVybiBsb2FkaW5nID8gKHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogW3RoaXMud3JhcHBlcigpLCBjc3NdIH0sXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuYSgpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLmIoKSB9KSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5jKCkgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuZCgpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLmUoKSB9KSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5mKCkgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuZygpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLmgoKSB9KSkpIDogbnVsbDtcbiAgICB9O1xuICAgIExvYWRlci5kZWZhdWx0UHJvcHMgPSBoZWxwZXJzXzEuaGVpZ2h0V2lkdGhSYWRpdXNEZWZhdWx0cygxNSwgNSwgMik7XG4gICAgcmV0dXJuIExvYWRlcjtcbn0oUmVhY3QuUHVyZUNvbXBvbmVudCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gTG9hZGVyO1xudmFyIHRlbXBsYXRlT2JqZWN0XzEsIHRlbXBsYXRlT2JqZWN0XzIsIHRlbXBsYXRlT2JqZWN0XzMsIHRlbXBsYXRlT2JqZWN0XzQsIHRlbXBsYXRlT2JqZWN0XzUsIHRlbXBsYXRlT2JqZWN0XzYsIHRlbXBsYXRlT2JqZWN0XzcsIHRlbXBsYXRlT2JqZWN0XzgsIHRlbXBsYXRlT2JqZWN0XzksIHRlbXBsYXRlT2JqZWN0XzEwLCB0ZW1wbGF0ZU9iamVjdF8xMTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fbWFrZVRlbXBsYXRlT2JqZWN0ID0gKHRoaXMgJiYgdGhpcy5fX21ha2VUZW1wbGF0ZU9iamVjdCkgfHwgZnVuY3Rpb24gKGNvb2tlZCwgcmF3KSB7XG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cbiAgICByZXR1cm4gY29va2VkO1xufTtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKiBAanN4IGpzeCAqL1xudmFyIFJlYWN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3RfMSA9IHJlcXVpcmUoXCJAZW1vdGlvbi9yZWFjdFwiKTtcbnZhciBoZWxwZXJzXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzXCIpO1xudmFyIGdyaWQgPSByZWFjdF8xLmtleWZyYW1lcyh0ZW1wbGF0ZU9iamVjdF8xIHx8ICh0ZW1wbGF0ZU9iamVjdF8xID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAwJSB7dHJhbnNmb3JtOiBzY2FsZSgxKX1cXG4gIDUwJSB7dHJhbnNmb3JtOiBzY2FsZSgwLjUpOyBvcGFjaXR5OiAwLjd9XFxuICAxMDAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpO29wYWNpdHk6IDF9XFxuXCJdLCBbXCJcXG4gIDAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpfVxcbiAgNTAlIHt0cmFuc2Zvcm06IHNjYWxlKDAuNSk7IG9wYWNpdHk6IDAuN31cXG4gIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMSk7b3BhY2l0eTogMX1cXG5cIl0pKSk7XG52YXIgcmFuZG9tID0gZnVuY3Rpb24gKHRvcCkgeyByZXR1cm4gTWF0aC5yYW5kb20oKSAqIHRvcDsgfTtcbnZhciBMb2FkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExvYWRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMb2FkZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zdHlsZSA9IGZ1bmN0aW9uIChyYW5kKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcywgY29sb3IgPSBfYS5jb2xvciwgc2l6ZSA9IF9hLnNpemUsIG1hcmdpbiA9IF9hLm1hcmdpbiwgc3BlZWRNdWx0aXBsaWVyID0gX2Euc3BlZWRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzIgfHwgKHRlbXBsYXRlT2JqZWN0XzIgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogXCIsIFwiO1xcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgbWFyZ2luOiBcIiwgXCI7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBcXFwiYm90aFxcXCI7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyBcIiwgXCJzIGluZmluaXRlIGVhc2U7XFxuICAgIFwiXSwgW1wiXFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IFwiLCBcIjtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIG1hcmdpbjogXCIsIFwiO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogXFxcImJvdGhcXFwiO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiIFwiLCBcInMgXCIsIFwicyBpbmZpbml0ZSBlYXNlO1xcbiAgICBcIl0pKSwgY29sb3IsIGhlbHBlcnNfMS5jc3NWYWx1ZShzaXplKSwgaGVscGVyc18xLmNzc1ZhbHVlKHNpemUpLCBoZWxwZXJzXzEuY3NzVmFsdWUobWFyZ2luKSwgZ3JpZCwgKHJhbmQgLyAxMDAgKyAwLjYpIC8gc3BlZWRNdWx0aXBsaWVyLCByYW5kIC8gMTAwIC0gMC4yKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMud3JhcHBlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLCBzaXplID0gX2Euc2l6ZSwgbWFyZ2luID0gX2EubWFyZ2luO1xuICAgICAgICAgICAgdmFyIHNpemVXaXRoVW5pdCA9IGhlbHBlcnNfMS5wYXJzZUxlbmd0aEFuZFVuaXQoc2l6ZSk7XG4gICAgICAgICAgICB2YXIgbWFyZ2luV2l0aFVuaXQgPSBoZWxwZXJzXzEucGFyc2VMZW5ndGhBbmRVbml0KG1hcmdpbik7XG4gICAgICAgICAgICB2YXIgd2lkdGggPSBcIlwiICsgKHBhcnNlRmxvYXQoc2l6ZVdpdGhVbml0LnZhbHVlLnRvU3RyaW5nKCkpICogMyArIHBhcnNlRmxvYXQobWFyZ2luV2l0aFVuaXQudmFsdWUudG9TdHJpbmcoKSkgKiA2KSArIHNpemVXaXRoVW5pdC51bml0O1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzMgfHwgKHRlbXBsYXRlT2JqZWN0XzMgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGZvbnQtc2l6ZTogMDtcXG4gICAgXCJdLCBbXCJcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGZvbnQtc2l6ZTogMDtcXG4gICAgXCJdKSksIHdpZHRoKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBMb2FkZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgbG9hZGluZyA9IF9hLmxvYWRpbmcsIGNzcyA9IF9hLmNzcztcbiAgICAgICAgcmV0dXJuIGxvYWRpbmcgPyAocmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiBbdGhpcy53cmFwcGVyKCksIGNzc10gfSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5zdHlsZShyYW5kb20oMTAwKSkgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUocmFuZG9tKDEwMCkpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKHJhbmRvbSgxMDApKSB9KSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5zdHlsZShyYW5kb20oMTAwKSkgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUocmFuZG9tKDEwMCkpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKHJhbmRvbSgxMDApKSB9KSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5zdHlsZShyYW5kb20oMTAwKSkgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUocmFuZG9tKDEwMCkpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKHJhbmRvbSgxMDApKSB9KSkpIDogbnVsbDtcbiAgICB9O1xuICAgIExvYWRlci5kZWZhdWx0UHJvcHMgPSBoZWxwZXJzXzEuc2l6ZU1hcmdpbkRlZmF1bHRzKDE1KTtcbiAgICByZXR1cm4gTG9hZGVyO1xufShSZWFjdC5QdXJlQ29tcG9uZW50KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBMb2FkZXI7XG52YXIgdGVtcGxhdGVPYmplY3RfMSwgdGVtcGxhdGVPYmplY3RfMiwgdGVtcGxhdGVPYmplY3RfMztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX21ha2VUZW1wbGF0ZU9iamVjdCA9ICh0aGlzICYmIHRoaXMuX19tYWtlVGVtcGxhdGVPYmplY3QpIHx8IGZ1bmN0aW9uIChjb29rZWQsIHJhdykge1xuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gICAgcmV0dXJuIGNvb2tlZDtcbn07XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKiBAanN4IGpzeCAqL1xudmFyIFJlYWN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3RfMSA9IHJlcXVpcmUoXCJAZW1vdGlvbi9yZWFjdFwiKTtcbnZhciBpbmRleF8xID0gcmVxdWlyZShcIi4vaGVscGVycy9pbmRleFwiKTtcbnZhciBMb2FkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExvYWRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMb2FkZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy50aGlja25lc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2l6ZSA9IF90aGlzLnByb3BzLnNpemU7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBpbmRleF8xLnBhcnNlTGVuZ3RoQW5kVW5pdChzaXplKS52YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSAvIDU7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmxhdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzaXplID0gX3RoaXMucHJvcHMuc2l6ZTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGluZGV4XzEucGFyc2VMZW5ndGhBbmRVbml0KHNpemUpLnZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuICh2YWx1ZSAtIF90aGlzLnRoaWNrbmVzcygpKSAvIDI7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLm9mZnNldCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmxhdCgpIC0gX3RoaXMudGhpY2tuZXNzKCk7IH07XG4gICAgICAgIF90aGlzLmNvbG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvbG9yID0gX3RoaXMucHJvcHMuY29sb3I7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXhfMS5jYWxjdWxhdGVSZ2JhKGNvbG9yLCAwLjc1KTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuYmVmb3JlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNpemUgPSBfdGhpcy5wcm9wcy5zaXplO1xuICAgICAgICAgICAgdmFyIGNvbG9yID0gX3RoaXMuY29sb3IoKTtcbiAgICAgICAgICAgIHZhciBsYXQgPSBfdGhpcy5sYXQoKTtcbiAgICAgICAgICAgIHZhciB0aGlja25lc3MgPSBfdGhpcy50aGlja25lc3MoKTtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSBfdGhpcy5vZmZzZXQoKTtcbiAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmtleWZyYW1lcyh0ZW1wbGF0ZU9iamVjdF8xIHx8ICh0ZW1wbGF0ZU9iamVjdF8xID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgMCUge3dpZHRoOiBcIiwgXCJweDtib3gtc2hhZG93OiBcIiwgXCJweCBcIiwgXCJweCBcIiwgXCIsIFwiLCBcInB4IFwiLCBcInB4IFwiLCBcIn1cXG4gICAgICAzNSUge3dpZHRoOiBcIiwgXCI7Ym94LXNoYWRvdzogMCBcIiwgXCJweCBcIiwgXCIsIDAgXCIsIFwicHggXCIsIFwifVxcbiAgICAgIDcwJSB7d2lkdGg6IFwiLCBcInB4O2JveC1zaGFkb3c6IFwiLCBcInB4IFwiLCBcInB4IFwiLCBcIiwgXCIsIFwicHggXCIsIFwicHggXCIsIFwifVxcbiAgICAgIDEwMCUge2JveC1zaGFkb3c6IFwiLCBcInB4IFwiLCBcInB4IFwiLCBcIiwgXCIsIFwicHggXCIsIFwicHggXCIsIFwifVxcbiAgICBcIl0sIFtcIlxcbiAgICAgIDAlIHt3aWR0aDogXCIsIFwicHg7Ym94LXNoYWRvdzogXCIsIFwicHggXCIsIFwicHggXCIsIFwiLCBcIiwgXCJweCBcIiwgXCJweCBcIiwgXCJ9XFxuICAgICAgMzUlIHt3aWR0aDogXCIsIFwiO2JveC1zaGFkb3c6IDAgXCIsIFwicHggXCIsIFwiLCAwIFwiLCBcInB4IFwiLCBcIn1cXG4gICAgICA3MCUge3dpZHRoOiBcIiwgXCJweDtib3gtc2hhZG93OiBcIiwgXCJweCBcIiwgXCJweCBcIiwgXCIsIFwiLCBcInB4IFwiLCBcInB4IFwiLCBcIn1cXG4gICAgICAxMDAlIHtib3gtc2hhZG93OiBcIiwgXCJweCBcIiwgXCJweCBcIiwgXCIsIFwiLCBcInB4IFwiLCBcInB4IFwiLCBcIn1cXG4gICAgXCJdKSksIHRoaWNrbmVzcywgbGF0LCAtb2Zmc2V0LCBjb2xvciwgLWxhdCwgb2Zmc2V0LCBjb2xvciwgaW5kZXhfMS5jc3NWYWx1ZShzaXplKSwgLW9mZnNldCwgY29sb3IsIG9mZnNldCwgY29sb3IsIHRoaWNrbmVzcywgLWxhdCwgLW9mZnNldCwgY29sb3IsIGxhdCwgb2Zmc2V0LCBjb2xvciwgbGF0LCAtb2Zmc2V0LCBjb2xvciwgLWxhdCwgb2Zmc2V0LCBjb2xvcik7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmFmdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNpemUgPSBfdGhpcy5wcm9wcy5zaXplO1xuICAgICAgICAgICAgdmFyIGNvbG9yID0gX3RoaXMuY29sb3IoKTtcbiAgICAgICAgICAgIHZhciBsYXQgPSBfdGhpcy5sYXQoKTtcbiAgICAgICAgICAgIHZhciB0aGlja25lc3MgPSBfdGhpcy50aGlja25lc3MoKTtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSBfdGhpcy5vZmZzZXQoKTtcbiAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmtleWZyYW1lcyh0ZW1wbGF0ZU9iamVjdF8yIHx8ICh0ZW1wbGF0ZU9iamVjdF8yID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgMCUge2hlaWdodDogXCIsIFwicHg7Ym94LXNoYWRvdzogXCIsIFwicHggXCIsIFwicHggXCIsIFwiLCBcIiwgXCJweCBcIiwgXCJweCBcIiwgXCJ9XFxuICAgICAgMzUlIHtoZWlnaHQ6IFwiLCBcIjtib3gtc2hhZG93OiBcIiwgXCJweCAwIFwiLCBcIiwgXCIsIFwicHggMCBcIiwgXCJ9XFxuICAgICAgNzAlIHtoZWlnaHQ6IFwiLCBcInB4O2JveC1zaGFkb3c6IFwiLCBcInB4IFwiLCBcInB4IFwiLCBcIiwgXCIsIFwicHggXCIsIFwicHggXCIsIFwifVxcbiAgICAgIDEwMCUge2JveC1zaGFkb3c6IFwiLCBcInB4IFwiLCBcInB4IFwiLCBcIiwgXCIsIFwicHggXCIsIFwicHggXCIsIFwifVxcbiAgICBcIl0sIFtcIlxcbiAgICAgIDAlIHtoZWlnaHQ6IFwiLCBcInB4O2JveC1zaGFkb3c6IFwiLCBcInB4IFwiLCBcInB4IFwiLCBcIiwgXCIsIFwicHggXCIsIFwicHggXCIsIFwifVxcbiAgICAgIDM1JSB7aGVpZ2h0OiBcIiwgXCI7Ym94LXNoYWRvdzogXCIsIFwicHggMCBcIiwgXCIsIFwiLCBcInB4IDAgXCIsIFwifVxcbiAgICAgIDcwJSB7aGVpZ2h0OiBcIiwgXCJweDtib3gtc2hhZG93OiBcIiwgXCJweCBcIiwgXCJweCBcIiwgXCIsIFwiLCBcInB4IFwiLCBcInB4IFwiLCBcIn1cXG4gICAgICAxMDAlIHtib3gtc2hhZG93OiBcIiwgXCJweCBcIiwgXCJweCBcIiwgXCIsIFwiLCBcInB4IFwiLCBcInB4IFwiLCBcIn1cXG4gICAgXCJdKSksIHRoaWNrbmVzcywgb2Zmc2V0LCBsYXQsIGNvbG9yLCAtb2Zmc2V0LCAtbGF0LCBjb2xvciwgaW5kZXhfMS5jc3NWYWx1ZShzaXplKSwgb2Zmc2V0LCBjb2xvciwgLW9mZnNldCwgY29sb3IsIHRoaWNrbmVzcywgb2Zmc2V0LCAtbGF0LCBjb2xvciwgLW9mZnNldCwgbGF0LCBjb2xvciwgb2Zmc2V0LCBsYXQsIGNvbG9yLCAtb2Zmc2V0LCAtbGF0LCBjb2xvcik7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnN0eWxlID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLCBzaXplID0gX2Euc2l6ZSwgc3BlZWRNdWx0aXBsaWVyID0gX2Euc3BlZWRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgdmFyIF9iID0gaW5kZXhfMS5wYXJzZUxlbmd0aEFuZFVuaXQoc2l6ZSksIHZhbHVlID0gX2IudmFsdWUsIHVuaXQgPSBfYi51bml0O1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzMgfHwgKHRlbXBsYXRlT2JqZWN0XzMgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgdG9wOiA1MCU7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgYm9yZGVyLXJhZGl1czogXCIsIFwiO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IG5vbmU7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyBpbmZpbml0ZTtcXG4gICAgXCJdLCBbXCJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgdG9wOiA1MCU7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgYm9yZGVyLXJhZGl1czogXCIsIFwiO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IG5vbmU7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyBpbmZpbml0ZTtcXG4gICAgXCJdKSksIFwiXCIgKyB2YWx1ZSAvIDUgKyB1bml0LCBcIlwiICsgdmFsdWUgLyA1ICsgdW5pdCwgXCJcIiArIHZhbHVlIC8gMTAgKyB1bml0LCBpID09PSAxID8gX3RoaXMuYmVmb3JlKCkgOiBfdGhpcy5hZnRlcigpLCAyIC8gc3BlZWRNdWx0aXBsaWVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMud3JhcHBlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzaXplID0gX3RoaXMucHJvcHMuc2l6ZTtcbiAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmNzcyh0ZW1wbGF0ZU9iamVjdF80IHx8ICh0ZW1wbGF0ZU9iamVjdF80ID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTY1ZGVnKTtcXG4gICAgXCJdLCBbXCJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNjVkZWcpO1xcbiAgICBcIl0pKSwgaW5kZXhfMS5jc3NWYWx1ZShzaXplKSwgaW5kZXhfMS5jc3NWYWx1ZShzaXplKSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTG9hZGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIGxvYWRpbmcgPSBfYS5sb2FkaW5nLCBjc3MgPSBfYS5jc3M7XG4gICAgICAgIHJldHVybiBsb2FkaW5nID8gKHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogW3RoaXMud3JhcHBlcigpLCBjc3NdIH0sXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUoMSkgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUoMikgfSkpKSA6IG51bGw7XG4gICAgfTtcbiAgICBMb2FkZXIuZGVmYXVsdFByb3BzID0gaW5kZXhfMS5zaXplRGVmYXVsdHMoNTApO1xuICAgIHJldHVybiBMb2FkZXI7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IExvYWRlcjtcbnZhciB0ZW1wbGF0ZU9iamVjdF8xLCB0ZW1wbGF0ZU9iamVjdF8yLCB0ZW1wbGF0ZU9iamVjdF8zLCB0ZW1wbGF0ZU9iamVjdF80O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19tYWtlVGVtcGxhdGVPYmplY3QgPSAodGhpcyAmJiB0aGlzLl9fbWFrZVRlbXBsYXRlT2JqZWN0KSB8fCBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICAgIHJldHVybiBjb29rZWQ7XG59O1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqIEBqc3gganN4ICovXG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciByZWFjdF8xID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0XCIpO1xudmFyIGhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIik7XG52YXIgbW9vbiA9IHJlYWN0XzEua2V5ZnJhbWVzKHRlbXBsYXRlT2JqZWN0XzEgfHwgKHRlbXBsYXRlT2JqZWN0XzEgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gIDEwMCUge3RyYW5zZm9ybTogcm90YXRlKDM2MGRlZyl9XFxuXCJdLCBbXCJcXG4gIDEwMCUge3RyYW5zZm9ybTogcm90YXRlKDM2MGRlZyl9XFxuXCJdKSkpO1xudmFyIExvYWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTG9hZGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExvYWRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm1vb25TaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNpemUgPSBfdGhpcy5wcm9wcy5zaXplO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gaGVscGVyc18xLnBhcnNlTGVuZ3RoQW5kVW5pdChzaXplKS52YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSAvIDc7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmJhbGxTdHlsZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfMiB8fCAodGVtcGxhdGVPYmplY3RfMiA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgXCJdLCBbXCJcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIFwiXSkpLCBoZWxwZXJzXzEuY3NzVmFsdWUoc2l6ZSksIGhlbHBlcnNfMS5jc3NWYWx1ZShzaXplKSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLndyYXBwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcywgc2l6ZSA9IF9hLnNpemUsIHNwZWVkTXVsdGlwbGllciA9IF9hLnNwZWVkTXVsdGlwbGllcjtcbiAgICAgICAgICAgIHZhciBfYiA9IGhlbHBlcnNfMS5wYXJzZUxlbmd0aEFuZFVuaXQoc2l6ZSksIHZhbHVlID0gX2IudmFsdWUsIHVuaXQgPSBfYi51bml0O1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzMgfHwgKHRlbXBsYXRlT2JqZWN0XzMgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIDBzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgXCJdLCBbXCJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIDBzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgXCJdKSksIFwiXCIgKyAodmFsdWUgKyBfdGhpcy5tb29uU2l6ZSgpICogMikgKyB1bml0LCBcIlwiICsgKHZhbHVlICsgX3RoaXMubW9vblNpemUoKSAqIDIpICsgdW5pdCwgbW9vbiwgMC42IC8gc3BlZWRNdWx0aXBsaWVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuYmFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLCBjb2xvciA9IF9hLmNvbG9yLCBzaXplID0gX2Euc2l6ZSwgc3BlZWRNdWx0aXBsaWVyID0gX2Euc3BlZWRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgdmFyIF9iID0gaGVscGVyc18xLnBhcnNlTGVuZ3RoQW5kVW5pdChzaXplKSwgdmFsdWUgPSBfYi52YWx1ZSwgdW5pdCA9IF9iLnVuaXQ7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfNCB8fCAodGVtcGxhdGVPYmplY3RfNCA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIFwiLCBcIjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiwgXCI7XFxuICAgICAgb3BhY2l0eTogMC44O1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IFwiLCBcIjtcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIDBzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgXCJdLCBbXCJcXG4gICAgICBcIiwgXCI7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogXCIsIFwiO1xcbiAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiBcIiwgXCI7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyAwcyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIFwiXSkpLCBfdGhpcy5iYWxsU3R5bGUoX3RoaXMubW9vblNpemUoKSksIGNvbG9yLCBcIlwiICsgKHZhbHVlIC8gMiAtIF90aGlzLm1vb25TaXplKCkgLyAyKSArIHVuaXQsIG1vb24sIDAuNiAvIHNwZWVkTXVsdGlwbGllcik7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmNpcmNsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLCBzaXplID0gX2Euc2l6ZSwgY29sb3IgPSBfYS5jb2xvcjtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGhlbHBlcnNfMS5wYXJzZUxlbmd0aEFuZFVuaXQoc2l6ZSkudmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfNSB8fCAodGVtcGxhdGVPYmplY3RfNSA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIFwiLCBcIjtcXG4gICAgICBib3JkZXI6IFwiLCBcInB4IHNvbGlkIFwiLCBcIjtcXG4gICAgICBvcGFjaXR5OiAwLjE7XFxuICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBcIl0sIFtcIlxcbiAgICAgIFwiLCBcIjtcXG4gICAgICBib3JkZXI6IFwiLCBcInB4IHNvbGlkIFwiLCBcIjtcXG4gICAgICBvcGFjaXR5OiAwLjE7XFxuICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBcIl0pKSwgX3RoaXMuYmFsbFN0eWxlKHZhbHVlKSwgX3RoaXMubW9vblNpemUoKSwgY29sb3IpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIExvYWRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBsb2FkaW5nID0gX2EubG9hZGluZywgY3NzID0gX2EuY3NzO1xuICAgICAgICByZXR1cm4gbG9hZGluZyA/IChyZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IFt0aGlzLndyYXBwZXIoKSwgY3NzXSB9LFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLmJhbGwoKSB9KSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5jaXJjbGUoKSB9KSkpIDogbnVsbDtcbiAgICB9O1xuICAgIExvYWRlci5kZWZhdWx0UHJvcHMgPSBoZWxwZXJzXzEuc2l6ZURlZmF1bHRzKDYwKTtcbiAgICByZXR1cm4gTG9hZGVyO1xufShSZWFjdC5QdXJlQ29tcG9uZW50KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBMb2FkZXI7XG52YXIgdGVtcGxhdGVPYmplY3RfMSwgdGVtcGxhdGVPYmplY3RfMiwgdGVtcGxhdGVPYmplY3RfMywgdGVtcGxhdGVPYmplY3RfNCwgdGVtcGxhdGVPYmplY3RfNTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fbWFrZVRlbXBsYXRlT2JqZWN0ID0gKHRoaXMgJiYgdGhpcy5fX21ha2VUZW1wbGF0ZU9iamVjdCkgfHwgZnVuY3Rpb24gKGNvb2tlZCwgcmF3KSB7XG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cbiAgICByZXR1cm4gY29va2VkO1xufTtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKiBAanN4IGpzeCAqL1xudmFyIFJlYWN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3RfMSA9IHJlcXVpcmUoXCJAZW1vdGlvbi9yZWFjdFwiKTtcbnZhciBoZWxwZXJzXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzXCIpO1xudmFyIHBhY21hbiA9IFtcbiAgICByZWFjdF8xLmtleWZyYW1lcyh0ZW1wbGF0ZU9iamVjdF8xIHx8ICh0ZW1wbGF0ZU9iamVjdF8xID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgIDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKX1cXG4gICAgNTAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgtNDRkZWcpfVxcbiAgXCJdLCBbXCJcXG4gICAgMCUge3RyYW5zZm9ybTogcm90YXRlKDBkZWcpfVxcbiAgICA1MCUge3RyYW5zZm9ybTogcm90YXRlKC00NGRlZyl9XFxuICBcIl0pKSksXG4gICAgcmVhY3RfMS5rZXlmcmFtZXModGVtcGxhdGVPYmplY3RfMiB8fCAodGVtcGxhdGVPYmplY3RfMiA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMGRlZyl9XFxuICAgIDUwJSB7dHJhbnNmb3JtOiByb3RhdGUoNDRkZWcpfVxcbiAgXCJdLCBbXCJcXG4gICAgMCUge3RyYW5zZm9ybTogcm90YXRlKDBkZWcpfVxcbiAgICA1MCUge3RyYW5zZm9ybTogcm90YXRlKDQ0ZGVnKX1cXG4gIFwiXSkpKVxuXTtcbnZhciBMb2FkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExvYWRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMb2FkZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5iYWxsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNpemUgPSBfdGhpcy5wcm9wcy5zaXplO1xuICAgICAgICAgICAgdmFyIF9hID0gaGVscGVyc18xLnBhcnNlTGVuZ3RoQW5kVW5pdChzaXplKSwgdmFsdWUgPSBfYS52YWx1ZSwgdW5pdCA9IF9hLnVuaXQ7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5rZXlmcmFtZXModGVtcGxhdGVPYmplY3RfMyB8fCAodGVtcGxhdGVPYmplY3RfMyA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIDc1JSB7b3BhY2l0eTogMC43fVxcbiAgICAgIDEwMCUge3RyYW5zZm9ybTogdHJhbnNsYXRlKFwiLCBcIiwgXCIsIFwiKX1cXG4gICAgXCJdLCBbXCJcXG4gICAgICA3NSUge29wYWNpdHk6IDAuN31cXG4gICAgICAxMDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZShcIiwgXCIsIFwiLCBcIil9XFxuICAgIFwiXSkpLCBcIlwiICsgLTQgKiB2YWx1ZSArIHVuaXQsIFwiXCIgKyAtdmFsdWUgLyA0ICsgdW5pdCk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmJhbGxTdHlsZSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcywgY29sb3IgPSBfYS5jb2xvciwgbWFyZ2luID0gX2EubWFyZ2luLCBzaXplID0gX2Euc2l6ZSwgc3BlZWRNdWx0aXBsaWVyID0gX2Euc3BlZWRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgdmFyIF9iID0gaGVscGVyc18xLnBhcnNlTGVuZ3RoQW5kVW5pdChzaXplKSwgdmFsdWUgPSBfYi52YWx1ZSwgdW5pdCA9IF9iLnVuaXQ7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfNCB8fCAodGVtcGxhdGVPYmplY3RfNCA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogXCIsIFwiO1xcbiAgICAgIG1hcmdpbjogXCIsIFwiO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgXCIsIFwiKTtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiBcIiwgXCI7XFxuICAgICAgbGVmdDogXCIsIFwiO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiIFwiLCBcInMgXCIsIFwicyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gICAgXCJdLCBbXCJcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IFwiLCBcIjtcXG4gICAgICBtYXJnaW46IFwiLCBcIjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIFwiLCBcIik7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogXCIsIFwiO1xcbiAgICAgIGxlZnQ6IFwiLCBcIjtcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIFwiLCBcInMgaW5maW5pdGUgbGluZWFyO1xcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAgIFwiXSkpLCBcIlwiICsgdmFsdWUgLyAzICsgdW5pdCwgXCJcIiArIHZhbHVlIC8gMyArIHVuaXQsIGNvbG9yLCBoZWxwZXJzXzEuY3NzVmFsdWUobWFyZ2luKSwgXCJcIiArIC12YWx1ZSAvIDQgKyB1bml0LCBcIlwiICsgdmFsdWUgKyB1bml0LCBcIlwiICsgdmFsdWUgKiA0ICsgdW5pdCwgX3RoaXMuYmFsbCgpLCAxIC8gc3BlZWRNdWx0aXBsaWVyLCBpICogMC4yNSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnMxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGhlbHBlcnNfMS5jc3NWYWx1ZShfdGhpcy5wcm9wcy5zaXplKSArIFwiIHNvbGlkIHRyYW5zcGFyZW50XCI7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnMyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvbG9yID0gX3RoaXMucHJvcHMuY29sb3I7XG4gICAgICAgICAgICByZXR1cm4gaGVscGVyc18xLmNzc1ZhbHVlKF90aGlzLnByb3BzLnNpemUpICsgXCIgc29saWQgXCIgKyBjb2xvcjtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMucGFjbWFuU3R5bGUgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsIHNpemUgPSBfYS5zaXplLCBzcGVlZE11bHRpcGxpZXIgPSBfYS5zcGVlZE11bHRpcGxpZXI7XG4gICAgICAgICAgICB2YXIgczEgPSBfdGhpcy5zMSgpO1xuICAgICAgICAgICAgdmFyIHMyID0gX3RoaXMuczIoKTtcbiAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmNzcyh0ZW1wbGF0ZU9iamVjdF81IHx8ICh0ZW1wbGF0ZU9iamVjdF81ID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgd2lkdGg6IDA7XFxuICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgIGJvcmRlci1yaWdodDogXCIsIFwiO1xcbiAgICAgIGJvcmRlci10b3A6IFwiLCBcIjtcXG4gICAgICBib3JkZXItbGVmdDogXCIsIFwiO1xcbiAgICAgIGJvcmRlci1ib3R0b206IFwiLCBcIjtcXG4gICAgICBib3JkZXItcmFkaXVzOiBcIiwgXCI7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiIFwiLCBcInMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gICAgXCJdLCBbXCJcXG4gICAgICB3aWR0aDogMDtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiBcIiwgXCI7XFxuICAgICAgYm9yZGVyLXRvcDogXCIsIFwiO1xcbiAgICAgIGJvcmRlci1sZWZ0OiBcIiwgXCI7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogXCIsIFwiO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IFwiLCBcIjtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICBcIl0pKSwgczEsIGkgPT09IDAgPyBzMSA6IHMyLCBzMiwgaSA9PT0gMCA/IHMyIDogczEsIGhlbHBlcnNfMS5jc3NWYWx1ZShzaXplKSwgcGFjbWFuW2ldLCAwLjggLyBzcGVlZE11bHRpcGxpZXIpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy53cmFwcGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzYgfHwgKHRlbXBsYXRlT2JqZWN0XzYgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgZm9udC1zaXplOiAwO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgIFwiXSwgW1wiXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGZvbnQtc2l6ZTogMDtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICBcIl0pKSwgaGVscGVyc18xLmNzc1ZhbHVlKF90aGlzLnByb3BzLnNpemUpLCBoZWxwZXJzXzEuY3NzVmFsdWUoX3RoaXMucHJvcHMuc2l6ZSkpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5wYWMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5wYWNtYW5TdHlsZSgwKTsgfTtcbiAgICAgICAgX3RoaXMubWFuID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucGFjbWFuU3R5bGUoMSk7IH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTG9hZGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIGxvYWRpbmcgPSBfYS5sb2FkaW5nLCBjc3MgPSBfYS5jc3M7XG4gICAgICAgIHJldHVybiBsb2FkaW5nID8gKHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogW3RoaXMud3JhcHBlcigpLCBjc3NdIH0sXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMucGFjKCkgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMubWFuKCkgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuYmFsbFN0eWxlKDIpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLmJhbGxTdHlsZSgzKSB9KSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5iYWxsU3R5bGUoNCkgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuYmFsbFN0eWxlKDUpIH0pKSkgOiBudWxsO1xuICAgIH07XG4gICAgTG9hZGVyLmRlZmF1bHRQcm9wcyA9IGhlbHBlcnNfMS5zaXplTWFyZ2luRGVmYXVsdHMoMjUpO1xuICAgIHJldHVybiBMb2FkZXI7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IExvYWRlcjtcbnZhciB0ZW1wbGF0ZU9iamVjdF8xLCB0ZW1wbGF0ZU9iamVjdF8yLCB0ZW1wbGF0ZU9iamVjdF8zLCB0ZW1wbGF0ZU9iamVjdF80LCB0ZW1wbGF0ZU9iamVjdF81LCB0ZW1wbGF0ZU9iamVjdF82O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19tYWtlVGVtcGxhdGVPYmplY3QgPSAodGhpcyAmJiB0aGlzLl9fbWFrZVRlbXBsYXRlT2JqZWN0KSB8fCBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICAgIHJldHVybiBjb29rZWQ7XG59O1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqIEBqc3gganN4ICovXG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciByZWFjdF8xID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0XCIpO1xudmFyIGhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIik7XG4vLyAxLjUgNC41IDcuNVxudmFyIGRpc3RhbmNlID0gWzEsIDMsIDVdO1xudmFyIHByb3BhZ2F0ZSA9IFtcbiAgICByZWFjdF8xLmtleWZyYW1lcyh0ZW1wbGF0ZU9iamVjdF8xIHx8ICh0ZW1wbGF0ZU9iamVjdF8xID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgMjUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLVwiLCBcInJlbSkgc2NhbGUoMC43NSl9XFxuICAgICAgNTAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLVwiLCBcInJlbSkgc2NhbGUoMC42KX1cXG4gICAgICA3NSUge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgtXCIsIFwicmVtKSBzY2FsZSgwLjUpfVxcbiAgICAgIDk1JSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pIHNjYWxlKDEpfVxcbiAgICBcIl0sIFtcIlxcbiAgICAgIDI1JSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC1cIiwgXCJyZW0pIHNjYWxlKDAuNzUpfVxcbiAgICAgIDUwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC1cIiwgXCJyZW0pIHNjYWxlKDAuNil9XFxuICAgICAgNzUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLVwiLCBcInJlbSkgc2NhbGUoMC41KX1cXG4gICAgICA5NSUge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgwcmVtKSBzY2FsZSgxKX1cXG4gICAgXCJdKSksIGRpc3RhbmNlWzBdLCBkaXN0YW5jZVsxXSwgZGlzdGFuY2VbMl0pLFxuICAgIHJlYWN0XzEua2V5ZnJhbWVzKHRlbXBsYXRlT2JqZWN0XzIgfHwgKHRlbXBsYXRlT2JqZWN0XzIgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICAyNSUge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgtXCIsIFwicmVtKSBzY2FsZSgwLjc1KX1cXG4gICAgICA1MCUge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgtXCIsIFwicmVtKSBzY2FsZSgwLjYpfVxcbiAgICAgIDc1JSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC1cIiwgXCJyZW0pIHNjYWxlKDAuNil9XFxuICAgICAgOTUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSkgc2NhbGUoMSl9XFxuICAgIFwiXSwgW1wiXFxuICAgICAgMjUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLVwiLCBcInJlbSkgc2NhbGUoMC43NSl9XFxuICAgICAgNTAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLVwiLCBcInJlbSkgc2NhbGUoMC42KX1cXG4gICAgICA3NSUge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgtXCIsIFwicmVtKSBzY2FsZSgwLjYpfVxcbiAgICAgIDk1JSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pIHNjYWxlKDEpfVxcbiAgICBcIl0pKSwgZGlzdGFuY2VbMF0sIGRpc3RhbmNlWzFdLCBkaXN0YW5jZVsxXSksXG4gICAgcmVhY3RfMS5rZXlmcmFtZXModGVtcGxhdGVPYmplY3RfMyB8fCAodGVtcGxhdGVPYmplY3RfMyA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIDI1JSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC1cIiwgXCJyZW0pIHNjYWxlKDAuNzUpfVxcbiAgICAgIDc1JSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC1cIiwgXCJyZW0pIHNjYWxlKDAuNzUpfVxcbiAgICAgIDk1JSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pIHNjYWxlKDEpfVxcbiAgICBcIl0sIFtcIlxcbiAgICAgIDI1JSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC1cIiwgXCJyZW0pIHNjYWxlKDAuNzUpfVxcbiAgICAgIDc1JSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC1cIiwgXCJyZW0pIHNjYWxlKDAuNzUpfVxcbiAgICAgIDk1JSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pIHNjYWxlKDEpfVxcbiAgICBcIl0pKSwgZGlzdGFuY2VbMF0sIGRpc3RhbmNlWzBdKSxcbiAgICByZWFjdF8xLmtleWZyYW1lcyh0ZW1wbGF0ZU9iamVjdF80IHx8ICh0ZW1wbGF0ZU9iamVjdF80ID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgMjUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoXCIsIFwicmVtKSBzY2FsZSgwLjc1KX1cXG4gICAgICA3NSUge3RyYW5zZm9ybTogdHJhbnNsYXRlWChcIiwgXCJyZW0pIHNjYWxlKDAuNzUpfVxcbiAgICAgIDk1JSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pIHNjYWxlKDEpfVxcbiAgICBcIl0sIFtcIlxcbiAgICAgIDI1JSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKFwiLCBcInJlbSkgc2NhbGUoMC43NSl9XFxuICAgICAgNzUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoXCIsIFwicmVtKSBzY2FsZSgwLjc1KX1cXG4gICAgICA5NSUge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgwcmVtKSBzY2FsZSgxKX1cXG4gICAgXCJdKSksIGRpc3RhbmNlWzBdLCBkaXN0YW5jZVswXSksXG4gICAgcmVhY3RfMS5rZXlmcmFtZXModGVtcGxhdGVPYmplY3RfNSB8fCAodGVtcGxhdGVPYmplY3RfNSA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIDI1JSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKFwiLCBcInJlbSkgc2NhbGUoMC43NSl9XFxuICAgICAgNTAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoXCIsIFwicmVtKSBzY2FsZSgwLjYpfVxcbiAgICAgIDc1JSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKFwiLCBcInJlbSkgc2NhbGUoMC42KX1cXG4gICAgICA5NSUge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgwcmVtKSBzY2FsZSgxKX1cXG4gICAgXCJdLCBbXCJcXG4gICAgICAyNSUge3RyYW5zZm9ybTogdHJhbnNsYXRlWChcIiwgXCJyZW0pIHNjYWxlKDAuNzUpfVxcbiAgICAgIDUwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKFwiLCBcInJlbSkgc2NhbGUoMC42KX1cXG4gICAgICA3NSUge3RyYW5zZm9ybTogdHJhbnNsYXRlWChcIiwgXCJyZW0pIHNjYWxlKDAuNil9XFxuICAgICAgOTUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSkgc2NhbGUoMSl9XFxuICAgIFwiXSkpLCBkaXN0YW5jZVswXSwgZGlzdGFuY2VbMV0sIGRpc3RhbmNlWzFdKSxcbiAgICByZWFjdF8xLmtleWZyYW1lcyh0ZW1wbGF0ZU9iamVjdF82IHx8ICh0ZW1wbGF0ZU9iamVjdF82ID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgMjUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoXCIsIFwicmVtKSBzY2FsZSgwLjc1KX1cXG4gICAgICA1MCUge3RyYW5zZm9ybTogdHJhbnNsYXRlWChcIiwgXCJyZW0pIHNjYWxlKDAuNil9XFxuICAgICAgNzUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoXCIsIFwicmVtKSBzY2FsZSgwLjUpfVxcbiAgICAgIDk1JSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pIHNjYWxlKDEpfVxcbiAgICBcIl0sIFtcIlxcbiAgICAgIDI1JSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKFwiLCBcInJlbSkgc2NhbGUoMC43NSl9XFxuICAgICAgNTAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoXCIsIFwicmVtKSBzY2FsZSgwLjYpfVxcbiAgICAgIDc1JSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKFwiLCBcInJlbSkgc2NhbGUoMC41KX1cXG4gICAgICA5NSUge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgwcmVtKSBzY2FsZSgxKX1cXG4gICAgXCJdKSksIGRpc3RhbmNlWzBdLCBkaXN0YW5jZVsxXSwgZGlzdGFuY2VbMl0pXG5dO1xudmFyIExvYWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTG9hZGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExvYWRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnN0eWxlID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLCBzaXplID0gX2Euc2l6ZSwgY29sb3IgPSBfYS5jb2xvciwgc3BlZWRNdWx0aXBsaWVyID0gX2Euc3BlZWRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgdmFyIF9iID0gaGVscGVyc18xLnBhcnNlTGVuZ3RoQW5kVW5pdChzaXplKSwgdmFsdWUgPSBfYi52YWx1ZSwgdW5pdCA9IF9iLnVuaXQ7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfNyB8fCAodGVtcGxhdGVPYmplY3RfNyA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBmb250LXNpemU6IFwiLCBcIjtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIGJhY2tncm91bmQ6IFwiLCBcIjtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyBpbmZpbml0ZTtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgXCJdLCBbXCJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgZm9udC1zaXplOiBcIiwgXCI7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBiYWNrZ3JvdW5kOiBcIiwgXCI7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiIFwiLCBcInMgaW5maW5pdGU7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIFwiXSkpLCBcIlwiICsgdmFsdWUgLyAzICsgdW5pdCwgXCJcIiArIHZhbHVlICsgdW5pdCwgXCJcIiArIHZhbHVlICsgdW5pdCwgY29sb3IsIHByb3BhZ2F0ZVtpXSwgMS41IC8gc3BlZWRNdWx0aXBsaWVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMud3JhcHBlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmNzcyh0ZW1wbGF0ZU9iamVjdF84IHx8ICh0ZW1wbGF0ZU9iamVjdF84ID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBcIl0sIFtcIlxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgXCJdKSkpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIExvYWRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBsb2FkaW5nID0gX2EubG9hZGluZywgY3NzID0gX2EuY3NzO1xuICAgICAgICByZXR1cm4gbG9hZGluZyA/IChyZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IFt0aGlzLndyYXBwZXIoKSwgY3NzXSB9LFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDApIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDEpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDIpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDMpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDQpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDUpIH0pKSkgOiBudWxsO1xuICAgIH07XG4gICAgTG9hZGVyLmRlZmF1bHRQcm9wcyA9IGhlbHBlcnNfMS5zaXplRGVmYXVsdHMoMTUpO1xuICAgIHJldHVybiBMb2FkZXI7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IExvYWRlcjtcbnZhciB0ZW1wbGF0ZU9iamVjdF8xLCB0ZW1wbGF0ZU9iamVjdF8yLCB0ZW1wbGF0ZU9iamVjdF8zLCB0ZW1wbGF0ZU9iamVjdF80LCB0ZW1wbGF0ZU9iamVjdF81LCB0ZW1wbGF0ZU9iamVjdF82LCB0ZW1wbGF0ZU9iamVjdF83LCB0ZW1wbGF0ZU9iamVjdF84O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19tYWtlVGVtcGxhdGVPYmplY3QgPSAodGhpcyAmJiB0aGlzLl9fbWFrZVRlbXBsYXRlT2JqZWN0KSB8fCBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICAgIHJldHVybiBjb29rZWQ7XG59O1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqIEBqc3gganN4ICovXG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciByZWFjdF8xID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0XCIpO1xudmFyIGhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIik7XG52YXIgcHVmZiA9IFtcbiAgICByZWFjdF8xLmtleWZyYW1lcyh0ZW1wbGF0ZU9iamVjdF8xIHx8ICh0ZW1wbGF0ZU9iamVjdF8xID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAwJSAge3RyYW5zZm9ybTogc2NhbGUoMCl9XFxuICAxMDAlIHt0cmFuc2Zvcm06IHNjYWxlKDEuMCl9XFxuXCJdLCBbXCJcXG4gIDAlICB7dHJhbnNmb3JtOiBzY2FsZSgwKX1cXG4gIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMS4wKX1cXG5cIl0pKSksXG4gICAgcmVhY3RfMS5rZXlmcmFtZXModGVtcGxhdGVPYmplY3RfMiB8fCAodGVtcGxhdGVPYmplY3RfMiA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgMCUgIHtvcGFjaXR5OiAxfVxcbiAgMTAwJSB7b3BhY2l0eTogMH1cXG5cIl0sIFtcIlxcbiAgMCUgIHtvcGFjaXR5OiAxfVxcbiAgMTAwJSB7b3BhY2l0eTogMH1cXG5cIl0pKSlcbl07XG52YXIgTG9hZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMb2FkZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTG9hZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZ2V0U2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5zaXplO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5zdHlsZSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcywgY29sb3IgPSBfYS5jb2xvciwgc3BlZWRNdWx0aXBsaWVyID0gX2Euc3BlZWRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzMgfHwgKHRlbXBsYXRlT2JqZWN0XzMgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBib3JkZXI6IHRoaWNrIHNvbGlkIFwiLCBcIjtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiLCBcIiwgXCI7XFxuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiBcIiwgXCJzO1xcbiAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSksIGN1YmljLWJlemllcigwLjMsIDAuNjEsIDAuMzU1LCAxKTtcXG4gICAgICBhbmltYXRpb24tZGVsYXk6IFwiLCBcIjtcXG4gICAgXCJdLCBbXCJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBib3JkZXI6IHRoaWNrIHNvbGlkIFwiLCBcIjtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiLCBcIiwgXCI7XFxuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiBcIiwgXCJzO1xcbiAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSksIGN1YmljLWJlemllcigwLjMsIDAuNjEsIDAuMzU1LCAxKTtcXG4gICAgICBhbmltYXRpb24tZGVsYXk6IFwiLCBcIjtcXG4gICAgXCJdKSksIGhlbHBlcnNfMS5jc3NWYWx1ZShfdGhpcy5nZXRTaXplKCkpLCBoZWxwZXJzXzEuY3NzVmFsdWUoX3RoaXMuZ2V0U2l6ZSgpKSwgY29sb3IsIHB1ZmZbMF0sIHB1ZmZbMV0sIDIgLyBzcGVlZE11bHRpcGxpZXIsIGkgPT09IDEgPyBcIi0xc1wiIDogXCIwc1wiKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMud3JhcHBlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmNzcyh0ZW1wbGF0ZU9iamVjdF80IHx8ICh0ZW1wbGF0ZU9iamVjdF80ID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgIFwiXSwgW1wiXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgIFwiXSkpLCBoZWxwZXJzXzEuY3NzVmFsdWUoX3RoaXMuZ2V0U2l6ZSgpKSwgaGVscGVyc18xLmNzc1ZhbHVlKF90aGlzLmdldFNpemUoKSkpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIExvYWRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBsb2FkaW5nID0gX2EubG9hZGluZywgY3NzID0gX2EuY3NzO1xuICAgICAgICByZXR1cm4gbG9hZGluZyA/IChyZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IFt0aGlzLndyYXBwZXIoKSwgY3NzXSB9LFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDEpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDIpIH0pKSkgOiBudWxsO1xuICAgIH07XG4gICAgTG9hZGVyLmRlZmF1bHRQcm9wcyA9IGhlbHBlcnNfMS5zaXplRGVmYXVsdHMoNjApO1xuICAgIHJldHVybiBMb2FkZXI7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IExvYWRlcjtcbnZhciB0ZW1wbGF0ZU9iamVjdF8xLCB0ZW1wbGF0ZU9iamVjdF8yLCB0ZW1wbGF0ZU9iamVjdF8zLCB0ZW1wbGF0ZU9iamVjdF80O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19tYWtlVGVtcGxhdGVPYmplY3QgPSAodGhpcyAmJiB0aGlzLl9fbWFrZVRlbXBsYXRlT2JqZWN0KSB8fCBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICAgIHJldHVybiBjb29rZWQ7XG59O1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqIEBqc3gganN4ICovXG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciByZWFjdF8xID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0XCIpO1xudmFyIGhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIik7XG52YXIgcHVsc2UgPSByZWFjdF8xLmtleWZyYW1lcyh0ZW1wbGF0ZU9iamVjdF8xIHx8ICh0ZW1wbGF0ZU9iamVjdF8xID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAwJSB7dHJhbnNmb3JtOiBzY2FsZSgxKTtvcGFjaXR5OiAxfVxcbiAgNDUlIHt0cmFuc2Zvcm06IHNjYWxlKDAuMSk7b3BhY2l0eTogMC43fVxcbiAgODAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpO29wYWNpdHk6IDF9XFxuXCJdLCBbXCJcXG4gIDAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpO29wYWNpdHk6IDF9XFxuICA0NSUge3RyYW5zZm9ybTogc2NhbGUoMC4xKTtvcGFjaXR5OiAwLjd9XFxuICA4MCUge3RyYW5zZm9ybTogc2NhbGUoMSk7b3BhY2l0eTogMX1cXG5cIl0pKSk7XG52YXIgTG9hZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMb2FkZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTG9hZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3R5bGUgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsIGNvbG9yID0gX2EuY29sb3IsIHNpemUgPSBfYS5zaXplLCBtYXJnaW4gPSBfYS5tYXJnaW4sIHNwZWVkTXVsdGlwbGllciA9IF9hLnNwZWVkTXVsdGlwbGllcjtcbiAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmNzcyh0ZW1wbGF0ZU9iamVjdF8yIHx8ICh0ZW1wbGF0ZU9iamVjdF8yID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogXCIsIFwiO1xcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgbWFyZ2luOiBcIiwgXCI7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyBcIiwgXCJzIGluZmluaXRlXFxuICAgICAgICBjdWJpYy1iZXppZXIoMC4yLCAwLjY4LCAwLjE4LCAxLjA4KTtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICBcIl0sIFtcIlxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IFwiLCBcIjtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIG1hcmdpbjogXCIsIFwiO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiIFwiLCBcInMgXCIsIFwicyBpbmZpbml0ZVxcbiAgICAgICAgY3ViaWMtYmV6aWVyKDAuMiwgMC42OCwgMC4xOCwgMS4wOCk7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gICAgXCJdKSksIGNvbG9yLCBoZWxwZXJzXzEuY3NzVmFsdWUoc2l6ZSksIGhlbHBlcnNfMS5jc3NWYWx1ZShzaXplKSwgaGVscGVyc18xLmNzc1ZhbHVlKG1hcmdpbiksIHB1bHNlLCAwLjc1IC8gc3BlZWRNdWx0aXBsaWVyLCAoaSAqIDAuMTIpIC8gc3BlZWRNdWx0aXBsaWVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBMb2FkZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgbG9hZGluZyA9IF9hLmxvYWRpbmcsIGNzcyA9IF9hLmNzcztcbiAgICAgICAgcmV0dXJuIGxvYWRpbmcgPyAocmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiBbY3NzXSB9LFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDEpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDIpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDMpIH0pKSkgOiBudWxsO1xuICAgIH07XG4gICAgTG9hZGVyLmRlZmF1bHRQcm9wcyA9IGhlbHBlcnNfMS5zaXplTWFyZ2luRGVmYXVsdHMoMTUpO1xuICAgIHJldHVybiBMb2FkZXI7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IExvYWRlcjtcbnZhciB0ZW1wbGF0ZU9iamVjdF8xLCB0ZW1wbGF0ZU9iamVjdF8yO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19tYWtlVGVtcGxhdGVPYmplY3QgPSAodGhpcyAmJiB0aGlzLl9fbWFrZVRlbXBsYXRlT2JqZWN0KSB8fCBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICAgIHJldHVybiBjb29rZWQ7XG59O1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqIEBqc3gganN4ICovXG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciByZWFjdF8xID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0XCIpO1xudmFyIGhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIik7XG52YXIgcmlnaHQgPSByZWFjdF8xLmtleWZyYW1lcyh0ZW1wbGF0ZU9iamVjdF8xIHx8ICh0ZW1wbGF0ZU9iamVjdF8xID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAwJSB7dHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKX1cXG4gIDEwMCUge3RyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpIHJvdGF0ZVkoMzYwZGVnKSByb3RhdGVaKDM2MGRlZyl9XFxuXCJdLCBbXCJcXG4gIDAlIHt0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpfVxcbiAgMTAwJSB7dHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZykgcm90YXRlWSgzNjBkZWcpIHJvdGF0ZVooMzYwZGVnKX1cXG5cIl0pKSk7XG52YXIgbGVmdCA9IHJlYWN0XzEua2V5ZnJhbWVzKHRlbXBsYXRlT2JqZWN0XzIgfHwgKHRlbXBsYXRlT2JqZWN0XzIgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gIDAlIHt0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpfVxcbiAgMTAwJSB7dHJhbnNmb3JtOiByb3RhdGVYKDM2MGRlZykgcm90YXRlWSgxODBkZWcpIHJvdGF0ZVooMzYwZGVnKX1cXG5cIl0sIFtcIlxcbiAgMCUge3RyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyl9XFxuICAxMDAlIHt0cmFuc2Zvcm06IHJvdGF0ZVgoMzYwZGVnKSByb3RhdGVZKDE4MGRlZykgcm90YXRlWigzNjBkZWcpfVxcblwiXSkpKTtcbnZhciBMb2FkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExvYWRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMb2FkZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5nZXRTaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnByb3BzLnNpemU7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnN0eWxlID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLCBjb2xvciA9IF9hLmNvbG9yLCBzcGVlZE11bHRpcGxpZXIgPSBfYS5zcGVlZE11bHRpcGxpZXI7XG4gICAgICAgICAgICB2YXIgX2IgPSBoZWxwZXJzXzEucGFyc2VMZW5ndGhBbmRVbml0KF90aGlzLmdldFNpemUoKSksIHZhbHVlID0gX2IudmFsdWUsIHVuaXQgPSBfYi51bml0O1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzMgfHwgKHRlbXBsYXRlT2JqZWN0XzMgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBib3JkZXI6IFwiLCBcIiBzb2xpZCBcIiwgXCI7XFxuICAgICAgb3BhY2l0eTogMC40O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgICAgcGVyc3BlY3RpdmU6IDgwMHB4O1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiIFwiLCBcInMgMHMgaW5maW5pdGUgbGluZWFyO1xcbiAgICBcIl0sIFtcIlxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIGJvcmRlcjogXCIsIFwiIHNvbGlkIFwiLCBcIjtcXG4gICAgICBvcGFjaXR5OiAwLjQ7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgICBwZXJzcGVjdGl2ZTogODAwcHg7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyAwcyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgIFwiXSkpLCBcIlwiICsgdmFsdWUgKyB1bml0LCBcIlwiICsgdmFsdWUgKyB1bml0LCBcIlwiICsgdmFsdWUgLyAxMCArIHVuaXQsIGNvbG9yLCBpID09PSAxID8gcmlnaHQgOiBsZWZ0LCAyIC8gc3BlZWRNdWx0aXBsaWVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMud3JhcHBlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmNzcyh0ZW1wbGF0ZU9iamVjdF80IHx8ICh0ZW1wbGF0ZU9iamVjdF80ID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIFwiXSwgW1wiXFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIFwiXSkpLCBoZWxwZXJzXzEuY3NzVmFsdWUoX3RoaXMuZ2V0U2l6ZSgpKSwgaGVscGVyc18xLmNzc1ZhbHVlKF90aGlzLmdldFNpemUoKSkpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIExvYWRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBsb2FkaW5nID0gX2EubG9hZGluZywgY3NzID0gX2EuY3NzO1xuICAgICAgICByZXR1cm4gbG9hZGluZyA/IChyZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IFt0aGlzLndyYXBwZXIoKSwgY3NzXSB9LFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDEpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDIpIH0pKSkgOiBudWxsO1xuICAgIH07XG4gICAgTG9hZGVyLmRlZmF1bHRQcm9wcyA9IGhlbHBlcnNfMS5zaXplRGVmYXVsdHMoNjApO1xuICAgIHJldHVybiBMb2FkZXI7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IExvYWRlcjtcbnZhciB0ZW1wbGF0ZU9iamVjdF8xLCB0ZW1wbGF0ZU9iamVjdF8yLCB0ZW1wbGF0ZU9iamVjdF8zLCB0ZW1wbGF0ZU9iamVjdF80O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19tYWtlVGVtcGxhdGVPYmplY3QgPSAodGhpcyAmJiB0aGlzLl9fbWFrZVRlbXBsYXRlT2JqZWN0KSB8fCBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICAgIHJldHVybiBjb29rZWQ7XG59O1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqIEBqc3gganN4ICovXG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciByZWFjdF8xID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0XCIpO1xudmFyIGhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIik7XG52YXIgcmlzZUFtb3VudCA9IDMwO1xudmFyIGV2ZW4gPSByZWFjdF8xLmtleWZyYW1lcyh0ZW1wbGF0ZU9iamVjdF8xIHx8ICh0ZW1wbGF0ZU9iamVjdF8xID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAwJSB7dHJhbnNmb3JtOiBzY2FsZSgxLjEpfVxcbiAgMjUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLVwiLCBcInB4KX1cXG4gIDUwJSB7dHJhbnNmb3JtOiBzY2FsZSgwLjQpfVxcbiAgNzUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoXCIsIFwicHgpfVxcbiAgMTAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEuMCl9XFxuXCJdLCBbXCJcXG4gIDAlIHt0cmFuc2Zvcm06IHNjYWxlKDEuMSl9XFxuICAyNSUge3RyYW5zZm9ybTogdHJhbnNsYXRlWSgtXCIsIFwicHgpfVxcbiAgNTAlIHt0cmFuc2Zvcm06IHNjYWxlKDAuNCl9XFxuICA3NSUge3RyYW5zZm9ybTogdHJhbnNsYXRlWShcIiwgXCJweCl9XFxuICAxMDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMS4wKX1cXG5cIl0pKSwgcmlzZUFtb3VudCwgcmlzZUFtb3VudCk7XG52YXIgb2RkID0gcmVhY3RfMS5rZXlmcmFtZXModGVtcGxhdGVPYmplY3RfMiB8fCAodGVtcGxhdGVPYmplY3RfMiA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgMCUge3RyYW5zZm9ybTogc2NhbGUoMC40KX1cXG4gIDI1JSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKFwiLCBcInB4KX1cXG4gIDUwJSB7dHJhbnNmb3JtOiBzY2FsZSgxLjEpfVxcbiAgNzUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoXCIsIFwicHgpfVxcbiAgMTAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDAuNzUpfVxcblwiXSwgW1wiXFxuICAwJSB7dHJhbnNmb3JtOiBzY2FsZSgwLjQpfVxcbiAgMjUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoXCIsIFwicHgpfVxcbiAgNTAlIHt0cmFuc2Zvcm06IHNjYWxlKDEuMSl9XFxuICA3NSUge3RyYW5zZm9ybTogdHJhbnNsYXRlWShcIiwgXCJweCl9XFxuICAxMDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMC43NSl9XFxuXCJdKSksIHJpc2VBbW91bnQsIC1yaXNlQW1vdW50KTtcbnZhciBMb2FkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExvYWRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMb2FkZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zdHlsZSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcywgY29sb3IgPSBfYS5jb2xvciwgc2l6ZSA9IF9hLnNpemUsIG1hcmdpbiA9IF9hLm1hcmdpbiwgc3BlZWRNdWx0aXBsaWVyID0gX2Euc3BlZWRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzMgfHwgKHRlbXBsYXRlT2JqZWN0XzMgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiwgXCI7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBtYXJnaW46IFwiLCBcIjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIDBzIGluZmluaXRlIGN1YmljLWJlemllcigwLjE1LCAwLjQ2LCAwLjksIDAuNik7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gICAgXCJdLCBbXCJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiwgXCI7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBtYXJnaW46IFwiLCBcIjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIDBzIGluZmluaXRlIGN1YmljLWJlemllcigwLjE1LCAwLjQ2LCAwLjksIDAuNik7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gICAgXCJdKSksIGNvbG9yLCBoZWxwZXJzXzEuY3NzVmFsdWUoc2l6ZSksIGhlbHBlcnNfMS5jc3NWYWx1ZShzaXplKSwgaGVscGVyc18xLmNzc1ZhbHVlKG1hcmdpbiksIGkgJSAyID09PSAwID8gZXZlbiA6IG9kZCwgMSAvIHNwZWVkTXVsdGlwbGllcik7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTG9hZGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIGxvYWRpbmcgPSBfYS5sb2FkaW5nLCBjc3MgPSBfYS5jc3M7XG4gICAgICAgIHJldHVybiBsb2FkaW5nID8gKHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogW2Nzc10gfSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5zdHlsZSgxKSB9KSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5zdHlsZSgyKSB9KSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5zdHlsZSgzKSB9KSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5zdHlsZSg0KSB9KSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5zdHlsZSg1KSB9KSkpIDogbnVsbDtcbiAgICB9O1xuICAgIExvYWRlci5kZWZhdWx0UHJvcHMgPSBoZWxwZXJzXzEuc2l6ZU1hcmdpbkRlZmF1bHRzKDE1KTtcbiAgICByZXR1cm4gTG9hZGVyO1xufShSZWFjdC5QdXJlQ29tcG9uZW50KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBMb2FkZXI7XG52YXIgdGVtcGxhdGVPYmplY3RfMSwgdGVtcGxhdGVPYmplY3RfMiwgdGVtcGxhdGVPYmplY3RfMztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fbWFrZVRlbXBsYXRlT2JqZWN0ID0gKHRoaXMgJiYgdGhpcy5fX21ha2VUZW1wbGF0ZU9iamVjdCkgfHwgZnVuY3Rpb24gKGNvb2tlZCwgcmF3KSB7XG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cbiAgICByZXR1cm4gY29va2VkO1xufTtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKiBAanN4IGpzeCAqL1xudmFyIFJlYWN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3RfMSA9IHJlcXVpcmUoXCJAZW1vdGlvbi9yZWFjdFwiKTtcbnZhciBoZWxwZXJzXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzXCIpO1xudmFyIHJvdGF0ZSA9IHJlYWN0XzEua2V5ZnJhbWVzKHRlbXBsYXRlT2JqZWN0XzEgfHwgKHRlbXBsYXRlT2JqZWN0XzEgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gIDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKX1cXG4gIDUwJSB7dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKX1cXG4gIDEwMCUge3RyYW5zZm9ybTogcm90YXRlKDM2MGRlZyl9XFxuXCJdLCBbXCJcXG4gIDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKX1cXG4gIDUwJSB7dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKX1cXG4gIDEwMCUge3RyYW5zZm9ybTogcm90YXRlKDM2MGRlZyl9XFxuXCJdKSkpO1xudmFyIExvYWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTG9hZGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExvYWRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnN0eWxlID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHZhciBtYXJnaW4gPSBfdGhpcy5wcm9wcy5tYXJnaW47XG4gICAgICAgICAgICB2YXIgX2EgPSBoZWxwZXJzXzEucGFyc2VMZW5ndGhBbmRVbml0KG1hcmdpbiksIHZhbHVlID0gX2EudmFsdWUsIHVuaXQgPSBfYS51bml0O1xuICAgICAgICAgICAgdmFyIGxlZnQgPSAoaSAlIDIgPyAtMSA6IDEpICogKDI2ICsgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzIgfHwgKHRlbXBsYXRlT2JqZWN0XzIgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiBcIiwgXCJcIiwgXCI7XFxuICAgIFwiXSwgW1wiXFxuICAgICAgb3BhY2l0eTogMC44O1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogXCIsIFwiXCIsIFwiO1xcbiAgICBcIl0pKSwgbGVmdCwgdW5pdCk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmJhbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcywgY29sb3IgPSBfYS5jb2xvciwgc2l6ZSA9IF9hLnNpemU7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfMyB8fCAodGVtcGxhdGVPYmplY3RfMyA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IFwiLCBcIjtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIFwiXSwgW1wiXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogXCIsIFwiO1xcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgXCJdKSksIGNvbG9yLCBoZWxwZXJzXzEuY3NzVmFsdWUoc2l6ZSksIGhlbHBlcnNfMS5jc3NWYWx1ZShzaXplKSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLndyYXBwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3BlZWRNdWx0aXBsaWVyID0gX3RoaXMucHJvcHMuc3BlZWRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzQgfHwgKHRlbXBsYXRlT2JqZWN0XzQgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICBcIiwgXCI7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiIFwiLCBcInMgMHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNywgLTAuMTMsIDAuMjIsIDAuODYpO1xcbiAgICBcIl0sIFtcIlxcbiAgICAgIFwiLCBcIjtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyAwcyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC43LCAtMC4xMywgMC4yMiwgMC44Nik7XFxuICAgIFwiXSkpLCBfdGhpcy5iYWxsKCksIHJvdGF0ZSwgMSAvIHNwZWVkTXVsdGlwbGllcik7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmxvbmcgPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdF8xLmNzcyh0ZW1wbGF0ZU9iamVjdF81IHx8ICh0ZW1wbGF0ZU9iamVjdF81ID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgIFwiLCBcIjtcXG4gICAgXCIsIFwiO1xcbiAgXCJdLCBbXCJcXG4gICAgXCIsIFwiO1xcbiAgICBcIiwgXCI7XFxuICBcIl0pKSwgX3RoaXMuYmFsbCgpLCBfdGhpcy5zdHlsZSgxKSk7IH07XG4gICAgICAgIF90aGlzLnNob3J0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfNiB8fCAodGVtcGxhdGVPYmplY3RfNiA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICBcIiwgXCI7XFxuICAgIFwiLCBcIjtcXG4gIFwiXSwgW1wiXFxuICAgIFwiLCBcIjtcXG4gICAgXCIsIFwiO1xcbiAgXCJdKSksIF90aGlzLmJhbGwoKSwgX3RoaXMuc3R5bGUoMikpOyB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIExvYWRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBsb2FkaW5nID0gX2EubG9hZGluZywgY3NzID0gX2EuY3NzO1xuICAgICAgICByZXR1cm4gbG9hZGluZyA/IChyZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IFt0aGlzLndyYXBwZXIoKSwgY3NzXSB9LFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLmxvbmcoKSB9KSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5zaG9ydCgpIH0pKSkgOiBudWxsO1xuICAgIH07XG4gICAgTG9hZGVyLmRlZmF1bHRQcm9wcyA9IGhlbHBlcnNfMS5zaXplTWFyZ2luRGVmYXVsdHMoMTUpO1xuICAgIHJldHVybiBMb2FkZXI7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IExvYWRlcjtcbnZhciB0ZW1wbGF0ZU9iamVjdF8xLCB0ZW1wbGF0ZU9iamVjdF8yLCB0ZW1wbGF0ZU9iamVjdF8zLCB0ZW1wbGF0ZU9iamVjdF80LCB0ZW1wbGF0ZU9iamVjdF81LCB0ZW1wbGF0ZU9iamVjdF82O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19tYWtlVGVtcGxhdGVPYmplY3QgPSAodGhpcyAmJiB0aGlzLl9fbWFrZVRlbXBsYXRlT2JqZWN0KSB8fCBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICAgIHJldHVybiBjb29rZWQ7XG59O1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqIEBqc3gganN4ICovXG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciByZWFjdF8xID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0XCIpO1xudmFyIGhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIik7XG52YXIgc2NhbGUgPSByZWFjdF8xLmtleWZyYW1lcyh0ZW1wbGF0ZU9iamVjdF8xIHx8ICh0ZW1wbGF0ZU9iamVjdF8xID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAwJSB7dHJhbnNmb3JtOiBzY2FsZXkoMS4wKX1cXG4gIDUwJSB7dHJhbnNmb3JtOiBzY2FsZXkoMC40KX1cXG4gIDEwMCUge3RyYW5zZm9ybTogc2NhbGV5KDEuMCl9XFxuXCJdLCBbXCJcXG4gIDAlIHt0cmFuc2Zvcm06IHNjYWxleSgxLjApfVxcbiAgNTAlIHt0cmFuc2Zvcm06IHNjYWxleSgwLjQpfVxcbiAgMTAwJSB7dHJhbnNmb3JtOiBzY2FsZXkoMS4wKX1cXG5cIl0pKSk7XG52YXIgTG9hZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMb2FkZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTG9hZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3R5bGUgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsIGNvbG9yID0gX2EuY29sb3IsIHdpZHRoID0gX2Eud2lkdGgsIGhlaWdodCA9IF9hLmhlaWdodCwgbWFyZ2luID0gX2EubWFyZ2luLCByYWRpdXMgPSBfYS5yYWRpdXMsIHNwZWVkTXVsdGlwbGllciA9IF9hLnNwZWVkTXVsdGlwbGllcjtcbiAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmNzcyh0ZW1wbGF0ZU9iamVjdF8yIHx8ICh0ZW1wbGF0ZU9iamVjdF8yID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogXCIsIFwiO1xcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgbWFyZ2luOiBcIiwgXCI7XFxuICAgICAgYm9yZGVyLXJhZGl1czogXCIsIFwiO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIFwiLCBcInMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMiwgMC42OCwgMC4xOCwgMS4wOCk7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gICAgXCJdLCBbXCJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiwgXCI7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBtYXJnaW46IFwiLCBcIjtcXG4gICAgICBib3JkZXItcmFkaXVzOiBcIiwgXCI7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiIFwiLCBcInMgXCIsIFwicyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC4yLCAwLjY4LCAwLjE4LCAxLjA4KTtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICBcIl0pKSwgY29sb3IsIGhlbHBlcnNfMS5jc3NWYWx1ZSh3aWR0aCksIGhlbHBlcnNfMS5jc3NWYWx1ZShoZWlnaHQpLCBoZWxwZXJzXzEuY3NzVmFsdWUobWFyZ2luKSwgaGVscGVyc18xLmNzc1ZhbHVlKHJhZGl1cyksIHNjYWxlLCAxIC8gc3BlZWRNdWx0aXBsaWVyLCBpICogMC4xKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBMb2FkZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgbG9hZGluZyA9IF9hLmxvYWRpbmcsIGNzcyA9IF9hLmNzcztcbiAgICAgICAgcmV0dXJuIGxvYWRpbmcgPyAocmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiBbY3NzXSB9LFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDEpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDIpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDMpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDQpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDUpIH0pKSkgOiBudWxsO1xuICAgIH07XG4gICAgTG9hZGVyLmRlZmF1bHRQcm9wcyA9IGhlbHBlcnNfMS5oZWlnaHRXaWR0aFJhZGl1c0RlZmF1bHRzKDM1LCA0LCAyKTtcbiAgICByZXR1cm4gTG9hZGVyO1xufShSZWFjdC5QdXJlQ29tcG9uZW50KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBMb2FkZXI7XG52YXIgdGVtcGxhdGVPYmplY3RfMSwgdGVtcGxhdGVPYmplY3RfMjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fbWFrZVRlbXBsYXRlT2JqZWN0ID0gKHRoaXMgJiYgdGhpcy5fX21ha2VUZW1wbGF0ZU9iamVjdCkgfHwgZnVuY3Rpb24gKGNvb2tlZCwgcmF3KSB7XG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cbiAgICByZXR1cm4gY29va2VkO1xufTtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKiBAanN4IGpzeCAqL1xudmFyIFJlYWN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3RfMSA9IHJlcXVpcmUoXCJAZW1vdGlvbi9yZWFjdFwiKTtcbnZhciBoZWxwZXJzXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzXCIpO1xudmFyIHNrZXcgPSByZWFjdF8xLmtleWZyYW1lcyh0ZW1wbGF0ZU9iamVjdF8xIHx8ICh0ZW1wbGF0ZU9iamVjdF8xID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAyNSUge3RyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMTgwZGVnKSByb3RhdGVZKDApfVxcbiAgNTAlIHt0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMHB4KSByb3RhdGVYKDE4MGRlZykgcm90YXRlWSgxODBkZWcpfVxcbiAgNzUlIHt0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMHB4KSByb3RhdGVYKDApIHJvdGF0ZVkoMTgwZGVnKX1cXG4gIDEwMCUge3RyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMCkgcm90YXRlWSgwKX1cXG5cIl0sIFtcIlxcbiAgMjUlIHt0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMHB4KSByb3RhdGVYKDE4MGRlZykgcm90YXRlWSgwKX1cXG4gIDUwJSB7dHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgxODBkZWcpIHJvdGF0ZVkoMTgwZGVnKX1cXG4gIDc1JSB7dHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgwKSByb3RhdGVZKDE4MGRlZyl9XFxuICAxMDAlIHt0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMHB4KSByb3RhdGVYKDApIHJvdGF0ZVkoMCl9XFxuXCJdKSkpO1xudmFyIExvYWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTG9hZGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExvYWRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsIGNvbG9yID0gX2EuY29sb3IsIHNwZWVkTXVsdGlwbGllciA9IF9hLnNwZWVkTXVsdGlwbGllciwgc2l6ZSA9IF9hLnNpemU7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfMiB8fCAodGVtcGxhdGVPYmplY3RfMiA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICBib3JkZXItbGVmdDogXCIsIFwiIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlci1yaWdodDogXCIsIFwiIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlci1ib3R0b206IFwiLCBcIiBzb2xpZCBcIiwgXCI7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiIFwiLCBcInMgMHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMDksIDAuNTcsIDAuNDksIDAuOSk7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gICAgXCJdLCBbXCJcXG4gICAgICB3aWR0aDogMDtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgICAgYm9yZGVyLWxlZnQ6IFwiLCBcIiBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXItcmlnaHQ6IFwiLCBcIiBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXItYm90dG9tOiBcIiwgXCIgc29saWQgXCIsIFwiO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIDBzIGluZmluaXRlIGN1YmljLWJlemllcigwLjA5LCAwLjU3LCAwLjQ5LCAwLjkpO1xcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAgIFwiXSkpLCBoZWxwZXJzXzEuY3NzVmFsdWUoc2l6ZSksIGhlbHBlcnNfMS5jc3NWYWx1ZShzaXplKSwgaGVscGVyc18xLmNzc1ZhbHVlKHNpemUpLCBjb2xvciwgc2tldywgMyAvIHNwZWVkTXVsdGlwbGllcik7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTG9hZGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIGxvYWRpbmcgPSBfYS5sb2FkaW5nLCBjc3MgPSBfYS5jc3M7XG4gICAgICAgIHJldHVybiBsb2FkaW5nID8gcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiBbdGhpcy5zdHlsZSgpLCBjc3NdIH0pIDogbnVsbDtcbiAgICB9O1xuICAgIExvYWRlci5kZWZhdWx0UHJvcHMgPSBoZWxwZXJzXzEuc2l6ZURlZmF1bHRzKDIwKTtcbiAgICByZXR1cm4gTG9hZGVyO1xufShSZWFjdC5QdXJlQ29tcG9uZW50KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBMb2FkZXI7XG52YXIgdGVtcGxhdGVPYmplY3RfMSwgdGVtcGxhdGVPYmplY3RfMjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fbWFrZVRlbXBsYXRlT2JqZWN0ID0gKHRoaXMgJiYgdGhpcy5fX21ha2VUZW1wbGF0ZU9iamVjdCkgfHwgZnVuY3Rpb24gKGNvb2tlZCwgcmF3KSB7XG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cbiAgICByZXR1cm4gY29va2VkO1xufTtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKiBAanN4IGpzeCAqL1xudmFyIFJlYWN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3RfMSA9IHJlcXVpcmUoXCJAZW1vdGlvbi9yZWFjdFwiKTtcbnZhciBoZWxwZXJzXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzXCIpO1xudmFyIHNxdWFyZSA9IHJlYWN0XzEua2V5ZnJhbWVzKHRlbXBsYXRlT2JqZWN0XzEgfHwgKHRlbXBsYXRlT2JqZWN0XzEgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gIDI1JSB7dHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZykgcm90YXRlWSgwKX1cXG4gIDUwJSB7dHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZykgcm90YXRlWSgxODBkZWcpfVxcbiAgNzUlIHt0cmFuc2Zvcm06IHJvdGF0ZVgoMCkgcm90YXRlWSgxODBkZWcpfVxcbiAgMTAwJSB7dHJhbnNmb3JtOiByb3RhdGVYKDApIHJvdGF0ZVkoMCl9XFxuXCJdLCBbXCJcXG4gIDI1JSB7dHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZykgcm90YXRlWSgwKX1cXG4gIDUwJSB7dHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZykgcm90YXRlWSgxODBkZWcpfVxcbiAgNzUlIHt0cmFuc2Zvcm06IHJvdGF0ZVgoMCkgcm90YXRlWSgxODBkZWcpfVxcbiAgMTAwJSB7dHJhbnNmb3JtOiByb3RhdGVYKDApIHJvdGF0ZVkoMCl9XFxuXCJdKSkpO1xudmFyIExvYWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTG9hZGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExvYWRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsIGNvbG9yID0gX2EuY29sb3IsIHNpemUgPSBfYS5zaXplLCBzcGVlZE11bHRpcGxpZXIgPSBfYS5zcGVlZE11bHRpcGxpZXI7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfMiB8fCAodGVtcGxhdGVPYmplY3RfMiA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IFwiLCBcIjtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIDBzIGluZmluaXRlIGN1YmljLWJlemllcigwLjA5LCAwLjU3LCAwLjQ5LCAwLjkpO1xcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAgIFwiXSwgW1wiXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogXCIsIFwiO1xcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiIFwiLCBcInMgMHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMDksIDAuNTcsIDAuNDksIDAuOSk7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gICAgXCJdKSksIGNvbG9yLCBoZWxwZXJzXzEuY3NzVmFsdWUoc2l6ZSksIGhlbHBlcnNfMS5jc3NWYWx1ZShzaXplKSwgc3F1YXJlLCAzIC8gc3BlZWRNdWx0aXBsaWVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBMb2FkZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgbG9hZGluZyA9IF9hLmxvYWRpbmcsIGNzcyA9IF9hLmNzcztcbiAgICAgICAgcmV0dXJuIGxvYWRpbmcgPyByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IFt0aGlzLnN0eWxlKCksIGNzc10gfSkgOiBudWxsO1xuICAgIH07XG4gICAgTG9hZGVyLmRlZmF1bHRQcm9wcyA9IGhlbHBlcnNfMS5zaXplRGVmYXVsdHMoNTApO1xuICAgIHJldHVybiBMb2FkZXI7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IExvYWRlcjtcbnZhciB0ZW1wbGF0ZU9iamVjdF8xLCB0ZW1wbGF0ZU9iamVjdF8yO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19tYWtlVGVtcGxhdGVPYmplY3QgPSAodGhpcyAmJiB0aGlzLl9fbWFrZVRlbXBsYXRlT2JqZWN0KSB8fCBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICAgIHJldHVybiBjb29rZWQ7XG59O1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqIEBqc3gganN4ICovXG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciByZWFjdF8xID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0XCIpO1xudmFyIHByb3B0eXBlc18xID0gcmVxdWlyZShcIi4vaGVscGVycy9wcm9wdHlwZXNcIik7XG52YXIgaGVscGVyc18xID0gcmVxdWlyZShcIi4vaGVscGVyc1wiKTtcbnZhciBzeW5jID0gcmVhY3RfMS5rZXlmcmFtZXModGVtcGxhdGVPYmplY3RfMSB8fCAodGVtcGxhdGVPYmplY3RfMSA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgMzMlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCl9XFxuICA2NiUge3RyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCl9XFxuICAxMDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCl9XFxuXCJdLCBbXCJcXG4gIDMzJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpfVxcbiAgNjYlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpfVxcbiAgMTAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApfVxcblwiXSkpKTtcbnZhciBMb2FkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExvYWRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMb2FkZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zdHlsZSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcywgY29sb3IgPSBfYS5jb2xvciwgc2l6ZSA9IF9hLnNpemUsIG1hcmdpbiA9IF9hLm1hcmdpbiwgc3BlZWRNdWx0aXBsaWVyID0gX2Euc3BlZWRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzIgfHwgKHRlbXBsYXRlT2JqZWN0XzIgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiwgXCI7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBtYXJnaW46IFwiLCBcIjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIFwiLCBcInMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gICAgXCJdLCBbXCJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiwgXCI7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBtYXJnaW46IFwiLCBcIjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIFwiLCBcInMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gICAgXCJdKSksIGNvbG9yLCBoZWxwZXJzXzEuY3NzVmFsdWUoc2l6ZSksIGhlbHBlcnNfMS5jc3NWYWx1ZShzaXplKSwgaGVscGVyc18xLmNzc1ZhbHVlKG1hcmdpbiksIHN5bmMsIDAuNiAvIHNwZWVkTXVsdGlwbGllciwgaSAqIDAuMDcpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIExvYWRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBsb2FkaW5nID0gX2EubG9hZGluZywgY3NzID0gX2EuY3NzO1xuICAgICAgICByZXR1cm4gbG9hZGluZyA/IChyZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IFtjc3NdIH0sXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUoMSkgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUoMikgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUoMykgfSkpKSA6IG51bGw7XG4gICAgfTtcbiAgICBMb2FkZXIuZGVmYXVsdFByb3BzID0gcHJvcHR5cGVzXzEuc2l6ZU1hcmdpbkRlZmF1bHRzKDE1KTtcbiAgICByZXR1cm4gTG9hZGVyO1xufShSZWFjdC5QdXJlQ29tcG9uZW50KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBMb2FkZXI7XG52YXIgdGVtcGxhdGVPYmplY3RfMSwgdGVtcGxhdGVPYmplY3RfMjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jYWxjdWxhdGVSZ2JhID0gdm9pZCAwO1xudmFyIEJhc2ljQ29sb3JzO1xuKGZ1bmN0aW9uIChCYXNpY0NvbG9ycykge1xuICAgIEJhc2ljQ29sb3JzW1wibWFyb29uXCJdID0gXCIjODAwMDAwXCI7XG4gICAgQmFzaWNDb2xvcnNbXCJyZWRcIl0gPSBcIiNGRjAwMDBcIjtcbiAgICBCYXNpY0NvbG9yc1tcIm9yYW5nZVwiXSA9IFwiI0ZGQTUwMFwiO1xuICAgIEJhc2ljQ29sb3JzW1wieWVsbG93XCJdID0gXCIjRkZGRjAwXCI7XG4gICAgQmFzaWNDb2xvcnNbXCJvbGl2ZVwiXSA9IFwiIzgwODAwMFwiO1xuICAgIEJhc2ljQ29sb3JzW1wiZ3JlZW5cIl0gPSBcIiMwMDgwMDBcIjtcbiAgICBCYXNpY0NvbG9yc1tcInB1cnBsZVwiXSA9IFwiIzgwMDA4MFwiO1xuICAgIEJhc2ljQ29sb3JzW1wiZnVjaHNpYVwiXSA9IFwiI0ZGMDBGRlwiO1xuICAgIEJhc2ljQ29sb3JzW1wibGltZVwiXSA9IFwiIzAwRkYwMFwiO1xuICAgIEJhc2ljQ29sb3JzW1widGVhbFwiXSA9IFwiIzAwODA4MFwiO1xuICAgIEJhc2ljQ29sb3JzW1wiYXF1YVwiXSA9IFwiIzAwRkZGRlwiO1xuICAgIEJhc2ljQ29sb3JzW1wiYmx1ZVwiXSA9IFwiIzAwMDBGRlwiO1xuICAgIEJhc2ljQ29sb3JzW1wibmF2eVwiXSA9IFwiIzAwMDA4MFwiO1xuICAgIEJhc2ljQ29sb3JzW1wiYmxhY2tcIl0gPSBcIiMwMDAwMDBcIjtcbiAgICBCYXNpY0NvbG9yc1tcImdyYXlcIl0gPSBcIiM4MDgwODBcIjtcbiAgICBCYXNpY0NvbG9yc1tcInNpbHZlclwiXSA9IFwiI0MwQzBDMFwiO1xuICAgIEJhc2ljQ29sb3JzW1wid2hpdGVcIl0gPSBcIiNGRkZGRkZcIjtcbn0pKEJhc2ljQ29sb3JzIHx8IChCYXNpY0NvbG9ycyA9IHt9KSk7XG52YXIgY2FsY3VsYXRlUmdiYSA9IGZ1bmN0aW9uIChjb2xvciwgb3BhY2l0eSkge1xuICAgIGlmIChPYmplY3Qua2V5cyhCYXNpY0NvbG9ycykuaW5jbHVkZXMoY29sb3IpKSB7XG4gICAgICAgIGNvbG9yID0gQmFzaWNDb2xvcnNbY29sb3JdO1xuICAgIH1cbiAgICBpZiAoY29sb3JbMF0gPT09IFwiI1wiKSB7XG4gICAgICAgIGNvbG9yID0gY29sb3Iuc2xpY2UoMSk7XG4gICAgfVxuICAgIGlmIChjb2xvci5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgdmFyIHJlc18xID0gXCJcIjtcbiAgICAgICAgY29sb3Iuc3BsaXQoXCJcIikuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgcmVzXzEgKz0gYztcbiAgICAgICAgICAgIHJlc18xICs9IGM7XG4gICAgICAgIH0pO1xuICAgICAgICBjb2xvciA9IHJlc18xO1xuICAgIH1cbiAgICB2YXIgcmdiVmFsdWVzID0gKGNvbG9yLm1hdGNoKC8uezJ9L2cpIHx8IFtdKVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChoZXgpIHsgcmV0dXJuIHBhcnNlSW50KGhleCwgMTYpOyB9KVxuICAgICAgICAuam9pbihcIiwgXCIpO1xuICAgIHJldHVybiBcInJnYmEoXCIgKyByZ2JWYWx1ZXMgKyBcIiwgXCIgKyBvcGFjaXR5ICsgXCIpXCI7XG59O1xuZXhwb3J0cy5jYWxjdWxhdGVSZ2JhID0gY2FsY3VsYXRlUmdiYTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vcHJvcHR5cGVzXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jb2xvcnNcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3VuaXRDb252ZXJ0ZXJcIiksIGV4cG9ydHMpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhlaWdodFdpZHRoUmFkaXVzRGVmYXVsdHMgPSBleHBvcnRzLmhlaWdodFdpZHRoRGVmYXVsdHMgPSBleHBvcnRzLnNpemVNYXJnaW5EZWZhdWx0cyA9IGV4cG9ydHMuc2l6ZURlZmF1bHRzID0gdm9pZCAwO1xuLypcbiAqIERlZmF1bHRQcm9wcyBvYmplY3QgZm9yIGRpZmZlcmVudCBsb2FkZXJzXG4gKi9cbnZhciBjb21tb25WYWx1ZXMgPSB7XG4gICAgbG9hZGluZzogdHJ1ZSxcbiAgICBjb2xvcjogXCIjMDAwMDAwXCIsXG4gICAgY3NzOiBcIlwiLFxuICAgIHNwZWVkTXVsdGlwbGllcjogMVxufTtcbmZ1bmN0aW9uIHNpemVEZWZhdWx0cyhzaXplVmFsdWUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uVmFsdWVzLCB7IHNpemU6IHNpemVWYWx1ZSB9KTtcbn1cbmV4cG9ydHMuc2l6ZURlZmF1bHRzID0gc2l6ZURlZmF1bHRzO1xuZnVuY3Rpb24gc2l6ZU1hcmdpbkRlZmF1bHRzKHNpemVWYWx1ZSkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzaXplRGVmYXVsdHMoc2l6ZVZhbHVlKSwge1xuICAgICAgICBtYXJnaW46IDJcbiAgICB9KTtcbn1cbmV4cG9ydHMuc2l6ZU1hcmdpbkRlZmF1bHRzID0gc2l6ZU1hcmdpbkRlZmF1bHRzO1xuZnVuY3Rpb24gaGVpZ2h0V2lkdGhEZWZhdWx0cyhoZWlnaHQsIHdpZHRoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblZhbHVlcywge1xuICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgd2lkdGg6IHdpZHRoXG4gICAgfSk7XG59XG5leHBvcnRzLmhlaWdodFdpZHRoRGVmYXVsdHMgPSBoZWlnaHRXaWR0aERlZmF1bHRzO1xuZnVuY3Rpb24gaGVpZ2h0V2lkdGhSYWRpdXNEZWZhdWx0cyhoZWlnaHQsIHdpZHRoLCByYWRpdXMpIHtcbiAgICBpZiAocmFkaXVzID09PSB2b2lkIDApIHsgcmFkaXVzID0gMjsgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBoZWlnaHRXaWR0aERlZmF1bHRzKGhlaWdodCwgd2lkdGgpLCB7XG4gICAgICAgIHJhZGl1czogcmFkaXVzLFxuICAgICAgICBtYXJnaW46IDJcbiAgICB9KTtcbn1cbmV4cG9ydHMuaGVpZ2h0V2lkdGhSYWRpdXNEZWZhdWx0cyA9IGhlaWdodFdpZHRoUmFkaXVzRGVmYXVsdHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY3NzVmFsdWUgPSBleHBvcnRzLnBhcnNlTGVuZ3RoQW5kVW5pdCA9IHZvaWQgMDtcbnZhciBjc3NVbml0ID0ge1xuICAgIGNtOiB0cnVlLFxuICAgIG1tOiB0cnVlLFxuICAgIGluOiB0cnVlLFxuICAgIHB4OiB0cnVlLFxuICAgIHB0OiB0cnVlLFxuICAgIHBjOiB0cnVlLFxuICAgIGVtOiB0cnVlLFxuICAgIGV4OiB0cnVlLFxuICAgIGNoOiB0cnVlLFxuICAgIHJlbTogdHJ1ZSxcbiAgICB2dzogdHJ1ZSxcbiAgICB2aDogdHJ1ZSxcbiAgICB2bWluOiB0cnVlLFxuICAgIHZtYXg6IHRydWUsXG4gICAgXCIlXCI6IHRydWVcbn07XG4vKipcbiAqIElmIHNpemUgaXMgYSBudW1iZXIsIGFwcGVuZCBweCB0byB0aGUgdmFsdWUgYXMgZGVmYXVsdCB1bml0LlxuICogSWYgc2l6ZSBpcyBhIHN0cmluZywgdmFsaWRhdGUgYWdhaW5zdCBsaXN0IG9mIHZhbGlkIHVuaXRzLlxuICogSWYgdW5pdCBpcyB2YWxpZCwgcmV0dXJuIHNpemUgYXMgaXMuXG4gKiBJZiB1bml0IGlzIGludmFsaWQsIGNvbnNvbGUgd2FybiBpc3N1ZSwgcmVwbGFjZSB3aXRoIHB4IGFzIHRoZSB1bml0LlxuICpcbiAqIEBwYXJhbSB7KG51bWJlciB8IHN0cmluZyl9IHNpemVcbiAqIEByZXR1cm4ge0xlbmd0aE9iamVjdH0gTGVuZ3RoT2JqZWN0XG4gKi9cbmZ1bmN0aW9uIHBhcnNlTGVuZ3RoQW5kVW5pdChzaXplKSB7XG4gICAgaWYgKHR5cGVvZiBzaXplID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogc2l6ZSxcbiAgICAgICAgICAgIHVuaXQ6IFwicHhcIlxuICAgICAgICB9O1xuICAgIH1cbiAgICB2YXIgdmFsdWU7XG4gICAgdmFyIHZhbHVlU3RyaW5nID0gKHNpemUubWF0Y2goL15bMC05Ll0qLykgfHwgXCJcIikudG9TdHJpbmcoKTtcbiAgICBpZiAodmFsdWVTdHJpbmcuaW5jbHVkZXMoXCIuXCIpKSB7XG4gICAgICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZVN0cmluZyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlU3RyaW5nLCAxMCk7XG4gICAgfVxuICAgIHZhciB1bml0ID0gKHNpemUubWF0Y2goL1teMC05XSokLykgfHwgXCJcIikudG9TdHJpbmcoKTtcbiAgICBpZiAoY3NzVW5pdFt1bml0XSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgdW5pdDogdW5pdFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zb2xlLndhcm4oXCJSZWFjdCBTcGlubmVyczogXCIgKyBzaXplICsgXCIgaXMgbm90IGEgdmFsaWQgY3NzIHZhbHVlLiBEZWZhdWx0aW5nIHRvIFwiICsgdmFsdWUgKyBcInB4LlwiKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIHVuaXQ6IFwicHhcIlxuICAgIH07XG59XG5leHBvcnRzLnBhcnNlTGVuZ3RoQW5kVW5pdCA9IHBhcnNlTGVuZ3RoQW5kVW5pdDtcbi8qKlxuICogVGFrZSB2YWx1ZSBhcyBhbiBpbnB1dCBhbmQgcmV0dXJuIHZhbGlkIGNzcyB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7KG51bWJlciB8IHN0cmluZyl9IHZhbHVlXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHZhbGlkIGNzcyB2YWx1ZVxuICovXG5mdW5jdGlvbiBjc3NWYWx1ZSh2YWx1ZSkge1xuICAgIHZhciBsZW5ndGhXaXRodW5pdCA9IHBhcnNlTGVuZ3RoQW5kVW5pdCh2YWx1ZSk7XG4gICAgcmV0dXJuIFwiXCIgKyBsZW5ndGhXaXRodW5pdC52YWx1ZSArIGxlbmd0aFdpdGh1bml0LnVuaXQ7XG59XG5leHBvcnRzLmNzc1ZhbHVlID0gY3NzVmFsdWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU3luY0xvYWRlciA9IGV4cG9ydHMuU3F1YXJlTG9hZGVyID0gZXhwb3J0cy5Ta2V3TG9hZGVyID0gZXhwb3J0cy5TY2FsZUxvYWRlciA9IGV4cG9ydHMuUm90YXRlTG9hZGVyID0gZXhwb3J0cy5SaXNlTG9hZGVyID0gZXhwb3J0cy5SaW5nTG9hZGVyID0gZXhwb3J0cy5QdWZmTG9hZGVyID0gZXhwb3J0cy5QdWxzZUxvYWRlciA9IGV4cG9ydHMuUHJvcGFnYXRlTG9hZGVyID0gZXhwb3J0cy5QYWNtYW5Mb2FkZXIgPSBleHBvcnRzLk1vb25Mb2FkZXIgPSBleHBvcnRzLkhhc2hMb2FkZXIgPSBleHBvcnRzLkdyaWRMb2FkZXIgPSBleHBvcnRzLkZhZGVMb2FkZXIgPSBleHBvcnRzLkRvdExvYWRlciA9IGV4cG9ydHMuQ2xvY2tMb2FkZXIgPSBleHBvcnRzLkNsaXBMb2FkZXIgPSBleHBvcnRzLkNsaW1iaW5nQm94TG9hZGVyID0gZXhwb3J0cy5DaXJjbGVMb2FkZXIgPSBleHBvcnRzLkJvdW5jZUxvYWRlciA9IGV4cG9ydHMuQmVhdExvYWRlciA9IGV4cG9ydHMuQmFyTG9hZGVyID0gdm9pZCAwO1xudmFyIEJhckxvYWRlcl8xID0gcmVxdWlyZShcIi4vQmFyTG9hZGVyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQmFyTG9hZGVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydERlZmF1bHQoQmFyTG9hZGVyXzEpLmRlZmF1bHQ7IH0gfSk7XG52YXIgQmVhdExvYWRlcl8xID0gcmVxdWlyZShcIi4vQmVhdExvYWRlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkJlYXRMb2FkZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0RGVmYXVsdChCZWF0TG9hZGVyXzEpLmRlZmF1bHQ7IH0gfSk7XG52YXIgQm91bmNlTG9hZGVyXzEgPSByZXF1aXJlKFwiLi9Cb3VuY2VMb2FkZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJCb3VuY2VMb2FkZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0RGVmYXVsdChCb3VuY2VMb2FkZXJfMSkuZGVmYXVsdDsgfSB9KTtcbnZhciBDaXJjbGVMb2FkZXJfMSA9IHJlcXVpcmUoXCIuL0NpcmNsZUxvYWRlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkNpcmNsZUxvYWRlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnREZWZhdWx0KENpcmNsZUxvYWRlcl8xKS5kZWZhdWx0OyB9IH0pO1xudmFyIENsaW1iaW5nQm94TG9hZGVyXzEgPSByZXF1aXJlKFwiLi9DbGltYmluZ0JveExvYWRlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkNsaW1iaW5nQm94TG9hZGVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydERlZmF1bHQoQ2xpbWJpbmdCb3hMb2FkZXJfMSkuZGVmYXVsdDsgfSB9KTtcbnZhciBDbGlwTG9hZGVyXzEgPSByZXF1aXJlKFwiLi9DbGlwTG9hZGVyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ2xpcExvYWRlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnREZWZhdWx0KENsaXBMb2FkZXJfMSkuZGVmYXVsdDsgfSB9KTtcbnZhciBDbG9ja0xvYWRlcl8xID0gcmVxdWlyZShcIi4vQ2xvY2tMb2FkZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJDbG9ja0xvYWRlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnREZWZhdWx0KENsb2NrTG9hZGVyXzEpLmRlZmF1bHQ7IH0gfSk7XG52YXIgRG90TG9hZGVyXzEgPSByZXF1aXJlKFwiLi9Eb3RMb2FkZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJEb3RMb2FkZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0RGVmYXVsdChEb3RMb2FkZXJfMSkuZGVmYXVsdDsgfSB9KTtcbnZhciBGYWRlTG9hZGVyXzEgPSByZXF1aXJlKFwiLi9GYWRlTG9hZGVyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRmFkZUxvYWRlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnREZWZhdWx0KEZhZGVMb2FkZXJfMSkuZGVmYXVsdDsgfSB9KTtcbnZhciBHcmlkTG9hZGVyXzEgPSByZXF1aXJlKFwiLi9HcmlkTG9hZGVyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiR3JpZExvYWRlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnREZWZhdWx0KEdyaWRMb2FkZXJfMSkuZGVmYXVsdDsgfSB9KTtcbnZhciBIYXNoTG9hZGVyXzEgPSByZXF1aXJlKFwiLi9IYXNoTG9hZGVyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiSGFzaExvYWRlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnREZWZhdWx0KEhhc2hMb2FkZXJfMSkuZGVmYXVsdDsgfSB9KTtcbnZhciBNb29uTG9hZGVyXzEgPSByZXF1aXJlKFwiLi9Nb29uTG9hZGVyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTW9vbkxvYWRlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnREZWZhdWx0KE1vb25Mb2FkZXJfMSkuZGVmYXVsdDsgfSB9KTtcbnZhciBQYWNtYW5Mb2FkZXJfMSA9IHJlcXVpcmUoXCIuL1BhY21hbkxvYWRlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlBhY21hbkxvYWRlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnREZWZhdWx0KFBhY21hbkxvYWRlcl8xKS5kZWZhdWx0OyB9IH0pO1xudmFyIFByb3BhZ2F0ZUxvYWRlcl8xID0gcmVxdWlyZShcIi4vUHJvcGFnYXRlTG9hZGVyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUHJvcGFnYXRlTG9hZGVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydERlZmF1bHQoUHJvcGFnYXRlTG9hZGVyXzEpLmRlZmF1bHQ7IH0gfSk7XG52YXIgUHVsc2VMb2FkZXJfMSA9IHJlcXVpcmUoXCIuL1B1bHNlTG9hZGVyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUHVsc2VMb2FkZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0RGVmYXVsdChQdWxzZUxvYWRlcl8xKS5kZWZhdWx0OyB9IH0pO1xudmFyIFB1ZmZMb2FkZXJfMSA9IHJlcXVpcmUoXCIuL1B1ZmZMb2FkZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJQdWZmTG9hZGVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydERlZmF1bHQoUHVmZkxvYWRlcl8xKS5kZWZhdWx0OyB9IH0pO1xudmFyIFJpbmdMb2FkZXJfMSA9IHJlcXVpcmUoXCIuL1JpbmdMb2FkZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSaW5nTG9hZGVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydERlZmF1bHQoUmluZ0xvYWRlcl8xKS5kZWZhdWx0OyB9IH0pO1xudmFyIFJpc2VMb2FkZXJfMSA9IHJlcXVpcmUoXCIuL1Jpc2VMb2FkZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSaXNlTG9hZGVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydERlZmF1bHQoUmlzZUxvYWRlcl8xKS5kZWZhdWx0OyB9IH0pO1xudmFyIFJvdGF0ZUxvYWRlcl8xID0gcmVxdWlyZShcIi4vUm90YXRlTG9hZGVyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUm90YXRlTG9hZGVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydERlZmF1bHQoUm90YXRlTG9hZGVyXzEpLmRlZmF1bHQ7IH0gfSk7XG52YXIgU2NhbGVMb2FkZXJfMSA9IHJlcXVpcmUoXCIuL1NjYWxlTG9hZGVyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiU2NhbGVMb2FkZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0RGVmYXVsdChTY2FsZUxvYWRlcl8xKS5kZWZhdWx0OyB9IH0pO1xudmFyIFNrZXdMb2FkZXJfMSA9IHJlcXVpcmUoXCIuL1NrZXdMb2FkZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJTa2V3TG9hZGVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydERlZmF1bHQoU2tld0xvYWRlcl8xKS5kZWZhdWx0OyB9IH0pO1xudmFyIFNxdWFyZUxvYWRlcl8xID0gcmVxdWlyZShcIi4vU3F1YXJlTG9hZGVyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiU3F1YXJlTG9hZGVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydERlZmF1bHQoU3F1YXJlTG9hZGVyXzEpLmRlZmF1bHQ7IH0gfSk7XG52YXIgU3luY0xvYWRlcl8xID0gcmVxdWlyZShcIi4vU3luY0xvYWRlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlN5bmNMb2FkZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0RGVmYXVsdChTeW5jTG9hZGVyXzEpLmRlZmF1bHQ7IH0gfSk7XG4iXSwic291cmNlUm9vdCI6IiJ9