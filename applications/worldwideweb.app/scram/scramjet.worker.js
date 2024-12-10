(() => { // webpackBootstrap
"use strict";
var __webpack_modules__ = ({
"./src/log.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
"./src/worker/error.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  errorTemplate: function() { return errorTemplate; },
  renderError: function() { return renderError; }
});
/* ESM import */var _scramjet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scramjet */ "./src/scramjet.ts");

function errorTemplate(trace, fetchedURL) {
    // turn script into a data URI so we don"t have to escape any HTML values
    const script = `
                errorTrace.value = ${JSON.stringify(trace)};
                fetchedURL.textContent = ${JSON.stringify(fetchedURL)};
                for (const node of document.querySelectorAll("#hostname")) node.textContent = ${JSON.stringify(location.hostname)};
                reload.addEventListener("click", () => location.reload());
                version.textContent = ${JSON.stringify(_scramjet__WEBPACK_IMPORTED_MODULE_0__.$scramjet.version.version)};
                build.textContent = ${JSON.stringify(_scramjet__WEBPACK_IMPORTED_MODULE_0__.$scramjet.version.build)};
                
                document.getElementById('copy-button').addEventListener('click', async () => {
                    const text = document.getElementById('errorTrace').value;
                    await navigator.clipboard.writeText(text);
                    const btn = document.getElementById('copy-button');
                    btn.textContent = 'Copied!';
                    setTimeout(() => btn.textContent = 'Copy', 2000);
                });
        `;
    return `<!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8" />
                    <title>Scramjet</title>
                    <style>
                    :root {
                        --deep: #080602;
                        --shallow: #181412;
                        --beach: #f1e8e1;
                        --shore: #b1a8a1;
                        --accent: #ffa938;
                        --font-sans: -apple-system, system-ui, BlinkMacSystemFont, sans-serif;
                        --font-monospace: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
                    }

                    *:not(div,p,span,ul,li,i,span) {
                        background-color: var(--deep);
                        color: var(--beach);
                        font-family: var(--font-sans);
                    }

                    textarea,
                    button {
                        background-color: var(--shallow);
                        border-radius: 0.6em;
                        padding: 0.6em;
                        border: none;
                        appearance: none;
                        font-family: var(--font-sans);
                        color: var(--beach);
                    }

                    button.primary {
                        background-color: var(--accent);
                        color: var(--deep);
                        font-weight: bold;
                    }

                    textarea {
                        resize: none;
                        height: 20em;
                        text-align: left;
                        font-family: var(--font-monospace);
                    }

                    body {
                        width: 100vw;
                        height: 100vh;
                        justify-content: center;
                        align-items: center;
                    }

                    body,
                    html,
                    #inner {
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                        gap: 0.5em;
                        overflow: hidden;
                    }

                    #inner {
                        z-index: 100;
                    }

                    #cover {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        background-color: color-mix(in srgb, var(--deep) 70%, transparent);
                        z-index: 99;
                    }

                    #info {
                        display: flex;
                        flex-direction: row;
                        align-items: flex-start;
                        gap: 1em;
                    }

                    #version-wrapper {
                        width: auto;
                        text-align: right;
                        position: absolute;
                        top: 0.5rem;
                        right: 0.5rem;
                        font-size: 0.8rem;
                        color: var(--shore)!important;
                        i {
                            background-color: color-mix(in srgb, var(--deep), transparent 50%);
                            border-radius: 9999px;
                            padding: 0.2em 0.5em;
                        }
                        z-index: 101;
                    }

                    #errorTrace-wrapper {
                        position: relative;
                        width: fit-content;
                    }

                    #copy-button {
                        position: absolute;
                        top: 0.5em;
                        right: 0.5em;
                        padding: 0.23em;
                        cursor: pointer;
                        opacity: 0;
                        transition: opacity 0.4s;
                        font-size: 0.9em;
                    }

                    #errorTrace-wrapper:hover #copy-button {
                        opacity: 1;
                    }
                    </style>
                </head>
                <body>
                    <div id="cover"></div>
                    <div id="inner">
                        <h1 id="errorTitle">Uh oh!</h1>
                        <p>There was an error loading <b id="fetchedURL"></b></p>
                        <!-- <p id="errorMessage">Internal Server Error</p> -->

                        <div id="info">
                            <div id="errorTrace-wrapper">
                                <textarea id="errorTrace" cols="40" rows="10" readonly></textarea>
                                <button id="copy-button" class="primary">Copy</button>
                            </div>
                            <div id="troubleshooting">
                                <p>Try:</p>
                                <ul>
                                    <li>Checking your internet connection</li>
                                    <li>Verifying you entered the correct address</li>
                                    <li>Clearing the site data</li>
                                    <li>Contacting <b id="hostname"></b>'s administrator</li>
                                    <li>Verify the server isn't censored</li>
                                </ul>
                                <p>If you're the administrator of <b id="hostname"></b>, try:</p>
                                    <ul>
                                    <li>Restarting your server</li>
                                    <li>Updating Scramjet</li>
                                    <li>Troubleshooting the error on the <a href="https://github.com/MercuryWorkshop/scramjet" target="_blank">GitHub repository</a></li>
                                </ul>
                            </div>
                        </div>
                        <br>
                        <button id="reload" class="primary">Reload</button>
                    </div>
                    <p id="version-wrapper"><i>Scramjet v<span id="version"></span> (build <span id="build"></span>)</i></p>
                    <script src="${"data:application/javascript," + encodeURIComponent(script)}"></script>
                </body>
            </html>
        `;
}
function renderError(err, fetchedURL) {
    const headers = {
        "content-type": "text/html"
    };
    if (crossOriginIsolated) {
        headers["Cross-Origin-Embedder-Policy"] = "require-corp";
    }
    return new Response(errorTemplate(String(err), fetchedURL), {
        status: 500,
        headers: headers
    });
}


}),
"./src/worker/fakesw.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  FakeServiceWorker: function() { return FakeServiceWorker; }
});
class FakeServiceWorker {
    handle;
    origin;
    syncToken;
    promises;
    messageChannel;
    connected;
    constructor(handle, origin){
        this.handle = handle;
        this.origin = origin;
        this.syncToken = 0;
        this.promises = {};
        this.messageChannel = new MessageChannel();
        this.connected = false;
        this.messageChannel.port1.addEventListener("message", (event)=>{
            if ("scramjet$type" in event.data) {
                if (event.data.scramjet$type === "init") {
                    this.connected = true;
                } else {
                    this.handleMessage(event.data);
                }
            }
        });
        this.messageChannel.port1.start();
        this.handle.postMessage({
            scramjet$type: "init",
            scramjet$port: this.messageChannel.port2
        }, [
            this.messageChannel.port2
        ]);
    }
    handleMessage(data) {
        const cb = this.promises[data.scramjet$token];
        if (cb) {
            cb(data);
            delete this.promises[data.scramjet$token];
        }
    }
    async fetch(request) {
        const token = this.syncToken++;
        const message = {
            scramjet$type: "fetch",
            scramjet$token: token,
            scramjet$request: {
                url: request.url,
                body: request.body,
                headers: Array.from(request.headers.entries()),
                method: request.method,
                mode: request.mode,
                destinitation: request.destination
            }
        };
        const transfer = request.body ? [
            request.body
        ] : [];
        this.handle.postMessage(message, transfer);
        const { scramjet$response: r } = await new Promise((resolve)=>{
            this.promises[token] = resolve;
        });
        if (!r) return false;
        return new Response(r.body, {
            headers: r.headers,
            status: r.status,
            statusText: r.statusText
        });
    }
}


}),
"./src/worker/fetch.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ScramjetHandleResponseEvent: function() { return ScramjetHandleResponseEvent; },
  ScramjetRequestEvent: function() { return ScramjetRequestEvent; },
  handleFetch: function() { return handleFetch; }
});
/* ESM import */var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ "./src/worker/error.ts");
/* ESM import */var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared */ "./src/shared.ts");
/* ESM import */var _scramjet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scramjet */ "./src/scramjet.ts");



