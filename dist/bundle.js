/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/assets/styles/scss/styles.scss":
/*!*********************************************!*\
  !*** ./dist/assets/styles/scss/styles.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./dist/assets/styles/scss/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./dist/index.html":
/*!*************************!*\
  !*** ./dist/index.html ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>SPA project</title>\n</head>\n<body>\n  <header>\n    <nav class=\"main__nav\" id=\"js-main-nav\"></nav>\n  </header>\n\n  <div id=\"appContent-wrapper\" style=\"display: none;\">\n\n    <div class=\"homepage-wrapper\" id=\"js-homepage\"></div>\n  \n    <div class=\"productPage-wrapper\" id=\"js-catalogue-page\">\n      <div class=\"prodcutPage__content\">\n          <div class=\"productPage__filter\" id=\"js-catalogue-filter\"></div>\n          <div class=\"productPage__catalogue\" id=\"js-catalogue\"></div>\n      </div>\n    </div>\n  \n    <div class=\"aboutPage-wrapper\" id=\"js-about-page\">\n      <div class=\"aboutPage__info\">About info</div>\n      <div class=\"aboutPage__photos\">About photo</div>\n    </div>\n  \n    <div class=\"contactPage-wrapper\" id=\"js-contact-page\">\n      <div class=\"contactPage__info\">Contact info</div>\n      <div class=\"contactPage__photos\">Contact photo</div>\n    </div>\n  \n    <div class=\"cartPage-wrapper\" id=\"js-cart-page\">\n      <div class=\"cartPage__content\">\n        <div class=\"cartPage__cart_order\" id=\"js-order-card\"></div>\n        <div class=\"cartPage__cart_wrapper\"></div>\n      </div>\n    </div>\n  \n    <div class=\"errorPage-wrapper\" id=\"js-error-page\">\n      <div class=\"errorPage__content\">Error</div>\n    </div>\n  \n    <div class=\"singlePage-wrapper\" id=\"js-single-page\"></div>\n\n    <div class=\"authPage-wrapper\" id=\"js-auth-page\"></div>\n  \n  \n  </div>\n  <script src=\"/bundle.js\"></script>\n</body>\n</html>\n";

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./dist/assets/styles/scss/styles.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./dist/assets/styles/scss/styles.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "button {\n  cursor: pointer;\n  border-top-style: none;\n  color: #21243d;\n  background-color: #ff7c7c;\n  margin: 10px 0px;\n  font-size: 1rem;\n  padding: 5px 10px;\n  border: none;\n  border-radius: 15px;\n  font-weight: bold; }\n  button:active {\n    border: none; }\n  button:hover {\n    border: none;\n    background-color: #88e1f2;\n    transform: scale(1.1); }\n\nbody {\n  max-width: 1320px;\n  position: relative;\n  margin: 0 auto; }\n\n.nav__wrapper {\n  margin-top: 0px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  color: white;\n  font-weight: bold; }\n\n.main__nav {\n  background-color: #21243d; }\n  .main__nav ul {\n    display: flex;\n    margin: 5px; }\n    @media screen and (max-width: 600px) {\n      .main__nav ul {\n        display: block;\n        padding: 0px 5px;\n        position: relative; } }\n  .main__nav li {\n    flex: 1 1 0;\n    display: block;\n    padding: 0px 10px;\n    list-style-type: none;\n    cursor: pointer; }\n    .main__nav li:hover {\n      background-color: #33385e; }\n    @media screen and (max-width: 600px) {\n      .main__nav li {\n        padding: 0px 5px; } }\n\n.nav__link_cart {\n  background-color: white;\n  border-radius: 20px;\n  margin-right: 20px;\n  width: 20px;\n  margin: 1px;\n  height: 20px;\n  padding: 5px 20px; }\n  @media screen and (max-width: 600px) {\n    .nav__link_cart {\n      position: absolute;\n      right: 2%;\n      top: 20%; } }\n\n.prodcutPage__content {\n  display: flex;\n  justify-content: space-around; }\n  @media screen and (max-width: 600px) {\n    .prodcutPage__content {\n      display: block;\n      justify-content: center; } }\n\n.productPage__catalogue {\n  flex: 1 0 68%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  align-content: flex-start; }\n\n.productPage__filter {\n  flex: 0 0 20%;\n  display: flex;\n  flex-flow: column nowrap;\n  padding: 5px;\n  width: auto; }\n  @media screen and (max-width: 600px) {\n    .productPage__filter {\n      flex: 0 0 95%; } }\n\n.catalogue__item {\n  cursor: pointer;\n  margin: 10px;\n  display: flex;\n  flex-direction: column;\n  font-size: 0.8rem;\n  text-align: center;\n  position: relative;\n  flex: 0 0 210px;\n  box-shadow: 9px 11px 20px -7px #596157; }\n  .catalogue__item img {\n    max-width: 100%;\n    margin: 10px auto;\n    height: 160px;\n    padding-top: 3%; }\n  @media screen and (max-width: 600px) {\n    .catalogue__item {\n      flex: 100 95%;\n      width: 100%; } }\n\n.catalogue__item_imgwrap {\n  text-align: center; }\n\n.catalogue__item_name {\n  font-weight: bold;\n  font-size: 0.8rem; }\n\n.catalogue__item_info {\n  margin-top: auto;\n  font-weight: bold; }\n\n.catalogue__item_price {\n  color: #ff7c7c;\n  font-size: 1.2rem;\n  margin: 0; }\n\n.filter__group_label, .cart__details_label {\n  color: white;\n  background-color: #21243d;\n  padding: 5px 15px;\n  font-weight: bold;\n  cursor: pointer;\n  margin: 5px 0px; }\n  .filter__group_label:hover, .cart__details_label:hover {\n    background-color: #33385e; }\n\n.filter__group_content {\n  padding-left: 5px;\n  font-size: 0.8rem; }\n\n.filter__group_checkbox {\n  background-color: white; }\n\n.cart__item_image {\n  height: 100px; }\n\n.cartPage__content {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  padding: 10px; }\n  @media screen and (max-width: 600px) {\n    .cartPage__content {\n      display: block;\n      position: relative;\n      width: 90%; } }\n\n.cartPage__cart_wrapper {\n  flex: 0 0 60%;\n  border: 1px solid green; }\n\n.cartPage__cart_order {\n  flex: 0 0 30%;\n  border: 1px solid red;\n  align-self: flex-start;\n  height: auto; }\n\n.cart__item_wrapper {\n  flex: 0 0 60%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  align-items: center;\n  margin: 5%;\n  padding-top: 2%;\n  box-shadow: 9px 11px 20px -7px #596157; }\n  @media screen and (max-width: 600px) {\n    .cart__item_wrapper {\n      display: block;\n      text-align: center; } }\n\n.cart__item_details {\n  flex: 0 0 200px;\n  cursor: pointer;\n  margin: 10px;\n  display: flex;\n  flex-direction: column;\n  font-size: 0.8rem;\n  text-align: center; }\n  .cart__item_details img {\n    max-width: 100%;\n    margin: 10px auto;\n    height: 160px;\n    padding-top: 3%; }\n\n.cart__item_input {\n  flex: 0 1 20%;\n  height: auto;\n  display: flex;\n  flex-flow: column nowrap; }\n  .cart__item_input input {\n    margin: 5%;\n    align-self: flex-end; }\n    @media screen and (max-width: 600px) {\n      .cart__item_input input {\n        margin: 2px; } }\n\n.singlePage-wrapper {\n  padding: 10px; }\n\n.singlePage__content {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  box-shadow: 9px 11px 20px -7px #596157; }\n  @media screen and (max-width: 600px) {\n    .singlePage__content {\n      display: block; } }\n\n.singlePage__content_main {\n  cursor: pointer;\n  margin: 10px;\n  display: flex;\n  flex-direction: column;\n  font-size: 0.8rem;\n  text-align: center;\n  flex: 0 0 40% x;\n  align-self: flex-start; }\n  .singlePage__content_main img {\n    max-width: 100%;\n    margin: 10px auto;\n    height: 160px;\n    padding-top: 3%; }\n\n.singlePage_content_info {\n  flex: 0 1 50%;\n  padding: 10px; }\n\n.authPage-wrapper {\n  border: 1px solid green; }\n\n.auth__form_wrapper {\n  width: 70%;\n  margin: 10% auto;\n  box-sizing: border-box; }\n  .auth__form_wrapper ul {\n    cursor: pointer;\n    display: flex;\n    justify-content: flex-start; }\n  .auth__form_wrapper li {\n    flex: 1 1 auto;\n    list-style: none; }\n  .auth__form_wrapper form label, .auth__form_wrapper form input, .auth__form_wrapper form button {\n    display: block; }\n  .auth__form_wrapper form label {\n    background-color: #ffd082; }\n  .auth__form_wrapper form input {\n    width: 99%; }\n  .auth__form_wrapper form button {\n    margin: 5px auto; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/webpack/hot/dev-server.js":
/*!***********************************!*\
  !*** (webpack)/hot/dev-server.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/*globals window __webpack_hash__ */
if (false) { var hotEmitter, check, log, upToDate, lastHash; } else {
	throw new Error("[HMR] Hot Module Replacement is disabled.");
}


/***/ }),

/***/ "./src/components/authComponents/login.js":
/*!************************************************!*\
  !*** ./src/components/authComponents/login.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates.js */ "./src/components/templates.js");


function initAuthForms(formContainer) {
  var formLinks = formContainer.querySelector('ul');
  var forms = formContainer.querySelectorAll('form');
  formLinks.addEventListener('click', function (e) {
    var formId = "".concat(e.target.id.split('link')[0], "form");
    forms.forEach(function (form) {
      form.style.display = form.id === formId ? 'block' : 'none';
    });
  });
}

function renderAuthForms() {
  var authFormsContainer = document.getElementById('js-auth-page');
  authFormsContainer.insertAdjacentHTML('beforeend', Object(_templates_js__WEBPACK_IMPORTED_MODULE_0__["FORM_TEMPLATE"])());
  initAuthForms(authFormsContainer);
}

/* harmony default export */ __webpack_exports__["default"] = (renderAuthForms);

/***/ }),

/***/ "./src/components/cartComponents/cart.js":
/*!***********************************************!*\
  !*** ./src/components/cartComponents/cart.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates.js */ "./src/components/templates.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Cart =
/*#__PURE__*/
function () {
  function Cart() {
    _classCallCheck(this, Cart);

    this.cartPageContent = document.querySelector('.cartPage__content');
    this.cartWrapper = document.querySelector('.cartPage__cart_wrapper');

    if (Cart.instance) {
      return Cart.instance;
    }

    Cart.instance = this;
  }

  _createClass(Cart, [{
    key: "init",
    value: function init(data, products) {
      var _this = this;

      this.resetCart();

      if (data) {
        Object.keys(data).forEach(function (id) {
          return _this.makeCartItemCard(id, data[id], products);
        });
      }

      this.cartPageContent.appendChild(this.cartWrapper);
    }
  }, {
    key: "makeCartItemCard",
    value: function makeCartItemCard(productId, value, products) {
      var product = products.find(function (item) {
        return String(item.id) === productId;
      });

      if (product) {
        var id = product.id,
            numberAvailable = product.numberAvailable,
            image = product.image,
            name = product.name,
            price = product.price;
        this.cartWrapper.insertAdjacentHTML('beforeend', Object(_templates_js__WEBPACK_IMPORTED_MODULE_0__["CART_ITEM_TEMPLATE"])(id, value, numberAvailable, image, name, price));
      }
    }
  }, {
    key: "resetCart",
    value: function resetCart() {
      var cartItem = document.querySelectorAll('.cart__item_wrapper');
      cartItem.forEach(function (item) {
        return item.remove();
      });
    }
  }]);

  return Cart;
}();

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ }),

/***/ "./src/components/cartComponents/order.js":
/*!************************************************!*\
  !*** ./src/components/cartComponents/order.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates.js */ "./src/components/templates.js");


function renderOrderCard() {
  var orderCardContainer = document.getElementById('js-order-card');
  orderCardContainer.insertAdjacentHTML('beforeend', Object(_templates_js__WEBPACK_IMPORTED_MODULE_0__["CARD_ORDER_TEMPLATE"])());
}

/* harmony default export */ __webpack_exports__["default"] = (renderOrderCard);

/***/ }),

/***/ "./src/components/catalogueComponents/catalogue.js":
/*!*********************************************************!*\
  !*** ./src/components/catalogueComponents/catalogue.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates.js */ "./src/components/templates.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



function renderCatalogueItem(product) {
  var catalogueContainer = document.getElementById('js-catalogue');
  var id = product.id,
      image = product.image,
      name = product.name,
      price = product.price;
  var catalogueItem = Object(_templates_js__WEBPACK_IMPORTED_MODULE_0__["CATALOGUE_ITEM_TEMPLATE"])(id, image, name, price);
  catalogueContainer.insertAdjacentHTML('beforeend', catalogueItem);
}

function makeCatalogueItemsClickable(render) {
  var catalogueCards = document.querySelectorAll('.catalogue__item');
  catalogueCards.forEach(function (card) {
    var clickableArea = card.querySelector('.catalogue__item_imgwrap');
    clickableArea.addEventListener('click', function () {
      var id = card.dataset.id;
      window.history.pushState(null, null, "/product/".concat(id));
      render(window.location.pathname);
    });
  });
}

function renderCatalogue(data, render) {
  _toConsumableArray(data).forEach(function (product) {
    renderCatalogueItem(product);
  });

  makeCatalogueItemsClickable(render);
}

/* harmony default export */ __webpack_exports__["default"] = (renderCatalogue);

/***/ }),

/***/ "./src/components/catalogueComponents/filters.js":
/*!*******************************************************!*\
  !*** ./src/components/catalogueComponents/filters.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates.js */ "./src/components/templates.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.js */ "./src/config.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var filters = _config_js__WEBPACK_IMPORTED_MODULE_1__["default"].filters;

var Filters =
/*#__PURE__*/
function () {
  function Filters() {
    _classCallCheck(this, Filters);

    this.filtersContaniner = document.getElementById('js-catalogue-filter');
    this.checkboxes = {};
  }

  _createClass(Filters, [{
    key: "drawFilters",
    value: function drawFilters(data) {
      this.drawPriceInputRange(data);
      this.buildCheckboxes(data);
      this.drawCheckboxes();
      this.drawResetButton(this.filtersContaniner);
    }
  }, {
    key: "drawPriceInputRange",
    value: function drawPriceInputRange(data) {
      var allPrices = data.map(function (_ref) {
        var price = _ref.price;
        return price;
      });
      var prices = {
        min: Math.min.apply(Math, _toConsumableArray(allPrices)),
        max: Math.max.apply(Math, _toConsumableArray(allPrices))
      };
      this.filtersContaniner.insertAdjacentHTML('beforeend', Object(_templates_js__WEBPACK_IMPORTED_MODULE_0__["PRICE_INPUT_TEMPLATE"])(prices.min, prices.max));
    }
  }, {
    key: "buildCheckboxes",
    value: function buildCheckboxes(data) {
      var _this = this;

      _toConsumableArray(data).forEach(function (product) {
        filters.forEach(function (filterBase) {
          if (product[filterBase] && !Object.prototype.hasOwnProperty.call(_this.checkboxes, filterBase)) {
            _this.checkboxes[filterBase] = [];

            _this.checkboxes[filterBase].push(product[filterBase]);
          }

          if (product[filterBase] && Object.prototype.hasOwnProperty.bind(_this.checkboxes, filterBase) && !_this.checkboxes[filterBase].includes(product[filterBase])) {
            _this.checkboxes[filterBase].push(product[filterBase]);
          }
        });
      });
    }
  }, {
    key: "drawCheckboxes",
    value: function drawCheckboxes() {
      var _this2 = this;

      var _loop = function _loop() {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        var filterGroup = document.createElement('div');
        filterGroup.setAttribute('class', 'catalogue__filter_group');
        filterGroup.insertAdjacentHTML('beforeend', "<div class=\"filter__group_label\">".concat(key.toUpperCase(), "</div>"));
        var filterGroupContent = document.createElement('div');
        filterGroupContent.setAttribute('class', 'filter__group_content');
        value.sort().forEach(function (filterValue) {
          filterGroupContent.insertAdjacentHTML('beforeend', Object(_templates_js__WEBPACK_IMPORTED_MODULE_0__["CHECKBOX_TEMPLATE"])(key, filterValue));
        });
        filterGroup.appendChild(filterGroupContent);

        _this2.initFilterGroupContent(filterGroup, filterGroupContent);

        _this2.filtersContaniner.appendChild(filterGroup);
      };

      for (var _i = 0, _Object$entries = Object.entries(this.checkboxes); _i < _Object$entries.length; _i++) {
        _loop();
      }
    }
  }, {
    key: "drawResetButton",
    value: function drawResetButton(container) {
      container.insertAdjacentHTML('afterbegin', '<button class="filter__button_reset">Reset filters</button>');
    }
  }, {
    key: "initFilterGroupContent",
    value: function initFilterGroupContent(group, content) {
      content.style.display = 'none';
      var label = group.getElementsByTagName('div')[0];
      label.addEventListener('click', function () {
        var display = content.style.display;
        content.style.display = display === 'none' ? 'block' : 'none';
      });
    }
  }]);

  return Filters;
}();

/* harmony default export */ __webpack_exports__["default"] = (Filters);

/***/ }),

/***/ "./src/components/homePageComponents/homepage.js":
/*!*******************************************************!*\
  !*** ./src/components/homePageComponents/homepage.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var HOMEPAGE_TEMPLATE = function HOMEPAGE_TEMPLATE() {
  return "\n  <div class=\"lead__banner\">\n    <img src=\"img/homepage/lead-banner.jpg\" />\n    <div class=\"banner__content\">\n      <div class=\"wrapper\">\n        <span class=\"title\">Check our video</span>\n        <span class=\"sub-title\">Learning in 6 weeks</span>\n      </div>\n    </div>\n  </div>\n  <section id=\"services\">\n      <div class=\"wrapper\">\n        <h1>Services</h1>\n        <p></p>\n        <ul>\n          <li>\n            <img src=\"img/icon-1.png\" />\n            <a href=\"#\">Recording<br />services</a>\n          </li>\n          <li>\n            <img src=\"img/icon-2.png\" />\n            <a href=\"#\">Get a printed<br />certificate</a>\n          </li>\n          <li>\n            <img src=\"img/icon-3.png\" />\n            <a href=\"#\">Lessons via<br />Skype</a>\n          </li>\n        </ul>\n      </div>\n    </section>\n    <div class=\"second__banner\">\n      <img src=\"/img/homepage/second-banner.png\" />\n      <div class=\"banner__content\">\n        <div class=\"wrapper\">\n          <span class=\"title\">Our Lessons</span>\n          <span class=\"sub-title\">Are Easy</span>\n          <ul>\n            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\n            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\n            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <section id=\"projects\">\n      <div class=\"wrapper\">\n        <h1>Our Projects</h1>\n        <ul>\n          <li><img src=\"http://placehold.it/150x150\" /></li>\n          <li><img src=\"http://placehold.it/150x150\" /></li>\n          <li><img src=\"http://placehold.it/150x150\" /></li>\n          <li><img src=\"http://placehold.it/150x150\" /></li>\n          <li><img src=\"http://placehold.it/150x150\" /></li>\n          <li><img src=\"http://placehold.it/150x150\" /></li>\n          <li><img src=\"http://placehold.it/150x150\" /></li>\n          <li><img src=\"http://placehold.it/150x150\" /></li>\n          <li><img src=\"http://placehold.it/150x150\" /></li>\n          <li><img src=\"http://placehold.it/150x150\" /></li>\n          <li><img src=\"http://placehold.it/150x150\" /></li>\n          <li><img src=\"http://placehold.it/150x150\" /></li>\n        </ul>\n      </div>\n    </section>";
};

function renderHomePage() {
  var homepage = document.getElementById('js-homepage');
  homepage.insertAdjacentHTML('beforeend', HOMEPAGE_TEMPLATE());
}

/* harmony default export */ __webpack_exports__["default"] = (renderHomePage);

/***/ }),

/***/ "./src/components/layoutComponents/navbar.js":
/*!***************************************************!*\
  !*** ./src/components/layoutComponents/navbar.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates.js */ "./src/components/templates.js");


function initNavbar(navbar, render) {
  navbar.addEventListener('click', function (e) {
    switch (e.target.className) {
      case 'nav__link_home':
        window.history.pushState(null, null, '/');
        break;

      case 'nav__link_about':
        window.history.pushState(null, null, '/about');
        break;

      case 'nav__link_catalogue':
        window.history.pushState(null, null, '/catalogue');
        break;

      case 'nav__link_contact':
        window.history.pushState(null, null, '/contact');
        break;

      case 'nav__link_cart':
        window.history.pushState(null, null, '/cart');
        break;

      case 'nav__link_login':
        window.history.pushState(null, null, '/login');
        break;

      default:
        break;
    }

    render(window.location.pathname);
  });
}

function renderNavbar(render) {
  var navbar = document.getElementById('js-main-nav');
  navbar.insertAdjacentHTML('beforeend', Object(_templates_js__WEBPACK_IMPORTED_MODULE_0__["NAVBAR_TEMPLATE"])());
  initNavbar(navbar, render);
}

/* harmony default export */ __webpack_exports__["default"] = (renderNavbar);

/***/ }),

/***/ "./src/components/singlePageComponents/singlePage.js":
/*!***********************************************************!*\
  !*** ./src/components/singlePageComponents/singlePage.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates.js */ "./src/components/templates.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var SinglePage =
/*#__PURE__*/
function () {
  function SinglePage() {
    _classCallCheck(this, SinglePage);

    this.singlePageContainer = document.getElementById('js-single-page');

    if (SinglePage.instance) {
      return SinglePage.instance;
    }

    SinglePage.instance = this;
  }

  _createClass(SinglePage, [{
    key: "drawSinglePage",
    value: function drawSinglePage(product) {
      if (product) {
        this.resetPage();
        this.singlePageContainer.insertAdjacentHTML('beforeend', Object(_templates_js__WEBPACK_IMPORTED_MODULE_0__["SINGLE_PAGE_TEMPLATE"])(product));
      }
    }
  }, {
    key: "resetPage",
    value: function resetPage() {
      var pageContent = document.querySelector('.singlePage__content');

      if (pageContent) {
        pageContent.remove();
      }
    }
  }]);

  return SinglePage;
}();

