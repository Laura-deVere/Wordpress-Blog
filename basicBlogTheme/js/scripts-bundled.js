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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-content/themes/basicBlogTheme/js/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wp-content/themes/basicBlogTheme/js/modules/Gallery.js":
/*!****************************************************************!*\
  !*** ./wp-content/themes/basicBlogTheme/js/modules/Gallery.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Gallery =\n/*#__PURE__*/\nfunction () {\n  function Gallery() {\n    _classCallCheck(this, Gallery);\n\n    this.container = document.getElementById('selected-img-container');\n    this.gallery = document.getElementById('gallery-list');\n    this.selectedImg;\n    this.events();\n  }\n\n  _createClass(Gallery, [{\n    key: \"events\",\n    value: function events() {\n      if (this.gallery) {\n        this.gallery.addEventListener('click', this.selectImg.bind(this));\n        this.selectFirstImg();\n      }\n    }\n  }, {\n    key: \"selectFirstImg\",\n    value: function selectFirstImg() {\n      var setImg = document.createElement('img');\n\n      if (this.gallery.firstChild.nextElementSibling.childNodes[1]) {\n        var imgInit = this.gallery.firstChild.nextElementSibling.childNodes[1];\n        setImg.id = imgInit.dataset.id;\n        setImg.src = imgInit.dataset.src;\n        this.container.appendChild(setImg);\n        this.selectedImg = setImg;\n      } else {\n        return null;\n      }\n    }\n  }, {\n    key: \"selectImg\",\n    value: function selectImg(e) {\n      var img = e.target;\n      this.selectedImg.id = img.dataset.id;\n      this.selectedImg.src = img.dataset.src;\n    }\n  }]);\n\n  return Gallery;\n}();\n\nvar _default = Gallery;\nexports.default = _default;\n\n//# sourceURL=webpack:///./wp-content/themes/basicBlogTheme/js/modules/Gallery.js?");

/***/ }),

/***/ "./wp-content/themes/basicBlogTheme/js/modules/MobileNav.js":
/*!******************************************************************!*\
  !*** ./wp-content/themes/basicBlogTheme/js/modules/MobileNav.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar MobileNav =\n/*#__PURE__*/\nfunction () {\n  function MobileNav() {\n    _classCallCheck(this, MobileNav);\n\n    this.openBtn = document.getElementById('mobile-menu');\n    this.navMenu = document.getElementsByClassName('web-nav');\n    this.navContainer = document.getElementsByClassName('nav-container');\n    this.visible = false;\n    this.events();\n  }\n\n  _createClass(MobileNav, [{\n    key: \"events\",\n    value: function events() {\n      this.openBtn.addEventListener('click', this.openMenu.bind(this));\n      this.navContainer[0].addEventListener('click', this.addBackgroundColor.bind(this));\n    }\n  }, {\n    key: \"openMenu\",\n    value: function openMenu() {\n      if (this.visible == false) {\n        this.navMenu[0].style.height = '320px';\n        this.visible = true;\n      } else {\n        this.navMenu[0].style.height = '0';\n        this.visible = false;\n      }\n    }\n  }, {\n    key: \"addBackgroundColor\",\n    value: function addBackgroundColor() {\n      this.navContainer[0].style.background = '#c2b4a3';\n    }\n  }]);\n\n  return MobileNav;\n}();\n\nvar _default = MobileNav;\nexports.default = _default;\n\n//# sourceURL=webpack:///./wp-content/themes/basicBlogTheme/js/modules/MobileNav.js?");

/***/ }),

/***/ "./wp-content/themes/basicBlogTheme/js/modules/Search.js":
/*!***************************************************************!*\
  !*** ./wp-content/themes/basicBlogTheme/js/modules/Search.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Search =\n/*#__PURE__*/\nfunction () {\n  function Search() {\n    _classCallCheck(this, Search);\n\n    this.searchInput = document.getElementById('search-input');\n    this.resultsDiv = document.getElementById('results-box');\n    this.events();\n    this.timer;\n    this.previousValue;\n  }\n\n  _createClass(Search, [{\n    key: \"events\",\n    value: function events() {\n      this.searchInput.addEventListener('keyup', this.typingLogic.bind(this));\n    }\n  }, {\n    key: \"typingLogic\",\n    value: function typingLogic() {\n      if (this.searchInput.value !== this.previousValue) {\n        clearTimeout(this.timer);\n\n        if (this.searchInput.value) {\n          this.timer = setTimeout(this.getResults.bind(this), 1000);\n          this.previousValue = this.searchInput.value;\n        } else {\n          this.resultsDiv.innerHTML = '';\n        }\n      }\n    }\n  }, {\n    key: \"getResults\",\n    value: function getResults() {\n      var _this = this;\n\n      fetch(\"\".concat(blogData.root_url, \"/wp-json/wp/v2/posts?search=\").concat(this.previousValue)).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        console.log(data);\n        _this.resultsDiv.innerHTML = \"\\n\\t\\t\\t\\t\\t<h2>Search Results</h2>\\n\\t\\t\\t\\t\\t\".concat(data.length ? '<ul>' : '<p>No Results</p>', \"\\n\\t\\t\\t\\t\\t\\t\").concat(data.map(function (item) {\n          return \"<li><a href=\\\"\".concat(item.link, \"\\\">\").concat(item.title.rendered, \"</li>\");\n        }).join(''), \"\\t\\t\\n\\t\\t\\t\\t\\t\").concat(data.length ? '</ul>' : '', \"\\n\\t\\t\\t\\t\");\n      }).catch(function (error) {\n        console.log(error);\n      });\n    }\n  }]);\n\n  return Search;\n}();\n\nvar _default = Search;\nexports.default = _default;\n\n//# sourceURL=webpack:///./wp-content/themes/basicBlogTheme/js/modules/Search.js?");

/***/ }),

/***/ "./wp-content/themes/basicBlogTheme/js/scripts.js":
/*!********************************************************!*\
  !*** ./wp-content/themes/basicBlogTheme/js/scripts.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _MobileNav = _interopRequireDefault(__webpack_require__(/*! ./modules/MobileNav */ \"./wp-content/themes/basicBlogTheme/js/modules/MobileNav.js\"));\n\nvar _Gallery = _interopRequireDefault(__webpack_require__(/*! ./modules/Gallery */ \"./wp-content/themes/basicBlogTheme/js/modules/Gallery.js\"));\n\nvar _Search = _interopRequireDefault(__webpack_require__(/*! ./modules/Search */ \"./wp-content/themes/basicBlogTheme/js/modules/Search.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mobileNav = new _MobileNav.default();\nvar gallery = new _Gallery.default();\nvar search = new _Search.default();\n\n//# sourceURL=webpack:///./wp-content/themes/basicBlogTheme/js/scripts.js?");

/***/ })

/******/ });