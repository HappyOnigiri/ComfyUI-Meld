import { api as se } from "/scripts/api.js";
import { app as Ic } from "/scripts/app.js";
function Wm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Tc = { exports: {} }, oe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nl = Symbol.for("react.element"), $m = Symbol.for("react.portal"), Um = Symbol.for("react.fragment"), Vm = Symbol.for("react.strict_mode"), Bm = Symbol.for("react.profiler"), Qm = Symbol.for("react.provider"), Hm = Symbol.for("react.context"), Km = Symbol.for("react.forward_ref"), Gm = Symbol.for("react.suspense"), qm = Symbol.for("react.memo"), Ym = Symbol.for("react.lazy"), ci = Symbol.iterator;
function Xm(e) {
  return e === null || typeof e != "object" ? null : (e = ci && e[ci] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Lc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Dc = Object.assign, Pc = {};
function or(e, t, n) {
  this.props = e, this.context = t, this.refs = Pc, this.updater = n || Lc;
}
or.prototype.isReactComponent = {};
or.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
or.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Rc() {
}
Rc.prototype = or.prototype;
function ao(e, t, n) {
  this.props = e, this.context = t, this.refs = Pc, this.updater = n || Lc;
}
var oo = ao.prototype = new Rc();
oo.constructor = ao;
Dc(oo, or.prototype);
oo.isPureReactComponent = !0;
var di = Array.isArray, Oc = Object.prototype.hasOwnProperty, io = { current: null }, zc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ac(e, t, n) {
  var r, l = {}, a = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) Oc.call(t, r) && !zc.hasOwnProperty(r) && (l[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) l.children = n;
  else if (1 < i) {
    for (var c = Array(i), d = 0; d < i; d++) c[d] = arguments[d + 2];
    l.children = c;
  }
  if (e && e.defaultProps) for (r in i = e.defaultProps, i) l[r] === void 0 && (l[r] = i[r]);
  return { $$typeof: nl, type: e, key: a, ref: o, props: l, _owner: io.current };
}
function Zm(e, t) {
  return { $$typeof: nl, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function co(e) {
  return typeof e == "object" && e !== null && e.$$typeof === nl;
}
function Jm(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var ui = /\/+/g;
function Rs(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Jm("" + e.key) : t.toString(36);
}
function Ll(e, t, n, r, l) {
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
        case nl:
        case $m:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + Rs(o, 0) : r, di(l) ? (n = "", e != null && (n = e.replace(ui, "$&/") + "/"), Ll(l, t, n, "", function(d) {
    return d;
  })) : l != null && (co(l) && (l = Zm(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(ui, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", di(e)) for (var i = 0; i < e.length; i++) {
    a = e[i];
    var c = r + Rs(a, i);
    o += Ll(a, t, n, c, l);
  }
  else if (c = Xm(e), typeof c == "function") for (e = c.call(e), i = 0; !(a = e.next()).done; ) a = a.value, c = r + Rs(a, i++), o += Ll(a, t, n, c, l);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function dl(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Ll(e, r, "", "", function(a) {
    return t.call(n, a, l++);
  }), r;
}
function ef(e) {
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
var Ke = { current: null }, Dl = { transition: null }, tf = { ReactCurrentDispatcher: Ke, ReactCurrentBatchConfig: Dl, ReactCurrentOwner: io };
function Fc() {
  throw Error("act(...) is not supported in production builds of React.");
}
oe.Children = { map: dl, forEach: function(e, t, n) {
  dl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return dl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return dl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!co(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
oe.Component = or;
oe.Fragment = Um;
oe.Profiler = Bm;
oe.PureComponent = ao;
oe.StrictMode = Vm;
oe.Suspense = Gm;
oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tf;
oe.act = Fc;
oe.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Dc({}, e.props), l = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = io.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (c in t) Oc.call(t, c) && !zc.hasOwnProperty(c) && (r[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    i = Array(c);
    for (var d = 0; d < c; d++) i[d] = arguments[d + 2];
    r.children = i;
  }
  return { $$typeof: nl, type: e.type, key: l, ref: a, props: r, _owner: o };
};
oe.createContext = function(e) {
  return e = { $$typeof: Hm, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Qm, _context: e }, e.Consumer = e;
};
oe.createElement = Ac;
oe.createFactory = function(e) {
  var t = Ac.bind(null, e);
  return t.type = e, t;
};
oe.createRef = function() {
  return { current: null };
};
oe.forwardRef = function(e) {
  return { $$typeof: Km, render: e };
};
oe.isValidElement = co;
oe.lazy = function(e) {
  return { $$typeof: Ym, _payload: { _status: -1, _result: e }, _init: ef };
};
oe.memo = function(e, t) {
  return { $$typeof: qm, type: e, compare: t === void 0 ? null : t };
};
oe.startTransition = function(e) {
  var t = Dl.transition;
  Dl.transition = {};
  try {
    e();
  } finally {
    Dl.transition = t;
  }
};
oe.unstable_act = Fc;
oe.useCallback = function(e, t) {
  return Ke.current.useCallback(e, t);
};
oe.useContext = function(e) {
  return Ke.current.useContext(e);
};
oe.useDebugValue = function() {
};
oe.useDeferredValue = function(e) {
  return Ke.current.useDeferredValue(e);
};
oe.useEffect = function(e, t) {
  return Ke.current.useEffect(e, t);
};
oe.useId = function() {
  return Ke.current.useId();
};
oe.useImperativeHandle = function(e, t, n) {
  return Ke.current.useImperativeHandle(e, t, n);
};
oe.useInsertionEffect = function(e, t) {
  return Ke.current.useInsertionEffect(e, t);
};
oe.useLayoutEffect = function(e, t) {
  return Ke.current.useLayoutEffect(e, t);
};
oe.useMemo = function(e, t) {
  return Ke.current.useMemo(e, t);
};
oe.useReducer = function(e, t, n) {
  return Ke.current.useReducer(e, t, n);
};
oe.useRef = function(e) {
  return Ke.current.useRef(e);
};
oe.useState = function(e) {
  return Ke.current.useState(e);
};
oe.useSyncExternalStore = function(e, t, n) {
  return Ke.current.useSyncExternalStore(e, t, n);
};
oe.useTransition = function() {
  return Ke.current.useTransition();
};
oe.version = "18.3.1";
Tc.exports = oe;
var m = Tc.exports;
const Xt = /* @__PURE__ */ Wm(m);
var Wc = { exports: {} }, at = {}, $c = { exports: {} }, Uc = {};
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
      var F = V - 1 >>> 1, Q = C[F];
      if (0 < l(Q, L)) C[F] = L, C[V] = Q, V = F;
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
      e: for (var F = 0, Q = C.length, de = Q >>> 1; F < de; ) {
        var B = 2 * (F + 1) - 1, J = C[B], H = B + 1, fe = C[H];
        if (0 > l(J, V)) H < Q && 0 > l(fe, J) ? (C[F] = fe, C[H] = V, F = H) : (C[F] = J, C[B] = V, F = B);
        else if (H < Q && 0 > l(fe, V)) C[F] = fe, C[H] = V, F = H;
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
  var c = [], d = [], f = 1, h = null, w = 3, x = !1, v = !1, _ = !1, j = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, u = typeof setImmediate < "u" ? setImmediate : null;
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
    if (_ = !1, p(C), !v) if (n(c) !== null) v = !0, R(k);
    else {
      var L = n(d);
      L !== null && T(y, L.startTime - C);
    }
  }
  function k(C, L) {
    v = !1, _ && (_ = !1, g(E), E = -1), x = !0;
    var V = w;
    try {
      for (p(L), h = n(c); h !== null && (!(h.expirationTime > L) || C && !D()); ) {
        var F = h.callback;
        if (typeof F == "function") {
          h.callback = null, w = h.priorityLevel;
          var Q = F(h.expirationTime <= L);
          L = e.unstable_now(), typeof Q == "function" ? h.callback = Q : h === n(c) && r(c), p(L);
        } else r(c);
        h = n(c);
      }
      if (h !== null) var de = !0;
      else {
        var B = n(d);
        B !== null && T(y, B.startTime - L), de = !1;
      }
      return de;
    } finally {
      h = null, w = V, x = !1;
    }
  }
  var S = !1, b = null, E = -1, O = 5, P = -1;
  function D() {
    return !(e.unstable_now() - P < O);
  }
  function U() {
    if (b !== null) {
      var C = e.unstable_now();
      P = C;
      var L = !0;
      try {
        L = b(!0, C);
      } finally {
        L ? ee() : (S = !1, b = null);
      }
    } else S = !1;
  }
  var ee;
  if (typeof u == "function") ee = function() {
    u(U);
  };
  else if (typeof MessageChannel < "u") {
    var N = new MessageChannel(), I = N.port2;
    N.port1.onmessage = U, ee = function() {
      I.postMessage(null);
    };
  } else ee = function() {
    j(U, 0);
  };
  function R(C) {
    b = C, S || (S = !0, ee());
  }
  function T(C, L) {
    E = j(function() {
      C(e.unstable_now());
    }, L);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    v || x || (v = !0, R(k));
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
    var F = e.unstable_now();
    switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? F + V : F) : V = F, C) {
      case 1:
        var Q = -1;
        break;
      case 2:
        Q = 250;
        break;
      case 5:
        Q = 1073741823;
        break;
      case 4:
        Q = 1e4;
        break;
      default:
        Q = 5e3;
    }
    return Q = V + Q, C = { id: f++, callback: L, priorityLevel: C, startTime: V, expirationTime: Q, sortIndex: -1 }, V > F ? (C.sortIndex = V, t(d, C), n(c) === null && C === n(d) && (_ ? (g(E), E = -1) : _ = !0, T(y, V - F))) : (C.sortIndex = Q, t(c, C), v || x || (v = !0, R(k))), C;
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
})(Uc);
$c.exports = Uc;
var nf = $c.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rf = m, st = nf;
function W(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Vc = /* @__PURE__ */ new Set(), Rr = {};
function Nn(e, t) {
  Jn(e, t), Jn(e + "Capture", t);
}
function Jn(e, t) {
  for (Rr[e] = t, e = 0; e < t.length; e++) Vc.add(t[e]);
}
var At = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ca = Object.prototype.hasOwnProperty, lf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, mi = {}, fi = {};
function sf(e) {
  return ca.call(fi, e) ? !0 : ca.call(mi, e) ? !1 : lf.test(e) ? fi[e] = !0 : (mi[e] = !0, !1);
}
function af(e, t, n, r) {
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
function of(e, t, n, r) {
  if (t === null || typeof t > "u" || af(e, t, n, r)) return !0;
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
var Ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ae[e] = new Ge(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ae[t] = new Ge(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ae[e] = new Ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ae[e] = new Ge(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ae[e] = new Ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ae[e] = new Ge(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ae[e] = new Ge(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ae[e] = new Ge(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ae[e] = new Ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var uo = /[\-:]([a-z])/g;
function mo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    uo,
    mo
  );
  Ae[t] = new Ge(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(uo, mo);
  Ae[t] = new Ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(uo, mo);
  Ae[t] = new Ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ae[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ae.xlinkHref = new Ge("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ae[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function fo(e, t, n, r) {
  var l = Ae.hasOwnProperty(t) ? Ae[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (of(t, n, l, r) && (n = null), r || l === null ? sf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Vt = rf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ul = Symbol.for("react.element"), Rn = Symbol.for("react.portal"), On = Symbol.for("react.fragment"), po = Symbol.for("react.strict_mode"), da = Symbol.for("react.profiler"), Bc = Symbol.for("react.provider"), Qc = Symbol.for("react.context"), ho = Symbol.for("react.forward_ref"), ua = Symbol.for("react.suspense"), ma = Symbol.for("react.suspense_list"), go = Symbol.for("react.memo"), Kt = Symbol.for("react.lazy"), Hc = Symbol.for("react.offscreen"), pi = Symbol.iterator;
function pr(e) {
  return e === null || typeof e != "object" ? null : (e = pi && e[pi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var je = Object.assign, Os;
function kr(e) {
  if (Os === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Os = t && t[1] || "";
  }
  return `
` + Os + e;
}
var zs = !1;
function As(e, t) {
  if (!e || zs) return "";
  zs = !0;
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
    zs = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? kr(e) : "";
}
function cf(e) {
  switch (e.tag) {
    case 5:
      return kr(e.type);
    case 16:
      return kr("Lazy");
    case 13:
      return kr("Suspense");
    case 19:
      return kr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = As(e.type, !1), e;
    case 11:
      return e = As(e.type.render, !1), e;
    case 1:
      return e = As(e.type, !0), e;
    default:
      return "";
  }
}
function fa(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case On:
      return "Fragment";
    case Rn:
      return "Portal";
    case da:
      return "Profiler";
    case po:
      return "StrictMode";
    case ua:
      return "Suspense";
    case ma:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Qc:
      return (e.displayName || "Context") + ".Consumer";
    case Bc:
      return (e._context.displayName || "Context") + ".Provider";
    case ho:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case go:
      return t = e.displayName || null, t !== null ? t : fa(e.type) || "Memo";
    case Kt:
      t = e._payload, e = e._init;
      try {
        return fa(e(t));
      } catch {
      }
  }
  return null;
}
function df(e) {
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
      return fa(t);
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
function cn(e) {
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
function Kc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function uf(e) {
  var t = Kc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  e._valueTracker || (e._valueTracker = uf(e));
}
function Gc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Kc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ql(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function pa(e, t) {
  var n = t.checked;
  return je({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function hi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = cn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function qc(e, t) {
  t = t.checked, t != null && fo(e, "checked", t, !1);
}
function ha(e, t) {
  qc(e, t);
  var n = cn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ga(e, t.type, n) : t.hasOwnProperty("defaultValue") && ga(e, t.type, cn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function gi(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ga(e, t, n) {
  (t !== "number" || Ql(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Sr = Array.isArray;
function Kn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + cn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ya(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(W(91));
  return je({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function yi(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(W(92));
      if (Sr(n)) {
        if (1 < n.length) throw Error(W(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: cn(n) };
}
function Yc(e, t) {
  var n = cn(t.value), r = cn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function vi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Xc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function va(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Xc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var fl, Zc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (fl = fl || document.createElement("div"), fl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = fl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Or(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Cr = {
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
}, mf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Cr).forEach(function(e) {
  mf.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Cr[t] = Cr[e];
  });
});
function Jc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Cr.hasOwnProperty(e) && Cr[e] ? ("" + t).trim() : t + "px";
}
function ed(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Jc(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var ff = je({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function wa(e, t) {
  if (t) {
    if (ff[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(W(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(W(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(W(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(W(62));
  }
}
function xa(e, t) {
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
var _a = null;
function yo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ka = null, Gn = null, qn = null;
function wi(e) {
  if (e = sl(e)) {
    if (typeof ka != "function") throw Error(W(280));
    var t = e.stateNode;
    t && (t = _s(t), ka(e.stateNode, e.type, t));
  }
}
function td(e) {
  Gn ? qn ? qn.push(e) : qn = [e] : Gn = e;
}
function nd() {
  if (Gn) {
    var e = Gn, t = qn;
    if (qn = Gn = null, wi(e), t) for (e = 0; e < t.length; e++) wi(t[e]);
  }
}
function rd(e, t) {
  return e(t);
}
function ld() {
}
var Fs = !1;
function sd(e, t, n) {
  if (Fs) return e(t, n);
  Fs = !0;
  try {
    return rd(e, t, n);
  } finally {
    Fs = !1, (Gn !== null || qn !== null) && (ld(), nd());
  }
}
function zr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = _s(n);
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
  if (n && typeof n != "function") throw Error(W(231, t, typeof n));
  return n;
}
var Sa = !1;
if (At) try {
  var hr = {};
  Object.defineProperty(hr, "passive", { get: function() {
    Sa = !0;
  } }), window.addEventListener("test", hr, hr), window.removeEventListener("test", hr, hr);
} catch {
  Sa = !1;
}
function pf(e, t, n, r, l, a, o, i, c) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (f) {
    this.onError(f);
  }
}
var Er = !1, Hl = null, Kl = !1, ja = null, hf = { onError: function(e) {
  Er = !0, Hl = e;
} };
function gf(e, t, n, r, l, a, o, i, c) {
  Er = !1, Hl = null, pf.apply(hf, arguments);
}
function yf(e, t, n, r, l, a, o, i, c) {
  if (gf.apply(this, arguments), Er) {
    if (Er) {
      var d = Hl;
      Er = !1, Hl = null;
    } else throw Error(W(198));
    Kl || (Kl = !0, ja = d);
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
function ad(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function xi(e) {
  if (Mn(e) !== e) throw Error(W(188));
}
function vf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Mn(e), t === null) throw Error(W(188));
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
        if (a === n) return xi(l), e;
        if (a === r) return xi(l), t;
        a = a.sibling;
      }
      throw Error(W(188));
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
        if (!o) throw Error(W(189));
      }
    }
    if (n.alternate !== r) throw Error(W(190));
  }
  if (n.tag !== 3) throw Error(W(188));
  return n.stateNode.current === n ? e : t;
}
function od(e) {
  return e = vf(e), e !== null ? id(e) : null;
}
function id(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = id(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var cd = st.unstable_scheduleCallback, _i = st.unstable_cancelCallback, wf = st.unstable_shouldYield, xf = st.unstable_requestPaint, Ne = st.unstable_now, _f = st.unstable_getCurrentPriorityLevel, vo = st.unstable_ImmediatePriority, dd = st.unstable_UserBlockingPriority, Gl = st.unstable_NormalPriority, kf = st.unstable_LowPriority, ud = st.unstable_IdlePriority, ys = null, It = null;
function Sf(e) {
  if (It && typeof It.onCommitFiberRoot == "function") try {
    It.onCommitFiberRoot(ys, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var jt = Math.clz32 ? Math.clz32 : Cf, jf = Math.log, bf = Math.LN2;
function Cf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (jf(e) / bf | 0) | 0;
}
var pl = 64, hl = 4194304;
function jr(e) {
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
function ql(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, a = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var i = o & ~l;
    i !== 0 ? r = jr(i) : (a &= o, a !== 0 && (r = jr(a)));
  } else o = n & ~l, o !== 0 ? r = jr(o) : a !== 0 && (r = jr(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, a = t & -t, l >= a || l === 16 && (a & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - jt(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Ef(e, t) {
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
function Nf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - jt(a), i = 1 << o, c = l[o];
    c === -1 ? (!(i & n) || i & r) && (l[o] = Ef(i, t)) : c <= t && (e.expiredLanes |= i), a &= ~i;
  }
}
function ba(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function md() {
  var e = pl;
  return pl <<= 1, !(pl & 4194240) && (pl = 64), e;
}
function Ws(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function rl(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - jt(t), e[t] = n;
}
function Mf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - jt(n), a = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~a;
  }
}
function wo(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - jt(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var he = 0;
function fd(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var pd, xo, hd, gd, yd, Ca = !1, gl = [], en = null, tn = null, nn = null, Ar = /* @__PURE__ */ new Map(), Fr = /* @__PURE__ */ new Map(), qt = [], If = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ki(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      en = null;
      break;
    case "dragenter":
    case "dragleave":
      tn = null;
      break;
    case "mouseover":
    case "mouseout":
      nn = null;
      break;
    case "pointerover":
    case "pointerout":
      Ar.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fr.delete(t.pointerId);
  }
}
function gr(e, t, n, r, l, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [l] }, t !== null && (t = sl(t), t !== null && xo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Tf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return en = gr(en, e, t, n, r, l), !0;
    case "dragenter":
      return tn = gr(tn, e, t, n, r, l), !0;
    case "mouseover":
      return nn = gr(nn, e, t, n, r, l), !0;
    case "pointerover":
      var a = l.pointerId;
      return Ar.set(a, gr(Ar.get(a) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return a = l.pointerId, Fr.set(a, gr(Fr.get(a) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function vd(e) {
  var t = yn(e.target);
  if (t !== null) {
    var n = Mn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = ad(n), t !== null) {
          e.blockedOn = t, yd(e.priority, function() {
            hd(n);
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
function Pl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ea(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      _a = r, n.target.dispatchEvent(r), _a = null;
    } else return t = sl(n), t !== null && xo(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Si(e, t, n) {
  Pl(e) && n.delete(t);
}
function Lf() {
  Ca = !1, en !== null && Pl(en) && (en = null), tn !== null && Pl(tn) && (tn = null), nn !== null && Pl(nn) && (nn = null), Ar.forEach(Si), Fr.forEach(Si);
}
function yr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ca || (Ca = !0, st.unstable_scheduleCallback(st.unstable_NormalPriority, Lf)));
}
function Wr(e) {
  function t(l) {
    return yr(l, e);
  }
  if (0 < gl.length) {
    yr(gl[0], e);
    for (var n = 1; n < gl.length; n++) {
      var r = gl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (en !== null && yr(en, e), tn !== null && yr(tn, e), nn !== null && yr(nn, e), Ar.forEach(t), Fr.forEach(t), n = 0; n < qt.length; n++) r = qt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < qt.length && (n = qt[0], n.blockedOn === null); ) vd(n), n.blockedOn === null && qt.shift();
}
var Yn = Vt.ReactCurrentBatchConfig, Yl = !0;
function Df(e, t, n, r) {
  var l = he, a = Yn.transition;
  Yn.transition = null;
  try {
    he = 1, _o(e, t, n, r);
  } finally {
    he = l, Yn.transition = a;
  }
}
function Pf(e, t, n, r) {
  var l = he, a = Yn.transition;
  Yn.transition = null;
  try {
    he = 4, _o(e, t, n, r);
  } finally {
    he = l, Yn.transition = a;
  }
}
function _o(e, t, n, r) {
  if (Yl) {
    var l = Ea(e, t, n, r);
    if (l === null) Ys(e, t, r, Xl, n), ki(e, r);
    else if (Tf(l, e, t, n, r)) r.stopPropagation();
    else if (ki(e, r), t & 4 && -1 < If.indexOf(e)) {
      for (; l !== null; ) {
        var a = sl(l);
        if (a !== null && pd(a), a = Ea(e, t, n, r), a === null && Ys(e, t, r, Xl, n), a === l) break;
        l = a;
      }
      l !== null && r.stopPropagation();
    } else Ys(e, t, r, null, n);
  }
}
var Xl = null;
function Ea(e, t, n, r) {
  if (Xl = null, e = yo(r), e = yn(e), e !== null) if (t = Mn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = ad(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Xl = e, null;
}
function wd(e) {
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
      switch (_f()) {
        case vo:
          return 1;
        case dd:
          return 4;
        case Gl:
        case kf:
          return 16;
        case ud:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Zt = null, ko = null, Rl = null;
function xd() {
  if (Rl) return Rl;
  var e, t = ko, n = t.length, r, l = "value" in Zt ? Zt.value : Zt.textContent, a = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[a - r]; r++) ;
  return Rl = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Ol(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function yl() {
  return !0;
}
function ji() {
  return !1;
}
function ot(e) {
  function t(n, r, l, a, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(a) : a[i]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? yl : ji, this.isPropagationStopped = ji, this;
  }
  return je(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = yl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = yl);
  }, persist: function() {
  }, isPersistent: yl }), t;
}
var ir = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, So = ot(ir), ll = je({}, ir, { view: 0, detail: 0 }), Rf = ot(ll), $s, Us, vr, vs = je({}, ll, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: jo, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== vr && (vr && e.type === "mousemove" ? ($s = e.screenX - vr.screenX, Us = e.screenY - vr.screenY) : Us = $s = 0, vr = e), $s);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Us;
} }), bi = ot(vs), Of = je({}, vs, { dataTransfer: 0 }), zf = ot(Of), Af = je({}, ll, { relatedTarget: 0 }), Vs = ot(Af), Ff = je({}, ir, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Wf = ot(Ff), $f = je({}, ir, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Uf = ot($f), Vf = je({}, ir, { data: 0 }), Ci = ot(Vf), Bf = {
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
}, Qf = {
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
}, Hf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Kf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Hf[e]) ? !!t[e] : !1;
}
function jo() {
  return Kf;
}
var Gf = je({}, ll, { key: function(e) {
  if (e.key) {
    var t = Bf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ol(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Qf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: jo, charCode: function(e) {
  return e.type === "keypress" ? Ol(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ol(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), qf = ot(Gf), Yf = je({}, vs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ei = ot(Yf), Xf = je({}, ll, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: jo }), Zf = ot(Xf), Jf = je({}, ir, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ep = ot(Jf), tp = je({}, vs, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), np = ot(tp), rp = [9, 13, 27, 32], bo = At && "CompositionEvent" in window, Nr = null;
At && "documentMode" in document && (Nr = document.documentMode);
var lp = At && "TextEvent" in window && !Nr, _d = At && (!bo || Nr && 8 < Nr && 11 >= Nr), Ni = " ", Mi = !1;
function kd(e, t) {
  switch (e) {
    case "keyup":
      return rp.indexOf(t.keyCode) !== -1;
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
function Sd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var zn = !1;
function sp(e, t) {
  switch (e) {
    case "compositionend":
      return Sd(t);
    case "keypress":
      return t.which !== 32 ? null : (Mi = !0, Ni);
    case "textInput":
      return e = t.data, e === Ni && Mi ? null : e;
    default:
      return null;
  }
}
function ap(e, t) {
  if (zn) return e === "compositionend" || !bo && kd(e, t) ? (e = xd(), Rl = ko = Zt = null, zn = !1, e) : null;
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
      return _d && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var op = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ii(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!op[e.type] : t === "textarea";
}
function jd(e, t, n, r) {
  td(r), t = Zl(t, "onChange"), 0 < t.length && (n = new So("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Mr = null, $r = null;
function ip(e) {
  Rd(e, 0);
}
function ws(e) {
  var t = Wn(e);
  if (Gc(t)) return e;
}
function cp(e, t) {
  if (e === "change") return t;
}
var bd = !1;
if (At) {
  var Bs;
  if (At) {
    var Qs = "oninput" in document;
    if (!Qs) {
      var Ti = document.createElement("div");
      Ti.setAttribute("oninput", "return;"), Qs = typeof Ti.oninput == "function";
    }
    Bs = Qs;
  } else Bs = !1;
  bd = Bs && (!document.documentMode || 9 < document.documentMode);
}
function Li() {
  Mr && (Mr.detachEvent("onpropertychange", Cd), $r = Mr = null);
}
function Cd(e) {
  if (e.propertyName === "value" && ws($r)) {
    var t = [];
    jd(t, $r, e, yo(e)), sd(ip, t);
  }
}
function dp(e, t, n) {
  e === "focusin" ? (Li(), Mr = t, $r = n, Mr.attachEvent("onpropertychange", Cd)) : e === "focusout" && Li();
}
function up(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ws($r);
}
function mp(e, t) {
  if (e === "click") return ws(t);
}
function fp(e, t) {
  if (e === "input" || e === "change") return ws(t);
}
function pp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ct = typeof Object.is == "function" ? Object.is : pp;
function Ur(e, t) {
  if (Ct(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ca.call(t, l) || !Ct(e[l], t[l])) return !1;
  }
  return !0;
}
function Di(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Pi(e, t) {
  var n = Di(e);
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
    n = Di(n);
  }
}
function Ed(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ed(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Nd() {
  for (var e = window, t = Ql(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ql(e.document);
  }
  return t;
}
function Co(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function hp(e) {
  var t = Nd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Ed(n.ownerDocument.documentElement, n)) {
    if (r !== null && Co(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, a = Math.min(r.start, l);
        r = r.end === void 0 ? a : Math.min(r.end, l), !e.extend && a > r && (l = r, r = a, a = l), l = Pi(n, a);
        var o = Pi(
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
var gp = At && "documentMode" in document && 11 >= document.documentMode, An = null, Na = null, Ir = null, Ma = !1;
function Ri(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ma || An == null || An !== Ql(r) || (r = An, "selectionStart" in r && Co(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ir && Ur(Ir, r) || (Ir = r, r = Zl(Na, "onSelect"), 0 < r.length && (t = new So("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = An)));
}
function vl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Fn = { animationend: vl("Animation", "AnimationEnd"), animationiteration: vl("Animation", "AnimationIteration"), animationstart: vl("Animation", "AnimationStart"), transitionend: vl("Transition", "TransitionEnd") }, Hs = {}, Md = {};
At && (Md = document.createElement("div").style, "AnimationEvent" in window || (delete Fn.animationend.animation, delete Fn.animationiteration.animation, delete Fn.animationstart.animation), "TransitionEvent" in window || delete Fn.transitionend.transition);
function xs(e) {
  if (Hs[e]) return Hs[e];
  if (!Fn[e]) return e;
  var t = Fn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Md) return Hs[e] = t[n];
  return e;
}
var Id = xs("animationend"), Td = xs("animationiteration"), Ld = xs("animationstart"), Dd = xs("transitionend"), Pd = /* @__PURE__ */ new Map(), Oi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function un(e, t) {
  Pd.set(e, t), Nn(t, [e]);
}
for (var Ks = 0; Ks < Oi.length; Ks++) {
  var Gs = Oi[Ks], yp = Gs.toLowerCase(), vp = Gs[0].toUpperCase() + Gs.slice(1);
  un(yp, "on" + vp);
}
un(Id, "onAnimationEnd");
un(Td, "onAnimationIteration");
un(Ld, "onAnimationStart");
un("dblclick", "onDoubleClick");
un("focusin", "onFocus");
un("focusout", "onBlur");
un(Dd, "onTransitionEnd");
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
var br = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), wp = new Set("cancel close invalid load scroll toggle".split(" ").concat(br));
function zi(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, yf(r, t, void 0, e), e.currentTarget = null;
}
function Rd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var i = r[o], c = i.instance, d = i.currentTarget;
        if (i = i.listener, c !== a && l.isPropagationStopped()) break e;
        zi(l, i, d), a = c;
      }
      else for (o = 0; o < r.length; o++) {
        if (i = r[o], c = i.instance, d = i.currentTarget, i = i.listener, c !== a && l.isPropagationStopped()) break e;
        zi(l, i, d), a = c;
      }
    }
  }
  if (Kl) throw e = ja, Kl = !1, ja = null, e;
}
function we(e, t) {
  var n = t[Pa];
  n === void 0 && (n = t[Pa] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Od(t, e, 2, !1), n.add(r));
}
function qs(e, t, n) {
  var r = 0;
  t && (r |= 4), Od(n, e, r, t);
}
var wl = "_reactListening" + Math.random().toString(36).slice(2);
function Vr(e) {
  if (!e[wl]) {
    e[wl] = !0, Vc.forEach(function(n) {
      n !== "selectionchange" && (wp.has(n) || qs(n, !1, e), qs(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[wl] || (t[wl] = !0, qs("selectionchange", !1, t));
  }
}
function Od(e, t, n, r) {
  switch (wd(t)) {
    case 1:
      var l = Df;
      break;
    case 4:
      l = Pf;
      break;
    default:
      l = _o;
  }
  n = l.bind(null, t, n, e), l = void 0, !Sa || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Ys(e, t, n, r, l) {
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
  sd(function() {
    var d = a, f = yo(n), h = [];
    e: {
      var w = Pd.get(e);
      if (w !== void 0) {
        var x = So, v = e;
        switch (e) {
          case "keypress":
            if (Ol(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = qf;
            break;
          case "focusin":
            v = "focus", x = Vs;
            break;
          case "focusout":
            v = "blur", x = Vs;
            break;
          case "beforeblur":
          case "afterblur":
            x = Vs;
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
            x = bi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = zf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Zf;
            break;
          case Id:
          case Td:
          case Ld:
            x = Wf;
            break;
          case Dd:
            x = ep;
            break;
          case "scroll":
            x = Rf;
            break;
          case "wheel":
            x = np;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = Uf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Ei;
        }
        var _ = (t & 4) !== 0, j = !_ && e === "scroll", g = _ ? w !== null ? w + "Capture" : null : w;
        _ = [];
        for (var u = d, p; u !== null; ) {
          p = u;
          var y = p.stateNode;
          if (p.tag === 5 && y !== null && (p = y, g !== null && (y = zr(u, g), y != null && _.push(Br(u, y, p)))), j) break;
          u = u.return;
        }
        0 < _.length && (w = new x(w, v, null, n, f), h.push({ event: w, listeners: _ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (w = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", w && n !== _a && (v = n.relatedTarget || n.fromElement) && (yn(v) || v[Ft])) break e;
        if ((x || w) && (w = f.window === f ? f : (w = f.ownerDocument) ? w.defaultView || w.parentWindow : window, x ? (v = n.relatedTarget || n.toElement, x = d, v = v ? yn(v) : null, v !== null && (j = Mn(v), v !== j || v.tag !== 5 && v.tag !== 6) && (v = null)) : (x = null, v = d), x !== v)) {
          if (_ = bi, y = "onMouseLeave", g = "onMouseEnter", u = "mouse", (e === "pointerout" || e === "pointerover") && (_ = Ei, y = "onPointerLeave", g = "onPointerEnter", u = "pointer"), j = x == null ? w : Wn(x), p = v == null ? w : Wn(v), w = new _(y, u + "leave", x, n, f), w.target = j, w.relatedTarget = p, y = null, yn(f) === d && (_ = new _(g, u + "enter", v, n, f), _.target = p, _.relatedTarget = j, y = _), j = y, x && v) t: {
            for (_ = x, g = v, u = 0, p = _; p; p = Dn(p)) u++;
            for (p = 0, y = g; y; y = Dn(y)) p++;
            for (; 0 < u - p; ) _ = Dn(_), u--;
            for (; 0 < p - u; ) g = Dn(g), p--;
            for (; u--; ) {
              if (_ === g || g !== null && _ === g.alternate) break t;
              _ = Dn(_), g = Dn(g);
            }
            _ = null;
          }
          else _ = null;
          x !== null && Ai(h, w, x, _, !1), v !== null && j !== null && Ai(h, j, v, _, !0);
        }
      }
      e: {
        if (w = d ? Wn(d) : window, x = w.nodeName && w.nodeName.toLowerCase(), x === "select" || x === "input" && w.type === "file") var k = cp;
        else if (Ii(w)) if (bd) k = fp;
        else {
          k = up;
          var S = dp;
        }
        else (x = w.nodeName) && x.toLowerCase() === "input" && (w.type === "checkbox" || w.type === "radio") && (k = mp);
        if (k && (k = k(e, d))) {
          jd(h, k, n, f);
          break e;
        }
        S && S(e, w, d), e === "focusout" && (S = w._wrapperState) && S.controlled && w.type === "number" && ga(w, "number", w.value);
      }
      switch (S = d ? Wn(d) : window, e) {
        case "focusin":
          (Ii(S) || S.contentEditable === "true") && (An = S, Na = d, Ir = null);
          break;
        case "focusout":
          Ir = Na = An = null;
          break;
        case "mousedown":
          Ma = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ma = !1, Ri(h, n, f);
          break;
        case "selectionchange":
          if (gp) break;
        case "keydown":
        case "keyup":
          Ri(h, n, f);
      }
      var b;
      if (bo) e: {
        switch (e) {
          case "compositionstart":
            var E = "onCompositionStart";
            break e;
          case "compositionend":
            E = "onCompositionEnd";
            break e;
          case "compositionupdate":
            E = "onCompositionUpdate";
            break e;
        }
        E = void 0;
      }
      else zn ? kd(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (_d && n.locale !== "ko" && (zn || E !== "onCompositionStart" ? E === "onCompositionEnd" && zn && (b = xd()) : (Zt = f, ko = "value" in Zt ? Zt.value : Zt.textContent, zn = !0)), S = Zl(d, E), 0 < S.length && (E = new Ci(E, e, null, n, f), h.push({ event: E, listeners: S }), b ? E.data = b : (b = Sd(n), b !== null && (E.data = b)))), (b = lp ? sp(e, n) : ap(e, n)) && (d = Zl(d, "onBeforeInput"), 0 < d.length && (f = new Ci("onBeforeInput", "beforeinput", null, n, f), h.push({ event: f, listeners: d }), f.data = b));
    }
    Rd(h, t);
  });
}
function Br(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Zl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, a = l.stateNode;
    l.tag === 5 && a !== null && (l = a, a = zr(e, n), a != null && r.unshift(Br(e, a, l)), a = zr(e, t), a != null && r.push(Br(e, a, l))), e = e.return;
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
function Ai(e, t, n, r, l) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var i = n, c = i.alternate, d = i.stateNode;
    if (c !== null && c === r) break;
    i.tag === 5 && d !== null && (i = d, l ? (c = zr(n, a), c != null && o.unshift(Br(n, c, i))) : l || (c = zr(n, a), c != null && o.push(Br(n, c, i)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var xp = /\r\n?/g, _p = /\u0000|\uFFFD/g;
function Fi(e) {
  return (typeof e == "string" ? e : "" + e).replace(xp, `
`).replace(_p, "");
}
function xl(e, t, n) {
  if (t = Fi(t), Fi(e) !== t && n) throw Error(W(425));
}
function Jl() {
}
var Ia = null, Ta = null;
function La(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Da = typeof setTimeout == "function" ? setTimeout : void 0, kp = typeof clearTimeout == "function" ? clearTimeout : void 0, Wi = typeof Promise == "function" ? Promise : void 0, Sp = typeof queueMicrotask == "function" ? queueMicrotask : typeof Wi < "u" ? function(e) {
  return Wi.resolve(null).then(e).catch(jp);
} : Da;
function jp(e) {
  setTimeout(function() {
    throw e;
  });
}
function Xs(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Wr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Wr(t);
}
function rn(e) {
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
function $i(e) {
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
var cr = Math.random().toString(36).slice(2), Mt = "__reactFiber$" + cr, Qr = "__reactProps$" + cr, Ft = "__reactContainer$" + cr, Pa = "__reactEvents$" + cr, bp = "__reactListeners$" + cr, Cp = "__reactHandles$" + cr;
function yn(e) {
  var t = e[Mt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ft] || n[Mt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = $i(e); e !== null; ) {
        if (n = e[Mt]) return n;
        e = $i(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function sl(e) {
  return e = e[Mt] || e[Ft], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Wn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(W(33));
}
function _s(e) {
  return e[Qr] || null;
}
var Ra = [], $n = -1;
function mn(e) {
  return { current: e };
}
function xe(e) {
  0 > $n || (e.current = Ra[$n], Ra[$n] = null, $n--);
}
function ge(e, t) {
  $n++, Ra[$n] = e.current, e.current = t;
}
var dn = {}, Ve = mn(dn), Ze = mn(!1), kn = dn;
function er(e, t) {
  var n = e.type.contextTypes;
  if (!n) return dn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, a;
  for (a in n) l[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Je(e) {
  return e = e.childContextTypes, e != null;
}
function es() {
  xe(Ze), xe(Ve);
}
function Ui(e, t, n) {
  if (Ve.current !== dn) throw Error(W(168));
  ge(Ve, t), ge(Ze, n);
}
function zd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(W(108, df(e) || "Unknown", l));
  return je({}, n, r);
}
function ts(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || dn, kn = Ve.current, ge(Ve, e), ge(Ze, Ze.current), !0;
}
function Vi(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(W(169));
  n ? (e = zd(e, t, kn), r.__reactInternalMemoizedMergedChildContext = e, xe(Ze), xe(Ve), ge(Ve, e)) : xe(Ze), ge(Ze, n);
}
var Pt = null, ks = !1, Zs = !1;
function Ad(e) {
  Pt === null ? Pt = [e] : Pt.push(e);
}
function Ep(e) {
  ks = !0, Ad(e);
}
function fn() {
  if (!Zs && Pt !== null) {
    Zs = !0;
    var e = 0, t = he;
    try {
      var n = Pt;
      for (he = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Pt = null, ks = !1;
    } catch (l) {
      throw Pt !== null && (Pt = Pt.slice(e + 1)), cd(vo, fn), l;
    } finally {
      he = t, Zs = !1;
    }
  }
  return null;
}
var Un = [], Vn = 0, ns = null, rs = 0, ut = [], mt = 0, Sn = null, Rt = 1, Ot = "";
function hn(e, t) {
  Un[Vn++] = rs, Un[Vn++] = ns, ns = e, rs = t;
}
function Fd(e, t, n) {
  ut[mt++] = Rt, ut[mt++] = Ot, ut[mt++] = Sn, Sn = e;
  var r = Rt;
  e = Ot;
  var l = 32 - jt(r) - 1;
  r &= ~(1 << l), n += 1;
  var a = 32 - jt(t) + l;
  if (30 < a) {
    var o = l - l % 5;
    a = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Rt = 1 << 32 - jt(t) + l | n << l | r, Ot = a + e;
  } else Rt = 1 << a | n << l | r, Ot = e;
}
function Eo(e) {
  e.return !== null && (hn(e, 1), Fd(e, 1, 0));
}
function No(e) {
  for (; e === ns; ) ns = Un[--Vn], Un[Vn] = null, rs = Un[--Vn], Un[Vn] = null;
  for (; e === Sn; ) Sn = ut[--mt], ut[mt] = null, Ot = ut[--mt], ut[mt] = null, Rt = ut[--mt], ut[mt] = null;
}
var lt = null, rt = null, _e = !1, kt = null;
function Wd(e, t) {
  var n = ft(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Bi(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, lt = e, rt = rn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, lt = e, rt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Sn !== null ? { id: Rt, overflow: Ot } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ft(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, lt = e, rt = null, !0) : !1;
    default:
      return !1;
  }
}
function Oa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function za(e) {
  if (_e) {
    var t = rt;
    if (t) {
      var n = t;
      if (!Bi(e, t)) {
        if (Oa(e)) throw Error(W(418));
        t = rn(n.nextSibling);
        var r = lt;
        t && Bi(e, t) ? Wd(r, n) : (e.flags = e.flags & -4097 | 2, _e = !1, lt = e);
      }
    } else {
      if (Oa(e)) throw Error(W(418));
      e.flags = e.flags & -4097 | 2, _e = !1, lt = e;
    }
  }
}
function Qi(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  lt = e;
}
function _l(e) {
  if (e !== lt) return !1;
  if (!_e) return Qi(e), _e = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !La(e.type, e.memoizedProps)), t && (t = rt)) {
    if (Oa(e)) throw $d(), Error(W(418));
    for (; t; ) Wd(e, t), t = rn(t.nextSibling);
  }
  if (Qi(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(W(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              rt = rn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      rt = null;
    }
  } else rt = lt ? rn(e.stateNode.nextSibling) : null;
  return !0;
}
function $d() {
  for (var e = rt; e; ) e = rn(e.nextSibling);
}
function tr() {
  rt = lt = null, _e = !1;
}
function Mo(e) {
  kt === null ? kt = [e] : kt.push(e);
}
var Np = Vt.ReactCurrentBatchConfig;
function wr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(W(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(W(147, e));
      var l = r, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(o) {
        var i = l.refs;
        o === null ? delete i[a] : i[a] = o;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string") throw Error(W(284));
    if (!n._owner) throw Error(W(290, e));
  }
  return e;
}
function kl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(W(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Hi(e) {
  var t = e._init;
  return t(e._payload);
}
function Ud(e) {
  function t(g, u) {
    if (e) {
      var p = g.deletions;
      p === null ? (g.deletions = [u], g.flags |= 16) : p.push(u);
    }
  }
  function n(g, u) {
    if (!e) return null;
    for (; u !== null; ) t(g, u), u = u.sibling;
    return null;
  }
  function r(g, u) {
    for (g = /* @__PURE__ */ new Map(); u !== null; ) u.key !== null ? g.set(u.key, u) : g.set(u.index, u), u = u.sibling;
    return g;
  }
  function l(g, u) {
    return g = on(g, u), g.index = 0, g.sibling = null, g;
  }
  function a(g, u, p) {
    return g.index = p, e ? (p = g.alternate, p !== null ? (p = p.index, p < u ? (g.flags |= 2, u) : p) : (g.flags |= 2, u)) : (g.flags |= 1048576, u);
  }
  function o(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function i(g, u, p, y) {
    return u === null || u.tag !== 6 ? (u = sa(p, g.mode, y), u.return = g, u) : (u = l(u, p), u.return = g, u);
  }
  function c(g, u, p, y) {
    var k = p.type;
    return k === On ? f(g, u, p.props.children, y, p.key) : u !== null && (u.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Kt && Hi(k) === u.type) ? (y = l(u, p.props), y.ref = wr(g, u, p), y.return = g, y) : (y = Vl(p.type, p.key, p.props, null, g.mode, y), y.ref = wr(g, u, p), y.return = g, y);
  }
  function d(g, u, p, y) {
    return u === null || u.tag !== 4 || u.stateNode.containerInfo !== p.containerInfo || u.stateNode.implementation !== p.implementation ? (u = aa(p, g.mode, y), u.return = g, u) : (u = l(u, p.children || []), u.return = g, u);
  }
  function f(g, u, p, y, k) {
    return u === null || u.tag !== 7 ? (u = _n(p, g.mode, y, k), u.return = g, u) : (u = l(u, p), u.return = g, u);
  }
  function h(g, u, p) {
    if (typeof u == "string" && u !== "" || typeof u == "number") return u = sa("" + u, g.mode, p), u.return = g, u;
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case ul:
          return p = Vl(u.type, u.key, u.props, null, g.mode, p), p.ref = wr(g, null, u), p.return = g, p;
        case Rn:
          return u = aa(u, g.mode, p), u.return = g, u;
        case Kt:
          var y = u._init;
          return h(g, y(u._payload), p);
      }
      if (Sr(u) || pr(u)) return u = _n(u, g.mode, p, null), u.return = g, u;
      kl(g, u);
    }
    return null;
  }
  function w(g, u, p, y) {
    var k = u !== null ? u.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return k !== null ? null : i(g, u, "" + p, y);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ul:
          return p.key === k ? c(g, u, p, y) : null;
        case Rn:
          return p.key === k ? d(g, u, p, y) : null;
        case Kt:
          return k = p._init, w(
            g,
            u,
            k(p._payload),
            y
          );
      }
      if (Sr(p) || pr(p)) return k !== null ? null : f(g, u, p, y, null);
      kl(g, p);
    }
    return null;
  }
  function x(g, u, p, y, k) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return g = g.get(p) || null, i(u, g, "" + y, k);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case ul:
          return g = g.get(y.key === null ? p : y.key) || null, c(u, g, y, k);
        case Rn:
          return g = g.get(y.key === null ? p : y.key) || null, d(u, g, y, k);
        case Kt:
          var S = y._init;
          return x(g, u, p, S(y._payload), k);
      }
      if (Sr(y) || pr(y)) return g = g.get(p) || null, f(u, g, y, k, null);
      kl(u, y);
    }
    return null;
  }
  function v(g, u, p, y) {
    for (var k = null, S = null, b = u, E = u = 0, O = null; b !== null && E < p.length; E++) {
      b.index > E ? (O = b, b = null) : O = b.sibling;
      var P = w(g, b, p[E], y);
      if (P === null) {
        b === null && (b = O);
        break;
      }
      e && b && P.alternate === null && t(g, b), u = a(P, u, E), S === null ? k = P : S.sibling = P, S = P, b = O;
    }
    if (E === p.length) return n(g, b), _e && hn(g, E), k;
    if (b === null) {
      for (; E < p.length; E++) b = h(g, p[E], y), b !== null && (u = a(b, u, E), S === null ? k = b : S.sibling = b, S = b);
      return _e && hn(g, E), k;
    }
    for (b = r(g, b); E < p.length; E++) O = x(b, g, E, p[E], y), O !== null && (e && O.alternate !== null && b.delete(O.key === null ? E : O.key), u = a(O, u, E), S === null ? k = O : S.sibling = O, S = O);
    return e && b.forEach(function(D) {
      return t(g, D);
    }), _e && hn(g, E), k;
  }
  function _(g, u, p, y) {
    var k = pr(p);
    if (typeof k != "function") throw Error(W(150));
    if (p = k.call(p), p == null) throw Error(W(151));
    for (var S = k = null, b = u, E = u = 0, O = null, P = p.next(); b !== null && !P.done; E++, P = p.next()) {
      b.index > E ? (O = b, b = null) : O = b.sibling;
      var D = w(g, b, P.value, y);
      if (D === null) {
        b === null && (b = O);
        break;
      }
      e && b && D.alternate === null && t(g, b), u = a(D, u, E), S === null ? k = D : S.sibling = D, S = D, b = O;
    }
    if (P.done) return n(
      g,
      b
    ), _e && hn(g, E), k;
    if (b === null) {
      for (; !P.done; E++, P = p.next()) P = h(g, P.value, y), P !== null && (u = a(P, u, E), S === null ? k = P : S.sibling = P, S = P);
      return _e && hn(g, E), k;
    }
    for (b = r(g, b); !P.done; E++, P = p.next()) P = x(b, g, E, P.value, y), P !== null && (e && P.alternate !== null && b.delete(P.key === null ? E : P.key), u = a(P, u, E), S === null ? k = P : S.sibling = P, S = P);
    return e && b.forEach(function(U) {
      return t(g, U);
    }), _e && hn(g, E), k;
  }
  function j(g, u, p, y) {
    if (typeof p == "object" && p !== null && p.type === On && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ul:
          e: {
            for (var k = p.key, S = u; S !== null; ) {
              if (S.key === k) {
                if (k = p.type, k === On) {
                  if (S.tag === 7) {
                    n(g, S.sibling), u = l(S, p.props.children), u.return = g, g = u;
                    break e;
                  }
                } else if (S.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Kt && Hi(k) === S.type) {
                  n(g, S.sibling), u = l(S, p.props), u.ref = wr(g, S, p), u.return = g, g = u;
                  break e;
                }
                n(g, S);
                break;
              } else t(g, S);
              S = S.sibling;
            }
            p.type === On ? (u = _n(p.props.children, g.mode, y, p.key), u.return = g, g = u) : (y = Vl(p.type, p.key, p.props, null, g.mode, y), y.ref = wr(g, u, p), y.return = g, g = y);
          }
          return o(g);
        case Rn:
          e: {
            for (S = p.key; u !== null; ) {
              if (u.key === S) if (u.tag === 4 && u.stateNode.containerInfo === p.containerInfo && u.stateNode.implementation === p.implementation) {
                n(g, u.sibling), u = l(u, p.children || []), u.return = g, g = u;
                break e;
              } else {
                n(g, u);
                break;
              }
              else t(g, u);
              u = u.sibling;
            }
            u = aa(p, g.mode, y), u.return = g, g = u;
          }
          return o(g);
        case Kt:
          return S = p._init, j(g, u, S(p._payload), y);
      }
      if (Sr(p)) return v(g, u, p, y);
      if (pr(p)) return _(g, u, p, y);
      kl(g, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, u !== null && u.tag === 6 ? (n(g, u.sibling), u = l(u, p), u.return = g, g = u) : (n(g, u), u = sa(p, g.mode, y), u.return = g, g = u), o(g)) : n(g, u);
  }
  return j;
}
var nr = Ud(!0), Vd = Ud(!1), ls = mn(null), ss = null, Bn = null, Io = null;
function To() {
  Io = Bn = ss = null;
}
function Lo(e) {
  var t = ls.current;
  xe(ls), e._currentValue = t;
}
function Aa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Xn(e, t) {
  ss = e, Io = Bn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Xe = !0), e.firstContext = null);
}
function gt(e) {
  var t = e._currentValue;
  if (Io !== e) if (e = { context: e, memoizedValue: t, next: null }, Bn === null) {
    if (ss === null) throw Error(W(308));
    Bn = e, ss.dependencies = { lanes: 0, firstContext: e };
  } else Bn = Bn.next = e;
  return t;
}
var vn = null;
function Do(e) {
  vn === null ? vn = [e] : vn.push(e);
}
function Bd(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Do(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Wt(e, r);
}
function Wt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Gt = !1;
function Po(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Qd(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function zt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function ln(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, me & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Wt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Do(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Wt(e, n);
}
function zl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, wo(e, n);
  }
}
function Ki(e, t) {
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
function as(e, t, n, r) {
  var l = e.updateQueue;
  Gt = !1;
  var a = l.firstBaseUpdate, o = l.lastBaseUpdate, i = l.shared.pending;
  if (i !== null) {
    l.shared.pending = null;
    var c = i, d = c.next;
    c.next = null, o === null ? a = d : o.next = d, o = c;
    var f = e.alternate;
    f !== null && (f = f.updateQueue, i = f.lastBaseUpdate, i !== o && (i === null ? f.firstBaseUpdate = d : i.next = d, f.lastBaseUpdate = c));
  }
  if (a !== null) {
    var h = l.baseState;
    o = 0, f = d = c = null, i = a;
    do {
      var w = i.lane, x = i.eventTime;
      if ((r & w) === w) {
        f !== null && (f = f.next = {
          eventTime: x,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var v = e, _ = i;
          switch (w = t, x = n, _.tag) {
            case 1:
              if (v = _.payload, typeof v == "function") {
                h = v.call(x, h, w);
                break e;
              }
              h = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = _.payload, w = typeof v == "function" ? v.call(x, h, w) : v, w == null) break e;
              h = je({}, h, w);
              break e;
            case 2:
              Gt = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, w = l.effects, w === null ? l.effects = [i] : w.push(i));
      } else x = { eventTime: x, lane: w, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, f === null ? (d = f = x, c = h) : f = f.next = x, o |= w;
      if (i = i.next, i === null) {
        if (i = l.shared.pending, i === null) break;
        w = i, i = w.next, w.next = null, l.lastBaseUpdate = w, l.shared.pending = null;
      }
    } while (!0);
    if (f === null && (c = h), l.baseState = c, l.firstBaseUpdate = d, l.lastBaseUpdate = f, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else a === null && (l.shared.lanes = 0);
    bn |= o, e.lanes = o, e.memoizedState = h;
  }
}
function Gi(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(W(191, l));
      l.call(r);
    }
  }
}
var al = {}, Tt = mn(al), Hr = mn(al), Kr = mn(al);
function wn(e) {
  if (e === al) throw Error(W(174));
  return e;
}
function Ro(e, t) {
  switch (ge(Kr, t), ge(Hr, e), ge(Tt, al), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : va(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = va(t, e);
  }
  xe(Tt), ge(Tt, t);
}
function rr() {
  xe(Tt), xe(Hr), xe(Kr);
}
function Hd(e) {
  wn(Kr.current);
  var t = wn(Tt.current), n = va(t, e.type);
  t !== n && (ge(Hr, e), ge(Tt, n));
}
function Oo(e) {
  Hr.current === e && (xe(Tt), xe(Hr));
}
var ke = mn(0);
function os(e) {
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
var Js = [];
function zo() {
  for (var e = 0; e < Js.length; e++) Js[e]._workInProgressVersionPrimary = null;
  Js.length = 0;
}
var Al = Vt.ReactCurrentDispatcher, ea = Vt.ReactCurrentBatchConfig, jn = 0, Se = null, Ie = null, De = null, is = !1, Tr = !1, Gr = 0, Mp = 0;
function We() {
  throw Error(W(321));
}
function Ao(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ct(e[n], t[n])) return !1;
  return !0;
}
function Fo(e, t, n, r, l, a) {
  if (jn = a, Se = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Al.current = e === null || e.memoizedState === null ? Dp : Pp, e = n(r, l), Tr) {
    a = 0;
    do {
      if (Tr = !1, Gr = 0, 25 <= a) throw Error(W(301));
      a += 1, De = Ie = null, t.updateQueue = null, Al.current = Rp, e = n(r, l);
    } while (Tr);
  }
  if (Al.current = cs, t = Ie !== null && Ie.next !== null, jn = 0, De = Ie = Se = null, is = !1, t) throw Error(W(300));
  return e;
}
function Wo() {
  var e = Gr !== 0;
  return Gr = 0, e;
}
function Nt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return De === null ? Se.memoizedState = De = e : De = De.next = e, De;
}
function yt() {
  if (Ie === null) {
    var e = Se.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ie.next;
  var t = De === null ? Se.memoizedState : De.next;
  if (t !== null) De = t, Ie = e;
  else {
    if (e === null) throw Error(W(310));
    Ie = e, e = { memoizedState: Ie.memoizedState, baseState: Ie.baseState, baseQueue: Ie.baseQueue, queue: Ie.queue, next: null }, De === null ? Se.memoizedState = De = e : De = De.next = e;
  }
  return De;
}
function qr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ta(e) {
  var t = yt(), n = t.queue;
  if (n === null) throw Error(W(311));
  n.lastRenderedReducer = e;
  var r = Ie, l = r.baseQueue, a = n.pending;
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
      var f = d.lane;
      if ((jn & f) === f) c !== null && (c = c.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var h = {
          lane: f,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        c === null ? (i = c = h, o = r) : c = c.next = h, Se.lanes |= f, bn |= f;
      }
      d = d.next;
    } while (d !== null && d !== a);
    c === null ? o = r : c.next = i, Ct(r, t.memoizedState) || (Xe = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      a = l.lane, Se.lanes |= a, bn |= a, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function na(e) {
  var t = yt(), n = t.queue;
  if (n === null) throw Error(W(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, a = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      a = e(a, o.action), o = o.next;
    while (o !== l);
    Ct(a, t.memoizedState) || (Xe = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function Kd() {
}
function Gd(e, t) {
  var n = Se, r = yt(), l = t(), a = !Ct(r.memoizedState, l);
  if (a && (r.memoizedState = l, Xe = !0), r = r.queue, $o(Xd.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || De !== null && De.memoizedState.tag & 1) {
    if (n.flags |= 2048, Yr(9, Yd.bind(null, n, r, l, t), void 0, null), Pe === null) throw Error(W(349));
    jn & 30 || qd(n, t, l);
  }
  return l;
}
function qd(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Se.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Se.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Yd(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Zd(t) && Jd(e);
}
function Xd(e, t, n) {
  return n(function() {
    Zd(t) && Jd(e);
  });
}
function Zd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ct(e, n);
  } catch {
    return !0;
  }
}
function Jd(e) {
  var t = Wt(e, 1);
  t !== null && bt(t, e, 1, -1);
}
function qi(e) {
  var t = Nt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: qr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Lp.bind(null, Se, e), [t.memoizedState, e];
}
function Yr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Se.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Se.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function eu() {
  return yt().memoizedState;
}
function Fl(e, t, n, r) {
  var l = Nt();
  Se.flags |= e, l.memoizedState = Yr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ss(e, t, n, r) {
  var l = yt();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Ie !== null) {
    var o = Ie.memoizedState;
    if (a = o.destroy, r !== null && Ao(r, o.deps)) {
      l.memoizedState = Yr(t, n, a, r);
      return;
    }
  }
  Se.flags |= e, l.memoizedState = Yr(1 | t, n, a, r);
}
function Yi(e, t) {
  return Fl(8390656, 8, e, t);
}
function $o(e, t) {
  return Ss(2048, 8, e, t);
}
function tu(e, t) {
  return Ss(4, 2, e, t);
}
function nu(e, t) {
  return Ss(4, 4, e, t);
}
function ru(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function lu(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ss(4, 4, ru.bind(null, t, e), n);
}
function Uo() {
}
function su(e, t) {
  var n = yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ao(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function au(e, t) {
  var n = yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ao(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function ou(e, t, n) {
  return jn & 21 ? (Ct(n, t) || (n = md(), Se.lanes |= n, bn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Xe = !0), e.memoizedState = n);
}
function Ip(e, t) {
  var n = he;
  he = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ea.transition;
  ea.transition = {};
  try {
    e(!1), t();
  } finally {
    he = n, ea.transition = r;
  }
}
function iu() {
  return yt().memoizedState;
}
function Tp(e, t, n) {
  var r = an(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, cu(e)) du(t, n);
  else if (n = Bd(e, t, n, r), n !== null) {
    var l = He();
    bt(n, e, r, l), uu(n, t, r);
  }
}
function Lp(e, t, n) {
  var r = an(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (cu(e)) du(t, l);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var o = t.lastRenderedState, i = a(o, n);
      if (l.hasEagerState = !0, l.eagerState = i, Ct(i, o)) {
        var c = t.interleaved;
        c === null ? (l.next = l, Do(t)) : (l.next = c.next, c.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Bd(e, t, l, r), n !== null && (l = He(), bt(n, e, r, l), uu(n, t, r));
  }
}
function cu(e) {
  var t = e.alternate;
  return e === Se || t !== null && t === Se;
}
function du(e, t) {
  Tr = is = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function uu(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, wo(e, n);
  }
}
var cs = { readContext: gt, useCallback: We, useContext: We, useEffect: We, useImperativeHandle: We, useInsertionEffect: We, useLayoutEffect: We, useMemo: We, useReducer: We, useRef: We, useState: We, useDebugValue: We, useDeferredValue: We, useTransition: We, useMutableSource: We, useSyncExternalStore: We, useId: We, unstable_isNewReconciler: !1 }, Dp = { readContext: gt, useCallback: function(e, t) {
  return Nt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: gt, useEffect: Yi, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Fl(
    4194308,
    4,
    ru.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Fl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Fl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Nt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Nt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Tp.bind(null, Se, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Nt();
  return e = { current: e }, t.memoizedState = e;
}, useState: qi, useDebugValue: Uo, useDeferredValue: function(e) {
  return Nt().memoizedState = e;
}, useTransition: function() {
  var e = qi(!1), t = e[0];
  return e = Ip.bind(null, e[1]), Nt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Se, l = Nt();
  if (_e) {
    if (n === void 0) throw Error(W(407));
    n = n();
  } else {
    if (n = t(), Pe === null) throw Error(W(349));
    jn & 30 || qd(r, t, n);
  }
  l.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return l.queue = a, Yi(Xd.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, Yr(9, Yd.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = Nt(), t = Pe.identifierPrefix;
  if (_e) {
    var n = Ot, r = Rt;
    n = (r & ~(1 << 32 - jt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Gr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Mp++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Pp = {
  readContext: gt,
  useCallback: su,
  useContext: gt,
  useEffect: $o,
  useImperativeHandle: lu,
  useInsertionEffect: tu,
  useLayoutEffect: nu,
  useMemo: au,
  useReducer: ta,
  useRef: eu,
  useState: function() {
    return ta(qr);
  },
  useDebugValue: Uo,
  useDeferredValue: function(e) {
    var t = yt();
    return ou(t, Ie.memoizedState, e);
  },
  useTransition: function() {
    var e = ta(qr)[0], t = yt().memoizedState;
    return [e, t];
  },
  useMutableSource: Kd,
  useSyncExternalStore: Gd,
  useId: iu,
  unstable_isNewReconciler: !1
}, Rp = { readContext: gt, useCallback: su, useContext: gt, useEffect: $o, useImperativeHandle: lu, useInsertionEffect: tu, useLayoutEffect: nu, useMemo: au, useReducer: na, useRef: eu, useState: function() {
  return na(qr);
}, useDebugValue: Uo, useDeferredValue: function(e) {
  var t = yt();
  return Ie === null ? t.memoizedState = e : ou(t, Ie.memoizedState, e);
}, useTransition: function() {
  var e = na(qr)[0], t = yt().memoizedState;
  return [e, t];
}, useMutableSource: Kd, useSyncExternalStore: Gd, useId: iu, unstable_isNewReconciler: !1 };
function xt(e, t) {
  if (e && e.defaultProps) {
    t = je({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Fa(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : je({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var js = { isMounted: function(e) {
  return (e = e._reactInternals) ? Mn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = He(), l = an(e), a = zt(r, l);
  a.payload = t, n != null && (a.callback = n), t = ln(e, a, l), t !== null && (bt(t, e, l, r), zl(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = He(), l = an(e), a = zt(r, l);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = ln(e, a, l), t !== null && (bt(t, e, l, r), zl(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = He(), r = an(e), l = zt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = ln(e, l, r), t !== null && (bt(t, e, r, n), zl(t, e, r));
} };
function Xi(e, t, n, r, l, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Ur(n, r) || !Ur(l, a) : !0;
}
function mu(e, t, n) {
  var r = !1, l = dn, a = t.contextType;
  return typeof a == "object" && a !== null ? a = gt(a) : (l = Je(t) ? kn : Ve.current, r = t.contextTypes, a = (r = r != null) ? er(e, l) : dn), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = js, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function Zi(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && js.enqueueReplaceState(t, t.state, null);
}
function Wa(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Po(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? l.context = gt(a) : (a = Je(t) ? kn : Ve.current, l.context = er(e, a)), l.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (Fa(e, t, a, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && js.enqueueReplaceState(l, l.state, null), as(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function lr(e, t) {
  try {
    var n = "", r = t;
    do
      n += cf(r), r = r.return;
    while (r);
    var l = n;
  } catch (a) {
    l = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ra(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function $a(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Op = typeof WeakMap == "function" ? WeakMap : Map;
function fu(e, t, n) {
  n = zt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    us || (us = !0, Xa = r), $a(e, t);
  }, n;
}
function pu(e, t, n) {
  n = zt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      $a(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    $a(e, t), typeof r != "function" && (sn === null ? sn = /* @__PURE__ */ new Set([this]) : sn.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function Ji(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Op();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Yp.bind(null, e, t, n), t.then(e, e));
}
function ec(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function tc(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = zt(-1, 1), t.tag = 2, ln(n, t, 1))), n.lanes |= 1), e);
}
var zp = Vt.ReactCurrentOwner, Xe = !1;
function Qe(e, t, n, r) {
  t.child = e === null ? Vd(t, null, n, r) : nr(t, e.child, n, r);
}
function nc(e, t, n, r, l) {
  n = n.render;
  var a = t.ref;
  return Xn(t, l), r = Fo(e, t, n, r, a, l), n = Wo(), e !== null && !Xe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, $t(e, t, l)) : (_e && n && Eo(t), t.flags |= 1, Qe(e, t, r, l), t.child);
}
function rc(e, t, n, r, l) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !Yo(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, hu(e, t, a, r, l)) : (e = Vl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & l)) {
    var o = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Ur, n(o, r) && e.ref === t.ref) return $t(e, t, l);
  }
  return t.flags |= 1, e = on(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function hu(e, t, n, r, l) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Ur(a, r) && e.ref === t.ref) if (Xe = !1, t.pendingProps = r = a, (e.lanes & l) !== 0) e.flags & 131072 && (Xe = !0);
    else return t.lanes = e.lanes, $t(e, t, l);
  }
  return Ua(e, t, n, r, l);
}
function gu(e, t, n) {
  var r = t.pendingProps, l = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ge(Hn, nt), nt |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ge(Hn, nt), nt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, ge(Hn, nt), nt |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, ge(Hn, nt), nt |= r;
  return Qe(e, t, l, n), t.child;
}
function yu(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ua(e, t, n, r, l) {
  var a = Je(n) ? kn : Ve.current;
  return a = er(t, a), Xn(t, l), n = Fo(e, t, n, r, a, l), r = Wo(), e !== null && !Xe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, $t(e, t, l)) : (_e && r && Eo(t), t.flags |= 1, Qe(e, t, n, l), t.child);
}
function lc(e, t, n, r, l) {
  if (Je(n)) {
    var a = !0;
    ts(t);
  } else a = !1;
  if (Xn(t, l), t.stateNode === null) Wl(e, t), mu(t, n, r), Wa(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, i = t.memoizedProps;
    o.props = i;
    var c = o.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = gt(d) : (d = Je(n) ? kn : Ve.current, d = er(t, d));
    var f = n.getDerivedStateFromProps, h = typeof f == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || c !== d) && Zi(t, o, r, d), Gt = !1;
    var w = t.memoizedState;
    o.state = w, as(t, r, o, l), c = t.memoizedState, i !== r || w !== c || Ze.current || Gt ? (typeof f == "function" && (Fa(t, n, f, r), c = t.memoizedState), (i = Gt || Xi(t, n, i, r, w, c, d)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = d, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, Qd(e, t), i = t.memoizedProps, d = t.type === t.elementType ? i : xt(t.type, i), o.props = d, h = t.pendingProps, w = o.context, c = n.contextType, typeof c == "object" && c !== null ? c = gt(c) : (c = Je(n) ? kn : Ve.current, c = er(t, c));
    var x = n.getDerivedStateFromProps;
    (f = typeof x == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== h || w !== c) && Zi(t, o, r, c), Gt = !1, w = t.memoizedState, o.state = w, as(t, r, o, l);
    var v = t.memoizedState;
    i !== h || w !== v || Ze.current || Gt ? (typeof x == "function" && (Fa(t, n, x, r), v = t.memoizedState), (d = Gt || Xi(t, n, d, r, w, v, c) || !1) ? (f || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, v, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, v, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), o.props = r, o.state = v, o.context = c, r = d) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Va(e, t, n, r, a, l);
}
function Va(e, t, n, r, l, a) {
  yu(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Vi(t, n, !1), $t(e, t, a);
  r = t.stateNode, zp.current = t;
  var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = nr(t, e.child, null, a), t.child = nr(t, null, i, a)) : Qe(e, t, i, a), t.memoizedState = r.state, l && Vi(t, n, !0), t.child;
}
function vu(e) {
  var t = e.stateNode;
  t.pendingContext ? Ui(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ui(e, t.context, !1), Ro(e, t.containerInfo);
}
function sc(e, t, n, r, l) {
  return tr(), Mo(l), t.flags |= 256, Qe(e, t, n, r), t.child;
}
var Ba = { dehydrated: null, treeContext: null, retryLane: 0 };
function Qa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function wu(e, t, n) {
  var r = t.pendingProps, l = ke.current, a = !1, o = (t.flags & 128) !== 0, i;
  if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), ge(ke, l & 1), e === null)
    return za(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = { mode: "hidden", children: o }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = Es(o, r, 0, null), e = _n(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = Qa(n), t.memoizedState = Ba, e) : Vo(t, o));
  if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return Ap(e, t, o, r, i, l, n);
  if (a) {
    a = r.fallback, o = t.mode, l = e.child, i = l.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = on(l, c), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? a = on(i, a) : (a = _n(a, o, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? Qa(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = Ba, r;
  }
  return a = e.child, e = a.sibling, r = on(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Vo(e, t) {
  return t = Es({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Sl(e, t, n, r) {
  return r !== null && Mo(r), nr(t, e.child, null, n), e = Vo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Ap(e, t, n, r, l, a, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ra(Error(W(422))), Sl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, l = t.mode, r = Es({ mode: "visible", children: r.children }, l, 0, null), a = _n(a, l, o, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && nr(t, e.child, null, o), t.child.memoizedState = Qa(o), t.memoizedState = Ba, a);
  if (!(t.mode & 1)) return Sl(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
    return r = i, a = Error(W(419)), r = ra(a, r, void 0), Sl(e, t, o, r);
  }
  if (i = (o & e.childLanes) !== 0, Xe || i) {
    if (r = Pe, r !== null) {
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
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== a.retryLane && (a.retryLane = l, Wt(e, l), bt(r, e, l, -1));
    }
    return qo(), r = ra(Error(W(421))), Sl(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Xp.bind(null, e), l._reactRetry = t, null) : (e = a.treeContext, rt = rn(l.nextSibling), lt = t, _e = !0, kt = null, e !== null && (ut[mt++] = Rt, ut[mt++] = Ot, ut[mt++] = Sn, Rt = e.id, Ot = e.overflow, Sn = t), t = Vo(t, r.children), t.flags |= 4096, t);
}
function ac(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Aa(e.return, t, n);
}
function la(e, t, n, r, l) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = l);
}
function xu(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, a = r.tail;
  if (Qe(e, t, r.children, n), r = ke.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && ac(e, n, t);
      else if (e.tag === 19) ac(e, n, t);
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
  if (ge(ke, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && os(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), la(t, !1, l, n, a);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && os(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      la(t, !0, n, null, a);
      break;
    case "together":
      la(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Wl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function $t(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), bn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(W(153));
  if (t.child !== null) {
    for (e = t.child, n = on(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = on(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Fp(e, t, n) {
  switch (t.tag) {
    case 3:
      vu(t), tr();
      break;
    case 5:
      Hd(t);
      break;
    case 1:
      Je(t.type) && ts(t);
      break;
    case 4:
      Ro(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      ge(ls, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ge(ke, ke.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? wu(e, t, n) : (ge(ke, ke.current & 1), e = $t(e, t, n), e !== null ? e.sibling : null);
      ge(ke, ke.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return xu(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ge(ke, ke.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, gu(e, t, n);
  }
  return $t(e, t, n);
}
var _u, Ha, ku, Su;
_u = function(e, t) {
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
Ha = function() {
};
ku = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, wn(Tt.current);
    var a = null;
    switch (n) {
      case "input":
        l = pa(e, l), r = pa(e, r), a = [];
        break;
      case "select":
        l = je({}, l, { value: void 0 }), r = je({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        l = ya(e, l), r = ya(e, r), a = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Jl);
    }
    wa(n, r);
    var o;
    n = null;
    for (d in l) if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null) if (d === "style") {
      var i = l[d];
      for (o in i) i.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Rr.hasOwnProperty(d) ? a || (a = []) : (a = a || []).push(d, null));
    for (d in r) {
      var c = r[d];
      if (i = l != null ? l[d] : void 0, r.hasOwnProperty(d) && c !== i && (c != null || i != null)) if (d === "style") if (i) {
        for (o in i) !i.hasOwnProperty(o) || c && c.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in c) c.hasOwnProperty(o) && i[o] !== c[o] && (n || (n = {}), n[o] = c[o]);
      } else n || (a || (a = []), a.push(
        d,
        n
      )), n = c;
      else d === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, i = i ? i.__html : void 0, c != null && i !== c && (a = a || []).push(d, c)) : d === "children" ? typeof c != "string" && typeof c != "number" || (a = a || []).push(d, "" + c) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Rr.hasOwnProperty(d) ? (c != null && d === "onScroll" && we("scroll", e), a || i === c || (a = [])) : (a = a || []).push(d, c));
    }
    n && (a = a || []).push("style", n);
    var d = a;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Su = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function xr(e, t) {
  if (!_e) switch (e.tailMode) {
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
function $e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Wp(e, t, n) {
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
      return $e(t), null;
    case 1:
      return Je(t.type) && es(), $e(t), null;
    case 3:
      return r = t.stateNode, rr(), xe(Ze), xe(Ve), zo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (_l(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, kt !== null && (eo(kt), kt = null))), Ha(e, t), $e(t), null;
    case 5:
      Oo(t);
      var l = wn(Kr.current);
      if (n = t.type, e !== null && t.stateNode != null) ku(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(W(166));
          return $e(t), null;
        }
        if (e = wn(Tt.current), _l(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[Mt] = t, r[Qr] = a, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              we("cancel", r), we("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              we("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < br.length; l++) we(br[l], r);
              break;
            case "source":
              we("error", r);
              break;
            case "img":
            case "image":
            case "link":
              we(
                "error",
                r
              ), we("load", r);
              break;
            case "details":
              we("toggle", r);
              break;
            case "input":
              hi(r, a), we("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, we("invalid", r);
              break;
            case "textarea":
              yi(r, a), we("invalid", r);
          }
          wa(n, a), l = null;
          for (var o in a) if (a.hasOwnProperty(o)) {
            var i = a[o];
            o === "children" ? typeof i == "string" ? r.textContent !== i && (a.suppressHydrationWarning !== !0 && xl(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (a.suppressHydrationWarning !== !0 && xl(
              r.textContent,
              i,
              e
            ), l = ["children", "" + i]) : Rr.hasOwnProperty(o) && i != null && o === "onScroll" && we("scroll", r);
          }
          switch (n) {
            case "input":
              ml(r), gi(r, a, !0);
              break;
            case "textarea":
              ml(r), vi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = Jl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Xc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Mt] = t, e[Qr] = r, _u(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = xa(n, r), n) {
              case "dialog":
                we("cancel", e), we("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                we("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < br.length; l++) we(br[l], e);
                l = r;
                break;
              case "source":
                we("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                we(
                  "error",
                  e
                ), we("load", e), l = r;
                break;
              case "details":
                we("toggle", e), l = r;
                break;
              case "input":
                hi(e, r), l = pa(e, r), we("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = je({}, r, { value: void 0 }), we("invalid", e);
                break;
              case "textarea":
                yi(e, r), l = ya(e, r), we("invalid", e);
                break;
              default:
                l = r;
            }
            wa(n, l), i = l;
            for (a in i) if (i.hasOwnProperty(a)) {
              var c = i[a];
              a === "style" ? ed(e, c) : a === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && Zc(e, c)) : a === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Or(e, c) : typeof c == "number" && Or(e, "" + c) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Rr.hasOwnProperty(a) ? c != null && a === "onScroll" && we("scroll", e) : c != null && fo(e, a, c, o));
            }
            switch (n) {
              case "input":
                ml(e), gi(e, r, !1);
                break;
              case "textarea":
                ml(e), vi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + cn(r.value));
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
                typeof l.onClick == "function" && (e.onclick = Jl);
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
      return $e(t), null;
    case 6:
      if (e && t.stateNode != null) Su(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(W(166));
        if (n = wn(Kr.current), wn(Tt.current), _l(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Mt] = t, (a = r.nodeValue !== n) && (e = lt, e !== null)) switch (e.tag) {
            case 3:
              xl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && xl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Mt] = t, t.stateNode = r;
      }
      return $e(t), null;
    case 13:
      if (xe(ke), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (_e && rt !== null && t.mode & 1 && !(t.flags & 128)) $d(), tr(), t.flags |= 98560, a = !1;
        else if (a = _l(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error(W(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(W(317));
            a[Mt] = t;
          } else tr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          $e(t), a = !1;
        } else kt !== null && (eo(kt), kt = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ke.current & 1 ? Te === 0 && (Te = 3) : qo())), t.updateQueue !== null && (t.flags |= 4), $e(t), null);
    case 4:
      return rr(), Ha(e, t), e === null && Vr(t.stateNode.containerInfo), $e(t), null;
    case 10:
      return Lo(t.type._context), $e(t), null;
    case 17:
      return Je(t.type) && es(), $e(t), null;
    case 19:
      if (xe(ke), a = t.memoizedState, a === null) return $e(t), null;
      if (r = (t.flags & 128) !== 0, o = a.rendering, o === null) if (r) xr(a, !1);
      else {
        if (Te !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = os(e), o !== null) {
            for (t.flags |= 128, xr(a, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ge(ke, ke.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && Ne() > sr && (t.flags |= 128, r = !0, xr(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = os(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), xr(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !_e) return $e(t), null;
        } else 2 * Ne() - a.renderingStartTime > sr && n !== 1073741824 && (t.flags |= 128, r = !0, xr(a, !1), t.lanes = 4194304);
        a.isBackwards ? (o.sibling = t.child, t.child = o) : (n = a.last, n !== null ? n.sibling = o : t.child = o, a.last = o);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Ne(), t.sibling = null, n = ke.current, ge(ke, r ? n & 1 | 2 : n & 1), t) : ($e(t), null);
    case 22:
    case 23:
      return Go(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? nt & 1073741824 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : $e(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(W(156, t.tag));
}
function $p(e, t) {
  switch (No(t), t.tag) {
    case 1:
      return Je(t.type) && es(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return rr(), xe(Ze), xe(Ve), zo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Oo(t), null;
    case 13:
      if (xe(ke), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(W(340));
        tr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return xe(ke), null;
    case 4:
      return rr(), null;
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
var jl = !1, Ue = !1, Up = typeof WeakSet == "function" ? WeakSet : Set, G = null;
function Qn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Ce(e, t, r);
  }
  else n.current = null;
}
function Ka(e, t, n) {
  try {
    n();
  } catch (r) {
    Ce(e, t, r);
  }
}
var oc = !1;
function Vp(e, t) {
  if (Ia = Yl, e = Nd(), Co(e)) {
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
        var o = 0, i = -1, c = -1, d = 0, f = 0, h = e, w = null;
        t: for (; ; ) {
          for (var x; h !== n || l !== 0 && h.nodeType !== 3 || (i = o + l), h !== a || r !== 0 && h.nodeType !== 3 || (c = o + r), h.nodeType === 3 && (o += h.nodeValue.length), (x = h.firstChild) !== null; )
            w = h, h = x;
          for (; ; ) {
            if (h === e) break t;
            if (w === n && ++d === l && (i = o), w === a && ++f === r && (c = o), (x = h.nextSibling) !== null) break;
            h = w, w = h.parentNode;
          }
          h = x;
        }
        n = i === -1 || c === -1 ? null : { start: i, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ta = { focusedElem: e, selectionRange: n }, Yl = !1, G = t; G !== null; ) if (t = G, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, G = e;
  else for (; G !== null; ) {
    t = G;
    try {
      var v = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (v !== null) {
            var _ = v.memoizedProps, j = v.memoizedState, g = t.stateNode, u = g.getSnapshotBeforeUpdate(t.elementType === t.type ? _ : xt(t.type, _), j);
            g.__reactInternalSnapshotBeforeUpdate = u;
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
          throw Error(W(163));
      }
    } catch (y) {
      Ce(t, t.return, y);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, G = e;
      break;
    }
    G = t.return;
  }
  return v = oc, oc = !1, v;
}
function Lr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var a = l.destroy;
        l.destroy = void 0, a !== void 0 && Ka(t, n, a);
      }
      l = l.next;
    } while (l !== r);
  }
}
function bs(e, t) {
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
function Ga(e) {
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
function ju(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ju(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Mt], delete t[Qr], delete t[Pa], delete t[bp], delete t[Cp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function bu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ic(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || bu(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function qa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Jl));
  else if (r !== 4 && (e = e.child, e !== null)) for (qa(e, t, n), e = e.sibling; e !== null; ) qa(e, t, n), e = e.sibling;
}
function Ya(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ya(e, t, n), e = e.sibling; e !== null; ) Ya(e, t, n), e = e.sibling;
}
var Oe = null, _t = !1;
function Ht(e, t, n) {
  for (n = n.child; n !== null; ) Cu(e, t, n), n = n.sibling;
}
function Cu(e, t, n) {
  if (It && typeof It.onCommitFiberUnmount == "function") try {
    It.onCommitFiberUnmount(ys, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ue || Qn(n, t);
    case 6:
      var r = Oe, l = _t;
      Oe = null, Ht(e, t, n), Oe = r, _t = l, Oe !== null && (_t ? (e = Oe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Oe.removeChild(n.stateNode));
      break;
    case 18:
      Oe !== null && (_t ? (e = Oe, n = n.stateNode, e.nodeType === 8 ? Xs(e.parentNode, n) : e.nodeType === 1 && Xs(e, n), Wr(e)) : Xs(Oe, n.stateNode));
      break;
    case 4:
      r = Oe, l = _t, Oe = n.stateNode.containerInfo, _t = !0, Ht(e, t, n), Oe = r, _t = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ue && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var a = l, o = a.destroy;
          a = a.tag, o !== void 0 && (a & 2 || a & 4) && Ka(n, t, o), l = l.next;
        } while (l !== r);
      }
      Ht(e, t, n);
      break;
    case 1:
      if (!Ue && (Qn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (i) {
        Ce(n, t, i);
      }
      Ht(e, t, n);
      break;
    case 21:
      Ht(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ue = (r = Ue) || n.memoizedState !== null, Ht(e, t, n), Ue = r) : Ht(e, t, n);
      break;
    default:
      Ht(e, t, n);
  }
}
function cc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Up()), t.forEach(function(r) {
      var l = Zp.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function wt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var a = e, o = t, i = o;
      e: for (; i !== null; ) {
        switch (i.tag) {
          case 5:
            Oe = i.stateNode, _t = !1;
            break e;
          case 3:
            Oe = i.stateNode.containerInfo, _t = !0;
            break e;
          case 4:
            Oe = i.stateNode.containerInfo, _t = !0;
            break e;
        }
        i = i.return;
      }
      if (Oe === null) throw Error(W(160));
      Cu(a, o, l), Oe = null, _t = !1;
      var c = l.alternate;
      c !== null && (c.return = null), l.return = null;
    } catch (d) {
      Ce(l, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Eu(t, e), t = t.sibling;
}
function Eu(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (wt(t, e), Et(e), r & 4) {
        try {
          Lr(3, e, e.return), bs(3, e);
        } catch (_) {
          Ce(e, e.return, _);
        }
        try {
          Lr(5, e, e.return);
        } catch (_) {
          Ce(e, e.return, _);
        }
      }
      break;
    case 1:
      wt(t, e), Et(e), r & 512 && n !== null && Qn(n, n.return);
      break;
    case 5:
      if (wt(t, e), Et(e), r & 512 && n !== null && Qn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Or(l, "");
        } catch (_) {
          Ce(e, e.return, _);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var a = e.memoizedProps, o = n !== null ? n.memoizedProps : a, i = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          i === "input" && a.type === "radio" && a.name != null && qc(l, a), xa(i, o);
          var d = xa(i, a);
          for (o = 0; o < c.length; o += 2) {
            var f = c[o], h = c[o + 1];
            f === "style" ? ed(l, h) : f === "dangerouslySetInnerHTML" ? Zc(l, h) : f === "children" ? Or(l, h) : fo(l, f, h, d);
          }
          switch (i) {
            case "input":
              ha(l, a);
              break;
            case "textarea":
              Yc(l, a);
              break;
            case "select":
              var w = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!a.multiple;
              var x = a.value;
              x != null ? Kn(l, !!a.multiple, x, !1) : w !== !!a.multiple && (a.defaultValue != null ? Kn(
                l,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : Kn(l, !!a.multiple, a.multiple ? [] : "", !1));
          }
          l[Qr] = a;
        } catch (_) {
          Ce(e, e.return, _);
        }
      }
      break;
    case 6:
      if (wt(t, e), Et(e), r & 4) {
        if (e.stateNode === null) throw Error(W(162));
        l = e.stateNode, a = e.memoizedProps;
        try {
          l.nodeValue = a;
        } catch (_) {
          Ce(e, e.return, _);
        }
      }
      break;
    case 3:
      if (wt(t, e), Et(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Wr(t.containerInfo);
      } catch (_) {
        Ce(e, e.return, _);
      }
      break;
    case 4:
      wt(t, e), Et(e);
      break;
    case 13:
      wt(t, e), Et(e), l = e.child, l.flags & 8192 && (a = l.memoizedState !== null, l.stateNode.isHidden = a, !a || l.alternate !== null && l.alternate.memoizedState !== null || (Ho = Ne())), r & 4 && cc(e);
      break;
    case 22:
      if (f = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ue = (d = Ue) || f, wt(t, e), Ue = d) : wt(t, e), Et(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !f && e.mode & 1) for (G = e, f = e.child; f !== null; ) {
          for (h = G = f; G !== null; ) {
            switch (w = G, x = w.child, w.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Lr(4, w, w.return);
                break;
              case 1:
                Qn(w, w.return);
                var v = w.stateNode;
                if (typeof v.componentWillUnmount == "function") {
                  r = w, n = w.return;
                  try {
                    t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                  } catch (_) {
                    Ce(r, n, _);
                  }
                }
                break;
              case 5:
                Qn(w, w.return);
                break;
              case 22:
                if (w.memoizedState !== null) {
                  uc(h);
                  continue;
                }
            }
            x !== null ? (x.return = w, G = x) : uc(h);
          }
          f = f.sibling;
        }
        e: for (f = null, h = e; ; ) {
          if (h.tag === 5) {
            if (f === null) {
              f = h;
              try {
                l = h.stateNode, d ? (a = l.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (i = h.stateNode, c = h.memoizedProps.style, o = c != null && c.hasOwnProperty("display") ? c.display : null, i.style.display = Jc("display", o));
              } catch (_) {
                Ce(e, e.return, _);
              }
            }
          } else if (h.tag === 6) {
            if (f === null) try {
              h.stateNode.nodeValue = d ? "" : h.memoizedProps;
            } catch (_) {
              Ce(e, e.return, _);
            }
          } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
            h.child.return = h, h = h.child;
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            f === h && (f = null), h = h.return;
          }
          f === h && (f = null), h.sibling.return = h.return, h = h.sibling;
        }
      }
      break;
    case 19:
      wt(t, e), Et(e), r & 4 && cc(e);
      break;
    case 21:
      break;
    default:
      wt(
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
          if (bu(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(W(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Or(l, ""), r.flags &= -33);
          var a = ic(e);
          Ya(e, a, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, i = ic(e);
          qa(e, i, o);
          break;
        default:
          throw Error(W(161));
      }
    } catch (c) {
      Ce(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Bp(e, t, n) {
  G = e, Nu(e);
}
function Nu(e, t, n) {
  for (var r = (e.mode & 1) !== 0; G !== null; ) {
    var l = G, a = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || jl;
      if (!o) {
        var i = l.alternate, c = i !== null && i.memoizedState !== null || Ue;
        i = jl;
        var d = Ue;
        if (jl = o, (Ue = c) && !d) for (G = l; G !== null; ) o = G, c = o.child, o.tag === 22 && o.memoizedState !== null ? mc(l) : c !== null ? (c.return = o, G = c) : mc(l);
        for (; a !== null; ) G = a, Nu(a), a = a.sibling;
        G = l, jl = i, Ue = d;
      }
      dc(e);
    } else l.subtreeFlags & 8772 && a !== null ? (a.return = l, G = a) : dc(e);
  }
}
function dc(e) {
  for (; G !== null; ) {
    var t = G;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ue || bs(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ue) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : xt(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && Gi(t, a, r);
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
              Gi(t, o, n);
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
                var f = d.memoizedState;
                if (f !== null) {
                  var h = f.dehydrated;
                  h !== null && Wr(h);
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
            throw Error(W(163));
        }
        Ue || t.flags & 512 && Ga(t);
      } catch (w) {
        Ce(t, t.return, w);
      }
    }
    if (t === e) {
      G = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, G = n;
      break;
    }
    G = t.return;
  }
}
function uc(e) {
  for (; G !== null; ) {
    var t = G;
    if (t === e) {
      G = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, G = n;
      break;
    }
    G = t.return;
  }
}
function mc(e) {
  for (; G !== null; ) {
    var t = G;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            bs(4, t);
          } catch (c) {
            Ce(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              Ce(t, l, c);
            }
          }
          var a = t.return;
          try {
            Ga(t);
          } catch (c) {
            Ce(t, a, c);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ga(t);
          } catch (c) {
            Ce(t, o, c);
          }
      }
    } catch (c) {
      Ce(t, t.return, c);
    }
    if (t === e) {
      G = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      i.return = t.return, G = i;
      break;
    }
    G = t.return;
  }
}
var Qp = Math.ceil, ds = Vt.ReactCurrentDispatcher, Bo = Vt.ReactCurrentOwner, pt = Vt.ReactCurrentBatchConfig, me = 0, Pe = null, Me = null, ze = 0, nt = 0, Hn = mn(0), Te = 0, Xr = null, bn = 0, Cs = 0, Qo = 0, Dr = null, Ye = null, Ho = 0, sr = 1 / 0, Dt = null, us = !1, Xa = null, sn = null, bl = !1, Jt = null, ms = 0, Pr = 0, Za = null, $l = -1, Ul = 0;
function He() {
  return me & 6 ? Ne() : $l !== -1 ? $l : $l = Ne();
}
function an(e) {
  return e.mode & 1 ? me & 2 && ze !== 0 ? ze & -ze : Np.transition !== null ? (Ul === 0 && (Ul = md()), Ul) : (e = he, e !== 0 || (e = window.event, e = e === void 0 ? 16 : wd(e.type)), e) : 1;
}
function bt(e, t, n, r) {
  if (50 < Pr) throw Pr = 0, Za = null, Error(W(185));
  rl(e, n, r), (!(me & 2) || e !== Pe) && (e === Pe && (!(me & 2) && (Cs |= n), Te === 4 && Yt(e, ze)), et(e, r), n === 1 && me === 0 && !(t.mode & 1) && (sr = Ne() + 500, ks && fn()));
}
function et(e, t) {
  var n = e.callbackNode;
  Nf(e, t);
  var r = ql(e, e === Pe ? ze : 0);
  if (r === 0) n !== null && _i(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && _i(n), t === 1) e.tag === 0 ? Ep(fc.bind(null, e)) : Ad(fc.bind(null, e)), Sp(function() {
      !(me & 6) && fn();
    }), n = null;
    else {
      switch (fd(r)) {
        case 1:
          n = vo;
          break;
        case 4:
          n = dd;
          break;
        case 16:
          n = Gl;
          break;
        case 536870912:
          n = ud;
          break;
        default:
          n = Gl;
      }
      n = Ou(n, Mu.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Mu(e, t) {
  if ($l = -1, Ul = 0, me & 6) throw Error(W(327));
  var n = e.callbackNode;
  if (Zn() && e.callbackNode !== n) return null;
  var r = ql(e, e === Pe ? ze : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = fs(e, r);
  else {
    t = r;
    var l = me;
    me |= 2;
    var a = Tu();
    (Pe !== e || ze !== t) && (Dt = null, sr = Ne() + 500, xn(e, t));
    do
      try {
        Gp();
        break;
      } catch (i) {
        Iu(e, i);
      }
    while (!0);
    To(), ds.current = a, me = l, Me !== null ? t = 0 : (Pe = null, ze = 0, t = Te);
  }
  if (t !== 0) {
    if (t === 2 && (l = ba(e), l !== 0 && (r = l, t = Ja(e, l))), t === 1) throw n = Xr, xn(e, 0), Yt(e, r), et(e, Ne()), n;
    if (t === 6) Yt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Hp(l) && (t = fs(e, r), t === 2 && (a = ba(e), a !== 0 && (r = a, t = Ja(e, a))), t === 1)) throw n = Xr, xn(e, 0), Yt(e, r), et(e, Ne()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(W(345));
        case 2:
          gn(e, Ye, Dt);
          break;
        case 3:
          if (Yt(e, r), (r & 130023424) === r && (t = Ho + 500 - Ne(), 10 < t)) {
            if (ql(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              He(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Da(gn.bind(null, e, Ye, Dt), t);
            break;
          }
          gn(e, Ye, Dt);
          break;
        case 4:
          if (Yt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - jt(r);
            a = 1 << o, o = t[o], o > l && (l = o), r &= ~a;
          }
          if (r = l, r = Ne() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Qp(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Da(gn.bind(null, e, Ye, Dt), r);
            break;
          }
          gn(e, Ye, Dt);
          break;
        case 5:
          gn(e, Ye, Dt);
          break;
        default:
          throw Error(W(329));
      }
    }
  }
  return et(e, Ne()), e.callbackNode === n ? Mu.bind(null, e) : null;
}
function Ja(e, t) {
  var n = Dr;
  return e.current.memoizedState.isDehydrated && (xn(e, t).flags |= 256), e = fs(e, t), e !== 2 && (t = Ye, Ye = n, t !== null && eo(t)), e;
}
function eo(e) {
  Ye === null ? Ye = e : Ye.push.apply(Ye, e);
}
function Hp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], a = l.getSnapshot;
        l = l.value;
        try {
          if (!Ct(a(), l)) return !1;
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
function Yt(e, t) {
  for (t &= ~Qo, t &= ~Cs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - jt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function fc(e) {
  if (me & 6) throw Error(W(327));
  Zn();
  var t = ql(e, 0);
  if (!(t & 1)) return et(e, Ne()), null;
  var n = fs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ba(e);
    r !== 0 && (t = r, n = Ja(e, r));
  }
  if (n === 1) throw n = Xr, xn(e, 0), Yt(e, t), et(e, Ne()), n;
  if (n === 6) throw Error(W(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, gn(e, Ye, Dt), et(e, Ne()), null;
}
function Ko(e, t) {
  var n = me;
  me |= 1;
  try {
    return e(t);
  } finally {
    me = n, me === 0 && (sr = Ne() + 500, ks && fn());
  }
}
function Cn(e) {
  Jt !== null && Jt.tag === 0 && !(me & 6) && Zn();
  var t = me;
  me |= 1;
  var n = pt.transition, r = he;
  try {
    if (pt.transition = null, he = 1, e) return e();
  } finally {
    he = r, pt.transition = n, me = t, !(me & 6) && fn();
  }
}
function Go() {
  nt = Hn.current, xe(Hn);
}
function xn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, kp(n)), Me !== null) for (n = Me.return; n !== null; ) {
    var r = n;
    switch (No(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && es();
        break;
      case 3:
        rr(), xe(Ze), xe(Ve), zo();
        break;
      case 5:
        Oo(r);
        break;
      case 4:
        rr();
        break;
      case 13:
        xe(ke);
        break;
      case 19:
        xe(ke);
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
  if (Pe = e, Me = e = on(e.current, null), ze = nt = t, Te = 0, Xr = null, Qo = Cs = bn = 0, Ye = Dr = null, vn !== null) {
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
function Iu(e, t) {
  do {
    var n = Me;
    try {
      if (To(), Al.current = cs, is) {
        for (var r = Se.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        is = !1;
      }
      if (jn = 0, De = Ie = Se = null, Tr = !1, Gr = 0, Bo.current = null, n === null || n.return === null) {
        Te = 1, Xr = t, Me = null;
        break;
      }
      e: {
        var a = e, o = n.return, i = n, c = t;
        if (t = ze, i.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var d = c, f = i, h = f.tag;
          if (!(f.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var w = f.alternate;
            w ? (f.updateQueue = w.updateQueue, f.memoizedState = w.memoizedState, f.lanes = w.lanes) : (f.updateQueue = null, f.memoizedState = null);
          }
          var x = ec(o);
          if (x !== null) {
            x.flags &= -257, tc(x, o, i, a, t), x.mode & 1 && Ji(a, d, t), t = x, c = d;
            var v = t.updateQueue;
            if (v === null) {
              var _ = /* @__PURE__ */ new Set();
              _.add(c), t.updateQueue = _;
            } else v.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              Ji(a, d, t), qo();
              break e;
            }
            c = Error(W(426));
          }
        } else if (_e && i.mode & 1) {
          var j = ec(o);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256), tc(j, o, i, a, t), Mo(lr(c, i));
            break e;
          }
        }
        a = c = lr(c, i), Te !== 4 && (Te = 2), Dr === null ? Dr = [a] : Dr.push(a), a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var g = fu(a, c, t);
              Ki(a, g);
              break e;
            case 1:
              i = c;
              var u = a.type, p = a.stateNode;
              if (!(a.flags & 128) && (typeof u.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (sn === null || !sn.has(p)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var y = pu(a, i, t);
                Ki(a, y);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      Du(n);
    } catch (k) {
      t = k, Me === n && n !== null && (Me = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Tu() {
  var e = ds.current;
  return ds.current = cs, e === null ? cs : e;
}
function qo() {
  (Te === 0 || Te === 3 || Te === 2) && (Te = 4), Pe === null || !(bn & 268435455) && !(Cs & 268435455) || Yt(Pe, ze);
}
function fs(e, t) {
  var n = me;
  me |= 2;
  var r = Tu();
  (Pe !== e || ze !== t) && (Dt = null, xn(e, t));
  do
    try {
      Kp();
      break;
    } catch (l) {
      Iu(e, l);
    }
  while (!0);
  if (To(), me = n, ds.current = r, Me !== null) throw Error(W(261));
  return Pe = null, ze = 0, Te;
}
function Kp() {
  for (; Me !== null; ) Lu(Me);
}
function Gp() {
  for (; Me !== null && !wf(); ) Lu(Me);
}
function Lu(e) {
  var t = Ru(e.alternate, e, nt);
  e.memoizedProps = e.pendingProps, t === null ? Du(e) : Me = t, Bo.current = null;
}
function Du(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = $p(n, t), n !== null) {
        n.flags &= 32767, Me = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Te = 6, Me = null;
        return;
      }
    } else if (n = Wp(n, t, nt), n !== null) {
      Me = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Me = t;
      return;
    }
    Me = t = e;
  } while (t !== null);
  Te === 0 && (Te = 5);
}
function gn(e, t, n) {
  var r = he, l = pt.transition;
  try {
    pt.transition = null, he = 1, qp(e, t, n, r);
  } finally {
    pt.transition = l, he = r;
  }
  return null;
}
function qp(e, t, n, r) {
  do
    Zn();
  while (Jt !== null);
  if (me & 6) throw Error(W(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(W(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (Mf(e, a), e === Pe && (Me = Pe = null, ze = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || bl || (bl = !0, Ou(Gl, function() {
    return Zn(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = pt.transition, pt.transition = null;
    var o = he;
    he = 1;
    var i = me;
    me |= 4, Bo.current = null, Vp(e, n), Eu(n, e), hp(Ta), Yl = !!Ia, Ta = Ia = null, e.current = n, Bp(n), xf(), me = i, he = o, pt.transition = a;
  } else e.current = n;
  if (bl && (bl = !1, Jt = e, ms = l), a = e.pendingLanes, a === 0 && (sn = null), Sf(n.stateNode), et(e, Ne()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (us) throw us = !1, e = Xa, Xa = null, e;
  return ms & 1 && e.tag !== 0 && Zn(), a = e.pendingLanes, a & 1 ? e === Za ? Pr++ : (Pr = 0, Za = e) : Pr = 0, fn(), null;
}
function Zn() {
  if (Jt !== null) {
    var e = fd(ms), t = pt.transition, n = he;
    try {
      if (pt.transition = null, he = 16 > e ? 16 : e, Jt === null) var r = !1;
      else {
        if (e = Jt, Jt = null, ms = 0, me & 6) throw Error(W(331));
        var l = me;
        for (me |= 4, G = e.current; G !== null; ) {
          var a = G, o = a.child;
          if (G.flags & 16) {
            var i = a.deletions;
            if (i !== null) {
              for (var c = 0; c < i.length; c++) {
                var d = i[c];
                for (G = d; G !== null; ) {
                  var f = G;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lr(8, f, a);
                  }
                  var h = f.child;
                  if (h !== null) h.return = f, G = h;
                  else for (; G !== null; ) {
                    f = G;
                    var w = f.sibling, x = f.return;
                    if (ju(f), f === d) {
                      G = null;
                      break;
                    }
                    if (w !== null) {
                      w.return = x, G = w;
                      break;
                    }
                    G = x;
                  }
                }
              }
              var v = a.alternate;
              if (v !== null) {
                var _ = v.child;
                if (_ !== null) {
                  v.child = null;
                  do {
                    var j = _.sibling;
                    _.sibling = null, _ = j;
                  } while (_ !== null);
                }
              }
              G = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) o.return = a, G = o;
          else e: for (; G !== null; ) {
            if (a = G, a.flags & 2048) switch (a.tag) {
              case 0:
              case 11:
              case 15:
                Lr(9, a, a.return);
            }
            var g = a.sibling;
            if (g !== null) {
              g.return = a.return, G = g;
              break e;
            }
            G = a.return;
          }
        }
        var u = e.current;
        for (G = u; G !== null; ) {
          o = G;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) p.return = o, G = p;
          else e: for (o = u; G !== null; ) {
            if (i = G, i.flags & 2048) try {
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  bs(9, i);
              }
            } catch (k) {
              Ce(i, i.return, k);
            }
            if (i === o) {
              G = null;
              break e;
            }
            var y = i.sibling;
            if (y !== null) {
              y.return = i.return, G = y;
              break e;
            }
            G = i.return;
          }
        }
        if (me = l, fn(), It && typeof It.onPostCommitFiberRoot == "function") try {
          It.onPostCommitFiberRoot(ys, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      he = n, pt.transition = t;
    }
  }
  return !1;
}
function pc(e, t, n) {
  t = lr(n, t), t = fu(e, t, 1), e = ln(e, t, 1), t = He(), e !== null && (rl(e, 1, t), et(e, t));
}
function Ce(e, t, n) {
  if (e.tag === 3) pc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      pc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (sn === null || !sn.has(r))) {
        e = lr(n, e), e = pu(t, e, 1), t = ln(t, e, 1), e = He(), t !== null && (rl(t, 1, e), et(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Yp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = He(), e.pingedLanes |= e.suspendedLanes & n, Pe === e && (ze & n) === n && (Te === 4 || Te === 3 && (ze & 130023424) === ze && 500 > Ne() - Ho ? xn(e, 0) : Qo |= n), et(e, t);
}
function Pu(e, t) {
  t === 0 && (e.mode & 1 ? (t = hl, hl <<= 1, !(hl & 130023424) && (hl = 4194304)) : t = 1);
  var n = He();
  e = Wt(e, t), e !== null && (rl(e, t, n), et(e, n));
}
function Xp(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Pu(e, n);
}
function Zp(e, t) {
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
      throw Error(W(314));
  }
  r !== null && r.delete(t), Pu(e, n);
}
var Ru;
Ru = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ze.current) Xe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Xe = !1, Fp(e, t, n);
    Xe = !!(e.flags & 131072);
  }
  else Xe = !1, _e && t.flags & 1048576 && Fd(t, rs, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Wl(e, t), e = t.pendingProps;
      var l = er(t, Ve.current);
      Xn(t, n), l = Fo(null, t, r, e, l, n);
      var a = Wo();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Je(r) ? (a = !0, ts(t)) : a = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Po(t), l.updater = js, t.stateNode = l, l._reactInternals = t, Wa(t, r, e, n), t = Va(null, t, r, !0, a, n)) : (t.tag = 0, _e && a && Eo(t), Qe(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Wl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = eh(r), e = xt(r, e), l) {
          case 0:
            t = Ua(null, t, r, e, n);
            break e;
          case 1:
            t = lc(null, t, r, e, n);
            break e;
          case 11:
            t = nc(null, t, r, e, n);
            break e;
          case 14:
            t = rc(null, t, r, xt(r.type, e), n);
            break e;
        }
        throw Error(W(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : xt(r, l), Ua(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : xt(r, l), lc(e, t, r, l, n);
    case 3:
      e: {
        if (vu(t), e === null) throw Error(W(387));
        r = t.pendingProps, a = t.memoizedState, l = a.element, Qd(e, t), as(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          l = lr(Error(W(423)), t), t = sc(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = lr(Error(W(424)), t), t = sc(e, t, r, n, l);
          break e;
        } else for (rt = rn(t.stateNode.containerInfo.firstChild), lt = t, _e = !0, kt = null, n = Vd(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (tr(), r === l) {
            t = $t(e, t, n);
            break e;
          }
          Qe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Hd(t), e === null && za(t), r = t.type, l = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = l.children, La(r, l) ? o = null : a !== null && La(r, a) && (t.flags |= 32), yu(e, t), Qe(e, t, o, n), t.child;
    case 6:
      return e === null && za(t), null;
    case 13:
      return wu(e, t, n);
    case 4:
      return Ro(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = nr(t, null, r, n) : Qe(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : xt(r, l), nc(e, t, r, l, n);
    case 7:
      return Qe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Qe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Qe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, a = t.memoizedProps, o = l.value, ge(ls, r._currentValue), r._currentValue = o, a !== null) if (Ct(a.value, o)) {
          if (a.children === l.children && !Ze.current) {
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
                  c = zt(-1, n & -n), c.tag = 2;
                  var d = a.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var f = d.pending;
                    f === null ? c.next = c : (c.next = f.next, f.next = c), d.pending = c;
                  }
                }
                a.lanes |= n, c = a.alternate, c !== null && (c.lanes |= n), Aa(
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
            if (o = a.return, o === null) throw Error(W(341));
            o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), Aa(o, n, t), o = a.sibling;
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
      return l = t.type, r = t.pendingProps.children, Xn(t, n), l = gt(l), r = r(l), t.flags |= 1, Qe(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = xt(r, t.pendingProps), l = xt(r.type, l), rc(e, t, r, l, n);
    case 15:
      return hu(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : xt(r, l), Wl(e, t), t.tag = 1, Je(r) ? (e = !0, ts(t)) : e = !1, Xn(t, n), mu(t, r, l), Wa(t, r, l, n), Va(null, t, r, !0, e, n);
    case 19:
      return xu(e, t, n);
    case 22:
      return gu(e, t, n);
  }
  throw Error(W(156, t.tag));
};
function Ou(e, t) {
  return cd(e, t);
}
function Jp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ft(e, t, n, r) {
  return new Jp(e, t, n, r);
}
function Yo(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function eh(e) {
  if (typeof e == "function") return Yo(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ho) return 11;
    if (e === go) return 14;
  }
  return 2;
}
function on(e, t) {
  var n = e.alternate;
  return n === null ? (n = ft(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Vl(e, t, n, r, l, a) {
  var o = 2;
  if (r = e, typeof e == "function") Yo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case On:
      return _n(n.children, l, a, t);
    case po:
      o = 8, l |= 8;
      break;
    case da:
      return e = ft(12, n, t, l | 2), e.elementType = da, e.lanes = a, e;
    case ua:
      return e = ft(13, n, t, l), e.elementType = ua, e.lanes = a, e;
    case ma:
      return e = ft(19, n, t, l), e.elementType = ma, e.lanes = a, e;
    case Hc:
      return Es(n, l, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Bc:
          o = 10;
          break e;
        case Qc:
          o = 9;
          break e;
        case ho:
          o = 11;
          break e;
        case go:
          o = 14;
          break e;
        case Kt:
          o = 16, r = null;
          break e;
      }
      throw Error(W(130, e == null ? e : typeof e, ""));
  }
  return t = ft(o, n, t, l), t.elementType = e, t.type = r, t.lanes = a, t;
}
function _n(e, t, n, r) {
  return e = ft(7, e, r, t), e.lanes = n, e;
}
function Es(e, t, n, r) {
  return e = ft(22, e, r, t), e.elementType = Hc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function sa(e, t, n) {
  return e = ft(6, e, null, t), e.lanes = n, e;
}
function aa(e, t, n) {
  return t = ft(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function th(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ws(0), this.expirationTimes = Ws(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ws(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Xo(e, t, n, r, l, a, o, i, c) {
  return e = new th(e, t, n, i, c), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = ft(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Po(a), e;
}
function nh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Rn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function zu(e) {
  if (!e) return dn;
  e = e._reactInternals;
  e: {
    if (Mn(e) !== e || e.tag !== 1) throw Error(W(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Je(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(W(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Je(n)) return zd(e, n, t);
  }
  return t;
}
function Au(e, t, n, r, l, a, o, i, c) {
  return e = Xo(n, r, !0, e, l, a, o, i, c), e.context = zu(null), n = e.current, r = He(), l = an(n), a = zt(r, l), a.callback = t ?? null, ln(n, a, l), e.current.lanes = l, rl(e, l, r), et(e, r), e;
}
function Ns(e, t, n, r) {
  var l = t.current, a = He(), o = an(l);
  return n = zu(n), t.context === null ? t.context = n : t.pendingContext = n, t = zt(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ln(l, t, o), e !== null && (bt(e, l, o, a), zl(e, l, o)), o;
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
function hc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Zo(e, t) {
  hc(e, t), (e = e.alternate) && hc(e, t);
}
function rh() {
  return null;
}
var Fu = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Jo(e) {
  this._internalRoot = e;
}
Ms.prototype.render = Jo.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(W(409));
  Ns(e, t, null, null);
};
Ms.prototype.unmount = Jo.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Cn(function() {
      Ns(null, e, null, null);
    }), t[Ft] = null;
  }
};
function Ms(e) {
  this._internalRoot = e;
}
Ms.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = gd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < qt.length && t !== 0 && t < qt[n].priority; n++) ;
    qt.splice(n, 0, e), n === 0 && vd(e);
  }
};
function ei(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Is(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function gc() {
}
function lh(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var d = ps(o);
        a.call(d);
      };
    }
    var o = Au(t, r, e, 0, null, !1, !1, "", gc);
    return e._reactRootContainer = o, e[Ft] = o.current, Vr(e.nodeType === 8 ? e.parentNode : e), Cn(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var d = ps(c);
      i.call(d);
    };
  }
  var c = Xo(e, 0, !1, null, null, !1, !1, "", gc);
  return e._reactRootContainer = c, e[Ft] = c.current, Vr(e.nodeType === 8 ? e.parentNode : e), Cn(function() {
    Ns(t, c, n, r);
  }), c;
}
function Ts(e, t, n, r, l) {
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
    Ns(t, o, e, l);
  } else o = lh(n, t, e, l, r);
  return ps(o);
}
pd = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = jr(t.pendingLanes);
        n !== 0 && (wo(t, n | 1), et(t, Ne()), !(me & 6) && (sr = Ne() + 500, fn()));
      }
      break;
    case 13:
      Cn(function() {
        var r = Wt(e, 1);
        if (r !== null) {
          var l = He();
          bt(r, e, 1, l);
        }
      }), Zo(e, 1);
  }
};
xo = function(e) {
  if (e.tag === 13) {
    var t = Wt(e, 134217728);
    if (t !== null) {
      var n = He();
      bt(t, e, 134217728, n);
    }
    Zo(e, 134217728);
  }
};
hd = function(e) {
  if (e.tag === 13) {
    var t = an(e), n = Wt(e, t);
    if (n !== null) {
      var r = He();
      bt(n, e, t, r);
    }
    Zo(e, t);
  }
};
gd = function() {
  return he;
};
yd = function(e, t) {
  var n = he;
  try {
    return he = e, t();
  } finally {
    he = n;
  }
};
ka = function(e, t, n) {
  switch (t) {
    case "input":
      if (ha(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = _s(r);
            if (!l) throw Error(W(90));
            Gc(r), ha(r, l);
          }
        }
      }
      break;
    case "textarea":
      Yc(e, n);
      break;
    case "select":
      t = n.value, t != null && Kn(e, !!n.multiple, t, !1);
  }
};
rd = Ko;
ld = Cn;
var sh = { usingClientEntryPoint: !1, Events: [sl, Wn, _s, td, nd, Ko] }, _r = { findFiberByHostInstance: yn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ah = { bundleType: _r.bundleType, version: _r.version, rendererPackageName: _r.rendererPackageName, rendererConfig: _r.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Vt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = od(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: _r.findFiberByHostInstance || rh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Cl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Cl.isDisabled && Cl.supportsFiber) try {
    ys = Cl.inject(ah), It = Cl;
  } catch {
  }
}
at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sh;
at.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ei(t)) throw Error(W(200));
  return nh(e, t, null, n);
};
at.createRoot = function(e, t) {
  if (!ei(e)) throw Error(W(299));
  var n = !1, r = "", l = Fu;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Xo(e, 1, !1, null, null, n, !1, r, l), e[Ft] = t.current, Vr(e.nodeType === 8 ? e.parentNode : e), new Jo(t);
};
at.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(W(188)) : (e = Object.keys(e).join(","), Error(W(268, e)));
  return e = od(t), e = e === null ? null : e.stateNode, e;
};
at.flushSync = function(e) {
  return Cn(e);
};
at.hydrate = function(e, t, n) {
  if (!Is(t)) throw Error(W(200));
  return Ts(null, e, t, !0, n);
};
at.hydrateRoot = function(e, t, n) {
  if (!ei(e)) throw Error(W(405));
  var r = n != null && n.hydratedSources || null, l = !1, a = "", o = Fu;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Au(t, null, e, 1, n ?? null, l, !1, a, o), e[Ft] = t.current, Vr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Ms(t);
};
at.render = function(e, t, n) {
  if (!Is(t)) throw Error(W(200));
  return Ts(null, e, t, !1, n);
};
at.unmountComponentAtNode = function(e) {
  if (!Is(e)) throw Error(W(40));
  return e._reactRootContainer ? (Cn(function() {
    Ts(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ft] = null;
    });
  }), !0) : !1;
};
at.unstable_batchedUpdates = Ko;
at.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Is(n)) throw Error(W(200));
  if (e == null || e._reactInternals === void 0) throw Error(W(38));
  return Ts(e, t, n, !1, r);
};
at.version = "18.3.1-next-f1338f8080-20240426";
function Wu() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wu);
    } catch (e) {
      console.error(e);
    }
}
Wu(), Wc.exports = at;
var pe = Wc.exports, $u, yc = pe;
$u = yc.createRoot, yc.hydrateRoot;
var Uu = { exports: {} }, Ls = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oh = m, ih = Symbol.for("react.element"), ch = Symbol.for("react.fragment"), dh = Object.prototype.hasOwnProperty, uh = oh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, mh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Vu(e, t, n) {
  var r, l = {}, a = null, o = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) dh.call(t, r) && !mh.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: ih, type: e, key: a, ref: o, props: l, _owner: uh.current };
}
Ls.Fragment = ch;
Ls.jsx = Vu;
Ls.jsxs = Vu;
Uu.exports = Ls;
var s = Uu.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var fh = {
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
const ph = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), re = (e, t) => {
  const n = m.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: o,
      className: i = "",
      children: c,
      ...d
    }, f) => m.createElement(
      "svg",
      {
        ref: f,
        ...fh,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: o ? Number(a) * 24 / Number(l) : a,
        className: ["lucide", `lucide-${ph(e)}`, i].join(" "),
        ...d
      },
      [
        ...t.map(([h, w]) => m.createElement(h, w)),
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
const Bu = re("AlertCircle", [
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
const hh = re("AlertTriangle", [
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
const Qu = re("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gh = re("ArrowUpDown", [
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
const Hu = re("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yh = re("Box", [
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
const vh = re("Calendar", [
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
const wh = re("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ti = re("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xh = re("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ku = re("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ni = re("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _h = re("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kh = re("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zr = re("Download", [
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
const Sh = re("Eraser", [
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
const ri = re("FileJson", [
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
const jh = re("FileText", [
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
const bh = re("Folder", [
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
const Ch = re("Info", [
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
const Eh = re("Lasso", [
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
const Gu = re("LayoutGrid", [
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
const Nh = re("LayoutList", [
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
const Mh = re("Link2Off", [
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
const Ih = re("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vc = re("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Th = re("Maximize", [
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
const Lh = re("Menu", [
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
const Dh = re("Minimize", [
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
const Ph = re("MoreVertical", [
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
const Rh = re("PanelBottom", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qu = re("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jr = re("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ds = re("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const el = re("RefreshCw", [
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
const Oh = re("ScanLine", [
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
const En = re("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yu = re("Settings", [
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
const Xu = re("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ar = re("Star", [
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
const zh = re("StickyNote", [
  ["path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z", key: "qazsjp" }],
  ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4", key: "40519r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dr = re("Tag", [
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
const Ut = re("Trash2", [
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
const Ah = re("Trash", [
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
const Fh = re("Type", [
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
const Wh = re("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11", key: "llx8ln" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $h = re("Upload", [
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
const Uh = re("Workflow", [
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
const ye = re("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vh = re("ZoomIn", [
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
const Bh = re("ZoomOut", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);
window.api = se;
async function ce(e) {
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
const Qh = async () => {
  const e = await se.fetchApi("/meld/home-dir");
  return (await ce(e)).home;
}, tt = ({
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
let hs = !1;
const Hh = (e) => {
  hs = e, hs && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, Kh = (...e) => {
  hs && console.log("[Meld]", ...e);
}, Gh = (...e) => {
  hs && console.warn("[Meld]", ...e);
}, qh = (...e) => {
  console.error("[Meld]", ...e);
}, te = {
  log: Kh,
  warn: Gh,
  error: qh,
  init: Hh
}, Bl = async (e = 0, t = 30, n = "", r = "default", l = !1) => {
  const a = await se.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${l ? "&minimal=true" : ""}`
  );
  return ce(a);
}, Zu = async (e) => {
  const t = await se.fetchApi(`/meld/image/${e}/details`);
  return ce(t);
}, Yh = async (e, t = !1) => {
  const n = await se.fetchApi("/meld/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      permanent: t
    })
  });
  await ce(n);
}, li = async (e) => {
  const t = await se.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  return ce(t);
}, Ju = async (e) => {
  const t = await se.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  return ce(t);
}, wc = async (e, t) => {
  const n = await se.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  });
  await ce(n);
}, Xh = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await se.fetchApi(
    `/meld/suggest-parents?id=${e}${n}`
  );
  try {
    return await ce(r);
  } catch {
    return [];
  }
}, to = async (e) => {
  const t = await se.fetchApi(`/meld/lineage?id=${e}`);
  try {
    return await ce(t);
  } catch {
    return [];
  }
}, Zh = async (e, t) => {
  const n = await se.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  });
  await ce(n);
}, Jh = async (e, t) => {
  const n = await se.fetchApi("/meld/image-notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, userNotes: t })
  });
  return ce(n);
}, no = async (e, t, n) => {
  const r = await se.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  });
  await ce(r);
}, eg = async (e) => {
  const t = await se.fetchApi(`/meld/image/${e}/workflow`);
  return ce(t);
}, tg = async (e) => {
  const t = await se.fetchApi(`/meld/image/${e}/snapshot_data`);
  return ce(t);
}, ng = async (e, t) => {
  const n = await se.fetchApi("/meld/api/download/zip", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, removeMetadata: t })
  });
  if (!n.ok)
    throw new Error("Failed to download ZIP");
  const r = await n.blob(), l = window.URL.createObjectURL(r), a = document.createElement("a");
  a.href = l, a.download = `meld_images_${Date.now()}.zip`, document.body.appendChild(a), a.click(), window.URL.revokeObjectURL(l), document.body.removeChild(a);
}, rg = async (e, t) => {
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
}, lg = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await se.fetchApi(n);
  return ce(r);
}, sg = async () => {
  const e = await se.fetchApi("/meld/search-suggestions");
  return ce(e);
}, ag = async () => {
  const e = await se.fetchApi("/meld/search-keywords");
  return ce(e);
}, og = async () => {
  const e = await se.fetchApi("/meld/search-config");
  return ce(e);
}, ig = async () => {
  const e = await se.fetchApi("/meld/favorites");
  return ce(e);
}, cg = async (e, t) => {
  const n = await se.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  });
  await ce(n);
}, xc = async (e) => {
  const t = await se.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  });
  await ce(t);
}, dg = async (e, t, n) => {
  const r = await se.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  });
  await ce(r);
}, ug = {
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
}, em = async () => {
  let e;
  try {
    const t = await se.fetchApi("/meld/settings");
    e = await ce(t);
  } catch (t) {
    return console.error("Failed to fetch settings, using defaults", t), ug;
  }
  return typeof e["sidebar.show_filename"] == "boolean" && (e["sidebar.show_filename"] = e["sidebar.show_filename"] ? "filename" : "none"), typeof e["viewer.details.show_filename"] == "boolean" && (e["viewer.details.show_filename"] = e["viewer.details.show_filename"] ? "filename" : "none"), typeof e["fullscreen.details.show_filename"] == "boolean" && (e["fullscreen.details.show_filename"] = e["fullscreen.details.show_filename"] ? "filename" : "none"), e;
}, mg = async (e, t) => {
  const n = await se.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  });
  await ce(n);
}, fg = async () => {
  const e = await se.fetchApi("/meld/clear-thumbnail-cache", {
    method: "POST"
  });
  return ce(e);
}, _c = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (d, f) => {
    const h = typeof d == "function" ? d(t) : d;
    if (!Object.is(h, t)) {
      const w = t;
      t = f ?? (typeof h != "object" || h === null) ? h : Object.assign({}, t, h), n.forEach((x) => x(t, w));
    }
  }, l = () => t, i = { setState: r, getState: l, getInitialState: () => c, subscribe: (d) => (n.add(d), () => n.delete(d)) }, c = t = e(r, l, i);
  return i;
}, pg = (e) => e ? _c(e) : _c, hg = (e) => e;
function gg(e, t = hg) {
  const n = Xt.useSyncExternalStore(
    e.subscribe,
    Xt.useCallback(() => t(e.getState()), [e, t]),
    Xt.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return Xt.useDebugValue(n), n;
}
const yg = (e) => {
  const t = pg(e), n = (r) => gg(t, r);
  return Object.assign(n, t), n;
}, vg = (e) => yg;
function wg(e, t) {
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
const ro = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return ro(r)(n);
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
        return ro(r)(n);
      }
    };
  }
}, xg = (e, t) => (n, r, l) => {
  let a = {
    storage: wg(() => window.localStorage),
    partialize: (j) => j,
    version: 0,
    merge: (j, g) => ({
      ...g,
      ...j
    }),
    ...t
  }, o = !1, i = 0;
  const c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set();
  let f = a.storage;
  if (!f)
    return e(
      (...j) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
        ), n(...j);
      },
      r,
      l
    );
  const h = () => {
    const j = a.partialize({ ...r() });
    return f.setItem(a.name, {
      state: j,
      version: a.version
    });
  }, w = l.setState;
  l.setState = (j, g) => (w(j, g), h());
  const x = e(
    (...j) => (n(...j), h()),
    r,
    l
  );
  l.getInitialState = () => x;
  let v;
  const _ = () => {
    var j, g;
    if (!f) return;
    const u = ++i;
    o = !1, c.forEach((y) => {
      var k;
      return y((k = r()) != null ? k : x);
    });
    const p = ((g = a.onRehydrateStorage) == null ? void 0 : g.call(a, (j = r()) != null ? j : x)) || void 0;
    return ro(f.getItem.bind(f))(a.name).then((y) => {
      if (y)
        if (typeof y.version == "number" && y.version !== a.version) {
          if (a.migrate) {
            const k = a.migrate(
              y.state,
              y.version
            );
            return k instanceof Promise ? k.then((S) => [!0, S]) : [!0, k];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, y.state];
      return [!1, void 0];
    }).then((y) => {
      var k;
      if (u !== i)
        return;
      const [S, b] = y;
      if (v = a.merge(
        b,
        (k = r()) != null ? k : x
      ), n(v, !0), S)
        return h();
    }).then(() => {
      u === i && (p == null || p(v, void 0), v = r(), o = !0, d.forEach((y) => y(v)));
    }).catch((y) => {
      u === i && (p == null || p(void 0, y));
    });
  };
  return l.persist = {
    setOptions: (j) => {
      a = {
        ...a,
        ...j
      }, j.storage && (f = j.storage);
    },
    clearStorage: () => {
      f == null || f.removeItem(a.name);
    },
    getOptions: () => a,
    rehydrate: () => _(),
    hasHydrated: () => o,
    onHydrate: (j) => (c.add(j), () => {
      c.delete(j);
    }),
    onFinishHydration: (j) => (d.add(j), () => {
      d.delete(j);
    })
  }, a.skipHydration || _(), v || x;
}, _g = xg, kg = [
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
let El = null;
const ue = vg()(
  _g(
    (e) => ({
      isOpen: !1,
      slots: kg,
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
          const f = d.filter((h) => !l.has(h));
          f.length !== d.length && (a[c] = f, o = !0);
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
        El && clearTimeout(El), e({ toastMessage: t, toastType: n }), El = setTimeout(() => {
          e({ toastMessage: null }), El = null;
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
), Sg = {
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
function jg(e, t) {
  var n, r, l;
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "REMOVE_IMAGES": {
      const a = new Set(t.payload), o = e.images.filter((c) => !a.has(c.id)), i = new Set(e.selectedIds);
      for (const c of t.payload)
        i.delete(c);
      return {
        ...e,
        images: o,
        selectedIds: i,
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
      if (e.viewerMode === "gallery" && c !== null && !a.some((f) => f.id === c)) {
        const f = e.images.find((h) => h.id === c) || (((n = e.viewerFallbackImage) == null ? void 0 : n.id) === c ? e.viewerFallbackImage : void 0);
        f ? d = f : c = null;
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
        new Map(c.map((f) => [f.id, f])).values()
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
        const f = new Set(e.selectedIds);
        return f.add(t.payload), {
          ...e,
          selectedIds: f,
          lastSelectedId: t.payload
        };
      }
      const a = e.images.findIndex(
        (f) => f.id === e.lastSelectedId
      ), o = e.images.findIndex(
        (f) => f.id === t.payload
      );
      if (a === -1 || o === -1) return e;
      const [i, c] = [
        Math.min(a, o),
        Math.max(a, o)
      ], d = new Set(e.selectedIds);
      for (let f = i; f <= c; f++)
        d.add(e.images[f].id);
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
      const f = e.viewerMode === "lineage" && i === "lineage" && e.lineageImages.some((h) => h.id === o);
      return {
        ...e,
        viewerImageId: o,
        viewerMode: i,
        viewerLightTableSlotId: c,
        viewerInitialMaskMode: d,
        lineageImages: f ? e.lineageImages : []
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
      if (e.viewerMode === "lighttable" && e.viewerLightTableSlotId ? c = (ue.getState().buckets[e.viewerLightTableSlotId] || []).map((x) => {
        const v = Number.parseInt(x, 10);
        return e.images.find((_) => _.id === v) || e.lineageImages.find((_) => _.id === v) || null;
      }).filter((x) => x !== null) : e.viewerMode === "lineage" && e.lineageImages.length > 0 ? c = e.lineageImages : c = e.images.filter(
        (h) => h.exists !== !1 && (e.settings["gallery.show_parent_images"] || i || !h.has_children)
      ), e.viewerImageId === null || c.length === 0)
        return e;
      const d = c.findIndex(
        (h) => h.id === e.viewerImageId
      );
      if (d === -1 || d === c.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || d === c.length - 1 && !o)
        return e;
      const f = (d + 1) % c.length;
      return {
        ...e,
        viewerImageId: c[f].id
      };
    }
    case "PREVIOUS_IMAGE": {
      const o = ((l = t.payload) == null ? void 0 : l.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], i = e.searchQuery.trim() !== "";
      let c = [];
      if (e.viewerMode === "lighttable" && e.viewerLightTableSlotId ? c = (ue.getState().buckets[e.viewerLightTableSlotId] || []).map((x) => {
        const v = Number.parseInt(x, 10);
        return e.images.find((_) => _.id === v) || e.lineageImages.find((_) => _.id === v) || null;
      }).filter((x) => x !== null) : e.viewerMode === "lineage" && e.lineageImages.length > 0 ? c = e.lineageImages : c = e.images.filter(
        (h) => h.exists !== !1 && (e.settings["gallery.show_parent_images"] || i || !h.has_children)
      ), e.viewerImageId === null || c.length === 0)
        return e;
      const d = c.findIndex(
        (h) => h.id === e.viewerImageId
      );
      if (d === -1 || d === 0 && e.viewerMode === "gallery" && e.pagination.hasMore || d === 0 && !o)
        return e;
      const f = (d - 1 + c.length) % c.length;
      return {
        ...e,
        viewerImageId: c[f].id
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
const tm = m.createContext(void 0), bg = ({
  children: e
}) => {
  const [t, n] = m.useReducer(jg, Sg), r = m.useRef(t.images.length), l = m.useRef(0), a = m.useRef(/* @__PURE__ */ new Map());
  m.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const o = m.useCallback(
    async (v, _, j) => {
      const g = t.settings["gallery.max_load_count"], u = 200;
      let p = v;
      for (; p < Math.min(_, g) && j === l.current; )
        try {
          const y = Math.min(u, g - p);
          te.log("Background fetch: starting chunk", {
            offset: p,
            limit: y
          });
          const k = await Bl(
            p,
            y,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (j !== l.current || (n({ type: "APPEND_IMAGES", payload: k }), p += k.images.length, k.images.length === 0 || p >= k.total))
            break;
          await new Promise((S) => setTimeout(S, 300));
        } catch (y) {
          te.error("Background fetch failed", y);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), i = m.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const v = performance.now(), _ = ++l.current;
    try {
      const j = t.searchQuery.trim() !== "", g = t.settings["gallery.initial_load_count"];
      te.log("refreshImages: starting initial fetch", {
        isSearch: j,
        fetchLimit: g,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const u = await Bl(
        0,
        g,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), p = performance.now() - v;
      te.log("refreshImages: initial fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: p.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: u }), u.total > g && o(g, u.total, _);
    } catch (j) {
      te.error("refreshImages: fetch failed", j), n({
        type: "SET_ERROR",
        payload: j instanceof Error ? j.message : String(j)
      });
    }
  }, [
    t.searchQuery,
    t.viewScope,
    t.settings,
    o
  ]), c = m.useCallback(async () => {
    if (t.isLoading || !t.pagination.hasMore) return;
    n({ type: "SET_LOADING", payload: !0 });
    const v = performance.now();
    try {
      const _ = r.current, j = t.searchQuery.trim() !== "", g = t.pagination.limit;
      te.log("loadMoreImages: starting fetch", {
        nextOffset: _,
        fetchLimit: g,
        isSearch: j
      });
      const u = await Bl(
        _,
        g,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), p = performance.now() - v;
      te.log("loadMoreImages: fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: p.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: u });
    } catch (_) {
      te.error("loadMoreImages: fetch failed", _), n({
        type: "SET_ERROR",
        payload: _ instanceof Error ? _.message : String(_)
      });
    }
  }, [
    t.isLoading,
    t.pagination.hasMore,
    t.pagination.limit,
    t.searchQuery,
    t.viewScope
  ]), d = m.useCallback(async () => {
    try {
      const v = await ig();
      n({ type: "SET_FAVORITES", payload: v });
    } catch (v) {
      te.error("Failed to load favorites", v);
    }
  }, []), f = m.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const v = Array.from(t.selectedIds), j = t.images.filter(
      (g) => t.selectedIds.has(g.id)
    ).some(
      (g) => g.parent_id || g.has_children
    );
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: v,
        hasLineage: j,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), h = m.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const v = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const j = (await li(v)).restored_ids || v;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: j }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (_) {
      n({
        type: "SET_ERROR",
        payload: _ instanceof Error ? _.message : String(_)
      });
    }
  }, [t.selectedIds, t.viewScope]), w = m.useCallback(
    async (v, _) => {
      try {
        await mg(v, _), n({ type: "SET_SETTINGS", payload: { [v]: _ } });
      } catch (j) {
        n({
          type: "SET_ERROR",
          payload: j instanceof Error ? j.message : String(j)
        });
      }
    },
    []
  ), x = m.useCallback(
    async (v) => {
      const _ = t.images.find((p) => p.id === v);
      if (_ && !_.is_minimal)
        return _;
      const j = t.lineageImages.find((p) => p.id === v);
      if (j && !j.is_minimal)
        return j;
      const g = a.current.get(v);
      if (g)
        return g;
      const u = (async () => {
        try {
          te.log("fetchFullImageDetails: fetching full data", { id: v });
          const p = await Zu(v);
          return n({ type: "UPDATE_IMAGE", payload: p }), p;
        } finally {
          a.current.delete(v);
        }
      })();
      return a.current.set(v, u), u;
    },
    [t.images, t.lineageImages]
  );
  return m.useEffect(() => {
    (async () => {
      try {
        const _ = await em();
        n({ type: "SET_SETTINGS", payload: _ });
      } catch (_) {
        te.error("Failed to load settings", _);
      }
    })();
  }, []), m.useEffect(() => {
    d();
  }, [d]), m.useEffect(() => {
    const v = () => {
      i();
    }, _ = (g) => {
      const u = g.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: u }
      });
    }, j = (g) => {
      const u = g.detail;
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
    return window.addEventListener("meld-refresh", v), window.addEventListener("meld-scan-progress", _), window.addEventListener("meld-scan-finished", j), () => {
      window.removeEventListener("meld-refresh", v), window.removeEventListener("meld-scan-progress", _), window.removeEventListener("meld-scan-finished", j);
    };
  }, [i, t.scanStatus.progress.total]), m.useEffect(() => {
    i();
  }, [i]), /* @__PURE__ */ s.jsx(
    tm.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: i,
        loadMoreImages: c,
        refreshFavorites: d,
        deleteSelected: f,
        restoreSelected: h,
        updateSetting: w,
        fetchFullImageDetails: x
      },
      children: e
    }
  );
}, ve = () => {
  const e = m.useContext(tm);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, ht = (e, t = 200) => {
  if (!e.filename) return "";
  const n = encodeURIComponent, r = n(e.type || "output"), l = n(e.subfolder ?? "");
  return `/api/meld/view-thumb?${`filename=${n(e.filename)}&type=${r}&subfolder=${l}&size=${t}`}`;
}, si = (e) => {
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
}, ai = async () => {
  const e = await se.fetchApi("/meld/tags");
  return ce(e);
}, Cg = async (e) => {
  const t = await se.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  return ce(t);
}, Eg = async (e) => {
  const t = await se.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  });
  await ce(t);
}, Ng = async (e, t) => {
  const n = await se.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  await ce(n);
}, Mg = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await se.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, Ig = async (e, t, n = !1, r) => {
  const l = await se.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  try {
    return await ce(l);
  } catch (a) {
    return console.error("Failed to fetch folders", a), { folders: [], images: [], image_count: 0 };
  }
}, Tg = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await se.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  try {
    return await ce(l);
  } catch (a) {
    return console.error("Failed to fetch folder metadata", a), {};
  }
}, Lg = async (e, t, n) => {
  const r = await se.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  try {
    return (await ce(r)).count;
  } catch {
    return 0;
  }
}, Dg = async (e) => {
  const t = await se.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  await ce(t);
}, Pg = async () => {
  const e = await se.fetchApi("/meld/scan/cancel", {
    method: "POST"
  });
  await ce(e);
}, nm = () => {
  const { dispatch: e } = ve(), [t, n] = m.useState(() => {
    const N = localStorage.getItem("meld-import-config"), I = {
      type: "output",
      subfolder: "",
      custom_path: "",
      recursive: !0,
      auto_link_parent: !0,
      link_strategy: "new_only",
      tags: []
    };
    if (N)
      try {
        const R = JSON.parse(N);
        return { ...I, ...R, tags: [] };
      } catch {
        return I;
      }
    return I;
  });
  m.useEffect(() => {
    const { tags: N, ...I } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(I));
  }, [t]);
  const [r, l] = m.useState([]), [a, o] = m.useState([]), [i, c] = m.useState(0), [d, f] = m.useState(!1), [h, w] = m.useState([]), [x, v] = m.useState(""), [_, j] = m.useState(!1), [g, u] = m.useState(null), p = m.useRef(!1), y = (N) => {
    N.target === N.currentTarget && (p.current = !0);
  }, k = (N) => {
    N.target === N.currentTarget && p.current && e({ type: "CLOSE_MODAL" }), p.current = !1;
  };
  m.useEffect(() => {
    (async () => {
      try {
        const I = await Qh();
        n((R) => R.custom_path ? R : { ...R, custom_path: I });
      } catch (I) {
        te.error("Failed to fetch home directory:", I);
      }
    })();
  }, []), m.useEffect(() => {
    const N = new AbortController();
    return (async () => {
      const R = t.type === "custom" ? t.custom_path : t.subfolder;
      if (te.log(
        `loadFolders started. Path: "${R}", Type: "${t.type}"`
      ), t.type === "custom" && !R) {
        te.log("Custom path is empty, skipping load."), l([]), o([]), c(0);
        return;
      }
      f(!0);
      const T = R, C = t.type;
      try {
        te.log("Step 1: Fast load starting...");
        const L = await Ig(
          t.type,
          R,
          !0,
          N.signal
        );
        if (N.signal.aborted) {
          te.log("Step 1: Aborted.");
          return;
        }
        te.log(
          `Step 1 complete. Found ${L.folders.length} folders, ${L.images.length} images.`
        ), l(L.folders), o(L.images), c(null);
        const V = L.folders.map((F) => F.name);
        V.length > 0 && (te.log(
          `Step 2: Metadata fetch starting for ${V.length} folders...`
        ), Tg(
          C,
          T,
          V,
          N.signal
        ).then((F) => {
          if (N.signal.aborted) {
            te.log("Step 2: Aborted.");
            return;
          }
          te.log("Step 2: Metadata fetch complete."), l(
            (Q) => Q.map((de) => {
              const B = F[de.name];
              return B ? { ...de, count: B.count, preview: B.preview } : de;
            })
          );
        }).catch((F) => {
          F.name !== "AbortError" && te.error("Step 2: Metadata fetch failed:", F);
        })), te.log("Step 3: Path image count starting..."), Lg(C, T, N.signal).then((F) => {
          if (N.signal.aborted) {
            te.log("Step 3: Aborted.");
            return;
          }
          te.log(`Step 3: Path image count complete: ${F}`), c(F);
        }).catch((F) => {
          F.name !== "AbortError" && te.error("Step 3: Path image count failed:", F);
        });
      } catch (L) {
        if (L.name === "AbortError") {
          te.log("Request aborted.");
          return;
        }
        te.error("Failed to load folders:", L), l([]), o([]), c(0);
      } finally {
        N.signal.aborted || f(!1);
      }
    })(), () => {
      N.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const S = m.useCallback(async () => {
    j(!0);
    try {
      const N = await ai();
      w(N);
    } catch (N) {
      te.error("Failed to fetch tags:", N);
    } finally {
      j(!1);
    }
  }, []);
  m.useEffect(() => {
    S();
  }, [S]), tt({
    onEscape: m.useCallback(() => {
      g ? u(null) : e({ type: "CLOSE_MODAL" });
    }, [g, e])
  });
  const b = m.useMemo(() => h.filter(
    (N) => N.name.toLowerCase().includes(x.toLowerCase()) && !t.tags.includes(N.name)
  ), [h, x, t.tags]), E = (N) => {
    const I = N.trim();
    I && !t.tags.includes(I) && (n({ ...t, tags: [...t.tags, I] }), v(""));
  }, O = (N) => {
    n({ ...t, tags: t.tags.filter((I) => I !== N) });
  }, P = (N) => {
    N.key === "Enter" && x.trim() && (N.preventDefault(), E(x.trim()));
  }, D = async () => {
    try {
      await Dg(t), e({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !0,
          isFinished: !1,
          shouldCancel: !1,
          newCount: 0,
          progress: { current: 0, total: 0, phase: "registering" }
        }
      }), e({ type: "CLOSE_MODAL" });
    } catch (N) {
      te.error("Failed to start scan:", N), alert(`Failed to start scan: ${N}`);
    }
  }, U = (N) => {
    if (t.type === "custom") {
      const I = t.custom_path.includes("\\") ? "\\" : "/", R = t.custom_path.endsWith(I) ? `${t.custom_path}${N}` : `${t.custom_path}${I}${N}`;
      n({ ...t, custom_path: R });
    } else {
      const I = t.subfolder ? `${t.subfolder}/${N}` : N;
      n({ ...t, subfolder: I });
    }
  }, ee = () => {
    if (t.type === "custom") {
      const N = t.custom_path.includes("\\") ? "\\" : "/", I = t.custom_path.split(N);
      if (I.length > 1) {
        I.pop();
        let R = I.join(N);
        R === "" && N === "/" && (R = "/"), n({ ...t, custom_path: R });
      }
    } else {
      const N = t.subfolder.split("/");
      N.pop(), n({ ...t, subfolder: N.join("/") });
    }
  };
  return pe.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: y,
        onMouseUp: k,
        children: [
          /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--large",
              onClick: (N) => N.stopPropagation(),
              children: [
                /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ s.jsx("h2", { children: "Import Images" }),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => e({ type: "CLOSE_MODAL" }),
                      children: /* @__PURE__ */ s.jsx(ye, { size: 20 })
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
                          onChange: (N) => n({
                            ...t,
                            type: N.target.value,
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
                          onChange: (N) => n({ ...t, recursive: N.target.checked })
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
                          onChange: (N) => n({
                            ...t,
                            link_strategy: N.target.value,
                            auto_link_parent: N.target.value !== "none"
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
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((N) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        N,
                        /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => O(N),
                            children: /* @__PURE__ */ s.jsx(ye, { size: 12 })
                          }
                        )
                      ] }, N)) }),
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ s.jsx(En, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ s.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: x,
                            onChange: (N) => v(N.target.value),
                            onKeyDown: P
                          }
                        ),
                        x.trim() && !t.tags.includes(x.trim()) && /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => E(x),
                            children: /* @__PURE__ */ s.jsx(Ds, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: _ ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : b.length === 0 ? x && /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        x
                      ] }) : b.map((N) => /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => E(N.name),
                          children: N.name
                        },
                        N.id
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
                          /* @__PURE__ */ s.jsx(Jr, { size: 16 }),
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
                          onClick: ee,
                          children: [
                            /* @__PURE__ */ s.jsx(Ku, { size: 16 }),
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
                          onChange: (N) => n({ ...t, custom_path: N.target.value }),
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
                      r.map((N) => /* @__PURE__ */ s.jsxs(
                        "div",
                        {
                          className: "meld-folder-item",
                          onClick: () => U(N.name),
                          children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-folder-icon-wrapper", children: N.preview ? /* @__PURE__ */ s.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: ht(N.preview, 64),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ s.jsx(bh, { size: 16 }) }),
                            /* @__PURE__ */ s.jsx("span", { className: "meld-folder-name", children: N.name }),
                            /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${N.count === null ? "meld-folder-count--loading" : ""}`,
                                children: N.count !== null ? `${N.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ s.jsx(ni, { size: 14 })
                          ]
                        },
                        N.name
                      )),
                      a.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-browser-image-grid", children: a.map((N) => /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => u(N),
                          children: /* @__PURE__ */ s.jsx(
                            "img",
                            {
                              src: ht(N, 120),
                              alt: N.filename,
                              title: N.filename
                            }
                          )
                        },
                        N.filename
                      )) })
                    ] }) })
                  ] })
                ] }) })
              ]
            }
          ),
          g && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (N) => {
                N.stopPropagation(), u(null);
              },
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-import-preview-content",
                  onClick: (N) => N.stopPropagation(),
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-import-preview-close",
                          onClick: () => u(null),
                          children: /* @__PURE__ */ s.jsx(ye, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "img",
                        {
                          src: ht(g, 400),
                          alt: g.filename
                        }
                      )
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-import-preview-info", children: g.filename })
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
}, Rg = ({
  imageIds: e,
  onSuccess: t,
  onClose: n
}) => {
  const [r, l] = m.useState("zip"), [a, o] = m.useState(!1), [i, c] = m.useState(!1), d = m.useRef(!1), f = (x) => {
    x.target === x.currentTarget && (d.current = !0);
  }, h = (x) => {
    x.target === x.currentTarget && d.current && (i || n()), d.current = !1;
  };
  tt({
    onEscape: () => {
      i || n();
    }
  });
  const w = async () => {
    c(!0);
    try {
      if (r === "zip")
        await ng(e, a);
      else
        for (const x of e)
          await rg(x, a), await new Promise((v) => setTimeout(v, 200));
      n(), t == null || t();
    } catch (x) {
      console.error("Download failed:", x), alert("Failed to download images.");
    } finally {
      c(!1);
    }
  };
  return pe.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: f,
        onMouseUp: h,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (x) => x.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(Zr, { size: 18 }),
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
                children: /* @__PURE__ */ s.jsx(ye, { size: 20 })
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
                        onChange: (x) => o(x.target.checked),
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
                  /* @__PURE__ */ s.jsx(Zr, { size: 16 }),
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
}, rm = async () => {
  const e = await se.fetchApi("/meld/workflows");
  return ce(e);
}, lm = async (e) => {
  const t = await se.fetchApi(
    `/meld/workflow/raw?name=${encodeURIComponent(e)}`
  );
  return ce(t);
}, oi = () => ({ executeWorkflow: m.useCallback(
  async (t, n, r, l) => {
    var x, v, _, j, g, u, p;
    console.log("[Meld] executeWorkflow called:", {
      workflowName: t,
      imageId: n.id,
      maskFilename: r,
      targetLoaderNodeId: l
    });
    const a = await lm(t);
    console.log("[Meld] Workflow fetched:", t);
    let o = l || null, i = null, c = !1;
    const d = (y) => {
      if (!y) return !1;
      const k = y.replace(/\s+/g, "");
      return k === "MeldImageLoader" || k === "LoadImage";
    };
    if (a.nodes && Array.isArray(a.nodes)) {
      if (c = !0, !o) {
        const k = a.nodes.find(
          (S) => d(S.type)
        );
        k && (o = String(k.id));
      }
      const y = a.nodes.find(
        (k) => {
          var S;
          return ((S = k.type) == null ? void 0 : S.replace(/\s+/g, "")) === "LoadImageMask";
        }
      );
      y && (i = String(y.id));
    } else {
      if (!o)
        for (const y in a) {
          const k = a[y];
          if (d(k.class_type)) {
            o = y;
            break;
          }
        }
      for (const y in a)
        if (((x = a[y].class_type) == null ? void 0 : x.replace(/\s+/g, "")) === "LoadImageMask") {
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
    let f = n.filename;
    if (n.subfolder && (f = `${n.subfolder}/${n.filename}`), n.type && n.type !== "input" && (f = `${f} [${n.type}]`), c) {
      const y = window.app, k = t.replace(/\.json$/i, "");
      let S = !1;
      const b = document.querySelectorAll(".workflow-tab");
      for (const P of Array.from(b)) {
        const D = P.querySelector(".workflow-label"), U = ((v = D == null ? void 0 : D.textContent) == null ? void 0 : v.trim()) || ((_ = P.textContent) == null ? void 0 : _.trim()) || "";
        if (U === k || U === t || U.startsWith(`${k} `) || U.startsWith(`${k}•`)) {
          P.click(), S = !0;
          break;
        }
      }
      S || await y.loadGraphData(a, !0, !0, t), await new Promise((P) => setTimeout(P, 200));
      const E = y.graph._nodes;
      console.log("[Meld] Active graph nodes count:", E.length);
      const O = E.find(
        (P) => String(P.id) === o || d(P.type)
      );
      if (O) {
        const P = (j = O.widgets) == null ? void 0 : j.find((D) => D.name === "image");
        console.log("[Meld] Updating loader node widget:", {
          nodeId: O.id,
          type: O.type,
          imagePath: f
        }), P && (P.value = f, typeof P.callback == "function" && P.callback(f));
      } else
        console.warn(
          "[Meld] Loader node (MeldImageLoader/LoadImage) not found in active graph after loading"
        );
      if (r) {
        const P = E.find(
          (D) => {
            var U;
            return String(D.id) === i || ((U = D.type) == null ? void 0 : U.replace(/\s+/g, "")) === "LoadImageMask";
          }
        );
        if (console.log("[Meld] Updating mask node widget:", {
          nodeId: P == null ? void 0 : P.id,
          maskFilename: r
        }), P) {
          const D = (g = P.widgets) == null ? void 0 : g.find(
            (ee) => ee.name === "image"
          );
          D && (D.value = `${r} [temp]`);
          const U = (u = P.widgets) == null ? void 0 : u.find(
            (ee) => ee.name === "channel"
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
      } catch (P) {
        throw console.error("Failed to queue workflow:", P), new Error(
          "Failed to queue workflow. Check the console for details."
        );
      }
    }
    const h = JSON.parse(JSON.stringify(a));
    h[o].inputs.image = f, r && i && (h[i].inputs.image = `${r} [temp]`, h[i].inputs.channel = "red");
    const w = await se.fetchApi("/prompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: h,
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
function Og(e) {
  let t = e.filename;
  return e.subfolder && (t = `${e.subfolder}/${e.filename}`), e.type && e.type !== "input" && (t = `${t} [${e.type}]`), t;
}
function tl(e, t) {
  var c, d;
  const n = window.app;
  if (!(n != null && n.graph))
    return { ok: !1, reason: "no_app_graph" };
  const r = Og(e), l = (f) => {
    if (!f) return !1;
    const h = f.replace(/\s+/g, "").toLowerCase();
    return h === "meldimageloader" || h === "loadimage";
  }, a = n.graph._nodes.filter(
    (f) => l(f.type)
  );
  if (a.length === 0)
    return { ok: !1, reason: "no_loader_node" };
  let o = a[0];
  if (t) {
    const f = a.find(
      (h) => String(h.id) === t
    );
    f && (o = f);
  }
  const i = o.widgets.find(
    (f) => f.name === "image"
  );
  return i && (i.value = r, typeof i.callback == "function" && i.callback(r)), (d = (c = n.graph).afterChange) == null || d.call(c), n.graph.setDirtyCanvas(!0, !0), { ok: !0 };
}
const zg = () => {
  const { dispatch: e } = ve();
  return { injectMaskToGraph: m.useCallback(
    (n, r) => {
      var f, h;
      console.log("[Meld-Debug] injectMaskToGraph called with:", r), tl(n);
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
      return d && (d.value = "red", typeof d.callback == "function" && d.callback("red")), (h = (f = l.graph).afterChange) == null || h.call(f), l.graph.setDirtyCanvas(!0, !0), !0;
    },
    [e]
  ) };
};
function oa(e, t) {
  return {
    data: new Uint8ClampedArray(e * t).fill(0),
    width: e,
    height: t
  };
}
function Ag(e, t, n = 255) {
  const { width: r, height: l } = e, a = document.createElement("canvas");
  a.width = r, a.height = l;
  const o = a.getContext("2d", { willReadFrequently: !0 });
  if (!o) return e;
  const i = lo(e, [255, 255, 255], 255);
  o.putImageData(i, 0, 0), o.fillStyle = n > 0 ? "white" : "black", o.beginPath(), t(o), o.fill();
  const c = o.getImageData(0, 0, r, l), d = new Uint8ClampedArray(r * l);
  for (let f = 0; f < r * l; f++)
    d[f] = c.data[f * 4] > 128 ? 255 : 0;
  return { ...e, data: d };
}
function lo(e, t = [255, 255, 255], n = 255) {
  const { data: r, width: l, height: a } = e, o = new ImageData(l, a), i = o.data;
  for (let c = 0; c < r.length; c++) {
    const d = r[c], f = c * 4;
    d > 0 ? (i[f] = t[0], i[f + 1] = t[1], i[f + 2] = t[2], i[f + 3] = n) : (i[f] = 0, i[f + 1] = 0, i[f + 2] = 0, i[f + 3] = 0);
  }
  return o;
}
function Fg(e) {
  return e.data.every((t) => t === 0);
}
const kc = (e) => e === "rect" || e === "ellipse" || e === "lasso", gs = ({
  imageId: e,
  mode: t,
  sequenceData: n,
  onSuccess: r,
  onClose: l
}) => {
  const { state: a, dispatch: o } = ve(), i = a.images.find(($) => $.id === e), { injectMaskToGraph: c } = zg(), { executeWorkflow: d } = oi();
  tt({ onEscape: l });
  const f = m.useRef(null), h = m.useRef(null), w = m.useRef(null), x = m.useRef(null), [v, _] = m.useState(!1), [j, g] = m.useState(() => {
    const $ = localStorage.getItem("meld-mask-tool");
    return kc($) ? $ : "rect";
  });
  m.useEffect(() => {
    kc(j) && localStorage.setItem("meld-mask-tool", j);
  }, [j]);
  const [u, p] = m.useState({ x: 0, y: 0 }), [y, k] = m.useState({ x: 0, y: 0 }), [S, b] = m.useState([]), [E, O] = m.useState(null), [P, D] = m.useState(!1), [U, ee] = m.useState(1), [N, I] = m.useState({ x: 0, y: 0 }), [R, T] = m.useState(!1), [C, L] = m.useState(!1), V = m.useRef(null), F = m.useCallback(() => {
    const $ = w.current, Y = h.current;
    if (!$ || !Y) return null;
    const A = Y.getBoundingClientRect(), z = $.naturalWidth, M = $.naturalHeight;
    if (!z || !M) return null;
    const K = z / M, q = A.width / A.height;
    let Z, ae, ie = 0, Ee = 0;
    return K > q ? (Z = A.width, ae = A.width / K, Ee = (A.height - ae) / 2) : (ae = A.height, Z = A.height * K, ie = (A.width - Z) / 2), {
      left: ie,
      top: Ee,
      width: Z,
      height: ae
    };
  }, []), Q = m.useCallback(
    ($, Y, A, z) => {
      if (!$) return Y;
      const M = $.getBoundingClientRect(), K = M.width / 2, q = M.height / 2, Z = {
        x: (K - Y.x) / A,
        y: (q - Y.y) / A
      };
      return { x: K - Z.x * z, y: q - Z.y * z };
    },
    []
  ), de = m.useCallback(() => {
    ee(($) => {
      const Y = Math.min($ * 1.2, 20);
      return I(
        (A) => Q(h.current, A, $, Y)
      ), Y;
    });
  }, [Q]), B = m.useCallback(() => {
    ee(($) => {
      const Y = Math.max(0.1, $ / 1.2);
      return I(
        (A) => Q(h.current, A, $, Y)
      ), Y;
    });
  }, [Q]), J = m.useCallback(() => {
    const $ = f.current;
    if (!$) return;
    const Y = $.getContext("2d");
    if (!Y) return;
    Y.clearRect(0, 0, $.width, $.height);
    const A = getComputedStyle(document.documentElement), z = A.getPropertyValue("--comfy-input-bg-active") || A.getPropertyValue("--comfy-input-bg") || A.getPropertyValue("--bg-color") || "var(--comfy-input-bg)", M = F();
    if (x.current && M && (Y.save(), Y.globalAlpha = 0.5, Y.drawImage(
      x.current,
      M.left,
      M.top,
      M.width,
      M.height
    ), Y.restore()), v) {
      const K = Math.min(u.x, y.x), q = Math.min(u.y, y.y), Z = Math.abs(u.x - y.x), ae = Math.abs(u.y - y.y);
      if (Y.save(), Y.globalAlpha = 0.3, Y.fillStyle = z, Y.strokeStyle = "white", Y.lineWidth = 2, Y.setLineDash([5, 5]), Y.beginPath(), j === "rect")
        Y.rect(K, q, Z, ae);
      else if (j === "ellipse") {
        const ie = K + Z / 2, Ee = q + ae / 2;
        Y.ellipse(ie, Ee, Z / 2, ae / 2, 0, 0, 2 * Math.PI);
      } else if (j === "lasso" && S.length > 1) {
        Y.moveTo(S[0].x, S[0].y);
        for (let ie = 1; ie < S.length; ie++)
          Y.lineTo(S[ie].x, S[ie].y);
        Y.closePath();
      }
      Y.fill(), Y.globalAlpha = 1, Y.stroke(), Y.restore();
    }
  }, [
    v,
    u,
    y,
    j,
    S,
    F
  ]), [H, fe] = m.useState([]), be = m.useMemo(() => H.length > 0 ? H[H.length - 1] : w.current ? oa(
    w.current.naturalWidth,
    w.current.naturalHeight
  ) : null, [H]);
  m.useEffect(() => {
    var $;
    ($ = w.current) != null && $.naturalWidth && H.length === 0 && fe([
      oa(
        w.current.naturalWidth,
        w.current.naturalHeight
      )
    ]);
  }, [H.length]);
  const le = m.useRef(!1), Le = m.useRef(0), ne = ($) => {
    $.target === $.currentTarget && (le.current = !0);
  }, Be = ($) => {
    $.target === $.currentTarget && le.current && !v && l(), le.current = !1;
  };
  m.useEffect(() => {
    if (!be) return;
    x.current || (x.current = document.createElement("canvas"));
    const $ = x.current;
    $.width = be.width, $.height = be.height;
    const Y = $.getContext("2d");
    if (!Y) return;
    const A = lo(be, [255, 255, 255], 255);
    Y.putImageData(A, 0, 0), J();
  }, [be, J]), m.useEffect(() => {
    const $ = h.current;
    if (!$) return;
    const Y = (A) => {
      A.preventDefault();
      const z = A.deltaY > 0 ? 1 / 1.1 : 1.1;
      ee((M) => {
        const K = Math.min(Math.max(0.1, M * z), 20);
        return I((q) => {
          const Z = $.getBoundingClientRect(), ae = A.clientX - Z.left, ie = A.clientY - Z.top, Ee = {
            x: (ae - q.x) / M,
            y: (ie - q.y) / M
          };
          return {
            x: ae - Ee.x * K,
            y: ie - Ee.y * K
          };
        }), K;
      });
    };
    return $.addEventListener("wheel", Y, { passive: !1 }), () => $.removeEventListener("wheel", Y);
  }, []), m.useEffect(() => {
    if (!C) return;
    const $ = (A) => {
      if (V.current) {
        const z = A.clientX - V.current.clientX, M = A.clientY - V.current.clientY;
        I({
          x: V.current.panX + z,
          y: V.current.panY + M
        });
      }
    }, Y = () => {
      L(!1), V.current = null;
    };
    return window.addEventListener("mousemove", $), window.addEventListener("mouseup", Y), () => {
      window.removeEventListener("mousemove", $), window.removeEventListener("mouseup", Y);
    };
  }, [C]), m.useEffect(() => {
    const $ = () => {
      h.current && f.current && (f.current.width = h.current.clientWidth, f.current.height = h.current.clientHeight, J());
    }, Y = new ResizeObserver($);
    return h.current && Y.observe(h.current), $(), () => Y.disconnect();
  }, [J]);
  const Fe = ($) => {
    var ie;
    const Y = $.button === 2, A = $.button === 1, z = R && $.button === 0;
    if (Y || A || z) {
      $.preventDefault(), $.stopPropagation(), V.current = {
        panX: N.x,
        panY: N.y,
        clientX: $.clientX,
        clientY: $.clientY
      }, L(!0);
      return;
    }
    if ($.button !== 0 || v || P || Date.now() - Le.current < 100)
      return;
    $.preventDefault();
    const M = F(), K = (ie = h.current) == null ? void 0 : ie.getBoundingClientRect();
    if (!M || !K) return;
    _(!0);
    const q = {
      x: ($.clientX - K.left - N.x) / U,
      y: ($.clientY - K.top - N.y) / U
    }, Z = Math.max(
      M.left,
      Math.min(q.x, M.left + M.width)
    ), ae = Math.max(
      M.top,
      Math.min(q.y, M.top + M.height)
    );
    p({ x: Z, y: ae }), k({ x: Z, y: ae }), b(j === "lasso" ? [{ x: Z, y: ae }] : []), O(null);
  };
  m.useEffect(() => {
    if (!v) return;
    const $ = (A) => {
      var ae;
      const z = F(), M = (ae = h.current) == null ? void 0 : ae.getBoundingClientRect();
      if (!z || !M) return;
      const K = {
        x: (A.clientX - M.left - N.x) / U,
        y: (A.clientY - M.top - N.y) / U
      }, q = Math.max(
        z.left,
        Math.min(K.x, z.left + z.width)
      ), Z = Math.max(
        z.top,
        Math.min(K.y, z.top + z.height)
      );
      k({ x: q, y: Z }), j === "lasso" && b((ie) => [...ie, { x: q, y: Z }]);
    }, Y = (A) => {
      var K;
      const z = F(), M = (K = h.current) == null ? void 0 : K.getBoundingClientRect();
      if (z && M && be && w.current) {
        const q = {
          x: (A.clientX - M.left - N.x) / U,
          y: (A.clientY - M.top - N.y) / U
        }, Z = Math.max(
          z.left,
          Math.min(q.x, z.left + z.width)
        ), ae = Math.max(
          z.top,
          Math.min(q.y, z.top + z.height)
        ), ie = Math.min(u.x, Z), Ee = Math.min(u.y, ae), qe = Math.abs(u.x - Z), Re = Math.abs(u.y - ae), vt = j === "lasso";
        if (qe > 5 || Re > 5 || vt && S.length > 2) {
          const Rm = w.current.naturalWidth, Om = w.current.naturalHeight, In = Rm / z.width, Tn = Om / z.height, zm = Ag(be, (pn) => {
            if (j === "rect") {
              const Ln = (ie - z.left) * In, Qt = (Ee - z.top) * Tn, il = qe * In, cl = Re * Tn;
              pn.rect(Ln, Qt, il, cl);
            } else if (j === "ellipse") {
              const Ln = (ie - z.left) * In, Qt = (Ee - z.top) * Tn, il = qe * In, cl = Re * Tn, Am = Ln + il / 2, Fm = Qt + cl / 2;
              pn.ellipse(
                Am,
                Fm,
                il / 2,
                cl / 2,
                0,
                0,
                2 * Math.PI
              );
            } else if (j === "lasso" && S.length > 2) {
              const Ln = S[0];
              pn.moveTo(
                (Ln.x - z.left) * In,
                (Ln.y - z.top) * Tn
              );
              for (let Qt = 1; Qt < S.length; Qt++)
                pn.lineTo(
                  (S[Qt].x - z.left) * In,
                  (S[Qt].y - z.top) * Tn
                );
              pn.closePath();
            }
          });
          fe((pn) => [...pn, zm]);
        }
      }
      Le.current = Date.now(), _(!1), b([]);
    };
    return window.addEventListener("mousemove", $), window.addEventListener("mouseup", Y), () => {
      window.removeEventListener("mousemove", $), window.removeEventListener("mouseup", Y);
    };
  }, [
    v,
    u.x,
    u.y,
    F,
    be,
    j,
    S,
    N.x,
    N.y,
    U
  ]);
  const it = m.useCallback(() => {
    H.length > 1 && fe(($) => $.slice(0, -1));
  }, [H.length]);
  m.useEffect(() => {
    const $ = (z) => {
      if (!z) return !1;
      const M = z, K = M.tagName;
      return K === "INPUT" || K === "TEXTAREA" || K === "BUTTON" || K === "SELECT" || K === "A" || M.isContentEditable || M.tabIndex != null && M.tabIndex >= 0;
    }, Y = (z) => {
      z.code === "Space" && !z.repeat && ($(z.target) || (z.preventDefault(), T(!0))), (z.metaKey || z.ctrlKey) && z.key.toLowerCase() === "z" && !z.shiftKey ? (z.preventDefault(), z.stopPropagation(), z.stopImmediatePropagation(), it()) : z.key === "Escape" && (z.preventDefault(), z.stopPropagation(), z.stopImmediatePropagation(), l(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    }, A = (z) => {
      z.code === "Space" && ($(z.target) || (z.preventDefault(), T(!1)));
    };
    return window.addEventListener("keydown", Y, { capture: !0 }), window.addEventListener("keyup", A, { capture: !0 }), () => {
      window.removeEventListener("keydown", Y, { capture: !0 }), window.removeEventListener("keyup", A, { capture: !0 });
    };
  }, [it, l]);
  const Bt = () => {
    if (w.current) {
      const $ = oa(
        w.current.naturalWidth,
        w.current.naturalHeight
      );
      fe((Y) => [...Y, $]);
    }
  }, ur = async () => {
    if (!be || !w.current) return null;
    D(!0);
    try {
      const { width: $, height: Y } = be, A = document.createElement("canvas");
      A.width = $, A.height = Y;
      const z = A.getContext("2d");
      if (!z) return null;
      const M = lo(be, [255, 255, 255], 255);
      z.putImageData(M, 0, 0);
      const K = await new Promise(
        (qe) => A.toBlob(qe, "image/png")
      );
      if (!K) return null;
      const Z = `meld_mask_${Date.now()}.png`, ae = new File([K], Z, { type: "image/png" }), ie = new FormData();
      ie.append("image", ae), ie.append("type", "temp"), ie.append("overwrite", "true");
      const Ee = await se.fetchApi("/upload/image", {
        method: "POST",
        body: ie
      });
      return Ee.ok ? (await Ee.json()).name : null;
    } catch ($) {
      return console.error("[Meld] Error uploading mask:", $), null;
    } finally {
      D(!1);
    }
  }, mr = async () => {
    if (!i) return;
    const $ = await ur();
    $ && c(i, $) && (l(), o({ type: "CLOSE_VIEWER" }), r == null || r());
  }, ol = async () => {
    if (!i) return;
    const $ = await ur();
    $ && (t === "run_sequence" && n ? (await d(
      n.workflowName,
      i,
      $,
      n.targetLoaderNodeId
    ), r == null || r()) : o({
      type: "OPEN_MODAL",
      payload: {
        type: "workflow_selection",
        images: [i],
        maskFilename: $,
        onSuccess: r
      }
    }));
  }, fr = m.useMemo(
    () => be && !Fg(be),
    [be]
  );
  return i ? /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onMouseDown: ne,
      onMouseUp: Be,
      role: "presentation",
      children: /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: "meld-modal-content meld-mask-editor-modal",
          onClick: ($) => $.stopPropagation(),
          children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
              /* @__PURE__ */ s.jsx("h3", { children: "Select Mask Area" }),
              /* @__PURE__ */ s.jsx("button", { className: "meld-modal-close", onClick: l, type: "button", children: /* @__PURE__ */ s.jsx(ye, { size: 20 }) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-mask-editor-tool-selector", children: [
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${j === "rect" ? "active" : ""}`,
                    onClick: () => g("rect"),
                    type: "button",
                    title: "Rectangle Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(Xu, { size: 18 }),
                      /* @__PURE__ */ s.jsx("span", { children: "Rect" })
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${j === "ellipse" ? "active" : ""}`,
                    onClick: () => g("ellipse"),
                    type: "button",
                    title: "Ellipse Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(_h, { size: 18 }),
                      /* @__PURE__ */ s.jsx("span", { children: "Ellipse" })
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${j === "lasso" ? "active" : ""}`,
                    onClick: () => g("lasso"),
                    type: "button",
                    title: "Lasso Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(Eh, { size: 18 }),
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
                    children: /* @__PURE__ */ s.jsx(Bh, { size: 18 })
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: "meld-mask-tool-btn",
                    onClick: () => {
                      ee(1), I({ x: 0, y: 0 });
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
                      Math.round(U * 100),
                      "%"
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-mask-tool-btn",
                    onClick: de,
                    type: "button",
                    title: "Zoom In",
                    "aria-label": "Zoom In",
                    children: /* @__PURE__ */ s.jsx(Vh, { size: 18 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  ref: h,
                  className: "meld-mask-editor-canvas-container",
                  onMouseDown: Fe,
                  onContextMenu: ($) => $.preventDefault(),
                  role: "presentation",
                  style: {
                    cursor: C ? "grabbing" : R ? "grab" : "crosshair"
                  },
                  children: /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: "meld-mask-editor-transform-layer",
                      style: {
                        transform: `translate(${N.x}px, ${N.y}px) scale(${U})`,
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
                            ref: w,
                            src: si(i),
                            alt: "To be masked",
                            className: "meld-mask-editor-image",
                            onDragStart: ($) => $.preventDefault()
                          }
                        ),
                        /* @__PURE__ */ s.jsx(
                          "canvas",
                          {
                            ref: f,
                            className: "meld-mask-editor-canvas",
                            onDragStart: ($) => $.preventDefault()
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
                      onClick: mr,
                      disabled: !fr || P,
                      type: "button",
                      children: [
                        P ? /* @__PURE__ */ s.jsx(vc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(ti, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Send" })
                      ]
                    }
                  ) : /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--run",
                      onClick: ol,
                      disabled: !fr || P,
                      type: "button",
                      children: [
                        P ? /* @__PURE__ */ s.jsx(vc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(Jr, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: t === "run_sequence" && n ? n.currentIndex === n.totalCount - 1 ? "Queue (Last)" : `Queue (${n.currentIndex + 1}/${n.totalCount})` : "Queue" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--undo",
                      onClick: it,
                      disabled: H.length <= 1 || P,
                      type: "button",
                      title: "Undo last area",
                      children: [
                        /* @__PURE__ */ s.jsx(Wh, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Undo" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--cancel",
                      onClick: Bt,
                      disabled: !fr || P,
                      type: "button",
                      title: "Clear all areas",
                      children: [
                        /* @__PURE__ */ s.jsx(ye, { size: 16 }),
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
}, sm = (e) => {
  const t = /(?:[^\s"']+|"[^"]*"|'[^']*')+/g;
  return e.trim().match(t) || [];
}, Nl = (e) => e.replace(/^["']|["']$/g, ""), Wg = (e) => e.trim() ? sm(e).every((n) => !!(n === "next" || n === "prev" || n === "delete" || n.startsWith("tag:") && n.length > 4 || n.startsWith("-tag:") && n.length > 5 || n.startsWith("tag-toggle:") && n.length > 11 || n.startsWith("lt:") && n.length > 3)) : !0, $g = (e, t) => {
  const n = sm(e), r = {
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
      const o = Nl(a.substring(4));
      o && !r.addTags.includes(o) && r.addTags.push(o);
    } else if (a.startsWith("-tag:")) {
      const o = Nl(a.substring(5));
      o && !r.removeTags.includes(o) && r.removeTags.push(o);
    } else if (a.startsWith("tag-toggle:")) {
      const o = Nl(a.substring(11));
      o && (t ? l.includes(o) ? r.removeTags.includes(o) || r.removeTags.push(o) : r.addTags.includes(o) || r.addTags.push(o) : r.toggleTags.includes(o) || r.toggleTags.push(o));
    } else if (a === "next")
      r.moveNext = !0;
    else if (a === "prev")
      r.movePrev = !0;
    else if (a === "delete")
      r.isDeleted = !0;
    else if (a.startsWith("lt:")) {
      const o = Nl(a.substring(3));
      o && (r.sendToLtSlot = o);
    }
  return r;
}, Ug = () => {
  const { state: e, dispatch: t, updateSetting: n } = ve(), [r, l] = m.useState("Gallery"), [a, o] = m.useState({
    ...e.settings
  }), [i, c] = m.useState(
    {}
  ), [d, f] = m.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [h, w] = m.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [x, v] = m.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [_, j] = m.useState(e.settings["viewer.thumbnail_window_size"].toString()), [g, u] = m.useState(e.settings["gallery.trash_retention_days"].toString()), [p, y] = m.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [k, S] = m.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [b, E] = m.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [O, P] = m.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    D,
    U
  ] = m.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    ee,
    N
  ] = m.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), [I, R] = m.useState(
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
      const J = Object.keys(a).filter(
        (H) => a[H] !== e.settings[H] && !i[H]
      );
      if (J.length > 0)
        for (const H of J)
          await n(H, a[H]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (J, H) => {
      o((fe) => ({
        ...fe,
        [J]: !H
      }));
    },
    handleNumberChange: (J, H, fe, be) => {
      J === "gallery.initial_load_count" ? f(H) : J === "gallery.max_load_count" ? w(H) : J === "gallery.lineage_max_depth" ? v(H) : J === "viewer.thumbnail_window_size" ? j(H) : J === "gallery.trash_retention_days" ? u(H) : J === "gallery.auto_link_phash_threshold" ? y(H) : J === "gallery.suggest_phash_threshold" ? S(H) : J === "viewer.details.max_positive_prompt_lines" ? E(H) : J === "viewer.details.max_negative_prompt_lines" ? P(H) : J === "fullscreen.details.max_positive_prompt_lines" ? U(H) : J === "fullscreen.details.max_negative_prompt_lines" ? N(H) : J === "sidebar.thumbnail_size" && R(H);
      const le = Number.parseInt(H, 10);
      if (!Number.isNaN(le)) {
        let Le = le;
        fe !== void 0 && Le < fe && (Le = fe), be !== void 0 && Le > be && (Le = be), o((ne) => ({
          ...ne,
          [J]: Le
        }));
      }
    },
    handleNumberBlur: (J) => {
      J.key === "gallery.initial_load_count" ? f(
        a["gallery.initial_load_count"].toString()
      ) : J.key === "gallery.max_load_count" ? w(a["gallery.max_load_count"].toString()) : J.key === "gallery.lineage_max_depth" ? v(
        a["gallery.lineage_max_depth"].toString()
      ) : J.key === "viewer.thumbnail_window_size" ? j(
        a["viewer.thumbnail_window_size"].toString()
      ) : J.key === "gallery.trash_retention_days" ? u(
        a["gallery.trash_retention_days"].toString()
      ) : J.key === "gallery.auto_link_phash_threshold" ? y(
        a["gallery.auto_link_phash_threshold"].toString()
      ) : J.key === "gallery.suggest_phash_threshold" ? S(
        a["gallery.suggest_phash_threshold"].toString()
      ) : J.key === "viewer.details.max_positive_prompt_lines" ? E(
        a["viewer.details.max_positive_prompt_lines"].toString()
      ) : J.key === "viewer.details.max_negative_prompt_lines" ? P(
        a["viewer.details.max_negative_prompt_lines"].toString()
      ) : J.key === "fullscreen.details.max_positive_prompt_lines" ? U(
        a["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : J.key === "fullscreen.details.max_negative_prompt_lines" ? N(
        a["fullscreen.details.max_negative_prompt_lines"].toString()
      ) : J.key === "sidebar.thumbnail_size" && R(a["sidebar.thumbnail_size"].toString());
    },
    handleResetShortcuts: () => {
      o((J) => ({
        ...J,
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
              await fg(), t({
                type: "SHOW_TOAST",
                payload: "Thumbnail cache cleared"
              });
            } catch (J) {
              console.error("Failed to clear thumbnail cache:", J), t({
                type: "SET_ERROR",
                payload: "Failed to clear thumbnail cache"
              });
            }
          }
        }
      });
    },
    validateShortcut: (J) => Wg(J),
    // Input states
    initialLoadCountInput: d,
    maxLoadCountInput: h,
    lineageMaxDepthInput: x,
    thumbnailWindowSizeInput: _,
    trashRetentionDaysInput: g,
    autoLinkPhashThresholdInput: p,
    suggestPhashThresholdInput: k,
    maxPositivePromptLinesInput: b,
    maxNegativePromptLinesInput: O,
    fullscreenMaxPositivePromptLinesInput: D,
    fullscreenMaxNegativePromptLinesInput: ee,
    thumbnailSizeInput: I
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
] }), Vg = ({
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
function am() {
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
function om(e) {
  return /* @__PURE__ */ s.jsxs(Lt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h12" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14 8l4 4-4 4" })
  ] });
}
function im(e) {
  return /* @__PURE__ */ s.jsxs(Lt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M4.5 5.5h7l2 2h6v11a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 15h3" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 12l3 0" }),
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 10.5l3 1.5-3 1.5" })
  ] });
}
function cm(e) {
  return /* @__PURE__ */ s.jsxs(Lt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16 8l4 4-4 4" })
  ] });
}
function dm(e) {
  return /* @__PURE__ */ s.jsxs(Lt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx(am, {})
  ] });
}
function um(e) {
  return /* @__PURE__ */ s.jsxs(Lt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 9l3 3-3 3" })
  ] });
}
function mm(e) {
  return /* @__PURE__ */ s.jsxs(Lt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 9l3 3-3 3" }),
    /* @__PURE__ */ s.jsx(am, {})
  ] });
}
function fm(e) {
  return /* @__PURE__ */ s.jsxs(Lt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "6", width: "12.5", height: "10.5", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M7.5 13l2-2 2 2 2.5-3 2.5 3" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 17.5l5-5" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16.5 19.5l3-3" })
  ] });
}
function pm(e) {
  return /* @__PURE__ */ s.jsxs(Lt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M20 12l-8 8-9-9v-5a2 2 0 0 1 2-2h5z" }),
    /* @__PURE__ */ s.jsx("circle", { cx: "7.5", cy: "8.5", r: "1" })
  ] });
}
function hm(e) {
  return /* @__PURE__ */ s.jsxs(Lt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 4.5h-8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9l-3-4z" }),
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 4.5v4h4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 11h6" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 15h6" })
  ] });
}
function gm(e) {
  return /* @__PURE__ */ s.jsxs(Lt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M7 7h10" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 7v-2h6v2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 7l1 12h6l1-12" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 13.5a3.5 3.5 0 1 1-1.2-2.6" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 9.5v3h-3" })
  ] });
}
const ym = [
  { id: "", label: "None", icon: null },
  {
    id: "add_unified_loader",
    label: "Add Unified Loader",
    icon: om
  },
  {
    id: "send_to_workflow",
    label: "Send to Workflow",
    icon: um
  },
  {
    id: "send_to_workflow_mask",
    label: "Send to Workflow (Mask)",
    icon: mm
  },
  { id: "queue_workflow", label: "Queue Workflow", icon: cm },
  {
    id: "queue_workflow_mask",
    label: "Queue Workflow (Mask)",
    icon: dm
  },
  {
    id: "restore_full_workflow",
    label: "Restore Full Workflow",
    icon: im
  },
  { id: "edit_tags", label: "Edit Tags", icon: pm },
  { id: "edit_notes", label: "Edit Notes", icon: hm },
  {
    id: "edit_source_image",
    label: "Edit Source Image",
    icon: fm
  },
  {
    id: "restore_image",
    label: "Restore Image (Trash)",
    icon: gm
  },
  { id: "delete_or_trash", label: "Delete / Trash", icon: Ut }
], Bg = ({
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
            onChange: (d) => t((f) => ({
              ...f,
              [`gallery.quick_shortcut.${c}`]: d.target.value
            })),
            children: ym.map((d) => /* @__PURE__ */ s.jsx("option", { value: d.id, children: d.label }, d.id))
          }
        )
      },
      c
    ))
  ] })
] }), Qg = () => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list meld-information-tab", children: [
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
] }), Hg = ({
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
              onChange: (f) => {
                t((h) => ({
                  ...h,
                  [c]: f.target.value
                }));
              },
              onBlur: () => {
                const f = l(
                  e[c] || ""
                );
                r((h) => ({
                  ...h,
                  [c]: !f
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
}, Kg = ({
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
  suggestPhashThresholdInput: f
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
            onChange: (h) => l((w) => ({
              ...w,
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
      X,
      {
        label: "Source Suggestion Threshold (%)",
        description: "Minimum similarity percentage for showing candidates in manual 'Add Source' dialog (0-100). Default: 82%. Permissive enough to find ancestors.",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: f,
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
] }), Gg = ({
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
] }), vm = () => {
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
    handleResetShortcuts: f,
    handleViewTrash: h,
    handleClearThumbnailCache: w,
    validateShortcut: x,
    // Input states
    initialLoadCountInput: v,
    maxLoadCountInput: _,
    lineageMaxDepthInput: j,
    thumbnailWindowSizeInput: g,
    trashRetentionDaysInput: u,
    autoLinkPhashThresholdInput: p,
    suggestPhashThresholdInput: y,
    maxPositivePromptLinesInput: k,
    maxNegativePromptLinesInput: S,
    fullscreenMaxPositivePromptLinesInput: b,
    fullscreenMaxNegativePromptLinesInput: E,
    thumbnailSizeInput: O
  } = Ug();
  tt({ onEscape: o });
  const P = m.useRef(!1), D = (I) => {
    I.target === I.currentTarget && (P.current = !0);
  }, U = (I) => {
    I.target === I.currentTarget && P.current && o(), P.current = !1;
  }, ee = [
    { id: "Gallery", label: "Gallery" },
    { id: "View", label: "View" },
    { id: "Full Screen", label: "Full Screen" },
    { id: "Shortcuts", label: "Shortcuts" },
    { id: "System", label: "System" },
    { id: "Information", label: "Information" }
  ], N = () => {
    switch (e) {
      case "System":
        return /* @__PURE__ */ s.jsx(
          Kg,
          {
            localSettings: n,
            handleNumberChange: c,
            handleNumberBlur: d,
            handleToggle: i,
            setLocalSettings: r,
            handleViewTrash: h,
            handleClearThumbnailCache: w,
            lineageMaxDepthInput: j,
            trashRetentionDaysInput: u,
            autoLinkPhashThresholdInput: p,
            suggestPhashThresholdInput: y
          }
        );
      case "Gallery":
        return /* @__PURE__ */ s.jsx(
          Bg,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailSizeInput: O,
            initialLoadCountInput: v,
            maxLoadCountInput: _
          }
        );
      case "View":
        return /* @__PURE__ */ s.jsx(
          Gg,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailWindowSizeInput: g,
            maxPositivePromptLinesInput: k,
            maxNegativePromptLinesInput: S
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ s.jsx(
          Vg,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            maxPositivePromptLinesInput: b,
            maxNegativePromptLinesInput: E
          }
        );
      case "Shortcuts":
        return /* @__PURE__ */ s.jsx(
          Hg,
          {
            localSettings: n,
            setLocalSettings: r,
            shortcutErrors: l,
            setShortcutErrors: a,
            validateShortcut: x,
            handleToggle: i,
            handleResetShortcuts: f
          }
        );
      case "Information":
        return /* @__PURE__ */ s.jsx(Qg, {});
      default:
        return null;
    }
  };
  return pe.createPortal(
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
            onClick: (I) => I.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsx("h2", { children: "Settings" }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: o,
                    children: /* @__PURE__ */ s.jsx(ye, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-layout", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ s.jsx("div", { className: "meld-tabs", children: ee.map((I) => /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: `meld-tab ${e === I.id ? "active" : ""}`,
                    onClick: () => t(I.id),
                    children: I.label
                  },
                  I.id
                )) }) }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: N() })
              ] })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, St = "none", wm = ({
  imageIds: e,
  initialTags: t,
  onClose: n,
  onSuccess: r
}) => {
  const { dispatch: l, refreshImages: a } = ve(), [o, i] = m.useState([]), [c, d] = m.useState(t), [f, h] = m.useState(""), [w, x] = m.useState(!0), [v, _] = m.useState(!1), j = m.useRef(null), g = e.length > 1, u = m.useRef(!1), p = (D) => {
    D.target === D.currentTarget && (u.current = !0);
  }, y = (D) => {
    D.target === D.currentTarget && u.current && n(), u.current = !1;
  }, k = m.useCallback(async () => {
    x(!0);
    try {
      const D = await ai();
      i(D);
    } catch (D) {
      console.error("Failed to fetch tags:", D);
    } finally {
      x(!1);
    }
  }, []);
  m.useEffect(() => {
    k();
  }, [k]), m.useEffect(() => {
    j.current && j.current.focus();
  }, []), tt({ onEscape: n });
  const S = m.useMemo(() => o.filter(
    (D) => D.name.toLowerCase().includes(f.toLowerCase()) && !c.includes(D.name)
  ), [o, f, c]), b = (D) => {
    const U = D.trim();
    if (U.toLowerCase() === St) {
      alert(
        `Tag name '${St}' is reserved for search and cannot be used.`
      );
      return;
    }
    U && !c.includes(U) && (d([...c, U]), h(""));
  }, E = (D) => {
    d(c.filter((U) => U !== D));
  }, O = async () => {
    _(!0);
    try {
      if (g) {
        const D = c.filter((ee) => !t.includes(ee)), U = t.filter(
          (ee) => !c.includes(ee)
        );
        await no(e, D, U);
      } else
        await Zh(e[0], c);
      await a(), l({ type: "CLEAR_SELECTION" }), r == null || r(), n();
    } catch (D) {
      console.error("Failed to update tags:", D), alert("Failed to update tags.");
    } finally {
      _(!1);
    }
  }, P = (D) => {
    D.key === "Enter" && f.trim() && (D.preventDefault(), D.stopPropagation(), b(f.trim()));
  };
  return pe.createPortal(
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
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: g ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(ye, { size: 20 }) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
            g && /* @__PURE__ */ s.jsx(
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
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: g ? "Collective Tags" : "Selected Tags" }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: c.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : c.map((D) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                D,
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => E(D),
                    children: /* @__PURE__ */ s.jsx(ye, { size: 12 })
                  }
                )
              ] }, D)) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ s.jsx(En, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    ref: j,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: f,
                    onChange: (D) => h(D.target.value),
                    onKeyDown: P
                  }
                ),
                f.trim() && !c.includes(f.trim()) && /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => b(f),
                    children: [
                      /* @__PURE__ */ s.jsx(Ds, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: w ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : S.length === 0 ? f ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : S.map((D) => /* @__PURE__ */ s.jsx(
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
                disabled: v,
                children: v ? "Saving..." : "Save Changes"
              }
            )
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, Ps = (e, t) => {
  const n = m.useCallback(async (x) => {
    try {
      const v = await eg(x.id);
      return v.workflow ? (await window.app.loadGraphData(
        v.workflow
      ), te.log("Workflow restored successfully from Meld"), !0) : (alert("No workflow information is saved for this image."), !1);
    } catch (v) {
      return te.error("Error restoring workflow:", v), alert("Failed to restore workflow."), !1;
    }
  }, []), r = m.useCallback(async (x) => {
    try {
      const v = await tg(x.id), _ = v.is_flux ? "MeldUnifiedFluxLoader" : "MeldUnifiedLoader", j = window.app, u = window.LiteGraph.createNode(_);
      if (!u)
        return console.error(`Node type ${_} not found.`), alert(
          `Node type ${_} not found. Please make sure the Meld Unified Loader node is installed.`
        ), !1;
      const p = v.is_flux ? {
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
        for (const [b, E] of Object.entries(p)) {
          const O = v[b];
          if (O != null && O !== "") {
            const P = u.widgets.find(
              (D) => D.name === E
            );
            P && (P.value = O);
          }
        }
        const S = u.widgets.find(
          (b) => b.name === "control_after_generate"
        );
        S && (S.value = "fixed");
      }
      const y = j.canvas.ds.offset, k = j.canvas.ds.scale;
      return u.pos = [(-y[0] + 400) / k, (-y[1] + 300) / k], j.graph.add(u), j.canvas.selectNode(u), j.canvas.centerOnNode(u), !0;
    } catch (v) {
      return console.error("Error adding Unified Loader:", v), alert("Failed to load settings."), !1;
    }
  }, []), l = m.useCallback(
    (x) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "tag_edit",
          imageIds: [x.id],
          tags: x.tags || []
        }
      });
    },
    [t]
  ), a = m.useCallback(
    (x) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "note_edit",
          imageId: x.id,
          notes: x.user_notes || ""
        }
      });
    },
    [t]
  ), o = m.useCallback(
    (x) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: x.id }
      });
    },
    [t]
  ), i = m.useCallback(
    (x) => {
      const v = window.app;
      if (!(v != null && v.graph))
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No active workflow graph found. Please open a workflow first."
          }
        }), !1;
      const _ = (u) => {
        if (!u) return !1;
        const p = u.replace(/\s+/g, "").toLowerCase();
        return p === "meldimageloader" || p === "loadimage";
      }, j = v.graph._nodes.filter(
        (u) => _(u.type)
      );
      if (j.length === 0)
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
          }
        }), !1;
      if (j.length > 1)
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "node_selection",
            image: x,
            nodes: j.map(
              (u) => ({
                id: String(u.id),
                type: u.type,
                title: u.title
              })
            ),
            onSelect: (u) => {
              tl(x, u);
            }
          }
        }), !0;
      const g = tl(x);
      return g.ok ? !0 : (t({
        type: "OPEN_MODAL",
        payload: {
          type: "error",
          message: g.reason === "no_app_graph" ? "No active workflow graph found. Please open a workflow first." : "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
        }
      }), !1);
    },
    [t]
  ), c = m.useCallback(
    (x) => {
      const v = Array.isArray(x) ? x : [x];
      t({
        type: "OPEN_MODAL",
        payload: { type: "workflow_selection", images: v }
      });
    },
    [t]
  ), d = m.useCallback(
    async (x, v = "run") => {
      var j;
      console.log("[Meld] handleRunWithMask called", x, v);
      const _ = Array.isArray(x) ? x : [x];
      if (v === "apply") {
        const g = window.app, u = ((j = g == null ? void 0 : g.graph) == null ? void 0 : j._nodes) || [];
        console.log(
          "[Meld] Current graph nodes:",
          u.map((k) => ({
            id: k.id,
            type: k.type
          }))
        );
        const p = u.some(
          (k) => k.type === "LoadImageMask"
        ), y = u.some(
          (k) => k.type === "MeldImageLoader" || k.type === "LoadImage" || k.type === "Load Image"
        );
        if (console.log("[Meld] Nodes found:", { hasMaskNode: p, hasLoaderNode: y }), !p || !y) {
          const k = [];
          y || k.push("'Meld Image Loader'"), p || k.push("'Load Image (as Mask)'"), t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: `Required nodes missing in current workflow: ${k.join(" and ")}. Please add them to use the Mask Tool.`
            }
          });
          return;
        }
        if (_.length > 1) {
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
          payload: { type: "mask_editor", imageId: _[0].id, mode: v }
        });
        return;
      }
      try {
        if (!(await rm()).some(
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
      } catch (g) {
        console.error("[Meld] Error checking workflows:", g);
      }
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "workflow_selection",
          images: _,
          isMaskSequence: !0
        }
      });
    },
    [t]
  ), f = m.useCallback(
    async (x, v) => {
      try {
        const _ = x.id, g = (await li([_])).restored_ids || [_];
        t({ type: "REMOVE_IMAGES", payload: g }), v == null || v();
      } catch (_) {
        t({
          type: "SET_ERROR",
          payload: _ instanceof Error ? _.message : String(_)
        });
      }
    },
    [t]
  ), h = m.useCallback(
    (x) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "delete_confirm",
          imageIds: [x.id],
          hasLineage: !!(x.parent_id || x.has_children),
          isPermanent: e.viewScope === "trash"
        }
      });
    },
    [e.viewScope, t]
  ), w = m.useCallback(
    async (x, v) => {
      try {
        const _ = await Jh(
          x,
          v
        );
        t({ type: "UPDATE_IMAGE", payload: _ });
      } catch (_) {
        t({
          type: "SET_ERROR",
          payload: _ instanceof Error ? _.message : String(_)
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
    handleRestore: f,
    handleDelete: h,
    handleEditNotes: a,
    handleUpdateUserNotes: w
  };
}, xm = ({
  imageId: e,
  initialNotes: t,
  onClose: n
}) => {
  const { state: r, dispatch: l } = ve(), { handleUpdateUserNotes: a } = Ps(r, l), [o, i] = m.useState(t), [c, d] = m.useState(!1), f = m.useRef(null), h = m.useRef(!1), w = (_) => {
    _.target === _.currentTarget && (h.current = !0);
  }, x = (_) => {
    _.target === _.currentTarget && h.current && n(), h.current = !1;
  };
  m.useEffect(() => {
    f.current && f.current.focus();
  }, []);
  const v = m.useCallback(async () => {
    d(!0);
    try {
      await a(e, o), n();
    } catch (_) {
      console.error("Failed to update notes:", _), alert("Failed to update notes.");
    } finally {
      d(!1);
    }
  }, [a, e, o, n]);
  return m.useEffect(() => {
    const _ = (j) => {
      j.key === "Enter" && (j.ctrlKey || j.metaKey) && j.target === f.current && (j.preventDefault(), j.stopPropagation(), j.stopImmediatePropagation(), v());
    };
    return window.addEventListener("keydown", _, { capture: !0 }), () => {
      window.removeEventListener("keydown", _, {
        capture: !0
      });
    };
  }, [v]), tt({ onEscape: n }), pe.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: w,
        onMouseUp: x,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (_) => _.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(zh, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: "Edit Notes" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(ye, { size: 20 }) })
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-note-edit-section", children: [
            /* @__PURE__ */ s.jsx(
              "textarea",
              {
                ref: f,
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
                onClick: v,
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
}, _m = ({
  image: e,
  nodes: t,
  onSelect: n
}) => {
  const { dispatch: r } = ve(), l = m.useCallback(() => {
    r({ type: "CLOSE_MODAL" });
  }, [r]);
  tt({ onEscape: l });
  const a = m.useRef(!1), o = m.useCallback((c) => {
    c.target === c.currentTarget && (a.current = !0);
  }, []), i = m.useCallback(
    (c) => {
      c.target === c.currentTarget && a.current && l(), a.current = !1;
    },
    [l]
  );
  return pe.createPortal(
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
                    children: /* @__PURE__ */ s.jsx(ye, { size: 20 })
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
                      /* @__PURE__ */ s.jsx(Jr, { size: 12 })
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
}, km = ({
  images: e,
  onExecute: t,
  onSuccess: n,
  isMaskMode: r
}) => {
  var R;
  const { dispatch: l } = ve(), [a, o] = m.useState([]), [i, c] = m.useState(!0), [d, f] = m.useState(null), [h, w] = m.useState(!1), [x, v] = m.useState(null), [_, j] = m.useState({}), [g, u] = m.useState({}), [p, y] = m.useState(""), k = m.useRef(null), S = m.useMemo(() => a.map((T) => {
    let C = T.valid, L = T.reason;
    return r && T.mask_count === 0 && (C = !1, L = "No 'Load Image (as Mask)' node found."), { ...T, valid: C, reason: L };
  }).sort((T, C) => T.valid !== C.valid ? T.valid ? -1 : 1 : T.name.localeCompare(C.name)), [a, r]), b = m.useMemo(() => {
    if (!p.trim()) return S;
    const T = p.toLowerCase();
    return S.filter(
      (C) => C.name.toLowerCase().includes(T)
    );
  }, [S, p]), E = m.useCallback(async () => {
    try {
      c(!0);
      const T = await rm();
      o(T), f(null);
    } catch (T) {
      f(T instanceof Error ? T.message : String(T));
    } finally {
      c(!1);
    }
  }, []);
  m.useEffect(() => {
    E();
  }, [E]), m.useEffect(() => {
    !i && k.current && k.current.focus();
  }, [i]);
  const O = m.useCallback(() => {
    l({ type: "CLOSE_MODAL" });
  }, [l]);
  tt({ onEscape: O });
  const P = m.useRef(!1), D = m.useCallback((T) => {
    T.target === T.currentTarget && (P.current = !0);
  }, []), U = m.useCallback(
    (T) => {
      T.target === T.currentTarget && P.current && O(), P.current = !1;
    },
    [O]
  ), ee = async (T, C) => {
    if (!h)
      try {
        w(!0);
        const L = await t(T, C);
        n == null || n(), L !== !1 && O();
      } catch (L) {
        f(L instanceof Error ? L.message : String(L)), w(!1);
      }
  }, N = async (T) => {
    if (!(_[T] || g[T]))
      try {
        u((F) => ({ ...F, [T]: !0 }));
        const C = await lm(T), L = [], V = (F) => {
          if (!F) return !1;
          const Q = F.replace(/\s+/g, "").toLowerCase();
          return r ? Q === "loadimagemask" : Q === "meldimageloader" || Q === "loadimage";
        };
        if (C.nodes && Array.isArray(C.nodes)) {
          console.log(
            "[Meld] Extracting nodes from UI format workflow",
            C.nodes.length
          );
          for (const F of C.nodes)
            V(F.type) && (console.log(
              "[Meld] Found target node (UI):",
              F.id,
              F.type,
              F.title
            ), L.push({
              id: String(F.id),
              type: F.type || "",
              title: F.title
            }));
        } else {
          console.log("[Meld] Extracting nodes from API format workflow");
          for (const F in C) {
            const Q = C[F];
            Q && typeof Q == "object" && V(Q.class_type) && (console.log(
              "[Meld] Found target node (API):",
              F,
              Q.class_type
            ), L.push({
              id: F,
              type: Q.class_type || ""
            }));
          }
        }
        L.length === 0 && console.warn(
          "[Meld] No loader nodes found in workflow JSON despite count > 0"
        ), j((F) => ({ ...F, [T]: L }));
      } catch (C) {
        console.error("Failed to fetch workflow nodes:", C);
      } finally {
        u((C) => ({ ...C, [T]: !1 }));
      }
  }, I = (T) => {
    if (!T.valid || h) return;
    if ((r ? T.mask_count : T.loader_count + T.load_image_count) <= 1) {
      ee(T.name);
      return;
    }
    x === T.name ? v(null) : (v(T.name), N(T.name));
  };
  return pe.createPortal(
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
            onClick: (T) => T.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(ri, { size: 20, color: "var(--meld-accent-color)" }),
                  "Queue via Workflow"
                ] }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: O,
                    children: /* @__PURE__ */ s.jsx(ye, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", style: { minHeight: "300px" }, children: i ? /* @__PURE__ */ s.jsxs("div", { className: "meld-loading-container", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-loading-spinner" }),
                /* @__PURE__ */ s.jsx("span", { children: "Loading workflows..." })
              ] }) : d ? /* @__PURE__ */ s.jsxs("div", { className: "meld-error-container", children: [
                /* @__PURE__ */ s.jsx(Bu, { size: 20 }),
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
                      /* @__PURE__ */ s.jsx("strong", { children: e.length > 1 ? `${e.length} images` : (R = e[0]) == null ? void 0 : R.filename }),
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
                      /* @__PURE__ */ s.jsx(En, { className: "meld-tag-search-icon", size: 16 }),
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          ref: k,
                          type: "text",
                          className: "meld-tag-search-input",
                          placeholder: "Search workflows...",
                          value: p,
                          onChange: (T) => y(T.target.value)
                        }
                      ),
                      p && /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-item__btn",
                          onClick: () => {
                            var T;
                            y(""), (T = k.current) == null || T.focus();
                          },
                          style: { padding: "4px" },
                          children: /* @__PURE__ */ s.jsx(ye, { size: 14 })
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
                ) : b.map((T) => {
                  const C = r ? T.mask_count : T.loader_count + T.load_image_count, L = x === T.name, V = _[T.name] || [], F = g[T.name];
                  return /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item-container", children: [
                    /* @__PURE__ */ s.jsxs(
                      "div",
                      {
                        className: `meld-workflow-item ${T.valid ? "" : "meld-workflow-item--invalid"} ${L ? "meld-workflow-item--expanded" : ""}`,
                        onClick: () => I(T),
                        title: T.reason || "Click to select",
                        children: [
                          /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item__info", children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__name", children: T.name }),
                            !T.valid && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__reason", children: T.reason }),
                            T.valid && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__supports", children: C > 1 ? `Multiple loaders found (${C})` : r ? "Supports: Load Image (as Mask)" : `Supports: ${T.loader_count > 0 ? "Meld Loader" : "Load Image"}` })
                          ] }),
                          T.valid && C <= 1 && /* @__PURE__ */ s.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn-primary meld-btn-small",
                              disabled: h,
                              onClick: (Q) => {
                                Q.stopPropagation(), ee(T.name);
                              },
                              children: [
                                /* @__PURE__ */ s.jsx(Jr, { size: 14 }),
                                h ? "Queuing..." : "Queue"
                              ]
                            }
                          ),
                          T.valid && C > 1 && /* @__PURE__ */ s.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn-primary meld-btn-small",
                              disabled: h,
                              onClick: (Q) => {
                                Q.stopPropagation(), I(T);
                              },
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                              },
                              children: [
                                L ? "Close" : "Select Node",
                                /* @__PURE__ */ s.jsx(
                                  ni,
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
                    L && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker", children: F ? /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-node-picker__loading", children: [
                      /* @__PURE__ */ s.jsx("div", { className: "meld-loading-spinner meld-loading-spinner--small" }),
                      /* @__PURE__ */ s.jsx("span", { children: "Loading nodes..." })
                    ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                      /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker__label", children: "Select target loader node:" }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker__list", children: V.map((Q) => /* @__PURE__ */ s.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-workflow-node-item",
                          disabled: h,
                          onClick: () => ee(T.name, Q.id),
                          children: [
                            /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-node-item__info", children: [
                              /* @__PURE__ */ s.jsx("span", { className: "meld-workflow-node-item__title", children: Q.title || Q.type }),
                              /* @__PURE__ */ s.jsxs("span", { className: "meld-workflow-node-item__id", children: [
                                "#",
                                Q.id
                              ] })
                            ] }),
                            /* @__PURE__ */ s.jsx(Jr, { size: 12 })
                          ]
                        },
                        Q.id
                      )) })
                    ] }) })
                  ] }, T.name);
                })
              ] }) }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-secondary",
                  onClick: O,
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
}, qg = ({
  message: e,
  onConfirm: t,
  onCancel: n
}) => {
  const r = m.useRef(null), l = m.useRef(null);
  return m.useEffect(() => {
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
}, so = async (e, t) => {
  await Yh(e, t), ue.getState().removeImages(e);
}, Sm = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: l, dispatch: a } = ve(), o = m.useRef(!0);
  m.useEffect(() => () => {
    o.current = !1;
  }, []);
  const i = m.useMemo(
    () => l.searchQuery.toLowerCase().includes("has_derivatives:yes") || l.searchQuery.toLowerCase().includes("has_derivatives:true") || l.searchQuery.toLowerCase().includes("has_derivatives:1"),
    [l.searchQuery]
  ), c = m.useMemo(
    () => l.searchQuery.trim() !== "",
    [l.searchQuery]
  ), d = m.useMemo(
    () => l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
      (u) => u.exists !== !1 && (l.settings["gallery.show_parent_images"] && !c || !u.has_children || i)
    ),
    [
      l.viewerMode,
      l.lineageImages,
      l.images,
      l.settings,
      c,
      i
    ]
  ), f = m.useRef(l.viewerImageId);
  m.useEffect(() => {
    f.current = l.viewerImageId;
  }, [l.viewerImageId]);
  const h = m.useCallback(() => {
    a({ type: "CLOSE_MODAL" });
  }, [a]);
  tt({ onEscape: h });
  const w = m.useRef(!1), x = m.useCallback((u) => {
    u.target === u.currentTarget && (w.current = !0);
  }, []), v = m.useCallback(
    (u) => {
      u.target === u.currentTarget && w.current && h(), w.current = !1;
    },
    [h]
  ), _ = m.useCallback(
    (u) => {
      if (!o.current) return;
      const p = f.current;
      if (p === null || !u.has(p))
        return;
      const y = d.findIndex(
        (S) => S.id === p
      );
      if (y === -1) return;
      let k = !1;
      for (let S = y + 1; S < d.length; S++)
        if (!u.has(d[S].id)) {
          a({
            type: "OPEN_VIEWER",
            payload: { id: d[S].id, mode: l.viewerMode }
          }), k = !0;
          break;
        }
      if (!k) {
        for (let S = y - 1; S >= 0; S--)
          if (!u.has(d[S].id)) {
            a({
              type: "OPEN_VIEWER",
              payload: { id: d[S].id, mode: l.viewerMode }
            }), k = !0;
            break;
          }
      }
      k || a({ type: "CLOSE_VIEWER" });
    },
    [l.viewerMode, d, a]
  ), j = async () => {
    var u, p;
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const y = new Set(e), k = d.filter(
        (S) => y.has(S.id)
      );
      if (_(y), await so(e, n), !o.current) return;
      l.activeModal.type === "delete_confirm" && ((p = (u = l.activeModal).onSuccess) == null || p.call(u)), !n && r && r(k), a({ type: "REMOVE_IMAGES", payload: e }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (y) {
      a({
        type: "SET_ERROR",
        payload: y instanceof Error ? y.message : String(y)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  }, g = async () => {
    var u, p;
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const y = new Set(e);
      for (const S of e) {
        const b = await to(S);
        if (!o.current) return;
        for (const E of b)
          y.add(E.id);
      }
      const k = d.filter(
        (S) => y.has(S.id)
      );
      if (_(y), await so(
        Array.from(y),
        n
      ), !o.current) return;
      l.activeModal.type === "delete_confirm" && ((p = (u = l.activeModal).onSuccess) == null || p.call(u)), !n && r && r(k), a({
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
  return pe.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: x,
        onMouseUp: v,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--small",
            onClick: (u) => u.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(Ut, { size: 20, color: "var(--meld-danger-color)" }),
                  n ? "Permanent Deletion" : "Move to Trash"
                ] }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: h,
                    children: /* @__PURE__ */ s.jsx(ye, { size: 20 })
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
                            hh,
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
                      onClick: j,
                      children: n ? "Delete Permanently" : "Move to Trash"
                    }
                  ),
                  t && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-danger",
                      title: n ? "Permanently delete all images in the lineage" : "Move all images in the lineage to trash",
                      onClick: g,
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
}, jm = ({ message: e }) => {
  const { dispatch: t } = ve(), n = m.useCallback(() => {
    t({ type: "CLOSE_MODAL" });
  }, [t]);
  return tt({ onEscape: n }), /* @__PURE__ */ s.jsx("div", { className: "meld-modal-overlay", onClick: n, children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (r) => r.stopPropagation(), children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(Bu, { size: 20, color: "var(--meld-danger-color)" }),
        /* @__PURE__ */ s.jsx("h2", { children: "Error" })
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          className: "meld-modal-close",
          onClick: n,
          type: "button",
          children: /* @__PURE__ */ s.jsx(ye, { size: 20 })
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
}, bm = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = ve(), [l, a] = m.useState([]), [o, i] = m.useState(!0), [c, d] = m.useState(!1), f = m.useCallback(() => {
    n({ type: "CLOSE_MODAL" });
  }, [n]);
  tt({ onEscape: f });
  const h = m.useRef(!1), w = (S) => {
    S.target === S.currentTarget && (h.current = !0);
  }, x = (S) => {
    S.target === S.currentTarget && h.current && f(), h.current = !1;
  }, v = t.images.find((S) => S.id === e), _ = m.useCallback(async () => {
    i(!0);
    try {
      const S = t.settings["gallery.suggest_phash_threshold"], b = await Xh(e, S);
      a(b);
    } catch (S) {
      console.error("Failed to load suggestions:", S);
    } finally {
      i(!1);
    }
  }, [e, t.settings]);
  m.useEffect(() => {
    _();
  }, [_]);
  const j = async (S) => {
    if (S == null) {
      console.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!v || S === v.parent_id) && !(v.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await wc(e, S), await Zu(e), await r(), f();
      } catch (b) {
        console.error("Failed to link parent:", b);
      }
  }, g = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await wc(e, null), await r(), f();
      } catch (S) {
        console.error("Failed to remove source:", S), alert("Failed to remove source image.");
      }
  }, u = async (S) => {
    i(!0);
    try {
      const b = await Mg(S), { id: E } = await Ju({
        filename: b.name,
        subfolder: b.subfolder || "",
        type: b.type || "input"
      });
      if (E === e) {
        alert(
          "Uploaded image is identical to the current image. Cannot set as source."
        );
        return;
      }
      await j(E);
    } catch (b) {
      console.error("Failed to upload/register image:", b);
    } finally {
      i(!1);
    }
  }, p = (S) => {
    S.preventDefault(), S.stopPropagation(), d(!1);
    const b = S.dataTransfer.files[0];
    b != null && b.type.startsWith("image/") && u(b);
  };
  if (!v) return null;
  const y = l.filter((S) => S.is_source_match), k = l.filter((S) => !S.is_source_match);
  return pe.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: w,
        onMouseUp: x,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (S) => S.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("h2", { children: [
              "Select Source for #",
              v.id
            ] }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: f,
                children: /* @__PURE__ */ s.jsx(ye, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
            v.parent_id && /* @__PURE__ */ s.jsxs(
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
                        /* @__PURE__ */ s.jsx(Ih, { size: 16, color: "var(--meld-accent-color)" }),
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
                                    v.parent_filename && /* @__PURE__ */ s.jsx(
                                      "img",
                                      {
                                        src: ht(
                                          {
                                            filename: v.parent_filename,
                                            subfolder: v.parent_subfolder || "",
                                            type: v.parent_type || "output"
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
                                              children: v.parent_filename || "Unknown Image"
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
                                                v.parent_id
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
                      onClick: g,
                      title: "Remove Source",
                      children: /* @__PURE__ */ s.jsx(Mh, { size: 16 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: `meld-drop-zone ${c ? "meld-drop-zone--active" : ""}`,
                onDragEnter: (S) => {
                  S.preventDefault(), S.stopPropagation(), d(!0);
                },
                onDragOver: (S) => {
                  S.preventDefault(), S.stopPropagation(), S.dataTransfer.dropEffect = "copy", d(!0);
                },
                onDragLeave: (S) => {
                  S.preventDefault(), S.stopPropagation(), d(!1);
                },
                onDrop: p,
                children: [
                  /* @__PURE__ */ s.jsx($h, { size: 32 }),
                  /* @__PURE__ */ s.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            o ? /* @__PURE__ */ s.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestions-container", children: [
              y.length > 0 && /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: y.map((S) => {
                  const b = S.id === v.parent_id;
                  return /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${b ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !b && j(S.id),
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
                            src: ht(S, 64),
                            alt: S.filename
                          }
                        ),
                        /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: S.filename }),
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
                    S.id
                  );
                }) })
              ] }),
              /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Visual Matches (pHash)" }),
                k.length > 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: k.map((S) => {
                  const b = S.id === v.parent_id;
                  return /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${b ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !b && j(S.id),
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
                            src: ht(S, 64),
                            alt: S.filename
                          }
                        ),
                        /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: S.filename }),
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
                                  Math.round((64 - S.distance) / 64 * 100),
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
                    S.id
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
}, Yg = () => {
  const { state: e, dispatch: t } = ve(), n = e.toastMessage;
  return m.useEffect(() => {
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
}, Xg = () => {
  const { state: e, dispatch: t } = ve(), { executeWorkflow: n } = oi();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
      km,
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
      _m,
      {
        image: e.activeModal.image,
        nodes: e.activeModal.nodes,
        onSelect: (r) => {
          e.activeModal.type === "node_selection" && tl(e.activeModal.image, r);
        }
      }
    ),
    e.activeModal.type === "parent_selection" && pe.createPortal(
      /* @__PURE__ */ s.jsx(bm, { imageId: e.activeModal.imageId }),
      document.body
    ),
    e.activeModal.type === "import" && pe.createPortal(/* @__PURE__ */ s.jsx(nm, {}), document.body),
    e.activeModal.type === "settings" && pe.createPortal(/* @__PURE__ */ s.jsx(vm, {}), document.body),
    e.activeModal.type === "tag_edit" && pe.createPortal(
      /* @__PURE__ */ s.jsx(
        wm,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "error" && pe.createPortal(
      /* @__PURE__ */ s.jsx(jm, { message: e.activeModal.message }),
      document.body
    ),
    e.activeModal.type === "delete_confirm" && pe.createPortal(
      /* @__PURE__ */ s.jsx(
        Sm,
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
    e.activeModal.type === "mask_editor" && pe.createPortal(
      /* @__PURE__ */ s.jsx(
        gs,
        {
          imageId: e.activeModal.imageId,
          mode: e.activeModal.mode,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "mask_sequence_step" && pe.createPortal(
      /* @__PURE__ */ s.jsx(
        gs,
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
    e.activeModal.type === "note_edit" && pe.createPortal(
      /* @__PURE__ */ s.jsx(
        xm,
        {
          imageId: e.activeModal.imageId,
          initialNotes: e.activeModal.notes,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "download_options" && pe.createPortal(
      /* @__PURE__ */ s.jsx(
        Rg,
        {
          imageIds: e.activeModal.imageIds,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.confirmModal && pe.createPortal(
      /* @__PURE__ */ s.jsx(
        qg,
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
    e.toastMessage && pe.createPortal(/* @__PURE__ */ s.jsx(Yg, {}), document.body)
  ] });
}, Zg = () => {
  const { state: e, dispatch: t } = ve(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await Pg(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (f) {
      console.error("Failed to cancel scan:", f);
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
        children: /* @__PURE__ */ s.jsx(Xu, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ s.jsx(wh, { size: 14, className: "meld-success-icon" }),
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
}, Jg = () => {
  const { state: e } = ve(), t = ue((r) => r.slots), n = ue((r) => r.addToBucket);
  m.useEffect(() => {
    const r = (l) => {
      var i, c, d;
      if (((i = document.activeElement) == null ? void 0 : i.tagName) === "INPUT" || ((c = document.activeElement) == null ? void 0 : c.tagName) === "TEXTAREA" || (d = document.activeElement) != null && d.isContentEditable)
        return;
      const a = e.selectedIds;
      if (!a || a.size === 0) return;
      const o = t.find(
        (f) => f.shortcutKey.toLowerCase() === l.key.toLowerCase()
      );
      o && (l.preventDefault(), a.forEach((f) => {
        n(o.id, String(f));
      }), console.log(`Added ${a.size} images to slot ${o.label}`));
    };
    return window.addEventListener("keydown", r), () => {
      window.removeEventListener("keydown", r);
    };
  }, [t, n, e.selectedIds]);
}, Cm = ({
  message: e,
  onConfirm: t,
  onCancel: n
}) => (m.useEffect(() => {
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
)), ey = (e, t, n, r, l) => {
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
}, ty = ({ config: e }) => {
  var N;
  const t = ue((I) => I.buckets), n = ue((I) => I.slots), r = ue((I) => I.images), l = n.length, { state: a, dispatch: o } = ve(), [i, c] = m.useState(!1), [d, f] = m.useState(!1), [h, w] = m.useState(!1), [x, v] = m.useState(e.label), [_, j] = m.useState(e.color), g = m.useRef(null), u = m.useRef(null), p = t[e.id] || [], y = p.length;
  m.useEffect(() => {
    const I = (R) => {
      u.current && !u.current.contains(R.target) && c(!1), g.current && !g.current.contains(R.target) && w(!1);
    };
    return (i || h) && document.addEventListener("mousedown", I), () => {
      document.removeEventListener("mousedown", I);
    };
  }, [i, h]);
  const k = p.map((I) => {
    const R = Number(I);
    let T = a.images.find((C) => C.id === R);
    return T || (T = a.lineageImages.find((C) => C.id === R)), T || (T = r[I]), T;
  }).filter(Boolean), S = (I) => {
    I.preventDefault(), I.stopPropagation(), I.currentTarget.classList.add("drag-over");
  }, b = (I) => {
    I.currentTarget.classList.remove("drag-over");
  }, E = (I) => {
    I.preventDefault(), I.stopPropagation(), I.currentTarget.classList.remove("drag-over");
    const R = I.dataTransfer.getData("text/plain");
    R && R.split(",").forEach((C) => {
      if (C) {
        const L = C.trim(), V = Number(L);
        let F = a.images.find((Q) => Q.id === V);
        F || (F = a.lineageImages.find(
          (Q) => Q.id === V
        )), ue.getState().addToBucket(e.id, L, F);
      }
    });
  }, O = (I, R) => {
    I.stopPropagation(), I.dataTransfer.setData("text/plain", String(R)), I.dataTransfer.setData("application/meld-lt-source-slot", e.id), I.dataTransfer.effectAllowed = "move";
  }, P = (I, R) => {
    I.dataTransfer.dropEffect === "none" && ue.getState().removeFromBucket(e.id, String(R));
  }, D = (I) => {
    if (y === 0) return;
    const R = {
      type: I
    }, T = p.map((V) => Number(V)), C = {
      edit_tags: "Tags updated",
      delete: "Delete initiated",
      move_folder: "Moved to folder",
      queue_workflow: "Queued Workflow",
      run_with_mask: "Opened Mask Editor",
      download: "Opened Download Options"
    };
    ey(
      R,
      T,
      k,
      o,
      () => {
        ue.getState().showToast(C[I] ?? "Done");
      }
    );
  }, U = () => {
    ue.getState().clearBucket(e.id), ue.getState().showToast(`Tab "${e.label}" cleared`), f(!1);
  }, ee = () => {
    const I = ue.getState();
    I.slots.length <= 1 || (I.removeSlot(e.id), ue.getState().showToast(`Tab "${e.label}" deleted`));
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "meld-lt-slot-panel",
      style: { "--slot-color": e.color },
      onDragOver: S,
      onDragLeave: b,
      onDrop: E,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot-panel__images", children: y === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot-panel__empty", children: "Drag & Drop images here" }) : k.map((I) => {
          const R = ht(I);
          return /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-lt-slot-panel__image-wrapper",
              draggable: !0,
              onClick: () => {
                o({
                  type: "OPEN_VIEWER",
                  payload: {
                    id: I.id,
                    mode: "lighttable",
                    slotId: e.id
                  }
                });
              },
              onDragStart: (T) => O(T, I.id),
              onDragEnd: (T) => P(T, I.id),
              children: /* @__PURE__ */ s.jsx("img", { src: R, alt: I.filename, draggable: !1 })
            },
            I.id
          );
        }) }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__actions", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__action-menu-wrapper", ref: g, children: [
            /* @__PURE__ */ s.jsxs(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__action-btn",
                onClick: () => w(!h),
                disabled: y === 0,
                title: "Actions",
                children: [
                  "Action",
                  /* @__PURE__ */ s.jsx(xh, { size: 12 })
                ]
              }
            ),
            h && /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot__action-menu", children: [
              {
                type: "edit_tags",
                label: "Edit Tags",
                icon: dr
              },
              {
                type: "queue_workflow",
                label: "Queue Workflow",
                icon: ri
              },
              {
                type: "run_with_mask",
                label: "Queue Workflow (Mask)",
                icon: Uh
              },
              {
                type: "download",
                label: "Download",
                icon: Zr
              },
              {
                type: "delete",
                label: "Delete",
                icon: Ut,
                danger: !0
              }
            ].map((I) => /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: `meld-lt-slot__action-menu-item${I.danger ? " meld-lt-slot__action-menu-item--danger" : ""}${"disabled" in I && I.disabled ? " meld-lt-slot__action-menu-item--disabled" : ""}`,
                onMouseDown: (R) => R.stopPropagation(),
                onClick: () => {
                  "disabled" in I && I.disabled || (w(!1), setTimeout(() => D(I.type), 0));
                },
                children: [
                  /* @__PURE__ */ s.jsx(I.icon, { size: 13 }),
                  /* @__PURE__ */ s.jsx("span", { children: I.label })
                ]
              },
              I.type
            )) })
          ] }),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-lt-slot__menu-btn",
              onClick: () => f(!0),
              title: "Clear Tab",
              disabled: y === 0,
              children: /* @__PURE__ */ s.jsx(Sh, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__settings-wrapper", ref: u, children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__menu-btn",
                onClick: () => c(!i),
                title: "Tab Settings",
                children: /* @__PURE__ */ s.jsx(Yu, { size: 14 })
              }
            ),
            i && /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__settings-popover", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__settings-row", children: [
                /* @__PURE__ */ s.jsx("label", { htmlFor: `slot-label-${e.id}`, children: "Tab Label:" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    id: `slot-label-${e.id}`,
                    value: x,
                    onChange: (I) => v(I.target.value),
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
                          value: _.startsWith("var") ? ((N = _.match(
                            /#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})/
                          )) == null ? void 0 : N[0]) ?? "#9ca3af" : /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/i.test(_) ? _ : "#9ca3af",
                          onChange: (I) => j(I.target.value),
                          style: { flexShrink: 0 }
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          value: _,
                          onChange: (I) => j(I.target.value),
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
                    const I = ue.getState(), R = x.trim();
                    if (!R) {
                      I.showToast(
                        "Error: Tab label cannot be empty",
                        "error"
                      );
                      return;
                    }
                    if (I.slots.some(
                      (C) => C.id !== e.id && (C.label.toLowerCase() === R.toLowerCase() || C.id.toLowerCase() === R.toLowerCase())
                    )) {
                      I.showToast(
                        `Error: "${R}" is already in use`,
                        "error"
                      );
                      return;
                    }
                    I.updateSlot(e.id, {
                      label: R,
                      color: _
                    }), c(!1), I.showToast("Settings saved");
                  },
                  children: "Save Settings"
                }
              ),
              l > 1 && /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-lt-slot__settings-delete-btn",
                  onClick: ee,
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
          Cm,
          {
            message: `Clear all items in the "${e.label}" tab?`,
            onConfirm: U,
            onCancel: () => f(!1)
          }
        )
      ]
    }
  );
}, ny = () => {
  const e = ue((n) => n.toastMessage), t = ue((n) => n.toastType);
  return e ? /* @__PURE__ */ s.jsx(
    "div",
    {
      className: `meld-toast ${t === "error" ? "meld-toast--error" : ""}`,
      role: "status",
      "aria-live": "polite",
      children: e
    }
  ) : null;
}, ry = () => {
  var x;
  Jg();
  const e = ue((v) => v.isOpen), t = ue((v) => v.slots), n = ue((v) => v.buckets), r = ue((v) => v.setIsOpen), { state: l } = ve(), [a, o] = m.useState(((x = t[0]) == null ? void 0 : x.id) || "keep"), i = m.useRef(null), [c, d] = m.useState(!1);
  if (m.useEffect(() => {
    let v = document.getElementById(
      "meld-light-table-portal"
    );
    if (!v) {
      v = document.createElement("div"), v.id = "meld-light-table-portal";
      const _ = document.querySelector(".comfyui-body-bottom");
      _ ? _.appendChild(v) : document.body.appendChild(v);
    }
    return i.current = v, () => {
    };
  }, []), !e || !i.current) return null;
  const f = () => {
    const v = `slot_${Date.now().toString(36)}`;
    ue.getState().addSlot({
      id: v,
      label: `Tab ${t.length + 1}`,
      color: "var(--meld-text-secondary, #9ca3af)",
      shortcutKey: ""
    }), o(v);
  }, h = () => {
    t.forEach((v) => {
      ue.getState().clearBucket(v.id);
    }), ue.getState().showToast("All tabs cleared"), d(!1);
  }, w = /* @__PURE__ */ s.jsxs("div", { className: "meld-light-table", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-light-table__tabs", children: [
      t.map((v) => {
        var _;
        return /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "button",
            className: `meld-light-table__tab ${a === v.id ? "meld-light-table__tab--active" : ""}`,
            onClick: () => o(v.id),
            style: { "--tab-color": v.color },
            onDragOver: (j) => {
              j.preventDefault(), o(v.id);
            },
            onDrop: (j) => {
              j.preventDefault();
              const g = j.dataTransfer.getData("text/plain");
              g && g.split(",").forEach((p) => {
                if (p) {
                  const y = p.trim(), k = l.images.find(
                    (S) => String(S.id) === y
                  );
                  ue.getState().addToBucket(v.id, y, k);
                }
              });
            },
            children: [
              v.label,
              "  (",
              ((_ = n[v.id]) == null ? void 0 : _.length) || 0,
              ")"
            ]
          },
          v.id
        );
      }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-light-table__add-tab-btn",
          onClick: f,
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
          children: /* @__PURE__ */ s.jsx(Ds, { size: 16 })
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
            /* @__PURE__ */ s.jsx(Ah, { size: 14 }),
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
          children: /* @__PURE__ */ s.jsx(ye, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-light-table__content", children: t.map((v) => /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-light-table__tab-panel",
        style: { display: a === v.id ? "block" : "none" },
        children: /* @__PURE__ */ s.jsx(ty, { config: v })
      },
      v.id
    )) }),
    c && /* @__PURE__ */ s.jsx(
      Cm,
      {
        message: "Are you sure you want to clear all items in all tabs?",
        onConfirm: h,
        onCancel: () => d(!1)
      }
    ),
    /* @__PURE__ */ s.jsx(ny, {})
  ] });
  return pe.createPortal(w, i.current);
}, Em = () => {
  const { state: e, refreshFavorites: t } = ve(), [n, r] = m.useState(!1), [l, a] = m.useState(null), [o, i] = m.useState("info"), [c, d] = m.useState(null), [f, h] = m.useState(""), [w, x] = m.useState("");
  m.useEffect(() => {
    if (l) {
      const u = setTimeout(() => a(null), 3e3);
      return () => clearTimeout(u);
    }
  }, [l]);
  const v = m.useCallback(
    async (u, p, y) => {
      u.stopPropagation();
      const k = `Are you sure you want to delete the favorite "${y}"?`;
      if (window.confirm(k))
        try {
          await xc(p), await t();
        } catch (S) {
          te.error("Failed to delete favorite", S);
        }
    },
    [t]
  ), _ = m.useCallback(
    (u, p) => {
      u.stopPropagation(), d(p), h(p.name), x(p.query);
    },
    []
  ), j = m.useCallback(async () => {
    if (!(!c || !f.trim() || !w.trim()))
      try {
        r(!0), await dg(
          c.id,
          f,
          w
        ), await t(), d(null);
      } catch (u) {
        te.error("Failed to update favorite", u), a("Failed to update favorite."), i("error");
      } finally {
        r(!1);
      }
  }, [c, f, w, t]), g = m.useCallback(async () => {
    if (!e.searchQuery || n) return;
    if (e.favorites.some(
      (p) => p.query === e.searchQuery
    )) {
      const p = e.favorites.find((y) => y.query === e.searchQuery);
      if (p) {
        r(!0);
        try {
          await xc(p.id), await t();
        } catch (y) {
          te.error("Failed to delete favorite:", y);
        } finally {
          r(!1);
        }
      }
      return;
    }
    r(!0);
    try {
      await cg(e.searchQuery, e.searchQuery), await t();
    } catch (p) {
      te.error("Failed to save favorite:", p);
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
    editFavoriteName: f,
    setEditFavoriteName: h,
    editFavoriteQuery: w,
    setEditFavoriteQuery: x,
    handleDeleteFavorite: v,
    handleEditFavorite: _,
    handleSaveEditFavorite: j,
    handleSaveFavorite: g,
    setToastMessage: (u, p = "info") => {
      a(u), i(p);
    }
  };
}, Nm = ({
  fav: e,
  onSelect: t,
  onEdit: n,
  onDelete: r
}) => {
  const [l, a] = m.useState(!1), [o, i] = m.useState(!1), [c, d] = m.useState(!1);
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
                  onClick: (f) => n(f, e),
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
                  children: /* @__PURE__ */ s.jsx(qu, { size: 14 })
                }
              ),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  onClick: (f) => r(f, e.id, e.name),
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
                  children: /* @__PURE__ */ s.jsx(Ut, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, ly = ({
  anchorRect: e,
  onClose: t,
  onSelect: n
}) => {
  const { state: r } = ve(), {
    isSaving: l,
    toastMessage: a,
    editingFavorite: o,
    setEditingFavorite: i,
    editFavoriteName: c,
    setEditFavoriteName: d,
    editFavoriteQuery: f,
    setEditFavoriteQuery: h,
    handleDeleteFavorite: w,
    handleEditFavorite: x,
    handleSaveEditFavorite: v
  } = Em(), [_, j] = m.useState({ top: 0, left: 0 }), g = m.useRef(null), u = m.useRef(null);
  if (tt({
    onEscape: () => {
      o ? i(null) : t();
    },
    enabled: !0
  }), m.useEffect(() => {
    if (e) {
      let b = e.left;
      const E = e.bottom + 5;
      b + 300 > window.innerWidth - 10 && (b = window.innerWidth - 300 - 10), b < 10 && (b = 10), j({ top: E, left: b });
    }
  }, [e]), m.useEffect(() => {
    o && u.current && u.current.focus();
  }, [o]), !e) return null;
  const p = (k) => {
    k.stopPropagation(), k.preventDefault();
  }, y = (k) => {
    k.stopPropagation();
  };
  return pe.createPortal(
    /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx(
        "div",
        {
          style: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1999,
            backgroundColor: "transparent"
          },
          onClick: t,
          onMouseDown: (k) => k.stopPropagation()
        }
      ),
      /* @__PURE__ */ s.jsxs(
        "div",
        {
          ref: g,
          onClick: p,
          onMouseDown: y,
          style: {
            position: "fixed",
            top: _.top,
            left: _.left,
            width: "300px",
            maxHeight: "400px",
            backgroundColor: "var(--comfy-menu-bg, #222)",
            border: "1px solid var(--comfy-menu-border, #444)",
            borderRadius: "8px",
            boxShadow: "0 8px 24px var(--comfy-menu-shadow, rgba(0,0,0,0.5))",
            zIndex: 2e3,
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
                children: r.favorites.map((k) => /* @__PURE__ */ s.jsx(
                  Nm,
                  {
                    fav: k,
                    onSelect: (S) => {
                      n(S), t();
                    },
                    onEdit: x,
                    onDelete: w
                  },
                  k.id
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
          className: "meld-modal-overlay",
          style: { zIndex: 3e3 },
          onMouseDown: (k) => {
            k.target === k.currentTarget && i(null);
          },
          children: /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--small",
              onClick: (k) => k.stopPropagation(),
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
                      children: /* @__PURE__ */ s.jsx(ye, { size: 20 })
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
                                onChange: (k) => d(k.target.value),
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
                                onKeyDown: (k) => {
                                  k.key === "Enter" && v(), k.key === "Escape" && i(null);
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
                                value: f,
                                onChange: (k) => h(k.target.value),
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
                                onKeyDown: (k) => {
                                  k.key === "Enter" && !k.shiftKey && (k.preventDefault(), v()), k.key === "Escape" && i(null);
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
                      onClick: v,
                      disabled: l || !c.trim() || !f.trim(),
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
  );
}, Ml = (e) => {
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
}, sy = () => {
  const { state: e, dispatch: t, updateSetting: n } = ve(), [r, l] = m.useState(e.searchQuery), [a, o] = m.useState([]), [i, c] = m.useState(!1), [d, f] = m.useState([]), [h, w] = m.useState([]), x = e.settings["search.show_all_keywords"], [v, _] = m.useState(-1), [j, g] = m.useState(null), u = m.useRef(null), p = m.useRef(e.searchQuery), y = m.useCallback(async () => {
    if (h.length > 0) return;
    const R = await ag();
    w(R);
  }, [h.length]);
  m.useEffect(() => {
    og().then((R) => {
      g(R);
    }), x && y();
  }, [y, x]);
  const k = m.useMemo(() => {
    if (!j) return null;
    const R = j.all_prefixes.join("|");
    return new RegExp(`^[-!]?(${R}):(.*)$`, "i");
  }, [j]), S = m.useCallback(() => {
    const R = !x;
    R && y(), n("search.show_all_keywords", R);
  }, [x, y, n]), b = r !== p.current;
  m.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      f([]);
      return;
    }
    sg().then((R) => {
      f(R);
    });
  }, [e.settings["search.quick_suggestions"]]), m.useEffect(() => {
    l(e.searchQuery), p.current = e.searchQuery;
  }, [e.searchQuery]), m.useEffect(() => {
    var R;
    (R = u.current) == null || R.focus();
  }, []);
  const E = m.useCallback(
    (R, T = !0) => {
      p.current !== R && (te.log("SearchBar: triggering search", { query: R }), t({ type: "SET_SEARCH_QUERY", payload: R }), T && c(!1), p.current = R);
    },
    [t]
  );
  m.useEffect(() => {
    const R = setTimeout(async () => {
      if (r === p.current)
        return;
      if (!e.settings["search.input_suggest"] || !k) {
        o([]), c(!1);
        return;
      }
      const T = Ml(r), C = T[T.length - 1];
      if (C) {
        const L = C.match(k);
        if (L) {
          const V = L[1].toLowerCase();
          let F = L[2];
          F.startsWith('"') && (F = F.substring(1)), F.endsWith('"') && (F = F.substring(0, F.length - 1));
          const Q = await lg(F, V);
          o(Q), c(Q.length > 0), _(-1);
        } else {
          const V = C.replace(/^([-!])/, "").toLowerCase();
          if (V && j) {
            const F = j.all_prefixes.filter((Q) => Q.startsWith(V)).map((Q) => ({
              type: Q,
              value: "",
              count: 0
            }));
            if (F.length > 0) {
              o(F), c(!0), _(-1);
              return;
            }
          }
          o([]), c(!1);
        }
      } else
        o([]), c(!1);
    }, 300);
    return () => clearTimeout(R);
  }, [
    r,
    e.settings["search.input_suggest"],
    k,
    j
  ]);
  const O = m.useCallback(
    (R) => {
      var de;
      const T = Ml(r), L = (T.pop() || "").match(/^([-!])/), V = L ? L[1] : "", Q = ((j == null ? void 0 : j.no_quote_prefixes) || []).includes(R.type);
      if (R.value === "") {
        const B = `${[...T, `${V}${R.type}:`].join(" ").trim()}`;
        l(B);
      } else {
        const B = Q ? R.value : `"${R.value}"`, J = `${[
          ...T,
          `${V}${R.type}:${B}`
        ].join(" ").trim()} `;
        l(J), o([]), c(!1);
      }
      (de = u.current) == null || de.focus();
    },
    [r, j]
  ), P = (R) => {
    if (R.key === "Enter")
      i && v >= 0 ? O(a[v]) : E(r);
    else if (R.key === "Tab") {
      if (i && a.length > 0) {
        const T = v >= 0 ? v : 0;
        O(a[T]), R.preventDefault();
      }
    } else R.key === "ArrowDown" ? i && (_((T) => Math.min(T + 1, a.length - 1)), R.preventDefault()) : R.key === "ArrowUp" ? i && (_((T) => Math.max(T - 1, -1)), R.preventDefault()) : R.key === "Escape" && c(!1);
  }, D = m.useCallback(() => {
    l(""), E("");
  }, [E]), U = m.useCallback(
    (R, T, C = !1) => {
      var Le;
      const L = Ml(r), V = L[L.length - 1] || "";
      let F = !1;
      const Q = V.replace(/^([-!])/, "").toLowerCase();
      Q && R.toLowerCase().startsWith(Q) && (F = !0);
      const de = V.match(/^([-!])/), B = F && de ? de[1] : "";
      if (F && L.pop(), C) {
        const ne = [...L, `${B}${R}:`].filter(Boolean).join(" ");
        l(ne), (Le = u.current) == null || Le.focus();
        return;
      }
      const fe = ((j == null ? void 0 : j.no_quote_prefixes) || []).includes(R) ? T : `"${T}"`, be = `${B}${R}:${fe}`, le = [...L, be].filter(Boolean).join(" ");
      l(le), E(le);
    },
    [r, E, j]
  ), ee = m.useCallback(
    (R) => {
      l(R), R || E("");
    },
    [E]
  ), N = m.useCallback(() => {
    if (r === p.current || !k)
      return;
    const R = Ml(r), T = R[R.length - 1];
    if (!T) return;
    const C = !!T.match(k), L = T.replace(/^([-!])/, "").toLowerCase(), V = L && (j == null ? void 0 : j.all_prefixes.some((F) => F.startsWith(L)));
    (C || V) && c(!0);
  }, [r, k, j]), I = m.useCallback(() => {
    setTimeout(() => c(!1), 200);
  }, []);
  return {
    inputValue: r,
    setInputValue: l,
    suggestions: a,
    showSuggestions: i,
    setShowSuggestions: c,
    searchSuggestions: d,
    allKeywords: h,
    showAllKeywords: x,
    toggleShowAllKeywords: S,
    selectedIndex: v,
    setSelectedIndex: _,
    inputRef: u,
    isQueryChanged: b,
    handleSearch: E,
    handleKeyDown: P,
    applySuggestion: O,
    clearSearch: D,
    applySearchSuggestion: U,
    handleInputChange: ee,
    handleInputFocus: N,
    handleInputBlur: I
  };
}, Sc = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ s.jsx(dr, { size: 12 });
    case "model":
      return /* @__PURE__ */ s.jsx(yh, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ s.jsx(Fh, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ s.jsx(vh, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ s.jsx(Hu, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ s.jsx(Qu, { size: 12 });
    case "note":
      return /* @__PURE__ */ s.jsx(jh, { size: 12 });
    case "sort":
      return /* @__PURE__ */ s.jsx(gh, { size: 12 });
    default:
      return null;
  }
}, ay = ({
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
  toggleShowAllKeywords: f,
  applySearchSuggestion: h,
  favorites: w,
  onSelectFavorite: x,
  onEditFavorite: v,
  onDeleteFavorite: _
}) => {
  const j = (y, k, S) => /* @__PURE__ */ s.jsxs(
    "button",
    {
      type: "button",
      onClick: () => h(y.type, y.value, S === "all"),
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
            children: Sc(y.type)
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
        S !== "all" && /* @__PURE__ */ s.jsx(
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
    `${S}-${y.type}:${y.value}:${k}`
  ), g = () => !e || t.length === 0 ? null : /* @__PURE__ */ s.jsx(
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
      children: t.map((y, k) => /* @__PURE__ */ s.jsx(
        "div",
        {
          onMouseDown: (S) => {
            S.preventDefault(), l(y);
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
                    children: Sc(y.type)
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
                      color: y.value === St ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                      fontSize: "14px",
                      fontWeight: y.value === St ? "bold" : "normal"
                    },
                    children: y.value === St ? y.type === "tag" ? `Untagged (${St})` : `No ${y.type} (${St})` : y.value
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
              (y, k) => j(y, k, "quick")
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
                        onClick: f,
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
                    (y, k) => j({ type: y, value: "" }, k, "all")
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
              Nm,
              {
                fav: y,
                onSelect: x,
                onEdit: v,
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
        g(),
        u(),
        p()
      ]
    }
  );
}, oy = () => {
  const { state: e } = ve(), {
    inputValue: t,
    setInputValue: n,
    suggestions: r,
    showSuggestions: l,
    searchSuggestions: a,
    allKeywords: o,
    showAllKeywords: i,
    toggleShowAllKeywords: c,
    selectedIndex: d,
    setSelectedIndex: f,
    inputRef: h,
    isQueryChanged: w,
    handleSearch: x,
    handleKeyDown: v,
    applySuggestion: _,
    clearSearch: j,
    applySearchSuggestion: g,
    handleInputChange: u,
    handleInputFocus: p,
    handleInputBlur: y
  } = sy(), {
    isSaving: k,
    toastMessage: S,
    toastType: b,
    editingFavorite: E,
    setEditingFavorite: O,
    editFavoriteName: P,
    setEditFavoriteName: D,
    editFavoriteQuery: U,
    setEditFavoriteQuery: ee,
    handleDeleteFavorite: N,
    handleEditFavorite: I,
    handleSaveEditFavorite: R,
    handleSaveFavorite: T,
    setToastMessage: C
  } = Em(), L = async () => {
    if (e.favorites.some(
      (J) => J.query === e.searchQuery
    )) {
      C("This query is already in your favorites.", "error");
      return;
    }
    await T();
  };
  tt({
    onEscape: () => O(null),
    enabled: !!E
  });
  const V = m.useRef(null), F = m.useRef(!1);
  m.useEffect(() => {
    E && V.current && V.current.focus();
  }, [E]);
  const Q = (B) => {
    B.target === B.currentTarget && (F.current = !0);
  }, de = (B) => {
    B.target === B.currentTarget && F.current && O(null), F.current = !1;
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
              S && /* @__PURE__ */ s.jsx(
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
                    border: b === "error" ? "1px solid var(--brand-red, #ff4c4c)" : "1px solid var(--comfy-menu-border, #444)",
                    animation: "meld-fade-in-down 0.3s ease-out",
                    width: "max-content",
                    maxWidth: "300px"
                  },
                  children: S
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
                        onClick: () => x(t),
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
                        onMouseEnter: (B) => {
                          B.currentTarget.style.transform = "translateY(-1px)", w ? (B.currentTarget.style.filter = "brightness(1.15)", B.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : B.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                        },
                        onMouseLeave: (B) => {
                          B.currentTarget.style.transform = "none", w ? (B.currentTarget.style.filter = "none", B.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : B.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                        },
                        onMouseDown: (B) => {
                          B.currentTarget.style.transform = "translateY(1px)", B.currentTarget.style.boxShadow = "none";
                        },
                        onMouseUp: (B) => {
                          B.currentTarget.style.transform = "translateY(-1px)";
                        },
                        title: "Search (Enter)",
                        children: [
                          /* @__PURE__ */ s.jsx(
                            En,
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
                        ref: h,
                        type: "text",
                        value: t,
                        onChange: (B) => u(B.target.value),
                        onKeyDown: v,
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
                        disabled: k,
                        title: e.favorites.some((B) => B.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                            color: e.favorites.some((B) => B.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((B) => B.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
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
                        children: /* @__PURE__ */ s.jsx(ye, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ s.jsx(
                ay,
                {
                  showSuggestions: l,
                  suggestions: r,
                  selectedIndex: d,
                  setSelectedIndex: f,
                  applySuggestion: _,
                  inputValue: t,
                  searchQuery: e.searchQuery,
                  searchSuggestions: a,
                  allKeywords: o,
                  showAllKeywords: i,
                  toggleShowAllKeywords: c,
                  applySearchSuggestion: g,
                  favorites: e.favorites,
                  onSelectFavorite: (B) => {
                    n(B), x(B);
                  },
                  onEditFavorite: I,
                  onDeleteFavorite: N
                }
              )
            ]
          }
        ),
        E && pe.createPortal(
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-modal-overlay",
              onMouseDown: Q,
              onMouseUp: de,
              style: {
                zIndex: 3e3
              },
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-modal-content meld-modal-content--small",
                  onClick: (B) => B.stopPropagation(),
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
                          children: /* @__PURE__ */ s.jsx(ye, { size: 20 })
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
                                    value: P,
                                    onChange: (B) => D(B.target.value),
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
                                    onKeyDown: (B) => {
                                      B.key === "Enter" && R(), B.key === "Escape" && O(null);
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
                                    onChange: (B) => ee(B.target.value),
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
                                    onKeyDown: (B) => {
                                      B.key === "Enter" && !B.shiftKey && (B.preventDefault(), R()), B.key === "Escape" && O(null);
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
                          onClick: R,
                          disabled: k || !P.trim() || !U.trim(),
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
}, iy = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = m.useState([]), [l, a] = m.useState(!0), [o, i] = m.useState(""), [c, d] = m.useState(""), [f, h] = m.useState(!1), [w, x] = m.useState(null), [v, _] = m.useState(""), [j, g] = m.useState(!1), u = m.useRef(null), p = m.useCallback(async () => {
    a(!0);
    try {
      const D = await ai();
      r(D);
    } catch (D) {
      console.error("Failed to fetch tags:", D);
    } finally {
      a(!1);
    }
  }, []);
  m.useEffect(() => {
    p();
  }, [p]), m.useEffect(() => {
    w !== null && u.current && (u.current.focus(), u.current.select());
  }, [w]);
  const y = async (D) => {
    D.preventDefault();
    const U = c.trim();
    if (!(!U || f)) {
      if (U.toLowerCase() === St) {
        alert(
          `Tag name '${St}' is reserved for search and cannot be used.`
        );
        return;
      }
      if (n.some((ee) => ee.name.toLowerCase() === U.toLowerCase())) {
        alert(`Tag "${U}" already exists.`);
        return;
      }
      h(!0);
      try {
        await Cg(U), d(""), await p();
      } catch (ee) {
        console.error("Failed to add tag:", ee);
      } finally {
        h(!1);
      }
    }
  }, k = async (D, U) => {
    if (confirm(`Are you sure you want to delete tag "${U}"?`))
      try {
        await Eg(D), await p();
      } catch (ee) {
        console.error("Failed to delete tag:", ee);
      }
  }, S = (D) => {
    x(D.id), _(D.name);
  }, b = () => {
    x(null), _("");
  }, E = async (D) => {
    D.preventDefault();
    const U = v.trim();
    if (!U || w === null || j) return;
    if (U.toLowerCase() === St) {
      alert(
        `Tag name '${St}' is reserved for search and cannot be used.`
      );
      return;
    }
    const ee = n.find((N) => N.id === w);
    if (ee && ee.name === U) {
      b();
      return;
    }
    if (n.some(
      (N) => N.id !== w && N.name.toLowerCase() === U.toLowerCase()
    )) {
      alert(`Tag "${U}" already exists.`);
      return;
    }
    g(!0);
    try {
      await Ng(w, U), b(), await p();
    } catch (N) {
      console.error("Failed to rename tag:", N), alert(N instanceof Error ? N.message : "Failed to rename tag");
    } finally {
      g(!1);
    }
  }, O = (D) => {
    t(`tag:${D}`);
  }, P = m.useMemo(() => n.filter(
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
          children: /* @__PURE__ */ s.jsx(ye, { size: 16 })
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
            disabled: f
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !c.trim() || f,
            children: [
              /* @__PURE__ */ s.jsx(Ds, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ s.jsx(En, { size: 14, className: "meld-tag-search-icon" }),
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
      l ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-list", children: P.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : P.map((D) => /* @__PURE__ */ s.jsx("div", { className: "meld-tag-item", children: w === D.id ? /* @__PURE__ */ s.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: E,
          children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "text",
                ref: u,
                className: "meld-tag-rename-input",
                value: v,
                onChange: (U) => _(U.target.value),
                onKeyDown: (U) => U.key === "Escape" && b()
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: j || !v.trim(),
                children: /* @__PURE__ */ s.jsx(ti, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: b,
                disabled: j,
                children: /* @__PURE__ */ s.jsx(ye, { size: 14 })
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
              children: /* @__PURE__ */ s.jsx(En, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => S(D),
              children: /* @__PURE__ */ s.jsx(qu, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => k(D.id, D.name),
              children: /* @__PURE__ */ s.jsx(Ut, { size: 14 })
            }
          )
        ] })
      ] }) }, D.id)) })
    ] })
  ] });
}, ia = 56, Mm = (e, t) => {
  const n = m.useCallback(
    (r) => {
      const l = t["gallery.lineage_max_depth"];
      if (l === 0) return [];
      if (r.ancestors && r.ancestors.length > 0)
        return r.ancestors.slice(0, l).map((d) => ({
          id: d.id,
          imgSrc: ht(d, ia)
        }));
      const a = r.parent_id;
      if (!a || !r.parent_filename) return [];
      const o = e.find((d) => d.id === a);
      let i = null;
      if (o ? i = ht(o, ia) : i = ht(
        {
          filename: r.parent_filename,
          subfolder: r.parent_subfolder || "",
          type: r.parent_type
        },
        ia
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
function cy(e) {
  const { ids: t, index: n, loopEnabled: r, hasMore: l } = e;
  if (t.length === 0 || n < 0 || n >= t.length)
    return { prevId: null, nextId: null };
  const a = n === 0, i = n === t.length - 1 ? l || !r ? null : t[0] : t[n + 1];
  return { prevId: a ? l || !r ? null : t[t.length - 1] : t[n - 1], nextId: i };
}
const dy = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  var Y;
  const { viewerImageId: l, images: a, viewerMode: o, lineageImages: i, settings: c } = e, {
    handleEditTags: d,
    handleEditNotes: f,
    handleRestore: h,
    handleUpdateUserNotes: w,
    handleRestoreWorkflow: x,
    handleAddUnifiedLoader: v,
    handleSendToWorkflow: _,
    handleRunWithWorkflow: j,
    handleRunWithMask: g,
    handleEditSource: u
  } = Ps(e, t), { getParentChain: p } = Mm(a, c), [y, k] = m.useState(!1), [S, b] = m.useState(!1), [E, O] = m.useState(
    c["viewer.show_details_by_default"]
  ), [P, D] = m.useState(null), U = P ?? c["viewer.show_thumbnails"], [ee, N] = m.useState(!1), [I, R] = m.useState(!1), [T, C] = m.useState(null), [L, V] = m.useState(null), [F, Q] = m.useState(
    null
  ), de = m.useRef(null), B = m.useRef(!0);
  m.useEffect(() => (B.current = !0, () => {
    B.current = !1;
  }), []);
  const J = m.useRef(l);
  m.useEffect(() => {
    J.current = l;
  }, [l]);
  const H = m.useMemo(() => {
    const A = e.searchQuery.trim() !== "";
    return o === "lighttable" && e.viewerLightTableSlotId ? (ue.getState().buckets[e.viewerLightTableSlotId] || []).map((q) => {
      const Z = Number.parseInt(q, 10);
      return a.find((ae) => ae.id === Z) || i.find((ae) => ae.id === Z) || null;
    }).filter((q) => q !== null) : o === "lineage" ? i : a.filter(
      (z) => z.exists !== !1 && (c["gallery.show_parent_images"] || A || !z.has_children)
    );
  }, [
    o,
    e.viewerLightTableSlotId,
    i,
    a,
    c,
    e.searchQuery
  ]), fe = l === null ? -1 : H.findIndex((A) => A.id === l), le = (o === "lineage" && i.length > 0 ? i : o === "lighttable" ? H : a).find((A) => A.id === l) || (l === ((Y = e.viewerFallbackImage) == null ? void 0 : Y.id) ? e.viewerFallbackImage : void 0), Le = m.useCallback(
    async (A = !1) => {
      if (!le) return;
      const z = y ? c["fullscreen.delete_mode"] : c["viewer.delete_mode"];
      if (!A && z === "confirm") {
        t({
          type: "OPEN_MODAL",
          payload: {
            type: "delete_confirm",
            imageIds: [le.id],
            hasLineage: !!(le.parent_id || le.has_children),
            isPermanent: e.viewScope === "trash"
          }
        });
        return;
      }
      try {
        const M = e.viewScope === "trash", K = /* @__PURE__ */ new Set([le.id]);
        if (z === "lineage") {
          const q = await to(le.id);
          for (const Z of q)
            K.add(Z.id);
        }
        if (!B.current || J.current === null) return;
        if (H.length > K.size) {
          let q = !1;
          for (let Z = fe + 1; Z < H.length; Z++)
            if (!K.has(H[Z].id)) {
              t({
                type: "OPEN_VIEWER",
                payload: { id: H[Z].id, mode: o }
              }), q = !0;
              break;
            }
          if (!q) {
            for (let Z = fe - 1; Z >= 0; Z--)
              if (!K.has(H[Z].id)) {
                t({
                  type: "OPEN_VIEWER",
                  payload: { id: H[Z].id, mode: o }
                }), q = !0;
                break;
              }
          }
          q || t({ type: "CLOSE_VIEWER" });
        } else
          t({ type: "CLOSE_VIEWER" });
        if (await so(
          Array.from(K),
          M
        ), !M) {
          const q = H.filter(
            (Z) => K.has(Z.id)
          );
          C(q), V(null);
        }
        t({ type: "REMOVE_IMAGES", payload: Array.from(K) });
      } catch (M) {
        t({
          type: "SET_ERROR",
          payload: M instanceof Error ? M.message : String(M)
        });
      }
    },
    [
      le,
      y,
      c,
      e.viewScope,
      H,
      fe,
      o,
      t
    ]
  ), ne = m.useCallback(() => {
    le && d(le);
  }, [le, d]), Be = m.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: y } });
  }, [t, y]), Fe = m.useCallback(async () => {
    const A = y ? c["fullscreen.loop"] : c["viewer.loop"];
    if (fe === 0 && o === "gallery" && e.pagination.hasMore && !I && A) {
      R(!0);
      try {
        const z = e.pagination.limit, M = e.pagination.total, K = Math.max(0, M - z), q = await Bl(
          K,
          z,
          e.searchQuery
        );
        if (!B.current || (t({ type: "APPEND_IMAGES", payload: q }), J.current === null)) return;
        if (q.images.length > 0) {
          const Z = q.images[q.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: Z.id, mode: "gallery" }
          });
        }
      } catch (z) {
        console.error("Failed to jump to end:", z);
      } finally {
        R(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: y } });
  }, [
    fe,
    o,
    e.pagination,
    e.searchQuery,
    c,
    t,
    I,
    y
  ]), it = m.useCallback(
    (A) => {
      A && "stopPropagation" in A && A.stopPropagation();
      const z = de.current;
      z && (document.fullscreenElement ? document.exitFullscreen() : z.requestFullscreen().catch((M) => {
        console.error(
          `Error attempting to enable full-screen mode: ${M.message}`
        );
      }));
    },
    []
  ), Bt = m.useCallback(async () => {
    le && (H.length > 1 ? Be() : t({ type: "CLOSE_VIEWER" }), await h(le));
  }, [le, H.length, Be, h, t]), ur = m.useCallback(async () => {
    if (!T || T.length === 0) return;
    const A = T.map((M) => M.id), z = A[0];
    try {
      const M = await li(A);
      if (!B.current) return;
      if (t({ type: "ADD_IMAGES", payload: T }), e.viewScope === "trash") {
        const K = M.restored_ids || A;
        t({ type: "REMOVE_IMAGES", payload: K });
      }
      if (C(null), !B.current) return;
      t({
        type: "OPEN_VIEWER",
        payload: { id: z, mode: o }
      });
    } catch (M) {
      t({
        type: "SET_ERROR",
        payload: M instanceof Error ? M.message : String(M)
      });
    }
  }, [T, t, o, e.viewScope]), mr = m.useCallback(async () => {
    if (T && T.length > 0)
      await ur();
    else if (L && L.type === "tags") {
      const { imageId: A, addTags: z, removeTags: M } = L;
      try {
        await no([A], z, M);
        const K = (o === "lineage" ? i : a).find((q) => q.id === A);
        if (K) {
          const q = [...K.tags];
          for (const ae of z)
            q.includes(ae) || q.push(ae);
          const Z = q.filter((ae) => !M.includes(ae));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...K, tags: Z }
          }), t({
            type: "OPEN_VIEWER",
            payload: { id: A, mode: o }
          });
        }
        V(null);
      } catch (K) {
        t({
          type: "SET_ERROR",
          payload: K instanceof Error ? K.message : String(K)
        });
      }
    }
  }, [
    T,
    L,
    ur,
    a,
    i,
    o,
    t
  ]), ol = m.useCallback(
    async (A) => {
      if (!A || !le) return;
      const z = le.id, M = [...le.tags], K = $g(A, le), {
        addTags: q,
        removeTags: Z,
        isDeleted: ae,
        moveNext: ie,
        movePrev: Ee,
        sendToLtSlot: qe
      } = K;
      if (qe) {
        const Re = ue.getState(), vt = Re.slots.find(
          (ct) => ct.id.toLowerCase() === qe.toLowerCase() || ct.label.toLowerCase() === qe.toLowerCase()
        );
        vt ? (Re.addToBucket(vt.id, String(z), le), Re.showToast(`Sent to ${vt.label}`)) : (Re.showToast(
          `Error: Light Table slot "${qe}" not found`,
          "error"
        ), console.warn(
          `Attempted to send to non-existent LT slot: ${qe}`
        ));
      }
      if (q.length > 0 || Z.length > 0)
        try {
          await no(
            [z],
            q,
            Z
          );
          const Re = [...M];
          for (const ct of q)
            Re.includes(ct) || Re.push(ct);
          const vt = Re.filter((ct) => !Z.includes(ct));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...le, id: z, tags: vt }
          }), V({
            type: "tags",
            imageId: z,
            addTags: [...Z],
            removeTags: [...q]
          }), C(null);
        } catch (Re) {
          console.error("Failed to update tags via shortcut:", Re);
        }
      ae ? Le(!0) : ie ? Be() : Ee && Fe();
    },
    [le, t, Be, Fe, Le]
  );
  m.useEffect(() => {
    const A = (M) => {
      const K = M.target, q = K.tagName === "INPUT" || K.tagName === "TEXTAREA" || K.isContentEditable;
      if (q && M.key !== "Escape") {
        M.key === "Enter" && (M.ctrlKey || M.metaKey) && M.preventDefault();
        return;
      }
      if (l === null || e.activeModal.type !== "none")
        return;
      const Z = M.key === "Delete" || M.key === "Backspace", ae = M.key === "ArrowRight" || M.key === "ArrowLeft" || M.key === "ArrowDown" || M.key === "ArrowUp", ie = [
        "f",
        "F",
        "i",
        "I",
        "t",
        "T",
        "r",
        "R",
        "Enter"
      ].includes(M.key), Ee = M.key === "Escape", qe = (M.ctrlKey || M.metaKey) && (M.key === "z" || M.key === "Z" || M.code === "KeyZ"), Re = /^[0-9]$/.test(M.key) && !M.ctrlKey && !M.metaKey && !M.altKey && M.code !== "KeyZ";
      if (Z || ae || ie || Ee || qe || Re)
        if (!q)
          M.preventDefault(), M.stopPropagation(), M.stopImmediatePropagation();
        else if (Ee)
          M.preventDefault(), M.stopPropagation(), M.stopImmediatePropagation();
        else
          return;
      else
        return;
      if (M.key === "Escape")
        document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" });
      else if (M.key === "ArrowRight" || M.key === "ArrowDown")
        Be();
      else if (M.key === "ArrowLeft" || M.key === "ArrowUp")
        Fe();
      else if (M.key === "f" || M.key === "F" || M.key === "Enter")
        it(M);
      else if (M.key === "i" || M.key === "I")
        O((vt) => !vt);
      else if (M.key === "t" || M.key === "T")
        ne();
      else if ((M.key === "r" || M.key === "R") && e.viewScope === "trash")
        Bt();
      else if (M.key === "Delete")
        Le();
      else if ((M.ctrlKey || M.metaKey) && (M.key === "z" || M.key === "Z"))
        mr();
      else if (Re && !q) {
        const vt = `viewer.shortcut.${M.key}`, ct = c[vt];
        typeof ct == "string" && ct && (Q(M.key), setTimeout(() => {
          B.current && Q(null);
        }, 500), ol(ct));
      }
    };
    window.addEventListener("keydown", A, { capture: !0 });
    const z = () => {
      const M = !!document.fullscreenElement;
      k(M), O(M ? c["fullscreen.show_details_by_default"] : c["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", z), () => {
      window.removeEventListener("keydown", A, { capture: !0 }), document.removeEventListener("fullscreenchange", z);
    };
  }, [
    l,
    t,
    it,
    Be,
    Fe,
    c,
    Le,
    e.activeModal.type,
    mr,
    ne,
    Bt,
    e.viewScope,
    ol
  ]), m.useEffect(() => {
    l !== null && r(l).catch((A) => {
      console.error("Failed to fetch full image details for viewer:", A);
    });
  }, [l, r]), m.useEffect(() => {
    o === "lineage" && l !== null && i.length === 0 && (N(!0), to(l).then((A) => {
      B.current && t({ type: "SET_LINEAGE", payload: A });
    }).catch((A) => {
      console.error("Failed to fetch lineage:", A);
    }).finally(() => {
      B.current && N(!1);
    }));
  }, [o, l, i.length, t]), m.useEffect(() => {
    o !== "gallery" || l === null || e.isLoading || !e.pagination.hasMore || fe !== -1 && fe >= H.length - 15 && n();
  }, [
    l,
    H.length,
    o,
    e.isLoading,
    e.pagination.hasMore,
    n,
    fe
  ]);
  const fr = m.useMemo(() => {
    if (!U || fe === -1) return [];
    const A = c["viewer.thumbnail_window_size"], z = Math.floor(A / 2);
    let M = Math.max(0, fe - z);
    const K = Math.min(H.length, M + A);
    return K === H.length && (M = Math.max(0, K - A)), H.slice(M, K).map((q, Z) => ({
      img: q,
      absIndex: M + Z
    }));
  }, [H, fe, c, U]), $ = m.useMemo(() => le ? p(le) : [], [le, p]);
  return m.useEffect(() => {
    var A, z;
    if (l !== null) {
      if (U) {
        const M = document.querySelector(
          ".meld-viewer-thumbnail--active"
        );
        M && M.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((A = document.activeElement) == null ? void 0 : A.tagName) === "CANVAS" && document.activeElement.blur(), (z = de.current) == null || z.focus();
    }
  }, [l, U]), m.useEffect(() => {
    if (l === null || H.length === 0) return;
    const A = H.map((ae) => ae.id), z = A.indexOf(l);
    if (z === -1) return;
    const M = y ? c["fullscreen.loop"] : c["viewer.loop"], { prevId: K, nextId: q } = cy({
      ids: A,
      index: z,
      loopEnabled: M,
      hasMore: e.pagination.hasMore && o === "gallery"
    }), Z = setTimeout(() => {
      const ae = [K, q].filter(
        (ie) => ie !== null && ie !== l
      );
      ae.length !== 0 && Promise.allSettled(ae.map((ie) => r(ie))).then(
        (ie) => {
          for (const Ee of ie)
            Ee.status === "rejected" && te.warn(
              "Prefetching adjacent image details failed",
              Ee.reason
            );
        }
      );
    }, 50);
    return () => clearTimeout(Z);
  }, [
    l,
    H,
    y,
    c,
    e.pagination.hasMore,
    o,
    r
  ]), m.useEffect(() => {
    if (l === null || H.length === 0) return;
    const A = H.findIndex(
      (q) => q.id === l
    );
    if (A === -1) return;
    const z = (q) => si(q), M = [
      A + 1,
      A + 2,
      A - 1
    ], K = setTimeout(() => {
      for (const q of M)
        if (q >= 0 && q < H.length) {
          const Z = H[q], ae = new Image();
          ae.src = z(Z);
        }
    }, 150);
    return () => clearTimeout(K);
  }, [l, H]), {
    isFullscreen: y,
    showDetails: E,
    setShowDetails: O,
    showThumbnails: U,
    setShowThumbnailsOverride: D,
    isLoadingLineage: ee,
    isJumping: I,
    isMenuOpen: S,
    setIsMenuOpen: b,
    activeShortcutKey: F,
    lastDeletedImages: T,
    setLastDeletedImages: C,
    overlayRef: de,
    handleNext: Be,
    handlePrevious: Fe,
    handleDelete: Le,
    handleUpdateUserNotes: w,
    handleEditNotes: () => le && f(le),
    handleTagEdit: ne,
    handleRestore: Bt,
    handleUndo: mr,
    handleRestoreWorkflow: async () => {
      if (!le) return;
      await x(le) && t({ type: "CLOSE_VIEWER" });
    },
    handleAddUnifiedLoader: async () => {
      if (!le) return;
      await v(le) && t({ type: "CLOSE_VIEWER" });
    },
    handleSendToWorkflow: () => {
      if (!le) return;
      _(le) && t({ type: "CLOSE_VIEWER" });
    },
    handleRunWithWorkflow: () => le && j(le),
    handleRunWithMask: (A) => le && g(le, A),
    handleEditSource: () => le && u(le),
    toggleFullscreen: it,
    currentIndex: fe,
    currentThumbnails: H,
    image: le,
    windowedThumbnails: fr,
    parentChain: $
  };
}, ii = ({
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
  onEditTags: f,
  onEditNotes: h,
  onDelete: w,
  onRestore: x,
  showRestore: v,
  deleteLabel: _,
  showQuickShortcuts: j = !0,
  variant: g = "default",
  iconSize: u = 16,
  buttonClassName: p = ""
}) => {
  const [y, k] = m.useState("left");
  m.useEffect(() => {
    e && n.current && (n.current.getBoundingClientRect().left < 200 ? k("right") : k("left"));
  }, [e, n]);
  const S = (O) => {
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
        return f;
      case "edit_notes":
        return h;
      case "restore_image":
        return x;
      case "delete_or_trash":
        return w;
      default:
        return null;
    }
  }, b = [
    r["gallery.quick_shortcut.1"],
    r["gallery.quick_shortcut.2"],
    r["gallery.quick_shortcut.3"]
  ].filter((O) => O && O !== ""), E = [
    "meld-image-card__menu-container",
    g === "thumbnail_overlay_top_right" && "meld-image-card__menu-container--thumbnail-overlay"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsxs("div", { className: E, ref: n, children: [
    /* @__PURE__ */ s.jsx(
      "button",
      {
        type: "button",
        className: `meld-image-card__menu-btn ${p}`,
        onClick: (O) => {
          O.stopPropagation(), t(!e);
        },
        title: "Menu",
        children: /* @__PURE__ */ s.jsx(Ph, { size: u })
      }
    ),
    j && b.map((O, P) => {
      const D = ym.find((N) => N.id === O);
      if (!D || !D.icon) return null;
      const U = D.icon, ee = S(O);
      return !ee || O === "restore_image" && !v ? null : /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: `meld-image-card__menu-btn ${p}`,
          onClick: (N) => {
            N.stopPropagation(), ee();
          },
          title: D.label,
          children: /* @__PURE__ */ s.jsx(U, { size: u })
        },
        `${O}-${P}`
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
            icon: om,
            handler: l
          },
          {
            id: "send_to_workflow",
            label: "Send to Workflow",
            icon: um,
            handler: o
          },
          {
            id: "send_to_workflow_mask",
            label: "Send to Workflow (Mask)",
            icon: mm,
            handler: () => c("apply")
          },
          {
            id: "queue_workflow",
            label: "Queue Workflow",
            icon: cm,
            handler: i
          },
          {
            id: "queue_workflow_mask",
            label: "Queue Workflow (Mask)",
            icon: dm,
            handler: () => c("run")
          },
          {
            id: "restore_full_workflow",
            label: "Restore Full Workflow",
            icon: im,
            handler: a
          },
          {
            id: "edit_tags",
            label: "Edit Tags",
            icon: pm,
            handler: f
          },
          {
            id: "edit_notes",
            label: "Edit Notes",
            icon: hm,
            handler: h
          },
          {
            id: "edit_source_image",
            label: "Edit Source Image",
            icon: fm,
            handler: d
          },
          ...v ? [
            {
              id: "restore_image",
              label: "Restore Image",
              icon: gm,
              handler: x,
              color: "var(--meld-accent-color)"
            }
          ] : [],
          {
            id: "delete_or_trash",
            label: _,
            icon: Ut,
            handler: w,
            className: "meld-image-card__menu-item--danger",
            color: "var(--meld-danger-color)"
          }
        ].map((O) => /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: `meld-image-card__menu-item ${O.className || ""}`,
            onMouseDown: (P) => P.stopPropagation(),
            onClick: (P) => {
              P.preventDefault(), P.stopPropagation(), t(!1), setTimeout(() => O.handler(), 0);
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
}, uy = ({
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
}) }) : null, my = ({
  image: e,
  isFullscreen: t,
  settings: n,
  showIcons: r,
  parentChain: l,
  dispatch: a,
  onEditNotes: o
}) => {
  const [i, c] = m.useState("idle");
  m.useEffect(() => {
    c("idle");
  }, []);
  const d = t ? n["fullscreen.details.show_user_notes"] : n["viewer.details.show_user_notes"], f = d === "always" || d === "if_present" && e.user_notes;
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
            (h, w) => h.imgSrc && /* @__PURE__ */ s.jsx(
              "img",
              {
                src: h.imgSrc,
                className: "meld-lineage-badge__parent-thumb",
                style: { cursor: "pointer" },
                loading: "lazy",
                onClick: (x) => {
                  x.stopPropagation(), a({
                    type: "OPEN_VIEWER",
                    payload: {
                      id: h.id || e.id,
                      mode: "lineage"
                    }
                  });
                },
                title: w === 0 ? "Source" : w === 1 ? "Grand-Source" : `Ancestor (S${w + 1})`,
                alt: "source thumb"
              },
              h.id || w
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
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-tags", children: e.tags.map((h) => /* @__PURE__ */ s.jsx("span", { className: "meld-viewer-details-tag", children: h }, h)) })
        ] }),
        f && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item meld-viewer-details-item--notes", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-label", children: [
            "Notes",
            i === "saving" && /* @__PURE__ */ s.jsx("span", { className: "meld-notes-status", children: "Saving..." })
          ] }),
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-viewer-notes-preview",
              onClick: (h) => {
                h.stopPropagation(), o == null || o();
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
}, Im = m.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r
  }) => {
    const l = e.id === t, a = typeof n.parent_id == "number" && n.parent_id === e.id, o = typeof e.parent_id == "number" && e.parent_id === n.id, i = ht(e, 64);
    return /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail-wrapper", children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-viewer-thumbnail ${l ? "meld-viewer-thumbnail--active" : ""} ${a ? "meld-viewer-thumbnail--parent" : ""} ${o ? "meld-viewer-thumbnail--child" : ""}`,
        onClick: () => r({
          type: "OPEN_VIEWER",
          payload: { id: e.id, mode: "gallery" }
        }),
        title: e.filename,
        children: [
          /* @__PURE__ */ s.jsx("img", { src: i, alt: e.filename }),
          (a || o) && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `meld-viewer-thumbnail-relation-icon ${a ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`,
              title: a ? "Source Image" : "Derivative Image",
              children: a ? /* @__PURE__ */ s.jsx(Hu, { size: 12 }) : /* @__PURE__ */ s.jsx(Qu, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
Im.displayName = "ThumbnailItem";
const fy = ({
  windowedThumbnails: e,
  viewerImageId: t,
  currentImage: n,
  dispatch: r,
  isLoadingLineage: l,
  isLoading: a,
  viewerMode: o
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
  ) : e.map(({ img: i }) => /* @__PURE__ */ s.jsx(
    Im,
    {
      thumb: i,
      viewerImageId: t,
      currentImage: n,
      dispatch: r
    },
    i.id
  )),
  o === "gallery" && a && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ s.jsx(el, { className: "animate-spin", size: 20 }) })
] }) });
function py() {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = ve(), {
    isFullscreen: l,
    showDetails: a,
    setShowDetails: o,
    showThumbnails: i,
    setShowThumbnailsOverride: c,
    isLoadingLineage: d,
    isJumping: f,
    isMenuOpen: h,
    setIsMenuOpen: w,
    activeShortcutKey: x,
    setLastDeletedImages: v,
    overlayRef: _,
    handleNext: j,
    handlePrevious: g,
    handleTagEdit: u,
    handleEditNotes: p,
    handleRestore: y,
    handleRestoreWorkflow: k,
    handleAddUnifiedLoader: S,
    handleSendToWorkflow: b,
    handleRunWithWorkflow: E,
    handleRunWithMask: O,
    handleEditSource: P,
    handleDelete: D,
    toggleFullscreen: U,
    image: ee,
    windowedThumbnails: N,
    parentChain: I
  } = dy({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  }), R = m.useRef(null), T = m.useRef(null), { executeWorkflow: C } = oi(), L = m.useMemo(() => e.viewScope === "trash" ? "Delete Permanently" : "Move to Trash", [e.viewScope]);
  if (!ee) return null;
  const { viewerImageId: V, viewerMode: F } = e, Q = l ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return pe.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: _,
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
              onClick: (de) => de.stopPropagation(),
              children: [
                Q && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: y,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ s.jsx(el, { size: 20 })
                    }
                  ),
                  !l && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => c(!i),
                      type: "button",
                      title: i ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ s.jsx(Gu, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => o(!a),
                      type: "button",
                      title: a ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ s.jsx(Ch, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: U,
                      type: "button",
                      title: l ? "Exit Fullscreen (F/Enter)" : "Fullscreen (F/Enter)",
                      children: l ? /* @__PURE__ */ s.jsx(Dh, { size: 20 }) : /* @__PURE__ */ s.jsx(Th, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    ii,
                    {
                      isMenuOpen: h,
                      setIsMenuOpen: w,
                      menuRef: T,
                      settings: e.settings,
                      onAddUnifiedLoader: S,
                      onRestoreWorkflow: k,
                      onSendToWorkflow: b,
                      onRunWithWorkflow: E,
                      onRunWithMask: O,
                      onEditSource: P,
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
                      children: /* @__PURE__ */ s.jsx(ye, { size: 20 })
                    }
                  )
                ] }),
                Q && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: g,
                    type: "button",
                    disabled: f,
                    title: "Previous (Left/Up)",
                    children: /* @__PURE__ */ s.jsx(Ku, { size: 32 })
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-image-container", children: [
                  f && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ s.jsx(el, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ s.jsx(
                    "img",
                    {
                      ref: R,
                      src: si(ee),
                      alt: ee.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[l ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${f ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                Q && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: j,
                    type: "button",
                    title: "Next (Right/Down)",
                    children: /* @__PURE__ */ s.jsx(ni, { size: 32 })
                  }
                ),
                a && /* @__PURE__ */ s.jsx(
                  my,
                  {
                    image: ee,
                    isFullscreen: l,
                    settings: e.settings,
                    showIcons: Q,
                    parentChain: I,
                    dispatch: t,
                    onEditNotes: p
                  }
                ),
                !l && i && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ s.jsx(
                  fy,
                  {
                    windowedThumbnails: N,
                    viewerImageId: V,
                    currentImage: ee,
                    dispatch: t,
                    isLoadingLineage: d,
                    isLoading: e.isLoading,
                    viewerMode: F
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  uy,
                  {
                    settings: e.settings,
                    activeShortcutKey: x
                  }
                )
              ]
            }
          ),
          e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
            km,
            {
              images: e.activeModal.images,
              isMaskMode: !!e.activeModal.maskFilename || !!e.activeModal.isMaskSequence,
              onExecute: async (de, B) => {
                if (e.activeModal.type === "workflow_selection") {
                  if (e.activeModal.isMaskSequence)
                    return t({
                      type: "OPEN_MODAL",
                      payload: {
                        type: "mask_sequence_step",
                        images: e.activeModal.images,
                        currentIndex: 0,
                        workflowName: de,
                        targetLoaderNodeId: B
                      }
                    }), !1;
                  const J = e.activeModal.maskFilename;
                  for (const H of e.activeModal.images)
                    await C(
                      de,
                      H,
                      J,
                      B
                    );
                  t({ type: "CLOSE_MODAL" }), t({ type: "CLOSE_VIEWER" });
                }
              }
            }
          ),
          e.activeModal.type === "node_selection" && /* @__PURE__ */ s.jsx(
            _m,
            {
              image: e.activeModal.image,
              nodes: e.activeModal.nodes,
              onSelect: (de) => {
                e.activeModal.type === "node_selection" && tl(e.activeModal.image, de);
              }
            }
          ),
          e.activeModal.type === "error" && /* @__PURE__ */ s.jsx(jm, { message: e.activeModal.message }),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ s.jsx(
            Sm,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: v
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ s.jsx(bm, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ s.jsx(nm, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ s.jsx(vm, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ s.jsx(
            wm,
            {
              imageIds: e.activeModal.imageIds,
              initialTags: e.activeModal.tags,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_editor" && /* @__PURE__ */ s.jsx(
            gs,
            {
              imageId: e.activeModal.imageId,
              mode: e.activeModal.mode,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_sequence_step" && /* @__PURE__ */ s.jsx(
            gs,
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
                  const de = e.activeModal.currentIndex + 1;
                  de < e.activeModal.images.length ? t({
                    type: "OPEN_MODAL",
                    payload: {
                      ...e.activeModal,
                      currentIndex: de
                    }
                  }) : (t({ type: "CLOSE_MODAL" }), t({ type: "CLOSE_VIEWER" }));
                }
              },
              onClose: () => t({ type: "CLOSE_MODAL" })
            },
            e.activeModal.images[e.activeModal.currentIndex].id
          ),
          e.activeModal.type === "note_edit" && /* @__PURE__ */ s.jsx(
            xm,
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
const hy = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = ve(), [a, o] = m.useState("gallery"), [i, c] = m.useState(""), [d, f] = m.useState(e.pagination.limit);
  m.useEffect(() => {
    f(e.pagination.limit);
  }, [e.searchQuery, e.viewScope, e.pagination.limit]);
  const h = e.searchQuery.trim() !== "", w = m.useRef(null), x = m.useRef(null), v = ue((u) => u.buckets), _ = m.useMemo(() => {
    const u = /* @__PURE__ */ new Set();
    for (const p of Object.values(v))
      for (const y of p)
        u.add(Number(y));
    return u;
  }, [v]), j = m.useMemo(() => e.images.filter((u) => _.has(u.id) ? !1 : e.viewScope === "trash" ? u.exists !== !1 || e.settings["gallery.trash.show_missing"] : u.exists !== !1 && (e.settings["gallery.show_parent_images"] || h || !u.has_children)), [
    e.images,
    e.settings,
    e.viewScope,
    _,
    h
  ]), g = m.useMemo(
    () => j.slice(0, d),
    [j, d]
  );
  return m.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && j.length === 0 && (te.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    j.length,
    r
  ]), m.useEffect(() => {
    const u = (p) => {
      p.key === "Escape" && (e.activeModal.type !== "none" ? (t({ type: "CLOSE_MODAL" }), p.preventDefault(), p.stopPropagation()) : e.selectedIds.size > 0 && (t({ type: "CLEAR_SELECTION" }), p.preventDefault(), p.stopPropagation()));
    };
    return window.addEventListener("keydown", u), () => window.removeEventListener("keydown", u);
  }, [e.activeModal.type, e.selectedIds.size, t]), m.useEffect(() => {
    const u = new IntersectionObserver(
      (y) => {
        if (y[0].isIntersecting) {
          if (e.isLoading) {
            te.log(
              "GalleryPanel: Intersection observed but already loading"
            );
            return;
          }
          d < j.length ? (te.log(
            "GalleryPanel: Increasing localLimit (local data available)",
            {
              oldLimit: d,
              newLimit: Math.min(
                d + e.pagination.limit,
                j.length
              ),
              totalAvailableLocally: j.length
            }
          ), f((k) => k + e.pagination.limit)) : e.pagination.hasMore ? (te.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : te.log(
            "GalleryPanel: Intersection observed but no more to load",
            {
              localCount: j.length,
              serverHasMore: e.pagination.hasMore
            }
          );
        }
      },
      { threshold: 0, rootMargin: "800px" }
    ), p = w.current;
    return p && u.observe(p), () => {
      p && u.unobserve(p);
    };
  }, [
    r,
    e.isLoading,
    e.pagination.hasMore,
    d,
    j.length,
    e.pagination.limit,
    e.images.length
  ]), m.useEffect(() => {
    const u = e.viewerImageId ?? x.current;
    if (u !== null && j.some((y) => y.id === u)) {
      const y = j.findIndex((k) => k.id === u);
      y >= d && f(
        Math.ceil((y + 1) / e.pagination.limit) * e.pagination.limit
      );
    }
    e.viewerImageId !== null && (x.current = e.viewerImageId);
  }, [
    e.viewerImageId,
    j,
    d,
    e.pagination.limit
  ]), {
    state: e,
    dispatch: t,
    refreshImages: n,
    loadMoreImages: r,
    updateSetting: l,
    viewMode: a,
    setViewMode: o,
    lastSearchQuery: i,
    setLastSearchQuery: c,
    localLimit: d,
    displayedImages: j,
    visibleImages: g,
    isSearchActive: h,
    loadMoreRef: w
  };
}, gy = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = ve(), { handleRunWithWorkflow: l, handleRunWithMask: a } = Ps(
    e,
    t
  ), o = e.selectedIds.size, [i, c] = m.useState(!1), [d, f] = m.useState(null), h = m.useRef(null), [w, x] = m.useState(
    null
  );
  if (m.useEffect(() => {
    const b = document.getElementById("meld-bulk-bar-portal");
    let E = b instanceof HTMLDivElement ? b : null;
    if (!E) {
      E = document.createElement("div"), E.id = "meld-bulk-bar-portal", E.dataset.mountCount = "0";
      const P = document.querySelector(".comfyui-body-bottom");
      P ? P.appendChild(E) : document.body.appendChild(E);
    }
    const O = Number.parseInt(E.dataset.mountCount || "0", 10);
    return E.dataset.mountCount = (O + 1).toString(), x(E), () => {
      if (E) {
        const D = Number.parseInt(
          E.dataset.mountCount || "1",
          10
        ) - 1;
        E.dataset.mountCount = D.toString(), D <= 0 && E.remove();
      }
    };
  }, []), tt({
    onEscape: () => c(!1),
    enabled: i
  }), o === 0 || !w) return null;
  const v = e.viewScope === "trash", _ = () => e.images.filter((b) => e.selectedIds.has(b.id)), j = () => {
    h.current && (f(h.current.getBoundingClientRect()), c(!0));
  }, g = (b) => {
    b(), c(!1);
  }, u = () => {
    const b = _(), E = /* @__PURE__ */ new Set();
    for (const O of b)
      if (O.tags)
        for (const P of O.tags)
          E.add(P);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(E)
      }
    });
  }, p = () => {
    const b = _();
    l(b);
  }, y = () => {
    const b = _();
    b.length > 0 && a(b, "run");
  }, k = () => {
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "download_options",
        imageIds: Array.from(e.selectedIds)
      }
    });
  }, S = /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-bulk-bar ${v ? "meld-bulk-bar--trash" : ""}`,
      children: [
        /* @__PURE__ */ s.jsxs("span", { className: "meld-bulk-bar__info", children: [
          o,
          " items selected"
        ] }),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            ref: h,
            type: "button",
            className: "meld-bulk-bar__button meld-bulk-bar__button--action",
            onClick: j,
            children: [
              /* @__PURE__ */ s.jsx(
                Lh,
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
              /* @__PURE__ */ s.jsx(ye, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
              "Cancel"
            ]
          }
        ),
        i && d && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-bulk-bar-menu-overlay",
              onClick: () => c(!1),
              onMouseDown: (b) => b.stopPropagation()
            }
          ),
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-bulk-bar-menu",
              style: {
                bottom: window.innerHeight - d.top + 5,
                left: d.left
              },
              onClick: (b) => b.stopPropagation(),
              children: v ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--restore",
                    onClick: () => g(r),
                    children: [
                      /* @__PURE__ */ s.jsx(el, { size: 14 }),
                      " Restore"
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--danger",
                    onClick: () => g(n),
                    children: [
                      /* @__PURE__ */ s.jsx(Ut, { size: 14 }),
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
                    onClick: () => g(u),
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
                    onClick: () => g(p),
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
                    onClick: () => g(y),
                    children: [
                      /* @__PURE__ */ s.jsx(Oh, { size: 14 }),
                      " Queue Workflow (Mask)"
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-bulk-bar-menu__item",
                    onClick: () => g(k),
                    children: [
                      /* @__PURE__ */ s.jsx(Zr, { size: 14 }),
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
                    onClick: () => g(n),
                    children: [
                      /* @__PURE__ */ s.jsx(Ut, { size: 14 }),
                      " Move to Trash"
                    ]
                  }
                )
              ] })
            }
          )
        ] })
      ]
    }
  );
  return pe.createPortal(S, w);
};
function Pn(e, t, n) {
  let r = n.initialDeps ?? [], l, a = !0;
  function o() {
    var i, c, d;
    let f;
    n.key && ((i = n.debug) != null && i.call(n)) && (f = Date.now());
    const h = e();
    if (!(h.length !== r.length || h.some((v, _) => r[_] !== v)))
      return l;
    r = h;
    let x;
    if (n.key && ((c = n.debug) != null && c.call(n)) && (x = Date.now()), l = t(...h), n.key && ((d = n.debug) != null && d.call(n))) {
      const v = Math.round((Date.now() - f) * 100) / 100, _ = Math.round((Date.now() - x) * 100) / 100, j = _ / 16, g = (u, p) => {
        for (u = String(u); u.length < p; )
          u = " " + u;
        return u;
      };
      console.info(
        `%c⏱ ${g(_, 5)} /${g(v, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * j, 120)
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
function jc(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const yy = (e, t) => Math.abs(e - t) < 1.01, vy = (e, t, n) => {
  let r;
  return function(...l) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, l), n);
  };
}, bc = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, wy = (e) => e, xy = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let l = t; l <= n; l++)
    r.push(l);
  return r;
}, _y = (e, t) => {
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
  if (l(bc(n)), !r.ResizeObserver)
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
      l(bc(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
  });
  return a.observe(n, { box: "border-box" }), () => {
    a.unobserve(n);
  };
}, Cc = {
  passive: !0
}, Ec = typeof window > "u" ? !0 : "onscrollend" in window, ky = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let l = 0;
  const a = e.options.useScrollendEvent && Ec ? () => {
  } : vy(
    r,
    () => {
      t(l, !1);
    },
    e.options.isScrollingResetDelay
  ), o = (f) => () => {
    const { horizontal: h, isRtl: w } = e.options;
    l = h ? n.scrollLeft * (w && -1 || 1) : n.scrollTop, a(), t(l, f);
  }, i = o(!0), c = o(!1);
  n.addEventListener("scroll", i, Cc);
  const d = e.options.useScrollendEvent && Ec;
  return d && n.addEventListener("scrollend", c, Cc), () => {
    n.removeEventListener("scroll", i), d && n.removeEventListener("scrollend", c);
  };
}, Sy = (e, t, n) => {
  if (t != null && t.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, jy = (e, {
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
class by {
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
        getItemKey: wy,
        rangeExtractor: xy,
        onChange: () => {
        },
        measureElement: Sy,
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
        const f = this.measurementsCache.slice(0, d), h = new Array(i).fill(
          void 0
        );
        for (let w = 0; w < d; w++) {
          const x = f[w];
          x && (h[x.lane] = w);
        }
        for (let w = d; w < n; w++) {
          const x = a(w), v = this.laneAssignments.get(w);
          let _, j;
          if (v !== void 0 && this.options.lanes > 1) {
            _ = v;
            const y = h[_], k = y !== void 0 ? f[y] : void 0;
            j = k ? k.end + this.options.gap : r + l;
          } else {
            const y = this.options.lanes === 1 ? f[w - 1] : this.getFurthestMeasurement(f, w);
            j = y ? y.end + this.options.gap : r + l, _ = y ? y.lane : w % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(w, _);
          }
          const g = c.get(x), u = typeof g == "number" ? g : this.options.estimateSize(w), p = j + u;
          f[w] = {
            index: w,
            start: j,
            size: u,
            end: p,
            key: x,
            lane: _
          }, h[_] = w;
        }
        return this.measurementsCache = f, f;
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
      (n, r, l, a) => this.range = n.length > 0 && r > 0 ? Cy({
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
        return jc(
          r[Tm(
            0,
            r.length - 1,
            (l) => jc(r[l]).start,
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
        const f = this.getOffsetForIndex(n, d);
        if (!f) {
          console.warn("Failed to get offset for index:", n);
          return;
        }
        const [h, w] = f;
        this._scrollToOffset(h, { adjustments: void 0, behavior: l }), this.targetWindow.requestAnimationFrame(() => {
          if (!this.targetWindow) return;
          const x = () => {
            if (this.currentScrollToIndex !== n) return;
            const v = this.getScrollOffset(), _ = this.getOffsetForIndex(n, w);
            if (!_) {
              console.warn("Failed to get offset for index:", n);
              return;
            }
            yy(_[0], v) || c(w);
          };
          this.isDynamicMode() ? this.targetWindow.requestAnimationFrame(x) : x();
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
const Tm = (e, t, n, r) => {
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
function Cy({
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
  let o = Tm(
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
    for (; i < l && c.some((f) => f < n + t); ) {
      const f = e[i];
      c[f.lane] = f.end, i++;
    }
    const d = Array(r).fill(n + t);
    for (; o >= 0 && d.some((f) => f >= n); ) {
      const f = e[o];
      d[f.lane] = f.start, o--;
    }
    o = Math.max(0, o - o % r), i = Math.min(l, i + (r - 1 - i % r));
  }
  return { startIndex: o, endIndex: i };
}
const Nc = typeof document < "u" ? m.useLayoutEffect : m.useEffect;
function Ey({
  useFlushSync: e = !0,
  ...t
}) {
  const n = m.useReducer(() => ({}), {})[1], r = {
    ...t,
    onChange: (a, o) => {
      var i;
      e && o ? pe.flushSync(n) : n(), (i = t.onChange) == null || i.call(t, a, o);
    }
  }, [l] = m.useState(
    () => new by(r)
  );
  return l.setOptions(r), Nc(() => l._didMount(), []), Nc(() => l._willUpdate()), l;
}
function Ny(e) {
  return Ey({
    observeElementRect: _y,
    observeElementOffset: ky,
    scrollToFn: jy,
    ...e
  });
}
const Lm = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = ve(), l = t.selectedIds.has(e.id), a = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: o,
    handleAddUnifiedLoader: i,
    handleEditSource: c,
    handleEditTags: d,
    handleSendToWorkflow: f,
    handleRunWithWorkflow: h,
    handleRunWithMask: w,
    handleRestore: x,
    handleDelete: v,
    handleEditNotes: _,
    handleUpdateUserNotes: j
  } = Ps(t, n), { getParentChain: g } = Mm(t.images, t.settings), [u, p] = m.useState(null), [y, k] = m.useState(!1), [S, b] = m.useState(null), [E, O] = m.useState(!1), P = m.useRef(null), D = async (ne, Be, Fe = !1) => {
    try {
      await navigator.clipboard.writeText(ne), Fe ? (O(!0), setTimeout(() => O(!1), 2e3)) : (b(Be), setTimeout(() => b(null), 2e3));
    } catch (it) {
      console.error("Failed to copy text: ", it);
    }
  };
  m.useEffect(() => {
    const ne = (Fe) => {
      Fe.key === "Escape" && (u ? p(null) : k(!1));
    }, Be = (Fe) => {
      P.current && !P.current.contains(Fe.target) && k(!1);
    };
    return window.addEventListener("keydown", ne), y && document.addEventListener("mousedown", Be), () => {
      window.removeEventListener("keydown", ne), document.removeEventListener("mousedown", Be);
    };
  }, [y, u]);
  const U = g(e), N = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, I = t.settings["sidebar.thumbnail_size"] || 100, R = ht(
    e,
    Math.min(400, Math.round(I * 1.5))
  );
  return {
    state: t,
    dispatch: n,
    isSelected: l,
    viewMode: a,
    popupContent: u,
    setPopupContent: p,
    isMenuOpen: y,
    setIsMenuOpen: k,
    copiedLabel: S,
    popupCopied: E,
    menuRef: P,
    parentChain: U,
    displayFilename: N,
    imgSrc: R,
    handleCopy: D,
    handleClick: (ne) => {
      ne.shiftKey ? (ne.preventDefault(), ne.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : ne.ctrlKey || ne.metaKey || t.selectedIds.size > 0 ? (ne.preventDefault(), ne.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
    },
    handleSelectToggle: (ne) => {
      ne.preventDefault(), ne.stopPropagation(), ne.shiftKey ? n({ type: "SELECT_RANGE", payload: e.id }) : n({ type: "TOGGLE_SELECT", payload: e.id });
    },
    handleContainerClick: (ne) => {
      ne.shiftKey ? (ne.preventDefault(), ne.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : ne.ctrlKey || ne.metaKey || t.selectedIds.size > 0 ? (ne.preventDefault(), ne.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : (ne.preventDefault(), ne.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleMouseDown: (ne) => {
      ne.target.closest(
        "textarea, input, button, .meld-image-card__meta-content"
      ) || !ne.shiftKey && !ne.ctrlKey && !ne.metaKey && l || (ne.shiftKey || ne.ctrlKey || ne.metaKey || t.selectedIds.size > 0) && ne.preventDefault();
    },
    handleKeyDown: (ne) => {
      var Fe, it, Bt;
      ((Fe = document.activeElement) == null ? void 0 : Fe.tagName) === "INPUT" || ((it = document.activeElement) == null ? void 0 : it.tagName) === "TEXTAREA" || (Bt = document.activeElement) != null && Bt.isContentEditable || (ne.key === "Enter" || ne.key === " ") && (ne.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
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
      f(e);
    },
    handleRestore: () => {
      x(e);
    },
    handleDelete: () => {
      v(e);
    },
    handleRunWithWorkflow: () => {
      h(e);
    },
    handleRunWithMask: (ne = "run") => w(e, ne),
    handleUpdateUserNotes: (ne) => j(e.id, ne),
    fetchFullImageDetails: r
  };
}, My = ({
  title: e,
  text: t,
  onClose: n,
  onCopy: r,
  isCopied: l
}) => pe.createPortal(
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
                l ? /* @__PURE__ */ s.jsx(ti, { size: 18, style: { color: "var(--meld-success-color)" } }) : /* @__PURE__ */ s.jsx(
                  kh,
                  {
                    className: "meld-prompt-popup-copy",
                    size: 18,
                    onClick: () => r(t)
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  ye,
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
), Dm = Xt.memo(
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
      menuRef: f,
      parentChain: h,
      displayFilename: w,
      imgSrc: x,
      handleCopy: v,
      handleClick: _,
      handleSelectToggle: j,
      handleContainerClick: g,
      handleMouseDown: u,
      handleKeyDown: p,
      handleRestoreWorkflow: y,
      handleAddUnifiedLoader: k,
      handleEditSource: S,
      handleEditTags: b,
      handleEditNotes: E,
      handleSendToWorkflow: O,
      handleRestore: P,
      handleDelete: D,
      handleRunWithWorkflow: U,
      handleRunWithMask: ee,
      fetchFullImageDetails: N
    } = Lm(e), [I, R] = m.useState("idle");
    m.useEffect(() => {
      e.user_notes && I === "saving" && R("idle");
    }, [e.user_notes, I]);
    const T = (C) => {
      C.stopPropagation();
      let L = String(e.id);
      r && t.selectedIds.size > 0 && (L = Array.from(t.selectedIds).join(",")), C.dataTransfer.setData("text/plain", L), ue.getState().setIsOpen(!0);
    };
    return /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-image-card ${r ? "meld-image-card--selected" : ""} ${o ? "meld-image-card--menu-open" : ""}`,
        onClick: g,
        onMouseDown: u,
        onKeyDown: p,
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
                className: `meld-image-card__select-checkbox ${r ? "meld-image-card__select-checkbox--checked" : ""}`,
                onClick: j,
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
                src: x,
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
                  C.stopPropagation(), _(C);
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
            t.settings["gallery.show_parent_image"] && h.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-lineage-thumbs", children: h.map(
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
                  const L = await N(e.id);
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
                        const L = await N(e.id);
                        v(L.model_name || "-", "Model");
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
                  const L = await N(e.id);
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
                        const L = await N(e.id);
                        v(
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
                  const L = await N(e.id);
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
                        const L = await N(e.id);
                        v(
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
                I === "saving" && /* @__PURE__ */ s.jsx("span", { className: "meld-notes-status", children: "Saving..." })
              ] }),
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  className: "meld-image-card__meta-content",
                  onClick: (C) => {
                    C.stopPropagation(), E();
                  },
                  children: /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__notes-preview", children: e.user_notes || /* @__PURE__ */ s.jsx("span", { className: "meld-notes-placeholder", children: "Add notes..." }) })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ s.jsx(
            ii,
            {
              isMenuOpen: o,
              setIsMenuOpen: i,
              menuRef: f,
              settings: t.settings,
              onAddUnifiedLoader: k,
              onRestoreWorkflow: y,
              onSendToWorkflow: O,
              onRunWithWorkflow: U,
              onRunWithMask: (C) => ee(C),
              onEditSource: S,
              onEditTags: b,
              onEditNotes: E,
              onRestore: P,
              showRestore: t.viewScope === "trash",
              onDelete: D,
              deleteLabel: t.viewScope === "trash" ? "Delete Permanently" : "Move to Trash"
            }
          ),
          l && /* @__PURE__ */ s.jsx(
            My,
            {
              title: l.title,
              text: l.text,
              onClose: () => a(null),
              onCopy: (C) => v(C, "", !0),
              isCopied: d
            }
          )
        ]
      }
    );
  }
);
Dm.displayName = "DetailedImageCard";
const Pm = Xt.memo(
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
      menuRef: f,
      state: h,
      handleAddUnifiedLoader: w,
      handleRestoreWorkflow: x,
      handleSendToWorkflow: v,
      handleRunWithWorkflow: _,
      handleRunWithMask: j,
      handleEditSource: g,
      handleEditTags: u,
      handleEditNotes: p,
      handleDelete: y,
      handleRestore: k
    } = Lm(e), S = h.viewScope === "trash", b = S ? "Delete Permanently" : "Move to Trash", E = (O) => {
      O.stopPropagation();
      let P = String(e.id);
      t && h.selectedIds.size > 0 && (P = Array.from(h.selectedIds).join(",")), O.dataTransfer.setData("text/plain", P), ue.getState().setIsOpen(!0);
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
        onDragStart: E,
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
            ii,
            {
              isMenuOpen: c,
              setIsMenuOpen: d,
              menuRef: f,
              settings: h.settings,
              onAddUnifiedLoader: w,
              onRestoreWorkflow: x,
              onSendToWorkflow: v,
              onRunWithWorkflow: _,
              onRunWithMask: j,
              onEditSource: g,
              onEditTags: u,
              onEditNotes: p,
              onDelete: y,
              onRestore: k,
              showRestore: S,
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
Pm.displayName = "SimpleImageCard";
const Mc = ({ image: e }) => {
  const { state: t } = ve();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ s.jsx(Pm, { image: e }) : /* @__PURE__ */ s.jsx(Dm, { image: e });
}, Il = 6, Iy = 10, Ty = ({
  visibleImages: e,
  settings: t,
  loadMoreRef: n,
  viewerImageId: r,
  isLoading: l,
  localLimit: a,
  displayedImagesLength: o,
  hasMore: i
}) => {
  const c = m.useRef(null), [d, f] = m.useState(300), h = t["sidebar.thumbnail_size"] || 100, w = t["gallery.view_mode"] === "grid_only";
  m.useEffect(() => {
    const p = c.current;
    if (!p) return;
    const y = () => {
      f(p.clientWidth);
    };
    y();
    const k = new ResizeObserver(y);
    return k.observe(p), () => k.disconnect();
  }, []);
  const x = h + 10, v = w ? Math.max(
    1,
    Math.floor(
      (d - Iy * 2 + Il) / (x + Il)
    )
  ) : 1, _ = w ? Math.ceil(e.length / v) : e.length, j = w ? h + 10 + Il : Math.max(h, 150) + 20, g = Ny({
    count: _,
    getScrollElement: () => c.current,
    estimateSize: () => j,
    overscan: 5,
    getItemKey: (p) => {
      var y;
      return w ? `row-${p}-${v}` : ((y = e[p]) == null ? void 0 : y.id) ?? p;
    }
  });
  m.useEffect(() => {
    if (r === null) return;
    const p = e.findIndex((k) => k.id === r);
    if (p < 0) return;
    const y = w ? Math.floor(p / v) : p;
    g.scrollToIndex(y, {
      align: "center",
      behavior: "smooth"
    });
  }, [r, e, w, v, g]);
  const u = g.getVirtualItems();
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      ref: c,
      className: "meld-gallery__list-scroll",
      style: {
        "--meld-thumbnail-size": `${h}px`
      },
      children: [
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: `meld-gallery__list ${w ? "meld-gallery__list--grid-only meld-gallery__list--virtualized" : "meld-gallery__list--virtualized"}`,
            style: {
              height: `${g.getTotalSize()}px`,
              position: "relative"
            },
            children: u.map((p) => {
              if (w) {
                const k = p.index * v, S = Math.min(
                  k + v,
                  e.length
                ), b = e.slice(k, S);
                return /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: "meld-gallery__virtual-grid-row",
                    style: {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      transform: `translateY(${p.start}px)`,
                      display: "flex",
                      flexWrap: "wrap",
                      gap: Il,
                      alignItems: "flex-start"
                    },
                    children: b.map((E) => /* @__PURE__ */ s.jsx(
                      "div",
                      {
                        "data-image-id": E.id,
                        style: {
                          width: "auto",
                          flexShrink: 0,
                          display: "inline-block"
                        },
                        children: /* @__PURE__ */ s.jsx(
                          "div",
                          {
                            style: {
                              width: E.width && E.height ? Math.min(
                                h,
                                h * E.width / E.height
                              ) + 10 : h + 10,
                              minWidth: h + 10
                            },
                            children: /* @__PURE__ */ s.jsx(Mc, { image: E })
                          }
                        )
                      },
                      E.id
                    ))
                  },
                  p.key
                );
              }
              const y = e[p.index];
              return y ? /* @__PURE__ */ s.jsx(
                "div",
                {
                  "data-image-id": y.id,
                  className: "meld-gallery__virtual-row",
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${p.start}px)`
                  },
                  children: /* @__PURE__ */ s.jsx(Mc, { image: y })
                },
                p.key
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
              a >= o && !i && e.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
            ]
          }
        )
      ]
    }
  );
}, Ly = () => {
  const {
    state: e,
    dispatch: t,
    refreshImages: n,
    updateSetting: r,
    viewMode: l,
    setViewMode: a,
    lastSearchQuery: o,
    setLastSearchQuery: i,
    localLimit: c,
    displayedImages: d,
    visibleImages: f,
    isSearchActive: h,
    loadMoreRef: w
  } = hy(), x = ue((E) => E.isOpen), v = ue((E) => E.setIsOpen), _ = ue((E) => E.buckets), j = Object.values(_).some((E) => E && E.length > 0);
  te.log("GalleryPanel: isLightTableOpen =", x);
  const [g, u] = m.useState(!1), [p, y] = m.useState(null), k = m.useRef(null), S = m.useCallback(() => {
    k.current && (y(
      k.current.getBoundingClientRect()
    ), u(!0));
  }, []), b = m.useCallback(
    (E) => {
      t({ type: "SET_SEARCH_QUERY", payload: E }), i(E), a("search"), u(!1);
    },
    [t, i, a]
  );
  return te.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: d.length,
    visibleCount: f.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-gallery ${e.viewScope === "trash" ? "meld-gallery--trash" : ""}`,
      onDragOver: (E) => {
        E.dataTransfer.types.includes(
          "application/meld-lt-source-slot"
        ) && (E.preventDefault(), E.dataTransfer.dropEffect = "move");
      },
      onDrop: (E) => {
        const O = E.dataTransfer.getData(
          "application/meld-lt-source-slot"
        );
        if (O) {
          E.preventDefault();
          const P = E.dataTransfer.getData("text/plain");
          P && P.split(",").forEach((U) => {
            U && ue.getState().removeFromBucket(O, U.trim());
          });
        }
      },
      children: [
        /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__header", children: [
          e.viewScope === "trash" ? /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__trash-indicator", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__trash-label", children: [
              /* @__PURE__ */ s.jsx(Ut, { size: 14 }),
              /* @__PURE__ */ s.jsx("span", { children: "Trash Bin" })
            ] }),
            /* @__PURE__ */ s.jsxs("label", { className: "meld-gallery__trash-toggle", children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.settings["gallery.trash.show_missing"] || !1,
                  onChange: (E) => r("gallery.trash.show_missing", E.target.checked)
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
                  /* @__PURE__ */ s.jsx(ye, { size: 14 }),
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
                  color: h ? "var(--meld-success-color)" : l === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: h ? "bold" : "normal"
                },
                title: "Search",
                children: /* @__PURE__ */ s.jsx(En, { size: 14 })
              }
            ),
            e.favorites.length > 0 && /* @__PURE__ */ s.jsx(
              "button",
              {
                ref: k,
                type: "button",
                onClick: S,
                style: {
                  background: "none",
                  border: "none",
                  color: g ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Favorites",
                children: /* @__PURE__ */ s.jsx(
                  ar,
                  {
                    size: 14,
                    fill: g ? "var(--brand-yellow, #ffd700)" : "none"
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
                  const O = (e.settings["gallery.view_mode"] || "grid_details") === "grid_details" ? "grid_only" : "grid_details";
                  r("gallery.view_mode", O);
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ s.jsx(Nh, { size: 14 }) : /* @__PURE__ */ s.jsx(Gu, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  te.log(
                    "GalleryPanel: Toggle Light Table clicked, from",
                    x,
                    "to",
                    !x
                  ), v(!x);
                },
                style: {
                  background: "none",
                  border: "none",
                  color: x ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                  position: "relative",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Light Table",
                children: /* @__PURE__ */ s.jsxs("div", { style: { position: "relative" }, children: [
                  /* @__PURE__ */ s.jsx(
                    Rh,
                    {
                      size: 14,
                      fill: x ? "var(--brand-yellow, #ffd700)" : "none",
                      style: { opacity: x ? 1 : 0.8 }
                    }
                  ),
                  !x && j && /* @__PURE__ */ s.jsx(
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
                children: /* @__PURE__ */ s.jsx(Zr, { size: 14 })
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
                  el,
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
                children: /* @__PURE__ */ s.jsx(Yu, { size: 14 })
              }
            )
          ] }),
          l === "search" && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ s.jsx(oy, {}) })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__content", children: [
          /* @__PURE__ */ s.jsx(Zg, {}),
          e.error && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__error", children: e.error }),
          l === "tags" ? /* @__PURE__ */ s.jsx(
            iy,
            {
              onClose: () => a("gallery"),
              onSearch: (E) => {
                t({ type: "SET_SEARCH_QUERY", payload: E }), a("search");
              }
            }
          ) : e.isLoading && d.length === 0 ? /* @__PURE__ */ s.jsx(
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
          ) : f.length === 0 ? /* @__PURE__ */ s.jsx(
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
                Ty,
                {
                  visibleImages: f,
                  settings: e.settings,
                  loadMoreRef: w,
                  viewerImageId: e.viewerImageId,
                  isLoading: e.isLoading,
                  localLimit: c,
                  displayedImagesLength: d.length,
                  hasMore: e.pagination.hasMore
                }
              )
            }
          ),
          /* @__PURE__ */ s.jsx(gy, {})
        ] }),
        e.viewerImageId !== null && /* @__PURE__ */ s.jsx(py, {}),
        /* @__PURE__ */ s.jsx(Xg, {}),
        g && /* @__PURE__ */ s.jsx(
          ly,
          {
            anchorRect: p,
            onClose: () => u(!1),
            onSelect: b
          }
        ),
        /* @__PURE__ */ s.jsx(ry, {})
      ]
    }
  );
};
Ic.registerExtension({
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
const Dy = document.getElementById(
  "meld-gallery-style"
);
if (!Dy) {
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
let Tl = null, dt = null;
Ic.registerExtension({
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
      const n = await em();
      te.init(n.dev_mode), te.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld] Failed to fetch settings", n), te.init(!1);
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
        ), (r = e.ui.meld) == null || r.refresh(), te.log("Import completed.");
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
                  await Ju({
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
            te.log("render called", {
              el: n,
              galleryRoot: Tl,
              galleryContainer: dt
            }), n.style.height = "100%", n.style.overflow = "hidden";
            let r = n.parentElement;
            for (; r && !r.classList.contains("sidebar-content-container"); )
              r.style.height = "100%", r.style.overflow = "hidden", r = r.parentElement;
            r && (r.style.overflow = "hidden"), dt || (te.log("galleryContainer not found, creating new one"), dt = document.createElement("div"), dt.id = "meld-gallery-container", dt.style.height = "100%", dt.style.width = "100%", dt.style.display = "flex", dt.style.flexDirection = "column", dt.style.overflow = "hidden"), n.contains(dt) || (te.log("Appending galleryContainer to el"), n.appendChild(dt)), Tl ? te.log(
              "[Meld] Gallery root already exists, React should handle re-render if needed"
            ) : (te.log("Creating new gallery root"), Tl = $u(dt), Tl.render(
              Xt.createElement(
                bg,
                null,
                Xt.createElement(Ly)
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
