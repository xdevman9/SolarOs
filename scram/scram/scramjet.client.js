(() => { // webpackBootstrap
var __webpack_modules__ = ({
"./src/client sync recursive ^\\.\\/.*$": (function (module, __unused_webpack_exports, __webpack_require__) {
var map = {
  "./": "./src/client/index.ts",
  "./client": "./src/client/client.ts",
  "./client.ts": "./src/client/client.ts",
  "./document": "./src/client/document.ts",
  "./document.ts": "./src/client/document.ts",
  "./dom/attr": "./src/client/dom/attr.ts",
  "./dom/attr.ts": "./src/client/dom/attr.ts",
  "./dom/beacon": "./src/client/dom/beacon.ts",
  "./dom/beacon.ts": "./src/client/dom/beacon.ts",
  "./dom/cookie": "./src/client/dom/cookie.ts",
  "./dom/cookie.ts": "./src/client/dom/cookie.ts",
  "./dom/css": "./src/client/dom/css.ts",
  "./dom/css.ts": "./src/client/dom/css.ts",
  "./dom/document": "./src/client/dom/document.ts",
  "./dom/document.ts": "./src/client/dom/document.ts",
  "./dom/element": "./src/client/dom/element.ts",
  "./dom/element.ts": "./src/client/dom/element.ts",
  "./dom/fontface": "./src/client/dom/fontface.ts",
  "./dom/fontface.ts": "./src/client/dom/fontface.ts",
  "./dom/history": "./src/client/dom/history.ts",
  "./dom/history.ts": "./src/client/dom/history.ts",
  "./dom/intersectionobserver": "./src/client/dom/intersectionobserver.ts",
  "./dom/intersectionobserver.ts": "./src/client/dom/intersectionobserver.ts",
  "./dom/navigation": "./src/client/dom/navigation.ts",
  "./dom/navigation.ts": "./src/client/dom/navigation.ts",
  "./dom/open": "./src/client/dom/open.ts",
  "./dom/open.ts": "./src/client/dom/open.ts",
  "./dom/origin": "./src/client/dom/origin.ts",
  "./dom/origin.ts": "./src/client/dom/origin.ts",
  "./dom/performance": "./src/client/dom/performance.ts",
  "./dom/performance.ts": "./src/client/dom/performance.ts",
  "./dom/serviceworker": "./src/client/dom/serviceworker.ts",
  "./dom/serviceworker.ts": "./src/client/dom/serviceworker.ts",
  "./dom/storage": "./src/client/dom/storage.ts",
  "./dom/storage.ts": "./src/client/dom/storage.ts",
  "./events": "./src/client/events.ts",
  "./events.ts": "./src/client/events.ts",
  "./global": "./src/client/global.ts",
  "./global.ts": "./src/client/global.ts",
  "./helpers": "./src/client/helpers.ts",
  "./helpers.ts": "./src/client/helpers.ts",
  "./index": "./src/client/index.ts",
  "./index.ts": "./src/client/index.ts",
  "./location": "./src/client/location.ts",
  "./location.ts": "./src/client/location.ts",
  "./natives": "./src/client/natives.ts",
  "./natives.ts": "./src/client/natives.ts",
  "./shared/antiantidebugger": "./src/client/shared/antiantidebugger.ts",
  "./shared/antiantidebugger.ts": "./src/client/shared/antiantidebugger.ts",
  "./shared/blob": "./src/client/shared/blob.ts",
  "./shared/blob.ts": "./src/client/shared/blob.ts",
  "./shared/caches": "./src/client/shared/caches.ts",
  "./shared/caches.ts": "./src/client/shared/caches.ts",
  "./shared/err": "./src/client/shared/err.ts",
  "./shared/err.ts": "./src/client/shared/err.ts",
  "./shared/error": "./src/client/shared/error.ts",
  "./shared/error.ts": "./src/client/shared/error.ts",
  "./shared/eval": "./src/client/shared/eval.ts",
  "./shared/eval.ts": "./src/client/shared/eval.ts",
  "./shared/event": "./src/client/shared/event.ts",
  "./shared/event.ts": "./src/client/shared/event.ts",
  "./shared/function": "./src/client/shared/function.ts",
  "./shared/function.ts": "./src/client/shared/function.ts",
  "./shared/import": "./src/client/shared/import.ts",
  "./shared/import.ts": "./src/client/shared/import.ts",
  "./shared/indexeddb": "./src/client/shared/indexeddb.ts",
  "./shared/indexeddb.ts": "./src/client/shared/indexeddb.ts",
  "./shared/postmessage": "./src/client/shared/postmessage.ts",
  "./shared/postmessage.ts": "./src/client/shared/postmessage.ts",
  "./shared/realm": "./src/client/shared/realm.ts",
  "./shared/realm.ts": "./src/client/shared/realm.ts",
  "./shared/requests/eventsource": "./src/client/shared/requests/eventsource.ts",
  "./shared/requests/eventsource.ts": "./src/client/shared/requests/eventsource.ts",
  "./shared/requests/fetch": "./src/client/shared/requests/fetch.ts",
  "./shared/requests/fetch.ts": "./src/client/shared/requests/fetch.ts",
  "./shared/requests/websocket": "./src/client/shared/requests/websocket.ts",
  "./shared/requests/websocket.ts": "./src/client/shared/requests/websocket.ts",
  "./shared/requests/xmlhttprequest": "./src/client/shared/requests/xmlhttprequest.ts",
  "./shared/requests/xmlhttprequest.ts": "./src/client/shared/requests/xmlhttprequest.ts",
  "./shared/sourcemaps": "./src/client/shared/sourcemaps.ts",
  "./shared/sourcemaps.ts": "./src/client/shared/sourcemaps.ts",
  "./shared/trustedTypes": "./src/client/shared/trustedTypes.ts",
  "./shared/trustedTypes.ts": "./src/client/shared/trustedTypes.ts",
  "./shared/unproxy": "./src/client/shared/unproxy.ts",
  "./shared/unproxy.ts": "./src/client/shared/unproxy.ts",
  "./shared/worker": "./src/client/shared/worker.ts",
  "./shared/worker.ts": "./src/client/shared/worker.ts",
  "./shared/wrap": "./src/client/shared/wrap.ts",
  "./shared/wrap.ts": "./src/client/shared/wrap.ts",
  "./swruntime": "./src/client/swruntime.ts",
  "./swruntime.ts": "./src/client/swruntime.ts",
  "./worker/importScripts": "./src/client/worker/importScripts.ts",
  "./worker/importScripts.ts": "./src/client/worker/importScripts.ts"
};


function webpackContext(req) {
  var id = webpackContextResolve(req);
  return __webpack_require__(id);
}
function webpackContextResolve(req) {
  if(!__webpack_require__.o(map, req)) {
    var e = new Error("Cannot find module '" + req + "'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
  }
  return map[req];
}
webpackContext.keys = function webpackContextKeys() {
  return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/client sync recursive ^\\.\\/.*$";


}),
"./src/client/client.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ScramjetClient: function() { return ScramjetClient; }
});
/* ESM import */var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/client/index.ts");
/* ESM import */var _symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbols */ "./src/symbols.ts");
/* ESM import */var _document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./document */ "./src/client/document.ts");
/* ESM import */var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/client/global.ts");
/* ESM import */var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "./src/client/helpers.ts");
/* ESM import */var _location__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./location */ "./src/client/location.ts");
/* ESM import */var _natives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./natives */ "./src/client/natives.ts");
/* ESM import */var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared */ "./src/shared.ts");
/* ESM import */var _shared_wrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/wrap */ "./src/client/shared/wrap.ts");
/* ESM import */var _events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./events */ "./src/client/events.ts");










class ScramjetClient {
    global;
    documentProxy;
    globalProxy;
    locationProxy;
    serviceWorker;
    bare;
    descriptors;
    natives;
    wrapfn;
    cookieStore;
    eventcallbacks;
    meta;
    constructor(global){
        this.global = global;
        this.descriptors = {};
        this.natives = {};
        this.cookieStore = new _shared__WEBPACK_IMPORTED_MODULE_7__.CookieStore();
        this.eventcallbacks = new Map();
        if (_symbols__WEBPACK_IMPORTED_MODULE_1__.SCRAMJETCLIENT in global) {
            console.error("attempted to initialize a scramjet cl ient, but one is already loaded - this is very bad");
            throw new Error();
        }
        this.serviceWorker = this.global.navigator.serviceWorker;
        if (___WEBPACK_IMPORTED_MODULE_0__.iswindow) {
            this.documentProxy = (0,_document__WEBPACK_IMPORTED_MODULE_2__.createDocumentProxy)(this, global);
            global.document[_symbols__WEBPACK_IMPORTED_MODULE_1__.SCRAMJETCLIENT] = this;
        }
        this.locationProxy = (0,_location__WEBPACK_IMPORTED_MODULE_5__.createLocationProxy)(this, global);
        this.globalProxy = (0,_global__WEBPACK_IMPORTED_MODULE_3__.createGlobalProxy)(this, global);
        this.wrapfn = (0,_shared_wrap__WEBPACK_IMPORTED_MODULE_8__.createWrapFn)(this, global);
        if (___WEBPACK_IMPORTED_MODULE_0__.iswindow) {
            this.bare = new _shared__WEBPACK_IMPORTED_MODULE_7__.BareClient();
        } else {
            this.bare = new _shared__WEBPACK_IMPORTED_MODULE_7__.BareClient(new Promise((resolve)=>{
                addEventListener("message", ({ data })=>{
                    if (typeof data !== "object") return;
                    if ("$scramjet$type" in data && data.$scramjet$type === "baremuxinit") {
                        resolve(data.port);
                    }
                });
            }));
        }
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const client = this;
        this.meta = {
            get origin () {
                return client.url;
            },
            get base () {
                if (___WEBPACK_IMPORTED_MODULE_0__.iswindow) {
                    const base = client.global.document.querySelector("base");
                    if (base) {
                        let url = base.getAttribute("href");
                        const frag = url.indexOf("#");
                        url = url.substring(0, frag === -1 ? undefined : frag);
                        if (!url) return client.url;
                        return new URL(url, client.url.origin);
                    }
                }
                return client.url;
            }
        };
        global[_symbols__WEBPACK_IMPORTED_MODULE_1__.SCRAMJETCLIENT] = this;
    }
    get frame() {
        if (!___WEBPACK_IMPORTED_MODULE_0__.iswindow) return null;
        const frame = this.descriptors["window.frameElement"] ? this.descriptors["window.frameElement"].get.call(this.global) : this.global.window.frameElement;
        if (!frame) return null; // we're top level
        const sframe = frame[_symbols__WEBPACK_IMPORTED_MODULE_1__.SCRAMJETFRAME];
        if (!sframe) {
            // we're in a subframe, recurse upward until we find one
            let currentwin = this.global.window;
            while(currentwin.parent != currentwin){
                if (!currentwin.frameElement) return null; // ??
                if (currentwin.frameElement && currentwin.frameElement[_symbols__WEBPACK_IMPORTED_MODULE_1__.SCRAMJETFRAME]) {
                    return currentwin.frameElement[_symbols__WEBPACK_IMPORTED_MODULE_1__.SCRAMJETFRAME];
                }
                currentwin = currentwin.parent.window;
            }
        }
        return sframe;
    }
    loadcookies(cookiestr) {
        this.cookieStore.load(cookiestr);
    }
    hook() {
        // @ts-ignore
        const context = __webpack_require__(/*! . */ "./src/client sync recursive ^\\.\\/.*$");
        const modules = [];
        for (const key of context.keys()){
            const module = context(key);
            if (!key.endsWith(".ts")) continue;
            if (key.startsWith("./dom/") && "window" in this.global || key.startsWith("./worker/") && "WorkerGlobalScope" in this.global || key.startsWith("./shared/")) {
                modules.push(module);
            }
        }
        modules.sort((a, b)=>{
            const aorder = a.order || 0;
            const border = b.order || 0;
            return aorder - border;
        });
        for (const module of modules){
            if (!module.enabled || module.enabled(this)) module.default(this, this.global);
            else if (module.disabled) module.disabled(this, this.global);
        }
    }
    get url() {
        return new URL((0,_shared__WEBPACK_IMPORTED_MODULE_7__.unrewriteUrl)(this.global.location.href));
    }
    set url(url) {
        if (url instanceof URL) url = url.toString();
        const ev = new _events__WEBPACK_IMPORTED_MODULE_9__.NavigateEvent(url);
        if (this.frame) {
            this.frame.dispatchEvent(ev);
        }
        if (ev.defaultPrevented) return;
        this.global.location.href = (0,_shared__WEBPACK_IMPORTED_MODULE_7__.rewriteUrl)(ev.url, this.meta);
    }
    // below are the utilities for proxying and trapping dom APIs
    // you don't have to understand this it just makes the rest easier
    // i'll document it eventually
    Proxy(name, handler) {
        if (Array.isArray(name)) {
            for (const n of name){
                this.Proxy(n, handler);
            }
            return;
        }
        const split = name.split(".");
        const prop = split.pop();
        const target = split.reduce((a, b)=>a?.[b], this.global);
        if (!target) return;
        const original = Reflect.get(target, prop);
        this.natives[name] = original;
        this.RawProxy(target, prop, handler);
    }
    RawProxy(target, prop, handler) {
        if (!target) return;
        if (!prop) return;
        if (!Reflect.has(target, prop)) return;
        const value = Reflect.get(target, prop);
        delete target[prop];
        const h = {};
        if (handler.construct) {
            h.construct = function(constructor, argArray, newTarget) {
                let returnValue = undefined;
                let earlyreturn = false;
                const ctx = {
                    fn: constructor,
                    this: null,
                    args: argArray,
                    newTarget: newTarget,
                    return: (r)=>{
                        earlyreturn = true;
                        returnValue = r;
                    },
                    call: ()=>{
                        earlyreturn = true;
                        returnValue = Reflect.construct(ctx.fn, ctx.args, ctx.newTarget);
                        return returnValue;
                    }
                };
                handler.construct(ctx);
                if (earlyreturn) {
                    return returnValue;
                }
                return Reflect.construct(ctx.fn, ctx.args, ctx.newTarget);
            };
        }
        if (handler.apply) {
            h.apply = function(fn, thisArg, argArray) {
                let returnValue = undefined;
                let earlyreturn = false;
                const ctx = {
                    fn,
                    this: thisArg,
                    args: argArray,
                    newTarget: null,
                    return: (r)=>{
                        earlyreturn = true;
                        returnValue = r;
                    },
                    call: ()=>{
                        earlyreturn = true;
                        returnValue = Reflect.apply(ctx.fn, ctx.this, ctx.args);
                        return returnValue;
                    }
                };
                const pst = Error.prepareStackTrace;
                Error.prepareStackTrace = function(err, s) {
                    if (s[0].getFileName() && !s[0].getFileName().startsWith(location.origin + _shared__WEBPACK_IMPORTED_MODULE_7__.config.prefix)) {
                        return {
                            stack: err.stack
                        };
                    }
                };
                try {
                    handler.apply(ctx);
                } catch (err) {
                    if (err instanceof Error) {
                        if (err.stack instanceof Object) {
                            //@ts-expect-error i'm not going to explain this
                            err.stack = err.stack.stack;
                            console.error("ERROR FROM SCRAMJET INTERNALS", err);
                        } else {
                            throw err;
                        }
                    } else {
                        throw err;
                    }
                }
                Error.prepareStackTrace = pst;
                if (earlyreturn) {
                    return returnValue;
                }
                return Reflect.apply(ctx.fn, ctx.this, ctx.args);
            };
        }
        h.getOwnPropertyDescriptor = _helpers__WEBPACK_IMPORTED_MODULE_4__.getOwnPropertyDescriptorHandler;
        target[prop] = new Proxy(value, h);
    }
    Trap(name, descriptor) {
        if (Array.isArray(name)) {
            for (const n of name){
                this.Trap(n, descriptor);
            }
            return;
        }
        const split = name.split(".");
        const prop = split.pop();
        const target = split.reduce((a, b)=>a?.[b], this.global);
        if (!target) return;
        const original = (0,_natives__WEBPACK_IMPORTED_MODULE_6__.nativeGetOwnPropertyDescriptor)(target, prop);
        this.descriptors[name] = original;
        return this.RawTrap(target, prop, descriptor);
    }
    RawTrap(target, prop, descriptor) {
        if (!target) return;
        if (!prop) return;
        if (!Reflect.has(target, prop)) return;
        const oldDescriptor = (0,_natives__WEBPACK_IMPORTED_MODULE_6__.nativeGetOwnPropertyDescriptor)(target, prop);
        const ctx = {
            this: null,
            get: function() {
                return oldDescriptor && oldDescriptor.get.call(this.this);
            },
            set: function(v) {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                oldDescriptor && oldDescriptor.set.call(this.this, v);
            }
        };
        delete target[prop];
        const desc = {};
        if (descriptor.get) {
            desc.get = function() {
                ctx.this = this;
                return descriptor.get(ctx);
            };
        } else if (oldDescriptor?.get) {
            desc.get = oldDescriptor.get;
        }
        if (descriptor.set) {
            desc.set = function(v) {
                ctx.this = this;
                descriptor.set(ctx, v);
            };
        } else if (oldDescriptor?.set) {
            desc.set = oldDescriptor.set;
        }
        if (descriptor.enumerable) desc.enumerable = descriptor.enumerable;
        else if (oldDescriptor?.enumerable) desc.enumerable = oldDescriptor.enumerable;
        if (descriptor.configurable) desc.configurable = descriptor.configurable;
        else if (oldDescriptor?.configurable) desc.configurable = oldDescriptor.configurable;
        Object.defineProperty(target, prop, desc);
        return oldDescriptor;
    }
}


}),
"./src/client/document.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createDocumentProxy: function() { return createDocumentProxy; }
});
/* ESM import */var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ "./src/shared.ts");
/* ESM import */var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/client/helpers.ts");


