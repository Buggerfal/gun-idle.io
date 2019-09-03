/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _engine_Starter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _engine_Game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67);



document.addEventListener("DOMContentLoaded", function () {
  var container = document.querySelector(".content");

  if (container) {
    _engine_Starter__WEBPACK_IMPORTED_MODULE_1__["default"].init(container).then(function () {
      var game = new _engine_Game_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    });
  }
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _settings_appSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62);
/* harmony import */ var _TexturesLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tween_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66);
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(component_emitter__WEBPACK_IMPORTED_MODULE_4__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Starter =
/*#__PURE__*/
function () {
  function Starter() {
    var _this = this;

    _classCallCheck(this, Starter);

    this.app = null;
    this._orientation = null;
    this._init = {};
    this._init.initPromise = new Promise(function (resolve) {
      _this._init.setInitiated = resolve;
    });
    this.size = _objectSpread({}, _settings_appSettings__WEBPACK_IMPORTED_MODULE_1__["default"].app);
    new component_emitter__WEBPACK_IMPORTED_MODULE_4___default.a(this);
  }

  _createClass(Starter, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;
      var width = window.innerWidth;
      var height = window.innerHeight;
      this.app = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Application"]({
        width: width,
        height: height,
        transparent: true,
        resizeTo: container
      });
      this.app.renderer.autoResize = true;
      container.appendChild(this.app.view);
      this._ticker = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Ticker"]();

      this._ticker.start();

      this._ticker.add(function () {
        tween_js__WEBPACK_IMPORTED_MODULE_3___default.a.update();
      });

      window.onresize = function () {
        _this2.resize();
      };

      this._init.setInitiated();

      this.resize();
      return this._init.initPromise.then(function () {
        return _TexturesLoader__WEBPACK_IMPORTED_MODULE_2__["default"].ensureLoaded();
      });
    }
  }, {
    key: "resize",
    value: function resize() {
      var _this$size = this.size,
          width = _this$size.width,
          height = _this$size.height;
      var ratio = width / height;
      var w, h;

      if (window.innerWidth / window.innerHeight >= ratio) {
        w = window.innerHeight * ratio;
        h = window.innerHeight;

        this._emitOrientationChangeEvent("landscape");
      } else {
        w = window.innerWidth;
        h = window.innerWidth / ratio;

        this._emitOrientationChangeEvent("portrait");
      }

      this.app.renderer.resize(w, h);
      this.app.stage.scale.x = w / width;
      this.app.stage.scale.y = h / height;
    }
  }, {
    key: "_emitOrientationChangeEvent",
    value: function _emitOrientationChangeEvent(newOrientation) {
      if (this._orientation != newOrientation) {
        this._orientation = newOrientation;
        this.emit("orientation_".concat(newOrientation));
      }
    }
  }, {
    key: "initiated",
    get: function get() {
      return this._init.initPromise;
    }
  }]);

  return Starter;
}();

var starter = new Starter();
/* harmony default export */ __webpack_exports__["default"] = (starter);

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  app: {
    width: 1280,
    height: 1920
  },
  stage: {
    height: 400
  },
  score: {
    width: 1280,
    height: 200
  },
  weaponPosition: {
    x: 100,
    y: 150
  },
  colors: {
    installButton: "0xf902ff",
    openStageButton: "0x4ccea8",
    substrateOutro: "0x696969",
    stage1: "0x2d1c38",
    stage2: "0x26152f",
    scoreBar: "0x4c4c4c"
  }
});

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _assets_spriteSheetImagesMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var spriteSheetName = "SpriteSheet.png";
var debug = false;

var TexturesLoader =
/*#__PURE__*/
function () {
  function TexturesLoader() {
    _classCallCheck(this, TexturesLoader);
  }

  _createClass(TexturesLoader, [{
    key: "ensureLoaded",
    value: function ensureLoaded() {
      var textureInCache = pixi_js__WEBPACK_IMPORTED_MODULE_0__["utils"].TextureCache[spriteSheetName];

      if (textureInCache) {
        return Promise.resolve(textureInCache);
      }

      return this._load();
    }
  }, {
    key: "getByName",
    value: function getByName(name) {
      var cached = pixi_js__WEBPACK_IMPORTED_MODULE_0__["utils"].TextureCache[name];

      if (cached) {
        debug && console.info("texture '".concat(name, "' has been read from cache"));
        return cached;
      }

      var spriteSheet = pixi_js__WEBPACK_IMPORTED_MODULE_0__["utils"].TextureCache[spriteSheetName];

      var _WeaponDescription$na = _objectSpread({}, _assets_spriteSheetImagesMap__WEBPACK_IMPORTED_MODULE_1__["default"][name]),
          x = _WeaponDescription$na.x,
          y = _WeaponDescription$na.y,
          width = _WeaponDescription$na.width,
          height = _WeaponDescription$na.height;

      var rectangle = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Rectangle"](x, y, width, height);
      var texture = spriteSheet.clone();
      texture.frame = rectangle;
      debug && console.info("texture '".concat(name, "' has been added to cache"));
      pixi_js__WEBPACK_IMPORTED_MODULE_0__["Texture"].addToCache(texture, name);
      return texture;
    } // TODO: review logic and try to use some well-known loading algorithm

  }, {
    key: "_load",
    value: function _load() {
      var texture = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Texture"].from("SpriteSheet.png"); // texture has been loaded immediately
      // as it has been loaded to browser's cache

      if (texture.valid) {
        return Promise.resolve(texture);
      } // HACK: 'update' event fires once after texture's been loaded


      return new Promise(function (resolve, reject) {
        texture.baseTexture.on("update", function () {
          debug && console.log("[TexturesLoader] texture has been loaded successfully");
          resolve(texture);
        });
        texture.baseTexture.on("error", function () {
          debug && console.error("[TexturesLoader] texture loading failed");
          reject();
        });
      });
    }
  }]);

  return TexturesLoader;
}();

/* harmony default export */ __webpack_exports__["default"] = (new TexturesLoader());

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  colt1911: {
    x: 1035,
    y: 5,
    width: 285,
    height: 170
  },
  slide1911: {
    x: 1313,
    y: 0,
    width: 285,
    height: 65
  },
  ak47: {
    x: 1488,
    y: 1775,
    width: 460,
    height: 215
  },
  ak47_knife: {
    x: 1492,
    y: 1990,
    width: 190,
    height: 45
  },
  ak47_slide: {
    x: 1683,
    y: 2010,
    width: 90,
    height: 15
  },
  target: {
    x: 263,
    y: 0,
    width: 94,
    height: 117
  },
  sleeve: {
    x: 358,
    y: 0,
    width: 100,
    height: 45
  },
  lockedIcon: {
    x: 240,
    y: 117,
    width: 50,
    height: 60
  },
  hand: {
    x: 673,
    y: 292,
    width: 52,
    height: 82
  },
  bullet: {
    x: 360,
    y: 50,
    width: 98,
    height: 50
  },
  hole: {
    x: 750,
    y: 0,
    width: 90,
    height: 90
  },
  fireAnimation_1: {
    x: 15,
    y: 335,
    width: 255,
    height: 100
  },
  fireAnimation_2: {
    x: 15,
    y: 150,
    width: 220,
    height: 150
  },
  fireAnimation_3: {
    x: 45,
    y: 635,
    width: 200,
    height: 290
  },
  targetDestroyAnimation_1: {
    x: 842,
    y: 0,
    width: 44,
    height: 82
  },
  targetDestroyAnimation_2: {
    x: 886,
    y: 0,
    width: 76,
    height: 61
  },
  targetDestroyAnimation_3: {
    x: 962,
    y: 0,
    width: 58,
    height: 60
  },
  targetDestroyAnimation_4: {
    x: 888,
    y: 63,
    width: 64,
    height: 47
  },
  flameTarget: {
    x: 924,
    y: 120,
    width: 100,
    height: 120
  },
  flameIcon: {
    x: 400,
    y: 103,
    width: 140,
    height: 175
  },
  shotgun: {
    x: 1024,
    y: 1528,
    width: 460,
    height: 150
  },
  shotgunRefresh: {
    x: 1487,
    y: 1544,
    width: 85,
    height: 42
  },
  shotgunSlide: {
    x: 1485,
    y: 1588,
    width: 60,
    height: 25
  }
});

/***/ }),
/* 65 */,
/* 66 */,
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _components_ScoreBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68);
/* harmony import */ var _scenes_SceneManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74);
/* harmony import */ var _scenes_IntroScene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75);
/* harmony import */ var _scenes_OutroScene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77);
/* harmony import */ var _components_StageManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }








var Game = function Game() {
  var _this = this;

  _classCallCheck(this, Game);

  _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].initiated.then(function () {
    _components_StageManager__WEBPACK_IMPORTED_MODULE_5__["default"].init();
    _components_ScoreBar__WEBPACK_IMPORTED_MODULE_1__["default"].init();
    _this.introScene = new _scenes_IntroScene__WEBPACK_IMPORTED_MODULE_3__["default"]();
    _this.outroScene = new _scenes_OutroScene__WEBPACK_IMPORTED_MODULE_4__["default"]();
    _scenes_SceneManager__WEBPACK_IMPORTED_MODULE_2__["default"].registerScene("intro", _this.introScene);
    _scenes_SceneManager__WEBPACK_IMPORTED_MODULE_2__["default"].registerScene("outro", _this.outroScene);
    _scenes_SceneManager__WEBPACK_IMPORTED_MODULE_2__["default"].showScene("intro");
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _engine_Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69);
/* harmony import */ var _settings_appSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tween_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _settings_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71);
/* harmony import */ var _settings_polygonsPath__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72);
/* harmony import */ var _engine_Resizable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var ScoreBar =
/*#__PURE__*/
function (_Resizable) {
  _inherits(ScoreBar, _Resizable);

  function ScoreBar() {
    var _this;

    _classCallCheck(this, ScoreBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScoreBar).call(this));
    _this._container = null;
    _this._moneyText = null;
    _this._ctaDownload = null;
    _this._money = 0;
    _this._config = _objectSpread({}, _settings_appSettings__WEBPACK_IMPORTED_MODULE_2__["default"].score);
    return _this;
  }

  _createClass(ScoreBar, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      var _this$_config = this._config,
          width = _this$_config.width,
          height = _this$_config.height;
      var scoreBar = _settings_appSettings__WEBPACK_IMPORTED_MODULE_2__["default"].colors.scoreBar;
      this._container = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createContainer({});

      this._container.setParent(_engine_Starter__WEBPACK_IMPORTED_MODULE_0__["default"].app.stage);

      var backgroundPolygon = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].drawPolygon({
        path: _settings_polygonsPath__WEBPACK_IMPORTED_MODULE_6__["default"].scoreBar,
        color: scoreBar
      });

      this._container.addChild(backgroundPolygon);

      this._moneyText = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        x: width / 2,
        y: height / 2,
        style: {
          fill: "white",
          fontFamily: "Comic Sans MS",
          fontSize: 110
        }
      });

      this._moneyText.setParent(this._container);

      this.update();
      var installButton = _settings_appSettings__WEBPACK_IMPORTED_MODULE_2__["default"].colors.installButton;
      this._ctaDownload = new _Button__WEBPACK_IMPORTED_MODULE_3__["default"]({
        width: 300,
        height: 100,
        color: installButton,
        text: _settings_i18n__WEBPACK_IMPORTED_MODULE_5__["default"].installButton,
        rounded: 25,
        onClick: function onClick() {
          _this2._ctaHandler();
        },
        fontSize: 70
      });

      this._ctaDownload.container.position.set(width - 350, 50);

      this._ctaDownload.container.setParent(this._container);

      new tween_js__WEBPACK_IMPORTED_MODULE_4___default.a.Tween(this._container.pivot).to({
        y: 250
      }, 0).start();
      this._container.visible = false;
    }
  }, {
    key: "onLandscape",
    value: function onLandscape() {
      console.log("LANDSCAPE");
    }
  }, {
    key: "onPortrait",
    value: function onPortrait() {
      console.log("PORTRAIT");
    }
  }, {
    key: "update",
    value: function update() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this._money += val;
      this._moneyText.text = "".concat(_settings_i18n__WEBPACK_IMPORTED_MODULE_5__["default"].usdIcon).concat(this._money);
    }
  }, {
    key: "show",
    value: function show() {
      console.info("scoreBar - show");
      new tween_js__WEBPACK_IMPORTED_MODULE_4___default.a.Tween(this._container.pivot).to({
        y: 0
      }, 260).start();
      this._container.visible = true;
    }
  }, {
    key: "hide",
    value: function hide() {
      new tween_js__WEBPACK_IMPORTED_MODULE_4___default.a.Tween(this._container.pivot).to({
        y: 250
      }, 260).start();
    }
  }, {
    key: "_ctaHandler",
    value: function _ctaHandler() {
      console.log(_settings_i18n__WEBPACK_IMPORTED_MODULE_5__["default"].download);
    }
  }, {
    key: "money",
    get: function get() {
      return this._money;
    }
  }]);

  return ScoreBar;
}(_engine_Resizable__WEBPACK_IMPORTED_MODULE_7__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (new ScoreBar());

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GraphicsHelper; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _engine_TexturesLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var GraphicsHelper =
/*#__PURE__*/
function () {
  function GraphicsHelper() {
    _classCallCheck(this, GraphicsHelper);
  }

  _createClass(GraphicsHelper, null, [{
    key: "createContainer",
    value: function createContainer() {
      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _settings$x = settings.x,
          x = _settings$x === void 0 ? 0 : _settings$x,
          _settings$y = settings.y,
          y = _settings$y === void 0 ? 0 : _settings$y,
          _settings$width = settings.width,
          width = _settings$width === void 0 ? 0 : _settings$width,
          _settings$height = settings.height,
          height = _settings$height === void 0 ? 0 : _settings$height;
      var container = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]();
      container.x = x;
      container.y = y;
      container.width = width;
      container.height = height;
      return container;
    }
  }, {
    key: "createColorContainer",
    value: function createColorContainer() {
      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _settings$x2 = settings.x,
          x = _settings$x2 === void 0 ? 0 : _settings$x2,
          _settings$y2 = settings.y,
          y = _settings$y2 === void 0 ? 0 : _settings$y2,
          _settings$width2 = settings.width,
          width = _settings$width2 === void 0 ? 0 : _settings$width2,
          _settings$height2 = settings.height,
          height = _settings$height2 === void 0 ? 0 : _settings$height2,
          color = settings.color;
      var container = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"](); // move container to screen center

      container.x = x;
      container.y = y;
      container.width = width;
      container.height = height;
      var sprite = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Sprite"](pixi_js__WEBPACK_IMPORTED_MODULE_0__["Texture"].WHITE);
      sprite.width = width;
      sprite.height = height;
      sprite.tint = color;
      sprite.setParent(container);
      return container;
    }
  }, {
    key: "createSpriteFromAtlas",
    value: function createSpriteFromAtlas() {
      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _settings$x3 = settings.x,
          x = _settings$x3 === void 0 ? 0 : _settings$x3,
          _settings$y3 = settings.y,
          y = _settings$y3 === void 0 ? 0 : _settings$y3,
          name = settings.name,
          anchor = settings.anchor;
      var texture = _engine_TexturesLoader__WEBPACK_IMPORTED_MODULE_1__["default"].getByName(name);
      var sprite = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Sprite"](texture);
      sprite.x = x;
      sprite.y = y;

      if (anchor) {
        sprite.anchor.set(anchor);
      }

      return sprite;
    }
  }, {
    key: "drawText",
    value: function drawText(settings) {
      var sourceTxt = "input your text";
      var _settings$text = settings.text,
          text = _settings$text === void 0 ? sourceTxt : _settings$text,
          _settings$x4 = settings.x,
          x = _settings$x4 === void 0 ? 0 : _settings$x4,
          _settings$y4 = settings.y,
          y = _settings$y4 === void 0 ? 0 : _settings$y4,
          style = settings.style;
      var txt = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Text"](text, style);
      txt.x = x;
      txt.y = y;
      txt.anchor.set(0.5);
      return txt;
    }
  }, {
    key: "drawGraphics",
    value: function drawGraphics(settings) {
      var _settings$color = settings.color,
          color = _settings$color === void 0 ? 0x000000 : _settings$color,
          _settings$x5 = settings.x,
          x = _settings$x5 === void 0 ? 0 : _settings$x5,
          _settings$y5 = settings.y,
          y = _settings$y5 === void 0 ? 0 : _settings$y5,
          _settings$width3 = settings.width,
          width = _settings$width3 === void 0 ? 20 : _settings$width3,
          _settings$height3 = settings.height,
          height = _settings$height3 === void 0 ? 20 : _settings$height3,
          _settings$rounded = settings.rounded,
          rounded = _settings$rounded === void 0 ? 0 : _settings$rounded,
          onClick = settings.onClick,
          _settings$holeX = settings.holeX,
          holeX = _settings$holeX === void 0 ? 0 : _settings$holeX,
          _settings$holeY = settings.holeY,
          holeY = _settings$holeY === void 0 ? 0 : _settings$holeY,
          _settings$holeWidth = settings.holeWidth,
          holeWidth = _settings$holeWidth === void 0 ? 0 : _settings$holeWidth,
          _settings$holeHeight = settings.holeHeight,
          holeHeight = _settings$holeHeight === void 0 ? 0 : _settings$holeHeight;
      var graphics = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
      graphics.beginFill(color);
      graphics.drawRoundedRect(x, y, width, height, rounded); //TODO Nine splice

      graphics.beginHole();
      graphics.drawRoundedRect(holeX, holeY, holeWidth, holeHeight, rounded);
      graphics.endHole();
      graphics.endFill();

      if (onClick) {
        graphics.buttonMode = true;
        graphics.interactive = true;
        graphics.on("pointerdown", onClick);
      }

      return graphics;
    }
  }, {
    key: "drawPolygon",
    value: function drawPolygon() {
      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _settings$color2 = settings.color,
          color = _settings$color2 === void 0 ? 0x000000 : _settings$color2,
          path = settings.path,
          _settings$alpha = settings.alpha,
          alpha = _settings$alpha === void 0 ? 1 : _settings$alpha;
      var graphics = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
      graphics.lineStyle(0);
      graphics.beginFill(color, alpha);
      graphics.drawPolygon(path);
      graphics.endFill();
      return graphics;
    }
  }]);

  return GraphicsHelper;
}();



