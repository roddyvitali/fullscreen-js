'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var STATICS = {
  isFSE: ['fullscreenElement', 'mozFullscreenElement', 'webkitFullscreenElement', 'msFullscreenElement'],
  FSE: ['fullscreenEnabled', 'mozFullScreenEnabled', 'webkitFullscreenEnabled', 'msFullscreenEnabled'],
  FSC: ['fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange'],
  RFS: ['requestFullscreen', 'mozRequestFullScreen', 'webkitRequestFullScreen', 'msRequestFullscreen'],
  EFS: ['exitFullscreen', 'mozCancelFullScreen', 'webkitCancelFullScreen', 'msExitFullscreen']
};

var isFullscreen = function isFullscreen() {
  var isFSE = STATICS.isFSE,
      result = false;

  isFSE.forEach(function (item) {
    if (item in document) {
      return document[item] ? result = true : result = false;
    }
  });

  return result;
};

var isFullscreenEnabled = function isFullscreenEnabled() {
  var FSE = STATICS.FSE,
      result = false;

  FSE.forEach(function (item) {
    if (item in document) {
      return document[item] ? result = true : result = false;
    }
  });

  return result;
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

exports.default = fullscreen;