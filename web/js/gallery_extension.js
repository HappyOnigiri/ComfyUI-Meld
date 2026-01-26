import { api as ne } from "/scripts/api.js";
import { app as Ko } from "/scripts/app.js";
function qd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yo = { exports: {} }, ae = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ar = Symbol.for("react.element"), Xd = Symbol.for("react.portal"), Jd = Symbol.for("react.fragment"), Zd = Symbol.for("react.strict_mode"), ef = Symbol.for("react.profiler"), tf = Symbol.for("react.provider"), nf = Symbol.for("react.context"), rf = Symbol.for("react.forward_ref"), lf = Symbol.for("react.suspense"), sf = Symbol.for("react.memo"), af = Symbol.for("react.lazy"), Di = Symbol.iterator;
function of(e) {
  return e === null || typeof e != "object" ? null : (e = Di && e[Di] || e["@@iterator"], typeof e == "function" ? e : null);
}
var qo = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Xo = Object.assign, Jo = {};
function Hn(e, t, n) {
  this.props = e, this.context = t, this.refs = Jo, this.updater = n || qo;
}
Hn.prototype.isReactComponent = {};
Hn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Hn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Zo() {
}
Zo.prototype = Hn.prototype;
function Da(e, t, n) {
  this.props = e, this.context = t, this.refs = Jo, this.updater = n || qo;
}
var Ra = Da.prototype = new Zo();
Ra.constructor = Da;
Xo(Ra, Hn.prototype);
Ra.isPureReactComponent = !0;
var Ri = Array.isArray, eu = Object.prototype.hasOwnProperty, za = { current: null }, tu = { key: !0, ref: !0, __self: !0, __source: !0 };
function nu(e, t, n) {
  var r, l = {}, a = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (a = "" + t.key), t) eu.call(t, r) && !tu.hasOwnProperty(r) && (l[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = n;
  else if (1 < o) {
    for (var u = Array(o), c = 0; c < o; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in o = e.defaultProps, o) l[r] === void 0 && (l[r] = o[r]);
  return { $$typeof: Ar, type: e, key: a, ref: i, props: l, _owner: za.current };
}
function uf(e, t) {
  return { $$typeof: Ar, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Aa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ar;
}
function cf(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var zi = /\/+/g;
function us(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? cf("" + e.key) : t.toString(36);
}
function ol(e, t, n, r, l) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (a) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Ar:
        case Xd:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + us(i, 0) : r, Ri(l) ? (n = "", e != null && (n = e.replace(zi, "$&/") + "/"), ol(l, t, n, "", function(c) {
    return c;
  })) : l != null && (Aa(l) && (l = uf(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(zi, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Ri(e)) for (var o = 0; o < e.length; o++) {
    a = e[o];
    var u = r + us(a, o);
    i += ol(a, t, n, u, l);
  }
  else if (u = of(e), typeof u == "function") for (e = u.call(e), o = 0; !(a = e.next()).done; ) a = a.value, u = r + us(a, o++), i += ol(a, t, n, u, l);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function Qr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return ol(e, r, "", "", function(a) {
    return t.call(n, a, l++);
  }), r;
}
function df(e) {
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
var $e = { current: null }, ul = { transition: null }, ff = { ReactCurrentDispatcher: $e, ReactCurrentBatchConfig: ul, ReactCurrentOwner: za };
function ru() {
  throw Error("act(...) is not supported in production builds of React.");
}
ae.Children = { map: Qr, forEach: function(e, t, n) {
  Qr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Qr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Qr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Aa(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ae.Component = Hn;
ae.Fragment = Jd;
ae.Profiler = ef;
ae.PureComponent = Da;
ae.StrictMode = Zd;
ae.Suspense = lf;
ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ff;
ae.act = ru;
ae.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Xo({}, e.props), l = e.key, a = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, i = za.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
    for (u in t) eu.call(t, u) && !tu.hasOwnProperty(u) && (r[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    o = Array(u);
    for (var c = 0; c < u; c++) o[c] = arguments[c + 2];
    r.children = o;
  }
  return { $$typeof: Ar, type: e.type, key: l, ref: a, props: r, _owner: i };
};
ae.createContext = function(e) {
  return e = { $$typeof: nf, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: tf, _context: e }, e.Consumer = e;
};
ae.createElement = nu;
ae.createFactory = function(e) {
  var t = nu.bind(null, e);
  return t.type = e, t;
};
ae.createRef = function() {
  return { current: null };
};
ae.forwardRef = function(e) {
  return { $$typeof: rf, render: e };
};
ae.isValidElement = Aa;
ae.lazy = function(e) {
  return { $$typeof: af, _payload: { _status: -1, _result: e }, _init: df };
};
ae.memo = function(e, t) {
  return { $$typeof: sf, type: e, compare: t === void 0 ? null : t };
};
ae.startTransition = function(e) {
  var t = ul.transition;
  ul.transition = {};
  try {
    e();
  } finally {
    ul.transition = t;
  }
};
ae.unstable_act = ru;
ae.useCallback = function(e, t) {
  return $e.current.useCallback(e, t);
};
ae.useContext = function(e) {
  return $e.current.useContext(e);
};
ae.useDebugValue = function() {
};
ae.useDeferredValue = function(e) {
  return $e.current.useDeferredValue(e);
};
ae.useEffect = function(e, t) {
  return $e.current.useEffect(e, t);
};
ae.useId = function() {
  return $e.current.useId();
};
ae.useImperativeHandle = function(e, t, n) {
  return $e.current.useImperativeHandle(e, t, n);
};
ae.useInsertionEffect = function(e, t) {
  return $e.current.useInsertionEffect(e, t);
};
ae.useLayoutEffect = function(e, t) {
  return $e.current.useLayoutEffect(e, t);
};
ae.useMemo = function(e, t) {
  return $e.current.useMemo(e, t);
};
ae.useReducer = function(e, t, n) {
  return $e.current.useReducer(e, t, n);
};
ae.useRef = function(e) {
  return $e.current.useRef(e);
};
ae.useState = function(e) {
  return $e.current.useState(e);
};
ae.useSyncExternalStore = function(e, t, n) {
  return $e.current.useSyncExternalStore(e, t, n);
};
ae.useTransition = function() {
  return $e.current.useTransition();
};
ae.version = "18.3.1";
Yo.exports = ae;
var m = Yo.exports;
const _l = /* @__PURE__ */ qd(m);
var lu = { exports: {} }, Ze = {}, su = { exports: {} }, au = {};
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
  function t(T, L) {
    var W = T.length;
    T.push(L);
    e: for (; 0 < W; ) {
      var I = W - 1 >>> 1, A = T[I];
      if (0 < l(A, L)) T[I] = L, T[W] = A, W = I;
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var L = T[0], W = T.pop();
    if (W !== L) {
      T[0] = W;
      e: for (var I = 0, A = T.length, ee = A >>> 1; I < ee; ) {
        var V = 2 * (I + 1) - 1, P = T[V], z = V + 1, F = T[z];
        if (0 > l(P, W)) z < A && 0 > l(F, P) ? (T[I] = F, T[z] = W, I = z) : (T[I] = P, T[V] = W, I = V);
        else if (z < A && 0 > l(F, W)) T[I] = F, T[z] = W, I = z;
        else break e;
      }
    }
    return L;
  }
  function l(T, L) {
    var W = T.sortIndex - L.sortIndex;
    return W !== 0 ? W : T.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function() {
      return a.now();
    };
  } else {
    var i = Date, o = i.now();
    e.unstable_now = function() {
      return i.now() - o;
    };
  }
  var u = [], c = [], h = 1, x = null, v = 3, w = !1, g = !1, _ = !1, j = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(T) {
    for (var L = n(c); L !== null; ) {
      if (L.callback === null) r(c);
      else if (L.startTime <= T) r(c), L.sortIndex = L.expirationTime, t(u, L);
      else break;
      L = n(c);
    }
  }
  function y(T) {
    if (_ = !1, p(T), !g) if (n(u) !== null) g = !0, R(E);
    else {
      var L = n(c);
      L !== null && Q(y, L.startTime - T);
    }
  }
  function E(T, L) {
    g = !1, _ && (_ = !1, d(N), N = -1), w = !0;
    var W = v;
    try {
      for (p(L), x = n(u); x !== null && (!(x.expirationTime > L) || T && !O()); ) {
        var I = x.callback;
        if (typeof I == "function") {
          x.callback = null, v = x.priorityLevel;
          var A = I(x.expirationTime <= L);
          L = e.unstable_now(), typeof A == "function" ? x.callback = A : x === n(u) && r(u), p(L);
        } else r(u);
        x = n(u);
      }
      if (x !== null) var ee = !0;
      else {
        var V = n(c);
        V !== null && Q(y, V.startTime - L), ee = !1;
      }
      return ee;
    } finally {
      x = null, v = W, w = !1;
    }
  }
  var k = !1, S = null, N = -1, $ = 5, M = -1;
  function O() {
    return !(e.unstable_now() - M < $);
  }
  function q() {
    if (S !== null) {
      var T = e.unstable_now();
      M = T;
      var L = !0;
      try {
        L = S(!0, T);
      } finally {
        L ? K() : (k = !1, S = null);
      }
    } else k = !1;
  }
  var K;
  if (typeof f == "function") K = function() {
    f(q);
  };
  else if (typeof MessageChannel < "u") {
    var C = new MessageChannel(), Y = C.port2;
    C.port1.onmessage = q, K = function() {
      Y.postMessage(null);
    };
  } else K = function() {
    j(q, 0);
  };
  function R(T) {
    S = T, k || (k = !0, K());
  }
  function Q(T, L) {
    N = j(function() {
      T(e.unstable_now());
    }, L);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    g || w || (g = !0, R(E));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $ = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return v;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(T) {
    switch (v) {
      case 1:
      case 2:
      case 3:
        var L = 3;
        break;
      default:
        L = v;
    }
    var W = v;
    v = L;
    try {
      return T();
    } finally {
      v = W;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, L) {
    switch (T) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        T = 3;
    }
    var W = v;
    v = T;
    try {
      return L();
    } finally {
      v = W;
    }
  }, e.unstable_scheduleCallback = function(T, L, W) {
    var I = e.unstable_now();
    switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? I + W : I) : W = I, T) {
      case 1:
        var A = -1;
        break;
      case 2:
        A = 250;
        break;
      case 5:
        A = 1073741823;
        break;
      case 4:
        A = 1e4;
        break;
      default:
        A = 5e3;
    }
    return A = W + A, T = { id: h++, callback: L, priorityLevel: T, startTime: W, expirationTime: A, sortIndex: -1 }, W > I ? (T.sortIndex = W, t(c, T), n(u) === null && T === n(c) && (_ ? (d(N), N = -1) : _ = !0, Q(y, W - I))) : (T.sortIndex = A, t(u, T), g || w || (g = !0, R(E))), T;
  }, e.unstable_shouldYield = O, e.unstable_wrapCallback = function(T) {
    var L = v;
    return function() {
      var W = v;
      v = L;
      try {
        return T.apply(this, arguments);
      } finally {
        v = W;
      }
    };
  };
})(au);
su.exports = au;
var pf = su.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mf = m, Je = pf;
function D(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var iu = /* @__PURE__ */ new Set(), wr = {};
function gn(e, t) {
  On(e, t), On(e + "Capture", t);
}
function On(e, t) {
  for (wr[e] = t, e = 0; e < t.length; e++) iu.add(t[e]);
}
var Ct = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), As = Object.prototype.hasOwnProperty, hf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ai = {}, Oi = {};
function gf(e) {
  return As.call(Oi, e) ? !0 : As.call(Ai, e) ? !1 : hf.test(e) ? Oi[e] = !0 : (Ai[e] = !0, !1);
}
function yf(e, t, n, r) {
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
function vf(e, t, n, r) {
  if (t === null || typeof t > "u" || yf(e, t, n, r)) return !0;
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
function We(e, t, n, r, l, a, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = i;
}
var Le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Le[e] = new We(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Le[t] = new We(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Le[e] = new We(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Le[e] = new We(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Le[e] = new We(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Le[e] = new We(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Le[e] = new We(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Le[e] = new We(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Le[e] = new We(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Oa = /[\-:]([a-z])/g;
function Fa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Oa,
    Fa
  );
  Le[t] = new We(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Oa, Fa);
  Le[t] = new We(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Oa, Fa);
  Le[t] = new We(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Le[e] = new We(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Le.xlinkHref = new We("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Le[e] = new We(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function $a(e, t, n, r) {
  var l = Le.hasOwnProperty(t) ? Le[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (vf(t, n, l, r) && (n = null), r || l === null ? gf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var bt = mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Br = Symbol.for("react.element"), xn = Symbol.for("react.portal"), _n = Symbol.for("react.fragment"), Wa = Symbol.for("react.strict_mode"), Os = Symbol.for("react.profiler"), ou = Symbol.for("react.provider"), uu = Symbol.for("react.context"), Ua = Symbol.for("react.forward_ref"), Fs = Symbol.for("react.suspense"), $s = Symbol.for("react.suspense_list"), Va = Symbol.for("react.memo"), zt = Symbol.for("react.lazy"), cu = Symbol.for("react.offscreen"), Fi = Symbol.iterator;
function Jn(e) {
  return e === null || typeof e != "object" ? null : (e = Fi && e[Fi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ve = Object.assign, cs;
function ar(e) {
  if (cs === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    cs = t && t[1] || "";
  }
  return `
` + cs + e;
}
var ds = !1;
function fs(e, t) {
  if (!e || ds) return "";
  ds = !0;
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
      } catch (c) {
        var r = c;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (c) {
        r = c;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var l = c.stack.split(`
`), a = r.stack.split(`
`), i = l.length - 1, o = a.length - 1; 1 <= i && 0 <= o && l[i] !== a[o]; ) o--;
      for (; 1 <= i && 0 <= o; i--, o--) if (l[i] !== a[o]) {
        if (i !== 1 || o !== 1)
          do
            if (i--, o--, 0 > o || l[i] !== a[o]) {
              var u = `
` + l[i].replace(" at new ", " at ");
              return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
            }
          while (1 <= i && 0 <= o);
        break;
      }
    }
  } finally {
    ds = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? ar(e) : "";
}
function wf(e) {
  switch (e.tag) {
    case 5:
      return ar(e.type);
    case 16:
      return ar("Lazy");
    case 13:
      return ar("Suspense");
    case 19:
      return ar("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = fs(e.type, !1), e;
    case 11:
      return e = fs(e.type.render, !1), e;
    case 1:
      return e = fs(e.type, !0), e;
    default:
      return "";
  }
}
function Ws(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case _n:
      return "Fragment";
    case xn:
      return "Portal";
    case Os:
      return "Profiler";
    case Wa:
      return "StrictMode";
    case Fs:
      return "Suspense";
    case $s:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case uu:
      return (e.displayName || "Context") + ".Consumer";
    case ou:
      return (e._context.displayName || "Context") + ".Provider";
    case Ua:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Va:
      return t = e.displayName || null, t !== null ? t : Ws(e.type) || "Memo";
    case zt:
      t = e._payload, e = e._init;
      try {
        return Ws(e(t));
      } catch {
      }
  }
  return null;
}
function xf(e) {
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
      return Ws(t);
    case 8:
      return t === Wa ? "StrictMode" : "Mode";
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
function qt(e) {
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
function du(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function _f(e) {
  var t = du(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, a = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r = "" + i, a.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Hr(e) {
  e._valueTracker || (e._valueTracker = _f(e));
}
function fu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = du(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function kl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Us(e, t) {
  var n = t.checked;
  return ve({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function $i(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = qt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function pu(e, t) {
  t = t.checked, t != null && $a(e, "checked", t, !1);
}
function Vs(e, t) {
  pu(e, t);
  var n = qt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Qs(e, t.type, n) : t.hasOwnProperty("defaultValue") && Qs(e, t.type, qt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Wi(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Qs(e, t, n) {
  (t !== "number" || kl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ir = Array.isArray;
function Ln(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + qt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Bs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(D(91));
  return ve({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ui(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(D(92));
      if (ir(n)) {
        if (1 < n.length) throw Error(D(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: qt(n) };
}
function mu(e, t) {
  var n = qt(t.value), r = qt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Vi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function hu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Hs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? hu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Gr, gu = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Gr = Gr || document.createElement("div"), Gr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Gr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function xr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var cr = {
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
}, kf = ["Webkit", "ms", "Moz", "O"];
Object.keys(cr).forEach(function(e) {
  kf.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), cr[t] = cr[e];
  });
});
function yu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || cr.hasOwnProperty(e) && cr[e] ? ("" + t).trim() : t + "px";
}
function vu(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = yu(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Sf = ve({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Gs(e, t) {
  if (t) {
    if (Sf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(D(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(D(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(D(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(D(62));
  }
}
function Ks(e, t) {
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
var Ys = null;
function Qa(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var qs = null, Pn = null, Dn = null;
function Qi(e) {
  if (e = $r(e)) {
    if (typeof qs != "function") throw Error(D(280));
    var t = e.stateNode;
    t && (t = Xl(t), qs(e.stateNode, e.type, t));
  }
}
function wu(e) {
  Pn ? Dn ? Dn.push(e) : Dn = [e] : Pn = e;
}
function xu() {
  if (Pn) {
    var e = Pn, t = Dn;
    if (Dn = Pn = null, Qi(e), t) for (e = 0; e < t.length; e++) Qi(t[e]);
  }
}
function _u(e, t) {
  return e(t);
}
function ku() {
}
var ps = !1;
function Su(e, t, n) {
  if (ps) return e(t, n);
  ps = !0;
  try {
    return _u(e, t, n);
  } finally {
    ps = !1, (Pn !== null || Dn !== null) && (ku(), xu());
  }
}
function _r(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Xl(n);
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
  if (n && typeof n != "function") throw Error(D(231, t, typeof n));
  return n;
}
var Xs = !1;
if (Ct) try {
  var Zn = {};
  Object.defineProperty(Zn, "passive", { get: function() {
    Xs = !0;
  } }), window.addEventListener("test", Zn, Zn), window.removeEventListener("test", Zn, Zn);
} catch {
  Xs = !1;
}
function jf(e, t, n, r, l, a, i, o, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var dr = !1, Sl = null, jl = !1, Js = null, Ef = { onError: function(e) {
  dr = !0, Sl = e;
} };
function Cf(e, t, n, r, l, a, i, o, u) {
  dr = !1, Sl = null, jf.apply(Ef, arguments);
}
function Nf(e, t, n, r, l, a, i, o, u) {
  if (Cf.apply(this, arguments), dr) {
    if (dr) {
      var c = Sl;
      dr = !1, Sl = null;
    } else throw Error(D(198));
    jl || (jl = !0, Js = c);
  }
}
function yn(e) {
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
function ju(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Bi(e) {
  if (yn(e) !== e) throw Error(D(188));
}
function Mf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = yn(e), t === null) throw Error(D(188));
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
        if (a === n) return Bi(l), e;
        if (a === r) return Bi(l), t;
        a = a.sibling;
      }
      throw Error(D(188));
    }
    if (n.return !== r.return) n = l, r = a;
    else {
      for (var i = !1, o = l.child; o; ) {
        if (o === n) {
          i = !0, n = l, r = a;
          break;
        }
        if (o === r) {
          i = !0, r = l, n = a;
          break;
        }
        o = o.sibling;
      }
      if (!i) {
        for (o = a.child; o; ) {
          if (o === n) {
            i = !0, n = a, r = l;
            break;
          }
          if (o === r) {
            i = !0, r = a, n = l;
            break;
          }
          o = o.sibling;
        }
        if (!i) throw Error(D(189));
      }
    }
    if (n.alternate !== r) throw Error(D(190));
  }
  if (n.tag !== 3) throw Error(D(188));
  return n.stateNode.current === n ? e : t;
}
function Eu(e) {
  return e = Mf(e), e !== null ? Cu(e) : null;
}
function Cu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Cu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Nu = Je.unstable_scheduleCallback, Hi = Je.unstable_cancelCallback, If = Je.unstable_shouldYield, bf = Je.unstable_requestPaint, xe = Je.unstable_now, Tf = Je.unstable_getCurrentPriorityLevel, Ba = Je.unstable_ImmediatePriority, Mu = Je.unstable_UserBlockingPriority, El = Je.unstable_NormalPriority, Lf = Je.unstable_LowPriority, Iu = Je.unstable_IdlePriority, Gl = null, wt = null;
function Pf(e) {
  if (wt && typeof wt.onCommitFiberRoot == "function") try {
    wt.onCommitFiberRoot(Gl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var pt = Math.clz32 ? Math.clz32 : zf, Df = Math.log, Rf = Math.LN2;
function zf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Df(e) / Rf | 0) | 0;
}
var Kr = 64, Yr = 4194304;
function or(e) {
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
function Cl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, a = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var o = i & ~l;
    o !== 0 ? r = or(o) : (a &= i, a !== 0 && (r = or(a)));
  } else i = n & ~l, i !== 0 ? r = or(i) : a !== 0 && (r = or(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, a = t & -t, l >= a || l === 16 && (a & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - pt(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Af(e, t) {
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
function Of(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var i = 31 - pt(a), o = 1 << i, u = l[i];
    u === -1 ? (!(o & n) || o & r) && (l[i] = Af(o, t)) : u <= t && (e.expiredLanes |= o), a &= ~o;
  }
}
function Zs(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function bu() {
  var e = Kr;
  return Kr <<= 1, !(Kr & 4194240) && (Kr = 64), e;
}
function ms(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Or(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - pt(t), e[t] = n;
}
function Ff(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - pt(n), a = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~a;
  }
}
function Ha(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - pt(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var ue = 0;
function Tu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Lu, Ga, Pu, Du, Ru, ea = !1, qr = [], Ut = null, Vt = null, Qt = null, kr = /* @__PURE__ */ new Map(), Sr = /* @__PURE__ */ new Map(), Ot = [], $f = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Gi(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ut = null;
      break;
    case "dragenter":
    case "dragleave":
      Vt = null;
      break;
    case "mouseover":
    case "mouseout":
      Qt = null;
      break;
    case "pointerover":
    case "pointerout":
      kr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Sr.delete(t.pointerId);
  }
}
function er(e, t, n, r, l, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [l] }, t !== null && (t = $r(t), t !== null && Ga(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Wf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Ut = er(Ut, e, t, n, r, l), !0;
    case "dragenter":
      return Vt = er(Vt, e, t, n, r, l), !0;
    case "mouseover":
      return Qt = er(Qt, e, t, n, r, l), !0;
    case "pointerover":
      var a = l.pointerId;
      return kr.set(a, er(kr.get(a) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return a = l.pointerId, Sr.set(a, er(Sr.get(a) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function zu(e) {
  var t = sn(e.target);
  if (t !== null) {
    var n = yn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = ju(n), t !== null) {
          e.blockedOn = t, Ru(e.priority, function() {
            Pu(n);
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
function cl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ta(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ys = r, n.target.dispatchEvent(r), Ys = null;
    } else return t = $r(n), t !== null && Ga(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ki(e, t, n) {
  cl(e) && n.delete(t);
}
function Uf() {
  ea = !1, Ut !== null && cl(Ut) && (Ut = null), Vt !== null && cl(Vt) && (Vt = null), Qt !== null && cl(Qt) && (Qt = null), kr.forEach(Ki), Sr.forEach(Ki);
}
function tr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ea || (ea = !0, Je.unstable_scheduleCallback(Je.unstable_NormalPriority, Uf)));
}
function jr(e) {
  function t(l) {
    return tr(l, e);
  }
  if (0 < qr.length) {
    tr(qr[0], e);
    for (var n = 1; n < qr.length; n++) {
      var r = qr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Ut !== null && tr(Ut, e), Vt !== null && tr(Vt, e), Qt !== null && tr(Qt, e), kr.forEach(t), Sr.forEach(t), n = 0; n < Ot.length; n++) r = Ot[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ot.length && (n = Ot[0], n.blockedOn === null); ) zu(n), n.blockedOn === null && Ot.shift();
}
var Rn = bt.ReactCurrentBatchConfig, Nl = !0;
function Vf(e, t, n, r) {
  var l = ue, a = Rn.transition;
  Rn.transition = null;
  try {
    ue = 1, Ka(e, t, n, r);
  } finally {
    ue = l, Rn.transition = a;
  }
}
function Qf(e, t, n, r) {
  var l = ue, a = Rn.transition;
  Rn.transition = null;
  try {
    ue = 4, Ka(e, t, n, r);
  } finally {
    ue = l, Rn.transition = a;
  }
}
function Ka(e, t, n, r) {
  if (Nl) {
    var l = ta(e, t, n, r);
    if (l === null) js(e, t, r, Ml, n), Gi(e, r);
    else if (Wf(l, e, t, n, r)) r.stopPropagation();
    else if (Gi(e, r), t & 4 && -1 < $f.indexOf(e)) {
      for (; l !== null; ) {
        var a = $r(l);
        if (a !== null && Lu(a), a = ta(e, t, n, r), a === null && js(e, t, r, Ml, n), a === l) break;
        l = a;
      }
      l !== null && r.stopPropagation();
    } else js(e, t, r, null, n);
  }
}
var Ml = null;
function ta(e, t, n, r) {
  if (Ml = null, e = Qa(r), e = sn(e), e !== null) if (t = yn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = ju(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Ml = e, null;
}
function Au(e) {
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
      switch (Tf()) {
        case Ba:
          return 1;
        case Mu:
          return 4;
        case El:
        case Lf:
          return 16;
        case Iu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var $t = null, Ya = null, dl = null;
function Ou() {
  if (dl) return dl;
  var e, t = Ya, n = t.length, r, l = "value" in $t ? $t.value : $t.textContent, a = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[a - r]; r++) ;
  return dl = l.slice(e, 1 < r ? 1 - r : void 0);
}
function fl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Xr() {
  return !0;
}
function Yi() {
  return !1;
}
function et(e) {
  function t(n, r, l, a, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = a, this.target = i, this.currentTarget = null;
    for (var o in e) e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(a) : a[o]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? Xr : Yi, this.isPropagationStopped = Yi, this;
  }
  return ve(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Xr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Xr);
  }, persist: function() {
  }, isPersistent: Xr }), t;
}
var Gn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, qa = et(Gn), Fr = ve({}, Gn, { view: 0, detail: 0 }), Bf = et(Fr), hs, gs, nr, Kl = ve({}, Fr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Xa, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== nr && (nr && e.type === "mousemove" ? (hs = e.screenX - nr.screenX, gs = e.screenY - nr.screenY) : gs = hs = 0, nr = e), hs);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : gs;
} }), qi = et(Kl), Hf = ve({}, Kl, { dataTransfer: 0 }), Gf = et(Hf), Kf = ve({}, Fr, { relatedTarget: 0 }), ys = et(Kf), Yf = ve({}, Gn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), qf = et(Yf), Xf = ve({}, Gn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Jf = et(Xf), Zf = ve({}, Gn, { data: 0 }), Xi = et(Zf), ep = {
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
}, tp = {
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
}, np = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function rp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = np[e]) ? !!t[e] : !1;
}
function Xa() {
  return rp;
}
var lp = ve({}, Fr, { key: function(e) {
  if (e.key) {
    var t = ep[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = fl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? tp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Xa, charCode: function(e) {
  return e.type === "keypress" ? fl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? fl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), sp = et(lp), ap = ve({}, Kl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ji = et(ap), ip = ve({}, Fr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Xa }), op = et(ip), up = ve({}, Gn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), cp = et(up), dp = ve({}, Kl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), fp = et(dp), pp = [9, 13, 27, 32], Ja = Ct && "CompositionEvent" in window, fr = null;
Ct && "documentMode" in document && (fr = document.documentMode);
var mp = Ct && "TextEvent" in window && !fr, Fu = Ct && (!Ja || fr && 8 < fr && 11 >= fr), Zi = " ", eo = !1;
function $u(e, t) {
  switch (e) {
    case "keyup":
      return pp.indexOf(t.keyCode) !== -1;
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
function Wu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var kn = !1;
function hp(e, t) {
  switch (e) {
    case "compositionend":
      return Wu(t);
    case "keypress":
      return t.which !== 32 ? null : (eo = !0, Zi);
    case "textInput":
      return e = t.data, e === Zi && eo ? null : e;
    default:
      return null;
  }
}
function gp(e, t) {
  if (kn) return e === "compositionend" || !Ja && $u(e, t) ? (e = Ou(), dl = Ya = $t = null, kn = !1, e) : null;
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
      return Fu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var yp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function to(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!yp[e.type] : t === "textarea";
}
function Uu(e, t, n, r) {
  wu(r), t = Il(t, "onChange"), 0 < t.length && (n = new qa("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var pr = null, Er = null;
function vp(e) {
  Zu(e, 0);
}
function Yl(e) {
  var t = En(e);
  if (fu(t)) return e;
}
function wp(e, t) {
  if (e === "change") return t;
}
var Vu = !1;
if (Ct) {
  var vs;
  if (Ct) {
    var ws = "oninput" in document;
    if (!ws) {
      var no = document.createElement("div");
      no.setAttribute("oninput", "return;"), ws = typeof no.oninput == "function";
    }
    vs = ws;
  } else vs = !1;
  Vu = vs && (!document.documentMode || 9 < document.documentMode);
}
function ro() {
  pr && (pr.detachEvent("onpropertychange", Qu), Er = pr = null);
}
function Qu(e) {
  if (e.propertyName === "value" && Yl(Er)) {
    var t = [];
    Uu(t, Er, e, Qa(e)), Su(vp, t);
  }
}
function xp(e, t, n) {
  e === "focusin" ? (ro(), pr = t, Er = n, pr.attachEvent("onpropertychange", Qu)) : e === "focusout" && ro();
}
function _p(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Yl(Er);
}
function kp(e, t) {
  if (e === "click") return Yl(t);
}
function Sp(e, t) {
  if (e === "input" || e === "change") return Yl(t);
}
function jp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ht = typeof Object.is == "function" ? Object.is : jp;
function Cr(e, t) {
  if (ht(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!As.call(t, l) || !ht(e[l], t[l])) return !1;
  }
  return !0;
}
function lo(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function so(e, t) {
  var n = lo(e);
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
    n = lo(n);
  }
}
function Bu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Bu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Hu() {
  for (var e = window, t = kl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = kl(e.document);
  }
  return t;
}
function Za(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Ep(e) {
  var t = Hu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Bu(n.ownerDocument.documentElement, n)) {
    if (r !== null && Za(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, a = Math.min(r.start, l);
        r = r.end === void 0 ? a : Math.min(r.end, l), !e.extend && a > r && (l = r, r = a, a = l), l = so(n, a);
        var i = so(
          n,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Cp = Ct && "documentMode" in document && 11 >= document.documentMode, Sn = null, na = null, mr = null, ra = !1;
function ao(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ra || Sn == null || Sn !== kl(r) || (r = Sn, "selectionStart" in r && Za(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), mr && Cr(mr, r) || (mr = r, r = Il(na, "onSelect"), 0 < r.length && (t = new qa("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Sn)));
}
function Jr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var jn = { animationend: Jr("Animation", "AnimationEnd"), animationiteration: Jr("Animation", "AnimationIteration"), animationstart: Jr("Animation", "AnimationStart"), transitionend: Jr("Transition", "TransitionEnd") }, xs = {}, Gu = {};
Ct && (Gu = document.createElement("div").style, "AnimationEvent" in window || (delete jn.animationend.animation, delete jn.animationiteration.animation, delete jn.animationstart.animation), "TransitionEvent" in window || delete jn.transitionend.transition);
function ql(e) {
  if (xs[e]) return xs[e];
  if (!jn[e]) return e;
  var t = jn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Gu) return xs[e] = t[n];
  return e;
}
var Ku = ql("animationend"), Yu = ql("animationiteration"), qu = ql("animationstart"), Xu = ql("transitionend"), Ju = /* @__PURE__ */ new Map(), io = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Zt(e, t) {
  Ju.set(e, t), gn(t, [e]);
}
for (var _s = 0; _s < io.length; _s++) {
  var ks = io[_s], Np = ks.toLowerCase(), Mp = ks[0].toUpperCase() + ks.slice(1);
  Zt(Np, "on" + Mp);
}
Zt(Ku, "onAnimationEnd");
Zt(Yu, "onAnimationIteration");
Zt(qu, "onAnimationStart");
Zt("dblclick", "onDoubleClick");
Zt("focusin", "onFocus");
Zt("focusout", "onBlur");
Zt(Xu, "onTransitionEnd");
On("onMouseEnter", ["mouseout", "mouseover"]);
On("onMouseLeave", ["mouseout", "mouseover"]);
On("onPointerEnter", ["pointerout", "pointerover"]);
On("onPointerLeave", ["pointerout", "pointerover"]);
gn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
gn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
gn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
gn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
gn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
gn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ur = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ip = new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));
function oo(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Nf(r, t, void 0, e), e.currentTarget = null;
}
function Zu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var o = r[i], u = o.instance, c = o.currentTarget;
        if (o = o.listener, u !== a && l.isPropagationStopped()) break e;
        oo(l, o, c), a = u;
      }
      else for (i = 0; i < r.length; i++) {
        if (o = r[i], u = o.instance, c = o.currentTarget, o = o.listener, u !== a && l.isPropagationStopped()) break e;
        oo(l, o, c), a = u;
      }
    }
  }
  if (jl) throw e = Js, jl = !1, Js = null, e;
}
function pe(e, t) {
  var n = t[oa];
  n === void 0 && (n = t[oa] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ec(t, e, 2, !1), n.add(r));
}
function Ss(e, t, n) {
  var r = 0;
  t && (r |= 4), ec(n, e, r, t);
}
var Zr = "_reactListening" + Math.random().toString(36).slice(2);
function Nr(e) {
  if (!e[Zr]) {
    e[Zr] = !0, iu.forEach(function(n) {
      n !== "selectionchange" && (Ip.has(n) || Ss(n, !1, e), Ss(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Zr] || (t[Zr] = !0, Ss("selectionchange", !1, t));
  }
}
function ec(e, t, n, r) {
  switch (Au(t)) {
    case 1:
      var l = Vf;
      break;
    case 4:
      l = Qf;
      break;
    default:
      l = Ka;
  }
  n = l.bind(null, t, n, e), l = void 0, !Xs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function js(e, t, n, r, l) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var o = r.stateNode.containerInfo;
      if (o === l || o.nodeType === 8 && o.parentNode === l) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var u = i.tag;
        if ((u === 3 || u === 4) && (u = i.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l)) return;
        i = i.return;
      }
      for (; o !== null; ) {
        if (i = sn(o), i === null) return;
        if (u = i.tag, u === 5 || u === 6) {
          r = a = i;
          continue e;
        }
        o = o.parentNode;
      }
    }
    r = r.return;
  }
  Su(function() {
    var c = a, h = Qa(n), x = [];
    e: {
      var v = Ju.get(e);
      if (v !== void 0) {
        var w = qa, g = e;
        switch (e) {
          case "keypress":
            if (fl(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = sp;
            break;
          case "focusin":
            g = "focus", w = ys;
            break;
          case "focusout":
            g = "blur", w = ys;
            break;
          case "beforeblur":
          case "afterblur":
            w = ys;
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
            w = qi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Gf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = op;
            break;
          case Ku:
          case Yu:
          case qu:
            w = qf;
            break;
          case Xu:
            w = cp;
            break;
          case "scroll":
            w = Bf;
            break;
          case "wheel":
            w = fp;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Jf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Ji;
        }
        var _ = (t & 4) !== 0, j = !_ && e === "scroll", d = _ ? v !== null ? v + "Capture" : null : v;
        _ = [];
        for (var f = c, p; f !== null; ) {
          p = f;
          var y = p.stateNode;
          if (p.tag === 5 && y !== null && (p = y, d !== null && (y = _r(f, d), y != null && _.push(Mr(f, y, p)))), j) break;
          f = f.return;
        }
        0 < _.length && (v = new w(v, g, null, n, h), x.push({ event: v, listeners: _ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", v && n !== Ys && (g = n.relatedTarget || n.fromElement) && (sn(g) || g[Nt])) break e;
        if ((w || v) && (v = h.window === h ? h : (v = h.ownerDocument) ? v.defaultView || v.parentWindow : window, w ? (g = n.relatedTarget || n.toElement, w = c, g = g ? sn(g) : null, g !== null && (j = yn(g), g !== j || g.tag !== 5 && g.tag !== 6) && (g = null)) : (w = null, g = c), w !== g)) {
          if (_ = qi, y = "onMouseLeave", d = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (_ = Ji, y = "onPointerLeave", d = "onPointerEnter", f = "pointer"), j = w == null ? v : En(w), p = g == null ? v : En(g), v = new _(y, f + "leave", w, n, h), v.target = j, v.relatedTarget = p, y = null, sn(h) === c && (_ = new _(d, f + "enter", g, n, h), _.target = p, _.relatedTarget = j, y = _), j = y, w && g) t: {
            for (_ = w, d = g, f = 0, p = _; p; p = wn(p)) f++;
            for (p = 0, y = d; y; y = wn(y)) p++;
            for (; 0 < f - p; ) _ = wn(_), f--;
            for (; 0 < p - f; ) d = wn(d), p--;
            for (; f--; ) {
              if (_ === d || d !== null && _ === d.alternate) break t;
              _ = wn(_), d = wn(d);
            }
            _ = null;
          }
          else _ = null;
          w !== null && uo(x, v, w, _, !1), g !== null && j !== null && uo(x, j, g, _, !0);
        }
      }
      e: {
        if (v = c ? En(c) : window, w = v.nodeName && v.nodeName.toLowerCase(), w === "select" || w === "input" && v.type === "file") var E = wp;
        else if (to(v)) if (Vu) E = Sp;
        else {
          E = _p;
          var k = xp;
        }
        else (w = v.nodeName) && w.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (E = kp);
        if (E && (E = E(e, c))) {
          Uu(x, E, n, h);
          break e;
        }
        k && k(e, v, c), e === "focusout" && (k = v._wrapperState) && k.controlled && v.type === "number" && Qs(v, "number", v.value);
      }
      switch (k = c ? En(c) : window, e) {
        case "focusin":
          (to(k) || k.contentEditable === "true") && (Sn = k, na = c, mr = null);
          break;
        case "focusout":
          mr = na = Sn = null;
          break;
        case "mousedown":
          ra = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ra = !1, ao(x, n, h);
          break;
        case "selectionchange":
          if (Cp) break;
        case "keydown":
        case "keyup":
          ao(x, n, h);
      }
      var S;
      if (Ja) e: {
        switch (e) {
          case "compositionstart":
            var N = "onCompositionStart";
            break e;
          case "compositionend":
            N = "onCompositionEnd";
            break e;
          case "compositionupdate":
            N = "onCompositionUpdate";
            break e;
        }
        N = void 0;
      }
      else kn ? $u(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N && (Fu && n.locale !== "ko" && (kn || N !== "onCompositionStart" ? N === "onCompositionEnd" && kn && (S = Ou()) : ($t = h, Ya = "value" in $t ? $t.value : $t.textContent, kn = !0)), k = Il(c, N), 0 < k.length && (N = new Xi(N, e, null, n, h), x.push({ event: N, listeners: k }), S ? N.data = S : (S = Wu(n), S !== null && (N.data = S)))), (S = mp ? hp(e, n) : gp(e, n)) && (c = Il(c, "onBeforeInput"), 0 < c.length && (h = new Xi("onBeforeInput", "beforeinput", null, n, h), x.push({ event: h, listeners: c }), h.data = S));
    }
    Zu(x, t);
  });
}
function Mr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Il(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, a = l.stateNode;
    l.tag === 5 && a !== null && (l = a, a = _r(e, n), a != null && r.unshift(Mr(e, a, l)), a = _r(e, t), a != null && r.push(Mr(e, a, l))), e = e.return;
  }
  return r;
}
function wn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function uo(e, t, n, r, l) {
  for (var a = t._reactName, i = []; n !== null && n !== r; ) {
    var o = n, u = o.alternate, c = o.stateNode;
    if (u !== null && u === r) break;
    o.tag === 5 && c !== null && (o = c, l ? (u = _r(n, a), u != null && i.unshift(Mr(n, u, o))) : l || (u = _r(n, a), u != null && i.push(Mr(n, u, o)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var bp = /\r\n?/g, Tp = /\u0000|\uFFFD/g;
function co(e) {
  return (typeof e == "string" ? e : "" + e).replace(bp, `
`).replace(Tp, "");
}
function el(e, t, n) {
  if (t = co(t), co(e) !== t && n) throw Error(D(425));
}
function bl() {
}
var la = null, sa = null;
function aa(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ia = typeof setTimeout == "function" ? setTimeout : void 0, Lp = typeof clearTimeout == "function" ? clearTimeout : void 0, fo = typeof Promise == "function" ? Promise : void 0, Pp = typeof queueMicrotask == "function" ? queueMicrotask : typeof fo < "u" ? function(e) {
  return fo.resolve(null).then(e).catch(Dp);
} : ia;
function Dp(e) {
  setTimeout(function() {
    throw e;
  });
}
function Es(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), jr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  jr(t);
}
function Bt(e) {
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
function po(e) {
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
var Kn = Math.random().toString(36).slice(2), vt = "__reactFiber$" + Kn, Ir = "__reactProps$" + Kn, Nt = "__reactContainer$" + Kn, oa = "__reactEvents$" + Kn, Rp = "__reactListeners$" + Kn, zp = "__reactHandles$" + Kn;
function sn(e) {
  var t = e[vt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Nt] || n[vt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = po(e); e !== null; ) {
        if (n = e[vt]) return n;
        e = po(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function $r(e) {
  return e = e[vt] || e[Nt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function En(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(D(33));
}
function Xl(e) {
  return e[Ir] || null;
}
var ua = [], Cn = -1;
function en(e) {
  return { current: e };
}
function me(e) {
  0 > Cn || (e.current = ua[Cn], ua[Cn] = null, Cn--);
}
function fe(e, t) {
  Cn++, ua[Cn] = e.current, e.current = t;
}
var Xt = {}, ze = en(Xt), Qe = en(!1), dn = Xt;
function Fn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Xt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, a;
  for (a in n) l[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Be(e) {
  return e = e.childContextTypes, e != null;
}
function Tl() {
  me(Qe), me(ze);
}
function mo(e, t, n) {
  if (ze.current !== Xt) throw Error(D(168));
  fe(ze, t), fe(Qe, n);
}
function tc(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(D(108, xf(e) || "Unknown", l));
  return ve({}, n, r);
}
function Ll(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Xt, dn = ze.current, fe(ze, e), fe(Qe, Qe.current), !0;
}
function ho(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(D(169));
  n ? (e = tc(e, t, dn), r.__reactInternalMemoizedMergedChildContext = e, me(Qe), me(ze), fe(ze, e)) : me(Qe), fe(Qe, n);
}
var kt = null, Jl = !1, Cs = !1;
function nc(e) {
  kt === null ? kt = [e] : kt.push(e);
}
function Ap(e) {
  Jl = !0, nc(e);
}
function tn() {
  if (!Cs && kt !== null) {
    Cs = !0;
    var e = 0, t = ue;
    try {
      var n = kt;
      for (ue = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      kt = null, Jl = !1;
    } catch (l) {
      throw kt !== null && (kt = kt.slice(e + 1)), Nu(Ba, tn), l;
    } finally {
      ue = t, Cs = !1;
    }
  }
  return null;
}
var Nn = [], Mn = 0, Pl = null, Dl = 0, tt = [], nt = 0, fn = null, St = 1, jt = "";
function rn(e, t) {
  Nn[Mn++] = Dl, Nn[Mn++] = Pl, Pl = e, Dl = t;
}
function rc(e, t, n) {
  tt[nt++] = St, tt[nt++] = jt, tt[nt++] = fn, fn = e;
  var r = St;
  e = jt;
  var l = 32 - pt(r) - 1;
  r &= ~(1 << l), n += 1;
  var a = 32 - pt(t) + l;
  if (30 < a) {
    var i = l - l % 5;
    a = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, St = 1 << 32 - pt(t) + l | n << l | r, jt = a + e;
  } else St = 1 << a | n << l | r, jt = e;
}
function ei(e) {
  e.return !== null && (rn(e, 1), rc(e, 1, 0));
}
function ti(e) {
  for (; e === Pl; ) Pl = Nn[--Mn], Nn[Mn] = null, Dl = Nn[--Mn], Nn[Mn] = null;
  for (; e === fn; ) fn = tt[--nt], tt[nt] = null, jt = tt[--nt], tt[nt] = null, St = tt[--nt], tt[nt] = null;
}
var Xe = null, qe = null, he = !1, dt = null;
function lc(e, t) {
  var n = rt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function go(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Xe = e, qe = Bt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Xe = e, qe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = fn !== null ? { id: St, overflow: jt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = rt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Xe = e, qe = null, !0) : !1;
    default:
      return !1;
  }
}
function ca(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function da(e) {
  if (he) {
    var t = qe;
    if (t) {
      var n = t;
      if (!go(e, t)) {
        if (ca(e)) throw Error(D(418));
        t = Bt(n.nextSibling);
        var r = Xe;
        t && go(e, t) ? lc(r, n) : (e.flags = e.flags & -4097 | 2, he = !1, Xe = e);
      }
    } else {
      if (ca(e)) throw Error(D(418));
      e.flags = e.flags & -4097 | 2, he = !1, Xe = e;
    }
  }
}
function yo(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Xe = e;
}
function tl(e) {
  if (e !== Xe) return !1;
  if (!he) return yo(e), he = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !aa(e.type, e.memoizedProps)), t && (t = qe)) {
    if (ca(e)) throw sc(), Error(D(418));
    for (; t; ) lc(e, t), t = Bt(t.nextSibling);
  }
  if (yo(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(D(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              qe = Bt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      qe = null;
    }
  } else qe = Xe ? Bt(e.stateNode.nextSibling) : null;
  return !0;
}
function sc() {
  for (var e = qe; e; ) e = Bt(e.nextSibling);
}
function $n() {
  qe = Xe = null, he = !1;
}
function ni(e) {
  dt === null ? dt = [e] : dt.push(e);
}
var Op = bt.ReactCurrentBatchConfig;
function rr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(D(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(D(147, e));
      var l = r, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(i) {
        var o = l.refs;
        i === null ? delete o[a] : o[a] = i;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string") throw Error(D(284));
    if (!n._owner) throw Error(D(290, e));
  }
  return e;
}
function nl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(D(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function vo(e) {
  var t = e._init;
  return t(e._payload);
}
function ac(e) {
  function t(d, f) {
    if (e) {
      var p = d.deletions;
      p === null ? (d.deletions = [f], d.flags |= 16) : p.push(f);
    }
  }
  function n(d, f) {
    if (!e) return null;
    for (; f !== null; ) t(d, f), f = f.sibling;
    return null;
  }
  function r(d, f) {
    for (d = /* @__PURE__ */ new Map(); f !== null; ) f.key !== null ? d.set(f.key, f) : d.set(f.index, f), f = f.sibling;
    return d;
  }
  function l(d, f) {
    return d = Yt(d, f), d.index = 0, d.sibling = null, d;
  }
  function a(d, f, p) {
    return d.index = p, e ? (p = d.alternate, p !== null ? (p = p.index, p < f ? (d.flags |= 2, f) : p) : (d.flags |= 2, f)) : (d.flags |= 1048576, f);
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function o(d, f, p, y) {
    return f === null || f.tag !== 6 ? (f = Ps(p, d.mode, y), f.return = d, f) : (f = l(f, p), f.return = d, f);
  }
  function u(d, f, p, y) {
    var E = p.type;
    return E === _n ? h(d, f, p.props.children, y, p.key) : f !== null && (f.elementType === E || typeof E == "object" && E !== null && E.$$typeof === zt && vo(E) === f.type) ? (y = l(f, p.props), y.ref = rr(d, f, p), y.return = d, y) : (y = wl(p.type, p.key, p.props, null, d.mode, y), y.ref = rr(d, f, p), y.return = d, y);
  }
  function c(d, f, p, y) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== p.containerInfo || f.stateNode.implementation !== p.implementation ? (f = Ds(p, d.mode, y), f.return = d, f) : (f = l(f, p.children || []), f.return = d, f);
  }
  function h(d, f, p, y, E) {
    return f === null || f.tag !== 7 ? (f = cn(p, d.mode, y, E), f.return = d, f) : (f = l(f, p), f.return = d, f);
  }
  function x(d, f, p) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = Ps("" + f, d.mode, p), f.return = d, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Br:
          return p = wl(f.type, f.key, f.props, null, d.mode, p), p.ref = rr(d, null, f), p.return = d, p;
        case xn:
          return f = Ds(f, d.mode, p), f.return = d, f;
        case zt:
          var y = f._init;
          return x(d, y(f._payload), p);
      }
      if (ir(f) || Jn(f)) return f = cn(f, d.mode, p, null), f.return = d, f;
      nl(d, f);
    }
    return null;
  }
  function v(d, f, p, y) {
    var E = f !== null ? f.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return E !== null ? null : o(d, f, "" + p, y);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Br:
          return p.key === E ? u(d, f, p, y) : null;
        case xn:
          return p.key === E ? c(d, f, p, y) : null;
        case zt:
          return E = p._init, v(
            d,
            f,
            E(p._payload),
            y
          );
      }
      if (ir(p) || Jn(p)) return E !== null ? null : h(d, f, p, y, null);
      nl(d, p);
    }
    return null;
  }
  function w(d, f, p, y, E) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return d = d.get(p) || null, o(f, d, "" + y, E);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Br:
          return d = d.get(y.key === null ? p : y.key) || null, u(f, d, y, E);
        case xn:
          return d = d.get(y.key === null ? p : y.key) || null, c(f, d, y, E);
        case zt:
          var k = y._init;
          return w(d, f, p, k(y._payload), E);
      }
      if (ir(y) || Jn(y)) return d = d.get(p) || null, h(f, d, y, E, null);
      nl(f, y);
    }
    return null;
  }
  function g(d, f, p, y) {
    for (var E = null, k = null, S = f, N = f = 0, $ = null; S !== null && N < p.length; N++) {
      S.index > N ? ($ = S, S = null) : $ = S.sibling;
      var M = v(d, S, p[N], y);
      if (M === null) {
        S === null && (S = $);
        break;
      }
      e && S && M.alternate === null && t(d, S), f = a(M, f, N), k === null ? E = M : k.sibling = M, k = M, S = $;
    }
    if (N === p.length) return n(d, S), he && rn(d, N), E;
    if (S === null) {
      for (; N < p.length; N++) S = x(d, p[N], y), S !== null && (f = a(S, f, N), k === null ? E = S : k.sibling = S, k = S);
      return he && rn(d, N), E;
    }
    for (S = r(d, S); N < p.length; N++) $ = w(S, d, N, p[N], y), $ !== null && (e && $.alternate !== null && S.delete($.key === null ? N : $.key), f = a($, f, N), k === null ? E = $ : k.sibling = $, k = $);
    return e && S.forEach(function(O) {
      return t(d, O);
    }), he && rn(d, N), E;
  }
  function _(d, f, p, y) {
    var E = Jn(p);
    if (typeof E != "function") throw Error(D(150));
    if (p = E.call(p), p == null) throw Error(D(151));
    for (var k = E = null, S = f, N = f = 0, $ = null, M = p.next(); S !== null && !M.done; N++, M = p.next()) {
      S.index > N ? ($ = S, S = null) : $ = S.sibling;
      var O = v(d, S, M.value, y);
      if (O === null) {
        S === null && (S = $);
        break;
      }
      e && S && O.alternate === null && t(d, S), f = a(O, f, N), k === null ? E = O : k.sibling = O, k = O, S = $;
    }
    if (M.done) return n(
      d,
      S
    ), he && rn(d, N), E;
    if (S === null) {
      for (; !M.done; N++, M = p.next()) M = x(d, M.value, y), M !== null && (f = a(M, f, N), k === null ? E = M : k.sibling = M, k = M);
      return he && rn(d, N), E;
    }
    for (S = r(d, S); !M.done; N++, M = p.next()) M = w(S, d, N, M.value, y), M !== null && (e && M.alternate !== null && S.delete(M.key === null ? N : M.key), f = a(M, f, N), k === null ? E = M : k.sibling = M, k = M);
    return e && S.forEach(function(q) {
      return t(d, q);
    }), he && rn(d, N), E;
  }
  function j(d, f, p, y) {
    if (typeof p == "object" && p !== null && p.type === _n && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Br:
          e: {
            for (var E = p.key, k = f; k !== null; ) {
              if (k.key === E) {
                if (E = p.type, E === _n) {
                  if (k.tag === 7) {
                    n(d, k.sibling), f = l(k, p.props.children), f.return = d, d = f;
                    break e;
                  }
                } else if (k.elementType === E || typeof E == "object" && E !== null && E.$$typeof === zt && vo(E) === k.type) {
                  n(d, k.sibling), f = l(k, p.props), f.ref = rr(d, k, p), f.return = d, d = f;
                  break e;
                }
                n(d, k);
                break;
              } else t(d, k);
              k = k.sibling;
            }
            p.type === _n ? (f = cn(p.props.children, d.mode, y, p.key), f.return = d, d = f) : (y = wl(p.type, p.key, p.props, null, d.mode, y), y.ref = rr(d, f, p), y.return = d, d = y);
          }
          return i(d);
        case xn:
          e: {
            for (k = p.key; f !== null; ) {
              if (f.key === k) if (f.tag === 4 && f.stateNode.containerInfo === p.containerInfo && f.stateNode.implementation === p.implementation) {
                n(d, f.sibling), f = l(f, p.children || []), f.return = d, d = f;
                break e;
              } else {
                n(d, f);
                break;
              }
              else t(d, f);
              f = f.sibling;
            }
            f = Ds(p, d.mode, y), f.return = d, d = f;
          }
          return i(d);
        case zt:
          return k = p._init, j(d, f, k(p._payload), y);
      }
      if (ir(p)) return g(d, f, p, y);
      if (Jn(p)) return _(d, f, p, y);
      nl(d, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, f !== null && f.tag === 6 ? (n(d, f.sibling), f = l(f, p), f.return = d, d = f) : (n(d, f), f = Ps(p, d.mode, y), f.return = d, d = f), i(d)) : n(d, f);
  }
  return j;
}
var Wn = ac(!0), ic = ac(!1), Rl = en(null), zl = null, In = null, ri = null;
function li() {
  ri = In = zl = null;
}
function si(e) {
  var t = Rl.current;
  me(Rl), e._currentValue = t;
}
function fa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function zn(e, t) {
  zl = e, ri = In = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ve = !0), e.firstContext = null);
}
function st(e) {
  var t = e._currentValue;
  if (ri !== e) if (e = { context: e, memoizedValue: t, next: null }, In === null) {
    if (zl === null) throw Error(D(308));
    In = e, zl.dependencies = { lanes: 0, firstContext: e };
  } else In = In.next = e;
  return t;
}
var an = null;
function ai(e) {
  an === null ? an = [e] : an.push(e);
}
function oc(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, ai(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Mt(e, r);
}
function Mt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var At = !1;
function ii(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function uc(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Et(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ht(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, oe & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Mt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, ai(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Mt(e, n);
}
function pl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ha(e, n);
  }
}
function wo(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, a = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        a === null ? l = a = i : a = a.next = i, n = n.next;
      } while (n !== null);
      a === null ? l = a = t : a = a.next = t;
    } else l = a = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: a, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Al(e, t, n, r) {
  var l = e.updateQueue;
  At = !1;
  var a = l.firstBaseUpdate, i = l.lastBaseUpdate, o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var u = o, c = u.next;
    u.next = null, i === null ? a = c : i.next = c, i = u;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, o = h.lastBaseUpdate, o !== i && (o === null ? h.firstBaseUpdate = c : o.next = c, h.lastBaseUpdate = u));
  }
  if (a !== null) {
    var x = l.baseState;
    i = 0, h = c = u = null, o = a;
    do {
      var v = o.lane, w = o.eventTime;
      if ((r & v) === v) {
        h !== null && (h = h.next = {
          eventTime: w,
          lane: 0,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null
        });
        e: {
          var g = e, _ = o;
          switch (v = t, w = n, _.tag) {
            case 1:
              if (g = _.payload, typeof g == "function") {
                x = g.call(w, x, v);
                break e;
              }
              x = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = _.payload, v = typeof g == "function" ? g.call(w, x, v) : g, v == null) break e;
              x = ve({}, x, v);
              break e;
            case 2:
              At = !0;
          }
        }
        o.callback !== null && o.lane !== 0 && (e.flags |= 64, v = l.effects, v === null ? l.effects = [o] : v.push(o));
      } else w = { eventTime: w, lane: v, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, h === null ? (c = h = w, u = x) : h = h.next = w, i |= v;
      if (o = o.next, o === null) {
        if (o = l.shared.pending, o === null) break;
        v = o, o = v.next, v.next = null, l.lastBaseUpdate = v, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (u = x), l.baseState = u, l.firstBaseUpdate = c, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else a === null && (l.shared.lanes = 0);
    mn |= i, e.lanes = i, e.memoizedState = x;
  }
}
function xo(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(D(191, l));
      l.call(r);
    }
  }
}
var Wr = {}, xt = en(Wr), br = en(Wr), Tr = en(Wr);
function on(e) {
  if (e === Wr) throw Error(D(174));
  return e;
}
function oi(e, t) {
  switch (fe(Tr, t), fe(br, e), fe(xt, Wr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Hs(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Hs(t, e);
  }
  me(xt), fe(xt, t);
}
function Un() {
  me(xt), me(br), me(Tr);
}
function cc(e) {
  on(Tr.current);
  var t = on(xt.current), n = Hs(t, e.type);
  t !== n && (fe(br, e), fe(xt, n));
}
function ui(e) {
  br.current === e && (me(xt), me(br));
}
var ge = en(0);
function Ol(e) {
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
var Ns = [];
function ci() {
  for (var e = 0; e < Ns.length; e++) Ns[e]._workInProgressVersionPrimary = null;
  Ns.length = 0;
}
var ml = bt.ReactCurrentDispatcher, Ms = bt.ReactCurrentBatchConfig, pn = 0, ye = null, je = null, Ne = null, Fl = !1, hr = !1, Lr = 0, Fp = 0;
function Pe() {
  throw Error(D(321));
}
function di(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!ht(e[n], t[n])) return !1;
  return !0;
}
function fi(e, t, n, r, l, a) {
  if (pn = a, ye = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ml.current = e === null || e.memoizedState === null ? Vp : Qp, e = n(r, l), hr) {
    a = 0;
    do {
      if (hr = !1, Lr = 0, 25 <= a) throw Error(D(301));
      a += 1, Ne = je = null, t.updateQueue = null, ml.current = Bp, e = n(r, l);
    } while (hr);
  }
  if (ml.current = $l, t = je !== null && je.next !== null, pn = 0, Ne = je = ye = null, Fl = !1, t) throw Error(D(300));
  return e;
}
function pi() {
  var e = Lr !== 0;
  return Lr = 0, e;
}
function yt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ne === null ? ye.memoizedState = Ne = e : Ne = Ne.next = e, Ne;
}
function at() {
  if (je === null) {
    var e = ye.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = je.next;
  var t = Ne === null ? ye.memoizedState : Ne.next;
  if (t !== null) Ne = t, je = e;
  else {
    if (e === null) throw Error(D(310));
    je = e, e = { memoizedState: je.memoizedState, baseState: je.baseState, baseQueue: je.baseQueue, queue: je.queue, next: null }, Ne === null ? ye.memoizedState = Ne = e : Ne = Ne.next = e;
  }
  return Ne;
}
function Pr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Is(e) {
  var t = at(), n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = je, l = r.baseQueue, a = n.pending;
  if (a !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = a.next, a.next = i;
    }
    r.baseQueue = l = a, n.pending = null;
  }
  if (l !== null) {
    a = l.next, r = r.baseState;
    var o = i = null, u = null, c = a;
    do {
      var h = c.lane;
      if ((pn & h) === h) u !== null && (u = u.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var x = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        u === null ? (o = u = x, i = r) : u = u.next = x, ye.lanes |= h, mn |= h;
      }
      c = c.next;
    } while (c !== null && c !== a);
    u === null ? i = r : u.next = o, ht(r, t.memoizedState) || (Ve = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      a = l.lane, ye.lanes |= a, mn |= a, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function bs(e) {
  var t = at(), n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, a = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      a = e(a, i.action), i = i.next;
    while (i !== l);
    ht(a, t.memoizedState) || (Ve = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function dc() {
}
function fc(e, t) {
  var n = ye, r = at(), l = t(), a = !ht(r.memoizedState, l);
  if (a && (r.memoizedState = l, Ve = !0), r = r.queue, mi(hc.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || Ne !== null && Ne.memoizedState.tag & 1) {
    if (n.flags |= 2048, Dr(9, mc.bind(null, n, r, l, t), void 0, null), Me === null) throw Error(D(349));
    pn & 30 || pc(n, t, l);
  }
  return l;
}
function pc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ye.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ye.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function mc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, gc(t) && yc(e);
}
function hc(e, t, n) {
  return n(function() {
    gc(t) && yc(e);
  });
}
function gc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ht(e, n);
  } catch {
    return !0;
  }
}
function yc(e) {
  var t = Mt(e, 1);
  t !== null && mt(t, e, 1, -1);
}
function _o(e) {
  var t = yt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Pr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Up.bind(null, ye, e), [t.memoizedState, e];
}
function Dr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ye.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ye.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function vc() {
  return at().memoizedState;
}
function hl(e, t, n, r) {
  var l = yt();
  ye.flags |= e, l.memoizedState = Dr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Zl(e, t, n, r) {
  var l = at();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (je !== null) {
    var i = je.memoizedState;
    if (a = i.destroy, r !== null && di(r, i.deps)) {
      l.memoizedState = Dr(t, n, a, r);
      return;
    }
  }
  ye.flags |= e, l.memoizedState = Dr(1 | t, n, a, r);
}
function ko(e, t) {
  return hl(8390656, 8, e, t);
}
function mi(e, t) {
  return Zl(2048, 8, e, t);
}
function wc(e, t) {
  return Zl(4, 2, e, t);
}
function xc(e, t) {
  return Zl(4, 4, e, t);
}
function _c(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function kc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Zl(4, 4, _c.bind(null, t, e), n);
}
function hi() {
}
function Sc(e, t) {
  var n = at();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && di(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function jc(e, t) {
  var n = at();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && di(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ec(e, t, n) {
  return pn & 21 ? (ht(n, t) || (n = bu(), ye.lanes |= n, mn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ve = !0), e.memoizedState = n);
}
function $p(e, t) {
  var n = ue;
  ue = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ms.transition;
  Ms.transition = {};
  try {
    e(!1), t();
  } finally {
    ue = n, Ms.transition = r;
  }
}
function Cc() {
  return at().memoizedState;
}
function Wp(e, t, n) {
  var r = Kt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Nc(e)) Mc(t, n);
  else if (n = oc(e, t, n, r), n !== null) {
    var l = Fe();
    mt(n, e, r, l), Ic(n, t, r);
  }
}
function Up(e, t, n) {
  var r = Kt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Nc(e)) Mc(t, l);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var i = t.lastRenderedState, o = a(i, n);
      if (l.hasEagerState = !0, l.eagerState = o, ht(o, i)) {
        var u = t.interleaved;
        u === null ? (l.next = l, ai(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = oc(e, t, l, r), n !== null && (l = Fe(), mt(n, e, r, l), Ic(n, t, r));
  }
}
function Nc(e) {
  var t = e.alternate;
  return e === ye || t !== null && t === ye;
}
function Mc(e, t) {
  hr = Fl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ic(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ha(e, n);
  }
}
var $l = { readContext: st, useCallback: Pe, useContext: Pe, useEffect: Pe, useImperativeHandle: Pe, useInsertionEffect: Pe, useLayoutEffect: Pe, useMemo: Pe, useReducer: Pe, useRef: Pe, useState: Pe, useDebugValue: Pe, useDeferredValue: Pe, useTransition: Pe, useMutableSource: Pe, useSyncExternalStore: Pe, useId: Pe, unstable_isNewReconciler: !1 }, Vp = { readContext: st, useCallback: function(e, t) {
  return yt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: st, useEffect: ko, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, hl(
    4194308,
    4,
    _c.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return hl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return hl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = yt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = yt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Wp.bind(null, ye, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = yt();
  return e = { current: e }, t.memoizedState = e;
}, useState: _o, useDebugValue: hi, useDeferredValue: function(e) {
  return yt().memoizedState = e;
}, useTransition: function() {
  var e = _o(!1), t = e[0];
  return e = $p.bind(null, e[1]), yt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ye, l = yt();
  if (he) {
    if (n === void 0) throw Error(D(407));
    n = n();
  } else {
    if (n = t(), Me === null) throw Error(D(349));
    pn & 30 || pc(r, t, n);
  }
  l.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return l.queue = a, ko(hc.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, Dr(9, mc.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = yt(), t = Me.identifierPrefix;
  if (he) {
    var n = jt, r = St;
    n = (r & ~(1 << 32 - pt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Lr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Fp++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Qp = {
  readContext: st,
  useCallback: Sc,
  useContext: st,
  useEffect: mi,
  useImperativeHandle: kc,
  useInsertionEffect: wc,
  useLayoutEffect: xc,
  useMemo: jc,
  useReducer: Is,
  useRef: vc,
  useState: function() {
    return Is(Pr);
  },
  useDebugValue: hi,
  useDeferredValue: function(e) {
    var t = at();
    return Ec(t, je.memoizedState, e);
  },
  useTransition: function() {
    var e = Is(Pr)[0], t = at().memoizedState;
    return [e, t];
  },
  useMutableSource: dc,
  useSyncExternalStore: fc,
  useId: Cc,
  unstable_isNewReconciler: !1
}, Bp = { readContext: st, useCallback: Sc, useContext: st, useEffect: mi, useImperativeHandle: kc, useInsertionEffect: wc, useLayoutEffect: xc, useMemo: jc, useReducer: bs, useRef: vc, useState: function() {
  return bs(Pr);
}, useDebugValue: hi, useDeferredValue: function(e) {
  var t = at();
  return je === null ? t.memoizedState = e : Ec(t, je.memoizedState, e);
}, useTransition: function() {
  var e = bs(Pr)[0], t = at().memoizedState;
  return [e, t];
}, useMutableSource: dc, useSyncExternalStore: fc, useId: Cc, unstable_isNewReconciler: !1 };
function ut(e, t) {
  if (e && e.defaultProps) {
    t = ve({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function pa(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ve({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var es = { isMounted: function(e) {
  return (e = e._reactInternals) ? yn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Fe(), l = Kt(e), a = Et(r, l);
  a.payload = t, n != null && (a.callback = n), t = Ht(e, a, l), t !== null && (mt(t, e, l, r), pl(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Fe(), l = Kt(e), a = Et(r, l);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = Ht(e, a, l), t !== null && (mt(t, e, l, r), pl(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Fe(), r = Kt(e), l = Et(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Ht(e, l, r), t !== null && (mt(t, e, r, n), pl(t, e, r));
} };
function So(e, t, n, r, l, a, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, i) : t.prototype && t.prototype.isPureReactComponent ? !Cr(n, r) || !Cr(l, a) : !0;
}
function bc(e, t, n) {
  var r = !1, l = Xt, a = t.contextType;
  return typeof a == "object" && a !== null ? a = st(a) : (l = Be(t) ? dn : ze.current, r = t.contextTypes, a = (r = r != null) ? Fn(e, l) : Xt), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = es, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function jo(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && es.enqueueReplaceState(t, t.state, null);
}
function ma(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, ii(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? l.context = st(a) : (a = Be(t) ? dn : ze.current, l.context = Fn(e, a)), l.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (pa(e, t, a, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && es.enqueueReplaceState(l, l.state, null), Al(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Vn(e, t) {
  try {
    var n = "", r = t;
    do
      n += wf(r), r = r.return;
    while (r);
    var l = n;
  } catch (a) {
    l = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Ts(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ha(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Hp = typeof WeakMap == "function" ? WeakMap : Map;
function Tc(e, t, n) {
  n = Et(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ul || (Ul = !0, Ea = r), ha(e, t);
  }, n;
}
function Lc(e, t, n) {
  n = Et(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      ha(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    ha(e, t), typeof r != "function" && (Gt === null ? Gt = /* @__PURE__ */ new Set([this]) : Gt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Eo(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Hp();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = am.bind(null, e, t, n), t.then(e, e));
}
function Co(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function No(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Et(-1, 1), t.tag = 2, Ht(n, t, 1))), n.lanes |= 1), e);
}
var Gp = bt.ReactCurrentOwner, Ve = !1;
function Oe(e, t, n, r) {
  t.child = e === null ? ic(t, null, n, r) : Wn(t, e.child, n, r);
}
function Mo(e, t, n, r, l) {
  n = n.render;
  var a = t.ref;
  return zn(t, l), r = fi(e, t, n, r, a, l), n = pi(), e !== null && !Ve ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, It(e, t, l)) : (he && n && ei(t), t.flags |= 1, Oe(e, t, r, l), t.child);
}
function Io(e, t, n, r, l) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !Si(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Pc(e, t, a, r, l)) : (e = wl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & l)) {
    var i = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Cr, n(i, r) && e.ref === t.ref) return It(e, t, l);
  }
  return t.flags |= 1, e = Yt(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Pc(e, t, n, r, l) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Cr(a, r) && e.ref === t.ref) if (Ve = !1, t.pendingProps = r = a, (e.lanes & l) !== 0) e.flags & 131072 && (Ve = !0);
    else return t.lanes = e.lanes, It(e, t, l);
  }
  return ga(e, t, n, r, l);
}
function Dc(e, t, n) {
  var r = t.pendingProps, l = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, fe(Tn, Ye), Ye |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, fe(Tn, Ye), Ye |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, fe(Tn, Ye), Ye |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, fe(Tn, Ye), Ye |= r;
  return Oe(e, t, l, n), t.child;
}
function Rc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ga(e, t, n, r, l) {
  var a = Be(n) ? dn : ze.current;
  return a = Fn(t, a), zn(t, l), n = fi(e, t, n, r, a, l), r = pi(), e !== null && !Ve ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, It(e, t, l)) : (he && r && ei(t), t.flags |= 1, Oe(e, t, n, l), t.child);
}
function bo(e, t, n, r, l) {
  if (Be(n)) {
    var a = !0;
    Ll(t);
  } else a = !1;
  if (zn(t, l), t.stateNode === null) gl(e, t), bc(t, n, r), ma(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, o = t.memoizedProps;
    i.props = o;
    var u = i.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = st(c) : (c = Be(n) ? dn : ze.current, c = Fn(t, c));
    var h = n.getDerivedStateFromProps, x = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    x || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o !== r || u !== c) && jo(t, i, r, c), At = !1;
    var v = t.memoizedState;
    i.state = v, Al(t, r, i, l), u = t.memoizedState, o !== r || v !== u || Qe.current || At ? (typeof h == "function" && (pa(t, n, h, r), u = t.memoizedState), (o = At || So(t, n, o, r, v, u, c)) ? (x || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = c, r = o) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, uc(e, t), o = t.memoizedProps, c = t.type === t.elementType ? o : ut(t.type, o), i.props = c, x = t.pendingProps, v = i.context, u = n.contextType, typeof u == "object" && u !== null ? u = st(u) : (u = Be(n) ? dn : ze.current, u = Fn(t, u));
    var w = n.getDerivedStateFromProps;
    (h = typeof w == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o !== x || v !== u) && jo(t, i, r, u), At = !1, v = t.memoizedState, i.state = v, Al(t, r, i, l);
    var g = t.memoizedState;
    o !== x || v !== g || Qe.current || At ? (typeof w == "function" && (pa(t, n, w, r), g = t.memoizedState), (c = At || So(t, n, c, r, v, g, u) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, g, u), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, g, u)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), i.props = r, i.state = g, i.context = u, r = c) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return ya(e, t, n, r, a, l);
}
function ya(e, t, n, r, l, a) {
  Rc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && ho(t, n, !1), It(e, t, a);
  r = t.stateNode, Gp.current = t;
  var o = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = Wn(t, e.child, null, a), t.child = Wn(t, null, o, a)) : Oe(e, t, o, a), t.memoizedState = r.state, l && ho(t, n, !0), t.child;
}
function zc(e) {
  var t = e.stateNode;
  t.pendingContext ? mo(e, t.pendingContext, t.pendingContext !== t.context) : t.context && mo(e, t.context, !1), oi(e, t.containerInfo);
}
function To(e, t, n, r, l) {
  return $n(), ni(l), t.flags |= 256, Oe(e, t, n, r), t.child;
}
var va = { dehydrated: null, treeContext: null, retryLane: 0 };
function wa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ac(e, t, n) {
  var r = t.pendingProps, l = ge.current, a = !1, i = (t.flags & 128) !== 0, o;
  if ((o = i) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), fe(ge, l & 1), e === null)
    return da(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, i = { mode: "hidden", children: i }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = i) : a = rs(i, r, 0, null), e = cn(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = wa(n), t.memoizedState = va, e) : gi(t, i));
  if (l = e.memoizedState, l !== null && (o = l.dehydrated, o !== null)) return Kp(e, t, i, r, o, l, n);
  if (a) {
    a = r.fallback, i = t.mode, l = e.child, o = l.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Yt(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), o !== null ? a = Yt(o, a) : (a = cn(a, i, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, i = e.child.memoizedState, i = i === null ? wa(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, a.memoizedState = i, a.childLanes = e.childLanes & ~n, t.memoizedState = va, r;
  }
  return a = e.child, e = a.sibling, r = Yt(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function gi(e, t) {
  return t = rs({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function rl(e, t, n, r) {
  return r !== null && ni(r), Wn(t, e.child, null, n), e = gi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Kp(e, t, n, r, l, a, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Ts(Error(D(422))), rl(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, l = t.mode, r = rs({ mode: "visible", children: r.children }, l, 0, null), a = cn(a, l, i, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && Wn(t, e.child, null, i), t.child.memoizedState = wa(i), t.memoizedState = va, a);
  if (!(t.mode & 1)) return rl(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var o = r.dgst;
    return r = o, a = Error(D(419)), r = Ts(a, r, void 0), rl(e, t, i, r);
  }
  if (o = (i & e.childLanes) !== 0, Ve || o) {
    if (r = Me, r !== null) {
      switch (i & -i) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== a.retryLane && (a.retryLane = l, Mt(e, l), mt(r, e, l, -1));
    }
    return ki(), r = Ts(Error(D(421))), rl(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = im.bind(null, e), l._reactRetry = t, null) : (e = a.treeContext, qe = Bt(l.nextSibling), Xe = t, he = !0, dt = null, e !== null && (tt[nt++] = St, tt[nt++] = jt, tt[nt++] = fn, St = e.id, jt = e.overflow, fn = t), t = gi(t, r.children), t.flags |= 4096, t);
}
function Lo(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), fa(e.return, t, n);
}
function Ls(e, t, n, r, l) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = l);
}
function Oc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, a = r.tail;
  if (Oe(e, t, r.children, n), r = ge.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Lo(e, n, t);
      else if (e.tag === 19) Lo(e, n, t);
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
  if (fe(ge, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Ol(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Ls(t, !1, l, n, a);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && Ol(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      Ls(t, !0, n, null, a);
      break;
    case "together":
      Ls(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function gl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function It(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), mn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(D(153));
  if (t.child !== null) {
    for (e = t.child, n = Yt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Yt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Yp(e, t, n) {
  switch (t.tag) {
    case 3:
      zc(t), $n();
      break;
    case 5:
      cc(t);
      break;
    case 1:
      Be(t.type) && Ll(t);
      break;
    case 4:
      oi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      fe(Rl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (fe(ge, ge.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ac(e, t, n) : (fe(ge, ge.current & 1), e = It(e, t, n), e !== null ? e.sibling : null);
      fe(ge, ge.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Oc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), fe(ge, ge.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Dc(e, t, n);
  }
  return It(e, t, n);
}
var Fc, xa, $c, Wc;
Fc = function(e, t) {
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
xa = function() {
};
$c = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, on(xt.current);
    var a = null;
    switch (n) {
      case "input":
        l = Us(e, l), r = Us(e, r), a = [];
        break;
      case "select":
        l = ve({}, l, { value: void 0 }), r = ve({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        l = Bs(e, l), r = Bs(e, r), a = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = bl);
    }
    Gs(n, r);
    var i;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var o = l[c];
      for (i in o) o.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (wr.hasOwnProperty(c) ? a || (a = []) : (a = a || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (o = l != null ? l[c] : void 0, r.hasOwnProperty(c) && u !== o && (u != null || o != null)) if (c === "style") if (o) {
        for (i in o) !o.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in u) u.hasOwnProperty(i) && o[i] !== u[i] && (n || (n = {}), n[i] = u[i]);
      } else n || (a || (a = []), a.push(
        c,
        n
      )), n = u;
      else c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, o = o ? o.__html : void 0, u != null && o !== u && (a = a || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (a = a || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (wr.hasOwnProperty(c) ? (u != null && c === "onScroll" && pe("scroll", e), a || o === u || (a = [])) : (a = a || []).push(c, u));
    }
    n && (a = a || []).push("style", n);
    var c = a;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Wc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function lr(e, t) {
  if (!he) switch (e.tailMode) {
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
function De(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function qp(e, t, n) {
  var r = t.pendingProps;
  switch (ti(t), t.tag) {
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
      return De(t), null;
    case 1:
      return Be(t.type) && Tl(), De(t), null;
    case 3:
      return r = t.stateNode, Un(), me(Qe), me(ze), ci(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (tl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, dt !== null && (Ma(dt), dt = null))), xa(e, t), De(t), null;
    case 5:
      ui(t);
      var l = on(Tr.current);
      if (n = t.type, e !== null && t.stateNode != null) $c(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(D(166));
          return De(t), null;
        }
        if (e = on(xt.current), tl(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[vt] = t, r[Ir] = a, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              pe("cancel", r), pe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              pe("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < ur.length; l++) pe(ur[l], r);
              break;
            case "source":
              pe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              pe(
                "error",
                r
              ), pe("load", r);
              break;
            case "details":
              pe("toggle", r);
              break;
            case "input":
              $i(r, a), pe("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, pe("invalid", r);
              break;
            case "textarea":
              Ui(r, a), pe("invalid", r);
          }
          Gs(n, a), l = null;
          for (var i in a) if (a.hasOwnProperty(i)) {
            var o = a[i];
            i === "children" ? typeof o == "string" ? r.textContent !== o && (a.suppressHydrationWarning !== !0 && el(r.textContent, o, e), l = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (a.suppressHydrationWarning !== !0 && el(
              r.textContent,
              o,
              e
            ), l = ["children", "" + o]) : wr.hasOwnProperty(i) && o != null && i === "onScroll" && pe("scroll", r);
          }
          switch (n) {
            case "input":
              Hr(r), Wi(r, a, !0);
              break;
            case "textarea":
              Hr(r), Vi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = bl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = hu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[vt] = t, e[Ir] = r, Fc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = Ks(n, r), n) {
              case "dialog":
                pe("cancel", e), pe("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                pe("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < ur.length; l++) pe(ur[l], e);
                l = r;
                break;
              case "source":
                pe("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                pe(
                  "error",
                  e
                ), pe("load", e), l = r;
                break;
              case "details":
                pe("toggle", e), l = r;
                break;
              case "input":
                $i(e, r), l = Us(e, r), pe("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = ve({}, r, { value: void 0 }), pe("invalid", e);
                break;
              case "textarea":
                Ui(e, r), l = Bs(e, r), pe("invalid", e);
                break;
              default:
                l = r;
            }
            Gs(n, l), o = l;
            for (a in o) if (o.hasOwnProperty(a)) {
              var u = o[a];
              a === "style" ? vu(e, u) : a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && gu(e, u)) : a === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && xr(e, u) : typeof u == "number" && xr(e, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (wr.hasOwnProperty(a) ? u != null && a === "onScroll" && pe("scroll", e) : u != null && $a(e, a, u, i));
            }
            switch (n) {
              case "input":
                Hr(e), Wi(e, r, !1);
                break;
              case "textarea":
                Hr(e), Vi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + qt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? Ln(e, !!r.multiple, a, !1) : r.defaultValue != null && Ln(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = bl);
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
      return De(t), null;
    case 6:
      if (e && t.stateNode != null) Wc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(D(166));
        if (n = on(Tr.current), on(xt.current), tl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[vt] = t, (a = r.nodeValue !== n) && (e = Xe, e !== null)) switch (e.tag) {
            case 3:
              el(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && el(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[vt] = t, t.stateNode = r;
      }
      return De(t), null;
    case 13:
      if (me(ge), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (he && qe !== null && t.mode & 1 && !(t.flags & 128)) sc(), $n(), t.flags |= 98560, a = !1;
        else if (a = tl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error(D(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(D(317));
            a[vt] = t;
          } else $n(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          De(t), a = !1;
        } else dt !== null && (Ma(dt), dt = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ge.current & 1 ? Ee === 0 && (Ee = 3) : ki())), t.updateQueue !== null && (t.flags |= 4), De(t), null);
    case 4:
      return Un(), xa(e, t), e === null && Nr(t.stateNode.containerInfo), De(t), null;
    case 10:
      return si(t.type._context), De(t), null;
    case 17:
      return Be(t.type) && Tl(), De(t), null;
    case 19:
      if (me(ge), a = t.memoizedState, a === null) return De(t), null;
      if (r = (t.flags & 128) !== 0, i = a.rendering, i === null) if (r) lr(a, !1);
      else {
        if (Ee !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = Ol(e), i !== null) {
            for (t.flags |= 128, lr(a, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, i = a.alternate, i === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = i.childLanes, a.lanes = i.lanes, a.child = i.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = i.memoizedProps, a.memoizedState = i.memoizedState, a.updateQueue = i.updateQueue, a.type = i.type, e = i.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return fe(ge, ge.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && xe() > Qn && (t.flags |= 128, r = !0, lr(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Ol(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), lr(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !he) return De(t), null;
        } else 2 * xe() - a.renderingStartTime > Qn && n !== 1073741824 && (t.flags |= 128, r = !0, lr(a, !1), t.lanes = 4194304);
        a.isBackwards ? (i.sibling = t.child, t.child = i) : (n = a.last, n !== null ? n.sibling = i : t.child = i, a.last = i);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = xe(), t.sibling = null, n = ge.current, fe(ge, r ? n & 1 | 2 : n & 1), t) : (De(t), null);
    case 22:
    case 23:
      return _i(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ye & 1073741824 && (De(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : De(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(D(156, t.tag));
}
function Xp(e, t) {
  switch (ti(t), t.tag) {
    case 1:
      return Be(t.type) && Tl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Un(), me(Qe), me(ze), ci(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ui(t), null;
    case 13:
      if (me(ge), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(D(340));
        $n();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return me(ge), null;
    case 4:
      return Un(), null;
    case 10:
      return si(t.type._context), null;
    case 22:
    case 23:
      return _i(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ll = !1, Re = !1, Jp = typeof WeakSet == "function" ? WeakSet : Set, U = null;
function bn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    we(e, t, r);
  }
  else n.current = null;
}
function _a(e, t, n) {
  try {
    n();
  } catch (r) {
    we(e, t, r);
  }
}
var Po = !1;
function Zp(e, t) {
  if (la = Nl, e = Hu(), Za(e)) {
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
        var i = 0, o = -1, u = -1, c = 0, h = 0, x = e, v = null;
        t: for (; ; ) {
          for (var w; x !== n || l !== 0 && x.nodeType !== 3 || (o = i + l), x !== a || r !== 0 && x.nodeType !== 3 || (u = i + r), x.nodeType === 3 && (i += x.nodeValue.length), (w = x.firstChild) !== null; )
            v = x, x = w;
          for (; ; ) {
            if (x === e) break t;
            if (v === n && ++c === l && (o = i), v === a && ++h === r && (u = i), (w = x.nextSibling) !== null) break;
            x = v, v = x.parentNode;
          }
          x = w;
        }
        n = o === -1 || u === -1 ? null : { start: o, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (sa = { focusedElem: e, selectionRange: n }, Nl = !1, U = t; U !== null; ) if (t = U, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, U = e;
  else for (; U !== null; ) {
    t = U;
    try {
      var g = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (g !== null) {
            var _ = g.memoizedProps, j = g.memoizedState, d = t.stateNode, f = d.getSnapshotBeforeUpdate(t.elementType === t.type ? _ : ut(t.type, _), j);
            d.__reactInternalSnapshotBeforeUpdate = f;
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
          throw Error(D(163));
      }
    } catch (y) {
      we(t, t.return, y);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, U = e;
      break;
    }
    U = t.return;
  }
  return g = Po, Po = !1, g;
}
function gr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var a = l.destroy;
        l.destroy = void 0, a !== void 0 && _a(t, n, a);
      }
      l = l.next;
    } while (l !== r);
  }
}
function ts(e, t) {
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
function ka(e) {
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
function Uc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Uc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[vt], delete t[Ir], delete t[oa], delete t[Rp], delete t[zp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Vc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Do(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Vc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Sa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = bl));
  else if (r !== 4 && (e = e.child, e !== null)) for (Sa(e, t, n), e = e.sibling; e !== null; ) Sa(e, t, n), e = e.sibling;
}
function ja(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (ja(e, t, n), e = e.sibling; e !== null; ) ja(e, t, n), e = e.sibling;
}
var Ie = null, ct = !1;
function Rt(e, t, n) {
  for (n = n.child; n !== null; ) Qc(e, t, n), n = n.sibling;
}
function Qc(e, t, n) {
  if (wt && typeof wt.onCommitFiberUnmount == "function") try {
    wt.onCommitFiberUnmount(Gl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Re || bn(n, t);
    case 6:
      var r = Ie, l = ct;
      Ie = null, Rt(e, t, n), Ie = r, ct = l, Ie !== null && (ct ? (e = Ie, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ie.removeChild(n.stateNode));
      break;
    case 18:
      Ie !== null && (ct ? (e = Ie, n = n.stateNode, e.nodeType === 8 ? Es(e.parentNode, n) : e.nodeType === 1 && Es(e, n), jr(e)) : Es(Ie, n.stateNode));
      break;
    case 4:
      r = Ie, l = ct, Ie = n.stateNode.containerInfo, ct = !0, Rt(e, t, n), Ie = r, ct = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Re && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var a = l, i = a.destroy;
          a = a.tag, i !== void 0 && (a & 2 || a & 4) && _a(n, t, i), l = l.next;
        } while (l !== r);
      }
      Rt(e, t, n);
      break;
    case 1:
      if (!Re && (bn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (o) {
        we(n, t, o);
      }
      Rt(e, t, n);
      break;
    case 21:
      Rt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Re = (r = Re) || n.memoizedState !== null, Rt(e, t, n), Re = r) : Rt(e, t, n);
      break;
    default:
      Rt(e, t, n);
  }
}
function Ro(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Jp()), t.forEach(function(r) {
      var l = om.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function it(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var a = e, i = t, o = i;
      e: for (; o !== null; ) {
        switch (o.tag) {
          case 5:
            Ie = o.stateNode, ct = !1;
            break e;
          case 3:
            Ie = o.stateNode.containerInfo, ct = !0;
            break e;
          case 4:
            Ie = o.stateNode.containerInfo, ct = !0;
            break e;
        }
        o = o.return;
      }
      if (Ie === null) throw Error(D(160));
      Qc(a, i, l), Ie = null, ct = !1;
      var u = l.alternate;
      u !== null && (u.return = null), l.return = null;
    } catch (c) {
      we(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Bc(t, e), t = t.sibling;
}
function Bc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (it(t, e), gt(e), r & 4) {
        try {
          gr(3, e, e.return), ts(3, e);
        } catch (_) {
          we(e, e.return, _);
        }
        try {
          gr(5, e, e.return);
        } catch (_) {
          we(e, e.return, _);
        }
      }
      break;
    case 1:
      it(t, e), gt(e), r & 512 && n !== null && bn(n, n.return);
      break;
    case 5:
      if (it(t, e), gt(e), r & 512 && n !== null && bn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          xr(l, "");
        } catch (_) {
          we(e, e.return, _);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var a = e.memoizedProps, i = n !== null ? n.memoizedProps : a, o = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          o === "input" && a.type === "radio" && a.name != null && pu(l, a), Ks(o, i);
          var c = Ks(o, a);
          for (i = 0; i < u.length; i += 2) {
            var h = u[i], x = u[i + 1];
            h === "style" ? vu(l, x) : h === "dangerouslySetInnerHTML" ? gu(l, x) : h === "children" ? xr(l, x) : $a(l, h, x, c);
          }
          switch (o) {
            case "input":
              Vs(l, a);
              break;
            case "textarea":
              mu(l, a);
              break;
            case "select":
              var v = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!a.multiple;
              var w = a.value;
              w != null ? Ln(l, !!a.multiple, w, !1) : v !== !!a.multiple && (a.defaultValue != null ? Ln(
                l,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : Ln(l, !!a.multiple, a.multiple ? [] : "", !1));
          }
          l[Ir] = a;
        } catch (_) {
          we(e, e.return, _);
        }
      }
      break;
    case 6:
      if (it(t, e), gt(e), r & 4) {
        if (e.stateNode === null) throw Error(D(162));
        l = e.stateNode, a = e.memoizedProps;
        try {
          l.nodeValue = a;
        } catch (_) {
          we(e, e.return, _);
        }
      }
      break;
    case 3:
      if (it(t, e), gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        jr(t.containerInfo);
      } catch (_) {
        we(e, e.return, _);
      }
      break;
    case 4:
      it(t, e), gt(e);
      break;
    case 13:
      it(t, e), gt(e), l = e.child, l.flags & 8192 && (a = l.memoizedState !== null, l.stateNode.isHidden = a, !a || l.alternate !== null && l.alternate.memoizedState !== null || (wi = xe())), r & 4 && Ro(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (Re = (c = Re) || h, it(t, e), Re = c) : it(t, e), gt(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !h && e.mode & 1) for (U = e, h = e.child; h !== null; ) {
          for (x = U = h; U !== null; ) {
            switch (v = U, w = v.child, v.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                gr(4, v, v.return);
                break;
              case 1:
                bn(v, v.return);
                var g = v.stateNode;
                if (typeof g.componentWillUnmount == "function") {
                  r = v, n = v.return;
                  try {
                    t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                  } catch (_) {
                    we(r, n, _);
                  }
                }
                break;
              case 5:
                bn(v, v.return);
                break;
              case 22:
                if (v.memoizedState !== null) {
                  Ao(x);
                  continue;
                }
            }
            w !== null ? (w.return = v, U = w) : Ao(x);
          }
          h = h.sibling;
        }
        e: for (h = null, x = e; ; ) {
          if (x.tag === 5) {
            if (h === null) {
              h = x;
              try {
                l = x.stateNode, c ? (a = l.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (o = x.stateNode, u = x.memoizedProps.style, i = u != null && u.hasOwnProperty("display") ? u.display : null, o.style.display = yu("display", i));
              } catch (_) {
                we(e, e.return, _);
              }
            }
          } else if (x.tag === 6) {
            if (h === null) try {
              x.stateNode.nodeValue = c ? "" : x.memoizedProps;
            } catch (_) {
              we(e, e.return, _);
            }
          } else if ((x.tag !== 22 && x.tag !== 23 || x.memoizedState === null || x === e) && x.child !== null) {
            x.child.return = x, x = x.child;
            continue;
          }
          if (x === e) break e;
          for (; x.sibling === null; ) {
            if (x.return === null || x.return === e) break e;
            h === x && (h = null), x = x.return;
          }
          h === x && (h = null), x.sibling.return = x.return, x = x.sibling;
        }
      }
      break;
    case 19:
      it(t, e), gt(e), r & 4 && Ro(e);
      break;
    case 21:
      break;
    default:
      it(
        t,
        e
      ), gt(e);
  }
}
function gt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Vc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(D(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (xr(l, ""), r.flags &= -33);
          var a = Do(e);
          ja(e, a, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, o = Do(e);
          Sa(e, o, i);
          break;
        default:
          throw Error(D(161));
      }
    } catch (u) {
      we(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function em(e, t, n) {
  U = e, Hc(e);
}
function Hc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; U !== null; ) {
    var l = U, a = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || ll;
      if (!i) {
        var o = l.alternate, u = o !== null && o.memoizedState !== null || Re;
        o = ll;
        var c = Re;
        if (ll = i, (Re = u) && !c) for (U = l; U !== null; ) i = U, u = i.child, i.tag === 22 && i.memoizedState !== null ? Oo(l) : u !== null ? (u.return = i, U = u) : Oo(l);
        for (; a !== null; ) U = a, Hc(a), a = a.sibling;
        U = l, ll = o, Re = c;
      }
      zo(e);
    } else l.subtreeFlags & 8772 && a !== null ? (a.return = l, U = a) : zo(e);
  }
}
function zo(e) {
  for (; U !== null; ) {
    var t = U;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Re || ts(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Re) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : ut(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && xo(t, a, r);
            break;
          case 3:
            var i = t.updateQueue;
            if (i !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              xo(t, i, n);
            }
            break;
          case 5:
            var o = t.stateNode;
            if (n === null && t.flags & 4) {
              n = o;
              var u = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u.autoFocus && n.focus();
                  break;
                case "img":
                  u.src && (n.src = u.src);
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
              var c = t.alternate;
              if (c !== null) {
                var h = c.memoizedState;
                if (h !== null) {
                  var x = h.dehydrated;
                  x !== null && jr(x);
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
            throw Error(D(163));
        }
        Re || t.flags & 512 && ka(t);
      } catch (v) {
        we(t, t.return, v);
      }
    }
    if (t === e) {
      U = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, U = n;
      break;
    }
    U = t.return;
  }
}
function Ao(e) {
  for (; U !== null; ) {
    var t = U;
    if (t === e) {
      U = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, U = n;
      break;
    }
    U = t.return;
  }
}
function Oo(e) {
  for (; U !== null; ) {
    var t = U;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ts(4, t);
          } catch (u) {
            we(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              we(t, l, u);
            }
          }
          var a = t.return;
          try {
            ka(t);
          } catch (u) {
            we(t, a, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ka(t);
          } catch (u) {
            we(t, i, u);
          }
      }
    } catch (u) {
      we(t, t.return, u);
    }
    if (t === e) {
      U = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      o.return = t.return, U = o;
      break;
    }
    U = t.return;
  }
}
var tm = Math.ceil, Wl = bt.ReactCurrentDispatcher, yi = bt.ReactCurrentOwner, lt = bt.ReactCurrentBatchConfig, oe = 0, Me = null, _e = null, Te = 0, Ye = 0, Tn = en(0), Ee = 0, Rr = null, mn = 0, ns = 0, vi = 0, yr = null, Ue = null, wi = 0, Qn = 1 / 0, _t = null, Ul = !1, Ea = null, Gt = null, sl = !1, Wt = null, Vl = 0, vr = 0, Ca = null, yl = -1, vl = 0;
function Fe() {
  return oe & 6 ? xe() : yl !== -1 ? yl : yl = xe();
}
function Kt(e) {
  return e.mode & 1 ? oe & 2 && Te !== 0 ? Te & -Te : Op.transition !== null ? (vl === 0 && (vl = bu()), vl) : (e = ue, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Au(e.type)), e) : 1;
}
function mt(e, t, n, r) {
  if (50 < vr) throw vr = 0, Ca = null, Error(D(185));
  Or(e, n, r), (!(oe & 2) || e !== Me) && (e === Me && (!(oe & 2) && (ns |= n), Ee === 4 && Ft(e, Te)), He(e, r), n === 1 && oe === 0 && !(t.mode & 1) && (Qn = xe() + 500, Jl && tn()));
}
function He(e, t) {
  var n = e.callbackNode;
  Of(e, t);
  var r = Cl(e, e === Me ? Te : 0);
  if (r === 0) n !== null && Hi(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Hi(n), t === 1) e.tag === 0 ? Ap(Fo.bind(null, e)) : nc(Fo.bind(null, e)), Pp(function() {
      !(oe & 6) && tn();
    }), n = null;
    else {
      switch (Tu(r)) {
        case 1:
          n = Ba;
          break;
        case 4:
          n = Mu;
          break;
        case 16:
          n = El;
          break;
        case 536870912:
          n = Iu;
          break;
        default:
          n = El;
      }
      n = ed(n, Gc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Gc(e, t) {
  if (yl = -1, vl = 0, oe & 6) throw Error(D(327));
  var n = e.callbackNode;
  if (An() && e.callbackNode !== n) return null;
  var r = Cl(e, e === Me ? Te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ql(e, r);
  else {
    t = r;
    var l = oe;
    oe |= 2;
    var a = Yc();
    (Me !== e || Te !== t) && (_t = null, Qn = xe() + 500, un(e, t));
    do
      try {
        lm();
        break;
      } catch (o) {
        Kc(e, o);
      }
    while (!0);
    li(), Wl.current = a, oe = l, _e !== null ? t = 0 : (Me = null, Te = 0, t = Ee);
  }
  if (t !== 0) {
    if (t === 2 && (l = Zs(e), l !== 0 && (r = l, t = Na(e, l))), t === 1) throw n = Rr, un(e, 0), Ft(e, r), He(e, xe()), n;
    if (t === 6) Ft(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !nm(l) && (t = Ql(e, r), t === 2 && (a = Zs(e), a !== 0 && (r = a, t = Na(e, a))), t === 1)) throw n = Rr, un(e, 0), Ft(e, r), He(e, xe()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(D(345));
        case 2:
          ln(e, Ue, _t);
          break;
        case 3:
          if (Ft(e, r), (r & 130023424) === r && (t = wi + 500 - xe(), 10 < t)) {
            if (Cl(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              Fe(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = ia(ln.bind(null, e, Ue, _t), t);
            break;
          }
          ln(e, Ue, _t);
          break;
        case 4:
          if (Ft(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - pt(r);
            a = 1 << i, i = t[i], i > l && (l = i), r &= ~a;
          }
          if (r = l, r = xe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * tm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ia(ln.bind(null, e, Ue, _t), r);
            break;
          }
          ln(e, Ue, _t);
          break;
        case 5:
          ln(e, Ue, _t);
          break;
        default:
          throw Error(D(329));
      }
    }
  }
  return He(e, xe()), e.callbackNode === n ? Gc.bind(null, e) : null;
}
function Na(e, t) {
  var n = yr;
  return e.current.memoizedState.isDehydrated && (un(e, t).flags |= 256), e = Ql(e, t), e !== 2 && (t = Ue, Ue = n, t !== null && Ma(t)), e;
}
function Ma(e) {
  Ue === null ? Ue = e : Ue.push.apply(Ue, e);
}
function nm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], a = l.getSnapshot;
        l = l.value;
        try {
          if (!ht(a(), l)) return !1;
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
function Ft(e, t) {
  for (t &= ~vi, t &= ~ns, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - pt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Fo(e) {
  if (oe & 6) throw Error(D(327));
  An();
  var t = Cl(e, 0);
  if (!(t & 1)) return He(e, xe()), null;
  var n = Ql(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Zs(e);
    r !== 0 && (t = r, n = Na(e, r));
  }
  if (n === 1) throw n = Rr, un(e, 0), Ft(e, t), He(e, xe()), n;
  if (n === 6) throw Error(D(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, ln(e, Ue, _t), He(e, xe()), null;
}
function xi(e, t) {
  var n = oe;
  oe |= 1;
  try {
    return e(t);
  } finally {
    oe = n, oe === 0 && (Qn = xe() + 500, Jl && tn());
  }
}
function hn(e) {
  Wt !== null && Wt.tag === 0 && !(oe & 6) && An();
  var t = oe;
  oe |= 1;
  var n = lt.transition, r = ue;
  try {
    if (lt.transition = null, ue = 1, e) return e();
  } finally {
    ue = r, lt.transition = n, oe = t, !(oe & 6) && tn();
  }
}
function _i() {
  Ye = Tn.current, me(Tn);
}
function un(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Lp(n)), _e !== null) for (n = _e.return; n !== null; ) {
    var r = n;
    switch (ti(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Tl();
        break;
      case 3:
        Un(), me(Qe), me(ze), ci();
        break;
      case 5:
        ui(r);
        break;
      case 4:
        Un();
        break;
      case 13:
        me(ge);
        break;
      case 19:
        me(ge);
        break;
      case 10:
        si(r.type._context);
        break;
      case 22:
      case 23:
        _i();
    }
    n = n.return;
  }
  if (Me = e, _e = e = Yt(e.current, null), Te = Ye = t, Ee = 0, Rr = null, vi = ns = mn = 0, Ue = yr = null, an !== null) {
    for (t = 0; t < an.length; t++) if (n = an[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, a = n.pending;
      if (a !== null) {
        var i = a.next;
        a.next = l, r.next = i;
      }
      n.pending = r;
    }
    an = null;
  }
  return e;
}
function Kc(e, t) {
  do {
    var n = _e;
    try {
      if (li(), ml.current = $l, Fl) {
        for (var r = ye.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Fl = !1;
      }
      if (pn = 0, Ne = je = ye = null, hr = !1, Lr = 0, yi.current = null, n === null || n.return === null) {
        Ee = 1, Rr = t, _e = null;
        break;
      }
      e: {
        var a = e, i = n.return, o = n, u = t;
        if (t = Te, o.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var c = u, h = o, x = h.tag;
          if (!(h.mode & 1) && (x === 0 || x === 11 || x === 15)) {
            var v = h.alternate;
            v ? (h.updateQueue = v.updateQueue, h.memoizedState = v.memoizedState, h.lanes = v.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var w = Co(i);
          if (w !== null) {
            w.flags &= -257, No(w, i, o, a, t), w.mode & 1 && Eo(a, c, t), t = w, u = c;
            var g = t.updateQueue;
            if (g === null) {
              var _ = /* @__PURE__ */ new Set();
              _.add(u), t.updateQueue = _;
            } else g.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Eo(a, c, t), ki();
              break e;
            }
            u = Error(D(426));
          }
        } else if (he && o.mode & 1) {
          var j = Co(i);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256), No(j, i, o, a, t), ni(Vn(u, o));
            break e;
          }
        }
        a = u = Vn(u, o), Ee !== 4 && (Ee = 2), yr === null ? yr = [a] : yr.push(a), a = i;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var d = Tc(a, u, t);
              wo(a, d);
              break e;
            case 1:
              o = u;
              var f = a.type, p = a.stateNode;
              if (!(a.flags & 128) && (typeof f.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Gt === null || !Gt.has(p)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var y = Lc(a, o, t);
                wo(a, y);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      Xc(n);
    } catch (E) {
      t = E, _e === n && n !== null && (_e = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Yc() {
  var e = Wl.current;
  return Wl.current = $l, e === null ? $l : e;
}
function ki() {
  (Ee === 0 || Ee === 3 || Ee === 2) && (Ee = 4), Me === null || !(mn & 268435455) && !(ns & 268435455) || Ft(Me, Te);
}
function Ql(e, t) {
  var n = oe;
  oe |= 2;
  var r = Yc();
  (Me !== e || Te !== t) && (_t = null, un(e, t));
  do
    try {
      rm();
      break;
    } catch (l) {
      Kc(e, l);
    }
  while (!0);
  if (li(), oe = n, Wl.current = r, _e !== null) throw Error(D(261));
  return Me = null, Te = 0, Ee;
}
function rm() {
  for (; _e !== null; ) qc(_e);
}
function lm() {
  for (; _e !== null && !If(); ) qc(_e);
}
function qc(e) {
  var t = Zc(e.alternate, e, Ye);
  e.memoizedProps = e.pendingProps, t === null ? Xc(e) : _e = t, yi.current = null;
}
function Xc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Xp(n, t), n !== null) {
        n.flags &= 32767, _e = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Ee = 6, _e = null;
        return;
      }
    } else if (n = qp(n, t, Ye), n !== null) {
      _e = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      _e = t;
      return;
    }
    _e = t = e;
  } while (t !== null);
  Ee === 0 && (Ee = 5);
}
function ln(e, t, n) {
  var r = ue, l = lt.transition;
  try {
    lt.transition = null, ue = 1, sm(e, t, n, r);
  } finally {
    lt.transition = l, ue = r;
  }
  return null;
}
function sm(e, t, n, r) {
  do
    An();
  while (Wt !== null);
  if (oe & 6) throw Error(D(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(D(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (Ff(e, a), e === Me && (_e = Me = null, Te = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || sl || (sl = !0, ed(El, function() {
    return An(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = lt.transition, lt.transition = null;
    var i = ue;
    ue = 1;
    var o = oe;
    oe |= 4, yi.current = null, Zp(e, n), Bc(n, e), Ep(sa), Nl = !!la, sa = la = null, e.current = n, em(n), bf(), oe = o, ue = i, lt.transition = a;
  } else e.current = n;
  if (sl && (sl = !1, Wt = e, Vl = l), a = e.pendingLanes, a === 0 && (Gt = null), Pf(n.stateNode), He(e, xe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Ul) throw Ul = !1, e = Ea, Ea = null, e;
  return Vl & 1 && e.tag !== 0 && An(), a = e.pendingLanes, a & 1 ? e === Ca ? vr++ : (vr = 0, Ca = e) : vr = 0, tn(), null;
}
function An() {
  if (Wt !== null) {
    var e = Tu(Vl), t = lt.transition, n = ue;
    try {
      if (lt.transition = null, ue = 16 > e ? 16 : e, Wt === null) var r = !1;
      else {
        if (e = Wt, Wt = null, Vl = 0, oe & 6) throw Error(D(331));
        var l = oe;
        for (oe |= 4, U = e.current; U !== null; ) {
          var a = U, i = a.child;
          if (U.flags & 16) {
            var o = a.deletions;
            if (o !== null) {
              for (var u = 0; u < o.length; u++) {
                var c = o[u];
                for (U = c; U !== null; ) {
                  var h = U;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      gr(8, h, a);
                  }
                  var x = h.child;
                  if (x !== null) x.return = h, U = x;
                  else for (; U !== null; ) {
                    h = U;
                    var v = h.sibling, w = h.return;
                    if (Uc(h), h === c) {
                      U = null;
                      break;
                    }
                    if (v !== null) {
                      v.return = w, U = v;
                      break;
                    }
                    U = w;
                  }
                }
              }
              var g = a.alternate;
              if (g !== null) {
                var _ = g.child;
                if (_ !== null) {
                  g.child = null;
                  do {
                    var j = _.sibling;
                    _.sibling = null, _ = j;
                  } while (_ !== null);
                }
              }
              U = a;
            }
          }
          if (a.subtreeFlags & 2064 && i !== null) i.return = a, U = i;
          else e: for (; U !== null; ) {
            if (a = U, a.flags & 2048) switch (a.tag) {
              case 0:
              case 11:
              case 15:
                gr(9, a, a.return);
            }
            var d = a.sibling;
            if (d !== null) {
              d.return = a.return, U = d;
              break e;
            }
            U = a.return;
          }
        }
        var f = e.current;
        for (U = f; U !== null; ) {
          i = U;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) p.return = i, U = p;
          else e: for (i = f; U !== null; ) {
            if (o = U, o.flags & 2048) try {
              switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  ts(9, o);
              }
            } catch (E) {
              we(o, o.return, E);
            }
            if (o === i) {
              U = null;
              break e;
            }
            var y = o.sibling;
            if (y !== null) {
              y.return = o.return, U = y;
              break e;
            }
            U = o.return;
          }
        }
        if (oe = l, tn(), wt && typeof wt.onPostCommitFiberRoot == "function") try {
          wt.onPostCommitFiberRoot(Gl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      ue = n, lt.transition = t;
    }
  }
  return !1;
}
function $o(e, t, n) {
  t = Vn(n, t), t = Tc(e, t, 1), e = Ht(e, t, 1), t = Fe(), e !== null && (Or(e, 1, t), He(e, t));
}
function we(e, t, n) {
  if (e.tag === 3) $o(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      $o(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Gt === null || !Gt.has(r))) {
        e = Vn(n, e), e = Lc(t, e, 1), t = Ht(t, e, 1), e = Fe(), t !== null && (Or(t, 1, e), He(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function am(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Fe(), e.pingedLanes |= e.suspendedLanes & n, Me === e && (Te & n) === n && (Ee === 4 || Ee === 3 && (Te & 130023424) === Te && 500 > xe() - wi ? un(e, 0) : vi |= n), He(e, t);
}
function Jc(e, t) {
  t === 0 && (e.mode & 1 ? (t = Yr, Yr <<= 1, !(Yr & 130023424) && (Yr = 4194304)) : t = 1);
  var n = Fe();
  e = Mt(e, t), e !== null && (Or(e, t, n), He(e, n));
}
function im(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Jc(e, n);
}
function om(e, t) {
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
      throw Error(D(314));
  }
  r !== null && r.delete(t), Jc(e, n);
}
var Zc;
Zc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Qe.current) Ve = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ve = !1, Yp(e, t, n);
    Ve = !!(e.flags & 131072);
  }
  else Ve = !1, he && t.flags & 1048576 && rc(t, Dl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      gl(e, t), e = t.pendingProps;
      var l = Fn(t, ze.current);
      zn(t, n), l = fi(null, t, r, e, l, n);
      var a = pi();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Be(r) ? (a = !0, Ll(t)) : a = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ii(t), l.updater = es, t.stateNode = l, l._reactInternals = t, ma(t, r, e, n), t = ya(null, t, r, !0, a, n)) : (t.tag = 0, he && a && ei(t), Oe(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (gl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = cm(r), e = ut(r, e), l) {
          case 0:
            t = ga(null, t, r, e, n);
            break e;
          case 1:
            t = bo(null, t, r, e, n);
            break e;
          case 11:
            t = Mo(null, t, r, e, n);
            break e;
          case 14:
            t = Io(null, t, r, ut(r.type, e), n);
            break e;
        }
        throw Error(D(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ut(r, l), ga(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ut(r, l), bo(e, t, r, l, n);
    case 3:
      e: {
        if (zc(t), e === null) throw Error(D(387));
        r = t.pendingProps, a = t.memoizedState, l = a.element, uc(e, t), Al(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          l = Vn(Error(D(423)), t), t = To(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = Vn(Error(D(424)), t), t = To(e, t, r, n, l);
          break e;
        } else for (qe = Bt(t.stateNode.containerInfo.firstChild), Xe = t, he = !0, dt = null, n = ic(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if ($n(), r === l) {
            t = It(e, t, n);
            break e;
          }
          Oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return cc(t), e === null && da(t), r = t.type, l = t.pendingProps, a = e !== null ? e.memoizedProps : null, i = l.children, aa(r, l) ? i = null : a !== null && aa(r, a) && (t.flags |= 32), Rc(e, t), Oe(e, t, i, n), t.child;
    case 6:
      return e === null && da(t), null;
    case 13:
      return Ac(e, t, n);
    case 4:
      return oi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Wn(t, null, r, n) : Oe(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ut(r, l), Mo(e, t, r, l, n);
    case 7:
      return Oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, a = t.memoizedProps, i = l.value, fe(Rl, r._currentValue), r._currentValue = i, a !== null) if (ht(a.value, i)) {
          if (a.children === l.children && !Qe.current) {
            t = It(e, t, n);
            break e;
          }
        } else for (a = t.child, a !== null && (a.return = t); a !== null; ) {
          var o = a.dependencies;
          if (o !== null) {
            i = a.child;
            for (var u = o.firstContext; u !== null; ) {
              if (u.context === r) {
                if (a.tag === 1) {
                  u = Et(-1, n & -n), u.tag = 2;
                  var c = a.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var h = c.pending;
                    h === null ? u.next = u : (u.next = h.next, h.next = u), c.pending = u;
                  }
                }
                a.lanes |= n, u = a.alternate, u !== null && (u.lanes |= n), fa(
                  a.return,
                  n,
                  t
                ), o.lanes |= n;
                break;
              }
              u = u.next;
            }
          } else if (a.tag === 10) i = a.type === t.type ? null : a.child;
          else if (a.tag === 18) {
            if (i = a.return, i === null) throw Error(D(341));
            i.lanes |= n, o = i.alternate, o !== null && (o.lanes |= n), fa(i, n, t), i = a.sibling;
          } else i = a.child;
          if (i !== null) i.return = a;
          else for (i = a; i !== null; ) {
            if (i === t) {
              i = null;
              break;
            }
            if (a = i.sibling, a !== null) {
              a.return = i.return, i = a;
              break;
            }
            i = i.return;
          }
          a = i;
        }
        Oe(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, zn(t, n), l = st(l), r = r(l), t.flags |= 1, Oe(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = ut(r, t.pendingProps), l = ut(r.type, l), Io(e, t, r, l, n);
    case 15:
      return Pc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ut(r, l), gl(e, t), t.tag = 1, Be(r) ? (e = !0, Ll(t)) : e = !1, zn(t, n), bc(t, r, l), ma(t, r, l, n), ya(null, t, r, !0, e, n);
    case 19:
      return Oc(e, t, n);
    case 22:
      return Dc(e, t, n);
  }
  throw Error(D(156, t.tag));
};
function ed(e, t) {
  return Nu(e, t);
}
function um(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function rt(e, t, n, r) {
  return new um(e, t, n, r);
}
function Si(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function cm(e) {
  if (typeof e == "function") return Si(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Ua) return 11;
    if (e === Va) return 14;
  }
  return 2;
}
function Yt(e, t) {
  var n = e.alternate;
  return n === null ? (n = rt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function wl(e, t, n, r, l, a) {
  var i = 2;
  if (r = e, typeof e == "function") Si(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case _n:
      return cn(n.children, l, a, t);
    case Wa:
      i = 8, l |= 8;
      break;
    case Os:
      return e = rt(12, n, t, l | 2), e.elementType = Os, e.lanes = a, e;
    case Fs:
      return e = rt(13, n, t, l), e.elementType = Fs, e.lanes = a, e;
    case $s:
      return e = rt(19, n, t, l), e.elementType = $s, e.lanes = a, e;
    case cu:
      return rs(n, l, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ou:
          i = 10;
          break e;
        case uu:
          i = 9;
          break e;
        case Ua:
          i = 11;
          break e;
        case Va:
          i = 14;
          break e;
        case zt:
          i = 16, r = null;
          break e;
      }
      throw Error(D(130, e == null ? e : typeof e, ""));
  }
  return t = rt(i, n, t, l), t.elementType = e, t.type = r, t.lanes = a, t;
}
function cn(e, t, n, r) {
  return e = rt(7, e, r, t), e.lanes = n, e;
}
function rs(e, t, n, r) {
  return e = rt(22, e, r, t), e.elementType = cu, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Ps(e, t, n) {
  return e = rt(6, e, null, t), e.lanes = n, e;
}
function Ds(e, t, n) {
  return t = rt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function dm(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ms(0), this.expirationTimes = ms(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ms(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function ji(e, t, n, r, l, a, i, o, u) {
  return e = new dm(e, t, n, o, u), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = rt(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ii(a), e;
}
function fm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: xn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function td(e) {
  if (!e) return Xt;
  e = e._reactInternals;
  e: {
    if (yn(e) !== e || e.tag !== 1) throw Error(D(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Be(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(D(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Be(n)) return tc(e, n, t);
  }
  return t;
}
function nd(e, t, n, r, l, a, i, o, u) {
  return e = ji(n, r, !0, e, l, a, i, o, u), e.context = td(null), n = e.current, r = Fe(), l = Kt(n), a = Et(r, l), a.callback = t ?? null, Ht(n, a, l), e.current.lanes = l, Or(e, l, r), He(e, r), e;
}
function ls(e, t, n, r) {
  var l = t.current, a = Fe(), i = Kt(l);
  return n = td(n), t.context === null ? t.context = n : t.pendingContext = n, t = Et(a, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ht(l, t, i), e !== null && (mt(e, l, i, a), pl(e, l, i)), i;
}
function Bl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Wo(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ei(e, t) {
  Wo(e, t), (e = e.alternate) && Wo(e, t);
}
function pm() {
  return null;
}
var rd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ci(e) {
  this._internalRoot = e;
}
ss.prototype.render = Ci.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(D(409));
  ls(e, t, null, null);
};
ss.prototype.unmount = Ci.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    hn(function() {
      ls(null, e, null, null);
    }), t[Nt] = null;
  }
};
function ss(e) {
  this._internalRoot = e;
}
ss.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Du();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ot.length && t !== 0 && t < Ot[n].priority; n++) ;
    Ot.splice(n, 0, e), n === 0 && zu(e);
  }
};
function Ni(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function as(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Uo() {
}
function mm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var c = Bl(i);
        a.call(c);
      };
    }
    var i = nd(t, r, e, 0, null, !1, !1, "", Uo);
    return e._reactRootContainer = i, e[Nt] = i.current, Nr(e.nodeType === 8 ? e.parentNode : e), hn(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function() {
      var c = Bl(u);
      o.call(c);
    };
  }
  var u = ji(e, 0, !1, null, null, !1, !1, "", Uo);
  return e._reactRootContainer = u, e[Nt] = u.current, Nr(e.nodeType === 8 ? e.parentNode : e), hn(function() {
    ls(t, u, n, r);
  }), u;
}
function is(e, t, n, r, l) {
  var a = n._reactRootContainer;
  if (a) {
    var i = a;
    if (typeof l == "function") {
      var o = l;
      l = function() {
        var u = Bl(i);
        o.call(u);
      };
    }
    ls(t, i, e, l);
  } else i = mm(n, t, e, l, r);
  return Bl(i);
}
Lu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = or(t.pendingLanes);
        n !== 0 && (Ha(t, n | 1), He(t, xe()), !(oe & 6) && (Qn = xe() + 500, tn()));
      }
      break;
    case 13:
      hn(function() {
        var r = Mt(e, 1);
        if (r !== null) {
          var l = Fe();
          mt(r, e, 1, l);
        }
      }), Ei(e, 1);
  }
};
Ga = function(e) {
  if (e.tag === 13) {
    var t = Mt(e, 134217728);
    if (t !== null) {
      var n = Fe();
      mt(t, e, 134217728, n);
    }
    Ei(e, 134217728);
  }
};
Pu = function(e) {
  if (e.tag === 13) {
    var t = Kt(e), n = Mt(e, t);
    if (n !== null) {
      var r = Fe();
      mt(n, e, t, r);
    }
    Ei(e, t);
  }
};
Du = function() {
  return ue;
};
Ru = function(e, t) {
  var n = ue;
  try {
    return ue = e, t();
  } finally {
    ue = n;
  }
};
qs = function(e, t, n) {
  switch (t) {
    case "input":
      if (Vs(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Xl(r);
            if (!l) throw Error(D(90));
            fu(r), Vs(r, l);
          }
        }
      }
      break;
    case "textarea":
      mu(e, n);
      break;
    case "select":
      t = n.value, t != null && Ln(e, !!n.multiple, t, !1);
  }
};
_u = xi;
ku = hn;
var hm = { usingClientEntryPoint: !1, Events: [$r, En, Xl, wu, xu, xi] }, sr = { findFiberByHostInstance: sn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, gm = { bundleType: sr.bundleType, version: sr.version, rendererPackageName: sr.rendererPackageName, rendererConfig: sr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: bt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Eu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: sr.findFiberByHostInstance || pm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var al = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!al.isDisabled && al.supportsFiber) try {
    Gl = al.inject(gm), wt = al;
  } catch {
  }
}
Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hm;
Ze.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ni(t)) throw Error(D(200));
  return fm(e, t, null, n);
};
Ze.createRoot = function(e, t) {
  if (!Ni(e)) throw Error(D(299));
  var n = !1, r = "", l = rd;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ji(e, 1, !1, null, null, n, !1, r, l), e[Nt] = t.current, Nr(e.nodeType === 8 ? e.parentNode : e), new Ci(t);
};
Ze.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(D(188)) : (e = Object.keys(e).join(","), Error(D(268, e)));
  return e = Eu(t), e = e === null ? null : e.stateNode, e;
};
Ze.flushSync = function(e) {
  return hn(e);
};
Ze.hydrate = function(e, t, n) {
  if (!as(t)) throw Error(D(200));
  return is(null, e, t, !0, n);
};
Ze.hydrateRoot = function(e, t, n) {
  if (!Ni(e)) throw Error(D(405));
  var r = n != null && n.hydratedSources || null, l = !1, a = "", i = rd;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = nd(t, null, e, 1, n ?? null, l, !1, a, i), e[Nt] = t.current, Nr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new ss(t);
};
Ze.render = function(e, t, n) {
  if (!as(t)) throw Error(D(200));
  return is(null, e, t, !1, n);
};
Ze.unmountComponentAtNode = function(e) {
  if (!as(e)) throw Error(D(40));
  return e._reactRootContainer ? (hn(function() {
    is(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Nt] = null;
    });
  }), !0) : !1;
};
Ze.unstable_batchedUpdates = xi;
Ze.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!as(n)) throw Error(D(200));
  if (e == null || e._reactInternals === void 0) throw Error(D(38));
  return is(e, t, n, !1, r);
};
Ze.version = "18.3.1-next-f1338f8080-20240426";
function ld() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ld);
    } catch (e) {
      console.error(e);
    }
}
ld(), lu.exports = Ze;
var be = lu.exports, sd, Vo = be;
sd = Vo.createRoot, Vo.hydrateRoot;
var ad = { exports: {} }, os = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ym = m, vm = Symbol.for("react.element"), wm = Symbol.for("react.fragment"), xm = Object.prototype.hasOwnProperty, _m = ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, km = { key: !0, ref: !0, __self: !0, __source: !0 };
function id(e, t, n) {
  var r, l = {}, a = null, i = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) xm.call(t, r) && !km.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: vm, type: e, key: a, ref: i, props: l, _owner: _m.current };
}
os.Fragment = wm;
os.jsx = id;
os.jsxs = id;
ad.exports = os;
var s = ad.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Sm = {
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
const jm = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), le = (e, t) => {
  const n = m.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: i,
      className: o = "",
      children: u,
      ...c
    }, h) => m.createElement(
      "svg",
      {
        ref: h,
        ...Sm,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: i ? Number(a) * 24 / Number(l) : a,
        className: ["lucide", `lucide-${jm(e)}`, o].join(" "),
        ...c
      },
      [
        ...t.map(([x, v]) => m.createElement(x, v)),
        ...Array.isArray(u) ? u : [u]
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
const od = le("AlertCircle", [
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
const Em = le("AlertTriangle", [
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
const ud = le("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cm = le("ArrowUpDown", [
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
const cd = le("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nm = le("Box", [
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
const Mm = le("Calendar", [
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
const Im = le("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mi = le("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dd = le("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fd = le("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bm = le("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tm = le("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lm = le("Download", [
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
const pd = le("FileJson", [
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
const Pm = le("Folder", [
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
const Dm = le("Info", [
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
const Rm = le("Lasso", [
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
const md = le("LayoutGrid", [
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
const zm = le("LayoutList", [
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
const Am = le("Link2Off", [
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
const Om = le("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qo = le("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fm = le("Maximize", [
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
const $m = le("Minimize", [
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
const Wm = le("MoreVertical", [
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
const hd = le("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ii = le("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bi = le("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zr = le("RefreshCw", [
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
const Bn = le("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Um = le("Settings", [
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
const gd = le("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ia = le("Star", [
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
const Yn = le("Tag", [
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
const Jt = le("Trash2", [
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
const Vm = le("Type", [
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
const Qm = le("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11", key: "llx8ln" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bm = le("Upload", [
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
const ke = le("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
window.api = ne;
async function ie(e) {
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
const Hm = async () => {
  const e = await ne.fetchApi("/meld/home-dir");
  return (await ie(e)).home;
}, Tt = ({
  onEscape: e,
  enabled: t = !0,
  capture: n = !0
}) => {
  m.useEffect(() => {
    if (!t) return;
    const r = (l) => {
      l.key === "Escape" && (l.preventDefault(), l.stopPropagation(), l.stopImmediatePropagation(), e());
    };
    return window.addEventListener("keydown", r, { capture: n }), () => window.removeEventListener("keydown", r, { capture: n });
  }, [e, t, n]);
};
let Hl = !1;
const Gm = (e) => {
  Hl = e, Hl && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, Km = (...e) => {
  Hl && console.log("[Meld]", ...e);
}, Ym = (...e) => {
  Hl && console.warn("[Meld]", ...e);
}, qm = (...e) => {
  console.error("[Meld]", ...e);
}, J = {
  log: Km,
  warn: Ym,
  error: qm,
  init: Gm
}, xl = async (e = 0, t = 30, n = "", r = "default", l = !1) => {
  const a = await ne.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${l ? "&minimal=true" : ""}`
  );
  return ie(a);
}, yd = async (e) => {
  const t = await ne.fetchApi(`/meld/image/${e}/details`);
  return ie(t);
}, ba = async (e, t = !1) => {
  const n = await ne.fetchApi("/meld/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      permanent: t
    })
  });
  await ie(n);
}, Ti = async (e) => {
  const t = await ne.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  return ie(t);
}, vd = async (e) => {
  const t = await ne.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  return ie(t);
}, Bo = async (e, t) => {
  const n = await ne.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  });
  await ie(n);
}, Xm = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await ne.fetchApi(
    `/meld/suggest-parents?id=${e}${n}`
  );
  try {
    return await ie(r);
  } catch {
    return [];
  }
}, Ta = async (e) => {
  const t = await ne.fetchApi(`/meld/lineage?id=${e}`);
  try {
    return await ie(t);
  } catch {
    return [];
  }
}, Jm = async (e, t) => {
  const n = await ne.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  });
  await ie(n);
}, Zm = async (e, t) => {
  const n = await ne.fetchApi("/meld/image-notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, userNotes: t })
  });
  return ie(n);
}, La = async (e, t, n) => {
  const r = await ne.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  });
  await ie(r);
}, eh = async (e) => {
  const t = await ne.fetchApi(`/meld/image/${e}/workflow`);
  return ie(t);
}, th = async (e) => {
  const t = await ne.fetchApi(`/meld/image/${e}/snapshot_data`);
  return ie(t);
}, nh = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await ne.fetchApi(n);
  return ie(r);
}, rh = async () => {
  const e = await ne.fetchApi("/meld/search-suggestions");
  return ie(e);
}, lh = async () => {
  const e = await ne.fetchApi("/meld/search-keywords");
  return ie(e);
}, sh = async () => {
  const e = await ne.fetchApi("/meld/search-config");
  return ie(e);
}, ah = async () => {
  const e = await ne.fetchApi("/meld/favorites");
  return ie(e);
}, ih = async (e, t) => {
  const n = await ne.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  });
  await ie(n);
}, Ho = async (e) => {
  const t = await ne.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  });
  await ie(t);
}, oh = async (e, t, n) => {
  const r = await ne.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  });
  await ie(r);
}, uh = {
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
}, wd = async () => {
  let e;
  try {
    const t = await ne.fetchApi("/meld/settings");
    e = await ie(t);
  } catch (t) {
    return console.error("Failed to fetch settings, using defaults", t), uh;
  }
  return typeof e["sidebar.show_filename"] == "boolean" && (e["sidebar.show_filename"] = e["sidebar.show_filename"] ? "filename" : "none"), typeof e["viewer.details.show_filename"] == "boolean" && (e["viewer.details.show_filename"] = e["viewer.details.show_filename"] ? "filename" : "none"), typeof e["fullscreen.details.show_filename"] == "boolean" && (e["fullscreen.details.show_filename"] = e["fullscreen.details.show_filename"] ? "filename" : "none"), e;
}, ch = async (e, t) => {
  const n = await ne.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  });
  await ie(n);
}, dh = {
  images: [],
  selectedIds: /* @__PURE__ */ new Set(),
  isLoading: !1,
  error: null,
  viewScope: "default",
  viewerImageId: null,
  viewerMode: "gallery",
  viewerInitialMaskMode: !1,
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
  favorites: []
};
function fh(e, t) {
  var n, r;
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "REMOVE_IMAGES": {
      const l = new Set(t.payload), a = e.images.filter((o) => !l.has(o.id)), i = new Set(e.selectedIds);
      for (const o of t.payload)
        i.delete(o);
      return {
        ...e,
        images: a,
        selectedIds: i,
        pagination: {
          ...e.pagination,
          total: Math.max(0, e.pagination.total - t.payload.length)
        }
      };
    }
    case "ADD_IMAGES": {
      const l = t.payload, a = [...e.images, ...l], i = Array.from(
        new Map(a.map((o) => [o.id, o])).values()
      ).sort((o, u) => u.created_at - o.created_at);
      return {
        ...e,
        images: i,
        pagination: {
          ...e.pagination,
          total: e.pagination.total + l.length
        }
      };
    }
    case "UPDATE_IMAGE": {
      const l = t.payload, a = e.images.map(
        (o) => o.id === l.id ? l : o
      ), i = e.lineageImages.map(
        (o) => o.id === l.id ? l : o
      );
      return {
        ...e,
        images: a,
        lineageImages: i
      };
    }
    case "SET_IMAGES": {
      const { images: l, total: a, offset: i } = t.payload;
      let o = e.viewerImageId;
      return e.viewerMode === "gallery" && o !== null && !l.some((u) => u.id === o) && (o = null), {
        ...e,
        images: l,
        isLoading: !1,
        error: null,
        viewerImageId: o,
        pagination: {
          total: a,
          offset: i,
          limit: e.pagination.limit,
          hasMore: i + l.length < a
        }
      };
    }
    case "APPEND_IMAGES": {
      const { images: l, total: a, offset: i } = t.payload, o = [...e.images, ...l], u = Array.from(
        new Map(o.map((c) => [c.id, c])).values()
      );
      return {
        ...e,
        images: u,
        isLoading: !1,
        error: null,
        pagination: {
          ...e.pagination,
          total: a,
          offset: i,
          hasMore: i + l.length < a
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
      const l = new Set(e.selectedIds);
      let a = e.lastSelectedId;
      return l.has(t.payload) ? (l.delete(t.payload), a === t.payload && (a = null)) : (l.add(t.payload), a = t.payload), {
        ...e,
        selectedIds: l,
        lastSelectedId: a
      };
    }
    case "SELECT_RANGE": {
      if (e.lastSelectedId === null) {
        const c = new Set(e.selectedIds);
        return c.add(t.payload), {
          ...e,
          selectedIds: c,
          lastSelectedId: t.payload
        };
      }
      const l = e.images.findIndex(
        (c) => c.id === e.lastSelectedId
      ), a = e.images.findIndex(
        (c) => c.id === t.payload
      );
      if (l === -1 || a === -1) return e;
      const [i, o] = [
        Math.min(l, a),
        Math.max(l, a)
      ], u = new Set(e.selectedIds);
      for (let c = i; c <= o; c++)
        u.add(e.images[c].id);
      return {
        ...e,
        selectedIds: u,
        lastSelectedId: t.payload
      };
    }
    case "SELECT_ALL":
      return {
        ...e,
        selectedIds: new Set(
          e.images.map((l) => l.id)
        ),
        lastSelectedId: e.images.length > 0 ? e.images[0].id : null
      };
    case "CLEAR_SELECTION":
      return {
        ...e,
        selectedIds: /* @__PURE__ */ new Set(),
        lastSelectedId: null
      };
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
      const l = t.payload, a = typeof l == "number" ? l : l.id, i = typeof l == "number" ? "gallery" : l.mode;
      let o = !1;
      if (typeof l != "number" && l.initialMaskMode && (typeof l.initialMaskMode == "string" ? o = l.initialMaskMode : o = "run"), o)
        return {
          ...e,
          activeModal: {
            type: "mask_editor",
            imageId: a,
            mode: o
          }
        };
      const u = e.viewerMode === "lineage" && i === "lineage" && e.lineageImages.some((c) => c.id === a);
      return {
        ...e,
        viewerImageId: a,
        viewerMode: i,
        viewerInitialMaskMode: o,
        lineageImages: u ? e.lineageImages : []
      };
    }
    case "CLOSE_VIEWER":
      return {
        ...e,
        viewerImageId: null,
        viewerInitialMaskMode: !1,
        lineageImages: []
      };
    case "NEXT_IMAGE": {
      const a = ((n = t.payload) == null ? void 0 : n.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], i = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1"), o = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (h) => h.exists !== !1 && (e.settings["gallery.show_parent_images"] || !h.has_children || i)
      );
      if (e.viewerImageId === null || o.length === 0)
        return e;
      const u = o.findIndex(
        (h) => h.id === e.viewerImageId
      );
      if (u === -1 || u === o.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || u === o.length - 1 && !a)
        return e;
      const c = (u + 1) % o.length;
      return {
        ...e,
        viewerImageId: o[c].id
      };
    }
    case "PREVIOUS_IMAGE": {
      const a = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], i = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1"), o = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (h) => h.exists !== !1 && (e.settings["gallery.show_parent_images"] || !h.has_children || i)
      );
      if (e.viewerImageId === null || o.length === 0)
        return e;
      const u = o.findIndex(
        (h) => h.id === e.viewerImageId
      );
      if (u === -1 || u === 0 && e.viewerMode === "gallery" && e.pagination.hasMore || u === 0 && !a)
        return e;
      const c = (u - 1 + o.length) % o.length;
      return {
        ...e,
        viewerImageId: o[c].id
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
      const l = {
        ...e.settings,
        ...t.payload
      }, a = { ...e.pagination };
      return t.payload["gallery.initial_load_count"] !== void 0 && (a.limit = t.payload["gallery.initial_load_count"]), {
        ...e,
        settings: l,
        pagination: a
      };
    }
    case "SET_SEARCH_QUERY":
      return {
        ...e,
        searchQuery: t.payload
      };
    default:
      return e;
  }
}
const xd = m.createContext(void 0), ph = ({
  children: e
}) => {
  const [t, n] = m.useReducer(fh, dh), r = m.useRef(t.images.length), l = m.useRef(0);
  m.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const a = m.useCallback(
    async (w, g, _) => {
      const j = t.settings["gallery.max_load_count"], d = 200;
      let f = w;
      for (; f < Math.min(g, j) && _ === l.current; )
        try {
          const p = Math.min(d, j - f);
          J.log("Background fetch: starting chunk", {
            offset: f,
            limit: p
          });
          const y = await xl(
            f,
            p,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (_ !== l.current || (n({ type: "APPEND_IMAGES", payload: y }), f += y.images.length, y.images.length === 0 || f >= y.total))
            break;
          await new Promise((E) => setTimeout(E, 300));
        } catch (p) {
          J.error("Background fetch failed", p);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), i = m.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const w = performance.now(), g = ++l.current;
    try {
      const _ = t.searchQuery.trim() !== "", j = t.settings["gallery.initial_load_count"];
      J.log("refreshImages: starting initial fetch", {
        isSearch: _,
        fetchLimit: j,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const d = await xl(
        0,
        j,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), f = performance.now() - w;
      J.log("refreshImages: initial fetch complete", {
        count: d.images.length,
        total: d.total,
        offset: d.offset,
        durationMs: f.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: d }), d.total > j && a(j, d.total, g);
    } catch (_) {
      J.error("refreshImages: fetch failed", _), n({
        type: "SET_ERROR",
        payload: _ instanceof Error ? _.message : String(_)
      });
    }
  }, [
    t.searchQuery,
    t.viewScope,
    t.settings,
    a
  ]), o = m.useCallback(async () => {
    if (t.isLoading || !t.pagination.hasMore) return;
    n({ type: "SET_LOADING", payload: !0 });
    const w = performance.now();
    try {
      const g = r.current, _ = t.searchQuery.trim() !== "", j = t.pagination.limit;
      J.log("loadMoreImages: starting fetch", {
        nextOffset: g,
        fetchLimit: j,
        isSearch: _
      });
      const d = await xl(
        g,
        j,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), f = performance.now() - w;
      J.log("loadMoreImages: fetch complete", {
        count: d.images.length,
        total: d.total,
        offset: d.offset,
        durationMs: f.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: d });
    } catch (g) {
      J.error("loadMoreImages: fetch failed", g), n({
        type: "SET_ERROR",
        payload: g instanceof Error ? g.message : String(g)
      });
    }
  }, [
    t.isLoading,
    t.pagination.hasMore,
    t.pagination.limit,
    t.searchQuery,
    t.viewScope
  ]), u = m.useCallback(async () => {
    try {
      const w = await ah();
      n({ type: "SET_FAVORITES", payload: w });
    } catch (w) {
      J.error("Failed to load favorites", w);
    }
  }, []), c = m.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const w = Array.from(t.selectedIds), _ = t.images.filter(
      (j) => t.selectedIds.has(j.id)
    ).some(
      (j) => j.parent_id || j.has_children
    );
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: w,
        hasLineage: _,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), h = m.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const w = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const _ = (await Ti(w)).restored_ids || w;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: _ }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (g) {
      n({
        type: "SET_ERROR",
        payload: g instanceof Error ? g.message : String(g)
      });
    }
  }, [t.selectedIds, t.viewScope]), x = m.useCallback(
    async (w, g) => {
      try {
        await ch(w, g), n({ type: "SET_SETTINGS", payload: { [w]: g } });
      } catch (_) {
        n({
          type: "SET_ERROR",
          payload: _ instanceof Error ? _.message : String(_)
        });
      }
    },
    []
  ), v = m.useCallback(
    async (w) => {
      const g = t.images.find((_) => _.id === w);
      if (g && !g.is_minimal)
        return g;
      try {
        J.log("fetchFullImageDetails: fetching full data", { id: w });
        const _ = await yd(w);
        return n({ type: "UPDATE_IMAGE", payload: _ }), _;
      } catch (_) {
        throw J.error("Failed to fetch image details", _), _;
      }
    },
    [t.images]
  );
  return m.useEffect(() => {
    (async () => {
      try {
        const g = await wd();
        n({ type: "SET_SETTINGS", payload: g });
      } catch (g) {
        J.error("Failed to load settings", g);
      }
    })();
  }, []), m.useEffect(() => {
    u();
  }, [u]), m.useEffect(() => {
    const w = () => {
      i();
    }, g = (j) => {
      const d = j.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: d }
      });
    }, _ = (j) => {
      const d = j.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !1,
          isFinished: !0,
          shouldCancel: !1,
          newCount: d.new_count || 0,
          updatedCount: d.updated_count || 0,
          totalCount: d.total_count || 0,
          progress: {
            current: d.total_count || t.scanStatus.progress.total,
            total: d.total_count || t.scanStatus.progress.total,
            phase: "completed"
          }
        }
      }), i();
    };
    return window.addEventListener("meld-refresh", w), window.addEventListener("meld-scan-progress", g), window.addEventListener("meld-scan-finished", _), () => {
      window.removeEventListener("meld-refresh", w), window.removeEventListener("meld-scan-progress", g), window.removeEventListener("meld-scan-finished", _);
    };
  }, [i, t.scanStatus.progress.total]), m.useEffect(() => {
    i();
  }, [i]), /* @__PURE__ */ s.jsx(
    xd.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: i,
        loadMoreImages: o,
        refreshFavorites: u,
        deleteSelected: c,
        restoreSelected: h,
        updateSetting: x,
        fetchFullImageDetails: v
      },
      children: e
    }
  );
}, Ce = () => {
  const e = m.useContext(xd);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, Ge = (e) => {
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
}, Li = async () => {
  const e = await ne.fetchApi("/meld/tags");
  return ie(e);
}, mh = async (e) => {
  const t = await ne.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  return ie(t);
}, hh = async (e) => {
  const t = await ne.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  });
  await ie(t);
}, gh = async (e, t) => {
  const n = await ne.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  await ie(n);
}, yh = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await ne.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, vh = async (e, t, n = !1, r) => {
  const l = await ne.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  try {
    return await ie(l);
  } catch (a) {
    return console.error("Failed to fetch folders", a), { folders: [], images: [], image_count: 0 };
  }
}, wh = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await ne.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  try {
    return await ie(l);
  } catch (a) {
    return console.error("Failed to fetch folder metadata", a), {};
  }
}, xh = async (e, t, n) => {
  const r = await ne.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  try {
    return (await ie(r)).count;
  } catch {
    return 0;
  }
}, _h = async (e) => {
  const t = await ne.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  await ie(t);
}, kh = async () => {
  const e = await ne.fetchApi("/meld/scan/cancel", {
    method: "POST"
  });
  await ie(e);
}, _d = () => {
  const { dispatch: e } = Ce(), [t, n] = m.useState(() => {
    const C = localStorage.getItem("meld-import-config"), Y = {
      type: "output",
      subfolder: "",
      custom_path: "",
      recursive: !0,
      auto_link_parent: !0,
      link_strategy: "new_only",
      tags: []
    };
    if (C)
      try {
        const R = JSON.parse(C);
        return { ...Y, ...R, tags: [] };
      } catch {
        return Y;
      }
    return Y;
  });
  m.useEffect(() => {
    const { tags: C, ...Y } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(Y));
  }, [t]);
  const [r, l] = m.useState([]), [a, i] = m.useState([]), [o, u] = m.useState(0), [c, h] = m.useState(!1), [x, v] = m.useState([]), [w, g] = m.useState(""), [_, j] = m.useState(!1), [d, f] = m.useState(null), p = m.useRef(!1), y = (C) => {
    C.target === C.currentTarget && (p.current = !0);
  }, E = (C) => {
    C.target === C.currentTarget && p.current && e({ type: "CLOSE_MODAL" }), p.current = !1;
  };
  m.useEffect(() => {
    (async () => {
      try {
        const Y = await Hm();
        n((R) => R.custom_path ? R : { ...R, custom_path: Y });
      } catch (Y) {
        J.error("Failed to fetch home directory:", Y);
      }
    })();
  }, []), m.useEffect(() => {
    const C = new AbortController();
    return (async () => {
      const R = t.type === "custom" ? t.custom_path : t.subfolder;
      if (J.log(
        `loadFolders started. Path: "${R}", Type: "${t.type}"`
      ), t.type === "custom" && !R) {
        J.log("Custom path is empty, skipping load."), l([]), i([]), u(0);
        return;
      }
      h(!0);
      const Q = R, T = t.type;
      try {
        J.log("Step 1: Fast load starting...");
        const L = await vh(
          t.type,
          R,
          !0,
          C.signal
        );
        if (C.signal.aborted) {
          J.log("Step 1: Aborted.");
          return;
        }
        J.log(
          `Step 1 complete. Found ${L.folders.length} folders, ${L.images.length} images.`
        ), l(L.folders), i(L.images), u(null);
        const W = L.folders.map((I) => I.name);
        W.length > 0 && (J.log(
          `Step 2: Metadata fetch starting for ${W.length} folders...`
        ), wh(
          T,
          Q,
          W,
          C.signal
        ).then((I) => {
          if (C.signal.aborted) {
            J.log("Step 2: Aborted.");
            return;
          }
          J.log("Step 2: Metadata fetch complete."), l(
            (A) => A.map((ee) => {
              const V = I[ee.name];
              return V ? { ...ee, count: V.count, preview: V.preview } : ee;
            })
          );
        }).catch((I) => {
          I.name !== "AbortError" && J.error("Step 2: Metadata fetch failed:", I);
        })), J.log("Step 3: Path image count starting..."), xh(T, Q, C.signal).then((I) => {
          if (C.signal.aborted) {
            J.log("Step 3: Aborted.");
            return;
          }
          J.log(`Step 3: Path image count complete: ${I}`), u(I);
        }).catch((I) => {
          I.name !== "AbortError" && J.error("Step 3: Path image count failed:", I);
        });
      } catch (L) {
        if (L.name === "AbortError") {
          J.log("Request aborted.");
          return;
        }
        J.error("Failed to load folders:", L), l([]), i([]), u(0);
      } finally {
        C.signal.aborted || h(!1);
      }
    })(), () => {
      C.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const k = m.useCallback(async () => {
    j(!0);
    try {
      const C = await Li();
      v(C);
    } catch (C) {
      J.error("Failed to fetch tags:", C);
    } finally {
      j(!1);
    }
  }, []);
  m.useEffect(() => {
    k();
  }, [k]), Tt({
    onEscape: m.useCallback(() => {
      d ? f(null) : e({ type: "CLOSE_MODAL" });
    }, [d, e])
  });
  const S = m.useMemo(() => x.filter(
    (C) => C.name.toLowerCase().includes(w.toLowerCase()) && !t.tags.includes(C.name)
  ), [x, w, t.tags]), N = (C) => {
    const Y = C.trim();
    Y && !t.tags.includes(Y) && (n({ ...t, tags: [...t.tags, Y] }), g(""));
  }, $ = (C) => {
    n({ ...t, tags: t.tags.filter((Y) => Y !== C) });
  }, M = (C) => {
    C.key === "Enter" && w.trim() && (C.preventDefault(), N(w.trim()));
  }, O = async () => {
    try {
      await _h(t), e({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !0,
          isFinished: !1,
          shouldCancel: !1,
          newCount: 0,
          progress: { current: 0, total: 0, phase: "registering" }
        }
      }), e({ type: "CLOSE_MODAL" });
    } catch (C) {
      J.error("Failed to start scan:", C), alert(`Failed to start scan: ${C}`);
    }
  }, q = (C) => {
    if (t.type === "custom") {
      const Y = t.custom_path.includes("\\") ? "\\" : "/", R = t.custom_path.endsWith(Y) ? `${t.custom_path}${C}` : `${t.custom_path}${Y}${C}`;
      n({ ...t, custom_path: R });
    } else {
      const Y = t.subfolder ? `${t.subfolder}/${C}` : C;
      n({ ...t, subfolder: Y });
    }
  }, K = () => {
    if (t.type === "custom") {
      const C = t.custom_path.includes("\\") ? "\\" : "/", Y = t.custom_path.split(C);
      if (Y.length > 1) {
        Y.pop();
        let R = Y.join(C);
        R === "" && C === "/" && (R = "/"), n({ ...t, custom_path: R });
      }
    } else {
      const C = t.subfolder.split("/");
      C.pop(), n({ ...t, subfolder: C.join("/") });
    }
  };
  return be.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: y,
        onMouseUp: E,
        children: [
          /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--large",
              onClick: (C) => C.stopPropagation(),
              children: [
                /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ s.jsx("h2", { children: "Import Images" }),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => e({ type: "CLOSE_MODAL" }),
                      children: /* @__PURE__ */ s.jsx(ke, { size: 20 })
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
                          onChange: (C) => n({
                            ...t,
                            type: C.target.value,
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
                      /* @__PURE__ */ s.jsx("div", { className: "meld-path-count", children: o === null ? /* @__PURE__ */ s.jsx("span", { className: "meld-path-count--loading", children: "Scanning..." }) : `${o} images` })
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ s.jsxs("label", { children: [
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: t.recursive,
                          onChange: (C) => n({ ...t, recursive: C.target.checked })
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
                          onChange: (C) => n({
                            ...t,
                            link_strategy: C.target.value,
                            auto_link_parent: C.target.value !== "none"
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
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((C) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        C,
                        /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => $(C),
                            children: /* @__PURE__ */ s.jsx(ke, { size: 12 })
                          }
                        )
                      ] }, C)) }),
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ s.jsx(Bn, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ s.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: w,
                            onChange: (C) => g(C.target.value),
                            onKeyDown: M
                          }
                        ),
                        w.trim() && !t.tags.includes(w.trim()) && /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => N(w),
                            children: /* @__PURE__ */ s.jsx(bi, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: _ ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : S.length === 0 ? w && /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        w
                      ] }) : S.map((C) => /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => N(C.name),
                          children: C.name
                        },
                        C.id
                      )) })
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ s.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "meld-btn meld-btn-primary",
                        onClick: O,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ s.jsx(Ii, { size: 16 }),
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
                          onClick: K,
                          children: [
                            /* @__PURE__ */ s.jsx(dd, { size: 16 }),
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
                          onChange: (C) => n({ ...t, custom_path: C.target.value }),
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
                    /* @__PURE__ */ s.jsx("div", { className: "meld-folder-list", children: c ? /* @__PURE__ */ s.jsx("div", { className: "meld-browser-loading", children: "Loading..." }) : r.length === 0 && a.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-browser-empty", children: "No items found." }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                      r.map((C) => /* @__PURE__ */ s.jsxs(
                        "div",
                        {
                          className: "meld-folder-item",
                          onClick: () => q(C.name),
                          children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-folder-icon-wrapper", children: C.preview ? /* @__PURE__ */ s.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: Ge(C.preview),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ s.jsx(Pm, { size: 16 }) }),
                            /* @__PURE__ */ s.jsx("span", { className: "meld-folder-name", children: C.name }),
                            /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${C.count === null ? "meld-folder-count--loading" : ""}`,
                                children: C.count !== null ? `${C.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ s.jsx(fd, { size: 14 })
                          ]
                        },
                        C.name
                      )),
                      a.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-browser-image-grid", children: a.map((C) => /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => f(C),
                          children: /* @__PURE__ */ s.jsx(
                            "img",
                            {
                              src: Ge(C),
                              alt: C.filename,
                              title: C.filename
                            }
                          )
                        },
                        C.filename
                      )) })
                    ] }) })
                  ] })
                ] }) })
              ]
            }
          ),
          d && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (C) => {
                C.stopPropagation(), f(null);
              },
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-import-preview-content",
                  onClick: (C) => C.stopPropagation(),
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-import-preview-close",
                          onClick: () => f(null),
                          children: /* @__PURE__ */ s.jsx(ke, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "img",
                        {
                          src: Ge(d),
                          alt: d.filename
                        }
                      )
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-import-preview-info", children: d.filename })
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
};
function Sh(e) {
  let t = e.filename;
  return e.subfolder && (t = `${e.subfolder}/${e.filename}`), e.type && e.type !== "input" && (t = `${t} [${e.type}]`), t;
}
function kd(e) {
  var i, o;
  const t = window.app;
  if (!(t != null && t.graph))
    return { ok: !1, reason: "no_app_graph" };
  const n = Sh(e), r = t.graph._nodes.filter(
    (u) => u.type === "MeldImageLoader" || u.type === "LoadImage" || u.type === "Load Image"
  );
  if (r.length === 0)
    return { ok: !1, reason: "no_loader_node" };
  const a = r[0].widgets.find(
    (u) => u.name === "image"
  );
  return a && (a.value = n, typeof a.callback == "function" && a.callback(n)), (o = (i = t.graph).afterChange) == null || o.call(i), t.graph.setDirtyCanvas(!0, !0), { ok: !0 };
}
const jh = () => {
  const { dispatch: e } = Ce();
  return { injectMaskToGraph: m.useCallback(
    (n, r) => {
      var h, x;
      console.log("[Meld-Debug] injectMaskToGraph called with:", r), kd(n);
      const l = window.app;
      if (!(l != null && l.graph))
        return console.log("[Meld-Debug] injectMaskToGraph: No comfyApp.graph found"), !1;
      const a = l.graph._nodes.filter(
        (v) => v.type === "LoadImageMask"
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
      const i = a[0], o = i.widgets.find(
        (v) => v.name === "image"
      ), u = `${r} [temp]`;
      console.log(
        "[Meld-Debug] injectMaskToGraph: Updating node",
        i.id,
        "widget 'image' with",
        u
      ), o && (o.value = u, typeof o.callback == "function" && o.callback(u));
      const c = i.widgets.find(
        (v) => v.name === "channel"
      );
      return c && (c.value = "red", typeof c.callback == "function" && c.callback("red")), (x = (h = l.graph).afterChange) == null || x.call(h), l.graph.setDirtyCanvas(!0, !0), !0;
    },
    [e]
  ) };
};
function Rs(e, t) {
  return {
    data: new Uint8ClampedArray(e * t).fill(0),
    width: e,
    height: t
  };
}
function Eh(e, t, n = 255) {
  const { width: r, height: l } = e, a = document.createElement("canvas");
  a.width = r, a.height = l;
  const i = a.getContext("2d", { willReadFrequently: !0 });
  if (!i) return e;
  const o = Pa(e, [255, 255, 255], 255);
  i.putImageData(o, 0, 0), i.fillStyle = n > 0 ? "white" : "black", i.beginPath(), t(i), i.fill();
  const u = i.getImageData(0, 0, r, l), c = new Uint8ClampedArray(r * l);
  for (let h = 0; h < r * l; h++)
    c[h] = u.data[h * 4] > 128 ? 255 : 0;
  return { ...e, data: c };
}
function Pa(e, t = [255, 255, 255], n = 255) {
  const { data: r, width: l, height: a } = e, i = new ImageData(l, a), o = i.data;
  for (let u = 0; u < r.length; u++) {
    const c = r[u], h = u * 4;
    c > 0 ? (o[h] = t[0], o[h + 1] = t[1], o[h + 2] = t[2], o[h + 3] = n) : (o[h] = 0, o[h + 1] = 0, o[h + 2] = 0, o[h + 3] = 0);
  }
  return i;
}
function Ch(e) {
  return e.data.every((t) => t === 0);
}
const Sd = ({
  imageId: e,
  mode: t,
  onClose: n
}) => {
  const { state: r, dispatch: l } = Ce(), a = r.images.find((P) => P.id === e), { injectMaskToGraph: i } = jh();
  Tt({ onEscape: n });
  const o = m.useRef(null), u = m.useRef(null), c = m.useRef(null), h = m.useRef(null), [x, v] = m.useState(!1), [w, g] = m.useState("rect"), [_, j] = m.useState({ x: 0, y: 0 }), [d, f] = m.useState({ x: 0, y: 0 }), [p, y] = m.useState([]), [E, k] = m.useState(null), [S, N] = m.useState(!1), $ = m.useCallback(() => {
    const P = c.current, z = u.current;
    if (!P || !z) return null;
    const F = z.getBoundingClientRect(), G = P.getBoundingClientRect(), se = P.naturalWidth, de = P.naturalHeight;
    if (!se || !de) return null;
    const B = se / de, te = G.width / G.height;
    let b, Z, X = 0, re = 0;
    return B > te ? (b = G.width, Z = G.width / B, re = (G.height - Z) / 2) : (Z = G.height, b = G.height * B, X = (G.width - b) / 2), {
      left: G.left - F.left + X,
      top: G.top - F.top + re,
      width: b,
      height: Z
    };
  }, []), M = m.useCallback(() => {
    const P = o.current;
    if (!P) return;
    const z = P.getContext("2d");
    if (!z) return;
    z.clearRect(0, 0, P.width, P.height);
    const F = getComputedStyle(document.documentElement), G = F.getPropertyValue("--comfy-input-bg-active") || F.getPropertyValue("--comfy-input-bg") || F.getPropertyValue("--bg-color") || "var(--comfy-input-bg)", se = $();
    if (h.current && se && (z.save(), z.globalAlpha = 0.5, z.drawImage(
      h.current,
      se.left,
      se.top,
      se.width,
      se.height
    ), z.restore()), x) {
      const de = Math.min(_.x, d.x), B = Math.min(_.y, d.y), te = Math.abs(_.x - d.x), b = Math.abs(_.y - d.y);
      if (z.save(), z.globalAlpha = 0.3, z.fillStyle = G, z.strokeStyle = "white", z.lineWidth = 2, z.setLineDash([5, 5]), z.beginPath(), w === "rect")
        z.rect(de, B, te, b);
      else if (w === "ellipse") {
        const Z = de + te / 2, X = B + b / 2;
        z.ellipse(Z, X, te / 2, b / 2, 0, 0, 2 * Math.PI);
      } else if (w === "lasso" && p.length > 1) {
        z.moveTo(p[0].x, p[0].y);
        for (let Z = 1; Z < p.length; Z++)
          z.lineTo(p[Z].x, p[Z].y);
        z.closePath();
      }
      z.fill(), z.globalAlpha = 1, z.stroke(), z.restore();
    }
  }, [x, _, d, w, p, $]), [O, q] = m.useState([]), K = m.useMemo(() => O.length > 0 ? O[O.length - 1] : c.current ? Rs(
    c.current.naturalWidth,
    c.current.naturalHeight
  ) : null, [O]);
  m.useEffect(() => {
    var P;
    (P = c.current) != null && P.naturalWidth && O.length === 0 && q([
      Rs(
        c.current.naturalWidth,
        c.current.naturalHeight
      )
    ]);
  }, [O.length]);
  const C = m.useRef(!1), Y = m.useRef(0), R = (P) => {
    P.target === P.currentTarget && (C.current = !0);
  }, Q = (P) => {
    P.target === P.currentTarget && C.current && !x && n(), C.current = !1;
  };
  m.useEffect(() => {
    if (!K) return;
    h.current || (h.current = document.createElement("canvas"));
    const P = h.current;
    P.width = K.width, P.height = K.height;
    const z = P.getContext("2d");
    if (!z) return;
    const F = Pa(K, [255, 255, 255], 255);
    z.putImageData(F, 0, 0), M();
  }, [K, M]), m.useEffect(() => {
    const P = () => {
      u.current && o.current && (o.current.width = u.current.clientWidth, o.current.height = u.current.clientHeight, M());
    }, z = new ResizeObserver(P);
    return u.current && z.observe(u.current), P(), () => z.disconnect();
  }, [M]);
  const T = (P) => {
    var de;
    if (P.button !== 0 || x || S || Date.now() - Y.current < 100)
      return;
    P.preventDefault();
    const z = $(), F = (de = u.current) == null ? void 0 : de.getBoundingClientRect();
    if (!z || !F) return;
    v(!0);
    const G = Math.max(
      z.left,
      Math.min(P.clientX - F.left, z.left + z.width)
    ), se = Math.max(
      z.top,
      Math.min(P.clientY - F.top, z.top + z.height)
    );
    j({ x: G, y: se }), f({ x: G, y: se }), y(w === "lasso" ? [{ x: G, y: se }] : []), k(null);
  };
  m.useEffect(() => {
    if (!x) return;
    const P = (F) => {
      var te;
      const G = $(), se = (te = u.current) == null ? void 0 : te.getBoundingClientRect();
      if (!G || !se) return;
      const de = Math.max(
        G.left,
        Math.min(F.clientX - se.left, G.left + G.width)
      ), B = Math.max(
        G.top,
        Math.min(F.clientY - se.top, G.top + G.height)
      );
      f({ x: de, y: B }), w === "lasso" && y((b) => [...b, { x: de, y: B }]);
    }, z = (F) => {
      var de;
      const G = $(), se = (de = u.current) == null ? void 0 : de.getBoundingClientRect();
      if (G && se && K && c.current) {
        const B = Math.max(
          G.left,
          Math.min(F.clientX - se.left, G.left + G.width)
        ), te = Math.max(
          G.top,
          Math.min(F.clientY - se.top, G.top + G.height)
        ), b = Math.min(_.x, B), Z = Math.min(_.y, te), X = Math.abs(_.x - B), re = Math.abs(_.y - te), Ke = w === "lasso";
        if (X > 5 || re > 5 || Ke && p.length > 2) {
          const Pt = c.current.naturalWidth, Se = c.current.naturalHeight, ce = Pt / G.width, Ae = Se / G.height, Xn = Eh(K, (nn) => {
            if (w === "rect") {
              const vn = (b - G.left) * ce, Dt = (Z - G.top) * Ae, Ur = X * ce, Vr = re * Ae;
              nn.rect(vn, Dt, Ur, Vr);
            } else if (w === "ellipse") {
              const vn = (b - G.left) * ce, Dt = (Z - G.top) * Ae, Ur = X * ce, Vr = re * Ae, Kd = vn + Ur / 2, Yd = Dt + Vr / 2;
              nn.ellipse(
                Kd,
                Yd,
                Ur / 2,
                Vr / 2,
                0,
                0,
                2 * Math.PI
              );
            } else if (w === "lasso" && p.length > 2) {
              const vn = p[0];
              nn.moveTo(
                (vn.x - G.left) * ce,
                (vn.y - G.top) * Ae
              );
              for (let Dt = 1; Dt < p.length; Dt++)
                nn.lineTo(
                  (p[Dt].x - G.left) * ce,
                  (p[Dt].y - G.top) * Ae
                );
              nn.closePath();
            }
          });
          q((nn) => [...nn, Xn]);
        }
      }
      Y.current = Date.now(), v(!1), y([]);
    };
    return window.addEventListener("mousemove", P), window.addEventListener("mouseup", z), () => {
      window.removeEventListener("mousemove", P), window.removeEventListener("mouseup", z);
    };
  }, [
    x,
    _.x,
    _.y,
    $,
    K,
    w,
    p
  ]);
  const L = m.useCallback(() => {
    O.length > 1 && q((P) => P.slice(0, -1));
  }, [O.length]);
  m.useEffect(() => {
    const P = (z) => {
      (z.metaKey || z.ctrlKey) && z.key === "z" ? (z.preventDefault(), L()) : z.key === "Escape" && (z.preventDefault(), z.stopPropagation(), z.stopImmediatePropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    };
    return window.addEventListener("keydown", P, { capture: !0 }), () => window.removeEventListener("keydown", P, { capture: !0 });
  }, [L, n]);
  const W = () => {
    if (c.current) {
      const P = Rs(
        c.current.naturalWidth,
        c.current.naturalHeight
      );
      q((z) => [...z, P]);
    }
  }, I = async () => {
    if (!K || !c.current) return null;
    N(!0);
    try {
      const { width: P, height: z } = K, F = document.createElement("canvas");
      F.width = P, F.height = z;
      const G = F.getContext("2d");
      if (!G) return null;
      const se = Pa(K, [255, 255, 255], 255);
      G.putImageData(se, 0, 0);
      const de = await new Promise(
        (re) => F.toBlob(re, "image/png")
      );
      if (!de) return null;
      const te = `meld_mask_${Date.now()}.png`, b = new File([de], te, { type: "image/png" }), Z = new FormData();
      Z.append("image", b), Z.append("type", "temp"), Z.append("overwrite", "true");
      const X = await ne.fetchApi("/upload/image", {
        method: "POST",
        body: Z
      });
      return X.ok ? (await X.json()).name : null;
    } catch (P) {
      return console.error("[Meld] Error uploading mask:", P), null;
    } finally {
      N(!1);
    }
  }, A = async () => {
    if (!a) return;
    const P = await I();
    P && i(a, P) && n();
  }, ee = async () => {
    if (!a) return;
    const P = await I();
    P && l({
      type: "OPEN_MODAL",
      payload: {
        type: "workflow_selection",
        images: [a],
        maskFilename: P
      }
    });
  }, V = m.useMemo(
    () => K && !Ch(K),
    [K]
  );
  return a ? /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onMouseDown: R,
      onMouseUp: Q,
      role: "presentation",
      children: /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: "meld-modal-content meld-mask-editor-modal",
          onClick: (P) => P.stopPropagation(),
          children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
              /* @__PURE__ */ s.jsx("h3", { children: "Select Mask Area" }),
              /* @__PURE__ */ s.jsx("button", { className: "meld-modal-close", onClick: n, type: "button", children: /* @__PURE__ */ s.jsx(ke, { size: 20 }) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-mask-editor-tool-selector", children: [
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${w === "rect" ? "active" : ""}`,
                    onClick: () => g("rect"),
                    type: "button",
                    title: "Rectangle Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(gd, { size: 18 }),
                      /* @__PURE__ */ s.jsx("span", { children: "Rect" })
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${w === "ellipse" ? "active" : ""}`,
                    onClick: () => g("ellipse"),
                    type: "button",
                    title: "Ellipse Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(bm, { size: 18 }),
                      /* @__PURE__ */ s.jsx("span", { children: "Ellipse" })
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${w === "lasso" ? "active" : ""}`,
                    onClick: () => g("lasso"),
                    type: "button",
                    title: "Lasso Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(Rm, { size: 18 }),
                      /* @__PURE__ */ s.jsx("span", { children: "Lasso" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs(
                "div",
                {
                  ref: u,
                  className: "meld-mask-editor-canvas-container",
                  onMouseDown: T,
                  role: "presentation",
                  children: [
                    /* @__PURE__ */ s.jsx(
                      "img",
                      {
                        ref: c,
                        src: Ge(a),
                        alt: "To be masked",
                        className: "meld-mask-editor-image",
                        onDragStart: (P) => P.preventDefault()
                      }
                    ),
                    /* @__PURE__ */ s.jsx(
                      "canvas",
                      {
                        ref: o,
                        className: "meld-mask-editor-canvas",
                        onDragStart: (P) => P.preventDefault()
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-mask-editor-footer", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-mask-editor-hint", children: "Select a tool and drag on the image to create mask areas (Cmd/Ctrl+Z to undo)" }),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-mask-editor-actions", children: [
                  t === "apply" ? /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--inject",
                      onClick: A,
                      disabled: !V || S,
                      type: "button",
                      children: [
                        S ? /* @__PURE__ */ s.jsx(Qo, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(Mi, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Send" })
                      ]
                    }
                  ) : /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--run",
                      onClick: ee,
                      disabled: !V || S,
                      type: "button",
                      children: [
                        S ? /* @__PURE__ */ s.jsx(Qo, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(Ii, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Queue" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--undo",
                      onClick: L,
                      disabled: O.length <= 1 || S,
                      type: "button",
                      title: "Undo last area",
                      children: [
                        /* @__PURE__ */ s.jsx(Qm, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Undo" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--cancel",
                      onClick: W,
                      disabled: !V || S,
                      type: "button",
                      title: "Clear all areas",
                      children: [
                        /* @__PURE__ */ s.jsx(ke, { size: 16 }),
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
}, Nh = () => {
  const { state: e, dispatch: t, updateSetting: n } = Ce(), [r, l] = m.useState("Gallery"), [a, i] = m.useState({
    ...e.settings
  }), [o, u] = m.useState(
    {}
  ), [c, h] = m.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [x, v] = m.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [w, g] = m.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [_, j] = m.useState(e.settings["viewer.thumbnail_window_size"].toString()), [d, f] = m.useState(e.settings["gallery.trash_retention_days"].toString()), [p, y] = m.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [E, k] = m.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [S, N] = m.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [$, M] = m.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    O,
    q
  ] = m.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    K,
    C
  ] = m.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), [Y, R] = m.useState(
    e.settings["sidebar.thumbnail_size"].toString()
  );
  return {
    activeTab: r,
    setActiveTab: l,
    localSettings: a,
    setLocalSettings: i,
    shortcutErrors: o,
    setShortcutErrors: u,
    handleClose: async () => {
      const V = Object.keys(a).filter(
        (P) => a[P] !== e.settings[P] && !o[P]
      );
      if (V.length > 0)
        for (const P of V)
          await n(P, a[P]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (V, P) => {
      i((z) => ({
        ...z,
        [V]: !P
      }));
    },
    handleNumberChange: (V, P, z, F) => {
      V === "gallery.initial_load_count" ? h(P) : V === "gallery.max_load_count" ? v(P) : V === "gallery.lineage_max_depth" ? g(P) : V === "viewer.thumbnail_window_size" ? j(P) : V === "gallery.trash_retention_days" ? f(P) : V === "gallery.auto_link_phash_threshold" ? y(P) : V === "gallery.suggest_phash_threshold" ? k(P) : V === "viewer.details.max_positive_prompt_lines" ? N(P) : V === "viewer.details.max_negative_prompt_lines" ? M(P) : V === "fullscreen.details.max_positive_prompt_lines" ? q(P) : V === "fullscreen.details.max_negative_prompt_lines" ? C(P) : V === "sidebar.thumbnail_size" && R(P);
      const G = Number.parseInt(P, 10);
      if (!Number.isNaN(G)) {
        let se = G;
        z !== void 0 && se < z && (se = z), F !== void 0 && se > F && (se = F), i((de) => ({
          ...de,
          [V]: se
        }));
      }
    },
    handleNumberBlur: (V) => {
      V.key === "gallery.initial_load_count" ? h(
        a["gallery.initial_load_count"].toString()
      ) : V.key === "gallery.max_load_count" ? v(a["gallery.max_load_count"].toString()) : V.key === "gallery.lineage_max_depth" ? g(
        a["gallery.lineage_max_depth"].toString()
      ) : V.key === "viewer.thumbnail_window_size" ? j(
        a["viewer.thumbnail_window_size"].toString()
      ) : V.key === "gallery.trash_retention_days" ? f(
        a["gallery.trash_retention_days"].toString()
      ) : V.key === "gallery.auto_link_phash_threshold" ? y(
        a["gallery.auto_link_phash_threshold"].toString()
      ) : V.key === "gallery.suggest_phash_threshold" ? k(
        a["gallery.suggest_phash_threshold"].toString()
      ) : V.key === "viewer.details.max_positive_prompt_lines" ? N(
        a["viewer.details.max_positive_prompt_lines"].toString()
      ) : V.key === "viewer.details.max_negative_prompt_lines" ? M(
        a["viewer.details.max_negative_prompt_lines"].toString()
      ) : V.key === "fullscreen.details.max_positive_prompt_lines" ? q(
        a["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : V.key === "fullscreen.details.max_negative_prompt_lines" ? C(
        a["fullscreen.details.max_negative_prompt_lines"].toString()
      ) : V.key === "sidebar.thumbnail_size" && R(a["sidebar.thumbnail_size"].toString());
    },
    handleResetShortcuts: () => {
      i((V) => ({
        ...V,
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
      })), u({});
    },
    handleViewTrash: () => {
      t({ type: "SET_VIEW_SCOPE", payload: "trash" }), t({ type: "CLOSE_MODAL" });
    },
    validateShortcut: (V) => V.trim() ? V.trim().split(/\s+/).every((z) => !!(z === "next" || z === "prev" || z === "delete" || z.startsWith("tag:") && z.length > 4 || z.startsWith("-tag:") && z.length > 5 || z.startsWith("tag-toggle:") && z.length > 11)) : !0,
    // Input states
    initialLoadCountInput: c,
    maxLoadCountInput: x,
    lineageMaxDepthInput: w,
    thumbnailWindowSizeInput: _,
    trashRetentionDaysInput: d,
    autoLinkPhashThresholdInput: p,
    suggestPhashThresholdInput: E,
    maxPositivePromptLinesInput: S,
    maxNegativePromptLinesInput: $,
    fullscreenMaxPositivePromptLinesInput: O,
    fullscreenMaxNegativePromptLinesInput: K,
    thumbnailSizeInput: Y
  };
}, H = ({
  label: e,
  description: t,
  children: n
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", children: e }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: t })
  ] }),
  /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__control", children: n })
] }), Mh = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: l,
  maxPositivePromptLinesInput: a,
  maxNegativePromptLinesInput: i
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Navigation & Display" }),
    /* @__PURE__ */ s.jsx(
      H,
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
      H,
      {
        label: "Delete Mode",
        description: "Choose how images are deleted in fullscreen mode.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.delete_mode"],
            onChange: (o) => t((u) => ({
              ...u,
              "fullscreen.delete_mode": o.target.value
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
      H,
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
      H,
      {
        label: "Small Image Display",
        description: "Choose how to display images smaller than the screen in fullscreen.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.small_image_mode"],
            onChange: (o) => t((u) => ({
              ...u,
              "fullscreen.small_image_mode": o.target.value
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
      H,
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
      H,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.details.show_filename"],
            onChange: (o) => t((u) => ({
              ...u,
              "fullscreen.details.show_filename": o.target.value
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
            onChange: (o) => r(
              "fullscreen.details.max_positive_prompt_lines",
              o.target.value,
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
      H,
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
      H,
      {
        label: "Show User Notes",
        description: "Display user notes in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.details.show_user_notes"],
            onChange: (o) => t((u) => ({
              ...u,
              "fullscreen.details.show_user_notes": o.target.value
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
      H,
      {
        label: "Max Negative Prompt Lines",
        description: "Maximum number of lines to display for the negative prompt in fullscreen.",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: i,
            min: 1,
            max: 100,
            onChange: (o) => r(
              "fullscreen.details.max_negative_prompt_lines",
              o.target.value,
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
      H,
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
function Lt({
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
function jd() {
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
function Ed(e) {
  return /* @__PURE__ */ s.jsxs(Lt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h12" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14 8l4 4-4 4" })
  ] });
}
function Cd(e) {
  return /* @__PURE__ */ s.jsxs(Lt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M4.5 5.5h7l2 2h6v11a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 15h3" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 12l3 0" }),
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 10.5l3 1.5-3 1.5" })
  ] });
}
function Nd(e) {
  return /* @__PURE__ */ s.jsxs(Lt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16 8l4 4-4 4" })
  ] });
}
function Md(e) {
  return /* @__PURE__ */ s.jsxs(Lt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx(jd, {})
  ] });
}
function Id(e) {
  return /* @__PURE__ */ s.jsxs(Lt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 9l3 3-3 3" })
  ] });
}
function bd(e) {
  return /* @__PURE__ */ s.jsxs(Lt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 9l3 3-3 3" }),
    /* @__PURE__ */ s.jsx(jd, {})
  ] });
}
function Td(e) {
  return /* @__PURE__ */ s.jsxs(Lt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "6", width: "12.5", height: "10.5", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M7.5 13l2-2 2 2 2.5-3 2.5 3" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 17.5l5-5" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16.5 19.5l3-3" })
  ] });
}
function Ld(e) {
  return /* @__PURE__ */ s.jsxs(Lt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M20 12l-8 8-9-9v-5a2 2 0 0 1 2-2h5z" }),
    /* @__PURE__ */ s.jsx("circle", { cx: "7.5", cy: "8.5", r: "1" })
  ] });
}
function Pd(e) {
  return /* @__PURE__ */ s.jsxs(Lt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M7 7h10" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 7v-2h6v2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 7l1 12h6l1-12" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 13.5a3.5 3.5 0 1 1-1.2-2.6" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 9.5v3h-3" })
  ] });
}
const Dd = [
  { id: "", label: "None", icon: null },
  {
    id: "add_unified_loader",
    label: "Add Unified Loader",
    icon: Ed
  },
  {
    id: "send_to_workflow",
    label: "Send to Workflow",
    icon: Id
  },
  {
    id: "send_to_workflow_mask",
    label: "Send to Workflow (Mask)",
    icon: bd
  },
  { id: "queue_workflow", label: "Queue Workflow", icon: Nd },
  {
    id: "queue_workflow_mask",
    label: "Queue Workflow (Mask)",
    icon: Md
  },
  {
    id: "restore_full_workflow",
    label: "Restore Full Workflow",
    icon: Cd
  },
  { id: "edit_tags", label: "Edit Tags", icon: Ld },
  {
    id: "edit_source_image",
    label: "Edit Source Image",
    icon: Td
  },
  {
    id: "restore_image",
    label: "Restore Image (Trash)",
    icon: Pd
  },
  { id: "delete_or_trash", label: "Delete / Trash", icon: Jt }
], Ih = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: l,
  thumbnailSizeInput: a,
  initialLoadCountInput: i,
  maxLoadCountInput: o
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Card Appearance" }),
    /* @__PURE__ */ s.jsx(
      H,
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
            onChange: (u) => r(
              "sidebar.thumbnail_size",
              u.target.value,
              50,
              500
            ),
            onBlur: () => l({ key: "sidebar.thumbnail_size" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      H,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path on the card.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["sidebar.show_filename"],
            onChange: (u) => t((c) => ({
              ...c,
              "sidebar.show_filename": u.target.value
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
      H,
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
      H,
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
      H,
      {
        label: "Show Source Images",
        description: "Display images that have been used as a basis for other images (sources).",
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
      {
        label: "Show Notes",
        description: "Display user notes on the card.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["sidebar.show_user_notes"],
            onChange: (u) => t((c) => ({
              ...c,
              "sidebar.show_user_notes": u.target.value
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
    /* @__PURE__ */ s.jsx(H, { label: "Show Tags", description: "Display tags on the card.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
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
      H,
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
      H,
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
      H,
      {
        label: "Initial Load Count",
        description: "Number of images to load and display immediately (10-1000).",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: i,
            min: 10,
            max: 1e3,
            onChange: (u) => r(
              "gallery.initial_load_count",
              u.target.value,
              10,
              1e3
            ),
            onBlur: () => l({ key: "gallery.initial_load_count" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      H,
      {
        label: "Maximum Load Count",
        description: "Maximum number of images to load in the background (10-1000000).",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: o,
            min: 10,
            max: 1e6,
            onChange: (u) => r(
              "gallery.max_load_count",
              u.target.value,
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
    [1, 2, 3].map((u) => /* @__PURE__ */ s.jsx(
      H,
      {
        label: `Quick Shortcut Slot ${u}`,
        description: `Choose an action for shortcut slot ${u}.`,
        children: /* @__PURE__ */ s.jsx(
          "select",
          {
            className: "meld-select",
            value: e[`gallery.quick_shortcut.${u}`],
            onChange: (c) => t((h) => ({
              ...h,
              [`gallery.quick_shortcut.${u}`]: c.target.value
            })),
            children: Dd.map((c) => /* @__PURE__ */ s.jsx("option", { value: c.id, children: c.label }, c.id))
          }
        )
      },
      u
    ))
  ] })
] }), bh = ({
  localSettings: e,
  setLocalSettings: t,
  shortcutErrors: n,
  setShortcutErrors: r,
  validateShortcut: l,
  handleToggle: a,
  handleResetShortcuts: i
}) => {
  const o = [
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
        " (Add tag and move to next)"
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
      o.map((u, c) => /* @__PURE__ */ s.jsx(
        H,
        {
          label: `Shortcut ${c === 9 ? 0 : c + 1} (Key: ${c === 9 ? 0 : c + 1})`,
          description: `Command to execute when pressing '${c === 9 ? 0 : c + 1}' in View/Full Screen mode.`,
          children: /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "text",
              className: `meld-text-input ${n[u] ? "meld-text-input--error" : ""}`,
              value: e[u] || "",
              onChange: (h) => {
                t((x) => ({
                  ...x,
                  [u]: h.target.value
                }));
              },
              onBlur: () => {
                const h = l(
                  e[u] || ""
                );
                r((x) => ({
                  ...x,
                  [u]: !h
                }));
              }
            }
          )
        },
        u
      )),
      /* @__PURE__ */ s.jsx(
        H,
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
      H,
      {
        label: "Reset Shortcuts",
        description: "Restore all shortcuts to their default values.",
        children: /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            className: "meld-button meld-button--secondary",
            onClick: i,
            children: "Reset to Defaults"
          }
        )
      }
    ) })
  ] });
}, Th = ({
  localSettings: e,
  handleNumberChange: t,
  handleNumberBlur: n,
  handleToggle: r,
  setLocalSettings: l,
  handleViewTrash: a,
  lineageMaxDepthInput: i,
  trashRetentionDaysInput: o,
  autoLinkPhashThresholdInput: u,
  suggestPhashThresholdInput: c
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Image Matching" }),
    /* @__PURE__ */ s.jsx(
      H,
      {
        label: "Source Matching Strategy",
        description: "Algorithm used to identify the source image.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["gallery.matching_strategy"],
            onChange: (h) => l((x) => ({
              ...x,
              "gallery.matching_strategy": h.target.value
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
      H,
      {
        label: "Auto Linking Threshold (%)",
        description: "Minimum similarity percentage for automatic parent linking during creation or scan (0-100). Default: 92%. Should be strict to avoid false links.",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: u,
            min: 0,
            max: 100,
            onChange: (h) => t(
              "gallery.auto_link_phash_threshold",
              h.target.value,
              0,
              100
            ),
            onBlur: () => n({ key: "gallery.auto_link_phash_threshold" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      H,
      {
        label: "Source Suggestion Threshold (%)",
        description: "Minimum similarity percentage for showing candidates in manual 'Add Source' dialog (0-100). Default: 82%. Permissive enough to find ancestors.",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: c,
            min: 0,
            max: 100,
            onChange: (h) => t(
              "gallery.suggest_phash_threshold",
              h.target.value,
              0,
              100
            ),
            onBlur: () => n({ key: "gallery.suggest_phash_threshold" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      H,
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
      H,
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
            onChange: (h) => t(
              "gallery.lineage_max_depth",
              h.target.value,
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
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Trash" }),
    /* @__PURE__ */ s.jsx(
      H,
      {
        label: "Trash Retention Period (Days)",
        description: "How many days to keep deleted items in trash (0-365).",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: o,
            min: 0,
            max: 365,
            onChange: (h) => t(
              "gallery.trash_retention_days",
              h.target.value,
              0,
              365
            ),
            onBlur: () => n({ key: "gallery.trash_retention_days" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      H,
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
] }), Lh = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: l,
  thumbnailWindowSizeInput: a,
  maxPositivePromptLinesInput: i,
  maxNegativePromptLinesInput: o
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Navigation & Display" }),
    /* @__PURE__ */ s.jsx(
      H,
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
      H,
      {
        label: "Small Image Display",
        description: "Choose how to display images smaller than the viewer area.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.small_image_mode"],
            onChange: (u) => t((c) => ({
              ...c,
              "viewer.small_image_mode": u.target.value
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
      H,
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
      H,
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
      H,
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
            onChange: (u) => r(
              "viewer.thumbnail_window_size",
              u.target.value,
              1,
              1e4
            ),
            onBlur: () => l({ key: "viewer.thumbnail_window_size" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      H,
      {
        label: "Delete Mode",
        description: "Choose how images are deleted in view mode.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.delete_mode"],
            onChange: (u) => t((c) => ({
              ...c,
              "viewer.delete_mode": u.target.value
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
      H,
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
      H,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path in the details.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.details.show_filename"],
            onChange: (u) => t((c) => ({
              ...c,
              "viewer.details.show_filename": u.target.value
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
      {
        label: "Max Positive Prompt Lines",
        description: "Maximum number of lines to display for the positive prompt.",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: i,
            min: 1,
            max: 100,
            onChange: (u) => r(
              "viewer.details.max_positive_prompt_lines",
              u.target.value,
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
      H,
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
      H,
      {
        label: "Show User Notes",
        description: "Display user notes in the details panel.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.details.show_user_notes"],
            onChange: (u) => t((c) => ({
              ...c,
              "viewer.details.show_user_notes": u.target.value
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
      H,
      {
        label: "Max Negative Prompt Lines",
        description: "Maximum number of lines to display for the negative prompt.",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: o,
            min: 1,
            max: 100,
            onChange: (u) => r(
              "viewer.details.max_negative_prompt_lines",
              u.target.value,
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
      H,
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
] }), Rd = () => {
  const {
    activeTab: e,
    setActiveTab: t,
    localSettings: n,
    setLocalSettings: r,
    shortcutErrors: l,
    setShortcutErrors: a,
    handleClose: i,
    handleToggle: o,
    handleNumberChange: u,
    handleNumberBlur: c,
    handleResetShortcuts: h,
    handleViewTrash: x,
    validateShortcut: v,
    // Input states
    initialLoadCountInput: w,
    maxLoadCountInput: g,
    lineageMaxDepthInput: _,
    thumbnailWindowSizeInput: j,
    trashRetentionDaysInput: d,
    autoLinkPhashThresholdInput: f,
    suggestPhashThresholdInput: p,
    maxPositivePromptLinesInput: y,
    maxNegativePromptLinesInput: E,
    fullscreenMaxPositivePromptLinesInput: k,
    fullscreenMaxNegativePromptLinesInput: S,
    thumbnailSizeInput: N
  } = Nh();
  Tt({ onEscape: i });
  const $ = m.useRef(!1), M = (C) => {
    C.target === C.currentTarget && ($.current = !0);
  }, O = (C) => {
    C.target === C.currentTarget && $.current && i(), $.current = !1;
  }, q = [
    { id: "Gallery", label: "Gallery" },
    { id: "View", label: "View" },
    { id: "Full Screen", label: "Full Screen" },
    { id: "Shortcuts", label: "Shortcuts" },
    { id: "System", label: "System" }
  ], K = () => {
    switch (e) {
      case "System":
        return /* @__PURE__ */ s.jsx(
          Th,
          {
            localSettings: n,
            handleNumberChange: u,
            handleNumberBlur: c,
            handleToggle: o,
            setLocalSettings: r,
            handleViewTrash: x,
            lineageMaxDepthInput: _,
            trashRetentionDaysInput: d,
            autoLinkPhashThresholdInput: f,
            suggestPhashThresholdInput: p
          }
        );
      case "Gallery":
        return /* @__PURE__ */ s.jsx(
          Ih,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            thumbnailSizeInput: N,
            initialLoadCountInput: w,
            maxLoadCountInput: g
          }
        );
      case "View":
        return /* @__PURE__ */ s.jsx(
          Lh,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            thumbnailWindowSizeInput: j,
            maxPositivePromptLinesInput: y,
            maxNegativePromptLinesInput: E
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ s.jsx(
          Mh,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            maxPositivePromptLinesInput: k,
            maxNegativePromptLinesInput: S
          }
        );
      case "Shortcuts":
        return /* @__PURE__ */ s.jsx(
          bh,
          {
            localSettings: n,
            setLocalSettings: r,
            shortcutErrors: l,
            setShortcutErrors: a,
            validateShortcut: v,
            handleToggle: o,
            handleResetShortcuts: h
          }
        );
      default:
        return null;
    }
  };
  return be.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: M,
        onMouseUp: O,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-settings-modal",
            onClick: (C) => C.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsx("h2", { children: "Settings" }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: i,
                    children: /* @__PURE__ */ s.jsx(ke, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-layout", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ s.jsx("div", { className: "meld-tabs", children: q.map((C) => /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: `meld-tab ${e === C.id ? "active" : ""}`,
                    onClick: () => t(C.id),
                    children: C.label
                  },
                  C.id
                )) }) }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: K() })
              ] })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, ft = "none", zd = ({
  imageIds: e,
  initialTags: t,
  onClose: n
}) => {
  const { dispatch: r, refreshImages: l } = Ce(), [a, i] = m.useState([]), [o, u] = m.useState(t), [c, h] = m.useState(""), [x, v] = m.useState(!0), [w, g] = m.useState(!1), _ = m.useRef(null), j = e.length > 1, d = m.useRef(!1), f = (M) => {
    M.target === M.currentTarget && (d.current = !0);
  }, p = (M) => {
    M.target === M.currentTarget && d.current && n(), d.current = !1;
  }, y = m.useCallback(async () => {
    v(!0);
    try {
      const M = await Li();
      i(M);
    } catch (M) {
      console.error("Failed to fetch tags:", M);
    } finally {
      v(!1);
    }
  }, []);
  m.useEffect(() => {
    y();
  }, [y]), m.useEffect(() => {
    _.current && _.current.focus();
  }, []), Tt({ onEscape: n });
  const E = m.useMemo(() => a.filter(
    (M) => M.name.toLowerCase().includes(c.toLowerCase()) && !o.includes(M.name)
  ), [a, c, o]), k = (M) => {
    const O = M.trim();
    if (O.toLowerCase() === ft) {
      alert(
        `Tag name '${ft}' is reserved for search and cannot be used.`
      );
      return;
    }
    O && !o.includes(O) && (u([...o, O]), h(""));
  }, S = (M) => {
    u(o.filter((O) => O !== M));
  }, N = async () => {
    g(!0);
    try {
      if (j) {
        const M = o.filter((q) => !t.includes(q)), O = t.filter(
          (q) => !o.includes(q)
        );
        await La(e, M, O);
      } else
        await Jm(e[0], o);
      await l(), r({ type: "CLEAR_SELECTION" }), n();
    } catch (M) {
      console.error("Failed to update tags:", M), alert("Failed to update tags.");
    } finally {
      g(!1);
    }
  }, $ = (M) => {
    M.key === "Enter" && c.trim() && (M.preventDefault(), M.stopPropagation(), k(c.trim()));
  };
  return be.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: f,
        onMouseUp: p,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (M) => M.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(Yn, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: j ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(ke, { size: 20 }) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
            j && /* @__PURE__ */ s.jsx(
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
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: j ? "Collective Tags" : "Selected Tags" }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: o.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : o.map((M) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                M,
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => S(M),
                    children: /* @__PURE__ */ s.jsx(ke, { size: 12 })
                  }
                )
              ] }, M)) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ s.jsx(Bn, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    ref: _,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: c,
                    onChange: (M) => h(M.target.value),
                    onKeyDown: $
                  }
                ),
                c.trim() && !o.includes(c.trim()) && /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => k(c),
                    children: [
                      /* @__PURE__ */ s.jsx(bi, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: x ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : E.length === 0 ? c ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : E.map((M) => /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => k(M.name),
                  children: M.name
                },
                M.id
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
                onClick: N,
                disabled: w,
                children: w ? "Saving..." : "Save Changes"
              }
            )
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, Ad = async () => {
  const e = await ne.fetchApi("/meld/workflows");
  return ie(e);
}, Ph = async (e) => {
  const t = await ne.fetchApi(
    `/meld/workflow/raw?name=${encodeURIComponent(e)}`
  );
  return ie(t);
}, Od = ({
  images: e,
  onExecute: t,
  isMaskMode: n
}) => {
  var p;
  const { dispatch: r } = Ce(), [l, a] = m.useState([]), [i, o] = m.useState(!0), [u, c] = m.useState(null), [h, x] = m.useState(!1), v = m.useMemo(() => l.map((y) => {
    let E = y.valid, k = y.reason;
    return n && (y.mask_count === 0 ? (E = !1, k = "No 'Load Image (as Mask)' node found.") : y.mask_count > 1 && (E = !1, k = `Multiple 'Load Image (as Mask)' nodes found (${y.mask_count}).`)), { ...y, valid: E, reason: k };
  }).sort((y, E) => y.valid !== E.valid ? y.valid ? -1 : 1 : y.name.localeCompare(E.name)), [l, n]), w = m.useCallback(async () => {
    try {
      o(!0);
      const y = await Ad();
      a(y), c(null);
    } catch (y) {
      c(y instanceof Error ? y.message : String(y));
    } finally {
      o(!1);
    }
  }, []);
  m.useEffect(() => {
    w();
  }, [w]);
  const g = m.useCallback(() => {
    r({ type: "CLOSE_MODAL" });
  }, [r]);
  Tt({ onEscape: g });
  const _ = m.useRef(!1), j = m.useCallback((y) => {
    y.target === y.currentTarget && (_.current = !0);
  }, []), d = m.useCallback(
    (y) => {
      y.target === y.currentTarget && _.current && g(), _.current = !1;
    },
    [g]
  ), f = async (y) => {
    if (!h)
      try {
        x(!0), await t(y), g();
      } catch (E) {
        c(E instanceof Error ? E.message : String(E)), x(!1);
      }
  };
  return be.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: j,
        onMouseUp: d,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--medium",
            onClick: (y) => y.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(pd, { size: 20, color: "var(--meld-accent-color)" }),
                  "Queue via Workflow"
                ] }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: g,
                    children: /* @__PURE__ */ s.jsx(ke, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", style: { minHeight: "300px" }, children: i ? /* @__PURE__ */ s.jsxs("div", { className: "meld-loading-container", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-loading-spinner" }),
                /* @__PURE__ */ s.jsx("span", { children: "Loading workflows..." })
              ] }) : u ? /* @__PURE__ */ s.jsxs("div", { className: "meld-error-container", children: [
                /* @__PURE__ */ s.jsx(od, { size: 20 }),
                /* @__PURE__ */ s.jsx("span", { children: u })
              ] }) : l.length === 0 ? /* @__PURE__ */ s.jsx(
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
                      /* @__PURE__ */ s.jsx("strong", { children: e.length > 1 ? `${e.length} images` : (p = e[0]) == null ? void 0 : p.filename }),
                      ". Workflows must have exactly one",
                      " ",
                      /* @__PURE__ */ s.jsx("strong", { children: "Meld Image Loader" }),
                      " or",
                      " ",
                      /* @__PURE__ */ s.jsx("strong", { children: "Load Image" }),
                      " node",
                      n && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                        " ",
                        "and one ",
                        /* @__PURE__ */ s.jsx("strong", { children: "Load Image (as Mask)" }),
                        " node"
                      ] }),
                      "."
                    ]
                  }
                ),
                v.map((y) => /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    className: `meld-workflow-item ${y.valid ? "" : "meld-workflow-item--invalid"}`,
                    onClick: () => y.valid && !h && f(y.name),
                    title: y.reason || "Click to run",
                    children: [
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item__info", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__name", children: y.name }),
                        !y.valid && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__reason", children: y.reason }),
                        y.valid && /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item__supports", children: [
                          "Supports:",
                          " ",
                          y.loader_count > 0 ? "Meld Loader" : "Load Image"
                        ] })
                      ] }),
                      y.valid && /* @__PURE__ */ s.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-primary meld-btn-small",
                          disabled: h,
                          onClick: (E) => {
                            E.stopPropagation(), f(y.name);
                          },
                          children: [
                            /* @__PURE__ */ s.jsx(Ii, { size: 14 }),
                            h ? "Queuing..." : "Queue"
                          ]
                        }
                      )
                    ]
                  },
                  y.name
                ))
              ] }) }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-secondary",
                  onClick: g,
                  disabled: h,
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
}, Fd = () => ({ executeWorkflow: m.useCallback(
  async (t, n, r) => {
    var x, v, w, g, _, j;
    console.log("[Meld] executeWorkflow called:", {
      workflowName: t,
      imageId: n.id,
      maskFilename: r
    });
    const l = await Ph(t);
    console.log("[Meld] Workflow fetched:", t);
    let a = null, i = null, o = !1;
    if (l.nodes && Array.isArray(l.nodes)) {
      o = !0;
      const d = l.nodes.find(
        (p) => p.type === "MeldImageLoader" || p.type === "LoadImage" || p.type === "Load Image"
      );
      d && (a = String(d.id));
      const f = l.nodes.find(
        (p) => p.type === "LoadImageMask"
      );
      f && (i = String(f.id));
    } else
      for (const d in l) {
        const f = l[d];
        f.class_type === "MeldImageLoader" || f.class_type === "LoadImage" || f.class_type === "Load Image" ? a = d : f.class_type === "LoadImageMask" && (i = d);
      }
    if (console.log("[Meld] Node IDs found:", {
      loaderNodeId: a,
      maskNodeId: i,
      isUIFormat: o
    }), !a)
      throw new Error(
        "Meld Image Loader or Load Image node not found in the selected workflow."
      );
    if (r && !i)
      throw console.warn(
        "[Meld] Mask filename provided but no mask node found in workflow JSON"
      ), new Error(
        "Load Image (as Mask) node not found in the selected workflow, but a mask was provided."
      );
    let u = n.filename;
    if (n.subfolder && (u = `${n.subfolder}/${n.filename}`), n.type && n.type !== "input" && (u = `${u} [${n.type}]`), o) {
      const d = window.app, f = t.replace(/\.json$/i, "");
      let p = !1;
      const y = document.querySelectorAll(".workflow-tab");
      for (const S of Array.from(y)) {
        const N = S.querySelector(".workflow-label"), $ = ((x = N == null ? void 0 : N.textContent) == null ? void 0 : x.trim()) || ((v = S.textContent) == null ? void 0 : v.trim()) || "";
        if ($ === f || $ === t || $.startsWith(`${f} `) || $.startsWith(`${f}•`)) {
          S.click(), p = !0;
          break;
        }
      }
      p || await d.loadGraphData(l, !0, !0, t), await new Promise((S) => setTimeout(S, 200));
      const E = d.graph._nodes;
      console.log("[Meld] Active graph nodes count:", E.length);
      const k = E.find(
        (S) => String(S.id) === a || S.type === "MeldImageLoader" || S.type === "LoadImage" || S.type === "Load Image"
      );
      if (k) {
        const S = (w = k.widgets) == null ? void 0 : w.find((N) => N.name === "image");
        console.log("[Meld] Updating loader node widget:", {
          nodeId: k.id,
          type: k.type,
          imagePath: u
        }), S && (S.value = u, typeof S.callback == "function" && S.callback(u));
      } else
        console.warn(
          "[Meld] Loader node (MeldImageLoader/LoadImage) not found in active graph after loading"
        );
      if (r) {
        const S = E.find(
          (N) => String(N.id) === i || N.type === "LoadImageMask"
        );
        if (console.log("[Meld] Updating mask node widget:", {
          nodeId: S == null ? void 0 : S.id,
          maskFilename: r
        }), S) {
          const N = (g = S.widgets) == null ? void 0 : g.find(
            (M) => M.name === "image"
          );
          N && (N.value = `${r} [temp]`);
          const $ = (_ = S.widgets) == null ? void 0 : _.find(
            (M) => M.name === "channel"
          );
          $ && ($.value = "red");
        } else
          console.warn(
            "[Meld] LoadImageMask not found in active graph after loading"
          );
      }
      d.graph.setDirtyCanvas(!0, !0);
      try {
        await d.queuePrompt(0);
        return;
      } catch (S) {
        throw console.error("Failed to queue workflow:", S), new Error(
          "Failed to queue workflow. Check the console for details."
        );
      }
    }
    const c = JSON.parse(JSON.stringify(l));
    c[a].inputs.image = u, r && i && (c[i].inputs.image = `${r} [temp]`, c[i].inputs.channel = "red");
    const h = await ne.fetchApi("/prompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: c,
        client_id: ne.clientId
      })
    });
    if (!h.ok) {
      const d = await h.json();
      throw new Error(((j = d.error) == null ? void 0 : j.message) || "Failed to queue workflow");
    }
    return await h.json();
  },
  []
) }), $d = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: l, dispatch: a } = Ce(), i = m.useRef(!0);
  m.useEffect(() => () => {
    i.current = !1;
  }, []);
  const o = m.useMemo(
    () => l.searchQuery.toLowerCase().includes("has_derivatives:yes") || l.searchQuery.toLowerCase().includes("has_derivatives:true") || l.searchQuery.toLowerCase().includes("has_derivatives:1"),
    [l.searchQuery]
  ), u = m.useMemo(
    () => l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
      (d) => d.exists !== !1 && (l.settings["gallery.show_parent_images"] || !d.has_children || o)
    ),
    [
      l.viewerMode,
      l.lineageImages,
      l.images,
      l.settings,
      o
    ]
  ), c = m.useRef(l.viewerImageId);
  m.useEffect(() => {
    c.current = l.viewerImageId;
  }, [l.viewerImageId]);
  const h = m.useCallback(() => {
    a({ type: "CLOSE_MODAL" });
  }, [a]);
  Tt({ onEscape: h });
  const x = m.useRef(!1), v = m.useCallback((d) => {
    d.target === d.currentTarget && (x.current = !0);
  }, []), w = m.useCallback(
    (d) => {
      d.target === d.currentTarget && x.current && h(), x.current = !1;
    },
    [h]
  ), g = m.useCallback(
    (d) => {
      if (!i.current) return;
      const f = c.current;
      if (f === null || !d.has(f))
        return;
      const p = u.findIndex(
        (E) => E.id === f
      );
      if (p === -1) return;
      let y = !1;
      for (let E = p + 1; E < u.length; E++)
        if (!d.has(u[E].id)) {
          a({
            type: "OPEN_VIEWER",
            payload: { id: u[E].id, mode: l.viewerMode }
          }), y = !0;
          break;
        }
      if (!y) {
        for (let E = p - 1; E >= 0; E--)
          if (!d.has(u[E].id)) {
            a({
              type: "OPEN_VIEWER",
              payload: { id: u[E].id, mode: l.viewerMode }
            }), y = !0;
            break;
          }
      }
      y || a({ type: "CLOSE_VIEWER" });
    },
    [l.viewerMode, u, a]
  ), _ = async () => {
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const d = new Set(e), f = u.filter(
        (p) => d.has(p.id)
      );
      if (g(d), await ba(e, n), !i.current) return;
      !n && r && r(f), a({ type: "REMOVE_IMAGES", payload: e }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (d) {
      a({
        type: "SET_ERROR",
        payload: d instanceof Error ? d.message : String(d)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  }, j = async () => {
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const d = new Set(e);
      for (const p of e) {
        const y = await Ta(p);
        if (!i.current) return;
        for (const E of y)
          d.add(E.id);
      }
      const f = u.filter(
        (p) => d.has(p.id)
      );
      if (g(d), await ba(Array.from(d), n), !i.current) return;
      !n && r && r(f), a({
        type: "REMOVE_IMAGES",
        payload: Array.from(d)
      }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (d) {
      a({
        type: "SET_ERROR",
        payload: d instanceof Error ? d.message : String(d)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  };
  return be.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: v,
        onMouseUp: w,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--small",
            onClick: (d) => d.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(Jt, { size: 20, color: "var(--meld-danger-color)" }),
                  n ? "Permanent Deletion" : "Move to Trash"
                ] }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: h,
                    children: /* @__PURE__ */ s.jsx(ke, { size: 20 })
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
                            Em,
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
                    onClick: h,
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-danger",
                      onClick: _,
                      children: n ? "Delete Permanently" : "Move to Trash"
                    }
                  ),
                  t && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-danger",
                      title: n ? "Permanently delete all images in the lineage" : "Move all images in the lineage to trash",
                      onClick: j,
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
}, Wd = ({ message: e }) => {
  const { dispatch: t } = Ce(), n = m.useCallback(() => {
    t({ type: "CLOSE_MODAL" });
  }, [t]);
  return Tt({ onEscape: n }), /* @__PURE__ */ s.jsx("div", { className: "meld-modal-overlay", onClick: n, children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (r) => r.stopPropagation(), children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(od, { size: 20, color: "var(--meld-danger-color)" }),
        /* @__PURE__ */ s.jsx("h2", { children: "Error" })
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          className: "meld-modal-close",
          onClick: n,
          type: "button",
          children: /* @__PURE__ */ s.jsx(ke, { size: 20 })
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
}, Ud = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = Ce(), [l, a] = m.useState([]), [i, o] = m.useState(!0), [u, c] = m.useState(!1), h = m.useCallback(() => {
    n({ type: "CLOSE_MODAL" });
  }, [n]);
  Tt({ onEscape: h });
  const x = m.useRef(!1), v = (k) => {
    k.target === k.currentTarget && (x.current = !0);
  }, w = (k) => {
    k.target === k.currentTarget && x.current && h(), x.current = !1;
  }, g = t.images.find((k) => k.id === e), _ = m.useCallback(async () => {
    o(!0);
    try {
      const k = t.settings["gallery.suggest_phash_threshold"], S = await Xm(e, k);
      a(S);
    } catch (k) {
      console.error("Failed to load suggestions:", k);
    } finally {
      o(!1);
    }
  }, [e, t.settings]);
  m.useEffect(() => {
    _();
  }, [_]);
  const j = async (k) => {
    if (k == null) {
      console.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!g || k === g.parent_id) && !(g.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await Bo(e, k), await yd(e), await r(), h();
      } catch (S) {
        console.error("Failed to link parent:", S);
      }
  }, d = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await Bo(e, null), await r(), h();
      } catch (k) {
        console.error("Failed to remove source:", k), alert("Failed to remove source image.");
      }
  }, f = async (k) => {
    o(!0);
    try {
      const S = await yh(k), { id: N } = await vd({
        filename: S.name,
        subfolder: S.subfolder || "",
        type: S.type || "input"
      });
      if (N === e) {
        alert(
          "Uploaded image is identical to the current image. Cannot set as source."
        );
        return;
      }
      await j(N);
    } catch (S) {
      console.error("Failed to upload/register image:", S);
    } finally {
      o(!1);
    }
  }, p = (k) => {
    k.preventDefault(), k.stopPropagation(), c(!1);
    const S = k.dataTransfer.files[0];
    S != null && S.type.startsWith("image/") && f(S);
  };
  if (!g) return null;
  const y = l.filter((k) => k.is_source_match), E = l.filter((k) => !k.is_source_match);
  return be.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: v,
        onMouseUp: w,
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
                onClick: h,
                children: /* @__PURE__ */ s.jsx(ke, { size: 20 })
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
                        /* @__PURE__ */ s.jsx(Om, { size: 16, color: "var(--meld-accent-color)" }),
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
                                        src: Ge({
                                          filename: g.parent_filename,
                                          subfolder: g.parent_subfolder || "",
                                          type: g.parent_type || "output"
                                        }),
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
                      onClick: d,
                      title: "Remove Source",
                      children: /* @__PURE__ */ s.jsx(Am, { size: 16 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: `meld-drop-zone ${u ? "meld-drop-zone--active" : ""}`,
                onDragEnter: (k) => {
                  k.preventDefault(), k.stopPropagation(), c(!0);
                },
                onDragOver: (k) => {
                  k.preventDefault(), k.stopPropagation(), k.dataTransfer.dropEffect = "copy", c(!0);
                },
                onDragLeave: (k) => {
                  k.preventDefault(), k.stopPropagation(), c(!1);
                },
                onDrop: p,
                children: [
                  /* @__PURE__ */ s.jsx(Bm, { size: 32 }),
                  /* @__PURE__ */ s.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            i ? /* @__PURE__ */ s.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestions-container", children: [
              y.length > 0 && /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: y.map((k) => {
                  const S = k.id === g.parent_id;
                  return /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${S ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !S && j(k.id),
                      style: {
                        cursor: S ? "default" : "pointer",
                        ...S ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ s.jsx("img", { src: Ge(k), alt: k.filename }),
                        /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: k.filename }),
                          S && /* @__PURE__ */ s.jsx(
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
                E.length > 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: E.map((k) => {
                  const S = k.id === g.parent_id;
                  return /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${S ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !S && j(k.id),
                      style: {
                        cursor: S ? "default" : "pointer",
                        ...S ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ s.jsx("img", { src: Ge(k), alt: k.filename }),
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
                                S && /* @__PURE__ */ s.jsx(
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
}, Dh = () => {
  const { state: e, dispatch: t } = Ce(), { executeWorkflow: n } = Fd();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
      Od,
      {
        images: e.activeModal.images,
        isMaskMode: !!e.activeModal.maskFilename,
        onExecute: async (r) => {
          if (e.activeModal.type === "workflow_selection") {
            const l = e.activeModal.maskFilename;
            for (const a of e.activeModal.images)
              await n(r, a, l);
          }
        }
      }
    ),
    e.activeModal.type === "parent_selection" && be.createPortal(
      /* @__PURE__ */ s.jsx(Ud, { imageId: e.activeModal.imageId }),
      document.body
    ),
    e.activeModal.type === "import" && be.createPortal(/* @__PURE__ */ s.jsx(_d, {}), document.body),
    e.activeModal.type === "settings" && be.createPortal(/* @__PURE__ */ s.jsx(Rd, {}), document.body),
    e.activeModal.type === "tag_edit" && be.createPortal(
      /* @__PURE__ */ s.jsx(
        zd,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "error" && be.createPortal(
      /* @__PURE__ */ s.jsx(Wd, { message: e.activeModal.message }),
      document.body
    ),
    e.activeModal.type === "delete_confirm" && be.createPortal(
      /* @__PURE__ */ s.jsx(
        $d,
        {
          imageIds: e.activeModal.imageIds,
          hasLineage: e.activeModal.hasLineage,
          isPermanent: e.activeModal.isPermanent
        }
      ),
      document.body
    ),
    e.activeModal.type === "mask_editor" && be.createPortal(
      /* @__PURE__ */ s.jsx(
        Sd,
        {
          imageId: e.activeModal.imageId,
          mode: e.activeModal.mode,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    )
  ] });
}, Pi = (e, t) => {
  const n = m.useCallback(async (v) => {
    try {
      const w = await eh(v.id);
      if (!w.workflow) {
        alert("No workflow information is saved for this image.");
        return;
      }
      await window.app.loadGraphData(
        w.workflow
      ), J.log("Workflow restored successfully from Meld");
    } catch (w) {
      J.error("Error restoring workflow:", w), alert("Failed to restore workflow.");
    }
  }, []), r = m.useCallback(async (v) => {
    try {
      const w = await th(v.id), g = "MeldUnifiedLoader", _ = window.app, d = window.LiteGraph.createNode(g);
      if (!d) {
        console.error(`Node type ${g} not found.`), alert(
          `Node type ${g} not found. Please make sure the Meld Unified Loader node is installed.`
        );
        return;
      }
      const f = {
        model_name: "model_name",
        positive: "positive",
        negative: "negative",
        seed: "seed",
        steps: "steps",
        cfg: "cfg",
        sampler_name: "sampler_name",
        scheduler: "scheduler",
        control_after_generate: "control_after_generate",
        width: "width",
        height: "height"
      };
      if (d.widgets) {
        for (const [k, S] of Object.entries(f)) {
          const N = w[k];
          if (N != null) {
            const $ = d.widgets.find(
              (M) => M.name === S
            );
            $ && ($.value = N);
          }
        }
        const E = d.widgets.find(
          (k) => k.name === "control_after_generate"
        );
        E && (E.value = "fixed");
      }
      const p = _.canvas.ds.offset, y = _.canvas.ds.scale;
      d.pos = [(-p[0] + 400) / y, (-p[1] + 300) / y], _.graph.add(d), _.canvas.selectNode(d), _.canvas.centerOnNode(d);
    } catch (w) {
      console.error("Error adding Unified Loader:", w), alert("Failed to load settings.");
    }
  }, []), l = m.useCallback(
    (v) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "tag_edit",
          imageIds: [v.id],
          tags: v.tags || []
        }
      });
    },
    [t]
  ), a = m.useCallback(
    (v) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: v.id }
      });
    },
    [t]
  ), i = m.useCallback(
    (v) => {
      const w = kd(v);
      w.ok || t({
        type: "OPEN_MODAL",
        payload: {
          type: "error",
          message: w.reason === "no_app_graph" ? "No active workflow graph found. Please open a workflow first." : "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
        }
      });
    },
    [t]
  ), o = m.useCallback(
    (v) => {
      const w = Array.isArray(v) ? v : [v];
      t({
        type: "OPEN_MODAL",
        payload: { type: "workflow_selection", images: w }
      });
    },
    [t]
  ), u = m.useCallback(
    async (v, w = "run") => {
      var g;
      if (console.log("[Meld] handleRunWithMask called", v, w), w === "apply") {
        const _ = window.app, j = ((g = _ == null ? void 0 : _.graph) == null ? void 0 : g._nodes) || [];
        console.log(
          "[Meld] Current graph nodes:",
          j.map((p) => ({
            id: p.id,
            type: p.type
          }))
        );
        const d = j.some(
          (p) => p.type === "LoadImageMask"
        ), f = j.some(
          (p) => p.type === "MeldImageLoader" || p.type === "LoadImage" || p.type === "Load Image"
        );
        if (console.log("[Meld] Nodes found:", { hasMaskNode: d, hasLoaderNode: f }), !d || !f) {
          const p = [];
          f || p.push("'Meld Image Loader'"), d || p.push("'Load Image (as Mask)'"), t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: `Required nodes missing in current workflow: ${p.join(" and ")}. Please add them to use the Mask Tool.`
            }
          });
          return;
        }
      } else
        try {
          if (!(await Ad()).some(
            (d) => d.valid && d.mask_count === 1
          )) {
            t({
              type: "OPEN_MODAL",
              payload: {
                type: "error",
                message: "No workflows found with exactly one 'Load Image (as Mask)' node. Please save a compatible workflow first."
              }
            });
            return;
          }
        } catch (_) {
          console.error("[Meld] Error checking workflows:", _);
        }
      t({
        type: "OPEN_MODAL",
        payload: { type: "mask_editor", imageId: v.id, mode: w }
      });
    },
    [t]
  ), c = m.useCallback(
    async (v, w) => {
      try {
        const g = v.id, j = (await Ti([g])).restored_ids || [g];
        t({ type: "REMOVE_IMAGES", payload: j }), w == null || w();
      } catch (g) {
        t({
          type: "SET_ERROR",
          payload: g instanceof Error ? g.message : String(g)
        });
      }
    },
    [t]
  ), h = m.useCallback(
    (v) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "delete_confirm",
          imageIds: [v.id],
          hasLineage: !!(v.parent_id || v.has_children),
          isPermanent: e.viewScope === "trash"
        }
      });
    },
    [e.viewScope, t]
  ), x = m.useCallback(
    async (v, w) => {
      try {
        const g = await Zm(
          v,
          w
        );
        t({ type: "UPDATE_IMAGE", payload: g });
      } catch (g) {
        t({
          type: "SET_ERROR",
          payload: g instanceof Error ? g.message : String(g)
        });
      }
    },
    [t]
  );
  return {
    handleRestoreWorkflow: n,
    handleAddUnifiedLoader: r,
    handleEditTags: l,
    handleEditSource: a,
    handleSendToWorkflow: i,
    handleRunWithWorkflow: o,
    handleRunWithMask: u,
    handleRestore: c,
    handleDelete: h,
    handleUpdateUserNotes: x
  };
}, Vd = (e, t) => {
  const n = m.useCallback(
    (r) => {
      const l = t["gallery.lineage_max_depth"];
      if (l === 0) return [];
      if (r.ancestors && r.ancestors.length > 0)
        return r.ancestors.slice(0, l).map((c) => ({
          id: c.id,
          imgSrc: Ge(c)
        }));
      const a = r.parent_id;
      if (!a || !r.parent_filename) return [];
      const i = e.find((c) => c.id === a);
      let o = null;
      if (i ? o = Ge(i) : o = Ge({
        filename: r.parent_filename,
        subfolder: r.parent_subfolder || "",
        type: r.parent_type
      }), !o) return [];
      const u = {
        id: a || null,
        imgSrc: o
      };
      if (i && l > 1) {
        const c = n(i);
        return [u, ...c].slice(0, l);
      }
      return [u];
    },
    [t, e]
  );
  return { getParentChain: n };
}, Qd = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = Ce(), l = t.selectedIds.has(e.id), a = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: i,
    handleAddUnifiedLoader: o,
    handleEditSource: u,
    handleEditTags: c,
    handleSendToWorkflow: h,
    handleRunWithWorkflow: x,
    handleRunWithMask: v,
    handleRestore: w,
    handleDelete: g,
    handleUpdateUserNotes: _
  } = Pi(t, n), { getParentChain: j } = Vd(t.images, t.settings), [d, f] = m.useState(null), [p, y] = m.useState(!1), [E, k] = m.useState(null), [S, N] = m.useState(!1), $ = m.useRef(null), M = async (F, G, se = !1) => {
    try {
      await navigator.clipboard.writeText(F), se ? (N(!0), setTimeout(() => N(!1), 2e3)) : (k(G), setTimeout(() => k(null), 2e3));
    } catch (de) {
      console.error("Failed to copy text: ", de);
    }
  };
  m.useEffect(() => {
    const F = (se) => {
      se.key === "Escape" && (d ? f(null) : y(!1));
    }, G = (se) => {
      $.current && !$.current.contains(se.target) && y(!1);
    };
    return window.addEventListener("keydown", F), p && document.addEventListener("mousedown", G), () => {
      window.removeEventListener("keydown", F), document.removeEventListener("mousedown", G);
    };
  }, [p, d]);
  const O = j(e), K = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, C = Ge(e);
  return {
    state: t,
    dispatch: n,
    isSelected: l,
    viewMode: a,
    popupContent: d,
    setPopupContent: f,
    isMenuOpen: p,
    setIsMenuOpen: y,
    copiedLabel: E,
    popupCopied: S,
    menuRef: $,
    parentChain: O,
    displayFilename: K,
    imgSrc: C,
    handleCopy: M,
    handleClick: (F) => {
      F.shiftKey ? (F.preventDefault(), F.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : F.ctrlKey || F.metaKey || t.selectedIds.size > 0 ? (F.preventDefault(), F.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
    },
    handleContainerClick: (F) => {
      F.shiftKey ? (F.preventDefault(), F.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : F.ctrlKey || F.metaKey || t.selectedIds.size > 0 ? (F.preventDefault(), F.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : (F.preventDefault(), F.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleMouseDown: (F) => {
      (F.shiftKey || F.ctrlKey || F.metaKey || t.selectedIds.size > 0 || !F.target.closest(
        "img.meld-image-card__thumbnail, img.meld-lineage-badge__parent-thumb, textarea, input, button"
      )) && (F.target.closest(
        "textarea, input, button, .meld-image-card__meta-content"
      ) || F.preventDefault());
    },
    handleKeyDown: (F) => {
      var se, de, B;
      ((se = document.activeElement) == null ? void 0 : se.tagName) === "INPUT" || ((de = document.activeElement) == null ? void 0 : de.tagName) === "TEXTAREA" || (B = document.activeElement) != null && B.isContentEditable || (F.key === "Enter" || F.key === " ") && (F.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleRestoreWorkflow: async () => {
      await i(e);
    },
    handleAddUnifiedLoader: async () => {
      await o(e);
    },
    handleEditSource: () => {
      u(e);
    },
    handleEditTags: () => {
      c(e);
    },
    handleSendToWorkflow: () => {
      h(e);
    },
    handleRestore: () => {
      w(e);
    },
    handleDelete: () => {
      g(e);
    },
    handleRunWithWorkflow: () => {
      x(e);
    },
    handleRunWithMask: (F = "run") => v(e, F),
    handleUpdateUserNotes: (F) => _(e.id, F),
    fetchFullImageDetails: r
  };
}, Rh = ({
  isMenuOpen: e,
  setIsMenuOpen: t,
  menuRef: n,
  settings: r,
  onAddUnifiedLoader: l,
  onRestoreWorkflow: a,
  onSendToWorkflow: i,
  onRunWithWorkflow: o,
  onRunWithMask: u,
  onEditSource: c,
  onEditTags: h,
  onDelete: x,
  onRestore: v,
  showRestore: w,
  deleteLabel: g
}) => {
  const _ = (d) => {
    switch (d) {
      case "add_unified_loader":
        return l;
      case "restore_full_workflow":
        return a;
      case "send_to_workflow":
        return i;
      case "queue_workflow":
        return o;
      case "send_to_workflow_mask":
        return () => u("apply");
      case "queue_workflow_mask":
        return () => u("run");
      case "edit_source_image":
        return c;
      case "edit_tags":
        return h;
      case "restore_image":
        return v;
      case "delete_or_trash":
        return x;
      default:
        return null;
    }
  }, j = [
    r["gallery.quick_shortcut.1"],
    r["gallery.quick_shortcut.2"],
    r["gallery.quick_shortcut.3"]
  ].filter((d) => d && d !== "");
  return /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__menu-container", ref: n, children: [
    /* @__PURE__ */ s.jsx(
      "button",
      {
        type: "button",
        className: "meld-image-card__menu-btn",
        onClick: (d) => {
          d.stopPropagation(), t(!e);
        },
        title: "Menu",
        children: /* @__PURE__ */ s.jsx(Wm, { size: 16 })
      }
    ),
    j.map((d, f) => {
      const p = Dd.find((k) => k.id === d);
      if (!p || !p.icon) return null;
      const y = p.icon, E = _(d);
      return !E || d === "restore_image" && !w ? null : /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-image-card__menu-btn",
          onClick: (k) => {
            k.stopPropagation(), E();
          },
          title: p.label,
          children: /* @__PURE__ */ s.jsx(y, { size: 16 })
        },
        `${d}-${f}`
      );
    }),
    e && /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__menu", children: [
      {
        id: "add_unified_loader",
        label: "Add Unified Loader",
        icon: Ed,
        handler: l
      },
      {
        id: "send_to_workflow",
        label: "Send to Workflow",
        icon: Id,
        handler: i
      },
      {
        id: "send_to_workflow_mask",
        label: "Send to Workflow (Mask)",
        icon: bd,
        handler: () => u("apply")
      },
      {
        id: "queue_workflow",
        label: "Queue Workflow",
        icon: Nd,
        handler: o
      },
      {
        id: "queue_workflow_mask",
        label: "Queue Workflow (Mask)",
        icon: Md,
        handler: () => u("run")
      },
      {
        id: "restore_full_workflow",
        label: "Restore Full Workflow",
        icon: Cd,
        handler: a
      },
      {
        id: "edit_tags",
        label: "Edit Tags",
        icon: Ld,
        handler: h
      },
      {
        id: "edit_source_image",
        label: "Edit Source Image",
        icon: Td,
        handler: c
      },
      ...w ? [
        {
          id: "restore_image",
          label: "Restore Image",
          icon: Pd,
          handler: v,
          color: "var(--meld-accent-color)"
        }
      ] : [],
      {
        id: "delete_or_trash",
        label: g,
        icon: Jt,
        handler: x,
        className: "meld-image-card__menu-item--danger",
        color: "var(--meld-danger-color)"
      }
    ].map((d) => /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-image-card__menu-item ${d.className || ""}`,
        onMouseDown: (f) => f.stopPropagation(),
        onClick: (f) => {
          f.preventDefault(), f.stopPropagation(), t(!1), setTimeout(() => d.handler(), 0);
        },
        children: [
          /* @__PURE__ */ s.jsx(d.icon, { size: 14, color: d.color }),
          /* @__PURE__ */ s.jsx("span", { children: d.label })
        ]
      },
      d.id
    )) })
  ] });
}, zh = ({
  title: e,
  text: t,
  onClose: n,
  onCopy: r,
  isCopied: l
}) => be.createPortal(
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
                l ? /* @__PURE__ */ s.jsx(Mi, { size: 18, style: { color: "var(--meld-success-color)" } }) : /* @__PURE__ */ s.jsx(
                  Tm,
                  {
                    className: "meld-prompt-popup-copy",
                    size: 18,
                    onClick: () => r(t)
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  ke,
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
), Bd = _l.memo(
  ({ image: e }) => {
    const {
      state: t,
      dispatch: n,
      isSelected: r,
      popupContent: l,
      setPopupContent: a,
      isMenuOpen: i,
      setIsMenuOpen: o,
      copiedLabel: u,
      popupCopied: c,
      menuRef: h,
      parentChain: x,
      displayFilename: v,
      imgSrc: w,
      handleCopy: g,
      handleClick: _,
      handleContainerClick: j,
      handleMouseDown: d,
      handleKeyDown: f,
      handleRestoreWorkflow: p,
      handleAddUnifiedLoader: y,
      handleEditSource: E,
      handleEditTags: k,
      handleSendToWorkflow: S,
      handleRestore: N,
      handleDelete: $,
      handleRunWithWorkflow: M,
      handleRunWithMask: O,
      handleUpdateUserNotes: q,
      fetchFullImageDetails: K
    } = Qd(e), [C, Y] = m.useState(!1), [R, Q] = m.useState(e.user_notes || ""), [T, L] = m.useState("idle"), W = m.useRef(null);
    m.useEffect(() => {
      Q(e.user_notes || "");
    }, [e.user_notes]), m.useEffect(() => {
      C && W.current && W.current.focus();
    }, [C]);
    const I = async () => {
      R !== (e.user_notes || "") && (L("saving"), await q(R), L("idle")), Y(!1);
    };
    return /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-image-card ${r ? "meld-image-card--selected" : ""} ${i ? "meld-image-card--menu-open" : ""}`,
        onClick: j,
        onMouseDown: d,
        onKeyDown: f,
        role: "button",
        tabIndex: 0,
        children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ s.jsx(
            "img",
            {
              src: w,
              className: "meld-image-card__thumbnail",
              alt: e.filename,
              loading: "lazy",
              width: e.width || void 0,
              height: e.height || void 0,
              onMouseDown: d,
              onClick: (A) => {
                A.stopPropagation(), _(A);
              }
            }
          ) }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__details", children: [
            (t.settings["sidebar.show_filename"] !== "none" || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__filename", children: [
              t.settings["sidebar.show_filename"] !== "none" && v,
              t.settings["sidebar.show_filename"] !== "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
              t.settings["sidebar.show_filename"] === "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
            ] }),
            t.settings["gallery.show_parent_image"] && x.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-lineage-thumbs", children: x.map(
                (A, ee) => A.imgSrc && /* @__PURE__ */ s.jsx(
                  "img",
                  {
                    src: A.imgSrc,
                    className: "meld-lineage-badge__parent-thumb",
                    loading: "lazy",
                    onClick: (V) => {
                      V.stopPropagation(), n({
                        type: "OPEN_VIEWER",
                        payload: {
                          id: A.id || e.id,
                          mode: "lineage"
                        }
                      });
                    },
                    title: ee === 0 ? "Source" : ee === 1 ? "Grand-Source" : `Ancestor (S${ee + 1})`,
                    alt: "source thumb"
                  },
                  A.id || ee
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
                onClick: async (A) => {
                  A.stopPropagation();
                  const ee = await K(e.id);
                  a({
                    title: "Model",
                    text: ee.model_name || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (A) => {
                        A.stopPropagation();
                        const ee = await K(e.id);
                        g(ee.model_name || "-", "Model");
                      },
                      children: u === "Model" ? "Copied!" : "Model"
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
                onClick: async (A) => {
                  A.stopPropagation();
                  const ee = await K(e.id);
                  a({
                    title: "Positive Prompt",
                    text: ee.positive_prompt || ee.positive || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (A) => {
                        A.stopPropagation();
                        const ee = await K(e.id);
                        g(
                          ee.positive_prompt || ee.positive || "-",
                          "Positive"
                        );
                      },
                      children: u === "Positive" ? "Copied!" : "Positive"
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
                onClick: async (A) => {
                  A.stopPropagation();
                  const ee = await K(e.id);
                  a({
                    title: "Negative Prompt",
                    text: ee.negative_prompt || ee.negative || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (A) => {
                        A.stopPropagation();
                        const ee = await K(e.id);
                        g(
                          ee.negative_prompt || ee.negative || "-",
                          "Negative"
                        );
                      },
                      children: u === "Negative" ? "Copied!" : "Negative"
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
                onClick: (A) => {
                  A.stopPropagation(), k();
                },
                children: [
                  /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                  /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((A, ee) => /* @__PURE__ */ s.jsx(
                    "span",
                    {
                      className: "meld-image-card__tag",
                      children: A
                    },
                    `${A}-${ee}`
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
                T === "saving" && /* @__PURE__ */ s.jsx("span", { className: "meld-notes-status", children: "Saving..." })
              ] }),
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  className: "meld-image-card__meta-content",
                  onClick: (A) => A.stopPropagation(),
                  onMouseDown: (A) => A.stopPropagation(),
                  children: C ? /* @__PURE__ */ s.jsx(
                    "textarea",
                    {
                      ref: W,
                      className: "meld-image-card__notes-textarea",
                      value: R,
                      onChange: (A) => Q(A.target.value),
                      onBlur: I,
                      onKeyDown: (A) => {
                        A.stopPropagation(), A.key === "Escape" && (Y(!1), Q(e.user_notes || ""));
                      }
                    }
                  ) : /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: "meld-image-card__notes-preview",
                      onClick: () => Y(!0),
                      children: e.user_notes || /* @__PURE__ */ s.jsx("span", { className: "meld-notes-placeholder", children: "Add notes..." })
                    }
                  )
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ s.jsx(
            Rh,
            {
              isMenuOpen: i,
              setIsMenuOpen: o,
              menuRef: h,
              settings: t.settings,
              onAddUnifiedLoader: y,
              onRestoreWorkflow: p,
              onSendToWorkflow: S,
              onRunWithWorkflow: M,
              onRunWithMask: (A) => O(A),
              onEditSource: E,
              onEditTags: k,
              onRestore: N,
              showRestore: t.viewScope === "trash",
              onDelete: $,
              deleteLabel: t.viewScope === "trash" ? "Delete Permanently" : "Move to Trash"
            }
          ),
          l && /* @__PURE__ */ s.jsx(
            zh,
            {
              title: l.title,
              text: l.text,
              onClose: () => a(null),
              onCopy: (A) => g(A, "", !0),
              isCopied: c
            }
          )
        ]
      }
    );
  }
);
Bd.displayName = "DetailedImageCard";
const Hd = _l.memo(
  ({ image: e }) => {
    const {
      isSelected: t,
      imgSrc: n,
      handleContainerClick: r,
      handleMouseDown: l,
      handleKeyDown: a,
      handleClick: i
    } = Qd(e);
    return /* @__PURE__ */ s.jsx(
      "div",
      {
        className: `meld-image-card meld-image-card--grid-only ${t ? "meld-image-card--selected" : ""}`,
        onClick: r,
        onMouseDown: l,
        onKeyDown: a,
        role: "button",
        tabIndex: 0,
        children: /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ s.jsx(
          "img",
          {
            src: n,
            className: "meld-image-card__thumbnail",
            alt: e.filename,
            loading: "lazy",
            width: e.width || void 0,
            height: e.height || void 0,
            onMouseDown: l,
            onClick: (o) => {
              o.stopPropagation(), i(o);
            }
          }
        ) })
      }
    );
  }
);
Hd.displayName = "SimpleImageCard";
const Ah = ({ image: e }) => {
  const { state: t } = Ce();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ s.jsx(Hd, { image: e }) : /* @__PURE__ */ s.jsx(Bd, { image: e });
}, Oh = ({
  children: e,
  height: t = 150,
  rootMargin: n = "400px",
  className: r,
  style: l
}) => {
  const [a, i] = m.useState(!1), o = m.useRef(null);
  return m.useEffect(() => {
    const u = new IntersectionObserver(
      ([h]) => {
        h.isIntersecting && i(!0);
      },
      { rootMargin: n }
    ), c = o.current;
    return c && u.observe(c), () => {
      c && u.unobserve(c);
    };
  }, [n]), /* @__PURE__ */ s.jsx(
    "div",
    {
      ref: o,
      className: r,
      style: {
        minHeight: `${t}px`,
        ...l
      },
      children: a ? e : null
    }
  );
}, Fh = () => {
  const { state: e, dispatch: t } = Ce(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await kh(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (h) {
      console.error("Failed to cancel scan:", h);
    }
  }, l = () => {
    t({
      type: "SET_SCAN_STATUS",
      payload: { isFinished: !1, isRunning: !1 }
    });
  }, a = n.progress.phase === "linking", { current: i, total: o } = n.progress, u = o > 0 ? i / o : 0, c = a ? 50 + Math.round(u * 50) : Math.round(u * 50);
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
        style: { width: `${c}%` }
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
        children: /* @__PURE__ */ s.jsx(gd, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ s.jsx(Im, { size: 14, className: "meld-success-icon" }),
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
}, $h = () => {
  const { state: e, refreshFavorites: t } = Ce(), [n, r] = m.useState(!1), [l, a] = m.useState(null), [i, o] = m.useState(null), [u, c] = m.useState(""), [h, x] = m.useState("");
  m.useEffect(() => {
    if (l) {
      const j = setTimeout(() => a(null), 3e3);
      return () => clearTimeout(j);
    }
  }, [l]);
  const v = m.useCallback(
    async (j, d, f) => {
      j.stopPropagation();
      const p = `Are you sure you want to delete the favorite "${f}"?`;
      if (window.confirm(p))
        try {
          await Ho(d), await t();
        } catch (y) {
          J.error("Failed to delete favorite", y);
        }
    },
    [t]
  ), w = m.useCallback(
    (j, d) => {
      j.stopPropagation(), o(d), c(d.name), x(d.query);
    },
    []
  ), g = m.useCallback(async () => {
    if (!(!i || !u.trim() || !h.trim()))
      try {
        r(!0), await oh(
          i.id,
          u,
          h
        ), await t(), o(null), a("Favorite updated.");
      } catch (j) {
        J.error("Failed to update favorite", j), a("Failed to update favorite.");
      } finally {
        r(!1);
      }
  }, [i, u, h, t]), _ = m.useCallback(async () => {
    if (!e.searchQuery || n) return;
    if (e.favorites.some(
      (d) => d.query === e.searchQuery
    )) {
      const d = e.favorites.find((f) => f.query === e.searchQuery);
      if (d) {
        r(!0);
        try {
          await Ho(d.id), await t(), a("Favorite removed.");
        } catch (f) {
          J.error("Failed to delete favorite:", f);
        } finally {
          r(!1);
        }
      }
      return;
    }
    r(!0);
    try {
      await ih(e.searchQuery, e.searchQuery), await t(), a(
        `Favorite added!
You can select favorites when the search query is empty.`
      );
    } catch (d) {
      J.error("Failed to save favorite:", d);
    } finally {
      r(!1);
    }
  }, [e.searchQuery, e.favorites, n, t]);
  return {
    isSaving: n,
    toastMessage: l,
    editingFavorite: i,
    setEditingFavorite: o,
    editFavoriteName: u,
    setEditFavoriteName: c,
    editFavoriteQuery: h,
    setEditFavoriteQuery: x,
    handleDeleteFavorite: v,
    handleEditFavorite: w,
    handleSaveEditFavorite: g,
    handleSaveFavorite: _,
    setToastMessage: a
  };
}, zs = (e) => {
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
}, Wh = () => {
  const { state: e, dispatch: t, updateSetting: n } = Ce(), [r, l] = m.useState(e.searchQuery), [a, i] = m.useState([]), [o, u] = m.useState(!1), [c, h] = m.useState([]), [x, v] = m.useState([]), w = e.settings["search.show_all_keywords"], [g, _] = m.useState(-1), [j, d] = m.useState(null), f = m.useRef(null), p = m.useRef(e.searchQuery), y = m.useCallback(async () => {
    if (x.length > 0) return;
    const R = await lh();
    v(R);
  }, [x.length]);
  m.useEffect(() => {
    sh().then((R) => {
      d(R);
    }), w && y();
  }, [y, w]);
  const E = m.useMemo(() => {
    if (!j) return null;
    const R = j.all_prefixes.join("|");
    return new RegExp(`^[-!]?(${R}):(.*)$`, "i");
  }, [j]), k = m.useCallback(() => {
    const R = !w;
    R && y(), n("search.show_all_keywords", R);
  }, [w, y, n]), S = r !== p.current;
  m.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      h([]);
      return;
    }
    rh().then((R) => {
      h(R);
    });
  }, [e.settings["search.quick_suggestions"]]), m.useEffect(() => {
    l(e.searchQuery), p.current = e.searchQuery;
  }, [e.searchQuery]), m.useEffect(() => {
    var R;
    (R = f.current) == null || R.focus();
  }, []);
  const N = m.useCallback(
    (R, Q = !0) => {
      p.current !== R && (J.log("SearchBar: triggering search", { query: R }), t({ type: "SET_SEARCH_QUERY", payload: R }), Q && u(!1), p.current = R);
    },
    [t]
  );
  m.useEffect(() => {
    const R = setTimeout(async () => {
      if (r === p.current)
        return;
      if (!e.settings["search.input_suggest"] || !E) {
        i([]), u(!1);
        return;
      }
      const Q = zs(r), T = Q[Q.length - 1];
      if (T) {
        const L = T.match(E);
        if (L) {
          const W = L[1].toLowerCase();
          let I = L[2];
          I.startsWith('"') && (I = I.substring(1)), I.endsWith('"') && (I = I.substring(0, I.length - 1));
          const A = await nh(I, W);
          i(A), u(A.length > 0), _(-1);
        } else {
          const W = T.replace(/^([-!])/, "").toLowerCase();
          if (W && j) {
            const I = j.all_prefixes.filter((A) => A.startsWith(W)).map((A) => ({
              type: A,
              value: "",
              count: 0
            }));
            if (I.length > 0) {
              i(I), u(!0), _(-1);
              return;
            }
          }
          i([]), u(!1);
        }
      } else
        i([]), u(!1);
    }, 300);
    return () => clearTimeout(R);
  }, [
    r,
    e.settings["search.input_suggest"],
    E,
    j
  ]);
  const $ = m.useCallback(
    (R) => {
      var ee;
      const Q = zs(r), L = (Q.pop() || "").match(/^([-!])/), W = L ? L[1] : "", A = ((j == null ? void 0 : j.no_quote_prefixes) || []).includes(R.type);
      if (R.value === "") {
        const V = `${[...Q, `${W}${R.type}:`].join(" ").trim()}`;
        l(V);
      } else {
        const V = A ? R.value : `"${R.value}"`, P = `${[
          ...Q,
          `${W}${R.type}:${V}`
        ].join(" ").trim()} `;
        l(P), i([]), u(!1);
      }
      (ee = f.current) == null || ee.focus();
    },
    [r, j]
  ), M = (R) => {
    R.key === "Enter" ? N(r) : R.key === "Tab" ? o && g >= 0 && ($(a[g]), R.preventDefault()) : R.key === "ArrowDown" ? o && (_((Q) => Math.min(Q + 1, a.length - 1)), R.preventDefault()) : R.key === "ArrowUp" ? o && (_((Q) => Math.max(Q - 1, -1)), R.preventDefault()) : R.key === "Escape" && u(!1);
  }, O = m.useCallback(() => {
    l(""), N("");
  }, [N]), q = m.useCallback(
    (R, Q, T = !1) => {
      var ee;
      if (T) {
        const V = `${R}:`;
        l(V), (ee = f.current) == null || ee.focus();
        return;
      }
      const I = ((j == null ? void 0 : j.no_quote_prefixes) || []).includes(R) ? Q : `"${Q}"`, A = `${R}:${I}`;
      l(A), N(A);
    },
    [N, j]
  ), K = m.useCallback(
    (R) => {
      l(R), R || N("");
    },
    [N]
  ), C = m.useCallback(() => {
    if (r === p.current || !E)
      return;
    const R = zs(r), Q = R[R.length - 1];
    if (!Q) return;
    const T = !!Q.match(E), L = Q.replace(/^([-!])/, "").toLowerCase(), W = L && (j == null ? void 0 : j.all_prefixes.some((I) => I.startsWith(L)));
    (T || W) && u(!0);
  }, [r, E, j]), Y = m.useCallback(() => {
    setTimeout(() => u(!1), 200);
  }, []);
  return {
    inputValue: r,
    setInputValue: l,
    suggestions: a,
    showSuggestions: o,
    setShowSuggestions: u,
    searchSuggestions: c,
    allKeywords: x,
    showAllKeywords: w,
    toggleShowAllKeywords: k,
    selectedIndex: g,
    setSelectedIndex: _,
    inputRef: f,
    isQueryChanged: S,
    handleSearch: N,
    handleKeyDown: M,
    applySuggestion: $,
    clearSearch: O,
    applySearchSuggestion: q,
    handleInputChange: K,
    handleInputFocus: C,
    handleInputBlur: Y
  };
}, Uh = ({
  fav: e,
  onSelect: t,
  onEdit: n,
  onDelete: r
}) => {
  const [l, a] = m.useState(!1), [i, o] = m.useState(!1), [u, c] = m.useState(!1);
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
                  onClick: (h) => n(h, e),
                  style: {
                    background: "none",
                    border: "none",
                    color: i ? "var(--meld-accent-color)" : "var(--meld-text-secondary)",
                    backgroundColor: i ? "var(--comfy-input-bg-active, rgba(68, 136, 255, 0.1))" : "transparent",
                    padding: "6px",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    borderRadius: "4px",
                    transition: "all 0.2s"
                  },
                  onMouseEnter: () => o(!0),
                  onMouseLeave: () => o(!1),
                  title: "Edit favorite",
                  children: /* @__PURE__ */ s.jsx(hd, { size: 14 })
                }
              ),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  onClick: (h) => r(h, e.id, e.name),
                  style: {
                    background: "none",
                    border: "none",
                    color: u ? "var(--meld-danger-color)" : "var(--meld-text-secondary)",
                    backgroundColor: u ? "var(--comfy-input-bg-active, rgba(255,0,0,0.1))" : "transparent",
                    padding: "6px",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    borderRadius: "4px",
                    transition: "all 0.2s"
                  },
                  onMouseEnter: () => c(!0),
                  onMouseLeave: () => c(!1),
                  title: "Delete favorite",
                  children: /* @__PURE__ */ s.jsx(Jt, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Go = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ s.jsx(Yn, { size: 12 });
    case "model":
      return /* @__PURE__ */ s.jsx(Nm, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ s.jsx(Vm, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ s.jsx(Mm, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ s.jsx(cd, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ s.jsx(ud, { size: 12 });
    case "sort":
      return /* @__PURE__ */ s.jsx(Cm, { size: 12 });
    default:
      return null;
  }
}, Vh = ({
  showSuggestions: e,
  suggestions: t,
  selectedIndex: n,
  setSelectedIndex: r,
  applySuggestion: l,
  inputValue: a,
  searchQuery: i,
  searchSuggestions: o,
  allKeywords: u,
  showAllKeywords: c,
  toggleShowAllKeywords: h,
  applySearchSuggestion: x,
  favorites: v,
  onSelectFavorite: w,
  onEditFavorite: g,
  onDeleteFavorite: _
}) => {
  const j = (y, E, k) => /* @__PURE__ */ s.jsxs(
    "button",
    {
      type: "button",
      onClick: () => x(y.type, y.value, k === "all"),
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
      onMouseEnter: (S) => {
        S.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", S.currentTarget.style.borderColor = "var(--comfy-menu-border, #444)", S.currentTarget.style.color = "var(--meld-text-color)";
      },
      onMouseLeave: (S) => {
        S.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", S.currentTarget.style.borderColor = "var(--comfy-input-bg, #333)", S.currentTarget.style.color = "var(--meld-text-color)";
      },
      children: [
        /* @__PURE__ */ s.jsx(
          "span",
          {
            style: {
              display: "flex",
              color: "var(--meld-text-secondary)"
            },
            children: Go(y.type)
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
    `${k}-${y.type}:${y.value}:${E}`
  ), d = () => !e || t.length === 0 ? null : /* @__PURE__ */ s.jsx(
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
        zIndex: 1e3,
        marginTop: "8px",
        maxHeight: "400px",
        overflowY: "auto",
        boxShadow: "0 8px 16px var(--comfy-menu-shadow, rgba(0,0,0,0.6))"
      },
      children: t.map((y, E) => /* @__PURE__ */ s.jsx(
        "div",
        {
          onMouseDown: (k) => {
            k.preventDefault(), l(y);
          },
          onMouseEnter: () => r(E),
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 14px",
            cursor: "pointer",
            backgroundColor: E === n ? "var(--comfy-menu-bg, #333)" : "transparent",
            borderBottom: "1px solid var(--comfy-menu-border, #2a2a2a)"
          },
          children: /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
            /* @__PURE__ */ s.jsx(
              "span",
              {
                style: {
                  color: "var(--meld-text-secondary)",
                  display: "flex"
                },
                children: Go(y.type)
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
                  color: y.value === ft ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                  fontSize: "14px",
                  fontWeight: y.value === ft ? "bold" : "normal"
                },
                children: y.value === ft ? y.type === "tag" ? `Untagged (${ft})` : `No ${y.type} (${ft})` : y.value
              }
            )
          ] })
        },
        `${y.type}:${y.value}`
      ))
    }
  ), f = () => o.length === 0 || a && a === i ? null : /* @__PURE__ */ s.jsxs(
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
            children: o.map(
              (y, E) => j(y, E, "quick")
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
                        onClick: h,
                        style: {
                          backgroundColor: "transparent",
                          border: "none",
                          color: "var(--meld-accent-color, #3b82f6)",
                          fontSize: "11px",
                          cursor: "pointer"
                        },
                        children: c ? "Show Less" : "Show More"
                      }
                    )
                  ]
                }
              ),
              c && /* @__PURE__ */ s.jsx(
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
                  children: Array.from(new Set(u.map((y) => y.type))).map(
                    (y, E) => j({ type: y, value: "" }, E, "all")
                  )
                }
              )
            ]
          }
        )
      ]
    }
  ), p = () => v.length === 0 || a && a === i ? null : /* @__PURE__ */ s.jsxs(
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
              /* @__PURE__ */ s.jsx(Ia, { size: 12, fill: "var(--meld-text-secondary)" }),
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
            children: v.map((y) => /* @__PURE__ */ s.jsx(
              Uh,
              {
                fav: y,
                onSelect: w,
                onEdit: g,
                onDelete: _
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
        d(),
        f(),
        p()
      ]
    }
  );
}, Qh = () => {
  const { state: e } = Ce(), {
    inputValue: t,
    setInputValue: n,
    suggestions: r,
    showSuggestions: l,
    searchSuggestions: a,
    allKeywords: i,
    showAllKeywords: o,
    toggleShowAllKeywords: u,
    selectedIndex: c,
    setSelectedIndex: h,
    inputRef: x,
    isQueryChanged: v,
    handleSearch: w,
    handleKeyDown: g,
    applySuggestion: _,
    clearSearch: j,
    applySearchSuggestion: d,
    handleInputChange: f,
    handleInputFocus: p,
    handleInputBlur: y
  } = Wh(), {
    isSaving: E,
    toastMessage: k,
    editingFavorite: S,
    setEditingFavorite: N,
    editFavoriteName: $,
    setEditFavoriteName: M,
    editFavoriteQuery: O,
    setEditFavoriteQuery: q,
    handleDeleteFavorite: K,
    handleEditFavorite: C,
    handleSaveEditFavorite: Y,
    handleSaveFavorite: R
  } = $h();
  Tt({
    onEscape: () => N(null),
    enabled: !!S
  });
  const Q = m.useRef(null), T = m.useRef(!1);
  m.useEffect(() => {
    S && Q.current && Q.current.focus();
  }, [S]);
  const L = (I) => {
    I.target === I.currentTarget && (T.current = !0);
  }, W = (I) => {
    I.target === I.currentTarget && T.current && N(null), T.current = !1;
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
                    zIndex: 2e3,
                    whiteSpace: "pre-wrap",
                    textAlign: "center",
                    boxShadow: "0 4px 12px var(--comfy-menu-shadow, rgba(0,0,0,0.5))",
                    pointerEvents: "none",
                    fontWeight: "bold",
                    border: "1px solid var(--comfy-menu-border, #444)",
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
                        onClick: () => w(t),
                        style: {
                          background: v ? "var(--meld-accent-color, #3b82f6)" : "var(--comfy-input-bg-active, rgba(255,255,255,0.03))",
                          border: v ? "1px solid var(--meld-border-color, rgba(255,255,255,0.2))" : "1px solid transparent",
                          cursor: "pointer",
                          padding: "6px 10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "10px",
                          flexShrink: 0,
                          borderRadius: "4px",
                          transition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                          boxShadow: v ? "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))" : "none"
                        },
                        onMouseEnter: (I) => {
                          I.currentTarget.style.transform = "translateY(-1px)", v ? (I.currentTarget.style.filter = "brightness(1.15)", I.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : I.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                        },
                        onMouseLeave: (I) => {
                          I.currentTarget.style.transform = "none", v ? (I.currentTarget.style.filter = "none", I.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : I.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                        },
                        onMouseDown: (I) => {
                          I.currentTarget.style.transform = "translateY(1px)", I.currentTarget.style.boxShadow = "none";
                        },
                        onMouseUp: (I) => {
                          I.currentTarget.style.transform = "translateY(-1px)";
                        },
                        title: "Search (Enter)",
                        children: [
                          /* @__PURE__ */ s.jsx(
                            Bn,
                            {
                              size: 16,
                              color: v ? "var(--meld-text-color, #fff)" : "var(--meld-text-secondary)",
                              style: {
                                transition: "color 0.2s",
                                filter: v ? "drop-shadow(0 1px 2px var(--meld-shadow-color, rgba(0,0,0,0.2)))" : "none"
                              }
                            }
                          ),
                          v && /* @__PURE__ */ s.jsx(
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
                        ref: x,
                        type: "text",
                        value: t,
                        onChange: (I) => f(I.target.value),
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
                        onClick: R,
                        disabled: E,
                        title: e.favorites.some((I) => I.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                          Ia,
                          {
                            size: 16,
                            color: e.favorites.some((I) => I.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((I) => I.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                          }
                        )
                      }
                    ),
                    t && /* @__PURE__ */ s.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: j,
                        style: {
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "2px",
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0
                        },
                        children: /* @__PURE__ */ s.jsx(ke, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ s.jsx(
                Vh,
                {
                  showSuggestions: l,
                  suggestions: r,
                  selectedIndex: c,
                  setSelectedIndex: h,
                  applySuggestion: _,
                  inputValue: t,
                  searchQuery: e.searchQuery,
                  searchSuggestions: a,
                  allKeywords: i,
                  showAllKeywords: o,
                  toggleShowAllKeywords: u,
                  applySearchSuggestion: d,
                  favorites: e.favorites,
                  onSelectFavorite: (I) => {
                    n(I), w(I);
                  },
                  onEditFavorite: C,
                  onDeleteFavorite: K
                }
              )
            ]
          }
        ),
        S && be.createPortal(
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-modal-overlay",
              onMouseDown: L,
              onMouseUp: W,
              style: {
                zIndex: 3e3
              },
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-modal-content meld-modal-content--small",
                  onClick: (I) => I.stopPropagation(),
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                      /* @__PURE__ */ s.jsxs(
                        "h2",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ s.jsx(Ia, { size: 20, color: "var(--meld-accent-color)" }),
                            "Edit Favorite"
                          ]
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-modal-close",
                          onClick: () => N(null),
                          children: /* @__PURE__ */ s.jsx(ke, { size: 20 })
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
                                    ref: Q,
                                    type: "text",
                                    value: $,
                                    onChange: (I) => M(I.target.value),
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
                                    onKeyDown: (I) => {
                                      I.key === "Enter" && Y(), I.key === "Escape" && N(null);
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
                                    value: O,
                                    onChange: (I) => q(I.target.value),
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
                                    onKeyDown: (I) => {
                                      I.key === "Enter" && !I.shiftKey && (I.preventDefault(), Y()), I.key === "Escape" && N(null);
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
                          onClick: () => N(null),
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-primary",
                          onClick: Y,
                          disabled: E || !$.trim() || !O.trim(),
                          children: E ? "Saving..." : "Save Changes"
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
}, Bh = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = m.useState([]), [l, a] = m.useState(!0), [i, o] = m.useState(""), [u, c] = m.useState(""), [h, x] = m.useState(!1), [v, w] = m.useState(null), [g, _] = m.useState(""), [j, d] = m.useState(!1), f = m.useRef(null), p = m.useCallback(async () => {
    a(!0);
    try {
      const O = await Li();
      r(O);
    } catch (O) {
      console.error("Failed to fetch tags:", O);
    } finally {
      a(!1);
    }
  }, []);
  m.useEffect(() => {
    p();
  }, [p]), m.useEffect(() => {
    v !== null && f.current && (f.current.focus(), f.current.select());
  }, [v]);
  const y = async (O) => {
    O.preventDefault();
    const q = u.trim();
    if (!(!q || h)) {
      if (q.toLowerCase() === ft) {
        alert(
          `Tag name '${ft}' is reserved for search and cannot be used.`
        );
        return;
      }
      if (n.some((K) => K.name.toLowerCase() === q.toLowerCase())) {
        alert(`Tag "${q}" already exists.`);
        return;
      }
      x(!0);
      try {
        await mh(q), c(""), await p();
      } catch (K) {
        console.error("Failed to add tag:", K);
      } finally {
        x(!1);
      }
    }
  }, E = async (O, q) => {
    if (confirm(`Are you sure you want to delete tag "${q}"?`))
      try {
        await hh(O), await p();
      } catch (K) {
        console.error("Failed to delete tag:", K);
      }
  }, k = (O) => {
    w(O.id), _(O.name);
  }, S = () => {
    w(null), _("");
  }, N = async (O) => {
    O.preventDefault();
    const q = g.trim();
    if (!q || v === null || j) return;
    if (q.toLowerCase() === ft) {
      alert(
        `Tag name '${ft}' is reserved for search and cannot be used.`
      );
      return;
    }
    const K = n.find((C) => C.id === v);
    if (K && K.name === q) {
      S();
      return;
    }
    if (n.some(
      (C) => C.id !== v && C.name.toLowerCase() === q.toLowerCase()
    )) {
      alert(`Tag "${q}" already exists.`);
      return;
    }
    d(!0);
    try {
      await gh(v, q), S(), await p();
    } catch (C) {
      console.error("Failed to rename tag:", C), alert(C instanceof Error ? C.message : "Failed to rename tag");
    } finally {
      d(!1);
    }
  }, $ = (O) => {
    t(`tag:${O}`);
  }, M = m.useMemo(() => n.filter(
    (O) => O.name.toLowerCase().includes(i.toLowerCase())
  ), [n, i]);
  return /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(Yn, { size: 16 }),
        /* @__PURE__ */ s.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ s.jsx(ke, { size: 16 })
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
            value: u,
            onChange: (O) => c(O.target.value),
            disabled: h
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !u.trim() || h,
            children: [
              /* @__PURE__ */ s.jsx(bi, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ s.jsx(Bn, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: i,
            onChange: (O) => o(O.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-list", children: M.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : M.map((O) => /* @__PURE__ */ s.jsx("div", { className: "meld-tag-item", children: v === O.id ? /* @__PURE__ */ s.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: N,
          children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "text",
                ref: f,
                className: "meld-tag-rename-input",
                value: g,
                onChange: (q) => _(q.target.value),
                onKeyDown: (q) => q.key === "Escape" && S()
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: j || !g.trim(),
                children: /* @__PURE__ */ s.jsx(Mi, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: S,
                disabled: j,
                children: /* @__PURE__ */ s.jsx(ke, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("span", { className: "meld-tag-item__name", children: O.name }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => $(O.name),
              children: /* @__PURE__ */ s.jsx(Bn, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => k(O),
              children: /* @__PURE__ */ s.jsx(hd, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => E(O.id, O.name),
              children: /* @__PURE__ */ s.jsx(Jt, { size: 14 })
            }
          )
        ] })
      ] }) }, O.id)) })
    ] })
  ] });
}, Hh = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  const { viewerImageId: l, images: a, viewerMode: i, lineageImages: o, settings: u } = e, { handleEditTags: c, handleRestore: h, handleUpdateUserNotes: x } = Pi(e, t), { getParentChain: v } = Vd(a, u), [w, g] = m.useState(!1), [_, j] = m.useState(
    u["viewer.show_details_by_default"]
  ), [d, f] = m.useState(null), p = d ?? u["viewer.show_thumbnails"], [y, E] = m.useState(!1), [k, S] = m.useState(!1), [N, $] = m.useState(null), [M, O] = m.useState(null), [q, K] = m.useState(
    null
  ), C = m.useRef(null), Y = m.useRef(!0);
  m.useEffect(() => (Y.current = !0, () => {
    Y.current = !1;
  }), []);
  const R = m.useRef(l);
  m.useEffect(() => {
    R.current = l;
  }, [l]);
  const Q = m.useMemo(() => {
    const B = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
    return i === "lineage" ? o : a.filter(
      (te) => te.exists !== !1 && (u["gallery.show_parent_images"] || !te.has_children || B)
    );
  }, [i, o, a, u, e.searchQuery]), T = l === null ? -1 : Q.findIndex((B) => B.id === l), L = (i === "lineage" && o.length > 0 ? o : a).find((B) => B.id === l), W = m.useCallback(
    async (B = !1) => {
      if (!L) return;
      const te = w ? u["fullscreen.delete_mode"] : u["viewer.delete_mode"];
      if (!B && te === "confirm") {
        t({
          type: "OPEN_MODAL",
          payload: {
            type: "delete_confirm",
            imageIds: [L.id],
            hasLineage: !!(L.parent_id || L.has_children),
            isPermanent: e.viewScope === "trash"
          }
        });
        return;
      }
      try {
        const b = e.viewScope === "trash", Z = /* @__PURE__ */ new Set([L.id]);
        if (te === "lineage") {
          const X = await Ta(L.id);
          for (const re of X)
            Z.add(re.id);
        }
        if (!Y.current || R.current === null) return;
        if (Q.length > Z.size) {
          let X = !1;
          for (let re = T + 1; re < Q.length; re++)
            if (!Z.has(Q[re].id)) {
              t({
                type: "OPEN_VIEWER",
                payload: { id: Q[re].id, mode: i }
              }), X = !0;
              break;
            }
          if (!X) {
            for (let re = T - 1; re >= 0; re--)
              if (!Z.has(Q[re].id)) {
                t({
                  type: "OPEN_VIEWER",
                  payload: { id: Q[re].id, mode: i }
                }), X = !0;
                break;
              }
          }
          X || t({ type: "CLOSE_VIEWER" });
        } else
          t({ type: "CLOSE_VIEWER" });
        if (await ba(Array.from(Z), b), !b) {
          const X = Q.filter(
            (re) => Z.has(re.id)
          );
          $(X), O(null);
        }
        t({ type: "REMOVE_IMAGES", payload: Array.from(Z) });
      } catch (b) {
        t({
          type: "SET_ERROR",
          payload: b instanceof Error ? b.message : String(b)
        });
      }
    },
    [
      L,
      w,
      u,
      e.viewScope,
      Q,
      T,
      i,
      t
    ]
  ), I = m.useCallback(() => {
    L && c(L);
  }, [L, c]), A = m.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: w } });
  }, [t, w]), ee = m.useCallback(async () => {
    const B = w ? u["fullscreen.loop"] : u["viewer.loop"];
    if (T === 0 && i === "gallery" && e.pagination.hasMore && !k && B) {
      S(!0);
      try {
        const te = e.pagination.limit, b = e.pagination.total, Z = Math.max(0, b - te), X = await xl(
          Z,
          te,
          e.searchQuery
        );
        if (!Y.current || (t({ type: "APPEND_IMAGES", payload: X }), R.current === null)) return;
        if (X.images.length > 0) {
          const re = X.images[X.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: re.id, mode: "gallery" }
          });
        }
      } catch (te) {
        console.error("Failed to jump to end:", te);
      } finally {
        S(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: w } });
  }, [
    T,
    i,
    e.pagination,
    e.searchQuery,
    u,
    t,
    k,
    w
  ]), V = m.useCallback(
    (B) => {
      B && "stopPropagation" in B && B.stopPropagation();
      const te = C.current;
      te && (document.fullscreenElement ? document.exitFullscreen() : te.requestFullscreen().catch((b) => {
        console.error(
          `Error attempting to enable full-screen mode: ${b.message}`
        );
      }));
    },
    []
  ), P = m.useCallback(async () => {
    L && (Q.length > 1 ? A() : t({ type: "CLOSE_VIEWER" }), await h(L));
  }, [L, Q.length, A, h, t]), z = m.useCallback(async () => {
    if (!N || N.length === 0) return;
    const B = N.map((b) => b.id), te = B[0];
    try {
      const b = await Ti(B);
      if (!Y.current) return;
      if (t({ type: "ADD_IMAGES", payload: N }), e.viewScope === "trash") {
        const Z = b.restored_ids || B;
        t({ type: "REMOVE_IMAGES", payload: Z });
      }
      if ($(null), !Y.current) return;
      t({
        type: "OPEN_VIEWER",
        payload: { id: te, mode: i }
      });
    } catch (b) {
      t({
        type: "SET_ERROR",
        payload: b instanceof Error ? b.message : String(b)
      });
    }
  }, [N, t, i, e.viewScope]), F = m.useCallback(async () => {
    if (N && N.length > 0)
      await z();
    else if (M && M.type === "tags") {
      const { imageId: B, addTags: te, removeTags: b } = M;
      try {
        await La([B], te, b);
        const Z = (i === "lineage" ? o : a).find((X) => X.id === B);
        if (Z) {
          const X = [...Z.tags];
          for (const Ke of te)
            X.includes(Ke) || X.push(Ke);
          const re = X.filter((Ke) => !b.includes(Ke));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...Z, tags: re }
          }), t({
            type: "OPEN_VIEWER",
            payload: { id: B, mode: i }
          });
        }
        O(null);
      } catch (Z) {
        t({
          type: "SET_ERROR",
          payload: Z instanceof Error ? Z.message : String(Z)
        });
      }
    }
  }, [
    N,
    M,
    z,
    a,
    o,
    i,
    t
  ]), G = m.useCallback(
    async (B) => {
      if (!B || !L) return;
      const te = L.id, b = [...L.tags], Z = B.split(/\s+/), X = [], re = [];
      let Ke = !1, qn = !1, Pt = !1;
      for (const Se of Z)
        if (Se.startsWith("tag:")) {
          const ce = Se.substring(4);
          ce && !b.includes(ce) && !X.includes(ce) && X.push(ce);
        } else if (Se.startsWith("-tag:")) {
          const ce = Se.substring(5);
          ce && b.includes(ce) && !re.includes(ce) && re.push(ce);
        } else if (Se.startsWith("tag-toggle:")) {
          const ce = Se.substring(11);
          ce && (b.includes(ce) ? re.includes(ce) || re.push(ce) : X.includes(ce) || X.push(ce));
        } else Se === "next" ? Ke = !0 : Se === "prev" ? qn = !0 : Se === "delete" && (Pt = !0);
      if (X.length > 0 || re.length > 0)
        try {
          await La(
            [te],
            X,
            re
          );
          const Se = [...b];
          for (const Ae of X)
            Se.includes(Ae) || Se.push(Ae);
          const ce = Se.filter((Ae) => !re.includes(Ae));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...L, id: te, tags: ce }
          }), O({
            type: "tags",
            imageId: te,
            addTags: [...re],
            removeTags: [...X]
          }), $(null);
        } catch (Se) {
          console.error("Failed to update tags via shortcut:", Se);
        }
      Pt ? W(!0) : Ke ? A() : qn && ee();
    },
    [L, t, A, ee, W]
  );
  m.useEffect(() => {
    const B = (b) => {
      const Z = b.target, X = Z.tagName === "INPUT" || Z.tagName === "TEXTAREA" || Z.isContentEditable;
      if (X && b.key !== "Escape" || l === null) return;
      const re = b.key === "Delete" || b.key === "Backspace", Ke = b.key === "ArrowRight" || b.key === "ArrowLeft", qn = ["f", "F", "i", "I", "t", "T", "r", "R"].includes(
        b.key
      ), Pt = b.key === "Escape", Se = (b.ctrlKey || b.metaKey) && (b.key === "z" || b.key === "Z" || b.code === "KeyZ"), ce = /^[0-9]$/.test(b.key) && !b.ctrlKey && !b.metaKey && !b.altKey && b.code !== "KeyZ";
      if (re || Ke || qn || Pt || Se || ce)
        if (X)
          if (Pt) {
            if (e.activeModal.type !== "none") {
              b.preventDefault(), b.stopPropagation();
              return;
            }
            b.preventDefault(), b.stopPropagation(), b.stopImmediatePropagation();
          } else
            return;
        else {
          if (Pt && e.activeModal.type !== "none") {
            b.preventDefault(), b.stopPropagation();
            return;
          }
          b.preventDefault(), b.stopPropagation(), b.stopImmediatePropagation();
        }
      else
        return;
      if (b.key === "Escape")
        e.activeModal.type !== "none" && t({ type: "CLOSE_MODAL" }), document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" });
      else if (b.key === "ArrowRight")
        A();
      else if (b.key === "ArrowLeft")
        ee();
      else if (b.key === "f" || b.key === "F")
        V(b);
      else if (b.key === "i" || b.key === "I")
        j((Ae) => !Ae);
      else if (b.key === "t" || b.key === "T")
        I();
      else if ((b.key === "r" || b.key === "R") && e.viewScope === "trash")
        P();
      else if (b.key === "Delete")
        W();
      else if ((b.ctrlKey || b.metaKey) && (b.key === "z" || b.key === "Z"))
        F();
      else if (ce && !X) {
        const Ae = `viewer.shortcut.${b.key}`, Xn = u[Ae];
        typeof Xn == "string" && Xn && (K(b.key), setTimeout(() => {
          Y.current && K(null);
        }, 500), G(Xn));
      }
    };
    window.addEventListener("keydown", B, { capture: !0 });
    const te = () => {
      const b = !!document.fullscreenElement;
      g(b), j(b ? u["fullscreen.show_details_by_default"] : u["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", te), () => {
      window.removeEventListener("keydown", B, { capture: !0 }), document.removeEventListener("fullscreenchange", te);
    };
  }, [
    l,
    t,
    V,
    A,
    ee,
    u,
    W,
    e.activeModal.type,
    F,
    I,
    P,
    e.viewScope,
    G
  ]), m.useEffect(() => {
    l !== null && r(l).catch((B) => {
      console.error("Failed to fetch full image details for viewer:", B);
    });
  }, [l, r]), m.useEffect(() => {
    i === "lineage" && l !== null && o.length === 0 && (E(!0), Ta(l).then((B) => {
      Y.current && t({ type: "SET_LINEAGE", payload: B });
    }).catch((B) => {
      console.error("Failed to fetch lineage:", B);
    }).finally(() => {
      Y.current && E(!1);
    }));
  }, [i, l, o.length, t]), m.useEffect(() => {
    i !== "gallery" || l === null || e.isLoading || !e.pagination.hasMore || T !== -1 && T >= Q.length - 15 && n();
  }, [
    l,
    Q.length,
    i,
    e.isLoading,
    e.pagination.hasMore,
    n,
    T
  ]);
  const se = m.useMemo(() => {
    if (!p || T === -1) return [];
    const B = u["viewer.thumbnail_window_size"], te = Math.floor(B / 2);
    let b = Math.max(0, T - te);
    const Z = Math.min(Q.length, b + B);
    return Z === Q.length && (b = Math.max(0, Z - B)), Q.slice(b, Z).map((X, re) => ({
      img: X,
      absIndex: b + re
    }));
  }, [Q, T, u, p]), de = m.useMemo(() => L ? v(L) : [], [L, v]);
  return m.useEffect(() => {
    var B, te;
    if (l !== null) {
      if (p) {
        const b = document.querySelector(
          ".meld-viewer-thumbnail--active"
        );
        b && b.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((B = document.activeElement) == null ? void 0 : B.tagName) === "CANVAS" && document.activeElement.blur(), (te = C.current) == null || te.focus();
    }
  }, [l, p]), m.useEffect(() => {
    if (l === null || Q.length === 0) return;
    const B = Q.findIndex(
      (X) => X.id === l
    );
    if (B === -1) return;
    const te = (X) => Ge(X), b = [
      B + 1,
      B + 2,
      B - 1
    ], Z = setTimeout(() => {
      for (const X of b)
        if (X >= 0 && X < Q.length) {
          const re = Q[X], Ke = new Image();
          Ke.src = te(re);
        }
    }, 150);
    return () => clearTimeout(Z);
  }, [l, Q]), {
    isFullscreen: w,
    showDetails: _,
    setShowDetails: j,
    showThumbnails: p,
    setShowThumbnailsOverride: f,
    isLoadingLineage: y,
    isJumping: k,
    activeShortcutKey: q,
    lastDeletedImages: N,
    setLastDeletedImages: $,
    overlayRef: C,
    handleNext: A,
    handlePrevious: ee,
    handleDelete: W,
    handleUpdateUserNotes: x,
    handleTagEdit: I,
    handleRestore: P,
    handleUndo: F,
    toggleFullscreen: V,
    currentIndex: T,
    currentThumbnails: Q,
    image: L,
    windowedThumbnails: se,
    parentChain: de
  };
}, Gh = ({
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
}) }) : null, Kh = ({
  image: e,
  isFullscreen: t,
  settings: n,
  showIcons: r,
  parentChain: l,
  dispatch: a,
  onUpdateNotes: i
}) => {
  const [o, u] = m.useState(e.user_notes || ""), [c, h] = m.useState("idle");
  m.useEffect(() => {
    u(e.user_notes || ""), h("idle");
  }, [e.user_notes]);
  const x = t ? n["fullscreen.details.show_user_notes"] : n["viewer.details.show_user_notes"], v = x === "always" || x === "if_present" && e.user_notes;
  m.useEffect(() => {
    if (o === (e.user_notes || "")) return;
    const g = setTimeout(async () => {
      i && (h("saving"), await i(e.id, o), h("idle"));
    }, 1e3);
    return () => clearTimeout(g);
  }, [o, e.id, e.user_notes, i]);
  const w = async () => {
    o !== (e.user_notes || "") && i && (h("saving"), await i(e.id, o), h("idle"));
  };
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
            (g, _) => g.imgSrc && /* @__PURE__ */ s.jsx(
              "img",
              {
                src: g.imgSrc,
                className: "meld-lineage-badge__parent-thumb",
                style: { cursor: "pointer" },
                loading: "lazy",
                onClick: (j) => {
                  j.stopPropagation(), a({
                    type: "OPEN_VIEWER",
                    payload: {
                      id: g.id || e.id,
                      mode: "lineage"
                    }
                  });
                },
                title: _ === 0 ? "Source" : _ === 1 ? "Grand-Source" : `Ancestor (S${_ + 1})`,
                alt: "source thumb"
              },
              g.id || _
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
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-tags", children: e.tags.map((g) => /* @__PURE__ */ s.jsx("span", { className: "meld-viewer-details-tag", children: g }, g)) })
        ] }),
        v && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item meld-viewer-details-item--notes", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-label", children: [
            "Notes",
            c === "saving" && /* @__PURE__ */ s.jsx("span", { className: "meld-notes-status", children: "Saving..." })
          ] }),
          /* @__PURE__ */ s.jsx(
            "textarea",
            {
              className: "meld-viewer-notes-textarea",
              value: o,
              onChange: (g) => u(g.target.value),
              onBlur: w,
              onMouseDown: (g) => g.stopPropagation(),
              onKeyDown: (g) => {
                g.stopPropagation(), g.key === "Escape" && g.target.blur();
              },
              placeholder: "Add notes for this image...",
              onClick: (g) => g.stopPropagation()
            }
          )
        ] })
      ]
    }
  );
}, Gd = m.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r
  }) => {
    const l = e.id === t, a = typeof n.parent_id == "number" && n.parent_id === e.id, i = typeof e.parent_id == "number" && e.parent_id === n.id, o = Ge(e);
    return /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail-wrapper", children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-viewer-thumbnail ${l ? "meld-viewer-thumbnail--active" : ""} ${a ? "meld-viewer-thumbnail--parent" : ""} ${i ? "meld-viewer-thumbnail--child" : ""}`,
        onClick: () => r({
          type: "OPEN_VIEWER",
          payload: { id: e.id, mode: "gallery" }
        }),
        title: e.filename,
        children: [
          /* @__PURE__ */ s.jsx("img", { src: o, alt: e.filename }),
          (a || i) && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `meld-viewer-thumbnail-relation-icon ${a ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`,
              title: a ? "Source Image" : "Derivative Image",
              children: a ? /* @__PURE__ */ s.jsx(cd, { size: 12 }) : /* @__PURE__ */ s.jsx(ud, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
Gd.displayName = "ThumbnailItem";
const Yh = ({
  windowedThumbnails: e,
  viewerImageId: t,
  currentImage: n,
  dispatch: r,
  isLoadingLineage: l,
  isLoading: a,
  viewerMode: i
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
  ) : e.map(({ img: o }) => /* @__PURE__ */ s.jsx(
    Gd,
    {
      thumb: o,
      viewerImageId: t,
      currentImage: n,
      dispatch: r
    },
    o.id
  )),
  i === "gallery" && a && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ s.jsx(zr, { className: "animate-spin", size: 20 }) })
] }) });
function qh() {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = Ce(), {
    isFullscreen: l,
    showDetails: a,
    setShowDetails: i,
    showThumbnails: o,
    setShowThumbnailsOverride: u,
    isLoadingLineage: c,
    isJumping: h,
    activeShortcutKey: x,
    setLastDeletedImages: v,
    overlayRef: w,
    handleNext: g,
    handlePrevious: _,
    handleTagEdit: j,
    handleRestore: d,
    handleUpdateUserNotes: f,
    toggleFullscreen: p,
    image: y,
    windowedThumbnails: E,
    parentChain: k
  } = Hh({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  }), S = m.useRef(null), { executeWorkflow: N } = Fd();
  if (!y) return null;
  const { viewerImageId: $, viewerMode: M } = e, O = Ge(y), q = l ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return be.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: w,
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
              className: `meld-viewer-content ${l ? "meld-viewer-content--fullscreen" : ""} ${o ? "meld-viewer-content--with-thumbnails" : ""}`,
              onClick: (K) => K.stopPropagation(),
              children: [
                q && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: d,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ s.jsx(zr, { size: 20 })
                    }
                  ),
                  !l && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => u(!o),
                      type: "button",
                      title: o ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ s.jsx(md, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: j,
                      type: "button",
                      title: "Edit Tags (T)",
                      children: /* @__PURE__ */ s.jsx(Yn, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => i(!a),
                      type: "button",
                      title: a ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ s.jsx(Dm, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: p,
                      type: "button",
                      title: l ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                      children: l ? /* @__PURE__ */ s.jsx($m, { size: 20 }) : /* @__PURE__ */ s.jsx(Fm, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                      onClick: () => t({ type: "CLOSE_VIEWER" }),
                      type: "button",
                      title: "Close (Esc)",
                      children: /* @__PURE__ */ s.jsx(ke, { size: 20 })
                    }
                  )
                ] }),
                q && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: _,
                    type: "button",
                    disabled: h,
                    children: /* @__PURE__ */ s.jsx(dd, { size: 32 })
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-image-container", children: [
                  h && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ s.jsx(zr, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ s.jsx(
                    "img",
                    {
                      ref: S,
                      src: O,
                      alt: y.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[l ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${h ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                q && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: g,
                    type: "button",
                    children: /* @__PURE__ */ s.jsx(fd, { size: 32 })
                  }
                ),
                a && /* @__PURE__ */ s.jsx(
                  Kh,
                  {
                    image: y,
                    isFullscreen: l,
                    settings: e.settings,
                    showIcons: q,
                    parentChain: k,
                    dispatch: t,
                    onUpdateNotes: f
                  }
                ),
                !l && o && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ s.jsx(
                  Yh,
                  {
                    windowedThumbnails: E,
                    viewerImageId: $,
                    currentImage: y,
                    dispatch: t,
                    isLoadingLineage: c,
                    isLoading: e.isLoading,
                    viewerMode: M
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  Gh,
                  {
                    settings: e.settings,
                    activeShortcutKey: x
                  }
                )
              ]
            }
          ),
          e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
            Od,
            {
              images: e.activeModal.images,
              isMaskMode: !!e.activeModal.maskFilename,
              onExecute: async (K) => {
                if (e.activeModal.type === "workflow_selection") {
                  const C = e.activeModal.maskFilename;
                  for (const Y of e.activeModal.images)
                    await N(K, Y, C);
                  t({ type: "CLOSE_VIEWER" });
                }
              }
            }
          ),
          e.activeModal.type === "error" && /* @__PURE__ */ s.jsx(Wd, { message: e.activeModal.message }),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ s.jsx(
            $d,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: v
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ s.jsx(Ud, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ s.jsx(_d, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ s.jsx(Rd, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ s.jsx(
            zd,
            {
              imageIds: e.activeModal.imageIds,
              initialTags: e.activeModal.tags,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_editor" && /* @__PURE__ */ s.jsx(
            Sd,
            {
              imageId: e.activeModal.imageId,
              mode: e.activeModal.mode,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          )
        ]
      }
    ),
    document.body
  );
}
const Xh = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = Ce(), [a, i] = m.useState("gallery"), [o, u] = m.useState(""), [c, h] = m.useState(e.pagination.limit);
  m.useEffect(() => {
    h(e.pagination.limit);
  }, [e.searchQuery, e.viewScope, e.pagination.limit]);
  const x = e.searchQuery.trim() !== "", v = m.useRef(null), w = m.useRef(null), g = m.useMemo(() => {
    const j = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
    return e.images.filter((d) => e.viewScope === "trash" ? d.exists !== !1 || e.settings["gallery.trash.show_missing"] : d.exists !== !1 && (e.settings["gallery.show_parent_images"] || !d.has_children || j));
  }, [e.images, e.settings, e.viewScope, e.searchQuery]), _ = m.useMemo(
    () => g.slice(0, c),
    [g, c]
  );
  return m.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && g.length === 0 && (J.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    g.length,
    r
  ]), m.useEffect(() => {
    const j = (d) => {
      d.key === "Escape" && (e.activeModal.type !== "none" ? (t({ type: "CLOSE_MODAL" }), d.preventDefault(), d.stopPropagation()) : e.selectedIds.size > 0 && (t({ type: "CLEAR_SELECTION" }), d.preventDefault(), d.stopPropagation()));
    };
    return window.addEventListener("keydown", j), () => window.removeEventListener("keydown", j);
  }, [e.activeModal.type, e.selectedIds.size, t]), m.useEffect(() => {
    const j = new IntersectionObserver(
      (f) => {
        if (f[0].isIntersecting) {
          if (e.isLoading) {
            J.log(
              "GalleryPanel: Intersection observed but already loading"
            );
            return;
          }
          c < g.length ? (J.log(
            "GalleryPanel: Increasing localLimit (local data available)",
            {
              oldLimit: c,
              newLimit: Math.min(
                c + e.pagination.limit,
                g.length
              ),
              totalAvailableLocally: g.length
            }
          ), h((p) => p + e.pagination.limit)) : e.pagination.hasMore ? (J.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : J.log(
            "GalleryPanel: Intersection observed but no more to load",
            {
              localCount: g.length,
              serverHasMore: e.pagination.hasMore
            }
          );
        }
      },
      { threshold: 0, rootMargin: "800px" }
    ), d = v.current;
    return d && j.observe(d), () => {
      d && j.unobserve(d);
    };
  }, [
    r,
    e.isLoading,
    e.pagination.hasMore,
    c,
    g.length,
    e.pagination.limit,
    e.images.length
  ]), m.useEffect(() => {
    const j = e.viewerImageId ?? w.current;
    if (j !== null && g.some((f) => f.id === j)) {
      const f = g.findIndex((y) => y.id === j);
      if (f >= c) {
        h(
          Math.ceil((f + 1) / e.pagination.limit) * e.pagination.limit
        );
        return;
      }
      const p = document.querySelector(
        `[data-image-id="${j}"]`
      );
      p && (p.scrollIntoView({ behavior: "smooth", block: "nearest" }), e.viewerImageId === null && (w.current = null));
    }
    e.viewerImageId !== null && (w.current = e.viewerImageId);
  }, [
    e.viewerImageId,
    g,
    c,
    e.pagination.limit
  ]), {
    state: e,
    dispatch: t,
    refreshImages: n,
    loadMoreImages: r,
    updateSetting: l,
    viewMode: a,
    setViewMode: i,
    lastSearchQuery: o,
    setLastSearchQuery: u,
    localLimit: c,
    displayedImages: g,
    visibleImages: _,
    isSearchActive: x,
    loadMoreRef: v
  };
}, Jh = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = Ce(), { handleRunWithWorkflow: l } = Pi(e, t), a = e.selectedIds.size;
  if (a === 0) return null;
  const i = e.viewScope === "trash", o = () => {
    const c = e.images.filter(
      (x) => e.selectedIds.has(x.id)
    ), h = /* @__PURE__ */ new Set();
    for (const x of c)
      if (x.tags)
        for (const v of x.tags)
          h.add(v);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(h)
      }
    });
  }, u = () => {
    const c = e.images.filter(
      (h) => e.selectedIds.has(h.id)
    );
    l(c);
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-bulk-bar ${i ? "meld-bulk-bar--trash" : ""}`,
      children: [
        /* @__PURE__ */ s.jsxs("span", { className: "meld-bulk-bar__info", children: [
          a,
          " items selected"
        ] }),
        i ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--restore",
              onClick: r,
              children: [
                /* @__PURE__ */ s.jsx(
                  zr,
                  {
                    size: 16,
                    style: { marginRight: "8px", verticalAlign: "middle" }
                  }
                ),
                "Restore"
              ]
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--delete",
              onClick: n,
              children: [
                /* @__PURE__ */ s.jsx(
                  Jt,
                  {
                    size: 16,
                    style: { marginRight: "8px", verticalAlign: "middle" }
                  }
                ),
                "Delete Permanently"
              ]
            }
          )
        ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--edit",
              onClick: o,
              children: [
                /* @__PURE__ */ s.jsx(
                  Yn,
                  {
                    size: 16,
                    style: { marginRight: "8px", verticalAlign: "middle" }
                  }
                ),
                "Edit Tags"
              ]
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--workflow",
              onClick: u,
              children: [
                /* @__PURE__ */ s.jsx(
                  pd,
                  {
                    size: 16,
                    style: { marginRight: "8px", verticalAlign: "middle" }
                  }
                ),
                "Queue Workflow"
              ]
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--delete",
              onClick: n,
              children: [
                /* @__PURE__ */ s.jsx(
                  Jt,
                  {
                    size: 16,
                    style: { marginRight: "8px", verticalAlign: "middle" }
                  }
                ),
                "Move to Trash"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "button",
            className: "meld-bulk-bar__button meld-bulk-bar__button--cancel",
            onClick: () => t({ type: "CLEAR_SELECTION" }),
            children: [
              /* @__PURE__ */ s.jsx(ke, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
              "Cancel"
            ]
          }
        )
      ]
    }
  );
}, Zh = () => {
  const {
    state: e,
    dispatch: t,
    refreshImages: n,
    updateSetting: r,
    viewMode: l,
    setViewMode: a,
    lastSearchQuery: i,
    setLastSearchQuery: o,
    localLimit: u,
    displayedImages: c,
    visibleImages: h,
    isSearchActive: x,
    loadMoreRef: v
  } = Xh();
  return J.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: c.length,
    visibleCount: h.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-gallery ${e.viewScope === "trash" ? "meld-gallery--trash" : ""}`,
      children: [
        /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__header", children: [
          e.viewScope === "trash" ? /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__trash-indicator", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__trash-label", children: [
              /* @__PURE__ */ s.jsx(Jt, { size: 14 }),
              /* @__PURE__ */ s.jsx("span", { children: "Trash Bin" })
            ] }),
            /* @__PURE__ */ s.jsxs("label", { className: "meld-gallery__trash-toggle", children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.settings["gallery.trash.show_missing"] || !1,
                  onChange: (w) => r("gallery.trash.show_missing", w.target.checked)
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
                  /* @__PURE__ */ s.jsx(ke, { size: 14 }),
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
                  l === "search" ? (o(e.searchQuery), e.searchQuery && t({ type: "SET_SEARCH_QUERY", payload: "" }), a("gallery")) : (!e.searchQuery && i && t({
                    type: "SET_SEARCH_QUERY",
                    payload: i
                  }), a("search"));
                },
                style: {
                  background: "none",
                  border: "none",
                  color: x ? "var(--meld-success-color)" : l === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: x ? "bold" : "normal"
                },
                title: "Search",
                children: /* @__PURE__ */ s.jsx(Bn, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  const g = (e.settings["gallery.view_mode"] || "grid_details") === "grid_details" ? "grid_only" : "grid_details";
                  r("gallery.view_mode", g);
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ s.jsx(zm, { size: 14 }) : /* @__PURE__ */ s.jsx(md, { size: 14 })
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
                children: /* @__PURE__ */ s.jsx(Yn, { size: 14 })
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
                children: /* @__PURE__ */ s.jsx(Lm, { size: 14 })
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
                  zr,
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
                children: /* @__PURE__ */ s.jsx(Um, { size: 14 })
              }
            )
          ] }),
          l === "search" && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ s.jsx(Qh, {}) })
        ] }),
        /* @__PURE__ */ s.jsx(Fh, {}),
        e.error && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__error", children: e.error }),
        l === "tags" ? /* @__PURE__ */ s.jsx(
          Bh,
          {
            onClose: () => a("gallery"),
            onSearch: (w) => {
              t({ type: "SET_SEARCH_QUERY", payload: w }), a("search");
            }
          }
        ) : e.isLoading && c.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : h.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `meld-gallery__list ${e.settings["gallery.view_mode"] === "grid_only" ? "meld-gallery__list--grid-only" : ""}`,
              style: {
                "--meld-thumbnail-size": `${e.settings["sidebar.thumbnail_size"] || 100}px`
              },
              children: h.map((w) => {
                const g = e.settings["sidebar.thumbnail_size"] || 100, _ = e.settings["gallery.view_mode"] === "grid_only", j = _ && w.width && w.height ? Math.min(
                  g,
                  g * w.width / w.height
                ) + 10 : _ ? g + 10 : "100%";
                return /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    "data-image-id": w.id,
                    style: {
                      width: _ ? "auto" : "100%",
                      flexShrink: 0,
                      display: _ ? "inline-block" : "block"
                    },
                    children: /* @__PURE__ */ s.jsx(
                      Oh,
                      {
                        height: _ ? g + 10 : Math.max(g, 150),
                        style: {
                          width: typeof j == "number" ? `${j}px` : j,
                          minWidth: typeof j == "number" ? `${j}px` : j,
                          display: _ ? "inline-block" : "block"
                        },
                        children: /* @__PURE__ */ s.jsx(Ah, { image: w })
                      }
                    )
                  },
                  w.id
                );
              })
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "div",
            {
              ref: v,
              className: "meld-gallery__load-more",
              style: { height: "20px", margin: "20px 0", textAlign: "center" },
              children: [
                e.isLoading && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
                u >= c.length && !e.pagination.hasMore && h.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ s.jsx(Jh, {}),
        e.viewerImageId !== null && /* @__PURE__ */ s.jsx(qh, {}),
        /* @__PURE__ */ s.jsx(Dh, {})
      ]
    }
  );
};
Ko.registerExtension({
  name: "Meld.UnifiedLoader",
  async beforeRegisterNodeDef(e, t, n) {
    t.name;
  },
  async nodeCreated(e) {
    if (e.comfyClass !== "MeldUnifiedLoader") return;
    const t = () => {
      var l, a;
      const n = (l = e.widgets) == null ? void 0 : l.find((i) => i.name === "positive"), r = (a = e.widgets) == null ? void 0 : a.find((i) => i.name === "negative");
      n && n.inputEl && (n.inputEl.style.borderLeft = "4px solid var(--comfy-input-text-active, #44bb44)", n.inputEl.style.paddingLeft = "8px"), r && r.inputEl && (r.inputEl.style.borderLeft = "4px solid var(--error-color, #ff4444)", r.inputEl.style.paddingLeft = "8px");
    };
    t(), setTimeout(t, 1), setTimeout(t, 100);
  }
});
const eg = document.getElementById(
  "meld-gallery-style"
);
if (!eg) {
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
let il = null, ot = null;
Ko.registerExtension({
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
    try {
      const n = await wd();
      J.init(n.dev_mode), J.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld] Failed to fetch settings", n), J.init(!1);
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
      }, ne.addEventListener("meld-image-saved", () => {
        var n;
        (n = e.ui.meld) == null || n.refresh();
      }), ne.addEventListener("meld-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-scan-progress", { detail: n.detail })
        );
      }), ne.addEventListener("meld-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-scan-finished", { detail: n.detail })
        ), (r = e.ui.meld) == null || r.refresh(), J.log("Import completed.");
      }), ne.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const l of n.output.images)
              if (l.type === "output")
                try {
                  await vd({
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
            J.log("render called", {
              el: n,
              galleryRoot: il,
              galleryContainer: ot
            }), ot || (J.log("galleryContainer not found, creating new one"), ot = document.createElement("div"), ot.id = "meld-gallery-container", ot.style.height = "100%", ot.style.width = "100%", ot.style.display = "flex", ot.style.flexDirection = "column"), n.contains(ot) || (J.log("Appending galleryContainer to el"), n.appendChild(ot)), il ? J.log(
              "[Meld] Gallery root already exists, React should handle re-render if needed"
            ) : (J.log("Creating new gallery root"), il = sd(ot), il.render(
              _l.createElement(
                ph,
                null,
                _l.createElement(Zh)
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
