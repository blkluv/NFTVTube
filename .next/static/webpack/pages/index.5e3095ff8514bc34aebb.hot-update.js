self["webpackHotUpdate_N_E"]("pages/index",{

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
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-spinners */ "./node_modules/react-spinners/index.js");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_10__);
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
    lineNumber: 78,
    columnNumber: 7
  }, this);else if (loadingState === true) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: " h-screen w-screen flex justify-center items-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_spinners__WEBPACK_IMPORTED_MODULE_10__.ClipLoader, {
        loading: true,
        size: 200,
        color: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
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
                lineNumber: 100,
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
                  lineNumber: 111,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
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
                  lineNumber: 114,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "p-4 flex flex-col items-center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                className: "text-2xl font-bold text-black",
                children: [nft.price, " MATIC"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                className: "mt-4 w-full bg-pink-500 text-white font-bold py-2 px-12 rounded",
                onClick: function onClick() {
                  return buyNft(nft);
                },
                children: "Buy"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, _this)]
          }, i, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 91,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9jYWNoZS9kaXN0L2Vtb3Rpb24tY2FjaGUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9jYWNoZS9ub2RlX21vZHVsZXMvc3R5bGlzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vY2FjaGUvbm9kZV9tb2R1bGVzL3N0eWxpcy9zcmMvRW51bS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2NhY2hlL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL01pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9jYWNoZS9ub2RlX21vZHVsZXMvc3R5bGlzL3NyYy9QYXJzZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9jYWNoZS9ub2RlX21vZHVsZXMvc3R5bGlzL3NyYy9QcmVmaXhlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2NhY2hlL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL1NlcmlhbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9jYWNoZS9ub2RlX21vZHVsZXMvc3R5bGlzL3NyYy9Ub2tlbml6ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9jYWNoZS9ub2RlX21vZHVsZXMvc3R5bGlzL3NyYy9VdGlsaXR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vaGFzaC9kaXN0L2hhc2guYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvZW1vdGlvbi1tZW1vaXplLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vcmVhY3QvX2lzb2xhdGVkLWhucnMvZGlzdC9lbW90aW9uLXJlYWN0LV9pc29sYXRlZC1obnJzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vcmVhY3QvZGlzdC9lbW90aW9uLWVsZW1lbnQtY2JlZDQ1MWYuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9yZWFjdC9kaXN0L2Vtb3Rpb24tcmVhY3QuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zZXJpYWxpemUvZGlzdC9lbW90aW9uLXNlcmlhbGl6ZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3NoZWV0L2Rpc3QvZW1vdGlvbi1zaGVldC5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3VuaXRsZXNzL2Rpc3QvdW5pdGxlc3MuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91dGlscy9kaXN0L2Vtb3Rpb24tdXRpbHMuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi93ZWFrLW1lbW9pemUvZGlzdC93ZWFrLW1lbW9pemUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXJzL0JhckxvYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXJzL0JlYXRMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zcGlubmVycy9Cb3VuY2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zcGlubmVycy9DaXJjbGVMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zcGlubmVycy9DbGltYmluZ0JveExvYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXJzL0NsaXBMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zcGlubmVycy9DbG9ja0xvYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXJzL0RvdExvYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXJzL0ZhZGVMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zcGlubmVycy9HcmlkTG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3Bpbm5lcnMvSGFzaExvYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXJzL01vb25Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zcGlubmVycy9QYWNtYW5Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zcGlubmVycy9Qcm9wYWdhdGVMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zcGlubmVycy9QdWZmTG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3Bpbm5lcnMvUHVsc2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zcGlubmVycy9SaW5nTG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3Bpbm5lcnMvUmlzZUxvYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXJzL1JvdGF0ZUxvYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXJzL1NjYWxlTG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3Bpbm5lcnMvU2tld0xvYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXJzL1NxdWFyZUxvYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXJzL1N5bmNMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zcGlubmVycy9oZWxwZXJzL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXJzL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zcGlubmVycy9oZWxwZXJzL3Byb3B0eXBlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXJzL2hlbHBlcnMvdW5pdENvbnZlcnRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXJzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsIm5mdHMiLCJzZXROZnRzIiwibG9hZGluZ1N0YXRlIiwic2V0TG9hZGluZ1N0YXRlIiwidXNlRWZmZWN0IiwibG9hZE5GVHMiLCJwcm92aWRlciIsImV0aGVycyIsImNvbnRyYWN0IiwibWFya2V0cGxhY2VBZGRyZXNzIiwiTkZUTWFya2V0cGxhY2UiLCJmZXRjaE1hcmtldEl0ZW1zIiwiZGF0YSIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpIiwidG9rZW5VUkkiLCJ0b2tlbklkIiwidG9rZW5VcmkiLCJheGlvcyIsIm1ldGEiLCJwcmljZSIsInRvU3RyaW5nIiwiaXRlbSIsInRvTnVtYmVyIiwic2VsbGVyIiwib3duZXIiLCJpbWFnZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIml0ZW1zIiwiYnV5TmZ0IiwibmZ0Iiwid2ViM01vZGFsIiwiV2ViM01vZGFsIiwiY29ubmVjdCIsImNvbm5lY3Rpb24iLCJzaWduZXIiLCJnZXRTaWduZXIiLCJjcmVhdGVNYXJrZXRTYWxlIiwidmFsdWUiLCJ0cmFuc2FjdGlvbiIsIndhaXQiLCJsZW5ndGgiLCJtYXhXaWR0aCIsIm92ZXJmbG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEI0QztBQUN3SDtBQUNySTtBQUNMOztBQUUxQjtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsNENBQUksR0FBRzs7QUFFdkI7QUFDQTtBQUNBOztBQUVBLFFBQVEsNkNBQUs7QUFDYjtBQUNBOztBQUVBLElBQUksNENBQUk7QUFDUjs7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TyxDQUFDLGlFQUFjO0FBQ3pDLDhDQUE2QyxDQUFDLHFDQUFxQyw4Q0FBOEMsRUFBRSxFQUFFLEVBQUM7QUFDdEksbUJBQW1CLG1CQUFPLENBQUMsaUVBQWM7QUFDekMsOENBQTZDLENBQUMscUNBQXFDLDhDQUE4QyxFQUFFLEVBQUUsRUFBQztBQUN0SSxxQkFBcUIsbUJBQU8sQ0FBQyxxRUFBZ0I7QUFDN0MsZ0RBQStDLENBQUMscUNBQXFDLGdEQUFnRCxFQUFFLEVBQUUsRUFBQztBQUMxSSxvQkFBb0IsbUJBQU8sQ0FBQyxtRUFBZTtBQUMzQywrQ0FBOEMsQ0FBQyxxQ0FBcUMsK0NBQStDLEVBQUUsRUFBRSxFQUFDO0FBQ3hJLG1CQUFtQixtQkFBTyxDQUFDLGlFQUFjO0FBQ3pDLDhDQUE2QyxDQUFDLHFDQUFxQyw4Q0FBOEMsRUFBRSxFQUFFLEVBQUM7QUFDdEkscUJBQXFCLG1CQUFPLENBQUMscUVBQWdCO0FBQzdDLGdEQUErQyxDQUFDLHFDQUFxQyxnREFBZ0QsRUFBRSxFQUFFLEVBQUM7QUFDMUksbUJBQW1CLG1CQUFPLENBQUMsaUVBQWM7QUFDekMsOENBQTZDLENBQUMscUNBQXFDLDhDQUE4QyxFQUFFLEVBQUUsRUFBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZTMwOTVmZjg1MTRiYzM0YWViYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJpbXBvcnQgeyBTdHlsZVNoZWV0IH0gZnJvbSAnQGVtb3Rpb24vc2hlZXQnO1xuaW1wb3J0IHsgZGVhbGxvYywgYWxsb2MsIG5leHQsIHRva2VuLCBmcm9tLCBwZWVrLCBkZWxpbWl0LCBzbGljZSwgcG9zaXRpb24sIHN0cmluZ2lmeSwgQ09NTUVOVCwgcnVsZXNoZWV0LCBtaWRkbGV3YXJlLCBwcmVmaXhlciwgc2VyaWFsaXplLCBjb21waWxlIH0gZnJvbSAnc3R5bGlzJztcbmltcG9ydCAnQGVtb3Rpb24vd2Vhay1tZW1vaXplJztcbmltcG9ydCAnQGVtb3Rpb24vbWVtb2l6ZSc7XG5cbnZhciBsYXN0ID0gZnVuY3Rpb24gbGFzdChhcnIpIHtcbiAgcmV0dXJuIGFyci5sZW5ndGggPyBhcnJbYXJyLmxlbmd0aCAtIDFdIDogbnVsbDtcbn07IC8vIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS90aHlzdWx0YW4vc3R5bGlzLmpzL2Jsb2IvZTY4NDNjMzczZWJjYmJmYWRlMjVlYmNjMjNmNTQwZWQ4NTA4ZGEwYS9zcmMvVG9rZW5pemVyLmpzI0wyMzktTDI0NFxuXG5cbnZhciBpZGVudGlmaWVyV2l0aFBvaW50VHJhY2tpbmcgPSBmdW5jdGlvbiBpZGVudGlmaWVyV2l0aFBvaW50VHJhY2tpbmcoYmVnaW4sIHBvaW50cywgaW5kZXgpIHtcbiAgdmFyIHByZXZpb3VzID0gMDtcbiAgdmFyIGNoYXJhY3RlciA9IDA7XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBwcmV2aW91cyA9IGNoYXJhY3RlcjtcbiAgICBjaGFyYWN0ZXIgPSBwZWVrKCk7IC8vICZcXGZcblxuICAgIGlmIChwcmV2aW91cyA9PT0gMzggJiYgY2hhcmFjdGVyID09PSAxMikge1xuICAgICAgcG9pbnRzW2luZGV4XSA9IDE7XG4gICAgfVxuXG4gICAgaWYgKHRva2VuKGNoYXJhY3RlcikpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIG5leHQoKTtcbiAgfVxuXG4gIHJldHVybiBzbGljZShiZWdpbiwgcG9zaXRpb24pO1xufTtcblxudmFyIHRvUnVsZXMgPSBmdW5jdGlvbiB0b1J1bGVzKHBhcnNlZCwgcG9pbnRzKSB7XG4gIC8vIHByZXRlbmQgd2UndmUgc3RhcnRlZCB3aXRoIGEgY29tbWFcbiAgdmFyIGluZGV4ID0gLTE7XG4gIHZhciBjaGFyYWN0ZXIgPSA0NDtcblxuICBkbyB7XG4gICAgc3dpdGNoICh0b2tlbihjaGFyYWN0ZXIpKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIC8vICZcXGZcbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gMzggJiYgcGVlaygpID09PSAxMikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgbm90IDEwMCUgY29ycmVjdCwgd2UgZG9uJ3QgYWNjb3VudCBmb3IgbGl0ZXJhbCBzZXF1ZW5jZXMgaGVyZSAtIGxpa2UgZm9yIGV4YW1wbGUgcXVvdGVkIHN0cmluZ3NcbiAgICAgICAgICAvLyBzdHlsaXMgaW5zZXJ0cyBcXGYgYWZ0ZXIgJiB0byBrbm93IHdoZW4gJiB3aGVyZSBpdCBzaG91bGQgcmVwbGFjZSB0aGlzIHNlcXVlbmNlIHdpdGggdGhlIGNvbnRleHQgc2VsZWN0b3JcbiAgICAgICAgICAvLyBhbmQgd2hlbiBpdCBzaG91bGQganVzdCBjb25jYXRlbmF0ZSB0aGUgb3V0ZXIgYW5kIGlubmVyIHNlbGVjdG9yc1xuICAgICAgICAgIC8vIGl0J3MgdmVyeSB1bmxpa2VseSBmb3IgdGhpcyBzZXF1ZW5jZSB0byBhY3R1YWxseSBhcHBlYXIgaW4gYSBkaWZmZXJlbnQgY29udGV4dCwgc28gd2UganVzdCBsZXZlcmFnZSB0aGlzIGZhY3QgaGVyZVxuICAgICAgICAgIHBvaW50c1tpbmRleF0gPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyc2VkW2luZGV4XSArPSBpZGVudGlmaWVyV2l0aFBvaW50VHJhY2tpbmcocG9zaXRpb24gLSAxLCBwb2ludHMsIGluZGV4KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcGFyc2VkW2luZGV4XSArPSBkZWxpbWl0KGNoYXJhY3Rlcik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDQ6XG4gICAgICAgIC8vIGNvbW1hXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IDQ0KSB7XG4gICAgICAgICAgLy8gY29sb25cbiAgICAgICAgICBwYXJzZWRbKytpbmRleF0gPSBwZWVrKCkgPT09IDU4ID8gJyZcXGYnIDogJyc7XG4gICAgICAgICAgcG9pbnRzW2luZGV4XSA9IHBhcnNlZFtpbmRleF0ubGVuZ3RoO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIC8vIGZhbGx0aHJvdWdoXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHBhcnNlZFtpbmRleF0gKz0gZnJvbShjaGFyYWN0ZXIpO1xuICAgIH1cbiAgfSB3aGlsZSAoY2hhcmFjdGVyID0gbmV4dCgpKTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcblxudmFyIGdldFJ1bGVzID0gZnVuY3Rpb24gZ2V0UnVsZXModmFsdWUsIHBvaW50cykge1xuICByZXR1cm4gZGVhbGxvYyh0b1J1bGVzKGFsbG9jKHZhbHVlKSwgcG9pbnRzKSk7XG59OyAvLyBXZWFrU2V0IHdvdWxkIGJlIG1vcmUgYXBwcm9wcmlhdGUsIGJ1dCBvbmx5IFdlYWtNYXAgaXMgc3VwcG9ydGVkIGluIElFMTFcblxuXG52YXIgZml4ZWRFbGVtZW50cyA9IC8qICNfX1BVUkVfXyAqL25ldyBXZWFrTWFwKCk7XG52YXIgY29tcGF0ID0gZnVuY3Rpb24gY29tcGF0KGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQudHlwZSAhPT0gJ3J1bGUnIHx8ICFlbGVtZW50LnBhcmVudCB8fCAvLyBwb3NpdGl2ZSAubGVuZ3RoIGluZGljYXRlcyB0aGF0IHRoaXMgcnVsZSBjb250YWlucyBwc2V1ZG9cbiAgLy8gbmVnYXRpdmUgLmxlbmd0aCBpbmRpY2F0ZXMgdGhhdCB0aGlzIHJ1bGUgaGFzIGJlZW4gYWxyZWFkeSBwcmVmaXhlZFxuICBlbGVtZW50Lmxlbmd0aCA8IDEpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgdmFsdWUgPSBlbGVtZW50LnZhbHVlLFxuICAgICAgcGFyZW50ID0gZWxlbWVudC5wYXJlbnQ7XG4gIHZhciBpc0ltcGxpY2l0UnVsZSA9IGVsZW1lbnQuY29sdW1uID09PSBwYXJlbnQuY29sdW1uICYmIGVsZW1lbnQubGluZSA9PT0gcGFyZW50LmxpbmU7XG5cbiAgd2hpbGUgKHBhcmVudC50eXBlICE9PSAncnVsZScpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgIGlmICghcGFyZW50KSByZXR1cm47XG4gIH0gLy8gc2hvcnQtY2lyY3VpdCBmb3IgdGhlIHNpbXBsZXN0IGNhc2VcblxuXG4gIGlmIChlbGVtZW50LnByb3BzLmxlbmd0aCA9PT0gMSAmJiB2YWx1ZS5jaGFyQ29kZUF0KDApICE9PSA1OFxuICAvKiBjb2xvbiAqL1xuICAmJiAhZml4ZWRFbGVtZW50cy5nZXQocGFyZW50KSkge1xuICAgIHJldHVybjtcbiAgfSAvLyBpZiB0aGlzIGlzIGFuIGltcGxpY2l0bHkgaW5zZXJ0ZWQgcnVsZSAodGhlIG9uZSBlYWdlcmx5IGluc2VydGVkIGF0IHRoZSBlYWNoIG5ldyBuZXN0ZWQgbGV2ZWwpXG4gIC8vIHRoZW4gdGhlIHByb3BzIGhhcyBhbHJlYWR5IGJlZW4gbWFuaXB1bGF0ZWQgYmVmb3JlaGFuZCBhcyB0aGV5IHRoYXQgYXJyYXkgaXMgc2hhcmVkIGJldHdlZW4gaXQgYW5kIGl0cyBcInJ1bGUgcGFyZW50XCJcblxuXG4gIGlmIChpc0ltcGxpY2l0UnVsZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGZpeGVkRWxlbWVudHMuc2V0KGVsZW1lbnQsIHRydWUpO1xuICB2YXIgcG9pbnRzID0gW107XG4gIHZhciBydWxlcyA9IGdldFJ1bGVzKHZhbHVlLCBwb2ludHMpO1xuICB2YXIgcGFyZW50UnVsZXMgPSBwYXJlbnQucHJvcHM7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGsgPSAwOyBpIDwgcnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBhcmVudFJ1bGVzLmxlbmd0aDsgaisrLCBrKyspIHtcbiAgICAgIGVsZW1lbnQucHJvcHNba10gPSBwb2ludHNbaV0gPyBydWxlc1tpXS5yZXBsYWNlKC8mXFxmL2csIHBhcmVudFJ1bGVzW2pdKSA6IHBhcmVudFJ1bGVzW2pdICsgXCIgXCIgKyBydWxlc1tpXTtcbiAgICB9XG4gIH1cbn07XG52YXIgcmVtb3ZlTGFiZWwgPSBmdW5jdGlvbiByZW1vdmVMYWJlbChlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50LnR5cGUgPT09ICdkZWNsJykge1xuICAgIHZhciB2YWx1ZSA9IGVsZW1lbnQudmFsdWU7XG5cbiAgICBpZiAoIC8vIGNoYXJjb2RlIGZvciBsXG4gICAgdmFsdWUuY2hhckNvZGVBdCgwKSA9PT0gMTA4ICYmIC8vIGNoYXJjb2RlIGZvciBiXG4gICAgdmFsdWUuY2hhckNvZGVBdCgyKSA9PT0gOTgpIHtcbiAgICAgIC8vIHRoaXMgaWdub3JlcyBsYWJlbFxuICAgICAgZWxlbWVudFtcInJldHVyblwiXSA9ICcnO1xuICAgICAgZWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIH1cbiAgfVxufTtcbnZhciBpZ25vcmVGbGFnID0gJ2Vtb3Rpb24tZGlzYWJsZS1zZXJ2ZXItcmVuZGVyaW5nLXVuc2FmZS1zZWxlY3Rvci13YXJuaW5nLXBsZWFzZS1kby1ub3QtdXNlLXRoaXMtdGhlLXdhcm5pbmctZXhpc3RzLWZvci1hLXJlYXNvbic7XG5cbnZhciBpc0lnbm9yaW5nQ29tbWVudCA9IGZ1bmN0aW9uIGlzSWdub3JpbmdDb21tZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuICEhZWxlbWVudCAmJiBlbGVtZW50LnR5cGUgPT09ICdjb21tJyAmJiBlbGVtZW50LmNoaWxkcmVuLmluZGV4T2YoaWdub3JlRmxhZykgPiAtMTtcbn07XG5cbnZhciBjcmVhdGVVbnNhZmVTZWxlY3RvcnNBbGFybSA9IGZ1bmN0aW9uIGNyZWF0ZVVuc2FmZVNlbGVjdG9yc0FsYXJtKGNhY2hlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgsIGNoaWxkcmVuKSB7XG4gICAgaWYgKGVsZW1lbnQudHlwZSAhPT0gJ3J1bGUnKSByZXR1cm47XG4gICAgdmFyIHVuc2FmZVBzZXVkb0NsYXNzZXMgPSBlbGVtZW50LnZhbHVlLm1hdGNoKC8oOmZpcnN0fDpudGh8Om50aC1sYXN0KS1jaGlsZC9nKTtcblxuICAgIGlmICh1bnNhZmVQc2V1ZG9DbGFzc2VzICYmIGNhY2hlLmNvbXBhdCAhPT0gdHJ1ZSkge1xuICAgICAgdmFyIHByZXZFbGVtZW50ID0gaW5kZXggPiAwID8gY2hpbGRyZW5baW5kZXggLSAxXSA6IG51bGw7XG5cbiAgICAgIGlmIChwcmV2RWxlbWVudCAmJiBpc0lnbm9yaW5nQ29tbWVudChsYXN0KHByZXZFbGVtZW50LmNoaWxkcmVuKSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1bnNhZmVQc2V1ZG9DbGFzc2VzLmZvckVhY2goZnVuY3Rpb24gKHVuc2FmZVBzZXVkb0NsYXNzKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGUgcHNldWRvIGNsYXNzIFxcXCJcIiArIHVuc2FmZVBzZXVkb0NsYXNzICsgXCJcXFwiIGlzIHBvdGVudGlhbGx5IHVuc2FmZSB3aGVuIGRvaW5nIHNlcnZlci1zaWRlIHJlbmRlcmluZy4gVHJ5IGNoYW5naW5nIGl0IHRvIFxcXCJcIiArIHVuc2FmZVBzZXVkb0NsYXNzLnNwbGl0KCctY2hpbGQnKVswXSArIFwiLW9mLXR5cGVcXFwiLlwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn07XG5cbnZhciBpc0ltcG9ydFJ1bGUgPSBmdW5jdGlvbiBpc0ltcG9ydFJ1bGUoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC50eXBlLmNoYXJDb2RlQXQoMSkgPT09IDEwNSAmJiBlbGVtZW50LnR5cGUuY2hhckNvZGVBdCgwKSA9PT0gNjQ7XG59O1xuXG52YXIgaXNQcmVwZW5kZWRXaXRoUmVndWxhclJ1bGVzID0gZnVuY3Rpb24gaXNQcmVwZW5kZWRXaXRoUmVndWxhclJ1bGVzKGluZGV4LCBjaGlsZHJlbikge1xuICBmb3IgKHZhciBpID0gaW5kZXggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmICghaXNJbXBvcnRSdWxlKGNoaWxkcmVuW2ldKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTsgLy8gdXNlIHRoaXMgdG8gcmVtb3ZlIGluY29ycmVjdCBlbGVtZW50cyBmcm9tIGZ1cnRoZXIgcHJvY2Vzc2luZ1xuLy8gc28gdGhleSBkb24ndCBnZXQgaGFuZGVkIHRvIHRoZSBgc2hlZXRgIChvciBhbnl0aGluZyBlbHNlKVxuLy8gYXMgdGhhdCBjb3VsZCBwb3RlbnRpYWxseSBsZWFkIHRvIGFkZGl0aW9uYWwgbG9ncyB3aGljaCBpbiB0dXJuIGNvdWxkIGJlIG92ZXJoZWxtaW5nIHRvIHRoZSB1c2VyXG5cblxudmFyIG51bGxpZnlFbGVtZW50ID0gZnVuY3Rpb24gbnVsbGlmeUVsZW1lbnQoZWxlbWVudCkge1xuICBlbGVtZW50LnR5cGUgPSAnJztcbiAgZWxlbWVudC52YWx1ZSA9ICcnO1xuICBlbGVtZW50W1wicmV0dXJuXCJdID0gJyc7XG4gIGVsZW1lbnQuY2hpbGRyZW4gPSAnJztcbiAgZWxlbWVudC5wcm9wcyA9ICcnO1xufTtcblxudmFyIGluY29ycmVjdEltcG9ydEFsYXJtID0gZnVuY3Rpb24gaW5jb3JyZWN0SW1wb3J0QWxhcm0oZWxlbWVudCwgaW5kZXgsIGNoaWxkcmVuKSB7XG4gIGlmICghaXNJbXBvcnRSdWxlKGVsZW1lbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGVsZW1lbnQucGFyZW50KSB7XG4gICAgY29uc29sZS5lcnJvcihcImBAaW1wb3J0YCBydWxlcyBjYW4ndCBiZSBuZXN0ZWQgaW5zaWRlIG90aGVyIHJ1bGVzLiBQbGVhc2UgbW92ZSBpdCB0byB0aGUgdG9wIGxldmVsIGFuZCBwdXQgaXQgYmVmb3JlIHJlZ3VsYXIgcnVsZXMuIEtlZXAgaW4gbWluZCB0aGF0IHRoZXkgY2FuIG9ubHkgYmUgdXNlZCB3aXRoaW4gZ2xvYmFsIHN0eWxlcy5cIik7XG4gICAgbnVsbGlmeUVsZW1lbnQoZWxlbWVudCk7XG4gIH0gZWxzZSBpZiAoaXNQcmVwZW5kZWRXaXRoUmVndWxhclJ1bGVzKGluZGV4LCBjaGlsZHJlbikpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiYEBpbXBvcnRgIHJ1bGVzIGNhbid0IGJlIGFmdGVyIG90aGVyIHJ1bGVzLiBQbGVhc2UgcHV0IHlvdXIgYEBpbXBvcnRgIHJ1bGVzIGJlZm9yZSB5b3VyIG90aGVyIHJ1bGVzLlwiKTtcbiAgICBudWxsaWZ5RWxlbWVudChlbGVtZW50KTtcbiAgfVxufTtcblxudmFyIGRlZmF1bHRTdHlsaXNQbHVnaW5zID0gW3ByZWZpeGVyXTtcblxudmFyIGNyZWF0ZUNhY2hlID0gZnVuY3Rpb24gY3JlYXRlQ2FjaGUob3B0aW9ucykge1xuICB2YXIga2V5ID0gb3B0aW9ucy5rZXk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWtleSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBoYXZlIHRvIGNvbmZpZ3VyZSBga2V5YCBmb3IgeW91ciBjYWNoZS4gUGxlYXNlIG1ha2Ugc3VyZSBpdCdzIHVuaXF1ZSAoYW5kIG5vdCBlcXVhbCB0byAnY3NzJykgYXMgaXQncyB1c2VkIGZvciBsaW5raW5nIHN0eWxlcyB0byB5b3VyIGNhY2hlLlxcblwiICsgXCJJZiBtdWx0aXBsZSBjYWNoZXMgc2hhcmUgdGhlIHNhbWUga2V5IHRoZXkgbWlnaHQgXFxcImZpZ2h0XFxcIiBmb3IgZWFjaCBvdGhlcidzIHN0eWxlIGVsZW1lbnRzLlwiKTtcbiAgfVxuXG4gIGlmICgga2V5ID09PSAnY3NzJykge1xuICAgIHZhciBzc3JTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3R5bGVbZGF0YS1lbW90aW9uXTpub3QoW2RhdGEtc10pXCIpOyAvLyBnZXQgU1NSZWQgc3R5bGVzIG91dCBvZiB0aGUgd2F5IG9mIFJlYWN0J3MgaHlkcmF0aW9uXG4gICAgLy8gZG9jdW1lbnQuaGVhZCBpcyBhIHNhZmUgcGxhY2UgdG8gbW92ZSB0aGVtIHRvKHRob3VnaCBub3RlIGRvY3VtZW50LmhlYWQgaXMgbm90IG5lY2Vzc2FyaWx5IHRoZSBsYXN0IHBsYWNlIHRoZXkgd2lsbCBiZSlcbiAgICAvLyBub3RlIHRoaXMgdmVyeSB2ZXJ5IGludGVudGlvbmFsbHkgdGFyZ2V0cyBhbGwgc3R5bGUgZWxlbWVudHMgcmVnYXJkbGVzcyBvZiB0aGUga2V5IHRvIGVuc3VyZVxuICAgIC8vIHRoYXQgY3JlYXRpbmcgYSBjYWNoZSB3b3JrcyBpbnNpZGUgb2YgcmVuZGVyIG9mIGEgUmVhY3QgY29tcG9uZW50XG5cbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHNzclN0eWxlcywgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIC8vIHdlIHdhbnQgdG8gb25seSBtb3ZlIGVsZW1lbnRzIHdoaWNoIGhhdmUgYSBzcGFjZSBpbiB0aGUgZGF0YS1lbW90aW9uIGF0dHJpYnV0ZSB2YWx1ZVxuICAgICAgLy8gYmVjYXVzZSB0aGF0IGluZGljYXRlcyB0aGF0IGl0IGlzIGFuIEVtb3Rpb24gMTEgc2VydmVyLXNpZGUgcmVuZGVyZWQgc3R5bGUgZWxlbWVudHNcbiAgICAgIC8vIHdoaWxlIHdlIHdpbGwgYWxyZWFkeSBpZ25vcmUgRW1vdGlvbiAxMSBjbGllbnQtc2lkZSBpbnNlcnRlZCBzdHlsZXMgYmVjYXVzZSBvZiB0aGUgOm5vdChbZGF0YS1zXSkgcGFydCBpbiB0aGUgc2VsZWN0b3JcbiAgICAgIC8vIEVtb3Rpb24gMTAgY2xpZW50LXNpZGUgaW5zZXJ0ZWQgc3R5bGVzIGRpZCBub3QgaGF2ZSBkYXRhLXMgKGJ1dCBpbXBvcnRhbnRseSBkaWQgbm90IGhhdmUgYSBzcGFjZSBpbiB0aGVpciBkYXRhLWVtb3Rpb24gYXR0cmlidXRlcylcbiAgICAgIC8vIHNvIGNoZWNraW5nIGZvciB0aGUgc3BhY2UgZW5zdXJlcyB0aGF0IGxvYWRpbmcgRW1vdGlvbiAxMSBhZnRlciBFbW90aW9uIDEwIGhhcyBpbnNlcnRlZCBzb21lIHN0eWxlc1xuICAgICAgLy8gd2lsbCBub3QgcmVzdWx0IGluIHRoZSBFbW90aW9uIDEwIHN0eWxlcyBiZWluZyBkZXN0cm95ZWRcbiAgICAgIHZhciBkYXRhRW1vdGlvbkF0dHJpYnV0ZSA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWVtb3Rpb24nKTtcblxuICAgICAgaWYgKGRhdGFFbW90aW9uQXR0cmlidXRlLmluZGV4T2YoJyAnKSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLXMnLCAnJyk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgc3R5bGlzUGx1Z2lucyA9IG9wdGlvbnMuc3R5bGlzUGx1Z2lucyB8fCBkZWZhdWx0U3R5bGlzUGx1Z2lucztcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICBpZiAoL1teYS16LV0vLnRlc3Qoa2V5KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRW1vdGlvbiBrZXkgbXVzdCBvbmx5IGNvbnRhaW4gbG93ZXIgY2FzZSBhbHBoYWJldGljYWwgY2hhcmFjdGVycyBhbmQgLSBidXQgXFxcIlwiICsga2V5ICsgXCJcXFwiIHdhcyBwYXNzZWRcIik7XG4gICAgfVxuICB9XG5cbiAgdmFyIGluc2VydGVkID0ge307IC8vICRGbG93Rml4TWVcblxuICB2YXIgY29udGFpbmVyO1xuICB2YXIgbm9kZXNUb0h5ZHJhdGUgPSBbXTtcblxuICB7XG4gICAgY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXIgfHwgZG9jdW1lbnQuaGVhZDtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKCAvLyB0aGlzIG1lYW5zIHdlIHdpbGwgaWdub3JlIGVsZW1lbnRzIHdoaWNoIGRvbid0IGhhdmUgYSBzcGFjZSBpbiB0aGVtIHdoaWNoXG4gICAgLy8gbWVhbnMgdGhhdCB0aGUgc3R5bGUgZWxlbWVudHMgd2UncmUgbG9va2luZyBhdCBhcmUgb25seSBFbW90aW9uIDExIHNlcnZlci1yZW5kZXJlZCBzdHlsZSBlbGVtZW50c1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdHlsZVtkYXRhLWVtb3Rpb25ePVxcXCJcIiArIGtleSArIFwiIFxcXCJdXCIpLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgdmFyIGF0dHJpYiA9IG5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1lbW90aW9uXCIpLnNwbGl0KCcgJyk7IC8vICRGbG93Rml4TWVcblxuICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhdHRyaWIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaW5zZXJ0ZWRbYXR0cmliW2ldXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIG5vZGVzVG9IeWRyYXRlLnB1c2gobm9kZSk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgX2luc2VydDtcblxuICB2YXIgb21uaXByZXNlbnRQbHVnaW5zID0gW2NvbXBhdCwgcmVtb3ZlTGFiZWxdO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgb21uaXByZXNlbnRQbHVnaW5zLnB1c2goY3JlYXRlVW5zYWZlU2VsZWN0b3JzQWxhcm0oe1xuICAgICAgZ2V0IGNvbXBhdCgpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlLmNvbXBhdDtcbiAgICAgIH1cblxuICAgIH0pLCBpbmNvcnJlY3RJbXBvcnRBbGFybSk7XG4gIH1cblxuICB7XG4gICAgdmFyIGN1cnJlbnRTaGVldDtcbiAgICB2YXIgZmluYWxpemluZ1BsdWdpbnMgPSBbc3RyaW5naWZ5LCBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgIGlmICghZWxlbWVudC5yb290KSB7XG4gICAgICAgIGlmIChlbGVtZW50W1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgY3VycmVudFNoZWV0Lmluc2VydChlbGVtZW50W1wicmV0dXJuXCJdKTtcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnZhbHVlICYmIGVsZW1lbnQudHlwZSAhPT0gQ09NTUVOVCkge1xuICAgICAgICAgIC8vIGluc2VydCBlbXB0eSBydWxlIGluIG5vbi1wcm9kdWN0aW9uIGVudmlyb25tZW50c1xuICAgICAgICAgIC8vIHNvIEBlbW90aW9uL2plc3QgY2FuIGdyYWIgYGtleWAgZnJvbSB0aGUgKEpTKURPTSBmb3IgY2FjaGVzIHdpdGhvdXQgYW55IHJ1bGVzIGluc2VydGVkIHlldFxuICAgICAgICAgIGN1cnJlbnRTaGVldC5pbnNlcnQoZWxlbWVudC52YWx1ZSArIFwie31cIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IDogcnVsZXNoZWV0KGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICBjdXJyZW50U2hlZXQuaW5zZXJ0KHJ1bGUpO1xuICAgIH0pXTtcbiAgICB2YXIgc2VyaWFsaXplciA9IG1pZGRsZXdhcmUob21uaXByZXNlbnRQbHVnaW5zLmNvbmNhdChzdHlsaXNQbHVnaW5zLCBmaW5hbGl6aW5nUGx1Z2lucykpO1xuXG4gICAgdmFyIHN0eWxpcyA9IGZ1bmN0aW9uIHN0eWxpcyhzdHlsZXMpIHtcbiAgICAgIHJldHVybiBzZXJpYWxpemUoY29tcGlsZShzdHlsZXMpLCBzZXJpYWxpemVyKTtcbiAgICB9O1xuXG4gICAgX2luc2VydCA9IGZ1bmN0aW9uIGluc2VydChzZWxlY3Rvciwgc2VyaWFsaXplZCwgc2hlZXQsIHNob3VsZENhY2hlKSB7XG4gICAgICBjdXJyZW50U2hlZXQgPSBzaGVldDtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgc2VyaWFsaXplZC5tYXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjdXJyZW50U2hlZXQgPSB7XG4gICAgICAgICAgaW5zZXJ0OiBmdW5jdGlvbiBpbnNlcnQocnVsZSkge1xuICAgICAgICAgICAgc2hlZXQuaW5zZXJ0KHJ1bGUgKyBzZXJpYWxpemVkLm1hcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBzdHlsaXMoc2VsZWN0b3IgPyBzZWxlY3RvciArIFwie1wiICsgc2VyaWFsaXplZC5zdHlsZXMgKyBcIn1cIiA6IHNlcmlhbGl6ZWQuc3R5bGVzKTtcblxuICAgICAgaWYgKHNob3VsZENhY2hlKSB7XG4gICAgICAgIGNhY2hlLmluc2VydGVkW3NlcmlhbGl6ZWQubmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSB7XG4gICAga2V5OiBrZXksXG4gICAgc2hlZXQ6IG5ldyBTdHlsZVNoZWV0KHtcbiAgICAgIGtleToga2V5LFxuICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICBub25jZTogb3B0aW9ucy5ub25jZSxcbiAgICAgIHNwZWVkeTogb3B0aW9ucy5zcGVlZHksXG4gICAgICBwcmVwZW5kOiBvcHRpb25zLnByZXBlbmQsXG4gICAgICBpbnNlcnRpb25Qb2ludDogb3B0aW9ucy5pbnNlcnRpb25Qb2ludFxuICAgIH0pLFxuICAgIG5vbmNlOiBvcHRpb25zLm5vbmNlLFxuICAgIGluc2VydGVkOiBpbnNlcnRlZCxcbiAgICByZWdpc3RlcmVkOiB7fSxcbiAgICBpbnNlcnQ6IF9pbnNlcnRcbiAgfTtcbiAgY2FjaGUuc2hlZXQuaHlkcmF0ZShub2Rlc1RvSHlkcmF0ZSk7XG4gIHJldHVybiBjYWNoZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNhY2hlO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9zcmMvRW51bS5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1V0aWxpdHkuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9QYXJzZXIuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9QcmVmaXhlci5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1Rva2VuaXplci5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1NlcmlhbGl6ZXIuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9NaWRkbGV3YXJlLmpzJ1xuIiwiZXhwb3J0IHZhciBNUyA9ICctbXMtJ1xuZXhwb3J0IHZhciBNT1ogPSAnLW1vei0nXG5leHBvcnQgdmFyIFdFQktJVCA9ICctd2Via2l0LSdcblxuZXhwb3J0IHZhciBDT01NRU5UID0gJ2NvbW0nXG5leHBvcnQgdmFyIFJVTEVTRVQgPSAncnVsZSdcbmV4cG9ydCB2YXIgREVDTEFSQVRJT04gPSAnZGVjbCdcblxuZXhwb3J0IHZhciBQQUdFID0gJ0BwYWdlJ1xuZXhwb3J0IHZhciBNRURJQSA9ICdAbWVkaWEnXG5leHBvcnQgdmFyIElNUE9SVCA9ICdAaW1wb3J0J1xuZXhwb3J0IHZhciBDSEFSU0VUID0gJ0BjaGFyc2V0J1xuZXhwb3J0IHZhciBWSUVXUE9SVCA9ICdAdmlld3BvcnQnXG5leHBvcnQgdmFyIFNVUFBPUlRTID0gJ0BzdXBwb3J0cydcbmV4cG9ydCB2YXIgRE9DVU1FTlQgPSAnQGRvY3VtZW50J1xuZXhwb3J0IHZhciBOQU1FU1BBQ0UgPSAnQG5hbWVzcGFjZSdcbmV4cG9ydCB2YXIgS0VZRlJBTUVTID0gJ0BrZXlmcmFtZXMnXG5leHBvcnQgdmFyIEZPTlRfRkFDRSA9ICdAZm9udC1mYWNlJ1xuZXhwb3J0IHZhciBDT1VOVEVSX1NUWUxFID0gJ0Bjb3VudGVyLXN0eWxlJ1xuZXhwb3J0IHZhciBGT05UX0ZFQVRVUkVfVkFMVUVTID0gJ0Bmb250LWZlYXR1cmUtdmFsdWVzJ1xuIiwiaW1wb3J0IHtNUywgTU9aLCBXRUJLSVQsIFJVTEVTRVQsIEtFWUZSQU1FUywgREVDTEFSQVRJT059IGZyb20gJy4vRW51bS5qcydcbmltcG9ydCB7bWF0Y2gsIGNoYXJhdCwgc3Vic3RyLCBzdHJsZW4sIHNpemVvZiwgcmVwbGFjZSwgY29tYmluZX0gZnJvbSAnLi9VdGlsaXR5LmpzJ1xuaW1wb3J0IHtjb3B5LCB0b2tlbml6ZX0gZnJvbSAnLi9Ub2tlbml6ZXIuanMnXG5pbXBvcnQge3NlcmlhbGl6ZX0gZnJvbSAnLi9TZXJpYWxpemVyLmpzJ1xuaW1wb3J0IHtwcmVmaXh9IGZyb20gJy4vUHJlZml4ZXIuanMnXG5cbi8qKlxuICogQHBhcmFtIHtmdW5jdGlvbltdfSBjb2xsZWN0aW9uXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUgKGNvbGxlY3Rpb24pIHtcblx0dmFyIGxlbmd0aCA9IHNpemVvZihjb2xsZWN0aW9uKVxuXG5cdHJldHVybiBmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgsIGNoaWxkcmVuLCBjYWxsYmFjaykge1xuXHRcdHZhciBvdXRwdXQgPSAnJ1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcblx0XHRcdG91dHB1dCArPSBjb2xsZWN0aW9uW2ldKGVsZW1lbnQsIGluZGV4LCBjaGlsZHJlbiwgY2FsbGJhY2spIHx8ICcnXG5cblx0XHRyZXR1cm4gb3V0cHV0XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBydWxlc2hlZXQgKGNhbGxiYWNrKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdGlmICghZWxlbWVudC5yb290KVxuXHRcdFx0aWYgKGVsZW1lbnQgPSBlbGVtZW50LnJldHVybilcblx0XHRcdFx0Y2FsbGJhY2soZWxlbWVudClcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBlbGVtZW50XG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7b2JqZWN0W119IGNoaWxkcmVuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJlZml4ZXIgKGVsZW1lbnQsIGluZGV4LCBjaGlsZHJlbiwgY2FsbGJhY2spIHtcblx0aWYgKGVsZW1lbnQubGVuZ3RoID4gLTEpXG5cdFx0aWYgKCFlbGVtZW50LnJldHVybilcblx0XHRcdHN3aXRjaCAoZWxlbWVudC50eXBlKSB7XG5cdFx0XHRcdGNhc2UgREVDTEFSQVRJT046IGVsZW1lbnQucmV0dXJuID0gcHJlZml4KGVsZW1lbnQudmFsdWUsIGVsZW1lbnQubGVuZ3RoKVxuXHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdGNhc2UgS0VZRlJBTUVTOlxuXHRcdFx0XHRcdHJldHVybiBzZXJpYWxpemUoW2NvcHkoZWxlbWVudCwge3ZhbHVlOiByZXBsYWNlKGVsZW1lbnQudmFsdWUsICdAJywgJ0AnICsgV0VCS0lUKX0pXSwgY2FsbGJhY2spXG5cdFx0XHRcdGNhc2UgUlVMRVNFVDpcblx0XHRcdFx0XHRpZiAoZWxlbWVudC5sZW5ndGgpXG5cdFx0XHRcdFx0XHRyZXR1cm4gY29tYmluZShlbGVtZW50LnByb3BzLCBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0XHRcdFx0c3dpdGNoIChtYXRjaCh2YWx1ZSwgLyg6OnBsYWNcXHcrfDpyZWFkLVxcdyspLykpIHtcblx0XHRcdFx0XHRcdFx0XHQvLyA6cmVhZC0ob25seXx3cml0ZSlcblx0XHRcdFx0XHRcdFx0XHRjYXNlICc6cmVhZC1vbmx5JzogY2FzZSAnOnJlYWQtd3JpdGUnOlxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHNlcmlhbGl6ZShbY29weShlbGVtZW50LCB7cHJvcHM6IFtyZXBsYWNlKHZhbHVlLCAvOihyZWFkLVxcdyspLywgJzonICsgTU9aICsgJyQxJyldfSldLCBjYWxsYmFjaylcblx0XHRcdFx0XHRcdFx0XHQvLyA6cGxhY2Vob2xkZXJcblx0XHRcdFx0XHRcdFx0XHRjYXNlICc6OnBsYWNlaG9sZGVyJzpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBzZXJpYWxpemUoW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb3B5KGVsZW1lbnQsIHtwcm9wczogW3JlcGxhY2UodmFsdWUsIC86KHBsYWNcXHcrKS8sICc6JyArIFdFQktJVCArICdpbnB1dC0kMScpXX0pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb3B5KGVsZW1lbnQsIHtwcm9wczogW3JlcGxhY2UodmFsdWUsIC86KHBsYWNcXHcrKS8sICc6JyArIE1PWiArICckMScpXX0pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb3B5KGVsZW1lbnQsIHtwcm9wczogW3JlcGxhY2UodmFsdWUsIC86KHBsYWNcXHcrKS8sIE1TICsgJ2lucHV0LSQxJyldfSlcblx0XHRcdFx0XHRcdFx0XHRcdF0sIGNhbGxiYWNrKVxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0cmV0dXJuICcnXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBlbGVtZW50XG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7b2JqZWN0W119IGNoaWxkcmVuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuYW1lc3BhY2UgKGVsZW1lbnQpIHtcblx0c3dpdGNoIChlbGVtZW50LnR5cGUpIHtcblx0XHRjYXNlIFJVTEVTRVQ6XG5cdFx0XHRlbGVtZW50LnByb3BzID0gZWxlbWVudC5wcm9wcy5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiBjb21iaW5lKHRva2VuaXplKHZhbHVlKSwgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgY2hpbGRyZW4pIHtcblx0XHRcdFx0XHRzd2l0Y2ggKGNoYXJhdCh2YWx1ZSwgMCkpIHtcblx0XHRcdFx0XHRcdC8vIFxcZlxuXHRcdFx0XHRcdFx0Y2FzZSAxMjpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHN1YnN0cih2YWx1ZSwgMSwgc3RybGVuKHZhbHVlKSlcblx0XHRcdFx0XHRcdC8vIFxcMCAoICsgPiB+XG5cdFx0XHRcdFx0XHRjYXNlIDA6IGNhc2UgNDA6IGNhc2UgNDM6IGNhc2UgNjI6IGNhc2UgMTI2OlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWVcblx0XHRcdFx0XHRcdC8vIDpcblx0XHRcdFx0XHRcdGNhc2UgNTg6XG5cdFx0XHRcdFx0XHRcdGlmIChjaGlsZHJlblsrK2luZGV4XSA9PT0gJ2dsb2JhbCcpXG5cdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW5baW5kZXhdID0gJycsIGNoaWxkcmVuWysraW5kZXhdID0gJ1xcZicgKyBzdWJzdHIoY2hpbGRyZW5baW5kZXhdLCBpbmRleCA9IDEsIC0xKVxuXHRcdFx0XHRcdFx0Ly8gXFxzXG5cdFx0XHRcdFx0XHRjYXNlIDMyOlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gaW5kZXggPT09IDEgPyAnJyA6IHZhbHVlXG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRzd2l0Y2ggKGluZGV4KSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAwOiBlbGVtZW50ID0gdmFsdWVcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBzaXplb2YoY2hpbGRyZW4pID4gMSA/ICcnIDogdmFsdWVcblx0XHRcdFx0XHRcdFx0XHRjYXNlIGluZGV4ID0gc2l6ZW9mKGNoaWxkcmVuKSAtIDE6IGNhc2UgMjpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBpbmRleCA9PT0gMiA/IHZhbHVlICsgZWxlbWVudCArIGVsZW1lbnQgOiB2YWx1ZSArIGVsZW1lbnRcblx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9KVxuXHR9XG59XG4iLCJpbXBvcnQge0NPTU1FTlQsIFJVTEVTRVQsIERFQ0xBUkFUSU9OfSBmcm9tICcuL0VudW0uanMnXG5pbXBvcnQge2FicywgdHJpbSwgZnJvbSwgc2l6ZW9mLCBzdHJsZW4sIHN1YnN0ciwgYXBwZW5kLCByZXBsYWNlLCBpbmRleG9mfSBmcm9tICcuL1V0aWxpdHkuanMnXG5pbXBvcnQge25vZGUsIGNoYXIsIHByZXYsIG5leHQsIHBlZWssIGNhcmV0LCBhbGxvYywgZGVhbGxvYywgZGVsaW1pdCwgd2hpdGVzcGFjZSwgZXNjYXBpbmcsIGlkZW50aWZpZXIsIGNvbW1lbnRlcn0gZnJvbSAnLi9Ub2tlbml6ZXIuanMnXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtvYmplY3RbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGUgKHZhbHVlKSB7XG5cdHJldHVybiBkZWFsbG9jKHBhcnNlKCcnLCBudWxsLCBudWxsLCBudWxsLCBbJyddLCB2YWx1ZSA9IGFsbG9jKHZhbHVlKSwgMCwgWzBdLCB2YWx1ZSkpXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge29iamVjdH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3Q/fSBwYXJlbnRcbiAqIEBwYXJhbSB7c3RyaW5nW119IHJ1bGVcbiAqIEBwYXJhbSB7c3RyaW5nW119IHJ1bGVzXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBydWxlc2V0c1xuICogQHBhcmFtIHtudW1iZXJbXX0gcHNldWRvXG4gKiBAcGFyYW0ge251bWJlcltdfSBwb2ludHNcbiAqIEBwYXJhbSB7c3RyaW5nW119IGRlY2xhcmF0aW9uc1xuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UgKHZhbHVlLCByb290LCBwYXJlbnQsIHJ1bGUsIHJ1bGVzLCBydWxlc2V0cywgcHNldWRvLCBwb2ludHMsIGRlY2xhcmF0aW9ucykge1xuXHR2YXIgaW5kZXggPSAwXG5cdHZhciBvZmZzZXQgPSAwXG5cdHZhciBsZW5ndGggPSBwc2V1ZG9cblx0dmFyIGF0cnVsZSA9IDBcblx0dmFyIHByb3BlcnR5ID0gMFxuXHR2YXIgcHJldmlvdXMgPSAwXG5cdHZhciB2YXJpYWJsZSA9IDFcblx0dmFyIHNjYW5uaW5nID0gMVxuXHR2YXIgYW1wZXJzYW5kID0gMVxuXHR2YXIgY2hhcmFjdGVyID0gMFxuXHR2YXIgdHlwZSA9ICcnXG5cdHZhciBwcm9wcyA9IHJ1bGVzXG5cdHZhciBjaGlsZHJlbiA9IHJ1bGVzZXRzXG5cdHZhciByZWZlcmVuY2UgPSBydWxlXG5cdHZhciBjaGFyYWN0ZXJzID0gdHlwZVxuXG5cdHdoaWxlIChzY2FubmluZylcblx0XHRzd2l0Y2ggKHByZXZpb3VzID0gY2hhcmFjdGVyLCBjaGFyYWN0ZXIgPSBuZXh0KCkpIHtcblx0XHRcdC8vIChcblx0XHRcdGNhc2UgNDA6XG5cdFx0XHRcdGlmIChwcmV2aW91cyAhPSAxMDggJiYgY2hhcmFjdGVycy5jaGFyQ29kZUF0KGxlbmd0aCAtIDEpID09IDU4KSB7XG5cdFx0XHRcdFx0aWYgKGluZGV4b2YoY2hhcmFjdGVycyArPSByZXBsYWNlKGRlbGltaXQoY2hhcmFjdGVyKSwgJyYnLCAnJlxcZicpLCAnJlxcZicpICE9IC0xKVxuXHRcdFx0XHRcdFx0YW1wZXJzYW5kID0gLTFcblx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHR9XG5cdFx0XHQvLyBcIiAnIFtcblx0XHRcdGNhc2UgMzQ6IGNhc2UgMzk6IGNhc2UgOTE6XG5cdFx0XHRcdGNoYXJhY3RlcnMgKz0gZGVsaW1pdChjaGFyYWN0ZXIpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHQvLyBcXHQgXFxuIFxcciBcXHNcblx0XHRcdGNhc2UgOTogY2FzZSAxMDogY2FzZSAxMzogY2FzZSAzMjpcblx0XHRcdFx0Y2hhcmFjdGVycyArPSB3aGl0ZXNwYWNlKHByZXZpb3VzKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Ly8gXFxcblx0XHRcdGNhc2UgOTI6XG5cdFx0XHRcdGNoYXJhY3RlcnMgKz0gZXNjYXBpbmcoY2FyZXQoKSAtIDEsIDcpXG5cdFx0XHRcdGNvbnRpbnVlXG5cdFx0XHQvLyAvXG5cdFx0XHRjYXNlIDQ3OlxuXHRcdFx0XHRzd2l0Y2ggKHBlZWsoKSkge1xuXHRcdFx0XHRcdGNhc2UgNDI6IGNhc2UgNDc6XG5cdFx0XHRcdFx0XHRhcHBlbmQoY29tbWVudChjb21tZW50ZXIobmV4dCgpLCBjYXJldCgpKSwgcm9vdCwgcGFyZW50KSwgZGVjbGFyYXRpb25zKVxuXHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0Y2hhcmFjdGVycyArPSAnLydcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Ly8ge1xuXHRcdFx0Y2FzZSAxMjMgKiB2YXJpYWJsZTpcblx0XHRcdFx0cG9pbnRzW2luZGV4KytdID0gc3RybGVuKGNoYXJhY3RlcnMpICogYW1wZXJzYW5kXG5cdFx0XHQvLyB9IDsgXFwwXG5cdFx0XHRjYXNlIDEyNSAqIHZhcmlhYmxlOiBjYXNlIDU5OiBjYXNlIDA6XG5cdFx0XHRcdHN3aXRjaCAoY2hhcmFjdGVyKSB7XG5cdFx0XHRcdFx0Ly8gXFwwIH1cblx0XHRcdFx0XHRjYXNlIDA6IGNhc2UgMTI1OiBzY2FubmluZyA9IDBcblx0XHRcdFx0XHQvLyA7XG5cdFx0XHRcdFx0Y2FzZSA1OSArIG9mZnNldDpcblx0XHRcdFx0XHRcdGlmIChwcm9wZXJ0eSA+IDAgJiYgKHN0cmxlbihjaGFyYWN0ZXJzKSAtIGxlbmd0aCkpXG5cdFx0XHRcdFx0XHRcdGFwcGVuZChwcm9wZXJ0eSA+IDMyID8gZGVjbGFyYXRpb24oY2hhcmFjdGVycyArICc7JywgcnVsZSwgcGFyZW50LCBsZW5ndGggLSAxKSA6IGRlY2xhcmF0aW9uKHJlcGxhY2UoY2hhcmFjdGVycywgJyAnLCAnJykgKyAnOycsIHJ1bGUsIHBhcmVudCwgbGVuZ3RoIC0gMiksIGRlY2xhcmF0aW9ucylcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0Ly8gQCA7XG5cdFx0XHRcdFx0Y2FzZSA1OTogY2hhcmFjdGVycyArPSAnOydcblx0XHRcdFx0XHQvLyB7IHJ1bGUvYXQtcnVsZVxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRhcHBlbmQocmVmZXJlbmNlID0gcnVsZXNldChjaGFyYWN0ZXJzLCByb290LCBwYXJlbnQsIGluZGV4LCBvZmZzZXQsIHJ1bGVzLCBwb2ludHMsIHR5cGUsIHByb3BzID0gW10sIGNoaWxkcmVuID0gW10sIGxlbmd0aCksIHJ1bGVzZXRzKVxuXG5cdFx0XHRcdFx0XHRpZiAoY2hhcmFjdGVyID09PSAxMjMpXG5cdFx0XHRcdFx0XHRcdGlmIChvZmZzZXQgPT09IDApXG5cdFx0XHRcdFx0XHRcdFx0cGFyc2UoY2hhcmFjdGVycywgcm9vdCwgcmVmZXJlbmNlLCByZWZlcmVuY2UsIHByb3BzLCBydWxlc2V0cywgbGVuZ3RoLCBwb2ludHMsIGNoaWxkcmVuKVxuXHRcdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdFx0c3dpdGNoIChhdHJ1bGUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIGQgbSBzXG5cdFx0XHRcdFx0XHRcdFx0XHRjYXNlIDEwMDogY2FzZSAxMDk6IGNhc2UgMTE1OlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYXJzZSh2YWx1ZSwgcmVmZXJlbmNlLCByZWZlcmVuY2UsIHJ1bGUgJiYgYXBwZW5kKHJ1bGVzZXQodmFsdWUsIHJlZmVyZW5jZSwgcmVmZXJlbmNlLCAwLCAwLCBydWxlcywgcG9pbnRzLCB0eXBlLCBydWxlcywgcHJvcHMgPSBbXSwgbGVuZ3RoKSwgY2hpbGRyZW4pLCBydWxlcywgY2hpbGRyZW4sIGxlbmd0aCwgcG9pbnRzLCBydWxlID8gcHJvcHMgOiBjaGlsZHJlbilcblx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhcnNlKGNoYXJhY3RlcnMsIHJlZmVyZW5jZSwgcmVmZXJlbmNlLCByZWZlcmVuY2UsIFsnJ10sIGNoaWxkcmVuLCAwLCBwb2ludHMsIGNoaWxkcmVuKVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGluZGV4ID0gb2Zmc2V0ID0gcHJvcGVydHkgPSAwLCB2YXJpYWJsZSA9IGFtcGVyc2FuZCA9IDEsIHR5cGUgPSBjaGFyYWN0ZXJzID0gJycsIGxlbmd0aCA9IHBzZXVkb1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Ly8gOlxuXHRcdFx0Y2FzZSA1ODpcblx0XHRcdFx0bGVuZ3RoID0gMSArIHN0cmxlbihjaGFyYWN0ZXJzKSwgcHJvcGVydHkgPSBwcmV2aW91c1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0aWYgKHZhcmlhYmxlIDwgMSlcblx0XHRcdFx0XHRpZiAoY2hhcmFjdGVyID09IDEyMylcblx0XHRcdFx0XHRcdC0tdmFyaWFibGVcblx0XHRcdFx0XHRlbHNlIGlmIChjaGFyYWN0ZXIgPT0gMTI1ICYmIHZhcmlhYmxlKysgPT0gMCAmJiBwcmV2KCkgPT0gMTI1KVxuXHRcdFx0XHRcdFx0Y29udGludWVcblxuXHRcdFx0XHRzd2l0Y2ggKGNoYXJhY3RlcnMgKz0gZnJvbShjaGFyYWN0ZXIpLCBjaGFyYWN0ZXIgKiB2YXJpYWJsZSkge1xuXHRcdFx0XHRcdC8vICZcblx0XHRcdFx0XHRjYXNlIDM4OlxuXHRcdFx0XHRcdFx0YW1wZXJzYW5kID0gb2Zmc2V0ID4gMCA/IDEgOiAoY2hhcmFjdGVycyArPSAnXFxmJywgLTEpXG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdC8vICxcblx0XHRcdFx0XHRjYXNlIDQ0OlxuXHRcdFx0XHRcdFx0cG9pbnRzW2luZGV4KytdID0gKHN0cmxlbihjaGFyYWN0ZXJzKSAtIDEpICogYW1wZXJzYW5kLCBhbXBlcnNhbmQgPSAxXG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdC8vIEBcblx0XHRcdFx0XHRjYXNlIDY0OlxuXHRcdFx0XHRcdFx0Ly8gLVxuXHRcdFx0XHRcdFx0aWYgKHBlZWsoKSA9PT0gNDUpXG5cdFx0XHRcdFx0XHRcdGNoYXJhY3RlcnMgKz0gZGVsaW1pdChuZXh0KCkpXG5cblx0XHRcdFx0XHRcdGF0cnVsZSA9IHBlZWsoKSwgb2Zmc2V0ID0gbGVuZ3RoID0gc3RybGVuKHR5cGUgPSBjaGFyYWN0ZXJzICs9IGlkZW50aWZpZXIoY2FyZXQoKSkpLCBjaGFyYWN0ZXIrK1xuXHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHQvLyAtXG5cdFx0XHRcdFx0Y2FzZSA0NTpcblx0XHRcdFx0XHRcdGlmIChwcmV2aW91cyA9PT0gNDUgJiYgc3RybGVuKGNoYXJhY3RlcnMpID09IDIpXG5cdFx0XHRcdFx0XHRcdHZhcmlhYmxlID0gMFxuXHRcdFx0XHR9XG5cdFx0fVxuXG5cdHJldHVybiBydWxlc2V0c1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0P30gcGFyZW50XG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAqIEBwYXJhbSB7c3RyaW5nW119IHJ1bGVzXG4gKiBAcGFyYW0ge251bWJlcltdfSBwb2ludHNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmdbXX0gY2hpbGRyZW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzZXQgKHZhbHVlLCByb290LCBwYXJlbnQsIGluZGV4LCBvZmZzZXQsIHJ1bGVzLCBwb2ludHMsIHR5cGUsIHByb3BzLCBjaGlsZHJlbiwgbGVuZ3RoKSB7XG5cdHZhciBwb3N0ID0gb2Zmc2V0IC0gMVxuXHR2YXIgcnVsZSA9IG9mZnNldCA9PT0gMCA/IHJ1bGVzIDogWycnXVxuXHR2YXIgc2l6ZSA9IHNpemVvZihydWxlKVxuXG5cdGZvciAodmFyIGkgPSAwLCBqID0gMCwgayA9IDA7IGkgPCBpbmRleDsgKytpKVxuXHRcdGZvciAodmFyIHggPSAwLCB5ID0gc3Vic3RyKHZhbHVlLCBwb3N0ICsgMSwgcG9zdCA9IGFicyhqID0gcG9pbnRzW2ldKSksIHogPSB2YWx1ZTsgeCA8IHNpemU7ICsreClcblx0XHRcdGlmICh6ID0gdHJpbShqID4gMCA/IHJ1bGVbeF0gKyAnICcgKyB5IDogcmVwbGFjZSh5LCAvJlxcZi9nLCBydWxlW3hdKSkpXG5cdFx0XHRcdHByb3BzW2srK10gPSB6XG5cblx0cmV0dXJuIG5vZGUodmFsdWUsIHJvb3QsIHBhcmVudCwgb2Zmc2V0ID09PSAwID8gUlVMRVNFVCA6IHR5cGUsIHByb3BzLCBjaGlsZHJlbiwgbGVuZ3RoKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0P30gcGFyZW50XG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21tZW50ICh2YWx1ZSwgcm9vdCwgcGFyZW50KSB7XG5cdHJldHVybiBub2RlKHZhbHVlLCByb290LCBwYXJlbnQsIENPTU1FTlQsIGZyb20oY2hhcigpKSwgc3Vic3RyKHZhbHVlLCAyLCAtMiksIDApXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge29iamVjdH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3Q/fSBwYXJlbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY2xhcmF0aW9uICh2YWx1ZSwgcm9vdCwgcGFyZW50LCBsZW5ndGgpIHtcblx0cmV0dXJuIG5vZGUodmFsdWUsIHJvb3QsIHBhcmVudCwgREVDTEFSQVRJT04sIHN1YnN0cih2YWx1ZSwgMCwgbGVuZ3RoKSwgc3Vic3RyKHZhbHVlLCBsZW5ndGggKyAxLCAtMSksIGxlbmd0aClcbn1cbiIsImltcG9ydCB7TVMsIE1PWiwgV0VCS0lUfSBmcm9tICcuL0VudW0uanMnXG5pbXBvcnQge2hhc2gsIGNoYXJhdCwgc3RybGVuLCBpbmRleG9mLCByZXBsYWNlfSBmcm9tICcuL1V0aWxpdHkuanMnXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmVmaXggKHZhbHVlLCBsZW5ndGgpIHtcblx0c3dpdGNoIChoYXNoKHZhbHVlLCBsZW5ndGgpKSB7XG5cdFx0Ly8gY29sb3ItYWRqdXN0XG5cdFx0Y2FzZSA1MTAzOlxuXHRcdFx0cmV0dXJuIFdFQktJVCArICdwcmludC0nICsgdmFsdWUgKyB2YWx1ZVxuXHRcdC8vIGFuaW1hdGlvbiwgYW5pbWF0aW9uLShkZWxheXxkaXJlY3Rpb258ZHVyYXRpb258ZmlsbC1tb2RlfGl0ZXJhdGlvbi1jb3VudHxuYW1lfHBsYXktc3RhdGV8dGltaW5nLWZ1bmN0aW9uKVxuXHRcdGNhc2UgNTczNzogY2FzZSA0MjAxOiBjYXNlIDMxNzc6IGNhc2UgMzQzMzogY2FzZSAxNjQxOiBjYXNlIDQ0NTc6IGNhc2UgMjkyMTpcblx0XHQvLyB0ZXh0LWRlY29yYXRpb24sIGZpbHRlciwgY2xpcC1wYXRoLCBiYWNrZmFjZS12aXNpYmlsaXR5LCBjb2x1bW4sIGJveC1kZWNvcmF0aW9uLWJyZWFrXG5cdFx0Y2FzZSA1NTcyOiBjYXNlIDYzNTY6IGNhc2UgNTg0NDogY2FzZSAzMTkxOiBjYXNlIDY2NDU6IGNhc2UgMzAwNTpcblx0XHQvLyBtYXNrLCBtYXNrLWltYWdlLCBtYXNrLShtb2RlfGNsaXB8c2l6ZSksIG1hc2stKHJlcGVhdHxvcmlnaW4pLCBtYXNrLXBvc2l0aW9uLCBtYXNrLWNvbXBvc2l0ZSxcblx0XHRjYXNlIDYzOTE6IGNhc2UgNTg3OTogY2FzZSA1NjIzOiBjYXNlIDYxMzU6IGNhc2UgNDU5OTogY2FzZSA0ODU1OlxuXHRcdC8vIGJhY2tncm91bmQtY2xpcCwgY29sdW1ucywgY29sdW1uLShjb3VudHxmaWxsfGdhcHxydWxlfHJ1bGUtY29sb3J8cnVsZS1zdHlsZXxydWxlLXdpZHRofHNwYW58d2lkdGgpXG5cdFx0Y2FzZSA0MjE1OiBjYXNlIDYzODk6IGNhc2UgNTEwOTogY2FzZSA1MzY1OiBjYXNlIDU2MjE6IGNhc2UgMzgyOTpcblx0XHRcdHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIHZhbHVlXG5cdFx0Ly8gYXBwZWFyYW5jZSwgdXNlci1zZWxlY3QsIHRyYW5zZm9ybSwgaHlwaGVucywgdGV4dC1zaXplLWFkanVzdFxuXHRcdGNhc2UgNTM0OTogY2FzZSA0MjQ2OiBjYXNlIDQ4MTA6IGNhc2UgNjk2ODogY2FzZSAyNzU2OlxuXHRcdFx0cmV0dXJuIFdFQktJVCArIHZhbHVlICsgTU9aICsgdmFsdWUgKyBNUyArIHZhbHVlICsgdmFsdWVcblx0XHQvLyBmbGV4LCBmbGV4LWRpcmVjdGlvblxuXHRcdGNhc2UgNjgyODogY2FzZSA0MjY4OlxuXHRcdFx0cmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyB2YWx1ZSArIHZhbHVlXG5cdFx0Ly8gb3JkZXJcblx0XHRjYXNlIDYxNjU6XG5cdFx0XHRyZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArICdmbGV4LScgKyB2YWx1ZSArIHZhbHVlXG5cdFx0Ly8gYWxpZ24taXRlbXNcblx0XHRjYXNlIDUxODc6XG5cdFx0XHRyZXR1cm4gV0VCS0lUICsgdmFsdWUgKyByZXBsYWNlKHZhbHVlLCAvKFxcdyspLisoOlteXSspLywgV0VCS0lUICsgJ2JveC0kMSQyJyArIE1TICsgJ2ZsZXgtJDEkMicpICsgdmFsdWVcblx0XHQvLyBhbGlnbi1zZWxmXG5cdFx0Y2FzZSA1NDQzOlxuXHRcdFx0cmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyAnZmxleC1pdGVtLScgKyByZXBsYWNlKHZhbHVlLCAvZmxleC18LXNlbGYvLCAnJykgKyB2YWx1ZVxuXHRcdC8vIGFsaWduLWNvbnRlbnRcblx0XHRjYXNlIDQ2NzU6XG5cdFx0XHRyZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArICdmbGV4LWxpbmUtcGFjaycgKyByZXBsYWNlKHZhbHVlLCAvYWxpZ24tY29udGVudHxmbGV4LXwtc2VsZi8sICcnKSArIHZhbHVlXG5cdFx0Ly8gZmxleC1zaHJpbmtcblx0XHRjYXNlIDU1NDg6XG5cdFx0XHRyZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArIHJlcGxhY2UodmFsdWUsICdzaHJpbmsnLCAnbmVnYXRpdmUnKSArIHZhbHVlXG5cdFx0Ly8gZmxleC1iYXNpc1xuXHRcdGNhc2UgNTI5Mjpcblx0XHRcdHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgcmVwbGFjZSh2YWx1ZSwgJ2Jhc2lzJywgJ3ByZWZlcnJlZC1zaXplJykgKyB2YWx1ZVxuXHRcdC8vIGZsZXgtZ3Jvd1xuXHRcdGNhc2UgNjA2MDpcblx0XHRcdHJldHVybiBXRUJLSVQgKyAnYm94LScgKyByZXBsYWNlKHZhbHVlLCAnLWdyb3cnLCAnJykgKyBXRUJLSVQgKyB2YWx1ZSArIE1TICsgcmVwbGFjZSh2YWx1ZSwgJ2dyb3cnLCAncG9zaXRpdmUnKSArIHZhbHVlXG5cdFx0Ly8gdHJhbnNpdGlvblxuXHRcdGNhc2UgNDU1NDpcblx0XHRcdHJldHVybiBXRUJLSVQgKyByZXBsYWNlKHZhbHVlLCAvKFteLV0pKHRyYW5zZm9ybSkvZywgJyQxJyArIFdFQktJVCArICckMicpICsgdmFsdWVcblx0XHQvLyBjdXJzb3Jcblx0XHRjYXNlIDYxODc6XG5cdFx0XHRyZXR1cm4gcmVwbGFjZShyZXBsYWNlKHJlcGxhY2UodmFsdWUsIC8oem9vbS18Z3JhYikvLCBXRUJLSVQgKyAnJDEnKSwgLyhpbWFnZS1zZXQpLywgV0VCS0lUICsgJyQxJyksIHZhbHVlLCAnJykgKyB2YWx1ZVxuXHRcdC8vIGJhY2tncm91bmQsIGJhY2tncm91bmQtaW1hZ2Vcblx0XHRjYXNlIDU0OTU6IGNhc2UgMzk1OTpcblx0XHRcdHJldHVybiByZXBsYWNlKHZhbHVlLCAvKGltYWdlLXNldFxcKFteXSopLywgV0VCS0lUICsgJyQxJyArICckYCQxJylcblx0XHQvLyBqdXN0aWZ5LWNvbnRlbnRcblx0XHRjYXNlIDQ5Njg6XG5cdFx0XHRyZXR1cm4gcmVwbGFjZShyZXBsYWNlKHZhbHVlLCAvKC4rOikoZmxleC0pPyguKikvLCBXRUJLSVQgKyAnYm94LXBhY2s6JDMnICsgTVMgKyAnZmxleC1wYWNrOiQzJyksIC9zListYlteO10rLywgJ2p1c3RpZnknKSArIFdFQktJVCArIHZhbHVlICsgdmFsdWVcblx0XHQvLyAobWFyZ2lufHBhZGRpbmcpLWlubGluZS0oc3RhcnR8ZW5kKVxuXHRcdGNhc2UgNDA5NTogY2FzZSAzNTgzOiBjYXNlIDQwNjg6IGNhc2UgMjUzMjpcblx0XHRcdHJldHVybiByZXBsYWNlKHZhbHVlLCAvKC4rKS1pbmxpbmUoLispLywgV0VCS0lUICsgJyQxJDInKSArIHZhbHVlXG5cdFx0Ly8gKG1pbnxtYXgpPyh3aWR0aHxoZWlnaHR8aW5saW5lLXNpemV8YmxvY2stc2l6ZSlcblx0XHRjYXNlIDgxMTY6IGNhc2UgNzA1OTogY2FzZSA1NzUzOiBjYXNlIDU1MzU6XG5cdFx0Y2FzZSA1NDQ1OiBjYXNlIDU3MDE6IGNhc2UgNDkzMzogY2FzZSA0Njc3OlxuXHRcdGNhc2UgNTUzMzogY2FzZSA1Nzg5OiBjYXNlIDUwMjE6IGNhc2UgNDc2NTpcblx0XHRcdC8vIHN0cmV0Y2gsIG1heC1jb250ZW50LCBtaW4tY29udGVudCwgZmlsbC1hdmFpbGFibGVcblx0XHRcdGlmIChzdHJsZW4odmFsdWUpIC0gMSAtIGxlbmd0aCA+IDYpXG5cdFx0XHRcdHN3aXRjaCAoY2hhcmF0KHZhbHVlLCBsZW5ndGggKyAxKSkge1xuXHRcdFx0XHRcdC8vIChtKWF4LWNvbnRlbnQsIChtKWluLWNvbnRlbnRcblx0XHRcdFx0XHRjYXNlIDEwOTpcblx0XHRcdFx0XHRcdC8vIC1cblx0XHRcdFx0XHRcdGlmIChjaGFyYXQodmFsdWUsIGxlbmd0aCArIDQpICE9PSA0NSlcblx0XHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHQvLyAoZilpbGwtYXZhaWxhYmxlLCAoZilpdC1jb250ZW50XG5cdFx0XHRcdFx0Y2FzZSAxMDI6XG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVwbGFjZSh2YWx1ZSwgLyguKzopKC4rKS0oW15dKykvLCAnJDEnICsgV0VCS0lUICsgJyQyLSQzJyArICckMScgKyBNT1ogKyAoY2hhcmF0KHZhbHVlLCBsZW5ndGggKyAzKSA9PSAxMDggPyAnJDMnIDogJyQyLSQzJykpICsgdmFsdWVcblx0XHRcdFx0XHQvLyAocyl0cmV0Y2hcblx0XHRcdFx0XHRjYXNlIDExNTpcblx0XHRcdFx0XHRcdHJldHVybiB+aW5kZXhvZih2YWx1ZSwgJ3N0cmV0Y2gnKSA/IHByZWZpeChyZXBsYWNlKHZhbHVlLCAnc3RyZXRjaCcsICdmaWxsLWF2YWlsYWJsZScpLCBsZW5ndGgpICsgdmFsdWUgOiB2YWx1ZVxuXHRcdFx0XHR9XG5cdFx0XHRicmVha1xuXHRcdC8vIHBvc2l0aW9uOiBzdGlja3lcblx0XHRjYXNlIDQ5NDk6XG5cdFx0XHQvLyAocyl0aWNreT9cblx0XHRcdGlmIChjaGFyYXQodmFsdWUsIGxlbmd0aCArIDEpICE9PSAxMTUpXG5cdFx0XHRcdGJyZWFrXG5cdFx0Ly8gZGlzcGxheTogKGZsZXh8aW5saW5lLWZsZXgpXG5cdFx0Y2FzZSA2NDQ0OlxuXHRcdFx0c3dpdGNoIChjaGFyYXQodmFsdWUsIHN0cmxlbih2YWx1ZSkgLSAzIC0gKH5pbmRleG9mKHZhbHVlLCAnIWltcG9ydGFudCcpICYmIDEwKSkpIHtcblx0XHRcdFx0Ly8gc3RpYyhrKXlcblx0XHRcdFx0Y2FzZSAxMDc6XG5cdFx0XHRcdFx0cmV0dXJuIHJlcGxhY2UodmFsdWUsICc6JywgJzonICsgV0VCS0lUKSArIHZhbHVlXG5cdFx0XHRcdC8vIChpbmxpbmUtKT9mbChlKXhcblx0XHRcdFx0Y2FzZSAxMDE6XG5cdFx0XHRcdFx0cmV0dXJuIHJlcGxhY2UodmFsdWUsIC8oLis6KShbXjshXSspKDt8IS4rKT8vLCAnJDEnICsgV0VCS0lUICsgKGNoYXJhdCh2YWx1ZSwgMTQpID09PSA0NSA/ICdpbmxpbmUtJyA6ICcnKSArICdib3gkMycgKyAnJDEnICsgV0VCS0lUICsgJyQyJDMnICsgJyQxJyArIE1TICsgJyQyYm94JDMnKSArIHZhbHVlXG5cdFx0XHR9XG5cdFx0XHRicmVha1xuXHRcdC8vIHdyaXRpbmctbW9kZVxuXHRcdGNhc2UgNTkzNjpcblx0XHRcdHN3aXRjaCAoY2hhcmF0KHZhbHVlLCBsZW5ndGggKyAxMSkpIHtcblx0XHRcdFx0Ly8gdmVydGljYWwtbChyKVxuXHRcdFx0XHRjYXNlIDExNDpcblx0XHRcdFx0XHRyZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArIHJlcGxhY2UodmFsdWUsIC9bc3ZoXVxcdystW3RibHJdezJ9LywgJ3RiJykgKyB2YWx1ZVxuXHRcdFx0XHQvLyB2ZXJ0aWNhbC1yKGwpXG5cdFx0XHRcdGNhc2UgMTA4OlxuXHRcdFx0XHRcdHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgcmVwbGFjZSh2YWx1ZSwgL1tzdmhdXFx3Ky1bdGJscl17Mn0vLCAndGItcmwnKSArIHZhbHVlXG5cdFx0XHRcdC8vIGhvcml6b250YWwoLSl0YlxuXHRcdFx0XHRjYXNlIDQ1OlxuXHRcdFx0XHRcdHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgcmVwbGFjZSh2YWx1ZSwgL1tzdmhdXFx3Ky1bdGJscl17Mn0vLCAnbHInKSArIHZhbHVlXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgdmFsdWUgKyB2YWx1ZVxuXHR9XG5cblx0cmV0dXJuIHZhbHVlXG59XG4iLCJpbXBvcnQge0lNUE9SVCwgQ09NTUVOVCwgUlVMRVNFVCwgREVDTEFSQVRJT04sIEtFWUZSQU1FU30gZnJvbSAnLi9FbnVtLmpzJ1xuaW1wb3J0IHtzdHJsZW4sIHNpemVvZn0gZnJvbSAnLi9VdGlsaXR5LmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0W119IGNoaWxkcmVuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplIChjaGlsZHJlbiwgY2FsbGJhY2spIHtcblx0dmFyIG91dHB1dCA9ICcnXG5cdHZhciBsZW5ndGggPSBzaXplb2YoY2hpbGRyZW4pXG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcblx0XHRvdXRwdXQgKz0gY2FsbGJhY2soY2hpbGRyZW5baV0sIGksIGNoaWxkcmVuLCBjYWxsYmFjaykgfHwgJydcblxuXHRyZXR1cm4gb3V0cHV0XG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGVsZW1lbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHtvYmplY3RbXX0gY2hpbGRyZW5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnkgKGVsZW1lbnQsIGluZGV4LCBjaGlsZHJlbiwgY2FsbGJhY2spIHtcblx0c3dpdGNoIChlbGVtZW50LnR5cGUpIHtcblx0XHRjYXNlIElNUE9SVDogY2FzZSBERUNMQVJBVElPTjogcmV0dXJuIGVsZW1lbnQucmV0dXJuID0gZWxlbWVudC5yZXR1cm4gfHwgZWxlbWVudC52YWx1ZVxuXHRcdGNhc2UgQ09NTUVOVDogcmV0dXJuICcnXG5cdFx0Y2FzZSBLRVlGUkFNRVM6IHJldHVybiBlbGVtZW50LnJldHVybiA9IGVsZW1lbnQudmFsdWUgKyAneycgKyBzZXJpYWxpemUoZWxlbWVudC5jaGlsZHJlbiwgY2FsbGJhY2spICsgJ30nXG5cdFx0Y2FzZSBSVUxFU0VUOiBlbGVtZW50LnZhbHVlID0gZWxlbWVudC5wcm9wcy5qb2luKCcsJylcblx0fVxuXG5cdHJldHVybiBzdHJsZW4oY2hpbGRyZW4gPSBzZXJpYWxpemUoZWxlbWVudC5jaGlsZHJlbiwgY2FsbGJhY2spKSA/IGVsZW1lbnQucmV0dXJuID0gZWxlbWVudC52YWx1ZSArICd7JyArIGNoaWxkcmVuICsgJ30nIDogJydcbn1cbiIsImltcG9ydCB7ZnJvbSwgdHJpbSwgY2hhcmF0LCBzdHJsZW4sIHN1YnN0ciwgYXBwZW5kLCBhc3NpZ259IGZyb20gJy4vVXRpbGl0eS5qcydcblxuZXhwb3J0IHZhciBsaW5lID0gMVxuZXhwb3J0IHZhciBjb2x1bW4gPSAxXG5leHBvcnQgdmFyIGxlbmd0aCA9IDBcbmV4cG9ydCB2YXIgcG9zaXRpb24gPSAwXG5leHBvcnQgdmFyIGNoYXJhY3RlciA9IDBcbmV4cG9ydCB2YXIgY2hhcmFjdGVycyA9ICcnXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge29iamVjdCB8IG51bGx9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0IHwgbnVsbH0gcGFyZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtzdHJpbmdbXSB8IHN0cmluZ30gcHJvcHNcbiAqIEBwYXJhbSB7b2JqZWN0W10gfCBzdHJpbmd9IGNoaWxkcmVuXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub2RlICh2YWx1ZSwgcm9vdCwgcGFyZW50LCB0eXBlLCBwcm9wcywgY2hpbGRyZW4sIGxlbmd0aCkge1xuXHRyZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgcm9vdDogcm9vdCwgcGFyZW50OiBwYXJlbnQsIHR5cGU6IHR5cGUsIHByb3BzOiBwcm9wcywgY2hpbGRyZW46IGNoaWxkcmVuLCBsaW5lOiBsaW5lLCBjb2x1bW46IGNvbHVtbiwgbGVuZ3RoOiBsZW5ndGgsIHJldHVybjogJyd9XG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29weSAocm9vdCwgcHJvcHMpIHtcblx0cmV0dXJuIGFzc2lnbihub2RlKCcnLCBudWxsLCBudWxsLCAnJywgbnVsbCwgbnVsbCwgMCksIHJvb3QsIHtsZW5ndGg6IC1yb290Lmxlbmd0aH0sIHByb3BzKVxufVxuXG4vKipcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYXIgKCkge1xuXHRyZXR1cm4gY2hhcmFjdGVyXG59XG5cbi8qKlxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJldiAoKSB7XG5cdGNoYXJhY3RlciA9IHBvc2l0aW9uID4gMCA/IGNoYXJhdChjaGFyYWN0ZXJzLCAtLXBvc2l0aW9uKSA6IDBcblxuXHRpZiAoY29sdW1uLS0sIGNoYXJhY3RlciA9PT0gMTApXG5cdFx0Y29sdW1uID0gMSwgbGluZS0tXG5cblx0cmV0dXJuIGNoYXJhY3RlclxufVxuXG4vKipcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5leHQgKCkge1xuXHRjaGFyYWN0ZXIgPSBwb3NpdGlvbiA8IGxlbmd0aCA/IGNoYXJhdChjaGFyYWN0ZXJzLCBwb3NpdGlvbisrKSA6IDBcblxuXHRpZiAoY29sdW1uKyssIGNoYXJhY3RlciA9PT0gMTApXG5cdFx0Y29sdW1uID0gMSwgbGluZSsrXG5cblx0cmV0dXJuIGNoYXJhY3RlclxufVxuXG4vKipcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBlZWsgKCkge1xuXHRyZXR1cm4gY2hhcmF0KGNoYXJhY3RlcnMsIHBvc2l0aW9uKVxufVxuXG4vKipcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhcmV0ICgpIHtcblx0cmV0dXJuIHBvc2l0aW9uXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IGJlZ2luXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzbGljZSAoYmVnaW4sIGVuZCkge1xuXHRyZXR1cm4gc3Vic3RyKGNoYXJhY3RlcnMsIGJlZ2luLCBlbmQpXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGVcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRva2VuICh0eXBlKSB7XG5cdHN3aXRjaCAodHlwZSkge1xuXHRcdC8vIFxcMCBcXHQgXFxuIFxcciBcXHMgd2hpdGVzcGFjZSB0b2tlblxuXHRcdGNhc2UgMDogY2FzZSA5OiBjYXNlIDEwOiBjYXNlIDEzOiBjYXNlIDMyOlxuXHRcdFx0cmV0dXJuIDVcblx0XHQvLyAhICsgLCAvID4gQCB+IGlzb2xhdGUgdG9rZW5cblx0XHRjYXNlIDMzOiBjYXNlIDQzOiBjYXNlIDQ0OiBjYXNlIDQ3OiBjYXNlIDYyOiBjYXNlIDY0OiBjYXNlIDEyNjpcblx0XHQvLyA7IHsgfSBicmVha3BvaW50IHRva2VuXG5cdFx0Y2FzZSA1OTogY2FzZSAxMjM6IGNhc2UgMTI1OlxuXHRcdFx0cmV0dXJuIDRcblx0XHQvLyA6IGFjY29tcGFuaWVkIHRva2VuXG5cdFx0Y2FzZSA1ODpcblx0XHRcdHJldHVybiAzXG5cdFx0Ly8gXCIgJyAoIFsgb3BlbmluZyBkZWxpbWl0IHRva2VuXG5cdFx0Y2FzZSAzNDogY2FzZSAzOTogY2FzZSA0MDogY2FzZSA5MTpcblx0XHRcdHJldHVybiAyXG5cdFx0Ly8gKSBdIGNsb3NpbmcgZGVsaW1pdCB0b2tlblxuXHRcdGNhc2UgNDE6IGNhc2UgOTM6XG5cdFx0XHRyZXR1cm4gMVxuXHR9XG5cblx0cmV0dXJuIDBcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge2FueVtdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWxsb2MgKHZhbHVlKSB7XG5cdHJldHVybiBsaW5lID0gY29sdW1uID0gMSwgbGVuZ3RoID0gc3RybGVuKGNoYXJhY3RlcnMgPSB2YWx1ZSksIHBvc2l0aW9uID0gMCwgW11cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqIEByZXR1cm4ge2FueX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlYWxsb2MgKHZhbHVlKSB7XG5cdHJldHVybiBjaGFyYWN0ZXJzID0gJycsIHZhbHVlXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGltaXQgKHR5cGUpIHtcblx0cmV0dXJuIHRyaW0oc2xpY2UocG9zaXRpb24gLSAxLCBkZWxpbWl0ZXIodHlwZSA9PT0gOTEgPyB0eXBlICsgMiA6IHR5cGUgPT09IDQwID8gdHlwZSArIDEgOiB0eXBlKSkpXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRva2VuaXplICh2YWx1ZSkge1xuXHRyZXR1cm4gZGVhbGxvYyh0b2tlbml6ZXIoYWxsb2ModmFsdWUpKSlcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdHlwZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gd2hpdGVzcGFjZSAodHlwZSkge1xuXHR3aGlsZSAoY2hhcmFjdGVyID0gcGVlaygpKVxuXHRcdGlmIChjaGFyYWN0ZXIgPCAzMylcblx0XHRcdG5leHQoKVxuXHRcdGVsc2Vcblx0XHRcdGJyZWFrXG5cblx0cmV0dXJuIHRva2VuKHR5cGUpID4gMiB8fCB0b2tlbihjaGFyYWN0ZXIpID4gMyA/ICcnIDogJyAnXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmdbXX0gY2hpbGRyZW5cbiAqIEByZXR1cm4ge3N0cmluZ1tdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9rZW5pemVyIChjaGlsZHJlbikge1xuXHR3aGlsZSAobmV4dCgpKVxuXHRcdHN3aXRjaCAodG9rZW4oY2hhcmFjdGVyKSkge1xuXHRcdFx0Y2FzZSAwOiBhcHBlbmQoaWRlbnRpZmllcihwb3NpdGlvbiAtIDEpLCBjaGlsZHJlbilcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgMjogYXBwZW5kKGRlbGltaXQoY2hhcmFjdGVyKSwgY2hpbGRyZW4pXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRkZWZhdWx0OiBhcHBlbmQoZnJvbShjaGFyYWN0ZXIpLCBjaGlsZHJlbilcblx0XHR9XG5cblx0cmV0dXJuIGNoaWxkcmVuXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0ge251bWJlcn0gY291bnRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwaW5nIChpbmRleCwgY291bnQpIHtcblx0d2hpbGUgKC0tY291bnQgJiYgbmV4dCgpKVxuXHRcdC8vIG5vdCAwLTkgQS1GIGEtZlxuXHRcdGlmIChjaGFyYWN0ZXIgPCA0OCB8fCBjaGFyYWN0ZXIgPiAxMDIgfHwgKGNoYXJhY3RlciA+IDU3ICYmIGNoYXJhY3RlciA8IDY1KSB8fCAoY2hhcmFjdGVyID4gNzAgJiYgY2hhcmFjdGVyIDwgOTcpKVxuXHRcdFx0YnJlYWtcblxuXHRyZXR1cm4gc2xpY2UoaW5kZXgsIGNhcmV0KCkgKyAoY291bnQgPCA2ICYmIHBlZWsoKSA9PSAzMiAmJiBuZXh0KCkgPT0gMzIpKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxpbWl0ZXIgKHR5cGUpIHtcblx0d2hpbGUgKG5leHQoKSlcblx0XHRzd2l0Y2ggKGNoYXJhY3Rlcikge1xuXHRcdFx0Ly8gXSApIFwiICdcblx0XHRcdGNhc2UgdHlwZTpcblx0XHRcdFx0cmV0dXJuIHBvc2l0aW9uXG5cdFx0XHQvLyBcIiAnXG5cdFx0XHRjYXNlIDM0OiBjYXNlIDM5OlxuXHRcdFx0XHRpZiAodHlwZSAhPT0gMzQgJiYgdHlwZSAhPT0gMzkpXG5cdFx0XHRcdFx0ZGVsaW1pdGVyKGNoYXJhY3Rlcilcblx0XHRcdFx0YnJlYWtcblx0XHRcdC8vIChcblx0XHRcdGNhc2UgNDA6XG5cdFx0XHRcdGlmICh0eXBlID09PSA0MSlcblx0XHRcdFx0XHRkZWxpbWl0ZXIodHlwZSlcblx0XHRcdFx0YnJlYWtcblx0XHRcdC8vIFxcXG5cdFx0XHRjYXNlIDkyOlxuXHRcdFx0XHRuZXh0KClcblx0XHRcdFx0YnJlYWtcblx0XHR9XG5cblx0cmV0dXJuIHBvc2l0aW9uXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tbWVudGVyICh0eXBlLCBpbmRleCkge1xuXHR3aGlsZSAobmV4dCgpKVxuXHRcdC8vIC8vXG5cdFx0aWYgKHR5cGUgKyBjaGFyYWN0ZXIgPT09IDQ3ICsgMTApXG5cdFx0XHRicmVha1xuXHRcdC8vIC8qXG5cdFx0ZWxzZSBpZiAodHlwZSArIGNoYXJhY3RlciA9PT0gNDIgKyA0MiAmJiBwZWVrKCkgPT09IDQ3KVxuXHRcdFx0YnJlYWtcblxuXHRyZXR1cm4gJy8qJyArIHNsaWNlKGluZGV4LCBwb3NpdGlvbiAtIDEpICsgJyonICsgZnJvbSh0eXBlID09PSA0NyA/IHR5cGUgOiBuZXh0KCkpXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGlmaWVyIChpbmRleCkge1xuXHR3aGlsZSAoIXRva2VuKHBlZWsoKSkpXG5cdFx0bmV4dCgpXG5cblx0cmV0dXJuIHNsaWNlKGluZGV4LCBwb3NpdGlvbilcbn1cbiIsIi8qKlxuICogQHBhcmFtIHtudW1iZXJ9XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCB2YXIgYWJzID0gTWF0aC5hYnNcblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn1cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IHZhciBmcm9tID0gU3RyaW5nLmZyb21DaGFyQ29kZVxuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fVxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgdmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ25cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc2ggKHZhbHVlLCBsZW5ndGgpIHtcblx0cmV0dXJuICgoKCgoKChsZW5ndGggPDwgMikgXiBjaGFyYXQodmFsdWUsIDApKSA8PCAyKSBeIGNoYXJhdCh2YWx1ZSwgMSkpIDw8IDIpIF4gY2hhcmF0KHZhbHVlLCAyKSkgPDwgMikgXiBjaGFyYXQodmFsdWUsIDMpXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmltICh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUudHJpbSgpXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge1JlZ0V4cH0gcGF0dGVyblxuICogQHJldHVybiB7c3RyaW5nP31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoICh2YWx1ZSwgcGF0dGVybikge1xuXHRyZXR1cm4gKHZhbHVlID0gcGF0dGVybi5leGVjKHZhbHVlKSkgPyB2YWx1ZVswXSA6IHZhbHVlXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0geyhzdHJpbmd8UmVnRXhwKX0gcGF0dGVyblxuICogQHBhcmFtIHtzdHJpbmd9IHJlcGxhY2VtZW50XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlICh2YWx1ZSwgcGF0dGVybiwgcmVwbGFjZW1lbnQpIHtcblx0cmV0dXJuIHZhbHVlLnJlcGxhY2UocGF0dGVybiwgcmVwbGFjZW1lbnQpXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VhcmNoXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbmRleG9mICh2YWx1ZSwgc2VhcmNoKSB7XG5cdHJldHVybiB2YWx1ZS5pbmRleE9mKHNlYXJjaClcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhcmF0ICh2YWx1ZSwgaW5kZXgpIHtcblx0cmV0dXJuIHZhbHVlLmNoYXJDb2RlQXQoaW5kZXgpIHwgMFxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGJlZ2luXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdHIgKHZhbHVlLCBiZWdpbiwgZW5kKSB7XG5cdHJldHVybiB2YWx1ZS5zbGljZShiZWdpbiwgZW5kKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RybGVuICh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUubGVuZ3RoXG59XG5cbi8qKlxuICogQHBhcmFtIHthbnlbXX0gdmFsdWVcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNpemVvZiAodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlLmxlbmd0aFxufVxuXG4vKipcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHBhcmFtIHthbnlbXX0gYXJyYXlcbiAqIEByZXR1cm4ge2FueX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZCAodmFsdWUsIGFycmF5KSB7XG5cdHJldHVybiBhcnJheS5wdXNoKHZhbHVlKSwgdmFsdWVcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBhcnJheVxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmUgKGFycmF5LCBjYWxsYmFjaykge1xuXHRyZXR1cm4gYXJyYXkubWFwKGNhbGxiYWNrKS5qb2luKCcnKVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9nYXJ5Y291cnQvbXVybXVyaGFzaC1qc1xuLy8gUG9ydGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2FhcHBsZWJ5L3NtaGFzaGVyL2Jsb2IvNjFhMDUzMGYyODI3N2YyZTg1MGJmYzM5NjAwY2U2MWQwMmI1MThkZS9zcmMvTXVybXVySGFzaDIuY3BwI0wzNy1MODZcbmZ1bmN0aW9uIG11cm11cjIoc3RyKSB7XG4gIC8vICdtJyBhbmQgJ3InIGFyZSBtaXhpbmcgY29uc3RhbnRzIGdlbmVyYXRlZCBvZmZsaW5lLlxuICAvLyBUaGV5J3JlIG5vdCByZWFsbHkgJ21hZ2ljJywgdGhleSBqdXN0IGhhcHBlbiB0byB3b3JrIHdlbGwuXG4gIC8vIGNvbnN0IG0gPSAweDViZDFlOTk1O1xuICAvLyBjb25zdCByID0gMjQ7XG4gIC8vIEluaXRpYWxpemUgdGhlIGhhc2hcbiAgdmFyIGggPSAwOyAvLyBNaXggNCBieXRlcyBhdCBhIHRpbWUgaW50byB0aGUgaGFzaFxuXG4gIHZhciBrLFxuICAgICAgaSA9IDAsXG4gICAgICBsZW4gPSBzdHIubGVuZ3RoO1xuXG4gIGZvciAoOyBsZW4gPj0gNDsgKytpLCBsZW4gLT0gNCkge1xuICAgIGsgPSBzdHIuY2hhckNvZGVBdChpKSAmIDB4ZmYgfCAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4ZmYpIDw8IDggfCAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4ZmYpIDw8IDE2IHwgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCAyNDtcbiAgICBrID1cbiAgICAvKiBNYXRoLmltdWwoaywgbSk6ICovXG4gICAgKGsgJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoayA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KTtcbiAgICBrIF49XG4gICAgLyogayA+Pj4gcjogKi9cbiAgICBrID4+PiAyNDtcbiAgICBoID1cbiAgICAvKiBNYXRoLmltdWwoaywgbSk6ICovXG4gICAgKGsgJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoayA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KSBeXG4gICAgLyogTWF0aC5pbXVsKGgsIG0pOiAqL1xuICAgIChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGggPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNik7XG4gIH0gLy8gSGFuZGxlIHRoZSBsYXN0IGZldyBieXRlcyBvZiB0aGUgaW5wdXQgYXJyYXlcblxuXG4gIHN3aXRjaCAobGVuKSB7XG4gICAgY2FzZSAzOlxuICAgICAgaCBePSAoc3RyLmNoYXJDb2RlQXQoaSArIDIpICYgMHhmZikgPDwgMTY7XG5cbiAgICBjYXNlIDI6XG4gICAgICBoIF49IChzdHIuY2hhckNvZGVBdChpICsgMSkgJiAweGZmKSA8PCA4O1xuXG4gICAgY2FzZSAxOlxuICAgICAgaCBePSBzdHIuY2hhckNvZGVBdChpKSAmIDB4ZmY7XG4gICAgICBoID1cbiAgICAgIC8qIE1hdGguaW11bChoLCBtKTogKi9cbiAgICAgIChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGggPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNik7XG4gIH0gLy8gRG8gYSBmZXcgZmluYWwgbWl4ZXMgb2YgdGhlIGhhc2ggdG8gZW5zdXJlIHRoZSBsYXN0IGZld1xuICAvLyBieXRlcyBhcmUgd2VsbC1pbmNvcnBvcmF0ZWQuXG5cblxuICBoIF49IGggPj4+IDEzO1xuICBoID1cbiAgLyogTWF0aC5pbXVsKGgsIG0pOiAqL1xuICAoaCAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChoID4+PiAxNikgKiAweGU5OTUgPDwgMTYpO1xuICByZXR1cm4gKChoIF4gaCA+Pj4gMTUpID4+PiAwKS50b1N0cmluZygzNik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG11cm11cjI7XG4iLCJmdW5jdGlvbiBtZW1vaXplKGZuKSB7XG4gIHZhciBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGNhY2hlW2FyZ10gPT09IHVuZGVmaW5lZCkgY2FjaGVbYXJnXSA9IGZuKGFyZyk7XG4gICAgcmV0dXJuIGNhY2hlW2FyZ107XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemU7XG4iLCJpbXBvcnQgaG9pc3ROb25SZWFjdFN0YXRpY3MkMSBmcm9tICdob2lzdC1ub24tcmVhY3Qtc3RhdGljcyc7XG5cbi8vIHRoaXMgZmlsZSBpc29sYXRlcyB0aGlzIHBhY2thZ2UgdGhhdCBpcyBub3QgdHJlZS1zaGFrZWFibGVcbi8vIGFuZCBpZiB0aGlzIG1vZHVsZSBkb2Vzbid0IGFjdHVhbGx5IGNvbnRhaW4gYW55IGxvZ2ljIG9mIGl0cyBvd25cbi8vIHRoZW4gUm9sbHVwIGp1c3QgdXNlICdob2lzdC1ub24tcmVhY3Qtc3RhdGljcycgZGlyZWN0bHkgaW4gb3RoZXIgY2h1bmtzXG5cbnZhciBob2lzdE5vblJlYWN0U3RhdGljcyA9IChmdW5jdGlvbiAodGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQpIHtcbiAgcmV0dXJuIGhvaXN0Tm9uUmVhY3RTdGF0aWNzJDEodGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0Tm9uUmVhY3RTdGF0aWNzO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgZm9yd2FyZFJlZiwgY3JlYXRlRWxlbWVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSAnQGVtb3Rpb24vY2FjaGUnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IHdlYWtNZW1vaXplIGZyb20gJ0BlbW90aW9uL3dlYWstbWVtb2l6ZSc7XG5pbXBvcnQgaG9pc3ROb25SZWFjdFN0YXRpY3MgZnJvbSAnLi4vX2lzb2xhdGVkLWhucnMvZGlzdC9lbW90aW9uLXJlYWN0LV9pc29sYXRlZC1obnJzLmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCB7IGdldFJlZ2lzdGVyZWRTdHlsZXMsIHJlZ2lzdGVyU3R5bGVzLCBpbnNlcnRTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi91dGlscyc7XG5pbXBvcnQgeyBzZXJpYWxpemVTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi9zZXJpYWxpemUnO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIEVtb3Rpb25DYWNoZUNvbnRleHQgPSAvKiAjX19QVVJFX18gKi9jcmVhdGVDb250ZXh0KCAvLyB3ZSdyZSBkb2luZyB0aGlzIHRvIGF2b2lkIHByZWNvbnN0cnVjdCdzIGRlYWQgY29kZSBlbGltaW5hdGlvbiBpbiB0aGlzIG9uZSBjYXNlXG4vLyBiZWNhdXNlIHRoaXMgbW9kdWxlIGlzIHByaW1hcmlseSBpbnRlbmRlZCBmb3IgdGhlIGJyb3dzZXIgYW5kIG5vZGVcbi8vIGJ1dCBpdCdzIGFsc28gcmVxdWlyZWQgaW4gcmVhY3QgbmF0aXZlIGFuZCBzaW1pbGFyIGVudmlyb25tZW50cyBzb21ldGltZXNcbi8vIGFuZCB3ZSBjb3VsZCBoYXZlIGEgc3BlY2lhbCBidWlsZCBqdXN0IGZvciB0aGF0XG4vLyBidXQgdGhpcyBpcyBtdWNoIGVhc2llciBhbmQgdGhlIG5hdGl2ZSBwYWNrYWdlc1xuLy8gbWlnaHQgdXNlIGEgZGlmZmVyZW50IHRoZW1lIGNvbnRleHQgaW4gdGhlIGZ1dHVyZSBhbnl3YXlcbnR5cGVvZiBIVE1MRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgPyAvKiAjX19QVVJFX18gKi9jcmVhdGVDYWNoZSh7XG4gIGtleTogJ2Nzcydcbn0pIDogbnVsbCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIEVtb3Rpb25DYWNoZUNvbnRleHQuZGlzcGxheU5hbWUgPSAnRW1vdGlvbkNhY2hlQ29udGV4dCc7XG59XG5cbnZhciBDYWNoZVByb3ZpZGVyID0gRW1vdGlvbkNhY2hlQ29udGV4dC5Qcm92aWRlcjtcbnZhciBfX3Vuc2FmZV91c2VFbW90aW9uQ2FjaGUgPSBmdW5jdGlvbiB1c2VFbW90aW9uQ2FjaGUoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KEVtb3Rpb25DYWNoZUNvbnRleHQpO1xufTtcblxudmFyIHdpdGhFbW90aW9uQ2FjaGUgPSBmdW5jdGlvbiB3aXRoRW1vdGlvbkNhY2hlKGZ1bmMpIHtcbiAgLy8gJEZsb3dGaXhNZVxuICByZXR1cm4gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgICAvLyB0aGUgY2FjaGUgd2lsbCBuZXZlciBiZSBudWxsIGluIHRoZSBicm93c2VyXG4gICAgdmFyIGNhY2hlID0gdXNlQ29udGV4dChFbW90aW9uQ2FjaGVDb250ZXh0KTtcbiAgICByZXR1cm4gZnVuYyhwcm9wcywgY2FjaGUsIHJlZik7XG4gIH0pO1xufTtcblxudmFyIFRoZW1lQ29udGV4dCA9IC8qICNfX1BVUkVfXyAqL2NyZWF0ZUNvbnRleHQoe30pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBUaGVtZUNvbnRleHQuZGlzcGxheU5hbWUgPSAnRW1vdGlvblRoZW1lQ29udGV4dCc7XG59XG5cbnZhciB1c2VUaGVtZSA9IGZ1bmN0aW9uIHVzZVRoZW1lKCkge1xuICByZXR1cm4gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xufTtcblxudmFyIGdldFRoZW1lID0gZnVuY3Rpb24gZ2V0VGhlbWUob3V0ZXJUaGVtZSwgdGhlbWUpIHtcbiAgaWYgKHR5cGVvZiB0aGVtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBtZXJnZWRUaGVtZSA9IHRoZW1lKG91dGVyVGhlbWUpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgKG1lcmdlZFRoZW1lID09IG51bGwgfHwgdHlwZW9mIG1lcmdlZFRoZW1lICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KG1lcmdlZFRoZW1lKSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignW1RoZW1lUHJvdmlkZXJdIFBsZWFzZSByZXR1cm4gYW4gb2JqZWN0IGZyb20geW91ciB0aGVtZSBmdW5jdGlvbiwgaS5lLiB0aGVtZT17KCkgPT4gKHt9KX0hJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lcmdlZFRoZW1lO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgKHRoZW1lID09IG51bGwgfHwgdHlwZW9mIHRoZW1lICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KHRoZW1lKSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1tUaGVtZVByb3ZpZGVyXSBQbGVhc2UgbWFrZSB5b3VyIHRoZW1lIHByb3AgYSBwbGFpbiBvYmplY3QnKTtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgb3V0ZXJUaGVtZSwgdGhlbWUpO1xufTtcblxudmFyIGNyZWF0ZUNhY2hlV2l0aFRoZW1lID0gLyogI19fUFVSRV9fICovd2Vha01lbW9pemUoZnVuY3Rpb24gKG91dGVyVGhlbWUpIHtcbiAgcmV0dXJuIHdlYWtNZW1vaXplKGZ1bmN0aW9uICh0aGVtZSkge1xuICAgIHJldHVybiBnZXRUaGVtZShvdXRlclRoZW1lLCB0aGVtZSk7XG4gIH0pO1xufSk7XG52YXIgVGhlbWVQcm92aWRlciA9IGZ1bmN0aW9uIFRoZW1lUHJvdmlkZXIocHJvcHMpIHtcbiAgdmFyIHRoZW1lID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuXG4gIGlmIChwcm9wcy50aGVtZSAhPT0gdGhlbWUpIHtcbiAgICB0aGVtZSA9IGNyZWF0ZUNhY2hlV2l0aFRoZW1lKHRoZW1lKShwcm9wcy50aGVtZSk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoVGhlbWVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHRoZW1lXG4gIH0sIHByb3BzLmNoaWxkcmVuKTtcbn07XG5mdW5jdGlvbiB3aXRoVGhlbWUoQ29tcG9uZW50KSB7XG4gIHZhciBjb21wb25lbnROYW1lID0gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xuXG4gIHZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIocHJvcHMsIHJlZikge1xuICAgIHZhciB0aGVtZSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgICB0aGVtZTogdGhlbWUsXG4gICAgICByZWY6IHJlZlxuICAgIH0sIHByb3BzKSk7XG4gIH07IC8vICRGbG93Rml4TWVcblxuXG4gIHZhciBXaXRoVGhlbWUgPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZihyZW5kZXIpO1xuICBXaXRoVGhlbWUuZGlzcGxheU5hbWUgPSBcIldpdGhUaGVtZShcIiArIGNvbXBvbmVudE5hbWUgKyBcIilcIjtcbiAgcmV0dXJuIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKFdpdGhUaGVtZSwgQ29tcG9uZW50KTtcbn1cblxudmFyIGdldExhc3RQYXJ0ID0gZnVuY3Rpb24gZ2V0TGFzdFBhcnQoZnVuY3Rpb25OYW1lKSB7XG4gIC8vIFRoZSBtYXRjaCBtYXkgYmUgc29tZXRoaW5nIGxpa2UgJ09iamVjdC5jcmVhdGVFbW90aW9uUHJvcHMnIG9yXG4gIC8vICdMb2FkZXIucHJvdG90eXBlLnJlbmRlcidcbiAgdmFyIHBhcnRzID0gZnVuY3Rpb25OYW1lLnNwbGl0KCcuJyk7XG4gIHJldHVybiBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXTtcbn07XG5cbnZhciBnZXRGdW5jdGlvbk5hbWVGcm9tU3RhY2tUcmFjZUxpbmUgPSBmdW5jdGlvbiBnZXRGdW5jdGlvbk5hbWVGcm9tU3RhY2tUcmFjZUxpbmUobGluZSkge1xuICAvLyBWOFxuICB2YXIgbWF0Y2ggPSAvXlxccythdFxccysoW0EtWmEtejAtOSQuXSspXFxzLy5leGVjKGxpbmUpO1xuICBpZiAobWF0Y2gpIHJldHVybiBnZXRMYXN0UGFydChtYXRjaFsxXSk7IC8vIFNhZmFyaSAvIEZpcmVmb3hcblxuICBtYXRjaCA9IC9eKFtBLVphLXowLTkkLl0rKUAvLmV4ZWMobGluZSk7XG4gIGlmIChtYXRjaCkgcmV0dXJuIGdldExhc3RQYXJ0KG1hdGNoWzFdKTtcbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbnZhciBpbnRlcm5hbFJlYWN0RnVuY3Rpb25OYW1lcyA9IC8qICNfX1BVUkVfXyAqL25ldyBTZXQoWydyZW5kZXJXaXRoSG9va3MnLCAncHJvY2Vzc0NoaWxkJywgJ2ZpbmlzaENsYXNzQ29tcG9uZW50JywgJ3JlbmRlclRvU3RyaW5nJ10pOyAvLyBUaGVzZSBpZGVudGlmaWVycyBjb21lIGZyb20gZXJyb3Igc3RhY2tzLCBzbyB0aGV5IGhhdmUgdG8gYmUgdmFsaWQgSlNcbi8vIGlkZW50aWZpZXJzLCB0aHVzIHdlIG9ubHkgbmVlZCB0byByZXBsYWNlIHdoYXQgaXMgYSB2YWxpZCBjaGFyYWN0ZXIgZm9yIEpTLFxuLy8gYnV0IG5vdCBmb3IgQ1NTLlxuXG52YXIgc2FuaXRpemVJZGVudGlmaWVyID0gZnVuY3Rpb24gc2FuaXRpemVJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgcmV0dXJuIGlkZW50aWZpZXIucmVwbGFjZSgvXFwkL2csICctJyk7XG59O1xuXG52YXIgZ2V0TGFiZWxGcm9tU3RhY2tUcmFjZSA9IGZ1bmN0aW9uIGdldExhYmVsRnJvbVN0YWNrVHJhY2Uoc3RhY2tUcmFjZSkge1xuICBpZiAoIXN0YWNrVHJhY2UpIHJldHVybiB1bmRlZmluZWQ7XG4gIHZhciBsaW5lcyA9IHN0YWNrVHJhY2Uuc3BsaXQoJ1xcbicpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZnVuY3Rpb25OYW1lID0gZ2V0RnVuY3Rpb25OYW1lRnJvbVN0YWNrVHJhY2VMaW5lKGxpbmVzW2ldKTsgLy8gVGhlIGZpcnN0IGxpbmUgb2YgVjggc3RhY2sgdHJhY2VzIGlzIGp1c3QgXCJFcnJvclwiXG5cbiAgICBpZiAoIWZ1bmN0aW9uTmFtZSkgY29udGludWU7IC8vIElmIHdlIHJlYWNoIG9uZSBvZiB0aGVzZSwgd2UgaGF2ZSBnb25lIHRvbyBmYXIgYW5kIHNob3VsZCBxdWl0XG5cbiAgICBpZiAoaW50ZXJuYWxSZWFjdEZ1bmN0aW9uTmFtZXMuaGFzKGZ1bmN0aW9uTmFtZSkpIGJyZWFrOyAvLyBUaGUgY29tcG9uZW50IG5hbWUgaXMgdGhlIGZpcnN0IGZ1bmN0aW9uIGluIHRoZSBzdGFjayB0aGF0IHN0YXJ0cyB3aXRoIGFuXG4gICAgLy8gdXBwZXJjYXNlIGxldHRlclxuXG4gICAgaWYgKC9eW0EtWl0vLnRlc3QoZnVuY3Rpb25OYW1lKSkgcmV0dXJuIHNhbml0aXplSWRlbnRpZmllcihmdW5jdGlvbk5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbnZhciB1c2VJbnNlcnRpb25FZmZlY3QgPSBSZWFjdFsndXNlSW5zZXJ0aW9uJyArICdFZmZlY3QnXSA/IFJlYWN0Wyd1c2VJbnNlcnRpb24nICsgJ0VmZmVjdCddIDogZnVuY3Rpb24gdXNlSW5zZXJ0aW9uRWZmZWN0KGNyZWF0ZSkge1xuICBjcmVhdGUoKTtcbn07XG5mdW5jdGlvbiB1c2VJbnNlcnRpb25FZmZlY3RNYXliZShjcmVhdGUpIHtcblxuICB1c2VJbnNlcnRpb25FZmZlY3QoY3JlYXRlKTtcbn1cblxudmFyIHR5cGVQcm9wTmFtZSA9ICdfX0VNT1RJT05fVFlQRV9QTEVBU0VfRE9fTk9UX1VTRV9fJztcbnZhciBsYWJlbFByb3BOYW1lID0gJ19fRU1PVElPTl9MQUJFTF9QTEVBU0VfRE9fTk9UX1VTRV9fJztcbnZhciBjcmVhdGVFbW90aW9uUHJvcHMgPSBmdW5jdGlvbiBjcmVhdGVFbW90aW9uUHJvcHModHlwZSwgcHJvcHMpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIHByb3BzLmNzcyA9PT0gJ3N0cmluZycgJiYgLy8gY2hlY2sgaWYgdGhlcmUgaXMgYSBjc3MgZGVjbGFyYXRpb25cbiAgcHJvcHMuY3NzLmluZGV4T2YoJzonKSAhPT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdHJpbmdzIGFyZSBub3QgYWxsb3dlZCBhcyBjc3MgcHJvcCB2YWx1ZXMsIHBsZWFzZSB3cmFwIGl0IGluIGEgY3NzIHRlbXBsYXRlIGxpdGVyYWwgZnJvbSAnQGVtb3Rpb24vcmVhY3QnIGxpa2UgdGhpczogY3NzYFwiICsgcHJvcHMuY3NzICsgXCJgXCIpO1xuICB9XG5cbiAgdmFyIG5ld1Byb3BzID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwocHJvcHMsIGtleSkpIHtcbiAgICAgIG5ld1Byb3BzW2tleV0gPSBwcm9wc1trZXldO1xuICAgIH1cbiAgfVxuXG4gIG5ld1Byb3BzW3R5cGVQcm9wTmFtZV0gPSB0eXBlOyAvLyBGb3IgcGVyZm9ybWFuY2UsIG9ubHkgY2FsbCBnZXRMYWJlbEZyb21TdGFja1RyYWNlIGluIGRldmVsb3BtZW50IGFuZCB3aGVuXG4gIC8vIHRoZSBsYWJlbCBoYXNuJ3QgYWxyZWFkeSBiZWVuIGNvbXB1dGVkXG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgISFwcm9wcy5jc3MgJiYgKHR5cGVvZiBwcm9wcy5jc3MgIT09ICdvYmplY3QnIHx8IHR5cGVvZiBwcm9wcy5jc3MubmFtZSAhPT0gJ3N0cmluZycgfHwgcHJvcHMuY3NzLm5hbWUuaW5kZXhPZignLScpID09PSAtMSkpIHtcbiAgICB2YXIgbGFiZWwgPSBnZXRMYWJlbEZyb21TdGFja1RyYWNlKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICBpZiAobGFiZWwpIG5ld1Byb3BzW2xhYmVsUHJvcE5hbWVdID0gbGFiZWw7XG4gIH1cblxuICByZXR1cm4gbmV3UHJvcHM7XG59O1xuXG52YXIgSW5zZXJ0aW9uID0gZnVuY3Rpb24gSW5zZXJ0aW9uKF9yZWYpIHtcbiAgdmFyIGNhY2hlID0gX3JlZi5jYWNoZSxcbiAgICAgIHNlcmlhbGl6ZWQgPSBfcmVmLnNlcmlhbGl6ZWQsXG4gICAgICBpc1N0cmluZ1RhZyA9IF9yZWYuaXNTdHJpbmdUYWc7XG4gIHJlZ2lzdGVyU3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkLCBpc1N0cmluZ1RhZyk7XG4gIHZhciBydWxlcyA9IHVzZUluc2VydGlvbkVmZmVjdE1heWJlKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gaW5zZXJ0U3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkLCBpc1N0cmluZ1RhZyk7XG4gIH0pO1xuXG4gIHJldHVybiBudWxsO1xufTtcblxudmFyIEVtb3Rpb24gPSAvKiAjX19QVVJFX18gKi93aXRoRW1vdGlvbkNhY2hlKGZ1bmN0aW9uIChwcm9wcywgY2FjaGUsIHJlZikge1xuICB2YXIgY3NzUHJvcCA9IHByb3BzLmNzczsgLy8gc28gdGhhdCB1c2luZyBgY3NzYCBmcm9tIGBlbW90aW9uYCBhbmQgcGFzc2luZyB0aGUgcmVzdWx0IHRvIHRoZSBjc3MgcHJvcCB3b3Jrc1xuICAvLyBub3QgcGFzc2luZyB0aGUgcmVnaXN0ZXJlZCBjYWNoZSB0byBzZXJpYWxpemVTdHlsZXMgYmVjYXVzZSBpdCB3b3VsZFxuICAvLyBtYWtlIGNlcnRhaW4gYmFiZWwgb3B0aW1pc2F0aW9ucyBub3QgcG9zc2libGVcblxuICBpZiAodHlwZW9mIGNzc1Byb3AgPT09ICdzdHJpbmcnICYmIGNhY2hlLnJlZ2lzdGVyZWRbY3NzUHJvcF0gIT09IHVuZGVmaW5lZCkge1xuICAgIGNzc1Byb3AgPSBjYWNoZS5yZWdpc3RlcmVkW2Nzc1Byb3BdO1xuICB9XG5cbiAgdmFyIFdyYXBwZWRDb21wb25lbnQgPSBwcm9wc1t0eXBlUHJvcE5hbWVdO1xuICB2YXIgcmVnaXN0ZXJlZFN0eWxlcyA9IFtjc3NQcm9wXTtcbiAgdmFyIGNsYXNzTmFtZSA9ICcnO1xuXG4gIGlmICh0eXBlb2YgcHJvcHMuY2xhc3NOYW1lID09PSAnc3RyaW5nJykge1xuICAgIGNsYXNzTmFtZSA9IGdldFJlZ2lzdGVyZWRTdHlsZXMoY2FjaGUucmVnaXN0ZXJlZCwgcmVnaXN0ZXJlZFN0eWxlcywgcHJvcHMuY2xhc3NOYW1lKTtcbiAgfSBlbHNlIGlmIChwcm9wcy5jbGFzc05hbWUgIT0gbnVsbCkge1xuICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSArIFwiIFwiO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMocmVnaXN0ZXJlZFN0eWxlcywgdW5kZWZpbmVkLCB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCkpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHNlcmlhbGl6ZWQubmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgdmFyIGxhYmVsRnJvbVN0YWNrID0gcHJvcHNbbGFiZWxQcm9wTmFtZV07XG5cbiAgICBpZiAobGFiZWxGcm9tU3RhY2spIHtcbiAgICAgIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoW3NlcmlhbGl6ZWQsICdsYWJlbDonICsgbGFiZWxGcm9tU3RhY2sgKyAnOyddKTtcbiAgICB9XG4gIH1cblxuICBjbGFzc05hbWUgKz0gY2FjaGUua2V5ICsgXCItXCIgKyBzZXJpYWxpemVkLm5hbWU7XG4gIHZhciBuZXdQcm9wcyA9IHt9O1xuXG4gIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCBrZXkpICYmIGtleSAhPT0gJ2NzcycgJiYga2V5ICE9PSB0eXBlUHJvcE5hbWUgJiYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgfHwga2V5ICE9PSBsYWJlbFByb3BOYW1lKSkge1xuICAgICAgbmV3UHJvcHNba2V5XSA9IHByb3BzW2tleV07XG4gICAgfVxuICB9XG5cbiAgbmV3UHJvcHMucmVmID0gcmVmO1xuICBuZXdQcm9wcy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoSW5zZXJ0aW9uLCB7XG4gICAgY2FjaGU6IGNhY2hlLFxuICAgIHNlcmlhbGl6ZWQ6IHNlcmlhbGl6ZWQsXG4gICAgaXNTdHJpbmdUYWc6IHR5cGVvZiBXcmFwcGVkQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICB9KSwgLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgbmV3UHJvcHMpKTtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBFbW90aW9uLmRpc3BsYXlOYW1lID0gJ0Vtb3Rpb25Dc3NQcm9wSW50ZXJuYWwnO1xufVxuXG5leHBvcnQgeyBDYWNoZVByb3ZpZGVyIGFzIEMsIEVtb3Rpb24gYXMgRSwgVGhlbWVDb250ZXh0IGFzIFQsIF9fdW5zYWZlX3VzZUVtb3Rpb25DYWNoZSBhcyBfLCB1c2VUaGVtZSBhcyBhLCBUaGVtZVByb3ZpZGVyIGFzIGIsIGNyZWF0ZUVtb3Rpb25Qcm9wcyBhcyBjLCB3aXRoVGhlbWUgYXMgZCwgaGFzT3duUHJvcGVydHkgYXMgaCwgdXNlSW5zZXJ0aW9uRWZmZWN0TWF5YmUgYXMgdSwgd2l0aEVtb3Rpb25DYWNoZSBhcyB3IH07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCB1c2VMYXlvdXRFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVJlZiwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ0BlbW90aW9uL2NhY2hlJztcbmltcG9ydCB7IGggYXMgaGFzT3duUHJvcGVydHksIEUgYXMgRW1vdGlvbiwgYyBhcyBjcmVhdGVFbW90aW9uUHJvcHMsIHcgYXMgd2l0aEVtb3Rpb25DYWNoZSwgVCBhcyBUaGVtZUNvbnRleHQsIHUgYXMgdXNlSW5zZXJ0aW9uRWZmZWN0TWF5YmUgfSBmcm9tICcuL2Vtb3Rpb24tZWxlbWVudC1jYmVkNDUxZi5icm93c2VyLmVzbS5qcyc7XG5leHBvcnQgeyBDIGFzIENhY2hlUHJvdmlkZXIsIFQgYXMgVGhlbWVDb250ZXh0LCBiIGFzIFRoZW1lUHJvdmlkZXIsIF8gYXMgX191bnNhZmVfdXNlRW1vdGlvbkNhY2hlLCBhIGFzIHVzZVRoZW1lLCB3IGFzIHdpdGhFbW90aW9uQ2FjaGUsIGQgYXMgd2l0aFRoZW1lIH0gZnJvbSAnLi9lbW90aW9uLWVsZW1lbnQtY2JlZDQ1MWYuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0ICdAZW1vdGlvbi93ZWFrLW1lbW9pemUnO1xuaW1wb3J0ICdob2lzdC1ub24tcmVhY3Qtc3RhdGljcyc7XG5pbXBvcnQgJy4uL19pc29sYXRlZC1obnJzL2Rpc3QvZW1vdGlvbi1yZWFjdC1faXNvbGF0ZWQtaG5ycy5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBpbnNlcnRTdHlsZXMsIHJlZ2lzdGVyU3R5bGVzLCBnZXRSZWdpc3RlcmVkU3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vdXRpbHMnO1xuaW1wb3J0IHsgc2VyaWFsaXplU3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vc2VyaWFsaXplJztcblxudmFyIHBrZyA9IHtcblx0bmFtZTogXCJAZW1vdGlvbi9yZWFjdFwiLFxuXHR2ZXJzaW9uOiBcIjExLjkuMFwiLFxuXHRtYWluOiBcImRpc3QvZW1vdGlvbi1yZWFjdC5janMuanNcIixcblx0bW9kdWxlOiBcImRpc3QvZW1vdGlvbi1yZWFjdC5lc20uanNcIixcblx0YnJvd3Nlcjoge1xuXHRcdFwiLi9kaXN0L2Vtb3Rpb24tcmVhY3QuY2pzLmpzXCI6IFwiLi9kaXN0L2Vtb3Rpb24tcmVhY3QuYnJvd3Nlci5janMuanNcIixcblx0XHRcIi4vZGlzdC9lbW90aW9uLXJlYWN0LmVzbS5qc1wiOiBcIi4vZGlzdC9lbW90aW9uLXJlYWN0LmJyb3dzZXIuZXNtLmpzXCJcblx0fSxcblx0dHlwZXM6IFwidHlwZXMvaW5kZXguZC50c1wiLFxuXHRmaWxlczogW1xuXHRcdFwic3JjXCIsXG5cdFx0XCJkaXN0XCIsXG5cdFx0XCJqc3gtcnVudGltZVwiLFxuXHRcdFwianN4LWRldi1ydW50aW1lXCIsXG5cdFx0XCJfaXNvbGF0ZWQtaG5yc1wiLFxuXHRcdFwidHlwZXMvKi5kLnRzXCIsXG5cdFx0XCJtYWNyby5qc1wiLFxuXHRcdFwibWFjcm8uZC50c1wiLFxuXHRcdFwibWFjcm8uanMuZmxvd1wiXG5cdF0sXG5cdHNpZGVFZmZlY3RzOiBmYWxzZSxcblx0YXV0aG9yOiBcIkVtb3Rpb24gQ29udHJpYnV0b3JzXCIsXG5cdGxpY2Vuc2U6IFwiTUlUXCIsXG5cdHNjcmlwdHM6IHtcblx0XHRcInRlc3Q6dHlwZXNjcmlwdFwiOiBcImR0c2xpbnQgdHlwZXNcIlxuXHR9LFxuXHRkZXBlbmRlbmNpZXM6IHtcblx0XHRcIkBiYWJlbC9ydW50aW1lXCI6IFwiXjcuMTMuMTBcIixcblx0XHRcIkBlbW90aW9uL2JhYmVsLXBsdWdpblwiOiBcIl4xMS43LjFcIixcblx0XHRcIkBlbW90aW9uL2NhY2hlXCI6IFwiXjExLjcuMVwiLFxuXHRcdFwiQGVtb3Rpb24vc2VyaWFsaXplXCI6IFwiXjEuMC4zXCIsXG5cdFx0XCJAZW1vdGlvbi91dGlsc1wiOiBcIl4xLjEuMFwiLFxuXHRcdFwiQGVtb3Rpb24vd2Vhay1tZW1vaXplXCI6IFwiXjAuMi41XCIsXG5cdFx0XCJob2lzdC1ub24tcmVhY3Qtc3RhdGljc1wiOiBcIl4zLjMuMVwiXG5cdH0sXG5cdHBlZXJEZXBlbmRlbmNpZXM6IHtcblx0XHRcIkBiYWJlbC9jb3JlXCI6IFwiXjcuMC4wXCIsXG5cdFx0cmVhY3Q6IFwiPj0xNi44LjBcIlxuXHR9LFxuXHRwZWVyRGVwZW5kZW5jaWVzTWV0YToge1xuXHRcdFwiQGJhYmVsL2NvcmVcIjoge1xuXHRcdFx0b3B0aW9uYWw6IHRydWVcblx0XHR9LFxuXHRcdFwiQHR5cGVzL3JlYWN0XCI6IHtcblx0XHRcdG9wdGlvbmFsOiB0cnVlXG5cdFx0fVxuXHR9LFxuXHRkZXZEZXBlbmRlbmNpZXM6IHtcblx0XHRcIkBiYWJlbC9jb3JlXCI6IFwiXjcuMTMuMTBcIixcblx0XHRcIkBlbW90aW9uL2Nzc1wiOiBcIjExLjkuMFwiLFxuXHRcdFwiQGVtb3Rpb24vY3NzLXByZXR0aWZpZXJcIjogXCIxLjAuMVwiLFxuXHRcdFwiQGVtb3Rpb24vc2VydmVyXCI6IFwiMTEuNC4wXCIsXG5cdFx0XCJAZW1vdGlvbi9zdHlsZWRcIjogXCIxMS44LjFcIixcblx0XHRcIkB0eXBlcy9yZWFjdFwiOiBcIl4xNi45LjExXCIsXG5cdFx0ZHRzbGludDogXCJeNC4yLjFcIixcblx0XHRcImh0bWwtdGFnLW5hbWVzXCI6IFwiXjEuMS4yXCIsXG5cdFx0cmVhY3Q6IFwiMTYuMTQuMFwiLFxuXHRcdFwic3ZnLXRhZy1uYW1lc1wiOiBcIl4xLjEuMVwiLFxuXHRcdHR5cGVzY3JpcHQ6IFwiXjQuNS41XCJcblx0fSxcblx0cmVwb3NpdG9yeTogXCJodHRwczovL2dpdGh1Yi5jb20vZW1vdGlvbi1qcy9lbW90aW9uL3RyZWUvbWFpbi9wYWNrYWdlcy9yZWFjdFwiLFxuXHRwdWJsaXNoQ29uZmlnOiB7XG5cdFx0YWNjZXNzOiBcInB1YmxpY1wiXG5cdH0sXG5cdFwidW1kOm1haW5cIjogXCJkaXN0L2Vtb3Rpb24tcmVhY3QudW1kLm1pbi5qc1wiLFxuXHRwcmVjb25zdHJ1Y3Q6IHtcblx0XHRlbnRyeXBvaW50czogW1xuXHRcdFx0XCIuL2luZGV4LmpzXCIsXG5cdFx0XHRcIi4vanN4LXJ1bnRpbWUuanNcIixcblx0XHRcdFwiLi9qc3gtZGV2LXJ1bnRpbWUuanNcIixcblx0XHRcdFwiLi9faXNvbGF0ZWQtaG5ycy5qc1wiXG5cdFx0XSxcblx0XHR1bWROYW1lOiBcImVtb3Rpb25SZWFjdFwiXG5cdH1cbn07XG5cbnZhciBqc3ggPSBmdW5jdGlvbiBqc3godHlwZSwgcHJvcHMpIHtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgaWYgKHByb3BzID09IG51bGwgfHwgIWhhc093blByb3BlcnR5LmNhbGwocHJvcHMsICdjc3MnKSkge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudC5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICB9XG5cbiAgdmFyIGFyZ3NMZW5ndGggPSBhcmdzLmxlbmd0aDtcbiAgdmFyIGNyZWF0ZUVsZW1lbnRBcmdBcnJheSA9IG5ldyBBcnJheShhcmdzTGVuZ3RoKTtcbiAgY3JlYXRlRWxlbWVudEFyZ0FycmF5WzBdID0gRW1vdGlvbjtcbiAgY3JlYXRlRWxlbWVudEFyZ0FycmF5WzFdID0gY3JlYXRlRW1vdGlvblByb3BzKHR5cGUsIHByb3BzKTtcblxuICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3NMZW5ndGg7IGkrKykge1xuICAgIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVtpXSA9IGFyZ3NbaV07XG4gIH0gLy8gJEZsb3dGaXhNZVxuXG5cbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQuYXBwbHkobnVsbCwgY3JlYXRlRWxlbWVudEFyZ0FycmF5KTtcbn07XG5cbnZhciB1c2VJbnNlcnRpb25FZmZlY3QgPSBSZWFjdFsndXNlSW5zZXJ0aW9uJyArICdFZmZlY3QnXSA/IFJlYWN0Wyd1c2VJbnNlcnRpb24nICsgJ0VmZmVjdCddIDogdXNlTGF5b3V0RWZmZWN0O1xudmFyIHdhcm5lZEFib3V0Q3NzUHJvcEZvckdsb2JhbCA9IGZhbHNlOyAvLyBtYWludGFpbiBwbGFjZSBvdmVyIHJlcmVuZGVycy5cbi8vIGluaXRpYWwgcmVuZGVyIGZyb20gYnJvd3NlciwgaW5zZXJ0QmVmb3JlIGNvbnRleHQuc2hlZXQudGFnc1swXSBvciBpZiBhIHN0eWxlIGhhc24ndCBiZWVuIGluc2VydGVkIHRoZXJlIHlldCwgYXBwZW5kQ2hpbGRcbi8vIGluaXRpYWwgY2xpZW50LXNpZGUgcmVuZGVyIGZyb20gU1NSLCB1c2UgcGxhY2Ugb2YgaHlkcmF0aW5nIHRhZ1xuXG52YXIgR2xvYmFsID0gLyogI19fUFVSRV9fICovd2l0aEVtb3Rpb25DYWNoZShmdW5jdGlvbiAocHJvcHMsIGNhY2hlKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICF3YXJuZWRBYm91dENzc1Byb3BGb3JHbG9iYWwgJiYgKCAvLyBjaGVjayBmb3IgY2xhc3NOYW1lIGFzIHdlbGwgc2luY2UgdGhlIHVzZXIgaXNcbiAgLy8gcHJvYmFibHkgdXNpbmcgdGhlIGN1c3RvbSBjcmVhdGVFbGVtZW50IHdoaWNoXG4gIC8vIG1lYW5zIGl0IHdpbGwgYmUgdHVybmVkIGludG8gYSBjbGFzc05hbWUgcHJvcFxuICAvLyAkRmxvd0ZpeE1lIEkgZG9uJ3QgcmVhbGx5IHdhbnQgdG8gYWRkIGl0IHRvIHRoZSB0eXBlIHNpbmNlIGl0IHNob3VsZG4ndCBiZSB1c2VkXG4gIHByb3BzLmNsYXNzTmFtZSB8fCBwcm9wcy5jc3MpKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkl0IGxvb2tzIGxpa2UgeW91J3JlIHVzaW5nIHRoZSBjc3MgcHJvcCBvbiBHbG9iYWwsIGRpZCB5b3UgbWVhbiB0byB1c2UgdGhlIHN0eWxlcyBwcm9wIGluc3RlYWQ/XCIpO1xuICAgIHdhcm5lZEFib3V0Q3NzUHJvcEZvckdsb2JhbCA9IHRydWU7XG4gIH1cblxuICB2YXIgc3R5bGVzID0gcHJvcHMuc3R5bGVzO1xuICB2YXIgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZVN0eWxlcyhbc3R5bGVzXSwgdW5kZWZpbmVkLCB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCkpO1xuICAvLyBidXQgaXQgaXMgYmFzZWQgb24gYSBjb25zdGFudCB0aGF0IHdpbGwgbmV2ZXIgY2hhbmdlIGF0IHJ1bnRpbWVcbiAgLy8gaXQncyBlZmZlY3RpdmVseSBsaWtlIGhhdmluZyB0d28gaW1wbGVtZW50YXRpb25zIGFuZCBzd2l0Y2hpbmcgdGhlbSBvdXRcbiAgLy8gc28gaXQncyBub3QgYWN0dWFsbHkgYnJlYWtpbmcgYW55dGhpbmdcblxuXG4gIHZhciBzaGVldFJlZiA9IHVzZVJlZigpO1xuICB1c2VJbnNlcnRpb25FZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBrZXkgPSBjYWNoZS5rZXkgKyBcIi1nbG9iYWxcIjsgLy8gdXNlIGNhc2Ugb2YgaHR0cHM6Ly9naXRodWIuY29tL2Vtb3Rpb24tanMvZW1vdGlvbi9pc3N1ZXMvMjY3NVxuXG4gICAgdmFyIHNoZWV0ID0gbmV3IGNhY2hlLnNoZWV0LmNvbnN0cnVjdG9yKHtcbiAgICAgIGtleToga2V5LFxuICAgICAgbm9uY2U6IGNhY2hlLnNoZWV0Lm5vbmNlLFxuICAgICAgY29udGFpbmVyOiBjYWNoZS5zaGVldC5jb250YWluZXIsXG4gICAgICBzcGVlZHk6IGNhY2hlLnNoZWV0LmlzU3BlZWR5XG4gICAgfSk7XG4gICAgdmFyIHJlaHlkcmF0aW5nID0gZmFsc2U7IC8vICRGbG93Rml4TWVcblxuICAgIHZhciBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInN0eWxlW2RhdGEtZW1vdGlvbj1cXFwiXCIgKyBrZXkgKyBcIiBcIiArIHNlcmlhbGl6ZWQubmFtZSArIFwiXFxcIl1cIik7XG5cbiAgICBpZiAoY2FjaGUuc2hlZXQudGFncy5sZW5ndGgpIHtcbiAgICAgIHNoZWV0LmJlZm9yZSA9IGNhY2hlLnNoZWV0LnRhZ3NbMF07XG4gICAgfVxuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHJlaHlkcmF0aW5nID0gdHJ1ZTsgLy8gY2xlYXIgdGhlIGhhc2ggc28gdGhpcyBub2RlIHdvbid0IGJlIHJlY29nbml6YWJsZSBhcyByZWh5ZHJhdGFibGUgYnkgb3RoZXIgPEdsb2JhbC8+c1xuXG4gICAgICBub2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1lbW90aW9uJywga2V5KTtcbiAgICAgIHNoZWV0Lmh5ZHJhdGUoW25vZGVdKTtcbiAgICB9XG5cbiAgICBzaGVldFJlZi5jdXJyZW50ID0gW3NoZWV0LCByZWh5ZHJhdGluZ107XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNoZWV0LmZsdXNoKCk7XG4gICAgfTtcbiAgfSwgW2NhY2hlXSk7XG4gIHVzZUluc2VydGlvbkVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNoZWV0UmVmQ3VycmVudCA9IHNoZWV0UmVmLmN1cnJlbnQ7XG4gICAgdmFyIHNoZWV0ID0gc2hlZXRSZWZDdXJyZW50WzBdLFxuICAgICAgICByZWh5ZHJhdGluZyA9IHNoZWV0UmVmQ3VycmVudFsxXTtcblxuICAgIGlmIChyZWh5ZHJhdGluZykge1xuICAgICAgc2hlZXRSZWZDdXJyZW50WzFdID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHNlcmlhbGl6ZWQubmV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBpbnNlcnQga2V5ZnJhbWVzXG4gICAgICBpbnNlcnRTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQubmV4dCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHNoZWV0LnRhZ3MubGVuZ3RoKSB7XG4gICAgICAvLyBpZiB0aGlzIGRvZXNuJ3QgZXhpc3QgdGhlbiBpdCB3aWxsIGJlIG51bGwgc28gdGhlIHN0eWxlIGVsZW1lbnQgd2lsbCBiZSBhcHBlbmRlZFxuICAgICAgdmFyIGVsZW1lbnQgPSBzaGVldC50YWdzW3NoZWV0LnRhZ3MubGVuZ3RoIC0gMV0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgc2hlZXQuYmVmb3JlID0gZWxlbWVudDtcbiAgICAgIHNoZWV0LmZsdXNoKCk7XG4gICAgfVxuXG4gICAgY2FjaGUuaW5zZXJ0KFwiXCIsIHNlcmlhbGl6ZWQsIHNoZWV0LCBmYWxzZSk7XG4gIH0sIFtjYWNoZSwgc2VyaWFsaXplZC5uYW1lXSk7XG4gIHJldHVybiBudWxsO1xufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIEdsb2JhbC5kaXNwbGF5TmFtZSA9ICdFbW90aW9uR2xvYmFsJztcbn1cblxuZnVuY3Rpb24gY3NzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIHNlcmlhbGl6ZVN0eWxlcyhhcmdzKTtcbn1cblxudmFyIGtleWZyYW1lcyA9IGZ1bmN0aW9uIGtleWZyYW1lcygpIHtcbiAgdmFyIGluc2VydGFibGUgPSBjc3MuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICB2YXIgbmFtZSA9IFwiYW5pbWF0aW9uLVwiICsgaW5zZXJ0YWJsZS5uYW1lOyAvLyAkRmxvd0ZpeE1lXG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIHN0eWxlczogXCJAa2V5ZnJhbWVzIFwiICsgbmFtZSArIFwie1wiICsgaW5zZXJ0YWJsZS5zdHlsZXMgKyBcIn1cIixcbiAgICBhbmltOiAxLFxuICAgIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiBcIl9FTU9fXCIgKyB0aGlzLm5hbWUgKyBcIl9cIiArIHRoaXMuc3R5bGVzICsgXCJfRU1PX1wiO1xuICAgIH1cbiAgfTtcbn07XG5cbnZhciBjbGFzc25hbWVzID0gZnVuY3Rpb24gY2xhc3NuYW1lcyhhcmdzKSB7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgY2xzID0gJyc7XG5cbiAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBhcmcgPSBhcmdzW2ldO1xuICAgIGlmIChhcmcgPT0gbnVsbCkgY29udGludWU7XG4gICAgdmFyIHRvQWRkID0gdm9pZCAwO1xuXG4gICAgc3dpdGNoICh0eXBlb2YgYXJnKSB7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG4gICAgICAgICAgICB0b0FkZCA9IGNsYXNzbmFtZXMoYXJnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgYXJnLnN0eWxlcyAhPT0gdW5kZWZpbmVkICYmIGFyZy5uYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignWW91IGhhdmUgcGFzc2VkIHN0eWxlcyBjcmVhdGVkIHdpdGggYGNzc2AgZnJvbSBgQGVtb3Rpb24vcmVhY3RgIHBhY2thZ2UgdG8gdGhlIGBjeGAuXFxuJyArICdgY3hgIGlzIG1lYW50IHRvIGNvbXBvc2UgY2xhc3MgbmFtZXMgKHN0cmluZ3MpIHNvIHlvdSBzaG91bGQgY29udmVydCB0aG9zZSBzdHlsZXMgdG8gYSBjbGFzcyBuYW1lIGJ5IHBhc3NpbmcgdGhlbSB0byB0aGUgYGNzc2AgcmVjZWl2ZWQgZnJvbSA8Q2xhc3NOYW1lcy8+IGNvbXBvbmVudC4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdG9BZGQgPSAnJztcblxuICAgICAgICAgICAgZm9yICh2YXIgayBpbiBhcmcpIHtcbiAgICAgICAgICAgICAgaWYgKGFyZ1trXSAmJiBrKSB7XG4gICAgICAgICAgICAgICAgdG9BZGQgJiYgKHRvQWRkICs9ICcgJyk7XG4gICAgICAgICAgICAgICAgdG9BZGQgKz0gaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHtcbiAgICAgICAgICB0b0FkZCA9IGFyZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0b0FkZCkge1xuICAgICAgY2xzICYmIChjbHMgKz0gJyAnKTtcbiAgICAgIGNscyArPSB0b0FkZDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2xzO1xufTtcblxuZnVuY3Rpb24gbWVyZ2UocmVnaXN0ZXJlZCwgY3NzLCBjbGFzc05hbWUpIHtcbiAgdmFyIHJlZ2lzdGVyZWRTdHlsZXMgPSBbXTtcbiAgdmFyIHJhd0NsYXNzTmFtZSA9IGdldFJlZ2lzdGVyZWRTdHlsZXMocmVnaXN0ZXJlZCwgcmVnaXN0ZXJlZFN0eWxlcywgY2xhc3NOYW1lKTtcblxuICBpZiAocmVnaXN0ZXJlZFN0eWxlcy5sZW5ndGggPCAyKSB7XG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIHJldHVybiByYXdDbGFzc05hbWUgKyBjc3MocmVnaXN0ZXJlZFN0eWxlcyk7XG59XG5cbnZhciBJbnNlcnRpb24gPSBmdW5jdGlvbiBJbnNlcnRpb24oX3JlZikge1xuICB2YXIgY2FjaGUgPSBfcmVmLmNhY2hlLFxuICAgICAgc2VyaWFsaXplZEFyciA9IF9yZWYuc2VyaWFsaXplZEFycjtcbiAgdmFyIHJ1bGVzID0gdXNlSW5zZXJ0aW9uRWZmZWN0TWF5YmUoZnVuY3Rpb24gKCkge1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXJpYWxpemVkQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcmVzID0gaW5zZXJ0U3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkQXJyW2ldLCBmYWxzZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbnVsbDtcbn07XG5cbnZhciBDbGFzc05hbWVzID0gLyogI19fUFVSRV9fICovd2l0aEVtb3Rpb25DYWNoZShmdW5jdGlvbiAocHJvcHMsIGNhY2hlKSB7XG4gIHZhciBoYXNSZW5kZXJlZCA9IGZhbHNlO1xuICB2YXIgc2VyaWFsaXplZEFyciA9IFtdO1xuXG4gIHZhciBjc3MgPSBmdW5jdGlvbiBjc3MoKSB7XG4gICAgaWYgKGhhc1JlbmRlcmVkICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3NzIGNhbiBvbmx5IGJlIHVzZWQgZHVyaW5nIHJlbmRlcicpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZVN0eWxlcyhhcmdzLCBjYWNoZS5yZWdpc3RlcmVkKTtcbiAgICBzZXJpYWxpemVkQXJyLnB1c2goc2VyaWFsaXplZCk7IC8vIHJlZ2lzdHJhdGlvbiBoYXMgdG8gaGFwcGVuIGhlcmUgYXMgdGhlIHJlc3VsdCBvZiB0aGlzIG1pZ2h0IGdldCBjb25zdW1lZCBieSBgY3hgXG5cbiAgICByZWdpc3RlclN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZCwgZmFsc2UpO1xuICAgIHJldHVybiBjYWNoZS5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcbiAgfTtcblxuICB2YXIgY3ggPSBmdW5jdGlvbiBjeCgpIHtcbiAgICBpZiAoaGFzUmVuZGVyZWQgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjeCBjYW4gb25seSBiZSB1c2VkIGR1cmluZyByZW5kZXInKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVyZ2UoY2FjaGUucmVnaXN0ZXJlZCwgY3NzLCBjbGFzc25hbWVzKGFyZ3MpKTtcbiAgfTtcblxuICB2YXIgY29udGVudCA9IHtcbiAgICBjc3M6IGNzcyxcbiAgICBjeDogY3gsXG4gICAgdGhlbWU6IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KVxuICB9O1xuICB2YXIgZWxlID0gcHJvcHMuY2hpbGRyZW4oY29udGVudCk7XG4gIGhhc1JlbmRlcmVkID0gdHJ1ZTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KEZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChJbnNlcnRpb24sIHtcbiAgICBjYWNoZTogY2FjaGUsXG4gICAgc2VyaWFsaXplZEFycjogc2VyaWFsaXplZEFyclxuICB9KSwgZWxlKTtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBDbGFzc05hbWVzLmRpc3BsYXlOYW1lID0gJ0Vtb3Rpb25DbGFzc05hbWVzJztcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGlzQnJvd3NlciA9IFwib2JqZWN0XCIgIT09ICd1bmRlZmluZWQnOyAvLyAjMTcyNyBmb3Igc29tZSByZWFzb24gSmVzdCBldmFsdWF0ZXMgbW9kdWxlcyB0d2ljZSBpZiBzb21lIGNvbnN1bWluZyBtb2R1bGUgZ2V0cyBtb2NrZWQgd2l0aCBqZXN0Lm1vY2tcblxuICB2YXIgaXNKZXN0ID0gdHlwZW9mIGplc3QgIT09ICd1bmRlZmluZWQnO1xuXG4gIGlmIChpc0Jyb3dzZXIgJiYgIWlzSmVzdCkge1xuICAgIC8vIGdsb2JhbFRoaXMgaGFzIHdpZGUgYnJvd3NlciBzdXBwb3J0IC0gaHR0cHM6Ly9jYW5pdXNlLmNvbS8/c2VhcmNoPWdsb2JhbFRoaXMsIE5vZGUuanMgMTIgYW5kIGxhdGVyXG4gICAgdmFyIGdsb2JhbENvbnRleHQgPSAvLyAkRmxvd0lnbm9yZVxuICAgIHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgIDogaXNCcm93c2VyID8gd2luZG93IDogZ2xvYmFsO1xuICAgIHZhciBnbG9iYWxLZXkgPSBcIl9fRU1PVElPTl9SRUFDVF9cIiArIHBrZy52ZXJzaW9uLnNwbGl0KCcuJylbMF0gKyBcIl9fXCI7XG5cbiAgICBpZiAoZ2xvYmFsQ29udGV4dFtnbG9iYWxLZXldKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1lvdSBhcmUgbG9hZGluZyBAZW1vdGlvbi9yZWFjdCB3aGVuIGl0IGlzIGFscmVhZHkgbG9hZGVkLiBSdW5uaW5nICcgKyAnbXVsdGlwbGUgaW5zdGFuY2VzIG1heSBjYXVzZSBwcm9ibGVtcy4gVGhpcyBjYW4gaGFwcGVuIGlmIG11bHRpcGxlICcgKyAndmVyc2lvbnMgYXJlIHVzZWQsIG9yIGlmIG11bHRpcGxlIGJ1aWxkcyBvZiB0aGUgc2FtZSB2ZXJzaW9uIGFyZSAnICsgJ3VzZWQuJyk7XG4gICAgfVxuXG4gICAgZ2xvYmFsQ29udGV4dFtnbG9iYWxLZXldID0gdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQgeyBDbGFzc05hbWVzLCBHbG9iYWwsIGpzeCBhcyBjcmVhdGVFbGVtZW50LCBjc3MsIGpzeCwga2V5ZnJhbWVzIH07XG4iLCJpbXBvcnQgaGFzaFN0cmluZyBmcm9tICdAZW1vdGlvbi9oYXNoJztcbmltcG9ydCB1bml0bGVzcyBmcm9tICdAZW1vdGlvbi91bml0bGVzcyc7XG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdAZW1vdGlvbi9tZW1vaXplJztcblxudmFyIElMTEVHQUxfRVNDQVBFX1NFUVVFTkNFX0VSUk9SID0gXCJZb3UgaGF2ZSBpbGxlZ2FsIGVzY2FwZSBzZXF1ZW5jZSBpbiB5b3VyIHRlbXBsYXRlIGxpdGVyYWwsIG1vc3QgbGlrZWx5IGluc2lkZSBjb250ZW50J3MgcHJvcGVydHkgdmFsdWUuXFxuQmVjYXVzZSB5b3Ugd3JpdGUgeW91ciBDU1MgaW5zaWRlIGEgSmF2YVNjcmlwdCBzdHJpbmcgeW91IGFjdHVhbGx5IGhhdmUgdG8gZG8gZG91YmxlIGVzY2FwaW5nLCBzbyBmb3IgZXhhbXBsZSBcXFwiY29udGVudDogJ1xcXFwwMGQ3JztcXFwiIHNob3VsZCBiZWNvbWUgXFxcImNvbnRlbnQ6ICdcXFxcXFxcXDAwZDcnO1xcXCIuXFxuWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgdGhpcyBoZXJlOlxcbmh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL1RlbXBsYXRlX2xpdGVyYWxzI0VTMjAxOF9yZXZpc2lvbl9vZl9pbGxlZ2FsX2VzY2FwZV9zZXF1ZW5jZXNcIjtcbnZhciBVTkRFRklORURfQVNfT0JKRUNUX0tFWV9FUlJPUiA9IFwiWW91IGhhdmUgcGFzc2VkIGluIGZhbHN5IHZhbHVlIGFzIHN0eWxlIG9iamVjdCdzIGtleSAoY2FuIGhhcHBlbiB3aGVuIGluIGV4YW1wbGUgeW91IHBhc3MgdW5leHBvcnRlZCBjb21wb25lbnQgYXMgY29tcHV0ZWQga2V5KS5cIjtcbnZhciBoeXBoZW5hdGVSZWdleCA9IC9bQS1aXXxebXMvZztcbnZhciBhbmltYXRpb25SZWdleCA9IC9fRU1PXyhbXl9dKz8pXyhbXl0qPylfRU1PXy9nO1xuXG52YXIgaXNDdXN0b21Qcm9wZXJ0eSA9IGZ1bmN0aW9uIGlzQ3VzdG9tUHJvcGVydHkocHJvcGVydHkpIHtcbiAgcmV0dXJuIHByb3BlcnR5LmNoYXJDb2RlQXQoMSkgPT09IDQ1O1xufTtcblxudmFyIGlzUHJvY2Vzc2FibGVWYWx1ZSA9IGZ1bmN0aW9uIGlzUHJvY2Vzc2FibGVWYWx1ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgIT09ICdib29sZWFuJztcbn07XG5cbnZhciBwcm9jZXNzU3R5bGVOYW1lID0gLyogI19fUFVSRV9fICovbWVtb2l6ZShmdW5jdGlvbiAoc3R5bGVOYW1lKSB7XG4gIHJldHVybiBpc0N1c3RvbVByb3BlcnR5KHN0eWxlTmFtZSkgPyBzdHlsZU5hbWUgOiBzdHlsZU5hbWUucmVwbGFjZShoeXBoZW5hdGVSZWdleCwgJy0kJicpLnRvTG93ZXJDYXNlKCk7XG59KTtcblxudmFyIHByb2Nlc3NTdHlsZVZhbHVlID0gZnVuY3Rpb24gcHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCB2YWx1ZSkge1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgJ2FuaW1hdGlvbic6XG4gICAgY2FzZSAnYW5pbWF0aW9uTmFtZSc6XG4gICAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoYW5pbWF0aW9uUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCwgcDEsIHAyKSB7XG4gICAgICAgICAgICBjdXJzb3IgPSB7XG4gICAgICAgICAgICAgIG5hbWU6IHAxLFxuICAgICAgICAgICAgICBzdHlsZXM6IHAyLFxuICAgICAgICAgICAgICBuZXh0OiBjdXJzb3JcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gcDE7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIGlmICh1bml0bGVzc1trZXldICE9PSAxICYmICFpc0N1c3RvbVByb3BlcnR5KGtleSkgJiYgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSAhPT0gMCkge1xuICAgIHJldHVybiB2YWx1ZSArICdweCc7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgY29udGVudFZhbHVlUGF0dGVybiA9IC8odmFyfGF0dHJ8Y291bnRlcnM/fHVybHwoKChyZXBlYXRpbmctKT8obGluZWFyfHJhZGlhbCkpfGNvbmljKS1ncmFkaWVudClcXCh8KG5vLSk/KG9wZW58Y2xvc2UpLXF1b3RlLztcbiAgdmFyIGNvbnRlbnRWYWx1ZXMgPSBbJ25vcm1hbCcsICdub25lJywgJ2luaXRpYWwnLCAnaW5oZXJpdCcsICd1bnNldCddO1xuICB2YXIgb2xkUHJvY2Vzc1N0eWxlVmFsdWUgPSBwcm9jZXNzU3R5bGVWYWx1ZTtcbiAgdmFyIG1zUGF0dGVybiA9IC9eLW1zLS87XG4gIHZhciBoeXBoZW5QYXR0ZXJuID0gLy0oLikvZztcbiAgdmFyIGh5cGhlbmF0ZWRDYWNoZSA9IHt9O1xuXG4gIHByb2Nlc3NTdHlsZVZhbHVlID0gZnVuY3Rpb24gcHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgPT09ICdjb250ZW50Jykge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgfHwgY29udGVudFZhbHVlcy5pbmRleE9mKHZhbHVlKSA9PT0gLTEgJiYgIWNvbnRlbnRWYWx1ZVBhdHRlcm4udGVzdCh2YWx1ZSkgJiYgKHZhbHVlLmNoYXJBdCgwKSAhPT0gdmFsdWUuY2hhckF0KHZhbHVlLmxlbmd0aCAtIDEpIHx8IHZhbHVlLmNoYXJBdCgwKSAhPT0gJ1wiJyAmJiB2YWx1ZS5jaGFyQXQoMCkgIT09IFwiJ1wiKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3Ugc2VlbSB0byBiZSB1c2luZyBhIHZhbHVlIGZvciAnY29udGVudCcgd2l0aG91dCBxdW90ZXMsIHRyeSByZXBsYWNpbmcgaXQgd2l0aCBgY29udGVudDogJ1xcXCJcIiArIHZhbHVlICsgXCJcXFwiJ2BcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByb2Nlc3NlZCA9IG9sZFByb2Nlc3NTdHlsZVZhbHVlKGtleSwgdmFsdWUpO1xuXG4gICAgaWYgKHByb2Nlc3NlZCAhPT0gJycgJiYgIWlzQ3VzdG9tUHJvcGVydHkoa2V5KSAmJiBrZXkuaW5kZXhPZignLScpICE9PSAtMSAmJiBoeXBoZW5hdGVkQ2FjaGVba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBoeXBoZW5hdGVkQ2FjaGVba2V5XSA9IHRydWU7XG4gICAgICBjb25zb2xlLmVycm9yKFwiVXNpbmcga2ViYWItY2FzZSBmb3IgY3NzIHByb3BlcnRpZXMgaW4gb2JqZWN0cyBpcyBub3Qgc3VwcG9ydGVkLiBEaWQgeW91IG1lYW4gXCIgKyBrZXkucmVwbGFjZShtc1BhdHRlcm4sICdtcy0nKS5yZXBsYWNlKGh5cGhlblBhdHRlcm4sIGZ1bmN0aW9uIChzdHIsIF9jaGFyKSB7XG4gICAgICAgIHJldHVybiBfY2hhci50b1VwcGVyQ2FzZSgpO1xuICAgICAgfSkgKyBcIj9cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2Nlc3NlZDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgaW50ZXJwb2xhdGlvbikge1xuICBpZiAoaW50ZXJwb2xhdGlvbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKGludGVycG9sYXRpb24uX19lbW90aW9uX3N0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaW50ZXJwb2xhdGlvbi50b1N0cmluZygpID09PSAnTk9fQ09NUE9ORU5UX1NFTEVDVE9SJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb25lbnQgc2VsZWN0b3JzIGNhbiBvbmx5IGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBAZW1vdGlvbi9iYWJlbC1wbHVnaW4uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGludGVycG9sYXRpb247XG4gIH1cblxuICBzd2l0Y2ggKHR5cGVvZiBpbnRlcnBvbGF0aW9uKSB7XG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICB7XG4gICAgICAgIGlmIChpbnRlcnBvbGF0aW9uLmFuaW0gPT09IDEpIHtcbiAgICAgICAgICBjdXJzb3IgPSB7XG4gICAgICAgICAgICBuYW1lOiBpbnRlcnBvbGF0aW9uLm5hbWUsXG4gICAgICAgICAgICBzdHlsZXM6IGludGVycG9sYXRpb24uc3R5bGVzLFxuICAgICAgICAgICAgbmV4dDogY3Vyc29yXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gaW50ZXJwb2xhdGlvbi5uYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGludGVycG9sYXRpb24uc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YXIgbmV4dCA9IGludGVycG9sYXRpb24ubmV4dDtcblxuICAgICAgICAgIGlmIChuZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIG5vdCB0aGUgbW9zdCBlZmZpY2llbnQgdGhpbmcgZXZlciBidXQgdGhpcyBpcyBhIHByZXR0eSByYXJlIGNhc2VcbiAgICAgICAgICAgIC8vIGFuZCB0aGVyZSB3aWxsIGJlIHZlcnkgZmV3IGl0ZXJhdGlvbnMgb2YgdGhpcyBnZW5lcmFsbHlcbiAgICAgICAgICAgIHdoaWxlIChuZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgY3Vyc29yID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IG5leHQubmFtZSxcbiAgICAgICAgICAgICAgICBzdHlsZXM6IG5leHQuc3R5bGVzLFxuICAgICAgICAgICAgICAgIG5leHQ6IGN1cnNvclxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBuZXh0ID0gbmV4dC5uZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBzdHlsZXMgPSBpbnRlcnBvbGF0aW9uLnN0eWxlcyArIFwiO1wiO1xuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaW50ZXJwb2xhdGlvbi5tYXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc3R5bGVzICs9IGludGVycG9sYXRpb24ubWFwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3JlYXRlU3RyaW5nRnJvbU9iamVjdChtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgaW50ZXJwb2xhdGlvbik7XG4gICAgICB9XG5cbiAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICB7XG4gICAgICAgIGlmIChtZXJnZWRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIHByZXZpb3VzQ3Vyc29yID0gY3Vyc29yO1xuICAgICAgICAgIHZhciByZXN1bHQgPSBpbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzKTtcbiAgICAgICAgICBjdXJzb3IgPSBwcmV2aW91c0N1cnNvcjtcbiAgICAgICAgICByZXR1cm4gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgcmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRnVuY3Rpb25zIHRoYXQgYXJlIGludGVycG9sYXRlZCBpbiBjc3MgY2FsbHMgd2lsbCBiZSBzdHJpbmdpZmllZC5cXG4nICsgJ0lmIHlvdSB3YW50IHRvIGhhdmUgYSBjc3MgY2FsbCBiYXNlZCBvbiBwcm9wcywgY3JlYXRlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgY3NzIGNhbGwgbGlrZSB0aGlzXFxuJyArICdsZXQgZHluYW1pY1N0eWxlID0gKHByb3BzKSA9PiBjc3NgY29sb3I6ICR7cHJvcHMuY29sb3J9YFxcbicgKyAnSXQgY2FuIGJlIGNhbGxlZCBkaXJlY3RseSB3aXRoIHByb3BzIG9yIGludGVycG9sYXRlZCBpbiBhIHN0eWxlZCBjYWxsIGxpa2UgdGhpc1xcbicgKyBcImxldCBTb21lQ29tcG9uZW50ID0gc3R5bGVkKCdkaXYnKWAke2R5bmFtaWNTdHlsZX1gXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdmFyIG1hdGNoZWQgPSBbXTtcbiAgICAgICAgdmFyIHJlcGxhY2VkID0gaW50ZXJwb2xhdGlvbi5yZXBsYWNlKGFuaW1hdGlvblJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gsIHAxLCBwMikge1xuICAgICAgICAgIHZhciBmYWtlVmFyTmFtZSA9IFwiYW5pbWF0aW9uXCIgKyBtYXRjaGVkLmxlbmd0aDtcbiAgICAgICAgICBtYXRjaGVkLnB1c2goXCJjb25zdCBcIiArIGZha2VWYXJOYW1lICsgXCIgPSBrZXlmcmFtZXNgXCIgKyBwMi5yZXBsYWNlKC9eQGtleWZyYW1lcyBhbmltYXRpb24tXFx3Ky8sICcnKSArIFwiYFwiKTtcbiAgICAgICAgICByZXR1cm4gXCIke1wiICsgZmFrZVZhck5hbWUgKyBcIn1cIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1hdGNoZWQubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignYGtleWZyYW1lc2Agb3V0cHV0IGdvdCBpbnRlcnBvbGF0ZWQgaW50byBwbGFpbiBzdHJpbmcsIHBsZWFzZSB3cmFwIGl0IHdpdGggYGNzc2AuXFxuXFxuJyArICdJbnN0ZWFkIG9mIGRvaW5nIHRoaXM6XFxuXFxuJyArIFtdLmNvbmNhdChtYXRjaGVkLCBbXCJgXCIgKyByZXBsYWNlZCArIFwiYFwiXSkuam9pbignXFxuJykgKyAnXFxuXFxuWW91IHNob3VsZCB3cmFwIGl0IHdpdGggYGNzc2AgbGlrZSB0aGlzOlxcblxcbicgKyAoXCJjc3NgXCIgKyByZXBsYWNlZCArIFwiYFwiKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gIH0gLy8gZmluYWxpemUgc3RyaW5nIHZhbHVlcyAocmVndWxhciBzdHJpbmdzIGFuZCBmdW5jdGlvbnMgaW50ZXJwb2xhdGVkIGludG8gY3NzIGNhbGxzKVxuXG5cbiAgaWYgKHJlZ2lzdGVyZWQgPT0gbnVsbCkge1xuICAgIHJldHVybiBpbnRlcnBvbGF0aW9uO1xuICB9XG5cbiAgdmFyIGNhY2hlZCA9IHJlZ2lzdGVyZWRbaW50ZXJwb2xhdGlvbl07XG4gIHJldHVybiBjYWNoZWQgIT09IHVuZGVmaW5lZCA/IGNhY2hlZCA6IGludGVycG9sYXRpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0cmluZ0Zyb21PYmplY3QobWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIG9iaikge1xuICB2YXIgc3RyaW5nID0gJyc7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzdHJpbmcgKz0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgb2JqW2ldKSArIFwiO1wiO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBfa2V5IGluIG9iaikge1xuICAgICAgdmFyIHZhbHVlID0gb2JqW19rZXldO1xuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAocmVnaXN0ZXJlZCAhPSBudWxsICYmIHJlZ2lzdGVyZWRbdmFsdWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdHJpbmcgKz0gX2tleSArIFwie1wiICsgcmVnaXN0ZXJlZFt2YWx1ZV0gKyBcIn1cIjtcbiAgICAgICAgfSBlbHNlIGlmIChpc1Byb2Nlc3NhYmxlVmFsdWUodmFsdWUpKSB7XG4gICAgICAgICAgc3RyaW5nICs9IHByb2Nlc3NTdHlsZU5hbWUoX2tleSkgKyBcIjpcIiArIHByb2Nlc3NTdHlsZVZhbHVlKF9rZXksIHZhbHVlKSArIFwiO1wiO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoX2tleSA9PT0gJ05PX0NPTVBPTkVOVF9TRUxFQ1RPUicgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IHNlbGVjdG9ycyBjYW4gb25seSBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggQGVtb3Rpb24vYmFiZWwtcGx1Z2luLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHR5cGVvZiB2YWx1ZVswXSA9PT0gJ3N0cmluZycgJiYgKHJlZ2lzdGVyZWQgPT0gbnVsbCB8fCByZWdpc3RlcmVkW3ZhbHVlWzBdXSA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB2YWx1ZS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGlmIChpc1Byb2Nlc3NhYmxlVmFsdWUodmFsdWVbX2ldKSkge1xuICAgICAgICAgICAgICBzdHJpbmcgKz0gcHJvY2Vzc1N0eWxlTmFtZShfa2V5KSArIFwiOlwiICsgcHJvY2Vzc1N0eWxlVmFsdWUoX2tleSwgdmFsdWVbX2ldKSArIFwiO1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgaW50ZXJwb2xhdGVkID0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgdmFsdWUpO1xuXG4gICAgICAgICAgc3dpdGNoIChfa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdhbmltYXRpb24nOlxuICAgICAgICAgICAgY2FzZSAnYW5pbWF0aW9uTmFtZSc6XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gcHJvY2Vzc1N0eWxlTmFtZShfa2V5KSArIFwiOlwiICsgaW50ZXJwb2xhdGVkICsgXCI7XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIF9rZXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFVOREVGSU5FRF9BU19PQkpFQ1RfS0VZX0VSUk9SKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gX2tleSArIFwie1wiICsgaW50ZXJwb2xhdGVkICsgXCJ9XCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG52YXIgbGFiZWxQYXR0ZXJuID0gL2xhYmVsOlxccyooW15cXHM7XFxue10rKVxccyooO3wkKS9nO1xudmFyIHNvdXJjZU1hcFBhdHRlcm47XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHNvdXJjZU1hcFBhdHRlcm4gPSAvXFwvXFwqI1xcc3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvblxcL2pzb247XFxTK1xccytcXCpcXC8vZztcbn0gLy8gdGhpcyBpcyB0aGUgY3Vyc29yIGZvciBrZXlmcmFtZXNcbi8vIGtleWZyYW1lcyBhcmUgc3RvcmVkIG9uIHRoZSBTZXJpYWxpemVkU3R5bGVzIG9iamVjdCBhcyBhIGxpbmtlZCBsaXN0XG5cblxudmFyIGN1cnNvcjtcbnZhciBzZXJpYWxpemVTdHlsZXMgPSBmdW5jdGlvbiBzZXJpYWxpemVTdHlsZXMoYXJncywgcmVnaXN0ZXJlZCwgbWVyZ2VkUHJvcHMpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIHR5cGVvZiBhcmdzWzBdID09PSAnb2JqZWN0JyAmJiBhcmdzWzBdICE9PSBudWxsICYmIGFyZ3NbMF0uc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gYXJnc1swXTtcbiAgfVxuXG4gIHZhciBzdHJpbmdNb2RlID0gdHJ1ZTtcbiAgdmFyIHN0eWxlcyA9ICcnO1xuICBjdXJzb3IgPSB1bmRlZmluZWQ7XG4gIHZhciBzdHJpbmdzID0gYXJnc1swXTtcblxuICBpZiAoc3RyaW5ncyA9PSBudWxsIHx8IHN0cmluZ3MucmF3ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdHJpbmdNb2RlID0gZmFsc2U7XG4gICAgc3R5bGVzICs9IGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIHN0cmluZ3MpO1xuICB9IGVsc2Uge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHN0cmluZ3NbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc29sZS5lcnJvcihJTExFR0FMX0VTQ0FQRV9TRVFVRU5DRV9FUlJPUik7XG4gICAgfVxuXG4gICAgc3R5bGVzICs9IHN0cmluZ3NbMF07XG4gIH0gLy8gd2Ugc3RhcnQgYXQgMSBzaW5jZSB3ZSd2ZSBhbHJlYWR5IGhhbmRsZWQgdGhlIGZpcnN0IGFyZ1xuXG5cbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgc3R5bGVzICs9IGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIGFyZ3NbaV0pO1xuXG4gICAgaWYgKHN0cmluZ01vZGUpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHN0cmluZ3NbaV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKElMTEVHQUxfRVNDQVBFX1NFUVVFTkNFX0VSUk9SKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzICs9IHN0cmluZ3NbaV07XG4gICAgfVxuICB9XG5cbiAgdmFyIHNvdXJjZU1hcDtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHN0eWxlcyA9IHN0eWxlcy5yZXBsYWNlKHNvdXJjZU1hcFBhdHRlcm4sIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgc291cmNlTWFwID0gbWF0Y2g7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSk7XG4gIH0gLy8gdXNpbmcgYSBnbG9iYWwgcmVnZXggd2l0aCAuZXhlYyBpcyBzdGF0ZWZ1bCBzbyBsYXN0SW5kZXggaGFzIHRvIGJlIHJlc2V0IGVhY2ggdGltZVxuXG5cbiAgbGFiZWxQYXR0ZXJuLmxhc3RJbmRleCA9IDA7XG4gIHZhciBpZGVudGlmaWVyTmFtZSA9ICcnO1xuICB2YXIgbWF0Y2g7IC8vIGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNWI4MDljMmNmMjk0OTgwMGEwZjYxZmI1XG5cbiAgd2hpbGUgKChtYXRjaCA9IGxhYmVsUGF0dGVybi5leGVjKHN0eWxlcykpICE9PSBudWxsKSB7XG4gICAgaWRlbnRpZmllck5hbWUgKz0gJy0nICsgLy8gJEZsb3dGaXhNZSB3ZSBrbm93IGl0J3Mgbm90IG51bGxcbiAgICBtYXRjaFsxXTtcbiAgfVxuXG4gIHZhciBuYW1lID0gaGFzaFN0cmluZyhzdHlsZXMpICsgaWRlbnRpZmllck5hbWU7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFNlcmlhbGl6ZWRTdHlsZXMgdHlwZSBkb2Vzbid0IGhhdmUgdG9TdHJpbmcgcHJvcGVydHkgKGFuZCB3ZSBkb24ndCB3YW50IHRvIGFkZCBpdClcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIHN0eWxlczogc3R5bGVzLFxuICAgICAgbWFwOiBzb3VyY2VNYXAsXG4gICAgICBuZXh0OiBjdXJzb3IsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBcIllvdSBoYXZlIHRyaWVkIHRvIHN0cmluZ2lmeSBvYmplY3QgcmV0dXJuZWQgZnJvbSBgY3NzYCBmdW5jdGlvbi4gSXQgaXNuJ3Qgc3VwcG9zZWQgdG8gYmUgdXNlZCBkaXJlY3RseSAoZS5nLiBhcyB2YWx1ZSBvZiB0aGUgYGNsYXNzTmFtZWAgcHJvcCksIGJ1dCByYXRoZXIgaGFuZGVkIHRvIGVtb3Rpb24gc28gaXQgY2FuIGhhbmRsZSBpdCAoZS5nLiBhcyB2YWx1ZSBvZiBgY3NzYCBwcm9wKS5cIjtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIHN0eWxlczogc3R5bGVzLFxuICAgIG5leHQ6IGN1cnNvclxuICB9O1xufTtcblxuZXhwb3J0IHsgc2VyaWFsaXplU3R5bGVzIH07XG4iLCIvKlxuXG5CYXNlZCBvZmYgZ2xhbW9yJ3MgU3R5bGVTaGVldCwgdGhhbmtzIFN1bmlsIOKdpO+4j1xuXG5oaWdoIHBlcmZvcm1hbmNlIFN0eWxlU2hlZXQgZm9yIGNzcy1pbi1qcyBzeXN0ZW1zXG5cbi0gdXNlcyBtdWx0aXBsZSBzdHlsZSB0YWdzIGJlaGluZCB0aGUgc2NlbmVzIGZvciBtaWxsaW9ucyBvZiBydWxlc1xuLSB1c2VzIGBpbnNlcnRSdWxlYCBmb3IgYXBwZW5kaW5nIGluIHByb2R1Y3Rpb24gZm9yICptdWNoKiBmYXN0ZXIgcGVyZm9ybWFuY2VcblxuLy8gdXNhZ2VcblxuaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gJ0BlbW90aW9uL3NoZWV0J1xuXG5sZXQgc3R5bGVTaGVldCA9IG5ldyBTdHlsZVNoZWV0KHsga2V5OiAnJywgY29udGFpbmVyOiBkb2N1bWVudC5oZWFkIH0pXG5cbnN0eWxlU2hlZXQuaW5zZXJ0KCcjYm94IHsgYm9yZGVyOiAxcHggc29saWQgcmVkOyB9Jylcbi0gYXBwZW5kcyBhIGNzcyBydWxlIGludG8gdGhlIHN0eWxlc2hlZXRcblxuc3R5bGVTaGVldC5mbHVzaCgpXG4tIGVtcHRpZXMgdGhlIHN0eWxlc2hlZXQgb2YgYWxsIGl0cyBjb250ZW50c1xuXG4qL1xuLy8gJEZsb3dGaXhNZVxuZnVuY3Rpb24gc2hlZXRGb3JUYWcodGFnKSB7XG4gIGlmICh0YWcuc2hlZXQpIHtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgcmV0dXJuIHRhZy5zaGVldDtcbiAgfSAvLyB0aGlzIHdlaXJkbmVzcyBicm91Z2h0IHRvIHlvdSBieSBmaXJlZm94XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZG9jdW1lbnQuc3R5bGVTaGVldHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZG9jdW1lbnQuc3R5bGVTaGVldHNbaV0ub3duZXJOb2RlID09PSB0YWcpIHtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIHJldHVybiBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHRhZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtZW1vdGlvbicsIG9wdGlvbnMua2V5KTtcblxuICBpZiAob3B0aW9ucy5ub25jZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGFnLnNldEF0dHJpYnV0ZSgnbm9uY2UnLCBvcHRpb25zLm5vbmNlKTtcbiAgfVxuXG4gIHRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpO1xuICB0YWcuc2V0QXR0cmlidXRlKCdkYXRhLXMnLCAnJyk7XG4gIHJldHVybiB0YWc7XG59XG5cbnZhciBTdHlsZVNoZWV0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3R5bGVTaGVldChvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuX2luc2VydFRhZyA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgIHZhciBiZWZvcmU7XG5cbiAgICAgIGlmIChfdGhpcy50YWdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpZiAoX3RoaXMuaW5zZXJ0aW9uUG9pbnQpIHtcbiAgICAgICAgICBiZWZvcmUgPSBfdGhpcy5pbnNlcnRpb25Qb2ludC5uZXh0U2libGluZztcbiAgICAgICAgfSBlbHNlIGlmIChfdGhpcy5wcmVwZW5kKSB7XG4gICAgICAgICAgYmVmb3JlID0gX3RoaXMuY29udGFpbmVyLmZpcnN0Q2hpbGQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYmVmb3JlID0gX3RoaXMuYmVmb3JlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiZWZvcmUgPSBfdGhpcy50YWdzW190aGlzLnRhZ3MubGVuZ3RoIC0gMV0ubmV4dFNpYmxpbmc7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmNvbnRhaW5lci5pbnNlcnRCZWZvcmUodGFnLCBiZWZvcmUpO1xuXG4gICAgICBfdGhpcy50YWdzLnB1c2godGFnKTtcbiAgICB9O1xuXG4gICAgdGhpcy5pc1NwZWVkeSA9IG9wdGlvbnMuc3BlZWR5ID09PSB1bmRlZmluZWQgPyBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nIDogb3B0aW9ucy5zcGVlZHk7XG4gICAgdGhpcy50YWdzID0gW107XG4gICAgdGhpcy5jdHIgPSAwO1xuICAgIHRoaXMubm9uY2UgPSBvcHRpb25zLm5vbmNlOyAvLyBrZXkgaXMgdGhlIHZhbHVlIG9mIHRoZSBkYXRhLWVtb3Rpb24gYXR0cmlidXRlLCBpdCdzIHVzZWQgdG8gaWRlbnRpZnkgZGlmZmVyZW50IHNoZWV0c1xuXG4gICAgdGhpcy5rZXkgPSBvcHRpb25zLmtleTtcbiAgICB0aGlzLmNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyO1xuICAgIHRoaXMucHJlcGVuZCA9IG9wdGlvbnMucHJlcGVuZDtcbiAgICB0aGlzLmluc2VydGlvblBvaW50ID0gb3B0aW9ucy5pbnNlcnRpb25Qb2ludDtcbiAgICB0aGlzLmJlZm9yZSA9IG51bGw7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU3R5bGVTaGVldC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmh5ZHJhdGUgPSBmdW5jdGlvbiBoeWRyYXRlKG5vZGVzKSB7XG4gICAgbm9kZXMuZm9yRWFjaCh0aGlzLl9pbnNlcnRUYWcpO1xuICB9O1xuXG4gIF9wcm90by5pbnNlcnQgPSBmdW5jdGlvbiBpbnNlcnQocnVsZSkge1xuICAgIC8vIHRoZSBtYXggbGVuZ3RoIGlzIGhvdyBtYW55IHJ1bGVzIHdlIGhhdmUgcGVyIHN0eWxlIHRhZywgaXQncyA2NTAwMCBpbiBzcGVlZHkgbW9kZVxuICAgIC8vIGl0J3MgMSBpbiBkZXYgYmVjYXVzZSB3ZSBpbnNlcnQgc291cmNlIG1hcHMgdGhhdCBtYXAgYSBzaW5nbGUgcnVsZSB0byBhIGxvY2F0aW9uXG4gICAgLy8gYW5kIHlvdSBjYW4gb25seSBoYXZlIG9uZSBzb3VyY2UgbWFwIHBlciBzdHlsZSB0YWdcbiAgICBpZiAodGhpcy5jdHIgJSAodGhpcy5pc1NwZWVkeSA/IDY1MDAwIDogMSkgPT09IDApIHtcbiAgICAgIHRoaXMuX2luc2VydFRhZyhjcmVhdGVTdHlsZUVsZW1lbnQodGhpcykpO1xuICAgIH1cblxuICAgIHZhciB0YWcgPSB0aGlzLnRhZ3NbdGhpcy50YWdzLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBpc0ltcG9ydFJ1bGUgPSBydWxlLmNoYXJDb2RlQXQoMCkgPT09IDY0ICYmIHJ1bGUuY2hhckNvZGVBdCgxKSA9PT0gMTA1O1xuXG4gICAgICBpZiAoaXNJbXBvcnRSdWxlICYmIHRoaXMuX2FscmVhZHlJbnNlcnRlZE9yZGVySW5zZW5zaXRpdmVSdWxlKSB7XG4gICAgICAgIC8vIHRoaXMgd291bGQgb25seSBjYXVzZSBwcm9ibGVtIGluIHNwZWVkeSBtb2RlXG4gICAgICAgIC8vIGJ1dCB3ZSBkb24ndCB3YW50IGVuYWJsaW5nIHNwZWVkeSB0byBhZmZlY3QgdGhlIG9ic2VydmFibGUgYmVoYXZpb3JcbiAgICAgICAgLy8gc28gd2UgcmVwb3J0IHRoaXMgZXJyb3IgYXQgYWxsIHRpbWVzXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJZb3UncmUgYXR0ZW1wdGluZyB0byBpbnNlcnQgdGhlIGZvbGxvd2luZyBydWxlOlxcblwiICsgcnVsZSArICdcXG5cXG5gQGltcG9ydGAgcnVsZXMgbXVzdCBiZSBiZWZvcmUgYWxsIG90aGVyIHR5cGVzIG9mIHJ1bGVzIGluIGEgc3R5bGVzaGVldCBidXQgb3RoZXIgcnVsZXMgaGF2ZSBhbHJlYWR5IGJlZW4gaW5zZXJ0ZWQuIFBsZWFzZSBlbnN1cmUgdGhhdCBgQGltcG9ydGAgcnVsZXMgYXJlIGJlZm9yZSBhbGwgb3RoZXIgcnVsZXMuJyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9hbHJlYWR5SW5zZXJ0ZWRPcmRlckluc2Vuc2l0aXZlUnVsZSA9IHRoaXMuX2FscmVhZHlJbnNlcnRlZE9yZGVySW5zZW5zaXRpdmVSdWxlIHx8ICFpc0ltcG9ydFJ1bGU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNTcGVlZHkpIHtcbiAgICAgIHZhciBzaGVldCA9IHNoZWV0Rm9yVGFnKHRhZyk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIHRoaXMgaXMgdGhlIHVsdHJhZmFzdCB2ZXJzaW9uLCB3b3JrcyBhY3Jvc3MgYnJvd3NlcnNcbiAgICAgICAgLy8gdGhlIGJpZyBkcmF3YmFjayBpcyB0aGF0IHRoZSBjc3Mgd29uJ3QgYmUgZWRpdGFibGUgaW4gZGV2dG9vbHNcbiAgICAgICAgc2hlZXQuaW5zZXJ0UnVsZShydWxlLCBzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhLzooLW1vei1wbGFjZWhvbGRlcnwtbW96LWZvY3VzLWlubmVyfC1tb3otZm9jdXNyaW5nfC1tcy1pbnB1dC1wbGFjZWhvbGRlcnwtbW96LXJlYWQtd3JpdGV8LW1vei1yZWFkLW9ubHl8LW1zLWNsZWFyKXsvLnRlc3QocnVsZSkpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVGhlcmUgd2FzIGEgcHJvYmxlbSBpbnNlcnRpbmcgdGhlIGZvbGxvd2luZyBydWxlOiBcXFwiXCIgKyBydWxlICsgXCJcXFwiXCIsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShydWxlKSk7XG4gICAgfVxuXG4gICAgdGhpcy5jdHIrKztcbiAgfTtcblxuICBfcHJvdG8uZmx1c2ggPSBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgdGhpcy50YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xuICAgICAgcmV0dXJuIHRhZy5wYXJlbnROb2RlICYmIHRhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhZyk7XG4gICAgfSk7XG4gICAgdGhpcy50YWdzID0gW107XG4gICAgdGhpcy5jdHIgPSAwO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRoaXMuX2FscmVhZHlJbnNlcnRlZE9yZGVySW5zZW5zaXRpdmVSdWxlID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBTdHlsZVNoZWV0O1xufSgpO1xuXG5leHBvcnQgeyBTdHlsZVNoZWV0IH07XG4iLCJ2YXIgdW5pdGxlc3NLZXlzID0ge1xuICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogMSxcbiAgYm9yZGVySW1hZ2VPdXRzZXQ6IDEsXG4gIGJvcmRlckltYWdlU2xpY2U6IDEsXG4gIGJvcmRlckltYWdlV2lkdGg6IDEsXG4gIGJveEZsZXg6IDEsXG4gIGJveEZsZXhHcm91cDogMSxcbiAgYm94T3JkaW5hbEdyb3VwOiAxLFxuICBjb2x1bW5Db3VudDogMSxcbiAgY29sdW1uczogMSxcbiAgZmxleDogMSxcbiAgZmxleEdyb3c6IDEsXG4gIGZsZXhQb3NpdGl2ZTogMSxcbiAgZmxleFNocmluazogMSxcbiAgZmxleE5lZ2F0aXZlOiAxLFxuICBmbGV4T3JkZXI6IDEsXG4gIGdyaWRSb3c6IDEsXG4gIGdyaWRSb3dFbmQ6IDEsXG4gIGdyaWRSb3dTcGFuOiAxLFxuICBncmlkUm93U3RhcnQ6IDEsXG4gIGdyaWRDb2x1bW46IDEsXG4gIGdyaWRDb2x1bW5FbmQ6IDEsXG4gIGdyaWRDb2x1bW5TcGFuOiAxLFxuICBncmlkQ29sdW1uU3RhcnQ6IDEsXG4gIG1zR3JpZFJvdzogMSxcbiAgbXNHcmlkUm93U3BhbjogMSxcbiAgbXNHcmlkQ29sdW1uOiAxLFxuICBtc0dyaWRDb2x1bW5TcGFuOiAxLFxuICBmb250V2VpZ2h0OiAxLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBvcGFjaXR5OiAxLFxuICBvcmRlcjogMSxcbiAgb3JwaGFuczogMSxcbiAgdGFiU2l6ZTogMSxcbiAgd2lkb3dzOiAxLFxuICB6SW5kZXg6IDEsXG4gIHpvb206IDEsXG4gIFdlYmtpdExpbmVDbGFtcDogMSxcbiAgLy8gU1ZHLXJlbGF0ZWQgcHJvcGVydGllc1xuICBmaWxsT3BhY2l0eTogMSxcbiAgZmxvb2RPcGFjaXR5OiAxLFxuICBzdG9wT3BhY2l0eTogMSxcbiAgc3Ryb2tlRGFzaGFycmF5OiAxLFxuICBzdHJva2VEYXNob2Zmc2V0OiAxLFxuICBzdHJva2VNaXRlcmxpbWl0OiAxLFxuICBzdHJva2VPcGFjaXR5OiAxLFxuICBzdHJva2VXaWR0aDogMVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdW5pdGxlc3NLZXlzO1xuIiwidmFyIGlzQnJvd3NlciA9IFwib2JqZWN0XCIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gZ2V0UmVnaXN0ZXJlZFN0eWxlcyhyZWdpc3RlcmVkLCByZWdpc3RlcmVkU3R5bGVzLCBjbGFzc05hbWVzKSB7XG4gIHZhciByYXdDbGFzc05hbWUgPSAnJztcbiAgY2xhc3NOYW1lcy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgIGlmIChyZWdpc3RlcmVkW2NsYXNzTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVnaXN0ZXJlZFN0eWxlcy5wdXNoKHJlZ2lzdGVyZWRbY2xhc3NOYW1lXSArIFwiO1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmF3Q2xhc3NOYW1lICs9IGNsYXNzTmFtZSArIFwiIFwiO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByYXdDbGFzc05hbWU7XG59XG52YXIgcmVnaXN0ZXJTdHlsZXMgPSBmdW5jdGlvbiByZWdpc3RlclN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZCwgaXNTdHJpbmdUYWcpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IGNhY2hlLmtleSArIFwiLVwiICsgc2VyaWFsaXplZC5uYW1lO1xuXG4gIGlmICggLy8gd2Ugb25seSBuZWVkIHRvIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSByZWdpc3RlcmVkIGNhY2hlIGlmIHRoZVxuICAvLyBjbGFzcyBuYW1lIGNvdWxkIGJlIHVzZWQgZnVydGhlciBkb3duXG4gIC8vIHRoZSB0cmVlIGJ1dCBpZiBpdCdzIGEgc3RyaW5nIHRhZywgd2Uga25vdyBpdCB3b24ndFxuICAvLyBzbyB3ZSBkb24ndCBoYXZlIHRvIGFkZCBpdCB0byByZWdpc3RlcmVkIGNhY2hlLlxuICAvLyB0aGlzIGltcHJvdmVzIG1lbW9yeSB1c2FnZSBzaW5jZSB3ZSBjYW4gYXZvaWQgc3RvcmluZyB0aGUgd2hvbGUgc3R5bGUgc3RyaW5nXG4gIChpc1N0cmluZ1RhZyA9PT0gZmFsc2UgfHwgLy8gd2UgbmVlZCB0byBhbHdheXMgc3RvcmUgaXQgaWYgd2UncmUgaW4gY29tcGF0IG1vZGUgYW5kXG4gIC8vIGluIG5vZGUgc2luY2UgZW1vdGlvbi1zZXJ2ZXIgcmVsaWVzIG9uIHdoZXRoZXIgYSBzdHlsZSBpcyBpblxuICAvLyB0aGUgcmVnaXN0ZXJlZCBjYWNoZSB0byBrbm93IHdoZXRoZXIgYSBzdHlsZSBpcyBnbG9iYWwgb3Igbm90XG4gIC8vIGFsc28sIG5vdGUgdGhhdCB0aGlzIGNoZWNrIHdpbGwgYmUgZGVhZCBjb2RlIGVsaW1pbmF0ZWQgaW4gdGhlIGJyb3dzZXJcbiAgaXNCcm93c2VyID09PSBmYWxzZSApICYmIGNhY2hlLnJlZ2lzdGVyZWRbY2xhc3NOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FjaGUucmVnaXN0ZXJlZFtjbGFzc05hbWVdID0gc2VyaWFsaXplZC5zdHlsZXM7XG4gIH1cbn07XG52YXIgaW5zZXJ0U3R5bGVzID0gZnVuY3Rpb24gaW5zZXJ0U3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkLCBpc1N0cmluZ1RhZykge1xuICByZWdpc3RlclN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZCwgaXNTdHJpbmdUYWcpO1xuICB2YXIgY2xhc3NOYW1lID0gY2FjaGUua2V5ICsgXCItXCIgKyBzZXJpYWxpemVkLm5hbWU7XG5cbiAgaWYgKGNhY2hlLmluc2VydGVkW3NlcmlhbGl6ZWQubmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBjdXJyZW50ID0gc2VyaWFsaXplZDtcblxuICAgIGRvIHtcbiAgICAgIHZhciBtYXliZVN0eWxlcyA9IGNhY2hlLmluc2VydChzZXJpYWxpemVkID09PSBjdXJyZW50ID8gXCIuXCIgKyBjbGFzc05hbWUgOiAnJywgY3VycmVudCwgY2FjaGUuc2hlZXQsIHRydWUpO1xuXG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH0gd2hpbGUgKGN1cnJlbnQgIT09IHVuZGVmaW5lZCk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGdldFJlZ2lzdGVyZWRTdHlsZXMsIGluc2VydFN0eWxlcywgcmVnaXN0ZXJTdHlsZXMgfTtcbiIsInZhciB3ZWFrTWVtb2l6ZSA9IGZ1bmN0aW9uIHdlYWtNZW1vaXplKGZ1bmMpIHtcbiAgLy8gJEZsb3dGaXhNZSBmbG93IGRvZXNuJ3QgaW5jbHVkZSBhbGwgbm9uLXByaW1pdGl2ZSB0eXBlcyBhcyBhbGxvd2VkIGZvciB3ZWFrbWFwc1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChjYWNoZS5oYXMoYXJnKSkge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgcmV0dXJuIGNhY2hlLmdldChhcmcpO1xuICAgIH1cblxuICAgIHZhciByZXQgPSBmdW5jKGFyZyk7XG4gICAgY2FjaGUuc2V0KGFyZywgcmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2Vha01lbW9pemU7XG4iLCJpbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgV2ViM01vZGFsIGZyb20gXCJ3ZWIzbW9kYWxcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IHsgQ2xpcExvYWRlciB9IGZyb20gXCJyZWFjdC1zcGlubmVyc1wiO1xyXG5cclxuXHJcbmltcG9ydCB7IG1hcmtldHBsYWNlQWRkcmVzcyB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuXHJcbmltcG9ydCBORlRNYXJrZXRwbGFjZSBmcm9tIFwiLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9ORlRNYXJrZXRwbGFjZS5zb2wvTkZUTWFya2V0cGxhY2UuanNvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbbmZ0cywgc2V0TmZ0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmdTdGF0ZSwgc2V0TG9hZGluZ1N0YXRlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9hZE5GVHMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGxvYWRORlRzKCkge1xyXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5Kc29uUnBjUHJvdmlkZXIoXHJcbiAgICAgIFwiaHR0cHM6Ly9ycGMtbXVtYmFpLm1hdGljLnRvZGF5XCJcclxuICAgICk7XHJcbiAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXHJcbiAgICAgIG1hcmtldHBsYWNlQWRkcmVzcyxcclxuICAgICAgTkZUTWFya2V0cGxhY2UuYWJpLFxyXG4gICAgICBwcm92aWRlclxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgY29udHJhY3QuZmV0Y2hNYXJrZXRJdGVtcygpO1xyXG4gICAgXHJcbiAgICBjb25zdCBpdGVtcyA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICBkYXRhLm1hcChhc3luYyAoaSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRva2VuVXJpID0gYXdhaXQgY29udHJhY3QudG9rZW5VUkkoaS50b2tlbklkKTtcclxuICAgICAgICBjb25zdCBtZXRhID0gYXdhaXQgYXhpb3MuZ2V0KHRva2VuVXJpKTtcclxuICAgICAgICBsZXQgcHJpY2UgPSBldGhlcnMudXRpbHMuZm9ybWF0VW5pdHMoaS5wcmljZS50b1N0cmluZygpLCBcImV0aGVyXCIpO1xyXG4gICAgICAgIGxldCBpdGVtID0ge1xyXG4gICAgICAgICAgcHJpY2UsXHJcbiAgICAgICAgICB0b2tlbklkOiBpLnRva2VuSWQudG9OdW1iZXIoKSxcclxuICAgICAgICAgIHNlbGxlcjogaS5zZWxsZXIsXHJcbiAgICAgICAgICBvd25lcjogaS5vd25lcixcclxuICAgICAgICAgIGltYWdlOiBtZXRhLmRhdGEuaW1hZ2UsXHJcbiAgICAgICAgICBuYW1lOiBtZXRhLmRhdGEubmFtZSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBtZXRhLmRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgICBzZXROZnRzKGl0ZW1zKTtcclxuICAgIHNldExvYWRpbmdTdGF0ZShmYWxzZSk7XHJcbiAgfVxyXG4gIFxyXG4gIGFzeW5jIGZ1bmN0aW9uIGJ1eU5mdChuZnQpIHtcclxuICAgIC8qIG5lZWRzIHRoZSB1c2VyIHRvIHNpZ24gdGhlIHRyYW5zYWN0aW9uLCBzbyB3aWxsIHVzZSBXZWIzUHJvdmlkZXIgYW5kIHNpZ24gaXQgKi9cclxuICAgIGNvbnN0IHdlYjNNb2RhbCA9IG5ldyBXZWIzTW9kYWwoKTtcclxuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCB3ZWIzTW9kYWwuY29ubmVjdCgpO1xyXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoY29ubmVjdGlvbik7XHJcbiAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcclxuICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcclxuICAgICAgbWFya2V0cGxhY2VBZGRyZXNzLFxyXG4gICAgICBORlRNYXJrZXRwbGFjZS5hYmksXHJcbiAgICAgIHNpZ25lclxyXG4gICAgKTtcclxuXHJcbiAgICAvKiB1c2VyIHdpbGwgYmUgcHJvbXB0ZWQgdG8gcGF5IHRoZSBhc2tpbmcgcHJvY2VzIHRvIGNvbXBsZXRlIHRoZSB0cmFuc2FjdGlvbiAqL1xyXG4gICAgY29uc3QgcHJpY2UgPSBldGhlcnMudXRpbHMucGFyc2VVbml0cyhuZnQucHJpY2UudG9TdHJpbmcoKSwgXCJldGhlclwiKTtcclxuICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgY29udHJhY3QuY3JlYXRlTWFya2V0U2FsZShuZnQudG9rZW5JZCwge1xyXG4gICAgICB2YWx1ZTogcHJpY2UsXHJcbiAgICB9KTtcclxuICAgIGF3YWl0IHRyYW5zYWN0aW9uLndhaXQoKTtcclxuICAgIGxvYWRORlRzKCk7XHJcbiAgfVxyXG5cclxuICBpZiAobG9hZGluZ1N0YXRlID09PSBmYWxzZSAmJiAhbmZ0cy5sZW5ndGgpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwicHgtMjAgcHktMTAgdGV4dC0zeGxcIj5cclxuICAgICAgICBDdXJyZW50bHkgbm8gYXNzZXQgaW4gbWFya2V0cGxhY2VcclxuICAgICAgPC9oMT5cclxuICAgICk7XHJcbiAgXHJcbiAgZWxzZSBpZiAobG9hZGluZ1N0YXRlID09PSB0cnVlKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLXNjcmVlbiB3LXNjcmVlbiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxDbGlwTG9hZGVyIGxvYWRpbmcgc2l6ZT17MjAwfSBjb2xvcj1cIndoaXRlXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gKCBcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtLTIwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNFwiIHN0eWxlPXt7IG1heFdpZHRoOiBcIjE2MDBweFwiIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCBnYXAtNCBwdC00XCI+XHJcbiAgICAgICAgICB7bmZ0cy5tYXAoKG5mdCwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiBiZy13aGl0ZSBweC0zXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQteGwgbXQtNFwiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17bmZ0LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgPjwvaWZyYW1lPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBteS0xIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgTkZUcy8ke25mdC50b2tlbklkfWB9PlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBteS0yIFwiPntuZnQubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG92ZXJmbG93OiBcImhpZGRlblwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIG15LTNcIj57bmZ0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtYmxhY2tcIj5cclxuICAgICAgICAgICAgICAgICAge25mdC5wcmljZX0gTUFUSUNcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGwgYmctcGluay01MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC0xMiByb3VuZGVkXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYnV5TmZ0KG5mdCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEJ1eVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28hIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS4gU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICBjb250ZXh0VHlwZTogdHJ1ZSxcbiAgY29udGV4dFR5cGVzOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICBtaXhpbnM6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBLTk9XTl9TVEFUSUNTID0ge1xuICBuYW1lOiB0cnVlLFxuICBsZW5ndGg6IHRydWUsXG4gIHByb3RvdHlwZTogdHJ1ZSxcbiAgY2FsbGVyOiB0cnVlLFxuICBjYWxsZWU6IHRydWUsXG4gIGFyZ3VtZW50czogdHJ1ZSxcbiAgYXJpdHk6IHRydWVcbn07XG52YXIgRk9SV0FSRF9SRUZfU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgcmVuZGVyOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWVcbn07XG52YXIgTUVNT19TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICBjb21wYXJlOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgVFlQRV9TVEFUSUNTID0ge307XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5Gb3J3YXJkUmVmXSA9IEZPUldBUkRfUkVGX1NUQVRJQ1M7XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5NZW1vXSA9IE1FTU9fU1RBVElDUztcblxuZnVuY3Rpb24gZ2V0U3RhdGljcyhjb21wb25lbnQpIHtcbiAgLy8gUmVhY3QgdjE2LjExIGFuZCBiZWxvd1xuICBpZiAocmVhY3RJcy5pc01lbW8oY29tcG9uZW50KSkge1xuICAgIHJldHVybiBNRU1PX1NUQVRJQ1M7XG4gIH0gLy8gUmVhY3QgdjE2LjEyIGFuZCBhYm92ZVxuXG5cbiAgcmV0dXJuIFRZUEVfU1RBVElDU1tjb21wb25lbnRbJyQkdHlwZW9mJ11dIHx8IFJFQUNUX1NUQVRJQ1M7XG59XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIG9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgYmxhY2tsaXN0KSB7XG4gIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSAnc3RyaW5nJykge1xuICAgIC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG4gICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgdmFyIGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQsIGJsYWNrbGlzdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgIH1cblxuICAgIHZhciB0YXJnZXRTdGF0aWNzID0gZ2V0U3RhdGljcyh0YXJnZXRDb21wb25lbnQpO1xuICAgIHZhciBzb3VyY2VTdGF0aWNzID0gZ2V0U3RhdGljcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKCFLTk9XTl9TVEFUSUNTW2tleV0gJiYgIShibGFja2xpc3QgJiYgYmxhY2tsaXN0W2tleV0pICYmICEoc291cmNlU3RhdGljcyAmJiBzb3VyY2VTdGF0aWNzW2tleV0pICYmICEodGFyZ2V0U3RhdGljcyAmJiB0YXJnZXRTdGF0aWNzW2tleV0pKSB7XG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIEF2b2lkIGZhaWx1cmVzIGZyb20gcmVhZC1vbmx5IHByb3BlcnRpZXNcbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXRDb21wb25lbnQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBob2lzdE5vblJlYWN0U3RhdGljcztcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX21ha2VUZW1wbGF0ZU9iamVjdCA9ICh0aGlzICYmIHRoaXMuX19tYWtlVGVtcGxhdGVPYmplY3QpIHx8IGZ1bmN0aW9uIChjb29rZWQsIHJhdykge1xuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gICAgcmV0dXJuIGNvb2tlZDtcbn07XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKiogQGpzeCBqc3ggKi9cbnZhciBSZWFjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3RcIik7XG52YXIgaGVscGVyc18xID0gcmVxdWlyZShcIi4vaGVscGVyc1wiKTtcbnZhciBsb25nID0gcmVhY3RfMS5rZXlmcmFtZXModGVtcGxhdGVPYmplY3RfMSB8fCAodGVtcGxhdGVPYmplY3RfMSA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgMCUge2xlZnQ6IC0zNSU7cmlnaHQ6IDEwMCV9XFxuICA2MCUge2xlZnQ6IDEwMCU7cmlnaHQ6IC05MCV9XFxuICAxMDAlIHtsZWZ0OiAxMDAlO3JpZ2h0OiAtOTAlfVxcblwiXSwgW1wiXFxuICAwJSB7bGVmdDogLTM1JTtyaWdodDogMTAwJX1cXG4gIDYwJSB7bGVmdDogMTAwJTtyaWdodDogLTkwJX1cXG4gIDEwMCUge2xlZnQ6IDEwMCU7cmlnaHQ6IC05MCV9XFxuXCJdKSkpO1xudmFyIHNob3J0ID0gcmVhY3RfMS5rZXlmcmFtZXModGVtcGxhdGVPYmplY3RfMiB8fCAodGVtcGxhdGVPYmplY3RfMiA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgMCUge2xlZnQ6IC0yMDAlO3JpZ2h0OiAxMDAlfVxcbiAgNjAlIHtsZWZ0OiAxMDclO3JpZ2h0OiAtOCV9XFxuICAxMDAlIHtsZWZ0OiAxMDclO3JpZ2h0OiAtOCV9XFxuXCJdLCBbXCJcXG4gIDAlIHtsZWZ0OiAtMjAwJTtyaWdodDogMTAwJX1cXG4gIDYwJSB7bGVmdDogMTA3JTtyaWdodDogLTglfVxcbiAgMTAwJSB7bGVmdDogMTA3JTtyaWdodDogLTglfVxcblwiXSkpKTtcbnZhciBMb2FkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExvYWRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMb2FkZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zdHlsZSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcywgaGVpZ2h0ID0gX2EuaGVpZ2h0LCBjb2xvciA9IF9hLmNvbG9yLCBzcGVlZE11bHRpcGxpZXIgPSBfYS5zcGVlZE11bHRpcGxpZXI7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfMyB8fCAodGVtcGxhdGVPYmplY3RfMyA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IFwiLCBcIjtcXG4gICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgICB3aWxsLWNoYW5nZTogbGVmdCwgcmlnaHQ7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwic1xcbiAgICAgICAgXCIsIFwiXFxuICAgICAgICBcIiwgXCJcXG4gICAgICAgIGluZmluaXRlO1xcbiAgICBcIl0sIFtcIlxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IFwiLCBcIjtcXG4gICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgICB3aWxsLWNoYW5nZTogbGVmdCwgcmlnaHQ7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwic1xcbiAgICAgICAgXCIsIFwiXFxuICAgICAgICBcIixcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgaW5maW5pdGU7XFxuICAgIFwiXSkpLCBoZWxwZXJzXzEuY3NzVmFsdWUoaGVpZ2h0KSwgY29sb3IsIGkgPT09IDEgPyBsb25nIDogc2hvcnQsIDIuMSAvIHNwZWVkTXVsdGlwbGllciwgaSA9PT0gMiA/IDEuMTUgLyBzcGVlZE11bHRpcGxpZXIgKyBcInNcIiA6IFwiXCIsIGkgPT09IDFcbiAgICAgICAgICAgICAgICA/IFwiY3ViaWMtYmV6aWVyKDAuNjUsIDAuODE1LCAwLjczNSwgMC4zOTUpXCJcbiAgICAgICAgICAgICAgICA6IFwiY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKVwiKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMud3JhcHBlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLCB3aWR0aCA9IF9hLndpZHRoLCBoZWlnaHQgPSBfYS5oZWlnaHQsIGNvbG9yID0gX2EuY29sb3I7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfNCB8fCAodGVtcGxhdGVPYmplY3RfNCA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogXCIsIFwiO1xcbiAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxuICAgIFwiXSwgW1wiXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiwgXCI7XFxuICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG4gICAgXCJdKSksIGhlbHBlcnNfMS5jc3NWYWx1ZSh3aWR0aCksIGhlbHBlcnNfMS5jc3NWYWx1ZShoZWlnaHQpLCBoZWxwZXJzXzEuY2FsY3VsYXRlUmdiYShjb2xvciwgMC4yKSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTG9hZGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIGxvYWRpbmcgPSBfYS5sb2FkaW5nLCBjc3MgPSBfYS5jc3M7XG4gICAgICAgIHJldHVybiBsb2FkaW5nID8gKHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogW3RoaXMud3JhcHBlcigpLCBjc3NdIH0sXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUoMSkgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUoMikgfSkpKSA6IG51bGw7XG4gICAgfTtcbiAgICBMb2FkZXIuZGVmYXVsdFByb3BzID0gaGVscGVyc18xLmhlaWdodFdpZHRoRGVmYXVsdHMoNCwgMTAwKTtcbiAgICByZXR1cm4gTG9hZGVyO1xufShSZWFjdC5QdXJlQ29tcG9uZW50KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBMb2FkZXI7XG52YXIgdGVtcGxhdGVPYmplY3RfMSwgdGVtcGxhdGVPYmplY3RfMiwgdGVtcGxhdGVPYmplY3RfMywgdGVtcGxhdGVPYmplY3RfNDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fbWFrZVRlbXBsYXRlT2JqZWN0ID0gKHRoaXMgJiYgdGhpcy5fX21ha2VUZW1wbGF0ZU9iamVjdCkgfHwgZnVuY3Rpb24gKGNvb2tlZCwgcmF3KSB7XG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cbiAgICByZXR1cm4gY29va2VkO1xufTtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKiBAanN4IGpzeCAqL1xudmFyIFJlYWN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3RfMSA9IHJlcXVpcmUoXCJAZW1vdGlvbi9yZWFjdFwiKTtcbnZhciBoZWxwZXJzXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzXCIpO1xudmFyIGJlYXQgPSByZWFjdF8xLmtleWZyYW1lcyh0ZW1wbGF0ZU9iamVjdF8xIHx8ICh0ZW1wbGF0ZU9iamVjdF8xID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICA1MCUge3RyYW5zZm9ybTogc2NhbGUoMC43NSk7b3BhY2l0eTogMC4yfVxcbiAgMTAwJSB7dHJhbnNmb3JtOiBzY2FsZSgxKTtvcGFjaXR5OiAxfVxcblwiXSwgW1wiXFxuICA1MCUge3RyYW5zZm9ybTogc2NhbGUoMC43NSk7b3BhY2l0eTogMC4yfVxcbiAgMTAwJSB7dHJhbnNmb3JtOiBzY2FsZSgxKTtvcGFjaXR5OiAxfVxcblwiXSkpKTtcbnZhciBMb2FkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExvYWRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMb2FkZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zdHlsZSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcywgY29sb3IgPSBfYS5jb2xvciwgc2l6ZSA9IF9hLnNpemUsIG1hcmdpbiA9IF9hLm1hcmdpbiwgc3BlZWRNdWx0aXBsaWVyID0gX2Euc3BlZWRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzIgfHwgKHRlbXBsYXRlT2JqZWN0XzIgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogXCIsIFwiO1xcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgbWFyZ2luOiBcIiwgXCI7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIFwiLCBcIlxcbiAgICAgICAgaW5maW5pdGUgbGluZWFyO1xcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAgIFwiXSwgW1wiXFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IFwiLCBcIjtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIG1hcmdpbjogXCIsIFwiO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyBcIiwgXCJcXG4gICAgICAgIGluZmluaXRlIGxpbmVhcjtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICBcIl0pKSwgY29sb3IsIGhlbHBlcnNfMS5jc3NWYWx1ZShzaXplKSwgaGVscGVyc18xLmNzc1ZhbHVlKHNpemUpLCBoZWxwZXJzXzEuY3NzVmFsdWUobWFyZ2luKSwgYmVhdCwgMC43IC8gc3BlZWRNdWx0aXBsaWVyLCBpICUgMiA/IFwiMHNcIiA6IDAuMzUgLyBzcGVlZE11bHRpcGxpZXIgKyBcInNcIik7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTG9hZGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIGxvYWRpbmcgPSBfYS5sb2FkaW5nLCBjc3MgPSBfYS5jc3M7XG4gICAgICAgIHJldHVybiBsb2FkaW5nID8gKHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogW2Nzc10gfSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5zdHlsZSgxKSB9KSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5zdHlsZSgyKSB9KSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5zdHlsZSgzKSB9KSkpIDogbnVsbDtcbiAgICB9O1xuICAgIExvYWRlci5kZWZhdWx0UHJvcHMgPSBoZWxwZXJzXzEuc2l6ZU1hcmdpbkRlZmF1bHRzKDE1KTtcbiAgICByZXR1cm4gTG9hZGVyO1xufShSZWFjdC5QdXJlQ29tcG9uZW50KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBMb2FkZXI7XG52YXIgdGVtcGxhdGVPYmplY3RfMSwgdGVtcGxhdGVPYmplY3RfMjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fbWFrZVRlbXBsYXRlT2JqZWN0ID0gKHRoaXMgJiYgdGhpcy5fX21ha2VUZW1wbGF0ZU9iamVjdCkgfHwgZnVuY3Rpb24gKGNvb2tlZCwgcmF3KSB7XG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cbiAgICByZXR1cm4gY29va2VkO1xufTtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKiBAanN4IGpzeCAqL1xudmFyIFJlYWN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3RfMSA9IHJlcXVpcmUoXCJAZW1vdGlvbi9yZWFjdFwiKTtcbnZhciBoZWxwZXJzXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzXCIpO1xudmFyIGJvdW5jZSA9IHJlYWN0XzEua2V5ZnJhbWVzKHRlbXBsYXRlT2JqZWN0XzEgfHwgKHRlbXBsYXRlT2JqZWN0XzEgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gIDAlLCAxMDAlIHt0cmFuc2Zvcm06IHNjYWxlKDApfVxcbiAgNTAlIHt0cmFuc2Zvcm06IHNjYWxlKDEuMCl9XFxuXCJdLCBbXCJcXG4gIDAlLCAxMDAlIHt0cmFuc2Zvcm06IHNjYWxlKDApfVxcbiAgNTAlIHt0cmFuc2Zvcm06IHNjYWxlKDEuMCl9XFxuXCJdKSkpO1xudmFyIExvYWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTG9hZGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExvYWRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnN0eWxlID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLCBjb2xvciA9IF9hLmNvbG9yLCBzaXplID0gX2Euc2l6ZSwgc3BlZWRNdWx0aXBsaWVyID0gX2Euc3BlZWRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzIgfHwgKHRlbXBsYXRlT2JqZWN0XzIgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiwgXCI7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgICBvcGFjaXR5OiAwLjY7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIFwiLCBcIlxcbiAgICAgICAgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxuICAgIFwiXSwgW1wiXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogXCIsIFwiO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgICAgb3BhY2l0eTogMC42O1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyBcIiwgXCJcXG4gICAgICAgIGluZmluaXRlIGVhc2UtaW4tb3V0O1xcbiAgICBcIl0pKSwgaGVscGVyc18xLmNzc1ZhbHVlKHNpemUpLCBoZWxwZXJzXzEuY3NzVmFsdWUoc2l6ZSksIGNvbG9yLCBib3VuY2UsIDIuMSAvIHNwZWVkTXVsdGlwbGllciwgaSA9PT0gMSA/IDEgLyBzcGVlZE11bHRpcGxpZXIgKyBcInNcIiA6IFwiMHNcIik7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLndyYXBwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2l6ZSA9IF90aGlzLnByb3BzLnNpemU7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfMyB8fCAodGVtcGxhdGVPYmplY3RfMyA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICBcIl0sIFtcIlxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICBcIl0pKSwgaGVscGVyc18xLmNzc1ZhbHVlKHNpemUpLCBoZWxwZXJzXzEuY3NzVmFsdWUoc2l6ZSkpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIExvYWRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBsb2FkaW5nID0gX2EubG9hZGluZywgY3NzID0gX2EuY3NzO1xuICAgICAgICByZXR1cm4gbG9hZGluZyA/IChyZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IFt0aGlzLndyYXBwZXIoKSwgY3NzXSB9LFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDEpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDIpIH0pKSkgOiBudWxsO1xuICAgIH07XG4gICAgTG9hZGVyLmRlZmF1bHRQcm9wcyA9IGhlbHBlcnNfMS5zaXplRGVmYXVsdHMoNjApO1xuICAgIHJldHVybiBMb2FkZXI7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IExvYWRlcjtcbnZhciB0ZW1wbGF0ZU9iamVjdF8xLCB0ZW1wbGF0ZU9iamVjdF8yLCB0ZW1wbGF0ZU9iamVjdF8zO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19tYWtlVGVtcGxhdGVPYmplY3QgPSAodGhpcyAmJiB0aGlzLl9fbWFrZVRlbXBsYXRlT2JqZWN0KSB8fCBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICAgIHJldHVybiBjb29rZWQ7XG59O1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqIEBqc3gganN4ICovXG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciByZWFjdF8xID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0XCIpO1xudmFyIGhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIik7XG52YXIgY2lyY2xlID0gcmVhY3RfMS5rZXlmcmFtZXModGVtcGxhdGVPYmplY3RfMSB8fCAodGVtcGxhdGVPYmplY3RfMSA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgMCUge3RyYW5zZm9ybTogcm90YXRlKDBkZWcpfVxcbiAgNTAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpfVxcbiAgMTAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKX1cXG5cIl0sIFtcIlxcbiAgMCUge3RyYW5zZm9ybTogcm90YXRlKDBkZWcpfVxcbiAgNTAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpfVxcbiAgMTAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKX1cXG5cIl0pKSk7XG52YXIgTG9hZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMb2FkZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTG9hZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3R5bGUgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsIHNpemUgPSBfYS5zaXplLCBjb2xvciA9IF9hLmNvbG9yLCBzcGVlZE11bHRpcGxpZXIgPSBfYS5zcGVlZE11bHRpcGxpZXI7XG4gICAgICAgICAgICB2YXIgX2IgPSBoZWxwZXJzXzEucGFyc2VMZW5ndGhBbmRVbml0KHNpemUpLCB2YWx1ZSA9IF9iLnZhbHVlLCB1bml0ID0gX2IudW5pdDtcbiAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmNzcyh0ZW1wbGF0ZU9iamVjdF8yIHx8ICh0ZW1wbGF0ZU9iamVjdF8yID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgXCIsIFwiO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgICAgdHJhbnNpdGlvbjogMnM7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgdG9wOiBcIiwgXCIlO1xcbiAgICAgIGxlZnQ6IFwiLCBcIiU7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogXFxcIlxcXCI7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyBcIiwgXCJzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgXCJdLCBbXCJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBcIiwgXCI7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgICB0cmFuc2l0aW9uOiAycztcXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgICB0b3A6IFwiLCBcIiU7XFxuICAgICAgbGVmdDogXCIsIFwiJTtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBcXFwiXFxcIjtcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIFwiLCBcInMgaW5maW5pdGUgbGluZWFyO1xcbiAgICBcIl0pKSwgXCJcIiArIHZhbHVlICogKDEgLSBpIC8gMTApICsgdW5pdCwgXCJcIiArIHZhbHVlICogKDEgLSBpIC8gMTApICsgdW5pdCwgY29sb3IsIGkgKiAwLjcgKiAyLjUsIGkgKiAwLjM1ICogMi41LCBjaXJjbGUsIDEgLyBzcGVlZE11bHRpcGxpZXIsIChpICogMC4yKSAvIHNwZWVkTXVsdGlwbGllcik7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLndyYXBwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2l6ZSA9IF90aGlzLnByb3BzLnNpemU7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfMyB8fCAodGVtcGxhdGVPYmplY3RfMyA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICBcIl0sIFtcIlxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICBcIl0pKSwgaGVscGVyc18xLmNzc1ZhbHVlKHNpemUpLCBoZWxwZXJzXzEuY3NzVmFsdWUoc2l6ZSkpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIExvYWRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBsb2FkaW5nID0gX2EubG9hZGluZywgY3NzID0gX2EuY3NzO1xuICAgICAgICByZXR1cm4gbG9hZGluZyA/IChyZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IFt0aGlzLndyYXBwZXIoKSwgY3NzXSB9LFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDApIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDEpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDIpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDMpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDQpIH0pKSkgOiBudWxsO1xuICAgIH07XG4gICAgTG9hZGVyLmRlZmF1bHRQcm9wcyA9IGhlbHBlcnNfMS5zaXplRGVmYXVsdHMoNTApO1xuICAgIHJldHVybiBMb2FkZXI7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IExvYWRlcjtcbnZhciB0ZW1wbGF0ZU9iamVjdF8xLCB0ZW1wbGF0ZU9iamVjdF8yLCB0ZW1wbGF0ZU9iamVjdF8zO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19tYWtlVGVtcGxhdGVPYmplY3QgPSAodGhpcyAmJiB0aGlzLl9fbWFrZVRlbXBsYXRlT2JqZWN0KSB8fCBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICAgIHJldHVybiBjb29rZWQ7XG59O1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqIEBqc3gganN4ICovXG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciByZWFjdF8xID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0XCIpO1xudmFyIGhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIik7XG52YXIgY2xpbWJpbmdCb3ggPSByZWFjdF8xLmtleWZyYW1lcyh0ZW1wbGF0ZU9iamVjdF8xIHx8ICh0ZW1wbGF0ZU9iamVjdF8xID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAwJSB7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAtMWVtKSByb3RhdGUoLTQ1ZGVnKX1cXG4gIDUlIHt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIC0xZW0pIHJvdGF0ZSgtNTBkZWcpfVxcbiAgMjAlIHt0cmFuc2Zvcm06dHJhbnNsYXRlKDFlbSwgLTJlbSkgcm90YXRlKDQ3ZGVnKX1cXG4gIDI1JSB7dHJhbnNmb3JtOnRyYW5zbGF0ZSgxZW0sIC0yZW0pIHJvdGF0ZSg0NWRlZyl9XFxuICAzMCUge3RyYW5zZm9ybTp0cmFuc2xhdGUoMWVtLCAtMmVtKSByb3RhdGUoNDBkZWcpfVxcbiAgNDUlIHt0cmFuc2Zvcm06dHJhbnNsYXRlKDJlbSwgLTNlbSkgcm90YXRlKDEzN2RlZyl9XFxuICA1MCUge3RyYW5zZm9ybTp0cmFuc2xhdGUoMmVtLCAtM2VtKSByb3RhdGUoMTM1ZGVnKX1cXG4gIDU1JSB7dHJhbnNmb3JtOnRyYW5zbGF0ZSgyZW0sIC0zZW0pIHJvdGF0ZSgxMzBkZWcpfVxcbiAgNzAlIHt0cmFuc2Zvcm06dHJhbnNsYXRlKDNlbSwgLTRlbSkgcm90YXRlKDIxN2RlZyl9XFxuICA3NSUge3RyYW5zZm9ybTp0cmFuc2xhdGUoM2VtLCAtNGVtKSByb3RhdGUoMjIwZGVnKX1cXG4gIDEwMCUge3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgLTFlbSkgcm90YXRlKC0yMjVkZWcpfVxcblwiXSwgW1wiXFxuICAwJSB7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAtMWVtKSByb3RhdGUoLTQ1ZGVnKX1cXG4gIDUlIHt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIC0xZW0pIHJvdGF0ZSgtNTBkZWcpfVxcbiAgMjAlIHt0cmFuc2Zvcm06dHJhbnNsYXRlKDFlbSwgLTJlbSkgcm90YXRlKDQ3ZGVnKX1cXG4gIDI1JSB7dHJhbnNmb3JtOnRyYW5zbGF0ZSgxZW0sIC0yZW0pIHJvdGF0ZSg0NWRlZyl9XFxuICAzMCUge3RyYW5zZm9ybTp0cmFuc2xhdGUoMWVtLCAtMmVtKSByb3RhdGUoNDBkZWcpfVxcbiAgNDUlIHt0cmFuc2Zvcm06dHJhbnNsYXRlKDJlbSwgLTNlbSkgcm90YXRlKDEzN2RlZyl9XFxuICA1MCUge3RyYW5zZm9ybTp0cmFuc2xhdGUoMmVtLCAtM2VtKSByb3RhdGUoMTM1ZGVnKX1cXG4gIDU1JSB7dHJhbnNmb3JtOnRyYW5zbGF0ZSgyZW0sIC0zZW0pIHJvdGF0ZSgxMzBkZWcpfVxcbiAgNzAlIHt0cmFuc2Zvcm06dHJhbnNsYXRlKDNlbSwgLTRlbSkgcm90YXRlKDIxN2RlZyl9XFxuICA3NSUge3RyYW5zZm9ybTp0cmFuc2xhdGUoM2VtLCAtNGVtKSByb3RhdGUoMjIwZGVnKX1cXG4gIDEwMCUge3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgLTFlbSkgcm90YXRlKC0yMjVkZWcpfVxcblwiXSkpKTtcbnZhciBMb2FkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExvYWRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMb2FkZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLCBjb2xvciA9IF9hLmNvbG9yLCBzcGVlZE11bHRpcGxpZXIgPSBfYS5zcGVlZE11bHRpcGxpZXI7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfMiB8fCAodGVtcGxhdGVPYmplY3RfMiA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIGJvdHRvbTogLTAuMWVtO1xcbiAgICAgIGhlaWdodDogMWVtO1xcbiAgICAgIHdpZHRoOiAxZW07XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTUlO1xcbiAgICAgIGJvcmRlcjogMC4yNWVtIHNvbGlkIFwiLCBcIjtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMWVtKSByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiIFwiLCBcInMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNzksIDAsIDAuNDcsIDAuOTcpO1xcbiAgICBcIl0sIFtcIlxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIGJvdHRvbTogLTAuMWVtO1xcbiAgICAgIGhlaWdodDogMWVtO1xcbiAgICAgIHdpZHRoOiAxZW07XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTUlO1xcbiAgICAgIGJvcmRlcjogMC4yNWVtIHNvbGlkIFwiLCBcIjtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMWVtKSByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiIFwiLCBcInMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNzksIDAsIDAuNDcsIDAuOTcpO1xcbiAgICBcIl0pKSwgY29sb3IsIGNsaW1iaW5nQm94LCAyLjUgLyBzcGVlZE11bHRpcGxpZXIpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy53cmFwcGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNpemUgPSBfdGhpcy5wcm9wcy5zaXplO1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzMgfHwgKHRlbXBsYXRlT2JqZWN0XzMgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiA1MCU7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICAgIG1hcmdpbi10b3A6IC0yLjdlbTtcXG4gICAgICBtYXJnaW4tbGVmdDogLTIuN2VtO1xcbiAgICAgIHdpZHRoOiA1LjRlbTtcXG4gICAgICBoZWlnaHQ6IDUuNGVtO1xcbiAgICAgIGZvbnQtc2l6ZTogXCIsIFwiO1xcbiAgICBcIl0sIFtcIlxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDUwJTtcXG4gICAgICBsZWZ0OiA1MCU7XFxuICAgICAgbWFyZ2luLXRvcDogLTIuN2VtO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMi43ZW07XFxuICAgICAgd2lkdGg6IDUuNGVtO1xcbiAgICAgIGhlaWdodDogNS40ZW07XFxuICAgICAgZm9udC1zaXplOiBcIiwgXCI7XFxuICAgIFwiXSkpLCBoZWxwZXJzXzEuY3NzVmFsdWUoc2l6ZSkpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5oaWxsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvbG9yID0gX3RoaXMucHJvcHMuY29sb3I7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfNCB8fCAodGVtcGxhdGVPYmplY3RfNCA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB3aWR0aDogNy4xZW07XFxuICAgICAgaGVpZ2h0OiA3LjFlbTtcXG4gICAgICB0b3A6IDEuN2VtO1xcbiAgICAgIGxlZnQ6IDEuN2VtO1xcbiAgICAgIGJvcmRlci1sZWZ0OiAwLjI1ZW0gc29saWQgXCIsIFwiO1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgXCJdLCBbXCJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgd2lkdGg6IDcuMWVtO1xcbiAgICAgIGhlaWdodDogNy4xZW07XFxuICAgICAgdG9wOiAxLjdlbTtcXG4gICAgICBsZWZ0OiAxLjdlbTtcXG4gICAgICBib3JkZXItbGVmdDogMC4yNWVtIHNvbGlkIFwiLCBcIjtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgIFwiXSkpLCBjb2xvcik7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmNvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmNzcyh0ZW1wbGF0ZU9iamVjdF81IHx8ICh0ZW1wbGF0ZU9iamVjdF81ID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHdpZHRoOiA3LjFlbTtcXG4gICAgICBoZWlnaHQ6IDcuMWVtO1xcbiAgICBcIl0sIFtcIlxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB3aWR0aDogNy4xZW07XFxuICAgICAgaGVpZ2h0OiA3LjFlbTtcXG4gICAgXCJdKSkpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIExvYWRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBsb2FkaW5nID0gX2EubG9hZGluZywgY3NzID0gX2EuY3NzO1xuICAgICAgICByZXR1cm4gbG9hZGluZyA/IChyZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IFt0aGlzLmNvbnRhaW5lcigpLCBjc3NdIH0sXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMud3JhcHBlcigpIH0sXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKCkgfSksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLmhpbGwoKSB9KSkpKSA6IG51bGw7XG4gICAgfTtcbiAgICBMb2FkZXIuZGVmYXVsdFByb3BzID0gaGVscGVyc18xLnNpemVEZWZhdWx0cygxNSk7XG4gICAgcmV0dXJuIExvYWRlcjtcbn0oUmVhY3QuUHVyZUNvbXBvbmVudCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gTG9hZGVyO1xudmFyIHRlbXBsYXRlT2JqZWN0XzEsIHRlbXBsYXRlT2JqZWN0XzIsIHRlbXBsYXRlT2JqZWN0XzMsIHRlbXBsYXRlT2JqZWN0XzQsIHRlbXBsYXRlT2JqZWN0XzU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX21ha2VUZW1wbGF0ZU9iamVjdCA9ICh0aGlzICYmIHRoaXMuX19tYWtlVGVtcGxhdGVPYmplY3QpIHx8IGZ1bmN0aW9uIChjb29rZWQsIHJhdykge1xuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gICAgcmV0dXJuIGNvb2tlZDtcbn07XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKiogQGpzeCBqc3ggKi9cbnZhciBSZWFjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3RcIik7XG52YXIgaGVscGVyc18xID0gcmVxdWlyZShcIi4vaGVscGVyc1wiKTtcbnZhciBjbGlwID0gcmVhY3RfMS5rZXlmcmFtZXModGVtcGxhdGVPYmplY3RfMSB8fCAodGVtcGxhdGVPYmplY3RfMSA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgMCUge3RyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDEpfVxcbiAgNTAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpIHNjYWxlKDAuOCl9XFxuICAxMDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEpfVxcblwiXSwgW1wiXFxuICAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMSl9XFxuICA1MCUge3RyYW5zZm9ybTogcm90YXRlKDE4MGRlZykgc2NhbGUoMC44KX1cXG4gIDEwMCUge3RyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMSl9XFxuXCJdKSkpO1xudmFyIExvYWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTG9hZGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExvYWRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsIHNpemUgPSBfYS5zaXplLCBjb2xvciA9IF9hLmNvbG9yLCBzcGVlZE11bHRpcGxpZXIgPSBfYS5zcGVlZE11bHRpcGxpZXI7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfMiB8fCAodGVtcGxhdGVPYmplY3RfMiA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcbiAgICAgIGJvcmRlci1jb2xvcjogXCIsIFwiO1xcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIDBzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICBcIl0sIFtcIlxcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcbiAgICAgIGJvcmRlci1jb2xvcjogXCIsIFwiO1xcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIDBzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICBcIl0pKSwgaGVscGVyc18xLmNzc1ZhbHVlKHNpemUpLCBoZWxwZXJzXzEuY3NzVmFsdWUoc2l6ZSksIGNvbG9yLCBjbGlwLCAwLjc1IC8gc3BlZWRNdWx0aXBsaWVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBMb2FkZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgbG9hZGluZyA9IF9hLmxvYWRpbmcsIGNzcyA9IF9hLmNzcztcbiAgICAgICAgcmV0dXJuIGxvYWRpbmcgPyByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IFt0aGlzLnN0eWxlKCksIGNzc10gfSkgOiBudWxsO1xuICAgIH07XG4gICAgTG9hZGVyLmRlZmF1bHRQcm9wcyA9IGhlbHBlcnNfMS5zaXplRGVmYXVsdHMoMzUpO1xuICAgIHJldHVybiBMb2FkZXI7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IExvYWRlcjtcbnZhciB0ZW1wbGF0ZU9iamVjdF8xLCB0ZW1wbGF0ZU9iamVjdF8yO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19tYWtlVGVtcGxhdGVPYmplY3QgPSAodGhpcyAmJiB0aGlzLl9fbWFrZVRlbXBsYXRlT2JqZWN0KSB8fCBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICAgIHJldHVybiBjb29rZWQ7XG59O1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqIEBqc3gganN4ICovXG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciByZWFjdF8xID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0XCIpO1xudmFyIGhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIik7XG52YXIgcm90YXRlID0gcmVhY3RfMS5rZXlmcmFtZXModGVtcGxhdGVPYmplY3RfMSB8fCAodGVtcGxhdGVPYmplY3RfMSA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgfVxcblwiXSwgW1wiXFxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSB9XFxuXCJdKSkpO1xudmFyIExvYWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTG9hZGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExvYWRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLndyYXBwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcywgc2l6ZSA9IF9hLnNpemUsIGNvbG9yID0gX2EuY29sb3IsIHNwZWVkTXVsdGlwbGllciA9IF9hLnNwZWVkTXVsdGlwbGllcjtcbiAgICAgICAgICAgIHZhciBfYiA9IGhlbHBlcnNfMS5wYXJzZUxlbmd0aEFuZFVuaXQoc2l6ZSksIHZhbHVlID0gX2IudmFsdWUsIHVuaXQgPSBfYi51bml0O1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzIgfHwgKHRlbXBsYXRlT2JqZWN0XzIgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDBweCAycHggXCIsIFwiO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXG4gICAgICAmOmFmdGVyLFxcbiAgICAgICY6YmVmb3JlIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogXCIsIFwiO1xcbiAgICAgIH1cXG5cXG4gICAgICAmOmFmdGVyIHtcXG4gICAgICAgIHdpZHRoOiBcIiwgXCJweDtcXG4gICAgICAgIGhlaWdodDogMnB4O1xcbiAgICAgICAgdG9wOiBcIiwgXCJweDtcXG4gICAgICAgIGxlZnQ6IFwiLCBcInB4O1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMXB4IDFweDtcXG4gICAgICAgIGFuaW1hdGlvbjogXCIsIFwiIFwiLCBcInMgbGluZWFyIGluZmluaXRlO1xcbiAgICAgIH1cXG5cXG4gICAgICAmOmJlZm9yZSB7XFxuICAgICAgICB3aWR0aDogXCIsIFwicHg7XFxuICAgICAgICBoZWlnaHQ6IDJweDtcXG4gICAgICAgIHRvcDogXCIsIFwicHg7XFxuICAgICAgICBsZWZ0OiBcIiwgXCJweDtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDFweCAxcHg7XFxuICAgICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIGxpbmVhciBpbmZpbml0ZTtcXG4gICAgICB9XFxuICAgIFwiXSwgW1wiXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggMnB4IFwiLCBcIjtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuXFxuICAgICAgJjphZnRlcixcXG4gICAgICAmOmJlZm9yZSB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IFwiLCBcIjtcXG4gICAgICB9XFxuXFxuICAgICAgJjphZnRlciB7XFxuICAgICAgICB3aWR0aDogXCIsIFwicHg7XFxuICAgICAgICBoZWlnaHQ6IDJweDtcXG4gICAgICAgIHRvcDogXCIsIFwicHg7XFxuICAgICAgICBsZWZ0OiBcIiwgXCJweDtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDFweCAxcHg7XFxuICAgICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIGxpbmVhciBpbmZpbml0ZTtcXG4gICAgICB9XFxuXFxuICAgICAgJjpiZWZvcmUge1xcbiAgICAgICAgd2lkdGg6IFwiLCBcInB4O1xcbiAgICAgICAgaGVpZ2h0OiAycHg7XFxuICAgICAgICB0b3A6IFwiLCBcInB4O1xcbiAgICAgICAgbGVmdDogXCIsIFwicHg7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxcHggMXB4O1xcbiAgICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyBsaW5lYXIgaW5maW5pdGU7XFxuICAgICAgfVxcbiAgICBcIl0pKSwgXCJcIiArIHZhbHVlICsgdW5pdCwgXCJcIiArIHZhbHVlICsgdW5pdCwgY29sb3IsIGNvbG9yLCB2YWx1ZSAvIDIuNCwgdmFsdWUgLyAyIC0gMSwgdmFsdWUgLyAyIC0gMSwgcm90YXRlLCAyIC8gc3BlZWRNdWx0aXBsaWVyLCB2YWx1ZSAvIDMsIHZhbHVlIC8gMiAtIDEsIHZhbHVlIC8gMiAtIDEsIHJvdGF0ZSwgOCAvIHNwZWVkTXVsdGlwbGllcik7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTG9hZGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIGxvYWRpbmcgPSBfYS5sb2FkaW5nLCBjc3MgPSBfYS5jc3M7XG4gICAgICAgIHJldHVybiBsb2FkaW5nID8gcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiBbdGhpcy53cmFwcGVyKCksIGNzc10gfSkgOiBudWxsO1xuICAgIH07XG4gICAgTG9hZGVyLmRlZmF1bHRQcm9wcyA9IGhlbHBlcnNfMS5zaXplRGVmYXVsdHMoNTApO1xuICAgIHJldHVybiBMb2FkZXI7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IExvYWRlcjtcbnZhciB0ZW1wbGF0ZU9iamVjdF8xLCB0ZW1wbGF0ZU9iamVjdF8yO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19tYWtlVGVtcGxhdGVPYmplY3QgPSAodGhpcyAmJiB0aGlzLl9fbWFrZVRlbXBsYXRlT2JqZWN0KSB8fCBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICAgIHJldHVybiBjb29rZWQ7XG59O1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqIEBqc3gganN4ICovXG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciByZWFjdF8xID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0XCIpO1xudmFyIGhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIik7XG52YXIgcm90YXRlID0gcmVhY3RfMS5rZXlmcmFtZXModGVtcGxhdGVPYmplY3RfMSB8fCAodGVtcGxhdGVPYmplY3RfMSA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgMTAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKX1cXG5cIl0sIFtcIlxcbiAgMTAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKX1cXG5cIl0pKSk7XG52YXIgYm91bmNlID0gcmVhY3RfMS5rZXlmcmFtZXModGVtcGxhdGVPYmplY3RfMiB8fCAodGVtcGxhdGVPYmplY3RfMiA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgMCUsIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMCl9XFxuICA1MCUge3RyYW5zZm9ybTogc2NhbGUoMS4wKX1cXG5cIl0sIFtcIlxcbiAgMCUsIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMCl9XFxuICA1MCUge3RyYW5zZm9ybTogc2NhbGUoMS4wKX1cXG5cIl0pKSk7XG52YXIgTG9hZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMb2FkZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTG9hZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3R5bGUgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsIHNpemUgPSBfYS5zaXplLCBjb2xvciA9IF9hLmNvbG9yLCBzcGVlZE11bHRpcGxpZXIgPSBfYS5zcGVlZE11bHRpcGxpZXI7XG4gICAgICAgICAgICB2YXIgX2IgPSBoZWxwZXJzXzEucGFyc2VMZW5ndGhBbmRVbml0KHNpemUpLCB2YWx1ZSA9IF9iLnZhbHVlLCB1bml0ID0gX2IudW5pdDtcbiAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmNzcyh0ZW1wbGF0ZU9iamVjdF8zIHx8ICh0ZW1wbGF0ZU9iamVjdF8zID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogXCIsIFwiO1xcbiAgICAgIGJvdHRvbTogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogXCIsIFwiO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyBcIiwgXCIgaW5maW5pdGUgbGluZWFyO1xcbiAgICBcIl0sIFtcIlxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IFwiLCBcIjtcXG4gICAgICBib3R0b206IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IFwiLCBcIjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiIFwiLCBcInMgXCIsIFwiIGluZmluaXRlIGxpbmVhcjtcXG4gICAgXCJdKSksIGkgJSAyID8gXCIwXCIgOiBcImF1dG9cIiwgaSAlIDIgPyBcImF1dG9cIiA6IFwiMFwiLCBcIlwiICsgdmFsdWUgLyAyICsgdW5pdCwgXCJcIiArIHZhbHVlIC8gMiArIHVuaXQsIGNvbG9yLCBib3VuY2UsIDIgLyBzcGVlZE11bHRpcGxpZXIsIGkgPT09IDIgPyBcIi0xc1wiIDogXCIwc1wiKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMud3JhcHBlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLCBzaXplID0gX2Euc2l6ZSwgc3BlZWRNdWx0aXBsaWVyID0gX2Euc3BlZWRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzQgfHwgKHRlbXBsYXRlT2JqZWN0XzQgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIDBzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgXCJdLCBbXCJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIDBzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgXCJdKSksIGhlbHBlcnNfMS5jc3NWYWx1ZShzaXplKSwgaGVscGVyc18xLmNzc1ZhbHVlKHNpemUpLCByb3RhdGUsIDIgLyBzcGVlZE11bHRpcGxpZXIpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIExvYWRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBsb2FkaW5nID0gX2EubG9hZGluZywgY3NzID0gX2EuY3NzO1xuICAgICAgICByZXR1cm4gbG9hZGluZyA/IChyZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IFt0aGlzLndyYXBwZXIoKSwgY3NzXSB9LFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDEpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDIpIH0pKSkgOiBudWxsO1xuICAgIH07XG4gICAgTG9hZGVyLmRlZmF1bHRQcm9wcyA9IGhlbHBlcnNfMS5zaXplRGVmYXVsdHMoNjApO1xuICAgIHJldHVybiBMb2FkZXI7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IExvYWRlcjtcbnZhciB0ZW1wbGF0ZU9iamVjdF8xLCB0ZW1wbGF0ZU9iamVjdF8yLCB0ZW1wbGF0ZU9iamVjdF8zLCB0ZW1wbGF0ZU9iamVjdF80O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19tYWtlVGVtcGxhdGVPYmplY3QgPSAodGhpcyAmJiB0aGlzLl9fbWFrZVRlbXBsYXRlT2JqZWN0KSB8fCBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICAgIHJldHVybiBjb29rZWQ7XG59O1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqIEBqc3gganN4ICovXG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciByZWFjdF8xID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0XCIpO1xudmFyIGhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIik7XG52YXIgZmFkZSA9IHJlYWN0XzEua2V5ZnJhbWVzKHRlbXBsYXRlT2JqZWN0XzEgfHwgKHRlbXBsYXRlT2JqZWN0XzEgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gIDUwJSB7b3BhY2l0eTogMC4zfVxcbiAgMTAwJSB7b3BhY2l0eTogMX1cXG5cIl0sIFtcIlxcbiAgNTAlIHtvcGFjaXR5OiAwLjN9XFxuICAxMDAlIHtvcGFjaXR5OiAxfVxcblwiXSkpKTtcbnZhciBMb2FkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExvYWRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMb2FkZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5yYWRpdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbWFyZ2luID0gX3RoaXMucHJvcHMubWFyZ2luO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gaGVscGVyc18xLnBhcnNlTGVuZ3RoQW5kVW5pdChtYXJnaW4pLnZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlICsgMTg7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnF1YXJ0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMucmFkaXVzKCkgLyAyICsgX3RoaXMucmFkaXVzKCkgLyA1LjU7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnN0eWxlID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLCBoZWlnaHQgPSBfYS5oZWlnaHQsIHdpZHRoID0gX2Eud2lkdGgsIG1hcmdpbiA9IF9hLm1hcmdpbiwgY29sb3IgPSBfYS5jb2xvciwgcmFkaXVzID0gX2EucmFkaXVzLCBzcGVlZE11bHRpcGxpZXIgPSBfYS5zcGVlZE11bHRpcGxpZXI7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfMiB8fCAodGVtcGxhdGVPYmplY3RfMiA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIG1hcmdpbjogXCIsIFwiO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IFwiLCBcIjtcXG4gICAgICBib3JkZXItcmFkaXVzOiBcIiwgXCI7XFxuICAgICAgdHJhbnNpdGlvbjogMnM7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogXFxcImJvdGhcXFwiO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiIFwiLCBcInMgXCIsIFwicyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXG4gICAgXCJdLCBbXCJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBtYXJnaW46IFwiLCBcIjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiwgXCI7XFxuICAgICAgYm9yZGVyLXJhZGl1czogXCIsIFwiO1xcbiAgICAgIHRyYW5zaXRpb246IDJzO1xcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IFxcXCJib3RoXFxcIjtcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIFwiLCBcInMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxuICAgIFwiXSkpLCBoZWxwZXJzXzEuY3NzVmFsdWUod2lkdGgpLCBoZWxwZXJzXzEuY3NzVmFsdWUoaGVpZ2h0KSwgaGVscGVyc18xLmNzc1ZhbHVlKG1hcmdpbiksIGNvbG9yLCBoZWxwZXJzXzEuY3NzVmFsdWUocmFkaXVzKSwgZmFkZSwgMS4yIC8gc3BlZWRNdWx0aXBsaWVyLCBpICogMC4xMik7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLndyYXBwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfMyB8fCAodGVtcGxhdGVPYmplY3RfMyA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBmb250LXNpemU6IDA7XFxuICAgICAgdG9wOiBcIiwgXCJweDtcXG4gICAgICBsZWZ0OiBcIiwgXCJweDtcXG4gICAgICB3aWR0aDogXCIsIFwicHg7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCJweDtcXG4gICAgXCJdLCBbXCJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgZm9udC1zaXplOiAwO1xcbiAgICAgIHRvcDogXCIsIFwicHg7XFxuICAgICAgbGVmdDogXCIsIFwicHg7XFxuICAgICAgd2lkdGg6IFwiLCBcInB4O1xcbiAgICAgIGhlaWdodDogXCIsIFwicHg7XFxuICAgIFwiXSkpLCBfdGhpcy5yYWRpdXMoKSwgX3RoaXMucmFkaXVzKCksIF90aGlzLnJhZGl1cygpICogMywgX3RoaXMucmFkaXVzKCkgKiAzKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuYSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzQgfHwgKHRlbXBsYXRlT2JqZWN0XzQgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgXCIsIFwiO1xcbiAgICB0b3A6IFwiLCBcInB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgXCJdLCBbXCJcXG4gICAgXCIsIFwiO1xcbiAgICB0b3A6IFwiLCBcInB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgXCJdKSksIF90aGlzLnN0eWxlKDEpLCBfdGhpcy5yYWRpdXMoKSk7IH07XG4gICAgICAgIF90aGlzLmIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdF8xLmNzcyh0ZW1wbGF0ZU9iamVjdF81IHx8ICh0ZW1wbGF0ZU9iamVjdF81ID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgIFwiLCBcIjtcXG4gICAgdG9wOiBcIiwgXCJweDtcXG4gICAgbGVmdDogXCIsIFwicHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICBcIl0sIFtcIlxcbiAgICBcIiwgXCI7XFxuICAgIHRvcDogXCIsIFwicHg7XFxuICAgIGxlZnQ6IFwiLCBcInB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgXCJdKSksIF90aGlzLnN0eWxlKDIpLCBfdGhpcy5xdWFydGVyKCksIF90aGlzLnF1YXJ0ZXIoKSk7IH07XG4gICAgICAgIF90aGlzLmMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdF8xLmNzcyh0ZW1wbGF0ZU9iamVjdF82IHx8ICh0ZW1wbGF0ZU9iamVjdF82ID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgIFwiLCBcIjtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiBcIiwgXCJweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgXCJdLCBbXCJcXG4gICAgXCIsIFwiO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IFwiLCBcInB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICBcIl0pKSwgX3RoaXMuc3R5bGUoMyksIF90aGlzLnJhZGl1cygpKTsgfTtcbiAgICAgICAgX3RoaXMuZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzcgfHwgKHRlbXBsYXRlT2JqZWN0XzcgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgXCIsIFwiO1xcbiAgICB0b3A6IFwiLCBcInB4O1xcbiAgICBsZWZ0OiBcIiwgXCJweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgXCJdLCBbXCJcXG4gICAgXCIsIFwiO1xcbiAgICB0b3A6IFwiLCBcInB4O1xcbiAgICBsZWZ0OiBcIiwgXCJweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgXCJdKSksIF90aGlzLnN0eWxlKDQpLCAtX3RoaXMucXVhcnRlcigpLCBfdGhpcy5xdWFydGVyKCkpOyB9O1xuICAgICAgICBfdGhpcy5lID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfOCB8fCAodGVtcGxhdGVPYmplY3RfOCA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICBcIiwgXCI7XFxuICAgIHRvcDogXCIsIFwicHg7XFxuICAgIGxlZnQ6IDA7XFxuICBcIl0sIFtcIlxcbiAgICBcIiwgXCI7XFxuICAgIHRvcDogXCIsIFwicHg7XFxuICAgIGxlZnQ6IDA7XFxuICBcIl0pKSwgX3RoaXMuc3R5bGUoNSksIC1fdGhpcy5yYWRpdXMoKSk7IH07XG4gICAgICAgIF90aGlzLmYgPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdF8xLmNzcyh0ZW1wbGF0ZU9iamVjdF85IHx8ICh0ZW1wbGF0ZU9iamVjdF85ID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgIFwiLCBcIjtcXG4gICAgdG9wOiBcIiwgXCJweDtcXG4gICAgbGVmdDogXCIsIFwicHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICBcIl0sIFtcIlxcbiAgICBcIiwgXCI7XFxuICAgIHRvcDogXCIsIFwicHg7XFxuICAgIGxlZnQ6IFwiLCBcInB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgXCJdKSksIF90aGlzLnN0eWxlKDYpLCAtX3RoaXMucXVhcnRlcigpLCAtX3RoaXMucXVhcnRlcigpKTsgfTtcbiAgICAgICAgX3RoaXMuZyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzEwIHx8ICh0ZW1wbGF0ZU9iamVjdF8xMCA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICBcIiwgXCI7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogXCIsIFwicHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIFwiXSwgW1wiXFxuICAgIFwiLCBcIjtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiBcIiwgXCJweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgXCJdKSksIF90aGlzLnN0eWxlKDcpLCAtX3RoaXMucmFkaXVzKCkpOyB9O1xuICAgICAgICBfdGhpcy5oID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfMTEgfHwgKHRlbXBsYXRlT2JqZWN0XzExID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgIFwiLCBcIjtcXG4gICAgdG9wOiBcIiwgXCJweDtcXG4gICAgbGVmdDogXCIsIFwicHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIFwiXSwgW1wiXFxuICAgIFwiLCBcIjtcXG4gICAgdG9wOiBcIiwgXCJweDtcXG4gICAgbGVmdDogXCIsIFwicHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIFwiXSkpLCBfdGhpcy5zdHlsZSg4KSwgX3RoaXMucXVhcnRlcigpLCAtX3RoaXMucXVhcnRlcigpKTsgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBMb2FkZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgbG9hZGluZyA9IF9hLmxvYWRpbmcsIGNzcyA9IF9hLmNzcztcbiAgICAgICAgcmV0dXJuIGxvYWRpbmcgPyAocmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiBbdGhpcy53cmFwcGVyKCksIGNzc10gfSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5hKCkgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuYigpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLmMoKSB9KSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5kKCkgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuZSgpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLmYoKSB9KSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5nKCkgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuaCgpIH0pKSkgOiBudWxsO1xuICAgIH07XG4gICAgTG9hZGVyLmRlZmF1bHRQcm9wcyA9IGhlbHBlcnNfMS5oZWlnaHRXaWR0aFJhZGl1c0RlZmF1bHRzKDE1LCA1LCAyKTtcbiAgICByZXR1cm4gTG9hZGVyO1xufShSZWFjdC5QdXJlQ29tcG9uZW50KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBMb2FkZXI7XG52YXIgdGVtcGxhdGVPYmplY3RfMSwgdGVtcGxhdGVPYmplY3RfMiwgdGVtcGxhdGVPYmplY3RfMywgdGVtcGxhdGVPYmplY3RfNCwgdGVtcGxhdGVPYmplY3RfNSwgdGVtcGxhdGVPYmplY3RfNiwgdGVtcGxhdGVPYmplY3RfNywgdGVtcGxhdGVPYmplY3RfOCwgdGVtcGxhdGVPYmplY3RfOSwgdGVtcGxhdGVPYmplY3RfMTAsIHRlbXBsYXRlT2JqZWN0XzExO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19tYWtlVGVtcGxhdGVPYmplY3QgPSAodGhpcyAmJiB0aGlzLl9fbWFrZVRlbXBsYXRlT2JqZWN0KSB8fCBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICAgIHJldHVybiBjb29rZWQ7XG59O1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqIEBqc3gganN4ICovXG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciByZWFjdF8xID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0XCIpO1xudmFyIGhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIik7XG52YXIgZ3JpZCA9IHJlYWN0XzEua2V5ZnJhbWVzKHRlbXBsYXRlT2JqZWN0XzEgfHwgKHRlbXBsYXRlT2JqZWN0XzEgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gIDAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpfVxcbiAgNTAlIHt0cmFuc2Zvcm06IHNjYWxlKDAuNSk7IG9wYWNpdHk6IDAuN31cXG4gIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMSk7b3BhY2l0eTogMX1cXG5cIl0sIFtcIlxcbiAgMCUge3RyYW5zZm9ybTogc2NhbGUoMSl9XFxuICA1MCUge3RyYW5zZm9ybTogc2NhbGUoMC41KTsgb3BhY2l0eTogMC43fVxcbiAgMTAwJSB7dHJhbnNmb3JtOiBzY2FsZSgxKTtvcGFjaXR5OiAxfVxcblwiXSkpKTtcbnZhciByYW5kb20gPSBmdW5jdGlvbiAodG9wKSB7IHJldHVybiBNYXRoLnJhbmRvbSgpICogdG9wOyB9O1xudmFyIExvYWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTG9hZGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExvYWRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnN0eWxlID0gZnVuY3Rpb24gKHJhbmQpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLCBjb2xvciA9IF9hLmNvbG9yLCBzaXplID0gX2Euc2l6ZSwgbWFyZ2luID0gX2EubWFyZ2luLCBzcGVlZE11bHRpcGxpZXIgPSBfYS5zcGVlZE11bHRpcGxpZXI7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfMiB8fCAodGVtcGxhdGVPYmplY3RfMiA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiwgXCI7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBtYXJnaW46IFwiLCBcIjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IFxcXCJib3RoXFxcIjtcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIFwiLCBcInMgaW5maW5pdGUgZWFzZTtcXG4gICAgXCJdLCBbXCJcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogXCIsIFwiO1xcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgbWFyZ2luOiBcIiwgXCI7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBcXFwiYm90aFxcXCI7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyBcIiwgXCJzIGluZmluaXRlIGVhc2U7XFxuICAgIFwiXSkpLCBjb2xvciwgaGVscGVyc18xLmNzc1ZhbHVlKHNpemUpLCBoZWxwZXJzXzEuY3NzVmFsdWUoc2l6ZSksIGhlbHBlcnNfMS5jc3NWYWx1ZShtYXJnaW4pLCBncmlkLCAocmFuZCAvIDEwMCArIDAuNikgLyBzcGVlZE11bHRpcGxpZXIsIHJhbmQgLyAxMDAgLSAwLjIpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy53cmFwcGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsIHNpemUgPSBfYS5zaXplLCBtYXJnaW4gPSBfYS5tYXJnaW47XG4gICAgICAgICAgICB2YXIgc2l6ZVdpdGhVbml0ID0gaGVscGVyc18xLnBhcnNlTGVuZ3RoQW5kVW5pdChzaXplKTtcbiAgICAgICAgICAgIHZhciBtYXJnaW5XaXRoVW5pdCA9IGhlbHBlcnNfMS5wYXJzZUxlbmd0aEFuZFVuaXQobWFyZ2luKTtcbiAgICAgICAgICAgIHZhciB3aWR0aCA9IFwiXCIgKyAocGFyc2VGbG9hdChzaXplV2l0aFVuaXQudmFsdWUudG9TdHJpbmcoKSkgKiAzICsgcGFyc2VGbG9hdChtYXJnaW5XaXRoVW5pdC52YWx1ZS50b1N0cmluZygpKSAqIDYpICsgc2l6ZVdpdGhVbml0LnVuaXQ7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfMyB8fCAodGVtcGxhdGVPYmplY3RfMyA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgZm9udC1zaXplOiAwO1xcbiAgICBcIl0sIFtcIlxcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgZm9udC1zaXplOiAwO1xcbiAgICBcIl0pKSwgd2lkdGgpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIExvYWRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBsb2FkaW5nID0gX2EubG9hZGluZywgY3NzID0gX2EuY3NzO1xuICAgICAgICByZXR1cm4gbG9hZGluZyA/IChyZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IFt0aGlzLndyYXBwZXIoKSwgY3NzXSB9LFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKHJhbmRvbSgxMDApKSB9KSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5zdHlsZShyYW5kb20oMTAwKSkgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUocmFuZG9tKDEwMCkpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKHJhbmRvbSgxMDApKSB9KSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5zdHlsZShyYW5kb20oMTAwKSkgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUocmFuZG9tKDEwMCkpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKHJhbmRvbSgxMDApKSB9KSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5zdHlsZShyYW5kb20oMTAwKSkgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUocmFuZG9tKDEwMCkpIH0pKSkgOiBudWxsO1xuICAgIH07XG4gICAgTG9hZGVyLmRlZmF1bHRQcm9wcyA9IGhlbHBlcnNfMS5zaXplTWFyZ2luRGVmYXVsdHMoMTUpO1xuICAgIHJldHVybiBMb2FkZXI7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IExvYWRlcjtcbnZhciB0ZW1wbGF0ZU9iamVjdF8xLCB0ZW1wbGF0ZU9iamVjdF8yLCB0ZW1wbGF0ZU9iamVjdF8zO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fbWFrZVRlbXBsYXRlT2JqZWN0ID0gKHRoaXMgJiYgdGhpcy5fX21ha2VUZW1wbGF0ZU9iamVjdCkgfHwgZnVuY3Rpb24gKGNvb2tlZCwgcmF3KSB7XG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cbiAgICByZXR1cm4gY29va2VkO1xufTtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqIEBqc3gganN4ICovXG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciByZWFjdF8xID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0XCIpO1xudmFyIGluZGV4XzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzL2luZGV4XCIpO1xudmFyIExvYWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTG9hZGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExvYWRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnRoaWNrbmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzaXplID0gX3RoaXMucHJvcHMuc2l6ZTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGluZGV4XzEucGFyc2VMZW5ndGhBbmRVbml0KHNpemUpLnZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlIC8gNTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMubGF0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNpemUgPSBfdGhpcy5wcm9wcy5zaXplO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gaW5kZXhfMS5wYXJzZUxlbmd0aEFuZFVuaXQoc2l6ZSkudmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gKHZhbHVlIC0gX3RoaXMudGhpY2tuZXNzKCkpIC8gMjtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMub2Zmc2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMubGF0KCkgLSBfdGhpcy50aGlja25lc3MoKTsgfTtcbiAgICAgICAgX3RoaXMuY29sb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgY29sb3IgPSBfdGhpcy5wcm9wcy5jb2xvcjtcbiAgICAgICAgICAgIHJldHVybiBpbmRleF8xLmNhbGN1bGF0ZVJnYmEoY29sb3IsIDAuNzUpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5iZWZvcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2l6ZSA9IF90aGlzLnByb3BzLnNpemU7XG4gICAgICAgICAgICB2YXIgY29sb3IgPSBfdGhpcy5jb2xvcigpO1xuICAgICAgICAgICAgdmFyIGxhdCA9IF90aGlzLmxhdCgpO1xuICAgICAgICAgICAgdmFyIHRoaWNrbmVzcyA9IF90aGlzLnRoaWNrbmVzcygpO1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IF90aGlzLm9mZnNldCgpO1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEua2V5ZnJhbWVzKHRlbXBsYXRlT2JqZWN0XzEgfHwgKHRlbXBsYXRlT2JqZWN0XzEgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICAwJSB7d2lkdGg6IFwiLCBcInB4O2JveC1zaGFkb3c6IFwiLCBcInB4IFwiLCBcInB4IFwiLCBcIiwgXCIsIFwicHggXCIsIFwicHggXCIsIFwifVxcbiAgICAgIDM1JSB7d2lkdGg6IFwiLCBcIjtib3gtc2hhZG93OiAwIFwiLCBcInB4IFwiLCBcIiwgMCBcIiwgXCJweCBcIiwgXCJ9XFxuICAgICAgNzAlIHt3aWR0aDogXCIsIFwicHg7Ym94LXNoYWRvdzogXCIsIFwicHggXCIsIFwicHggXCIsIFwiLCBcIiwgXCJweCBcIiwgXCJweCBcIiwgXCJ9XFxuICAgICAgMTAwJSB7Ym94LXNoYWRvdzogXCIsIFwicHggXCIsIFwicHggXCIsIFwiLCBcIiwgXCJweCBcIiwgXCJweCBcIiwgXCJ9XFxuICAgIFwiXSwgW1wiXFxuICAgICAgMCUge3dpZHRoOiBcIiwgXCJweDtib3gtc2hhZG93OiBcIiwgXCJweCBcIiwgXCJweCBcIiwgXCIsIFwiLCBcInB4IFwiLCBcInB4IFwiLCBcIn1cXG4gICAgICAzNSUge3dpZHRoOiBcIiwgXCI7Ym94LXNoYWRvdzogMCBcIiwgXCJweCBcIiwgXCIsIDAgXCIsIFwicHggXCIsIFwifVxcbiAgICAgIDcwJSB7d2lkdGg6IFwiLCBcInB4O2JveC1zaGFkb3c6IFwiLCBcInB4IFwiLCBcInB4IFwiLCBcIiwgXCIsIFwicHggXCIsIFwicHggXCIsIFwifVxcbiAgICAgIDEwMCUge2JveC1zaGFkb3c6IFwiLCBcInB4IFwiLCBcInB4IFwiLCBcIiwgXCIsIFwicHggXCIsIFwicHggXCIsIFwifVxcbiAgICBcIl0pKSwgdGhpY2tuZXNzLCBsYXQsIC1vZmZzZXQsIGNvbG9yLCAtbGF0LCBvZmZzZXQsIGNvbG9yLCBpbmRleF8xLmNzc1ZhbHVlKHNpemUpLCAtb2Zmc2V0LCBjb2xvciwgb2Zmc2V0LCBjb2xvciwgdGhpY2tuZXNzLCAtbGF0LCAtb2Zmc2V0LCBjb2xvciwgbGF0LCBvZmZzZXQsIGNvbG9yLCBsYXQsIC1vZmZzZXQsIGNvbG9yLCAtbGF0LCBvZmZzZXQsIGNvbG9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuYWZ0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2l6ZSA9IF90aGlzLnByb3BzLnNpemU7XG4gICAgICAgICAgICB2YXIgY29sb3IgPSBfdGhpcy5jb2xvcigpO1xuICAgICAgICAgICAgdmFyIGxhdCA9IF90aGlzLmxhdCgpO1xuICAgICAgICAgICAgdmFyIHRoaWNrbmVzcyA9IF90aGlzLnRoaWNrbmVzcygpO1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IF90aGlzLm9mZnNldCgpO1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEua2V5ZnJhbWVzKHRlbXBsYXRlT2JqZWN0XzIgfHwgKHRlbXBsYXRlT2JqZWN0XzIgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICAwJSB7aGVpZ2h0OiBcIiwgXCJweDtib3gtc2hhZG93OiBcIiwgXCJweCBcIiwgXCJweCBcIiwgXCIsIFwiLCBcInB4IFwiLCBcInB4IFwiLCBcIn1cXG4gICAgICAzNSUge2hlaWdodDogXCIsIFwiO2JveC1zaGFkb3c6IFwiLCBcInB4IDAgXCIsIFwiLCBcIiwgXCJweCAwIFwiLCBcIn1cXG4gICAgICA3MCUge2hlaWdodDogXCIsIFwicHg7Ym94LXNoYWRvdzogXCIsIFwicHggXCIsIFwicHggXCIsIFwiLCBcIiwgXCJweCBcIiwgXCJweCBcIiwgXCJ9XFxuICAgICAgMTAwJSB7Ym94LXNoYWRvdzogXCIsIFwicHggXCIsIFwicHggXCIsIFwiLCBcIiwgXCJweCBcIiwgXCJweCBcIiwgXCJ9XFxuICAgIFwiXSwgW1wiXFxuICAgICAgMCUge2hlaWdodDogXCIsIFwicHg7Ym94LXNoYWRvdzogXCIsIFwicHggXCIsIFwicHggXCIsIFwiLCBcIiwgXCJweCBcIiwgXCJweCBcIiwgXCJ9XFxuICAgICAgMzUlIHtoZWlnaHQ6IFwiLCBcIjtib3gtc2hhZG93OiBcIiwgXCJweCAwIFwiLCBcIiwgXCIsIFwicHggMCBcIiwgXCJ9XFxuICAgICAgNzAlIHtoZWlnaHQ6IFwiLCBcInB4O2JveC1zaGFkb3c6IFwiLCBcInB4IFwiLCBcInB4IFwiLCBcIiwgXCIsIFwicHggXCIsIFwicHggXCIsIFwifVxcbiAgICAgIDEwMCUge2JveC1zaGFkb3c6IFwiLCBcInB4IFwiLCBcInB4IFwiLCBcIiwgXCIsIFwicHggXCIsIFwicHggXCIsIFwifVxcbiAgICBcIl0pKSwgdGhpY2tuZXNzLCBvZmZzZXQsIGxhdCwgY29sb3IsIC1vZmZzZXQsIC1sYXQsIGNvbG9yLCBpbmRleF8xLmNzc1ZhbHVlKHNpemUpLCBvZmZzZXQsIGNvbG9yLCAtb2Zmc2V0LCBjb2xvciwgdGhpY2tuZXNzLCBvZmZzZXQsIC1sYXQsIGNvbG9yLCAtb2Zmc2V0LCBsYXQsIGNvbG9yLCBvZmZzZXQsIGxhdCwgY29sb3IsIC1vZmZzZXQsIC1sYXQsIGNvbG9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuc3R5bGUgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsIHNpemUgPSBfYS5zaXplLCBzcGVlZE11bHRpcGxpZXIgPSBfYS5zcGVlZE11bHRpcGxpZXI7XG4gICAgICAgICAgICB2YXIgX2IgPSBpbmRleF8xLnBhcnNlTGVuZ3RoQW5kVW5pdChzaXplKSwgdmFsdWUgPSBfYi52YWx1ZSwgdW5pdCA9IF9iLnVuaXQ7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfMyB8fCAodGVtcGxhdGVPYmplY3RfMyA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICB0b3A6IDUwJTtcXG4gICAgICBsZWZ0OiA1MCU7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBib3JkZXItcmFkaXVzOiBcIiwgXCI7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogbm9uZTtcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIGluZmluaXRlO1xcbiAgICBcIl0sIFtcIlxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICB0b3A6IDUwJTtcXG4gICAgICBsZWZ0OiA1MCU7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBib3JkZXItcmFkaXVzOiBcIiwgXCI7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogbm9uZTtcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIGluZmluaXRlO1xcbiAgICBcIl0pKSwgXCJcIiArIHZhbHVlIC8gNSArIHVuaXQsIFwiXCIgKyB2YWx1ZSAvIDUgKyB1bml0LCBcIlwiICsgdmFsdWUgLyAxMCArIHVuaXQsIGkgPT09IDEgPyBfdGhpcy5iZWZvcmUoKSA6IF90aGlzLmFmdGVyKCksIDIgLyBzcGVlZE11bHRpcGxpZXIpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy53cmFwcGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNpemUgPSBfdGhpcy5wcm9wcy5zaXplO1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzQgfHwgKHRlbXBsYXRlT2JqZWN0XzQgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNjVkZWcpO1xcbiAgICBcIl0sIFtcIlxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE2NWRlZyk7XFxuICAgIFwiXSkpLCBpbmRleF8xLmNzc1ZhbHVlKHNpemUpLCBpbmRleF8xLmNzc1ZhbHVlKHNpemUpKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBMb2FkZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgbG9hZGluZyA9IF9hLmxvYWRpbmcsIGNzcyA9IF9hLmNzcztcbiAgICAgICAgcmV0dXJuIGxvYWRpbmcgPyAocmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiBbdGhpcy53cmFwcGVyKCksIGNzc10gfSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5zdHlsZSgxKSB9KSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5zdHlsZSgyKSB9KSkpIDogbnVsbDtcbiAgICB9O1xuICAgIExvYWRlci5kZWZhdWx0UHJvcHMgPSBpbmRleF8xLnNpemVEZWZhdWx0cyg1MCk7XG4gICAgcmV0dXJuIExvYWRlcjtcbn0oUmVhY3QuUHVyZUNvbXBvbmVudCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gTG9hZGVyO1xudmFyIHRlbXBsYXRlT2JqZWN0XzEsIHRlbXBsYXRlT2JqZWN0XzIsIHRlbXBsYXRlT2JqZWN0XzMsIHRlbXBsYXRlT2JqZWN0XzQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX21ha2VUZW1wbGF0ZU9iamVjdCA9ICh0aGlzICYmIHRoaXMuX19tYWtlVGVtcGxhdGVPYmplY3QpIHx8IGZ1bmN0aW9uIChjb29rZWQsIHJhdykge1xuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gICAgcmV0dXJuIGNvb2tlZDtcbn07XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKiogQGpzeCBqc3ggKi9cbnZhciBSZWFjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3RcIik7XG52YXIgaGVscGVyc18xID0gcmVxdWlyZShcIi4vaGVscGVyc1wiKTtcbnZhciBtb29uID0gcmVhY3RfMS5rZXlmcmFtZXModGVtcGxhdGVPYmplY3RfMSB8fCAodGVtcGxhdGVPYmplY3RfMSA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgMTAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKX1cXG5cIl0sIFtcIlxcbiAgMTAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKX1cXG5cIl0pKSk7XG52YXIgTG9hZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMb2FkZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTG9hZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMubW9vblNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2l6ZSA9IF90aGlzLnByb3BzLnNpemU7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBoZWxwZXJzXzEucGFyc2VMZW5ndGhBbmRVbml0KHNpemUpLnZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlIC8gNztcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuYmFsbFN0eWxlID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmNzcyh0ZW1wbGF0ZU9iamVjdF8yIHx8ICh0ZW1wbGF0ZU9iamVjdF8yID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBcIl0sIFtcIlxcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgXCJdKSksIGhlbHBlcnNfMS5jc3NWYWx1ZShzaXplKSwgaGVscGVyc18xLmNzc1ZhbHVlKHNpemUpKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMud3JhcHBlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLCBzaXplID0gX2Euc2l6ZSwgc3BlZWRNdWx0aXBsaWVyID0gX2Euc3BlZWRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgdmFyIF9iID0gaGVscGVyc18xLnBhcnNlTGVuZ3RoQW5kVW5pdChzaXplKSwgdmFsdWUgPSBfYi52YWx1ZSwgdW5pdCA9IF9iLnVuaXQ7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfMyB8fCAodGVtcGxhdGVPYmplY3RfMyA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiIFwiLCBcInMgMHMgaW5maW5pdGUgbGluZWFyO1xcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBcIl0sIFtcIlxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiIFwiLCBcInMgMHMgaW5maW5pdGUgbGluZWFyO1xcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBcIl0pKSwgXCJcIiArICh2YWx1ZSArIF90aGlzLm1vb25TaXplKCkgKiAyKSArIHVuaXQsIFwiXCIgKyAodmFsdWUgKyBfdGhpcy5tb29uU2l6ZSgpICogMikgKyB1bml0LCBtb29uLCAwLjYgLyBzcGVlZE11bHRpcGxpZXIpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5iYWxsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsIGNvbG9yID0gX2EuY29sb3IsIHNpemUgPSBfYS5zaXplLCBzcGVlZE11bHRpcGxpZXIgPSBfYS5zcGVlZE11bHRpcGxpZXI7XG4gICAgICAgICAgICB2YXIgX2IgPSBoZWxwZXJzXzEucGFyc2VMZW5ndGhBbmRVbml0KHNpemUpLCB2YWx1ZSA9IF9iLnZhbHVlLCB1bml0ID0gX2IudW5pdDtcbiAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmNzcyh0ZW1wbGF0ZU9iamVjdF80IHx8ICh0ZW1wbGF0ZU9iamVjdF80ID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgXCIsIFwiO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IFwiLCBcIjtcXG4gICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogXCIsIFwiO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiIFwiLCBcInMgMHMgaW5maW5pdGUgbGluZWFyO1xcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBcIl0sIFtcIlxcbiAgICAgIFwiLCBcIjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiwgXCI7XFxuICAgICAgb3BhY2l0eTogMC44O1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IFwiLCBcIjtcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIDBzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgXCJdKSksIF90aGlzLmJhbGxTdHlsZShfdGhpcy5tb29uU2l6ZSgpKSwgY29sb3IsIFwiXCIgKyAodmFsdWUgLyAyIC0gX3RoaXMubW9vblNpemUoKSAvIDIpICsgdW5pdCwgbW9vbiwgMC42IC8gc3BlZWRNdWx0aXBsaWVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuY2lyY2xlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsIHNpemUgPSBfYS5zaXplLCBjb2xvciA9IF9hLmNvbG9yO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gaGVscGVyc18xLnBhcnNlTGVuZ3RoQW5kVW5pdChzaXplKS52YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmNzcyh0ZW1wbGF0ZU9iamVjdF81IHx8ICh0ZW1wbGF0ZU9iamVjdF81ID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgXCIsIFwiO1xcbiAgICAgIGJvcmRlcjogXCIsIFwicHggc29saWQgXCIsIFwiO1xcbiAgICAgIG9wYWNpdHk6IDAuMTtcXG4gICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIFwiXSwgW1wiXFxuICAgICAgXCIsIFwiO1xcbiAgICAgIGJvcmRlcjogXCIsIFwicHggc29saWQgXCIsIFwiO1xcbiAgICAgIG9wYWNpdHk6IDAuMTtcXG4gICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIFwiXSkpLCBfdGhpcy5iYWxsU3R5bGUodmFsdWUpLCBfdGhpcy5tb29uU2l6ZSgpLCBjb2xvcik7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTG9hZGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIGxvYWRpbmcgPSBfYS5sb2FkaW5nLCBjc3MgPSBfYS5jc3M7XG4gICAgICAgIHJldHVybiBsb2FkaW5nID8gKHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogW3RoaXMud3JhcHBlcigpLCBjc3NdIH0sXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuYmFsbCgpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLmNpcmNsZSgpIH0pKSkgOiBudWxsO1xuICAgIH07XG4gICAgTG9hZGVyLmRlZmF1bHRQcm9wcyA9IGhlbHBlcnNfMS5zaXplRGVmYXVsdHMoNjApO1xuICAgIHJldHVybiBMb2FkZXI7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IExvYWRlcjtcbnZhciB0ZW1wbGF0ZU9iamVjdF8xLCB0ZW1wbGF0ZU9iamVjdF8yLCB0ZW1wbGF0ZU9iamVjdF8zLCB0ZW1wbGF0ZU9iamVjdF80LCB0ZW1wbGF0ZU9iamVjdF81O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19tYWtlVGVtcGxhdGVPYmplY3QgPSAodGhpcyAmJiB0aGlzLl9fbWFrZVRlbXBsYXRlT2JqZWN0KSB8fCBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICAgIHJldHVybiBjb29rZWQ7XG59O1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqIEBqc3gganN4ICovXG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciByZWFjdF8xID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0XCIpO1xudmFyIGhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIik7XG52YXIgcGFjbWFuID0gW1xuICAgIHJlYWN0XzEua2V5ZnJhbWVzKHRlbXBsYXRlT2JqZWN0XzEgfHwgKHRlbXBsYXRlT2JqZWN0XzEgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgMCUge3RyYW5zZm9ybTogcm90YXRlKDBkZWcpfVxcbiAgICA1MCUge3RyYW5zZm9ybTogcm90YXRlKC00NGRlZyl9XFxuICBcIl0sIFtcIlxcbiAgICAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMGRlZyl9XFxuICAgIDUwJSB7dHJhbnNmb3JtOiByb3RhdGUoLTQ0ZGVnKX1cXG4gIFwiXSkpKSxcbiAgICByZWFjdF8xLmtleWZyYW1lcyh0ZW1wbGF0ZU9iamVjdF8yIHx8ICh0ZW1wbGF0ZU9iamVjdF8yID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgIDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKX1cXG4gICAgNTAlIHt0cmFuc2Zvcm06IHJvdGF0ZSg0NGRlZyl9XFxuICBcIl0sIFtcIlxcbiAgICAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMGRlZyl9XFxuICAgIDUwJSB7dHJhbnNmb3JtOiByb3RhdGUoNDRkZWcpfVxcbiAgXCJdKSkpXG5dO1xudmFyIExvYWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTG9hZGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExvYWRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmJhbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2l6ZSA9IF90aGlzLnByb3BzLnNpemU7XG4gICAgICAgICAgICB2YXIgX2EgPSBoZWxwZXJzXzEucGFyc2VMZW5ndGhBbmRVbml0KHNpemUpLCB2YWx1ZSA9IF9hLnZhbHVlLCB1bml0ID0gX2EudW5pdDtcbiAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmtleWZyYW1lcyh0ZW1wbGF0ZU9iamVjdF8zIHx8ICh0ZW1wbGF0ZU9iamVjdF8zID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgNzUlIHtvcGFjaXR5OiAwLjd9XFxuICAgICAgMTAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGUoXCIsIFwiLCBcIiwgXCIpfVxcbiAgICBcIl0sIFtcIlxcbiAgICAgIDc1JSB7b3BhY2l0eTogMC43fVxcbiAgICAgIDEwMCUge3RyYW5zZm9ybTogdHJhbnNsYXRlKFwiLCBcIiwgXCIsIFwiKX1cXG4gICAgXCJdKSksIFwiXCIgKyAtNCAqIHZhbHVlICsgdW5pdCwgXCJcIiArIC12YWx1ZSAvIDQgKyB1bml0KTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuYmFsbFN0eWxlID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLCBjb2xvciA9IF9hLmNvbG9yLCBtYXJnaW4gPSBfYS5tYXJnaW4sIHNpemUgPSBfYS5zaXplLCBzcGVlZE11bHRpcGxpZXIgPSBfYS5zcGVlZE11bHRpcGxpZXI7XG4gICAgICAgICAgICB2YXIgX2IgPSBoZWxwZXJzXzEucGFyc2VMZW5ndGhBbmRVbml0KHNpemUpLCB2YWx1ZSA9IF9iLnZhbHVlLCB1bml0ID0gX2IudW5pdDtcbiAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmNzcyh0ZW1wbGF0ZU9iamVjdF80IHx8ICh0ZW1wbGF0ZU9iamVjdF80ID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiwgXCI7XFxuICAgICAgbWFyZ2luOiBcIiwgXCI7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCBcIiwgXCIpO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IFwiLCBcIjtcXG4gICAgICBsZWZ0OiBcIiwgXCI7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyBcIiwgXCJzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICBcIl0sIFtcIlxcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogXCIsIFwiO1xcbiAgICAgIG1hcmdpbjogXCIsIFwiO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgXCIsIFwiKTtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiBcIiwgXCI7XFxuICAgICAgbGVmdDogXCIsIFwiO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiIFwiLCBcInMgXCIsIFwicyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gICAgXCJdKSksIFwiXCIgKyB2YWx1ZSAvIDMgKyB1bml0LCBcIlwiICsgdmFsdWUgLyAzICsgdW5pdCwgY29sb3IsIGhlbHBlcnNfMS5jc3NWYWx1ZShtYXJnaW4pLCBcIlwiICsgLXZhbHVlIC8gNCArIHVuaXQsIFwiXCIgKyB2YWx1ZSArIHVuaXQsIFwiXCIgKyB2YWx1ZSAqIDQgKyB1bml0LCBfdGhpcy5iYWxsKCksIDEgLyBzcGVlZE11bHRpcGxpZXIsIGkgKiAwLjI1KTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuczEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gaGVscGVyc18xLmNzc1ZhbHVlKF90aGlzLnByb3BzLnNpemUpICsgXCIgc29saWQgdHJhbnNwYXJlbnRcIjtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuczIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgY29sb3IgPSBfdGhpcy5wcm9wcy5jb2xvcjtcbiAgICAgICAgICAgIHJldHVybiBoZWxwZXJzXzEuY3NzVmFsdWUoX3RoaXMucHJvcHMuc2l6ZSkgKyBcIiBzb2xpZCBcIiArIGNvbG9yO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5wYWNtYW5TdHlsZSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcywgc2l6ZSA9IF9hLnNpemUsIHNwZWVkTXVsdGlwbGllciA9IF9hLnNwZWVkTXVsdGlwbGllcjtcbiAgICAgICAgICAgIHZhciBzMSA9IF90aGlzLnMxKCk7XG4gICAgICAgICAgICB2YXIgczIgPSBfdGhpcy5zMigpO1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzUgfHwgKHRlbXBsYXRlT2JqZWN0XzUgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICB3aWR0aDogMDtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiBcIiwgXCI7XFxuICAgICAgYm9yZGVyLXRvcDogXCIsIFwiO1xcbiAgICAgIGJvcmRlci1sZWZ0OiBcIiwgXCI7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogXCIsIFwiO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IFwiLCBcIjtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICBcIl0sIFtcIlxcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICBib3JkZXItcmlnaHQ6IFwiLCBcIjtcXG4gICAgICBib3JkZXItdG9wOiBcIiwgXCI7XFxuICAgICAgYm9yZGVyLWxlZnQ6IFwiLCBcIjtcXG4gICAgICBib3JkZXItYm90dG9tOiBcIiwgXCI7XFxuICAgICAgYm9yZGVyLXJhZGl1czogXCIsIFwiO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAgIFwiXSkpLCBzMSwgaSA9PT0gMCA/IHMxIDogczIsIHMyLCBpID09PSAwID8gczIgOiBzMSwgaGVscGVyc18xLmNzc1ZhbHVlKHNpemUpLCBwYWNtYW5baV0sIDAuOCAvIHNwZWVkTXVsdGlwbGllcik7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLndyYXBwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfNiB8fCAodGVtcGxhdGVPYmplY3RfNiA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBmb250LXNpemU6IDA7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgXCJdLCBbXCJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgZm9udC1zaXplOiAwO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgIFwiXSkpLCBoZWxwZXJzXzEuY3NzVmFsdWUoX3RoaXMucHJvcHMuc2l6ZSksIGhlbHBlcnNfMS5jc3NWYWx1ZShfdGhpcy5wcm9wcy5zaXplKSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnBhYyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnBhY21hblN0eWxlKDApOyB9O1xuICAgICAgICBfdGhpcy5tYW4gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5wYWNtYW5TdHlsZSgxKTsgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBMb2FkZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgbG9hZGluZyA9IF9hLmxvYWRpbmcsIGNzcyA9IF9hLmNzcztcbiAgICAgICAgcmV0dXJuIGxvYWRpbmcgPyAocmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiBbdGhpcy53cmFwcGVyKCksIGNzc10gfSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5wYWMoKSB9KSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5tYW4oKSB9KSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5iYWxsU3R5bGUoMikgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuYmFsbFN0eWxlKDMpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLmJhbGxTdHlsZSg0KSB9KSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5iYWxsU3R5bGUoNSkgfSkpKSA6IG51bGw7XG4gICAgfTtcbiAgICBMb2FkZXIuZGVmYXVsdFByb3BzID0gaGVscGVyc18xLnNpemVNYXJnaW5EZWZhdWx0cygyNSk7XG4gICAgcmV0dXJuIExvYWRlcjtcbn0oUmVhY3QuUHVyZUNvbXBvbmVudCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gTG9hZGVyO1xudmFyIHRlbXBsYXRlT2JqZWN0XzEsIHRlbXBsYXRlT2JqZWN0XzIsIHRlbXBsYXRlT2JqZWN0XzMsIHRlbXBsYXRlT2JqZWN0XzQsIHRlbXBsYXRlT2JqZWN0XzUsIHRlbXBsYXRlT2JqZWN0XzY7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX21ha2VUZW1wbGF0ZU9iamVjdCA9ICh0aGlzICYmIHRoaXMuX19tYWtlVGVtcGxhdGVPYmplY3QpIHx8IGZ1bmN0aW9uIChjb29rZWQsIHJhdykge1xuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gICAgcmV0dXJuIGNvb2tlZDtcbn07XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKiogQGpzeCBqc3ggKi9cbnZhciBSZWFjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3RcIik7XG52YXIgaGVscGVyc18xID0gcmVxdWlyZShcIi4vaGVscGVyc1wiKTtcbi8vIDEuNSA0LjUgNy41XG52YXIgZGlzdGFuY2UgPSBbMSwgMywgNV07XG52YXIgcHJvcGFnYXRlID0gW1xuICAgIHJlYWN0XzEua2V5ZnJhbWVzKHRlbXBsYXRlT2JqZWN0XzEgfHwgKHRlbXBsYXRlT2JqZWN0XzEgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICAyNSUge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgtXCIsIFwicmVtKSBzY2FsZSgwLjc1KX1cXG4gICAgICA1MCUge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgtXCIsIFwicmVtKSBzY2FsZSgwLjYpfVxcbiAgICAgIDc1JSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC1cIiwgXCJyZW0pIHNjYWxlKDAuNSl9XFxuICAgICAgOTUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSkgc2NhbGUoMSl9XFxuICAgIFwiXSwgW1wiXFxuICAgICAgMjUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLVwiLCBcInJlbSkgc2NhbGUoMC43NSl9XFxuICAgICAgNTAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLVwiLCBcInJlbSkgc2NhbGUoMC42KX1cXG4gICAgICA3NSUge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgtXCIsIFwicmVtKSBzY2FsZSgwLjUpfVxcbiAgICAgIDk1JSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pIHNjYWxlKDEpfVxcbiAgICBcIl0pKSwgZGlzdGFuY2VbMF0sIGRpc3RhbmNlWzFdLCBkaXN0YW5jZVsyXSksXG4gICAgcmVhY3RfMS5rZXlmcmFtZXModGVtcGxhdGVPYmplY3RfMiB8fCAodGVtcGxhdGVPYmplY3RfMiA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIDI1JSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC1cIiwgXCJyZW0pIHNjYWxlKDAuNzUpfVxcbiAgICAgIDUwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC1cIiwgXCJyZW0pIHNjYWxlKDAuNil9XFxuICAgICAgNzUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLVwiLCBcInJlbSkgc2NhbGUoMC42KX1cXG4gICAgICA5NSUge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgwcmVtKSBzY2FsZSgxKX1cXG4gICAgXCJdLCBbXCJcXG4gICAgICAyNSUge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgtXCIsIFwicmVtKSBzY2FsZSgwLjc1KX1cXG4gICAgICA1MCUge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgtXCIsIFwicmVtKSBzY2FsZSgwLjYpfVxcbiAgICAgIDc1JSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC1cIiwgXCJyZW0pIHNjYWxlKDAuNil9XFxuICAgICAgOTUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSkgc2NhbGUoMSl9XFxuICAgIFwiXSkpLCBkaXN0YW5jZVswXSwgZGlzdGFuY2VbMV0sIGRpc3RhbmNlWzFdKSxcbiAgICByZWFjdF8xLmtleWZyYW1lcyh0ZW1wbGF0ZU9iamVjdF8zIHx8ICh0ZW1wbGF0ZU9iamVjdF8zID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgMjUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLVwiLCBcInJlbSkgc2NhbGUoMC43NSl9XFxuICAgICAgNzUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLVwiLCBcInJlbSkgc2NhbGUoMC43NSl9XFxuICAgICAgOTUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSkgc2NhbGUoMSl9XFxuICAgIFwiXSwgW1wiXFxuICAgICAgMjUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLVwiLCBcInJlbSkgc2NhbGUoMC43NSl9XFxuICAgICAgNzUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLVwiLCBcInJlbSkgc2NhbGUoMC43NSl9XFxuICAgICAgOTUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSkgc2NhbGUoMSl9XFxuICAgIFwiXSkpLCBkaXN0YW5jZVswXSwgZGlzdGFuY2VbMF0pLFxuICAgIHJlYWN0XzEua2V5ZnJhbWVzKHRlbXBsYXRlT2JqZWN0XzQgfHwgKHRlbXBsYXRlT2JqZWN0XzQgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICAyNSUge3RyYW5zZm9ybTogdHJhbnNsYXRlWChcIiwgXCJyZW0pIHNjYWxlKDAuNzUpfVxcbiAgICAgIDc1JSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKFwiLCBcInJlbSkgc2NhbGUoMC43NSl9XFxuICAgICAgOTUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSkgc2NhbGUoMSl9XFxuICAgIFwiXSwgW1wiXFxuICAgICAgMjUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoXCIsIFwicmVtKSBzY2FsZSgwLjc1KX1cXG4gICAgICA3NSUge3RyYW5zZm9ybTogdHJhbnNsYXRlWChcIiwgXCJyZW0pIHNjYWxlKDAuNzUpfVxcbiAgICAgIDk1JSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pIHNjYWxlKDEpfVxcbiAgICBcIl0pKSwgZGlzdGFuY2VbMF0sIGRpc3RhbmNlWzBdKSxcbiAgICByZWFjdF8xLmtleWZyYW1lcyh0ZW1wbGF0ZU9iamVjdF81IHx8ICh0ZW1wbGF0ZU9iamVjdF81ID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgMjUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoXCIsIFwicmVtKSBzY2FsZSgwLjc1KX1cXG4gICAgICA1MCUge3RyYW5zZm9ybTogdHJhbnNsYXRlWChcIiwgXCJyZW0pIHNjYWxlKDAuNil9XFxuICAgICAgNzUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoXCIsIFwicmVtKSBzY2FsZSgwLjYpfVxcbiAgICAgIDk1JSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pIHNjYWxlKDEpfVxcbiAgICBcIl0sIFtcIlxcbiAgICAgIDI1JSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKFwiLCBcInJlbSkgc2NhbGUoMC43NSl9XFxuICAgICAgNTAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoXCIsIFwicmVtKSBzY2FsZSgwLjYpfVxcbiAgICAgIDc1JSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKFwiLCBcInJlbSkgc2NhbGUoMC42KX1cXG4gICAgICA5NSUge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgwcmVtKSBzY2FsZSgxKX1cXG4gICAgXCJdKSksIGRpc3RhbmNlWzBdLCBkaXN0YW5jZVsxXSwgZGlzdGFuY2VbMV0pLFxuICAgIHJlYWN0XzEua2V5ZnJhbWVzKHRlbXBsYXRlT2JqZWN0XzYgfHwgKHRlbXBsYXRlT2JqZWN0XzYgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICAyNSUge3RyYW5zZm9ybTogdHJhbnNsYXRlWChcIiwgXCJyZW0pIHNjYWxlKDAuNzUpfVxcbiAgICAgIDUwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKFwiLCBcInJlbSkgc2NhbGUoMC42KX1cXG4gICAgICA3NSUge3RyYW5zZm9ybTogdHJhbnNsYXRlWChcIiwgXCJyZW0pIHNjYWxlKDAuNSl9XFxuICAgICAgOTUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSkgc2NhbGUoMSl9XFxuICAgIFwiXSwgW1wiXFxuICAgICAgMjUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoXCIsIFwicmVtKSBzY2FsZSgwLjc1KX1cXG4gICAgICA1MCUge3RyYW5zZm9ybTogdHJhbnNsYXRlWChcIiwgXCJyZW0pIHNjYWxlKDAuNil9XFxuICAgICAgNzUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoXCIsIFwicmVtKSBzY2FsZSgwLjUpfVxcbiAgICAgIDk1JSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pIHNjYWxlKDEpfVxcbiAgICBcIl0pKSwgZGlzdGFuY2VbMF0sIGRpc3RhbmNlWzFdLCBkaXN0YW5jZVsyXSlcbl07XG52YXIgTG9hZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMb2FkZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTG9hZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3R5bGUgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsIHNpemUgPSBfYS5zaXplLCBjb2xvciA9IF9hLmNvbG9yLCBzcGVlZE11bHRpcGxpZXIgPSBfYS5zcGVlZE11bHRpcGxpZXI7XG4gICAgICAgICAgICB2YXIgX2IgPSBoZWxwZXJzXzEucGFyc2VMZW5ndGhBbmRVbml0KHNpemUpLCB2YWx1ZSA9IF9iLnZhbHVlLCB1bml0ID0gX2IudW5pdDtcbiAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmNzcyh0ZW1wbGF0ZU9iamVjdF83IHx8ICh0ZW1wbGF0ZU9iamVjdF83ID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGZvbnQtc2l6ZTogXCIsIFwiO1xcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgYmFja2dyb3VuZDogXCIsIFwiO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIGluZmluaXRlO1xcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBcIl0sIFtcIlxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBmb250LXNpemU6IFwiLCBcIjtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIGJhY2tncm91bmQ6IFwiLCBcIjtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyBpbmZpbml0ZTtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgXCJdKSksIFwiXCIgKyB2YWx1ZSAvIDMgKyB1bml0LCBcIlwiICsgdmFsdWUgKyB1bml0LCBcIlwiICsgdmFsdWUgKyB1bml0LCBjb2xvciwgcHJvcGFnYXRlW2ldLCAxLjUgLyBzcGVlZE11bHRpcGxpZXIpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy53cmFwcGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzggfHwgKHRlbXBsYXRlT2JqZWN0XzggPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIFwiXSwgW1wiXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBcIl0pKSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTG9hZGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIGxvYWRpbmcgPSBfYS5sb2FkaW5nLCBjc3MgPSBfYS5jc3M7XG4gICAgICAgIHJldHVybiBsb2FkaW5nID8gKHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogW3RoaXMud3JhcHBlcigpLCBjc3NdIH0sXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUoMCkgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUoMSkgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUoMikgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUoMykgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUoNCkgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUoNSkgfSkpKSA6IG51bGw7XG4gICAgfTtcbiAgICBMb2FkZXIuZGVmYXVsdFByb3BzID0gaGVscGVyc18xLnNpemVEZWZhdWx0cygxNSk7XG4gICAgcmV0dXJuIExvYWRlcjtcbn0oUmVhY3QuUHVyZUNvbXBvbmVudCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gTG9hZGVyO1xudmFyIHRlbXBsYXRlT2JqZWN0XzEsIHRlbXBsYXRlT2JqZWN0XzIsIHRlbXBsYXRlT2JqZWN0XzMsIHRlbXBsYXRlT2JqZWN0XzQsIHRlbXBsYXRlT2JqZWN0XzUsIHRlbXBsYXRlT2JqZWN0XzYsIHRlbXBsYXRlT2JqZWN0XzcsIHRlbXBsYXRlT2JqZWN0Xzg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX21ha2VUZW1wbGF0ZU9iamVjdCA9ICh0aGlzICYmIHRoaXMuX19tYWtlVGVtcGxhdGVPYmplY3QpIHx8IGZ1bmN0aW9uIChjb29rZWQsIHJhdykge1xuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gICAgcmV0dXJuIGNvb2tlZDtcbn07XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKiogQGpzeCBqc3ggKi9cbnZhciBSZWFjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3RcIik7XG52YXIgaGVscGVyc18xID0gcmVxdWlyZShcIi4vaGVscGVyc1wiKTtcbnZhciBwdWZmID0gW1xuICAgIHJlYWN0XzEua2V5ZnJhbWVzKHRlbXBsYXRlT2JqZWN0XzEgfHwgKHRlbXBsYXRlT2JqZWN0XzEgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gIDAlICB7dHJhbnNmb3JtOiBzY2FsZSgwKX1cXG4gIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMS4wKX1cXG5cIl0sIFtcIlxcbiAgMCUgIHt0cmFuc2Zvcm06IHNjYWxlKDApfVxcbiAgMTAwJSB7dHJhbnNmb3JtOiBzY2FsZSgxLjApfVxcblwiXSkpKSxcbiAgICByZWFjdF8xLmtleWZyYW1lcyh0ZW1wbGF0ZU9iamVjdF8yIHx8ICh0ZW1wbGF0ZU9iamVjdF8yID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAwJSAge29wYWNpdHk6IDF9XFxuICAxMDAlIHtvcGFjaXR5OiAwfVxcblwiXSwgW1wiXFxuICAwJSAge29wYWNpdHk6IDF9XFxuICAxMDAlIHtvcGFjaXR5OiAwfVxcblwiXSkpKVxuXTtcbnZhciBMb2FkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExvYWRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMb2FkZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5nZXRTaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnByb3BzLnNpemU7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnN0eWxlID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLCBjb2xvciA9IF9hLmNvbG9yLCBzcGVlZE11bHRpcGxpZXIgPSBfYS5zcGVlZE11bHRpcGxpZXI7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfMyB8fCAodGVtcGxhdGVPYmplY3RfMyA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGJvcmRlcjogdGhpY2sgc29saWQgXCIsIFwiO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIsIFwiLCBcIjtcXG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IFwiLCBcInM7XFxuICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSwgY3ViaWMtYmV6aWVyKDAuMywgMC42MSwgMC4zNTUsIDEpO1xcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogXCIsIFwiO1xcbiAgICBcIl0sIFtcIlxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGJvcmRlcjogdGhpY2sgc29saWQgXCIsIFwiO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIsIFwiLCBcIjtcXG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IFwiLCBcInM7XFxuICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSwgY3ViaWMtYmV6aWVyKDAuMywgMC42MSwgMC4zNTUsIDEpO1xcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogXCIsIFwiO1xcbiAgICBcIl0pKSwgaGVscGVyc18xLmNzc1ZhbHVlKF90aGlzLmdldFNpemUoKSksIGhlbHBlcnNfMS5jc3NWYWx1ZShfdGhpcy5nZXRTaXplKCkpLCBjb2xvciwgcHVmZlswXSwgcHVmZlsxXSwgMiAvIHNwZWVkTXVsdGlwbGllciwgaSA9PT0gMSA/IFwiLTFzXCIgOiBcIjBzXCIpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy53cmFwcGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzQgfHwgKHRlbXBsYXRlT2JqZWN0XzQgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgXCJdLCBbXCJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgXCJdKSksIGhlbHBlcnNfMS5jc3NWYWx1ZShfdGhpcy5nZXRTaXplKCkpLCBoZWxwZXJzXzEuY3NzVmFsdWUoX3RoaXMuZ2V0U2l6ZSgpKSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTG9hZGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIGxvYWRpbmcgPSBfYS5sb2FkaW5nLCBjc3MgPSBfYS5jc3M7XG4gICAgICAgIHJldHVybiBsb2FkaW5nID8gKHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogW3RoaXMud3JhcHBlcigpLCBjc3NdIH0sXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUoMSkgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUoMikgfSkpKSA6IG51bGw7XG4gICAgfTtcbiAgICBMb2FkZXIuZGVmYXVsdFByb3BzID0gaGVscGVyc18xLnNpemVEZWZhdWx0cyg2MCk7XG4gICAgcmV0dXJuIExvYWRlcjtcbn0oUmVhY3QuUHVyZUNvbXBvbmVudCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gTG9hZGVyO1xudmFyIHRlbXBsYXRlT2JqZWN0XzEsIHRlbXBsYXRlT2JqZWN0XzIsIHRlbXBsYXRlT2JqZWN0XzMsIHRlbXBsYXRlT2JqZWN0XzQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX21ha2VUZW1wbGF0ZU9iamVjdCA9ICh0aGlzICYmIHRoaXMuX19tYWtlVGVtcGxhdGVPYmplY3QpIHx8IGZ1bmN0aW9uIChjb29rZWQsIHJhdykge1xuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gICAgcmV0dXJuIGNvb2tlZDtcbn07XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKiogQGpzeCBqc3ggKi9cbnZhciBSZWFjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3RcIik7XG52YXIgaGVscGVyc18xID0gcmVxdWlyZShcIi4vaGVscGVyc1wiKTtcbnZhciBwdWxzZSA9IHJlYWN0XzEua2V5ZnJhbWVzKHRlbXBsYXRlT2JqZWN0XzEgfHwgKHRlbXBsYXRlT2JqZWN0XzEgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gIDAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpO29wYWNpdHk6IDF9XFxuICA0NSUge3RyYW5zZm9ybTogc2NhbGUoMC4xKTtvcGFjaXR5OiAwLjd9XFxuICA4MCUge3RyYW5zZm9ybTogc2NhbGUoMSk7b3BhY2l0eTogMX1cXG5cIl0sIFtcIlxcbiAgMCUge3RyYW5zZm9ybTogc2NhbGUoMSk7b3BhY2l0eTogMX1cXG4gIDQ1JSB7dHJhbnNmb3JtOiBzY2FsZSgwLjEpO29wYWNpdHk6IDAuN31cXG4gIDgwJSB7dHJhbnNmb3JtOiBzY2FsZSgxKTtvcGFjaXR5OiAxfVxcblwiXSkpKTtcbnZhciBMb2FkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExvYWRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMb2FkZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zdHlsZSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcywgY29sb3IgPSBfYS5jb2xvciwgc2l6ZSA9IF9hLnNpemUsIG1hcmdpbiA9IF9hLm1hcmdpbiwgc3BlZWRNdWx0aXBsaWVyID0gX2Euc3BlZWRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzIgfHwgKHRlbXBsYXRlT2JqZWN0XzIgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiwgXCI7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBtYXJnaW46IFwiLCBcIjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIFwiLCBcInMgaW5maW5pdGVcXG4gICAgICAgIGN1YmljLWJlemllcigwLjIsIDAuNjgsIDAuMTgsIDEuMDgpO1xcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAgIFwiXSwgW1wiXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogXCIsIFwiO1xcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgbWFyZ2luOiBcIiwgXCI7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyBcIiwgXCJzIGluZmluaXRlXFxuICAgICAgICBjdWJpYy1iZXppZXIoMC4yLCAwLjY4LCAwLjE4LCAxLjA4KTtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICBcIl0pKSwgY29sb3IsIGhlbHBlcnNfMS5jc3NWYWx1ZShzaXplKSwgaGVscGVyc18xLmNzc1ZhbHVlKHNpemUpLCBoZWxwZXJzXzEuY3NzVmFsdWUobWFyZ2luKSwgcHVsc2UsIDAuNzUgLyBzcGVlZE11bHRpcGxpZXIsIChpICogMC4xMikgLyBzcGVlZE11bHRpcGxpZXIpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIExvYWRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBsb2FkaW5nID0gX2EubG9hZGluZywgY3NzID0gX2EuY3NzO1xuICAgICAgICByZXR1cm4gbG9hZGluZyA/IChyZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IFtjc3NdIH0sXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUoMSkgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUoMikgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUoMykgfSkpKSA6IG51bGw7XG4gICAgfTtcbiAgICBMb2FkZXIuZGVmYXVsdFByb3BzID0gaGVscGVyc18xLnNpemVNYXJnaW5EZWZhdWx0cygxNSk7XG4gICAgcmV0dXJuIExvYWRlcjtcbn0oUmVhY3QuUHVyZUNvbXBvbmVudCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gTG9hZGVyO1xudmFyIHRlbXBsYXRlT2JqZWN0XzEsIHRlbXBsYXRlT2JqZWN0XzI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX21ha2VUZW1wbGF0ZU9iamVjdCA9ICh0aGlzICYmIHRoaXMuX19tYWtlVGVtcGxhdGVPYmplY3QpIHx8IGZ1bmN0aW9uIChjb29rZWQsIHJhdykge1xuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gICAgcmV0dXJuIGNvb2tlZDtcbn07XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKiogQGpzeCBqc3ggKi9cbnZhciBSZWFjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3RcIik7XG52YXIgaGVscGVyc18xID0gcmVxdWlyZShcIi4vaGVscGVyc1wiKTtcbnZhciByaWdodCA9IHJlYWN0XzEua2V5ZnJhbWVzKHRlbXBsYXRlT2JqZWN0XzEgfHwgKHRlbXBsYXRlT2JqZWN0XzEgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gIDAlIHt0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpfVxcbiAgMTAwJSB7dHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZykgcm90YXRlWSgzNjBkZWcpIHJvdGF0ZVooMzYwZGVnKX1cXG5cIl0sIFtcIlxcbiAgMCUge3RyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyl9XFxuICAxMDAlIHt0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKSByb3RhdGVZKDM2MGRlZykgcm90YXRlWigzNjBkZWcpfVxcblwiXSkpKTtcbnZhciBsZWZ0ID0gcmVhY3RfMS5rZXlmcmFtZXModGVtcGxhdGVPYmplY3RfMiB8fCAodGVtcGxhdGVPYmplY3RfMiA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgMCUge3RyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyl9XFxuICAxMDAlIHt0cmFuc2Zvcm06IHJvdGF0ZVgoMzYwZGVnKSByb3RhdGVZKDE4MGRlZykgcm90YXRlWigzNjBkZWcpfVxcblwiXSwgW1wiXFxuICAwJSB7dHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKX1cXG4gIDEwMCUge3RyYW5zZm9ybTogcm90YXRlWCgzNjBkZWcpIHJvdGF0ZVkoMTgwZGVnKSByb3RhdGVaKDM2MGRlZyl9XFxuXCJdKSkpO1xudmFyIExvYWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTG9hZGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExvYWRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmdldFNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMucHJvcHMuc2l6ZTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuc3R5bGUgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsIGNvbG9yID0gX2EuY29sb3IsIHNwZWVkTXVsdGlwbGllciA9IF9hLnNwZWVkTXVsdGlwbGllcjtcbiAgICAgICAgICAgIHZhciBfYiA9IGhlbHBlcnNfMS5wYXJzZUxlbmd0aEFuZFVuaXQoX3RoaXMuZ2V0U2l6ZSgpKSwgdmFsdWUgPSBfYi52YWx1ZSwgdW5pdCA9IF9iLnVuaXQ7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfMyB8fCAodGVtcGxhdGVPYmplY3RfMyA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIGJvcmRlcjogXCIsIFwiIHNvbGlkIFwiLCBcIjtcXG4gICAgICBvcGFjaXR5OiAwLjQ7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgICBwZXJzcGVjdGl2ZTogODAwcHg7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyAwcyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgIFwiXSwgW1wiXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgYm9yZGVyOiBcIiwgXCIgc29saWQgXCIsIFwiO1xcbiAgICAgIG9wYWNpdHk6IDAuNDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICAgIHBlcnNwZWN0aXZlOiA4MDBweDtcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIDBzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgXCJdKSksIFwiXCIgKyB2YWx1ZSArIHVuaXQsIFwiXCIgKyB2YWx1ZSArIHVuaXQsIFwiXCIgKyB2YWx1ZSAvIDEwICsgdW5pdCwgY29sb3IsIGkgPT09IDEgPyByaWdodCA6IGxlZnQsIDIgLyBzcGVlZE11bHRpcGxpZXIpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy53cmFwcGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzQgfHwgKHRlbXBsYXRlT2JqZWN0XzQgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgXCJdLCBbXCJcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgXCJdKSksIGhlbHBlcnNfMS5jc3NWYWx1ZShfdGhpcy5nZXRTaXplKCkpLCBoZWxwZXJzXzEuY3NzVmFsdWUoX3RoaXMuZ2V0U2l6ZSgpKSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTG9hZGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIGxvYWRpbmcgPSBfYS5sb2FkaW5nLCBjc3MgPSBfYS5jc3M7XG4gICAgICAgIHJldHVybiBsb2FkaW5nID8gKHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogW3RoaXMud3JhcHBlcigpLCBjc3NdIH0sXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUoMSkgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUoMikgfSkpKSA6IG51bGw7XG4gICAgfTtcbiAgICBMb2FkZXIuZGVmYXVsdFByb3BzID0gaGVscGVyc18xLnNpemVEZWZhdWx0cyg2MCk7XG4gICAgcmV0dXJuIExvYWRlcjtcbn0oUmVhY3QuUHVyZUNvbXBvbmVudCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gTG9hZGVyO1xudmFyIHRlbXBsYXRlT2JqZWN0XzEsIHRlbXBsYXRlT2JqZWN0XzIsIHRlbXBsYXRlT2JqZWN0XzMsIHRlbXBsYXRlT2JqZWN0XzQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX21ha2VUZW1wbGF0ZU9iamVjdCA9ICh0aGlzICYmIHRoaXMuX19tYWtlVGVtcGxhdGVPYmplY3QpIHx8IGZ1bmN0aW9uIChjb29rZWQsIHJhdykge1xuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gICAgcmV0dXJuIGNvb2tlZDtcbn07XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKiogQGpzeCBqc3ggKi9cbnZhciBSZWFjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3RcIik7XG52YXIgaGVscGVyc18xID0gcmVxdWlyZShcIi4vaGVscGVyc1wiKTtcbnZhciByaXNlQW1vdW50ID0gMzA7XG52YXIgZXZlbiA9IHJlYWN0XzEua2V5ZnJhbWVzKHRlbXBsYXRlT2JqZWN0XzEgfHwgKHRlbXBsYXRlT2JqZWN0XzEgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gIDAlIHt0cmFuc2Zvcm06IHNjYWxlKDEuMSl9XFxuICAyNSUge3RyYW5zZm9ybTogdHJhbnNsYXRlWSgtXCIsIFwicHgpfVxcbiAgNTAlIHt0cmFuc2Zvcm06IHNjYWxlKDAuNCl9XFxuICA3NSUge3RyYW5zZm9ybTogdHJhbnNsYXRlWShcIiwgXCJweCl9XFxuICAxMDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMS4wKX1cXG5cIl0sIFtcIlxcbiAgMCUge3RyYW5zZm9ybTogc2NhbGUoMS4xKX1cXG4gIDI1JSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC1cIiwgXCJweCl9XFxuICA1MCUge3RyYW5zZm9ybTogc2NhbGUoMC40KX1cXG4gIDc1JSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKFwiLCBcInB4KX1cXG4gIDEwMCUge3RyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxLjApfVxcblwiXSkpLCByaXNlQW1vdW50LCByaXNlQW1vdW50KTtcbnZhciBvZGQgPSByZWFjdF8xLmtleWZyYW1lcyh0ZW1wbGF0ZU9iamVjdF8yIHx8ICh0ZW1wbGF0ZU9iamVjdF8yID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAwJSB7dHJhbnNmb3JtOiBzY2FsZSgwLjQpfVxcbiAgMjUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoXCIsIFwicHgpfVxcbiAgNTAlIHt0cmFuc2Zvcm06IHNjYWxlKDEuMSl9XFxuICA3NSUge3RyYW5zZm9ybTogdHJhbnNsYXRlWShcIiwgXCJweCl9XFxuICAxMDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMC43NSl9XFxuXCJdLCBbXCJcXG4gIDAlIHt0cmFuc2Zvcm06IHNjYWxlKDAuNCl9XFxuICAyNSUge3RyYW5zZm9ybTogdHJhbnNsYXRlWShcIiwgXCJweCl9XFxuICA1MCUge3RyYW5zZm9ybTogc2NhbGUoMS4xKX1cXG4gIDc1JSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKFwiLCBcInB4KX1cXG4gIDEwMCUge3RyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgwLjc1KX1cXG5cIl0pKSwgcmlzZUFtb3VudCwgLXJpc2VBbW91bnQpO1xudmFyIExvYWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTG9hZGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExvYWRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnN0eWxlID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLCBjb2xvciA9IF9hLmNvbG9yLCBzaXplID0gX2Euc2l6ZSwgbWFyZ2luID0gX2EubWFyZ2luLCBzcGVlZE11bHRpcGxpZXIgPSBfYS5zcGVlZE11bHRpcGxpZXI7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfMyB8fCAodGVtcGxhdGVPYmplY3RfMyA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IFwiLCBcIjtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIG1hcmdpbjogXCIsIFwiO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiIFwiLCBcInMgMHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMTUsIDAuNDYsIDAuOSwgMC42KTtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICBcIl0sIFtcIlxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IFwiLCBcIjtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIG1hcmdpbjogXCIsIFwiO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiIFwiLCBcInMgMHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMTUsIDAuNDYsIDAuOSwgMC42KTtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICBcIl0pKSwgY29sb3IsIGhlbHBlcnNfMS5jc3NWYWx1ZShzaXplKSwgaGVscGVyc18xLmNzc1ZhbHVlKHNpemUpLCBoZWxwZXJzXzEuY3NzVmFsdWUobWFyZ2luKSwgaSAlIDIgPT09IDAgPyBldmVuIDogb2RkLCAxIC8gc3BlZWRNdWx0aXBsaWVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBMb2FkZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgbG9hZGluZyA9IF9hLmxvYWRpbmcsIGNzcyA9IF9hLmNzcztcbiAgICAgICAgcmV0dXJuIGxvYWRpbmcgPyAocmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiBbY3NzXSB9LFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDEpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDIpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDMpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDQpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnN0eWxlKDUpIH0pKSkgOiBudWxsO1xuICAgIH07XG4gICAgTG9hZGVyLmRlZmF1bHRQcm9wcyA9IGhlbHBlcnNfMS5zaXplTWFyZ2luRGVmYXVsdHMoMTUpO1xuICAgIHJldHVybiBMb2FkZXI7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IExvYWRlcjtcbnZhciB0ZW1wbGF0ZU9iamVjdF8xLCB0ZW1wbGF0ZU9iamVjdF8yLCB0ZW1wbGF0ZU9iamVjdF8zO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19tYWtlVGVtcGxhdGVPYmplY3QgPSAodGhpcyAmJiB0aGlzLl9fbWFrZVRlbXBsYXRlT2JqZWN0KSB8fCBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICAgIHJldHVybiBjb29rZWQ7XG59O1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqIEBqc3gganN4ICovXG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciByZWFjdF8xID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0XCIpO1xudmFyIGhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIik7XG52YXIgcm90YXRlID0gcmVhY3RfMS5rZXlmcmFtZXModGVtcGxhdGVPYmplY3RfMSB8fCAodGVtcGxhdGVPYmplY3RfMSA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgMCUge3RyYW5zZm9ybTogcm90YXRlKDBkZWcpfVxcbiAgNTAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpfVxcbiAgMTAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKX1cXG5cIl0sIFtcIlxcbiAgMCUge3RyYW5zZm9ybTogcm90YXRlKDBkZWcpfVxcbiAgNTAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpfVxcbiAgMTAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKX1cXG5cIl0pKSk7XG52YXIgTG9hZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMb2FkZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTG9hZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3R5bGUgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgdmFyIG1hcmdpbiA9IF90aGlzLnByb3BzLm1hcmdpbjtcbiAgICAgICAgICAgIHZhciBfYSA9IGhlbHBlcnNfMS5wYXJzZUxlbmd0aEFuZFVuaXQobWFyZ2luKSwgdmFsdWUgPSBfYS52YWx1ZSwgdW5pdCA9IF9hLnVuaXQ7XG4gICAgICAgICAgICB2YXIgbGVmdCA9IChpICUgMiA/IC0xIDogMSkgKiAoMjYgKyB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfMiB8fCAodGVtcGxhdGVPYmplY3RfMiA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IFwiLCBcIlwiLCBcIjtcXG4gICAgXCJdLCBbXCJcXG4gICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiBcIiwgXCJcIiwgXCI7XFxuICAgIFwiXSkpLCBsZWZ0LCB1bml0KTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuYmFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLCBjb2xvciA9IF9hLmNvbG9yLCBzaXplID0gX2Euc2l6ZTtcbiAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmNzcyh0ZW1wbGF0ZU9iamVjdF8zIHx8ICh0ZW1wbGF0ZU9iamVjdF8zID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogXCIsIFwiO1xcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgXCJdLCBbXCJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiwgXCI7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBcIl0pKSwgY29sb3IsIGhlbHBlcnNfMS5jc3NWYWx1ZShzaXplKSwgaGVscGVyc18xLmNzc1ZhbHVlKHNpemUpKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMud3JhcHBlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzcGVlZE11bHRpcGxpZXIgPSBfdGhpcy5wcm9wcy5zcGVlZE11bHRpcGxpZXI7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfNCB8fCAodGVtcGxhdGVPYmplY3RfNCA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIFwiLCBcIjtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyAwcyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC43LCAtMC4xMywgMC4yMiwgMC44Nik7XFxuICAgIFwiXSwgW1wiXFxuICAgICAgXCIsIFwiO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiBcIiwgXCJzIDBzIGluZmluaXRlIGN1YmljLWJlemllcigwLjcsIC0wLjEzLCAwLjIyLCAwLjg2KTtcXG4gICAgXCJdKSksIF90aGlzLmJhbGwoKSwgcm90YXRlLCAxIC8gc3BlZWRNdWx0aXBsaWVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMubG9uZyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzUgfHwgKHRlbXBsYXRlT2JqZWN0XzUgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgXCIsIFwiO1xcbiAgICBcIiwgXCI7XFxuICBcIl0sIFtcIlxcbiAgICBcIiwgXCI7XFxuICAgIFwiLCBcIjtcXG4gIFwiXSkpLCBfdGhpcy5iYWxsKCksIF90aGlzLnN0eWxlKDEpKTsgfTtcbiAgICAgICAgX3RoaXMuc2hvcnQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdF8xLmNzcyh0ZW1wbGF0ZU9iamVjdF82IHx8ICh0ZW1wbGF0ZU9iamVjdF82ID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgIFwiLCBcIjtcXG4gICAgXCIsIFwiO1xcbiAgXCJdLCBbXCJcXG4gICAgXCIsIFwiO1xcbiAgICBcIiwgXCI7XFxuICBcIl0pKSwgX3RoaXMuYmFsbCgpLCBfdGhpcy5zdHlsZSgyKSk7IH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTG9hZGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIGxvYWRpbmcgPSBfYS5sb2FkaW5nLCBjc3MgPSBfYS5jc3M7XG4gICAgICAgIHJldHVybiBsb2FkaW5nID8gKHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogW3RoaXMud3JhcHBlcigpLCBjc3NdIH0sXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMubG9uZygpIH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5qc3goXCJzcGFuXCIsIHsgY3NzOiB0aGlzLnNob3J0KCkgfSkpKSA6IG51bGw7XG4gICAgfTtcbiAgICBMb2FkZXIuZGVmYXVsdFByb3BzID0gaGVscGVyc18xLnNpemVNYXJnaW5EZWZhdWx0cygxNSk7XG4gICAgcmV0dXJuIExvYWRlcjtcbn0oUmVhY3QuUHVyZUNvbXBvbmVudCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gTG9hZGVyO1xudmFyIHRlbXBsYXRlT2JqZWN0XzEsIHRlbXBsYXRlT2JqZWN0XzIsIHRlbXBsYXRlT2JqZWN0XzMsIHRlbXBsYXRlT2JqZWN0XzQsIHRlbXBsYXRlT2JqZWN0XzUsIHRlbXBsYXRlT2JqZWN0XzY7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX21ha2VUZW1wbGF0ZU9iamVjdCA9ICh0aGlzICYmIHRoaXMuX19tYWtlVGVtcGxhdGVPYmplY3QpIHx8IGZ1bmN0aW9uIChjb29rZWQsIHJhdykge1xuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gICAgcmV0dXJuIGNvb2tlZDtcbn07XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKiogQGpzeCBqc3ggKi9cbnZhciBSZWFjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3RcIik7XG52YXIgaGVscGVyc18xID0gcmVxdWlyZShcIi4vaGVscGVyc1wiKTtcbnZhciBzY2FsZSA9IHJlYWN0XzEua2V5ZnJhbWVzKHRlbXBsYXRlT2JqZWN0XzEgfHwgKHRlbXBsYXRlT2JqZWN0XzEgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gIDAlIHt0cmFuc2Zvcm06IHNjYWxleSgxLjApfVxcbiAgNTAlIHt0cmFuc2Zvcm06IHNjYWxleSgwLjQpfVxcbiAgMTAwJSB7dHJhbnNmb3JtOiBzY2FsZXkoMS4wKX1cXG5cIl0sIFtcIlxcbiAgMCUge3RyYW5zZm9ybTogc2NhbGV5KDEuMCl9XFxuICA1MCUge3RyYW5zZm9ybTogc2NhbGV5KDAuNCl9XFxuICAxMDAlIHt0cmFuc2Zvcm06IHNjYWxleSgxLjApfVxcblwiXSkpKTtcbnZhciBMb2FkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExvYWRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMb2FkZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zdHlsZSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcywgY29sb3IgPSBfYS5jb2xvciwgd2lkdGggPSBfYS53aWR0aCwgaGVpZ2h0ID0gX2EuaGVpZ2h0LCBtYXJnaW4gPSBfYS5tYXJnaW4sIHJhZGl1cyA9IF9hLnJhZGl1cywgc3BlZWRNdWx0aXBsaWVyID0gX2Euc3BlZWRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuY3NzKHRlbXBsYXRlT2JqZWN0XzIgfHwgKHRlbXBsYXRlT2JqZWN0XzIgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiwgXCI7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBtYXJnaW46IFwiLCBcIjtcXG4gICAgICBib3JkZXItcmFkaXVzOiBcIiwgXCI7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiIFwiLCBcInMgXCIsIFwicyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC4yLCAwLjY4LCAwLjE4LCAxLjA4KTtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICBcIl0sIFtcIlxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IFwiLCBcIjtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIG1hcmdpbjogXCIsIFwiO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IFwiLCBcIjtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyBcIiwgXCJzIGluZmluaXRlIGN1YmljLWJlemllcigwLjIsIDAuNjgsIDAuMTgsIDEuMDgpO1xcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAgIFwiXSkpLCBjb2xvciwgaGVscGVyc18xLmNzc1ZhbHVlKHdpZHRoKSwgaGVscGVyc18xLmNzc1ZhbHVlKGhlaWdodCksIGhlbHBlcnNfMS5jc3NWYWx1ZShtYXJnaW4pLCBoZWxwZXJzXzEuY3NzVmFsdWUocmFkaXVzKSwgc2NhbGUsIDEgLyBzcGVlZE11bHRpcGxpZXIsIGkgKiAwLjEpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIExvYWRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBsb2FkaW5nID0gX2EubG9hZGluZywgY3NzID0gX2EuY3NzO1xuICAgICAgICByZXR1cm4gbG9hZGluZyA/IChyZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IFtjc3NdIH0sXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUoMSkgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUoMikgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUoMykgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUoNCkgfSksXG4gICAgICAgICAgICByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IHRoaXMuc3R5bGUoNSkgfSkpKSA6IG51bGw7XG4gICAgfTtcbiAgICBMb2FkZXIuZGVmYXVsdFByb3BzID0gaGVscGVyc18xLmhlaWdodFdpZHRoUmFkaXVzRGVmYXVsdHMoMzUsIDQsIDIpO1xuICAgIHJldHVybiBMb2FkZXI7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IExvYWRlcjtcbnZhciB0ZW1wbGF0ZU9iamVjdF8xLCB0ZW1wbGF0ZU9iamVjdF8yO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19tYWtlVGVtcGxhdGVPYmplY3QgPSAodGhpcyAmJiB0aGlzLl9fbWFrZVRlbXBsYXRlT2JqZWN0KSB8fCBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICAgIHJldHVybiBjb29rZWQ7XG59O1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqIEBqc3gganN4ICovXG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciByZWFjdF8xID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0XCIpO1xudmFyIGhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIik7XG52YXIgc2tldyA9IHJlYWN0XzEua2V5ZnJhbWVzKHRlbXBsYXRlT2JqZWN0XzEgfHwgKHRlbXBsYXRlT2JqZWN0XzEgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gIDI1JSB7dHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgxODBkZWcpIHJvdGF0ZVkoMCl9XFxuICA1MCUge3RyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMTgwZGVnKSByb3RhdGVZKDE4MGRlZyl9XFxuICA3NSUge3RyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMCkgcm90YXRlWSgxODBkZWcpfVxcbiAgMTAwJSB7dHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgwKSByb3RhdGVZKDApfVxcblwiXSwgW1wiXFxuICAyNSUge3RyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMTgwZGVnKSByb3RhdGVZKDApfVxcbiAgNTAlIHt0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMHB4KSByb3RhdGVYKDE4MGRlZykgcm90YXRlWSgxODBkZWcpfVxcbiAgNzUlIHt0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMHB4KSByb3RhdGVYKDApIHJvdGF0ZVkoMTgwZGVnKX1cXG4gIDEwMCUge3RyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMCkgcm90YXRlWSgwKX1cXG5cIl0pKSk7XG52YXIgTG9hZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMb2FkZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTG9hZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcywgY29sb3IgPSBfYS5jb2xvciwgc3BlZWRNdWx0aXBsaWVyID0gX2Euc3BlZWRNdWx0aXBsaWVyLCBzaXplID0gX2Euc2l6ZTtcbiAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmNzcyh0ZW1wbGF0ZU9iamVjdF8yIHx8ICh0ZW1wbGF0ZU9iamVjdF8yID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgd2lkdGg6IDA7XFxuICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgIGJvcmRlci1sZWZ0OiBcIiwgXCIgc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiBcIiwgXCIgc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogXCIsIFwiIHNvbGlkIFwiLCBcIjtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyAwcyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC4wOSwgMC41NywgMC40OSwgMC45KTtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICBcIl0sIFtcIlxcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICBib3JkZXItbGVmdDogXCIsIFwiIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlci1yaWdodDogXCIsIFwiIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlci1ib3R0b206IFwiLCBcIiBzb2xpZCBcIiwgXCI7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiIFwiLCBcInMgMHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMDksIDAuNTcsIDAuNDksIDAuOSk7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gICAgXCJdKSksIGhlbHBlcnNfMS5jc3NWYWx1ZShzaXplKSwgaGVscGVyc18xLmNzc1ZhbHVlKHNpemUpLCBoZWxwZXJzXzEuY3NzVmFsdWUoc2l6ZSksIGNvbG9yLCBza2V3LCAzIC8gc3BlZWRNdWx0aXBsaWVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBMb2FkZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgbG9hZGluZyA9IF9hLmxvYWRpbmcsIGNzcyA9IF9hLmNzcztcbiAgICAgICAgcmV0dXJuIGxvYWRpbmcgPyByZWFjdF8xLmpzeChcInNwYW5cIiwgeyBjc3M6IFt0aGlzLnN0eWxlKCksIGNzc10gfSkgOiBudWxsO1xuICAgIH07XG4gICAgTG9hZGVyLmRlZmF1bHRQcm9wcyA9IGhlbHBlcnNfMS5zaXplRGVmYXVsdHMoMjApO1xuICAgIHJldHVybiBMb2FkZXI7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IExvYWRlcjtcbnZhciB0ZW1wbGF0ZU9iamVjdF8xLCB0ZW1wbGF0ZU9iamVjdF8yO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19tYWtlVGVtcGxhdGVPYmplY3QgPSAodGhpcyAmJiB0aGlzLl9fbWFrZVRlbXBsYXRlT2JqZWN0KSB8fCBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICAgIHJldHVybiBjb29rZWQ7XG59O1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqIEBqc3gganN4ICovXG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciByZWFjdF8xID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0XCIpO1xudmFyIGhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIik7XG52YXIgc3F1YXJlID0gcmVhY3RfMS5rZXlmcmFtZXModGVtcGxhdGVPYmplY3RfMSB8fCAodGVtcGxhdGVPYmplY3RfMSA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgMjUlIHt0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKSByb3RhdGVZKDApfVxcbiAgNTAlIHt0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKSByb3RhdGVZKDE4MGRlZyl9XFxuICA3NSUge3RyYW5zZm9ybTogcm90YXRlWCgwKSByb3RhdGVZKDE4MGRlZyl9XFxuICAxMDAlIHt0cmFuc2Zvcm06IHJvdGF0ZVgoMCkgcm90YXRlWSgwKX1cXG5cIl0sIFtcIlxcbiAgMjUlIHt0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKSByb3RhdGVZKDApfVxcbiAgNTAlIHt0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKSByb3RhdGVZKDE4MGRlZyl9XFxuICA3NSUge3RyYW5zZm9ybTogcm90YXRlWCgwKSByb3RhdGVZKDE4MGRlZyl9XFxuICAxMDAlIHt0cmFuc2Zvcm06IHJvdGF0ZVgoMCkgcm90YXRlWSgwKX1cXG5cIl0pKSk7XG52YXIgTG9hZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMb2FkZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTG9hZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcywgY29sb3IgPSBfYS5jb2xvciwgc2l6ZSA9IF9hLnNpemUsIHNwZWVkTXVsdGlwbGllciA9IF9hLnNwZWVkTXVsdGlwbGllcjtcbiAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmNzcyh0ZW1wbGF0ZU9iamVjdF8yIHx8ICh0ZW1wbGF0ZU9iamVjdF8yID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogXCIsIFwiO1xcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiIFwiLCBcInMgMHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMDksIDAuNTcsIDAuNDksIDAuOSk7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gICAgXCJdLCBbXCJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiwgXCI7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgXCIsIFwicyAwcyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC4wOSwgMC41NywgMC40OSwgMC45KTtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICBcIl0pKSwgY29sb3IsIGhlbHBlcnNfMS5jc3NWYWx1ZShzaXplKSwgaGVscGVyc18xLmNzc1ZhbHVlKHNpemUpLCBzcXVhcmUsIDMgLyBzcGVlZE11bHRpcGxpZXIpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIExvYWRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBsb2FkaW5nID0gX2EubG9hZGluZywgY3NzID0gX2EuY3NzO1xuICAgICAgICByZXR1cm4gbG9hZGluZyA/IHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogW3RoaXMuc3R5bGUoKSwgY3NzXSB9KSA6IG51bGw7XG4gICAgfTtcbiAgICBMb2FkZXIuZGVmYXVsdFByb3BzID0gaGVscGVyc18xLnNpemVEZWZhdWx0cyg1MCk7XG4gICAgcmV0dXJuIExvYWRlcjtcbn0oUmVhY3QuUHVyZUNvbXBvbmVudCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gTG9hZGVyO1xudmFyIHRlbXBsYXRlT2JqZWN0XzEsIHRlbXBsYXRlT2JqZWN0XzI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX21ha2VUZW1wbGF0ZU9iamVjdCA9ICh0aGlzICYmIHRoaXMuX19tYWtlVGVtcGxhdGVPYmplY3QpIHx8IGZ1bmN0aW9uIChjb29rZWQsIHJhdykge1xuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gICAgcmV0dXJuIGNvb2tlZDtcbn07XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKiogQGpzeCBqc3ggKi9cbnZhciBSZWFjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3RcIik7XG52YXIgcHJvcHR5cGVzXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzL3Byb3B0eXBlc1wiKTtcbnZhciBoZWxwZXJzXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzXCIpO1xudmFyIHN5bmMgPSByZWFjdF8xLmtleWZyYW1lcyh0ZW1wbGF0ZU9iamVjdF8xIHx8ICh0ZW1wbGF0ZU9iamVjdF8xID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAzMyUge3RyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KX1cXG4gIDY2JSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KX1cXG4gIDEwMCUge3RyYW5zZm9ybTogdHJhbnNsYXRlWSgwKX1cXG5cIl0sIFtcIlxcbiAgMzMlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCl9XFxuICA2NiUge3RyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCl9XFxuICAxMDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCl9XFxuXCJdKSkpO1xudmFyIExvYWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTG9hZGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExvYWRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnN0eWxlID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLCBjb2xvciA9IF9hLmNvbG9yLCBzaXplID0gX2Euc2l6ZSwgbWFyZ2luID0gX2EubWFyZ2luLCBzcGVlZE11bHRpcGxpZXIgPSBfYS5zcGVlZE11bHRpcGxpZXI7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5jc3ModGVtcGxhdGVPYmplY3RfMiB8fCAodGVtcGxhdGVPYmplY3RfMiA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IFwiLCBcIjtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIG1hcmdpbjogXCIsIFwiO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiIFwiLCBcInMgXCIsIFwicyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICBcIl0sIFtcIlxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IFwiLCBcIjtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIG1hcmdpbjogXCIsIFwiO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiIFwiLCBcInMgXCIsIFwicyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICBcIl0pKSwgY29sb3IsIGhlbHBlcnNfMS5jc3NWYWx1ZShzaXplKSwgaGVscGVyc18xLmNzc1ZhbHVlKHNpemUpLCBoZWxwZXJzXzEuY3NzVmFsdWUobWFyZ2luKSwgc3luYywgMC42IC8gc3BlZWRNdWx0aXBsaWVyLCBpICogMC4wNyk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTG9hZGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIGxvYWRpbmcgPSBfYS5sb2FkaW5nLCBjc3MgPSBfYS5jc3M7XG4gICAgICAgIHJldHVybiBsb2FkaW5nID8gKHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogW2Nzc10gfSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5zdHlsZSgxKSB9KSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5zdHlsZSgyKSB9KSxcbiAgICAgICAgICAgIHJlYWN0XzEuanN4KFwic3BhblwiLCB7IGNzczogdGhpcy5zdHlsZSgzKSB9KSkpIDogbnVsbDtcbiAgICB9O1xuICAgIExvYWRlci5kZWZhdWx0UHJvcHMgPSBwcm9wdHlwZXNfMS5zaXplTWFyZ2luRGVmYXVsdHMoMTUpO1xuICAgIHJldHVybiBMb2FkZXI7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IExvYWRlcjtcbnZhciB0ZW1wbGF0ZU9iamVjdF8xLCB0ZW1wbGF0ZU9iamVjdF8yO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNhbGN1bGF0ZVJnYmEgPSB2b2lkIDA7XG52YXIgQmFzaWNDb2xvcnM7XG4oZnVuY3Rpb24gKEJhc2ljQ29sb3JzKSB7XG4gICAgQmFzaWNDb2xvcnNbXCJtYXJvb25cIl0gPSBcIiM4MDAwMDBcIjtcbiAgICBCYXNpY0NvbG9yc1tcInJlZFwiXSA9IFwiI0ZGMDAwMFwiO1xuICAgIEJhc2ljQ29sb3JzW1wib3JhbmdlXCJdID0gXCIjRkZBNTAwXCI7XG4gICAgQmFzaWNDb2xvcnNbXCJ5ZWxsb3dcIl0gPSBcIiNGRkZGMDBcIjtcbiAgICBCYXNpY0NvbG9yc1tcIm9saXZlXCJdID0gXCIjODA4MDAwXCI7XG4gICAgQmFzaWNDb2xvcnNbXCJncmVlblwiXSA9IFwiIzAwODAwMFwiO1xuICAgIEJhc2ljQ29sb3JzW1wicHVycGxlXCJdID0gXCIjODAwMDgwXCI7XG4gICAgQmFzaWNDb2xvcnNbXCJmdWNoc2lhXCJdID0gXCIjRkYwMEZGXCI7XG4gICAgQmFzaWNDb2xvcnNbXCJsaW1lXCJdID0gXCIjMDBGRjAwXCI7XG4gICAgQmFzaWNDb2xvcnNbXCJ0ZWFsXCJdID0gXCIjMDA4MDgwXCI7XG4gICAgQmFzaWNDb2xvcnNbXCJhcXVhXCJdID0gXCIjMDBGRkZGXCI7XG4gICAgQmFzaWNDb2xvcnNbXCJibHVlXCJdID0gXCIjMDAwMEZGXCI7XG4gICAgQmFzaWNDb2xvcnNbXCJuYXZ5XCJdID0gXCIjMDAwMDgwXCI7XG4gICAgQmFzaWNDb2xvcnNbXCJibGFja1wiXSA9IFwiIzAwMDAwMFwiO1xuICAgIEJhc2ljQ29sb3JzW1wiZ3JheVwiXSA9IFwiIzgwODA4MFwiO1xuICAgIEJhc2ljQ29sb3JzW1wic2lsdmVyXCJdID0gXCIjQzBDMEMwXCI7XG4gICAgQmFzaWNDb2xvcnNbXCJ3aGl0ZVwiXSA9IFwiI0ZGRkZGRlwiO1xufSkoQmFzaWNDb2xvcnMgfHwgKEJhc2ljQ29sb3JzID0ge30pKTtcbnZhciBjYWxjdWxhdGVSZ2JhID0gZnVuY3Rpb24gKGNvbG9yLCBvcGFjaXR5KSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKEJhc2ljQ29sb3JzKS5pbmNsdWRlcyhjb2xvcikpIHtcbiAgICAgICAgY29sb3IgPSBCYXNpY0NvbG9yc1tjb2xvcl07XG4gICAgfVxuICAgIGlmIChjb2xvclswXSA9PT0gXCIjXCIpIHtcbiAgICAgICAgY29sb3IgPSBjb2xvci5zbGljZSgxKTtcbiAgICB9XG4gICAgaWYgKGNvbG9yLmxlbmd0aCA9PT0gMykge1xuICAgICAgICB2YXIgcmVzXzEgPSBcIlwiO1xuICAgICAgICBjb2xvci5zcGxpdChcIlwiKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICByZXNfMSArPSBjO1xuICAgICAgICAgICAgcmVzXzEgKz0gYztcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbG9yID0gcmVzXzE7XG4gICAgfVxuICAgIHZhciByZ2JWYWx1ZXMgPSAoY29sb3IubWF0Y2goLy57Mn0vZykgfHwgW10pXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKGhleCkgeyByZXR1cm4gcGFyc2VJbnQoaGV4LCAxNik7IH0pXG4gICAgICAgIC5qb2luKFwiLCBcIik7XG4gICAgcmV0dXJuIFwicmdiYShcIiArIHJnYlZhbHVlcyArIFwiLCBcIiArIG9wYWNpdHkgKyBcIilcIjtcbn07XG5leHBvcnRzLmNhbGN1bGF0ZVJnYmEgPSBjYWxjdWxhdGVSZ2JhO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9wcm9wdHlwZXNcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NvbG9yc1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vdW5pdENvbnZlcnRlclwiKSwgZXhwb3J0cyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGVpZ2h0V2lkdGhSYWRpdXNEZWZhdWx0cyA9IGV4cG9ydHMuaGVpZ2h0V2lkdGhEZWZhdWx0cyA9IGV4cG9ydHMuc2l6ZU1hcmdpbkRlZmF1bHRzID0gZXhwb3J0cy5zaXplRGVmYXVsdHMgPSB2b2lkIDA7XG4vKlxuICogRGVmYXVsdFByb3BzIG9iamVjdCBmb3IgZGlmZmVyZW50IGxvYWRlcnNcbiAqL1xudmFyIGNvbW1vblZhbHVlcyA9IHtcbiAgICBsb2FkaW5nOiB0cnVlLFxuICAgIGNvbG9yOiBcIiMwMDAwMDBcIixcbiAgICBjc3M6IFwiXCIsXG4gICAgc3BlZWRNdWx0aXBsaWVyOiAxXG59O1xuZnVuY3Rpb24gc2l6ZURlZmF1bHRzKHNpemVWYWx1ZSkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25WYWx1ZXMsIHsgc2l6ZTogc2l6ZVZhbHVlIH0pO1xufVxuZXhwb3J0cy5zaXplRGVmYXVsdHMgPSBzaXplRGVmYXVsdHM7XG5mdW5jdGlvbiBzaXplTWFyZ2luRGVmYXVsdHMoc2l6ZVZhbHVlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHNpemVEZWZhdWx0cyhzaXplVmFsdWUpLCB7XG4gICAgICAgIG1hcmdpbjogMlxuICAgIH0pO1xufVxuZXhwb3J0cy5zaXplTWFyZ2luRGVmYXVsdHMgPSBzaXplTWFyZ2luRGVmYXVsdHM7XG5mdW5jdGlvbiBoZWlnaHRXaWR0aERlZmF1bHRzKGhlaWdodCwgd2lkdGgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uVmFsdWVzLCB7XG4gICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICB3aWR0aDogd2lkdGhcbiAgICB9KTtcbn1cbmV4cG9ydHMuaGVpZ2h0V2lkdGhEZWZhdWx0cyA9IGhlaWdodFdpZHRoRGVmYXVsdHM7XG5mdW5jdGlvbiBoZWlnaHRXaWR0aFJhZGl1c0RlZmF1bHRzKGhlaWdodCwgd2lkdGgsIHJhZGl1cykge1xuICAgIGlmIChyYWRpdXMgPT09IHZvaWQgMCkgeyByYWRpdXMgPSAyOyB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGhlaWdodFdpZHRoRGVmYXVsdHMoaGVpZ2h0LCB3aWR0aCksIHtcbiAgICAgICAgcmFkaXVzOiByYWRpdXMsXG4gICAgICAgIG1hcmdpbjogMlxuICAgIH0pO1xufVxuZXhwb3J0cy5oZWlnaHRXaWR0aFJhZGl1c0RlZmF1bHRzID0gaGVpZ2h0V2lkdGhSYWRpdXNEZWZhdWx0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jc3NWYWx1ZSA9IGV4cG9ydHMucGFyc2VMZW5ndGhBbmRVbml0ID0gdm9pZCAwO1xudmFyIGNzc1VuaXQgPSB7XG4gICAgY206IHRydWUsXG4gICAgbW06IHRydWUsXG4gICAgaW46IHRydWUsXG4gICAgcHg6IHRydWUsXG4gICAgcHQ6IHRydWUsXG4gICAgcGM6IHRydWUsXG4gICAgZW06IHRydWUsXG4gICAgZXg6IHRydWUsXG4gICAgY2g6IHRydWUsXG4gICAgcmVtOiB0cnVlLFxuICAgIHZ3OiB0cnVlLFxuICAgIHZoOiB0cnVlLFxuICAgIHZtaW46IHRydWUsXG4gICAgdm1heDogdHJ1ZSxcbiAgICBcIiVcIjogdHJ1ZVxufTtcbi8qKlxuICogSWYgc2l6ZSBpcyBhIG51bWJlciwgYXBwZW5kIHB4IHRvIHRoZSB2YWx1ZSBhcyBkZWZhdWx0IHVuaXQuXG4gKiBJZiBzaXplIGlzIGEgc3RyaW5nLCB2YWxpZGF0ZSBhZ2FpbnN0IGxpc3Qgb2YgdmFsaWQgdW5pdHMuXG4gKiBJZiB1bml0IGlzIHZhbGlkLCByZXR1cm4gc2l6ZSBhcyBpcy5cbiAqIElmIHVuaXQgaXMgaW52YWxpZCwgY29uc29sZSB3YXJuIGlzc3VlLCByZXBsYWNlIHdpdGggcHggYXMgdGhlIHVuaXQuXG4gKlxuICogQHBhcmFtIHsobnVtYmVyIHwgc3RyaW5nKX0gc2l6ZVxuICogQHJldHVybiB7TGVuZ3RoT2JqZWN0fSBMZW5ndGhPYmplY3RcbiAqL1xuZnVuY3Rpb24gcGFyc2VMZW5ndGhBbmRVbml0KHNpemUpIHtcbiAgICBpZiAodHlwZW9mIHNpemUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBzaXplLFxuICAgICAgICAgICAgdW5pdDogXCJweFwiXG4gICAgICAgIH07XG4gICAgfVxuICAgIHZhciB2YWx1ZTtcbiAgICB2YXIgdmFsdWVTdHJpbmcgPSAoc2l6ZS5tYXRjaCgvXlswLTkuXSovKSB8fCBcIlwiKS50b1N0cmluZygpO1xuICAgIGlmICh2YWx1ZVN0cmluZy5pbmNsdWRlcyhcIi5cIikpIHtcbiAgICAgICAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlU3RyaW5nKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhbHVlID0gcGFyc2VJbnQodmFsdWVTdHJpbmcsIDEwKTtcbiAgICB9XG4gICAgdmFyIHVuaXQgPSAoc2l6ZS5tYXRjaCgvW14wLTldKiQvKSB8fCBcIlwiKS50b1N0cmluZygpO1xuICAgIGlmIChjc3NVbml0W3VuaXRdKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICB1bml0OiB1bml0XG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnNvbGUud2FybihcIlJlYWN0IFNwaW5uZXJzOiBcIiArIHNpemUgKyBcIiBpcyBub3QgYSB2YWxpZCBjc3MgdmFsdWUuIERlZmF1bHRpbmcgdG8gXCIgKyB2YWx1ZSArIFwicHguXCIpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgdW5pdDogXCJweFwiXG4gICAgfTtcbn1cbmV4cG9ydHMucGFyc2VMZW5ndGhBbmRVbml0ID0gcGFyc2VMZW5ndGhBbmRVbml0O1xuLyoqXG4gKiBUYWtlIHZhbHVlIGFzIGFuIGlucHV0IGFuZCByZXR1cm4gdmFsaWQgY3NzIHZhbHVlXG4gKlxuICogQHBhcmFtIHsobnVtYmVyIHwgc3RyaW5nKX0gdmFsdWVcbiAqIEByZXR1cm4ge3N0cmluZ30gdmFsaWQgY3NzIHZhbHVlXG4gKi9cbmZ1bmN0aW9uIGNzc1ZhbHVlKHZhbHVlKSB7XG4gICAgdmFyIGxlbmd0aFdpdGh1bml0ID0gcGFyc2VMZW5ndGhBbmRVbml0KHZhbHVlKTtcbiAgICByZXR1cm4gXCJcIiArIGxlbmd0aFdpdGh1bml0LnZhbHVlICsgbGVuZ3RoV2l0aHVuaXQudW5pdDtcbn1cbmV4cG9ydHMuY3NzVmFsdWUgPSBjc3NWYWx1ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TeW5jTG9hZGVyID0gZXhwb3J0cy5TcXVhcmVMb2FkZXIgPSBleHBvcnRzLlNrZXdMb2FkZXIgPSBleHBvcnRzLlNjYWxlTG9hZGVyID0gZXhwb3J0cy5Sb3RhdGVMb2FkZXIgPSBleHBvcnRzLlJpc2VMb2FkZXIgPSBleHBvcnRzLlJpbmdMb2FkZXIgPSBleHBvcnRzLlB1ZmZMb2FkZXIgPSBleHBvcnRzLlB1bHNlTG9hZGVyID0gZXhwb3J0cy5Qcm9wYWdhdGVMb2FkZXIgPSBleHBvcnRzLlBhY21hbkxvYWRlciA9IGV4cG9ydHMuTW9vbkxvYWRlciA9IGV4cG9ydHMuSGFzaExvYWRlciA9IGV4cG9ydHMuR3JpZExvYWRlciA9IGV4cG9ydHMuRmFkZUxvYWRlciA9IGV4cG9ydHMuRG90TG9hZGVyID0gZXhwb3J0cy5DbG9ja0xvYWRlciA9IGV4cG9ydHMuQ2xpcExvYWRlciA9IGV4cG9ydHMuQ2xpbWJpbmdCb3hMb2FkZXIgPSBleHBvcnRzLkNpcmNsZUxvYWRlciA9IGV4cG9ydHMuQm91bmNlTG9hZGVyID0gZXhwb3J0cy5CZWF0TG9hZGVyID0gZXhwb3J0cy5CYXJMb2FkZXIgPSB2b2lkIDA7XG52YXIgQmFyTG9hZGVyXzEgPSByZXF1aXJlKFwiLi9CYXJMb2FkZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJCYXJMb2FkZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0RGVmYXVsdChCYXJMb2FkZXJfMSkuZGVmYXVsdDsgfSB9KTtcbnZhciBCZWF0TG9hZGVyXzEgPSByZXF1aXJlKFwiLi9CZWF0TG9hZGVyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQmVhdExvYWRlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnREZWZhdWx0KEJlYXRMb2FkZXJfMSkuZGVmYXVsdDsgfSB9KTtcbnZhciBCb3VuY2VMb2FkZXJfMSA9IHJlcXVpcmUoXCIuL0JvdW5jZUxvYWRlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkJvdW5jZUxvYWRlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnREZWZhdWx0KEJvdW5jZUxvYWRlcl8xKS5kZWZhdWx0OyB9IH0pO1xudmFyIENpcmNsZUxvYWRlcl8xID0gcmVxdWlyZShcIi4vQ2lyY2xlTG9hZGVyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ2lyY2xlTG9hZGVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydERlZmF1bHQoQ2lyY2xlTG9hZGVyXzEpLmRlZmF1bHQ7IH0gfSk7XG52YXIgQ2xpbWJpbmdCb3hMb2FkZXJfMSA9IHJlcXVpcmUoXCIuL0NsaW1iaW5nQm94TG9hZGVyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ2xpbWJpbmdCb3hMb2FkZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0RGVmYXVsdChDbGltYmluZ0JveExvYWRlcl8xKS5kZWZhdWx0OyB9IH0pO1xudmFyIENsaXBMb2FkZXJfMSA9IHJlcXVpcmUoXCIuL0NsaXBMb2FkZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJDbGlwTG9hZGVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydERlZmF1bHQoQ2xpcExvYWRlcl8xKS5kZWZhdWx0OyB9IH0pO1xudmFyIENsb2NrTG9hZGVyXzEgPSByZXF1aXJlKFwiLi9DbG9ja0xvYWRlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkNsb2NrTG9hZGVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydERlZmF1bHQoQ2xvY2tMb2FkZXJfMSkuZGVmYXVsdDsgfSB9KTtcbnZhciBEb3RMb2FkZXJfMSA9IHJlcXVpcmUoXCIuL0RvdExvYWRlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkRvdExvYWRlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnREZWZhdWx0KERvdExvYWRlcl8xKS5kZWZhdWx0OyB9IH0pO1xudmFyIEZhZGVMb2FkZXJfMSA9IHJlcXVpcmUoXCIuL0ZhZGVMb2FkZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJGYWRlTG9hZGVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydERlZmF1bHQoRmFkZUxvYWRlcl8xKS5kZWZhdWx0OyB9IH0pO1xudmFyIEdyaWRMb2FkZXJfMSA9IHJlcXVpcmUoXCIuL0dyaWRMb2FkZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJHcmlkTG9hZGVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydERlZmF1bHQoR3JpZExvYWRlcl8xKS5kZWZhdWx0OyB9IH0pO1xudmFyIEhhc2hMb2FkZXJfMSA9IHJlcXVpcmUoXCIuL0hhc2hMb2FkZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJIYXNoTG9hZGVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydERlZmF1bHQoSGFzaExvYWRlcl8xKS5kZWZhdWx0OyB9IH0pO1xudmFyIE1vb25Mb2FkZXJfMSA9IHJlcXVpcmUoXCIuL01vb25Mb2FkZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJNb29uTG9hZGVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydERlZmF1bHQoTW9vbkxvYWRlcl8xKS5kZWZhdWx0OyB9IH0pO1xudmFyIFBhY21hbkxvYWRlcl8xID0gcmVxdWlyZShcIi4vUGFjbWFuTG9hZGVyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUGFjbWFuTG9hZGVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydERlZmF1bHQoUGFjbWFuTG9hZGVyXzEpLmRlZmF1bHQ7IH0gfSk7XG52YXIgUHJvcGFnYXRlTG9hZGVyXzEgPSByZXF1aXJlKFwiLi9Qcm9wYWdhdGVMb2FkZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJQcm9wYWdhdGVMb2FkZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0RGVmYXVsdChQcm9wYWdhdGVMb2FkZXJfMSkuZGVmYXVsdDsgfSB9KTtcbnZhciBQdWxzZUxvYWRlcl8xID0gcmVxdWlyZShcIi4vUHVsc2VMb2FkZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJQdWxzZUxvYWRlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnREZWZhdWx0KFB1bHNlTG9hZGVyXzEpLmRlZmF1bHQ7IH0gfSk7XG52YXIgUHVmZkxvYWRlcl8xID0gcmVxdWlyZShcIi4vUHVmZkxvYWRlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlB1ZmZMb2FkZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0RGVmYXVsdChQdWZmTG9hZGVyXzEpLmRlZmF1bHQ7IH0gfSk7XG52YXIgUmluZ0xvYWRlcl8xID0gcmVxdWlyZShcIi4vUmluZ0xvYWRlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJpbmdMb2FkZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0RGVmYXVsdChSaW5nTG9hZGVyXzEpLmRlZmF1bHQ7IH0gfSk7XG52YXIgUmlzZUxvYWRlcl8xID0gcmVxdWlyZShcIi4vUmlzZUxvYWRlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJpc2VMb2FkZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0RGVmYXVsdChSaXNlTG9hZGVyXzEpLmRlZmF1bHQ7IH0gfSk7XG52YXIgUm90YXRlTG9hZGVyXzEgPSByZXF1aXJlKFwiLi9Sb3RhdGVMb2FkZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSb3RhdGVMb2FkZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0RGVmYXVsdChSb3RhdGVMb2FkZXJfMSkuZGVmYXVsdDsgfSB9KTtcbnZhciBTY2FsZUxvYWRlcl8xID0gcmVxdWlyZShcIi4vU2NhbGVMb2FkZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJTY2FsZUxvYWRlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnREZWZhdWx0KFNjYWxlTG9hZGVyXzEpLmRlZmF1bHQ7IH0gfSk7XG52YXIgU2tld0xvYWRlcl8xID0gcmVxdWlyZShcIi4vU2tld0xvYWRlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlNrZXdMb2FkZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0RGVmYXVsdChTa2V3TG9hZGVyXzEpLmRlZmF1bHQ7IH0gfSk7XG52YXIgU3F1YXJlTG9hZGVyXzEgPSByZXF1aXJlKFwiLi9TcXVhcmVMb2FkZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJTcXVhcmVMb2FkZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0RGVmYXVsdChTcXVhcmVMb2FkZXJfMSkuZGVmYXVsdDsgfSB9KTtcbnZhciBTeW5jTG9hZGVyXzEgPSByZXF1aXJlKFwiLi9TeW5jTG9hZGVyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiU3luY0xvYWRlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnREZWZhdWx0KFN5bmNMb2FkZXJfMSkuZGVmYXVsdDsgfSB9KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=