/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Button =
/*#__PURE__*/
function () {
  function Button(settings) {
    _classCallCheck(this, Button);

    this._init(settings);
  }

  _createClass(Button, [{
    key: "_init",
    value: function _init(settings) {
      var _settings$offset = settings.offset,
          offset = _settings$offset === void 0 ? 0 : _settings$offset,
          width = settings.width,
          height = settings.height,
          color = settings.color,
          text = settings.text,
          onClick = settings.onClick,
          fontSize = settings.fontSize,
          rounded = settings.rounded;
      this._spriteContainer = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_0__["default"].createContainer();
      this._sprite = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_0__["default"].drawGraphics({
        x: 0,
        y: 0,
        width: width,
        height: height,
        color: color,
        rounded: rounded,
        onClick: onClick
      });

      this._sprite.setParent(this._spriteContainer);

      this.text = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_0__["default"].drawText({
        x: width / 2 + offset,
        y: height / 2,
        text: text,
        style: {
          fill: "white",
          fontFamily: "Comic Sans MS",
          fontSize: fontSize
        }
      });
      this.text.setParent(this._sprite);
    }
  }, {
    key: "hide",
    value: function hide() {
      this._sprite.alpha = 0;
      this._sprite.interactive = false;
    }
  }, {
    key: "show",
    value: function show() {
      this._sprite.alpha = 1;
      this._sprite.interactive = true;
    }
  }, {
    key: "container",
    get: function get() {
      return this._spriteContainer;
    }
  }]);

  return Button;
}();

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  installButton: "INSTALL",
  outroHeader: "Congratulations",
  outroDescription: "To keep using your bonus",
  download: "DOWNLOAD",
  usdIcon: "$",
  level: "level",
  introScene_1: "TAP TO",
  introScene_2: "PLAY"
});

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _appSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);

var offset1 = 200;
var offset2 = 150;
var width = _appSettings__WEBPACK_IMPORTED_MODULE_0__["default"].score.width;
var height = _appSettings__WEBPACK_IMPORTED_MODULE_0__["default"].score.height;
/* harmony default export */ __webpack_exports__["default"] = ({
  scoreBar: [0, 0, width, 0, width, height, width / 2 + offset1, height, width / 2 + offset2, height + 50, width / 2 - offset2, height + 50, width / 2 - offset1, height, 0, height, 0, 0]
});

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Resizable =
/*#__PURE__*/
function () {
  function Resizable() {
    var _this = this;

    _classCallCheck(this, Resizable);

    _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].on("orientation_portrait", function () {
      _this.onPortrait();
    });
    _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].on("orientation_landscape", function () {
      _this.onLandscape();
    });
  }

  _createClass(Resizable, [{
    key: "onPortrait",
    value: function onPortrait() {}
  }, {
    key: "onLandscape",
    value: function onLandscape() {}
  }]);

  return Resizable;
}();

/* harmony default export */ __webpack_exports__["default"] = (Resizable);

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SceneManager =
/*#__PURE__*/
function () {
  function SceneManager() {
    _classCallCheck(this, SceneManager);

    this._scenes = {};
    this._activeScene = null;
  }

  _createClass(SceneManager, [{
    key: "showScene",
    value: function showScene(name, data) {
      if (this._activeScene !== null && this._scenes[name] === this._activeScene) {
        console.info("Scene ".concat(name, " is already displaying"));
      }

      if (this._scenes.hasOwnProperty(name)) {
        if (this._activeScene !== null) {
          this._activeScene.hide();
        }

        this._scenes[name].show(data);

        this._activeScene = this._scenes[name];
        console.info("active scene ".concat(name));
      } else {
        console.error("Scene ".concat(name, " is not found"));
      }
    }
  }, {
    key: "registerScene",
    value: function registerScene(name, scene) {
      this._scenes[name] = scene;
    }
  }]);

  return SceneManager;
}();

/* harmony default export */ __webpack_exports__["default"] = (new SceneManager());

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _engine_Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69);
/* harmony import */ var _settings_appSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66);
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(component_emitter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var pixi_particles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76);
/* harmony import */ var _components_ScoreBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68);
/* harmony import */ var _settings_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










var IntroScene =
/*#__PURE__*/
function () {
  function IntroScene() {
    _classCallCheck(this, IntroScene);

    this._container = null;
    this._substrate = null;
    this._hintTween = null;
    new component_emitter__WEBPACK_IMPORTED_MODULE_3___default.a(this);
    this.init(); // this._particles(); //TODO:
  }

  _createClass(IntroScene, [{
    key: "init",
    value: function init() {
      var _this = this;

      var _appSettings$app = _objectSpread({}, _settings_appSettings__WEBPACK_IMPORTED_MODULE_2__["default"].app),
          width = _appSettings$app.width,
          height = _appSettings$app.height;

      var textStyles = {
        fill: "white",
        fontFamily: "Courier New",
        fontSize: 200,
        fontWeight: 900
      };
      this._container = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createContainer({});

      this._container.setParent(_engine_Starter__WEBPACK_IMPORTED_MODULE_0__["default"].app.stage);

      this._substrate = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].drawGraphics({
        width: width,
        height: height,
        holeX: 80,
        holeY: height - 280,
        holeWidth: 340,
        holeHeight: 240,
        onClick: function onClick(e) {
          _this.hide();

          _components_ScoreBar__WEBPACK_IMPORTED_MODULE_5__["default"].show();
          e.stopPropagation();

          _this._container.removeChild(_this._blockedInteractionGraphics);
        }
      });

      this._substrate.setParent(this._container);

      this._substrate.alpha = 0.5; //Block interaction in hole

      this._blockedInteractionGraphics = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].drawGraphics({
        width: 340,
        height: 240,
        x: 80,
        y: height - 280,
        onClick: function onClick(e) {
          _this.hide();

          _components_ScoreBar__WEBPACK_IMPORTED_MODULE_5__["default"].show();
          _this._blockedInteractionGraphics.visible = false;
          e.stopPropagation();
        }
      });

      this._blockedInteractionGraphics.setParent(this._container);

      this._blockedInteractionGraphics.alpha = 0;
      _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        x: width / 2,
        y: height / 2,
        text: _settings_i18n__WEBPACK_IMPORTED_MODULE_6__["default"].introScene_1,
        style: textStyles
      }).setParent(this._container);
      _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        x: width / 2,
        y: height / 2 + 220,
        text: _settings_i18n__WEBPACK_IMPORTED_MODULE_6__["default"].introScene_2,
        style: textStyles
      }).setParent(this._container);
      this.hide();
    }
  }, {
    key: "show",
    value: function show() {
      this._container.alpha = 1;
      this._substrate.interactive = true;
    }
  }, {
    key: "hide",
    value: function hide() {
      this._container.alpha = 0;
      this._substrate.interactive = false;
    }
  }, {
    key: "_particles",
    value: function _particles() {
      var _this2 = this;

      var container = new pixi_js__WEBPACK_IMPORTED_MODULE_7__["ParticleContainer"]();
      container.x = 500;
      container.y = 500;
      _engine_Starter__WEBPACK_IMPORTED_MODULE_0__["default"].app.stage.addChild(container); // Circle

      var graphics = new pixi_js__WEBPACK_IMPORTED_MODULE_7__["Graphics"]();
      graphics.lineStyle(0); // draw a circle, set the lineStyle to zero so the circle doesn't have an outline

      graphics.beginFill(0xde3249, 1);
      graphics.drawCircle(100, 250, 50);
      graphics.endFill(); // this._container.addChild(graphics);

      var graphics2 = new pixi_js__WEBPACK_IMPORTED_MODULE_7__["Graphics"]();
      graphics2.lineStyle(0); // draw a circle, set the lineStyle to zero so the circle doesn't have an outline

      graphics2.beginFill(0xde3249, 1);
      graphics2.drawCircle(100, 350, 25);
      graphics2.endFill(); // this._container.addChild(graphics2);
      // for (let i = 0; i < 10; ++i) {
      //     let sprite = GraphicsHelper.createSpriteFromAtlas({
      //         name: `slide1911`,
      //     });
      //     container.addChild(sprite);
      // }

      var texture = _engine_Starter__WEBPACK_IMPORTED_MODULE_0__["default"].app.renderer.generateTexture(graphics);
      var texture3 = _engine_Starter__WEBPACK_IMPORTED_MODULE_0__["default"].app.renderer.generateTexture(graphics2);
      this._ticker = new pixi_js__WEBPACK_IMPORTED_MODULE_7__["Ticker"]();

      this._ticker.start();

      this._ticker.add(function () {
        _this2._tick(_this2._ticker.deltaMS);
      });

      this.emitter = new pixi_particles__WEBPACK_IMPORTED_MODULE_4__["Emitter"](container, [texture, texture3], {
        alpha: {
          start: 0,
          end: 1
        },
        scale: {
          start: 0.3,
          end: 1.2,
          minimumScaleMultiplier: 1
        },
        color: {
          start: "#6bff61",
          end: "#d8ff4a"
        },
        speed: {
          start: 50,
          end: 50,
          minimumSpeedMultiplier: 1
        },
        acceleration: {
          x: 0,
          y: 0
        },
        maxSpeed: 0,
        startRotation: {
          min: 0,
          max: 360
        },
        noRotation: true,
        rotationSpeed: {
          min: 0,
          max: 0
        },
        lifetime: {
          min: 2,
          max: 1.8
        },
        blendMode: "screen",
        frequency: 0.01,
        emitterLifetime: -1,
        maxParticles: 10,
        pos: {
          x: 0.5,
          y: 0.5
        },
        addAtBack: true,
        spawnType: "line",
        spawnCircle: {
          x: 100,
          y: 200,
          r: 120
        }
      });
      this.emitter.emit = true;
    }
  }, {
    key: "_tick",
    value: function _tick(delta) {
      this.emitter.update(delta);
    }
  }]);

  return IntroScene;
}();

