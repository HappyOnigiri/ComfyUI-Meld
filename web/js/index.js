var hm = Object.defineProperty;
var gm = (e, t, n) => t in e ? hm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var hi = (e, t, n) => gm(e, typeof t != "symbol" ? t + "" : t, n);
import { api as J } from "/scripts/api.js";
import { app as qc } from "/scripts/app.js";
var $w = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ym(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yc = { exports: {} }, se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jr = Symbol.for("react.element"), vm = Symbol.for("react.portal"), wm = Symbol.for("react.fragment"), xm = Symbol.for("react.strict_mode"), _m = Symbol.for("react.profiler"), km = Symbol.for("react.provider"), bm = Symbol.for("react.context"), Sm = Symbol.for("react.forward_ref"), jm = Symbol.for("react.suspense"), Cm = Symbol.for("react.memo"), Em = Symbol.for("react.lazy"), gi = Symbol.iterator;
function Nm(e) {
  return e === null || typeof e != "object" ? null : (e = gi && e[gi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Xc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Zc = Object.assign, Jc = {};
function rr(e, t, n) {
  this.props = e, this.context = t, this.refs = Jc, this.updater = n || Xc;
}
rr.prototype.isReactComponent = {};
rr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
rr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ed() {
}
ed.prototype = rr.prototype;
function ao(e, t, n) {
  this.props = e, this.context = t, this.refs = Jc, this.updater = n || Xc;
}
var oo = ao.prototype = new ed();
oo.constructor = ao;
Zc(oo, rr.prototype);
oo.isPureReactComponent = !0;
var yi = Array.isArray, td = Object.prototype.hasOwnProperty, io = { current: null }, nd = { key: !0, ref: !0, __self: !0, __source: !0 };
function rd(e, t, n) {
  var r, l = {}, a = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) td.call(t, r) && !nd.hasOwnProperty(r) && (l[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) l.children = n;
  else if (1 < i) {
    for (var c = Array(i), d = 0; d < i; d++) c[d] = arguments[d + 2];
    l.children = c;
  }
  if (e && e.defaultProps) for (r in i = e.defaultProps, i) l[r] === void 0 && (l[r] = i[r]);
  return { $$typeof: Jr, type: e, key: a, ref: o, props: l, _owner: io.current };
}
function Im(e, t) {
  return { $$typeof: Jr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function co(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Jr;
}
function Mm(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var vi = /\/+/g;
function Al(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Mm("" + e.key) : t.toString(36);
}
function Es(e, t, n, r, l) {
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
        case Jr:
        case vm:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + Al(o, 0) : r, yi(l) ? (n = "", e != null && (n = e.replace(vi, "$&/") + "/"), Es(l, t, n, "", function(d) {
    return d;
  })) : l != null && (co(l) && (l = Im(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(vi, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", yi(e)) for (var i = 0; i < e.length; i++) {
    a = e[i];
    var c = r + Al(a, i);
    o += Es(a, t, n, c, l);
  }
  else if (c = Nm(e), typeof c == "function") for (e = c.call(e), i = 0; !(a = e.next()).done; ) a = a.value, c = r + Al(a, i++), o += Es(a, t, n, c, l);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function as(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Es(e, r, "", "", function(a) {
    return t.call(n, a, l++);
  }), r;
}
function Tm(e) {
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
var Ue = { current: null }, Ns = { transition: null }, Lm = { ReactCurrentDispatcher: Ue, ReactCurrentBatchConfig: Ns, ReactCurrentOwner: io };
function sd() {
  throw Error("act(...) is not supported in production builds of React.");
}
se.Children = { map: as, forEach: function(e, t, n) {
  as(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return as(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return as(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!co(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
se.Component = rr;
se.Fragment = wm;
se.Profiler = _m;
se.PureComponent = ao;
se.StrictMode = xm;
se.Suspense = jm;
se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lm;
se.act = sd;
se.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Zc({}, e.props), l = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = io.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (c in t) td.call(t, c) && !nd.hasOwnProperty(c) && (r[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    i = Array(c);
    for (var d = 0; d < c; d++) i[d] = arguments[d + 2];
    r.children = i;
  }
  return { $$typeof: Jr, type: e.type, key: l, ref: a, props: r, _owner: o };
};
se.createContext = function(e) {
  return e = { $$typeof: bm, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: km, _context: e }, e.Consumer = e;
};
se.createElement = rd;
se.createFactory = function(e) {
  var t = rd.bind(null, e);
  return t.type = e, t;
};
se.createRef = function() {
  return { current: null };
};
se.forwardRef = function(e) {
  return { $$typeof: Sm, render: e };
};
se.isValidElement = co;
se.lazy = function(e) {
  return { $$typeof: Em, _payload: { _status: -1, _result: e }, _init: Tm };
};
se.memo = function(e, t) {
  return { $$typeof: Cm, type: e, compare: t === void 0 ? null : t };
};
se.startTransition = function(e) {
  var t = Ns.transition;
  Ns.transition = {};
  try {
    e();
  } finally {
    Ns.transition = t;
  }
};
se.unstable_act = sd;
se.useCallback = function(e, t) {
  return Ue.current.useCallback(e, t);
};
se.useContext = function(e) {
  return Ue.current.useContext(e);
};
se.useDebugValue = function() {
};
se.useDeferredValue = function(e) {
  return Ue.current.useDeferredValue(e);
};
se.useEffect = function(e, t) {
  return Ue.current.useEffect(e, t);
};
se.useId = function() {
  return Ue.current.useId();
};
se.useImperativeHandle = function(e, t, n) {
  return Ue.current.useImperativeHandle(e, t, n);
};
se.useInsertionEffect = function(e, t) {
  return Ue.current.useInsertionEffect(e, t);
};
se.useLayoutEffect = function(e, t) {
  return Ue.current.useLayoutEffect(e, t);
};
se.useMemo = function(e, t) {
  return Ue.current.useMemo(e, t);
};
se.useReducer = function(e, t, n) {
  return Ue.current.useReducer(e, t, n);
};
se.useRef = function(e) {
  return Ue.current.useRef(e);
};
se.useState = function(e) {
  return Ue.current.useState(e);
};
se.useSyncExternalStore = function(e, t, n) {
  return Ue.current.useSyncExternalStore(e, t, n);
};
se.useTransition = function() {
  return Ue.current.useTransition();
};
se.version = "18.3.1";
Yc.exports = se;
var p = Yc.exports;
const tt = /* @__PURE__ */ ym(p);
var ld = { exports: {} }, lt = {}, ad = { exports: {} }, od = {};
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
  function t(S, E) {
    var D = S.length;
    S.push(E);
    e: for (; 0 < D; ) {
      var P = D - 1 >>> 1, N = S[P];
      if (0 < l(N, E)) S[P] = E, S[D] = N, D = P;
      else break e;
    }
  }
  function n(S) {
    return S.length === 0 ? null : S[0];
  }
  function r(S) {
    if (S.length === 0) return null;
    var E = S[0], D = S.pop();
    if (D !== E) {
      S[0] = D;
      e: for (var P = 0, N = S.length, A = N >>> 1; P < A; ) {
        var R = 2 * (P + 1) - 1, U = S[R], B = R + 1, X = S[B];
        if (0 > l(U, D)) B < N && 0 > l(X, U) ? (S[P] = X, S[B] = D, P = B) : (S[P] = U, S[R] = D, P = R);
        else if (B < N && 0 > l(X, D)) S[P] = X, S[B] = D, P = B;
        else break e;
      }
    }
    return E;
  }
  function l(S, E) {
    var D = S.sortIndex - E.sortIndex;
    return D !== 0 ? D : S.id - E.id;
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
  var c = [], d = [], h = 1, v = null, g = 3, j = !1, x = !1, _ = !1, b = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function u(S) {
    for (var E = n(d); E !== null; ) {
      if (E.callback === null) r(d);
      else if (E.startTime <= S) r(d), E.sortIndex = E.expirationTime, t(c, E);
      else break;
      E = n(d);
    }
  }
  function w(S) {
    if (_ = !1, u(S), !x) if (n(c) !== null) x = !0, L(k);
    else {
      var E = n(d);
      E !== null && Q(w, E.startTime - S);
    }
  }
  function k(S, E) {
    x = !1, _ && (_ = !1, f(T), T = -1), j = !0;
    var D = g;
    try {
      for (u(E), v = n(c); v !== null && (!(v.expirationTime > E) || S && !z()); ) {
        var P = v.callback;
        if (typeof P == "function") {
          v.callback = null, g = v.priorityLevel;
          var N = P(v.expirationTime <= E);
          E = e.unstable_now(), typeof N == "function" ? v.callback = N : v === n(c) && r(c), u(E);
        } else r(c);
        v = n(c);
      }
      if (v !== null) var A = !0;
      else {
        var R = n(d);
        R !== null && Q(w, R.startTime - E), A = !1;
      }
      return A;
    } finally {
      v = null, g = D, j = !1;
    }
  }
  var y = !1, C = null, T = -1, O = 5, M = -1;
  function z() {
    return !(e.unstable_now() - M < O);
  }
  function W() {
    if (C !== null) {
      var S = e.unstable_now();
      M = S;
      var E = !0;
      try {
        E = C(!0, S);
      } finally {
        E ? V() : (y = !1, C = null);
      }
    } else y = !1;
  }
  var V;
  if (typeof m == "function") V = function() {
    m(W);
  };
  else if (typeof MessageChannel < "u") {
    var I = new MessageChannel(), F = I.port2;
    I.port1.onmessage = W, V = function() {
      F.postMessage(null);
    };
  } else V = function() {
    b(W, 0);
  };
  function L(S) {
    C = S, y || (y = !0, V());
  }
  function Q(S, E) {
    T = b(function() {
      S(e.unstable_now());
    }, E);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(S) {
    S.callback = null;
  }, e.unstable_continueExecution = function() {
    x || j || (x = !0, L(k));
  }, e.unstable_forceFrameRate = function(S) {
    0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < S ? Math.floor(1e3 / S) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return g;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(S) {
    switch (g) {
      case 1:
      case 2:
      case 3:
        var E = 3;
        break;
      default:
        E = g;
    }
    var D = g;
    g = E;
    try {
      return S();
    } finally {
      g = D;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(S, E) {
    switch (S) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        S = 3;
    }
    var D = g;
    g = S;
    try {
      return E();
    } finally {
      g = D;
    }
  }, e.unstable_scheduleCallback = function(S, E, D) {
    var P = e.unstable_now();
    switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? P + D : P) : D = P, S) {
      case 1:
        var N = -1;
        break;
      case 2:
        N = 250;
        break;
      case 5:
        N = 1073741823;
        break;
      case 4:
        N = 1e4;
        break;
      default:
        N = 5e3;
    }
    return N = D + N, S = { id: h++, callback: E, priorityLevel: S, startTime: D, expirationTime: N, sortIndex: -1 }, D > P ? (S.sortIndex = D, t(d, S), n(c) === null && S === n(d) && (_ ? (f(T), T = -1) : _ = !0, Q(w, D - P))) : (S.sortIndex = N, t(c, S), x || j || (x = !0, L(k))), S;
  }, e.unstable_shouldYield = z, e.unstable_wrapCallback = function(S) {
    var E = g;
    return function() {
      var D = g;
      g = E;
      try {
        return S.apply(this, arguments);
      } finally {
        g = D;
      }
    };
  };
})(od);
ad.exports = od;
var Am = ad.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dm = p, st = Am;
function H(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var id = /* @__PURE__ */ new Set(), Tr = {};
function jn(e, t) {
  Gn(e, t), Gn(e + "Capture", t);
}
function Gn(e, t) {
  for (Tr[e] = t, e = 0; e < t.length; e++) id.add(t[e]);
}
var Ot = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), da = Object.prototype.hasOwnProperty, Rm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, wi = {}, xi = {};
function Pm(e) {
  return da.call(xi, e) ? !0 : da.call(wi, e) ? !1 : Rm.test(e) ? xi[e] = !0 : (wi[e] = !0, !1);
}
function Om(e, t, n, r) {
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
function zm(e, t, n, r) {
  if (t === null || typeof t > "u" || Om(e, t, n, r)) return !0;
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
function Ve(e, t, n, r, l, a, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
}
var Le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Le[e] = new Ve(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Le[t] = new Ve(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Le[e] = new Ve(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Le[e] = new Ve(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Le[e] = new Ve(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Le[e] = new Ve(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Le[e] = new Ve(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Le[e] = new Ve(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Le[e] = new Ve(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var uo = /[\-:]([a-z])/g;
function fo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    uo,
    fo
  );
  Le[t] = new Ve(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(uo, fo);
  Le[t] = new Ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(uo, fo);
  Le[t] = new Ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Le[e] = new Ve(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Le.xlinkHref = new Ve("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Le[e] = new Ve(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function mo(e, t, n, r) {
  var l = Le.hasOwnProperty(t) ? Le[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (zm(t, n, l, r) && (n = null), r || l === null ? Pm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ut = Dm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, os = Symbol.for("react.element"), In = Symbol.for("react.portal"), Mn = Symbol.for("react.fragment"), po = Symbol.for("react.strict_mode"), ua = Symbol.for("react.profiler"), cd = Symbol.for("react.provider"), dd = Symbol.for("react.context"), ho = Symbol.for("react.forward_ref"), fa = Symbol.for("react.suspense"), ma = Symbol.for("react.suspense_list"), go = Symbol.for("react.memo"), Qt = Symbol.for("react.lazy"), ud = Symbol.for("react.offscreen"), _i = Symbol.iterator;
function ir(e) {
  return e === null || typeof e != "object" ? null : (e = _i && e[_i] || e["@@iterator"], typeof e == "function" ? e : null);
}
var we = Object.assign, Dl;
function yr(e) {
  if (Dl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Dl = t && t[1] || "";
  }
  return `
` + Dl + e;
}
var Rl = !1;
function Pl(e, t) {
  if (!e || Rl) return "";
  Rl = !0;
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
    Rl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? yr(e) : "";
}
function Fm(e) {
  switch (e.tag) {
    case 5:
      return yr(e.type);
    case 16:
      return yr("Lazy");
    case 13:
      return yr("Suspense");
    case 19:
      return yr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Pl(e.type, !1), e;
    case 11:
      return e = Pl(e.type.render, !1), e;
    case 1:
      return e = Pl(e.type, !0), e;
    default:
      return "";
  }
}
function pa(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Mn:
      return "Fragment";
    case In:
      return "Portal";
    case ua:
      return "Profiler";
    case po:
      return "StrictMode";
    case fa:
      return "Suspense";
    case ma:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case dd:
      return (e.displayName || "Context") + ".Consumer";
    case cd:
      return (e._context.displayName || "Context") + ".Provider";
    case ho:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case go:
      return t = e.displayName || null, t !== null ? t : pa(e.type) || "Memo";
    case Qt:
      t = e._payload, e = e._init;
      try {
        return pa(e(t));
      } catch {
      }
  }
  return null;
}
function $m(e) {
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
      return pa(t);
    case 8:
      return t === po ? "StrictMode" : "Mode";
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
function ln(e) {
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
function fd(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Wm(e) {
  var t = fd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function is(e) {
  e._valueTracker || (e._valueTracker = Wm(e));
}
function md(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = fd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Us(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ha(e, t) {
  var n = t.checked;
  return we({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ki(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = ln(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function pd(e, t) {
  t = t.checked, t != null && mo(e, "checked", t, !1);
}
function ga(e, t) {
  pd(e, t);
  var n = ln(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ya(e, t.type, n) : t.hasOwnProperty("defaultValue") && ya(e, t.type, ln(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function bi(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ya(e, t, n) {
  (t !== "number" || Us(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var vr = Array.isArray;
function Wn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ln(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function va(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(H(91));
  return we({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Si(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(H(92));
      if (vr(n)) {
        if (1 < n.length) throw Error(H(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: ln(n) };
}
function hd(e, t) {
  var n = ln(t.value), r = ln(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function ji(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function gd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function wa(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? gd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var cs, yd = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (cs = cs || document.createElement("div"), cs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = cs.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Lr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var _r = {
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
}, Um = ["Webkit", "ms", "Moz", "O"];
Object.keys(_r).forEach(function(e) {
  Um.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), _r[t] = _r[e];
  });
});
function vd(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || _r.hasOwnProperty(e) && _r[e] ? ("" + t).trim() : t + "px";
}
function wd(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = vd(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Vm = we({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function xa(e, t) {
  if (t) {
    if (Vm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(H(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(H(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(H(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(H(62));
  }
}
function _a(e, t) {
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
var ka = null;
function yo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ba = null, Un = null, Vn = null;
function Ci(e) {
  if (e = ns(e)) {
    if (typeof ba != "function") throw Error(H(280));
    var t = e.stateNode;
    t && (t = vl(t), ba(e.stateNode, e.type, t));
  }
}
function xd(e) {
  Un ? Vn ? Vn.push(e) : Vn = [e] : Un = e;
}
function _d() {
  if (Un) {
    var e = Un, t = Vn;
    if (Vn = Un = null, Ci(e), t) for (e = 0; e < t.length; e++) Ci(t[e]);
  }
}
function kd(e, t) {
  return e(t);
}
function bd() {
}
var Ol = !1;
function Sd(e, t, n) {
  if (Ol) return e(t, n);
  Ol = !0;
  try {
    return kd(e, t, n);
  } finally {
    Ol = !1, (Un !== null || Vn !== null) && (bd(), _d());
  }
}
function Ar(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = vl(n);
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
  if (n && typeof n != "function") throw Error(H(231, t, typeof n));
  return n;
}
var Sa = !1;
if (Ot) try {
  var cr = {};
  Object.defineProperty(cr, "passive", { get: function() {
    Sa = !0;
  } }), window.addEventListener("test", cr, cr), window.removeEventListener("test", cr, cr);
} catch {
  Sa = !1;
}
function Bm(e, t, n, r, l, a, o, i, c) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (h) {
    this.onError(h);
  }
}
var kr = !1, Vs = null, Bs = !1, ja = null, Qm = { onError: function(e) {
  kr = !0, Vs = e;
} };
function Hm(e, t, n, r, l, a, o, i, c) {
  kr = !1, Vs = null, Bm.apply(Qm, arguments);
}
function Km(e, t, n, r, l, a, o, i, c) {
  if (Hm.apply(this, arguments), kr) {
    if (kr) {
      var d = Vs;
      kr = !1, Vs = null;
    } else throw Error(H(198));
    Bs || (Bs = !0, ja = d);
  }
}
function Cn(e) {
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
function jd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Ei(e) {
  if (Cn(e) !== e) throw Error(H(188));
}
function Gm(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Cn(e), t === null) throw Error(H(188));
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
        if (a === n) return Ei(l), e;
        if (a === r) return Ei(l), t;
        a = a.sibling;
      }
      throw Error(H(188));
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
        if (!o) throw Error(H(189));
      }
    }
    if (n.alternate !== r) throw Error(H(190));
  }
  if (n.tag !== 3) throw Error(H(188));
  return n.stateNode.current === n ? e : t;
}
function Cd(e) {
  return e = Gm(e), e !== null ? Ed(e) : null;
}
function Ed(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ed(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Nd = st.unstable_scheduleCallback, Ni = st.unstable_cancelCallback, qm = st.unstable_shouldYield, Ym = st.unstable_requestPaint, _e = st.unstable_now, Xm = st.unstable_getCurrentPriorityLevel, vo = st.unstable_ImmediatePriority, Id = st.unstable_UserBlockingPriority, Qs = st.unstable_NormalPriority, Zm = st.unstable_LowPriority, Md = st.unstable_IdlePriority, pl = null, It = null;
function Jm(e) {
  if (It && typeof It.onCommitFiberRoot == "function") try {
    It.onCommitFiberRoot(pl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var kt = Math.clz32 ? Math.clz32 : np, ep = Math.log, tp = Math.LN2;
function np(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (ep(e) / tp | 0) | 0;
}
var ds = 64, us = 4194304;
function wr(e) {
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
function Hs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, a = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var i = o & ~l;
    i !== 0 ? r = wr(i) : (a &= o, a !== 0 && (r = wr(a)));
  } else o = n & ~l, o !== 0 ? r = wr(o) : a !== 0 && (r = wr(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, a = t & -t, l >= a || l === 16 && (a & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - kt(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function rp(e, t) {
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
function sp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - kt(a), i = 1 << o, c = l[o];
    c === -1 ? (!(i & n) || i & r) && (l[o] = rp(i, t)) : c <= t && (e.expiredLanes |= i), a &= ~i;
  }
}
function Ca(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Td() {
  var e = ds;
  return ds <<= 1, !(ds & 4194240) && (ds = 64), e;
}
function zl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function es(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - kt(t), e[t] = n;
}
function lp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - kt(n), a = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~a;
  }
}
function wo(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - kt(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var oe = 0;
function Ld(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ad, xo, Dd, Rd, Pd, Ea = !1, fs = [], Xt = null, Zt = null, Jt = null, Dr = /* @__PURE__ */ new Map(), Rr = /* @__PURE__ */ new Map(), Kt = [], ap = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ii(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Xt = null;
      break;
    case "dragenter":
    case "dragleave":
      Zt = null;
      break;
    case "mouseover":
    case "mouseout":
      Jt = null;
      break;
    case "pointerover":
    case "pointerout":
      Dr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Rr.delete(t.pointerId);
  }
}
function dr(e, t, n, r, l, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [l] }, t !== null && (t = ns(t), t !== null && xo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function op(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Xt = dr(Xt, e, t, n, r, l), !0;
    case "dragenter":
      return Zt = dr(Zt, e, t, n, r, l), !0;
    case "mouseover":
      return Jt = dr(Jt, e, t, n, r, l), !0;
    case "pointerover":
      var a = l.pointerId;
      return Dr.set(a, dr(Dr.get(a) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return a = l.pointerId, Rr.set(a, dr(Rr.get(a) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Od(e) {
  var t = pn(e.target);
  if (t !== null) {
    var n = Cn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = jd(n), t !== null) {
          e.blockedOn = t, Pd(e.priority, function() {
            Dd(n);
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
function Is(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Na(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ka = r, n.target.dispatchEvent(r), ka = null;
    } else return t = ns(n), t !== null && xo(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Mi(e, t, n) {
  Is(e) && n.delete(t);
}
function ip() {
  Ea = !1, Xt !== null && Is(Xt) && (Xt = null), Zt !== null && Is(Zt) && (Zt = null), Jt !== null && Is(Jt) && (Jt = null), Dr.forEach(Mi), Rr.forEach(Mi);
}
function ur(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ea || (Ea = !0, st.unstable_scheduleCallback(st.unstable_NormalPriority, ip)));
}
function Pr(e) {
  function t(l) {
    return ur(l, e);
  }
  if (0 < fs.length) {
    ur(fs[0], e);
    for (var n = 1; n < fs.length; n++) {
      var r = fs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Xt !== null && ur(Xt, e), Zt !== null && ur(Zt, e), Jt !== null && ur(Jt, e), Dr.forEach(t), Rr.forEach(t), n = 0; n < Kt.length; n++) r = Kt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Kt.length && (n = Kt[0], n.blockedOn === null); ) Od(n), n.blockedOn === null && Kt.shift();
}
var Bn = Ut.ReactCurrentBatchConfig, Ks = !0;
function cp(e, t, n, r) {
  var l = oe, a = Bn.transition;
  Bn.transition = null;
  try {
    oe = 1, _o(e, t, n, r);
  } finally {
    oe = l, Bn.transition = a;
  }
}
function dp(e, t, n, r) {
  var l = oe, a = Bn.transition;
  Bn.transition = null;
  try {
    oe = 4, _o(e, t, n, r);
  } finally {
    oe = l, Bn.transition = a;
  }
}
function _o(e, t, n, r) {
  if (Ks) {
    var l = Na(e, t, n, r);
    if (l === null) Gl(e, t, r, Gs, n), Ii(e, r);
    else if (op(l, e, t, n, r)) r.stopPropagation();
    else if (Ii(e, r), t & 4 && -1 < ap.indexOf(e)) {
      for (; l !== null; ) {
        var a = ns(l);
        if (a !== null && Ad(a), a = Na(e, t, n, r), a === null && Gl(e, t, r, Gs, n), a === l) break;
        l = a;
      }
      l !== null && r.stopPropagation();
    } else Gl(e, t, r, null, n);
  }
}
var Gs = null;
function Na(e, t, n, r) {
  if (Gs = null, e = yo(r), e = pn(e), e !== null) if (t = Cn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = jd(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Gs = e, null;
}
function zd(e) {
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
      switch (Xm()) {
        case vo:
          return 1;
        case Id:
          return 4;
        case Qs:
        case Zm:
          return 16;
        case Md:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var qt = null, ko = null, Ms = null;
function Fd() {
  if (Ms) return Ms;
  var e, t = ko, n = t.length, r, l = "value" in qt ? qt.value : qt.textContent, a = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[a - r]; r++) ;
  return Ms = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Ts(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ms() {
  return !0;
}
function Ti() {
  return !1;
}
function at(e) {
  function t(n, r, l, a, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(a) : a[i]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? ms : Ti, this.isPropagationStopped = Ti, this;
  }
  return we(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ms);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ms);
  }, persist: function() {
  }, isPersistent: ms }), t;
}
var sr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, bo = at(sr), ts = we({}, sr, { view: 0, detail: 0 }), up = at(ts), Fl, $l, fr, hl = we({}, ts, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: So, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== fr && (fr && e.type === "mousemove" ? (Fl = e.screenX - fr.screenX, $l = e.screenY - fr.screenY) : $l = Fl = 0, fr = e), Fl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : $l;
} }), Li = at(hl), fp = we({}, hl, { dataTransfer: 0 }), mp = at(fp), pp = we({}, ts, { relatedTarget: 0 }), Wl = at(pp), hp = we({}, sr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), gp = at(hp), yp = we({}, sr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), vp = at(yp), wp = we({}, sr, { data: 0 }), Ai = at(wp), xp = {
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
}, _p = {
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
}, kp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function bp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = kp[e]) ? !!t[e] : !1;
}
function So() {
  return bp;
}
var Sp = we({}, ts, { key: function(e) {
  if (e.key) {
    var t = xp[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ts(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? _p[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: So, charCode: function(e) {
  return e.type === "keypress" ? Ts(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ts(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), jp = at(Sp), Cp = we({}, hl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Di = at(Cp), Ep = we({}, ts, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: So }), Np = at(Ep), Ip = we({}, sr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Mp = at(Ip), Tp = we({}, hl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Lp = at(Tp), Ap = [9, 13, 27, 32], jo = Ot && "CompositionEvent" in window, br = null;
Ot && "documentMode" in document && (br = document.documentMode);
var Dp = Ot && "TextEvent" in window && !br, $d = Ot && (!jo || br && 8 < br && 11 >= br), Ri = " ", Pi = !1;
function Wd(e, t) {
  switch (e) {
    case "keyup":
      return Ap.indexOf(t.keyCode) !== -1;
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
function Ud(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Tn = !1;
function Rp(e, t) {
  switch (e) {
    case "compositionend":
      return Ud(t);
    case "keypress":
      return t.which !== 32 ? null : (Pi = !0, Ri);
    case "textInput":
      return e = t.data, e === Ri && Pi ? null : e;
    default:
      return null;
  }
}
function Pp(e, t) {
  if (Tn) return e === "compositionend" || !jo && Wd(e, t) ? (e = Fd(), Ms = ko = qt = null, Tn = !1, e) : null;
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
      return $d && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Op = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Oi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Op[e.type] : t === "textarea";
}
function Vd(e, t, n, r) {
  xd(r), t = qs(t, "onChange"), 0 < t.length && (n = new bo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Sr = null, Or = null;
function zp(e) {
  eu(e, 0);
}
function gl(e) {
  var t = Dn(e);
  if (md(t)) return e;
}
function Fp(e, t) {
  if (e === "change") return t;
}
var Bd = !1;
if (Ot) {
  var Ul;
  if (Ot) {
    var Vl = "oninput" in document;
    if (!Vl) {
      var zi = document.createElement("div");
      zi.setAttribute("oninput", "return;"), Vl = typeof zi.oninput == "function";
    }
    Ul = Vl;
  } else Ul = !1;
  Bd = Ul && (!document.documentMode || 9 < document.documentMode);
}
function Fi() {
  Sr && (Sr.detachEvent("onpropertychange", Qd), Or = Sr = null);
}
function Qd(e) {
  if (e.propertyName === "value" && gl(Or)) {
    var t = [];
    Vd(t, Or, e, yo(e)), Sd(zp, t);
  }
}
function $p(e, t, n) {
  e === "focusin" ? (Fi(), Sr = t, Or = n, Sr.attachEvent("onpropertychange", Qd)) : e === "focusout" && Fi();
}
function Wp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return gl(Or);
}
function Up(e, t) {
  if (e === "click") return gl(t);
}
function Vp(e, t) {
  if (e === "input" || e === "change") return gl(t);
}
function Bp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var St = typeof Object.is == "function" ? Object.is : Bp;
function zr(e, t) {
  if (St(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!da.call(t, l) || !St(e[l], t[l])) return !1;
  }
  return !0;
}
function $i(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Wi(e, t) {
  var n = $i(e);
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
    n = $i(n);
  }
}
function Hd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Hd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Kd() {
  for (var e = window, t = Us(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Us(e.document);
  }
  return t;
}
function Co(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Qp(e) {
  var t = Kd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Hd(n.ownerDocument.documentElement, n)) {
    if (r !== null && Co(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, a = Math.min(r.start, l);
        r = r.end === void 0 ? a : Math.min(r.end, l), !e.extend && a > r && (l = r, r = a, a = l), l = Wi(n, a);
        var o = Wi(
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
var Hp = Ot && "documentMode" in document && 11 >= document.documentMode, Ln = null, Ia = null, jr = null, Ma = !1;
function Ui(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ma || Ln == null || Ln !== Us(r) || (r = Ln, "selectionStart" in r && Co(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), jr && zr(jr, r) || (jr = r, r = qs(Ia, "onSelect"), 0 < r.length && (t = new bo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Ln)));
}
function ps(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var An = { animationend: ps("Animation", "AnimationEnd"), animationiteration: ps("Animation", "AnimationIteration"), animationstart: ps("Animation", "AnimationStart"), transitionend: ps("Transition", "TransitionEnd") }, Bl = {}, Gd = {};
Ot && (Gd = document.createElement("div").style, "AnimationEvent" in window || (delete An.animationend.animation, delete An.animationiteration.animation, delete An.animationstart.animation), "TransitionEvent" in window || delete An.transitionend.transition);
function yl(e) {
  if (Bl[e]) return Bl[e];
  if (!An[e]) return e;
  var t = An[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Gd) return Bl[e] = t[n];
  return e;
}
var qd = yl("animationend"), Yd = yl("animationiteration"), Xd = yl("animationstart"), Zd = yl("transitionend"), Jd = /* @__PURE__ */ new Map(), Vi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function cn(e, t) {
  Jd.set(e, t), jn(t, [e]);
}
for (var Ql = 0; Ql < Vi.length; Ql++) {
  var Hl = Vi[Ql], Kp = Hl.toLowerCase(), Gp = Hl[0].toUpperCase() + Hl.slice(1);
  cn(Kp, "on" + Gp);
}
cn(qd, "onAnimationEnd");
cn(Yd, "onAnimationIteration");
cn(Xd, "onAnimationStart");
cn("dblclick", "onDoubleClick");
cn("focusin", "onFocus");
cn("focusout", "onBlur");
cn(Zd, "onTransitionEnd");
Gn("onMouseEnter", ["mouseout", "mouseover"]);
Gn("onMouseLeave", ["mouseout", "mouseover"]);
Gn("onPointerEnter", ["pointerout", "pointerover"]);
Gn("onPointerLeave", ["pointerout", "pointerover"]);
jn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
jn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
jn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
jn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
jn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var xr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), qp = new Set("cancel close invalid load scroll toggle".split(" ").concat(xr));
function Bi(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Km(r, t, void 0, e), e.currentTarget = null;
}
function eu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var i = r[o], c = i.instance, d = i.currentTarget;
        if (i = i.listener, c !== a && l.isPropagationStopped()) break e;
        Bi(l, i, d), a = c;
      }
      else for (o = 0; o < r.length; o++) {
        if (i = r[o], c = i.instance, d = i.currentTarget, i = i.listener, c !== a && l.isPropagationStopped()) break e;
        Bi(l, i, d), a = c;
      }
    }
  }
  if (Bs) throw e = ja, Bs = !1, ja = null, e;
}
function pe(e, t) {
  var n = t[Ra];
  n === void 0 && (n = t[Ra] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (tu(t, e, 2, !1), n.add(r));
}
function Kl(e, t, n) {
  var r = 0;
  t && (r |= 4), tu(n, e, r, t);
}
var hs = "_reactListening" + Math.random().toString(36).slice(2);
function Fr(e) {
  if (!e[hs]) {
    e[hs] = !0, id.forEach(function(n) {
      n !== "selectionchange" && (qp.has(n) || Kl(n, !1, e), Kl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[hs] || (t[hs] = !0, Kl("selectionchange", !1, t));
  }
}
function tu(e, t, n, r) {
  switch (zd(t)) {
    case 1:
      var l = cp;
      break;
    case 4:
      l = dp;
      break;
    default:
      l = _o;
  }
  n = l.bind(null, t, n, e), l = void 0, !Sa || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Gl(e, t, n, r, l) {
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
        if (o = pn(i), o === null) return;
        if (c = o.tag, c === 5 || c === 6) {
          r = a = o;
          continue e;
        }
        i = i.parentNode;
      }
    }
    r = r.return;
  }
  Sd(function() {
    var d = a, h = yo(n), v = [];
    e: {
      var g = Jd.get(e);
      if (g !== void 0) {
        var j = bo, x = e;
        switch (e) {
          case "keypress":
            if (Ts(n) === 0) break e;
          case "keydown":
          case "keyup":
            j = jp;
            break;
          case "focusin":
            x = "focus", j = Wl;
            break;
          case "focusout":
            x = "blur", j = Wl;
            break;
          case "beforeblur":
          case "afterblur":
            j = Wl;
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
            j = Li;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            j = mp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            j = Np;
            break;
          case qd:
          case Yd:
          case Xd:
            j = gp;
            break;
          case Zd:
            j = Mp;
            break;
          case "scroll":
            j = up;
            break;
          case "wheel":
            j = Lp;
            break;
          case "copy":
          case "cut":
          case "paste":
            j = vp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            j = Di;
        }
        var _ = (t & 4) !== 0, b = !_ && e === "scroll", f = _ ? g !== null ? g + "Capture" : null : g;
        _ = [];
        for (var m = d, u; m !== null; ) {
          u = m;
          var w = u.stateNode;
          if (u.tag === 5 && w !== null && (u = w, f !== null && (w = Ar(m, f), w != null && _.push($r(m, w, u)))), b) break;
          m = m.return;
        }
        0 < _.length && (g = new j(g, x, null, n, h), v.push({ event: g, listeners: _ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (g = e === "mouseover" || e === "pointerover", j = e === "mouseout" || e === "pointerout", g && n !== ka && (x = n.relatedTarget || n.fromElement) && (pn(x) || x[zt])) break e;
        if ((j || g) && (g = h.window === h ? h : (g = h.ownerDocument) ? g.defaultView || g.parentWindow : window, j ? (x = n.relatedTarget || n.toElement, j = d, x = x ? pn(x) : null, x !== null && (b = Cn(x), x !== b || x.tag !== 5 && x.tag !== 6) && (x = null)) : (j = null, x = d), j !== x)) {
          if (_ = Li, w = "onMouseLeave", f = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (_ = Di, w = "onPointerLeave", f = "onPointerEnter", m = "pointer"), b = j == null ? g : Dn(j), u = x == null ? g : Dn(x), g = new _(w, m + "leave", j, n, h), g.target = b, g.relatedTarget = u, w = null, pn(h) === d && (_ = new _(f, m + "enter", x, n, h), _.target = u, _.relatedTarget = b, w = _), b = w, j && x) t: {
            for (_ = j, f = x, m = 0, u = _; u; u = En(u)) m++;
            for (u = 0, w = f; w; w = En(w)) u++;
            for (; 0 < m - u; ) _ = En(_), m--;
            for (; 0 < u - m; ) f = En(f), u--;
            for (; m--; ) {
              if (_ === f || f !== null && _ === f.alternate) break t;
              _ = En(_), f = En(f);
            }
            _ = null;
          }
          else _ = null;
          j !== null && Qi(v, g, j, _, !1), x !== null && b !== null && Qi(v, b, x, _, !0);
        }
      }
      e: {
        if (g = d ? Dn(d) : window, j = g.nodeName && g.nodeName.toLowerCase(), j === "select" || j === "input" && g.type === "file") var k = Fp;
        else if (Oi(g)) if (Bd) k = Vp;
        else {
          k = Wp;
          var y = $p;
        }
        else (j = g.nodeName) && j.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (k = Up);
        if (k && (k = k(e, d))) {
          Vd(v, k, n, h);
          break e;
        }
        y && y(e, g, d), e === "focusout" && (y = g._wrapperState) && y.controlled && g.type === "number" && ya(g, "number", g.value);
      }
      switch (y = d ? Dn(d) : window, e) {
        case "focusin":
          (Oi(y) || y.contentEditable === "true") && (Ln = y, Ia = d, jr = null);
          break;
        case "focusout":
          jr = Ia = Ln = null;
          break;
        case "mousedown":
          Ma = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ma = !1, Ui(v, n, h);
          break;
        case "selectionchange":
          if (Hp) break;
        case "keydown":
        case "keyup":
          Ui(v, n, h);
      }
      var C;
      if (jo) e: {
        switch (e) {
          case "compositionstart":
            var T = "onCompositionStart";
            break e;
          case "compositionend":
            T = "onCompositionEnd";
            break e;
          case "compositionupdate":
            T = "onCompositionUpdate";
            break e;
        }
        T = void 0;
      }
      else Tn ? Wd(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && ($d && n.locale !== "ko" && (Tn || T !== "onCompositionStart" ? T === "onCompositionEnd" && Tn && (C = Fd()) : (qt = h, ko = "value" in qt ? qt.value : qt.textContent, Tn = !0)), y = qs(d, T), 0 < y.length && (T = new Ai(T, e, null, n, h), v.push({ event: T, listeners: y }), C ? T.data = C : (C = Ud(n), C !== null && (T.data = C)))), (C = Dp ? Rp(e, n) : Pp(e, n)) && (d = qs(d, "onBeforeInput"), 0 < d.length && (h = new Ai("onBeforeInput", "beforeinput", null, n, h), v.push({ event: h, listeners: d }), h.data = C));
    }
    eu(v, t);
  });
}
function $r(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function qs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, a = l.stateNode;
    l.tag === 5 && a !== null && (l = a, a = Ar(e, n), a != null && r.unshift($r(e, a, l)), a = Ar(e, t), a != null && r.push($r(e, a, l))), e = e.return;
  }
  return r;
}
function En(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Qi(e, t, n, r, l) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var i = n, c = i.alternate, d = i.stateNode;
    if (c !== null && c === r) break;
    i.tag === 5 && d !== null && (i = d, l ? (c = Ar(n, a), c != null && o.unshift($r(n, c, i))) : l || (c = Ar(n, a), c != null && o.push($r(n, c, i)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Yp = /\r\n?/g, Xp = /\u0000|\uFFFD/g;
function Hi(e) {
  return (typeof e == "string" ? e : "" + e).replace(Yp, `
`).replace(Xp, "");
}
function gs(e, t, n) {
  if (t = Hi(t), Hi(e) !== t && n) throw Error(H(425));
}
function Ys() {
}
var Ta = null, La = null;
function Aa(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Da = typeof setTimeout == "function" ? setTimeout : void 0, Zp = typeof clearTimeout == "function" ? clearTimeout : void 0, Ki = typeof Promise == "function" ? Promise : void 0, Jp = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ki < "u" ? function(e) {
  return Ki.resolve(null).then(e).catch(eh);
} : Da;
function eh(e) {
  setTimeout(function() {
    throw e;
  });
}
function ql(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Pr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Pr(t);
}
function en(e) {
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
function Gi(e) {
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
var lr = Math.random().toString(36).slice(2), Nt = "__reactFiber$" + lr, Wr = "__reactProps$" + lr, zt = "__reactContainer$" + lr, Ra = "__reactEvents$" + lr, th = "__reactListeners$" + lr, nh = "__reactHandles$" + lr;
function pn(e) {
  var t = e[Nt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[zt] || n[Nt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Gi(e); e !== null; ) {
        if (n = e[Nt]) return n;
        e = Gi(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function ns(e) {
  return e = e[Nt] || e[zt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Dn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(H(33));
}
function vl(e) {
  return e[Wr] || null;
}
var Pa = [], Rn = -1;
function dn(e) {
  return { current: e };
}
function he(e) {
  0 > Rn || (e.current = Pa[Rn], Pa[Rn] = null, Rn--);
}
function fe(e, t) {
  Rn++, Pa[Rn] = e.current, e.current = t;
}
var an = {}, Fe = dn(an), Ye = dn(!1), xn = an;
function qn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return an;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, a;
  for (a in n) l[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Xe(e) {
  return e = e.childContextTypes, e != null;
}
function Xs() {
  he(Ye), he(Fe);
}
function qi(e, t, n) {
  if (Fe.current !== an) throw Error(H(168));
  fe(Fe, t), fe(Ye, n);
}
function nu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(H(108, $m(e) || "Unknown", l));
  return we({}, n, r);
}
function Zs(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || an, xn = Fe.current, fe(Fe, e), fe(Ye, Ye.current), !0;
}
function Yi(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(H(169));
  n ? (e = nu(e, t, xn), r.__reactInternalMemoizedMergedChildContext = e, he(Ye), he(Fe), fe(Fe, e)) : he(Ye), fe(Ye, n);
}
var At = null, wl = !1, Yl = !1;
function ru(e) {
  At === null ? At = [e] : At.push(e);
}
function rh(e) {
  wl = !0, ru(e);
}
function un() {
  if (!Yl && At !== null) {
    Yl = !0;
    var e = 0, t = oe;
    try {
      var n = At;
      for (oe = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      At = null, wl = !1;
    } catch (l) {
      throw At !== null && (At = At.slice(e + 1)), Nd(vo, un), l;
    } finally {
      oe = t, Yl = !1;
    }
  }
  return null;
}
var Pn = [], On = 0, Js = null, el = 0, ct = [], dt = 0, _n = null, Dt = 1, Rt = "";
function fn(e, t) {
  Pn[On++] = el, Pn[On++] = Js, Js = e, el = t;
}
function su(e, t, n) {
  ct[dt++] = Dt, ct[dt++] = Rt, ct[dt++] = _n, _n = e;
  var r = Dt;
  e = Rt;
  var l = 32 - kt(r) - 1;
  r &= ~(1 << l), n += 1;
  var a = 32 - kt(t) + l;
  if (30 < a) {
    var o = l - l % 5;
    a = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Dt = 1 << 32 - kt(t) + l | n << l | r, Rt = a + e;
  } else Dt = 1 << a | n << l | r, Rt = e;
}
function Eo(e) {
  e.return !== null && (fn(e, 1), su(e, 1, 0));
}
function No(e) {
  for (; e === Js; ) Js = Pn[--On], Pn[On] = null, el = Pn[--On], Pn[On] = null;
  for (; e === _n; ) _n = ct[--dt], ct[dt] = null, Rt = ct[--dt], ct[dt] = null, Dt = ct[--dt], ct[dt] = null;
}
var rt = null, nt = null, ge = !1, xt = null;
function lu(e, t) {
  var n = ut(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Xi(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, rt = e, nt = en(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, rt = e, nt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = _n !== null ? { id: Dt, overflow: Rt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ut(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, rt = e, nt = null, !0) : !1;
    default:
      return !1;
  }
}
function Oa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function za(e) {
  if (ge) {
    var t = nt;
    if (t) {
      var n = t;
      if (!Xi(e, t)) {
        if (Oa(e)) throw Error(H(418));
        t = en(n.nextSibling);
        var r = rt;
        t && Xi(e, t) ? lu(r, n) : (e.flags = e.flags & -4097 | 2, ge = !1, rt = e);
      }
    } else {
      if (Oa(e)) throw Error(H(418));
      e.flags = e.flags & -4097 | 2, ge = !1, rt = e;
    }
  }
}
function Zi(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  rt = e;
}
function ys(e) {
  if (e !== rt) return !1;
  if (!ge) return Zi(e), ge = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Aa(e.type, e.memoizedProps)), t && (t = nt)) {
    if (Oa(e)) throw au(), Error(H(418));
    for (; t; ) lu(e, t), t = en(t.nextSibling);
  }
  if (Zi(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(H(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              nt = en(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      nt = null;
    }
  } else nt = rt ? en(e.stateNode.nextSibling) : null;
  return !0;
}
function au() {
  for (var e = nt; e; ) e = en(e.nextSibling);
}
function Yn() {
  nt = rt = null, ge = !1;
}
function Io(e) {
  xt === null ? xt = [e] : xt.push(e);
}
var sh = Ut.ReactCurrentBatchConfig;
function mr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(H(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(H(147, e));
      var l = r, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(o) {
        var i = l.refs;
        o === null ? delete i[a] : i[a] = o;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string") throw Error(H(284));
    if (!n._owner) throw Error(H(290, e));
  }
  return e;
}
function vs(e, t) {
  throw e = Object.prototype.toString.call(t), Error(H(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ji(e) {
  var t = e._init;
  return t(e._payload);
}
function ou(e) {
  function t(f, m) {
    if (e) {
      var u = f.deletions;
      u === null ? (f.deletions = [m], f.flags |= 16) : u.push(m);
    }
  }
  function n(f, m) {
    if (!e) return null;
    for (; m !== null; ) t(f, m), m = m.sibling;
    return null;
  }
  function r(f, m) {
    for (f = /* @__PURE__ */ new Map(); m !== null; ) m.key !== null ? f.set(m.key, m) : f.set(m.index, m), m = m.sibling;
    return f;
  }
  function l(f, m) {
    return f = sn(f, m), f.index = 0, f.sibling = null, f;
  }
  function a(f, m, u) {
    return f.index = u, e ? (u = f.alternate, u !== null ? (u = u.index, u < m ? (f.flags |= 2, m) : u) : (f.flags |= 2, m)) : (f.flags |= 1048576, m);
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function i(f, m, u, w) {
    return m === null || m.tag !== 6 ? (m = ra(u, f.mode, w), m.return = f, m) : (m = l(m, u), m.return = f, m);
  }
  function c(f, m, u, w) {
    var k = u.type;
    return k === Mn ? h(f, m, u.props.children, w, u.key) : m !== null && (m.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Qt && Ji(k) === m.type) ? (w = l(m, u.props), w.ref = mr(f, m, u), w.return = f, w) : (w = zs(u.type, u.key, u.props, null, f.mode, w), w.ref = mr(f, m, u), w.return = f, w);
  }
  function d(f, m, u, w) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== u.containerInfo || m.stateNode.implementation !== u.implementation ? (m = sa(u, f.mode, w), m.return = f, m) : (m = l(m, u.children || []), m.return = f, m);
  }
  function h(f, m, u, w, k) {
    return m === null || m.tag !== 7 ? (m = wn(u, f.mode, w, k), m.return = f, m) : (m = l(m, u), m.return = f, m);
  }
  function v(f, m, u) {
    if (typeof m == "string" && m !== "" || typeof m == "number") return m = ra("" + m, f.mode, u), m.return = f, m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case os:
          return u = zs(m.type, m.key, m.props, null, f.mode, u), u.ref = mr(f, null, m), u.return = f, u;
        case In:
          return m = sa(m, f.mode, u), m.return = f, m;
        case Qt:
          var w = m._init;
          return v(f, w(m._payload), u);
      }
      if (vr(m) || ir(m)) return m = wn(m, f.mode, u, null), m.return = f, m;
      vs(f, m);
    }
    return null;
  }
  function g(f, m, u, w) {
    var k = m !== null ? m.key : null;
    if (typeof u == "string" && u !== "" || typeof u == "number") return k !== null ? null : i(f, m, "" + u, w);
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case os:
          return u.key === k ? c(f, m, u, w) : null;
        case In:
          return u.key === k ? d(f, m, u, w) : null;
        case Qt:
          return k = u._init, g(
            f,
            m,
            k(u._payload),
            w
          );
      }
      if (vr(u) || ir(u)) return k !== null ? null : h(f, m, u, w, null);
      vs(f, u);
    }
    return null;
  }
  function j(f, m, u, w, k) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return f = f.get(u) || null, i(m, f, "" + w, k);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case os:
          return f = f.get(w.key === null ? u : w.key) || null, c(m, f, w, k);
        case In:
          return f = f.get(w.key === null ? u : w.key) || null, d(m, f, w, k);
        case Qt:
          var y = w._init;
          return j(f, m, u, y(w._payload), k);
      }
      if (vr(w) || ir(w)) return f = f.get(u) || null, h(m, f, w, k, null);
      vs(m, w);
    }
    return null;
  }
  function x(f, m, u, w) {
    for (var k = null, y = null, C = m, T = m = 0, O = null; C !== null && T < u.length; T++) {
      C.index > T ? (O = C, C = null) : O = C.sibling;
      var M = g(f, C, u[T], w);
      if (M === null) {
        C === null && (C = O);
        break;
      }
      e && C && M.alternate === null && t(f, C), m = a(M, m, T), y === null ? k = M : y.sibling = M, y = M, C = O;
    }
    if (T === u.length) return n(f, C), ge && fn(f, T), k;
    if (C === null) {
      for (; T < u.length; T++) C = v(f, u[T], w), C !== null && (m = a(C, m, T), y === null ? k = C : y.sibling = C, y = C);
      return ge && fn(f, T), k;
    }
    for (C = r(f, C); T < u.length; T++) O = j(C, f, T, u[T], w), O !== null && (e && O.alternate !== null && C.delete(O.key === null ? T : O.key), m = a(O, m, T), y === null ? k = O : y.sibling = O, y = O);
    return e && C.forEach(function(z) {
      return t(f, z);
    }), ge && fn(f, T), k;
  }
  function _(f, m, u, w) {
    var k = ir(u);
    if (typeof k != "function") throw Error(H(150));
    if (u = k.call(u), u == null) throw Error(H(151));
    for (var y = k = null, C = m, T = m = 0, O = null, M = u.next(); C !== null && !M.done; T++, M = u.next()) {
      C.index > T ? (O = C, C = null) : O = C.sibling;
      var z = g(f, C, M.value, w);
      if (z === null) {
        C === null && (C = O);
        break;
      }
      e && C && z.alternate === null && t(f, C), m = a(z, m, T), y === null ? k = z : y.sibling = z, y = z, C = O;
    }
    if (M.done) return n(
      f,
      C
    ), ge && fn(f, T), k;
    if (C === null) {
      for (; !M.done; T++, M = u.next()) M = v(f, M.value, w), M !== null && (m = a(M, m, T), y === null ? k = M : y.sibling = M, y = M);
      return ge && fn(f, T), k;
    }
    for (C = r(f, C); !M.done; T++, M = u.next()) M = j(C, f, T, M.value, w), M !== null && (e && M.alternate !== null && C.delete(M.key === null ? T : M.key), m = a(M, m, T), y === null ? k = M : y.sibling = M, y = M);
    return e && C.forEach(function(W) {
      return t(f, W);
    }), ge && fn(f, T), k;
  }
  function b(f, m, u, w) {
    if (typeof u == "object" && u !== null && u.type === Mn && u.key === null && (u = u.props.children), typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case os:
          e: {
            for (var k = u.key, y = m; y !== null; ) {
              if (y.key === k) {
                if (k = u.type, k === Mn) {
                  if (y.tag === 7) {
                    n(f, y.sibling), m = l(y, u.props.children), m.return = f, f = m;
                    break e;
                  }
                } else if (y.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Qt && Ji(k) === y.type) {
                  n(f, y.sibling), m = l(y, u.props), m.ref = mr(f, y, u), m.return = f, f = m;
                  break e;
                }
                n(f, y);
                break;
              } else t(f, y);
              y = y.sibling;
            }
            u.type === Mn ? (m = wn(u.props.children, f.mode, w, u.key), m.return = f, f = m) : (w = zs(u.type, u.key, u.props, null, f.mode, w), w.ref = mr(f, m, u), w.return = f, f = w);
          }
          return o(f);
        case In:
          e: {
            for (y = u.key; m !== null; ) {
              if (m.key === y) if (m.tag === 4 && m.stateNode.containerInfo === u.containerInfo && m.stateNode.implementation === u.implementation) {
                n(f, m.sibling), m = l(m, u.children || []), m.return = f, f = m;
                break e;
              } else {
                n(f, m);
                break;
              }
              else t(f, m);
              m = m.sibling;
            }
            m = sa(u, f.mode, w), m.return = f, f = m;
          }
          return o(f);
        case Qt:
          return y = u._init, b(f, m, y(u._payload), w);
      }
      if (vr(u)) return x(f, m, u, w);
      if (ir(u)) return _(f, m, u, w);
      vs(f, u);
    }
    return typeof u == "string" && u !== "" || typeof u == "number" ? (u = "" + u, m !== null && m.tag === 6 ? (n(f, m.sibling), m = l(m, u), m.return = f, f = m) : (n(f, m), m = ra(u, f.mode, w), m.return = f, f = m), o(f)) : n(f, m);
  }
  return b;
}
var Xn = ou(!0), iu = ou(!1), tl = dn(null), nl = null, zn = null, Mo = null;
function To() {
  Mo = zn = nl = null;
}
function Lo(e) {
  var t = tl.current;
  he(tl), e._currentValue = t;
}
function Fa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Qn(e, t) {
  nl = e, Mo = zn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (qe = !0), e.firstContext = null);
}
function pt(e) {
  var t = e._currentValue;
  if (Mo !== e) if (e = { context: e, memoizedValue: t, next: null }, zn === null) {
    if (nl === null) throw Error(H(308));
    zn = e, nl.dependencies = { lanes: 0, firstContext: e };
  } else zn = zn.next = e;
  return t;
}
var hn = null;
function Ao(e) {
  hn === null ? hn = [e] : hn.push(e);
}
function cu(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Ao(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ft(e, r);
}
function Ft(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Ht = !1;
function Do(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function du(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Pt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function tn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, ae & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ft(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Ao(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ft(e, n);
}
function Ls(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, wo(e, n);
  }
}
function ec(e, t) {
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
function rl(e, t, n, r) {
  var l = e.updateQueue;
  Ht = !1;
  var a = l.firstBaseUpdate, o = l.lastBaseUpdate, i = l.shared.pending;
  if (i !== null) {
    l.shared.pending = null;
    var c = i, d = c.next;
    c.next = null, o === null ? a = d : o.next = d, o = c;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, i = h.lastBaseUpdate, i !== o && (i === null ? h.firstBaseUpdate = d : i.next = d, h.lastBaseUpdate = c));
  }
  if (a !== null) {
    var v = l.baseState;
    o = 0, h = d = c = null, i = a;
    do {
      var g = i.lane, j = i.eventTime;
      if ((r & g) === g) {
        h !== null && (h = h.next = {
          eventTime: j,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var x = e, _ = i;
          switch (g = t, j = n, _.tag) {
            case 1:
              if (x = _.payload, typeof x == "function") {
                v = x.call(j, v, g);
                break e;
              }
              v = x;
              break e;
            case 3:
              x.flags = x.flags & -65537 | 128;
            case 0:
              if (x = _.payload, g = typeof x == "function" ? x.call(j, v, g) : x, g == null) break e;
              v = we({}, v, g);
              break e;
            case 2:
              Ht = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, g = l.effects, g === null ? l.effects = [i] : g.push(i));
      } else j = { eventTime: j, lane: g, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, h === null ? (d = h = j, c = v) : h = h.next = j, o |= g;
      if (i = i.next, i === null) {
        if (i = l.shared.pending, i === null) break;
        g = i, i = g.next, g.next = null, l.lastBaseUpdate = g, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (c = v), l.baseState = c, l.firstBaseUpdate = d, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else a === null && (l.shared.lanes = 0);
    bn |= o, e.lanes = o, e.memoizedState = v;
  }
}
function tc(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(H(191, l));
      l.call(r);
    }
  }
}
var rs = {}, Mt = dn(rs), Ur = dn(rs), Vr = dn(rs);
function gn(e) {
  if (e === rs) throw Error(H(174));
  return e;
}
function Ro(e, t) {
  switch (fe(Vr, t), fe(Ur, e), fe(Mt, rs), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : wa(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = wa(t, e);
  }
  he(Mt), fe(Mt, t);
}
function Zn() {
  he(Mt), he(Ur), he(Vr);
}
function uu(e) {
  gn(Vr.current);
  var t = gn(Mt.current), n = wa(t, e.type);
  t !== n && (fe(Ur, e), fe(Mt, n));
}
function Po(e) {
  Ur.current === e && (he(Mt), he(Ur));
}
var ye = dn(0);
function sl(e) {
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
var Xl = [];
function Oo() {
  for (var e = 0; e < Xl.length; e++) Xl[e]._workInProgressVersionPrimary = null;
  Xl.length = 0;
}
var As = Ut.ReactCurrentDispatcher, Zl = Ut.ReactCurrentBatchConfig, kn = 0, ve = null, Se = null, Ee = null, ll = !1, Cr = !1, Br = 0, lh = 0;
function Pe() {
  throw Error(H(321));
}
function zo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!St(e[n], t[n])) return !1;
  return !0;
}
function Fo(e, t, n, r, l, a) {
  if (kn = a, ve = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, As.current = e === null || e.memoizedState === null ? ch : dh, e = n(r, l), Cr) {
    a = 0;
    do {
      if (Cr = !1, Br = 0, 25 <= a) throw Error(H(301));
      a += 1, Ee = Se = null, t.updateQueue = null, As.current = uh, e = n(r, l);
    } while (Cr);
  }
  if (As.current = al, t = Se !== null && Se.next !== null, kn = 0, Ee = Se = ve = null, ll = !1, t) throw Error(H(300));
  return e;
}
function $o() {
  var e = Br !== 0;
  return Br = 0, e;
}
function Et() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ee === null ? ve.memoizedState = Ee = e : Ee = Ee.next = e, Ee;
}
function ht() {
  if (Se === null) {
    var e = ve.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Se.next;
  var t = Ee === null ? ve.memoizedState : Ee.next;
  if (t !== null) Ee = t, Se = e;
  else {
    if (e === null) throw Error(H(310));
    Se = e, e = { memoizedState: Se.memoizedState, baseState: Se.baseState, baseQueue: Se.baseQueue, queue: Se.queue, next: null }, Ee === null ? ve.memoizedState = Ee = e : Ee = Ee.next = e;
  }
  return Ee;
}
function Qr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Jl(e) {
  var t = ht(), n = t.queue;
  if (n === null) throw Error(H(311));
  n.lastRenderedReducer = e;
  var r = Se, l = r.baseQueue, a = n.pending;
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
      var h = d.lane;
      if ((kn & h) === h) c !== null && (c = c.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var v = {
          lane: h,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        c === null ? (i = c = v, o = r) : c = c.next = v, ve.lanes |= h, bn |= h;
      }
      d = d.next;
    } while (d !== null && d !== a);
    c === null ? o = r : c.next = i, St(r, t.memoizedState) || (qe = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      a = l.lane, ve.lanes |= a, bn |= a, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ea(e) {
  var t = ht(), n = t.queue;
  if (n === null) throw Error(H(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, a = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      a = e(a, o.action), o = o.next;
    while (o !== l);
    St(a, t.memoizedState) || (qe = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function fu() {
}
function mu(e, t) {
  var n = ve, r = ht(), l = t(), a = !St(r.memoizedState, l);
  if (a && (r.memoizedState = l, qe = !0), r = r.queue, Wo(gu.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || Ee !== null && Ee.memoizedState.tag & 1) {
    if (n.flags |= 2048, Hr(9, hu.bind(null, n, r, l, t), void 0, null), Ne === null) throw Error(H(349));
    kn & 30 || pu(n, t, l);
  }
  return l;
}
function pu(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ve.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ve.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function hu(e, t, n, r) {
  t.value = n, t.getSnapshot = r, yu(t) && vu(e);
}
function gu(e, t, n) {
  return n(function() {
    yu(t) && vu(e);
  });
}
function yu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !St(e, n);
  } catch {
    return !0;
  }
}
function vu(e) {
  var t = Ft(e, 1);
  t !== null && bt(t, e, 1, -1);
}
function nc(e) {
  var t = Et();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Qr, lastRenderedState: e }, t.queue = e, e = e.dispatch = ih.bind(null, ve, e), [t.memoizedState, e];
}
function Hr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ve.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ve.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function wu() {
  return ht().memoizedState;
}
function Ds(e, t, n, r) {
  var l = Et();
  ve.flags |= e, l.memoizedState = Hr(1 | t, n, void 0, r === void 0 ? null : r);
}
function xl(e, t, n, r) {
  var l = ht();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Se !== null) {
    var o = Se.memoizedState;
    if (a = o.destroy, r !== null && zo(r, o.deps)) {
      l.memoizedState = Hr(t, n, a, r);
      return;
    }
  }
  ve.flags |= e, l.memoizedState = Hr(1 | t, n, a, r);
}
function rc(e, t) {
  return Ds(8390656, 8, e, t);
}
function Wo(e, t) {
  return xl(2048, 8, e, t);
}
function xu(e, t) {
  return xl(4, 2, e, t);
}
function _u(e, t) {
  return xl(4, 4, e, t);
}
function ku(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function bu(e, t, n) {
  return n = n != null ? n.concat([e]) : null, xl(4, 4, ku.bind(null, t, e), n);
}
function Uo() {
}
function Su(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function ju(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Cu(e, t, n) {
  return kn & 21 ? (St(n, t) || (n = Td(), ve.lanes |= n, bn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, qe = !0), e.memoizedState = n);
}
function ah(e, t) {
  var n = oe;
  oe = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Zl.transition;
  Zl.transition = {};
  try {
    e(!1), t();
  } finally {
    oe = n, Zl.transition = r;
  }
}
function Eu() {
  return ht().memoizedState;
}
function oh(e, t, n) {
  var r = rn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Nu(e)) Iu(t, n);
  else if (n = cu(e, t, n, r), n !== null) {
    var l = We();
    bt(n, e, r, l), Mu(n, t, r);
  }
}
function ih(e, t, n) {
  var r = rn(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Nu(e)) Iu(t, l);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var o = t.lastRenderedState, i = a(o, n);
      if (l.hasEagerState = !0, l.eagerState = i, St(i, o)) {
        var c = t.interleaved;
        c === null ? (l.next = l, Ao(t)) : (l.next = c.next, c.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = cu(e, t, l, r), n !== null && (l = We(), bt(n, e, r, l), Mu(n, t, r));
  }
}
function Nu(e) {
  var t = e.alternate;
  return e === ve || t !== null && t === ve;
}
function Iu(e, t) {
  Cr = ll = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Mu(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, wo(e, n);
  }
}
var al = { readContext: pt, useCallback: Pe, useContext: Pe, useEffect: Pe, useImperativeHandle: Pe, useInsertionEffect: Pe, useLayoutEffect: Pe, useMemo: Pe, useReducer: Pe, useRef: Pe, useState: Pe, useDebugValue: Pe, useDeferredValue: Pe, useTransition: Pe, useMutableSource: Pe, useSyncExternalStore: Pe, useId: Pe, unstable_isNewReconciler: !1 }, ch = { readContext: pt, useCallback: function(e, t) {
  return Et().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: pt, useEffect: rc, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ds(
    4194308,
    4,
    ku.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ds(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ds(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Et();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Et();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = oh.bind(null, ve, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Et();
  return e = { current: e }, t.memoizedState = e;
}, useState: nc, useDebugValue: Uo, useDeferredValue: function(e) {
  return Et().memoizedState = e;
}, useTransition: function() {
  var e = nc(!1), t = e[0];
  return e = ah.bind(null, e[1]), Et().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ve, l = Et();
  if (ge) {
    if (n === void 0) throw Error(H(407));
    n = n();
  } else {
    if (n = t(), Ne === null) throw Error(H(349));
    kn & 30 || pu(r, t, n);
  }
  l.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return l.queue = a, rc(gu.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, Hr(9, hu.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = Et(), t = Ne.identifierPrefix;
  if (ge) {
    var n = Rt, r = Dt;
    n = (r & ~(1 << 32 - kt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Br++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = lh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, dh = {
  readContext: pt,
  useCallback: Su,
  useContext: pt,
  useEffect: Wo,
  useImperativeHandle: bu,
  useInsertionEffect: xu,
  useLayoutEffect: _u,
  useMemo: ju,
  useReducer: Jl,
  useRef: wu,
  useState: function() {
    return Jl(Qr);
  },
  useDebugValue: Uo,
  useDeferredValue: function(e) {
    var t = ht();
    return Cu(t, Se.memoizedState, e);
  },
  useTransition: function() {
    var e = Jl(Qr)[0], t = ht().memoizedState;
    return [e, t];
  },
  useMutableSource: fu,
  useSyncExternalStore: mu,
  useId: Eu,
  unstable_isNewReconciler: !1
}, uh = { readContext: pt, useCallback: Su, useContext: pt, useEffect: Wo, useImperativeHandle: bu, useInsertionEffect: xu, useLayoutEffect: _u, useMemo: ju, useReducer: ea, useRef: wu, useState: function() {
  return ea(Qr);
}, useDebugValue: Uo, useDeferredValue: function(e) {
  var t = ht();
  return Se === null ? t.memoizedState = e : Cu(t, Se.memoizedState, e);
}, useTransition: function() {
  var e = ea(Qr)[0], t = ht().memoizedState;
  return [e, t];
}, useMutableSource: fu, useSyncExternalStore: mu, useId: Eu, unstable_isNewReconciler: !1 };
function vt(e, t) {
  if (e && e.defaultProps) {
    t = we({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function $a(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : we({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var _l = { isMounted: function(e) {
  return (e = e._reactInternals) ? Cn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = We(), l = rn(e), a = Pt(r, l);
  a.payload = t, n != null && (a.callback = n), t = tn(e, a, l), t !== null && (bt(t, e, l, r), Ls(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = We(), l = rn(e), a = Pt(r, l);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = tn(e, a, l), t !== null && (bt(t, e, l, r), Ls(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = We(), r = rn(e), l = Pt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = tn(e, l, r), t !== null && (bt(t, e, r, n), Ls(t, e, r));
} };
function sc(e, t, n, r, l, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !zr(n, r) || !zr(l, a) : !0;
}
function Tu(e, t, n) {
  var r = !1, l = an, a = t.contextType;
  return typeof a == "object" && a !== null ? a = pt(a) : (l = Xe(t) ? xn : Fe.current, r = t.contextTypes, a = (r = r != null) ? qn(e, l) : an), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = _l, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function lc(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && _l.enqueueReplaceState(t, t.state, null);
}
function Wa(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Do(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? l.context = pt(a) : (a = Xe(t) ? xn : Fe.current, l.context = qn(e, a)), l.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && ($a(e, t, a, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && _l.enqueueReplaceState(l, l.state, null), rl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Jn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Fm(r), r = r.return;
    while (r);
    var l = n;
  } catch (a) {
    l = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ta(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ua(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var fh = typeof WeakMap == "function" ? WeakMap : Map;
function Lu(e, t, n) {
  n = Pt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    il || (il = !0, Za = r), Ua(e, t);
  }, n;
}
function Au(e, t, n) {
  n = Pt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Ua(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    Ua(e, t), typeof r != "function" && (nn === null ? nn = /* @__PURE__ */ new Set([this]) : nn.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function ac(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new fh();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Ch.bind(null, e, t, n), t.then(e, e));
}
function oc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ic(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Pt(-1, 1), t.tag = 2, tn(n, t, 1))), n.lanes |= 1), e);
}
var mh = Ut.ReactCurrentOwner, qe = !1;
function $e(e, t, n, r) {
  t.child = e === null ? iu(t, null, n, r) : Xn(t, e.child, n, r);
}
function cc(e, t, n, r, l) {
  n = n.render;
  var a = t.ref;
  return Qn(t, l), r = Fo(e, t, n, r, a, l), n = $o(), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, $t(e, t, l)) : (ge && n && Eo(t), t.flags |= 1, $e(e, t, r, l), t.child);
}
function dc(e, t, n, r, l) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !Yo(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Du(e, t, a, r, l)) : (e = zs(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & l)) {
    var o = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : zr, n(o, r) && e.ref === t.ref) return $t(e, t, l);
  }
  return t.flags |= 1, e = sn(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Du(e, t, n, r, l) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (zr(a, r) && e.ref === t.ref) if (qe = !1, t.pendingProps = r = a, (e.lanes & l) !== 0) e.flags & 131072 && (qe = !0);
    else return t.lanes = e.lanes, $t(e, t, l);
  }
  return Va(e, t, n, r, l);
}
function Ru(e, t, n) {
  var r = t.pendingProps, l = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, fe($n, et), et |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, fe($n, et), et |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, fe($n, et), et |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, fe($n, et), et |= r;
  return $e(e, t, l, n), t.child;
}
function Pu(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Va(e, t, n, r, l) {
  var a = Xe(n) ? xn : Fe.current;
  return a = qn(t, a), Qn(t, l), n = Fo(e, t, n, r, a, l), r = $o(), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, $t(e, t, l)) : (ge && r && Eo(t), t.flags |= 1, $e(e, t, n, l), t.child);
}
function uc(e, t, n, r, l) {
  if (Xe(n)) {
    var a = !0;
    Zs(t);
  } else a = !1;
  if (Qn(t, l), t.stateNode === null) Rs(e, t), Tu(t, n, r), Wa(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, i = t.memoizedProps;
    o.props = i;
    var c = o.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = pt(d) : (d = Xe(n) ? xn : Fe.current, d = qn(t, d));
    var h = n.getDerivedStateFromProps, v = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    v || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || c !== d) && lc(t, o, r, d), Ht = !1;
    var g = t.memoizedState;
    o.state = g, rl(t, r, o, l), c = t.memoizedState, i !== r || g !== c || Ye.current || Ht ? (typeof h == "function" && ($a(t, n, h, r), c = t.memoizedState), (i = Ht || sc(t, n, i, r, g, c, d)) ? (v || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = d, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, du(e, t), i = t.memoizedProps, d = t.type === t.elementType ? i : vt(t.type, i), o.props = d, v = t.pendingProps, g = o.context, c = n.contextType, typeof c == "object" && c !== null ? c = pt(c) : (c = Xe(n) ? xn : Fe.current, c = qn(t, c));
    var j = n.getDerivedStateFromProps;
    (h = typeof j == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== v || g !== c) && lc(t, o, r, c), Ht = !1, g = t.memoizedState, o.state = g, rl(t, r, o, l);
    var x = t.memoizedState;
    i !== v || g !== x || Ye.current || Ht ? (typeof j == "function" && ($a(t, n, j, r), x = t.memoizedState), (d = Ht || sc(t, n, d, r, g, x, c) || !1) ? (h || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, x, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, x, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), o.props = r, o.state = x, o.context = c, r = d) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ba(e, t, n, r, a, l);
}
function Ba(e, t, n, r, l, a) {
  Pu(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Yi(t, n, !1), $t(e, t, a);
  r = t.stateNode, mh.current = t;
  var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = Xn(t, e.child, null, a), t.child = Xn(t, null, i, a)) : $e(e, t, i, a), t.memoizedState = r.state, l && Yi(t, n, !0), t.child;
}
function Ou(e) {
  var t = e.stateNode;
  t.pendingContext ? qi(e, t.pendingContext, t.pendingContext !== t.context) : t.context && qi(e, t.context, !1), Ro(e, t.containerInfo);
}
function fc(e, t, n, r, l) {
  return Yn(), Io(l), t.flags |= 256, $e(e, t, n, r), t.child;
}
var Qa = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ha(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function zu(e, t, n) {
  var r = t.pendingProps, l = ye.current, a = !1, o = (t.flags & 128) !== 0, i;
  if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), fe(ye, l & 1), e === null)
    return za(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = { mode: "hidden", children: o }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = Sl(o, r, 0, null), e = wn(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = Ha(n), t.memoizedState = Qa, e) : Vo(t, o));
  if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return ph(e, t, o, r, i, l, n);
  if (a) {
    a = r.fallback, o = t.mode, l = e.child, i = l.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = sn(l, c), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? a = sn(i, a) : (a = wn(a, o, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? Ha(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = Qa, r;
  }
  return a = e.child, e = a.sibling, r = sn(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Vo(e, t) {
  return t = Sl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ws(e, t, n, r) {
  return r !== null && Io(r), Xn(t, e.child, null, n), e = Vo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function ph(e, t, n, r, l, a, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ta(Error(H(422))), ws(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, l = t.mode, r = Sl({ mode: "visible", children: r.children }, l, 0, null), a = wn(a, l, o, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && Xn(t, e.child, null, o), t.child.memoizedState = Ha(o), t.memoizedState = Qa, a);
  if (!(t.mode & 1)) return ws(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
    return r = i, a = Error(H(419)), r = ta(a, r, void 0), ws(e, t, o, r);
  }
  if (i = (o & e.childLanes) !== 0, qe || i) {
    if (r = Ne, r !== null) {
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
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== a.retryLane && (a.retryLane = l, Ft(e, l), bt(r, e, l, -1));
    }
    return qo(), r = ta(Error(H(421))), ws(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Eh.bind(null, e), l._reactRetry = t, null) : (e = a.treeContext, nt = en(l.nextSibling), rt = t, ge = !0, xt = null, e !== null && (ct[dt++] = Dt, ct[dt++] = Rt, ct[dt++] = _n, Dt = e.id, Rt = e.overflow, _n = t), t = Vo(t, r.children), t.flags |= 4096, t);
}
function mc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Fa(e.return, t, n);
}
function na(e, t, n, r, l) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = l);
}
function Fu(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, a = r.tail;
  if ($e(e, t, r.children, n), r = ye.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && mc(e, n, t);
      else if (e.tag === 19) mc(e, n, t);
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
  if (fe(ye, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && sl(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), na(t, !1, l, n, a);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && sl(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      na(t, !0, n, null, a);
      break;
    case "together":
      na(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Rs(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function $t(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), bn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(H(153));
  if (t.child !== null) {
    for (e = t.child, n = sn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = sn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function hh(e, t, n) {
  switch (t.tag) {
    case 3:
      Ou(t), Yn();
      break;
    case 5:
      uu(t);
      break;
    case 1:
      Xe(t.type) && Zs(t);
      break;
    case 4:
      Ro(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      fe(tl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (fe(ye, ye.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? zu(e, t, n) : (fe(ye, ye.current & 1), e = $t(e, t, n), e !== null ? e.sibling : null);
      fe(ye, ye.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Fu(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), fe(ye, ye.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ru(e, t, n);
  }
  return $t(e, t, n);
}
var $u, Ka, Wu, Uu;
$u = function(e, t) {
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
Ka = function() {
};
Wu = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, gn(Mt.current);
    var a = null;
    switch (n) {
      case "input":
        l = ha(e, l), r = ha(e, r), a = [];
        break;
      case "select":
        l = we({}, l, { value: void 0 }), r = we({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        l = va(e, l), r = va(e, r), a = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ys);
    }
    xa(n, r);
    var o;
    n = null;
    for (d in l) if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null) if (d === "style") {
      var i = l[d];
      for (o in i) i.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Tr.hasOwnProperty(d) ? a || (a = []) : (a = a || []).push(d, null));
    for (d in r) {
      var c = r[d];
      if (i = l != null ? l[d] : void 0, r.hasOwnProperty(d) && c !== i && (c != null || i != null)) if (d === "style") if (i) {
        for (o in i) !i.hasOwnProperty(o) || c && c.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in c) c.hasOwnProperty(o) && i[o] !== c[o] && (n || (n = {}), n[o] = c[o]);
      } else n || (a || (a = []), a.push(
        d,
        n
      )), n = c;
      else d === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, i = i ? i.__html : void 0, c != null && i !== c && (a = a || []).push(d, c)) : d === "children" ? typeof c != "string" && typeof c != "number" || (a = a || []).push(d, "" + c) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Tr.hasOwnProperty(d) ? (c != null && d === "onScroll" && pe("scroll", e), a || i === c || (a = [])) : (a = a || []).push(d, c));
    }
    n && (a = a || []).push("style", n);
    var d = a;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Uu = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function pr(e, t) {
  if (!ge) switch (e.tailMode) {
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
function Oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function gh(e, t, n) {
  var r = t.pendingProps;
  switch (No(t), t.tag) {
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
      return Oe(t), null;
    case 1:
      return Xe(t.type) && Xs(), Oe(t), null;
    case 3:
      return r = t.stateNode, Zn(), he(Ye), he(Fe), Oo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ys(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, xt !== null && (to(xt), xt = null))), Ka(e, t), Oe(t), null;
    case 5:
      Po(t);
      var l = gn(Vr.current);
      if (n = t.type, e !== null && t.stateNode != null) Wu(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(H(166));
          return Oe(t), null;
        }
        if (e = gn(Mt.current), ys(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[Nt] = t, r[Wr] = a, e = (t.mode & 1) !== 0, n) {
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
              for (l = 0; l < xr.length; l++) pe(xr[l], r);
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
              ki(r, a), pe("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, pe("invalid", r);
              break;
            case "textarea":
              Si(r, a), pe("invalid", r);
          }
          xa(n, a), l = null;
          for (var o in a) if (a.hasOwnProperty(o)) {
            var i = a[o];
            o === "children" ? typeof i == "string" ? r.textContent !== i && (a.suppressHydrationWarning !== !0 && gs(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (a.suppressHydrationWarning !== !0 && gs(
              r.textContent,
              i,
              e
            ), l = ["children", "" + i]) : Tr.hasOwnProperty(o) && i != null && o === "onScroll" && pe("scroll", r);
          }
          switch (n) {
            case "input":
              is(r), bi(r, a, !0);
              break;
            case "textarea":
              is(r), ji(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = Ys);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = gd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Nt] = t, e[Wr] = r, $u(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = _a(n, r), n) {
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
                for (l = 0; l < xr.length; l++) pe(xr[l], e);
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
                ki(e, r), l = ha(e, r), pe("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = we({}, r, { value: void 0 }), pe("invalid", e);
                break;
              case "textarea":
                Si(e, r), l = va(e, r), pe("invalid", e);
                break;
              default:
                l = r;
            }
            xa(n, l), i = l;
            for (a in i) if (i.hasOwnProperty(a)) {
              var c = i[a];
              a === "style" ? wd(e, c) : a === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && yd(e, c)) : a === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Lr(e, c) : typeof c == "number" && Lr(e, "" + c) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Tr.hasOwnProperty(a) ? c != null && a === "onScroll" && pe("scroll", e) : c != null && mo(e, a, c, o));
            }
            switch (n) {
              case "input":
                is(e), bi(e, r, !1);
                break;
              case "textarea":
                is(e), ji(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ln(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? Wn(e, !!r.multiple, a, !1) : r.defaultValue != null && Wn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Ys);
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
      return Oe(t), null;
    case 6:
      if (e && t.stateNode != null) Uu(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(H(166));
        if (n = gn(Vr.current), gn(Mt.current), ys(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Nt] = t, (a = r.nodeValue !== n) && (e = rt, e !== null)) switch (e.tag) {
            case 3:
              gs(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && gs(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Nt] = t, t.stateNode = r;
      }
      return Oe(t), null;
    case 13:
      if (he(ye), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ge && nt !== null && t.mode & 1 && !(t.flags & 128)) au(), Yn(), t.flags |= 98560, a = !1;
        else if (a = ys(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error(H(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(H(317));
            a[Nt] = t;
          } else Yn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Oe(t), a = !1;
        } else xt !== null && (to(xt), xt = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ye.current & 1 ? je === 0 && (je = 3) : qo())), t.updateQueue !== null && (t.flags |= 4), Oe(t), null);
    case 4:
      return Zn(), Ka(e, t), e === null && Fr(t.stateNode.containerInfo), Oe(t), null;
    case 10:
      return Lo(t.type._context), Oe(t), null;
    case 17:
      return Xe(t.type) && Xs(), Oe(t), null;
    case 19:
      if (he(ye), a = t.memoizedState, a === null) return Oe(t), null;
      if (r = (t.flags & 128) !== 0, o = a.rendering, o === null) if (r) pr(a, !1);
      else {
        if (je !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = sl(e), o !== null) {
            for (t.flags |= 128, pr(a, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return fe(ye, ye.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && _e() > er && (t.flags |= 128, r = !0, pr(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = sl(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), pr(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !ge) return Oe(t), null;
        } else 2 * _e() - a.renderingStartTime > er && n !== 1073741824 && (t.flags |= 128, r = !0, pr(a, !1), t.lanes = 4194304);
        a.isBackwards ? (o.sibling = t.child, t.child = o) : (n = a.last, n !== null ? n.sibling = o : t.child = o, a.last = o);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = _e(), t.sibling = null, n = ye.current, fe(ye, r ? n & 1 | 2 : n & 1), t) : (Oe(t), null);
    case 22:
    case 23:
      return Go(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? et & 1073741824 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Oe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(H(156, t.tag));
}
function yh(e, t) {
  switch (No(t), t.tag) {
    case 1:
      return Xe(t.type) && Xs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Zn(), he(Ye), he(Fe), Oo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Po(t), null;
    case 13:
      if (he(ye), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(H(340));
        Yn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return he(ye), null;
    case 4:
      return Zn(), null;
    case 10:
      return Lo(t.type._context), null;
    case 22:
    case 23:
      return Go(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var xs = !1, ze = !1, vh = typeof WeakSet == "function" ? WeakSet : Set, q = null;
function Fn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    xe(e, t, r);
  }
  else n.current = null;
}
function Ga(e, t, n) {
  try {
    n();
  } catch (r) {
    xe(e, t, r);
  }
}
var pc = !1;
function wh(e, t) {
  if (Ta = Ks, e = Kd(), Co(e)) {
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
        var o = 0, i = -1, c = -1, d = 0, h = 0, v = e, g = null;
        t: for (; ; ) {
          for (var j; v !== n || l !== 0 && v.nodeType !== 3 || (i = o + l), v !== a || r !== 0 && v.nodeType !== 3 || (c = o + r), v.nodeType === 3 && (o += v.nodeValue.length), (j = v.firstChild) !== null; )
            g = v, v = j;
          for (; ; ) {
            if (v === e) break t;
            if (g === n && ++d === l && (i = o), g === a && ++h === r && (c = o), (j = v.nextSibling) !== null) break;
            v = g, g = v.parentNode;
          }
          v = j;
        }
        n = i === -1 || c === -1 ? null : { start: i, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (La = { focusedElem: e, selectionRange: n }, Ks = !1, q = t; q !== null; ) if (t = q, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, q = e;
  else for (; q !== null; ) {
    t = q;
    try {
      var x = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (x !== null) {
            var _ = x.memoizedProps, b = x.memoizedState, f = t.stateNode, m = f.getSnapshotBeforeUpdate(t.elementType === t.type ? _ : vt(t.type, _), b);
            f.__reactInternalSnapshotBeforeUpdate = m;
          }
          break;
        case 3:
          var u = t.stateNode.containerInfo;
          u.nodeType === 1 ? u.textContent = "" : u.nodeType === 9 && u.documentElement && u.removeChild(u.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(H(163));
      }
    } catch (w) {
      xe(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, q = e;
      break;
    }
    q = t.return;
  }
  return x = pc, pc = !1, x;
}
function Er(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var a = l.destroy;
        l.destroy = void 0, a !== void 0 && Ga(t, n, a);
      }
      l = l.next;
    } while (l !== r);
  }
}
function kl(e, t) {
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
function qa(e) {
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
function Vu(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Vu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Nt], delete t[Wr], delete t[Ra], delete t[th], delete t[nh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Bu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function hc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Bu(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ya(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ys));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ya(e, t, n), e = e.sibling; e !== null; ) Ya(e, t, n), e = e.sibling;
}
function Xa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Xa(e, t, n), e = e.sibling; e !== null; ) Xa(e, t, n), e = e.sibling;
}
var Me = null, wt = !1;
function Bt(e, t, n) {
  for (n = n.child; n !== null; ) Qu(e, t, n), n = n.sibling;
}
function Qu(e, t, n) {
  if (It && typeof It.onCommitFiberUnmount == "function") try {
    It.onCommitFiberUnmount(pl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ze || Fn(n, t);
    case 6:
      var r = Me, l = wt;
      Me = null, Bt(e, t, n), Me = r, wt = l, Me !== null && (wt ? (e = Me, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Me.removeChild(n.stateNode));
      break;
    case 18:
      Me !== null && (wt ? (e = Me, n = n.stateNode, e.nodeType === 8 ? ql(e.parentNode, n) : e.nodeType === 1 && ql(e, n), Pr(e)) : ql(Me, n.stateNode));
      break;
    case 4:
      r = Me, l = wt, Me = n.stateNode.containerInfo, wt = !0, Bt(e, t, n), Me = r, wt = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ze && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var a = l, o = a.destroy;
          a = a.tag, o !== void 0 && (a & 2 || a & 4) && Ga(n, t, o), l = l.next;
        } while (l !== r);
      }
      Bt(e, t, n);
      break;
    case 1:
      if (!ze && (Fn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (i) {
        xe(n, t, i);
      }
      Bt(e, t, n);
      break;
    case 21:
      Bt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ze = (r = ze) || n.memoizedState !== null, Bt(e, t, n), ze = r) : Bt(e, t, n);
      break;
    default:
      Bt(e, t, n);
  }
}
function gc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new vh()), t.forEach(function(r) {
      var l = Nh.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function gt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var a = e, o = t, i = o;
      e: for (; i !== null; ) {
        switch (i.tag) {
          case 5:
            Me = i.stateNode, wt = !1;
            break e;
          case 3:
            Me = i.stateNode.containerInfo, wt = !0;
            break e;
          case 4:
            Me = i.stateNode.containerInfo, wt = !0;
            break e;
        }
        i = i.return;
      }
      if (Me === null) throw Error(H(160));
      Qu(a, o, l), Me = null, wt = !1;
      var c = l.alternate;
      c !== null && (c.return = null), l.return = null;
    } catch (d) {
      xe(l, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Hu(t, e), t = t.sibling;
}
function Hu(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (gt(t, e), Ct(e), r & 4) {
        try {
          Er(3, e, e.return), kl(3, e);
        } catch (_) {
          xe(e, e.return, _);
        }
        try {
          Er(5, e, e.return);
        } catch (_) {
          xe(e, e.return, _);
        }
      }
      break;
    case 1:
      gt(t, e), Ct(e), r & 512 && n !== null && Fn(n, n.return);
      break;
    case 5:
      if (gt(t, e), Ct(e), r & 512 && n !== null && Fn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Lr(l, "");
        } catch (_) {
          xe(e, e.return, _);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var a = e.memoizedProps, o = n !== null ? n.memoizedProps : a, i = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          i === "input" && a.type === "radio" && a.name != null && pd(l, a), _a(i, o);
          var d = _a(i, a);
          for (o = 0; o < c.length; o += 2) {
            var h = c[o], v = c[o + 1];
            h === "style" ? wd(l, v) : h === "dangerouslySetInnerHTML" ? yd(l, v) : h === "children" ? Lr(l, v) : mo(l, h, v, d);
          }
          switch (i) {
            case "input":
              ga(l, a);
              break;
            case "textarea":
              hd(l, a);
              break;
            case "select":
              var g = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!a.multiple;
              var j = a.value;
              j != null ? Wn(l, !!a.multiple, j, !1) : g !== !!a.multiple && (a.defaultValue != null ? Wn(
                l,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : Wn(l, !!a.multiple, a.multiple ? [] : "", !1));
          }
          l[Wr] = a;
        } catch (_) {
          xe(e, e.return, _);
        }
      }
      break;
    case 6:
      if (gt(t, e), Ct(e), r & 4) {
        if (e.stateNode === null) throw Error(H(162));
        l = e.stateNode, a = e.memoizedProps;
        try {
          l.nodeValue = a;
        } catch (_) {
          xe(e, e.return, _);
        }
      }
      break;
    case 3:
      if (gt(t, e), Ct(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Pr(t.containerInfo);
      } catch (_) {
        xe(e, e.return, _);
      }
      break;
    case 4:
      gt(t, e), Ct(e);
      break;
    case 13:
      gt(t, e), Ct(e), l = e.child, l.flags & 8192 && (a = l.memoizedState !== null, l.stateNode.isHidden = a, !a || l.alternate !== null && l.alternate.memoizedState !== null || (Ho = _e())), r & 4 && gc(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (ze = (d = ze) || h, gt(t, e), ze = d) : gt(t, e), Ct(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !h && e.mode & 1) for (q = e, h = e.child; h !== null; ) {
          for (v = q = h; q !== null; ) {
            switch (g = q, j = g.child, g.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Er(4, g, g.return);
                break;
              case 1:
                Fn(g, g.return);
                var x = g.stateNode;
                if (typeof x.componentWillUnmount == "function") {
                  r = g, n = g.return;
                  try {
                    t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                  } catch (_) {
                    xe(r, n, _);
                  }
                }
                break;
              case 5:
                Fn(g, g.return);
                break;
              case 22:
                if (g.memoizedState !== null) {
                  vc(v);
                  continue;
                }
            }
            j !== null ? (j.return = g, q = j) : vc(v);
          }
          h = h.sibling;
        }
        e: for (h = null, v = e; ; ) {
          if (v.tag === 5) {
            if (h === null) {
              h = v;
              try {
                l = v.stateNode, d ? (a = l.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (i = v.stateNode, c = v.memoizedProps.style, o = c != null && c.hasOwnProperty("display") ? c.display : null, i.style.display = vd("display", o));
              } catch (_) {
                xe(e, e.return, _);
              }
            }
          } else if (v.tag === 6) {
            if (h === null) try {
              v.stateNode.nodeValue = d ? "" : v.memoizedProps;
            } catch (_) {
              xe(e, e.return, _);
            }
          } else if ((v.tag !== 22 && v.tag !== 23 || v.memoizedState === null || v === e) && v.child !== null) {
            v.child.return = v, v = v.child;
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            h === v && (h = null), v = v.return;
          }
          h === v && (h = null), v.sibling.return = v.return, v = v.sibling;
        }
      }
      break;
    case 19:
      gt(t, e), Ct(e), r & 4 && gc(e);
      break;
    case 21:
      break;
    default:
      gt(
        t,
        e
      ), Ct(e);
  }
}
function Ct(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Bu(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(H(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Lr(l, ""), r.flags &= -33);
          var a = hc(e);
          Xa(e, a, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, i = hc(e);
          Ya(e, i, o);
          break;
        default:
          throw Error(H(161));
      }
    } catch (c) {
      xe(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function xh(e, t, n) {
  q = e, Ku(e);
}
function Ku(e, t, n) {
  for (var r = (e.mode & 1) !== 0; q !== null; ) {
    var l = q, a = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || xs;
      if (!o) {
        var i = l.alternate, c = i !== null && i.memoizedState !== null || ze;
        i = xs;
        var d = ze;
        if (xs = o, (ze = c) && !d) for (q = l; q !== null; ) o = q, c = o.child, o.tag === 22 && o.memoizedState !== null ? wc(l) : c !== null ? (c.return = o, q = c) : wc(l);
        for (; a !== null; ) q = a, Ku(a), a = a.sibling;
        q = l, xs = i, ze = d;
      }
      yc(e);
    } else l.subtreeFlags & 8772 && a !== null ? (a.return = l, q = a) : yc(e);
  }
}
function yc(e) {
  for (; q !== null; ) {
    var t = q;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ze || kl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ze) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : vt(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && tc(t, a, r);
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
              tc(t, o, n);
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
                var h = d.memoizedState;
                if (h !== null) {
                  var v = h.dehydrated;
                  v !== null && Pr(v);
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
            throw Error(H(163));
        }
        ze || t.flags & 512 && qa(t);
      } catch (g) {
        xe(t, t.return, g);
      }
    }
    if (t === e) {
      q = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, q = n;
      break;
    }
    q = t.return;
  }
}
function vc(e) {
  for (; q !== null; ) {
    var t = q;
    if (t === e) {
      q = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, q = n;
      break;
    }
    q = t.return;
  }
}
function wc(e) {
  for (; q !== null; ) {
    var t = q;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            kl(4, t);
          } catch (c) {
            xe(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              xe(t, l, c);
            }
          }
          var a = t.return;
          try {
            qa(t);
          } catch (c) {
            xe(t, a, c);
          }
          break;
        case 5:
          var o = t.return;
          try {
            qa(t);
          } catch (c) {
            xe(t, o, c);
          }
      }
    } catch (c) {
      xe(t, t.return, c);
    }
    if (t === e) {
      q = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      i.return = t.return, q = i;
      break;
    }
    q = t.return;
  }
}
var _h = Math.ceil, ol = Ut.ReactCurrentDispatcher, Bo = Ut.ReactCurrentOwner, ft = Ut.ReactCurrentBatchConfig, ae = 0, Ne = null, be = null, Te = 0, et = 0, $n = dn(0), je = 0, Kr = null, bn = 0, bl = 0, Qo = 0, Nr = null, Ke = null, Ho = 0, er = 1 / 0, Lt = null, il = !1, Za = null, nn = null, _s = !1, Yt = null, cl = 0, Ir = 0, Ja = null, Ps = -1, Os = 0;
function We() {
  return ae & 6 ? _e() : Ps !== -1 ? Ps : Ps = _e();
}
function rn(e) {
  return e.mode & 1 ? ae & 2 && Te !== 0 ? Te & -Te : sh.transition !== null ? (Os === 0 && (Os = Td()), Os) : (e = oe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : zd(e.type)), e) : 1;
}
function bt(e, t, n, r) {
  if (50 < Ir) throw Ir = 0, Ja = null, Error(H(185));
  es(e, n, r), (!(ae & 2) || e !== Ne) && (e === Ne && (!(ae & 2) && (bl |= n), je === 4 && Gt(e, Te)), Ze(e, r), n === 1 && ae === 0 && !(t.mode & 1) && (er = _e() + 500, wl && un()));
}
function Ze(e, t) {
  var n = e.callbackNode;
  sp(e, t);
  var r = Hs(e, e === Ne ? Te : 0);
  if (r === 0) n !== null && Ni(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Ni(n), t === 1) e.tag === 0 ? rh(xc.bind(null, e)) : ru(xc.bind(null, e)), Jp(function() {
      !(ae & 6) && un();
    }), n = null;
    else {
      switch (Ld(r)) {
        case 1:
          n = vo;
          break;
        case 4:
          n = Id;
          break;
        case 16:
          n = Qs;
          break;
        case 536870912:
          n = Md;
          break;
        default:
          n = Qs;
      }
      n = tf(n, Gu.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Gu(e, t) {
  if (Ps = -1, Os = 0, ae & 6) throw Error(H(327));
  var n = e.callbackNode;
  if (Hn() && e.callbackNode !== n) return null;
  var r = Hs(e, e === Ne ? Te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = dl(e, r);
  else {
    t = r;
    var l = ae;
    ae |= 2;
    var a = Yu();
    (Ne !== e || Te !== t) && (Lt = null, er = _e() + 500, vn(e, t));
    do
      try {
        Sh();
        break;
      } catch (i) {
        qu(e, i);
      }
    while (!0);
    To(), ol.current = a, ae = l, be !== null ? t = 0 : (Ne = null, Te = 0, t = je);
  }
  if (t !== 0) {
    if (t === 2 && (l = Ca(e), l !== 0 && (r = l, t = eo(e, l))), t === 1) throw n = Kr, vn(e, 0), Gt(e, r), Ze(e, _e()), n;
    if (t === 6) Gt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !kh(l) && (t = dl(e, r), t === 2 && (a = Ca(e), a !== 0 && (r = a, t = eo(e, a))), t === 1)) throw n = Kr, vn(e, 0), Gt(e, r), Ze(e, _e()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(H(345));
        case 2:
          mn(e, Ke, Lt);
          break;
        case 3:
          if (Gt(e, r), (r & 130023424) === r && (t = Ho + 500 - _e(), 10 < t)) {
            if (Hs(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              We(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Da(mn.bind(null, e, Ke, Lt), t);
            break;
          }
          mn(e, Ke, Lt);
          break;
        case 4:
          if (Gt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - kt(r);
            a = 1 << o, o = t[o], o > l && (l = o), r &= ~a;
          }
          if (r = l, r = _e() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * _h(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Da(mn.bind(null, e, Ke, Lt), r);
            break;
          }
          mn(e, Ke, Lt);
          break;
        case 5:
          mn(e, Ke, Lt);
          break;
        default:
          throw Error(H(329));
      }
    }
  }
  return Ze(e, _e()), e.callbackNode === n ? Gu.bind(null, e) : null;
}
function eo(e, t) {
  var n = Nr;
  return e.current.memoizedState.isDehydrated && (vn(e, t).flags |= 256), e = dl(e, t), e !== 2 && (t = Ke, Ke = n, t !== null && to(t)), e;
}
function to(e) {
  Ke === null ? Ke = e : Ke.push.apply(Ke, e);
}
function kh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], a = l.getSnapshot;
        l = l.value;
        try {
          if (!St(a(), l)) return !1;
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
function Gt(e, t) {
  for (t &= ~Qo, t &= ~bl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - kt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function xc(e) {
  if (ae & 6) throw Error(H(327));
  Hn();
  var t = Hs(e, 0);
  if (!(t & 1)) return Ze(e, _e()), null;
  var n = dl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ca(e);
    r !== 0 && (t = r, n = eo(e, r));
  }
  if (n === 1) throw n = Kr, vn(e, 0), Gt(e, t), Ze(e, _e()), n;
  if (n === 6) throw Error(H(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, mn(e, Ke, Lt), Ze(e, _e()), null;
}
function Ko(e, t) {
  var n = ae;
  ae |= 1;
  try {
    return e(t);
  } finally {
    ae = n, ae === 0 && (er = _e() + 500, wl && un());
  }
}
function Sn(e) {
  Yt !== null && Yt.tag === 0 && !(ae & 6) && Hn();
  var t = ae;
  ae |= 1;
  var n = ft.transition, r = oe;
  try {
    if (ft.transition = null, oe = 1, e) return e();
  } finally {
    oe = r, ft.transition = n, ae = t, !(ae & 6) && un();
  }
}
function Go() {
  et = $n.current, he($n);
}
function vn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Zp(n)), be !== null) for (n = be.return; n !== null; ) {
    var r = n;
    switch (No(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Xs();
        break;
      case 3:
        Zn(), he(Ye), he(Fe), Oo();
        break;
      case 5:
        Po(r);
        break;
      case 4:
        Zn();
        break;
      case 13:
        he(ye);
        break;
      case 19:
        he(ye);
        break;
      case 10:
        Lo(r.type._context);
        break;
      case 22:
      case 23:
        Go();
    }
    n = n.return;
  }
  if (Ne = e, be = e = sn(e.current, null), Te = et = t, je = 0, Kr = null, Qo = bl = bn = 0, Ke = Nr = null, hn !== null) {
    for (t = 0; t < hn.length; t++) if (n = hn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, a = n.pending;
      if (a !== null) {
        var o = a.next;
        a.next = l, r.next = o;
      }
      n.pending = r;
    }
    hn = null;
  }
  return e;
}
function qu(e, t) {
  do {
    var n = be;
    try {
      if (To(), As.current = al, ll) {
        for (var r = ve.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        ll = !1;
      }
      if (kn = 0, Ee = Se = ve = null, Cr = !1, Br = 0, Bo.current = null, n === null || n.return === null) {
        je = 1, Kr = t, be = null;
        break;
      }
      e: {
        var a = e, o = n.return, i = n, c = t;
        if (t = Te, i.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var d = c, h = i, v = h.tag;
          if (!(h.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var g = h.alternate;
            g ? (h.updateQueue = g.updateQueue, h.memoizedState = g.memoizedState, h.lanes = g.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var j = oc(o);
          if (j !== null) {
            j.flags &= -257, ic(j, o, i, a, t), j.mode & 1 && ac(a, d, t), t = j, c = d;
            var x = t.updateQueue;
            if (x === null) {
              var _ = /* @__PURE__ */ new Set();
              _.add(c), t.updateQueue = _;
            } else x.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              ac(a, d, t), qo();
              break e;
            }
            c = Error(H(426));
          }
        } else if (ge && i.mode & 1) {
          var b = oc(o);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256), ic(b, o, i, a, t), Io(Jn(c, i));
            break e;
          }
        }
        a = c = Jn(c, i), je !== 4 && (je = 2), Nr === null ? Nr = [a] : Nr.push(a), a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var f = Lu(a, c, t);
              ec(a, f);
              break e;
            case 1:
              i = c;
              var m = a.type, u = a.stateNode;
              if (!(a.flags & 128) && (typeof m.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (nn === null || !nn.has(u)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var w = Au(a, i, t);
                ec(a, w);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      Zu(n);
    } catch (k) {
      t = k, be === n && n !== null && (be = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Yu() {
  var e = ol.current;
  return ol.current = al, e === null ? al : e;
}
function qo() {
  (je === 0 || je === 3 || je === 2) && (je = 4), Ne === null || !(bn & 268435455) && !(bl & 268435455) || Gt(Ne, Te);
}
function dl(e, t) {
  var n = ae;
  ae |= 2;
  var r = Yu();
  (Ne !== e || Te !== t) && (Lt = null, vn(e, t));
  do
    try {
      bh();
      break;
    } catch (l) {
      qu(e, l);
    }
  while (!0);
  if (To(), ae = n, ol.current = r, be !== null) throw Error(H(261));
  return Ne = null, Te = 0, je;
}
function bh() {
  for (; be !== null; ) Xu(be);
}
function Sh() {
  for (; be !== null && !qm(); ) Xu(be);
}
function Xu(e) {
  var t = ef(e.alternate, e, et);
  e.memoizedProps = e.pendingProps, t === null ? Zu(e) : be = t, Bo.current = null;
}
function Zu(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = yh(n, t), n !== null) {
        n.flags &= 32767, be = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        je = 6, be = null;
        return;
      }
    } else if (n = gh(n, t, et), n !== null) {
      be = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      be = t;
      return;
    }
    be = t = e;
  } while (t !== null);
  je === 0 && (je = 5);
}
function mn(e, t, n) {
  var r = oe, l = ft.transition;
  try {
    ft.transition = null, oe = 1, jh(e, t, n, r);
  } finally {
    ft.transition = l, oe = r;
  }
  return null;
}
function jh(e, t, n, r) {
  do
    Hn();
  while (Yt !== null);
  if (ae & 6) throw Error(H(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(H(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (lp(e, a), e === Ne && (be = Ne = null, Te = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || _s || (_s = !0, tf(Qs, function() {
    return Hn(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = ft.transition, ft.transition = null;
    var o = oe;
    oe = 1;
    var i = ae;
    ae |= 4, Bo.current = null, wh(e, n), Hu(n, e), Qp(La), Ks = !!Ta, La = Ta = null, e.current = n, xh(n), Ym(), ae = i, oe = o, ft.transition = a;
  } else e.current = n;
  if (_s && (_s = !1, Yt = e, cl = l), a = e.pendingLanes, a === 0 && (nn = null), Jm(n.stateNode), Ze(e, _e()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (il) throw il = !1, e = Za, Za = null, e;
  return cl & 1 && e.tag !== 0 && Hn(), a = e.pendingLanes, a & 1 ? e === Ja ? Ir++ : (Ir = 0, Ja = e) : Ir = 0, un(), null;
}
function Hn() {
  if (Yt !== null) {
    var e = Ld(cl), t = ft.transition, n = oe;
    try {
      if (ft.transition = null, oe = 16 > e ? 16 : e, Yt === null) var r = !1;
      else {
        if (e = Yt, Yt = null, cl = 0, ae & 6) throw Error(H(331));
        var l = ae;
        for (ae |= 4, q = e.current; q !== null; ) {
          var a = q, o = a.child;
          if (q.flags & 16) {
            var i = a.deletions;
            if (i !== null) {
              for (var c = 0; c < i.length; c++) {
                var d = i[c];
                for (q = d; q !== null; ) {
                  var h = q;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Er(8, h, a);
                  }
                  var v = h.child;
                  if (v !== null) v.return = h, q = v;
                  else for (; q !== null; ) {
                    h = q;
                    var g = h.sibling, j = h.return;
                    if (Vu(h), h === d) {
                      q = null;
                      break;
                    }
                    if (g !== null) {
                      g.return = j, q = g;
                      break;
                    }
                    q = j;
                  }
                }
              }
              var x = a.alternate;
              if (x !== null) {
                var _ = x.child;
                if (_ !== null) {
                  x.child = null;
                  do {
                    var b = _.sibling;
                    _.sibling = null, _ = b;
                  } while (_ !== null);
                }
              }
              q = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) o.return = a, q = o;
          else e: for (; q !== null; ) {
            if (a = q, a.flags & 2048) switch (a.tag) {
              case 0:
              case 11:
              case 15:
                Er(9, a, a.return);
            }
            var f = a.sibling;
            if (f !== null) {
              f.return = a.return, q = f;
              break e;
            }
            q = a.return;
          }
        }
        var m = e.current;
        for (q = m; q !== null; ) {
          o = q;
          var u = o.child;
          if (o.subtreeFlags & 2064 && u !== null) u.return = o, q = u;
          else e: for (o = m; q !== null; ) {
            if (i = q, i.flags & 2048) try {
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  kl(9, i);
              }
            } catch (k) {
              xe(i, i.return, k);
            }
            if (i === o) {
              q = null;
              break e;
            }
            var w = i.sibling;
            if (w !== null) {
              w.return = i.return, q = w;
              break e;
            }
            q = i.return;
          }
        }
        if (ae = l, un(), It && typeof It.onPostCommitFiberRoot == "function") try {
          It.onPostCommitFiberRoot(pl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      oe = n, ft.transition = t;
    }
  }
  return !1;
}
function _c(e, t, n) {
  t = Jn(n, t), t = Lu(e, t, 1), e = tn(e, t, 1), t = We(), e !== null && (es(e, 1, t), Ze(e, t));
}
function xe(e, t, n) {
  if (e.tag === 3) _c(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      _c(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (nn === null || !nn.has(r))) {
        e = Jn(n, e), e = Au(t, e, 1), t = tn(t, e, 1), e = We(), t !== null && (es(t, 1, e), Ze(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Ch(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = We(), e.pingedLanes |= e.suspendedLanes & n, Ne === e && (Te & n) === n && (je === 4 || je === 3 && (Te & 130023424) === Te && 500 > _e() - Ho ? vn(e, 0) : Qo |= n), Ze(e, t);
}
function Ju(e, t) {
  t === 0 && (e.mode & 1 ? (t = us, us <<= 1, !(us & 130023424) && (us = 4194304)) : t = 1);
  var n = We();
  e = Ft(e, t), e !== null && (es(e, t, n), Ze(e, n));
}
function Eh(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Ju(e, n);
}
function Nh(e, t) {
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
      throw Error(H(314));
  }
  r !== null && r.delete(t), Ju(e, n);
}
var ef;
ef = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ye.current) qe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return qe = !1, hh(e, t, n);
    qe = !!(e.flags & 131072);
  }
  else qe = !1, ge && t.flags & 1048576 && su(t, el, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Rs(e, t), e = t.pendingProps;
      var l = qn(t, Fe.current);
      Qn(t, n), l = Fo(null, t, r, e, l, n);
      var a = $o();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Xe(r) ? (a = !0, Zs(t)) : a = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Do(t), l.updater = _l, t.stateNode = l, l._reactInternals = t, Wa(t, r, e, n), t = Ba(null, t, r, !0, a, n)) : (t.tag = 0, ge && a && Eo(t), $e(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Rs(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Mh(r), e = vt(r, e), l) {
          case 0:
            t = Va(null, t, r, e, n);
            break e;
          case 1:
            t = uc(null, t, r, e, n);
            break e;
          case 11:
            t = cc(null, t, r, e, n);
            break e;
          case 14:
            t = dc(null, t, r, vt(r.type, e), n);
            break e;
        }
        throw Error(H(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : vt(r, l), Va(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : vt(r, l), uc(e, t, r, l, n);
    case 3:
      e: {
        if (Ou(t), e === null) throw Error(H(387));
        r = t.pendingProps, a = t.memoizedState, l = a.element, du(e, t), rl(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          l = Jn(Error(H(423)), t), t = fc(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = Jn(Error(H(424)), t), t = fc(e, t, r, n, l);
          break e;
        } else for (nt = en(t.stateNode.containerInfo.firstChild), rt = t, ge = !0, xt = null, n = iu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Yn(), r === l) {
            t = $t(e, t, n);
            break e;
          }
          $e(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return uu(t), e === null && za(t), r = t.type, l = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = l.children, Aa(r, l) ? o = null : a !== null && Aa(r, a) && (t.flags |= 32), Pu(e, t), $e(e, t, o, n), t.child;
    case 6:
      return e === null && za(t), null;
    case 13:
      return zu(e, t, n);
    case 4:
      return Ro(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Xn(t, null, r, n) : $e(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : vt(r, l), cc(e, t, r, l, n);
    case 7:
      return $e(e, t, t.pendingProps, n), t.child;
    case 8:
      return $e(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return $e(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, a = t.memoizedProps, o = l.value, fe(tl, r._currentValue), r._currentValue = o, a !== null) if (St(a.value, o)) {
          if (a.children === l.children && !Ye.current) {
            t = $t(e, t, n);
            break e;
          }
        } else for (a = t.child, a !== null && (a.return = t); a !== null; ) {
          var i = a.dependencies;
          if (i !== null) {
            o = a.child;
            for (var c = i.firstContext; c !== null; ) {
              if (c.context === r) {
                if (a.tag === 1) {
                  c = Pt(-1, n & -n), c.tag = 2;
                  var d = a.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var h = d.pending;
                    h === null ? c.next = c : (c.next = h.next, h.next = c), d.pending = c;
                  }
                }
                a.lanes |= n, c = a.alternate, c !== null && (c.lanes |= n), Fa(
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
            if (o = a.return, o === null) throw Error(H(341));
            o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), Fa(o, n, t), o = a.sibling;
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
        $e(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, Qn(t, n), l = pt(l), r = r(l), t.flags |= 1, $e(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = vt(r, t.pendingProps), l = vt(r.type, l), dc(e, t, r, l, n);
    case 15:
      return Du(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : vt(r, l), Rs(e, t), t.tag = 1, Xe(r) ? (e = !0, Zs(t)) : e = !1, Qn(t, n), Tu(t, r, l), Wa(t, r, l, n), Ba(null, t, r, !0, e, n);
    case 19:
      return Fu(e, t, n);
    case 22:
      return Ru(e, t, n);
  }
  throw Error(H(156, t.tag));
};
function tf(e, t) {
  return Nd(e, t);
}
function Ih(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ut(e, t, n, r) {
  return new Ih(e, t, n, r);
}
function Yo(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Mh(e) {
  if (typeof e == "function") return Yo(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ho) return 11;
    if (e === go) return 14;
  }
  return 2;
}
function sn(e, t) {
  var n = e.alternate;
  return n === null ? (n = ut(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function zs(e, t, n, r, l, a) {
  var o = 2;
  if (r = e, typeof e == "function") Yo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Mn:
      return wn(n.children, l, a, t);
    case po:
      o = 8, l |= 8;
      break;
    case ua:
      return e = ut(12, n, t, l | 2), e.elementType = ua, e.lanes = a, e;
    case fa:
      return e = ut(13, n, t, l), e.elementType = fa, e.lanes = a, e;
    case ma:
      return e = ut(19, n, t, l), e.elementType = ma, e.lanes = a, e;
    case ud:
      return Sl(n, l, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case cd:
          o = 10;
          break e;
        case dd:
          o = 9;
          break e;
        case ho:
          o = 11;
          break e;
        case go:
          o = 14;
          break e;
        case Qt:
          o = 16, r = null;
          break e;
      }
      throw Error(H(130, e == null ? e : typeof e, ""));
  }
  return t = ut(o, n, t, l), t.elementType = e, t.type = r, t.lanes = a, t;
}
function wn(e, t, n, r) {
  return e = ut(7, e, r, t), e.lanes = n, e;
}
function Sl(e, t, n, r) {
  return e = ut(22, e, r, t), e.elementType = ud, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ra(e, t, n) {
  return e = ut(6, e, null, t), e.lanes = n, e;
}
function sa(e, t, n) {
  return t = ut(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Th(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = zl(0), this.expirationTimes = zl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = zl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Xo(e, t, n, r, l, a, o, i, c) {
  return e = new Th(e, t, n, i, c), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = ut(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Do(a), e;
}
function Lh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: In, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function nf(e) {
  if (!e) return an;
  e = e._reactInternals;
  e: {
    if (Cn(e) !== e || e.tag !== 1) throw Error(H(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Xe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(H(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Xe(n)) return nu(e, n, t);
  }
  return t;
}
function rf(e, t, n, r, l, a, o, i, c) {
  return e = Xo(n, r, !0, e, l, a, o, i, c), e.context = nf(null), n = e.current, r = We(), l = rn(n), a = Pt(r, l), a.callback = t ?? null, tn(n, a, l), e.current.lanes = l, es(e, l, r), Ze(e, r), e;
}
function jl(e, t, n, r) {
  var l = t.current, a = We(), o = rn(l);
  return n = nf(n), t.context === null ? t.context = n : t.pendingContext = n, t = Pt(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = tn(l, t, o), e !== null && (bt(e, l, o, a), Ls(e, l, o)), o;
}
function ul(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function kc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Zo(e, t) {
  kc(e, t), (e = e.alternate) && kc(e, t);
}
function Ah() {
  return null;
}
var sf = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Jo(e) {
  this._internalRoot = e;
}
Cl.prototype.render = Jo.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(H(409));
  jl(e, t, null, null);
};
Cl.prototype.unmount = Jo.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Sn(function() {
      jl(null, e, null, null);
    }), t[zt] = null;
  }
};
function Cl(e) {
  this._internalRoot = e;
}
Cl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Rd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Kt.length && t !== 0 && t < Kt[n].priority; n++) ;
    Kt.splice(n, 0, e), n === 0 && Od(e);
  }
};
function ei(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function El(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function bc() {
}
function Dh(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var d = ul(o);
        a.call(d);
      };
    }
    var o = rf(t, r, e, 0, null, !1, !1, "", bc);
    return e._reactRootContainer = o, e[zt] = o.current, Fr(e.nodeType === 8 ? e.parentNode : e), Sn(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var d = ul(c);
      i.call(d);
    };
  }
  var c = Xo(e, 0, !1, null, null, !1, !1, "", bc);
  return e._reactRootContainer = c, e[zt] = c.current, Fr(e.nodeType === 8 ? e.parentNode : e), Sn(function() {
    jl(t, c, n, r);
  }), c;
}
function Nl(e, t, n, r, l) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof l == "function") {
      var i = l;
      l = function() {
        var c = ul(o);
        i.call(c);
      };
    }
    jl(t, o, e, l);
  } else o = Dh(n, t, e, l, r);
  return ul(o);
}
Ad = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = wr(t.pendingLanes);
        n !== 0 && (wo(t, n | 1), Ze(t, _e()), !(ae & 6) && (er = _e() + 500, un()));
      }
      break;
    case 13:
      Sn(function() {
        var r = Ft(e, 1);
        if (r !== null) {
          var l = We();
          bt(r, e, 1, l);
        }
      }), Zo(e, 1);
  }
};
xo = function(e) {
  if (e.tag === 13) {
    var t = Ft(e, 134217728);
    if (t !== null) {
      var n = We();
      bt(t, e, 134217728, n);
    }
    Zo(e, 134217728);
  }
};
Dd = function(e) {
  if (e.tag === 13) {
    var t = rn(e), n = Ft(e, t);
    if (n !== null) {
      var r = We();
      bt(n, e, t, r);
    }
    Zo(e, t);
  }
};
Rd = function() {
  return oe;
};
Pd = function(e, t) {
  var n = oe;
  try {
    return oe = e, t();
  } finally {
    oe = n;
  }
};
ba = function(e, t, n) {
  switch (t) {
    case "input":
      if (ga(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = vl(r);
            if (!l) throw Error(H(90));
            md(r), ga(r, l);
          }
        }
      }
      break;
    case "textarea":
      hd(e, n);
      break;
    case "select":
      t = n.value, t != null && Wn(e, !!n.multiple, t, !1);
  }
};
kd = Ko;
bd = Sn;
var Rh = { usingClientEntryPoint: !1, Events: [ns, Dn, vl, xd, _d, Ko] }, hr = { findFiberByHostInstance: pn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Ph = { bundleType: hr.bundleType, version: hr.version, rendererPackageName: hr.rendererPackageName, rendererConfig: hr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ut.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Cd(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: hr.findFiberByHostInstance || Ah, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ks = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ks.isDisabled && ks.supportsFiber) try {
    pl = ks.inject(Ph), It = ks;
  } catch {
  }
}
lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rh;
lt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ei(t)) throw Error(H(200));
  return Lh(e, t, null, n);
};
lt.createRoot = function(e, t) {
  if (!ei(e)) throw Error(H(299));
  var n = !1, r = "", l = sf;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Xo(e, 1, !1, null, null, n, !1, r, l), e[zt] = t.current, Fr(e.nodeType === 8 ? e.parentNode : e), new Jo(t);
};
lt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(H(188)) : (e = Object.keys(e).join(","), Error(H(268, e)));
  return e = Cd(t), e = e === null ? null : e.stateNode, e;
};
lt.flushSync = function(e) {
  return Sn(e);
};
lt.hydrate = function(e, t, n) {
  if (!El(t)) throw Error(H(200));
  return Nl(null, e, t, !0, n);
};
lt.hydrateRoot = function(e, t, n) {
  if (!ei(e)) throw Error(H(405));
  var r = n != null && n.hydratedSources || null, l = !1, a = "", o = sf;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = rf(t, null, e, 1, n ?? null, l, !1, a, o), e[zt] = t.current, Fr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Cl(t);
};
lt.render = function(e, t, n) {
  if (!El(t)) throw Error(H(200));
  return Nl(null, e, t, !1, n);
};
lt.unmountComponentAtNode = function(e) {
  if (!El(e)) throw Error(H(40));
  return e._reactRootContainer ? (Sn(function() {
    Nl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[zt] = null;
    });
  }), !0) : !1;
};
lt.unstable_batchedUpdates = Ko;
lt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!El(n)) throw Error(H(200));
  if (e == null || e._reactInternals === void 0) throw Error(H(38));
  return Nl(e, t, n, !1, r);
};
lt.version = "18.3.1-next-f1338f8080-20240426";
function lf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lf);
    } catch (e) {
      console.error(e);
    }
}
lf(), ld.exports = lt;
var ue = ld.exports, af, Sc = ue;
af = Sc.createRoot, Sc.hydrateRoot;
var of = { exports: {} }, Il = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oh = p, zh = Symbol.for("react.element"), Fh = Symbol.for("react.fragment"), $h = Object.prototype.hasOwnProperty, Wh = Oh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Uh = { key: !0, ref: !0, __self: !0, __source: !0 };
function cf(e, t, n) {
  var r, l = {}, a = null, o = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) $h.call(t, r) && !Uh.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: zh, type: e, key: a, ref: o, props: l, _owner: Wh.current };
}
Il.Fragment = Fh;
Il.jsx = cf;
Il.jsxs = cf;
of.exports = Il;
var s = of.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Vh = {
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
const Bh = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), Z = (e, t) => {
  const n = p.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: o,
      className: i = "",
      children: c,
      ...d
    }, h) => p.createElement(
      "svg",
      {
        ref: h,
        ...Vh,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: o ? Number(a) * 24 / Number(l) : a,
        className: ["lucide", `lucide-${Bh(e)}`, i].join(" "),
        ...d
      },
      [
        ...t.map(([v, g]) => p.createElement(v, g)),
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
const ti = Z("AlertCircle", [
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
const Qh = Z("AlertTriangle", [
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
const Hh = Z("ArrowDownNarrowWide", [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "M11 4h4", key: "6d7r33" }],
  ["path", { d: "M11 8h7", key: "djye34" }],
  ["path", { d: "M11 12h10", key: "1438ji" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const df = Z("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kh = Z("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gh = Z("ArrowUpDown", [
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
const qh = Z("ArrowUpNarrowWide", [
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
  ["path", { d: "M11 12h4", key: "q8tih4" }],
  ["path", { d: "M11 16h7", key: "uosisv" }],
  ["path", { d: "M11 20h10", key: "jvxblo" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uf = Z("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ff = Z("BarChart2", [
  ["line", { x1: "18", x2: "18", y1: "20", y2: "10", key: "1xfpm4" }],
  ["line", { x1: "12", x2: "12", y1: "20", y2: "4", key: "be30l9" }],
  ["line", { x1: "6", x2: "6", y1: "20", y2: "14", key: "1r4le6" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yh = Z("Box", [
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
const Xh = Z("Calendar", [
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
const Zh = Z("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Je = Z("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jh = Z("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mf = Z("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ni = Z("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eg = Z("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yt = Z("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gr = Z("Download", [
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
const tg = Z("Eraser", [
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
const ri = Z("FileJson", [
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
const ng = Z("FileText", [
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
const rg = Z("Folder", [
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
const sg = Z("Info", [
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
const lg = Z("Lasso", [
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
const si = Z("LayoutGrid", [
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
const ag = Z("LayoutList", [
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
const og = Z("Link2Off", [
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
const ig = Z("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jc = Z("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cg = Z("Maximize", [
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
const dg = Z("Menu", [
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
const ug = Z("Minimize", [
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
const fg = Z("MoreVertical", [
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
const mg = Z("PanelBottom", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pf = Z("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qr = Z("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ml = Z("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tr = Z("RefreshCw", [
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
const pg = Z("ScanLine", [
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
const on = Z("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hf = Z("Settings", [
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
const gf = Z("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nr = Z("Star", [
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
const hg = Z("StickyNote", [
  ["path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z", key: "qazsjp" }],
  ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4", key: "40519r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ar = Z("Tag", [
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
const Wt = Z("Trash2", [
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
const gg = Z("Trash", [
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
const yg = Z("Type", [
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
const vg = Z("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11", key: "llx8ln" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wg = Z("Upload", [
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
const xg = Z("Workflow", [
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
const de = Z("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _g = Z("ZoomIn", [
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
const kg = Z("ZoomOut", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);
let fl = !1;
const bg = (e) => {
  fl = e, fl && console.log("[Meld] Logger initialized in DEV mode (COMFYUI_MELD_DEV=true).");
}, Sg = (...e) => {
  fl && console.log("[Meld]", ...e);
}, jg = (...e) => {
  fl && console.warn("[Meld]", ...e);
}, Cg = (...e) => {
  console.error("[Meld]", ...e);
}, $ = {
  log: Sg,
  warn: jg,
  error: Cg,
  init: bg
};
class bs extends tt.Component {
  constructor(n) {
    super(n);
    hi(this, "handleRetry", () => {
      var n, r;
      this.setState({ hasError: !1 }), (r = (n = this.props).onReset) == null || r.call(n);
    });
    this.state = { hasError: !1 };
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch(n, r) {
    $.error(
      `[ErrorBoundary] Uncaught error in section "${this.props.section}":`,
      n,
      r.componentStack
    );
  }
  render() {
    if (this.state.hasError) {
      const n = this.props.fallbackMessage ?? "An error occurred in this section.";
      return /* @__PURE__ */ s.jsxs("div", { className: "meld-error-boundary", children: [
        /* @__PURE__ */ s.jsx(ti, { className: "meld-error-boundary__icon", size: 20, "aria-hidden": "true" }),
        /* @__PURE__ */ s.jsx("p", { className: "meld-error-boundary__message", children: n }),
        /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-error-boundary__retry", onClick: this.handleRetry, children: "Retry" })
      ] });
    }
    return this.props.children;
  }
}
window.api = J;
function ss(e, t) {
  return e.ok ? e.data : t;
}
const li = (e) => typeof e == "object" && e !== null, ml = (e) => {
  if (typeof e == "string")
    return e;
  if (li(e) && typeof e.message == "string")
    return e.message;
};
async function ee(e) {
  if (!e.ok) {
    let n = `API error: ${e.status} ${e.statusText}`;
    try {
      const r = await e.json();
      r != null && r.error && (n = r.error);
    } catch {
    }
    return { ok: !1, error: n };
  }
  const t = await e.json();
  return t.success ? { ok: !0, data: t.data } : { ok: !1, error: t.error || t.message || "Unknown error" };
}
async function ai(e) {
  let t;
  try {
    t = await e.json();
  } catch {
    return e.ok ? { ok: !1, error: "Failed to parse JSON response" } : { ok: !1, error: `${e.status} ${e.statusText}` };
  }
  if (!e.ok) {
    let n = `${e.status} ${e.statusText}`;
    if (li(t)) {
      const r = "error" in t ? t.error : void 0, l = ml(r), a = "message" in t ? ml(t.message) : void 0;
      n = l ?? a ?? n;
    }
    return { ok: !1, error: n };
  }
  return { ok: !0, data: t };
}
async function Eg(e) {
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
async function Ng(e) {
  let t;
  try {
    t = await e.json();
  } catch {
    throw e.ok ? new Error("Failed to parse JSON response") : new Error(`${e.status} ${e.statusText}`);
  }
  if (!e.ok) {
    let n = `${e.status} ${e.statusText}`;
    if (li(t)) {
      const r = "error" in t ? t.error : void 0, l = ml(r), a = "message" in t ? ml(t.message) : void 0;
      n = l ?? a ?? n;
    }
    throw new Error(n);
  }
  return t;
}
const Ig = async () => {
  const e = await J.fetchApi("/meld/home-dir");
  return (await Eg(e)).home;
}, ke = ({
  onEscape: e,
  enabled: t = !0,
  capture: n = !0
}) => {
  p.useEffect(() => {
    if (!t) return;
    const r = (l) => {
      l.key === "Escape" && (l.preventDefault(), l.stopPropagation(), l.stopImmediatePropagation(), e());
    };
    return window.addEventListener("keydown", r, { capture: n }), () => window.removeEventListener("keydown", r, { capture: n });
  }, [e, t, n]);
};
function Fs(e, t) {
  const n = e;
  return {
    images: Array.isArray(n == null ? void 0 : n.images) ? n.images : [],
    total: typeof (n == null ? void 0 : n.total) == "number" ? n.total : (t == null ? void 0 : t.total) ?? 0,
    offset: typeof (n == null ? void 0 : n.offset) == "number" ? n.offset : (t == null ? void 0 : t.offset) ?? 0,
    limit: typeof (n == null ? void 0 : n.limit) == "number" ? n.limit : (t == null ? void 0 : t.limit) ?? 0
  };
}
const $s = async (e = 0, t = 30, n = "", r = "default", l = !1) => {
  try {
    const a = await J.fetchApi(
      `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${l ? "&minimal=true" : ""}`
    );
    return ee(a);
  } catch (a) {
    return { ok: !1, error: a instanceof Error ? a.message : String(a) };
  }
}, yf = async (e) => {
  try {
    const t = await J.fetchApi(`/meld/image/${e}/details`);
    return ee(t);
  } catch (t) {
    return { ok: !1, error: t instanceof Error ? t.message : String(t) };
  }
}, Mg = async (e, t = !1) => {
  try {
    const n = await J.fetchApi("/meld/bulk-delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ids: e,
        permanent: t
      })
    });
    return ee(n);
  } catch (n) {
    return { ok: !1, error: n instanceof Error ? n.message : String(n) };
  }
}, no = async (e) => {
  try {
    const t = await J.fetchApi("/meld/restore", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids: e })
    });
    return ee(t);
  } catch (t) {
    return { ok: !1, error: t instanceof Error ? t.message : String(t) };
  }
}, vf = async (e) => {
  try {
    const t = await J.fetchApi("/meld/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(e)
    });
    return ee(t);
  } catch (t) {
    return { ok: !1, error: t instanceof Error ? t.message : String(t) };
  }
}, Cc = async (e, t) => {
  try {
    const n = await J.fetchApi("/meld/link-parent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ childId: e, parentId: t })
    });
    return ee(n);
  } catch (n) {
    return { ok: !1, error: n instanceof Error ? n.message : String(n) };
  }
}, Tg = async (e, t, n) => {
  try {
    const r = t !== void 0 ? `&threshold=${t}` : "", l = await J.fetchApi(`/meld/suggest-parents?id=${e}${r}`, { signal: n });
    return ss(await ee(l), []);
  } catch {
    return [];
  }
}, oi = async (e) => {
  try {
    const t = await J.fetchApi(`/meld/lineage?id=${e}`);
    return ss(await ee(t), []);
  } catch {
    return [];
  }
}, Lg = async (e, t) => {
  try {
    const n = await J.fetchApi("/meld/image-tags", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ imageId: e, tags: t })
    });
    return ee(n);
  } catch (n) {
    return { ok: !1, error: n instanceof Error ? n.message : String(n) };
  }
}, Ag = async (e, t) => {
  try {
    const n = await J.fetchApi("/meld/image-notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ imageId: e, userNotes: t })
    });
    return ee(n);
  } catch (n) {
    return { ok: !1, error: n instanceof Error ? n.message : String(n) };
  }
}, wf = async (e, t, n) => {
  try {
    const r = await J.fetchApi("/meld/bulk-image-tags", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
    });
    return ee(r);
  } catch (r) {
    return { ok: !1, error: r instanceof Error ? r.message : String(r) };
  }
}, Dg = async (e) => {
  try {
    const t = await J.fetchApi(`/meld/image/${e}/workflow`);
    return ee(t);
  } catch (t) {
    return { ok: !1, error: t instanceof Error ? t.message : String(t) };
  }
}, Rg = async (e) => {
  try {
    const t = await J.fetchApi(`/meld/image/${e}/snapshot_data`);
    return ee(t);
  } catch (t) {
    return { ok: !1, error: t instanceof Error ? t.message : String(t) };
  }
}, la = (e, t) => {
  let n = e.replace(/\\/g, "/").split("/").pop() ?? "";
  return n === "." || n === ".." || n.startsWith("-") || (n = n.replace(/[\\:*?"<>|/\x00-\x1f\x7f\s]/g, "_"), n = n.replace(/[^a-zA-Z0-9\-_.]/g, "_"), n = n.replace(/\.{2,}/g, ".").replace(/[\s.]+$/, ""), !n || n === "." || n === ".." || n.startsWith("-") || n.length > 255) ? t : n;
}, xf = async (e, t, n, r, l) => {
  const a = await J.fetchApi("/meld/download/raw", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, removeMetadata: t, resizeMode: n, resizeValue: r, resizeFilter: l })
  });
  if (!a.ok) {
    let v = `Failed to fetch image ${e}: ${a.statusText || a.status}`;
    const g = await ee(a.clone());
    throw g.ok || (v = `Failed to fetch image ${e}: ${g.error}`), new Error(v);
  }
  const o = (a.headers.get("Content-Type") || "").toLowerCase();
  if (o.includes("application/json") || o.includes("+json")) {
    let v = `Image ${e}: server returned JSON instead of binary data`;
    const g = await ee(a.clone());
    throw g.ok ? v = `Image ${e}: server returned a JSON response on the binary download path` : v = g.error, new Error(v);
  }
  const i = `image_${e}.png`, c = a.headers.get("Content-Disposition");
  let d = i;
  if (c) {
    const v = c.match(/filename\*=([^;\s]+)/i);
    if (v != null && v[1]) {
      let g = v[1];
      const j = g.match(/^([A-Za-z0-9-]+)'[^']*'(.*)$/);
      j != null && j[2] && (g = j[2]);
      try {
        d = la(decodeURIComponent(g), i);
      } catch {
        const x = c.match(/filename="?([^"]+)"?/);
        x != null && x[1] && (d = la(x[1], i));
      }
    } else if (c.includes("filename=")) {
      const g = c.match(/filename="?([^"]+)"?/);
      g != null && g[1] && (d = la(g[1], i));
    }
  }
  return { blob: await a.blob(), filename: d };
}, Ec = 500, Nc = 2 * 1024 * 1024 * 1024, Pg = async (e, t, n, r, l, a) => {
  const o = (await import("./jszip.min.js").then((_) => _.j)).default, i = new o(), c = e.length;
  if (c > Ec)
    throw new Error(
      `ZIP entry limit reached (${Ec} files). Please reduce the number of images.`
    );
  const d = /* @__PURE__ */ new Set();
  let h = 0, v = 0;
  for (const _ of e) {
    a == null || a(h, c);
    const { blob: b, filename: f } = await xf(
      _,
      t,
      n,
      r,
      l
    );
    if (v += b.size, v > Nc)
      throw new Error(
        `ZIP size limit reached (${Nc / 1024 / 1024 / 1024} GB). Please reduce the number of images.`
      );
    let m = f;
    if (d.has(m)) {
      const u = m.lastIndexOf("."), w = u > 0 ? m.slice(0, u) : m, k = u > 0 ? m.slice(u) : "";
      let y = 2;
      for (; d.has(m); )
        m = `${w}_${y}${k}`, y++;
    }
    d.add(m), i.file(m, b), h += 1;
  }
  a == null || a(c, c);
  const g = await i.generateAsync({ type: "blob" }), j = window.URL.createObjectURL(g), x = document.createElement("a");
  x.href = j, x.download = `meld_images_${Date.now()}.zip`, document.body.appendChild(x), x.click(), window.URL.revokeObjectURL(j), document.body.removeChild(x);
}, Og = async (e, t, n, r, l) => {
  const { blob: a, filename: o } = await xf(
    e,
    t,
    n,
    r,
    l
  ), i = window.URL.createObjectURL(a), c = document.createElement("a");
  c.href = i, c.download = o, document.body.appendChild(c), c.click(), window.URL.revokeObjectURL(i), document.body.removeChild(c);
}, zg = async (e, t) => {
  try {
    const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await J.fetchApi(n);
    return ee(r);
  } catch (n) {
    return { ok: !1, error: n instanceof Error ? n.message : String(n) };
  }
}, Fg = async () => {
  try {
    const e = await J.fetchApi("/meld/search-suggestions");
    return ee(e);
  } catch (e) {
    return { ok: !1, error: e instanceof Error ? e.message : String(e) };
  }
}, $g = async () => {
  try {
    const e = await J.fetchApi("/meld/search-keywords");
    return ee(e);
  } catch (e) {
    return { ok: !1, error: e instanceof Error ? e.message : String(e) };
  }
}, Wg = async () => {
  try {
    const e = await J.fetchApi("/meld/search-config");
    return ee(e);
  } catch (e) {
    return { ok: !1, error: e instanceof Error ? e.message : String(e) };
  }
}, Ug = async () => {
  try {
    const e = await J.fetchApi("/meld/favorites");
    return ee(e);
  } catch (e) {
    return { ok: !1, error: e instanceof Error ? e.message : String(e) };
  }
}, Vg = async (e, t) => {
  try {
    const n = await J.fetchApi("/meld/favorites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: e, query: t })
    });
    return ee(n);
  } catch (n) {
    return { ok: !1, error: n instanceof Error ? n.message : String(n) };
  }
}, Ic = async (e) => {
  try {
    const t = await J.fetchApi("/meld/favorites/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: e })
    });
    return ee(t);
  } catch (t) {
    return { ok: !1, error: t instanceof Error ? t.message : String(t) };
  }
}, Bg = async (e, t, n) => {
  try {
    const r = await J.fetchApi("/meld/favorites/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: e, name: t, query: n })
    });
    return ee(r);
  } catch (r) {
    return { ok: !1, error: r instanceof Error ? r.message : String(r) };
  }
}, ro = {
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
  "fullscreen.details.show_core_prompt": !1,
  "fullscreen.details.core_prompt_count": 10,
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
  "viewer.details.show_core_prompt": !1,
  "viewer.details.core_prompt_count": 10,
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
}, _f = (e) => `viewer.shortcut.${e}`, Qg = (e) => `gallery.quick_shortcut.${e}`, kf = async () => {
  let e;
  try {
    const n = await J.fetchApi("/meld/settings");
    e = await ee(n);
  } catch (n) {
    return $.error("Failed to fetch settings, using defaults", n), ro;
  }
  const t = ss(e, ro);
  return e.ok ? (typeof t["sidebar.show_filename"] == "boolean" && (t["sidebar.show_filename"] = t["sidebar.show_filename"] ? "filename" : "none"), typeof t["viewer.details.show_filename"] == "boolean" && (t["viewer.details.show_filename"] = t["viewer.details.show_filename"] ? "filename" : "none"), typeof t["fullscreen.details.show_filename"] == "boolean" && (t["fullscreen.details.show_filename"] = t["fullscreen.details.show_filename"] ? "filename" : "none"), t) : ($.error("Failed to fetch settings, using defaults", e.error), t);
}, Hg = async (e, t) => {
  try {
    const n = await J.fetchApi("/meld/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key: e, value: t })
    });
    return ee(n);
  } catch (n) {
    return { ok: !1, error: n instanceof Error ? n.message : String(n) };
  }
}, Kg = async () => {
  try {
    const e = await J.fetchApi("/meld/clear-thumbnail-cache", {
      method: "POST"
    });
    return ee(e);
  } catch (e) {
    return { ok: !1, error: e instanceof Error ? e.message : String(e) };
  }
};
function gr(e) {
  return Array.from(new Map(e.map((t) => [t.id, t])).values());
}
const Gg = (e, t) => {
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "REMOVE_IMAGES": {
      const n = new Set(t.payload), r = gr(e.images.filter((o) => !n.has(o.id))), l = gr(
        e.lineageImages.filter((o) => !n.has(o.id))
      ), a = Math.max(
        0,
        e.pagination.total + (r.length - e.images.length)
      );
      return {
        ...e,
        images: r,
        lineageImages: l,
        pagination: {
          ...e.pagination,
          total: a
        }
      };
    }
    case "ADD_IMAGES": {
      const n = [...e.images, ...t.payload], r = gr(n).sort(
        (a, o) => o.created_at - a.created_at
      ), l = Math.max(
        0,
        e.pagination.total + (r.length - e.images.length)
      );
      return {
        ...e,
        images: r,
        pagination: {
          ...e.pagination,
          total: l
        }
      };
    }
    case "UPDATE_IMAGE": {
      const n = t.payload, r = e.images.map(
        (a) => a.id === n.id ? n : a
      ), l = e.lineageImages.map(
        (a) => a.id === n.id ? n : a
      );
      return {
        ...e,
        images: r,
        lineageImages: l
      };
    }
    case "SET_IMAGES": {
      const { images: n, total: r, offset: l } = t.payload, a = gr(n);
      return {
        ...e,
        images: a,
        isLoading: !1,
        error: null,
        pagination: {
          total: r,
          offset: l,
          limit: e.pagination.limit,
          // hasMore must use deduped length to preserve dedupe-aware pagination.
          hasMore: l + a.length < r
        }
      };
    }
    case "APPEND_IMAGES": {
      const { images: n, total: r, offset: l } = t.payload, a = [...e.images, ...n], o = gr(a);
      return {
        ...e,
        images: o,
        isLoading: !1,
        error: null,
        pagination: {
          ...e.pagination,
          total: r,
          offset: l,
          // hasMore must be based on total unique loaded items after merge.
          hasMore: o.length < r
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
    default:
      return e;
  }
};
function bf(e) {
  if (typeof e == "number")
    return !1;
  const t = e.initialMaskMode;
  return t ? t === "apply" || t === "run" ? t : t === !0 ? "run" : !1 : !1;
}
const qg = (e, t) => {
  switch (t.type) {
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
    case "OPEN_VIEWER": {
      const n = t.payload, r = bf(n);
      if (!r)
        return e;
      const l = typeof n == "number" ? n : n.id;
      return {
        ...e,
        activeModal: {
          type: "mask_editor",
          imageId: l,
          mode: r
        }
      };
    }
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
}, Yg = (e, t) => {
  switch (t.type) {
    case "TOGGLE_SELECT": {
      const n = new Set(e.selectedIds);
      let r = e.lastSelectedId;
      return n.has(t.payload) ? (n.delete(t.payload), r === t.payload && (r = null)) : (n.add(t.payload), r = t.payload), {
        ...e,
        selectedIds: n,
        lastSelectedId: r
      };
    }
    case "SELECT_RANGE": {
      if (e.lastSelectedId === null) {
        const i = new Set(e.selectedIds);
        return i.add(t.payload), {
          ...e,
          selectedIds: i,
          lastSelectedId: t.payload
        };
      }
      const n = e.images.findIndex((i) => i.id === e.lastSelectedId), r = e.images.findIndex((i) => i.id === t.payload);
      if (n === -1 || r === -1)
        return e;
      const [l, a] = [Math.min(n, r), Math.max(n, r)], o = new Set(e.selectedIds);
      for (let i = l; i <= a; i++) {
        const c = e.images[i];
        c && o.add(c.id);
      }
      return {
        ...e,
        selectedIds: o,
        lastSelectedId: t.payload
      };
    }
    case "SELECT_ALL": {
      const n = e.images[0];
      return {
        ...e,
        selectedIds: new Set(e.images.map((r) => r.id)),
        lastSelectedId: n ? n.id : null
      };
    }
    case "CLEAR_SELECTION":
      return {
        ...e,
        selectedIds: /* @__PURE__ */ new Set(),
        lastSelectedId: null
      };
    case "DESELECT_IMAGES": {
      const n = new Set(e.selectedIds);
      let r = e.lastSelectedId;
      return t.payload.forEach((l) => {
        n.delete(l), r === l && (r = null);
      }), {
        ...e,
        selectedIds: n,
        lastSelectedId: r
      };
    }
    case "REMOVE_IMAGES": {
      const n = new Set(t.payload), r = new Set(e.selectedIds);
      for (const l of n)
        r.delete(l);
      return {
        ...e,
        selectedIds: r,
        lastSelectedId: e.lastSelectedId !== null && n.has(e.lastSelectedId) ? null : e.lastSelectedId
      };
    }
    default:
      return e;
  }
}, Xg = (e, t) => {
  switch (t.type) {
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
      const n = {
        ...e.settings,
        ...t.payload
      }, r = { ...e.pagination };
      return t.payload["gallery.initial_load_count"] !== void 0 && (r.limit = t.payload["gallery.initial_load_count"]), {
        ...e,
        settings: n,
        pagination: r
      };
    }
    case "SET_SEARCH_QUERY":
      return {
        ...e,
        searchQuery: t.payload
      };
    case "SHOW_TOAST": {
      const n = t.payload;
      return typeof n == "string" ? {
        ...e,
        toastMessage: n,
        toastType: "info"
      } : {
        ...e,
        toastMessage: n.message,
        toastType: n.type || "info"
      };
    }
    case "HIDE_TOAST":
      return {
        ...e,
        toastMessage: null
      };
    default:
      return e;
  }
};
function Mc(e, t) {
  const n = e.searchQuery.trim() !== "";
  return e.viewerMode === "lighttable" && e.viewerLightTableSlotId ? t ?? [] : e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
    (r) => r.exists !== !1 && (e.settings["gallery.show_parent_images"] || n || !r.has_children)
  );
}
const Zg = (e, t) => {
  var n, r, l, a, o;
  switch (t.type) {
    case "SET_IMAGES": {
      const { images: i } = t.payload;
      let c = e.viewerImageId, d = null;
      if (e.viewerMode === "gallery" && c !== null && !i.some((h) => h.id === c)) {
        const h = e.images.find((v) => v.id === c) || (((n = e.viewerFallbackImage) == null ? void 0 : n.id) === c ? e.viewerFallbackImage : void 0);
        h ? d = h : c = null;
      }
      return {
        ...e,
        viewerImageId: c,
        viewerFallbackImage: d
      };
    }
    case "OPEN_VIEWER": {
      const i = t.payload, c = typeof i == "number" ? i : i.id, d = typeof i == "number" ? "gallery" : i.mode, h = typeof i != "number" && i.mode === "lighttable" ? i.slotId : null, v = bf(i), g = e.viewerMode === "lineage" && d === "lineage" && e.lineageImages.some((j) => j.id === c);
      return {
        ...e,
        viewerImageId: c,
        viewerMode: d,
        viewerLightTableSlotId: h,
        viewerInitialMaskMode: v,
        lineageImages: g ? e.lineageImages : []
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
      const c = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], d = Mc(e, (l = t.payload) == null ? void 0 : l.currentList);
      if (e.viewerImageId === null || d.length === 0) return e;
      const h = d.findIndex((j) => j.id === e.viewerImageId);
      if (h === -1 || h === d.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || h === d.length - 1 && !c)
        return e;
      const v = (h + 1) % d.length, g = d[v];
      return g ? {
        ...e,
        viewerImageId: g.id
      } : e;
    }
    case "PREVIOUS_IMAGE": {
      const c = ((a = t.payload) == null ? void 0 : a.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], d = Mc(e, (o = t.payload) == null ? void 0 : o.currentList);
      if (e.viewerImageId === null || d.length === 0) return e;
      const h = d.findIndex((j) => j.id === e.viewerImageId);
      if (h === -1 || h === 0 && !c)
        return e;
      const v = (h - 1 + d.length) % d.length, g = d[v];
      return g ? {
        ...e,
        viewerImageId: g.id
      } : e;
    }
    default:
      return e;
  }
}, Jg = [
  Zg,
  Gg,
  Yg,
  qg,
  Xg
];
function ey(e, t) {
  return t.type === "REFRESH" ? e : t.type === "SET_VIEW_SCOPE" ? {
    ...e,
    viewScope: t.payload,
    images: [],
    selectedIds: /* @__PURE__ */ new Set(),
    viewerImageId: null,
    pagination: {
      ...e.pagination,
      offset: 0,
      total: 0,
      hasMore: !1
    }
  } : Jg.reduce((n, r) => r(n, t), e);
}
const ty = {
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
  settings: ro,
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
function ny(e, t) {
  return ey(e, t);
}
const Sf = p.createContext(void 0), ry = ({ children: e }) => {
  const [t, n] = p.useReducer(ny, ty), r = p.useRef(t.images.length), l = p.useRef(0), a = p.useRef(/* @__PURE__ */ new Map());
  p.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const o = p.useCallback(
    async (x, _, b) => {
      const f = t.settings["gallery.max_load_count"], m = 200;
      let u = x;
      for (; u < Math.min(_, f) && b === l.current; ) {
        const w = Math.min(m, f - u);
        $.log("Background fetch: starting chunk", {
          offset: u,
          limit: w
        });
        const k = await $s(
          u,
          w,
          t.searchQuery,
          t.viewScope,
          !0
          // minimal mode
        );
        if (b !== l.current) break;
        if (!k.ok) {
          $.error("Background fetch failed", k.error);
          break;
        }
        const { images: y, total: C } = Fs(k.data, {
          total: _
        });
        if (n({
          type: "APPEND_IMAGES",
          payload: {
            images: y,
            total: C,
            offset: u,
            limit: w
          }
        }), u += y.length, y.length === 0 || u >= C) break;
        await new Promise((T) => setTimeout(T, 300));
      }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), i = p.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const x = performance.now(), _ = ++l.current, b = t.searchQuery.trim() !== "", f = t.settings["gallery.initial_load_count"];
    $.log("refreshImages: starting initial fetch", {
      isSearch: b,
      fetchLimit: f,
      query: t.searchQuery,
      scope: t.viewScope
    });
    const m = await $s(
      0,
      f,
      t.searchQuery,
      t.viewScope,
      !1
      // not minimal for initial load
    );
    if (!m.ok) {
      $.error("refreshImages: fetch failed", m.error), n({ type: "SET_ERROR", payload: m.error });
      return;
    }
    const u = Fs(m.data, {
      total: t.pagination.total,
      offset: 0,
      limit: f
    }), w = performance.now() - x;
    $.log("refreshImages: initial fetch complete", {
      count: u.images.length,
      total: u.total,
      offset: u.offset,
      durationMs: w.toFixed(2)
    }), n({ type: "SET_IMAGES", payload: u }), u.total > f && o(f, u.total, _);
  }, [
    t.searchQuery,
    t.viewScope,
    t.settings,
    t.pagination.total,
    o
  ]), c = p.useCallback(async () => {
    if (t.isLoading || !t.pagination.hasMore) return;
    n({ type: "SET_LOADING", payload: !0 });
    const x = performance.now(), _ = r.current, b = t.searchQuery.trim() !== "", f = t.pagination.limit;
    $.log("loadMoreImages: starting fetch", {
      nextOffset: _,
      fetchLimit: f,
      isSearch: b
    });
    const m = await $s(
      _,
      f,
      t.searchQuery,
      t.viewScope,
      !0
      // use minimal mode for scroll-triggered loads
    );
    if (!m.ok) {
      $.error("loadMoreImages: fetch failed", m.error), n({ type: "SET_ERROR", payload: m.error });
      return;
    }
    const u = Fs(m.data, {
      total: t.pagination.total,
      offset: _,
      limit: f
    }), w = performance.now() - x;
    $.log("loadMoreImages: fetch complete", {
      count: u.images.length,
      total: u.total,
      offset: u.offset,
      durationMs: w.toFixed(2)
    }), n({ type: "APPEND_IMAGES", payload: u });
  }, [
    t.isLoading,
    t.pagination.hasMore,
    t.pagination.limit,
    t.pagination.total,
    t.searchQuery,
    t.viewScope
  ]), d = p.useCallback(async () => {
    const x = await Ug();
    if (!x.ok) {
      $.error("Failed to load favorites", x.error);
      return;
    }
    n({ type: "SET_FAVORITES", payload: x.data });
  }, []), h = p.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const x = Array.from(t.selectedIds), b = t.images.filter((f) => t.selectedIds.has(f.id)).some((f) => f.parent_id || f.has_children);
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: x,
        hasLineage: b,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), v = p.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const x = Array.from(t.selectedIds);
    n({ type: "SET_LOADING", payload: !0 });
    const _ = await no(x);
    if (!_.ok) {
      n({ type: "SET_ERROR", payload: _.error });
      return;
    }
    const b = _.data.restored_ids || x;
    t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: b }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
  }, [t.selectedIds, t.viewScope]), g = p.useCallback(
    async (x, _) => {
      const b = await Hg(x, _);
      if (!b.ok) {
        n({ type: "SET_ERROR", payload: b.error });
        return;
      }
      n({ type: "SET_SETTINGS", payload: { [x]: _ } });
    },
    []
  ), j = p.useCallback(
    async (x) => {
      const _ = t.images.find((u) => u.id === x);
      if (_ && !_.is_minimal && "positive_prompt_keywords" in _)
        return _;
      const b = t.lineageImages.find((u) => u.id === x);
      if (b && !b.is_minimal && "positive_prompt_keywords" in b)
        return b;
      const f = a.current.get(x);
      if (f)
        return f;
      const m = (async () => {
        try {
          $.log("fetchFullImageDetails: fetching full data", { id: x });
          const u = await yf(x);
          if (!u.ok)
            throw n({ type: "SET_ERROR", payload: u.error }), new Error(u.error);
          return n({ type: "UPDATE_IMAGE", payload: u.data }), u.data;
        } finally {
          a.current.delete(x);
        }
      })();
      return a.current.set(x, m), m;
    },
    [t.images, t.lineageImages]
  );
  return p.useEffect(() => {
    (async () => {
      try {
        const _ = await kf();
        n({ type: "SET_SETTINGS", payload: _ });
      } catch (_) {
        $.error("Failed to load settings", _);
      }
    })();
  }, []), p.useEffect(() => {
    d();
  }, [d]), p.useEffect(() => {
    const x = () => {
      i();
    }, _ = (f) => {
      const m = f.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: m }
      });
    }, b = (f) => {
      const m = f.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !1,
          isFinished: !0,
          shouldCancel: !1,
          newCount: m.new_count || 0,
          updatedCount: m.updated_count || 0,
          totalCount: m.total_count || 0,
          progress: {
            current: m.total_count || t.scanStatus.progress.total,
            total: m.total_count || t.scanStatus.progress.total,
            phase: "completed"
          }
        }
      }), i();
    };
    return window.addEventListener("meld-refresh", x), window.addEventListener("meld-scan-progress", _), window.addEventListener("meld-scan-finished", b), () => {
      window.removeEventListener("meld-refresh", x), window.removeEventListener("meld-scan-progress", _), window.removeEventListener("meld-scan-finished", b);
    };
  }, [i, t.scanStatus.progress.total]), p.useEffect(() => {
    i();
  }, [i]), /* @__PURE__ */ s.jsx(
    Sf.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: i,
        loadMoreImages: c,
        refreshFavorites: d,
        deleteSelected: h,
        restoreSelected: v,
        updateSetting: g,
        fetchFullImageDetails: j
      },
      children: e
    }
  );
}, ie = () => {
  const e = p.useContext(Sf);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, mt = (e, t = 200) => {
  if (!e.filename) return "";
  const n = encodeURIComponent, r = n(e.type || "output"), l = n(e.subfolder ?? "");
  return `/api/meld/view-thumb?${`filename=${n(e.filename)}&type=${r}&subfolder=${l}&size=${t}`}`;
}, ii = (e) => {
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
}, ci = async () => {
  try {
    const e = await J.fetchApi("/meld/tags");
    return ee(e);
  } catch (e) {
    return { ok: !1, error: e instanceof Error ? e.message : String(e) };
  }
}, sy = async (e) => {
  try {
    const t = await J.fetchApi("/meld/tags", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: e })
    });
    return ee(t);
  } catch (t) {
    return { ok: !1, error: t instanceof Error ? t.message : String(t) };
  }
}, ly = async (e) => {
  try {
    const t = await J.fetchApi(`/meld/tags?id=${e}`, {
      method: "DELETE"
    });
    return ee(t);
  } catch (t) {
    return { ok: !1, error: t instanceof Error ? t.message : String(t) };
  }
}, ay = async (e, t) => {
  try {
    const n = await J.fetchApi("/meld/tags/rename", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: e, name: t })
    });
    return ee(n);
  } catch (n) {
    return { ok: !1, error: n instanceof Error ? n.message : String(n) };
  }
}, oy = (e) => {
  if (typeof e != "object" || e === null)
    return !1;
  const t = e;
  return typeof t.name == "string" && typeof t.subfolder == "string" && typeof t.type == "string";
}, iy = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await J.fetchApi("/upload/image", {
    method: "POST",
    body: t
  }), r = await ai(n);
  if (!r.ok)
    throw new Error(r.error);
  if (!oy(r.data))
    throw new Error("Invalid upload image response shape");
  return r.data;
}, cy = async (e, t, n = !1, r) => {
  const l = { folders: [], images: [], image_count: 0 };
  try {
    const a = await J.fetchApi(
      `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
      { signal: r }
    ), o = await ee(a);
    return o.ok || $.error("Failed to fetch folders", o.error), ss(o, l);
  } catch (a) {
    return $.error("Failed to fetch folders", a), l;
  }
}, dy = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = {};
  try {
    const a = await J.fetchApi(
      `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
      { signal: r }
    ), o = await ee(a);
    return o.ok || $.error("Failed to fetch folder metadata", o.error), ss(o, l);
  } catch (a) {
    return $.error("Failed to fetch folder metadata", a), l;
  }
}, uy = async (e, t, n) => {
  try {
    const r = await J.fetchApi(
      `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
      { signal: n }
    ), l = await ee(r);
    return l.ok ? l.data.count : 0;
  } catch {
    return 0;
  }
}, fy = async (e) => {
  try {
    const t = await J.fetchApi("/meld/scan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(e)
    });
    return ee(t);
  } catch (t) {
    return { ok: !1, error: t instanceof Error ? t.message : String(t) };
  }
}, my = async () => {
  try {
    const e = await J.fetchApi("/meld/scan/cancel", {
      method: "POST"
    });
    return ee(e);
  } catch (e) {
    return { ok: !1, error: e instanceof Error ? e.message : String(e) };
  }
}, jf = () => {
  const { dispatch: e } = ie(), [t, n] = p.useState(() => {
    const I = localStorage.getItem("meld-import-config"), F = {
      type: "output",
      subfolder: "",
      custom_path: "",
      recursive: !0,
      auto_link_parent: !0,
      link_strategy: "new_only",
      tags: []
    };
    if (I)
      try {
        const L = JSON.parse(I);
        return { ...F, ...L, tags: [] };
      } catch {
        return F;
      }
    return F;
  });
  p.useEffect(() => {
    const { tags: I, ...F } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(F));
  }, [t]);
  const [r, l] = p.useState([]), [a, o] = p.useState([]), [i, c] = p.useState(0), [d, h] = p.useState(!1), [v, g] = p.useState([]), [j, x] = p.useState(""), [_, b] = p.useState(!1), [f, m] = p.useState(null), u = p.useRef(!1), w = (I) => {
    I.target === I.currentTarget && (u.current = !0);
  }, k = (I) => {
    I.target === I.currentTarget && u.current && e({ type: "CLOSE_MODAL" }), u.current = !1;
  };
  p.useEffect(() => {
    (async () => {
      try {
        const F = await Ig();
        n((L) => L.custom_path ? L : { ...L, custom_path: F });
      } catch (F) {
        $.error("Failed to fetch home directory:", F);
      }
    })();
  }, []), p.useEffect(() => {
    const I = new AbortController();
    return (async () => {
      const L = t.type === "custom" ? t.custom_path : t.subfolder;
      if ($.log(`loadFolders started. Path: "${L}", Type: "${t.type}"`), t.type === "custom" && !L) {
        $.log("Custom path is empty, skipping load."), l([]), o([]), c(0), h(!1);
        return;
      }
      h(!0);
      const Q = L, S = t.type;
      try {
        $.log("Step 1: Fast load starting...");
        const E = await cy(t.type, L, !0, I.signal);
        if (I.signal.aborted) {
          $.log("Step 1: Aborted.");
          return;
        }
        const D = Array.isArray(E == null ? void 0 : E.folders) ? E.folders : [], P = Array.isArray(E == null ? void 0 : E.images) ? E.images : [];
        $.log(`Step 1 complete. Found ${D.length} folders, ${P.length} images.`), l(D), o(P), c(null);
        const N = D.map((A) => A.name);
        N.length > 0 && ($.log(`Step 2: Metadata fetch starting for ${N.length} folders...`), dy(S, Q, N, I.signal).then((A) => {
          if (I.signal.aborted) {
            $.log("Step 2: Aborted.");
            return;
          }
          $.log("Step 2: Metadata fetch complete."), l(
            (R) => R.map((U) => {
              const B = A[U.name];
              return B ? { ...U, count: B.count, preview: B.preview } : U;
            })
          );
        }).catch((A) => {
          A.name !== "AbortError" && $.error("Step 2: Metadata fetch failed:", A);
        })), $.log("Step 3: Path image count starting..."), uy(S, Q, I.signal).then((A) => {
          if (I.signal.aborted) {
            $.log("Step 3: Aborted.");
            return;
          }
          $.log(`Step 3: Path image count complete: ${A}`), c(A);
        }).catch((A) => {
          A.name !== "AbortError" && $.error("Step 3: Path image count failed:", A);
        });
      } catch (E) {
        if (E.name === "AbortError") {
          $.log("Request aborted.");
          return;
        }
        $.error("Failed to load folders:", E), l([]), o([]), c(0);
      } finally {
        I.signal.aborted || h(!1);
      }
    })(), () => {
      I.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const y = p.useCallback(async () => {
    b(!0);
    const I = await ci();
    if (b(!1), !I.ok) {
      $.error("Failed to fetch tags:", I.error);
      return;
    }
    g(I.data);
  }, []);
  p.useEffect(() => {
    y();
  }, [y]), ke({
    onEscape: p.useCallback(() => {
      f ? m(null) : e({ type: "CLOSE_MODAL" });
    }, [f, e])
  });
  const C = p.useMemo(() => v.filter(
    (I) => I.name.toLowerCase().includes(j.toLowerCase()) && !t.tags.includes(I.name)
  ), [v, j, t.tags]), T = (I) => {
    const F = I.trim();
    F && !t.tags.includes(F) && (n({ ...t, tags: [...t.tags, F] }), x(""));
  }, O = (I) => {
    n({ ...t, tags: t.tags.filter((F) => F !== I) });
  }, M = (I) => {
    I.key === "Enter" && j.trim() && (I.preventDefault(), T(j.trim()));
  }, z = async () => {
    const I = await fy(t);
    if (!I.ok) {
      $.error("Failed to start scan:", I.error), alert(`Failed to start scan: ${I.error}`);
      return;
    }
    e({
      type: "SET_SCAN_STATUS",
      payload: {
        isRunning: !0,
        isFinished: !1,
        shouldCancel: !1,
        newCount: 0,
        progress: { current: 0, total: 0, phase: "registering" }
      }
    }), e({ type: "CLOSE_MODAL" });
  }, W = (I) => {
    if (t.type === "custom") {
      const F = t.custom_path.includes("\\") ? "\\" : "/", L = t.custom_path.endsWith(F) ? `${t.custom_path}${I}` : `${t.custom_path}${F}${I}`;
      n({ ...t, custom_path: L });
    } else {
      const F = t.subfolder ? `${t.subfolder}/${I}` : I;
      n({ ...t, subfolder: F });
    }
  }, V = () => {
    if (t.type === "custom") {
      const I = t.custom_path.includes("\\") ? "\\" : "/", F = t.custom_path.split(I);
      if (F.length > 1) {
        F.pop();
        let L = F.join(I);
        L === "" && I === "/" && (L = "/"), n({ ...t, custom_path: L });
      }
    } else {
      const I = t.subfolder.split("/");
      I.pop(), n({ ...t, subfolder: I.join("/") });
    }
  };
  return ue.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: w,
        onMouseUp: k,
        children: [
          /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--large",
              onClick: (I) => I.stopPropagation(),
              children: [
                /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ s.jsx("h2", { children: "Import Images" }),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => e({ type: "CLOSE_MODAL" }),
                      children: /* @__PURE__ */ s.jsx(de, { size: 20 })
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
                          onChange: (I) => n({
                            ...t,
                            type: I.target.value,
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
                    /* @__PURE__ */ s.jsx("div", { className: "meld-form-group--checkbox", children: /* @__PURE__ */ s.jsxs("label", { children: [
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: t.recursive,
                          onChange: (I) => n({ ...t, recursive: I.target.checked })
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
                          onChange: (I) => n({
                            ...t,
                            link_strategy: I.target.value,
                            auto_link_parent: I.target.value !== "none"
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
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((I) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        I,
                        /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => O(I),
                            children: /* @__PURE__ */ s.jsx(de, { size: 12 })
                          }
                        )
                      ] }, I)) }),
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ s.jsx(on, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ s.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: j,
                            onChange: (I) => x(I.target.value),
                            onKeyDown: M
                          }
                        ),
                        j.trim() && !t.tags.includes(j.trim()) && /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => T(j),
                            children: /* @__PURE__ */ s.jsx(Ml, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: _ ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : C.length === 0 ? j && /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        j
                      ] }) : C.map((I) => /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => T(I.name),
                          children: I.name
                        },
                        I.id
                      )) })
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ s.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "meld-btn meld-btn--primary",
                        onClick: z,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ s.jsx(qr, { size: 16 }),
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
                          onClick: V,
                          children: [
                            /* @__PURE__ */ s.jsx(mf, { size: 16 }),
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
                          onChange: (I) => n({ ...t, custom_path: I.target.value }),
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
                      r.map((I) => /* @__PURE__ */ s.jsxs(
                        "div",
                        {
                          role: "button",
                          tabIndex: 0,
                          className: "meld-folder-item",
                          onClick: () => W(I.name),
                          onKeyDown: (F) => {
                            (F.key === "Enter" || F.key === " ") && (F.preventDefault(), W(I.name));
                          },
                          "aria-label": `Open folder ${I.name}`,
                          children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-folder-icon-wrapper", children: I.preview ? /* @__PURE__ */ s.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: mt(I.preview, 64),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ s.jsx(rg, { size: 16 }) }),
                            /* @__PURE__ */ s.jsx("span", { className: "meld-folder-name", children: I.name }),
                            /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${I.count === null ? "meld-folder-count--loading" : ""}`,
                                children: I.count !== null ? `${I.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ s.jsx(ni, { size: 14 })
                          ]
                        },
                        I.name
                      )),
                      a.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-browser-image-grid", children: a.map((I) => /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          role: "button",
                          tabIndex: 0,
                          className: "meld-browser-image-item",
                          onClick: () => m(I),
                          onKeyDown: (F) => {
                            (F.key === "Enter" || F.key === " ") && (F.preventDefault(), m(I));
                          },
                          "aria-label": `Preview ${I.filename}`,
                          children: /* @__PURE__ */ s.jsx(
                            "img",
                            {
                              src: mt(I, 120),
                              alt: I.filename,
                              title: I.filename
                            }
                          )
                        },
                        I.filename
                      )) })
                    ] }) })
                  ] })
                ] }) })
              ]
            }
          ),
          f && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (I) => {
                I.stopPropagation(), m(null);
              },
              children: /* @__PURE__ */ s.jsxs("div", { className: "meld-import-preview-content", onClick: (I) => I.stopPropagation(), children: [
                /* @__PURE__ */ s.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-import-preview-close",
                      onClick: () => m(null),
                      children: /* @__PURE__ */ s.jsx(de, { size: 24 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx("img", { src: mt(f, 400), alt: f.filename })
                ] }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-import-preview-info", children: f.filename })
              ] })
            }
          )
        ]
      }
    ),
    document.fullscreenElement || document.body
  );
}, Cf = "meld-download-options", py = [
  { value: "lanczos", label: "Lanczos (high quality)" },
  { value: "bicubic", label: "Bicubic" },
  { value: "bilinear", label: "Bilinear" },
  { value: "box", label: "Box" },
  { value: "hamming", label: "Hamming" },
  { value: "nearest", label: "Nearest (pixel art)" }
];
function hy() {
  try {
    const e = localStorage.getItem(Cf);
    if (e) {
      const t = JSON.parse(e), n = t.removeMetadata, r = n === !0 || n === "true" || typeof n == "number" && n === 1, a = ["none", "percent", "max_edge"].includes(t.resizeMode) ? t.resizeMode : "none", o = typeof t.resizeValue == "number" && t.resizeValue > 0 ? t.resizeValue : 100, c = [
        "lanczos",
        "bicubic",
        "bilinear",
        "box",
        "hamming",
        "nearest"
      ].includes(t.resizeFilter) ? t.resizeFilter : "lanczos";
      return {
        format: t.format === "raw" ? "raw" : "zip",
        removeMetadata: r,
        resizeMode: a,
        resizeValue: o,
        resizeFilter: c
      };
    }
  } catch {
  }
  return {
    format: "zip",
    removeMetadata: !1,
    resizeMode: "none",
    resizeValue: 100,
    resizeFilter: "lanczos"
  };
}
function gy(e) {
  try {
    localStorage.setItem(Cf, JSON.stringify(e));
  } catch {
  }
}
const Tc = "meld-download-modal-title", yy = ({ imageIds: e, onSuccess: t, onClose: n }) => {
  const [r, l] = p.useState(() => hy()), { format: a, removeMetadata: o, resizeMode: i, resizeValue: c, resizeFilter: d } = r, [h, v] = p.useState(!1), g = p.useRef(!0), [j, x] = p.useState(null), [_, b] = p.useState(String(c)), f = p.useRef(!1);
  p.useEffect(() => () => {
    g.current = !1;
  }, []), p.useEffect(() => {
    gy(r);
  }, [r]), p.useEffect(() => {
    b(String(c));
  }, [c]);
  const m = (M) => {
    M.target === M.currentTarget && (f.current = !0);
  }, u = (M) => {
    M.target === M.currentTarget && f.current && (h || n()), f.current = !1;
  };
  ke({
    onEscape: () => {
      h || n();
    }
  });
  const w = (M) => {
    b(M);
    const z = Number(M);
    if (!Number.isFinite(z) || z <= 0)
      return;
    const I = Math.min(i === "percent" ? 99 : 99999, Math.max(1, Math.round(z)));
    l((F) => ({ ...F, resizeValue: I }));
  }, k = async () => {
    if (e.length === 0) {
      n();
      return;
    }
    g.current = !0, v(!0);
    const M = e.length;
    x({ current: 0, total: M });
    try {
      if (a === "zip")
        await Pg(
          e,
          o,
          i,
          c,
          d,
          (z, W) => {
            g.current && x({ current: z, total: W });
          }
        );
      else {
        let z = 0;
        for (const W of e) {
          if (!g.current) break;
          x({ current: z, total: M }), await Og(
            W,
            o,
            i,
            c,
            d
          ), z += 1, g.current && x({ current: z, total: M }), await new Promise((V) => requestAnimationFrame(() => V()));
        }
      }
      if (!g.current) return;
      n(), t == null || t();
    } catch (z) {
      if (!g.current) return;
      $.error("Download failed:", z), alert("Failed to download images.");
    } finally {
      g.current && (v(!1), x(null));
    }
  }, y = i === "percent" ? "%" : "px", C = 1, T = i === "percent" ? 99 : 99999, O = i === "percent" ? "1-99" : "Max edge (px)";
  return ue.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: m,
        onMouseUp: u,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content",
            onClick: (M) => M.stopPropagation(),
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": Tc,
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
                  /* @__PURE__ */ s.jsx(Gr, { size: 18 }),
                  /* @__PURE__ */ s.jsxs("h3", { id: Tc, style: { margin: 0 }, children: [
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
                    disabled: h,
                    children: /* @__PURE__ */ s.jsx(de, { size: 20 })
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
                              checked: a === "zip",
                              onChange: () => l((M) => ({ ...M, format: "zip" })),
                              disabled: h
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
                              checked: a === "raw",
                              onChange: () => l((M) => ({ ...M, format: "raw" })),
                              disabled: h
                            }
                          ),
                          "Raw (Multiple Files)"
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ s.jsxs("div", { style: { marginBottom: "20px" }, children: [
                  /* @__PURE__ */ s.jsx(
                    "label",
                    {
                      htmlFor: "resize-value",
                      style: {
                        display: "block",
                        marginBottom: "8px",
                        fontWeight: "bold"
                      },
                      children: "Resize"
                    }
                  ),
                  /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "8px" }, children: [
                    /* @__PURE__ */ s.jsxs(
                      "label",
                      {
                        style: { display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" },
                        children: [
                          /* @__PURE__ */ s.jsx(
                            "input",
                            {
                              type: "radio",
                              name: "resizeMode",
                              value: "none",
                              checked: i === "none",
                              onChange: () => l((M) => ({ ...M, resizeMode: "none" })),
                              disabled: h
                            }
                          ),
                          "No resize"
                        ]
                      }
                    ),
                    /* @__PURE__ */ s.jsxs(
                      "label",
                      {
                        style: { display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" },
                        children: [
                          /* @__PURE__ */ s.jsx(
                            "input",
                            {
                              type: "radio",
                              name: "resizeMode",
                              value: "percent",
                              checked: i === "percent",
                              onChange: () => l((M) => ({ ...M, resizeMode: "percent", resizeValue: 50 })),
                              disabled: h
                            }
                          ),
                          "Resize (percentage)"
                        ]
                      }
                    ),
                    /* @__PURE__ */ s.jsxs(
                      "label",
                      {
                        style: { display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" },
                        children: [
                          /* @__PURE__ */ s.jsx(
                            "input",
                            {
                              type: "radio",
                              name: "resizeMode",
                              value: "max_edge",
                              checked: i === "max_edge",
                              onChange: () => l((M) => ({ ...M, resizeMode: "max_edge", resizeValue: 1024 })),
                              disabled: h
                            }
                          ),
                          "Resize (max edge)"
                        ]
                      }
                    )
                  ] }),
                  i !== "none" && /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        marginTop: "10px",
                        paddingLeft: "4px"
                      },
                      children: [
                        /* @__PURE__ */ s.jsx(
                          "input",
                          {
                            type: "number",
                            id: "resize-value",
                            min: C,
                            max: T,
                            step: 1,
                            value: _,
                            placeholder: O,
                            onChange: (M) => w(M.target.value),
                            disabled: h,
                            style: {
                              width: "100px",
                              padding: "4px 8px",
                              borderRadius: "4px",
                              border: "1px solid var(--border-color, #555)",
                              background: "var(--comfy-input-bg, #1a1a1a)",
                              color: "inherit",
                              fontSize: "14px"
                            }
                          }
                        ),
                        /* @__PURE__ */ s.jsx("span", { style: { fontSize: "13px" }, children: y }),
                        i === "percent" && /* @__PURE__ */ s.jsx("span", { style: { fontSize: "12px", color: "var(--meld-text-secondary)" }, children: "(1-99)" }),
                        i === "max_edge" && /* @__PURE__ */ s.jsx("span", { style: { fontSize: "12px", color: "var(--meld-text-secondary)" }, children: "(max edge px)" })
                      ]
                    }
                  ),
                  i !== "none" && /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginTop: "10px",
                        paddingLeft: "4px"
                      },
                      children: [
                        /* @__PURE__ */ s.jsx("label", { htmlFor: "resize-filter", style: { fontSize: "13px" }, children: "Algorithm:" }),
                        /* @__PURE__ */ s.jsx(
                          "select",
                          {
                            id: "resize-filter",
                            value: d,
                            onChange: (M) => l((z) => ({
                              ...z,
                              resizeFilter: M.target.value
                            })),
                            disabled: h,
                            style: {
                              padding: "4px 8px",
                              borderRadius: "4px",
                              border: "1px solid var(--border-color, #555)",
                              background: "var(--comfy-input-bg, #1a1a1a)",
                              color: "inherit",
                              fontSize: "13px"
                            },
                            children: py.map((M) => /* @__PURE__ */ s.jsx("option", { value: M.value, children: M.label }, M.value))
                          }
                        )
                      ]
                    }
                  )
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
                            checked: o,
                            onChange: (M) => l((z) => ({ ...z, removeMetadata: M.target.checked })),
                            disabled: h
                          }
                        ),
                        "Remove metadata (ComfyUI workflow data) from downloaded images"
                      ]
                    }
                  )
                ] })
              ] }),
              h && j && /* @__PURE__ */ s.jsxs(
                "div",
                {
                  style: {
                    padding: "12px 20px",
                    borderTop: "1px solid var(--border-color, #555)"
                  },
                  children: [
                    /* @__PURE__ */ s.jsxs(
                      "div",
                      {
                        style: {
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "8px",
                          fontSize: "13px"
                        },
                        children: [
                          /* @__PURE__ */ s.jsx("span", { children: `${j.total} images - Processing ${j.current + 1 > j.total ? j.total : j.current + 1} of ${j.total}...` }),
                          /* @__PURE__ */ s.jsxs("span", { style: { color: "var(--meld-text-secondary)" }, children: [
                            Math.round(j.current / Math.max(1, j.total) * 100),
                            "%"
                          ] })
                        ]
                      }
                    ),
                    /* @__PURE__ */ s.jsx(
                      "div",
                      {
                        role: "progressbar",
                        "aria-label": "Download progress",
                        "aria-valuemin": 0,
                        "aria-valuemax": 100,
                        "aria-valuenow": Math.round(
                          j.current / Math.max(1, j.total) * 100
                        ),
                        style: {
                          width: "100%",
                          height: "4px",
                          background: "var(--comfy-input-bg, #1a1a1a)",
                          borderRadius: "2px",
                          overflow: "hidden"
                        },
                        children: /* @__PURE__ */ s.jsx(
                          "div",
                          {
                            style: {
                              height: "100%",
                              borderRadius: "2px",
                              transition: "width 0.3s ease",
                              width: `${j.current / Math.max(1, j.total) * 100}%`,
                              background: "var(--meld-accent, #4a9eff)"
                            }
                          }
                        )
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-footer", children: [
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-btn meld-btn--secondary",
                    onClick: n,
                    disabled: h,
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-btn meld-btn--primary",
                    onClick: k,
                    disabled: h,
                    style: { display: "flex", alignItems: "center", gap: "8px" },
                    children: h && j ? `Downloading ${Math.min(j.current + 1, j.total)}/${j.total}...` : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                      /* @__PURE__ */ s.jsx(Gr, { size: 16 }),
                      " Download"
                    ] })
                  }
                )
              ] })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, Lc = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (d, h) => {
    const v = typeof d == "function" ? d(t) : d;
    if (!Object.is(v, t)) {
      const g = t;
      t = h ?? (typeof v != "object" || v === null) ? v : Object.assign({}, t, v), n.forEach((j) => j(t, g));
    }
  }, l = () => t, i = { setState: r, getState: l, getInitialState: () => c, subscribe: (d) => (n.add(d), () => n.delete(d)) }, c = t = e(r, l, i);
  return i;
}, vy = (e) => e ? Lc(e) : Lc, wy = (e) => e;
function xy(e, t = wy) {
  const n = tt.useSyncExternalStore(
    e.subscribe,
    tt.useCallback(() => t(e.getState()), [e, t]),
    tt.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return tt.useDebugValue(n), n;
}
const _y = (e) => {
  const t = vy(e), n = (r) => xy(t, r);
  return Object.assign(n, t), n;
}, ky = (e) => _y;
function by(e, t) {
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
const so = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return so(r)(n);
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
        return so(r)(n);
      }
    };
  }
}, Sy = (e, t) => (n, r, l) => {
  let a = {
    storage: by(() => window.localStorage),
    partialize: (b) => b,
    version: 0,
    merge: (b, f) => ({
      ...f,
      ...b
    }),
    ...t
  }, o = !1, i = 0;
  const c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set();
  let h = a.storage;
  if (!h)
    return e(
      (...b) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
        ), n(...b);
      },
      r,
      l
    );
  const v = () => {
    const b = a.partialize({ ...r() });
    return h.setItem(a.name, {
      state: b,
      version: a.version
    });
  }, g = l.setState;
  l.setState = (b, f) => (g(b, f), v());
  const j = e(
    (...b) => (n(...b), v()),
    r,
    l
  );
  l.getInitialState = () => j;
  let x;
  const _ = () => {
    var b, f;
    if (!h) return;
    const m = ++i;
    o = !1, c.forEach((w) => {
      var k;
      return w((k = r()) != null ? k : j);
    });
    const u = ((f = a.onRehydrateStorage) == null ? void 0 : f.call(a, (b = r()) != null ? b : j)) || void 0;
    return so(h.getItem.bind(h))(a.name).then((w) => {
      if (w)
        if (typeof w.version == "number" && w.version !== a.version) {
          if (a.migrate) {
            const k = a.migrate(
              w.state,
              w.version
            );
            return k instanceof Promise ? k.then((y) => [!0, y]) : [!0, k];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, w.state];
      return [!1, void 0];
    }).then((w) => {
      var k;
      if (m !== i)
        return;
      const [y, C] = w;
      if (x = a.merge(
        C,
        (k = r()) != null ? k : j
      ), n(x, !0), y)
        return v();
    }).then(() => {
      m === i && (u == null || u(x, void 0), x = r(), o = !0, d.forEach((w) => w(x)));
    }).catch((w) => {
      m === i && (u == null || u(void 0, w));
    });
  };
  return l.persist = {
    setOptions: (b) => {
      a = {
        ...a,
        ...b
      }, b.storage && (h = b.storage);
    },
    clearStorage: () => {
      h == null || h.removeItem(a.name);
    },
    getOptions: () => a,
    rehydrate: () => _(),
    hasHydrated: () => o,
    onHydrate: (b) => (c.add(b), () => {
      c.delete(b);
    }),
    onFinishHydration: (b) => (d.add(b), () => {
      d.delete(b);
    })
  }, a.skipHydration || _(), x || j;
}, jy = Sy, Cy = [
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
let yn = null;
const Ef = () => Cy.map((e) => ({ ...e })), ne = ky()(
  jy(
    (e) => ({
      isOpen: !1,
      slots: Ef(),
      buckets: {},
      images: {},
      toastMessage: null,
      toastType: "info",
      setIsOpen: (t) => e({ isOpen: t }),
      addToBucket: (t, n, r) => e((l) => {
        const a = { ...l.buckets };
        for (const c in a) {
          const d = a[c] ?? [];
          a[c] = d.filter((h) => h !== n);
        }
        a[t] || (a[t] = []);
        const o = a[t] ?? [];
        o.includes(n) || (a[t] = [...o, n]);
        const i = { ...l.images };
        return r && (i[n] = r), { buckets: a, images: i };
      }),
      removeFromBucket: (t, n) => e((r) => {
        var i;
        const l = {
          ...r.buckets,
          [t]: ((i = r.buckets[t]) == null ? void 0 : i.filter((c) => c !== n)) || []
        }, a = Object.values(l).some((c) => c.includes(n)), o = { ...r.images };
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
        slots: r.slots.map((l) => l.id === t ? { ...l, ...n } : l)
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
        if (!t) return n;
        const r = t.map(String), l = new Set(r), a = { ...n.buckets };
        let o = !1;
        for (const [c, d] of Object.entries(a)) {
          const h = d.filter((v) => !l.has(v));
          h.length !== d.length && (a[c] = h, o = !0);
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
        yn && clearTimeout(yn), e({ toastMessage: t, toastType: n }), yn = setTimeout(() => {
          e({ toastMessage: null }), yn = null;
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
), Ey = () => {
  var e, t;
  yn && (clearTimeout(yn), yn = null), ne.setState((n) => ({
    ...n,
    isOpen: !1,
    slots: Ef(),
    buckets: {},
    images: {},
    toastMessage: null,
    toastType: "info"
  })), (t = (e = ne.persist) == null ? void 0 : e.clearStorage) == null || t.call(e);
}, Nf = async () => {
  try {
    const e = await J.fetchApi("/meld/workflows");
    return ee(e);
  } catch (e) {
    return { ok: !1, error: e instanceof Error ? e.message : String(e) };
  }
}, If = async (e) => {
  try {
    const t = await J.fetchApi(`/meld/workflow/raw?name=${encodeURIComponent(e)}`);
    return ee(t);
  } catch (t) {
    return { ok: !1, error: t instanceof Error ? t.message : String(t) };
  }
}, Mf = (e) => e ? e.replace(/\s+/g, "").toLowerCase() : "", Kn = (e) => {
  const t = Mf(e);
  return t === "meldimageloader" || t === "loadimage";
}, Mr = (e) => Mf(e) === "loadimagemask", Ny = (e) => Array.isArray(e) && e.every(
  (t) => typeof t == "object" && t !== null && "id" in t && "type" in t
), di = () => ({ executeWorkflow: p.useCallback(
  async (t, n, r, l) => {
    var b, f, m, u, w;
    if (!t || !n)
      throw new Error(
        `Missing required inputs for workflow execution: workflowName (${!!t}), image (${!!n})`
      );
    $.log("executeWorkflow called:", {
      workflowName: t,
      imageId: n.id,
      maskFilename: r,
      targetLoaderNodeId: l
    });
    const a = await If(t);
    if (!a.ok)
      throw new Error(`Failed to fetch workflow "${t}": ${a.error}`);
    const o = a.data;
    $.log("Workflow fetched:", t);
    let i = l || null, c = null, d = !1;
    if (o.nodes && Array.isArray(o.nodes)) {
      if (d = !0, !i) {
        const y = o.nodes.find((C) => Kn(C.type));
        y && (i = String(y.id));
      }
      const k = o.nodes.find((y) => Mr(y.type));
      k && (c = String(k.id));
    } else {
      if (!i)
        for (const k in o) {
          const y = o[k];
          if (Kn(y.class_type)) {
            i = k;
            break;
          }
        }
      for (const k in o) {
        const y = o[k];
        if (Mr(y.class_type)) {
          c = k;
          break;
        }
      }
    }
    if ($.log("Node IDs found:", {
      loaderNodeId: i,
      maskNodeId: c,
      isUIFormat: d
    }), !i)
      throw new Error("Meld Image Loader or Load Image node not found in the selected workflow.");
    if (r && !c)
      throw $.warn("Mask filename provided but no mask node found in workflow JSON"), new Error(
        "Load Image (as Mask) node not found in the selected workflow, but a mask was provided."
      );
    let h = n.filename;
    if (n.subfolder && (h = `${n.subfolder}/${n.filename}`), n.type && n.type !== "input" && (h = `${h} [${n.type}]`), d) {
      const k = window.app;
      if (typeof k != "object" || k === null || !("graph" in k))
        throw new Error("Active ComfyUI graph is not available. Please open a workflow first.");
      const y = k;
      if (!y.graph || !Ny(y.graph._nodes))
        throw new Error("Active ComfyUI graph is not available. Please open a workflow first.");
      const C = t.replace(/\.json$/i, "");
      let T = !1;
      const O = document.querySelectorAll(".workflow-tab");
      for (const W of Array.from(O)) {
        const V = W.querySelector(".workflow-label"), I = ((b = V == null ? void 0 : V.textContent) == null ? void 0 : b.trim()) || ((f = W.textContent) == null ? void 0 : f.trim()) || "";
        if (I === C || I === t || I.startsWith(`${C} `) || I.startsWith(`${C}•`)) {
          W.click(), T = !0;
          break;
        }
      }
      T || await y.loadGraphData(o, !0, !0, t), await new Promise((W) => setTimeout(W, 200));
      const M = y.graph._nodes;
      $.log("Active graph nodes count:", M.length);
      const z = M.find(
        (W) => String(W.id) === i || Kn(W.type)
      );
      if (z) {
        const W = (m = z.widgets) == null ? void 0 : m.find((V) => V.name === "image");
        $.log("Updating loader node widget:", {
          nodeId: z.id,
          type: z.type,
          imagePath: h
        }), W && (W.value = h, typeof W.callback == "function" && W.callback(h));
      } else
        $.warn(
          "Loader node (MeldImageLoader/LoadImage) not found in active graph after loading"
        );
      if (r) {
        const W = M.find(
          (V) => String(V.id) === c || Mr(V.type)
        );
        if ($.log("Updating mask node widget:", {
          nodeId: W == null ? void 0 : W.id,
          maskFilename: r
        }), W) {
          const V = (u = W.widgets) == null ? void 0 : u.find((F) => F.name === "image");
          V && (V.value = `${r} [temp]`);
          const I = (w = W.widgets) == null ? void 0 : w.find((F) => F.name === "channel");
          I && (I.value = "red");
        } else
          $.warn("LoadImageMask not found in active graph after loading");
      }
      y.graph.setDirtyCanvas(!0, !0);
      try {
        if (typeof y.queuePrompt != "function")
          throw new Error("queuePrompt is not available.");
        await y.queuePrompt(0);
        return;
      } catch (W) {
        throw $.error("Failed to queue workflow:", W), new Error("Failed to queue workflow. Check logs for details.");
      }
    }
    const v = JSON.parse(JSON.stringify(o));
    v[i].inputs.image = h, r && c && (v[c].inputs.image = `${r} [temp]`, v[c].inputs.channel = "red");
    const g = window.api;
    if (!(typeof g == "object" && g !== null && "fetchApi" in g && typeof g.fetchApi == "function"))
      throw new Error("ComfyUI API is not available. Please reload ComfyUI and try again.");
    const x = g, _ = await x.fetchApi("/prompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: v,
        client_id: typeof x.clientId == "string" ? x.clientId : void 0
      })
    });
    return Ng(_);
  },
  []
) });
function Ws(e, t) {
  return {
    data: new Uint8ClampedArray(e * t).fill(0),
    width: e,
    height: t
  };
}
function Iy(e, t, n = 255) {
  const { width: r, height: l } = e, a = document.createElement("canvas");
  a.width = r, a.height = l;
  const o = a.getContext("2d", { willReadFrequently: !0 });
  if (!o) return e;
  const i = ui(e, [255, 255, 255], 255);
  o.putImageData(i, 0, 0), o.fillStyle = n > 0 ? "white" : "black", o.beginPath(), t(o), o.fill();
  const c = o.getImageData(0, 0, r, l), d = new Uint8ClampedArray(r * l);
  for (let h = 0; h < r * l; h++) {
    const v = c.data[h * 4] ?? 0;
    d[h] = v > 128 ? 255 : 0;
  }
  return { ...e, data: d };
}
function ui(e, t = [255, 255, 255], n = 255) {
  const { data: r, width: l, height: a } = e, o = new ImageData(l, a), i = o.data;
  for (let c = 0; c < r.length; c++) {
    const d = r[c] ?? 0, h = c * 4;
    d > 0 ? (i[h] = t[0], i[h + 1] = t[1], i[h + 2] = t[2], i[h + 3] = n) : (i[h] = 0, i[h + 1] = 0, i[h + 2] = 0, i[h + 3] = 0);
  }
  return o;
}
function My(e) {
  return e.data.every((t) => t === 0);
}
const Ac = (e) => e === "rect" || e === "ellipse" || e === "lasso";
function Ty({
  canvasRef: e,
  overlayRef: t,
  imageRef: n,
  currentMask: r,
  onMaskStamp: l
}) {
  const a = p.useRef(null), [o, i] = p.useState(!1), [c, d] = p.useState(() => {
    try {
      const E = typeof localStorage < "u" ? localStorage.getItem("meld-mask-tool") : null;
      return Ac(E) ? E : "rect";
    } catch {
      return "rect";
    }
  }), h = p.useCallback((E) => {
    d(E);
  }, []);
  p.useEffect(() => {
    try {
      typeof localStorage < "u" && Ac(c) && localStorage.setItem("meld-mask-tool", c);
    } catch {
    }
  }, [c]);
  const [v, g] = p.useState({ x: 0, y: 0 }), [j, x] = p.useState({ x: 0, y: 0 }), _ = p.useRef([]), [b, f] = p.useState(1), [m, u] = p.useState({ x: 0, y: 0 }), [w, k] = p.useState(!1), [y, C] = p.useState(!1), T = p.useRef(null), O = p.useRef(0), M = p.useCallback(() => {
    const E = n.current, D = t.current;
    if (!E || !D) return null;
    const P = D.getBoundingClientRect(), N = E.naturalWidth, A = E.naturalHeight;
    if (!N || !A) return null;
    const R = N / A, U = P.width / P.height;
    let B, X, re = 0, le = 0;
    return R > U ? (B = P.width, X = P.width / R, le = (P.height - X) / 2) : (X = P.height, B = P.height * R, re = (P.width - B) / 2), {
      left: re,
      top: le,
      width: B,
      height: X
    };
  }, [n, t]), z = p.useCallback(
    (E, D, P, N) => {
      if (!E) return D;
      const A = E.getBoundingClientRect(), R = A.width / 2, U = A.height / 2, B = {
        x: (R - D.x) / P,
        y: (U - D.y) / P
      };
      return { x: R - B.x * N, y: U - B.y * N };
    },
    []
  ), W = p.useCallback(() => {
    f((E) => {
      const D = Math.min(E * 1.2, 20);
      return u((P) => z(t.current, P, E, D)), D;
    });
  }, [z, t]), V = p.useCallback(() => {
    f((E) => {
      const D = Math.max(0.1, E / 1.2);
      return u((P) => z(t.current, P, E, D)), D;
    });
  }, [z, t]), I = p.useCallback(() => {
    f(1), u({ x: 0, y: 0 });
  }, []), F = p.useCallback(() => {
    const E = e.current;
    if (!E) return;
    const D = E.getContext("2d");
    if (!D) return;
    D.clearRect(0, 0, E.width, E.height);
    const P = getComputedStyle(document.documentElement), N = P.getPropertyValue("--comfy-input-bg-active") || P.getPropertyValue("--comfy-input-bg") || P.getPropertyValue("--bg-color") || "var(--comfy-input-bg)", A = M();
    if (a.current && A && (D.save(), D.globalAlpha = 0.5, D.drawImage(
      a.current,
      A.left,
      A.top,
      A.width,
      A.height
    ), D.restore()), o) {
      const R = Math.min(v.x, j.x), U = Math.min(v.y, j.y), B = Math.abs(v.x - j.x), X = Math.abs(v.y - j.y);
      if (D.save(), D.globalAlpha = 0.3, D.fillStyle = N, D.strokeStyle = "white", D.lineWidth = 2, D.setLineDash([5, 5]), D.beginPath(), c === "rect")
        D.rect(R, U, B, X);
      else if (c === "ellipse") {
        const re = R + B / 2, le = U + X / 2;
        D.ellipse(re, le, B / 2, X / 2, 0, 0, 2 * Math.PI);
      } else if (c === "lasso" && _.current.length > 1) {
        const re = _.current[0];
        if (re) {
          D.moveTo(re.x, re.y);
          for (let le = 1; le < _.current.length; le++) {
            const K = _.current[le];
            K && D.lineTo(K.x, K.y);
          }
          D.closePath();
        }
      }
      D.fill(), D.globalAlpha = 1, D.stroke(), D.restore();
    }
  }, [o, v, j, c, M, e]), L = p.useRef(F);
  p.useEffect(() => {
    L.current = F;
  }), p.useEffect(() => {
    if (!r) return;
    a.current || (a.current = document.createElement("canvas"));
    const E = a.current;
    E.width = r.width, E.height = r.height;
    const D = E.getContext("2d");
    if (!D) return;
    const P = ui(r, [255, 255, 255], 255);
    D.putImageData(P, 0, 0), F();
  }, [r, F]), p.useEffect(() => {
    o && F();
  }, [o, F]), p.useEffect(() => {
    const E = t.current;
    if (!E) return;
    const D = (P) => {
      P.preventDefault();
      const N = P.deltaY > 0 ? 1 / 1.1 : 1.1;
      f((A) => {
        const R = Math.min(Math.max(0.1, A * N), 20);
        return u((U) => {
          const B = E.getBoundingClientRect(), X = P.clientX - B.left, re = P.clientY - B.top, le = {
            x: (X - U.x) / A,
            y: (re - U.y) / A
          };
          return {
            x: X - le.x * R,
            y: re - le.y * R
          };
        }), R;
      });
    };
    return E.addEventListener("wheel", D, { passive: !1 }), () => E.removeEventListener("wheel", D);
  }, [t]), p.useEffect(() => {
    if (!y) return;
    const E = (P) => {
      if (T.current) {
        const N = P.clientX - T.current.clientX, A = P.clientY - T.current.clientY;
        u({
          x: T.current.panX + N,
          y: T.current.panY + A
        });
      }
    }, D = () => {
      C(!1), T.current = null;
    };
    return window.addEventListener("mousemove", E), window.addEventListener("mouseup", D), () => {
      window.removeEventListener("mousemove", E), window.removeEventListener("mouseup", D);
    };
  }, [y]), p.useEffect(() => {
    const E = () => {
      t.current && e.current && (e.current.width = t.current.clientWidth, e.current.height = t.current.clientHeight, L.current());
    }, D = new ResizeObserver(E);
    return t.current && D.observe(t.current), E(), () => D.disconnect();
  }, [t, e]);
  const Q = p.useCallback(
    (E) => {
      var re;
      const D = E.button === 2, P = E.button === 1, N = w && E.button === 0;
      if (D || P || N) {
        E.preventDefault(), E.stopPropagation(), T.current = {
          panX: m.x,
          panY: m.y,
          clientX: E.clientX,
          clientY: E.clientY
        }, C(!0);
        return;
      }
      if (E.button !== 0 || o || Date.now() - O.current < 100) return;
      E.preventDefault();
      const A = M(), R = (re = t.current) == null ? void 0 : re.getBoundingClientRect();
      if (!A || !R) return;
      i(!0);
      const U = {
        x: (E.clientX - R.left - m.x) / b,
        y: (E.clientY - R.top - m.y) / b
      }, B = Math.max(A.left, Math.min(U.x, A.left + A.width)), X = Math.max(A.top, Math.min(U.y, A.top + A.height));
      g({ x: B, y: X }), x({ x: B, y: X }), c === "lasso" ? _.current = [{ x: B, y: X }] : _.current = [];
    },
    [w, m, o, M, t, b, c]
  );
  p.useEffect(() => {
    if (!o) return;
    const E = (P) => {
      var X;
      const N = M(), A = (X = t.current) == null ? void 0 : X.getBoundingClientRect();
      if (!N || !A) return;
      const R = {
        x: (P.clientX - A.left - m.x) / b,
        y: (P.clientY - A.top - m.y) / b
      }, U = Math.max(N.left, Math.min(R.x, N.left + N.width)), B = Math.max(N.top, Math.min(R.y, N.top + N.height));
      x({ x: U, y: B }), c === "lasso" && (_.current.push({ x: U, y: B }), L.current());
    }, D = (P) => {
      var R;
      const N = M(), A = (R = t.current) == null ? void 0 : R.getBoundingClientRect();
      if (N && A && r && n.current) {
        const U = {
          x: (P.clientX - A.left - m.x) / b,
          y: (P.clientY - A.top - m.y) / b
        }, B = Math.max(N.left, Math.min(U.x, N.left + N.width)), X = Math.max(N.top, Math.min(U.y, N.top + N.height)), re = Math.min(v.x, B), le = Math.min(v.y, X), K = Math.abs(v.x - B), te = Math.abs(v.y - X), G = c === "lasso";
        if (K > 5 || te > 5 || G && _.current.length > 2) {
          const Ae = n.current.naturalWidth, De = n.current.naturalHeight, Re = Ae / N.width, jt = De / N.height, ls = Iy(r, (me) => {
            if (c === "rect") {
              const Ce = (re - N.left) * Re, Ie = (le - N.top) * jt, Qe = K * Re, Vt = te * jt;
              me.rect(Ce, Ie, Qe, Vt);
            } else if (c === "ellipse") {
              const Ce = (re - N.left) * Re, Ie = (le - N.top) * jt, Qe = K * Re, Vt = te * jt, ot = Ce + Qe / 2, or = Ie + Vt / 2;
              me.ellipse(ot, or, Qe / 2, Vt / 2, 0, 0, 2 * Math.PI);
            } else if (c === "lasso" && _.current.length > 2) {
              const Ce = _.current[0];
              if (!Ce) return;
              me.moveTo(
                (Ce.x - N.left) * Re,
                (Ce.y - N.top) * jt
              );
              for (let Ie = 1; Ie < _.current.length; Ie++) {
                const Qe = _.current[Ie];
                Qe && me.lineTo((Qe.x - N.left) * Re, (Qe.y - N.top) * jt);
              }
              me.closePath();
            }
          });
          l(ls);
        }
      }
      O.current = Date.now(), i(!1), _.current = [];
    };
    return window.addEventListener("mousemove", E), window.addEventListener("mouseup", D), () => {
      window.removeEventListener("mousemove", E), window.removeEventListener("mouseup", D);
    };
  }, [
    o,
    v.x,
    v.y,
    M,
    r,
    c,
    m.x,
    m.y,
    b,
    n,
    t,
    l
  ]), p.useEffect(() => {
    const E = (N) => {
      if (!N) return !1;
      const A = N, R = A.tagName;
      return R === "INPUT" || R === "TEXTAREA" || R === "BUTTON" || R === "SELECT" || R === "A" || A.isContentEditable || A.tabIndex != null && A.tabIndex >= 0;
    }, D = (N) => {
      N.code === "Space" && !N.repeat && (E(N.target) || (N.preventDefault(), k(!0)));
    }, P = (N) => {
      N.code === "Space" && (E(N.target) || (N.preventDefault(), k(!1)));
    };
    return window.addEventListener("keydown", D, { capture: !0 }), window.addEventListener("keyup", P, { capture: !0 }), () => {
      window.removeEventListener("keydown", D, { capture: !0 }), window.removeEventListener("keyup", P, { capture: !0 });
    };
  }, []);
  const S = p.useCallback(() => {
    if (n.current) {
      const E = Ws(
        n.current.naturalWidth,
        n.current.naturalHeight
      );
      l(E);
    }
  }, [n, l]);
  return {
    activeTool: c,
    setActiveTool: h,
    scale: b,
    pan: m,
    handleZoomIn: W,
    handleZoomOut: V,
    handleResetZoom: I,
    isPanning: w,
    isPanDragging: y,
    handleMouseDown: Q,
    handleClear: S
  };
}
const Tf = (e) => !!(e && Array.isArray(e.widgets));
function Ly(e) {
  let t = e.filename;
  return e.subfolder && (t = `${e.subfolder}/${e.filename}`), e.type && e.type !== "input" && (t = `${t} [${e.type}]`), t;
}
function Yr(e, t) {
  var i, c;
  const n = window.app;
  if (!(n != null && n.graph))
    return { ok: !1, reason: "no_app_graph" };
  if (!Array.isArray(n.graph._nodes))
    return { ok: !1, reason: "no_loader_node" };
  const r = Ly(e), l = n.graph._nodes.filter((d) => Kn(d.type));
  if (l.length === 0)
    return { ok: !1, reason: "no_loader_node" };
  let a = l[0];
  if (t) {
    const d = l.find((h) => String(h.id) === t);
    d && (a = d);
  }
  if (!Tf(a))
    return { ok: !1, reason: "no_widgets" };
  const o = a.widgets.find((d) => d.name === "image");
  return o ? (o.value = r, typeof o.callback == "function" && o.callback(r), (c = (i = n.graph).afterChange) == null || c.call(i), n.graph.setDirtyCanvas(!0, !0), { ok: !0 }) : { ok: !1, reason: "no_image_widget" };
}
const Ay = () => {
  const { dispatch: e } = ie();
  return { injectMaskToGraph: p.useCallback(
    (n, r) => {
      var h, v;
      $.log("[Meld-Debug] injectMaskToGraph called with:", r), Yr(n);
      const l = window.app;
      if (!(l != null && l.graph))
        return $.log("[Meld-Debug] injectMaskToGraph: No comfyApp.graph found"), !1;
      if (!Array.isArray(l.graph._nodes))
        return $.log("[Meld-Debug] injectMaskToGraph: comfyApp.graph._nodes is not an array"), !1;
      const a = l.graph._nodes.filter((g) => Mr(g.type));
      if (a.length === 0)
        return $.log("[Meld-Debug] injectMaskToGraph: No LoadImageMask nodes found in active graph"), e({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No 'Load Image (as Mask)' node found in the current workflow."
          }
        }), !1;
      const o = a[0];
      if (!o)
        return !1;
      if (!Tf(o))
        return $.log("[Meld-Debug] injectMaskToGraph: target mask node has no widgets", o.id), !1;
      const i = o.widgets.find((g) => g.name === "image"), c = `${r} [temp]`;
      $.log(
        "[Meld-Debug] injectMaskToGraph: Updating node",
        o.id,
        "widget 'image' with",
        c
      ), i && (i.value = c, typeof i.callback == "function" && i.callback(c));
      const d = o.widgets.find((g) => g.name === "channel");
      return d && (d.value = "red", typeof d.callback == "function" && d.callback("red")), (v = (h = l.graph).afterChange) == null || v.call(h), l.graph.setDirtyCanvas(!0, !0), !0;
    },
    [e]
  ) };
}, fi = ({
  imageId: e,
  mode: t,
  sequenceData: n,
  onSuccess: r,
  onClose: l
}) => {
  const { state: a, dispatch: o } = ie(), i = p.useMemo(() => a.images.find((U) => U.id === e) ?? a.lineageImages.find((U) => U.id === e) ?? ne.getState().images[String(e)], [a.images, a.lineageImages, e]), c = p.useRef(void 0);
  i && (c.current = i);
  const d = i ?? c.current, { injectMaskToGraph: h } = Ay(), { executeWorkflow: v } = di(), g = p.useRef(null), j = p.useRef(null), x = p.useRef(null), [_, b] = p.useState([]), f = p.useMemo(() => _.length > 0 ? _[_.length - 1] ?? null : x.current ? Ws(x.current.naturalWidth, x.current.naturalHeight) : null, [_]), m = p.useCallback((U) => {
    b((B) => [...B, U]);
  }, []), {
    activeTool: u,
    setActiveTool: w,
    scale: k,
    pan: y,
    handleZoomIn: C,
    handleZoomOut: T,
    handleResetZoom: O,
    isPanning: M,
    isPanDragging: z,
    handleMouseDown: W,
    handleClear: V
  } = Ty({
    canvasRef: g,
    overlayRef: j,
    imageRef: x,
    currentMask: f,
    onMaskStamp: m
  });
  ke({ onEscape: l });
  const I = p.useRef(!1), F = p.useCallback((U) => {
    U.target === U.currentTarget && (I.current = !0);
  }, []), L = p.useCallback(
    (U) => {
      U.target === U.currentTarget && I.current && l(), I.current = !1;
    },
    [l]
  );
  p.useEffect(() => {
    var U;
    (U = x.current) != null && U.naturalWidth && _.length === 0 && b([
      Ws(x.current.naturalWidth, x.current.naturalHeight)
    ]);
  }, [_.length]);
  const Q = p.useCallback(() => {
    var U;
    (U = x.current) != null && U.naturalWidth && _.length === 0 && b([
      Ws(x.current.naturalWidth, x.current.naturalHeight)
    ]);
  }, [_.length]), S = p.useCallback(() => {
    _.length > 1 && b((U) => U.slice(0, -1));
  }, [_.length]);
  p.useEffect(() => {
    const U = (B) => {
      (B.metaKey || B.ctrlKey) && B.key.toLowerCase() === "z" && !B.shiftKey && (B.preventDefault(), B.stopPropagation(), B.stopImmediatePropagation(), S());
    };
    return window.addEventListener("keydown", U, { capture: !0 }), () => window.removeEventListener("keydown", U, { capture: !0 });
  }, [S]);
  const [E, D] = p.useState(!1), P = async () => {
    if (!f || !x.current) return null;
    D(!0);
    try {
      const { width: U, height: B } = f, X = document.createElement("canvas");
      X.width = U, X.height = B;
      const re = X.getContext("2d");
      if (!re) return null;
      const le = ui(f, [255, 255, 255], 255);
      re.putImageData(le, 0, 0);
      const K = await new Promise(
        (jt) => X.toBlob(jt, "image/png")
      );
      if (!K) return null;
      const G = `meld_mask_${Date.now()}.png`, Be = new File([K], G, { type: "image/png" }), Ae = new FormData();
      Ae.append("image", Be), Ae.append("type", "temp"), Ae.append("overwrite", "true");
      const De = await J.fetchApi("/upload/image", {
        method: "POST",
        body: Ae
      }), Re = await ai(De);
      return Re.ok ? Re.data.name ?? null : null;
    } catch (U) {
      return $.error("Error uploading mask:", U), null;
    } finally {
      D(!1);
    }
  }, N = async () => {
    if (!d) return;
    const U = await P();
    U && h(d, U) && (l(), o({ type: "CLOSE_VIEWER" }), r == null || r());
  }, A = async () => {
    if (!d) return;
    const U = await P();
    U && (t === "run_sequence" && n ? (await v(
      n.workflowName,
      d,
      U,
      n.targetLoaderNodeId
    ), r == null || r()) : o({
      type: "OPEN_MODAL",
      payload: {
        type: "workflow_selection",
        images: [d],
        maskFilename: U,
        onSuccess: r
      }
    }));
  }, R = p.useMemo(() => f && !My(f), [f]);
  return d ? /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onMouseDown: F,
      onMouseUp: L,
      role: "presentation",
      children: /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: "meld-modal-content meld-mask-editor-modal",
          onClick: (U) => U.stopPropagation(),
          children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
              /* @__PURE__ */ s.jsx("h3", { children: "Select Mask Area" }),
              /* @__PURE__ */ s.jsx("button", { className: "meld-modal-close", onClick: l, type: "button", children: /* @__PURE__ */ s.jsx(de, { size: 20 }) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-mask-editor-tool-selector", children: [
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${u === "rect" ? "meld-mask-tool-btn--active" : ""}`,
                    onClick: () => w("rect"),
                    type: "button",
                    title: "Rectangle Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(gf, { size: 18 }),
                      /* @__PURE__ */ s.jsx("span", { children: "Rect" })
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${u === "ellipse" ? "meld-mask-tool-btn--active" : ""}`,
                    onClick: () => w("ellipse"),
                    type: "button",
                    title: "Ellipse Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(eg, { size: 18 }),
                      /* @__PURE__ */ s.jsx("span", { children: "Ellipse" })
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${u === "lasso" ? "meld-mask-tool-btn--active" : ""}`,
                    onClick: () => w("lasso"),
                    type: "button",
                    title: "Lasso Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(lg, { size: 18 }),
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
                    onClick: T,
                    type: "button",
                    title: "Zoom Out",
                    "aria-label": "Zoom Out",
                    children: /* @__PURE__ */ s.jsx(kg, { size: 18 })
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: "meld-mask-tool-btn",
                    onClick: O,
                    type: "button",
                    title: "Reset Zoom",
                    "aria-label": "Reset Zoom",
                    style: {
                      minWidth: "48px",
                      justifyContent: "center",
                      fontSize: "11px"
                    },
                    children: [
                      Math.round(k * 100),
                      "%"
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-mask-tool-btn",
                    onClick: C,
                    type: "button",
                    title: "Zoom In",
                    "aria-label": "Zoom In",
                    children: /* @__PURE__ */ s.jsx(_g, { size: 18 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  ref: j,
                  className: "meld-mask-editor-canvas-container",
                  onMouseDown: W,
                  onContextMenu: (U) => U.preventDefault(),
                  role: "presentation",
                  style: {
                    cursor: z ? "grabbing" : M ? "grab" : "crosshair"
                  },
                  children: /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: "meld-mask-editor-transform-layer",
                      style: {
                        transform: `translate(${y.x}px, ${y.y}px) scale(${k})`,
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
                            ref: x,
                            src: ii(d),
                            alt: "To be masked",
                            className: "meld-mask-editor-image",
                            onDragStart: (U) => U.preventDefault(),
                            onLoad: Q
                          }
                        ),
                        /* @__PURE__ */ s.jsx(
                          "canvas",
                          {
                            ref: g,
                            className: "meld-mask-editor-canvas",
                            onDragStart: (U) => U.preventDefault()
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
                      onClick: N,
                      disabled: !R || E,
                      type: "button",
                      children: [
                        E ? /* @__PURE__ */ s.jsx(jc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(Je, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Send" })
                      ]
                    }
                  ) : /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--run",
                      onClick: A,
                      disabled: !R || E,
                      type: "button",
                      children: [
                        E ? /* @__PURE__ */ s.jsx(jc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(qr, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: t === "run_sequence" && n ? n.currentIndex === n.totalCount - 1 ? "Queue (Last)" : `Queue (${n.currentIndex + 1}/${n.totalCount})` : "Queue" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--undo",
                      onClick: S,
                      disabled: _.length <= 1 || E,
                      type: "button",
                      title: "Undo last area",
                      children: [
                        /* @__PURE__ */ s.jsx(vg, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Undo" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--cancel",
                      onClick: V,
                      disabled: !R || E,
                      type: "button",
                      title: "Clear all areas",
                      children: [
                        /* @__PURE__ */ s.jsx(de, { size: 16 }),
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
}, Lf = ({
  images: e,
  currentIndex: t,
  workflowName: n,
  targetLoaderNodeId: r,
  onSuccess: l,
  onClose: a
}) => {
  ke({ onEscape: a });
  const o = e[t];
  return p.useEffect(() => {
    o || a();
  }, [o, a]), o ? /* @__PURE__ */ s.jsx(
    fi,
    {
      imageId: o.id,
      mode: "run_sequence",
      sequenceData: {
        workflowName: n,
        targetLoaderNodeId: r,
        currentIndex: t,
        totalCount: e.length
      },
      onSuccess: l,
      onClose: a
    },
    o.id
  ) : null;
}, Af = (e) => {
  const t = /(?:[^\s"']+|"[^"]*"|'[^']*')+/g;
  return e.trim().match(t) || [];
}, Ss = (e) => e.replace(/^["']|["']$/g, ""), Dy = (e) => e.trim() ? Af(e).every((n) => !!(n === "next" || n === "prev" || n === "delete" || n.startsWith("tag:") && n.length > 4 || n.startsWith("-tag:") && n.length > 5 || n.startsWith("tag-toggle:") && n.length > 11 || n.startsWith("lt:") && n.length > 3)) : !0, Ry = (e, t) => {
  const n = Af(e), r = {
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
      const o = Ss(a.substring(4));
      o && !r.addTags.includes(o) && r.addTags.push(o);
    } else if (a.startsWith("-tag:")) {
      const o = Ss(a.substring(5));
      o && !r.removeTags.includes(o) && r.removeTags.push(o);
    } else if (a.startsWith("tag-toggle:")) {
      const o = Ss(a.substring(11));
      o && (t ? l.includes(o) ? r.removeTags.includes(o) || r.removeTags.push(o) : r.addTags.includes(o) || r.addTags.push(o) : r.toggleTags.includes(o) || r.toggleTags.push(o));
    } else if (a === "next")
      r.moveNext = !0;
    else if (a === "prev")
      r.movePrev = !0;
    else if (a === "delete")
      r.isDeleted = !0;
    else if (a.startsWith("lt:")) {
      const o = Ss(a.substring(3));
      o && (r.sendToLtSlot = o);
    }
  return r;
}, Py = async () => {
  try {
    const e = await J.fetchApi("/meld/databases");
    return ee(e);
  } catch (e) {
    return { ok: !1, error: e instanceof Error ? e.message : String(e) };
  }
}, Oy = async (e, t = !1) => {
  try {
    const n = await J.fetchApi("/meld/databases", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: e, switch_to_new: t })
    });
    return ee(n);
  } catch (n) {
    return { ok: !1, error: n instanceof Error ? n.message : String(n) };
  }
}, zy = async (e) => {
  try {
    const t = await J.fetchApi("/meld/databases/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: e })
    });
    return ee(t);
  } catch (t) {
    return { ok: !1, error: t instanceof Error ? t.message : String(t) };
  }
}, Fy = async (e, t) => {
  try {
    const n = await J.fetchApi("/meld/databases/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: e, confirm_text: t })
    });
    return ee(n);
  } catch (n) {
    return { ok: !1, error: n instanceof Error ? n.message : String(n) };
  }
}, $y = async (e, t) => {
  try {
    const n = await J.fetchApi("/meld/databases/rename", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: e, new_name: t })
    });
    return ee(n);
  } catch (n) {
    return { ok: !1, error: n instanceof Error ? n.message : String(n) };
  }
}, Dc = [
  "Light Table contents will be cleared.",
  "Search keywords, suggestions, and in-flight cache will be reinitialized.",
  "Current selection, viewer state, open modals, and search results will be reset.",
  "Database-specific settings may change after the switch.",
  "Switching is blocked while scan or analytics refresh is running."
], Wy = () => {
  const { dispatch: e } = ie(), [t, n] = p.useState(null), [r, l] = p.useState(""), [a, o] = p.useState({}), [i, c] = p.useState(!1), d = p.useCallback(async () => {
    c(!0);
    const u = await Py();
    if (c(!1), !u.ok) {
      $.error("Failed to fetch databases", u.error), e({ type: "SET_ERROR", payload: u.error });
      return;
    }
    n(u.data);
  }, [e]);
  p.useEffect(() => {
    d();
  }, [d]);
  const h = p.useCallback((u) => {
    window.dispatchEvent(new CustomEvent("meld-database-changed", { detail: u }));
  }, []), v = (t == null ? void 0 : t.active_database) ?? null, g = (t == null ? void 0 : t.databases) ?? [], j = p.useCallback((u, w) => {
    o((k) => ({
      ...k,
      [u]: w
    }));
  }, []), x = p.useCallback(
    (u) => a[u] ?? u,
    [a]
  ), _ = p.useCallback(async () => {
    const u = r.trim();
    if (!u) {
      e({ type: "SET_ERROR", payload: "Database name is required" });
      return;
    }
    e({
      type: "OPEN_CONFIRM_MODAL",
      payload: {
        title: "Create Database",
        message: `Create a new empty database named "${u}"?`,
        details: [
          "The new database will be created without switching immediately.",
          "Settings are stored per database, so the new database starts with its own settings state.",
          "You can switch to it afterwards from the database list."
        ],
        confirmLabel: "Create",
        onConfirm: async () => {
          c(!0);
          const w = await Oy(u, !1);
          if (c(!1), !w.ok)
            throw $.error("Failed to create database", w.error), e({ type: "SET_ERROR", payload: w.error }), new Error(w.error);
          n(w.data), l("");
        }
      }
    });
  }, [r, e]), b = p.useCallback(
    (u) => {
      u.is_active || e({
        type: "OPEN_CONFIRM_MODAL",
        payload: {
          title: "Switch Database",
          message: `Switch active database to "${u.name}"?`,
          details: Dc,
          confirmLabel: "Switch Database",
          onConfirm: async () => {
            c(!0);
            const w = await zy(u.name);
            if (c(!1), !w.ok)
              throw $.error("Failed to switch database", w.error), e({ type: "SET_ERROR", payload: w.error }), new Error(w.error);
            n(w.data), h(w.data);
          }
        }
      });
    },
    [e, h]
  ), f = p.useCallback(
    (u) => {
      const w = [
        `The database file "${u.filename}" will be permanently deleted.`,
        'Type "delete" to confirm the operation.'
      ];
      u.is_active && (w.push(
        "The app will switch to another database or recreate default.db automatically."
      ), w.push(...Dc)), e({
        type: "OPEN_CONFIRM_MODAL",
        payload: {
          title: "Delete Database",
          message: `Delete database "${u.name}" permanently?`,
          details: w,
          confirmLabel: "Delete Database",
          danger: !0,
          requiredText: "delete",
          requiredTextLabel: 'Type "delete" to enable deletion.',
          onConfirm: async (k) => {
            c(!0);
            const y = await Fy(u.name, k ?? "");
            if (c(!1), !y.ok)
              throw $.error("Failed to delete database", y.error), e({ type: "SET_ERROR", payload: y.error }), new Error(y.error);
            n(y.data), (u.is_active || (t == null ? void 0 : t.active_database) !== y.data.active_database || (t == null ? void 0 : t.database_generation) !== y.data.database_generation) && h(y.data);
          }
        }
      });
    },
    [e, h, t == null ? void 0 : t.active_database, t == null ? void 0 : t.database_generation]
  ), m = p.useCallback(
    (u) => {
      const w = x(u.name).trim();
      if (!w) {
        e({ type: "SET_ERROR", payload: "New database name is required" });
        return;
      }
      if (w === u.name) {
        e({ type: "SET_ERROR", payload: "New database name must be different" });
        return;
      }
      e({
        type: "OPEN_CONFIRM_MODAL",
        payload: {
          title: "Rename Database",
          message: `Rename database "${u.name}" to "${w}"?`,
          details: [
            "The database file and runtime directories will be renamed together.",
            "Current database contents are preserved."
          ],
          confirmLabel: "Rename Database",
          onConfirm: async () => {
            c(!0);
            const k = await $y(u.name, w);
            if (c(!1), !k.ok)
              throw $.error("Failed to rename database", k.error), e({ type: "SET_ERROR", payload: k.error }), new Error(k.error);
            n(k.data), o((y) => {
              const { [u.name]: C, ...T } = y;
              return { ...T, [w]: w };
            }), u.is_active && h(k.data);
          }
        }
      });
    },
    [e, h, x]
  );
  return p.useMemo(
    () => ({
      databases: g,
      activeDatabaseName: v,
      databaseNameInput: r,
      setDatabaseNameInput: l,
      getRenameDraftForDatabase: x,
      setRenameDraftForDatabase: j,
      isLoading: i,
      loadDatabases: d,
      submitCreateDatabase: _,
      confirmRenameDatabase: m,
      confirmSwitchDatabase: b,
      confirmDeleteDatabase: f
    }),
    [
      g,
      v,
      r,
      x,
      j,
      i,
      d,
      _,
      m,
      b,
      f
    ]
  );
}, Uy = () => {
  const { state: e, dispatch: t, updateSetting: n } = ie(), r = Wy(), [l, a] = p.useState("Gallery"), [o, i] = p.useState({
    ...e.settings
  }), [c, d] = p.useState({}), [h, v] = p.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [g, j] = p.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [x, _] = p.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [b, f] = p.useState(
    e.settings["viewer.thumbnail_window_size"].toString()
  ), [m, u] = p.useState(
    e.settings["gallery.trash_retention_days"].toString()
  ), [w, k] = p.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [y, C] = p.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [T, O] = p.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [M, z] = p.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [W, V] = p.useState(
    e.settings["viewer.details.core_prompt_count"].toString()
  ), [I, F] = p.useState(e.settings["fullscreen.details.max_positive_prompt_lines"].toString()), [L, Q] = p.useState(e.settings["fullscreen.details.max_negative_prompt_lines"].toString()), [S, E] = p.useState(
    e.settings["fullscreen.details.core_prompt_count"].toString()
  ), [D, P] = p.useState(
    e.settings["sidebar.thumbnail_size"].toString()
  );
  return {
    activeTab: l,
    setActiveTab: a,
    localSettings: o,
    setLocalSettings: i,
    shortcutErrors: c,
    setShortcutErrors: d,
    handleClose: async () => {
      const K = Object.keys(o).filter(
        (te) => o[te] !== e.settings[te] && !c[te]
      );
      if (K.length > 0)
        for (const te of K)
          await n(te, o[te]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (K, te) => {
      i((G) => ({
        ...G,
        [K]: !te
      }));
    },
    handleNumberChange: (K, te, G, Be) => {
      K === "gallery.initial_load_count" ? v(te) : K === "gallery.max_load_count" ? j(te) : K === "gallery.lineage_max_depth" ? _(te) : K === "viewer.thumbnail_window_size" ? f(te) : K === "gallery.trash_retention_days" ? u(te) : K === "gallery.auto_link_phash_threshold" ? k(te) : K === "gallery.suggest_phash_threshold" ? C(te) : K === "viewer.details.max_positive_prompt_lines" ? O(te) : K === "viewer.details.max_negative_prompt_lines" ? z(te) : K === "viewer.details.core_prompt_count" ? V(te) : K === "fullscreen.details.max_positive_prompt_lines" ? F(te) : K === "fullscreen.details.max_negative_prompt_lines" ? Q(te) : K === "fullscreen.details.core_prompt_count" ? E(te) : K === "sidebar.thumbnail_size" && P(te);
      const Ae = Number.parseInt(te, 10);
      if (!Number.isNaN(Ae)) {
        let De = Ae;
        G !== void 0 && De < G && (De = G), Be !== void 0 && De > Be && (De = Be), i((Re) => ({
          ...Re,
          [K]: De
        }));
      }
    },
    handleNumberBlur: (K) => {
      !K || !K.key || (K.key === "gallery.initial_load_count" ? v(o["gallery.initial_load_count"].toString()) : K.key === "gallery.max_load_count" ? j(o["gallery.max_load_count"].toString()) : K.key === "gallery.lineage_max_depth" ? _(o["gallery.lineage_max_depth"].toString()) : K.key === "viewer.thumbnail_window_size" ? f(o["viewer.thumbnail_window_size"].toString()) : K.key === "gallery.trash_retention_days" ? u(o["gallery.trash_retention_days"].toString()) : K.key === "gallery.auto_link_phash_threshold" ? k(o["gallery.auto_link_phash_threshold"].toString()) : K.key === "gallery.suggest_phash_threshold" ? C(o["gallery.suggest_phash_threshold"].toString()) : K.key === "viewer.details.max_positive_prompt_lines" ? O(
        o["viewer.details.max_positive_prompt_lines"].toString()
      ) : K.key === "viewer.details.max_negative_prompt_lines" ? z(
        o["viewer.details.max_negative_prompt_lines"].toString()
      ) : K.key === "viewer.details.core_prompt_count" ? V(o["viewer.details.core_prompt_count"].toString()) : K.key === "fullscreen.details.max_positive_prompt_lines" ? F(
        o["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : K.key === "fullscreen.details.max_negative_prompt_lines" ? Q(
        o["fullscreen.details.max_negative_prompt_lines"].toString()
      ) : K.key === "fullscreen.details.core_prompt_count" ? E(
        o["fullscreen.details.core_prompt_count"].toString()
      ) : K.key === "sidebar.thumbnail_size" && P(o["sidebar.thumbnail_size"].toString()));
    },
    handleResetShortcuts: () => {
      i((K) => ({
        ...K,
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
      })), d({});
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
            const K = await Kg();
            if (!K.ok) {
              $.error("Failed to clear thumbnail cache:", K.error), t({
                type: "SET_ERROR",
                payload: "Failed to clear thumbnail cache"
              });
              return;
            }
            t({
              type: "SHOW_TOAST",
              payload: "Thumbnail cache cleared"
            });
          }
        }
      });
    },
    validateShortcut: (K) => typeof K != "string" ? !1 : Dy(K),
    // Input states
    initialLoadCountInput: h,
    maxLoadCountInput: g,
    lineageMaxDepthInput: x,
    thumbnailWindowSizeInput: b,
    trashRetentionDaysInput: m,
    autoLinkPhashThresholdInput: w,
    suggestPhashThresholdInput: y,
    maxPositivePromptLinesInput: T,
    maxNegativePromptLinesInput: M,
    fullscreenMaxPositivePromptLinesInput: I,
    fullscreenMaxNegativePromptLinesInput: L,
    viewerCorePromptCountInput: W,
    fullscreenCorePromptCountInput: S,
    thumbnailSizeInput: D,
    ...r
  };
}, Y = ({
  label: e,
  description: t,
  children: n,
  labelId: r
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", id: r, children: e }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: t })
  ] }),
  /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__control", children: n })
] }), Vy = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: l,
  maxPositivePromptLinesInput: a,
  maxNegativePromptLinesInput: o,
  fullscreenCorePromptCountInput: i
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Navigation & Display" }),
    /* @__PURE__ */ s.jsx(
      Y,
      {
        label: "Show Tool Icons",
        description: "Display navigation and close icons in fullscreen mode.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["fullscreen.show_icons"],
              onChange: () => n("fullscreen.show_icons", e["fullscreen.show_icons"])
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
      {
        label: "Delete Mode",
        description: "Choose how images are deleted in fullscreen mode.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.delete_mode"],
            onChange: (c) => t((d) => ({
              ...d,
              "fullscreen.delete_mode": c.target.value
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
      Y,
      {
        label: "Loop Navigation",
        description: "Loop to the beginning/end when navigating in fullscreen.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["fullscreen.loop"],
              onChange: () => n("fullscreen.loop", e["fullscreen.loop"])
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
      {
        label: "Small Image Display",
        description: "Choose how to display images smaller than the screen in fullscreen.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.small_image_mode"],
            onChange: (c) => t((d) => ({
              ...d,
              "fullscreen.small_image_mode": c.target.value
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
      Y,
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
      Y,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.details.show_filename"],
            onChange: (c) => t((d) => ({
              ...d,
              "fullscreen.details.show_filename": c.target.value
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
      Y,
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
      Y,
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
      Y,
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
    /* @__PURE__ */ s.jsx(Y, { label: "Show Model", description: "Display model name in fullscreen details.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
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
    ] }) }),
    /* @__PURE__ */ s.jsx(
      Y,
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
      Y,
      {
        label: "Show Core Prompt",
        description: "Display a subset of keywords from the positive prompt based on rarity (bottom analytics counts).",
        labelId: "fullscreen-show-core-prompt-label",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              id: "fullscreen-core-prompt-checkbox",
              "aria-labelledby": "fullscreen-show-core-prompt-label",
              checked: e["fullscreen.details.show_core_prompt"],
              onChange: () => n(
                "fullscreen.details.show_core_prompt",
                e["fullscreen.details.show_core_prompt"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
      {
        label: "Core Prompt Keyword Count",
        description: "Number of rarity keywords to display in fullscreen.",
        labelId: "fullscreen-core-prompt-count-label",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            id: "fullscreen-core-prompt-count",
            "aria-labelledby": "fullscreen-core-prompt-count-label",
            className: "meld-number-input",
            value: i,
            min: 1,
            max: 100,
            onChange: (c) => r("fullscreen.details.core_prompt_count", c.target.value, 1, 100),
            onBlur: () => l({
              key: "fullscreen.details.core_prompt_count"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
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
            onChange: (c) => r(
              "fullscreen.details.max_positive_prompt_lines",
              c.target.value,
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
      Y,
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
      Y,
      {
        label: "Show User Notes",
        description: "Display user notes in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.details.show_user_notes"],
            onChange: (c) => t((d) => ({
              ...d,
              "fullscreen.details.show_user_notes": c.target.value
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
      Y,
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
            onChange: (c) => r(
              "fullscreen.details.max_negative_prompt_lines",
              c.target.value,
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
    /* @__PURE__ */ s.jsx(Y, { label: "Show Tags", description: "Display tags in fullscreen details.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
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
    ] }) })
  ] })
] });
function Tt({ size: e = 24, color: t, children: n, ...r }) {
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
function Df() {
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx("path", { d: "M18 16.6v2.8", stroke: "var(--meld-icon-halo, transparent)", strokeWidth: 4 }),
    /* @__PURE__ */ s.jsx("path", { d: "M16.6 18h2.8", stroke: "var(--meld-icon-halo, transparent)", strokeWidth: 4 }),
    /* @__PURE__ */ s.jsx("path", { d: "M18 16.6v2.8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16.6 18h2.8" })
  ] });
}
function Rf(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h12" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14 8l4 4-4 4" })
  ] });
}
function Pf(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M4.5 5.5h7l2 2h6v11a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 15h3" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 12l3 0" }),
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 10.5l3 1.5-3 1.5" })
  ] });
}
function Of(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16 8l4 4-4 4" })
  ] });
}
function zf(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx(Df, {})
  ] });
}
function Ff(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 9l3 3-3 3" })
  ] });
}
function $f(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 9l3 3-3 3" }),
    /* @__PURE__ */ s.jsx(Df, {})
  ] });
}
function Wf(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "6", width: "12.5", height: "10.5", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M7.5 13l2-2 2 2 2.5-3 2.5 3" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 17.5l5-5" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16.5 19.5l3-3" })
  ] });
}
function Uf(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M20 12l-8 8-9-9v-5a2 2 0 0 1 2-2h5z" }),
    /* @__PURE__ */ s.jsx("circle", { cx: "7.5", cy: "8.5", r: "1" })
  ] });
}
function Vf(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 4.5h-8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9l-3-4z" }),
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 4.5v4h4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 11h6" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 15h6" })
  ] });
}
function Bf(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M7 7h10" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 7v-2h6v2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 7l1 12h6l1-12" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 13.5a3.5 3.5 0 1 1-1.2-2.6" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 9.5v3h-3" })
  ] });
}
const Qf = [
  { id: "", label: "None", icon: null },
  {
    id: "add_unified_loader",
    label: "Add Unified Loader",
    icon: Rf
  },
  {
    id: "send_to_workflow",
    label: "Send to Workflow",
    icon: Ff
  },
  {
    id: "send_to_workflow_mask",
    label: "Send to Workflow (Mask)",
    icon: $f
  },
  { id: "queue_workflow", label: "Queue Workflow", icon: Of },
  {
    id: "queue_workflow_mask",
    label: "Queue Workflow (Mask)",
    icon: zf
  },
  {
    id: "restore_full_workflow",
    label: "Restore Full Workflow",
    icon: Pf
  },
  { id: "edit_tags", label: "Edit Tags", icon: Uf },
  { id: "edit_notes", label: "Edit Notes", icon: Vf },
  {
    id: "edit_source_image",
    label: "Edit Source Image",
    icon: Wf
  },
  {
    id: "restore_image",
    label: "Restore Image (Trash)",
    icon: Bf
  },
  { id: "delete_or_trash", label: "Delete / Trash", icon: Wt }
], By = ({
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
      Y,
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
            onChange: (c) => r("sidebar.thumbnail_size", c.target.value, 50, 500),
            onBlur: () => l({ key: "sidebar.thumbnail_size" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
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
      Y,
      {
        label: "Show Dimensions",
        description: "Display the image dimensions (width x height) on the card.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["sidebar.show_dimensions"],
              onChange: () => n("sidebar.show_dimensions", e["sidebar.show_dimensions"])
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
      {
        label: "Show Created At",
        description: "Display the image creation date and time on the card.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["sidebar.show_created_at"],
              onChange: () => n("sidebar.show_created_at", e["sidebar.show_created_at"])
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
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
      Y,
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
    /* @__PURE__ */ s.jsx(Y, { label: "Show Model", description: "Display the model name on the card.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
      /* @__PURE__ */ s.jsx(
        "input",
        {
          type: "checkbox",
          checked: e["sidebar.show_model_name"],
          onChange: () => n("sidebar.show_model_name", e["sidebar.show_model_name"])
        }
      ),
      /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
    ] }) }),
    /* @__PURE__ */ s.jsx(Y, { label: "Show Positive", description: "Display the positive prompt on the card.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
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
    ] }) }),
    /* @__PURE__ */ s.jsx(Y, { label: "Show Negative", description: "Display the negative prompt on the card.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
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
    ] }) }),
    /* @__PURE__ */ s.jsx(Y, { label: "Show User Notes", description: "Display user notes on the card.", children: /* @__PURE__ */ s.jsxs(
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
    ) }),
    /* @__PURE__ */ s.jsx(Y, { label: "Show Tags", description: "Display tags on the card.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
      /* @__PURE__ */ s.jsx(
        "input",
        {
          type: "checkbox",
          checked: e["sidebar.show_tags"],
          onChange: () => n("sidebar.show_tags", e["sidebar.show_tags"])
        }
      ),
      /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
    ] }) })
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Search Behavior" }),
    /* @__PURE__ */ s.jsx(
      Y,
      {
        label: "Show Quick Suggestions",
        description: "Show suggested keywords when the search field is empty.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["search.quick_suggestions"],
              onChange: () => n("search.quick_suggestions", e["search.quick_suggestions"])
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
      {
        label: "Show Input Suggestions",
        description: "Show suggestions when typing search prefixes (e.g. pos:).",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["search.input_suggest"],
              onChange: () => n("search.input_suggest", e["search.input_suggest"])
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
      Y,
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
            onChange: (c) => r("gallery.initial_load_count", c.target.value, 10, 1e3),
            onBlur: () => l({ key: "gallery.initial_load_count" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
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
            onChange: (c) => r("gallery.max_load_count", c.target.value, 10, 1e6),
            onBlur: () => l({ key: "gallery.max_load_count" })
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Quick Shortcuts (Card)" }),
    [1, 2, 3].map((c) => /* @__PURE__ */ s.jsx(
      Y,
      {
        label: `Quick Shortcut Slot ${c}`,
        description: `Choose an action for shortcut slot ${c}.`,
        children: /* @__PURE__ */ s.jsx(
          "select",
          {
            className: "meld-select",
            value: e[Qg(c)],
            onChange: (d) => t((h) => ({
              ...h,
              [`gallery.quick_shortcut.${c}`]: d.target.value
            })),
            children: Qf.map((d) => /* @__PURE__ */ s.jsx("option", { value: d.id, children: d.label }, d.id))
          }
        )
      },
      c
    ))
  ] })
] }), Qy = () => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list meld-information-tab", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "ComfyUI-Meld" }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
      /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", children: "Version" }),
      /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: "1.2.1" })
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
] }), Hy = ({
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
            " - Send to Light Table (Example: ",
            /* @__PURE__ */ s.jsx("code", { children: "lt:keep" }),
            ",",
            " ",
            /* @__PURE__ */ s.jsx("code", { children: "lt:refine" }),
            ", ",
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
        Y,
        {
          label: `Shortcut ${d === 9 ? 0 : d + 1} (Key: ${d === 9 ? 0 : d + 1})`,
          description: `Command to execute when pressing '${d === 9 ? 0 : d + 1}' in View/Full Screen mode.`,
          children: /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "text",
              className: `meld-text-input ${n[c] ? "meld-text-input--error" : ""}`,
              value: e[c] || "",
              onChange: (h) => {
                t((v) => ({
                  ...v,
                  [c]: h.target.value
                }));
              },
              onBlur: () => {
                const h = l(e[c] || "");
                r((v) => ({
                  ...v,
                  [c]: !h
                }));
              }
            }
          )
        },
        c
      )),
      /* @__PURE__ */ s.jsx(
        Y,
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
      Y,
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
}, Ky = ({
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
  suggestPhashThresholdInput: h,
  databases: v,
  activeDatabaseName: g,
  databaseNameInput: j,
  setDatabaseNameInput: x,
  getRenameDraftForDatabase: _,
  setRenameDraftForDatabase: b,
  isDatabaseLoading: f,
  handleCreateDatabase: m,
  handleRenameDatabase: u,
  handleSwitchDatabase: w,
  handleDeleteDatabase: k
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Image Matching" }),
    /* @__PURE__ */ s.jsx(
      Y,
      {
        label: "Source Matching Strategy",
        description: "Algorithm used to identify the source image.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["gallery.matching_strategy"],
            onChange: (y) => l((C) => ({
              ...C,
              "gallery.matching_strategy": y.target.value
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
      Y,
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
            onChange: (y) => t("gallery.auto_link_phash_threshold", y.target.value, 0, 100),
            onBlur: () => n({ key: "gallery.auto_link_phash_threshold" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
      {
        label: "Source Suggestion Threshold (%)",
        description: "Minimum similarity percentage for showing candidates in manual 'Add Source' dialog (0-100). Default: 82%. Permissive enough to find ancestors.",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: h,
            min: 0,
            max: 100,
            onChange: (y) => t("gallery.suggest_phash_threshold", y.target.value, 0, 100),
            onBlur: () => n({ key: "gallery.suggest_phash_threshold" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
      {
        label: "Inherit Tags from Source",
        description: "Automatically copy tags from the source image when a new image is registered or saved.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["gallery.inherit_tags"],
              onChange: () => r("gallery.inherit_tags", e["gallery.inherit_tags"])
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
      Y,
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
            onChange: (y) => t("gallery.lineage_max_depth", y.target.value, 1, 10),
            onBlur: () => n({ key: "gallery.lineage_max_depth" })
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Database" }),
    /* @__PURE__ */ s.jsx(
      Y,
      {
        label: "Create Database",
        description: "Create a new empty database file. Creation uses a confirmation modal.",
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-inline-actions", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "text",
              className: "meld-input",
              value: j,
              onChange: (y) => x(y.target.value),
              placeholder: "database_name",
              disabled: f,
              "aria-label": "Database name"
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-button meld-button--secondary",
              onClick: m,
              disabled: f || j.trim().length === 0,
              children: "Create"
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-database-list", role: "list", "aria-label": "Database list", children: v.map((y) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-database-card", role: "listitem", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-database-card__info", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-database-card__title-row", children: [
          /* @__PURE__ */ s.jsx("span", { className: "meld-settings-database-card__title", children: y.name }),
          y.is_active && /* @__PURE__ */ s.jsx("span", { className: "meld-settings-database-card__badge", children: "Active" })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-database-card__meta", children: [
          /* @__PURE__ */ s.jsx("span", { children: y.filename }),
          /* @__PURE__ */ s.jsxs("span", { children: [
            y.image_count,
            " images"
          ] }),
          g === y.name && /* @__PURE__ */ s.jsx("span", { children: "Currently loaded" })
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-database-card__actions", children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            className: "meld-input meld-settings-database-card__rename-input",
            value: _(y.name),
            onChange: (C) => b(y.name, C.target.value),
            placeholder: "new_database_name",
            disabled: f,
            "aria-label": `Rename ${y.name}`
          }
        ),
        /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            className: "meld-button meld-button--secondary",
            onClick: () => u(y),
            disabled: f || _(y.name).trim().length === 0 || _(y.name).trim() === y.name,
            children: "Rename"
          }
        ),
        /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            className: "meld-button meld-button--secondary",
            onClick: () => w(y),
            disabled: f || y.is_active,
            children: "Switch"
          }
        ),
        /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            className: "meld-btn meld-btn--danger",
            onClick: () => k(y),
            disabled: f || !y.can_delete,
            children: "Delete"
          }
        )
      ] })
    ] }, y.name)) })
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Thumbnail Cache" }),
    /* @__PURE__ */ s.jsx(
      Y,
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
      Y,
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
            onChange: (y) => t("gallery.trash_retention_days", y.target.value, 0, 365),
            onBlur: () => n({ key: "gallery.trash_retention_days" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
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
] }), Gy = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: l,
  thumbnailWindowSizeInput: a,
  maxPositivePromptLinesInput: o,
  maxNegativePromptLinesInput: i,
  viewerCorePromptCountInput: c
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Navigation & Display" }),
    /* @__PURE__ */ s.jsx(
      Y,
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
      Y,
      {
        label: "Small Image Display",
        description: "Choose how to display images smaller than the viewer area.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.small_image_mode"],
            onChange: (d) => t((h) => ({
              ...h,
              "viewer.small_image_mode": d.target.value
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
      Y,
      {
        label: "Show Tool Icons",
        description: "Display navigation and action icons in view mode.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.show_icons"],
              onChange: () => n("viewer.show_icons", e["viewer.show_icons"])
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
      {
        label: "Show Thumbnails",
        description: "Display the thumbnail strip at the bottom of the viewer. Disabling this can improve performance on slower systems.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.show_thumbnails"],
              onChange: () => n("viewer.show_thumbnails", e["viewer.show_thumbnails"])
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
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
            onChange: (d) => r("viewer.thumbnail_window_size", d.target.value, 1, 1e4),
            onBlur: () => l({ key: "viewer.thumbnail_window_size" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(Y, { label: "Delete Mode", description: "Choose how images are deleted in view mode.", children: /* @__PURE__ */ s.jsxs(
      "select",
      {
        className: "meld-select",
        value: e["viewer.delete_mode"],
        onChange: (d) => t((h) => ({
          ...h,
          "viewer.delete_mode": d.target.value
        })),
        children: [
          /* @__PURE__ */ s.jsx("option", { value: "confirm", children: "Confirmed" }),
          /* @__PURE__ */ s.jsx("option", { value: "target_only", children: "Unconfirmed (Target Only)" }),
          /* @__PURE__ */ s.jsx("option", { value: "lineage", children: "Unconfirmed (Include Lineage)" })
        ]
      }
    ) })
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Details Panel" }),
    /* @__PURE__ */ s.jsx(
      Y,
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
      Y,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path in the details.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.details.show_filename"],
            onChange: (d) => t((h) => ({
              ...h,
              "viewer.details.show_filename": d.target.value
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
    /* @__PURE__ */ s.jsx(Y, { label: "Show Dimensions", description: "Display dimensions in the details panel.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
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
    ] }) }),
    /* @__PURE__ */ s.jsx(
      Y,
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
      Y,
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
    /* @__PURE__ */ s.jsx(Y, { label: "Show Model", description: "Display model name in the details panel.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
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
    ] }) }),
    /* @__PURE__ */ s.jsx(
      Y,
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
      Y,
      {
        label: "Show Core Prompt",
        description: "Display a subset of keywords from the positive prompt based on rarity (bottom analytics counts).",
        labelId: "viewer-details-show-core-prompt-label",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              id: "viewer-details-show-core-prompt-checkbox",
              "aria-labelledby": "viewer-details-show-core-prompt-label",
              checked: e["viewer.details.show_core_prompt"],
              onChange: () => n(
                "viewer.details.show_core_prompt",
                e["viewer.details.show_core_prompt"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
      {
        label: "Core Prompt Keyword Count",
        description: "Number of rarity keywords to display.",
        labelId: "viewer-details-core-prompt-count-label",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            id: "viewer-details-core-prompt-count",
            "aria-labelledby": "viewer-details-core-prompt-count-label",
            className: "meld-number-input",
            value: c,
            min: 1,
            max: 100,
            onChange: (d) => r("viewer.details.core_prompt_count", d.target.value, 1, 100),
            onBlur: () => l({
              key: "viewer.details.core_prompt_count"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
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
            onChange: (d) => r("viewer.details.max_positive_prompt_lines", d.target.value, 1, 100),
            onBlur: () => l({
              key: "viewer.details.max_positive_prompt_lines"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
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
    /* @__PURE__ */ s.jsx(Y, { label: "Show User Notes", description: "Display user notes in the details panel.", children: /* @__PURE__ */ s.jsxs(
      "select",
      {
        className: "meld-select",
        value: e["viewer.details.show_user_notes"],
        onChange: (d) => t((h) => ({
          ...h,
          "viewer.details.show_user_notes": d.target.value
        })),
        children: [
          /* @__PURE__ */ s.jsx("option", { value: "always", children: "Always show" }),
          /* @__PURE__ */ s.jsx("option", { value: "if_present", children: "Show only when present" }),
          /* @__PURE__ */ s.jsx("option", { value: "hidden", children: "Always hide" })
        ]
      }
    ) }),
    /* @__PURE__ */ s.jsx(
      Y,
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
            onChange: (d) => r("viewer.details.max_negative_prompt_lines", d.target.value, 1, 100),
            onBlur: () => l({
              key: "viewer.details.max_negative_prompt_lines"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(Y, { label: "Show Tags", description: "Display tags in the details panel.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
      /* @__PURE__ */ s.jsx(
        "input",
        {
          type: "checkbox",
          checked: e["viewer.details.show_tags"],
          onChange: () => n("viewer.details.show_tags", e["viewer.details.show_tags"])
        }
      ),
      /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
    ] }) })
  ] })
] }), Hf = () => {
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
    handleResetShortcuts: h,
    handleViewTrash: v,
    handleClearThumbnailCache: g,
    validateShortcut: j,
    // Input states
    initialLoadCountInput: x,
    maxLoadCountInput: _,
    lineageMaxDepthInput: b,
    thumbnailWindowSizeInput: f,
    trashRetentionDaysInput: m,
    autoLinkPhashThresholdInput: u,
    suggestPhashThresholdInput: w,
    maxPositivePromptLinesInput: k,
    maxNegativePromptLinesInput: y,
    fullscreenMaxPositivePromptLinesInput: C,
    fullscreenMaxNegativePromptLinesInput: T,
    viewerCorePromptCountInput: O,
    fullscreenCorePromptCountInput: M,
    thumbnailSizeInput: z,
    databases: W,
    activeDatabaseName: V,
    databaseNameInput: I,
    setDatabaseNameInput: F,
    getRenameDraftForDatabase: L,
    setRenameDraftForDatabase: Q,
    isLoading: S,
    submitCreateDatabase: E,
    confirmRenameDatabase: D,
    confirmSwitchDatabase: P,
    confirmDeleteDatabase: N
  } = Uy();
  ke({ onEscape: o });
  const A = p.useRef(!1), R = (K) => {
    K.target === K.currentTarget && (A.current = !0);
  }, U = (K) => {
    K.target === K.currentTarget && A.current && o(), A.current = !1;
  }, B = [
    { id: "Gallery", label: "Gallery" },
    { id: "View", label: "View" },
    { id: "Full Screen", label: "Full Screen" },
    { id: "Shortcuts", label: "Shortcuts" },
    { id: "System", label: "System" },
    { id: "Information", label: "Information" }
  ], X = (K) => K.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""), re = (K, te) => {
    if (K.key === "ArrowDown" || K.key === "ArrowRight") {
      K.preventDefault();
      const G = B[(te + 1) % B.length];
      G && t(G.id);
    } else if (K.key === "ArrowUp" || K.key === "ArrowLeft") {
      K.preventDefault();
      const G = B[(te - 1 + B.length) % B.length];
      G && t(G.id);
    }
  }, le = () => {
    switch (e) {
      case "System":
        return /* @__PURE__ */ s.jsx(
          Ky,
          {
            localSettings: n,
            handleNumberChange: c,
            handleNumberBlur: d,
            handleToggle: i,
            setLocalSettings: r,
            handleViewTrash: v,
            handleClearThumbnailCache: g,
            lineageMaxDepthInput: b,
            trashRetentionDaysInput: m,
            autoLinkPhashThresholdInput: u,
            suggestPhashThresholdInput: w,
            databases: W,
            activeDatabaseName: V,
            databaseNameInput: I,
            setDatabaseNameInput: F,
            getRenameDraftForDatabase: L,
            setRenameDraftForDatabase: Q,
            isDatabaseLoading: S,
            handleCreateDatabase: E,
            handleRenameDatabase: D,
            handleSwitchDatabase: P,
            handleDeleteDatabase: N
          }
        );
      case "Gallery":
        return /* @__PURE__ */ s.jsx(
          By,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailSizeInput: z,
            initialLoadCountInput: x,
            maxLoadCountInput: _
          }
        );
      case "View":
        return /* @__PURE__ */ s.jsx(
          Gy,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailWindowSizeInput: f,
            maxPositivePromptLinesInput: k,
            maxNegativePromptLinesInput: y,
            viewerCorePromptCountInput: O
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ s.jsx(
          Vy,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            maxPositivePromptLinesInput: C,
            maxNegativePromptLinesInput: T,
            fullscreenCorePromptCountInput: M
          }
        );
      case "Shortcuts":
        return /* @__PURE__ */ s.jsx(
          Hy,
          {
            localSettings: n,
            setLocalSettings: r,
            shortcutErrors: l,
            setShortcutErrors: a,
            validateShortcut: j,
            handleToggle: i,
            handleResetShortcuts: h
          }
        );
      case "Information":
        return /* @__PURE__ */ s.jsx(Qy, {});
      default:
        return null;
    }
  };
  return ue.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: R,
        onMouseUp: U,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content meld-settings-modal", onClick: (K) => K.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsx("h2", { children: "Settings" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: o,
                "aria-label": "Close",
                children: /* @__PURE__ */ s.jsx(de, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-layout", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ s.jsx("div", { className: "meld-tabs", role: "tablist", children: B.map((K, te) => /* @__PURE__ */ s.jsx(
              "button",
              {
                id: `meld-settings-tab-${X(K.id)}`,
                type: "button",
                role: "tab",
                "aria-selected": e === K.id,
                tabIndex: e === K.id ? 0 : -1,
                "aria-controls": `meld-settings-tabpanel-${X(K.id)}`,
                className: `meld-tab ${e === K.id ? "active" : ""}`,
                onClick: () => t(K.id),
                onKeyDown: (G) => re(G, te),
                children: K.label
              },
              K.id
            )) }) }),
            /* @__PURE__ */ s.jsx(
              "div",
              {
                className: "meld-modal-body",
                role: "tabpanel",
                id: `meld-settings-tabpanel-${X(e)}`,
                "aria-labelledby": `meld-settings-tab-${X(e)}`,
                children: le()
              }
            )
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, _t = "none", Xr = (e) => {
  e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
}, Ge = (e) => {
  e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation();
}, qy = () => {
  const e = document.activeElement;
  if (!(e instanceof HTMLElement))
    return !1;
  const t = e.tagName;
  return t === "INPUT" || t === "TEXTAREA" || !!e.isContentEditable;
}, Kf = ({
  imageIds: e,
  initialTags: t,
  onClose: n,
  onSuccess: r
}) => {
  const { dispatch: l, refreshImages: a } = ie(), [o, i] = p.useState([]), [c, d] = p.useState(t), [h, v] = p.useState(""), [g, j] = p.useState(!0), [x, _] = p.useState(!1), b = p.useRef(null), f = e.length > 1, m = p.useRef(!1), u = (M) => {
    M.target === M.currentTarget && (m.current = !0);
  }, w = (M) => {
    M.target === M.currentTarget && m.current && n(), m.current = !1;
  };
  p.useEffect(() => {
    let M = !0;
    return (async () => {
      j(!0);
      const W = await ci();
      if (M) {
        if (j(!1), !W.ok) {
          $.error("Failed to fetch tags:", W.error);
          return;
        }
        i(W.data || []);
      }
    })(), () => {
      M = !1;
    };
  }, []), p.useEffect(() => {
    b.current && b.current.focus();
  }, []), ke({ onEscape: n });
  const k = p.useMemo(() => o.filter(
    (M) => M.name.toLowerCase().includes(h.toLowerCase()) && !c.includes(M.name)
  ), [o, h, c]), y = (M) => {
    const z = M.trim();
    if (z.toLowerCase() === _t) {
      alert(`Tag name '${_t}' is reserved for search and cannot be used.`);
      return;
    }
    z && !c.includes(z) && (d([...c, z]), v(""));
  }, C = (M) => {
    d(c.filter((z) => z !== M));
  }, T = async () => {
    _(!0);
    let M;
    if (f) {
      const z = c.filter((V) => !t.includes(V)), W = t.filter((V) => !c.includes(V));
      M = await wf(e, z, W);
    } else {
      const z = e[0];
      if (z === void 0) {
        _(!1), alert("No image selected");
        return;
      }
      M = await Lg(z, c);
    }
    if (_(!1), !M.ok) {
      $.error("Failed to update tags:", M.error), alert("Failed to update tags.");
      return;
    }
    await a(), l({ type: "CLEAR_SELECTION" }), r == null || r(), n();
  }, O = (M) => {
    M.key === "Enter" && h.trim() && (Ge(M), y(h.trim()));
  };
  return ue.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: u,
        onMouseUp: w,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (M) => M.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(ar, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: f ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(de, { size: 20 }) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
            f && /* @__PURE__ */ s.jsx(
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
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: f ? "Collective Tags" : "Selected Tags" }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: c.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : c.map((M) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                M,
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => C(M),
                    children: /* @__PURE__ */ s.jsx(de, { size: 12 })
                  }
                )
              ] }, M)) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ s.jsx(on, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    ref: b,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: h,
                    onChange: (M) => v(M.target.value),
                    onKeyDown: O
                  }
                ),
                h.trim() && !c.includes(h.trim()) && /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => y(h),
                    children: [
                      /* @__PURE__ */ s.jsx(Ml, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: g ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : k.length === 0 ? h ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : k.map((M) => /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => y(M.name),
                  children: M.name
                },
                M.id
              )) })
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-footer", children: [
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-btn meld-btn--secondary", onClick: n, children: "Cancel" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn--primary",
                onClick: T,
                disabled: x,
                children: x ? "Saving..." : "Save Changes"
              }
            )
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, Tl = (e, t) => {
  const n = p.useCallback(async (_) => no(_), []), r = p.useCallback(
    async (_, b, f) => wf(_, b, f),
    []
  ), l = p.useCallback(async (_) => {
    const b = await Dg(_.id);
    return b.ok ? b.data.workflow ? (await window.app.loadGraphData(b.data.workflow), $.log("Workflow restored successfully from Meld"), !0) : (alert("No workflow information is saved for this image."), !1) : ($.error("Error restoring workflow:", b.error), alert("Failed to restore workflow."), !1);
  }, []), a = p.useCallback(async (_) => {
    const b = await Rg(_.id);
    if (!b.ok)
      return $.error("Error adding Unified Loader:", b.error), alert("Failed to load settings."), !1;
    const f = b.data, m = f.is_flux ? "MeldUnifiedFluxLoader" : "MeldUnifiedLoader", u = window.app, w = window.LiteGraph;
    if (!u.graph || !u.canvas || !w)
      return alert("ComfyUI graph is not ready. Please open a workflow first."), !1;
    const k = w.createNode(m);
    if (!k)
      return $.error(`Node type ${m} not found.`), alert(
        `Node type ${m} not found. Please make sure the Meld Unified Loader node is installed.`
      ), !1;
    const y = f.is_flux ? {
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
    if (k.widgets) {
      for (const [M, z] of Object.entries(y)) {
        const W = f[M];
        if (W != null && W !== "") {
          const V = k.widgets.find((I) => I.name === z);
          V && (V.value = W);
        }
      }
      const O = k.widgets.find((M) => M.name === "control_after_generate");
      O && (O.value = "fixed");
    }
    const C = u.canvas.ds.offset, T = u.canvas.ds.scale;
    return k.pos = [(-C[0] + 400) / T, (-C[1] + 300) / T], u.graph.add(k), u.canvas.selectNode(k), u.canvas.centerOnNode(k), !0;
  }, []), o = p.useCallback(
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
  ), i = p.useCallback(
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
  ), c = p.useCallback(
    (_) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: _.id }
      });
    },
    [t]
  ), d = p.useCallback(
    (_) => {
      const b = window.app;
      if (!(b != null && b.graph))
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No active workflow graph found. Please open a workflow first."
          }
        }), !1;
      const f = b.graph._nodes.filter((u) => Kn(u.type));
      if (f.length === 0)
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
          }
        }), !1;
      if (f.length > 1)
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "node_selection",
            image: _,
            nodes: f.map((u) => ({
              id: String(u.id),
              type: u.type ?? "",
              title: u.title
            })),
            onSelect: (u) => {
              Yr(_, u);
            }
          }
        }), !0;
      const m = Yr(_);
      return m.ok ? !0 : (t({
        type: "OPEN_MODAL",
        payload: {
          type: "error",
          message: m.reason === "no_app_graph" ? "No active workflow graph found. Please open a workflow first." : m.reason === "no_widgets" || m.reason === "no_image_widget" ? "The selected loader node does not expose an image widget." : "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
        }
      }), !1);
    },
    [t]
  ), h = p.useCallback(
    (_) => {
      const b = Array.isArray(_) ? _ : [_];
      t({
        type: "OPEN_MODAL",
        payload: { type: "workflow_selection", images: b }
      });
    },
    [t]
  ), v = p.useCallback(
    async (_, b = "run") => {
      var u;
      $.log("handleRunWithMask called", _, b);
      const f = Array.isArray(_) ? _ : [_];
      if (b === "apply") {
        const w = window.app, k = ((u = w == null ? void 0 : w.graph) == null ? void 0 : u._nodes) || [];
        $.log(
          "Current graph nodes:",
          k.map((O) => ({
            id: O.id,
            type: O.type ?? ""
          }))
        );
        const y = k.some((O) => Mr(O.type)), C = k.some((O) => Kn(O.type));
        if ($.log("Nodes found:", { hasMaskNode: y, hasLoaderNode: C }), !y || !C) {
          const O = [];
          C || O.push("'Meld Image Loader'"), y || O.push("'Load Image (as Mask)'"), t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: `Required nodes missing in current workflow: ${O.join(" and ")}. Please add them to use the Mask Tool.`
            }
          });
          return;
        }
        if (f.length > 1) {
          t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: "'Apply' mode without queueing only supports single image selection."
            }
          });
          return;
        }
        const T = f[0];
        if (!T) {
          t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: "No images selected"
            }
          });
          return;
        }
        t({
          type: "OPEN_MODAL",
          payload: { type: "mask_editor", imageId: T.id, mode: b }
        });
        return;
      }
      const m = await Nf();
      if (m.ok) {
        if (!m.data.some(
          (k) => k.valid && k.mask_count >= 1
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
      } else
        $.error("[Meld] Error checking workflows:", m.error);
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "workflow_selection",
          images: f,
          isMaskSequence: !0
        }
      });
    },
    [t]
  ), g = p.useCallback(
    async (_, b) => {
      const f = _.id, m = await no([f]);
      if (!m.ok) {
        t({ type: "SET_ERROR", payload: m.error });
        return;
      }
      const u = m.data.restored_ids || [f];
      t({ type: "REMOVE_IMAGES", payload: u }), b == null || b();
    },
    [t]
  ), j = p.useCallback(
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
  ), x = p.useCallback(
    async (_, b) => {
      const f = await Ag(_, b);
      if (!f.ok) {
        t({ type: "SET_ERROR", payload: f.error });
        return;
      }
      t({ type: "UPDATE_IMAGE", payload: f.data });
    },
    [t]
  );
  return {
    restoreImages: n,
    bulkUpdateImageTags: r,
    handleRestoreWorkflow: l,
    handleAddUnifiedLoader: a,
    handleEditTags: o,
    handleEditSource: c,
    handleSendToWorkflow: d,
    handleRunWithWorkflow: h,
    handleRunWithMask: v,
    handleRestore: g,
    handleDelete: j,
    handleEditNotes: i,
    handleUpdateUserNotes: x
  };
}, Gf = ({ imageId: e, initialNotes: t, onClose: n }) => {
  const { state: r, dispatch: l } = ie(), { handleUpdateUserNotes: a } = Tl(r, l), [o, i] = p.useState(t), [c, d] = p.useState(!1), h = p.useRef(null), v = p.useRef(!1), g = (_) => {
    _.target === _.currentTarget && (v.current = !0);
  }, j = (_) => {
    _.target === _.currentTarget && v.current && n(), v.current = !1;
  };
  p.useEffect(() => {
    h.current && h.current.focus();
  }, []);
  const x = p.useCallback(async () => {
    d(!0);
    try {
      await a(e, o), n();
    } catch (_) {
      $.error("Failed to update notes:", _), alert("Failed to update notes.");
    } finally {
      d(!1);
    }
  }, [a, e, o, n]);
  return p.useEffect(() => {
    const _ = (b) => {
      b.key === "Enter" && (b.ctrlKey || b.metaKey) && b.target === h.current && (b.preventDefault(), b.stopPropagation(), b.stopImmediatePropagation(), x());
    };
    return window.addEventListener("keydown", _, { capture: !0 }), () => {
      window.removeEventListener("keydown", _, {
        capture: !0
      });
    };
  }, [x]), ke({ onEscape: n }), ue.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: g,
        onMouseUp: j,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (_) => _.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(hg, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: "Edit Notes" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, "aria-label": "Close", children: /* @__PURE__ */ s.jsx(de, { size: 20 }) })
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-note-edit-section", children: [
            /* @__PURE__ */ s.jsx(
              "textarea",
              {
                id: "meld-notes-textarea",
                ref: h,
                className: "meld-image-card__notes-textarea",
                "aria-label": "Image notes",
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
                onChange: (_) => i(_.target.value)
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
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-btn meld-btn--secondary", onClick: n, children: "Cancel" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn--primary",
                onClick: x,
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
}, qf = ({
  image: e,
  nodes: t,
  onSelect: n
}) => {
  const { dispatch: r } = ie(), l = p.useCallback(() => {
    r({ type: "CLOSE_MODAL" });
  }, [r]);
  ke({ onEscape: l });
  const a = p.useRef(!1), o = p.useCallback((c) => {
    c.target === c.currentTarget && (a.current = !0);
  }, []), i = p.useCallback(
    (c) => {
      c.target === c.currentTarget && a.current && l(), a.current = !1;
    },
    [l]
  );
  return ue.createPortal(
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
                    "aria-label": "Close",
                    children: /* @__PURE__ */ s.jsx(de, { size: 20, "aria-hidden": !0 })
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
                      "Multiple loader nodes found in the current workflow. Select which one to use for",
                      " ",
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
                      /* @__PURE__ */ s.jsx(qr, { size: 12 })
                    ]
                  },
                  c.id
                )) })
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-btn meld-btn--secondary", onClick: l, children: "Cancel" }) })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, Yf = ({
  images: e,
  onExecute: t,
  onSuccess: n,
  isMaskMode: r
}) => {
  var F;
  const { dispatch: l } = ie(), [a, o] = p.useState([]), [i, c] = p.useState(!0), [d, h] = p.useState(null), [v, g] = p.useState(!1), [j, x] = p.useState(null), [_, b] = p.useState({}), [f, m] = p.useState({}), [u, w] = p.useState(""), k = p.useRef(null), y = p.useMemo(() => a.map((L) => {
    let Q = L.valid, S = L.reason;
    return r && L.mask_count === 0 && (Q = !1, S = "No 'Load Image (as Mask)' node found."), { ...L, valid: Q, reason: S };
  }).sort((L, Q) => L.valid !== Q.valid ? L.valid ? -1 : 1 : L.name.localeCompare(Q.name)), [a, r]), C = p.useMemo(() => {
    if (!u.trim()) return y;
    const L = u.toLowerCase();
    return y.filter((Q) => Q.name.toLowerCase().includes(L));
  }, [y, u]);
  p.useEffect(() => {
    let L = !0;
    return (async () => {
      try {
        c(!0);
        const S = await Nf();
        L && (S.ok ? (o(S.data), h(null)) : h(S.error));
      } catch (S) {
        L && h(S instanceof Error ? S.message : String(S));
      } finally {
        L && c(!1);
      }
    })(), () => {
      L = !1;
    };
  }, []), p.useEffect(() => {
    !i && k.current && k.current.focus();
  }, [i]);
  const T = p.useCallback(() => {
    l({ type: "CLOSE_MODAL" });
  }, [l]);
  ke({ onEscape: T });
  const O = p.useRef(!1), M = p.useCallback((L) => {
    L.target === L.currentTarget && (O.current = !0);
  }, []), z = p.useCallback(
    (L) => {
      L.target === L.currentTarget && O.current && T(), O.current = !1;
    },
    [T]
  ), W = async (L, Q) => {
    if (!v)
      try {
        g(!0);
        const S = await t(L, Q);
        n == null || n(), S !== !1 && T();
      } catch (S) {
        h(S instanceof Error ? S.message : String(S));
      } finally {
        g(!1);
      }
  }, V = async (L) => {
    if (!(_[L] || f[L]))
      try {
        m((P) => ({ ...P, [L]: !0 }));
        const Q = await If(L);
        if (!Q.ok) {
          $.error("Failed to fetch workflow nodes:", Q.error);
          return;
        }
        const S = Q.data, E = [], D = (P) => {
          if (!P) return !1;
          const N = P.replace(/\s+/g, "").toLowerCase();
          return r ? N === "loadimagemask" : N === "meldimageloader" || N === "loadimage";
        };
        if (S.nodes && Array.isArray(S.nodes)) {
          $.log(
            "Extracting nodes from UI format workflow",
            S.nodes.length
          );
          for (const P of S.nodes)
            D(P.type) && ($.log("Found target node (UI):", P.id, P.type, P.title), E.push({
              id: String(P.id),
              type: P.type || "",
              title: P.title
            }));
        } else {
          $.log("Extracting nodes from API format workflow");
          for (const P in S) {
            const N = S[P];
            N && typeof N == "object" && D(N.class_type) && ($.log("Found target node (API):", P, N.class_type), E.push({
              id: P,
              type: N.class_type || ""
            }));
          }
        }
        E.length === 0 && $.warn("No loader nodes found in workflow JSON despite count > 0"), b((P) => ({ ...P, [L]: E }));
      } catch (Q) {
        $.error("Failed to fetch workflow nodes:", Q);
      } finally {
        m((Q) => ({ ...Q, [L]: !1 }));
      }
  }, I = (L) => {
    if (!L.valid || v) return;
    if ((r ? L.mask_count : L.loader_count + L.load_image_count) <= 1) {
      W(L.name);
      return;
    }
    j === L.name ? x(null) : (x(L.name), V(L.name));
  };
  return ue.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: M,
        onMouseUp: z,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--large",
            onClick: (L) => L.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(ri, { size: 20, color: "var(--meld-accent-color)" }),
                  "Queue via Workflow"
                ] }),
                /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: T, children: /* @__PURE__ */ s.jsx(de, { size: 20 }) })
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", style: { minHeight: "300px" }, children: i ? /* @__PURE__ */ s.jsxs("div", { className: "meld-loading-container", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-loading-spinner" }),
                /* @__PURE__ */ s.jsx("span", { children: "Loading workflows..." })
              ] }) : d ? /* @__PURE__ */ s.jsxs("div", { className: "meld-error-container", children: [
                /* @__PURE__ */ s.jsx(ti, { size: 20 }),
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
                      ". Workflows must have at least one ",
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
                /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", style: { marginBottom: "12px" }, children: [
                  /* @__PURE__ */ s.jsx(on, { className: "meld-tag-search-icon", size: 16 }),
                  /* @__PURE__ */ s.jsx(
                    "input",
                    {
                      ref: k,
                      type: "text",
                      className: "meld-tag-search-input",
                      placeholder: "Search workflows...",
                      value: u,
                      onChange: (L) => w(L.target.value)
                    }
                  ),
                  u && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-tag-item__btn",
                      onClick: () => {
                        var L;
                        w(""), (L = k.current) == null || L.focus();
                      },
                      style: { padding: "4px" },
                      children: /* @__PURE__ */ s.jsx(de, { size: 14 })
                    }
                  )
                ] }),
                C.length === 0 ? /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    style: {
                      padding: "20px",
                      textAlign: "center",
                      color: "var(--meld-text-secondary)"
                    },
                    children: "No workflows match your search."
                  }
                ) : C.map((L) => {
                  const Q = r ? L.mask_count : L.loader_count + L.load_image_count, S = j === L.name, E = _[L.name] || [], D = f[L.name];
                  return /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item-container", children: [
                    /* @__PURE__ */ s.jsxs(
                      "div",
                      {
                        className: `meld-workflow-item ${L.valid ? "" : "meld-workflow-item--invalid"} ${S ? "meld-workflow-item--expanded" : ""}`,
                        onClick: () => I(L),
                        title: L.reason || "Click to select",
                        children: [
                          /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item__info", children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__name", children: L.name }),
                            !L.valid && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__reason", children: L.reason }),
                            L.valid && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__supports", children: Q > 1 ? `Multiple loaders found (${Q})` : r ? "Supports: Load Image (as Mask)" : `Supports: ${L.loader_count > 0 ? "Meld Loader" : "Load Image"}` })
                          ] }),
                          L.valid && Q <= 1 && /* @__PURE__ */ s.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn--primary meld-btn-small",
                              disabled: v,
                              onClick: (P) => {
                                P.stopPropagation(), W(L.name);
                              },
                              children: [
                                /* @__PURE__ */ s.jsx(qr, { size: 14 }),
                                v ? "Queuing..." : "Queue"
                              ]
                            }
                          ),
                          L.valid && Q > 1 && /* @__PURE__ */ s.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn--primary meld-btn-small",
                              disabled: v,
                              onClick: (P) => {
                                P.stopPropagation(), I(L);
                              },
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                              },
                              children: [
                                S ? "Close" : "Select Node",
                                /* @__PURE__ */ s.jsx(
                                  ni,
                                  {
                                    size: 14,
                                    style: {
                                      transform: S ? "rotate(90deg)" : "rotate(0deg)",
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
                    S && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker", children: D ? /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-node-picker__loading", children: [
                      /* @__PURE__ */ s.jsx("div", { className: "meld-loading-spinner meld-loading-spinner--small" }),
                      /* @__PURE__ */ s.jsx("span", { children: "Loading nodes..." })
                    ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                      /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker__label", children: "Select target loader node:" }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker__list", children: E.map((P) => /* @__PURE__ */ s.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-workflow-node-item",
                          disabled: v,
                          onClick: () => W(L.name, P.id),
                          children: [
                            /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-node-item__info", children: [
                              /* @__PURE__ */ s.jsx("span", { className: "meld-workflow-node-item__title", children: P.title || P.type }),
                              /* @__PURE__ */ s.jsxs("span", { className: "meld-workflow-node-item__id", children: [
                                "#",
                                P.id
                              ] })
                            ] }),
                            /* @__PURE__ */ s.jsx(qr, { size: 12 })
                          ]
                        },
                        P.id
                      )) })
                    ] }) })
                  ] }, L.name);
                })
              ] }) }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn--secondary",
                  onClick: T,
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
}, Yy = ({
  title: e,
  message: t,
  details: n,
  confirmLabel: r = "OK",
  cancelLabel: l = "Cancel",
  danger: a = !1,
  requiredText: o,
  requiredTextLabel: i,
  onConfirm: c,
  onCancel: d
}) => {
  const h = p.useRef(null), v = p.useRef(null), [g, j] = p.useState(""), [x, _] = p.useState(!1);
  ke({ onEscape: x ? () => {
  } : d ?? (() => {
  }) }), p.useEffect(() => {
    if (v.current = document.activeElement, h.current) {
      const m = h.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      m.length > 0 ? m[0].focus() : h.current.focus();
    }
    const f = (m) => {
      if (m.key === "Tab") {
        if (!h.current) return;
        const u = h.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (u.length === 0) return;
        const w = u.item(0), k = u.item(u.length - 1);
        if (!w || !k) return;
        m.shiftKey ? document.activeElement === w && (k.focus(), m.preventDefault()) : document.activeElement === k && (w.focus(), m.preventDefault());
      }
    };
    return document.addEventListener("keydown", f, { capture: !0 }), () => {
      document.removeEventListener("keydown", f, { capture: !0 }), v.current && typeof v.current.focus == "function" && v.current.focus();
    };
  }, []);
  const b = x || !!o && g !== o;
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "meld-confirm-modal__overlay",
      onClick: () => {
        x || d == null || d();
      },
      onKeyDown: (f) => {
        f.key === "Enter" && !x && (d == null || d());
      },
      role: "presentation",
      children: /* @__PURE__ */ s.jsxs(
        "div",
        {
          ref: h,
          className: "meld-confirm-modal__dialog",
          onClick: (f) => f.stopPropagation(),
          onKeyDown: (f) => f.stopPropagation(),
          role: "alertdialog",
          "aria-modal": "true",
          "aria-label": e || t,
          tabIndex: -1,
          children: [
            e && /* @__PURE__ */ s.jsx("h3", { className: "meld-confirm-modal__title", children: e }),
            /* @__PURE__ */ s.jsx("p", { className: "meld-confirm-modal__message", children: t }),
            n && n.length > 0 && /* @__PURE__ */ s.jsx("ul", { className: "meld-confirm-modal__details", children: n.map((f) => /* @__PURE__ */ s.jsx("li", { children: f }, f)) }),
            o && /* @__PURE__ */ s.jsxs("div", { className: "meld-confirm-modal__input-group", children: [
              /* @__PURE__ */ s.jsx("label", { className: "meld-confirm-modal__input-label", htmlFor: "meld-confirm-modal-input", children: i || `Type "${o}" to confirm.` }),
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  id: "meld-confirm-modal-input",
                  type: "text",
                  className: "meld-confirm-modal__input",
                  value: g,
                  onChange: (f) => j(f.target.value),
                  autoComplete: "off",
                  autoCapitalize: "off",
                  spellCheck: !1,
                  disabled: x
                }
              )
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-confirm-modal__actions", children: [
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-confirm-modal__btn meld-confirm-modal__btn--cancel",
                  onClick: () => d == null ? void 0 : d(),
                  disabled: x,
                  children: l
                }
              ),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-confirm-modal__btn meld-confirm-modal__btn--confirm${a ? " meld-confirm-modal__btn--danger" : ""}`,
                  onClick: async () => {
                    if (!b) {
                      _(!0);
                      try {
                        await Promise.resolve(c(g));
                      } catch {
                      } finally {
                        _(!1);
                      }
                    }
                  },
                  disabled: b,
                  children: r
                }
              )
            ] })
          ]
        }
      )
    }
  );
}, lo = async (e, t) => {
  const n = await Mg(e, t);
  return n.ok ? (ne.getState().removeImages(e), { ok: !0, data: void 0 }) : n;
}, Xf = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: l, dispatch: a } = ie(), o = p.useRef(!0);
  p.useEffect(() => () => {
    o.current = !1;
  }, []);
  const i = p.useMemo(
    () => l.searchQuery.toLowerCase().includes("has_derivatives:yes") || l.searchQuery.toLowerCase().includes("has_derivatives:true") || l.searchQuery.toLowerCase().includes("has_derivatives:1"),
    [l.searchQuery]
  ), c = p.useMemo(() => l.searchQuery.trim() !== "", [l.searchQuery]), d = ne((u) => u.buckets), h = p.useMemo(() => l.viewerMode === "lighttable" && l.viewerLightTableSlotId ? (d[l.viewerLightTableSlotId] || []).map((w) => {
    const k = Number.parseInt(w, 10);
    return l.images.find((y) => y.id === k) || l.lineageImages.find((y) => y.id === k) || null;
  }).filter((w) => w !== null) : l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
    (u) => u.exists !== !1 && (l.settings["gallery.show_parent_images"] && !c || !u.has_children || i)
  ), [
    l.viewerMode,
    l.viewerLightTableSlotId,
    d,
    l.lineageImages,
    l.images,
    l.settings,
    c,
    i
  ]), v = p.useRef(l.viewerImageId);
  p.useEffect(() => {
    v.current = l.viewerImageId;
  }, [l.viewerImageId]);
  const g = p.useCallback(() => {
    a({ type: "CLOSE_MODAL" });
  }, [a]);
  ke({ onEscape: g });
  const j = p.useRef(!1), x = p.useCallback((u) => {
    u.target === u.currentTarget && (j.current = !0);
  }, []), _ = p.useCallback(
    (u) => {
      u.target === u.currentTarget && j.current && g(), j.current = !1;
    },
    [g]
  ), b = p.useCallback(
    (u) => {
      if (!o.current) return;
      const w = v.current;
      if (w === null || !u.has(w))
        return;
      const k = h.findIndex(
        (C) => C.id === w
      );
      if (k === -1) return;
      let y = !1;
      for (let C = k + 1; C < h.length; C++) {
        const T = h[C];
        if (T && !u.has(T.id)) {
          a({
            type: "OPEN_VIEWER",
            payload: {
              id: T.id,
              mode: l.viewerMode,
              // Preserve slotId in lighttable mode to stay within the slot
              ...l.viewerMode === "lighttable" && l.viewerLightTableSlotId ? { slotId: l.viewerLightTableSlotId } : {}
            }
          }), y = !0;
          break;
        }
      }
      if (!y)
        for (let C = k - 1; C >= 0; C--) {
          const T = h[C];
          if (T && !u.has(T.id)) {
            a({
              type: "OPEN_VIEWER",
              payload: {
                id: T.id,
                mode: l.viewerMode,
                // Preserve slotId in lighttable mode to stay within the slot
                ...l.viewerMode === "lighttable" && l.viewerLightTableSlotId ? { slotId: l.viewerLightTableSlotId } : {}
              }
            }), y = !0;
            break;
          }
        }
      y || a({ type: "CLOSE_VIEWER" });
    },
    [l.viewerMode, l.viewerLightTableSlotId, h, a]
  ), f = async () => {
    var y, C;
    a({ type: "SET_LOADING", payload: !0 });
    const u = new Set(e), w = h.filter((T) => u.has(T.id));
    b(u);
    const k = await lo(e, n);
    if (!k.ok) {
      a({ type: "SET_ERROR", payload: k.error }), a({ type: "SET_LOADING", payload: !1 });
      return;
    }
    o.current && (l.activeModal.type === "delete_confirm" && ((C = (y = l.activeModal).onSuccess) == null || C.call(y)), !n && r && r(w)), a({ type: "REMOVE_IMAGES", payload: e }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" }), a({ type: "SET_LOADING", payload: !1 });
  }, m = async () => {
    var y, C;
    a({ type: "SET_LOADING", payload: !0 });
    const u = new Set(e);
    for (const T of e) {
      const O = await oi(T);
      if (!o.current) {
        a({ type: "SET_LOADING", payload: !1 });
        return;
      }
      for (const M of O)
        u.add(M.id);
    }
    const w = h.filter((T) => u.has(T.id));
    b(u);
    const k = await lo(Array.from(u), n);
    if (!k.ok) {
      a({ type: "SET_ERROR", payload: k.error }), a({ type: "SET_LOADING", payload: !1 });
      return;
    }
    o.current && (l.activeModal.type === "delete_confirm" && ((C = (y = l.activeModal).onSuccess) == null || C.call(y)), !n && r && r(w)), a({
      type: "REMOVE_IMAGES",
      payload: Array.from(u)
    }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" }), a({ type: "SET_LOADING", payload: !1 });
  };
  return ue.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: x,
        onMouseUp: _,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--small",
            onClick: (u) => u.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(Wt, { size: 20, color: "var(--meld-danger-color)" }),
                  n ? "Permanent Deletion" : "Move to Trash"
                ] }),
                /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: g, children: /* @__PURE__ */ s.jsx(de, { size: 20 }) })
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
                      "Are you sure you want to ",
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
                            Qh,
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
                /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-btn meld-btn--secondary", onClick: g, children: "Cancel" }),
                /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn--danger",
                      onClick: f,
                      children: n ? "Delete Permanently" : "Move to Trash"
                    }
                  ),
                  t && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn--danger",
                      title: n ? "Permanently delete all images in the lineage" : "Move all images in the lineage to trash",
                      onClick: m,
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
}, Zf = ({ message: e }) => {
  const { dispatch: t } = ie(), n = p.useCallback(() => {
    t({ type: "CLOSE_MODAL" });
  }, [t]);
  return ke({ onEscape: n }), /* @__PURE__ */ s.jsx("div", { className: "meld-modal-overlay", onClick: n, children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (r) => r.stopPropagation(), children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(ti, { size: 20, color: "var(--meld-danger-color)" }),
        /* @__PURE__ */ s.jsx("h2", { children: "Error" })
      ] }),
      /* @__PURE__ */ s.jsx("button", { className: "meld-modal-close", onClick: n, type: "button", children: /* @__PURE__ */ s.jsx(de, { size: 20 }) })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsx("div", { style: { padding: "20px 0", textAlign: "center", fontSize: "14px" }, children: e }) }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ s.jsx("button", { className: "meld-btn meld-btn--primary", onClick: n, type: "button", children: "OK" }) })
  ] }) });
}, Jf = ({ imageId: e }) => {
  const { state: t, dispatch: n, refreshImages: r } = ie(), [l, a] = p.useState([]), [o, i] = p.useState(!0), [c, d] = p.useState(!1), h = p.useCallback(() => {
    n({ type: "CLOSE_MODAL" });
  }, [n]);
  ke({ onEscape: h });
  const v = p.useRef(!1), g = (y) => {
    y.target === y.currentTarget && (v.current = !0);
  }, j = (y) => {
    y.target === y.currentTarget && v.current && h(), v.current = !1;
  }, x = t.images.find((y) => y.id === e), _ = p.useCallback(
    async (y) => {
      i(!0);
      try {
        const C = t.settings["gallery.suggest_phash_threshold"], T = await Tg(e, C, y);
        y.aborted || a(T);
      } catch (C) {
        y.aborted || $.error("Failed to load suggestions:", C);
      } finally {
        y.aborted || i(!1);
      }
    },
    [e, t.settings]
  );
  p.useEffect(() => {
    const y = new AbortController();
    return _(y.signal), () => y.abort();
  }, [_]);
  const b = async (y) => {
    if (y == null) {
      $.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!x || y === x.parent_id) && !(x.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        const C = await Cc(e, y);
        if (!C.ok) {
          $.error("Failed to link parent:", C.error);
          return;
        }
        await yf(e), await r(), h();
      } catch (C) {
        $.error("Failed to link parent:", C);
      }
  }, f = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        const y = await Cc(e, null);
        if (!y.ok) {
          $.error("Failed to remove source:", y.error), alert("Failed to remove source image.");
          return;
        }
        await r(), h();
      } catch (y) {
        $.error("Failed to remove source:", y), alert("Failed to remove source image.");
      }
  }, m = async (y) => {
    i(!0);
    try {
      const C = await iy(y), T = await vf({
        filename: C.name,
        subfolder: C.subfolder || "",
        type: C.type || "input"
      });
      if (!T.ok)
        throw new Error(T.error);
      const { id: O } = T.data;
      if (O === e) {
        alert("Uploaded image is identical to the current image. Cannot set as source.");
        return;
      }
      await b(O);
    } catch (C) {
      $.error("Failed to upload/register image:", C);
    } finally {
      i(!1);
    }
  }, u = (y) => {
    y.preventDefault(), y.stopPropagation(), d(!1);
    const C = y.dataTransfer.files[0];
    C != null && C.type.startsWith("image/") && m(C);
  };
  if (!x) return null;
  const w = l.filter((y) => y.is_source_match), k = l.filter((y) => !y.is_source_match);
  return ue.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: g,
        onMouseUp: j,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "parent-selection-modal-title",
            onClick: (y) => y.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { id: "parent-selection-modal-title", children: [
                  "Select Source for #",
                  x.id
                ] }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: h,
                    "aria-label": "Close",
                    children: /* @__PURE__ */ s.jsx(de, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
                x.parent_id && /* @__PURE__ */ s.jsxs(
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
                            /* @__PURE__ */ s.jsx(ig, { size: 16, color: "var(--meld-accent-color)" }),
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
                                        x.parent_filename && /* @__PURE__ */ s.jsx(
                                          "img",
                                          {
                                            src: mt(
                                              {
                                                filename: x.parent_filename,
                                                subfolder: x.parent_subfolder || "",
                                                type: x.parent_type || "output"
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
                                                  children: x.parent_filename || "Unknown Image"
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
                                                    x.parent_id
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
                          className: "meld-btn meld-btn--danger meld-btn--sm",
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
                          onClick: f,
                          title: "Remove Source",
                          children: /* @__PURE__ */ s.jsx(og, { size: 16 })
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    className: `meld-drop-zone ${c ? "meld-drop-zone--active" : ""}`,
                    onDragEnter: (y) => {
                      y.preventDefault(), y.stopPropagation(), d(!0);
                    },
                    onDragOver: (y) => {
                      y.preventDefault(), y.stopPropagation(), y.dataTransfer.dropEffect = "copy", d(!0);
                    },
                    onDragLeave: (y) => {
                      y.preventDefault(), y.stopPropagation(), d(!1);
                    },
                    onDrop: u,
                    children: [
                      /* @__PURE__ */ s.jsx(wg, { size: 32 }),
                      /* @__PURE__ */ s.jsx("p", { children: "Drop an image file here to set it as source" })
                    ]
                  }
                ),
                o ? /* @__PURE__ */ s.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestions-container", children: [
                  w.length > 0 && /* @__PURE__ */ s.jsxs("section", { children: [
                    /* @__PURE__ */ s.jsx("h3", { children: "Source Matches (from metadata)" }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: w.map((y) => {
                      const C = y.id === x.parent_id;
                      return /* @__PURE__ */ s.jsxs(
                        "div",
                        {
                          role: "button",
                          tabIndex: 0,
                          "aria-pressed": C,
                          "aria-current": C ? "true" : void 0,
                          "aria-label": `Select ${y.filename} as source${C ? " (current)" : ""}`,
                          className: `meld-suggestion-card ${C ? "meld-suggestion-card--current" : ""}`,
                          onClick: () => !C && b(y.id),
                          onKeyDown: (T) => {
                            (T.key === "Enter" || T.key === " ") && (T.preventDefault(), C || b(y.id));
                          },
                          style: {
                            cursor: C ? "default" : "pointer",
                            ...C ? {
                              borderColor: "var(--meld-accent-color)",
                              boxShadow: "0 0 0 2px var(--meld-accent-color)"
                            } : {}
                          },
                          children: [
                            /* @__PURE__ */ s.jsx("img", { src: mt(y, 64), alt: y.filename }),
                            /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestion-info", children: [
                              /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: y.filename }),
                              C && /* @__PURE__ */ s.jsx(
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
                        y.id
                      );
                    }) })
                  ] }),
                  /* @__PURE__ */ s.jsxs("section", { children: [
                    /* @__PURE__ */ s.jsx("h3", { children: "Visual Matches (pHash)" }),
                    k.length > 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: k.map((y) => {
                      const C = y.id === x.parent_id;
                      return /* @__PURE__ */ s.jsxs(
                        "div",
                        {
                          role: "button",
                          tabIndex: 0,
                          "aria-pressed": C,
                          "aria-current": C ? "true" : void 0,
                          "aria-label": `Select ${y.filename} as source${C ? " (current)" : ""}`,
                          className: `meld-suggestion-card ${C ? "meld-suggestion-card--current" : ""}`,
                          onClick: () => !C && b(y.id),
                          onKeyDown: (T) => {
                            (T.key === "Enter" || T.key === " ") && (T.preventDefault(), C || b(y.id));
                          },
                          style: {
                            cursor: C ? "default" : "pointer",
                            ...C ? {
                              borderColor: "var(--meld-accent-color)",
                              boxShadow: "0 0 0 2px var(--meld-accent-color)"
                            } : {}
                          },
                          children: [
                            /* @__PURE__ */ s.jsx("img", { src: mt(y, 64), alt: y.filename }),
                            /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestion-info", children: [
                              /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: y.filename }),
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
                                      "Match: ",
                                      Math.round((64 - y.distance) / 64 * 100),
                                      "%"
                                    ] }),
                                    C && /* @__PURE__ */ s.jsx(
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
                        y.id
                      );
                    }) }) : /* @__PURE__ */ s.jsx("p", { className: "meld-no-suggestions", children: "No visual matches found." })
                  ] })
                ] })
              ] })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, Xy = () => {
  const { state: e, dispatch: t } = ie(), n = e.toastMessage;
  return p.useEffect(() => {
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
}, Zy = () => {
  const { state: e, dispatch: t } = ie(), { executeWorkflow: n } = di();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
      Yf,
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
            const a = e.activeModal.maskFilename, o = e.activeModal.onSuccess, i = e.activeModal.onError, d = (await Promise.allSettled(
              e.activeModal.images.map(
                (h) => n(r, h, a, l)
              )
            )).filter((h) => h.status === "rejected");
            if (d.length > 0)
              return t({
                type: "SET_ERROR",
                payload: `${d.length} of ${e.activeModal.images.length} workflow(s) failed.`
              }), i == null || i(), !1;
            o == null || o();
          }
        }
      }
    ),
    e.activeModal.type === "node_selection" && /* @__PURE__ */ s.jsx(
      qf,
      {
        image: e.activeModal.image,
        nodes: e.activeModal.nodes,
        onSelect: (r) => {
          e.activeModal.type === "node_selection" && Yr(e.activeModal.image, r);
        }
      }
    ),
    e.activeModal.type === "parent_selection" && /* @__PURE__ */ s.jsx(Jf, { imageId: e.activeModal.imageId }),
    e.activeModal.type === "import" && /* @__PURE__ */ s.jsx(jf, {}),
    e.activeModal.type === "settings" && /* @__PURE__ */ s.jsx(Hf, {}),
    e.activeModal.type === "tag_edit" && ue.createPortal(
      /* @__PURE__ */ s.jsx(
        Kf,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "error" && ue.createPortal(/* @__PURE__ */ s.jsx(Zf, { message: e.activeModal.message }), document.body),
    e.activeModal.type === "delete_confirm" && ue.createPortal(
      /* @__PURE__ */ s.jsx(
        Xf,
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
    e.activeModal.type === "mask_editor" && ue.createPortal(
      /* @__PURE__ */ s.jsx(
        fi,
        {
          imageId: e.activeModal.imageId,
          mode: e.activeModal.mode,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "mask_sequence_step" && ue.createPortal(
      /* @__PURE__ */ s.jsx(
        Lf,
        {
          images: e.activeModal.images,
          currentIndex: e.activeModal.currentIndex,
          workflowName: e.activeModal.workflowName,
          targetLoaderNodeId: e.activeModal.targetLoaderNodeId,
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
        }
      ),
      document.body
    ),
    e.activeModal.type === "note_edit" && ue.createPortal(
      /* @__PURE__ */ s.jsx(
        Gf,
        {
          imageId: e.activeModal.imageId,
          initialNotes: e.activeModal.notes,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "download_options" && ue.createPortal(
      /* @__PURE__ */ s.jsx(
        yy,
        {
          imageIds: e.activeModal.imageIds,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.confirmModal && ue.createPortal(
      /* @__PURE__ */ s.jsx(
        Yy,
        {
          ...e.confirmModal,
          onConfirm: async (r) => {
            var l;
            await ((l = e.confirmModal) == null ? void 0 : l.onConfirm(r)), t({ type: "CLOSE_CONFIRM_MODAL" });
          },
          onCancel: () => {
            var r, l;
            (l = (r = e.confirmModal) == null ? void 0 : r.onCancel) == null || l.call(r), t({ type: "CLOSE_CONFIRM_MODAL" });
          }
        }
      ),
      document.body
    ),
    e.toastMessage && ue.createPortal(/* @__PURE__ */ s.jsx(Xy, {}), document.body)
  ] });
}, em = async (e) => {
  try {
    const t = await J.fetchApi("/meld/analytics", { signal: e == null ? void 0 : e.signal });
    return ee(t);
  } catch (t) {
    return { ok: !1, error: t instanceof Error ? t.message : String(t) };
  }
}, tm = async (e, t) => {
  var n;
  try {
    const r = new URLSearchParams();
    (t == null ? void 0 : t.limit) !== void 0 && r.set("limit", String(t.limit)), (t == null ? void 0 : t.offset) !== void 0 && r.set("offset", String(t.offset)), t != null && t.sort && r.set("sort", t.sort), (n = t == null ? void 0 : t.q) != null && n.trim() && r.set("q", t.q.trim());
    const l = r.toString(), a = `/meld/analytics/${e}${l ? `?${l}` : ""}`, o = await J.fetchApi(a, { signal: t == null ? void 0 : t.signal }), i = await ai(o);
    return i.ok ? i.data.success ? {
      ok: !0,
      data: {
        data: i.data.data ?? [],
        total: i.data.total ?? 0
      }
    } : { ok: !1, error: i.data.error || "Failed to fetch analytics" } : i;
  } catch (r) {
    return { ok: !1, error: r instanceof Error ? r.message : String(r) };
  }
}, nm = async (e) => {
  try {
    const t = await J.fetchApi("/meld/analytics/refresh", {
      method: "POST",
      signal: e == null ? void 0 : e.signal
    });
    return ee(t);
  } catch (t) {
    return { ok: !1, error: t instanceof Error ? t.message : String(t) };
  }
}, Jy = async (e, t, n) => {
  if (!t || t.length === 0) return { ok: !0, data: {} };
  try {
    const r = await J.fetchApi("/meld/analytics/counts", {
      method: "POST",
      body: JSON.stringify({ category: e, names: t }),
      signal: n == null ? void 0 : n.signal
    });
    return ee(r);
  } catch (r) {
    return { ok: !1, error: r instanceof Error ? r.message : String(r) };
  }
}, ev = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  fetchAnalyticsCategory: tm,
  fetchAnalyticsCounts: Jy,
  fetchAnalyticsSummary: em,
  refreshAnalytics: nm
}, Symbol.toStringTag, { value: "Module" })), tv = "_meldAnalytics__headerRow_9nv4x_3", nv = "_meldAnalytics__title_9nv4x_9", rv = "_meldAnalytics__controls_9nv4x_14", sv = "_meldAnalytics_9nv4x_3", lv = "_meldAnalytics__totalCard_9nv4x_26", av = "_meldAnalytics__totalCardTitle_9nv4x_37", ov = "_meldAnalytics__totalCardValue_9nv4x_46", iv = "_meldAnalytics__grid_9nv4x_54", cv = "_meldAnalytics__section_9nv4x_60", dv = "_meldAnalytics__sectionHeader_9nv4x_71", uv = "_meldAnalytics__sectionTitle_9nv4x_83", fv = "_meldAnalytics__item_9nv4x_94", mv = "_meldAnalytics__itemLabel_9nv4x_111", pv = "_meldAnalytics__itemCount_9nv4x_118", hv = "_meldAnalytics__seeAllBtn_9nv4x_128", gv = "_meldAnalytics__fullView_9nv4x_149", yv = "_meldAnalytics__fullViewToolbar_9nv4x_155", vv = "_meldAnalytics__toolbarBtn_9nv4x_162", wv = "_meldAnalytics__searchContainer_9nv4x_167", xv = "_meldAnalytics__searchIcon_9nv4x_179", _v = "_meldAnalytics__searchInput_9nv4x_184", kv = "_meldAnalytics__fullList_9nv4x_197", bv = "_meldAnalytics__fullListItem_9nv4x_204", Sv = "_meldAnalytics__refreshBtn_9nv4x_222", ce = {
  meldAnalytics__headerRow: tv,
  meldAnalytics__title: nv,
  meldAnalytics__controls: rv,
  meldAnalytics: sv,
  meldAnalytics__totalCard: lv,
  meldAnalytics__totalCardTitle: av,
  meldAnalytics__totalCardValue: ov,
  meldAnalytics__grid: iv,
  meldAnalytics__section: cv,
  meldAnalytics__sectionHeader: dv,
  meldAnalytics__sectionTitle: uv,
  meldAnalytics__item: fv,
  meldAnalytics__itemLabel: mv,
  meldAnalytics__itemCount: pv,
  meldAnalytics__seeAllBtn: hv,
  meldAnalytics__fullView: gv,
  meldAnalytics__fullViewToolbar: yv,
  meldAnalytics__toolbarBtn: vv,
  meldAnalytics__searchContainer: wv,
  meldAnalytics__searchIcon: xv,
  meldAnalytics__searchInput: _v,
  meldAnalytics__fullList: kv,
  meldAnalytics__fullListItem: bv,
  meldAnalytics__refreshBtn: Sv
}, jv = {
  positive_prompts: "pos",
  negative_prompts: "neg",
  tags: "tag",
  models: "model",
  by_date: "date",
  by_resolution: "resolution"
};
function Cv(e, t) {
  const n = jv[e];
  return n ? /[\s"]/.test(t) ? `${n}:"${t.replace(/"/g, '\\"')}"` : `${n}:${t}` : t;
}
function Ev(e) {
  return e.name !== void 0 ? e.name : e.date !== void 0 ? e.date : e.resolution !== void 0 ? e.resolution : "";
}
function Rc(e) {
  return Ev(e);
}
const Nv = ({ onClose: e, onSearchAndNavigate: t }) => {
  const { dispatch: n } = ie(), [r, l] = p.useState(null), [a, o] = p.useState(!0), [i, c] = p.useState(!1), [d, h] = p.useState(null), [v, g] = p.useState([]), [j, x] = p.useState(0), [_, b] = p.useState(!1), [f, m] = p.useState(null), [u, w] = p.useState("count_desc"), [k, y] = p.useState(""), C = p.useRef(""), T = p.useRef(null), O = p.useRef(0);
  ke({
    onEscape: () => {
      d ? h(null) : e();
    }
  });
  const M = p.useCallback(async (F, L) => {
    const Q = L;
    o(!0);
    try {
      const S = await em({ signal: F });
      if (F != null && F.aborted || Q !== void 0 && Q !== O.current) return;
      if (!S.ok) {
        l(null);
        return;
      }
      l(S.data);
    } catch (S) {
      if (F != null && F.aborted || S && typeof S == "object" && S.name === "AbortError" || Q !== void 0 && Q !== O.current) return;
      l(null);
    } finally {
      !(F != null && F.aborted) && (Q === void 0 || Q === O.current) && o(!1);
    }
  }, []);
  p.useEffect(() => {
    const F = new AbortController();
    O.current += 1;
    const L = O.current;
    return M(F.signal, L).catch(() => {
    }), () => F.abort();
  }, [M]);
  const z = p.useCallback(
    async (F, L, Q, S) => {
      b(!0), m(null);
      try {
        const E = await tm(F, {
          limit: 500,
          offset: 0,
          sort: L,
          q: Q.trim() || void 0,
          signal: S
        });
        if (S != null && S.aborted) return;
        if (!E.ok) {
          m(E.error);
          return;
        }
        g(E.data.data), x(E.data.total);
      } catch (E) {
        if (S != null && S.aborted || E && typeof E == "object" && E.name === "AbortError")
          return;
        const D = E instanceof Error ? E.message : typeof E == "string" ? E : "Unknown error";
        m(D);
      } finally {
        S != null && S.aborted || b(!1);
      }
    },
    []
  );
  p.useEffect(() => {
    if (!d) return;
    const F = C.current !== k;
    C.current = k;
    const L = new AbortController(), Q = () => {
      z(d, u, k, L.signal).catch(() => {
      });
    };
    if (F) {
      const S = setTimeout(Q, 300);
      return () => {
        clearTimeout(S), L.abort();
      };
    }
    return Q(), () => L.abort();
  }, [d, u, k, z]);
  const W = p.useCallback(async () => {
    var Q;
    (Q = T.current) == null || Q.abort();
    const F = new AbortController();
    T.current = F;
    const L = F.signal;
    c(!0);
    try {
      const S = await nm({ signal: L });
      if (L.aborted) return;
      if (!S.ok) {
        n({
          type: "SHOW_TOAST",
          payload: `Analytics refresh failed: ${S.error}`
        });
        return;
      }
      O.current += 1;
      const E = O.current;
      if (await M(L, E), L.aborted || (d && await z(d, u, k, L), L.aborted)) return;
      n({ type: "SHOW_TOAST", payload: "Analytics refreshed" });
    } catch (S) {
      if (L.aborted) return;
      const E = S instanceof Error ? S.message : typeof S == "string" ? S : "Unknown error";
      n({
        type: "SHOW_TOAST",
        payload: `Analytics refresh failed: ${E}`
      });
    } finally {
      L.aborted || c(!1);
    }
  }, [M, z, d, u, k, n]);
  p.useEffect(() => () => {
    var F;
    (F = T.current) == null || F.abort();
  }, []);
  const V = p.useCallback(
    (F, L) => {
      const Q = Cv(F, L);
      t ? t(Q) : e();
    },
    [t, e]
  ), I = (F, L, Q) => /* @__PURE__ */ s.jsxs("div", { className: ce.meldAnalytics__section, children: [
    /* @__PURE__ */ s.jsxs("div", { className: ce.meldAnalytics__sectionHeader, children: [
      /* @__PURE__ */ s.jsx("h3", { className: ce.meldAnalytics__sectionTitle, children: F }),
      /* @__PURE__ */ s.jsxs(
        "button",
        {
          type: "button",
          className: ce.meldAnalytics__seeAllBtn,
          onClick: () => {
            h(L), y(""), w("count_desc");
          },
          children: [
            "See all ",
            /* @__PURE__ */ s.jsx(Kh, { size: 14 })
          ]
        }
      )
    ] }),
    Q.map((S, E) => {
      const D = Rc(S);
      return /* @__PURE__ */ s.jsxs(
        "div",
        {
          role: "button",
          tabIndex: 0,
          className: ce.meldAnalytics__item,
          onClick: () => V(L, D),
          onKeyDown: (P) => {
            (P.key === "Enter" || P.key === " ") && (P.preventDefault(), V(L, D));
          },
          children: [
            /* @__PURE__ */ s.jsx("span", { className: ce.meldAnalytics__itemLabel, children: D }),
            /* @__PURE__ */ s.jsx("span", { className: ce.meldAnalytics__itemCount, children: S.count })
          ]
        },
        `${D}-${E}`
      );
    })
  ] }, L);
  return /* @__PURE__ */ s.jsxs("div", { className: "meld-analytics-view", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-analytics-header", children: [
      /* @__PURE__ */ s.jsxs("div", { className: ce.meldAnalytics__headerRow, children: [
        /* @__PURE__ */ s.jsx(ff, { size: 16 }),
        /* @__PURE__ */ s.jsx("h3", { className: ce.meldAnalytics__title, children: "Image Analytics" })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: ce.meldAnalytics__controls, children: [
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "button",
            className: ce.meldAnalytics__refreshBtn,
            onClick: W,
            disabled: i,
            title: "Refresh analytics",
            children: [
              /* @__PURE__ */ s.jsx(tr, { size: 14, className: i ? "animate-spin" : "" }),
              "Refresh"
            ]
          }
        ),
        /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            className: "meld-analytics-close",
            onClick: e,
            title: "Close and return to gallery",
            "aria-label": "Close and return to gallery",
            children: /* @__PURE__ */ s.jsx(de, { size: 16 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-analytics-content", children: d ? /* @__PURE__ */ s.jsxs("div", { className: ce.meldAnalytics__fullView, children: [
      /* @__PURE__ */ s.jsxs("div", { className: ce.meldAnalytics__fullViewToolbar, children: [
        /* @__PURE__ */ s.jsxs("div", { className: ce.meldAnalytics__searchContainer, children: [
          /* @__PURE__ */ s.jsx(on, { size: 14, className: ce.meldAnalytics__searchIcon }),
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "text",
              className: ce.meldAnalytics__searchInput,
              placeholder: "Filter...",
              value: k,
              onChange: (F) => y(F.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "button",
            className: `meld-btn meld-btn--secondary ${ce.meldAnalytics__toolbarBtn}`,
            onClick: () => w((F) => F === "count_desc" ? "count_asc" : "count_desc"),
            title: u === "count_desc" ? "Sort ascending" : "Sort descending",
            children: [
              u === "count_desc" ? /* @__PURE__ */ s.jsx(Hh, { size: 14 }) : /* @__PURE__ */ s.jsx(qh, { size: 14 }),
              u === "count_desc" ? "Desc" : "Asc"
            ]
          }
        ),
        /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            className: `meld-btn meld-btn--secondary ${ce.meldAnalytics__toolbarBtn}`,
            onClick: () => h(null),
            children: "Back"
          }
        )
      ] }),
      _ ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading..." }) : f ? /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__empty", role: "alert", children: [
        "Failed to load: ",
        f
      ] }) : /* @__PURE__ */ s.jsxs("div", { className: ce.meldAnalytics__fullList, children: [
        v.map((F, L) => {
          const Q = Rc(F);
          return /* @__PURE__ */ s.jsxs(
            "div",
            {
              role: "button",
              tabIndex: 0,
              className: ce.meldAnalytics__fullListItem,
              onClick: () => V(d, Q),
              onKeyDown: (S) => {
                (S.key === "Enter" || S.key === " ") && (S.preventDefault(), V(d, Q));
              },
              children: [
                /* @__PURE__ */ s.jsxs("span", { className: ce.meldAnalytics__itemLabel, children: [
                  L + 1,
                  ". ",
                  Q
                ] }),
                /* @__PURE__ */ s.jsx("span", { className: ce.meldAnalytics__itemCount, children: F.count })
              ]
            },
            `${Q}-${L}`
          );
        }),
        v.length === 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No items found." })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { style: { fontSize: 12, color: "var(--meld-text-secondary)" }, children: [
        j,
        " total"
      ] })
    ] }) : a ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading analytics..." }) : r ? /* @__PURE__ */ s.jsxs("div", { className: ce.meldAnalytics, children: [
      /* @__PURE__ */ s.jsxs("div", { className: ce.meldAnalytics__totalCard, children: [
        /* @__PURE__ */ s.jsx("div", { className: ce.meldAnalytics__totalCardTitle, children: "Total Images" }),
        /* @__PURE__ */ s.jsx("div", { className: ce.meldAnalytics__totalCardValue, children: r.total_images.toLocaleString() })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: ce.meldAnalytics__grid, children: [
        I(
          "Positive Prompt (top 5)",
          "positive_prompts",
          r.positive_prompts
        ),
        I(
          "Negative Prompt (top 5)",
          "negative_prompts",
          r.negative_prompts
        ),
        I("Tag (top 5)", "tags", r.tags),
        I("Model (top 5)", "models", r.models),
        I("Created Date (top 5)", "by_date", r.by_date),
        I("Resolution (top 5)", "by_resolution", r.by_resolution)
      ] })
    ] }) : /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "Failed to load analytics." }) })
  ] });
}, Iv = () => {
  const { state: e, dispatch: t } = ie(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      const h = await my();
      if (!h.ok) {
        $.error("Failed to cancel scan:", h.error);
        return;
      }
      t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (h) {
      $.error("Failed to cancel scan:", h);
    }
  }, l = () => {
    t({
      type: "SET_SCAN_STATUS",
      payload: { isFinished: !1, isRunning: !1 }
    });
  }, a = n.progress.phase === "linking", { current: o, total: i } = n.progress, c = i > 0 ? o / i : 0, d = a ? 50 + Math.round(c * 50) : Math.round(c * 50);
  return /* @__PURE__ */ s.jsx("div", { className: "meld-import-progress-sidebar", children: n.isRunning ? /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-progress--compact", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-info", children: [
      /* @__PURE__ */ s.jsx("div", { className: "meld-scan__status-text--compact", children: n.shouldCancel ? /* @__PURE__ */ s.jsx("span", { className: "meld-scan__status--cancelling", children: "Cancelling..." }) : a ? /* @__PURE__ */ s.jsx("span", { children: "Linking..." }) : /* @__PURE__ */ s.jsx("span", { children: "Scanning..." }) }),
      /* @__PURE__ */ s.jsxs("div", { className: "meld-progress-stats--compact", children: [
        n.progress.current,
        " / ",
        n.progress.total
      ] })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-progress-container--compact", children: /* @__PURE__ */ s.jsx("div", { className: "meld-progress-bar", style: { width: `${d}%` } }) }),
    /* @__PURE__ */ s.jsx(
      "button",
      {
        type: "button",
        className: "meld-btn--stop--compact",
        disabled: n.shouldCancel,
        onClick: r,
        title: "Stop Scan",
        children: /* @__PURE__ */ s.jsx(gf, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-finished--compact", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ s.jsx(Zh, { size: 14, className: "meld-success-icon" }),
      /* @__PURE__ */ s.jsxs("span", { className: "meld-finished-text", children: [
        "Done! ",
        n.newCount,
        " new, ",
        n.updatedCount,
        " updated"
      ] })
    ] }),
    /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-btn--ok--compact", onClick: l, children: "OK" })
  ] }) });
}, mi = {
  lightTable: {
    id: "meld-light-table-portal",
    preferredParentSelector: ".comfyui-body-bottom"
  },
  bulkActionBar: {
    id: "meld-bulk-bar-portal",
    preferredParentSelector: ".comfyui-body-bottom"
  }
}, Mv = Object.keys(mi), Pc = /* @__PURE__ */ new Map(), Oc = "data-meld-portal-root";
let aa = null, oa = null;
const zc = ".comfyui-body-bottom";
function Fc(e) {
  var n, r, l, a;
  const t = `[${Oc}]`;
  for (let o = 0; o < e.length; o++) {
    const i = e.item(o);
    if (!i || i.nodeType !== 1) continue;
    const c = i;
    if ((n = c.hasAttribute) != null && n.call(c, Oc) || (r = c.querySelector) != null && r.call(c, t) || (l = c.matches) != null && l.call(c, zc) || (a = c.querySelector) != null && a.call(c, zc)) return !0;
  }
  return !1;
}
function Tv(e) {
  const t = document.querySelector(e);
  return t instanceof HTMLElement ? t : document.body;
}
function Lv(e) {
  const t = mi[e], n = document.getElementById(t.id);
  if (n instanceof HTMLDivElement)
    return n.dataset.meldPortalRoot = e, n;
  const r = document.createElement("div");
  return r.id = t.id, r.dataset.meldPortalRoot = e, r;
}
function rm(e) {
  const t = mi[e], n = Pc.get(e) ?? Lv(e);
  Pc.set(e, n);
  const r = Tv(t.preferredParentSelector);
  return (n.parentElement !== r || !document.contains(n)) && r.appendChild(n), n;
}
function sm() {
  for (const e of Mv)
    rm(e);
}
function $c() {
  oa === null && (oa = requestAnimationFrame(() => {
    oa = null, sm();
  }));
}
function lm(e) {
  return rm(e);
}
function Av() {
  aa || typeof document > "u" || !document.body || (sm(), aa = new MutationObserver((e) => {
    for (const t of e) {
      if (Fc(t.addedNodes)) {
        $c();
        return;
      }
      if (Fc(t.removedNodes)) {
        $c();
        return;
      }
    }
  }), aa.observe(document.body, {
    childList: !0,
    subtree: !0
  }));
}
const Ll = ({
  onKeyDown: e,
  enabled: t = !0
}) => {
  p.useEffect(() => {
    if (t)
      return window.addEventListener("keydown", e, { capture: !0 }), () => {
        window.removeEventListener("keydown", e, { capture: !0 });
      };
  }, [e, t]);
}, Dv = () => {
  const { state: e } = ie(), t = ne((a) => a.slots), n = ne((a) => a.addToBucket), r = t.length > 0 && e.selectedIds.size > 0, l = p.useCallback(
    (a) => {
      if (qy())
        return;
      const o = e.selectedIds;
      if (!o || o.size === 0)
        return;
      const i = t.find((c) => c.shortcutKey.toLowerCase() === a.key.toLowerCase());
      i && (Xr(a), o.forEach((c) => {
        n(i.id, String(c));
      }));
    },
    [t, n, e.selectedIds]
  );
  Ll({ onKeyDown: l, enabled: r });
}, am = ({ message: e, onConfirm: t, onCancel: n }) => (ke({ onEscape: n }), /* @__PURE__ */ s.jsx(
  "div",
  {
    className: "meld-confirm-modal__overlay",
    onClick: n,
    onKeyDown: (r) => {
      r.key === "Escape" && n();
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
)), Zr = ({
  enabled: e,
  insideRefs: t,
  onOutside: n,
  options: r
}) => {
  const l = (r == null ? void 0 : r.capture) ?? !0, a = (r == null ? void 0 : r.ignoreNonPrimary) ?? !0, o = p.useRef(t), i = p.useRef(n);
  p.useEffect(() => {
    o.current = t;
  }, [t]), p.useEffect(() => {
    i.current = n;
  }, [n]), p.useEffect(() => {
    if (!e) return;
    const c = (d) => {
      if (a && (d.pointerType === "mouse" && d.button !== 0 || !d.isPrimary))
        return;
      const h = d.target;
      if (!(h instanceof Node))
        return;
      o.current.some((g) => {
        const j = g.current;
        return j ? j.contains(h) : !1;
      }) || i.current(d);
    };
    return window.addEventListener("pointerdown", c, { capture: l }), () => {
      window.removeEventListener("pointerdown", c, {
        capture: l
      });
    };
  }, [e, l, a]);
}, Rv = (e, t, n, r, l) => {
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
        $.warn("move_folder action is not yet implemented"), l == null || l();
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
        $.log(`Action ${e.type} executed on ${t.length} images`);
        break;
    }
}, Pv = ({ config: e }) => {
  var P;
  const t = ne((N) => N.buckets), n = ne((N) => N.slots), r = ne((N) => N.images), l = n.length, { state: a, dispatch: o } = ie(), [i, c] = p.useState(!1), [d, h] = p.useState(!1), [v, g] = p.useState(!1), [j, x] = p.useState(e.label), [_, b] = p.useState(e.color), [f, m] = p.useState([]), [u, w] = p.useState(null), k = p.useRef(null), y = p.useRef(null);
  Zr({
    enabled: i,
    insideRefs: [y],
    onOutside: () => c(!1)
  }), Zr({
    enabled: v,
    insideRefs: [k],
    onOutside: () => g(!1)
  });
  const C = t[e.id] || [], T = C.length, O = C.map((N) => {
    const A = Number(N);
    let R = a.images.find((U) => U.id === A);
    return R || (R = a.lineageImages.find((U) => U.id === A)), R || (R = r[N]), R;
  }).filter(Boolean);
  p.useEffect(() => {
    m((N) => {
      const A = N.filter((R) => C.includes(String(R)));
      return A.length !== N.length ? A : N;
    });
  }, [C]);
  const M = f.filter((N) => C.includes(String(N))), z = M.length > 0, W = (N) => {
    N.preventDefault(), N.stopPropagation(), N.currentTarget.classList.add("drag-over");
  }, V = (N) => {
    N.currentTarget.classList.remove("drag-over");
  }, I = (N) => {
    N.preventDefault(), N.stopPropagation(), N.currentTarget.classList.remove("drag-over");
    const A = N.dataTransfer.getData("text/plain");
    A && A.split(",").forEach((U) => {
      if (U) {
        const B = U.trim(), X = Number(B);
        let re = a.images.find((le) => le.id === X);
        re || (re = a.lineageImages.find((le) => le.id === X)), ne.getState().addToBucket(e.id, B, re);
      }
    });
  }, F = (N, A) => {
    N.stopPropagation();
    let R = [A];
    M.includes(A) ? R = M : (m([A]), w(A)), N.dataTransfer.setData("text/plain", R.join(",")), N.dataTransfer.setData("application/meld-lt-source-slot", e.id), N.dataTransfer.effectAllowed = "move";
  }, L = (N, A) => {
    if (N.dataTransfer.dropEffect === "none") {
      const R = M.includes(A) ? M : [A];
      R.forEach((U) => {
        ne.getState().removeFromBucket(e.id, String(U));
      }), m((U) => U.filter((B) => !R.includes(B)));
    }
  }, Q = (N) => {
    if (T === 0) return;
    const A = {
      type: N
    }, R = z ? M : C.map(Number);
    if (R.length === 0) return;
    const U = R.map((re) => O.find((le) => le.id === re)).filter(Boolean), B = {
      edit_tags: "Tags updated",
      delete: "Delete initiated",
      move_folder: "Moved to folder",
      queue_workflow: "Queued Workflow",
      run_with_mask: "Opened Mask Editor",
      download: "Opened Download Options"
    };
    Rv(A, R, U, o, () => {
      ne.getState().showToast(B[N] ?? "Done");
    });
  }, S = () => {
    ne.getState().clearBucket(e.id), ne.getState().showToast(`Tab "${e.label}" cleared`), h(!1);
  }, E = () => {
    const N = ne.getState();
    N.slots.length <= 1 || (N.removeSlot(e.id), ne.getState().showToast(`Tab "${e.label}" deleted`));
  }, D = p.useCallback(
    (N, A) => {
      if (!N.repeat && (N.key === "Enter" || N.key === " "))
        if (N.preventDefault(), N.ctrlKey || N.metaKey)
          m(
            (R) => R.includes(A.id) ? R.filter((U) => U !== A.id) : [...R, A.id]
          ), w(A.id);
        else if (N.shiftKey && u !== null) {
          const R = O.findIndex((B) => B.id === A.id), U = O.findIndex((B) => B.id === u);
          if (R !== -1 && U !== -1) {
            const B = Math.min(R, U), X = Math.max(R, U), re = O.slice(B, X + 1).map((le) => le.id);
            m((le) => Array.from(/* @__PURE__ */ new Set([...le, ...re])));
          }
          w(A.id);
        } else
          m([]), w(null), o({
            type: "OPEN_VIEWER",
            payload: {
              id: A.id,
              mode: "lighttable",
              slotId: e.id
            }
          });
    },
    [O, u, o, e.id]
  );
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "meld-lt-slot-panel",
      style: { "--slot-color": e.color },
      onDragOver: W,
      onDragLeave: V,
      onDrop: I,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot-panel__images", children: T === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot-panel__empty", children: "Drag & Drop images here" }) : O.map((N) => {
          const A = mt(N);
          return /* @__PURE__ */ s.jsx(
            "div",
            {
              role: "button",
              tabIndex: 0,
              className: `meld-lt-slot-panel__image-wrapper${M.includes(N.id) ? " selected" : ""}`,
              draggable: !0,
              onClick: (R) => {
                if (R.ctrlKey || R.metaKey)
                  m(
                    (U) => U.includes(N.id) ? U.filter((B) => B !== N.id) : [...U, N.id]
                  ), w(N.id);
                else if (R.shiftKey && u !== null) {
                  const U = O.findIndex((X) => X.id === N.id), B = O.findIndex((X) => X.id === u);
                  if (U !== -1 && B !== -1) {
                    const X = Math.min(U, B), re = Math.max(U, B), le = O.slice(X, re + 1).map((K) => K.id);
                    m((K) => Array.from(/* @__PURE__ */ new Set([...K, ...le])));
                  }
                  w(N.id);
                } else
                  m([]), w(null), o({
                    type: "OPEN_VIEWER",
                    payload: {
                      id: N.id,
                      mode: "lighttable",
                      slotId: e.id
                    }
                  });
              },
              onKeyDown: (R) => D(R, N),
              onDragStart: (R) => F(R, N.id),
              onDragEnd: (R) => L(R, N.id),
              children: /* @__PURE__ */ s.jsx("img", { src: A, alt: N.filename, draggable: !1 })
            },
            N.id
          );
        }) }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__actions", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__action-menu-wrapper", ref: k, children: [
            /* @__PURE__ */ s.jsxs(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__action-btn",
                onClick: () => g(!v),
                disabled: T === 0,
                title: "Actions",
                children: [
                  z ? `Action (${M.length})` : "Action",
                  /* @__PURE__ */ s.jsx(Jh, { size: 12 })
                ]
              }
            ),
            v && /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot__action-menu", children: [
              {
                type: "edit_tags",
                label: "Edit Tags",
                icon: ar
              },
              {
                type: "queue_workflow",
                label: "Queue Workflow",
                icon: ri
              },
              {
                type: "run_with_mask",
                label: "Queue Workflow (Mask)",
                icon: xg
              },
              {
                type: "download",
                label: "Download",
                icon: Gr
              },
              {
                type: "delete",
                label: "Delete",
                icon: Wt,
                danger: !0
              }
            ].map((N) => /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: `meld-lt-slot__action-menu-item${N.danger ? " meld-lt-slot__action-menu-item--danger" : ""}${"disabled" in N && N.disabled ? " meld-lt-slot__action-menu-item--disabled" : ""}`,
                onMouseDown: (A) => A.stopPropagation(),
                onClick: () => {
                  "disabled" in N && N.disabled || (Q(N.type), g(!1));
                },
                children: [
                  /* @__PURE__ */ s.jsx(N.icon, { size: 13 }),
                  /* @__PURE__ */ s.jsx("span", { children: N.label })
                ]
              },
              N.type
            )) })
          ] }),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-lt-slot__menu-btn",
              onClick: () => h(!0),
              title: "Clear Tab",
              disabled: T === 0,
              children: /* @__PURE__ */ s.jsx(tg, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__settings-wrapper", ref: y, children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__menu-btn",
                onClick: () => c(!i),
                title: "Tab Settings",
                children: /* @__PURE__ */ s.jsx(hf, { size: 14 })
              }
            ),
            i && /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__settings-popover", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__settings-row", children: [
                /* @__PURE__ */ s.jsx("label", { htmlFor: `slot-label-${e.id}`, children: "Tab Label:" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    id: `slot-label-${e.id}`,
                    value: j,
                    onChange: (N) => x(N.target.value),
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
                          value: _.startsWith("var") ? ((P = _.match(/#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})/)) == null ? void 0 : P[0]) ?? "#9ca3af" : /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/i.test(_) ? _ : "#9ca3af",
                          onChange: (N) => b(N.target.value),
                          style: { flexShrink: 0 }
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          value: _,
                          onChange: (N) => b(N.target.value),
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
                    const N = ne.getState(), A = j.trim();
                    if (!A) {
                      N.showToast("Error: Tab label cannot be empty", "error");
                      return;
                    }
                    if (N.slots.some(
                      (U) => U.id !== e.id && (U.label.toLowerCase() === A.toLowerCase() || U.id.toLowerCase() === A.toLowerCase())
                    )) {
                      N.showToast(`Error: "${A}" is already in use`, "error");
                      return;
                    }
                    N.updateSlot(e.id, {
                      label: A,
                      color: _
                    }), c(!1), N.showToast("Settings saved");
                  },
                  children: "Save Settings"
                }
              ),
              l > 1 && /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-lt-slot__settings-delete-btn",
                  onClick: E,
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
          am,
          {
            message: `Clear all items in the "${e.label}" tab?`,
            onConfirm: S,
            onCancel: () => h(!1)
          }
        )
      ]
    }
  );
}, Ov = () => {
  const e = ne((n) => n.toastMessage), t = ne((n) => n.toastType);
  return e ? /* @__PURE__ */ s.jsx(
    "div",
    {
      className: `meld-toast ${t === "error" ? "meld-toast--error" : ""}`,
      role: "status",
      "aria-live": "polite",
      children: e
    }
  ) : null;
}, zv = () => {
  var j;
  Dv();
  const e = ne((x) => x.isOpen), t = ne((x) => x.setIsOpen), [n, r] = p.useState(!1);
  ke({
    onEscape: () => t(!1),
    enabled: e && !n
  }), p.useEffect(() => {
    e || r(!1);
  }, [e]);
  const l = ne((x) => x.slots), a = ne((x) => x.buckets), { state: o } = ie(), [i, c] = p.useState(((j = l[0]) == null ? void 0 : j.id) || "keep"), d = lm("lightTable");
  if (!e) return null;
  const h = () => {
    const x = `slot_${Date.now().toString(36)}`;
    ne.getState().addSlot({
      id: x,
      label: `Tab ${l.length + 1}`,
      color: "var(--meld-text-secondary, #9ca3af)",
      shortcutKey: ""
    }), c(x);
  }, v = () => {
    l.forEach((x) => {
      ne.getState().clearBucket(x.id);
    }), ne.getState().showToast("All tabs cleared"), r(!1);
  }, g = /* @__PURE__ */ s.jsxs("div", { className: "meld-light-table", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-light-table__tabs", children: [
      l.map((x) => {
        var _;
        return /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "button",
            className: `meld-light-table__tab ${i === x.id ? "meld-light-table__tab--active" : ""}`,
            onClick: () => c(x.id),
            style: { "--tab-color": x.color },
            onDragOver: (b) => {
              b.preventDefault(), c(x.id);
            },
            onDrop: (b) => {
              b.preventDefault();
              const f = b.dataTransfer.getData("text/plain");
              f && f.split(",").forEach((u) => {
                if (u) {
                  const w = u.trim(), k = o.images.find((y) => String(y.id) === w);
                  ne.getState().addToBucket(x.id, w, k);
                }
              });
            },
            children: [
              x.label,
              "  (",
              ((_ = a[x.id]) == null ? void 0 : _.length) || 0,
              ")"
            ]
          },
          x.id
        );
      }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-light-table__add-tab-btn",
          onClick: h,
          title: "Add Tab",
          "aria-label": "Add Tab",
          style: {
            background: "none",
            border: "none",
            color: "var(--meld-text-secondary, #9ca3af)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            padding: "0 8px"
          },
          children: /* @__PURE__ */ s.jsx(Ml, { size: 16 })
        }
      ),
      /* @__PURE__ */ s.jsx("div", { style: { flex: 1 } }),
      /* @__PURE__ */ s.jsxs(
        "button",
        {
          type: "button",
          className: "meld-light-table__clear-btn",
          onClick: () => r(!0),
          title: "Clear All Tabs",
          children: [
            /* @__PURE__ */ s.jsx(gg, { size: 14 }),
            /* @__PURE__ */ s.jsx("span", { children: "Clear All" })
          ]
        }
      ),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-light-table__close-btn",
          onClick: () => t(!1),
          title: "Close Light Table",
          "aria-label": "Close Light Table",
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
          children: /* @__PURE__ */ s.jsx(de, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-light-table__content", children: l.map((x) => /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-light-table__tab-panel",
        style: { display: i === x.id ? "block" : "none" },
        children: /* @__PURE__ */ s.jsx(Pv, { config: x })
      },
      x.id
    )) }),
    n && /* @__PURE__ */ s.jsx(
      am,
      {
        message: "Are you sure you want to clear all items in all tabs?",
        onConfirm: v,
        onCancel: () => r(!1)
      }
    ),
    /* @__PURE__ */ s.jsx(Ov, {})
  ] });
  return ue.createPortal(g, d);
}, om = () => {
  const { state: e, refreshFavorites: t } = ie(), [n, r] = p.useState(!1), [l, a] = p.useState(null), [o, i] = p.useState("info"), [c, d] = p.useState(null), [h, v] = p.useState(""), [g, j] = p.useState("");
  p.useEffect(() => {
    if (l) {
      const m = setTimeout(() => a(null), 3e3);
      return () => clearTimeout(m);
    }
  }, [l]);
  const x = p.useCallback(
    async (m, u, w) => {
      m.stopPropagation();
      const k = `Are you sure you want to delete the favorite "${w}"?`;
      if (!window.confirm(k)) return;
      const y = await Ic(u);
      if (!y.ok) {
        $.error("Failed to delete favorite", y.error);
        return;
      }
      await t();
    },
    [t]
  ), _ = p.useCallback((m, u) => {
    m.stopPropagation(), d(u), v(u.name), j(u.query);
  }, []), b = p.useCallback(async () => {
    if (!c || !h.trim() || !g.trim()) return;
    r(!0);
    const m = await Bg(
      c.id,
      h,
      g
    );
    if (r(!1), !m.ok) {
      $.error("Failed to update favorite", m.error), a("Failed to update favorite."), i("error");
      return;
    }
    await t(), d(null);
  }, [c, h, g, t]), f = p.useCallback(async () => {
    if (!e.searchQuery || n) return !1;
    if (e.favorites.some((w) => w.query === e.searchQuery)) {
      const w = e.favorites.find((k) => k.query === e.searchQuery);
      if (w) {
        r(!0);
        const k = await Ic(w.id);
        return r(!1), k.ok ? (await t(), !0) : ($.error("Failed to delete favorite:", k.error), !1);
      }
      return !1;
    }
    r(!0);
    const u = await Vg(e.searchQuery, e.searchQuery);
    return r(!1), u.ok ? (await t(), !0) : ($.error("Failed to save favorite:", u.error), !1);
  }, [e.searchQuery, e.favorites, n, t]);
  return {
    isSaving: n,
    toastMessage: l,
    toastType: o,
    editingFavorite: c,
    setEditingFavorite: d,
    editFavoriteName: h,
    setEditFavoriteName: v,
    editFavoriteQuery: g,
    setEditFavoriteQuery: j,
    handleDeleteFavorite: x,
    handleEditFavorite: _,
    handleSaveEditFavorite: b,
    handleSaveFavorite: f,
    setToastMessage: (m, u = "info") => {
      a(m), i(u);
    }
  };
}, im = ({ fav: e, onSelect: t, onEdit: n, onDelete: r }) => {
  const [l, a] = p.useState(!1), [o, i] = p.useState(!1), [c, d] = p.useState(!1);
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
                  "aria-label": `Edit favorite ${e.name}`,
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
                  children: /* @__PURE__ */ s.jsx(pf, { size: 14 })
                }
              ),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  onClick: (h) => r(h, e.id, e.name),
                  "aria-label": `Delete favorite ${e.name}`,
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
                  children: /* @__PURE__ */ s.jsx(Wt, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Fv = "_menu_jab2z_1", $v = "_header_jab2z_14", Wv = "_title_jab2z_23", Uv = "_count_jab2z_32", Vv = "_list_jab2z_37", Bv = "_toast_jab2z_46", Qv = "_editTitle_jab2z_56", Hv = "_form_jab2z_62", Kv = "_fieldGroup_jab2z_69", Gv = "_label_jab2z_75", qv = "_input_jab2z_81", Yv = "_textarea_jab2z_82", He = {
  menu: Fv,
  header: $v,
  title: Wv,
  count: Uv,
  list: Vv,
  toast: Bv,
  editTitle: Qv,
  form: Hv,
  fieldGroup: Kv,
  label: Gv,
  input: qv,
  textarea: Yv
}, Xv = ({
  anchorRect: e,
  onClose: t,
  onSelect: n
}) => {
  const { state: r } = ie(), {
    isSaving: l,
    toastMessage: a,
    editingFavorite: o,
    setEditingFavorite: i,
    editFavoriteName: c,
    setEditFavoriteName: d,
    editFavoriteQuery: h,
    setEditFavoriteQuery: v,
    handleDeleteFavorite: g,
    handleEditFavorite: j,
    handleSaveEditFavorite: x
  } = om(), [_, b] = p.useState({ top: 0, left: 0 }), f = p.useRef(null), m = p.useRef(null);
  return ke({
    onEscape: () => {
      o ? i(null) : t();
    },
    enabled: !0
  }), Zr({
    enabled: !!e && !o,
    insideRefs: [f],
    onOutside: () => t()
  }), p.useEffect(() => {
    if (e) {
      let k = e.left;
      const y = e.bottom + 5;
      k + 300 > window.innerWidth - 10 && (k = window.innerWidth - 300 - 10), k < 10 && (k = 10), b({ top: y, left: k });
    }
  }, [e]), p.useEffect(() => {
    o && m.current && m.current.focus();
  }, [o]), e ? ue.createPortal(
    /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs(
        "div",
        {
          ref: f,
          className: `${He.menu} meld-favorites-context-menu`,
          style: {
            top: _.top,
            left: _.left
          },
          children: [
            /* @__PURE__ */ s.jsxs("div", { className: He.header, children: [
              /* @__PURE__ */ s.jsxs("div", { className: He.title, children: [
                /* @__PURE__ */ s.jsx(
                  nr,
                  {
                    size: 14,
                    color: "var(--brand-yellow, #ffd700)",
                    fill: "var(--brand-yellow, #ffd700)"
                  }
                ),
                "Favorites"
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: He.count, children: [
                r.favorites.length,
                " items"
              ] })
            ] }),
            /* @__PURE__ */ s.jsx("div", { className: He.list, children: r.favorites.map((u) => /* @__PURE__ */ s.jsx(
              im,
              {
                fav: u,
                onSelect: (w) => {
                  n(w), t();
                },
                onEdit: j,
                onDelete: g
              },
              u.id
            )) }),
            a && /* @__PURE__ */ s.jsx("div", { className: He.toast, children: a })
          ]
        }
      ),
      o && /* @__PURE__ */ s.jsx(
        "div",
        {
          className: "meld-modal-overlay meld-favorites-edit-modal-overlay",
          onMouseDown: (u) => {
            u.target === u.currentTarget && i(null);
          },
          children: /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--small",
              onClick: (u) => u.stopPropagation(),
              children: [
                /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ s.jsxs("h2", { className: He.editTitle, children: [
                    /* @__PURE__ */ s.jsx(nr, { size: 20, color: "var(--meld-accent-color)" }),
                    "Edit Favorite"
                  ] }),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => i(null),
                      children: /* @__PURE__ */ s.jsx(de, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsxs("div", { className: He.form, children: [
                  /* @__PURE__ */ s.jsxs("div", { className: He.fieldGroup, children: [
                    /* @__PURE__ */ s.jsx("label", { htmlFor: "edit-favorite-name-ctx", className: He.label, children: "Name" }),
                    /* @__PURE__ */ s.jsx(
                      "input",
                      {
                        id: "edit-favorite-name-ctx",
                        ref: m,
                        type: "text",
                        value: c,
                        onChange: (u) => d(u.target.value),
                        placeholder: "Favorite Name",
                        className: He.input,
                        onKeyDown: (u) => {
                          u.key === "Enter" && (Ge(u), x()), u.key === "Escape" && (Ge(u), i(null));
                        }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ s.jsxs("div", { className: He.fieldGroup, children: [
                    /* @__PURE__ */ s.jsx("label", { htmlFor: "edit-favorite-query-ctx", className: He.label, children: "Search Query" }),
                    /* @__PURE__ */ s.jsx(
                      "textarea",
                      {
                        id: "edit-favorite-query-ctx",
                        value: h,
                        onChange: (u) => v(u.target.value),
                        placeholder: "Search Query",
                        rows: 3,
                        className: He.textarea,
                        onKeyDown: (u) => {
                          u.key === "Enter" && !u.shiftKey && (Ge(u), x()), u.key === "Escape" && (Ge(u), i(null));
                        }
                      }
                    )
                  ] })
                ] }) }),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-footer", children: [
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn--secondary",
                      onClick: () => i(null),
                      children: "Cancel"
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn--primary",
                      onClick: x,
                      disabled: l || !c.trim() || !h.trim(),
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
}, js = (e) => {
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
}, Zv = () => {
  const { state: e, dispatch: t, updateSetting: n } = ie(), [r, l] = p.useState(e.searchQuery), [a, o] = p.useState([]), [i, c] = p.useState(!1), [d, h] = p.useState([]), [v, g] = p.useState([]), j = e.settings["search.show_all_keywords"], [x, _] = p.useState(-1), [b, f] = p.useState(null), m = p.useRef(null), u = p.useRef(e.searchQuery), w = p.useRef(!0);
  p.useEffect(() => (w.current = !0, () => {
    w.current = !1;
  }), []);
  const k = p.useCallback(async () => {
    if (v.length > 0) return;
    const S = await $g();
    w.current && S.ok && g(S.data);
  }, [v.length]);
  p.useEffect(() => {
    let S = !0;
    return Wg().then((E) => {
      S && E.ok && f(E.data);
    }), j && k().catch((E) => {
      S && $.error("Failed to fetch keywords:", E);
    }), () => {
      S = !1;
    };
  }, [k, j]);
  const y = p.useMemo(() => {
    if (!b) return null;
    const S = b.all_prefixes.join("|");
    return new RegExp(`^[-!]?(${S}):(.*)$`, "i");
  }, [b]), C = p.useCallback(() => {
    const S = !j;
    S && k(), n("search.show_all_keywords", S);
  }, [j, k, n]), T = r !== u.current;
  p.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      h([]);
      return;
    }
    let S = !0;
    return Fg().then((E) => {
      S && (E.ok ? h(E.data) : h([]));
    }), () => {
      S = !1;
    };
  }, [e.settings["search.quick_suggestions"]]), p.useEffect(() => {
    l(e.searchQuery), u.current = e.searchQuery;
  }, [e.searchQuery]), p.useEffect(() => {
    var S;
    (S = m.current) == null || S.focus();
  }, []);
  const O = p.useCallback(
    (S, E = !0) => {
      u.current !== S && ($.log("SearchBar: triggering search", { query: S }), t({ type: "SET_SEARCH_QUERY", payload: S }), E && c(!1), u.current = S);
    },
    [t]
  );
  p.useEffect(() => {
    const S = setTimeout(async () => {
      if (r === u.current)
        return;
      if (!e.settings["search.input_suggest"] || !y) {
        o([]), c(!1);
        return;
      }
      const E = js(r), D = E[E.length - 1];
      if (D) {
        const P = D.match(y);
        if (P) {
          const N = P[1];
          let A = P[2];
          if (!N || A === void 0) {
            o([]), c(!1);
            return;
          }
          const R = N.toLowerCase();
          A.startsWith('"') && (A = A.substring(1)), A.endsWith('"') && (A = A.substring(0, A.length - 1));
          const U = await zg(A, R), B = U.ok ? U.data : [];
          o(B), c(B.length > 0), _(-1);
        } else {
          const N = D.replace(/^([-!])/, "").toLowerCase();
          if (N && b) {
            const A = b.all_prefixes.filter((R) => R.startsWith(N)).map((R) => ({
              type: R,
              value: "",
              count: 0
            }));
            if (A.length > 0) {
              o(A), c(!0), _(-1);
              return;
            }
          }
          o([]), c(!1);
        }
      } else
        o([]), c(!1);
    }, 300);
    return () => clearTimeout(S);
  }, [r, e.settings["search.input_suggest"], y, b]);
  const M = p.useCallback(
    (S) => {
      var U;
      if (!S) return;
      const E = js(r), P = (E.pop() || "").match(/^([-!])/), N = P ? P[1] : "", R = ((b == null ? void 0 : b.no_quote_prefixes) || []).includes(S.type);
      if (S.value === "") {
        const B = `${[...E, `${N}${S.type}:`].join(" ").trim()}`;
        l(B);
      } else {
        const B = R ? S.value : `"${S.value}"`, X = `${[...E, `${N}${S.type}:${B}`].join(" ").trim()} `;
        l(X), o([]), c(!1);
      }
      (U = m.current) == null || U.focus();
    },
    [r, b]
  ), z = (S) => {
    if (S)
      if (S.key === "Enter")
        if (Ge(S), i && x >= 0) {
          const E = a[x];
          E && M(E);
        } else
          O(r);
      else if (S.key === "Tab") {
        if (i && a.length > 0) {
          Ge(S);
          const E = x >= 0 ? x : 0, D = a[E];
          D && M(D);
        }
      } else S.key === "ArrowDown" ? i && (Ge(S), _((E) => Math.min(E + 1, a.length - 1))) : S.key === "ArrowUp" ? i && (Ge(S), _((E) => Math.max(E - 1, -1))) : S.key === "Escape" && (Ge(S), c(!1));
  }, W = p.useCallback(() => {
    l(""), O("");
  }, [O]), V = p.useCallback(
    (S, E, D = !1) => {
      var G;
      if (!S) return;
      const P = js(r), N = P[P.length - 1] || "";
      let A = !1;
      const R = N.replace(/^([-!])/, "").toLowerCase();
      R && S.toLowerCase().startsWith(R) && (A = !0);
      const U = N.match(/^([-!])/), B = A && U ? U[1] : "";
      if (A && P.pop(), D) {
        const Be = [...P, `${B}${S}:`].filter(Boolean).join(" ");
        l(Be), (G = m.current) == null || G.focus();
        return;
      }
      const le = ((b == null ? void 0 : b.no_quote_prefixes) || []).includes(S) ? E : `"${E}"`, K = `${B}${S}:${le}`, te = [...P, K].filter(Boolean).join(" ");
      l(te), O(te);
    },
    [r, O, b]
  ), I = p.useCallback(
    (S) => {
      l(S), S || O("");
    },
    [O]
  ), F = p.useCallback(() => {
    if (r === u.current || !y) return;
    const S = js(r), E = S[S.length - 1];
    if (!E) return;
    const D = !!E.match(y), P = E.replace(/^([-!])/, "").toLowerCase(), N = P && (b == null ? void 0 : b.all_prefixes.some((A) => A.startsWith(P)));
    (D || N) && c(!0);
  }, [r, y, b]), L = p.useRef(null), Q = p.useCallback(() => {
    L.current = setTimeout(() => c(!1), 200);
  }, []);
  return p.useEffect(() => () => {
    L.current && clearTimeout(L.current);
  }, []), {
    inputValue: r,
    setInputValue: l,
    suggestions: a,
    showSuggestions: i,
    setShowSuggestions: c,
    searchSuggestions: d,
    allKeywords: v,
    showAllKeywords: j,
    toggleShowAllKeywords: C,
    selectedIndex: x,
    setSelectedIndex: _,
    inputRef: m,
    isQueryChanged: T,
    handleSearch: O,
    handleKeyDown: z,
    applySuggestion: M,
    clearSearch: W,
    applySearchSuggestion: V,
    handleInputChange: I,
    handleInputFocus: F,
    handleInputBlur: Q
  };
}, Wc = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ s.jsx(ar, { size: 12 });
    case "model":
      return /* @__PURE__ */ s.jsx(Yh, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ s.jsx(yg, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ s.jsx(Xh, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ s.jsx(uf, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ s.jsx(df, { size: 12 });
    case "note":
      return /* @__PURE__ */ s.jsx(ng, { size: 12 });
    case "sort":
      return /* @__PURE__ */ s.jsx(Gh, { size: 12 });
    default:
      return null;
  }
}, Jv = ({
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
  toggleShowAllKeywords: h,
  applySearchSuggestion: v,
  favorites: g,
  onSelectFavorite: j,
  onEditFavorite: x,
  onDeleteFavorite: _
}) => {
  const b = (w, k, y) => /* @__PURE__ */ s.jsxs(
    "button",
    {
      type: "button",
      onClick: () => v(w.type, w.value, y === "all"),
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
      onMouseEnter: (C) => {
        C.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", C.currentTarget.style.borderColor = "var(--comfy-menu-border, #444)", C.currentTarget.style.color = "var(--meld-text-color)";
      },
      onMouseLeave: (C) => {
        C.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", C.currentTarget.style.borderColor = "var(--comfy-menu-border, #333)", C.currentTarget.style.color = "var(--meld-text-color)";
      },
      children: [
        /* @__PURE__ */ s.jsx(
          "span",
          {
            style: {
              display: "flex",
              color: "var(--meld-text-secondary)"
            },
            children: Wc(w.type)
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
            children: w.type
          }
        ),
        y !== "all" && /* @__PURE__ */ s.jsx(
          "span",
          {
            style: {
              maxWidth: "200px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: w.value
          }
        )
      ]
    },
    `${y}-${w.type}:${w.value}:${k}`
  ), f = () => !e || t.length === 0 ? null : /* @__PURE__ */ s.jsx(
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
      children: t.map((w, k) => /* @__PURE__ */ s.jsx(
        "div",
        {
          onMouseDown: (y) => {
            y.preventDefault(), l(w);
          },
          onMouseEnter: () => r(k),
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 14px",
            cursor: "pointer",
            backgroundColor: k === n ? "var(--comfy-input-bg-active, rgba(59, 130, 246, 0.15))" : "transparent",
            borderBottom: "1px solid var(--comfy-menu-border, #2a2a2a)",
            borderLeft: k === n ? "3px solid var(--meld-accent-color, #3b82f6)" : "3px solid transparent",
            transition: "all 0.1s ease-out"
          },
          children: /* @__PURE__ */ s.jsxs(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "10px",
                transform: k === n ? "translateX(2px)" : "none",
                transition: "transform 0.1s ease-out"
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "span",
                  {
                    style: {
                      color: k === n ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-secondary)",
                      display: "flex",
                      transition: "color 0.1s"
                    },
                    children: Wc(w.type)
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
                      width: w.type.length > 8 ? "auto" : "60px",
                      flexShrink: 0
                    },
                    children: [
                      w.type,
                      ":"
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  "span",
                  {
                    style: {
                      color: w.value === _t ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                      fontSize: "14px",
                      fontWeight: w.value === _t ? "bold" : "normal"
                    },
                    children: w.value === _t ? w.type === "tag" ? `Untagged (${_t})` : `No ${w.type} (${_t})` : w.value
                  }
                )
              ]
            }
          )
        },
        `${w.type}:${w.value}`
      ))
    }
  ), m = () => i.length === 0 || a && a === o ? null : /* @__PURE__ */ s.jsxs(
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
            children: i.map((w, k) => b(w, k, "quick"))
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
                  children: Array.from(new Set(c.map((w) => w.type))).map(
                    (w, k) => b({ type: w, value: "" }, k, "all")
                  )
                }
              )
            ]
          }
        )
      ]
    }
  ), u = () => g.length === 0 || a && a === o ? null : /* @__PURE__ */ s.jsxs(
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
              /* @__PURE__ */ s.jsx(nr, { size: 12, fill: "var(--meld-text-secondary)" }),
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
            children: g.map((w) => /* @__PURE__ */ s.jsx(
              im,
              {
                fav: w,
                onSelect: j,
                onEdit: x,
                onDelete: _
              },
              w.id
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
      onMouseDown: (w) => {
        w.preventDefault();
      },
      children: [
        f(),
        m(),
        u()
      ]
    }
  );
}, ew = () => {
  const { state: e } = ie(), {
    inputValue: t,
    setInputValue: n,
    suggestions: r,
    showSuggestions: l,
    searchSuggestions: a,
    allKeywords: o,
    showAllKeywords: i,
    toggleShowAllKeywords: c,
    selectedIndex: d,
    setSelectedIndex: h,
    inputRef: v,
    isQueryChanged: g,
    handleSearch: j,
    handleKeyDown: x,
    applySuggestion: _,
    clearSearch: b,
    applySearchSuggestion: f,
    handleInputChange: m,
    handleInputFocus: u,
    handleInputBlur: w
  } = Zv(), {
    isSaving: k,
    toastMessage: y,
    toastType: C,
    editingFavorite: T,
    setEditingFavorite: O,
    editFavoriteName: M,
    setEditFavoriteName: z,
    editFavoriteQuery: W,
    setEditFavoriteQuery: V,
    handleDeleteFavorite: I,
    handleEditFavorite: F,
    handleSaveEditFavorite: L,
    handleSaveFavorite: Q,
    setToastMessage: S
  } = om(), E = async () => {
    const R = e.favorites.some((B) => B.query === e.searchQuery);
    await Q() && S(
      R ? "Removed from favorites." : "Added to favorites.",
      "info"
    );
  };
  ke({
    onEscape: () => O(null),
    enabled: !!T
  });
  const D = p.useRef(null), P = p.useRef(!1);
  p.useEffect(() => {
    T && D.current && D.current.focus();
  }, [T]);
  const N = (R) => {
    R.target === R.currentTarget && (P.current = !0);
  }, A = (R) => {
    R.target === R.currentTarget && P.current && O(null), P.current = !1;
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "meld-search-container",
      style: { display: "flex", flexDirection: "column", gap: "8px", flex: 1 },
      children: [
        /* @__PURE__ */ s.jsxs("div", { className: "meld-search-bar-wrapper", style: { position: "relative", width: "100%" }, children: [
          y && /* @__PURE__ */ s.jsx(
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
                border: C === "error" ? "1px solid var(--brand-red, #ff4c4c)" : "1px solid var(--comfy-menu-border, #444)",
                animation: "meld-fade-in-down 0.3s ease-out",
                width: "max-content",
                maxWidth: "300px"
              },
              children: y
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
                    onClick: () => j(t),
                    style: {
                      background: g ? "var(--meld-accent-color, #3b82f6)" : "var(--comfy-input-bg-active, rgba(255,255,255,0.03))",
                      border: g ? "1px solid var(--meld-border-color, rgba(255,255,255,0.2))" : "1px solid transparent",
                      cursor: "pointer",
                      padding: "6px 10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "10px",
                      flexShrink: 0,
                      borderRadius: "4px",
                      transition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                      boxShadow: g ? "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))" : "none"
                    },
                    onMouseEnter: (R) => {
                      R.currentTarget.style.transform = "translateY(-1px)", g ? (R.currentTarget.style.filter = "brightness(1.15)", R.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : R.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                    },
                    onMouseLeave: (R) => {
                      R.currentTarget.style.transform = "none", g ? (R.currentTarget.style.filter = "none", R.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : R.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                    },
                    onMouseDown: (R) => {
                      R.currentTarget.style.transform = "translateY(1px)", R.currentTarget.style.boxShadow = "none";
                    },
                    onMouseUp: (R) => {
                      R.currentTarget.style.transform = "translateY(-1px)";
                    },
                    title: "Search (Enter)",
                    children: [
                      /* @__PURE__ */ s.jsx(
                        on,
                        {
                          size: 16,
                          color: g ? "var(--meld-text-color, #fff)" : "var(--meld-text-secondary)",
                          style: {
                            transition: "color 0.2s",
                            filter: g ? "drop-shadow(0 1px 2px var(--meld-shadow-color, rgba(0,0,0,0.2)))" : "none"
                          }
                        }
                      ),
                      g && /* @__PURE__ */ s.jsx(
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
                    onChange: (R) => m(R.target.value),
                    onKeyDown: x,
                    onBlur: w,
                    onFocus: u,
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
                    onClick: E,
                    disabled: k,
                    "aria-label": e.favorites.some((R) => R.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
                    title: e.favorites.some((R) => R.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                      nr,
                      {
                        size: 16,
                        color: e.favorites.some((R) => R.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                        fill: e.favorites.some((R) => R.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                      }
                    )
                  }
                ),
                t && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: b,
                    "aria-label": "Clear search",
                    style: {
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "2px",
                      display: "flex",
                      alignItems: "center",
                      flexShrink: 0
                    },
                    children: /* @__PURE__ */ s.jsx(de, { size: 16, color: "var(--meld-text-secondary)" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ s.jsx(
            Jv,
            {
              showSuggestions: l,
              suggestions: r,
              selectedIndex: d,
              setSelectedIndex: h,
              applySuggestion: _,
              inputValue: t,
              searchQuery: e.searchQuery,
              searchSuggestions: a,
              allKeywords: o,
              showAllKeywords: i,
              toggleShowAllKeywords: c,
              applySearchSuggestion: f,
              favorites: e.favorites,
              onSelectFavorite: (R) => {
                n(R), j(R);
              },
              onEditFavorite: F,
              onDeleteFavorite: I
            }
          )
        ] }),
        T && ue.createPortal(
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-modal-overlay meld-search-edit-modal-overlay",
              onMouseDown: N,
              onMouseUp: A,
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-modal-content meld-modal-content--small",
                  onClick: (R) => R.stopPropagation(),
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-labelledby": "edit-favorite-title",
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                      /* @__PURE__ */ s.jsxs(
                        "h2",
                        {
                          id: "edit-favorite-title",
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ s.jsx(nr, { size: 20, color: "var(--meld-accent-color)" }),
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
                          children: /* @__PURE__ */ s.jsx(de, { size: 20 })
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
                                    ref: D,
                                    type: "text",
                                    value: M,
                                    onChange: (R) => z(R.target.value),
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
                                    onKeyDown: (R) => {
                                      R.key === "Enter" && (Ge(R), L()), R.key === "Escape" && (Ge(R), O(null));
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
                                    value: W,
                                    onChange: (R) => V(R.target.value),
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
                                    onKeyDown: (R) => {
                                      R.key === "Enter" && !R.shiftKey && (Ge(R), L()), R.key === "Escape" && (Ge(R), O(null));
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
                          className: "meld-btn meld-btn--secondary",
                          onClick: () => O(null),
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn--primary",
                          onClick: L,
                          disabled: k || !M.trim() || !W.trim(),
                          children: k ? "Saving..." : "Save Changes"
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
}, tw = ({ onClose: e, onSearch: t }) => {
  const [n, r] = p.useState([]), [l, a] = p.useState(!0), [o, i] = p.useState(""), [c, d] = p.useState(""), [h, v] = p.useState(!1), [g, j] = p.useState(null), [x, _] = p.useState(""), [b, f] = p.useState(!1), m = p.useRef(null), u = p.useCallback(async () => {
    a(!0);
    const z = await ci();
    if (a(!1), !z.ok) {
      $.error("Failed to fetch tags:", z.error);
      return;
    }
    r(z.data);
  }, []);
  p.useEffect(() => {
    u();
  }, [u]), p.useEffect(() => {
    g !== null && m.current && (m.current.focus(), m.current.select());
  }, [g]);
  const w = async (z) => {
    z.preventDefault();
    const W = c.trim();
    if (!W || h) return;
    if (W.toLowerCase() === _t) {
      alert(`Tag name '${_t}' is reserved for search and cannot be used.`);
      return;
    }
    if (n.some((I) => I.name.toLowerCase() === W.toLowerCase())) {
      alert(`Tag "${W}" already exists.`);
      return;
    }
    v(!0);
    const V = await sy(W);
    if (v(!1), !V.ok) {
      $.error("Failed to add tag:", V.error);
      return;
    }
    d(""), await u();
  }, k = async (z, W) => {
    if (!confirm(`Are you sure you want to delete tag "${W}"?`)) return;
    const V = await ly(z);
    if (!V.ok) {
      $.error("Failed to delete tag:", V.error);
      return;
    }
    await u();
  }, y = (z) => {
    j(z.id), _(z.name);
  }, C = () => {
    j(null), _("");
  }, T = async (z) => {
    z.preventDefault();
    const W = x.trim();
    if (!W || g === null || b) return;
    if (W.toLowerCase() === _t) {
      alert(`Tag name '${_t}' is reserved for search and cannot be used.`);
      return;
    }
    const V = n.find((F) => F.id === g);
    if (V && V.name === W) {
      C();
      return;
    }
    if (n.some((F) => F.id !== g && F.name.toLowerCase() === W.toLowerCase())) {
      alert(`Tag "${W}" already exists.`);
      return;
    }
    f(!0);
    const I = await ay(g, W);
    if (f(!1), !I.ok) {
      $.error("Failed to rename tag:", I.error), alert(I.error);
      return;
    }
    C(), await u();
  }, O = (z) => {
    t(`tag:${z}`);
  }, M = p.useMemo(() => n.filter((z) => z.name.toLowerCase().includes(o.toLowerCase())), [n, o]);
  return /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(ar, { size: 16 }),
        /* @__PURE__ */ s.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ s.jsx(de, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ s.jsxs("form", { className: "meld-tag-add-form", onSubmit: w, children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: c,
            onChange: (z) => d(z.target.value),
            disabled: h
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn--primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !c.trim() || h,
            children: [
              /* @__PURE__ */ s.jsx(Ml, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ s.jsx(on, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: o,
            onChange: (z) => i(z.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-list", children: M.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : M.map((z) => /* @__PURE__ */ s.jsx("div", { className: "meld-tag-item", children: g === z.id ? /* @__PURE__ */ s.jsxs("form", { className: "meld-tag-rename-form", onSubmit: T, children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            ref: m,
            className: "meld-tag-rename-input",
            value: x,
            onChange: (W) => _(W.target.value),
            onKeyDown: (W) => W.key === "Escape" && C()
          }
        ),
        /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "submit",
            className: "meld-tag-item__btn meld-tag-item__btn--save",
            title: "Save",
            disabled: b || !x.trim(),
            children: /* @__PURE__ */ s.jsx(Je, { size: 14 })
          }
        ),
        /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            className: "meld-tag-item__btn",
            title: "Cancel",
            onClick: C,
            disabled: b,
            children: /* @__PURE__ */ s.jsx(de, { size: 14 })
          }
        )
      ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("span", { className: "meld-tag-item__name", children: z.name }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => O(z.name),
              children: /* @__PURE__ */ s.jsx(on, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => y(z),
              children: /* @__PURE__ */ s.jsx(pf, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => k(z.id, z.name),
              children: /* @__PURE__ */ s.jsx(Wt, { size: 14 })
            }
          )
        ] })
      ] }) }, z.id)) })
    ] })
  ] });
}, ia = 56, cm = (e, t) => {
  const n = p.useCallback(async (l) => oi(l), []), r = p.useCallback(
    (l) => {
      const a = t["gallery.lineage_max_depth"];
      if (a === 0) return [];
      if (l.ancestors && l.ancestors.length > 0)
        return l.ancestors.slice(0, a).map((h) => ({
          id: h.id,
          imgSrc: mt(h, ia)
        }));
      const o = l.parent_id;
      if (!o || !l.parent_filename) return [];
      const i = e.find((h) => h.id === o);
      let c = null;
      if (i ? c = mt(i, ia) : c = mt(
        {
          filename: l.parent_filename,
          subfolder: l.parent_subfolder || "",
          type: l.parent_type
        },
        ia
      ), !c) return [];
      const d = {
        id: o || null,
        imgSrc: c
      };
      if (i && a > 1) {
        const h = r(i);
        return [d, ...h].slice(0, a);
      }
      return [d];
    },
    [t, e]
  );
  return { getParentChain: r, fetchLineage: n };
}, Uc = ({
  currentThumbnails: e,
  currentIndex: t,
  removedIds: n,
  viewerMode: r,
  viewerLightTableSlotId: l,
  dispatch: a,
  removeImageIds: o
}) => {
  let i = null;
  for (let c = t + 1; c < e.length; c++) {
    const d = e[c];
    if (d && !n.has(d.id)) {
      i = d.id;
      break;
    }
  }
  if (i === null)
    for (let c = t - 1; c >= 0; c--) {
      const d = e[c];
      if (d && !n.has(d.id)) {
        i = d.id;
        break;
      }
    }
  a(i !== null ? {
    type: "OPEN_VIEWER",
    payload: {
      id: i,
      mode: r,
      ...r === "lighttable" && l ? { slotId: l } : {}
    }
  } : { type: "CLOSE_VIEWER" }), o && o.length > 0 && a({ type: "REMOVE_IMAGES", payload: o });
}, nw = ({
  state: e,
  dispatch: t,
  image: n,
  isFullscreen: r,
  currentThumbnails: l,
  currentIndex: a,
  viewerMode: o,
  lineageImages: i,
  images: c,
  mountRefs: d,
  handleNext: h,
  handlePrevious: v,
  handleEditTags: g,
  handleRestore: j,
  fetchLineage: x,
  restoreImages: _,
  bulkUpdateImageTags: b
}) => {
  const [f, m] = p.useState(null), [u, w] = p.useState(
    null
  ), k = p.useCallback(
    async (z = !1) => {
      if (!n) return;
      const W = r ? e.settings["fullscreen.delete_mode"] : e.settings["viewer.delete_mode"];
      if (!z && W === "confirm") {
        t({
          type: "OPEN_MODAL",
          payload: {
            type: "delete_confirm",
            imageIds: [n.id],
            hasLineage: !!(n.parent_id || n.has_children),
            isPermanent: e.viewScope === "trash"
          }
        });
        return;
      }
      const V = e.viewScope === "trash", I = /* @__PURE__ */ new Set([n.id]);
      let F = [];
      if (W === "lineage") {
        F = await x(n.id);
        for (const Q of F)
          I.add(Q.id);
      }
      if (!d.isMountedRef.current || d.viewerImageIdRef.current === null)
        return;
      const L = await lo(
        Array.from(I),
        V
      );
      if (!L.ok) {
        t({ type: "SET_ERROR", payload: L.error });
        return;
      }
      if (!d.isMountedRef.current || d.viewerImageIdRef.current === null) {
        t({ type: "REMOVE_IMAGES", payload: Array.from(I) });
        return;
      }
      if (Uc({
        currentThumbnails: l,
        currentIndex: a,
        removedIds: I,
        viewerMode: o,
        viewerLightTableSlotId: e.viewerLightTableSlotId,
        dispatch: t,
        removeImageIds: Array.from(I)
      }), !V) {
        const Q = [...l, ...F, ...i, ...c], S = /* @__PURE__ */ new Map();
        for (const D of Q)
          S.set(D.id, D);
        const E = Array.from(I).map((D) => {
          const P = S.get(D);
          return P || {
            id: D,
            filename: `deleted_${D}`,
            subfolder: "",
            type: "custom",
            created_at: 0,
            positive: "",
            negative: "",
            tags: []
          };
        });
        m(E), w(null);
      }
    },
    [
      a,
      l,
      t,
      n,
      x,
      c,
      r,
      i,
      d,
      e.settings,
      e.viewScope,
      e.viewerLightTableSlotId,
      o
    ]
  ), y = p.useCallback(() => {
    n && g(n);
  }, [g, n]), C = p.useCallback(async () => {
    n && (l.length > 1 ? h() : t({ type: "CLOSE_VIEWER" }), await j(n));
  }, [l.length, t, h, j, n]), T = p.useCallback(async () => {
    if (!f || f.length === 0) return;
    const z = f.map((Q) => Q.id), W = await _(z);
    if (!W.ok) {
      t({ type: "SET_ERROR", payload: W.error });
      return;
    }
    if (!d.isMountedRef.current) return;
    const V = W.data.restored_ids || z, I = new Set(V), F = f.filter((Q) => I.has(Q.id));
    if (F.length > 0 && t({ type: "ADD_IMAGES", payload: F }), e.viewScope === "trash" && t({ type: "REMOVE_IMAGES", payload: V }), m(null), !d.isMountedRef.current) return;
    const L = V[0];
    L !== void 0 && t({
      type: "OPEN_VIEWER",
      payload: {
        id: L,
        mode: o,
        ...o === "lighttable" && e.viewerLightTableSlotId ? { slotId: e.viewerLightTableSlotId } : {}
      }
    });
  }, [
    t,
    f,
    d.isMountedRef,
    _,
    e.viewScope,
    e.viewerLightTableSlotId,
    o
  ]), O = p.useCallback(async () => {
    if (f && f.length > 0) {
      await T();
      return;
    }
    if (!u || u.type !== "tags")
      return;
    const { imageId: z, addTags: W, removeTags: V } = u, I = await b([z], W, V);
    if (!I.ok) {
      t({ type: "SET_ERROR", payload: I.error });
      return;
    }
    const F = (o === "lineage" ? i : c).find(
      (L) => L.id === z
    );
    if (F) {
      const L = [...F.tags];
      for (const S of W)
        L.includes(S) || L.push(S);
      const Q = L.filter((S) => !V.includes(S));
      t({
        type: "UPDATE_IMAGE",
        payload: { ...F, tags: Q }
      }), t({
        type: "OPEN_VIEWER",
        payload: {
          id: z,
          mode: o,
          ...o === "lighttable" && e.viewerLightTableSlotId ? { slotId: e.viewerLightTableSlotId } : {}
        }
      });
    }
    w(null);
  }, [
    t,
    T,
    c,
    f,
    u,
    i,
    b,
    e.viewerLightTableSlotId,
    o
  ]), M = p.useCallback(
    async (z) => {
      if (!z || typeof z != "string" || !n) return;
      const W = n.id, V = [...n.tags], I = Ry(z, n), { addTags: F, removeTags: L, isDeleted: Q, moveNext: S, movePrev: E, sendToLtSlot: D } = I;
      if (D) {
        const P = ne.getState(), N = P.slots.find(
          (A) => A.id.toLowerCase() === D.toLowerCase() || A.label.toLowerCase() === D.toLowerCase()
        );
        N ? (P.addToBucket(N.id, String(W), n), P.showToast(`Sent to ${N.label}`), Q || Uc({
          currentThumbnails: l,
          currentIndex: a,
          removedIds: /* @__PURE__ */ new Set([W]),
          viewerMode: o,
          viewerLightTableSlotId: e.viewerLightTableSlotId,
          dispatch: t,
          removeImageIds: [W]
        })) : (P.showToast(`Error: Light Table slot "${D}" not found`, "error"), $.warn(`Attempted to send to non-existent LT slot: ${D}`));
      }
      if (F.length > 0 || L.length > 0) {
        const P = await b([W], F, L);
        if (P.ok) {
          const N = [...V];
          for (const R of F)
            N.includes(R) || N.push(R);
          const A = N.filter((R) => !L.includes(R));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...n, id: W, tags: A }
          }), w({
            type: "tags",
            imageId: W,
            addTags: [...L],
            removeTags: [...F]
          }), m(null);
        } else {
          $.error("Failed to update tags via shortcut:", P.error), t({ type: "SET_ERROR", payload: P.error });
          return;
        }
      }
      Q ? await k(!0) : S ? h() : E && await v();
    },
    [
      a,
      l,
      t,
      b,
      k,
      h,
      v,
      n,
      e.viewerLightTableSlotId,
      o
    ]
  );
  return {
    lastDeletedImages: f,
    setLastDeletedImages: m,
    handleDelete: k,
    handleTagEditAction: y,
    handleRestoreAction: C,
    handleUndo: O,
    executeCommand: M
  };
}, rw = ({
  overlayRef: e,
  settings: t,
  setShowDetails: n
}) => {
  const [r, l] = p.useState(!1), a = p.useCallback(
    (o) => {
      o && typeof o.stopPropagation == "function" && o.stopPropagation();
      const i = e.current;
      i && (document.fullscreenElement ? document.exitFullscreen() : i.requestFullscreen().catch((c) => {
        $.error(`Error attempting to enable full-screen mode: ${c.message}`);
      }));
    },
    [e]
  );
  return p.useEffect(() => {
    const o = () => {
      const i = !!document.fullscreenElement;
      l(i), n(i ? t["fullscreen.show_details_by_default"] : t["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", o), () => {
      document.removeEventListener("fullscreenchange", o);
    };
  }, [t, n]), { isFullscreen: r, toggleFullscreen: a };
}, sw = ({
  viewerImageId: e,
  activeModalType: t,
  viewScope: n,
  settings: r,
  dispatch: l,
  isMountedRef: a,
  toggleFullscreen: o,
  handleNext: i,
  handlePrevious: c,
  handleDelete: d,
  handleUndo: h,
  handleTagEditAction: v,
  handleRestoreAction: g,
  executeCommand: j,
  setShowDetails: x,
  setActiveShortcutKey: _
}) => {
  const b = p.useCallback(
    (f) => {
      if (!(f.target instanceof HTMLElement))
        return;
      const m = f.target, u = m.tagName === "INPUT" || m.tagName === "TEXTAREA" || m.isContentEditable;
      if (u && f.key !== "Escape") {
        f.key === "Enter" && (f.ctrlKey || f.metaKey) && f.preventDefault();
        return;
      }
      if (e === null || t !== "none")
        return;
      const w = f.key === "Delete" || f.key === "Backspace", k = f.key === "ArrowRight" || f.key === "ArrowLeft" || f.key === "ArrowDown" || f.key === "ArrowUp", y = ["f", "F", "i", "I", "t", "T", "r", "R", "Enter"].includes(f.key), C = f.key === "Escape", T = (f.ctrlKey || f.metaKey) && (f.key === "z" || f.key === "Z" || f.code === "KeyZ"), O = /^[0-9]$/.test(f.key) && !f.ctrlKey && !f.metaKey && !f.altKey && f.code !== "KeyZ";
      if (w || k || y || C || T || O)
        if (!u || C)
          Xr(f);
        else
          return;
      else
        return;
      if (C)
        document.fullscreenElement ? document.exitFullscreen() : l({ type: "CLOSE_VIEWER" });
      else if (k)
        f.key === "ArrowRight" || f.key === "ArrowDown" ? i() : c();
      else if (y && (f.key === "f" || f.key === "F" || f.key === "Enter"))
        o(f);
      else if (y && (f.key === "i" || f.key === "I"))
        x((M) => !M);
      else if (y && (f.key === "t" || f.key === "T"))
        v();
      else if (y && (f.key === "r" || f.key === "R") && n === "trash")
        g();
      else if (w)
        d();
      else if (T)
        h();
      else if (O && !u) {
        const M = _f(f.key), z = r[M];
        typeof z == "string" && z && (_(f.key), setTimeout(() => {
          a.current && _(null);
        }, 500), j(z));
      }
    },
    [
      t,
      l,
      j,
      d,
      i,
      c,
      g,
      v,
      h,
      a,
      _,
      x,
      r,
      o,
      n,
      e
    ]
  );
  Ll({
    enabled: e !== null,
    onKeyDown: b
  });
}, lw = ({
  viewerMode: e,
  viewerImageId: t,
  lineageLength: n,
  dispatch: r,
  isMountedRef: l
}) => {
  const [a, o] = p.useState(!1), i = p.useRef(0);
  return p.useEffect(() => {
    let c = !1;
    if (e === "lineage" && t !== null && n === 0) {
      const d = ++i.current;
      o(!0), oi(t).then((h) => {
        !c && l.current && d === i.current && r({ type: "SET_LINEAGE", payload: h });
      }).catch((h) => {
        $.error("Failed to fetch lineage:", h);
      }).finally(() => {
        !c && l.current && d === i.current && o(!1);
      });
    }
    return () => {
      c = !0;
    };
  }, [r, l, n, t, e]), { isLoadingLineage: a };
}, aw = ({
  dispatch: e,
  isFullscreen: t,
  settings: n,
  currentThumbnails: r,
  currentIndex: l,
  viewerMode: a,
  pagination: o,
  searchQuery: i,
  isJumping: c,
  setIsJumping: d,
  mountRefs: h
}) => {
  const v = a === "lighttable" ? r : void 0, g = p.useCallback(() => {
    e({
      type: "NEXT_IMAGE",
      payload: { isFullscreen: t, currentList: v }
    });
  }, [v, e, t]), j = p.useCallback(async () => {
    const x = t ? n["fullscreen.loop"] : n["viewer.loop"];
    if (l === 0 && a === "gallery" && o.hasMore && !c && x) {
      d(!0);
      try {
        const _ = o.limit, b = o.total, f = Math.max(0, b - _), m = await $s(f, _, i);
        if (!h.isMountedRef.current) return;
        const u = Fs(m, {
          total: o.total,
          offset: f,
          limit: _
        });
        if (e({ type: "APPEND_IMAGES", payload: u }), h.viewerImageIdRef.current === null) return;
        if (u.images.length > 0) {
          const w = u.images.at(-1);
          if (!w) return;
          e({
            type: "OPEN_VIEWER",
            payload: { id: w.id, mode: "gallery" }
          });
        }
      } catch (_) {
        $.error("Failed to jump to end:", _);
      } finally {
        d(!1);
      }
    } else
      e({
        type: "PREVIOUS_IMAGE",
        payload: { isFullscreen: t, currentList: v }
      });
  }, [
    v,
    l,
    e,
    t,
    c,
    h,
    o,
    i,
    d,
    n,
    a
  ]);
  return { handleNext: g, handlePrevious: j };
};
function ow(e) {
  const { ids: t, index: n, loopEnabled: r, hasMore: l } = e;
  if (t.length === 0 || n < 0 || n >= t.length)
    return { prevId: null, nextId: null };
  const a = n === 0, i = n === t.length - 1 ? l || !r ? null : t[0] ?? null : t[n + 1] ?? null;
  return { prevId: a ? l || !r ? null : t[t.length - 1] ?? null : t[n - 1] ?? null, nextId: i };
}
const iw = ({
  viewerImageId: e,
  currentThumbnails: t,
  currentIndex: n,
  isFullscreen: r,
  settings: l,
  hasMore: a,
  viewerMode: o,
  isLoading: i,
  loadMoreImages: c,
  fetchFullImageDetails: d
}) => {
  p.useEffect(() => {
    o !== "gallery" || e === null || i || !a || n === -1 || n >= t.length - 15 && c();
  }, [
    n,
    t.length,
    a,
    i,
    c,
    e,
    o
  ]), p.useEffect(() => {
    if (e === null || t.length === 0) return;
    const h = t.map((b) => b.id), v = h.indexOf(e);
    if (v === -1) return;
    const g = r ? l["fullscreen.loop"] : l["viewer.loop"], { prevId: j, nextId: x } = ow({
      ids: h,
      index: v,
      loopEnabled: g,
      hasMore: a && o === "gallery"
    }), _ = setTimeout(() => {
      const b = [j, x].filter(
        (f) => f !== null && f !== e
      );
      b.length !== 0 && Promise.allSettled(b.map((f) => d(f))).then((f) => {
        for (const m of f)
          m.status === "rejected" && $.warn("Prefetching adjacent image details failed", m.reason);
      });
    }, 50);
    return () => clearTimeout(_);
  }, [
    t,
    d,
    a,
    r,
    l,
    e,
    o
  ]), p.useEffect(() => {
    if (e === null || t.length === 0 || n === -1) return;
    const h = [n + 1, n + 2, n - 1], v = setTimeout(() => {
      for (const g of h)
        if (g >= 0 && g < t.length) {
          const j = t[g];
          if (!j) continue;
          const x = new Image();
          x.src = ii(j);
        }
    }, 150);
    return () => clearTimeout(v);
  }, [n, t, e]);
};
function cw(e) {
  return {
    id: e,
    filename: `__missing_${e}__`,
    subfolder: "",
    type: "output",
    created_at: 0,
    positive: "",
    negative: "",
    tags: [],
    exists: !1,
    is_minimal: !0
  };
}
const dw = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  var ls;
  const { viewerImageId: l, images: a, viewerMode: o, lineageImages: i, settings: c } = e, {
    restoreImages: d,
    bulkUpdateImageTags: h,
    handleEditTags: v,
    handleEditNotes: g,
    handleRestore: j,
    handleUpdateUserNotes: x,
    handleRestoreWorkflow: _,
    handleAddUnifiedLoader: b,
    handleSendToWorkflow: f,
    handleRunWithWorkflow: m,
    handleRunWithMask: u,
    handleEditSource: w
  } = Tl(e, t), { getParentChain: k, fetchLineage: y } = cm(a, c), [C, T] = p.useState(!1), [O, M] = p.useState(c["viewer.show_details_by_default"]), [z, W] = p.useState(null), V = z ?? c["viewer.show_thumbnails"], [I, F] = p.useState(!1), [L, Q] = p.useState(null), S = p.useRef(null), E = {
    isMountedRef: p.useRef(!0),
    viewerImageIdRef: p.useRef(l)
  };
  p.useEffect(() => (E.isMountedRef.current = !0, () => {
    E.isMountedRef.current = !1;
  }), [E.isMountedRef]), p.useEffect(() => {
    E.viewerImageIdRef.current = l;
  }, [E.viewerImageIdRef, l]);
  const D = p.useMemo(() => {
    const me = e.searchQuery.trim() !== "";
    if (o === "lighttable" && e.viewerLightTableSlotId) {
      const Ce = ne.getState(), Ie = Ce.buckets[e.viewerLightTableSlotId] || [], Qe = new Map(a.map((ot) => [ot.id, ot])), Vt = new Map(i.map((ot) => [ot.id, ot]));
      return Ie.map((ot) => {
        const or = Number.parseInt(ot, 10);
        return Qe.get(or) || Vt.get(or) || Ce.images[ot] || cw(or);
      });
    }
    return o === "lineage" ? i : a.filter(
      (Ce) => Ce.exists !== !1 && (c["gallery.show_parent_images"] || me || !Ce.has_children)
    );
  }, [
    o,
    e.viewerLightTableSlotId,
    i,
    a,
    c,
    e.searchQuery
  ]), P = l === null ? -1 : D.findIndex((me) => me.id === l), A = (o === "lineage" && i.length > 0 ? i : o === "lighttable" ? D : a).find((me) => me.id === l) || (l === ((ls = e.viewerFallbackImage) == null ? void 0 : ls.id) ? e.viewerFallbackImage : void 0), { isFullscreen: R, toggleFullscreen: U } = rw({
    overlayRef: S,
    settings: c,
    setShowDetails: M
  }), { handleNext: B, handlePrevious: X } = aw({
    dispatch: t,
    isFullscreen: R,
    settings: c,
    currentThumbnails: D,
    currentIndex: P,
    viewerMode: o,
    pagination: e.pagination,
    searchQuery: e.searchQuery,
    isJumping: I,
    setIsJumping: F,
    mountRefs: E
  }), {
    lastDeletedImages: re,
    setLastDeletedImages: le,
    handleDelete: K,
    handleTagEditAction: te,
    handleRestoreAction: G,
    handleUndo: Be,
    executeCommand: Ae
  } = nw({
    state: e,
    dispatch: t,
    image: A,
    isFullscreen: R,
    currentThumbnails: D,
    currentIndex: P,
    viewerMode: o,
    lineageImages: i,
    images: a,
    mountRefs: E,
    handleNext: B,
    handlePrevious: X,
    handleEditTags: v,
    handleRestore: j,
    fetchLineage: y,
    restoreImages: d,
    bulkUpdateImageTags: h
  }), { isLoadingLineage: De } = lw({
    viewerMode: o,
    viewerImageId: l,
    lineageLength: i.length,
    dispatch: t,
    isMountedRef: E.isMountedRef
  });
  sw({
    viewerImageId: l,
    activeModalType: e.activeModal.type,
    viewScope: e.viewScope,
    settings: c,
    dispatch: t,
    isMountedRef: E.isMountedRef,
    toggleFullscreen: U,
    handleNext: B,
    handlePrevious: X,
    handleDelete: () => {
      K();
    },
    handleUndo: Be,
    handleTagEditAction: te,
    handleRestoreAction: G,
    executeCommand: Ae,
    setShowDetails: M,
    setActiveShortcutKey: Q
  }), p.useEffect(() => {
    l !== null && r(l).catch((me) => {
      $.error("Failed to fetch full image details for viewer:", me);
    });
  }, [r, l]), iw({
    viewerImageId: l,
    currentThumbnails: D,
    currentIndex: P,
    isFullscreen: R,
    settings: c,
    hasMore: e.pagination.hasMore,
    viewerMode: o,
    isLoading: e.isLoading,
    loadMoreImages: n,
    fetchFullImageDetails: r
  });
  const Re = p.useMemo(() => {
    if (!V || P === -1) return [];
    const me = c["viewer.thumbnail_window_size"], Ce = Math.floor(me / 2);
    let Ie = Math.max(0, P - Ce);
    const Qe = Math.min(D.length, Ie + me);
    return Qe === D.length && (Ie = Math.max(0, Qe - me)), D.slice(Ie, Qe).map((Vt, ot) => ({
      img: Vt,
      absIndex: Ie + ot
    }));
  }, [D, P, c, V]), jt = p.useMemo(() => A ? k(A) : [], [k, A]);
  return p.useEffect(() => {
    var me, Ce;
    if (l !== null) {
      if (V) {
        const Ie = document.querySelector(".meld-viewer-thumbnail--active");
        Ie && Ie.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((me = document.activeElement) == null ? void 0 : me.tagName) === "CANVAS" && document.activeElement.blur(), (Ce = S.current) == null || Ce.focus();
    }
  }, [V, l]), {
    isFullscreen: R,
    showDetails: O,
    setShowDetails: M,
    showThumbnails: V,
    setShowThumbnailsOverride: W,
    isLoadingLineage: De,
    isJumping: I,
    isMenuOpen: C,
    setIsMenuOpen: T,
    activeShortcutKey: L,
    lastDeletedImages: re,
    setLastDeletedImages: le,
    overlayRef: S,
    handleNext: B,
    handlePrevious: X,
    handleDelete: K,
    handleUpdateUserNotes: x,
    handleEditNotes: () => A && g(A),
    handleTagEdit: te,
    handleRestore: G,
    handleUndo: Be,
    handleRestoreWorkflow: async () => {
      if (!A) return;
      await _(A) && t({ type: "CLOSE_VIEWER" });
    },
    handleAddUnifiedLoader: async () => {
      if (!A) return;
      await b(A) && t({ type: "CLOSE_VIEWER" });
    },
    handleSendToWorkflow: () => {
      if (!A) return;
      f(A) && t({ type: "CLOSE_VIEWER" });
    },
    handleRunWithWorkflow: () => A && m(A),
    handleRunWithMask: (me) => A && u(A, me),
    handleEditSource: () => A && w(A),
    toggleFullscreen: U,
    currentIndex: P,
    currentThumbnails: D,
    image: A,
    windowedThumbnails: Re,
    parentChain: jt
  };
}, pi = ({
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
  onEditTags: h,
  onEditNotes: v,
  onDelete: g,
  onRestore: j,
  showRestore: x,
  deleteLabel: _,
  showQuickShortcuts: b = !0,
  variant: f = "default",
  iconSize: m = 16,
  buttonClassName: u = ""
}) => {
  const [w, k] = p.useState("left");
  p.useEffect(() => {
    e && n.current && (n.current.getBoundingClientRect().left < 200 ? k("right") : k("left"));
  }, [e, n]);
  const y = (O) => {
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
        return h;
      case "edit_notes":
        return v;
      case "restore_image":
        return j;
      case "delete_or_trash":
        return g;
      default:
        return null;
    }
  }, C = [
    r["gallery.quick_shortcut.1"],
    r["gallery.quick_shortcut.2"],
    r["gallery.quick_shortcut.3"]
  ].filter((O) => O && O !== ""), T = [
    "meld-image-card__menu-container",
    f === "thumbnail_overlay_top_right" && "meld-image-card__menu-container--thumbnail-overlay"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsxs("div", { className: T, ref: n, children: [
    /* @__PURE__ */ s.jsx(
      "button",
      {
        type: "button",
        className: `meld-image-card__menu-btn ${u}`,
        onClick: (O) => {
          O.stopPropagation(), t(!e);
        },
        title: "Menu",
        children: /* @__PURE__ */ s.jsx(fg, { size: m })
      }
    ),
    b && C.map((O, M) => {
      const z = Qf.find((I) => I.id === O);
      if (!z || !z.icon) return null;
      const W = z.icon, V = y(O);
      return !V || O === "restore_image" && !x ? null : /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: `meld-image-card__menu-btn ${u}`,
          onClick: (I) => {
            I.stopPropagation(), V();
          },
          title: z.label,
          children: /* @__PURE__ */ s.jsx(W, { size: m })
        },
        `${O}-${M}`
      );
    }),
    e && /* @__PURE__ */ s.jsx(
      "div",
      {
        className: `meld-image-card__menu ${w === "right" ? "meld-image-card__menu--right" : ""}`,
        children: [
          {
            id: "add_unified_loader",
            label: "Add Unified Loader",
            icon: Rf,
            handler: l
          },
          {
            id: "send_to_workflow",
            label: "Send to Workflow",
            icon: Ff,
            handler: o
          },
          {
            id: "send_to_workflow_mask",
            label: "Send to Workflow (Mask)",
            icon: $f,
            handler: () => c("apply")
          },
          {
            id: "queue_workflow",
            label: "Queue Workflow",
            icon: Of,
            handler: i
          },
          {
            id: "queue_workflow_mask",
            label: "Queue Workflow (Mask)",
            icon: zf,
            handler: () => c("run")
          },
          {
            id: "restore_full_workflow",
            label: "Restore Full Workflow",
            icon: Pf,
            handler: a
          },
          {
            id: "edit_tags",
            label: "Edit Tags",
            icon: Uf,
            handler: h
          },
          {
            id: "edit_notes",
            label: "Edit Notes",
            icon: Vf,
            handler: v
          },
          {
            id: "edit_source_image",
            label: "Edit Source Image",
            icon: Wf,
            handler: d
          },
          ...x ? [
            {
              id: "restore_image",
              label: "Restore Image",
              icon: Bf,
              handler: j,
              color: "var(--meld-accent-color)"
            }
          ] : [],
          {
            id: "delete_or_trash",
            label: _,
            icon: Wt,
            handler: g,
            className: "meld-image-card__menu-item--danger",
            color: "var(--meld-danger-color)"
          }
        ].map((O) => /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "button",
            className: `meld-image-card__menu-item ${O.className || ""}`,
            onMouseDown: (M) => M.stopPropagation(),
            onClick: (M) => {
              M.preventDefault(), M.stopPropagation(), O.handler(), t(!1);
            },
            "aria-label": O.label,
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
}, uw = ({
  settings: e,
  activeShortcutKey: t
}) => e["viewer.shortcut.show_cheat_sheet"] ? /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-cheat-sheet", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((n) => {
  const r = String(n), l = e[_f(r)];
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
}) }) : null, fw = ({
  image: e,
  isFullscreen: t,
  settings: n,
  showIcons: r,
  parentChain: l,
  dispatch: a,
  onEditNotes: o
}) => {
  const [i, c] = p.useState("idle"), [d, h] = p.useState(null), v = p.useRef(null), g = p.useCallback(async (k, y) => {
    try {
      await navigator.clipboard.writeText(k), v.current && (clearTimeout(v.current), v.current = null), h(y), v.current = setTimeout(() => {
        h(null), v.current = null;
      }, 2e3);
    } catch {
    }
  }, []);
  p.useEffect(() => (c("idle"), h(null), () => {
    v.current && (clearTimeout(v.current), v.current = null);
  }), []);
  const j = t ? n["fullscreen.details.show_user_notes"] : n["viewer.details.show_user_notes"], x = j === "always" || j === "if_present" && e.user_notes, [_, b] = p.useState([]), [f, m] = p.useState(!1), u = t ? n["fullscreen.details.show_core_prompt"] : n["viewer.details.show_core_prompt"], w = t ? n["fullscreen.details.core_prompt_count"] : n["viewer.details.core_prompt_count"];
  return p.useEffect(() => {
    if (!u) {
      m(!1), b([]);
      return;
    }
    const k = Array.isArray(e.positive_prompt_keywords) && e.positive_prompt_keywords.length > 0 ? e.positive_prompt_keywords : [], y = Array.from(new Set(k));
    if (y.length === 0) {
      m(!1), b([]);
      return;
    }
    const C = new AbortController();
    return (async () => {
      m(!0);
      try {
        const { fetchAnalyticsCounts: O } = await Promise.resolve().then(() => ev), M = await O("positive_prompts", y, {
          signal: C.signal
        });
        if (C.signal.aborted) {
          m(!1), b([]);
          return;
        }
        if (!M.ok) {
          m(!1), b([]);
          return;
        }
        const z = M.data, W = y.map((V) => ({
          name: V,
          count: z[V] ?? 0
        })).sort((V, I) => V.count - I.count);
        b(W.slice(0, w));
      } catch (O) {
        if (O instanceof Error && O.name === "AbortError") {
          m(!1), b([]);
          return;
        }
        $.error("Failed to fetch core prompt counts", O), m(!1), b([]);
      } finally {
        C.signal.aborted || m(!1);
      }
    })(), () => {
      C.abort(), m(!1), b([]);
    };
  }, [e.positive_prompt_keywords, u, w]), /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-viewer-details-overlay ${t ? "meld-viewer-details-overlay--fullscreen" : ""} ${r ? "" : "meld-viewer-details-overlay--no-icons"}`,
      children: [
        (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) !== "none" && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) === "filepath" ? "Filepath" : "Filename" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) === "filepath" ? "Copy filepath" : "Copy filename",
                onClick: (k) => {
                  k.stopPropagation();
                  const y = (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename;
                  g(y, "filepath");
                },
                children: d === "filepath" ? /* @__PURE__ */ s.jsx(Je, { size: 16 }) : /* @__PURE__ */ s.jsx(yt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename })
        ] }),
        (t ? n["fullscreen.details.show_dimensions"] : n["viewer.details.show_dimensions"]) && e.width && e.height && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Dimensions" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy dimensions",
                onClick: (k) => {
                  k.stopPropagation(), g(`${e.width} x ${e.height} px`, "dimensions");
                },
                children: d === "dimensions" ? /* @__PURE__ */ s.jsx(Je, { size: 16 }) : /* @__PURE__ */ s.jsx(yt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-value", children: [
            e.width,
            " x ",
            e.height,
            " px"
          ] })
        ] }),
        (t ? n["fullscreen.details.show_created_at"] : n["viewer.details.show_created_at"]) && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Created At" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy created timestamp",
                onClick: (k) => {
                  k.stopPropagation(), g(new Date(e.created_at * 1e3).toLocaleString(), "created_at");
                },
                children: d === "created_at" ? /* @__PURE__ */ s.jsx(Je, { size: 16 }) : /* @__PURE__ */ s.jsx(yt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: new Date(e.created_at * 1e3).toLocaleString() })
        ] }),
        e.deleted_at && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Deleted At" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy deleted timestamp",
                onClick: (k) => {
                  k.stopPropagation();
                  const y = e.deleted_at;
                  y && g(new Date(y * 1e3).toLocaleString(), "deleted_at");
                },
                children: d === "deleted_at" ? /* @__PURE__ */ s.jsx(Je, { size: 16 }) : /* @__PURE__ */ s.jsx(yt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: new Date(e.deleted_at * 1e3).toLocaleString() })
        ] }),
        (t ? n["fullscreen.details.show_model_name"] : n["viewer.details.show_model_name"]) && e.model_name && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Model" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy model",
                onClick: (k) => {
                  k.stopPropagation();
                  const y = e.model_name;
                  y && g(y, "model");
                },
                children: d === "model" ? /* @__PURE__ */ s.jsx(Je, { size: 16 }) : /* @__PURE__ */ s.jsx(yt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: e.model_name })
        ] }),
        (t ? n["fullscreen.details.show_source"] : n["viewer.details.show_source"]) && l.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Source" }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-tags", children: /* @__PURE__ */ s.jsx("div", { className: "meld-lineage-thumbs", children: l.map(
            (k, y) => k.imgSrc && /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-lineage-badge__parent-thumb meld-lineage-badge__parent-thumb-btn",
                style: {
                  cursor: "pointer",
                  padding: 0,
                  border: "none",
                  background: "none"
                },
                onClick: (C) => {
                  C.stopPropagation(), a({
                    type: "OPEN_VIEWER",
                    payload: {
                      id: k.id || e.id,
                      mode: "lineage"
                    }
                  });
                },
                title: y === 0 ? "Source" : y === 1 ? "Grand-Source" : `Ancestor (S${y + 1})`,
                "aria-label": y === 0 ? "View source image" : y === 1 ? "View grand-source image" : `View ancestor image (S${y + 1})`,
                children: /* @__PURE__ */ s.jsx(
                  "img",
                  {
                    src: k.imgSrc,
                    loading: "lazy",
                    alt: "",
                    style: {
                      display: "block",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }
                  }
                )
              },
              k.id || y
            )
          ) }) })
        ] }),
        (t ? n["fullscreen.details.show_positive_prompt"] : n["viewer.details.show_positive_prompt"]) && (e.positive_prompt || e.positive) && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Positive" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy positive prompt",
                onClick: (k) => {
                  k.stopPropagation(), g(e.positive_prompt || e.positive || "", "positive");
                },
                children: d === "positive" ? /* @__PURE__ */ s.jsx(Je, { size: 16 }) : /* @__PURE__ */ s.jsx(yt, { size: 16 })
              }
            )
          ] }),
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
        u && (f || _.length > 0) && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-label", children: [
              "Core Prompt",
              f && /* @__PURE__ */ s.jsx("span", { className: "meld-notes__status", role: "status", "aria-live": "polite", children: "Loading..." })
            ] }),
            !f && _.length > 0 && /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy core prompt",
                onClick: (k) => {
                  k.stopPropagation(), g(_.map((y) => y.name).join(", "), "core_prompt");
                },
                children: d === "core_prompt" ? /* @__PURE__ */ s.jsx(Je, { size: 16 }) : /* @__PURE__ */ s.jsx(yt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-tags", children: _.map((k, y) => /* @__PURE__ */ s.jsxs(
            "span",
            {
              className: "meld-viewer-details-tag",
              title: `Usage count: ${k.count}`,
              children: [
                k.name,
                " ",
                /* @__PURE__ */ s.jsxs("span", { className: "meld-viewer-details-tag-count", children: [
                  "(",
                  k.count,
                  ")"
                ] })
              ]
            },
            `${k.name}-${y}`
          )) })
        ] }),
        (t ? n["fullscreen.details.show_negative_prompt"] : n["viewer.details.show_negative_prompt"]) && (e.negative_prompt || e.negative) && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Negative" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy negative prompt",
                onClick: (k) => {
                  k.stopPropagation(), g(e.negative_prompt || e.negative || "", "negative");
                },
                children: d === "negative" ? /* @__PURE__ */ s.jsx(Je, { size: 16 }) : /* @__PURE__ */ s.jsx(yt, { size: 16 })
              }
            )
          ] }),
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
          /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Tags" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy tags",
                onClick: (k) => {
                  var y;
                  k.stopPropagation(), g(((y = e.tags) == null ? void 0 : y.join(", ")) ?? "", "tags");
                },
                children: d === "tags" ? /* @__PURE__ */ s.jsx(Je, { size: 16 }) : /* @__PURE__ */ s.jsx(yt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-tags", children: e.tags.map((k) => /* @__PURE__ */ s.jsx("span", { className: "meld-viewer-details-tag", children: k }, k)) })
        ] }),
        x && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item meld-viewer-details-item--notes", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-label", children: [
              "Notes",
              i === "saving" && /* @__PURE__ */ s.jsx("span", { className: "meld-notes__status", children: "Saving..." })
            ] }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy notes",
                onClick: (k) => {
                  k.stopPropagation(), g(e.user_notes || "", "notes");
                },
                children: d === "notes" ? /* @__PURE__ */ s.jsx(Je, { size: 16 }) : /* @__PURE__ */ s.jsx(yt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-viewer-notes-preview",
              onClick: (k) => {
                k.stopPropagation(), o == null || o();
              },
              "aria-label": e.user_notes ? "Edit notes" : "Add notes",
              style: {
                cursor: "pointer",
                minHeight: "40px",
                padding: "8px",
                backgroundColor: "var(--meld-input-bg)",
                borderRadius: "4px",
                fontSize: "0.9rem",
                whiteSpace: "pre-wrap",
                width: "100%",
                textAlign: "left",
                border: "none",
                color: "inherit",
                fontFamily: "inherit"
              },
              children: e.user_notes || /* @__PURE__ */ s.jsx("span", { style: { color: "var(--meld-text-secondary)" }, children: "Add notes..." })
            }
          )
        ] })
      ]
    }
  );
}, dm = p.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r,
    viewerMode: l,
    lightTableSlotId: a
  }) => {
    const o = e.id === t, i = typeof n.parent_id == "number" && n.parent_id === e.id, c = typeof e.parent_id == "number" && e.parent_id === n.id, d = mt(e, 64);
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
              children: i ? /* @__PURE__ */ s.jsx(uf, { size: 12 }) : /* @__PURE__ */ s.jsx(df, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
dm.displayName = "ThumbnailItem";
const mw = ({
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
    dm,
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
  o === "gallery" && a && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ s.jsx(tr, { className: "animate-spin", size: 20 }) })
] }) });
function pw() {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = ie(), {
    isFullscreen: l,
    showDetails: a,
    setShowDetails: o,
    showThumbnails: i,
    setShowThumbnailsOverride: c,
    isLoadingLineage: d,
    isJumping: h,
    isMenuOpen: v,
    setIsMenuOpen: g,
    activeShortcutKey: j,
    setLastDeletedImages: x,
    overlayRef: _,
    handleNext: b,
    handlePrevious: f,
    handleTagEdit: m,
    handleEditNotes: u,
    handleRestore: w,
    handleRestoreWorkflow: k,
    handleAddUnifiedLoader: y,
    handleSendToWorkflow: C,
    handleRunWithWorkflow: T,
    handleRunWithMask: O,
    handleEditSource: M,
    handleDelete: z,
    toggleFullscreen: W,
    image: V,
    windowedThumbnails: I,
    parentChain: F
  } = dw({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  }), L = p.useRef(null), Q = p.useRef(null), { executeWorkflow: S } = di(), E = p.useMemo(() => e.viewScope === "trash" ? "Delete Permanently" : "Move to Trash", [e.viewScope]);
  if (!V) return null;
  const { viewerImageId: D, viewerMode: P } = e, N = l ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return ue.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: _,
        className: "meld-viewer-overlay",
        onClick: () => {
          e.activeModal.type === "none" && t({ type: "CLOSE_VIEWER" });
        },
        onKeyDown: (A) => {
          A.target === A.currentTarget && e.activeModal.type === "none" && (A.key === "Enter" || A.key === " " || A.key === "Spacebar") && (A.key === " " && A.preventDefault(), t({ type: "CLOSE_VIEWER" }));
        },
        role: "button",
        tabIndex: 0,
        "aria-label": "Close image viewer",
        children: [
          /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: `meld-viewer-content ${l ? "meld-viewer-content--fullscreen" : ""} ${i ? "meld-viewer-content--with-thumbnails" : ""}`,
              onClick: (A) => A.stopPropagation(),
              children: [
                N && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: w,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ s.jsx(tr, { size: 20 })
                    }
                  ),
                  !l && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => c(!i),
                      type: "button",
                      title: i ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ s.jsx(si, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => o(!a),
                      type: "button",
                      title: a ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ s.jsx(sg, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: W,
                      type: "button",
                      title: l ? "Exit Fullscreen (F/Enter)" : "Fullscreen (F/Enter)",
                      children: l ? /* @__PURE__ */ s.jsx(ug, { size: 20 }) : /* @__PURE__ */ s.jsx(cg, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    pi,
                    {
                      isMenuOpen: v,
                      setIsMenuOpen: g,
                      menuRef: Q,
                      settings: e.settings,
                      onAddUnifiedLoader: y,
                      onRestoreWorkflow: k,
                      onSendToWorkflow: C,
                      onRunWithWorkflow: T,
                      onRunWithMask: O,
                      onEditSource: M,
                      onEditTags: m,
                      onEditNotes: u,
                      onDelete: z,
                      deleteLabel: E,
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
                      children: /* @__PURE__ */ s.jsx(de, { size: 20 })
                    }
                  )
                ] }),
                N && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: f,
                    type: "button",
                    disabled: h,
                    title: "Previous (Left/Up)",
                    children: /* @__PURE__ */ s.jsx(mf, { size: 32 })
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-image-container", children: [
                  h && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ s.jsx(tr, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ s.jsx(
                    "img",
                    {
                      ref: L,
                      src: ii(V),
                      alt: V.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[l ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${h ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                N && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: b,
                    type: "button",
                    title: "Next (Right/Down)",
                    children: /* @__PURE__ */ s.jsx(ni, { size: 32 })
                  }
                ),
                a && /* @__PURE__ */ s.jsx(
                  fw,
                  {
                    image: V,
                    isFullscreen: l,
                    settings: e.settings,
                    showIcons: N,
                    parentChain: F,
                    dispatch: t,
                    onEditNotes: u
                  }
                ),
                !l && i && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ s.jsx(
                  mw,
                  {
                    windowedThumbnails: I,
                    viewerImageId: D,
                    currentImage: V,
                    dispatch: t,
                    isLoadingLineage: d,
                    isLoading: e.isLoading,
                    viewerMode: P,
                    lightTableSlotId: e.viewerLightTableSlotId
                  }
                ),
                /* @__PURE__ */ s.jsx(uw, { settings: e.settings, activeShortcutKey: j })
              ]
            }
          ),
          e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
            Yf,
            {
              images: e.activeModal.images,
              isMaskMode: !!e.activeModal.maskFilename || !!e.activeModal.isMaskSequence,
              onExecute: async (A, R) => {
                if (e.activeModal.type === "workflow_selection") {
                  if (e.activeModal.isMaskSequence)
                    return t({
                      type: "OPEN_MODAL",
                      payload: {
                        type: "mask_sequence_step",
                        images: e.activeModal.images,
                        currentIndex: 0,
                        workflowName: A,
                        targetLoaderNodeId: R
                      }
                    }), !1;
                  const U = e.activeModal.maskFilename;
                  for (const B of e.activeModal.images)
                    await S(A, B, U, R);
                  t({ type: "CLOSE_MODAL" }), t({ type: "CLOSE_VIEWER" });
                }
              }
            }
          ),
          e.activeModal.type === "node_selection" && /* @__PURE__ */ s.jsx(
            qf,
            {
              image: e.activeModal.image,
              nodes: e.activeModal.nodes,
              onSelect: (A) => {
                e.activeModal.type === "node_selection" && Yr(e.activeModal.image, A);
              }
            }
          ),
          e.activeModal.type === "error" && /* @__PURE__ */ s.jsx(Zf, { message: e.activeModal.message }),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ s.jsx(
            Xf,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: x
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ s.jsx(Jf, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ s.jsx(jf, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ s.jsx(Hf, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ s.jsx(
            Kf,
            {
              imageIds: e.activeModal.imageIds,
              initialTags: e.activeModal.tags,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_editor" && /* @__PURE__ */ s.jsx(
            fi,
            {
              imageId: e.activeModal.imageId,
              mode: e.activeModal.mode,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_sequence_step" && /* @__PURE__ */ s.jsx(
            Lf,
            {
              images: e.activeModal.images,
              currentIndex: e.activeModal.currentIndex,
              workflowName: e.activeModal.workflowName,
              targetLoaderNodeId: e.activeModal.targetLoaderNodeId,
              onSuccess: () => {
                if (e.activeModal.type === "mask_sequence_step") {
                  const A = e.activeModal.currentIndex + 1;
                  A < e.activeModal.images.length ? t({
                    type: "OPEN_MODAL",
                    payload: {
                      ...e.activeModal,
                      currentIndex: A
                    }
                  }) : (t({ type: "CLOSE_MODAL" }), t({ type: "CLOSE_VIEWER" }));
                }
              },
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "note_edit" && /* @__PURE__ */ s.jsx(
            Gf,
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
const hw = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = ie(), [a, o] = p.useState("gallery"), [i, c] = p.useState(""), d = e.searchQuery.trim() !== "", h = p.useRef(null), v = p.useRef(null), g = ne((b) => b.buckets), j = p.useMemo(() => {
    const b = /* @__PURE__ */ new Set();
    for (const f of Object.values(g))
      for (const m of f)
        b.add(Number(m));
    return b;
  }, [g]), x = p.useMemo(() => e.images.filter((b) => j.has(b.id) ? !1 : e.viewScope === "trash" ? b.exists !== !1 || e.settings["gallery.trash.show_missing"] : b.exists !== !1 && (e.settings["gallery.show_parent_images"] || d || !b.has_children)), [e.images, e.settings, e.viewScope, j, d]), _ = x;
  return p.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && x.length === 0 && ($.log("GalleryPanel: Auto-loading more because all loaded images are hidden"), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    x.length,
    r
  ]), Ll({
    onKeyDown: (b) => {
      if (b.key !== "Escape")
        return;
      const f = !!document.querySelector(
        '[role="dialog"][aria-modal="true"], [role="alertdialog"][aria-modal="true"], .meld-modal-overlay'
      );
      e.activeModal.type !== "none" || f || e.selectedIds.size !== 0 && (t({ type: "CLEAR_SELECTION" }), Xr(b));
    }
  }), p.useEffect(() => {
    const b = new IntersectionObserver(
      (m) => {
        const u = m[0];
        if (u && u.isIntersecting) {
          if (e.isLoading) {
            $.log("GalleryPanel: Intersection observed but already loading");
            return;
          }
          e.pagination.hasMore ? ($.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : $.log("GalleryPanel: Intersection observed but no more to load", {
            localCount: x.length,
            serverHasMore: e.pagination.hasMore
          });
        }
      },
      { threshold: 0, rootMargin: "800px" }
    ), f = h.current;
    return f && b.observe(f), () => {
      f && b.unobserve(f);
    };
  }, [
    r,
    e.isLoading,
    e.pagination.hasMore,
    x.length,
    e.images.length
  ]), p.useEffect(() => {
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
    displayedImages: x,
    visibleImages: _,
    isSearchActive: d,
    loadMoreRef: h
  };
}, gw = ({ slots: e, onSelect: t, onCancel: n }) => (ke({ onEscape: n }), /* @__PURE__ */ s.jsx("div", { className: "meld-tab-select-modal__overlay", onClick: n, role: "presentation", children: /* @__PURE__ */ s.jsxs(
  "div",
  {
    className: "meld-tab-select-modal__dialog",
    onClick: (r) => r.stopPropagation(),
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Select Light Table tab",
    children: [
      /* @__PURE__ */ s.jsx("p", { className: "meld-tab-select-modal__title", children: "Select a tab" }),
      /* @__PURE__ */ s.jsx("div", { className: "meld-tab-select-modal__list", children: e.map((r) => /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-tab-select-modal__tab-btn",
          style: { "--tab-color": r.color },
          onClick: () => t(r.id, r.label),
          children: r.label
        },
        r.id
      )) })
    ]
  }
) })), yw = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = ie(), { handleRunWithWorkflow: l, handleRunWithMask: a } = Tl(e, t), o = e.selectedIds.size, i = ne((I) => I.slots), c = ne((I) => I.addToBucket), d = ne((I) => I.showToast), [h, v] = p.useState(!1), [g, j] = p.useState(null), [x, _] = p.useState(!1), b = p.useRef(null), f = p.useRef(null), m = lm("bulkActionBar");
  if (ke({
    onEscape: () => v(!1),
    enabled: h
  }), Zr({
    enabled: h,
    insideRefs: [b, f],
    onOutside: () => v(!1)
  }), o === 0) return null;
  const u = e.viewScope === "trash", w = () => e.images.filter((I) => e.selectedIds.has(I.id)), k = () => {
    if (h) {
      v(!1);
      return;
    }
    b.current && (j(b.current.getBoundingClientRect()), v(!0));
  }, y = (I) => {
    I(), v(!1);
  }, C = () => {
    const I = w(), F = /* @__PURE__ */ new Set();
    for (const L of I)
      if (L.tags)
        for (const Q of L.tags)
          F.add(Q);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(F)
      }
    });
  }, T = () => {
    const I = w();
    l(I);
  }, O = () => {
    const I = w();
    I.length > 0 && a(I, "run");
  }, M = () => {
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "download_options",
        imageIds: Array.from(e.selectedIds)
      }
    });
  }, z = () => {
    const I = i[0];
    if (I)
      if (i.length === 1) {
        for (const F of e.selectedIds)
          c(I.id, String(F));
        d(`${o} image(s) sent to "${I.label}"`), v(!1);
      } else
        v(!1), _(!0);
  }, W = (I, F) => {
    for (const L of e.selectedIds)
      c(I, String(L));
    d(`${o} image(s) sent to "${F}"`), _(!1);
  }, V = /* @__PURE__ */ s.jsxs("div", { className: `meld-bulk-bar ${u ? "meld-bulk-bar--trash" : ""}`, children: [
    /* @__PURE__ */ s.jsxs("span", { className: "meld-bulk-bar__info", children: [
      o,
      " items selected"
    ] }),
    /* @__PURE__ */ s.jsxs(
      "button",
      {
        ref: b,
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--action",
        onClick: k,
        children: [
          /* @__PURE__ */ s.jsx(dg, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
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
          /* @__PURE__ */ s.jsx(de, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
          "Cancel"
        ]
      }
    ),
    h && g && /* @__PURE__ */ s.jsx(
      "div",
      {
        ref: f,
        className: "meld-bulk-bar-menu",
        style: {
          bottom: window.innerHeight - g.top + 5,
          left: g.left
        },
        children: u ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--restore",
              onClick: () => y(r),
              children: [
                /* @__PURE__ */ s.jsx(tr, { size: 14 }),
                " Restore"
              ]
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--danger",
              onClick: () => y(n),
              children: [
                /* @__PURE__ */ s.jsx(Wt, { size: 14 }),
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
              onClick: () => y(C),
              children: [
                /* @__PURE__ */ s.jsx(ar, { size: 14 }),
                " Edit Tags"
              ]
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item",
              onClick: () => y(T),
              children: [
                /* @__PURE__ */ s.jsx(ri, { size: 14 }),
                " Queue Workflow"
              ]
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item",
              onClick: () => y(O),
              children: [
                /* @__PURE__ */ s.jsx(pg, { size: 14 }),
                " Queue Workflow (Mask)"
              ]
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item",
              onClick: () => y(M),
              children: [
                /* @__PURE__ */ s.jsx(Gr, { size: 14 }),
                " Download"
              ]
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item",
              onClick: z,
              disabled: i.length === 0,
              children: [
                /* @__PURE__ */ s.jsx(si, { size: 14 }),
                " Send to Light Table"
              ]
            }
          ),
          /* @__PURE__ */ s.jsx("div", { className: "meld-bulk-bar-menu__divider" }),
          /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--danger",
              onClick: () => y(n),
              children: [
                /* @__PURE__ */ s.jsx(Wt, { size: 14 }),
                " Move to Trash"
              ]
            }
          )
        ] })
      }
    ),
    x && /* @__PURE__ */ s.jsx(
      gw,
      {
        slots: i,
        onSelect: W,
        onCancel: () => _(!1)
      }
    )
  ] });
  return ue.createPortal(V, m);
};
function Nn(e, t, n) {
  let r = n.initialDeps ?? [], l, a = !0;
  function o() {
    var i, c, d;
    let h;
    n.key && ((i = n.debug) != null && i.call(n)) && (h = Date.now());
    const v = e();
    if (!(v.length !== r.length || v.some((x, _) => r[_] !== x)))
      return l;
    r = v;
    let j;
    if (n.key && ((c = n.debug) != null && c.call(n)) && (j = Date.now()), l = t(...v), n.key && ((d = n.debug) != null && d.call(n))) {
      const x = Math.round((Date.now() - h) * 100) / 100, _ = Math.round((Date.now() - j) * 100) / 100, b = _ / 16, f = (m, u) => {
        for (m = String(m); m.length < u; )
          m = " " + m;
        return m;
      };
      console.info(
        `%c⏱ ${f(_, 5)} /${f(x, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * b, 120)
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
function Vc(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const vw = (e, t) => Math.abs(e - t) < 1.01, ww = (e, t, n) => {
  let r;
  return function(...l) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, l), n);
  };
}, Bc = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, xw = (e) => e, _w = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let l = t; l <= n; l++)
    r.push(l);
  return r;
}, kw = (e, t) => {
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
  if (l(Bc(n)), !r.ResizeObserver)
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
      l(Bc(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
  });
  return a.observe(n, { box: "border-box" }), () => {
    a.unobserve(n);
  };
}, Qc = {
  passive: !0
}, Hc = typeof window > "u" ? !0 : "onscrollend" in window, bw = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let l = 0;
  const a = e.options.useScrollendEvent && Hc ? () => {
  } : ww(
    r,
    () => {
      t(l, !1);
    },
    e.options.isScrollingResetDelay
  ), o = (h) => () => {
    const { horizontal: v, isRtl: g } = e.options;
    l = v ? n.scrollLeft * (g && -1 || 1) : n.scrollTop, a(), t(l, h);
  }, i = o(!0), c = o(!1);
  n.addEventListener("scroll", i, Qc);
  const d = e.options.useScrollendEvent && Hc;
  return d && n.addEventListener("scrollend", c, Qc), () => {
    n.removeEventListener("scroll", i), d && n.removeEventListener("scrollend", c);
  };
}, Sw = (e, t, n) => {
  if (t != null && t.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, jw = (e, {
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
class Cw {
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
        getItemKey: xw,
        rangeExtractor: _w,
        onChange: () => {
        },
        measureElement: Sw,
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
    }, this.maybeNotify = Nn(
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
    }, this.getMeasurementOptions = Nn(
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
    ), this.getMeasurements = Nn(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: n, paddingStart: r, scrollMargin: l, getItemKey: a, enabled: o, lanes: i }, c) => {
        if (!o)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > n)
          for (const g of this.laneAssignments.keys())
            g >= n && this.laneAssignments.delete(g);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((g) => {
          this.itemSizeCache.set(g.key, g.size);
        }));
        const d = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === n && (this.lanesSettling = !1);
        const h = this.measurementsCache.slice(0, d), v = new Array(i).fill(
          void 0
        );
        for (let g = 0; g < d; g++) {
          const j = h[g];
          j && (v[j.lane] = g);
        }
        for (let g = d; g < n; g++) {
          const j = a(g), x = this.laneAssignments.get(g);
          let _, b;
          if (x !== void 0 && this.options.lanes > 1) {
            _ = x;
            const w = v[_], k = w !== void 0 ? h[w] : void 0;
            b = k ? k.end + this.options.gap : r + l;
          } else {
            const w = this.options.lanes === 1 ? h[g - 1] : this.getFurthestMeasurement(h, g);
            b = w ? w.end + this.options.gap : r + l, _ = w ? w.lane : g % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(g, _);
          }
          const f = c.get(j), m = typeof f == "number" ? f : this.options.estimateSize(g), u = b + m;
          h[g] = {
            index: g,
            start: b,
            size: m,
            end: u,
            key: j,
            lane: _
          }, v[_] = g;
        }
        return this.measurementsCache = h, h;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = Nn(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, r, l, a) => this.range = n.length > 0 && r > 0 ? Ew({
        measurements: n,
        outerSize: r,
        scrollOffset: l,
        lanes: a
      }) : null,
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Nn(
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
    }, this.getVirtualItems = Nn(
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
        return Vc(
          r[um(
            0,
            r.length - 1,
            (l) => Vc(r[l]).start,
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
        const h = this.getOffsetForIndex(n, d);
        if (!h) {
          console.warn("Failed to get offset for index:", n);
          return;
        }
        const [v, g] = h;
        this._scrollToOffset(v, { adjustments: void 0, behavior: l }), this.targetWindow.requestAnimationFrame(() => {
          if (!this.targetWindow) return;
          const j = () => {
            if (this.currentScrollToIndex !== n) return;
            const x = this.getScrollOffset(), _ = this.getOffsetForIndex(n, g);
            if (!_) {
              console.warn("Failed to get offset for index:", n);
              return;
            }
            vw(_[0], x) || c(g);
          };
          this.isDynamicMode() ? this.targetWindow.requestAnimationFrame(j) : j();
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
const um = (e, t, n, r) => {
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
function Ew({
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
  let o = um(
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
    for (; i < l && c.some((h) => h < n + t); ) {
      const h = e[i];
      c[h.lane] = h.end, i++;
    }
    const d = Array(r).fill(n + t);
    for (; o >= 0 && d.some((h) => h >= n); ) {
      const h = e[o];
      d[h.lane] = h.start, o--;
    }
    o = Math.max(0, o - o % r), i = Math.min(l, i + (r - 1 - i % r));
  }
  return { startIndex: o, endIndex: i };
}
const Kc = typeof document < "u" ? p.useLayoutEffect : p.useEffect;
function Nw({
  useFlushSync: e = !0,
  ...t
}) {
  const n = p.useReducer(() => ({}), {})[1], r = {
    ...t,
    onChange: (a, o) => {
      var i;
      e && o ? ue.flushSync(n) : n(), (i = t.onChange) == null || i.call(t, a, o);
    }
  }, [l] = p.useState(
    () => new Cw(r)
  );
  return l.setOptions(r), Kc(() => l._didMount(), []), Kc(() => l._willUpdate()), l;
}
function Iw(e) {
  return Nw({
    observeElementRect: kw,
    observeElementOffset: bw,
    scrollToFn: jw,
    ...e
  });
}
const fm = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = ie(), l = t.selectedIds.has(e.id), a = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: o,
    handleAddUnifiedLoader: i,
    handleEditSource: c,
    handleEditTags: d,
    handleSendToWorkflow: h,
    handleRunWithWorkflow: v,
    handleRunWithMask: g,
    handleRestore: j,
    handleDelete: x,
    handleEditNotes: _,
    handleUpdateUserNotes: b
  } = Tl(t, n), { getParentChain: f } = cm(t.images, t.settings), [m, u] = p.useState(null), [w, k] = p.useState(!1), [y, C] = p.useState(null), [T, O] = p.useState(!1), M = p.useRef(null);
  Zr({
    enabled: w,
    insideRefs: [M],
    onOutside: () => k(!1)
  });
  const z = async (G, Be, Ae = !1) => {
    try {
      await navigator.clipboard.writeText(G), Ae ? (O(!0), setTimeout(() => O(!1), 2e3)) : (C(Be), setTimeout(() => C(null), 2e3));
    } catch (De) {
      $.error("Failed to copy text: ", De);
    }
  }, W = p.useCallback(
    (G) => {
      if (G.key === "Escape") {
        if (m) {
          Xr(G), u(null);
          return;
        }
        w && (Xr(G), k(!1));
      }
    },
    [m, w]
  );
  Ll({
    enabled: w || m !== null,
    onKeyDown: W
  });
  const V = f(e), F = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, L = t.settings["sidebar.thumbnail_size"] || 100, Q = mt(e, Math.min(400, Math.round(L * 1.5)));
  return {
    state: t,
    dispatch: n,
    isSelected: l,
    viewMode: a,
    popupContent: m,
    setPopupContent: u,
    isMenuOpen: w,
    setIsMenuOpen: k,
    copiedLabel: y,
    popupCopied: T,
    menuRef: M,
    parentChain: V,
    displayFilename: F,
    imgSrc: Q,
    handleCopy: z,
    handleClick: (G) => {
      !G || typeof G.preventDefault != "function" || (G.shiftKey ? (G.preventDefault(), G.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : G.ctrlKey || G.metaKey || t.selectedIds.size > 0 ? (G.preventDefault(), G.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id }));
    },
    handleSelectToggle: (G) => {
      !G || typeof G.preventDefault != "function" || (G.preventDefault(), G.stopPropagation(), G.shiftKey ? n({ type: "SELECT_RANGE", payload: e.id }) : n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleContainerClick: (G) => {
      !G || typeof G.preventDefault != "function" || (G.shiftKey ? (G.preventDefault(), G.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : G.ctrlKey || G.metaKey || t.selectedIds.size > 0 ? (G.preventDefault(), G.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : (G.preventDefault(), G.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })));
    },
    handleMouseDown: (G) => {
      !G || typeof G.preventDefault != "function" || !G.target || G.target instanceof Element && G.target.closest("textarea, input, button, .meld-image-card__meta-content") || !G.shiftKey && !G.ctrlKey && !G.metaKey && l || (G.shiftKey || G.ctrlKey || G.metaKey || t.selectedIds.size > 0) && G.preventDefault();
    },
    handleKeyDown: (G) => {
      var Ae, De, Re;
      !G || typeof G.preventDefault != "function" || ((Ae = document.activeElement) == null ? void 0 : Ae.tagName) === "INPUT" || ((De = document.activeElement) == null ? void 0 : De.tagName) === "TEXTAREA" || (Re = document.activeElement) != null && Re.isContentEditable || (G.key === "Enter" || G.key === " ") && (G.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
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
      _(e);
    },
    handleSendToWorkflow: () => {
      h(e);
    },
    handleRestore: () => {
      j(e);
    },
    handleDelete: () => {
      x(e);
    },
    handleRunWithWorkflow: () => {
      v(e);
    },
    handleRunWithMask: (G = "run") => g(e, G),
    handleUpdateUserNotes: (G) => b(e.id, G),
    fetchFullImageDetails: r
  };
}, Mw = ({
  title: e,
  text: t,
  onClose: n,
  onCopy: r,
  isCopied: l
}) => (ke({ onEscape: n }), ue.createPortal(
  /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "meld-prompt-popup__overlay",
      onClick: (a) => {
        a.stopPropagation(), n();
      },
      children: /* @__PURE__ */ s.jsxs("div", { className: "meld-prompt-popup__content", onClick: (a) => a.stopPropagation(), children: [
        /* @__PURE__ */ s.jsxs("div", { className: "meld-prompt-popup__header", children: [
          /* @__PURE__ */ s.jsx("span", { children: e }),
          /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
            l ? /* @__PURE__ */ s.jsx(Je, { size: 18, style: { color: "var(--meld-success-color)" }, "aria-hidden": !0 }) : /* @__PURE__ */ s.jsx(
              "span",
              {
                role: "button",
                tabIndex: 0,
                className: "meld-prompt-popup__copy",
                "aria-label": "Copy prompt",
                onClick: () => r(t),
                onKeyDown: (a) => {
                  (a.key === "Enter" || a.key === " ") && (a.preventDefault(), r(t));
                },
                children: /* @__PURE__ */ s.jsx(yt, { size: 18 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "span",
              {
                role: "button",
                tabIndex: 0,
                className: "meld-prompt-popup__close",
                "aria-label": "Close",
                onClick: n,
                onKeyDown: (a) => {
                  (a.key === "Enter" || a.key === " ") && (a.preventDefault(), n());
                },
                children: /* @__PURE__ */ s.jsx(de, { size: 18 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "meld-prompt-popup__text", children: t })
      ] })
    }
  ),
  document.body
)), mm = tt.memo(({ image: e }) => {
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
    menuRef: h,
    parentChain: v,
    displayFilename: g,
    imgSrc: j,
    handleCopy: x,
    handleClick: _,
    handleSelectToggle: b,
    handleContainerClick: f,
    handleMouseDown: m,
    handleKeyDown: u,
    handleRestoreWorkflow: w,
    handleAddUnifiedLoader: k,
    handleEditSource: y,
    handleEditTags: C,
    handleEditNotes: T,
    handleSendToWorkflow: O,
    handleRestore: M,
    handleDelete: z,
    handleRunWithWorkflow: W,
    handleRunWithMask: V,
    fetchFullImageDetails: I
  } = fm(e), [F, L] = p.useState("idle");
  p.useEffect(() => {
    e.user_notes && F === "saving" && L("idle");
  }, [e.user_notes, F]);
  const Q = (S) => {
    S.stopPropagation();
    let E = String(e.id);
    r && t.selectedIds.size > 0 && (E = Array.from(t.selectedIds).join(",")), S.dataTransfer.setData("text/plain", E), ne.getState().setIsOpen(!0);
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-image-card ${r ? "meld-image-card--selected" : ""} ${o ? "meld-image-card--menu-open" : ""}`,
      onClick: f,
      onMouseDown: m,
      onKeyDown: u,
      role: "button",
      tabIndex: 0,
      draggable: !0,
      onDragStart: Q,
      children: [
        /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__thumbnail-wrapper", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: `meld-image-card__select-checkbox ${r ? "meld-image-card__select-checkbox--checked" : ""}`,
              onClick: b,
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
              src: j,
              className: "meld-image-card__thumbnail",
              alt: e.filename,
              loading: "lazy",
              draggable: !1,
              width: e.width || void 0,
              height: e.height || void 0,
              style: {
                aspectRatio: e.width && e.height ? `${e.width} / ${e.height}` : void 0
              },
              onMouseDown: m,
              onClick: (S) => {
                S.stopPropagation(), _(S);
              }
            }
          )
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__details", children: [
          (t.settings["sidebar.show_filename"] !== "none" || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__filename", children: [
            t.settings["sidebar.show_filename"] !== "none" && g,
            t.settings["sidebar.show_filename"] !== "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
            t.settings["sidebar.show_filename"] === "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
          ] }),
          t.settings["gallery.show_parent_image"] && v.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
            /* @__PURE__ */ s.jsx("div", { className: "meld-lineage-thumbs", children: v.map(
              (S, E) => S.imgSrc && /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-lineage-badge__parent-thumb meld-lineage-badge__parent-thumb-btn",
                  style: {
                    padding: 0,
                    border: "none",
                    background: "none"
                  },
                  onClick: (D) => {
                    D.stopPropagation(), n({
                      type: "OPEN_VIEWER",
                      payload: {
                        id: S.id || e.id,
                        mode: "lineage"
                      }
                    });
                  },
                  title: E === 0 ? "Source" : E === 1 ? "Grand-Source" : `Ancestor (S${E + 1})`,
                  "aria-label": E === 0 ? "View source image" : E === 1 ? "View grand-source image" : `View ancestor image (S${E + 1})`,
                  children: /* @__PURE__ */ s.jsx(
                    "img",
                    {
                      src: S.imgSrc,
                      loading: "lazy",
                      alt: "",
                      style: {
                        display: "block",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }
                    }
                  )
                },
                S.id || E
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
              onClick: async (S) => {
                S.stopPropagation();
                try {
                  const E = await I(e.id);
                  a({
                    title: "Model",
                    text: E.model_name || "-"
                  });
                } catch {
                }
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (S) => {
                      S.stopPropagation();
                      try {
                        const E = await I(e.id);
                        x(E.model_name || "-", "Model");
                      } catch {
                      }
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
              onClick: async (S) => {
                S.stopPropagation();
                try {
                  const E = await I(e.id);
                  a({
                    title: "Positive Prompt",
                    text: E.positive_prompt || E.positive || "-"
                  });
                } catch {
                }
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (S) => {
                      S.stopPropagation();
                      try {
                        const E = await I(e.id);
                        x(E.positive_prompt || E.positive || "-", "Positive");
                      } catch {
                      }
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
              onClick: async (S) => {
                S.stopPropagation();
                try {
                  const E = await I(e.id);
                  a({
                    title: "Negative Prompt",
                    text: E.negative_prompt || E.negative || "-"
                  });
                } catch {
                }
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (S) => {
                      S.stopPropagation();
                      try {
                        const E = await I(e.id);
                        x(E.negative_prompt || E.negative || "-", "Negative");
                      } catch {
                      }
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
              onClick: (S) => {
                S.stopPropagation(), C();
              },
              children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((S) => /* @__PURE__ */ s.jsx("span", { className: "meld-image-card__tag", children: S }, S)) : /* @__PURE__ */ s.jsx(
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
              F === "saving" && /* @__PURE__ */ s.jsx("span", { className: "meld-notes__status", children: "Saving..." })
            ] }),
            /* @__PURE__ */ s.jsx(
              "div",
              {
                className: "meld-image-card__meta-content",
                onClick: (S) => {
                  S.stopPropagation(), T();
                },
                children: /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__notes-preview", children: e.user_notes || /* @__PURE__ */ s.jsx("span", { className: "meld-notes__placeholder", children: "Add notes..." }) })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ s.jsx(
          pi,
          {
            isMenuOpen: o,
            setIsMenuOpen: i,
            menuRef: h,
            settings: t.settings,
            onAddUnifiedLoader: k,
            onRestoreWorkflow: w,
            onSendToWorkflow: O,
            onRunWithWorkflow: W,
            onRunWithMask: (S) => V(S),
            onEditSource: y,
            onEditTags: C,
            onEditNotes: T,
            onRestore: M,
            showRestore: t.viewScope === "trash",
            onDelete: z,
            deleteLabel: t.viewScope === "trash" ? "Delete Permanently" : "Move to Trash"
          }
        ),
        l && /* @__PURE__ */ s.jsx(
          Mw,
          {
            title: l.title,
            text: l.text,
            onClose: () => a(null),
            onCopy: (S) => x(S, "", !0),
            isCopied: d
          }
        )
      ]
    }
  );
});
mm.displayName = "DetailedImageCard";
const pm = tt.memo(({ image: e }) => {
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
    menuRef: h,
    state: v,
    handleAddUnifiedLoader: g,
    handleRestoreWorkflow: j,
    handleSendToWorkflow: x,
    handleRunWithWorkflow: _,
    handleRunWithMask: b,
    handleEditSource: f,
    handleEditTags: m,
    handleEditNotes: u,
    handleDelete: w,
    handleRestore: k
  } = fm(e), y = v.viewScope === "trash", C = y ? "Delete Permanently" : "Move to Trash", T = (O) => {
    O.stopPropagation();
    let M = String(e.id);
    t && v.selectedIds.size > 0 && (M = Array.from(v.selectedIds).join(",")), O.dataTransfer.setData("text/plain", M), ne.getState().setIsOpen(!0);
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
      onDragStart: T,
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
          pi,
          {
            isMenuOpen: c,
            setIsMenuOpen: d,
            menuRef: h,
            settings: v.settings,
            onAddUnifiedLoader: g,
            onRestoreWorkflow: j,
            onSendToWorkflow: x,
            onRunWithWorkflow: _,
            onRunWithMask: b,
            onEditSource: f,
            onEditTags: m,
            onEditNotes: u,
            onDelete: w,
            onRestore: k,
            showRestore: y,
            deleteLabel: C,
            showQuickShortcuts: !1,
            variant: "thumbnail_overlay_top_right"
          }
        )
      ]
    }
  );
});
pm.displayName = "SimpleImageCard";
const Gc = ({ image: e }) => {
  const { state: t } = ie();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ s.jsx(pm, { image: e }) : /* @__PURE__ */ s.jsx(mm, { image: e });
}, ca = 6, Tw = 10, Lw = ({
  visibleImages: e,
  settings: t,
  loadMoreRef: n,
  viewerImageId: r,
  isLoading: l,
  hasMore: a
}) => {
  const o = p.useRef(null), [i, c] = p.useState(300), [d, h] = p.useState(!0), v = t["sidebar.thumbnail_size"] || 100, g = t["gallery.view_mode"] === "grid_only";
  p.useEffect(() => {
    const u = o.current;
    if (!u) return;
    const w = () => {
      c(u.clientWidth);
    };
    w();
    const k = new ResizeObserver(w);
    return k.observe(u), () => k.disconnect();
  }, []), p.useEffect(() => {
    const u = o.current;
    if (!u) return;
    if (typeof IntersectionObserver > "u") {
      h(!0);
      return;
    }
    const w = new IntersectionObserver(
      (k) => {
        const y = k[0];
        y && h(y.isIntersecting);
      },
      { threshold: 0 }
    );
    return w.observe(u), () => w.disconnect();
  }, []);
  const j = v + 10, x = g ? Math.max(
    1,
    Math.floor((i - Tw * 2 + ca) / (j + ca))
  ) : 1, _ = g ? Math.ceil(e.length / x) : e.length, b = g ? v + 14 : v + 40, f = Iw({
    count: _,
    getScrollElement: () => o.current,
    estimateSize: () => b,
    overscan: 5,
    enabled: d,
    getItemKey: (u) => {
      var w;
      return g ? `row-${u}-${x}` : ((w = e[u]) == null ? void 0 : w.id) ?? u;
    }
  });
  p.useEffect(() => {
    if (r === null) return;
    const u = e.findIndex((k) => k.id === r);
    if (u < 0) return;
    const w = g ? Math.floor(u / x) : u;
    f.scrollToIndex(w, {
      align: "center",
      behavior: "smooth"
    });
  }, [r, e, g, x, f]);
  const m = f.getVirtualItems();
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      ref: o,
      className: "meld-gallery__list-scroll",
      style: {
        "--meld-thumbnail-size": `${v}px`
      },
      children: [
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: `meld-gallery__list ${g ? "meld-gallery__list--grid-only meld-gallery__list--virtualized" : "meld-gallery__list--virtualized"}`,
            style: {
              height: `${f.getTotalSize()}px`,
              position: "relative"
            },
            children: m.map((u) => {
              if (g) {
                const k = u.index * x, y = Math.min(k + x, e.length), C = e.slice(k, y);
                return /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    ref: f.measureElement,
                    "data-index": u.index,
                    className: "meld-gallery__virtual-grid-row",
                    style: {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      transform: `translateY(${u.start}px)`,
                      display: "flex",
                      flexWrap: "wrap",
                      gap: ca,
                      alignItems: "flex-start"
                    },
                    children: C.map((T) => /* @__PURE__ */ s.jsx(
                      "div",
                      {
                        "data-image-id": T.id,
                        style: {
                          width: "auto",
                          flexShrink: 0,
                          display: "inline-block"
                        },
                        children: /* @__PURE__ */ s.jsx(
                          "div",
                          {
                            style: {
                              width: T.width && T.height ? Math.min(v, v * T.width / T.height) + 10 : v + 10,
                              minWidth: v + 10
                            },
                            children: /* @__PURE__ */ s.jsx(Gc, { image: T })
                          }
                        )
                      },
                      T.id
                    ))
                  },
                  u.key
                );
              }
              const w = e[u.index];
              return w ? /* @__PURE__ */ s.jsx(
                "div",
                {
                  ref: f.measureElement,
                  "data-index": u.index,
                  "data-image-id": w.id,
                  className: "meld-gallery__virtual-row",
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${u.start}px)`
                  },
                  children: /* @__PURE__ */ s.jsx(Gc, { image: w })
                },
                u.key
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
}, Aw = () => {
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
    isSearchActive: h,
    loadMoreRef: v
  } = hw(), g = ne((C) => C.isOpen), j = ne((C) => C.setIsOpen), x = ne((C) => C.buckets), _ = Object.values(x).some(
    (C) => C && C.length > 0
  );
  $.log("GalleryPanel: isLightTableOpen =", g);
  const [b, f] = p.useState(!1), [m, u] = p.useState(null), w = p.useRef(null), k = p.useCallback(() => {
    w.current && (u(w.current.getBoundingClientRect()), f(!0));
  }, []), y = p.useCallback(
    (C) => {
      t({ type: "SET_SEARCH_QUERY", payload: C }), i(C), a("search"), f(!1);
    },
    [t, i, a]
  );
  return $.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: c.length,
    visibleCount: d.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-gallery ${e.viewScope === "trash" ? "meld-gallery--trash" : ""}`,
      onDragOver: (C) => {
        C.dataTransfer.types.includes("application/meld-lt-source-slot") && (C.preventDefault(), C.dataTransfer.dropEffect = "move");
      },
      onDrop: (C) => {
        const T = C.dataTransfer.getData("application/meld-lt-source-slot");
        if (T) {
          C.preventDefault();
          const O = C.dataTransfer.getData("text/plain");
          if (O) {
            const M = O.split(","), z = [];
            M.forEach((W) => {
              if (W) {
                const V = W.trim();
                ne.getState().removeFromBucket(T, V);
                const I = Number(V);
                Number.isNaN(I) || z.push(I);
              }
            }), z.length > 0 && t({ type: "DESELECT_IMAGES", payload: z });
          }
        }
      },
      children: [
        /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__header", children: [
          e.viewScope === "trash" ? /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__trash-indicator", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__trash-label", children: [
              /* @__PURE__ */ s.jsx(Wt, { size: 14 }),
              /* @__PURE__ */ s.jsx("span", { children: "Trash Bin" })
            ] }),
            /* @__PURE__ */ s.jsxs("label", { className: "meld-gallery__trash-toggle", children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.settings["gallery.trash.show_missing"] || !1,
                  onChange: (C) => r("gallery.trash.show_missing", C.target.checked)
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
                  /* @__PURE__ */ s.jsx(de, { size: 14 }),
                  /* @__PURE__ */ s.jsx("span", { children: "Exit" })
                ]
              }
            )
          ] }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__actions", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => a(l === "analytics" ? "gallery" : "analytics"),
                style: {
                  background: "none",
                  border: "none",
                  color: l === "analytics" ? "var(--meld-accent-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Image Analytics",
                children: /* @__PURE__ */ s.jsx(ff, { size: 14 })
              }
            ),
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
                  color: h ? "var(--meld-success-color)" : l === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: h ? "bold" : "normal"
                },
                title: "Search",
                children: /* @__PURE__ */ s.jsx(on, { size: 14 })
              }
            ),
            e.favorites.length > 0 && /* @__PURE__ */ s.jsx(
              "button",
              {
                ref: w,
                type: "button",
                onClick: k,
                style: {
                  background: "none",
                  border: "none",
                  color: b ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Favorites",
                children: /* @__PURE__ */ s.jsx(nr, { size: 14, fill: b ? "var(--brand-yellow, #ffd700)" : "none" })
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
                children: /* @__PURE__ */ s.jsx(ar, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  const T = (e.settings["gallery.view_mode"] || "grid_details") === "grid_details" ? "grid_only" : "grid_details";
                  r("gallery.view_mode", T);
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ s.jsx(ag, { size: 14 }) : /* @__PURE__ */ s.jsx(si, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  $.log(
                    "GalleryPanel: Toggle Light Table clicked, from",
                    g,
                    "to",
                    !g
                  ), j(!g);
                },
                style: {
                  background: "none",
                  border: "none",
                  color: g ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                  position: "relative",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Light Table",
                children: /* @__PURE__ */ s.jsxs("div", { style: { position: "relative" }, children: [
                  /* @__PURE__ */ s.jsx(
                    mg,
                    {
                      size: 14,
                      fill: g ? "var(--brand-yellow, #ffd700)" : "none",
                      style: { opacity: g ? 1 : 0.8 }
                    }
                  ),
                  !g && _ && /* @__PURE__ */ s.jsx(
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
                children: /* @__PURE__ */ s.jsx(Gr, { size: 14 })
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
                children: /* @__PURE__ */ s.jsx(tr, { size: 14, className: e.isLoading ? "animate-spin" : "" })
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
                children: /* @__PURE__ */ s.jsx(hf, { size: 14 })
              }
            )
          ] }),
          l === "search" && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ s.jsx(ew, {}) })
        ] }),
        /* @__PURE__ */ s.jsx(bs, { section: "content", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__content", children: [
          /* @__PURE__ */ s.jsx(Iv, {}),
          e.error && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__error", children: e.error }),
          l === "analytics" ? /* @__PURE__ */ s.jsx(
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
                Nv,
                {
                  onClose: () => a("gallery"),
                  onSearchAndNavigate: (C) => {
                    t({ type: "SET_SEARCH_QUERY", payload: C }), a("search");
                  }
                }
              )
            }
          ) : l === "tags" ? /* @__PURE__ */ s.jsx(
            tw,
            {
              onClose: () => a("gallery"),
              onSearch: (C) => {
                t({ type: "SET_SEARCH_QUERY", payload: C }), a("search");
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
                Lw,
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
          /* @__PURE__ */ s.jsx(yw, {})
        ] }) }),
        /* @__PURE__ */ s.jsx(bs, { section: "viewer", children: e.viewerImageId !== null && /* @__PURE__ */ s.jsx(pw, {}) }),
        /* @__PURE__ */ s.jsx(bs, { section: "modals", children: /* @__PURE__ */ s.jsx(Zy, {}) }),
        b && /* @__PURE__ */ s.jsx(
          Xv,
          {
            anchorRect: m,
            onClose: () => f(!1),
            onSelect: y
          }
        ),
        /* @__PURE__ */ s.jsx(bs, { section: "light-table", children: /* @__PURE__ */ s.jsx(zv, {}) })
      ]
    }
  );
};
qc.registerExtension({
  name: "Meld.UnifiedLoader",
  async beforeRegisterNodeDef(e, t, n) {
    t.name;
  },
  async nodeCreated(e) {
    function t(l) {
      return l !== null && typeof l == "object" && "comfyClass" in l && typeof l.comfyClass == "string" && Array.isArray(l.widgets);
    }
    if (!t(e)) return;
    const n = e;
    if (n.comfyClass !== "MeldUnifiedLoader") return;
    const r = () => {
      var o, i;
      const l = (o = n.widgets) == null ? void 0 : o.find((c) => c.name === "positive"), a = (i = n.widgets) == null ? void 0 : i.find((c) => c.name === "negative");
      l && l.inputEl && (l.inputEl.style.borderLeft = "4px solid var(--comfy-input-text-active, #44bb44)", l.inputEl.style.paddingLeft = "8px"), a && a.inputEl && (a.inputEl.style.borderLeft = "4px solid var(--error-color, #ff4444)", a.inputEl.style.paddingLeft = "8px");
    };
    r(), setTimeout(r, 1), setTimeout(r, 100);
  }
});
const Dw = document.getElementById("meld-gallery-style");
if (!Dw) {
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
let Cs = null, it = null;
const Rw = () => tt.createElement(ry, null, tt.createElement(Aw)), Pw = () => {
  const [e, t] = tt.useState(0);
  return tt.useEffect(() => {
    const n = () => {
      Ey(), t((r) => r + 1);
    };
    return window.addEventListener("meld-database-changed", n), () => {
      window.removeEventListener("meld-database-changed", n);
    };
  }, []), tt.createElement(Rw, { key: e });
};
qc.registerExtension({
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
    var n;
    Av();
    try {
      const r = await kf();
      $.init(r.dev_mode), $.log("Settings received:", r);
    } catch (r) {
      $.error("Failed to fetch settings", r), $.init(!1);
    }
    if (!((n = e.extensionManager) != null && n.registerSidebarTab))
      return;
    e.ui.meld = {
      refresh: () => {
        window.dispatchEvent(new CustomEvent("meld-refresh"));
      },
      isVisible: () => {
        const r = document.getElementById("meld-gallery-container");
        return r && r.offsetParent !== null;
      },
      toggle: () => {
        var r;
        try {
          (r = e.extensionManager) == null || r.setSidebarTabActive("meld-gallery");
        } catch (l) {
          $.error("Error toggling sidebar:", l);
        }
      }
    }, J.addEventListener("meld-image-saved", () => {
      var r;
      (r = e.ui.meld) == null || r.refresh();
    }), J.addEventListener("meld-scan-progress", (r) => {
      window.dispatchEvent(new CustomEvent("meld-scan-progress", { detail: r.detail }));
    }), J.addEventListener("meld-scan-finished", (r) => {
      var l;
      window.dispatchEvent(new CustomEvent("meld-scan-finished", { detail: r.detail })), (l = e.ui.meld) == null || l.refresh(), $.log("Import completed.");
    });
    function t(r) {
      if (!r || typeof r != "object") return !1;
      const l = r.output;
      if (!l || typeof l != "object") return !1;
      const a = l.images;
      if (!a || !Array.isArray(a)) return !1;
      for (const o of a) {
        if (!o || typeof o != "object") return !1;
        const i = o;
        if (typeof i.filename != "string" || typeof i.subfolder != "string" || typeof i.type != "string")
          return !1;
      }
      return !0;
    }
    J.addEventListener("executed", async (r) => {
      var l;
      if (t(r.detail) && (l = r.detail.output) != null && l.images) {
        for (const a of r.detail.output.images)
          if (a.type === "output") {
            const o = await vf({
              filename: a.filename,
              subfolder: a.subfolder,
              type: a.type
            });
            o.ok || $.error("Failed to auto-register image:", o.error);
          }
      }
    });
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
        render: (r) => {
          $.log("render called", {
            el: r,
            galleryRoot: Cs,
            galleryContainer: it
          }), r.style.height = "100%", r.style.overflow = "hidden";
          let l = r.parentElement;
          for (; l && !l.classList.contains("sidebar-content-container"); )
            l.style.height = "100%", l.style.overflow = "hidden", l = l.parentElement;
          l && (l.style.overflow = "hidden"), it || ($.log("galleryContainer not found, creating new one"), it = document.createElement("div"), it.id = "meld-gallery-container", it.style.height = "100%", it.style.width = "100%", it.style.display = "flex", it.style.flexDirection = "column", it.style.overflow = "hidden"), r.contains(it) || ($.log("Appending galleryContainer to el"), r.appendChild(it)), Cs ? $.log("Gallery root already exists, React should handle re-render if needed") : ($.log("Creating new gallery root"), Cs = af(it), Cs.render(tt.createElement(Pw)));
        }
      });
    } catch (r) {
      $.error("Error during sidebar registration:", r);
    }
  }
});
export {
  $w as c,
  ym as g
};