function createDocumentProxy(client, self) {
    return new Proxy(self.document, {
        get (target, prop) {
            if (prop === "location") {
                return client.locationProxy;
            }
            if (prop === "defaultView") {
                return client.globalProxy;
            }
            const value = Reflect.get(target, prop);
            return value;
        },
        set (target, prop, newValue) {
            if (prop === "location") {
                location.href = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.rewriteUrl)(newValue, client.meta);
                return;
            }
            return Reflect.set(target, prop, newValue);
        },
        getOwnPropertyDescriptor: _helpers__WEBPACK_IMPORTED_MODULE_1__.getOwnPropertyDescriptorHandler
    });
}


}),
"./src/client/dom/attr.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client, _self) {
    client.Trap("Element.prototype.attributes", {
        get (ctx) {
            const map = ctx.get();
            const proxy = new Proxy(map, {
                get (target, prop, _receiver) {
                    const value = Reflect.get(target, prop);
                    if (prop === "length") {
                        return Object.keys(proxy).length;
                    }
                    if (prop === "getNamedItem") {
                        return (name)=>proxy[name];
                    }
                    if (prop === "getNamedItemNS") {
                        return (namespace, name)=>proxy[`${namespace}:${name}`];
                    }
                    if (prop in NamedNodeMap.prototype && typeof value === "function") {
                        return new Proxy(value, {
                            apply (target, thisArg, argArray) {
                                if (thisArg === proxy) {
                                    return Reflect.apply(target, map, argArray);
                                }
                                return Reflect.apply(target, thisArg, argArray);
                            }
                        });
                    }
                    if ((typeof prop === "string" || typeof prop === "number") && !isNaN(Number(prop))) {
                        const position = Object.keys(proxy)[prop];
                        return map[position];
                    }
                    if (!this.has(target, prop)) return undefined;
                    return value;
                },
                ownKeys (target) {
                    const keys = Reflect.ownKeys(target);
                    return keys.filter((key)=>this.has(target, key));
                },
                has (target, prop) {
                    if (typeof prop === "symbol") return Reflect.has(target, prop);
                    if (prop.startsWith("scramjet-data-")) return false;
                    if (map[prop]?.name?.startsWith("scramjet-data-")) return false;
                    return Reflect.has(target, prop);
                }
            });
            return proxy;
        }
    });
    client.Trap("Attr.prototype.value", {
        get (ctx) {
            return ctx.this.ownerElement.getAttribute(ctx.this.name);
        },
        set (ctx, value) {
            return ctx.this.ownerElement.setAttribute(ctx.this.name, value);
        }
    });
}


}),
"./src/client/dom/beacon.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM import */var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared */ "./src/shared.ts");

/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client, _self) {
    client.Proxy("Navigator.prototype.sendBeacon", {
        apply (ctx) {
            ctx.args[0] = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.rewriteUrl)(ctx.args[0], client.meta);
        }
    });
}


}),
"./src/client/dom/cookie.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client, self) {
    client.serviceWorker.addEventListener("message", ({ data })=>{
        if (!("scramjet$type" in data)) return;
        if (data.scramjet$type === "cookie") {
            client.cookieStore.setCookies([
                data.cookie
            ], new URL(data.url));
        }
    });
    client.Trap("Document.prototype.cookie", {
        get () {
            return client.cookieStore.getCookies(client.url, true);
        },
        set (ctx, value) {
            client.cookieStore.setCookies([
                value
            ], client.url);
            if (client.serviceWorker.controller) {
                client.serviceWorker.controller.postMessage({
                    scramjet$type: "cookie",
                    cookie: value,
                    url: client.url.href
                });
            }
        }
    });
    // @ts-ignore
    delete self.cookieStore;
}


}),
"./src/client/dom/css.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM import */var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared */ "./src/shared.ts");

/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client) {
    client.Proxy("CSSStyleDeclaration.prototype.setProperty", {
        apply (ctx) {
            if (!ctx.args[1]) return;
            ctx.args[1] = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.rewriteCss)(ctx.args[1], client.meta);
        }
    });
    client.Proxy("CSSStyleDeclaration.prototype.getPropertyValue", {
        apply (ctx) {
            const v = ctx.call();
            if (!v) return v;
            ctx.return((0,_shared__WEBPACK_IMPORTED_MODULE_0__.unrewriteCss)(v));
        }
    });
    client.Trap("CSSStyleDeclaration.prototype.cssText", {
        set (ctx, value) {
            ctx.set((0,_shared__WEBPACK_IMPORTED_MODULE_0__.rewriteCss)(value, client.meta));
        },
        get (ctx) {
            return (0,_shared__WEBPACK_IMPORTED_MODULE_0__.unrewriteCss)(ctx.get());
        }
    });
    client.Trap("HTMLElement.prototype.style", {
        get (ctx) {
            // unfortunate and dumb hack. we have to trap every property of this
            // since the prototype chain is fucked
            const style = ctx.get();
            return new Proxy(style, {
                get (t, p) {
                    const v = Reflect.get(t, p);
                    if (typeof v === "function") {
                        return new Proxy(v, {
                            apply (target, thisArg, argArray) {
                                return Reflect.apply(target, style, argArray);
                            }
                        });
                    }
                    if (p in CSSStyleDeclaration.prototype) return v;
                    if (!v) return v;
                    return (0,_shared__WEBPACK_IMPORTED_MODULE_0__.unrewriteCss)(v);
                },
                set (t, p, v) {
                    if (p == "cssText" || v == "" || typeof v !== "string") {
                        return Reflect.set(t, p, v);
                    }
                    return Reflect.set(t, p, (0,_shared__WEBPACK_IMPORTED_MODULE_0__.rewriteCss)(v, client.meta));
                }
            });
        },
        set (ctx, v) {
            // this will actually run the trap for cssText. don't rewrite it here
            ctx.set(v);
        }
    });
}


}),
"./src/client/dom/document.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM import */var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared */ "./src/shared.ts");

/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client, _self) {
    client.Proxy("Document.prototype.write", {
        apply (ctx) {
            if (ctx.args[0]) try {
                ctx.args[0] = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.rewriteHtml)(ctx.args[0], client.cookieStore, client.meta, false);
            } catch  {}
        }
    });
    client.Proxy("Document.prototype.writeln", {
        apply (ctx) {
            if (ctx.args[0]) try {
                ctx.args[0] = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.rewriteHtml)(ctx.args[0], client.cookieStore, client.meta, false);
            } catch  {}
        }
    });
}


}),
"./src/client/dom/element.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM import */var _symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../symbols */ "./src/symbols.ts");
/* ESM import */var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client */ "./src/client/client.ts");
/* ESM import */var _natives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../natives */ "./src/client/natives.ts");
/* ESM import */var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/shared.ts");





/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client, self) {
    const _nativeGetAttribute = self.Element.prototype.getAttribute;
    const nativeSetAttribute = self.Element.prototype.setAttribute;
    const nativeHasAttribute = self.Element.prototype.hasAttribute;
    const attrObject = {
        nonce: [
            self.HTMLElement
        ],
        integrity: [
            self.HTMLScriptElement,
            self.HTMLLinkElement
        ],
        csp: [
            self.HTMLIFrameElement
        ],
        credentialless: [
            self.HTMLIFrameElement
        ],
        src: [
            self.HTMLImageElement,
            self.HTMLMediaElement,
            self.HTMLIFrameElement,
            self.HTMLFrameElement,
            self.HTMLEmbedElement,
            self.HTMLScriptElement,
            self.HTMLSourceElement
        ],
        href: [
            self.HTMLAnchorElement,
            self.HTMLLinkElement,
            self.SVGUseElement
        ],
        data: [
            self.HTMLObjectElement
        ],
        action: [
            self.HTMLFormElement
        ],
        formaction: [
            self.HTMLButtonElement,
            self.HTMLInputElement
        ],
        srcdoc: [
            self.HTMLIFrameElement
        ],
        srcset: [
            self.HTMLImageElement,
            self.HTMLSourceElement
        ],
        imagesrcset: [
            self.HTMLLinkElement
        ]
    };
    const urlinterfaces = [
        self.HTMLAnchorElement.prototype,
        self.HTMLAreaElement.prototype
    ];
    const originalhrefs = [
        (0,_natives__WEBPACK_IMPORTED_MODULE_2__.nativeGetOwnPropertyDescriptor)(self.HTMLAnchorElement.prototype, "href"),
        (0,_natives__WEBPACK_IMPORTED_MODULE_2__.nativeGetOwnPropertyDescriptor)(self.HTMLAreaElement.prototype, "href")
    ];
    const attrs = Object.keys(attrObject);
    for (const attr of attrs){
        for (const element of attrObject[attr]){
            const descriptor = (0,_natives__WEBPACK_IMPORTED_MODULE_2__.nativeGetOwnPropertyDescriptor)(element.prototype, attr);
            Object.defineProperty(element.prototype, attr, {
                get () {
                    if ([
                        "src",
                        "data",
                        "href",
                        "action",
                        "formaction"
                    ].includes(attr)) {
                        return (0,_shared__WEBPACK_IMPORTED_MODULE_3__.unrewriteUrl)(descriptor.get.call(this));
                    }
                    return descriptor.get.call(this);
                },
                set (value) {
                    return this.setAttribute(attr, value);
                }
            });
        }
    }
    // note that href is not here
    const urlprops = [
        "protocol",
        "hash",
        "host",
        "hostname",
        "origin",
        "pathname",
        "port",
        "search"
    ];
    for (const prop of urlprops){
        for(const i in urlinterfaces){
            const target = urlinterfaces[i];
            const desc = originalhrefs[i];
            client.RawTrap(target, prop, {
                get (ctx) {
                    const href = desc.get.call(ctx.this);
                    if (!href) return href;
                    const url = new URL((0,_shared__WEBPACK_IMPORTED_MODULE_3__.unrewriteUrl)(href));
                    return url[prop];
                }
            });
        }
    }
    client.Trap("Node.prototype.baseURI", {
        get () {
            // TODO this should be using ownerdocument but who gaf
            const base = self.document.querySelector("base");
            if (base) {
                return new URL(base.href, client.url.origin).href;
            }
            return client.url.origin;
        },
        set () {
            return false;
        }
    });
    client.Proxy("Element.prototype.setAttribute", {
        apply (ctx) {
            const [name, value] = ctx.args;
            const ruleList = _shared__WEBPACK_IMPORTED_MODULE_3__.htmlRules.find((rule)=>{
                const r = rule[name.toLowerCase()];
                if (!r) return false;
                if (r === "*") return true;
                if (typeof r === "function") return false; // this can't happen but ts
                return r.includes(ctx.this.tagName.toLowerCase());
            });
            if (ruleList) {
                ctx.args[1] = ruleList.fn(value, client.meta, client.cookieStore);
                ctx.fn.call(ctx.this, `scramjet-data-${ctx.args[0]}`, value);
            }
        }
    });
    client.Proxy("Element.prototype.setAttributeNS", {
        apply (ctx) {
            const [_namespace, name, value] = ctx.args;
            const ruleList = _shared__WEBPACK_IMPORTED_MODULE_3__.htmlRules.find((rule)=>{
                const r = rule[name.toLowerCase()];
                if (!r) return false;
                if (r === "*") return true;
                if (typeof r === "function") return false; // this can't happen but ts
                return r.includes(ctx.this.tagName.toLowerCase());
            });
            if (ruleList) {
                ctx.args[2] = ruleList.fn(value, client.meta, client.cookieStore);
                nativeSetAttribute.call(ctx.this, `scramjet-data-${ctx.args[1]}`, value);
            }
        }
    });
    client.Proxy("Element.prototype.getAttribute", {
        apply (ctx) {
            const [name] = ctx.args;
            if (name.startsWith("scramjet-data")) {
                return ctx.return(null);
            }
            if (nativeHasAttribute.call(ctx.this, `scramjet-data-${name}`)) {
                const attrib = ctx.fn.call(ctx.this, `scramjet-data-${name}`);
                if (attrib === null) return ctx.return("");
                return ctx.return(attrib);
            }
        }
    });
    client.Trap("Element.prototype.innerHTML", {
        set (ctx, value) {
            let newval;
            if (ctx.this instanceof self.HTMLScriptElement) {
                newval = (0,_shared__WEBPACK_IMPORTED_MODULE_3__.rewriteJs)(value, "(anonymous script element)", client.meta);
            } else if (ctx.this instanceof self.HTMLStyleElement) {
                newval = (0,_shared__WEBPACK_IMPORTED_MODULE_3__.rewriteCss)(value, client.meta);
            } else {
                try {
                    newval = (0,_shared__WEBPACK_IMPORTED_MODULE_3__.rewriteHtml)(value, client.cookieStore, client.meta);
                } catch  {
                    newval = value;
                }
            }
            ctx.set(newval);
        },
        get (ctx) {
            if (ctx.this instanceof self.HTMLScriptElement) {
                const scriptSource = client.natives["Element.prototype.getAttribute"].call(ctx.this, "scramjet-data-script-source-src");
                if (scriptSource) {
                    return atob(scriptSource);
                }
                return ctx.get();
            }
            if (ctx.this instanceof self.HTMLStyleElement) {
                return ctx.get();
            }
            return (0,_shared__WEBPACK_IMPORTED_MODULE_3__.unrewriteHtml)(ctx.get());
        }
    });
    client.Trap("Element.prototype.outerHTML", {
        set (ctx, value) {
            ctx.set((0,_shared__WEBPACK_IMPORTED_MODULE_3__.rewriteHtml)(value, client.cookieStore, client.meta));
        },
        get (ctx) {
            return (0,_shared__WEBPACK_IMPORTED_MODULE_3__.unrewriteHtml)(ctx.get());
        }
    });
    client.Proxy("Element.prototype.insertAdjacentHTML", {
        apply (ctx) {
            if (ctx.args[1]) try {
                ctx.args[1] = (0,_shared__WEBPACK_IMPORTED_MODULE_3__.rewriteHtml)(ctx.args[1], client.cookieStore, client.meta, false);
            } catch  {}
        }
    });
    client.Trap("HTMLIFrameElement.prototype.contentWindow", {
        get (ctx) {
            const realwin = ctx.get();
            if (!realwin) return realwin;
            if (_symbols__WEBPACK_IMPORTED_MODULE_0__.SCRAMJETCLIENT in realwin) {
                return realwin[_symbols__WEBPACK_IMPORTED_MODULE_0__.SCRAMJETCLIENT].globalProxy;
            } else {
                // hook the iframe
                const newclient = new _client__WEBPACK_IMPORTED_MODULE_1__.ScramjetClient(realwin);
                newclient.hook();
                return newclient.globalProxy;
            }
        }
    });
    client.Trap("HTMLIFrameElement.prototype.contentDocument", {
        get (ctx) {
            const contentwindow = client.descriptors["HTMLIFrameElement.prototype.contentWindow"].get;
            const realwin = contentwindow.apply(ctx.this);
            if (!realwin) return realwin;
            if (_symbols__WEBPACK_IMPORTED_MODULE_0__.SCRAMJETCLIENT in realwin) {
                return realwin[_symbols__WEBPACK_IMPORTED_MODULE_0__.SCRAMJETCLIENT].documentProxy;
            } else {
                const newclient = new _client__WEBPACK_IMPORTED_MODULE_1__.ScramjetClient(realwin);
                newclient.hook();
                return newclient.documentProxy;
            }
        }
    });
    client.Trap("TreeWalker.prototype.currentNode", {
        get (ctx) {
            return ctx.get();
        },
        set (ctx, value) {
            if (value == client.documentProxy) {
                return ctx.set(self.document);
            }
            return ctx.set(value);
        }
    });
    client.Trap("Node.prototype.ownerDocument", {
        get (ctx) {
            // return client.documentProxy;
            const doc = ctx.get();
            if (!doc) return null;
            const scram = doc[_symbols__WEBPACK_IMPORTED_MODULE_0__.SCRAMJETCLIENT];
            if (!scram) return doc; // ??
            return scram.documentProxy;
        }
    });
    client.Trap([
        "Node.prototype.parentNode",
        "Node.prototype.parentElement",
        "Node.prototype.previousSibling",
        "Node.prototype.nextSibling",
        "Range.prototype.commonAncestorContainer",
        "AbstractRange.prototype.endContainer",
        "AbstractRange.prototype.startContainer"
    ], {
        get (ctx) {
            const n = ctx.get();
            if (!(n instanceof Document)) return n;
            const scram = n[_symbols__WEBPACK_IMPORTED_MODULE_0__.SCRAMJETCLIENT];
            if (!scram) return n; // ??
            return scram.documentProxy;
        }
    });
    client.Proxy([
        "HTMLIFrameElement.prototype.getSVGDocument",
        "HTMLObjectElement.prototype.getSVGDocument",
        "HTMLEmbedElement.prototype.getSVGDocument"
    ], {
        apply (ctx) {
            const doc = ctx.call();
            if (doc) {
                ctx.return(ctx.this.contentDocument);
            }
        }
    });
    client.Proxy("Node.prototype.getRootNode", {
        apply (ctx) {
            const n = ctx.call();
            if (!(n instanceof Document)) return ctx.return(n);
            const scram = n[_symbols__WEBPACK_IMPORTED_MODULE_0__.SCRAMJETCLIENT];
            if (!scram) return ctx.return(n); // ??
            return ctx.return(scram.documentProxy);
        }
    });
    client.Proxy("DOMParser.prototype.parseFromString", {
        apply (ctx) {
            if (ctx.args[1] === "text/html") {
                try {
                    ctx.args[0] = (0,_shared__WEBPACK_IMPORTED_MODULE_3__.rewriteHtml)(ctx.args[0], client.cookieStore, client.meta, false);
                } catch  {}
            }
        }
    });
}


}),
"./src/client/dom/fontface.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM import */var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared */ "./src/shared.ts");