/* harmony default export */ __webpack_exports__["default"] = (IntroScene);

/***/ }),
/* 76 */,
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _engine_Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69);
/* harmony import */ var _settings_appSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony import */ var _components_ScoreBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70);
/* harmony import */ var _settings_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var OutroScene =
/*#__PURE__*/
function () {
  function OutroScene() {
    _classCallCheck(this, OutroScene);

    this._container = null;
    this._substrate = null;
    this.init();
  }

  _createClass(OutroScene, [{
    key: "init",
    value: function init() {
      var _this = this;

      var _appSettings$app = _objectSpread({}, _settings_appSettings__WEBPACK_IMPORTED_MODULE_2__["default"].app),
          width = _appSettings$app.width,
          height = _appSettings$app.height;

      this._container = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createContainer({});

      this._container.setParent(_engine_Starter__WEBPACK_IMPORTED_MODULE_0__["default"].app.stage);

      this._substrate = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].drawGraphics({
        width: width,
        height: height
      });

      this._substrate.setParent(this._container);

      this._substrate.alpha = 0.5;
      var substrateWidth = 800;
      var _appSettings$colors = _settings_appSettings__WEBPACK_IMPORTED_MODULE_2__["default"].colors,
          substrateOutro = _appSettings$colors.substrateOutro,
          installButton = _appSettings$colors.installButton;
      var rect = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].drawGraphics({
        x: width / 2 - substrateWidth / 2,
        y: 300,
        width: substrateWidth,
        height: 700,
        color: substrateOutro,
        rounded: 100
      });
      rect.setParent(this._container);
      _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        x: width / 2,
        y: 380,
        text: _settings_i18n__WEBPACK_IMPORTED_MODULE_5__["default"].outroHeader,
        style: {
          fill: "white",
          fontFamily: "Courier New",
          fontSize: 70,
          fontWeight: 900
        }
      }).setParent(this._container);
      this._weaponContainer = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createContainer({
        x: width / 2,
        y: 550
      });

      this._weaponContainer.setParent(this._container);

      var shotGun = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createSpriteFromAtlas({
        x: 0,
        y: 0,
        anchor: 0.5,
        name: "shotgun"
      });
      shotGun.setParent(this._weaponContainer);
      var shotGunRefresh = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createSpriteFromAtlas({
        x: 150,
        y: 0,
        anchor: 0.5,
        name: "shotgunRefresh"
      });
      shotGunRefresh.setParent(this._weaponContainer);
      var shotGunSlide = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createSpriteFromAtlas({
        x: -8,
        y: -32,
        anchor: 0.5,
        name: "shotgunSlide"
      });
      shotGunSlide.setParent(this._weaponContainer);
      _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        x: width / 2,
        y: 940,
        text: _settings_i18n__WEBPACK_IMPORTED_MODULE_5__["default"].outroDescription,
        style: {
          fill: "white",
          fontFamily: "Courier New",
          fontSize: 50,
          fontWeight: 900
        }
      }).setParent(this._container);
      this._ctaDownload = new _components_Button__WEBPACK_IMPORTED_MODULE_4__["default"]({
        width: 350,
        height: 150,
        color: installButton,
        text: _settings_i18n__WEBPACK_IMPORTED_MODULE_5__["default"].installButton,
        rounded: 20,
        onClick: function onClick() {
          _this._ctaHandler();
        },
        fontSize: 70
      });
      var ctaContainer = this._ctaDownload.container;
      ctaContainer.position.set(width / 2 - 175, 700);
      ctaContainer.setParent(this._container);
      this.hide();
    }
  }, {
    key: "show",
    value: function show() {
      this._substrate.interactive = true;
      this._container.visible = true;
      _components_ScoreBar__WEBPACK_IMPORTED_MODULE_3__["default"].hide();
    }
  }, {
    key: "hide",
    value: function hide() {
      this._container.visible = false;
      this._substrate.interactive = false;
    }
  }, {
    key: "_ctaHandler",
    value: function _ctaHandler() {
      console.log(_settings_i18n__WEBPACK_IMPORTED_MODULE_5__["default"].download);
    }
  }]);

  return OutroScene;
}();

/* harmony default export */ __webpack_exports__["default"] = (OutroScene);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Stage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
/* harmony import */ var _settings_appSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62);
/* harmony import */ var _settings_stagesSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87);
/* harmony import */ var _components_ScoreBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tween_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69);
/* harmony import */ var _engine_Starter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);
/* harmony import */ var _scenes_SceneManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }











var StageManager =
/*#__PURE__*/
function () {
  function StageManager() {
    _classCallCheck(this, StageManager);

    this._stages = [];
    this._openStages = [];
    this._activeStage = null;
    this._nextStage = null;
    this._gameProgress = 0;
    this._sizes = {
      appHeight: _settings_appSettings__WEBPACK_IMPORTED_MODULE_1__["default"].app.height,
      stageHeight: _settings_appSettings__WEBPACK_IMPORTED_MODULE_1__["default"].stage.height
    };
  }

  _createClass(StageManager, [{
    key: "init",
    value: function init() {
      this._drawStages();

      this._checkActiveStage();
    }
  }, {
    key: "_drawStages",
    value: function _drawStages() {
      var _this = this;

      var _this$_sizes = this._sizes,
          stageHeight = _this$_sizes.stageHeight,
          appHeight = _this$_sizes.appHeight;
      this._stages = _settings_stagesSettings__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (stageInfo, index) {
        var stageNumber = index + 1;

        var color = _this._getStageBackgroundColor(stageNumber);

        var yPosition = appHeight - stageHeight * stageNumber;
        var stage = new _components_Stage__WEBPACK_IMPORTED_MODULE_0__["default"]({
          color: color,
          y: yPosition,
          info: stageInfo
        });
        stage.on("startRageMode", function () {
          _this._runRageMode();
        });
        return stage;
      });
    }
  }, {
    key: "_checkActiveStage",
    value: function _checkActiveStage() {
      var _this2 = this;

      if (this._activeStage === null) {
        this._activeStage = this._stages[0];

        this._openStages.push(this._activeStage);

        this._activeStage.show();

        this._addEventListener(this._activeStage);

        this._nextStage = this._stages[1];
        return;
      }

      var gameProgressToUnlock = this._nextStage.configuration.gameProgressToUnlock;

      if (this._gameProgress >= gameProgressToUnlock) {
        this._gameProgress = 0;
        this._activeStage = this._nextStage;

        this._openStages.push(this._activeStage);

        var nextStageIndex = this._stages.findIndex(function (x) {
          return x == _this2._activeStage;
        });

        this._nextStage = this._stages[nextStageIndex + 1];

        this._activeStage.showOpenButton();

        this._addEventListener(this._activeStage);
      }
    } //TODO: refactoring, move logic

  }, {
    key: "_runRageMode",
    value: function _runRageMode() {
      var _this3 = this;

      //AUTOSHOT (RAGE-MODE) LOGIC
      var timeToOffRageMode = 5000;
      var timeBeetweenShot = 150;
      var ticker = new pixi_js__WEBPACK_IMPORTED_MODULE_4__["Ticker"]();
      ticker.add(function () {
        var delta = ticker.deltaMS;
        timeToOffRageMode -= delta;
        timeBeetweenShot -= delta;

        if (timeBeetweenShot <= 0) {
          timeBeetweenShot = 150;

          _this3._makeShotAllGroup();
        }

        if (timeToOffRageMode <= 0) {
          ticker.stop();
        }
      });
      ticker.start(); //RED BACKGROUND LOGIC

      var stageModeBackground = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_6__["default"].createColorContainer({
        width: _settings_appSettings__WEBPACK_IMPORTED_MODULE_1__["default"].app.width,
        height: _settings_appSettings__WEBPACK_IMPORTED_MODULE_1__["default"].app.height,
        color: "0x990000"
      });
      stageModeBackground.setParent(_engine_Starter__WEBPACK_IMPORTED_MODULE_7__["default"].app.stage);
      new tween_js__WEBPACK_IMPORTED_MODULE_5___default.a.Tween(stageModeBackground).to({
        alpha: [0.3, 0.1, 0.4, 0.1, 0.5, 0.2, 0.1, 0.4, 0]
      }, timeToOffRageMode).onComplete(function () {
        _engine_Starter__WEBPACK_IMPORTED_MODULE_7__["default"].app.stage.removeChild(stageModeBackground);
      }).start(); //FLAME ICON LOGIC

      var flameIcon = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_6__["default"].createSpriteFromAtlas({
        x: 100,
        y: _settings_appSettings__WEBPACK_IMPORTED_MODULE_1__["default"].app.height - 130,
        name: "flameIcon",
        anchor: 0.5
      });
      flameIcon.setParent(_engine_Starter__WEBPACK_IMPORTED_MODULE_7__["default"].app.stage);
      var timeOnAnimation = 700;
      var repeatAnimation = Math.floor(timeToOffRageMode / timeOnAnimation) - 1;
      new tween_js__WEBPACK_IMPORTED_MODULE_5___default.a.Tween(flameIcon.scale).to({
        x: [1.1, 1],
        y: [1.1, 1]
      }, timeOnAnimation).onComplete(function () {
        new tween_js__WEBPACK_IMPORTED_MODULE_5___default.a.Tween(flameIcon).to({
          alpha: 0
        }, timeOnAnimation).start().onComplete(function () {
          _engine_Starter__WEBPACK_IMPORTED_MODULE_7__["default"].app.stage.removeChild(flameIcon);
          _scenes_SceneManager__WEBPACK_IMPORTED_MODULE_8__["default"].showScene("outro");
        });
      }).repeat(repeatAnimation).start();

      this._shakeBackground();
    } //TODO: refactoring, move logic

  }, {
    key: "_shakeBackground",
    value: function _shakeBackground() {
      new tween_js__WEBPACK_IMPORTED_MODULE_5___default.a.Tween(_engine_Starter__WEBPACK_IMPORTED_MODULE_7__["default"].app.stage).to({
        x: [-5, 0, 5, -3, 0, 3, 0],
        y: [0, 3, 0, -3, 0, -5, 0, 5, 0]
      }, 480).repeat(10).start();
    }
  }, {
    key: "_makeShotAllGroup",
    value: function _makeShotAllGroup() {
      this._openStages.forEach(function (stage) {
        stage._makeShot();
      });
    }
  }, {
    key: "_addEventListener",
    value: function _addEventListener(stage) {
      var _this4 = this;

      stage.on("stageScoreUpdate", function () {
        var shotReward = stage.configuration.shotReward;
        _components_ScoreBar__WEBPACK_IMPORTED_MODULE_3__["default"].update(shotReward);

        if (stage == _this4._activeStage) {
          _this4._gameProgress++;

          _this4._checkActiveStage();
        }
      });
    }
  }, {
    key: "_getStageBackgroundColor",
    value: function _getStageBackgroundColor(stageNumber) {
      var _appSettings$colors = _settings_appSettings__WEBPACK_IMPORTED_MODULE_1__["default"].colors,
          stage1 = _appSettings$colors.stage1,
          stage2 = _appSettings$colors.stage2;
      var isEven = stageNumber % 2;
      return isEven ? stage2 : stage1;
    }
  }]);

  return StageManager;
}();

/* harmony default export */ __webpack_exports__["default"] = (new StageManager());

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _engine_Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69);
/* harmony import */ var _settings_appSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony import */ var _weapons_WeaponFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80);
/* harmony import */ var _ScoreBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68);
/* harmony import */ var _TargetsManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tween_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66);
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(component_emitter__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8);
/* harmony import */ var _Hint__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(86);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(70);
/* harmony import */ var _settings_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(71);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }















var Stage =
/*#__PURE__*/
function () {
  function Stage(config, stageStrategy) {
    _classCallCheck(this, Stage);

    this._config = _objectSpread({}, config, _settings_appSettings__WEBPACK_IMPORTED_MODULE_2__["default"].stage, {
      width: _settings_appSettings__WEBPACK_IMPORTED_MODULE_2__["default"].app.width
    });
    this._stageStrategy = stageStrategy;
    this._mainContainer = null;
    this._lockContainer = null;
    this._unlockContainer = null;
    this._weapon = null;
    this._lock = null;
    this._ticker = null;
    this.level = this._config.info.level;
    new component_emitter__WEBPACK_IMPORTED_MODULE_8___default.a(this);

    this._init();

    this.hide();
  }

  _createClass(Stage, [{
    key: "_init",
    value: function _init() {
      var _this = this;

      var _this$_config = this._config,
          width = _this$_config.width,
          height = _this$_config.height,
          color = _this$_config.color,
          y = _this$_config.y,
          _this$_config$info = _this$_config.info,
          weaponType = _this$_config$info.weaponType,
          level = _this$_config$info.level,
          name = _this$_config$info.name;
      var offScreenWidth = 20;
      this._mainContainer = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createColorContainer({
        x: -offScreenWidth / 2,
        y: y - offScreenWidth / 2,
        width: width + offScreenWidth,
        height: height + offScreenWidth,
        color: color
      });

      this._mainContainer.setParent(_engine_Starter__WEBPACK_IMPORTED_MODULE_0__["default"].app.stage); //Unlocked stage elements


      this._unlockContainer = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createContainer();

      this._unlockContainer.setParent(this._mainContainer);

      this.targetsManager = new _TargetsManager__WEBPACK_IMPORTED_MODULE_5__["default"]({
        x: width - 250,
        level: level
      });
      this.targetsManager.container.setParent(this._unlockContainer);
      this.targetsManager.on("rageMode", function () {
        _this.emit("startRageMode");
      });
      this._weaponName = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        x: 100,
        y: 50,
        text: "".concat(name),
        style: {
          fill: "white",
          fontFamily: "Comic Sans MS",
          fontSize: 40
        }
      });

      this._weaponName.setParent(this._unlockContainer);

      this._weapon = _weapons_WeaponFactory__WEBPACK_IMPORTED_MODULE_3__["default"].createWeapon(weaponType, {
        y: y
      });

      this._weapon.container.setParent(this._unlockContainer);

      this._initShotListener();

      this._showStartHint(level);

      this._initAutoPlay(); //Locked stage elements


      this._lockContainer = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createContainer({
        y: height / 2
      });

      this._lockContainer.setParent(this._mainContainer);

      this._lock = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createSpriteFromAtlas({
        x: width / 2 - 100,
        name: "lockedIcon"
      });

      this._lock.setParent(this._lockContainer);

      this._levelInfoText = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        x: this._lock.x + this._lock.width + 80,
        y: 30,
        text: "".concat(_settings_i18n__WEBPACK_IMPORTED_MODULE_12__["default"].level, " ").concat(level),
        style: {
          fill: "white",
          fontFamily: "Comic Sans MS",
          fontSize: 40
        }
      });

      this._levelInfoText.setParent(this._lockContainer);
    }
  }, {
    key: "_drawOpenLevelButton",
    value: function _drawOpenLevelButton() {
      var _this2 = this;

      var _this$_config2 = this._config,
          width = _this$_config2.width,
          openLevelCost = _this$_config2.info.openLevelCost;
      this._openBtnContainer = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createContainer({
        x: width / 2 - 125 // 100- half width button

      });

      this._openBtnContainer.setParent(this._lockContainer);

      var openStageButton = _settings_appSettings__WEBPACK_IMPORTED_MODULE_2__["default"].colors.openStageButton;
      this._openButton = new _Button__WEBPACK_IMPORTED_MODULE_11__["default"]({
        width: 250,
        height: 85,
        offset: 30,
        rounded: 15,
        color: openStageButton,
        text: "".concat(_settings_i18n__WEBPACK_IMPORTED_MODULE_12__["default"].usdIcon).concat(openLevelCost),
        onClick: function onClick() {
          _this2._openButton.container.visible = false;

          if (_ScoreBar__WEBPACK_IMPORTED_MODULE_4__["default"].money < openLevelCost) {
            console.log("not enough money");
            return;
          }

          _this2.show();

          _ScoreBar__WEBPACK_IMPORTED_MODULE_4__["default"].update(-openLevelCost);
        },
        fontSize: 50
      });

      this._openButton.container.setParent(this._openBtnContainer);

      this._openBtnContainer.visible = false;
      this._lockBtnIcon = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createSpriteFromAtlas({
        x: 20,
        y: 10,
        name: "lockedIcon"
      });

      this._lockBtnIcon.setParent(this._openBtnContainer);
    }
  }, {
    key: "_initShotListener",
    value: function _initShotListener() {
      var _this3 = this;

      this._weapon.on("shotRequest", function () {
        _this3._makeShot();
      });
    }
  }, {
    key: "_showStartHint",
    value: function _showStartHint(level) {
      var _this4 = this;

      // TODO: move hint coordinates settings to weapon
      var hintCoordinates = null;

      switch (level) {
        case "1":
          hintCoordinates = {
            x: 250,
            y: 200
          };
          break;

        case "2":
          hintCoordinates = {
            x: 350,
            y: 180
          };
          break;
      }

      if (hintCoordinates !== null) {
        // TODO: add 'destroy' method into hint
        var hint = new _Hint__WEBPACK_IMPORTED_MODULE_10__["default"](hintCoordinates);

        this._unlockContainer.addChild(hint.sprite);

        this._weapon.once("shotIsDone", function () {
          hint.hide();

          _this4._unlockContainer.removeChild(hint.sprite);
        });
      }
    }
  }, {
    key: "_initAutoPlay",
    value: function _initAutoPlay() {
      var _this5 = this;

      // TODO: move setting to config
      var timeBetweenShoot = 1000;
      var autoShotsLeft = 5;
      var timeToNextShoot = timeBetweenShoot;

      this._weapon.on("shotIsDone", function () {
        autoShotsLeft -= 1;
        timeToNextShoot = timeBetweenShoot;
      });

      this._weapon.once("shotIsDone", function () {
        _this5._ticker = new pixi_js__WEBPACK_IMPORTED_MODULE_9__["Ticker"]();

        _this5._ticker.add(function () {
          if (autoShotsLeft <= 0) {
            _this5._ticker.stop();

            _this5._ticker.destroy();

            return;
          }

          var delta = _this5._ticker.deltaMS;
          timeToNextShoot -= delta;

          if (timeToNextShoot <= 0) {
            _this5._makeShot();

            timeToNextShoot = timeBetweenShoot;
          }
        });

        _this5._ticker.start();
      });
    }
  }, {
    key: "_makeShot",
    value: function _makeShot() {
      var _this6 = this;

      var coordinates = this.targetsManager.getHolePosition();

      this._weapon.once("shotIsDone", function () {
        var shotReward = _this6._config.info.shotReward;

        _this6.targetsManager.makeHole(coordinates);

        _this6._drawRewardText(shotReward);

        _this6.emit("stageScoreUpdate");
      });

      this._weapon.shot(coordinates);
    }
  }, {
    key: "_drawRewardText",
    value: function _drawRewardText(value) {
      var y = _utils_utils__WEBPACK_IMPORTED_MODULE_6__["default"].random(100, 240);
      var sign = _utils_utils__WEBPACK_IMPORTED_MODULE_6__["default"].random(0, 1) === 0 ? -1 : 1;
      this._rewardContainer = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createContainer({});

      this._rewardContainer.setParent(this._mainContainer);

      var rewardText = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        text: "".concat(_settings_i18n__WEBPACK_IMPORTED_MODULE_12__["default"].usdIcon).concat(value),
        x: this._mainContainer.width - 350,
        y: y,
        style: {
          fill: "white",
          fontFamily: "Comic Sans MS",
          fontSize: 50
        }
      });
      rewardText.setParent(this._rewardContainer);
      rewardText.rotation = Math.random() * sign;
      new tween_js__WEBPACK_IMPORTED_MODULE_7___default.a.Tween(this._rewardContainer).to({
        alpha: 0
      }, 300).start();
    }
  }, {
    key: "hide",
    value: function hide() {
      this._weapon.hide();

      this._lockContainer.alpha = 1;
      this._unlockContainer.alpha = 0;
    }
  }, {
    key: "show",
    value: function show() {
      //this._openBtnContainer.visible = true;
      this._weapon.show();

      this._lockContainer.alpha = 0;
      this._unlockContainer.alpha = 1;
    }
  }, {
    key: "showOpenButton",
    value: function showOpenButton() {
      if (this._openBtnContainer) {
        return;
      }

      this._drawOpenLevelButton();

      this._lock.alpha = 0;
      this._levelInfoText.alpha = 0;
      this._openBtnContainer.visible = true;
      var hint = new _Hint__WEBPACK_IMPORTED_MODULE_10__["default"]({
        x: 60,
        y: 70
      });
      hint.sprite.setParent(this._openBtnContainer);
    }
  }, {
    key: "configuration",
    get: function get() {
      return this._config.info;
    }
  }]);

  return Stage;
}();

/* harmony default export */ __webpack_exports__["default"] = (Stage);

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WeaponFactory; });
/* harmony import */ var _Weapons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var WeaponFactory =
/*#__PURE__*/
function () {
  function WeaponFactory() {
    _classCallCheck(this, WeaponFactory);
  }

  _createClass(WeaponFactory, null, [{
    key: "createWeapon",
    value: function createWeapon(type, config) {
      switch (type) {
        case _Constants__WEBPACK_IMPORTED_MODULE_1__["default"].ak47:
          return new _Weapons__WEBPACK_IMPORTED_MODULE_0__["AK47"](config);

        case _Constants__WEBPACK_IMPORTED_MODULE_1__["default"].colt:
          return new _Weapons__WEBPACK_IMPORTED_MODULE_0__["Colt1911"](config);

        default:
          console.error("Weapon ".concat(type, " not found"));
          return new _Weapons__WEBPACK_IMPORTED_MODULE_0__["BaseWeapon"](config);
      }
    }
  }]);

  return WeaponFactory;
}();



/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseWeapon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colt1911", function() { return Colt1911; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AK47", function() { return AK47; });
/* harmony import */ var _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tween_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66);
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(component_emitter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _engine_TexturesLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82);
/* harmony import */ var _settings_appSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









var BaseWeapon =
/*#__PURE__*/
function () {
  function BaseWeapon(config) {
    var _this = this;

    _classCallCheck(this, BaseWeapon);

    this.config = _objectSpread({}, config);
    this._container = null;
    this._weaponContainer = null;
    this._ticker = new pixi_js__WEBPACK_IMPORTED_MODULE_2__["Ticker"]();

    this._ticker.start();

    this._ticker.add(function (delta) {
      _this.tick(delta);
    });

    new component_emitter__WEBPACK_IMPORTED_MODULE_3___default.a(this);
    this.init();
    this._isAnimationEnd = true;
  }

  _createClass(BaseWeapon, [{
    key: "init",
    value: function init() {}
  }, {
    key: "hide",
    value: function hide() {
      this._container.alpha = 0;
      this._weaponContainer.interactive = false;
    }
  }, {
    key: "show",
    value: function show() {
      this._container.alpha = 1;
      this._weaponContainer.interactive = true;
    }
  }, {
    key: "shot",
    value: function shot() {}
  }, {
    key: "sleeveAnimation",
    value: function sleeveAnimation() {
      var _this2 = this;

      var sleeve = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_0__["default"].createSpriteFromAtlas({
        x: 190,
        y: 160,
        name: "sleeve"
      });
      sleeve.scale.set(0.4);
      sleeve.setParent(this._container);
      this.rotationTween = new tween_js__WEBPACK_IMPORTED_MODULE_1___default.a.Tween(sleeve).to({
        x: sleeve.x - _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].random(100, 150),
        y: [20, 300]
      }, 180).onUpdate(function (k) {
        sleeve.rotation = -k;
      }).onComplete(function () {
        _this2._container.removeChild(sleeve);

        sleeve.destroy();
      }).start();
    }
  }, {
    key: "fireAnimation",
    value: function fireAnimation(positions) {
      var x = positions.x,
          y = positions.y;
      var animatedSprite = new pixi_js__WEBPACK_IMPORTED_MODULE_2__["AnimatedSprite"]([_engine_TexturesLoader__WEBPACK_IMPORTED_MODULE_4__["default"].getByName("fireAnimation_1"), _engine_TexturesLoader__WEBPACK_IMPORTED_MODULE_4__["default"].getByName("fireAnimation_2")]);
      animatedSprite.animationSpeed = 0.7;
      animatedSprite.loop = false;
      animatedSprite.position.set(this._mainSprite.x + x, this._mainSprite.y + y);

      animatedSprite.onComplete = function () {
        animatedSprite.destroy();
      };

      this._weaponContainer.addChild(animatedSprite);

      animatedSprite.play();
    }
  }, {
    key: "tick",
    value: function tick() {}
  }, {
    key: "container",
    get: function get() {
      return this._container;
    }
  }]);

  return BaseWeapon;
}();