/* harmony default export */ __webpack_exports__["default"] = (SinglePage);

/***/ }),

/***/ "./src/components/templates.js":
/*!*************************************!*\
  !*** ./src/components/templates.js ***!
  \*************************************/
/*! exports provided: FORM_TEMPLATE, CARD_ORDER_TEMPLATE, CATALOGUE_ITEM_TEMPLATE, PRICE_INPUT_TEMPLATE, CHECKBOX_TEMPLATE, CART_ITEM_TEMPLATE, NAVBAR_TEMPLATE, SINGLE_PAGE_TEMPLATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_TEMPLATE", function() { return FORM_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_ORDER_TEMPLATE", function() { return CARD_ORDER_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATALOGUE_ITEM_TEMPLATE", function() { return CATALOGUE_ITEM_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRICE_INPUT_TEMPLATE", function() { return PRICE_INPUT_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKBOX_TEMPLATE", function() { return CHECKBOX_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART_ITEM_TEMPLATE", function() { return CART_ITEM_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVBAR_TEMPLATE", function() { return NAVBAR_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SINGLE_PAGE_TEMPLATE", function() { return SINGLE_PAGE_TEMPLATE; });
/* eslint-disable import/prefer-default-export */
var FORM_TEMPLATE = function FORM_TEMPLATE() {
  return "\n  <div class=\"auth__form_wrapper\">\n  <ul>\n    <li id=\"js-sign-in-link\">Sign In</li>\n    <li id=\"js-sign-up-link\">Sign Up</li>\n  </ul>\n  <form id=\"js-sign-in-form\" novalidate>\n    <label for=\"email\">Email:</label>\n    <input type=\"email\" name=\"email\">\n    <p class=\"email-error\"></p>\n    <label for=\"password\">Password:</label>\n    <input type=\"password\" name=\"password\">\n    <p class=\"password-error\"></p>\n    <button type=\"submit\">Sign in</button>\n  </form>\n  <form id=\"js-sign-up-form\" novalidate style=\"display: none;\">\n    <label for=\"namel\">Name:</label>\n    <input type=\"text\" name=\"name\">\n    <p class=\"name-error\"></p>\n    <label for=\"email\">Email:</label>\n    <input type=\"email\" name=\"email\">\n    <p class=\"email-error\"></p>\n    <label for=\"password\">Password:</label>\n    <input type=\"password\" name=\"password\">\n    <p class=\"password-error\"></p>\n    <button type=\"submit\">Sign Up</button>\n  </form>\n  </div>";
};
var CARD_ORDER_TEMPLATE = function CARD_ORDER_TEMPLATE() {
  return "\n<div class=\"cartPage__order_wrapper\">\n<div class=\"cartPage__user_info\">\n  <h3>User Info</h3>\n  <div class=\"cartPage__user_data\"></div>\n</div>\n<div>\n  <h3>Total</h3>\n  <div class=\"cartPage__total\">No items chosen</div>\n</div>\n<div>\n  <h3>Order details</h3>\n  <div class=\"cartPage__details\"></div>\n</div>\n</div>\n<div>\n  <button class=\"cartPage__order_buy\">Buy</button>\n</div>";
};
var CATALOGUE_ITEM_TEMPLATE = function CATALOGUE_ITEM_TEMPLATE(id, image, name, price) {
  return "\n<div class=\"catalogue__item\" data-id=\"".concat(id, "\">\n  <div class=\"catalogue__item_imgwrap\">\n    <img class=\"catalogue__item_photo\" src=/").concat(image, ">\n    <p class=\"catalogue__item_name\">").concat(name, "</p>\n  </div>\n  <div class=\"catalogue__item_info\">\n    <p class=\"catalogue__item_price\">").concat(price, "$</p>\n    <button class=\"catalogue__item_add\">Add to cart</button>\n  </div>\n</div>");
};
var PRICE_INPUT_TEMPLATE = function PRICE_INPUT_TEMPLATE(min, max) {
  return "\n  <div class=\"filter-group-label\">\n    <h3>PRICE:</h3>\n    <div class=\"filter__group_content\">\n      <span>".concat(min, "</span>\n      <input type=\"range\" class=\"filter__group_price\" name=\"price\" \n        value=\"").concat(max, "\" min=\"").concat(min, "\" max=\"").concat(max, "\">\n      <span>").concat(max, "</span>\n      <div class=\"filter__price_current\"><div> \n    </div>\n  </div>");
};
var CHECKBOX_TEMPLATE = function CHECKBOX_TEMPLATE(filterName, filterValue) {
  return "\n  <div class=\"filter__group_checkbox\" value=".concat(filterValue, ">\n    <label for=\"").concat(filterValue, "\">").concat(filterValue, "</label>\n    <input type=\"checkbox\" name=\"").concat(filterName, "\" value=\"").concat(filterValue, "\" />\n  </div>");
};
var CART_ITEM_TEMPLATE = function CART_ITEM_TEMPLATE(id, value, numberAvailable, image, name, price) {
  return "\n<div class=\"cart__item_wrapper\" data-id=\"".concat(id, "\">\n  <form class=\"cart__item_input\">\n    <input class=\"cart__item_quantity\" data-id=\"").concat(id, "\" type=\"number\" value=\"").concat(value, "\" min=\"1\" max=\"").concat(numberAvailable, "\"/>\n    <input type=\"checkbox\" class=\"cart__item_choose\"/>\n  </form>\n  <div class=\"cart__item_details\">\n    <img class=\"cart__item_image\" src=\"/").concat(image, "\" />\n    <h5 class=\"cart__item_name\">").concat(name, "</h5>\n    <p class=\"cart__item_price\" data-value=\"").concat(price, "\">Price: ").concat(price, "$</p>\n  </div>\n    <button class=\"cart__item_delete\" data-index=\"").concat(id, "\">Delete</button>\n  </div>");
};
var NAVBAR_TEMPLATE = function NAVBAR_TEMPLATE() {
  return "\n<div class=\"nav__wrapper\">\n  <ul>\n    <li class=\"nav__link_home\">Home</li>\n    <li class=\"nav__link_about\">About</li>\n    <li class=\"nav__link_catalogue\">Catalogue</li>\n    <li class=\"nav__link_contact\">Contact</li>\n  </ul>\n  <ul>\n    <li class=\"nav__link_login\">Log in</li>\n    <li class=\"nav__link_logout\">Log out</li>\n    <li><img class=\"nav__link_cart\" src=\"/assets/img/126083.png\"></li>\n  </ul>\n</div>";
};
var SINGLE_PAGE_TEMPLATE = function SINGLE_PAGE_TEMPLATE(product) {
  return "\n  <div class=\"singlePage__content\">\n    <div class=\"singlePage__content_main\"> \n    <div class=\"singlePage__img_container\">\n      <img class=\"singlePage_content_img\" src=\"/".concat(product.image, "\">\n    </div>\n    <h3>").concat(product.name, "</h3>\n    <h3>").concat(product.price, "$</h3>\n    <div class=\"singlePage__item_add\">\n      <button>Add to cart</button>\n    </div>\n  </div>\n\n  <div class=\"singlePage_content_info\">\n    <div class=\"singlePage_content_base\">\n      <p><b>Brand</b>: ").concat(product.brand, "</p>\n      <p><b>Manufacturer</b>: ").concat(product.manufacturer, "</p>\n      <p><b>Volume</b>: ").concat(product.volume, "</p>\n    </div>\n    <div class=\"singlePage_content_desc\">\n      <p>").concat(product.description, "</p>\n    </div>\n    <div class=\"singlePage_content_spec\">\n      <p><b>Spirit type</b>: ").concat(product['spirit type'], "</p>\n      <p><b>Category</b>: ").concat(product.category, "</p>\n      <p><b>Package</b>: ").concat(product["package"], "</p>\n    </div>\n  </div>\n  </div>\n");
};

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var CONFIG = {
  api: 'http://localhost:3000',
  routes: {
    homePage: {
      route: '/',
      contentId: 'js-homepage'
    },
    contactPage: {
      route: 'contact',
      contentId: 'js-contact-page'
    },
    aboutPage: {
      route: 'about',
      contentId: 'js-about-page'
    },
    cataloguePage: {
      route: 'catalogue',
      contentId: 'js-catalogue-page'
    },
    productPage: {
      route: 'product',
      contentId: 'js-single-page'
    },
    errorPage: {
      route: '404',
      contentId: 'js-error-page'
    },
    authPage: {
      route: 'login',
      contentId: 'js-auth-page'
    },
    cartPage: {
      route: 'cart',
      contentId: 'js-cart-page'
    }
  },
  filters: ['brand', 'volume', 'manufacturer', 'category', 'package', 'spirit type'],
  validationRules: {
    name: {
      minLen: 3,
      maxLen: 20,
      onlyNumbersAndLetters: true,
      isNotEmpty: true
    },
    email: {
      isNotEmpty: true,
      isValidEmail: true
    },
    password: {
      minLen: 6,
      maxLen: 20,
      onlyNumbersAndLetters: true,
      isNotEmpty: true
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (CONFIG);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./src/config.js");
/* harmony import */ var _dist_index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/index.html */ "./dist/index.html");
/* harmony import */ var _dist_index_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dist_index_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dist_assets_styles_scss_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dist/assets/styles/scss/styles.scss */ "./dist/assets/styles/scss/styles.scss");
/* harmony import */ var _dist_assets_styles_scss_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dist_assets_styles_scss_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _main_Router_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/Router.js */ "./src/main/Router.js");
/* harmony import */ var _main_Renderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/Renderer.js */ "./src/main/Renderer.js");
/* harmony import */ var _main_FilterService_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/FilterService.js */ "./src/main/FilterService.js");
/* harmony import */ var _main_CartService_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/CartService.js */ "./src/main/CartService.js");
/* harmony import */ var _main_CartObsever_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/CartObsever.js */ "./src/main/CartObsever.js");
/* harmony import */ var _main_FormService_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/FormService.js */ "./src/main/FormService.js");
/* harmony import */ var _main_utils_makeRequest_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/utils/makeRequest.js */ "./src/main/utils/makeRequest.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }












var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);

    this.products = [];
    this.router = new _main_Router_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.filterService = new _main_FilterService_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this.cartService = new _main_CartService_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
    this.cartObserver = new _main_CartObsever_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
    this.formService = new _main_FormService_js__WEBPACK_IMPORTED_MODULE_8__["default"](this.router);
    this.renderer = new _main_Renderer_js__WEBPACK_IMPORTED_MODULE_4__["default"](this.router, this.filterService, this.cartService, this.cartObserver);
    this.filterService.subscribe(this.onFilterChange.bind(this));
    this.cartService.subscribe(this.onCartChange.bind(this));
    this.init();
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      var _this = this;

      Object(_main_utils_makeRequest_js__WEBPACK_IMPORTED_MODULE_9__["makeRequest"])('products', 'GET').then(function (data) {
        return data.json();
      }).then(function (products) {
        _this.products = products;
      }).then(function () {
        _this.initRouter();

        _this.renderer.initApp(_this.products);

        _this.router.renderRouteContent(window.location.pathname);

        _this.filterService.init();

        _this.cartService.init();

        _this.formService.initAuthForms();

        _this.cartService.initCartInputHadlers();

        _this.cartObserver.initObserver();
      }); // .catch((error) => console.log(error.message));
    }
  }, {
    key: "initRouter",
    value: function initRouter() {
      var _this2 = this;

      Object.keys(_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].routes).forEach(function (entry) {
        var _CONFIG$routes$entry = _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].routes[entry],
            route = _CONFIG$routes$entry.route,
            contentId = _CONFIG$routes$entry.contentId;

        if (route !== _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].routes.authPage.route) {
          _this2.router.createNewRoute(route, _this2.renderer.renderPageContent.bind(_this2.renderer, contentId, _this2.products));
        } else {
          _this2.router.createNewRoute(route, function () {
            if (window.localStorage.getItem('user')) {
              var cartRoute = _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].routes.cartPage.route;
              window.history.pushState(null, null, "/".concat(cartRoute));

              _this2.router.renderRouteContent(window.location.pathname);
            } else {
              _this2.renderer.renderPageContent.call(_this2.renderer, contentId);
            }
          });
        }
      });
    }
  }, {
    key: "onFilterChange",
    value: function onFilterChange(data) {
      window.history.pushState(null, null, data);
      this.router.renderRouteContent(decodeURI(window.location.pathname));
    }
  }, {
    key: "onCartChange",
    value: function onCartChange(data) {
      if (window.location.pathname.includes(_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].routes.cataloguePage.route) || window.location.pathname.includes(_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].routes.productPage.route)) {
        window.localStorage.setItem('products', data);
        this.renderer.renderCart(this.products);
        this.cartService.initCartInputHadlers();
        this.cartObserver.initObserver();
      }
    }
  }]);

  return App;
}();

var app = new App();

/***/ }),

/***/ "./src/main/AuthService.js":
/*!*********************************!*\
  !*** ./src/main/AuthService.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AuthService =
/*#__PURE__*/
function () {
  function AuthService() {
    _classCallCheck(this, AuthService);

    this.user = {};
    this.isLoggedIn = false;
  }

  _createClass(AuthService, [{
    key: "signUserIn",
    value: function signUserIn() {
      this.user = JSON.parse(localStorage.getItem('user'));

      if (this.user) {
        this.isLoggedIn = true;
      } else {
        this.user = {};
        this.isLoggedIn = false;
      }

      this.toggleAuthOnlyContent();
    }
  }, {
    key: "signUserOut",
    value: function signUserOut() {
      this.user = {};
      this.isLoggedIn = false;
      window.localStorage.removeItem('user');
      this.toggleAuthOnlyContent();
    }
  }, {
    key: "logUserIn",
    value: function logUserIn(data) {
      localStorage.setItem('user', JSON.stringify(data));
      this.user = data;
      this.isLoggedIn = true;
      this.toggleAuthOnlyContent();
    }
  }, {
    key: "toggleAuthOnlyContent",
    value: function toggleAuthOnlyContent() {
      var logOutBtn = document.querySelector('.nav__link_logout');
      var loginLink = document.querySelector('.nav__link_login');
      var userInfo = document.querySelector('.cartPage__user_info');
      var userData = userInfo.querySelector('.cartPage__user_data');
      userData.insertAdjacentHTML('beforeend', "<p>".concat(this.user.name, "</p>\n      <p>").concat(this.user.email, "</p>"));

      if (this.isLoggedIn) {
        logOutBtn.style.display = 'block';
        loginLink.style.display = 'none';
        userInfo.style.display = 'block';
      } else {
        userData.textContent = '';
        logOutBtn.style.display = 'none';
        loginLink.style.display = 'block';
        userInfo.style.display = 'none';
      }
    }
  }]);

  return AuthService;
}();

/* harmony default export */ __webpack_exports__["default"] = (AuthService);

/***/ }),

/***/ "./src/main/CartObsever.js":
/*!*********************************!*\
  !*** ./src/main/CartObsever.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CartObserver =
/*#__PURE__*/
function () {
  function CartObserver() {
    _classCallCheck(this, CartObserver);

    this.cartOrderContainer = document.getElementById('js-order-card');
  }

  _createClass(CartObserver, [{
    key: "initObserver",
    value: function initObserver() {
      var nodesToObserve = document.querySelectorAll('.cart__item_input');

      if (nodesToObserve) {
        this.initCartCalculator();
        this.calculateTotal();
      }
    }
  }, {
    key: "initCartCalculator",
    value: function initCartCalculator() {
      var _this = this;

      var forms = document.querySelectorAll('.cart__item_input');
      var deleteBtns = document.querySelectorAll('.cart__item_delete');
      forms.forEach(function (form) {
        form.addEventListener('change', function () {
          return _this.calculateTotal();
        });
      });
      deleteBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          _this.deleteCardOrderNote(e.target.dataset.index);

          _this.calculateTotal();
        });
      });
    }
  }, {
    key: "calculateTotal",
    value: function calculateTotal() {
      var _this2 = this;

      var total = document.querySelector('.cartPage__total');
      var cartItems = document.querySelectorAll('.cart__item_wrapper');

      if (cartItems.length) {
        var priceTotal = Array.from(cartItems).reduce(function (totalSum, currentItem) {
          var flag = currentItem.querySelector('.cart__item_choose');
          var id = currentItem.dataset.id;

          if (flag.checked) {
            var name = currentItem.querySelector('.cart__item_name').textContent;
            var price = currentItem.querySelector('.cart__item_price').dataset.value;
            var quantity = currentItem.querySelector('.cart__item_quantity').value;
            totalSum += price * quantity;

            _this2.renderCartOrderDetails(id, name, quantity);
          } else {
            _this2.deleteCardOrderNote(id);
          }

          return totalSum;
        }, 0);
        total.textContent = priceTotal > 0 ? priceTotal.toFixed(2) : 'No items chosen';
      } else {
        total.textContent = 'No items chosen';
      }
    }
  }, {
    key: "renderCartOrderDetails",
    value: function renderCartOrderDetails(id, name, quantity) {
      var cartDetails = document.querySelector('.cartPage__details');

      if (cartDetails.children) {
        var found = Array.from(cartDetails.children).find(function (item) {
          return Number(item.id) === Number(id);
        });

        if (found) {
          found.textContent = "".concat(name, " : ").concat(quantity);
          return;
        }
      }

      var details = document.createElement('div');
      details.setAttribute('id', id);
      details.textContent = "".concat(name, " : ").concat(quantity);
      cartDetails.appendChild(details);
    }
  }, {
    key: "deleteCardOrderNote",
    value: function deleteCardOrderNote(id) {
      var cartDetails = document.querySelector('.cartPage__details');
      var found = Array.from(cartDetails.children).find(function (item) {
        return Number(item.id) === Number(id);
      });

      if (found) {
        found.remove();
      }
    }
  }]);

  return CartObserver;
}();

/* harmony default export */ __webpack_exports__["default"] = (CartObserver);

/***/ }),

/***/ "./src/main/CartService.js":
/*!*********************************!*\
  !*** ./src/main/CartService.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observable.js */ "./src/main/Observable.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var CartService =
/*#__PURE__*/
function () {
  function CartService() {
    _classCallCheck(this, CartService);

    this.carts = [];
    this.productsInCart = {};
    this.observable = new _Observable_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.init();
  }

  _createClass(CartService, [{
    key: "subscribe",
    value: function subscribe(fn) {
      this.observable.subscribe(fn);
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      this.carts = document.querySelectorAll('.catalogue__item_add');
      this.carts.forEach(function (cart) {
        cart.addEventListener('click', function (e) {
          var itemId = e.target.closest('.catalogue__item').dataset.id;

          _this.addProductToCart(itemId);
        });
      });
      this.initProductCart();
      this.initCartInputHadlers();
    }
  }, {
    key: "initProductCart",
    value: function initProductCart() {
      this.productsInCart = JSON.parse(window.localStorage.getItem('products')) || {};
    }
  }, {
    key: "updateLocalStorage",
    value: function updateLocalStorage() {
      window.localStorage.setItem('products', JSON.stringify(this.productsInCart));
      this.observable.next(JSON.stringify(this.productsInCart));
    }
  }, {
    key: "deleteProductFromCart",
    value: function deleteProductFromCart(e) {
      var index = e.target.dataset.index;
      delete this.productsInCart[index];
      e.target.closest('.cart__item_wrapper').remove();
      this.updateLocalStorage();
    }
  }, {
    key: "addProductToCart",
    value: function addProductToCart(itemId) {
      if (!Object.prototype.hasOwnProperty.call(this.productsInCart, itemId)) {
        this.productsInCart[itemId] = 1;
      } else {
        this.productsInCart[itemId] += 1;
      }

      this.updateLocalStorage();
    }
  }, {
    key: "initCartInputHadlers",
    value: function initCartInputHadlers() {
      this.initDeleteButtons();
      this.initCartNumberInput();
    }
  }, {
    key: "initDeleteButtons",
    value: function initDeleteButtons() {
      var _this2 = this;

      var deleteButtons = document.querySelectorAll('.cart__item_delete');
      deleteButtons.forEach(function (button) {
        button.addEventListener('click', function (e) {
          return _this2.deleteProductFromCart(e);
        });
      });
    }
  }, {
    key: "initCartNumberInput",
    value: function initCartNumberInput() {
      var _this3 = this;

      var numberInputs = document.querySelectorAll('.cart__item_quantity');
      numberInputs.forEach(function (input) {
        input.addEventListener('change', function (e) {
          if (Number(e.target.value) < 1) {
            e.target.value = 1;
          }

          if (Number(e.target.value) > Number(e.target.max)) {
            e.target.value = e.target.max;
          }

          var id = e.target.dataset.id;
          _this3.productsInCart[id] = Number(e.target.value);

          _this3.updateLocalStorage();
        });
      });
    }
  }]);

  return CartService;
}();

/* harmony default export */ __webpack_exports__["default"] = (CartService);

/***/ }),

/***/ "./src/main/FilterService.js":
/*!***********************************!*\
  !*** ./src/main/FilterService.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observable.js */ "./src/main/Observable.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var FilterService =