/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client, _self) {
    client.Proxy("FontFace", {
        construct (ctx) {
            ctx.args[1] = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.rewriteCss)(ctx.args[1], client.meta);
        }
    });
}


}),
"./src/client/dom/history.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM import */var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared */ "./src/shared.ts");
/* ESM import */var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events */ "./src/client/events.ts");


/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client, _self) {
    client.Proxy("History.prototype.pushState", {
        apply (ctx) {
            if (ctx.args[2] || ctx.args[2] === "") ctx.args[2] = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.rewriteUrl)(ctx.args[2], client.meta);
            ctx.call();
            const ev = new _events__WEBPACK_IMPORTED_MODULE_1__.UrlChangeEvent(client.url.href);
            if (client.frame) client.frame.dispatchEvent(ev);
        }
    });
    client.Proxy("History.prototype.replaceState", {
        apply (ctx) {
            if (ctx.args[2] || ctx.args[2] === "") ctx.args[2] = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.rewriteUrl)(ctx.args[2], client.meta);
            ctx.call();
            const ev = new _events__WEBPACK_IMPORTED_MODULE_1__.UrlChangeEvent(client.url.href);
            if (client.frame) client.frame.dispatchEvent(ev);
        }
    });
}


}),
"./src/client/dom/intersectionobserver.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client) {
    client.Proxy("IntersectionObserver", {
        construct (ctx) {
            // Set to the real document
            if (ctx.args[1] && ctx.args[1].root) ctx.args[1].root = document;
            ctx.call();
        }
    });
}


}),
"./src/client/dom/navigation.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client, self) {
    // @ts-ignore
    delete self.navigation;
}


}),
"./src/client/dom/open.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM import */var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared */ "./src/shared.ts");
/* ESM import */var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client */ "./src/client/client.ts");
/* ESM import */var _symbols__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../symbols */ "./src/symbols.ts");



/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client) {
    client.Proxy("window.open", {
        apply (ctx) {
            if (ctx.args[0]) ctx.args[0] = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.rewriteUrl)(ctx.args[0], client.meta);
            if ([
                "_parent",
                "_top",
                "_unfencedTop"
            ].includes(ctx.args[1])) ctx.args[1] = "_self";
            const realwin = ctx.call();
            if (!realwin) return ctx.return(realwin);
            if (_symbols__WEBPACK_IMPORTED_MODULE_2__.SCRAMJETCLIENT in realwin) {
                return ctx.return(realwin[_symbols__WEBPACK_IMPORTED_MODULE_2__.SCRAMJETCLIENT].globalProxy);
            } else {
                const newclient = new _client__WEBPACK_IMPORTED_MODULE_1__.ScramjetClient(realwin);
                // hook the opened window
                newclient.hook();
                return ctx.return(newclient.globalProxy);
            }
        }
    });
    // opener will refer to the real window if it was opened by window.open
    client.Trap("opener", {
        get (ctx) {
            const realwin = ctx.get();
            if (realwin && _symbols__WEBPACK_IMPORTED_MODULE_2__.SCRAMJETCLIENT in realwin) {
                return realwin[_symbols__WEBPACK_IMPORTED_MODULE_2__.SCRAMJETCLIENT].globalProxy;
            } else {
                // the opener has to have been already hooked, so if we reach here then it's a real window
                return undefined;
            }
        }
    });
    client.Trap("window.frameElement", {
        get (ctx) {
            const f = ctx.get();
            if (!f) return f;
            const win = f.ownerDocument.defaultView;
            if (win[_symbols__WEBPACK_IMPORTED_MODULE_2__.SCRAMJETCLIENT]) {
                // then this is a subframe in a scramjet context, and it's safe to pass back the real iframe
                return f;
            } else {
                // no, the top frame is outside the sandbox
                return null;
            }
        }
    });
}


}),
"./src/client/dom/origin.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client, _self) {
    client.Trap("origin", {
        get () {
            // this isn't right!!
            return client.url.origin;
        },
        set () {
            return false;
        }
    });
    client.Trap("Document.prototype.URL", {
        get () {
            return client.url.href;
        },
        set () {
            return false;
        }
    });
    client.Trap("Document.prototype.documentURI", {
        get () {
            return client.url.href;
        },
        set () {
            return false;
        }
    });
    client.Trap("Document.prototype.domain", {
        get () {
            return client.url.hostname;
        },
        set () {
            return false;
        }
    });
}


}),
"./src/client/dom/performance.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM import */var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared */ "./src/shared.ts");

/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client, _self) {
    client.Trap("PerformanceEntry.prototype.name", {
        get (ctx) {
            return (0,_shared__WEBPACK_IMPORTED_MODULE_0__.unrewriteUrl)(ctx.get());
        }
    });
}


}),
"./src/client/dom/serviceworker.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; },
  disabled: function() { return disabled; },
  enabled: function() { return enabled; },
  order: function() { return order; }
});
/* ESM import */var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared */ "./src/shared.ts");
/* ESM import */var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/client/helpers.ts");
/* ESM import */var _scramjet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scramjet */ "./src/scramjet.ts");



// we need a late order because we're mangling with addEventListener at a higher level
const order = 2;
const enabled = (client)=>(0,_scramjet__WEBPACK_IMPORTED_MODULE_2__.flagEnabled)("serviceworkers", client.url);
function disabled(_client, _self) {
    Reflect.deleteProperty(Navigator.prototype, "serviceWorker");
}
let realPostMessage;
if (self.ServiceWorker) {
    realPostMessage = ServiceWorker.prototype.postMessage;
}
/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client, _self) {
    let registration;
    client.Proxy("EventTarget.prototype.addEventListener", {
        apply (ctx) {
            if (registration === ctx.this) {
                // do nothing
                ctx.return(undefined);
            }
        }
    });
    client.Proxy("EventTarget.prototype.removeEventListener", {
        apply (ctx) {
            if (registration === ctx.this) {
                // do nothing
                ctx.return(undefined);
            }
        }
    });
    client.Proxy("navigator.serviceWorker.getRegistration", {
        apply (ctx) {
            ctx.return(new Promise((resolve)=>resolve(registration)));
        }
    });
    client.Proxy("navigator.serviceWorker.getRegistrations", {
        apply (ctx) {
            ctx.return(new Promise((resolve)=>resolve([
                    registration
                ])));
        }
    });
    client.Trap("navigator.serviceWorker.ready", {
        get (_ctx) {
            console.log(registration);
            return new Promise((resolve)=>resolve(registration));
        }
    });
    client.Proxy("navigator.serviceWorker.register", {
        apply (ctx) {
            if (ctx.args[0] instanceof URL) ctx.args[0] = ctx.args[0].href;
            let url = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.rewriteUrl)(ctx.args[0], client.meta) + "?dest=serviceworker";
            if (ctx.args[1] && ctx.args[1].type === "module") {
                url += "&type=module";
            }
            const nativeSharedWorker = client.natives["SharedWorker"];
            const worker = new nativeSharedWorker(url);
            const handle = worker.port;
            realPostMessage.call(client.serviceWorker.controller, {
                scramjet$type: "registerServiceWorker",
                port: handle,
                origin: client.url.origin
            }, [
                handle
            ]);
            const fakeRegistration = new Proxy({
                __proto__: ServiceWorkerRegistration.prototype
            }, {
                get (target, prop) {
                    if (prop === "installing") {
                        return null;
                    }
                    if (prop === "waiting") {
                        return null;
                    }
                    if (prop === "active") {
                        return handle;
                    }
                    if (prop === "scope") {
                        return ctx.args[0];
                    }
                    if (prop === "unregister") {
                        return ()=>{};
                    }
                    if (prop === "addEventListener") {
                        return ()=>{};
                    }
                    return Reflect.get(target, prop);
                },
                getOwnPropertyDescriptor: _helpers__WEBPACK_IMPORTED_MODULE_1__.getOwnPropertyDescriptorHandler
            });
            registration = fakeRegistration;
            ctx.return(new Promise((resolve)=>resolve(fakeRegistration)));
        }
    });
}


}),
"./src/client/dom/storage.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client, self) {
    const handler = {
        get (target, prop) {
            switch(prop){
                case "getItem":
                    return (key)=>{
                        return target.getItem(client.url.host + "@" + key);
                    };
                case "setItem":
                    return (key, value)=>{
                        return target.setItem(client.url.host + "@" + key, value);
                    };
                case "removeItem":
                    return (key)=>{
                        return target.removeItem(client.url.host + "@" + key);
                    };
                case "clear":
                    return ()=>{
                        for(const key in Object.keys(target)){
                            if (key.startsWith(client.url.host)) {
                                target.removeItem(key);
                            }
                        }
                    };
                case "key":
                    return (index)=>{
                        const keys = Object.keys(target).filter((key)=>key.startsWith(client.url.host));
                        return target.getItem(keys[index]);
                    };
                case "length":
                    return Object.keys(target).filter((key)=>key.startsWith(client.url.host)).length;
                default:
                    if (prop in Object.prototype || typeof prop === "symbol") {
                        return Reflect.get(target, prop);
                    }
                    console.log("GET", prop, target == realLocalStorage);
                    return target.getItem(client.url.host + "@" + prop);
            }
        },
        set (target, prop, value) {
            if (target == realLocalStorage) console.log("SET", prop, value, target === realLocalStorage);
            target.setItem(client.url.host + "@" + prop, value);
            return true;
        },
        ownKeys (target) {
            return Reflect.ownKeys(target).filter((f)=>typeof f === "string" && f.startsWith(client.url.host)).map((f)=>typeof f === "string" ? f.substring(client.url.host.length + 1) : f);
        },
        getOwnPropertyDescriptor (target, property) {
            return {
                value: target.getItem(client.url.host + "@" + property),
                enumerable: true,
                configurable: true,
                writable: true
            };
        },
        defineProperty (target, property, attributes) {
            target.setItem(client.url.host + "@" + property, attributes.value);
            return true;
        }
    };
    const realLocalStorage = self.localStorage;
    const localStorageProxy = new Proxy(self.localStorage, handler);
    const sessionStorageProxy = new Proxy(self.sessionStorage, handler);
    delete self.localStorage;
    delete self.sessionStorage;
    self.localStorage = localStorageProxy;
    self.sessionStorage = sessionStorageProxy;
}


}),
"./src/client/events.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  NavigateEvent: function() { return NavigateEvent; },
  ScramjetContextInit: function() { return ScramjetContextInit; },
  UrlChangeEvent: function() { return UrlChangeEvent; }
});
class NavigateEvent extends Event {
    url;
    constructor(url){
        super("navigate"), this.url = url;
    }
}
class UrlChangeEvent extends Event {
    url;
    constructor(url){
        super("urlchange"), this.url = url;
    }
}
class ScramjetContextInit extends Event {
    window;
    constructor(window){
        super("contextInit"), this.window = window;
    }
}


}),
"./src/client/global.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  UNSAFE_GLOBALS: function() { return UNSAFE_GLOBALS; },
  createGlobalProxy: function() { return createGlobalProxy; }
});
/* ESM import */var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/client/index.ts");
/* ESM import */var _symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbols */ "./src/symbols.ts");
/* ESM import */var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client */ "./src/client/client.ts");
/* ESM import */var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./src/client/helpers.ts");
// import { encodeUrl } from "../shared";



