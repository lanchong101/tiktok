!function () { var t = { 9638: function (t) { "use strict"; t.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA0NSA1MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMzLjA4NiAwSDI0LjIwNzRWMzUuNDIwM0MyNC4yMDc0IDM5LjY0MDYgMjAuNzkyNiA0My4xMDcyIDE2LjU0MyA0My4xMDcyQzEyLjI5MzQgNDMuMTA3MiA4Ljg3ODU4IDM5LjY0MDYgOC44Nzg1OCAzNS40MjAzQzguODc4NTggMzEuMjc1NCAxMi4yMTc1IDI3Ljg4NDEgMTYuMzE1MyAyNy43MzMzVjE4Ljg0MDZDNy4yODQ5OSAxOC45OTEzIDAgMjYuMzAxNCAwIDM1LjQyMDNDMCA0NC42MTQ1IDcuNDM2NzYgNTIgMTYuNjE4OSA1MkMyNS44MDEgNTIgMzMuMjM3OCA0NC41MzkxIDMzLjIzNzggMzUuNDIwM1YxNy4yNThDMzYuNTc2NyAxOS42Njk2IDQwLjY3NDUgMjEuMTAxNCA0NSAyMS4xNzY4VjEyLjI4NDFDMzguMzIyMSAxMi4wNTggMzMuMDg2IDYuNjMxODggMzMuMDg2IDBaIiBmaWxsPSIjMTYxODIzIi8+Cjwvc3ZnPgo=" }, 4635: function (t, e, n) { "use strict"; n.r(e), n.d(e, { EMBED_TYPE: function () { return p }, LIB_CDN_PREFIX: function () { return r }, LIB_CSS_ID: function () { return i }, LIB_SCRIPT_ID: function () { return o }, LIB_VERSION_DEFAULT: function () { return u }, LIB_VERSION_PREFIX: function () { return a }, SS_MOUNTING: function () { return m }, SS_NEWMOUNT: function () { return h }, TT_GLOBAL_CLASS: function () { return d }, TT_GLOBAL_DATA: function () { return s }, TT_GLOBAL_PREFIX: function () { return g }, TT_GLOBAL_TAG: function () { return l }, TT_MESSAGE_EVENT: function () { return f }, TT_PRE_CONNECT_DOMAINS_MAP: function () { return y }, TT_WEB: function () { return c } }); var r = "".concat("https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/tiktok/falcon/embed"), i = "ttEmbedLibCSS", o = "ttEmbedLibScript", a = "embed_lib_v", u = n("5589").version, c = "https://www.tiktok.com", l = "tiktok_blockquote", s = "tiktokEmbed", d = "tiktok-embed", f = "message", g = "__tt_embed__", m = "mounting", h = "newmount", p = Object.freeze({ CREATOR: "creator", VIDEO: "video", TAG: "tag", MUSIC: "music", TRENDING: "trending", CURATED: "curated" }), y = { TTP: ["https://www.tiktok.com", "https://lf16-tiktok-web.tiktokcdn-us.com", "https://libraweb.tiktokw.us"], VA: ["https://www.tiktok.com", "https://sf16-website-login.neutral.ttwstatic.com", "https://libraweb-va.tiktok.com"], SG: ["https://www.tiktok.com", "https://sf16-website-login.neutral.ttwstatic.com", "https://libraweb-sg.tiktok.com"], GCP: ["https://www.tiktok.com", "https://sf16-website-login.neutral.ttwstatic.com", "https://libraweb.tiktokw.eu"], EU_TTP: ["https://www.tiktok.com", "https://sf16-website-login.neutral.ttwstatic.com", "https://libraweb.tiktokw.eu"], Default: ["https://www.tiktok.com", "https://lf16-tiktok-web.tiktokcdn-us.com", "https://libraweb.tiktokw.us"] } }, 6881: function (t, e, n) { "use strict"; n.r(e); var r, i, o = n("6150"), a = n("3830"), u = n("2062"), c = n("8956"), l = n("8965"); n("3748"); var s = n("4635"), d = n("857"); r = window, i = new (function () { function t() { (0, a._)(this, t) } return (0, u._)(t, [{ key: "lang", get: function () { var t = (0, d.getUrlParameter)("hl") || (0, d.getUrlParameter)("lang"), e = ""; try { e = navigator.language || navigator.userLanguage } catch (t) { e = "" } return t || e } }, { key: "init", value: function () { var t = this; return (0, o._)(function () { return (0, l._)(this, function (e) { return r[s.TT_GLOBAL_DATA].isEventsInit = !0, t.receiveMessage = t.receiveMessage.bind(t), r.addEventListener(s.TT_MESSAGE_EVENT, t.receiveMessage), d.Log.info("\n\nWe're hiring!\nAre you ready to make a change?\nCheck out some of our available positions at https://careers.tiktok.com/"), [2] }) })() } }, { key: "render", value: function (t) { var e = this; return (0, o._)(function () { var n, r, i, a, u, c, f, g, m, h, p, y, _; return (0, l._)(this, function (b) { switch (b.label) { case 0: if (!t.length) return [2]; n = !0, r = !1, i = void 0; try { for (a = (0, s.TT_PRE_CONNECT_DOMAINS_MAP).TTP[Symbol.iterator](); !(n = (u = a.next()).done); n = !0)c = u.value, e.addPreConnectInstruction(c) } catch (t) { r = !0, i = t } finally { try { !n && null != a.return && a.return() } finally { if (r) throw i } } f = (0, d.separateChildList)(t, 3), g = !0, m = !1, h = void 0, b.label = 1; case 1: b.trys.push([1, 6, 7, 8]), p = f[Symbol.iterator](), b.label = 2; case 2: var v; if (g = (y = p.next()).done) return [3, 5]; return [4, Promise.all(y.value.map((v = (0, o._)(function (t) { var n, r, i, o, a, u, c, s, f, g, m, h, p, y, _, b; return (0, l._)(this, function (l) { switch (l.label) { case 0: return i = void 0 === (r = (n = t.dataset).videoId) ? null : r, a = void 0 === (o = n.uniqueId) ? null : o, c = void 0 === (u = n.musicId) ? null : u, f = void 0 === (s = n.tagId) ? null : s, m = void 0 === (g = n.embedType) ? null : g, p = void 0 === (h = n.embedFrom) ? null : h, _ = void 0 === (y = n.videoIdList) ? null : y, b = "v".concat((0, d.genHashID)()), t.id = b, [4, e.setDOM({ domId: b, videoId: i, uniqueId: a, musicId: c, tagId: f, embedType: m, embedFrom: p, videoIdList: _ })]; case 1: return l.sent(), [2] } }) }), function (t) { return v.apply(this, arguments) })))]; case 3: b.sent(), b.label = 4; case 4: return g = !0, [3, 2]; case 5: return [3, 8]; case 6: return _ = b.sent(), m = !0, h = _, [3, 8]; case 7: try { !g && null != p.return && p.return() } finally { if (m) throw h } return [7]; case 8: return [2] } }) })() } }, { key: "setDOM", value: function (t) { var e = t.domId, n = t.videoId, r = t.uniqueId, i = t.musicId, a = t.tagId, u = t.embedType, c = t.embedFrom, s = t.videoIdList, d = this; return (0, o._)(function () { return (0, l._)(this, function (t) { return [2, new Promise(function (t) { var o = document.getElementById(e), l = document.createDocumentFragment(), f = document.createElement("iframe"); f.style.width = 0, f.style.height = 0, f.style.display = "none", f.style.visibility = "hidden", f.name = d.genSignalSource(e), f.sandbox = "allow-popups allow-popups-to-escape-sandbox allow-scripts allow-top-navigation allow-same-origin"; var g = d.getEmbedUrl(u, r, n, i, a), m = d.getQueryStr(d.lang, c, u, s); f.src = "".concat(g).concat(m), f.onload = function () { d.renderIframe(f), t(e) }, l.appendChild(f), o.appendChild(l) })] }) })() } }, { key: "getEmbedUrl", value: function (t, e, n, r, i) { var o = ""; return t === s.EMBED_TYPE.CREATOR && e ? o = "".concat(s.TT_WEB, "/embed/@").concat(e) : t === s.EMBED_TYPE.TAG && i ? o = "".concat(s.TT_WEB, "/embed/tag/").concat(i) : t === s.EMBED_TYPE.MUSIC && r ? o = "".concat(s.TT_WEB, "/embed/music/").concat(r) : t === s.EMBED_TYPE.TRENDING ? o = "".concat(s.TT_WEB, "/embed/trending") : t === s.EMBED_TYPE.CURATED ? o = "".concat(s.TT_WEB, "/embed/curated") : (t === s.EMBED_TYPE.VIDEO || null === t) && (o = "".concat(s.TT_WEB, "/embed/v2/").concat(n)), o } }, { key: "getQueryStr", value: function (t, e, n, i) { var o, a = ""; t && (a = "?lang=".concat(t)); try { o = r.top.location.href } catch (t) { o = r.location.href } if ((o = encodeURIComponent(o)) && (a = a.length ? "".concat(a, "&referrer=").concat(o) : "?referrer=".concat(o)), e && (a = a.length ? "".concat(a, "&embedFrom=").concat(e) : "?embedFrom=".concat(e)), n === s.EMBED_TYPE.CURATED && "" !== i) { var u = new URLSearchParams; u.append("videoIds", i), a = a.length ? "".concat(a, "&").concat(u.toString()) : "?".concat(u.toString()) } return a } }, { key: "genSignalSource", value: function (t) { return "".concat(s.TT_GLOBAL_PREFIX).concat(t) } }, { key: "getSignalId", value: function (t) { var e = new RegExp("".concat(s.TT_GLOBAL_PREFIX, "(\\w+)")), n = (0, c._)(e.exec(t) || [], 2); return n[0], n[1] } }, { key: "renderIframe", value: function (t) { var e = t.parentNode.firstElementChild; t.parentNode.removeChild(e), t.style.width = "100%", t.style.height = "100%", t.style.display = "block", t.style.visibility = "unset" } }, { key: "resizeIframeHeight", value: function (t, e) { if (!t || !e) return !1; var n = document.documentElement.clientHeight; e > n ? (t.style.height = "".concat(e, "px"), t.style.maxHeight = "") : (t.style.height = "".concat(e, "px"), t.style.maxHeight = "".concat(e, "px")) } }, { key: "receiveMessage", value: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.origin, n = t.data; if ((void 0 === e ? "" : e) !== s.TT_WEB) return !1; var i = {}; try { i = JSON.parse(void 0 === n ? "{}" : n) } catch (t) { i = {} } var o = i.signalSource, a = void 0 === o ? "" : o, u = i.height, c = i.link; if (!(-1 !== a.indexOf(s.TT_GLOBAL_PREFIX))) return !1; if (u) { var l = this.getSignalId(a), d = document.querySelector("#".concat(l, " > iframe")); this.resizeIframeHeight(d, u) } else if (c) { var f = document.createElement("a"); f.href = c; var g = 0 === String(c).toLowerCase().indexOf("http"); f.target = function () { try { return r.self !== r.top } catch (t) { return !0 } }() && g ? "_blank" : "_top", f.click() } } }, { key: "addPreConnectInstruction", value: function (t) { var e = document.createElement("link"); e.rel = "preconnect", e.href = t, e.crossOrigin = "", document.head.appendChild(e) } }]), t }()), r[s.TT_GLOBAL_DATA] = { lib: i, isEventsInit: !1 }, i.init() }, 857: function (t, e, n) { "use strict"; function r() { return Math.round(1e17 * Math.random()) } function i() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 ? arguments[2] : void 0; return t.length && e ? t.reduce(function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], r = arguments.length > 1 ? arguments[1] : void 0, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o = Math.floor(i / e); return !t[o] && (t[o] = []), n ? t[o].push(r[n]) : t[o].push(r), t }, []) : [] } n.r(e), n.d(e, { Log: function () { return u }, genHashID: function () { return r }, getUrlParameter: function () { return c }, separateChildList: function () { return i } }); var o, a, u = (o = {}, a = function (t) { return "[".concat("TikTok", "] ").concat(t.toString()) }, ["error", "log", "info"].forEach(function (t) { o[t] = function (e) { "info" === t ? console[t]("%c".concat(a(e)), "color: #fe2c55") : console[t](a(e)) } }), o); function c(t) { var e = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"), n = new RegExp("[\\?&]".concat(e, "=([^&#]*)")).exec(location.search); return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " ")) } }, 3748: function (t) { }, 7245: function (t, e, n) { "use strict"; function r(t, e) { (null == e || e > t.length) && (e = t.length); for (var n = 0, r = Array(e); n < e; n++)r[n] = t[n]; return r } n.r(e), n.d(e, { _array_like_to_array: function () { return r } }) }, 241: function (t, e, n) { "use strict"; function r(t) { if (Array.isArray(t)) return t } n.r(e), n.d(e, { _array_with_holes: function () { return r } }) }, 6150: function (t, e, n) { "use strict"; function r(t, e, n, r, i, o, a) { try { var u = t[o](a), c = u.value } catch (t) { n(t); return } u.done ? e(c) : Promise.resolve(c).then(r, i) } function i(t) { return function () { var e = this, n = arguments; return new Promise(function (i, o) { var a = t.apply(e, n); function u(t) { r(a, i, o, u, c, "next", t) } function c(t) { r(a, i, o, u, c, "throw", t) } u(void 0) }) } } n.r(e), n.d(e, { _: function () { return i } }) }, 3830: function (t, e, n) { "use strict"; function r(t, e) { if (!(t instanceof e)) throw TypeError("Cannot call a class as a function") } n.r(e), n.d(e, { _: function () { return r } }) }, 2062: function (t, e, n) { "use strict"; function r(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } } function i(t, e, n) { return e && r(t.prototype, e), n && r(t, n), t } n.r(e), n.d(e, { _: function () { return i } }) }, 6287: function (t, e, n) { "use strict"; function r(t, e) { var n, r, i = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (null != i) { var o = [], a = !0, u = !1; try { for (i = i.call(t); !(a = (n = i.next()).done) && (o.push(n.value), !e || o.length !== e); a = !0); } catch (t) { u = !0, r = t } finally { try { !a && null != i.return && i.return() } finally { if (u) throw r } } return o } } n.r(e), n.d(e, { _iterable_to_array_limit: function () { return r } }) }, 9129: function (t, e, n) { "use strict"; function r() { throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } n.r(e), n.d(e, { _non_iterable_rest: function () { return r } }) }, 8956: function (t, e, n) { "use strict"; n.r(e), n.d(e, { _: function () { return u } }); var r = n("241"), i = n("6287"), o = n("9129"), a = n("7501"); function u(t, e) { return (0, r._array_with_holes)(t) || (0, i._iterable_to_array_limit)(t, e) || (0, a._unsupported_iterable_to_array)(t, e) || (0, o._non_iterable_rest)() } }, 8965: function (t, e, n) { "use strict"; n.r(e), n.d(e, { _: function () { return r.__generator } }); var r = n("9508") }, 7501: function (t, e, n) { "use strict"; n.r(e), n.d(e, { _unsupported_iterable_to_array: function () { return i } }); var r = n("7245"); function i(t, e) { if (t) { if ("string" == typeof t) return (0, r._array_like_to_array)(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(n); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0, r._array_like_to_array)(t, e) } } }, 9508: function (t, e, n) { "use strict"; n.r(e), n.d(e, { __generator: function () { return r } }); function r(t, e) { var n, r, i, o, a = { label: 0, sent: function () { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: u(0), throw: u(1), return: u(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function () { return this }), o; function u(u) { return function (c) { return function (u) { if (n) throw TypeError("Generator is already executing."); for (; o && (o = 0, u[0] && (a = 0)), a;)try { if (n = 1, r && (i = 2 & u[0] ? r.return : u[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, u[1])).done) return i; switch (r = 0, i && (u = [2 & u[0], i.value]), u[0]) { case 0: case 1: i = u; break; case 4: return a.label++, { value: u[1], done: !1 }; case 5: a.label++, r = u[1], u = [0]; continue; case 7: u = a.ops.pop(), a.trys.pop(); continue; default: if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === u[0] || 2 === u[0])) { a = 0; continue } if (3 === u[0] && (!i || u[1] > i[0] && u[1] < i[3])) { a.label = u[1]; break } if (6 === u[0] && a.label < i[1]) { a.label = i[1], i = u; break } if (i && a.label < i[2]) { a.label = i[2], a.ops.push(u); break } i[2] && a.ops.pop(), a.trys.pop(); continue }u = e.call(t, a) } catch (t) { u = [6, t], r = 0 } finally { n = i = 0 } if (5 & u[0]) throw u[1]; return { value: u[0] ? u[1] : void 0, done: !0 } }([u, c]) } } } "function" == typeof SuppressedError && SuppressedError }, 5589: function (t) { "use strict"; t.exports = JSON.parse('{"name":"tiktok_embed_v2","private":true,"version":"1.0.12","description":"TikTok Embed SDK","main":"index.js","scripts":{"test":"jest --forceExit","dev":"rsbuild dev --open","preview":"rsbuild preview","build":"rsbuild build","build:gcp":"NODE_REGION=GCP rsbuild build","build:dev":"rsbuild build -a","commit":"rsbuild push","feature":"rsbuild feature","mr":"rsbuild release -m","lint":"rsbuild-lint ./src --fix"},"keywords":["tiktok","embed"],"author":"yangminghui.jasmine, chloe.chao","license":"ISC","devDependencies":{"@rsbuild/core":"^0.3.5","@testing-library/dom":"^8.17.1","@testing-library/jest-dom":"^5.16.5","jest":"^28.1.3","jsdom":"^20.0.0"},"dependencies":{"core-js":"^2.5.7","promise":"^8.3.0","regenerator-runtime":"^0.14.1"},"husky":{"hooks":{"commit-msg":"commitlint .commitlintrc.js -E HUSKY_GIT_PARAMS","pre-commit":"lint-staged"}},"lint-staged":{"*":["eden lint format","git add"]}}') } }, e = {}; function n(r) { var i = e[r]; if (void 0 !== i) return i.exports; var o = e[r] = { exports: {} }; return t[r](o, o.exports, n), o.exports } n.d = function (t, e) { for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, { enumerable: !0, get: e[r] }) }, n.r = function (t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, n.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, n("6881") }();