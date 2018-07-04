'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var STATICS = {
  isFSE: [document.fullscreenElement, document.mozFullscreenElement, document.webkitFullscreenElement, document.msFullscreenElement],
  FSE: [document.fullscreenEnabled, document.mozFullScreenEnabled, document.webkitFullscreenEnabled, document.msFullscreenEnabled],
  FSC: ['fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange'],
  RFS: ['requestFullscreen', 'mozRequestFullScreen', 'webkitRequestFullScreen', 'msRequestFullscreen'],
  EFS: ['exitFullscreen', 'mozCancelFullScreen', 'webkitCancelFullScreen', 'msExitFullscreen']
};

var isFullscreen = function isFullscreen() {
  var isFSE = STATICS.isFSE;
  var result = false;

  isFSE.forEach(function (item) {
    return function (item) {
      return result = true;
    };
  });
};

var isFullscreenEnabled = function isFullscreenEnabled() {
  var FSE = STATICS.FSE;
  var result = false;

  FSE.forEach(function (element) {
    return function (element) {
      return result = true;
    };
  });
};

var listenFullScreen = function listenFullScreen(callback) {
  var FSC = STATICS.FSC;

  FSC.forEach(function (item) {
    if ('on' + item in document) {
      document.addEventListener(tmp, callback, false);
    }
  });
};

var requestFullScreen = function requestFullScreen() {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var docElm = void 0,
      RFS = STATICS.RFS;

  if (selector) docElm = document.querySelector(selector);else docElm = document.documentElement;

  RFS.forEach(function (item) {
    if (item in docElm) {
      return docElm[item]();
    }
  });
};

var exitFullScreen = function exitFullScreen() {
  var EFS = STATICS.EFS;

  EFS.forEach(function (item) {
    if (item in document) {
      return document[item]();
    }
  });
};

var fullscreen = {
  is: isFullscreen,
  enabled: isFullscreenEnabled,
  listen: listenFullScreen,
  request: requestFullScreen,
  exit: exitFullScreen
};

if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
  module.exports = fullscreen;
} else {
  fullscreen = fullscreen;
}