// import { config } from "../shared";

const UNSAFE_GLOBALS = [
    "window",
    "self",
    "globalThis",
    "this",
    "parent",
    "top",
    "location",
    "document",
    "eval",
    "frames"
];
function createGlobalProxy(client, self) {
    return new Proxy(self, {
        get (target, prop) {
            const value = Reflect.get(target, prop);
            if (___WEBPACK_IMPORTED_MODULE_0__.iswindow && (typeof prop === "string" || typeof prop === "number") && !isNaN(Number(prop)) && value) {
                const win = value.self;
                // indexing into window gives you the contentWindow of the subframes for some reason
                // you can't *set* it so this should always be the right value
                if (win) {
                    if (_symbols__WEBPACK_IMPORTED_MODULE_1__.SCRAMJETCLIENT in win) {
                        // then we've already hooked this frame and we can just send over its proxy
                        return win[_symbols__WEBPACK_IMPORTED_MODULE_1__.SCRAMJETCLIENT].globalProxy;
                    } else {
                        // this can happen if it's an about:blank iframe that we've never gotten the chance to inject into
                        // just make a new client for it and inject
                        const newclient = new _client__WEBPACK_IMPORTED_MODULE_2__.ScramjetClient(win);
                        newclient.hook();
                        return newclient.globalProxy;
                    }
                }
            }
            if (prop === "$scramjet") return undefined;
            if (typeof prop === "string" && UNSAFE_GLOBALS.includes(prop)) return client.wrapfn(value);
            return value;
        },
        set (target, prop, value) {
            if (prop === "location") {
                client.url = value;
                return;
            }
            return Reflect.set(target, prop, value);
        },
        has (target, prop) {
            if (prop === "$scramjet") return false;
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            return Reflect.ownKeys(target).filter((key)=>key !== "$scramjet");
        },
        defineProperty (target, property, attributes) {
            if (!attributes.get && !attributes.set) {
                attributes.writable = true;
            }
            attributes.configurable = true;
            return Reflect.defineProperty(target, property, attributes);
        },
        getOwnPropertyDescriptor: _helpers__WEBPACK_IMPORTED_MODULE_3__.getOwnPropertyDescriptorHandler
    });
}


}),
"./src/client/helpers.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getOwnPropertyDescriptorHandler: function() { return getOwnPropertyDescriptorHandler; }
});
function getOwnPropertyDescriptorHandler(target, prop) {
    const realDescriptor = Reflect.getOwnPropertyDescriptor(target, prop);
    return realDescriptor;
// const d: PropertyDescriptor = {};
// if (realDescriptor.enumerable !== undefined)
// 	d.enumerable = realDescriptor.enumerable;
// if (realDescriptor.configurable !== undefined)
// 	d.configurable = realDescriptor.configurable;
// if (realDescriptor.writable !== undefined)
// 	d.writable = realDescriptor.writable;
// if (realDescriptor.get) {
// 	d.get = () => this.get(target, prop);
// }
// if (realDescriptor.set) {
// 	d.set = (value) => this.set(target, prop, value);
// }
// if (realDescriptor.value) {
// 	d.value = this.get(target, prop);
// }
// return d;
}


}),
"./src/client/index.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  isdedicated: function() { return isdedicated; },
  isemulatedsw: function() { return isemulatedsw; },
  isshared: function() { return isshared; },
  issw: function() { return issw; },
  iswindow: function() { return iswindow; },
  isworker: function() { return isworker; }
});
/* ESM import */var _scramjet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scramjet */ "./src/scramjet.ts");
/* ESM import */var _symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbols */ "./src/symbols.ts");
/* ESM import */var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client */ "./src/client/client.ts");
/* ESM import */var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events */ "./src/client/events.ts");
/* ESM import */var _swruntime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./swruntime */ "./src/client/swruntime.ts");
/* provided dependency */ var dbg = __webpack_require__(/*! ./src/log.ts */ "./src/log.ts")["default"];
// entrypoint for scramjet.client.js





const iswindow = "window" in self;
const isworker = "WorkerGlobalScope" in self;
const issw = "ServiceWorkerGlobalScope" in self;
const isdedicated = "DedicatedWorkerGlobalScope" in self;
const isshared = "SharedWorkerGlobalScope" in self;
const isemulatedsw = new URL(self.location.href).searchParams.get("dest") === "serviceworker";
dbg.log("scrammin");
// if it already exists, that means the handlers have probably already been setup by the parent document
if (!(_symbols__WEBPACK_IMPORTED_MODULE_1__.SCRAMJETCLIENT in self)) {
    (0,_scramjet__WEBPACK_IMPORTED_MODULE_0__.loadCodecs)();
    const client = new _client__WEBPACK_IMPORTED_MODULE_2__.ScramjetClient(self);
    if (self.COOKIE) client.loadcookies(self.COOKIE);
    client.hook();
    if (isemulatedsw) {
        const runtime = new _swruntime__WEBPACK_IMPORTED_MODULE_4__.ScramjetServiceWorkerRuntime(client);
        runtime.hook();
    }
    const ev = new _events__WEBPACK_IMPORTED_MODULE_3__.ScramjetContextInit(client.global.window);
    client.frame?.dispatchEvent(ev);
}
if ("document" in self && document?.currentScript) {
    document.currentScript.remove();
}


}),
"./src/client/location.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createLocationProxy: function() { return createLocationProxy; }
});
/* ESM import */var _natives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./natives */ "./src/client/natives.ts");
/* ESM import */var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared */ "./src/shared.ts");
/* ESM import */var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ "./src/client/events.ts");
/* ESM import */var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/client/index.ts");
// @ts-nocheck




function createLocationProxy(client, self) {
    const Location = ___WEBPACK_IMPORTED_MODULE_3__.iswindow ? self.Location : self.WorkerLocation;
    // location cannot be Proxy()d
    const fakeLocation = {};
    Object.setPrototypeOf(fakeLocation, Location.prototype);
    fakeLocation.constructor = Location;
    // for some reason it's on the object for Location and on the prototype for WorkerLocation??
    const descriptorSource = ___WEBPACK_IMPORTED_MODULE_3__.iswindow ? self.location : Location.prototype;
    const urlprops = [
        "protocol",
        "hash",
        "host",
        "hostname",
        "href",
        "origin",
        "pathname",
        "port",
        "search"
    ];
    for (const prop of urlprops){
        const native = (0,_natives__WEBPACK_IMPORTED_MODULE_0__.nativeGetOwnPropertyDescriptor)(descriptorSource, prop);
        if (!native) continue;
        const desc = {
            configurable: true,
            enumerable: true
        };
        if (native.get) {
            desc.get = new Proxy(native.get, {
                apply () {
                    return client.url[prop];
                }
            });
        }
        if (native.set) {
            desc.set = new Proxy(native.set, {
                apply (target, thisArg, args) {
                    if (prop === "href") {
                        // special case
                        client.url = args[0];
                        return;
                    }
                    if (prop === "hash") {
                        self.location.hash = args[0];
                        const ev = new _events__WEBPACK_IMPORTED_MODULE_2__.UrlChangeEvent(client.url.href);
                        if (client.frame) client.frame.dispatchEvent(ev);
                        return;
                    }
                    const url = new URL(client.url.href);
                    url[prop] = args[0];
                    client.url = url;
                }
            });
        }
        Object.defineProperty(fakeLocation, prop, desc);
    }
    // functions
    fakeLocation.toString = new Proxy(self.location.toString, {
        apply () {
            return client.url.href;
        }
    });
    if (self.location.valueOf) fakeLocation.valueOf = new Proxy(self.location.valueOf, {
        apply () {
            return client.url.href;
        }
    });
    if (self.location.assign) fakeLocation.assign = new Proxy(self.location.assign, {
        apply (target, thisArg, args) {
            args[0] = (0,_shared__WEBPACK_IMPORTED_MODULE_1__.rewriteUrl)(args[0], client.meta);
            Reflect.apply(target, self.location, args);
        }
    });
    if (self.location.reload) fakeLocation.reload = new Proxy(self.location.reload, {
        apply (target, thisArg, args) {
            Reflect.apply(target, self.location, args);
        }
    });
    if (self.location.replace) fakeLocation.replace = new Proxy(self.location.replace, {
        apply (target, thisArg, args) {
            args[0] = (0,_shared__WEBPACK_IMPORTED_MODULE_1__.rewriteUrl)(args[0], client.meta);
            Reflect.apply(target, self.location, args);
        }
    });
    return fakeLocation;
}


}),
"./src/client/natives.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  nativeFunction: function() { return nativeFunction; },
  nativeGetOwnPropertyDescriptor: function() { return nativeGetOwnPropertyDescriptor; }
});
const nativeFunction = self.Function;
const nativeGetOwnPropertyDescriptor = self.Object.getOwnPropertyDescriptor;


}),
"./src/client/shared/antiantidebugger.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client) {
    client.Proxy("console.clear", {
        apply (ctx) {
            // fuck you
            ctx.return(undefined);
        }
    });
    const log = console.log;
    client.Trap("console.log", {
        set (_ctx, _v) {
        // is there a legitimate reason to let sites do this?
        },
        get (_ctx) {
            return log;
        }
    });
}


}),
"./src/client/shared/blob.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM import */var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared */ "./src/shared.ts");

/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client) {
    // hide the origin from object urls from the page
    client.Proxy("URL.createObjectURL", {
        apply (ctx) {
            const url = ctx.call();
            if (url.startsWith("blob:")) {
                ctx.return((0,_shared__WEBPACK_IMPORTED_MODULE_0__.rewriteBlob)(url, client.meta));
            } else {
                ctx.return(url);
            }
        }
    });
    client.Proxy("URL.revokeObjectURL", {
        apply (ctx) {
            ctx.args[0] = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.unrewriteBlob)(ctx.args[0]);
        }
    });
}


}),
"./src/client/shared/caches.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM import */var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared */ "./src/shared.ts");

/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client, _self) {
    client.Proxy("CacheStorage.prototype.open", {
        apply (ctx) {
            ctx.args[0] = `${client.url.origin}@${ctx.args[0]}`;
        }
    });
    client.Proxy("CacheStorage.prototype.has", {
        apply (ctx) {
            ctx.args[0] = `${client.url.origin}@${ctx.args[0]}`;
        }
    });
    client.Proxy("CacheStorage.prototype.match", {
        apply (ctx) {
            if (typeof ctx.args[0] === "string" || ctx.args[0] instanceof URL) {
                ctx.args[0] = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.rewriteUrl)(ctx.args[0], client.meta);
            }
        }
    });
    client.Proxy("CacheStorage.prototype.delete", {
        apply (ctx) {
            ctx.args[0] = `${client.url.origin}@${ctx.args[0]}`;
        }
    });
    client.Proxy("Cache.prototype.add", {
        apply (ctx) {
            if (typeof ctx.args[0] === "string" || ctx.args[0] instanceof URL) {
                ctx.args[0] = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.rewriteUrl)(ctx.args[0], client.meta);
            }
        }
    });
    client.Proxy("Cache.prototype.addAll", {
        apply (ctx) {
            for(let i = 0; i < ctx.args[0].length; i++){
                if (typeof ctx.args[0][i] === "string" || ctx.args[0][i] instanceof URL) {
                    ctx.args[0][i] = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.rewriteUrl)(ctx.args[0][i], client.meta);
                }
            }
        }
    });
    client.Proxy("Cache.prototype.put", {
        apply (ctx) {
            if (typeof ctx.args[0] === "string" || ctx.args[0] instanceof URL) {
                ctx.args[0] = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.rewriteUrl)(ctx.args[0], client.meta);
            }
        }
    });
    client.Proxy("Cache.prototype.match", {
        apply (ctx) {
            if (typeof ctx.args[0] === "string" || ctx.args[0] instanceof URL) {
                ctx.args[0] = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.rewriteUrl)(ctx.args[0], client.meta);
            }
        }
    });
    client.Proxy("Cache.prototype.matchAll", {
        apply (ctx) {
            if (ctx.args[0] && typeof ctx.args[0] === "string" || ctx.args[0] && ctx.args[0] instanceof URL) {
                ctx.args[0] = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.rewriteUrl)(ctx.args[0], client.meta);
            }
        }
    });
    client.Proxy("Cache.prototype.keys", {
        apply (ctx) {
            if (ctx.args[0] && typeof ctx.args[0] === "string" || ctx.args[0] && ctx.args[0] instanceof URL) {
                ctx.args[0] = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.rewriteUrl)(ctx.args[0], client.meta);
            }
        }
    });
    client.Proxy("Cache.prototype.delete", {
        apply (ctx) {
            if (typeof ctx.args[0] === "string" || ctx.args[0] instanceof URL) {
                ctx.args[0] = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.rewriteUrl)(ctx.args[0], client.meta);
            }
        }
    });
}


}),
"./src/client/shared/err.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  argdbg: function() { return argdbg; },
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; },
  enabled: function() { return enabled; }
});
/* ESM import */var _scramjet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scramjet */ "./src/scramjet.ts");

const enabled = (client)=>(0,_scramjet__WEBPACK_IMPORTED_MODULE_0__.flagEnabled)("captureErrors", client.url);
function argdbg(arg, recurse = []) {
    switch(typeof arg){
        case "string":
            break;
        case "object":
            if (arg && arg[Symbol.iterator] && typeof arg[Symbol.iterator] === "function") for(const prop in arg){
                // make sure it's not a getter
                const desc = Object.getOwnPropertyDescriptor(arg, prop);
                if (desc && desc.get) continue;
                const ar = arg[prop];
                if (recurse.includes(ar)) continue;
                recurse.push(ar);
                argdbg(ar, recurse);
            }
            break;
    }
}
/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client, self) {
    self.$scramerr = function scramerr(e) {
        console.warn("CAUGHT ERROR", e);
    };
    self.$scramdbg = function scramdbg(args, t) {
        if (args && typeof args === "object" && args.length > 0) argdbg(args);
        argdbg(t);
        return t;
    };
    client.Proxy("Promise.prototype.catch", {
        apply (ctx) {
            if (ctx.args[0]) ctx.args[0] = new Proxy(ctx.args[0], {
                apply (target, thisArg, argArray) {
                    // console.warn("CAUGHT PROMISE REJECTION", argArray);
                    Reflect.apply(target, thisArg, argArray);
                }
            });
        }
    });
}


}),
"./src/client/shared/error.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; },
  enabled: function() { return enabled; }
});
/* ESM import */var _scramjet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scramjet */ "./src/scramjet.ts");
/* ESM import */var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared */ "./src/shared.ts");