function newmeta(url) {
    return {
        origin: url,
        base: url
    };
}
async function handleFetch(request, client) {
    const urlParam = new URLSearchParams(new URL(request.url).search);
    if (urlParam.has("url")) {
        return Response.redirect((0,_shared__WEBPACK_IMPORTED_MODULE_1__.rewriteUrl)(urlParam.get("url"), newmeta(new URL(urlParam.get("url")))));
    }
    try {
        const requesturl = new URL(request.url);
        let workertype = "";
        if (requesturl.searchParams.has("type")) {
            workertype = requesturl.searchParams.get("type");
            requesturl.searchParams.delete("type");
        }
        if (requesturl.searchParams.has("dest")) {
            requesturl.searchParams.delete("dest");
        }
        if (requesturl.pathname.startsWith(this.config.prefix + "blob:") || requesturl.pathname.startsWith(this.config.prefix + "data:")) {
            let dataurl = requesturl.pathname.substring(this.config.prefix.length);
            if (dataurl.startsWith("blob:")) {
                dataurl = (0,_shared__WEBPACK_IMPORTED_MODULE_1__.unrewriteBlob)(dataurl);
            }
            const response = await fetch(dataurl, {});
            const url = dataurl.startsWith("blob:") ? dataurl : "(data url)";
            response.finalURL = url;
            let body;
            if (response.body) {
                body = await rewriteBody(response, client ? {
                    base: new URL(new URL(client.url).origin),
                    origin: new URL(new URL(client.url).origin)
                } : newmeta(new URL((0,_shared__WEBPACK_IMPORTED_MODULE_1__.unrewriteUrl)(request.referrer))), request.destination, workertype, this.cookieStore);
            }
            const headers = Object.fromEntries(response.headers.entries());
            if (crossOriginIsolated) {
                headers["Cross-Origin-Opener-Policy"] = "same-origin";
                headers["Cross-Origin-Embedder-Policy"] = "require-corp";
            }
            return new Response(body, {
                status: response.status,
                statusText: response.statusText,
                headers: headers
            });
        }
        const url = new URL((0,_shared__WEBPACK_IMPORTED_MODULE_1__.unrewriteUrl)(requesturl));
        const activeWorker = this.serviceWorkers.find((w)=>w.origin === url.origin);
        if (activeWorker && activeWorker.connected && urlParam.get("from") !== "swruntime") {
            // TODO: check scope
            const r = await activeWorker.fetch(request);
            if (r) return r;
        }
        if (url.origin == new URL(request.url).origin) {
            throw new Error("attempted to fetch from same origin - this means the site has obtained a reference to the real origin, aborting");
        }
        const headers = new _shared__WEBPACK_IMPORTED_MODULE_1__.ScramjetHeaders();
        for (const [key, value] of request.headers.entries()){
            headers.set(key, value);
        }
        if (client && new URL(client.url).pathname.startsWith(_scramjet__WEBPACK_IMPORTED_MODULE_2__.$scramjet.config.prefix)) {
            // TODO: i was against cors emulation but we might actually break stuff if we send full origin/referrer always
            const clientURL = new URL((0,_shared__WEBPACK_IMPORTED_MODULE_1__.unrewriteUrl)(client.url));
            if (clientURL.toString().includes("youtube.com")) {
            // console.log(headers);
            } else {
                headers.set("Referer", clientURL.toString());
                headers.set("Origin", clientURL.origin);
            }
        }
        const cookies = this.cookieStore.getCookies(url, false);
        if (cookies.length) {
            headers.set("Cookie", cookies);
        }
        headers.set("Sec-Fetch-Dest", request.destination);
        //TODO: Emulate this later (like really)
        headers.set("Sec-Fetch-Site", "same-origin");
        headers.set("Sec-Fetch-Mode", request.mode === "cors" ? request.mode : "same-origin");
        const ev = new ScramjetRequestEvent(url, request.body, request.method, request.destination, client, headers.headers);
        this.dispatchEvent(ev);
        const response = ev.response || await this.client.fetch(ev.url, {
            method: ev.method,
            body: ev.body,
            headers: ev.requestHeaders,
            credentials: "omit",
            mode: request.mode === "cors" ? request.mode : "same-origin",
            cache: request.cache,
            redirect: "manual",
            //@ts-ignore why the fuck is this not typed mircosoft
            duplex: "half"
        });
        return await handleResponse(url, workertype, request.destination, response, this.cookieStore, client, this);
    } catch (err) {
        const errorDetails = {
            message: err.message,
            url: request.url,
            destination: request.destination,
            timestamp: new Date().toISOString()
        };
        if (err.stack) {
            errorDetails["stack"] = err.stack;
        }
        console.error("ERROR FROM SERVICE WORKER FETCH: ", errorDetails);
        if (![
            "document",
            "iframe"
        ].includes(request.destination)) return new Response(undefined, {
            status: 500
        });
        const formattedError = Object.entries(errorDetails).map(([key, value])=>`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`).join("\n\n");
        return (0,_error__WEBPACK_IMPORTED_MODULE_0__.renderError)(formattedError, (0,_shared__WEBPACK_IMPORTED_MODULE_1__.unrewriteUrl)(request.url));
    }
}
async function handleResponse(url, workertype, destination, response, cookieStore, client, swtarget) {
    let responseBody;
    const responseHeaders = (0,_shared__WEBPACK_IMPORTED_MODULE_1__.rewriteHeaders)(response.rawHeaders, newmeta(url));
    const maybeHeaders = responseHeaders["set-cookie"] || [];
    for(const cookie in maybeHeaders){
        if (client) client.postMessage({
            scramjet$type: "cookie",
            cookie,
            url: url.href
        });
    }
    await cookieStore.setCookies(maybeHeaders instanceof Array ? maybeHeaders : [
        maybeHeaders
    ], url);
    for(const header in responseHeaders){
        // flatten everything past here
        if (Array.isArray(responseHeaders[header])) responseHeaders[header] = responseHeaders[header][0];
    }
    if (response.body) {
        responseBody = await rewriteBody(response, newmeta(url), destination, workertype, cookieStore);
    }
    // downloads
    if ([
        "document",
        "iframe"
    ].includes(destination)) {
        const header = responseHeaders["content-disposition"];
        // validate header and test for filename
        if (!/\s*?((inline|attachment);\s*?)filename=/i.test(header)) {
            // if filename= wasn"t specified then maybe the remote specified to download this as an attachment?
            // if it"s invalid then we can still possibly test for the attachment/inline type
            const type = /^\s*?attachment/i.test(header) ? "attachment" : "inline";
            // set the filename
            const [filename] = new URL(response.finalURL).pathname.split("/").slice(-1);
            responseHeaders["content-disposition"] = `${type}; filename=${JSON.stringify(filename)}`;
        }
    }
    if (responseHeaders["accept"] === "text/event-stream") {
        responseHeaders["content-type"] = "text/event-stream";
    }
    // scramjet runtime can use features that permissions-policy blocks
    delete responseHeaders["permissions-policy"];
    if (crossOriginIsolated && [
        "document",
        "iframe",
        "worker",
        "sharedworker",
        "style",
        "script"
    ].includes(destination)) {
        responseHeaders["Cross-Origin-Embedder-Policy"] = "require-corp";
        responseHeaders["Cross-Origin-Opener-Policy"] = "same-origin";
    }
    const ev = new ScramjetHandleResponseEvent(responseBody, responseHeaders, response.status, response.statusText, destination, url, response, client);
    swtarget.dispatchEvent(ev);
    return new Response(ev.responseBody, {
        headers: ev.responseHeaders,
        status: ev.status,
        statusText: ev.statusText
    });
}
async function rewriteBody(response, meta, destination, workertype, cookieStore) {
    switch(destination){
        case "iframe":
        case "document":
            if (response.headers.get("content-type")?.startsWith("text/html")) {
                return (0,_shared__WEBPACK_IMPORTED_MODULE_1__.rewriteHtml)(await response.text(), cookieStore, meta, true);
            } else {
                return response.body;
            }
        case "script":
            return (0,_shared__WEBPACK_IMPORTED_MODULE_1__.rewriteJs)(await response.arrayBuffer(), response.finalURL, meta);
        case "style":
            return (0,_shared__WEBPACK_IMPORTED_MODULE_1__.rewriteCss)(await response.text(), meta);
        case "sharedworker":
        case "worker":
            return (0,_shared__WEBPACK_IMPORTED_MODULE_1__.rewriteWorkers)(await response.arrayBuffer(), workertype, response.finalURL, meta);
        default:
            return response.body;
    }
}
class ScramjetHandleResponseEvent extends Event {
    responseBody;
    responseHeaders;
    status;
    statusText;
    destination;
    url;
    rawResponse;
    client;
    constructor(responseBody, responseHeaders, status, statusText, destination, url, rawResponse, client){
        super("handleResponse"), this.responseBody = responseBody, this.responseHeaders = responseHeaders, this.status = status, this.statusText = statusText, this.destination = destination, this.url = url, this.rawResponse = rawResponse, this.client = client;
    }
}
class ScramjetRequestEvent extends Event {
    url;
    body;
    method;
    destination;
    client;
    requestHeaders;
    constructor(url, body, method, destination, client, requestHeaders){
        super("request"), this.url = url, this.body = body, this.method = method, this.destination = destination, this.client = client, this.requestHeaders = requestHeaders;
    }
    response;
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
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ScramjetServiceWorker: function() { return ScramjetServiceWorker; }
});
/* ESM import */var _fakesw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fakesw */ "./src/worker/fakesw.ts");
/* ESM import */var _fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch */ "./src/worker/fetch.ts");
/* ESM import */var _scramjet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scramjet */ "./src/scramjet.ts");
/* provided dependency */ var dbg = __webpack_require__(/*! ./src/log.ts */ "./src/log.ts")["default"];