/*#__PURE__*/
function () {
  function FilterService() {
    _classCallCheck(this, FilterService);

    this.checkboxes = [];
    this.priceInput = null;
    this.resetFiltersBtn = null;
    this.filters = {};
    this.observable = new _Observable_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  _createClass(FilterService, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.checkboxes = document.querySelectorAll('.filter__group_checkbox input');
      this.resetFiltersBtn = document.querySelector('.filter__button_reset');
      this.priceInput = document.querySelector('.filter__group_price');
      this.resetFiltersBtn.addEventListener('click', function () {
        _this.resetFilters();
      });
      this.priceInput.addEventListener('change', function (e) {
        _this.onInputRangeChange(e.target.value);

        _this.handleFilterChange();

        var currentVal = document.querySelector('.filter__price_current');
        currentVal.textContent = e.target.value;
      });
      this.checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function (e) {
          if (e.target.checked) {
            _this.onCheckBoxChecked(e.target.name, e.target.value);
          } else {
            _this.onCheckBoxUnChecked(e.target.name, e.target.value);
          }

          _this.handleFilterChange();
        });
      });
      this.getFilters();
      this.initFilters();
    }
  }, {
    key: "subscribe",
    value: function subscribe(fn) {
      this.observable.subscribe(fn);
    }
  }, {
    key: "initFilters",
    value: function initFilters() {
      var _this2 = this;

      if (Object.keys(this.filters).length) {
        this.checkboxes.forEach(function (filter) {
          if (_this2.filters[filter.name] && _this2.filters[filter.name].includes(filter.value)) {
            filter.checked = true;
            var container = filter.closest('.filter__group_content');
            container.style.display = 'block';
          }
        });
      }

      if (this.filters.price) {
        this.priceInput.value = this.filters.price;
        var currentVal = document.querySelector('.filter__price_current');
        currentVal.textContent = this.filters.price;
      }
    }
  }, {
    key: "resetFilters",
    value: function resetFilters() {
      this.filters = {};
      this.handleFilterChange();
      this.checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
      });
      this.priceInput.value = this.priceInput.max;
    }
  }, {
    key: "getFilters",
    value: function getFilters() {
      var filtersString = decodeURI(window.location.search);
      var filters = filtersString.replace('?', '').split('&').filter(Boolean).reduce(function (filterObject, currenFilterValue) {
        var _currenFilterValue$sp = currenFilterValue.split('='),
            _currenFilterValue$sp2 = _slicedToArray(_currenFilterValue$sp, 2),
            filterBase = _currenFilterValue$sp2[0],
            filterValue = _currenFilterValue$sp2[1];

        if (!Object.prototype.hasOwnProperty.call(filterObject, filterBase)) {
          filterObject[filterBase] = [];
        }

        filterObject[filterBase].push(filterValue);
        return filterObject;
      }, {});
      this.filters = filters;
      return this.filters;
    }
  }, {
    key: "onInputRangeChange",
    value: function onInputRangeChange(value) {
      this.filters.price = [value];
    }
  }, {
    key: "onCheckBoxChecked",
    value: function onCheckBoxChecked(name, value) {
      if (!this.filters[name]) {
        this.filters[name] = [];
      }

      if (this.filters[name] && !this.filters[name].includes(value)) {
        this.filters[name].push(value);
      }
    }
  }, {
    key: "onCheckBoxUnChecked",
    value: function onCheckBoxUnChecked(name, value) {
      if (this.filters[name] && this.filters[name].includes(value)) {
        var index = this.filters[name].indexOf(value);
        this.filters[name].splice(index, 1);
      }

      if (this.filters[name] && this.filters[name].length < 1) {
        delete this.filters[name];
      }
    }
  }, {
    key: "handleFilterChange",
    value: function handleFilterChange() {
      var query = this.createQuery();

      if (!Object.keys(this.filters).length) {
        this.observable.next('/catalogue');
      } else {
        this.observable.next(query);
      }
    }
  }, {
    key: "createQuery",
    value: function createQuery() {
      var queryString = '';

      var _loop = function _loop() {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
            key = _Object$entries$_i[0],
            values = _Object$entries$_i[1];

        values.forEach(function (value) {
          var queryStringElement = "".concat(key, "=").concat(value, "&");
          queryString += queryStringElement;
        });
      };

      for (var _i2 = 0, _Object$entries = Object.entries(this.filters); _i2 < _Object$entries.length; _i2++) {
        _loop();
      }

      return "/catalogue?".concat(queryString);
    }
  }]);

  return FilterService;
}();

/* harmony default export */ __webpack_exports__["default"] = (FilterService);

/***/ }),

/***/ "./src/main/FormService.js":
/*!*********************************!*\
  !*** ./src/main/FormService.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthService.js */ "./src/main/AuthService.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.js */ "./src/config.js");
/* harmony import */ var _utils_validator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/validator.js */ "./src/main/utils/validator.js");
/* harmony import */ var _utils_makeRequest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/makeRequest.js */ "./src/main/utils/makeRequest.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var FormService =
/*#__PURE__*/
function () {
  function FormService(router) {
    _classCallCheck(this, FormService);

    this.router = router;
    this.signInForm = null;
    this.signUpForm = null;
    this.validationErrors = {};
    this.auth = new _AuthService_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  _createClass(FormService, [{
    key: "initAuthForms",
    value: function initAuthForms() {
      var _this = this;

      this.initSignInForm();
      this.initSignUpForm();
      this.triggerOnInputChangeValidation();
      this.auth.signUserIn();
      var logOutBtn = document.querySelector('.nav__link_logout');
      logOutBtn.addEventListener('click', function () {
        _this.auth.signUserOut();
      });
      var orderBtn = document.querySelector('.cartPage__order_buy');
      orderBtn.addEventListener('click', function () {
        if (_this.auth.isLoggedIn) {
          console.log('order is being placed');
        } else {
          window.history.pushState(null, null, '/login');

          _this.router.renderRouteContent(window.location.pathname);
        }
      });
    }
  }, {
    key: "initSignInForm",
    value: function initSignInForm() {
      var _this2 = this;

      this.signInForm = document.getElementById('js-sign-in-form');
      this.signInForm.addEventListener('submit', function (e) {
        e.preventDefault();

        var data = _this2.getFormData(e.target);

        if (!Object.keys(_this2.validationErrors).length) {
          Object(_utils_makeRequest_js__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('users', 'GET', {}).then(function (res) {
            return res.json();
          }).then(function (res) {
            var foundUser = res.find(function (user) {
              return user.email === data.email && user.password === data.password;
            });

            if (foundUser) {
              var name = foundUser.name,
                  email = foundUser.email;

              _this2.auth.logUserIn({
                name: name,
                email: email
              });

              window.history.pushState(null, null, '/cart');

              _this2.router.renderRouteContent(window.location.pathname);
            } else {
              console.log('user not found');
            }
          })["catch"](function (err) {
            return console.log(err);
          });
        }
      });
    }
  }, {
    key: "initSignUpForm",
    value: function initSignUpForm() {
      var _this3 = this;

      this.signUpForm = document.getElementById('js-sign-up-form');
      this.signUpForm.addEventListener('submit', function (e) {
        e.preventDefault();

        var data = _this3.getFormData(e.target);

        if (!Object.keys(_this3.validationErrors).length) {
          Object(_utils_makeRequest_js__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('users', 'POST', data).then(function (res) {
            if (res.status === 201) {
              var name = data.name,
                  email = data.email;

              _this3.auth.logUserIn({
                name: name,
                email: email
              });

              window.history.pushState(null, null, '/cart');

              _this3.router.renderRouteContent(window.location.pathname);
            }
          });
        }
      });
    }
  }, {
    key: "validateInputField",
    value: function validateInputField(field) {
      var activeForm = field.parentElement;
      var name = field.name,
          value = field.value;
      var validationResult = Object(_utils_validator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(name, value, _config_js__WEBPACK_IMPORTED_MODULE_1__["default"].validationRules[name]);
      this.displayErrors(activeForm, name, validationResult[name]);
      this.updateValidationErrors(validationResult, name);
    }
  }, {
    key: "updateValidationErrors",
    value: function updateValidationErrors(validationResult, fieldName) {
      if (!Object.keys(validationResult).length) {
        delete this.validationErrors[fieldName];
      } else {
        this.validationErrors = Object.assign(this.validationErrors, validationResult);
      }
    }
  }, {
    key: "displayErrors",
    value: function displayErrors(activeForm, name, errors) {
      var errorField = activeForm.querySelector(".".concat(name, "-error"));

      if (errors) {
        errorField.textContent = errors.reduce(function (errorString, message) {
          errorString += "".concat(message, "\n");
          return errorString;
        }, '');
      } else {
        errorField.textContent = '';
      }
    }
  }, {
    key: "triggerOnInputChangeValidation",
    value: function triggerOnInputChangeValidation() {
      var _this4 = this;

      this.signInForm.addEventListener('keyup', function (e) {
        _this4.validateInputField(e.target);
      });
      this.signUpForm.addEventListener('keyup', function (e) {
        _this4.validateInputField(e.target);
      });
    }
  }, {
    key: "getFormData",
    value: function getFormData(form) {
      var _this5 = this;

      var authData = {};
      var inputs = form.getElementsByTagName('input');
      Array.from(inputs).forEach(function (input) {
        _this5.validateInputField(input);

        var name = input.name,
            value = input.value;
        authData[name] = value;
      });
      return authData;
    }
  }]);

  return FormService;
}();

/* harmony default export */ __webpack_exports__["default"] = (FormService);

/***/ }),

/***/ "./src/main/Observable.js":
/*!********************************!*\
  !*** ./src/main/Observable.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Observable =
/*#__PURE__*/
function () {
  function Observable() {
    _classCallCheck(this, Observable);

    this.subscribers = [];
  }

  _createClass(Observable, [{
    key: "subscribe",
    value: function subscribe(fn) {
      this.subscribers.push(fn);
    }
  }, {
    key: "next",
    value: function next(data) {
      this.subscribers.forEach(function (subscribedFn) {
        subscribedFn(data);
      });
    }
  }]);

  return Observable;
}();

/* harmony default export */ __webpack_exports__["default"] = (Observable);

/***/ }),

/***/ "./src/main/Renderer.js":
/*!******************************!*\
  !*** ./src/main/Renderer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_layoutComponents_navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/layoutComponents/navbar.js */ "./src/components/layoutComponents/navbar.js");
/* harmony import */ var _components_homePageComponents_homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/homePageComponents/homepage.js */ "./src/components/homePageComponents/homepage.js");
/* harmony import */ var _components_catalogueComponents_catalogue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/catalogueComponents/catalogue.js */ "./src/components/catalogueComponents/catalogue.js");
/* harmony import */ var _components_catalogueComponents_filters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/catalogueComponents/filters.js */ "./src/components/catalogueComponents/filters.js");
/* harmony import */ var _components_cartComponents_cart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/cartComponents/cart.js */ "./src/components/cartComponents/cart.js");
/* harmony import */ var _components_cartComponents_order_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/cartComponents/order.js */ "./src/components/cartComponents/order.js");
/* harmony import */ var _components_singlePageComponents_singlePage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/singlePageComponents/singlePage */ "./src/components/singlePageComponents/singlePage.js");
/* harmony import */ var _components_authComponents_login_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/authComponents/login.js */ "./src/components/authComponents/login.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










var Renderer =
/*#__PURE__*/
function () {
  function Renderer(router, checkboxService, cartService, cartObserver) {
    _classCallCheck(this, Renderer);

    this.appContainer = document.getElementById('appContent-wrapper');
    this.router = router;
    this.checkboxService = checkboxService;
    this.cartService = cartService;
    this.cartObserver = cartObserver;
  }

  _createClass(Renderer, [{
    key: "initApp",
    value: function initApp(data) {
      Object(_components_homePageComponents_homepage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
      Object(_components_layoutComponents_navbar_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.router.renderRouteContent.bind(this.router));
      Object(_components_catalogueComponents_catalogue_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data, this.router.renderRouteContent.bind(this.router));
      this.renderCart(data);
      this.renderFilters(data);
      Object(_components_cartComponents_order_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
      Object(_components_authComponents_login_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
      this.appContainer.style.display = 'block';
    }
  }, {
    key: "renderCart",
    value: function renderCart(data) {
      var cart = new _components_cartComponents_cart_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
      cart.init(this.cartService.productsInCart, data);
    }
  }, {
    key: "renderFilters",
    value: function renderFilters(data) {
      var filters = new _components_catalogueComponents_filters_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
      filters.drawFilters(data);
    }
  }, {
    key: "renderSinglePage",
    value: function renderSinglePage(data) {
      var _this = this;

      var singlePage = new _components_singlePageComponents_singlePage__WEBPACK_IMPORTED_MODULE_6__["default"]();
      singlePage.drawSinglePage(data);
      var addBtn = document.querySelector('.singlePage__item_add');
      addBtn.addEventListener('click', function () {
        var itemId = window.location.pathname.split('/product/')[1];

        _this.cartService.addProductToCart(itemId);
      });
    }
  }, {
    key: "displayPageContent",
    value: function displayPageContent(contentId) {
      var appContentElements = Array.from(this.appContainer.children);

      _toConsumableArray(appContentElements).forEach(function (div) {
        div.style.display = 'none';
      });

      var pageContent = document.getElementById(contentId);
      pageContent.style.display = 'block';
    }
  }, {
    key: "renderPageContent",
    value: function renderPageContent(contentId, data) {
      this.displayPageContent(contentId);

      if (!window.location.search) {
        if (contentId === 'js-catalogue-page' && Object.keys(this.checkboxService.filters).length) {
          window.history.pushState(null, null, this.checkboxService.createQuery());
        }
      }

      if (window.location.pathname.includes('product')) {
        console.log('includes product');
        this.displaySinglePageContent(data);
      }

      if (window.location.search && window.location.pathname.includes('catalogue')) {
        this.displayFilteredContent(data);
      } else {
        var productCards = Array.from(document.querySelectorAll('.catalogue__item'));
        productCards.forEach(function (productCard) {
          productCard.style.display = 'flex';
        });
      }
    }
  }, {
    key: "displayFilteredContent",
    value: function displayFilteredContent(data) {
      var filters = this.checkboxService.getFilters();
      var productCards = Array.from(document.querySelectorAll('.catalogue__item'));

      _toConsumableArray(data).forEach(function (product) {
        var isFound = Object.keys(filters).every(function (key) {
          if (key === 'price') {
            return Number(filters[key]) >= Number(product[key]);
          }

          return filters[key].includes(String(product[key]));
        });
        var card = productCards.find(function (productCard) {
          return Number(productCard.dataset.id) === Number(product.id);
        });
        card.style.display = isFound ? 'flex' : 'none';
      });
    }
  }, {
    key: "displaySinglePageContent",
    value: function displaySinglePageContent(data) {
      var productId = window.location.pathname.split('product/')[1];
      var product = data.find(function (item) {
        return Number(item.id) === Number(productId);
      });

      if (product) {
        this.renderSinglePage(product);
      } else {
        window.history.pushState(null, null, '/404');
        this.router.renderRouteContent(window.location.pathname);
      }
    }
  }]);

  return Renderer;
}();

/* harmony default export */ __webpack_exports__["default"] = (Renderer);

/***/ }),

/***/ "./src/main/Router.js":
/*!****************************!*\
  !*** ./src/main/Router.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Router =
/*#__PURE__*/
function () {
  function Router() {
    var _this = this;

    _classCallCheck(this, Router);

    this.routes = {};
    window.addEventListener('popstate', function () {
      _this.renderRouteContent(window.location.pathname);
    });
  }

  _createClass(Router, [{
    key: "createNewRoute",
    value: function createNewRoute(pathName, callback) {
      if (!pathName || typeof pathName !== 'string') {
        throw new Error('Valid path required');
      }

      if (!callback || typeof callback !== 'function') {
        throw new Error('Callback required');
      }

      if (Object.prototype.hasOwnProperty.call(this.routes, pathName)) {
        throw new Error('Route with this name already exists');
      }

      this.routes[pathName] = callback;
    }
  }, {
    key: "renderRouteContent",
    value: function renderRouteContent(url) {
      var pathName = url.split('/')[1] || '/';
      console.log(pathName);

      if (Object.prototype.hasOwnProperty.call(this.routes, pathName)) {
        this.routes[pathName]();
      } else {
        this.routes['404']();
      }
    }
  }]);

  return Router;
}();

/* harmony default export */ __webpack_exports__["default"] = (Router);

/***/ }),

/***/ "./src/main/utils/makeRequest.js":
/*!***************************************!*\
  !*** ./src/main/utils/makeRequest.js ***!
  \***************************************/
/*! exports provided: makeRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeRequest", function() { return makeRequest; });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.js */ "./src/config.js");

var makeRequest = function makeRequest(path, requestType) {
  var dataObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var config = {
    method: requestType,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (Object.keys(dataObj).length) {
    config.body = JSON.stringify(dataObj);
  }

  return fetch("".concat(_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].api, "/").concat(path), config);
};

/***/ }),

/***/ "./src/main/utils/validator.js":
/*!*************************************!*\
  !*** ./src/main/utils/validator.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable max-len */

/* eslint-disable no-unused-expressions */
// eslint-disable-next-line no-control-regex
var EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