const enabled = (client)=>(0,_scramjet__WEBPACK_IMPORTED_MODULE_0__.flagEnabled)("cleanerrors", client.url);
/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client, _self) {
    // v8 only. all we need to do is clean the scramjet urls from stack traces
    const closure = (error, stack)=>{
        let newstack = error.stack;
        for(let i = 0; i < stack.length; i++){
            const url = stack[i].getFileName();
            if (url.endsWith(_shared__WEBPACK_IMPORTED_MODULE_1__.config.files.client)) {
                // strip stack frames including scramjet handlers from the trace
                const lines = newstack.split("\n");
                const line = lines.find((l)=>l.includes(url));
                lines.splice(line, 1);
                newstack = lines.join("\n");
                continue;
            }
            try {
                newstack = newstack.replaceAll(url, (0,_shared__WEBPACK_IMPORTED_MODULE_1__.unrewriteUrl)(url));
            } catch  {}
        }
        return newstack;
    };
    client.Trap("Error.prepareStackTrace", {
        get (_ctx) {
            // this is a funny js quirk. the getter is ran every time you type something in console
            return closure;
        },
        set (_value) {
        // just ignore it if a site tries setting their own. not much we can really do
        }
    });
}


}),
"./src/client/shared/eval.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; },
  indirectEval: function() { return indirectEval; }
});
/* ESM import */var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared */ "./src/shared.ts");

/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client, self) {
    // used for proxying *direct eval*
    // eval("...") -> eval($scramjet$rewrite("..."))
    Object.defineProperty(self, _shared__WEBPACK_IMPORTED_MODULE_0__.config.globals.rewritefn, {
        value: function(js) {
            if (typeof js !== "string") return js;
            const rewritten = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.rewriteJs)(js, null, client.meta);
            return rewritten;
        },
        writable: false,
        configurable: false
    });
}
function indirectEval(js) {
    // > If the argument of eval() is not a string, eval() returns the argument unchanged
    if (typeof js !== "string") return js;
    const indirection = this.global.eval;
    return indirection((0,_shared__WEBPACK_IMPORTED_MODULE_0__.rewriteJs)(js, null, this.meta));
}


}),
"./src/client/shared/event.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM import */var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/client/index.ts");
/* ESM import */var _symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../symbols */ "./src/symbols.ts");
/* ESM import */var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/client/helpers.ts");
/* ESM import */var _natives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../natives */ "./src/client/natives.ts");
/* ESM import */var _unproxy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unproxy */ "./src/client/shared/unproxy.ts");





const realOnEvent = Symbol.for("scramjet original onevent function");
/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client, self) {
    const handlers = {
        message: {
            _init () {
                if (typeof this.data === "object" && "$scramjet$type" in this.data) {
                    // this is a ctl message
                    return false;
                }
                return true;
            },
            ports () {
                // don't know why i have to do this?
                return this.ports;
            },
            source () {
                if (this.source === null) return null;
                const scram = this.source[_symbols__WEBPACK_IMPORTED_MODULE_1__.SCRAMJETCLIENT];
                if (scram) return scram.globalProxy;
                return this.source;
            },
            origin () {
                if (typeof this.data === "object" && "$scramjet$origin" in this.data) return this.data.$scramjet$origin;
                return client.url.origin;
            },
            data () {
                if (typeof this.data === "object" && "$scramjet$data" in this.data) return this.data.$scramjet$data;
                return this.data;
            }
        }
    };
    // TODO! window.event not proxied
    function wraplistener(listener) {
        return new Proxy(listener, {
            apply (target, thisArg, argArray) {
                const realEvent = argArray[0];
                // we only need to handle events dispatched from the browser
                if (realEvent.isTrusted) {
                    const type = realEvent.type;
                    if (type in handlers) {
                        const handler = handlers[type];
                        if (handler._init) {
                            if (handler._init.call(realEvent) === false) return;
                        }
                        argArray[0] = new Proxy(realEvent, {
                            get (_target, prop, reciever) {
                                if (prop in handler) {
                                    return handler[prop].call(_target);
                                }
                                return Reflect.get(target, prop, reciever);
                            },
                            getOwnPropertyDescriptor: _helpers__WEBPACK_IMPORTED_MODULE_2__.getOwnPropertyDescriptorHandler
                        });
                    }
                }
                if (!self.event) {
                    Object.defineProperty(self, "event", {
                        get () {
                            return argArray[0];
                        },
                        configurable: true
                    });
                }
                const rv = Reflect.apply(target, thisArg, argArray);
                return rv;
            },
            getOwnPropertyDescriptor: _helpers__WEBPACK_IMPORTED_MODULE_2__.getOwnPropertyDescriptorHandler
        });
    }
    client.Proxy("EventTarget.prototype.addEventListener", {
        apply (ctx) {
            (0,_unproxy__WEBPACK_IMPORTED_MODULE_4__.unproxy)(ctx, client);
            if (typeof ctx.args[1] !== "function") return;
            const origlistener = ctx.args[1];
            const proxylistener = wraplistener(origlistener);
            ctx.args[1] = proxylistener;
            let arr = client.eventcallbacks.get(ctx.this);
            arr ||= [];
            arr.push({
                event: ctx.args[0],
                originalCallback: origlistener,
                proxiedCallback: proxylistener
            });
            client.eventcallbacks.set(ctx.this, arr);
        }
    });
    client.Proxy("EventTarget.prototype.removeEventListener", {
        apply (ctx) {
            (0,_unproxy__WEBPACK_IMPORTED_MODULE_4__.unproxy)(ctx, client);
            if (typeof ctx.args[1] !== "function") return;
            const arr = client.eventcallbacks.get(ctx.this);
            if (!arr) return;
            const i = arr.findIndex((e)=>e.event === ctx.args[0] && e.originalCallback === ctx.args[1]);
            if (i === -1) return;
            const r = arr.splice(i, 1);
            client.eventcallbacks.set(ctx.this, arr);
            ctx.args[1] = r[0].proxiedCallback;
        }
    });
    client.Proxy("EventTarget.prototype.dispatchEvent", {
        apply (ctx) {
            (0,_unproxy__WEBPACK_IMPORTED_MODULE_4__.unproxy)(ctx, client);
        }
    });
    const targets = [
        self.self,
        self.MessagePort.prototype
    ];
    if (___WEBPACK_IMPORTED_MODULE_0__.iswindow) targets.push(self.HTMLElement.prototype);
    if (self.Worker) targets.push(self.Worker.prototype);
    for (const target of targets){
        const keys = Reflect.ownKeys(target);
        for (const key of keys){
            if (typeof key === "string" && key.startsWith("on") && handlers[key.slice(2)]) {
                const descriptor = (0,_natives__WEBPACK_IMPORTED_MODULE_3__.nativeGetOwnPropertyDescriptor)(target, key);
                if (!descriptor.get || !descriptor.set || !descriptor.configurable) continue;
                // these are the `onmessage`, `onclick`, etc. properties
                client.RawTrap(target, key, {
                    get (ctx) {
                        if (this[realOnEvent]) return this[realOnEvent];
                        return ctx.get();
                    },
                    set (ctx, value) {
                        this[realOnEvent] = value;
                        if (typeof value !== "function") return ctx.set(value);
                        ctx.set(wraplistener(value));
                    }
                });
            }
        }
    }
}


}),
"./src/client/shared/function.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM import */var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared */ "./src/shared.ts");

function rewriteFunction(ctx, client) {
    const stringifiedFunction = ctx.call().toString();
    const content = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.rewriteJs)(`return ${stringifiedFunction}`, null, client.meta);
    ctx.return(ctx.fn(content)());
}
/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client, _self) {
    const handler = {
        apply (ctx) {
            rewriteFunction(ctx, client);
        },
        construct (ctx) {
            rewriteFunction(ctx, client);
        }
    };
    client.Proxy("Function", handler);
    // god i love javascript
    client.RawProxy((function() {}).constructor.prototype, "constructor", handler);
    client.RawProxy((async function() {}).constructor.prototype, "constructor", handler);
    client.RawProxy((function*() {}).constructor.prototype, "constructor", handler);
    client.RawProxy((async function*() {}).constructor.prototype, "constructor", handler);
}


}),
"./src/client/shared/import.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM import */var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared */ "./src/shared.ts");
/* ESM import */var _shared_rewriters_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/rewriters/url */ "./src/shared/rewriters/url.ts");


/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client, self) {
    const Function = client.natives["Function"];
    self[_shared__WEBPACK_IMPORTED_MODULE_0__.config.globals.importfn] = function(base) {
        return function(url) {
            const resolved = new URL(url, base).href;
            return Function(`return import("${(0,_shared_rewriters_url__WEBPACK_IMPORTED_MODULE_1__.rewriteUrl)(resolved, client.meta)}")`)();
        };
    };
    self[_shared__WEBPACK_IMPORTED_MODULE_0__.config.globals.metafn] = function(base) {
        return {
            url: base,
            resolve: function(url) {
                return new URL(url, base).href;
            }
        };
    };
}


}),
"./src/client/shared/indexeddb.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client) {
    client.Proxy("IDBFactory.prototype.open", {
        apply (ctx) {
            ctx.args[0] = `${client.url.origin}@${ctx.args[0]}`;
        }
    });
    client.Trap("IDBDatabase.prototype.name", {
        get (ctx) {
            const name = ctx.get();
            return name.substring(name.indexOf("@") + 1);
        }
    });
}


}),
"./src/client/shared/postmessage.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM import */var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/client/index.ts");
/* ESM import */var _symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../symbols */ "./src/symbols.ts");
/* ESM import */var _shared_realm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/realm */ "./src/client/shared/realm.ts");



/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client) {
    if (___WEBPACK_IMPORTED_MODULE_0__.iswindow) client.Proxy("window.postMessage", {
        apply (ctx) {
            // so we need to send the real origin here, since the recieving window can't possibly know.
            // except, remember that this code is being ran in a different realm than the invoker, so if we ask our `client` it may give us the wrong origin
            // if we were given any object that came from the real realm we can use that to get the real origin
            // and this works in every case EXCEPT for the fact that all three arguments can be strings which are copied instead of cloned
            // so we have to use `$setrealm` which will pollute this with an object from the real realm
            let pollutant;
            if (typeof ctx.args[0] === "object" && ctx.args[0] !== null) {
                pollutant = ctx.args[0]; // try to use the first object we can find because it's more reliable
            } else if (typeof ctx.args[2] === "object" && ctx.args[2] !== null) {
                pollutant = ctx.args[2]; // next try to use transfer
            } else if (ctx.this && _shared_realm__WEBPACK_IMPORTED_MODULE_2__.POLLUTANT in ctx.this && typeof ctx.this[_shared_realm__WEBPACK_IMPORTED_MODULE_2__.POLLUTANT] === "object" && ctx.this[_shared_realm__WEBPACK_IMPORTED_MODULE_2__.POLLUTANT] !== null) {
                pollutant = ctx.this[_shared_realm__WEBPACK_IMPORTED_MODULE_2__.POLLUTANT]; // lastly try to use the object from $setrealm
            } else {
                pollutant = {}; // give up
            }
            // and now we can steal Function from the caller's realm
            const { constructor: { constructor: Function } } = pollutant;
            // invoking stolen function will give us the caller's globalThis, remember scramjet has already proxied it!!!
            const callerGlobalThisProxied = Function("return globalThis")();
            const callerClient = callerGlobalThisProxied[_symbols__WEBPACK_IMPORTED_MODULE_1__.SCRAMJETCLIENT];
            // this WOULD be enough but the source argument of MessageEvent has to return the caller's window
            // and if we just call it normally it would be coming from here, which WILL NOT BE THE CALLER'S because the accessor is from the parent
            // so with the stolen function we wrap postmessage so the source will truly be the caller's window (remember that function is scramjet's!!!)
            const wrappedPostMessage = Function("...args", "this(...args)");
            ctx.args[0] = {
                $scramjet$messagetype: "window",
                $scramjet$origin: callerClient.url.origin,
                $scramjet$data: ctx.args[0]
            };
            // * origin because obviously
            if (typeof ctx.args[1] === "string") ctx.args[1] = "*";
            if (typeof ctx.args[1] === "object") ctx.args[1].targetOrigin = "*";
            ctx.return(wrappedPostMessage.call(ctx.fn, ...ctx.args));
        }
    });
    const toproxy = [
        "MessagePort.prototype.postMessage"
    ];
    if (self.Worker) toproxy.push("Worker.prototype.postMessage");
    if (!___WEBPACK_IMPORTED_MODULE_0__.iswindow) toproxy.push("self.postMessage"); // only do the generic version if we're in a worker
    client.Proxy(toproxy, {
        apply (ctx) {
            // origin/source doesn't need to be preserved - it's null in the message event
            ctx.args[0] = {
                $scramjet$messagetype: "worker",
                $scramjet$data: ctx.args[0]
            };
        }
    });
}


}),
"./src/client/shared/realm.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  POLLUTANT: function() { return POLLUTANT; },
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM import */var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared */ "./src/shared.ts");

const POLLUTANT = Symbol.for("scramjet realm pollutant");
/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client, self) {
    // object.$setrealm({}).postMessage(...)
    // the empty object is the "pollutant" which can reconstruct the real realm
    // i explain more in postmessage.ts
    Object.defineProperty(self.Object.prototype, _shared__WEBPACK_IMPORTED_MODULE_0__.config.globals.setrealmfn, {
        value (pollution) {
            // this is bad!! sites could detect this
            Object.defineProperty(this, POLLUTANT, {
                value: pollution,
                writable: false,
                configurable: true,
                enumerable: false
            });
            return this;
        },
        writable: true,
        configurable: true,
        enumerable: false
    });
}


}),
"./src/client/shared/requests/eventsource.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM import */var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared */ "./src/shared.ts");

/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client) {
    client.Proxy("EventSource", {
        construct (ctx) {
            ctx.args[0] = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.rewriteUrl)(ctx.args[0], client.meta);
        }
    });
    client.Trap("EventSource.prototype.url", {
        get (ctx) {
            (0,_shared__WEBPACK_IMPORTED_MODULE_0__.unrewriteUrl)(ctx.get());
        }
    });
}


}),
"./src/client/shared/requests/fetch.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM import */var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./src/client/index.ts");
/* ESM import */var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared */ "./src/shared.ts");
// ts throws an error if you dont do window.fetch