var Colt1911 =
/*#__PURE__*/
function (_BaseWeapon) {
  _inherits(Colt1911, _BaseWeapon);

  function Colt1911(config) {
    _classCallCheck(this, Colt1911);

    return _possibleConstructorReturn(this, _getPrototypeOf(Colt1911).call(this, config));
  }

  _createClass(Colt1911, [{
    key: "init",
    value: function init() {
      var _this3 = this;

      var _appSettings$weaponPo = _objectSpread({}, _settings_appSettings__WEBPACK_IMPORTED_MODULE_6__["default"].weaponPosition),
          x = _appSettings$weaponPo.x,
          y = _appSettings$weaponPo.y;

      this._container = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_0__["default"].createContainer({});
      this._weaponContainer = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_0__["default"].createContainer({
        x: x,
        y: y
      });

      this._weaponContainer.on("pointerdown", function () {
        _this3.emit("shotRequest");
      });

      this._weaponContainer.interactive = true;

      this._weaponContainer.setParent(this._container);

      this._mainSprite = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_0__["default"].createSpriteFromAtlas({
        name: "colt1911"
      });

      this._mainSprite.setParent(this._weaponContainer);

      this._slideSprite = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_0__["default"].createSpriteFromAtlas({
        name: "slide1911"
      });

      this._slideSprite.setParent(this._weaponContainer);
    }
  }, {
    key: "shot",
    value: function shot(coordinates) {
      if (!this._isAnimationEnd) {
        return;
      }

      this._isAnimationEnd = false;
      this.sleeveAnimation();

      this._bulletAnimation(coordinates);

      this._weaponAnimation();

      this.fireAnimation({
        x: 230,
        y: -20
      });
      this.emit("shotIsDone"); // this.rageAnimation();
    }
  }, {
    key: "_weaponAnimation",
    value: function _weaponAnimation() {
      var _this4 = this;

      //TODO: WEAPON POSITION
      this.rotationTween = new tween_js__WEBPACK_IMPORTED_MODULE_1___default.a.Tween(this._weaponContainer).to({
        rotation: [-0.17, 0]
      }, 80).start();
      this.slideTween = new tween_js__WEBPACK_IMPORTED_MODULE_1___default.a.Tween(this._slideSprite.pivot).to({
        x: [45, 0]
      }, 80).onComplete(function () {
        _this4._isAnimationEnd = true;
      }).start();
    } // rageAnimation() {
    //     const bullets = [];
    //     this._rageBulletContainer = GraphicsHelper.createContainer({
    //         x: this._weaponContainer.x + this._mainSprite.width,
    //         y: this._weaponContainer.y,
    //     });
    //     this._rageBulletContainer.setParent(this._weaponContainer);
    //     for (let i = 0; i <= 20; i++) {
    //         const graphics = new PIXI.Graphics();
    //         const color = Utils.getRandomColor();
    //         const radius = Utils.random(10, 30);
    //         graphics.lineStyle(0); // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
    //         graphics.beginFill(color, 1);
    //         graphics.drawCircle(-80, -100, radius);
    //         graphics.endFill();
    //         bullets.push(graphics);
    //         this._rageBulletContainer.addChild(graphics);
    //     }
    //     bullets.forEach(bullet => {
    //         const delay = Utils.random(0, 400);
    //         const a = new TWEEN.Tween(bullet)
    //             .delay(delay)
    //             .to({ x: 900, y: 100 }, 360)
    //             .onComplete(() => {
    //                 // bullet.destroy();
    //             })
    //             .start();
    //         console.log(a, "a");
    //     });
    // }

  }, {
    key: "_bulletAnimation",
    value: function _bulletAnimation(coordinates) {
      var bullet = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_0__["default"].createSpriteFromAtlas({
        x: this._weaponContainer.x + this._mainSprite.width,
        y: this._weaponContainer.y,
        name: "bullet"
      });
      bullet.scale.set(0.3);
      bullet.setParent(this._container);
      new tween_js__WEBPACK_IMPORTED_MODULE_1___default.a.Tween(bullet).to({
        x: coordinates.x,
        y: coordinates.y + 100
      }, 60).onComplete(function () {
        bullet.destroy();
      }).start();
    }
  }]);

  return Colt1911;
}(BaseWeapon);
var AK47 =
/*#__PURE__*/
function (_BaseWeapon2) {
  _inherits(AK47, _BaseWeapon2);

  function AK47(config) {
    _classCallCheck(this, AK47);

    return _possibleConstructorReturn(this, _getPrototypeOf(AK47).call(this, config));
  }

  _createClass(AK47, [{
    key: "init",
    value: function init() {
      var _this5 = this;

      var _appSettings$weaponPo2 = _objectSpread({}, _settings_appSettings__WEBPACK_IMPORTED_MODULE_6__["default"].weaponPosition),
          x = _appSettings$weaponPo2.x,
          y = _appSettings$weaponPo2.y;

      this._container = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_0__["default"].createContainer({});
      this._weaponContainer = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_0__["default"].createContainer({
        x: x,
        y: y
      });

      this._weaponContainer.on("pointerdown", function () {
        _this5.emit("shotRequest");
      });

      this._weaponContainer.interactive = true;

      this._weaponContainer.setParent(this._container);

      this._mainSprite = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_0__["default"].createSpriteFromAtlas({
        name: "ak47"
      });

      this._mainSprite.setParent(this._weaponContainer);

      this._knife = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_0__["default"].createSpriteFromAtlas({
        x: 350,
        y: 80,
        name: "ak47_knife"
      });

      this._knife.setParent(this._weaponContainer);

      this._slideSprite = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_0__["default"].createSpriteFromAtlas({
        x: 75,
        y: 18,
        name: "ak47_slide"
      });

      this._slideSprite.setParent(this._weaponContainer);
    }
  }, {
    key: "shot",
    value: function shot(coordinates) {
      if (!this._isAnimationEnd) {
        return;
      }

      this._isAnimationEnd = false;
      this.sleeveAnimation();

      this._bulletAnimation(coordinates);

      this._weaponAnimation();

      this.fireAnimation({
        x: 420,
        y: 0
      });
      this.emit("shotIsDone");
    }
  }, {
    key: "_weaponAnimation",
    value: function _weaponAnimation() {
      var _this6 = this;

      var endXPosition = this._weaponContainer.x;
      this.rotationTween = new tween_js__WEBPACK_IMPORTED_MODULE_1___default.a.Tween(this._weaponContainer).to({
        rotation: [-0.17, 0]
      }, 80).start();
      this.moveTween = new tween_js__WEBPACK_IMPORTED_MODULE_1___default.a.Tween(this._weaponContainer).to({
        x: [-20, endXPosition]
      }, 80).onComplete(function () {
        _this6._isAnimationEnd = true;
      }).start();
      this.slideTween = new tween_js__WEBPACK_IMPORTED_MODULE_1___default.a.Tween(this._slideSprite.scale).to({
        x: [1, 0, 1]
      }, 80).start();
      this.knifeRotationTween = new tween_js__WEBPACK_IMPORTED_MODULE_1___default.a.Tween(this._knife).to({
        rotation: [-0.3, 0.3, -0.2, 0.2, 0.1, 0.1, 0]
      }, 180).start();
    }
  }, {
    key: "_bulletAnimation",
    value: function _bulletAnimation(coordinates) {
      var bullet = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_0__["default"].createSpriteFromAtlas({
        x: this._weaponContainer.x + this._mainSprite.width,
        y: this._weaponContainer.y + 60,
        name: "bullet"
      });
      bullet.scale.set(0.3);
      bullet.setParent(this._container);
      new tween_js__WEBPACK_IMPORTED_MODULE_1___default.a.Tween(bullet).to({
        x: coordinates.x,
        y: coordinates.y + 100
      }, 60).onComplete(function () {
        bullet.destroy();
      }).start();
    }
  }]);

  return AK47;
}(BaseWeapon);

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Utils; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Utils =
/*#__PURE__*/
function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, null, [{
    key: "random",
    value: function random(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }, {
    key: "getRandomColor",
    value: function getRandomColor() {
      return "0x" + (Math.random() * 0xffffff << 0).toString(16);
    }
  }]);

  return Utils;
}();



