// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = " *{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    background: #BFFBFF;\n    height: 150px;\n    width: 1500px;\n\n\n}\n\n@keyframes raise {\n    25% {\n        transform: rotate(170deg) translate(2vmin, -3vmin);\n        transform-origin: top;\n    }\n\n    50% {\n        transform: rotate(150deg) translate(3vmin, -3vmin);\n        transform-origin: top;\n    }\n\n    60% {\n        transform: rotate(170deg) translate(2vmin, -3vmin);\n        transform-origin: top;\n    }\n}\n\n@keyframes raise-inv {\n    25% {\n        transform: rotate(-170deg) translate(-2vmin, -3vmin);\n        transform-origin: top;\n    }\n\n    50% {\n        transform: rotate(-150deg) translate(-3vmin, -3vmin);\n        transform-origin: top;\n    }\n\n    60% {\n        transform: rotate(-170deg) translate(-2vmin, -3vmin);\n        transform-origin: top;\n    }\n}\n\n.skin {\n    position: relative;\n\n    background: transparent;\n    height: 400px;\n    width: 400px;\n    border-radius: 50%;\n    top: 200px;\n    left: 50%;\n    margin-left: -200px;\n}\n\n.hair {\n    position: relative;\n    background: #615F4E;\n    height: 35px;\n    width: 12px;\n    border-radius: 10%;\n    left: 50%;\n    top: 10px;\n    margin-left: -6px;\n}\n\n.hair::after {\n    content: '';\n    position: absolute;\n    background: #615F4E;\n    height: 28px;\n    width: 10px;\n    border-radius: 10%;\n    top: 5px;\n    left: -12px;\n    transform: rotate(-20deg);\n}\n\n.hair::before {\n    content: '';\n    position: absolute;\n    background: #615F4E;\n    height: 30px;\n    width: 8px;\n    border-radius: 10%;\n    top: 5px;\n    left: 13px;\n    transform: rotate(20deg);\n}\n\n.head {\n\n    position: relative;\n    background: #FAF16E;\n    height: 100px;\n    width: 150px;\n    border-radius: 50%;\n    top: 5px;\n    left: 50%;\n    margin-left: -75px;\n\n}\n\n.head::before {\n\n    content: '';\n    position: absolute;\n    background: #FAF16E;\n    height: 160px;\n    width: 130px;\n    border-radius: 50% 50% 50% 50% / 70% 70% 40% 40%;\n    top: 30px;\n    left: 10px;\n    z-index: 2;\n}\n\n.mouth {\n\n    position: relative;\n    background: #F8F2CB;\n    height: 60px;\n    width: 90px;\n    border-radius: 50%;\n    top: -50px;\n    border-bottom: 10px solid #e0dcc1;\n    z-index: 5;\n    left: 50%;\n    margin-left: -45px;\n}\n\n.mouth::before {\n    content: '';\n    position: absolute;\n    background: #F8F2CB;\n    width: 120px;\n    height: 40px;\n    border-radius: 50%;\n    top: 12px;\n    left: 50%;\n    margin-left: -60px;\n    z-index: 5;\n}\n\n.nostrils {\n    position: relative;\n    background: #615F4E;\n    height: 5px;\n    width: 5px;\n    border-radius: 5px 0;\n    top: -119px;\n    left: 50%;\n    margin-left: 7px;\n    z-index: 6;\n}\n\n.nostrils::before {\n    content: '';\n    position: absolute;\n    background: #615F4E;\n    height: 5px;\n    width: 5px;\n    border-radius: 0 5px;\n    left: -20px;\n    z-index: 1;\n}\n\n.face {\n    position: relative;\n    background: #FFC5A5;\n    height: 15px;\n    width: 20px;\n    border-radius: 50%;\n    top: -55px;\n    left: 50%;\n    margin-left: -70px;\n    box-shadow: 120px 0 #FFC5A5;\n    z-index: 2;\n\n}\n\n.eyes {\n\n    width: 30px;\n    height: 20px;\n    position: relative;\n    left: 50%;\n    top: -138px;\n    margin-left: -65px;\n    background: white;\n    border-radius: 49% 51% 51% 49%;\n    z-index: 8;\n    box-shadow: 100px 0 white;\n\n\n\n}\n\n.eyes::after {\n    content: '';\n    position: absolute;\n    width: 5px;\n    height: 5px;\n    border-radius: 50%;\n    left: 50%;\n    top: 7px;\n    margin-left: 5px;\n    background: #615F4E;\n    box-shadow: 85px 0 #615F4E;\n}\n\n.arm {\n    position: relative;\n    background: #FAF16E;\n    height: 70px;\n    width: 35px;\n    border-radius: 50% 50% 20% 20%;\n    border-right: 25px solid #FAF16E;\n    border-bottom: 28px solid #ebe26a;\n    left: 125px;\n    top: -70px;\n\n    animation: raise 3s infinite;\n}\n\n.arm::before {\n\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-left: 4px solid transparent;\n    border-right: 15px solid transparent;\n    border-top: 1vmin solid #ebe26a;\n    top: 69px;\n\n\n}\n\n.arm::after {\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-left: 15px solid transparent;\n    border-right: 4px solid transparent;\n    border-top: 1vmin solid #ebe26a;\n    top: 69px;\n    left: 12px;\n\n}\n\n.rightArm {\n    position: relative;\n    background: #FAF16E;\n    height: 70px;\n    width: 35px;\n    border-radius: 50% 50% 20% 20%;\n    border-right: 25px solid #FAF16E;\n    border-bottom: 28px solid #ebe26a;\n    left: 242px;\n    top: -136px;\n    animation: raise-inv 3s linear 1s infinite;\n}\n\n.rightArm::before {\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-left: 4px solid transparent;\n    border-right: 15px solid transparent;\n    border-top: 1vmin solid #ebe26a;\n    top: 69px;\n    left: 2px;\n}\n\n.rightArm::after {\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-left: 15px solid transparent;\n    border-right: 4px solid transparent;\n    border-top: 1vmin solid #ebe26a;\n    top: 69px;\n    left: 13px;\n}\n\n.foot .left {\n    position: relative;\n    width: 32px;\n    height: 18px;\n    background: #F8F2CB;\n    border-radius: 50%;\n    top: -173px;\n    left: 155px;\n\n    animation: footsie 0.5s infinite;\n}\n\n.foot .right {\n    position: relative;\n    width: 32px;\n    height: 18px;\n    background: #F8F2CB;\n    border-radius: 50%;\n    top: -154px;\n    left: 217px;\n\n    animation: footsie 0.5s infinite;\n}\n\n\n@keyframes footsie {\n    50% {\n        transform: translatey(1vmin);\n    }\n}\n\n@keyframes right-footsie {\n    50% {\n        top: 38vmin;\n    }\n}\n";
var _default = string;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  n: 1,
  init: function init() {
    player.ui.demo.innerText = _css.default.substring(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substring(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; // pause / play / slow

        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = _css.default.substring(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substring(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"css.js"}],"C:/Users/86199/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51233" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/86199/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map