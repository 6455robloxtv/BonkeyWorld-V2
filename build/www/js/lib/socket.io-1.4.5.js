var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).io = e()
}(this, (function() {
    "use strict";
    function t(e) {
        return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        t(e)
    }
    function e(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function n(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, (i = r.key,
            o = void 0,
            "symbol" == typeof (o = function(t, e) {
                if ("object" != typeof t || null === t)
                    return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(t, e || "default");
                    if ("object" != typeof r)
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(i, "string")) ? o : String(o)), r)
        }
        var i, o
    }
    function r(t, e, r) {
        return e && n(t.prototype, e),
        r && n(t, r),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        t
    }
    function i() {
        return i = Object.assign ? Object.assign.bind() : function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }
        ,
        i.apply(this, arguments)
    }
    function o(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        e && a(t, e)
    }
    function s(t) {
        return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        s(t)
    }
    function a(t, e) {
        return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        ,
        a(t, e)
    }
    function u() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ("function" == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
            ))),
            !0
        } catch (t) {
            return !1
        }
    }
    function c(t, e, n) {
        return c = u() ? Reflect.construct.bind() : function(t, e, n) {
            var r = [null];
            r.push.apply(r, e);
            var i = new (Function.bind.apply(t, r));
            return n && a(i, n.prototype),
            i
        }
        ,
        c.apply(null, arguments)
    }
    function h(t) {
        var e = "function" == typeof Map ? new Map : void 0;
        return h = function(t) {
            if (null === t || (n = t,
            -1 === Function.toString.call(n).indexOf("[native code]")))
                return t;
            var n;
            if ("function" != typeof t)
                throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== e) {
                if (e.has(t))
                    return e.get(t);
                e.set(t, r)
            }
            function r() {
                return c(t, arguments, s(this).constructor)
            }
            return r.prototype = Object.create(t.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            a(r, t)
        }
        ,
        h(t)
    }
    function f(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function l(t) {
        var e = u();
        return function() {
            var n, r = s(t);
            if (e) {
                var i = s(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else
                n = r.apply(this, arguments);
            return function(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e))
                    return e;
                if (void 0 !== e)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return f(t)
            }(this, n)
        }
    }
    function p() {
        return p = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
            var r = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = s(t)); )
                    ;
                return t
            }(t, e);
            if (r) {
                var i = Object.getOwnPropertyDescriptor(r, e);
                return i.get ? i.get.call(arguments.length < 3 ? t : n) : i.value
            }
        }
        ,
        p.apply(this, arguments)
    }
    function d(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++)
            r[n] = t[n];
        return r
    }
    function y(t, e) {
        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!n) {
            if (Array.isArray(t) || (n = function(t, e) {
                if (t) {
                    if ("string" == typeof t)
                        return d(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(t, e) : void 0
                }
            }(t)) || e && t && "number" == typeof t.length) {
                n && (t = n);
                var r = 0
                  , i = function() {};
                return {
                    s: i,
                    n: function() {
                        return r >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[r++]
                        }
                    },
                    e: function(t) {
                        throw t
                    },
                    f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, s = !0, a = !1;
        return {
            s: function() {
                n = n.call(t)
            },
            n: function() {
                var t = n.next();
                return s = t.done,
                t
            },
            e: function(t) {
                a = !0,
                o = t
            },
            f: function() {
                try {
                    s || null == n.return || n.return()
                } finally {
                    if (a)
                        throw o
                }
            }
        }
    }
    var v = Object.create(null);
    v.open = "0",
    v.close = "1",
    v.ping = "2",
    v.pong = "3",
    v.message = "4",
    v.upgrade = "5",
    v.noop = "6";
    var g = Object.create(null);
    Object.keys(v).forEach((function(t) {
        g[v[t]] = t
    }
    ));
    var m, b = {
        type: "error",
        data: "parser error"
    }, k = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === Object.prototype.toString.call(Blob), w = "function" == typeof ArrayBuffer, _ = function(t) {
        return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer
    }, A = function(t, e, n) {
        var r = t.type
          , i = t.data;
        return k && i instanceof Blob ? e ? n(i) : O(i, n) : w && (i instanceof ArrayBuffer || _(i)) ? e ? n(i) : O(new Blob([i]), n) : n(v[r] + (i || ""))
    }, O = function(t, e) {
        var n = new FileReader;
        return n.onload = function() {
            var t = n.result.split(",")[1];
            e("b" + (t || ""))
        }
        ,
        n.readAsDataURL(t)
    };
    function E(t) {
        return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer,t.byteOffset,t.byteLength)
    }
    for (var T = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", R = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), C = 0; C < 64; C++)
        R[T.charCodeAt(C)] = C;
    var B, S = "function" == typeof ArrayBuffer, N = function(t, e) {
        if ("string" != typeof t)
            return {
                type: "message",
                data: x(t, e)
            };
        var n = t.charAt(0);
        return "b" === n ? {
            type: "message",
            data: L(t.substring(1), e)
        } : g[n] ? t.length > 1 ? {
            type: g[n],
            data: t.substring(1)
        } : {
            type: g[n]
        } : b
    }, L = function(t, e) {
        if (S) {
            var n = function(t) {
                var e, n, r, i, o, s = .75 * t.length, a = t.length, u = 0;
                "=" === t[t.length - 1] && (s--,
                "=" === t[t.length - 2] && s--);
                var c = new ArrayBuffer(s)
                  , h = new Uint8Array(c);
                for (e = 0; e < a; e += 4)
                    n = R[t.charCodeAt(e)],
                    r = R[t.charCodeAt(e + 1)],
                    i = R[t.charCodeAt(e + 2)],
                    o = R[t.charCodeAt(e + 3)],
                    h[u++] = n << 2 | r >> 4,
                    h[u++] = (15 & r) << 4 | i >> 2,
                    h[u++] = (3 & i) << 6 | 63 & o;
                return c
            }(t);
            return x(n, e)
        }
        return {
            base64: !0,
            data: t
        }
    }, x = function(t, e) {
        return "blob" === e ? t instanceof Blob ? t : new Blob([t]) : t instanceof ArrayBuffer ? t : t.buffer
    }, P = String.fromCharCode(30);
    function q() {
        return new TransformStream({
            transform: function(t, e) {
                !function(t, e) {
                    k && t.data instanceof Blob ? t.data.arrayBuffer().then(E).then(e) : w && (t.data instanceof ArrayBuffer || _(t.data)) ? e(E(t.data)) : A(t, !1, (function(t) {
                        m || (m = new TextEncoder),
                        e(m.encode(t))
                    }
                    ))
                }(t, (function(n) {
                    var r, i = n.length;
                    if (i < 126)
                        r = new Uint8Array(1),
                        new DataView(r.buffer).setUint8(0, i);
                    else if (i < 65536) {
                        r = new Uint8Array(3);
                        var o = new DataView(r.buffer);
                        o.setUint8(0, 126),
                        o.setUint16(1, i)
                    } else {
                        r = new Uint8Array(9);
                        var s = new DataView(r.buffer);
                        s.setUint8(0, 127),
                        s.setBigUint64(1, BigInt(i))
                    }
                    t.data && "string" != typeof t.data && (r[0] |= 128),
                    e.enqueue(r),
                    e.enqueue(n)
                }
                ))
            }
        })
    }
    function j(t) {
        return t.reduce((function(t, e) {
            return t + e.length
        }
        ), 0)
    }
    function D(t, e) {
        if (t[0].length === e)
            return t.shift();
        for (var n = new Uint8Array(e), r = 0, i = 0; i < e; i++)
            n[i] = t[0][r++],
            r === t[0].length && (t.shift(),
            r = 0);
        return t.length && r < t[0].length && (t[0] = t[0].slice(r)),
        n
    }
    function U(t) {
        if (t)
            return function(t) {
                for (var e in U.prototype)
                    t[e] = U.prototype[e];
                return t
            }(t)
    }
    U.prototype.on = U.prototype.addEventListener = function(t, e) {
        return this._callbacks = this._callbacks || {},
        (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e),
        this
    }
    ,
    U.prototype.once = function(t, e) {
        function n() {
            this.off(t, n),
            e.apply(this, arguments)
        }
        return n.fn = e,
        this.on(t, n),
        this
    }
    ,
    U.prototype.off = U.prototype.removeListener = U.prototype.removeAllListeners = U.prototype.removeEventListener = function(t, e) {
        if (this._callbacks = this._callbacks || {},
        0 == arguments.length)
            return this._callbacks = {},
            this;
        var n, r = this._callbacks["$" + t];
        if (!r)
            return this;
        if (1 == arguments.length)
            return delete this._callbacks["$" + t],
            this;
        for (var i = 0; i < r.length; i++)
            if ((n = r[i]) === e || n.fn === e) {
                r.splice(i, 1);
                break
            }
        return 0 === r.length && delete this._callbacks["$" + t],
        this
    }
    ,
    U.prototype.emit = function(t) {
        this._callbacks = this._callbacks || {};
        for (var e = new Array(arguments.length - 1), n = this._callbacks["$" + t], r = 1; r < arguments.length; r++)
            e[r - 1] = arguments[r];
        if (n) {
            r = 0;
            for (var i = (n = n.slice(0)).length; r < i; ++r)
                n[r].apply(this, e)
        }
        return this
    }
    ,
    U.prototype.emitReserved = U.prototype.emit,
    U.prototype.listeners = function(t) {
        return this._callbacks = this._callbacks || {},
        this._callbacks["$" + t] || []
    }
    ,
    U.prototype.hasListeners = function(t) {
        return !!this.listeners(t).length
    }
    ;
    var I = "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this")();
    function F(t) {
        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
            n[r - 1] = arguments[r];
        return n.reduce((function(e, n) {
            return t.hasOwnProperty(n) && (e[n] = t[n]),
            e
        }
        ), {})
    }
    var M = I.setTimeout
      , V = I.clearTimeout;
    function H(t, e) {
        e.useNativeTimers ? (t.setTimeoutFn = M.bind(I),
        t.clearTimeoutFn = V.bind(I)) : (t.setTimeoutFn = I.setTimeout.bind(I),
        t.clearTimeoutFn = I.clearTimeout.bind(I))
    }
    var K, Y = function(t) {
        o(i, t);
        var n = l(i);
        function i(t, r, o) {
            var s;
            return e(this, i),
            (s = n.call(this, t)).description = r,
            s.context = o,
            s.type = "TransportError",
            s
        }
        return r(i)
    }(h(Error)), W = function(t) {
        o(i, t);
        var n = l(i);
        function i(t) {
            var r;
            return e(this, i),
            (r = n.call(this)).writable = !1,
            H(f(r), t),
            r.opts = t,
            r.query = t.query,
            r.socket = t.socket,
            r
        }
        return r(i, [{
            key: "onError",
            value: function(t, e, n) {
                return p(s(i.prototype), "emitReserved", this).call(this, "error", new Y(t,e,n)),
                this
            }
        }, {
            key: "open",
            value: function() {
                return this.readyState = "opening",
                this.doOpen(),
                this
            }
        }, {
            key: "close",
            value: function() {
                return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(),
                this.onClose()),
                this
            }
        }, {
            key: "send",
            value: function(t) {
                "open" === this.readyState && this.write(t)
            }
        }, {
            key: "onOpen",
            value: function() {
                this.readyState = "open",
                this.writable = !0,
                p(s(i.prototype), "emitReserved", this).call(this, "open")
            }
        }, {
            key: "onData",
            value: function(t) {
                var e = N(t, this.socket.binaryType);
                this.onPacket(e)
            }
        }, {
            key: "onPacket",
            value: function(t) {
                p(s(i.prototype), "emitReserved", this).call(this, "packet", t)
            }
        }, {
            key: "onClose",
            value: function(t) {
                this.readyState = "closed",
                p(s(i.prototype), "emitReserved", this).call(this, "close", t)
            }
        }, {
            key: "pause",
            value: function(t) {}
        }, {
            key: "createUri",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return t + "://" + this._hostname() + this._port() + this.opts.path + this._query(e)
            }
        }, {
            key: "_hostname",
            value: function() {
                var t = this.opts.hostname;
                return -1 === t.indexOf(":") ? t : "[" + t + "]"
            }
        }, {
            key: "_port",
            value: function() {
                return this.opts.port && (this.opts.secure && Number(443 !== this.opts.port) || !this.opts.secure && 80 !== Number(this.opts.port)) ? ":" + this.opts.port : ""
            }
        }, {
            key: "_query",
            value: function(t) {
                var e = function(t) {
                    var e = "";
                    for (var n in t)
                        t.hasOwnProperty(n) && (e.length && (e += "&"),
                        e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
                    return e
                }(t);
                return e.length ? "?" + e : ""
            }
        }]),
        i
    }(U), z = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), J = 64, $ = {}, Q = 0, X = 0;
    function G(t) {
        var e = "";
        do {
            e = z[t % J] + e,
            t = Math.floor(t / J)
        } while (t > 0);
        return e
    }
    function Z() {
        var t = G(+new Date);
        return t !== K ? (Q = 0,
        K = t) : t + "." + G(Q++)
    }
    for (; X < J; X++)
        $[z[X]] = X;
    var tt = !1;
    try {
        tt = "undefined" != typeof XMLHttpRequest && "withCredentials"in new XMLHttpRequest
    } catch (t) {}
    var et = tt;
    function nt(t) {
        var e = t.xdomain;
        try {
            if ("undefined" != typeof XMLHttpRequest && (!e || et))
                return new XMLHttpRequest
        } catch (t) {}
        if (!e)
            try {
                return new (I[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
            } catch (t) {}
    }
    function rt() {}
    var it = null != new nt({
        xdomain: !1
    }).responseType
      , ot = function(t) {
        o(s, t);
        var n = l(s);
        function s(t) {
            var r;
            if (e(this, s),
            (r = n.call(this, t)).polling = !1,
            "undefined" != typeof location) {
                var i = "https:" === location.protocol
                  , o = location.port;
                o || (o = i ? "443" : "80"),
                r.xd = "undefined" != typeof location && t.hostname !== location.hostname || o !== t.port
            }
            var a = t && t.forceBase64;
            return r.supportsBinary = it && !a,
            r.opts.withCredentials && (r.cookieJar = void 0),
            r
        }
        return r(s, [{
            key: "name",
            get: function() {
                return "polling"
            }
        }, {
            key: "doOpen",
            value: function() {
                this.poll()
            }
        }, {
            key: "pause",
            value: function(t) {
                var e = this;
                this.readyState = "pausing";
                var n = function() {
                    e.readyState = "paused",
                    t()
                };
                if (this.polling || !this.writable) {
                    var r = 0;
                    this.polling && (r++,
                    this.once("pollComplete", (function() {
                        --r || n()
                    }
                    ))),
                    this.writable || (r++,
                    this.once("drain", (function() {
                        --r || n()
                    }
                    )))
                } else
                    n()
            }
        }, {
            key: "poll",
            value: function() {
                this.polling = !0,
                this.doPoll(),
                this.emitReserved("poll")
            }
        }, {
            key: "onData",
            value: function(t) {
                var e = this;
                (function(t, e) {
                    for (var n = t.split(P), r = [], i = 0; i < n.length; i++) {
                        var o = N(n[i], e);
                        if (r.push(o),
                        "error" === o.type)
                            break
                    }
                    return r
                }
                )(t, this.socket.binaryType).forEach((function(t) {
                    if ("opening" === e.readyState && "open" === t.type && e.onOpen(),
                    "close" === t.type)
                        return e.onClose({
                            description: "transport closed by the server"
                        }),
                        !1;
                    e.onPacket(t)
                }
                )),
                "closed" !== this.readyState && (this.polling = !1,
                this.emitReserved("pollComplete"),
                "open" === this.readyState && this.poll())
            }
        }, {
            key: "doClose",
            value: function() {
                var t = this
                  , e = function() {
                    t.write([{
                        type: "close"
                    }])
                };
                "open" === this.readyState ? e() : this.once("open", e)
            }
        }, {
            key: "write",
            value: function(t) {
                var e = this;
                this.writable = !1,
                function(t, e) {
                    var n = t.length
                      , r = new Array(n)
                      , i = 0;
                    t.forEach((function(t, o) {
                        A(t, !1, (function(t) {
                            r[o] = t,
                            ++i === n && e(r.join(P))
                        }
                        ))
                    }
                    ))
                }(t, (function(t) {
                    e.doWrite(t, (function() {
                        e.writable = !0,
                        e.emitReserved("drain")
                    }
                    ))
                }
                ))
            }
        }, {
            key: "uri",
            value: function() {
                var t = this.opts.secure ? "https" : "http"
                  , e = this.query || {};
                return !1 !== this.opts.timestampRequests && (e[this.opts.timestampParam] = Z()),
                this.supportsBinary || e.sid || (e.b64 = 1),
                this.createUri(t, e)
            }
        }, {
            key: "request",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return i(t, {
                    xd: this.xd,
                    cookieJar: this.cookieJar
                }, this.opts),
                new st(this.uri(),t)
            }
        }, {
            key: "doWrite",
            value: function(t, e) {
                var n = this
                  , r = this.request({
                    method: "POST",
                    data: t
                });
                r.on("success", e),
                r.on("error", (function(t, e) {
                    n.onError("xhr post error", t, e)
                }
                ))
            }
        }, {
            key: "doPoll",
            value: function() {
                var t = this
                  , e = this.request();
                e.on("data", this.onData.bind(this)),
                e.on("error", (function(e, n) {
                    t.onError("xhr poll error", e, n)
                }
                )),
                this.pollXhr = e
            }
        }]),
        s
    }(W)
      , st = function(t) {
        o(i, t);
        var n = l(i);
        function i(t, r) {
            var o;
            return e(this, i),
            H(f(o = n.call(this)), r),
            o.opts = r,
            o.method = r.method || "GET",
            o.uri = t,
            o.data = void 0 !== r.data ? r.data : null,
            o.create(),
            o
        }
        return r(i, [{
            key: "create",
            value: function() {
                var t, e = this, n = F(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
                n.xdomain = !!this.opts.xd;
                var r = this.xhr = new nt(n);
                try {
                    r.open(this.method, this.uri, !0);
                    try {
                        if (this.opts.extraHeaders)
                            for (var o in r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0),
                            this.opts.extraHeaders)
                                this.opts.extraHeaders.hasOwnProperty(o) && r.setRequestHeader(o, this.opts.extraHeaders[o])
                    } catch (t) {}
                    if ("POST" === this.method)
                        try {
                            r.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                        } catch (t) {}
                    try {
                        r.setRequestHeader("Accept", "*/*")
                    } catch (t) {}
                    null === (t = this.opts.cookieJar) || void 0 === t || t.addCookies(r),
                    "withCredentials"in r && (r.withCredentials = this.opts.withCredentials),
                    this.opts.requestTimeout && (r.timeout = this.opts.requestTimeout),
                    r.onreadystatechange = function() {
                        var t;
                        3 === r.readyState && (null === (t = e.opts.cookieJar) || void 0 === t || t.parseCookies(r)),
                        4 === r.readyState && (200 === r.status || 1223 === r.status ? e.onLoad() : e.setTimeoutFn((function() {
                            e.onError("number" == typeof r.status ? r.status : 0)
                        }
                        ), 0))
                    }
                    ,
                    r.send(this.data)
                } catch (t) {
                    return void this.setTimeoutFn((function() {
                        e.onError(t)
                    }
                    ), 0)
                }
                "undefined" != typeof document && (this.index = i.requestsCount++,
                i.requests[this.index] = this)
            }
        }, {
            key: "onError",
            value: function(t) {
                this.emitReserved("error", t, this.xhr),
                this.cleanup(!0)
            }
        }, {
            key: "cleanup",
            value: function(t) {
                if (void 0 !== this.xhr && null !== this.xhr) {
                    if (this.xhr.onreadystatechange = rt,
                    t)
                        try {
                            this.xhr.abort()
                        } catch (t) {}
                    "undefined" != typeof document && delete i.requests[this.index],
                    this.xhr = null
                }
            }
        }, {
            key: "onLoad",
            value: function() {
                var t = this.xhr.responseText;
                null !== t && (this.emitReserved("data", t),
                this.emitReserved("success"),
                this.cleanup())
            }
        }, {
            key: "abort",
            value: function() {
                this.cleanup()
            }
        }]),
        i
    }(U);
    if (st.requestsCount = 0,
    st.requests = {},
    "undefined" != typeof document)
        if ("function" == typeof attachEvent)
            attachEvent("onunload", at);
        else if ("function" == typeof addEventListener) {
            addEventListener("onpagehide"in I ? "pagehide" : "unload", at, !1)
        }
    function at() {
        for (var t in st.requests)
            st.requests.hasOwnProperty(t) && st.requests[t].abort()
    }
    var ut = "function" == typeof Promise && "function" == typeof Promise.resolve ? function(t) {
        return Promise.resolve().then(t)
    }
    : function(t, e) {
        return e(t, 0)
    }
      , ct = I.WebSocket || I.MozWebSocket
      , ht = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase()
      , ft = function(t) {
        o(i, t);
        var n = l(i);
        function i(t) {
            var r;
            return e(this, i),
            (r = n.call(this, t)).supportsBinary = !t.forceBase64,
            r
        }
        return r(i, [{
            key: "name",
            get: function() {
                return "websocket"
            }
        }, {
            key: "doOpen",
            value: function() {
                if (this.check()) {
                    var t = this.uri()
                      , e = this.opts.protocols
                      , n = ht ? {} : F(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
                    this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
                    try {
                        this.ws = ht ? new ct(t,e,n) : e ? new ct(t,e) : new ct(t)
                    } catch (t) {
                        return this.emitReserved("error", t)
                    }
                    this.ws.binaryType = this.socket.binaryType,
                    this.addEventListeners()
                }
            }
        }, {
            key: "addEventListeners",
            value: function() {
                var t = this;
                this.ws.onopen = function() {
                    t.opts.autoUnref && t.ws._socket.unref(),
                    t.onOpen()
                }
                ,
                this.ws.onclose = function(e) {
                    return t.onClose({
                        description: "websocket connection closed",
                        context: e
                    })
                }
                ,
                this.ws.onmessage = function(e) {
                    return t.onData(e.data)
                }
                ,
                this.ws.onerror = function(e) {
                    return t.onError("websocket error", e)
                }
            }
        }, {
            key: "write",
            value: function(t) {
                var e = this;
                this.writable = !1;
                for (var n = function() {
                    var n = t[r]
                      , i = r === t.length - 1;
                    A(n, e.supportsBinary, (function(t) {
                        try {
                            e.ws.send(t)
                        } catch (t) {}
                        i && ut((function() {
                            e.writable = !0,
                            e.emitReserved("drain")
                        }
                        ), e.setTimeoutFn)
                    }
                    ))
                }, r = 0; r < t.length; r++)
                    n()
            }
        }, {
            key: "doClose",
            value: function() {
                void 0 !== this.ws && (this.ws.close(),
                this.ws = null)
            }
        }, {
            key: "uri",
            value: function() {
                var t = this.opts.secure ? "wss" : "ws"
                  , e = this.query || {};
                return this.opts.timestampRequests && (e[this.opts.timestampParam] = Z()),
                this.supportsBinary || (e.b64 = 1),
                this.createUri(t, e)
            }
        }, {
            key: "check",
            value: function() {
                return !!ct
            }
        }]),
        i
    }(W)
      , lt = function(t) {
        o(i, t);
        var n = l(i);
        function i() {
            return e(this, i),
            n.apply(this, arguments)
        }
        return r(i, [{
            key: "name",
            get: function() {
                return "webtransport"
            }
        }, {
            key: "doOpen",
            value: function() {
                var t = this;
                "function" == typeof WebTransport && (this.transport = new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name]),
                this.transport.closed.then((function() {
                    t.onClose()
                }
                )).catch((function(e) {
                    t.onError("webtransport error", e)
                }
                )),
                this.transport.ready.then((function() {
                    t.transport.createBidirectionalStream().then((function(e) {
                        var n = function(t, e) {
                            B || (B = new TextDecoder);
                            var n = []
                              , r = 0
                              , i = -1
                              , o = !1;
                            return new TransformStream({
                                transform: function(s, a) {
                                    for (n.push(s); ; ) {
                                        if (0 === r) {
                                            if (j(n) < 1)
                                                break;
                                            var u = D(n, 1);
                                            o = 128 == (128 & u[0]),
                                            i = 127 & u[0],
                                            r = i < 126 ? 3 : 126 === i ? 1 : 2
                                        } else if (1 === r) {
                                            if (j(n) < 2)
                                                break;
                                            var c = D(n, 2);
                                            i = new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),
                                            r = 3
                                        } else if (2 === r) {
                                            if (j(n) < 8)
                                                break;
                                            var h = D(n, 8)
                                              , f = new DataView(h.buffer,h.byteOffset,h.length)
                                              , l = f.getUint32(0);
                                            if (l > Math.pow(2, 21) - 1) {
                                                a.enqueue(b);
                                                break
                                            }
                                            i = l * Math.pow(2, 32) + f.getUint32(4),
                                            r = 3
                                        } else {
                                            if (j(n) < i)
                                                break;
                                            var p = D(n, i);
                                            a.enqueue(N(o ? p : B.decode(p), e)),
                                            r = 0
                                        }
                                        if (0 === i || i > t) {
                                            a.enqueue(b);
                                            break
                                        }
                                    }
                                }
                            })
                        }(Number.MAX_SAFE_INTEGER, t.socket.binaryType)
                          , r = e.readable.pipeThrough(n).getReader()
                          , i = q();
                        i.readable.pipeTo(e.writable),
                        t.writer = i.writable.getWriter();
                        !function e() {
                            r.read().then((function(n) {
                                var r = n.done
                                  , i = n.value;
                                r || (t.onPacket(i),
                                e())
                            }
                            )).catch((function(t) {}
                            ))
                        }();
                        var o = {
                            type: "open"
                        };
                        t.query.sid && (o.data = '{"sid":"'.concat(t.query.sid, '"}')),
                        t.writer.write(o).then((function() {
                            return t.onOpen()
                        }
                        ))
                    }
                    ))
                }
                )))
            }
        }, {
            key: "write",
            value: function(t) {
                var e = this;
                this.writable = !1;
                for (var n = function() {
                    var n = t[r]
                      , i = r === t.length - 1;
                    e.writer.write(n).then((function() {
                        i && ut((function() {
                            e.writable = !0,
                            e.emitReserved("drain")
                        }
                        ), e.setTimeoutFn)
                    }
                    ))
                }, r = 0; r < t.length; r++)
                    n()
            }
        }, {
            key: "doClose",
            value: function() {
                var t;
                null === (t = this.transport) || void 0 === t || t.close()
            }
        }]),
        i
    }(W)
      , pt = {
        websocket: ft,
        webtransport: lt,
        polling: ot
    }
      , dt = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
      , yt = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
    function vt(t) {
        var e = t
          , n = t.indexOf("[")
          , r = t.indexOf("]");
        -1 != n && -1 != r && (t = t.substring(0, n) + t.substring(n, r).replace(/:/g, ";") + t.substring(r, t.length));
        for (var i, o, s = dt.exec(t || ""), a = {}, u = 14; u--; )
            a[yt[u]] = s[u] || "";
        return -1 != n && -1 != r && (a.source = e,
        a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"),
        a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"),
        a.ipv6uri = !0),
        a.pathNames = function(t, e) {
            var n = /\/{2,9}/g
              , r = e.replace(n, "/").split("/");
            "/" != e.slice(0, 1) && 0 !== e.length || r.splice(0, 1);
            "/" == e.slice(-1) && r.splice(r.length - 1, 1);
            return r
        }(0, a.path),
        a.queryKey = (i = a.query,
        o = {},
        i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, (function(t, e, n) {
            e && (o[e] = n)
        }
        )),
        o),
        a
    }
    var gt = function(n) {
        o(a, n);
        var s = l(a);
        function a(n) {
            var r, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return e(this, a),
            (r = s.call(this)).binaryType = "arraybuffer",
            r.writeBuffer = [],
            n && "object" === t(n) && (o = n,
            n = null),
            n ? (n = vt(n),
            o.hostname = n.host,
            o.secure = "https" === n.protocol || "wss" === n.protocol,
            o.port = n.port,
            n.query && (o.query = n.query)) : o.host && (o.hostname = vt(o.host).host),
            H(f(r), o),
            r.secure = null != o.secure ? o.secure : "undefined" != typeof location && "https:" === location.protocol,
            o.hostname && !o.port && (o.port = r.secure ? "443" : "80"),
            r.hostname = o.hostname || ("undefined" != typeof location ? location.hostname : "localhost"),
            r.port = o.port || ("undefined" != typeof location && location.port ? location.port : r.secure ? "443" : "80"),
            r.transports = o.transports || ["polling", "websocket", "webtransport"],
            r.writeBuffer = [],
            r.prevBufferLen = 0,
            r.opts = i({
                path: "/engine.io",
                agent: !1,
                withCredentials: !1,
                upgrade: !0,
                timestampParam: "t",
                rememberUpgrade: !1,
                addTrailingSlash: !0,
                rejectUnauthorized: !0,
                perMessageDeflate: {
                    threshold: 1024
                },
                transportOptions: {},
                closeOnBeforeunload: !1
            }, o),
            r.opts.path = r.opts.path.replace(/\/$/, "") + (r.opts.addTrailingSlash ? "/" : ""),
            "string" == typeof r.opts.query && (r.opts.query = function(t) {
                for (var e = {}, n = t.split("&"), r = 0, i = n.length; r < i; r++) {
                    var o = n[r].split("=");
                    e[decodeURIComponent(o[0])] = decodeURIComponent(o[1])
                }
                return e
            }(r.opts.query)),
            r.id = null,
            r.upgrades = null,
            r.pingInterval = null,
            r.pingTimeout = null,
            r.pingTimeoutTimer = null,
            "function" == typeof addEventListener && (r.opts.closeOnBeforeunload && (r.beforeunloadEventListener = function() {
                r.transport && (r.transport.removeAllListeners(),
                r.transport.close())
            }
            ,
            addEventListener("beforeunload", r.beforeunloadEventListener, !1)),
            "localhost" !== r.hostname && (r.offlineEventListener = function() {
                r.onClose("transport close", {
                    description: "network connection lost"
                })
            }
            ,
            addEventListener("offline", r.offlineEventListener, !1))),
            r.open(),
            r
        }
        return r(a, [{
            key: "createTransport",
            value: function(t) {
                var e = i({}, this.opts.query);
                e.EIO = 4,
                e.transport = t,
                this.id && (e.sid = this.id);
                var n = i({}, this.opts, {
                    query: e,
                    socket: this,
                    hostname: this.hostname,
                    secure: this.secure,
                    port: this.port
                }, this.opts.transportOptions[t]);
                return new pt[t](n)
            }
        }, {
            key: "open",
            value: function() {
                var t, e = this;
                if (this.opts.rememberUpgrade && a.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket"))
                    t = "websocket";
                else {
                    if (0 === this.transports.length)
                        return void this.setTimeoutFn((function() {
                            e.emitReserved("error", "No transports available")
                        }
                        ), 0);
                    t = this.transports[0]
                }
                this.readyState = "opening";
                try {
                    t = this.createTransport(t)
                } catch (t) {
                    return this.transports.shift(),
                    void this.open()
                }
                t.open(),
                this.setTransport(t)
            }
        }, {
            key: "setTransport",
            value: function(t) {
                var e = this;
                this.transport && this.transport.removeAllListeners(),
                this.transport = t,
                t.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (function(t) {
                    return e.onClose("transport close", t)
                }
                ))
            }
        }, {
            key: "probe",
            value: function(t) {
                var e = this
                  , n = this.createTransport(t)
                  , r = !1;
                a.priorWebsocketSuccess = !1;
                var i = function() {
                    r || (n.send([{
                        type: "ping",
                        data: "probe"
                    }]),
                    n.once("packet", (function(t) {
                        if (!r)
                            if ("pong" === t.type && "probe" === t.data) {
                                if (e.upgrading = !0,
                                e.emitReserved("upgrading", n),
                                !n)
                                    return;
                                a.priorWebsocketSuccess = "websocket" === n.name,
                                e.transport.pause((function() {
                                    r || "closed" !== e.readyState && (f(),
                                    e.setTransport(n),
                                    n.send([{
                                        type: "upgrade"
                                    }]),
                                    e.emitReserved("upgrade", n),
                                    n = null,
                                    e.upgrading = !1,
                                    e.flush())
                                }
                                ))
                            } else {
                                var i = new Error("probe error");
                                i.transport = n.name,
                                e.emitReserved("upgradeError", i)
                            }
                    }
                    )))
                };
                function o() {
                    r || (r = !0,
                    f(),
                    n.close(),
                    n = null)
                }
                var s = function(t) {
                    var r = new Error("probe error: " + t);
                    r.transport = n.name,
                    o(),
                    e.emitReserved("upgradeError", r)
                };
                function u() {
                    s("transport closed")
                }
                function c() {
                    s("socket closed")
                }
                function h(t) {
                    n && t.name !== n.name && o()
                }
                var f = function() {
                    n.removeListener("open", i),
                    n.removeListener("error", s),
                    n.removeListener("close", u),
                    e.off("close", c),
                    e.off("upgrading", h)
                };
                n.once("open", i),
                n.once("error", s),
                n.once("close", u),
                this.once("close", c),
                this.once("upgrading", h),
                -1 !== this.upgrades.indexOf("webtransport") && "webtransport" !== t ? this.setTimeoutFn((function() {
                    r || n.open()
                }
                ), 200) : n.open()
            }
        }, {
            key: "onOpen",
            value: function() {
                if (this.readyState = "open",
                a.priorWebsocketSuccess = "websocket" === this.transport.name,
                this.emitReserved("open"),
                this.flush(),
                "open" === this.readyState && this.opts.upgrade)
                    for (var t = 0, e = this.upgrades.length; t < e; t++)
                        this.probe(this.upgrades[t])
            }
        }, {
            key: "onPacket",
            value: function(t) {
                if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState)
                    switch (this.emitReserved("packet", t),
                    this.emitReserved("heartbeat"),
                    this.resetPingTimeout(),
                    t.type) {
                    case "open":
                        this.onHandshake(JSON.parse(t.data));
                        break;
                    case "ping":
                        this.sendPacket("pong"),
                        this.emitReserved("ping"),
                        this.emitReserved("pong");
                        break;
                    case "error":
                        var e = new Error("server error");
                        e.code = t.data,
                        this.onError(e);
                        break;
                    case "message":
                        this.emitReserved("data", t.data),
                        this.emitReserved("message", t.data)
                    }
            }
        }, {
            key: "onHandshake",
            value: function(t) {
                this.emitReserved("handshake", t),
                this.id = t.sid,
                this.transport.query.sid = t.sid,
                this.upgrades = this.filterUpgrades(t.upgrades),
                this.pingInterval = t.pingInterval,
                this.pingTimeout = t.pingTimeout,
                this.maxPayload = t.maxPayload,
                this.onOpen(),
                "closed" !== this.readyState && this.resetPingTimeout()
            }
        }, {
            key: "resetPingTimeout",
            value: function() {
                var t = this;
                this.clearTimeoutFn(this.pingTimeoutTimer),
                this.pingTimeoutTimer = this.setTimeoutFn((function() {
                    t.onClose("ping timeout")
                }
                ), this.pingInterval + this.pingTimeout),
                this.opts.autoUnref && this.pingTimeoutTimer.unref()
            }
        }, {
            key: "onDrain",
            value: function() {
                this.writeBuffer.splice(0, this.prevBufferLen),
                this.prevBufferLen = 0,
                0 === this.writeBuffer.length ? this.emitReserved("drain") : this.flush()
            }
        }, {
            key: "flush",
            value: function() {
                if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
                    var t = this.getWritablePackets();
                    this.transport.send(t),
                    this.prevBufferLen = t.length,
                    this.emitReserved("flush")
                }
            }
        }, {
            key: "getWritablePackets",
            value: function() {
                if (!(this.maxPayload && "polling" === this.transport.name && this.writeBuffer.length > 1))
                    return this.writeBuffer;
                for (var t, e = 1, n = 0; n < this.writeBuffer.length; n++) {
                    var r = this.writeBuffer[n].data;
                    if (r && (e += "string" == typeof (t = r) ? function(t) {
                        for (var e = 0, n = 0, r = 0, i = t.length; r < i; r++)
                            (e = t.charCodeAt(r)) < 128 ? n += 1 : e < 2048 ? n += 2 : e < 55296 || e >= 57344 ? n += 3 : (r++,
                            n += 4);
                        return n
                    }(t) : Math.ceil(1.33 * (t.byteLength || t.size))),
                    n > 0 && e > this.maxPayload)
                        return this.writeBuffer.slice(0, n);
                    e += 2
                }
                return this.writeBuffer
            }
        }, {
            key: "write",
            value: function(t, e, n) {
                return this.sendPacket("message", t, e, n),
                this
            }
        }, {
            key: "send",
            value: function(t, e, n) {
                return this.sendPacket("message", t, e, n),
                this
            }
        }, {
            key: "sendPacket",
            value: function(t, e, n, r) {
                if ("function" == typeof e && (r = e,
                e = void 0),
                "function" == typeof n && (r = n,
                n = null),
                "closing" !== this.readyState && "closed" !== this.readyState) {
                    (n = n || {}).compress = !1 !== n.compress;
                    var i = {
                        type: t,
                        data: e,
                        options: n
                    };
                    this.emitReserved("packetCreate", i),
                    this.writeBuffer.push(i),
                    r && this.once("flush", r),
                    this.flush()
                }
            }
        }, {
            key: "close",
            value: function() {
                var t = this
                  , e = function() {
                    t.onClose("forced close"),
                    t.transport.close()
                }
                  , n = function n() {
                    t.off("upgrade", n),
                    t.off("upgradeError", n),
                    e()
                }
                  , r = function() {
                    t.once("upgrade", n),
                    t.once("upgradeError", n)
                };
                return "opening" !== this.readyState && "open" !== this.readyState || (this.readyState = "closing",
                this.writeBuffer.length ? this.once("drain", (function() {
                    t.upgrading ? r() : e()
                }
                )) : this.upgrading ? r() : e()),
                this
            }
        }, {
            key: "onError",
            value: function(t) {
                a.priorWebsocketSuccess = !1,
                this.emitReserved("error", t),
                this.onClose("transport error", t)
            }
        }, {
            key: "onClose",
            value: function(t, e) {
                "opening" !== this.readyState && "open" !== this.readyState && "closing" !== this.readyState || (this.clearTimeoutFn(this.pingTimeoutTimer),
                this.transport.removeAllListeners("close"),
                this.transport.close(),
                this.transport.removeAllListeners(),
                "function" == typeof removeEventListener && (removeEventListener("beforeunload", this.beforeunloadEventListener, !1),
                removeEventListener("offline", this.offlineEventListener, !1)),
                this.readyState = "closed",
                this.id = null,
                this.emitReserved("close", t, e),
                this.writeBuffer = [],
                this.prevBufferLen = 0)
            }
        }, {
            key: "filterUpgrades",
            value: function(t) {
                for (var e = [], n = 0, r = t.length; n < r; n++)
                    ~this.transports.indexOf(t[n]) && e.push(t[n]);
                return e
            }
        }]),
        a
    }(U);
    gt.protocol = 4,
    gt.protocol;
    var mt = "function" == typeof ArrayBuffer
      , bt = function(t) {
        return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer
    }
      , kt = Object.prototype.toString
      , wt = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === kt.call(Blob)
      , _t = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === kt.call(File);
    function At(t) {
        return mt && (t instanceof ArrayBuffer || bt(t)) || wt && t instanceof Blob || _t && t instanceof File
    }
    function Ot(e, n) {
        if (!e || "object" !== t(e))
            return !1;
        if (Array.isArray(e)) {
            for (var r = 0, i = e.length; r < i; r++)
                if (Ot(e[r]))
                    return !0;
            return !1
        }
        if (At(e))
            return !0;
        if (e.toJSON && "function" == typeof e.toJSON && 1 === arguments.length)
            return Ot(e.toJSON(), !0);
        for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o) && Ot(e[o]))
                return !0;
        return !1
    }
    function Et(t) {
        var e = []
          , n = t.data
          , r = t;
        return r.data = Tt(n, e),
        r.attachments = e.length,
        {
            packet: r,
            buffers: e
        }
    }
    function Tt(e, n) {
        if (!e)
            return e;
        if (At(e)) {
            var r = {
                _placeholder: !0,
                num: n.length
            };
            return n.push(e),
            r
        }
        if (Array.isArray(e)) {
            for (var i = new Array(e.length), o = 0; o < e.length; o++)
                i[o] = Tt(e[o], n);
            return i
        }
        if ("object" === t(e) && !(e instanceof Date)) {
            var s = {};
            for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) && (s[a] = Tt(e[a], n));
            return s
        }
        return e
    }
    function Rt(t, e) {
        return t.data = Ct(t.data, e),
        delete t.attachments,
        t
    }
    function Ct(e, n) {
        if (!e)
            return e;
        if (e && !0 === e._placeholder) {
            if ("number" == typeof e.num && e.num >= 0 && e.num < n.length)
                return n[e.num];
            throw new Error("illegal attachments")
        }
        if (Array.isArray(e))
            for (var r = 0; r < e.length; r++)
                e[r] = Ct(e[r], n);
        else if ("object" === t(e))
            for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) && (e[i] = Ct(e[i], n));
        return e
    }
    var Bt, St = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
    !function(t) {
        t[t.CONNECT = 0] = "CONNECT",
        t[t.DISCONNECT = 1] = "DISCONNECT",
        t[t.EVENT = 2] = "EVENT",
        t[t.ACK = 3] = "ACK",
        t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR",
        t[t.BINARY_EVENT = 5] = "BINARY_EVENT",
        t[t.BINARY_ACK = 6] = "BINARY_ACK"
    }(Bt || (Bt = {}));
    var Nt = function() {
        function t(n) {
            e(this, t),
            this.replacer = n
        }
        return r(t, [{
            key: "encode",
            value: function(t) {
                return t.type !== Bt.EVENT && t.type !== Bt.ACK || !Ot(t) ? [this.encodeAsString(t)] : this.encodeAsBinary({
                    type: t.type === Bt.EVENT ? Bt.BINARY_EVENT : Bt.BINARY_ACK,
                    nsp: t.nsp,
                    data: t.data,
                    id: t.id
                })
            }
        }, {
            key: "encodeAsString",
            value: function(t) {
                var e = "" + t.type;
                return t.type !== Bt.BINARY_EVENT && t.type !== Bt.BINARY_ACK || (e += t.attachments + "-"),
                t.nsp && "/" !== t.nsp && (e += t.nsp + ","),
                null != t.id && (e += t.id),
                null != t.data && (e += JSON.stringify(t.data, this.replacer)),
                e
            }
        }, {
            key: "encodeAsBinary",
            value: function(t) {
                var e = Et(t)
                  , n = this.encodeAsString(e.packet)
                  , r = e.buffers;
                return r.unshift(n),
                r
            }
        }]),
        t
    }();
    function Lt(t) {
        return "[object Object]" === Object.prototype.toString.call(t)
    }
    var xt = function(t) {
        o(i, t);
        var n = l(i);
        function i(t) {
            var r;
            return e(this, i),
            (r = n.call(this)).reviver = t,
            r
        }
        return r(i, [{
            key: "add",
            value: function(t) {
                var e;
                if ("string" == typeof t) {
                    if (this.reconstructor)
                        throw new Error("got plaintext data when reconstructing a packet");
                    var n = (e = this.decodeString(t)).type === Bt.BINARY_EVENT;
                    n || e.type === Bt.BINARY_ACK ? (e.type = n ? Bt.EVENT : Bt.ACK,
                    this.reconstructor = new Pt(e),
                    0 === e.attachments && p(s(i.prototype), "emitReserved", this).call(this, "decoded", e)) : p(s(i.prototype), "emitReserved", this).call(this, "decoded", e)
                } else {
                    if (!At(t) && !t.base64)
                        throw new Error("Unknown type: " + t);
                    if (!this.reconstructor)
                        throw new Error("got binary data when not reconstructing a packet");
                    (e = this.reconstructor.takeBinaryData(t)) && (this.reconstructor = null,
                    p(s(i.prototype), "emitReserved", this).call(this, "decoded", e))
                }
            }
        }, {
            key: "decodeString",
            value: function(t) {
                var e = 0
                  , n = {
                    type: Number(t.charAt(0))
                };
                if (void 0 === Bt[n.type])
                    throw new Error("unknown packet type " + n.type);
                if (n.type === Bt.BINARY_EVENT || n.type === Bt.BINARY_ACK) {
                    for (var r = e + 1; "-" !== t.charAt(++e) && e != t.length; )
                        ;
                    var o = t.substring(r, e);
                    if (o != Number(o) || "-" !== t.charAt(e))
                        throw new Error("Illegal attachments");
                    n.attachments = Number(o)
                }
                if ("/" === t.charAt(e + 1)) {
                    for (var s = e + 1; ++e; ) {
                        if ("," === t.charAt(e))
                            break;
                        if (e === t.length)
                            break
                    }
                    n.nsp = t.substring(s, e)
                } else
                    n.nsp = "/";
                var a = t.charAt(e + 1);
                if ("" !== a && Number(a) == a) {
                    for (var u = e + 1; ++e; ) {
                        var c = t.charAt(e);
                        if (null == c || Number(c) != c) {
                            --e;
                            break
                        }
                        if (e === t.length)
                            break
                    }
                    n.id = Number(t.substring(u, e + 1))
                }
                if (t.charAt(++e)) {
                    var h = this.tryParse(t.substr(e));
                    if (!i.isPayloadValid(n.type, h))
                        throw new Error("invalid payload");
                    n.data = h
                }
                return n
            }
        }, {
            key: "tryParse",
            value: function(t) {
                try {
                    return JSON.parse(t, this.reviver)
                } catch (t) {
                    return !1
                }
            }
        }, {
            key: "destroy",
            value: function() {
                this.reconstructor && (this.reconstructor.finishedReconstruction(),
                this.reconstructor = null)
            }
        }], [{
            key: "isPayloadValid",
            value: function(t, e) {
                switch (t) {
                case Bt.CONNECT:
                    return Lt(e);
                case Bt.DISCONNECT:
                    return void 0 === e;
                case Bt.CONNECT_ERROR:
                    return "string" == typeof e || Lt(e);
                case Bt.EVENT:
                case Bt.BINARY_EVENT:
                    return Array.isArray(e) && ("number" == typeof e[0] || "string" == typeof e[0] && -1 === St.indexOf(e[0]));
                case Bt.ACK:
                case Bt.BINARY_ACK:
                    return Array.isArray(e)
                }
            }
        }]),
        i
    }(U)
      , Pt = function() {
        function t(n) {
            e(this, t),
            this.packet = n,
            this.buffers = [],
            this.reconPack = n
        }
        return r(t, [{
            key: "takeBinaryData",
            value: function(t) {
                if (this.buffers.push(t),
                this.buffers.length === this.reconPack.attachments) {
                    var e = Rt(this.reconPack, this.buffers);
                    return this.finishedReconstruction(),
                    e
                }
                return null
            }
        }, {
            key: "finishedReconstruction",
            value: function() {
                this.reconPack = null,
                this.buffers = []
            }
        }]),
        t
    }()
      , qt = Object.freeze({
        __proto__: null,
        protocol: 5,
        get PacketType() {
            return Bt
        },
        Encoder: Nt,
        Decoder: xt
    });
    function jt(t, e, n) {
        return t.on(e, n),
        function() {
            t.off(e, n)
        }
    }
    var Dt = Object.freeze({
        connect: 1,
        connect_error: 1,
        disconnect: 1,
        disconnecting: 1,
        newListener: 1,
        removeListener: 1
    })
      , Ut = function(t) {
        o(a, t);
        var n = l(a);
        function a(t, r, o) {
            var s;
            return e(this, a),
            (s = n.call(this)).connected = !1,
            s.recovered = !1,
            s.receiveBuffer = [],
            s.sendBuffer = [],
            s._queue = [],
            s._queueSeq = 0,
            s.ids = 0,
            s.acks = {},
            s.flags = {},
            s.io = t,
            s.nsp = r,
            o && o.auth && (s.auth = o.auth),
            s._opts = i({}, o),
            s.io._autoConnect && s.open(),
            s
        }
        return r(a, [{
            key: "disconnected",
            get: function() {
                return !this.connected
            }
        }, {
            key: "subEvents",
            value: function() {
                if (!this.subs) {
                    var t = this.io;
                    this.subs = [jt(t, "open", this.onopen.bind(this)), jt(t, "packet", this.onpacket.bind(this)), jt(t, "error", this.onerror.bind(this)), jt(t, "close", this.onclose.bind(this))]
                }
            }
        }, {
            key: "active",
            get: function() {
                return !!this.subs
            }
        }, {
            key: "connect",
            value: function() {
                return this.connected || (this.subEvents(),
                this.io._reconnecting || this.io.open(),
                "open" === this.io._readyState && this.onopen()),
                this
            }
        }, {
            key: "open",
            value: function() {
                return this.connect()
            }
        }, {
            key: "send",
            value: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                return e.unshift("message"),
                this.emit.apply(this, e),
                this
            }
        }, {
            key: "emit",
            value: function(t) {
                if (Dt.hasOwnProperty(t))
                    throw new Error('"' + t.toString() + '" is a reserved event name');
                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
                    n[r - 1] = arguments[r];
                if (n.unshift(t),
                this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
                    return this._addToQueue(n),
                    this;
                var i = {
                    type: Bt.EVENT,
                    data: n,
                    options: {}
                };
                if (i.options.compress = !1 !== this.flags.compress,
                "function" == typeof n[n.length - 1]) {
                    var o = this.ids++
                      , s = n.pop();
                    this._registerAckCallback(o, s),
                    i.id = o
                }
                var a = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
                return this.flags.volatile && (!a || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(i),
                this.packet(i)) : this.sendBuffer.push(i)),
                this.flags = {},
                this
            }
        }, {
            key: "_registerAckCallback",
            value: function(t, e) {
                var n, r = this, i = null !== (n = this.flags.timeout) && void 0 !== n ? n : this._opts.ackTimeout;
                if (void 0 !== i) {
                    var o = this.io.setTimeoutFn((function() {
                        delete r.acks[t];
                        for (var n = 0; n < r.sendBuffer.length; n++)
                            r.sendBuffer[n].id === t && r.sendBuffer.splice(n, 1);
                        e.call(r, new Error("operation has timed out"))
                    }
                    ), i);
                    this.acks[t] = function() {
                        r.io.clearTimeoutFn(o);
                        for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                            n[i] = arguments[i];
                        e.apply(r, [null].concat(n))
                    }
                } else
                    this.acks[t] = e
            }
        }, {
            key: "emitWithAck",
            value: function(t) {
                for (var e = this, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                    r[i - 1] = arguments[i];
                var o = void 0 !== this.flags.timeout || void 0 !== this._opts.ackTimeout;
                return new Promise((function(n, i) {
                    r.push((function(t, e) {
                        return o ? t ? i(t) : n(e) : n(t)
                    }
                    )),
                    e.emit.apply(e, [t].concat(r))
                }
                ))
            }
        }, {
            key: "_addToQueue",
            value: function(t) {
                var e, n = this;
                "function" == typeof t[t.length - 1] && (e = t.pop());
                var r = {
                    id: this._queueSeq++,
                    tryCount: 0,
                    pending: !1,
                    args: t,
                    flags: i({
                        fromQueue: !0
                    }, this.flags)
                };
                t.push((function(t) {
                    if (r === n._queue[0]) {
                        if (null !== t)
                            r.tryCount > n._opts.retries && (n._queue.shift(),
                            e && e(t));
                        else if (n._queue.shift(),
                        e) {
                            for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++)
                                o[s - 1] = arguments[s];
                            e.apply(void 0, [null].concat(o))
                        }
                        return r.pending = !1,
                        n._drainQueue()
                    }
                }
                )),
                this._queue.push(r),
                this._drainQueue()
            }
        }, {
            key: "_drainQueue",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (this.connected && 0 !== this._queue.length) {
                    var e = this._queue[0];
                    e.pending && !t || (e.pending = !0,
                    e.tryCount++,
                    this.flags = e.flags,
                    this.emit.apply(this, e.args))
                }
            }
        }, {
            key: "packet",
            value: function(t) {
                t.nsp = this.nsp,
                this.io._packet(t)
            }
        }, {
            key: "onopen",
            value: function() {
                var t = this;
                "function" == typeof this.auth ? this.auth((function(e) {
                    t._sendConnectPacket(e)
                }
                )) : this._sendConnectPacket(this.auth)
            }
        }, {
            key: "_sendConnectPacket",
            value: function(t) {
                this.packet({
                    type: Bt.CONNECT,
                    data: this._pid ? i({
                        pid: this._pid,
                        offset: this._lastOffset
                    }, t) : t
                })
            }
        }, {
            key: "onerror",
            value: function(t) {
                this.connected || this.emitReserved("connect_error", t)
            }
        }, {
            key: "onclose",
            value: function(t, e) {
                this.connected = !1,
                delete this.id,
                this.emitReserved("disconnect", t, e)
            }
        }, {
            key: "onpacket",
            value: function(t) {
                if (t.nsp === this.nsp)
                    switch (t.type) {
                    case Bt.CONNECT:
                        t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                        break;
                    case Bt.EVENT:
                    case Bt.BINARY_EVENT:
                        this.onevent(t);
                        break;
                    case Bt.ACK:
                    case Bt.BINARY_ACK:
                        this.onack(t);
                        break;
                    case Bt.DISCONNECT:
                        this.ondisconnect();
                        break;
                    case Bt.CONNECT_ERROR:
                        this.destroy();
                        var e = new Error(t.data.message);
                        e.data = t.data.data,
                        this.emitReserved("connect_error", e)
                    }
            }
        }, {
            key: "onevent",
            value: function(t) {
                var e = t.data || [];
                null != t.id && e.push(this.ack(t.id)),
                this.connected ? this.emitEvent(e) : this.receiveBuffer.push(Object.freeze(e))
            }
        }, {
            key: "emitEvent",
            value: function(t) {
                if (this._anyListeners && this._anyListeners.length) {
                    var e, n = y(this._anyListeners.slice());
                    try {
                        for (n.s(); !(e = n.n()).done; ) {
                            e.value.apply(this, t)
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                }
                p(s(a.prototype), "emit", this).apply(this, t),
                this._pid && t.length && "string" == typeof t[t.length - 1] && (this._lastOffset = t[t.length - 1])
            }
        }, {
            key: "ack",
            value: function(t) {
                var e = this
                  , n = !1;
                return function() {
                    if (!n) {
                        n = !0;
                        for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
                            i[o] = arguments[o];
                        e.packet({
                            type: Bt.ACK,
                            id: t,
                            data: i
                        })
                    }
                }
            }
        }, {
            key: "onack",
            value: function(t) {
                var e = this.acks[t.id];
                "function" == typeof e && (e.apply(this, t.data),
                delete this.acks[t.id])
            }
        }, {
            key: "onconnect",
            value: function(t, e) {
                this.id = t,
                this.recovered = e && this._pid === e,
                this._pid = e,
                this.connected = !0,
                this.emitBuffered(),
                this.emitReserved("connect"),
                this._drainQueue(!0)
            }
        }, {
            key: "emitBuffered",
            value: function() {
                var t = this;
                this.receiveBuffer.forEach((function(e) {
                    return t.emitEvent(e)
                }
                )),
                this.receiveBuffer = [],
                this.sendBuffer.forEach((function(e) {
                    t.notifyOutgoingListeners(e),
                    t.packet(e)
                }
                )),
                this.sendBuffer = []
            }
        }, {
            key: "ondisconnect",
            value: function() {
                this.destroy(),
                this.onclose("io server disconnect")
            }
        }, {
            key: "destroy",
            value: function() {
                this.subs && (this.subs.forEach((function(t) {
                    return t()
                }
                )),
                this.subs = void 0),
                this.io._destroy(this)
            }
        }, {
            key: "disconnect",
            value: function() {
                return this.connected && this.packet({
                    type: Bt.DISCONNECT
                }),
                this.destroy(),
                this.connected && this.onclose("io client disconnect"),
                this
            }
        }, {
            key: "close",
            value: function() {
                return this.disconnect()
            }
        }, {
            key: "compress",
            value: function(t) {
                return this.flags.compress = t,
                this
            }
        }, {
            key: "volatile",
            get: function() {
                return this.flags.volatile = !0,
                this
            }
        }, {
            key: "timeout",
            value: function(t) {
                return this.flags.timeout = t,
                this
            }
        }, {
            key: "onAny",
            value: function(t) {
                return this._anyListeners = this._anyListeners || [],
                this._anyListeners.push(t),
                this
            }
        }, {
            key: "prependAny",
            value: function(t) {
                return this._anyListeners = this._anyListeners || [],
                this._anyListeners.unshift(t),
                this
            }
        }, {
            key: "offAny",
            value: function(t) {
                if (!this._anyListeners)
                    return this;
                if (t) {
                    for (var e = this._anyListeners, n = 0; n < e.length; n++)
                        if (t === e[n])
                            return e.splice(n, 1),
                            this
                } else
                    this._anyListeners = [];
                return this
            }
        }, {
            key: "listenersAny",
            value: function() {
                return this._anyListeners || []
            }
        }, {
            key: "onAnyOutgoing",
            value: function(t) {
                return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
                this._anyOutgoingListeners.push(t),
                this
            }
        }, {
            key: "prependAnyOutgoing",
            value: function(t) {
                return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
                this._anyOutgoingListeners.unshift(t),
                this
            }
        }, {
            key: "offAnyOutgoing",
            value: function(t) {
                if (!this._anyOutgoingListeners)
                    return this;
                if (t) {
                    for (var e = this._anyOutgoingListeners, n = 0; n < e.length; n++)
                        if (t === e[n])
                            return e.splice(n, 1),
                            this
                } else
                    this._anyOutgoingListeners = [];
                return this
            }
        }, {
            key: "listenersAnyOutgoing",
            value: function() {
                return this._anyOutgoingListeners || []
            }
        }, {
            key: "notifyOutgoingListeners",
            value: function(t) {
                if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
                    var e, n = y(this._anyOutgoingListeners.slice());
                    try {
                        for (n.s(); !(e = n.n()).done; ) {
                            e.value.apply(this, t.data)
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                }
            }
        }]),
        a
    }(U);
    function It(t) {
        t = t || {},
        this.ms = t.min || 100,
        this.max = t.max || 1e4,
        this.factor = t.factor || 2,
        this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0,
        this.attempts = 0
    }
    It.prototype.duration = function() {
        var t = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
            var e = Math.random()
              , n = Math.floor(e * this.jitter * t);
            t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n
        }
        return 0 | Math.min(t, this.max)
    }
    ,
    It.prototype.reset = function() {
        this.attempts = 0
    }
    ,
    It.prototype.setMin = function(t) {
        this.ms = t
    }
    ,
    It.prototype.setMax = function(t) {
        this.max = t
    }
    ,
    It.prototype.setJitter = function(t) {
        this.jitter = t
    }
    ;
    var Ft = function(n) {
        o(s, n);
        var i = l(s);
        function s(n, r) {
            var o, a;
            e(this, s),
            (o = i.call(this)).nsps = {},
            o.subs = [],
            n && "object" === t(n) && (r = n,
            n = void 0),
            (r = r || {}).path = r.path || "/socket.io",
            o.opts = r,
            H(f(o), r),
            o.reconnection(!1 !== r.reconnection),
            o.reconnectionAttempts(r.reconnectionAttempts || 1 / 0),
            o.reconnectionDelay(r.reconnectionDelay || 1e3),
            o.reconnectionDelayMax(r.reconnectionDelayMax || 5e3),
            o.randomizationFactor(null !== (a = r.randomizationFactor) && void 0 !== a ? a : .5),
            o.backoff = new It({
                min: o.reconnectionDelay(),
                max: o.reconnectionDelayMax(),
                jitter: o.randomizationFactor()
            }),
            o.timeout(null == r.timeout ? 2e4 : r.timeout),
            o._readyState = "closed",
            o.uri = n;
            var u = r.parser || qt;
            return o.encoder = new u.Encoder,
            o.decoder = new u.Decoder,
            o._autoConnect = !1 !== r.autoConnect,
            o._autoConnect && o.open(),
            o
        }
        return r(s, [{
            key: "reconnection",
            value: function(t) {
                return arguments.length ? (this._reconnection = !!t,
                this) : this._reconnection
            }
        }, {
            key: "reconnectionAttempts",
            value: function(t) {
                return void 0 === t ? this._reconnectionAttempts : (this._reconnectionAttempts = t,
                this)
            }
        }, {
            key: "reconnectionDelay",
            value: function(t) {
                var e;
                return void 0 === t ? this._reconnectionDelay : (this._reconnectionDelay = t,
                null === (e = this.backoff) || void 0 === e || e.setMin(t),
                this)
            }
        }, {
            key: "randomizationFactor",
            value: function(t) {
                var e;
                return void 0 === t ? this._randomizationFactor : (this._randomizationFactor = t,
                null === (e = this.backoff) || void 0 === e || e.setJitter(t),
                this)
            }
        }, {
            key: "reconnectionDelayMax",
            value: function(t) {
                var e;
                return void 0 === t ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t,
                null === (e = this.backoff) || void 0 === e || e.setMax(t),
                this)
            }
        }, {
            key: "timeout",
            value: function(t) {
                return arguments.length ? (this._timeout = t,
                this) : this._timeout
            }
        }, {
            key: "maybeReconnectOnOpen",
            value: function() {
                !this._reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
            }
        }, {
            key: "open",
            value: function(t) {
                var e = this;
                if (~this._readyState.indexOf("open"))
                    return this;
                this.engine = new gt(this.uri,this.opts);
                var n = this.engine
                  , r = this;
                this._readyState = "opening",
                this.skipReconnect = !1;
                var i = jt(n, "open", (function() {
                    r.onopen(),
                    t && t()
                }
                ))
                  , o = function(n) {
                    e.cleanup(),
                    e._readyState = "closed",
                    e.emitReserved("error", n),
                    t ? t(n) : e.maybeReconnectOnOpen()
                }
                  , s = jt(n, "error", o);
                if (!1 !== this._timeout) {
                    var a = this._timeout
                      , u = this.setTimeoutFn((function() {
                        i(),
                        o(new Error("timeout")),
                        n.close()
                    }
                    ), a);
                    this.opts.autoUnref && u.unref(),
                    this.subs.push((function() {
                        e.clearTimeoutFn(u)
                    }
                    ))
                }
                return this.subs.push(i),
                this.subs.push(s),
                this
            }
        }, {
            key: "connect",
            value: function(t) {
                return this.open(t)
            }
        }, {
            key: "onopen",
            value: function() {
                this.cleanup(),
                this._readyState = "open",
                this.emitReserved("open");
                var t = this.engine;
                this.subs.push(jt(t, "ping", this.onping.bind(this)), jt(t, "data", this.ondata.bind(this)), jt(t, "error", this.onerror.bind(this)), jt(t, "close", this.onclose.bind(this)), jt(this.decoder, "decoded", this.ondecoded.bind(this)))
            }
        }, {
            key: "onping",
            value: function() {
                this.emitReserved("ping")
            }
        }, {
            key: "ondata",
            value: function(t) {
                try {
                    this.decoder.add(t)
                } catch (t) {
                    this.onclose("parse error", t)
                }
            }
        }, {
            key: "ondecoded",
            value: function(t) {
                var e = this;
                ut((function() {
                    e.emitReserved("packet", t)
                }
                ), this.setTimeoutFn)
            }
        }, {
            key: "onerror",
            value: function(t) {
                this.emitReserved("error", t)
            }
        }, {
            key: "socket",
            value: function(t, e) {
                var n = this.nsps[t];
                return n ? this._autoConnect && !n.active && n.connect() : (n = new Ut(this,t,e),
                this.nsps[t] = n),
                n
            }
        }, {
            key: "_destroy",
            value: function(t) {
                for (var e = 0, n = Object.keys(this.nsps); e < n.length; e++) {
                    var r = n[e];
                    if (this.nsps[r].active)
                        return
                }
                this._close()
            }
        }, {
            key: "_packet",
            value: function(t) {
                for (var e = this.encoder.encode(t), n = 0; n < e.length; n++)
                    this.engine.write(e[n], t.options)
            }
        }, {
            key: "cleanup",
            value: function() {
                this.subs.forEach((function(t) {
                    return t()
                }
                )),
                this.subs.length = 0,
                this.decoder.destroy()
            }
        }, {
            key: "_close",
            value: function() {
                this.skipReconnect = !0,
                this._reconnecting = !1,
                this.onclose("forced close"),
                this.engine && this.engine.close()
            }
        }, {
            key: "disconnect",
            value: function() {
                return this._close()
            }
        }, {
            key: "onclose",
            value: function(t, e) {
                this.cleanup(),
                this.backoff.reset(),
                this._readyState = "closed",
                this.emitReserved("close", t, e),
                this._reconnection && !this.skipReconnect && this.reconnect()
            }
        }, {
            key: "reconnect",
            value: function() {
                var t = this;
                if (this._reconnecting || this.skipReconnect)
                    return this;
                var e = this;
                if (this.backoff.attempts >= this._reconnectionAttempts)
                    this.backoff.reset(),
                    this.emitReserved("reconnect_failed"),
                    this._reconnecting = !1;
                else {
                    var n = this.backoff.duration();
                    this._reconnecting = !0;
                    var r = this.setTimeoutFn((function() {
                        e.skipReconnect || (t.emitReserved("reconnect_attempt", e.backoff.attempts),
                        e.skipReconnect || e.open((function(n) {
                            n ? (e._reconnecting = !1,
                            e.reconnect(),
                            t.emitReserved("reconnect_error", n)) : e.onreconnect()
                        }
                        )))
                    }
                    ), n);
                    this.opts.autoUnref && r.unref(),
                    this.subs.push((function() {
                        t.clearTimeoutFn(r)
                    }
                    ))
                }
            }
        }, {
            key: "onreconnect",
            value: function() {
                var t = this.backoff.attempts;
                this._reconnecting = !1,
                this.backoff.reset(),
                this.emitReserved("reconnect", t)
            }
        }]),
        s
    }(U)
      , Mt = {};
    function Vt(e, n) {
        "object" === t(e) && (n = e,
        e = void 0);
        var r, i = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
              , n = arguments.length > 2 ? arguments[2] : void 0
              , r = t;
            n = n || "undefined" != typeof location && location,
            null == t && (t = n.protocol + "//" + n.host),
            "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? n.protocol + t : n.host + t),
            /^(https?|wss?):\/\//.test(t) || (t = void 0 !== n ? n.protocol + "//" + t : "https://" + t),
            r = vt(t)),
            r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
            r.path = r.path || "/";
            var i = -1 !== r.host.indexOf(":") ? "[" + r.host + "]" : r.host;
            return r.id = r.protocol + "://" + i + ":" + r.port + e,
            r.href = r.protocol + "://" + i + (n && n.port === r.port ? "" : ":" + r.port),
            r
        }(e, (n = n || {}).path || "/socket.io"), o = i.source, s = i.id, a = i.path, u = Mt[s] && a in Mt[s].nsps;
        return n.forceNew || n["force new connection"] || !1 === n.multiplex || u ? r = new Ft(o,n) : (Mt[s] || (Mt[s] = new Ft(o,n)),
        r = Mt[s]),
        i.query && !n.query && (n.query = i.queryKey),
        r.socket(i.path, n)
    }
    return i(Vt, {
        Manager: Ft,
        Socket: Ut,
        io: Vt,
        connect: Vt
    }),
    Vt
}
));
//# sourceMappingURL=socket.io.min.js.map

     INTERNET ARCHIVE ON 07:39:56 Mar 11, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.618
  exclusion.robots: 0.025
  exclusion.robots.policy: 0.012
  esindex: 0.012
  cdx.remote: 5.834
  LoadShardBlock: 261.156 (3)
  PetaboxLoader3.datanode: 192.382 (4)
  PetaboxLoader3.resolve: 307.628 (3)
  load_resource: 281.031
*/