/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var WEAPONS = {
  ak47: "ak47",
  colt: "colt"
};
/* harmony default export */ __webpack_exports__["default"] = (WEAPONS);

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var _Target__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tween_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82);
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66);
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(component_emitter__WEBPACK_IMPORTED_MODULE_4__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var TargetsManager =
/*#__PURE__*/
function () {
  function TargetsManager(config) {
    _classCallCheck(this, TargetsManager);

    this._container = null;
    this._target1 = null;
    this._target2 = null;
    this._config = config; //TODO: bonusManager, not stupid logic

    this._isFirstTarget = true;

    this._init(config);

    new component_emitter__WEBPACK_IMPORTED_MODULE_4___default.a(this);
  }

  _createClass(TargetsManager, [{
    key: "_init",
    value: function _init(config) {
      var x = config.x;
      this._container = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_0__["default"].createContainer({
        x: x
      });
      this.updateTargets();
    }
  }, {
    key: "makeHole",
    value: function makeHole(coordinates) {
      var _this$_container = this._container,
          x = _this$_container.x,
          y = _this$_container.y;

      this._target1.makeHole({
        x: coordinates.x - x,
        y: coordinates.y - y
      });
    }
  }, {
    key: "createTarget",
    value: function createTarget() {
      var _this = this;

      var level = this._config.level;
      var name = "target"; //TODO: refactoring

      if (level === "2" && this._isFirstTarget) {
        name = "flameTarget";
        this._isFirstTarget = false;
      }

      var target = new _Target__WEBPACK_IMPORTED_MODULE_1__["default"]({
        x: 150,
        y: 0,
        name: name
      });
      target.container.setParent(this._container);
      target.on("destroy", function () {
        _this._target1 = null;

        _this.updateTargets();

        _this._container.removeChild(target.container); //TODO: refactoring


        if (name === "flameTarget") {
          _this.emit("rageMode");
        }
      });
      return target;
    }
  }, {
    key: "updateTargets",
    value: function updateTargets() {
      var _this2 = this;

      if (!this._target2) {
        this._target2 = this.createTarget();
      }

      this._target1 = this._target2;
      this._targetTween = new tween_js__WEBPACK_IMPORTED_MODULE_2___default.a.Tween(this._target1.container).to({
        x: 0
      }, 80).start().onComplete(function (x) {
        _this2._target2 = _this2.createTarget();
      });
    }
  }, {
    key: "setBonusTarget",
    value: function setBonusTarget() {}
  }, {
    key: "getHolePosition",
    value: function getHolePosition() {
      var _this$_target1$contai = this._target1.container,
          width = _this$_target1$contai.width,
          height = _this$_target1$contai.height;
      var _this$_container2 = this._container,
          x = _this$_container2.x,
          y = _this$_container2.y;
      var xShift = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["default"].random(width * 0.1, width * 0.55);
      var yShift = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["default"].random(height * 0.2, height * 0.55);
      return {
        x: xShift + x,
        y: yShift + y
      };
    }
  }, {
    key: "container",
    get: function get() {
      return this._container;
    }
  }]);

  return TargetsManager;
}();

/* harmony default export */ __webpack_exports__["default"] = (TargetsManager);

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tween_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66);
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(component_emitter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Target =
/*#__PURE__*/
function () {
  function Target(config) {
    _classCallCheck(this, Target);

    this._config = _objectSpread({}, config);
    this._lives = 5;
    this._container = null;
    this._shakeAnimation = null;
    this._scale = 1.4;
    new component_emitter__WEBPACK_IMPORTED_MODULE_2___default.a(this);

    this._init();
  }

  _createClass(Target, [{
    key: "_init",
    value: function _init() {
      var _this$_config = this._config,
          x = _this$_config.x,
          y = _this$_config.y,
          name = _this$_config.name;
      this._container = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_0__["default"].createContainer({
        x: x,
        y: y + 100
      });
      this._target = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_0__["default"].createSpriteFromAtlas({
        name: name
      });

      this._target.scale.set(this._scale);

      this._target.setParent(this._container);
    }
  }, {
    key: "makeHole",
    value: function makeHole(coordinates) {
      var x = coordinates.x,
          y = coordinates.y;
      this._lives -= 1;

      if (this._lives <= 0) {
        if (this._lives == 0) {
          this.destroy();
        }

        return;
      }

      var hole = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_0__["default"].createSpriteFromAtlas({
        x: x,
        y: y,
        name: "hole"
      });
      hole.scale.set(0.3);
      hole.setParent(this._container);

      this._shake();
    }
  }, {
    key: "_shake",
    value: function _shake() {
      this._shakeAnimation = new tween_js__WEBPACK_IMPORTED_MODULE_1___default.a.Tween(this._container).to({
        x: [-10, 0, 10, -5, 0, 5, 0]
      }, 180).start();
    }
  }, {
    key: "_destroyAnimation",
    value: function _destroyAnimation() {
      var _this = this;

      this._target.alpha = 0;
      var animationsCompletions = [];

      var addAnimation = function addAnimation(_ref) {
        var x = _ref.x,
            y = _ref.y,
            name = _ref.name,
            tweenAnimationSettings = _ref.tweenAnimationSettings;
        var animation = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_0__["default"].createSpriteFromAtlas({
          name: name,
          x: x,
          y: y
        });
        animation.scale.set(_this._scale);
        animation.setParent(_this._container);
        animationsCompletions.push(new Promise(function (resolve) {
          var sign = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["default"].random(0, 1) === 0 ? -1 : 1;
          new tween_js__WEBPACK_IMPORTED_MODULE_1___default.a.Tween(animation).to(tweenAnimationSettings, 180).onUpdate(function (k) {
            animation.rotation = k * sign;
          }).onComplete(function () {
            resolve();
          }).start();
        }));
      };

      addAnimation({
        name: "targetDestroyAnimation_1",
        x: 0,
        y: 5,
        tweenAnimationSettings: {
          x: -30,
          y: [-20, 300]
        }
      });
      addAnimation({
        name: "targetDestroyAnimation_2",
        x: 30,
        y: 0,
        tweenAnimationSettings: {
          x: 80,
          y: [-20, 300]
        }
      });
      addAnimation({
        name: "targetDestroyAnimation_3",
        x: 60,
        y: 75,
        tweenAnimationSettings: {
          x: 100,
          y: [-20, 300]
        }
      });
      addAnimation({
        name: "targetDestroyAnimation_4",
        x: 20,
        y: 95,
        tweenAnimationSettings: {
          x: 20,
          y: [-20, 300]
        }
      });
      return Promise.all(animationsCompletions);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this2 = this;

      this._destroyAnimation().then(function () {
        _this2.emit("destroy");

        _this2._container.removeChildren();
      });

      this._shakeAnimation.stop();
    }
  }, {
    key: "container",
    get: function get() {
      return this._container;
    }
  }]);

  return Target;
}();

/* harmony default export */ __webpack_exports__["default"] = (Target);

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tween_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _engine_Starter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Hint =
/*#__PURE__*/
function () {
  function Hint(coordinates) {
    _classCallCheck(this, Hint);

    this._sprite = null;

    this._init(coordinates);
  }

  _createClass(Hint, [{
    key: "_init",
    value: function _init(coordinates) {
      var _coordinates = _objectSpread({}, coordinates),
          x = _coordinates.x,
          y = _coordinates.y;

      this._container = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_0__["default"].createContainer({
        x: x,
        y: y
      });
      this._sprite = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_0__["default"].createSpriteFromAtlas({
        name: "hand"
      });

      this._sprite.scale.set(1.6);

      this._sprite.setParent(this._container);

      this._animation();

      this.show();
    }
  }, {
    key: "_animation",
    value: function _animation() {
      var _this = this;

      this._hintTween = new tween_js__WEBPACK_IMPORTED_MODULE_1___default.a.Tween(this._sprite.scale).to({
        x: [2, 1.6],
        y: [2, 1.6]
      }, 1000).onComplete(function () {
        _this._animation();
      }).start();
    }
  }, {
    key: "hide",
    value: function hide() {
      this._container.alpha = 0;
    }
  }, {
    key: "show",
    value: function show() {
      this._container.alpha = 1;
    }
  }, {
    key: "sprite",
    get: function get() {
      return this._container;
    }
  }]);

  return Hint;
}();

/* harmony default export */ __webpack_exports__["default"] = (Hint);

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_weapons_Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);

/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "Colt 1911",
  weaponType: _components_weapons_Constants__WEBPACK_IMPORTED_MODULE_0__["default"].colt,
  gameProgressToUnlock: 0,
  level: "1",
  shotReward: 20,
  openLevelCost: 0
}, {
  name: "AK-47",
  weaponType: _components_weapons_Constants__WEBPACK_IMPORTED_MODULE_0__["default"].ak47,
  gameProgressToUnlock: 5,
  level: "2",
  shotReward: 40,
  openLevelCost: 100
}, {
  name: "no name",
  weaponType: _components_weapons_Constants__WEBPACK_IMPORTED_MODULE_0__["default"].colt,
  gameProgressToUnlock: 500,
  level: "3",
  shotReward: 100,
  openLevelCost: 1000
}, {
  name: "no name",
  weaponType: _components_weapons_Constants__WEBPACK_IMPORTED_MODULE_0__["default"].colt,
  gameProgressToUnlock: 5,
  level: "10",
  shotReward: 300,
  openLevelCost: 10000
}, {
  name: "no name",
  weaponType: _components_weapons_Constants__WEBPACK_IMPORTED_MODULE_0__["default"].colt,
  gameProgressToUnlock: 10,
  level: "15",
  shotReward: 500,
  openLevelCost: 100000
}, {
  name: "no name",
  weaponType: _components_weapons_Constants__WEBPACK_IMPORTED_MODULE_0__["default"].colt,
  gameProgressToUnlock: 13,
  level: "20",
  shotReward: 1000,
  openLevelCost: 1000000
}]);

/***/ })
/******/ ]);