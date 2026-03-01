import { api as se } from "/scripts/api.js";
import { app as Wc } from "/scripts/app.js";
function tm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var $c = { exports: {} }, ce = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var el = Symbol.for("react.element"), nm = Symbol.for("react.portal"), rm = Symbol.for("react.fragment"), lm = Symbol.for("react.strict_mode"), sm = Symbol.for("react.profiler"), am = Symbol.for("react.provider"), om = Symbol.for("react.context"), im = Symbol.for("react.forward_ref"), cm = Symbol.for("react.suspense"), dm = Symbol.for("react.memo"), um = Symbol.for("react.lazy"), hi = Symbol.iterator;
function fm(e) {
  return e === null || typeof e != "object" ? null : (e = hi && e[hi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Uc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Vc = Object.assign, Bc = {};
function or(e, t, n) {
  this.props = e, this.context = t, this.refs = Bc, this.updater = n || Uc;
}
or.prototype.isReactComponent = {};
or.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
or.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Qc() {
}
Qc.prototype = or.prototype;
function uo(e, t, n) {
  this.props = e, this.context = t, this.refs = Bc, this.updater = n || Uc;
}
var fo = uo.prototype = new Qc();
fo.constructor = uo;
Vc(fo, or.prototype);
fo.isPureReactComponent = !0;
var pi = Array.isArray, Hc = Object.prototype.hasOwnProperty, mo = { current: null }, Kc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gc(e, t, n) {
  var r, l = {}, a = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) Hc.call(t, r) && !Kc.hasOwnProperty(r) && (l[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) l.children = n;
  else if (1 < i) {
    for (var c = Array(i), d = 0; d < i; d++) c[d] = arguments[d + 2];
    l.children = c;
  }
  if (e && e.defaultProps) for (r in i = e.defaultProps, i) l[r] === void 0 && (l[r] = i[r]);
  return { $$typeof: el, type: e, key: a, ref: o, props: l, _owner: mo.current };
}
function mm(e, t) {
  return { $$typeof: el, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ho(e) {
  return typeof e == "object" && e !== null && e.$$typeof === el;
}
function hm(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var gi = /\/+/g;
function As(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? hm("" + e.key) : t.toString(36);
}
function Dl(e, t, n, r, l) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else switch (a) {
    case "string":
    case "number":
      o = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case el:
        case nm:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + As(o, 0) : r, pi(l) ? (n = "", e != null && (n = e.replace(gi, "$&/") + "/"), Dl(l, t, n, "", function(d) {
    return d;
  })) : l != null && (ho(l) && (l = mm(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(gi, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", pi(e)) for (var i = 0; i < e.length; i++) {
    a = e[i];
    var c = r + As(a, i);
    o += Dl(a, t, n, c, l);
  }
  else if (c = fm(e), typeof c == "function") for (e = c.call(e), i = 0; !(a = e.next()).done; ) a = a.value, c = r + As(a, i++), o += Dl(a, t, n, c, l);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function ul(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Dl(e, r, "", "", function(a) {
    return t.call(n, a, l++);
  }), r;
}
function pm(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ke = { current: null }, Pl = { transition: null }, gm = { ReactCurrentDispatcher: Ke, ReactCurrentBatchConfig: Pl, ReactCurrentOwner: mo };
function qc() {
  throw Error("act(...) is not supported in production builds of React.");
}
ce.Children = { map: ul, forEach: function(e, t, n) {
  ul(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return ul(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ul(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ho(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ce.Component = or;
ce.Fragment = rm;
ce.Profiler = sm;
ce.PureComponent = uo;
ce.StrictMode = lm;
ce.Suspense = cm;
ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gm;
ce.act = qc;
ce.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Vc({}, e.props), l = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = mo.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (c in t) Hc.call(t, c) && !Kc.hasOwnProperty(c) && (r[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    i = Array(c);
    for (var d = 0; d < c; d++) i[d] = arguments[d + 2];
    r.children = i;
  }
  return { $$typeof: el, type: e.type, key: l, ref: a, props: r, _owner: o };
};
ce.createContext = function(e) {
  return e = { $$typeof: om, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: am, _context: e }, e.Consumer = e;
};
ce.createElement = Gc;
ce.createFactory = function(e) {
  var t = Gc.bind(null, e);
  return t.type = e, t;
};
ce.createRef = function() {
  return { current: null };
};
ce.forwardRef = function(e) {
  return { $$typeof: im, render: e };
};
ce.isValidElement = ho;
ce.lazy = function(e) {
  return { $$typeof: um, _payload: { _status: -1, _result: e }, _init: pm };
};
ce.memo = function(e, t) {
  return { $$typeof: dm, type: e, compare: t === void 0 ? null : t };
};
ce.startTransition = function(e) {
  var t = Pl.transition;
  Pl.transition = {};
  try {
    e();
  } finally {
    Pl.transition = t;
  }
};
ce.unstable_act = qc;
ce.useCallback = function(e, t) {
  return Ke.current.useCallback(e, t);
};
ce.useContext = function(e) {
  return Ke.current.useContext(e);
};
ce.useDebugValue = function() {
};
ce.useDeferredValue = function(e) {
  return Ke.current.useDeferredValue(e);
};
ce.useEffect = function(e, t) {
  return Ke.current.useEffect(e, t);
};
ce.useId = function() {
  return Ke.current.useId();
};
ce.useImperativeHandle = function(e, t, n) {
  return Ke.current.useImperativeHandle(e, t, n);
};
ce.useInsertionEffect = function(e, t) {
  return Ke.current.useInsertionEffect(e, t);
};
ce.useLayoutEffect = function(e, t) {
  return Ke.current.useLayoutEffect(e, t);
};
ce.useMemo = function(e, t) {
  return Ke.current.useMemo(e, t);
};
ce.useReducer = function(e, t, n) {
  return Ke.current.useReducer(e, t, n);
};
ce.useRef = function(e) {
  return Ke.current.useRef(e);
};
ce.useState = function(e) {
  return Ke.current.useState(e);
};
ce.useSyncExternalStore = function(e, t, n) {
  return Ke.current.useSyncExternalStore(e, t, n);
};
ce.useTransition = function() {
  return Ke.current.useTransition();
};
ce.version = "18.3.1";
$c.exports = ce;
var f = $c.exports;
const Yt = /* @__PURE__ */ tm(f);
var Yc = { exports: {} }, ot = {}, Xc = { exports: {} }, Zc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(C, L) {
    var V = C.length;
    C.push(L);
    e: for (; 0 < V; ) {
      var E = V - 1 >>> 1, W = C[E];
      if (0 < l(W, L)) C[E] = L, C[V] = W, V = E;
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var L = C[0], V = C.pop();
    if (V !== L) {
      C[0] = V;
      e: for (var E = 0, W = C.length, G = W >>> 1; E < G; ) {
        var A = 2 * (E + 1) - 1, q = C[A], B = A + 1, ae = C[B];
        if (0 > l(q, V)) B < W && 0 > l(ae, q) ? (C[E] = ae, C[B] = V, E = B) : (C[E] = q, C[A] = V, E = A);
        else if (B < W && 0 > l(ae, V)) C[E] = ae, C[B] = V, E = B;
        else break e;
      }
    }
    return L;
  }
  function l(C, L) {
    var V = C.sortIndex - L.sortIndex;
    return V !== 0 ? V : C.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function() {
      return a.now();
    };
  } else {
    var o = Date, i = o.now();
    e.unstable_now = function() {
      return o.now() - i;
    };
  }
  var c = [], d = [], m = 1, v = null, w = 3, _ = !1, g = !1, x = !1, S = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(C) {
    for (var L = n(d); L !== null; ) {
      if (L.callback === null) r(d);
      else if (L.startTime <= C) r(d), L.sortIndex = L.expirationTime, t(c, L);
      else break;
      L = n(d);
    }
  }
  function y(C) {
    if (x = !1, p(C), !g) if (n(c) !== null) g = !0, F(j);
    else {
      var L = n(d);
      L !== null && P(y, L.startTime - C);
    }
  }
  function j(C, L) {
    g = !1, x && (x = !1, h(I), I = -1), _ = !0;
    var V = w;
    try {
      for (p(L), v = n(c); v !== null && (!(v.expirationTime > L) || C && !D()); ) {
        var E = v.callback;
        if (typeof E == "function") {
          v.callback = null, w = v.priorityLevel;
          var W = E(v.expirationTime <= L);
          L = e.unstable_now(), typeof W == "function" ? v.callback = W : v === n(c) && r(c), p(L);
        } else r(c);
        v = n(c);
      }
      if (v !== null) var G = !0;
      else {
        var A = n(d);
        A !== null && P(y, A.startTime - L), G = !1;
      }
      return G;
    } finally {
      v = null, w = V, _ = !1;
    }
  }
  var k = !1, b = null, I = -1, O = 5, R = -1;
  function D() {
    return !(e.unstable_now() - R < O);
  }
  function U() {
    if (b !== null) {
      var C = e.unstable_now();
      R = C;
      var L = !0;
      try {
        L = b(!0, C);
      } finally {
        L ? Z() : (k = !1, b = null);
      }
    } else k = !1;
  }
  var Z;
  if (typeof u == "function") Z = function() {
    u(U);
  };
  else if (typeof MessageChannel < "u") {
    var M = new MessageChannel(), K = M.port2;
    M.port1.onmessage = U, Z = function() {
      K.postMessage(null);
    };
  } else Z = function() {
    S(U, 0);
  };
  function F(C) {
    b = C, k || (k = !0, Z());
  }
  function P(C, L) {
    I = S(function() {
      C(e.unstable_now());
    }, L);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    g || _ || (g = !0, F(j));
  }, e.unstable_forceFrameRate = function(C) {
    0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < C ? Math.floor(1e3 / C) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return w;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(C) {
    switch (w) {
      case 1:
      case 2:
      case 3:
        var L = 3;
        break;
      default:
        L = w;
    }
    var V = w;
    w = L;
    try {
      return C();
    } finally {
      w = V;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(C, L) {
    switch (C) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        C = 3;
    }
    var V = w;
    w = C;
    try {
      return L();
    } finally {
      w = V;
    }
  }, e.unstable_scheduleCallback = function(C, L, V) {
    var E = e.unstable_now();
    switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? E + V : E) : V = E, C) {
      case 1:
        var W = -1;
        break;
      case 2:
        W = 250;
        break;
      case 5:
        W = 1073741823;
        break;
      case 4:
        W = 1e4;
        break;
      default:
        W = 5e3;
    }
    return W = V + W, C = { id: m++, callback: L, priorityLevel: C, startTime: V, expirationTime: W, sortIndex: -1 }, V > E ? (C.sortIndex = V, t(d, C), n(c) === null && C === n(d) && (x ? (h(I), I = -1) : x = !0, P(y, V - E))) : (C.sortIndex = W, t(c, C), g || _ || (g = !0, F(j))), C;
  }, e.unstable_shouldYield = D, e.unstable_wrapCallback = function(C) {
    var L = w;
    return function() {
      var V = w;
      w = L;
      try {
        return C.apply(this, arguments);
      } finally {
        w = V;
      }
    };
  };
})(Zc);
Xc.exports = Zc;
var ym = Xc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vm = f, at = ym;
function $(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Jc = /* @__PURE__ */ new Set(), Lr = {};
function Nn(e, t) {
  Jn(e, t), Jn(e + "Capture", t);
}
function Jn(e, t) {
  for (Lr[e] = t, e = 0; e < t.length; e++) Jc.add(t[e]);
}
var At = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ma = Object.prototype.hasOwnProperty, wm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, yi = {}, vi = {};
function xm(e) {
  return ma.call(vi, e) ? !0 : ma.call(yi, e) ? !1 : wm.test(e) ? vi[e] = !0 : (yi[e] = !0, !1);
}
function _m(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function km(e, t, n, r) {
  if (t === null || typeof t > "u" || _m(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function Ge(e, t, n, r, l, a, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
}
var Fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Fe[e] = new Ge(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Fe[t] = new Ge(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Fe[e] = new Ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Fe[e] = new Ge(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Fe[e] = new Ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Fe[e] = new Ge(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Fe[e] = new Ge(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Fe[e] = new Ge(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Fe[e] = new Ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var po = /[\-:]([a-z])/g;
function go(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    po,
    go
  );
  Fe[t] = new Ge(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(po, go);
  Fe[t] = new Ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(po, go);
  Fe[t] = new Ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Fe[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Fe.xlinkHref = new Ge("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Fe[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function yo(e, t, n, r) {
  var l = Fe.hasOwnProperty(t) ? Fe[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (km(t, n, l, r) && (n = null), r || l === null ? xm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ut = vm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, fl = Symbol.for("react.element"), Rn = Symbol.for("react.portal"), On = Symbol.for("react.fragment"), vo = Symbol.for("react.strict_mode"), ha = Symbol.for("react.profiler"), ed = Symbol.for("react.provider"), td = Symbol.for("react.context"), wo = Symbol.for("react.forward_ref"), pa = Symbol.for("react.suspense"), ga = Symbol.for("react.suspense_list"), xo = Symbol.for("react.memo"), Ht = Symbol.for("react.lazy"), nd = Symbol.for("react.offscreen"), wi = Symbol.iterator;
function ur(e) {
  return e === null || typeof e != "object" ? null : (e = wi && e[wi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Me = Object.assign, zs;
function wr(e) {
  if (zs === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    zs = t && t[1] || "";
  }
  return `
` + zs + e;
}
var Fs = !1;
function Ws(e, t) {
  if (!e || Fs) return "";
  Fs = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (d) {
        var r = d;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (d) {
        r = d;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (var l = d.stack.split(`
`), a = r.stack.split(`
`), o = l.length - 1, i = a.length - 1; 1 <= o && 0 <= i && l[o] !== a[i]; ) i--;
      for (; 1 <= o && 0 <= i; o--, i--) if (l[o] !== a[i]) {
        if (o !== 1 || i !== 1)
          do
            if (o--, i--, 0 > i || l[o] !== a[i]) {
              var c = `
` + l[o].replace(" at new ", " at ");
              return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c;
            }
          while (1 <= o && 0 <= i);
        break;
      }
    }
  } finally {
    Fs = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? wr(e) : "";
}
function Sm(e) {
  switch (e.tag) {
    case 5:
      return wr(e.type);
    case 16:
      return wr("Lazy");
    case 13:
      return wr("Suspense");
    case 19:
      return wr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ws(e.type, !1), e;
    case 11:
      return e = Ws(e.type.render, !1), e;
    case 1:
      return e = Ws(e.type, !0), e;
    default:
      return "";
  }
}
function ya(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case On:
      return "Fragment";
    case Rn:
      return "Portal";
    case ha:
      return "Profiler";
    case vo:
      return "StrictMode";
    case pa:
      return "Suspense";
    case ga:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case td:
      return (e.displayName || "Context") + ".Consumer";
    case ed:
      return (e._context.displayName || "Context") + ".Provider";
    case wo:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case xo:
      return t = e.displayName || null, t !== null ? t : ya(e.type) || "Memo";
    case Ht:
      t = e._payload, e = e._init;
      try {
        return ya(e(t));
      } catch {
      }
  }
  return null;
}
function jm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ya(t);
    case 8:
      return t === vo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function on(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function rd(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function bm(e) {
  var t = rd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, a = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(o) {
      r = "" + o, a.call(this, o);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(o) {
      r = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function ml(e) {
  e._valueTracker || (e._valueTracker = bm(e));
}
function ld(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = rd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Hl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function va(e, t) {
  var n = t.checked;
  return Me({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function xi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = on(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function sd(e, t) {
  t = t.checked, t != null && yo(e, "checked", t, !1);
}
function wa(e, t) {
  sd(e, t);
  var n = on(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? xa(e, t.type, n) : t.hasOwnProperty("defaultValue") && xa(e, t.type, on(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function _i(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function xa(e, t, n) {
  (t !== "number" || Hl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var xr = Array.isArray;
function Kn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + on(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function _a(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error($(91));
  return Me({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ki(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error($(92));
      if (xr(n)) {
        if (1 < n.length) throw Error($(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: on(n) };
}
function ad(e, t) {
  var n = on(t.value), r = on(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Si(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function od(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ka(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? od(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var hl, id = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (hl = hl || document.createElement("div"), hl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = hl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Dr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Sr = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Em = ["Webkit", "ms", "Moz", "O"];
Object.keys(Sr).forEach(function(e) {
  Em.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Sr[t] = Sr[e];
  });
});
function cd(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Sr.hasOwnProperty(e) && Sr[e] ? ("" + t).trim() : t + "px";
}
function dd(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = cd(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Cm = Me({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Sa(e, t) {
  if (t) {
    if (Cm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error($(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error($(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error($(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error($(62));
  }
}
function ja(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ba = null;
function _o(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ea = null, Gn = null, qn = null;
function ji(e) {
  if (e = rl(e)) {
    if (typeof Ea != "function") throw Error($(280));
    var t = e.stateNode;
    t && (t = ks(t), Ea(e.stateNode, e.type, t));
  }
}
function ud(e) {
  Gn ? qn ? qn.push(e) : qn = [e] : Gn = e;
}
function fd() {
  if (Gn) {
    var e = Gn, t = qn;
    if (qn = Gn = null, ji(e), t) for (e = 0; e < t.length; e++) ji(t[e]);
  }
}
function md(e, t) {
  return e(t);
}
function hd() {
}
var $s = !1;
function pd(e, t, n) {
  if ($s) return e(t, n);
  $s = !0;
  try {
    return md(e, t, n);
  } finally {
    $s = !1, (Gn !== null || qn !== null) && (hd(), fd());
  }
}
function Pr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ks(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error($(231, t, typeof n));
  return n;
}
var Ca = !1;
if (At) try {
  var fr = {};
  Object.defineProperty(fr, "passive", { get: function() {
    Ca = !0;
  } }), window.addEventListener("test", fr, fr), window.removeEventListener("test", fr, fr);
} catch {
  Ca = !1;
}
function Nm(e, t, n, r, l, a, o, i, c) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (m) {
    this.onError(m);
  }
}
var jr = !1, Kl = null, Gl = !1, Na = null, Mm = { onError: function(e) {
  jr = !0, Kl = e;
} };
function Im(e, t, n, r, l, a, o, i, c) {
  jr = !1, Kl = null, Nm.apply(Mm, arguments);
}
function Tm(e, t, n, r, l, a, o, i, c) {
  if (Im.apply(this, arguments), jr) {
    if (jr) {
      var d = Kl;
      jr = !1, Kl = null;
    } else throw Error($(198));
    Gl || (Gl = !0, Na = d);
  }
}
function Mn(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function gd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function bi(e) {
  if (Mn(e) !== e) throw Error($(188));
}
function Lm(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Mn(e), t === null) throw Error($(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var a = l.alternate;
    if (a === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === a.child) {
      for (a = l.child; a; ) {
        if (a === n) return bi(l), e;
        if (a === r) return bi(l), t;
        a = a.sibling;
      }
      throw Error($(188));
    }
    if (n.return !== r.return) n = l, r = a;
    else {
      for (var o = !1, i = l.child; i; ) {
        if (i === n) {
          o = !0, n = l, r = a;
          break;
        }
        if (i === r) {
          o = !0, r = l, n = a;
          break;
        }
        i = i.sibling;
      }
      if (!o) {
        for (i = a.child; i; ) {
          if (i === n) {
            o = !0, n = a, r = l;
            break;
          }
          if (i === r) {
            o = !0, r = a, n = l;
            break;
          }
          i = i.sibling;
        }
        if (!o) throw Error($(189));
      }
    }
    if (n.alternate !== r) throw Error($(190));
  }
  if (n.tag !== 3) throw Error($(188));
  return n.stateNode.current === n ? e : t;
}
function yd(e) {
  return e = Lm(e), e !== null ? vd(e) : null;
}
function vd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = vd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var wd = at.unstable_scheduleCallback, Ei = at.unstable_cancelCallback, Dm = at.unstable_shouldYield, Pm = at.unstable_requestPaint, Te = at.unstable_now, Rm = at.unstable_getCurrentPriorityLevel, ko = at.unstable_ImmediatePriority, xd = at.unstable_UserBlockingPriority, ql = at.unstable_NormalPriority, Om = at.unstable_LowPriority, _d = at.unstable_IdlePriority, vs = null, Mt = null;
function Am(e) {
  if (Mt && typeof Mt.onCommitFiberRoot == "function") try {
    Mt.onCommitFiberRoot(vs, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var kt = Math.clz32 ? Math.clz32 : Wm, zm = Math.log, Fm = Math.LN2;
function Wm(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (zm(e) / Fm | 0) | 0;
}
var pl = 64, gl = 4194304;
function _r(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Yl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, a = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var i = o & ~l;
    i !== 0 ? r = _r(i) : (a &= o, a !== 0 && (r = _r(a)));
  } else o = n & ~l, o !== 0 ? r = _r(o) : a !== 0 && (r = _r(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, a = t & -t, l >= a || l === 16 && (a & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - kt(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function $m(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Um(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - kt(a), i = 1 << o, c = l[o];
    c === -1 ? (!(i & n) || i & r) && (l[o] = $m(i, t)) : c <= t && (e.expiredLanes |= i), a &= ~i;
  }
}
function Ma(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function kd() {
  var e = pl;
  return pl <<= 1, !(pl & 4194240) && (pl = 64), e;
}
function Us(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function tl(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - kt(t), e[t] = n;
}
function Vm(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - kt(n), a = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~a;
  }
}
function So(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - kt(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var ye = 0;
function Sd(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var jd, jo, bd, Ed, Cd, Ia = !1, yl = [], Jt = null, en = null, tn = null, Rr = /* @__PURE__ */ new Map(), Or = /* @__PURE__ */ new Map(), Gt = [], Bm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ci(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Jt = null;
      break;
    case "dragenter":
    case "dragleave":
      en = null;
      break;
    case "mouseover":
    case "mouseout":
      tn = null;
      break;
    case "pointerover":
    case "pointerout":
      Rr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Or.delete(t.pointerId);
  }
}
function mr(e, t, n, r, l, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [l] }, t !== null && (t = rl(t), t !== null && jo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Qm(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Jt = mr(Jt, e, t, n, r, l), !0;
    case "dragenter":
      return en = mr(en, e, t, n, r, l), !0;
    case "mouseover":
      return tn = mr(tn, e, t, n, r, l), !0;
    case "pointerover":
      var a = l.pointerId;
      return Rr.set(a, mr(Rr.get(a) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return a = l.pointerId, Or.set(a, mr(Or.get(a) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Nd(e) {
  var t = yn(e.target);
  if (t !== null) {
    var n = Mn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = gd(n), t !== null) {
          e.blockedOn = t, Cd(e.priority, function() {
            bd(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Rl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ta(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ba = r, n.target.dispatchEvent(r), ba = null;
    } else return t = rl(n), t !== null && jo(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ni(e, t, n) {
  Rl(e) && n.delete(t);
}
function Hm() {
  Ia = !1, Jt !== null && Rl(Jt) && (Jt = null), en !== null && Rl(en) && (en = null), tn !== null && Rl(tn) && (tn = null), Rr.forEach(Ni), Or.forEach(Ni);
}
function hr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ia || (Ia = !0, at.unstable_scheduleCallback(at.unstable_NormalPriority, Hm)));
}
function Ar(e) {
  function t(l) {
    return hr(l, e);
  }
  if (0 < yl.length) {
    hr(yl[0], e);
    for (var n = 1; n < yl.length; n++) {
      var r = yl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Jt !== null && hr(Jt, e), en !== null && hr(en, e), tn !== null && hr(tn, e), Rr.forEach(t), Or.forEach(t), n = 0; n < Gt.length; n++) r = Gt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Gt.length && (n = Gt[0], n.blockedOn === null); ) Nd(n), n.blockedOn === null && Gt.shift();
}
var Yn = Ut.ReactCurrentBatchConfig, Xl = !0;
function Km(e, t, n, r) {
  var l = ye, a = Yn.transition;
  Yn.transition = null;
  try {
    ye = 1, bo(e, t, n, r);
  } finally {
    ye = l, Yn.transition = a;
  }
}
function Gm(e, t, n, r) {
  var l = ye, a = Yn.transition;
  Yn.transition = null;
  try {
    ye = 4, bo(e, t, n, r);
  } finally {
    ye = l, Yn.transition = a;
  }
}
function bo(e, t, n, r) {
  if (Xl) {
    var l = Ta(e, t, n, r);
    if (l === null) Zs(e, t, r, Zl, n), Ci(e, r);
    else if (Qm(l, e, t, n, r)) r.stopPropagation();
    else if (Ci(e, r), t & 4 && -1 < Bm.indexOf(e)) {
      for (; l !== null; ) {
        var a = rl(l);
        if (a !== null && jd(a), a = Ta(e, t, n, r), a === null && Zs(e, t, r, Zl, n), a === l) break;
        l = a;
      }
      l !== null && r.stopPropagation();
    } else Zs(e, t, r, null, n);
  }
}
var Zl = null;
function Ta(e, t, n, r) {
  if (Zl = null, e = _o(r), e = yn(e), e !== null) if (t = Mn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = gd(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Zl = e, null;
}
function Md(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Rm()) {
        case ko:
          return 1;
        case xd:
          return 4;
        case ql:
        case Om:
          return 16;
        case _d:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Xt = null, Eo = null, Ol = null;
function Id() {
  if (Ol) return Ol;
  var e, t = Eo, n = t.length, r, l = "value" in Xt ? Xt.value : Xt.textContent, a = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[a - r]; r++) ;
  return Ol = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Al(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function vl() {
  return !0;
}
function Mi() {
  return !1;
}
function it(e) {
  function t(n, r, l, a, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(a) : a[i]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? vl : Mi, this.isPropagationStopped = Mi, this;
  }
  return Me(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = vl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = vl);
  }, persist: function() {
  }, isPersistent: vl }), t;
}
var ir = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Co = it(ir), nl = Me({}, ir, { view: 0, detail: 0 }), qm = it(nl), Vs, Bs, pr, ws = Me({}, nl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: No, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== pr && (pr && e.type === "mousemove" ? (Vs = e.screenX - pr.screenX, Bs = e.screenY - pr.screenY) : Bs = Vs = 0, pr = e), Vs);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Bs;
} }), Ii = it(ws), Ym = Me({}, ws, { dataTransfer: 0 }), Xm = it(Ym), Zm = Me({}, nl, { relatedTarget: 0 }), Qs = it(Zm), Jm = Me({}, ir, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), eh = it(Jm), th = Me({}, ir, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), nh = it(th), rh = Me({}, ir, { data: 0 }), Ti = it(rh), lh = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, sh = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, ah = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function oh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ah[e]) ? !!t[e] : !1;
}
function No() {
  return oh;
}
var ih = Me({}, nl, { key: function(e) {
  if (e.key) {
    var t = lh[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Al(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? sh[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: No, charCode: function(e) {
  return e.type === "keypress" ? Al(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Al(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), ch = it(ih), dh = Me({}, ws, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Li = it(dh), uh = Me({}, nl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: No }), fh = it(uh), mh = Me({}, ir, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), hh = it(mh), ph = Me({}, ws, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), gh = it(ph), yh = [9, 13, 27, 32], Mo = At && "CompositionEvent" in window, br = null;
At && "documentMode" in document && (br = document.documentMode);
var vh = At && "TextEvent" in window && !br, Td = At && (!Mo || br && 8 < br && 11 >= br), Di = " ", Pi = !1;
function Ld(e, t) {
  switch (e) {
    case "keyup":
      return yh.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Dd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var An = !1;
function wh(e, t) {
  switch (e) {
    case "compositionend":
      return Dd(t);
    case "keypress":
      return t.which !== 32 ? null : (Pi = !0, Di);
    case "textInput":
      return e = t.data, e === Di && Pi ? null : e;
    default:
      return null;
  }
}
function xh(e, t) {
  if (An) return e === "compositionend" || !Mo && Ld(e, t) ? (e = Id(), Ol = Eo = Xt = null, An = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Td && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var _h = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ri(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!_h[e.type] : t === "textarea";
}
function Pd(e, t, n, r) {
  ud(r), t = Jl(t, "onChange"), 0 < t.length && (n = new Co("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Er = null, zr = null;
function kh(e) {
  Qd(e, 0);
}
function xs(e) {
  var t = Wn(e);
  if (ld(t)) return e;
}
function Sh(e, t) {
  if (e === "change") return t;
}
var Rd = !1;
if (At) {
  var Hs;
  if (At) {
    var Ks = "oninput" in document;
    if (!Ks) {
      var Oi = document.createElement("div");
      Oi.setAttribute("oninput", "return;"), Ks = typeof Oi.oninput == "function";
    }
    Hs = Ks;
  } else Hs = !1;
  Rd = Hs && (!document.documentMode || 9 < document.documentMode);
}
function Ai() {
  Er && (Er.detachEvent("onpropertychange", Od), zr = Er = null);
}
function Od(e) {
  if (e.propertyName === "value" && xs(zr)) {
    var t = [];
    Pd(t, zr, e, _o(e)), pd(kh, t);
  }
}
function jh(e, t, n) {
  e === "focusin" ? (Ai(), Er = t, zr = n, Er.attachEvent("onpropertychange", Od)) : e === "focusout" && Ai();
}
function bh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return xs(zr);
}
function Eh(e, t) {
  if (e === "click") return xs(t);
}
function Ch(e, t) {
  if (e === "input" || e === "change") return xs(t);
}
function Nh(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var jt = typeof Object.is == "function" ? Object.is : Nh;
function Fr(e, t) {
  if (jt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ma.call(t, l) || !jt(e[l], t[l])) return !1;
  }
  return !0;
}
function zi(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Fi(e, t) {
  var n = zi(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = zi(n);
  }
}
function Ad(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ad(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function zd() {
  for (var e = window, t = Hl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Hl(e.document);
  }
  return t;
}
function Io(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Mh(e) {
  var t = zd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Ad(n.ownerDocument.documentElement, n)) {
    if (r !== null && Io(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, a = Math.min(r.start, l);
        r = r.end === void 0 ? a : Math.min(r.end, l), !e.extend && a > r && (l = r, r = a, a = l), l = Fi(n, a);
        var o = Fi(
          n,
          r
        );
        l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Ih = At && "documentMode" in document && 11 >= document.documentMode, zn = null, La = null, Cr = null, Da = !1;
function Wi(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Da || zn == null || zn !== Hl(r) || (r = zn, "selectionStart" in r && Io(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Cr && Fr(Cr, r) || (Cr = r, r = Jl(La, "onSelect"), 0 < r.length && (t = new Co("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = zn)));
}
function wl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Fn = { animationend: wl("Animation", "AnimationEnd"), animationiteration: wl("Animation", "AnimationIteration"), animationstart: wl("Animation", "AnimationStart"), transitionend: wl("Transition", "TransitionEnd") }, Gs = {}, Fd = {};
At && (Fd = document.createElement("div").style, "AnimationEvent" in window || (delete Fn.animationend.animation, delete Fn.animationiteration.animation, delete Fn.animationstart.animation), "TransitionEvent" in window || delete Fn.transitionend.transition);
function _s(e) {
  if (Gs[e]) return Gs[e];
  if (!Fn[e]) return e;
  var t = Fn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Fd) return Gs[e] = t[n];
  return e;
}
var Wd = _s("animationend"), $d = _s("animationiteration"), Ud = _s("animationstart"), Vd = _s("transitionend"), Bd = /* @__PURE__ */ new Map(), $i = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function dn(e, t) {
  Bd.set(e, t), Nn(t, [e]);
}
for (var qs = 0; qs < $i.length; qs++) {
  var Ys = $i[qs], Th = Ys.toLowerCase(), Lh = Ys[0].toUpperCase() + Ys.slice(1);
  dn(Th, "on" + Lh);
}
dn(Wd, "onAnimationEnd");
dn($d, "onAnimationIteration");
dn(Ud, "onAnimationStart");
dn("dblclick", "onDoubleClick");
dn("focusin", "onFocus");
dn("focusout", "onBlur");
dn(Vd, "onTransitionEnd");
Jn("onMouseEnter", ["mouseout", "mouseover"]);
Jn("onMouseLeave", ["mouseout", "mouseover"]);
Jn("onPointerEnter", ["pointerout", "pointerover"]);
Jn("onPointerLeave", ["pointerout", "pointerover"]);
Nn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Nn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Nn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Nn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Nn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Nn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var kr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Dh = new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));
function Ui(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Tm(r, t, void 0, e), e.currentTarget = null;
}
function Qd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var i = r[o], c = i.instance, d = i.currentTarget;
        if (i = i.listener, c !== a && l.isPropagationStopped()) break e;
        Ui(l, i, d), a = c;
      }
      else for (o = 0; o < r.length; o++) {
        if (i = r[o], c = i.instance, d = i.currentTarget, i = i.listener, c !== a && l.isPropagationStopped()) break e;
        Ui(l, i, d), a = c;
      }
    }
  }
  if (Gl) throw e = Na, Gl = !1, Na = null, e;
}
function ke(e, t) {
  var n = t[za];
  n === void 0 && (n = t[za] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Hd(t, e, 2, !1), n.add(r));
}
function Xs(e, t, n) {
  var r = 0;
  t && (r |= 4), Hd(n, e, r, t);
}
var xl = "_reactListening" + Math.random().toString(36).slice(2);
function Wr(e) {
  if (!e[xl]) {
    e[xl] = !0, Jc.forEach(function(n) {
      n !== "selectionchange" && (Dh.has(n) || Xs(n, !1, e), Xs(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[xl] || (t[xl] = !0, Xs("selectionchange", !1, t));
  }
}
function Hd(e, t, n, r) {
  switch (Md(t)) {
    case 1:
      var l = Km;
      break;
    case 4:
      l = Gm;
      break;
    default:
      l = bo;
  }
  n = l.bind(null, t, n, e), l = void 0, !Ca || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Zs(e, t, n, r, l) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var i = r.stateNode.containerInfo;
      if (i === l || i.nodeType === 8 && i.parentNode === l) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var c = o.tag;
        if ((c === 3 || c === 4) && (c = o.stateNode.containerInfo, c === l || c.nodeType === 8 && c.parentNode === l)) return;
        o = o.return;
      }
      for (; i !== null; ) {
        if (o = yn(i), o === null) return;
        if (c = o.tag, c === 5 || c === 6) {
          r = a = o;
          continue e;
        }
        i = i.parentNode;
      }
    }
    r = r.return;
  }
  pd(function() {
    var d = a, m = _o(n), v = [];
    e: {
      var w = Bd.get(e);
      if (w !== void 0) {
        var _ = Co, g = e;
        switch (e) {
          case "keypress":
            if (Al(n) === 0) break e;
          case "keydown":
          case "keyup":
            _ = ch;
            break;
          case "focusin":
            g = "focus", _ = Qs;
            break;
          case "focusout":
            g = "blur", _ = Qs;
            break;
          case "beforeblur":
          case "afterblur":
            _ = Qs;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            _ = Ii;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            _ = Xm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            _ = fh;
            break;
          case Wd:
          case $d:
          case Ud:
            _ = eh;
            break;
          case Vd:
            _ = hh;
            break;
          case "scroll":
            _ = qm;
            break;
          case "wheel":
            _ = gh;
            break;
          case "copy":
          case "cut":
          case "paste":
            _ = nh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            _ = Li;
        }
        var x = (t & 4) !== 0, S = !x && e === "scroll", h = x ? w !== null ? w + "Capture" : null : w;
        x = [];
        for (var u = d, p; u !== null; ) {
          p = u;
          var y = p.stateNode;
          if (p.tag === 5 && y !== null && (p = y, h !== null && (y = Pr(u, h), y != null && x.push($r(u, y, p)))), S) break;
          u = u.return;
        }
        0 < x.length && (w = new _(w, g, null, n, m), v.push({ event: w, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (w = e === "mouseover" || e === "pointerover", _ = e === "mouseout" || e === "pointerout", w && n !== ba && (g = n.relatedTarget || n.fromElement) && (yn(g) || g[zt])) break e;
        if ((_ || w) && (w = m.window === m ? m : (w = m.ownerDocument) ? w.defaultView || w.parentWindow : window, _ ? (g = n.relatedTarget || n.toElement, _ = d, g = g ? yn(g) : null, g !== null && (S = Mn(g), g !== S || g.tag !== 5 && g.tag !== 6) && (g = null)) : (_ = null, g = d), _ !== g)) {
          if (x = Ii, y = "onMouseLeave", h = "onMouseEnter", u = "mouse", (e === "pointerout" || e === "pointerover") && (x = Li, y = "onPointerLeave", h = "onPointerEnter", u = "pointer"), S = _ == null ? w : Wn(_), p = g == null ? w : Wn(g), w = new x(y, u + "leave", _, n, m), w.target = S, w.relatedTarget = p, y = null, yn(m) === d && (x = new x(h, u + "enter", g, n, m), x.target = p, x.relatedTarget = S, y = x), S = y, _ && g) t: {
            for (x = _, h = g, u = 0, p = x; p; p = Dn(p)) u++;
            for (p = 0, y = h; y; y = Dn(y)) p++;
            for (; 0 < u - p; ) x = Dn(x), u--;
            for (; 0 < p - u; ) h = Dn(h), p--;
            for (; u--; ) {
              if (x === h || h !== null && x === h.alternate) break t;
              x = Dn(x), h = Dn(h);
            }
            x = null;
          }
          else x = null;
          _ !== null && Vi(v, w, _, x, !1), g !== null && S !== null && Vi(v, S, g, x, !0);
        }
      }
      e: {
        if (w = d ? Wn(d) : window, _ = w.nodeName && w.nodeName.toLowerCase(), _ === "select" || _ === "input" && w.type === "file") var j = Sh;
        else if (Ri(w)) if (Rd) j = Ch;
        else {
          j = bh;
          var k = jh;
        }
        else (_ = w.nodeName) && _.toLowerCase() === "input" && (w.type === "checkbox" || w.type === "radio") && (j = Eh);
        if (j && (j = j(e, d))) {
          Pd(v, j, n, m);
          break e;
        }
        k && k(e, w, d), e === "focusout" && (k = w._wrapperState) && k.controlled && w.type === "number" && xa(w, "number", w.value);
      }
      switch (k = d ? Wn(d) : window, e) {
        case "focusin":
          (Ri(k) || k.contentEditable === "true") && (zn = k, La = d, Cr = null);
          break;
        case "focusout":
          Cr = La = zn = null;
          break;
        case "mousedown":
          Da = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Da = !1, Wi(v, n, m);
          break;
        case "selectionchange":
          if (Ih) break;
        case "keydown":
        case "keyup":
          Wi(v, n, m);
      }
      var b;
      if (Mo) e: {
        switch (e) {
          case "compositionstart":
            var I = "onCompositionStart";
            break e;
          case "compositionend":
            I = "onCompositionEnd";
            break e;
          case "compositionupdate":
            I = "onCompositionUpdate";
            break e;
        }
        I = void 0;
      }
      else An ? Ld(e, n) && (I = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (I = "onCompositionStart");
      I && (Td && n.locale !== "ko" && (An || I !== "onCompositionStart" ? I === "onCompositionEnd" && An && (b = Id()) : (Xt = m, Eo = "value" in Xt ? Xt.value : Xt.textContent, An = !0)), k = Jl(d, I), 0 < k.length && (I = new Ti(I, e, null, n, m), v.push({ event: I, listeners: k }), b ? I.data = b : (b = Dd(n), b !== null && (I.data = b)))), (b = vh ? wh(e, n) : xh(e, n)) && (d = Jl(d, "onBeforeInput"), 0 < d.length && (m = new Ti("onBeforeInput", "beforeinput", null, n, m), v.push({ event: m, listeners: d }), m.data = b));
    }
    Qd(v, t);
  });
}
function $r(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Jl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, a = l.stateNode;
    l.tag === 5 && a !== null && (l = a, a = Pr(e, n), a != null && r.unshift($r(e, a, l)), a = Pr(e, t), a != null && r.push($r(e, a, l))), e = e.return;
  }
  return r;
}
function Dn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Vi(e, t, n, r, l) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var i = n, c = i.alternate, d = i.stateNode;
    if (c !== null && c === r) break;
    i.tag === 5 && d !== null && (i = d, l ? (c = Pr(n, a), c != null && o.unshift($r(n, c, i))) : l || (c = Pr(n, a), c != null && o.push($r(n, c, i)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Ph = /\r\n?/g, Rh = /\u0000|\uFFFD/g;
function Bi(e) {
  return (typeof e == "string" ? e : "" + e).replace(Ph, `
`).replace(Rh, "");
}
function _l(e, t, n) {
  if (t = Bi(t), Bi(e) !== t && n) throw Error($(425));
}
function es() {
}
var Pa = null, Ra = null;
function Oa(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Aa = typeof setTimeout == "function" ? setTimeout : void 0, Oh = typeof clearTimeout == "function" ? clearTimeout : void 0, Qi = typeof Promise == "function" ? Promise : void 0, Ah = typeof queueMicrotask == "function" ? queueMicrotask : typeof Qi < "u" ? function(e) {
  return Qi.resolve(null).then(e).catch(zh);
} : Aa;
function zh(e) {
  setTimeout(function() {
    throw e;
  });
}
function Js(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Ar(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Ar(t);
}
function nn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Hi(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var cr = Math.random().toString(36).slice(2), Nt = "__reactFiber$" + cr, Ur = "__reactProps$" + cr, zt = "__reactContainer$" + cr, za = "__reactEvents$" + cr, Fh = "__reactListeners$" + cr, Wh = "__reactHandles$" + cr;
function yn(e) {
  var t = e[Nt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[zt] || n[Nt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Hi(e); e !== null; ) {
        if (n = e[Nt]) return n;
        e = Hi(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function rl(e) {
  return e = e[Nt] || e[zt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Wn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error($(33));
}
function ks(e) {
  return e[Ur] || null;
}
var Fa = [], $n = -1;
function un(e) {
  return { current: e };
}
function Se(e) {
  0 > $n || (e.current = Fa[$n], Fa[$n] = null, $n--);
}
function we(e, t) {
  $n++, Fa[$n] = e.current, e.current = t;
}
var cn = {}, Be = un(cn), Xe = un(!1), kn = cn;
function er(e, t) {
  var n = e.type.contextTypes;
  if (!n) return cn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, a;
  for (a in n) l[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Ze(e) {
  return e = e.childContextTypes, e != null;
}
function ts() {
  Se(Xe), Se(Be);
}
function Ki(e, t, n) {
  if (Be.current !== cn) throw Error($(168));
  we(Be, t), we(Xe, n);
}
function Kd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error($(108, jm(e) || "Unknown", l));
  return Me({}, n, r);
}
function ns(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || cn, kn = Be.current, we(Be, e), we(Xe, Xe.current), !0;
}
function Gi(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error($(169));
  n ? (e = Kd(e, t, kn), r.__reactInternalMemoizedMergedChildContext = e, Se(Xe), Se(Be), we(Be, e)) : Se(Xe), we(Xe, n);
}
var Dt = null, Ss = !1, ea = !1;
function Gd(e) {
  Dt === null ? Dt = [e] : Dt.push(e);
}
function $h(e) {
  Ss = !0, Gd(e);
}
function fn() {
  if (!ea && Dt !== null) {
    ea = !0;
    var e = 0, t = ye;
    try {
      var n = Dt;
      for (ye = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Dt = null, Ss = !1;
    } catch (l) {
      throw Dt !== null && (Dt = Dt.slice(e + 1)), wd(ko, fn), l;
    } finally {
      ye = t, ea = !1;
    }
  }
  return null;
}
var Un = [], Vn = 0, rs = null, ls = 0, dt = [], ut = 0, Sn = null, Pt = 1, Rt = "";
function pn(e, t) {
  Un[Vn++] = ls, Un[Vn++] = rs, rs = e, ls = t;
}
function qd(e, t, n) {
  dt[ut++] = Pt, dt[ut++] = Rt, dt[ut++] = Sn, Sn = e;
  var r = Pt;
  e = Rt;
  var l = 32 - kt(r) - 1;
  r &= ~(1 << l), n += 1;
  var a = 32 - kt(t) + l;
  if (30 < a) {
    var o = l - l % 5;
    a = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Pt = 1 << 32 - kt(t) + l | n << l | r, Rt = a + e;
  } else Pt = 1 << a | n << l | r, Rt = e;
}
function To(e) {
  e.return !== null && (pn(e, 1), qd(e, 1, 0));
}
function Lo(e) {
  for (; e === rs; ) rs = Un[--Vn], Un[Vn] = null, ls = Un[--Vn], Un[Vn] = null;
  for (; e === Sn; ) Sn = dt[--ut], dt[ut] = null, Rt = dt[--ut], dt[ut] = null, Pt = dt[--ut], dt[ut] = null;
}
var st = null, lt = null, be = !1, xt = null;
function Yd(e, t) {
  var n = ft(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function qi(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, st = e, lt = nn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, st = e, lt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Sn !== null ? { id: Pt, overflow: Rt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ft(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, st = e, lt = null, !0) : !1;
    default:
      return !1;
  }
}
function Wa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function $a(e) {
  if (be) {
    var t = lt;
    if (t) {
      var n = t;
      if (!qi(e, t)) {
        if (Wa(e)) throw Error($(418));
        t = nn(n.nextSibling);
        var r = st;
        t && qi(e, t) ? Yd(r, n) : (e.flags = e.flags & -4097 | 2, be = !1, st = e);
      }
    } else {
      if (Wa(e)) throw Error($(418));
      e.flags = e.flags & -4097 | 2, be = !1, st = e;
    }
  }
}
function Yi(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  st = e;
}
function kl(e) {
  if (e !== st) return !1;
  if (!be) return Yi(e), be = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Oa(e.type, e.memoizedProps)), t && (t = lt)) {
    if (Wa(e)) throw Xd(), Error($(418));
    for (; t; ) Yd(e, t), t = nn(t.nextSibling);
  }
  if (Yi(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error($(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              lt = nn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      lt = null;
    }
  } else lt = st ? nn(e.stateNode.nextSibling) : null;
  return !0;
}
function Xd() {
  for (var e = lt; e; ) e = nn(e.nextSibling);
}
function tr() {
  lt = st = null, be = !1;
}
function Do(e) {
  xt === null ? xt = [e] : xt.push(e);
}
var Uh = Ut.ReactCurrentBatchConfig;
function gr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error($(309));
        var r = n.stateNode;
      }
      if (!r) throw Error($(147, e));
      var l = r, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(o) {
        var i = l.refs;
        o === null ? delete i[a] : i[a] = o;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string") throw Error($(284));
    if (!n._owner) throw Error($(290, e));
  }
  return e;
}
function Sl(e, t) {
  throw e = Object.prototype.toString.call(t), Error($(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Xi(e) {
  var t = e._init;
  return t(e._payload);
}
function Zd(e) {
  function t(h, u) {
    if (e) {
      var p = h.deletions;
      p === null ? (h.deletions = [u], h.flags |= 16) : p.push(u);
    }
  }
  function n(h, u) {
    if (!e) return null;
    for (; u !== null; ) t(h, u), u = u.sibling;
    return null;
  }
  function r(h, u) {
    for (h = /* @__PURE__ */ new Map(); u !== null; ) u.key !== null ? h.set(u.key, u) : h.set(u.index, u), u = u.sibling;
    return h;
  }
  function l(h, u) {
    return h = an(h, u), h.index = 0, h.sibling = null, h;
  }
  function a(h, u, p) {
    return h.index = p, e ? (p = h.alternate, p !== null ? (p = p.index, p < u ? (h.flags |= 2, u) : p) : (h.flags |= 2, u)) : (h.flags |= 1048576, u);
  }
  function o(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function i(h, u, p, y) {
    return u === null || u.tag !== 6 ? (u = oa(p, h.mode, y), u.return = h, u) : (u = l(u, p), u.return = h, u);
  }
  function c(h, u, p, y) {
    var j = p.type;
    return j === On ? m(h, u, p.props.children, y, p.key) : u !== null && (u.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Ht && Xi(j) === u.type) ? (y = l(u, p.props), y.ref = gr(h, u, p), y.return = h, y) : (y = Bl(p.type, p.key, p.props, null, h.mode, y), y.ref = gr(h, u, p), y.return = h, y);
  }
  function d(h, u, p, y) {
    return u === null || u.tag !== 4 || u.stateNode.containerInfo !== p.containerInfo || u.stateNode.implementation !== p.implementation ? (u = ia(p, h.mode, y), u.return = h, u) : (u = l(u, p.children || []), u.return = h, u);
  }
  function m(h, u, p, y, j) {
    return u === null || u.tag !== 7 ? (u = _n(p, h.mode, y, j), u.return = h, u) : (u = l(u, p), u.return = h, u);
  }
  function v(h, u, p) {
    if (typeof u == "string" && u !== "" || typeof u == "number") return u = oa("" + u, h.mode, p), u.return = h, u;
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case fl:
          return p = Bl(u.type, u.key, u.props, null, h.mode, p), p.ref = gr(h, null, u), p.return = h, p;
        case Rn:
          return u = ia(u, h.mode, p), u.return = h, u;
        case Ht:
          var y = u._init;
          return v(h, y(u._payload), p);
      }
      if (xr(u) || ur(u)) return u = _n(u, h.mode, p, null), u.return = h, u;
      Sl(h, u);
    }
    return null;
  }
  function w(h, u, p, y) {
    var j = u !== null ? u.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return j !== null ? null : i(h, u, "" + p, y);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case fl:
          return p.key === j ? c(h, u, p, y) : null;
        case Rn:
          return p.key === j ? d(h, u, p, y) : null;
        case Ht:
          return j = p._init, w(
            h,
            u,
            j(p._payload),
            y
          );
      }
      if (xr(p) || ur(p)) return j !== null ? null : m(h, u, p, y, null);
      Sl(h, p);
    }
    return null;
  }
  function _(h, u, p, y, j) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return h = h.get(p) || null, i(u, h, "" + y, j);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case fl:
          return h = h.get(y.key === null ? p : y.key) || null, c(u, h, y, j);
        case Rn:
          return h = h.get(y.key === null ? p : y.key) || null, d(u, h, y, j);
        case Ht:
          var k = y._init;
          return _(h, u, p, k(y._payload), j);
      }
      if (xr(y) || ur(y)) return h = h.get(p) || null, m(u, h, y, j, null);
      Sl(u, y);
    }
    return null;
  }
  function g(h, u, p, y) {
    for (var j = null, k = null, b = u, I = u = 0, O = null; b !== null && I < p.length; I++) {
      b.index > I ? (O = b, b = null) : O = b.sibling;
      var R = w(h, b, p[I], y);
      if (R === null) {
        b === null && (b = O);
        break;
      }
      e && b && R.alternate === null && t(h, b), u = a(R, u, I), k === null ? j = R : k.sibling = R, k = R, b = O;
    }
    if (I === p.length) return n(h, b), be && pn(h, I), j;
    if (b === null) {
      for (; I < p.length; I++) b = v(h, p[I], y), b !== null && (u = a(b, u, I), k === null ? j = b : k.sibling = b, k = b);
      return be && pn(h, I), j;
    }
    for (b = r(h, b); I < p.length; I++) O = _(b, h, I, p[I], y), O !== null && (e && O.alternate !== null && b.delete(O.key === null ? I : O.key), u = a(O, u, I), k === null ? j = O : k.sibling = O, k = O);
    return e && b.forEach(function(D) {
      return t(h, D);
    }), be && pn(h, I), j;
  }
  function x(h, u, p, y) {
    var j = ur(p);
    if (typeof j != "function") throw Error($(150));
    if (p = j.call(p), p == null) throw Error($(151));
    for (var k = j = null, b = u, I = u = 0, O = null, R = p.next(); b !== null && !R.done; I++, R = p.next()) {
      b.index > I ? (O = b, b = null) : O = b.sibling;
      var D = w(h, b, R.value, y);
      if (D === null) {
        b === null && (b = O);
        break;
      }
      e && b && D.alternate === null && t(h, b), u = a(D, u, I), k === null ? j = D : k.sibling = D, k = D, b = O;
    }
    if (R.done) return n(
      h,
      b
    ), be && pn(h, I), j;
    if (b === null) {
      for (; !R.done; I++, R = p.next()) R = v(h, R.value, y), R !== null && (u = a(R, u, I), k === null ? j = R : k.sibling = R, k = R);
      return be && pn(h, I), j;
    }
    for (b = r(h, b); !R.done; I++, R = p.next()) R = _(b, h, I, R.value, y), R !== null && (e && R.alternate !== null && b.delete(R.key === null ? I : R.key), u = a(R, u, I), k === null ? j = R : k.sibling = R, k = R);
    return e && b.forEach(function(U) {
      return t(h, U);
    }), be && pn(h, I), j;
  }
  function S(h, u, p, y) {
    if (typeof p == "object" && p !== null && p.type === On && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case fl:
          e: {
            for (var j = p.key, k = u; k !== null; ) {
              if (k.key === j) {
                if (j = p.type, j === On) {
                  if (k.tag === 7) {
                    n(h, k.sibling), u = l(k, p.props.children), u.return = h, h = u;
                    break e;
                  }
                } else if (k.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Ht && Xi(j) === k.type) {
                  n(h, k.sibling), u = l(k, p.props), u.ref = gr(h, k, p), u.return = h, h = u;
                  break e;
                }
                n(h, k);
                break;
              } else t(h, k);
              k = k.sibling;
            }
            p.type === On ? (u = _n(p.props.children, h.mode, y, p.key), u.return = h, h = u) : (y = Bl(p.type, p.key, p.props, null, h.mode, y), y.ref = gr(h, u, p), y.return = h, h = y);
          }
          return o(h);
        case Rn:
          e: {
            for (k = p.key; u !== null; ) {
              if (u.key === k) if (u.tag === 4 && u.stateNode.containerInfo === p.containerInfo && u.stateNode.implementation === p.implementation) {
                n(h, u.sibling), u = l(u, p.children || []), u.return = h, h = u;
                break e;
              } else {
                n(h, u);
                break;
              }
              else t(h, u);
              u = u.sibling;
            }
            u = ia(p, h.mode, y), u.return = h, h = u;
          }
          return o(h);
        case Ht:
          return k = p._init, S(h, u, k(p._payload), y);
      }
      if (xr(p)) return g(h, u, p, y);
      if (ur(p)) return x(h, u, p, y);
      Sl(h, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, u !== null && u.tag === 6 ? (n(h, u.sibling), u = l(u, p), u.return = h, h = u) : (n(h, u), u = oa(p, h.mode, y), u.return = h, h = u), o(h)) : n(h, u);
  }
  return S;
}
var nr = Zd(!0), Jd = Zd(!1), ss = un(null), as = null, Bn = null, Po = null;
function Ro() {
  Po = Bn = as = null;
}
function Oo(e) {
  var t = ss.current;
  Se(ss), e._currentValue = t;
}
function Ua(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Xn(e, t) {
  as = e, Po = Bn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ye = !0), e.firstContext = null);
}
function pt(e) {
  var t = e._currentValue;
  if (Po !== e) if (e = { context: e, memoizedValue: t, next: null }, Bn === null) {
    if (as === null) throw Error($(308));
    Bn = e, as.dependencies = { lanes: 0, firstContext: e };
  } else Bn = Bn.next = e;
  return t;
}
var vn = null;
function Ao(e) {
  vn === null ? vn = [e] : vn.push(e);
}
function eu(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Ao(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ft(e, r);
}
function Ft(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Kt = !1;
function zo(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function tu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ot(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function rn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, fe & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ft(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Ao(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ft(e, n);
}
function zl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, So(e, n);
  }
}
function Zi(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, a = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        a === null ? l = a = o : a = a.next = o, n = n.next;
      } while (n !== null);
      a === null ? l = a = t : a = a.next = t;
    } else l = a = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: a, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function os(e, t, n, r) {
  var l = e.updateQueue;
  Kt = !1;
  var a = l.firstBaseUpdate, o = l.lastBaseUpdate, i = l.shared.pending;
  if (i !== null) {
    l.shared.pending = null;
    var c = i, d = c.next;
    c.next = null, o === null ? a = d : o.next = d, o = c;
    var m = e.alternate;
    m !== null && (m = m.updateQueue, i = m.lastBaseUpdate, i !== o && (i === null ? m.firstBaseUpdate = d : i.next = d, m.lastBaseUpdate = c));
  }
  if (a !== null) {
    var v = l.baseState;
    o = 0, m = d = c = null, i = a;
    do {
      var w = i.lane, _ = i.eventTime;
      if ((r & w) === w) {
        m !== null && (m = m.next = {
          eventTime: _,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var g = e, x = i;
          switch (w = t, _ = n, x.tag) {
            case 1:
              if (g = x.payload, typeof g == "function") {
                v = g.call(_, v, w);
                break e;
              }
              v = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = x.payload, w = typeof g == "function" ? g.call(_, v, w) : g, w == null) break e;
              v = Me({}, v, w);
              break e;
            case 2:
              Kt = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, w = l.effects, w === null ? l.effects = [i] : w.push(i));
      } else _ = { eventTime: _, lane: w, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, m === null ? (d = m = _, c = v) : m = m.next = _, o |= w;
      if (i = i.next, i === null) {
        if (i = l.shared.pending, i === null) break;
        w = i, i = w.next, w.next = null, l.lastBaseUpdate = w, l.shared.pending = null;
      }
    } while (!0);
    if (m === null && (c = v), l.baseState = c, l.firstBaseUpdate = d, l.lastBaseUpdate = m, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else a === null && (l.shared.lanes = 0);
    bn |= o, e.lanes = o, e.memoizedState = v;
  }
}
function Ji(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error($(191, l));
      l.call(r);
    }
  }
}
var ll = {}, It = un(ll), Vr = un(ll), Br = un(ll);
function wn(e) {
  if (e === ll) throw Error($(174));
  return e;
}
function Fo(e, t) {
  switch (we(Br, t), we(Vr, e), we(It, ll), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ka(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ka(t, e);
  }
  Se(It), we(It, t);
}
function rr() {
  Se(It), Se(Vr), Se(Br);
}
function nu(e) {
  wn(Br.current);
  var t = wn(It.current), n = ka(t, e.type);
  t !== n && (we(Vr, e), we(It, n));
}
function Wo(e) {
  Vr.current === e && (Se(It), Se(Vr));
}
var Ce = un(0);
function is(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var ta = [];
function $o() {
  for (var e = 0; e < ta.length; e++) ta[e]._workInProgressVersionPrimary = null;
  ta.length = 0;
}
var Fl = Ut.ReactCurrentDispatcher, na = Ut.ReactCurrentBatchConfig, jn = 0, Ne = null, De = null, Re = null, cs = !1, Nr = !1, Qr = 0, Vh = 0;
function $e() {
  throw Error($(321));
}
function Uo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!jt(e[n], t[n])) return !1;
  return !0;
}
function Vo(e, t, n, r, l, a) {
  if (jn = a, Ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Fl.current = e === null || e.memoizedState === null ? Kh : Gh, e = n(r, l), Nr) {
    a = 0;
    do {
      if (Nr = !1, Qr = 0, 25 <= a) throw Error($(301));
      a += 1, Re = De = null, t.updateQueue = null, Fl.current = qh, e = n(r, l);
    } while (Nr);
  }
  if (Fl.current = ds, t = De !== null && De.next !== null, jn = 0, Re = De = Ne = null, cs = !1, t) throw Error($(300));
  return e;
}
function Bo() {
  var e = Qr !== 0;
  return Qr = 0, e;
}
function Ct() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Re === null ? Ne.memoizedState = Re = e : Re = Re.next = e, Re;
}
function gt() {
  if (De === null) {
    var e = Ne.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = De.next;
  var t = Re === null ? Ne.memoizedState : Re.next;
  if (t !== null) Re = t, De = e;
  else {
    if (e === null) throw Error($(310));
    De = e, e = { memoizedState: De.memoizedState, baseState: De.baseState, baseQueue: De.baseQueue, queue: De.queue, next: null }, Re === null ? Ne.memoizedState = Re = e : Re = Re.next = e;
  }
  return Re;
}
function Hr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ra(e) {
  var t = gt(), n = t.queue;
  if (n === null) throw Error($(311));
  n.lastRenderedReducer = e;
  var r = De, l = r.baseQueue, a = n.pending;
  if (a !== null) {
    if (l !== null) {
      var o = l.next;
      l.next = a.next, a.next = o;
    }
    r.baseQueue = l = a, n.pending = null;
  }
  if (l !== null) {
    a = l.next, r = r.baseState;
    var i = o = null, c = null, d = a;
    do {
      var m = d.lane;
      if ((jn & m) === m) c !== null && (c = c.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var v = {
          lane: m,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        c === null ? (i = c = v, o = r) : c = c.next = v, Ne.lanes |= m, bn |= m;
      }
      d = d.next;
    } while (d !== null && d !== a);
    c === null ? o = r : c.next = i, jt(r, t.memoizedState) || (Ye = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      a = l.lane, Ne.lanes |= a, bn |= a, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function la(e) {
  var t = gt(), n = t.queue;
  if (n === null) throw Error($(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, a = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      a = e(a, o.action), o = o.next;
    while (o !== l);
    jt(a, t.memoizedState) || (Ye = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function ru() {
}
function lu(e, t) {
  var n = Ne, r = gt(), l = t(), a = !jt(r.memoizedState, l);
  if (a && (r.memoizedState = l, Ye = !0), r = r.queue, Qo(ou.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || Re !== null && Re.memoizedState.tag & 1) {
    if (n.flags |= 2048, Kr(9, au.bind(null, n, r, l, t), void 0, null), Oe === null) throw Error($(349));
    jn & 30 || su(n, t, l);
  }
  return l;
}
function su(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ne.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function au(e, t, n, r) {
  t.value = n, t.getSnapshot = r, iu(t) && cu(e);
}
function ou(e, t, n) {
  return n(function() {
    iu(t) && cu(e);
  });
}
function iu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !jt(e, n);
  } catch {
    return !0;
  }
}
function cu(e) {
  var t = Ft(e, 1);
  t !== null && St(t, e, 1, -1);
}
function ec(e) {
  var t = Ct();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Hr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Hh.bind(null, Ne, e), [t.memoizedState, e];
}
function Kr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ne.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function du() {
  return gt().memoizedState;
}
function Wl(e, t, n, r) {
  var l = Ct();
  Ne.flags |= e, l.memoizedState = Kr(1 | t, n, void 0, r === void 0 ? null : r);
}
function js(e, t, n, r) {
  var l = gt();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (De !== null) {
    var o = De.memoizedState;
    if (a = o.destroy, r !== null && Uo(r, o.deps)) {
      l.memoizedState = Kr(t, n, a, r);
      return;
    }
  }
  Ne.flags |= e, l.memoizedState = Kr(1 | t, n, a, r);
}
function tc(e, t) {
  return Wl(8390656, 8, e, t);
}
function Qo(e, t) {
  return js(2048, 8, e, t);
}
function uu(e, t) {
  return js(4, 2, e, t);
}
function fu(e, t) {
  return js(4, 4, e, t);
}
function mu(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function hu(e, t, n) {
  return n = n != null ? n.concat([e]) : null, js(4, 4, mu.bind(null, t, e), n);
}
function Ho() {
}
function pu(e, t) {
  var n = gt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Uo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function gu(e, t) {
  var n = gt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Uo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function yu(e, t, n) {
  return jn & 21 ? (jt(n, t) || (n = kd(), Ne.lanes |= n, bn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ye = !0), e.memoizedState = n);
}
function Bh(e, t) {
  var n = ye;
  ye = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = na.transition;
  na.transition = {};
  try {
    e(!1), t();
  } finally {
    ye = n, na.transition = r;
  }
}
function vu() {
  return gt().memoizedState;
}
function Qh(e, t, n) {
  var r = sn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, wu(e)) xu(t, n);
  else if (n = eu(e, t, n, r), n !== null) {
    var l = He();
    St(n, e, r, l), _u(n, t, r);
  }
}
function Hh(e, t, n) {
  var r = sn(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (wu(e)) xu(t, l);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var o = t.lastRenderedState, i = a(o, n);
      if (l.hasEagerState = !0, l.eagerState = i, jt(i, o)) {
        var c = t.interleaved;
        c === null ? (l.next = l, Ao(t)) : (l.next = c.next, c.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = eu(e, t, l, r), n !== null && (l = He(), St(n, e, r, l), _u(n, t, r));
  }
}
function wu(e) {
  var t = e.alternate;
  return e === Ne || t !== null && t === Ne;
}
function xu(e, t) {
  Nr = cs = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function _u(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, So(e, n);
  }
}
var ds = { readContext: pt, useCallback: $e, useContext: $e, useEffect: $e, useImperativeHandle: $e, useInsertionEffect: $e, useLayoutEffect: $e, useMemo: $e, useReducer: $e, useRef: $e, useState: $e, useDebugValue: $e, useDeferredValue: $e, useTransition: $e, useMutableSource: $e, useSyncExternalStore: $e, useId: $e, unstable_isNewReconciler: !1 }, Kh = { readContext: pt, useCallback: function(e, t) {
  return Ct().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: pt, useEffect: tc, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Wl(
    4194308,
    4,
    mu.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Wl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Wl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ct();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ct();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Qh.bind(null, Ne, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ct();
  return e = { current: e }, t.memoizedState = e;
}, useState: ec, useDebugValue: Ho, useDeferredValue: function(e) {
  return Ct().memoizedState = e;
}, useTransition: function() {
  var e = ec(!1), t = e[0];
  return e = Bh.bind(null, e[1]), Ct().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Ne, l = Ct();
  if (be) {
    if (n === void 0) throw Error($(407));
    n = n();
  } else {
    if (n = t(), Oe === null) throw Error($(349));
    jn & 30 || su(r, t, n);
  }
  l.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return l.queue = a, tc(ou.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, Kr(9, au.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = Ct(), t = Oe.identifierPrefix;
  if (be) {
    var n = Rt, r = Pt;
    n = (r & ~(1 << 32 - kt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Qr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Vh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Gh = {
  readContext: pt,
  useCallback: pu,
  useContext: pt,
  useEffect: Qo,
  useImperativeHandle: hu,
  useInsertionEffect: uu,
  useLayoutEffect: fu,
  useMemo: gu,
  useReducer: ra,
  useRef: du,
  useState: function() {
    return ra(Hr);
  },
  useDebugValue: Ho,
  useDeferredValue: function(e) {
    var t = gt();
    return yu(t, De.memoizedState, e);
  },
  useTransition: function() {
    var e = ra(Hr)[0], t = gt().memoizedState;
    return [e, t];
  },
  useMutableSource: ru,
  useSyncExternalStore: lu,
  useId: vu,
  unstable_isNewReconciler: !1
}, qh = { readContext: pt, useCallback: pu, useContext: pt, useEffect: Qo, useImperativeHandle: hu, useInsertionEffect: uu, useLayoutEffect: fu, useMemo: gu, useReducer: la, useRef: du, useState: function() {
  return la(Hr);
}, useDebugValue: Ho, useDeferredValue: function(e) {
  var t = gt();
  return De === null ? t.memoizedState = e : yu(t, De.memoizedState, e);
}, useTransition: function() {
  var e = la(Hr)[0], t = gt().memoizedState;
  return [e, t];
}, useMutableSource: ru, useSyncExternalStore: lu, useId: vu, unstable_isNewReconciler: !1 };
function vt(e, t) {
  if (e && e.defaultProps) {
    t = Me({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Va(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Me({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var bs = { isMounted: function(e) {
  return (e = e._reactInternals) ? Mn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = He(), l = sn(e), a = Ot(r, l);
  a.payload = t, n != null && (a.callback = n), t = rn(e, a, l), t !== null && (St(t, e, l, r), zl(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = He(), l = sn(e), a = Ot(r, l);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = rn(e, a, l), t !== null && (St(t, e, l, r), zl(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = He(), r = sn(e), l = Ot(n, r);
  l.tag = 2, t != null && (l.callback = t), t = rn(e, l, r), t !== null && (St(t, e, r, n), zl(t, e, r));
} };
function nc(e, t, n, r, l, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Fr(n, r) || !Fr(l, a) : !0;
}
function ku(e, t, n) {
  var r = !1, l = cn, a = t.contextType;
  return typeof a == "object" && a !== null ? a = pt(a) : (l = Ze(t) ? kn : Be.current, r = t.contextTypes, a = (r = r != null) ? er(e, l) : cn), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = bs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function rc(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && bs.enqueueReplaceState(t, t.state, null);
}
function Ba(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, zo(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? l.context = pt(a) : (a = Ze(t) ? kn : Be.current, l.context = er(e, a)), l.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (Va(e, t, a, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && bs.enqueueReplaceState(l, l.state, null), os(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function lr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Sm(r), r = r.return;
    while (r);
    var l = n;
  } catch (a) {
    l = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function sa(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Qa(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Yh = typeof WeakMap == "function" ? WeakMap : Map;
function Su(e, t, n) {
  n = Ot(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    fs || (fs = !0, to = r), Qa(e, t);
  }, n;
}
function ju(e, t, n) {
  n = Ot(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Qa(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    Qa(e, t), typeof r != "function" && (ln === null ? ln = /* @__PURE__ */ new Set([this]) : ln.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function lc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Yh();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = dp.bind(null, e, t, n), t.then(e, e));
}
function sc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ac(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ot(-1, 1), t.tag = 2, rn(n, t, 1))), n.lanes |= 1), e);
}
var Xh = Ut.ReactCurrentOwner, Ye = !1;
function Qe(e, t, n, r) {
  t.child = e === null ? Jd(t, null, n, r) : nr(t, e.child, n, r);
}
function oc(e, t, n, r, l) {
  n = n.render;
  var a = t.ref;
  return Xn(t, l), r = Vo(e, t, n, r, a, l), n = Bo(), e !== null && !Ye ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Wt(e, t, l)) : (be && n && To(t), t.flags |= 1, Qe(e, t, r, l), t.child);
}
function ic(e, t, n, r, l) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !ei(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, bu(e, t, a, r, l)) : (e = Bl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & l)) {
    var o = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Fr, n(o, r) && e.ref === t.ref) return Wt(e, t, l);
  }
  return t.flags |= 1, e = an(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function bu(e, t, n, r, l) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Fr(a, r) && e.ref === t.ref) if (Ye = !1, t.pendingProps = r = a, (e.lanes & l) !== 0) e.flags & 131072 && (Ye = !0);
    else return t.lanes = e.lanes, Wt(e, t, l);
  }
  return Ha(e, t, n, r, l);
}
function Eu(e, t, n) {
  var r = t.pendingProps, l = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, we(Hn, rt), rt |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, we(Hn, rt), rt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, we(Hn, rt), rt |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, we(Hn, rt), rt |= r;
  return Qe(e, t, l, n), t.child;
}
function Cu(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ha(e, t, n, r, l) {
  var a = Ze(n) ? kn : Be.current;
  return a = er(t, a), Xn(t, l), n = Vo(e, t, n, r, a, l), r = Bo(), e !== null && !Ye ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Wt(e, t, l)) : (be && r && To(t), t.flags |= 1, Qe(e, t, n, l), t.child);
}
function cc(e, t, n, r, l) {
  if (Ze(n)) {
    var a = !0;
    ns(t);
  } else a = !1;
  if (Xn(t, l), t.stateNode === null) $l(e, t), ku(t, n, r), Ba(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, i = t.memoizedProps;
    o.props = i;
    var c = o.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = pt(d) : (d = Ze(n) ? kn : Be.current, d = er(t, d));
    var m = n.getDerivedStateFromProps, v = typeof m == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    v || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || c !== d) && rc(t, o, r, d), Kt = !1;
    var w = t.memoizedState;
    o.state = w, os(t, r, o, l), c = t.memoizedState, i !== r || w !== c || Xe.current || Kt ? (typeof m == "function" && (Va(t, n, m, r), c = t.memoizedState), (i = Kt || nc(t, n, i, r, w, c, d)) ? (v || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = d, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, tu(e, t), i = t.memoizedProps, d = t.type === t.elementType ? i : vt(t.type, i), o.props = d, v = t.pendingProps, w = o.context, c = n.contextType, typeof c == "object" && c !== null ? c = pt(c) : (c = Ze(n) ? kn : Be.current, c = er(t, c));
    var _ = n.getDerivedStateFromProps;
    (m = typeof _ == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== v || w !== c) && rc(t, o, r, c), Kt = !1, w = t.memoizedState, o.state = w, os(t, r, o, l);
    var g = t.memoizedState;
    i !== v || w !== g || Xe.current || Kt ? (typeof _ == "function" && (Va(t, n, _, r), g = t.memoizedState), (d = Kt || nc(t, n, d, r, w, g, c) || !1) ? (m || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, g, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, g, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), o.props = r, o.state = g, o.context = c, r = d) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ka(e, t, n, r, a, l);
}
function Ka(e, t, n, r, l, a) {
  Cu(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Gi(t, n, !1), Wt(e, t, a);
  r = t.stateNode, Xh.current = t;
  var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = nr(t, e.child, null, a), t.child = nr(t, null, i, a)) : Qe(e, t, i, a), t.memoizedState = r.state, l && Gi(t, n, !0), t.child;
}
function Nu(e) {
  var t = e.stateNode;
  t.pendingContext ? Ki(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ki(e, t.context, !1), Fo(e, t.containerInfo);
}
function dc(e, t, n, r, l) {
  return tr(), Do(l), t.flags |= 256, Qe(e, t, n, r), t.child;
}
var Ga = { dehydrated: null, treeContext: null, retryLane: 0 };
function qa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Mu(e, t, n) {
  var r = t.pendingProps, l = Ce.current, a = !1, o = (t.flags & 128) !== 0, i;
  if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), we(Ce, l & 1), e === null)
    return $a(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = { mode: "hidden", children: o }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = Ns(o, r, 0, null), e = _n(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = qa(n), t.memoizedState = Ga, e) : Ko(t, o));
  if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return Zh(e, t, o, r, i, l, n);
  if (a) {
    a = r.fallback, o = t.mode, l = e.child, i = l.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = an(l, c), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? a = an(i, a) : (a = _n(a, o, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? qa(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = Ga, r;
  }
  return a = e.child, e = a.sibling, r = an(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ko(e, t) {
  return t = Ns({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function jl(e, t, n, r) {
  return r !== null && Do(r), nr(t, e.child, null, n), e = Ko(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Zh(e, t, n, r, l, a, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = sa(Error($(422))), jl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, l = t.mode, r = Ns({ mode: "visible", children: r.children }, l, 0, null), a = _n(a, l, o, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && nr(t, e.child, null, o), t.child.memoizedState = qa(o), t.memoizedState = Ga, a);
  if (!(t.mode & 1)) return jl(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
    return r = i, a = Error($(419)), r = sa(a, r, void 0), jl(e, t, o, r);
  }
  if (i = (o & e.childLanes) !== 0, Ye || i) {
    if (r = Oe, r !== null) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== a.retryLane && (a.retryLane = l, Ft(e, l), St(r, e, l, -1));
    }
    return Jo(), r = sa(Error($(421))), jl(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = up.bind(null, e), l._reactRetry = t, null) : (e = a.treeContext, lt = nn(l.nextSibling), st = t, be = !0, xt = null, e !== null && (dt[ut++] = Pt, dt[ut++] = Rt, dt[ut++] = Sn, Pt = e.id, Rt = e.overflow, Sn = t), t = Ko(t, r.children), t.flags |= 4096, t);
}
function uc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ua(e.return, t, n);
}
function aa(e, t, n, r, l) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = l);
}
function Iu(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, a = r.tail;
  if (Qe(e, t, r.children, n), r = Ce.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && uc(e, n, t);
      else if (e.tag === 19) uc(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (we(Ce, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && is(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), aa(t, !1, l, n, a);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && is(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      aa(t, !0, n, null, a);
      break;
    case "together":
      aa(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function $l(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Wt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), bn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error($(153));
  if (t.child !== null) {
    for (e = t.child, n = an(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = an(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Jh(e, t, n) {
  switch (t.tag) {
    case 3:
      Nu(t), tr();
      break;
    case 5:
      nu(t);
      break;
    case 1:
      Ze(t.type) && ns(t);
      break;
    case 4:
      Fo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      we(ss, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (we(Ce, Ce.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Mu(e, t, n) : (we(Ce, Ce.current & 1), e = Wt(e, t, n), e !== null ? e.sibling : null);
      we(Ce, Ce.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Iu(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), we(Ce, Ce.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Eu(e, t, n);
  }
  return Wt(e, t, n);
}
var Tu, Ya, Lu, Du;
Tu = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Ya = function() {
};
Lu = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, wn(It.current);
    var a = null;
    switch (n) {
      case "input":
        l = va(e, l), r = va(e, r), a = [];
        break;
      case "select":
        l = Me({}, l, { value: void 0 }), r = Me({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        l = _a(e, l), r = _a(e, r), a = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = es);
    }
    Sa(n, r);
    var o;
    n = null;
    for (d in l) if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null) if (d === "style") {
      var i = l[d];
      for (o in i) i.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Lr.hasOwnProperty(d) ? a || (a = []) : (a = a || []).push(d, null));
    for (d in r) {
      var c = r[d];
      if (i = l != null ? l[d] : void 0, r.hasOwnProperty(d) && c !== i && (c != null || i != null)) if (d === "style") if (i) {
        for (o in i) !i.hasOwnProperty(o) || c && c.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in c) c.hasOwnProperty(o) && i[o] !== c[o] && (n || (n = {}), n[o] = c[o]);
      } else n || (a || (a = []), a.push(
        d,
        n
      )), n = c;
      else d === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, i = i ? i.__html : void 0, c != null && i !== c && (a = a || []).push(d, c)) : d === "children" ? typeof c != "string" && typeof c != "number" || (a = a || []).push(d, "" + c) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Lr.hasOwnProperty(d) ? (c != null && d === "onScroll" && ke("scroll", e), a || i === c || (a = [])) : (a = a || []).push(d, c));
    }
    n && (a = a || []).push("style", n);
    var d = a;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Du = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yr(e, t) {
  if (!be) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function Ue(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function ep(e, t, n) {
  var r = t.pendingProps;
  switch (Lo(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ue(t), null;
    case 1:
      return Ze(t.type) && ts(), Ue(t), null;
    case 3:
      return r = t.stateNode, rr(), Se(Xe), Se(Be), $o(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (kl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, xt !== null && (lo(xt), xt = null))), Ya(e, t), Ue(t), null;
    case 5:
      Wo(t);
      var l = wn(Br.current);
      if (n = t.type, e !== null && t.stateNode != null) Lu(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error($(166));
          return Ue(t), null;
        }
        if (e = wn(It.current), kl(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[Nt] = t, r[Ur] = a, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ke("cancel", r), ke("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ke("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < kr.length; l++) ke(kr[l], r);
              break;
            case "source":
              ke("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ke(
                "error",
                r
              ), ke("load", r);
              break;
            case "details":
              ke("toggle", r);
              break;
            case "input":
              xi(r, a), ke("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, ke("invalid", r);
              break;
            case "textarea":
              ki(r, a), ke("invalid", r);
          }
          Sa(n, a), l = null;
          for (var o in a) if (a.hasOwnProperty(o)) {
            var i = a[o];
            o === "children" ? typeof i == "string" ? r.textContent !== i && (a.suppressHydrationWarning !== !0 && _l(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (a.suppressHydrationWarning !== !0 && _l(
              r.textContent,
              i,
              e
            ), l = ["children", "" + i]) : Lr.hasOwnProperty(o) && i != null && o === "onScroll" && ke("scroll", r);
          }
          switch (n) {
            case "input":
              ml(r), _i(r, a, !0);
              break;
            case "textarea":
              ml(r), Si(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = es);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = od(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Nt] = t, e[Ur] = r, Tu(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = ja(n, r), n) {
              case "dialog":
                ke("cancel", e), ke("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ke("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < kr.length; l++) ke(kr[l], e);
                l = r;
                break;
              case "source":
                ke("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                ke(
                  "error",
                  e
                ), ke("load", e), l = r;
                break;
              case "details":
                ke("toggle", e), l = r;
                break;
              case "input":
                xi(e, r), l = va(e, r), ke("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = Me({}, r, { value: void 0 }), ke("invalid", e);
                break;
              case "textarea":
                ki(e, r), l = _a(e, r), ke("invalid", e);
                break;
              default:
                l = r;
            }
            Sa(n, l), i = l;
            for (a in i) if (i.hasOwnProperty(a)) {
              var c = i[a];
              a === "style" ? dd(e, c) : a === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && id(e, c)) : a === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Dr(e, c) : typeof c == "number" && Dr(e, "" + c) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Lr.hasOwnProperty(a) ? c != null && a === "onScroll" && ke("scroll", e) : c != null && yo(e, a, c, o));
            }
            switch (n) {
              case "input":
                ml(e), _i(e, r, !1);
                break;
              case "textarea":
                ml(e), Si(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + on(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? Kn(e, !!r.multiple, a, !1) : r.defaultValue != null && Kn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = es);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Ue(t), null;
    case 6:
      if (e && t.stateNode != null) Du(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error($(166));
        if (n = wn(Br.current), wn(It.current), kl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Nt] = t, (a = r.nodeValue !== n) && (e = st, e !== null)) switch (e.tag) {
            case 3:
              _l(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && _l(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Nt] = t, t.stateNode = r;
      }
      return Ue(t), null;
    case 13:
      if (Se(Ce), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (be && lt !== null && t.mode & 1 && !(t.flags & 128)) Xd(), tr(), t.flags |= 98560, a = !1;
        else if (a = kl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error($(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error($(317));
            a[Nt] = t;
          } else tr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ue(t), a = !1;
        } else xt !== null && (lo(xt), xt = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Ce.current & 1 ? Pe === 0 && (Pe = 3) : Jo())), t.updateQueue !== null && (t.flags |= 4), Ue(t), null);
    case 4:
      return rr(), Ya(e, t), e === null && Wr(t.stateNode.containerInfo), Ue(t), null;
    case 10:
      return Oo(t.type._context), Ue(t), null;
    case 17:
      return Ze(t.type) && ts(), Ue(t), null;
    case 19:
      if (Se(Ce), a = t.memoizedState, a === null) return Ue(t), null;
      if (r = (t.flags & 128) !== 0, o = a.rendering, o === null) if (r) yr(a, !1);
      else {
        if (Pe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = is(e), o !== null) {
            for (t.flags |= 128, yr(a, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return we(Ce, Ce.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && Te() > sr && (t.flags |= 128, r = !0, yr(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = is(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), yr(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !be) return Ue(t), null;
        } else 2 * Te() - a.renderingStartTime > sr && n !== 1073741824 && (t.flags |= 128, r = !0, yr(a, !1), t.lanes = 4194304);
        a.isBackwards ? (o.sibling = t.child, t.child = o) : (n = a.last, n !== null ? n.sibling = o : t.child = o, a.last = o);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Te(), t.sibling = null, n = Ce.current, we(Ce, r ? n & 1 | 2 : n & 1), t) : (Ue(t), null);
    case 22:
    case 23:
      return Zo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? rt & 1073741824 && (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ue(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error($(156, t.tag));
}
function tp(e, t) {
  switch (Lo(t), t.tag) {
    case 1:
      return Ze(t.type) && ts(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return rr(), Se(Xe), Se(Be), $o(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Wo(t), null;
    case 13:
      if (Se(Ce), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error($(340));
        tr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Se(Ce), null;
    case 4:
      return rr(), null;
    case 10:
      return Oo(t.type._context), null;
    case 22:
    case 23:
      return Zo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var bl = !1, Ve = !1, np = typeof WeakSet == "function" ? WeakSet : Set, Y = null;
function Qn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Ie(e, t, r);
  }
  else n.current = null;
}
function Xa(e, t, n) {
  try {
    n();
  } catch (r) {
    Ie(e, t, r);
  }
}
var fc = !1;
function rp(e, t) {
  if (Pa = Xl, e = zd(), Io(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset, a = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, a.nodeType;
        } catch {
          n = null;
          break e;
        }
        var o = 0, i = -1, c = -1, d = 0, m = 0, v = e, w = null;
        t: for (; ; ) {
          for (var _; v !== n || l !== 0 && v.nodeType !== 3 || (i = o + l), v !== a || r !== 0 && v.nodeType !== 3 || (c = o + r), v.nodeType === 3 && (o += v.nodeValue.length), (_ = v.firstChild) !== null; )
            w = v, v = _;
          for (; ; ) {
            if (v === e) break t;
            if (w === n && ++d === l && (i = o), w === a && ++m === r && (c = o), (_ = v.nextSibling) !== null) break;
            v = w, w = v.parentNode;
          }
          v = _;
        }
        n = i === -1 || c === -1 ? null : { start: i, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ra = { focusedElem: e, selectionRange: n }, Xl = !1, Y = t; Y !== null; ) if (t = Y, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Y = e;
  else for (; Y !== null; ) {
    t = Y;
    try {
      var g = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (g !== null) {
            var x = g.memoizedProps, S = g.memoizedState, h = t.stateNode, u = h.getSnapshotBeforeUpdate(t.elementType === t.type ? x : vt(t.type, x), S);
            h.__reactInternalSnapshotBeforeUpdate = u;
          }
          break;
        case 3:
          var p = t.stateNode.containerInfo;
          p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error($(163));
      }
    } catch (y) {
      Ie(t, t.return, y);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, Y = e;
      break;
    }
    Y = t.return;
  }
  return g = fc, fc = !1, g;
}
function Mr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var a = l.destroy;
        l.destroy = void 0, a !== void 0 && Xa(t, n, a);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Es(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Za(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Pu(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Pu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Nt], delete t[Ur], delete t[za], delete t[Fh], delete t[Wh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Ru(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function mc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ru(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ja(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = es));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ja(e, t, n), e = e.sibling; e !== null; ) Ja(e, t, n), e = e.sibling;
}
function eo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (eo(e, t, n), e = e.sibling; e !== null; ) eo(e, t, n), e = e.sibling;
}
var Ae = null, wt = !1;
function Qt(e, t, n) {
  for (n = n.child; n !== null; ) Ou(e, t, n), n = n.sibling;
}
function Ou(e, t, n) {
  if (Mt && typeof Mt.onCommitFiberUnmount == "function") try {
    Mt.onCommitFiberUnmount(vs, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ve || Qn(n, t);
    case 6:
      var r = Ae, l = wt;
      Ae = null, Qt(e, t, n), Ae = r, wt = l, Ae !== null && (wt ? (e = Ae, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ae.removeChild(n.stateNode));
      break;
    case 18:
      Ae !== null && (wt ? (e = Ae, n = n.stateNode, e.nodeType === 8 ? Js(e.parentNode, n) : e.nodeType === 1 && Js(e, n), Ar(e)) : Js(Ae, n.stateNode));
      break;
    case 4:
      r = Ae, l = wt, Ae = n.stateNode.containerInfo, wt = !0, Qt(e, t, n), Ae = r, wt = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ve && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var a = l, o = a.destroy;
          a = a.tag, o !== void 0 && (a & 2 || a & 4) && Xa(n, t, o), l = l.next;
        } while (l !== r);
      }
      Qt(e, t, n);
      break;
    case 1:
      if (!Ve && (Qn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (i) {
        Ie(n, t, i);
      }
      Qt(e, t, n);
      break;
    case 21:
      Qt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ve = (r = Ve) || n.memoizedState !== null, Qt(e, t, n), Ve = r) : Qt(e, t, n);
      break;
    default:
      Qt(e, t, n);
  }
}
function hc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new np()), t.forEach(function(r) {
      var l = fp.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function yt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var a = e, o = t, i = o;
      e: for (; i !== null; ) {
        switch (i.tag) {
          case 5:
            Ae = i.stateNode, wt = !1;
            break e;
          case 3:
            Ae = i.stateNode.containerInfo, wt = !0;
            break e;
          case 4:
            Ae = i.stateNode.containerInfo, wt = !0;
            break e;
        }
        i = i.return;
      }
      if (Ae === null) throw Error($(160));
      Ou(a, o, l), Ae = null, wt = !1;
      var c = l.alternate;
      c !== null && (c.return = null), l.return = null;
    } catch (d) {
      Ie(l, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Au(t, e), t = t.sibling;
}
function Au(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (yt(t, e), Et(e), r & 4) {
        try {
          Mr(3, e, e.return), Es(3, e);
        } catch (x) {
          Ie(e, e.return, x);
        }
        try {
          Mr(5, e, e.return);
        } catch (x) {
          Ie(e, e.return, x);
        }
      }
      break;
    case 1:
      yt(t, e), Et(e), r & 512 && n !== null && Qn(n, n.return);
      break;
    case 5:
      if (yt(t, e), Et(e), r & 512 && n !== null && Qn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Dr(l, "");
        } catch (x) {
          Ie(e, e.return, x);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var a = e.memoizedProps, o = n !== null ? n.memoizedProps : a, i = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          i === "input" && a.type === "radio" && a.name != null && sd(l, a), ja(i, o);
          var d = ja(i, a);
          for (o = 0; o < c.length; o += 2) {
            var m = c[o], v = c[o + 1];
            m === "style" ? dd(l, v) : m === "dangerouslySetInnerHTML" ? id(l, v) : m === "children" ? Dr(l, v) : yo(l, m, v, d);
          }
          switch (i) {
            case "input":
              wa(l, a);
              break;
            case "textarea":
              ad(l, a);
              break;
            case "select":
              var w = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!a.multiple;
              var _ = a.value;
              _ != null ? Kn(l, !!a.multiple, _, !1) : w !== !!a.multiple && (a.defaultValue != null ? Kn(
                l,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : Kn(l, !!a.multiple, a.multiple ? [] : "", !1));
          }
          l[Ur] = a;
        } catch (x) {
          Ie(e, e.return, x);
        }
      }
      break;
    case 6:
      if (yt(t, e), Et(e), r & 4) {
        if (e.stateNode === null) throw Error($(162));
        l = e.stateNode, a = e.memoizedProps;
        try {
          l.nodeValue = a;
        } catch (x) {
          Ie(e, e.return, x);
        }
      }
      break;
    case 3:
      if (yt(t, e), Et(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Ar(t.containerInfo);
      } catch (x) {
        Ie(e, e.return, x);
      }
      break;
    case 4:
      yt(t, e), Et(e);
      break;
    case 13:
      yt(t, e), Et(e), l = e.child, l.flags & 8192 && (a = l.memoizedState !== null, l.stateNode.isHidden = a, !a || l.alternate !== null && l.alternate.memoizedState !== null || (Yo = Te())), r & 4 && hc(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ve = (d = Ve) || m, yt(t, e), Ve = d) : yt(t, e), Et(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !m && e.mode & 1) for (Y = e, m = e.child; m !== null; ) {
          for (v = Y = m; Y !== null; ) {
            switch (w = Y, _ = w.child, w.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Mr(4, w, w.return);
                break;
              case 1:
                Qn(w, w.return);
                var g = w.stateNode;
                if (typeof g.componentWillUnmount == "function") {
                  r = w, n = w.return;
                  try {
                    t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                  } catch (x) {
                    Ie(r, n, x);
                  }
                }
                break;
              case 5:
                Qn(w, w.return);
                break;
              case 22:
                if (w.memoizedState !== null) {
                  gc(v);
                  continue;
                }
            }
            _ !== null ? (_.return = w, Y = _) : gc(v);
          }
          m = m.sibling;
        }
        e: for (m = null, v = e; ; ) {
          if (v.tag === 5) {
            if (m === null) {
              m = v;
              try {
                l = v.stateNode, d ? (a = l.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (i = v.stateNode, c = v.memoizedProps.style, o = c != null && c.hasOwnProperty("display") ? c.display : null, i.style.display = cd("display", o));
              } catch (x) {
                Ie(e, e.return, x);
              }
            }
          } else if (v.tag === 6) {
            if (m === null) try {
              v.stateNode.nodeValue = d ? "" : v.memoizedProps;
            } catch (x) {
              Ie(e, e.return, x);
            }
          } else if ((v.tag !== 22 && v.tag !== 23 || v.memoizedState === null || v === e) && v.child !== null) {
            v.child.return = v, v = v.child;
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            m === v && (m = null), v = v.return;
          }
          m === v && (m = null), v.sibling.return = v.return, v = v.sibling;
        }
      }
      break;
    case 19:
      yt(t, e), Et(e), r & 4 && hc(e);
      break;
    case 21:
      break;
    default:
      yt(
        t,
        e
      ), Et(e);
  }
}
function Et(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ru(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error($(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Dr(l, ""), r.flags &= -33);
          var a = mc(e);
          eo(e, a, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, i = mc(e);
          Ja(e, i, o);
          break;
        default:
          throw Error($(161));
      }
    } catch (c) {
      Ie(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function lp(e, t, n) {
  Y = e, zu(e);
}
function zu(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Y !== null; ) {
    var l = Y, a = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || bl;
      if (!o) {
        var i = l.alternate, c = i !== null && i.memoizedState !== null || Ve;
        i = bl;
        var d = Ve;
        if (bl = o, (Ve = c) && !d) for (Y = l; Y !== null; ) o = Y, c = o.child, o.tag === 22 && o.memoizedState !== null ? yc(l) : c !== null ? (c.return = o, Y = c) : yc(l);
        for (; a !== null; ) Y = a, zu(a), a = a.sibling;
        Y = l, bl = i, Ve = d;
      }
      pc(e);
    } else l.subtreeFlags & 8772 && a !== null ? (a.return = l, Y = a) : pc(e);
  }
}
function pc(e) {
  for (; Y !== null; ) {
    var t = Y;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ve || Es(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ve) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : vt(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && Ji(t, a, r);
            break;
          case 3:
            var o = t.updateQueue;
            if (o !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Ji(t, o, n);
            }
            break;
          case 5:
            var i = t.stateNode;
            if (n === null && t.flags & 4) {
              n = i;
              var c = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  c.autoFocus && n.focus();
                  break;
                case "img":
                  c.src && (n.src = c.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var d = t.alternate;
              if (d !== null) {
                var m = d.memoizedState;
                if (m !== null) {
                  var v = m.dehydrated;
                  v !== null && Ar(v);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error($(163));
        }
        Ve || t.flags & 512 && Za(t);
      } catch (w) {
        Ie(t, t.return, w);
      }
    }
    if (t === e) {
      Y = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, Y = n;
      break;
    }
    Y = t.return;
  }
}
function gc(e) {
  for (; Y !== null; ) {
    var t = Y;
    if (t === e) {
      Y = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, Y = n;
      break;
    }
    Y = t.return;
  }
}
function yc(e) {
  for (; Y !== null; ) {
    var t = Y;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Es(4, t);
          } catch (c) {
            Ie(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              Ie(t, l, c);
            }
          }
          var a = t.return;
          try {
            Za(t);
          } catch (c) {
            Ie(t, a, c);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Za(t);
          } catch (c) {
            Ie(t, o, c);
          }
      }
    } catch (c) {
      Ie(t, t.return, c);
    }
    if (t === e) {
      Y = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      i.return = t.return, Y = i;
      break;
    }
    Y = t.return;
  }
}
var sp = Math.ceil, us = Ut.ReactCurrentDispatcher, Go = Ut.ReactCurrentOwner, mt = Ut.ReactCurrentBatchConfig, fe = 0, Oe = null, Le = null, ze = 0, rt = 0, Hn = un(0), Pe = 0, Gr = null, bn = 0, Cs = 0, qo = 0, Ir = null, qe = null, Yo = 0, sr = 1 / 0, Lt = null, fs = !1, to = null, ln = null, El = !1, Zt = null, ms = 0, Tr = 0, no = null, Ul = -1, Vl = 0;
function He() {
  return fe & 6 ? Te() : Ul !== -1 ? Ul : Ul = Te();
}
function sn(e) {
  return e.mode & 1 ? fe & 2 && ze !== 0 ? ze & -ze : Uh.transition !== null ? (Vl === 0 && (Vl = kd()), Vl) : (e = ye, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Md(e.type)), e) : 1;
}
function St(e, t, n, r) {
  if (50 < Tr) throw Tr = 0, no = null, Error($(185));
  tl(e, n, r), (!(fe & 2) || e !== Oe) && (e === Oe && (!(fe & 2) && (Cs |= n), Pe === 4 && qt(e, ze)), Je(e, r), n === 1 && fe === 0 && !(t.mode & 1) && (sr = Te() + 500, Ss && fn()));
}
function Je(e, t) {
  var n = e.callbackNode;
  Um(e, t);
  var r = Yl(e, e === Oe ? ze : 0);
  if (r === 0) n !== null && Ei(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Ei(n), t === 1) e.tag === 0 ? $h(vc.bind(null, e)) : Gd(vc.bind(null, e)), Ah(function() {
      !(fe & 6) && fn();
    }), n = null;
    else {
      switch (Sd(r)) {
        case 1:
          n = ko;
          break;
        case 4:
          n = xd;
          break;
        case 16:
          n = ql;
          break;
        case 536870912:
          n = _d;
          break;
        default:
          n = ql;
      }
      n = Hu(n, Fu.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Fu(e, t) {
  if (Ul = -1, Vl = 0, fe & 6) throw Error($(327));
  var n = e.callbackNode;
  if (Zn() && e.callbackNode !== n) return null;
  var r = Yl(e, e === Oe ? ze : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = hs(e, r);
  else {
    t = r;
    var l = fe;
    fe |= 2;
    var a = $u();
    (Oe !== e || ze !== t) && (Lt = null, sr = Te() + 500, xn(e, t));
    do
      try {
        ip();
        break;
      } catch (i) {
        Wu(e, i);
      }
    while (!0);
    Ro(), us.current = a, fe = l, Le !== null ? t = 0 : (Oe = null, ze = 0, t = Pe);
  }
  if (t !== 0) {
    if (t === 2 && (l = Ma(e), l !== 0 && (r = l, t = ro(e, l))), t === 1) throw n = Gr, xn(e, 0), qt(e, r), Je(e, Te()), n;
    if (t === 6) qt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !ap(l) && (t = hs(e, r), t === 2 && (a = Ma(e), a !== 0 && (r = a, t = ro(e, a))), t === 1)) throw n = Gr, xn(e, 0), qt(e, r), Je(e, Te()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error($(345));
        case 2:
          gn(e, qe, Lt);
          break;
        case 3:
          if (qt(e, r), (r & 130023424) === r && (t = Yo + 500 - Te(), 10 < t)) {
            if (Yl(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              He(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Aa(gn.bind(null, e, qe, Lt), t);
            break;
          }
          gn(e, qe, Lt);
          break;
        case 4:
          if (qt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - kt(r);
            a = 1 << o, o = t[o], o > l && (l = o), r &= ~a;
          }
          if (r = l, r = Te() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * sp(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Aa(gn.bind(null, e, qe, Lt), r);
            break;
          }
          gn(e, qe, Lt);
          break;
        case 5:
          gn(e, qe, Lt);
          break;
        default:
          throw Error($(329));
      }
    }
  }
  return Je(e, Te()), e.callbackNode === n ? Fu.bind(null, e) : null;
}
function ro(e, t) {
  var n = Ir;
  return e.current.memoizedState.isDehydrated && (xn(e, t).flags |= 256), e = hs(e, t), e !== 2 && (t = qe, qe = n, t !== null && lo(t)), e;
}
function lo(e) {
  qe === null ? qe = e : qe.push.apply(qe, e);
}
function ap(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], a = l.getSnapshot;
        l = l.value;
        try {
          if (!jt(a(), l)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function qt(e, t) {
  for (t &= ~qo, t &= ~Cs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - kt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function vc(e) {
  if (fe & 6) throw Error($(327));
  Zn();
  var t = Yl(e, 0);
  if (!(t & 1)) return Je(e, Te()), null;
  var n = hs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ma(e);
    r !== 0 && (t = r, n = ro(e, r));
  }
  if (n === 1) throw n = Gr, xn(e, 0), qt(e, t), Je(e, Te()), n;
  if (n === 6) throw Error($(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, gn(e, qe, Lt), Je(e, Te()), null;
}
function Xo(e, t) {
  var n = fe;
  fe |= 1;
  try {
    return e(t);
  } finally {
    fe = n, fe === 0 && (sr = Te() + 500, Ss && fn());
  }
}
function En(e) {
  Zt !== null && Zt.tag === 0 && !(fe & 6) && Zn();
  var t = fe;
  fe |= 1;
  var n = mt.transition, r = ye;
  try {
    if (mt.transition = null, ye = 1, e) return e();
  } finally {
    ye = r, mt.transition = n, fe = t, !(fe & 6) && fn();
  }
}
function Zo() {
  rt = Hn.current, Se(Hn);
}
function xn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Oh(n)), Le !== null) for (n = Le.return; n !== null; ) {
    var r = n;
    switch (Lo(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ts();
        break;
      case 3:
        rr(), Se(Xe), Se(Be), $o();
        break;
      case 5:
        Wo(r);
        break;
      case 4:
        rr();
        break;
      case 13:
        Se(Ce);
        break;
      case 19:
        Se(Ce);
        break;
      case 10:
        Oo(r.type._context);
        break;
      case 22:
      case 23:
        Zo();
    }
    n = n.return;
  }
  if (Oe = e, Le = e = an(e.current, null), ze = rt = t, Pe = 0, Gr = null, qo = Cs = bn = 0, qe = Ir = null, vn !== null) {
    for (t = 0; t < vn.length; t++) if (n = vn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, a = n.pending;
      if (a !== null) {
        var o = a.next;
        a.next = l, r.next = o;
      }
      n.pending = r;
    }
    vn = null;
  }
  return e;
}
function Wu(e, t) {
  do {
    var n = Le;
    try {
      if (Ro(), Fl.current = ds, cs) {
        for (var r = Ne.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        cs = !1;
      }
      if (jn = 0, Re = De = Ne = null, Nr = !1, Qr = 0, Go.current = null, n === null || n.return === null) {
        Pe = 1, Gr = t, Le = null;
        break;
      }
      e: {
        var a = e, o = n.return, i = n, c = t;
        if (t = ze, i.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var d = c, m = i, v = m.tag;
          if (!(m.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var w = m.alternate;
            w ? (m.updateQueue = w.updateQueue, m.memoizedState = w.memoizedState, m.lanes = w.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var _ = sc(o);
          if (_ !== null) {
            _.flags &= -257, ac(_, o, i, a, t), _.mode & 1 && lc(a, d, t), t = _, c = d;
            var g = t.updateQueue;
            if (g === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(c), t.updateQueue = x;
            } else g.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              lc(a, d, t), Jo();
              break e;
            }
            c = Error($(426));
          }
        } else if (be && i.mode & 1) {
          var S = sc(o);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), ac(S, o, i, a, t), Do(lr(c, i));
            break e;
          }
        }
        a = c = lr(c, i), Pe !== 4 && (Pe = 2), Ir === null ? Ir = [a] : Ir.push(a), a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var h = Su(a, c, t);
              Zi(a, h);
              break e;
            case 1:
              i = c;
              var u = a.type, p = a.stateNode;
              if (!(a.flags & 128) && (typeof u.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (ln === null || !ln.has(p)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var y = ju(a, i, t);
                Zi(a, y);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      Vu(n);
    } catch (j) {
      t = j, Le === n && n !== null && (Le = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function $u() {
  var e = us.current;
  return us.current = ds, e === null ? ds : e;
}
function Jo() {
  (Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4), Oe === null || !(bn & 268435455) && !(Cs & 268435455) || qt(Oe, ze);
}
function hs(e, t) {
  var n = fe;
  fe |= 2;
  var r = $u();
  (Oe !== e || ze !== t) && (Lt = null, xn(e, t));
  do
    try {
      op();
      break;
    } catch (l) {
      Wu(e, l);
    }
  while (!0);
  if (Ro(), fe = n, us.current = r, Le !== null) throw Error($(261));
  return Oe = null, ze = 0, Pe;
}
function op() {
  for (; Le !== null; ) Uu(Le);
}
function ip() {
  for (; Le !== null && !Dm(); ) Uu(Le);
}
function Uu(e) {
  var t = Qu(e.alternate, e, rt);
  e.memoizedProps = e.pendingProps, t === null ? Vu(e) : Le = t, Go.current = null;
}
function Vu(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = tp(n, t), n !== null) {
        n.flags &= 32767, Le = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Pe = 6, Le = null;
        return;
      }
    } else if (n = ep(n, t, rt), n !== null) {
      Le = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Le = t;
      return;
    }
    Le = t = e;
  } while (t !== null);
  Pe === 0 && (Pe = 5);
}
function gn(e, t, n) {
  var r = ye, l = mt.transition;
  try {
    mt.transition = null, ye = 1, cp(e, t, n, r);
  } finally {
    mt.transition = l, ye = r;
  }
  return null;
}
function cp(e, t, n, r) {
  do
    Zn();
  while (Zt !== null);
  if (fe & 6) throw Error($(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error($(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (Vm(e, a), e === Oe && (Le = Oe = null, ze = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || El || (El = !0, Hu(ql, function() {
    return Zn(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = mt.transition, mt.transition = null;
    var o = ye;
    ye = 1;
    var i = fe;
    fe |= 4, Go.current = null, rp(e, n), Au(n, e), Mh(Ra), Xl = !!Pa, Ra = Pa = null, e.current = n, lp(n), Pm(), fe = i, ye = o, mt.transition = a;
  } else e.current = n;
  if (El && (El = !1, Zt = e, ms = l), a = e.pendingLanes, a === 0 && (ln = null), Am(n.stateNode), Je(e, Te()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (fs) throw fs = !1, e = to, to = null, e;
  return ms & 1 && e.tag !== 0 && Zn(), a = e.pendingLanes, a & 1 ? e === no ? Tr++ : (Tr = 0, no = e) : Tr = 0, fn(), null;
}
function Zn() {
  if (Zt !== null) {
    var e = Sd(ms), t = mt.transition, n = ye;
    try {
      if (mt.transition = null, ye = 16 > e ? 16 : e, Zt === null) var r = !1;
      else {
        if (e = Zt, Zt = null, ms = 0, fe & 6) throw Error($(331));
        var l = fe;
        for (fe |= 4, Y = e.current; Y !== null; ) {
          var a = Y, o = a.child;
          if (Y.flags & 16) {
            var i = a.deletions;
            if (i !== null) {
              for (var c = 0; c < i.length; c++) {
                var d = i[c];
                for (Y = d; Y !== null; ) {
                  var m = Y;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mr(8, m, a);
                  }
                  var v = m.child;
                  if (v !== null) v.return = m, Y = v;
                  else for (; Y !== null; ) {
                    m = Y;
                    var w = m.sibling, _ = m.return;
                    if (Pu(m), m === d) {
                      Y = null;
                      break;
                    }
                    if (w !== null) {
                      w.return = _, Y = w;
                      break;
                    }
                    Y = _;
                  }
                }
              }
              var g = a.alternate;
              if (g !== null) {
                var x = g.child;
                if (x !== null) {
                  g.child = null;
                  do {
                    var S = x.sibling;
                    x.sibling = null, x = S;
                  } while (x !== null);
                }
              }
              Y = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) o.return = a, Y = o;
          else e: for (; Y !== null; ) {
            if (a = Y, a.flags & 2048) switch (a.tag) {
              case 0:
              case 11:
              case 15:
                Mr(9, a, a.return);
            }
            var h = a.sibling;
            if (h !== null) {
              h.return = a.return, Y = h;
              break e;
            }
            Y = a.return;
          }
        }
        var u = e.current;
        for (Y = u; Y !== null; ) {
          o = Y;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) p.return = o, Y = p;
          else e: for (o = u; Y !== null; ) {
            if (i = Y, i.flags & 2048) try {
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  Es(9, i);
              }
            } catch (j) {
              Ie(i, i.return, j);
            }
            if (i === o) {
              Y = null;
              break e;
            }
            var y = i.sibling;
            if (y !== null) {
              y.return = i.return, Y = y;
              break e;
            }
            Y = i.return;
          }
        }
        if (fe = l, fn(), Mt && typeof Mt.onPostCommitFiberRoot == "function") try {
          Mt.onPostCommitFiberRoot(vs, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      ye = n, mt.transition = t;
    }
  }
  return !1;
}
function wc(e, t, n) {
  t = lr(n, t), t = Su(e, t, 1), e = rn(e, t, 1), t = He(), e !== null && (tl(e, 1, t), Je(e, t));
}
function Ie(e, t, n) {
  if (e.tag === 3) wc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      wc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ln === null || !ln.has(r))) {
        e = lr(n, e), e = ju(t, e, 1), t = rn(t, e, 1), e = He(), t !== null && (tl(t, 1, e), Je(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function dp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = He(), e.pingedLanes |= e.suspendedLanes & n, Oe === e && (ze & n) === n && (Pe === 4 || Pe === 3 && (ze & 130023424) === ze && 500 > Te() - Yo ? xn(e, 0) : qo |= n), Je(e, t);
}
function Bu(e, t) {
  t === 0 && (e.mode & 1 ? (t = gl, gl <<= 1, !(gl & 130023424) && (gl = 4194304)) : t = 1);
  var n = He();
  e = Ft(e, t), e !== null && (tl(e, t, n), Je(e, n));
}
function up(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Bu(e, n);
}
function fp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error($(314));
  }
  r !== null && r.delete(t), Bu(e, n);
}
var Qu;
Qu = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Xe.current) Ye = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ye = !1, Jh(e, t, n);
    Ye = !!(e.flags & 131072);
  }
  else Ye = !1, be && t.flags & 1048576 && qd(t, ls, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      $l(e, t), e = t.pendingProps;
      var l = er(t, Be.current);
      Xn(t, n), l = Vo(null, t, r, e, l, n);
      var a = Bo();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ze(r) ? (a = !0, ns(t)) : a = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, zo(t), l.updater = bs, t.stateNode = l, l._reactInternals = t, Ba(t, r, e, n), t = Ka(null, t, r, !0, a, n)) : (t.tag = 0, be && a && To(t), Qe(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch ($l(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = hp(r), e = vt(r, e), l) {
          case 0:
            t = Ha(null, t, r, e, n);
            break e;
          case 1:
            t = cc(null, t, r, e, n);
            break e;
          case 11:
            t = oc(null, t, r, e, n);
            break e;
          case 14:
            t = ic(null, t, r, vt(r.type, e), n);
            break e;
        }
        throw Error($(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : vt(r, l), Ha(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : vt(r, l), cc(e, t, r, l, n);
    case 3:
      e: {
        if (Nu(t), e === null) throw Error($(387));
        r = t.pendingProps, a = t.memoizedState, l = a.element, tu(e, t), os(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          l = lr(Error($(423)), t), t = dc(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = lr(Error($(424)), t), t = dc(e, t, r, n, l);
          break e;
        } else for (lt = nn(t.stateNode.containerInfo.firstChild), st = t, be = !0, xt = null, n = Jd(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (tr(), r === l) {
            t = Wt(e, t, n);
            break e;
          }
          Qe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return nu(t), e === null && $a(t), r = t.type, l = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = l.children, Oa(r, l) ? o = null : a !== null && Oa(r, a) && (t.flags |= 32), Cu(e, t), Qe(e, t, o, n), t.child;
    case 6:
      return e === null && $a(t), null;
    case 13:
      return Mu(e, t, n);
    case 4:
      return Fo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = nr(t, null, r, n) : Qe(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : vt(r, l), oc(e, t, r, l, n);
    case 7:
      return Qe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Qe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Qe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, a = t.memoizedProps, o = l.value, we(ss, r._currentValue), r._currentValue = o, a !== null) if (jt(a.value, o)) {
          if (a.children === l.children && !Xe.current) {
            t = Wt(e, t, n);
            break e;
          }
        } else for (a = t.child, a !== null && (a.return = t); a !== null; ) {
          var i = a.dependencies;
          if (i !== null) {
            o = a.child;
            for (var c = i.firstContext; c !== null; ) {
              if (c.context === r) {
                if (a.tag === 1) {
                  c = Ot(-1, n & -n), c.tag = 2;
                  var d = a.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var m = d.pending;
                    m === null ? c.next = c : (c.next = m.next, m.next = c), d.pending = c;
                  }
                }
                a.lanes |= n, c = a.alternate, c !== null && (c.lanes |= n), Ua(
                  a.return,
                  n,
                  t
                ), i.lanes |= n;
                break;
              }
              c = c.next;
            }
          } else if (a.tag === 10) o = a.type === t.type ? null : a.child;
          else if (a.tag === 18) {
            if (o = a.return, o === null) throw Error($(341));
            o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), Ua(o, n, t), o = a.sibling;
          } else o = a.child;
          if (o !== null) o.return = a;
          else for (o = a; o !== null; ) {
            if (o === t) {
              o = null;
              break;
            }
            if (a = o.sibling, a !== null) {
              a.return = o.return, o = a;
              break;
            }
            o = o.return;
          }
          a = o;
        }
        Qe(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, Xn(t, n), l = pt(l), r = r(l), t.flags |= 1, Qe(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = vt(r, t.pendingProps), l = vt(r.type, l), ic(e, t, r, l, n);
    case 15:
      return bu(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : vt(r, l), $l(e, t), t.tag = 1, Ze(r) ? (e = !0, ns(t)) : e = !1, Xn(t, n), ku(t, r, l), Ba(t, r, l, n), Ka(null, t, r, !0, e, n);
    case 19:
      return Iu(e, t, n);
    case 22:
      return Eu(e, t, n);
  }
  throw Error($(156, t.tag));
};
function Hu(e, t) {
  return wd(e, t);
}
function mp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ft(e, t, n, r) {
  return new mp(e, t, n, r);
}
function ei(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function hp(e) {
  if (typeof e == "function") return ei(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === wo) return 11;
    if (e === xo) return 14;
  }
  return 2;
}
function an(e, t) {
  var n = e.alternate;
  return n === null ? (n = ft(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Bl(e, t, n, r, l, a) {
  var o = 2;
  if (r = e, typeof e == "function") ei(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case On:
      return _n(n.children, l, a, t);
    case vo:
      o = 8, l |= 8;
      break;
    case ha:
      return e = ft(12, n, t, l | 2), e.elementType = ha, e.lanes = a, e;
    case pa:
      return e = ft(13, n, t, l), e.elementType = pa, e.lanes = a, e;
    case ga:
      return e = ft(19, n, t, l), e.elementType = ga, e.lanes = a, e;
    case nd:
      return Ns(n, l, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ed:
          o = 10;
          break e;
        case td:
          o = 9;
          break e;
        case wo:
          o = 11;
          break e;
        case xo:
          o = 14;
          break e;
        case Ht:
          o = 16, r = null;
          break e;
      }
      throw Error($(130, e == null ? e : typeof e, ""));
  }
  return t = ft(o, n, t, l), t.elementType = e, t.type = r, t.lanes = a, t;
}
function _n(e, t, n, r) {
  return e = ft(7, e, r, t), e.lanes = n, e;
}
function Ns(e, t, n, r) {
  return e = ft(22, e, r, t), e.elementType = nd, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function oa(e, t, n) {
  return e = ft(6, e, null, t), e.lanes = n, e;
}
function ia(e, t, n) {
  return t = ft(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function pp(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Us(0), this.expirationTimes = Us(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Us(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function ti(e, t, n, r, l, a, o, i, c) {
  return e = new pp(e, t, n, i, c), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = ft(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, zo(a), e;
}
function gp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Rn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Ku(e) {
  if (!e) return cn;
  e = e._reactInternals;
  e: {
    if (Mn(e) !== e || e.tag !== 1) throw Error($(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ze(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error($(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ze(n)) return Kd(e, n, t);
  }
  return t;
}
function Gu(e, t, n, r, l, a, o, i, c) {
  return e = ti(n, r, !0, e, l, a, o, i, c), e.context = Ku(null), n = e.current, r = He(), l = sn(n), a = Ot(r, l), a.callback = t ?? null, rn(n, a, l), e.current.lanes = l, tl(e, l, r), Je(e, r), e;
}
function Ms(e, t, n, r) {
  var l = t.current, a = He(), o = sn(l);
  return n = Ku(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ot(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = rn(l, t, o), e !== null && (St(e, l, o, a), zl(e, l, o)), o;
}
function ps(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function xc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ni(e, t) {
  xc(e, t), (e = e.alternate) && xc(e, t);
}
function yp() {
  return null;
}
var qu = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ri(e) {
  this._internalRoot = e;
}
Is.prototype.render = ri.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error($(409));
  Ms(e, t, null, null);
};
Is.prototype.unmount = ri.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    En(function() {
      Ms(null, e, null, null);
    }), t[zt] = null;
  }
};
function Is(e) {
  this._internalRoot = e;
}
Is.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Ed();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Gt.length && t !== 0 && t < Gt[n].priority; n++) ;
    Gt.splice(n, 0, e), n === 0 && Nd(e);
  }
};
function li(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ts(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function _c() {
}
function vp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var d = ps(o);
        a.call(d);
      };
    }
    var o = Gu(t, r, e, 0, null, !1, !1, "", _c);
    return e._reactRootContainer = o, e[zt] = o.current, Wr(e.nodeType === 8 ? e.parentNode : e), En(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var d = ps(c);
      i.call(d);
    };
  }
  var c = ti(e, 0, !1, null, null, !1, !1, "", _c);
  return e._reactRootContainer = c, e[zt] = c.current, Wr(e.nodeType === 8 ? e.parentNode : e), En(function() {
    Ms(t, c, n, r);
  }), c;
}
function Ls(e, t, n, r, l) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof l == "function") {
      var i = l;
      l = function() {
        var c = ps(o);
        i.call(c);
      };
    }
    Ms(t, o, e, l);
  } else o = vp(n, t, e, l, r);
  return ps(o);
}
jd = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = _r(t.pendingLanes);
        n !== 0 && (So(t, n | 1), Je(t, Te()), !(fe & 6) && (sr = Te() + 500, fn()));
      }
      break;
    case 13:
      En(function() {
        var r = Ft(e, 1);
        if (r !== null) {
          var l = He();
          St(r, e, 1, l);
        }
      }), ni(e, 1);
  }
};
jo = function(e) {
  if (e.tag === 13) {
    var t = Ft(e, 134217728);
    if (t !== null) {
      var n = He();
      St(t, e, 134217728, n);
    }
    ni(e, 134217728);
  }
};
bd = function(e) {
  if (e.tag === 13) {
    var t = sn(e), n = Ft(e, t);
    if (n !== null) {
      var r = He();
      St(n, e, t, r);
    }
    ni(e, t);
  }
};
Ed = function() {
  return ye;
};
Cd = function(e, t) {
  var n = ye;
  try {
    return ye = e, t();
  } finally {
    ye = n;
  }
};
Ea = function(e, t, n) {
  switch (t) {
    case "input":
      if (wa(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = ks(r);
            if (!l) throw Error($(90));
            ld(r), wa(r, l);
          }
        }
      }
      break;
    case "textarea":
      ad(e, n);
      break;
    case "select":
      t = n.value, t != null && Kn(e, !!n.multiple, t, !1);
  }
};
md = Xo;
hd = En;
var wp = { usingClientEntryPoint: !1, Events: [rl, Wn, ks, ud, fd, Xo] }, vr = { findFiberByHostInstance: yn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, xp = { bundleType: vr.bundleType, version: vr.version, rendererPackageName: vr.rendererPackageName, rendererConfig: vr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ut.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = yd(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: vr.findFiberByHostInstance || yp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Cl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Cl.isDisabled && Cl.supportsFiber) try {
    vs = Cl.inject(xp), Mt = Cl;
  } catch {
  }
}
ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wp;
ot.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!li(t)) throw Error($(200));
  return gp(e, t, null, n);
};
ot.createRoot = function(e, t) {
  if (!li(e)) throw Error($(299));
  var n = !1, r = "", l = qu;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ti(e, 1, !1, null, null, n, !1, r, l), e[zt] = t.current, Wr(e.nodeType === 8 ? e.parentNode : e), new ri(t);
};
ot.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error($(188)) : (e = Object.keys(e).join(","), Error($(268, e)));
  return e = yd(t), e = e === null ? null : e.stateNode, e;
};
ot.flushSync = function(e) {
  return En(e);
};
ot.hydrate = function(e, t, n) {
  if (!Ts(t)) throw Error($(200));
  return Ls(null, e, t, !0, n);
};
ot.hydrateRoot = function(e, t, n) {
  if (!li(e)) throw Error($(405));
  var r = n != null && n.hydratedSources || null, l = !1, a = "", o = qu;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Gu(t, null, e, 1, n ?? null, l, !1, a, o), e[zt] = t.current, Wr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Is(t);
};
ot.render = function(e, t, n) {
  if (!Ts(t)) throw Error($(200));
  return Ls(null, e, t, !1, n);
};
ot.unmountComponentAtNode = function(e) {
  if (!Ts(e)) throw Error($(40));
  return e._reactRootContainer ? (En(function() {
    Ls(null, null, e, !1, function() {
      e._reactRootContainer = null, e[zt] = null;
    });
  }), !0) : !1;
};
ot.unstable_batchedUpdates = Xo;
ot.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ts(n)) throw Error($(200));
  if (e == null || e._reactInternals === void 0) throw Error($(38));
  return Ls(e, t, n, !1, r);
};
ot.version = "18.3.1-next-f1338f8080-20240426";
function Yu() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yu);
    } catch (e) {
      console.error(e);
    }
}
Yu(), Yc.exports = ot;
var ge = Yc.exports, Xu, kc = ge;
Xu = kc.createRoot, kc.hydrateRoot;
var Zu = { exports: {} }, Ds = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _p = f, kp = Symbol.for("react.element"), Sp = Symbol.for("react.fragment"), jp = Object.prototype.hasOwnProperty, bp = _p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ep = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ju(e, t, n) {
  var r, l = {}, a = null, o = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) jp.call(t, r) && !Ep.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: kp, type: e, key: a, ref: o, props: l, _owner: bp.current };
}
Ds.Fragment = Sp;
Ds.jsx = Ju;
Ds.jsxs = Ju;
Zu.exports = Ds;
var s = Zu.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Cp = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Np = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), le = (e, t) => {
  const n = f.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: o,
      className: i = "",
      children: c,
      ...d
    }, m) => f.createElement(
      "svg",
      {
        ref: m,
        ...Cp,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: o ? Number(a) * 24 / Number(l) : a,
        className: ["lucide", `lucide-${Np(e)}`, i].join(" "),
        ...d
      },
      [
        ...t.map(([v, w]) => f.createElement(v, w)),
        ...Array.isArray(c) ? c : [c]
      ]
    )
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ef = le("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mp = le("AlertTriangle", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
      key: "c3ski4"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tf = le("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ip = le("ArrowUpDown", [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nf = le("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tp = le("Box", [
  [
    "path",
    {
      d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
      key: "hh9hay"
    }
  ],
  ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
  ["path", { d: "M12 22V12", key: "d0xqtd" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lp = le("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dp = le("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const si = le("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pp = le("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rf = le("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ai = le("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rp = le("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Op = le("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qr = le("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ap = le("Eraser", [
  [
    "path",
    {
      d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",
      key: "182aya"
    }
  ],
  ["path", { d: "M22 21H7", key: "t4ddhn" }],
  ["path", { d: "m5 11 9 9", key: "1mo9qw" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oi = le("FileJson", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  [
    "path",
    { d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1", key: "1oajmo" }
  ],
  [
    "path",
    { d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1", key: "mpwhp6" }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zp = le("FileText", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fp = le("Folder", [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wp = le("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $p = le("Lasso", [
  ["path", { d: "M7 22a5 5 0 0 1-2-4", key: "umushi" }],
  [
    "path",
    {
      d: "M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1",
      key: "146dds"
    }
  ],
  ["path", { d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z", key: "bq3ynw" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lf = le("LayoutGrid", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Up = le("LayoutList", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }],
  ["path", { d: "M14 4h7", key: "3xa0d5" }],
  ["path", { d: "M14 9h7", key: "1icrd9" }],
  ["path", { d: "M14 15h7", key: "1mj8o2" }],
  ["path", { d: "M14 20h7", key: "11slyb" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vp = le("Link2Off", [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7", key: "10o201" }],
  ["path", { d: "M15 7h2a5 5 0 0 1 4 8", key: "1d3206" }],
  ["line", { x1: "8", x2: "12", y1: "12", y2: "12", key: "rvw6j4" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bp = le("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sc = le("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qp = le("Maximize", [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
  ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
  ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hp = le("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kp = le("Minimize", [
  ["path", { d: "M8 3v3a2 2 0 0 1-2 2H3", key: "hohbtr" }],
  ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3", key: "5jw1f3" }],
  ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3", key: "198tvr" }],
  ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3", key: "ph8mxp" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gp = le("MoreVertical", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qp = le("PanelBottom", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sf = le("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yr = le("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = le("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xr = le("RefreshCw", [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yp = le("ScanLine", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cn = le("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const af = le("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const of = le("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ar = le("Star", [
  [
    "polygon",
    {
      points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xp = le("StickyNote", [
  ["path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z", key: "qazsjp" }],
  ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4", key: "40519r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dr = le("Tag", [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $t = le("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zp = le("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jp = le("Type", [
  ["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }],
  ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eg = le("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11", key: "llx8ln" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tg = le("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ng = le("Workflow", [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xe = le("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rg = le("ZoomIn", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lg = le("ZoomOut", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);
window.api = se;
async function de(e) {
  if (!e.ok) {
    let n = `API error: ${e.status} ${e.statusText}`;
    try {
      const r = await e.json();
      r != null && r.error && (n = r.error);
    } catch {
    }
    throw new Error(n);
  }
  const t = await e.json();
  if (!t.success)
    throw new Error(t.error || t.message || "Unknown error");
  return t.data;
}
const sg = async () => {
  const e = await se.fetchApi("/meld/home-dir");
  return (await de(e)).home;
}, et = ({
  onEscape: e,
  enabled: t = !0,
  capture: n = !0
}) => {
  f.useEffect(() => {
    if (!t) return;
    const r = (l) => {
      l.key === "Escape" && (l.preventDefault(), l.stopPropagation(), l.stopImmediatePropagation(), e());
    };
    return window.addEventListener("keydown", r, { capture: n }), () => window.removeEventListener("keydown", r, { capture: n });
  }, [e, t, n]);
};
let gs = !1;
const ag = (e) => {
  gs = e, gs && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, og = (...e) => {
  gs && console.log("[Meld]", ...e);
}, ig = (...e) => {
  gs && console.warn("[Meld]", ...e);
}, cg = (...e) => {
  console.error("[Meld]", ...e);
}, re = {
  log: og,
  warn: ig,
  error: cg,
  init: ag
}, Ql = async (e = 0, t = 30, n = "", r = "default", l = !1) => {
  const a = await se.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${l ? "&minimal=true" : ""}`
  );
  return de(a);
}, cf = async (e) => {
  const t = await se.fetchApi(`/meld/image/${e}/details`);
  return de(t);
}, dg = async (e, t = !1) => {
  const n = await se.fetchApi("/meld/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      permanent: t
    })
  });
  await de(n);
}, ii = async (e) => {
  const t = await se.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  return de(t);
}, df = async (e) => {
  const t = await se.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  return de(t);
}, jc = async (e, t) => {
  const n = await se.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  });
  await de(n);
}, ug = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await se.fetchApi(
    `/meld/suggest-parents?id=${e}${n}`
  );
  try {
    return await de(r);
  } catch {
    return [];
  }
}, so = async (e) => {
  const t = await se.fetchApi(`/meld/lineage?id=${e}`);
  try {
    return await de(t);
  } catch {
    return [];
  }
}, fg = async (e, t) => {
  const n = await se.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  });
  await de(n);
}, mg = async (e, t) => {
  const n = await se.fetchApi("/meld/image-notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, userNotes: t })
  });
  return de(n);
}, ao = async (e, t, n) => {
  const r = await se.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  });
  await de(r);
}, hg = async (e) => {
  const t = await se.fetchApi(`/meld/image/${e}/workflow`);
  return de(t);
}, pg = async (e) => {
  const t = await se.fetchApi(`/meld/image/${e}/snapshot_data`);
  return de(t);
}, gg = async (e, t) => {
  const n = await se.fetchApi("/meld/api/download/zip", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, removeMetadata: t })
  });
  if (!n.ok)
    throw new Error("Failed to download ZIP");
  const r = await n.blob(), l = window.URL.createObjectURL(r), a = document.createElement("a");
  a.href = l, a.download = `meld_images_${Date.now()}.zip`, document.body.appendChild(a), a.click(), window.URL.revokeObjectURL(l), document.body.removeChild(a);
}, yg = async (e, t) => {
  const n = await se.fetchApi("/meld/api/download/raw", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, removeMetadata: t })
  });
  if (!n.ok)
    throw new Error(`Failed to download image ${e}`);
  const r = n.headers.get("Content-Disposition");
  let l = `image_${e}.png`;
  if (r != null && r.includes("filename=")) {
    const c = r.match(/filename="?([^"]+)"?/);
    c != null && c[1] && (l = c[1]);
  }
  const a = await n.blob(), o = window.URL.createObjectURL(a), i = document.createElement("a");
  i.href = o, i.download = l, document.body.appendChild(i), i.click(), window.URL.revokeObjectURL(o), document.body.removeChild(i);
}, vg = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await se.fetchApi(n);
  return de(r);
}, wg = async () => {
  const e = await se.fetchApi("/meld/search-suggestions");
  return de(e);
}, xg = async () => {
  const e = await se.fetchApi("/meld/search-keywords");
  return de(e);
}, _g = async () => {
  const e = await se.fetchApi("/meld/search-config");
  return de(e);
}, kg = async () => {
  const e = await se.fetchApi("/meld/favorites");
  return de(e);
}, Sg = async (e, t) => {
  const n = await se.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  });
  await de(n);
}, bc = async (e) => {
  const t = await se.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  });
  await de(t);
}, jg = async (e, t, n) => {
  const r = await se.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  });
  await de(r);
}, bg = {
  dev_mode: !1,
  "gallery.show_parent_image": !0,
  "gallery.show_parent_images": !1,
  "sidebar.show_filename": "filename",
  "sidebar.show_dimensions": !0,
  "sidebar.show_created_at": !1,
  "sidebar.show_model_name": !0,
  "sidebar.show_positive_prompt": !0,
  "sidebar.show_negative_prompt": !1,
  "sidebar.show_user_notes": "always",
  "sidebar.show_tags": !0,
  "sidebar.thumbnail_size": 100,
  "search.quick_suggestions": !0,
  "search.input_suggest": !0,
  "viewer.loop": !0,
  "fullscreen.show_icons": !0,
  "fullscreen.loop": !0,
  "fullscreen.show_details_by_default": !0,
  "fullscreen.details.show_filename": "filename",
  "fullscreen.details.show_dimensions": !0,
  "fullscreen.details.show_created_at": !0,
  "fullscreen.details.show_tags": !0,
  "fullscreen.details.show_model_name": !0,
  "fullscreen.details.show_positive_prompt": !0,
  "fullscreen.details.show_negative_prompt": !0,
  "fullscreen.details.show_user_notes": "always",
  "fullscreen.details.show_source": !0,
  "fullscreen.details.max_positive_prompt_lines": 7,
  "fullscreen.details.max_negative_prompt_lines": 7,
  "viewer.show_details_by_default": !0,
  "viewer.details.show_filename": "filename",
  "viewer.details.show_dimensions": !0,
  "viewer.details.show_created_at": !0,
  "viewer.details.show_tags": !0,
  "viewer.details.show_model_name": !0,
  "viewer.details.show_positive_prompt": !0,
  "viewer.details.show_negative_prompt": !0,
  "viewer.details.show_user_notes": "always",
  "viewer.details.show_source": !0,
  "viewer.details.max_positive_prompt_lines": 7,
  "viewer.details.max_negative_prompt_lines": 7,
  "gallery.initial_load_count": 100,
  "gallery.max_load_count": 1e4,
  "viewer.thumbnail_window_size": 15,
  "viewer.show_thumbnails": !0,
  "viewer.show_icons": !0,
  "viewer.delete_mode": "confirm",
  "viewer.small_image_mode": "fit",
  "fullscreen.delete_mode": "confirm",
  "fullscreen.small_image_mode": "fit",
  "gallery.matching_strategy": "phash_created",
  "gallery.lineage_max_depth": 5,
  "gallery.trash_retention_days": 30,
  "gallery.trash.show_missing": !1,
  "gallery.view_mode": "grid_details",
  "gallery.suggest_phash_threshold": 82,
  "gallery.auto_link_phash_threshold": 92,
  "gallery.inherit_tags": !0,
  "viewer.shortcut.1": "tag:keep next",
  "viewer.shortcut.2": "tag:best next",
  "viewer.shortcut.3": "tag:fix-needed next",
  "viewer.shortcut.4": "",
  "viewer.shortcut.5": "",
  "viewer.shortcut.6": "",
  "viewer.shortcut.7": "",
  "viewer.shortcut.8": "",
  "viewer.shortcut.9": "",
  "viewer.shortcut.0": "",
  "viewer.shortcut.show_cheat_sheet": !0,
  "gallery.quick_shortcut.1": "add_unified_loader",
  "gallery.quick_shortcut.2": "",
  "gallery.quick_shortcut.3": "",
  "search.show_all_keywords": !0
}, uf = async () => {
  let e;
  try {
    const t = await se.fetchApi("/meld/settings");
    e = await de(t);
  } catch (t) {
    return console.error("Failed to fetch settings, using defaults", t), bg;
  }
  return typeof e["sidebar.show_filename"] == "boolean" && (e["sidebar.show_filename"] = e["sidebar.show_filename"] ? "filename" : "none"), typeof e["viewer.details.show_filename"] == "boolean" && (e["viewer.details.show_filename"] = e["viewer.details.show_filename"] ? "filename" : "none"), typeof e["fullscreen.details.show_filename"] == "boolean" && (e["fullscreen.details.show_filename"] = e["fullscreen.details.show_filename"] ? "filename" : "none"), e;
}, Eg = async (e, t) => {
  const n = await se.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  });
  await de(n);
}, Cg = async () => {
  const e = await se.fetchApi("/meld/clear-thumbnail-cache", {
    method: "POST"
  });
  return de(e);
}, Ec = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (d, m) => {
    const v = typeof d == "function" ? d(t) : d;
    if (!Object.is(v, t)) {
      const w = t;
      t = m ?? (typeof v != "object" || v === null) ? v : Object.assign({}, t, v), n.forEach((_) => _(t, w));
    }
  }, l = () => t, i = { setState: r, getState: l, getInitialState: () => c, subscribe: (d) => (n.add(d), () => n.delete(d)) }, c = t = e(r, l, i);
  return i;
}, Ng = (e) => e ? Ec(e) : Ec, Mg = (e) => e;
function Ig(e, t = Mg) {
  const n = Yt.useSyncExternalStore(
    e.subscribe,
    Yt.useCallback(() => t(e.getState()), [e, t]),
    Yt.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return Yt.useDebugValue(n), n;
}
const Tg = (e) => {
  const t = Ng(e), n = (r) => Ig(t, r);
  return Object.assign(n, t), n;
}, Lg = (e) => Tg;
function Dg(e, t) {
  let n;
  try {
    n = e();
  } catch {
    return;
  }
  return {
    getItem: (l) => {
      var a;
      const o = (c) => c === null ? null : JSON.parse(c, void 0), i = (a = n.getItem(l)) != null ? a : null;
      return i instanceof Promise ? i.then(o) : o(i);
    },
    setItem: (l, a) => n.setItem(l, JSON.stringify(a, void 0)),
    removeItem: (l) => n.removeItem(l)
  };
}
const oo = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return oo(r)(n);
      },
      catch(r) {
        return this;
      }
    };
  } catch (n) {
    return {
      then(r) {
        return this;
      },
      catch(r) {
        return oo(r)(n);
      }
    };
  }
}, Pg = (e, t) => (n, r, l) => {
  let a = {
    storage: Dg(() => window.localStorage),
    partialize: (S) => S,
    version: 0,
    merge: (S, h) => ({
      ...h,
      ...S
    }),
    ...t
  }, o = !1, i = 0;
  const c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set();
  let m = a.storage;
  if (!m)
    return e(
      (...S) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
        ), n(...S);
      },
      r,
      l
    );
  const v = () => {
    const S = a.partialize({ ...r() });
    return m.setItem(a.name, {
      state: S,
      version: a.version
    });
  }, w = l.setState;
  l.setState = (S, h) => (w(S, h), v());
  const _ = e(
    (...S) => (n(...S), v()),
    r,
    l
  );
  l.getInitialState = () => _;
  let g;
  const x = () => {
    var S, h;
    if (!m) return;
    const u = ++i;
    o = !1, c.forEach((y) => {
      var j;
      return y((j = r()) != null ? j : _);
    });
    const p = ((h = a.onRehydrateStorage) == null ? void 0 : h.call(a, (S = r()) != null ? S : _)) || void 0;
    return oo(m.getItem.bind(m))(a.name).then((y) => {
      if (y)
        if (typeof y.version == "number" && y.version !== a.version) {
          if (a.migrate) {
            const j = a.migrate(
              y.state,
              y.version
            );
            return j instanceof Promise ? j.then((k) => [!0, k]) : [!0, j];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, y.state];
      return [!1, void 0];
    }).then((y) => {
      var j;
      if (u !== i)
        return;
      const [k, b] = y;
      if (g = a.merge(
        b,
        (j = r()) != null ? j : _
      ), n(g, !0), k)
        return v();
    }).then(() => {
      u === i && (p == null || p(g, void 0), g = r(), o = !0, d.forEach((y) => y(g)));
    }).catch((y) => {
      u === i && (p == null || p(void 0, y));
    });
  };
  return l.persist = {
    setOptions: (S) => {
      a = {
        ...a,
        ...S
      }, S.storage && (m = S.storage);
    },
    clearStorage: () => {
      m == null || m.removeItem(a.name);
    },
    getOptions: () => a,
    rehydrate: () => x(),
    hasHydrated: () => o,
    onHydrate: (S) => (c.add(S), () => {
      c.delete(S);
    }),
    onFinishHydration: (S) => (d.add(S), () => {
      d.delete(S);
    })
  }, a.skipHydration || x(), g || _;
}, Rg = Pg, Og = [
  {
    id: "keep",
    label: "Keep",
    color: "var(--meld-success-color, #4ade80)",
    shortcutKey: "1"
  },
  {
    id: "refine",
    label: "Refine",
    color: "var(--brand-yellow, #ffd700)",
    shortcutKey: "2"
  },
  {
    id: "trash",
    label: "Trash",
    color: "var(--meld-danger-color, #ff4c4c)",
    shortcutKey: "3"
  }
];
let Nl = null;
const ie = Lg()(
  Rg(
    (e) => ({
      isOpen: !1,
      slots: Og,
      buckets: {},
      images: {},
      toastMessage: null,
      toastType: "info",
      setIsOpen: (t) => e({ isOpen: t }),
      addToBucket: (t, n, r) => e((l) => {
        const a = { ...l.buckets };
        for (const i in a)
          a[i] = a[i].filter((c) => c !== n);
        a[t] || (a[t] = []), a[t].includes(n) || (a[t] = [...a[t], n]);
        const o = { ...l.images };
        return r && (o[n] = r), { buckets: a, images: o };
      }),
      removeFromBucket: (t, n) => e((r) => {
        var i;
        const l = {
          ...r.buckets,
          [t]: ((i = r.buckets[t]) == null ? void 0 : i.filter((c) => c !== n)) || []
        }, a = Object.values(l).some(
          (c) => c.includes(n)
        ), o = { ...r.images };
        return a || delete o[n], { buckets: l, images: o };
      }),
      clearBucket: (t) => e((n) => {
        const r = {
          ...n.buckets,
          [t]: []
        }, l = new Set(Object.values(r).flat()), a = { ...n.images };
        for (const o of Object.keys(a))
          l.has(o) || delete a[o];
        return { buckets: r, images: a };
      }),
      updateSlot: (t, n) => e((r) => ({
        slots: r.slots.map(
          (l) => l.id === t ? { ...l, ...n } : l
        )
      })),
      addSlot: (t) => e((n) => ({
        slots: [...n.slots, t]
      })),
      removeSlot: (t) => e((n) => {
        const r = n.slots.filter((i) => i.id !== t), l = { ...n.buckets };
        delete l[t];
        const a = new Set(Object.values(l).flat()), o = { ...n.images };
        for (const i of Object.keys(o))
          a.has(i) || delete o[i];
        return {
          slots: r,
          buckets: l,
          images: o
        };
      }),
      removeImages: (t) => e((n) => {
        const r = t.map(String), l = new Set(r), a = { ...n.buckets };
        let o = !1;
        for (const [c, d] of Object.entries(a)) {
          const m = d.filter((v) => !l.has(v));
          m.length !== d.length && (a[c] = m, o = !0);
        }
        if (!o) return n;
        const i = { ...n.images };
        for (const c of r)
          delete i[c];
        return { buckets: a, images: i };
      }),
      /**
       * Show toast message for 2.5 seconds.
       * If called multiple times, the latest message overwrites the previous one.
       */
      showToast: (t, n = "info") => {
        Nl && clearTimeout(Nl), e({ toastMessage: t, toastType: n }), Nl = setTimeout(() => {
          e({ toastMessage: null }), Nl = null;
        }, 2500);
      }
    }),
    {
      name: "meld-light-table-storage",
      // Persist both slots configuration, buckets, and images
      partialize: (e) => ({
        slots: e.slots,
        buckets: e.buckets,
        images: e.images
      })
    }
  )
), Ag = {
  images: [],
  selectedIds: /* @__PURE__ */ new Set(),
  isLoading: !1,
  error: null,
  viewScope: "default",
  viewerImageId: null,
  viewerMode: "gallery",
  viewerLightTableSlotId: null,
  viewerInitialMaskMode: !1,
  viewerFallbackImage: null,
  lineageImages: [],
  activeModal: { type: "none" },
  lastSelectedId: null,
  scanStatus: {
    isRunning: !1,
    isFinished: !1,
    shouldCancel: !1,
    progress: { current: 0, total: 0, phase: "" },
    newCount: 0,
    updatedCount: 0,
    totalCount: 0
  },
  settings: {
    dev_mode: !1,
    "gallery.show_parent_image": !0,
    "gallery.show_parent_images": !1,
    "sidebar.show_filename": "filename",
    "sidebar.show_dimensions": !0,
    "sidebar.show_created_at": !1,
    "sidebar.show_model_name": !0,
    "sidebar.show_positive_prompt": !0,
    "sidebar.show_negative_prompt": !1,
    "sidebar.show_user_notes": "always",
    "sidebar.show_tags": !0,
    "sidebar.thumbnail_size": 100,
    "search.quick_suggestions": !0,
    "search.input_suggest": !0,
    "viewer.loop": !0,
    "fullscreen.show_icons": !0,
    "fullscreen.loop": !0,
    "fullscreen.show_details_by_default": !0,
    "fullscreen.details.show_filename": "filename",
    "fullscreen.details.show_dimensions": !0,
    "fullscreen.details.show_created_at": !0,
    "fullscreen.details.show_tags": !0,
    "fullscreen.details.show_model_name": !0,
    "fullscreen.details.show_positive_prompt": !0,
    "fullscreen.details.show_negative_prompt": !0,
    "fullscreen.details.show_user_notes": "always",
    "fullscreen.details.show_source": !0,
    "fullscreen.details.max_positive_prompt_lines": 7,
    "fullscreen.details.max_negative_prompt_lines": 7,
    "viewer.show_details_by_default": !0,
    "viewer.details.show_filename": "filename",
    "viewer.details.show_dimensions": !0,
    "viewer.details.show_created_at": !0,
    "viewer.details.show_tags": !0,
    "viewer.details.show_model_name": !0,
    "viewer.details.show_positive_prompt": !0,
    "viewer.details.show_negative_prompt": !0,
    "viewer.details.show_user_notes": "always",
    "viewer.details.show_source": !0,
    "viewer.details.max_positive_prompt_lines": 7,
    "viewer.details.max_negative_prompt_lines": 7,
    "gallery.initial_load_count": 100,
    "gallery.max_load_count": 1e4,
    "viewer.thumbnail_window_size": 15,
    "viewer.show_thumbnails": !0,
    "viewer.show_icons": !0,
    "viewer.delete_mode": "confirm",
    "viewer.small_image_mode": "fit",
    "fullscreen.delete_mode": "confirm",
    "fullscreen.small_image_mode": "fit",
    "gallery.matching_strategy": "phash_created",
    "gallery.lineage_max_depth": 5,
    "gallery.trash_retention_days": 30,
    "gallery.trash.show_missing": !1,
    "gallery.view_mode": "grid_details",
    "gallery.suggest_phash_threshold": 82,
    "gallery.auto_link_phash_threshold": 92,
    "gallery.inherit_tags": !0,
    "viewer.shortcut.1": "tag:keep next",
    "viewer.shortcut.2": "tag:best next",
    "viewer.shortcut.3": "tag:fix-needed next",
    "viewer.shortcut.4": "",
    "viewer.shortcut.5": "",
    "viewer.shortcut.6": "",
    "viewer.shortcut.7": "",
    "viewer.shortcut.8": "",
    "viewer.shortcut.9": "",
    "viewer.shortcut.0": "",
    "viewer.shortcut.show_cheat_sheet": !0,
    "gallery.quick_shortcut.1": "add_unified_loader",
    "gallery.quick_shortcut.2": "",
    "gallery.quick_shortcut.3": "",
    "search.show_all_keywords": !0
  },
  pagination: {
    total: 0,
    offset: 0,
    limit: 100,
    hasMore: !1
  },
  searchQuery: "",
  favorites: [],
  toastMessage: null,
  toastType: "info",
  confirmModal: null
};
function zg(e, t) {
  var n, r, l;
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "REMOVE_IMAGES": {
      const a = new Set(t.payload), o = e.images.filter((d) => !a.has(d.id)), i = e.lineageImages.filter(
        (d) => !a.has(d.id)
      ), c = new Set(e.selectedIds);
      for (const d of t.payload)
        c.delete(d);
      return {
        ...e,
        images: o,
        lineageImages: i,
        selectedIds: c,
        pagination: {
          ...e.pagination,
          total: Math.max(0, e.pagination.total - t.payload.length)
        }
      };
    }
    case "ADD_IMAGES": {
      const a = t.payload, o = [...e.images, ...a], i = Array.from(
        new Map(o.map((c) => [c.id, c])).values()
      ).sort((c, d) => d.created_at - c.created_at);
      return {
        ...e,
        images: i,
        pagination: {
          ...e.pagination,
          total: e.pagination.total + a.length
        }
      };
    }
    case "UPDATE_IMAGE": {
      const a = t.payload, o = e.images.map(
        (c) => c.id === a.id ? a : c
      ), i = e.lineageImages.map(
        (c) => c.id === a.id ? a : c
      );
      return {
        ...e,
        images: o,
        lineageImages: i
      };
    }
    case "SET_IMAGES": {
      const { images: a, total: o, offset: i } = t.payload;
      let c = e.viewerImageId, d = null;
      if (e.viewerMode === "gallery" && c !== null && !a.some((m) => m.id === c)) {
        const m = e.images.find((v) => v.id === c) || (((n = e.viewerFallbackImage) == null ? void 0 : n.id) === c ? e.viewerFallbackImage : void 0);
        m ? d = m : c = null;
      }
      return {
        ...e,
        images: a,
        isLoading: !1,
        error: null,
        viewerImageId: c,
        viewerFallbackImage: d,
        pagination: {
          total: o,
          offset: i,
          limit: e.pagination.limit,
          hasMore: i + a.length < o
        }
      };
    }
    case "APPEND_IMAGES": {
      const { images: a, total: o, offset: i } = t.payload, c = [...e.images, ...a], d = Array.from(
        new Map(c.map((m) => [m.id, m])).values()
      );
      return {
        ...e,
        images: d,
        isLoading: !1,
        error: null,
        pagination: {
          ...e.pagination,
          total: o,
          offset: i,
          hasMore: i + a.length < o
        }
      };
    }
    case "SET_LINEAGE":
      return {
        ...e,
        lineageImages: [...t.payload].reverse()
      };
    case "SET_LOADING":
      return {
        ...e,
        isLoading: t.payload
      };
    case "SET_ERROR":
      return {
        ...e,
        error: t.payload,
        isLoading: !1
      };
    case "TOGGLE_SELECT": {
      const a = new Set(e.selectedIds);
      let o = e.lastSelectedId;
      return a.has(t.payload) ? (a.delete(t.payload), o === t.payload && (o = null)) : (a.add(t.payload), o = t.payload), {
        ...e,
        selectedIds: a,
        lastSelectedId: o
      };
    }
    case "SELECT_RANGE": {
      if (e.lastSelectedId === null) {
        const m = new Set(e.selectedIds);
        return m.add(t.payload), {
          ...e,
          selectedIds: m,
          lastSelectedId: t.payload
        };
      }
      const a = e.images.findIndex(
        (m) => m.id === e.lastSelectedId
      ), o = e.images.findIndex(
        (m) => m.id === t.payload
      );
      if (a === -1 || o === -1) return e;
      const [i, c] = [
        Math.min(a, o),
        Math.max(a, o)
      ], d = new Set(e.selectedIds);
      for (let m = i; m <= c; m++)
        d.add(e.images[m].id);
      return {
        ...e,
        selectedIds: d,
        lastSelectedId: t.payload
      };
    }
    case "SELECT_ALL":
      return {
        ...e,
        selectedIds: new Set(
          e.images.map((a) => a.id)
        ),
        lastSelectedId: e.images.length > 0 ? e.images[0].id : null
      };
    case "CLEAR_SELECTION":
      return {
        ...e,
        selectedIds: /* @__PURE__ */ new Set(),
        lastSelectedId: null
      };
    case "DESELECT_IMAGES": {
      const a = new Set(e.selectedIds);
      let o = e.lastSelectedId;
      return t.payload.forEach((i) => {
        a.delete(i), o === i && (o = null);
      }), {
        ...e,
        selectedIds: a,
        lastSelectedId: o
      };
    }
    case "SET_VIEW_SCOPE":
      return {
        ...e,
        viewScope: t.payload,
        images: [],
        // Clear images to force a fresh fetch
        selectedIds: /* @__PURE__ */ new Set(),
        // Clear selection when switching modes
        viewerImageId: null,
        // Close viewer when switching modes
        pagination: {
          ...e.pagination,
          offset: 0,
          total: 0,
          hasMore: !1
        }
      };
    case "REFRESH":
      return e;
    case "OPEN_VIEWER": {
      const a = t.payload, o = typeof a == "number" ? a : a.id, i = typeof a == "number" ? "gallery" : a.mode, c = typeof a != "number" && a.mode === "lighttable" ? a.slotId : null;
      let d = !1;
      if (typeof a != "number" && a.initialMaskMode && (typeof a.initialMaskMode == "string" ? d = a.initialMaskMode : d = "run"), d)
        return {
          ...e,
          activeModal: {
            type: "mask_editor",
            imageId: o,
            mode: d
          }
        };
      const m = e.viewerMode === "lineage" && i === "lineage" && e.lineageImages.some((v) => v.id === o);
      return {
        ...e,
        viewerImageId: o,
        viewerMode: i,
        viewerLightTableSlotId: c,
        viewerInitialMaskMode: d,
        lineageImages: m ? e.lineageImages : []
      };
    }
    case "CLOSE_VIEWER":
      return {
        ...e,
        viewerImageId: null,
        viewerLightTableSlotId: null,
        viewerInitialMaskMode: !1,
        viewerFallbackImage: null,
        lineageImages: []
      };
    case "NEXT_IMAGE": {
      const o = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], i = e.searchQuery.trim() !== "";
      let c = [];
      if (e.viewerMode === "lighttable" && e.viewerLightTableSlotId ? c = (ie.getState().buckets[e.viewerLightTableSlotId] || []).map((_) => {
        const g = Number.parseInt(_, 10);
        return e.images.find((x) => x.id === g) || e.lineageImages.find((x) => x.id === g) || null;
      }).filter((_) => _ !== null) : e.viewerMode === "lineage" && e.lineageImages.length > 0 ? c = e.lineageImages : c = e.images.filter(
        (v) => v.exists !== !1 && (e.settings["gallery.show_parent_images"] || i || !v.has_children)
      ), e.viewerImageId === null || c.length === 0)
        return e;
      const d = c.findIndex(
        (v) => v.id === e.viewerImageId
      );
      if (d === -1 || d === c.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || d === c.length - 1 && !o)
        return e;
      const m = (d + 1) % c.length;
      return {
        ...e,
        viewerImageId: c[m].id
      };
    }
    case "PREVIOUS_IMAGE": {
      const o = ((l = t.payload) == null ? void 0 : l.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], i = e.searchQuery.trim() !== "";
      let c = [];
      if (e.viewerMode === "lighttable" && e.viewerLightTableSlotId ? c = (ie.getState().buckets[e.viewerLightTableSlotId] || []).map((_) => {
        const g = Number.parseInt(_, 10);
        return e.images.find((x) => x.id === g) || e.lineageImages.find((x) => x.id === g) || null;
      }).filter((_) => _ !== null) : e.viewerMode === "lineage" && e.lineageImages.length > 0 ? c = e.lineageImages : c = e.images.filter(
        (v) => v.exists !== !1 && (e.settings["gallery.show_parent_images"] || i || !v.has_children)
      ), e.viewerImageId === null || c.length === 0)
        return e;
      const d = c.findIndex(
        (v) => v.id === e.viewerImageId
      );
      if (d === -1 || d === 0 && e.viewerMode === "gallery" && e.pagination.hasMore || d === 0 && !o)
        return e;
      const m = (d - 1 + c.length) % c.length;
      return {
        ...e,
        viewerImageId: c[m].id
      };
    }
    case "OPEN_MODAL":
      return {
        ...e,
        activeModal: t.payload
      };
    case "CLOSE_MODAL":
      return {
        ...e,
        activeModal: { type: "none" }
      };
    case "SET_SCAN_STATUS":
      return {
        ...e,
        scanStatus: {
          ...e.scanStatus,
          ...t.payload,
          progress: {
            ...e.scanStatus.progress,
            ...t.payload.progress || {}
          }
        }
      };
    case "SET_SETTINGS": {
      const a = {
        ...e.settings,
        ...t.payload
      }, o = { ...e.pagination };
      return t.payload["gallery.initial_load_count"] !== void 0 && (o.limit = t.payload["gallery.initial_load_count"]), {
        ...e,
        settings: a,
        pagination: o
      };
    }
    case "SET_SEARCH_QUERY":
      return {
        ...e,
        searchQuery: t.payload
      };
    case "SHOW_TOAST": {
      const a = t.payload;
      return typeof a == "string" ? {
        ...e,
        toastMessage: a,
        toastType: "info"
      } : {
        ...e,
        toastMessage: a.message,
        toastType: a.type || "info"
      };
    }
    case "HIDE_TOAST":
      return {
        ...e,
        toastMessage: null
      };
    case "OPEN_CONFIRM_MODAL":
      return {
        ...e,
        confirmModal: t.payload
      };
    case "CLOSE_CONFIRM_MODAL":
      return {
        ...e,
        confirmModal: null
      };
    default:
      return e;
  }
}
const ff = f.createContext(void 0), Fg = ({
  children: e
}) => {
  const [t, n] = f.useReducer(zg, Ag), r = f.useRef(t.images.length), l = f.useRef(0), a = f.useRef(/* @__PURE__ */ new Map());
  f.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const o = f.useCallback(
    async (g, x, S) => {
      const h = t.settings["gallery.max_load_count"], u = 200;
      let p = g;
      for (; p < Math.min(x, h) && S === l.current; )
        try {
          const y = Math.min(u, h - p);
          re.log("Background fetch: starting chunk", {
            offset: p,
            limit: y
          });
          const j = await Ql(
            p,
            y,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (S !== l.current || (n({ type: "APPEND_IMAGES", payload: j }), p += j.images.length, j.images.length === 0 || p >= j.total))
            break;
          await new Promise((k) => setTimeout(k, 300));
        } catch (y) {
          re.error("Background fetch failed", y);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), i = f.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const g = performance.now(), x = ++l.current;
    try {
      const S = t.searchQuery.trim() !== "", h = t.settings["gallery.initial_load_count"];
      re.log("refreshImages: starting initial fetch", {
        isSearch: S,
        fetchLimit: h,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const u = await Ql(
        0,
        h,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), p = performance.now() - g;
      re.log("refreshImages: initial fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: p.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: u }), u.total > h && o(h, u.total, x);
    } catch (S) {
      re.error("refreshImages: fetch failed", S), n({
        type: "SET_ERROR",
        payload: S instanceof Error ? S.message : String(S)
      });
    }
  }, [
    t.searchQuery,
    t.viewScope,
    t.settings,
    o
  ]), c = f.useCallback(async () => {
    if (t.isLoading || !t.pagination.hasMore) return;
    n({ type: "SET_LOADING", payload: !0 });
    const g = performance.now();
    try {
      const x = r.current, S = t.searchQuery.trim() !== "", h = t.pagination.limit;
      re.log("loadMoreImages: starting fetch", {
        nextOffset: x,
        fetchLimit: h,
        isSearch: S
      });
      const u = await Ql(
        x,
        h,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), p = performance.now() - g;
      re.log("loadMoreImages: fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: p.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: u });
    } catch (x) {
      re.error("loadMoreImages: fetch failed", x), n({
        type: "SET_ERROR",
        payload: x instanceof Error ? x.message : String(x)
      });
    }
  }, [
    t.isLoading,
    t.pagination.hasMore,
    t.pagination.limit,
    t.searchQuery,
    t.viewScope
  ]), d = f.useCallback(async () => {
    try {
      const g = await kg();
      n({ type: "SET_FAVORITES", payload: g });
    } catch (g) {
      re.error("Failed to load favorites", g);
    }
  }, []), m = f.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const g = Array.from(t.selectedIds), S = t.images.filter(
      (h) => t.selectedIds.has(h.id)
    ).some(
      (h) => h.parent_id || h.has_children
    );
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: g,
        hasLineage: S,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), v = f.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const g = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const S = (await ii(g)).restored_ids || g;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: S }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (x) {
      n({
        type: "SET_ERROR",
        payload: x instanceof Error ? x.message : String(x)
      });
    }
  }, [t.selectedIds, t.viewScope]), w = f.useCallback(
    async (g, x) => {
      try {
        await Eg(g, x), n({ type: "SET_SETTINGS", payload: { [g]: x } });
      } catch (S) {
        n({
          type: "SET_ERROR",
          payload: S instanceof Error ? S.message : String(S)
        });
      }
    },
    []
  ), _ = f.useCallback(
    async (g) => {
      const x = t.images.find((p) => p.id === g);
      if (x && !x.is_minimal)
        return x;
      const S = t.lineageImages.find((p) => p.id === g);
      if (S && !S.is_minimal)
        return S;
      const h = a.current.get(g);
      if (h)
        return h;
      const u = (async () => {
        try {
          re.log("fetchFullImageDetails: fetching full data", { id: g });
          const p = await cf(g);
          return n({ type: "UPDATE_IMAGE", payload: p }), p;
        } finally {
          a.current.delete(g);
        }
      })();
      return a.current.set(g, u), u;
    },
    [t.images, t.lineageImages]
  );
  return f.useEffect(() => {
    (async () => {
      try {
        const x = await uf();
        n({ type: "SET_SETTINGS", payload: x });
      } catch (x) {
        re.error("Failed to load settings", x);
      }
    })();
  }, []), f.useEffect(() => {
    d();
  }, [d]), f.useEffect(() => {
    const g = () => {
      i();
    }, x = (h) => {
      const u = h.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: u }
      });
    }, S = (h) => {
      const u = h.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !1,
          isFinished: !0,
          shouldCancel: !1,
          newCount: u.new_count || 0,
          updatedCount: u.updated_count || 0,
          totalCount: u.total_count || 0,
          progress: {
            current: u.total_count || t.scanStatus.progress.total,
            total: u.total_count || t.scanStatus.progress.total,
            phase: "completed"
          }
        }
      }), i();
    };
    return window.addEventListener("meld-refresh", g), window.addEventListener("meld-scan-progress", x), window.addEventListener("meld-scan-finished", S), () => {
      window.removeEventListener("meld-refresh", g), window.removeEventListener("meld-scan-progress", x), window.removeEventListener("meld-scan-finished", S);
    };
  }, [i, t.scanStatus.progress.total]), f.useEffect(() => {
    i();
  }, [i]), /* @__PURE__ */ s.jsx(
    ff.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: i,
        loadMoreImages: c,
        refreshFavorites: d,
        deleteSelected: m,
        restoreSelected: v,
        updateSetting: w,
        fetchFullImageDetails: _
      },
      children: e
    }
  );
}, _e = () => {
  const e = f.useContext(ff);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, ht = (e, t = 200) => {
  if (!e.filename) return "";
  const n = encodeURIComponent, r = n(e.type || "output"), l = n(e.subfolder ?? "");
  return `/api/meld/view-thumb?${`filename=${n(e.filename)}&type=${r}&subfolder=${l}&size=${t}`}`;
}, ci = (e) => {
  if (!e.filename) return "";
  if (e.type === "custom")
    return `/api/meld/view-custom?filename=${encodeURIComponent(
      e.filename
    )}&subfolder=${encodeURIComponent(e.subfolder)}`;
  if (e.type === "trash")
    return `/api/meld/view-trash?filename=${encodeURIComponent(e.filename)}`;
  const t = e.type || "output";
  return `/api/view?filename=${encodeURIComponent(
    e.filename
  )}&type=${t}&subfolder=${encodeURIComponent(e.subfolder)}`;
}, di = async () => {
  const e = await se.fetchApi("/meld/tags");
  return de(e);
}, Wg = async (e) => {
  const t = await se.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  return de(t);
}, $g = async (e) => {
  const t = await se.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  });
  await de(t);
}, Ug = async (e, t) => {
  const n = await se.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  await de(n);
}, Vg = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await se.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, Bg = async (e, t, n = !1, r) => {
  const l = await se.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  try {
    return await de(l);
  } catch (a) {
    return console.error("Failed to fetch folders", a), { folders: [], images: [], image_count: 0 };
  }
}, Qg = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await se.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  try {
    return await de(l);
  } catch (a) {
    return console.error("Failed to fetch folder metadata", a), {};
  }
}, Hg = async (e, t, n) => {
  const r = await se.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  try {
    return (await de(r)).count;
  } catch {
    return 0;
  }
}, Kg = async (e) => {
  const t = await se.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  await de(t);
}, Gg = async () => {
  const e = await se.fetchApi("/meld/scan/cancel", {
    method: "POST"
  });
  await de(e);
}, mf = () => {
  const { dispatch: e } = _e(), [t, n] = f.useState(() => {
    const M = localStorage.getItem("meld-import-config"), K = {
      type: "output",
      subfolder: "",
      custom_path: "",
      recursive: !0,
      auto_link_parent: !0,
      link_strategy: "new_only",
      tags: []
    };
    if (M)
      try {
        const F = JSON.parse(M);
        return { ...K, ...F, tags: [] };
      } catch {
        return K;
      }
    return K;
  });
  f.useEffect(() => {
    const { tags: M, ...K } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(K));
  }, [t]);
  const [r, l] = f.useState([]), [a, o] = f.useState([]), [i, c] = f.useState(0), [d, m] = f.useState(!1), [v, w] = f.useState([]), [_, g] = f.useState(""), [x, S] = f.useState(!1), [h, u] = f.useState(null), p = f.useRef(!1), y = (M) => {
    M.target === M.currentTarget && (p.current = !0);
  }, j = (M) => {
    M.target === M.currentTarget && p.current && e({ type: "CLOSE_MODAL" }), p.current = !1;
  };
  f.useEffect(() => {
    (async () => {
      try {
        const K = await sg();
        n((F) => F.custom_path ? F : { ...F, custom_path: K });
      } catch (K) {
        re.error("Failed to fetch home directory:", K);
      }
    })();
  }, []), f.useEffect(() => {
    const M = new AbortController();
    return (async () => {
      const F = t.type === "custom" ? t.custom_path : t.subfolder;
      if (re.log(
        `loadFolders started. Path: "${F}", Type: "${t.type}"`
      ), t.type === "custom" && !F) {
        re.log("Custom path is empty, skipping load."), l([]), o([]), c(0);
        return;
      }
      m(!0);
      const P = F, C = t.type;
      try {
        re.log("Step 1: Fast load starting...");
        const L = await Bg(
          t.type,
          F,
          !0,
          M.signal
        );
        if (M.signal.aborted) {
          re.log("Step 1: Aborted.");
          return;
        }
        re.log(
          `Step 1 complete. Found ${L.folders.length} folders, ${L.images.length} images.`
        ), l(L.folders), o(L.images), c(null);
        const V = L.folders.map((E) => E.name);
        V.length > 0 && (re.log(
          `Step 2: Metadata fetch starting for ${V.length} folders...`
        ), Qg(
          C,
          P,
          V,
          M.signal
        ).then((E) => {
          if (M.signal.aborted) {
            re.log("Step 2: Aborted.");
            return;
          }
          re.log("Step 2: Metadata fetch complete."), l(
            (W) => W.map((G) => {
              const A = E[G.name];
              return A ? { ...G, count: A.count, preview: A.preview } : G;
            })
          );
        }).catch((E) => {
          E.name !== "AbortError" && re.error("Step 2: Metadata fetch failed:", E);
        })), re.log("Step 3: Path image count starting..."), Hg(C, P, M.signal).then((E) => {
          if (M.signal.aborted) {
            re.log("Step 3: Aborted.");
            return;
          }
          re.log(`Step 3: Path image count complete: ${E}`), c(E);
        }).catch((E) => {
          E.name !== "AbortError" && re.error("Step 3: Path image count failed:", E);
        });
      } catch (L) {
        if (L.name === "AbortError") {
          re.log("Request aborted.");
          return;
        }
        re.error("Failed to load folders:", L), l([]), o([]), c(0);
      } finally {
        M.signal.aborted || m(!1);
      }
    })(), () => {
      M.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const k = f.useCallback(async () => {
    S(!0);
    try {
      const M = await di();
      w(M);
    } catch (M) {
      re.error("Failed to fetch tags:", M);
    } finally {
      S(!1);
    }
  }, []);
  f.useEffect(() => {
    k();
  }, [k]), et({
    onEscape: f.useCallback(() => {
      h ? u(null) : e({ type: "CLOSE_MODAL" });
    }, [h, e])
  });
  const b = f.useMemo(() => v.filter(
    (M) => M.name.toLowerCase().includes(_.toLowerCase()) && !t.tags.includes(M.name)
  ), [v, _, t.tags]), I = (M) => {
    const K = M.trim();
    K && !t.tags.includes(K) && (n({ ...t, tags: [...t.tags, K] }), g(""));
  }, O = (M) => {
    n({ ...t, tags: t.tags.filter((K) => K !== M) });
  }, R = (M) => {
    M.key === "Enter" && _.trim() && (M.preventDefault(), I(_.trim()));
  }, D = async () => {
    try {
      await Kg(t), e({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !0,
          isFinished: !1,
          shouldCancel: !1,
          newCount: 0,
          progress: { current: 0, total: 0, phase: "registering" }
        }
      }), e({ type: "CLOSE_MODAL" });
    } catch (M) {
      re.error("Failed to start scan:", M), alert(`Failed to start scan: ${M}`);
    }
  }, U = (M) => {
    if (t.type === "custom") {
      const K = t.custom_path.includes("\\") ? "\\" : "/", F = t.custom_path.endsWith(K) ? `${t.custom_path}${M}` : `${t.custom_path}${K}${M}`;
      n({ ...t, custom_path: F });
    } else {
      const K = t.subfolder ? `${t.subfolder}/${M}` : M;
      n({ ...t, subfolder: K });
    }
  }, Z = () => {
    if (t.type === "custom") {
      const M = t.custom_path.includes("\\") ? "\\" : "/", K = t.custom_path.split(M);
      if (K.length > 1) {
        K.pop();
        let F = K.join(M);
        F === "" && M === "/" && (F = "/"), n({ ...t, custom_path: F });
      }
    } else {
      const M = t.subfolder.split("/");
      M.pop(), n({ ...t, subfolder: M.join("/") });
    }
  };
  return ge.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: y,
        onMouseUp: j,
        children: [
          /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--large",
              onClick: (M) => M.stopPropagation(),
              children: [
                /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ s.jsx("h2", { children: "Import Images" }),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => e({ type: "CLOSE_MODAL" }),
                      children: /* @__PURE__ */ s.jsx(xe, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-import-container", children: [
                  /* @__PURE__ */ s.jsxs("div", { className: "meld-import-sidebar", children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ s.jsx("label", { htmlFor: "base-location", children: "Base Location" }),
                      /* @__PURE__ */ s.jsxs(
                        "select",
                        {
                          id: "base-location",
                          value: t.type,
                          onChange: (M) => n({
                            ...t,
                            type: M.target.value,
                            subfolder: ""
                          }),
                          children: [
                            /* @__PURE__ */ s.jsx("option", { value: "output", children: "Output Directory" }),
                            /* @__PURE__ */ s.jsx("option", { value: "input", children: "Input Directory" }),
                            /* @__PURE__ */ s.jsx("option", { value: "custom", children: "Custom Path (Absolute)" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ s.jsx("span", { className: "meld-form-label", children: "Images Found" }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-path-count", children: i === null ? /* @__PURE__ */ s.jsx("span", { className: "meld-path-count--loading", children: "Scanning..." }) : `${i} images` })
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ s.jsxs("label", { children: [
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: t.recursive,
                          onChange: (M) => n({ ...t, recursive: M.target.checked })
                        }
                      ),
                      "Recursive Scan"
                    ] }) }),
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ s.jsx("label", { htmlFor: "link-strategy", children: "Source Linking" }),
                      /* @__PURE__ */ s.jsxs(
                        "select",
                        {
                          id: "link-strategy",
                          value: t.link_strategy,
                          onChange: (M) => n({
                            ...t,
                            link_strategy: M.target.value,
                            auto_link_parent: M.target.value !== "none"
                          }),
                          children: [
                            /* @__PURE__ */ s.jsx("option", { value: "none", children: "Do not link" }),
                            /* @__PURE__ */ s.jsx("option", { value: "new_only", children: "Only for new images" }),
                            /* @__PURE__ */ s.jsx("option", { value: "all", children: "Reset for all images" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ s.jsx("label", { htmlFor: "import-tags", children: "Tags to Add" }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((M) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        M,
                        /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => O(M),
                            children: /* @__PURE__ */ s.jsx(xe, { size: 12 })
                          }
                        )
                      ] }, M)) }),
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ s.jsx(Cn, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ s.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: _,
                            onChange: (M) => g(M.target.value),
                            onKeyDown: R
                          }
                        ),
                        _.trim() && !t.tags.includes(_.trim()) && /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => I(_),
                            children: /* @__PURE__ */ s.jsx(Ps, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: x ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : b.length === 0 ? _ && /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        _
                      ] }) : b.map((M) => /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => I(M.name),
                          children: M.name
                        },
                        M.id
                      )) })
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ s.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "meld-btn meld-btn-primary",
                        onClick: D,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ s.jsx(Yr, { size: 16 }),
                          "Start Import"
                        ]
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ s.jsxs("div", { className: "meld-import-browser", children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-browser-header", children: [
                      /* @__PURE__ */ s.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-browser-back",
                          disabled: t.type === "custom" ? t.custom_path === "/" || !t.custom_path.includes("/") && !t.custom_path.includes("\\") : !t.subfolder,
                          onClick: Z,
                          children: [
                            /* @__PURE__ */ s.jsx(rf, { size: 16 }),
                            "Back"
                          ]
                        }
                      ),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-browser-path-container", children: t.type === "custom" ? /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          type: "text",
                          className: "meld-browser-path-input",
                          value: t.custom_path,
                          onChange: (M) => n({ ...t, custom_path: M.target.value }),
                          placeholder: "Enter absolute path..."
                        }
                      ) : /* @__PURE__ */ s.jsxs("div", { className: "meld-browser-path-display", children: [
                        /* @__PURE__ */ s.jsxs("span", { className: "meld-browser-path-type", children: [
                          t.type,
                          "/"
                        ] }),
                        t.subfolder
                      ] }) })
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-folder-list", children: d ? /* @__PURE__ */ s.jsx("div", { className: "meld-browser-loading", children: "Loading..." }) : r.length === 0 && a.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-browser-empty", children: "No items found." }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                      r.map((M) => /* @__PURE__ */ s.jsxs(
                        "div",
                        {
                          className: "meld-folder-item",
                          onClick: () => U(M.name),
                          children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-folder-icon-wrapper", children: M.preview ? /* @__PURE__ */ s.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: ht(M.preview, 64),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ s.jsx(Fp, { size: 16 }) }),
                            /* @__PURE__ */ s.jsx("span", { className: "meld-folder-name", children: M.name }),
                            /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${M.count === null ? "meld-folder-count--loading" : ""}`,
                                children: M.count !== null ? `${M.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ s.jsx(ai, { size: 14 })
                          ]
                        },
                        M.name
                      )),
                      a.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-browser-image-grid", children: a.map((M) => /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => u(M),
                          children: /* @__PURE__ */ s.jsx(
                            "img",
                            {
                              src: ht(M, 120),
                              alt: M.filename,
                              title: M.filename
                            }
                          )
                        },
                        M.filename
                      )) })
                    ] }) })
                  ] })
                ] }) })
              ]
            }
          ),
          h && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (M) => {
                M.stopPropagation(), u(null);
              },
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-import-preview-content",
                  onClick: (M) => M.stopPropagation(),
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-import-preview-close",
                          onClick: () => u(null),
                          children: /* @__PURE__ */ s.jsx(xe, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "img",
                        {
                          src: ht(h, 400),
                          alt: h.filename
                        }
                      )
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-import-preview-info", children: h.filename })
                  ]
                }
              )
            }
          )
        ]
      }
    ),
    document.fullscreenElement || document.body
  );
}, qg = ({
  imageIds: e,
  onSuccess: t,
  onClose: n
}) => {
  const [r, l] = f.useState("zip"), [a, o] = f.useState(!1), [i, c] = f.useState(!1), d = f.useRef(!1), m = (_) => {
    _.target === _.currentTarget && (d.current = !0);
  }, v = (_) => {
    _.target === _.currentTarget && d.current && (i || n()), d.current = !1;
  };
  et({
    onEscape: () => {
      i || n();
    }
  });
  const w = async () => {
    c(!0);
    try {
      if (r === "zip")
        await gg(e, a);
      else
        for (const _ of e)
          await yg(_, a), await new Promise((g) => setTimeout(g, 200));
      n(), t == null || t();
    } catch (_) {
      console.error("Download failed:", _), alert("Failed to download images.");
    } finally {
      c(!1);
    }
  };
  return ge.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: m,
        onMouseUp: v,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (_) => _.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(qr, { size: 18 }),
              /* @__PURE__ */ s.jsxs("h3", { style: { margin: 0 }, children: [
                "Download (",
                e.length,
                " image",
                e.length > 1 ? "s" : "",
                ")"
              ] })
            ] }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: n,
                disabled: i,
                children: /* @__PURE__ */ s.jsx(xe, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", style: { padding: "20px" }, children: [
            /* @__PURE__ */ s.jsxs("div", { style: { marginBottom: "20px" }, children: [
              /* @__PURE__ */ s.jsx(
                "label",
                {
                  htmlFor: "download-format",
                  style: {
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "bold"
                  },
                  children: "Format"
                }
              ),
              /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", gap: "16px" }, children: [
                /* @__PURE__ */ s.jsxs(
                  "label",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      cursor: "pointer"
                    },
                    children: [
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          type: "radio",
                          name: "format",
                          value: "zip",
                          checked: r === "zip",
                          onChange: () => l("zip"),
                          disabled: i
                        }
                      ),
                      "ZIP (Single File)"
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "label",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      cursor: "pointer"
                    },
                    children: [
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          type: "radio",
                          name: "format",
                          value: "raw",
                          checked: r === "raw",
                          onChange: () => l("raw"),
                          disabled: i
                        }
                      ),
                      "Raw (Multiple Files)"
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx(
                "label",
                {
                  htmlFor: "download-options",
                  style: {
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "bold"
                  },
                  children: "Options"
                }
              ),
              /* @__PURE__ */ s.jsxs(
                "label",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer"
                  },
                  children: [
                    /* @__PURE__ */ s.jsx(
                      "input",
                      {
                        type: "checkbox",
                        checked: a,
                        onChange: (_) => o(_.target.checked),
                        disabled: i
                      }
                    ),
                    "Remove metadata (ComfyUI workflow data) from downloaded images"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-footer", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-secondary",
                onClick: n,
                disabled: i,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-primary",
                onClick: w,
                disabled: i,
                style: { display: "flex", alignItems: "center", gap: "8px" },
                children: i ? "Downloading..." : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                  /* @__PURE__ */ s.jsx(qr, { size: 16 }),
                  " Download"
                ] })
              }
            )
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, hf = async () => {
  const e = await se.fetchApi("/meld/workflows");
  return de(e);
}, pf = async (e) => {
  const t = await se.fetchApi(
    `/meld/workflow/raw?name=${encodeURIComponent(e)}`
  );
  return de(t);
}, ui = () => ({ executeWorkflow: f.useCallback(
  async (t, n, r, l) => {
    var _, g, x, S, h, u, p;
    console.log("[Meld] executeWorkflow called:", {
      workflowName: t,
      imageId: n.id,
      maskFilename: r,
      targetLoaderNodeId: l
    });
    const a = await pf(t);
    console.log("[Meld] Workflow fetched:", t);
    let o = l || null, i = null, c = !1;
    const d = (y) => {
      if (!y) return !1;
      const j = y.replace(/\s+/g, "");
      return j === "MeldImageLoader" || j === "LoadImage";
    };
    if (a.nodes && Array.isArray(a.nodes)) {
      if (c = !0, !o) {
        const j = a.nodes.find(
          (k) => d(k.type)
        );
        j && (o = String(j.id));
      }
      const y = a.nodes.find(
        (j) => {
          var k;
          return ((k = j.type) == null ? void 0 : k.replace(/\s+/g, "")) === "LoadImageMask";
        }
      );
      y && (i = String(y.id));
    } else {
      if (!o)
        for (const y in a) {
          const j = a[y];
          if (d(j.class_type)) {
            o = y;
            break;
          }
        }
      for (const y in a)
        if (((_ = a[y].class_type) == null ? void 0 : _.replace(/\s+/g, "")) === "LoadImageMask") {
          i = y;
          break;
        }
    }
    if (console.log("[Meld] Node IDs found:", {
      loaderNodeId: o,
      maskNodeId: i,
      isUIFormat: c
    }), !o)
      throw new Error(
        "Meld Image Loader or Load Image node not found in the selected workflow."
      );
    if (r && !i)
      throw console.warn(
        "[Meld] Mask filename provided but no mask node found in workflow JSON"
      ), new Error(
        "Load Image (as Mask) node not found in the selected workflow, but a mask was provided."
      );
    let m = n.filename;
    if (n.subfolder && (m = `${n.subfolder}/${n.filename}`), n.type && n.type !== "input" && (m = `${m} [${n.type}]`), c) {
      const y = window.app, j = t.replace(/\.json$/i, "");
      let k = !1;
      const b = document.querySelectorAll(".workflow-tab");
      for (const R of Array.from(b)) {
        const D = R.querySelector(".workflow-label"), U = ((g = D == null ? void 0 : D.textContent) == null ? void 0 : g.trim()) || ((x = R.textContent) == null ? void 0 : x.trim()) || "";
        if (U === j || U === t || U.startsWith(`${j} `) || U.startsWith(`${j}•`)) {
          R.click(), k = !0;
          break;
        }
      }
      k || await y.loadGraphData(a, !0, !0, t), await new Promise((R) => setTimeout(R, 200));
      const I = y.graph._nodes;
      console.log("[Meld] Active graph nodes count:", I.length);
      const O = I.find(
        (R) => String(R.id) === o || d(R.type)
      );
      if (O) {
        const R = (S = O.widgets) == null ? void 0 : S.find((D) => D.name === "image");
        console.log("[Meld] Updating loader node widget:", {
          nodeId: O.id,
          type: O.type,
          imagePath: m
        }), R && (R.value = m, typeof R.callback == "function" && R.callback(m));
      } else
        console.warn(
          "[Meld] Loader node (MeldImageLoader/LoadImage) not found in active graph after loading"
        );
      if (r) {
        const R = I.find(
          (D) => {
            var U;
            return String(D.id) === i || ((U = D.type) == null ? void 0 : U.replace(/\s+/g, "")) === "LoadImageMask";
          }
        );
        if (console.log("[Meld] Updating mask node widget:", {
          nodeId: R == null ? void 0 : R.id,
          maskFilename: r
        }), R) {
          const D = (h = R.widgets) == null ? void 0 : h.find(
            (Z) => Z.name === "image"
          );
          D && (D.value = `${r} [temp]`);
          const U = (u = R.widgets) == null ? void 0 : u.find(
            (Z) => Z.name === "channel"
          );
          U && (U.value = "red");
        } else
          console.warn(
            "[Meld] LoadImageMask not found in active graph after loading"
          );
      }
      y.graph.setDirtyCanvas(!0, !0);
      try {
        await y.queuePrompt(0);
        return;
      } catch (R) {
        throw console.error("Failed to queue workflow:", R), new Error(
          "Failed to queue workflow. Check the console for details."
        );
      }
    }
    const v = JSON.parse(JSON.stringify(a));
    v[o].inputs.image = m, r && i && (v[i].inputs.image = `${r} [temp]`, v[i].inputs.channel = "red");
    const w = await se.fetchApi("/prompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: v,
        client_id: se.clientId
      })
    });
    if (!w.ok) {
      const y = await w.json();
      throw new Error(((p = y.error) == null ? void 0 : p.message) || "Failed to queue workflow");
    }
    return await w.json();
  },
  []
) });
function Yg(e) {
  let t = e.filename;
  return e.subfolder && (t = `${e.subfolder}/${e.filename}`), e.type && e.type !== "input" && (t = `${t} [${e.type}]`), t;
}
function Zr(e, t) {
  var c, d;
  const n = window.app;
  if (!(n != null && n.graph))
    return { ok: !1, reason: "no_app_graph" };
  const r = Yg(e), l = (m) => {
    if (!m) return !1;
    const v = m.replace(/\s+/g, "").toLowerCase();
    return v === "meldimageloader" || v === "loadimage";
  }, a = n.graph._nodes.filter(
    (m) => l(m.type)
  );
  if (a.length === 0)
    return { ok: !1, reason: "no_loader_node" };
  let o = a[0];
  if (t) {
    const m = a.find(
      (v) => String(v.id) === t
    );
    m && (o = m);
  }
  const i = o.widgets.find(
    (m) => m.name === "image"
  );
  return i && (i.value = r, typeof i.callback == "function" && i.callback(r)), (d = (c = n.graph).afterChange) == null || d.call(c), n.graph.setDirtyCanvas(!0, !0), { ok: !0 };
}
const Xg = () => {
  const { dispatch: e } = _e();
  return { injectMaskToGraph: f.useCallback(
    (n, r) => {
      var m, v;
      console.log("[Meld-Debug] injectMaskToGraph called with:", r), Zr(n);
      const l = window.app;
      if (!(l != null && l.graph))
        return console.log("[Meld-Debug] injectMaskToGraph: No comfyApp.graph found"), !1;
      const a = l.graph._nodes.filter(
        (w) => w.type === "LoadImageMask"
      );
      if (a.length === 0)
        return console.log(
          "[Meld-Debug] injectMaskToGraph: No LoadImageMask nodes found in active graph"
        ), e({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No 'Load Image (as Mask)' node found in the current workflow."
          }
        }), !1;
      const o = a[0], i = o.widgets.find(
        (w) => w.name === "image"
      ), c = `${r} [temp]`;
      console.log(
        "[Meld-Debug] injectMaskToGraph: Updating node",
        o.id,
        "widget 'image' with",
        c
      ), i && (i.value = c, typeof i.callback == "function" && i.callback(c));
      const d = o.widgets.find(
        (w) => w.name === "channel"
      );
      return d && (d.value = "red", typeof d.callback == "function" && d.callback("red")), (v = (m = l.graph).afterChange) == null || v.call(m), l.graph.setDirtyCanvas(!0, !0), !0;
    },
    [e]
  ) };
};
function Ml(e, t) {
  return {
    data: new Uint8ClampedArray(e * t).fill(0),
    width: e,
    height: t
  };
}
function Zg(e, t, n = 255) {
  const { width: r, height: l } = e, a = document.createElement("canvas");
  a.width = r, a.height = l;
  const o = a.getContext("2d", { willReadFrequently: !0 });
  if (!o) return e;
  const i = io(e, [255, 255, 255], 255);
  o.putImageData(i, 0, 0), o.fillStyle = n > 0 ? "white" : "black", o.beginPath(), t(o), o.fill();
  const c = o.getImageData(0, 0, r, l), d = new Uint8ClampedArray(r * l);
  for (let m = 0; m < r * l; m++)
    d[m] = c.data[m * 4] > 128 ? 255 : 0;
  return { ...e, data: d };
}
function io(e, t = [255, 255, 255], n = 255) {
  const { data: r, width: l, height: a } = e, o = new ImageData(l, a), i = o.data;
  for (let c = 0; c < r.length; c++) {
    const d = r[c], m = c * 4;
    d > 0 ? (i[m] = t[0], i[m + 1] = t[1], i[m + 2] = t[2], i[m + 3] = n) : (i[m] = 0, i[m + 1] = 0, i[m + 2] = 0, i[m + 3] = 0);
  }
  return o;
}
function Jg(e) {
  return e.data.every((t) => t === 0);
}
const Cc = (e) => e === "rect" || e === "ellipse" || e === "lasso", ys = ({
  imageId: e,
  mode: t,
  sequenceData: n,
  onSuccess: r,
  onClose: l
}) => {
  const { state: a, dispatch: o } = _e(), i = f.useMemo(() => a.images.find((T) => T.id === e) ?? a.lineageImages.find((T) => T.id === e) ?? ie.getState().images[String(e)], [a.images, a.lineageImages, e]), c = f.useRef(void 0);
  i && (c.current = i);
  const d = i ?? c.current, { injectMaskToGraph: m } = Xg(), { executeWorkflow: v } = ui();
  et({ onEscape: l });
  const w = f.useRef(null), _ = f.useRef(null), g = f.useRef(null), x = f.useRef(null), [S, h] = f.useState(!1), [u, p] = f.useState(() => {
    const T = localStorage.getItem("meld-mask-tool");
    return Cc(T) ? T : "rect";
  });
  f.useEffect(() => {
    Cc(u) && localStorage.setItem("meld-mask-tool", u);
  }, [u]);
  const [y, j] = f.useState({ x: 0, y: 0 }), [k, b] = f.useState({ x: 0, y: 0 }), [I, O] = f.useState([]), [R, D] = f.useState(null), [U, Z] = f.useState(!1), [M, K] = f.useState(1), [F, P] = f.useState({ x: 0, y: 0 }), [C, L] = f.useState(!1), [V, E] = f.useState(!1), W = f.useRef(null), G = f.useCallback(() => {
    const T = g.current, N = _.current;
    if (!T || !N) return null;
    const Q = N.getBoundingClientRect(), z = T.naturalWidth, H = T.naturalHeight;
    if (!z || !H) return null;
    const ne = z / H, me = Q.width / Q.height;
    let ue, he, oe = 0, Ee = 0;
    return ne > me ? (ue = Q.width, he = Q.width / ne, Ee = (Q.height - he) / 2) : (he = Q.height, ue = Q.height * ne, oe = (Q.width - ue) / 2), {
      left: oe,
      top: Ee,
      width: ue,
      height: he
    };
  }, []), A = f.useCallback(
    (T, N, Q, z) => {
      if (!T) return N;
      const H = T.getBoundingClientRect(), ne = H.width / 2, me = H.height / 2, ue = {
        x: (ne - N.x) / Q,
        y: (me - N.y) / Q
      };
      return { x: ne - ue.x * z, y: me - ue.y * z };
    },
    []
  ), q = f.useCallback(() => {
    K((T) => {
      const N = Math.min(T * 1.2, 20);
      return P(
        (Q) => A(_.current, Q, T, N)
      ), N;
    });
  }, [A]), B = f.useCallback(() => {
    K((T) => {
      const N = Math.max(0.1, T / 1.2);
      return P(
        (Q) => A(_.current, Q, T, N)
      ), N;
    });
  }, [A]), ae = f.useCallback(() => {
    const T = w.current;
    if (!T) return;
    const N = T.getContext("2d");
    if (!N) return;
    N.clearRect(0, 0, T.width, T.height);
    const Q = getComputedStyle(document.documentElement), z = Q.getPropertyValue("--comfy-input-bg-active") || Q.getPropertyValue("--comfy-input-bg") || Q.getPropertyValue("--bg-color") || "var(--comfy-input-bg)", H = G();
    if (x.current && H && (N.save(), N.globalAlpha = 0.5, N.drawImage(
      x.current,
      H.left,
      H.top,
      H.width,
      H.height
    ), N.restore()), S) {
      const ne = Math.min(y.x, k.x), me = Math.min(y.y, k.y), ue = Math.abs(y.x - k.x), he = Math.abs(y.y - k.y);
      if (N.save(), N.globalAlpha = 0.3, N.fillStyle = z, N.strokeStyle = "white", N.lineWidth = 2, N.setLineDash([5, 5]), N.beginPath(), u === "rect")
        N.rect(ne, me, ue, he);
      else if (u === "ellipse") {
        const oe = ne + ue / 2, Ee = me + he / 2;
        N.ellipse(oe, Ee, ue / 2, he / 2, 0, 0, 2 * Math.PI);
      } else if (u === "lasso" && I.length > 1) {
        N.moveTo(I[0].x, I[0].y);
        for (let oe = 1; oe < I.length; oe++)
          N.lineTo(I[oe].x, I[oe].y);
        N.closePath();
      }
      N.fill(), N.globalAlpha = 1, N.stroke(), N.restore();
    }
  }, [
    S,
    y,
    k,
    u,
    I,
    G
  ]), [ve, ee] = f.useState([]), pe = f.useMemo(() => ve.length > 0 ? ve[ve.length - 1] : g.current ? Ml(
    g.current.naturalWidth,
    g.current.naturalHeight
  ) : null, [ve]);
  f.useEffect(() => {
    var T;
    (T = g.current) != null && T.naturalWidth && ve.length === 0 && ee([
      Ml(
        g.current.naturalWidth,
        g.current.naturalHeight
      )
    ]);
  }, [ve.length]);
  const te = f.useCallback(() => {
    var T;
    (T = g.current) != null && T.naturalWidth && ve.length === 0 && ee([
      Ml(
        g.current.naturalWidth,
        g.current.naturalHeight
      )
    ]);
  }, [ve.length]), We = f.useRef(!1), tt = f.useRef(0), bt = (T) => {
    T.target === T.currentTarget && (We.current = !0);
  }, Vt = (T) => {
    T.target === T.currentTarget && We.current && !S && l(), We.current = !1;
  };
  f.useEffect(() => {
    if (!pe) return;
    x.current || (x.current = document.createElement("canvas"));
    const T = x.current;
    T.width = pe.width, T.height = pe.height;
    const N = T.getContext("2d");
    if (!N) return;
    const Q = io(pe, [255, 255, 255], 255);
    N.putImageData(Q, 0, 0), ae();
  }, [pe, ae]), f.useEffect(() => {
    S && ae();
  }, [S, ae]), f.useEffect(() => {
    const T = _.current;
    if (!T) return;
    const N = (Q) => {
      Q.preventDefault();
      const z = Q.deltaY > 0 ? 1 / 1.1 : 1.1;
      K((H) => {
        const ne = Math.min(Math.max(0.1, H * z), 20);
        return P((me) => {
          const ue = T.getBoundingClientRect(), he = Q.clientX - ue.left, oe = Q.clientY - ue.top, Ee = {
            x: (he - me.x) / H,
            y: (oe - me.y) / H
          };
          return {
            x: he - Ee.x * ne,
            y: oe - Ee.y * ne
          };
        }), ne;
      });
    };
    return T.addEventListener("wheel", N, { passive: !1 }), () => T.removeEventListener("wheel", N);
  }, []), f.useEffect(() => {
    if (!V) return;
    const T = (Q) => {
      if (W.current) {
        const z = Q.clientX - W.current.clientX, H = Q.clientY - W.current.clientY;
        P({
          x: W.current.panX + z,
          y: W.current.panY + H
        });
      }
    }, N = () => {
      E(!1), W.current = null;
    };
    return window.addEventListener("mousemove", T), window.addEventListener("mouseup", N), () => {
      window.removeEventListener("mousemove", T), window.removeEventListener("mouseup", N);
    };
  }, [V]), f.useEffect(() => {
    const T = () => {
      _.current && w.current && (w.current.width = _.current.clientWidth, w.current.height = _.current.clientHeight, ae());
    }, N = new ResizeObserver(T);
    return _.current && N.observe(_.current), T(), () => N.disconnect();
  }, [ae]);
  const sl = (T) => {
    var oe;
    const N = T.button === 2, Q = T.button === 1, z = C && T.button === 0;
    if (N || Q || z) {
      T.preventDefault(), T.stopPropagation(), W.current = {
        panX: F.x,
        panY: F.y,
        clientX: T.clientX,
        clientY: T.clientY
      }, E(!0);
      return;
    }
    if (T.button !== 0 || S || U || Date.now() - tt.current < 100)
      return;
    T.preventDefault();
    const H = G(), ne = (oe = _.current) == null ? void 0 : oe.getBoundingClientRect();
    if (!H || !ne) return;
    h(!0);
    const me = {
      x: (T.clientX - ne.left - F.x) / M,
      y: (T.clientY - ne.top - F.y) / M
    }, ue = Math.max(
      H.left,
      Math.min(me.x, H.left + H.width)
    ), he = Math.max(
      H.top,
      Math.min(me.y, H.top + H.height)
    );
    j({ x: ue, y: he }), b({ x: ue, y: he }), O(u === "lasso" ? [{ x: ue, y: he }] : []), D(null);
  };
  f.useEffect(() => {
    if (!S) return;
    const T = (Q) => {
      var he;
      const z = G(), H = (he = _.current) == null ? void 0 : he.getBoundingClientRect();
      if (!z || !H) return;
      const ne = {
        x: (Q.clientX - H.left - F.x) / M,
        y: (Q.clientY - H.top - F.y) / M
      }, me = Math.max(
        z.left,
        Math.min(ne.x, z.left + z.width)
      ), ue = Math.max(
        z.top,
        Math.min(ne.y, z.top + z.height)
      );
      b({ x: me, y: ue }), u === "lasso" && O((oe) => [...oe, { x: me, y: ue }]);
    }, N = (Q) => {
      var ne;
      const z = G(), H = (ne = _.current) == null ? void 0 : ne.getBoundingClientRect();
      if (z && H && pe && g.current) {
        const me = {
          x: (Q.clientX - H.left - F.x) / M,
          y: (Q.clientY - H.top - F.y) / M
        }, ue = Math.max(
          z.left,
          Math.min(me.x, z.left + z.width)
        ), he = Math.max(
          z.top,
          Math.min(me.y, z.top + z.height)
        ), oe = Math.min(y.x, ue), Ee = Math.min(y.y, he), je = Math.abs(y.x - ue), nt = Math.abs(y.y - he), qf = u === "lasso";
        if (je > 5 || nt > 5 || qf && I.length > 2) {
          const Yf = g.current.naturalWidth, Xf = g.current.naturalHeight, In = Yf / z.width, Tn = Xf / z.height, Zf = Zg(pe, (hn) => {
            if (u === "rect") {
              const Ln = (oe - z.left) * In, Bt = (Ee - z.top) * Tn, cl = je * In, dl = nt * Tn;
              hn.rect(Ln, Bt, cl, dl);
            } else if (u === "ellipse") {
              const Ln = (oe - z.left) * In, Bt = (Ee - z.top) * Tn, cl = je * In, dl = nt * Tn, Jf = Ln + cl / 2, em = Bt + dl / 2;
              hn.ellipse(
                Jf,
                em,
                cl / 2,
                dl / 2,
                0,
                0,
                2 * Math.PI
              );
            } else if (u === "lasso" && I.length > 2) {
              const Ln = I[0];
              hn.moveTo(
                (Ln.x - z.left) * In,
                (Ln.y - z.top) * Tn
              );
              for (let Bt = 1; Bt < I.length; Bt++)
                hn.lineTo(
                  (I[Bt].x - z.left) * In,
                  (I[Bt].y - z.top) * Tn
                );
              hn.closePath();
            }
          });
          ee((hn) => [...hn, Zf]);
        }
      }
      tt.current = Date.now(), h(!1), O([]);
    };
    return window.addEventListener("mousemove", T), window.addEventListener("mouseup", N), () => {
      window.removeEventListener("mousemove", T), window.removeEventListener("mouseup", N);
    };
  }, [
    S,
    y.x,
    y.y,
    G,
    pe,
    u,
    I,
    F.x,
    F.y,
    M
  ]);
  const mn = f.useCallback(() => {
    ve.length > 1 && ee((T) => T.slice(0, -1));
  }, [ve.length]);
  f.useEffect(() => {
    const T = (z) => {
      if (!z) return !1;
      const H = z, ne = H.tagName;
      return ne === "INPUT" || ne === "TEXTAREA" || ne === "BUTTON" || ne === "SELECT" || ne === "A" || H.isContentEditable || H.tabIndex != null && H.tabIndex >= 0;
    }, N = (z) => {
      z.code === "Space" && !z.repeat && (T(z.target) || (z.preventDefault(), L(!0))), (z.metaKey || z.ctrlKey) && z.key.toLowerCase() === "z" && !z.shiftKey ? (z.preventDefault(), z.stopPropagation(), z.stopImmediatePropagation(), mn()) : z.key === "Escape" && (z.preventDefault(), z.stopPropagation(), z.stopImmediatePropagation(), l(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    }, Q = (z) => {
      z.code === "Space" && (T(z.target) || (z.preventDefault(), L(!1)));
    };
    return window.addEventListener("keydown", N, { capture: !0 }), window.addEventListener("keyup", Q, { capture: !0 }), () => {
      window.removeEventListener("keydown", N, { capture: !0 }), window.removeEventListener("keyup", Q, { capture: !0 });
    };
  }, [mn, l]);
  const al = () => {
    if (g.current) {
      const T = Ml(
        g.current.naturalWidth,
        g.current.naturalHeight
      );
      ee((N) => [...N, T]);
    }
  }, ol = async () => {
    if (!pe || !g.current) return null;
    Z(!0);
    try {
      const { width: T, height: N } = pe, Q = document.createElement("canvas");
      Q.width = T, Q.height = N;
      const z = Q.getContext("2d");
      if (!z) return null;
      const H = io(pe, [255, 255, 255], 255);
      z.putImageData(H, 0, 0);
      const ne = await new Promise(
        (je) => Q.toBlob(je, "image/png")
      );
      if (!ne) return null;
      const ue = `meld_mask_${Date.now()}.png`, he = new File([ne], ue, { type: "image/png" }), oe = new FormData();
      oe.append("image", he), oe.append("type", "temp"), oe.append("overwrite", "true");
      const Ee = await se.fetchApi("/upload/image", {
        method: "POST",
        body: oe
      });
      return Ee.ok ? (await Ee.json()).name : null;
    } catch (T) {
      return console.error("[Meld] Error uploading mask:", T), null;
    } finally {
      Z(!1);
    }
  }, Os = async () => {
    if (!d) return;
    const T = await ol();
    T && m(d, T) && (l(), o({ type: "CLOSE_VIEWER" }), r == null || r());
  }, il = async () => {
    if (!d) return;
    const T = await ol();
    T && (t === "run_sequence" && n ? (await v(
      n.workflowName,
      d,
      T,
      n.targetLoaderNodeId
    ), r == null || r()) : o({
      type: "OPEN_MODAL",
      payload: {
        type: "workflow_selection",
        images: [d],
        maskFilename: T,
        onSuccess: r
      }
    }));
  }, J = f.useMemo(
    () => pe && !Jg(pe),
    [pe]
  );
  return d ? /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onMouseDown: bt,
      onMouseUp: Vt,
      role: "presentation",
      children: /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: "meld-modal-content meld-mask-editor-modal",
          onClick: (T) => T.stopPropagation(),
          children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
              /* @__PURE__ */ s.jsx("h3", { children: "Select Mask Area" }),
              /* @__PURE__ */ s.jsx("button", { className: "meld-modal-close", onClick: l, type: "button", children: /* @__PURE__ */ s.jsx(xe, { size: 20 }) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-mask-editor-tool-selector", children: [
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${u === "rect" ? "active" : ""}`,
                    onClick: () => p("rect"),
                    type: "button",
                    title: "Rectangle Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(of, { size: 18 }),
                      /* @__PURE__ */ s.jsx("span", { children: "Rect" })
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${u === "ellipse" ? "active" : ""}`,
                    onClick: () => p("ellipse"),
                    type: "button",
                    title: "Ellipse Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(Rp, { size: 18 }),
                      /* @__PURE__ */ s.jsx("span", { children: "Ellipse" })
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${u === "lasso" ? "active" : ""}`,
                    onClick: () => p("lasso"),
                    type: "button",
                    title: "Lasso Tool",
                    children: [
                      /* @__PURE__ */ s.jsx($p, { size: 18 }),
                      /* @__PURE__ */ s.jsx("span", { children: "Lasso" })
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    style: {
                      width: 1,
                      backgroundColor: "var(--meld-border-color)",
                      margin: "0 4px"
                    }
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-mask-tool-btn",
                    onClick: B,
                    type: "button",
                    title: "Zoom Out",
                    "aria-label": "Zoom Out",
                    children: /* @__PURE__ */ s.jsx(lg, { size: 18 })
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: "meld-mask-tool-btn",
                    onClick: () => {
                      K(1), P({ x: 0, y: 0 });
                    },
                    type: "button",
                    title: "Reset Zoom",
                    "aria-label": "Reset Zoom",
                    style: {
                      minWidth: "48px",
                      justifyContent: "center",
                      fontSize: "11px"
                    },
                    children: [
                      Math.round(M * 100),
                      "%"
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-mask-tool-btn",
                    onClick: q,
                    type: "button",
                    title: "Zoom In",
                    "aria-label": "Zoom In",
                    children: /* @__PURE__ */ s.jsx(rg, { size: 18 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  ref: _,
                  className: "meld-mask-editor-canvas-container",
                  onMouseDown: sl,
                  onContextMenu: (T) => T.preventDefault(),
                  role: "presentation",
                  style: {
                    cursor: V ? "grabbing" : C ? "grab" : "crosshair"
                  },
                  children: /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: "meld-mask-editor-transform-layer",
                      style: {
                        transform: `translate(${F.x}px, ${F.y}px) scale(${M})`,
                        transformOrigin: "0 0",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        pointerEvents: "none"
                      },
                      children: [
                        /* @__PURE__ */ s.jsx(
                          "img",
                          {
                            ref: g,
                            src: ci(d),
                            alt: "To be masked",
                            className: "meld-mask-editor-image",
                            onDragStart: (T) => T.preventDefault(),
                            onLoad: te
                          }
                        ),
                        /* @__PURE__ */ s.jsx(
                          "canvas",
                          {
                            ref: w,
                            className: "meld-mask-editor-canvas",
                            onDragStart: (T) => T.preventDefault()
                          }
                        )
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-mask-editor-footer", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-mask-editor-hint", children: "Select a tool and drag on the image to create mask areas (Cmd/Ctrl+Z to undo)" }),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-mask-editor-actions", children: [
                  t === "apply" ? /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--inject",
                      onClick: Os,
                      disabled: !J || U,
                      type: "button",
                      children: [
                        U ? /* @__PURE__ */ s.jsx(Sc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(si, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Send" })
                      ]
                    }
                  ) : /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--run",
                      onClick: il,
                      disabled: !J || U,
                      type: "button",
                      children: [
                        U ? /* @__PURE__ */ s.jsx(Sc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(Yr, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: t === "run_sequence" && n ? n.currentIndex === n.totalCount - 1 ? "Queue (Last)" : `Queue (${n.currentIndex + 1}/${n.totalCount})` : "Queue" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--undo",
                      onClick: mn,
                      disabled: ve.length <= 1 || U,
                      type: "button",
                      title: "Undo last area",
                      children: [
                        /* @__PURE__ */ s.jsx(eg, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Undo" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--cancel",
                      onClick: al,
                      disabled: !J || U,
                      type: "button",
                      title: "Clear all areas",
                      children: [
                        /* @__PURE__ */ s.jsx(xe, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Clear" })
                      ]
                    }
                  )
                ] })
              ] })
            ] })
          ]
        }
      )
    }
  ) : null;
}, gf = (e) => {
  const t = /(?:[^\s"']+|"[^"]*"|'[^']*')+/g;
  return e.trim().match(t) || [];
}, Il = (e) => e.replace(/^["']|["']$/g, ""), ey = (e) => e.trim() ? gf(e).every((n) => !!(n === "next" || n === "prev" || n === "delete" || n.startsWith("tag:") && n.length > 4 || n.startsWith("-tag:") && n.length > 5 || n.startsWith("tag-toggle:") && n.length > 11 || n.startsWith("lt:") && n.length > 3)) : !0, ty = (e, t) => {
  const n = gf(e), r = {
    addTags: [],
    removeTags: [],
    toggleTags: [],
    moveNext: !1,
    movePrev: !1,
    isDeleted: !1,
    sendToLtSlot: null
  }, l = (t == null ? void 0 : t.tags) || [];
  for (const a of n)
    if (a.startsWith("tag:")) {
      const o = Il(a.substring(4));
      o && !r.addTags.includes(o) && r.addTags.push(o);
    } else if (a.startsWith("-tag:")) {
      const o = Il(a.substring(5));
      o && !r.removeTags.includes(o) && r.removeTags.push(o);
    } else if (a.startsWith("tag-toggle:")) {
      const o = Il(a.substring(11));
      o && (t ? l.includes(o) ? r.removeTags.includes(o) || r.removeTags.push(o) : r.addTags.includes(o) || r.addTags.push(o) : r.toggleTags.includes(o) || r.toggleTags.push(o));
    } else if (a === "next")
      r.moveNext = !0;
    else if (a === "prev")
      r.movePrev = !0;
    else if (a === "delete")
      r.isDeleted = !0;
    else if (a.startsWith("lt:")) {
      const o = Il(a.substring(3));
      o && (r.sendToLtSlot = o);
    }
  return r;
}, ny = () => {
  const { state: e, dispatch: t, updateSetting: n } = _e(), [r, l] = f.useState("Gallery"), [a, o] = f.useState({
    ...e.settings
  }), [i, c] = f.useState(
    {}
  ), [d, m] = f.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [v, w] = f.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [_, g] = f.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [x, S] = f.useState(e.settings["viewer.thumbnail_window_size"].toString()), [h, u] = f.useState(e.settings["gallery.trash_retention_days"].toString()), [p, y] = f.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [j, k] = f.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [b, I] = f.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [O, R] = f.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    D,
    U
  ] = f.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    Z,
    M
  ] = f.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), [K, F] = f.useState(
    e.settings["sidebar.thumbnail_size"].toString()
  );
  return {
    activeTab: r,
    setActiveTab: l,
    localSettings: a,
    setLocalSettings: o,
    shortcutErrors: i,
    setShortcutErrors: c,
    handleClose: async () => {
      const q = Object.keys(a).filter(
        (B) => a[B] !== e.settings[B] && !i[B]
      );
      if (q.length > 0)
        for (const B of q)
          await n(B, a[B]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (q, B) => {
      o((ae) => ({
        ...ae,
        [q]: !B
      }));
    },
    handleNumberChange: (q, B, ae, ve) => {
      q === "gallery.initial_load_count" ? m(B) : q === "gallery.max_load_count" ? w(B) : q === "gallery.lineage_max_depth" ? g(B) : q === "viewer.thumbnail_window_size" ? S(B) : q === "gallery.trash_retention_days" ? u(B) : q === "gallery.auto_link_phash_threshold" ? y(B) : q === "gallery.suggest_phash_threshold" ? k(B) : q === "viewer.details.max_positive_prompt_lines" ? I(B) : q === "viewer.details.max_negative_prompt_lines" ? R(B) : q === "fullscreen.details.max_positive_prompt_lines" ? U(B) : q === "fullscreen.details.max_negative_prompt_lines" ? M(B) : q === "sidebar.thumbnail_size" && F(B);
      const ee = Number.parseInt(B, 10);
      if (!Number.isNaN(ee)) {
        let pe = ee;
        ae !== void 0 && pe < ae && (pe = ae), ve !== void 0 && pe > ve && (pe = ve), o((te) => ({
          ...te,
          [q]: pe
        }));
      }
    },
    handleNumberBlur: (q) => {
      q.key === "gallery.initial_load_count" ? m(
        a["gallery.initial_load_count"].toString()
      ) : q.key === "gallery.max_load_count" ? w(a["gallery.max_load_count"].toString()) : q.key === "gallery.lineage_max_depth" ? g(
        a["gallery.lineage_max_depth"].toString()
      ) : q.key === "viewer.thumbnail_window_size" ? S(
        a["viewer.thumbnail_window_size"].toString()
      ) : q.key === "gallery.trash_retention_days" ? u(
        a["gallery.trash_retention_days"].toString()
      ) : q.key === "gallery.auto_link_phash_threshold" ? y(
        a["gallery.auto_link_phash_threshold"].toString()
      ) : q.key === "gallery.suggest_phash_threshold" ? k(
        a["gallery.suggest_phash_threshold"].toString()
      ) : q.key === "viewer.details.max_positive_prompt_lines" ? I(
        a["viewer.details.max_positive_prompt_lines"].toString()
      ) : q.key === "viewer.details.max_negative_prompt_lines" ? R(
        a["viewer.details.max_negative_prompt_lines"].toString()
      ) : q.key === "fullscreen.details.max_positive_prompt_lines" ? U(
        a["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : q.key === "fullscreen.details.max_negative_prompt_lines" ? M(
        a["fullscreen.details.max_negative_prompt_lines"].toString()
      ) : q.key === "sidebar.thumbnail_size" && F(a["sidebar.thumbnail_size"].toString());
    },
    handleResetShortcuts: () => {
      o((q) => ({
        ...q,
        "viewer.shortcut.1": "tag:keep next",
        "viewer.shortcut.2": "tag:best next",
        "viewer.shortcut.3": "tag:fix-needed next",
        "viewer.shortcut.4": "",
        "viewer.shortcut.5": "",
        "viewer.shortcut.6": "",
        "viewer.shortcut.7": "",
        "viewer.shortcut.8": "",
        "viewer.shortcut.9": "",
        "viewer.shortcut.0": ""
      })), c({});
    },
    handleViewTrash: () => {
      t({ type: "SET_VIEW_SCOPE", payload: "trash" }), t({ type: "CLOSE_MODAL" });
    },
    handleClearThumbnailCache: () => {
      t({
        type: "OPEN_CONFIRM_MODAL",
        payload: {
          message: "Are you sure you want to delete all cached thumbnails?",
          onConfirm: async () => {
            try {
              await Cg(), t({
                type: "SHOW_TOAST",
                payload: "Thumbnail cache cleared"
              });
            } catch (q) {
              console.error("Failed to clear thumbnail cache:", q), t({
                type: "SET_ERROR",
                payload: "Failed to clear thumbnail cache"
              });
            }
          }
        }
      });
    },
    validateShortcut: (q) => ey(q),
    // Input states
    initialLoadCountInput: d,
    maxLoadCountInput: v,
    lineageMaxDepthInput: _,
    thumbnailWindowSizeInput: x,
    trashRetentionDaysInput: h,
    autoLinkPhashThresholdInput: p,
    suggestPhashThresholdInput: j,
    maxPositivePromptLinesInput: b,
    maxNegativePromptLinesInput: O,
    fullscreenMaxPositivePromptLinesInput: D,
    fullscreenMaxNegativePromptLinesInput: Z,
    thumbnailSizeInput: K
  };
}, X = ({
  label: e,
  description: t,
  children: n
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", children: e }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: t })
  ] }),
  /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__control", children: n })
] }), ry = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: l,
  maxPositivePromptLinesInput: a,
  maxNegativePromptLinesInput: o
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Navigation & Display" }),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show Tool Icons",
        description: "Display navigation and close icons in fullscreen mode.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["fullscreen.show_icons"],
              onChange: () => n(
                "fullscreen.show_icons",
                e["fullscreen.show_icons"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Delete Mode",
        description: "Choose how images are deleted in fullscreen mode.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.delete_mode"],
            onChange: (i) => t((c) => ({
              ...c,
              "fullscreen.delete_mode": i.target.value
            })),
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "confirm", children: "Confirmed" }),
              /* @__PURE__ */ s.jsx("option", { value: "target_only", children: "Unconfirmed (Target Only)" }),
              /* @__PURE__ */ s.jsx("option", { value: "lineage", children: "Unconfirmed (Include Lineage)" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Loop Navigation",
        description: "Loop to the beginning/end when navigating in fullscreen.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["fullscreen.loop"],
              onChange: () => n(
                "fullscreen.loop",
                e["fullscreen.loop"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Small Image Display",
        description: "Choose how to display images smaller than the screen in fullscreen.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.small_image_mode"],
            onChange: (i) => t((c) => ({
              ...c,
              "fullscreen.small_image_mode": i.target.value
            })),
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "original", children: "Original Size" }),
              /* @__PURE__ */ s.jsx("option", { value: "fit", children: "Fit to Screen" })
            ]
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Details Panel" }),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show Details by Default",
        description: "Show the image details panel automatically when entering fullscreen.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["fullscreen.show_details_by_default"],
              onChange: () => n(
                "fullscreen.show_details_by_default",
                e["fullscreen.show_details_by_default"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.details.show_filename"],
            onChange: (i) => t((c) => ({
              ...c,
              "fullscreen.details.show_filename": i.target.value
            })),
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "filename", children: "Filename" }),
              /* @__PURE__ */ s.jsx("option", { value: "filepath", children: "Filepath" }),
              /* @__PURE__ */ s.jsx("option", { value: "none", children: "None" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show Dimensions",
        description: "Display dimensions in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["fullscreen.details.show_dimensions"],
              onChange: () => n(
                "fullscreen.details.show_dimensions",
                e["fullscreen.details.show_dimensions"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show Created At",
        description: "Display generation date/time in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["fullscreen.details.show_created_at"],
              onChange: () => n(
                "fullscreen.details.show_created_at",
                e["fullscreen.details.show_created_at"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show Source Info",
        description: "Display source image information in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["fullscreen.details.show_source"],
              onChange: () => n(
                "fullscreen.details.show_source",
                e["fullscreen.details.show_source"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show Model",
        description: "Display model name in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["fullscreen.details.show_model_name"],
              onChange: () => n(
                "fullscreen.details.show_model_name",
                e["fullscreen.details.show_model_name"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show Positive",
        description: "Display positive prompt in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["fullscreen.details.show_positive_prompt"],
              onChange: () => n(
                "fullscreen.details.show_positive_prompt",
                e["fullscreen.details.show_positive_prompt"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Max Positive Prompt Lines",
        description: "Maximum number of lines to display for the positive prompt in fullscreen.",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: a,
            min: 1,
            max: 100,
            onChange: (i) => r(
              "fullscreen.details.max_positive_prompt_lines",
              i.target.value,
              1,
              100
            ),
            onBlur: () => l({
              key: "fullscreen.details.max_positive_prompt_lines"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show Negative",
        description: "Display negative prompt in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["fullscreen.details.show_negative_prompt"],
              onChange: () => n(
                "fullscreen.details.show_negative_prompt",
                e["fullscreen.details.show_negative_prompt"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show User Notes",
        description: "Display user notes in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.details.show_user_notes"],
            onChange: (i) => t((c) => ({
              ...c,
              "fullscreen.details.show_user_notes": i.target.value
            })),
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "always", children: "Always show" }),
              /* @__PURE__ */ s.jsx("option", { value: "if_present", children: "Show only when present" }),
              /* @__PURE__ */ s.jsx("option", { value: "hidden", children: "Always hide" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Max Negative Prompt Lines",
        description: "Maximum number of lines to display for the negative prompt in fullscreen.",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: o,
            min: 1,
            max: 100,
            onChange: (i) => r(
              "fullscreen.details.max_negative_prompt_lines",
              i.target.value,
              1,
              100
            ),
            onBlur: () => l({
              key: "fullscreen.details.max_negative_prompt_lines"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show Tags",
        description: "Display tags in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["fullscreen.details.show_tags"],
              onChange: () => n(
                "fullscreen.details.show_tags",
                e["fullscreen.details.show_tags"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    )
  ] })
] });
function Tt({
  size: e = 24,
  color: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ s.jsx(
    "svg",
    {
      ...r,
      width: e,
      height: e,
      viewBox: "2 2 20 20",
      fill: "none",
      stroke: t ?? "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      children: n
    }
  );
}
function yf() {
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx(
      "path",
      {
        d: "M18 16.6v2.8",
        stroke: "var(--meld-icon-halo, transparent)",
        strokeWidth: 4
      }
    ),
    /* @__PURE__ */ s.jsx(
      "path",
      {
        d: "M16.6 18h2.8",
        stroke: "var(--meld-icon-halo, transparent)",
        strokeWidth: 4
      }
    ),
    /* @__PURE__ */ s.jsx("path", { d: "M18 16.6v2.8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16.6 18h2.8" })
  ] });
}
function vf(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h12" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14 8l4 4-4 4" })
  ] });
}
function wf(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M4.5 5.5h7l2 2h6v11a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 15h3" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 12l3 0" }),
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 10.5l3 1.5-3 1.5" })
  ] });
}
function xf(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16 8l4 4-4 4" })
  ] });
}
function _f(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx(yf, {})
  ] });
}
function kf(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 9l3 3-3 3" })
  ] });
}
function Sf(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 9l3 3-3 3" }),
    /* @__PURE__ */ s.jsx(yf, {})
  ] });
}
function jf(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "6", width: "12.5", height: "10.5", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M7.5 13l2-2 2 2 2.5-3 2.5 3" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 17.5l5-5" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16.5 19.5l3-3" })
  ] });
}
function bf(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M20 12l-8 8-9-9v-5a2 2 0 0 1 2-2h5z" }),
    /* @__PURE__ */ s.jsx("circle", { cx: "7.5", cy: "8.5", r: "1" })
  ] });
}
function Ef(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 4.5h-8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9l-3-4z" }),
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 4.5v4h4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 11h6" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 15h6" })
  ] });
}
function Cf(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M7 7h10" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 7v-2h6v2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 7l1 12h6l1-12" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 13.5a3.5 3.5 0 1 1-1.2-2.6" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 9.5v3h-3" })
  ] });
}
const Nf = [
  { id: "", label: "None", icon: null },
  {
    id: "add_unified_loader",
    label: "Add Unified Loader",
    icon: vf
  },
  {
    id: "send_to_workflow",
    label: "Send to Workflow",
    icon: kf
  },
  {
    id: "send_to_workflow_mask",
    label: "Send to Workflow (Mask)",
    icon: Sf
  },
  { id: "queue_workflow", label: "Queue Workflow", icon: xf },
  {
    id: "queue_workflow_mask",
    label: "Queue Workflow (Mask)",
    icon: _f
  },
  {
    id: "restore_full_workflow",
    label: "Restore Full Workflow",
    icon: wf
  },
  { id: "edit_tags", label: "Edit Tags", icon: bf },
  { id: "edit_notes", label: "Edit Notes", icon: Ef },
  {
    id: "edit_source_image",
    label: "Edit Source Image",
    icon: jf
  },
  {
    id: "restore_image",
    label: "Restore Image (Trash)",
    icon: Cf
  },
  { id: "delete_or_trash", label: "Delete / Trash", icon: $t }
], ly = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: l,
  thumbnailSizeInput: a,
  initialLoadCountInput: o,
  maxLoadCountInput: i
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Card Appearance" }),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Thumbnail Size",
        description: "Size of the image thumbnails in the sidebar (50-500px).",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: a,
            min: 50,
            max: 500,
            onChange: (c) => r(
              "sidebar.thumbnail_size",
              c.target.value,
              50,
              500
            ),
            onBlur: () => l({ key: "sidebar.thumbnail_size" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path on the card.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["sidebar.show_filename"],
            onChange: (c) => t((d) => ({
              ...d,
              "sidebar.show_filename": c.target.value
            })),
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "filename", children: "Filename" }),
              /* @__PURE__ */ s.jsx("option", { value: "filepath", children: "Filepath" }),
              /* @__PURE__ */ s.jsx("option", { value: "none", children: "None" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show Dimensions",
        description: "Display the image dimensions (width x height) on the card.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["sidebar.show_dimensions"],
              onChange: () => n(
                "sidebar.show_dimensions",
                e["sidebar.show_dimensions"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show Created At",
        description: "Display the image creation date and time on the card.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["sidebar.show_created_at"],
              onChange: () => n(
                "sidebar.show_created_at",
                e["sidebar.show_created_at"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show Source Images",
        description: "Display images that have been used as a basis for other images (sources). (Note: This setting is ignored during searches)",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["gallery.show_parent_images"],
              onChange: () => n(
                "gallery.show_parent_images",
                e["gallery.show_parent_images"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show Source Info",
        description: "Display source image information and lineage link on image cards.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["gallery.show_parent_image"],
              onChange: () => n(
                "gallery.show_parent_image",
                e["gallery.show_parent_image"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show Model",
        description: "Display the model name on the card.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["sidebar.show_model_name"],
              onChange: () => n(
                "sidebar.show_model_name",
                e["sidebar.show_model_name"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show Positive",
        description: "Display the positive prompt on the card.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["sidebar.show_positive_prompt"],
              onChange: () => n(
                "sidebar.show_positive_prompt",
                e["sidebar.show_positive_prompt"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show Negative",
        description: "Display the negative prompt on the card.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["sidebar.show_negative_prompt"],
              onChange: () => n(
                "sidebar.show_negative_prompt",
                e["sidebar.show_negative_prompt"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show User Notes",
        description: "Display user notes on the card.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["sidebar.show_user_notes"],
            onChange: (c) => t((d) => ({
              ...d,
              "sidebar.show_user_notes": c.target.value
            })),
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "always", children: "Always show" }),
              /* @__PURE__ */ s.jsx("option", { value: "if_present", children: "Show only when present" }),
              /* @__PURE__ */ s.jsx("option", { value: "hidden", children: "Always hide" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(X, { label: "Show Tags", description: "Display tags on the card.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
      /* @__PURE__ */ s.jsx(
        "input",
        {
          type: "checkbox",
          checked: e["sidebar.show_tags"],
          onChange: () => n(
            "sidebar.show_tags",
            e["sidebar.show_tags"]
          )
        }
      ),
      /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
    ] }) })
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Search Behavior" }),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show Quick Suggestions",
        description: "Show suggested keywords when the search field is empty.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["search.quick_suggestions"],
              onChange: () => n(
                "search.quick_suggestions",
                e["search.quick_suggestions"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show Input Suggestions",
        description: "Show suggestions when typing search prefixes (e.g. pos:).",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["search.input_suggest"],
              onChange: () => n(
                "search.input_suggest",
                e["search.input_suggest"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    )
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "List Behavior" }),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Initial Load Count",
        description: "Number of images to load and display immediately (10-1000).",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: o,
            min: 10,
            max: 1e3,
            onChange: (c) => r(
              "gallery.initial_load_count",
              c.target.value,
              10,
              1e3
            ),
            onBlur: () => l({ key: "gallery.initial_load_count" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Maximum Load Count",
        description: "Maximum number of images to load in the background (10-1000000).",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: i,
            min: 10,
            max: 1e6,
            onChange: (c) => r(
              "gallery.max_load_count",
              c.target.value,
              10,
              1e6
            ),
            onBlur: () => l({ key: "gallery.max_load_count" })
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Quick Shortcuts (Card)" }),
    [1, 2, 3].map((c) => /* @__PURE__ */ s.jsx(
      X,
      {
        label: `Quick Shortcut Slot ${c}`,
        description: `Choose an action for shortcut slot ${c}.`,
        children: /* @__PURE__ */ s.jsx(
          "select",
          {
            className: "meld-select",
            value: e[`gallery.quick_shortcut.${c}`],
            onChange: (d) => t((m) => ({
              ...m,
              [`gallery.quick_shortcut.${c}`]: d.target.value
            })),
            children: Nf.map((d) => /* @__PURE__ */ s.jsx("option", { value: d.id, children: d.label }, d.id))
          }
        )
      },
      c
    ))
  ] })
] }), sy = () => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list meld-information-tab", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "ComfyUI Meld" }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
      /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", children: "Version" }),
      /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: "0.4.0" })
    ] }) })
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Author & Links" }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
      /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", children: "Author" }),
      /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: "HappyOnigiri" })
    ] }) }),
    /* @__PURE__ */ s.jsx(
      "a",
      {
        href: "https://github.com/HappyOnigiri/ComfyUI-Meld",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "meld-settings-item meld-settings-item--link",
        style: { textDecoration: "none" },
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-settings-item__label",
              style: { color: "var(--meld-accent-color)" },
              children: "GitHub Repository"
            }
          ),
          /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: "Star the project or fork it" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      "a",
      {
        href: "https://github.com/HappyOnigiri/ComfyUI-Meld/issues/new/choose",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "meld-settings-item meld-settings-item--link",
        style: { textDecoration: "none" },
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-settings-item__label",
              style: { color: "var(--meld-accent-color)" },
              children: "Bug Tracker"
            }
          ),
          /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: "Report issues or suggest features" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      "a",
      {
        href: "https://x.com/H_OnigiriWorks",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "meld-settings-item meld-settings-item--link",
        style: { textDecoration: "none" },
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-settings-item__label",
              style: { color: "var(--meld-accent-color)" },
              children: "X (Twitter)"
            }
          ),
          /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: "Follow for updates and news" })
        ] })
      }
    )
  ] }),
  /* @__PURE__ */ s.jsxs(
    "div",
    {
      style: {
        marginTop: "40px",
        fontSize: "11px",
        color: "var(--meld-text-secondary)",
        textAlign: "center"
      },
      children: [
        "© 2024-",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " HappyOnigiri"
      ]
    }
  )
] }), ay = ({
  localSettings: e,
  setLocalSettings: t,
  shortcutErrors: n,
  setShortcutErrors: r,
  validateShortcut: l,
  handleToggle: a,
  handleResetShortcuts: o
}) => {
  const i = [
    "viewer.shortcut.1",
    "viewer.shortcut.2",
    "viewer.shortcut.3",
    "viewer.shortcut.4",
    "viewer.shortcut.5",
    "viewer.shortcut.6",
    "viewer.shortcut.7",
    "viewer.shortcut.8",
    "viewer.shortcut.9",
    "viewer.shortcut.0"
  ];
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-help", children: [
      /* @__PURE__ */ s.jsx("p", { children: "These shortcuts are available in both View and Full Screen modes." }),
      /* @__PURE__ */ s.jsxs("p", { children: [
        "You can combine multiple commands with spaces.",
        /* @__PURE__ */ s.jsx("br", {}),
        "Example: ",
        /* @__PURE__ */ s.jsx("code", { children: "tag:favorite next" }),
        " (Add tag and move to next)",
        /* @__PURE__ */ s.jsx("br", {}),
        "Use quotes for names with spaces. Example: ",
        /* @__PURE__ */ s.jsx("code", { children: 'lt:"My Best"' })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-help__commands", children: [
        /* @__PURE__ */ s.jsx("strong", { children: "Available commands:" }),
        /* @__PURE__ */ s.jsxs("ul", { children: [
          /* @__PURE__ */ s.jsxs("li", { children: [
            /* @__PURE__ */ s.jsx("code", { children: "tag:NAME" }),
            " - Add a tag"
          ] }),
          /* @__PURE__ */ s.jsxs("li", { children: [
            /* @__PURE__ */ s.jsx("code", { children: "-tag:NAME" }),
            " - Remove a tag"
          ] }),
          /* @__PURE__ */ s.jsxs("li", { children: [
            /* @__PURE__ */ s.jsx("code", { children: "tag-toggle:NAME" }),
            " - Toggle a tag"
          ] }),
          /* @__PURE__ */ s.jsxs("li", { children: [
            /* @__PURE__ */ s.jsx("code", { children: "lt:SLOT_ID" }),
            " - Send to Light Table (Example:",
            " ",
            /* @__PURE__ */ s.jsx("code", { children: "lt:keep" }),
            ", ",
            /* @__PURE__ */ s.jsx("code", { children: "lt:refine" }),
            ",",
            " ",
            /* @__PURE__ */ s.jsx("code", { children: "lt:trash" }),
            ")"
          ] }),
          /* @__PURE__ */ s.jsxs("li", { children: [
            /* @__PURE__ */ s.jsx("code", { children: "next" }),
            " / ",
            /* @__PURE__ */ s.jsx("code", { children: "prev" }),
            " - Navigate images"
          ] }),
          /* @__PURE__ */ s.jsxs("li", { children: [
            /* @__PURE__ */ s.jsx("code", { children: "delete" }),
            " - Delete image immediately (No confirm)"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
      i.map((c, d) => /* @__PURE__ */ s.jsx(
        X,
        {
          label: `Shortcut ${d === 9 ? 0 : d + 1} (Key: ${d === 9 ? 0 : d + 1})`,
          description: `Command to execute when pressing '${d === 9 ? 0 : d + 1}' in View/Full Screen mode.`,
          children: /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "text",
              className: `meld-text-input ${n[c] ? "meld-text-input--error" : ""}`,
              value: e[c] || "",
              onChange: (m) => {
                t((v) => ({
                  ...v,
                  [c]: m.target.value
                }));
              },
              onBlur: () => {
                const m = l(
                  e[c] || ""
                );
                r((v) => ({
                  ...v,
                  [c]: !m
                }));
              }
            }
          )
        },
        c
      )),
      /* @__PURE__ */ s.jsx(
        X,
        {
          label: "Show Cheat Sheet",
          description: "Display shortcut key guide in View/Full Screen mode.",
          children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "checkbox",
                checked: !!e["viewer.shortcut.show_cheat_sheet"],
                onChange: () => a(
                  "viewer.shortcut.show_cheat_sheet",
                  !!e["viewer.shortcut.show_cheat_sheet"]
                )
              }
            ),
            /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-extra", children: /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Reset Shortcuts",
        description: "Restore all shortcuts to their default values.",
        children: /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            className: "meld-button meld-button--secondary",
            onClick: o,
            children: "Reset to Defaults"
          }
        )
      }
    ) })
  ] });
}, oy = ({
  localSettings: e,
  handleNumberChange: t,
  handleNumberBlur: n,
  handleToggle: r,
  setLocalSettings: l,
  handleViewTrash: a,
  handleClearThumbnailCache: o,
  lineageMaxDepthInput: i,
  trashRetentionDaysInput: c,
  autoLinkPhashThresholdInput: d,
  suggestPhashThresholdInput: m
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Image Matching" }),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Source Matching Strategy",
        description: "Algorithm used to identify the source image.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["gallery.matching_strategy"],
            onChange: (v) => l((w) => ({
              ...w,
              "gallery.matching_strategy": v.target.value
            })),
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "phash_created", children: "pHash & Created Time" }),
              /* @__PURE__ */ s.jsx("option", { value: "filename_phash", children: "Filename -> pHash" }),
              /* @__PURE__ */ s.jsx("option", { value: "phash_only", children: "pHash Only" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Auto Linking Threshold (%)",
        description: "Minimum similarity percentage for automatic parent linking during creation or scan (0-100). Default: 92%. Should be strict to avoid false links.",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: d,
            min: 0,
            max: 100,
            onChange: (v) => t(
              "gallery.auto_link_phash_threshold",
              v.target.value,
              0,
              100
            ),
            onBlur: () => n({ key: "gallery.auto_link_phash_threshold" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Source Suggestion Threshold (%)",
        description: "Minimum similarity percentage for showing candidates in manual 'Add Source' dialog (0-100). Default: 82%. Permissive enough to find ancestors.",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: m,
            min: 0,
            max: 100,
            onChange: (v) => t(
              "gallery.suggest_phash_threshold",
              v.target.value,
              0,
              100
            ),
            onBlur: () => n({ key: "gallery.suggest_phash_threshold" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Inherit Tags from Source",
        description: "Automatically copy tags from the source image when a new image is registered or saved.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["gallery.inherit_tags"],
              onChange: () => r(
                "gallery.inherit_tags",
                e["gallery.inherit_tags"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    )
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Lineage" }),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Max Lineage Depth",
        description: "Maximum number of ancestor levels to fetch and display (1-10).",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: i,
            min: 1,
            max: 10,
            onChange: (v) => t(
              "gallery.lineage_max_depth",
              v.target.value,
              1,
              10
            ),
            onBlur: () => n({ key: "gallery.lineage_max_depth" })
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Thumbnail Cache" }),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Clear Thumbnail Cache",
        description: "Delete all cached thumbnails. They will be regenerated on next view.",
        children: /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            className: "meld-button meld-button--secondary",
            onClick: o,
            children: "Clear Thumbnail Cache"
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Trash" }),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Trash Retention Period (Days)",
        description: "How many days to keep deleted items in trash (0-365).",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: c,
            min: 0,
            max: 365,
            onChange: (v) => t(
              "gallery.trash_retention_days",
              v.target.value,
              0,
              365
            ),
            onBlur: () => n({ key: "gallery.trash_retention_days" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Trash Management",
        description: "View and manage items currently in the trash bin.",
        children: /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            className: "meld-button meld-button--secondary",
            onClick: a,
            children: "View Trash"
          }
        )
      }
    )
  ] })
] }), iy = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: l,
  thumbnailWindowSizeInput: a,
  maxPositivePromptLinesInput: o,
  maxNegativePromptLinesInput: i
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Navigation & Display" }),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Loop Navigation",
        description: "Loop to the beginning/end when navigating in the viewer.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.loop"],
              onChange: () => n("viewer.loop", e["viewer.loop"])
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Small Image Display",
        description: "Choose how to display images smaller than the viewer area.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.small_image_mode"],
            onChange: (c) => t((d) => ({
              ...d,
              "viewer.small_image_mode": c.target.value
            })),
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "original", children: "Original Size" }),
              /* @__PURE__ */ s.jsx("option", { value: "fit", children: "Fit to Screen" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show Tool Icons",
        description: "Display navigation and action icons in view mode.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.show_icons"],
              onChange: () => n(
                "viewer.show_icons",
                e["viewer.show_icons"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show Thumbnails",
        description: "Display the thumbnail strip at the bottom of the viewer. Disabling this can improve performance on slower systems.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.show_thumbnails"],
              onChange: () => n(
                "viewer.show_thumbnails",
                e["viewer.show_thumbnails"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Thumbnail Window Size",
        description: "Number of thumbnails to keep in the viewer (1-10000).",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: a,
            min: 1,
            max: 1e4,
            onChange: (c) => r(
              "viewer.thumbnail_window_size",
              c.target.value,
              1,
              1e4
            ),
            onBlur: () => l({ key: "viewer.thumbnail_window_size" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Delete Mode",
        description: "Choose how images are deleted in view mode.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.delete_mode"],
            onChange: (c) => t((d) => ({
              ...d,
              "viewer.delete_mode": c.target.value
            })),
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "confirm", children: "Confirmed" }),
              /* @__PURE__ */ s.jsx("option", { value: "target_only", children: "Unconfirmed (Target Only)" }),
              /* @__PURE__ */ s.jsx("option", { value: "lineage", children: "Unconfirmed (Include Lineage)" })
            ]
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Details Panel" }),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show Details by Default",
        description: "Show the image details panel automatically when opening the viewer.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.show_details_by_default"],
              onChange: () => n(
                "viewer.show_details_by_default",
                e["viewer.show_details_by_default"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path in the details.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.details.show_filename"],
            onChange: (c) => t((d) => ({
              ...d,
              "viewer.details.show_filename": c.target.value
            })),
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "filename", children: "Filename" }),
              /* @__PURE__ */ s.jsx("option", { value: "filepath", children: "Filepath" }),
              /* @__PURE__ */ s.jsx("option", { value: "none", children: "None" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show Dimensions",
        description: "Display dimensions in the details panel.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.details.show_dimensions"],
              onChange: () => n(
                "viewer.details.show_dimensions",
                e["viewer.details.show_dimensions"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show Created At",
        description: "Display generation date/time in the details panel.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.details.show_created_at"],
              onChange: () => n(
                "viewer.details.show_created_at",
                e["viewer.details.show_created_at"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show Source Info",
        description: "Display source image information in the details panel.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.details.show_source"],
              onChange: () => n(
                "viewer.details.show_source",
                e["viewer.details.show_source"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show Model",
        description: "Display model name in the details panel.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.details.show_model_name"],
              onChange: () => n(
                "viewer.details.show_model_name",
                e["viewer.details.show_model_name"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show Positive",
        description: "Display positive prompt in the details panel.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.details.show_positive_prompt"],
              onChange: () => n(
                "viewer.details.show_positive_prompt",
                e["viewer.details.show_positive_prompt"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Max Positive Prompt Lines",
        description: "Maximum number of lines to display for the positive prompt.",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: o,
            min: 1,
            max: 100,
            onChange: (c) => r(
              "viewer.details.max_positive_prompt_lines",
              c.target.value,
              1,
              100
            ),
            onBlur: () => l({
              key: "viewer.details.max_positive_prompt_lines"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show Negative",
        description: "Display negative prompt in the details panel.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.details.show_negative_prompt"],
              onChange: () => n(
                "viewer.details.show_negative_prompt",
                e["viewer.details.show_negative_prompt"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show User Notes",
        description: "Display user notes in the details panel.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.details.show_user_notes"],
            onChange: (c) => t((d) => ({
              ...d,
              "viewer.details.show_user_notes": c.target.value
            })),
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "always", children: "Always show" }),
              /* @__PURE__ */ s.jsx("option", { value: "if_present", children: "Show only when present" }),
              /* @__PURE__ */ s.jsx("option", { value: "hidden", children: "Always hide" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Max Negative Prompt Lines",
        description: "Maximum number of lines to display for the negative prompt.",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: i,
            min: 1,
            max: 100,
            onChange: (c) => r(
              "viewer.details.max_negative_prompt_lines",
              c.target.value,
              1,
              100
            ),
            onBlur: () => l({
              key: "viewer.details.max_negative_prompt_lines"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Show Tags",
        description: "Display tags in the details panel.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.details.show_tags"],
              onChange: () => n(
                "viewer.details.show_tags",
                e["viewer.details.show_tags"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    )
  ] })
] }), Mf = () => {
  const {
    activeTab: e,
    setActiveTab: t,
    localSettings: n,
    setLocalSettings: r,
    shortcutErrors: l,
    setShortcutErrors: a,
    handleClose: o,
    handleToggle: i,
    handleNumberChange: c,
    handleNumberBlur: d,
    handleResetShortcuts: m,
    handleViewTrash: v,
    handleClearThumbnailCache: w,
    validateShortcut: _,
    // Input states
    initialLoadCountInput: g,
    maxLoadCountInput: x,
    lineageMaxDepthInput: S,
    thumbnailWindowSizeInput: h,
    trashRetentionDaysInput: u,
    autoLinkPhashThresholdInput: p,
    suggestPhashThresholdInput: y,
    maxPositivePromptLinesInput: j,
    maxNegativePromptLinesInput: k,
    fullscreenMaxPositivePromptLinesInput: b,
    fullscreenMaxNegativePromptLinesInput: I,
    thumbnailSizeInput: O
  } = ny();
  et({ onEscape: o });
  const R = f.useRef(!1), D = (K) => {
    K.target === K.currentTarget && (R.current = !0);
  }, U = (K) => {
    K.target === K.currentTarget && R.current && o(), R.current = !1;
  }, Z = [
    { id: "Gallery", label: "Gallery" },
    { id: "View", label: "View" },
    { id: "Full Screen", label: "Full Screen" },
    { id: "Shortcuts", label: "Shortcuts" },
    { id: "System", label: "System" },
    { id: "Information", label: "Information" }
  ], M = () => {
    switch (e) {
      case "System":
        return /* @__PURE__ */ s.jsx(
          oy,
          {
            localSettings: n,
            handleNumberChange: c,
            handleNumberBlur: d,
            handleToggle: i,
            setLocalSettings: r,
            handleViewTrash: v,
            handleClearThumbnailCache: w,
            lineageMaxDepthInput: S,
            trashRetentionDaysInput: u,
            autoLinkPhashThresholdInput: p,
            suggestPhashThresholdInput: y
          }
        );
      case "Gallery":
        return /* @__PURE__ */ s.jsx(
          ly,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailSizeInput: O,
            initialLoadCountInput: g,
            maxLoadCountInput: x
          }
        );
      case "View":
        return /* @__PURE__ */ s.jsx(
          iy,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailWindowSizeInput: h,
            maxPositivePromptLinesInput: j,
            maxNegativePromptLinesInput: k
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ s.jsx(
          ry,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            maxPositivePromptLinesInput: b,
            maxNegativePromptLinesInput: I
          }
        );
      case "Shortcuts":
        return /* @__PURE__ */ s.jsx(
          ay,
          {
            localSettings: n,
            setLocalSettings: r,
            shortcutErrors: l,
            setShortcutErrors: a,
            validateShortcut: _,
            handleToggle: i,
            handleResetShortcuts: m
          }
        );
      case "Information":
        return /* @__PURE__ */ s.jsx(sy, {});
      default:
        return null;
    }
  };
  return ge.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: D,
        onMouseUp: U,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-settings-modal",
            onClick: (K) => K.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsx("h2", { children: "Settings" }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: o,
                    children: /* @__PURE__ */ s.jsx(xe, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-layout", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ s.jsx("div", { className: "meld-tabs", children: Z.map((K) => /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: `meld-tab ${e === K.id ? "active" : ""}`,
                    onClick: () => t(K.id),
                    children: K.label
                  },
                  K.id
                )) }) }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: M() })
              ] })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, _t = "none", If = ({
  imageIds: e,
  initialTags: t,
  onClose: n,
  onSuccess: r
}) => {
  const { dispatch: l, refreshImages: a } = _e(), [o, i] = f.useState([]), [c, d] = f.useState(t), [m, v] = f.useState(""), [w, _] = f.useState(!0), [g, x] = f.useState(!1), S = f.useRef(null), h = e.length > 1, u = f.useRef(!1), p = (D) => {
    D.target === D.currentTarget && (u.current = !0);
  }, y = (D) => {
    D.target === D.currentTarget && u.current && n(), u.current = !1;
  }, j = f.useCallback(async () => {
    _(!0);
    try {
      const D = await di();
      i(D);
    } catch (D) {
      console.error("Failed to fetch tags:", D);
    } finally {
      _(!1);
    }
  }, []);
  f.useEffect(() => {
    j();
  }, [j]), f.useEffect(() => {
    S.current && S.current.focus();
  }, []), et({ onEscape: n });
  const k = f.useMemo(() => o.filter(
    (D) => D.name.toLowerCase().includes(m.toLowerCase()) && !c.includes(D.name)
  ), [o, m, c]), b = (D) => {
    const U = D.trim();
    if (U.toLowerCase() === _t) {
      alert(
        `Tag name '${_t}' is reserved for search and cannot be used.`
      );
      return;
    }
    U && !c.includes(U) && (d([...c, U]), v(""));
  }, I = (D) => {
    d(c.filter((U) => U !== D));
  }, O = async () => {
    x(!0);
    try {
      if (h) {
        const D = c.filter((Z) => !t.includes(Z)), U = t.filter(
          (Z) => !c.includes(Z)
        );
        await ao(e, D, U);
      } else
        await fg(e[0], c);
      await a(), l({ type: "CLEAR_SELECTION" }), r == null || r(), n();
    } catch (D) {
      console.error("Failed to update tags:", D), alert("Failed to update tags.");
    } finally {
      x(!1);
    }
  }, R = (D) => {
    D.key === "Enter" && m.trim() && (D.preventDefault(), D.stopPropagation(), b(m.trim()));
  };
  return ge.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: p,
        onMouseUp: y,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (D) => D.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(dr, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: h ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(xe, { size: 20 }) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
            h && /* @__PURE__ */ s.jsx(
              "div",
              {
                style: {
                  fontSize: "0.85rem",
                  color: "var(--meld-text-secondary)",
                  marginBottom: "16px",
                  padding: "8px",
                  backgroundColor: "var(--meld-card-bg)",
                  borderRadius: "4px"
                },
                children: "Adding tags will apply them to all selected images. Removing tags will remove them only from images that currently have them."
              }
            ),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: h ? "Collective Tags" : "Selected Tags" }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: c.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : c.map((D) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                D,
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => I(D),
                    children: /* @__PURE__ */ s.jsx(xe, { size: 12 })
                  }
                )
              ] }, D)) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ s.jsx(Cn, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    ref: S,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: m,
                    onChange: (D) => v(D.target.value),
                    onKeyDown: R
                  }
                ),
                m.trim() && !c.includes(m.trim()) && /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => b(m),
                    children: [
                      /* @__PURE__ */ s.jsx(Ps, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: w ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : k.length === 0 ? m ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : k.map((D) => /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => b(D.name),
                  children: D.name
                },
                D.id
              )) })
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-footer", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-secondary",
                onClick: n,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-primary",
                onClick: O,
                disabled: g,
                children: g ? "Saving..." : "Save Changes"
              }
            )
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, Rs = (e, t) => {
  const n = f.useCallback(async (_) => {
    try {
      const g = await hg(_.id);
      return g.workflow ? (await window.app.loadGraphData(
        g.workflow
      ), re.log("Workflow restored successfully from Meld"), !0) : (alert("No workflow information is saved for this image."), !1);
    } catch (g) {
      return re.error("Error restoring workflow:", g), alert("Failed to restore workflow."), !1;
    }
  }, []), r = f.useCallback(async (_) => {
    try {
      const g = await pg(_.id), x = g.is_flux ? "MeldUnifiedFluxLoader" : "MeldUnifiedLoader", S = window.app, u = window.LiteGraph.createNode(x);
      if (!u)
        return console.error(`Node type ${x} not found.`), alert(
          `Node type ${x} not found. Please make sure the Meld Unified Loader node is installed.`
        ), !1;
      const p = g.is_flux ? {
        model_name: "model_name",
        clip_name1: "clip_name1",
        clip_name2: "clip_name2",
        clip_type: "clip_type",
        clip_device: "clip_device",
        positive: "positive",
        seed: "seed",
        steps: "steps",
        guidance: "guidance",
        sampler_name: "sampler_name",
        scheduler: "scheduler",
        width: "width",
        height: "height"
      } : {
        model_name: "model_name",
        positive: "positive",
        negative: "negative",
        seed: "seed",
        steps: "steps",
        cfg: "cfg",
        sampler_name: "sampler_name",
        scheduler: "scheduler",
        width: "width",
        height: "height"
      };
      if (u.widgets) {
        for (const [b, I] of Object.entries(p)) {
          const O = g[b];
          if (O != null && O !== "") {
            const R = u.widgets.find(
              (D) => D.name === I
            );
            R && (R.value = O);
          }
        }
        const k = u.widgets.find(
          (b) => b.name === "control_after_generate"
        );
        k && (k.value = "fixed");
      }
      const y = S.canvas.ds.offset, j = S.canvas.ds.scale;
      return u.pos = [(-y[0] + 400) / j, (-y[1] + 300) / j], S.graph.add(u), S.canvas.selectNode(u), S.canvas.centerOnNode(u), !0;
    } catch (g) {
      return console.error("Error adding Unified Loader:", g), alert("Failed to load settings."), !1;
    }
  }, []), l = f.useCallback(
    (_) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "tag_edit",
          imageIds: [_.id],
          tags: _.tags || []
        }
      });
    },
    [t]
  ), a = f.useCallback(
    (_) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "note_edit",
          imageId: _.id,
          notes: _.user_notes || ""
        }
      });
    },
    [t]
  ), o = f.useCallback(
    (_) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: _.id }
      });
    },
    [t]
  ), i = f.useCallback(
    (_) => {
      const g = window.app;
      if (!(g != null && g.graph))
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No active workflow graph found. Please open a workflow first."
          }
        }), !1;
      const x = (u) => {
        if (!u) return !1;
        const p = u.replace(/\s+/g, "").toLowerCase();
        return p === "meldimageloader" || p === "loadimage";
      }, S = g.graph._nodes.filter(
        (u) => x(u.type)
      );
      if (S.length === 0)
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
          }
        }), !1;
      if (S.length > 1)
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "node_selection",
            image: _,
            nodes: S.map(
              (u) => ({
                id: String(u.id),
                type: u.type,
                title: u.title
              })
            ),
            onSelect: (u) => {
              Zr(_, u);
            }
          }
        }), !0;
      const h = Zr(_);
      return h.ok ? !0 : (t({
        type: "OPEN_MODAL",
        payload: {
          type: "error",
          message: h.reason === "no_app_graph" ? "No active workflow graph found. Please open a workflow first." : "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
        }
      }), !1);
    },
    [t]
  ), c = f.useCallback(
    (_) => {
      const g = Array.isArray(_) ? _ : [_];
      t({
        type: "OPEN_MODAL",
        payload: { type: "workflow_selection", images: g }
      });
    },
    [t]
  ), d = f.useCallback(
    async (_, g = "run") => {
      var S;
      console.log("[Meld] handleRunWithMask called", _, g);
      const x = Array.isArray(_) ? _ : [_];
      if (g === "apply") {
        const h = window.app, u = ((S = h == null ? void 0 : h.graph) == null ? void 0 : S._nodes) || [];
        console.log(
          "[Meld] Current graph nodes:",
          u.map((j) => ({
            id: j.id,
            type: j.type
          }))
        );
        const p = u.some(
          (j) => j.type === "LoadImageMask"
        ), y = u.some(
          (j) => j.type === "MeldImageLoader" || j.type === "LoadImage" || j.type === "Load Image"
        );
        if (console.log("[Meld] Nodes found:", { hasMaskNode: p, hasLoaderNode: y }), !p || !y) {
          const j = [];
          y || j.push("'Meld Image Loader'"), p || j.push("'Load Image (as Mask)'"), t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: `Required nodes missing in current workflow: ${j.join(" and ")}. Please add them to use the Mask Tool.`
            }
          });
          return;
        }
        if (x.length > 1) {
          t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: "'Apply' mode without queueing only supports single image selection."
            }
          });
          return;
        }
        t({
          type: "OPEN_MODAL",
          payload: { type: "mask_editor", imageId: x[0].id, mode: g }
        });
        return;
      }
      try {
        if (!(await hf()).some(
          (p) => p.valid && p.mask_count >= 1
        )) {
          t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: "No workflows found with at least one 'Load Image (as Mask)' node. Please save a compatible workflow first."
            }
          });
          return;
        }
      } catch (h) {
        console.error("[Meld] Error checking workflows:", h);
      }
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "workflow_selection",
          images: x,
          isMaskSequence: !0
        }
      });
    },
    [t]
  ), m = f.useCallback(
    async (_, g) => {
      try {
        const x = _.id, h = (await ii([x])).restored_ids || [x];
        t({ type: "REMOVE_IMAGES", payload: h }), g == null || g();
      } catch (x) {
        t({
          type: "SET_ERROR",
          payload: x instanceof Error ? x.message : String(x)
        });
      }
    },
    [t]
  ), v = f.useCallback(
    (_) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "delete_confirm",
          imageIds: [_.id],
          hasLineage: !!(_.parent_id || _.has_children),
          isPermanent: e.viewScope === "trash"
        }
      });
    },
    [e.viewScope, t]
  ), w = f.useCallback(
    async (_, g) => {
      try {
        const x = await mg(
          _,
          g
        );
        t({ type: "UPDATE_IMAGE", payload: x });
      } catch (x) {
        t({
          type: "SET_ERROR",
          payload: x instanceof Error ? x.message : String(x)
        });
      }
    },
    [t]
  );
  return {
    handleRestoreWorkflow: n,
    handleAddUnifiedLoader: r,
    handleEditTags: l,
    handleEditSource: o,
    handleSendToWorkflow: i,
    handleRunWithWorkflow: c,
    handleRunWithMask: d,
    handleRestore: m,
    handleDelete: v,
    handleEditNotes: a,
    handleUpdateUserNotes: w
  };
}, Tf = ({
  imageId: e,
  initialNotes: t,
  onClose: n
}) => {
  const { state: r, dispatch: l } = _e(), { handleUpdateUserNotes: a } = Rs(r, l), [o, i] = f.useState(t), [c, d] = f.useState(!1), m = f.useRef(null), v = f.useRef(!1), w = (x) => {
    x.target === x.currentTarget && (v.current = !0);
  }, _ = (x) => {
    x.target === x.currentTarget && v.current && n(), v.current = !1;
  };
  f.useEffect(() => {
    m.current && m.current.focus();
  }, []);
  const g = f.useCallback(async () => {
    d(!0);
    try {
      await a(e, o), n();
    } catch (x) {
      console.error("Failed to update notes:", x), alert("Failed to update notes.");
    } finally {
      d(!1);
    }
  }, [a, e, o, n]);
  return f.useEffect(() => {
    const x = (S) => {
      S.key === "Enter" && (S.ctrlKey || S.metaKey) && S.target === m.current && (S.preventDefault(), S.stopPropagation(), S.stopImmediatePropagation(), g());
    };
    return window.addEventListener("keydown", x, { capture: !0 }), () => {
      window.removeEventListener("keydown", x, {
        capture: !0
      });
    };
  }, [g]), et({ onEscape: n }), ge.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: w,
        onMouseUp: _,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (x) => x.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(Xp, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: "Edit Notes" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(xe, { size: 20 }) })
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-note-edit-section", children: [
            /* @__PURE__ */ s.jsx(
              "textarea",
              {
                ref: m,
                className: "meld-image-card__notes-textarea",
                style: {
                  width: "100%",
                  minHeight: "200px",
                  backgroundColor: "var(--meld-input-bg)",
                  color: "var(--meld-input-text)",
                  border: "1px solid var(--meld-border-color)",
                  borderRadius: "4px",
                  padding: "8px",
                  fontSize: "0.9rem",
                  resize: "vertical"
                },
                placeholder: "Add notes...",
                value: o,
                onChange: (x) => i(x.target.value)
              }
            ),
            /* @__PURE__ */ s.jsx(
              "div",
              {
                style: {
                  fontSize: "0.8rem",
                  color: "var(--meld-text-secondary)",
                  marginTop: "8px",
                  textAlign: "right"
                },
                children: "Press Ctrl+Enter or Cmd+Enter to save"
              }
            )
          ] }) }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-footer", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-secondary",
                onClick: n,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-primary",
                onClick: g,
                disabled: c,
                children: c ? "Saving..." : "Save Notes"
              }
            )
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, Lf = ({
  image: e,
  nodes: t,
  onSelect: n
}) => {
  const { dispatch: r } = _e(), l = f.useCallback(() => {
    r({ type: "CLOSE_MODAL" });
  }, [r]);
  et({ onEscape: l });
  const a = f.useRef(!1), o = f.useCallback((c) => {
    c.target === c.currentTarget && (a.current = !0);
  }, []), i = f.useCallback(
    (c) => {
      c.target === c.currentTarget && a.current && l(), a.current = !1;
    },
    [l]
  );
  return ge.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: o,
        onMouseUp: i,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--small",
            onClick: (c) => c.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsx("h2", { children: "Select Target Node" }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: l,
                    children: /* @__PURE__ */ s.jsx(xe, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
                /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    style: {
                      marginBottom: "15px",
                      fontSize: "14px",
                      color: "var(--meld-text-secondary)"
                    },
                    children: [
                      "Multiple loader nodes found in the current workflow. Select which one to use for ",
                      /* @__PURE__ */ s.jsx("strong", { children: e.filename }),
                      ":"
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker__list", children: t.map((c) => /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-workflow-node-item",
                    onClick: () => {
                      n(c.id), l();
                    },
                    children: [
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-node-item__info", children: [
                        /* @__PURE__ */ s.jsx("span", { className: "meld-workflow-node-item__title", children: c.title || c.type }),
                        /* @__PURE__ */ s.jsxs("span", { className: "meld-workflow-node-item__id", children: [
                          "#",
                          c.id
                        ] })
                      ] }),
                      /* @__PURE__ */ s.jsx(Yr, { size: 12 })
                    ]
                  },
                  c.id
                )) })
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-secondary",
                  onClick: l,
                  children: "Cancel"
                }
              ) })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, Df = ({
  images: e,
  onExecute: t,
  onSuccess: n,
  isMaskMode: r
}) => {
  var F;
  const { dispatch: l } = _e(), [a, o] = f.useState([]), [i, c] = f.useState(!0), [d, m] = f.useState(null), [v, w] = f.useState(!1), [_, g] = f.useState(null), [x, S] = f.useState({}), [h, u] = f.useState({}), [p, y] = f.useState(""), j = f.useRef(null), k = f.useMemo(() => a.map((P) => {
    let C = P.valid, L = P.reason;
    return r && P.mask_count === 0 && (C = !1, L = "No 'Load Image (as Mask)' node found."), { ...P, valid: C, reason: L };
  }).sort((P, C) => P.valid !== C.valid ? P.valid ? -1 : 1 : P.name.localeCompare(C.name)), [a, r]), b = f.useMemo(() => {
    if (!p.trim()) return k;
    const P = p.toLowerCase();
    return k.filter(
      (C) => C.name.toLowerCase().includes(P)
    );
  }, [k, p]), I = f.useCallback(async () => {
    try {
      c(!0);
      const P = await hf();
      o(P), m(null);
    } catch (P) {
      m(P instanceof Error ? P.message : String(P));
    } finally {
      c(!1);
    }
  }, []);
  f.useEffect(() => {
    I();
  }, [I]), f.useEffect(() => {
    !i && j.current && j.current.focus();
  }, [i]);
  const O = f.useCallback(() => {
    l({ type: "CLOSE_MODAL" });
  }, [l]);
  et({ onEscape: O });
  const R = f.useRef(!1), D = f.useCallback((P) => {
    P.target === P.currentTarget && (R.current = !0);
  }, []), U = f.useCallback(
    (P) => {
      P.target === P.currentTarget && R.current && O(), R.current = !1;
    },
    [O]
  ), Z = async (P, C) => {
    if (!v)
      try {
        w(!0);
        const L = await t(P, C);
        n == null || n(), L !== !1 && O();
      } catch (L) {
        m(L instanceof Error ? L.message : String(L)), w(!1);
      }
  }, M = async (P) => {
    if (!(x[P] || h[P]))
      try {
        u((E) => ({ ...E, [P]: !0 }));
        const C = await pf(P), L = [], V = (E) => {
          if (!E) return !1;
          const W = E.replace(/\s+/g, "").toLowerCase();
          return r ? W === "loadimagemask" : W === "meldimageloader" || W === "loadimage";
        };
        if (C.nodes && Array.isArray(C.nodes)) {
          console.log(
            "[Meld] Extracting nodes from UI format workflow",
            C.nodes.length
          );
          for (const E of C.nodes)
            V(E.type) && (console.log(
              "[Meld] Found target node (UI):",
              E.id,
              E.type,
              E.title
            ), L.push({
              id: String(E.id),
              type: E.type || "",
              title: E.title
            }));
        } else {
          console.log("[Meld] Extracting nodes from API format workflow");
          for (const E in C) {
            const W = C[E];
            W && typeof W == "object" && V(W.class_type) && (console.log(
              "[Meld] Found target node (API):",
              E,
              W.class_type
            ), L.push({
              id: E,
              type: W.class_type || ""
            }));
          }
        }
        L.length === 0 && console.warn(
          "[Meld] No loader nodes found in workflow JSON despite count > 0"
        ), S((E) => ({ ...E, [P]: L }));
      } catch (C) {
        console.error("Failed to fetch workflow nodes:", C);
      } finally {
        u((C) => ({ ...C, [P]: !1 }));
      }
  }, K = (P) => {
    if (!P.valid || v) return;
    if ((r ? P.mask_count : P.loader_count + P.load_image_count) <= 1) {
      Z(P.name);
      return;
    }
    _ === P.name ? g(null) : (g(P.name), M(P.name));
  };
  return ge.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: D,
        onMouseUp: U,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--large",
            onClick: (P) => P.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(oi, { size: 20, color: "var(--meld-accent-color)" }),
                  "Queue via Workflow"
                ] }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: O,
                    children: /* @__PURE__ */ s.jsx(xe, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", style: { minHeight: "300px" }, children: i ? /* @__PURE__ */ s.jsxs("div", { className: "meld-loading-container", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-loading-spinner" }),
                /* @__PURE__ */ s.jsx("span", { children: "Loading workflows..." })
              ] }) : d ? /* @__PURE__ */ s.jsxs("div", { className: "meld-error-container", children: [
                /* @__PURE__ */ s.jsx(ef, { size: 20 }),
                /* @__PURE__ */ s.jsx("span", { children: d })
              ] }) : a.length === 0 ? /* @__PURE__ */ s.jsx(
                "div",
                {
                  style: {
                    padding: "40px",
                    textAlign: "center",
                    color: "var(--meld-text-secondary)"
                  },
                  children: "No workflows found in ComfyUI/user/default/workflows"
                }
              ) : /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-list", children: [
                /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    style: {
                      marginBottom: "15px",
                      fontSize: "14px",
                      color: "var(--meld-text-secondary)"
                    },
                    children: [
                      "Select a workflow to process",
                      " ",
                      /* @__PURE__ */ s.jsx("strong", { children: e.length > 1 ? `${e.length} images` : (F = e[0]) == null ? void 0 : F.filename }),
                      ". Workflows must have at least one",
                      " ",
                      /* @__PURE__ */ s.jsx("strong", { children: "Meld Image Loader" }),
                      " or",
                      " ",
                      /* @__PURE__ */ s.jsx("strong", { children: "Load Image" }),
                      " node",
                      r && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                        " ",
                        "and one ",
                        /* @__PURE__ */ s.jsx("strong", { children: "Load Image (as Mask)" }),
                        " node"
                      ] }),
                      "."
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    className: "meld-tag-search-container",
                    style: { marginBottom: "12px" },
                    children: [
                      /* @__PURE__ */ s.jsx(Cn, { className: "meld-tag-search-icon", size: 16 }),
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          ref: j,
                          type: "text",
                          className: "meld-tag-search-input",
                          placeholder: "Search workflows...",
                          value: p,
                          onChange: (P) => y(P.target.value)
                        }
                      ),
                      p && /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-item__btn",
                          onClick: () => {
                            var P;
                            y(""), (P = j.current) == null || P.focus();
                          },
                          style: { padding: "4px" },
                          children: /* @__PURE__ */ s.jsx(xe, { size: 14 })
                        }
                      )
                    ]
                  }
                ),
                b.length === 0 ? /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    style: {
                      padding: "20px",
                      textAlign: "center",
                      color: "var(--meld-text-secondary)"
                    },
                    children: "No workflows match your search."
                  }
                ) : b.map((P) => {
                  const C = r ? P.mask_count : P.loader_count + P.load_image_count, L = _ === P.name, V = x[P.name] || [], E = h[P.name];
                  return /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item-container", children: [
                    /* @__PURE__ */ s.jsxs(
                      "div",
                      {
                        className: `meld-workflow-item ${P.valid ? "" : "meld-workflow-item--invalid"} ${L ? "meld-workflow-item--expanded" : ""}`,
                        onClick: () => K(P),
                        title: P.reason || "Click to select",
                        children: [
                          /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item__info", children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__name", children: P.name }),
                            !P.valid && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__reason", children: P.reason }),
                            P.valid && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__supports", children: C > 1 ? `Multiple loaders found (${C})` : r ? "Supports: Load Image (as Mask)" : `Supports: ${P.loader_count > 0 ? "Meld Loader" : "Load Image"}` })
                          ] }),
                          P.valid && C <= 1 && /* @__PURE__ */ s.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn-primary meld-btn-small",
                              disabled: v,
                              onClick: (W) => {
                                W.stopPropagation(), Z(P.name);
                              },
                              children: [
                                /* @__PURE__ */ s.jsx(Yr, { size: 14 }),
                                v ? "Queuing..." : "Queue"
                              ]
                            }
                          ),
                          P.valid && C > 1 && /* @__PURE__ */ s.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn-primary meld-btn-small",
                              disabled: v,
                              onClick: (W) => {
                                W.stopPropagation(), K(P);
                              },
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                              },
                              children: [
                                L ? "Close" : "Select Node",
                                /* @__PURE__ */ s.jsx(
                                  ai,
                                  {
                                    size: 14,
                                    style: {
                                      transform: L ? "rotate(90deg)" : "rotate(0deg)",
                                      transition: "transform 0.2s"
                                    }
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    ),
                    L && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker", children: E ? /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-node-picker__loading", children: [
                      /* @__PURE__ */ s.jsx("div", { className: "meld-loading-spinner meld-loading-spinner--small" }),
                      /* @__PURE__ */ s.jsx("span", { children: "Loading nodes..." })
                    ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                      /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker__label", children: "Select target loader node:" }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker__list", children: V.map((W) => /* @__PURE__ */ s.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-workflow-node-item",
                          disabled: v,
                          onClick: () => Z(P.name, W.id),
                          children: [
                            /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-node-item__info", children: [
                              /* @__PURE__ */ s.jsx("span", { className: "meld-workflow-node-item__title", children: W.title || W.type }),
                              /* @__PURE__ */ s.jsxs("span", { className: "meld-workflow-node-item__id", children: [
                                "#",
                                W.id
                              ] })
                            ] }),
                            /* @__PURE__ */ s.jsx(Yr, { size: 12 })
                          ]
                        },
                        W.id
                      )) })
                    ] }) })
                  ] }, P.name);
                })
              ] }) }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-secondary",
                  onClick: O,
                  disabled: v,
                  children: "Cancel"
                }
              ) })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, cy = ({
  message: e,
  onConfirm: t,
  onCancel: n
}) => {
  const r = f.useRef(null), l = f.useRef(null);
  return f.useEffect(() => {
    if (l.current = document.activeElement, r.current) {
      const o = r.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      o.length > 0 ? o[0].focus() : r.current.focus();
    }
    const a = (o) => {
      if (o.key === "Escape") {
        n();
        return;
      }
      if (o.key === "Tab") {
        if (!r.current) return;
        const i = r.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (i.length === 0) return;
        const c = i[0], d = i[i.length - 1];
        o.shiftKey ? document.activeElement === c && (d.focus(), o.preventDefault()) : document.activeElement === d && (c.focus(), o.preventDefault());
      }
    };
    return document.addEventListener("keydown", a), () => {
      document.removeEventListener("keydown", a), l.current && typeof l.current.focus == "function" && l.current.focus();
    };
  }, [n]), /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "meld-confirm-modal__overlay",
      onClick: n,
      onKeyDown: (a) => {
        a.key === "Enter" && n();
      },
      role: "presentation",
      children: /* @__PURE__ */ s.jsxs(
        "div",
        {
          ref: r,
          className: "meld-confirm-modal__dialog",
          onClick: (a) => a.stopPropagation(),
          onKeyDown: (a) => a.stopPropagation(),
          role: "alertdialog",
          "aria-modal": "true",
          "aria-label": e,
          tabIndex: -1,
          children: [
            /* @__PURE__ */ s.jsx("p", { className: "meld-confirm-modal__message", children: e }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-confirm-modal__actions", children: [
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-confirm-modal__btn meld-confirm-modal__btn--cancel",
                  onClick: n,
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-confirm-modal__btn meld-confirm-modal__btn--confirm",
                  onClick: t,
                  children: "OK"
                }
              )
            ] })
          ]
        }
      )
    }
  );
}, co = async (e, t) => {
  await dg(e, t), ie.getState().removeImages(e);
}, Pf = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: l, dispatch: a } = _e(), o = f.useRef(!0);
  f.useEffect(() => () => {
    o.current = !1;
  }, []);
  const i = f.useMemo(
    () => l.searchQuery.toLowerCase().includes("has_derivatives:yes") || l.searchQuery.toLowerCase().includes("has_derivatives:true") || l.searchQuery.toLowerCase().includes("has_derivatives:1"),
    [l.searchQuery]
  ), c = f.useMemo(
    () => l.searchQuery.trim() !== "",
    [l.searchQuery]
  ), d = f.useMemo(() => l.viewerMode === "lighttable" && l.viewerLightTableSlotId ? (ie.getState().buckets[l.viewerLightTableSlotId] || []).map((y) => {
    const j = Number.parseInt(y, 10);
    return l.images.find((k) => k.id === j) || l.lineageImages.find((k) => k.id === j) || null;
  }).filter((y) => y !== null) : l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
    (u) => u.exists !== !1 && (l.settings["gallery.show_parent_images"] && !c || !u.has_children || i)
  ), [
    l.viewerMode,
    l.viewerLightTableSlotId,
    l.lineageImages,
    l.images,
    l.settings,
    c,
    i
  ]), m = f.useRef(l.viewerImageId);
  f.useEffect(() => {
    m.current = l.viewerImageId;
  }, [l.viewerImageId]);
  const v = f.useCallback(() => {
    a({ type: "CLOSE_MODAL" });
  }, [a]);
  et({ onEscape: v });
  const w = f.useRef(!1), _ = f.useCallback((u) => {
    u.target === u.currentTarget && (w.current = !0);
  }, []), g = f.useCallback(
    (u) => {
      u.target === u.currentTarget && w.current && v(), w.current = !1;
    },
    [v]
  ), x = f.useCallback(
    (u) => {
      if (!o.current) return;
      const p = m.current;
      if (p === null || !u.has(p))
        return;
      const y = d.findIndex(
        (k) => k.id === p
      );
      if (y === -1) return;
      let j = !1;
      for (let k = y + 1; k < d.length; k++)
        if (!u.has(d[k].id)) {
          a({
            type: "OPEN_VIEWER",
            payload: {
              id: d[k].id,
              mode: l.viewerMode,
              // Preserve slotId in lighttable mode to stay within the slot
              ...l.viewerMode === "lighttable" && l.viewerLightTableSlotId ? { slotId: l.viewerLightTableSlotId } : {}
            }
          }), j = !0;
          break;
        }
      if (!j) {
        for (let k = y - 1; k >= 0; k--)
          if (!u.has(d[k].id)) {
            a({
              type: "OPEN_VIEWER",
              payload: {
                id: d[k].id,
                mode: l.viewerMode,
                // Preserve slotId in lighttable mode to stay within the slot
                ...l.viewerMode === "lighttable" && l.viewerLightTableSlotId ? { slotId: l.viewerLightTableSlotId } : {}
              }
            }), j = !0;
            break;
          }
      }
      j || a({ type: "CLOSE_VIEWER" });
    },
    [l.viewerMode, l.viewerLightTableSlotId, d, a]
  ), S = async () => {
    var u, p;
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const y = new Set(e), j = d.filter(
        (k) => y.has(k.id)
      );
      if (x(y), await co(e, n), !o.current) return;
      l.activeModal.type === "delete_confirm" && ((p = (u = l.activeModal).onSuccess) == null || p.call(u)), !n && r && r(j), a({ type: "REMOVE_IMAGES", payload: e }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (y) {
      a({
        type: "SET_ERROR",
        payload: y instanceof Error ? y.message : String(y)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  }, h = async () => {
    var u, p;
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const y = new Set(e);
      for (const k of e) {
        const b = await so(k);
        if (!o.current) return;
        for (const I of b)
          y.add(I.id);
      }
      const j = d.filter(
        (k) => y.has(k.id)
      );
      if (x(y), await co(
        Array.from(y),
        n
      ), !o.current) return;
      l.activeModal.type === "delete_confirm" && ((p = (u = l.activeModal).onSuccess) == null || p.call(u)), !n && r && r(j), a({
        type: "REMOVE_IMAGES",
        payload: Array.from(y)
      }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (y) {
      a({
        type: "SET_ERROR",
        payload: y instanceof Error ? y.message : String(y)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  };
  return ge.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: _,
        onMouseUp: g,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--small",
            onClick: (u) => u.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx($t, { size: 20, color: "var(--meld-danger-color)" }),
                  n ? "Permanent Deletion" : "Move to Trash"
                ] }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: v,
                    children: /* @__PURE__ */ s.jsx(xe, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  style: {
                    padding: "10px 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px"
                  },
                  children: [
                    /* @__PURE__ */ s.jsxs("p", { children: [
                      "Are you sure you want to",
                      " ",
                      n ? "permanently delete" : "move to trash",
                      " ",
                      /* @__PURE__ */ s.jsx("strong", { children: e.length }),
                      " selected items?"
                    ] }),
                    /* @__PURE__ */ s.jsxs(
                      "div",
                      {
                        style: {
                          padding: "12px",
                          backgroundColor: "var(--comfy-input-bg, rgba(255, 0, 0, 0.1))",
                          border: `1px solid ${n ? "var(--meld-danger-color)" : "var(--meld-accent-color)"}`,
                          borderRadius: "4px",
                          display: "flex",
                          gap: "10px"
                        },
                        children: [
                          /* @__PURE__ */ s.jsx(
                            Mp,
                            {
                              size: 20,
                              style: {
                                color: n ? "var(--meld-danger-color)" : "var(--meld-accent-color)",
                                flexShrink: 0
                              }
                            }
                          ),
                          /* @__PURE__ */ s.jsx("div", { style: { fontSize: "13px" }, children: n ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                            /* @__PURE__ */ s.jsx("strong", { children: "WARNING:" }),
                            " Physical files will be permanently deleted from the trash bin. This operation cannot be undone."
                          ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                            /* @__PURE__ */ s.jsx("strong", { children: "INFO:" }),
                            " Selected items will be moved to the trash bin. You can restore them later from the settings."
                          ] }) })
                        ]
                      }
                    ),
                    t && /* @__PURE__ */ s.jsxs(
                      "div",
                      {
                        style: {
                          padding: "12px",
                          backgroundColor: "var(--comfy-input-bg-active, rgba(0, 150, 255, 0.1))",
                          border: "1px solid var(--meld-accent-color)",
                          borderRadius: "4px",
                          fontSize: "13px"
                        },
                        children: [
                          "Selected images include items with a ",
                          /* @__PURE__ */ s.jsx("strong", { children: "Source" }),
                          " or derivatives. You can choose to delete just the selected items or all related items (lineage)."
                        ]
                      }
                    )
                  ]
                }
              ) }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-footer", children: [
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-btn meld-btn-secondary",
                    onClick: v,
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-danger",
                      onClick: S,
                      children: n ? "Delete Permanently" : "Move to Trash"
                    }
                  ),
                  t && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-danger",
                      title: n ? "Permanently delete all images in the lineage" : "Move all images in the lineage to trash",
                      onClick: h,
                      children: n ? "Delete All Related" : "Move All Related"
                    }
                  )
                ] })
              ] })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, Rf = ({ message: e }) => {
  const { dispatch: t } = _e(), n = f.useCallback(() => {
    t({ type: "CLOSE_MODAL" });
  }, [t]);
  return et({ onEscape: n }), /* @__PURE__ */ s.jsx("div", { className: "meld-modal-overlay", onClick: n, children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (r) => r.stopPropagation(), children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(ef, { size: 20, color: "var(--meld-danger-color)" }),
        /* @__PURE__ */ s.jsx("h2", { children: "Error" })
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          className: "meld-modal-close",
          onClick: n,
          type: "button",
          children: /* @__PURE__ */ s.jsx(xe, { size: 20 })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsx(
      "div",
      {
        style: { padding: "20px 0", textAlign: "center", fontSize: "14px" },
        children: e
      }
    ) }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ s.jsx(
      "button",
      {
        className: "meld-btn meld-btn-primary",
        onClick: n,
        type: "button",
        children: "OK"
      }
    ) })
  ] }) });
}, Of = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = _e(), [l, a] = f.useState([]), [o, i] = f.useState(!0), [c, d] = f.useState(!1), m = f.useCallback(() => {
    n({ type: "CLOSE_MODAL" });
  }, [n]);
  et({ onEscape: m });
  const v = f.useRef(!1), w = (k) => {
    k.target === k.currentTarget && (v.current = !0);
  }, _ = (k) => {
    k.target === k.currentTarget && v.current && m(), v.current = !1;
  }, g = t.images.find((k) => k.id === e), x = f.useCallback(async () => {
    i(!0);
    try {
      const k = t.settings["gallery.suggest_phash_threshold"], b = await ug(e, k);
      a(b);
    } catch (k) {
      console.error("Failed to load suggestions:", k);
    } finally {
      i(!1);
    }
  }, [e, t.settings]);
  f.useEffect(() => {
    x();
  }, [x]);
  const S = async (k) => {
    if (k == null) {
      console.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!g || k === g.parent_id) && !(g.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await jc(e, k), await cf(e), await r(), m();
      } catch (b) {
        console.error("Failed to link parent:", b);
      }
  }, h = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await jc(e, null), await r(), m();
      } catch (k) {
        console.error("Failed to remove source:", k), alert("Failed to remove source image.");
      }
  }, u = async (k) => {
    i(!0);
    try {
      const b = await Vg(k), { id: I } = await df({
        filename: b.name,
        subfolder: b.subfolder || "",
        type: b.type || "input"
      });
      if (I === e) {
        alert(
          "Uploaded image is identical to the current image. Cannot set as source."
        );
        return;
      }
      await S(I);
    } catch (b) {
      console.error("Failed to upload/register image:", b);
    } finally {
      i(!1);
    }
  }, p = (k) => {
    k.preventDefault(), k.stopPropagation(), d(!1);
    const b = k.dataTransfer.files[0];
    b != null && b.type.startsWith("image/") && u(b);
  };
  if (!g) return null;
  const y = l.filter((k) => k.is_source_match), j = l.filter((k) => !k.is_source_match);
  return ge.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: w,
        onMouseUp: _,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (k) => k.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("h2", { children: [
              "Select Source for #",
              g.id
            ] }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: m,
                children: /* @__PURE__ */ s.jsx(xe, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
            g.parent_id && /* @__PURE__ */ s.jsxs(
              "div",
              {
                style: {
                  marginBottom: "16px",
                  padding: "12px",
                  backgroundColor: "var(--comfy-input-bg, rgba(0, 0, 0, 0.1))",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: "1px solid var(--meld-border-color, #444)"
                },
                children: [
                  /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        minWidth: 0
                      },
                      children: [
                        /* @__PURE__ */ s.jsx(Bp, { size: 16, color: "var(--meld-accent-color)" }),
                        /* @__PURE__ */ s.jsxs(
                          "div",
                          {
                            style: {
                              display: "flex",
                              flexDirection: "column",
                              gap: "4px",
                              minWidth: 0
                            },
                            children: [
                              /* @__PURE__ */ s.jsx(
                                "span",
                                {
                                  style: {
                                    fontSize: "0.8em",
                                    color: "var(--meld-text-secondary)",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.05em"
                                  },
                                  children: "Current Source"
                                }
                              ),
                              /* @__PURE__ */ s.jsxs(
                                "div",
                                {
                                  style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    minWidth: 0
                                  },
                                  children: [
                                    g.parent_filename && /* @__PURE__ */ s.jsx(
                                      "img",
                                      {
                                        src: ht(
                                          {
                                            filename: g.parent_filename,
                                            subfolder: g.parent_subfolder || "",
                                            type: g.parent_type || "output"
                                          },
                                          64
                                        ),
                                        alt: "Current Source",
                                        style: {
                                          width: "40px",
                                          height: "40px",
                                          objectFit: "cover",
                                          borderRadius: "4px",
                                          border: "1px solid var(--meld-border-color)"
                                        }
                                      }
                                    ),
                                    /* @__PURE__ */ s.jsxs(
                                      "div",
                                      {
                                        style: {
                                          display: "flex",
                                          flexDirection: "column",
                                          minWidth: 0
                                        },
                                        children: [
                                          /* @__PURE__ */ s.jsx(
                                            "span",
                                            {
                                              style: {
                                                fontWeight: "bold",
                                                fontSize: "0.95em",
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis"
                                              },
                                              children: g.parent_filename || "Unknown Image"
                                            }
                                          ),
                                          /* @__PURE__ */ s.jsxs(
                                            "span",
                                            {
                                              style: {
                                                color: "var(--meld-text-secondary)",
                                                fontSize: "0.85em"
                                              },
                                              children: [
                                                "#",
                                                g.parent_id
                                              ]
                                            }
                                          )
                                        ]
                                      }
                                    )
                                  ]
                                }
                              )
                            ]
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-danger meld-btn--sm",
                      style: {
                        flexShrink: 0,
                        width: "32px",
                        height: "32px",
                        padding: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%"
                      },
                      onClick: h,
                      title: "Remove Source",
                      children: /* @__PURE__ */ s.jsx(Vp, { size: 16 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: `meld-drop-zone ${c ? "meld-drop-zone--active" : ""}`,
                onDragEnter: (k) => {
                  k.preventDefault(), k.stopPropagation(), d(!0);
                },
                onDragOver: (k) => {
                  k.preventDefault(), k.stopPropagation(), k.dataTransfer.dropEffect = "copy", d(!0);
                },
                onDragLeave: (k) => {
                  k.preventDefault(), k.stopPropagation(), d(!1);
                },
                onDrop: p,
                children: [
                  /* @__PURE__ */ s.jsx(tg, { size: 32 }),
                  /* @__PURE__ */ s.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            o ? /* @__PURE__ */ s.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestions-container", children: [
              y.length > 0 && /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: y.map((k) => {
                  const b = k.id === g.parent_id;
                  return /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${b ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !b && S(k.id),
                      style: {
                        cursor: b ? "default" : "pointer",
                        ...b ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ s.jsx(
                          "img",
                          {
                            src: ht(k, 64),
                            alt: k.filename
                          }
                        ),
                        /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: k.filename }),
                          b && /* @__PURE__ */ s.jsx(
                            "span",
                            {
                              style: {
                                fontSize: "8px",
                                color: "var(--meld-accent-color)",
                                fontWeight: "bold",
                                marginTop: "2px"
                              },
                              children: "CURRENT SOURCE"
                            }
                          )
                        ] })
                      ]
                    },
                    k.id
                  );
                }) })
              ] }),
              /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Visual Matches (pHash)" }),
                j.length > 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: j.map((k) => {
                  const b = k.id === g.parent_id;
                  return /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${b ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !b && S(k.id),
                      style: {
                        cursor: b ? "default" : "pointer",
                        ...b ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ s.jsx(
                          "img",
                          {
                            src: ht(k, 64),
                            alt: k.filename
                          }
                        ),
                        /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: k.filename }),
                          /* @__PURE__ */ s.jsxs(
                            "div",
                            {
                              style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginTop: "2px"
                              },
                              children: [
                                /* @__PURE__ */ s.jsxs("span", { className: "meld-suggestion-distance", children: [
                                  "Match:",
                                  " ",
                                  Math.round((64 - k.distance) / 64 * 100),
                                  "%"
                                ] }),
                                b && /* @__PURE__ */ s.jsx(
                                  "span",
                                  {
                                    style: {
                                      fontSize: "8px",
                                      color: "var(--meld-accent-color)",
                                      fontWeight: "bold"
                                    },
                                    children: "CURRENT"
                                  }
                                )
                              ]
                            }
                          )
                        ] })
                      ]
                    },
                    k.id
                  );
                }) }) : /* @__PURE__ */ s.jsx("p", { className: "meld-no-suggestions", children: "No visual matches found." })
              ] })
            ] })
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, dy = () => {
  const { state: e, dispatch: t } = _e(), n = e.toastMessage;
  return f.useEffect(() => {
    if (n) {
      const r = setTimeout(() => {
        t({ type: "HIDE_TOAST" });
      }, 3e3);
      return () => clearTimeout(r);
    }
  }, [n, t]), n ? /* @__PURE__ */ s.jsx(
    "div",
    {
      className: `meld-toast ${e.toastType === "error" ? "meld-toast--error" : ""}`,
      role: "status",
      "aria-live": "polite",
      children: n
    }
  ) : null;
}, uy = () => {
  const { state: e, dispatch: t } = _e(), { executeWorkflow: n } = ui();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
      Df,
      {
        images: e.activeModal.images,
        isMaskMode: !!e.activeModal.maskFilename || !!e.activeModal.isMaskSequence,
        onExecute: async (r, l) => {
          if (e.activeModal.type === "workflow_selection") {
            if (e.activeModal.isMaskSequence)
              return t({
                type: "OPEN_MODAL",
                payload: {
                  type: "mask_sequence_step",
                  images: e.activeModal.images,
                  currentIndex: 0,
                  workflowName: r,
                  targetLoaderNodeId: l
                }
              }), !1;
            const a = e.activeModal.maskFilename, o = e.activeModal.onSuccess;
            for (const i of e.activeModal.images)
              await n(
                r,
                i,
                a,
                l
              );
            o == null || o();
          }
        }
      }
    ),
    e.activeModal.type === "node_selection" && /* @__PURE__ */ s.jsx(
      Lf,
      {
        image: e.activeModal.image,
        nodes: e.activeModal.nodes,
        onSelect: (r) => {
          e.activeModal.type === "node_selection" && Zr(e.activeModal.image, r);
        }
      }
    ),
    e.activeModal.type === "parent_selection" && ge.createPortal(
      /* @__PURE__ */ s.jsx(Of, { imageId: e.activeModal.imageId }),
      document.body
    ),
    e.activeModal.type === "import" && ge.createPortal(/* @__PURE__ */ s.jsx(mf, {}), document.body),
    e.activeModal.type === "settings" && ge.createPortal(/* @__PURE__ */ s.jsx(Mf, {}), document.body),
    e.activeModal.type === "tag_edit" && ge.createPortal(
      /* @__PURE__ */ s.jsx(
        If,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "error" && ge.createPortal(
      /* @__PURE__ */ s.jsx(Rf, { message: e.activeModal.message }),
      document.body
    ),
    e.activeModal.type === "delete_confirm" && ge.createPortal(
      /* @__PURE__ */ s.jsx(
        Pf,
        {
          imageIds: e.activeModal.imageIds,
          hasLineage: e.activeModal.hasLineage,
          isPermanent: e.activeModal.isPermanent,
          onSuccess: () => {
            var r, l;
            e.activeModal.type === "delete_confirm" && ((l = (r = e.activeModal).onSuccess) == null || l.call(r));
          }
        }
      ),
      document.body
    ),
    e.activeModal.type === "mask_editor" && ge.createPortal(
      /* @__PURE__ */ s.jsx(
        ys,
        {
          imageId: e.activeModal.imageId,
          mode: e.activeModal.mode,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "mask_sequence_step" && ge.createPortal(
      /* @__PURE__ */ s.jsx(
        ys,
        {
          imageId: e.activeModal.images[e.activeModal.currentIndex].id,
          mode: "run_sequence",
          sequenceData: {
            workflowName: e.activeModal.workflowName,
            targetLoaderNodeId: e.activeModal.targetLoaderNodeId,
            currentIndex: e.activeModal.currentIndex,
            totalCount: e.activeModal.images.length
          },
          onSuccess: () => {
            if (e.activeModal.type === "mask_sequence_step") {
              const r = e.activeModal.currentIndex + 1;
              r < e.activeModal.images.length ? t({
                type: "OPEN_MODAL",
                payload: {
                  ...e.activeModal,
                  currentIndex: r
                }
              }) : t({ type: "CLOSE_MODAL" });
            }
          },
          onClose: () => t({ type: "CLOSE_MODAL" })
        },
        e.activeModal.images[e.activeModal.currentIndex].id
      ),
      document.body
    ),
    e.activeModal.type === "note_edit" && ge.createPortal(
      /* @__PURE__ */ s.jsx(
        Tf,
        {
          imageId: e.activeModal.imageId,
          initialNotes: e.activeModal.notes,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "download_options" && ge.createPortal(
      /* @__PURE__ */ s.jsx(
        qg,
        {
          imageIds: e.activeModal.imageIds,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.confirmModal && ge.createPortal(
      /* @__PURE__ */ s.jsx(
        cy,
        {
          message: e.confirmModal.message,
          onConfirm: () => {
            var r;
            (r = e.confirmModal) == null || r.onConfirm(), t({ type: "CLOSE_CONFIRM_MODAL" });
          },
          onCancel: () => {
            var r, l;
            (l = (r = e.confirmModal) == null ? void 0 : r.onCancel) == null || l.call(r), t({ type: "CLOSE_CONFIRM_MODAL" });
          }
        }
      ),
      document.body
    ),
    e.toastMessage && ge.createPortal(/* @__PURE__ */ s.jsx(dy, {}), document.body)
  ] });
}, fy = () => {
  const { state: e, dispatch: t } = _e(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await Gg(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (m) {
      console.error("Failed to cancel scan:", m);
    }
  }, l = () => {
    t({
      type: "SET_SCAN_STATUS",
      payload: { isFinished: !1, isRunning: !1 }
    });
  }, a = n.progress.phase === "linking", { current: o, total: i } = n.progress, c = i > 0 ? o / i : 0, d = a ? 50 + Math.round(c * 50) : Math.round(c * 50);
  return /* @__PURE__ */ s.jsx("div", { className: "meld-import-progress-sidebar", children: n.isRunning ? /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-progress-compact", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-info", children: [
      /* @__PURE__ */ s.jsx("div", { className: "meld-scan-status-text-compact", children: n.shouldCancel ? /* @__PURE__ */ s.jsx("span", { className: "meld-status-cancelling", children: "Cancelling..." }) : a ? /* @__PURE__ */ s.jsx("span", { children: "Linking..." }) : /* @__PURE__ */ s.jsx("span", { children: "Scanning..." }) }),
      /* @__PURE__ */ s.jsxs("div", { className: "meld-progress-stats-compact", children: [
        n.progress.current,
        " / ",
        n.progress.total
      ] })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-progress-container-compact", children: /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-progress-bar",
        style: { width: `${d}%` }
      }
    ) }),
    /* @__PURE__ */ s.jsx(
      "button",
      {
        type: "button",
        className: "meld-btn-stop-compact",
        disabled: n.shouldCancel,
        onClick: r,
        title: "Stop Scan",
        children: /* @__PURE__ */ s.jsx(of, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ s.jsx(Dp, { size: 14, className: "meld-success-icon" }),
      /* @__PURE__ */ s.jsxs("span", { className: "meld-finished-text", children: [
        "Done! ",
        n.newCount,
        " new, ",
        n.updatedCount,
        " updated"
      ] })
    ] }),
    /* @__PURE__ */ s.jsx(
      "button",
      {
        type: "button",
        className: "meld-btn-ok-compact",
        onClick: l,
        children: "OK"
      }
    )
  ] }) });
}, fi = {
  lightTable: {
    id: "meld-light-table-portal",
    preferredParentSelector: ".comfyui-body-bottom"
  },
  bulkActionBar: {
    id: "meld-bulk-bar-portal",
    preferredParentSelector: ".comfyui-body-bottom"
  }
}, my = Object.keys(fi), Nc = /* @__PURE__ */ new Map(), Mc = "data-meld-portal-root";
let ca = null, da = null;
const Ic = ".comfyui-body-bottom";
function Tc(e) {
  var n, r, l, a;
  const t = `[${Mc}]`;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (i.nodeType !== Node.ELEMENT_NODE) continue;
    const c = i;
    if ((n = c.hasAttribute) != null && n.call(c, Mc) || (r = c.querySelector) != null && r.call(c, t) || (l = c.matches) != null && l.call(c, Ic) || (a = c.querySelector) != null && a.call(c, Ic)) return !0;
  }
  return !1;
}
function hy(e) {
  const t = document.querySelector(e);
  return t instanceof HTMLElement ? t : document.body;
}
function py(e) {
  const t = fi[e], n = document.getElementById(t.id);
  if (n instanceof HTMLDivElement)
    return n.dataset.meldPortalRoot = e, n;
  const r = document.createElement("div");
  return r.id = t.id, r.dataset.meldPortalRoot = e, r;
}
function Af(e) {
  const t = fi[e], n = Nc.get(e) ?? py(e);
  Nc.set(e, n);
  const r = hy(t.preferredParentSelector);
  return (n.parentElement !== r || !document.contains(n)) && r.appendChild(n), n;
}
function zf() {
  for (const e of my)
    Af(e);
}
function Lc() {
  da === null && (da = requestAnimationFrame(() => {
    da = null, zf();
  }));
}
function Ff(e) {
  return Af(e);
}
function gy() {
  ca || typeof document > "u" || !document.body || (zf(), ca = new MutationObserver((e) => {
    for (const t of e) {
      if (Tc(t.addedNodes)) {
        Lc();
        return;
      }
      if (Tc(t.removedNodes)) {
        Lc();
        return;
      }
    }
  }), ca.observe(document.body, {
    childList: !0,
    subtree: !0
  }));
}
const yy = () => {
  const { state: e } = _e(), t = ie((r) => r.slots), n = ie((r) => r.addToBucket);
  f.useEffect(() => {
    const r = (l) => {
      var i, c, d;
      if (((i = document.activeElement) == null ? void 0 : i.tagName) === "INPUT" || ((c = document.activeElement) == null ? void 0 : c.tagName) === "TEXTAREA" || (d = document.activeElement) != null && d.isContentEditable)
        return;
      const a = e.selectedIds;
      if (!a || a.size === 0) return;
      const o = t.find(
        (m) => m.shortcutKey.toLowerCase() === l.key.toLowerCase()
      );
      o && (l.preventDefault(), a.forEach((m) => {
        n(o.id, String(m));
      }), console.log(`Added ${a.size} images to slot ${o.label}`));
    };
    return window.addEventListener("keydown", r), () => {
      window.removeEventListener("keydown", r);
    };
  }, [t, n, e.selectedIds]);
}, Wf = ({
  message: e,
  onConfirm: t,
  onCancel: n
}) => (f.useEffect(() => {
  const r = (l) => {
    l.key === "Escape" && n();
  };
  return document.addEventListener("keydown", r), () => document.removeEventListener("keydown", r);
}, [n]), /* @__PURE__ */ s.jsx(
  "div",
  {
    className: "meld-confirm-modal__overlay",
    onClick: n,
    onKeyDown: (r) => {
      r.key === "Enter" && n();
    },
    role: "presentation",
    children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-confirm-modal__dialog",
        onClick: (r) => r.stopPropagation(),
        onKeyDown: (r) => r.stopPropagation(),
        role: "alertdialog",
        "aria-modal": "true",
        "aria-label": e,
        children: [
          /* @__PURE__ */ s.jsx("p", { className: "meld-confirm-modal__message", children: e }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-confirm-modal__actions", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-confirm-modal__btn meld-confirm-modal__btn--cancel",
                onClick: n,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-confirm-modal__btn meld-confirm-modal__btn--confirm",
                onClick: t,
                children: "OK"
              }
            )
          ] })
        ]
      }
    )
  }
)), Jr = ({
  enabled: e,
  insideRefs: t,
  onOutside: n,
  options: r
}) => {
  const l = (r == null ? void 0 : r.capture) ?? !0, a = (r == null ? void 0 : r.ignoreNonPrimary) ?? !0;
  f.useEffect(() => {
    if (!e) return;
    const o = (i) => {
      if (a && (i.pointerType === "mouse" && i.button !== 0 || !i.isPrimary))
        return;
      const c = i.target;
      if (!(c instanceof Node))
        return;
      t.some((m) => {
        const v = m.current;
        return v ? v.contains(c) : !1;
      }) || n(i);
    };
    return window.addEventListener("pointerdown", o, { capture: l }), () => {
      window.removeEventListener("pointerdown", o, {
        capture: l
      });
    };
  }, [e, t, n, l, a]);
}, vy = (e, t, n, r, l) => {
  if (t.length !== 0)
    switch (e.type) {
      case "delete":
        r({
          type: "OPEN_MODAL",
          payload: {
            type: "delete_confirm",
            imageIds: t,
            hasLineage: n.some((a) => a.parent_id || a.has_children),
            isPermanent: !1,
            // To make it simple, standard soft delete
            onSuccess: l
          }
        });
        break;
      case "edit_tags": {
        const a = /* @__PURE__ */ new Set();
        for (const o of n)
          if (o.tags)
            for (const i of o.tags)
              a.add(i);
        e.value && a.add(e.value), r({
          type: "OPEN_MODAL",
          payload: {
            type: "tag_edit",
            imageIds: t,
            tags: Array.from(a),
            onSuccess: l
          }
        });
        break;
      }
      case "move_folder":
        console.warn("move_folder action is not yet implemented"), l == null || l();
        break;
      case "queue_workflow":
        r({
          type: "OPEN_MODAL",
          payload: { type: "workflow_selection", images: n, onSuccess: l }
        });
        break;
      case "run_with_mask":
        t.length > 0 && r({
          type: "OPEN_MODAL",
          payload: {
            type: "workflow_selection",
            images: n.filter((a) => t.includes(a.id)),
            isMaskSequence: !0,
            onSuccess: l
          }
        });
        break;
      case "download":
        r({
          type: "OPEN_MODAL",
          payload: { type: "download_options", imageIds: t, onSuccess: l }
        });
        break;
      default:
        console.log(
          `Action ${e.type} executed on ${t.length} images`
        );
        break;
    }
}, wy = ({ config: e }) => {
  var V;
  const t = ie((E) => E.buckets), n = ie((E) => E.slots), r = ie((E) => E.images), l = n.length, { state: a, dispatch: o } = _e(), [i, c] = f.useState(!1), [d, m] = f.useState(!1), [v, w] = f.useState(!1), [_, g] = f.useState(e.label), [x, S] = f.useState(e.color), [h, u] = f.useState([]), [p, y] = f.useState(null), j = f.useRef(null), k = f.useRef(null);
  Jr({
    enabled: i,
    insideRefs: [k],
    onOutside: () => c(!1)
  }), Jr({
    enabled: v,
    insideRefs: [j],
    onOutside: () => w(!1)
  });
  const b = t[e.id] || [], I = b.length, O = b.map((E) => {
    const W = Number(E);
    let G = a.images.find((A) => A.id === W);
    return G || (G = a.lineageImages.find((A) => A.id === W)), G || (G = r[E]), G;
  }).filter(Boolean);
  f.useEffect(() => {
    u((E) => {
      const W = E.filter((G) => b.includes(String(G)));
      return W.length !== E.length ? W : E;
    });
  }, [b]);
  const R = h.filter(
    (E) => b.includes(String(E))
  ), D = R.length > 0, U = (E) => {
    E.preventDefault(), E.stopPropagation(), E.currentTarget.classList.add("drag-over");
  }, Z = (E) => {
    E.currentTarget.classList.remove("drag-over");
  }, M = (E) => {
    E.preventDefault(), E.stopPropagation(), E.currentTarget.classList.remove("drag-over");
    const W = E.dataTransfer.getData("text/plain");
    W && W.split(",").forEach((A) => {
      if (A) {
        const q = A.trim(), B = Number(q);
        let ae = a.images.find((ve) => ve.id === B);
        ae || (ae = a.lineageImages.find(
          (ve) => ve.id === B
        )), ie.getState().addToBucket(e.id, q, ae);
      }
    });
  }, K = (E, W) => {
    E.stopPropagation();
    let G = [W];
    R.includes(W) ? G = R : (u([W]), y(W)), E.dataTransfer.setData("text/plain", G.join(",")), E.dataTransfer.setData("application/meld-lt-source-slot", e.id), E.dataTransfer.effectAllowed = "move";
  }, F = (E, W) => {
    if (E.dataTransfer.dropEffect === "none") {
      const G = R.includes(W) ? R : [W];
      G.forEach((A) => {
        ie.getState().removeFromBucket(e.id, String(A));
      }), u((A) => A.filter((q) => !G.includes(q)));
    }
  }, P = (E) => {
    if (I === 0) return;
    const W = {
      type: E
    }, G = D ? R : b.map(Number);
    if (G.length === 0) return;
    const A = G.map((ae) => O.find((ve) => ve.id === ae)).filter(Boolean), q = {
      edit_tags: "Tags updated",
      delete: "Delete initiated",
      move_folder: "Moved to folder",
      queue_workflow: "Queued Workflow",
      run_with_mask: "Opened Mask Editor",
      download: "Opened Download Options"
    };
    vy(
      W,
      G,
      A,
      o,
      () => {
        ie.getState().showToast(q[E] ?? "Done");
      }
    );
  }, C = () => {
    ie.getState().clearBucket(e.id), ie.getState().showToast(`Tab "${e.label}" cleared`), m(!1);
  }, L = () => {
    const E = ie.getState();
    E.slots.length <= 1 || (E.removeSlot(e.id), ie.getState().showToast(`Tab "${e.label}" deleted`));
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "meld-lt-slot-panel",
      style: { "--slot-color": e.color },
      onDragOver: U,
      onDragLeave: Z,
      onDrop: M,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot-panel__images", children: I === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot-panel__empty", children: "Drag & Drop images here" }) : O.map((E) => {
          const W = ht(E);
          return /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `meld-lt-slot-panel__image-wrapper${R.includes(E.id) ? " selected" : ""}`,
              draggable: !0,
              onClick: (G) => {
                if (G.ctrlKey || G.metaKey)
                  u(
                    (A) => A.includes(E.id) ? A.filter((q) => q !== E.id) : [...A, E.id]
                  ), y(E.id);
                else if (G.shiftKey && p !== null) {
                  const A = O.findIndex(
                    (B) => B.id === E.id
                  ), q = O.findIndex(
                    (B) => B.id === p
                  );
                  if (A !== -1 && q !== -1) {
                    const B = Math.min(A, q), ae = Math.max(A, q), ve = O.slice(B, ae + 1).map((ee) => ee.id);
                    u(
                      (ee) => Array.from(/* @__PURE__ */ new Set([...ee, ...ve]))
                    );
                  }
                  y(E.id);
                } else
                  u([]), y(null), o({
                    type: "OPEN_VIEWER",
                    payload: {
                      id: E.id,
                      mode: "lighttable",
                      slotId: e.id
                    }
                  });
              },
              onDragStart: (G) => K(G, E.id),
              onDragEnd: (G) => F(G, E.id),
              children: /* @__PURE__ */ s.jsx("img", { src: W, alt: E.filename, draggable: !1 })
            },
            E.id
          );
        }) }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__actions", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__action-menu-wrapper", ref: j, children: [
            /* @__PURE__ */ s.jsxs(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__action-btn",
                onClick: () => w(!v),
                disabled: I === 0,
                title: "Actions",
                children: [
                  D ? `Action (${R.length})` : "Action",
                  /* @__PURE__ */ s.jsx(Pp, { size: 12 })
                ]
              }
            ),
            v && /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot__action-menu", children: [
              {
                type: "edit_tags",
                label: "Edit Tags",
                icon: dr
              },
              {
                type: "queue_workflow",
                label: "Queue Workflow",
                icon: oi
              },
              {
                type: "run_with_mask",
                label: "Queue Workflow (Mask)",
                icon: ng
              },
              {
                type: "download",
                label: "Download",
                icon: qr
              },
              {
                type: "delete",
                label: "Delete",
                icon: $t,
                danger: !0
              }
            ].map((E) => /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: `meld-lt-slot__action-menu-item${E.danger ? " meld-lt-slot__action-menu-item--danger" : ""}${"disabled" in E && E.disabled ? " meld-lt-slot__action-menu-item--disabled" : ""}`,
                onMouseDown: (W) => W.stopPropagation(),
                onClick: () => {
                  "disabled" in E && E.disabled || (w(!1), setTimeout(() => P(E.type), 0));
                },
                children: [
                  /* @__PURE__ */ s.jsx(E.icon, { size: 13 }),
                  /* @__PURE__ */ s.jsx("span", { children: E.label })
                ]
              },
              E.type
            )) })
          ] }),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-lt-slot__menu-btn",
              onClick: () => m(!0),
              title: "Clear Tab",
              disabled: I === 0,
              children: /* @__PURE__ */ s.jsx(Ap, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__settings-wrapper", ref: k, children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__menu-btn",
                onClick: () => c(!i),
                title: "Tab Settings",
                children: /* @__PURE__ */ s.jsx(af, { size: 14 })
              }
            ),
            i && /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__settings-popover", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__settings-row", children: [
                /* @__PURE__ */ s.jsx("label", { htmlFor: `slot-label-${e.id}`, children: "Tab Label:" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    id: `slot-label-${e.id}`,
                    value: _,
                    onChange: (E) => g(E.target.value),
                    placeholder: "e.g. Keep"
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__settings-row", children: [
                /* @__PURE__ */ s.jsx("label", { htmlFor: `slot-color-${e.id}`, children: "Tab Color:" }),
                /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                      flex: 1
                    },
                    children: [
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          id: `slot-color-${e.id}`,
                          type: "color",
                          value: x.startsWith("var") ? ((V = x.match(
                            /#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})/
                          )) == null ? void 0 : V[0]) ?? "#9ca3af" : /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/i.test(x) ? x : "#9ca3af",
                          onChange: (E) => S(E.target.value),
                          style: { flexShrink: 0 }
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          value: x,
                          onChange: (E) => S(E.target.value),
                          placeholder: "#hex or CSS var",
                          style: { flex: 1, minWidth: 0 }
                        }
                      )
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-lt-slot__settings-save",
                  onClick: () => {
                    const E = ie.getState(), W = _.trim();
                    if (!W) {
                      E.showToast(
                        "Error: Tab label cannot be empty",
                        "error"
                      );
                      return;
                    }
                    if (E.slots.some(
                      (A) => A.id !== e.id && (A.label.toLowerCase() === W.toLowerCase() || A.id.toLowerCase() === W.toLowerCase())
                    )) {
                      E.showToast(
                        `Error: "${W}" is already in use`,
                        "error"
                      );
                      return;
                    }
                    E.updateSlot(e.id, {
                      label: W,
                      color: x
                    }), c(!1), E.showToast("Settings saved");
                  },
                  children: "Save Settings"
                }
              ),
              l > 1 && /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-lt-slot__settings-delete-btn",
                  onClick: L,
                  style: {
                    background: "none",
                    border: "none",
                    color: "var(--brand-red, #ff4c4c)",
                    cursor: "pointer",
                    marginTop: "12px",
                    textDecoration: "underline",
                    padding: 0,
                    alignSelf: "flex-end",
                    fontSize: "12px"
                  },
                  children: "Delete Tab"
                }
              )
            ] })
          ] })
        ] }),
        d && /* @__PURE__ */ s.jsx(
          Wf,
          {
            message: `Clear all items in the "${e.label}" tab?`,
            onConfirm: C,
            onCancel: () => m(!1)
          }
        )
      ]
    }
  );
}, xy = () => {
  const e = ie((n) => n.toastMessage), t = ie((n) => n.toastType);
  return e ? /* @__PURE__ */ s.jsx(
    "div",
    {
      className: `meld-toast ${t === "error" ? "meld-toast--error" : ""}`,
      role: "status",
      "aria-live": "polite",
      children: e
    }
  ) : null;
}, _y = () => {
  var _;
  yy();
  const e = ie((g) => g.isOpen), t = ie((g) => g.slots), n = ie((g) => g.buckets), r = ie((g) => g.setIsOpen), { state: l } = _e(), [a, o] = f.useState(((_ = t[0]) == null ? void 0 : _.id) || "keep"), i = Ff("lightTable"), [c, d] = f.useState(!1);
  if (!e) return null;
  const m = () => {
    const g = `slot_${Date.now().toString(36)}`;
    ie.getState().addSlot({
      id: g,
      label: `Tab ${t.length + 1}`,
      color: "var(--meld-text-secondary, #9ca3af)",
      shortcutKey: ""
    }), o(g);
  }, v = () => {
    t.forEach((g) => {
      ie.getState().clearBucket(g.id);
    }), ie.getState().showToast("All tabs cleared"), d(!1);
  }, w = /* @__PURE__ */ s.jsxs("div", { className: "meld-light-table", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-light-table__tabs", children: [
      t.map((g) => {
        var x;
        return /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "button",
            className: `meld-light-table__tab ${a === g.id ? "meld-light-table__tab--active" : ""}`,
            onClick: () => o(g.id),
            style: { "--tab-color": g.color },
            onDragOver: (S) => {
              S.preventDefault(), o(g.id);
            },
            onDrop: (S) => {
              S.preventDefault();
              const h = S.dataTransfer.getData("text/plain");
              h && h.split(",").forEach((p) => {
                if (p) {
                  const y = p.trim(), j = l.images.find(
                    (k) => String(k.id) === y
                  );
                  ie.getState().addToBucket(g.id, y, j);
                }
              });
            },
            children: [
              g.label,
              "  (",
              ((x = n[g.id]) == null ? void 0 : x.length) || 0,
              ")"
            ]
          },
          g.id
        );
      }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-light-table__add-tab-btn",
          onClick: m,
          title: "Add Tab",
          style: {
            background: "none",
            border: "none",
            color: "var(--meld-text-secondary, #9ca3af)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            padding: "0 8px"
          },
          children: /* @__PURE__ */ s.jsx(Ps, { size: 16 })
        }
      ),
      /* @__PURE__ */ s.jsx("div", { style: { flex: 1 } }),
      /* @__PURE__ */ s.jsxs(
        "button",
        {
          type: "button",
          className: "meld-light-table__clear-btn",
          onClick: () => d(!0),
          title: "Clear All Tabs",
          children: [
            /* @__PURE__ */ s.jsx(Zp, { size: 14 }),
            /* @__PURE__ */ s.jsx("span", { children: "Clear All" })
          ]
        }
      ),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-light-table__close-btn",
          onClick: () => r(!1),
          title: "Close Light Table",
          style: {
            background: "none",
            border: "none",
            color: "var(--meld-text-secondary, #9ca3af)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            padding: "0 8px",
            marginLeft: "8px"
          },
          children: /* @__PURE__ */ s.jsx(xe, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-light-table__content", children: t.map((g) => /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-light-table__tab-panel",
        style: { display: a === g.id ? "block" : "none" },
        children: /* @__PURE__ */ s.jsx(wy, { config: g })
      },
      g.id
    )) }),
    c && /* @__PURE__ */ s.jsx(
      Wf,
      {
        message: "Are you sure you want to clear all items in all tabs?",
        onConfirm: v,
        onCancel: () => d(!1)
      }
    ),
    /* @__PURE__ */ s.jsx(xy, {})
  ] });
  return ge.createPortal(w, i);
}, $f = () => {
  const { state: e, refreshFavorites: t } = _e(), [n, r] = f.useState(!1), [l, a] = f.useState(null), [o, i] = f.useState("info"), [c, d] = f.useState(null), [m, v] = f.useState(""), [w, _] = f.useState("");
  f.useEffect(() => {
    if (l) {
      const u = setTimeout(() => a(null), 3e3);
      return () => clearTimeout(u);
    }
  }, [l]);
  const g = f.useCallback(
    async (u, p, y) => {
      u.stopPropagation();
      const j = `Are you sure you want to delete the favorite "${y}"?`;
      if (window.confirm(j))
        try {
          await bc(p), await t();
        } catch (k) {
          re.error("Failed to delete favorite", k);
        }
    },
    [t]
  ), x = f.useCallback(
    (u, p) => {
      u.stopPropagation(), d(p), v(p.name), _(p.query);
    },
    []
  ), S = f.useCallback(async () => {
    if (!(!c || !m.trim() || !w.trim()))
      try {
        r(!0), await jg(
          c.id,
          m,
          w
        ), await t(), d(null);
      } catch (u) {
        re.error("Failed to update favorite", u), a("Failed to update favorite."), i("error");
      } finally {
        r(!1);
      }
  }, [c, m, w, t]), h = f.useCallback(async () => {
    if (!e.searchQuery || n) return;
    if (e.favorites.some(
      (p) => p.query === e.searchQuery
    )) {
      const p = e.favorites.find((y) => y.query === e.searchQuery);
      if (p) {
        r(!0);
        try {
          await bc(p.id), await t();
        } catch (y) {
          re.error("Failed to delete favorite:", y);
        } finally {
          r(!1);
        }
      }
      return;
    }
    r(!0);
    try {
      await Sg(e.searchQuery, e.searchQuery), await t();
    } catch (p) {
      re.error("Failed to save favorite:", p);
    } finally {
      r(!1);
    }
  }, [e.searchQuery, e.favorites, n, t]);
  return {
    isSaving: n,
    toastMessage: l,
    toastType: o,
    editingFavorite: c,
    setEditingFavorite: d,
    editFavoriteName: m,
    setEditFavoriteName: v,
    editFavoriteQuery: w,
    setEditFavoriteQuery: _,
    handleDeleteFavorite: g,
    handleEditFavorite: x,
    handleSaveEditFavorite: S,
    handleSaveFavorite: h,
    setToastMessage: (u, p = "info") => {
      a(u), i(p);
    }
  };
}, Uf = ({
  fav: e,
  onSelect: t,
  onEdit: n,
  onDelete: r
}) => {
  const [l, a] = f.useState(!1), [o, i] = f.useState(!1), [c, d] = f.useState(!1);
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: l ? "var(--comfy-menu-bg, #333)" : "var(--comfy-input-bg, #2a2a2a)",
        border: "1px solid",
        borderColor: l ? "var(--meld-accent-color)" : "var(--comfy-menu-border, #333)",
        borderRadius: "6px",
        padding: "8px 12px",
        cursor: "pointer",
        transition: "all 0.2s",
        color: "var(--meld-text-color)",
        fontSize: "13px",
        gap: "10px"
      },
      onClick: () => t(e.query),
      onMouseEnter: () => a(!0),
      onMouseLeave: () => a(!1),
      children: [
        /* @__PURE__ */ s.jsxs(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              minWidth: 0,
              flex: 1
            },
            children: [
              /* @__PURE__ */ s.jsx(
                "span",
                {
                  style: {
                    fontWeight: "bold",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  },
                  children: e.name
                }
              ),
              e.name !== e.query && /* @__PURE__ */ s.jsx(
                "span",
                {
                  style: {
                    fontSize: "10px",
                    color: "var(--meld-text-secondary)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    fontFamily: "monospace"
                  },
                  children: e.query
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "4px",
              flexShrink: 0
            },
            children: [
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  onClick: (m) => n(m, e),
                  style: {
                    background: "none",
                    border: "none",
                    color: o ? "var(--meld-accent-color)" : "var(--meld-text-secondary)",
                    backgroundColor: o ? "var(--comfy-input-bg-active, rgba(68, 136, 255, 0.1))" : "transparent",
                    padding: "6px",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    borderRadius: "4px",
                    transition: "all 0.2s"
                  },
                  onMouseEnter: () => i(!0),
                  onMouseLeave: () => i(!1),
                  title: "Edit favorite",
                  children: /* @__PURE__ */ s.jsx(sf, { size: 14 })
                }
              ),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  onClick: (m) => r(m, e.id, e.name),
                  style: {
                    background: "none",
                    border: "none",
                    color: c ? "var(--meld-danger-color)" : "var(--meld-text-secondary)",
                    backgroundColor: c ? "var(--comfy-input-bg-active, rgba(255,0,0,0.1))" : "transparent",
                    padding: "6px",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    borderRadius: "4px",
                    transition: "all 0.2s"
                  },
                  onMouseEnter: () => d(!0),
                  onMouseLeave: () => d(!1),
                  title: "Delete favorite",
                  children: /* @__PURE__ */ s.jsx($t, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, ky = ({
  anchorRect: e,
  onClose: t,
  onSelect: n
}) => {
  const { state: r } = _e(), {
    isSaving: l,
    toastMessage: a,
    editingFavorite: o,
    setEditingFavorite: i,
    editFavoriteName: c,
    setEditFavoriteName: d,
    editFavoriteQuery: m,
    setEditFavoriteQuery: v,
    handleDeleteFavorite: w,
    handleEditFavorite: _,
    handleSaveEditFavorite: g
  } = $f(), [x, S] = f.useState({ top: 0, left: 0 }), h = f.useRef(null), u = f.useRef(null);
  return et({
    onEscape: () => {
      o ? i(null) : t();
    },
    enabled: !0
  }), Jr({
    enabled: !!e && !o,
    insideRefs: [h],
    onOutside: () => t()
  }), f.useEffect(() => {
    if (e) {
      let j = e.left;
      const k = e.bottom + 5;
      j + 300 > window.innerWidth - 10 && (j = window.innerWidth - 300 - 10), j < 10 && (j = 10), S({ top: k, left: j });
    }
  }, [e]), f.useEffect(() => {
    o && u.current && u.current.focus();
  }, [o]), e ? ge.createPortal(
    /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs(
        "div",
        {
          ref: h,
          className: "meld-favorites-context-menu",
          style: {
            position: "fixed",
            top: x.top,
            left: x.left,
            width: "300px",
            maxHeight: "400px",
            backgroundColor: "var(--comfy-menu-bg, #222)",
            border: "1px solid var(--comfy-menu-border, #444)",
            borderRadius: "8px",
            boxShadow: "0 8px 24px var(--comfy-menu-shadow, rgba(0,0,0,0.5))",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden"
          },
          children: [
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                style: {
                  padding: "12px",
                  borderBottom: "1px solid var(--comfy-menu-border, #333)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "var(--comfy-input-bg-active, rgba(255, 255, 255, 0.02))"
                },
                children: [
                  /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontWeight: "bold",
                        fontSize: "14px",
                        color: "var(--meld-text-color)"
                      },
                      children: [
                        /* @__PURE__ */ s.jsx(
                          ar,
                          {
                            size: 14,
                            color: "var(--brand-yellow, #ffd700)",
                            fill: "var(--brand-yellow, #ffd700)"
                          }
                        ),
                        "Favorites"
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      style: { fontSize: "12px", color: "var(--meld-text-secondary)" },
                      children: [
                        r.favorites.length,
                        " items"
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ s.jsx(
              "div",
              {
                style: {
                  overflowY: "auto",
                  padding: "8px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  backgroundColor: "var(--comfy-input-bg, #1a1a1a)"
                },
                children: r.favorites.map((p) => /* @__PURE__ */ s.jsx(
                  Uf,
                  {
                    fav: p,
                    onSelect: (y) => {
                      n(y), t();
                    },
                    onEdit: _,
                    onDelete: w
                  },
                  p.id
                ))
              }
            ),
            a && /* @__PURE__ */ s.jsx(
              "div",
              {
                style: {
                  padding: "8px 12px",
                  backgroundColor: "var(--comfy-menu-bg, #333)",
                  borderTop: "1px solid var(--comfy-menu-border, #444)",
                  color: "var(--meld-success-color)",
                  fontSize: "12px",
                  fontWeight: "bold",
                  textAlign: "center"
                },
                children: a
              }
            )
          ]
        }
      ),
      o && /* @__PURE__ */ s.jsx(
        "div",
        {
          className: "meld-modal-overlay meld-favorites-edit-modal-overlay",
          onMouseDown: (p) => {
            p.target === p.currentTarget && i(null);
          },
          children: /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--small",
              onClick: (p) => p.stopPropagation(),
              children: [
                /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ s.jsxs(
                    "h2",
                    {
                      style: { display: "flex", alignItems: "center", gap: "10px" },
                      children: [
                        /* @__PURE__ */ s.jsx(ar, { size: 20, color: "var(--meld-accent-color)" }),
                        "Edit Favorite"
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => i(null),
                      children: /* @__PURE__ */ s.jsx(xe, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                      padding: "8px 0"
                    },
                    children: [
                      /* @__PURE__ */ s.jsxs(
                        "div",
                        {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "6px"
                          },
                          children: [
                            /* @__PURE__ */ s.jsx(
                              "label",
                              {
                                htmlFor: "edit-favorite-name-ctx",
                                style: {
                                  fontSize: "12px",
                                  fontWeight: "bold",
                                  color: "var(--meld-text-secondary)"
                                },
                                children: "Name"
                              }
                            ),
                            /* @__PURE__ */ s.jsx(
                              "input",
                              {
                                id: "edit-favorite-name-ctx",
                                ref: u,
                                type: "text",
                                value: c,
                                onChange: (p) => d(p.target.value),
                                placeholder: "Favorite Name",
                                style: {
                                  backgroundColor: "var(--comfy-input-bg, #1a1a1a)",
                                  border: "1px solid var(--comfy-menu-border, #333)",
                                  borderRadius: "4px",
                                  color: "var(--meld-text-color)",
                                  padding: "8px 12px",
                                  fontSize: "14px",
                                  outline: "none"
                                },
                                onKeyDown: (p) => {
                                  p.key === "Enter" && g(), p.key === "Escape" && i(null);
                                }
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ s.jsxs(
                        "div",
                        {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "6px"
                          },
                          children: [
                            /* @__PURE__ */ s.jsx(
                              "label",
                              {
                                htmlFor: "edit-favorite-query-ctx",
                                style: {
                                  fontSize: "12px",
                                  fontWeight: "bold",
                                  color: "var(--meld-text-secondary)"
                                },
                                children: "Search Query"
                              }
                            ),
                            /* @__PURE__ */ s.jsx(
                              "textarea",
                              {
                                id: "edit-favorite-query-ctx",
                                value: m,
                                onChange: (p) => v(p.target.value),
                                placeholder: "Search Query",
                                rows: 3,
                                style: {
                                  backgroundColor: "var(--comfy-input-bg, #1a1a1a)",
                                  border: "1px solid var(--comfy-menu-border, #333)",
                                  borderRadius: "4px",
                                  color: "var(--meld-text-color)",
                                  padding: "8px 12px",
                                  fontSize: "13px",
                                  fontFamily: "monospace",
                                  outline: "none",
                                  resize: "vertical"
                                },
                                onKeyDown: (p) => {
                                  p.key === "Enter" && !p.shiftKey && (p.preventDefault(), g()), p.key === "Escape" && i(null);
                                }
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                ) }),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-footer", children: [
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-secondary",
                      onClick: () => i(null),
                      children: "Cancel"
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-primary",
                      onClick: g,
                      disabled: l || !c.trim() || !m.trim(),
                      children: l ? "Saving..." : "Save Changes"
                    }
                  )
                ] })
              ]
            }
          )
        }
      )
    ] }),
    document.fullscreenElement || document.body
  ) : null;
}, Tl = (e) => {
  const t = [];
  let n = "", r = !1;
  for (let l = 0; l < e.length; l++) {
    const a = e[l];
    if (a === '"')
      r = !r, n += a;
    else if (a === " " && !r)
      for (t.push(n), n = ""; l + 1 < e.length && e[l + 1] === " "; )
        l++;
    else
      n += a;
  }
  return t.push(n), t;
}, Sy = () => {
  const { state: e, dispatch: t, updateSetting: n } = _e(), [r, l] = f.useState(e.searchQuery), [a, o] = f.useState([]), [i, c] = f.useState(!1), [d, m] = f.useState([]), [v, w] = f.useState([]), _ = e.settings["search.show_all_keywords"], [g, x] = f.useState(-1), [S, h] = f.useState(null), u = f.useRef(null), p = f.useRef(e.searchQuery), y = f.useCallback(async () => {
    if (v.length > 0) return;
    const F = await xg();
    w(F);
  }, [v.length]);
  f.useEffect(() => {
    _g().then((F) => {
      h(F);
    }), _ && y();
  }, [y, _]);
  const j = f.useMemo(() => {
    if (!S) return null;
    const F = S.all_prefixes.join("|");
    return new RegExp(`^[-!]?(${F}):(.*)$`, "i");
  }, [S]), k = f.useCallback(() => {
    const F = !_;
    F && y(), n("search.show_all_keywords", F);
  }, [_, y, n]), b = r !== p.current;
  f.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      m([]);
      return;
    }
    wg().then((F) => {
      m(F);
    });
  }, [e.settings["search.quick_suggestions"]]), f.useEffect(() => {
    l(e.searchQuery), p.current = e.searchQuery;
  }, [e.searchQuery]), f.useEffect(() => {
    var F;
    (F = u.current) == null || F.focus();
  }, []);
  const I = f.useCallback(
    (F, P = !0) => {
      p.current !== F && (re.log("SearchBar: triggering search", { query: F }), t({ type: "SET_SEARCH_QUERY", payload: F }), P && c(!1), p.current = F);
    },
    [t]
  );
  f.useEffect(() => {
    const F = setTimeout(async () => {
      if (r === p.current)
        return;
      if (!e.settings["search.input_suggest"] || !j) {
        o([]), c(!1);
        return;
      }
      const P = Tl(r), C = P[P.length - 1];
      if (C) {
        const L = C.match(j);
        if (L) {
          const V = L[1].toLowerCase();
          let E = L[2];
          E.startsWith('"') && (E = E.substring(1)), E.endsWith('"') && (E = E.substring(0, E.length - 1));
          const W = await vg(E, V);
          o(W), c(W.length > 0), x(-1);
        } else {
          const V = C.replace(/^([-!])/, "").toLowerCase();
          if (V && S) {
            const E = S.all_prefixes.filter((W) => W.startsWith(V)).map((W) => ({
              type: W,
              value: "",
              count: 0
            }));
            if (E.length > 0) {
              o(E), c(!0), x(-1);
              return;
            }
          }
          o([]), c(!1);
        }
      } else
        o([]), c(!1);
    }, 300);
    return () => clearTimeout(F);
  }, [
    r,
    e.settings["search.input_suggest"],
    j,
    S
  ]);
  const O = f.useCallback(
    (F) => {
      var G;
      const P = Tl(r), L = (P.pop() || "").match(/^([-!])/), V = L ? L[1] : "", W = ((S == null ? void 0 : S.no_quote_prefixes) || []).includes(F.type);
      if (F.value === "") {
        const A = `${[...P, `${V}${F.type}:`].join(" ").trim()}`;
        l(A);
      } else {
        const A = W ? F.value : `"${F.value}"`, q = `${[
          ...P,
          `${V}${F.type}:${A}`
        ].join(" ").trim()} `;
        l(q), o([]), c(!1);
      }
      (G = u.current) == null || G.focus();
    },
    [r, S]
  ), R = (F) => {
    if (F.key === "Enter")
      i && g >= 0 ? O(a[g]) : I(r);
    else if (F.key === "Tab") {
      if (i && a.length > 0) {
        const P = g >= 0 ? g : 0;
        O(a[P]), F.preventDefault();
      }
    } else F.key === "ArrowDown" ? i && (x((P) => Math.min(P + 1, a.length - 1)), F.preventDefault()) : F.key === "ArrowUp" ? i && (x((P) => Math.max(P - 1, -1)), F.preventDefault()) : F.key === "Escape" && c(!1);
  }, D = f.useCallback(() => {
    l(""), I("");
  }, [I]), U = f.useCallback(
    (F, P, C = !1) => {
      var pe;
      const L = Tl(r), V = L[L.length - 1] || "";
      let E = !1;
      const W = V.replace(/^([-!])/, "").toLowerCase();
      W && F.toLowerCase().startsWith(W) && (E = !0);
      const G = V.match(/^([-!])/), A = E && G ? G[1] : "";
      if (E && L.pop(), C) {
        const te = [...L, `${A}${F}:`].filter(Boolean).join(" ");
        l(te), (pe = u.current) == null || pe.focus();
        return;
      }
      const ae = ((S == null ? void 0 : S.no_quote_prefixes) || []).includes(F) ? P : `"${P}"`, ve = `${A}${F}:${ae}`, ee = [...L, ve].filter(Boolean).join(" ");
      l(ee), I(ee);
    },
    [r, I, S]
  ), Z = f.useCallback(
    (F) => {
      l(F), F || I("");
    },
    [I]
  ), M = f.useCallback(() => {
    if (r === p.current || !j)
      return;
    const F = Tl(r), P = F[F.length - 1];
    if (!P) return;
    const C = !!P.match(j), L = P.replace(/^([-!])/, "").toLowerCase(), V = L && (S == null ? void 0 : S.all_prefixes.some((E) => E.startsWith(L)));
    (C || V) && c(!0);
  }, [r, j, S]), K = f.useCallback(() => {
    setTimeout(() => c(!1), 200);
  }, []);
  return {
    inputValue: r,
    setInputValue: l,
    suggestions: a,
    showSuggestions: i,
    setShowSuggestions: c,
    searchSuggestions: d,
    allKeywords: v,
    showAllKeywords: _,
    toggleShowAllKeywords: k,
    selectedIndex: g,
    setSelectedIndex: x,
    inputRef: u,
    isQueryChanged: b,
    handleSearch: I,
    handleKeyDown: R,
    applySuggestion: O,
    clearSearch: D,
    applySearchSuggestion: U,
    handleInputChange: Z,
    handleInputFocus: M,
    handleInputBlur: K
  };
}, Dc = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ s.jsx(dr, { size: 12 });
    case "model":
      return /* @__PURE__ */ s.jsx(Tp, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ s.jsx(Jp, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ s.jsx(Lp, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ s.jsx(nf, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ s.jsx(tf, { size: 12 });
    case "note":
      return /* @__PURE__ */ s.jsx(zp, { size: 12 });
    case "sort":
      return /* @__PURE__ */ s.jsx(Ip, { size: 12 });
    default:
      return null;
  }
}, jy = ({
  showSuggestions: e,
  suggestions: t,
  selectedIndex: n,
  setSelectedIndex: r,
  applySuggestion: l,
  inputValue: a,
  searchQuery: o,
  searchSuggestions: i,
  allKeywords: c,
  showAllKeywords: d,
  toggleShowAllKeywords: m,
  applySearchSuggestion: v,
  favorites: w,
  onSelectFavorite: _,
  onEditFavorite: g,
  onDeleteFavorite: x
}) => {
  const S = (y, j, k) => /* @__PURE__ */ s.jsxs(
    "button",
    {
      type: "button",
      onClick: () => v(y.type, y.value, k === "all"),
      style: {
        display: "flex",
        alignItems: "center",
        gap: "6px",
        backgroundColor: "var(--comfy-input-bg, #2a2a2a)",
        border: "1px solid var(--comfy-menu-border, #333)",
        borderRadius: "16px",
        padding: "4px 12px",
        cursor: "pointer",
        transition: "all 0.2s",
        color: "var(--meld-text-color)",
        fontSize: "12px"
      },
      onMouseEnter: (b) => {
        b.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", b.currentTarget.style.borderColor = "var(--comfy-menu-border, #444)", b.currentTarget.style.color = "var(--meld-text-color)";
      },
      onMouseLeave: (b) => {
        b.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", b.currentTarget.style.borderColor = "var(--comfy-input-bg, #333)", b.currentTarget.style.color = "var(--meld-text-color)";
      },
      children: [
        /* @__PURE__ */ s.jsx(
          "span",
          {
            style: {
              display: "flex",
              color: "var(--meld-text-secondary)"
            },
            children: Dc(y.type)
          }
        ),
        /* @__PURE__ */ s.jsx(
          "span",
          {
            style: {
              color: "var(--comfy-input-text-active, #3b82f6)",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: "10px"
            },
            children: y.type
          }
        ),
        k !== "all" && /* @__PURE__ */ s.jsx(
          "span",
          {
            style: {
              maxWidth: "200px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: y.value
          }
        )
      ]
    },
    `${k}-${y.type}:${y.value}:${j}`
  ), h = () => !e || t.length === 0 ? null : /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "meld-search-suggestions",
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "var(--comfy-menu-bg, #222)",
        border: "1px solid var(--comfy-menu-border, #444)",
        borderRadius: "0 0 6px 6px",
        marginTop: "8px",
        maxHeight: "400px",
        overflowY: "auto",
        boxShadow: "0 8px 16px var(--comfy-menu-shadow, rgba(0,0,0,0.6))"
      },
      children: t.map((y, j) => /* @__PURE__ */ s.jsx(
        "div",
        {
          onMouseDown: (k) => {
            k.preventDefault(), l(y);
          },
          onMouseEnter: () => r(j),
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 14px",
            cursor: "pointer",
            backgroundColor: j === n ? "var(--comfy-input-bg-active, rgba(59, 130, 246, 0.15))" : "transparent",
            borderBottom: "1px solid var(--comfy-menu-border, #2a2a2a)",
            borderLeft: j === n ? "3px solid var(--meld-accent-color, #3b82f6)" : "3px solid transparent",
            transition: "all 0.1s ease-out"
          },
          children: /* @__PURE__ */ s.jsxs(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "10px",
                transform: j === n ? "translateX(2px)" : "none",
                transition: "transform 0.1s ease-out"
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "span",
                  {
                    style: {
                      color: j === n ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-secondary)",
                      display: "flex",
                      transition: "color 0.1s"
                    },
                    children: Dc(y.type)
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "span",
                  {
                    style: {
                      color: "var(--comfy-input-text-active, #3b82f6)",
                      fontSize: "10px",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      width: y.type.length > 8 ? "auto" : "60px",
                      flexShrink: 0
                    },
                    children: [
                      y.type,
                      ":"
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  "span",
                  {
                    style: {
                      color: y.value === _t ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                      fontSize: "14px",
                      fontWeight: y.value === _t ? "bold" : "normal"
                    },
                    children: y.value === _t ? y.type === "tag" ? `Untagged (${_t})` : `No ${y.type} (${_t})` : y.value
                  }
                )
              ]
            }
          )
        },
        `${y.type}:${y.value}`
      ))
    }
  ), u = () => i.length === 0 || a && a === o ? null : /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "meld-search-quick-suggestions",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        marginTop: "8px"
      },
      children: [
        /* @__PURE__ */ s.jsx(
          "div",
          {
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              padding: "0 4px"
            },
            children: i.map(
              (y, j) => S(y, j, "quick")
            )
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              borderTop: "1px solid var(--comfy-menu-border, #333)",
              paddingTop: "12px",
              marginTop: "4px"
            },
            children: [
              /* @__PURE__ */ s.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 4px"
                  },
                  children: [
                    /* @__PURE__ */ s.jsx(
                      "div",
                      {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          color: "var(--meld-text-secondary)",
                          fontSize: "11px",
                          fontWeight: "bold",
                          textTransform: "uppercase"
                        },
                        children: "All Keywords"
                      }
                    ),
                    /* @__PURE__ */ s.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: m,
                        style: {
                          backgroundColor: "transparent",
                          border: "none",
                          color: "var(--meld-accent-color, #3b82f6)",
                          fontSize: "11px",
                          cursor: "pointer"
                        },
                        children: d ? "Show Less" : "Show More"
                      }
                    )
                  ]
                }
              ),
              d && /* @__PURE__ */ s.jsx(
                "div",
                {
                  style: {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    padding: "0 4px",
                    maxHeight: "200px",
                    overflowY: "auto"
                  },
                  children: Array.from(new Set(c.map((y) => y.type))).map(
                    (y, j) => S({ type: y, value: "" }, j, "all")
                  )
                }
              )
            ]
          }
        )
      ]
    }
  ), p = () => w.length === 0 || a && a === o ? null : /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "meld-search-favorites",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "4px",
        marginTop: "8px",
        borderTop: "1px solid var(--comfy-menu-border, #333)",
        paddingTop: "12px"
      },
      children: [
        /* @__PURE__ */ s.jsxs(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "var(--meld-text-secondary)",
              fontSize: "11px",
              fontWeight: "bold",
              textTransform: "uppercase",
              paddingLeft: "4px",
              marginBottom: "4px"
            },
            children: [
              /* @__PURE__ */ s.jsx(ar, { size: 12, fill: "var(--meld-text-secondary)" }),
              "Favorites"
            ]
          }
        ),
        /* @__PURE__ */ s.jsx(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "4px"
            },
            children: w.map((y) => /* @__PURE__ */ s.jsx(
              Uf,
              {
                fav: y,
                onSelect: _,
                onEdit: g,
                onDelete: x
              },
              y.id
            ))
          }
        )
      ]
    }
  );
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      style: { position: "relative" },
      onMouseDown: (y) => {
        y.preventDefault();
      },
      children: [
        h(),
        u(),
        p()
      ]
    }
  );
}, by = () => {
  const { state: e } = _e(), {
    inputValue: t,
    setInputValue: n,
    suggestions: r,
    showSuggestions: l,
    searchSuggestions: a,
    allKeywords: o,
    showAllKeywords: i,
    toggleShowAllKeywords: c,
    selectedIndex: d,
    setSelectedIndex: m,
    inputRef: v,
    isQueryChanged: w,
    handleSearch: _,
    handleKeyDown: g,
    applySuggestion: x,
    clearSearch: S,
    applySearchSuggestion: h,
    handleInputChange: u,
    handleInputFocus: p,
    handleInputBlur: y
  } = Sy(), {
    isSaving: j,
    toastMessage: k,
    toastType: b,
    editingFavorite: I,
    setEditingFavorite: O,
    editFavoriteName: R,
    setEditFavoriteName: D,
    editFavoriteQuery: U,
    setEditFavoriteQuery: Z,
    handleDeleteFavorite: M,
    handleEditFavorite: K,
    handleSaveEditFavorite: F,
    handleSaveFavorite: P,
    setToastMessage: C
  } = $f(), L = async () => {
    if (e.favorites.some(
      (q) => q.query === e.searchQuery
    )) {
      C("This query is already in your favorites.", "error");
      return;
    }
    await P();
  };
  et({
    onEscape: () => O(null),
    enabled: !!I
  });
  const V = f.useRef(null), E = f.useRef(!1);
  f.useEffect(() => {
    I && V.current && V.current.focus();
  }, [I]);
  const W = (A) => {
    A.target === A.currentTarget && (E.current = !0);
  }, G = (A) => {
    A.target === A.currentTarget && E.current && O(null), E.current = !1;
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "meld-search-container",
      style: { display: "flex", flexDirection: "column", gap: "8px", flex: 1 },
      children: [
        /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-search-bar-wrapper",
            style: { position: "relative", width: "100%" },
            children: [
              k && /* @__PURE__ */ s.jsx(
                "div",
                {
                  className: "meld-search-toast",
                  style: {
                    position: "absolute",
                    top: "calc(100% + 8px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "var(--comfy-menu-bg, #333)",
                    color: "var(--meld-text-color)",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    fontSize: "12px",
                    whiteSpace: "pre-wrap",
                    textAlign: "center",
                    boxShadow: "0 4px 12px var(--comfy-menu-shadow, rgba(0,0,0,0.5))",
                    pointerEvents: "none",
                    fontWeight: "bold",
                    border: b === "error" ? "1px solid var(--brand-red, #ff4c4c)" : "1px solid var(--comfy-menu-border, #444)",
                    animation: "meld-fade-in-down 0.3s ease-out",
                    width: "max-content",
                    maxWidth: "300px"
                  },
                  children: k
                }
              ),
              /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-search-bar",
                  style: {
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "var(--comfy-input-bg, #1a1a1a)",
                    borderRadius: "6px",
                    padding: "6px 12px",
                    border: "1px solid var(--comfy-menu-border, #333)",
                    transition: "border-color 0.2s",
                    boxShadow: "inset 0 1px 3px var(--comfy-input-shadow, rgba(0,0,0,0.2))"
                  },
                  children: [
                    /* @__PURE__ */ s.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => _(t),
                        style: {
                          background: w ? "var(--meld-accent-color, #3b82f6)" : "var(--comfy-input-bg-active, rgba(255,255,255,0.03))",
                          border: w ? "1px solid var(--meld-border-color, rgba(255,255,255,0.2))" : "1px solid transparent",
                          cursor: "pointer",
                          padding: "6px 10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "10px",
                          flexShrink: 0,
                          borderRadius: "4px",
                          transition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                          boxShadow: w ? "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))" : "none"
                        },
                        onMouseEnter: (A) => {
                          A.currentTarget.style.transform = "translateY(-1px)", w ? (A.currentTarget.style.filter = "brightness(1.15)", A.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : A.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                        },
                        onMouseLeave: (A) => {
                          A.currentTarget.style.transform = "none", w ? (A.currentTarget.style.filter = "none", A.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : A.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                        },
                        onMouseDown: (A) => {
                          A.currentTarget.style.transform = "translateY(1px)", A.currentTarget.style.boxShadow = "none";
                        },
                        onMouseUp: (A) => {
                          A.currentTarget.style.transform = "translateY(-1px)";
                        },
                        title: "Search (Enter)",
                        children: [
                          /* @__PURE__ */ s.jsx(
                            Cn,
                            {
                              size: 16,
                              color: w ? "var(--meld-text-color, #fff)" : "var(--meld-text-secondary)",
                              style: {
                                transition: "color 0.2s",
                                filter: w ? "drop-shadow(0 1px 2px var(--meld-shadow-color, rgba(0,0,0,0.2)))" : "none"
                              }
                            }
                          ),
                          w && /* @__PURE__ */ s.jsx(
                            "span",
                            {
                              style: {
                                color: "var(--meld-text-color, #fff)",
                                fontSize: "12px",
                                fontWeight: "bold",
                                marginLeft: "6px",
                                textShadow: "0 1px 2px var(--meld-shadow-color, rgba(0,0,0,0.2))"
                              },
                              children: "Search"
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ s.jsx(
                      "input",
                      {
                        ref: v,
                        type: "text",
                        value: t,
                        onChange: (A) => u(A.target.value),
                        onKeyDown: g,
                        onBlur: y,
                        onFocus: p,
                        placeholder: "Search anything: prompts, tags, models, dates, or free keywords...",
                        style: {
                          flex: 1,
                          background: "none",
                          border: "none",
                          color: "var(--meld-text-color)",
                          outline: "none",
                          fontSize: "14px",
                          padding: "4px 0"
                        }
                      }
                    ),
                    e.searchQuery && /* @__PURE__ */ s.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: L,
                        disabled: j,
                        title: e.favorites.some((A) => A.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
                        style: {
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "2px",
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0,
                          marginRight: "4px"
                        },
                        children: /* @__PURE__ */ s.jsx(
                          ar,
                          {
                            size: 16,
                            color: e.favorites.some((A) => A.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((A) => A.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                          }
                        )
                      }
                    ),
                    t && /* @__PURE__ */ s.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: S,
                        style: {
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "2px",
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0
                        },
                        children: /* @__PURE__ */ s.jsx(xe, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ s.jsx(
                jy,
                {
                  showSuggestions: l,
                  suggestions: r,
                  selectedIndex: d,
                  setSelectedIndex: m,
                  applySuggestion: x,
                  inputValue: t,
                  searchQuery: e.searchQuery,
                  searchSuggestions: a,
                  allKeywords: o,
                  showAllKeywords: i,
                  toggleShowAllKeywords: c,
                  applySearchSuggestion: h,
                  favorites: e.favorites,
                  onSelectFavorite: (A) => {
                    n(A), _(A);
                  },
                  onEditFavorite: K,
                  onDeleteFavorite: M
                }
              )
            ]
          }
        ),
        I && ge.createPortal(
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-modal-overlay meld-search-edit-modal-overlay",
              onMouseDown: W,
              onMouseUp: G,
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-modal-content meld-modal-content--small",
                  onClick: (A) => A.stopPropagation(),
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                      /* @__PURE__ */ s.jsxs(
                        "h2",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ s.jsx(ar, { size: 20, color: "var(--meld-accent-color)" }),
                            "Edit Favorite"
                          ]
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-modal-close",
                          onClick: () => O(null),
                          children: /* @__PURE__ */ s.jsx(xe, { size: 20 })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsxs(
                      "div",
                      {
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          gap: "16px",
                          padding: "8px 0"
                        },
                        children: [
                          /* @__PURE__ */ s.jsxs(
                            "div",
                            {
                              style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "6px"
                              },
                              children: [
                                /* @__PURE__ */ s.jsx(
                                  "label",
                                  {
                                    htmlFor: "edit-favorite-name",
                                    style: {
                                      fontSize: "12px",
                                      fontWeight: "bold",
                                      color: "var(--meld-text-secondary)"
                                    },
                                    children: "Name"
                                  }
                                ),
                                /* @__PURE__ */ s.jsx(
                                  "input",
                                  {
                                    id: "edit-favorite-name",
                                    ref: V,
                                    type: "text",
                                    value: R,
                                    onChange: (A) => D(A.target.value),
                                    placeholder: "Favorite Name",
                                    style: {
                                      backgroundColor: "var(--comfy-input-bg, #1a1a1a)",
                                      border: "1px solid var(--comfy-menu-border, #333)",
                                      borderRadius: "4px",
                                      color: "var(--meld-text-color)",
                                      padding: "8px 12px",
                                      fontSize: "14px",
                                      outline: "none"
                                    },
                                    onKeyDown: (A) => {
                                      A.key === "Enter" && F(), A.key === "Escape" && O(null);
                                    }
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ s.jsxs(
                            "div",
                            {
                              style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "6px"
                              },
                              children: [
                                /* @__PURE__ */ s.jsx(
                                  "label",
                                  {
                                    htmlFor: "edit-favorite-query",
                                    style: {
                                      fontSize: "12px",
                                      fontWeight: "bold",
                                      color: "var(--meld-text-secondary)"
                                    },
                                    children: "Search Query"
                                  }
                                ),
                                /* @__PURE__ */ s.jsx(
                                  "textarea",
                                  {
                                    id: "edit-favorite-query",
                                    value: U,
                                    onChange: (A) => Z(A.target.value),
                                    placeholder: "Search Query",
                                    rows: 3,
                                    style: {
                                      backgroundColor: "var(--comfy-input-bg, #1a1a1a)",
                                      border: "1px solid var(--comfy-menu-border, #333)",
                                      borderRadius: "4px",
                                      color: "var(--meld-text-color)",
                                      padding: "8px 12px",
                                      fontSize: "13px",
                                      fontFamily: "monospace",
                                      outline: "none",
                                      resize: "vertical"
                                    },
                                    onKeyDown: (A) => {
                                      A.key === "Enter" && !A.shiftKey && (A.preventDefault(), F()), A.key === "Escape" && O(null);
                                    }
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-footer", children: [
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-secondary",
                          onClick: () => O(null),
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-primary",
                          onClick: F,
                          disabled: j || !R.trim() || !U.trim(),
                          children: j ? "Saving..." : "Save Changes"
                        }
                      )
                    ] })
                  ]
                }
              )
            }
          ),
          document.fullscreenElement || document.body
        )
      ]
    }
  );
}, Ey = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = f.useState([]), [l, a] = f.useState(!0), [o, i] = f.useState(""), [c, d] = f.useState(""), [m, v] = f.useState(!1), [w, _] = f.useState(null), [g, x] = f.useState(""), [S, h] = f.useState(!1), u = f.useRef(null), p = f.useCallback(async () => {
    a(!0);
    try {
      const D = await di();
      r(D);
    } catch (D) {
      console.error("Failed to fetch tags:", D);
    } finally {
      a(!1);
    }
  }, []);
  f.useEffect(() => {
    p();
  }, [p]), f.useEffect(() => {
    w !== null && u.current && (u.current.focus(), u.current.select());
  }, [w]);
  const y = async (D) => {
    D.preventDefault();
    const U = c.trim();
    if (!(!U || m)) {
      if (U.toLowerCase() === _t) {
        alert(
          `Tag name '${_t}' is reserved for search and cannot be used.`
        );
        return;
      }
      if (n.some((Z) => Z.name.toLowerCase() === U.toLowerCase())) {
        alert(`Tag "${U}" already exists.`);
        return;
      }
      v(!0);
      try {
        await Wg(U), d(""), await p();
      } catch (Z) {
        console.error("Failed to add tag:", Z);
      } finally {
        v(!1);
      }
    }
  }, j = async (D, U) => {
    if (confirm(`Are you sure you want to delete tag "${U}"?`))
      try {
        await $g(D), await p();
      } catch (Z) {
        console.error("Failed to delete tag:", Z);
      }
  }, k = (D) => {
    _(D.id), x(D.name);
  }, b = () => {
    _(null), x("");
  }, I = async (D) => {
    D.preventDefault();
    const U = g.trim();
    if (!U || w === null || S) return;
    if (U.toLowerCase() === _t) {
      alert(
        `Tag name '${_t}' is reserved for search and cannot be used.`
      );
      return;
    }
    const Z = n.find((M) => M.id === w);
    if (Z && Z.name === U) {
      b();
      return;
    }
    if (n.some(
      (M) => M.id !== w && M.name.toLowerCase() === U.toLowerCase()
    )) {
      alert(`Tag "${U}" already exists.`);
      return;
    }
    h(!0);
    try {
      await Ug(w, U), b(), await p();
    } catch (M) {
      console.error("Failed to rename tag:", M), alert(M instanceof Error ? M.message : "Failed to rename tag");
    } finally {
      h(!1);
    }
  }, O = (D) => {
    t(`tag:${D}`);
  }, R = f.useMemo(() => n.filter(
    (D) => D.name.toLowerCase().includes(o.toLowerCase())
  ), [n, o]);
  return /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(dr, { size: 16 }),
        /* @__PURE__ */ s.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ s.jsx(xe, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ s.jsxs("form", { className: "meld-tag-add-form", onSubmit: y, children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: c,
            onChange: (D) => d(D.target.value),
            disabled: m
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !c.trim() || m,
            children: [
              /* @__PURE__ */ s.jsx(Ps, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ s.jsx(Cn, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: o,
            onChange: (D) => i(D.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-list", children: R.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : R.map((D) => /* @__PURE__ */ s.jsx("div", { className: "meld-tag-item", children: w === D.id ? /* @__PURE__ */ s.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: I,
          children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "text",
                ref: u,
                className: "meld-tag-rename-input",
                value: g,
                onChange: (U) => x(U.target.value),
                onKeyDown: (U) => U.key === "Escape" && b()
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: S || !g.trim(),
                children: /* @__PURE__ */ s.jsx(si, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: b,
                disabled: S,
                children: /* @__PURE__ */ s.jsx(xe, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("span", { className: "meld-tag-item__name", children: D.name }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => O(D.name),
              children: /* @__PURE__ */ s.jsx(Cn, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => k(D),
              children: /* @__PURE__ */ s.jsx(sf, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => j(D.id, D.name),
              children: /* @__PURE__ */ s.jsx($t, { size: 14 })
            }
          )
        ] })
      ] }) }, D.id)) })
    ] })
  ] });
}, ua = 56, Vf = (e, t) => {
  const n = f.useCallback(
    (r) => {
      const l = t["gallery.lineage_max_depth"];
      if (l === 0) return [];
      if (r.ancestors && r.ancestors.length > 0)
        return r.ancestors.slice(0, l).map((d) => ({
          id: d.id,
          imgSrc: ht(d, ua)
        }));
      const a = r.parent_id;
      if (!a || !r.parent_filename) return [];
      const o = e.find((d) => d.id === a);
      let i = null;
      if (o ? i = ht(o, ua) : i = ht(
        {
          filename: r.parent_filename,
          subfolder: r.parent_subfolder || "",
          type: r.parent_type
        },
        ua
      ), !i) return [];
      const c = {
        id: a || null,
        imgSrc: i
      };
      if (o && l > 1) {
        const d = n(o);
        return [c, ...d].slice(0, l);
      }
      return [c];
    },
    [t, e]
  );
  return { getParentChain: n };
};
function Cy(e) {
  const { ids: t, index: n, loopEnabled: r, hasMore: l } = e;
  if (t.length === 0 || n < 0 || n >= t.length)
    return { prevId: null, nextId: null };
  const a = n === 0, i = n === t.length - 1 ? l || !r ? null : t[0] : t[n + 1];
  return { prevId: a ? l || !r ? null : t[t.length - 1] : t[n - 1], nextId: i };
}
const Ny = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  var il;
  const { viewerImageId: l, images: a, viewerMode: o, lineageImages: i, settings: c } = e, {
    handleEditTags: d,
    handleEditNotes: m,
    handleRestore: v,
    handleUpdateUserNotes: w,
    handleRestoreWorkflow: _,
    handleAddUnifiedLoader: g,
    handleSendToWorkflow: x,
    handleRunWithWorkflow: S,
    handleRunWithMask: h,
    handleEditSource: u
  } = Rs(e, t), { getParentChain: p } = Vf(a, c), [y, j] = f.useState(!1), [k, b] = f.useState(!1), [I, O] = f.useState(
    c["viewer.show_details_by_default"]
  ), [R, D] = f.useState(null), U = R ?? c["viewer.show_thumbnails"], [Z, M] = f.useState(!1), [K, F] = f.useState(!1), [P, C] = f.useState(null), [L, V] = f.useState(null), [E, W] = f.useState(
    null
  ), G = f.useRef(null), A = f.useRef(!0);
  f.useEffect(() => (A.current = !0, () => {
    A.current = !1;
  }), []);
  const q = f.useRef(l);
  f.useEffect(() => {
    q.current = l;
  }, [l]);
  const B = f.useMemo(() => {
    const J = e.searchQuery.trim() !== "";
    return o === "lighttable" && e.viewerLightTableSlotId ? (ie.getState().buckets[e.viewerLightTableSlotId] || []).map((z) => {
      const H = Number.parseInt(z, 10);
      return a.find((ne) => ne.id === H) || i.find((ne) => ne.id === H) || null;
    }).filter((z) => z !== null) : o === "lineage" ? i : a.filter(
      (T) => T.exists !== !1 && (c["gallery.show_parent_images"] || J || !T.has_children)
    );
  }, [
    o,
    e.viewerLightTableSlotId,
    i,
    a,
    c,
    e.searchQuery
  ]), ae = l === null ? -1 : B.findIndex((J) => J.id === l), ee = (o === "lineage" && i.length > 0 ? i : o === "lighttable" ? B : a).find((J) => J.id === l) || (l === ((il = e.viewerFallbackImage) == null ? void 0 : il.id) ? e.viewerFallbackImage : void 0), pe = f.useCallback(
    async (J = !1) => {
      if (!ee) return;
      const T = y ? c["fullscreen.delete_mode"] : c["viewer.delete_mode"];
      if (!J && T === "confirm") {
        t({
          type: "OPEN_MODAL",
          payload: {
            type: "delete_confirm",
            imageIds: [ee.id],
            hasLineage: !!(ee.parent_id || ee.has_children),
            isPermanent: e.viewScope === "trash"
          }
        });
        return;
      }
      try {
        const N = e.viewScope === "trash", Q = /* @__PURE__ */ new Set([ee.id]);
        if (T === "lineage") {
          const z = await so(ee.id);
          for (const H of z)
            Q.add(H.id);
        }
        if (!A.current || q.current === null) return;
        if (B.length > Q.size) {
          let z = !1;
          for (let H = ae + 1; H < B.length; H++)
            if (!Q.has(B[H].id)) {
              t({
                type: "OPEN_VIEWER",
                payload: {
                  id: B[H].id,
                  mode: o,
                  // Preserve slotId in lighttable mode to stay within the slot
                  ...o === "lighttable" && e.viewerLightTableSlotId ? { slotId: e.viewerLightTableSlotId } : {}
                }
              }), z = !0;
              break;
            }
          if (!z) {
            for (let H = ae - 1; H >= 0; H--)
              if (!Q.has(B[H].id)) {
                t({
                  type: "OPEN_VIEWER",
                  payload: {
                    id: B[H].id,
                    mode: o,
                    // Preserve slotId in lighttable mode to stay within the slot
                    ...o === "lighttable" && e.viewerLightTableSlotId ? { slotId: e.viewerLightTableSlotId } : {}
                  }
                }), z = !0;
                break;
              }
          }
          z || t({ type: "CLOSE_VIEWER" });
        } else
          t({ type: "CLOSE_VIEWER" });
        if (await co(
          Array.from(Q),
          N
        ), !N) {
          const z = B.filter(
            (H) => Q.has(H.id)
          );
          C(z), V(null);
        }
        t({ type: "REMOVE_IMAGES", payload: Array.from(Q) });
      } catch (N) {
        t({
          type: "SET_ERROR",
          payload: N instanceof Error ? N.message : String(N)
        });
      }
    },
    [
      ee,
      y,
      c,
      e.viewScope,
      B,
      ae,
      o,
      t,
      e.viewerLightTableSlotId
    ]
  ), te = f.useCallback(() => {
    ee && d(ee);
  }, [ee, d]), We = f.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: y } });
  }, [t, y]), tt = f.useCallback(async () => {
    const J = y ? c["fullscreen.loop"] : c["viewer.loop"];
    if (ae === 0 && o === "gallery" && e.pagination.hasMore && !K && J) {
      F(!0);
      try {
        const T = e.pagination.limit, N = e.pagination.total, Q = Math.max(0, N - T), z = await Ql(
          Q,
          T,
          e.searchQuery
        );
        if (!A.current || (t({ type: "APPEND_IMAGES", payload: z }), q.current === null)) return;
        if (z.images.length > 0) {
          const H = z.images[z.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: H.id, mode: "gallery" }
          });
        }
      } catch (T) {
        console.error("Failed to jump to end:", T);
      } finally {
        F(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: y } });
  }, [
    ae,
    o,
    e.pagination,
    e.searchQuery,
    c,
    t,
    K,
    y
  ]), bt = f.useCallback(
    (J) => {
      J && "stopPropagation" in J && J.stopPropagation();
      const T = G.current;
      T && (document.fullscreenElement ? document.exitFullscreen() : T.requestFullscreen().catch((N) => {
        console.error(
          `Error attempting to enable full-screen mode: ${N.message}`
        );
      }));
    },
    []
  ), Vt = f.useCallback(async () => {
    ee && (B.length > 1 ? We() : t({ type: "CLOSE_VIEWER" }), await v(ee));
  }, [ee, B.length, We, v, t]), sl = f.useCallback(async () => {
    if (!P || P.length === 0) return;
    const J = P.map((N) => N.id), T = J[0];
    try {
      const N = await ii(J);
      if (!A.current) return;
      if (t({ type: "ADD_IMAGES", payload: P }), e.viewScope === "trash") {
        const Q = N.restored_ids || J;
        t({ type: "REMOVE_IMAGES", payload: Q });
      }
      if (C(null), !A.current) return;
      t({
        type: "OPEN_VIEWER",
        payload: {
          id: T,
          mode: o,
          // Preserve slotId in lighttable mode to stay within the slot
          ...o === "lighttable" && e.viewerLightTableSlotId ? { slotId: e.viewerLightTableSlotId } : {}
        }
      });
    } catch (N) {
      t({
        type: "SET_ERROR",
        payload: N instanceof Error ? N.message : String(N)
      });
    }
  }, [
    P,
    t,
    o,
    e.viewScope,
    e.viewerLightTableSlotId
  ]), mn = f.useCallback(async () => {
    if (P && P.length > 0)
      await sl();
    else if (L && L.type === "tags") {
      const { imageId: J, addTags: T, removeTags: N } = L;
      try {
        await ao([J], T, N);
        const Q = (o === "lineage" ? i : a).find((z) => z.id === J);
        if (Q) {
          const z = [...Q.tags];
          for (const ne of T)
            z.includes(ne) || z.push(ne);
          const H = z.filter((ne) => !N.includes(ne));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...Q, tags: H }
          }), t({
            type: "OPEN_VIEWER",
            payload: { id: J, mode: o }
          });
        }
        V(null);
      } catch (Q) {
        t({
          type: "SET_ERROR",
          payload: Q instanceof Error ? Q.message : String(Q)
        });
      }
    }
  }, [
    P,
    L,
    sl,
    a,
    i,
    o,
    t
  ]), al = f.useCallback(
    async (J) => {
      if (!J || !ee) return;
      const T = ee.id, N = [...ee.tags], Q = ty(J, ee), {
        addTags: z,
        removeTags: H,
        isDeleted: ne,
        moveNext: me,
        movePrev: ue,
        sendToLtSlot: he
      } = Q;
      if (he) {
        const oe = ie.getState(), Ee = oe.slots.find(
          (je) => je.id.toLowerCase() === he.toLowerCase() || je.label.toLowerCase() === he.toLowerCase()
        );
        if (Ee) {
          if (oe.addToBucket(Ee.id, String(T), ee), oe.showToast(`Sent to ${Ee.label}`), !ne) {
            if (B.length > 1) {
              let je = null;
              for (let nt = ae + 1; nt < B.length; nt++)
                if (B[nt].id !== T) {
                  je = B[nt].id;
                  break;
                }
              if (je === null) {
                for (let nt = ae - 1; nt >= 0; nt--)
                  if (B[nt].id !== T) {
                    je = B[nt].id;
                    break;
                  }
              }
              t(je !== null ? {
                type: "OPEN_VIEWER",
                payload: { id: je, mode: o }
              } : { type: "CLOSE_VIEWER" });
            } else
              t({ type: "CLOSE_VIEWER" });
            t({ type: "REMOVE_IMAGES", payload: [T] });
          }
        } else
          oe.showToast(
            `Error: Light Table slot "${he}" not found`,
            "error"
          ), console.warn(
            `Attempted to send to non-existent LT slot: ${he}`
          );
      }
      if (z.length > 0 || H.length > 0)
        try {
          await ao(
            [T],
            z,
            H
          );
          const oe = [...N];
          for (const je of z)
            oe.includes(je) || oe.push(je);
          const Ee = oe.filter((je) => !H.includes(je));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...ee, id: T, tags: Ee }
          }), V({
            type: "tags",
            imageId: T,
            addTags: [...H],
            removeTags: [...z]
          }), C(null);
        } catch (oe) {
          console.error("Failed to update tags via shortcut:", oe);
        }
      ne ? pe(!0) : me ? We() : ue && tt();
    },
    [
      ee,
      t,
      We,
      tt,
      pe,
      ae,
      B,
      o
    ]
  );
  f.useEffect(() => {
    const J = (N) => {
      const Q = N.target, z = Q.tagName === "INPUT" || Q.tagName === "TEXTAREA" || Q.isContentEditable;
      if (z && N.key !== "Escape") {
        N.key === "Enter" && (N.ctrlKey || N.metaKey) && N.preventDefault();
        return;
      }
      if (l === null || e.activeModal.type !== "none")
        return;
      const H = N.key === "Delete" || N.key === "Backspace", ne = N.key === "ArrowRight" || N.key === "ArrowLeft" || N.key === "ArrowDown" || N.key === "ArrowUp", me = [
        "f",
        "F",
        "i",
        "I",
        "t",
        "T",
        "r",
        "R",
        "Enter"
      ].includes(N.key), ue = N.key === "Escape", he = (N.ctrlKey || N.metaKey) && (N.key === "z" || N.key === "Z" || N.code === "KeyZ"), oe = /^[0-9]$/.test(N.key) && !N.ctrlKey && !N.metaKey && !N.altKey && N.code !== "KeyZ";
      if (H || ne || me || ue || he || oe)
        if (!z)
          N.preventDefault(), N.stopPropagation(), N.stopImmediatePropagation();
        else if (ue)
          N.preventDefault(), N.stopPropagation(), N.stopImmediatePropagation();
        else
          return;
      else
        return;
      if (N.key === "Escape")
        document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" });
      else if (N.key === "ArrowRight" || N.key === "ArrowDown")
        We();
      else if (N.key === "ArrowLeft" || N.key === "ArrowUp")
        tt();
      else if (N.key === "f" || N.key === "F" || N.key === "Enter")
        bt(N);
      else if (N.key === "i" || N.key === "I")
        O((Ee) => !Ee);
      else if (N.key === "t" || N.key === "T")
        te();
      else if ((N.key === "r" || N.key === "R") && e.viewScope === "trash")
        Vt();
      else if (N.key === "Delete")
        pe();
      else if ((N.ctrlKey || N.metaKey) && (N.key === "z" || N.key === "Z"))
        mn();
      else if (oe && !z) {
        const Ee = `viewer.shortcut.${N.key}`, je = c[Ee];
        typeof je == "string" && je && (W(N.key), setTimeout(() => {
          A.current && W(null);
        }, 500), al(je));
      }
    };
    window.addEventListener("keydown", J, { capture: !0 });
    const T = () => {
      const N = !!document.fullscreenElement;
      j(N), O(N ? c["fullscreen.show_details_by_default"] : c["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", T), () => {
      window.removeEventListener("keydown", J, { capture: !0 }), document.removeEventListener("fullscreenchange", T);
    };
  }, [
    l,
    t,
    bt,
    We,
    tt,
    c,
    pe,
    e.activeModal.type,
    mn,
    te,
    Vt,
    e.viewScope,
    al
  ]), f.useEffect(() => {
    l !== null && r(l).catch((J) => {
      console.error("Failed to fetch full image details for viewer:", J);
    });
  }, [l, r]), f.useEffect(() => {
    o === "lineage" && l !== null && i.length === 0 && (M(!0), so(l).then((J) => {
      A.current && t({ type: "SET_LINEAGE", payload: J });
    }).catch((J) => {
      console.error("Failed to fetch lineage:", J);
    }).finally(() => {
      A.current && M(!1);
    }));
  }, [o, l, i.length, t]), f.useEffect(() => {
    o !== "gallery" || l === null || e.isLoading || !e.pagination.hasMore || ae !== -1 && ae >= B.length - 15 && n();
  }, [
    l,
    B.length,
    o,
    e.isLoading,
    e.pagination.hasMore,
    n,
    ae
  ]);
  const ol = f.useMemo(() => {
    if (!U || ae === -1) return [];
    const J = c["viewer.thumbnail_window_size"], T = Math.floor(J / 2);
    let N = Math.max(0, ae - T);
    const Q = Math.min(B.length, N + J);
    return Q === B.length && (N = Math.max(0, Q - J)), B.slice(N, Q).map((z, H) => ({
      img: z,
      absIndex: N + H
    }));
  }, [B, ae, c, U]), Os = f.useMemo(() => ee ? p(ee) : [], [ee, p]);
  return f.useEffect(() => {
    var J, T;
    if (l !== null) {
      if (U) {
        const N = document.querySelector(
          ".meld-viewer-thumbnail--active"
        );
        N && N.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((J = document.activeElement) == null ? void 0 : J.tagName) === "CANVAS" && document.activeElement.blur(), (T = G.current) == null || T.focus();
    }
  }, [l, U]), f.useEffect(() => {
    if (l === null || B.length === 0) return;
    const J = B.map((ne) => ne.id), T = J.indexOf(l);
    if (T === -1) return;
    const N = y ? c["fullscreen.loop"] : c["viewer.loop"], { prevId: Q, nextId: z } = Cy({
      ids: J,
      index: T,
      loopEnabled: N,
      hasMore: e.pagination.hasMore && o === "gallery"
    }), H = setTimeout(() => {
      const ne = [Q, z].filter(
        (me) => me !== null && me !== l
      );
      ne.length !== 0 && Promise.allSettled(ne.map((me) => r(me))).then(
        (me) => {
          for (const ue of me)
            ue.status === "rejected" && re.warn(
              "Prefetching adjacent image details failed",
              ue.reason
            );
        }
      );
    }, 50);
    return () => clearTimeout(H);
  }, [
    l,
    B,
    y,
    c,
    e.pagination.hasMore,
    o,
    r
  ]), f.useEffect(() => {
    if (l === null || B.length === 0) return;
    const J = B.findIndex(
      (z) => z.id === l
    );
    if (J === -1) return;
    const T = (z) => ci(z), N = [
      J + 1,
      J + 2,
      J - 1
    ], Q = setTimeout(() => {
      for (const z of N)
        if (z >= 0 && z < B.length) {
          const H = B[z], ne = new Image();
          ne.src = T(H);
        }
    }, 150);
    return () => clearTimeout(Q);
  }, [l, B]), {
    isFullscreen: y,
    showDetails: I,
    setShowDetails: O,
    showThumbnails: U,
    setShowThumbnailsOverride: D,
    isLoadingLineage: Z,
    isJumping: K,
    isMenuOpen: k,
    setIsMenuOpen: b,
    activeShortcutKey: E,
    lastDeletedImages: P,
    setLastDeletedImages: C,
    overlayRef: G,
    handleNext: We,
    handlePrevious: tt,
    handleDelete: pe,
    handleUpdateUserNotes: w,
    handleEditNotes: () => ee && m(ee),
    handleTagEdit: te,
    handleRestore: Vt,
    handleUndo: mn,
    handleRestoreWorkflow: async () => {
      if (!ee) return;
      await _(ee) && t({ type: "CLOSE_VIEWER" });
    },
    handleAddUnifiedLoader: async () => {
      if (!ee) return;
      await g(ee) && t({ type: "CLOSE_VIEWER" });
    },
    handleSendToWorkflow: () => {
      if (!ee) return;
      x(ee) && t({ type: "CLOSE_VIEWER" });
    },
    handleRunWithWorkflow: () => ee && S(ee),
    handleRunWithMask: (J) => ee && h(ee, J),
    handleEditSource: () => ee && u(ee),
    toggleFullscreen: bt,
    currentIndex: ae,
    currentThumbnails: B,
    image: ee,
    windowedThumbnails: ol,
    parentChain: Os
  };
}, mi = ({
  isMenuOpen: e,
  setIsMenuOpen: t,
  menuRef: n,
  settings: r,
  onAddUnifiedLoader: l,
  onRestoreWorkflow: a,
  onSendToWorkflow: o,
  onRunWithWorkflow: i,
  onRunWithMask: c,
  onEditSource: d,
  onEditTags: m,
  onEditNotes: v,
  onDelete: w,
  onRestore: _,
  showRestore: g,
  deleteLabel: x,
  showQuickShortcuts: S = !0,
  variant: h = "default",
  iconSize: u = 16,
  buttonClassName: p = ""
}) => {
  const [y, j] = f.useState("left");
  f.useEffect(() => {
    e && n.current && (n.current.getBoundingClientRect().left < 200 ? j("right") : j("left"));
  }, [e, n]);
  const k = (O) => {
    switch (O) {
      case "add_unified_loader":
        return l;
      case "restore_full_workflow":
        return a;
      case "send_to_workflow":
        return o;
      case "queue_workflow":
        return i;
      case "send_to_workflow_mask":
        return () => c("apply");
      case "queue_workflow_mask":
        return () => c("run");
      case "edit_source_image":
        return d;
      case "edit_tags":
        return m;
      case "edit_notes":
        return v;
      case "restore_image":
        return _;
      case "delete_or_trash":
        return w;
      default:
        return null;
    }
  }, b = [
    r["gallery.quick_shortcut.1"],
    r["gallery.quick_shortcut.2"],
    r["gallery.quick_shortcut.3"]
  ].filter((O) => O && O !== ""), I = [
    "meld-image-card__menu-container",
    h === "thumbnail_overlay_top_right" && "meld-image-card__menu-container--thumbnail-overlay"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsxs("div", { className: I, ref: n, children: [
    /* @__PURE__ */ s.jsx(
      "button",
      {
        type: "button",
        className: `meld-image-card__menu-btn ${p}`,
        onClick: (O) => {
          O.stopPropagation(), t(!e);
        },
        title: "Menu",
        children: /* @__PURE__ */ s.jsx(Gp, { size: u })
      }
    ),
    S && b.map((O, R) => {
      const D = Nf.find((M) => M.id === O);
      if (!D || !D.icon) return null;
      const U = D.icon, Z = k(O);
      return !Z || O === "restore_image" && !g ? null : /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: `meld-image-card__menu-btn ${p}`,
          onClick: (M) => {
            M.stopPropagation(), Z();
          },
          title: D.label,
          children: /* @__PURE__ */ s.jsx(U, { size: u })
        },
        `${O}-${R}`
      );
    }),
    e && /* @__PURE__ */ s.jsx(
      "div",
      {
        className: `meld-image-card__menu ${y === "right" ? "meld-image-card__menu--right" : ""}`,
        children: [
          {
            id: "add_unified_loader",
            label: "Add Unified Loader",
            icon: vf,
            handler: l
          },
          {
            id: "send_to_workflow",
            label: "Send to Workflow",
            icon: kf,
            handler: o
          },
          {
            id: "send_to_workflow_mask",
            label: "Send to Workflow (Mask)",
            icon: Sf,
            handler: () => c("apply")
          },
          {
            id: "queue_workflow",
            label: "Queue Workflow",
            icon: xf,
            handler: i
          },
          {
            id: "queue_workflow_mask",
            label: "Queue Workflow (Mask)",
            icon: _f,
            handler: () => c("run")
          },
          {
            id: "restore_full_workflow",
            label: "Restore Full Workflow",
            icon: wf,
            handler: a
          },
          {
            id: "edit_tags",
            label: "Edit Tags",
            icon: bf,
            handler: m
          },
          {
            id: "edit_notes",
            label: "Edit Notes",
            icon: Ef,
            handler: v
          },
          {
            id: "edit_source_image",
            label: "Edit Source Image",
            icon: jf,
            handler: d
          },
          ...g ? [
            {
              id: "restore_image",
              label: "Restore Image",
              icon: Cf,
              handler: _,
              color: "var(--meld-accent-color)"
            }
          ] : [],
          {
            id: "delete_or_trash",
            label: x,
            icon: $t,
            handler: w,
            className: "meld-image-card__menu-item--danger",
            color: "var(--meld-danger-color)"
          }
        ].map((O) => /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: `meld-image-card__menu-item ${O.className || ""}`,
            onMouseDown: (R) => R.stopPropagation(),
            onClick: (R) => {
              R.preventDefault(), R.stopPropagation(), t(!1), setTimeout(() => O.handler(), 0);
            },
            children: [
              /* @__PURE__ */ s.jsx(O.icon, { size: 14, color: O.color }),
              /* @__PURE__ */ s.jsx("span", { children: O.label })
            ]
          },
          O.id
        ))
      }
    )
  ] });
}, My = ({
  settings: e,
  activeShortcutKey: t
}) => e["viewer.shortcut.show_cheat_sheet"] ? /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-cheat-sheet", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((n) => {
  const r = String(n), l = e[`viewer.shortcut.${r}`];
  return typeof l == "string" && l ? /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-viewer-cheat-sheet__item ${t === r ? "meld-viewer-cheat-sheet__item--active" : ""}`,
      children: [
        /* @__PURE__ */ s.jsx("span", { className: "meld-viewer-cheat-sheet__key", children: n }),
        /* @__PURE__ */ s.jsx("span", { className: "meld-viewer-cheat-sheet__cmd", children: l.replace("tag-toggle:", "+/- ") })
      ]
    },
    n
  ) : null;
}) }) : null, Iy = ({
  image: e,
  isFullscreen: t,
  settings: n,
  showIcons: r,
  parentChain: l,
  dispatch: a,
  onEditNotes: o
}) => {
  const [i, c] = f.useState("idle");
  f.useEffect(() => {
    c("idle");
  }, []);
  const d = t ? n["fullscreen.details.show_user_notes"] : n["viewer.details.show_user_notes"], m = d === "always" || d === "if_present" && e.user_notes;
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-viewer-details-overlay ${t ? "meld-viewer-details-overlay--fullscreen" : ""} ${r ? "" : "meld-viewer-details-overlay--no-icons"}`,
      children: [
        (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) !== "none" && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) === "filepath" ? "Filepath" : "Filename" }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename })
        ] }),
        (t ? n["fullscreen.details.show_dimensions"] : n["viewer.details.show_dimensions"]) && e.width && e.height && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Dimensions" }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-value", children: [
            e.width,
            " x ",
            e.height,
            " px"
          ] })
        ] }),
        (t ? n["fullscreen.details.show_created_at"] : n["viewer.details.show_created_at"]) && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Created At" }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: new Date(e.created_at * 1e3).toLocaleString() })
        ] }),
        e.deleted_at && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Deleted At" }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: new Date(e.deleted_at * 1e3).toLocaleString() })
        ] }),
        (t ? n["fullscreen.details.show_model_name"] : n["viewer.details.show_model_name"]) && e.model_name && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Model" }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: e.model_name })
        ] }),
        (t ? n["fullscreen.details.show_source"] : n["viewer.details.show_source"]) && l.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Source" }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-tags", children: /* @__PURE__ */ s.jsx("div", { className: "meld-lineage-thumbs", children: l.map(
            (v, w) => v.imgSrc && /* @__PURE__ */ s.jsx(
              "img",
              {
                src: v.imgSrc,
                className: "meld-lineage-badge__parent-thumb",
                style: { cursor: "pointer" },
                loading: "lazy",
                onClick: (_) => {
                  _.stopPropagation(), a({
                    type: "OPEN_VIEWER",
                    payload: {
                      id: v.id || e.id,
                      mode: "lineage"
                    }
                  });
                },
                title: w === 0 ? "Source" : w === 1 ? "Grand-Source" : `Ancestor (S${w + 1})`,
                alt: "source thumb"
              },
              v.id || w
            )
          ) }) })
        ] }),
        (t ? n["fullscreen.details.show_positive_prompt"] : n["viewer.details.show_positive_prompt"]) && (e.positive_prompt || e.positive) && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Positive" }),
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-viewer-details-value meld-viewer-details-value--prompt",
              style: {
                "--meld-prompt-max-lines": t ? n["fullscreen.details.max_positive_prompt_lines"] : n["viewer.details.max_positive_prompt_lines"]
              },
              children: e.positive_prompt || e.positive
            }
          )
        ] }),
        (t ? n["fullscreen.details.show_negative_prompt"] : n["viewer.details.show_negative_prompt"]) && (e.negative_prompt || e.negative) && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Negative" }),
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-viewer-details-value meld-viewer-details-value--prompt",
              style: {
                "--meld-prompt-max-lines": t ? n["fullscreen.details.max_negative_prompt_lines"] : n["viewer.details.max_negative_prompt_lines"]
              },
              children: e.negative_prompt || e.negative
            }
          )
        ] }),
        (t ? n["fullscreen.details.show_tags"] : n["viewer.details.show_tags"]) && e.tags && e.tags.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Tags" }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-tags", children: e.tags.map((v) => /* @__PURE__ */ s.jsx("span", { className: "meld-viewer-details-tag", children: v }, v)) })
        ] }),
        m && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item meld-viewer-details-item--notes", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-label", children: [
            "Notes",
            i === "saving" && /* @__PURE__ */ s.jsx("span", { className: "meld-notes-status", children: "Saving..." })
          ] }),
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-viewer-notes-preview",
              onClick: (v) => {
                v.stopPropagation(), o == null || o();
              },
              style: {
                cursor: "pointer",
                minHeight: "40px",
                padding: "8px",
                backgroundColor: "var(--meld-input-bg)",
                borderRadius: "4px",
                fontSize: "0.9rem",
                whiteSpace: "pre-wrap"
              },
              children: e.user_notes || /* @__PURE__ */ s.jsx("span", { style: { color: "var(--meld-text-secondary)" }, children: "Add notes..." })
            }
          )
        ] })
      ]
    }
  );
}, Bf = f.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r,
    viewerMode: l,
    lightTableSlotId: a
  }) => {
    const o = e.id === t, i = typeof n.parent_id == "number" && n.parent_id === e.id, c = typeof e.parent_id == "number" && e.parent_id === n.id, d = ht(e, 64);
    return /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail-wrapper", children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-viewer-thumbnail ${o ? "meld-viewer-thumbnail--active" : ""} ${i ? "meld-viewer-thumbnail--parent" : ""} ${c ? "meld-viewer-thumbnail--child" : ""}`,
        onClick: () => r({
          type: "OPEN_VIEWER",
          payload: {
            id: e.id,
            mode: l,
            // Preserve slotId in lighttable mode
            ...l === "lighttable" && a ? { slotId: a } : {}
          }
        }),
        title: e.filename,
        children: [
          /* @__PURE__ */ s.jsx("img", { src: d, alt: e.filename }),
          (i || c) && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `meld-viewer-thumbnail-relation-icon ${i ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`,
              title: i ? "Source Image" : "Derivative Image",
              children: i ? /* @__PURE__ */ s.jsx(nf, { size: 12 }) : /* @__PURE__ */ s.jsx(tf, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
Bf.displayName = "ThumbnailItem";
const Ty = ({
  windowedThumbnails: e,
  viewerImageId: t,
  currentImage: n,
  dispatch: r,
  isLoadingLineage: l,
  isLoading: a,
  viewerMode: o,
  lightTableSlotId: i
}) => /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnails-container", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-thumbnails", children: [
  l ? /* @__PURE__ */ s.jsx(
    "div",
    {
      style: {
        padding: "10px",
        color: "var(--meld-text-secondary)"
      },
      children: "Loading lineage..."
    }
  ) : e.map(({ img: c }) => /* @__PURE__ */ s.jsx(
    Bf,
    {
      thumb: c,
      viewerImageId: t,
      currentImage: n,
      dispatch: r,
      viewerMode: o,
      lightTableSlotId: i
    },
    c.id
  )),
  o === "gallery" && a && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ s.jsx(Xr, { className: "animate-spin", size: 20 }) })
] }) });
function Ly() {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = _e(), {
    isFullscreen: l,
    showDetails: a,
    setShowDetails: o,
    showThumbnails: i,
    setShowThumbnailsOverride: c,
    isLoadingLineage: d,
    isJumping: m,
    isMenuOpen: v,
    setIsMenuOpen: w,
    activeShortcutKey: _,
    setLastDeletedImages: g,
    overlayRef: x,
    handleNext: S,
    handlePrevious: h,
    handleTagEdit: u,
    handleEditNotes: p,
    handleRestore: y,
    handleRestoreWorkflow: j,
    handleAddUnifiedLoader: k,
    handleSendToWorkflow: b,
    handleRunWithWorkflow: I,
    handleRunWithMask: O,
    handleEditSource: R,
    handleDelete: D,
    toggleFullscreen: U,
    image: Z,
    windowedThumbnails: M,
    parentChain: K
  } = Ny({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  }), F = f.useRef(null), P = f.useRef(null), { executeWorkflow: C } = ui(), L = f.useMemo(() => e.viewScope === "trash" ? "Delete Permanently" : "Move to Trash", [e.viewScope]);
  if (!Z) return null;
  const { viewerImageId: V, viewerMode: E } = e, W = l ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return ge.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: x,
        className: "meld-viewer-overlay",
        onClick: () => {
          e.activeModal.type === "none" && t({ type: "CLOSE_VIEWER" });
        },
        role: "button",
        tabIndex: 0,
        children: [
          /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: `meld-viewer-content ${l ? "meld-viewer-content--fullscreen" : ""} ${i ? "meld-viewer-content--with-thumbnails" : ""}`,
              onClick: (G) => G.stopPropagation(),
              children: [
                W && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: y,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ s.jsx(Xr, { size: 20 })
                    }
                  ),
                  !l && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => c(!i),
                      type: "button",
                      title: i ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ s.jsx(lf, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => o(!a),
                      type: "button",
                      title: a ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ s.jsx(Wp, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: U,
                      type: "button",
                      title: l ? "Exit Fullscreen (F/Enter)" : "Fullscreen (F/Enter)",
                      children: l ? /* @__PURE__ */ s.jsx(Kp, { size: 20 }) : /* @__PURE__ */ s.jsx(Qp, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    mi,
                    {
                      isMenuOpen: v,
                      setIsMenuOpen: w,
                      menuRef: P,
                      settings: e.settings,
                      onAddUnifiedLoader: k,
                      onRestoreWorkflow: j,
                      onSendToWorkflow: b,
                      onRunWithWorkflow: I,
                      onRunWithMask: O,
                      onEditSource: R,
                      onEditTags: u,
                      onEditNotes: p,
                      onDelete: D,
                      deleteLabel: L,
                      showQuickShortcuts: !1,
                      iconSize: 20,
                      buttonClassName: "meld-viewer-action-btn"
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                      onClick: () => t({ type: "CLOSE_VIEWER" }),
                      type: "button",
                      title: "Close (Esc)",
                      children: /* @__PURE__ */ s.jsx(xe, { size: 20 })
                    }
                  )
                ] }),
                W && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: h,
                    type: "button",
                    disabled: m,
                    title: "Previous (Left/Up)",
                    children: /* @__PURE__ */ s.jsx(rf, { size: 32 })
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-image-container", children: [
                  m && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ s.jsx(Xr, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ s.jsx(
                    "img",
                    {
                      ref: F,
                      src: ci(Z),
                      alt: Z.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[l ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${m ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                W && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: S,
                    type: "button",
                    title: "Next (Right/Down)",
                    children: /* @__PURE__ */ s.jsx(ai, { size: 32 })
                  }
                ),
                a && /* @__PURE__ */ s.jsx(
                  Iy,
                  {
                    image: Z,
                    isFullscreen: l,
                    settings: e.settings,
                    showIcons: W,
                    parentChain: K,
                    dispatch: t,
                    onEditNotes: p
                  }
                ),
                !l && i && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ s.jsx(
                  Ty,
                  {
                    windowedThumbnails: M,
                    viewerImageId: V,
                    currentImage: Z,
                    dispatch: t,
                    isLoadingLineage: d,
                    isLoading: e.isLoading,
                    viewerMode: E,
                    lightTableSlotId: e.viewerLightTableSlotId
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  My,
                  {
                    settings: e.settings,
                    activeShortcutKey: _
                  }
                )
              ]
            }
          ),
          e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
            Df,
            {
              images: e.activeModal.images,
              isMaskMode: !!e.activeModal.maskFilename || !!e.activeModal.isMaskSequence,
              onExecute: async (G, A) => {
                if (e.activeModal.type === "workflow_selection") {
                  if (e.activeModal.isMaskSequence)
                    return t({
                      type: "OPEN_MODAL",
                      payload: {
                        type: "mask_sequence_step",
                        images: e.activeModal.images,
                        currentIndex: 0,
                        workflowName: G,
                        targetLoaderNodeId: A
                      }
                    }), !1;
                  const q = e.activeModal.maskFilename;
                  for (const B of e.activeModal.images)
                    await C(
                      G,
                      B,
                      q,
                      A
                    );
                  t({ type: "CLOSE_MODAL" }), t({ type: "CLOSE_VIEWER" });
                }
              }
            }
          ),
          e.activeModal.type === "node_selection" && /* @__PURE__ */ s.jsx(
            Lf,
            {
              image: e.activeModal.image,
              nodes: e.activeModal.nodes,
              onSelect: (G) => {
                e.activeModal.type === "node_selection" && Zr(e.activeModal.image, G);
              }
            }
          ),
          e.activeModal.type === "error" && /* @__PURE__ */ s.jsx(Rf, { message: e.activeModal.message }),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ s.jsx(
            Pf,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: g
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ s.jsx(Of, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ s.jsx(mf, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ s.jsx(Mf, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ s.jsx(
            If,
            {
              imageIds: e.activeModal.imageIds,
              initialTags: e.activeModal.tags,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_editor" && /* @__PURE__ */ s.jsx(
            ys,
            {
              imageId: e.activeModal.imageId,
              mode: e.activeModal.mode,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_sequence_step" && /* @__PURE__ */ s.jsx(
            ys,
            {
              imageId: e.activeModal.images[e.activeModal.currentIndex].id,
              mode: "run_sequence",
              sequenceData: {
                workflowName: e.activeModal.workflowName,
                targetLoaderNodeId: e.activeModal.targetLoaderNodeId,
                currentIndex: e.activeModal.currentIndex,
                totalCount: e.activeModal.images.length
              },
              onSuccess: () => {
                if (e.activeModal.type === "mask_sequence_step") {
                  const G = e.activeModal.currentIndex + 1;
                  G < e.activeModal.images.length ? t({
                    type: "OPEN_MODAL",
                    payload: {
                      ...e.activeModal,
                      currentIndex: G
                    }
                  }) : (t({ type: "CLOSE_MODAL" }), t({ type: "CLOSE_VIEWER" }));
                }
              },
              onClose: () => t({ type: "CLOSE_MODAL" })
            },
            e.activeModal.images[e.activeModal.currentIndex].id
          ),
          e.activeModal.type === "note_edit" && /* @__PURE__ */ s.jsx(
            Tf,
            {
              imageId: e.activeModal.imageId,
              initialNotes: e.activeModal.notes,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          )
        ]
      }
    ),
    document.body
  );
}
const Dy = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = _e(), [a, o] = f.useState("gallery"), [i, c] = f.useState(""), d = e.searchQuery.trim() !== "", m = f.useRef(null), v = f.useRef(null), w = ie((S) => S.buckets), _ = f.useMemo(() => {
    const S = /* @__PURE__ */ new Set();
    for (const h of Object.values(w))
      for (const u of h)
        S.add(Number(u));
    return S;
  }, [w]), g = f.useMemo(() => e.images.filter((S) => _.has(S.id) ? !1 : e.viewScope === "trash" ? S.exists !== !1 || e.settings["gallery.trash.show_missing"] : S.exists !== !1 && (e.settings["gallery.show_parent_images"] || d || !S.has_children)), [
    e.images,
    e.settings,
    e.viewScope,
    _,
    d
  ]), x = g;
  return f.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && g.length === 0 && (re.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    g.length,
    r
  ]), f.useEffect(() => {
    const S = (h) => {
      h.key === "Escape" && (e.activeModal.type !== "none" ? (t({ type: "CLOSE_MODAL" }), h.preventDefault(), h.stopPropagation()) : e.selectedIds.size > 0 && (t({ type: "CLEAR_SELECTION" }), h.preventDefault(), h.stopPropagation()));
    };
    return window.addEventListener("keydown", S), () => window.removeEventListener("keydown", S);
  }, [e.activeModal.type, e.selectedIds.size, t]), f.useEffect(() => {
    const S = new IntersectionObserver(
      (u) => {
        if (u[0].isIntersecting) {
          if (e.isLoading) {
            re.log(
              "GalleryPanel: Intersection observed but already loading"
            );
            return;
          }
          e.pagination.hasMore ? (re.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : re.log(
            "GalleryPanel: Intersection observed but no more to load",
            {
              localCount: g.length,
              serverHasMore: e.pagination.hasMore
            }
          );
        }
      },
      { threshold: 0, rootMargin: "800px" }
    ), h = m.current;
    return h && S.observe(h), () => {
      h && S.unobserve(h);
    };
  }, [
    r,
    e.isLoading,
    e.pagination.hasMore,
    g.length,
    e.images.length
  ]), f.useEffect(() => {
    e.viewerImageId !== null && (v.current = e.viewerImageId);
  }, [e.viewerImageId]), {
    state: e,
    dispatch: t,
    refreshImages: n,
    loadMoreImages: r,
    updateSetting: l,
    viewMode: a,
    setViewMode: o,
    lastSearchQuery: i,
    setLastSearchQuery: c,
    localLimit: e.pagination.limit,
    displayedImages: g,
    visibleImages: x,
    isSearchActive: d,
    loadMoreRef: m
  };
}, Py = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = _e(), { handleRunWithWorkflow: l, handleRunWithMask: a } = Rs(
    e,
    t
  ), o = e.selectedIds.size, [i, c] = f.useState(!1), [d, m] = f.useState(null), v = f.useRef(null), w = f.useRef(null), _ = Ff("bulkActionBar");
  if (et({
    onEscape: () => c(!1),
    enabled: i
  }), Jr({
    enabled: i,
    insideRefs: [v, w],
    onOutside: () => c(!1)
  }), o === 0) return null;
  const g = e.viewScope === "trash", x = () => e.images.filter((b) => e.selectedIds.has(b.id)), S = () => {
    if (i) {
      c(!1);
      return;
    }
    v.current && (m(v.current.getBoundingClientRect()), c(!0));
  }, h = (b) => {
    b(), c(!1);
  }, u = () => {
    const b = x(), I = /* @__PURE__ */ new Set();
    for (const O of b)
      if (O.tags)
        for (const R of O.tags)
          I.add(R);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(I)
      }
    });
  }, p = () => {
    const b = x();
    l(b);
  }, y = () => {
    const b = x();
    b.length > 0 && a(b, "run");
  }, j = () => {
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "download_options",
        imageIds: Array.from(e.selectedIds)
      }
    });
  }, k = /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-bulk-bar ${g ? "meld-bulk-bar--trash" : ""}`,
      children: [
        /* @__PURE__ */ s.jsxs("span", { className: "meld-bulk-bar__info", children: [
          o,
          " items selected"
        ] }),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            ref: v,
            type: "button",
            className: "meld-bulk-bar__button meld-bulk-bar__button--action",
            onClick: S,
            children: [
              /* @__PURE__ */ s.jsx(
                Hp,
                {
                  size: 16,
                  style: { marginRight: "8px", verticalAlign: "middle" }
                }
              ),
              "Action"
            ]
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "button",
            className: "meld-bulk-bar__button meld-bulk-bar__button--cancel",
            onClick: () => t({ type: "CLEAR_SELECTION" }),
            children: [
              /* @__PURE__ */ s.jsx(xe, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
              "Cancel"
            ]
          }
        ),
        i && d && /* @__PURE__ */ s.jsx(
          "div",
          {
            ref: w,
            className: "meld-bulk-bar-menu",
            style: {
              bottom: window.innerHeight - d.top + 5,
              left: d.left
            },
            children: g ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
              /* @__PURE__ */ s.jsxs(
                "button",
                {
                  type: "button",
                  className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--restore",
                  onClick: () => h(r),
                  children: [
                    /* @__PURE__ */ s.jsx(Xr, { size: 14 }),
                    " Restore"
                  ]
                }
              ),
              /* @__PURE__ */ s.jsxs(
                "button",
                {
                  type: "button",
                  className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--danger",
                  onClick: () => h(n),
                  children: [
                    /* @__PURE__ */ s.jsx($t, { size: 14 }),
                    " Delete Permanently"
                  ]
                }
              )
            ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
              /* @__PURE__ */ s.jsxs(
                "button",
                {
                  type: "button",
                  className: "meld-bulk-bar-menu__item",
                  onClick: () => h(u),
                  children: [
                    /* @__PURE__ */ s.jsx(dr, { size: 14 }),
                    " Edit Tags"
                  ]
                }
              ),
              /* @__PURE__ */ s.jsxs(
                "button",
                {
                  type: "button",
                  className: "meld-bulk-bar-menu__item",
                  onClick: () => h(p),
                  children: [
                    /* @__PURE__ */ s.jsx(oi, { size: 14 }),
                    " Queue Workflow"
                  ]
                }
              ),
              /* @__PURE__ */ s.jsxs(
                "button",
                {
                  type: "button",
                  className: "meld-bulk-bar-menu__item",
                  onClick: () => h(y),
                  children: [
                    /* @__PURE__ */ s.jsx(Yp, { size: 14 }),
                    " Queue Workflow (Mask)"
                  ]
                }
              ),
              /* @__PURE__ */ s.jsxs(
                "button",
                {
                  type: "button",
                  className: "meld-bulk-bar-menu__item",
                  onClick: () => h(j),
                  children: [
                    /* @__PURE__ */ s.jsx(qr, { size: 14 }),
                    " Download"
                  ]
                }
              ),
              /* @__PURE__ */ s.jsx("div", { className: "meld-bulk-bar-menu__divider" }),
              /* @__PURE__ */ s.jsxs(
                "button",
                {
                  type: "button",
                  className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--danger",
                  onClick: () => h(n),
                  children: [
                    /* @__PURE__ */ s.jsx($t, { size: 14 }),
                    " Move to Trash"
                  ]
                }
              )
            ] })
          }
        )
      ]
    }
  );
  return ge.createPortal(k, _);
};
function Pn(e, t, n) {
  let r = n.initialDeps ?? [], l, a = !0;
  function o() {
    var i, c, d;
    let m;
    n.key && ((i = n.debug) != null && i.call(n)) && (m = Date.now());
    const v = e();
    if (!(v.length !== r.length || v.some((g, x) => r[x] !== g)))
      return l;
    r = v;
    let _;
    if (n.key && ((c = n.debug) != null && c.call(n)) && (_ = Date.now()), l = t(...v), n.key && ((d = n.debug) != null && d.call(n))) {
      const g = Math.round((Date.now() - m) * 100) / 100, x = Math.round((Date.now() - _) * 100) / 100, S = x / 16, h = (u, p) => {
        for (u = String(u); u.length < p; )
          u = " " + u;
        return u;
      };
      console.info(
        `%c⏱ ${h(x, 5)} /${h(g, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * S, 120)
        )}deg 100% 31%);`,
        n == null ? void 0 : n.key
      );
    }
    return n != null && n.onChange && !(a && n.skipInitialOnChange) && n.onChange(l), a = !1, l;
  }
  return o.updateDeps = (i) => {
    r = i;
  }, o;
}
function Pc(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Ry = (e, t) => Math.abs(e - t) < 1.01, Oy = (e, t, n) => {
  let r;
  return function(...l) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, l), n);
  };
}, Rc = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, Ay = (e) => e, zy = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let l = t; l <= n; l++)
    r.push(l);
  return r;
}, Fy = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  const l = (o) => {
    const { width: i, height: c } = o;
    t({ width: Math.round(i), height: Math.round(c) });
  };
  if (l(Rc(n)), !r.ResizeObserver)
    return () => {
    };
  const a = new r.ResizeObserver((o) => {
    const i = () => {
      const c = o[0];
      if (c != null && c.borderBoxSize) {
        const d = c.borderBoxSize[0];
        if (d) {
          l({ width: d.inlineSize, height: d.blockSize });
          return;
        }
      }
      l(Rc(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
  });
  return a.observe(n, { box: "border-box" }), () => {
    a.unobserve(n);
  };
}, Oc = {
  passive: !0
}, Ac = typeof window > "u" ? !0 : "onscrollend" in window, Wy = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let l = 0;
  const a = e.options.useScrollendEvent && Ac ? () => {
  } : Oy(
    r,
    () => {
      t(l, !1);
    },
    e.options.isScrollingResetDelay
  ), o = (m) => () => {
    const { horizontal: v, isRtl: w } = e.options;
    l = v ? n.scrollLeft * (w && -1 || 1) : n.scrollTop, a(), t(l, m);
  }, i = o(!0), c = o(!1);
  n.addEventListener("scroll", i, Oc);
  const d = e.options.useScrollendEvent && Ac;
  return d && n.addEventListener("scrollend", c, Oc), () => {
    n.removeEventListener("scroll", i), d && n.removeEventListener("scrollend", c);
  };
}, $y = (e, t, n) => {
  if (t != null && t.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Uy = (e, {
  adjustments: t = 0,
  behavior: n
}, r) => {
  var l, a;
  const o = e + t;
  (a = (l = r.scrollElement) == null ? void 0 : l.scrollTo) == null || a.call(l, {
    [r.options.horizontal ? "left" : "top"]: o,
    behavior: n
  });
};
class Vy {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.currentScrollToIndex = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let n = null;
      const r = () => n || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : n = new this.targetWindow.ResizeObserver((l) => {
        l.forEach((a) => {
          const o = () => {
            this._measureElement(a.target, a);
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(o) : o();
        });
      }));
      return {
        disconnect: () => {
          var l;
          (l = r()) == null || l.disconnect(), n = null;
        },
        observe: (l) => {
          var a;
          return (a = r()) == null ? void 0 : a.observe(l, { box: "border-box" });
        },
        unobserve: (l) => {
          var a;
          return (a = r()) == null ? void 0 : a.unobserve(l);
        }
      };
    })(), this.range = null, this.setOptions = (n) => {
      Object.entries(n).forEach(([r, l]) => {
        typeof l > "u" && delete n[r];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: Ay,
        rangeExtractor: zy,
        onChange: () => {
        },
        measureElement: $y,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        isRtl: !1,
        useScrollendEvent: !1,
        useAnimationFrameWithResizeObserver: !1,
        ...n
      };
    }, this.notify = (n) => {
      var r, l;
      (l = (r = this.options).onChange) == null || l.call(r, this, n);
    }, this.maybeNotify = Pn(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (n) => {
        this.notify(n);
      },
      {
        key: !1,
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((n) => n()), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var n;
      const r = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== r) {
        if (this.cleanup(), !r) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = r, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((n = this.scrollElement) == null ? void 0 : n.window) ?? null, this.elementsCache.forEach((l) => {
          this.observer.observe(l);
        }), this.unsubs.push(
          this.options.observeElementRect(this, (l) => {
            this.scrollRect = l, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (l, a) => {
            this.scrollAdjustments = 0, this.scrollDirection = a ? this.getScrollOffset() < l ? "forward" : "backward" : null, this.scrollOffset = l, this.isScrolling = a, this.maybeNotify();
          })
        ), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (n, r) => {
      const l = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
      for (let o = r - 1; o >= 0; o--) {
        const i = n[o];
        if (l.has(i.lane))
          continue;
        const c = a.get(
          i.lane
        );
        if (c == null || i.end > c.end ? a.set(i.lane, i) : i.end < c.end && l.set(i.lane, !0), l.size === this.options.lanes)
          break;
      }
      return a.size === this.options.lanes ? Array.from(a.values()).sort((o, i) => o.end === i.end ? o.index - i.index : o.end - i.end)[0] : void 0;
    }, this.getMeasurementOptions = Pn(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled,
        this.options.lanes
      ],
      (n, r, l, a, o, i) => (this.prevLanes !== void 0 && this.prevLanes !== i && (this.lanesChangedFlag = !0), this.prevLanes = i, this.pendingMeasuredCacheIndexes = [], {
        count: n,
        paddingStart: r,
        scrollMargin: l,
        getItemKey: a,
        enabled: o,
        lanes: i
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Pn(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: n, paddingStart: r, scrollMargin: l, getItemKey: a, enabled: o, lanes: i }, c) => {
        if (!o)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > n)
          for (const w of this.laneAssignments.keys())
            w >= n && this.laneAssignments.delete(w);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((w) => {
          this.itemSizeCache.set(w.key, w.size);
        }));
        const d = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === n && (this.lanesSettling = !1);
        const m = this.measurementsCache.slice(0, d), v = new Array(i).fill(
          void 0
        );
        for (let w = 0; w < d; w++) {
          const _ = m[w];
          _ && (v[_.lane] = w);
        }
        for (let w = d; w < n; w++) {
          const _ = a(w), g = this.laneAssignments.get(w);
          let x, S;
          if (g !== void 0 && this.options.lanes > 1) {
            x = g;
            const y = v[x], j = y !== void 0 ? m[y] : void 0;
            S = j ? j.end + this.options.gap : r + l;
          } else {
            const y = this.options.lanes === 1 ? m[w - 1] : this.getFurthestMeasurement(m, w);
            S = y ? y.end + this.options.gap : r + l, x = y ? y.lane : w % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(w, x);
          }
          const h = c.get(_), u = typeof h == "number" ? h : this.options.estimateSize(w), p = S + u;
          m[w] = {
            index: w,
            start: S,
            size: u,
            end: p,
            key: _,
            lane: x
          }, v[x] = w;
        }
        return this.measurementsCache = m, m;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = Pn(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, r, l, a) => this.range = n.length > 0 && r > 0 ? By({
        measurements: n,
        outerSize: r,
        scrollOffset: l,
        lanes: a
      }) : null,
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Pn(
      () => {
        let n = null, r = null;
        const l = this.calculateRange();
        return l && (n = l.startIndex, r = l.endIndex), this.maybeNotify.updateDeps([this.isScrolling, n, r]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          n,
          r
        ];
      },
      (n, r, l, a, o) => a === null || o === null ? [] : n({
        startIndex: a,
        endIndex: o,
        overscan: r,
        count: l
      }),
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (n) => {
      const r = this.options.indexAttribute, l = n.getAttribute(r);
      return l ? parseInt(l, 10) : (console.warn(
        `Missing attribute name '${r}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (n, r) => {
      const l = this.indexFromElement(n), a = this.measurementsCache[l];
      if (!a)
        return;
      const o = a.key, i = this.elementsCache.get(o);
      i !== n && (i && this.observer.unobserve(i), this.observer.observe(n), this.elementsCache.set(o, n)), n.isConnected && this.resizeItem(l, this.options.measureElement(n, r, this));
    }, this.resizeItem = (n, r) => {
      const l = this.measurementsCache[n];
      if (!l)
        return;
      const a = this.itemSizeCache.get(l.key) ?? l.size, o = r - a;
      o !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(l, o, this) : l.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += o,
        behavior: void 0
      }), this.pendingMeasuredCacheIndexes.push(l.index), this.itemSizeCache = new Map(this.itemSizeCache.set(l.key, r)), this.notify(!1));
    }, this.measureElement = (n) => {
      if (!n) {
        this.elementsCache.forEach((r, l) => {
          r.isConnected || (this.observer.unobserve(r), this.elementsCache.delete(l));
        });
        return;
      }
      this._measureElement(n, void 0);
    }, this.getVirtualItems = Pn(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (n, r) => {
        const l = [];
        for (let a = 0, o = n.length; a < o; a++) {
          const i = n[a], c = r[i];
          l.push(c);
        }
        return l;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (n) => {
      const r = this.getMeasurements();
      if (r.length !== 0)
        return Pc(
          r[Qf(
            0,
            r.length - 1,
            (l) => Pc(r[l]).start,
            n
          )]
        );
    }, this.getMaxScrollOffset = () => {
      if (!this.scrollElement) return 0;
      if ("scrollHeight" in this.scrollElement)
        return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
      {
        const n = this.scrollElement.document.documentElement;
        return this.options.horizontal ? n.scrollWidth - this.scrollElement.innerWidth : n.scrollHeight - this.scrollElement.innerHeight;
      }
    }, this.getOffsetForAlignment = (n, r, l = 0) => {
      if (!this.scrollElement) return 0;
      const a = this.getSize(), o = this.getScrollOffset();
      r === "auto" && (r = n >= o + a ? "end" : "start"), r === "center" ? n += (l - a) / 2 : r === "end" && (n -= a);
      const i = this.getMaxScrollOffset();
      return Math.max(Math.min(i, n), 0);
    }, this.getOffsetForIndex = (n, r = "auto") => {
      n = Math.max(0, Math.min(n, this.options.count - 1));
      const l = this.measurementsCache[n];
      if (!l)
        return;
      const a = this.getSize(), o = this.getScrollOffset();
      if (r === "auto")
        if (l.end >= o + a - this.options.scrollPaddingEnd)
          r = "end";
        else if (l.start <= o + this.options.scrollPaddingStart)
          r = "start";
        else
          return [o, r];
      if (r === "end" && n === this.options.count - 1)
        return [this.getMaxScrollOffset(), r];
      const i = r === "end" ? l.end + this.options.scrollPaddingEnd : l.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(i, r, l.size),
        r
      ];
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.scrollToOffset = (n, { align: r = "start", behavior: l } = {}) => {
      l === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(n, r), {
        adjustments: void 0,
        behavior: l
      });
    }, this.scrollToIndex = (n, { align: r = "auto", behavior: l } = {}) => {
      l === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), n = Math.max(0, Math.min(n, this.options.count - 1)), this.currentScrollToIndex = n;
      let a = 0;
      const o = 10, i = (d) => {
        if (!this.targetWindow) return;
        const m = this.getOffsetForIndex(n, d);
        if (!m) {
          console.warn("Failed to get offset for index:", n);
          return;
        }
        const [v, w] = m;
        this._scrollToOffset(v, { adjustments: void 0, behavior: l }), this.targetWindow.requestAnimationFrame(() => {
          if (!this.targetWindow) return;
          const _ = () => {
            if (this.currentScrollToIndex !== n) return;
            const g = this.getScrollOffset(), x = this.getOffsetForIndex(n, w);
            if (!x) {
              console.warn("Failed to get offset for index:", n);
              return;
            }
            Ry(x[0], g) || c(w);
          };
          this.isDynamicMode() ? this.targetWindow.requestAnimationFrame(_) : _();
        });
      }, c = (d) => {
        this.targetWindow && this.currentScrollToIndex === n && (a++, a < o ? this.targetWindow.requestAnimationFrame(() => i(d)) : console.warn(
          `Failed to scroll to index ${n} after ${o} attempts.`
        ));
      };
      i(r);
    }, this.scrollBy = (n, { behavior: r } = {}) => {
      r === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getScrollOffset() + n, {
        adjustments: void 0,
        behavior: r
      });
    }, this.getTotalSize = () => {
      var n;
      const r = this.getMeasurements();
      let l;
      if (r.length === 0)
        l = this.options.paddingStart;
      else if (this.options.lanes === 1)
        l = ((n = r[r.length - 1]) == null ? void 0 : n.end) ?? 0;
      else {
        const a = Array(this.options.lanes).fill(null);
        let o = r.length - 1;
        for (; o >= 0 && a.some((i) => i === null); ) {
          const i = r[o];
          a[i.lane] === null && (a[i.lane] = i.end), o--;
        }
        l = Math.max(...a.filter((i) => i !== null));
      }
      return Math.max(
        l - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (n, {
      adjustments: r,
      behavior: l
    }) => {
      this.options.scrollToFn(n, { behavior: l, adjustments: r }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(t);
  }
}
const Qf = (e, t, n, r) => {
  for (; e <= t; ) {
    const l = (e + t) / 2 | 0, a = n(l);
    if (a < r)
      e = l + 1;
    else if (a > r)
      t = l - 1;
    else
      return l;
  }
  return e > 0 ? e - 1 : 0;
};
function By({
  measurements: e,
  outerSize: t,
  scrollOffset: n,
  lanes: r
}) {
  const l = e.length - 1, a = (c) => e[c].start;
  if (e.length <= r)
    return {
      startIndex: 0,
      endIndex: l
    };
  let o = Qf(
    0,
    l,
    a,
    n
  ), i = o;
  if (r === 1)
    for (; i < l && e[i].end < n + t; )
      i++;
  else if (r > 1) {
    const c = Array(r).fill(0);
    for (; i < l && c.some((m) => m < n + t); ) {
      const m = e[i];
      c[m.lane] = m.end, i++;
    }
    const d = Array(r).fill(n + t);
    for (; o >= 0 && d.some((m) => m >= n); ) {
      const m = e[o];
      d[m.lane] = m.start, o--;
    }
    o = Math.max(0, o - o % r), i = Math.min(l, i + (r - 1 - i % r));
  }
  return { startIndex: o, endIndex: i };
}
const zc = typeof document < "u" ? f.useLayoutEffect : f.useEffect;
function Qy({
  useFlushSync: e = !0,
  ...t
}) {
  const n = f.useReducer(() => ({}), {})[1], r = {
    ...t,
    onChange: (a, o) => {
      var i;
      e && o ? ge.flushSync(n) : n(), (i = t.onChange) == null || i.call(t, a, o);
    }
  }, [l] = f.useState(
    () => new Vy(r)
  );
  return l.setOptions(r), zc(() => l._didMount(), []), zc(() => l._willUpdate()), l;
}
function Hy(e) {
  return Qy({
    observeElementRect: Fy,
    observeElementOffset: Wy,
    scrollToFn: Uy,
    ...e
  });
}
const Hf = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = _e(), l = t.selectedIds.has(e.id), a = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: o,
    handleAddUnifiedLoader: i,
    handleEditSource: c,
    handleEditTags: d,
    handleSendToWorkflow: m,
    handleRunWithWorkflow: v,
    handleRunWithMask: w,
    handleRestore: _,
    handleDelete: g,
    handleEditNotes: x,
    handleUpdateUserNotes: S
  } = Rs(t, n), { getParentChain: h } = Vf(t.images, t.settings), [u, p] = f.useState(null), [y, j] = f.useState(!1), [k, b] = f.useState(null), [I, O] = f.useState(!1), R = f.useRef(null);
  Jr({
    enabled: y,
    insideRefs: [R],
    onOutside: () => j(!1)
  });
  const D = async (te, We, tt = !1) => {
    try {
      await navigator.clipboard.writeText(te), tt ? (O(!0), setTimeout(() => O(!1), 2e3)) : (b(We), setTimeout(() => b(null), 2e3));
    } catch (bt) {
      console.error("Failed to copy text: ", bt);
    }
  };
  f.useEffect(() => {
    const te = (We) => {
      We.key === "Escape" && (u ? p(null) : j(!1));
    };
    return window.addEventListener("keydown", te), () => {
      window.removeEventListener("keydown", te);
    };
  }, [u]);
  const U = h(e), M = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, K = t.settings["sidebar.thumbnail_size"] || 100, F = ht(
    e,
    Math.min(400, Math.round(K * 1.5))
  );
  return {
    state: t,
    dispatch: n,
    isSelected: l,
    viewMode: a,
    popupContent: u,
    setPopupContent: p,
    isMenuOpen: y,
    setIsMenuOpen: j,
    copiedLabel: k,
    popupCopied: I,
    menuRef: R,
    parentChain: U,
    displayFilename: M,
    imgSrc: F,
    handleCopy: D,
    handleClick: (te) => {
      te.shiftKey ? (te.preventDefault(), te.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : te.ctrlKey || te.metaKey || t.selectedIds.size > 0 ? (te.preventDefault(), te.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
    },
    handleSelectToggle: (te) => {
      te.preventDefault(), te.stopPropagation(), te.shiftKey ? n({ type: "SELECT_RANGE", payload: e.id }) : n({ type: "TOGGLE_SELECT", payload: e.id });
    },
    handleContainerClick: (te) => {
      te.shiftKey ? (te.preventDefault(), te.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : te.ctrlKey || te.metaKey || t.selectedIds.size > 0 ? (te.preventDefault(), te.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : (te.preventDefault(), te.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleMouseDown: (te) => {
      te.target.closest(
        "textarea, input, button, .meld-image-card__meta-content"
      ) || !te.shiftKey && !te.ctrlKey && !te.metaKey && l || (te.shiftKey || te.ctrlKey || te.metaKey || t.selectedIds.size > 0) && te.preventDefault();
    },
    handleKeyDown: (te) => {
      var tt, bt, Vt;
      ((tt = document.activeElement) == null ? void 0 : tt.tagName) === "INPUT" || ((bt = document.activeElement) == null ? void 0 : bt.tagName) === "TEXTAREA" || (Vt = document.activeElement) != null && Vt.isContentEditable || (te.key === "Enter" || te.key === " ") && (te.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleRestoreWorkflow: async () => {
      await o(e);
    },
    handleAddUnifiedLoader: async () => {
      await i(e);
    },
    handleEditSource: () => {
      c(e);
    },
    handleEditTags: () => {
      d(e);
    },
    handleEditNotes: () => {
      x(e);
    },
    handleSendToWorkflow: () => {
      m(e);
    },
    handleRestore: () => {
      _(e);
    },
    handleDelete: () => {
      g(e);
    },
    handleRunWithWorkflow: () => {
      v(e);
    },
    handleRunWithMask: (te = "run") => w(e, te),
    handleUpdateUserNotes: (te) => S(e.id, te),
    fetchFullImageDetails: r
  };
}, Ky = ({
  title: e,
  text: t,
  onClose: n,
  onCopy: r,
  isCopied: l
}) => ge.createPortal(
  /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "meld-prompt-popup-overlay",
      onClick: (a) => {
        a.stopPropagation(), n();
      },
      children: /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: "meld-prompt-popup-content",
          onClick: (a) => a.stopPropagation(),
          children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-prompt-popup-header", children: [
              /* @__PURE__ */ s.jsx("span", { children: e }),
              /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                l ? /* @__PURE__ */ s.jsx(si, { size: 18, style: { color: "var(--meld-success-color)" } }) : /* @__PURE__ */ s.jsx(
                  Op,
                  {
                    className: "meld-prompt-popup-copy",
                    size: 18,
                    onClick: () => r(t)
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  xe,
                  {
                    className: "meld-prompt-popup-close",
                    size: 18,
                    onClick: n
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ s.jsx("div", { className: "meld-prompt-popup-text", children: t })
          ]
        }
      )
    }
  ),
  document.body
), Kf = Yt.memo(
  ({ image: e }) => {
    const {
      state: t,
      dispatch: n,
      isSelected: r,
      popupContent: l,
      setPopupContent: a,
      isMenuOpen: o,
      setIsMenuOpen: i,
      copiedLabel: c,
      popupCopied: d,
      menuRef: m,
      parentChain: v,
      displayFilename: w,
      imgSrc: _,
      handleCopy: g,
      handleClick: x,
      handleSelectToggle: S,
      handleContainerClick: h,
      handleMouseDown: u,
      handleKeyDown: p,
      handleRestoreWorkflow: y,
      handleAddUnifiedLoader: j,
      handleEditSource: k,
      handleEditTags: b,
      handleEditNotes: I,
      handleSendToWorkflow: O,
      handleRestore: R,
      handleDelete: D,
      handleRunWithWorkflow: U,
      handleRunWithMask: Z,
      fetchFullImageDetails: M
    } = Hf(e), [K, F] = f.useState("idle");
    f.useEffect(() => {
      e.user_notes && K === "saving" && F("idle");
    }, [e.user_notes, K]);
    const P = (C) => {
      C.stopPropagation();
      let L = String(e.id);
      r && t.selectedIds.size > 0 && (L = Array.from(t.selectedIds).join(",")), C.dataTransfer.setData("text/plain", L), ie.getState().setIsOpen(!0);
    };
    return /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-image-card ${r ? "meld-image-card--selected" : ""} ${o ? "meld-image-card--menu-open" : ""}`,
        onClick: h,
        onMouseDown: u,
        onKeyDown: p,
        role: "button",
        tabIndex: 0,
        draggable: !0,
        onDragStart: P,
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__thumbnail-wrapper", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: `meld-image-card__select-checkbox ${r ? "meld-image-card__select-checkbox--checked" : ""}`,
                onClick: S,
                "aria-label": "Toggle selection",
                role: "checkbox",
                "aria-checked": r,
                children: r && /* @__PURE__ */ s.jsxs(
                  "svg",
                  {
                    viewBox: "0 0 24 24",
                    width: "12",
                    height: "12",
                    stroke: "currentColor",
                    strokeWidth: "4",
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                      /* @__PURE__ */ s.jsx("title", { children: "Selected" }),
                      /* @__PURE__ */ s.jsx("polyline", { points: "20 6 9 17 4 12" })
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ s.jsx(
              "img",
              {
                src: _,
                className: "meld-image-card__thumbnail",
                alt: e.filename,
                loading: "lazy",
                draggable: !1,
                width: e.width || void 0,
                height: e.height || void 0,
                style: {
                  aspectRatio: e.width && e.height ? `${e.width} / ${e.height}` : void 0
                },
                onMouseDown: u,
                onClick: (C) => {
                  C.stopPropagation(), x(C);
                }
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__details", children: [
            (t.settings["sidebar.show_filename"] !== "none" || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__filename", children: [
              t.settings["sidebar.show_filename"] !== "none" && w,
              t.settings["sidebar.show_filename"] !== "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
              t.settings["sidebar.show_filename"] === "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
            ] }),
            t.settings["gallery.show_parent_image"] && v.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-lineage-thumbs", children: v.map(
                (C, L) => C.imgSrc && /* @__PURE__ */ s.jsx(
                  "img",
                  {
                    src: C.imgSrc,
                    className: "meld-lineage-badge__parent-thumb",
                    loading: "lazy",
                    onClick: (V) => {
                      V.stopPropagation(), n({
                        type: "OPEN_VIEWER",
                        payload: {
                          id: C.id || e.id,
                          mode: "lineage"
                        }
                      });
                    },
                    title: L === 0 ? "Source" : L === 1 ? "Grand-Source" : `Ancestor (S${L + 1})`,
                    alt: "source thumb"
                  },
                  C.id || L
                )
              ) })
            ] }),
            t.settings["sidebar.show_created_at"] && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__meta-item", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Created At" }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-content", children: new Date(e.created_at * 1e3).toLocaleString() })
            ] }),
            t.viewScope === "trash" && e.deleted_at && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__meta-item", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Deleted At" }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-content", children: new Date(e.deleted_at * 1e3).toLocaleString() })
            ] }),
            t.settings["sidebar.show_model_name"] && /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
                onClick: async (C) => {
                  C.stopPropagation();
                  const L = await M(e.id);
                  a({
                    title: "Model",
                    text: L.model_name || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (C) => {
                        C.stopPropagation();
                        const L = await M(e.id);
                        g(L.model_name || "-", "Model");
                      },
                      children: c === "Model" ? "Copied!" : "Model"
                    }
                  ),
                  /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-content", children: e.model_name || "-" })
                ]
              }
            ),
            t.settings["sidebar.show_positive_prompt"] && /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
                onClick: async (C) => {
                  C.stopPropagation();
                  const L = await M(e.id);
                  a({
                    title: "Positive Prompt",
                    text: L.positive_prompt || L.positive || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (C) => {
                        C.stopPropagation();
                        const L = await M(e.id);
                        g(
                          L.positive_prompt || L.positive || "-",
                          "Positive"
                        );
                      },
                      children: c === "Positive" ? "Copied!" : "Positive"
                    }
                  ),
                  /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-content", children: e.positive_prompt || e.positive || "-" })
                ]
              }
            ),
            t.settings["sidebar.show_negative_prompt"] && /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
                onClick: async (C) => {
                  C.stopPropagation();
                  const L = await M(e.id);
                  a({
                    title: "Negative Prompt",
                    text: L.negative_prompt || L.negative || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (C) => {
                        C.stopPropagation();
                        const L = await M(e.id);
                        g(
                          L.negative_prompt || L.negative || "-",
                          "Negative"
                        );
                      },
                      children: c === "Negative" ? "Copied!" : "Negative"
                    }
                  ),
                  /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-content", children: e.negative_prompt || e.negative || "-" })
                ]
              }
            ),
            t.settings["sidebar.show_tags"] && /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
                onClick: (C) => {
                  C.stopPropagation(), b();
                },
                children: [
                  /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                  /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((C, L) => /* @__PURE__ */ s.jsx(
                    "span",
                    {
                      className: "meld-image-card__tag",
                      children: C
                    },
                    `${C}-${L}`
                  )) : /* @__PURE__ */ s.jsx(
                    "span",
                    {
                      style: {
                        color: "var(--meld-text-secondary)"
                      },
                      children: "-"
                    }
                  ) })
                ]
              }
            ),
            (t.settings["sidebar.show_user_notes"] === "always" || t.settings["sidebar.show_user_notes"] === "if_present" && e.user_notes) && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__meta-item meld-image-card__meta-item--notes", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__meta-label", children: [
                "Notes",
                K === "saving" && /* @__PURE__ */ s.jsx("span", { className: "meld-notes-status", children: "Saving..." })
              ] }),
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  className: "meld-image-card__meta-content",
                  onClick: (C) => {
                    C.stopPropagation(), I();
                  },
                  children: /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__notes-preview", children: e.user_notes || /* @__PURE__ */ s.jsx("span", { className: "meld-notes-placeholder", children: "Add notes..." }) })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ s.jsx(
            mi,
            {
              isMenuOpen: o,
              setIsMenuOpen: i,
              menuRef: m,
              settings: t.settings,
              onAddUnifiedLoader: j,
              onRestoreWorkflow: y,
              onSendToWorkflow: O,
              onRunWithWorkflow: U,
              onRunWithMask: (C) => Z(C),
              onEditSource: k,
              onEditTags: b,
              onEditNotes: I,
              onRestore: R,
              showRestore: t.viewScope === "trash",
              onDelete: D,
              deleteLabel: t.viewScope === "trash" ? "Delete Permanently" : "Move to Trash"
            }
          ),
          l && /* @__PURE__ */ s.jsx(
            Ky,
            {
              title: l.title,
              text: l.text,
              onClose: () => a(null),
              onCopy: (C) => g(C, "", !0),
              isCopied: d
            }
          )
        ]
      }
    );
  }
);
Kf.displayName = "DetailedImageCard";
const Gf = Yt.memo(
  ({ image: e }) => {
    const {
      isSelected: t,
      imgSrc: n,
      handleContainerClick: r,
      handleMouseDown: l,
      handleKeyDown: a,
      handleClick: o,
      handleSelectToggle: i,
      isMenuOpen: c,
      setIsMenuOpen: d,
      menuRef: m,
      state: v,
      handleAddUnifiedLoader: w,
      handleRestoreWorkflow: _,
      handleSendToWorkflow: g,
      handleRunWithWorkflow: x,
      handleRunWithMask: S,
      handleEditSource: h,
      handleEditTags: u,
      handleEditNotes: p,
      handleDelete: y,
      handleRestore: j
    } = Hf(e), k = v.viewScope === "trash", b = k ? "Delete Permanently" : "Move to Trash", I = (O) => {
      O.stopPropagation();
      let R = String(e.id);
      t && v.selectedIds.size > 0 && (R = Array.from(v.selectedIds).join(",")), O.dataTransfer.setData("text/plain", R), ie.getState().setIsOpen(!0);
    };
    return /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-image-card meld-image-card--grid-only ${t ? "meld-image-card--selected" : ""} ${c ? "meld-image-card--menu-open" : ""}`,
        onClick: r,
        onMouseDown: l,
        onKeyDown: a,
        role: "button",
        tabIndex: 0,
        draggable: !0,
        onDragStart: I,
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__thumbnail-wrapper", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: `meld-image-card__select-checkbox ${t ? "meld-image-card__select-checkbox--checked" : ""}`,
                onClick: i,
                "aria-label": "Toggle selection",
                role: "checkbox",
                "aria-checked": t,
                children: t && /* @__PURE__ */ s.jsxs(
                  "svg",
                  {
                    viewBox: "0 0 24 24",
                    width: "10",
                    height: "10",
                    stroke: "currentColor",
                    strokeWidth: "4",
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                      /* @__PURE__ */ s.jsx("title", { children: "Selected" }),
                      /* @__PURE__ */ s.jsx("polyline", { points: "20 6 9 17 4 12" })
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ s.jsx(
              "img",
              {
                src: n,
                className: "meld-image-card__thumbnail",
                alt: e.filename,
                loading: "lazy",
                draggable: !1,
                width: e.width || void 0,
                height: e.height || void 0,
                style: {
                  aspectRatio: e.width && e.height ? `${e.width} / ${e.height}` : void 0
                },
                onMouseDown: l,
                onClick: (O) => {
                  O.stopPropagation(), o(O);
                }
              }
            )
          ] }),
          /* @__PURE__ */ s.jsx(
            mi,
            {
              isMenuOpen: c,
              setIsMenuOpen: d,
              menuRef: m,
              settings: v.settings,
              onAddUnifiedLoader: w,
              onRestoreWorkflow: _,
              onSendToWorkflow: g,
              onRunWithWorkflow: x,
              onRunWithMask: S,
              onEditSource: h,
              onEditTags: u,
              onEditNotes: p,
              onDelete: y,
              onRestore: j,
              showRestore: k,
              deleteLabel: b,
              showQuickShortcuts: !1,
              variant: "thumbnail_overlay_top_right"
            }
          )
        ]
      }
    );
  }
);
Gf.displayName = "SimpleImageCard";
const Fc = ({ image: e }) => {
  const { state: t } = _e();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ s.jsx(Gf, { image: e }) : /* @__PURE__ */ s.jsx(Kf, { image: e });
}, fa = 6, Gy = 10, qy = ({
  visibleImages: e,
  settings: t,
  loadMoreRef: n,
  viewerImageId: r,
  isLoading: l,
  hasMore: a
}) => {
  const o = f.useRef(null), [i, c] = f.useState(300), d = t["sidebar.thumbnail_size"] || 100, m = t["gallery.view_mode"] === "grid_only";
  f.useEffect(() => {
    const h = o.current;
    if (!h) return;
    const u = () => {
      c(h.clientWidth);
    };
    u();
    const p = new ResizeObserver(u);
    return p.observe(h), () => p.disconnect();
  }, []);
  const v = d + 10, w = m ? Math.max(
    1,
    Math.floor(
      (i - Gy * 2 + fa) / (v + fa)
    )
  ) : 1, _ = m ? Math.ceil(e.length / w) : e.length, g = m ? d + 14 : d + 40, x = Hy({
    count: _,
    getScrollElement: () => o.current,
    estimateSize: () => g,
    overscan: 5,
    getItemKey: (h) => {
      var u;
      return m ? `row-${h}-${w}` : ((u = e[h]) == null ? void 0 : u.id) ?? h;
    }
  });
  f.useEffect(() => {
    if (r === null) return;
    const h = e.findIndex((p) => p.id === r);
    if (h < 0) return;
    const u = m ? Math.floor(h / w) : h;
    x.scrollToIndex(u, {
      align: "center",
      behavior: "smooth"
    });
  }, [r, e, m, w, x]);
  const S = x.getVirtualItems();
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      ref: o,
      className: "meld-gallery__list-scroll",
      style: {
        "--meld-thumbnail-size": `${d}px`
      },
      children: [
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: `meld-gallery__list ${m ? "meld-gallery__list--grid-only meld-gallery__list--virtualized" : "meld-gallery__list--virtualized"}`,
            style: {
              height: `${x.getTotalSize()}px`,
              position: "relative"
            },
            children: S.map((h) => {
              if (m) {
                const p = h.index * w, y = Math.min(
                  p + w,
                  e.length
                ), j = e.slice(p, y);
                return /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    ref: x.measureElement,
                    "data-index": h.index,
                    className: "meld-gallery__virtual-grid-row",
                    style: {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      transform: `translateY(${h.start}px)`,
                      display: "flex",
                      flexWrap: "wrap",
                      gap: fa,
                      alignItems: "flex-start"
                    },
                    children: j.map((k) => /* @__PURE__ */ s.jsx(
                      "div",
                      {
                        "data-image-id": k.id,
                        style: {
                          width: "auto",
                          flexShrink: 0,
                          display: "inline-block"
                        },
                        children: /* @__PURE__ */ s.jsx(
                          "div",
                          {
                            style: {
                              width: k.width && k.height ? Math.min(
                                d,
                                d * k.width / k.height
                              ) + 10 : d + 10,
                              minWidth: d + 10
                            },
                            children: /* @__PURE__ */ s.jsx(Fc, { image: k })
                          }
                        )
                      },
                      k.id
                    ))
                  },
                  h.key
                );
              }
              const u = e[h.index];
              return u ? /* @__PURE__ */ s.jsx(
                "div",
                {
                  ref: x.measureElement,
                  "data-index": h.index,
                  "data-image-id": u.id,
                  className: "meld-gallery__virtual-row",
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${h.start}px)`
                  },
                  children: /* @__PURE__ */ s.jsx(Fc, { image: u })
                },
                h.key
              ) : null;
            })
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "div",
          {
            ref: n,
            className: "meld-gallery__load-more",
            style: {
              height: "20px",
              margin: "20px 0",
              textAlign: "center"
            },
            children: [
              l && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
              !l && !a && e.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
            ]
          }
        )
      ]
    }
  );
}, Yy = () => {
  const {
    state: e,
    dispatch: t,
    refreshImages: n,
    updateSetting: r,
    viewMode: l,
    setViewMode: a,
    lastSearchQuery: o,
    setLastSearchQuery: i,
    displayedImages: c,
    visibleImages: d,
    isSearchActive: m,
    loadMoreRef: v
  } = Dy(), w = ie((b) => b.isOpen), _ = ie((b) => b.setIsOpen), g = ie((b) => b.buckets), x = Object.values(g).some((b) => b && b.length > 0);
  re.log("GalleryPanel: isLightTableOpen =", w);
  const [S, h] = f.useState(!1), [u, p] = f.useState(null), y = f.useRef(null), j = f.useCallback(() => {
    y.current && (p(
      y.current.getBoundingClientRect()
    ), h(!0));
  }, []), k = f.useCallback(
    (b) => {
      t({ type: "SET_SEARCH_QUERY", payload: b }), i(b), a("search"), h(!1);
    },
    [t, i, a]
  );
  return re.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: c.length,
    visibleCount: d.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-gallery ${e.viewScope === "trash" ? "meld-gallery--trash" : ""}`,
      onDragOver: (b) => {
        b.dataTransfer.types.includes(
          "application/meld-lt-source-slot"
        ) && (b.preventDefault(), b.dataTransfer.dropEffect = "move");
      },
      onDrop: (b) => {
        const I = b.dataTransfer.getData(
          "application/meld-lt-source-slot"
        );
        if (I) {
          b.preventDefault();
          const O = b.dataTransfer.getData("text/plain");
          if (O) {
            const R = O.split(","), D = [];
            R.forEach((U) => {
              if (U) {
                const Z = U.trim();
                ie.getState().removeFromBucket(I, Z);
                const M = Number(Z);
                Number.isNaN(M) || D.push(M);
              }
            }), D.length > 0 && t({ type: "DESELECT_IMAGES", payload: D });
          }
        }
      },
      children: [
        /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__header", children: [
          e.viewScope === "trash" ? /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__trash-indicator", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__trash-label", children: [
              /* @__PURE__ */ s.jsx($t, { size: 14 }),
              /* @__PURE__ */ s.jsx("span", { children: "Trash Bin" })
            ] }),
            /* @__PURE__ */ s.jsxs("label", { className: "meld-gallery__trash-toggle", children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.settings["gallery.trash.show_missing"] || !1,
                  onChange: (b) => r("gallery.trash.show_missing", b.target.checked)
                }
              ),
              /* @__PURE__ */ s.jsx("span", { children: "Show missing files" })
            ] }),
            /* @__PURE__ */ s.jsxs(
              "button",
              {
                type: "button",
                className: "meld-gallery__exit-trash",
                onClick: () => t({ type: "SET_VIEW_SCOPE", payload: "default" }),
                title: "Exit Trash View",
                children: [
                  /* @__PURE__ */ s.jsx(xe, { size: 14 }),
                  /* @__PURE__ */ s.jsx("span", { children: "Exit" })
                ]
              }
            )
          ] }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__actions", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  l === "search" ? (i(e.searchQuery), e.searchQuery && t({ type: "SET_SEARCH_QUERY", payload: "" }), a("gallery")) : (!e.searchQuery && o && t({
                    type: "SET_SEARCH_QUERY",
                    payload: o
                  }), a("search"));
                },
                style: {
                  background: "none",
                  border: "none",
                  color: m ? "var(--meld-success-color)" : l === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: m ? "bold" : "normal"
                },
                title: "Search",
                children: /* @__PURE__ */ s.jsx(Cn, { size: 14 })
              }
            ),
            e.favorites.length > 0 && /* @__PURE__ */ s.jsx(
              "button",
              {
                ref: y,
                type: "button",
                onClick: j,
                style: {
                  background: "none",
                  border: "none",
                  color: S ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Favorites",
                children: /* @__PURE__ */ s.jsx(
                  ar,
                  {
                    size: 14,
                    fill: S ? "var(--brand-yellow, #ffd700)" : "none"
                  }
                )
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => a(l === "tags" ? "gallery" : "tags"),
                style: {
                  background: "none",
                  border: "none",
                  color: l === "tags" ? "var(--meld-accent-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: l === "tags" ? "bold" : "normal"
                },
                title: "Tag Manager",
                children: /* @__PURE__ */ s.jsx(dr, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  const I = (e.settings["gallery.view_mode"] || "grid_details") === "grid_details" ? "grid_only" : "grid_details";
                  r("gallery.view_mode", I);
                },
                style: {
                  background: "none",
                  border: "none",
                  color: "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: e.settings["gallery.view_mode"] === "grid_only" ? "Switch to Details View" : "Switch to Grid Only View",
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ s.jsx(Up, { size: 14 }) : /* @__PURE__ */ s.jsx(lf, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  re.log(
                    "GalleryPanel: Toggle Light Table clicked, from",
                    w,
                    "to",
                    !w
                  ), _(!w);
                },
                style: {
                  background: "none",
                  border: "none",
                  color: w ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                  position: "relative",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Light Table",
                children: /* @__PURE__ */ s.jsxs("div", { style: { position: "relative" }, children: [
                  /* @__PURE__ */ s.jsx(
                    qp,
                    {
                      size: 14,
                      fill: w ? "var(--brand-yellow, #ffd700)" : "none",
                      style: { opacity: w ? 1 : 0.8 }
                    }
                  ),
                  !w && x && /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        top: "-2px",
                        right: "-2px",
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "var(--brand-yellow, #ffd700)",
                        boxShadow: "0 0 2px var(--comfy-menu-shadow, rgba(0,0,0,0.5))"
                      }
                    }
                  )
                ] })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => t({ type: "OPEN_MODAL", payload: { type: "import" } }),
                style: {
                  background: "none",
                  border: "none",
                  color: "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Import",
                children: /* @__PURE__ */ s.jsx(qr, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => n(),
                style: {
                  background: "none",
                  border: "none",
                  color: "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                disabled: e.isLoading,
                title: "Refresh",
                children: /* @__PURE__ */ s.jsx(
                  Xr,
                  {
                    size: 14,
                    className: e.isLoading ? "animate-spin" : ""
                  }
                )
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => t({ type: "OPEN_MODAL", payload: { type: "settings" } }),
                style: {
                  background: "none",
                  border: "none",
                  color: "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Settings",
                children: /* @__PURE__ */ s.jsx(af, { size: 14 })
              }
            )
          ] }),
          l === "search" && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ s.jsx(by, {}) })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__content", children: [
          /* @__PURE__ */ s.jsx(fy, {}),
          e.error && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__error", children: e.error }),
          l === "tags" ? /* @__PURE__ */ s.jsx(
            Ey,
            {
              onClose: () => a("gallery"),
              onSearch: (b) => {
                t({ type: "SET_SEARCH_QUERY", payload: b }), a("search");
              }
            }
          ) : e.isLoading && c.length === 0 ? /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-gallery__list-wrapper",
              style: {
                flex: 1,
                minHeight: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              },
              children: /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." })
            }
          ) : d.length === 0 ? /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-gallery__list-wrapper",
              style: {
                flex: 1,
                minHeight: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              },
              children: /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No images found." })
            }
          ) : /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-gallery__list-wrapper",
              style: {
                flex: 1,
                minHeight: 0,
                display: "flex",
                flexDirection: "column"
              },
              children: /* @__PURE__ */ s.jsx(
                qy,
                {
                  visibleImages: d,
                  settings: e.settings,
                  loadMoreRef: v,
                  viewerImageId: e.viewerImageId,
                  isLoading: e.isLoading,
                  hasMore: e.pagination.hasMore
                }
              )
            }
          ),
          /* @__PURE__ */ s.jsx(Py, {})
        ] }),
        e.viewerImageId !== null && /* @__PURE__ */ s.jsx(Ly, {}),
        /* @__PURE__ */ s.jsx(uy, {}),
        S && /* @__PURE__ */ s.jsx(
          ky,
          {
            anchorRect: u,
            onClose: () => h(!1),
            onSelect: k
          }
        ),
        /* @__PURE__ */ s.jsx(_y, {})
      ]
    }
  );
};
Wc.registerExtension({
  name: "Meld.UnifiedLoader",
  async beforeRegisterNodeDef(e, t, n) {
    t.name;
  },
  async nodeCreated(e) {
    if (e.comfyClass !== "MeldUnifiedLoader") return;
    const t = () => {
      var l, a;
      const n = (l = e.widgets) == null ? void 0 : l.find((o) => o.name === "positive"), r = (a = e.widgets) == null ? void 0 : a.find((o) => o.name === "negative");
      n && n.inputEl && (n.inputEl.style.borderLeft = "4px solid var(--comfy-input-text-active, #44bb44)", n.inputEl.style.paddingLeft = "8px"), r && r.inputEl && (r.inputEl.style.borderLeft = "4px solid var(--error-color, #ff4444)", r.inputEl.style.paddingLeft = "8px");
    };
    t(), setTimeout(t, 1), setTimeout(t, 100);
  }
});
const Xy = document.getElementById(
  "meld-gallery-style"
);
if (!Xy) {
  const e = document.createElement("link");
  e.id = "meld-gallery-style", e.rel = "stylesheet", e.type = "text/css";
  try {
    e.href = new URL(
      /* @vite-ignore */
      "./style.css",
      import.meta.url
    ).toString();
  } catch {
    e.href = "/extensions/ComfyUI-Meld/js/style.css";
  }
  document.head.appendChild(e);
}
let Ll = null, ct = null;
Wc.registerExtension({
  name: "ComfyUI.Meld",
  async beforeRegisterNodeDef(e, t, n) {
    if (t.name === "MeldSaveImage") {
      const r = e.prototype.onExecuted;
      e.prototype.onExecuted = function(...l) {
        r == null || r.apply(this, l);
        const a = n.ui.meld;
        a != null && a.isVisible() && a.refresh();
      };
    }
  },
  async setup(e) {
    var t;
    gy();
    try {
      const n = await uf();
      re.init(n.dev_mode), re.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld] Failed to fetch settings", n), re.init(!1);
    }
    if ((t = e.extensionManager) != null && t.registerSidebarTab) {
      e.ui.meld = {
        refresh: () => {
          window.dispatchEvent(new CustomEvent("meld-refresh"));
        },
        isVisible: () => {
          const n = document.getElementById("meld-gallery-container");
          return n && n.offsetParent !== null;
        },
        toggle: () => {
          var n;
          try {
            (n = e.extensionManager) == null || n.setSidebarTabActive("meld-gallery");
          } catch (r) {
            console.error("Error toggling sidebar:", r);
          }
        }
      }, se.addEventListener("meld-image-saved", () => {
        var n;
        (n = e.ui.meld) == null || n.refresh();
      }), se.addEventListener("meld-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-scan-progress", { detail: n.detail })
        );
      }), se.addEventListener("meld-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-scan-finished", { detail: n.detail })
        ), (r = e.ui.meld) == null || r.refresh(), re.log("Import completed.");
      }), se.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const l of n.output.images)
              if (l.type === "output")
                try {
                  await df({
                    filename: l.filename,
                    subfolder: l.subfolder,
                    type: l.type
                  });
                } catch (a) {
                  console.error("Failed to auto-register image:", a);
                }
          }
        }
      );
      try {
        e.extensionManager.registerSidebarTab({
          id: "meld-gallery",
          // NOTE: Use both the legacy mask-based icon and a PrimeIcons fallback.
          // - Web browsers typically render mask-image/data-URL icons correctly (legacy look).
          // - Some desktop WebViews (notably macOS desktop builds) may fail to render them reliably,
          //   so we keep PrimeIcons as a fallback.
          // The CSS decides which one is visible via @supports().
          icon: "meld-icon pi pi-images",
          title: "Meld",
          tooltip: "Meld Image Manager",
          type: "custom",
          render: (n) => {
            re.log("render called", {
              el: n,
              galleryRoot: Ll,
              galleryContainer: ct
            }), n.style.height = "100%", n.style.overflow = "hidden";
            let r = n.parentElement;
            for (; r && !r.classList.contains("sidebar-content-container"); )
              r.style.height = "100%", r.style.overflow = "hidden", r = r.parentElement;
            r && (r.style.overflow = "hidden"), ct || (re.log("galleryContainer not found, creating new one"), ct = document.createElement("div"), ct.id = "meld-gallery-container", ct.style.height = "100%", ct.style.width = "100%", ct.style.display = "flex", ct.style.flexDirection = "column", ct.style.overflow = "hidden"), n.contains(ct) || (re.log("Appending galleryContainer to el"), n.appendChild(ct)), Ll ? re.log(
              "[Meld] Gallery root already exists, React should handle re-render if needed"
            ) : (re.log("Creating new gallery root"), Ll = Xu(ct), Ll.render(
              Yt.createElement(
                Fg,
                null,
                Yt.createElement(Yy)
              )
            ));
          }
        });
      } catch (n) {
        console.error("Error during sidebar registration:", n);
      }
    }
  }
});