function validate(fieldName, fieldValue) {
  var rules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
  var validators = {
    minLen: function minLen(val, min) {
      return val.length >= min;
    },
    maxLen: function maxLen(val, max) {
      return val.length <= max;
    },
    onlyNumbersAndLetters: function onlyNumbersAndLetters(val) {
      return /^[A-Za-z0-9]+$/.test(val);
    },
    isValidEmail: function isValidEmail(val) {
      return EMAIL_REGEX.test(val);
    },
    isNotEmpty: function isNotEmpty(val) {
      return val.trim().length;
    }
  };
  var messages = {
    minLen: function minLen(field, val) {
      return "".concat(field, " must contain at least ").concat(val, " characters");
    },
    maxLen: function maxLen(field, val) {
      return "".concat(field, " must contain ").concat(val, " characters  at most");
    },
    onlyNumbersAndLetters: function onlyNumbersAndLetters(field) {
      return "".concat(field, " must include only numbers and letters");
    },
    isValidEmail: function isValidEmail(field) {
      return "".concat(field, " should be valid");
    },
    isNotEmpty: function isNotEmpty(field) {
      return "".concat(field, " mustn't be empty");
    }
  };
  var errors = {};

  for (var rule in rules) {
    if (Object.prototype.hasOwnProperty.call(validators, rule)) {
      var result = validators[rule](fieldValue, rules[rule]);

      if (!result) {
        var errorMessage = messages[rule](fieldName, rules[rule]);
        callback(errorMessage);
        !Object.prototype.hasOwnProperty.call(errors, fieldName) ? errors[fieldName] = [errorMessage] : errors[fieldName].push(errorMessage);
      }
    }
  }

  return errors;
}

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi webpack/hot/dev-server ./src/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! webpack/hot/dev-server */"./node_modules/webpack/hot/dev-server.js");
module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3Njc3Mvc3R5bGVzLnNjc3M/NzkyOSIsIndlYnBhY2s6Ly8vLi9kaXN0L2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3Njc3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ob3QvZGV2LXNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdXRoQ29tcG9uZW50cy9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJ0Q29tcG9uZW50cy9jYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcnRDb21wb25lbnRzL29yZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhdGFsb2d1ZUNvbXBvbmVudHMvY2F0YWxvZ3VlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhdGFsb2d1ZUNvbXBvbmVudHMvZmlsdGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lUGFnZUNvbXBvbmVudHMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0Q29tcG9uZW50cy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2luZ2xlUGFnZUNvbXBvbmVudHMvc2luZ2xlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vQXV0aFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vQ2FydE9ic2V2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vQ2FydFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vRmlsdGVyU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9Gb3JtU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9PYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL1JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL1JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi91dGlscy9tYWtlUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi91dGlscy92YWxpZGF0b3IuanMiXSwibmFtZXMiOlsiaW5pdEF1dGhGb3JtcyIsImZvcm1Db250YWluZXIiLCJmb3JtTGlua3MiLCJxdWVyeVNlbGVjdG9yIiwiZm9ybXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJmb3JtSWQiLCJ0YXJnZXQiLCJpZCIsInNwbGl0IiwiZm9yRWFjaCIsImZvcm0iLCJzdHlsZSIsImRpc3BsYXkiLCJyZW5kZXJBdXRoRm9ybXMiLCJhdXRoRm9ybXNDb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiRk9STV9URU1QTEFURSIsIkNhcnQiLCJjYXJ0UGFnZUNvbnRlbnQiLCJjYXJ0V3JhcHBlciIsImluc3RhbmNlIiwiZGF0YSIsInByb2R1Y3RzIiwicmVzZXRDYXJ0IiwiT2JqZWN0Iiwia2V5cyIsIm1ha2VDYXJ0SXRlbUNhcmQiLCJhcHBlbmRDaGlsZCIsInByb2R1Y3RJZCIsInZhbHVlIiwicHJvZHVjdCIsImZpbmQiLCJpdGVtIiwiU3RyaW5nIiwibnVtYmVyQXZhaWxhYmxlIiwiaW1hZ2UiLCJuYW1lIiwicHJpY2UiLCJDQVJUX0lURU1fVEVNUExBVEUiLCJjYXJ0SXRlbSIsInJlbW92ZSIsInJlbmRlck9yZGVyQ2FyZCIsIm9yZGVyQ2FyZENvbnRhaW5lciIsIkNBUkRfT1JERVJfVEVNUExBVEUiLCJyZW5kZXJDYXRhbG9ndWVJdGVtIiwiY2F0YWxvZ3VlQ29udGFpbmVyIiwiY2F0YWxvZ3VlSXRlbSIsIkNBVEFMT0dVRV9JVEVNX1RFTVBMQVRFIiwibWFrZUNhdGFsb2d1ZUl0ZW1zQ2xpY2thYmxlIiwicmVuZGVyIiwiY2F0YWxvZ3VlQ2FyZHMiLCJjYXJkIiwiY2xpY2thYmxlQXJlYSIsImRhdGFzZXQiLCJ3aW5kb3ciLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInJlbmRlckNhdGFsb2d1ZSIsImZpbHRlcnMiLCJDT05GSUciLCJGaWx0ZXJzIiwiZmlsdGVyc0NvbnRhbmluZXIiLCJjaGVja2JveGVzIiwiZHJhd1ByaWNlSW5wdXRSYW5nZSIsImJ1aWxkQ2hlY2tib3hlcyIsImRyYXdDaGVja2JveGVzIiwiZHJhd1Jlc2V0QnV0dG9uIiwiYWxsUHJpY2VzIiwibWFwIiwicHJpY2VzIiwibWluIiwiTWF0aCIsIm1heCIsIlBSSUNFX0lOUFVUX1RFTVBMQVRFIiwiZmlsdGVyQmFzZSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInB1c2giLCJiaW5kIiwiaW5jbHVkZXMiLCJrZXkiLCJmaWx0ZXJHcm91cCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJ0b1VwcGVyQ2FzZSIsImZpbHRlckdyb3VwQ29udGVudCIsInNvcnQiLCJmaWx0ZXJWYWx1ZSIsIkNIRUNLQk9YX1RFTVBMQVRFIiwiaW5pdEZpbHRlckdyb3VwQ29udGVudCIsImVudHJpZXMiLCJjb250YWluZXIiLCJncm91cCIsImNvbnRlbnQiLCJsYWJlbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiSE9NRVBBR0VfVEVNUExBVEUiLCJyZW5kZXJIb21lUGFnZSIsImhvbWVwYWdlIiwiaW5pdE5hdmJhciIsIm5hdmJhciIsImNsYXNzTmFtZSIsInJlbmRlck5hdmJhciIsIk5BVkJBUl9URU1QTEFURSIsIlNpbmdsZVBhZ2UiLCJzaW5nbGVQYWdlQ29udGFpbmVyIiwicmVzZXRQYWdlIiwiU0lOR0xFX1BBR0VfVEVNUExBVEUiLCJwYWdlQ29udGVudCIsImZpbHRlck5hbWUiLCJicmFuZCIsIm1hbnVmYWN0dXJlciIsInZvbHVtZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJhcGkiLCJyb3V0ZXMiLCJob21lUGFnZSIsInJvdXRlIiwiY29udGVudElkIiwiY29udGFjdFBhZ2UiLCJhYm91dFBhZ2UiLCJjYXRhbG9ndWVQYWdlIiwicHJvZHVjdFBhZ2UiLCJlcnJvclBhZ2UiLCJhdXRoUGFnZSIsImNhcnRQYWdlIiwidmFsaWRhdGlvblJ1bGVzIiwibWluTGVuIiwibWF4TGVuIiwib25seU51bWJlcnNBbmRMZXR0ZXJzIiwiaXNOb3RFbXB0eSIsImVtYWlsIiwiaXNWYWxpZEVtYWlsIiwicGFzc3dvcmQiLCJBcHAiLCJyb3V0ZXIiLCJSb3V0ZXIiLCJmaWx0ZXJTZXJ2aWNlIiwiRmlsdGVyU2VydmljZSIsImNhcnRTZXJ2aWNlIiwiQ2FydFNlcnZpY2UiLCJjYXJ0T2JzZXJ2ZXIiLCJDYXJ0T2JzZXJ2ZXIiLCJmb3JtU2VydmljZSIsIkZvcm1TZXJ2aWNlIiwicmVuZGVyZXIiLCJSZW5kZXJlciIsInN1YnNjcmliZSIsIm9uRmlsdGVyQ2hhbmdlIiwib25DYXJ0Q2hhbmdlIiwiaW5pdCIsIm1ha2VSZXF1ZXN0IiwidGhlbiIsImpzb24iLCJpbml0Um91dGVyIiwiaW5pdEFwcCIsInJlbmRlclJvdXRlQ29udGVudCIsImluaXRDYXJ0SW5wdXRIYWRsZXJzIiwiaW5pdE9ic2VydmVyIiwiZW50cnkiLCJjcmVhdGVOZXdSb3V0ZSIsInJlbmRlclBhZ2VDb250ZW50IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNhcnRSb3V0ZSIsImRlY29kZVVSSSIsInNldEl0ZW0iLCJyZW5kZXJDYXJ0IiwiYXBwIiwiQXV0aFNlcnZpY2UiLCJ1c2VyIiwiaXNMb2dnZWRJbiIsIkpTT04iLCJwYXJzZSIsInRvZ2dsZUF1dGhPbmx5Q29udGVudCIsInJlbW92ZUl0ZW0iLCJzdHJpbmdpZnkiLCJsb2dPdXRCdG4iLCJsb2dpbkxpbmsiLCJ1c2VySW5mbyIsInVzZXJEYXRhIiwidGV4dENvbnRlbnQiLCJjYXJ0T3JkZXJDb250YWluZXIiLCJub2Rlc1RvT2JzZXJ2ZSIsImluaXRDYXJ0Q2FsY3VsYXRvciIsImNhbGN1bGF0ZVRvdGFsIiwiZGVsZXRlQnRucyIsImJ0biIsImRlbGV0ZUNhcmRPcmRlck5vdGUiLCJpbmRleCIsInRvdGFsIiwiY2FydEl0ZW1zIiwibGVuZ3RoIiwicHJpY2VUb3RhbCIsIkFycmF5IiwiZnJvbSIsInJlZHVjZSIsInRvdGFsU3VtIiwiY3VycmVudEl0ZW0iLCJmbGFnIiwiY2hlY2tlZCIsInF1YW50aXR5IiwicmVuZGVyQ2FydE9yZGVyRGV0YWlscyIsInRvRml4ZWQiLCJjYXJ0RGV0YWlscyIsImNoaWxkcmVuIiwiZm91bmQiLCJOdW1iZXIiLCJkZXRhaWxzIiwiY2FydHMiLCJwcm9kdWN0c0luQ2FydCIsIm9ic2VydmFibGUiLCJPYnNlcnZhYmxlIiwiZm4iLCJjYXJ0IiwiaXRlbUlkIiwiY2xvc2VzdCIsImFkZFByb2R1Y3RUb0NhcnQiLCJpbml0UHJvZHVjdENhcnQiLCJuZXh0IiwidXBkYXRlTG9jYWxTdG9yYWdlIiwiaW5pdERlbGV0ZUJ1dHRvbnMiLCJpbml0Q2FydE51bWJlcklucHV0IiwiZGVsZXRlQnV0dG9ucyIsImJ1dHRvbiIsImRlbGV0ZVByb2R1Y3RGcm9tQ2FydCIsIm51bWJlcklucHV0cyIsImlucHV0IiwicHJpY2VJbnB1dCIsInJlc2V0RmlsdGVyc0J0biIsInJlc2V0RmlsdGVycyIsIm9uSW5wdXRSYW5nZUNoYW5nZSIsImhhbmRsZUZpbHRlckNoYW5nZSIsImN1cnJlbnRWYWwiLCJjaGVja2JveCIsIm9uQ2hlY2tCb3hDaGVja2VkIiwib25DaGVja0JveFVuQ2hlY2tlZCIsImdldEZpbHRlcnMiLCJpbml0RmlsdGVycyIsImZpbHRlciIsImZpbHRlcnNTdHJpbmciLCJzZWFyY2giLCJyZXBsYWNlIiwiQm9vbGVhbiIsImZpbHRlck9iamVjdCIsImN1cnJlbkZpbHRlclZhbHVlIiwiaW5kZXhPZiIsInNwbGljZSIsInF1ZXJ5IiwiY3JlYXRlUXVlcnkiLCJxdWVyeVN0cmluZyIsInZhbHVlcyIsInF1ZXJ5U3RyaW5nRWxlbWVudCIsInNpZ25JbkZvcm0iLCJzaWduVXBGb3JtIiwidmFsaWRhdGlvbkVycm9ycyIsImF1dGgiLCJpbml0U2lnbkluRm9ybSIsImluaXRTaWduVXBGb3JtIiwidHJpZ2dlck9uSW5wdXRDaGFuZ2VWYWxpZGF0aW9uIiwic2lnblVzZXJJbiIsInNpZ25Vc2VyT3V0Iiwib3JkZXJCdG4iLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJnZXRGb3JtRGF0YSIsInJlcyIsImZvdW5kVXNlciIsImxvZ1VzZXJJbiIsImVyciIsInN0YXR1cyIsImZpZWxkIiwiYWN0aXZlRm9ybSIsInBhcmVudEVsZW1lbnQiLCJ2YWxpZGF0aW9uUmVzdWx0IiwidmFsaWRhdGUiLCJkaXNwbGF5RXJyb3JzIiwidXBkYXRlVmFsaWRhdGlvbkVycm9ycyIsImZpZWxkTmFtZSIsImFzc2lnbiIsImVycm9ycyIsImVycm9yRmllbGQiLCJlcnJvclN0cmluZyIsIm1lc3NhZ2UiLCJ2YWxpZGF0ZUlucHV0RmllbGQiLCJhdXRoRGF0YSIsImlucHV0cyIsInN1YnNjcmliZXJzIiwic3Vic2NyaWJlZEZuIiwiY2hlY2tib3hTZXJ2aWNlIiwiYXBwQ29udGFpbmVyIiwicmVuZGVyRmlsdGVycyIsImRyYXdGaWx0ZXJzIiwic2luZ2xlUGFnZSIsImRyYXdTaW5nbGVQYWdlIiwiYWRkQnRuIiwiYXBwQ29udGVudEVsZW1lbnRzIiwiZGl2IiwiZGlzcGxheVBhZ2VDb250ZW50IiwiZGlzcGxheVNpbmdsZVBhZ2VDb250ZW50IiwiZGlzcGxheUZpbHRlcmVkQ29udGVudCIsInByb2R1Y3RDYXJkcyIsInByb2R1Y3RDYXJkIiwiaXNGb3VuZCIsImV2ZXJ5IiwicmVuZGVyU2luZ2xlUGFnZSIsInBhdGhOYW1lIiwiY2FsbGJhY2siLCJFcnJvciIsInVybCIsInBhdGgiLCJyZXF1ZXN0VHlwZSIsImRhdGFPYmoiLCJjb25maWciLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsImZldGNoIiwiRU1BSUxfUkVHRVgiLCJmaWVsZFZhbHVlIiwicnVsZXMiLCJ2YWxpZGF0b3JzIiwidmFsIiwidGVzdCIsInRyaW0iLCJtZXNzYWdlcyIsInJ1bGUiLCJyZXN1bHQiLCJlcnJvck1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxVQUFVLG1CQUFPLENBQUMsNEpBQWlGO0FBQ25HLDBCQUEwQixtQkFBTyxDQUFD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QWY7O0FBQ0EsVUFBSSxDQUFDQyxNQUFMLEVBQWE7QUFDWCxZQUFNQyxZQUFZLEdBQUdILFFBQVEsQ0FBQ0MsSUFBRCxDQUFSLENBQWVoRCxTQUFmLEVBQTBCMEMsS0FBSyxDQUFDTSxJQUFELENBQS9CLENBQXJCO0FBQ0FuQixnQkFBUSxDQUFDcUIsWUFBRCxDQUFSO0FBQ0EsU0FBQ3JULE1BQU0sQ0FBQ3FELFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQzhNLE1BQXJDLEVBQTZDRixTQUE3QyxDQUFELEdBQ0lFLE1BQU0sQ0FBQ0YsU0FBRCxDQUFOLEdBQW9CLENBQUNrRCxZQUFELENBRHhCLEdBRUloRCxNQUFNLENBQUNGLFNBQUQsQ0FBTixDQUFrQjNNLElBQWxCLENBQXVCNlAsWUFBdkIsQ0FGSjtBQUdEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFPaEQsTUFBUDtBQUNEOztBQUVjTCx1RUFBZixFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8IURPQ1RZUEUgaHRtbD5cXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxuPGhlYWQ+XFxuICA8bWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCI+XFxuICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCI+XFxuICA8dGl0bGU+U1BBIHByb2plY3Q8L3RpdGxlPlxcbjwvaGVhZD5cXG48Ym9keT5cXG4gIDxoZWFkZXI+XFxuICAgIDxuYXYgY2xhc3M9XFxcIm1haW5fX25hdlxcXCIgaWQ9XFxcImpzLW1haW4tbmF2XFxcIj48L25hdj5cXG4gIDwvaGVhZGVyPlxcblxcbiAgPGRpdiBpZD1cXFwiYXBwQ29udGVudC13cmFwcGVyXFxcIiBzdHlsZT1cXFwiZGlzcGxheTogbm9uZTtcXFwiPlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJob21lcGFnZS13cmFwcGVyXFxcIiBpZD1cXFwianMtaG9tZXBhZ2VcXFwiPjwvZGl2PlxcbiAgXFxuICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3RQYWdlLXdyYXBwZXJcXFwiIGlkPVxcXCJqcy1jYXRhbG9ndWUtcGFnZVxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZGN1dFBhZ2VfX2NvbnRlbnRcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kdWN0UGFnZV9fZmlsdGVyXFxcIiBpZD1cXFwianMtY2F0YWxvZ3VlLWZpbHRlclxcXCI+PC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3RQYWdlX19jYXRhbG9ndWVcXFwiIGlkPVxcXCJqcy1jYXRhbG9ndWVcXFwiPjwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIFxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhYm91dFBhZ2Utd3JhcHBlclxcXCIgaWQ9XFxcImpzLWFib3V0LXBhZ2VcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImFib3V0UGFnZV9faW5mb1xcXCI+QWJvdXQgaW5mbzwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImFib3V0UGFnZV9fcGhvdG9zXFxcIj5BYm91dCBwaG90bzwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIFxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWN0UGFnZS13cmFwcGVyXFxcIiBpZD1cXFwianMtY29udGFjdC1wYWdlXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWN0UGFnZV9faW5mb1xcXCI+Q29udGFjdCBpbmZvPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFjdFBhZ2VfX3Bob3Rvc1xcXCI+Q29udGFjdCBwaG90bzwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIFxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJ0UGFnZS13cmFwcGVyXFxcIiBpZD1cXFwianMtY2FydC1wYWdlXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJ0UGFnZV9fY29udGVudFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJ0UGFnZV9fY2FydF9vcmRlclxcXCIgaWQ9XFxcImpzLW9yZGVyLWNhcmRcXFwiPjwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FydFBhZ2VfX2NhcnRfd3JhcHBlclxcXCI+PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgXFxuICAgIDxkaXYgY2xhc3M9XFxcImVycm9yUGFnZS13cmFwcGVyXFxcIiBpZD1cXFwianMtZXJyb3ItcGFnZVxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZXJyb3JQYWdlX19jb250ZW50XFxcIj5FcnJvcjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIFxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzaW5nbGVQYWdlLXdyYXBwZXJcXFwiIGlkPVxcXCJqcy1zaW5nbGUtcGFnZVxcXCI+PC9kaXY+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcImF1dGhQYWdlLXdyYXBwZXJcXFwiIGlkPVxcXCJqcy1hdXRoLXBhZ2VcXFwiPjwvZGl2PlxcbiAgXFxuICBcXG4gIDwvZGl2PlxcbiAgPHNjcmlwdCBzcmM9XFxcIi9idW5kbGUuanNcXFwiPjwvc2NyaXB0PlxcbjwvYm9keT5cXG48L2h0bWw+XFxuXCI7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItdG9wLXN0eWxlOiBub25lO1xcbiAgY29sb3I6ICMyMTI0M2Q7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3YzdjO1xcbiAgbWFyZ2luOiAxMHB4IDBweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICBidXR0b246YWN0aXZlIHtcXG4gICAgYm9yZGVyOiBub25lOyB9XFxuICBidXR0b246aG92ZXIge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4OGUxZjI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgfVxcblxcbmJvZHkge1xcbiAgbWF4LXdpZHRoOiAxMzIwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDAgYXV0bzsgfVxcblxcbi5uYXZfX3dyYXBwZXIge1xcbiAgbWFyZ2luLXRvcDogMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4ubWFpbl9fbmF2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI0M2Q7IH1cXG4gIC5tYWluX19uYXYgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IDVweDsgfVxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAgIC5tYWluX19uYXYgdWwge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBwYWRkaW5nOiAwcHggNXB4O1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9IH1cXG4gIC5tYWluX19uYXYgbGkge1xcbiAgICBmbGV4OiAxIDEgMDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAubWFpbl9fbmF2IGxpOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzODVlOyB9XFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgLm1haW5fX25hdiBsaSB7XFxuICAgICAgICBwYWRkaW5nOiAwcHggNXB4OyB9IH1cXG5cXG4ubmF2X19saW5rX2NhcnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBtYXJnaW46IDFweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHBhZGRpbmc6IDVweCAyMHB4OyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAubmF2X19saW5rX2NhcnQge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICByaWdodDogMiU7XFxuICAgICAgdG9wOiAyMCU7IH0gfVxcblxcbi5wcm9kY3V0UGFnZV9fY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC5wcm9kY3V0UGFnZV9fY29udGVudCB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH0gfVxcblxcbi5wcm9kdWN0UGFnZV9fY2F0YWxvZ3VlIHtcXG4gIGZsZXg6IDEgMCA2OCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDsgfVxcblxcbi5wcm9kdWN0UGFnZV9fZmlsdGVyIHtcXG4gIGZsZXg6IDAgMCAyMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgd2lkdGg6IGF1dG87IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC5wcm9kdWN0UGFnZV9fZmlsdGVyIHtcXG4gICAgICBmbGV4OiAwIDAgOTUlOyB9IH1cXG5cXG4uY2F0YWxvZ3VlX19pdGVtIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4OiAwIDAgMjEwcHg7XFxuICBib3gtc2hhZG93OiA5cHggMTFweCAyMHB4IC03cHggIzU5NjE1NzsgfVxcbiAgLmNhdGFsb2d1ZV9faXRlbSBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgICBoZWlnaHQ6IDE2MHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMyU7IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC5jYXRhbG9ndWVfX2l0ZW0ge1xcbiAgICAgIGZsZXg6IDEwMCA5NSU7XFxuICAgICAgd2lkdGg6IDEwMCU7IH0gfVxcblxcbi5jYXRhbG9ndWVfX2l0ZW1faW1nd3JhcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uY2F0YWxvZ3VlX19pdGVtX25hbWUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDAuOHJlbTsgfVxcblxcbi5jYXRhbG9ndWVfX2l0ZW1faW5mbyB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4uY2F0YWxvZ3VlX19pdGVtX3ByaWNlIHtcXG4gIGNvbG9yOiAjZmY3YzdjO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBtYXJnaW46IDA7IH1cXG5cXG4uZmlsdGVyX19ncm91cF9sYWJlbCwgLmNhcnRfX2RldGFpbHNfbGFiZWwge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjQzZDtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDVweCAwcHg7IH1cXG4gIC5maWx0ZXJfX2dyb3VwX2xhYmVsOmhvdmVyLCAuY2FydF9fZGV0YWlsc19sYWJlbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM4NWU7IH1cXG5cXG4uZmlsdGVyX19ncm91cF9jb250ZW50IHtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgZm9udC1zaXplOiAwLjhyZW07IH1cXG5cXG4uZmlsdGVyX19ncm91cF9jaGVja2JveCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxcblxcbi5jYXJ0X19pdGVtX2ltYWdlIHtcXG4gIGhlaWdodDogMTAwcHg7IH1cXG5cXG4uY2FydFBhZ2VfX2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHBhZGRpbmc6IDEwcHg7IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC5jYXJ0UGFnZV9fY29udGVudCB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHdpZHRoOiA5MCU7IH0gfVxcblxcbi5jYXJ0UGFnZV9fY2FydF93cmFwcGVyIHtcXG4gIGZsZXg6IDAgMCA2MCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjsgfVxcblxcbi5jYXJ0UGFnZV9fY2FydF9vcmRlciB7XFxuICBmbGV4OiAwIDAgMzAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGhlaWdodDogYXV0bzsgfVxcblxcbi5jYXJ0X19pdGVtX3dyYXBwZXIge1xcbiAgZmxleDogMCAwIDYwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiA1JTtcXG4gIHBhZGRpbmctdG9wOiAyJTtcXG4gIGJveC1zaGFkb3c6IDlweCAxMXB4IDIwcHggLTdweCAjNTk2MTU3OyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAuY2FydF9faXRlbV93cmFwcGVyIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH0gfVxcblxcbi5jYXJ0X19pdGVtX2RldGFpbHMge1xcbiAgZmxleDogMCAwIDIwMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmNhcnRfX2l0ZW1fZGV0YWlscyBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgICBoZWlnaHQ6IDE2MHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMyU7IH1cXG5cXG4uY2FydF9faXRlbV9pbnB1dCB7XFxuICBmbGV4OiAwIDEgMjAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDsgfVxcbiAgLmNhcnRfX2l0ZW1faW5wdXQgaW5wdXQge1xcbiAgICBtYXJnaW46IDUlO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDsgfVxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAgIC5jYXJ0X19pdGVtX2lucHV0IGlucHV0IHtcXG4gICAgICAgIG1hcmdpbjogMnB4OyB9IH1cXG5cXG4uc2luZ2xlUGFnZS13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDEwcHg7IH1cXG5cXG4uc2luZ2xlUGFnZV9fY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYm94LXNoYWRvdzogOXB4IDExcHggMjBweCAtN3B4ICM1OTYxNTc7IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC5zaW5nbGVQYWdlX19jb250ZW50IHtcXG4gICAgICBkaXNwbGF5OiBibG9jazsgfSB9XFxuXFxuLnNpbmdsZVBhZ2VfX2NvbnRlbnRfbWFpbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZmxleDogMCAwIDQwJSB4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDsgfVxcbiAgLnNpbmdsZVBhZ2VfX2NvbnRlbnRfbWFpbiBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgICBoZWlnaHQ6IDE2MHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMyU7IH1cXG5cXG4uc2luZ2xlUGFnZV9jb250ZW50X2luZm8ge1xcbiAgZmxleDogMCAxIDUwJTtcXG4gIHBhZGRpbmc6IDEwcHg7IH1cXG5cXG4uYXV0aFBhZ2Utd3JhcHBlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjsgfVxcblxcbi5hdXRoX19mb3JtX3dyYXBwZXIge1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1hcmdpbjogMTAlIGF1dG87XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuICAuYXV0aF9fZm9ybV93cmFwcGVyIHVsIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cXG4gIC5hdXRoX19mb3JtX3dyYXBwZXIgbGkge1xcbiAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgbGlzdC1zdHlsZTogbm9uZTsgfVxcbiAgLmF1dGhfX2Zvcm1fd3JhcHBlciBmb3JtIGxhYmVsLCAuYXV0aF9fZm9ybV93cmFwcGVyIGZvcm0gaW5wdXQsIC5hdXRoX19mb3JtX3dyYXBwZXIgZm9ybSBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgLmF1dGhfX2Zvcm1fd3JhcHBlciBmb3JtIGxhYmVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDA4MjsgfVxcbiAgLmF1dGhfX2Zvcm1fd3JhcHBlciBmb3JtIGlucHV0IHtcXG4gICAgd2lkdGg6IDk5JTsgfVxcbiAgLmF1dGhfX2Zvcm1fd3JhcHBlciBmb3JtIGJ1dHRvbiB7XFxuICAgIG1hcmdpbjogNXB4IGF1dG87IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8qZ2xvYmFscyB3aW5kb3cgX193ZWJwYWNrX2hhc2hfXyAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcblx0dmFyIGxhc3RIYXNoO1xuXHR2YXIgdXBUb0RhdGUgPSBmdW5jdGlvbiB1cFRvRGF0ZSgpIHtcblx0XHRyZXR1cm4gbGFzdEhhc2guaW5kZXhPZihfX3dlYnBhY2tfaGFzaF9fKSA+PSAwO1xuXHR9O1xuXHR2YXIgbG9nID0gcmVxdWlyZShcIi4vbG9nXCIpO1xuXHR2YXIgY2hlY2sgPSBmdW5jdGlvbiBjaGVjaygpIHtcblx0XHRtb2R1bGUuaG90XG5cdFx0XHQuY2hlY2sodHJ1ZSlcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHVwZGF0ZWRNb2R1bGVzKSB7XG5cdFx0XHRcdGlmICghdXBkYXRlZE1vZHVsZXMpIHtcblx0XHRcdFx0XHRsb2coXCJ3YXJuaW5nXCIsIFwiW0hNUl0gQ2Fubm90IGZpbmQgdXBkYXRlLiBOZWVkIHRvIGRvIGEgZnVsbCByZWxvYWQhXCIpO1xuXHRcdFx0XHRcdGxvZyhcblx0XHRcdFx0XHRcdFwid2FybmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJbSE1SXSAoUHJvYmFibHkgYmVjYXVzZSBvZiByZXN0YXJ0aW5nIHRoZSB3ZWJwYWNrLWRldi1zZXJ2ZXIpXCJcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIXVwVG9EYXRlKCkpIHtcblx0XHRcdFx0XHRjaGVjaygpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmVxdWlyZShcIi4vbG9nLWFwcGx5LXJlc3VsdFwiKSh1cGRhdGVkTW9kdWxlcywgdXBkYXRlZE1vZHVsZXMpO1xuXG5cdFx0XHRcdGlmICh1cFRvRGF0ZSgpKSB7XG5cdFx0XHRcdFx0bG9nKFwiaW5mb1wiLCBcIltITVJdIEFwcCBpcyB1cCB0byBkYXRlLlwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChmdW5jdGlvbihlcnIpIHtcblx0XHRcdFx0dmFyIHN0YXR1cyA9IG1vZHVsZS5ob3Quc3RhdHVzKCk7XG5cdFx0XHRcdGlmIChbXCJhYm9ydFwiLCBcImZhaWxcIl0uaW5kZXhPZihzdGF0dXMpID49IDApIHtcblx0XHRcdFx0XHRsb2coXG5cdFx0XHRcdFx0XHRcIndhcm5pbmdcIixcblx0XHRcdFx0XHRcdFwiW0hNUl0gQ2Fubm90IGFwcGx5IHVwZGF0ZS4gTmVlZCB0byBkbyBhIGZ1bGwgcmVsb2FkIVwiXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRsb2coXCJ3YXJuaW5nXCIsIFwiW0hNUl0gXCIgKyBsb2cuZm9ybWF0RXJyb3IoZXJyKSk7XG5cdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxvZyhcIndhcm5pbmdcIiwgXCJbSE1SXSBVcGRhdGUgZmFpbGVkOiBcIiArIGxvZy5mb3JtYXRFcnJvcihlcnIpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH07XG5cdHZhciBob3RFbWl0dGVyID0gcmVxdWlyZShcIi4vZW1pdHRlclwiKTtcblx0aG90RW1pdHRlci5vbihcIndlYnBhY2tIb3RVcGRhdGVcIiwgZnVuY3Rpb24oY3VycmVudEhhc2gpIHtcblx0XHRsYXN0SGFzaCA9IGN1cnJlbnRIYXNoO1xuXHRcdGlmICghdXBUb0RhdGUoKSAmJiBtb2R1bGUuaG90LnN0YXR1cygpID09PSBcImlkbGVcIikge1xuXHRcdFx0bG9nKFwiaW5mb1wiLCBcIltITVJdIENoZWNraW5nIGZvciB1cGRhdGVzIG9uIHRoZSBzZXJ2ZXIuLi5cIik7XG5cdFx0XHRjaGVjaygpO1xuXHRcdH1cblx0fSk7XG5cdGxvZyhcImluZm9cIiwgXCJbSE1SXSBXYWl0aW5nIGZvciB1cGRhdGUgc2lnbmFsIGZyb20gV0RTLi4uXCIpO1xufSBlbHNlIHtcblx0dGhyb3cgbmV3IEVycm9yKFwiW0hNUl0gSG90IE1vZHVsZSBSZXBsYWNlbWVudCBpcyBkaXNhYmxlZC5cIik7XG59XG4iLCJpbXBvcnQgeyBGT1JNX1RFTVBMQVRFIH0gZnJvbSAnLi4vdGVtcGxhdGVzLmpzJztcblxuZnVuY3Rpb24gaW5pdEF1dGhGb3Jtcyhmb3JtQ29udGFpbmVyKSB7XG4gIGNvbnN0IGZvcm1MaW5rcyA9IGZvcm1Db250YWluZXIucXVlcnlTZWxlY3RvcigndWwnKTtcbiAgY29uc3QgZm9ybXMgPSBmb3JtQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0nKTtcblxuICBmb3JtTGlua3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IGZvcm1JZCA9IGAke2UudGFyZ2V0LmlkLnNwbGl0KCdsaW5rJylbMF19Zm9ybWA7XG4gICAgZm9ybXMuZm9yRWFjaCgoZm9ybSkgPT4ge1xuICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gZm9ybS5pZCA9PT0gZm9ybUlkID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckF1dGhGb3JtcygpIHtcbiAgY29uc3QgYXV0aEZvcm1zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWF1dGgtcGFnZScpO1xuICBhdXRoRm9ybXNDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBGT1JNX1RFTVBMQVRFKCkpO1xuXG4gIGluaXRBdXRoRm9ybXMoYXV0aEZvcm1zQ29udGFpbmVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQXV0aEZvcm1zO1xuIiwiaW1wb3J0IHsgQ0FSVF9JVEVNX1RFTVBMQVRFIH0gZnJvbSAnLi4vdGVtcGxhdGVzLmpzJztcblxuY2xhc3MgQ2FydCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FydFBhZ2VDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRQYWdlX19jb250ZW50Jyk7XG4gICAgdGhpcy5jYXJ0V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0UGFnZV9fY2FydF93cmFwcGVyJyk7XG5cbiAgICBpZiAoQ2FydC5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIENhcnQuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgQ2FydC5pbnN0YW5jZSA9IHRoaXM7XG4gIH1cblxuICBpbml0KGRhdGEsIHByb2R1Y3RzKSB7XG4gICAgdGhpcy5yZXNldENhcnQoKTtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoaWQpID0+IHRoaXMubWFrZUNhcnRJdGVtQ2FyZChpZCwgZGF0YVtpZF0sIHByb2R1Y3RzKSk7XG4gICAgfVxuICAgIHRoaXMuY2FydFBhZ2VDb250ZW50LmFwcGVuZENoaWxkKHRoaXMuY2FydFdyYXBwZXIpO1xuICB9XG5cbiAgbWFrZUNhcnRJdGVtQ2FyZChwcm9kdWN0SWQsIHZhbHVlLCBwcm9kdWN0cykge1xuICAgIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0cy5maW5kKChpdGVtKSA9PiBTdHJpbmcoaXRlbS5pZCkgPT09IHByb2R1Y3RJZCk7XG5cbiAgICBpZiAocHJvZHVjdCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBpZCwgbnVtYmVyQXZhaWxhYmxlLCBpbWFnZSwgbmFtZSwgcHJpY2UsXG4gICAgICB9ID0gcHJvZHVjdDtcbiAgICAgIHRoaXMuY2FydFdyYXBwZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBDQVJUX0lURU1fVEVNUExBVEUoaWQsIHZhbHVlLCBudW1iZXJBdmFpbGFibGUsIGltYWdlLCBuYW1lLCBwcmljZSkpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0Q2FydCgpIHtcbiAgICBjb25zdCBjYXJ0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJ0X19pdGVtX3dyYXBwZXInKTtcbiAgICBjYXJ0SXRlbS5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLnJlbW92ZSgpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0O1xuIiwiaW1wb3J0IHsgQ0FSRF9PUkRFUl9URU1QTEFURSB9IGZyb20gJy4uL3RlbXBsYXRlcy5qcyc7XG5cbmZ1bmN0aW9uIHJlbmRlck9yZGVyQ2FyZCgpIHtcbiAgY29uc3Qgb3JkZXJDYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLW9yZGVyLWNhcmQnKTtcbiAgb3JkZXJDYXJkQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgQ0FSRF9PUkRFUl9URU1QTEFURSgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyT3JkZXJDYXJkO1xuIiwiaW1wb3J0IHsgQ0FUQUxPR1VFX0lURU1fVEVNUExBVEUgfSBmcm9tICcuLi90ZW1wbGF0ZXMuanMnO1xuXG5mdW5jdGlvbiByZW5kZXJDYXRhbG9ndWVJdGVtKHByb2R1Y3QpIHtcbiAgY29uc3QgY2F0YWxvZ3VlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWNhdGFsb2d1ZScpO1xuICBjb25zdCB7XG4gICAgaWQsIGltYWdlLCBuYW1lLCBwcmljZSxcbiAgfSA9IHByb2R1Y3Q7XG5cbiAgY29uc3QgY2F0YWxvZ3VlSXRlbSA9IENBVEFMT0dVRV9JVEVNX1RFTVBMQVRFKGlkLCBpbWFnZSwgbmFtZSwgcHJpY2UpO1xuICBjYXRhbG9ndWVDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBjYXRhbG9ndWVJdGVtKTtcbn1cblxuZnVuY3Rpb24gbWFrZUNhdGFsb2d1ZUl0ZW1zQ2xpY2thYmxlKHJlbmRlcikge1xuICBjb25zdCBjYXRhbG9ndWVDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9ndWVfX2l0ZW0nKTtcbiAgY2F0YWxvZ3VlQ2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgIGNvbnN0IGNsaWNrYWJsZUFyZWEgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXRhbG9ndWVfX2l0ZW1faW1nd3JhcCcpO1xuICAgIGNsaWNrYWJsZUFyZWEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCB7IGlkIH0gPSBjYXJkLmRhdGFzZXQ7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgYC9wcm9kdWN0LyR7aWR9YCk7XG4gICAgICByZW5kZXIod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckNhdGFsb2d1ZShkYXRhLCByZW5kZXIpIHtcbiAgWy4uLmRhdGFdLmZvckVhY2goKHByb2R1Y3QpID0+IHtcbiAgICByZW5kZXJDYXRhbG9ndWVJdGVtKHByb2R1Y3QpO1xuICB9KTtcbiAgbWFrZUNhdGFsb2d1ZUl0ZW1zQ2xpY2thYmxlKHJlbmRlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckNhdGFsb2d1ZTtcbiIsImltcG9ydCB7IFBSSUNFX0lOUFVUX1RFTVBMQVRFLCBDSEVDS0JPWF9URU1QTEFURSB9IGZyb20gJy4uL3RlbXBsYXRlcy5qcyc7XG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uL2NvbmZpZy5qcyc7XG5cbmNvbnN0IHsgZmlsdGVycyB9ID0gQ09ORklHO1xuXG5jbGFzcyBGaWx0ZXJzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5maWx0ZXJzQ29udGFuaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1jYXRhbG9ndWUtZmlsdGVyJyk7XG4gICAgdGhpcy5jaGVja2JveGVzID0ge307XG4gIH1cblxuICBkcmF3RmlsdGVycyhkYXRhKSB7XG4gICAgdGhpcy5kcmF3UHJpY2VJbnB1dFJhbmdlKGRhdGEpO1xuICAgIHRoaXMuYnVpbGRDaGVja2JveGVzKGRhdGEpO1xuICAgIHRoaXMuZHJhd0NoZWNrYm94ZXMoKTtcbiAgICB0aGlzLmRyYXdSZXNldEJ1dHRvbih0aGlzLmZpbHRlcnNDb250YW5pbmVyKTtcbiAgfVxuXG4gIGRyYXdQcmljZUlucHV0UmFuZ2UoZGF0YSkge1xuICAgIGNvbnN0IGFsbFByaWNlcyA9IGRhdGEubWFwKCh7IHByaWNlIH0pID0+IHByaWNlKTtcbiAgICBjb25zdCBwcmljZXMgPSB7XG4gICAgICBtaW46IE1hdGgubWluKC4uLmFsbFByaWNlcyksXG4gICAgICBtYXg6IE1hdGgubWF4KC4uLmFsbFByaWNlcyksXG4gICAgfTtcbiAgICB0aGlzLmZpbHRlcnNDb250YW5pbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgUFJJQ0VfSU5QVVRfVEVNUExBVEUocHJpY2VzLm1pbiwgcHJpY2VzLm1heCkpO1xuICB9XG5cbiAgYnVpbGRDaGVja2JveGVzKGRhdGEpIHtcbiAgICBbLi4uZGF0YV0uZm9yRWFjaCgocHJvZHVjdCkgPT4ge1xuICAgICAgZmlsdGVycy5mb3JFYWNoKChmaWx0ZXJCYXNlKSA9PiB7XG4gICAgICAgIGlmIChwcm9kdWN0W2ZpbHRlckJhc2VdXG4gICAgICAgICAgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmNoZWNrYm94ZXMsIGZpbHRlckJhc2UpKSB7XG4gICAgICAgICAgdGhpcy5jaGVja2JveGVzW2ZpbHRlckJhc2VdID0gW107XG4gICAgICAgICAgdGhpcy5jaGVja2JveGVzW2ZpbHRlckJhc2VdLnB1c2gocHJvZHVjdFtmaWx0ZXJCYXNlXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvZHVjdFtmaWx0ZXJCYXNlXVxuICAgICAgICAgICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuYmluZCh0aGlzLmNoZWNrYm94ZXMsIGZpbHRlckJhc2UpXG4gICAgICAgICAgJiYgIXRoaXMuY2hlY2tib3hlc1tmaWx0ZXJCYXNlXS5pbmNsdWRlcyhwcm9kdWN0W2ZpbHRlckJhc2VdKSkge1xuICAgICAgICAgIHRoaXMuY2hlY2tib3hlc1tmaWx0ZXJCYXNlXS5wdXNoKHByb2R1Y3RbZmlsdGVyQmFzZV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGRyYXdDaGVja2JveGVzKCkge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuY2hlY2tib3hlcykpIHtcbiAgICAgIGNvbnN0IGZpbHRlckdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBmaWx0ZXJHcm91cC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhdGFsb2d1ZV9fZmlsdGVyX2dyb3VwJyk7XG4gICAgICBmaWx0ZXJHcm91cC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiZmlsdGVyX19ncm91cF9sYWJlbFwiPiR7a2V5LnRvVXBwZXJDYXNlKCl9PC9kaXY+YCk7XG5cbiAgICAgIGNvbnN0IGZpbHRlckdyb3VwQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZmlsdGVyR3JvdXBDb250ZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmlsdGVyX19ncm91cF9jb250ZW50Jyk7XG5cbiAgICAgIHZhbHVlLnNvcnQoKS5mb3JFYWNoKChmaWx0ZXJWYWx1ZSkgPT4ge1xuICAgICAgICBmaWx0ZXJHcm91cENvbnRlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBDSEVDS0JPWF9URU1QTEFURShrZXksIGZpbHRlclZhbHVlKSk7XG4gICAgICB9KTtcblxuICAgICAgZmlsdGVyR3JvdXAuYXBwZW5kQ2hpbGQoZmlsdGVyR3JvdXBDb250ZW50KTtcblxuICAgICAgdGhpcy5pbml0RmlsdGVyR3JvdXBDb250ZW50KGZpbHRlckdyb3VwLCBmaWx0ZXJHcm91cENvbnRlbnQpO1xuICAgICAgdGhpcy5maWx0ZXJzQ29udGFuaW5lci5hcHBlbmRDaGlsZChmaWx0ZXJHcm91cCk7XG4gICAgfVxuICB9XG5cbiAgZHJhd1Jlc2V0QnV0dG9uKGNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCAnPGJ1dHRvbiBjbGFzcz1cImZpbHRlcl9fYnV0dG9uX3Jlc2V0XCI+UmVzZXQgZmlsdGVyczwvYnV0dG9uPicpO1xuICB9XG5cbiAgaW5pdEZpbHRlckdyb3VwQ29udGVudChncm91cCwgY29udGVudCkge1xuICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjb25zdCBsYWJlbCA9IGdyb3VwLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdkaXYnKVswXTtcblxuICAgIGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgeyBkaXNwbGF5IH0gPSBjb250ZW50LnN0eWxlO1xuICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheSA9PT0gJ25vbmUnID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJzO1xuIiwiY29uc3QgSE9NRVBBR0VfVEVNUExBVEUgPSAoKSA9PiBgXG4gIDxkaXYgY2xhc3M9XCJsZWFkX19iYW5uZXJcIj5cbiAgICA8aW1nIHNyYz1cImltZy9ob21lcGFnZS9sZWFkLWJhbm5lci5qcGdcIiAvPlxuICAgIDxkaXYgY2xhc3M9XCJiYW5uZXJfX2NvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGl0bGVcIj5DaGVjayBvdXIgdmlkZW88L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3ViLXRpdGxlXCI+TGVhcm5pbmcgaW4gNiB3ZWVrczwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPHNlY3Rpb24gaWQ9XCJzZXJ2aWNlc1wiPlxuICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cbiAgICAgICAgPGgxPlNlcnZpY2VzPC9oMT5cbiAgICAgICAgPHA+PC9wPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvaWNvbi0xLnBuZ1wiIC8+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlJlY29yZGluZzxiciAvPnNlcnZpY2VzPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvaWNvbi0yLnBuZ1wiIC8+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPkdldCBhIHByaW50ZWQ8YnIgLz5jZXJ0aWZpY2F0ZTwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2ljb24tMy5wbmdcIiAvPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5MZXNzb25zIHZpYTxiciAvPlNreXBlPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPGRpdiBjbGFzcz1cInNlY29uZF9fYmFubmVyXCI+XG4gICAgICA8aW1nIHNyYz1cIi9pbWcvaG9tZXBhZ2Uvc2Vjb25kLWJhbm5lci5wbmdcIiAvPlxuICAgICAgPGRpdiBjbGFzcz1cImJhbm5lcl9fY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGl0bGVcIj5PdXIgTGVzc29uczwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInN1Yi10aXRsZVwiPkFyZSBFYXN5PC9zcGFuPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LjwvbGk+XG4gICAgICAgICAgICA8bGk+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC48L2xpPlxuICAgICAgICAgICAgPGxpPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzZWN0aW9uIGlkPVwicHJvamVjdHNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDxoMT5PdXIgUHJvamVjdHM8L2gxPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPjxpbWcgc3JjPVwiaHR0cDovL3BsYWNlaG9sZC5pdC8xNTB4MTUwXCIgLz48L2xpPlxuICAgICAgICAgIDxsaT48aW1nIHNyYz1cImh0dHA6Ly9wbGFjZWhvbGQuaXQvMTUweDE1MFwiIC8+PC9saT5cbiAgICAgICAgICA8bGk+PGltZyBzcmM9XCJodHRwOi8vcGxhY2Vob2xkLml0LzE1MHgxNTBcIiAvPjwvbGk+XG4gICAgICAgICAgPGxpPjxpbWcgc3JjPVwiaHR0cDovL3BsYWNlaG9sZC5pdC8xNTB4MTUwXCIgLz48L2xpPlxuICAgICAgICAgIDxsaT48aW1nIHNyYz1cImh0dHA6Ly9wbGFjZWhvbGQuaXQvMTUweDE1MFwiIC8+PC9saT5cbiAgICAgICAgICA8bGk+PGltZyBzcmM9XCJodHRwOi8vcGxhY2Vob2xkLml0LzE1MHgxNTBcIiAvPjwvbGk+XG4gICAgICAgICAgPGxpPjxpbWcgc3JjPVwiaHR0cDovL3BsYWNlaG9sZC5pdC8xNTB4MTUwXCIgLz48L2xpPlxuICAgICAgICAgIDxsaT48aW1nIHNyYz1cImh0dHA6Ly9wbGFjZWhvbGQuaXQvMTUweDE1MFwiIC8+PC9saT5cbiAgICAgICAgICA8bGk+PGltZyBzcmM9XCJodHRwOi8vcGxhY2Vob2xkLml0LzE1MHgxNTBcIiAvPjwvbGk+XG4gICAgICAgICAgPGxpPjxpbWcgc3JjPVwiaHR0cDovL3BsYWNlaG9sZC5pdC8xNTB4MTUwXCIgLz48L2xpPlxuICAgICAgICAgIDxsaT48aW1nIHNyYz1cImh0dHA6Ly9wbGFjZWhvbGQuaXQvMTUweDE1MFwiIC8+PC9saT5cbiAgICAgICAgICA8bGk+PGltZyBzcmM9XCJodHRwOi8vcGxhY2Vob2xkLml0LzE1MHgxNTBcIiAvPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+YDtcblxuXG5mdW5jdGlvbiByZW5kZXJIb21lUGFnZSgpIHtcbiAgY29uc3QgaG9tZXBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtaG9tZXBhZ2UnKTtcbiAgaG9tZXBhZ2UuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBIT01FUEFHRV9URU1QTEFURSgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVySG9tZVBhZ2U7XG4iLCJpbXBvcnQgeyBOQVZCQVJfVEVNUExBVEUgfSBmcm9tICcuLi90ZW1wbGF0ZXMuanMnO1xuXG5mdW5jdGlvbiBpbml0TmF2YmFyKG5hdmJhciwgcmVuZGVyKSB7XG4gIG5hdmJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgc3dpdGNoIChlLnRhcmdldC5jbGFzc05hbWUpIHtcbiAgICBjYXNlICduYXZfX2xpbmtfaG9tZSc6XG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgJy8nKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ25hdl9fbGlua19hYm91dCc6XG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgJy9hYm91dCcpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbmF2X19saW5rX2NhdGFsb2d1ZSc6XG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgJy9jYXRhbG9ndWUnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ25hdl9fbGlua19jb250YWN0JzpcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCAnL2NvbnRhY3QnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ25hdl9fbGlua19jYXJ0JzpcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCAnL2NhcnQnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ25hdl9fbGlua19sb2dpbic6XG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgJy9sb2dpbicpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZW5kZXIod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlck5hdmJhcihyZW5kZXIpIHtcbiAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLW1haW4tbmF2Jyk7XG4gIG5hdmJhci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIE5BVkJBUl9URU1QTEFURSgpKTtcbiAgaW5pdE5hdmJhcihuYXZiYXIsIHJlbmRlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlck5hdmJhcjtcbiIsImltcG9ydCB7IFNJTkdMRV9QQUdFX1RFTVBMQVRFIH0gZnJvbSAnLi4vdGVtcGxhdGVzLmpzJztcblxuY2xhc3MgU2luZ2xlUGFnZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2luZ2xlUGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1zaW5nbGUtcGFnZScpO1xuICAgIGlmIChTaW5nbGVQYWdlLmluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gU2luZ2xlUGFnZS5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBTaW5nbGVQYWdlLmluc3RhbmNlID0gdGhpcztcbiAgfVxuXG4gIGRyYXdTaW5nbGVQYWdlKHByb2R1Y3QpIHtcbiAgICBpZiAocHJvZHVjdCkge1xuICAgICAgdGhpcy5yZXNldFBhZ2UoKTtcbiAgICAgIHRoaXMuc2luZ2xlUGFnZUNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIFNJTkdMRV9QQUdFX1RFTVBMQVRFKHByb2R1Y3QpKTtcbiAgICB9XG4gIH1cblxuICByZXNldFBhZ2UoKSB7XG4gICAgY29uc3QgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlUGFnZV9fY29udGVudCcpO1xuICAgIGlmIChwYWdlQ29udGVudCkge1xuICAgICAgcGFnZUNvbnRlbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVBhZ2U7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5leHBvcnQgY29uc3QgRk9STV9URU1QTEFURSA9ICgpID0+IGBcbiAgPGRpdiBjbGFzcz1cImF1dGhfX2Zvcm1fd3JhcHBlclwiPlxuICA8dWw+XG4gICAgPGxpIGlkPVwianMtc2lnbi1pbi1saW5rXCI+U2lnbiBJbjwvbGk+XG4gICAgPGxpIGlkPVwianMtc2lnbi11cC1saW5rXCI+U2lnbiBVcDwvbGk+XG4gIDwvdWw+XG4gIDxmb3JtIGlkPVwianMtc2lnbi1pbi1mb3JtXCIgbm92YWxpZGF0ZT5cbiAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDo8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIj5cbiAgICA8cCBjbGFzcz1cImVtYWlsLWVycm9yXCI+PC9wPlxuICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOjwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiPlxuICAgIDxwIGNsYXNzPVwicGFzc3dvcmQtZXJyb3JcIj48L3A+XG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2lnbiBpbjwvYnV0dG9uPlxuICA8L2Zvcm0+XG4gIDxmb3JtIGlkPVwianMtc2lnbi11cC1mb3JtXCIgbm92YWxpZGF0ZSBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+XG4gICAgPGxhYmVsIGZvcj1cIm5hbWVsXCI+TmFtZTo8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCI+XG4gICAgPHAgY2xhc3M9XCJuYW1lLWVycm9yXCI+PC9wPlxuICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiPlxuICAgIDxwIGNsYXNzPVwiZW1haWwtZXJyb3JcIj48L3A+XG4gICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCI+XG4gICAgPHAgY2xhc3M9XCJwYXNzd29yZC1lcnJvclwiPjwvcD5cbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TaWduIFVwPC9idXR0b24+XG4gIDwvZm9ybT5cbiAgPC9kaXY+YDtcblxuZXhwb3J0IGNvbnN0IENBUkRfT1JERVJfVEVNUExBVEUgPSAoKSA9PiBgXG48ZGl2IGNsYXNzPVwiY2FydFBhZ2VfX29yZGVyX3dyYXBwZXJcIj5cbjxkaXYgY2xhc3M9XCJjYXJ0UGFnZV9fdXNlcl9pbmZvXCI+XG4gIDxoMz5Vc2VyIEluZm88L2gzPlxuICA8ZGl2IGNsYXNzPVwiY2FydFBhZ2VfX3VzZXJfZGF0YVwiPjwvZGl2PlxuPC9kaXY+XG48ZGl2PlxuICA8aDM+VG90YWw8L2gzPlxuICA8ZGl2IGNsYXNzPVwiY2FydFBhZ2VfX3RvdGFsXCI+Tm8gaXRlbXMgY2hvc2VuPC9kaXY+XG48L2Rpdj5cbjxkaXY+XG4gIDxoMz5PcmRlciBkZXRhaWxzPC9oMz5cbiAgPGRpdiBjbGFzcz1cImNhcnRQYWdlX19kZXRhaWxzXCI+PC9kaXY+XG48L2Rpdj5cbjwvZGl2PlxuPGRpdj5cbiAgPGJ1dHRvbiBjbGFzcz1cImNhcnRQYWdlX19vcmRlcl9idXlcIj5CdXk8L2J1dHRvbj5cbjwvZGl2PmA7XG5cbmV4cG9ydCBjb25zdCBDQVRBTE9HVUVfSVRFTV9URU1QTEFURSA9IChpZCwgaW1hZ2UsIG5hbWUsIHByaWNlKSA9PiBgXG48ZGl2IGNsYXNzPVwiY2F0YWxvZ3VlX19pdGVtXCIgZGF0YS1pZD1cIiR7aWR9XCI+XG4gIDxkaXYgY2xhc3M9XCJjYXRhbG9ndWVfX2l0ZW1faW1nd3JhcFwiPlxuICAgIDxpbWcgY2xhc3M9XCJjYXRhbG9ndWVfX2l0ZW1fcGhvdG9cIiBzcmM9LyR7aW1hZ2V9PlxuICAgIDxwIGNsYXNzPVwiY2F0YWxvZ3VlX19pdGVtX25hbWVcIj4ke25hbWV9PC9wPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNhdGFsb2d1ZV9faXRlbV9pbmZvXCI+XG4gICAgPHAgY2xhc3M9XCJjYXRhbG9ndWVfX2l0ZW1fcHJpY2VcIj4ke3ByaWNlfSQ8L3A+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImNhdGFsb2d1ZV9faXRlbV9hZGRcIj5BZGQgdG8gY2FydDwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvZGl2PmA7XG5cbmV4cG9ydCBjb25zdCBQUklDRV9JTlBVVF9URU1QTEFURSA9IChtaW4sIG1heCkgPT4gYFxuICA8ZGl2IGNsYXNzPVwiZmlsdGVyLWdyb3VwLWxhYmVsXCI+XG4gICAgPGgzPlBSSUNFOjwvaDM+XG4gICAgPGRpdiBjbGFzcz1cImZpbHRlcl9fZ3JvdXBfY29udGVudFwiPlxuICAgICAgPHNwYW4+JHttaW59PC9zcGFuPlxuICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIGNsYXNzPVwiZmlsdGVyX19ncm91cF9wcmljZVwiIG5hbWU9XCJwcmljZVwiIFxuICAgICAgICB2YWx1ZT1cIiR7bWF4fVwiIG1pbj1cIiR7bWlufVwiIG1heD1cIiR7bWF4fVwiPlxuICAgICAgPHNwYW4+JHttYXh9PC9zcGFuPlxuICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcl9fcHJpY2VfY3VycmVudFwiPjxkaXY+IFxuICAgIDwvZGl2PlxuICA8L2Rpdj5gO1xuXG5leHBvcnQgY29uc3QgQ0hFQ0tCT1hfVEVNUExBVEUgPSAoZmlsdGVyTmFtZSwgZmlsdGVyVmFsdWUpID0+IGBcbiAgPGRpdiBjbGFzcz1cImZpbHRlcl9fZ3JvdXBfY2hlY2tib3hcIiB2YWx1ZT0ke2ZpbHRlclZhbHVlfT5cbiAgICA8bGFiZWwgZm9yPVwiJHtmaWx0ZXJWYWx1ZX1cIj4ke2ZpbHRlclZhbHVlfTwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCIke2ZpbHRlck5hbWV9XCIgdmFsdWU9XCIke2ZpbHRlclZhbHVlfVwiIC8+XG4gIDwvZGl2PmA7XG5cbmV4cG9ydCBjb25zdCBDQVJUX0lURU1fVEVNUExBVEUgPSAoaWQsIHZhbHVlLCBudW1iZXJBdmFpbGFibGUsIGltYWdlLCBuYW1lLCBwcmljZSkgPT4gYFxuPGRpdiBjbGFzcz1cImNhcnRfX2l0ZW1fd3JhcHBlclwiIGRhdGEtaWQ9XCIke2lkfVwiPlxuICA8Zm9ybSBjbGFzcz1cImNhcnRfX2l0ZW1faW5wdXRcIj5cbiAgICA8aW5wdXQgY2xhc3M9XCJjYXJ0X19pdGVtX3F1YW50aXR5XCIgZGF0YS1pZD1cIiR7aWR9XCIgdHlwZT1cIm51bWJlclwiIHZhbHVlPVwiJHt2YWx1ZX1cIiBtaW49XCIxXCIgbWF4PVwiJHtudW1iZXJBdmFpbGFibGV9XCIvPlxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNhcnRfX2l0ZW1fY2hvb3NlXCIvPlxuICA8L2Zvcm0+XG4gIDxkaXYgY2xhc3M9XCJjYXJ0X19pdGVtX2RldGFpbHNcIj5cbiAgICA8aW1nIGNsYXNzPVwiY2FydF9faXRlbV9pbWFnZVwiIHNyYz1cIi8ke2ltYWdlfVwiIC8+XG4gICAgPGg1IGNsYXNzPVwiY2FydF9faXRlbV9uYW1lXCI+JHtuYW1lfTwvaDU+XG4gICAgPHAgY2xhc3M9XCJjYXJ0X19pdGVtX3ByaWNlXCIgZGF0YS12YWx1ZT1cIiR7cHJpY2V9XCI+UHJpY2U6ICR7cHJpY2V9JDwvcD5cbiAgPC9kaXY+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImNhcnRfX2l0ZW1fZGVsZXRlXCIgZGF0YS1pbmRleD1cIiR7aWR9XCI+RGVsZXRlPC9idXR0b24+XG4gIDwvZGl2PmA7XG5cbmV4cG9ydCBjb25zdCBOQVZCQVJfVEVNUExBVEUgPSAoKSA9PiBgXG48ZGl2IGNsYXNzPVwibmF2X193cmFwcGVyXCI+XG4gIDx1bD5cbiAgICA8bGkgY2xhc3M9XCJuYXZfX2xpbmtfaG9tZVwiPkhvbWU8L2xpPlxuICAgIDxsaSBjbGFzcz1cIm5hdl9fbGlua19hYm91dFwiPkFib3V0PC9saT5cbiAgICA8bGkgY2xhc3M9XCJuYXZfX2xpbmtfY2F0YWxvZ3VlXCI+Q2F0YWxvZ3VlPC9saT5cbiAgICA8bGkgY2xhc3M9XCJuYXZfX2xpbmtfY29udGFjdFwiPkNvbnRhY3Q8L2xpPlxuICA8L3VsPlxuICA8dWw+XG4gICAgPGxpIGNsYXNzPVwibmF2X19saW5rX2xvZ2luXCI+TG9nIGluPC9saT5cbiAgICA8bGkgY2xhc3M9XCJuYXZfX2xpbmtfbG9nb3V0XCI+TG9nIG91dDwvbGk+XG4gICAgPGxpPjxpbWcgY2xhc3M9XCJuYXZfX2xpbmtfY2FydFwiIHNyYz1cIi9hc3NldHMvaW1nLzEyNjA4My5wbmdcIj48L2xpPlxuICA8L3VsPlxuPC9kaXY+YDtcblxuZXhwb3J0IGNvbnN0IFNJTkdMRV9QQUdFX1RFTVBMQVRFID0gKHByb2R1Y3QpID0+IGBcbiAgPGRpdiBjbGFzcz1cInNpbmdsZVBhZ2VfX2NvbnRlbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwic2luZ2xlUGFnZV9fY29udGVudF9tYWluXCI+IFxuICAgIDxkaXYgY2xhc3M9XCJzaW5nbGVQYWdlX19pbWdfY29udGFpbmVyXCI+XG4gICAgICA8aW1nIGNsYXNzPVwic2luZ2xlUGFnZV9jb250ZW50X2ltZ1wiIHNyYz1cIi8ke3Byb2R1Y3QuaW1hZ2V9XCI+XG4gICAgPC9kaXY+XG4gICAgPGgzPiR7cHJvZHVjdC5uYW1lfTwvaDM+XG4gICAgPGgzPiR7cHJvZHVjdC5wcmljZX0kPC9oMz5cbiAgICA8ZGl2IGNsYXNzPVwic2luZ2xlUGFnZV9faXRlbV9hZGRcIj5cbiAgICAgIDxidXR0b24+QWRkIHRvIGNhcnQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cInNpbmdsZVBhZ2VfY29udGVudF9pbmZvXCI+XG4gICAgPGRpdiBjbGFzcz1cInNpbmdsZVBhZ2VfY29udGVudF9iYXNlXCI+XG4gICAgICA8cD48Yj5CcmFuZDwvYj46ICR7cHJvZHVjdC5icmFuZH08L3A+XG4gICAgICA8cD48Yj5NYW51ZmFjdHVyZXI8L2I+OiAke3Byb2R1Y3QubWFudWZhY3R1cmVyfTwvcD5cbiAgICAgIDxwPjxiPlZvbHVtZTwvYj46ICR7cHJvZHVjdC52b2x1bWV9PC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzaW5nbGVQYWdlX2NvbnRlbnRfZGVzY1wiPlxuICAgICAgPHA+JHtwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2luZ2xlUGFnZV9jb250ZW50X3NwZWNcIj5cbiAgICAgIDxwPjxiPlNwaXJpdCB0eXBlPC9iPjogJHtwcm9kdWN0WydzcGlyaXQgdHlwZSddfTwvcD5cbiAgICAgIDxwPjxiPkNhdGVnb3J5PC9iPjogJHtwcm9kdWN0LmNhdGVnb3J5fTwvcD5cbiAgICAgIDxwPjxiPlBhY2thZ2U8L2I+OiAke3Byb2R1Y3QucGFja2FnZX08L3A+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8L2Rpdj5cbmA7XG4iLCJjb25zdCBDT05GSUcgPSB7XG4gIGFwaTogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsXG4gIHJvdXRlczoge1xuICAgIGhvbWVQYWdlOiB7IHJvdXRlOiAnLycsIGNvbnRlbnRJZDogJ2pzLWhvbWVwYWdlJyB9LFxuICAgIGNvbnRhY3RQYWdlOiB7IHJvdXRlOiAnY29udGFjdCcsIGNvbnRlbnRJZDogJ2pzLWNvbnRhY3QtcGFnZScgfSxcbiAgICBhYm91dFBhZ2U6IHsgcm91dGU6ICdhYm91dCcsIGNvbnRlbnRJZDogJ2pzLWFib3V0LXBhZ2UnIH0sXG4gICAgY2F0YWxvZ3VlUGFnZTogeyByb3V0ZTogJ2NhdGFsb2d1ZScsIGNvbnRlbnRJZDogJ2pzLWNhdGFsb2d1ZS1wYWdlJyB9LFxuICAgIHByb2R1Y3RQYWdlOiB7IHJvdXRlOiAncHJvZHVjdCcsIGNvbnRlbnRJZDogJ2pzLXNpbmdsZS1wYWdlJyB9LFxuICAgIGVycm9yUGFnZTogeyByb3V0ZTogJzQwNCcsIGNvbnRlbnRJZDogJ2pzLWVycm9yLXBhZ2UnIH0sXG4gICAgYXV0aFBhZ2U6IHsgcm91dGU6ICdsb2dpbicsIGNvbnRlbnRJZDogJ2pzLWF1dGgtcGFnZScgfSxcbiAgICBjYXJ0UGFnZTogeyByb3V0ZTogJ2NhcnQnLCBjb250ZW50SWQ6ICdqcy1jYXJ0LXBhZ2UnIH0sXG4gIH0sXG4gIGZpbHRlcnM6IFsnYnJhbmQnLCAndm9sdW1lJywgJ21hbnVmYWN0dXJlcicsICdjYXRlZ29yeScsICdwYWNrYWdlJywgJ3NwaXJpdCB0eXBlJ10sXG4gIHZhbGlkYXRpb25SdWxlczoge1xuICAgIG5hbWU6IHtcbiAgICAgIG1pbkxlbjogMyxcbiAgICAgIG1heExlbjogMjAsXG4gICAgICBvbmx5TnVtYmVyc0FuZExldHRlcnM6IHRydWUsXG4gICAgICBpc05vdEVtcHR5OiB0cnVlLFxuICAgIH0sXG4gICAgZW1haWw6IHtcbiAgICAgIGlzTm90RW1wdHk6IHRydWUsXG4gICAgICBpc1ZhbGlkRW1haWw6IHRydWUsXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgbWluTGVuOiA2LFxuICAgICAgbWF4TGVuOiAyMCxcbiAgICAgIG9ubHlOdW1iZXJzQW5kTGV0dGVyczogdHJ1ZSxcbiAgICAgIGlzTm90RW1wdHk6IHRydWUsXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENPTkZJRztcbiIsImltcG9ydCBDT05GSUcgZnJvbSAnLi9jb25maWcuanMnO1xuaW1wb3J0ICcuLi9kaXN0L2luZGV4Lmh0bWwnO1xuaW1wb3J0ICcuLi9kaXN0L2Fzc2V0cy9zdHlsZXMvc2Nzcy9zdHlsZXMuc2Nzcyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJy4vbWFpbi9Sb3V0ZXIuanMnO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vbWFpbi9SZW5kZXJlci5qcyc7XG5pbXBvcnQgRmlsdGVyU2VydmljZSBmcm9tICcuL21haW4vRmlsdGVyU2VydmljZS5qcyc7XG5pbXBvcnQgQ2FydFNlcnZpY2UgZnJvbSAnLi9tYWluL0NhcnRTZXJ2aWNlLmpzJztcbmltcG9ydCBDYXJ0T2JzZXJ2ZXIgZnJvbSAnLi9tYWluL0NhcnRPYnNldmVyLmpzJztcbmltcG9ydCBGb3JtU2VydmljZSBmcm9tICcuL21haW4vRm9ybVNlcnZpY2UuanMnO1xuaW1wb3J0IHsgbWFrZVJlcXVlc3QgfSBmcm9tICcuL21haW4vdXRpbHMvbWFrZVJlcXVlc3QuanMnO1xuXG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvZHVjdHMgPSBbXTtcbiAgICB0aGlzLnJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcbiAgICB0aGlzLmZpbHRlclNlcnZpY2UgPSBuZXcgRmlsdGVyU2VydmljZSgpO1xuICAgIHRoaXMuY2FydFNlcnZpY2UgPSBuZXcgQ2FydFNlcnZpY2UoKTtcbiAgICB0aGlzLmNhcnRPYnNlcnZlciA9IG5ldyBDYXJ0T2JzZXJ2ZXIoKTtcbiAgICB0aGlzLmZvcm1TZXJ2aWNlID0gbmV3IEZvcm1TZXJ2aWNlKHRoaXMucm91dGVyKTtcbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHRoaXMucm91dGVyLCB0aGlzLmZpbHRlclNlcnZpY2UsIHRoaXMuY2FydFNlcnZpY2UsIHRoaXMuY2FydE9ic2VydmVyKTtcbiAgICB0aGlzLmZpbHRlclNlcnZpY2Uuc3Vic2NyaWJlKHRoaXMub25GaWx0ZXJDaGFuZ2UuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5jYXJ0U2VydmljZS5zdWJzY3JpYmUodGhpcy5vbkNhcnRDaGFuZ2UuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIG1ha2VSZXF1ZXN0KCdwcm9kdWN0cycsICdHRVQnKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxuICAgICAgLnRoZW4oKHByb2R1Y3RzKSA9PiB7XG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5pdFJvdXRlcigpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmluaXRBcHAodGhpcy5wcm9kdWN0cyk7XG4gICAgICAgIHRoaXMucm91dGVyLnJlbmRlclJvdXRlQ29udGVudCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgICB0aGlzLmZpbHRlclNlcnZpY2UuaW5pdCgpO1xuICAgICAgICB0aGlzLmNhcnRTZXJ2aWNlLmluaXQoKTtcbiAgICAgICAgdGhpcy5mb3JtU2VydmljZS5pbml0QXV0aEZvcm1zKCk7XG4gICAgICAgIHRoaXMuY2FydFNlcnZpY2UuaW5pdENhcnRJbnB1dEhhZGxlcnMoKTtcbiAgICAgICAgdGhpcy5jYXJ0T2JzZXJ2ZXIuaW5pdE9ic2VydmVyKCk7XG4gICAgICB9KTtcbiAgICAvLyAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKSk7XG4gIH1cblxuICBpbml0Um91dGVyKCkge1xuICAgIE9iamVjdC5rZXlzKENPTkZJRy5yb3V0ZXMpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCB7IHJvdXRlLCBjb250ZW50SWQgfSA9IENPTkZJRy5yb3V0ZXNbZW50cnldO1xuICAgICAgaWYgKHJvdXRlICE9PSBDT05GSUcucm91dGVzLmF1dGhQYWdlLnJvdXRlKSB7XG4gICAgICAgIHRoaXMucm91dGVyLmNyZWF0ZU5ld1JvdXRlKHJvdXRlLCB0aGlzLnJlbmRlcmVyLnJlbmRlclBhZ2VDb250ZW50LmJpbmQodGhpcy5yZW5kZXJlciwgY29udGVudElkLCB0aGlzLnByb2R1Y3RzKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJvdXRlci5jcmVhdGVOZXdSb3V0ZShyb3V0ZSwgKCkgPT4ge1xuICAgICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkge1xuICAgICAgICAgICAgY29uc3QgY2FydFJvdXRlID0gQ09ORklHLnJvdXRlcy5jYXJ0UGFnZS5yb3V0ZTtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBgLyR7Y2FydFJvdXRlfWApO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIucmVuZGVyUm91dGVDb250ZW50KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyUGFnZUNvbnRlbnQuY2FsbCh0aGlzLnJlbmRlcmVyLCBjb250ZW50SWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvbkZpbHRlckNoYW5nZShkYXRhKSB7XG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGRhdGEpO1xuICAgIHRoaXMucm91dGVyLnJlbmRlclJvdXRlQ29udGVudChkZWNvZGVVUkkod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSk7XG4gIH1cblxuICBvbkNhcnRDaGFuZ2UoZGF0YSkge1xuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoQ09ORklHLnJvdXRlcy5jYXRhbG9ndWVQYWdlLnJvdXRlKVxuICAgICAgfHwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKENPTkZJRy5yb3V0ZXMucHJvZHVjdFBhZ2Uucm91dGUpKSB7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2R1Y3RzJywgZGF0YSk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlckNhcnQodGhpcy5wcm9kdWN0cyk7XG4gICAgICB0aGlzLmNhcnRTZXJ2aWNlLmluaXRDYXJ0SW5wdXRIYWRsZXJzKCk7XG4gICAgICB0aGlzLmNhcnRPYnNlcnZlci5pbml0T2JzZXJ2ZXIoKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuIiwiY2xhc3MgQXV0aFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnVzZXIgPSB7fTtcbiAgICB0aGlzLmlzTG9nZ2VkSW4gPSBmYWxzZTtcbiAgfVxuXG4gIHNpZ25Vc2VySW4oKSB7XG4gICAgdGhpcy51c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcbiAgICBpZiAodGhpcy51c2VyKSB7XG4gICAgICB0aGlzLmlzTG9nZ2VkSW4gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVzZXIgPSB7fTtcbiAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnRvZ2dsZUF1dGhPbmx5Q29udGVudCgpO1xuICB9XG5cbiAgc2lnblVzZXJPdXQoKSB7XG4gICAgdGhpcy51c2VyID0ge307XG4gICAgdGhpcy5pc0xvZ2dlZEluID0gZmFsc2U7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XG4gICAgdGhpcy50b2dnbGVBdXRoT25seUNvbnRlbnQoKTtcbiAgfVxuXG4gIGxvZ1VzZXJJbihkYXRhKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgdGhpcy51c2VyID0gZGF0YTtcbiAgICB0aGlzLmlzTG9nZ2VkSW4gPSB0cnVlO1xuICAgIHRoaXMudG9nZ2xlQXV0aE9ubHlDb250ZW50KCk7XG4gIH1cblxuICB0b2dnbGVBdXRoT25seUNvbnRlbnQoKSB7XG4gICAgY29uc3QgbG9nT3V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fbGlua19sb2dvdXQnKTtcbiAgICBjb25zdCBsb2dpbkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19saW5rX2xvZ2luJyk7XG4gICAgY29uc3QgdXNlckluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydFBhZ2VfX3VzZXJfaW5mbycpO1xuICAgIGNvbnN0IHVzZXJEYXRhID0gdXNlckluZm8ucXVlcnlTZWxlY3RvcignLmNhcnRQYWdlX191c2VyX2RhdGEnKTtcblxuICAgIHVzZXJEYXRhLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJyxcbiAgICAgIGA8cD4ke3RoaXMudXNlci5uYW1lfTwvcD5cbiAgICAgIDxwPiR7dGhpcy51c2VyLmVtYWlsfTwvcD5gKTtcblxuICAgIGlmICh0aGlzLmlzTG9nZ2VkSW4pIHtcbiAgICAgIGxvZ091dEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIGxvZ2luTGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdXNlckluZm8uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVzZXJEYXRhLnRleHRDb250ZW50ID0gJyc7XG4gICAgICBsb2dPdXRCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGxvZ2luTGluay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHVzZXJJbmZvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhTZXJ2aWNlO1xuIiwiY2xhc3MgQ2FydE9ic2VydmVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jYXJ0T3JkZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtb3JkZXItY2FyZCcpO1xuICB9XG5cbiAgaW5pdE9ic2VydmVyKCkge1xuICAgIGNvbnN0IG5vZGVzVG9PYnNlcnZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcnRfX2l0ZW1faW5wdXQnKTtcbiAgICBpZiAobm9kZXNUb09ic2VydmUpIHtcbiAgICAgIHRoaXMuaW5pdENhcnRDYWxjdWxhdG9yKCk7XG4gICAgICB0aGlzLmNhbGN1bGF0ZVRvdGFsKCk7XG4gICAgfVxuICB9XG5cbiAgaW5pdENhcnRDYWxjdWxhdG9yKCkge1xuICAgIGNvbnN0IGZvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcnRfX2l0ZW1faW5wdXQnKTtcbiAgICBjb25zdCBkZWxldGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcnRfX2l0ZW1fZGVsZXRlJyk7XG5cbiAgICBmb3Jtcy5mb3JFYWNoKChmb3JtKSA9PiB7XG4gICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHRoaXMuY2FsY3VsYXRlVG90YWwoKSk7XG4gICAgfSk7XG5cbiAgICBkZWxldGVCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgdGhpcy5kZWxldGVDYXJkT3JkZXJOb3RlKGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZVRvdGFsKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVRvdGFsKCkge1xuICAgIGNvbnN0IHRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRQYWdlX190b3RhbCcpO1xuXG4gICAgY29uc3QgY2FydEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcnRfX2l0ZW1fd3JhcHBlcicpO1xuXG4gICAgaWYgKGNhcnRJdGVtcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHByaWNlVG90YWwgPSBBcnJheS5mcm9tKGNhcnRJdGVtcykucmVkdWNlKCh0b3RhbFN1bSwgY3VycmVudEl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgZmxhZyA9IGN1cnJlbnRJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19pdGVtX2Nob29zZScpO1xuICAgICAgICBjb25zdCB7IGlkIH0gPSBjdXJyZW50SXRlbS5kYXRhc2V0O1xuXG4gICAgICAgIGlmIChmbGFnLmNoZWNrZWQpIHtcbiAgICAgICAgICBjb25zdCBuYW1lID0gY3VycmVudEl0ZW0ucXVlcnlTZWxlY3RvcignLmNhcnRfX2l0ZW1fbmFtZScpLnRleHRDb250ZW50O1xuICAgICAgICAgIGNvbnN0IHByaWNlID0gY3VycmVudEl0ZW0ucXVlcnlTZWxlY3RvcignLmNhcnRfX2l0ZW1fcHJpY2UnKS5kYXRhc2V0LnZhbHVlO1xuICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gY3VycmVudEl0ZW0ucXVlcnlTZWxlY3RvcignLmNhcnRfX2l0ZW1fcXVhbnRpdHknKS52YWx1ZTtcbiAgICAgICAgICB0b3RhbFN1bSArPSBwcmljZSAqIHF1YW50aXR5O1xuICAgICAgICAgIHRoaXMucmVuZGVyQ2FydE9yZGVyRGV0YWlscyhpZCwgbmFtZSwgcXVhbnRpdHkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGVsZXRlQ2FyZE9yZGVyTm90ZShpZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdG90YWxTdW07XG4gICAgICB9LCAwKTtcblxuICAgICAgdG90YWwudGV4dENvbnRlbnQgPSBwcmljZVRvdGFsID4gMCA/IHByaWNlVG90YWwudG9GaXhlZCgyKSA6ICdObyBpdGVtcyBjaG9zZW4nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b3RhbC50ZXh0Q29udGVudCA9ICdObyBpdGVtcyBjaG9zZW4nO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckNhcnRPcmRlckRldGFpbHMoaWQsIG5hbWUsIHF1YW50aXR5KSB7XG4gICAgY29uc3QgY2FydERldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydFBhZ2VfX2RldGFpbHMnKTtcbiAgICBpZiAoY2FydERldGFpbHMuY2hpbGRyZW4pIHtcbiAgICAgIGNvbnN0IGZvdW5kID0gQXJyYXkuZnJvbShjYXJ0RGV0YWlscy5jaGlsZHJlbilcbiAgICAgICAgLmZpbmQoKGl0ZW0pID0+IE51bWJlcihpdGVtLmlkKSA9PT0gTnVtYmVyKGlkKSk7XG5cbiAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICBmb3VuZC50ZXh0Q29udGVudCA9IGAke25hbWV9IDogJHtxdWFudGl0eX1gO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRldGFpbHMuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcblxuICAgIGRldGFpbHMudGV4dENvbnRlbnQgPSBgJHtuYW1lfSA6ICR7cXVhbnRpdHl9YDtcbiAgICBjYXJ0RGV0YWlscy5hcHBlbmRDaGlsZChkZXRhaWxzKTtcbiAgfVxuXG4gIGRlbGV0ZUNhcmRPcmRlck5vdGUoaWQpIHtcbiAgICBjb25zdCBjYXJ0RGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0UGFnZV9fZGV0YWlscycpO1xuICAgIGNvbnN0IGZvdW5kID0gQXJyYXkuZnJvbShjYXJ0RGV0YWlscy5jaGlsZHJlbilcbiAgICAgIC5maW5kKChpdGVtKSA9PiBOdW1iZXIoaXRlbS5pZCkgPT09IE51bWJlcihpZCkpO1xuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBmb3VuZC5yZW1vdmUoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FydE9ic2VydmVyO1xuIiwiaW1wb3J0IE9ic2VydmFibGUgZnJvbSAnLi9PYnNlcnZhYmxlLmpzJztcblxuY2xhc3MgQ2FydFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNhcnRzID0gW107XG4gICAgdGhpcy5wcm9kdWN0c0luQ2FydCA9IHt9O1xuICAgIHRoaXMub2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlKCk7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBzdWJzY3JpYmUoZm4pIHtcbiAgICB0aGlzLm9ic2VydmFibGUuc3Vic2NyaWJlKGZuKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5jYXJ0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9ndWVfX2l0ZW1fYWRkJyk7XG4gICAgdGhpcy5jYXJ0cy5mb3JFYWNoKChjYXJ0KSA9PiB7XG4gICAgICBjYXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUlkID0gZS50YXJnZXQuY2xvc2VzdCgnLmNhdGFsb2d1ZV9faXRlbScpLmRhdGFzZXQuaWQ7XG4gICAgICAgIHRoaXMuYWRkUHJvZHVjdFRvQ2FydChpdGVtSWQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5pbml0UHJvZHVjdENhcnQoKTtcbiAgICB0aGlzLmluaXRDYXJ0SW5wdXRIYWRsZXJzKCk7XG4gIH1cblxuICBpbml0UHJvZHVjdENhcnQoKSB7XG4gICAgdGhpcy5wcm9kdWN0c0luQ2FydCA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9kdWN0cycpKSB8fCB7fTtcbiAgfVxuXG4gIHVwZGF0ZUxvY2FsU3RvcmFnZSgpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2R1Y3RzJywgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9kdWN0c0luQ2FydCkpO1xuICAgIHRoaXMub2JzZXJ2YWJsZS5uZXh0KEpTT04uc3RyaW5naWZ5KHRoaXMucHJvZHVjdHNJbkNhcnQpKTtcbiAgfVxuXG4gIGRlbGV0ZVByb2R1Y3RGcm9tQ2FydChlKSB7XG4gICAgY29uc3QgeyBpbmRleCB9ID0gZS50YXJnZXQuZGF0YXNldDtcbiAgICBkZWxldGUgdGhpcy5wcm9kdWN0c0luQ2FydFtpbmRleF07XG4gICAgZS50YXJnZXQuY2xvc2VzdCgnLmNhcnRfX2l0ZW1fd3JhcHBlcicpLnJlbW92ZSgpO1xuICAgIHRoaXMudXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gIH1cblxuXG4gIGFkZFByb2R1Y3RUb0NhcnQoaXRlbUlkKSB7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5wcm9kdWN0c0luQ2FydCwgaXRlbUlkKSkge1xuICAgICAgdGhpcy5wcm9kdWN0c0luQ2FydFtpdGVtSWRdID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9kdWN0c0luQ2FydFtpdGVtSWRdICs9IDE7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gIH1cblxuICBpbml0Q2FydElucHV0SGFkbGVycygpIHtcbiAgICB0aGlzLmluaXREZWxldGVCdXR0b25zKCk7XG4gICAgdGhpcy5pbml0Q2FydE51bWJlcklucHV0KCk7XG4gIH1cblxuXG4gIGluaXREZWxldGVCdXR0b25zKCkge1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FydF9faXRlbV9kZWxldGUnKTtcbiAgICBkZWxldGVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMuZGVsZXRlUHJvZHVjdEZyb21DYXJ0KGUpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRDYXJ0TnVtYmVySW5wdXQoKSB7XG4gICAgY29uc3QgbnVtYmVySW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcnRfX2l0ZW1fcXVhbnRpdHknKTtcbiAgICBudW1iZXJJbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgIGlmIChOdW1iZXIoZS50YXJnZXQudmFsdWUpIDwgMSkge1xuICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSA+IE51bWJlcihlLnRhcmdldC5tYXgpKSB7XG4gICAgICAgICAgZS50YXJnZXQudmFsdWUgPSBlLnRhcmdldC5tYXg7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBpZCB9ID0gZS50YXJnZXQuZGF0YXNldDtcbiAgICAgICAgdGhpcy5wcm9kdWN0c0luQ2FydFtpZF0gPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0U2VydmljZTtcbiIsImltcG9ydCBPYnNlcnZhYmxlIGZyb20gXCIuL09ic2VydmFibGUuanNcIjtcblxuY2xhc3MgRmlsdGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2hlY2tib3hlcyA9IFtdO1xuICAgIHRoaXMucHJpY2VJbnB1dCA9IG51bGw7XG4gICAgdGhpcy5yZXNldEZpbHRlcnNCdG4gPSBudWxsO1xuICAgIHRoaXMuZmlsdGVycyA9IHt9O1xuICAgIHRoaXMub2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfX2dyb3VwX2NoZWNrYm94IGlucHV0Jyk7XG4gICAgdGhpcy5yZXNldEZpbHRlcnNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19idXR0b25fcmVzZXQnKTtcbiAgICB0aGlzLnByaWNlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19ncm91cF9wcmljZScpO1xuXG4gICAgdGhpcy5yZXNldEZpbHRlcnNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0RmlsdGVycygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5wcmljZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICB0aGlzLm9uSW5wdXRSYW5nZUNoYW5nZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICB0aGlzLmhhbmRsZUZpbHRlckNoYW5nZSgpO1xuICAgICAgY29uc3QgY3VycmVudFZhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX3ByaWNlX2N1cnJlbnQnKTtcbiAgICAgIGN1cnJlbnRWYWwudGV4dENvbnRlbnQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT4ge1xuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICB0aGlzLm9uQ2hlY2tCb3hDaGVja2VkKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm9uQ2hlY2tCb3hVbkNoZWNrZWQoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuZ2V0RmlsdGVycygpO1xuICAgIHRoaXMuaW5pdEZpbHRlcnMoKTtcbiAgfVxuXG4gIHN1YnNjcmliZShmbikge1xuICAgIHRoaXMub2JzZXJ2YWJsZS5zdWJzY3JpYmUoZm4pO1xuICB9XG5cbiAgaW5pdEZpbHRlcnMoKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZmlsdGVycykubGVuZ3RoKSB7XG4gICAgICB0aGlzLmNoZWNrYm94ZXMuZm9yRWFjaCgoZmlsdGVyKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmZpbHRlcnNbZmlsdGVyLm5hbWVdICYmIHRoaXMuZmlsdGVyc1tmaWx0ZXIubmFtZV0uaW5jbHVkZXMoZmlsdGVyLnZhbHVlKSkge1xuICAgICAgICAgIGZpbHRlci5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBmaWx0ZXIuY2xvc2VzdCgnLmZpbHRlcl9fZ3JvdXBfY29udGVudCcpO1xuICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZpbHRlcnMucHJpY2UpIHtcbiAgICAgIHRoaXMucHJpY2VJbnB1dC52YWx1ZSA9IHRoaXMuZmlsdGVycy5wcmljZTtcbiAgICAgIGNvbnN0IGN1cnJlbnRWYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19wcmljZV9jdXJyZW50Jyk7XG4gICAgICBjdXJyZW50VmFsLnRleHRDb250ZW50ID0gdGhpcy5maWx0ZXJzLnByaWNlO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0RmlsdGVycygpIHtcbiAgICB0aGlzLmZpbHRlcnMgPSB7fTtcbiAgICB0aGlzLmhhbmRsZUZpbHRlckNoYW5nZSgpO1xuICAgIHRoaXMuY2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT4ge1xuICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgIH0pO1xuICAgIHRoaXMucHJpY2VJbnB1dC52YWx1ZSA9IHRoaXMucHJpY2VJbnB1dC5tYXg7XG4gIH1cblxuICBnZXRGaWx0ZXJzKCkge1xuICAgIGNvbnN0IGZpbHRlcnNTdHJpbmcgPSBkZWNvZGVVUkkod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG5cbiAgICBjb25zdCBmaWx0ZXJzID0gZmlsdGVyc1N0cmluZ1xuICAgICAgLnJlcGxhY2UoJz8nLCAnJylcbiAgICAgIC5zcGxpdCgnJicpXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAucmVkdWNlKChmaWx0ZXJPYmplY3QsIGN1cnJlbkZpbHRlclZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IFtmaWx0ZXJCYXNlLCBmaWx0ZXJWYWx1ZV0gPSBjdXJyZW5GaWx0ZXJWYWx1ZS5zcGxpdCgnPScpO1xuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChmaWx0ZXJPYmplY3QsIGZpbHRlckJhc2UpKSB7XG4gICAgICAgICAgZmlsdGVyT2JqZWN0W2ZpbHRlckJhc2VdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgZmlsdGVyT2JqZWN0W2ZpbHRlckJhc2VdLnB1c2goZmlsdGVyVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBmaWx0ZXJPYmplY3Q7XG4gICAgICB9LCB7fSk7XG5cbiAgICB0aGlzLmZpbHRlcnMgPSBmaWx0ZXJzO1xuXG4gICAgcmV0dXJuIHRoaXMuZmlsdGVycztcbiAgfVxuXG4gIG9uSW5wdXRSYW5nZUNoYW5nZSh2YWx1ZSkge1xuICAgIHRoaXMuZmlsdGVycy5wcmljZSA9IFt2YWx1ZV07XG4gIH1cblxuICBvbkNoZWNrQm94Q2hlY2tlZChuYW1lLCB2YWx1ZSkge1xuICAgIGlmICghdGhpcy5maWx0ZXJzW25hbWVdKSB7XG4gICAgICB0aGlzLmZpbHRlcnNbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5maWx0ZXJzW25hbWVdICYmICF0aGlzLmZpbHRlcnNbbmFtZV0uaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICB0aGlzLmZpbHRlcnNbbmFtZV0ucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25DaGVja0JveFVuQ2hlY2tlZChuYW1lLCB2YWx1ZSkge1xuICAgIGlmICh0aGlzLmZpbHRlcnNbbmFtZV0gJiYgdGhpcy5maWx0ZXJzW25hbWVdLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbHRlcnNbbmFtZV0uaW5kZXhPZih2YWx1ZSk7XG4gICAgICB0aGlzLmZpbHRlcnNbbmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5maWx0ZXJzW25hbWVdICYmIHRoaXMuZmlsdGVyc1tuYW1lXS5sZW5ndGggPCAxKSB7XG4gICAgICBkZWxldGUgdGhpcy5maWx0ZXJzW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUZpbHRlckNoYW5nZSgpIHtcbiAgICBjb25zdCBxdWVyeSA9IHRoaXMuY3JlYXRlUXVlcnkoKTtcbiAgICBpZiAoIU9iamVjdC5rZXlzKHRoaXMuZmlsdGVycykubGVuZ3RoKSB7XG4gICAgICB0aGlzLm9ic2VydmFibGUubmV4dCgnL2NhdGFsb2d1ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9ic2VydmFibGUubmV4dChxdWVyeSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlUXVlcnkoKSB7XG4gICAgbGV0IHF1ZXJ5U3RyaW5nID0gJyc7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZXNdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuZmlsdGVycykpIHtcbiAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBxdWVyeVN0cmluZ0VsZW1lbnQgPSBgJHtrZXl9PSR7dmFsdWV9JmA7XG4gICAgICAgIHF1ZXJ5U3RyaW5nICs9IHF1ZXJ5U3RyaW5nRWxlbWVudDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBgL2NhdGFsb2d1ZT8ke3F1ZXJ5U3RyaW5nfWA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyU2VydmljZTtcbiIsImltcG9ydCBBdXRoU2VydmljZSBmcm9tICcuL0F1dGhTZXJ2aWNlLmpzJztcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vY29uZmlnLmpzJztcbmltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3V0aWxzL3ZhbGlkYXRvci5qcyc7XG5pbXBvcnQgeyBtYWtlUmVxdWVzdCB9IGZyb20gJy4vdXRpbHMvbWFrZVJlcXVlc3QuanMnO1xuXG5jbGFzcyBGb3JtU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHJvdXRlcikge1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIHRoaXMuc2lnbkluRm9ybSA9IG51bGw7XG4gICAgdGhpcy5zaWduVXBGb3JtID0gbnVsbDtcbiAgICB0aGlzLnZhbGlkYXRpb25FcnJvcnMgPSB7fTtcbiAgICB0aGlzLmF1dGggPSBuZXcgQXV0aFNlcnZpY2UoKTtcbiAgfVxuXG4gIGluaXRBdXRoRm9ybXMoKSB7XG4gICAgdGhpcy5pbml0U2lnbkluRm9ybSgpO1xuICAgIHRoaXMuaW5pdFNpZ25VcEZvcm0oKTtcbiAgICB0aGlzLnRyaWdnZXJPbklucHV0Q2hhbmdlVmFsaWRhdGlvbigpO1xuICAgIHRoaXMuYXV0aC5zaWduVXNlckluKCk7XG5cbiAgICBjb25zdCBsb2dPdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19saW5rX2xvZ291dCcpO1xuICAgIGxvZ091dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuYXV0aC5zaWduVXNlck91dCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgb3JkZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydFBhZ2VfX29yZGVyX2J1eScpO1xuICAgIG9yZGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuYXV0aC5pc0xvZ2dlZEluKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvcmRlciBpcyBiZWluZyBwbGFjZWQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCAnL2xvZ2luJyk7XG4gICAgICAgIHRoaXMucm91dGVyLnJlbmRlclJvdXRlQ29udGVudCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaW5pdFNpZ25JbkZvcm0oKSB7XG4gICAgdGhpcy5zaWduSW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXNpZ24taW4tZm9ybScpO1xuICAgIHRoaXMuc2lnbkluRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0Rm9ybURhdGEoZS50YXJnZXQpO1xuXG4gICAgICBpZiAoIU9iamVjdC5rZXlzKHRoaXMudmFsaWRhdGlvbkVycm9ycykubGVuZ3RoKSB7XG4gICAgICAgIG1ha2VSZXF1ZXN0KCd1c2VycycsICdHRVQnLCB7fSlcbiAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvdW5kVXNlciA9IHJlcy5maW5kKCh1c2VyKSA9PiB1c2VyLmVtYWlsID09PSBkYXRhLmVtYWlsICYmIHVzZXIucGFzc3dvcmQgPT09IGRhdGEucGFzc3dvcmQpO1xuICAgICAgICAgICAgaWYgKGZvdW5kVXNlcikge1xuICAgICAgICAgICAgICBjb25zdCB7IG5hbWUsIGVtYWlsIH0gPSBmb3VuZFVzZXI7XG4gICAgICAgICAgICAgIHRoaXMuYXV0aC5sb2dVc2VySW4oe1xuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgJy9jYXJ0Jyk7XG4gICAgICAgICAgICAgIHRoaXMucm91dGVyLnJlbmRlclJvdXRlQ29udGVudCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VzZXIgbm90IGZvdW5kJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0U2lnblVwRm9ybSgpIHtcbiAgICB0aGlzLnNpZ25VcEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtc2lnbi11cC1mb3JtJyk7XG4gICAgdGhpcy5zaWduVXBGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXRGb3JtRGF0YShlLnRhcmdldCk7XG5cbiAgICAgIGlmICghT2JqZWN0LmtleXModGhpcy52YWxpZGF0aW9uRXJyb3JzKS5sZW5ndGgpIHtcbiAgICAgICAgbWFrZVJlcXVlc3QoJ3VzZXJzJywgJ1BPU1QnLCBkYXRhKVxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyBuYW1lLCBlbWFpbCB9ID0gZGF0YTtcbiAgICAgICAgICAgICAgdGhpcy5hdXRoLmxvZ1VzZXJJbih7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCAnL2NhcnQnKTtcbiAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIucmVuZGVyUm91dGVDb250ZW50KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YWxpZGF0ZUlucHV0RmllbGQoZmllbGQpIHtcbiAgICBjb25zdCBhY3RpdmVGb3JtID0gZmllbGQucGFyZW50RWxlbWVudDtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBmaWVsZDtcbiAgICBjb25zdCB2YWxpZGF0aW9uUmVzdWx0ID0gdmFsaWRhdGUobmFtZSwgdmFsdWUsIENPTkZJRy52YWxpZGF0aW9uUnVsZXNbbmFtZV0pO1xuICAgIHRoaXMuZGlzcGxheUVycm9ycyhhY3RpdmVGb3JtLCBuYW1lLCB2YWxpZGF0aW9uUmVzdWx0W25hbWVdKTtcbiAgICB0aGlzLnVwZGF0ZVZhbGlkYXRpb25FcnJvcnModmFsaWRhdGlvblJlc3VsdCwgbmFtZSk7XG4gIH1cblxuICB1cGRhdGVWYWxpZGF0aW9uRXJyb3JzKHZhbGlkYXRpb25SZXN1bHQsIGZpZWxkTmFtZSkge1xuICAgIGlmICghT2JqZWN0LmtleXModmFsaWRhdGlvblJlc3VsdCkubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy52YWxpZGF0aW9uRXJyb3JzW2ZpZWxkTmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9ycyA9IE9iamVjdC5hc3NpZ24odGhpcy52YWxpZGF0aW9uRXJyb3JzLCB2YWxpZGF0aW9uUmVzdWx0KTtcbiAgICB9XG4gIH1cblxuICBkaXNwbGF5RXJyb3JzKGFjdGl2ZUZvcm0sIG5hbWUsIGVycm9ycykge1xuICAgIGNvbnN0IGVycm9yRmllbGQgPSBhY3RpdmVGb3JtLnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9LWVycm9yYCk7XG5cbiAgICBpZiAoZXJyb3JzKSB7XG4gICAgICBlcnJvckZpZWxkLnRleHRDb250ZW50ID0gZXJyb3JzLnJlZHVjZSgoZXJyb3JTdHJpbmcsIG1lc3NhZ2UpID0+IHtcbiAgICAgICAgZXJyb3JTdHJpbmcgKz0gYCR7bWVzc2FnZX1cXG5gO1xuXG4gICAgICAgIHJldHVybiBlcnJvclN0cmluZztcbiAgICAgIH0sICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyb3JGaWVsZC50ZXh0Q29udGVudCA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIHRyaWdnZXJPbklucHV0Q2hhbmdlVmFsaWRhdGlvbigpIHtcbiAgICB0aGlzLnNpZ25JbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgdGhpcy52YWxpZGF0ZUlucHV0RmllbGQoZS50YXJnZXQpO1xuICAgIH0pO1xuICAgIHRoaXMuc2lnblVwRm9ybS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICB0aGlzLnZhbGlkYXRlSW5wdXRGaWVsZChlLnRhcmdldCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRGb3JtRGF0YShmb3JtKSB7XG4gICAgY29uc3QgYXV0aERhdGEgPSB7fTtcbiAgICBjb25zdCBpbnB1dHMgPSBmb3JtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpO1xuICAgIEFycmF5LmZyb20oaW5wdXRzKS5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgdGhpcy52YWxpZGF0ZUlucHV0RmllbGQoaW5wdXQpO1xuICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gaW5wdXQ7XG4gICAgICBhdXRoRGF0YVtuYW1lXSA9IHZhbHVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGF1dGhEYXRhO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1TZXJ2aWNlO1xuIiwiY2xhc3MgT2JzZXJ2YWJsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc3Vic2NyaWJlcnMgPSBbXTtcbiAgfVxuXG4gIHN1YnNjcmliZShmbikge1xuICAgIHRoaXMuc3Vic2NyaWJlcnMucHVzaChmbik7XG4gIH1cblxuICBuZXh0KGRhdGEpIHtcbiAgICB0aGlzLnN1YnNjcmliZXJzLmZvckVhY2goKHN1YnNjcmliZWRGbikgPT4ge1xuICAgICAgc3Vic2NyaWJlZEZuKGRhdGEpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9ic2VydmFibGU7XG4iLCJpbXBvcnQgcmVuZGVyTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0Q29tcG9uZW50cy9uYXZiYXIuanMnO1xuaW1wb3J0IHJlbmRlckhvbWVQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZVBhZ2VDb21wb25lbnRzL2hvbWVwYWdlLmpzJztcbmltcG9ydCByZW5kZXJDYXRhbG9ndWUgZnJvbSAnLi4vY29tcG9uZW50cy9jYXRhbG9ndWVDb21wb25lbnRzL2NhdGFsb2d1ZS5qcyc7XG5pbXBvcnQgRmlsdGVycyBmcm9tICcuLi9jb21wb25lbnRzL2NhdGFsb2d1ZUNvbXBvbmVudHMvZmlsdGVycy5qcyc7XG5pbXBvcnQgQ2FydCBmcm9tICcuLi9jb21wb25lbnRzL2NhcnRDb21wb25lbnRzL2NhcnQuanMnO1xuaW1wb3J0IHJlbmRlck9yZGVyQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2NhcnRDb21wb25lbnRzL29yZGVyLmpzJztcbmltcG9ydCBTaW5nbGVQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvc2luZ2xlUGFnZUNvbXBvbmVudHMvc2luZ2xlUGFnZSc7XG5pbXBvcnQgcmVuZGVyQXV0aEZvcm1zIGZyb20gJy4uL2NvbXBvbmVudHMvYXV0aENvbXBvbmVudHMvbG9naW4uanMnO1xuXG5cbmNsYXNzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3Iocm91dGVyLCBjaGVja2JveFNlcnZpY2UsIGNhcnRTZXJ2aWNlLCBjYXJ0T2JzZXJ2ZXIpIHtcbiAgICB0aGlzLmFwcENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHBDb250ZW50LXdyYXBwZXInKTtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICB0aGlzLmNoZWNrYm94U2VydmljZSA9IGNoZWNrYm94U2VydmljZTtcbiAgICB0aGlzLmNhcnRTZXJ2aWNlID0gY2FydFNlcnZpY2U7XG4gICAgdGhpcy5jYXJ0T2JzZXJ2ZXIgPSBjYXJ0T2JzZXJ2ZXI7XG4gIH1cblxuICBpbml0QXBwKGRhdGEpIHtcbiAgICByZW5kZXJIb21lUGFnZSgpO1xuICAgIHJlbmRlck5hdmJhcih0aGlzLnJvdXRlci5yZW5kZXJSb3V0ZUNvbnRlbnQuYmluZCh0aGlzLnJvdXRlcikpO1xuICAgIHJlbmRlckNhdGFsb2d1ZShkYXRhLCB0aGlzLnJvdXRlci5yZW5kZXJSb3V0ZUNvbnRlbnQuYmluZCh0aGlzLnJvdXRlcikpO1xuICAgIHRoaXMucmVuZGVyQ2FydChkYXRhKTtcbiAgICB0aGlzLnJlbmRlckZpbHRlcnMoZGF0YSk7XG4gICAgcmVuZGVyT3JkZXJDYXJkKCk7XG4gICAgcmVuZGVyQXV0aEZvcm1zKCk7XG4gICAgdGhpcy5hcHBDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH1cblxuICByZW5kZXJDYXJ0KGRhdGEpIHtcbiAgICBjb25zdCBjYXJ0ID0gbmV3IENhcnQoKTtcbiAgICBjYXJ0LmluaXQodGhpcy5jYXJ0U2VydmljZS5wcm9kdWN0c0luQ2FydCwgZGF0YSk7XG4gIH1cblxuICByZW5kZXJGaWx0ZXJzKGRhdGEpIHtcbiAgICBjb25zdCBmaWx0ZXJzID0gbmV3IEZpbHRlcnMoKTtcbiAgICBmaWx0ZXJzLmRyYXdGaWx0ZXJzKGRhdGEpO1xuICB9XG5cbiAgcmVuZGVyU2luZ2xlUGFnZShkYXRhKSB7XG4gICAgY29uc3Qgc2luZ2xlUGFnZSA9IG5ldyBTaW5nbGVQYWdlKCk7XG4gICAgc2luZ2xlUGFnZS5kcmF3U2luZ2xlUGFnZShkYXRhKTtcblxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaW5nbGVQYWdlX19pdGVtX2FkZCcpO1xuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1JZCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnL3Byb2R1Y3QvJylbMV07XG4gICAgICB0aGlzLmNhcnRTZXJ2aWNlLmFkZFByb2R1Y3RUb0NhcnQoaXRlbUlkKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRpc3BsYXlQYWdlQ29udGVudChjb250ZW50SWQpIHtcbiAgICBjb25zdCBhcHBDb250ZW50RWxlbWVudHMgPSBBcnJheS5mcm9tKHRoaXMuYXBwQ29udGFpbmVyLmNoaWxkcmVuKTtcbiAgICBbLi4uYXBwQ29udGVudEVsZW1lbnRzXS5mb3JFYWNoKChkaXYpID0+IHtcbiAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuICAgIGNvbnN0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGVudElkKTtcbiAgICBwYWdlQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfVxuXG4gIHJlbmRlclBhZ2VDb250ZW50KGNvbnRlbnRJZCwgZGF0YSkge1xuICAgIHRoaXMuZGlzcGxheVBhZ2VDb250ZW50KGNvbnRlbnRJZCk7XG4gICAgaWYgKCF3aW5kb3cubG9jYXRpb24uc2VhcmNoKSB7XG4gICAgICBpZiAoY29udGVudElkID09PSAnanMtY2F0YWxvZ3VlLXBhZ2UnICYmIE9iamVjdC5rZXlzKHRoaXMuY2hlY2tib3hTZXJ2aWNlLmZpbHRlcnMpLmxlbmd0aCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgdGhpcy5jaGVja2JveFNlcnZpY2UuY3JlYXRlUXVlcnkoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJ3Byb2R1Y3QnKSkge1xuICAgICAgY29uc29sZS5sb2coJ2luY2x1ZGVzIHByb2R1Y3QnKTtcbiAgICAgIHRoaXMuZGlzcGxheVNpbmdsZVBhZ2VDb250ZW50KGRhdGEpO1xuICAgIH1cbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnNlYXJjaCAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJ2NhdGFsb2d1ZScpKSB7XG4gICAgICB0aGlzLmRpc3BsYXlGaWx0ZXJlZENvbnRlbnQoZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByb2R1Y3RDYXJkcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGFsb2d1ZV9faXRlbScpKTtcbiAgICAgIHByb2R1Y3RDYXJkcy5mb3JFYWNoKChwcm9kdWN0Q2FyZCkgPT4ge1xuICAgICAgICBwcm9kdWN0Q2FyZC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZGlzcGxheUZpbHRlcmVkQ29udGVudChkYXRhKSB7XG4gICAgY29uc3QgZmlsdGVycyA9IHRoaXMuY2hlY2tib3hTZXJ2aWNlLmdldEZpbHRlcnMoKTtcbiAgICBjb25zdCBwcm9kdWN0Q2FyZHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9ndWVfX2l0ZW0nKSk7XG4gICAgWy4uLmRhdGFdLmZvckVhY2goKHByb2R1Y3QpID0+IHtcbiAgICAgIGNvbnN0IGlzRm91bmQgPSBPYmplY3Qua2V5cyhmaWx0ZXJzKS5ldmVyeSgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChrZXkgPT09ICdwcmljZScpIHtcbiAgICAgICAgICByZXR1cm4gTnVtYmVyKGZpbHRlcnNba2V5XSkgPj0gTnVtYmVyKHByb2R1Y3Rba2V5XSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmlsdGVyc1trZXldLmluY2x1ZGVzKFN0cmluZyhwcm9kdWN0W2tleV0pKTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgY2FyZCA9IHByb2R1Y3RDYXJkc1xuICAgICAgICAuZmluZCgocHJvZHVjdENhcmQpID0+IE51bWJlcihwcm9kdWN0Q2FyZC5kYXRhc2V0LmlkKSA9PT0gTnVtYmVyKHByb2R1Y3QuaWQpKTtcbiAgICAgIGNhcmQuc3R5bGUuZGlzcGxheSA9IGlzRm91bmQgPyAnZmxleCcgOiAnbm9uZSc7XG4gICAgfSk7XG4gIH1cblxuICBkaXNwbGF5U2luZ2xlUGFnZUNvbnRlbnQoZGF0YSkge1xuICAgIGNvbnN0IHByb2R1Y3RJZCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgncHJvZHVjdC8nKVsxXTtcbiAgICBjb25zdCBwcm9kdWN0ID0gZGF0YS5maW5kKChpdGVtKSA9PiBOdW1iZXIoaXRlbS5pZCkgPT09IE51bWJlcihwcm9kdWN0SWQpKTtcblxuICAgIGlmIChwcm9kdWN0KSB7XG4gICAgICB0aGlzLnJlbmRlclNpbmdsZVBhZ2UocHJvZHVjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCAnLzQwNCcpO1xuICAgICAgdGhpcy5yb3V0ZXIucmVuZGVyUm91dGVDb250ZW50KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlcmVyO1xuIiwiY2xhc3MgUm91dGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5yb3V0ZXMgPSB7fTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyUm91dGVDb250ZW50KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVOZXdSb3V0ZShwYXRoTmFtZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoIXBhdGhOYW1lIHx8IHR5cGVvZiBwYXRoTmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVmFsaWQgcGF0aCByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIGlmICghY2FsbGJhY2sgfHwgdHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbGxiYWNrIHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLnJvdXRlcywgcGF0aE5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JvdXRlIHdpdGggdGhpcyBuYW1lIGFscmVhZHkgZXhpc3RzJyk7XG4gICAgfVxuXG4gICAgdGhpcy5yb3V0ZXNbcGF0aE5hbWVdID0gY2FsbGJhY2s7XG4gIH1cblxuICByZW5kZXJSb3V0ZUNvbnRlbnQodXJsKSB7XG4gICAgY29uc3QgcGF0aE5hbWUgPSB1cmwuc3BsaXQoJy8nKVsxXSB8fCAnLyc7XG4gICAgY29uc29sZS5sb2cocGF0aE5hbWUpO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLnJvdXRlcywgcGF0aE5hbWUpKSB7XG4gICAgICB0aGlzLnJvdXRlc1twYXRoTmFtZV0oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0ZXNbJzQwNCddKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlcjtcbiIsImltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vY29uZmlnLmpzJztcblxuZXhwb3J0IGNvbnN0IG1ha2VSZXF1ZXN0ID0gKHBhdGgsIHJlcXVlc3RUeXBlLCBkYXRhT2JqID0ge30pID0+IHtcbiAgY29uc3QgY29uZmlnID0ge1xuICAgIG1ldGhvZDogcmVxdWVzdFR5cGUsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9O1xuXG4gIGlmIChPYmplY3Qua2V5cyhkYXRhT2JqKS5sZW5ndGgpIHtcbiAgICBjb25maWcuYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGFPYmopO1xuICB9XG5cbiAgcmV0dXJuIGZldGNoKGAke0NPTkZJRy5hcGl9LyR7cGF0aH1gLCBjb25maWcpO1xufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRyb2wtcmVnZXhcbmNvbnN0IEVNQUlMX1JFR0VYID0gLyg/OlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSp8XCIoPzpbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHgyMVxceDIzLVxceDViXFx4NWQtXFx4N2ZdfFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGUtXFx4N2ZdKSpcIilAKD86KD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP3xcXFsoPzooPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pXFwuKXszfSg/OjI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldP3xbYS16MC05LV0qW2EtejAtOV06KD86W1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4MjEtXFx4NWFcXHg1My1cXHg3Zl18XFxcXFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZS1cXHg3Zl0pKylcXF0pLztcblxuZnVuY3Rpb24gdmFsaWRhdGUoZmllbGROYW1lLCBmaWVsZFZhbHVlLCBydWxlcyA9IHt9LCBjYWxsYmFjayA9ICgpID0+IHt9KSB7XG4gIGNvbnN0IHZhbGlkYXRvcnMgPSB7XG4gICAgbWluTGVuOiAodmFsLCBtaW4pID0+IHZhbC5sZW5ndGggPj0gbWluLFxuICAgIG1heExlbjogKHZhbCwgbWF4KSA9PiB2YWwubGVuZ3RoIDw9IG1heCxcbiAgICBvbmx5TnVtYmVyc0FuZExldHRlcnM6ICh2YWwpID0+IC9eW0EtWmEtejAtOV0rJC8udGVzdCh2YWwpLFxuICAgIGlzVmFsaWRFbWFpbDogKHZhbCkgPT4gRU1BSUxfUkVHRVgudGVzdCh2YWwpLFxuICAgIGlzTm90RW1wdHk6ICh2YWwpID0+IHZhbC50cmltKCkubGVuZ3RoLFxuICB9O1xuXG4gIGNvbnN0IG1lc3NhZ2VzID0ge1xuICAgIG1pbkxlbjogKGZpZWxkLCB2YWwpID0+IGAke2ZpZWxkfSBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgJHt2YWx9IGNoYXJhY3RlcnNgLFxuICAgIG1heExlbjogKGZpZWxkLCB2YWwpID0+IGAke2ZpZWxkfSBtdXN0IGNvbnRhaW4gJHt2YWx9IGNoYXJhY3RlcnMgIGF0IG1vc3RgLFxuICAgIG9ubHlOdW1iZXJzQW5kTGV0dGVyczogKGZpZWxkKSA9PiBgJHtmaWVsZH0gbXVzdCBpbmNsdWRlIG9ubHkgbnVtYmVycyBhbmQgbGV0dGVyc2AsXG4gICAgaXNWYWxpZEVtYWlsOiAoZmllbGQpID0+IGAke2ZpZWxkfSBzaG91bGQgYmUgdmFsaWRgLFxuICAgIGlzTm90RW1wdHk6IChmaWVsZCkgPT4gYCR7ZmllbGR9IG11c3RuJ3QgYmUgZW1wdHlgLFxuICB9O1xuXG4gIGNvbnN0IGVycm9ycyA9IHt9O1xuXG4gIGZvciAoY29uc3QgcnVsZSBpbiBydWxlcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsaWRhdG9ycywgcnVsZSkpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbGlkYXRvcnNbcnVsZV0oZmllbGRWYWx1ZSwgcnVsZXNbcnVsZV0pO1xuICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gbWVzc2FnZXNbcnVsZV0oZmllbGROYW1lLCBydWxlc1tydWxlXSk7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yTWVzc2FnZSk7XG4gICAgICAgICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXJyb3JzLCBmaWVsZE5hbWUpXG4gICAgICAgICAgPyBlcnJvcnNbZmllbGROYW1lXSA9IFtlcnJvck1lc3NhZ2VdXG4gICAgICAgICAgOiBlcnJvcnNbZmllbGROYW1lXS5wdXNoKGVycm9yTWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9ycztcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7XG4iXSwic291cmNlUm9vdCI6IiJ9