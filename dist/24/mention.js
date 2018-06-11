(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("svg-sprite-loader/runtime/browser-sprite.build"), require("svg-baker-runtime/browser-symbol"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "svg-sprite-loader/runtime/browser-sprite.build", "svg-baker-runtime/browser-symbol"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("svg-sprite-loader/runtime/browser-sprite.build"), require("svg-baker-runtime/browser-symbol")) : factory(root["react"], root["svg-sprite-loader/runtime/browser-sprite.build"], root["svg-baker-runtime/browser-symbol"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 136);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _browserSymbol = __webpack_require__(2);

var _browserSymbol2 = _interopRequireDefault(_browserSymbol);

var _browserSprite = __webpack_require__(1);

var _browserSprite2 = _interopRequireDefault(_browserSprite);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var symbol = new _browserSymbol2.default({
  "id": "mention_24",
  "use": "mention_24-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"mention_24\"><path d=\"M12.2445652,8.44021739 C11.7010842,8.44021739 11.2255455,8.58061454 10.8179348,8.86141304 C10.410324,9.14221155 10.0615957,9.49999783 9.77173913,9.93478261 C9.48188261,10.3695674 9.26449348,10.8586929 9.11956522,11.4021739 C8.97463696,11.9456549 8.90217391,12.4800698 8.90217391,13.0054348 C8.90217391,13.2590592 8.93387649,13.5489114 8.99728261,13.875 C9.06068872,14.2010886 9.17391223,14.5090565 9.33695652,14.798913 C9.50000082,15.0887696 9.72191889,15.3288034 10.0027174,15.5190217 C10.2835159,15.7092401 10.6413022,15.8043478 11.076087,15.8043478 C11.6920321,15.8043478 12.2173891,15.6503639 12.6521739,15.3423913 C13.0869587,15.0344188 13.440216,14.6494588 13.7119565,14.1875 C13.983697,13.7255412 14.1829704,13.2318867 14.3097826,12.7065217 C14.4365948,12.1811568 14.5,11.6920312 14.5,11.2391304 C14.5,10.8949258 14.4637685,10.5552553 14.3913043,10.2201087 C14.3188402,9.88496209 14.1965588,9.58605204 14.0244565,9.32336957 C13.8523542,9.06068709 13.6213783,8.8478269 13.3315217,8.68478261 C13.0416652,8.52173832 12.67935,8.44021739 12.2445652,8.44021739 Z M18.9296469,20.5578037 C18.3716468,20.8964495 17.778251,21.1824346 17.1494565,21.4157609 C15.7092319,21.9501838 14.1195739,22.2173913 12.3804348,22.2173913 C10.822456,22.2173913 9.40489769,21.9682996 8.12771739,21.4701087 C6.85053709,20.9719178 5.7590625,20.2789899 4.85326087,19.3913043 C3.94745924,18.5036187 3.24547351,17.4393178 2.74728261,16.1983696 C2.24909171,14.9574213 2,13.6032682 2,12.1358696 C2,10.686587 2.27173641,9.34602065 2.81521739,8.11413043 C3.35869837,6.88224022 4.10144457,5.81341033 5.04347826,4.9076087 C5.98551196,4.00180707 7.08604443,3.29076345 8.3451087,2.77445652 C9.60417296,2.25814959 10.9492682,2 12.3804348,2 C13.612325,2 14.8079652,2.18115761 15.9673913,2.54347826 C17.1268174,2.90579891 18.1548868,3.44927174 19.0516304,4.17391304 C19.948374,4.89855435 20.6639466,5.80434239 21.1983696,6.89130435 C21.7327925,7.9782663 22,9.25542745 22,10.7228261 C22,11.809788 21.8550739,12.7699234 21.5652174,13.6032609 C21.2753609,14.4365984 20.890401,15.1340552 20.4103261,15.6956522 C19.9302512,16.2572492 19.3731916,16.6784406 18.7391304,16.9592391 C18.1050693,17.2400376 17.4347861,17.3804348 16.7282609,17.3804348 C15.9130394,17.3804348 15.3152193,17.1811614 14.9347826,16.7826087 C14.5543459,16.384056 14.3641304,15.9221041 14.3641304,15.3967391 L14.2554348,15.3967391 C14.1648546,15.5960155 14.0199285,15.8088757 13.8206522,16.0353261 C13.6213758,16.2617765 13.376813,16.4746367 13.0869565,16.673913 C12.7971,16.8731894 12.4664874,17.0407602 12.0951087,17.1766304 C11.72373,17.3125007 11.3115965,17.3804348 10.8586957,17.3804348 C10.2427505,17.3804348 9.69021984,17.2672113 9.20108696,17.0407609 C8.71195408,16.8143105 8.29982052,16.5063425 7.96467391,16.1168478 C7.62952731,15.7273531 7.37137772,15.2563433 7.19021739,14.7038043 C7.00905707,14.1512654 6.91847826,13.5489163 6.91847826,12.8967391 C6.91847826,12.1358658 7.04528859,11.3885906 7.29891304,10.6548913 C7.5525375,9.92119198 7.91032378,9.26902459 8.37228261,8.69836957 C8.83424144,8.12771454 9.40035897,7.67029158 10.0706522,7.32608696 C10.7409454,6.98188234 11.4927495,6.80978261 12.326087,6.80978261 C13.0144962,6.80978261 13.6077874,6.96829552 14.1059783,7.28532609 C14.6041692,7.60235666 14.9528976,7.98731658 15.1521739,8.44021739 L15.2608696,8.44021739 L15.5326087,7.2173913 L17.2173913,7.2173913 L16.1304348,12.2717391 C16.0942027,12.3985514 16.0625001,12.5570643 16.0353261,12.7472826 C16.008152,12.937501 15.9764495,13.1367743 15.9402174,13.3451087 C15.9039853,13.5534431 15.8768117,13.7572454 15.8586957,13.9565217 C15.8405796,14.1557981 15.8315217,14.3188399 15.8315217,14.4456522 C15.8315217,14.6086965 15.8451086,14.7672094 15.8722826,14.9211957 C15.8994567,15.0751819 15.9628618,15.220108 16.0625,15.3559783 C16.1621382,15.4918485 16.2980064,15.6005431 16.4701087,15.6820652 C16.642211,15.7635874 16.873187,15.8043478 17.1630435,15.8043478 C17.6159443,15.8043478 18.0280779,15.6775375 18.3994565,15.423913 C18.7708352,15.1702886 19.087861,14.8260891 19.3505435,14.3913043 C19.613226,13.9565196 19.8170283,13.4402204 19.9619565,12.8423913 C20.1068848,12.2445622 20.1793478,11.6014527 20.1793478,10.9130435 C20.1793478,9.73550136 19.9846034,8.69837405 19.5951087,7.80163043 C19.205614,6.90488682 18.6621412,6.1485538 17.9646739,5.5326087 C17.2672067,4.91666359 16.4429395,4.45471168 15.4918478,4.14673913 C14.5407561,3.83876658 13.4945709,3.68478261 12.3532609,3.68478261 C11.1032546,3.68478261 9.97101957,3.90217174 8.95652174,4.33695652 C7.94202391,4.7717413 7.06793845,5.36956141 6.33423913,6.13043478 C5.60053981,6.89130815 5.03442228,7.79256726 4.63586957,8.83423913 C4.23731685,9.87591101 4.03804348,11.0036171 4.03804348,12.2173913 C4.03804348,13.5036296 4.24637473,14.6630383 4.66304348,15.6956522 C5.07971223,16.728266 5.66394552,17.6068804 6.41576087,18.3315217 C7.16757622,19.056163 8.06430639,19.6132227 9.10597826,20.0027174 C10.1476501,20.3922121 11.3025299,20.5869565 12.5706522,20.5869565 C14.1829791,20.5869565 15.5778927,20.3378648 16.7554348,19.8396739 C17.2251936,19.6409298 17.6747682,19.4097524 18.1041606,19.1461405 L18.9296469,20.5578037 Z\" /></symbol>"
});
var result = _browserSprite2.default.add(symbol);

var width = symbol.viewBox.split(' ')[2];
var height = symbol.viewBox.split(' ')[3];
var size = Math.max(width, height);

function SvgIcon(props) {
  var className = 'Icon' + ' Icon--' + size + ' Icon--' + symbol.id + ' ' + (props.className || '');
  return _react2.default.createElement(
    "div",
    { className: className, style: _extends({ width: width + 'px', height: height + 'px' }, props.style), onClick: props.onClick },
    _react2.default.createElement(
      "svg",
      { viewBox: symbol.viewBox, width: width, height: height, style: { display: 'block' } },
      _react2.default.createElement("use", { xlinkHref: '#' + symbol.id, style: { fill: 'currentColor', color: props.fill } })
    )
  );
}
exports.default = SvgIcon;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ })

/******/ });
});