/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client, _self) {
    client.Proxy("fetch", {
        apply (ctx) {
            if (typeof ctx.args[0] === "string" || ctx.args[0] instanceof URL) {
                ctx.args[0] = (0,_shared__WEBPACK_IMPORTED_MODULE_1__.rewriteUrl)(ctx.args[0], client.meta);
                if (___WEBPACK_IMPORTED_MODULE_0__.isemulatedsw) ctx.args[0] += "?from=swruntime";
            }
        }
    });
    client.Proxy("Request", {
        construct (ctx) {
            if (typeof ctx.args[0] === "string" || ctx.args[0] instanceof URL) {
                ctx.args[0] = (0,_shared__WEBPACK_IMPORTED_MODULE_1__.rewriteUrl)(ctx.args[0], client.meta);
                if (___WEBPACK_IMPORTED_MODULE_0__.isemulatedsw) ctx.args[0] += "?from=swruntime";
            }
        }
    });
    client.Trap("Response.prototype.url", {
        get (ctx) {
            return (0,_shared__WEBPACK_IMPORTED_MODULE_1__.unrewriteUrl)(ctx.get());
        }
    });
    client.Trap("Request.prototype.url", {
        get (ctx) {
            return (0,_shared__WEBPACK_IMPORTED_MODULE_1__.unrewriteUrl)(ctx.get());
        }
    });
}


}),
"./src/client/shared/requests/websocket.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client, self) {
    const socketmap = new WeakMap();
    client.Proxy("WebSocket", {
        construct (ctx) {
            const fakeWebSocket = new EventTarget();
            Object.setPrototypeOf(fakeWebSocket, ctx.fn.prototype);
            fakeWebSocket.constructor = ctx.fn;
            const trustEvent = (ev)=>new Proxy(ev, {
                    get (target, prop) {
                        if (prop === "isTrusted") return true;
                        return Reflect.get(target, prop);
                    }
                });
            const barews = client.bare.createWebSocket(ctx.args[0], ctx.args[1], null, {
                "User-Agent": self.navigator.userAgent,
                Origin: client.url.origin
            });
            const state = {
                extensions: "",
                protocol: "",
                url: ctx.args[0],
                binaryType: "blob",
                barews,
                /*
				captureListeners: {},
				listeners: {},
				*/ onclose: null,
                onerror: null,
                onmessage: null,
                onopen: null
            };
            function fakeEventSend(fakeev) {
                state["on" + fakeev.type]?.(trustEvent(fakeev));
                fakeWebSocket.dispatchEvent(fakeev);
            }
            barews.addEventListener("open", ()=>{
                fakeEventSend(new Event("open"));
            });
            barews.addEventListener("close", (ev)=>{
                fakeEventSend(new CloseEvent("close", ev));
            });
            barews.addEventListener("message", async (ev)=>{
                let payload = ev.data;
                if (typeof payload === "string") {
                // DO NOTHING
                } else if ("byteLength" in payload) {
                    // arraybuffer, convert to blob if needed or set the proper prototype
                    if (state.binaryType === "blob") {
                        payload = new Blob([
                            payload
                        ]);
                    } else {
                        Object.setPrototypeOf(payload, ArrayBuffer.prototype);
                    }
                } else if ("arrayBuffer" in payload) {
                    // blob, convert to arraybuffer if neccesary.
                    if (state.binaryType === "arraybuffer") {
                        payload = await payload.arrayBuffer();
                        Object.setPrototypeOf(payload, ArrayBuffer.prototype);
                    }
                }
                const fakeev = new MessageEvent("message", {
                    data: payload,
                    origin: ev.origin,
                    lastEventId: ev.lastEventId,
                    source: ev.source,
                    ports: ev.ports
                });
                fakeEventSend(fakeev);
            });
            barews.addEventListener("error", ()=>{
                fakeEventSend(new Event("error"));
            });
            socketmap.set(fakeWebSocket, state);
            ctx.return(fakeWebSocket);
        }
    });
    // i have no clue why this is here but it prevents the real event listener from ever happening so im commenting it out for now
    /*
	client.Proxy("EventTarget.prototype.addEventListener", {
		apply(ctx) {
			const ws = socketmap.get(ctx.this);
			if (!ws) return; // it's not a websocket ignore it

			const [type, listener, opts] = ctx.args;

			if (
				(typeof opts === "object" && opts.capture) ||
				(typeof opts === "boolean" && opts)
			) {
				const listeners = (ws.captureListeners[type] ??= []);
				listeners.push(listener);
				ws.captureListeners[type] = listeners;
			} else {
				const listeners = (ws.listeners[type] ??= []);
				listeners.push(listener);
				ws.listeners[type] = listeners;
			}

			ctx.return(undefined);
		},
	});

	client.Proxy("EventTarget.prototype.removeEventListener", {
		apply(ctx) {
			const ws = socketmap.get(ctx.this);
			if (!ws) return;

			const [type, listener, opts] = ctx.args;

			if (
				(typeof opts === "object" && opts.capture) ||
				(typeof opts === "boolean" && opts)
			) {
				const listeners = (ws.captureListeners[type] ??= []);
				const idx = listeners.indexOf(listener);
				if (idx !== -1) listeners.splice(idx, 1);
				ws.captureListeners[type] = listeners;
			} else {
				const listeners = (ws.listeners[type] ??= []);
				const idx = listeners.indexOf(listener);
				if (idx !== -1) listeners.splice(idx, 1);
				ws.listeners[type] = listeners;
			}

			ctx.return(undefined);
		},
	});
	*/ client.Trap("WebSocket.prototype.binaryType", {
        get (ctx) {
            const ws = socketmap.get(ctx.this);
            return ws.binaryType;
        },
        set (ctx, v) {
            const ws = socketmap.get(ctx.this);
            if (v === "blob" || v === "arraybuffer") ws.binaryType = v;
        }
    });
    client.Trap("WebSocket.prototype.bufferedAmount", {
        get () {
            return 0;
        }
    });
    client.Trap("WebSocket.prototype.extensions", {
        get (ctx) {
            const ws = socketmap.get(ctx.this);
            return ws.extensions;
        }
    });
    client.Trap("WebSocket.prototype.onclose", {
        get (ctx) {
            const ws = socketmap.get(ctx.this);
            return ws.onclose;
        },
        set (ctx, v) {
            const ws = socketmap.get(ctx.this);
            ws.onclose = v;
        }
    });
    client.Trap("WebSocket.prototype.onerror", {
        get (ctx) {
            const ws = socketmap.get(ctx.this);
            return ws.onerror;
        },
        set (ctx, v) {
            const ws = socketmap.get(ctx.this);
            ws.onerror = v;
        }
    });
    client.Trap("WebSocket.prototype.onmessage", {
        get (ctx) {
            const ws = socketmap.get(ctx.this);
            return ws.onmessage;
        },
        set (ctx, v) {
            const ws = socketmap.get(ctx.this);
            ws.onmessage = v;
        }
    });
    client.Trap("WebSocket.prototype.onopen", {
        get (ctx) {
            const ws = socketmap.get(ctx.this);
            return ws.onopen;
        },
        set (ctx, v) {
            const ws = socketmap.get(ctx.this);
            ws.onopen = v;
        }
    });
    client.Trap("WebSocket.prototype.url", {
        get (ctx) {
            const ws = socketmap.get(ctx.this);
            return ws.url;
        }
    });
    client.Trap("WebSocket.prototype.protocol", {
        get (ctx) {
            const ws = socketmap.get(ctx.this);
            return ws.protocol;
        }
    });
    client.Trap("WebSocket.prototype.readyState", {
        get (ctx) {
            const ws = socketmap.get(ctx.this);
            return ws.barews.readyState;
        }
    });
    client.Proxy("WebSocket.prototype.send", {
        apply (ctx) {
            const ws = socketmap.get(ctx.this);
            ctx.return(ws.barews.send(ctx.args[0]));
        }
    });
    client.Proxy("WebSocket.prototype.close", {
        apply (ctx) {
            const ws = socketmap.get(ctx.this);
            if (ctx.args[0] === undefined) ctx.args[0] = 1000;
            if (ctx.args[1] === undefined) ctx.args[1] = "";
            ctx.return(ws.barews.close(ctx.args[0], ctx.args[1]));
        }
    });
}


}),
"./src/client/shared/requests/xmlhttprequest.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM import */var _scramjet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../scramjet */ "./src/scramjet.ts");
/* ESM import */var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared */ "./src/shared.ts");


/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client, self) {
    let worker;
    if (self.Worker && (0,_scramjet__WEBPACK_IMPORTED_MODULE_0__.flagEnabled)("syncxhr", client.url)) {
        worker = new (client.natives["Worker"] ? client.natives["Worker"] : Worker)(_shared__WEBPACK_IMPORTED_MODULE_1__.config.files.sync);
    }
    const ARGS = Symbol("xhr original args");
    const HEADERS = Symbol("xhr headers");
    client.Proxy("XMLHttpRequest.prototype.open", {
        apply (ctx) {
            if (ctx.args[1]) ctx.args[1] = (0,_shared__WEBPACK_IMPORTED_MODULE_1__.rewriteUrl)(ctx.args[1], client.meta);
            if (ctx.args[2] === undefined) ctx.args[2] = true;
            ctx.this[ARGS] = ctx.args;
        }
    });
    client.Proxy("XMLHttpRequest.prototype.setRequestHeader", {
        apply (ctx) {
            const headers = ctx.this[HEADERS] || (ctx.this[HEADERS] = {});
            headers[ctx.args[0]] = ctx.args[1];
        }
    });
    client.Proxy("XMLHttpRequest.prototype.send", {
        apply (ctx) {
            const args = ctx.this[ARGS];
            if (!args || args[2]) return;
            if (!(0,_scramjet__WEBPACK_IMPORTED_MODULE_0__.flagEnabled)("syncxhr", client.url)) {
                console.warn("ignoring request - sync xhr disabled in flags");
                return;
            }
            // it's a sync request
            // sync xhr to service worker is not supported
            // there's a nice way of polyfilling this though, we can spin on an atomic using sharedarraybuffer. this will maintain the sync behavior
            // @ts-expect-error maxbytelength not in types yet i guess
            const sab = new SharedArrayBuffer(1024, {
                maxByteLength: 2147483647
            });
            const view = new DataView(sab);
            client.natives["Worker.prototype.postMessage"].call(worker, {
                sab,
                args,
                headers: ctx.this[HEADERS],
                body: ctx.args[0]
            });
            const now = performance.now();
            while(view.getUint8(0) === 0){
                if (performance.now() - now > 1000) {
                    throw new Error("xhr timeout");
                }
            /* spin */ }
            const status = view.getUint16(1);
            const headersLength = view.getUint32(3);
            const headersab = new Uint8Array(headersLength);
            headersab.set(new Uint8Array(sab.slice(7, 7 + headersLength)));
            const headers = new TextDecoder().decode(headersab);
            const bodyLength = view.getUint32(7 + headersLength);
            const bodyab = new Uint8Array(bodyLength);
            bodyab.set(new Uint8Array(sab.slice(11 + headersLength, 11 + headersLength + bodyLength)));
            const body = new TextDecoder().decode(bodyab);
            // these should be using proxies to not leak scram strings but who cares
            client.RawTrap(ctx.this, "status", {
                get () {
                    return status;
                }
            });
            client.RawTrap(ctx.this, "responseText", {
                get () {
                    return body;
                }
            });
            client.RawTrap(ctx.this, "response", {
                get () {
                    if (ctx.this.responseType === "arraybuffer") return bodyab.buffer;
                    return body;
                }
            });
            client.RawTrap(ctx.this, "responseXML", {
                get () {
                    const parser = new DOMParser();
                    return parser.parseFromString(body, "text/xml");
                }
            });
            client.RawTrap(ctx.this, "getAllResponseHeaders", {
                get () {
                    return ()=>headers;
                }
            });
            client.RawTrap(ctx.this, "getResponseHeader", {
                get () {
                    return (header)=>{
                        const re = new RegExp(`^${header}: (.*)$`, "m");
                        const match = re.exec(headers);
                        return match ? match[1] : null;
                    };
                }
            });
            // send has no return value right
            ctx.return(undefined);
        }
    });
    client.Trap("XMLHttpRequest.prototype.responseURL", {
        get (ctx) {
            return (0,_shared__WEBPACK_IMPORTED_MODULE_1__.unrewriteUrl)(ctx.get());
        }
    });
}


}),
"./src/client/shared/sourcemaps.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; },
  enabled: function() { return enabled; }
});
/* ESM import */var _scramjet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scramjet */ "./src/scramjet.ts");

const sourcemaps = {};
const enabled = (client)=>(0,_scramjet__WEBPACK_IMPORTED_MODULE_0__.flagEnabled)("sourcemaps", client.url);
/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client, self) {
    // every script will push a sourcemap
    Object.defineProperty(self, "$scramjet$pushsourcemap", {
        value: (maps, tag)=>{
            sourcemaps[tag] = maps;
        },
        enumerable: false,
        writable: false,
        configurable: false
    });
    const scramtag_ident = "/*scramtag ";
    // when we rewrite javascript it will make function.toString leak internals
    // this can lead to double rewrites which is bad
    client.Proxy("Function.prototype.toString", {
        apply (ctx) {
            let stringified = ctx.fn.call(ctx.this);
            let newString = "";
            // every function rewritten will have a scramtag comment
            // it will look like this:
            // function name() /*scramtag [index] [tag] */ { ... }
            const scramtagstart = stringified.indexOf("/*s");
            if (scramtagstart === -1) return ctx.return(stringified); // it's either a native function or something stolen from scramjet itself
            const firstspace = stringified.indexOf(" ", scramtagstart + scramtag_ident.length);
            // [index] holds the index of the first character in the scramtag (/)
            const abstagindex = parseInt(stringified.substring(scramtagstart + scramtag_ident.length, firstspace));
            // subtracting that from the index of the scramtag gives us the starting index of the function relative to the entire file
            const absindex = abstagindex - scramtagstart;
            const scramtagend = stringified.indexOf("*/", scramtagstart);
            const tag = stringified.substring(firstspace + 1, scramtagend);
            // delete all scramtags inside the function (and nested ones!!)
            stringified = stringified.replace(/\/\*scramtag.*?\*\//g, "");
            const maps = sourcemaps[tag];
            let i = 0;
            let offset = 0;
            let j = 0;
            while(j < maps.length){
                const [str, start, end] = maps[j];
                if (start < absindex) {
                    j++;
                    continue;
                }
                if (start - absindex + offset > stringified.length) break;
                // ooh i should really document this before i forget how it works
                newString += stringified.slice(i, start - absindex + offset);
                newString += str;
                offset += end - start - str.length;
                i = start - absindex + offset + str.length;
                j++;
            }
            newString += stringified.slice(i);
            return ctx.return(newString);
        }
    });
}


}),
"./src/client/shared/trustedTypes.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client, self) {
    delete self.TrustedHTML;
    delete self.TrustedScript;
    delete self.TrustedScriptURL;
    delete self.TrustedTypePolicy;
    delete self.TrustedTypePolicyFactory;
    self.__defineGetter__("trustedTypes", ()=>undefined);
}


}),
"./src/client/shared/unproxy.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; },
  order: function() { return order; },
  unproxy: function() { return unproxy; }
});
/* ESM import */var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/client/index.ts");

// we don't want to end up overriding a property on window that's derived from a prototype until we've proxied the prototype
const order = 3;
/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client, self) {
    // an automated approach to cleaning the documentProxy from dom functions
    // it will trigger an illegal invocation if you pass the proxy to c++ code, we gotta hotswap it out with the real one
    // admittedly this is pretty slow. worth investigating if there's ways to get back some of the lost performance
    for (const target of [
        self
    ]){
        for(const prop in target){
            try {
                if (typeof target[prop] === "function") {
                    client.RawProxy(target, prop, {
                        apply (ctx) {
                            unproxy(ctx, client);
                        }
                    });
                }
            } catch  {}
        }
    }
    if (!___WEBPACK_IMPORTED_MODULE_0__.iswindow) return;
    for (const target of [
        self.Node.prototype,
        self.MutationObserver.prototype,
        self.document,
        self.MouseEvent.prototype,
        self.Range.prototype
    ]){
        for(const prop in target){
            try {
                if (typeof target[prop] === "function") {
                    client.RawProxy(target, prop, {
                        apply (ctx) {
                            unproxy(ctx, client);
                        }
                    });
                }
            } catch  {}
        }
    }
    // this is probably not how stuff should be done but you cant run defineProperty on the window proxy so...
    client.Proxy("Object.defineProperty", {
        apply (ctx) {
            unproxy(ctx, client);
        }
    });
    client.Proxy("Object.getOwnPropertyDescriptor", {
        apply (ctx) {
            const desc = ctx.call();
            if (!desc) return;
            if (desc.get) {
                client.RawProxy(desc, "get", {
                    apply (getCtx) {
                        // value of this in the getter needs to be corrected
                        unproxy(getCtx, client);
                    }
                });
            }
            if (desc.set) {
                client.RawProxy(desc, "set", {
                    apply (setCtx) {
                        unproxy(setCtx, client);
                    }
                });
            }
            // i don't think we have to care about value but it's worth looking into
            ctx.return(desc);
        }
    });
}
function unproxy(ctx, client) {
    const self = client.global;
    if (ctx.this === client.globalProxy) ctx.this = self;
    if (ctx.this === client.documentProxy) ctx.this = self.document;
    for(const i in ctx.args){
        if (ctx.args[i] === client.documentProxy) ctx.args[i] = self.document;
        if (ctx.args[i] === client.globalProxy) ctx.args[i] = self;
    }
}


}),
"./src/client/shared/worker.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM import */var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/client/index.ts");
/* ESM import */var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared */ "./src/shared.ts");