class ScramjetServiceWorker extends EventTarget {
    client;
    config;
    syncPool = {};
    synctoken = 0;
    cookieStore = new _scramjet__WEBPACK_IMPORTED_MODULE_2__.$scramjet.shared.CookieStore();
    serviceWorkers = [];
    constructor(){
        super();
        this.client = new _scramjet__WEBPACK_IMPORTED_MODULE_2__.$scramjet.shared.util.BareClient();
        const db = indexedDB.open("$scramjet", 1);
        db.onsuccess = ()=>{
            const res = db.result;
            const tx = res.transaction("cookies", "readonly");
            const store = tx.objectStore("cookies");
            const cookies = store.get("cookies");
            cookies.onsuccess = ()=>{
                if (cookies.result) {
                    this.cookieStore.load(cookies.result);
                    dbg.log("Loaded cookies from IDB!");
                }
            };
        };
        addEventListener("message", async ({ data })=>{
            if (!("scramjet$type" in data)) return;
            if (data.scramjet$type === "registerServiceWorker") {
                this.serviceWorkers.push(new _fakesw__WEBPACK_IMPORTED_MODULE_0__.FakeServiceWorker(data.port, data.origin));
                return;
            }
            if (data.scramjet$type === "cookie") {
                this.cookieStore.setCookies([
                    data.cookie
                ], new URL(data.url));
                const res = db.result;
                const tx = res.transaction("cookies", "readwrite");
                const store = tx.objectStore("cookies");
                store.put(JSON.parse(this.cookieStore.dump()), "cookies");
            }
        });
    }
    async loadConfig() {
        if (this.config) return;
        const request = indexedDB.open("$scramjet", 1);
        return new Promise((resolve, reject)=>{
            request.onsuccess = async ()=>{
                const db = request.result;
                const tx = db.transaction("config", "readonly");
                const store = tx.objectStore("config");
                const config = store.get("config");
                config.onsuccess = ()=>{
                    this.config = config.result;
                    _scramjet__WEBPACK_IMPORTED_MODULE_2__.$scramjet.config = config.result;
                    (0,_scramjet__WEBPACK_IMPORTED_MODULE_2__.loadCodecs)();
                    resolve();
                };
                config.onerror = ()=>reject(config.error);
            };
            request.onerror = ()=>reject(request.error);
        });
    }
    route({ request }) {
        if (request.url.startsWith(location.origin + this.config.prefix)) return true;
        else return false;
    }
    async fetch({ request, clientId }) {
        const client = await self.clients.get(clientId);
        return _fetch__WEBPACK_IMPORTED_MODULE_1__.handleFetch.call(this, request, client);
    }
}
// @ts-ignore
self.ScramjetServiceWorker = ScramjetServiceWorker;

})()
;
//# sourceMappingURL=scramjet.worker.js.map