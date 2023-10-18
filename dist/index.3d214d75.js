// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3smKr":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bB7Pu":[function(require,module,exports) {
var _mainElm = require("./src/Main.elm");
(0, _mainElm.Elm).Main.init({
    node: document.getElementById("root")
});

},{"./src/Main.elm":"4XkAe"}],"4XkAe":[function(require,module,exports) {
(function(scope) {
    "use strict";
    function F(arity1, fun1, wrapper1) {
        wrapper1.a = arity1;
        wrapper1.f = fun1;
        return wrapper1;
    }
    function F2(fun1) {
        return F(2, fun1, function(a1) {
            return function(b1) {
                return fun1(a1, b1);
            };
        });
    }
    function F3(fun1) {
        return F(3, fun1, function(a1) {
            return function(b1) {
                return function(c1) {
                    return fun1(a1, b1, c1);
                };
            };
        });
    }
    function F4(fun1) {
        return F(4, fun1, function(a1) {
            return function(b1) {
                return function(c1) {
                    return function(d9) {
                        return fun1(a1, b1, c1, d9);
                    };
                };
            };
        });
    }
    function F5(fun1) {
        return F(5, fun1, function(a1) {
            return function(b1) {
                return function(c1) {
                    return function(d9) {
                        return function(e1) {
                            return fun1(a1, b1, c1, d9, e1);
                        };
                    };
                };
            };
        });
    }
    function F6(fun1) {
        return F(6, fun1, function(a1) {
            return function(b1) {
                return function(c1) {
                    return function(d9) {
                        return function(e1) {
                            return function(f1) {
                                return fun1(a1, b1, c1, d9, e1, f1);
                            };
                        };
                    };
                };
            };
        });
    }
    function F7(fun1) {
        return F(7, fun1, function(a1) {
            return function(b1) {
                return function(c1) {
                    return function(d9) {
                        return function(e1) {
                            return function(f1) {
                                return function(g1) {
                                    return fun1(a1, b1, c1, d9, e1, f1, g1);
                                };
                            };
                        };
                    };
                };
            };
        });
    }
    function F8(fun1) {
        return F(8, fun1, function(a1) {
            return function(b1) {
                return function(c1) {
                    return function(d9) {
                        return function(e1) {
                            return function(f1) {
                                return function(g1) {
                                    return function(h1) {
                                        return fun1(a1, b1, c1, d9, e1, f1, g1, h1);
                                    };
                                };
                            };
                        };
                    };
                };
            };
        });
    }
    function F9(fun1) {
        return F(9, fun1, function(a1) {
            return function(b1) {
                return function(c1) {
                    return function(d9) {
                        return function(e1) {
                            return function(f1) {
                                return function(g1) {
                                    return function(h1) {
                                        return function(i1) {
                                            return fun1(a1, b1, c1, d9, e1, f1, g1, h1, i1);
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        });
    }
    function A2(fun1, a1, b1) {
        return fun1.a === 2 ? fun1.f(a1, b1) : fun1(a1)(b1);
    }
    function A3(fun1, a1, b1, c1) {
        return fun1.a === 3 ? fun1.f(a1, b1, c1) : fun1(a1)(b1)(c1);
    }
    function A4(fun1, a1, b1, c1, d9) {
        return fun1.a === 4 ? fun1.f(a1, b1, c1, d9) : fun1(a1)(b1)(c1)(d9);
    }
    function A5(fun1, a1, b1, c1, d9, e1) {
        return fun1.a === 5 ? fun1.f(a1, b1, c1, d9, e1) : fun1(a1)(b1)(c1)(d9)(e1);
    }
    function A6(fun1, a1, b1, c1, d9, e1, f1) {
        return fun1.a === 6 ? fun1.f(a1, b1, c1, d9, e1, f1) : fun1(a1)(b1)(c1)(d9)(e1)(f1);
    }
    function A7(fun1, a1, b1, c1, d9, e1, f1, g1) {
        return fun1.a === 7 ? fun1.f(a1, b1, c1, d9, e1, f1, g1) : fun1(a1)(b1)(c1)(d9)(e1)(f1)(g1);
    }
    function A8(fun1, a1, b1, c1, d9, e1, f1, g1, h1) {
        return fun1.a === 8 ? fun1.f(a1, b1, c1, d9, e1, f1, g1, h1) : fun1(a1)(b1)(c1)(d9)(e1)(f1)(g1)(h1);
    }
    function A9(fun1, a1, b1, c1, d9, e1, f1, g1, h1, i1) {
        return fun1.a === 9 ? fun1.f(a1, b1, c1, d9, e1, f1, g1, h1, i1) : fun1(a1)(b1)(c1)(d9)(e1)(f1)(g1)(h1)(i1);
    }
    console.warn("Compiled in DEBUG mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.");
    // EQUALITY
    function _Utils_eq(x1, y1) {
        for(var pair1, stack1 = [], isEqual1 = _Utils_eqHelp(x1, y1, 0, stack1); isEqual1 && (pair1 = stack1.pop()); isEqual1 = _Utils_eqHelp(pair1.a, pair1.b, 0, stack1));
        return isEqual1;
    }
    function _Utils_eqHelp(x1, y1, depth1, stack1) {
        if (x1 === y1) return true;
        if (typeof x1 !== "object" || x1 === null || y1 === null) {
            typeof x1 === "function" && _Debug_crash(5);
            return false;
        }
        if (depth1 > 100) {
            stack1.push(_Utils_Tuple2(x1, y1));
            return true;
        }
        /**/ if (x1.$ === "Set_elm_builtin") {
            x1 = $elm$core$Set$toList(x1);
            y1 = $elm$core$Set$toList(y1);
        }
        if (x1.$ === "RBNode_elm_builtin" || x1.$ === "RBEmpty_elm_builtin") {
            x1 = $elm$core$Dict$toList(x1);
            y1 = $elm$core$Dict$toList(y1);
        }
        //*/
        /**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/ for(var key1 in x1){
            if (!_Utils_eqHelp(x1[key1], y1[key1], depth1 + 1, stack1)) return false;
        }
        return true;
    }
    var _Utils_equal = F2(_Utils_eq);
    var _Utils_notEqual = F2(function(a1, b1) {
        return !_Utils_eq(a1, b1);
    });
    // COMPARISONS
    // Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
    // the particular integer values assigned to LT, EQ, and GT.
    function _Utils_cmp(x1, y1, ord1) {
        if (typeof x1 !== "object") return x1 === y1 ? /*EQ*/ 0 : x1 < y1 ? /*LT*/ -1 : /*GT*/ 1;
        /**/ if (x1 instanceof String) {
            var a1 = x1.valueOf();
            var b1 = y1.valueOf();
            return a1 === b1 ? 0 : a1 < b1 ? -1 : 1;
        }
        //*/
        /**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/ /**/ if (x1.$[0] === "#") return (ord1 = _Utils_cmp(x1.a, y1.a)) ? ord1 : (ord1 = _Utils_cmp(x1.b, y1.b)) ? ord1 : _Utils_cmp(x1.c, y1.c);
        // traverse conses until end of a list or a mismatch
        for(; x1.b && y1.b && !(ord1 = _Utils_cmp(x1.a, y1.a)); x1 = x1.b, y1 = y1.b); // WHILE_CONSES
        return ord1 || (x1.b ? /*GT*/ 1 : y1.b ? /*LT*/ -1 : /*EQ*/ 0);
    }
    var _Utils_lt = F2(function(a1, b1) {
        return _Utils_cmp(a1, b1) < 0;
    });
    var _Utils_le = F2(function(a1, b1) {
        return _Utils_cmp(a1, b1) < 1;
    });
    var _Utils_gt = F2(function(a1, b1) {
        return _Utils_cmp(a1, b1) > 0;
    });
    var _Utils_ge = F2(function(a1, b1) {
        return _Utils_cmp(a1, b1) >= 0;
    });
    var _Utils_compare = F2(function(x1, y1) {
        var n2 = _Utils_cmp(x1, y1);
        return n2 < 0 ? $elm$core$Basics$LT : n2 ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
    });
    // COMMON VALUES
    var _Utils_Tuple0_UNUSED = 0;
    var _Utils_Tuple0 = {
        $: "#0"
    };
    function _Utils_Tuple2_UNUSED(a1, b1) {
        return {
            a: a1,
            b: b1
        };
    }
    function _Utils_Tuple2(a1, b1) {
        return {
            $: "#2",
            a: a1,
            b: b1
        };
    }
    function _Utils_Tuple3_UNUSED(a1, b1, c1) {
        return {
            a: a1,
            b: b1,
            c: c1
        };
    }
    function _Utils_Tuple3(a1, b1, c1) {
        return {
            $: "#3",
            a: a1,
            b: b1,
            c: c1
        };
    }
    function _Utils_chr_UNUSED(c1) {
        return c1;
    }
    function _Utils_chr(c1) {
        return new String(c1);
    }
    // RECORDS
    function _Utils_update(oldRecord1, updatedFields1) {
        var newRecord1 = {};
        for(var key1 in oldRecord1)newRecord1[key1] = oldRecord1[key1];
        for(var key1 in updatedFields1)newRecord1[key1] = updatedFields1[key1];
        return newRecord1;
    }
    // APPEND
    var _Utils_append = F2(_Utils_ap);
    function _Utils_ap(xs1, ys1) {
        // append Strings
        if (typeof xs1 === "string") return xs1 + ys1;
        // append Lists
        if (!xs1.b) return ys1;
        var root1 = _List_Cons(xs1.a, ys1);
        xs1 = xs1.b;
        for(var curr1 = root1; xs1.b; xs1 = xs1.b)curr1 = curr1.b = _List_Cons(xs1.a, ys1);
        return root1;
    }
    var _List_Nil_UNUSED = {
        $: 0
    };
    var _List_Nil = {
        $: "[]"
    };
    function _List_Cons_UNUSED(hd1, tl1) {
        return {
            $: 1,
            a: hd1,
            b: tl1
        };
    }
    function _List_Cons(hd1, tl1) {
        return {
            $: "::",
            a: hd1,
            b: tl1
        };
    }
    var _List_cons = F2(_List_Cons);
    function _List_fromArray(arr1) {
        var out1 = _List_Nil;
        for(var i1 = arr1.length; i1--;)out1 = _List_Cons(arr1[i1], out1);
        return out1;
    }
    function _List_toArray(xs1) {
        for(var out1 = []; xs1.b; xs1 = xs1.b)out1.push(xs1.a);
        return out1;
    }
    var _List_map2 = F3(function(f1, xs1, ys1) {
        for(var arr1 = []; xs1.b && ys1.b; xs1 = xs1.b, ys1 = ys1.b)arr1.push(A2(f1, xs1.a, ys1.a));
        return _List_fromArray(arr1);
    });
    var _List_map3 = F4(function(f1, xs1, ys1, zs1) {
        for(var arr1 = []; xs1.b && ys1.b && zs1.b; xs1 = xs1.b, ys1 = ys1.b, zs1 = zs1.b)arr1.push(A3(f1, xs1.a, ys1.a, zs1.a));
        return _List_fromArray(arr1);
    });
    var _List_map4 = F5(function(f1, ws1, xs1, ys1, zs1) {
        for(var arr1 = []; ws1.b && xs1.b && ys1.b && zs1.b; ws1 = ws1.b, xs1 = xs1.b, ys1 = ys1.b, zs1 = zs1.b)arr1.push(A4(f1, ws1.a, xs1.a, ys1.a, zs1.a));
        return _List_fromArray(arr1);
    });
    var _List_map5 = F6(function(f1, vs1, ws1, xs1, ys1, zs1) {
        for(var arr1 = []; vs1.b && ws1.b && xs1.b && ys1.b && zs1.b; vs1 = vs1.b, ws1 = ws1.b, xs1 = xs1.b, ys1 = ys1.b, zs1 = zs1.b)arr1.push(A5(f1, vs1.a, ws1.a, xs1.a, ys1.a, zs1.a));
        return _List_fromArray(arr1);
    });
    var _List_sortBy = F2(function(f1, xs1) {
        return _List_fromArray(_List_toArray(xs1).sort(function(a1, b1) {
            return _Utils_cmp(f1(a1), f1(b1));
        }));
    });
    var _List_sortWith = F2(function(f1, xs1) {
        return _List_fromArray(_List_toArray(xs1).sort(function(a1, b1) {
            var ord1 = A2(f1, a1, b1);
            return ord1 === $elm$core$Basics$EQ ? 0 : ord1 === $elm$core$Basics$LT ? -1 : 1;
        }));
    });
    var _JsArray_empty = [];
    function _JsArray_singleton(value1) {
        return [
            value1
        ];
    }
    function _JsArray_length(array1) {
        return array1.length;
    }
    var _JsArray_initialize = F3(function(size1, offset1, func1) {
        var result1 = new Array(size1);
        for(var i1 = 0; i1 < size1; i1++)result1[i1] = func1(offset1 + i1);
        return result1;
    });
    var _JsArray_initializeFromList = F2(function(max1, ls1) {
        var result1 = new Array(max1);
        for(var i1 = 0; i1 < max1 && ls1.b; i1++){
            result1[i1] = ls1.a;
            ls1 = ls1.b;
        }
        result1.length = i1;
        return _Utils_Tuple2(result1, ls1);
    });
    var _JsArray_unsafeGet = F2(function(index1, array1) {
        return array1[index1];
    });
    var _JsArray_unsafeSet = F3(function(index1, value1, array1) {
        var length1 = array1.length;
        var result1 = new Array(length1);
        for(var i1 = 0; i1 < length1; i1++)result1[i1] = array1[i1];
        result1[index1] = value1;
        return result1;
    });
    var _JsArray_push = F2(function(value1, array1) {
        var length1 = array1.length;
        var result1 = new Array(length1 + 1);
        for(var i1 = 0; i1 < length1; i1++)result1[i1] = array1[i1];
        result1[length1] = value1;
        return result1;
    });
    var _JsArray_foldl = F3(function(func1, acc1, array1) {
        var length1 = array1.length;
        for(var i1 = 0; i1 < length1; i1++)acc1 = A2(func1, array1[i1], acc1);
        return acc1;
    });
    var _JsArray_foldr = F3(function(func1, acc1, array1) {
        for(var i1 = array1.length - 1; i1 >= 0; i1--)acc1 = A2(func1, array1[i1], acc1);
        return acc1;
    });
    var _JsArray_map = F2(function(func1, array1) {
        var length1 = array1.length;
        var result1 = new Array(length1);
        for(var i1 = 0; i1 < length1; i1++)result1[i1] = func1(array1[i1]);
        return result1;
    });
    var _JsArray_indexedMap = F3(function(func1, offset1, array1) {
        var length1 = array1.length;
        var result1 = new Array(length1);
        for(var i1 = 0; i1 < length1; i1++)result1[i1] = A2(func1, offset1 + i1, array1[i1]);
        return result1;
    });
    var _JsArray_slice = F3(function(from1, to1, array1) {
        return array1.slice(from1, to1);
    });
    var _JsArray_appendN = F3(function(n2, dest1, source1) {
        var destLen1 = dest1.length;
        var itemsToCopy1 = n2 - destLen1;
        if (itemsToCopy1 > source1.length) itemsToCopy1 = source1.length;
        var size1 = destLen1 + itemsToCopy1;
        var result1 = new Array(size1);
        for(var i1 = 0; i1 < destLen1; i1++)result1[i1] = dest1[i1];
        for(var i1 = 0; i1 < itemsToCopy1; i1++)result1[i1 + destLen1] = source1[i1];
        return result1;
    });
    // LOG
    var _Debug_log_UNUSED = F2(function(tag3, value1) {
        return value1;
    });
    var _Debug_log = F2(function(tag3, value1) {
        console.log(tag3 + ": " + _Debug_toString(value1));
        return value1;
    });
    // TODOS
    function _Debug_todo(moduleName1, region1) {
        return function(message1) {
            _Debug_crash(8, moduleName1, region1, message1);
        };
    }
    function _Debug_todoCase(moduleName1, region1, value1) {
        return function(message1) {
            _Debug_crash(9, moduleName1, region1, value1, message1);
        };
    }
    // TO STRING
    function _Debug_toString_UNUSED(value1) {
        return "<internals>";
    }
    function _Debug_toString(value1) {
        return _Debug_toAnsiString(false, value1);
    }
    function _Debug_toAnsiString(ansi1, value1) {
        if (typeof value1 === "function") return _Debug_internalColor(ansi1, "<function>");
        if (typeof value1 === "boolean") return _Debug_ctorColor(ansi1, value1 ? "True" : "False");
        if (typeof value1 === "number") return _Debug_numberColor(ansi1, value1 + "");
        if (value1 instanceof String) return _Debug_charColor(ansi1, "'" + _Debug_addSlashes(value1, true) + "'");
        if (typeof value1 === "string") return _Debug_stringColor(ansi1, '"' + _Debug_addSlashes(value1, false) + '"');
        if (typeof value1 === "object" && "$" in value1) {
            var tag3 = value1.$;
            if (typeof tag3 === "number") return _Debug_internalColor(ansi1, "<internals>");
            if (tag3[0] === "#") {
                var output1 = [];
                for(var k1 in value1){
                    if (k1 === "$") continue;
                    output1.push(_Debug_toAnsiString(ansi1, value1[k1]));
                }
                return "(" + output1.join(",") + ")";
            }
            if (tag3 === "Set_elm_builtin") return _Debug_ctorColor(ansi1, "Set") + _Debug_fadeColor(ansi1, ".fromList") + " " + _Debug_toAnsiString(ansi1, $elm$core$Set$toList(value1));
            if (tag3 === "RBNode_elm_builtin" || tag3 === "RBEmpty_elm_builtin") return _Debug_ctorColor(ansi1, "Dict") + _Debug_fadeColor(ansi1, ".fromList") + " " + _Debug_toAnsiString(ansi1, $elm$core$Dict$toList(value1));
            if (tag3 === "Array_elm_builtin") return _Debug_ctorColor(ansi1, "Array") + _Debug_fadeColor(ansi1, ".fromList") + " " + _Debug_toAnsiString(ansi1, $elm$core$Array$toList(value1));
            if (tag3 === "::" || tag3 === "[]") {
                var output1 = "[";
                value1.b && (output1 += _Debug_toAnsiString(ansi1, value1.a), value1 = value1.b);
                for(; value1.b; value1 = value1.b)output1 += "," + _Debug_toAnsiString(ansi1, value1.a);
                return output1 + "]";
            }
            var output1 = "";
            for(var i1 in value1){
                if (i1 === "$") continue;
                var str1 = _Debug_toAnsiString(ansi1, value1[i1]);
                var c01 = str1[0];
                var parenless1 = c01 === "{" || c01 === "(" || c01 === "[" || c01 === "<" || c01 === '"' || str1.indexOf(" ") < 0;
                output1 += " " + (parenless1 ? str1 : "(" + str1 + ")");
            }
            return _Debug_ctorColor(ansi1, tag3) + output1;
        }
        if (typeof DataView === "function" && value1 instanceof DataView) return _Debug_stringColor(ansi1, "<" + value1.byteLength + " bytes>");
        if (typeof File !== "undefined" && value1 instanceof File) return _Debug_internalColor(ansi1, "<" + value1.name + ">");
        if (typeof value1 === "object") {
            var output1 = [];
            for(var key1 in value1){
                var field1 = key1[0] === "_" ? key1.slice(1) : key1;
                output1.push(_Debug_fadeColor(ansi1, field1) + " = " + _Debug_toAnsiString(ansi1, value1[key1]));
            }
            if (output1.length === 0) return "{}";
            return "{ " + output1.join(", ") + " }";
        }
        return _Debug_internalColor(ansi1, "<internals>");
    }
    function _Debug_addSlashes(str1, isChar1) {
        var s1 = str1.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
        if (isChar1) return s1.replace(/\'/g, "\\'");
        else return s1.replace(/\"/g, '\\"');
    }
    function _Debug_ctorColor(ansi1, string1) {
        return ansi1 ? "\x1b[96m" + string1 + "\x1b[0m" : string1;
    }
    function _Debug_numberColor(ansi1, string1) {
        return ansi1 ? "\x1b[95m" + string1 + "\x1b[0m" : string1;
    }
    function _Debug_stringColor(ansi1, string1) {
        return ansi1 ? "\x1b[93m" + string1 + "\x1b[0m" : string1;
    }
    function _Debug_charColor(ansi1, string1) {
        return ansi1 ? "\x1b[92m" + string1 + "\x1b[0m" : string1;
    }
    function _Debug_fadeColor(ansi1, string1) {
        return ansi1 ? "\x1b[37m" + string1 + "\x1b[0m" : string1;
    }
    function _Debug_internalColor(ansi1, string1) {
        return ansi1 ? "\x1b[36m" + string1 + "\x1b[0m" : string1;
    }
    function _Debug_toHexDigit(n2) {
        return String.fromCharCode(n2 < 10 ? 48 + n2 : 55 + n2);
    }
    // CRASH
    function _Debug_crash_UNUSED(identifier1) {
        throw new Error("https://github.com/elm/core/blob/1.0.0/hints/" + identifier1 + ".md");
    }
    function _Debug_crash(identifier1, fact11, fact21, fact31, fact41) {
        switch(identifier1){
            case 0:
                throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');
            case 1:
                throw new Error("Browser.application programs cannot handle URLs like this:\n\n    " + document.location.href + "\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");
            case 2:
                var jsonErrorString1 = fact11;
                throw new Error("Problem with the flags given to your Elm program on initialization.\n\n" + jsonErrorString1);
            case 3:
                var portName1 = fact11;
                throw new Error("There can only be one port named `" + portName1 + "`, but your program has multiple.");
            case 4:
                var portName1 = fact11;
                var problem1 = fact21;
                throw new Error("Trying to send an unexpected type of value through port `" + portName1 + "`:\n" + problem1);
            case 5:
                throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');
            case 6:
                var moduleName1 = fact11;
                throw new Error("Your page is loading multiple Elm scripts with a module named " + moduleName1 + ". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");
            case 8:
                var moduleName1 = fact11;
                var region1 = fact21;
                var message1 = fact31;
                throw new Error("TODO in module `" + moduleName1 + "` " + _Debug_regionToString(region1) + "\n\n" + message1);
            case 9:
                var moduleName1 = fact11;
                var region1 = fact21;
                var value1 = fact31;
                var message1 = fact41;
                throw new Error("TODO in module `" + moduleName1 + "` from the `case` expression " + _Debug_regionToString(region1) + "\n\nIt received the following value:\n\n    " + _Debug_toString(value1).replace("\n", "\n    ") + "\n\nBut the branch that handles it says:\n\n    " + message1.replace("\n", "\n    "));
            case 10:
                throw new Error("Bug in https://github.com/elm/virtual-dom/issues");
            case 11:
                throw new Error("Cannot perform mod 0. Division by zero error.");
        }
    }
    function _Debug_regionToString(region1) {
        if (region1.start.line === region1.end.line) return "on line " + region1.start.line;
        return "on lines " + region1.start.line + " through " + region1.end.line;
    }
    // MATH
    var _Basics_add = F2(function(a1, b1) {
        return a1 + b1;
    });
    var _Basics_sub = F2(function(a1, b1) {
        return a1 - b1;
    });
    var _Basics_mul = F2(function(a1, b1) {
        return a1 * b1;
    });
    var _Basics_fdiv = F2(function(a1, b1) {
        return a1 / b1;
    });
    var _Basics_idiv = F2(function(a1, b1) {
        return a1 / b1 | 0;
    });
    var _Basics_pow = F2(Math.pow);
    var _Basics_remainderBy = F2(function(b1, a1) {
        return a1 % b1;
    });
    // https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
    var _Basics_modBy = F2(function(modulus1, x1) {
        var answer1 = x1 % modulus1;
        return modulus1 === 0 ? _Debug_crash(11) : answer1 > 0 && modulus1 < 0 || answer1 < 0 && modulus1 > 0 ? answer1 + modulus1 : answer1;
    });
    // TRIGONOMETRY
    var _Basics_pi = Math.PI;
    var _Basics_e = Math.E;
    var _Basics_cos = Math.cos;
    var _Basics_sin = Math.sin;
    var _Basics_tan = Math.tan;
    var _Basics_acos = Math.acos;
    var _Basics_asin = Math.asin;
    var _Basics_atan = Math.atan;
    var _Basics_atan2 = F2(Math.atan2);
    // MORE MATH
    function _Basics_toFloat(x1) {
        return x1;
    }
    function _Basics_truncate(n2) {
        return n2 | 0;
    }
    function _Basics_isInfinite(n2) {
        return n2 === Infinity || n2 === -Infinity;
    }
    var _Basics_ceiling = Math.ceil;
    var _Basics_floor = Math.floor;
    var _Basics_round = Math.round;
    var _Basics_sqrt = Math.sqrt;
    var _Basics_log = Math.log;
    var _Basics_isNaN = isNaN;
    // BOOLEANS
    function _Basics_not(bool1) {
        return !bool1;
    }
    var _Basics_and = F2(function(a1, b1) {
        return a1 && b1;
    });
    var _Basics_or = F2(function(a1, b1) {
        return a1 || b1;
    });
    var _Basics_xor = F2(function(a1, b1) {
        return a1 !== b1;
    });
    var _String_cons = F2(function(chr1, str1) {
        return chr1 + str1;
    });
    function _String_uncons(string1) {
        var word1 = string1.charCodeAt(0);
        return !isNaN(word1) ? $elm$core$Maybe$Just(0xD800 <= word1 && word1 <= 0xDBFF ? _Utils_Tuple2(_Utils_chr(string1[0] + string1[1]), string1.slice(2)) : _Utils_Tuple2(_Utils_chr(string1[0]), string1.slice(1))) : $elm$core$Maybe$Nothing;
    }
    var _String_append = F2(function(a1, b1) {
        return a1 + b1;
    });
    function _String_length(str1) {
        return str1.length;
    }
    var _String_map = F2(function(func1, string1) {
        var len1 = string1.length;
        var array1 = new Array(len1);
        var i1 = 0;
        while(i1 < len1){
            var word1 = string1.charCodeAt(i1);
            if (0xD800 <= word1 && word1 <= 0xDBFF) {
                array1[i1] = func1(_Utils_chr(string1[i1] + string1[i1 + 1]));
                i1 += 2;
                continue;
            }
            array1[i1] = func1(_Utils_chr(string1[i1]));
            i1++;
        }
        return array1.join("");
    });
    var _String_filter = F2(function(isGood1, str1) {
        var arr1 = [];
        var len1 = str1.length;
        var i1 = 0;
        while(i1 < len1){
            var char1 = str1[i1];
            var word1 = str1.charCodeAt(i1);
            i1++;
            if (0xD800 <= word1 && word1 <= 0xDBFF) {
                char1 += str1[i1];
                i1++;
            }
            if (isGood1(_Utils_chr(char1))) arr1.push(char1);
        }
        return arr1.join("");
    });
    function _String_reverse(str1) {
        var len1 = str1.length;
        var arr1 = new Array(len1);
        var i1 = 0;
        while(i1 < len1){
            var word1 = str1.charCodeAt(i1);
            if (0xD800 <= word1 && word1 <= 0xDBFF) {
                arr1[len1 - i1] = str1[i1 + 1];
                i1++;
                arr1[len1 - i1] = str1[i1 - 1];
                i1++;
            } else {
                arr1[len1 - i1] = str1[i1];
                i1++;
            }
        }
        return arr1.join("");
    }
    var _String_foldl = F3(function(func1, state3, string1) {
        var len1 = string1.length;
        var i1 = 0;
        while(i1 < len1){
            var char1 = string1[i1];
            var word1 = string1.charCodeAt(i1);
            i1++;
            if (0xD800 <= word1 && word1 <= 0xDBFF) {
                char1 += string1[i1];
                i1++;
            }
            state3 = A2(func1, _Utils_chr(char1), state3);
        }
        return state3;
    });
    var _String_foldr = F3(function(func1, state3, string1) {
        var i1 = string1.length;
        while(i1--){
            var char1 = string1[i1];
            var word1 = string1.charCodeAt(i1);
            if (0xDC00 <= word1 && word1 <= 0xDFFF) {
                i1--;
                char1 = string1[i1] + char1;
            }
            state3 = A2(func1, _Utils_chr(char1), state3);
        }
        return state3;
    });
    var _String_split = F2(function(sep1, str1) {
        return str1.split(sep1);
    });
    var _String_join = F2(function(sep1, strs1) {
        return strs1.join(sep1);
    });
    var _String_slice = F3(function(start1, end1, str1) {
        return str1.slice(start1, end1);
    });
    function _String_trim(str1) {
        return str1.trim();
    }
    function _String_trimLeft(str1) {
        return str1.replace(/^\s+/, "");
    }
    function _String_trimRight(str1) {
        return str1.replace(/\s+$/, "");
    }
    function _String_words(str1) {
        return _List_fromArray(str1.trim().split(/\s+/g));
    }
    function _String_lines(str1) {
        return _List_fromArray(str1.split(/\r\n|\r|\n/g));
    }
    function _String_toUpper(str1) {
        return str1.toUpperCase();
    }
    function _String_toLower(str1) {
        return str1.toLowerCase();
    }
    var _String_any = F2(function(isGood1, string1) {
        var i1 = string1.length;
        while(i1--){
            var char1 = string1[i1];
            var word1 = string1.charCodeAt(i1);
            if (0xDC00 <= word1 && word1 <= 0xDFFF) {
                i1--;
                char1 = string1[i1] + char1;
            }
            if (isGood1(_Utils_chr(char1))) return true;
        }
        return false;
    });
    var _String_all = F2(function(isGood1, string1) {
        var i1 = string1.length;
        while(i1--){
            var char1 = string1[i1];
            var word1 = string1.charCodeAt(i1);
            if (0xDC00 <= word1 && word1 <= 0xDFFF) {
                i1--;
                char1 = string1[i1] + char1;
            }
            if (!isGood1(_Utils_chr(char1))) return false;
        }
        return true;
    });
    var _String_contains = F2(function(sub1, str1) {
        return str1.indexOf(sub1) > -1;
    });
    var _String_startsWith = F2(function(sub1, str1) {
        return str1.indexOf(sub1) === 0;
    });
    var _String_endsWith = F2(function(sub1, str1) {
        return str1.length >= sub1.length && str1.lastIndexOf(sub1) === str1.length - sub1.length;
    });
    var _String_indexes = F2(function(sub1, str1) {
        var subLen1 = sub1.length;
        if (subLen1 < 1) return _List_Nil;
        var i1 = 0;
        var is1 = [];
        while((i1 = str1.indexOf(sub1, i1)) > -1){
            is1.push(i1);
            i1 = i1 + subLen1;
        }
        return _List_fromArray(is1);
    });
    // TO STRING
    function _String_fromNumber(number1) {
        return number1 + "";
    }
    // INT CONVERSIONS
    function _String_toInt(str1) {
        var total1 = 0;
        var code01 = str1.charCodeAt(0);
        var start1 = code01 == 0x2B /* + */  || code01 == 0x2D /* - */  ? 1 : 0;
        for(var i1 = start1; i1 < str1.length; ++i1){
            var code1 = str1.charCodeAt(i1);
            if (code1 < 0x30 || 0x39 < code1) return $elm$core$Maybe$Nothing;
            total1 = 10 * total1 + code1 - 0x30;
        }
        return i1 == start1 ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(code01 == 0x2D ? -total1 : total1);
    }
    // FLOAT CONVERSIONS
    function _String_toFloat(s1) {
        // check if it is a hex, octal, or binary number
        if (s1.length === 0 || /[\sxbo]/.test(s1)) return $elm$core$Maybe$Nothing;
        var n2 = +s1;
        // faster isNaN check
        return n2 === n2 ? $elm$core$Maybe$Just(n2) : $elm$core$Maybe$Nothing;
    }
    function _String_fromList(chars1) {
        return _List_toArray(chars1).join("");
    }
    function _Char_toCode(char1) {
        var code1 = char1.charCodeAt(0);
        if (0xD800 <= code1 && code1 <= 0xDBFF) return (code1 - 0xD800) * 0x400 + char1.charCodeAt(1) - 0xDC00 + 0x10000;
        return code1;
    }
    function _Char_fromCode(code1) {
        return _Utils_chr(code1 < 0 || 0x10FFFF < code1 ? "\uFFFD" : code1 <= 0xFFFF ? String.fromCharCode(code1) : (code1 -= 0x10000, String.fromCharCode(Math.floor(code1 / 0x400) + 0xD800, code1 % 0x400 + 0xDC00)));
    }
    function _Char_toUpper(char1) {
        return _Utils_chr(char1.toUpperCase());
    }
    function _Char_toLower(char1) {
        return _Utils_chr(char1.toLowerCase());
    }
    function _Char_toLocaleUpper(char1) {
        return _Utils_chr(char1.toLocaleUpperCase());
    }
    function _Char_toLocaleLower(char1) {
        return _Utils_chr(char1.toLocaleLowerCase());
    }
    /**/ function _Json_errorToString(error1) {
        return $elm$json$Json$Decode$errorToString(error1);
    }
    //*/
    // CORE DECODERS
    function _Json_succeed(msg1) {
        return {
            $: 0,
            a: msg1
        };
    }
    function _Json_fail(msg1) {
        return {
            $: 1,
            a: msg1
        };
    }
    function _Json_decodePrim(decoder1) {
        return {
            $: 2,
            b: decoder1
        };
    }
    var _Json_decodeInt = _Json_decodePrim(function(value1) {
        return typeof value1 !== "number" ? _Json_expecting("an INT", value1) : -2147483647 < value1 && value1 < 2147483647 && (value1 | 0) === value1 ? $elm$core$Result$Ok(value1) : isFinite(value1) && !(value1 % 1) ? $elm$core$Result$Ok(value1) : _Json_expecting("an INT", value1);
    });
    var _Json_decodeBool = _Json_decodePrim(function(value1) {
        return typeof value1 === "boolean" ? $elm$core$Result$Ok(value1) : _Json_expecting("a BOOL", value1);
    });
    var _Json_decodeFloat = _Json_decodePrim(function(value1) {
        return typeof value1 === "number" ? $elm$core$Result$Ok(value1) : _Json_expecting("a FLOAT", value1);
    });
    var _Json_decodeValue = _Json_decodePrim(function(value1) {
        return $elm$core$Result$Ok(_Json_wrap(value1));
    });
    var _Json_decodeString = _Json_decodePrim(function(value1) {
        return typeof value1 === "string" ? $elm$core$Result$Ok(value1) : value1 instanceof String ? $elm$core$Result$Ok(value1 + "") : _Json_expecting("a STRING", value1);
    });
    function _Json_decodeList(decoder1) {
        return {
            $: 3,
            b: decoder1
        };
    }
    function _Json_decodeArray(decoder1) {
        return {
            $: 4,
            b: decoder1
        };
    }
    function _Json_decodeNull(value1) {
        return {
            $: 5,
            c: value1
        };
    }
    var _Json_decodeField = F2(function(field1, decoder1) {
        return {
            $: 6,
            d: field1,
            b: decoder1
        };
    });
    var _Json_decodeIndex = F2(function(index1, decoder1) {
        return {
            $: 7,
            e: index1,
            b: decoder1
        };
    });
    function _Json_decodeKeyValuePairs(decoder1) {
        return {
            $: 8,
            b: decoder1
        };
    }
    function _Json_mapMany(f1, decoders1) {
        return {
            $: 9,
            f: f1,
            g: decoders1
        };
    }
    var _Json_andThen = F2(function(callback1, decoder1) {
        return {
            $: 10,
            b: decoder1,
            h: callback1
        };
    });
    function _Json_oneOf(decoders1) {
        return {
            $: 11,
            g: decoders1
        };
    }
    // DECODING OBJECTS
    var _Json_map1 = F2(function(f1, d11) {
        return _Json_mapMany(f1, [
            d11
        ]);
    });
    var _Json_map2 = F3(function(f1, d11, d21) {
        return _Json_mapMany(f1, [
            d11,
            d21
        ]);
    });
    var _Json_map3 = F4(function(f1, d11, d21, d31) {
        return _Json_mapMany(f1, [
            d11,
            d21,
            d31
        ]);
    });
    var _Json_map4 = F5(function(f1, d11, d21, d31, d41) {
        return _Json_mapMany(f1, [
            d11,
            d21,
            d31,
            d41
        ]);
    });
    var _Json_map5 = F6(function(f1, d11, d21, d31, d41, d51) {
        return _Json_mapMany(f1, [
            d11,
            d21,
            d31,
            d41,
            d51
        ]);
    });
    var _Json_map6 = F7(function(f1, d11, d21, d31, d41, d51, d61) {
        return _Json_mapMany(f1, [
            d11,
            d21,
            d31,
            d41,
            d51,
            d61
        ]);
    });
    var _Json_map7 = F8(function(f1, d11, d21, d31, d41, d51, d61, d71) {
        return _Json_mapMany(f1, [
            d11,
            d21,
            d31,
            d41,
            d51,
            d61,
            d71
        ]);
    });
    var _Json_map8 = F9(function(f1, d11, d21, d31, d41, d51, d61, d71, d81) {
        return _Json_mapMany(f1, [
            d11,
            d21,
            d31,
            d41,
            d51,
            d61,
            d71,
            d81
        ]);
    });
    // DECODE
    var _Json_runOnString = F2(function(decoder1, string1) {
        try {
            var value1 = JSON.parse(string1);
            return _Json_runHelp(decoder1, value1);
        } catch (e1) {
            return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, "This is not valid JSON! " + e1.message, _Json_wrap(string1)));
        }
    });
    var _Json_run = F2(function(decoder1, value1) {
        return _Json_runHelp(decoder1, _Json_unwrap(value1));
    });
    function _Json_runHelp(decoder1, value1) {
        switch(decoder1.$){
            case 2:
                return decoder1.b(value1);
            case 5:
                return value1 === null ? $elm$core$Result$Ok(decoder1.c) : _Json_expecting("null", value1);
            case 3:
                if (!_Json_isArray(value1)) return _Json_expecting("a LIST", value1);
                return _Json_runArrayDecoder(decoder1.b, value1, _List_fromArray);
            case 4:
                if (!_Json_isArray(value1)) return _Json_expecting("an ARRAY", value1);
                return _Json_runArrayDecoder(decoder1.b, value1, _Json_toElmArray);
            case 6:
                var field1 = decoder1.d;
                if (typeof value1 !== "object" || value1 === null || !(field1 in value1)) return _Json_expecting("an OBJECT with a field named `" + field1 + "`", value1);
                var result1 = _Json_runHelp(decoder1.b, value1[field1]);
                return $elm$core$Result$isOk(result1) ? result1 : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field1, result1.a));
            case 7:
                var index1 = decoder1.e;
                if (!_Json_isArray(value1)) return _Json_expecting("an ARRAY", value1);
                if (index1 >= value1.length) return _Json_expecting("a LONGER array. Need index " + index1 + " but only see " + value1.length + " entries", value1);
                var result1 = _Json_runHelp(decoder1.b, value1[index1]);
                return $elm$core$Result$isOk(result1) ? result1 : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index1, result1.a));
            case 8:
                if (typeof value1 !== "object" || value1 === null || _Json_isArray(value1)) return _Json_expecting("an OBJECT", value1);
                var keyValuePairs1 = _List_Nil;
                // TODO test perf of Object.keys and switch when support is good enough
                for(var key1 in value1)if (value1.hasOwnProperty(key1)) {
                    var result1 = _Json_runHelp(decoder1.b, value1[key1]);
                    if (!$elm$core$Result$isOk(result1)) return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key1, result1.a));
                    keyValuePairs1 = _List_Cons(_Utils_Tuple2(key1, result1.a), keyValuePairs1);
                }
                return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs1));
            case 9:
                var answer1 = decoder1.f;
                var decoders1 = decoder1.g;
                for(var i1 = 0; i1 < decoders1.length; i1++){
                    var result1 = _Json_runHelp(decoders1[i1], value1);
                    if (!$elm$core$Result$isOk(result1)) return result1;
                    answer1 = answer1(result1.a);
                }
                return $elm$core$Result$Ok(answer1);
            case 10:
                var result1 = _Json_runHelp(decoder1.b, value1);
                return !$elm$core$Result$isOk(result1) ? result1 : _Json_runHelp(decoder1.h(result1.a), value1);
            case 11:
                var errors1 = _List_Nil;
                for(var temp1 = decoder1.g; temp1.b; temp1 = temp1.b){
                    var result1 = _Json_runHelp(temp1.a, value1);
                    if ($elm$core$Result$isOk(result1)) return result1;
                    errors1 = _List_Cons(result1.a, errors1);
                }
                return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors1)));
            case 1:
                return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder1.a, _Json_wrap(value1)));
            case 0:
                return $elm$core$Result$Ok(decoder1.a);
        }
    }
    function _Json_runArrayDecoder(decoder1, value1, toElmValue1) {
        var len1 = value1.length;
        var array1 = new Array(len1);
        for(var i1 = 0; i1 < len1; i1++){
            var result1 = _Json_runHelp(decoder1, value1[i1]);
            if (!$elm$core$Result$isOk(result1)) return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i1, result1.a));
            array1[i1] = result1.a;
        }
        return $elm$core$Result$Ok(toElmValue1(array1));
    }
    function _Json_isArray(value1) {
        return Array.isArray(value1) || typeof FileList !== "undefined" && value1 instanceof FileList;
    }
    function _Json_toElmArray(array1) {
        return A2($elm$core$Array$initialize, array1.length, function(i1) {
            return array1[i1];
        });
    }
    function _Json_expecting(type1, value1) {
        return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, "Expecting " + type1, _Json_wrap(value1)));
    }
    // EQUALITY
    function _Json_equality(x1, y1) {
        if (x1 === y1) return true;
        if (x1.$ !== y1.$) return false;
        switch(x1.$){
            case 0:
            case 1:
                return x1.a === y1.a;
            case 2:
                return x1.b === y1.b;
            case 5:
                return x1.c === y1.c;
            case 3:
            case 4:
            case 8:
                return _Json_equality(x1.b, y1.b);
            case 6:
                return x1.d === y1.d && _Json_equality(x1.b, y1.b);
            case 7:
                return x1.e === y1.e && _Json_equality(x1.b, y1.b);
            case 9:
                return x1.f === y1.f && _Json_listEquality(x1.g, y1.g);
            case 10:
                return x1.h === y1.h && _Json_equality(x1.b, y1.b);
            case 11:
                return _Json_listEquality(x1.g, y1.g);
        }
    }
    function _Json_listEquality(aDecoders1, bDecoders1) {
        var len1 = aDecoders1.length;
        if (len1 !== bDecoders1.length) return false;
        for(var i1 = 0; i1 < len1; i1++){
            if (!_Json_equality(aDecoders1[i1], bDecoders1[i1])) return false;
        }
        return true;
    }
    // ENCODE
    var _Json_encode = F2(function(indentLevel1, value1) {
        return JSON.stringify(_Json_unwrap(value1), null, indentLevel1) + "";
    });
    function _Json_wrap(value1) {
        return {
            $: 0,
            a: value1
        };
    }
    function _Json_unwrap(value1) {
        return value1.a;
    }
    function _Json_wrap_UNUSED(value1) {
        return value1;
    }
    function _Json_unwrap_UNUSED(value1) {
        return value1;
    }
    function _Json_emptyArray() {
        return [];
    }
    function _Json_emptyObject() {
        return {};
    }
    var _Json_addField = F3(function(key1, value1, object1) {
        object1[key1] = _Json_unwrap(value1);
        return object1;
    });
    function _Json_addEntry(func1) {
        return F2(function(entry1, array1) {
            array1.push(_Json_unwrap(func1(entry1)));
            return array1;
        });
    }
    var _Json_encodeNull = _Json_wrap(null);
    // TASKS
    function _Scheduler_succeed(value1) {
        return {
            $: 0,
            a: value1
        };
    }
    function _Scheduler_fail(error1) {
        return {
            $: 1,
            a: error1
        };
    }
    function _Scheduler_binding(callback1) {
        return {
            $: 2,
            b: callback1,
            c: null
        };
    }
    var _Scheduler_andThen = F2(function(callback1, task1) {
        return {
            $: 3,
            b: callback1,
            d: task1
        };
    });
    var _Scheduler_onError = F2(function(callback1, task1) {
        return {
            $: 4,
            b: callback1,
            d: task1
        };
    });
    function _Scheduler_receive(callback1) {
        return {
            $: 5,
            b: callback1
        };
    }
    // PROCESSES
    var _Scheduler_guid = 0;
    function _Scheduler_rawSpawn(task1) {
        var proc1 = {
            $: 0,
            e: _Scheduler_guid++,
            f: task1,
            g: null,
            h: []
        };
        _Scheduler_enqueue(proc1);
        return proc1;
    }
    function _Scheduler_spawn(task1) {
        return _Scheduler_binding(function(callback1) {
            callback1(_Scheduler_succeed(_Scheduler_rawSpawn(task1)));
        });
    }
    function _Scheduler_rawSend(proc1, msg1) {
        proc1.h.push(msg1);
        _Scheduler_enqueue(proc1);
    }
    var _Scheduler_send = F2(function(proc1, msg1) {
        return _Scheduler_binding(function(callback1) {
            _Scheduler_rawSend(proc1, msg1);
            callback1(_Scheduler_succeed(_Utils_Tuple0));
        });
    });
    function _Scheduler_kill(proc1) {
        return _Scheduler_binding(function(callback1) {
            var task1 = proc1.f;
            if (task1.$ === 2 && task1.c) task1.c();
            proc1.f = null;
            callback1(_Scheduler_succeed(_Utils_Tuple0));
        });
    }
    /* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/ var _Scheduler_working = false;
    var _Scheduler_queue = [];
    function _Scheduler_enqueue(proc1) {
        _Scheduler_queue.push(proc1);
        if (_Scheduler_working) return;
        _Scheduler_working = true;
        while(proc1 = _Scheduler_queue.shift())_Scheduler_step(proc1);
        _Scheduler_working = false;
    }
    function _Scheduler_step(proc1) {
        while(proc1.f){
            var rootTag1 = proc1.f.$;
            if (rootTag1 === 0 || rootTag1 === 1) {
                while(proc1.g && proc1.g.$ !== rootTag1)proc1.g = proc1.g.i;
                if (!proc1.g) return;
                proc1.f = proc1.g.b(proc1.f.a);
                proc1.g = proc1.g.i;
            } else if (rootTag1 === 2) {
                proc1.f.c = proc1.f.b(function(newRoot1) {
                    proc1.f = newRoot1;
                    _Scheduler_enqueue(proc1);
                });
                return;
            } else if (rootTag1 === 5) {
                if (proc1.h.length === 0) return;
                proc1.f = proc1.f.b(proc1.h.shift());
            } else {
                proc1.g = {
                    $: rootTag1 === 3 ? 0 : 1,
                    b: proc1.f.b,
                    i: proc1.g
                };
                proc1.f = proc1.f.d;
            }
        }
    }
    function _Process_sleep(time1) {
        return _Scheduler_binding(function(callback1) {
            var id1 = setTimeout(function() {
                callback1(_Scheduler_succeed(_Utils_Tuple0));
            }, time1);
            return function() {
                clearTimeout(id1);
            };
        });
    }
    // PROGRAMS
    var _Platform_worker = F4(function(impl1, flagDecoder1, debugMetadata1, args1) {
        return _Platform_initialize(flagDecoder1, args1, impl1.init, impl1.update, impl1.subscriptions, function() {
            return function() {};
        });
    });
    // INITIALIZE A PROGRAM
    function _Platform_initialize(flagDecoder1, args1, init1, update1, subscriptions1, stepperBuilder1) {
        var result1 = A2(_Json_run, flagDecoder1, _Json_wrap(args1 ? args1["flags"] : undefined));
        $elm$core$Result$isOk(result1) || _Debug_crash(2 /**/ , _Json_errorToString(result1.a));
        var managers1 = {};
        var initPair1 = init1(result1.a);
        var model1 = initPair1.a;
        var stepper1 = stepperBuilder1(sendToApp1, model1);
        var ports1 = _Platform_setupEffects(managers1, sendToApp1);
        function sendToApp1(msg1, viewMetadata1) {
            var pair1 = A2(update1, msg1, model1);
            stepper1(model1 = pair1.a, viewMetadata1);
            _Platform_enqueueEffects(managers1, pair1.b, subscriptions1(model1));
        }
        _Platform_enqueueEffects(managers1, initPair1.b, subscriptions1(model1));
        return ports1 ? {
            ports: ports1
        } : {};
    }
    // TRACK PRELOADS
    //
    // This is used by code in elm/browser and elm/http
    // to register any HTTP requests that are triggered by init.
    //
    var _Platform_preload;
    function _Platform_registerPreload(url1) {
        _Platform_preload.add(url1);
    }
    // EFFECT MANAGERS
    var _Platform_effectManagers = {};
    function _Platform_setupEffects(managers1, sendToApp1) {
        var ports1;
        // setup all necessary effect managers
        for(var key1 in _Platform_effectManagers){
            var manager1 = _Platform_effectManagers[key1];
            if (manager1.a) {
                ports1 = ports1 || {};
                ports1[key1] = manager1.a(key1, sendToApp1);
            }
            managers1[key1] = _Platform_instantiateManager(manager1, sendToApp1);
        }
        return ports1;
    }
    function _Platform_createManager(init1, onEffects1, onSelfMsg1, cmdMap1, subMap1) {
        return {
            b: init1,
            c: onEffects1,
            d: onSelfMsg1,
            e: cmdMap1,
            f: subMap1
        };
    }
    function _Platform_instantiateManager(info1, sendToApp1) {
        var router1 = {
            g: sendToApp1,
            h: undefined
        };
        var onEffects1 = info1.c;
        var onSelfMsg1 = info1.d;
        var cmdMap1 = info1.e;
        var subMap1 = info1.f;
        function loop1(state3) {
            return A2(_Scheduler_andThen, loop1, _Scheduler_receive(function(msg1) {
                var value1 = msg1.a;
                if (msg1.$ === 0) return A3(onSelfMsg1, router1, value1, state3);
                return cmdMap1 && subMap1 ? A4(onEffects1, router1, value1.i, value1.j, state3) : A3(onEffects1, router1, cmdMap1 ? value1.i : value1.j, state3);
            }));
        }
        return router1.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop1, info1.b));
    }
    // ROUTING
    var _Platform_sendToApp = F2(function(router1, msg1) {
        return _Scheduler_binding(function(callback1) {
            router1.g(msg1);
            callback1(_Scheduler_succeed(_Utils_Tuple0));
        });
    });
    var _Platform_sendToSelf = F2(function(router1, msg1) {
        return A2(_Scheduler_send, router1.h, {
            $: 0,
            a: msg1
        });
    });
    // BAGS
    function _Platform_leaf(home1) {
        return function(value1) {
            return {
                $: 1,
                k: home1,
                l: value1
            };
        };
    }
    function _Platform_batch(list1) {
        return {
            $: 2,
            m: list1
        };
    }
    var _Platform_map = F2(function(tagger1, bag1) {
        return {
            $: 3,
            n: tagger1,
            o: bag1
        };
    });
    // PIPE BAGS INTO EFFECT MANAGERS
    //
    // Effects must be queued!
    //
    // Say your init contains a synchronous command, like Time.now or Time.here
    //
    //   - This will produce a batch of effects (FX_1)
    //   - The synchronous task triggers the subsequent `update` call
    //   - This will produce a batch of effects (FX_2)
    //
    // If we just start dispatching FX_2, subscriptions from FX_2 can be processed
    // before subscriptions from FX_1. No good! Earlier versions of this code had
    // this problem, leading to these reports:
    //
    //   https://github.com/elm/core/issues/980
    //   https://github.com/elm/core/pull/981
    //   https://github.com/elm/compiler/issues/1776
    //
    // The queue is necessary to avoid ordering issues for synchronous commands.
    // Why use true/false here? Why not just check the length of the queue?
    // The goal is to detect "are we currently dispatching effects?" If we
    // are, we need to bail and let the ongoing while loop handle things.
    //
    // Now say the queue has 1 element. When we dequeue the final element,
    // the queue will be empty, but we are still actively dispatching effects.
    // So you could get queue jumping in a really tricky category of cases.
    //
    var _Platform_effectsQueue = [];
    var _Platform_effectsActive = false;
    function _Platform_enqueueEffects(managers1, cmdBag1, subBag1) {
        _Platform_effectsQueue.push({
            p: managers1,
            q: cmdBag1,
            r: subBag1
        });
        if (_Platform_effectsActive) return;
        _Platform_effectsActive = true;
        for(var fx1; fx1 = _Platform_effectsQueue.shift();)_Platform_dispatchEffects(fx1.p, fx1.q, fx1.r);
        _Platform_effectsActive = false;
    }
    function _Platform_dispatchEffects(managers1, cmdBag1, subBag1) {
        var effectsDict1 = {};
        _Platform_gatherEffects(true, cmdBag1, effectsDict1, null);
        _Platform_gatherEffects(false, subBag1, effectsDict1, null);
        for(var home1 in managers1)_Scheduler_rawSend(managers1[home1], {
            $: "fx",
            a: effectsDict1[home1] || {
                i: _List_Nil,
                j: _List_Nil
            }
        });
    }
    function _Platform_gatherEffects(isCmd1, bag1, effectsDict1, taggers1) {
        switch(bag1.$){
            case 1:
                var home1 = bag1.k;
                var effect1 = _Platform_toEffect(isCmd1, home1, taggers1, bag1.l);
                effectsDict1[home1] = _Platform_insert(isCmd1, effect1, effectsDict1[home1]);
                return;
            case 2:
                for(var list1 = bag1.m; list1.b; list1 = list1.b)_Platform_gatherEffects(isCmd1, list1.a, effectsDict1, taggers1);
                return;
            case 3:
                _Platform_gatherEffects(isCmd1, bag1.o, effectsDict1, {
                    s: bag1.n,
                    t: taggers1
                });
                return;
        }
    }
    function _Platform_toEffect(isCmd1, home1, taggers1, value1) {
        function applyTaggers1(x1) {
            for(var temp1 = taggers1; temp1; temp1 = temp1.t)x1 = temp1.s(x1);
            return x1;
        }
        var map1 = isCmd1 ? _Platform_effectManagers[home1].e : _Platform_effectManagers[home1].f;
        return A2(map1, applyTaggers1, value1);
    }
    function _Platform_insert(isCmd1, newEffect1, effects1) {
        effects1 = effects1 || {
            i: _List_Nil,
            j: _List_Nil
        };
        isCmd1 ? effects1.i = _List_Cons(newEffect1, effects1.i) : effects1.j = _List_Cons(newEffect1, effects1.j);
        return effects1;
    }
    // PORTS
    function _Platform_checkPortName(name1) {
        if (_Platform_effectManagers[name1]) _Debug_crash(3, name1);
    }
    // OUTGOING PORTS
    function _Platform_outgoingPort(name1, converter1) {
        _Platform_checkPortName(name1);
        _Platform_effectManagers[name1] = {
            e: _Platform_outgoingPortMap,
            u: converter1,
            a: _Platform_setupOutgoingPort
        };
        return _Platform_leaf(name1);
    }
    var _Platform_outgoingPortMap = F2(function(tagger1, value1) {
        return value1;
    });
    function _Platform_setupOutgoingPort(name1) {
        var subs1 = [];
        var converter1 = _Platform_effectManagers[name1].u;
        // CREATE MANAGER
        var init1 = _Process_sleep(0);
        _Platform_effectManagers[name1].b = init1;
        _Platform_effectManagers[name1].c = F3(function(router1, cmdList1, state3) {
            for(; cmdList1.b; cmdList1 = cmdList1.b){
                // grab a separate reference to subs in case unsubscribe is called
                var currentSubs1 = subs1;
                var value1 = _Json_unwrap(converter1(cmdList1.a));
                for(var i1 = 0; i1 < currentSubs1.length; i1++)currentSubs1[i1](value1);
            }
            return init1;
        });
        // PUBLIC API
        function subscribe1(callback1) {
            subs1.push(callback1);
        }
        function unsubscribe1(callback1) {
            // copy subs into a new array in case unsubscribe is called within a
            // subscribed callback
            subs1 = subs1.slice();
            var index1 = subs1.indexOf(callback1);
            if (index1 >= 0) subs1.splice(index1, 1);
        }
        return {
            subscribe: subscribe1,
            unsubscribe: unsubscribe1
        };
    }
    // INCOMING PORTS
    function _Platform_incomingPort(name1, converter1) {
        _Platform_checkPortName(name1);
        _Platform_effectManagers[name1] = {
            f: _Platform_incomingPortMap,
            u: converter1,
            a: _Platform_setupIncomingPort
        };
        return _Platform_leaf(name1);
    }
    var _Platform_incomingPortMap = F2(function(tagger1, finalTagger1) {
        return function(value1) {
            return tagger1(finalTagger1(value1));
        };
    });
    function _Platform_setupIncomingPort(name1, sendToApp1) {
        var subs1 = _List_Nil;
        var converter1 = _Platform_effectManagers[name1].u;
        // CREATE MANAGER
        var init1 = _Scheduler_succeed(null);
        _Platform_effectManagers[name1].b = init1;
        _Platform_effectManagers[name1].c = F3(function(router1, subList1, state3) {
            subs1 = subList1;
            return init1;
        });
        // PUBLIC API
        function send1(incomingValue1) {
            var result1 = A2(_Json_run, converter1, _Json_wrap(incomingValue1));
            $elm$core$Result$isOk(result1) || _Debug_crash(4, name1, result1.a);
            var value1 = result1.a;
            for(var temp1 = subs1; temp1.b; temp1 = temp1.b)sendToApp1(temp1.a(value1));
        }
        return {
            send: send1
        };
    }
    // EXPORT ELM MODULES
    //
    // Have DEBUG and PROD versions so that we can (1) give nicer errors in
    // debug mode and (2) not pay for the bits needed for that in prod mode.
    //
    function _Platform_export_UNUSED(exports1) {
        scope["Elm"] ? _Platform_mergeExportsProd(scope["Elm"], exports1) : scope["Elm"] = exports1;
    }
    function _Platform_mergeExportsProd(obj1, exports1) {
        for(var name1 in exports1)name1 in obj1 ? name1 == "init" ? _Debug_crash(6) : _Platform_mergeExportsProd(obj1[name1], exports1[name1]) : obj1[name1] = exports1[name1];
    }
    function _Platform_export(exports1) {
        scope["Elm"] ? _Platform_mergeExportsDebug("Elm", scope["Elm"], exports1) : scope["Elm"] = exports1;
    }
    function _Platform_mergeExportsDebug(moduleName1, obj1, exports1) {
        for(var name1 in exports1)name1 in obj1 ? name1 == "init" ? _Debug_crash(6, moduleName1) : _Platform_mergeExportsDebug(moduleName1 + "." + name1, obj1[name1], exports1[name1]) : obj1[name1] = exports1[name1];
    }
    // HELPERS
    var _VirtualDom_divertHrefToApp;
    var _VirtualDom_doc = typeof document !== "undefined" ? document : {};
    function _VirtualDom_appendChild(parent1, child1) {
        parent1.appendChild(child1);
    }
    var _VirtualDom_init = F4(function(virtualNode1, flagDecoder1, debugMetadata1, args1) {
        // NOTE: this function needs _Platform_export available to work
        /**_UNUSED/
	var node = args['node'];
	//*/ /**/ var node1 = args1 && args1["node"] ? args1["node"] : _Debug_crash(0);
        //*/
        node1.parentNode.replaceChild(_VirtualDom_render(virtualNode1, function() {}), node1);
        return {};
    });
    // TEXT
    function _VirtualDom_text(string1) {
        return {
            $: 0,
            a: string1
        };
    }
    // NODE
    var _VirtualDom_nodeNS = F2(function(namespace1, tag3) {
        return F2(function(factList1, kidList1) {
            for(var kids1 = [], descendantsCount1 = 0; kidList1.b; kidList1 = kidList1.b){
                var kid1 = kidList1.a;
                descendantsCount1 += kid1.b || 0;
                kids1.push(kid1);
            }
            descendantsCount1 += kids1.length;
            return {
                $: 1,
                c: tag3,
                d: _VirtualDom_organizeFacts(factList1),
                e: kids1,
                f: namespace1,
                b: descendantsCount1
            };
        });
    });
    var _VirtualDom_node = _VirtualDom_nodeNS(undefined);
    // KEYED NODE
    var _VirtualDom_keyedNodeNS = F2(function(namespace1, tag3) {
        return F2(function(factList1, kidList1) {
            for(var kids1 = [], descendantsCount1 = 0; kidList1.b; kidList1 = kidList1.b){
                var kid1 = kidList1.a;
                descendantsCount1 += kid1.b.b || 0;
                kids1.push(kid1);
            }
            descendantsCount1 += kids1.length;
            return {
                $: 2,
                c: tag3,
                d: _VirtualDom_organizeFacts(factList1),
                e: kids1,
                f: namespace1,
                b: descendantsCount1
            };
        });
    });
    var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);
    // CUSTOM
    function _VirtualDom_custom(factList1, model1, render1, diff1) {
        return {
            $: 3,
            d: _VirtualDom_organizeFacts(factList1),
            g: model1,
            h: render1,
            i: diff1
        };
    }
    // MAP
    var _VirtualDom_map = F2(function(tagger1, node1) {
        return {
            $: 4,
            j: tagger1,
            k: node1,
            b: 1 + (node1.b || 0)
        };
    });
    // LAZY
    function _VirtualDom_thunk(refs1, thunk1) {
        return {
            $: 5,
            l: refs1,
            m: thunk1,
            k: undefined
        };
    }
    var _VirtualDom_lazy = F2(function(func1, a1) {
        return _VirtualDom_thunk([
            func1,
            a1
        ], function() {
            return func1(a1);
        });
    });
    var _VirtualDom_lazy2 = F3(function(func1, a1, b1) {
        return _VirtualDom_thunk([
            func1,
            a1,
            b1
        ], function() {
            return A2(func1, a1, b1);
        });
    });
    var _VirtualDom_lazy3 = F4(function(func1, a1, b1, c1) {
        return _VirtualDom_thunk([
            func1,
            a1,
            b1,
            c1
        ], function() {
            return A3(func1, a1, b1, c1);
        });
    });
    var _VirtualDom_lazy4 = F5(function(func1, a1, b1, c1, d9) {
        return _VirtualDom_thunk([
            func1,
            a1,
            b1,
            c1,
            d9
        ], function() {
            return A4(func1, a1, b1, c1, d9);
        });
    });
    var _VirtualDom_lazy5 = F6(function(func1, a1, b1, c1, d9, e1) {
        return _VirtualDom_thunk([
            func1,
            a1,
            b1,
            c1,
            d9,
            e1
        ], function() {
            return A5(func1, a1, b1, c1, d9, e1);
        });
    });
    var _VirtualDom_lazy6 = F7(function(func1, a1, b1, c1, d9, e1, f1) {
        return _VirtualDom_thunk([
            func1,
            a1,
            b1,
            c1,
            d9,
            e1,
            f1
        ], function() {
            return A6(func1, a1, b1, c1, d9, e1, f1);
        });
    });
    var _VirtualDom_lazy7 = F8(function(func1, a1, b1, c1, d9, e1, f1, g1) {
        return _VirtualDom_thunk([
            func1,
            a1,
            b1,
            c1,
            d9,
            e1,
            f1,
            g1
        ], function() {
            return A7(func1, a1, b1, c1, d9, e1, f1, g1);
        });
    });
    var _VirtualDom_lazy8 = F9(function(func1, a1, b1, c1, d9, e1, f1, g1, h1) {
        return _VirtualDom_thunk([
            func1,
            a1,
            b1,
            c1,
            d9,
            e1,
            f1,
            g1,
            h1
        ], function() {
            return A8(func1, a1, b1, c1, d9, e1, f1, g1, h1);
        });
    });
    // FACTS
    var _VirtualDom_on = F2(function(key1, handler1) {
        return {
            $: "a0",
            n: key1,
            o: handler1
        };
    });
    var _VirtualDom_style = F2(function(key1, value1) {
        return {
            $: "a1",
            n: key1,
            o: value1
        };
    });
    var _VirtualDom_property = F2(function(key1, value1) {
        return {
            $: "a2",
            n: key1,
            o: value1
        };
    });
    var _VirtualDom_attribute = F2(function(key1, value1) {
        return {
            $: "a3",
            n: key1,
            o: value1
        };
    });
    var _VirtualDom_attributeNS = F3(function(namespace1, key1, value1) {
        return {
            $: "a4",
            n: key1,
            o: {
                f: namespace1,
                o: value1
            }
        };
    });
    // XSS ATTACK VECTOR CHECKS
    //
    // For some reason, tabs can appear in href protocols and it still works.
    // So '\tjava\tSCRIPT:alert("!!!")' and 'javascript:alert("!!!")' are the same
    // in practice. That is why _VirtualDom_RE_js and _VirtualDom_RE_js_html look
    // so freaky.
    //
    // Pulling the regular expressions out to the top level gives a slight speed
    // boost in small benchmarks (4-10%) but hoisting values to reduce allocation
    // can be unpredictable in large programs where JIT may have a harder time with
    // functions are not fully self-contained. The benefit is more that the js and
    // js_html ones are so weird that I prefer to see them near each other.
    var _VirtualDom_RE_script = /^script$/i;
    var _VirtualDom_RE_on_formAction = /^(on|formAction$)/i;
    var _VirtualDom_RE_js = /^\s*j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:/i;
    var _VirtualDom_RE_js_html = /^\s*(j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:|d\s*a\s*t\s*a\s*:\s*t\s*e\s*x\s*t\s*\/\s*h\s*t\s*m\s*l\s*(,|;))/i;
    function _VirtualDom_noScript(tag3) {
        return _VirtualDom_RE_script.test(tag3) ? "p" : tag3;
    }
    function _VirtualDom_noOnOrFormAction(key1) {
        return _VirtualDom_RE_on_formAction.test(key1) ? "data-" + key1 : key1;
    }
    function _VirtualDom_noInnerHtmlOrFormAction(key1) {
        return key1 == "innerHTML" || key1 == "formAction" ? "data-" + key1 : key1;
    }
    function _VirtualDom_noJavaScriptUri(value1) {
        return _VirtualDom_RE_js.test(value1) ? /**_UNUSED/''//*/ /**/ 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")' //*/
         : value1;
    }
    function _VirtualDom_noJavaScriptOrHtmlUri(value1) {
        return _VirtualDom_RE_js_html.test(value1) ? /**_UNUSED/''//*/ /**/ 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")' //*/
         : value1;
    }
    function _VirtualDom_noJavaScriptOrHtmlJson(value1) {
        return typeof _Json_unwrap(value1) === "string" && _VirtualDom_RE_js_html.test(_Json_unwrap(value1)) ? _Json_wrap(/**_UNUSED/''//*/ /**/ 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")' //*/
        ) : value1;
    }
    // MAP FACTS
    var _VirtualDom_mapAttribute = F2(function(func1, attr1) {
        return attr1.$ === "a0" ? A2(_VirtualDom_on, attr1.n, _VirtualDom_mapHandler(func1, attr1.o)) : attr1;
    });
    function _VirtualDom_mapHandler(func1, handler1) {
        var tag3 = $elm$virtual_dom$VirtualDom$toHandlerInt(handler1);
        // 0 = Normal
        // 1 = MayStopPropagation
        // 2 = MayPreventDefault
        // 3 = Custom
        return {
            $: handler1.$,
            a: !tag3 ? A2($elm$json$Json$Decode$map, func1, handler1.a) : A3($elm$json$Json$Decode$map2, tag3 < 3 ? _VirtualDom_mapEventTuple : _VirtualDom_mapEventRecord, $elm$json$Json$Decode$succeed(func1), handler1.a)
        };
    }
    var _VirtualDom_mapEventTuple = F2(function(func1, tuple1) {
        return _Utils_Tuple2(func1(tuple1.a), tuple1.b);
    });
    var _VirtualDom_mapEventRecord = F2(function(func1, record1) {
        return {
            message: func1(record1.message),
            stopPropagation: record1.stopPropagation,
            preventDefault: record1.preventDefault
        };
    });
    // ORGANIZE FACTS
    function _VirtualDom_organizeFacts(factList1) {
        for(var facts1 = {}; factList1.b; factList1 = factList1.b){
            var entry1 = factList1.a;
            var tag3 = entry1.$;
            var key1 = entry1.n;
            var value1 = entry1.o;
            if (tag3 === "a2") {
                key1 === "className" ? _VirtualDom_addClass(facts1, key1, _Json_unwrap(value1)) : facts1[key1] = _Json_unwrap(value1);
                continue;
            }
            var subFacts1 = facts1[tag3] || (facts1[tag3] = {});
            tag3 === "a3" && key1 === "class" ? _VirtualDom_addClass(subFacts1, key1, value1) : subFacts1[key1] = value1;
        }
        return facts1;
    }
    function _VirtualDom_addClass(object1, key1, newClass1) {
        var classes1 = object1[key1];
        object1[key1] = classes1 ? classes1 + " " + newClass1 : newClass1;
    }
    // RENDER
    function _VirtualDom_render(vNode1, eventNode1) {
        var tag3 = vNode1.$;
        if (tag3 === 5) return _VirtualDom_render(vNode1.k || (vNode1.k = vNode1.m()), eventNode1);
        if (tag3 === 0) return _VirtualDom_doc.createTextNode(vNode1.a);
        if (tag3 === 4) {
            var subNode1 = vNode1.k;
            var tagger1 = vNode1.j;
            while(subNode1.$ === 4){
                typeof tagger1 !== "object" ? tagger1 = [
                    tagger1,
                    subNode1.j
                ] : tagger1.push(subNode1.j);
                subNode1 = subNode1.k;
            }
            var subEventRoot1 = {
                j: tagger1,
                p: eventNode1
            };
            var domNode1 = _VirtualDom_render(subNode1, subEventRoot1);
            domNode1.elm_event_node_ref = subEventRoot1;
            return domNode1;
        }
        if (tag3 === 3) {
            var domNode1 = vNode1.h(vNode1.g);
            _VirtualDom_applyFacts(domNode1, eventNode1, vNode1.d);
            return domNode1;
        }
        // at this point `tag` must be 1 or 2
        var domNode1 = vNode1.f ? _VirtualDom_doc.createElementNS(vNode1.f, vNode1.c) : _VirtualDom_doc.createElement(vNode1.c);
        if (_VirtualDom_divertHrefToApp && vNode1.c == "a") domNode1.addEventListener("click", _VirtualDom_divertHrefToApp(domNode1));
        _VirtualDom_applyFacts(domNode1, eventNode1, vNode1.d);
        for(var kids1 = vNode1.e, i1 = 0; i1 < kids1.length; i1++)_VirtualDom_appendChild(domNode1, _VirtualDom_render(tag3 === 1 ? kids1[i1] : kids1[i1].b, eventNode1));
        return domNode1;
    }
    // APPLY FACTS
    function _VirtualDom_applyFacts(domNode1, eventNode1, facts1) {
        for(var key1 in facts1){
            var value1 = facts1[key1];
            key1 === "a1" ? _VirtualDom_applyStyles(domNode1, value1) : key1 === "a0" ? _VirtualDom_applyEvents(domNode1, eventNode1, value1) : key1 === "a3" ? _VirtualDom_applyAttrs(domNode1, value1) : key1 === "a4" ? _VirtualDom_applyAttrsNS(domNode1, value1) : (key1 !== "value" && key1 !== "checked" || domNode1[key1] !== value1) && (domNode1[key1] = value1);
        }
    }
    // APPLY STYLES
    function _VirtualDom_applyStyles(domNode1, styles1) {
        var domNodeStyle1 = domNode1.style;
        for(var key1 in styles1)domNodeStyle1[key1] = styles1[key1];
    }
    // APPLY ATTRS
    function _VirtualDom_applyAttrs(domNode1, attrs1) {
        for(var key1 in attrs1){
            var value1 = attrs1[key1];
            typeof value1 !== "undefined" ? domNode1.setAttribute(key1, value1) : domNode1.removeAttribute(key1);
        }
    }
    // APPLY NAMESPACED ATTRS
    function _VirtualDom_applyAttrsNS(domNode1, nsAttrs1) {
        for(var key1 in nsAttrs1){
            var pair1 = nsAttrs1[key1];
            var namespace1 = pair1.f;
            var value1 = pair1.o;
            typeof value1 !== "undefined" ? domNode1.setAttributeNS(namespace1, key1, value1) : domNode1.removeAttributeNS(namespace1, key1);
        }
    }
    // APPLY EVENTS
    function _VirtualDom_applyEvents(domNode1, eventNode1, events1) {
        var allCallbacks1 = domNode1.elmFs || (domNode1.elmFs = {});
        for(var key1 in events1){
            var newHandler1 = events1[key1];
            var oldCallback1 = allCallbacks1[key1];
            if (!newHandler1) {
                domNode1.removeEventListener(key1, oldCallback1);
                allCallbacks1[key1] = undefined;
                continue;
            }
            if (oldCallback1) {
                var oldHandler1 = oldCallback1.q;
                if (oldHandler1.$ === newHandler1.$) {
                    oldCallback1.q = newHandler1;
                    continue;
                }
                domNode1.removeEventListener(key1, oldCallback1);
            }
            oldCallback1 = _VirtualDom_makeCallback(eventNode1, newHandler1);
            domNode1.addEventListener(key1, oldCallback1, _VirtualDom_passiveSupported && {
                passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler1) < 2
            });
            allCallbacks1[key1] = oldCallback1;
        }
    }
    // PASSIVE EVENTS
    var _VirtualDom_passiveSupported;
    try {
        window.addEventListener("t", null, Object.defineProperty({}, "passive", {
            get: function() {
                _VirtualDom_passiveSupported = true;
            }
        }));
    } catch (e) {}
    // EVENT HANDLERS
    function _VirtualDom_makeCallback(eventNode1, initialHandler1) {
        function callback1(event1) {
            var handler1 = callback1.q;
            var result1 = _Json_runHelp(handler1.a, event1);
            if (!$elm$core$Result$isOk(result1)) return;
            var tag3 = $elm$virtual_dom$VirtualDom$toHandlerInt(handler1);
            // 0 = Normal
            // 1 = MayStopPropagation
            // 2 = MayPreventDefault
            // 3 = Custom
            var value1 = result1.a;
            var message1 = !tag3 ? value1 : tag3 < 3 ? value1.a : value1.message;
            var stopPropagation1 = tag3 == 1 ? value1.b : tag3 == 3 && value1.stopPropagation;
            var currentEventNode1 = (stopPropagation1 && event1.stopPropagation(), (tag3 == 2 ? value1.b : tag3 == 3 && value1.preventDefault) && event1.preventDefault(), eventNode1);
            var tagger1;
            var i1;
            while(tagger1 = currentEventNode1.j){
                if (typeof tagger1 == "function") message1 = tagger1(message1);
                else for(var i1 = tagger1.length; i1--;)message1 = tagger1[i1](message1);
                currentEventNode1 = currentEventNode1.p;
            }
            currentEventNode1(message1, stopPropagation1); // stopPropagation implies isSync
        }
        callback1.q = initialHandler1;
        return callback1;
    }
    function _VirtualDom_equalEvents(x1, y1) {
        return x1.$ == y1.$ && _Json_equality(x1.a, y1.a);
    }
    // DIFF
    // TODO: Should we do patches like in iOS?
    //
    // type Patch
    //   = At Int Patch
    //   | Batch (List Patch)
    //   | Change ...
    //
    // How could it not be better?
    //
    function _VirtualDom_diff(x1, y1) {
        var patches1 = [];
        _VirtualDom_diffHelp(x1, y1, patches1, 0);
        return patches1;
    }
    function _VirtualDom_pushPatch(patches1, type1, index1, data1) {
        var patch1 = {
            $: type1,
            r: index1,
            s: data1,
            t: undefined,
            u: undefined
        };
        patches1.push(patch1);
        return patch1;
    }
    function _VirtualDom_diffHelp(x1, y1, patches1, index1) {
        if (x1 === y1) return;
        var xType1 = x1.$;
        var yType1 = y1.$;
        // Bail if you run into different types of nodes. Implies that the
        // structure has changed significantly and it's not worth a diff.
        if (xType1 !== yType1) {
            if (xType1 === 1 && yType1 === 2) {
                y1 = _VirtualDom_dekey(y1);
                yType1 = 1;
            } else {
                _VirtualDom_pushPatch(patches1, 0, index1, y1);
                return;
            }
        }
        // Now we know that both nodes are the same $.
        switch(yType1){
            case 5:
                var xRefs1 = x1.l;
                var yRefs1 = y1.l;
                var i1 = xRefs1.length;
                var same1 = i1 === yRefs1.length;
                while(same1 && i1--)same1 = xRefs1[i1] === yRefs1[i1];
                if (same1) {
                    y1.k = x1.k;
                    return;
                }
                y1.k = y1.m();
                var subPatches1 = [];
                _VirtualDom_diffHelp(x1.k, y1.k, subPatches1, 0);
                subPatches1.length > 0 && _VirtualDom_pushPatch(patches1, 1, index1, subPatches1);
                return;
            case 4:
                // gather nested taggers
                var xTaggers1 = x1.j;
                var yTaggers1 = y1.j;
                var nesting1 = false;
                var xSubNode1 = x1.k;
                while(xSubNode1.$ === 4){
                    nesting1 = true;
                    typeof xTaggers1 !== "object" ? xTaggers1 = [
                        xTaggers1,
                        xSubNode1.j
                    ] : xTaggers1.push(xSubNode1.j);
                    xSubNode1 = xSubNode1.k;
                }
                var ySubNode1 = y1.k;
                while(ySubNode1.$ === 4){
                    nesting1 = true;
                    typeof yTaggers1 !== "object" ? yTaggers1 = [
                        yTaggers1,
                        ySubNode1.j
                    ] : yTaggers1.push(ySubNode1.j);
                    ySubNode1 = ySubNode1.k;
                }
                // Just bail if different numbers of taggers. This implies the
                // structure of the virtual DOM has changed.
                if (nesting1 && xTaggers1.length !== yTaggers1.length) {
                    _VirtualDom_pushPatch(patches1, 0, index1, y1);
                    return;
                }
                // check if taggers are "the same"
                if (nesting1 ? !_VirtualDom_pairwiseRefEqual(xTaggers1, yTaggers1) : xTaggers1 !== yTaggers1) _VirtualDom_pushPatch(patches1, 2, index1, yTaggers1);
                // diff everything below the taggers
                _VirtualDom_diffHelp(xSubNode1, ySubNode1, patches1, index1 + 1);
                return;
            case 0:
                if (x1.a !== y1.a) _VirtualDom_pushPatch(patches1, 3, index1, y1.a);
                return;
            case 1:
                _VirtualDom_diffNodes(x1, y1, patches1, index1, _VirtualDom_diffKids);
                return;
            case 2:
                _VirtualDom_diffNodes(x1, y1, patches1, index1, _VirtualDom_diffKeyedKids);
                return;
            case 3:
                if (x1.h !== y1.h) {
                    _VirtualDom_pushPatch(patches1, 0, index1, y1);
                    return;
                }
                var factsDiff1 = _VirtualDom_diffFacts(x1.d, y1.d);
                factsDiff1 && _VirtualDom_pushPatch(patches1, 4, index1, factsDiff1);
                var patch1 = y1.i(x1.g, y1.g);
                patch1 && _VirtualDom_pushPatch(patches1, 5, index1, patch1);
                return;
        }
    }
    // assumes the incoming arrays are the same length
    function _VirtualDom_pairwiseRefEqual(as1, bs1) {
        for(var i1 = 0; i1 < as1.length; i1++){
            if (as1[i1] !== bs1[i1]) return false;
        }
        return true;
    }
    function _VirtualDom_diffNodes(x1, y1, patches1, index1, diffKids1) {
        // Bail if obvious indicators have changed. Implies more serious
        // structural changes such that it's not worth it to diff.
        if (x1.c !== y1.c || x1.f !== y1.f) {
            _VirtualDom_pushPatch(patches1, 0, index1, y1);
            return;
        }
        var factsDiff1 = _VirtualDom_diffFacts(x1.d, y1.d);
        factsDiff1 && _VirtualDom_pushPatch(patches1, 4, index1, factsDiff1);
        diffKids1(x1, y1, patches1, index1);
    }
    // DIFF FACTS
    // TODO Instead of creating a new diff object, it's possible to just test if
    // there *is* a diff. During the actual patch, do the diff again and make the
    // modifications directly. This way, there's no new allocations. Worth it?
    function _VirtualDom_diffFacts(x1, y1, category1) {
        var diff1;
        // look for changes and removals
        for(var xKey1 in x1){
            if (xKey1 === "a1" || xKey1 === "a0" || xKey1 === "a3" || xKey1 === "a4") {
                var subDiff1 = _VirtualDom_diffFacts(x1[xKey1], y1[xKey1] || {}, xKey1);
                if (subDiff1) {
                    diff1 = diff1 || {};
                    diff1[xKey1] = subDiff1;
                }
                continue;
            }
            // remove if not in the new facts
            if (!(xKey1 in y1)) {
                diff1 = diff1 || {};
                diff1[xKey1] = !category1 ? typeof x1[xKey1] === "string" ? "" : null : category1 === "a1" ? "" : category1 === "a0" || category1 === "a3" ? undefined : {
                    f: x1[xKey1].f,
                    o: undefined
                };
                continue;
            }
            var xValue1 = x1[xKey1];
            var yValue1 = y1[xKey1];
            // reference equal, so don't worry about it
            if (xValue1 === yValue1 && xKey1 !== "value" && xKey1 !== "checked" || category1 === "a0" && _VirtualDom_equalEvents(xValue1, yValue1)) continue;
            diff1 = diff1 || {};
            diff1[xKey1] = yValue1;
        }
        // add new stuff
        for(var yKey1 in y1)if (!(yKey1 in x1)) {
            diff1 = diff1 || {};
            diff1[yKey1] = y1[yKey1];
        }
        return diff1;
    }
    // DIFF KIDS
    function _VirtualDom_diffKids(xParent1, yParent1, patches1, index1) {
        var xKids1 = xParent1.e;
        var yKids1 = yParent1.e;
        var xLen1 = xKids1.length;
        var yLen1 = yKids1.length;
        // FIGURE OUT IF THERE ARE INSERTS OR REMOVALS
        if (xLen1 > yLen1) _VirtualDom_pushPatch(patches1, 6, index1, {
            v: yLen1,
            i: xLen1 - yLen1
        });
        else if (xLen1 < yLen1) _VirtualDom_pushPatch(patches1, 7, index1, {
            v: xLen1,
            e: yKids1
        });
        // PAIRWISE DIFF EVERYTHING ELSE
        for(var minLen1 = xLen1 < yLen1 ? xLen1 : yLen1, i1 = 0; i1 < minLen1; i1++){
            var xKid1 = xKids1[i1];
            _VirtualDom_diffHelp(xKid1, yKids1[i1], patches1, ++index1);
            index1 += xKid1.b || 0;
        }
    }
    // KEYED DIFF
    function _VirtualDom_diffKeyedKids(xParent1, yParent1, patches1, rootIndex1) {
        var localPatches1 = [];
        var changes1 = {}; // Dict String Entry
        var inserts1 = []; // Array { index : Int, entry : Entry }
        // type Entry = { tag : String, vnode : VNode, index : Int, data : _ }
        var xKids1 = xParent1.e;
        var yKids1 = yParent1.e;
        var xLen1 = xKids1.length;
        var yLen1 = yKids1.length;
        var xIndex1 = 0;
        var yIndex1 = 0;
        var index1 = rootIndex1;
        while(xIndex1 < xLen1 && yIndex1 < yLen1){
            var x1 = xKids1[xIndex1];
            var y1 = yKids1[yIndex1];
            var xKey1 = x1.a;
            var yKey1 = y1.a;
            var xNode1 = x1.b;
            var yNode1 = y1.b;
            var newMatch1 = undefined;
            var oldMatch1 = undefined;
            // check if keys match
            if (xKey1 === yKey1) {
                index1++;
                _VirtualDom_diffHelp(xNode1, yNode1, localPatches1, index1);
                index1 += xNode1.b || 0;
                xIndex1++;
                yIndex1++;
                continue;
            }
            // look ahead 1 to detect insertions and removals.
            var xNext1 = xKids1[xIndex1 + 1];
            var yNext1 = yKids1[yIndex1 + 1];
            if (xNext1) {
                var xNextKey1 = xNext1.a;
                var xNextNode1 = xNext1.b;
                oldMatch1 = yKey1 === xNextKey1;
            }
            if (yNext1) {
                var yNextKey1 = yNext1.a;
                var yNextNode1 = yNext1.b;
                newMatch1 = xKey1 === yNextKey1;
            }
            // swap x and y
            if (newMatch1 && oldMatch1) {
                index1++;
                _VirtualDom_diffHelp(xNode1, yNextNode1, localPatches1, index1);
                _VirtualDom_insertNode(changes1, localPatches1, xKey1, yNode1, yIndex1, inserts1);
                index1 += xNode1.b || 0;
                index1++;
                _VirtualDom_removeNode(changes1, localPatches1, xKey1, xNextNode1, index1);
                index1 += xNextNode1.b || 0;
                xIndex1 += 2;
                yIndex1 += 2;
                continue;
            }
            // insert y
            if (newMatch1) {
                index1++;
                _VirtualDom_insertNode(changes1, localPatches1, yKey1, yNode1, yIndex1, inserts1);
                _VirtualDom_diffHelp(xNode1, yNextNode1, localPatches1, index1);
                index1 += xNode1.b || 0;
                xIndex1 += 1;
                yIndex1 += 2;
                continue;
            }
            // remove x
            if (oldMatch1) {
                index1++;
                _VirtualDom_removeNode(changes1, localPatches1, xKey1, xNode1, index1);
                index1 += xNode1.b || 0;
                index1++;
                _VirtualDom_diffHelp(xNextNode1, yNode1, localPatches1, index1);
                index1 += xNextNode1.b || 0;
                xIndex1 += 2;
                yIndex1 += 1;
                continue;
            }
            // remove x, insert y
            if (xNext1 && xNextKey1 === yNextKey1) {
                index1++;
                _VirtualDom_removeNode(changes1, localPatches1, xKey1, xNode1, index1);
                _VirtualDom_insertNode(changes1, localPatches1, yKey1, yNode1, yIndex1, inserts1);
                index1 += xNode1.b || 0;
                index1++;
                _VirtualDom_diffHelp(xNextNode1, yNextNode1, localPatches1, index1);
                index1 += xNextNode1.b || 0;
                xIndex1 += 2;
                yIndex1 += 2;
                continue;
            }
            break;
        }
        // eat up any remaining nodes with removeNode and insertNode
        while(xIndex1 < xLen1){
            index1++;
            var x1 = xKids1[xIndex1];
            var xNode1 = x1.b;
            _VirtualDom_removeNode(changes1, localPatches1, x1.a, xNode1, index1);
            index1 += xNode1.b || 0;
            xIndex1++;
        }
        while(yIndex1 < yLen1){
            var endInserts1 = endInserts1 || [];
            var y1 = yKids1[yIndex1];
            _VirtualDom_insertNode(changes1, localPatches1, y1.a, y1.b, undefined, endInserts1);
            yIndex1++;
        }
        if (localPatches1.length > 0 || inserts1.length > 0 || endInserts1) _VirtualDom_pushPatch(patches1, 8, rootIndex1, {
            w: localPatches1,
            x: inserts1,
            y: endInserts1
        });
    }
    // CHANGES FROM KEYED DIFF
    var _VirtualDom_POSTFIX = "_elmW6BL";
    function _VirtualDom_insertNode(changes1, localPatches1, key1, vnode1, yIndex1, inserts1) {
        var entry1 = changes1[key1];
        // never seen this key before
        if (!entry1) {
            entry1 = {
                c: 0,
                z: vnode1,
                r: yIndex1,
                s: undefined
            };
            inserts1.push({
                r: yIndex1,
                A: entry1
            });
            changes1[key1] = entry1;
            return;
        }
        // this key was removed earlier, a match!
        if (entry1.c === 1) {
            inserts1.push({
                r: yIndex1,
                A: entry1
            });
            entry1.c = 2;
            var subPatches1 = [];
            _VirtualDom_diffHelp(entry1.z, vnode1, subPatches1, entry1.r);
            entry1.r = yIndex1;
            entry1.s.s = {
                w: subPatches1,
                A: entry1
            };
            return;
        }
        // this key has already been inserted or moved, a duplicate!
        _VirtualDom_insertNode(changes1, localPatches1, key1 + _VirtualDom_POSTFIX, vnode1, yIndex1, inserts1);
    }
    function _VirtualDom_removeNode(changes1, localPatches1, key1, vnode1, index1) {
        var entry1 = changes1[key1];
        // never seen this key before
        if (!entry1) {
            var patch1 = _VirtualDom_pushPatch(localPatches1, 9, index1, undefined);
            changes1[key1] = {
                c: 1,
                z: vnode1,
                r: index1,
                s: patch1
            };
            return;
        }
        // this key was inserted earlier, a match!
        if (entry1.c === 0) {
            entry1.c = 2;
            var subPatches1 = [];
            _VirtualDom_diffHelp(vnode1, entry1.z, subPatches1, index1);
            _VirtualDom_pushPatch(localPatches1, 9, index1, {
                w: subPatches1,
                A: entry1
            });
            return;
        }
        // this key has already been removed or moved, a duplicate!
        _VirtualDom_removeNode(changes1, localPatches1, key1 + _VirtualDom_POSTFIX, vnode1, index1);
    }
    // ADD DOM NODES
    //
    // Each DOM node has an "index" assigned in order of traversal. It is important
    // to minimize our crawl over the actual DOM, so these indexes (along with the
    // descendantsCount of virtual nodes) let us skip touching entire subtrees of
    // the DOM if we know there are no patches there.
    function _VirtualDom_addDomNodes(domNode1, vNode1, patches1, eventNode1) {
        _VirtualDom_addDomNodesHelp(domNode1, vNode1, patches1, 0, 0, vNode1.b, eventNode1);
    }
    // assumes `patches` is non-empty and indexes increase monotonically.
    function _VirtualDom_addDomNodesHelp(domNode1, vNode1, patches1, i1, low1, high1, eventNode1) {
        var patch1 = patches1[i1];
        var index1 = patch1.r;
        while(index1 === low1){
            var patchType1 = patch1.$;
            if (patchType1 === 1) _VirtualDom_addDomNodes(domNode1, vNode1.k, patch1.s, eventNode1);
            else if (patchType1 === 8) {
                patch1.t = domNode1;
                patch1.u = eventNode1;
                var subPatches1 = patch1.s.w;
                if (subPatches1.length > 0) _VirtualDom_addDomNodesHelp(domNode1, vNode1, subPatches1, 0, low1, high1, eventNode1);
            } else if (patchType1 === 9) {
                patch1.t = domNode1;
                patch1.u = eventNode1;
                var data1 = patch1.s;
                if (data1) {
                    data1.A.s = domNode1;
                    var subPatches1 = data1.w;
                    if (subPatches1.length > 0) _VirtualDom_addDomNodesHelp(domNode1, vNode1, subPatches1, 0, low1, high1, eventNode1);
                }
            } else {
                patch1.t = domNode1;
                patch1.u = eventNode1;
            }
            i1++;
            if (!(patch1 = patches1[i1]) || (index1 = patch1.r) > high1) return i1;
        }
        var tag3 = vNode1.$;
        if (tag3 === 4) {
            var subNode1 = vNode1.k;
            while(subNode1.$ === 4)subNode1 = subNode1.k;
            return _VirtualDom_addDomNodesHelp(domNode1, subNode1, patches1, i1, low1 + 1, high1, domNode1.elm_event_node_ref);
        }
        // tag must be 1 or 2 at this point
        var vKids1 = vNode1.e;
        var childNodes1 = domNode1.childNodes;
        for(var j1 = 0; j1 < vKids1.length; j1++){
            low1++;
            var vKid1 = tag3 === 1 ? vKids1[j1] : vKids1[j1].b;
            var nextLow1 = low1 + (vKid1.b || 0);
            if (low1 <= index1 && index1 <= nextLow1) {
                i1 = _VirtualDom_addDomNodesHelp(childNodes1[j1], vKid1, patches1, i1, low1, nextLow1, eventNode1);
                if (!(patch1 = patches1[i1]) || (index1 = patch1.r) > high1) return i1;
            }
            low1 = nextLow1;
        }
        return i1;
    }
    // APPLY PATCHES
    function _VirtualDom_applyPatches(rootDomNode1, oldVirtualNode1, patches1, eventNode1) {
        if (patches1.length === 0) return rootDomNode1;
        _VirtualDom_addDomNodes(rootDomNode1, oldVirtualNode1, patches1, eventNode1);
        return _VirtualDom_applyPatchesHelp(rootDomNode1, patches1);
    }
    function _VirtualDom_applyPatchesHelp(rootDomNode1, patches1) {
        for(var i1 = 0; i1 < patches1.length; i1++){
            var patch1 = patches1[i1];
            var localDomNode1 = patch1.t;
            var newNode1 = _VirtualDom_applyPatch(localDomNode1, patch1);
            if (localDomNode1 === rootDomNode1) rootDomNode1 = newNode1;
        }
        return rootDomNode1;
    }
    function _VirtualDom_applyPatch(domNode1, patch1) {
        switch(patch1.$){
            case 0:
                return _VirtualDom_applyPatchRedraw(domNode1, patch1.s, patch1.u);
            case 4:
                _VirtualDom_applyFacts(domNode1, patch1.u, patch1.s);
                return domNode1;
            case 3:
                domNode1.replaceData(0, domNode1.length, patch1.s);
                return domNode1;
            case 1:
                return _VirtualDom_applyPatchesHelp(domNode1, patch1.s);
            case 2:
                if (domNode1.elm_event_node_ref) domNode1.elm_event_node_ref.j = patch1.s;
                else domNode1.elm_event_node_ref = {
                    j: patch1.s,
                    p: patch1.u
                };
                return domNode1;
            case 6:
                var data1 = patch1.s;
                for(var i1 = 0; i1 < data1.i; i1++)domNode1.removeChild(domNode1.childNodes[data1.v]);
                return domNode1;
            case 7:
                var data1 = patch1.s;
                var kids1 = data1.e;
                var i1 = data1.v;
                var theEnd1 = domNode1.childNodes[i1];
                for(; i1 < kids1.length; i1++)domNode1.insertBefore(_VirtualDom_render(kids1[i1], patch1.u), theEnd1);
                return domNode1;
            case 9:
                var data1 = patch1.s;
                if (!data1) {
                    domNode1.parentNode.removeChild(domNode1);
                    return domNode1;
                }
                var entry1 = data1.A;
                if (typeof entry1.r !== "undefined") domNode1.parentNode.removeChild(domNode1);
                entry1.s = _VirtualDom_applyPatchesHelp(domNode1, data1.w);
                return domNode1;
            case 8:
                return _VirtualDom_applyPatchReorder(domNode1, patch1);
            case 5:
                return patch1.s(domNode1);
            default:
                _Debug_crash(10); // 'Ran into an unknown patch!'
        }
    }
    function _VirtualDom_applyPatchRedraw(domNode1, vNode1, eventNode1) {
        var parentNode1 = domNode1.parentNode;
        var newNode1 = _VirtualDom_render(vNode1, eventNode1);
        if (!newNode1.elm_event_node_ref) newNode1.elm_event_node_ref = domNode1.elm_event_node_ref;
        if (parentNode1 && newNode1 !== domNode1) parentNode1.replaceChild(newNode1, domNode1);
        return newNode1;
    }
    function _VirtualDom_applyPatchReorder(domNode1, patch1) {
        var data1 = patch1.s;
        // remove end inserts
        var frag1 = _VirtualDom_applyPatchReorderEndInsertsHelp(data1.y, patch1);
        // removals
        domNode1 = _VirtualDom_applyPatchesHelp(domNode1, data1.w);
        // inserts
        var inserts1 = data1.x;
        for(var i1 = 0; i1 < inserts1.length; i1++){
            var insert1 = inserts1[i1];
            var entry1 = insert1.A;
            var node1 = entry1.c === 2 ? entry1.s : _VirtualDom_render(entry1.z, patch1.u);
            domNode1.insertBefore(node1, domNode1.childNodes[insert1.r]);
        }
        // add end inserts
        if (frag1) _VirtualDom_appendChild(domNode1, frag1);
        return domNode1;
    }
    function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts1, patch1) {
        if (!endInserts1) return;
        var frag1 = _VirtualDom_doc.createDocumentFragment();
        for(var i1 = 0; i1 < endInserts1.length; i1++){
            var insert1 = endInserts1[i1];
            var entry1 = insert1.A;
            _VirtualDom_appendChild(frag1, entry1.c === 2 ? entry1.s : _VirtualDom_render(entry1.z, patch1.u));
        }
        return frag1;
    }
    function _VirtualDom_virtualize(node1) {
        // TEXT NODES
        if (node1.nodeType === 3) return _VirtualDom_text(node1.textContent);
        // WEIRD NODES
        if (node1.nodeType !== 1) return _VirtualDom_text("");
        // ELEMENT NODES
        var attrList1 = _List_Nil;
        var attrs1 = node1.attributes;
        for(var i1 = attrs1.length; i1--;){
            var attr1 = attrs1[i1];
            var name1 = attr1.name;
            var value1 = attr1.value;
            attrList1 = _List_Cons(A2(_VirtualDom_attribute, name1, value1), attrList1);
        }
        var tag3 = node1.tagName.toLowerCase();
        var kidList1 = _List_Nil;
        var kids1 = node1.childNodes;
        for(var i1 = kids1.length; i1--;)kidList1 = _List_Cons(_VirtualDom_virtualize(kids1[i1]), kidList1);
        return A3(_VirtualDom_node, tag3, attrList1, kidList1);
    }
    function _VirtualDom_dekey(keyedNode1) {
        var keyedKids1 = keyedNode1.e;
        var len1 = keyedKids1.length;
        var kids1 = new Array(len1);
        for(var i1 = 0; i1 < len1; i1++)kids1[i1] = keyedKids1[i1].b;
        return {
            $: 1,
            c: keyedNode1.c,
            d: keyedNode1.d,
            e: kids1,
            f: keyedNode1.f,
            b: keyedNode1.b
        };
    }
    var _Bitwise_and = F2(function(a1, b1) {
        return a1 & b1;
    });
    var _Bitwise_or = F2(function(a1, b1) {
        return a1 | b1;
    });
    var _Bitwise_xor = F2(function(a1, b1) {
        return a1 ^ b1;
    });
    function _Bitwise_complement(a1) {
        return ~a1;
    }
    var _Bitwise_shiftLeftBy = F2(function(offset1, a1) {
        return a1 << offset1;
    });
    var _Bitwise_shiftRightBy = F2(function(offset1, a1) {
        return a1 >> offset1;
    });
    var _Bitwise_shiftRightZfBy = F2(function(offset1, a1) {
        return a1 >>> offset1;
    });
    // HELPERS
    function _Debugger_unsafeCoerce(value1) {
        return value1;
    }
    // PROGRAMS
    var _Debugger_element = F4(function(impl1, flagDecoder1, debugMetadata1, args1) {
        return _Platform_initialize(flagDecoder1, args1, A3($elm$browser$Debugger$Main$wrapInit, _Json_wrap(debugMetadata1), _Debugger_popout(), impl1.init), $elm$browser$Debugger$Main$wrapUpdate(impl1.update), $elm$browser$Debugger$Main$wrapSubs(impl1.subscriptions), function(sendToApp1, initialModel1) {
            var view1 = impl1.view;
            var title1 = _VirtualDom_doc.title;
            var domNode1 = args1 && args1["node"] ? args1["node"] : _Debug_crash(0);
            var currNode1 = _VirtualDom_virtualize(domNode1);
            var currBlocker1 = $elm$browser$Debugger$Main$toBlockerType(initialModel1);
            var currPopout1;
            var cornerNode1 = _VirtualDom_doc.createElement("div");
            domNode1.parentNode.insertBefore(cornerNode1, domNode1.nextSibling);
            var cornerCurr1 = _VirtualDom_virtualize(cornerNode1);
            initialModel1.popout.a = sendToApp1;
            return _Browser_makeAnimator(initialModel1, function(model1) {
                var nextNode1 = A2(_VirtualDom_map, $elm$browser$Debugger$Main$UserMsg, view1($elm$browser$Debugger$Main$getUserModel(model1)));
                var patches1 = _VirtualDom_diff(currNode1, nextNode1);
                domNode1 = _VirtualDom_applyPatches(domNode1, currNode1, patches1, sendToApp1);
                currNode1 = nextNode1;
                // update blocker
                var nextBlocker1 = $elm$browser$Debugger$Main$toBlockerType(model1);
                _Debugger_updateBlocker(currBlocker1, nextBlocker1);
                currBlocker1 = nextBlocker1;
                // view corner
                var cornerNext1 = $elm$browser$Debugger$Main$cornerView(model1);
                var cornerPatches1 = _VirtualDom_diff(cornerCurr1, cornerNext1);
                cornerNode1 = _VirtualDom_applyPatches(cornerNode1, cornerCurr1, cornerPatches1, sendToApp1);
                cornerCurr1 = cornerNext1;
                if (!model1.popout.b) {
                    currPopout1 = undefined;
                    return;
                }
                // view popout
                _VirtualDom_doc = model1.popout.b; // SWITCH TO POPOUT DOC
                currPopout1 || (currPopout1 = _VirtualDom_virtualize(model1.popout.b));
                var nextPopout1 = $elm$browser$Debugger$Main$popoutView(model1);
                var popoutPatches1 = _VirtualDom_diff(currPopout1, nextPopout1);
                _VirtualDom_applyPatches(model1.popout.b.body, currPopout1, popoutPatches1, sendToApp1);
                currPopout1 = nextPopout1;
                _VirtualDom_doc = document; // SWITCH BACK TO NORMAL DOC
            });
        });
    });
    var _Debugger_document = F4(function(impl1, flagDecoder1, debugMetadata1, args1) {
        return _Platform_initialize(flagDecoder1, args1, A3($elm$browser$Debugger$Main$wrapInit, _Json_wrap(debugMetadata1), _Debugger_popout(), impl1.init), $elm$browser$Debugger$Main$wrapUpdate(impl1.update), $elm$browser$Debugger$Main$wrapSubs(impl1.subscriptions), function(sendToApp1, initialModel1) {
            var divertHrefToApp1 = impl1.setup && impl1.setup(function(x1) {
                return sendToApp1($elm$browser$Debugger$Main$UserMsg(x1));
            });
            var view1 = impl1.view;
            var title1 = _VirtualDom_doc.title;
            var bodyNode1 = _VirtualDom_doc.body;
            var currNode1 = _VirtualDom_virtualize(bodyNode1);
            var currBlocker1 = $elm$browser$Debugger$Main$toBlockerType(initialModel1);
            var currPopout1;
            initialModel1.popout.a = sendToApp1;
            return _Browser_makeAnimator(initialModel1, function(model1) {
                _VirtualDom_divertHrefToApp = divertHrefToApp1;
                var doc1 = view1($elm$browser$Debugger$Main$getUserModel(model1));
                var nextNode1 = _VirtualDom_node("body")(_List_Nil)(_Utils_ap(A2($elm$core$List$map, _VirtualDom_map($elm$browser$Debugger$Main$UserMsg), doc1.body), _List_Cons($elm$browser$Debugger$Main$cornerView(model1), _List_Nil)));
                var patches1 = _VirtualDom_diff(currNode1, nextNode1);
                bodyNode1 = _VirtualDom_applyPatches(bodyNode1, currNode1, patches1, sendToApp1);
                currNode1 = nextNode1;
                _VirtualDom_divertHrefToApp = 0;
                title1 !== doc1.title && (_VirtualDom_doc.title = title1 = doc1.title);
                // update blocker
                var nextBlocker1 = $elm$browser$Debugger$Main$toBlockerType(model1);
                _Debugger_updateBlocker(currBlocker1, nextBlocker1);
                currBlocker1 = nextBlocker1;
                // view popout
                if (!model1.popout.b) {
                    currPopout1 = undefined;
                    return;
                }
                _VirtualDom_doc = model1.popout.b; // SWITCH TO POPOUT DOC
                currPopout1 || (currPopout1 = _VirtualDom_virtualize(model1.popout.b));
                var nextPopout1 = $elm$browser$Debugger$Main$popoutView(model1);
                var popoutPatches1 = _VirtualDom_diff(currPopout1, nextPopout1);
                _VirtualDom_applyPatches(model1.popout.b.body, currPopout1, popoutPatches1, sendToApp1);
                currPopout1 = nextPopout1;
                _VirtualDom_doc = document; // SWITCH BACK TO NORMAL DOC
            });
        });
    });
    function _Debugger_popout() {
        return {
            b: undefined,
            a: undefined
        };
    }
    function _Debugger_isOpen(popout1) {
        return !!popout1.b;
    }
    function _Debugger_open(popout1) {
        return _Scheduler_binding(function(callback1) {
            _Debugger_openWindow(popout1);
            callback1(_Scheduler_succeed(_Utils_Tuple0));
        });
    }
    function _Debugger_openWindow(popout1) {
        var w1 = $elm$browser$Debugger$Main$initialWindowWidth, h1 = $elm$browser$Debugger$Main$initialWindowHeight, x1 = screen.width - w1, y1 = screen.height - h1;
        var debuggerWindow1 = window.open("", "", "width=" + w1 + ",height=" + h1 + ",left=" + x1 + ",top=" + y1);
        var doc1 = debuggerWindow1.document;
        doc1.title = "Elm Debugger";
        // handle arrow keys
        doc1.addEventListener("keydown", function(event1) {
            event1.metaKey && event1.which === 82 && window.location.reload();
            event1.key === "ArrowUp" && (popout1.a($elm$browser$Debugger$Main$Up), event1.preventDefault());
            event1.key === "ArrowDown" && (popout1.a($elm$browser$Debugger$Main$Down), event1.preventDefault());
        });
        // handle window close
        window.addEventListener("unload", close1);
        debuggerWindow1.addEventListener("unload", function() {
            popout1.b = undefined;
            popout1.a($elm$browser$Debugger$Main$NoOp);
            window.removeEventListener("unload", close1);
        });
        function close1() {
            popout1.b = undefined;
            popout1.a($elm$browser$Debugger$Main$NoOp);
            debuggerWindow1.close();
        }
        // register new window
        popout1.b = doc1;
    }
    // SCROLL
    function _Debugger_scroll(popout1) {
        return _Scheduler_binding(function(callback1) {
            if (popout1.b) {
                var msgs1 = popout1.b.getElementById("elm-debugger-sidebar");
                if (msgs1 && msgs1.scrollTop !== 0) msgs1.scrollTop = 0;
            }
            callback1(_Scheduler_succeed(_Utils_Tuple0));
        });
    }
    var _Debugger_scrollTo = F2(function(id1, popout1) {
        return _Scheduler_binding(function(callback1) {
            if (popout1.b) {
                var msg1 = popout1.b.getElementById(id1);
                if (msg1) msg1.scrollIntoView(false);
            }
            callback1(_Scheduler_succeed(_Utils_Tuple0));
        });
    });
    // UPLOAD
    function _Debugger_upload(popout1) {
        return _Scheduler_binding(function(callback1) {
            var doc1 = popout1.b || document;
            var element1 = doc1.createElement("input");
            element1.setAttribute("type", "file");
            element1.setAttribute("accept", "text/json");
            element1.style.display = "none";
            element1.addEventListener("change", function(event1) {
                var fileReader1 = new FileReader();
                fileReader1.onload = function(e1) {
                    callback1(_Scheduler_succeed(e1.target.result));
                };
                fileReader1.readAsText(event1.target.files[0]);
                doc1.body.removeChild(element1);
            });
            doc1.body.appendChild(element1);
            element1.click();
        });
    }
    // DOWNLOAD
    var _Debugger_download = F2(function(historyLength1, json1) {
        return _Scheduler_binding(function(callback1) {
            var fileName1 = "history-" + historyLength1 + ".txt";
            var jsonString1 = JSON.stringify(json1);
            var mime1 = "text/plain;charset=utf-8";
            var done1 = _Scheduler_succeed(_Utils_Tuple0);
            // for IE10+
            if (navigator.msSaveBlob) {
                navigator.msSaveBlob(new Blob([
                    jsonString1
                ], {
                    type: mime1
                }), fileName1);
                return callback1(done1);
            }
            // for HTML5
            var element1 = document.createElement("a");
            element1.setAttribute("href", "data:" + mime1 + "," + encodeURIComponent(jsonString1));
            element1.setAttribute("download", fileName1);
            element1.style.display = "none";
            document.body.appendChild(element1);
            element1.click();
            document.body.removeChild(element1);
            callback1(done1);
        });
    });
    // POPOUT CONTENT
    function _Debugger_messageToString(value1) {
        if (typeof value1 === "boolean") return value1 ? "True" : "False";
        if (typeof value1 === "number") return value1 + "";
        if (typeof value1 === "string") return '"' + _Debugger_addSlashes(value1, false) + '"';
        if (value1 instanceof String) return "'" + _Debugger_addSlashes(value1, true) + "'";
        if (typeof value1 !== "object" || value1 === null || !("$" in value1)) return "\u2026";
        if (typeof value1.$ === "number") return "\u2026";
        var code1 = value1.$.charCodeAt(0);
        if (code1 === 0x23 /* # */  || /* a */ 0x61 <= code1 && code1 <= 0x7A /* z */ ) return "\u2026";
        if ([
            "Array_elm_builtin",
            "Set_elm_builtin",
            "RBNode_elm_builtin",
            "RBEmpty_elm_builtin"
        ].indexOf(value1.$) >= 0) return "\u2026";
        var keys1 = Object.keys(value1);
        switch(keys1.length){
            case 1:
                return value1.$;
            case 2:
                return value1.$ + " " + _Debugger_messageToString(value1.a);
            default:
                return value1.$ + " \u2026 " + _Debugger_messageToString(value1[keys1[keys1.length - 1]]);
        }
    }
    function _Debugger_init(value1) {
        if (typeof value1 === "boolean") return A3($elm$browser$Debugger$Expando$Constructor, $elm$core$Maybe$Just(value1 ? "True" : "False"), true, _List_Nil);
        if (typeof value1 === "number") return $elm$browser$Debugger$Expando$Primitive(value1 + "");
        if (typeof value1 === "string") return $elm$browser$Debugger$Expando$S('"' + _Debugger_addSlashes(value1, false) + '"');
        if (value1 instanceof String) return $elm$browser$Debugger$Expando$S("'" + _Debugger_addSlashes(value1, true) + "'");
        if (typeof value1 === "object" && "$" in value1) {
            var tag3 = value1.$;
            if (tag3 === "::" || tag3 === "[]") return A3($elm$browser$Debugger$Expando$Sequence, $elm$browser$Debugger$Expando$ListSeq, true, A2($elm$core$List$map, _Debugger_init, value1));
            if (tag3 === "Set_elm_builtin") return A3($elm$browser$Debugger$Expando$Sequence, $elm$browser$Debugger$Expando$SetSeq, true, A3($elm$core$Set$foldr, _Debugger_initCons, _List_Nil, value1));
            if (tag3 === "RBNode_elm_builtin" || tag3 == "RBEmpty_elm_builtin") return A2($elm$browser$Debugger$Expando$Dictionary, true, A3($elm$core$Dict$foldr, _Debugger_initKeyValueCons, _List_Nil, value1));
            if (tag3 === "Array_elm_builtin") return A3($elm$browser$Debugger$Expando$Sequence, $elm$browser$Debugger$Expando$ArraySeq, true, A3($elm$core$Array$foldr, _Debugger_initCons, _List_Nil, value1));
            if (typeof tag3 === "number") return $elm$browser$Debugger$Expando$Primitive("<internals>");
            var char1 = tag3.charCodeAt(0);
            if (char1 === 35 || 65 <= char1 && char1 <= 90) {
                var list1 = _List_Nil;
                for(var i1 in value1){
                    if (i1 === "$") continue;
                    list1 = _List_Cons(_Debugger_init(value1[i1]), list1);
                }
                return A3($elm$browser$Debugger$Expando$Constructor, char1 === 35 ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(tag3), true, $elm$core$List$reverse(list1));
            }
            return $elm$browser$Debugger$Expando$Primitive("<internals>");
        }
        if (typeof value1 === "object") {
            var dict1 = $elm$core$Dict$empty;
            for(var i1 in value1)dict1 = A3($elm$core$Dict$insert, i1, _Debugger_init(value1[i1]), dict1);
            return A2($elm$browser$Debugger$Expando$Record, true, dict1);
        }
        return $elm$browser$Debugger$Expando$Primitive("<internals>");
    }
    var _Debugger_initCons = F2(function initConsHelp1(value1, list1) {
        return _List_Cons(_Debugger_init(value1), list1);
    });
    var _Debugger_initKeyValueCons = F3(function(key1, value1, list1) {
        return _List_Cons(_Utils_Tuple2(_Debugger_init(key1), _Debugger_init(value1)), list1);
    });
    function _Debugger_addSlashes(str1, isChar1) {
        var s1 = str1.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
        if (isChar1) return s1.replace(/\'/g, "\\'");
        else return s1.replace(/\"/g, '\\"');
    }
    // BLOCK EVENTS
    function _Debugger_updateBlocker(oldBlocker1, newBlocker1) {
        if (oldBlocker1 === newBlocker1) return;
        var oldEvents1 = _Debugger_blockerToEvents(oldBlocker1);
        var newEvents1 = _Debugger_blockerToEvents(newBlocker1);
        // remove old blockers
        for(var i1 = 0; i1 < oldEvents1.length; i1++)document.removeEventListener(oldEvents1[i1], _Debugger_blocker, true);
        // add new blockers
        for(var i1 = 0; i1 < newEvents1.length; i1++)document.addEventListener(newEvents1[i1], _Debugger_blocker, true);
    }
    function _Debugger_blocker(event1) {
        if (event1.type === "keydown" && event1.metaKey && event1.which === 82) return;
        var isScroll1 = event1.type === "scroll" || event1.type === "wheel";
        for(var node1 = event1.target; node1; node1 = node1.parentNode){
            if (isScroll1 ? node1.id === "elm-debugger-details" : node1.id === "elm-debugger-overlay") return;
        }
        event1.stopPropagation();
        event1.preventDefault();
    }
    function _Debugger_blockerToEvents(blocker1) {
        return blocker1 === $elm$browser$Debugger$Overlay$BlockNone ? [] : blocker1 === $elm$browser$Debugger$Overlay$BlockMost ? _Debugger_mostEvents : _Debugger_allEvents;
    }
    var _Debugger_mostEvents = [
        "click",
        "dblclick",
        "mousemove",
        "mouseup",
        "mousedown",
        "mouseenter",
        "mouseleave",
        "touchstart",
        "touchend",
        "touchcancel",
        "touchmove",
        "pointerdown",
        "pointerup",
        "pointerover",
        "pointerout",
        "pointerenter",
        "pointerleave",
        "pointermove",
        "pointercancel",
        "dragstart",
        "drag",
        "dragend",
        "dragenter",
        "dragover",
        "dragleave",
        "drop",
        "keyup",
        "keydown",
        "keypress",
        "input",
        "change",
        "focus",
        "blur"
    ];
    var _Debugger_allEvents = _Debugger_mostEvents.concat("wheel", "scroll");
    // ELEMENT
    var _Debugger_element;
    var _Browser_element = _Debugger_element || F4(function(impl1, flagDecoder1, debugMetadata1, args1) {
        return _Platform_initialize(flagDecoder1, args1, impl1.init, impl1.update, impl1.subscriptions, function(sendToApp1, initialModel1) {
            var view1 = impl1.view;
            /**_UNUSED/
			var domNode = args['node'];
			//*/ /**/ var domNode1 = args1 && args1["node"] ? args1["node"] : _Debug_crash(0);
            //*/
            var currNode1 = _VirtualDom_virtualize(domNode1);
            return _Browser_makeAnimator(initialModel1, function(model1) {
                var nextNode1 = view1(model1);
                var patches1 = _VirtualDom_diff(currNode1, nextNode1);
                domNode1 = _VirtualDom_applyPatches(domNode1, currNode1, patches1, sendToApp1);
                currNode1 = nextNode1;
            });
        });
    });
    // DOCUMENT
    var _Debugger_document;
    var _Browser_document = _Debugger_document || F4(function(impl1, flagDecoder1, debugMetadata1, args1) {
        return _Platform_initialize(flagDecoder1, args1, impl1.init, impl1.update, impl1.subscriptions, function(sendToApp1, initialModel1) {
            var divertHrefToApp1 = impl1.setup && impl1.setup(sendToApp1);
            var view1 = impl1.view;
            var title1 = _VirtualDom_doc.title;
            var bodyNode1 = _VirtualDom_doc.body;
            var currNode1 = _VirtualDom_virtualize(bodyNode1);
            return _Browser_makeAnimator(initialModel1, function(model1) {
                _VirtualDom_divertHrefToApp = divertHrefToApp1;
                var doc1 = view1(model1);
                var nextNode1 = _VirtualDom_node("body")(_List_Nil)(doc1.body);
                var patches1 = _VirtualDom_diff(currNode1, nextNode1);
                bodyNode1 = _VirtualDom_applyPatches(bodyNode1, currNode1, patches1, sendToApp1);
                currNode1 = nextNode1;
                _VirtualDom_divertHrefToApp = 0;
                title1 !== doc1.title && (_VirtualDom_doc.title = title1 = doc1.title);
            });
        });
    });
    // ANIMATION
    var _Browser_cancelAnimationFrame = typeof cancelAnimationFrame !== "undefined" ? cancelAnimationFrame : function(id1) {
        clearTimeout(id1);
    };
    var _Browser_requestAnimationFrame = typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : function(callback1) {
        return setTimeout(callback1, 1000 / 60);
    };
    function _Browser_makeAnimator(model1, draw1) {
        draw1(model1);
        var state3 = 0;
        function updateIfNeeded1() {
            state3 = state3 === 1 ? 0 : (_Browser_requestAnimationFrame(updateIfNeeded1), draw1(model1), 1);
        }
        return function(nextModel1, isSync1) {
            model1 = nextModel1;
            isSync1 ? (draw1(model1), state3 === 2 && (state3 = 1)) : (state3 === 0 && _Browser_requestAnimationFrame(updateIfNeeded1), state3 = 2);
        };
    }
    // APPLICATION
    function _Browser_application(impl1) {
        var onUrlChange1 = impl1.onUrlChange;
        var onUrlRequest1 = impl1.onUrlRequest;
        var key1 = function() {
            key1.a(onUrlChange1(_Browser_getUrl()));
        };
        return _Browser_document({
            setup: function(sendToApp1) {
                key1.a = sendToApp1;
                _Browser_window.addEventListener("popstate", key1);
                _Browser_window.navigator.userAgent.indexOf("Trident") < 0 || _Browser_window.addEventListener("hashchange", key1);
                return F2(function(domNode1, event1) {
                    if (!event1.ctrlKey && !event1.metaKey && !event1.shiftKey && event1.button < 1 && !domNode1.target && !domNode1.hasAttribute("download")) {
                        event1.preventDefault();
                        var href1 = domNode1.href;
                        var curr1 = _Browser_getUrl();
                        var next1 = $elm$url$Url$fromString(href1).a;
                        sendToApp1(onUrlRequest1(next1 && curr1.protocol === next1.protocol && curr1.host === next1.host && curr1.port_.a === next1.port_.a ? $elm$browser$Browser$Internal(next1) : $elm$browser$Browser$External(href1)));
                    }
                });
            },
            init: function(flags1) {
                return A3(impl1.init, flags1, _Browser_getUrl(), key1);
            },
            view: impl1.view,
            update: impl1.update,
            subscriptions: impl1.subscriptions
        });
    }
    function _Browser_getUrl() {
        return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
    }
    var _Browser_go = F2(function(key1, n2) {
        return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
            n2 && history.go(n2);
            key1();
        }));
    });
    var _Browser_pushUrl = F2(function(key1, url1) {
        return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
            history.pushState({}, "", url1);
            key1();
        }));
    });
    var _Browser_replaceUrl = F2(function(key1, url1) {
        return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
            history.replaceState({}, "", url1);
            key1();
        }));
    });
    // GLOBAL EVENTS
    var _Browser_fakeNode = {
        addEventListener: function() {},
        removeEventListener: function() {}
    };
    var _Browser_doc = typeof document !== "undefined" ? document : _Browser_fakeNode;
    var _Browser_window = typeof window !== "undefined" ? window : _Browser_fakeNode;
    var _Browser_on = F3(function(node1, eventName1, sendToSelf1) {
        return _Scheduler_spawn(_Scheduler_binding(function(callback1) {
            function handler1(event1) {
                _Scheduler_rawSpawn(sendToSelf1(event1));
            }
            node1.addEventListener(eventName1, handler1, _VirtualDom_passiveSupported && {
                passive: true
            });
            return function() {
                node1.removeEventListener(eventName1, handler1);
            };
        }));
    });
    var _Browser_decodeEvent = F2(function(decoder1, event1) {
        var result1 = _Json_runHelp(decoder1, event1);
        return $elm$core$Result$isOk(result1) ? $elm$core$Maybe$Just(result1.a) : $elm$core$Maybe$Nothing;
    });
    // PAGE VISIBILITY
    function _Browser_visibilityInfo() {
        return typeof _VirtualDom_doc.hidden !== "undefined" ? {
            hidden: "hidden",
            change: "visibilitychange"
        } : typeof _VirtualDom_doc.mozHidden !== "undefined" ? {
            hidden: "mozHidden",
            change: "mozvisibilitychange"
        } : typeof _VirtualDom_doc.msHidden !== "undefined" ? {
            hidden: "msHidden",
            change: "msvisibilitychange"
        } : typeof _VirtualDom_doc.webkitHidden !== "undefined" ? {
            hidden: "webkitHidden",
            change: "webkitvisibilitychange"
        } : {
            hidden: "hidden",
            change: "visibilitychange"
        };
    }
    // ANIMATION FRAMES
    function _Browser_rAF() {
        return _Scheduler_binding(function(callback1) {
            var id1 = _Browser_requestAnimationFrame(function() {
                callback1(_Scheduler_succeed(Date.now()));
            });
            return function() {
                _Browser_cancelAnimationFrame(id1);
            };
        });
    }
    function _Browser_now() {
        return _Scheduler_binding(function(callback1) {
            callback1(_Scheduler_succeed(Date.now()));
        });
    }
    // DOM STUFF
    function _Browser_withNode(id1, doStuff1) {
        return _Scheduler_binding(function(callback1) {
            _Browser_requestAnimationFrame(function() {
                var node1 = document.getElementById(id1);
                callback1(node1 ? _Scheduler_succeed(doStuff1(node1)) : _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id1)));
            });
        });
    }
    function _Browser_withWindow(doStuff1) {
        return _Scheduler_binding(function(callback1) {
            _Browser_requestAnimationFrame(function() {
                callback1(_Scheduler_succeed(doStuff1()));
            });
        });
    }
    // FOCUS and BLUR
    var _Browser_call = F2(function(functionName1, id1) {
        return _Browser_withNode(id1, function(node1) {
            node1[functionName1]();
            return _Utils_Tuple0;
        });
    });
    // WINDOW VIEWPORT
    function _Browser_getViewport() {
        return {
            scene: _Browser_getScene(),
            viewport: {
                x: _Browser_window.pageXOffset,
                y: _Browser_window.pageYOffset,
                width: _Browser_doc.documentElement.clientWidth,
                height: _Browser_doc.documentElement.clientHeight
            }
        };
    }
    function _Browser_getScene() {
        var body1 = _Browser_doc.body;
        var elem1 = _Browser_doc.documentElement;
        return {
            width: Math.max(body1.scrollWidth, body1.offsetWidth, elem1.scrollWidth, elem1.offsetWidth, elem1.clientWidth),
            height: Math.max(body1.scrollHeight, body1.offsetHeight, elem1.scrollHeight, elem1.offsetHeight, elem1.clientHeight)
        };
    }
    var _Browser_setViewport = F2(function(x1, y1) {
        return _Browser_withWindow(function() {
            _Browser_window.scroll(x1, y1);
            return _Utils_Tuple0;
        });
    });
    // ELEMENT VIEWPORT
    function _Browser_getViewportOf(id1) {
        return _Browser_withNode(id1, function(node1) {
            return {
                scene: {
                    width: node1.scrollWidth,
                    height: node1.scrollHeight
                },
                viewport: {
                    x: node1.scrollLeft,
                    y: node1.scrollTop,
                    width: node1.clientWidth,
                    height: node1.clientHeight
                }
            };
        });
    }
    var _Browser_setViewportOf = F3(function(id1, x1, y1) {
        return _Browser_withNode(id1, function(node1) {
            node1.scrollLeft = x1;
            node1.scrollTop = y1;
            return _Utils_Tuple0;
        });
    });
    // ELEMENT
    function _Browser_getElement(id1) {
        return _Browser_withNode(id1, function(node1) {
            var rect1 = node1.getBoundingClientRect();
            var x1 = _Browser_window.pageXOffset;
            var y1 = _Browser_window.pageYOffset;
            return {
                scene: _Browser_getScene(),
                viewport: {
                    x: x1,
                    y: y1,
                    width: _Browser_doc.documentElement.clientWidth,
                    height: _Browser_doc.documentElement.clientHeight
                },
                element: {
                    x: x1 + rect1.left,
                    y: y1 + rect1.top,
                    width: rect1.width,
                    height: rect1.height
                }
            };
        });
    }
    // LOAD and RELOAD
    function _Browser_reload(skipCache1) {
        return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback1) {
            _VirtualDom_doc.location.reload(skipCache1);
        }));
    }
    function _Browser_load(url1) {
        return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback1) {
            try {
                _Browser_window.location = url1;
            } catch (err1) {
                // Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
                // Other browsers reload the page, so let's be consistent about that.
                _VirtualDom_doc.location.reload(false);
            }
        }));
    }
    function _Time_now(millisToPosix1) {
        return _Scheduler_binding(function(callback1) {
            callback1(_Scheduler_succeed(millisToPosix1(Date.now())));
        });
    }
    var _Time_setInterval = F2(function(interval1, task1) {
        return _Scheduler_binding(function(callback1) {
            var id1 = setInterval(function() {
                _Scheduler_rawSpawn(task1);
            }, interval1);
            return function() {
                clearInterval(id1);
            };
        });
    });
    function _Time_here() {
        return _Scheduler_binding(function(callback1) {
            callback1(_Scheduler_succeed(A2($elm$time$Time$customZone, -new Date().getTimezoneOffset(), _List_Nil)));
        });
    }
    function _Time_getZoneName() {
        return _Scheduler_binding(function(callback1) {
            try {
                var name1 = $elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
            } catch (e1) {
                var name1 = $elm$time$Time$Offset(new Date().getTimezoneOffset());
            }
            callback1(_Scheduler_succeed(name1));
        });
    }
    var $elm$core$Basics$EQ = {
        $: "EQ"
    };
    var $elm$core$Basics$GT = {
        $: "GT"
    };
    var $elm$core$Basics$LT = {
        $: "LT"
    };
    var $elm$core$List$cons = _List_cons;
    var $elm$core$Dict$foldr = F3(function(func1, acc1, t1) {
        foldr: while(true){
            if (t1.$ === "RBEmpty_elm_builtin") return acc1;
            else {
                var key1 = t1.b;
                var value1 = t1.c;
                var left1 = t1.d;
                var right1 = t1.e;
                var $temp$func1 = func1, $temp$acc1 = A3(func1, key1, value1, A3($elm$core$Dict$foldr, func1, acc1, right1)), $temp$t1 = left1;
                func1 = $temp$func1;
                acc1 = $temp$acc1;
                t1 = $temp$t1;
                continue foldr;
            }
        }
    });
    var $elm$core$Dict$toList = function(dict1) {
        return A3($elm$core$Dict$foldr, F3(function(key1, value1, list1) {
            return A2($elm$core$List$cons, _Utils_Tuple2(key1, value1), list1);
        }), _List_Nil, dict1);
    };
    var $elm$core$Dict$keys = function(dict1) {
        return A3($elm$core$Dict$foldr, F3(function(key1, value1, keyList1) {
            return A2($elm$core$List$cons, key1, keyList1);
        }), _List_Nil, dict1);
    };
    var $elm$core$Set$toList = function(_v01) {
        var dict1 = _v01.a;
        return $elm$core$Dict$keys(dict1);
    };
    var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
    var $elm$core$Array$foldr = F3(function(func1, baseCase1, _v01) {
        var tree1 = _v01.c;
        var tail1 = _v01.d;
        var helper1 = F2(function(node1, acc1) {
            if (node1.$ === "SubTree") {
                var subTree1 = node1.a;
                return A3($elm$core$Elm$JsArray$foldr, helper1, acc1, subTree1);
            } else {
                var values1 = node1.a;
                return A3($elm$core$Elm$JsArray$foldr, func1, acc1, values1);
            }
        });
        return A3($elm$core$Elm$JsArray$foldr, helper1, A3($elm$core$Elm$JsArray$foldr, func1, baseCase1, tail1), tree1);
    });
    var $elm$core$Array$toList = function(array1) {
        return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array1);
    };
    var $elm$core$Result$Err = function(a1) {
        return {
            $: "Err",
            a: a1
        };
    };
    var $elm$json$Json$Decode$Failure = F2(function(a1, b1) {
        return {
            $: "Failure",
            a: a1,
            b: b1
        };
    });
    var $elm$json$Json$Decode$Field = F2(function(a1, b1) {
        return {
            $: "Field",
            a: a1,
            b: b1
        };
    });
    var $elm$json$Json$Decode$Index = F2(function(a1, b1) {
        return {
            $: "Index",
            a: a1,
            b: b1
        };
    });
    var $elm$core$Result$Ok = function(a1) {
        return {
            $: "Ok",
            a: a1
        };
    };
    var $elm$json$Json$Decode$OneOf = function(a1) {
        return {
            $: "OneOf",
            a: a1
        };
    };
    var $elm$core$Basics$False = {
        $: "False"
    };
    var $elm$core$Basics$add = _Basics_add;
    var $elm$core$Maybe$Just = function(a1) {
        return {
            $: "Just",
            a: a1
        };
    };
    var $elm$core$Maybe$Nothing = {
        $: "Nothing"
    };
    var $elm$core$String$all = _String_all;
    var $elm$core$Basics$and = _Basics_and;
    var $elm$core$Basics$append = _Utils_append;
    var $elm$json$Json$Encode$encode = _Json_encode;
    var $elm$core$String$fromInt = _String_fromNumber;
    var $elm$core$String$join = F2(function(sep1, chunks1) {
        return A2(_String_join, sep1, _List_toArray(chunks1));
    });
    var $elm$core$String$split = F2(function(sep1, string1) {
        return _List_fromArray(A2(_String_split, sep1, string1));
    });
    var $elm$json$Json$Decode$indent = function(str1) {
        return A2($elm$core$String$join, "\n    ", A2($elm$core$String$split, "\n", str1));
    };
    var $elm$core$List$foldl = F3(function(func1, acc1, list1) {
        foldl: while(true){
            if (!list1.b) return acc1;
            else {
                var x1 = list1.a;
                var xs1 = list1.b;
                var $temp$func1 = func1, $temp$acc1 = A2(func1, x1, acc1), $temp$list1 = xs1;
                func1 = $temp$func1;
                acc1 = $temp$acc1;
                list1 = $temp$list1;
                continue foldl;
            }
        }
    });
    var $elm$core$List$length = function(xs1) {
        return A3($elm$core$List$foldl, F2(function(_v01, i1) {
            return i1 + 1;
        }), 0, xs1);
    };
    var $elm$core$List$map2 = _List_map2;
    var $elm$core$Basics$le = _Utils_le;
    var $elm$core$Basics$sub = _Basics_sub;
    var $elm$core$List$rangeHelp = F3(function(lo1, hi1, list1) {
        rangeHelp: while(true){
            if (_Utils_cmp(lo1, hi1) < 1) {
                var $temp$lo1 = lo1, $temp$hi1 = hi1 - 1, $temp$list1 = A2($elm$core$List$cons, hi1, list1);
                lo1 = $temp$lo1;
                hi1 = $temp$hi1;
                list1 = $temp$list1;
                continue rangeHelp;
            } else return list1;
        }
    });
    var $elm$core$List$range = F2(function(lo1, hi1) {
        return A3($elm$core$List$rangeHelp, lo1, hi1, _List_Nil);
    });
    var $elm$core$List$indexedMap = F2(function(f1, xs1) {
        return A3($elm$core$List$map2, f1, A2($elm$core$List$range, 0, $elm$core$List$length(xs1) - 1), xs1);
    });
    var $elm$core$Char$toCode = _Char_toCode;
    var $elm$core$Char$isLower = function(_char1) {
        var code1 = $elm$core$Char$toCode(_char1);
        return 97 <= code1 && code1 <= 122;
    };
    var $elm$core$Char$isUpper = function(_char1) {
        var code1 = $elm$core$Char$toCode(_char1);
        return code1 <= 90 && 65 <= code1;
    };
    var $elm$core$Basics$or = _Basics_or;
    var $elm$core$Char$isAlpha = function(_char1) {
        return $elm$core$Char$isLower(_char1) || $elm$core$Char$isUpper(_char1);
    };
    var $elm$core$Char$isDigit = function(_char1) {
        var code1 = $elm$core$Char$toCode(_char1);
        return code1 <= 57 && 48 <= code1;
    };
    var $elm$core$Char$isAlphaNum = function(_char1) {
        return $elm$core$Char$isLower(_char1) || $elm$core$Char$isUpper(_char1) || $elm$core$Char$isDigit(_char1);
    };
    var $elm$core$List$reverse = function(list1) {
        return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list1);
    };
    var $elm$core$String$uncons = _String_uncons;
    var $elm$json$Json$Decode$errorOneOf = F2(function(i1, error1) {
        return "\n\n(" + ($elm$core$String$fromInt(i1 + 1) + (") " + $elm$json$Json$Decode$indent($elm$json$Json$Decode$errorToString(error1))));
    });
    var $elm$json$Json$Decode$errorToString = function(error1) {
        return A2($elm$json$Json$Decode$errorToStringHelp, error1, _List_Nil);
    };
    var $elm$json$Json$Decode$errorToStringHelp = F2(function(error1, context1) {
        errorToStringHelp: while(true)switch(error1.$){
            case "Field":
                var f1 = error1.a;
                var err1 = error1.b;
                var isSimple1 = function() {
                    var _v13 = $elm$core$String$uncons(f1);
                    if (_v13.$ === "Nothing") return false;
                    else {
                        var _v21 = _v13.a;
                        var _char1 = _v21.a;
                        var rest1 = _v21.b;
                        return $elm$core$Char$isAlpha(_char1) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest1);
                    }
                }();
                var fieldName1 = isSimple1 ? "." + f1 : "['" + (f1 + "']");
                var $temp$error1 = err1, $temp$context1 = A2($elm$core$List$cons, fieldName1, context1);
                error1 = $temp$error1;
                context1 = $temp$context1;
                continue errorToStringHelp;
            case "Index":
                var i1 = error1.a;
                var err1 = error1.b;
                var indexName1 = "[" + ($elm$core$String$fromInt(i1) + "]");
                var $temp$error1 = err1, $temp$context1 = A2($elm$core$List$cons, indexName1, context1);
                error1 = $temp$error1;
                context1 = $temp$context1;
                continue errorToStringHelp;
            case "OneOf":
                var errors1 = error1.a;
                if (!errors1.b) return "Ran into a Json.Decode.oneOf with no possibilities" + function() {
                    if (!context1.b) return "!";
                    else return " at json" + A2($elm$core$String$join, "", $elm$core$List$reverse(context1));
                }();
                else if (!errors1.b.b) {
                    var err1 = errors1.a;
                    var $temp$error1 = err1, $temp$context1 = context1;
                    error1 = $temp$error1;
                    context1 = $temp$context1;
                    continue errorToStringHelp;
                } else {
                    var starter1 = function() {
                        if (!context1.b) return "Json.Decode.oneOf";
                        else return "The Json.Decode.oneOf at json" + A2($elm$core$String$join, "", $elm$core$List$reverse(context1));
                    }();
                    var introduction1 = starter1 + (" failed in the following " + ($elm$core$String$fromInt($elm$core$List$length(errors1)) + " ways:"));
                    return A2($elm$core$String$join, "\n\n", A2($elm$core$List$cons, introduction1, A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors1)));
                }
            default:
                var msg1 = error1.a;
                var json1 = error1.b;
                var introduction1 = function() {
                    if (!context1.b) return "Problem with the given value:\n\n";
                    else return "Problem with the value at json" + (A2($elm$core$String$join, "", $elm$core$List$reverse(context1)) + ":\n\n    ");
                }();
                return introduction1 + ($elm$json$Json$Decode$indent(A2($elm$json$Json$Encode$encode, 4, json1)) + ("\n\n" + msg1));
        }
    });
    var $elm$core$Array$branchFactor = 32;
    var $elm$core$Array$Array_elm_builtin = F4(function(a1, b1, c1, d9) {
        return {
            $: "Array_elm_builtin",
            a: a1,
            b: b1,
            c: c1,
            d: d9
        };
    });
    var $elm$core$Elm$JsArray$empty = _JsArray_empty;
    var $elm$core$Basics$ceiling = _Basics_ceiling;
    var $elm$core$Basics$fdiv = _Basics_fdiv;
    var $elm$core$Basics$logBase = F2(function(base1, number1) {
        return _Basics_log(number1) / _Basics_log(base1);
    });
    var $elm$core$Basics$toFloat = _Basics_toFloat;
    var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
    var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
    var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
    var $elm$core$Array$Leaf = function(a1) {
        return {
            $: "Leaf",
            a: a1
        };
    };
    var $elm$core$Basics$apL = F2(function(f1, x1) {
        return f1(x1);
    });
    var $elm$core$Basics$apR = F2(function(x1, f1) {
        return f1(x1);
    });
    var $elm$core$Basics$eq = _Utils_equal;
    var $elm$core$Basics$floor = _Basics_floor;
    var $elm$core$Elm$JsArray$length = _JsArray_length;
    var $elm$core$Basics$gt = _Utils_gt;
    var $elm$core$Basics$max = F2(function(x1, y1) {
        return _Utils_cmp(x1, y1) > 0 ? x1 : y1;
    });
    var $elm$core$Basics$mul = _Basics_mul;
    var $elm$core$Array$SubTree = function(a1) {
        return {
            $: "SubTree",
            a: a1
        };
    };
    var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
    var $elm$core$Array$compressNodes = F2(function(nodes1, acc1) {
        compressNodes: while(true){
            var _v01 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes1);
            var node1 = _v01.a;
            var remainingNodes1 = _v01.b;
            var newAcc1 = A2($elm$core$List$cons, $elm$core$Array$SubTree(node1), acc1);
            if (!remainingNodes1.b) return $elm$core$List$reverse(newAcc1);
            else {
                var $temp$nodes1 = remainingNodes1, $temp$acc1 = newAcc1;
                nodes1 = $temp$nodes1;
                acc1 = $temp$acc1;
                continue compressNodes;
            }
        }
    });
    var $elm$core$Tuple$first = function(_v01) {
        var x1 = _v01.a;
        return x1;
    };
    var $elm$core$Array$treeFromBuilder = F2(function(nodeList1, nodeListSize1) {
        treeFromBuilder: while(true){
            var newNodeSize1 = $elm$core$Basics$ceiling(nodeListSize1 / $elm$core$Array$branchFactor);
            if (newNodeSize1 === 1) return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList1).a;
            else {
                var $temp$nodeList1 = A2($elm$core$Array$compressNodes, nodeList1, _List_Nil), $temp$nodeListSize1 = newNodeSize1;
                nodeList1 = $temp$nodeList1;
                nodeListSize1 = $temp$nodeListSize1;
                continue treeFromBuilder;
            }
        }
    });
    var $elm$core$Array$builderToArray = F2(function(reverseNodeList1, builder1) {
        if (!builder1.nodeListSize) return A4($elm$core$Array$Array_elm_builtin, $elm$core$Elm$JsArray$length(builder1.tail), $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, builder1.tail);
        else {
            var treeLen1 = builder1.nodeListSize * $elm$core$Array$branchFactor;
            var depth1 = $elm$core$Basics$floor(A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen1 - 1));
            var correctNodeList1 = reverseNodeList1 ? $elm$core$List$reverse(builder1.nodeList) : builder1.nodeList;
            var tree1 = A2($elm$core$Array$treeFromBuilder, correctNodeList1, builder1.nodeListSize);
            return A4($elm$core$Array$Array_elm_builtin, $elm$core$Elm$JsArray$length(builder1.tail) + treeLen1, A2($elm$core$Basics$max, 5, depth1 * $elm$core$Array$shiftStep), tree1, builder1.tail);
        }
    });
    var $elm$core$Basics$idiv = _Basics_idiv;
    var $elm$core$Basics$lt = _Utils_lt;
    var $elm$core$Array$initializeHelp = F5(function(fn1, fromIndex1, len1, nodeList1, tail1) {
        initializeHelp: while(true){
            if (fromIndex1 < 0) return A2($elm$core$Array$builderToArray, false, {
                nodeList: nodeList1,
                nodeListSize: len1 / $elm$core$Array$branchFactor | 0,
                tail: tail1
            });
            else {
                var leaf1 = $elm$core$Array$Leaf(A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex1, fn1));
                var $temp$fn1 = fn1, $temp$fromIndex1 = fromIndex1 - $elm$core$Array$branchFactor, $temp$len1 = len1, $temp$nodeList1 = A2($elm$core$List$cons, leaf1, nodeList1), $temp$tail1 = tail1;
                fn1 = $temp$fn1;
                fromIndex1 = $temp$fromIndex1;
                len1 = $temp$len1;
                nodeList1 = $temp$nodeList1;
                tail1 = $temp$tail1;
                continue initializeHelp;
            }
        }
    });
    var $elm$core$Basics$remainderBy = _Basics_remainderBy;
    var $elm$core$Array$initialize = F2(function(len1, fn1) {
        if (len1 <= 0) return $elm$core$Array$empty;
        else {
            var tailLen1 = len1 % $elm$core$Array$branchFactor;
            var tail1 = A3($elm$core$Elm$JsArray$initialize, tailLen1, len1 - tailLen1, fn1);
            var initialFromIndex1 = len1 - tailLen1 - $elm$core$Array$branchFactor;
            return A5($elm$core$Array$initializeHelp, fn1, initialFromIndex1, len1, _List_Nil, tail1);
        }
    });
    var $elm$core$Basics$True = {
        $: "True"
    };
    var $elm$core$Result$isOk = function(result1) {
        if (result1.$ === "Ok") return true;
        else return false;
    };
    var $elm$json$Json$Decode$map = _Json_map1;
    var $elm$json$Json$Decode$map2 = _Json_map2;
    var $elm$json$Json$Decode$succeed = _Json_succeed;
    var $elm$virtual_dom$VirtualDom$toHandlerInt = function(handler1) {
        switch(handler1.$){
            case "Normal":
                return 0;
            case "MayStopPropagation":
                return 1;
            case "MayPreventDefault":
                return 2;
            default:
                return 3;
        }
    };
    var $elm$browser$Debugger$Expando$ArraySeq = {
        $: "ArraySeq"
    };
    var $elm$browser$Debugger$Overlay$BlockMost = {
        $: "BlockMost"
    };
    var $elm$browser$Debugger$Overlay$BlockNone = {
        $: "BlockNone"
    };
    var $elm$browser$Debugger$Expando$Constructor = F3(function(a1, b1, c1) {
        return {
            $: "Constructor",
            a: a1,
            b: b1,
            c: c1
        };
    });
    var $elm$browser$Debugger$Expando$Dictionary = F2(function(a1, b1) {
        return {
            $: "Dictionary",
            a: a1,
            b: b1
        };
    });
    var $elm$browser$Debugger$Main$Down = {
        $: "Down"
    };
    var $elm$browser$Debugger$Expando$ListSeq = {
        $: "ListSeq"
    };
    var $elm$browser$Debugger$Main$NoOp = {
        $: "NoOp"
    };
    var $elm$browser$Debugger$Expando$Primitive = function(a1) {
        return {
            $: "Primitive",
            a: a1
        };
    };
    var $elm$browser$Debugger$Expando$Record = F2(function(a1, b1) {
        return {
            $: "Record",
            a: a1,
            b: b1
        };
    });
    var $elm$browser$Debugger$Expando$S = function(a1) {
        return {
            $: "S",
            a: a1
        };
    };
    var $elm$browser$Debugger$Expando$Sequence = F3(function(a1, b1, c1) {
        return {
            $: "Sequence",
            a: a1,
            b: b1,
            c: c1
        };
    });
    var $elm$browser$Debugger$Expando$SetSeq = {
        $: "SetSeq"
    };
    var $elm$browser$Debugger$Main$Up = {
        $: "Up"
    };
    var $elm$browser$Debugger$Main$UserMsg = function(a1) {
        return {
            $: "UserMsg",
            a: a1
        };
    };
    var $elm$browser$Debugger$Main$Export = {
        $: "Export"
    };
    var $elm$browser$Debugger$Main$Import = {
        $: "Import"
    };
    var $elm$browser$Debugger$Main$Open = {
        $: "Open"
    };
    var $elm$browser$Debugger$Main$OverlayMsg = function(a1) {
        return {
            $: "OverlayMsg",
            a: a1
        };
    };
    var $elm$browser$Debugger$Main$Resume = {
        $: "Resume"
    };
    var $elm$browser$Debugger$Main$isPaused = function(state3) {
        if (state3.$ === "Running") return false;
        else return true;
    };
    var $elm$browser$Debugger$History$size = function(history1) {
        return history1.numMessages;
    };
    var $elm$browser$Debugger$Overlay$Accept = function(a1) {
        return {
            $: "Accept",
            a: a1
        };
    };
    var $elm$browser$Debugger$Overlay$Choose = F2(function(a1, b1) {
        return {
            $: "Choose",
            a: a1,
            b: b1
        };
    });
    var $elm$html$Html$div = _VirtualDom_node("div");
    var $elm$json$Json$Encode$string = _Json_wrap;
    var $elm$html$Html$Attributes$stringProperty = F2(function(key1, string1) {
        return A2(_VirtualDom_property, key1, $elm$json$Json$Encode$string(string1));
    });
    var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty("id");
    var $elm$virtual_dom$VirtualDom$Normal = function(a1) {
        return {
            $: "Normal",
            a: a1
        };
    };
    var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
    var $elm$html$Html$Events$on = F2(function(event1, decoder1) {
        return A2($elm$virtual_dom$VirtualDom$on, event1, $elm$virtual_dom$VirtualDom$Normal(decoder1));
    });
    var $elm$html$Html$Events$onClick = function(msg1) {
        return A2($elm$html$Html$Events$on, "click", $elm$json$Json$Decode$succeed(msg1));
    };
    var $elm$html$Html$span = _VirtualDom_node("span");
    var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
    var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
    var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
    var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
    var $elm$html$Html$a = _VirtualDom_node("a");
    var $elm$browser$Debugger$Overlay$goodNews1 = "\nThe good news is that having values like this in your message type is not\nso great in the long run. You are better off using simpler data, like\n";
    var $elm$browser$Debugger$Overlay$goodNews2 = "\nfunction can pattern match on that data and call whatever functions, JSON\ndecoders, etc. you need. This makes the code much more explicit and easy to\nfollow for other readers (or you in a few months!)\n";
    var $elm$html$Html$Attributes$href = function(url1) {
        return A2($elm$html$Html$Attributes$stringProperty, "href", _VirtualDom_noJavaScriptUri(url1));
    };
    var $elm$core$List$foldrHelper = F4(function(fn1, acc1, ctr1, ls1) {
        if (!ls1.b) return acc1;
        else {
            var a1 = ls1.a;
            var r11 = ls1.b;
            if (!r11.b) return A2(fn1, a1, acc1);
            else {
                var b1 = r11.a;
                var r21 = r11.b;
                if (!r21.b) return A2(fn1, a1, A2(fn1, b1, acc1));
                else {
                    var c1 = r21.a;
                    var r31 = r21.b;
                    if (!r31.b) return A2(fn1, a1, A2(fn1, b1, A2(fn1, c1, acc1)));
                    else {
                        var d9 = r31.a;
                        var r41 = r31.b;
                        var res1 = ctr1 > 500 ? A3($elm$core$List$foldl, fn1, acc1, $elm$core$List$reverse(r41)) : A4($elm$core$List$foldrHelper, fn1, acc1, ctr1 + 1, r41);
                        return A2(fn1, a1, A2(fn1, b1, A2(fn1, c1, A2(fn1, d9, res1))));
                    }
                }
            }
        }
    });
    var $elm$core$List$foldr = F3(function(fn1, acc1, ls1) {
        return A4($elm$core$List$foldrHelper, fn1, acc1, 0, ls1);
    });
    var $elm$core$List$map = F2(function(f1, xs1) {
        return A3($elm$core$List$foldr, F2(function(x1, acc1) {
            return A2($elm$core$List$cons, f1(x1), acc1);
        }), _List_Nil, xs1);
    });
    var $elm$html$Html$p = _VirtualDom_node("p");
    var $elm$html$Html$ul = _VirtualDom_node("ul");
    var $elm$html$Html$code = _VirtualDom_node("code");
    var $elm$browser$Debugger$Overlay$viewCode = function(name1) {
        return A2($elm$html$Html$code, _List_Nil, _List_fromArray([
            $elm$html$Html$text(name1)
        ]));
    };
    var $elm$browser$Debugger$Overlay$addCommas = function(items1) {
        if (!items1.b) return "";
        else {
            if (!items1.b.b) {
                var item3 = items1.a;
                return item3;
            } else if (!items1.b.b.b) {
                var item11 = items1.a;
                var _v13 = items1.b;
                var item21 = _v13.a;
                return item11 + (" and " + item21);
            } else {
                var lastItem1 = items1.a;
                var otherItems1 = items1.b;
                return A2($elm$core$String$join, ", ", _Utils_ap(otherItems1, _List_fromArray([
                    " and " + lastItem1
                ])));
            }
        }
    };
    var $elm$html$Html$li = _VirtualDom_node("li");
    var $elm$browser$Debugger$Overlay$problemToString = function(problem1) {
        switch(problem1.$){
            case "Function":
                return "functions";
            case "Decoder":
                return "JSON decoders";
            case "Task":
                return "tasks";
            case "Process":
                return "processes";
            case "Socket":
                return "web sockets";
            case "Request":
                return "HTTP requests";
            case "Program":
                return "programs";
            default:
                return "virtual DOM values";
        }
    };
    var $elm$browser$Debugger$Overlay$viewProblemType = function(_v01) {
        var name1 = _v01.name;
        var problems1 = _v01.problems;
        return A2($elm$html$Html$li, _List_Nil, _List_fromArray([
            $elm$browser$Debugger$Overlay$viewCode(name1),
            $elm$html$Html$text(" can contain " + ($elm$browser$Debugger$Overlay$addCommas(A2($elm$core$List$map, $elm$browser$Debugger$Overlay$problemToString, problems1)) + "."))
        ]));
    };
    var $elm$browser$Debugger$Overlay$viewBadMetadata = function(_v01) {
        var message1 = _v01.message;
        var problems1 = _v01.problems;
        return _List_fromArray([
            A2($elm$html$Html$p, _List_Nil, _List_fromArray([
                $elm$html$Html$text("The "),
                $elm$browser$Debugger$Overlay$viewCode(message1),
                $elm$html$Html$text(" type of your program cannot be reliably serialized for history files.")
            ])),
            A2($elm$html$Html$p, _List_Nil, _List_fromArray([
                $elm$html$Html$text("Functions cannot be serialized, nor can values that contain functions. This is a problem in these places:")
            ])),
            A2($elm$html$Html$ul, _List_Nil, A2($elm$core$List$map, $elm$browser$Debugger$Overlay$viewProblemType, problems1)),
            A2($elm$html$Html$p, _List_Nil, _List_fromArray([
                $elm$html$Html$text($elm$browser$Debugger$Overlay$goodNews1),
                A2($elm$html$Html$a, _List_fromArray([
                    $elm$html$Html$Attributes$href("https://guide.elm-lang.org/types/custom_types.html")
                ]), _List_fromArray([
                    $elm$html$Html$text("custom types")
                ])),
                $elm$html$Html$text(", in your messages. From there, your "),
                $elm$browser$Debugger$Overlay$viewCode("update"),
                $elm$html$Html$text($elm$browser$Debugger$Overlay$goodNews2)
            ]))
        ]);
    };
    var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
    var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
    var $elm$browser$Debugger$Overlay$Cancel = {
        $: "Cancel"
    };
    var $elm$browser$Debugger$Overlay$Proceed = {
        $: "Proceed"
    };
    var $elm$html$Html$button = _VirtualDom_node("button");
    var $elm$browser$Debugger$Overlay$viewButtons = function(buttons1) {
        var btn1 = F2(function(msg1, string1) {
            return A2($elm$html$Html$button, _List_fromArray([
                A2($elm$html$Html$Attributes$style, "margin-right", "20px"),
                $elm$html$Html$Events$onClick(msg1)
            ]), _List_fromArray([
                $elm$html$Html$text(string1)
            ]));
        });
        var buttonNodes1 = function() {
            if (buttons1.$ === "Accept") {
                var proceed1 = buttons1.a;
                return _List_fromArray([
                    A2(btn1, $elm$browser$Debugger$Overlay$Proceed, proceed1)
                ]);
            } else {
                var cancel1 = buttons1.a;
                var proceed1 = buttons1.b;
                return _List_fromArray([
                    A2(btn1, $elm$browser$Debugger$Overlay$Cancel, cancel1),
                    A2(btn1, $elm$browser$Debugger$Overlay$Proceed, proceed1)
                ]);
            }
        }();
        return A2($elm$html$Html$div, _List_fromArray([
            A2($elm$html$Html$Attributes$style, "height", "60px"),
            A2($elm$html$Html$Attributes$style, "line-height", "60px"),
            A2($elm$html$Html$Attributes$style, "text-align", "right"),
            A2($elm$html$Html$Attributes$style, "background-color", "rgb(50, 50, 50)")
        ]), buttonNodes1);
    };
    var $elm$browser$Debugger$Overlay$viewMessage = F4(function(config1, title1, details1, buttons1) {
        return A2($elm$html$Html$div, _List_fromArray([
            $elm$html$Html$Attributes$id("elm-debugger-overlay"),
            A2($elm$html$Html$Attributes$style, "position", "fixed"),
            A2($elm$html$Html$Attributes$style, "top", "0"),
            A2($elm$html$Html$Attributes$style, "left", "0"),
            A2($elm$html$Html$Attributes$style, "width", "100vw"),
            A2($elm$html$Html$Attributes$style, "height", "100vh"),
            A2($elm$html$Html$Attributes$style, "color", "white"),
            A2($elm$html$Html$Attributes$style, "pointer-events", "none"),
            A2($elm$html$Html$Attributes$style, "font-family", "'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif"),
            A2($elm$html$Html$Attributes$style, "z-index", "2147483647")
        ]), _List_fromArray([
            A2($elm$html$Html$div, _List_fromArray([
                A2($elm$html$Html$Attributes$style, "position", "absolute"),
                A2($elm$html$Html$Attributes$style, "width", "600px"),
                A2($elm$html$Html$Attributes$style, "height", "100vh"),
                A2($elm$html$Html$Attributes$style, "padding-left", "calc(50% - 300px)"),
                A2($elm$html$Html$Attributes$style, "padding-right", "calc(50% - 300px)"),
                A2($elm$html$Html$Attributes$style, "background-color", "rgba(200, 200, 200, 0.7)"),
                A2($elm$html$Html$Attributes$style, "pointer-events", "auto")
            ]), _List_fromArray([
                A2($elm$html$Html$div, _List_fromArray([
                    A2($elm$html$Html$Attributes$style, "font-size", "36px"),
                    A2($elm$html$Html$Attributes$style, "height", "80px"),
                    A2($elm$html$Html$Attributes$style, "background-color", "rgb(50, 50, 50)"),
                    A2($elm$html$Html$Attributes$style, "padding-left", "22px"),
                    A2($elm$html$Html$Attributes$style, "vertical-align", "middle"),
                    A2($elm$html$Html$Attributes$style, "line-height", "80px")
                ]), _List_fromArray([
                    $elm$html$Html$text(title1)
                ])),
                A2($elm$html$Html$div, _List_fromArray([
                    $elm$html$Html$Attributes$id("elm-debugger-details"),
                    A2($elm$html$Html$Attributes$style, "padding", " 8px 20px"),
                    A2($elm$html$Html$Attributes$style, "overflow-y", "auto"),
                    A2($elm$html$Html$Attributes$style, "max-height", "calc(100vh - 156px)"),
                    A2($elm$html$Html$Attributes$style, "background-color", "rgb(61, 61, 61)")
                ]), details1),
                A2($elm$html$Html$map, config1.wrap, $elm$browser$Debugger$Overlay$viewButtons(buttons1))
            ]))
        ]));
    });
    var $elm$virtual_dom$VirtualDom$attribute = F2(function(key1, value1) {
        return A2(_VirtualDom_attribute, _VirtualDom_noOnOrFormAction(key1), _VirtualDom_noJavaScriptOrHtmlUri(value1));
    });
    var $elm$core$Basics$negate = function(n2) {
        return -n2;
    };
    var $elm$virtual_dom$VirtualDom$nodeNS = F2(function(namespace1, tag3) {
        return A2(_VirtualDom_nodeNS, namespace1, _VirtualDom_noScript(tag3));
    });
    var $elm$core$String$fromFloat = _String_fromNumber;
    var $elm$browser$Debugger$Overlay$viewShape = F4(function(x1, y1, angle1, coordinates1) {
        return A4($elm$virtual_dom$VirtualDom$nodeNS, "http://www.w3.org/2000/svg", "polygon", _List_fromArray([
            A2($elm$virtual_dom$VirtualDom$attribute, "points", coordinates1),
            A2($elm$virtual_dom$VirtualDom$attribute, "transform", "translate(" + ($elm$core$String$fromFloat(x1) + (" " + ($elm$core$String$fromFloat(y1) + (") rotate(" + ($elm$core$String$fromFloat(-angle1) + ")"))))))
        ]), _List_Nil);
    });
    var $elm$browser$Debugger$Overlay$elmLogo = A4($elm$virtual_dom$VirtualDom$nodeNS, "http://www.w3.org/2000/svg", "svg", _List_fromArray([
        A2($elm$virtual_dom$VirtualDom$attribute, "viewBox", "-300 -300 600 600"),
        A2($elm$virtual_dom$VirtualDom$attribute, "xmlns", "http://www.w3.org/2000/svg"),
        A2($elm$virtual_dom$VirtualDom$attribute, "fill", "currentColor"),
        A2($elm$virtual_dom$VirtualDom$attribute, "width", "24px"),
        A2($elm$virtual_dom$VirtualDom$attribute, "height", "24px")
    ]), _List_fromArray([
        A4($elm$virtual_dom$VirtualDom$nodeNS, "http://www.w3.org/2000/svg", "g", _List_fromArray([
            A2($elm$virtual_dom$VirtualDom$attribute, "transform", "scale(1 -1)")
        ]), _List_fromArray([
            A4($elm$browser$Debugger$Overlay$viewShape, 0, -210, 0, "-280,-90 0,190 280,-90"),
            A4($elm$browser$Debugger$Overlay$viewShape, -210, 0, 90, "-280,-90 0,190 280,-90"),
            A4($elm$browser$Debugger$Overlay$viewShape, 207, 207, 45, "-198,-66 0,132 198,-66"),
            A4($elm$browser$Debugger$Overlay$viewShape, 150, 0, 0, "-130,0 0,-130 130,0 0,130"),
            A4($elm$browser$Debugger$Overlay$viewShape, -89, 239, 0, "-191,61 69,61 191,-61 -69,-61"),
            A4($elm$browser$Debugger$Overlay$viewShape, 0, 106, 180, "-130,-44 0,86  130,-44"),
            A4($elm$browser$Debugger$Overlay$viewShape, 256, -150, 270, "-130,-44 0,86  130,-44")
        ]))
    ]));
    var $elm$core$String$length = _String_length;
    var $elm$browser$Debugger$Overlay$viewMiniControls = F2(function(config1, numMsgs1) {
        var string1 = $elm$core$String$fromInt(numMsgs1);
        var width1 = $elm$core$String$fromInt(2 + $elm$core$String$length(string1));
        return A2($elm$html$Html$div, _List_fromArray([
            A2($elm$html$Html$Attributes$style, "position", "fixed"),
            A2($elm$html$Html$Attributes$style, "bottom", "2em"),
            A2($elm$html$Html$Attributes$style, "right", "2em"),
            A2($elm$html$Html$Attributes$style, "width", "calc(42px + " + (width1 + "ch)")),
            A2($elm$html$Html$Attributes$style, "height", "36px"),
            A2($elm$html$Html$Attributes$style, "background-color", "#1293D8"),
            A2($elm$html$Html$Attributes$style, "color", "white"),
            A2($elm$html$Html$Attributes$style, "font-family", "monospace"),
            A2($elm$html$Html$Attributes$style, "pointer-events", "auto"),
            A2($elm$html$Html$Attributes$style, "z-index", "2147483647"),
            A2($elm$html$Html$Attributes$style, "display", "flex"),
            A2($elm$html$Html$Attributes$style, "justify-content", "center"),
            A2($elm$html$Html$Attributes$style, "align-items", "center"),
            A2($elm$html$Html$Attributes$style, "cursor", "pointer"),
            $elm$html$Html$Events$onClick(config1.open)
        ]), _List_fromArray([
            $elm$browser$Debugger$Overlay$elmLogo,
            A2($elm$html$Html$span, _List_fromArray([
                A2($elm$html$Html$Attributes$style, "padding-left", "calc(1ch + 6px)"),
                A2($elm$html$Html$Attributes$style, "padding-right", "1ch")
            ]), _List_fromArray([
                $elm$html$Html$text(string1)
            ]))
        ]));
    });
    var $elm$browser$Debugger$Overlay$explanationBad = "\nThe messages in this history do not match the messages handled by your\nprogram. I noticed changes in the following types:\n";
    var $elm$browser$Debugger$Overlay$explanationRisky = "\nThis history seems old. It will work with this program, but some\nmessages have been added since the history was created:\n";
    var $elm$core$List$intersperse = F2(function(sep1, xs1) {
        if (!xs1.b) return _List_Nil;
        else {
            var hd1 = xs1.a;
            var tl1 = xs1.b;
            var step1 = F2(function(x1, rest1) {
                return A2($elm$core$List$cons, sep1, A2($elm$core$List$cons, x1, rest1));
            });
            var spersed1 = A3($elm$core$List$foldr, step1, _List_Nil, tl1);
            return A2($elm$core$List$cons, hd1, spersed1);
        }
    });
    var $elm$browser$Debugger$Overlay$viewMention = F2(function(tags1, verbed1) {
        var _v01 = A2($elm$core$List$map, $elm$browser$Debugger$Overlay$viewCode, $elm$core$List$reverse(tags1));
        if (!_v01.b) return $elm$html$Html$text("");
        else {
            if (!_v01.b.b) {
                var tag3 = _v01.a;
                return A2($elm$html$Html$li, _List_Nil, _List_fromArray([
                    $elm$html$Html$text(verbed1),
                    tag3,
                    $elm$html$Html$text(".")
                ]));
            } else if (!_v01.b.b.b) {
                var tag21 = _v01.a;
                var _v13 = _v01.b;
                var tag11 = _v13.a;
                return A2($elm$html$Html$li, _List_Nil, _List_fromArray([
                    $elm$html$Html$text(verbed1),
                    tag11,
                    $elm$html$Html$text(" and "),
                    tag21,
                    $elm$html$Html$text(".")
                ]));
            } else {
                var lastTag1 = _v01.a;
                var otherTags1 = _v01.b;
                return A2($elm$html$Html$li, _List_Nil, A2($elm$core$List$cons, $elm$html$Html$text(verbed1), _Utils_ap(A2($elm$core$List$intersperse, $elm$html$Html$text(", "), $elm$core$List$reverse(otherTags1)), _List_fromArray([
                    $elm$html$Html$text(", and "),
                    lastTag1,
                    $elm$html$Html$text(".")
                ]))));
            }
        }
    });
    var $elm$browser$Debugger$Overlay$viewChange = function(change1) {
        return A2($elm$html$Html$li, _List_fromArray([
            A2($elm$html$Html$Attributes$style, "margin", "8px 0")
        ]), function() {
            if (change1.$ === "AliasChange") {
                var name1 = change1.a;
                return _List_fromArray([
                    A2($elm$html$Html$span, _List_fromArray([
                        A2($elm$html$Html$Attributes$style, "font-size", "1.5em")
                    ]), _List_fromArray([
                        $elm$browser$Debugger$Overlay$viewCode(name1)
                    ]))
                ]);
            } else {
                var name1 = change1.a;
                var removed1 = change1.b.removed;
                var changed1 = change1.b.changed;
                var added1 = change1.b.added;
                var argsMatch1 = change1.b.argsMatch;
                return _List_fromArray([
                    A2($elm$html$Html$span, _List_fromArray([
                        A2($elm$html$Html$Attributes$style, "font-size", "1.5em")
                    ]), _List_fromArray([
                        $elm$browser$Debugger$Overlay$viewCode(name1)
                    ])),
                    A2($elm$html$Html$ul, _List_fromArray([
                        A2($elm$html$Html$Attributes$style, "list-style-type", "disc"),
                        A2($elm$html$Html$Attributes$style, "padding-left", "2em")
                    ]), _List_fromArray([
                        A2($elm$browser$Debugger$Overlay$viewMention, removed1, "Removed "),
                        A2($elm$browser$Debugger$Overlay$viewMention, changed1, "Changed "),
                        A2($elm$browser$Debugger$Overlay$viewMention, added1, "Added ")
                    ])),
                    argsMatch1 ? $elm$html$Html$text("") : $elm$html$Html$text("This may be due to the fact that the type variable names changed.")
                ]);
            }
        }());
    };
    var $elm$browser$Debugger$Overlay$viewReport = F2(function(isBad1, report1) {
        switch(report1.$){
            case "CorruptHistory":
                return _List_fromArray([
                    $elm$html$Html$text("Looks like this history file is corrupt. I cannot understand it.")
                ]);
            case "VersionChanged":
                var old1 = report1.a;
                var _new1 = report1.b;
                return _List_fromArray([
                    $elm$html$Html$text("This history was created with Elm " + (old1 + (", but you are using Elm " + (_new1 + " right now."))))
                ]);
            case "MessageChanged":
                var old1 = report1.a;
                var _new1 = report1.b;
                return _List_fromArray([
                    $elm$html$Html$text("To import some other history, the overall message type must be the same. The old history has "),
                    $elm$browser$Debugger$Overlay$viewCode(old1),
                    $elm$html$Html$text(" messages, but the new program works with "),
                    $elm$browser$Debugger$Overlay$viewCode(_new1),
                    $elm$html$Html$text(" messages.")
                ]);
            default:
                var changes1 = report1.a;
                return _List_fromArray([
                    A2($elm$html$Html$p, _List_Nil, _List_fromArray([
                        $elm$html$Html$text(isBad1 ? $elm$browser$Debugger$Overlay$explanationBad : $elm$browser$Debugger$Overlay$explanationRisky)
                    ])),
                    A2($elm$html$Html$ul, _List_fromArray([
                        A2($elm$html$Html$Attributes$style, "list-style-type", "none"),
                        A2($elm$html$Html$Attributes$style, "padding-left", "20px")
                    ]), A2($elm$core$List$map, $elm$browser$Debugger$Overlay$viewChange, changes1))
                ]);
        }
    });
    var $elm$browser$Debugger$Overlay$view = F5(function(config1, isPaused1, isOpen1, numMsgs1, state3) {
        switch(state3.$){
            case "None":
                return isOpen1 ? $elm$html$Html$text("") : isPaused1 ? A2($elm$html$Html$div, _List_fromArray([
                    $elm$html$Html$Attributes$id("elm-debugger-overlay"),
                    A2($elm$html$Html$Attributes$style, "position", "fixed"),
                    A2($elm$html$Html$Attributes$style, "top", "0"),
                    A2($elm$html$Html$Attributes$style, "left", "0"),
                    A2($elm$html$Html$Attributes$style, "width", "100vw"),
                    A2($elm$html$Html$Attributes$style, "height", "100vh"),
                    A2($elm$html$Html$Attributes$style, "cursor", "pointer"),
                    A2($elm$html$Html$Attributes$style, "display", "flex"),
                    A2($elm$html$Html$Attributes$style, "align-items", "center"),
                    A2($elm$html$Html$Attributes$style, "justify-content", "center"),
                    A2($elm$html$Html$Attributes$style, "pointer-events", "auto"),
                    A2($elm$html$Html$Attributes$style, "background-color", "rgba(200, 200, 200, 0.7)"),
                    A2($elm$html$Html$Attributes$style, "color", "white"),
                    A2($elm$html$Html$Attributes$style, "font-family", "'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif"),
                    A2($elm$html$Html$Attributes$style, "z-index", "2147483646"),
                    $elm$html$Html$Events$onClick(config1.resume)
                ]), _List_fromArray([
                    A2($elm$html$Html$span, _List_fromArray([
                        A2($elm$html$Html$Attributes$style, "font-size", "80px")
                    ]), _List_fromArray([
                        $elm$html$Html$text("Click to Resume")
                    ])),
                    A2($elm$browser$Debugger$Overlay$viewMiniControls, config1, numMsgs1)
                ])) : A2($elm$browser$Debugger$Overlay$viewMiniControls, config1, numMsgs1);
            case "BadMetadata":
                var badMetadata_1 = state3.a;
                return A4($elm$browser$Debugger$Overlay$viewMessage, config1, "Cannot use Import or Export", $elm$browser$Debugger$Overlay$viewBadMetadata(badMetadata_1), $elm$browser$Debugger$Overlay$Accept("Ok"));
            case "BadImport":
                var report1 = state3.a;
                return A4($elm$browser$Debugger$Overlay$viewMessage, config1, "Cannot Import History", A2($elm$browser$Debugger$Overlay$viewReport, true, report1), $elm$browser$Debugger$Overlay$Accept("Ok"));
            default:
                var report1 = state3.a;
                return A4($elm$browser$Debugger$Overlay$viewMessage, config1, "Warning", A2($elm$browser$Debugger$Overlay$viewReport, false, report1), A2($elm$browser$Debugger$Overlay$Choose, "Cancel", "Import Anyway"));
        }
    });
    var $elm$browser$Debugger$Main$cornerView = function(model1) {
        return A5($elm$browser$Debugger$Overlay$view, {
            exportHistory: $elm$browser$Debugger$Main$Export,
            importHistory: $elm$browser$Debugger$Main$Import,
            open: $elm$browser$Debugger$Main$Open,
            resume: $elm$browser$Debugger$Main$Resume,
            wrap: $elm$browser$Debugger$Main$OverlayMsg
        }, $elm$browser$Debugger$Main$isPaused(model1.state), _Debugger_isOpen(model1.popout), $elm$browser$Debugger$History$size(model1.history), model1.overlay);
    };
    var $elm$core$Dict$RBEmpty_elm_builtin = {
        $: "RBEmpty_elm_builtin"
    };
    var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
    var $elm$core$Set$foldr = F3(function(func1, initialState1, _v01) {
        var dict1 = _v01.a;
        return A3($elm$core$Dict$foldr, F3(function(key1, _v13, state3) {
            return A2(func1, key1, state3);
        }), initialState1, dict1);
    });
    var $elm$browser$Debugger$Main$getCurrentModel = function(state3) {
        if (state3.$ === "Running") {
            var model1 = state3.a;
            return model1;
        } else {
            var model1 = state3.b;
            return model1;
        }
    };
    var $elm$browser$Debugger$Main$getUserModel = function(model1) {
        return $elm$browser$Debugger$Main$getCurrentModel(model1.state);
    };
    var $elm$browser$Debugger$Main$initialWindowHeight = 420;
    var $elm$browser$Debugger$Main$initialWindowWidth = 900;
    var $elm$core$Dict$Black = {
        $: "Black"
    };
    var $elm$core$Dict$RBNode_elm_builtin = F5(function(a1, b1, c1, d9, e1) {
        return {
            $: "RBNode_elm_builtin",
            a: a1,
            b: b1,
            c: c1,
            d: d9,
            e: e1
        };
    });
    var $elm$core$Dict$Red = {
        $: "Red"
    };
    var $elm$core$Dict$balance = F5(function(color1, key1, value1, left1, right1) {
        if (right1.$ === "RBNode_elm_builtin" && right1.a.$ === "Red") {
            var _v13 = right1.a;
            var rK1 = right1.b;
            var rV1 = right1.c;
            var rLeft1 = right1.d;
            var rRight1 = right1.e;
            if (left1.$ === "RBNode_elm_builtin" && left1.a.$ === "Red") {
                var _v31 = left1.a;
                var lK1 = left1.b;
                var lV1 = left1.c;
                var lLeft1 = left1.d;
                var lRight1 = left1.e;
                return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key1, value1, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK1, lV1, lLeft1, lRight1), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK1, rV1, rLeft1, rRight1));
            } else return A5($elm$core$Dict$RBNode_elm_builtin, color1, rK1, rV1, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key1, value1, left1, rLeft1), rRight1);
        } else {
            if (left1.$ === "RBNode_elm_builtin" && left1.a.$ === "Red" && left1.d.$ === "RBNode_elm_builtin" && left1.d.a.$ === "Red") {
                var _v51 = left1.a;
                var lK1 = left1.b;
                var lV1 = left1.c;
                var _v61 = left1.d;
                var _v71 = _v61.a;
                var llK1 = _v61.b;
                var llV1 = _v61.c;
                var llLeft1 = _v61.d;
                var llRight1 = _v61.e;
                var lRight1 = left1.e;
                return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK1, lV1, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK1, llV1, llLeft1, llRight1), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key1, value1, lRight1, right1));
            } else return A5($elm$core$Dict$RBNode_elm_builtin, color1, key1, value1, left1, right1);
        }
    });
    var $elm$core$Basics$compare = _Utils_compare;
    var $elm$core$Dict$insertHelp = F3(function(key1, value1, dict1) {
        if (dict1.$ === "RBEmpty_elm_builtin") return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key1, value1, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
        else {
            var nColor1 = dict1.a;
            var nKey1 = dict1.b;
            var nValue1 = dict1.c;
            var nLeft1 = dict1.d;
            var nRight1 = dict1.e;
            var _v13 = A2($elm$core$Basics$compare, key1, nKey1);
            switch(_v13.$){
                case "LT":
                    return A5($elm$core$Dict$balance, nColor1, nKey1, nValue1, A3($elm$core$Dict$insertHelp, key1, value1, nLeft1), nRight1);
                case "EQ":
                    return A5($elm$core$Dict$RBNode_elm_builtin, nColor1, nKey1, value1, nLeft1, nRight1);
                default:
                    return A5($elm$core$Dict$balance, nColor1, nKey1, nValue1, nLeft1, A3($elm$core$Dict$insertHelp, key1, value1, nRight1));
            }
        }
    });
    var $elm$core$Dict$insert = F3(function(key1, value1, dict1) {
        var _v01 = A3($elm$core$Dict$insertHelp, key1, value1, dict1);
        if (_v01.$ === "RBNode_elm_builtin" && _v01.a.$ === "Red") {
            var _v13 = _v01.a;
            var k1 = _v01.b;
            var v1 = _v01.c;
            var l1 = _v01.d;
            var r5 = _v01.e;
            return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k1, v1, l1, r5);
        } else {
            var x1 = _v01;
            return x1;
        }
    });
    var $elm$browser$Debugger$Main$cachedHistory = function(model1) {
        var _v01 = model1.state;
        if (_v01.$ === "Running") return model1.history;
        else {
            var history1 = _v01.e;
            return history1;
        }
    };
    var $elm$virtual_dom$VirtualDom$node = function(tag3) {
        return _VirtualDom_node(_VirtualDom_noScript(tag3));
    };
    var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
    var $elm$browser$Debugger$Main$DragEnd = {
        $: "DragEnd"
    };
    var $elm$browser$Debugger$Main$getDragStatus = function(layout1) {
        if (layout1.$ === "Horizontal") {
            var status1 = layout1.a;
            return status1;
        } else {
            var status1 = layout1.a;
            return status1;
        }
    };
    var $elm$browser$Debugger$Main$Drag = function(a1) {
        return {
            $: "Drag",
            a: a1
        };
    };
    var $elm$browser$Debugger$Main$DragInfo = F5(function(x1, y1, down1, width1, height1) {
        return {
            down: down1,
            height: height1,
            width: width1,
            x: x1,
            y: y1
        };
    });
    var $elm$json$Json$Decode$field = _Json_decodeField;
    var $elm$json$Json$Decode$at = F2(function(fields1, decoder1) {
        return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder1, fields1);
    });
    var $elm$json$Json$Decode$float = _Json_decodeFloat;
    var $elm$browser$Debugger$Main$decodeDimension = function(field1) {
        return A2($elm$json$Json$Decode$at, _List_fromArray([
            "currentTarget",
            "ownerDocument",
            "defaultView",
            field1
        ]), $elm$json$Json$Decode$float);
    };
    var $elm$json$Json$Decode$int = _Json_decodeInt;
    var $elm$json$Json$Decode$map5 = _Json_map5;
    var $elm$browser$Debugger$Main$onMouseMove = A2($elm$html$Html$Events$on, "mousemove", A2($elm$json$Json$Decode$map, $elm$browser$Debugger$Main$Drag, A6($elm$json$Json$Decode$map5, $elm$browser$Debugger$Main$DragInfo, A2($elm$json$Json$Decode$field, "pageX", $elm$json$Json$Decode$float), A2($elm$json$Json$Decode$field, "pageY", $elm$json$Json$Decode$float), A2($elm$json$Json$Decode$field, "buttons", A2($elm$json$Json$Decode$map, function(v1) {
        return v1 === 1;
    }, $elm$json$Json$Decode$int)), $elm$browser$Debugger$Main$decodeDimension("innerWidth"), $elm$browser$Debugger$Main$decodeDimension("innerHeight"))));
    var $elm$html$Html$Events$onMouseUp = function(msg1) {
        return A2($elm$html$Html$Events$on, "mouseup", $elm$json$Json$Decode$succeed(msg1));
    };
    var $elm$browser$Debugger$Main$toDragListeners = function(layout1) {
        var _v01 = $elm$browser$Debugger$Main$getDragStatus(layout1);
        if (_v01.$ === "Static") return _List_Nil;
        else return _List_fromArray([
            $elm$browser$Debugger$Main$onMouseMove,
            $elm$html$Html$Events$onMouseUp($elm$browser$Debugger$Main$DragEnd)
        ]);
    };
    var $elm$browser$Debugger$Main$toFlexDirection = function(layout1) {
        if (layout1.$ === "Horizontal") return "row";
        else return "column-reverse";
    };
    var $elm$browser$Debugger$Main$DragStart = {
        $: "DragStart"
    };
    var $elm$html$Html$Events$onMouseDown = function(msg1) {
        return A2($elm$html$Html$Events$on, "mousedown", $elm$json$Json$Decode$succeed(msg1));
    };
    var $elm$browser$Debugger$Main$toPercent = function(fraction1) {
        return $elm$core$String$fromFloat(100 * fraction1) + "%";
    };
    var $elm$browser$Debugger$Main$viewDragZone = function(layout1) {
        if (layout1.$ === "Horizontal") {
            var x1 = layout1.b;
            return A2($elm$html$Html$div, _List_fromArray([
                A2($elm$html$Html$Attributes$style, "position", "absolute"),
                A2($elm$html$Html$Attributes$style, "top", "0"),
                A2($elm$html$Html$Attributes$style, "left", $elm$browser$Debugger$Main$toPercent(x1)),
                A2($elm$html$Html$Attributes$style, "margin-left", "-5px"),
                A2($elm$html$Html$Attributes$style, "width", "10px"),
                A2($elm$html$Html$Attributes$style, "height", "100%"),
                A2($elm$html$Html$Attributes$style, "cursor", "col-resize"),
                $elm$html$Html$Events$onMouseDown($elm$browser$Debugger$Main$DragStart)
            ]), _List_Nil);
        } else {
            var y1 = layout1.c;
            return A2($elm$html$Html$div, _List_fromArray([
                A2($elm$html$Html$Attributes$style, "position", "absolute"),
                A2($elm$html$Html$Attributes$style, "top", $elm$browser$Debugger$Main$toPercent(y1)),
                A2($elm$html$Html$Attributes$style, "left", "0"),
                A2($elm$html$Html$Attributes$style, "margin-top", "-5px"),
                A2($elm$html$Html$Attributes$style, "width", "100%"),
                A2($elm$html$Html$Attributes$style, "height", "10px"),
                A2($elm$html$Html$Attributes$style, "cursor", "row-resize"),
                $elm$html$Html$Events$onMouseDown($elm$browser$Debugger$Main$DragStart)
            ]), _List_Nil);
        }
    };
    var $elm$browser$Debugger$Main$TweakExpandoModel = function(a1) {
        return {
            $: "TweakExpandoModel",
            a: a1
        };
    };
    var $elm$browser$Debugger$Main$TweakExpandoMsg = function(a1) {
        return {
            $: "TweakExpandoMsg",
            a: a1
        };
    };
    var $elm$browser$Debugger$Main$toExpandoPercents = function(layout1) {
        if (layout1.$ === "Horizontal") {
            var x1 = layout1.b;
            return _Utils_Tuple2($elm$browser$Debugger$Main$toPercent(1 - x1), "100%");
        } else {
            var y1 = layout1.c;
            return _Utils_Tuple2("100%", $elm$browser$Debugger$Main$toPercent(y1));
        }
    };
    var $elm$browser$Debugger$Main$toMouseBlocker = function(layout1) {
        var _v01 = $elm$browser$Debugger$Main$getDragStatus(layout1);
        if (_v01.$ === "Static") return "auto";
        else return "none";
    };
    var $elm$browser$Debugger$Expando$Field = F2(function(a1, b1) {
        return {
            $: "Field",
            a: a1,
            b: b1
        };
    });
    var $elm$browser$Debugger$Expando$Index = F3(function(a1, b1, c1) {
        return {
            $: "Index",
            a: a1,
            b: b1,
            c: c1
        };
    });
    var $elm$browser$Debugger$Expando$Key = {
        $: "Key"
    };
    var $elm$browser$Debugger$Expando$None = {
        $: "None"
    };
    var $elm$browser$Debugger$Expando$Toggle = {
        $: "Toggle"
    };
    var $elm$browser$Debugger$Expando$Value = {
        $: "Value"
    };
    var $elm$browser$Debugger$Expando$blue = A2($elm$html$Html$Attributes$style, "color", "rgb(28, 0, 207)");
    var $elm$core$Basics$composeL = F3(function(g1, f1, x1) {
        return g1(f1(x1));
    });
    var $elm$browser$Debugger$Expando$leftPad = function(maybeKey1) {
        if (maybeKey1.$ === "Nothing") return _List_Nil;
        else return _List_fromArray([
            A2($elm$html$Html$Attributes$style, "padding-left", "4ch")
        ]);
    };
    var $elm$browser$Debugger$Expando$makeArrow = function(arrow1) {
        return A2($elm$html$Html$span, _List_fromArray([
            A2($elm$html$Html$Attributes$style, "color", "#777"),
            A2($elm$html$Html$Attributes$style, "padding-left", "2ch"),
            A2($elm$html$Html$Attributes$style, "width", "2ch"),
            A2($elm$html$Html$Attributes$style, "display", "inline-block")
        ]), _List_fromArray([
            $elm$html$Html$text(arrow1)
        ]));
    };
    var $elm$browser$Debugger$Expando$purple = A2($elm$html$Html$Attributes$style, "color", "rgb(136, 19, 145)");
    var $elm$browser$Debugger$Expando$lineStarter = F3(function(maybeKey1, maybeIsClosed1, description1) {
        var arrow1 = function() {
            if (maybeIsClosed1.$ === "Nothing") return $elm$browser$Debugger$Expando$makeArrow("");
            else {
                if (maybeIsClosed1.a) return $elm$browser$Debugger$Expando$makeArrow("\u25B8");
                else return $elm$browser$Debugger$Expando$makeArrow("\u25BE");
            }
        }();
        if (maybeKey1.$ === "Nothing") return A2($elm$core$List$cons, arrow1, description1);
        else {
            var key1 = maybeKey1.a;
            return A2($elm$core$List$cons, arrow1, A2($elm$core$List$cons, A2($elm$html$Html$span, _List_fromArray([
                $elm$browser$Debugger$Expando$purple
            ]), _List_fromArray([
                $elm$html$Html$text(key1)
            ])), A2($elm$core$List$cons, $elm$html$Html$text(" = "), description1)));
        }
    });
    var $elm$browser$Debugger$Expando$red = A2($elm$html$Html$Attributes$style, "color", "rgb(196, 26, 22)");
    var $elm$core$Tuple$second = function(_v01) {
        var y1 = _v01.b;
        return y1;
    };
    var $elm$browser$Debugger$Expando$seqTypeToString = F2(function(n2, seqType1) {
        switch(seqType1.$){
            case "ListSeq":
                return "List(" + ($elm$core$String$fromInt(n2) + ")");
            case "SetSeq":
                return "Set(" + ($elm$core$String$fromInt(n2) + ")");
            default:
                return "Array(" + ($elm$core$String$fromInt(n2) + ")");
        }
    });
    var $elm$core$String$slice = _String_slice;
    var $elm$core$String$left = F2(function(n2, string1) {
        return n2 < 1 ? "" : A3($elm$core$String$slice, 0, n2, string1);
    });
    var $elm$core$String$right = F2(function(n2, string1) {
        return n2 < 1 ? "" : A3($elm$core$String$slice, -n2, $elm$core$String$length(string1), string1);
    });
    var $elm$browser$Debugger$Expando$elideMiddle = function(str1) {
        return $elm$core$String$length(str1) <= 18 ? str1 : A2($elm$core$String$left, 8, str1) + ("..." + A2($elm$core$String$right, 8, str1));
    };
    var $elm$core$Dict$isEmpty = function(dict1) {
        if (dict1.$ === "RBEmpty_elm_builtin") return true;
        else return false;
    };
    var $elm$browser$Debugger$Expando$viewExtraTinyRecord = F3(function(length1, starter1, entries1) {
        if (!entries1.b) return _Utils_Tuple2(length1 + 1, _List_fromArray([
            $elm$html$Html$text("}")
        ]));
        else {
            var field1 = entries1.a;
            var rest1 = entries1.b;
            var nextLength1 = length1 + $elm$core$String$length(field1) + 1;
            if (nextLength1 > 18) return _Utils_Tuple2(length1 + 2, _List_fromArray([
                $elm$html$Html$text("\u2026}")
            ]));
            else {
                var _v13 = A3($elm$browser$Debugger$Expando$viewExtraTinyRecord, nextLength1, ",", rest1);
                var finalLength1 = _v13.a;
                var otherHtmls1 = _v13.b;
                return _Utils_Tuple2(finalLength1, A2($elm$core$List$cons, $elm$html$Html$text(starter1), A2($elm$core$List$cons, A2($elm$html$Html$span, _List_fromArray([
                    $elm$browser$Debugger$Expando$purple
                ]), _List_fromArray([
                    $elm$html$Html$text(field1)
                ])), otherHtmls1)));
            }
        }
    });
    var $elm$browser$Debugger$Expando$viewTinyHelp = function(str1) {
        return _Utils_Tuple2($elm$core$String$length(str1), _List_fromArray([
            $elm$html$Html$text(str1)
        ]));
    };
    var $elm$core$Maybe$withDefault = F2(function(_default1, maybe1) {
        if (maybe1.$ === "Just") {
            var value1 = maybe1.a;
            return value1;
        } else return _default1;
    });
    var $elm$browser$Debugger$Expando$viewExtraTiny = function(value1) {
        if (value1.$ === "Record") {
            var record1 = value1.b;
            return A3($elm$browser$Debugger$Expando$viewExtraTinyRecord, 0, "{", $elm$core$Dict$keys(record1));
        } else return $elm$browser$Debugger$Expando$viewTiny(value1);
    };
    var $elm$browser$Debugger$Expando$viewTiny = function(value1) {
        switch(value1.$){
            case "S":
                var stringRep1 = value1.a;
                var str1 = $elm$browser$Debugger$Expando$elideMiddle(stringRep1);
                return _Utils_Tuple2($elm$core$String$length(str1), _List_fromArray([
                    A2($elm$html$Html$span, _List_fromArray([
                        $elm$browser$Debugger$Expando$red
                    ]), _List_fromArray([
                        $elm$html$Html$text(str1)
                    ]))
                ]));
            case "Primitive":
                var stringRep1 = value1.a;
                return _Utils_Tuple2($elm$core$String$length(stringRep1), _List_fromArray([
                    A2($elm$html$Html$span, _List_fromArray([
                        $elm$browser$Debugger$Expando$blue
                    ]), _List_fromArray([
                        $elm$html$Html$text(stringRep1)
                    ]))
                ]));
            case "Sequence":
                var seqType1 = value1.a;
                var valueList1 = value1.c;
                return $elm$browser$Debugger$Expando$viewTinyHelp(A2($elm$browser$Debugger$Expando$seqTypeToString, $elm$core$List$length(valueList1), seqType1));
            case "Dictionary":
                var keyValuePairs1 = value1.b;
                return $elm$browser$Debugger$Expando$viewTinyHelp("Dict(" + ($elm$core$String$fromInt($elm$core$List$length(keyValuePairs1)) + ")"));
            case "Record":
                var record1 = value1.b;
                return $elm$browser$Debugger$Expando$viewTinyRecord(record1);
            default:
                if (!value1.c.b) {
                    var maybeName1 = value1.a;
                    return $elm$browser$Debugger$Expando$viewTinyHelp(A2($elm$core$Maybe$withDefault, "Unit", maybeName1));
                } else {
                    var maybeName1 = value1.a;
                    var valueList1 = value1.c;
                    return $elm$browser$Debugger$Expando$viewTinyHelp(function() {
                        if (maybeName1.$ === "Nothing") return "Tuple(" + ($elm$core$String$fromInt($elm$core$List$length(valueList1)) + ")");
                        else {
                            var name1 = maybeName1.a;
                            return name1 + " \u2026";
                        }
                    }());
                }
        }
    };
    var $elm$browser$Debugger$Expando$viewTinyRecord = function(record1) {
        return $elm$core$Dict$isEmpty(record1) ? _Utils_Tuple2(2, _List_fromArray([
            $elm$html$Html$text("{}")
        ])) : A3($elm$browser$Debugger$Expando$viewTinyRecordHelp, 0, "{ ", $elm$core$Dict$toList(record1));
    };
    var $elm$browser$Debugger$Expando$viewTinyRecordHelp = F3(function(length1, starter1, entries1) {
        if (!entries1.b) return _Utils_Tuple2(length1 + 2, _List_fromArray([
            $elm$html$Html$text(" }")
        ]));
        else {
            var _v13 = entries1.a;
            var field1 = _v13.a;
            var value1 = _v13.b;
            var rest1 = entries1.b;
            var fieldLen1 = $elm$core$String$length(field1);
            var _v21 = $elm$browser$Debugger$Expando$viewExtraTiny(value1);
            var valueLen1 = _v21.a;
            var valueHtmls1 = _v21.b;
            var newLength1 = length1 + fieldLen1 + valueLen1 + 5;
            if (newLength1 > 60) return _Utils_Tuple2(length1 + 4, _List_fromArray([
                $elm$html$Html$text(", \u2026 }")
            ]));
            else {
                var _v31 = A3($elm$browser$Debugger$Expando$viewTinyRecordHelp, newLength1, ", ", rest1);
                var finalLength1 = _v31.a;
                var otherHtmls1 = _v31.b;
                return _Utils_Tuple2(finalLength1, A2($elm$core$List$cons, $elm$html$Html$text(starter1), A2($elm$core$List$cons, A2($elm$html$Html$span, _List_fromArray([
                    $elm$browser$Debugger$Expando$purple
                ]), _List_fromArray([
                    $elm$html$Html$text(field1)
                ])), A2($elm$core$List$cons, $elm$html$Html$text(" = "), A2($elm$core$List$cons, A2($elm$html$Html$span, _List_Nil, valueHtmls1), otherHtmls1)))));
            }
        }
    });
    var $elm$browser$Debugger$Expando$view = F2(function(maybeKey1, expando1) {
        switch(expando1.$){
            case "S":
                var stringRep1 = expando1.a;
                return A2($elm$html$Html$div, $elm$browser$Debugger$Expando$leftPad(maybeKey1), A3($elm$browser$Debugger$Expando$lineStarter, maybeKey1, $elm$core$Maybe$Nothing, _List_fromArray([
                    A2($elm$html$Html$span, _List_fromArray([
                        $elm$browser$Debugger$Expando$red
                    ]), _List_fromArray([
                        $elm$html$Html$text(stringRep1)
                    ]))
                ])));
            case "Primitive":
                var stringRep1 = expando1.a;
                return A2($elm$html$Html$div, $elm$browser$Debugger$Expando$leftPad(maybeKey1), A3($elm$browser$Debugger$Expando$lineStarter, maybeKey1, $elm$core$Maybe$Nothing, _List_fromArray([
                    A2($elm$html$Html$span, _List_fromArray([
                        $elm$browser$Debugger$Expando$blue
                    ]), _List_fromArray([
                        $elm$html$Html$text(stringRep1)
                    ]))
                ])));
            case "Sequence":
                var seqType1 = expando1.a;
                var isClosed1 = expando1.b;
                var valueList1 = expando1.c;
                return A4($elm$browser$Debugger$Expando$viewSequence, maybeKey1, seqType1, isClosed1, valueList1);
            case "Dictionary":
                var isClosed1 = expando1.a;
                var keyValuePairs1 = expando1.b;
                return A3($elm$browser$Debugger$Expando$viewDictionary, maybeKey1, isClosed1, keyValuePairs1);
            case "Record":
                var isClosed1 = expando1.a;
                var valueDict1 = expando1.b;
                return A3($elm$browser$Debugger$Expando$viewRecord, maybeKey1, isClosed1, valueDict1);
            default:
                var maybeName1 = expando1.a;
                var isClosed1 = expando1.b;
                var valueList1 = expando1.c;
                return A4($elm$browser$Debugger$Expando$viewConstructor, maybeKey1, maybeName1, isClosed1, valueList1);
        }
    });
    var $elm$browser$Debugger$Expando$viewConstructor = F4(function(maybeKey1, maybeName1, isClosed1, valueList1) {
        var tinyArgs1 = A2($elm$core$List$map, A2($elm$core$Basics$composeL, $elm$core$Tuple$second, $elm$browser$Debugger$Expando$viewExtraTiny), valueList1);
        var description1 = function() {
            var _v71 = _Utils_Tuple2(maybeName1, tinyArgs1);
            if (_v71.a.$ === "Nothing") {
                if (!_v71.b.b) {
                    var _v81 = _v71.a;
                    return _List_fromArray([
                        $elm$html$Html$text("()")
                    ]);
                } else {
                    var _v91 = _v71.a;
                    var _v101 = _v71.b;
                    var x1 = _v101.a;
                    var xs1 = _v101.b;
                    return A2($elm$core$List$cons, $elm$html$Html$text("( "), A2($elm$core$List$cons, A2($elm$html$Html$span, _List_Nil, x1), A3($elm$core$List$foldr, F2(function(args1, rest1) {
                        return A2($elm$core$List$cons, $elm$html$Html$text(", "), A2($elm$core$List$cons, A2($elm$html$Html$span, _List_Nil, args1), rest1));
                    }), _List_fromArray([
                        $elm$html$Html$text(" )")
                    ]), xs1)));
                }
            } else if (!_v71.b.b) {
                var name1 = _v71.a.a;
                return _List_fromArray([
                    $elm$html$Html$text(name1)
                ]);
            } else {
                var name1 = _v71.a.a;
                var _v111 = _v71.b;
                var x1 = _v111.a;
                var xs1 = _v111.b;
                return A2($elm$core$List$cons, $elm$html$Html$text(name1 + " "), A2($elm$core$List$cons, A2($elm$html$Html$span, _List_Nil, x1), A3($elm$core$List$foldr, F2(function(args1, rest1) {
                    return A2($elm$core$List$cons, $elm$html$Html$text(" "), A2($elm$core$List$cons, A2($elm$html$Html$span, _List_Nil, args1), rest1));
                }), _List_Nil, xs1)));
            }
        }();
        var _v41 = function() {
            if (!valueList1.b) return _Utils_Tuple2($elm$core$Maybe$Nothing, A2($elm$html$Html$div, _List_Nil, _List_Nil));
            else {
                if (!valueList1.b.b) {
                    var entry1 = valueList1.a;
                    switch(entry1.$){
                        case "S":
                            return _Utils_Tuple2($elm$core$Maybe$Nothing, A2($elm$html$Html$div, _List_Nil, _List_Nil));
                        case "Primitive":
                            return _Utils_Tuple2($elm$core$Maybe$Nothing, A2($elm$html$Html$div, _List_Nil, _List_Nil));
                        case "Sequence":
                            var subValueList1 = entry1.c;
                            return _Utils_Tuple2($elm$core$Maybe$Just(isClosed1), isClosed1 ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2($elm$html$Html$map, A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0), $elm$browser$Debugger$Expando$viewSequenceOpen(subValueList1)));
                        case "Dictionary":
                            var keyValuePairs1 = entry1.b;
                            return _Utils_Tuple2($elm$core$Maybe$Just(isClosed1), isClosed1 ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2($elm$html$Html$map, A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0), $elm$browser$Debugger$Expando$viewDictionaryOpen(keyValuePairs1)));
                        case "Record":
                            var record1 = entry1.b;
                            return _Utils_Tuple2($elm$core$Maybe$Just(isClosed1), isClosed1 ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2($elm$html$Html$map, A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0), $elm$browser$Debugger$Expando$viewRecordOpen(record1)));
                        default:
                            var subValueList1 = entry1.c;
                            return _Utils_Tuple2($elm$core$Maybe$Just(isClosed1), isClosed1 ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2($elm$html$Html$map, A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0), $elm$browser$Debugger$Expando$viewConstructorOpen(subValueList1)));
                    }
                } else return _Utils_Tuple2($elm$core$Maybe$Just(isClosed1), isClosed1 ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : $elm$browser$Debugger$Expando$viewConstructorOpen(valueList1));
            }
        }();
        var maybeIsClosed1 = _v41.a;
        var openHtml1 = _v41.b;
        return A2($elm$html$Html$div, $elm$browser$Debugger$Expando$leftPad(maybeKey1), _List_fromArray([
            A2($elm$html$Html$div, _List_fromArray([
                $elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
            ]), A3($elm$browser$Debugger$Expando$lineStarter, maybeKey1, maybeIsClosed1, description1)),
            openHtml1
        ]));
    });
    var $elm$browser$Debugger$Expando$viewConstructorEntry = F2(function(index1, value1) {
        return A2($elm$html$Html$map, A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, index1), A2($elm$browser$Debugger$Expando$view, $elm$core$Maybe$Just($elm$core$String$fromInt(index1)), value1));
    });
    var $elm$browser$Debugger$Expando$viewConstructorOpen = function(valueList1) {
        return A2($elm$html$Html$div, _List_Nil, A2($elm$core$List$indexedMap, $elm$browser$Debugger$Expando$viewConstructorEntry, valueList1));
    };
    var $elm$browser$Debugger$Expando$viewDictionary = F3(function(maybeKey1, isClosed1, keyValuePairs1) {
        var starter1 = "Dict(" + ($elm$core$String$fromInt($elm$core$List$length(keyValuePairs1)) + ")");
        return A2($elm$html$Html$div, $elm$browser$Debugger$Expando$leftPad(maybeKey1), _List_fromArray([
            A2($elm$html$Html$div, _List_fromArray([
                $elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
            ]), A3($elm$browser$Debugger$Expando$lineStarter, maybeKey1, $elm$core$Maybe$Just(isClosed1), _List_fromArray([
                $elm$html$Html$text(starter1)
            ]))),
            isClosed1 ? $elm$html$Html$text("") : $elm$browser$Debugger$Expando$viewDictionaryOpen(keyValuePairs1)
        ]));
    });
    var $elm$browser$Debugger$Expando$viewDictionaryEntry = F2(function(index1, _v21) {
        var key1 = _v21.a;
        var value1 = _v21.b;
        switch(key1.$){
            case "S":
                var stringRep1 = key1.a;
                return A2($elm$html$Html$map, A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Value, index1), A2($elm$browser$Debugger$Expando$view, $elm$core$Maybe$Just(stringRep1), value1));
            case "Primitive":
                var stringRep1 = key1.a;
                return A2($elm$html$Html$map, A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Value, index1), A2($elm$browser$Debugger$Expando$view, $elm$core$Maybe$Just(stringRep1), value1));
            default:
                return A2($elm$html$Html$div, _List_Nil, _List_fromArray([
                    A2($elm$html$Html$map, A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Key, index1), A2($elm$browser$Debugger$Expando$view, $elm$core$Maybe$Just("key"), key1)),
                    A2($elm$html$Html$map, A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Value, index1), A2($elm$browser$Debugger$Expando$view, $elm$core$Maybe$Just("value"), value1))
                ]));
        }
    });
    var $elm$browser$Debugger$Expando$viewDictionaryOpen = function(keyValuePairs1) {
        return A2($elm$html$Html$div, _List_Nil, A2($elm$core$List$indexedMap, $elm$browser$Debugger$Expando$viewDictionaryEntry, keyValuePairs1));
    };
    var $elm$browser$Debugger$Expando$viewRecord = F3(function(maybeKey1, isClosed1, record1) {
        var _v13 = isClosed1 ? _Utils_Tuple3($elm$browser$Debugger$Expando$viewTinyRecord(record1).b, $elm$html$Html$text(""), $elm$html$Html$text("")) : _Utils_Tuple3(_List_fromArray([
            $elm$html$Html$text("{")
        ]), $elm$browser$Debugger$Expando$viewRecordOpen(record1), A2($elm$html$Html$div, $elm$browser$Debugger$Expando$leftPad($elm$core$Maybe$Just(_Utils_Tuple0)), _List_fromArray([
            $elm$html$Html$text("}")
        ])));
        var start1 = _v13.a;
        var middle1 = _v13.b;
        var end1 = _v13.c;
        return A2($elm$html$Html$div, $elm$browser$Debugger$Expando$leftPad(maybeKey1), _List_fromArray([
            A2($elm$html$Html$div, _List_fromArray([
                $elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
            ]), A3($elm$browser$Debugger$Expando$lineStarter, maybeKey1, $elm$core$Maybe$Just(isClosed1), start1)),
            middle1,
            end1
        ]));
    });
    var $elm$browser$Debugger$Expando$viewRecordEntry = function(_v01) {
        var field1 = _v01.a;
        var value1 = _v01.b;
        return A2($elm$html$Html$map, $elm$browser$Debugger$Expando$Field(field1), A2($elm$browser$Debugger$Expando$view, $elm$core$Maybe$Just(field1), value1));
    };
    var $elm$browser$Debugger$Expando$viewRecordOpen = function(record1) {
        return A2($elm$html$Html$div, _List_Nil, A2($elm$core$List$map, $elm$browser$Debugger$Expando$viewRecordEntry, $elm$core$Dict$toList(record1)));
    };
    var $elm$browser$Debugger$Expando$viewSequence = F4(function(maybeKey1, seqType1, isClosed1, valueList1) {
        var starter1 = A2($elm$browser$Debugger$Expando$seqTypeToString, $elm$core$List$length(valueList1), seqType1);
        return A2($elm$html$Html$div, $elm$browser$Debugger$Expando$leftPad(maybeKey1), _List_fromArray([
            A2($elm$html$Html$div, _List_fromArray([
                $elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
            ]), A3($elm$browser$Debugger$Expando$lineStarter, maybeKey1, $elm$core$Maybe$Just(isClosed1), _List_fromArray([
                $elm$html$Html$text(starter1)
            ]))),
            isClosed1 ? $elm$html$Html$text("") : $elm$browser$Debugger$Expando$viewSequenceOpen(valueList1)
        ]));
    });
    var $elm$browser$Debugger$Expando$viewSequenceOpen = function(values1) {
        return A2($elm$html$Html$div, _List_Nil, A2($elm$core$List$indexedMap, $elm$browser$Debugger$Expando$viewConstructorEntry, values1));
    };
    var $elm$browser$Debugger$Main$viewExpando = F3(function(expandoMsg1, expandoModel1, layout1) {
        var block1 = $elm$browser$Debugger$Main$toMouseBlocker(layout1);
        var _v01 = $elm$browser$Debugger$Main$toExpandoPercents(layout1);
        var w1 = _v01.a;
        var h1 = _v01.b;
        return A2($elm$html$Html$div, _List_fromArray([
            A2($elm$html$Html$Attributes$style, "display", "block"),
            A2($elm$html$Html$Attributes$style, "width", "calc(" + (w1 + " - 4em)")),
            A2($elm$html$Html$Attributes$style, "height", "calc(" + (h1 + " - 4em)")),
            A2($elm$html$Html$Attributes$style, "padding", "2em"),
            A2($elm$html$Html$Attributes$style, "margin", "0"),
            A2($elm$html$Html$Attributes$style, "overflow", "auto"),
            A2($elm$html$Html$Attributes$style, "pointer-events", block1),
            A2($elm$html$Html$Attributes$style, "-webkit-user-select", block1),
            A2($elm$html$Html$Attributes$style, "-moz-user-select", block1),
            A2($elm$html$Html$Attributes$style, "-ms-user-select", block1),
            A2($elm$html$Html$Attributes$style, "user-select", block1)
        ]), _List_fromArray([
            A2($elm$html$Html$div, _List_fromArray([
                A2($elm$html$Html$Attributes$style, "color", "#ccc"),
                A2($elm$html$Html$Attributes$style, "padding", "0 0 1em 0")
            ]), _List_fromArray([
                $elm$html$Html$text("-- MESSAGE")
            ])),
            A2($elm$html$Html$map, $elm$browser$Debugger$Main$TweakExpandoMsg, A2($elm$browser$Debugger$Expando$view, $elm$core$Maybe$Nothing, expandoMsg1)),
            A2($elm$html$Html$div, _List_fromArray([
                A2($elm$html$Html$Attributes$style, "color", "#ccc"),
                A2($elm$html$Html$Attributes$style, "padding", "1em 0")
            ]), _List_fromArray([
                $elm$html$Html$text("-- MODEL")
            ])),
            A2($elm$html$Html$map, $elm$browser$Debugger$Main$TweakExpandoModel, A2($elm$browser$Debugger$Expando$view, $elm$core$Maybe$Nothing, expandoModel1))
        ]));
    });
    var $elm$browser$Debugger$Main$Jump = function(a1) {
        return {
            $: "Jump",
            a: a1
        };
    };
    var $elm$virtual_dom$VirtualDom$lazy = _VirtualDom_lazy;
    var $elm$html$Html$Lazy$lazy = $elm$virtual_dom$VirtualDom$lazy;
    var $elm$browser$Debugger$Main$toHistoryPercents = function(layout1) {
        if (layout1.$ === "Horizontal") {
            var x1 = layout1.b;
            return _Utils_Tuple2($elm$browser$Debugger$Main$toPercent(x1), "100%");
        } else {
            var y1 = layout1.c;
            return _Utils_Tuple2("100%", $elm$browser$Debugger$Main$toPercent(1 - y1));
        }
    };
    var $elm$virtual_dom$VirtualDom$lazy3 = _VirtualDom_lazy3;
    var $elm$html$Html$Lazy$lazy3 = $elm$virtual_dom$VirtualDom$lazy3;
    var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty("className");
    var $elm$browser$Debugger$History$idForMessageIndex = function(index1) {
        return "msg-" + $elm$core$String$fromInt(index1);
    };
    var $elm$html$Html$Attributes$title = $elm$html$Html$Attributes$stringProperty("title");
    var $elm$browser$Debugger$History$viewMessage = F3(function(currentIndex1, index1, msg1) {
        var messageName1 = _Debugger_messageToString(msg1);
        var className1 = _Utils_eq(currentIndex1, index1) ? "elm-debugger-entry elm-debugger-entry-selected" : "elm-debugger-entry";
        return A2($elm$html$Html$div, _List_fromArray([
            $elm$html$Html$Attributes$id($elm$browser$Debugger$History$idForMessageIndex(index1)),
            $elm$html$Html$Attributes$class(className1),
            $elm$html$Html$Events$onClick(index1)
        ]), _List_fromArray([
            A2($elm$html$Html$span, _List_fromArray([
                $elm$html$Html$Attributes$title(messageName1),
                $elm$html$Html$Attributes$class("elm-debugger-entry-content")
            ]), _List_fromArray([
                $elm$html$Html$text(messageName1)
            ])),
            A2($elm$html$Html$span, _List_fromArray([
                $elm$html$Html$Attributes$class("elm-debugger-entry-index")
            ]), _List_fromArray([
                $elm$html$Html$text($elm$core$String$fromInt(index1))
            ]))
        ]));
    });
    var $elm$browser$Debugger$History$consMsg = F3(function(currentIndex1, msg1, _v01) {
        var index1 = _v01.a;
        var rest1 = _v01.b;
        return _Utils_Tuple2(index1 + 1, A2($elm$core$List$cons, _Utils_Tuple2($elm$core$String$fromInt(index1), A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewMessage, currentIndex1, index1, msg1)), rest1));
    });
    var $elm$core$Array$length = function(_v01) {
        var len1 = _v01.a;
        return len1;
    };
    var $elm$core$Basics$neq = _Utils_notEqual;
    var $elm$virtual_dom$VirtualDom$keyedNode = function(tag3) {
        return _VirtualDom_keyedNode(_VirtualDom_noScript(tag3));
    };
    var $elm$html$Html$Keyed$node = $elm$virtual_dom$VirtualDom$keyedNode;
    var $elm$browser$Debugger$History$maxSnapshotSize = 31;
    var $elm$browser$Debugger$History$showMoreButton = function(numMessages1) {
        var nextIndex1 = numMessages1 - 1 - $elm$browser$Debugger$History$maxSnapshotSize * 2;
        var labelText1 = "View more messages";
        return A2($elm$html$Html$div, _List_fromArray([
            $elm$html$Html$Attributes$class("elm-debugger-entry"),
            $elm$html$Html$Events$onClick(nextIndex1)
        ]), _List_fromArray([
            A2($elm$html$Html$span, _List_fromArray([
                $elm$html$Html$Attributes$title(labelText1),
                $elm$html$Html$Attributes$class("elm-debugger-entry-content")
            ]), _List_fromArray([
                $elm$html$Html$text(labelText1)
            ])),
            A2($elm$html$Html$span, _List_fromArray([
                $elm$html$Html$Attributes$class("elm-debugger-entry-index")
            ]), _List_Nil)
        ]));
    };
    var $elm$browser$Debugger$History$styles = A3($elm$html$Html$node, "style", _List_Nil, _List_fromArray([
        $elm$html$Html$text("\n\n.elm-debugger-entry {\n  cursor: pointer;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 8px;\n}\n\n.elm-debugger-entry:hover {\n  background-color: rgb(41, 41, 41);\n}\n\n.elm-debugger-entry-selected, .elm-debugger-entry-selected:hover {\n  background-color: rgb(10, 10, 10);\n}\n\n.elm-debugger-entry-content {\n  width: calc(100% - 40px);\n  padding: 0 5px;\n  box-sizing: border-box;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.elm-debugger-entry-index {\n  color: #666;\n  width: 40px;\n  text-align: right;\n  display: block;\n  float: right;\n}\n\n")
    ]));
    var $elm$core$Basics$ge = _Utils_ge;
    var $elm$browser$Debugger$History$viewSnapshot = F3(function(selectedIndex1, index1, _v01) {
        var messages1 = _v01.messages;
        return A3($elm$html$Html$Keyed$node, "div", _List_Nil, A3($elm$core$Array$foldr, $elm$browser$Debugger$History$consMsg(selectedIndex1), _Utils_Tuple2(index1, _List_Nil), messages1).b);
    });
    var $elm$browser$Debugger$History$consSnapshot = F3(function(selectedIndex1, snapshot1, _v01) {
        var index1 = _v01.a;
        var rest1 = _v01.b;
        var nextIndex1 = index1 + $elm$core$Array$length(snapshot1.messages);
        var selectedIndexHelp1 = _Utils_cmp(nextIndex1, selectedIndex1) > 0 && _Utils_cmp(selectedIndex1, index1) > -1 ? selectedIndex1 : -1;
        return _Utils_Tuple2(nextIndex1, A2($elm$core$List$cons, A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewSnapshot, selectedIndexHelp1, index1, snapshot1), rest1));
    });
    var $elm$core$Elm$JsArray$foldl = _JsArray_foldl;
    var $elm$core$Array$foldl = F3(function(func1, baseCase1, _v01) {
        var tree1 = _v01.c;
        var tail1 = _v01.d;
        var helper1 = F2(function(node1, acc1) {
            if (node1.$ === "SubTree") {
                var subTree1 = node1.a;
                return A3($elm$core$Elm$JsArray$foldl, helper1, acc1, subTree1);
            } else {
                var values1 = node1.a;
                return A3($elm$core$Elm$JsArray$foldl, func1, acc1, values1);
            }
        });
        return A3($elm$core$Elm$JsArray$foldl, func1, A3($elm$core$Elm$JsArray$foldl, helper1, baseCase1, tree1), tail1);
    });
    var $elm$browser$Debugger$History$viewAllSnapshots = F3(function(selectedIndex1, startIndex1, snapshots1) {
        return A2($elm$html$Html$div, _List_Nil, A3($elm$core$Array$foldl, $elm$browser$Debugger$History$consSnapshot(selectedIndex1), _Utils_Tuple2(startIndex1, _List_Nil), snapshots1).b);
    });
    var $elm$core$Array$fromListHelp = F3(function(list1, nodeList1, nodeListSize1) {
        fromListHelp: while(true){
            var _v01 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, list1);
            var jsArray1 = _v01.a;
            var remainingItems1 = _v01.b;
            if (_Utils_cmp($elm$core$Elm$JsArray$length(jsArray1), $elm$core$Array$branchFactor) < 0) return A2($elm$core$Array$builderToArray, true, {
                nodeList: nodeList1,
                nodeListSize: nodeListSize1,
                tail: jsArray1
            });
            else {
                var $temp$list1 = remainingItems1, $temp$nodeList1 = A2($elm$core$List$cons, $elm$core$Array$Leaf(jsArray1), nodeList1), $temp$nodeListSize1 = nodeListSize1 + 1;
                list1 = $temp$list1;
                nodeList1 = $temp$nodeList1;
                nodeListSize1 = $temp$nodeListSize1;
                continue fromListHelp;
            }
        }
    });
    var $elm$core$Array$fromList = function(list1) {
        if (!list1.b) return $elm$core$Array$empty;
        else return A3($elm$core$Array$fromListHelp, list1, _List_Nil, 0);
    };
    var $elm$core$Bitwise$and = _Bitwise_and;
    var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
    var $elm$core$Array$bitMask = 4294967295 >>> 32 - $elm$core$Array$shiftStep;
    var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
    var $elm$core$Array$getHelp = F3(function(shift1, index1, tree1) {
        getHelp: while(true){
            var pos1 = $elm$core$Array$bitMask & index1 >>> shift1;
            var _v01 = A2($elm$core$Elm$JsArray$unsafeGet, pos1, tree1);
            if (_v01.$ === "SubTree") {
                var subTree1 = _v01.a;
                var $temp$shift1 = shift1 - $elm$core$Array$shiftStep, $temp$index1 = index1, $temp$tree1 = subTree1;
                shift1 = $temp$shift1;
                index1 = $temp$index1;
                tree1 = $temp$tree1;
                continue getHelp;
            } else {
                var values1 = _v01.a;
                return A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index1, values1);
            }
        }
    });
    var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
    var $elm$core$Array$tailIndex = function(len1) {
        return len1 >>> 5 << 5;
    };
    var $elm$core$Array$get = F2(function(index1, _v01) {
        var len1 = _v01.a;
        var startShift1 = _v01.b;
        var tree1 = _v01.c;
        var tail1 = _v01.d;
        return index1 < 0 || _Utils_cmp(index1, len1) > -1 ? $elm$core$Maybe$Nothing : _Utils_cmp(index1, $elm$core$Array$tailIndex(len1)) > -1 ? $elm$core$Maybe$Just(A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index1, tail1)) : $elm$core$Maybe$Just(A3($elm$core$Array$getHelp, startShift1, index1, tree1));
    });
    var $elm$core$Elm$JsArray$appendN = _JsArray_appendN;
    var $elm$core$Elm$JsArray$slice = _JsArray_slice;
    var $elm$core$Array$appendHelpBuilder = F2(function(tail1, builder1) {
        var tailLen1 = $elm$core$Elm$JsArray$length(tail1);
        var notAppended1 = $elm$core$Array$branchFactor - $elm$core$Elm$JsArray$length(builder1.tail) - tailLen1;
        var appended1 = A3($elm$core$Elm$JsArray$appendN, $elm$core$Array$branchFactor, builder1.tail, tail1);
        return notAppended1 < 0 ? {
            nodeList: A2($elm$core$List$cons, $elm$core$Array$Leaf(appended1), builder1.nodeList),
            nodeListSize: builder1.nodeListSize + 1,
            tail: A3($elm$core$Elm$JsArray$slice, notAppended1, tailLen1, tail1)
        } : !notAppended1 ? {
            nodeList: A2($elm$core$List$cons, $elm$core$Array$Leaf(appended1), builder1.nodeList),
            nodeListSize: builder1.nodeListSize + 1,
            tail: $elm$core$Elm$JsArray$empty
        } : {
            nodeList: builder1.nodeList,
            nodeListSize: builder1.nodeListSize,
            tail: appended1
        };
    });
    var $elm$core$List$drop = F2(function(n2, list1) {
        drop: while(true){
            if (n2 <= 0) return list1;
            else {
                if (!list1.b) return list1;
                else {
                    var x1 = list1.a;
                    var xs1 = list1.b;
                    var $temp$n1 = n2 - 1, $temp$list1 = xs1;
                    n2 = $temp$n1;
                    list1 = $temp$list1;
                    continue drop;
                }
            }
        }
    });
    var $elm$core$Array$sliceLeft = F2(function(from1, array1) {
        var len1 = array1.a;
        var tree1 = array1.c;
        var tail1 = array1.d;
        if (!from1) return array1;
        else {
            if (_Utils_cmp(from1, $elm$core$Array$tailIndex(len1)) > -1) return A4($elm$core$Array$Array_elm_builtin, len1 - from1, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, A3($elm$core$Elm$JsArray$slice, from1 - $elm$core$Array$tailIndex(len1), $elm$core$Elm$JsArray$length(tail1), tail1));
            else {
                var skipNodes1 = from1 / $elm$core$Array$branchFactor | 0;
                var helper1 = F2(function(node1, acc1) {
                    if (node1.$ === "SubTree") {
                        var subTree1 = node1.a;
                        return A3($elm$core$Elm$JsArray$foldr, helper1, acc1, subTree1);
                    } else {
                        var leaf1 = node1.a;
                        return A2($elm$core$List$cons, leaf1, acc1);
                    }
                });
                var leafNodes1 = A3($elm$core$Elm$JsArray$foldr, helper1, _List_fromArray([
                    tail1
                ]), tree1);
                var nodesToInsert1 = A2($elm$core$List$drop, skipNodes1, leafNodes1);
                if (!nodesToInsert1.b) return $elm$core$Array$empty;
                else {
                    var head1 = nodesToInsert1.a;
                    var rest1 = nodesToInsert1.b;
                    var firstSlice1 = from1 - skipNodes1 * $elm$core$Array$branchFactor;
                    var initialBuilder1 = {
                        nodeList: _List_Nil,
                        nodeListSize: 0,
                        tail: A3($elm$core$Elm$JsArray$slice, firstSlice1, $elm$core$Elm$JsArray$length(head1), head1)
                    };
                    return A2($elm$core$Array$builderToArray, true, A3($elm$core$List$foldl, $elm$core$Array$appendHelpBuilder, initialBuilder1, rest1));
                }
            }
        }
    });
    var $elm$core$Array$fetchNewTail = F4(function(shift1, end1, treeEnd1, tree1) {
        fetchNewTail: while(true){
            var pos1 = $elm$core$Array$bitMask & treeEnd1 >>> shift1;
            var _v01 = A2($elm$core$Elm$JsArray$unsafeGet, pos1, tree1);
            if (_v01.$ === "SubTree") {
                var sub1 = _v01.a;
                var $temp$shift1 = shift1 - $elm$core$Array$shiftStep, $temp$end1 = end1, $temp$treeEnd1 = treeEnd1, $temp$tree1 = sub1;
                shift1 = $temp$shift1;
                end1 = $temp$end1;
                treeEnd1 = $temp$treeEnd1;
                tree1 = $temp$tree1;
                continue fetchNewTail;
            } else {
                var values1 = _v01.a;
                return A3($elm$core$Elm$JsArray$slice, 0, $elm$core$Array$bitMask & end1, values1);
            }
        }
    });
    var $elm$core$Array$hoistTree = F3(function(oldShift1, newShift1, tree1) {
        hoistTree: while(true){
            if (_Utils_cmp(oldShift1, newShift1) < 1 || !$elm$core$Elm$JsArray$length(tree1)) return tree1;
            else {
                var _v01 = A2($elm$core$Elm$JsArray$unsafeGet, 0, tree1);
                if (_v01.$ === "SubTree") {
                    var sub1 = _v01.a;
                    var $temp$oldShift1 = oldShift1 - $elm$core$Array$shiftStep, $temp$newShift1 = newShift1, $temp$tree1 = sub1;
                    oldShift1 = $temp$oldShift1;
                    newShift1 = $temp$newShift1;
                    tree1 = $temp$tree1;
                    continue hoistTree;
                } else return tree1;
            }
        }
    });
    var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
    var $elm$core$Array$sliceTree = F3(function(shift1, endIdx1, tree1) {
        var lastPos1 = $elm$core$Array$bitMask & endIdx1 >>> shift1;
        var _v01 = A2($elm$core$Elm$JsArray$unsafeGet, lastPos1, tree1);
        if (_v01.$ === "SubTree") {
            var sub1 = _v01.a;
            var newSub1 = A3($elm$core$Array$sliceTree, shift1 - $elm$core$Array$shiftStep, endIdx1, sub1);
            return !$elm$core$Elm$JsArray$length(newSub1) ? A3($elm$core$Elm$JsArray$slice, 0, lastPos1, tree1) : A3($elm$core$Elm$JsArray$unsafeSet, lastPos1, $elm$core$Array$SubTree(newSub1), A3($elm$core$Elm$JsArray$slice, 0, lastPos1 + 1, tree1));
        } else return A3($elm$core$Elm$JsArray$slice, 0, lastPos1, tree1);
    });
    var $elm$core$Array$sliceRight = F2(function(end1, array1) {
        var len1 = array1.a;
        var startShift1 = array1.b;
        var tree1 = array1.c;
        var tail1 = array1.d;
        if (_Utils_eq(end1, len1)) return array1;
        else {
            if (_Utils_cmp(end1, $elm$core$Array$tailIndex(len1)) > -1) return A4($elm$core$Array$Array_elm_builtin, end1, startShift1, tree1, A3($elm$core$Elm$JsArray$slice, 0, $elm$core$Array$bitMask & end1, tail1));
            else {
                var endIdx1 = $elm$core$Array$tailIndex(end1);
                var depth1 = $elm$core$Basics$floor(A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, A2($elm$core$Basics$max, 1, endIdx1 - 1)));
                var newShift1 = A2($elm$core$Basics$max, 5, depth1 * $elm$core$Array$shiftStep);
                return A4($elm$core$Array$Array_elm_builtin, end1, newShift1, A3($elm$core$Array$hoistTree, startShift1, newShift1, A3($elm$core$Array$sliceTree, startShift1, endIdx1, tree1)), A4($elm$core$Array$fetchNewTail, startShift1, end1, endIdx1, tree1));
            }
        }
    });
    var $elm$core$Array$translateIndex = F2(function(index1, _v01) {
        var len1 = _v01.a;
        var posIndex1 = index1 < 0 ? len1 + index1 : index1;
        return posIndex1 < 0 ? 0 : _Utils_cmp(posIndex1, len1) > 0 ? len1 : posIndex1;
    });
    var $elm$core$Array$slice = F3(function(from1, to1, array1) {
        var correctTo1 = A2($elm$core$Array$translateIndex, to1, array1);
        var correctFrom1 = A2($elm$core$Array$translateIndex, from1, array1);
        return _Utils_cmp(correctFrom1, correctTo1) > 0 ? $elm$core$Array$empty : A2($elm$core$Array$sliceLeft, correctFrom1, A2($elm$core$Array$sliceRight, correctTo1, array1));
    });
    var $elm$browser$Debugger$History$viewRecentSnapshots = F3(function(selectedIndex1, recentMessagesNum1, snapshots1) {
        var messagesToFill1 = $elm$browser$Debugger$History$maxSnapshotSize - recentMessagesNum1;
        var arrayLength1 = $elm$core$Array$length(snapshots1);
        var snapshotsToRender1 = function() {
            var _v01 = _Utils_Tuple2(A2($elm$core$Array$get, arrayLength1 - 2, snapshots1), A2($elm$core$Array$get, arrayLength1 - 1, snapshots1));
            if (_v01.a.$ === "Just" && _v01.b.$ === "Just") {
                var fillerSnapshot1 = _v01.a.a;
                var recentSnapshot1 = _v01.b.a;
                return $elm$core$Array$fromList(_List_fromArray([
                    {
                        messages: A3($elm$core$Array$slice, 0, messagesToFill1, fillerSnapshot1.messages),
                        model: fillerSnapshot1.model
                    },
                    recentSnapshot1
                ]));
            } else return snapshots1;
        }();
        var startingIndex1 = arrayLength1 * $elm$browser$Debugger$History$maxSnapshotSize - $elm$browser$Debugger$History$maxSnapshotSize - messagesToFill1;
        return A3($elm$browser$Debugger$History$viewAllSnapshots, selectedIndex1, startingIndex1, snapshotsToRender1);
    });
    var $elm$browser$Debugger$History$view = F2(function(maybeIndex1, _v01) {
        var snapshots1 = _v01.snapshots;
        var recent1 = _v01.recent;
        var numMessages1 = _v01.numMessages;
        var recentMessageStartIndex1 = numMessages1 - recent1.numMessages;
        var index1 = A2($elm$core$Maybe$withDefault, -1, maybeIndex1);
        var newStuff1 = A3($elm$html$Html$Keyed$node, "div", _List_Nil, A3($elm$core$List$foldr, $elm$browser$Debugger$History$consMsg(index1), _Utils_Tuple2(recentMessageStartIndex1, _List_Nil), recent1.messages).b);
        var onlyRenderRecentMessages1 = !_Utils_eq(index1, -1) || $elm$core$Array$length(snapshots1) < 2;
        var oldStuff1 = onlyRenderRecentMessages1 ? A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewAllSnapshots, index1, 0, snapshots1) : A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewRecentSnapshots, index1, recent1.numMessages, snapshots1);
        return A2($elm$html$Html$div, _List_fromArray([
            $elm$html$Html$Attributes$id("elm-debugger-sidebar"),
            A2($elm$html$Html$Attributes$style, "width", "100%"),
            A2($elm$html$Html$Attributes$style, "overflow-y", "auto"),
            A2($elm$html$Html$Attributes$style, "height", "calc(100% - 72px)")
        ]), A2($elm$core$List$cons, $elm$browser$Debugger$History$styles, A2($elm$core$List$cons, newStuff1, A2($elm$core$List$cons, oldStuff1, onlyRenderRecentMessages1 ? _List_Nil : _List_fromArray([
            $elm$browser$Debugger$History$showMoreButton(numMessages1)
        ])))));
    });
    var $elm$browser$Debugger$Main$SwapLayout = {
        $: "SwapLayout"
    };
    var $elm$browser$Debugger$Main$toHistoryIcon = function(layout1) {
        if (layout1.$ === "Horizontal") return "M13 1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z M13 3h-10a1 1 0 0 0-1 1v5h12v-5a1 1 0 0 0-1-1z M14 10h-12v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z";
        else return "M0 4a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3z M2 4v8a1 1 0 0 0 1 1h2v-10h-2a1 1 0 0 0-1 1z M6 3v10h7a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1z";
    };
    var $elm$browser$Debugger$Main$icon = function(path1) {
        return A4($elm$virtual_dom$VirtualDom$nodeNS, "http://www.w3.org/2000/svg", "svg", _List_fromArray([
            A2($elm$virtual_dom$VirtualDom$attribute, "viewBox", "0 0 16 16"),
            A2($elm$virtual_dom$VirtualDom$attribute, "xmlns", "http://www.w3.org/2000/svg"),
            A2($elm$virtual_dom$VirtualDom$attribute, "fill", "currentColor"),
            A2($elm$virtual_dom$VirtualDom$attribute, "width", "16px"),
            A2($elm$virtual_dom$VirtualDom$attribute, "height", "16px")
        ]), _List_fromArray([
            A4($elm$virtual_dom$VirtualDom$nodeNS, "http://www.w3.org/2000/svg", "path", _List_fromArray([
                A2($elm$virtual_dom$VirtualDom$attribute, "d", path1)
            ]), _List_Nil)
        ]));
    };
    var $elm$browser$Debugger$Main$viewHistoryButton = F3(function(label1, msg1, path1) {
        return A2($elm$html$Html$button, _List_fromArray([
            A2($elm$html$Html$Attributes$style, "display", "flex"),
            A2($elm$html$Html$Attributes$style, "flex-direction", "row"),
            A2($elm$html$Html$Attributes$style, "align-items", "center"),
            A2($elm$html$Html$Attributes$style, "background", "none"),
            A2($elm$html$Html$Attributes$style, "border", "none"),
            A2($elm$html$Html$Attributes$style, "color", "inherit"),
            A2($elm$html$Html$Attributes$style, "cursor", "pointer"),
            $elm$html$Html$Events$onClick(msg1)
        ]), _List_fromArray([
            $elm$browser$Debugger$Main$icon(path1),
            A2($elm$html$Html$span, _List_fromArray([
                A2($elm$html$Html$Attributes$style, "padding-left", "6px")
            ]), _List_fromArray([
                $elm$html$Html$text(label1)
            ]))
        ]));
    });
    var $elm$browser$Debugger$Main$viewHistoryOptions = function(layout1) {
        return A2($elm$html$Html$div, _List_fromArray([
            A2($elm$html$Html$Attributes$style, "width", "100%"),
            A2($elm$html$Html$Attributes$style, "height", "36px"),
            A2($elm$html$Html$Attributes$style, "display", "flex"),
            A2($elm$html$Html$Attributes$style, "flex-direction", "row"),
            A2($elm$html$Html$Attributes$style, "align-items", "center"),
            A2($elm$html$Html$Attributes$style, "justify-content", "space-between"),
            A2($elm$html$Html$Attributes$style, "background-color", "rgb(50, 50, 50)")
        ]), _List_fromArray([
            A3($elm$browser$Debugger$Main$viewHistoryButton, "Swap Layout", $elm$browser$Debugger$Main$SwapLayout, $elm$browser$Debugger$Main$toHistoryIcon(layout1)),
            A2($elm$html$Html$div, _List_fromArray([
                A2($elm$html$Html$Attributes$style, "display", "flex"),
                A2($elm$html$Html$Attributes$style, "flex-direction", "row"),
                A2($elm$html$Html$Attributes$style, "align-items", "center"),
                A2($elm$html$Html$Attributes$style, "justify-content", "space-between")
            ]), _List_fromArray([
                A3($elm$browser$Debugger$Main$viewHistoryButton, "Import", $elm$browser$Debugger$Main$Import, "M5 1a1 1 0 0 1 0 2h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1a1 1 0 0 1 2 0a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z M10 2a1 1 0 0 0 -2 0v6a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2h-3.586l4.293-4.293a1 1 0 0 0-1.414-1.414l-4.293 4.293z"),
                A3($elm$browser$Debugger$Main$viewHistoryButton, "Export", $elm$browser$Debugger$Main$Export, "M5 1a1 1 0 0 1 0 2h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1 a1 1 0 0 1 2 0a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z M9 3a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-3.586l-5.293 5.293 a1 1 0 0 1-1.414-1.414l5.293 -5.293z")
            ]))
        ]));
    };
    var $elm$browser$Debugger$Main$SliderJump = function(a1) {
        return {
            $: "SliderJump",
            a: a1
        };
    };
    var $elm$core$Basics$composeR = F3(function(f1, g1, x1) {
        return g1(f1(x1));
    });
    var $elm$html$Html$input = _VirtualDom_node("input");
    var $elm$browser$Debugger$Main$isPlaying = function(maybeIndex1) {
        if (maybeIndex1.$ === "Nothing") return true;
        else return false;
    };
    var $elm$html$Html$Attributes$max = $elm$html$Html$Attributes$stringProperty("max");
    var $elm$html$Html$Attributes$min = $elm$html$Html$Attributes$stringProperty("min");
    var $elm$html$Html$Events$alwaysStop = function(x1) {
        return _Utils_Tuple2(x1, true);
    };
    var $elm$virtual_dom$VirtualDom$MayStopPropagation = function(a1) {
        return {
            $: "MayStopPropagation",
            a: a1
        };
    };
    var $elm$html$Html$Events$stopPropagationOn = F2(function(event1, decoder1) {
        return A2($elm$virtual_dom$VirtualDom$on, event1, $elm$virtual_dom$VirtualDom$MayStopPropagation(decoder1));
    });
    var $elm$json$Json$Decode$string = _Json_decodeString;
    var $elm$html$Html$Events$targetValue = A2($elm$json$Json$Decode$at, _List_fromArray([
        "target",
        "value"
    ]), $elm$json$Json$Decode$string);
    var $elm$html$Html$Events$onInput = function(tagger1) {
        return A2($elm$html$Html$Events$stopPropagationOn, "input", A2($elm$json$Json$Decode$map, $elm$html$Html$Events$alwaysStop, A2($elm$json$Json$Decode$map, tagger1, $elm$html$Html$Events$targetValue)));
    };
    var $elm$core$String$toInt = _String_toInt;
    var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty("type");
    var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty("value");
    var $elm$browser$Debugger$Main$viewPlayButton = function(playing1) {
        return A2($elm$html$Html$button, _List_fromArray([
            A2($elm$html$Html$Attributes$style, "background", "#1293D8"),
            A2($elm$html$Html$Attributes$style, "border", "none"),
            A2($elm$html$Html$Attributes$style, "color", "white"),
            A2($elm$html$Html$Attributes$style, "cursor", "pointer"),
            A2($elm$html$Html$Attributes$style, "width", "36px"),
            A2($elm$html$Html$Attributes$style, "height", "36px"),
            $elm$html$Html$Events$onClick($elm$browser$Debugger$Main$Resume)
        ]), _List_fromArray([
            playing1 ? $elm$browser$Debugger$Main$icon("M2 2h4v12h-4v-12z M10 2h4v12h-4v-12z") : $elm$browser$Debugger$Main$icon("M2 2l12 7l-12 7z")
        ]));
    };
    var $elm$browser$Debugger$Main$viewHistorySlider = F2(function(history1, maybeIndex1) {
        var lastIndex1 = $elm$browser$Debugger$History$size(history1) - 1;
        var selectedIndex1 = A2($elm$core$Maybe$withDefault, lastIndex1, maybeIndex1);
        return A2($elm$html$Html$div, _List_fromArray([
            A2($elm$html$Html$Attributes$style, "display", "flex"),
            A2($elm$html$Html$Attributes$style, "flex-direction", "row"),
            A2($elm$html$Html$Attributes$style, "align-items", "center"),
            A2($elm$html$Html$Attributes$style, "width", "100%"),
            A2($elm$html$Html$Attributes$style, "height", "36px"),
            A2($elm$html$Html$Attributes$style, "background-color", "rgb(50, 50, 50)")
        ]), _List_fromArray([
            A2($elm$html$Html$Lazy$lazy, $elm$browser$Debugger$Main$viewPlayButton, $elm$browser$Debugger$Main$isPlaying(maybeIndex1)),
            A2($elm$html$Html$input, _List_fromArray([
                $elm$html$Html$Attributes$type_("range"),
                A2($elm$html$Html$Attributes$style, "width", "calc(100% - 56px)"),
                A2($elm$html$Html$Attributes$style, "height", "36px"),
                A2($elm$html$Html$Attributes$style, "margin", "0 10px"),
                $elm$html$Html$Attributes$min("0"),
                $elm$html$Html$Attributes$max($elm$core$String$fromInt(lastIndex1)),
                $elm$html$Html$Attributes$value($elm$core$String$fromInt(selectedIndex1)),
                $elm$html$Html$Events$onInput(A2($elm$core$Basics$composeR, $elm$core$String$toInt, A2($elm$core$Basics$composeR, $elm$core$Maybe$withDefault(lastIndex1), $elm$browser$Debugger$Main$SliderJump)))
            ]), _List_Nil)
        ]));
    });
    var $elm$browser$Debugger$Main$viewHistory = F3(function(maybeIndex1, history1, layout1) {
        var block1 = $elm$browser$Debugger$Main$toMouseBlocker(layout1);
        var _v01 = $elm$browser$Debugger$Main$toHistoryPercents(layout1);
        var w1 = _v01.a;
        var h1 = _v01.b;
        return A2($elm$html$Html$div, _List_fromArray([
            A2($elm$html$Html$Attributes$style, "width", w1),
            A2($elm$html$Html$Attributes$style, "height", h1),
            A2($elm$html$Html$Attributes$style, "display", "flex"),
            A2($elm$html$Html$Attributes$style, "flex-direction", "column"),
            A2($elm$html$Html$Attributes$style, "color", "#DDDDDD"),
            A2($elm$html$Html$Attributes$style, "background-color", "rgb(61, 61, 61)"),
            A2($elm$html$Html$Attributes$style, "pointer-events", block1),
            A2($elm$html$Html$Attributes$style, "user-select", block1)
        ]), _List_fromArray([
            A2($elm$browser$Debugger$Main$viewHistorySlider, history1, maybeIndex1),
            A2($elm$html$Html$map, $elm$browser$Debugger$Main$Jump, A2($elm$browser$Debugger$History$view, maybeIndex1, history1)),
            A2($elm$html$Html$Lazy$lazy, $elm$browser$Debugger$Main$viewHistoryOptions, layout1)
        ]));
    });
    var $elm$browser$Debugger$Main$popoutView = function(model1) {
        var maybeIndex1 = function() {
            var _v01 = model1.state;
            if (_v01.$ === "Running") return $elm$core$Maybe$Nothing;
            else {
                var index1 = _v01.a;
                return $elm$core$Maybe$Just(index1);
            }
        }();
        var historyToRender1 = $elm$browser$Debugger$Main$cachedHistory(model1);
        return A3($elm$html$Html$node, "body", _Utils_ap($elm$browser$Debugger$Main$toDragListeners(model1.layout), _List_fromArray([
            A2($elm$html$Html$Attributes$style, "margin", "0"),
            A2($elm$html$Html$Attributes$style, "padding", "0"),
            A2($elm$html$Html$Attributes$style, "width", "100%"),
            A2($elm$html$Html$Attributes$style, "height", "100%"),
            A2($elm$html$Html$Attributes$style, "font-family", "monospace"),
            A2($elm$html$Html$Attributes$style, "display", "flex"),
            A2($elm$html$Html$Attributes$style, "flex-direction", $elm$browser$Debugger$Main$toFlexDirection(model1.layout))
        ])), _List_fromArray([
            A3($elm$browser$Debugger$Main$viewHistory, maybeIndex1, historyToRender1, model1.layout),
            $elm$browser$Debugger$Main$viewDragZone(model1.layout),
            A3($elm$browser$Debugger$Main$viewExpando, model1.expandoMsg, model1.expandoModel, model1.layout)
        ]));
    };
    var $elm$browser$Debugger$Overlay$BlockAll = {
        $: "BlockAll"
    };
    var $elm$browser$Debugger$Overlay$toBlockerType = F2(function(isPaused1, state3) {
        switch(state3.$){
            case "None":
                return isPaused1 ? $elm$browser$Debugger$Overlay$BlockAll : $elm$browser$Debugger$Overlay$BlockNone;
            case "BadMetadata":
                return $elm$browser$Debugger$Overlay$BlockMost;
            case "BadImport":
                return $elm$browser$Debugger$Overlay$BlockMost;
            default:
                return $elm$browser$Debugger$Overlay$BlockMost;
        }
    });
    var $elm$browser$Debugger$Main$toBlockerType = function(model1) {
        return A2($elm$browser$Debugger$Overlay$toBlockerType, $elm$browser$Debugger$Main$isPaused(model1.state), model1.overlay);
    };
    var $elm$browser$Debugger$Main$Horizontal = F3(function(a1, b1, c1) {
        return {
            $: "Horizontal",
            a: a1,
            b: b1,
            c: c1
        };
    });
    var $elm$browser$Debugger$Main$Running = function(a1) {
        return {
            $: "Running",
            a: a1
        };
    };
    var $elm$browser$Debugger$Main$Static = {
        $: "Static"
    };
    var $elm$browser$Debugger$Metadata$Error = F2(function(message1, problems1) {
        return {
            message: message1,
            problems: problems1
        };
    });
    var $elm$json$Json$Decode$decodeValue = _Json_run;
    var $elm$browser$Debugger$Metadata$Metadata = F2(function(versions1, types1) {
        return {
            types: types1,
            versions: versions1
        };
    });
    var $elm$browser$Debugger$Metadata$Types = F3(function(message1, aliases1, unions1) {
        return {
            aliases: aliases1,
            message: message1,
            unions: unions1
        };
    });
    var $elm$browser$Debugger$Metadata$Alias = F2(function(args1, tipe1) {
        return {
            args: args1,
            tipe: tipe1
        };
    });
    var $elm$json$Json$Decode$list = _Json_decodeList;
    var $elm$browser$Debugger$Metadata$decodeAlias = A3($elm$json$Json$Decode$map2, $elm$browser$Debugger$Metadata$Alias, A2($elm$json$Json$Decode$field, "args", $elm$json$Json$Decode$list($elm$json$Json$Decode$string)), A2($elm$json$Json$Decode$field, "type", $elm$json$Json$Decode$string));
    var $elm$browser$Debugger$Metadata$Union = F2(function(args1, tags1) {
        return {
            args: args1,
            tags: tags1
        };
    });
    var $elm$core$Dict$fromList = function(assocs1) {
        return A3($elm$core$List$foldl, F2(function(_v01, dict1) {
            var key1 = _v01.a;
            var value1 = _v01.b;
            return A3($elm$core$Dict$insert, key1, value1, dict1);
        }), $elm$core$Dict$empty, assocs1);
    };
    var $elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
    var $elm$json$Json$Decode$dict = function(decoder1) {
        return A2($elm$json$Json$Decode$map, $elm$core$Dict$fromList, $elm$json$Json$Decode$keyValuePairs(decoder1));
    };
    var $elm$browser$Debugger$Metadata$decodeUnion = A3($elm$json$Json$Decode$map2, $elm$browser$Debugger$Metadata$Union, A2($elm$json$Json$Decode$field, "args", $elm$json$Json$Decode$list($elm$json$Json$Decode$string)), A2($elm$json$Json$Decode$field, "tags", $elm$json$Json$Decode$dict($elm$json$Json$Decode$list($elm$json$Json$Decode$string))));
    var $elm$json$Json$Decode$map3 = _Json_map3;
    var $elm$browser$Debugger$Metadata$decodeTypes = A4($elm$json$Json$Decode$map3, $elm$browser$Debugger$Metadata$Types, A2($elm$json$Json$Decode$field, "message", $elm$json$Json$Decode$string), A2($elm$json$Json$Decode$field, "aliases", $elm$json$Json$Decode$dict($elm$browser$Debugger$Metadata$decodeAlias)), A2($elm$json$Json$Decode$field, "unions", $elm$json$Json$Decode$dict($elm$browser$Debugger$Metadata$decodeUnion)));
    var $elm$browser$Debugger$Metadata$Versions = function(elm1) {
        return {
            elm: elm1
        };
    };
    var $elm$browser$Debugger$Metadata$decodeVersions = A2($elm$json$Json$Decode$map, $elm$browser$Debugger$Metadata$Versions, A2($elm$json$Json$Decode$field, "elm", $elm$json$Json$Decode$string));
    var $elm$browser$Debugger$Metadata$decoder = A3($elm$json$Json$Decode$map2, $elm$browser$Debugger$Metadata$Metadata, A2($elm$json$Json$Decode$field, "versions", $elm$browser$Debugger$Metadata$decodeVersions), A2($elm$json$Json$Decode$field, "types", $elm$browser$Debugger$Metadata$decodeTypes));
    var $elm$browser$Debugger$Metadata$ProblemType = F2(function(name1, problems1) {
        return {
            name: name1,
            problems: problems1
        };
    });
    var $elm$core$List$maybeCons = F3(function(f1, mx1, xs1) {
        var _v01 = f1(mx1);
        if (_v01.$ === "Just") {
            var x1 = _v01.a;
            return A2($elm$core$List$cons, x1, xs1);
        } else return xs1;
    });
    var $elm$core$List$filterMap = F2(function(f1, xs1) {
        return A3($elm$core$List$foldr, $elm$core$List$maybeCons(f1), _List_Nil, xs1);
    });
    var $elm$core$String$contains = _String_contains;
    var $elm$browser$Debugger$Metadata$hasProblem = F2(function(tipe1, _v01) {
        var problem1 = _v01.a;
        var token1 = _v01.b;
        return A2($elm$core$String$contains, token1, tipe1) ? $elm$core$Maybe$Just(problem1) : $elm$core$Maybe$Nothing;
    });
    var $elm$browser$Debugger$Metadata$Decoder = {
        $: "Decoder"
    };
    var $elm$browser$Debugger$Metadata$Function = {
        $: "Function"
    };
    var $elm$browser$Debugger$Metadata$Process = {
        $: "Process"
    };
    var $elm$browser$Debugger$Metadata$Program = {
        $: "Program"
    };
    var $elm$browser$Debugger$Metadata$Request = {
        $: "Request"
    };
    var $elm$browser$Debugger$Metadata$Socket = {
        $: "Socket"
    };
    var $elm$browser$Debugger$Metadata$Task = {
        $: "Task"
    };
    var $elm$browser$Debugger$Metadata$VirtualDom = {
        $: "VirtualDom"
    };
    var $elm$browser$Debugger$Metadata$problemTable = _List_fromArray([
        _Utils_Tuple2($elm$browser$Debugger$Metadata$Function, "->"),
        _Utils_Tuple2($elm$browser$Debugger$Metadata$Decoder, "Json.Decode.Decoder"),
        _Utils_Tuple2($elm$browser$Debugger$Metadata$Task, "Task.Task"),
        _Utils_Tuple2($elm$browser$Debugger$Metadata$Process, "Process.Id"),
        _Utils_Tuple2($elm$browser$Debugger$Metadata$Socket, "WebSocket.LowLevel.WebSocket"),
        _Utils_Tuple2($elm$browser$Debugger$Metadata$Request, "Http.Request"),
        _Utils_Tuple2($elm$browser$Debugger$Metadata$Program, "Platform.Program"),
        _Utils_Tuple2($elm$browser$Debugger$Metadata$VirtualDom, "VirtualDom.Node"),
        _Utils_Tuple2($elm$browser$Debugger$Metadata$VirtualDom, "VirtualDom.Attribute")
    ]);
    var $elm$browser$Debugger$Metadata$findProblems = function(tipe1) {
        return A2($elm$core$List$filterMap, $elm$browser$Debugger$Metadata$hasProblem(tipe1), $elm$browser$Debugger$Metadata$problemTable);
    };
    var $elm$browser$Debugger$Metadata$collectBadAliases = F3(function(name1, _v01, list1) {
        var tipe1 = _v01.tipe;
        var _v13 = $elm$browser$Debugger$Metadata$findProblems(tipe1);
        if (!_v13.b) return list1;
        else {
            var problems1 = _v13;
            return A2($elm$core$List$cons, A2($elm$browser$Debugger$Metadata$ProblemType, name1, problems1), list1);
        }
    });
    var $elm$core$List$append = F2(function(xs1, ys1) {
        if (!ys1.b) return xs1;
        else return A3($elm$core$List$foldr, $elm$core$List$cons, ys1, xs1);
    });
    var $elm$core$List$concat = function(lists1) {
        return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists1);
    };
    var $elm$core$List$concatMap = F2(function(f1, list1) {
        return $elm$core$List$concat(A2($elm$core$List$map, f1, list1));
    });
    var $elm$core$Dict$values = function(dict1) {
        return A3($elm$core$Dict$foldr, F3(function(key1, value1, valueList1) {
            return A2($elm$core$List$cons, value1, valueList1);
        }), _List_Nil, dict1);
    };
    var $elm$browser$Debugger$Metadata$collectBadUnions = F3(function(name1, _v01, list1) {
        var tags1 = _v01.tags;
        var _v13 = A2($elm$core$List$concatMap, $elm$browser$Debugger$Metadata$findProblems, $elm$core$List$concat($elm$core$Dict$values(tags1)));
        if (!_v13.b) return list1;
        else {
            var problems1 = _v13;
            return A2($elm$core$List$cons, A2($elm$browser$Debugger$Metadata$ProblemType, name1, problems1), list1);
        }
    });
    var $elm$core$Dict$foldl = F3(function(func1, acc1, dict1) {
        foldl: while(true){
            if (dict1.$ === "RBEmpty_elm_builtin") return acc1;
            else {
                var key1 = dict1.b;
                var value1 = dict1.c;
                var left1 = dict1.d;
                var right1 = dict1.e;
                var $temp$func1 = func1, $temp$acc1 = A3(func1, key1, value1, A3($elm$core$Dict$foldl, func1, acc1, left1)), $temp$dict1 = right1;
                func1 = $temp$func1;
                acc1 = $temp$acc1;
                dict1 = $temp$dict1;
                continue foldl;
            }
        }
    });
    var $elm$browser$Debugger$Metadata$isPortable = function(_v01) {
        var types1 = _v01.types;
        var badAliases1 = A3($elm$core$Dict$foldl, $elm$browser$Debugger$Metadata$collectBadAliases, _List_Nil, types1.aliases);
        var _v13 = A3($elm$core$Dict$foldl, $elm$browser$Debugger$Metadata$collectBadUnions, badAliases1, types1.unions);
        if (!_v13.b) return $elm$core$Maybe$Nothing;
        else {
            var problems1 = _v13;
            return $elm$core$Maybe$Just(A2($elm$browser$Debugger$Metadata$Error, types1.message, problems1));
        }
    };
    var $elm$browser$Debugger$Metadata$decode = function(value1) {
        var _v01 = A2($elm$json$Json$Decode$decodeValue, $elm$browser$Debugger$Metadata$decoder, value1);
        if (_v01.$ === "Err") return $elm$core$Result$Err(A2($elm$browser$Debugger$Metadata$Error, "The compiler is generating bad metadata. This is a compiler bug!", _List_Nil));
        else {
            var metadata1 = _v01.a;
            var _v13 = $elm$browser$Debugger$Metadata$isPortable(metadata1);
            if (_v13.$ === "Nothing") return $elm$core$Result$Ok(metadata1);
            else {
                var error1 = _v13.a;
                return $elm$core$Result$Err(error1);
            }
        }
    };
    var $elm$browser$Debugger$History$History = F3(function(snapshots1, recent1, numMessages1) {
        return {
            numMessages: numMessages1,
            recent: recent1,
            snapshots: snapshots1
        };
    });
    var $elm$browser$Debugger$History$RecentHistory = F3(function(model1, messages1, numMessages1) {
        return {
            messages: messages1,
            model: model1,
            numMessages: numMessages1
        };
    });
    var $elm$browser$Debugger$History$empty = function(model1) {
        return A3($elm$browser$Debugger$History$History, $elm$core$Array$empty, A3($elm$browser$Debugger$History$RecentHistory, model1, _List_Nil, 0), 0);
    };
    var $elm$core$Dict$map = F2(function(func1, dict1) {
        if (dict1.$ === "RBEmpty_elm_builtin") return $elm$core$Dict$RBEmpty_elm_builtin;
        else {
            var color1 = dict1.a;
            var key1 = dict1.b;
            var value1 = dict1.c;
            var left1 = dict1.d;
            var right1 = dict1.e;
            return A5($elm$core$Dict$RBNode_elm_builtin, color1, key1, A2(func1, key1, value1), A2($elm$core$Dict$map, func1, left1), A2($elm$core$Dict$map, func1, right1));
        }
    });
    var $elm$core$Dict$sizeHelp = F2(function(n2, dict1) {
        sizeHelp: while(true){
            if (dict1.$ === "RBEmpty_elm_builtin") return n2;
            else {
                var left1 = dict1.d;
                var right1 = dict1.e;
                var $temp$n1 = A2($elm$core$Dict$sizeHelp, n2 + 1, right1), $temp$dict1 = left1;
                n2 = $temp$n1;
                dict1 = $temp$dict1;
                continue sizeHelp;
            }
        }
    });
    var $elm$core$Dict$size = function(dict1) {
        return A2($elm$core$Dict$sizeHelp, 0, dict1);
    };
    var $elm$browser$Debugger$Expando$initHelp = F2(function(isOuter1, expando1) {
        switch(expando1.$){
            case "S":
                return expando1;
            case "Primitive":
                return expando1;
            case "Sequence":
                var seqType1 = expando1.a;
                var isClosed1 = expando1.b;
                var items1 = expando1.c;
                return isOuter1 ? A3($elm$browser$Debugger$Expando$Sequence, seqType1, false, A2($elm$core$List$map, $elm$browser$Debugger$Expando$initHelp(false), items1)) : $elm$core$List$length(items1) <= 8 ? A3($elm$browser$Debugger$Expando$Sequence, seqType1, false, items1) : expando1;
            case "Dictionary":
                var isClosed1 = expando1.a;
                var keyValuePairs1 = expando1.b;
                return isOuter1 ? A2($elm$browser$Debugger$Expando$Dictionary, false, A2($elm$core$List$map, function(_v13) {
                    var k1 = _v13.a;
                    var v1 = _v13.b;
                    return _Utils_Tuple2(k1, A2($elm$browser$Debugger$Expando$initHelp, false, v1));
                }, keyValuePairs1)) : $elm$core$List$length(keyValuePairs1) <= 8 ? A2($elm$browser$Debugger$Expando$Dictionary, false, keyValuePairs1) : expando1;
            case "Record":
                var isClosed1 = expando1.a;
                var entries1 = expando1.b;
                return isOuter1 ? A2($elm$browser$Debugger$Expando$Record, false, A2($elm$core$Dict$map, F2(function(_v21, v1) {
                    return A2($elm$browser$Debugger$Expando$initHelp, false, v1);
                }), entries1)) : $elm$core$Dict$size(entries1) <= 4 ? A2($elm$browser$Debugger$Expando$Record, false, entries1) : expando1;
            default:
                var maybeName1 = expando1.a;
                var isClosed1 = expando1.b;
                var args1 = expando1.c;
                return isOuter1 ? A3($elm$browser$Debugger$Expando$Constructor, maybeName1, false, A2($elm$core$List$map, $elm$browser$Debugger$Expando$initHelp(false), args1)) : $elm$core$List$length(args1) <= 4 ? A3($elm$browser$Debugger$Expando$Constructor, maybeName1, false, args1) : expando1;
        }
    });
    var $elm$browser$Debugger$Expando$init = function(value1) {
        return A2($elm$browser$Debugger$Expando$initHelp, true, _Debugger_init(value1));
    };
    var $elm$core$Platform$Cmd$map = _Platform_map;
    var $elm$browser$Debugger$Overlay$None = {
        $: "None"
    };
    var $elm$browser$Debugger$Overlay$none = $elm$browser$Debugger$Overlay$None;
    var $elm$browser$Debugger$Main$wrapInit = F4(function(metadata1, popout1, init1, flags1) {
        var _v01 = init1(flags1);
        var userModel1 = _v01.a;
        var userCommands1 = _v01.b;
        return _Utils_Tuple2({
            expandoModel: $elm$browser$Debugger$Expando$init(userModel1),
            expandoMsg: $elm$browser$Debugger$Expando$init(_Utils_Tuple0),
            history: $elm$browser$Debugger$History$empty(userModel1),
            layout: A3($elm$browser$Debugger$Main$Horizontal, $elm$browser$Debugger$Main$Static, 0.3, 0.5),
            metadata: $elm$browser$Debugger$Metadata$decode(metadata1),
            overlay: $elm$browser$Debugger$Overlay$none,
            popout: popout1,
            state: $elm$browser$Debugger$Main$Running(userModel1)
        }, A2($elm$core$Platform$Cmd$map, $elm$browser$Debugger$Main$UserMsg, userCommands1));
    });
    var $elm$browser$Debugger$Main$getLatestModel = function(state3) {
        if (state3.$ === "Running") {
            var model1 = state3.a;
            return model1;
        } else {
            var model1 = state3.c;
            return model1;
        }
    };
    var $elm$core$Platform$Sub$map = _Platform_map;
    var $elm$browser$Debugger$Main$wrapSubs = F2(function(subscriptions1, model1) {
        return A2($elm$core$Platform$Sub$map, $elm$browser$Debugger$Main$UserMsg, subscriptions1($elm$browser$Debugger$Main$getLatestModel(model1.state)));
    });
    var $elm$browser$Debugger$Main$Moving = {
        $: "Moving"
    };
    var $elm$browser$Debugger$Main$Paused = F5(function(a1, b1, c1, d9, e1) {
        return {
            $: "Paused",
            a: a1,
            b: b1,
            c: c1,
            d: d9,
            e: e1
        };
    });
    var $elm$browser$Debugger$History$Snapshot = F2(function(model1, messages1) {
        return {
            messages: messages1,
            model: model1
        };
    });
    var $elm$browser$Debugger$History$addRecent = F3(function(msg1, newModel1, _v01) {
        var model1 = _v01.model;
        var messages1 = _v01.messages;
        var numMessages1 = _v01.numMessages;
        return _Utils_eq(numMessages1, $elm$browser$Debugger$History$maxSnapshotSize) ? _Utils_Tuple2($elm$core$Maybe$Just(A2($elm$browser$Debugger$History$Snapshot, model1, $elm$core$Array$fromList(messages1))), A3($elm$browser$Debugger$History$RecentHistory, newModel1, _List_fromArray([
            msg1
        ]), 1)) : _Utils_Tuple2($elm$core$Maybe$Nothing, A3($elm$browser$Debugger$History$RecentHistory, model1, A2($elm$core$List$cons, msg1, messages1), numMessages1 + 1));
    });
    var $elm$core$Elm$JsArray$push = _JsArray_push;
    var $elm$core$Elm$JsArray$singleton = _JsArray_singleton;
    var $elm$core$Array$insertTailInTree = F4(function(shift1, index1, tail1, tree1) {
        var pos1 = $elm$core$Array$bitMask & index1 >>> shift1;
        if (_Utils_cmp(pos1, $elm$core$Elm$JsArray$length(tree1)) > -1) {
            if (shift1 === 5) return A2($elm$core$Elm$JsArray$push, $elm$core$Array$Leaf(tail1), tree1);
            else {
                var newSub1 = $elm$core$Array$SubTree(A4($elm$core$Array$insertTailInTree, shift1 - $elm$core$Array$shiftStep, index1, tail1, $elm$core$Elm$JsArray$empty));
                return A2($elm$core$Elm$JsArray$push, newSub1, tree1);
            }
        } else {
            var value1 = A2($elm$core$Elm$JsArray$unsafeGet, pos1, tree1);
            if (value1.$ === "SubTree") {
                var subTree1 = value1.a;
                var newSub1 = $elm$core$Array$SubTree(A4($elm$core$Array$insertTailInTree, shift1 - $elm$core$Array$shiftStep, index1, tail1, subTree1));
                return A3($elm$core$Elm$JsArray$unsafeSet, pos1, newSub1, tree1);
            } else {
                var newSub1 = $elm$core$Array$SubTree(A4($elm$core$Array$insertTailInTree, shift1 - $elm$core$Array$shiftStep, index1, tail1, $elm$core$Elm$JsArray$singleton(value1)));
                return A3($elm$core$Elm$JsArray$unsafeSet, pos1, newSub1, tree1);
            }
        }
    });
    var $elm$core$Array$unsafeReplaceTail = F2(function(newTail1, _v01) {
        var len1 = _v01.a;
        var startShift1 = _v01.b;
        var tree1 = _v01.c;
        var tail1 = _v01.d;
        var originalTailLen1 = $elm$core$Elm$JsArray$length(tail1);
        var newTailLen1 = $elm$core$Elm$JsArray$length(newTail1);
        var newArrayLen1 = len1 + (newTailLen1 - originalTailLen1);
        if (_Utils_eq(newTailLen1, $elm$core$Array$branchFactor)) {
            var overflow1 = _Utils_cmp(newArrayLen1 >>> $elm$core$Array$shiftStep, 1 << startShift1) > 0;
            if (overflow1) {
                var newShift1 = startShift1 + $elm$core$Array$shiftStep;
                var newTree1 = A4($elm$core$Array$insertTailInTree, newShift1, len1, newTail1, $elm$core$Elm$JsArray$singleton($elm$core$Array$SubTree(tree1)));
                return A4($elm$core$Array$Array_elm_builtin, newArrayLen1, newShift1, newTree1, $elm$core$Elm$JsArray$empty);
            } else return A4($elm$core$Array$Array_elm_builtin, newArrayLen1, startShift1, A4($elm$core$Array$insertTailInTree, startShift1, len1, newTail1, tree1), $elm$core$Elm$JsArray$empty);
        } else return A4($elm$core$Array$Array_elm_builtin, newArrayLen1, startShift1, tree1, newTail1);
    });
    var $elm$core$Array$push = F2(function(a1, array1) {
        var tail1 = array1.d;
        return A2($elm$core$Array$unsafeReplaceTail, A2($elm$core$Elm$JsArray$push, a1, tail1), array1);
    });
    var $elm$browser$Debugger$History$add = F3(function(msg1, model1, _v01) {
        var snapshots1 = _v01.snapshots;
        var recent1 = _v01.recent;
        var numMessages1 = _v01.numMessages;
        var _v13 = A3($elm$browser$Debugger$History$addRecent, msg1, model1, recent1);
        if (_v13.a.$ === "Just") {
            var snapshot1 = _v13.a.a;
            var newRecent1 = _v13.b;
            return A3($elm$browser$Debugger$History$History, A2($elm$core$Array$push, snapshot1, snapshots1), newRecent1, numMessages1 + 1);
        } else {
            var _v21 = _v13.a;
            var newRecent1 = _v13.b;
            return A3($elm$browser$Debugger$History$History, snapshots1, newRecent1, numMessages1 + 1);
        }
    });
    var $elm$core$Basics$always = F2(function(a1, _v01) {
        return a1;
    });
    var $elm$browser$Debugger$Overlay$BadImport = function(a1) {
        return {
            $: "BadImport",
            a: a1
        };
    };
    var $elm$browser$Debugger$Overlay$RiskyImport = F2(function(a1, b1) {
        return {
            $: "RiskyImport",
            a: a1,
            b: b1
        };
    });
    var $elm$browser$Debugger$Report$VersionChanged = F2(function(a1, b1) {
        return {
            $: "VersionChanged",
            a: a1,
            b: b1
        };
    });
    var $elm$browser$Debugger$Report$MessageChanged = F2(function(a1, b1) {
        return {
            $: "MessageChanged",
            a: a1,
            b: b1
        };
    });
    var $elm$browser$Debugger$Report$SomethingChanged = function(a1) {
        return {
            $: "SomethingChanged",
            a: a1
        };
    };
    var $elm$browser$Debugger$Report$AliasChange = function(a1) {
        return {
            $: "AliasChange",
            a: a1
        };
    };
    var $elm$browser$Debugger$Metadata$checkAlias = F4(function(name1, old1, _new1, changes1) {
        return _Utils_eq(old1.tipe, _new1.tipe) && _Utils_eq(old1.args, _new1.args) ? changes1 : A2($elm$core$List$cons, $elm$browser$Debugger$Report$AliasChange(name1), changes1);
    });
    var $elm$browser$Debugger$Report$UnionChange = F2(function(a1, b1) {
        return {
            $: "UnionChange",
            a: a1,
            b: b1
        };
    });
    var $elm$browser$Debugger$Metadata$addTag = F3(function(tag3, _v01, changes1) {
        return _Utils_update(changes1, {
            added: A2($elm$core$List$cons, tag3, changes1.added)
        });
    });
    var $elm$browser$Debugger$Metadata$checkTag = F4(function(tag3, old1, _new1, changes1) {
        return _Utils_eq(old1, _new1) ? changes1 : _Utils_update(changes1, {
            changed: A2($elm$core$List$cons, tag3, changes1.changed)
        });
    });
    var $elm$browser$Debugger$Report$TagChanges = F4(function(removed1, changed1, added1, argsMatch1) {
        return {
            added: added1,
            argsMatch: argsMatch1,
            changed: changed1,
            removed: removed1
        };
    });
    var $elm$browser$Debugger$Report$emptyTagChanges = function(argsMatch1) {
        return A4($elm$browser$Debugger$Report$TagChanges, _List_Nil, _List_Nil, _List_Nil, argsMatch1);
    };
    var $elm$browser$Debugger$Report$hasTagChanges = function(tagChanges1) {
        return _Utils_eq(tagChanges1, A4($elm$browser$Debugger$Report$TagChanges, _List_Nil, _List_Nil, _List_Nil, true));
    };
    var $elm$core$Dict$merge = F6(function(leftStep1, bothStep1, rightStep1, leftDict1, rightDict1, initialResult1) {
        var stepState1 = F3(function(rKey1, rValue1, _v01) {
            stepState: while(true){
                var list1 = _v01.a;
                var result1 = _v01.b;
                if (!list1.b) return _Utils_Tuple2(list1, A3(rightStep1, rKey1, rValue1, result1));
                else {
                    var _v21 = list1.a;
                    var lKey1 = _v21.a;
                    var lValue1 = _v21.b;
                    var rest1 = list1.b;
                    if (_Utils_cmp(lKey1, rKey1) < 0) {
                        var $temp$rKey1 = rKey1, $temp$rValue1 = rValue1, $temp$_v01 = _Utils_Tuple2(rest1, A3(leftStep1, lKey1, lValue1, result1));
                        rKey1 = $temp$rKey1;
                        rValue1 = $temp$rValue1;
                        _v01 = $temp$_v01;
                        continue stepState;
                    } else {
                        if (_Utils_cmp(lKey1, rKey1) > 0) return _Utils_Tuple2(list1, A3(rightStep1, rKey1, rValue1, result1));
                        else return _Utils_Tuple2(rest1, A4(bothStep1, lKey1, lValue1, rValue1, result1));
                    }
                }
            }
        });
        var _v31 = A3($elm$core$Dict$foldl, stepState1, _Utils_Tuple2($elm$core$Dict$toList(leftDict1), initialResult1), rightDict1);
        var leftovers1 = _v31.a;
        var intermediateResult1 = _v31.b;
        return A3($elm$core$List$foldl, F2(function(_v41, result1) {
            var k1 = _v41.a;
            var v1 = _v41.b;
            return A3(leftStep1, k1, v1, result1);
        }), intermediateResult1, leftovers1);
    });
    var $elm$browser$Debugger$Metadata$removeTag = F3(function(tag3, _v01, changes1) {
        return _Utils_update(changes1, {
            removed: A2($elm$core$List$cons, tag3, changes1.removed)
        });
    });
    var $elm$browser$Debugger$Metadata$checkUnion = F4(function(name1, old1, _new1, changes1) {
        var tagChanges1 = A6($elm$core$Dict$merge, $elm$browser$Debugger$Metadata$removeTag, $elm$browser$Debugger$Metadata$checkTag, $elm$browser$Debugger$Metadata$addTag, old1.tags, _new1.tags, $elm$browser$Debugger$Report$emptyTagChanges(_Utils_eq(old1.args, _new1.args)));
        return $elm$browser$Debugger$Report$hasTagChanges(tagChanges1) ? changes1 : A2($elm$core$List$cons, A2($elm$browser$Debugger$Report$UnionChange, name1, tagChanges1), changes1);
    });
    var $elm$browser$Debugger$Metadata$ignore = F3(function(key1, value1, report1) {
        return report1;
    });
    var $elm$browser$Debugger$Metadata$checkTypes = F2(function(old1, _new1) {
        return !_Utils_eq(old1.message, _new1.message) ? A2($elm$browser$Debugger$Report$MessageChanged, old1.message, _new1.message) : $elm$browser$Debugger$Report$SomethingChanged(A6($elm$core$Dict$merge, $elm$browser$Debugger$Metadata$ignore, $elm$browser$Debugger$Metadata$checkUnion, $elm$browser$Debugger$Metadata$ignore, old1.unions, _new1.unions, A6($elm$core$Dict$merge, $elm$browser$Debugger$Metadata$ignore, $elm$browser$Debugger$Metadata$checkAlias, $elm$browser$Debugger$Metadata$ignore, old1.aliases, _new1.aliases, _List_Nil)));
    });
    var $elm$browser$Debugger$Metadata$check = F2(function(old1, _new1) {
        return !_Utils_eq(old1.versions.elm, _new1.versions.elm) ? A2($elm$browser$Debugger$Report$VersionChanged, old1.versions.elm, _new1.versions.elm) : A2($elm$browser$Debugger$Metadata$checkTypes, old1.types, _new1.types);
    });
    var $elm$browser$Debugger$Report$CorruptHistory = {
        $: "CorruptHistory"
    };
    var $elm$browser$Debugger$Overlay$corruptImport = $elm$browser$Debugger$Overlay$BadImport($elm$browser$Debugger$Report$CorruptHistory);
    var $elm$json$Json$Decode$decodeString = _Json_runOnString;
    var $elm$browser$Debugger$Report$Fine = {
        $: "Fine"
    };
    var $elm$browser$Debugger$Report$Impossible = {
        $: "Impossible"
    };
    var $elm$browser$Debugger$Report$Risky = {
        $: "Risky"
    };
    var $elm$core$Basics$not = _Basics_not;
    var $elm$core$List$isEmpty = function(xs1) {
        if (!xs1.b) return true;
        else return false;
    };
    var $elm$browser$Debugger$Report$some = function(list1) {
        return !$elm$core$List$isEmpty(list1);
    };
    var $elm$browser$Debugger$Report$evaluateChange = function(change1) {
        if (change1.$ === "AliasChange") return $elm$browser$Debugger$Report$Impossible;
        else {
            var removed1 = change1.b.removed;
            var changed1 = change1.b.changed;
            var added1 = change1.b.added;
            var argsMatch1 = change1.b.argsMatch;
            return !argsMatch1 || $elm$browser$Debugger$Report$some(changed1) || $elm$browser$Debugger$Report$some(removed1) ? $elm$browser$Debugger$Report$Impossible : $elm$browser$Debugger$Report$some(added1) ? $elm$browser$Debugger$Report$Risky : $elm$browser$Debugger$Report$Fine;
        }
    };
    var $elm$browser$Debugger$Report$worstCase = F2(function(status1, statusList1) {
        worstCase: while(true){
            if (!statusList1.b) return status1;
            else switch(statusList1.a.$){
                case "Impossible":
                    var _v13 = statusList1.a;
                    return $elm$browser$Debugger$Report$Impossible;
                case "Risky":
                    var _v21 = statusList1.a;
                    var rest1 = statusList1.b;
                    var $temp$status1 = $elm$browser$Debugger$Report$Risky, $temp$statusList1 = rest1;
                    status1 = $temp$status1;
                    statusList1 = $temp$statusList1;
                    continue worstCase;
                default:
                    var _v31 = statusList1.a;
                    var rest1 = statusList1.b;
                    var $temp$status1 = status1, $temp$statusList1 = rest1;
                    status1 = $temp$status1;
                    statusList1 = $temp$statusList1;
                    continue worstCase;
            }
        }
    });
    var $elm$browser$Debugger$Report$evaluate = function(report1) {
        switch(report1.$){
            case "CorruptHistory":
                return $elm$browser$Debugger$Report$Impossible;
            case "VersionChanged":
                return $elm$browser$Debugger$Report$Impossible;
            case "MessageChanged":
                return $elm$browser$Debugger$Report$Impossible;
            default:
                var changes1 = report1.a;
                return A2($elm$browser$Debugger$Report$worstCase, $elm$browser$Debugger$Report$Fine, A2($elm$core$List$map, $elm$browser$Debugger$Report$evaluateChange, changes1));
        }
    };
    var $elm$json$Json$Decode$value = _Json_decodeValue;
    var $elm$browser$Debugger$Overlay$uploadDecoder = A3($elm$json$Json$Decode$map2, F2(function(x1, y1) {
        return _Utils_Tuple2(x1, y1);
    }), A2($elm$json$Json$Decode$field, "metadata", $elm$browser$Debugger$Metadata$decoder), A2($elm$json$Json$Decode$field, "history", $elm$json$Json$Decode$value));
    var $elm$browser$Debugger$Overlay$assessImport = F2(function(metadata1, jsonString1) {
        var _v01 = A2($elm$json$Json$Decode$decodeString, $elm$browser$Debugger$Overlay$uploadDecoder, jsonString1);
        if (_v01.$ === "Err") return $elm$core$Result$Err($elm$browser$Debugger$Overlay$corruptImport);
        else {
            var _v13 = _v01.a;
            var foreignMetadata1 = _v13.a;
            var rawHistory1 = _v13.b;
            var report1 = A2($elm$browser$Debugger$Metadata$check, foreignMetadata1, metadata1);
            var _v21 = $elm$browser$Debugger$Report$evaluate(report1);
            switch(_v21.$){
                case "Impossible":
                    return $elm$core$Result$Err($elm$browser$Debugger$Overlay$BadImport(report1));
                case "Risky":
                    return $elm$core$Result$Err(A2($elm$browser$Debugger$Overlay$RiskyImport, report1, rawHistory1));
                default:
                    return $elm$core$Result$Ok(rawHistory1);
            }
        }
    });
    var $elm$core$Platform$Cmd$batch = _Platform_batch;
    var $elm$browser$Debugger$Overlay$close = F2(function(msg1, state3) {
        switch(state3.$){
            case "None":
                return $elm$core$Maybe$Nothing;
            case "BadMetadata":
                return $elm$core$Maybe$Nothing;
            case "BadImport":
                return $elm$core$Maybe$Nothing;
            default:
                var rawHistory1 = state3.b;
                if (msg1.$ === "Cancel") return $elm$core$Maybe$Nothing;
                else return $elm$core$Maybe$Just(rawHistory1);
        }
    });
    var $elm$browser$Debugger$History$elmToJs = A2($elm$core$Basics$composeR, _Json_wrap, _Debugger_unsafeCoerce);
    var $elm$browser$Debugger$History$encodeHelp = F2(function(snapshot1, allMessages1) {
        return A3($elm$core$Array$foldl, $elm$core$List$cons, allMessages1, snapshot1.messages);
    });
    var $elm$json$Json$Encode$list = F2(function(func1, entries1) {
        return _Json_wrap(A3($elm$core$List$foldl, _Json_addEntry(func1), _Json_emptyArray(_Utils_Tuple0), entries1));
    });
    var $elm$browser$Debugger$History$encode = function(_v01) {
        var snapshots1 = _v01.snapshots;
        var recent1 = _v01.recent;
        return A2($elm$json$Json$Encode$list, $elm$browser$Debugger$History$elmToJs, A3($elm$core$Array$foldr, $elm$browser$Debugger$History$encodeHelp, $elm$core$List$reverse(recent1.messages), snapshots1));
    };
    var $elm$json$Json$Encode$object = function(pairs1) {
        return _Json_wrap(A3($elm$core$List$foldl, F2(function(_v01, obj1) {
            var k1 = _v01.a;
            var v1 = _v01.b;
            return A3(_Json_addField, k1, v1, obj1);
        }), _Json_emptyObject(_Utils_Tuple0), pairs1));
    };
    var $elm$browser$Debugger$Metadata$encodeAlias = function(_v01) {
        var args1 = _v01.args;
        var tipe1 = _v01.tipe;
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("args", A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, args1)),
            _Utils_Tuple2("type", $elm$json$Json$Encode$string(tipe1))
        ]));
    };
    var $elm$browser$Debugger$Metadata$encodeDict = F2(function(f1, dict1) {
        return $elm$json$Json$Encode$object($elm$core$Dict$toList(A2($elm$core$Dict$map, F2(function(key1, value1) {
            return f1(value1);
        }), dict1)));
    });
    var $elm$browser$Debugger$Metadata$encodeUnion = function(_v01) {
        var args1 = _v01.args;
        var tags1 = _v01.tags;
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("args", A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, args1)),
            _Utils_Tuple2("tags", A2($elm$browser$Debugger$Metadata$encodeDict, $elm$json$Json$Encode$list($elm$json$Json$Encode$string), tags1))
        ]));
    };
    var $elm$browser$Debugger$Metadata$encodeTypes = function(_v01) {
        var message1 = _v01.message;
        var unions1 = _v01.unions;
        var aliases1 = _v01.aliases;
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("message", $elm$json$Json$Encode$string(message1)),
            _Utils_Tuple2("aliases", A2($elm$browser$Debugger$Metadata$encodeDict, $elm$browser$Debugger$Metadata$encodeAlias, aliases1)),
            _Utils_Tuple2("unions", A2($elm$browser$Debugger$Metadata$encodeDict, $elm$browser$Debugger$Metadata$encodeUnion, unions1))
        ]));
    };
    var $elm$browser$Debugger$Metadata$encodeVersions = function(_v01) {
        var elm1 = _v01.elm;
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("elm", $elm$json$Json$Encode$string(elm1))
        ]));
    };
    var $elm$browser$Debugger$Metadata$encode = function(_v01) {
        var versions1 = _v01.versions;
        var types1 = _v01.types;
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("versions", $elm$browser$Debugger$Metadata$encodeVersions(versions1)),
            _Utils_Tuple2("types", $elm$browser$Debugger$Metadata$encodeTypes(types1))
        ]));
    };
    var $elm$core$Basics$identity = function(x1) {
        return x1;
    };
    var $elm$core$Task$Perform = function(a1) {
        return {
            $: "Perform",
            a: a1
        };
    };
    var $elm$core$Task$succeed = _Scheduler_succeed;
    var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
    var $elm$core$Task$andThen = _Scheduler_andThen;
    var $elm$core$Task$map = F2(function(func1, taskA1) {
        return A2($elm$core$Task$andThen, function(a1) {
            return $elm$core$Task$succeed(func1(a1));
        }, taskA1);
    });
    var $elm$core$Task$map2 = F3(function(func1, taskA1, taskB1) {
        return A2($elm$core$Task$andThen, function(a1) {
            return A2($elm$core$Task$andThen, function(b1) {
                return $elm$core$Task$succeed(A2(func1, a1, b1));
            }, taskB1);
        }, taskA1);
    });
    var $elm$core$Task$sequence = function(tasks1) {
        return A3($elm$core$List$foldr, $elm$core$Task$map2($elm$core$List$cons), $elm$core$Task$succeed(_List_Nil), tasks1);
    };
    var $elm$core$Platform$sendToApp = _Platform_sendToApp;
    var $elm$core$Task$spawnCmd = F2(function(router1, _v01) {
        var task1 = _v01.a;
        return _Scheduler_spawn(A2($elm$core$Task$andThen, $elm$core$Platform$sendToApp(router1), task1));
    });
    var $elm$core$Task$onEffects = F3(function(router1, commands1, state3) {
        return A2($elm$core$Task$map, function(_v01) {
            return _Utils_Tuple0;
        }, $elm$core$Task$sequence(A2($elm$core$List$map, $elm$core$Task$spawnCmd(router1), commands1)));
    });
    var $elm$core$Task$onSelfMsg = F3(function(_v01, _v13, _v21) {
        return $elm$core$Task$succeed(_Utils_Tuple0);
    });
    var $elm$core$Task$cmdMap = F2(function(tagger1, _v01) {
        var task1 = _v01.a;
        return $elm$core$Task$Perform(A2($elm$core$Task$map, tagger1, task1));
    });
    _Platform_effectManagers["Task"] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
    var $elm$core$Task$command = _Platform_leaf("Task");
    var $elm$core$Task$perform = F2(function(toMessage1, task1) {
        return $elm$core$Task$command($elm$core$Task$Perform(A2($elm$core$Task$map, toMessage1, task1)));
    });
    var $elm$browser$Debugger$Main$download = F2(function(metadata1, history1) {
        var historyLength1 = $elm$browser$Debugger$History$size(history1);
        return A2($elm$core$Task$perform, function(_v01) {
            return $elm$browser$Debugger$Main$NoOp;
        }, A2(_Debugger_download, historyLength1, _Json_unwrap($elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("metadata", $elm$browser$Debugger$Metadata$encode(metadata1)),
            _Utils_Tuple2("history", $elm$browser$Debugger$History$encode(history1))
        ])))));
    });
    var $elm$browser$Debugger$Main$Vertical = F3(function(a1, b1, c1) {
        return {
            $: "Vertical",
            a: a1,
            b: b1,
            c: c1
        };
    });
    var $elm$browser$Debugger$Main$drag = F2(function(info1, layout1) {
        if (layout1.$ === "Horizontal") {
            var status1 = layout1.a;
            var y1 = layout1.c;
            return A3($elm$browser$Debugger$Main$Horizontal, status1, info1.x / info1.width, y1);
        } else {
            var status1 = layout1.a;
            var x1 = layout1.b;
            return A3($elm$browser$Debugger$Main$Vertical, status1, x1, info1.y / info1.height);
        }
    });
    var $elm$browser$Debugger$History$Stepping = F2(function(a1, b1) {
        return {
            $: "Stepping",
            a: a1,
            b: b1
        };
    });
    var $elm$browser$Debugger$History$Done = F2(function(a1, b1) {
        return {
            $: "Done",
            a: a1,
            b: b1
        };
    });
    var $elm$browser$Debugger$History$getHelp = F3(function(update1, msg1, getResult1) {
        if (getResult1.$ === "Done") return getResult1;
        else {
            var n2 = getResult1.a;
            var model1 = getResult1.b;
            return !n2 ? A2($elm$browser$Debugger$History$Done, msg1, A2(update1, msg1, model1).a) : A2($elm$browser$Debugger$History$Stepping, n2 - 1, A2(update1, msg1, model1).a);
        }
    });
    var $elm$browser$Debugger$History$undone = function(getResult1) {
        undone: while(true)if (getResult1.$ === "Done") {
            var msg1 = getResult1.a;
            var model1 = getResult1.b;
            return _Utils_Tuple2(model1, msg1);
        } else {
            var $temp$getResult1 = getResult1;
            getResult1 = $temp$getResult1;
            continue undone;
        }
    };
    var $elm$browser$Debugger$History$get = F3(function(update1, index1, history1) {
        get: while(true){
            var recent1 = history1.recent;
            var snapshotMax1 = history1.numMessages - recent1.numMessages;
            if (_Utils_cmp(index1, snapshotMax1) > -1) return $elm$browser$Debugger$History$undone(A3($elm$core$List$foldr, $elm$browser$Debugger$History$getHelp(update1), A2($elm$browser$Debugger$History$Stepping, index1 - snapshotMax1, recent1.model), recent1.messages));
            else {
                var _v01 = A2($elm$core$Array$get, index1 / $elm$browser$Debugger$History$maxSnapshotSize | 0, history1.snapshots);
                if (_v01.$ === "Nothing") {
                    var $temp$update1 = update1, $temp$index1 = index1, $temp$history1 = history1;
                    update1 = $temp$update1;
                    index1 = $temp$index1;
                    history1 = $temp$history1;
                    continue get;
                } else {
                    var model1 = _v01.a.model;
                    var messages1 = _v01.a.messages;
                    return $elm$browser$Debugger$History$undone(A3($elm$core$Array$foldr, $elm$browser$Debugger$History$getHelp(update1), A2($elm$browser$Debugger$History$Stepping, index1 % $elm$browser$Debugger$History$maxSnapshotSize, model1), messages1));
                }
            }
        }
    });
    var $elm$browser$Debugger$History$getRecentMsg = function(history1) {
        getRecentMsg: while(true){
            var _v01 = history1.recent.messages;
            if (!_v01.b) {
                var $temp$history1 = history1;
                history1 = $temp$history1;
                continue getRecentMsg;
            } else {
                var first1 = _v01.a;
                return first1;
            }
        }
    };
    var $elm$core$Dict$get = F2(function(targetKey1, dict1) {
        get: while(true){
            if (dict1.$ === "RBEmpty_elm_builtin") return $elm$core$Maybe$Nothing;
            else {
                var key1 = dict1.b;
                var value1 = dict1.c;
                var left1 = dict1.d;
                var right1 = dict1.e;
                var _v13 = A2($elm$core$Basics$compare, targetKey1, key1);
                switch(_v13.$){
                    case "LT":
                        var $temp$targetKey1 = targetKey1, $temp$dict1 = left1;
                        targetKey1 = $temp$targetKey1;
                        dict1 = $temp$dict1;
                        continue get;
                    case "EQ":
                        return $elm$core$Maybe$Just(value1);
                    default:
                        var $temp$targetKey1 = targetKey1, $temp$dict1 = right1;
                        targetKey1 = $temp$targetKey1;
                        dict1 = $temp$dict1;
                        continue get;
                }
            }
        }
    });
    var $elm$browser$Debugger$Expando$mergeDictHelp = F3(function(oldDict1, key1, value1) {
        var _v121 = A2($elm$core$Dict$get, key1, oldDict1);
        if (_v121.$ === "Nothing") return value1;
        else {
            var oldValue1 = _v121.a;
            return A2($elm$browser$Debugger$Expando$mergeHelp, oldValue1, value1);
        }
    });
    var $elm$browser$Debugger$Expando$mergeHelp = F2(function(old1, _new1) {
        var _v31 = _Utils_Tuple2(old1, _new1);
        _v3$6: while(true)switch(_v31.b.$){
            case "S":
                return _new1;
            case "Primitive":
                return _new1;
            case "Sequence":
                if (_v31.a.$ === "Sequence") {
                    var _v41 = _v31.a;
                    var isClosed1 = _v41.b;
                    var oldValues1 = _v41.c;
                    var _v51 = _v31.b;
                    var seqType1 = _v51.a;
                    var newValues1 = _v51.c;
                    return A3($elm$browser$Debugger$Expando$Sequence, seqType1, isClosed1, A2($elm$browser$Debugger$Expando$mergeListHelp, oldValues1, newValues1));
                } else break _v3$6;
            case "Dictionary":
                if (_v31.a.$ === "Dictionary") {
                    var _v61 = _v31.a;
                    var isClosed1 = _v61.a;
                    var _v71 = _v31.b;
                    var keyValuePairs1 = _v71.b;
                    return A2($elm$browser$Debugger$Expando$Dictionary, isClosed1, keyValuePairs1);
                } else break _v3$6;
            case "Record":
                if (_v31.a.$ === "Record") {
                    var _v81 = _v31.a;
                    var isClosed1 = _v81.a;
                    var oldDict1 = _v81.b;
                    var _v91 = _v31.b;
                    var newDict1 = _v91.b;
                    return A2($elm$browser$Debugger$Expando$Record, isClosed1, A2($elm$core$Dict$map, $elm$browser$Debugger$Expando$mergeDictHelp(oldDict1), newDict1));
                } else break _v3$6;
            default:
                if (_v31.a.$ === "Constructor") {
                    var _v101 = _v31.a;
                    var isClosed1 = _v101.b;
                    var oldValues1 = _v101.c;
                    var _v111 = _v31.b;
                    var maybeName1 = _v111.a;
                    var newValues1 = _v111.c;
                    return A3($elm$browser$Debugger$Expando$Constructor, maybeName1, isClosed1, A2($elm$browser$Debugger$Expando$mergeListHelp, oldValues1, newValues1));
                } else break _v3$6;
        }
        return _new1;
    });
    var $elm$browser$Debugger$Expando$mergeListHelp = F2(function(olds1, news1) {
        var _v01 = _Utils_Tuple2(olds1, news1);
        if (!_v01.a.b) return news1;
        else {
            if (!_v01.b.b) return news1;
            else {
                var _v13 = _v01.a;
                var x1 = _v13.a;
                var xs1 = _v13.b;
                var _v21 = _v01.b;
                var y1 = _v21.a;
                var ys1 = _v21.b;
                return A2($elm$core$List$cons, A2($elm$browser$Debugger$Expando$mergeHelp, x1, y1), A2($elm$browser$Debugger$Expando$mergeListHelp, xs1, ys1));
            }
        }
    });
    var $elm$browser$Debugger$Expando$merge = F2(function(value1, expando1) {
        return A2($elm$browser$Debugger$Expando$mergeHelp, expando1, _Debugger_init(value1));
    });
    var $elm$browser$Debugger$Main$jumpUpdate = F3(function(update1, index1, model1) {
        var history1 = $elm$browser$Debugger$Main$cachedHistory(model1);
        var currentMsg1 = $elm$browser$Debugger$History$getRecentMsg(history1);
        var currentModel1 = $elm$browser$Debugger$Main$getLatestModel(model1.state);
        var _v01 = A3($elm$browser$Debugger$History$get, update1, index1, history1);
        var indexModel1 = _v01.a;
        var indexMsg1 = _v01.b;
        return _Utils_update(model1, {
            expandoModel: A2($elm$browser$Debugger$Expando$merge, indexModel1, model1.expandoModel),
            expandoMsg: A2($elm$browser$Debugger$Expando$merge, indexMsg1, model1.expandoMsg),
            state: A5($elm$browser$Debugger$Main$Paused, index1, indexModel1, currentModel1, currentMsg1, history1)
        });
    });
    var $elm$browser$Debugger$History$jsToElm = A2($elm$core$Basics$composeR, _Json_unwrap, _Debugger_unsafeCoerce);
    var $elm$browser$Debugger$History$decoder = F2(function(initialModel1, update1) {
        var addMessage1 = F2(function(rawMsg1, _v01) {
            var model1 = _v01.a;
            var history1 = _v01.b;
            var msg1 = $elm$browser$Debugger$History$jsToElm(rawMsg1);
            return _Utils_Tuple2(A2(update1, msg1, model1), A3($elm$browser$Debugger$History$add, msg1, model1, history1));
        });
        var updateModel1 = function(rawMsgs1) {
            return A3($elm$core$List$foldl, addMessage1, _Utils_Tuple2(initialModel1, $elm$browser$Debugger$History$empty(initialModel1)), rawMsgs1);
        };
        return A2($elm$json$Json$Decode$map, updateModel1, $elm$json$Json$Decode$list($elm$json$Json$Decode$value));
    });
    var $elm$browser$Debugger$History$getInitialModel = function(_v01) {
        var snapshots1 = _v01.snapshots;
        var recent1 = _v01.recent;
        var _v13 = A2($elm$core$Array$get, 0, snapshots1);
        if (_v13.$ === "Just") {
            var model1 = _v13.a.model;
            return model1;
        } else return recent1.model;
    };
    var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
    var $elm$browser$Debugger$Main$loadNewHistory = F3(function(rawHistory1, update1, model1) {
        var pureUserUpdate1 = F2(function(msg1, userModel1) {
            return A2(update1, msg1, userModel1).a;
        });
        var initialUserModel1 = $elm$browser$Debugger$History$getInitialModel(model1.history);
        var decoder1 = A2($elm$browser$Debugger$History$decoder, initialUserModel1, pureUserUpdate1);
        var _v01 = A2($elm$json$Json$Decode$decodeValue, decoder1, rawHistory1);
        if (_v01.$ === "Err") return _Utils_Tuple2(_Utils_update(model1, {
            overlay: $elm$browser$Debugger$Overlay$corruptImport
        }), $elm$core$Platform$Cmd$none);
        else {
            var _v13 = _v01.a;
            var latestUserModel1 = _v13.a;
            var newHistory1 = _v13.b;
            return _Utils_Tuple2(_Utils_update(model1, {
                expandoModel: $elm$browser$Debugger$Expando$init(latestUserModel1),
                expandoMsg: $elm$browser$Debugger$Expando$init($elm$browser$Debugger$History$getRecentMsg(newHistory1)),
                history: newHistory1,
                overlay: $elm$browser$Debugger$Overlay$none,
                state: $elm$browser$Debugger$Main$Running(latestUserModel1)
            }), $elm$core$Platform$Cmd$none);
        }
    });
    var $elm$browser$Debugger$Main$scroll = function(popout1) {
        return A2($elm$core$Task$perform, $elm$core$Basics$always($elm$browser$Debugger$Main$NoOp), _Debugger_scroll(popout1));
    };
    var $elm$browser$Debugger$Main$scrollTo = F2(function(id1, popout1) {
        return A2($elm$core$Task$perform, $elm$core$Basics$always($elm$browser$Debugger$Main$NoOp), A2(_Debugger_scrollTo, id1, popout1));
    });
    var $elm$browser$Debugger$Main$setDragStatus = F2(function(status1, layout1) {
        if (layout1.$ === "Horizontal") {
            var x1 = layout1.b;
            var y1 = layout1.c;
            return A3($elm$browser$Debugger$Main$Horizontal, status1, x1, y1);
        } else {
            var x1 = layout1.b;
            var y1 = layout1.c;
            return A3($elm$browser$Debugger$Main$Vertical, status1, x1, y1);
        }
    });
    var $elm$browser$Debugger$Main$swapLayout = function(layout1) {
        if (layout1.$ === "Horizontal") {
            var s1 = layout1.a;
            var x1 = layout1.b;
            var y1 = layout1.c;
            return A3($elm$browser$Debugger$Main$Vertical, s1, x1, y1);
        } else {
            var s1 = layout1.a;
            var x1 = layout1.b;
            var y1 = layout1.c;
            return A3($elm$browser$Debugger$Main$Horizontal, s1, x1, y1);
        }
    };
    var $elm$core$Dict$getMin = function(dict1) {
        getMin: while(true){
            if (dict1.$ === "RBNode_elm_builtin" && dict1.d.$ === "RBNode_elm_builtin") {
                var left1 = dict1.d;
                var $temp$dict1 = left1;
                dict1 = $temp$dict1;
                continue getMin;
            } else return dict1;
        }
    };
    var $elm$core$Dict$moveRedLeft = function(dict1) {
        if (dict1.$ === "RBNode_elm_builtin" && dict1.d.$ === "RBNode_elm_builtin" && dict1.e.$ === "RBNode_elm_builtin") {
            if (dict1.e.d.$ === "RBNode_elm_builtin" && dict1.e.d.a.$ === "Red") {
                var clr1 = dict1.a;
                var k1 = dict1.b;
                var v1 = dict1.c;
                var _v13 = dict1.d;
                var lClr1 = _v13.a;
                var lK1 = _v13.b;
                var lV1 = _v13.c;
                var lLeft1 = _v13.d;
                var lRight1 = _v13.e;
                var _v21 = dict1.e;
                var rClr1 = _v21.a;
                var rK1 = _v21.b;
                var rV1 = _v21.c;
                var rLeft1 = _v21.d;
                var _v31 = rLeft1.a;
                var rlK1 = rLeft1.b;
                var rlV1 = rLeft1.c;
                var rlL1 = rLeft1.d;
                var rlR1 = rLeft1.e;
                var rRight1 = _v21.e;
                return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rlK1, rlV1, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k1, v1, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK1, lV1, lLeft1, lRight1), rlL1), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK1, rV1, rlR1, rRight1));
            } else {
                var clr1 = dict1.a;
                var k1 = dict1.b;
                var v1 = dict1.c;
                var _v41 = dict1.d;
                var lClr1 = _v41.a;
                var lK1 = _v41.b;
                var lV1 = _v41.c;
                var lLeft1 = _v41.d;
                var lRight1 = _v41.e;
                var _v51 = dict1.e;
                var rClr1 = _v51.a;
                var rK1 = _v51.b;
                var rV1 = _v51.c;
                var rLeft1 = _v51.d;
                var rRight1 = _v51.e;
                if (clr1.$ === "Black") return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k1, v1, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK1, lV1, lLeft1, lRight1), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK1, rV1, rLeft1, rRight1));
                else return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k1, v1, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK1, lV1, lLeft1, lRight1), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK1, rV1, rLeft1, rRight1));
            }
        } else return dict1;
    };
    var $elm$core$Dict$moveRedRight = function(dict1) {
        if (dict1.$ === "RBNode_elm_builtin" && dict1.d.$ === "RBNode_elm_builtin" && dict1.e.$ === "RBNode_elm_builtin") {
            if (dict1.d.d.$ === "RBNode_elm_builtin" && dict1.d.d.a.$ === "Red") {
                var clr1 = dict1.a;
                var k1 = dict1.b;
                var v1 = dict1.c;
                var _v13 = dict1.d;
                var lClr1 = _v13.a;
                var lK1 = _v13.b;
                var lV1 = _v13.c;
                var _v21 = _v13.d;
                var _v31 = _v21.a;
                var llK1 = _v21.b;
                var llV1 = _v21.c;
                var llLeft1 = _v21.d;
                var llRight1 = _v21.e;
                var lRight1 = _v13.e;
                var _v41 = dict1.e;
                var rClr1 = _v41.a;
                var rK1 = _v41.b;
                var rV1 = _v41.c;
                var rLeft1 = _v41.d;
                var rRight1 = _v41.e;
                return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK1, lV1, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK1, llV1, llLeft1, llRight1), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k1, v1, lRight1, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK1, rV1, rLeft1, rRight1)));
            } else {
                var clr1 = dict1.a;
                var k1 = dict1.b;
                var v1 = dict1.c;
                var _v51 = dict1.d;
                var lClr1 = _v51.a;
                var lK1 = _v51.b;
                var lV1 = _v51.c;
                var lLeft1 = _v51.d;
                var lRight1 = _v51.e;
                var _v61 = dict1.e;
                var rClr1 = _v61.a;
                var rK1 = _v61.b;
                var rV1 = _v61.c;
                var rLeft1 = _v61.d;
                var rRight1 = _v61.e;
                if (clr1.$ === "Black") return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k1, v1, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK1, lV1, lLeft1, lRight1), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK1, rV1, rLeft1, rRight1));
                else return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k1, v1, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK1, lV1, lLeft1, lRight1), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK1, rV1, rLeft1, rRight1));
            }
        } else return dict1;
    };
    var $elm$core$Dict$removeHelpPrepEQGT = F7(function(targetKey1, dict1, color1, key1, value1, left1, right1) {
        if (left1.$ === "RBNode_elm_builtin" && left1.a.$ === "Red") {
            var _v13 = left1.a;
            var lK1 = left1.b;
            var lV1 = left1.c;
            var lLeft1 = left1.d;
            var lRight1 = left1.e;
            return A5($elm$core$Dict$RBNode_elm_builtin, color1, lK1, lV1, lLeft1, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key1, value1, lRight1, right1));
        } else {
            _v2$2: while(true){
                if (right1.$ === "RBNode_elm_builtin" && right1.a.$ === "Black") {
                    if (right1.d.$ === "RBNode_elm_builtin") {
                        if (right1.d.a.$ === "Black") {
                            var _v31 = right1.a;
                            var _v41 = right1.d;
                            var _v51 = _v41.a;
                            return $elm$core$Dict$moveRedRight(dict1);
                        } else break _v2$2;
                    } else {
                        var _v61 = right1.a;
                        var _v71 = right1.d;
                        return $elm$core$Dict$moveRedRight(dict1);
                    }
                } else break _v2$2;
            }
            return dict1;
        }
    });
    var $elm$core$Dict$removeMin = function(dict1) {
        if (dict1.$ === "RBNode_elm_builtin" && dict1.d.$ === "RBNode_elm_builtin") {
            var color1 = dict1.a;
            var key1 = dict1.b;
            var value1 = dict1.c;
            var left1 = dict1.d;
            var lColor1 = left1.a;
            var lLeft1 = left1.d;
            var right1 = dict1.e;
            if (lColor1.$ === "Black") {
                if (lLeft1.$ === "RBNode_elm_builtin" && lLeft1.a.$ === "Red") {
                    var _v31 = lLeft1.a;
                    return A5($elm$core$Dict$RBNode_elm_builtin, color1, key1, value1, $elm$core$Dict$removeMin(left1), right1);
                } else {
                    var _v41 = $elm$core$Dict$moveRedLeft(dict1);
                    if (_v41.$ === "RBNode_elm_builtin") {
                        var nColor1 = _v41.a;
                        var nKey1 = _v41.b;
                        var nValue1 = _v41.c;
                        var nLeft1 = _v41.d;
                        var nRight1 = _v41.e;
                        return A5($elm$core$Dict$balance, nColor1, nKey1, nValue1, $elm$core$Dict$removeMin(nLeft1), nRight1);
                    } else return $elm$core$Dict$RBEmpty_elm_builtin;
                }
            } else return A5($elm$core$Dict$RBNode_elm_builtin, color1, key1, value1, $elm$core$Dict$removeMin(left1), right1);
        } else return $elm$core$Dict$RBEmpty_elm_builtin;
    };
    var $elm$core$Dict$removeHelp = F2(function(targetKey1, dict1) {
        if (dict1.$ === "RBEmpty_elm_builtin") return $elm$core$Dict$RBEmpty_elm_builtin;
        else {
            var color1 = dict1.a;
            var key1 = dict1.b;
            var value1 = dict1.c;
            var left1 = dict1.d;
            var right1 = dict1.e;
            if (_Utils_cmp(targetKey1, key1) < 0) {
                if (left1.$ === "RBNode_elm_builtin" && left1.a.$ === "Black") {
                    var _v41 = left1.a;
                    var lLeft1 = left1.d;
                    if (lLeft1.$ === "RBNode_elm_builtin" && lLeft1.a.$ === "Red") {
                        var _v61 = lLeft1.a;
                        return A5($elm$core$Dict$RBNode_elm_builtin, color1, key1, value1, A2($elm$core$Dict$removeHelp, targetKey1, left1), right1);
                    } else {
                        var _v71 = $elm$core$Dict$moveRedLeft(dict1);
                        if (_v71.$ === "RBNode_elm_builtin") {
                            var nColor1 = _v71.a;
                            var nKey1 = _v71.b;
                            var nValue1 = _v71.c;
                            var nLeft1 = _v71.d;
                            var nRight1 = _v71.e;
                            return A5($elm$core$Dict$balance, nColor1, nKey1, nValue1, A2($elm$core$Dict$removeHelp, targetKey1, nLeft1), nRight1);
                        } else return $elm$core$Dict$RBEmpty_elm_builtin;
                    }
                } else return A5($elm$core$Dict$RBNode_elm_builtin, color1, key1, value1, A2($elm$core$Dict$removeHelp, targetKey1, left1), right1);
            } else return A2($elm$core$Dict$removeHelpEQGT, targetKey1, A7($elm$core$Dict$removeHelpPrepEQGT, targetKey1, dict1, color1, key1, value1, left1, right1));
        }
    });
    var $elm$core$Dict$removeHelpEQGT = F2(function(targetKey1, dict1) {
        if (dict1.$ === "RBNode_elm_builtin") {
            var color1 = dict1.a;
            var key1 = dict1.b;
            var value1 = dict1.c;
            var left1 = dict1.d;
            var right1 = dict1.e;
            if (_Utils_eq(targetKey1, key1)) {
                var _v13 = $elm$core$Dict$getMin(right1);
                if (_v13.$ === "RBNode_elm_builtin") {
                    var minKey1 = _v13.b;
                    var minValue1 = _v13.c;
                    return A5($elm$core$Dict$balance, color1, minKey1, minValue1, left1, $elm$core$Dict$removeMin(right1));
                } else return $elm$core$Dict$RBEmpty_elm_builtin;
            } else return A5($elm$core$Dict$balance, color1, key1, value1, left1, A2($elm$core$Dict$removeHelp, targetKey1, right1));
        } else return $elm$core$Dict$RBEmpty_elm_builtin;
    });
    var $elm$core$Dict$remove = F2(function(key1, dict1) {
        var _v01 = A2($elm$core$Dict$removeHelp, key1, dict1);
        if (_v01.$ === "RBNode_elm_builtin" && _v01.a.$ === "Red") {
            var _v13 = _v01.a;
            var k1 = _v01.b;
            var v1 = _v01.c;
            var l1 = _v01.d;
            var r5 = _v01.e;
            return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k1, v1, l1, r5);
        } else {
            var x1 = _v01;
            return x1;
        }
    });
    var $elm$core$Dict$update = F3(function(targetKey1, alter1, dictionary1) {
        var _v01 = alter1(A2($elm$core$Dict$get, targetKey1, dictionary1));
        if (_v01.$ === "Just") {
            var value1 = _v01.a;
            return A3($elm$core$Dict$insert, targetKey1, value1, dictionary1);
        } else return A2($elm$core$Dict$remove, targetKey1, dictionary1);
    });
    var $elm$browser$Debugger$Expando$updateIndex = F3(function(n2, func1, list1) {
        if (!list1.b) return _List_Nil;
        else {
            var x1 = list1.a;
            var xs1 = list1.b;
            return n2 <= 0 ? A2($elm$core$List$cons, func1(x1), xs1) : A2($elm$core$List$cons, x1, A3($elm$browser$Debugger$Expando$updateIndex, n2 - 1, func1, xs1));
        }
    });
    var $elm$browser$Debugger$Expando$update = F2(function(msg1, value1) {
        switch(value1.$){
            case "S":
                return value1;
            case "Primitive":
                return value1;
            case "Sequence":
                var seqType1 = value1.a;
                var isClosed1 = value1.b;
                var valueList1 = value1.c;
                switch(msg1.$){
                    case "Toggle":
                        return A3($elm$browser$Debugger$Expando$Sequence, seqType1, !isClosed1, valueList1);
                    case "Index":
                        if (msg1.a.$ === "None") {
                            var _v31 = msg1.a;
                            var index1 = msg1.b;
                            var subMsg1 = msg1.c;
                            return A3($elm$browser$Debugger$Expando$Sequence, seqType1, isClosed1, A3($elm$browser$Debugger$Expando$updateIndex, index1, $elm$browser$Debugger$Expando$update(subMsg1), valueList1));
                        } else return value1;
                    default:
                        return value1;
                }
            case "Dictionary":
                var isClosed1 = value1.a;
                var keyValuePairs1 = value1.b;
                switch(msg1.$){
                    case "Toggle":
                        return A2($elm$browser$Debugger$Expando$Dictionary, !isClosed1, keyValuePairs1);
                    case "Index":
                        var redirect1 = msg1.a;
                        var index1 = msg1.b;
                        var subMsg1 = msg1.c;
                        switch(redirect1.$){
                            case "None":
                                return value1;
                            case "Key":
                                return A2($elm$browser$Debugger$Expando$Dictionary, isClosed1, A3($elm$browser$Debugger$Expando$updateIndex, index1, function(_v61) {
                                    var k1 = _v61.a;
                                    var v1 = _v61.b;
                                    return _Utils_Tuple2(A2($elm$browser$Debugger$Expando$update, subMsg1, k1), v1);
                                }, keyValuePairs1));
                            default:
                                return A2($elm$browser$Debugger$Expando$Dictionary, isClosed1, A3($elm$browser$Debugger$Expando$updateIndex, index1, function(_v71) {
                                    var k1 = _v71.a;
                                    var v1 = _v71.b;
                                    return _Utils_Tuple2(k1, A2($elm$browser$Debugger$Expando$update, subMsg1, v1));
                                }, keyValuePairs1));
                        }
                    default:
                        return value1;
                }
            case "Record":
                var isClosed1 = value1.a;
                var valueDict1 = value1.b;
                switch(msg1.$){
                    case "Toggle":
                        return A2($elm$browser$Debugger$Expando$Record, !isClosed1, valueDict1);
                    case "Index":
                        return value1;
                    default:
                        var field1 = msg1.a;
                        var subMsg1 = msg1.b;
                        return A2($elm$browser$Debugger$Expando$Record, isClosed1, A3($elm$core$Dict$update, field1, $elm$browser$Debugger$Expando$updateField(subMsg1), valueDict1));
                }
            default:
                var maybeName1 = value1.a;
                var isClosed1 = value1.b;
                var valueList1 = value1.c;
                switch(msg1.$){
                    case "Toggle":
                        return A3($elm$browser$Debugger$Expando$Constructor, maybeName1, !isClosed1, valueList1);
                    case "Index":
                        if (msg1.a.$ === "None") {
                            var _v101 = msg1.a;
                            var index1 = msg1.b;
                            var subMsg1 = msg1.c;
                            return A3($elm$browser$Debugger$Expando$Constructor, maybeName1, isClosed1, A3($elm$browser$Debugger$Expando$updateIndex, index1, $elm$browser$Debugger$Expando$update(subMsg1), valueList1));
                        } else return value1;
                    default:
                        return value1;
                }
        }
    });
    var $elm$browser$Debugger$Expando$updateField = F2(function(msg1, maybeExpando1) {
        if (maybeExpando1.$ === "Nothing") return maybeExpando1;
        else {
            var expando1 = maybeExpando1.a;
            return $elm$core$Maybe$Just(A2($elm$browser$Debugger$Expando$update, msg1, expando1));
        }
    });
    var $elm$browser$Debugger$Main$Upload = function(a1) {
        return {
            $: "Upload",
            a: a1
        };
    };
    var $elm$browser$Debugger$Main$upload = function(popout1) {
        return A2($elm$core$Task$perform, $elm$browser$Debugger$Main$Upload, _Debugger_upload(popout1));
    };
    var $elm$browser$Debugger$Overlay$BadMetadata = function(a1) {
        return {
            $: "BadMetadata",
            a: a1
        };
    };
    var $elm$browser$Debugger$Overlay$badMetadata = $elm$browser$Debugger$Overlay$BadMetadata;
    var $elm$browser$Debugger$Main$withGoodMetadata = F2(function(model1, func1) {
        var _v01 = model1.metadata;
        if (_v01.$ === "Ok") {
            var metadata1 = _v01.a;
            return func1(metadata1);
        } else {
            var error1 = _v01.a;
            return _Utils_Tuple2(_Utils_update(model1, {
                overlay: $elm$browser$Debugger$Overlay$badMetadata(error1)
            }), $elm$core$Platform$Cmd$none);
        }
    });
    var $elm$browser$Debugger$Main$wrapUpdate = F3(function(update1, msg1, model1) {
        wrapUpdate: while(true)switch(msg1.$){
            case "NoOp":
                return _Utils_Tuple2(model1, $elm$core$Platform$Cmd$none);
            case "UserMsg":
                var userMsg1 = msg1.a;
                var userModel1 = $elm$browser$Debugger$Main$getLatestModel(model1.state);
                var newHistory1 = A3($elm$browser$Debugger$History$add, userMsg1, userModel1, model1.history);
                var _v13 = A2(update1, userMsg1, userModel1);
                var newUserModel1 = _v13.a;
                var userCmds1 = _v13.b;
                var commands1 = A2($elm$core$Platform$Cmd$map, $elm$browser$Debugger$Main$UserMsg, userCmds1);
                var _v21 = model1.state;
                if (_v21.$ === "Running") return _Utils_Tuple2(_Utils_update(model1, {
                    expandoModel: A2($elm$browser$Debugger$Expando$merge, newUserModel1, model1.expandoModel),
                    expandoMsg: A2($elm$browser$Debugger$Expando$merge, userMsg1, model1.expandoMsg),
                    history: newHistory1,
                    state: $elm$browser$Debugger$Main$Running(newUserModel1)
                }), $elm$core$Platform$Cmd$batch(_List_fromArray([
                    commands1,
                    $elm$browser$Debugger$Main$scroll(model1.popout)
                ])));
                else {
                    var index1 = _v21.a;
                    var indexModel1 = _v21.b;
                    var history1 = _v21.e;
                    return _Utils_Tuple2(_Utils_update(model1, {
                        history: newHistory1,
                        state: A5($elm$browser$Debugger$Main$Paused, index1, indexModel1, newUserModel1, userMsg1, history1)
                    }), commands1);
                }
            case "TweakExpandoMsg":
                var eMsg1 = msg1.a;
                return _Utils_Tuple2(_Utils_update(model1, {
                    expandoMsg: A2($elm$browser$Debugger$Expando$update, eMsg1, model1.expandoMsg)
                }), $elm$core$Platform$Cmd$none);
            case "TweakExpandoModel":
                var eMsg1 = msg1.a;
                return _Utils_Tuple2(_Utils_update(model1, {
                    expandoModel: A2($elm$browser$Debugger$Expando$update, eMsg1, model1.expandoModel)
                }), $elm$core$Platform$Cmd$none);
            case "Resume":
                var _v31 = model1.state;
                if (_v31.$ === "Running") return _Utils_Tuple2(model1, $elm$core$Platform$Cmd$none);
                else {
                    var userModel1 = _v31.c;
                    var userMsg1 = _v31.d;
                    return _Utils_Tuple2(_Utils_update(model1, {
                        expandoModel: A2($elm$browser$Debugger$Expando$merge, userModel1, model1.expandoModel),
                        expandoMsg: A2($elm$browser$Debugger$Expando$merge, userMsg1, model1.expandoMsg),
                        state: $elm$browser$Debugger$Main$Running(userModel1)
                    }), $elm$browser$Debugger$Main$scroll(model1.popout));
                }
            case "Jump":
                var index1 = msg1.a;
                return _Utils_Tuple2(A3($elm$browser$Debugger$Main$jumpUpdate, update1, index1, model1), $elm$core$Platform$Cmd$none);
            case "SliderJump":
                var index1 = msg1.a;
                return _Utils_Tuple2(A3($elm$browser$Debugger$Main$jumpUpdate, update1, index1, model1), A2($elm$browser$Debugger$Main$scrollTo, $elm$browser$Debugger$History$idForMessageIndex(index1), model1.popout));
            case "Open":
                return _Utils_Tuple2(model1, A2($elm$core$Task$perform, $elm$core$Basics$always($elm$browser$Debugger$Main$NoOp), _Debugger_open(model1.popout)));
            case "Up":
                var _v41 = model1.state;
                if (_v41.$ === "Running") return _Utils_Tuple2(model1, $elm$core$Platform$Cmd$none);
                else {
                    var i1 = _v41.a;
                    var history1 = _v41.e;
                    var targetIndex1 = i1 + 1;
                    if (_Utils_cmp(targetIndex1, $elm$browser$Debugger$History$size(history1)) < 0) {
                        var $temp$update1 = update1, $temp$msg1 = $elm$browser$Debugger$Main$SliderJump(targetIndex1), $temp$model1 = model1;
                        update1 = $temp$update1;
                        msg1 = $temp$msg1;
                        model1 = $temp$model1;
                        continue wrapUpdate;
                    } else {
                        var $temp$update1 = update1, $temp$msg1 = $elm$browser$Debugger$Main$Resume, $temp$model1 = model1;
                        update1 = $temp$update1;
                        msg1 = $temp$msg1;
                        model1 = $temp$model1;
                        continue wrapUpdate;
                    }
                }
            case "Down":
                var _v51 = model1.state;
                if (_v51.$ === "Running") {
                    var $temp$update1 = update1, $temp$msg1 = $elm$browser$Debugger$Main$Jump($elm$browser$Debugger$History$size(model1.history) - 1), $temp$model1 = model1;
                    update1 = $temp$update1;
                    msg1 = $temp$msg1;
                    model1 = $temp$model1;
                    continue wrapUpdate;
                } else {
                    var index1 = _v51.a;
                    if (index1 > 0) {
                        var $temp$update1 = update1, $temp$msg1 = $elm$browser$Debugger$Main$SliderJump(index1 - 1), $temp$model1 = model1;
                        update1 = $temp$update1;
                        msg1 = $temp$msg1;
                        model1 = $temp$model1;
                        continue wrapUpdate;
                    } else return _Utils_Tuple2(model1, $elm$core$Platform$Cmd$none);
                }
            case "Import":
                return A2($elm$browser$Debugger$Main$withGoodMetadata, model1, function(_v61) {
                    return _Utils_Tuple2(model1, $elm$browser$Debugger$Main$upload(model1.popout));
                });
            case "Export":
                return A2($elm$browser$Debugger$Main$withGoodMetadata, model1, function(metadata1) {
                    return _Utils_Tuple2(model1, A2($elm$browser$Debugger$Main$download, metadata1, model1.history));
                });
            case "Upload":
                var jsonString1 = msg1.a;
                return A2($elm$browser$Debugger$Main$withGoodMetadata, model1, function(metadata1) {
                    var _v71 = A2($elm$browser$Debugger$Overlay$assessImport, metadata1, jsonString1);
                    if (_v71.$ === "Err") {
                        var newOverlay1 = _v71.a;
                        return _Utils_Tuple2(_Utils_update(model1, {
                            overlay: newOverlay1
                        }), $elm$core$Platform$Cmd$none);
                    } else {
                        var rawHistory1 = _v71.a;
                        return A3($elm$browser$Debugger$Main$loadNewHistory, rawHistory1, update1, model1);
                    }
                });
            case "OverlayMsg":
                var overlayMsg1 = msg1.a;
                var _v81 = A2($elm$browser$Debugger$Overlay$close, overlayMsg1, model1.overlay);
                if (_v81.$ === "Nothing") return _Utils_Tuple2(_Utils_update(model1, {
                    overlay: $elm$browser$Debugger$Overlay$none
                }), $elm$core$Platform$Cmd$none);
                else {
                    var rawHistory1 = _v81.a;
                    return A3($elm$browser$Debugger$Main$loadNewHistory, rawHistory1, update1, model1);
                }
            case "SwapLayout":
                return _Utils_Tuple2(_Utils_update(model1, {
                    layout: $elm$browser$Debugger$Main$swapLayout(model1.layout)
                }), $elm$core$Platform$Cmd$none);
            case "DragStart":
                return _Utils_Tuple2(_Utils_update(model1, {
                    layout: A2($elm$browser$Debugger$Main$setDragStatus, $elm$browser$Debugger$Main$Moving, model1.layout)
                }), $elm$core$Platform$Cmd$none);
            case "Drag":
                var info1 = msg1.a;
                return _Utils_Tuple2(_Utils_update(model1, {
                    layout: A2($elm$browser$Debugger$Main$drag, info1, model1.layout)
                }), $elm$core$Platform$Cmd$none);
            default:
                return _Utils_Tuple2(_Utils_update(model1, {
                    layout: A2($elm$browser$Debugger$Main$setDragStatus, $elm$browser$Debugger$Main$Static, model1.layout)
                }), $elm$core$Platform$Cmd$none);
        }
    });
    var $elm$browser$Browser$External = function(a1) {
        return {
            $: "External",
            a: a1
        };
    };
    var $elm$browser$Browser$Internal = function(a1) {
        return {
            $: "Internal",
            a: a1
        };
    };
    var $elm$browser$Browser$Dom$NotFound = function(a1) {
        return {
            $: "NotFound",
            a: a1
        };
    };
    var $elm$url$Url$Http = {
        $: "Http"
    };
    var $elm$url$Url$Https = {
        $: "Https"
    };
    var $elm$url$Url$Url = F6(function(protocol1, host1, port_1, path1, query1, fragment1) {
        return {
            fragment: fragment1,
            host: host1,
            path: path1,
            port_: port_1,
            protocol: protocol1,
            query: query1
        };
    });
    var $elm$core$String$dropLeft = F2(function(n2, string1) {
        return n2 < 1 ? string1 : A3($elm$core$String$slice, n2, $elm$core$String$length(string1), string1);
    });
    var $elm$core$String$indexes = _String_indexes;
    var $elm$core$String$isEmpty = function(string1) {
        return string1 === "";
    };
    var $elm$url$Url$chompBeforePath = F5(function(protocol1, path1, params1, frag1, str1) {
        if ($elm$core$String$isEmpty(str1) || A2($elm$core$String$contains, "@", str1)) return $elm$core$Maybe$Nothing;
        else {
            var _v01 = A2($elm$core$String$indexes, ":", str1);
            if (!_v01.b) return $elm$core$Maybe$Just(A6($elm$url$Url$Url, protocol1, str1, $elm$core$Maybe$Nothing, path1, params1, frag1));
            else {
                if (!_v01.b.b) {
                    var i1 = _v01.a;
                    var _v13 = $elm$core$String$toInt(A2($elm$core$String$dropLeft, i1 + 1, str1));
                    if (_v13.$ === "Nothing") return $elm$core$Maybe$Nothing;
                    else {
                        var port_1 = _v13;
                        return $elm$core$Maybe$Just(A6($elm$url$Url$Url, protocol1, A2($elm$core$String$left, i1, str1), port_1, path1, params1, frag1));
                    }
                } else return $elm$core$Maybe$Nothing;
            }
        }
    });
    var $elm$url$Url$chompBeforeQuery = F4(function(protocol1, params1, frag1, str1) {
        if ($elm$core$String$isEmpty(str1)) return $elm$core$Maybe$Nothing;
        else {
            var _v01 = A2($elm$core$String$indexes, "/", str1);
            if (!_v01.b) return A5($elm$url$Url$chompBeforePath, protocol1, "/", params1, frag1, str1);
            else {
                var i1 = _v01.a;
                return A5($elm$url$Url$chompBeforePath, protocol1, A2($elm$core$String$dropLeft, i1, str1), params1, frag1, A2($elm$core$String$left, i1, str1));
            }
        }
    });
    var $elm$url$Url$chompBeforeFragment = F3(function(protocol1, frag1, str1) {
        if ($elm$core$String$isEmpty(str1)) return $elm$core$Maybe$Nothing;
        else {
            var _v01 = A2($elm$core$String$indexes, "?", str1);
            if (!_v01.b) return A4($elm$url$Url$chompBeforeQuery, protocol1, $elm$core$Maybe$Nothing, frag1, str1);
            else {
                var i1 = _v01.a;
                return A4($elm$url$Url$chompBeforeQuery, protocol1, $elm$core$Maybe$Just(A2($elm$core$String$dropLeft, i1 + 1, str1)), frag1, A2($elm$core$String$left, i1, str1));
            }
        }
    });
    var $elm$url$Url$chompAfterProtocol = F2(function(protocol1, str1) {
        if ($elm$core$String$isEmpty(str1)) return $elm$core$Maybe$Nothing;
        else {
            var _v01 = A2($elm$core$String$indexes, "#", str1);
            if (!_v01.b) return A3($elm$url$Url$chompBeforeFragment, protocol1, $elm$core$Maybe$Nothing, str1);
            else {
                var i1 = _v01.a;
                return A3($elm$url$Url$chompBeforeFragment, protocol1, $elm$core$Maybe$Just(A2($elm$core$String$dropLeft, i1 + 1, str1)), A2($elm$core$String$left, i1, str1));
            }
        }
    });
    var $elm$core$String$startsWith = _String_startsWith;
    var $elm$url$Url$fromString = function(str1) {
        return A2($elm$core$String$startsWith, "http://", str1) ? A2($elm$url$Url$chompAfterProtocol, $elm$url$Url$Http, A2($elm$core$String$dropLeft, 7, str1)) : A2($elm$core$String$startsWith, "https://", str1) ? A2($elm$url$Url$chompAfterProtocol, $elm$url$Url$Https, A2($elm$core$String$dropLeft, 8, str1)) : $elm$core$Maybe$Nothing;
    };
    var $elm$core$Basics$never = function(_v01) {
        never: while(true){
            var nvr1 = _v01.a;
            var $temp$_v01 = nvr1;
            _v01 = $temp$_v01;
            continue never;
        }
    };
    var $elm$browser$Browser$element = _Browser_element;
    var $author$project$Main$Ask = {
        $: "Ask"
    };
    var $author$project$Mineral$ColourXPL = function(a1) {
        return {
            $: "ColourXPL",
            a: a1
        };
    };
    var $author$project$Mineral$HighRelief = {
        $: "HighRelief"
    };
    var $author$project$Mineral$Inclined = function(a1) {
        return {
            $: "Inclined",
            a: a1
        };
    };
    var $author$project$Mineral$SecondOrder = {
        $: "SecondOrder"
    };
    var $author$project$Mineral$StrongPleochroism = {
        $: "StrongPleochroism"
    };
    var $author$project$Mineral$Two = function(a1) {
        return {
            $: "Two",
            a: a1
        };
    };
    var $author$project$Mineral$amphibole = {
        cleavage: $author$project$Mineral$Two("~120 degrees"),
        colourInPPL: "Pale green to brown",
        colourInXPL: _List_fromArray([
            $author$project$Mineral$SecondOrder,
            $author$project$Mineral$ColourXPL("Pink"),
            $author$project$Mineral$ColourXPL("Orange"),
            $author$project$Mineral$ColourXPL("Yellow")
        ]),
        extinction: $author$project$Mineral$Inclined("12-34 degrees"),
        features: "High relief and 120 degree cleavages, 6-sided crystals",
        name: "Amphibole",
        pleochroism: $author$project$Mineral$StrongPleochroism,
        relief: $author$project$Mineral$HighRelief
    };
    var $author$project$Mineral$ModerateRelief = {
        $: "ModerateRelief"
    };
    var $author$project$Mineral$Parallel = {
        $: "Parallel"
    };
    var $author$project$Mineral$Perfect = {
        $: "Perfect"
    };
    var $author$project$Mineral$ThirdOrder = {
        $: "ThirdOrder"
    };
    var $author$project$Mineral$biotite = {
        cleavage: $author$project$Mineral$Perfect,
        colourInPPL: "Brown",
        colourInXPL: _List_fromArray([
            $author$project$Mineral$ThirdOrder
        ]),
        extinction: $author$project$Mineral$Parallel,
        features: "Brown pleochroism, reaction haloes",
        name: "Biotite",
        pleochroism: $author$project$Mineral$StrongPleochroism,
        relief: $author$project$Mineral$ModerateRelief
    };
    var $author$project$Mineral$minerals = _List_fromArray([
        $author$project$Mineral$amphibole,
        $author$project$Mineral$biotite
    ]);
    var $author$project$Main$init = function(_v01) {
        return _Utils_Tuple2({
            correct: 0,
            incorrect: 0,
            minerals: A2($elm$core$List$map, function(m1) {
                return _Utils_Tuple2(m1.name, m1);
            }, $author$project$Mineral$minerals),
            question: $elm$core$Maybe$Nothing,
            rocks: _List_Nil,
            status: $author$project$Main$Ask
        }, $elm$core$Platform$Cmd$none);
    };
    var $elm$core$Platform$Sub$batch = _Platform_batch;
    var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
    var $author$project$Main$subscriptions = function(_v01) {
        return $elm$core$Platform$Sub$none;
    };
    var $author$project$Main$Answer = {
        $: "Answer"
    };
    var $author$project$Main$ShowQuestion = function(a1) {
        return {
            $: "ShowQuestion",
            a: a1
        };
    };
    var $elm$random$Random$Generate = function(a1) {
        return {
            $: "Generate",
            a: a1
        };
    };
    var $elm$random$Random$Seed = F2(function(a1, b1) {
        return {
            $: "Seed",
            a: a1,
            b: b1
        };
    });
    var $elm$random$Random$next = function(_v01) {
        var state01 = _v01.a;
        var incr1 = _v01.b;
        return A2($elm$random$Random$Seed, state01 * 1664525 + incr1 >>> 0, incr1);
    };
    var $elm$random$Random$initialSeed = function(x1) {
        var _v01 = $elm$random$Random$next(A2($elm$random$Random$Seed, 0, 1013904223));
        var state11 = _v01.a;
        var incr1 = _v01.b;
        var state21 = state11 + x1 >>> 0;
        return $elm$random$Random$next(A2($elm$random$Random$Seed, state21, incr1));
    };
    var $elm$time$Time$Name = function(a1) {
        return {
            $: "Name",
            a: a1
        };
    };
    var $elm$time$Time$Offset = function(a1) {
        return {
            $: "Offset",
            a: a1
        };
    };
    var $elm$time$Time$Zone = F2(function(a1, b1) {
        return {
            $: "Zone",
            a: a1,
            b: b1
        };
    });
    var $elm$time$Time$customZone = $elm$time$Time$Zone;
    var $elm$time$Time$Posix = function(a1) {
        return {
            $: "Posix",
            a: a1
        };
    };
    var $elm$time$Time$millisToPosix = $elm$time$Time$Posix;
    var $elm$time$Time$now = _Time_now($elm$time$Time$millisToPosix);
    var $elm$time$Time$posixToMillis = function(_v01) {
        var millis1 = _v01.a;
        return millis1;
    };
    var $elm$random$Random$init = A2($elm$core$Task$andThen, function(time1) {
        return $elm$core$Task$succeed($elm$random$Random$initialSeed($elm$time$Time$posixToMillis(time1)));
    }, $elm$time$Time$now);
    var $elm$random$Random$step = F2(function(_v01, seed3) {
        var generator1 = _v01.a;
        return generator1(seed3);
    });
    var $elm$random$Random$onEffects = F3(function(router1, commands1, seed3) {
        if (!commands1.b) return $elm$core$Task$succeed(seed3);
        else {
            var generator1 = commands1.a.a;
            var rest1 = commands1.b;
            var _v13 = A2($elm$random$Random$step, generator1, seed3);
            var value1 = _v13.a;
            var newSeed1 = _v13.b;
            return A2($elm$core$Task$andThen, function(_v21) {
                return A3($elm$random$Random$onEffects, router1, rest1, newSeed1);
            }, A2($elm$core$Platform$sendToApp, router1, value1));
        }
    });
    var $elm$random$Random$onSelfMsg = F3(function(_v01, _v13, seed3) {
        return $elm$core$Task$succeed(seed3);
    });
    var $elm$random$Random$Generator = function(a1) {
        return {
            $: "Generator",
            a: a1
        };
    };
    var $elm$random$Random$map = F2(function(func1, _v01) {
        var genA1 = _v01.a;
        return $elm$random$Random$Generator(function(seed01) {
            var _v13 = genA1(seed01);
            var a1 = _v13.a;
            var seed11 = _v13.b;
            return _Utils_Tuple2(func1(a1), seed11);
        });
    });
    var $elm$random$Random$cmdMap = F2(function(func1, _v01) {
        var generator1 = _v01.a;
        return $elm$random$Random$Generate(A2($elm$random$Random$map, func1, generator1));
    });
    _Platform_effectManagers["Random"] = _Platform_createManager($elm$random$Random$init, $elm$random$Random$onEffects, $elm$random$Random$onSelfMsg, $elm$random$Random$cmdMap);
    var $elm$random$Random$command = _Platform_leaf("Random");
    var $elm$random$Random$generate = F2(function(tagger1, generator1) {
        return $elm$random$Random$command($elm$random$Random$Generate(A2($elm$random$Random$map, tagger1, generator1)));
    });
    var $elm$random$Random$map2 = F3(function(func1, _v01, _v13) {
        var genA1 = _v01.a;
        var genB1 = _v13.a;
        return $elm$random$Random$Generator(function(seed01) {
            var _v21 = genA1(seed01);
            var a1 = _v21.a;
            var seed11 = _v21.b;
            var _v31 = genB1(seed11);
            var b1 = _v31.a;
            var seed21 = _v31.b;
            return _Utils_Tuple2(A2(func1, a1, b1), seed21);
        });
    });
    var $elm$random$Random$pair = F2(function(genA1, genB1) {
        return A3($elm$random$Random$map2, F2(function(a1, b1) {
            return _Utils_Tuple2(a1, b1);
        }), genA1, genB1);
    });
    var $author$project$Mineral$Indistinct = {
        $: "Indistinct"
    };
    var $author$project$Mineral$LowRelief = {
        $: "LowRelief"
    };
    var $author$project$Mineral$NoPleochroism = {
        $: "NoPleochroism"
    };
    var $author$project$Mineral$Symmetrical = {
        $: "Symmetrical"
    };
    var $author$project$Mineral$calcite = {
        cleavage: $author$project$Mineral$Indistinct,
        colourInPPL: "Colourless",
        colourInXPL: _List_fromArray([
            $author$project$Mineral$SecondOrder,
            $author$project$Mineral$ColourXPL("Pinks and bright colours")
        ]),
        extinction: $author$project$Mineral$Symmetrical,
        features: "Low relief, fibrous/euhedral crystals, some show parallel twins",
        name: "Calcite",
        pleochroism: $author$project$Mineral$NoPleochroism,
        relief: $author$project$Mineral$LowRelief
    };
    var $author$project$Mineral$Black = {
        $: "Black"
    };
    var $author$project$Mineral$Isotropic = {
        $: "Isotropic"
    };
    var $author$project$Mineral$NoCleavage = {
        $: "NoCleavage"
    };
    var $author$project$Mineral$garnet = {
        cleavage: $author$project$Mineral$NoCleavage,
        colourInPPL: "Colourless to pink",
        colourInXPL: _List_fromArray([
            $author$project$Mineral$Isotropic
        ]),
        extinction: $author$project$Mineral$Black,
        features: "Black in XPL, fractured, occasional s-shaped inclusion trails",
        name: "Garnet",
        pleochroism: $author$project$Mineral$NoPleochroism,
        relief: $author$project$Mineral$HighRelief
    };
    var $author$project$Mineral$muscovite = {
        cleavage: $author$project$Mineral$Perfect,
        colourInPPL: "Colourless",
        colourInXPL: _List_fromArray([
            $author$project$Mineral$ThirdOrder
        ]),
        extinction: $author$project$Mineral$Parallel,
        features: "Colourless and straight extinction",
        name: "Muscovite",
        pleochroism: $author$project$Mineral$NoPleochroism,
        relief: $author$project$Mineral$LowRelief
    };
    var $author$project$Mineral$Weak = {
        $: "Weak"
    };
    var $author$project$Mineral$olivine = {
        cleavage: $author$project$Mineral$Weak,
        colourInPPL: "Colourless to pale green",
        colourInXPL: _List_fromArray([
            $author$project$Mineral$SecondOrder,
            $author$project$Mineral$ColourXPL("High 2nd order")
        ]),
        extinction: $author$project$Mineral$Parallel,
        features: "High relief, straight exinction, alteration minerals in fractures.",
        name: "Olivine",
        pleochroism: $author$project$Mineral$NoPleochroism,
        relief: $author$project$Mineral$HighRelief
    };
    var $author$project$Mineral$FirstOrder = {
        $: "FirstOrder"
    };
    var $author$project$Mineral$Oblique = {
        $: "Oblique"
    };
    var $author$project$Mineral$plagioclase = {
        cleavage: $author$project$Mineral$Two("can be indistinct"),
        colourInPPL: "Colourless (may be weathered)",
        colourInXPL: _List_fromArray([
            $author$project$Mineral$FirstOrder,
            $author$project$Mineral$ColourXPL("Grey with twinning")
        ]),
        extinction: $author$project$Mineral$Oblique,
        features: "Stripey appearance due to twinning",
        name: "Plagioclase Feldspar",
        pleochroism: $author$project$Mineral$NoPleochroism,
        relief: $author$project$Mineral$LowRelief
    };
    var $author$project$Mineral$WeakToStrongPleochroism = {
        $: "WeakToStrongPleochroism"
    };
    var $author$project$Mineral$pyroxenes = {
        cleavage: $author$project$Mineral$Two("at 90 degrees"),
        colourInPPL: "Colourless to green",
        colourInXPL: _List_fromArray([
            $author$project$Mineral$SecondOrder,
            $author$project$Mineral$ThirdOrder
        ]),
        extinction: $author$project$Mineral$Inclined("20-30 degrees, occasional twins"),
        features: "High relief and 90 degree cleavages, 8-sided crystals",
        name: "Pyroxenes",
        pleochroism: $author$project$Mineral$WeakToStrongPleochroism,
        relief: $author$project$Mineral$HighRelief
    };
    var $author$project$Mineral$Undulose = {
        $: "Undulose"
    };
    var $author$project$Mineral$quartz = {
        cleavage: $author$project$Mineral$NoCleavage,
        colourInPPL: "Colourless",
        colourInXPL: _List_fromArray([
            $author$project$Mineral$FirstOrder,
            $author$project$Mineral$ColourXPL("Grey (can be yellow)")
        ]),
        extinction: $author$project$Mineral$Undulose,
        features: "Commonly has undulose extinction",
        name: "Quartz",
        pleochroism: $author$project$Mineral$NoPleochroism,
        relief: $author$project$Mineral$LowRelief
    };
    var $elm$random$Random$addOne = function(value1) {
        return _Utils_Tuple2(1, value1);
    };
    var $elm$core$Basics$abs = function(n2) {
        return n2 < 0 ? -n2 : n2;
    };
    var $elm$core$Bitwise$xor = _Bitwise_xor;
    var $elm$random$Random$peel = function(_v01) {
        var state3 = _v01.a;
        var word1 = (state3 ^ state3 >>> (state3 >>> 28) + 4) * 277803737;
        return (word1 >>> 22 ^ word1) >>> 0;
    };
    var $elm$random$Random$float = F2(function(a1, b1) {
        return $elm$random$Random$Generator(function(seed01) {
            var seed11 = $elm$random$Random$next(seed01);
            var range1 = $elm$core$Basics$abs(b1 - a1);
            var n11 = $elm$random$Random$peel(seed11);
            var n01 = $elm$random$Random$peel(seed01);
            var lo1 = (134217727 & n11) * 1.0;
            var hi1 = (67108863 & n01) * 1.0;
            var val1 = (hi1 * 134217728.0 + lo1) / 9007199254740992.0;
            var scaled1 = val1 * range1 + a1;
            return _Utils_Tuple2(scaled1, $elm$random$Random$next(seed11));
        });
    });
    var $elm$random$Random$getByWeight = F3(function(_v01, others1, countdown1) {
        getByWeight: while(true){
            var weight1 = _v01.a;
            var value1 = _v01.b;
            if (!others1.b) return value1;
            else {
                var second1 = others1.a;
                var otherOthers1 = others1.b;
                if (_Utils_cmp(countdown1, $elm$core$Basics$abs(weight1)) < 1) return value1;
                else {
                    var $temp$_v01 = second1, $temp$others1 = otherOthers1, $temp$countdown1 = countdown1 - $elm$core$Basics$abs(weight1);
                    _v01 = $temp$_v01;
                    others1 = $temp$others1;
                    countdown1 = $temp$countdown1;
                    continue getByWeight;
                }
            }
        }
    });
    var $elm$core$List$sum = function(numbers1) {
        return A3($elm$core$List$foldl, $elm$core$Basics$add, 0, numbers1);
    };
    var $elm$random$Random$weighted = F2(function(first1, others1) {
        var normalize1 = function(_v01) {
            var weight1 = _v01.a;
            return $elm$core$Basics$abs(weight1);
        };
        var total1 = normalize1(first1) + $elm$core$List$sum(A2($elm$core$List$map, normalize1, others1));
        return A2($elm$random$Random$map, A2($elm$random$Random$getByWeight, first1, others1), A2($elm$random$Random$float, 0, total1));
    });
    var $elm$random$Random$uniform = F2(function(value1, valueList1) {
        return A2($elm$random$Random$weighted, $elm$random$Random$addOne(value1), A2($elm$core$List$map, $elm$random$Random$addOne, valueList1));
    });
    var $author$project$Mineral$randomMineral = A2($elm$random$Random$uniform, $author$project$Mineral$amphibole, _List_fromArray([
        $author$project$Mineral$biotite,
        $author$project$Mineral$calcite,
        $author$project$Mineral$garnet,
        $author$project$Mineral$muscovite,
        $author$project$Mineral$olivine,
        $author$project$Mineral$plagioclase,
        $author$project$Mineral$pyroxenes,
        $author$project$Mineral$quartz
    ]));
    var $author$project$Question$Cleavage = {
        $: "Cleavage"
    };
    var $author$project$Question$ColourPPL = {
        $: "ColourPPL"
    };
    var $author$project$Question$ColourXPL = {
        $: "ColourXPL"
    };
    var $author$project$Question$Extinction = {
        $: "Extinction"
    };
    var $author$project$Question$Pleochroism = {
        $: "Pleochroism"
    };
    var $author$project$Question$Relief = {
        $: "Relief"
    };
    var $author$project$Question$randomProp = A2($elm$random$Random$uniform, $author$project$Question$ColourPPL, _List_fromArray([
        $author$project$Question$ColourXPL,
        $author$project$Question$Cleavage,
        $author$project$Question$Extinction,
        $author$project$Question$Pleochroism,
        $author$project$Question$Relief
    ]));
    var $author$project$Main$generateQuestion = A2($elm$random$Random$generate, $author$project$Main$ShowQuestion, A2($elm$random$Random$pair, $author$project$Mineral$randomMineral, $author$project$Question$randomProp));
    var $author$project$Question$Mineral = function(a1) {
        return {
            $: "Mineral",
            a: a1
        };
    };
    var $author$project$Question$MineralQuestion = F2(function(mineral1, prop1) {
        return {
            mineral: mineral1,
            prop: prop1
        };
    });
    var $author$project$Question$mineralQuestion = F2(function(mineral1, prop1) {
        return $author$project$Question$Mineral(A2($author$project$Question$MineralQuestion, mineral1, prop1));
    });
    var $author$project$Main$update = F2(function(msg1, model1) {
        switch(msg1.$){
            case "Start":
                return _Utils_Tuple2(model1, $author$project$Main$generateQuestion);
            case "ShowAnswer":
                return _Utils_Tuple2(_Utils_update(model1, {
                    status: $author$project$Main$Answer
                }), $elm$core$Platform$Cmd$none);
            case "Incorrect":
                return _Utils_Tuple2(_Utils_update(model1, {
                    incorrect: model1.incorrect + 1
                }), $author$project$Main$generateQuestion);
            case "Correct":
                return _Utils_Tuple2(_Utils_update(model1, {
                    correct: model1.correct + 1
                }), $author$project$Main$generateQuestion);
            default:
                var _v13 = msg1.a;
                var mineral1 = _v13.a;
                var prop1 = _v13.b;
                return _Utils_Tuple2(_Utils_update(model1, {
                    question: $elm$core$Maybe$Just(A2($author$project$Question$mineralQuestion, mineral1, prop1)),
                    status: $author$project$Main$Ask
                }), $elm$core$Platform$Cmd$none);
        }
    });
    var $author$project$Main$Correct = {
        $: "Correct"
    };
    var $author$project$Main$Incorrect = {
        $: "Incorrect"
    };
    var $author$project$Main$ShowAnswer = {
        $: "ShowAnswer"
    };
    var $author$project$Main$Start = {
        $: "Start"
    };
    var $mdgriffith$elm_ui$Internal$Model$Attr = function(a1) {
        return {
            $: "Attr",
            a: a1
        };
    };
    var $mdgriffith$elm_ui$Internal$Model$Button = {
        $: "Button"
    };
    var $mdgriffith$elm_ui$Internal$Model$Describe = function(a1) {
        return {
            $: "Describe",
            a: a1
        };
    };
    var $mdgriffith$elm_ui$Internal$Model$Unkeyed = function(a1) {
        return {
            $: "Unkeyed",
            a: a1
        };
    };
    var $mdgriffith$elm_ui$Internal$Model$AsEl = {
        $: "AsEl"
    };
    var $mdgriffith$elm_ui$Internal$Model$asEl = $mdgriffith$elm_ui$Internal$Model$AsEl;
    var $mdgriffith$elm_ui$Internal$Style$classes = {
        above: "a",
        active: "atv",
        alignBottom: "ab",
        alignCenterX: "cx",
        alignCenterY: "cy",
        alignContainerBottom: "acb",
        alignContainerCenterX: "accx",
        alignContainerCenterY: "accy",
        alignContainerRight: "acr",
        alignLeft: "al",
        alignRight: "ar",
        alignTop: "at",
        alignedHorizontally: "ah",
        alignedVertically: "av",
        any: "s",
        behind: "bh",
        below: "b",
        bold: "w7",
        borderDashed: "bd",
        borderDotted: "bdt",
        borderNone: "bn",
        borderSolid: "bs",
        capturePointerEvents: "cpe",
        clip: "cp",
        clipX: "cpx",
        clipY: "cpy",
        column: "c",
        container: "ctr",
        contentBottom: "cb",
        contentCenterX: "ccx",
        contentCenterY: "ccy",
        contentLeft: "cl",
        contentRight: "cr",
        contentTop: "ct",
        cursorPointer: "cptr",
        cursorText: "ctxt",
        focus: "fcs",
        focusedWithin: "focus-within",
        fullSize: "fs",
        grid: "g",
        hasBehind: "hbh",
        heightContent: "hc",
        heightExact: "he",
        heightFill: "hf",
        heightFillPortion: "hfp",
        hover: "hv",
        imageContainer: "ic",
        inFront: "fr",
        inputLabel: "lbl",
        inputMultiline: "iml",
        inputMultilineFiller: "imlf",
        inputMultilineParent: "imlp",
        inputMultilineWrapper: "implw",
        inputText: "it",
        italic: "i",
        link: "lnk",
        nearby: "nb",
        noTextSelection: "notxt",
        onLeft: "ol",
        onRight: "or",
        opaque: "oq",
        overflowHidden: "oh",
        page: "pg",
        paragraph: "p",
        passPointerEvents: "ppe",
        root: "ui",
        row: "r",
        scrollbars: "sb",
        scrollbarsX: "sbx",
        scrollbarsY: "sby",
        seButton: "sbt",
        single: "e",
        sizeByCapital: "cap",
        spaceEvenly: "sev",
        strike: "sk",
        text: "t",
        textCenter: "tc",
        textExtraBold: "w8",
        textExtraLight: "w2",
        textHeavy: "w9",
        textJustify: "tj",
        textJustifyAll: "tja",
        textLeft: "tl",
        textLight: "w3",
        textMedium: "w5",
        textNormalWeight: "w4",
        textRight: "tr",
        textSemiBold: "w6",
        textThin: "w1",
        textUnitalicized: "tun",
        transition: "ts",
        transparent: "clr",
        underline: "u",
        widthContent: "wc",
        widthExact: "we",
        widthFill: "wf",
        widthFillPortion: "wfp",
        wrapped: "wrp"
    };
    var $elm$json$Json$Encode$bool = _Json_wrap;
    var $elm$html$Html$Attributes$boolProperty = F2(function(key1, bool1) {
        return A2(_VirtualDom_property, key1, $elm$json$Json$Encode$bool(bool1));
    });
    var $elm$html$Html$Attributes$disabled = $elm$html$Html$Attributes$boolProperty("disabled");
    var $mdgriffith$elm_ui$Internal$Model$Generic = {
        $: "Generic"
    };
    var $mdgriffith$elm_ui$Internal$Model$div = $mdgriffith$elm_ui$Internal$Model$Generic;
    var $mdgriffith$elm_ui$Internal$Model$NoNearbyChildren = {
        $: "NoNearbyChildren"
    };
    var $mdgriffith$elm_ui$Internal$Model$columnClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (" " + $mdgriffith$elm_ui$Internal$Style$classes.column);
    var $mdgriffith$elm_ui$Internal$Model$gridClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (" " + $mdgriffith$elm_ui$Internal$Style$classes.grid);
    var $mdgriffith$elm_ui$Internal$Model$pageClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (" " + $mdgriffith$elm_ui$Internal$Style$classes.page);
    var $mdgriffith$elm_ui$Internal$Model$paragraphClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (" " + $mdgriffith$elm_ui$Internal$Style$classes.paragraph);
    var $mdgriffith$elm_ui$Internal$Model$rowClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (" " + $mdgriffith$elm_ui$Internal$Style$classes.row);
    var $mdgriffith$elm_ui$Internal$Model$singleClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (" " + $mdgriffith$elm_ui$Internal$Style$classes.single);
    var $mdgriffith$elm_ui$Internal$Model$contextClasses = function(context1) {
        switch(context1.$){
            case "AsRow":
                return $mdgriffith$elm_ui$Internal$Model$rowClass;
            case "AsColumn":
                return $mdgriffith$elm_ui$Internal$Model$columnClass;
            case "AsEl":
                return $mdgriffith$elm_ui$Internal$Model$singleClass;
            case "AsGrid":
                return $mdgriffith$elm_ui$Internal$Model$gridClass;
            case "AsParagraph":
                return $mdgriffith$elm_ui$Internal$Model$paragraphClass;
            default:
                return $mdgriffith$elm_ui$Internal$Model$pageClass;
        }
    };
    var $mdgriffith$elm_ui$Internal$Model$Keyed = function(a1) {
        return {
            $: "Keyed",
            a: a1
        };
    };
    var $mdgriffith$elm_ui$Internal$Model$NoStyleSheet = {
        $: "NoStyleSheet"
    };
    var $mdgriffith$elm_ui$Internal$Model$Styled = function(a1) {
        return {
            $: "Styled",
            a: a1
        };
    };
    var $mdgriffith$elm_ui$Internal$Model$Unstyled = function(a1) {
        return {
            $: "Unstyled",
            a: a1
        };
    };
    var $mdgriffith$elm_ui$Internal$Model$addChildren = F2(function(existing1, nearbyChildren1) {
        switch(nearbyChildren1.$){
            case "NoNearbyChildren":
                return existing1;
            case "ChildrenBehind":
                var behind1 = nearbyChildren1.a;
                return _Utils_ap(behind1, existing1);
            case "ChildrenInFront":
                var inFront1 = nearbyChildren1.a;
                return _Utils_ap(existing1, inFront1);
            default:
                var behind1 = nearbyChildren1.a;
                var inFront1 = nearbyChildren1.b;
                return _Utils_ap(behind1, _Utils_ap(existing1, inFront1));
        }
    });
    var $mdgriffith$elm_ui$Internal$Model$addKeyedChildren = F3(function(key1, existing1, nearbyChildren1) {
        switch(nearbyChildren1.$){
            case "NoNearbyChildren":
                return existing1;
            case "ChildrenBehind":
                var behind1 = nearbyChildren1.a;
                return _Utils_ap(A2($elm$core$List$map, function(x1) {
                    return _Utils_Tuple2(key1, x1);
                }, behind1), existing1);
            case "ChildrenInFront":
                var inFront1 = nearbyChildren1.a;
                return _Utils_ap(existing1, A2($elm$core$List$map, function(x1) {
                    return _Utils_Tuple2(key1, x1);
                }, inFront1));
            default:
                var behind1 = nearbyChildren1.a;
                var inFront1 = nearbyChildren1.b;
                return _Utils_ap(A2($elm$core$List$map, function(x1) {
                    return _Utils_Tuple2(key1, x1);
                }, behind1), _Utils_ap(existing1, A2($elm$core$List$map, function(x1) {
                    return _Utils_Tuple2(key1, x1);
                }, inFront1)));
        }
    });
    var $mdgriffith$elm_ui$Internal$Model$AsParagraph = {
        $: "AsParagraph"
    };
    var $mdgriffith$elm_ui$Internal$Model$asParagraph = $mdgriffith$elm_ui$Internal$Model$AsParagraph;
    var $mdgriffith$elm_ui$Internal$Flag$Flag = function(a1) {
        return {
            $: "Flag",
            a: a1
        };
    };
    var $mdgriffith$elm_ui$Internal$Flag$Second = function(a1) {
        return {
            $: "Second",
            a: a1
        };
    };
    var $mdgriffith$elm_ui$Internal$Flag$flag = function(i1) {
        return i1 > 31 ? $mdgriffith$elm_ui$Internal$Flag$Second(1 << i1 - 32) : $mdgriffith$elm_ui$Internal$Flag$Flag(1 << i1);
    };
    var $mdgriffith$elm_ui$Internal$Flag$alignBottom = $mdgriffith$elm_ui$Internal$Flag$flag(41);
    var $mdgriffith$elm_ui$Internal$Flag$alignRight = $mdgriffith$elm_ui$Internal$Flag$flag(40);
    var $mdgriffith$elm_ui$Internal$Flag$centerX = $mdgriffith$elm_ui$Internal$Flag$flag(42);
    var $mdgriffith$elm_ui$Internal$Flag$centerY = $mdgriffith$elm_ui$Internal$Flag$flag(43);
    var $elm$core$Set$Set_elm_builtin = function(a1) {
        return {
            $: "Set_elm_builtin",
            a: a1
        };
    };
    var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
    var $mdgriffith$elm_ui$Internal$Model$lengthClassName = function(x1) {
        switch(x1.$){
            case "Px":
                var px1 = x1.a;
                return $elm$core$String$fromInt(px1) + "px";
            case "Content":
                return "auto";
            case "Fill":
                var i1 = x1.a;
                return $elm$core$String$fromInt(i1) + "fr";
            case "Min":
                var min1 = x1.a;
                var len1 = x1.b;
                return "min" + ($elm$core$String$fromInt(min1) + $mdgriffith$elm_ui$Internal$Model$lengthClassName(len1));
            default:
                var max1 = x1.a;
                var len1 = x1.b;
                return "max" + ($elm$core$String$fromInt(max1) + $mdgriffith$elm_ui$Internal$Model$lengthClassName(len1));
        }
    };
    var $elm$core$Basics$round = _Basics_round;
    var $mdgriffith$elm_ui$Internal$Model$floatClass = function(x1) {
        return $elm$core$String$fromInt($elm$core$Basics$round(x1 * 255));
    };
    var $mdgriffith$elm_ui$Internal$Model$transformClass = function(transform1) {
        switch(transform1.$){
            case "Untransformed":
                return $elm$core$Maybe$Nothing;
            case "Moved":
                var _v13 = transform1.a;
                var x1 = _v13.a;
                var y1 = _v13.b;
                var z1 = _v13.c;
                return $elm$core$Maybe$Just("mv-" + ($mdgriffith$elm_ui$Internal$Model$floatClass(x1) + ("-" + ($mdgriffith$elm_ui$Internal$Model$floatClass(y1) + ("-" + $mdgriffith$elm_ui$Internal$Model$floatClass(z1))))));
            default:
                var _v21 = transform1.a;
                var tx1 = _v21.a;
                var ty1 = _v21.b;
                var tz1 = _v21.c;
                var _v31 = transform1.b;
                var sx1 = _v31.a;
                var sy1 = _v31.b;
                var sz1 = _v31.c;
                var _v41 = transform1.c;
                var ox1 = _v41.a;
                var oy1 = _v41.b;
                var oz1 = _v41.c;
                var angle1 = transform1.d;
                return $elm$core$Maybe$Just("tfrm-" + ($mdgriffith$elm_ui$Internal$Model$floatClass(tx1) + ("-" + ($mdgriffith$elm_ui$Internal$Model$floatClass(ty1) + ("-" + ($mdgriffith$elm_ui$Internal$Model$floatClass(tz1) + ("-" + ($mdgriffith$elm_ui$Internal$Model$floatClass(sx1) + ("-" + ($mdgriffith$elm_ui$Internal$Model$floatClass(sy1) + ("-" + ($mdgriffith$elm_ui$Internal$Model$floatClass(sz1) + ("-" + ($mdgriffith$elm_ui$Internal$Model$floatClass(ox1) + ("-" + ($mdgriffith$elm_ui$Internal$Model$floatClass(oy1) + ("-" + ($mdgriffith$elm_ui$Internal$Model$floatClass(oz1) + ("-" + $mdgriffith$elm_ui$Internal$Model$floatClass(angle1))))))))))))))))))));
        }
    };
    var $mdgriffith$elm_ui$Internal$Model$getStyleName = function(style1) {
        switch(style1.$){
            case "Shadows":
                var name1 = style1.a;
                return name1;
            case "Transparency":
                var name1 = style1.a;
                var o1 = style1.b;
                return name1;
            case "Style":
                var _class1 = style1.a;
                return _class1;
            case "FontFamily":
                var name1 = style1.a;
                return name1;
            case "FontSize":
                var i1 = style1.a;
                return "font-size-" + $elm$core$String$fromInt(i1);
            case "Single":
                var _class1 = style1.a;
                return _class1;
            case "Colored":
                var _class1 = style1.a;
                return _class1;
            case "SpacingStyle":
                var cls1 = style1.a;
                var x1 = style1.b;
                var y1 = style1.c;
                return cls1;
            case "PaddingStyle":
                var cls1 = style1.a;
                var top1 = style1.b;
                var right1 = style1.c;
                var bottom1 = style1.d;
                var left1 = style1.e;
                return cls1;
            case "BorderWidth":
                var cls1 = style1.a;
                var top1 = style1.b;
                var right1 = style1.c;
                var bottom1 = style1.d;
                var left1 = style1.e;
                return cls1;
            case "GridTemplateStyle":
                var template1 = style1.a;
                return "grid-rows-" + (A2($elm$core$String$join, "-", A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template1.rows)) + ("-cols-" + (A2($elm$core$String$join, "-", A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template1.columns)) + ("-space-x-" + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template1.spacing.a) + ("-space-y-" + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template1.spacing.b)))))));
            case "GridPosition":
                var pos1 = style1.a;
                return "gp grid-pos-" + ($elm$core$String$fromInt(pos1.row) + ("-" + ($elm$core$String$fromInt(pos1.col) + ("-" + ($elm$core$String$fromInt(pos1.width) + ("-" + $elm$core$String$fromInt(pos1.height)))))));
            case "PseudoSelector":
                var selector1 = style1.a;
                var subStyle1 = style1.b;
                var name1 = function() {
                    switch(selector1.$){
                        case "Focus":
                            return "fs";
                        case "Hover":
                            return "hv";
                        default:
                            return "act";
                    }
                }();
                return A2($elm$core$String$join, " ", A2($elm$core$List$map, function(sty1) {
                    var _v13 = $mdgriffith$elm_ui$Internal$Model$getStyleName(sty1);
                    if (_v13 === "") return "";
                    else {
                        var styleName1 = _v13;
                        return styleName1 + ("-" + name1);
                    }
                }, subStyle1));
            default:
                var x1 = style1.a;
                return A2($elm$core$Maybe$withDefault, "", $mdgriffith$elm_ui$Internal$Model$transformClass(x1));
        }
    };
    var $elm$core$Set$insert = F2(function(key1, _v01) {
        var dict1 = _v01.a;
        return $elm$core$Set$Set_elm_builtin(A3($elm$core$Dict$insert, key1, _Utils_Tuple0, dict1));
    });
    var $elm$core$Dict$member = F2(function(key1, dict1) {
        var _v01 = A2($elm$core$Dict$get, key1, dict1);
        if (_v01.$ === "Just") return true;
        else return false;
    });
    var $elm$core$Set$member = F2(function(key1, _v01) {
        var dict1 = _v01.a;
        return A2($elm$core$Dict$member, key1, dict1);
    });
    var $mdgriffith$elm_ui$Internal$Model$reduceStyles = F2(function(style1, nevermind1) {
        var cache1 = nevermind1.a;
        var existing1 = nevermind1.b;
        var styleName1 = $mdgriffith$elm_ui$Internal$Model$getStyleName(style1);
        return A2($elm$core$Set$member, styleName1, cache1) ? nevermind1 : _Utils_Tuple2(A2($elm$core$Set$insert, styleName1, cache1), A2($elm$core$List$cons, style1, existing1));
    });
    var $mdgriffith$elm_ui$Internal$Model$Property = F2(function(a1, b1) {
        return {
            $: "Property",
            a: a1,
            b: b1
        };
    });
    var $mdgriffith$elm_ui$Internal$Model$Style = F2(function(a1, b1) {
        return {
            $: "Style",
            a: a1,
            b: b1
        };
    });
    var $mdgriffith$elm_ui$Internal$Style$dot = function(c1) {
        return "." + c1;
    };
    var $mdgriffith$elm_ui$Internal$Model$formatColor = function(_v01) {
        var red1 = _v01.a;
        var green1 = _v01.b;
        var blue1 = _v01.c;
        var alpha1 = _v01.d;
        return "rgba(" + ($elm$core$String$fromInt($elm$core$Basics$round(red1 * 255)) + ("," + $elm$core$String$fromInt($elm$core$Basics$round(green1 * 255)) + ("," + $elm$core$String$fromInt($elm$core$Basics$round(blue1 * 255)) + ("," + ($elm$core$String$fromFloat(alpha1) + ")")))));
    };
    var $mdgriffith$elm_ui$Internal$Model$formatBoxShadow = function(shadow1) {
        return A2($elm$core$String$join, " ", A2($elm$core$List$filterMap, $elm$core$Basics$identity, _List_fromArray([
            shadow1.inset ? $elm$core$Maybe$Just("inset") : $elm$core$Maybe$Nothing,
            $elm$core$Maybe$Just($elm$core$String$fromFloat(shadow1.offset.a) + "px"),
            $elm$core$Maybe$Just($elm$core$String$fromFloat(shadow1.offset.b) + "px"),
            $elm$core$Maybe$Just($elm$core$String$fromFloat(shadow1.blur) + "px"),
            $elm$core$Maybe$Just($elm$core$String$fromFloat(shadow1.size) + "px"),
            $elm$core$Maybe$Just($mdgriffith$elm_ui$Internal$Model$formatColor(shadow1.color))
        ])));
    };
    var $elm$core$Maybe$map = F2(function(f1, maybe1) {
        if (maybe1.$ === "Just") {
            var value1 = maybe1.a;
            return $elm$core$Maybe$Just(f1(value1));
        } else return $elm$core$Maybe$Nothing;
    });
    var $elm$core$Tuple$mapFirst = F2(function(func1, _v01) {
        var x1 = _v01.a;
        var y1 = _v01.b;
        return _Utils_Tuple2(func1(x1), y1);
    });
    var $elm$core$Tuple$mapSecond = F2(function(func1, _v01) {
        var x1 = _v01.a;
        var y1 = _v01.b;
        return _Utils_Tuple2(x1, func1(y1));
    });
    var $mdgriffith$elm_ui$Internal$Model$renderFocusStyle = function(focus1) {
        return _List_fromArray([
            A2($mdgriffith$elm_ui$Internal$Model$Style, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.focusedWithin) + ":focus-within", A2($elm$core$List$filterMap, $elm$core$Basics$identity, _List_fromArray([
                A2($elm$core$Maybe$map, function(color1) {
                    return A2($mdgriffith$elm_ui$Internal$Model$Property, "border-color", $mdgriffith$elm_ui$Internal$Model$formatColor(color1));
                }, focus1.borderColor),
                A2($elm$core$Maybe$map, function(color1) {
                    return A2($mdgriffith$elm_ui$Internal$Model$Property, "background-color", $mdgriffith$elm_ui$Internal$Model$formatColor(color1));
                }, focus1.backgroundColor),
                A2($elm$core$Maybe$map, function(shadow1) {
                    return A2($mdgriffith$elm_ui$Internal$Model$Property, "box-shadow", $mdgriffith$elm_ui$Internal$Model$formatBoxShadow({
                        blur: shadow1.blur,
                        color: shadow1.color,
                        inset: false,
                        offset: A2($elm$core$Tuple$mapSecond, $elm$core$Basics$toFloat, A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow1.offset)),
                        size: shadow1.size
                    }));
                }, focus1.shadow),
                $elm$core$Maybe$Just(A2($mdgriffith$elm_ui$Internal$Model$Property, "outline", "none"))
            ]))),
            A2($mdgriffith$elm_ui$Internal$Model$Style, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ":focus .focusable, " + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ".focusable:focus, " + (".ui-slide-bar:focus + " + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + " .focusable-thumb"))), A2($elm$core$List$filterMap, $elm$core$Basics$identity, _List_fromArray([
                A2($elm$core$Maybe$map, function(color1) {
                    return A2($mdgriffith$elm_ui$Internal$Model$Property, "border-color", $mdgriffith$elm_ui$Internal$Model$formatColor(color1));
                }, focus1.borderColor),
                A2($elm$core$Maybe$map, function(color1) {
                    return A2($mdgriffith$elm_ui$Internal$Model$Property, "background-color", $mdgriffith$elm_ui$Internal$Model$formatColor(color1));
                }, focus1.backgroundColor),
                A2($elm$core$Maybe$map, function(shadow1) {
                    return A2($mdgriffith$elm_ui$Internal$Model$Property, "box-shadow", $mdgriffith$elm_ui$Internal$Model$formatBoxShadow({
                        blur: shadow1.blur,
                        color: shadow1.color,
                        inset: false,
                        offset: A2($elm$core$Tuple$mapSecond, $elm$core$Basics$toFloat, A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow1.offset)),
                        size: shadow1.size
                    }));
                }, focus1.shadow),
                $elm$core$Maybe$Just(A2($mdgriffith$elm_ui$Internal$Model$Property, "outline", "none"))
            ])))
        ]);
    };
    var $elm$virtual_dom$VirtualDom$property = F2(function(key1, value1) {
        return A2(_VirtualDom_property, _VirtualDom_noInnerHtmlOrFormAction(key1), _VirtualDom_noJavaScriptOrHtmlJson(value1));
    });
    var $mdgriffith$elm_ui$Internal$Style$AllChildren = F2(function(a1, b1) {
        return {
            $: "AllChildren",
            a: a1,
            b: b1
        };
    });
    var $mdgriffith$elm_ui$Internal$Style$Batch = function(a1) {
        return {
            $: "Batch",
            a: a1
        };
    };
    var $mdgriffith$elm_ui$Internal$Style$Child = F2(function(a1, b1) {
        return {
            $: "Child",
            a: a1,
            b: b1
        };
    });
    var $mdgriffith$elm_ui$Internal$Style$Class = F2(function(a1, b1) {
        return {
            $: "Class",
            a: a1,
            b: b1
        };
    });
    var $mdgriffith$elm_ui$Internal$Style$Descriptor = F2(function(a1, b1) {
        return {
            $: "Descriptor",
            a: a1,
            b: b1
        };
    });
    var $mdgriffith$elm_ui$Internal$Style$Left = {
        $: "Left"
    };
    var $mdgriffith$elm_ui$Internal$Style$Prop = F2(function(a1, b1) {
        return {
            $: "Prop",
            a: a1,
            b: b1
        };
    });
    var $mdgriffith$elm_ui$Internal$Style$Right = {
        $: "Right"
    };
    var $mdgriffith$elm_ui$Internal$Style$Self = function(a1) {
        return {
            $: "Self",
            a: a1
        };
    };
    var $mdgriffith$elm_ui$Internal$Style$Supports = F2(function(a1, b1) {
        return {
            $: "Supports",
            a: a1,
            b: b1
        };
    });
    var $mdgriffith$elm_ui$Internal$Style$Content = function(a1) {
        return {
            $: "Content",
            a: a1
        };
    };
    var $mdgriffith$elm_ui$Internal$Style$Bottom = {
        $: "Bottom"
    };
    var $mdgriffith$elm_ui$Internal$Style$CenterX = {
        $: "CenterX"
    };
    var $mdgriffith$elm_ui$Internal$Style$CenterY = {
        $: "CenterY"
    };
    var $mdgriffith$elm_ui$Internal$Style$Top = {
        $: "Top"
    };
    var $mdgriffith$elm_ui$Internal$Style$alignments = _List_fromArray([
        $mdgriffith$elm_ui$Internal$Style$Top,
        $mdgriffith$elm_ui$Internal$Style$Bottom,
        $mdgriffith$elm_ui$Internal$Style$Right,
        $mdgriffith$elm_ui$Internal$Style$Left,
        $mdgriffith$elm_ui$Internal$Style$CenterX,
        $mdgriffith$elm_ui$Internal$Style$CenterY
    ]);
    var $mdgriffith$elm_ui$Internal$Style$contentName = function(desc1) {
        switch(desc1.a.$){
            case "Top":
                var _v13 = desc1.a;
                return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentTop);
            case "Bottom":
                var _v21 = desc1.a;
                return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentBottom);
            case "Right":
                var _v31 = desc1.a;
                return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentRight);
            case "Left":
                var _v41 = desc1.a;
                return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentLeft);
            case "CenterX":
                var _v51 = desc1.a;
                return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentCenterX);
            default:
                var _v61 = desc1.a;
                return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentCenterY);
        }
    };
    var $mdgriffith$elm_ui$Internal$Style$selfName = function(desc1) {
        switch(desc1.a.$){
            case "Top":
                var _v13 = desc1.a;
                return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignTop);
            case "Bottom":
                var _v21 = desc1.a;
                return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignBottom);
            case "Right":
                var _v31 = desc1.a;
                return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignRight);
            case "Left":
                var _v41 = desc1.a;
                return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignLeft);
            case "CenterX":
                var _v51 = desc1.a;
                return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterX);
            default:
                var _v61 = desc1.a;
                return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY);
        }
    };
    var $mdgriffith$elm_ui$Internal$Style$describeAlignment = function(values1) {
        var createDescription1 = function(alignment1) {
            var _v01 = values1(alignment1);
            var content1 = _v01.a;
            var indiv1 = _v01.b;
            return _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$contentName($mdgriffith$elm_ui$Internal$Style$Content(alignment1)), content1),
                A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$selfName($mdgriffith$elm_ui$Internal$Style$Self(alignment1)), indiv1)
                ]))
            ]);
        };
        return $mdgriffith$elm_ui$Internal$Style$Batch(A2($elm$core$List$concatMap, createDescription1, $mdgriffith$elm_ui$Internal$Style$alignments));
    };
    var $mdgriffith$elm_ui$Internal$Style$elDescription = _List_fromArray([
        A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "flex"),
        A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-direction", "column"),
        A2($mdgriffith$elm_ui$Internal$Style$Prop, "white-space", "pre"),
        A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hasBehind), _List_fromArray([
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "z-index", "0"),
            A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "z-index", "-1")
            ]))
        ])),
        A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.seButton), _List_fromArray([
            A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "0")
                ])),
                A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-self", "auto !important")
                ]))
            ]))
        ])),
        A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightContent), _List_fromArray([
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "height", "auto")
        ])),
        A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill), _List_fromArray([
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "100000")
        ])),
        A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill), _List_fromArray([
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "width", "100%")
        ])),
        A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion), _List_fromArray([
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "width", "100%")
        ])),
        A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthContent), _List_fromArray([
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-self", "flex-start")
        ])),
        $mdgriffith$elm_ui$Internal$Style$describeAlignment(function(alignment1) {
            switch(alignment1.$){
                case "Top":
                    return _Utils_Tuple2(_List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "justify-content", "flex-start")
                    ]), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-bottom", "auto !important"),
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-top", "0 !important")
                    ]));
                case "Bottom":
                    return _Utils_Tuple2(_List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "justify-content", "flex-end")
                    ]), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-top", "auto !important"),
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-bottom", "0 !important")
                    ]));
                case "Right":
                    return _Utils_Tuple2(_List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-items", "flex-end")
                    ]), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-self", "flex-end")
                    ]));
                case "Left":
                    return _Utils_Tuple2(_List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-items", "flex-start")
                    ]), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-self", "flex-start")
                    ]));
                case "CenterX":
                    return _Utils_Tuple2(_List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-items", "center")
                    ]), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-self", "center")
                    ]));
                default:
                    return _Utils_Tuple2(_List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any), _List_fromArray([
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-top", "auto"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-bottom", "auto")
                        ]))
                    ]), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-top", "auto !important"),
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-bottom", "auto !important")
                    ]));
            }
        })
    ]);
    var $mdgriffith$elm_ui$Internal$Style$gridAlignments = function(values1) {
        var createDescription1 = function(alignment1) {
            return _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$selfName($mdgriffith$elm_ui$Internal$Style$Self(alignment1)), values1(alignment1))
                ]))
            ]);
        };
        return $mdgriffith$elm_ui$Internal$Style$Batch(A2($elm$core$List$concatMap, createDescription1, $mdgriffith$elm_ui$Internal$Style$alignments));
    };
    var $mdgriffith$elm_ui$Internal$Style$Above = {
        $: "Above"
    };
    var $mdgriffith$elm_ui$Internal$Style$Behind = {
        $: "Behind"
    };
    var $mdgriffith$elm_ui$Internal$Style$Below = {
        $: "Below"
    };
    var $mdgriffith$elm_ui$Internal$Style$OnLeft = {
        $: "OnLeft"
    };
    var $mdgriffith$elm_ui$Internal$Style$OnRight = {
        $: "OnRight"
    };
    var $mdgriffith$elm_ui$Internal$Style$Within = {
        $: "Within"
    };
    var $mdgriffith$elm_ui$Internal$Style$locations = function() {
        var loc1 = $mdgriffith$elm_ui$Internal$Style$Above;
        var _v01 = function() {
            switch(loc1.$){
                case "Above":
                    return _Utils_Tuple0;
                case "Below":
                    return _Utils_Tuple0;
                case "OnRight":
                    return _Utils_Tuple0;
                case "OnLeft":
                    return _Utils_Tuple0;
                case "Within":
                    return _Utils_Tuple0;
                default:
                    return _Utils_Tuple0;
            }
        }();
        return _List_fromArray([
            $mdgriffith$elm_ui$Internal$Style$Above,
            $mdgriffith$elm_ui$Internal$Style$Below,
            $mdgriffith$elm_ui$Internal$Style$OnRight,
            $mdgriffith$elm_ui$Internal$Style$OnLeft,
            $mdgriffith$elm_ui$Internal$Style$Within,
            $mdgriffith$elm_ui$Internal$Style$Behind
        ]);
    }();
    var $mdgriffith$elm_ui$Internal$Style$baseSheet = _List_fromArray([
        A2($mdgriffith$elm_ui$Internal$Style$Class, "html,body", _List_fromArray([
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "height", "100%"),
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "padding", "0"),
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin", "0")
        ])),
        A2($mdgriffith$elm_ui$Internal$Style$Class, _Utils_ap($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any), _Utils_ap($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single), $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.imageContainer))), _List_fromArray([
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "block"),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Child, "img", _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "max-height", "100%"),
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "object-fit", "cover")
                ]))
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Child, "img", _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "max-width", "100%"),
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "object-fit", "cover")
                ]))
            ]))
        ])),
        A2($mdgriffith$elm_ui$Internal$Style$Class, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ":focus", _List_fromArray([
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "outline", "none")
        ])),
        A2($mdgriffith$elm_ui$Internal$Style$Class, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.root), _List_fromArray([
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "width", "100%"),
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "height", "auto"),
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "min-height", "100%"),
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "z-index", "0"),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, _Utils_ap($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any), $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill)), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "height", "100%"),
                A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "height", "100%")
                ]))
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inFront), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.nearby), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "position", "fixed"),
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "z-index", "20")
                ]))
            ]))
        ])),
        A2($mdgriffith$elm_ui$Internal$Style$Class, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.nearby), _List_fromArray([
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "position", "relative"),
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "border", "none"),
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "flex"),
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-direction", "row"),
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-basis", "auto"),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single), $mdgriffith$elm_ui$Internal$Style$elDescription),
            $mdgriffith$elm_ui$Internal$Style$Batch(function(fn1) {
                return A2($elm$core$List$map, fn1, $mdgriffith$elm_ui$Internal$Style$locations);
            }(function(loc1) {
                switch(loc1.$){
                    case "Above":
                        return A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.above), _List_fromArray([
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "position", "absolute"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "bottom", "100%"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "left", "0"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "width", "100%"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "z-index", "20"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin", "0 !important"),
                            A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill), _List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "height", "auto")
                            ])),
                            A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill), _List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "width", "100%")
                            ])),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "pointer-events", "none"),
                            A2($mdgriffith$elm_ui$Internal$Style$Child, "*", _List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "pointer-events", "auto")
                            ]))
                        ]));
                    case "Below":
                        return A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.below), _List_fromArray([
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "position", "absolute"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "bottom", "0"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "left", "0"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "height", "0"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "width", "100%"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "z-index", "20"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin", "0 !important"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "pointer-events", "none"),
                            A2($mdgriffith$elm_ui$Internal$Style$Child, "*", _List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "pointer-events", "auto")
                            ])),
                            A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill), _List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "height", "auto")
                            ]))
                        ]));
                    case "OnRight":
                        return A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onRight), _List_fromArray([
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "position", "absolute"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "left", "100%"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "top", "0"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "height", "100%"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin", "0 !important"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "z-index", "20"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "pointer-events", "none"),
                            A2($mdgriffith$elm_ui$Internal$Style$Child, "*", _List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "pointer-events", "auto")
                            ]))
                        ]));
                    case "OnLeft":
                        return A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onLeft), _List_fromArray([
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "position", "absolute"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "right", "100%"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "top", "0"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "height", "100%"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin", "0 !important"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "z-index", "20"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "pointer-events", "none"),
                            A2($mdgriffith$elm_ui$Internal$Style$Child, "*", _List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "pointer-events", "auto")
                            ]))
                        ]));
                    case "Within":
                        return A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inFront), _List_fromArray([
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "position", "absolute"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "width", "100%"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "height", "100%"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "left", "0"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "top", "0"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin", "0 !important"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "pointer-events", "none"),
                            A2($mdgriffith$elm_ui$Internal$Style$Child, "*", _List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "pointer-events", "auto")
                            ]))
                        ]));
                    default:
                        return A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind), _List_fromArray([
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "position", "absolute"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "width", "100%"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "height", "100%"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "left", "0"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "top", "0"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin", "0 !important"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "z-index", "0"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "pointer-events", "none"),
                            A2($mdgriffith$elm_ui$Internal$Style$Child, "*", _List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "pointer-events", "auto")
                            ]))
                        ]));
                }
            }))
        ])),
        A2($mdgriffith$elm_ui$Internal$Style$Class, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any), _List_fromArray([
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "position", "relative"),
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "border", "none"),
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-shrink", "0"),
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "flex"),
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-direction", "row"),
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-basis", "auto"),
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "resize", "none"),
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-feature-settings", "inherit"),
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "box-sizing", "border-box"),
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin", "0"),
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "padding", "0"),
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "border-width", "0"),
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "border-style", "solid"),
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-size", "inherit"),
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "color", "inherit"),
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-family", "inherit"),
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "line-height", "1"),
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-weight", "inherit"),
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "text-decoration", "none"),
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-style", "inherit"),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.wrapped), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-wrap", "wrap")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.noTextSelection), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "-moz-user-select", "none"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "-webkit-user-select", "none"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "-ms-user-select", "none"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "user-select", "none")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cursorPointer), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "cursor", "pointer")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cursorText), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "cursor", "text")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.passPointerEvents), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "pointer-events", "none !important")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.capturePointerEvents), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "pointer-events", "auto !important")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.transparent), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "opacity", "0")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.opaque), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "opacity", "1")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot(_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.hover, $mdgriffith$elm_ui$Internal$Style$classes.transparent)) + ":hover", _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "opacity", "0")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot(_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.hover, $mdgriffith$elm_ui$Internal$Style$classes.opaque)) + ":hover", _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "opacity", "1")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot(_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.focus, $mdgriffith$elm_ui$Internal$Style$classes.transparent)) + ":focus", _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "opacity", "0")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot(_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.focus, $mdgriffith$elm_ui$Internal$Style$classes.opaque)) + ":focus", _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "opacity", "1")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot(_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.active, $mdgriffith$elm_ui$Internal$Style$classes.transparent)) + ":active", _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "opacity", "0")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot(_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.active, $mdgriffith$elm_ui$Internal$Style$classes.opaque)) + ":active", _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "opacity", "1")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.transition), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "transition", A2($elm$core$String$join, ", ", A2($elm$core$List$map, function(x1) {
                    return x1 + " 160ms";
                }, _List_fromArray([
                    "transform",
                    "opacity",
                    "filter",
                    "background-color",
                    "color",
                    "font-size"
                ]))))
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.scrollbars), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "overflow", "auto"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-shrink", "1")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.scrollbarsX), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "overflow-x", "auto"),
                A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-shrink", "1")
                ]))
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.scrollbarsY), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "overflow-y", "auto"),
                A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.column), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-shrink", "1")
                ])),
                A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-shrink", "1")
                ]))
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.clip), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "overflow", "hidden")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.clipX), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "overflow-x", "hidden")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.clipY), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "overflow-y", "hidden")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthContent), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "width", "auto")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderNone), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "border-width", "0")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderDashed), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "border-style", "dashed")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderDotted), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "border-style", "dotted")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderSolid), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "border-style", "solid")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "white-space", "pre"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "inline-block")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputText), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "line-height", "1.05"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "background", "transparent"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "text-align", "inherit")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single), $mdgriffith$elm_ui$Internal$Style$elDescription),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "flex"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-direction", "row"),
                A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-basis", "0%"),
                    A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthExact), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-basis", "auto")
                    ])),
                    A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.link), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-basis", "auto")
                    ]))
                ])),
                A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-self", "stretch !important")
                ])),
                A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFillPortion), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-self", "stretch !important")
                ])),
                A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "100000")
                ])),
                A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.container), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "0"),
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-basis", "auto"),
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-self", "stretch")
                ])),
                A2($mdgriffith$elm_ui$Internal$Style$Child, "u:first-of-type." + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerRight, _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "1")
                ])),
                A2($mdgriffith$elm_ui$Internal$Style$Child, "s:first-of-type." + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX, _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "1"),
                    A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterX), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-left", "auto !important")
                    ]))
                ])),
                A2($mdgriffith$elm_ui$Internal$Style$Child, "s:last-of-type." + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX, _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "1"),
                    A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterX), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-right", "auto !important")
                    ]))
                ])),
                A2($mdgriffith$elm_ui$Internal$Style$Child, "s:only-of-type." + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX, _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "1"),
                    A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-top", "auto !important"),
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-bottom", "auto !important")
                    ]))
                ])),
                A2($mdgriffith$elm_ui$Internal$Style$Child, "s:last-of-type." + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX + " ~ u"), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "0")
                ])),
                A2($mdgriffith$elm_ui$Internal$Style$Child, "u:first-of-type." + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerRight + (" ~ s." + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX)), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "0")
                ])),
                $mdgriffith$elm_ui$Internal$Style$describeAlignment(function(alignment1) {
                    switch(alignment1.$){
                        case "Top":
                            return _Utils_Tuple2(_List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-items", "flex-start")
                            ]), _List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-self", "flex-start")
                            ]));
                        case "Bottom":
                            return _Utils_Tuple2(_List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-items", "flex-end")
                            ]), _List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-self", "flex-end")
                            ]));
                        case "Right":
                            return _Utils_Tuple2(_List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "justify-content", "flex-end")
                            ]), _List_Nil);
                        case "Left":
                            return _Utils_Tuple2(_List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "justify-content", "flex-start")
                            ]), _List_Nil);
                        case "CenterX":
                            return _Utils_Tuple2(_List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "justify-content", "center")
                            ]), _List_Nil);
                        default:
                            return _Utils_Tuple2(_List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-items", "center")
                            ]), _List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-self", "center")
                            ]));
                    }
                }),
                A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.spaceEvenly), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "justify-content", "space-between")
                ])),
                A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputLabel), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-items", "baseline")
                ]))
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.column), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "flex"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-direction", "column"),
                A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-basis", "0px"),
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "min-height", "min-content"),
                    A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightExact), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-basis", "auto")
                    ]))
                ])),
                A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "100000")
                ])),
                A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "width", "100%")
                ])),
                A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "width", "100%")
                ])),
                A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthContent), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-self", "flex-start")
                ])),
                A2($mdgriffith$elm_ui$Internal$Style$Child, "u:first-of-type." + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerBottom, _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "1")
                ])),
                A2($mdgriffith$elm_ui$Internal$Style$Child, "s:first-of-type." + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY, _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "1"),
                    A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-top", "auto !important"),
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-bottom", "0 !important")
                    ]))
                ])),
                A2($mdgriffith$elm_ui$Internal$Style$Child, "s:last-of-type." + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY, _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "1"),
                    A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-bottom", "auto !important"),
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-top", "0 !important")
                    ]))
                ])),
                A2($mdgriffith$elm_ui$Internal$Style$Child, "s:only-of-type." + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY, _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "1"),
                    A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-top", "auto !important"),
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-bottom", "auto !important")
                    ]))
                ])),
                A2($mdgriffith$elm_ui$Internal$Style$Child, "s:last-of-type." + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY + " ~ u"), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "0")
                ])),
                A2($mdgriffith$elm_ui$Internal$Style$Child, "u:first-of-type." + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerBottom + (" ~ s." + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY)), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "0")
                ])),
                $mdgriffith$elm_ui$Internal$Style$describeAlignment(function(alignment1) {
                    switch(alignment1.$){
                        case "Top":
                            return _Utils_Tuple2(_List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "justify-content", "flex-start")
                            ]), _List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-bottom", "auto")
                            ]));
                        case "Bottom":
                            return _Utils_Tuple2(_List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "justify-content", "flex-end")
                            ]), _List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-top", "auto")
                            ]));
                        case "Right":
                            return _Utils_Tuple2(_List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-items", "flex-end")
                            ]), _List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-self", "flex-end")
                            ]));
                        case "Left":
                            return _Utils_Tuple2(_List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-items", "flex-start")
                            ]), _List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-self", "flex-start")
                            ]));
                        case "CenterX":
                            return _Utils_Tuple2(_List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-items", "center")
                            ]), _List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-self", "center")
                            ]));
                        default:
                            return _Utils_Tuple2(_List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "justify-content", "center")
                            ]), _List_Nil);
                    }
                }),
                A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.container), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "0"),
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-basis", "auto"),
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "width", "100%"),
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-self", "stretch !important")
                ])),
                A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.spaceEvenly), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "justify-content", "space-between")
                ]))
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.grid), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "-ms-grid"),
                A2($mdgriffith$elm_ui$Internal$Style$Child, ".gp", _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "width", "100%")
                    ]))
                ])),
                A2($mdgriffith$elm_ui$Internal$Style$Supports, _Utils_Tuple2("display", "grid"), _List_fromArray([
                    _Utils_Tuple2("display", "grid")
                ])),
                $mdgriffith$elm_ui$Internal$Style$gridAlignments(function(alignment1) {
                    switch(alignment1.$){
                        case "Top":
                            return _List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "justify-content", "flex-start")
                            ]);
                        case "Bottom":
                            return _List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "justify-content", "flex-end")
                            ]);
                        case "Right":
                            return _List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-items", "flex-end")
                            ]);
                        case "Left":
                            return _List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-items", "flex-start")
                            ]);
                        case "CenterX":
                            return _List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-items", "center")
                            ]);
                        default:
                            return _List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "justify-content", "center")
                            ]);
                    }
                })
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.page), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "block"),
                A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any + ":first-child"), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin", "0 !important")
                ])),
                A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any + ($mdgriffith$elm_ui$Internal$Style$selfName($mdgriffith$elm_ui$Internal$Style$Self($mdgriffith$elm_ui$Internal$Style$Left)) + (":first-child + ." + $mdgriffith$elm_ui$Internal$Style$classes.any))), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin", "0 !important")
                ])),
                A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any + ($mdgriffith$elm_ui$Internal$Style$selfName($mdgriffith$elm_ui$Internal$Style$Self($mdgriffith$elm_ui$Internal$Style$Right)) + (":first-child + ." + $mdgriffith$elm_ui$Internal$Style$classes.any))), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin", "0 !important")
                ])),
                $mdgriffith$elm_ui$Internal$Style$describeAlignment(function(alignment1) {
                    switch(alignment1.$){
                        case "Top":
                            return _Utils_Tuple2(_List_Nil, _List_Nil);
                        case "Bottom":
                            return _Utils_Tuple2(_List_Nil, _List_Nil);
                        case "Right":
                            return _Utils_Tuple2(_List_Nil, _List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "float", "right"),
                                A2($mdgriffith$elm_ui$Internal$Style$Descriptor, "::after", _List_fromArray([
                                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "content", '""'),
                                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "table"),
                                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "clear", "both")
                                ]))
                            ]));
                        case "Left":
                            return _Utils_Tuple2(_List_Nil, _List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "float", "left"),
                                A2($mdgriffith$elm_ui$Internal$Style$Descriptor, "::after", _List_fromArray([
                                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "content", '""'),
                                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "table"),
                                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "clear", "both")
                                ]))
                            ]));
                        case "CenterX":
                            return _Utils_Tuple2(_List_Nil, _List_Nil);
                        default:
                            return _Utils_Tuple2(_List_Nil, _List_Nil);
                    }
                })
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultiline), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "white-space", "pre-wrap !important"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "height", "100%"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "width", "100%"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "background-color", "transparent")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineWrapper), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-basis", "auto")
                ]))
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineParent), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "white-space", "pre-wrap !important"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "cursor", "text"),
                A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineFiller), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "white-space", "pre-wrap !important"),
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "color", "transparent")
                ]))
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.paragraph), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "block"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "white-space", "normal"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "overflow-wrap", "break-word"),
                A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hasBehind), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "z-index", "0"),
                    A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "z-index", "-1")
                    ]))
                ])),
                A2($mdgriffith$elm_ui$Internal$Style$AllChildren, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "inline"),
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "white-space", "normal")
                ])),
                A2($mdgriffith$elm_ui$Internal$Style$AllChildren, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.paragraph), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "inline"),
                    A2($mdgriffith$elm_ui$Internal$Style$Descriptor, "::after", _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "content", "none")
                    ])),
                    A2($mdgriffith$elm_ui$Internal$Style$Descriptor, "::before", _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "content", "none")
                    ]))
                ])),
                A2($mdgriffith$elm_ui$Internal$Style$AllChildren, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "inline"),
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "white-space", "normal"),
                    A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthExact), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "inline-block")
                    ])),
                    A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inFront), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "flex")
                    ])),
                    A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "flex")
                    ])),
                    A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.above), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "flex")
                    ])),
                    A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.below), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "flex")
                    ])),
                    A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onRight), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "flex")
                    ])),
                    A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onLeft), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "flex")
                    ])),
                    A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "inline"),
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "white-space", "normal")
                    ]))
                ])),
                A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "inline")
                ])),
                A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.column), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "inline-flex")
                ])),
                A2($mdgriffith$elm_ui$Internal$Style$Child, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.grid), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "inline-grid")
                ])),
                $mdgriffith$elm_ui$Internal$Style$describeAlignment(function(alignment1) {
                    switch(alignment1.$){
                        case "Top":
                            return _Utils_Tuple2(_List_Nil, _List_Nil);
                        case "Bottom":
                            return _Utils_Tuple2(_List_Nil, _List_Nil);
                        case "Right":
                            return _Utils_Tuple2(_List_Nil, _List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "float", "right")
                            ]));
                        case "Left":
                            return _Utils_Tuple2(_List_Nil, _List_fromArray([
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "float", "left")
                            ]));
                        case "CenterX":
                            return _Utils_Tuple2(_List_Nil, _List_Nil);
                        default:
                            return _Utils_Tuple2(_List_Nil, _List_Nil);
                    }
                })
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, ".hidden", _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "none")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textThin), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-weight", "100")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textExtraLight), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-weight", "200")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textLight), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-weight", "300")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textNormalWeight), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-weight", "400")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textMedium), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-weight", "500")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textSemiBold), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-weight", "600")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bold), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-weight", "700")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textExtraBold), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-weight", "800")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textHeavy), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-weight", "900")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.italic), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-style", "italic")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.strike), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "text-decoration", "line-through")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.underline), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "text-decoration", "underline"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "text-decoration-skip-ink", "auto"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "text-decoration-skip", "ink")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, _Utils_ap($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.underline), $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.strike)), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "text-decoration", "line-through underline"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "text-decoration-skip-ink", "auto"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "text-decoration-skip", "ink")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textUnitalicized), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-style", "normal")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textJustify), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "text-align", "justify")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textJustifyAll), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "text-align", "justify-all")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textCenter), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "text-align", "center")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textRight), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "text-align", "right")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textLeft), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "text-align", "left")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Descriptor, ".modal", _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "position", "fixed"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "left", "0"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "top", "0"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "width", "100%"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "height", "100%"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "pointer-events", "none")
            ]))
        ]))
    ]);
    var $mdgriffith$elm_ui$Internal$Style$fontVariant = function(_var1) {
        return _List_fromArray([
            A2($mdgriffith$elm_ui$Internal$Style$Class, ".v-" + _var1, _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-feature-settings", '"' + (_var1 + '"'))
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Class, ".v-" + (_var1 + "-off"), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-feature-settings", '"' + (_var1 + '" 0'))
            ]))
        ]);
    };
    var $mdgriffith$elm_ui$Internal$Style$commonValues = $elm$core$List$concat(_List_fromArray([
        A2($elm$core$List$map, function(x1) {
            return A2($mdgriffith$elm_ui$Internal$Style$Class, ".border-" + $elm$core$String$fromInt(x1), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "border-width", $elm$core$String$fromInt(x1) + "px")
            ]));
        }, A2($elm$core$List$range, 0, 6)),
        A2($elm$core$List$map, function(i1) {
            return A2($mdgriffith$elm_ui$Internal$Style$Class, ".font-size-" + $elm$core$String$fromInt(i1), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-size", $elm$core$String$fromInt(i1) + "px")
            ]));
        }, A2($elm$core$List$range, 8, 32)),
        A2($elm$core$List$map, function(i1) {
            return A2($mdgriffith$elm_ui$Internal$Style$Class, ".p-" + $elm$core$String$fromInt(i1), _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "padding", $elm$core$String$fromInt(i1) + "px")
            ]));
        }, A2($elm$core$List$range, 0, 24)),
        _List_fromArray([
            A2($mdgriffith$elm_ui$Internal$Style$Class, ".v-smcp", _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-variant", "small-caps")
            ])),
            A2($mdgriffith$elm_ui$Internal$Style$Class, ".v-smcp-off", _List_fromArray([
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-variant", "normal")
            ]))
        ]),
        $mdgriffith$elm_ui$Internal$Style$fontVariant("zero"),
        $mdgriffith$elm_ui$Internal$Style$fontVariant("onum"),
        $mdgriffith$elm_ui$Internal$Style$fontVariant("liga"),
        $mdgriffith$elm_ui$Internal$Style$fontVariant("dlig"),
        $mdgriffith$elm_ui$Internal$Style$fontVariant("ordn"),
        $mdgriffith$elm_ui$Internal$Style$fontVariant("tnum"),
        $mdgriffith$elm_ui$Internal$Style$fontVariant("afrc"),
        $mdgriffith$elm_ui$Internal$Style$fontVariant("frac")
    ]));
    var $mdgriffith$elm_ui$Internal$Style$explainer = "\n.explain {\n    border: 6px solid rgb(174, 121, 15) !important;\n}\n.explain > ." + ($mdgriffith$elm_ui$Internal$Style$classes.any + (" {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n.ctr {\n    border: none !important;\n}\n.explain > .ctr > ." + ($mdgriffith$elm_ui$Internal$Style$classes.any + " {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n")));
    var $mdgriffith$elm_ui$Internal$Style$inputTextReset = '\ninput[type="search"],\ninput[type="search"]::-webkit-search-decoration,\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-results-button,\ninput[type="search"]::-webkit-search-results-decoration {\n  -webkit-appearance:none;\n}\n';
    var $mdgriffith$elm_ui$Internal$Style$sliderReset = "\ninput[type=range] {\n  -webkit-appearance: none; \n  background: transparent;\n  position:absolute;\n  left:0;\n  top:0;\n  z-index:10;\n  width: 100%;\n  outline: dashed 1px;\n  height: 100%;\n  opacity: 0;\n}\n";
    var $mdgriffith$elm_ui$Internal$Style$thumbReset = "\ninput[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-moz-range-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-ms-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range][orient=vertical]{\n    writing-mode: bt-lr; /* IE */\n    -webkit-appearance: slider-vertical;  /* WebKit */\n}\n";
    var $mdgriffith$elm_ui$Internal$Style$trackReset = "\ninput[type=range]::-moz-range-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-ms-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-webkit-slider-runnable-track {\n    background: transparent;\n    cursor: pointer;\n}\n";
    var $mdgriffith$elm_ui$Internal$Style$overrides = "@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {" + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row) + (" > " + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + (" { flex-basis: auto !important; } " + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row) + (" > " + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.container) + (" { flex-basis: auto !important; }}" + ($mdgriffith$elm_ui$Internal$Style$inputTextReset + ($mdgriffith$elm_ui$Internal$Style$sliderReset + ($mdgriffith$elm_ui$Internal$Style$trackReset + ($mdgriffith$elm_ui$Internal$Style$thumbReset + $mdgriffith$elm_ui$Internal$Style$explainer)))))))))))))));
    var $elm$core$String$concat = function(strings1) {
        return A2($elm$core$String$join, "", strings1);
    };
    var $mdgriffith$elm_ui$Internal$Style$Intermediate = function(a1) {
        return {
            $: "Intermediate",
            a: a1
        };
    };
    var $mdgriffith$elm_ui$Internal$Style$emptyIntermediate = F2(function(selector1, closing1) {
        return $mdgriffith$elm_ui$Internal$Style$Intermediate({
            closing: closing1,
            others: _List_Nil,
            props: _List_Nil,
            selector: selector1
        });
    });
    var $mdgriffith$elm_ui$Internal$Style$renderRules = F2(function(_v01, rulesToRender1) {
        var parent1 = _v01.a;
        var generateIntermediates1 = F2(function(rule1, rendered1) {
            switch(rule1.$){
                case "Prop":
                    var name1 = rule1.a;
                    var val1 = rule1.b;
                    return _Utils_update(rendered1, {
                        props: A2($elm$core$List$cons, _Utils_Tuple2(name1, val1), rendered1.props)
                    });
                case "Supports":
                    var _v21 = rule1.a;
                    var prop1 = _v21.a;
                    var value1 = _v21.b;
                    var props1 = rule1.b;
                    return _Utils_update(rendered1, {
                        others: A2($elm$core$List$cons, $mdgriffith$elm_ui$Internal$Style$Intermediate({
                            closing: "\n}",
                            others: _List_Nil,
                            props: props1,
                            selector: "@supports (" + (prop1 + (":" + (value1 + (") {" + parent1.selector))))
                        }), rendered1.others)
                    });
                case "Adjacent":
                    var selector1 = rule1.a;
                    var adjRules1 = rule1.b;
                    return _Utils_update(rendered1, {
                        others: A2($elm$core$List$cons, A2($mdgriffith$elm_ui$Internal$Style$renderRules, A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent1.selector + (" + " + selector1), ""), adjRules1), rendered1.others)
                    });
                case "Child":
                    var child1 = rule1.a;
                    var childRules1 = rule1.b;
                    return _Utils_update(rendered1, {
                        others: A2($elm$core$List$cons, A2($mdgriffith$elm_ui$Internal$Style$renderRules, A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent1.selector + (" > " + child1), ""), childRules1), rendered1.others)
                    });
                case "AllChildren":
                    var child1 = rule1.a;
                    var childRules1 = rule1.b;
                    return _Utils_update(rendered1, {
                        others: A2($elm$core$List$cons, A2($mdgriffith$elm_ui$Internal$Style$renderRules, A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent1.selector + (" " + child1), ""), childRules1), rendered1.others)
                    });
                case "Descriptor":
                    var descriptor1 = rule1.a;
                    var descriptorRules1 = rule1.b;
                    return _Utils_update(rendered1, {
                        others: A2($elm$core$List$cons, A2($mdgriffith$elm_ui$Internal$Style$renderRules, A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, _Utils_ap(parent1.selector, descriptor1), ""), descriptorRules1), rendered1.others)
                    });
                default:
                    var batched1 = rule1.a;
                    return _Utils_update(rendered1, {
                        others: A2($elm$core$List$cons, A2($mdgriffith$elm_ui$Internal$Style$renderRules, A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent1.selector, ""), batched1), rendered1.others)
                    });
            }
        });
        return $mdgriffith$elm_ui$Internal$Style$Intermediate(A3($elm$core$List$foldr, generateIntermediates1, parent1, rulesToRender1));
    });
    var $mdgriffith$elm_ui$Internal$Style$renderCompact = function(styleClasses1) {
        var renderValues1 = function(values1) {
            return $elm$core$String$concat(A2($elm$core$List$map, function(_v31) {
                var x1 = _v31.a;
                var y1 = _v31.b;
                return x1 + (":" + (y1 + ";"));
            }, values1));
        };
        var renderClass1 = function(rule1) {
            var _v21 = rule1.props;
            if (!_v21.b) return "";
            else return rule1.selector + ("{" + (renderValues1(rule1.props) + (rule1.closing + "}")));
        };
        var renderIntermediate1 = function(_v01) {
            var rule1 = _v01.a;
            return _Utils_ap(renderClass1(rule1), $elm$core$String$concat(A2($elm$core$List$map, renderIntermediate1, rule1.others)));
        };
        return $elm$core$String$concat(A2($elm$core$List$map, renderIntermediate1, A3($elm$core$List$foldr, F2(function(_v13, existing1) {
            var name1 = _v13.a;
            var styleRules1 = _v13.b;
            return A2($elm$core$List$cons, A2($mdgriffith$elm_ui$Internal$Style$renderRules, A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, name1, ""), styleRules1), existing1);
        }), _List_Nil, styleClasses1)));
    };
    var $mdgriffith$elm_ui$Internal$Style$rules = _Utils_ap($mdgriffith$elm_ui$Internal$Style$overrides, $mdgriffith$elm_ui$Internal$Style$renderCompact(_Utils_ap($mdgriffith$elm_ui$Internal$Style$baseSheet, $mdgriffith$elm_ui$Internal$Style$commonValues)));
    var $mdgriffith$elm_ui$Internal$Model$staticRoot = function(opts1) {
        var _v01 = opts1.mode;
        switch(_v01.$){
            case "Layout":
                return A3($elm$virtual_dom$VirtualDom$node, "div", _List_Nil, _List_fromArray([
                    A3($elm$virtual_dom$VirtualDom$node, "style", _List_Nil, _List_fromArray([
                        $elm$virtual_dom$VirtualDom$text($mdgriffith$elm_ui$Internal$Style$rules)
                    ]))
                ]));
            case "NoStaticStyleSheet":
                return $elm$virtual_dom$VirtualDom$text("");
            default:
                return A3($elm$virtual_dom$VirtualDom$node, "elm-ui-static-rules", _List_fromArray([
                    A2($elm$virtual_dom$VirtualDom$property, "rules", $elm$json$Json$Encode$string($mdgriffith$elm_ui$Internal$Style$rules))
                ]), _List_Nil);
        }
    };
    var $elm$core$List$any = F2(function(isOkay1, list1) {
        any: while(true){
            if (!list1.b) return false;
            else {
                var x1 = list1.a;
                var xs1 = list1.b;
                if (isOkay1(x1)) return true;
                else {
                    var $temp$isOkay1 = isOkay1, $temp$list1 = xs1;
                    isOkay1 = $temp$isOkay1;
                    list1 = $temp$list1;
                    continue any;
                }
            }
        }
    });
    var $mdgriffith$elm_ui$Internal$Model$fontName = function(font1) {
        switch(font1.$){
            case "Serif":
                return "serif";
            case "SansSerif":
                return "sans-serif";
            case "Monospace":
                return "monospace";
            case "Typeface":
                var name1 = font1.a;
                return '"' + (name1 + '"');
            case "ImportFont":
                var name1 = font1.a;
                var url1 = font1.b;
                return '"' + (name1 + '"');
            default:
                var name1 = font1.a.name;
                return '"' + (name1 + '"');
        }
    };
    var $mdgriffith$elm_ui$Internal$Model$isSmallCaps = function(_var1) {
        switch(_var1.$){
            case "VariantActive":
                var name1 = _var1.a;
                return name1 === "smcp";
            case "VariantOff":
                var name1 = _var1.a;
                return false;
            default:
                var name1 = _var1.a;
                var index1 = _var1.b;
                return name1 === "smcp" && index1 === 1;
        }
    };
    var $mdgriffith$elm_ui$Internal$Model$hasSmallCaps = function(typeface1) {
        if (typeface1.$ === "FontWith") {
            var font1 = typeface1.a;
            return A2($elm$core$List$any, $mdgriffith$elm_ui$Internal$Model$isSmallCaps, font1.variants);
        } else return false;
    };
    var $elm$core$Basics$min = F2(function(x1, y1) {
        return _Utils_cmp(x1, y1) < 0 ? x1 : y1;
    });
    var $mdgriffith$elm_ui$Internal$Model$renderProps = F3(function(force1, _v01, existing1) {
        var key1 = _v01.a;
        var val1 = _v01.b;
        return force1 ? existing1 + ("\n  " + (key1 + (": " + (val1 + " !important;")))) : existing1 + ("\n  " + (key1 + (": " + (val1 + ";"))));
    });
    var $mdgriffith$elm_ui$Internal$Model$renderStyle = F4(function(options1, maybePseudo1, selector1, props1) {
        if (maybePseudo1.$ === "Nothing") return _List_fromArray([
            selector1 + ("{" + (A3($elm$core$List$foldl, $mdgriffith$elm_ui$Internal$Model$renderProps(false), "", props1) + "\n}"))
        ]);
        else {
            var pseudo1 = maybePseudo1.a;
            switch(pseudo1.$){
                case "Hover":
                    var _v21 = options1.hover;
                    switch(_v21.$){
                        case "NoHover":
                            return _List_Nil;
                        case "ForceHover":
                            return _List_fromArray([
                                selector1 + ("-hv {" + (A3($elm$core$List$foldl, $mdgriffith$elm_ui$Internal$Model$renderProps(true), "", props1) + "\n}"))
                            ]);
                        default:
                            return _List_fromArray([
                                selector1 + ("-hv:hover {" + (A3($elm$core$List$foldl, $mdgriffith$elm_ui$Internal$Model$renderProps(false), "", props1) + "\n}"))
                            ]);
                    }
                case "Focus":
                    var renderedProps1 = A3($elm$core$List$foldl, $mdgriffith$elm_ui$Internal$Model$renderProps(false), "", props1);
                    return _List_fromArray([
                        selector1 + ("-fs:focus {" + (renderedProps1 + "\n}")),
                        "." + ($mdgriffith$elm_ui$Internal$Style$classes.any + (":focus " + (selector1 + "-fs  {"))) + (renderedProps1 + "\n}"),
                        selector1 + "-fs:focus-within {" + (renderedProps1 + "\n}"),
                        ".ui-slide-bar:focus + " + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + (" .focusable-thumb" + (selector1 + "-fs {"))) + (renderedProps1 + "\n}")
                    ]);
                default:
                    return _List_fromArray([
                        selector1 + ("-act:active {" + (A3($elm$core$List$foldl, $mdgriffith$elm_ui$Internal$Model$renderProps(false), "", props1) + "\n}"))
                    ]);
            }
        }
    });
    var $mdgriffith$elm_ui$Internal$Model$renderVariant = function(_var1) {
        switch(_var1.$){
            case "VariantActive":
                var name1 = _var1.a;
                return '"' + (name1 + '"');
            case "VariantOff":
                var name1 = _var1.a;
                return '"' + (name1 + '" 0');
            default:
                var name1 = _var1.a;
                var index1 = _var1.b;
                return '"' + (name1 + ('" ' + $elm$core$String$fromInt(index1)));
        }
    };
    var $mdgriffith$elm_ui$Internal$Model$renderVariants = function(typeface1) {
        if (typeface1.$ === "FontWith") {
            var font1 = typeface1.a;
            return $elm$core$Maybe$Just(A2($elm$core$String$join, ", ", A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$renderVariant, font1.variants)));
        } else return $elm$core$Maybe$Nothing;
    };
    var $mdgriffith$elm_ui$Internal$Model$transformValue = function(transform1) {
        switch(transform1.$){
            case "Untransformed":
                return $elm$core$Maybe$Nothing;
            case "Moved":
                var _v13 = transform1.a;
                var x1 = _v13.a;
                var y1 = _v13.b;
                var z1 = _v13.c;
                return $elm$core$Maybe$Just("translate3d(" + ($elm$core$String$fromFloat(x1) + ("px, " + ($elm$core$String$fromFloat(y1) + ("px, " + ($elm$core$String$fromFloat(z1) + "px)"))))));
            default:
                var _v21 = transform1.a;
                var tx1 = _v21.a;
                var ty1 = _v21.b;
                var tz1 = _v21.c;
                var _v31 = transform1.b;
                var sx1 = _v31.a;
                var sy1 = _v31.b;
                var sz1 = _v31.c;
                var _v41 = transform1.c;
                var ox1 = _v41.a;
                var oy1 = _v41.b;
                var oz1 = _v41.c;
                var angle1 = transform1.d;
                var translate1 = "translate3d(" + ($elm$core$String$fromFloat(tx1) + ("px, " + ($elm$core$String$fromFloat(ty1) + ("px, " + ($elm$core$String$fromFloat(tz1) + "px)")))));
                var scale1 = "scale3d(" + ($elm$core$String$fromFloat(sx1) + (", " + ($elm$core$String$fromFloat(sy1) + (", " + ($elm$core$String$fromFloat(sz1) + ")")))));
                var rotate1 = "rotate3d(" + ($elm$core$String$fromFloat(ox1) + (", " + ($elm$core$String$fromFloat(oy1) + (", " + ($elm$core$String$fromFloat(oz1) + (", " + ($elm$core$String$fromFloat(angle1) + "rad)")))))));
                return $elm$core$Maybe$Just(translate1 + (" " + (scale1 + (" " + rotate1))));
        }
    };
    var $mdgriffith$elm_ui$Internal$Model$renderStyleRule = F3(function(options1, rule1, maybePseudo1) {
        switch(rule1.$){
            case "Style":
                var selector1 = rule1.a;
                var props1 = rule1.b;
                return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options1, maybePseudo1, selector1, props1);
            case "Shadows":
                var name1 = rule1.a;
                var prop1 = rule1.b;
                return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options1, maybePseudo1, "." + name1, _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Model$Property, "box-shadow", prop1)
                ]));
            case "Transparency":
                var name1 = rule1.a;
                var transparency1 = rule1.b;
                var opacity1 = A2($elm$core$Basics$max, 0, A2($elm$core$Basics$min, 1, 1 - transparency1));
                return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options1, maybePseudo1, "." + name1, _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Model$Property, "opacity", $elm$core$String$fromFloat(opacity1))
                ]));
            case "FontSize":
                var i1 = rule1.a;
                return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options1, maybePseudo1, ".font-size-" + $elm$core$String$fromInt(i1), _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Model$Property, "font-size", $elm$core$String$fromInt(i1) + "px")
                ]));
            case "FontFamily":
                var name1 = rule1.a;
                var typefaces1 = rule1.b;
                var features1 = A2($elm$core$String$join, ", ", A2($elm$core$List$filterMap, $mdgriffith$elm_ui$Internal$Model$renderVariants, typefaces1));
                var families1 = _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Model$Property, "font-family", A2($elm$core$String$join, ", ", A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$fontName, typefaces1))),
                    A2($mdgriffith$elm_ui$Internal$Model$Property, "font-feature-settings", features1),
                    A2($mdgriffith$elm_ui$Internal$Model$Property, "font-variant", A2($elm$core$List$any, $mdgriffith$elm_ui$Internal$Model$hasSmallCaps, typefaces1) ? "small-caps" : "normal")
                ]);
                return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options1, maybePseudo1, "." + name1, families1);
            case "Single":
                var _class1 = rule1.a;
                var prop1 = rule1.b;
                var val1 = rule1.c;
                return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options1, maybePseudo1, "." + _class1, _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Model$Property, prop1, val1)
                ]));
            case "Colored":
                var _class1 = rule1.a;
                var prop1 = rule1.b;
                var color1 = rule1.c;
                return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options1, maybePseudo1, "." + _class1, _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Model$Property, prop1, $mdgriffith$elm_ui$Internal$Model$formatColor(color1))
                ]));
            case "SpacingStyle":
                var cls1 = rule1.a;
                var x1 = rule1.b;
                var y1 = rule1.c;
                var yPx1 = $elm$core$String$fromInt(y1) + "px";
                var xPx1 = $elm$core$String$fromInt(x1) + "px";
                var single1 = "." + $mdgriffith$elm_ui$Internal$Style$classes.single;
                var row1 = "." + $mdgriffith$elm_ui$Internal$Style$classes.row;
                var wrappedRow1 = "." + ($mdgriffith$elm_ui$Internal$Style$classes.wrapped + row1);
                var right1 = "." + $mdgriffith$elm_ui$Internal$Style$classes.alignRight;
                var paragraph1 = "." + $mdgriffith$elm_ui$Internal$Style$classes.paragraph;
                var page1 = "." + $mdgriffith$elm_ui$Internal$Style$classes.page;
                var left1 = "." + $mdgriffith$elm_ui$Internal$Style$classes.alignLeft;
                var halfY1 = $elm$core$String$fromFloat(y1 / 2) + "px";
                var halfX1 = $elm$core$String$fromFloat(x1 / 2) + "px";
                var column1 = "." + $mdgriffith$elm_ui$Internal$Style$classes.column;
                var _class1 = "." + cls1;
                var any1 = "." + $mdgriffith$elm_ui$Internal$Style$classes.any;
                return $elm$core$List$concat(_List_fromArray([
                    A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options1, maybePseudo1, _class1 + (row1 + (" > " + (any1 + (" + " + any1)))), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Model$Property, "margin-left", xPx1)
                    ])),
                    A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options1, maybePseudo1, _class1 + (wrappedRow1 + (" > " + any1)), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Model$Property, "margin", halfY1 + (" " + halfX1))
                    ])),
                    A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options1, maybePseudo1, _class1 + (column1 + (" > " + (any1 + (" + " + any1)))), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Model$Property, "margin-top", yPx1)
                    ])),
                    A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options1, maybePseudo1, _class1 + (page1 + (" > " + (any1 + (" + " + any1)))), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Model$Property, "margin-top", yPx1)
                    ])),
                    A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options1, maybePseudo1, _class1 + (page1 + (" > " + left1)), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Model$Property, "margin-right", xPx1)
                    ])),
                    A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options1, maybePseudo1, _class1 + (page1 + (" > " + right1)), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Model$Property, "margin-left", xPx1)
                    ])),
                    A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options1, maybePseudo1, _Utils_ap(_class1, paragraph1), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Model$Property, "line-height", "calc(1em + " + ($elm$core$String$fromInt(y1) + "px)"))
                    ])),
                    A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options1, maybePseudo1, "textarea" + (any1 + _class1), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Model$Property, "line-height", "calc(1em + " + ($elm$core$String$fromInt(y1) + "px)")),
                        A2($mdgriffith$elm_ui$Internal$Model$Property, "height", "calc(100% + " + ($elm$core$String$fromInt(y1) + "px)"))
                    ])),
                    A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options1, maybePseudo1, _class1 + (paragraph1 + (" > " + left1)), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Model$Property, "margin-right", xPx1)
                    ])),
                    A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options1, maybePseudo1, _class1 + (paragraph1 + (" > " + right1)), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Model$Property, "margin-left", xPx1)
                    ])),
                    A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options1, maybePseudo1, _class1 + (paragraph1 + "::after"), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Model$Property, "content", "''"),
                        A2($mdgriffith$elm_ui$Internal$Model$Property, "display", "block"),
                        A2($mdgriffith$elm_ui$Internal$Model$Property, "height", "0"),
                        A2($mdgriffith$elm_ui$Internal$Model$Property, "width", "0"),
                        A2($mdgriffith$elm_ui$Internal$Model$Property, "margin-top", $elm$core$String$fromInt(-1 * (y1 / 2 | 0)) + "px")
                    ])),
                    A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options1, maybePseudo1, _class1 + (paragraph1 + "::before"), _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Model$Property, "content", "''"),
                        A2($mdgriffith$elm_ui$Internal$Model$Property, "display", "block"),
                        A2($mdgriffith$elm_ui$Internal$Model$Property, "height", "0"),
                        A2($mdgriffith$elm_ui$Internal$Model$Property, "width", "0"),
                        A2($mdgriffith$elm_ui$Internal$Model$Property, "margin-bottom", $elm$core$String$fromInt(-1 * (y1 / 2 | 0)) + "px")
                    ]))
                ]));
            case "PaddingStyle":
                var cls1 = rule1.a;
                var top1 = rule1.b;
                var right1 = rule1.c;
                var bottom1 = rule1.d;
                var left1 = rule1.e;
                var _class1 = "." + cls1;
                return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options1, maybePseudo1, _class1, _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Model$Property, "padding", $elm$core$String$fromFloat(top1) + ("px " + ($elm$core$String$fromFloat(right1) + ("px " + ($elm$core$String$fromFloat(bottom1) + ("px " + ($elm$core$String$fromFloat(left1) + "px")))))))
                ]));
            case "BorderWidth":
                var cls1 = rule1.a;
                var top1 = rule1.b;
                var right1 = rule1.c;
                var bottom1 = rule1.d;
                var left1 = rule1.e;
                var _class1 = "." + cls1;
                return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options1, maybePseudo1, _class1, _List_fromArray([
                    A2($mdgriffith$elm_ui$Internal$Model$Property, "border-width", $elm$core$String$fromInt(top1) + ("px " + ($elm$core$String$fromInt(right1) + ("px " + ($elm$core$String$fromInt(bottom1) + ("px " + ($elm$core$String$fromInt(left1) + "px")))))))
                ]));
            case "GridTemplateStyle":
                var template1 = rule1.a;
                var toGridLengthHelper1 = F3(function(minimum1, maximum1, x1) {
                    toGridLengthHelper: while(true)switch(x1.$){
                        case "Px":
                            var px1 = x1.a;
                            return $elm$core$String$fromInt(px1) + "px";
                        case "Content":
                            var _v21 = _Utils_Tuple2(minimum1, maximum1);
                            if (_v21.a.$ === "Nothing") {
                                if (_v21.b.$ === "Nothing") {
                                    var _v31 = _v21.a;
                                    var _v41 = _v21.b;
                                    return "max-content";
                                } else {
                                    var _v61 = _v21.a;
                                    var maxSize1 = _v21.b.a;
                                    return "minmax(max-content, " + ($elm$core$String$fromInt(maxSize1) + "px)");
                                }
                            } else if (_v21.b.$ === "Nothing") {
                                var minSize1 = _v21.a.a;
                                var _v51 = _v21.b;
                                return "minmax(" + ($elm$core$String$fromInt(minSize1) + "px, max-content)");
                            } else {
                                var minSize1 = _v21.a.a;
                                var maxSize1 = _v21.b.a;
                                return "minmax(" + ($elm$core$String$fromInt(minSize1) + ("px, " + ($elm$core$String$fromInt(maxSize1) + "px)")));
                            }
                        case "Fill":
                            var i1 = x1.a;
                            var _v71 = _Utils_Tuple2(minimum1, maximum1);
                            if (_v71.a.$ === "Nothing") {
                                if (_v71.b.$ === "Nothing") {
                                    var _v81 = _v71.a;
                                    var _v91 = _v71.b;
                                    return $elm$core$String$fromInt(i1) + "fr";
                                } else {
                                    var _v111 = _v71.a;
                                    var maxSize1 = _v71.b.a;
                                    return "minmax(max-content, " + ($elm$core$String$fromInt(maxSize1) + "px)");
                                }
                            } else if (_v71.b.$ === "Nothing") {
                                var minSize1 = _v71.a.a;
                                var _v101 = _v71.b;
                                return "minmax(" + ($elm$core$String$fromInt(minSize1) + ("px, " + ($elm$core$String$fromInt(i1) + "frfr)")));
                            } else {
                                var minSize1 = _v71.a.a;
                                var maxSize1 = _v71.b.a;
                                return "minmax(" + ($elm$core$String$fromInt(minSize1) + ("px, " + ($elm$core$String$fromInt(maxSize1) + "px)")));
                            }
                        case "Min":
                            var m1 = x1.a;
                            var len1 = x1.b;
                            var $temp$minimum1 = $elm$core$Maybe$Just(m1), $temp$maximum1 = maximum1, $temp$x1 = len1;
                            minimum1 = $temp$minimum1;
                            maximum1 = $temp$maximum1;
                            x1 = $temp$x1;
                            continue toGridLengthHelper;
                        default:
                            var m1 = x1.a;
                            var len1 = x1.b;
                            var $temp$minimum1 = minimum1, $temp$maximum1 = $elm$core$Maybe$Just(m1), $temp$x1 = len1;
                            minimum1 = $temp$minimum1;
                            maximum1 = $temp$maximum1;
                            x1 = $temp$x1;
                            continue toGridLengthHelper;
                    }
                });
                var toGridLength1 = function(x1) {
                    return A3(toGridLengthHelper1, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing, x1);
                };
                var xSpacing1 = toGridLength1(template1.spacing.a);
                var ySpacing1 = toGridLength1(template1.spacing.b);
                var rows1 = function(x1) {
                    return "grid-template-rows: " + (x1 + ";");
                }(A2($elm$core$String$join, " ", A2($elm$core$List$map, toGridLength1, template1.rows)));
                var msRows1 = function(x1) {
                    return "-ms-grid-rows: " + (x1 + ";");
                }(A2($elm$core$String$join, ySpacing1, A2($elm$core$List$map, toGridLength1, template1.columns)));
                var msColumns1 = function(x1) {
                    return "-ms-grid-columns: " + (x1 + ";");
                }(A2($elm$core$String$join, ySpacing1, A2($elm$core$List$map, toGridLength1, template1.columns)));
                var gapY1 = "grid-row-gap:" + (toGridLength1(template1.spacing.b) + ";");
                var gapX1 = "grid-column-gap:" + (toGridLength1(template1.spacing.a) + ";");
                var columns1 = function(x1) {
                    return "grid-template-columns: " + (x1 + ";");
                }(A2($elm$core$String$join, " ", A2($elm$core$List$map, toGridLength1, template1.columns)));
                var _class1 = ".grid-rows-" + (A2($elm$core$String$join, "-", A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template1.rows)) + ("-cols-" + (A2($elm$core$String$join, "-", A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template1.columns)) + ("-space-x-" + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template1.spacing.a) + ("-space-y-" + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template1.spacing.b)))))));
                var modernGrid1 = _class1 + ("{" + (columns1 + (rows1 + (gapX1 + (gapY1 + "}")))));
                var supports1 = "@supports (display:grid) {" + (modernGrid1 + "}");
                var base1 = _class1 + ("{" + (msColumns1 + (msRows1 + "}")));
                return _List_fromArray([
                    base1,
                    supports1
                ]);
            case "GridPosition":
                var position1 = rule1.a;
                var msPosition1 = A2($elm$core$String$join, " ", _List_fromArray([
                    "-ms-grid-row: " + ($elm$core$String$fromInt(position1.row) + ";"),
                    "-ms-grid-row-span: " + ($elm$core$String$fromInt(position1.height) + ";"),
                    "-ms-grid-column: " + ($elm$core$String$fromInt(position1.col) + ";"),
                    "-ms-grid-column-span: " + ($elm$core$String$fromInt(position1.width) + ";")
                ]));
                var modernPosition1 = A2($elm$core$String$join, " ", _List_fromArray([
                    "grid-row: " + ($elm$core$String$fromInt(position1.row) + (" / " + ($elm$core$String$fromInt(position1.row + position1.height) + ";"))),
                    "grid-column: " + ($elm$core$String$fromInt(position1.col) + (" / " + ($elm$core$String$fromInt(position1.col + position1.width) + ";")))
                ]));
                var _class1 = ".grid-pos-" + ($elm$core$String$fromInt(position1.row) + ("-" + ($elm$core$String$fromInt(position1.col) + ("-" + ($elm$core$String$fromInt(position1.width) + ("-" + $elm$core$String$fromInt(position1.height)))))));
                var modernGrid1 = _class1 + ("{" + (modernPosition1 + "}"));
                var supports1 = "@supports (display:grid) {" + (modernGrid1 + "}");
                var base1 = _class1 + ("{" + (msPosition1 + "}"));
                return _List_fromArray([
                    base1,
                    supports1
                ]);
            case "PseudoSelector":
                var _class1 = rule1.a;
                var styles1 = rule1.b;
                var renderPseudoRule1 = function(style1) {
                    return A3($mdgriffith$elm_ui$Internal$Model$renderStyleRule, options1, style1, $elm$core$Maybe$Just(_class1));
                };
                return A2($elm$core$List$concatMap, renderPseudoRule1, styles1);
            default:
                var transform1 = rule1.a;
                var val1 = $mdgriffith$elm_ui$Internal$Model$transformValue(transform1);
                var _class1 = $mdgriffith$elm_ui$Internal$Model$transformClass(transform1);
                var _v121 = _Utils_Tuple2(_class1, val1);
                if (_v121.a.$ === "Just" && _v121.b.$ === "Just") {
                    var cls1 = _v121.a.a;
                    var v1 = _v121.b.a;
                    return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options1, maybePseudo1, "." + cls1, _List_fromArray([
                        A2($mdgriffith$elm_ui$Internal$Model$Property, "transform", v1)
                    ]));
                } else return _List_Nil;
        }
    });
    var $mdgriffith$elm_ui$Internal$Model$encodeStyles = F2(function(options1, stylesheet1) {
        return $elm$json$Json$Encode$object(A2($elm$core$List$map, function(style1) {
            var styled1 = A3($mdgriffith$elm_ui$Internal$Model$renderStyleRule, options1, style1, $elm$core$Maybe$Nothing);
            return _Utils_Tuple2($mdgriffith$elm_ui$Internal$Model$getStyleName(style1), A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, styled1));
        }, stylesheet1));
    });
    var $mdgriffith$elm_ui$Internal$Model$bracket = F2(function(selector1, rules1) {
        var renderPair1 = function(_v01) {
            var name1 = _v01.a;
            var val1 = _v01.b;
            return name1 + (": " + (val1 + ";"));
        };
        return selector1 + (" {" + (A2($elm$core$String$join, "", A2($elm$core$List$map, renderPair1, rules1)) + "}"));
    });
    var $mdgriffith$elm_ui$Internal$Model$fontRule = F3(function(name1, modifier1, _v01) {
        var parentAdj1 = _v01.a;
        var textAdjustment1 = _v01.b;
        return _List_fromArray([
            A2($mdgriffith$elm_ui$Internal$Model$bracket, "." + (name1 + ("." + (modifier1 + (", " + ("." + (name1 + (" ." + modifier1))))))), parentAdj1),
            A2($mdgriffith$elm_ui$Internal$Model$bracket, "." + (name1 + ("." + (modifier1 + ("> ." + ($mdgriffith$elm_ui$Internal$Style$classes.text + (", ." + (name1 + (" ." + (modifier1 + (" > ." + $mdgriffith$elm_ui$Internal$Style$classes.text)))))))))), textAdjustment1)
        ]);
    });
    var $mdgriffith$elm_ui$Internal$Model$renderFontAdjustmentRule = F3(function(fontToAdjust1, _v01, otherFontName1) {
        var full1 = _v01.a;
        var capital1 = _v01.b;
        var name1 = _Utils_eq(fontToAdjust1, otherFontName1) ? fontToAdjust1 : otherFontName1 + (" ." + fontToAdjust1);
        return A2($elm$core$String$join, " ", _Utils_ap(A3($mdgriffith$elm_ui$Internal$Model$fontRule, name1, $mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital, capital1), A3($mdgriffith$elm_ui$Internal$Model$fontRule, name1, $mdgriffith$elm_ui$Internal$Style$classes.fullSize, full1)));
    });
    var $mdgriffith$elm_ui$Internal$Model$renderNullAdjustmentRule = F2(function(fontToAdjust1, otherFontName1) {
        var name1 = _Utils_eq(fontToAdjust1, otherFontName1) ? fontToAdjust1 : otherFontName1 + (" ." + fontToAdjust1);
        return A2($elm$core$String$join, " ", _List_fromArray([
            A2($mdgriffith$elm_ui$Internal$Model$bracket, "." + (name1 + ("." + ($mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital + (", " + ("." + (name1 + (" ." + $mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital))))))), _List_fromArray([
                _Utils_Tuple2("line-height", "1")
            ])),
            A2($mdgriffith$elm_ui$Internal$Model$bracket, "." + (name1 + ("." + ($mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital + ("> ." + ($mdgriffith$elm_ui$Internal$Style$classes.text + (", ." + (name1 + (" ." + ($mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital + (" > ." + $mdgriffith$elm_ui$Internal$Style$classes.text)))))))))), _List_fromArray([
                _Utils_Tuple2("vertical-align", "0"),
                _Utils_Tuple2("line-height", "1")
            ]))
        ]));
    });
    var $mdgriffith$elm_ui$Internal$Model$adjust = F3(function(size1, height1, vertical1) {
        return {
            height: height1 / size1,
            size: size1,
            vertical: vertical1
        };
    });
    var $elm$core$List$filter = F2(function(isGood1, list1) {
        return A3($elm$core$List$foldr, F2(function(x1, xs1) {
            return isGood1(x1) ? A2($elm$core$List$cons, x1, xs1) : xs1;
        }), _List_Nil, list1);
    });
    var $elm$core$List$maximum = function(list1) {
        if (list1.b) {
            var x1 = list1.a;
            var xs1 = list1.b;
            return $elm$core$Maybe$Just(A3($elm$core$List$foldl, $elm$core$Basics$max, x1, xs1));
        } else return $elm$core$Maybe$Nothing;
    };
    var $elm$core$List$minimum = function(list1) {
        if (list1.b) {
            var x1 = list1.a;
            var xs1 = list1.b;
            return $elm$core$Maybe$Just(A3($elm$core$List$foldl, $elm$core$Basics$min, x1, xs1));
        } else return $elm$core$Maybe$Nothing;
    };
    var $mdgriffith$elm_ui$Internal$Model$convertAdjustment = function(adjustment1) {
        var lines1 = _List_fromArray([
            adjustment1.capital,
            adjustment1.baseline,
            adjustment1.descender,
            adjustment1.lowercase
        ]);
        var lineHeight1 = 1.5;
        var normalDescender1 = (lineHeight1 - 1) / 2;
        var oldMiddle1 = lineHeight1 / 2;
        var descender1 = A2($elm$core$Maybe$withDefault, adjustment1.descender, $elm$core$List$minimum(lines1));
        var newBaseline1 = A2($elm$core$Maybe$withDefault, adjustment1.baseline, $elm$core$List$minimum(A2($elm$core$List$filter, function(x1) {
            return !_Utils_eq(x1, descender1);
        }, lines1)));
        var base1 = lineHeight1;
        var ascender1 = A2($elm$core$Maybe$withDefault, adjustment1.capital, $elm$core$List$maximum(lines1));
        var capitalSize1 = 1 / (ascender1 - newBaseline1);
        var capitalVertical1 = 1 - ascender1;
        var fullSize1 = 1 / (ascender1 - descender1);
        var fullVertical1 = 1 - ascender1;
        var newCapitalMiddle1 = (ascender1 - newBaseline1) / 2 + newBaseline1;
        var newFullMiddle1 = (ascender1 - descender1) / 2 + descender1;
        return {
            capital: A3($mdgriffith$elm_ui$Internal$Model$adjust, capitalSize1, ascender1 - newBaseline1, capitalVertical1),
            full: A3($mdgriffith$elm_ui$Internal$Model$adjust, fullSize1, ascender1 - descender1, fullVertical1)
        };
    };
    var $mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules = function(converted1) {
        return _Utils_Tuple2(_List_fromArray([
            _Utils_Tuple2("display", "block")
        ]), _List_fromArray([
            _Utils_Tuple2("display", "inline-block"),
            _Utils_Tuple2("line-height", $elm$core$String$fromFloat(converted1.height)),
            _Utils_Tuple2("vertical-align", $elm$core$String$fromFloat(converted1.vertical) + "em"),
            _Utils_Tuple2("font-size", $elm$core$String$fromFloat(converted1.size) + "em")
        ]));
    };
    var $mdgriffith$elm_ui$Internal$Model$typefaceAdjustment = function(typefaces1) {
        return A3($elm$core$List$foldl, F2(function(face1, found1) {
            if (found1.$ === "Nothing") {
                if (face1.$ === "FontWith") {
                    var _with1 = face1.a;
                    var _v21 = _with1.adjustment;
                    if (_v21.$ === "Nothing") return found1;
                    else {
                        var adjustment1 = _v21.a;
                        return $elm$core$Maybe$Just(_Utils_Tuple2($mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(function($1) {
                            return $1.full;
                        }($mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment1))), $mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(function($1) {
                            return $1.capital;
                        }($mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment1)))));
                    }
                } else return found1;
            } else return found1;
        }), $elm$core$Maybe$Nothing, typefaces1);
    };
    var $mdgriffith$elm_ui$Internal$Model$renderTopLevelValues = function(rules1) {
        var withImport1 = function(font1) {
            if (font1.$ === "ImportFont") {
                var url1 = font1.b;
                return $elm$core$Maybe$Just("@import url('" + (url1 + "');"));
            } else return $elm$core$Maybe$Nothing;
        };
        var fontImports1 = function(_v21) {
            var name1 = _v21.a;
            var typefaces1 = _v21.b;
            var imports1 = A2($elm$core$String$join, "\n", A2($elm$core$List$filterMap, withImport1, typefaces1));
            return imports1;
        };
        var allNames1 = A2($elm$core$List$map, $elm$core$Tuple$first, rules1);
        var fontAdjustments1 = function(_v13) {
            var name1 = _v13.a;
            var typefaces1 = _v13.b;
            var _v01 = $mdgriffith$elm_ui$Internal$Model$typefaceAdjustment(typefaces1);
            if (_v01.$ === "Nothing") return A2($elm$core$String$join, "", A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$renderNullAdjustmentRule(name1), allNames1));
            else {
                var adjustment1 = _v01.a;
                return A2($elm$core$String$join, "", A2($elm$core$List$map, A2($mdgriffith$elm_ui$Internal$Model$renderFontAdjustmentRule, name1, adjustment1), allNames1));
            }
        };
        return _Utils_ap(A2($elm$core$String$join, "\n", A2($elm$core$List$map, fontImports1, rules1)), A2($elm$core$String$join, "\n", A2($elm$core$List$map, fontAdjustments1, rules1)));
    };
    var $mdgriffith$elm_ui$Internal$Model$topLevelValue = function(rule1) {
        if (rule1.$ === "FontFamily") {
            var name1 = rule1.a;
            var typefaces1 = rule1.b;
            return $elm$core$Maybe$Just(_Utils_Tuple2(name1, typefaces1));
        } else return $elm$core$Maybe$Nothing;
    };
    var $mdgriffith$elm_ui$Internal$Model$toStyleSheetString = F2(function(options1, stylesheet1) {
        var combine1 = F2(function(style1, rendered1) {
            return {
                rules: _Utils_ap(rendered1.rules, A3($mdgriffith$elm_ui$Internal$Model$renderStyleRule, options1, style1, $elm$core$Maybe$Nothing)),
                topLevel: function() {
                    var _v13 = $mdgriffith$elm_ui$Internal$Model$topLevelValue(style1);
                    if (_v13.$ === "Nothing") return rendered1.topLevel;
                    else {
                        var topLevel1 = _v13.a;
                        return A2($elm$core$List$cons, topLevel1, rendered1.topLevel);
                    }
                }()
            };
        });
        var _v01 = A3($elm$core$List$foldl, combine1, {
            rules: _List_Nil,
            topLevel: _List_Nil
        }, stylesheet1);
        var topLevel1 = _v01.topLevel;
        var rules1 = _v01.rules;
        return _Utils_ap($mdgriffith$elm_ui$Internal$Model$renderTopLevelValues(topLevel1), $elm$core$String$concat(rules1));
    });
    var $mdgriffith$elm_ui$Internal$Model$toStyleSheet = F2(function(options1, styleSheet1) {
        var _v01 = options1.mode;
        switch(_v01.$){
            case "Layout":
                return A3($elm$virtual_dom$VirtualDom$node, "div", _List_Nil, _List_fromArray([
                    A3($elm$virtual_dom$VirtualDom$node, "style", _List_Nil, _List_fromArray([
                        $elm$virtual_dom$VirtualDom$text(A2($mdgriffith$elm_ui$Internal$Model$toStyleSheetString, options1, styleSheet1))
                    ]))
                ]));
            case "NoStaticStyleSheet":
                return A3($elm$virtual_dom$VirtualDom$node, "div", _List_Nil, _List_fromArray([
                    A3($elm$virtual_dom$VirtualDom$node, "style", _List_Nil, _List_fromArray([
                        $elm$virtual_dom$VirtualDom$text(A2($mdgriffith$elm_ui$Internal$Model$toStyleSheetString, options1, styleSheet1))
                    ]))
                ]));
            default:
                return A3($elm$virtual_dom$VirtualDom$node, "elm-ui-rules", _List_fromArray([
                    A2($elm$virtual_dom$VirtualDom$property, "rules", A2($mdgriffith$elm_ui$Internal$Model$encodeStyles, options1, styleSheet1))
                ]), _List_Nil);
        }
    });
    var $mdgriffith$elm_ui$Internal$Model$embedKeyed = F4(function(_static1, opts1, styles1, children1) {
        var dynamicStyleSheet1 = A2($mdgriffith$elm_ui$Internal$Model$toStyleSheet, opts1, A3($elm$core$List$foldl, $mdgriffith$elm_ui$Internal$Model$reduceStyles, _Utils_Tuple2($elm$core$Set$empty, $mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts1.focus)), styles1).b);
        return _static1 ? A2($elm$core$List$cons, _Utils_Tuple2("static-stylesheet", $mdgriffith$elm_ui$Internal$Model$staticRoot(opts1)), A2($elm$core$List$cons, _Utils_Tuple2("dynamic-stylesheet", dynamicStyleSheet1), children1)) : A2($elm$core$List$cons, _Utils_Tuple2("dynamic-stylesheet", dynamicStyleSheet1), children1);
    });
    var $mdgriffith$elm_ui$Internal$Model$embedWith = F4(function(_static1, opts1, styles1, children1) {
        var dynamicStyleSheet1 = A2($mdgriffith$elm_ui$Internal$Model$toStyleSheet, opts1, A3($elm$core$List$foldl, $mdgriffith$elm_ui$Internal$Model$reduceStyles, _Utils_Tuple2($elm$core$Set$empty, $mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts1.focus)), styles1).b);
        return _static1 ? A2($elm$core$List$cons, $mdgriffith$elm_ui$Internal$Model$staticRoot(opts1), A2($elm$core$List$cons, dynamicStyleSheet1, children1)) : A2($elm$core$List$cons, dynamicStyleSheet1, children1);
    });
    var $mdgriffith$elm_ui$Internal$Flag$heightBetween = $mdgriffith$elm_ui$Internal$Flag$flag(45);
    var $mdgriffith$elm_ui$Internal$Flag$heightFill = $mdgriffith$elm_ui$Internal$Flag$flag(37);
    var $mdgriffith$elm_ui$Internal$Flag$present = F2(function(myFlag1, _v01) {
        var fieldOne1 = _v01.a;
        var fieldTwo1 = _v01.b;
        if (myFlag1.$ === "Flag") {
            var first1 = myFlag1.a;
            return _Utils_eq(first1 & fieldOne1, first1);
        } else {
            var second1 = myFlag1.a;
            return _Utils_eq(second1 & fieldTwo1, second1);
        }
    });
    var $elm$html$Html$s = _VirtualDom_node("s");
    var $elm$html$Html$u = _VirtualDom_node("u");
    var $mdgriffith$elm_ui$Internal$Flag$widthBetween = $mdgriffith$elm_ui$Internal$Flag$flag(44);
    var $mdgriffith$elm_ui$Internal$Flag$widthFill = $mdgriffith$elm_ui$Internal$Flag$flag(39);
    var $mdgriffith$elm_ui$Internal$Model$finalizeNode = F6(function(has1, node1, attributes1, children1, embedMode1, parentContext1) {
        var createNode1 = F2(function(nodeName1, attrs1) {
            if (children1.$ === "Keyed") {
                var keyed1 = children1.a;
                return A3($elm$virtual_dom$VirtualDom$keyedNode, nodeName1, attrs1, function() {
                    switch(embedMode1.$){
                        case "NoStyleSheet":
                            return keyed1;
                        case "OnlyDynamic":
                            var opts1 = embedMode1.a;
                            var styles1 = embedMode1.b;
                            return A4($mdgriffith$elm_ui$Internal$Model$embedKeyed, false, opts1, styles1, keyed1);
                        default:
                            var opts1 = embedMode1.a;
                            var styles1 = embedMode1.b;
                            return A4($mdgriffith$elm_ui$Internal$Model$embedKeyed, true, opts1, styles1, keyed1);
                    }
                }());
            } else {
                var unkeyed1 = children1.a;
                return A2(function() {
                    switch(nodeName1){
                        case "div":
                            return $elm$html$Html$div;
                        case "p":
                            return $elm$html$Html$p;
                        default:
                            return $elm$virtual_dom$VirtualDom$node(nodeName1);
                    }
                }(), attrs1, function() {
                    switch(embedMode1.$){
                        case "NoStyleSheet":
                            return unkeyed1;
                        case "OnlyDynamic":
                            var opts1 = embedMode1.a;
                            var styles1 = embedMode1.b;
                            return A4($mdgriffith$elm_ui$Internal$Model$embedWith, false, opts1, styles1, unkeyed1);
                        default:
                            var opts1 = embedMode1.a;
                            var styles1 = embedMode1.b;
                            return A4($mdgriffith$elm_ui$Internal$Model$embedWith, true, opts1, styles1, unkeyed1);
                    }
                }());
            }
        });
        var html1 = function() {
            switch(node1.$){
                case "Generic":
                    return A2(createNode1, "div", attributes1);
                case "NodeName":
                    var nodeName1 = node1.a;
                    return A2(createNode1, nodeName1, attributes1);
                default:
                    var nodeName1 = node1.a;
                    var internal1 = node1.b;
                    return A3($elm$virtual_dom$VirtualDom$node, nodeName1, attributes1, _List_fromArray([
                        A2(createNode1, internal1, _List_fromArray([
                            $elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Style$classes.any + (" " + $mdgriffith$elm_ui$Internal$Style$classes.single))
                        ]))
                    ]));
            }
        }();
        switch(parentContext1.$){
            case "AsRow":
                return A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$widthFill, has1) && !A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$widthBetween, has1) ? html1 : A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$alignRight, has1) ? A2($elm$html$Html$u, _List_fromArray([
                    $elm$html$Html$Attributes$class(A2($elm$core$String$join, " ", _List_fromArray([
                        $mdgriffith$elm_ui$Internal$Style$classes.any,
                        $mdgriffith$elm_ui$Internal$Style$classes.single,
                        $mdgriffith$elm_ui$Internal$Style$classes.container,
                        $mdgriffith$elm_ui$Internal$Style$classes.contentCenterY,
                        $mdgriffith$elm_ui$Internal$Style$classes.alignContainerRight
                    ])))
                ]), _List_fromArray([
                    html1
                ])) : A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$centerX, has1) ? A2($elm$html$Html$s, _List_fromArray([
                    $elm$html$Html$Attributes$class(A2($elm$core$String$join, " ", _List_fromArray([
                        $mdgriffith$elm_ui$Internal$Style$classes.any,
                        $mdgriffith$elm_ui$Internal$Style$classes.single,
                        $mdgriffith$elm_ui$Internal$Style$classes.container,
                        $mdgriffith$elm_ui$Internal$Style$classes.contentCenterY,
                        $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX
                    ])))
                ]), _List_fromArray([
                    html1
                ])) : html1;
            case "AsColumn":
                return A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$heightFill, has1) && !A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$heightBetween, has1) ? html1 : A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$centerY, has1) ? A2($elm$html$Html$s, _List_fromArray([
                    $elm$html$Html$Attributes$class(A2($elm$core$String$join, " ", _List_fromArray([
                        $mdgriffith$elm_ui$Internal$Style$classes.any,
                        $mdgriffith$elm_ui$Internal$Style$classes.single,
                        $mdgriffith$elm_ui$Internal$Style$classes.container,
                        $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY
                    ])))
                ]), _List_fromArray([
                    html1
                ])) : A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$alignBottom, has1) ? A2($elm$html$Html$u, _List_fromArray([
                    $elm$html$Html$Attributes$class(A2($elm$core$String$join, " ", _List_fromArray([
                        $mdgriffith$elm_ui$Internal$Style$classes.any,
                        $mdgriffith$elm_ui$Internal$Style$classes.single,
                        $mdgriffith$elm_ui$Internal$Style$classes.container,
                        $mdgriffith$elm_ui$Internal$Style$classes.alignContainerBottom
                    ])))
                ]), _List_fromArray([
                    html1
                ])) : html1;
            default:
                return html1;
        }
    });
    var $mdgriffith$elm_ui$Internal$Model$textElementClasses = $mdgriffith$elm_ui$Internal$Style$classes.any + (" " + ($mdgriffith$elm_ui$Internal$Style$classes.text + (" " + ($mdgriffith$elm_ui$Internal$Style$classes.widthContent + (" " + $mdgriffith$elm_ui$Internal$Style$classes.heightContent)))));
    var $mdgriffith$elm_ui$Internal$Model$textElement = function(str1) {
        return A2($elm$html$Html$div, _List_fromArray([
            $elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Model$textElementClasses)
        ]), _List_fromArray([
            $elm$html$Html$text(str1)
        ]));
    };
    var $mdgriffith$elm_ui$Internal$Model$textElementFillClasses = $mdgriffith$elm_ui$Internal$Style$classes.any + (" " + ($mdgriffith$elm_ui$Internal$Style$classes.text + (" " + ($mdgriffith$elm_ui$Internal$Style$classes.widthFill + (" " + $mdgriffith$elm_ui$Internal$Style$classes.heightFill)))));
    var $mdgriffith$elm_ui$Internal$Model$textElementFill = function(str1) {
        return A2($elm$html$Html$div, _List_fromArray([
            $elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Model$textElementFillClasses)
        ]), _List_fromArray([
            $elm$html$Html$text(str1)
        ]));
    };
    var $mdgriffith$elm_ui$Internal$Model$createElement = F3(function(context1, children1, rendered1) {
        var gatherKeyed1 = F2(function(_v81, _v91) {
            var key1 = _v81.a;
            var child1 = _v81.b;
            var htmls1 = _v91.a;
            var existingStyles1 = _v91.b;
            switch(child1.$){
                case "Unstyled":
                    var html1 = child1.a;
                    return _Utils_eq(context1, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(A2($elm$core$List$cons, _Utils_Tuple2(key1, html1(context1)), htmls1), existingStyles1) : _Utils_Tuple2(A2($elm$core$List$cons, _Utils_Tuple2(key1, html1(context1)), htmls1), existingStyles1);
                case "Styled":
                    var styled1 = child1.a;
                    return _Utils_eq(context1, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(A2($elm$core$List$cons, _Utils_Tuple2(key1, A2(styled1.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context1)), htmls1), $elm$core$List$isEmpty(existingStyles1) ? styled1.styles : _Utils_ap(styled1.styles, existingStyles1)) : _Utils_Tuple2(A2($elm$core$List$cons, _Utils_Tuple2(key1, A2(styled1.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context1)), htmls1), $elm$core$List$isEmpty(existingStyles1) ? styled1.styles : _Utils_ap(styled1.styles, existingStyles1));
                case "Text":
                    var str1 = child1.a;
                    return _Utils_Tuple2(A2($elm$core$List$cons, _Utils_Tuple2(key1, _Utils_eq(context1, $mdgriffith$elm_ui$Internal$Model$asEl) ? $mdgriffith$elm_ui$Internal$Model$textElementFill(str1) : $mdgriffith$elm_ui$Internal$Model$textElement(str1)), htmls1), existingStyles1);
                default:
                    return _Utils_Tuple2(htmls1, existingStyles1);
            }
        });
        var gather1 = F2(function(child1, _v61) {
            var htmls1 = _v61.a;
            var existingStyles1 = _v61.b;
            switch(child1.$){
                case "Unstyled":
                    var html1 = child1.a;
                    return _Utils_eq(context1, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(A2($elm$core$List$cons, html1(context1), htmls1), existingStyles1) : _Utils_Tuple2(A2($elm$core$List$cons, html1(context1), htmls1), existingStyles1);
                case "Styled":
                    var styled1 = child1.a;
                    return _Utils_eq(context1, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(A2($elm$core$List$cons, A2(styled1.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context1), htmls1), $elm$core$List$isEmpty(existingStyles1) ? styled1.styles : _Utils_ap(styled1.styles, existingStyles1)) : _Utils_Tuple2(A2($elm$core$List$cons, A2(styled1.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context1), htmls1), $elm$core$List$isEmpty(existingStyles1) ? styled1.styles : _Utils_ap(styled1.styles, existingStyles1));
                case "Text":
                    var str1 = child1.a;
                    return _Utils_Tuple2(A2($elm$core$List$cons, _Utils_eq(context1, $mdgriffith$elm_ui$Internal$Model$asEl) ? $mdgriffith$elm_ui$Internal$Model$textElementFill(str1) : $mdgriffith$elm_ui$Internal$Model$textElement(str1), htmls1), existingStyles1);
                default:
                    return _Utils_Tuple2(htmls1, existingStyles1);
            }
        });
        if (children1.$ === "Keyed") {
            var keyedChildren1 = children1.a;
            var _v13 = A3($elm$core$List$foldr, gatherKeyed1, _Utils_Tuple2(_List_Nil, _List_Nil), keyedChildren1);
            var keyed1 = _v13.a;
            var styles1 = _v13.b;
            var newStyles1 = $elm$core$List$isEmpty(styles1) ? rendered1.styles : _Utils_ap(rendered1.styles, styles1);
            if (!newStyles1.b) return $mdgriffith$elm_ui$Internal$Model$Unstyled(A5($mdgriffith$elm_ui$Internal$Model$finalizeNode, rendered1.has, rendered1.node, rendered1.attributes, $mdgriffith$elm_ui$Internal$Model$Keyed(A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, "nearby-element-pls", keyed1, rendered1.children)), $mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
            else {
                var allStyles1 = newStyles1;
                return $mdgriffith$elm_ui$Internal$Model$Styled({
                    html: A4($mdgriffith$elm_ui$Internal$Model$finalizeNode, rendered1.has, rendered1.node, rendered1.attributes, $mdgriffith$elm_ui$Internal$Model$Keyed(A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, "nearby-element-pls", keyed1, rendered1.children))),
                    styles: allStyles1
                });
            }
        } else {
            var unkeyedChildren1 = children1.a;
            var _v31 = A3($elm$core$List$foldr, gather1, _Utils_Tuple2(_List_Nil, _List_Nil), unkeyedChildren1);
            var unkeyed1 = _v31.a;
            var styles1 = _v31.b;
            var newStyles1 = $elm$core$List$isEmpty(styles1) ? rendered1.styles : _Utils_ap(rendered1.styles, styles1);
            if (!newStyles1.b) return $mdgriffith$elm_ui$Internal$Model$Unstyled(A5($mdgriffith$elm_ui$Internal$Model$finalizeNode, rendered1.has, rendered1.node, rendered1.attributes, $mdgriffith$elm_ui$Internal$Model$Unkeyed(A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed1, rendered1.children)), $mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
            else {
                var allStyles1 = newStyles1;
                return $mdgriffith$elm_ui$Internal$Model$Styled({
                    html: A4($mdgriffith$elm_ui$Internal$Model$finalizeNode, rendered1.has, rendered1.node, rendered1.attributes, $mdgriffith$elm_ui$Internal$Model$Unkeyed(A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed1, rendered1.children))),
                    styles: allStyles1
                });
            }
        }
    });
    var $mdgriffith$elm_ui$Internal$Model$Single = F3(function(a1, b1, c1) {
        return {
            $: "Single",
            a: a1,
            b: b1,
            c: c1
        };
    });
    var $mdgriffith$elm_ui$Internal$Model$Transform = function(a1) {
        return {
            $: "Transform",
            a: a1
        };
    };
    var $mdgriffith$elm_ui$Internal$Flag$Field = F2(function(a1, b1) {
        return {
            $: "Field",
            a: a1,
            b: b1
        };
    });
    var $elm$core$Bitwise$or = _Bitwise_or;
    var $mdgriffith$elm_ui$Internal$Flag$add = F2(function(myFlag1, _v01) {
        var one1 = _v01.a;
        var two1 = _v01.b;
        if (myFlag1.$ === "Flag") {
            var first1 = myFlag1.a;
            return A2($mdgriffith$elm_ui$Internal$Flag$Field, first1 | one1, two1);
        } else {
            var second1 = myFlag1.a;
            return A2($mdgriffith$elm_ui$Internal$Flag$Field, one1, second1 | two1);
        }
    });
    var $mdgriffith$elm_ui$Internal$Model$ChildrenBehind = function(a1) {
        return {
            $: "ChildrenBehind",
            a: a1
        };
    };
    var $mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront = F2(function(a1, b1) {
        return {
            $: "ChildrenBehindAndInFront",
            a: a1,
            b: b1
        };
    });
    var $mdgriffith$elm_ui$Internal$Model$ChildrenInFront = function(a1) {
        return {
            $: "ChildrenInFront",
            a: a1
        };
    };
    var $mdgriffith$elm_ui$Internal$Model$nearbyElement = F2(function(location1, elem1) {
        return A2($elm$html$Html$div, _List_fromArray([
            $elm$html$Html$Attributes$class(function() {
                switch(location1.$){
                    case "Above":
                        return A2($elm$core$String$join, " ", _List_fromArray([
                            $mdgriffith$elm_ui$Internal$Style$classes.nearby,
                            $mdgriffith$elm_ui$Internal$Style$classes.single,
                            $mdgriffith$elm_ui$Internal$Style$classes.above
                        ]));
                    case "Below":
                        return A2($elm$core$String$join, " ", _List_fromArray([
                            $mdgriffith$elm_ui$Internal$Style$classes.nearby,
                            $mdgriffith$elm_ui$Internal$Style$classes.single,
                            $mdgriffith$elm_ui$Internal$Style$classes.below
                        ]));
                    case "OnRight":
                        return A2($elm$core$String$join, " ", _List_fromArray([
                            $mdgriffith$elm_ui$Internal$Style$classes.nearby,
                            $mdgriffith$elm_ui$Internal$Style$classes.single,
                            $mdgriffith$elm_ui$Internal$Style$classes.onRight
                        ]));
                    case "OnLeft":
                        return A2($elm$core$String$join, " ", _List_fromArray([
                            $mdgriffith$elm_ui$Internal$Style$classes.nearby,
                            $mdgriffith$elm_ui$Internal$Style$classes.single,
                            $mdgriffith$elm_ui$Internal$Style$classes.onLeft
                        ]));
                    case "InFront":
                        return A2($elm$core$String$join, " ", _List_fromArray([
                            $mdgriffith$elm_ui$Internal$Style$classes.nearby,
                            $mdgriffith$elm_ui$Internal$Style$classes.single,
                            $mdgriffith$elm_ui$Internal$Style$classes.inFront
                        ]));
                    default:
                        return A2($elm$core$String$join, " ", _List_fromArray([
                            $mdgriffith$elm_ui$Internal$Style$classes.nearby,
                            $mdgriffith$elm_ui$Internal$Style$classes.single,
                            $mdgriffith$elm_ui$Internal$Style$classes.behind
                        ]));
                }
            }())
        ]), _List_fromArray([
            function() {
                switch(elem1.$){
                    case "Empty":
                        return $elm$virtual_dom$VirtualDom$text("");
                    case "Text":
                        var str1 = elem1.a;
                        return $mdgriffith$elm_ui$Internal$Model$textElement(str1);
                    case "Unstyled":
                        var html1 = elem1.a;
                        return html1($mdgriffith$elm_ui$Internal$Model$asEl);
                    default:
                        var styled1 = elem1.a;
                        return A2(styled1.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, $mdgriffith$elm_ui$Internal$Model$asEl);
                }
            }()
        ]));
    });
    var $mdgriffith$elm_ui$Internal$Model$addNearbyElement = F3(function(location1, elem1, existing1) {
        var nearby1 = A2($mdgriffith$elm_ui$Internal$Model$nearbyElement, location1, elem1);
        switch(existing1.$){
            case "NoNearbyChildren":
                if (location1.$ === "Behind") return $mdgriffith$elm_ui$Internal$Model$ChildrenBehind(_List_fromArray([
                    nearby1
                ]));
                else return $mdgriffith$elm_ui$Internal$Model$ChildrenInFront(_List_fromArray([
                    nearby1
                ]));
            case "ChildrenBehind":
                var existingBehind1 = existing1.a;
                if (location1.$ === "Behind") return $mdgriffith$elm_ui$Internal$Model$ChildrenBehind(A2($elm$core$List$cons, nearby1, existingBehind1));
                else return A2($mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront, existingBehind1, _List_fromArray([
                    nearby1
                ]));
            case "ChildrenInFront":
                var existingInFront1 = existing1.a;
                if (location1.$ === "Behind") return A2($mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront, _List_fromArray([
                    nearby1
                ]), existingInFront1);
                else return $mdgriffith$elm_ui$Internal$Model$ChildrenInFront(A2($elm$core$List$cons, nearby1, existingInFront1));
            default:
                var existingBehind1 = existing1.a;
                var existingInFront1 = existing1.b;
                if (location1.$ === "Behind") return A2($mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront, A2($elm$core$List$cons, nearby1, existingBehind1), existingInFront1);
                else return A2($mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront, existingBehind1, A2($elm$core$List$cons, nearby1, existingInFront1));
        }
    });
    var $mdgriffith$elm_ui$Internal$Model$Embedded = F2(function(a1, b1) {
        return {
            $: "Embedded",
            a: a1,
            b: b1
        };
    });
    var $mdgriffith$elm_ui$Internal$Model$NodeName = function(a1) {
        return {
            $: "NodeName",
            a: a1
        };
    };
    var $mdgriffith$elm_ui$Internal$Model$addNodeName = F2(function(newNode1, old1) {
        switch(old1.$){
            case "Generic":
                return $mdgriffith$elm_ui$Internal$Model$NodeName(newNode1);
            case "NodeName":
                var name1 = old1.a;
                return A2($mdgriffith$elm_ui$Internal$Model$Embedded, name1, newNode1);
            default:
                var x1 = old1.a;
                var y1 = old1.b;
                return A2($mdgriffith$elm_ui$Internal$Model$Embedded, x1, y1);
        }
    });
    var $mdgriffith$elm_ui$Internal$Model$alignXName = function(align1) {
        switch(align1.$){
            case "Left":
                return $mdgriffith$elm_ui$Internal$Style$classes.alignedHorizontally + (" " + $mdgriffith$elm_ui$Internal$Style$classes.alignLeft);
            case "Right":
                return $mdgriffith$elm_ui$Internal$Style$classes.alignedHorizontally + (" " + $mdgriffith$elm_ui$Internal$Style$classes.alignRight);
            default:
                return $mdgriffith$elm_ui$Internal$Style$classes.alignedHorizontally + (" " + $mdgriffith$elm_ui$Internal$Style$classes.alignCenterX);
        }
    };
    var $mdgriffith$elm_ui$Internal$Model$alignYName = function(align1) {
        switch(align1.$){
            case "Top":
                return $mdgriffith$elm_ui$Internal$Style$classes.alignedVertically + (" " + $mdgriffith$elm_ui$Internal$Style$classes.alignTop);
            case "Bottom":
                return $mdgriffith$elm_ui$Internal$Style$classes.alignedVertically + (" " + $mdgriffith$elm_ui$Internal$Style$classes.alignBottom);
            default:
                return $mdgriffith$elm_ui$Internal$Style$classes.alignedVertically + (" " + $mdgriffith$elm_ui$Internal$Style$classes.alignCenterY);
        }
    };
    var $mdgriffith$elm_ui$Internal$Model$FullTransform = F4(function(a1, b1, c1, d9) {
        return {
            $: "FullTransform",
            a: a1,
            b: b1,
            c: c1,
            d: d9
        };
    });
    var $mdgriffith$elm_ui$Internal$Model$Moved = function(a1) {
        return {
            $: "Moved",
            a: a1
        };
    };
    var $mdgriffith$elm_ui$Internal$Model$composeTransformation = F2(function(transform1, component1) {
        switch(transform1.$){
            case "Untransformed":
                switch(component1.$){
                    case "MoveX":
                        var x1 = component1.a;
                        return $mdgriffith$elm_ui$Internal$Model$Moved(_Utils_Tuple3(x1, 0, 0));
                    case "MoveY":
                        var y1 = component1.a;
                        return $mdgriffith$elm_ui$Internal$Model$Moved(_Utils_Tuple3(0, y1, 0));
                    case "MoveZ":
                        var z1 = component1.a;
                        return $mdgriffith$elm_ui$Internal$Model$Moved(_Utils_Tuple3(0, 0, z1));
                    case "MoveXYZ":
                        var xyz1 = component1.a;
                        return $mdgriffith$elm_ui$Internal$Model$Moved(xyz1);
                    case "Rotate":
                        var xyz1 = component1.a;
                        var angle1 = component1.b;
                        return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, _Utils_Tuple3(0, 0, 0), _Utils_Tuple3(1, 1, 1), xyz1, angle1);
                    default:
                        var xyz1 = component1.a;
                        return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, _Utils_Tuple3(0, 0, 0), xyz1, _Utils_Tuple3(0, 0, 1), 0);
                }
            case "Moved":
                var moved1 = transform1.a;
                var x1 = moved1.a;
                var y1 = moved1.b;
                var z1 = moved1.c;
                switch(component1.$){
                    case "MoveX":
                        var newX1 = component1.a;
                        return $mdgriffith$elm_ui$Internal$Model$Moved(_Utils_Tuple3(newX1, y1, z1));
                    case "MoveY":
                        var newY1 = component1.a;
                        return $mdgriffith$elm_ui$Internal$Model$Moved(_Utils_Tuple3(x1, newY1, z1));
                    case "MoveZ":
                        var newZ1 = component1.a;
                        return $mdgriffith$elm_ui$Internal$Model$Moved(_Utils_Tuple3(x1, y1, newZ1));
                    case "MoveXYZ":
                        var xyz1 = component1.a;
                        return $mdgriffith$elm_ui$Internal$Model$Moved(xyz1);
                    case "Rotate":
                        var xyz1 = component1.a;
                        var angle1 = component1.b;
                        return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, moved1, _Utils_Tuple3(1, 1, 1), xyz1, angle1);
                    default:
                        var scale1 = component1.a;
                        return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, moved1, scale1, _Utils_Tuple3(0, 0, 1), 0);
                }
            default:
                var moved1 = transform1.a;
                var x1 = moved1.a;
                var y1 = moved1.b;
                var z1 = moved1.c;
                var scaled1 = transform1.b;
                var origin1 = transform1.c;
                var angle1 = transform1.d;
                switch(component1.$){
                    case "MoveX":
                        var newX1 = component1.a;
                        return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, _Utils_Tuple3(newX1, y1, z1), scaled1, origin1, angle1);
                    case "MoveY":
                        var newY1 = component1.a;
                        return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, _Utils_Tuple3(x1, newY1, z1), scaled1, origin1, angle1);
                    case "MoveZ":
                        var newZ1 = component1.a;
                        return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, _Utils_Tuple3(x1, y1, newZ1), scaled1, origin1, angle1);
                    case "MoveXYZ":
                        var newMove1 = component1.a;
                        return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, newMove1, scaled1, origin1, angle1);
                    case "Rotate":
                        var newOrigin1 = component1.a;
                        var newAngle1 = component1.b;
                        return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, moved1, scaled1, newOrigin1, newAngle1);
                    default:
                        var newScale1 = component1.a;
                        return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, moved1, newScale1, origin1, angle1);
                }
        }
    });
    var $mdgriffith$elm_ui$Internal$Flag$height = $mdgriffith$elm_ui$Internal$Flag$flag(7);
    var $mdgriffith$elm_ui$Internal$Flag$heightContent = $mdgriffith$elm_ui$Internal$Flag$flag(36);
    var $mdgriffith$elm_ui$Internal$Flag$merge = F2(function(_v01, _v13) {
        var one1 = _v01.a;
        var two1 = _v01.b;
        var three1 = _v13.a;
        var four1 = _v13.b;
        return A2($mdgriffith$elm_ui$Internal$Flag$Field, one1 | three1, two1 | four1);
    });
    var $mdgriffith$elm_ui$Internal$Flag$none = A2($mdgriffith$elm_ui$Internal$Flag$Field, 0, 0);
    var $mdgriffith$elm_ui$Internal$Model$renderHeight = function(h1) {
        switch(h1.$){
            case "Px":
                var px1 = h1.a;
                var val1 = $elm$core$String$fromInt(px1);
                var name1 = "height-px-" + val1;
                return _Utils_Tuple3($mdgriffith$elm_ui$Internal$Flag$none, $mdgriffith$elm_ui$Internal$Style$classes.heightExact + (" " + name1), _List_fromArray([
                    A3($mdgriffith$elm_ui$Internal$Model$Single, name1, "height", val1 + "px")
                ]));
            case "Content":
                return _Utils_Tuple3(A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightContent, $mdgriffith$elm_ui$Internal$Flag$none), $mdgriffith$elm_ui$Internal$Style$classes.heightContent, _List_Nil);
            case "Fill":
                var portion1 = h1.a;
                return portion1 === 1 ? _Utils_Tuple3(A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none), $mdgriffith$elm_ui$Internal$Style$classes.heightFill, _List_Nil) : _Utils_Tuple3(A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none), $mdgriffith$elm_ui$Internal$Style$classes.heightFillPortion + (" height-fill-" + $elm$core$String$fromInt(portion1)), _List_fromArray([
                    A3($mdgriffith$elm_ui$Internal$Model$Single, $mdgriffith$elm_ui$Internal$Style$classes.any + ("." + ($mdgriffith$elm_ui$Internal$Style$classes.column + (" > " + $mdgriffith$elm_ui$Internal$Style$dot("height-fill-" + $elm$core$String$fromInt(portion1))))), "flex-grow", $elm$core$String$fromInt(portion1 * 100000))
                ]));
            case "Min":
                var minSize1 = h1.a;
                var len1 = h1.b;
                var cls1 = "min-height-" + $elm$core$String$fromInt(minSize1);
                var style1 = A3($mdgriffith$elm_ui$Internal$Model$Single, cls1, "min-height", $elm$core$String$fromInt(minSize1) + "px !important");
                var _v13 = $mdgriffith$elm_ui$Internal$Model$renderHeight(len1);
                var newFlag1 = _v13.a;
                var newAttrs1 = _v13.b;
                var newStyle1 = _v13.c;
                return _Utils_Tuple3(A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightBetween, newFlag1), cls1 + (" " + newAttrs1), A2($elm$core$List$cons, style1, newStyle1));
            default:
                var maxSize1 = h1.a;
                var len1 = h1.b;
                var cls1 = "max-height-" + $elm$core$String$fromInt(maxSize1);
                var style1 = A3($mdgriffith$elm_ui$Internal$Model$Single, cls1, "max-height", $elm$core$String$fromInt(maxSize1) + "px");
                var _v21 = $mdgriffith$elm_ui$Internal$Model$renderHeight(len1);
                var newFlag1 = _v21.a;
                var newAttrs1 = _v21.b;
                var newStyle1 = _v21.c;
                return _Utils_Tuple3(A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightBetween, newFlag1), cls1 + (" " + newAttrs1), A2($elm$core$List$cons, style1, newStyle1));
        }
    };
    var $mdgriffith$elm_ui$Internal$Flag$widthContent = $mdgriffith$elm_ui$Internal$Flag$flag(38);
    var $mdgriffith$elm_ui$Internal$Model$renderWidth = function(w1) {
        switch(w1.$){
            case "Px":
                var px1 = w1.a;
                return _Utils_Tuple3($mdgriffith$elm_ui$Internal$Flag$none, $mdgriffith$elm_ui$Internal$Style$classes.widthExact + (" width-px-" + $elm$core$String$fromInt(px1)), _List_fromArray([
                    A3($mdgriffith$elm_ui$Internal$Model$Single, "width-px-" + $elm$core$String$fromInt(px1), "width", $elm$core$String$fromInt(px1) + "px")
                ]));
            case "Content":
                return _Utils_Tuple3(A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthContent, $mdgriffith$elm_ui$Internal$Flag$none), $mdgriffith$elm_ui$Internal$Style$classes.widthContent, _List_Nil);
            case "Fill":
                var portion1 = w1.a;
                return portion1 === 1 ? _Utils_Tuple3(A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none), $mdgriffith$elm_ui$Internal$Style$classes.widthFill, _List_Nil) : _Utils_Tuple3(A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none), $mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion + (" width-fill-" + $elm$core$String$fromInt(portion1)), _List_fromArray([
                    A3($mdgriffith$elm_ui$Internal$Model$Single, $mdgriffith$elm_ui$Internal$Style$classes.any + ("." + ($mdgriffith$elm_ui$Internal$Style$classes.row + (" > " + $mdgriffith$elm_ui$Internal$Style$dot("width-fill-" + $elm$core$String$fromInt(portion1))))), "flex-grow", $elm$core$String$fromInt(portion1 * 100000))
                ]));
            case "Min":
                var minSize1 = w1.a;
                var len1 = w1.b;
                var cls1 = "min-width-" + $elm$core$String$fromInt(minSize1);
                var style1 = A3($mdgriffith$elm_ui$Internal$Model$Single, cls1, "min-width", $elm$core$String$fromInt(minSize1) + "px");
                var _v13 = $mdgriffith$elm_ui$Internal$Model$renderWidth(len1);
                var newFlag1 = _v13.a;
                var newAttrs1 = _v13.b;
                var newStyle1 = _v13.c;
                return _Utils_Tuple3(A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthBetween, newFlag1), cls1 + (" " + newAttrs1), A2($elm$core$List$cons, style1, newStyle1));
            default:
                var maxSize1 = w1.a;
                var len1 = w1.b;
                var cls1 = "max-width-" + $elm$core$String$fromInt(maxSize1);
                var style1 = A3($mdgriffith$elm_ui$Internal$Model$Single, cls1, "max-width", $elm$core$String$fromInt(maxSize1) + "px");
                var _v21 = $mdgriffith$elm_ui$Internal$Model$renderWidth(len1);
                var newFlag1 = _v21.a;
                var newAttrs1 = _v21.b;
                var newStyle1 = _v21.c;
                return _Utils_Tuple3(A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthBetween, newFlag1), cls1 + (" " + newAttrs1), A2($elm$core$List$cons, style1, newStyle1));
        }
    };
    var $mdgriffith$elm_ui$Internal$Flag$borderWidth = $mdgriffith$elm_ui$Internal$Flag$flag(27);
    var $mdgriffith$elm_ui$Internal$Model$skippable = F2(function(flag1, style1) {
        if (_Utils_eq(flag1, $mdgriffith$elm_ui$Internal$Flag$borderWidth)) {
            if (style1.$ === "Single") {
                var val1 = style1.c;
                switch(val1){
                    case "0px":
                        return true;
                    case "1px":
                        return true;
                    case "2px":
                        return true;
                    case "3px":
                        return true;
                    case "4px":
                        return true;
                    case "5px":
                        return true;
                    case "6px":
                        return true;
                    default:
                        return false;
                }
            } else return false;
        } else switch(style1.$){
            case "FontSize":
                var i1 = style1.a;
                return i1 >= 8 && i1 <= 32;
            case "PaddingStyle":
                var name1 = style1.a;
                var t1 = style1.b;
                var r5 = style1.c;
                var b1 = style1.d;
                var l1 = style1.e;
                return _Utils_eq(t1, b1) && _Utils_eq(t1, r5) && _Utils_eq(t1, l1) && t1 >= 0 && t1 <= 24;
            default:
                return false;
        }
    });
    var $mdgriffith$elm_ui$Internal$Flag$width = $mdgriffith$elm_ui$Internal$Flag$flag(6);
    var $mdgriffith$elm_ui$Internal$Flag$xAlign = $mdgriffith$elm_ui$Internal$Flag$flag(30);
    var $mdgriffith$elm_ui$Internal$Flag$yAlign = $mdgriffith$elm_ui$Internal$Flag$flag(29);
    var $mdgriffith$elm_ui$Internal$Model$gatherAttrRecursive = F8(function(classes1, node1, has1, transform1, styles1, attrs1, children1, elementAttrs1) {
        gatherAttrRecursive: while(true)if (!elementAttrs1.b) {
            var _v13 = $mdgriffith$elm_ui$Internal$Model$transformClass(transform1);
            if (_v13.$ === "Nothing") return {
                attributes: A2($elm$core$List$cons, $elm$html$Html$Attributes$class(classes1), attrs1),
                children: children1,
                has: has1,
                node: node1,
                styles: styles1
            };
            else {
                var _class1 = _v13.a;
                return {
                    attributes: A2($elm$core$List$cons, $elm$html$Html$Attributes$class(classes1 + (" " + _class1)), attrs1),
                    children: children1,
                    has: has1,
                    node: node1,
                    styles: A2($elm$core$List$cons, $mdgriffith$elm_ui$Internal$Model$Transform(transform1), styles1)
                };
            }
        } else {
            var attribute1 = elementAttrs1.a;
            var remaining1 = elementAttrs1.b;
            switch(attribute1.$){
                case "NoAttribute":
                    var $temp$classes1 = classes1, $temp$node1 = node1, $temp$has1 = has1, $temp$transform1 = transform1, $temp$styles1 = styles1, $temp$attrs1 = attrs1, $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                    classes1 = $temp$classes1;
                    node1 = $temp$node1;
                    has1 = $temp$has1;
                    transform1 = $temp$transform1;
                    styles1 = $temp$styles1;
                    attrs1 = $temp$attrs1;
                    children1 = $temp$children1;
                    elementAttrs1 = $temp$elementAttrs1;
                    continue gatherAttrRecursive;
                case "Class":
                    var flag1 = attribute1.a;
                    var exactClassName1 = attribute1.b;
                    if (A2($mdgriffith$elm_ui$Internal$Flag$present, flag1, has1)) {
                        var $temp$classes1 = classes1, $temp$node1 = node1, $temp$has1 = has1, $temp$transform1 = transform1, $temp$styles1 = styles1, $temp$attrs1 = attrs1, $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                        classes1 = $temp$classes1;
                        node1 = $temp$node1;
                        has1 = $temp$has1;
                        transform1 = $temp$transform1;
                        styles1 = $temp$styles1;
                        attrs1 = $temp$attrs1;
                        children1 = $temp$children1;
                        elementAttrs1 = $temp$elementAttrs1;
                        continue gatherAttrRecursive;
                    } else {
                        var $temp$classes1 = exactClassName1 + (" " + classes1), $temp$node1 = node1, $temp$has1 = A2($mdgriffith$elm_ui$Internal$Flag$add, flag1, has1), $temp$transform1 = transform1, $temp$styles1 = styles1, $temp$attrs1 = attrs1, $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                        classes1 = $temp$classes1;
                        node1 = $temp$node1;
                        has1 = $temp$has1;
                        transform1 = $temp$transform1;
                        styles1 = $temp$styles1;
                        attrs1 = $temp$attrs1;
                        children1 = $temp$children1;
                        elementAttrs1 = $temp$elementAttrs1;
                        continue gatherAttrRecursive;
                    }
                case "Attr":
                    var actualAttribute1 = attribute1.a;
                    var $temp$classes1 = classes1, $temp$node1 = node1, $temp$has1 = has1, $temp$transform1 = transform1, $temp$styles1 = styles1, $temp$attrs1 = A2($elm$core$List$cons, actualAttribute1, attrs1), $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                    classes1 = $temp$classes1;
                    node1 = $temp$node1;
                    has1 = $temp$has1;
                    transform1 = $temp$transform1;
                    styles1 = $temp$styles1;
                    attrs1 = $temp$attrs1;
                    children1 = $temp$children1;
                    elementAttrs1 = $temp$elementAttrs1;
                    continue gatherAttrRecursive;
                case "StyleClass":
                    var flag1 = attribute1.a;
                    var style1 = attribute1.b;
                    if (A2($mdgriffith$elm_ui$Internal$Flag$present, flag1, has1)) {
                        var $temp$classes1 = classes1, $temp$node1 = node1, $temp$has1 = has1, $temp$transform1 = transform1, $temp$styles1 = styles1, $temp$attrs1 = attrs1, $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                        classes1 = $temp$classes1;
                        node1 = $temp$node1;
                        has1 = $temp$has1;
                        transform1 = $temp$transform1;
                        styles1 = $temp$styles1;
                        attrs1 = $temp$attrs1;
                        children1 = $temp$children1;
                        elementAttrs1 = $temp$elementAttrs1;
                        continue gatherAttrRecursive;
                    } else if (A2($mdgriffith$elm_ui$Internal$Model$skippable, flag1, style1)) {
                        var $temp$classes1 = $mdgriffith$elm_ui$Internal$Model$getStyleName(style1) + (" " + classes1), $temp$node1 = node1, $temp$has1 = A2($mdgriffith$elm_ui$Internal$Flag$add, flag1, has1), $temp$transform1 = transform1, $temp$styles1 = styles1, $temp$attrs1 = attrs1, $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                        classes1 = $temp$classes1;
                        node1 = $temp$node1;
                        has1 = $temp$has1;
                        transform1 = $temp$transform1;
                        styles1 = $temp$styles1;
                        attrs1 = $temp$attrs1;
                        children1 = $temp$children1;
                        elementAttrs1 = $temp$elementAttrs1;
                        continue gatherAttrRecursive;
                    } else {
                        var $temp$classes1 = $mdgriffith$elm_ui$Internal$Model$getStyleName(style1) + (" " + classes1), $temp$node1 = node1, $temp$has1 = A2($mdgriffith$elm_ui$Internal$Flag$add, flag1, has1), $temp$transform1 = transform1, $temp$styles1 = A2($elm$core$List$cons, style1, styles1), $temp$attrs1 = attrs1, $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                        classes1 = $temp$classes1;
                        node1 = $temp$node1;
                        has1 = $temp$has1;
                        transform1 = $temp$transform1;
                        styles1 = $temp$styles1;
                        attrs1 = $temp$attrs1;
                        children1 = $temp$children1;
                        elementAttrs1 = $temp$elementAttrs1;
                        continue gatherAttrRecursive;
                    }
                case "TransformComponent":
                    var flag1 = attribute1.a;
                    var component1 = attribute1.b;
                    var $temp$classes1 = classes1, $temp$node1 = node1, $temp$has1 = A2($mdgriffith$elm_ui$Internal$Flag$add, flag1, has1), $temp$transform1 = A2($mdgriffith$elm_ui$Internal$Model$composeTransformation, transform1, component1), $temp$styles1 = styles1, $temp$attrs1 = attrs1, $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                    classes1 = $temp$classes1;
                    node1 = $temp$node1;
                    has1 = $temp$has1;
                    transform1 = $temp$transform1;
                    styles1 = $temp$styles1;
                    attrs1 = $temp$attrs1;
                    children1 = $temp$children1;
                    elementAttrs1 = $temp$elementAttrs1;
                    continue gatherAttrRecursive;
                case "Width":
                    var width1 = attribute1.a;
                    if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$width, has1)) {
                        var $temp$classes1 = classes1, $temp$node1 = node1, $temp$has1 = has1, $temp$transform1 = transform1, $temp$styles1 = styles1, $temp$attrs1 = attrs1, $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                        classes1 = $temp$classes1;
                        node1 = $temp$node1;
                        has1 = $temp$has1;
                        transform1 = $temp$transform1;
                        styles1 = $temp$styles1;
                        attrs1 = $temp$attrs1;
                        children1 = $temp$children1;
                        elementAttrs1 = $temp$elementAttrs1;
                        continue gatherAttrRecursive;
                    } else switch(width1.$){
                        case "Px":
                            var px1 = width1.a;
                            var $temp$classes1 = $mdgriffith$elm_ui$Internal$Style$classes.widthExact + (" width-px-" + $elm$core$String$fromInt(px1)) + (" " + classes1), $temp$node1 = node1, $temp$has1 = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has1), $temp$transform1 = transform1, $temp$styles1 = A2($elm$core$List$cons, A3($mdgriffith$elm_ui$Internal$Model$Single, "width-px-" + $elm$core$String$fromInt(px1), "width", $elm$core$String$fromInt(px1) + "px"), styles1), $temp$attrs1 = attrs1, $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                            classes1 = $temp$classes1;
                            node1 = $temp$node1;
                            has1 = $temp$has1;
                            transform1 = $temp$transform1;
                            styles1 = $temp$styles1;
                            attrs1 = $temp$attrs1;
                            children1 = $temp$children1;
                            elementAttrs1 = $temp$elementAttrs1;
                            continue gatherAttrRecursive;
                        case "Content":
                            var $temp$classes1 = classes1 + (" " + $mdgriffith$elm_ui$Internal$Style$classes.widthContent), $temp$node1 = node1, $temp$has1 = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthContent, A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has1)), $temp$transform1 = transform1, $temp$styles1 = styles1, $temp$attrs1 = attrs1, $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                            classes1 = $temp$classes1;
                            node1 = $temp$node1;
                            has1 = $temp$has1;
                            transform1 = $temp$transform1;
                            styles1 = $temp$styles1;
                            attrs1 = $temp$attrs1;
                            children1 = $temp$children1;
                            elementAttrs1 = $temp$elementAttrs1;
                            continue gatherAttrRecursive;
                        case "Fill":
                            var portion1 = width1.a;
                            if (portion1 === 1) {
                                var $temp$classes1 = classes1 + (" " + $mdgriffith$elm_ui$Internal$Style$classes.widthFill), $temp$node1 = node1, $temp$has1 = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has1)), $temp$transform1 = transform1, $temp$styles1 = styles1, $temp$attrs1 = attrs1, $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                                classes1 = $temp$classes1;
                                node1 = $temp$node1;
                                has1 = $temp$has1;
                                transform1 = $temp$transform1;
                                styles1 = $temp$styles1;
                                attrs1 = $temp$attrs1;
                                children1 = $temp$children1;
                                elementAttrs1 = $temp$elementAttrs1;
                                continue gatherAttrRecursive;
                            } else {
                                var $temp$classes1 = classes1 + (" " + ($mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion + (" width-fill-" + $elm$core$String$fromInt(portion1)))), $temp$node1 = node1, $temp$has1 = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has1)), $temp$transform1 = transform1, $temp$styles1 = A2($elm$core$List$cons, A3($mdgriffith$elm_ui$Internal$Model$Single, $mdgriffith$elm_ui$Internal$Style$classes.any + ("." + ($mdgriffith$elm_ui$Internal$Style$classes.row + (" > " + $mdgriffith$elm_ui$Internal$Style$dot("width-fill-" + $elm$core$String$fromInt(portion1))))), "flex-grow", $elm$core$String$fromInt(portion1 * 100000)), styles1), $temp$attrs1 = attrs1, $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                                classes1 = $temp$classes1;
                                node1 = $temp$node1;
                                has1 = $temp$has1;
                                transform1 = $temp$transform1;
                                styles1 = $temp$styles1;
                                attrs1 = $temp$attrs1;
                                children1 = $temp$children1;
                                elementAttrs1 = $temp$elementAttrs1;
                                continue gatherAttrRecursive;
                            }
                        default:
                            var _v41 = $mdgriffith$elm_ui$Internal$Model$renderWidth(width1);
                            var addToFlags1 = _v41.a;
                            var newClass1 = _v41.b;
                            var newStyles1 = _v41.c;
                            var $temp$classes1 = classes1 + (" " + newClass1), $temp$node1 = node1, $temp$has1 = A2($mdgriffith$elm_ui$Internal$Flag$merge, addToFlags1, A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has1)), $temp$transform1 = transform1, $temp$styles1 = _Utils_ap(newStyles1, styles1), $temp$attrs1 = attrs1, $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                            classes1 = $temp$classes1;
                            node1 = $temp$node1;
                            has1 = $temp$has1;
                            transform1 = $temp$transform1;
                            styles1 = $temp$styles1;
                            attrs1 = $temp$attrs1;
                            children1 = $temp$children1;
                            elementAttrs1 = $temp$elementAttrs1;
                            continue gatherAttrRecursive;
                    }
                case "Height":
                    var height1 = attribute1.a;
                    if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$height, has1)) {
                        var $temp$classes1 = classes1, $temp$node1 = node1, $temp$has1 = has1, $temp$transform1 = transform1, $temp$styles1 = styles1, $temp$attrs1 = attrs1, $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                        classes1 = $temp$classes1;
                        node1 = $temp$node1;
                        has1 = $temp$has1;
                        transform1 = $temp$transform1;
                        styles1 = $temp$styles1;
                        attrs1 = $temp$attrs1;
                        children1 = $temp$children1;
                        elementAttrs1 = $temp$elementAttrs1;
                        continue gatherAttrRecursive;
                    } else switch(height1.$){
                        case "Px":
                            var px1 = height1.a;
                            var val1 = $elm$core$String$fromInt(px1) + "px";
                            var name1 = "height-px-" + val1;
                            var $temp$classes1 = $mdgriffith$elm_ui$Internal$Style$classes.heightExact + (" " + (name1 + (" " + classes1))), $temp$node1 = node1, $temp$has1 = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has1), $temp$transform1 = transform1, $temp$styles1 = A2($elm$core$List$cons, A3($mdgriffith$elm_ui$Internal$Model$Single, name1, "height ", val1), styles1), $temp$attrs1 = attrs1, $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                            classes1 = $temp$classes1;
                            node1 = $temp$node1;
                            has1 = $temp$has1;
                            transform1 = $temp$transform1;
                            styles1 = $temp$styles1;
                            attrs1 = $temp$attrs1;
                            children1 = $temp$children1;
                            elementAttrs1 = $temp$elementAttrs1;
                            continue gatherAttrRecursive;
                        case "Content":
                            var $temp$classes1 = $mdgriffith$elm_ui$Internal$Style$classes.heightContent + (" " + classes1), $temp$node1 = node1, $temp$has1 = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightContent, A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has1)), $temp$transform1 = transform1, $temp$styles1 = styles1, $temp$attrs1 = attrs1, $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                            classes1 = $temp$classes1;
                            node1 = $temp$node1;
                            has1 = $temp$has1;
                            transform1 = $temp$transform1;
                            styles1 = $temp$styles1;
                            attrs1 = $temp$attrs1;
                            children1 = $temp$children1;
                            elementAttrs1 = $temp$elementAttrs1;
                            continue gatherAttrRecursive;
                        case "Fill":
                            var portion1 = height1.a;
                            if (portion1 === 1) {
                                var $temp$classes1 = $mdgriffith$elm_ui$Internal$Style$classes.heightFill + (" " + classes1), $temp$node1 = node1, $temp$has1 = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has1)), $temp$transform1 = transform1, $temp$styles1 = styles1, $temp$attrs1 = attrs1, $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                                classes1 = $temp$classes1;
                                node1 = $temp$node1;
                                has1 = $temp$has1;
                                transform1 = $temp$transform1;
                                styles1 = $temp$styles1;
                                attrs1 = $temp$attrs1;
                                children1 = $temp$children1;
                                elementAttrs1 = $temp$elementAttrs1;
                                continue gatherAttrRecursive;
                            } else {
                                var $temp$classes1 = classes1 + (" " + ($mdgriffith$elm_ui$Internal$Style$classes.heightFillPortion + (" height-fill-" + $elm$core$String$fromInt(portion1)))), $temp$node1 = node1, $temp$has1 = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has1)), $temp$transform1 = transform1, $temp$styles1 = A2($elm$core$List$cons, A3($mdgriffith$elm_ui$Internal$Model$Single, $mdgriffith$elm_ui$Internal$Style$classes.any + ("." + ($mdgriffith$elm_ui$Internal$Style$classes.column + (" > " + $mdgriffith$elm_ui$Internal$Style$dot("height-fill-" + $elm$core$String$fromInt(portion1))))), "flex-grow", $elm$core$String$fromInt(portion1 * 100000)), styles1), $temp$attrs1 = attrs1, $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                                classes1 = $temp$classes1;
                                node1 = $temp$node1;
                                has1 = $temp$has1;
                                transform1 = $temp$transform1;
                                styles1 = $temp$styles1;
                                attrs1 = $temp$attrs1;
                                children1 = $temp$children1;
                                elementAttrs1 = $temp$elementAttrs1;
                                continue gatherAttrRecursive;
                            }
                        default:
                            var _v61 = $mdgriffith$elm_ui$Internal$Model$renderHeight(height1);
                            var addToFlags1 = _v61.a;
                            var newClass1 = _v61.b;
                            var newStyles1 = _v61.c;
                            var $temp$classes1 = classes1 + (" " + newClass1), $temp$node1 = node1, $temp$has1 = A2($mdgriffith$elm_ui$Internal$Flag$merge, addToFlags1, A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has1)), $temp$transform1 = transform1, $temp$styles1 = _Utils_ap(newStyles1, styles1), $temp$attrs1 = attrs1, $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                            classes1 = $temp$classes1;
                            node1 = $temp$node1;
                            has1 = $temp$has1;
                            transform1 = $temp$transform1;
                            styles1 = $temp$styles1;
                            attrs1 = $temp$attrs1;
                            children1 = $temp$children1;
                            elementAttrs1 = $temp$elementAttrs1;
                            continue gatherAttrRecursive;
                    }
                case "Describe":
                    var description1 = attribute1.a;
                    switch(description1.$){
                        case "Main":
                            var $temp$classes1 = classes1, $temp$node1 = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, "main", node1), $temp$has1 = has1, $temp$transform1 = transform1, $temp$styles1 = styles1, $temp$attrs1 = attrs1, $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                            classes1 = $temp$classes1;
                            node1 = $temp$node1;
                            has1 = $temp$has1;
                            transform1 = $temp$transform1;
                            styles1 = $temp$styles1;
                            attrs1 = $temp$attrs1;
                            children1 = $temp$children1;
                            elementAttrs1 = $temp$elementAttrs1;
                            continue gatherAttrRecursive;
                        case "Navigation":
                            var $temp$classes1 = classes1, $temp$node1 = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, "nav", node1), $temp$has1 = has1, $temp$transform1 = transform1, $temp$styles1 = styles1, $temp$attrs1 = attrs1, $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                            classes1 = $temp$classes1;
                            node1 = $temp$node1;
                            has1 = $temp$has1;
                            transform1 = $temp$transform1;
                            styles1 = $temp$styles1;
                            attrs1 = $temp$attrs1;
                            children1 = $temp$children1;
                            elementAttrs1 = $temp$elementAttrs1;
                            continue gatherAttrRecursive;
                        case "ContentInfo":
                            var $temp$classes1 = classes1, $temp$node1 = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, "footer", node1), $temp$has1 = has1, $temp$transform1 = transform1, $temp$styles1 = styles1, $temp$attrs1 = attrs1, $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                            classes1 = $temp$classes1;
                            node1 = $temp$node1;
                            has1 = $temp$has1;
                            transform1 = $temp$transform1;
                            styles1 = $temp$styles1;
                            attrs1 = $temp$attrs1;
                            children1 = $temp$children1;
                            elementAttrs1 = $temp$elementAttrs1;
                            continue gatherAttrRecursive;
                        case "Complementary":
                            var $temp$classes1 = classes1, $temp$node1 = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, "aside", node1), $temp$has1 = has1, $temp$transform1 = transform1, $temp$styles1 = styles1, $temp$attrs1 = attrs1, $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                            classes1 = $temp$classes1;
                            node1 = $temp$node1;
                            has1 = $temp$has1;
                            transform1 = $temp$transform1;
                            styles1 = $temp$styles1;
                            attrs1 = $temp$attrs1;
                            children1 = $temp$children1;
                            elementAttrs1 = $temp$elementAttrs1;
                            continue gatherAttrRecursive;
                        case "Heading":
                            var i1 = description1.a;
                            if (i1 <= 1) {
                                var $temp$classes1 = classes1, $temp$node1 = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, "h1", node1), $temp$has1 = has1, $temp$transform1 = transform1, $temp$styles1 = styles1, $temp$attrs1 = attrs1, $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                                classes1 = $temp$classes1;
                                node1 = $temp$node1;
                                has1 = $temp$has1;
                                transform1 = $temp$transform1;
                                styles1 = $temp$styles1;
                                attrs1 = $temp$attrs1;
                                children1 = $temp$children1;
                                elementAttrs1 = $temp$elementAttrs1;
                                continue gatherAttrRecursive;
                            } else if (i1 < 7) {
                                var $temp$classes1 = classes1, $temp$node1 = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, "h" + $elm$core$String$fromInt(i1), node1), $temp$has1 = has1, $temp$transform1 = transform1, $temp$styles1 = styles1, $temp$attrs1 = attrs1, $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                                classes1 = $temp$classes1;
                                node1 = $temp$node1;
                                has1 = $temp$has1;
                                transform1 = $temp$transform1;
                                styles1 = $temp$styles1;
                                attrs1 = $temp$attrs1;
                                children1 = $temp$children1;
                                elementAttrs1 = $temp$elementAttrs1;
                                continue gatherAttrRecursive;
                            } else {
                                var $temp$classes1 = classes1, $temp$node1 = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, "h6", node1), $temp$has1 = has1, $temp$transform1 = transform1, $temp$styles1 = styles1, $temp$attrs1 = attrs1, $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                                classes1 = $temp$classes1;
                                node1 = $temp$node1;
                                has1 = $temp$has1;
                                transform1 = $temp$transform1;
                                styles1 = $temp$styles1;
                                attrs1 = $temp$attrs1;
                                children1 = $temp$children1;
                                elementAttrs1 = $temp$elementAttrs1;
                                continue gatherAttrRecursive;
                            }
                        case "Paragraph":
                            var $temp$classes1 = classes1, $temp$node1 = node1, $temp$has1 = has1, $temp$transform1 = transform1, $temp$styles1 = styles1, $temp$attrs1 = attrs1, $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                            classes1 = $temp$classes1;
                            node1 = $temp$node1;
                            has1 = $temp$has1;
                            transform1 = $temp$transform1;
                            styles1 = $temp$styles1;
                            attrs1 = $temp$attrs1;
                            children1 = $temp$children1;
                            elementAttrs1 = $temp$elementAttrs1;
                            continue gatherAttrRecursive;
                        case "Button":
                            var $temp$classes1 = classes1, $temp$node1 = node1, $temp$has1 = has1, $temp$transform1 = transform1, $temp$styles1 = styles1, $temp$attrs1 = A2($elm$core$List$cons, A2($elm$virtual_dom$VirtualDom$attribute, "role", "button"), attrs1), $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                            classes1 = $temp$classes1;
                            node1 = $temp$node1;
                            has1 = $temp$has1;
                            transform1 = $temp$transform1;
                            styles1 = $temp$styles1;
                            attrs1 = $temp$attrs1;
                            children1 = $temp$children1;
                            elementAttrs1 = $temp$elementAttrs1;
                            continue gatherAttrRecursive;
                        case "Label":
                            var label1 = description1.a;
                            var $temp$classes1 = classes1, $temp$node1 = node1, $temp$has1 = has1, $temp$transform1 = transform1, $temp$styles1 = styles1, $temp$attrs1 = A2($elm$core$List$cons, A2($elm$virtual_dom$VirtualDom$attribute, "aria-label", label1), attrs1), $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                            classes1 = $temp$classes1;
                            node1 = $temp$node1;
                            has1 = $temp$has1;
                            transform1 = $temp$transform1;
                            styles1 = $temp$styles1;
                            attrs1 = $temp$attrs1;
                            children1 = $temp$children1;
                            elementAttrs1 = $temp$elementAttrs1;
                            continue gatherAttrRecursive;
                        case "LivePolite":
                            var $temp$classes1 = classes1, $temp$node1 = node1, $temp$has1 = has1, $temp$transform1 = transform1, $temp$styles1 = styles1, $temp$attrs1 = A2($elm$core$List$cons, A2($elm$virtual_dom$VirtualDom$attribute, "aria-live", "polite"), attrs1), $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                            classes1 = $temp$classes1;
                            node1 = $temp$node1;
                            has1 = $temp$has1;
                            transform1 = $temp$transform1;
                            styles1 = $temp$styles1;
                            attrs1 = $temp$attrs1;
                            children1 = $temp$children1;
                            elementAttrs1 = $temp$elementAttrs1;
                            continue gatherAttrRecursive;
                        default:
                            var $temp$classes1 = classes1, $temp$node1 = node1, $temp$has1 = has1, $temp$transform1 = transform1, $temp$styles1 = styles1, $temp$attrs1 = A2($elm$core$List$cons, A2($elm$virtual_dom$VirtualDom$attribute, "aria-live", "assertive"), attrs1), $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                            classes1 = $temp$classes1;
                            node1 = $temp$node1;
                            has1 = $temp$has1;
                            transform1 = $temp$transform1;
                            styles1 = $temp$styles1;
                            attrs1 = $temp$attrs1;
                            children1 = $temp$children1;
                            elementAttrs1 = $temp$elementAttrs1;
                            continue gatherAttrRecursive;
                    }
                case "Nearby":
                    var location1 = attribute1.a;
                    var elem1 = attribute1.b;
                    var newStyles1 = function() {
                        switch(elem1.$){
                            case "Empty":
                                return styles1;
                            case "Text":
                                var str1 = elem1.a;
                                return styles1;
                            case "Unstyled":
                                var html1 = elem1.a;
                                return styles1;
                            default:
                                var styled1 = elem1.a;
                                return _Utils_ap(styles1, styled1.styles);
                        }
                    }();
                    var $temp$classes1 = classes1, $temp$node1 = node1, $temp$has1 = has1, $temp$transform1 = transform1, $temp$styles1 = newStyles1, $temp$attrs1 = attrs1, $temp$children1 = A3($mdgriffith$elm_ui$Internal$Model$addNearbyElement, location1, elem1, children1), $temp$elementAttrs1 = remaining1;
                    classes1 = $temp$classes1;
                    node1 = $temp$node1;
                    has1 = $temp$has1;
                    transform1 = $temp$transform1;
                    styles1 = $temp$styles1;
                    attrs1 = $temp$attrs1;
                    children1 = $temp$children1;
                    elementAttrs1 = $temp$elementAttrs1;
                    continue gatherAttrRecursive;
                case "AlignX":
                    var x1 = attribute1.a;
                    if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$xAlign, has1)) {
                        var $temp$classes1 = classes1, $temp$node1 = node1, $temp$has1 = has1, $temp$transform1 = transform1, $temp$styles1 = styles1, $temp$attrs1 = attrs1, $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                        classes1 = $temp$classes1;
                        node1 = $temp$node1;
                        has1 = $temp$has1;
                        transform1 = $temp$transform1;
                        styles1 = $temp$styles1;
                        attrs1 = $temp$attrs1;
                        children1 = $temp$children1;
                        elementAttrs1 = $temp$elementAttrs1;
                        continue gatherAttrRecursive;
                    } else {
                        var $temp$classes1 = $mdgriffith$elm_ui$Internal$Model$alignXName(x1) + (" " + classes1), $temp$node1 = node1, $temp$has1 = function(flags1) {
                            switch(x1.$){
                                case "CenterX":
                                    return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$centerX, flags1);
                                case "Right":
                                    return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$alignRight, flags1);
                                default:
                                    return flags1;
                            }
                        }(A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$xAlign, has1)), $temp$transform1 = transform1, $temp$styles1 = styles1, $temp$attrs1 = attrs1, $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                        classes1 = $temp$classes1;
                        node1 = $temp$node1;
                        has1 = $temp$has1;
                        transform1 = $temp$transform1;
                        styles1 = $temp$styles1;
                        attrs1 = $temp$attrs1;
                        children1 = $temp$children1;
                        elementAttrs1 = $temp$elementAttrs1;
                        continue gatherAttrRecursive;
                    }
                default:
                    var y1 = attribute1.a;
                    if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$yAlign, has1)) {
                        var $temp$classes1 = classes1, $temp$node1 = node1, $temp$has1 = has1, $temp$transform1 = transform1, $temp$styles1 = styles1, $temp$attrs1 = attrs1, $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                        classes1 = $temp$classes1;
                        node1 = $temp$node1;
                        has1 = $temp$has1;
                        transform1 = $temp$transform1;
                        styles1 = $temp$styles1;
                        attrs1 = $temp$attrs1;
                        children1 = $temp$children1;
                        elementAttrs1 = $temp$elementAttrs1;
                        continue gatherAttrRecursive;
                    } else {
                        var $temp$classes1 = $mdgriffith$elm_ui$Internal$Model$alignYName(y1) + (" " + classes1), $temp$node1 = node1, $temp$has1 = function(flags1) {
                            switch(y1.$){
                                case "CenterY":
                                    return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$centerY, flags1);
                                case "Bottom":
                                    return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$alignBottom, flags1);
                                default:
                                    return flags1;
                            }
                        }(A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$yAlign, has1)), $temp$transform1 = transform1, $temp$styles1 = styles1, $temp$attrs1 = attrs1, $temp$children1 = children1, $temp$elementAttrs1 = remaining1;
                        classes1 = $temp$classes1;
                        node1 = $temp$node1;
                        has1 = $temp$has1;
                        transform1 = $temp$transform1;
                        styles1 = $temp$styles1;
                        attrs1 = $temp$attrs1;
                        children1 = $temp$children1;
                        elementAttrs1 = $temp$elementAttrs1;
                        continue gatherAttrRecursive;
                    }
            }
        }
    });
    var $mdgriffith$elm_ui$Internal$Model$Untransformed = {
        $: "Untransformed"
    };
    var $mdgriffith$elm_ui$Internal$Model$untransformed = $mdgriffith$elm_ui$Internal$Model$Untransformed;
    var $mdgriffith$elm_ui$Internal$Model$element = F4(function(context1, node1, attributes1, children1) {
        return A3($mdgriffith$elm_ui$Internal$Model$createElement, context1, children1, A8($mdgriffith$elm_ui$Internal$Model$gatherAttrRecursive, $mdgriffith$elm_ui$Internal$Model$contextClasses(context1), node1, $mdgriffith$elm_ui$Internal$Flag$none, $mdgriffith$elm_ui$Internal$Model$untransformed, _List_Nil, _List_Nil, $mdgriffith$elm_ui$Internal$Model$NoNearbyChildren, $elm$core$List$reverse(attributes1)));
    });
    var $mdgriffith$elm_ui$Element$Input$enter = "Enter";
    var $mdgriffith$elm_ui$Internal$Model$NoAttribute = {
        $: "NoAttribute"
    };
    var $mdgriffith$elm_ui$Element$Input$hasFocusStyle = function(attr1) {
        if (attr1.$ === "StyleClass" && attr1.b.$ === "PseudoSelector" && attr1.b.a.$ === "Focus") {
            var _v13 = attr1.b;
            var _v21 = _v13.a;
            return true;
        } else return false;
    };
    var $mdgriffith$elm_ui$Internal$Model$htmlClass = function(cls1) {
        return $mdgriffith$elm_ui$Internal$Model$Attr($elm$html$Html$Attributes$class(cls1));
    };
    var $mdgriffith$elm_ui$Element$Input$focusDefault = function(attrs1) {
        return A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, attrs1) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass("focusable");
    };
    var $mdgriffith$elm_ui$Internal$Model$Height = function(a1) {
        return {
            $: "Height",
            a: a1
        };
    };
    var $mdgriffith$elm_ui$Element$height = $mdgriffith$elm_ui$Internal$Model$Height;
    var $mdgriffith$elm_ui$Element$Events$onClick = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Events$onClick);
    var $elm$json$Json$Decode$andThen = _Json_andThen;
    var $elm$json$Json$Decode$fail = _Json_fail;
    var $elm$virtual_dom$VirtualDom$MayPreventDefault = function(a1) {
        return {
            $: "MayPreventDefault",
            a: a1
        };
    };
    var $elm$html$Html$Events$preventDefaultOn = F2(function(event1, decoder1) {
        return A2($elm$virtual_dom$VirtualDom$on, event1, $elm$virtual_dom$VirtualDom$MayPreventDefault(decoder1));
    });
    var $mdgriffith$elm_ui$Element$Input$onKeyLookup = function(lookup1) {
        var decode1 = function(code1) {
            var _v01 = lookup1(code1);
            if (_v01.$ === "Nothing") return $elm$json$Json$Decode$fail("No key matched");
            else {
                var msg1 = _v01.a;
                return $elm$json$Json$Decode$succeed(msg1);
            }
        };
        var isKey1 = A2($elm$json$Json$Decode$andThen, decode1, A2($elm$json$Json$Decode$field, "key", $elm$json$Json$Decode$string));
        return $mdgriffith$elm_ui$Internal$Model$Attr(A2($elm$html$Html$Events$preventDefaultOn, "keydown", A2($elm$json$Json$Decode$map, function(fired1) {
            return _Utils_Tuple2(fired1, true);
        }, isKey1)));
    };
    var $mdgriffith$elm_ui$Internal$Model$Class = F2(function(a1, b1) {
        return {
            $: "Class",
            a: a1,
            b: b1
        };
    });
    var $mdgriffith$elm_ui$Internal$Flag$cursor = $mdgriffith$elm_ui$Internal$Flag$flag(21);
    var $mdgriffith$elm_ui$Element$pointer = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$cursor, $mdgriffith$elm_ui$Internal$Style$classes.cursorPointer);
    var $mdgriffith$elm_ui$Internal$Model$Content = {
        $: "Content"
    };
    var $mdgriffith$elm_ui$Element$shrink = $mdgriffith$elm_ui$Internal$Model$Content;
    var $mdgriffith$elm_ui$Element$Input$space = " ";
    var $elm$html$Html$Attributes$tabindex = function(n2) {
        return A2(_VirtualDom_attribute, "tabIndex", $elm$core$String$fromInt(n2));
    };
    var $mdgriffith$elm_ui$Internal$Model$Width = function(a1) {
        return {
            $: "Width",
            a: a1
        };
    };
    var $mdgriffith$elm_ui$Element$width = $mdgriffith$elm_ui$Internal$Model$Width;
    var $mdgriffith$elm_ui$Element$Input$button = F2(function(attrs1, _v01) {
        var onPress1 = _v01.onPress;
        var label1 = _v01.label;
        return A4($mdgriffith$elm_ui$Internal$Model$element, $mdgriffith$elm_ui$Internal$Model$asEl, $mdgriffith$elm_ui$Internal$Model$div, A2($elm$core$List$cons, $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink), A2($elm$core$List$cons, $mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink), A2($elm$core$List$cons, $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentCenterX + (" " + ($mdgriffith$elm_ui$Internal$Style$classes.contentCenterY + (" " + ($mdgriffith$elm_ui$Internal$Style$classes.seButton + (" " + $mdgriffith$elm_ui$Internal$Style$classes.noTextSelection)))))), A2($elm$core$List$cons, $mdgriffith$elm_ui$Element$pointer, A2($elm$core$List$cons, $mdgriffith$elm_ui$Element$Input$focusDefault(attrs1), A2($elm$core$List$cons, $mdgriffith$elm_ui$Internal$Model$Describe($mdgriffith$elm_ui$Internal$Model$Button), A2($elm$core$List$cons, $mdgriffith$elm_ui$Internal$Model$Attr($elm$html$Html$Attributes$tabindex(0)), function() {
            if (onPress1.$ === "Nothing") return A2($elm$core$List$cons, $mdgriffith$elm_ui$Internal$Model$Attr($elm$html$Html$Attributes$disabled(true)), attrs1);
            else {
                var msg1 = onPress1.a;
                return A2($elm$core$List$cons, $mdgriffith$elm_ui$Element$Events$onClick(msg1), A2($elm$core$List$cons, $mdgriffith$elm_ui$Element$Input$onKeyLookup(function(code1) {
                    return _Utils_eq(code1, $mdgriffith$elm_ui$Element$Input$enter) ? $elm$core$Maybe$Just(msg1) : _Utils_eq(code1, $mdgriffith$elm_ui$Element$Input$space) ? $elm$core$Maybe$Just(msg1) : $elm$core$Maybe$Nothing;
                }), attrs1));
            }
        }()))))))), $mdgriffith$elm_ui$Internal$Model$Unkeyed(_List_fromArray([
            label1
        ])));
    });
    var $mdgriffith$elm_ui$Internal$Model$AlignX = function(a1) {
        return {
            $: "AlignX",
            a: a1
        };
    };
    var $mdgriffith$elm_ui$Internal$Model$CenterX = {
        $: "CenterX"
    };
    var $mdgriffith$elm_ui$Element$centerX = $mdgriffith$elm_ui$Internal$Model$AlignX($mdgriffith$elm_ui$Internal$Model$CenterX);
    var $mdgriffith$elm_ui$Internal$Model$AlignY = function(a1) {
        return {
            $: "AlignY",
            a: a1
        };
    };
    var $mdgriffith$elm_ui$Internal$Model$CenterY = {
        $: "CenterY"
    };
    var $mdgriffith$elm_ui$Element$centerY = $mdgriffith$elm_ui$Internal$Model$AlignY($mdgriffith$elm_ui$Internal$Model$CenterY);
    var $mdgriffith$elm_ui$Internal$Model$Colored = F3(function(a1, b1, c1) {
        return {
            $: "Colored",
            a: a1,
            b: b1,
            c: c1
        };
    });
    var $mdgriffith$elm_ui$Internal$Model$StyleClass = F2(function(a1, b1) {
        return {
            $: "StyleClass",
            a: a1,
            b: b1
        };
    });
    var $mdgriffith$elm_ui$Internal$Flag$bgColor = $mdgriffith$elm_ui$Internal$Flag$flag(8);
    var $mdgriffith$elm_ui$Internal$Model$formatColorClass = function(_v01) {
        var red1 = _v01.a;
        var green1 = _v01.b;
        var blue1 = _v01.c;
        var alpha1 = _v01.d;
        return $mdgriffith$elm_ui$Internal$Model$floatClass(red1) + ("-" + ($mdgriffith$elm_ui$Internal$Model$floatClass(green1) + ("-" + ($mdgriffith$elm_ui$Internal$Model$floatClass(blue1) + ("-" + $mdgriffith$elm_ui$Internal$Model$floatClass(alpha1))))));
    };
    var $mdgriffith$elm_ui$Element$Background$color = function(clr1) {
        return A2($mdgriffith$elm_ui$Internal$Model$StyleClass, $mdgriffith$elm_ui$Internal$Flag$bgColor, A3($mdgriffith$elm_ui$Internal$Model$Colored, "bg-" + $mdgriffith$elm_ui$Internal$Model$formatColorClass(clr1), "background-color", clr1));
    };
    var $mdgriffith$elm_ui$Internal$Flag$fontColor = $mdgriffith$elm_ui$Internal$Flag$flag(14);
    var $mdgriffith$elm_ui$Element$Font$color = function(fontColor1) {
        return A2($mdgriffith$elm_ui$Internal$Model$StyleClass, $mdgriffith$elm_ui$Internal$Flag$fontColor, A3($mdgriffith$elm_ui$Internal$Model$Colored, "fc-" + $mdgriffith$elm_ui$Internal$Model$formatColorClass(fontColor1), "color", fontColor1));
    };
    var $mdgriffith$elm_ui$Internal$Model$AsColumn = {
        $: "AsColumn"
    };
    var $mdgriffith$elm_ui$Internal$Model$asColumn = $mdgriffith$elm_ui$Internal$Model$AsColumn;
    var $mdgriffith$elm_ui$Element$column = F2(function(attrs1, children1) {
        return A4($mdgriffith$elm_ui$Internal$Model$element, $mdgriffith$elm_ui$Internal$Model$asColumn, $mdgriffith$elm_ui$Internal$Model$div, A2($elm$core$List$cons, $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentTop + (" " + $mdgriffith$elm_ui$Internal$Style$classes.contentLeft)), A2($elm$core$List$cons, $mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink), A2($elm$core$List$cons, $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink), attrs1))), $mdgriffith$elm_ui$Internal$Model$Unkeyed(children1));
    });
    var $mdgriffith$elm_ui$Element$el = F2(function(attrs1, child1) {
        return A4($mdgriffith$elm_ui$Internal$Model$element, $mdgriffith$elm_ui$Internal$Model$asEl, $mdgriffith$elm_ui$Internal$Model$div, A2($elm$core$List$cons, $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink), A2($elm$core$List$cons, $mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink), attrs1)), $mdgriffith$elm_ui$Internal$Model$Unkeyed(_List_fromArray([
            child1
        ])));
    });
    var $mdgriffith$elm_ui$Internal$Model$Fill = function(a1) {
        return {
            $: "Fill",
            a: a1
        };
    };
    var $mdgriffith$elm_ui$Element$fill = $mdgriffith$elm_ui$Internal$Model$Fill(1);
    var $mdgriffith$elm_ui$Internal$Model$OnlyDynamic = F2(function(a1, b1) {
        return {
            $: "OnlyDynamic",
            a: a1,
            b: b1
        };
    });
    var $mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic = F2(function(a1, b1) {
        return {
            $: "StaticRootAndDynamic",
            a: a1,
            b: b1
        };
    });
    var $mdgriffith$elm_ui$Internal$Model$AllowHover = {
        $: "AllowHover"
    };
    var $mdgriffith$elm_ui$Internal$Model$Layout = {
        $: "Layout"
    };
    var $mdgriffith$elm_ui$Internal$Model$Rgba = F4(function(a1, b1, c1, d9) {
        return {
            $: "Rgba",
            a: a1,
            b: b1,
            c: c1,
            d: d9
        };
    });
    var $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle = {
        backgroundColor: $elm$core$Maybe$Nothing,
        borderColor: $elm$core$Maybe$Nothing,
        shadow: $elm$core$Maybe$Just({
            blur: 0,
            color: A4($mdgriffith$elm_ui$Internal$Model$Rgba, 155 / 255, 203 / 255, 1, 1),
            offset: _Utils_Tuple2(0, 0),
            size: 3
        })
    };
    var $mdgriffith$elm_ui$Internal$Model$optionsToRecord = function(options1) {
        var combine1 = F2(function(opt1, record1) {
            switch(opt1.$){
                case "HoverOption":
                    var hoverable1 = opt1.a;
                    var _v41 = record1.hover;
                    if (_v41.$ === "Nothing") return _Utils_update(record1, {
                        hover: $elm$core$Maybe$Just(hoverable1)
                    });
                    else return record1;
                case "FocusStyleOption":
                    var focusStyle1 = opt1.a;
                    var _v51 = record1.focus;
                    if (_v51.$ === "Nothing") return _Utils_update(record1, {
                        focus: $elm$core$Maybe$Just(focusStyle1)
                    });
                    else return record1;
                default:
                    var renderMode1 = opt1.a;
                    var _v61 = record1.mode;
                    if (_v61.$ === "Nothing") return _Utils_update(record1, {
                        mode: $elm$core$Maybe$Just(renderMode1)
                    });
                    else return record1;
            }
        });
        var andFinally1 = function(record1) {
            return {
                focus: function() {
                    var _v01 = record1.focus;
                    if (_v01.$ === "Nothing") return $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle;
                    else {
                        var focusable1 = _v01.a;
                        return focusable1;
                    }
                }(),
                hover: function() {
                    var _v13 = record1.hover;
                    if (_v13.$ === "Nothing") return $mdgriffith$elm_ui$Internal$Model$AllowHover;
                    else {
                        var hoverable1 = _v13.a;
                        return hoverable1;
                    }
                }(),
                mode: function() {
                    var _v21 = record1.mode;
                    if (_v21.$ === "Nothing") return $mdgriffith$elm_ui$Internal$Model$Layout;
                    else {
                        var actualMode1 = _v21.a;
                        return actualMode1;
                    }
                }()
            };
        };
        return andFinally1(A3($elm$core$List$foldr, combine1, {
            focus: $elm$core$Maybe$Nothing,
            hover: $elm$core$Maybe$Nothing,
            mode: $elm$core$Maybe$Nothing
        }, options1));
    };
    var $mdgriffith$elm_ui$Internal$Model$toHtml = F2(function(mode1, el1) {
        switch(el1.$){
            case "Unstyled":
                var html1 = el1.a;
                return html1($mdgriffith$elm_ui$Internal$Model$asEl);
            case "Styled":
                var styles1 = el1.a.styles;
                var html1 = el1.a.html;
                return A2(html1, mode1(styles1), $mdgriffith$elm_ui$Internal$Model$asEl);
            case "Text":
                var text1 = el1.a;
                return $mdgriffith$elm_ui$Internal$Model$textElement(text1);
            default:
                return $mdgriffith$elm_ui$Internal$Model$textElement("");
        }
    });
    var $mdgriffith$elm_ui$Internal$Model$renderRoot = F3(function(optionList1, attributes1, child1) {
        var options1 = $mdgriffith$elm_ui$Internal$Model$optionsToRecord(optionList1);
        var embedStyle1 = function() {
            var _v01 = options1.mode;
            if (_v01.$ === "NoStaticStyleSheet") return $mdgriffith$elm_ui$Internal$Model$OnlyDynamic(options1);
            else return $mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic(options1);
        }();
        return A2($mdgriffith$elm_ui$Internal$Model$toHtml, embedStyle1, A4($mdgriffith$elm_ui$Internal$Model$element, $mdgriffith$elm_ui$Internal$Model$asEl, $mdgriffith$elm_ui$Internal$Model$div, attributes1, $mdgriffith$elm_ui$Internal$Model$Unkeyed(_List_fromArray([
            child1
        ]))));
    });
    var $mdgriffith$elm_ui$Internal$Model$FontFamily = F2(function(a1, b1) {
        return {
            $: "FontFamily",
            a: a1,
            b: b1
        };
    });
    var $mdgriffith$elm_ui$Internal$Model$FontSize = function(a1) {
        return {
            $: "FontSize",
            a: a1
        };
    };
    var $mdgriffith$elm_ui$Internal$Model$SansSerif = {
        $: "SansSerif"
    };
    var $mdgriffith$elm_ui$Internal$Model$Typeface = function(a1) {
        return {
            $: "Typeface",
            a: a1
        };
    };
    var $mdgriffith$elm_ui$Internal$Flag$fontFamily = $mdgriffith$elm_ui$Internal$Flag$flag(5);
    var $mdgriffith$elm_ui$Internal$Flag$fontSize = $mdgriffith$elm_ui$Internal$Flag$flag(4);
    var $elm$core$String$toLower = _String_toLower;
    var $elm$core$String$words = _String_words;
    var $mdgriffith$elm_ui$Internal$Model$renderFontClassName = F2(function(font1, current1) {
        return _Utils_ap(current1, function() {
            switch(font1.$){
                case "Serif":
                    return "serif";
                case "SansSerif":
                    return "sans-serif";
                case "Monospace":
                    return "monospace";
                case "Typeface":
                    var name1 = font1.a;
                    return A2($elm$core$String$join, "-", $elm$core$String$words($elm$core$String$toLower(name1)));
                case "ImportFont":
                    var name1 = font1.a;
                    var url1 = font1.b;
                    return A2($elm$core$String$join, "-", $elm$core$String$words($elm$core$String$toLower(name1)));
                default:
                    var name1 = font1.a.name;
                    return A2($elm$core$String$join, "-", $elm$core$String$words($elm$core$String$toLower(name1)));
            }
        }());
    });
    var $mdgriffith$elm_ui$Internal$Model$rootStyle = function() {
        var families1 = _List_fromArray([
            $mdgriffith$elm_ui$Internal$Model$Typeface("Open Sans"),
            $mdgriffith$elm_ui$Internal$Model$Typeface("Helvetica"),
            $mdgriffith$elm_ui$Internal$Model$Typeface("Verdana"),
            $mdgriffith$elm_ui$Internal$Model$SansSerif
        ]);
        return _List_fromArray([
            A2($mdgriffith$elm_ui$Internal$Model$StyleClass, $mdgriffith$elm_ui$Internal$Flag$bgColor, A3($mdgriffith$elm_ui$Internal$Model$Colored, "bg-" + $mdgriffith$elm_ui$Internal$Model$formatColorClass(A4($mdgriffith$elm_ui$Internal$Model$Rgba, 1, 1, 1, 0)), "background-color", A4($mdgriffith$elm_ui$Internal$Model$Rgba, 1, 1, 1, 0))),
            A2($mdgriffith$elm_ui$Internal$Model$StyleClass, $mdgriffith$elm_ui$Internal$Flag$fontColor, A3($mdgriffith$elm_ui$Internal$Model$Colored, "fc-" + $mdgriffith$elm_ui$Internal$Model$formatColorClass(A4($mdgriffith$elm_ui$Internal$Model$Rgba, 0, 0, 0, 1)), "color", A4($mdgriffith$elm_ui$Internal$Model$Rgba, 0, 0, 0, 1))),
            A2($mdgriffith$elm_ui$Internal$Model$StyleClass, $mdgriffith$elm_ui$Internal$Flag$fontSize, $mdgriffith$elm_ui$Internal$Model$FontSize(20)),
            A2($mdgriffith$elm_ui$Internal$Model$StyleClass, $mdgriffith$elm_ui$Internal$Flag$fontFamily, A2($mdgriffith$elm_ui$Internal$Model$FontFamily, A3($elm$core$List$foldl, $mdgriffith$elm_ui$Internal$Model$renderFontClassName, "font-", families1), families1))
        ]);
    }();
    var $mdgriffith$elm_ui$Element$layoutWith = F3(function(_v01, attrs1, child1) {
        var options1 = _v01.options;
        return A3($mdgriffith$elm_ui$Internal$Model$renderRoot, options1, A2($elm$core$List$cons, $mdgriffith$elm_ui$Internal$Model$htmlClass(A2($elm$core$String$join, " ", _List_fromArray([
            $mdgriffith$elm_ui$Internal$Style$classes.root,
            $mdgriffith$elm_ui$Internal$Style$classes.any,
            $mdgriffith$elm_ui$Internal$Style$classes.single
        ]))), _Utils_ap($mdgriffith$elm_ui$Internal$Model$rootStyle, attrs1)), child1);
    });
    var $mdgriffith$elm_ui$Element$layout = $mdgriffith$elm_ui$Element$layoutWith({
        options: _List_Nil
    });
    var $mdgriffith$elm_ui$Internal$Model$PaddingStyle = F5(function(a1, b1, c1, d9, e1) {
        return {
            $: "PaddingStyle",
            a: a1,
            b: b1,
            c: c1,
            d: d9,
            e: e1
        };
    });
    var $mdgriffith$elm_ui$Internal$Flag$padding = $mdgriffith$elm_ui$Internal$Flag$flag(2);
    var $mdgriffith$elm_ui$Element$padding = function(x1) {
        var f1 = x1;
        return A2($mdgriffith$elm_ui$Internal$Model$StyleClass, $mdgriffith$elm_ui$Internal$Flag$padding, A5($mdgriffith$elm_ui$Internal$Model$PaddingStyle, "p-" + $elm$core$String$fromInt(x1), f1, f1, f1, f1));
    };
    var $mdgriffith$elm_ui$Element$rgb = F3(function(r5, g1, b1) {
        return A4($mdgriffith$elm_ui$Internal$Model$Rgba, r5, g1, b1, 1);
    });
    var $mdgriffith$elm_ui$Internal$Model$AsRow = {
        $: "AsRow"
    };
    var $mdgriffith$elm_ui$Internal$Model$asRow = $mdgriffith$elm_ui$Internal$Model$AsRow;
    var $mdgriffith$elm_ui$Element$row = F2(function(attrs1, children1) {
        return A4($mdgriffith$elm_ui$Internal$Model$element, $mdgriffith$elm_ui$Internal$Model$asRow, $mdgriffith$elm_ui$Internal$Model$div, A2($elm$core$List$cons, $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentLeft + (" " + $mdgriffith$elm_ui$Internal$Style$classes.contentCenterY)), A2($elm$core$List$cons, $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink), A2($elm$core$List$cons, $mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink), attrs1))), $mdgriffith$elm_ui$Internal$Model$Unkeyed(children1));
    });
    var $mdgriffith$elm_ui$Internal$Model$SpacingStyle = F3(function(a1, b1, c1) {
        return {
            $: "SpacingStyle",
            a: a1,
            b: b1,
            c: c1
        };
    });
    var $mdgriffith$elm_ui$Internal$Flag$spacing = $mdgriffith$elm_ui$Internal$Flag$flag(3);
    var $mdgriffith$elm_ui$Internal$Model$spacingName = F2(function(x1, y1) {
        return "spacing-" + ($elm$core$String$fromInt(x1) + ("-" + $elm$core$String$fromInt(y1)));
    });
    var $mdgriffith$elm_ui$Element$spacing = function(x1) {
        return A2($mdgriffith$elm_ui$Internal$Model$StyleClass, $mdgriffith$elm_ui$Internal$Flag$spacing, A3($mdgriffith$elm_ui$Internal$Model$SpacingStyle, A2($mdgriffith$elm_ui$Internal$Model$spacingName, x1, x1), x1, x1));
    };
    var $mdgriffith$elm_ui$Internal$Model$Text = function(a1) {
        return {
            $: "Text",
            a: a1
        };
    };
    var $mdgriffith$elm_ui$Element$text = function(content1) {
        return $mdgriffith$elm_ui$Internal$Model$Text(content1);
    };
    var $mdgriffith$elm_ui$Internal$Flag$fontWeight = $mdgriffith$elm_ui$Internal$Flag$flag(13);
    var $mdgriffith$elm_ui$Element$Font$bold = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$fontWeight, $mdgriffith$elm_ui$Internal$Style$classes.bold);
    var $author$project$Mineral$cleavageToString = function(cleavage1) {
        switch(cleavage1.$){
            case "NoCleavage":
                return "No";
            case "Indistinct":
                return "Indistinct";
            case "Perfect":
                return "Perfect (Parallel to long axis)";
            case "Two":
                var detail1 = cleavage1.a;
                return "Two, " + detail1;
            default:
                return "Weak";
        }
    };
    var $author$project$Mineral$colourXPLToString = function(colourXPL1) {
        switch(colourXPL1.$){
            case "FirstOrder":
                return "1st Order";
            case "SecondOrder":
                return "2nd Order";
            case "ThirdOrder":
                return "3rd Order";
            case "Isotropic":
                return "Isotropic";
            default:
                var detail1 = colourXPL1.a;
                return detail1;
        }
    };
    var $author$project$Mineral$extinctionToString = function(extinction1) {
        switch(extinction1.$){
            case "Black":
                return "Black";
            case "Undulose":
                return "Undulose (unit)";
            case "Inclined":
                var detail1 = extinction1.a;
                return "Inclined, " + detail1;
            case "Parallel":
                return "Parallel (straight)";
            case "Oblique":
                return "Oblique";
            default:
                return "Symmetrical to cleavage";
        }
    };
    var $author$project$Mineral$pleochroismToString = function(pleochroism1) {
        switch(pleochroism1.$){
            case "NoPleochroism":
                return "No";
            case "WeakPleochroism":
                return "Weak";
            case "WeakToStrongPleochroism":
                return "Weak to Strong";
            default:
                return "Strong";
        }
    };
    var $author$project$Mineral$reliefToString = function(relief1) {
        switch(relief1.$){
            case "LowRelief":
                return "Low";
            case "ModerateRelief":
                return "Moderate";
            default:
                return "High";
        }
    };
    var $author$project$Question$mineralProp = F2(function(mineral1, prop1) {
        switch(prop1.$){
            case "ColourPPL":
                return mineral1.colourInPPL;
            case "ColourXPL":
                return A2($elm$core$String$join, ", ", A2($elm$core$List$map, $author$project$Mineral$colourXPLToString, mineral1.colourInXPL));
            case "Cleavage":
                return $author$project$Mineral$cleavageToString(mineral1.cleavage);
            case "Extinction":
                return $author$project$Mineral$extinctionToString(mineral1.extinction);
            case "Pleochroism":
                return $author$project$Mineral$pleochroismToString(mineral1.pleochroism);
            default:
                return $author$project$Mineral$reliefToString(mineral1.relief);
        }
    });
    var $author$project$Question$viewMineralAnswer = function(question1) {
        return A2($mdgriffith$elm_ui$Element$el, _List_fromArray([
            $mdgriffith$elm_ui$Element$centerX,
            $mdgriffith$elm_ui$Element$Font$bold
        ]), $mdgriffith$elm_ui$Element$text(A2($author$project$Question$mineralProp, question1.mineral, question1.prop)));
    };
    var $author$project$Question$viewRockQuestion = function(question1) {
        return $mdgriffith$elm_ui$Element$text("rock");
    };
    var $author$project$Question$viewAnswer = function(question1) {
        if (question1.$ === "Mineral") {
            var q1 = question1.a;
            return $author$project$Question$viewMineralAnswer(q1);
        } else {
            var q1 = question1.a;
            return $author$project$Question$viewRockQuestion(q1);
        }
    };
    var $author$project$Question$mineralPropToString = function(prop1) {
        switch(prop1.$){
            case "ColourPPL":
                return "Colour in PPL";
            case "ColourXPL":
                return "Colour in XPL";
            case "Cleavage":
                return "Cleavage planes";
            case "Extinction":
                return "Extinction in XPL";
            case "Pleochroism":
                return "Pleochroism in PPL";
            default:
                return "Relief";
        }
    };
    var $author$project$Question$viewMineralQuestion = function(_v01) {
        var mineral1 = _v01.mineral;
        var prop1 = _v01.prop;
        return A2($mdgriffith$elm_ui$Element$column, _List_fromArray([
            $mdgriffith$elm_ui$Element$spacing(10),
            $mdgriffith$elm_ui$Element$centerX
        ]), _List_fromArray([
            A2($mdgriffith$elm_ui$Element$el, _List_fromArray([
                $mdgriffith$elm_ui$Element$centerX
            ]), $mdgriffith$elm_ui$Element$text(mineral1.name)),
            A2($mdgriffith$elm_ui$Element$el, _List_fromArray([
                $mdgriffith$elm_ui$Element$centerX
            ]), $mdgriffith$elm_ui$Element$text($author$project$Question$mineralPropToString(prop1)))
        ]));
    };
    var $author$project$Question$viewQuestion = function(question1) {
        if (question1.$ === "Mineral") {
            var q1 = question1.a;
            return $author$project$Question$viewMineralQuestion(q1);
        } else {
            var q1 = question1.a;
            return $author$project$Question$viewRockQuestion(q1);
        }
    };
    var $author$project$Main$viewScore = F2(function(correct1, incorrect1) {
        var total1 = correct1 + incorrect1;
        var percentage1 = total1 > 0 ? $elm$core$Maybe$Just(correct1 / total1) : $elm$core$Maybe$Nothing;
        var red1 = function() {
            if (percentage1.$ === "Just") {
                var p1 = percentage1.a;
                return 0.8 * (1 - p1);
            } else return 0;
        }();
        var green1 = function() {
            if (percentage1.$ === "Just") {
                var p1 = percentage1.a;
                return 0.8 * p1;
            } else return 0;
        }();
        return A2($mdgriffith$elm_ui$Element$el, _List_fromArray([
            $mdgriffith$elm_ui$Element$centerX,
            $mdgriffith$elm_ui$Element$padding(10),
            $mdgriffith$elm_ui$Element$Background$color(A3($mdgriffith$elm_ui$Element$rgb, red1, green1, 0)),
            $mdgriffith$elm_ui$Element$Font$color(A3($mdgriffith$elm_ui$Element$rgb, 1, 1, 1))
        ]), $mdgriffith$elm_ui$Element$text($elm$core$String$concat(_List_fromArray([
            "Score: ",
            $elm$core$String$fromInt(correct1),
            "/",
            $elm$core$String$fromInt(total1),
            " ",
            function() {
                if (percentage1.$ === "Just") {
                    var p1 = percentage1.a;
                    return $elm$core$String$fromInt($elm$core$Basics$round(p1 * 100)) + "%";
                } else return "";
            }()
        ]))));
    });
    var $author$project$Main$view = function(_v01) {
        var question1 = _v01.question;
        var status1 = _v01.status;
        var correct1 = _v01.correct;
        var incorrect1 = _v01.incorrect;
        return A2($mdgriffith$elm_ui$Element$layout, _List_fromArray([
            $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
            $mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill)
        ]), A2($mdgriffith$elm_ui$Element$el, _List_fromArray([
            $mdgriffith$elm_ui$Element$centerX,
            $mdgriffith$elm_ui$Element$centerY
        ]), function() {
            if (question1.$ === "Nothing") return A2($mdgriffith$elm_ui$Element$el, _List_fromArray([
                $mdgriffith$elm_ui$Element$centerX
            ]), A2($mdgriffith$elm_ui$Element$Input$button, _List_fromArray([
                $mdgriffith$elm_ui$Element$centerX,
                $mdgriffith$elm_ui$Element$padding(10),
                $mdgriffith$elm_ui$Element$Background$color(A3($mdgriffith$elm_ui$Element$rgb, 0.2, 0.2, 0.2)),
                $mdgriffith$elm_ui$Element$Font$color(A3($mdgriffith$elm_ui$Element$rgb, 1, 1, 1))
            ]), {
                label: $mdgriffith$elm_ui$Element$text("Start"),
                onPress: $elm$core$Maybe$Just($author$project$Main$Start)
            }));
            else {
                var q1 = question1.a;
                return A2($mdgriffith$elm_ui$Element$column, _List_fromArray([
                    $mdgriffith$elm_ui$Element$spacing(40),
                    $mdgriffith$elm_ui$Element$centerX
                ]), _List_fromArray([
                    function() {
                        if (status1.$ === "Ask") return A2($mdgriffith$elm_ui$Element$column, _List_fromArray([
                            $mdgriffith$elm_ui$Element$spacing(40),
                            $mdgriffith$elm_ui$Element$centerX
                        ]), _List_fromArray([
                            $author$project$Question$viewQuestion(q1),
                            A2($mdgriffith$elm_ui$Element$el, _List_fromArray([
                                $mdgriffith$elm_ui$Element$centerX
                            ]), $mdgriffith$elm_ui$Element$text("?")),
                            A2($mdgriffith$elm_ui$Element$Input$button, _List_fromArray([
                                $mdgriffith$elm_ui$Element$centerX,
                                $mdgriffith$elm_ui$Element$padding(10),
                                $mdgriffith$elm_ui$Element$Background$color(A3($mdgriffith$elm_ui$Element$rgb, 0.2, 0.2, 0.2)),
                                $mdgriffith$elm_ui$Element$Font$color(A3($mdgriffith$elm_ui$Element$rgb, 1, 1, 1))
                            ]), {
                                label: $mdgriffith$elm_ui$Element$text("Show answer"),
                                onPress: $elm$core$Maybe$Just($author$project$Main$ShowAnswer)
                            })
                        ]));
                        else return A2($mdgriffith$elm_ui$Element$column, _List_fromArray([
                            $mdgriffith$elm_ui$Element$spacing(40),
                            $mdgriffith$elm_ui$Element$centerX
                        ]), _List_fromArray([
                            $author$project$Question$viewQuestion(q1),
                            $author$project$Question$viewAnswer(q1),
                            A2($mdgriffith$elm_ui$Element$row, _List_fromArray([
                                $mdgriffith$elm_ui$Element$spacing(40),
                                $mdgriffith$elm_ui$Element$centerX
                            ]), _List_fromArray([
                                A2($mdgriffith$elm_ui$Element$Input$button, _List_fromArray([
                                    $mdgriffith$elm_ui$Element$centerX,
                                    $mdgriffith$elm_ui$Element$padding(10),
                                    $mdgriffith$elm_ui$Element$Background$color(A3($mdgriffith$elm_ui$Element$rgb, 0.8, 0.2, 0.2)),
                                    $mdgriffith$elm_ui$Element$Font$color(A3($mdgriffith$elm_ui$Element$rgb, 1, 1, 1))
                                ]), {
                                    label: $mdgriffith$elm_ui$Element$text("Incorrect"),
                                    onPress: $elm$core$Maybe$Just($author$project$Main$Incorrect)
                                }),
                                A2($mdgriffith$elm_ui$Element$Input$button, _List_fromArray([
                                    $mdgriffith$elm_ui$Element$centerX,
                                    $mdgriffith$elm_ui$Element$padding(10),
                                    $mdgriffith$elm_ui$Element$Background$color(A3($mdgriffith$elm_ui$Element$rgb, 0.2, 0.8, 0.2)),
                                    $mdgriffith$elm_ui$Element$Font$color(A3($mdgriffith$elm_ui$Element$rgb, 1, 1, 1))
                                ]), {
                                    label: $mdgriffith$elm_ui$Element$text("Correct"),
                                    onPress: $elm$core$Maybe$Just($author$project$Main$Correct)
                                })
                            ]))
                        ]));
                    }(),
                    A2($author$project$Main$viewScore, correct1, incorrect1)
                ]));
            }
        }()));
    };
    var $author$project$Main$main = $elm$browser$Browser$element({
        init: $author$project$Main$init,
        subscriptions: $author$project$Main$subscriptions,
        update: $author$project$Main$update,
        view: $author$project$Main$view
    });
    _Platform_export({
        "Main": {
            "init": $author$project$Main$main($elm$json$Json$Decode$succeed(_Utils_Tuple0))({
                "versions": {
                    "elm": "0.19.1"
                },
                "types": {
                    "message": "Main.Msg",
                    "aliases": {
                        "Mineral.Mineral": {
                            "args": [],
                            "type": "{ name : String.String, colourInPPL : String.String, relief : Mineral.Relief, colourInXPL : List.List Mineral.ColourXPL, pleochroism : Mineral.Pleochroism, cleavage : Mineral.Cleavage, extinction : Mineral.Extinction, features : String.String }"
                        }
                    },
                    "unions": {
                        "Main.Msg": {
                            "args": [],
                            "tags": {
                                "Start": [],
                                "ShowAnswer": [],
                                "Incorrect": [],
                                "Correct": [],
                                "ShowQuestion": [
                                    "( Mineral.Mineral, Question.MineralProp )"
                                ]
                            }
                        },
                        "Mineral.Cleavage": {
                            "args": [],
                            "tags": {
                                "NoCleavage": [],
                                "Indistinct": [],
                                "Perfect": [],
                                "Two": [
                                    "String.String"
                                ],
                                "Weak": []
                            }
                        },
                        "Mineral.ColourXPL": {
                            "args": [],
                            "tags": {
                                "FirstOrder": [],
                                "SecondOrder": [],
                                "ThirdOrder": [],
                                "Isotropic": [],
                                "ColourXPL": [
                                    "String.String"
                                ]
                            }
                        },
                        "Mineral.Extinction": {
                            "args": [],
                            "tags": {
                                "Black": [],
                                "Undulose": [],
                                "Inclined": [
                                    "String.String"
                                ],
                                "Parallel": [],
                                "Oblique": [],
                                "Symmetrical": []
                            }
                        },
                        "List.List": {
                            "args": [
                                "a"
                            ],
                            "tags": {}
                        },
                        "Question.MineralProp": {
                            "args": [],
                            "tags": {
                                "ColourPPL": [],
                                "ColourXPL": [],
                                "Cleavage": [],
                                "Extinction": [],
                                "Pleochroism": [],
                                "Relief": []
                            }
                        },
                        "Mineral.Pleochroism": {
                            "args": [],
                            "tags": {
                                "NoPleochroism": [],
                                "WeakPleochroism": [],
                                "WeakToStrongPleochroism": [],
                                "StrongPleochroism": []
                            }
                        },
                        "Mineral.Relief": {
                            "args": [],
                            "tags": {
                                "LowRelief": [],
                                "ModerateRelief": [],
                                "HighRelief": []
                            }
                        },
                        "String.String": {
                            "args": [],
                            "tags": {
                                "String": []
                            }
                        }
                    }
                }
            })
        }
    });
    //////////////////// HMR BEGIN ////////////////////
    /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Original Author: Flux Xu @fluxxu
*/ /*
    A note about the environment that this code runs in...

    assumed globals:
        - `module` (from Node.js module system and webpack)

    assumed in scope after injection into the Elm IIFE:
        - `scope` (has an 'Elm' property which contains the public Elm API)
        - various functions defined by Elm which we have to hook such as `_Platform_initialize` and `_Scheduler_binding`
 */ if (module.hot) {
        (function() {
            "use strict";
            //polyfill for IE: https://github.com/fluxxu/elm-hot-loader/issues/16
            if (typeof Object.assign != "function") Object.assign = function(target1) {
                "use strict";
                if (target1 == null) throw new TypeError("Cannot convert undefined or null to object");
                target1 = Object(target1);
                for(var index1 = 1; index1 < arguments.length; index1++){
                    var source1 = arguments[index1];
                    if (source1 != null) {
                        for(var key1 in source1)if (Object.prototype.hasOwnProperty.call(source1, key1)) target1[key1] = source1[key1];
                    }
                }
                return target1;
            };
            // Elm 0.19.1 introduced a '$' prefix at the beginning of the symbols it emits,
            // and we check for `Maybe.Just` because we expect it to be present in all Elm programs.
            var elmVersion;
            if (typeof elm$core$Maybe$Just !== "undefined") elmVersion = "0.19.0";
            else if (typeof $elm$core$Maybe$Just !== "undefined") elmVersion = "0.19.1";
            else throw new Error("Could not determine Elm version");
            function elmSymbol(symbol) {
                try {
                    switch(elmVersion){
                        case "0.19.0":
                            return eval(symbol);
                        case "0.19.1":
                            return eval("$" + symbol);
                        default:
                            throw new Error("Cannot resolve " + symbol + ". Elm version unknown!");
                    }
                } catch (e) {
                    if (e instanceof ReferenceError) return undefined;
                    else throw e;
                }
            }
            var instances = module.hot.data ? module.hot.data.instances || {} : {};
            var uid = module.hot.data ? module.hot.data.uid || 0 : 0;
            if (Object.keys(instances).length === 0) log("[elm-hot] Enabled");
            var cancellers = [];
            // These 2 variables act as dynamically-scoped variables which are set only when the
            // Elm module's hooked init function is called.
            var initializingInstance = null;
            var swappingInstance = null;
            module.hot.accept();
            module.hot.dispose(function(data1) {
                data1.instances = instances;
                data1.uid = uid;
                // Cleanup pending async tasks
                // First, make sure that no new tasks can be started until we finish replacing the code
                _Scheduler_binding = function() {
                    return _Scheduler_fail(new Error("[elm-hot] Inactive Elm instance."));
                };
                // Second, kill pending tasks belonging to the old instance
                if (cancellers.length) {
                    log("[elm-hot] Killing " + cancellers.length + " running processes...");
                    try {
                        cancellers.forEach(function(cancel1) {
                            cancel1();
                        });
                    } catch (e1) {
                        console.warn("[elm-hot] Kill process error: " + e1.message);
                    }
                }
            });
            function log(message1) {
                if (module.hot.verbose) console.log(message1);
            }
            function getId() {
                return ++uid;
            }
            function findPublicModules(parent1, path1) {
                var modules1 = [];
                for(var key1 in parent1){
                    var child1 = parent1[key1];
                    var currentPath1 = path1 ? path1 + "." + key1 : key1;
                    if ("init" in child1) modules1.push({
                        path: currentPath1,
                        module: child1
                    });
                    else modules1 = modules1.concat(findPublicModules(child1, currentPath1));
                }
                return modules1;
            }
            function registerInstance(domNode1, flags1, path1, portSubscribes1, portSends1) {
                var id1 = getId();
                var instance1 = {
                    id: id1,
                    path: path1,
                    domNode: domNode1,
                    flags: flags1,
                    portSubscribes: portSubscribes1,
                    portSends: portSends1,
                    lastState: null // last Elm app state (root model)
                };
                return instances[id1] = instance1;
            }
            function isFullscreenApp() {
                // Returns true if the Elm app will take over the entire DOM body.
                return typeof elmSymbol("elm$browser$Browser$application") !== "undefined" || typeof elmSymbol("elm$browser$Browser$document") !== "undefined";
            }
            function wrapDomNode(node1) {
                // When embedding an Elm app into a specific DOM node, Elm will replace the provided
                // DOM node with the Elm app's content. When the Elm app is compiled normally, the
                // original DOM node is reused (its attributes and content changes, but the object
                // in memory remains the same). But when compiled using `--debug`, Elm will completely
                // destroy the original DOM node and instead replace it with 2 brand new nodes: one
                // for your Elm app's content and the other for the Elm debugger UI. In this case,
                // if you held a reference to the DOM node provided for embedding, it would be orphaned
                // after Elm module initialization.
                //
                // So in order to make both cases consistent and isolate us from changes in how Elm
                // does this, we will insert a dummy node to wrap the node for embedding and hold
                // a reference to the dummy node.
                //
                // We will also put a tag on the dummy node so that the Elm developer knows who went
                // behind their back and rudely put stuff in their DOM.
                var dummyNode1 = document.createElement("div");
                dummyNode1.setAttribute("data-elm-hot", "true");
                dummyNode1.style.height = "inherit";
                var parentNode1 = node1.parentNode;
                parentNode1.replaceChild(dummyNode1, node1);
                dummyNode1.appendChild(node1);
                return dummyNode1;
            }
            function wrapPublicModule(path1, module1) {
                var originalInit1 = module1.init;
                if (originalInit1) module1.init = function(args1) {
                    var elm1;
                    var portSubscribes1 = {};
                    var portSends1 = {};
                    var domNode1 = null;
                    var flags1 = null;
                    if (typeof args1 !== "undefined") {
                        // normal case
                        domNode1 = args1["node"] && !isFullscreenApp() ? wrapDomNode(args1["node"]) : document.body;
                        flags1 = args1["flags"];
                    } else {
                        // rare case: Elm allows init to be called without any arguments at all
                        domNode1 = document.body;
                        flags1 = undefined;
                    }
                    initializingInstance = registerInstance(domNode1, flags1, path1, portSubscribes1, portSends1);
                    elm1 = originalInit1(args1);
                    wrapPorts(elm1, portSubscribes1, portSends1);
                    initializingInstance = null;
                    return elm1;
                };
                else console.error("Could not find a public module to wrap at path " + path1);
            }
            function swap(Elm1, instance1) {
                log("[elm-hot] Hot-swapping module: " + instance1.path);
                swappingInstance = instance1;
                // remove from the DOM everything that had been created by the old Elm app
                var containerNode1 = instance1.domNode;
                while(containerNode1.lastChild)containerNode1.removeChild(containerNode1.lastChild);
                var m1 = getAt(instance1.path.split("."), Elm1);
                var elm1;
                if (m1) {
                    // prepare to initialize the new Elm module
                    var args1 = {
                        flags: instance1.flags
                    };
                    if (containerNode1 === document.body) ;
                    else {
                        // embed case: provide a new node for Elm to use
                        var nodeForEmbed1 = document.createElement("div");
                        containerNode1.appendChild(nodeForEmbed1);
                        args1["node"] = nodeForEmbed1;
                    }
                    elm1 = m1.init(args1);
                    Object.keys(instance1.portSubscribes).forEach(function(portName1) {
                        if (portName1 in elm1.ports && "subscribe" in elm1.ports[portName1]) {
                            var handlers1 = instance1.portSubscribes[portName1];
                            if (!handlers1.length) return;
                            log("[elm-hot] Reconnect " + handlers1.length + " handler(s) to port '" + portName1 + "' (" + instance1.path + ").");
                            handlers1.forEach(function(handler1) {
                                elm1.ports[portName1].subscribe(handler1);
                            });
                        } else {
                            delete instance1.portSubscribes[portName1];
                            log("[elm-hot] Port was removed: " + portName1);
                        }
                    });
                    Object.keys(instance1.portSends).forEach(function(portName1) {
                        if (portName1 in elm1.ports && "send" in elm1.ports[portName1]) {
                            log("[elm-hot] Replace old port send with the new send");
                            instance1.portSends[portName1] = elm1.ports[portName1].send;
                        } else {
                            delete instance1.portSends[portName1];
                            log("[elm-hot] Port was removed: " + portName1);
                        }
                    });
                } else log("[elm-hot] Module was removed: " + instance1.path);
                swappingInstance = null;
            }
            function wrapPorts(elm1, portSubscribes1, portSends1) {
                var portNames1 = Object.keys(elm1.ports || {});
                //hook ports
                if (portNames1.length) {
                    // hook outgoing ports
                    portNames1.filter(function(name1) {
                        return "subscribe" in elm1.ports[name1];
                    }).forEach(function(portName1) {
                        var port1 = elm1.ports[portName1];
                        var subscribe1 = port1.subscribe;
                        var unsubscribe1 = port1.unsubscribe;
                        elm1.ports[portName1] = Object.assign(port1, {
                            subscribe: function(handler1) {
                                log("[elm-hot] ports." + portName1 + ".subscribe called.");
                                if (!portSubscribes1[portName1]) portSubscribes1[portName1] = [
                                    handler1
                                ];
                                else //TODO handle subscribing to single handler more than once?
                                portSubscribes1[portName1].push(handler1);
                                return subscribe1.call(port1, handler1);
                            },
                            unsubscribe: function(handler1) {
                                log("[elm-hot] ports." + portName1 + ".unsubscribe called.");
                                var list1 = portSubscribes1[portName1];
                                if (list1 && list1.indexOf(handler1) !== -1) list1.splice(list1.lastIndexOf(handler1), 1);
                                else console.warn("[elm-hot] ports." + portName1 + ".unsubscribe: handler not subscribed");
                                return unsubscribe1.call(port1, handler1);
                            }
                        });
                    });
                    // hook incoming ports
                    portNames1.filter(function(name1) {
                        return "send" in elm1.ports[name1];
                    }).forEach(function(portName1) {
                        var port1 = elm1.ports[portName1];
                        portSends1[portName1] = port1.send;
                        elm1.ports[portName1] = Object.assign(port1, {
                            send: function(val1) {
                                return portSends1[portName1].call(port1, val1);
                            }
                        });
                    });
                }
                return portSubscribes1;
            }
            /*
        Breadth-first search for a `Browser.Navigation.Key` in the user's app model.
        Returns the key and keypath or null if not found.
        */ function findNavKey(rootModel1) {
                var queue1 = [];
                if (isDebuggerModel(rootModel1)) /*
                 Extract the user's app model from the Elm Debugger's model. The Elm debugger
                 can hold multiple references to the user's model (e.g. in its "history"). So
                 we must be careful to only search within the "state" part of the Debugger.
                */ queue1.push({
                    value: rootModel1["state"],
                    keypath: [
                        "state"
                    ]
                });
                else queue1.push({
                    value: rootModel1,
                    keypath: []
                });
                while(queue1.length !== 0){
                    var item3 = queue1.shift();
                    if (typeof item3.value === "undefined" || item3.value === null) continue;
                    // The nav key is identified by a runtime tag added by the elm-hot injector.
                    if (item3.value.hasOwnProperty("elm-hot-nav-key")) // found it!
                    return item3;
                    if (typeof item3.value !== "object") continue;
                    for(var propName1 in item3.value){
                        if (!item3.value.hasOwnProperty(propName1)) continue;
                        var newKeypath1 = item3.keypath.slice();
                        newKeypath1.push(propName1);
                        queue1.push({
                            value: item3.value[propName1],
                            keypath: newKeypath1
                        });
                    }
                }
                return null;
            }
            function isDebuggerModel(model1) {
                // Up until elm/browser 1.0.2, the Elm debugger could be identified by a
                // property named "expando". But in version 1.0.2 that was renamed to "expandoModel"
                return model1 && (model1.hasOwnProperty("expando") || model1.hasOwnProperty("expandoModel")) && model1.hasOwnProperty("state");
            }
            function getAt(keyPath1, obj1) {
                return keyPath1.reduce(function(xs1, x1) {
                    return xs1 && xs1[x1] ? xs1[x1] : null;
                }, obj1);
            }
            function removeNavKeyListeners(navKey1) {
                window.removeEventListener("popstate", navKey1.value);
                window.navigator.userAgent.indexOf("Trident") < 0 || window.removeEventListener("hashchange", navKey1.value);
            }
            // hook program creation
            var initialize = _Platform_initialize;
            _Platform_initialize = function(flagDecoder1, args1, init1, update1, subscriptions1, stepperBuilder1) {
                var instance1 = initializingInstance || swappingInstance;
                var tryFirstRender1 = !!swappingInstance;
                var hookedInit1 = function(args1) {
                    var initialStateTuple1 = init1(args1);
                    if (swappingInstance) {
                        var oldModel1 = swappingInstance.lastState;
                        var newModel1 = initialStateTuple1.a;
                        if (typeof elmSymbol("elm$browser$Browser$application") !== "undefined") {
                            var oldKeyLoc1 = findNavKey(oldModel1);
                            // attempt to find the Browser.Navigation.Key in the newly-constructed model
                            // and bring it along with the rest of the old data.
                            var newKeyLoc1 = findNavKey(newModel1);
                            var error1 = null;
                            if (newKeyLoc1 === null) error1 = "could not find Browser.Navigation.Key in the new app model";
                            else if (oldKeyLoc1 === null) error1 = "could not find Browser.Navigation.Key in the old app model.";
                            else if (newKeyLoc1.keypath.toString() !== oldKeyLoc1.keypath.toString()) error1 = "the location of the Browser.Navigation.Key in the model has changed.";
                            else {
                                // remove event listeners attached to the old nav key
                                removeNavKeyListeners(oldKeyLoc1.value);
                                // insert the new nav key into the old model in the exact same location
                                var parentKeyPath1 = oldKeyLoc1.keypath.slice(0, -1);
                                var lastSegment1 = oldKeyLoc1.keypath.slice(-1)[0];
                                var oldParent1 = getAt(parentKeyPath1, oldModel1);
                                oldParent1[lastSegment1] = newKeyLoc1.value;
                            }
                            if (error1 !== null) {
                                console.error("[elm-hot] Hot-swapping " + instance1.path + " not possible: " + error1);
                                oldModel1 = newModel1;
                            }
                        }
                        // the heart of the app state hot-swap
                        initialStateTuple1.a = oldModel1;
                        // ignore any Cmds returned by the init during hot-swap
                        initialStateTuple1.b = elmSymbol("elm$core$Platform$Cmd$none");
                    } else // capture the initial state for later
                    initializingInstance.lastState = initialStateTuple1.a;
                    return initialStateTuple1;
                };
                var hookedStepperBuilder1 = function(sendToApp1, model1) {
                    var result1;
                    // first render may fail if shape of model changed too much
                    if (tryFirstRender1) {
                        tryFirstRender1 = false;
                        try {
                            result1 = stepperBuilder1(sendToApp1, model1);
                        } catch (e1) {
                            throw new Error("[elm-hot] Hot-swapping " + instance1.path + " is not possible, please reload page. Error: " + e1.message);
                        }
                    } else result1 = stepperBuilder1(sendToApp1, model1);
                    return function(nextModel1, isSync1) {
                        if (instance1) // capture the state after every step so that later we can restore from it during a hot-swap
                        instance1.lastState = nextModel1;
                        return result1(nextModel1, isSync1);
                    };
                };
                return initialize(flagDecoder1, args1, hookedInit1, update1, subscriptions1, hookedStepperBuilder1);
            };
            // hook process creation
            var originalBinding = _Scheduler_binding;
            _Scheduler_binding = function(originalCallback1) {
                return originalBinding(function() {
                    // start the scheduled process, which may return a cancellation function.
                    var cancel1 = originalCallback1.apply(this, arguments);
                    if (cancel1) {
                        cancellers.push(cancel1);
                        return function() {
                            cancellers.splice(cancellers.indexOf(cancel1), 1);
                            return cancel1();
                        };
                    }
                    return cancel1;
                });
            };
            scope["_elm_hot_loader_init"] = function(Elm1) {
                // swap instances
                var removedInstances1 = [];
                for(var id1 in instances){
                    var instance1 = instances[id1];
                    if (instance1.domNode.parentNode) swap(Elm1, instance1);
                    else removedInstances1.push(id1);
                }
                removedInstances1.forEach(function(id1) {
                    delete instance1[id1];
                });
                // wrap all public modules
                var publicModules1 = findPublicModules(Elm1);
                publicModules1.forEach(function(m1) {
                    wrapPublicModule(m1.path, m1.module);
                });
            };
        })();
        scope["_elm_hot_loader_init"](scope["Elm"]);
    }
//////////////////// HMR END ////////////////////
})(this);

},{}]},["3smKr","bB7Pu"], "bB7Pu", "parcelRequire94c2")

//# sourceMappingURL=index.3d214d75.js.map