/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client, self) {
    if (self.Worker) {
        client.Proxy("Worker", {
            construct ({ args, call }) {
                args[0] = (0,_shared__WEBPACK_IMPORTED_MODULE_1__.rewriteUrl)(args[0], client.meta) + "?dest=worker";
                if (args[1] && args[1].type === "module") {
                    args[0] += "&type=module";
                }
                const worker = call();
                const conn = new _shared__WEBPACK_IMPORTED_MODULE_1__.BareMuxConnection();
                (async ()=>{
                    const port = await conn.getInnerPort();
                    client.natives["Worker.prototype.postMessage"].call(worker, {
                        $scramjet$type: "baremuxinit",
                        port
                    }, [
                        port
                    ]);
                })();
            }
        });
    }
    if (___WEBPACK_IMPORTED_MODULE_0__.iswindow) {
        client.Proxy("Worklet.prototype.addModule", {
            apply (ctx) {
                if (ctx.args[0]) ctx.args[0] = (0,_shared__WEBPACK_IMPORTED_MODULE_1__.rewriteUrl)(ctx.args[0], client.meta);
            }
        });
        // sharedworkers can only be constructed from window
        client.Proxy("SharedWorker", {
            construct ({ args, call }) {
                args[0] = (0,_shared__WEBPACK_IMPORTED_MODULE_1__.rewriteUrl)(args[0], client.meta) + "?dest=worker";
                if (args[1] && typeof args[1] === "string") args[1] = `${client.url.origin}@${args[1]}`;
                if (args[1] && typeof args[1] === "object") {
                    if (args[1].type === "module") {
                        args[0] += "&type=module";
                    }
                    if (args[1].name) {
                        args[1].name = `${client.url.origin}@${args[1].name}`;
                    }
                }
                const worker = call();
                const conn = new _shared__WEBPACK_IMPORTED_MODULE_1__.BareMuxConnection();
                (async ()=>{
                    const port = await conn.getInnerPort();
                    client.natives["MessagePort.prototype.postMessage"].call(worker.port, {
                        $scramjet$type: "baremuxinit",
                        port
                    }, [
                        port
                    ]);
                })();
            }
        });
    }
}


}),
"./src/client/shared/wrap.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createWrapFn: function() { return createWrapFn; },
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; },
  order: function() { return order; }
});
/* ESM import */var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/client/index.ts");
/* ESM import */var _symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../symbols */ "./src/symbols.ts");
/* ESM import */var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ "./src/shared.ts");
/* ESM import */var _eval__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eval */ "./src/client/shared/eval.ts");



// import { argdbg } from "./err";

function createWrapFn(client, self) {
    return function(identifier) {
        if (identifier === self) return client.globalProxy;
        if (identifier === self.location) return client.locationProxy;
        if (identifier === eval) return _eval__WEBPACK_IMPORTED_MODULE_3__.indirectEval.bind(client);
        if (___WEBPACK_IMPORTED_MODULE_0__.iswindow) {
            if (identifier === self.parent) {
                if (_symbols__WEBPACK_IMPORTED_MODULE_1__.SCRAMJETCLIENT in self.parent) {
                    // ... then we're in a subframe, and the parent frame is also in a proxy context, so we should return its proxy
                    return self.parent[_symbols__WEBPACK_IMPORTED_MODULE_1__.SCRAMJETCLIENT].globalProxy;
                } else {
                    // ... then we should pretend we aren't nested and return the current window
                    return client.globalProxy;
                }
            } else if (identifier === self.document) {
                return client.documentProxy;
            } else if (identifier === self.top) {
                // instead of returning top, we need to return the uppermost parent that's inside a scramjet context
                let current = self;
                for(;;){
                    const test = current.parent.self;
                    if (test === current) break; // there is no parent, actual or emulated.
                    // ... then `test` represents a window outside of the proxy context, and therefore `current` is the topmost window in the proxy context
                    if (!(_symbols__WEBPACK_IMPORTED_MODULE_1__.SCRAMJETCLIENT in test)) break;
                    // test is also insde a proxy, so we should continue up the chain
                    current = test;
                }
                return current[_symbols__WEBPACK_IMPORTED_MODULE_1__.SCRAMJETCLIENT].globalProxy;
            }
        }
        return identifier;
    };
}
const order = 4;
/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client, self) {
    // the main magic of the proxy. all attempts to access any "banned objects" will be redirected here, and instead served a proxy object
    // this contrasts from how other proxies will leave the root object alone and instead attempt to catch every member access
    // this presents some issues (see element.ts), but makes us a good bit faster at runtime!
    Object.defineProperty(self, _shared__WEBPACK_IMPORTED_MODULE_2__.config.globals.wrapfn, {
        value: client.wrapfn,
        writable: false,
        configurable: false
    });
    Object.defineProperty(self, _shared__WEBPACK_IMPORTED_MODULE_2__.config.globals.wrapthisfn, {
        value: function(i) {
            if (i === self) return client.globalProxy;
            return i;
        },
        writable: false,
        configurable: false
    });
    self.$scramitize = function(v) {
        if (typeof v === "string" && v.includes("scramjet")) {
            debugger;
        }
        if (typeof v === "string" && v.includes(location.origin)) {
            debugger;
        }
        if (___WEBPACK_IMPORTED_MODULE_0__.iswindow && v instanceof Document && v.defaultView.$scramjet) {
            debugger;
        }
        return v;
    };
    // location = "..." can't be rewritten as wrapfn(location) = ..., so instead it will actually be rewritten as
    // ((t)=>$scramjet$tryset(location,"+=",t)||location+=t)(...);
    // it has to be a discrete function because there's always the possibility that "location" is a local variable
    // we have to use an IIFE to avoid duplicating side-effects in the getter
    Object.defineProperty(self, _shared__WEBPACK_IMPORTED_MODULE_2__.config.globals.trysetfn, {
        value: function(lhs, op, rhs) {
            if (lhs instanceof Location) {
                // @ts-ignore
                locationProxy.href = rhs;
                return true;
            }
        },
        writable: false,
        configurable: false
    });
}


}),
"./src/client/swruntime.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ScramjetServiceWorkerRuntime: function() { return ScramjetServiceWorkerRuntime; }
});
/* ESM import */var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ "./src/shared.ts");
/* provided dependency */ var dbg = __webpack_require__(/*! ./src/log.ts */ "./src/log.ts")["default"];

class ScramjetServiceWorkerRuntime {
    client;
    recvport;
    constructor(client){
        this.client = client;
        // @ts-ignore
        self.onconnect = (cevent)=>{
            const port = cevent.ports[0];
            dbg.log("sw", "connected");
            port.addEventListener("message", (event)=>{
                console.log("sw", event.data);
                if ("scramjet$type" in event.data) {
                    if (event.data.scramjet$type === "init") {
                        this.recvport = event.data.scramjet$port;
                        this.recvport.postMessage({
                            scramjet$type: "init"
                        });
                    } else {
                        handleMessage.call(this, client, event.data);
                    }
                }
            });
            port.start();
        };
    }
    hook() {
        this.client.global.registration = {
            // TODO IMPLEMENT SCOPES
            scope: this.client.url.href,
            active: {
                scriptURL: this.client.url.href,
                state: "activated",
                onstatechange: null,
                onerror: null,
                postMessage: ()=>{},
                addEventListener: ()=>{},
                removeEventListener: ()=>{},
                dispatchEvent: (_e)=>{}
            },
            showNotification: async ()=>{},
            unregister: async ()=>true,
            update: async ()=>{},
            installing: null,
            waiting: null
        };
        // @ts-ignore
        this.client.global.ServiceWorkerGlobalScope = this.client.global;
    }
}
function handleMessage(client, data) {
    const port = this.recvport;
    const type = data.scramjet$type;
    const token = data.scramjet$token;
    const handlers = client.eventcallbacks.get(self);
    if (type === "fetch") {
        dbg.log("ee", data);
        const fetchhandlers = handlers.filter((event)=>event.event === "fetch");
        if (!fetchhandlers) return;
        for (const handler of fetchhandlers){
            const request = data.scramjet$request;
            const Request = client.natives["Request"];
            const fakeRequest = new Request((0,_shared__WEBPACK_IMPORTED_MODULE_0__.unrewriteUrl)(request.url), {
                body: request.body,
                headers: new Headers(request.headers),
                method: request.method,
                mode: "same-origin"
            });
            Object.defineProperty(fakeRequest, "destination", {
                value: request.destinitation
            });
            // TODO: clean up, maybe put into a class
            const fakeFetchEvent = new Event("fetch");
            fakeFetchEvent.request = fakeRequest;
            let responded = false;
            fakeFetchEvent.respondWith = (response)=>{
                responded = true;
                (async ()=>{
                    response = await response;
                    const message = {
                        scramjet$type: "fetch",
                        scramjet$token: token,
                        scramjet$response: {
                            body: response.body,
                            headers: Array.from(response.headers.entries()),
                            status: response.status,
                            statusText: response.statusText
                        }
                    };
                    dbg.log("sw", "responding", message);
                    port.postMessage(message, [
                        response.body
                    ]);
                })();
            };
            dbg.log("to fn", fakeFetchEvent);
            handler.proxiedCallback(trustEvent(fakeFetchEvent));
            if (!responded) {
                console.log("sw", "no response");
                port.postMessage({
                    scramjet$type: "fetch",
                    scramjet$token: token,
                    scramjet$response: false
                });
            }
        }
    }
}
function trustEvent(event) {
    return new Proxy(event, {
        get (target, prop, _reciever) {
            if (prop === "isTrusted") return true;
            return Reflect.get(target, prop);
        }
    });
}


}),
"./src/client/worker/importScripts.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM import */var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared */ "./src/shared.ts");

/* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(client, _self) {
    client.Proxy("importScripts", {
        apply (ctx) {
            for(const i in ctx.args){
                ctx.args[i] = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.rewriteUrl)(ctx.args[i], client.meta);
            }
        }
    });
}


}),
"./src/log.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    fmt: function(severity, message, ...args) {
        const old = Error.prepareStackTrace;
        Error.prepareStackTrace = (_, stack)=>{
            stack.shift(); // stack();
            stack.shift(); // fmt();
            stack.shift();
            let fmt = "";
            for(let i = 1; i < Math.min(2, stack.length); i++){
                if (stack[i].getFunctionName()) {
                    // const f = stack[i].getThis()?.constructor?.name;
                    // if (f) fmt += `${f}.`
                    fmt += `${stack[i].getFunctionName()} -> ` + fmt;
                }
            }
            fmt += stack[0].getFunctionName() || "Anonymous";
            return fmt;
        };
        const fmt = function stack() {
            try {
                throw new Error();
            } catch (e) {
                return e.stack;
            }
        }();
        Error.prepareStackTrace = old;
        const fn = console[severity] || console.log;
        const bg = {
            log: "#000",
            warn: "#f80",
            error: "#f00",
            debug: "transparent"
        }[severity];
        const fg = {
            log: "#fff",
            warn: "#fff",
            error: "#fff",
            debug: "gray"
        }[severity];
        const padding = {
            log: 2,
            warn: 4,
            error: 4,
            debug: 0
        }[severity];
        fn(`%c${fmt}%c ${message}`, `
		background-color: ${bg};
		color: ${fg};
		padding: ${padding}px;
		font-weight: bold;
		font-family: monospace;
		font-size: 0.9em;
	`, `${severity === "debug" ? "color: gray" : ""}`, ...args);
    },
    log: function(message, ...args) {
        this.fmt("log", message, ...args);
    },
    warn: function(message, ...args) {
        this.fmt("warn", message, ...args);
    },
    error: function(message, ...args) {
        this.fmt("error", message, ...args);
    },
    debug: function(message, ...args) {
        this.fmt("debug", message, ...args);
    }
});


}),
"./src/scramjet.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  $scramjet: function() { return $scramjet; },
  flagEnabled: function() { return flagEnabled; },
  loadCodecs: function() { return loadCodecs; }
});
if (!("$scramjet" in self)) {
    // @ts-expect-error ts stuff
    self.$scramjet = {
        version: {
            build: "e5dff7f",
            version: "1.0.2-dev"
        },
        codec: {},
        flagEnabled
    };
}
const $scramjet = self.$scramjet;
const nativeFunction = Function;
function loadCodecs() {
    $scramjet.codec.encode = nativeFunction("url", $scramjet.config.codec.encode);
    $scramjet.codec.decode = nativeFunction("url", $scramjet.config.codec.decode);
}
function flagEnabled(flag, url) {
    const value = $scramjet.config.defaultFlags[flag];
    for(const regex in $scramjet.config.siteFlags){
        const partialflags = $scramjet.config.siteFlags[regex];
        if (new RegExp(regex).test(url.href) && flag in partialflags) {
            return partialflags[flag];
        }
    }
    return value;
}


}),
"./src/shared.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BareClient: function() { return BareClient; },
  BareMuxConnection: function() { return BareMuxConnection; },
  CookieStore: function() { return CookieStore; },
  ScramjetHeaders: function() { return ScramjetHeaders; },
  config: function() { return config; },
  htmlRules: function() { return htmlRules; },
  rewriteBlob: function() { return rewriteBlob; },
  rewriteCss: function() { return rewriteCss; },
  rewriteHeaders: function() { return rewriteHeaders; },
  rewriteHtml: function() { return rewriteHtml; },
  rewriteJs: function() { return rewriteJs; },
  rewriteSrcset: function() { return rewriteSrcset; },
  rewriteUrl: function() { return rewriteUrl; },
  rewriteWorkers: function() { return rewriteWorkers; },
  unrewriteBlob: function() { return unrewriteBlob; },
  unrewriteCss: function() { return unrewriteCss; },
  unrewriteHtml: function() { return unrewriteHtml; },
  unrewriteUrl: function() { return unrewriteUrl; }
});
/* ESM import */var _scramjet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scramjet */ "./src/scramjet.ts");

const { util: { BareClient, ScramjetHeaders, BareMuxConnection }, url: { rewriteUrl, unrewriteUrl, rewriteBlob, unrewriteBlob }, rewrite: { rewriteCss, unrewriteCss, rewriteHtml, unrewriteHtml, rewriteSrcset, rewriteJs, rewriteHeaders, rewriteWorkers, htmlRules }, CookieStore } = _scramjet__WEBPACK_IMPORTED_MODULE_0__.$scramjet.shared;
const config = _scramjet__WEBPACK_IMPORTED_MODULE_0__.$scramjet.config;


}),
"./src/shared/rewriters/js.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  rewriteJs: function() { return rewriteJs; },
  rewriteJsNaiive: function() { return rewriteJsNaiive; }
});
/* ESM import */var _rewriter_out_rewriter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../rewriter/out/rewriter.js */ "./rewriter/out/rewriter.js");
/* ESM import */var _scramjet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scramjet */ "./src/scramjet.ts");
// i am a cat. i like to be petted. i like to be fed. i like to be


(0,_rewriter_out_rewriter_js__WEBPACK_IMPORTED_MODULE_0__.initSync)({
    module: new WebAssembly.Module(Uint8Array.from(atob(self.WASM), (c)=>c.charCodeAt(0)))
});
Error.stackTraceLimit = 50;
const decoder = new TextDecoder();
function rewriteJsWrapper(input, url, meta) {
    let out;
    const before = performance.now();
    if (typeof input === "string") {
        out = (0,_rewriter_out_rewriter_js__WEBPACK_IMPORTED_MODULE_0__.rewrite_js)(input, meta.base.href, url || "(unknown)", _scramjet__WEBPACK_IMPORTED_MODULE_1__.$scramjet);
    } else {
        out = (0,_rewriter_out_rewriter_js__WEBPACK_IMPORTED_MODULE_0__.rewrite_js_from_arraybuffer)(new Uint8Array(input), meta.base.href, url || "(unknown)", _scramjet__WEBPACK_IMPORTED_MODULE_1__.$scramjet);
    }
    const after = performance.now();
    const { js, errors, duration } = out;
    if ((0,_scramjet__WEBPACK_IMPORTED_MODULE_1__.flagEnabled)("rewriterLogs", meta.base)) {
        for (const error of errors){
            console.error("oxc parse error", error);
        }
    }
    if ((0,_scramjet__WEBPACK_IMPORTED_MODULE_1__.flagEnabled)("rewriterLogs", meta.base)) {
        let timespan;
        if (duration < 1n) {
            timespan = "BLAZINGLY FAST";
        } else if (duration < 500n) {
            timespan = "decent speed";
        } else {
            timespan = "really slow";
        }
        const overhead = (after - before - Number(duration)).toFixed(2);
        console.log(`oxc rewrite for "${url || "(unknown)"}" was ${timespan} (${duration}ms; ${overhead}ms overhead)`);
    }
    return typeof input === "string" ? decoder.decode(js) : js;
}
function rewriteJs(js, url, meta) {
    if ((0,_scramjet__WEBPACK_IMPORTED_MODULE_1__.flagEnabled)("naiiveRewriter", meta.origin)) {
        const text = typeof js === "string" ? js : new TextDecoder().decode(js);
        console.log("naiive");
        return rewriteJsNaiive(text);
    }
    js = rewriteJsWrapper(js, url, meta);
    return js;
}
// 1. does not work with modules
// 2. cannot proxy import()
// 3. disables "use strict" optimizations
// 4. i think the global state can get clobbered somehow
//
// if you can ensure all the preconditions are met this is faster than full rewrites
function rewriteJsNaiive(js) {
    if (typeof js !== "string") {
        js = new TextDecoder().decode(js);
    }
    return `
		with (${_scramjet__WEBPACK_IMPORTED_MODULE_1__.$scramjet.config.globals.wrapfn}(globalThis)) {

			${js}

		}
	`;
}


}),
"./src/shared/rewriters/url.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  rewriteBlob: function() { return rewriteBlob; },
  rewriteUrl: function() { return rewriteUrl; },
  unrewriteBlob: function() { return unrewriteBlob; },
  unrewriteUrl: function() { return unrewriteUrl; }
});
/* ESM import */var _scramjet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scramjet */ "./src/scramjet.ts");
/* ESM import */var _js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js */ "./src/shared/rewriters/js.ts");


function tryCanParseURL(url, origin) {
    try {
        return new URL(url, origin);
    } catch  {
        return null;
    }
}
function rewriteBlob(url, meta) {
    const blob = new URL(url.substring("blob:".length));
    return "blob:" + meta.origin.origin + blob.pathname;
}
function unrewriteBlob(url) {
    const blob = new URL(url.substring("blob:".length));
    return "blob:" + location.origin + blob.pathname;
}
function rewriteUrl(url, meta) {
    if (url instanceof URL) {
        url = url.toString();
    }
    if (url.startsWith("javascript:")) {
        return "javascript:" + (0,_js__WEBPACK_IMPORTED_MODULE_1__.rewriteJs)(url.slice("javascript:".length), null, meta);
    } else if (url.startsWith("blob:")) {
        return location.origin + _scramjet__WEBPACK_IMPORTED_MODULE_0__.$scramjet.config.prefix + url;
    } else if (url.startsWith("data:")) {
        return location.origin + _scramjet__WEBPACK_IMPORTED_MODULE_0__.$scramjet.config.prefix + url;
    } else if (url.startsWith("mailto:") || url.startsWith("about:")) {
        return url;
    } else {
        let base = meta.base.href;
        if (base.startsWith("about:")) base = unrewriteUrl(self.location.href); // jank!!!!! weird jank!!!
        const realUrl = tryCanParseURL(url, base);
        if (!realUrl) return url;
        return location.origin + _scramjet__WEBPACK_IMPORTED_MODULE_0__.$scramjet.config.prefix + _scramjet__WEBPACK_IMPORTED_MODULE_0__.$scramjet.codec.encode(realUrl.href);
    }
}
function unrewriteUrl(url) {
    if (url instanceof URL) {
        url = url.toString();
    }
    const prefixed = location.origin + _scramjet__WEBPACK_IMPORTED_MODULE_0__.$scramjet.config.prefix;
    if (url.startsWith("javascript:")) {
        //TODO
        return url;
    } else if (url.startsWith("blob:")) {
        // realistically this shouldn't happen
        return url;
    } else if (url.startsWith(prefixed + "blob:")) {
        return url.substring(prefixed.length);
    } else if (url.startsWith(prefixed + "data:")) {
        return url.substring(prefixed.length);
    } else if (url.startsWith("mailto:") || url.startsWith("about:")) {
        return url;
    } else if (tryCanParseURL(url)) {
        return _scramjet__WEBPACK_IMPORTED_MODULE_0__.$scramjet.codec.decode(url.slice((location.origin + _scramjet__WEBPACK_IMPORTED_MODULE_0__.$scramjet.config.prefix).length));
    } else {
        return url;
    }
}


}),
"./src/symbols.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SCRAMJETCLIENT: function() { return SCRAMJETCLIENT; },
  SCRAMJETFRAME: function() { return SCRAMJETFRAME; }
});
// see types.d.ts for what these mean
const SCRAMJETCLIENT = Symbol.for("scramjet client global");
const SCRAMJETFRAME = Symbol.for("scramjet frame handle");


}),
"./rewriter/out/rewriter.js": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; },
  initSync: function() { return initSync; },
  rewrite_js: function() { return rewrite_js; },
  rewrite_js_from_arraybuffer: function() { return rewrite_js_from_arraybuffer; }
});
/* ESM import */var _snippets_rewriter_92c16398177630e9_inline0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snippets/rewriter-92c16398177630e9/inline0.js */ "./rewriter/out/snippets/rewriter-92c16398177630e9/inline0.js");


let wasm;

const cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true }) : { decode: () => { throw Error('TextDecoder not available') } } );

if (typeof TextDecoder !== 'undefined') { cachedTextDecoder.decode(); };

let cachedUint8ArrayMemory0 = null;

function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.buffer !== wasm.memory.buffer) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8ArrayMemory0().slice(ptr, ptr + len));
}

let WASM_VECTOR_LEN = 0;

const cachedTextEncoder = (typeof TextEncoder !== 'undefined' ? new TextEncoder('utf-8') : { encode: () => { throw Error('TextEncoder not available') } } );

const encodeString = function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
};

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachedDataViewMemory0 = null;

function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer !== wasm.memory.buffer) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_export_4.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}
/**
 * @param {string} js
 * @param {string} url
 * @param {string} script_url
 * @param {object} scramjet
 * @returns {RewriterOutput}
 */
function rewrite_js(js, url, script_url, scramjet) {
    const ptr0 = passStringToWasm0(js, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passStringToWasm0(script_url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len2 = WASM_VECTOR_LEN;
    const ret = wasm.rewrite_js(ptr0, len0, ptr1, len1, ptr2, len2, scramjet);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1, 1) >>> 0;
    getUint8ArrayMemory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}
/**
 * @param {Uint8Array} js
 * @param {string} url
 * @param {string} script_url
 * @param {object} scramjet
 * @returns {RewriterOutput}
 */
function rewrite_js_from_arraybuffer(js, url, script_url, scramjet) {
    const ptr0 = passArray8ToWasm0(js, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passStringToWasm0(script_url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len2 = WASM_VECTOR_LEN;
    const ret = wasm.rewrite_js_from_arraybuffer(ptr0, len0, ptr1, len1, ptr2, len2, scramjet);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

function addToExternrefTable0(obj) {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_export_4.set(idx, obj);
    return idx;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
    }
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

function __wbg_get_imports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbindgen_error_new = function(arg0, arg1) {
        const ret = new Error(getStringFromWasm0(arg0, arg1));
        return ret;
    };
    imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
        const ret = getStringFromWasm0(arg0, arg1);
        return ret;
    };
    imports.wbg.__wbg_call_3bfa248576352471 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = arg0.call(arg1, arg2);
        return ret;
    }, arguments) };
    imports.wbg.__wbindgen_string_get = function(arg0, arg1) {
        const obj = arg1;
        const ret = typeof(obj) === 'string' ? obj : undefined;
        var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    };
    imports.wbg.__wbg_get_ef828680c64da212 = function() { return handleError(function (arg0, arg1) {
        const ret = Reflect.get(arg0, arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_toString_4b677455b9167e31 = function(arg0) {
        const ret = arg0.toString();
        return ret;
    };
    imports.wbg.__wbg_set_e864d25d9b399c9f = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = Reflect.set(arg0, arg1, arg2);
        return ret;
    }, arguments) };
    imports.wbg.__wbindgen_is_function = function(arg0) {
        const ret = typeof(arg0) === 'function';
        return ret;
    };
    imports.wbg.__wbg_new_1cabf49927794f50 = function() { return handleError(function (arg0, arg1) {
        const ret = new URL(getStringFromWasm0(arg0, arg1));
        return ret;
    }, arguments) };
    imports.wbg.__wbg_call_5fb7c8066a4a4825 = function() { return handleError(function (arg0, arg1, arg2, arg3) {
        const ret = arg0.call(arg1, arg2, arg3);
        return ret;
    }, arguments) };
    imports.wbg.__wbindgen_boolean_get = function(arg0) {
        const v = arg0;
        const ret = typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;
        return ret;
    };
    imports.wbg.__wbg_new_e69b5f66fda8f13c = function() {
        const ret = new Object();
        return ret;
    };
    imports.wbg.__wbindgen_uint8_array_new = function(arg0, arg1) {
        var v0 = getArrayU8FromWasm0(arg0, arg1).slice();
        wasm.__wbindgen_free(arg0, arg1 * 1, 1);
        const ret = v0;
        return ret;
    };
    imports.wbg.__wbindgen_array_new = function() {
        const ret = [];
        return ret;
    };
    imports.wbg.__wbindgen_array_push = function(arg0, arg1) {
        arg0.push(arg1);
    };
    imports.wbg.__wbindgen_number_new = function(arg0) {
        const ret = arg0;
        return ret;
    };
    imports.wbg.__wbg_scramtag_51d94caa8a743d31 = function(arg0) {
        const ret = (0,_snippets_rewriter_92c16398177630e9_inline0_js__WEBPACK_IMPORTED_MODULE_0__.scramtag)();
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    };
    imports.wbg.__wbg_now_d3cbc9581625f686 = function(arg0) {
        const ret = arg0.now();
        return ret;
    };
    imports.wbg.__wbg_self_bf91bf94d9e04084 = function() { return handleError(function () {
        const ret = self.self;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_window_52dd9f07d03fd5f8 = function() { return handleError(function () {
        const ret = window.window;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_globalThis_05c129bf37fcf1be = function() { return handleError(function () {
        const ret = globalThis.globalThis;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_global_3eca19bb09e9c484 = function() { return handleError(function () {
        const ret = global.global;
        return ret;
    }, arguments) };
    imports.wbg.__wbindgen_is_undefined = function(arg0) {
        const ret = arg0 === undefined;
        return ret;
    };
    imports.wbg.__wbg_newnoargs_1ede4bf2ebbaaf43 = function(arg0, arg1) {
        const ret = new Function(getStringFromWasm0(arg0, arg1));
        return ret;
    };
    imports.wbg.__wbg_call_a9ef466721e824f2 = function() { return handleError(function (arg0, arg1) {
        const ret = arg0.call(arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbindgen_init_externref_table = function() {
        const table = wasm.__wbindgen_export_4;
        const offset = table.grow(4);
        table.set(0, undefined);
        table.set(offset + 0, undefined);
        table.set(offset + 1, null);
        table.set(offset + 2, true);
        table.set(offset + 3, false);
        ;
    };

    return imports;
}

function __wbg_init_memory(imports, memory) {
    imports.wbg.memory = memory || new WebAssembly.Memory({initial:22,maximum:16384,shared:true});
}

function __wbg_finalize_init(instance, module, thread_stack_size) {
    wasm = instance.exports;
    __wbg_init.__wbindgen_wasm_module = module;
    cachedDataViewMemory0 = null;
    cachedUint8ArrayMemory0 = null;

if (typeof thread_stack_size !== 'undefined' && (typeof thread_stack_size !== 'number' || thread_stack_size === 0 || thread_stack_size % 65536 !== 0)) { throw 'invalid stack size' }
wasm.__wbindgen_start(thread_stack_size);
return wasm;
}

function initSync(module, memory) {
    if (wasm !== undefined) return wasm;

    let thread_stack_size
    if (typeof module !== 'undefined') {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module, memory, thread_stack_size} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();

    __wbg_init_memory(imports, memory);

    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }

    const instance = new WebAssembly.Instance(module, imports);

    return __wbg_finalize_init(instance, module, thread_stack_size);
}

async function __wbg_init(module_or_path, memory) {
    if (wasm !== undefined) return wasm;

    let thread_stack_size
    if (typeof module_or_path !== 'undefined') {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path, memory, thread_stack_size} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (typeof module_or_path === 'undefined') {
        module_or_path = new URL('rewriter_bg.wasm', "");
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    __wbg_init_memory(imports, memory);

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module, thread_stack_size);
}


/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__wbg_init);


}),
"./rewriter/out/snippets/rewriter-92c16398177630e9/inline0.js": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  scramtag: function() { return scramtag; }
});

// slightly modified https://github.com/ungap/random-uuid/blob/main/index.js
function scramtag() {
    return (""+1e10).replace(/[018]/g,
      c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}


}),

});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Return the exports of the module
return module.exports;

}

/************************************************************************/
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = function(exports, definition) {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = function (obj, prop) {
	return Object.prototype.hasOwnProperty.call(obj, prop);
};

})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = function(exports) {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};

})();
/************************************************************************/
// startup
// Load entry module and return exports
// This entry module is referenced by other modules so it can't be inlined
var __webpack_exports__ = __webpack_require__("./src/client/index.ts");
})()
;
//# sourceMappingURL=scramjet.client.js.map