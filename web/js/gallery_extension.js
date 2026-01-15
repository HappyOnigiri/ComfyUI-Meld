import { api as V } from "../../../scripts/api.js";
import { app as da } from "../../../scripts/app.js";
function Dc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fa = { exports: {} }, b = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var or = Symbol.for("react.element"), Rc = Symbol.for("react.portal"), Fc = Symbol.for("react.fragment"), Oc = Symbol.for("react.strict_mode"), Ac = Symbol.for("react.profiler"), $c = Symbol.for("react.provider"), bc = Symbol.for("react.context"), Uc = Symbol.for("react.forward_ref"), Vc = Symbol.for("react.suspense"), Qc = Symbol.for("react.memo"), Wc = Symbol.for("react.lazy"), Xs = Symbol.iterator;
function Hc(e) {
  return e === null || typeof e != "object" ? null : (e = Xs && e[Xs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var pa = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ma = Object.assign, ha = {};
function vn(e, t, n) {
  this.props = e, this.context = t, this.refs = ha, this.updater = n || pa;
}
vn.prototype.isReactComponent = {};
vn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
vn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ga() {
}
ga.prototype = vn.prototype;
function es(e, t, n) {
  this.props = e, this.context = t, this.refs = ha, this.updater = n || pa;
}
var ts = es.prototype = new ga();
ts.constructor = es;
ma(ts, vn.prototype);
ts.isPureReactComponent = !0;
var Zs = Array.isArray, ya = Object.prototype.hasOwnProperty, ns = { current: null }, va = { key: !0, ref: !0, __self: !0, __source: !0 };
function wa(e, t, n) {
  var r, l = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) ya.call(t, r) && !va.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), d = 0; d < a; d++) u[d] = arguments[d + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) l[r] === void 0 && (l[r] = a[r]);
  return { $$typeof: or, type: e, key: i, ref: s, props: l, _owner: ns.current };
}
function Bc(e, t) {
  return { $$typeof: or, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function rs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === or;
}
function Gc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Js = /\/+/g;
function Rl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Gc("" + e.key) : t.toString(36);
}
function Pr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else switch (i) {
    case "string":
    case "number":
      s = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case or:
        case Rc:
          s = !0;
      }
  }
  if (s) return s = e, l = l(s), e = r === "" ? "." + Rl(s, 0) : r, Zs(l) ? (n = "", e != null && (n = e.replace(Js, "$&/") + "/"), Pr(l, t, n, "", function(d) {
    return d;
  })) : l != null && (rs(l) && (l = Bc(l, n + (!l.key || s && s.key === l.key ? "" : ("" + l.key).replace(Js, "$&/") + "/") + e)), t.push(l)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Zs(e)) for (var a = 0; a < e.length; a++) {
    i = e[a];
    var u = r + Rl(i, a);
    s += Pr(i, t, n, u, l);
  }
  else if (u = Hc(e), typeof u == "function") for (e = u.call(e), a = 0; !(i = e.next()).done; ) i = i.value, u = r + Rl(i, a++), s += Pr(i, t, n, u, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function mr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Pr(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function Kc(e) {
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
var ve = { current: null }, zr = { transition: null }, Yc = { ReactCurrentDispatcher: ve, ReactCurrentBatchConfig: zr, ReactCurrentOwner: ns };
function xa() {
  throw Error("act(...) is not supported in production builds of React.");
}
b.Children = { map: mr, forEach: function(e, t, n) {
  mr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return mr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return mr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!rs(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
b.Component = vn;
b.Fragment = Fc;
b.Profiler = Ac;
b.PureComponent = es;
b.StrictMode = Oc;
b.Suspense = Vc;
b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yc;
b.act = xa;
b.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ma({}, e.props), l = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = ns.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (u in t) ya.call(t, u) && !va.hasOwnProperty(u) && (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var d = 0; d < u; d++) a[d] = arguments[d + 2];
    r.children = a;
  }
  return { $$typeof: or, type: e.type, key: l, ref: i, props: r, _owner: s };
};
b.createContext = function(e) {
  return e = { $$typeof: bc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: $c, _context: e }, e.Consumer = e;
};
b.createElement = wa;
b.createFactory = function(e) {
  var t = wa.bind(null, e);
  return t.type = e, t;
};
b.createRef = function() {
  return { current: null };
};
b.forwardRef = function(e) {
  return { $$typeof: Uc, render: e };
};
b.isValidElement = rs;
b.lazy = function(e) {
  return { $$typeof: Wc, _payload: { _status: -1, _result: e }, _init: Kc };
};
b.memo = function(e, t) {
  return { $$typeof: Qc, type: e, compare: t === void 0 ? null : t };
};
b.startTransition = function(e) {
  var t = zr.transition;
  zr.transition = {};
  try {
    e();
  } finally {
    zr.transition = t;
  }
};
b.unstable_act = xa;
b.useCallback = function(e, t) {
  return ve.current.useCallback(e, t);
};
b.useContext = function(e) {
  return ve.current.useContext(e);
};
b.useDebugValue = function() {
};
b.useDeferredValue = function(e) {
  return ve.current.useDeferredValue(e);
};
b.useEffect = function(e, t) {
  return ve.current.useEffect(e, t);
};
b.useId = function() {
  return ve.current.useId();
};
b.useImperativeHandle = function(e, t, n) {
  return ve.current.useImperativeHandle(e, t, n);
};
b.useInsertionEffect = function(e, t) {
  return ve.current.useInsertionEffect(e, t);
};
b.useLayoutEffect = function(e, t) {
  return ve.current.useLayoutEffect(e, t);
};
b.useMemo = function(e, t) {
  return ve.current.useMemo(e, t);
};
b.useReducer = function(e, t, n) {
  return ve.current.useReducer(e, t, n);
};
b.useRef = function(e) {
  return ve.current.useRef(e);
};
b.useState = function(e) {
  return ve.current.useState(e);
};
b.useSyncExternalStore = function(e, t, n) {
  return ve.current.useSyncExternalStore(e, t, n);
};
b.useTransition = function() {
  return ve.current.useTransition();
};
b.version = "18.3.1";
fa.exports = b;
var k = fa.exports;
const qs = /* @__PURE__ */ Dc(k);
var _a = { exports: {} }, Le = {}, Sa = { exports: {} }, ka = {};
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
  function t(P, D) {
    var A = P.length;
    P.push(D);
    e: for (; 0 < A; ) {
      var B = A - 1 >>> 1, ee = P[B];
      if (0 < l(ee, D)) P[B] = D, P[A] = ee, A = B;
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var D = P[0], A = P.pop();
    if (A !== D) {
      P[0] = A;
      e: for (var B = 0, ee = P.length, fr = ee >>> 1; B < fr; ) {
        var It = 2 * (B + 1) - 1, Dl = P[It], Tt = It + 1, pr = P[Tt];
        if (0 > l(Dl, A)) Tt < ee && 0 > l(pr, Dl) ? (P[B] = pr, P[Tt] = A, B = Tt) : (P[B] = Dl, P[It] = A, B = It);
        else if (Tt < ee && 0 > l(pr, A)) P[B] = pr, P[Tt] = A, B = Tt;
        else break e;
      }
    }
    return D;
  }
  function l(P, D) {
    var A = P.sortIndex - D.sortIndex;
    return A !== 0 ? A : P.id - D.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var s = Date, a = s.now();
    e.unstable_now = function() {
      return s.now() - a;
    };
  }
  var u = [], d = [], v = 1, y = null, h = 3, E = !1, N = !1, j = !1, F = typeof setTimeout == "function" ? setTimeout : null, c = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(P) {
    for (var D = n(d); D !== null; ) {
      if (D.callback === null) r(d);
      else if (D.startTime <= P) r(d), D.sortIndex = D.expirationTime, t(u, D);
      else break;
      D = n(d);
    }
  }
  function S(P) {
    if (j = !1, p(P), !N) if (n(u) !== null) N = !0, O(L);
    else {
      var D = n(d);
      D !== null && U(S, D.startTime - P);
    }
  }
  function L(P, D) {
    N = !1, j && (j = !1, c(g), g = -1), E = !0;
    var A = h;
    try {
      for (p(D), y = n(u); y !== null && (!(y.expirationTime > D) || P && !M()); ) {
        var B = y.callback;
        if (typeof B == "function") {
          y.callback = null, h = y.priorityLevel;
          var ee = B(y.expirationTime <= D);
          D = e.unstable_now(), typeof ee == "function" ? y.callback = ee : y === n(u) && r(u), p(D);
        } else r(u);
        y = n(u);
      }
      if (y !== null) var fr = !0;
      else {
        var It = n(d);
        It !== null && U(S, It.startTime - D), fr = !1;
      }
      return fr;
    } finally {
      y = null, h = A, E = !1;
    }
  }
  var _ = !1, T = null, g = -1, R = 5, C = -1;
  function M() {
    return !(e.unstable_now() - C < R);
  }
  function m() {
    if (T !== null) {
      var P = e.unstable_now();
      C = P;
      var D = !0;
      try {
        D = T(!0, P);
      } finally {
        D ? w() : (_ = !1, T = null);
      }
    } else _ = !1;
  }
  var w;
  if (typeof f == "function") w = function() {
    f(m);
  };
  else if (typeof MessageChannel < "u") {
    var x = new MessageChannel(), $ = x.port2;
    x.port1.onmessage = m, w = function() {
      $.postMessage(null);
    };
  } else w = function() {
    F(m, 0);
  };
  function O(P) {
    T = P, _ || (_ = !0, w());
  }
  function U(P, D) {
    g = F(function() {
      P(e.unstable_now());
    }, D);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, e.unstable_continueExecution = function() {
    N || E || (N = !0, O(L));
  }, e.unstable_forceFrameRate = function(P) {
    0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < P ? Math.floor(1e3 / P) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(P) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var D = 3;
        break;
      default:
        D = h;
    }
    var A = h;
    h = D;
    try {
      return P();
    } finally {
      h = A;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(P, D) {
    switch (P) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        P = 3;
    }
    var A = h;
    h = P;
    try {
      return D();
    } finally {
      h = A;
    }
  }, e.unstable_scheduleCallback = function(P, D, A) {
    var B = e.unstable_now();
    switch (typeof A == "object" && A !== null ? (A = A.delay, A = typeof A == "number" && 0 < A ? B + A : B) : A = B, P) {
      case 1:
        var ee = -1;
        break;
      case 2:
        ee = 250;
        break;
      case 5:
        ee = 1073741823;
        break;
      case 4:
        ee = 1e4;
        break;
      default:
        ee = 5e3;
    }
    return ee = A + ee, P = { id: v++, callback: D, priorityLevel: P, startTime: A, expirationTime: ee, sortIndex: -1 }, A > B ? (P.sortIndex = A, t(d, P), n(u) === null && P === n(d) && (j ? (c(g), g = -1) : j = !0, U(S, A - B))) : (P.sortIndex = ee, t(u, P), N || E || (N = !0, O(L))), P;
  }, e.unstable_shouldYield = M, e.unstable_wrapCallback = function(P) {
    var D = h;
    return function() {
      var A = h;
      h = D;
      try {
        return P.apply(this, arguments);
      } finally {
        h = A;
      }
    };
  };
})(ka);
Sa.exports = ka;
var Xc = Sa.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zc = k, Te = Xc;
function I(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ea = /* @__PURE__ */ new Set(), Wn = {};
function Vt(e, t) {
  cn(e, t), cn(e + "Capture", t);
}
function cn(e, t) {
  for (Wn[e] = t, e = 0; e < t.length; e++) Ea.add(t[e]);
}
var rt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), oi = Object.prototype.hasOwnProperty, Jc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, eo = {}, to = {};
function qc(e) {
  return oi.call(to, e) ? !0 : oi.call(eo, e) ? !1 : Jc.test(e) ? to[e] = !0 : (eo[e] = !0, !1);
}
function ed(e, t, n, r) {
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
function td(e, t, n, r) {
  if (t === null || typeof t > "u" || ed(e, t, n, r)) return !0;
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
function we(e, t, n, r, l, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ce[e] = new we(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ce[t] = new we(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ce[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ce[e] = new we(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ce[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ce[e] = new we(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ce[e] = new we(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ce[e] = new we(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ce[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ls = /[\-:]([a-z])/g;
function is(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ls,
    is
  );
  ce[t] = new we(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ls, is);
  ce[t] = new we(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ls, is);
  ce[t] = new we(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ce[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ce.xlinkHref = new we("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ce[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ss(e, t, n, r) {
  var l = ce.hasOwnProperty(t) ? ce[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (td(t, n, l, r) && (n = null), r || l === null ? qc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ot = Zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, hr = Symbol.for("react.element"), Ht = Symbol.for("react.portal"), Bt = Symbol.for("react.fragment"), os = Symbol.for("react.strict_mode"), ai = Symbol.for("react.profiler"), Ca = Symbol.for("react.provider"), Na = Symbol.for("react.context"), as = Symbol.for("react.forward_ref"), ui = Symbol.for("react.suspense"), ci = Symbol.for("react.suspense_list"), us = Symbol.for("react.memo"), ut = Symbol.for("react.lazy"), ja = Symbol.for("react.offscreen"), no = Symbol.iterator;
function kn(e) {
  return e === null || typeof e != "object" ? null : (e = no && e[no] || e["@@iterator"], typeof e == "function" ? e : null);
}
var q = Object.assign, Fl;
function Mn(e) {
  if (Fl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Fl = t && t[1] || "";
  }
  return `
` + Fl + e;
}
var Ol = !1;
function Al(e, t) {
  if (!e || Ol) return "";
  Ol = !0;
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
`), i = r.stack.split(`
`), s = l.length - 1, a = i.length - 1; 1 <= s && 0 <= a && l[s] !== i[a]; ) a--;
      for (; 1 <= s && 0 <= a; s--, a--) if (l[s] !== i[a]) {
        if (s !== 1 || a !== 1)
          do
            if (s--, a--, 0 > a || l[s] !== i[a]) {
              var u = `
` + l[s].replace(" at new ", " at ");
              return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
            }
          while (1 <= s && 0 <= a);
        break;
      }
    }
  } finally {
    Ol = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Mn(e) : "";
}
function nd(e) {
  switch (e.tag) {
    case 5:
      return Mn(e.type);
    case 16:
      return Mn("Lazy");
    case 13:
      return Mn("Suspense");
    case 19:
      return Mn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Al(e.type, !1), e;
    case 11:
      return e = Al(e.type.render, !1), e;
    case 1:
      return e = Al(e.type, !0), e;
    default:
      return "";
  }
}
function di(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Bt:
      return "Fragment";
    case Ht:
      return "Portal";
    case ai:
      return "Profiler";
    case os:
      return "StrictMode";
    case ui:
      return "Suspense";
    case ci:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Na:
      return (e.displayName || "Context") + ".Consumer";
    case Ca:
      return (e._context.displayName || "Context") + ".Provider";
    case as:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case us:
      return t = e.displayName || null, t !== null ? t : di(e.type) || "Memo";
    case ut:
      t = e._payload, e = e._init;
      try {
        return di(e(t));
      } catch {
      }
  }
  return null;
}
function rd(e) {
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
      return di(t);
    case 8:
      return t === os ? "StrictMode" : "Mode";
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
function kt(e) {
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
function Ia(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function ld(e) {
  var t = Ia(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(s) {
      r = "" + s, i.call(this, s);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(s) {
      r = "" + s;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function gr(e) {
  e._valueTracker || (e._valueTracker = ld(e));
}
function Ta(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Ia(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Wr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function fi(e, t) {
  var n = t.checked;
  return q({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ro(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = kt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function La(e, t) {
  t = t.checked, t != null && ss(e, "checked", t, !1);
}
function pi(e, t) {
  La(e, t);
  var n = kt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? mi(e, t.type, n) : t.hasOwnProperty("defaultValue") && mi(e, t.type, kt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function lo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function mi(e, t, n) {
  (t !== "number" || Wr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Pn = Array.isArray;
function rn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + kt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function hi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
  return q({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function io(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(I(92));
      if (Pn(n)) {
        if (1 < n.length) throw Error(I(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: kt(n) };
}
function Ma(e, t) {
  var n = kt(t.value), r = kt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function so(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Pa(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function gi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Pa(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var yr, za = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (yr = yr || document.createElement("div"), yr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = yr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Hn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Rn = {
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
}, id = ["Webkit", "ms", "Moz", "O"];
Object.keys(Rn).forEach(function(e) {
  id.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Rn[t] = Rn[e];
  });
});
function Da(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Rn.hasOwnProperty(e) && Rn[e] ? ("" + t).trim() : t + "px";
}
function Ra(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Da(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var sd = q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function yi(e, t) {
  if (t) {
    if (sd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(I(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(I(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(I(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(I(62));
  }
}
function vi(e, t) {
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
var wi = null;
function cs(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var xi = null, ln = null, sn = null;
function oo(e) {
  if (e = cr(e)) {
    if (typeof xi != "function") throw Error(I(280));
    var t = e.stateNode;
    t && (t = xl(t), xi(e.stateNode, e.type, t));
  }
}
function Fa(e) {
  ln ? sn ? sn.push(e) : sn = [e] : ln = e;
}
function Oa() {
  if (ln) {
    var e = ln, t = sn;
    if (sn = ln = null, oo(e), t) for (e = 0; e < t.length; e++) oo(t[e]);
  }
}
function Aa(e, t) {
  return e(t);
}
function $a() {
}
var $l = !1;
function ba(e, t, n) {
  if ($l) return e(t, n);
  $l = !0;
  try {
    return Aa(e, t, n);
  } finally {
    $l = !1, (ln !== null || sn !== null) && ($a(), Oa());
  }
}
function Bn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = xl(n);
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
  if (n && typeof n != "function") throw Error(I(231, t, typeof n));
  return n;
}
var _i = !1;
if (rt) try {
  var En = {};
  Object.defineProperty(En, "passive", { get: function() {
    _i = !0;
  } }), window.addEventListener("test", En, En), window.removeEventListener("test", En, En);
} catch {
  _i = !1;
}
function od(e, t, n, r, l, i, s, a, u) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (v) {
    this.onError(v);
  }
}
var Fn = !1, Hr = null, Br = !1, Si = null, ad = { onError: function(e) {
  Fn = !0, Hr = e;
} };
function ud(e, t, n, r, l, i, s, a, u) {
  Fn = !1, Hr = null, od.apply(ad, arguments);
}
function cd(e, t, n, r, l, i, s, a, u) {
  if (ud.apply(this, arguments), Fn) {
    if (Fn) {
      var d = Hr;
      Fn = !1, Hr = null;
    } else throw Error(I(198));
    Br || (Br = !0, Si = d);
  }
}
function Qt(e) {
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
function Ua(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function ao(e) {
  if (Qt(e) !== e) throw Error(I(188));
}
function dd(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Qt(e), t === null) throw Error(I(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return ao(l), e;
        if (i === r) return ao(l), t;
        i = i.sibling;
      }
      throw Error(I(188));
    }
    if (n.return !== r.return) n = l, r = i;
    else {
      for (var s = !1, a = l.child; a; ) {
        if (a === n) {
          s = !0, n = l, r = i;
          break;
        }
        if (a === r) {
          s = !0, r = l, n = i;
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            s = !0, n = i, r = l;
            break;
          }
          if (a === r) {
            s = !0, r = i, n = l;
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(I(189));
      }
    }
    if (n.alternate !== r) throw Error(I(190));
  }
  if (n.tag !== 3) throw Error(I(188));
  return n.stateNode.current === n ? e : t;
}
function Va(e) {
  return e = dd(e), e !== null ? Qa(e) : null;
}
function Qa(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Qa(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Wa = Te.unstable_scheduleCallback, uo = Te.unstable_cancelCallback, fd = Te.unstable_shouldYield, pd = Te.unstable_requestPaint, ne = Te.unstable_now, md = Te.unstable_getCurrentPriorityLevel, ds = Te.unstable_ImmediatePriority, Ha = Te.unstable_UserBlockingPriority, Gr = Te.unstable_NormalPriority, hd = Te.unstable_LowPriority, Ba = Te.unstable_IdlePriority, gl = null, Xe = null;
function gd(e) {
  if (Xe && typeof Xe.onCommitFiberRoot == "function") try {
    Xe.onCommitFiberRoot(gl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Qe = Math.clz32 ? Math.clz32 : wd, yd = Math.log, vd = Math.LN2;
function wd(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (yd(e) / vd | 0) | 0;
}
var vr = 64, wr = 4194304;
function zn(e) {
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
function Kr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var a = s & ~l;
    a !== 0 ? r = zn(a) : (i &= s, i !== 0 && (r = zn(i)));
  } else s = n & ~l, s !== 0 ? r = zn(s) : i !== 0 && (r = zn(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Qe(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function xd(e, t) {
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
function _d(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Qe(i), a = 1 << s, u = l[s];
    u === -1 ? (!(a & n) || a & r) && (l[s] = xd(a, t)) : u <= t && (e.expiredLanes |= a), i &= ~a;
  }
}
function ki(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ga() {
  var e = vr;
  return vr <<= 1, !(vr & 4194240) && (vr = 64), e;
}
function bl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ar(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Qe(t), e[t] = n;
}
function Sd(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Qe(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function fs(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Qe(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var H = 0;
function Ka(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ya, ps, Xa, Za, Ja, Ei = !1, xr = [], ht = null, gt = null, yt = null, Gn = /* @__PURE__ */ new Map(), Kn = /* @__PURE__ */ new Map(), dt = [], kd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function co(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ht = null;
      break;
    case "dragenter":
    case "dragleave":
      gt = null;
      break;
    case "mouseover":
    case "mouseout":
      yt = null;
      break;
    case "pointerover":
    case "pointerout":
      Gn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Kn.delete(t.pointerId);
  }
}
function Cn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = cr(t), t !== null && ps(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Ed(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ht = Cn(ht, e, t, n, r, l), !0;
    case "dragenter":
      return gt = Cn(gt, e, t, n, r, l), !0;
    case "mouseover":
      return yt = Cn(yt, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return Gn.set(i, Cn(Gn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, Kn.set(i, Cn(Kn.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function qa(e) {
  var t = Pt(e.target);
  if (t !== null) {
    var n = Qt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ua(n), t !== null) {
          e.blockedOn = t, Ja(e.priority, function() {
            Xa(n);
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
function Dr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ci(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      wi = r, n.target.dispatchEvent(r), wi = null;
    } else return t = cr(n), t !== null && ps(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function fo(e, t, n) {
  Dr(e) && n.delete(t);
}
function Cd() {
  Ei = !1, ht !== null && Dr(ht) && (ht = null), gt !== null && Dr(gt) && (gt = null), yt !== null && Dr(yt) && (yt = null), Gn.forEach(fo), Kn.forEach(fo);
}
function Nn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ei || (Ei = !0, Te.unstable_scheduleCallback(Te.unstable_NormalPriority, Cd)));
}
function Yn(e) {
  function t(l) {
    return Nn(l, e);
  }
  if (0 < xr.length) {
    Nn(xr[0], e);
    for (var n = 1; n < xr.length; n++) {
      var r = xr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (ht !== null && Nn(ht, e), gt !== null && Nn(gt, e), yt !== null && Nn(yt, e), Gn.forEach(t), Kn.forEach(t), n = 0; n < dt.length; n++) r = dt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < dt.length && (n = dt[0], n.blockedOn === null); ) qa(n), n.blockedOn === null && dt.shift();
}
var on = ot.ReactCurrentBatchConfig, Yr = !0;
function Nd(e, t, n, r) {
  var l = H, i = on.transition;
  on.transition = null;
  try {
    H = 1, ms(e, t, n, r);
  } finally {
    H = l, on.transition = i;
  }
}
function jd(e, t, n, r) {
  var l = H, i = on.transition;
  on.transition = null;
  try {
    H = 4, ms(e, t, n, r);
  } finally {
    H = l, on.transition = i;
  }
}
function ms(e, t, n, r) {
  if (Yr) {
    var l = Ci(e, t, n, r);
    if (l === null) Xl(e, t, r, Xr, n), co(e, r);
    else if (Ed(l, e, t, n, r)) r.stopPropagation();
    else if (co(e, r), t & 4 && -1 < kd.indexOf(e)) {
      for (; l !== null; ) {
        var i = cr(l);
        if (i !== null && Ya(i), i = Ci(e, t, n, r), i === null && Xl(e, t, r, Xr, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Xl(e, t, r, null, n);
  }
}
var Xr = null;
function Ci(e, t, n, r) {
  if (Xr = null, e = cs(r), e = Pt(e), e !== null) if (t = Qt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Ua(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Xr = e, null;
}
function eu(e) {
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
      switch (md()) {
        case ds:
          return 1;
        case Ha:
          return 4;
        case Gr:
        case hd:
          return 16;
        case Ba:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var pt = null, hs = null, Rr = null;
function tu() {
  if (Rr) return Rr;
  var e, t = hs, n = t.length, r, l = "value" in pt ? pt.value : pt.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === l[i - r]; r++) ;
  return Rr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Fr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function _r() {
  return !0;
}
function po() {
  return !1;
}
function Me(e) {
  function t(n, r, l, i, s) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? _r : po, this.isPropagationStopped = po, this;
  }
  return q(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = _r);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = _r);
  }, persist: function() {
  }, isPersistent: _r }), t;
}
var wn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, gs = Me(wn), ur = q({}, wn, { view: 0, detail: 0 }), Id = Me(ur), Ul, Vl, jn, yl = q({}, ur, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ys, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== jn && (jn && e.type === "mousemove" ? (Ul = e.screenX - jn.screenX, Vl = e.screenY - jn.screenY) : Vl = Ul = 0, jn = e), Ul);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Vl;
} }), mo = Me(yl), Td = q({}, yl, { dataTransfer: 0 }), Ld = Me(Td), Md = q({}, ur, { relatedTarget: 0 }), Ql = Me(Md), Pd = q({}, wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), zd = Me(Pd), Dd = q({}, wn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Rd = Me(Dd), Fd = q({}, wn, { data: 0 }), ho = Me(Fd), Od = {
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
}, Ad = {
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
}, $d = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function bd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = $d[e]) ? !!t[e] : !1;
}
function ys() {
  return bd;
}
var Ud = q({}, ur, { key: function(e) {
  if (e.key) {
    var t = Od[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Fr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ad[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ys, charCode: function(e) {
  return e.type === "keypress" ? Fr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Fr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Vd = Me(Ud), Qd = q({}, yl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), go = Me(Qd), Wd = q({}, ur, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ys }), Hd = Me(Wd), Bd = q({}, wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Gd = Me(Bd), Kd = q({}, yl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Yd = Me(Kd), Xd = [9, 13, 27, 32], vs = rt && "CompositionEvent" in window, On = null;
rt && "documentMode" in document && (On = document.documentMode);
var Zd = rt && "TextEvent" in window && !On, nu = rt && (!vs || On && 8 < On && 11 >= On), yo = " ", vo = !1;
function ru(e, t) {
  switch (e) {
    case "keyup":
      return Xd.indexOf(t.keyCode) !== -1;
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
function lu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Gt = !1;
function Jd(e, t) {
  switch (e) {
    case "compositionend":
      return lu(t);
    case "keypress":
      return t.which !== 32 ? null : (vo = !0, yo);
    case "textInput":
      return e = t.data, e === yo && vo ? null : e;
    default:
      return null;
  }
}
function qd(e, t) {
  if (Gt) return e === "compositionend" || !vs && ru(e, t) ? (e = tu(), Rr = hs = pt = null, Gt = !1, e) : null;
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
      return nu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ef = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function wo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ef[e.type] : t === "textarea";
}
function iu(e, t, n, r) {
  Fa(r), t = Zr(t, "onChange"), 0 < t.length && (n = new gs("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var An = null, Xn = null;
function tf(e) {
  gu(e, 0);
}
function vl(e) {
  var t = Xt(e);
  if (Ta(t)) return e;
}
function nf(e, t) {
  if (e === "change") return t;
}
var su = !1;
if (rt) {
  var Wl;
  if (rt) {
    var Hl = "oninput" in document;
    if (!Hl) {
      var xo = document.createElement("div");
      xo.setAttribute("oninput", "return;"), Hl = typeof xo.oninput == "function";
    }
    Wl = Hl;
  } else Wl = !1;
  su = Wl && (!document.documentMode || 9 < document.documentMode);
}
function _o() {
  An && (An.detachEvent("onpropertychange", ou), Xn = An = null);
}
function ou(e) {
  if (e.propertyName === "value" && vl(Xn)) {
    var t = [];
    iu(t, Xn, e, cs(e)), ba(tf, t);
  }
}
function rf(e, t, n) {
  e === "focusin" ? (_o(), An = t, Xn = n, An.attachEvent("onpropertychange", ou)) : e === "focusout" && _o();
}
function lf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return vl(Xn);
}
function sf(e, t) {
  if (e === "click") return vl(t);
}
function of(e, t) {
  if (e === "input" || e === "change") return vl(t);
}
function af(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var He = typeof Object.is == "function" ? Object.is : af;
function Zn(e, t) {
  if (He(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!oi.call(t, l) || !He(e[l], t[l])) return !1;
  }
  return !0;
}
function So(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ko(e, t) {
  var n = So(e);
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
    n = So(n);
  }
}
function au(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? au(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function uu() {
  for (var e = window, t = Wr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Wr(e.document);
  }
  return t;
}
function ws(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function uf(e) {
  var t = uu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && au(n.ownerDocument.documentElement, n)) {
    if (r !== null && ws(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = ko(n, i);
        var s = ko(
          n,
          r
        );
        l && s && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var cf = rt && "documentMode" in document && 11 >= document.documentMode, Kt = null, Ni = null, $n = null, ji = !1;
function Eo(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ji || Kt == null || Kt !== Wr(r) || (r = Kt, "selectionStart" in r && ws(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), $n && Zn($n, r) || ($n = r, r = Zr(Ni, "onSelect"), 0 < r.length && (t = new gs("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Kt)));
}
function Sr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Yt = { animationend: Sr("Animation", "AnimationEnd"), animationiteration: Sr("Animation", "AnimationIteration"), animationstart: Sr("Animation", "AnimationStart"), transitionend: Sr("Transition", "TransitionEnd") }, Bl = {}, cu = {};
rt && (cu = document.createElement("div").style, "AnimationEvent" in window || (delete Yt.animationend.animation, delete Yt.animationiteration.animation, delete Yt.animationstart.animation), "TransitionEvent" in window || delete Yt.transitionend.transition);
function wl(e) {
  if (Bl[e]) return Bl[e];
  if (!Yt[e]) return e;
  var t = Yt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in cu) return Bl[e] = t[n];
  return e;
}
var du = wl("animationend"), fu = wl("animationiteration"), pu = wl("animationstart"), mu = wl("transitionend"), hu = /* @__PURE__ */ new Map(), Co = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ct(e, t) {
  hu.set(e, t), Vt(t, [e]);
}
for (var Gl = 0; Gl < Co.length; Gl++) {
  var Kl = Co[Gl], df = Kl.toLowerCase(), ff = Kl[0].toUpperCase() + Kl.slice(1);
  Ct(df, "on" + ff);
}
Ct(du, "onAnimationEnd");
Ct(fu, "onAnimationIteration");
Ct(pu, "onAnimationStart");
Ct("dblclick", "onDoubleClick");
Ct("focusin", "onFocus");
Ct("focusout", "onBlur");
Ct(mu, "onTransitionEnd");
cn("onMouseEnter", ["mouseout", "mouseover"]);
cn("onMouseLeave", ["mouseout", "mouseover"]);
cn("onPointerEnter", ["pointerout", "pointerover"]);
cn("onPointerLeave", ["pointerout", "pointerover"]);
Vt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Vt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Vt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Vt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Vt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Vt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Dn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), pf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dn));
function No(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, cd(r, t, void 0, e), e.currentTarget = null;
}
function gu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var a = r[s], u = a.instance, d = a.currentTarget;
        if (a = a.listener, u !== i && l.isPropagationStopped()) break e;
        No(l, a, d), i = u;
      }
      else for (s = 0; s < r.length; s++) {
        if (a = r[s], u = a.instance, d = a.currentTarget, a = a.listener, u !== i && l.isPropagationStopped()) break e;
        No(l, a, d), i = u;
      }
    }
  }
  if (Br) throw e = Si, Br = !1, Si = null, e;
}
function K(e, t) {
  var n = t[Pi];
  n === void 0 && (n = t[Pi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (yu(t, e, 2, !1), n.add(r));
}
function Yl(e, t, n) {
  var r = 0;
  t && (r |= 4), yu(n, e, r, t);
}
var kr = "_reactListening" + Math.random().toString(36).slice(2);
function Jn(e) {
  if (!e[kr]) {
    e[kr] = !0, Ea.forEach(function(n) {
      n !== "selectionchange" && (pf.has(n) || Yl(n, !1, e), Yl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[kr] || (t[kr] = !0, Yl("selectionchange", !1, t));
  }
}
function yu(e, t, n, r) {
  switch (eu(t)) {
    case 1:
      var l = Nd;
      break;
    case 4:
      l = jd;
      break;
    default:
      l = ms;
  }
  n = l.bind(null, t, n, e), l = void 0, !_i || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Xl(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var s = r.tag;
    if (s === 3 || s === 4) {
      var a = r.stateNode.containerInfo;
      if (a === l || a.nodeType === 8 && a.parentNode === l) break;
      if (s === 4) for (s = r.return; s !== null; ) {
        var u = s.tag;
        if ((u === 3 || u === 4) && (u = s.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l)) return;
        s = s.return;
      }
      for (; a !== null; ) {
        if (s = Pt(a), s === null) return;
        if (u = s.tag, u === 5 || u === 6) {
          r = i = s;
          continue e;
        }
        a = a.parentNode;
      }
    }
    r = r.return;
  }
  ba(function() {
    var d = i, v = cs(n), y = [];
    e: {
      var h = hu.get(e);
      if (h !== void 0) {
        var E = gs, N = e;
        switch (e) {
          case "keypress":
            if (Fr(n) === 0) break e;
          case "keydown":
          case "keyup":
            E = Vd;
            break;
          case "focusin":
            N = "focus", E = Ql;
            break;
          case "focusout":
            N = "blur", E = Ql;
            break;
          case "beforeblur":
          case "afterblur":
            E = Ql;
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
            E = mo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            E = Ld;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            E = Hd;
            break;
          case du:
          case fu:
          case pu:
            E = zd;
            break;
          case mu:
            E = Gd;
            break;
          case "scroll":
            E = Id;
            break;
          case "wheel":
            E = Yd;
            break;
          case "copy":
          case "cut":
          case "paste":
            E = Rd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            E = go;
        }
        var j = (t & 4) !== 0, F = !j && e === "scroll", c = j ? h !== null ? h + "Capture" : null : h;
        j = [];
        for (var f = d, p; f !== null; ) {
          p = f;
          var S = p.stateNode;
          if (p.tag === 5 && S !== null && (p = S, c !== null && (S = Bn(f, c), S != null && j.push(qn(f, S, p)))), F) break;
          f = f.return;
        }
        0 < j.length && (h = new E(h, N, null, n, v), y.push({ event: h, listeners: j }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", E = e === "mouseout" || e === "pointerout", h && n !== wi && (N = n.relatedTarget || n.fromElement) && (Pt(N) || N[lt])) break e;
        if ((E || h) && (h = v.window === v ? v : (h = v.ownerDocument) ? h.defaultView || h.parentWindow : window, E ? (N = n.relatedTarget || n.toElement, E = d, N = N ? Pt(N) : null, N !== null && (F = Qt(N), N !== F || N.tag !== 5 && N.tag !== 6) && (N = null)) : (E = null, N = d), E !== N)) {
          if (j = mo, S = "onMouseLeave", c = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (j = go, S = "onPointerLeave", c = "onPointerEnter", f = "pointer"), F = E == null ? h : Xt(E), p = N == null ? h : Xt(N), h = new j(S, f + "leave", E, n, v), h.target = F, h.relatedTarget = p, S = null, Pt(v) === d && (j = new j(c, f + "enter", N, n, v), j.target = p, j.relatedTarget = F, S = j), F = S, E && N) t: {
            for (j = E, c = N, f = 0, p = j; p; p = Wt(p)) f++;
            for (p = 0, S = c; S; S = Wt(S)) p++;
            for (; 0 < f - p; ) j = Wt(j), f--;
            for (; 0 < p - f; ) c = Wt(c), p--;
            for (; f--; ) {
              if (j === c || c !== null && j === c.alternate) break t;
              j = Wt(j), c = Wt(c);
            }
            j = null;
          }
          else j = null;
          E !== null && jo(y, h, E, j, !1), N !== null && F !== null && jo(y, F, N, j, !0);
        }
      }
      e: {
        if (h = d ? Xt(d) : window, E = h.nodeName && h.nodeName.toLowerCase(), E === "select" || E === "input" && h.type === "file") var L = nf;
        else if (wo(h)) if (su) L = of;
        else {
          L = lf;
          var _ = rf;
        }
        else (E = h.nodeName) && E.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (L = sf);
        if (L && (L = L(e, d))) {
          iu(y, L, n, v);
          break e;
        }
        _ && _(e, h, d), e === "focusout" && (_ = h._wrapperState) && _.controlled && h.type === "number" && mi(h, "number", h.value);
      }
      switch (_ = d ? Xt(d) : window, e) {
        case "focusin":
          (wo(_) || _.contentEditable === "true") && (Kt = _, Ni = d, $n = null);
          break;
        case "focusout":
          $n = Ni = Kt = null;
          break;
        case "mousedown":
          ji = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ji = !1, Eo(y, n, v);
          break;
        case "selectionchange":
          if (cf) break;
        case "keydown":
        case "keyup":
          Eo(y, n, v);
      }
      var T;
      if (vs) e: {
        switch (e) {
          case "compositionstart":
            var g = "onCompositionStart";
            break e;
          case "compositionend":
            g = "onCompositionEnd";
            break e;
          case "compositionupdate":
            g = "onCompositionUpdate";
            break e;
        }
        g = void 0;
      }
      else Gt ? ru(e, n) && (g = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (g = "onCompositionStart");
      g && (nu && n.locale !== "ko" && (Gt || g !== "onCompositionStart" ? g === "onCompositionEnd" && Gt && (T = tu()) : (pt = v, hs = "value" in pt ? pt.value : pt.textContent, Gt = !0)), _ = Zr(d, g), 0 < _.length && (g = new ho(g, e, null, n, v), y.push({ event: g, listeners: _ }), T ? g.data = T : (T = lu(n), T !== null && (g.data = T)))), (T = Zd ? Jd(e, n) : qd(e, n)) && (d = Zr(d, "onBeforeInput"), 0 < d.length && (v = new ho("onBeforeInput", "beforeinput", null, n, v), y.push({ event: v, listeners: d }), v.data = T));
    }
    gu(y, t);
  });
}
function qn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Zr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = Bn(e, n), i != null && r.unshift(qn(e, i, l)), i = Bn(e, t), i != null && r.push(qn(e, i, l))), e = e.return;
  }
  return r;
}
function Wt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function jo(e, t, n, r, l) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n, u = a.alternate, d = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 && d !== null && (a = d, l ? (u = Bn(n, i), u != null && s.unshift(qn(n, u, a))) : l || (u = Bn(n, i), u != null && s.push(qn(n, u, a)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var mf = /\r\n?/g, hf = /\u0000|\uFFFD/g;
function Io(e) {
  return (typeof e == "string" ? e : "" + e).replace(mf, `
`).replace(hf, "");
}
function Er(e, t, n) {
  if (t = Io(t), Io(e) !== t && n) throw Error(I(425));
}
function Jr() {
}
var Ii = null, Ti = null;
function Li(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Mi = typeof setTimeout == "function" ? setTimeout : void 0, gf = typeof clearTimeout == "function" ? clearTimeout : void 0, To = typeof Promise == "function" ? Promise : void 0, yf = typeof queueMicrotask == "function" ? queueMicrotask : typeof To < "u" ? function(e) {
  return To.resolve(null).then(e).catch(vf);
} : Mi;
function vf(e) {
  setTimeout(function() {
    throw e;
  });
}
function Zl(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Yn(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Yn(t);
}
function vt(e) {
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
function Lo(e) {
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
var xn = Math.random().toString(36).slice(2), Ye = "__reactFiber$" + xn, er = "__reactProps$" + xn, lt = "__reactContainer$" + xn, Pi = "__reactEvents$" + xn, wf = "__reactListeners$" + xn, xf = "__reactHandles$" + xn;
function Pt(e) {
  var t = e[Ye];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[lt] || n[Ye]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Lo(e); e !== null; ) {
        if (n = e[Ye]) return n;
        e = Lo(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function cr(e) {
  return e = e[Ye] || e[lt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Xt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(I(33));
}
function xl(e) {
  return e[er] || null;
}
var zi = [], Zt = -1;
function Nt(e) {
  return { current: e };
}
function Y(e) {
  0 > Zt || (e.current = zi[Zt], zi[Zt] = null, Zt--);
}
function G(e, t) {
  Zt++, zi[Zt] = e.current, e.current = t;
}
var Et = {}, me = Nt(Et), Se = Nt(!1), Ot = Et;
function dn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Et;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function ke(e) {
  return e = e.childContextTypes, e != null;
}
function qr() {
  Y(Se), Y(me);
}
function Mo(e, t, n) {
  if (me.current !== Et) throw Error(I(168));
  G(me, t), G(Se, n);
}
function vu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(I(108, rd(e) || "Unknown", l));
  return q({}, n, r);
}
function el(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Et, Ot = me.current, G(me, e), G(Se, Se.current), !0;
}
function Po(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(I(169));
  n ? (e = vu(e, t, Ot), r.__reactInternalMemoizedMergedChildContext = e, Y(Se), Y(me), G(me, e)) : Y(Se), G(Se, n);
}
var qe = null, _l = !1, Jl = !1;
function wu(e) {
  qe === null ? qe = [e] : qe.push(e);
}
function _f(e) {
  _l = !0, wu(e);
}
function jt() {
  if (!Jl && qe !== null) {
    Jl = !0;
    var e = 0, t = H;
    try {
      var n = qe;
      for (H = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      qe = null, _l = !1;
    } catch (l) {
      throw qe !== null && (qe = qe.slice(e + 1)), Wa(ds, jt), l;
    } finally {
      H = t, Jl = !1;
    }
  }
  return null;
}
var Jt = [], qt = 0, tl = null, nl = 0, Pe = [], ze = 0, At = null, et = 1, tt = "";
function Lt(e, t) {
  Jt[qt++] = nl, Jt[qt++] = tl, tl = e, nl = t;
}
function xu(e, t, n) {
  Pe[ze++] = et, Pe[ze++] = tt, Pe[ze++] = At, At = e;
  var r = et;
  e = tt;
  var l = 32 - Qe(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - Qe(t) + l;
  if (30 < i) {
    var s = l - l % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, l -= s, et = 1 << 32 - Qe(t) + l | n << l | r, tt = i + e;
  } else et = 1 << i | n << l | r, tt = e;
}
function xs(e) {
  e.return !== null && (Lt(e, 1), xu(e, 1, 0));
}
function _s(e) {
  for (; e === tl; ) tl = Jt[--qt], Jt[qt] = null, nl = Jt[--qt], Jt[qt] = null;
  for (; e === At; ) At = Pe[--ze], Pe[ze] = null, tt = Pe[--ze], Pe[ze] = null, et = Pe[--ze], Pe[ze] = null;
}
var Ie = null, je = null, X = !1, Ve = null;
function _u(e, t) {
  var n = De(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function zo(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ie = e, je = vt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ie = e, je = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = At !== null ? { id: et, overflow: tt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = De(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ie = e, je = null, !0) : !1;
    default:
      return !1;
  }
}
function Di(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ri(e) {
  if (X) {
    var t = je;
    if (t) {
      var n = t;
      if (!zo(e, t)) {
        if (Di(e)) throw Error(I(418));
        t = vt(n.nextSibling);
        var r = Ie;
        t && zo(e, t) ? _u(r, n) : (e.flags = e.flags & -4097 | 2, X = !1, Ie = e);
      }
    } else {
      if (Di(e)) throw Error(I(418));
      e.flags = e.flags & -4097 | 2, X = !1, Ie = e;
    }
  }
}
function Do(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ie = e;
}
function Cr(e) {
  if (e !== Ie) return !1;
  if (!X) return Do(e), X = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Li(e.type, e.memoizedProps)), t && (t = je)) {
    if (Di(e)) throw Su(), Error(I(418));
    for (; t; ) _u(e, t), t = vt(t.nextSibling);
  }
  if (Do(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(I(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              je = vt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      je = null;
    }
  } else je = Ie ? vt(e.stateNode.nextSibling) : null;
  return !0;
}
function Su() {
  for (var e = je; e; ) e = vt(e.nextSibling);
}
function fn() {
  je = Ie = null, X = !1;
}
function Ss(e) {
  Ve === null ? Ve = [e] : Ve.push(e);
}
var Sf = ot.ReactCurrentBatchConfig;
function In(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(I(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(I(147, e));
      var l = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var a = l.refs;
        s === null ? delete a[i] : a[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(I(284));
    if (!n._owner) throw Error(I(290, e));
  }
  return e;
}
function Nr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(I(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ro(e) {
  var t = e._init;
  return t(e._payload);
}
function ku(e) {
  function t(c, f) {
    if (e) {
      var p = c.deletions;
      p === null ? (c.deletions = [f], c.flags |= 16) : p.push(f);
    }
  }
  function n(c, f) {
    if (!e) return null;
    for (; f !== null; ) t(c, f), f = f.sibling;
    return null;
  }
  function r(c, f) {
    for (c = /* @__PURE__ */ new Map(); f !== null; ) f.key !== null ? c.set(f.key, f) : c.set(f.index, f), f = f.sibling;
    return c;
  }
  function l(c, f) {
    return c = St(c, f), c.index = 0, c.sibling = null, c;
  }
  function i(c, f, p) {
    return c.index = p, e ? (p = c.alternate, p !== null ? (p = p.index, p < f ? (c.flags |= 2, f) : p) : (c.flags |= 2, f)) : (c.flags |= 1048576, f);
  }
  function s(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function a(c, f, p, S) {
    return f === null || f.tag !== 6 ? (f = ii(p, c.mode, S), f.return = c, f) : (f = l(f, p), f.return = c, f);
  }
  function u(c, f, p, S) {
    var L = p.type;
    return L === Bt ? v(c, f, p.props.children, S, p.key) : f !== null && (f.elementType === L || typeof L == "object" && L !== null && L.$$typeof === ut && Ro(L) === f.type) ? (S = l(f, p.props), S.ref = In(c, f, p), S.return = c, S) : (S = Qr(p.type, p.key, p.props, null, c.mode, S), S.ref = In(c, f, p), S.return = c, S);
  }
  function d(c, f, p, S) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== p.containerInfo || f.stateNode.implementation !== p.implementation ? (f = si(p, c.mode, S), f.return = c, f) : (f = l(f, p.children || []), f.return = c, f);
  }
  function v(c, f, p, S, L) {
    return f === null || f.tag !== 7 ? (f = Ft(p, c.mode, S, L), f.return = c, f) : (f = l(f, p), f.return = c, f);
  }
  function y(c, f, p) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = ii("" + f, c.mode, p), f.return = c, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case hr:
          return p = Qr(f.type, f.key, f.props, null, c.mode, p), p.ref = In(c, null, f), p.return = c, p;
        case Ht:
          return f = si(f, c.mode, p), f.return = c, f;
        case ut:
          var S = f._init;
          return y(c, S(f._payload), p);
      }
      if (Pn(f) || kn(f)) return f = Ft(f, c.mode, p, null), f.return = c, f;
      Nr(c, f);
    }
    return null;
  }
  function h(c, f, p, S) {
    var L = f !== null ? f.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return L !== null ? null : a(c, f, "" + p, S);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case hr:
          return p.key === L ? u(c, f, p, S) : null;
        case Ht:
          return p.key === L ? d(c, f, p, S) : null;
        case ut:
          return L = p._init, h(
            c,
            f,
            L(p._payload),
            S
          );
      }
      if (Pn(p) || kn(p)) return L !== null ? null : v(c, f, p, S, null);
      Nr(c, p);
    }
    return null;
  }
  function E(c, f, p, S, L) {
    if (typeof S == "string" && S !== "" || typeof S == "number") return c = c.get(p) || null, a(f, c, "" + S, L);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case hr:
          return c = c.get(S.key === null ? p : S.key) || null, u(f, c, S, L);
        case Ht:
          return c = c.get(S.key === null ? p : S.key) || null, d(f, c, S, L);
        case ut:
          var _ = S._init;
          return E(c, f, p, _(S._payload), L);
      }
      if (Pn(S) || kn(S)) return c = c.get(p) || null, v(f, c, S, L, null);
      Nr(f, S);
    }
    return null;
  }
  function N(c, f, p, S) {
    for (var L = null, _ = null, T = f, g = f = 0, R = null; T !== null && g < p.length; g++) {
      T.index > g ? (R = T, T = null) : R = T.sibling;
      var C = h(c, T, p[g], S);
      if (C === null) {
        T === null && (T = R);
        break;
      }
      e && T && C.alternate === null && t(c, T), f = i(C, f, g), _ === null ? L = C : _.sibling = C, _ = C, T = R;
    }
    if (g === p.length) return n(c, T), X && Lt(c, g), L;
    if (T === null) {
      for (; g < p.length; g++) T = y(c, p[g], S), T !== null && (f = i(T, f, g), _ === null ? L = T : _.sibling = T, _ = T);
      return X && Lt(c, g), L;
    }
    for (T = r(c, T); g < p.length; g++) R = E(T, c, g, p[g], S), R !== null && (e && R.alternate !== null && T.delete(R.key === null ? g : R.key), f = i(R, f, g), _ === null ? L = R : _.sibling = R, _ = R);
    return e && T.forEach(function(M) {
      return t(c, M);
    }), X && Lt(c, g), L;
  }
  function j(c, f, p, S) {
    var L = kn(p);
    if (typeof L != "function") throw Error(I(150));
    if (p = L.call(p), p == null) throw Error(I(151));
    for (var _ = L = null, T = f, g = f = 0, R = null, C = p.next(); T !== null && !C.done; g++, C = p.next()) {
      T.index > g ? (R = T, T = null) : R = T.sibling;
      var M = h(c, T, C.value, S);
      if (M === null) {
        T === null && (T = R);
        break;
      }
      e && T && M.alternate === null && t(c, T), f = i(M, f, g), _ === null ? L = M : _.sibling = M, _ = M, T = R;
    }
    if (C.done) return n(
      c,
      T
    ), X && Lt(c, g), L;
    if (T === null) {
      for (; !C.done; g++, C = p.next()) C = y(c, C.value, S), C !== null && (f = i(C, f, g), _ === null ? L = C : _.sibling = C, _ = C);
      return X && Lt(c, g), L;
    }
    for (T = r(c, T); !C.done; g++, C = p.next()) C = E(T, c, g, C.value, S), C !== null && (e && C.alternate !== null && T.delete(C.key === null ? g : C.key), f = i(C, f, g), _ === null ? L = C : _.sibling = C, _ = C);
    return e && T.forEach(function(m) {
      return t(c, m);
    }), X && Lt(c, g), L;
  }
  function F(c, f, p, S) {
    if (typeof p == "object" && p !== null && p.type === Bt && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case hr:
          e: {
            for (var L = p.key, _ = f; _ !== null; ) {
              if (_.key === L) {
                if (L = p.type, L === Bt) {
                  if (_.tag === 7) {
                    n(c, _.sibling), f = l(_, p.props.children), f.return = c, c = f;
                    break e;
                  }
                } else if (_.elementType === L || typeof L == "object" && L !== null && L.$$typeof === ut && Ro(L) === _.type) {
                  n(c, _.sibling), f = l(_, p.props), f.ref = In(c, _, p), f.return = c, c = f;
                  break e;
                }
                n(c, _);
                break;
              } else t(c, _);
              _ = _.sibling;
            }
            p.type === Bt ? (f = Ft(p.props.children, c.mode, S, p.key), f.return = c, c = f) : (S = Qr(p.type, p.key, p.props, null, c.mode, S), S.ref = In(c, f, p), S.return = c, c = S);
          }
          return s(c);
        case Ht:
          e: {
            for (_ = p.key; f !== null; ) {
              if (f.key === _) if (f.tag === 4 && f.stateNode.containerInfo === p.containerInfo && f.stateNode.implementation === p.implementation) {
                n(c, f.sibling), f = l(f, p.children || []), f.return = c, c = f;
                break e;
              } else {
                n(c, f);
                break;
              }
              else t(c, f);
              f = f.sibling;
            }
            f = si(p, c.mode, S), f.return = c, c = f;
          }
          return s(c);
        case ut:
          return _ = p._init, F(c, f, _(p._payload), S);
      }
      if (Pn(p)) return N(c, f, p, S);
      if (kn(p)) return j(c, f, p, S);
      Nr(c, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, f !== null && f.tag === 6 ? (n(c, f.sibling), f = l(f, p), f.return = c, c = f) : (n(c, f), f = ii(p, c.mode, S), f.return = c, c = f), s(c)) : n(c, f);
  }
  return F;
}
var pn = ku(!0), Eu = ku(!1), rl = Nt(null), ll = null, en = null, ks = null;
function Es() {
  ks = en = ll = null;
}
function Cs(e) {
  var t = rl.current;
  Y(rl), e._currentValue = t;
}
function Fi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function an(e, t) {
  ll = e, ks = en = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (_e = !0), e.firstContext = null);
}
function Fe(e) {
  var t = e._currentValue;
  if (ks !== e) if (e = { context: e, memoizedValue: t, next: null }, en === null) {
    if (ll === null) throw Error(I(308));
    en = e, ll.dependencies = { lanes: 0, firstContext: e };
  } else en = en.next = e;
  return t;
}
var zt = null;
function Ns(e) {
  zt === null ? zt = [e] : zt.push(e);
}
function Cu(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Ns(t)) : (n.next = l.next, l.next = n), t.interleaved = n, it(e, r);
}
function it(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var ct = !1;
function js(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Nu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function nt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function wt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Q & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, it(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Ns(r)) : (t.next = l.next, l.next = t), r.interleaved = t, it(e, n);
}
function Or(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, fs(e, n);
  }
}
function Fo(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? l = i = s : i = i.next = s, n = n.next;
      } while (n !== null);
      i === null ? l = i = t : i = i.next = t;
    } else l = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function il(e, t, n, r) {
  var l = e.updateQueue;
  ct = !1;
  var i = l.firstBaseUpdate, s = l.lastBaseUpdate, a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a, d = u.next;
    u.next = null, s === null ? i = d : s.next = d, s = u;
    var v = e.alternate;
    v !== null && (v = v.updateQueue, a = v.lastBaseUpdate, a !== s && (a === null ? v.firstBaseUpdate = d : a.next = d, v.lastBaseUpdate = u));
  }
  if (i !== null) {
    var y = l.baseState;
    s = 0, v = d = u = null, a = i;
    do {
      var h = a.lane, E = a.eventTime;
      if ((r & h) === h) {
        v !== null && (v = v.next = {
          eventTime: E,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var N = e, j = a;
          switch (h = t, E = n, j.tag) {
            case 1:
              if (N = j.payload, typeof N == "function") {
                y = N.call(E, y, h);
                break e;
              }
              y = N;
              break e;
            case 3:
              N.flags = N.flags & -65537 | 128;
            case 0:
              if (N = j.payload, h = typeof N == "function" ? N.call(E, y, h) : N, h == null) break e;
              y = q({}, y, h);
              break e;
            case 2:
              ct = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [a] : h.push(a));
      } else E = { eventTime: E, lane: h, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, v === null ? (d = v = E, u = y) : v = v.next = E, s |= h;
      if (a = a.next, a === null) {
        if (a = l.shared.pending, a === null) break;
        h = a, a = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
      }
    } while (!0);
    if (v === null && (u = y), l.baseState = u, l.firstBaseUpdate = d, l.lastBaseUpdate = v, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        s |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    bt |= s, e.lanes = s, e.memoizedState = y;
  }
}
function Oo(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(I(191, l));
      l.call(r);
    }
  }
}
var dr = {}, Ze = Nt(dr), tr = Nt(dr), nr = Nt(dr);
function Dt(e) {
  if (e === dr) throw Error(I(174));
  return e;
}
function Is(e, t) {
  switch (G(nr, t), G(tr, e), G(Ze, dr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : gi(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = gi(t, e);
  }
  Y(Ze), G(Ze, t);
}
function mn() {
  Y(Ze), Y(tr), Y(nr);
}
function ju(e) {
  Dt(nr.current);
  var t = Dt(Ze.current), n = gi(t, e.type);
  t !== n && (G(tr, e), G(Ze, n));
}
function Ts(e) {
  tr.current === e && (Y(Ze), Y(tr));
}
var Z = Nt(0);
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
var ql = [];
function Ls() {
  for (var e = 0; e < ql.length; e++) ql[e]._workInProgressVersionPrimary = null;
  ql.length = 0;
}
var Ar = ot.ReactCurrentDispatcher, ei = ot.ReactCurrentBatchConfig, $t = 0, J = null, le = null, se = null, ol = !1, bn = !1, rr = 0, kf = 0;
function de() {
  throw Error(I(321));
}
function Ms(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!He(e[n], t[n])) return !1;
  return !0;
}
function Ps(e, t, n, r, l, i) {
  if ($t = i, J = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ar.current = e === null || e.memoizedState === null ? jf : If, e = n(r, l), bn) {
    i = 0;
    do {
      if (bn = !1, rr = 0, 25 <= i) throw Error(I(301));
      i += 1, se = le = null, t.updateQueue = null, Ar.current = Tf, e = n(r, l);
    } while (bn);
  }
  if (Ar.current = al, t = le !== null && le.next !== null, $t = 0, se = le = J = null, ol = !1, t) throw Error(I(300));
  return e;
}
function zs() {
  var e = rr !== 0;
  return rr = 0, e;
}
function Ke() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return se === null ? J.memoizedState = se = e : se = se.next = e, se;
}
function Oe() {
  if (le === null) {
    var e = J.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = le.next;
  var t = se === null ? J.memoizedState : se.next;
  if (t !== null) se = t, le = e;
  else {
    if (e === null) throw Error(I(310));
    le = e, e = { memoizedState: le.memoizedState, baseState: le.baseState, baseQueue: le.baseQueue, queue: le.queue, next: null }, se === null ? J.memoizedState = se = e : se = se.next = e;
  }
  return se;
}
function lr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ti(e) {
  var t = Oe(), n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = le, l = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var s = l.next;
      l.next = i.next, i.next = s;
    }
    r.baseQueue = l = i, n.pending = null;
  }
  if (l !== null) {
    i = l.next, r = r.baseState;
    var a = s = null, u = null, d = i;
    do {
      var v = d.lane;
      if (($t & v) === v) u !== null && (u = u.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var y = {
          lane: v,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        u === null ? (a = u = y, s = r) : u = u.next = y, J.lanes |= v, bt |= v;
      }
      d = d.next;
    } while (d !== null && d !== i);
    u === null ? s = r : u.next = a, He(r, t.memoizedState) || (_e = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, J.lanes |= i, bt |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ni(e) {
  var t = Oe(), n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var s = l = l.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== l);
    He(i, t.memoizedState) || (_e = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Iu() {
}
function Tu(e, t) {
  var n = J, r = Oe(), l = t(), i = !He(r.memoizedState, l);
  if (i && (r.memoizedState = l, _e = !0), r = r.queue, Ds(Pu.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || se !== null && se.memoizedState.tag & 1) {
    if (n.flags |= 2048, ir(9, Mu.bind(null, n, r, l, t), void 0, null), oe === null) throw Error(I(349));
    $t & 30 || Lu(n, t, l);
  }
  return l;
}
function Lu(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = J.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, J.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Mu(e, t, n, r) {
  t.value = n, t.getSnapshot = r, zu(t) && Du(e);
}
function Pu(e, t, n) {
  return n(function() {
    zu(t) && Du(e);
  });
}
function zu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !He(e, n);
  } catch {
    return !0;
  }
}
function Du(e) {
  var t = it(e, 1);
  t !== null && We(t, e, 1, -1);
}
function Ao(e) {
  var t = Ke();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: lr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Nf.bind(null, J, e), [t.memoizedState, e];
}
function ir(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = J.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, J.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ru() {
  return Oe().memoizedState;
}
function $r(e, t, n, r) {
  var l = Ke();
  J.flags |= e, l.memoizedState = ir(1 | t, n, void 0, r === void 0 ? null : r);
}
function Sl(e, t, n, r) {
  var l = Oe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (le !== null) {
    var s = le.memoizedState;
    if (i = s.destroy, r !== null && Ms(r, s.deps)) {
      l.memoizedState = ir(t, n, i, r);
      return;
    }
  }
  J.flags |= e, l.memoizedState = ir(1 | t, n, i, r);
}
function $o(e, t) {
  return $r(8390656, 8, e, t);
}
function Ds(e, t) {
  return Sl(2048, 8, e, t);
}
function Fu(e, t) {
  return Sl(4, 2, e, t);
}
function Ou(e, t) {
  return Sl(4, 4, e, t);
}
function Au(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function $u(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Sl(4, 4, Au.bind(null, t, e), n);
}
function Rs() {
}
function bu(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ms(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Uu(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ms(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Vu(e, t, n) {
  return $t & 21 ? (He(n, t) || (n = Ga(), J.lanes |= n, bt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, _e = !0), e.memoizedState = n);
}
function Ef(e, t) {
  var n = H;
  H = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ei.transition;
  ei.transition = {};
  try {
    e(!1), t();
  } finally {
    H = n, ei.transition = r;
  }
}
function Qu() {
  return Oe().memoizedState;
}
function Cf(e, t, n) {
  var r = _t(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Wu(e)) Hu(t, n);
  else if (n = Cu(e, t, n, r), n !== null) {
    var l = ye();
    We(n, e, r, l), Bu(n, t, r);
  }
}
function Nf(e, t, n) {
  var r = _t(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Wu(e)) Hu(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, a = i(s, n);
      if (l.hasEagerState = !0, l.eagerState = a, He(a, s)) {
        var u = t.interleaved;
        u === null ? (l.next = l, Ns(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Cu(e, t, l, r), n !== null && (l = ye(), We(n, e, r, l), Bu(n, t, r));
  }
}
function Wu(e) {
  var t = e.alternate;
  return e === J || t !== null && t === J;
}
function Hu(e, t) {
  bn = ol = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Bu(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, fs(e, n);
  }
}
var al = { readContext: Fe, useCallback: de, useContext: de, useEffect: de, useImperativeHandle: de, useInsertionEffect: de, useLayoutEffect: de, useMemo: de, useReducer: de, useRef: de, useState: de, useDebugValue: de, useDeferredValue: de, useTransition: de, useMutableSource: de, useSyncExternalStore: de, useId: de, unstable_isNewReconciler: !1 }, jf = { readContext: Fe, useCallback: function(e, t) {
  return Ke().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Fe, useEffect: $o, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, $r(
    4194308,
    4,
    Au.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return $r(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return $r(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ke();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ke();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Cf.bind(null, J, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ke();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ao, useDebugValue: Rs, useDeferredValue: function(e) {
  return Ke().memoizedState = e;
}, useTransition: function() {
  var e = Ao(!1), t = e[0];
  return e = Ef.bind(null, e[1]), Ke().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = J, l = Ke();
  if (X) {
    if (n === void 0) throw Error(I(407));
    n = n();
  } else {
    if (n = t(), oe === null) throw Error(I(349));
    $t & 30 || Lu(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, $o(Pu.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, ir(9, Mu.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Ke(), t = oe.identifierPrefix;
  if (X) {
    var n = tt, r = et;
    n = (r & ~(1 << 32 - Qe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = rr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = kf++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, If = {
  readContext: Fe,
  useCallback: bu,
  useContext: Fe,
  useEffect: Ds,
  useImperativeHandle: $u,
  useInsertionEffect: Fu,
  useLayoutEffect: Ou,
  useMemo: Uu,
  useReducer: ti,
  useRef: Ru,
  useState: function() {
    return ti(lr);
  },
  useDebugValue: Rs,
  useDeferredValue: function(e) {
    var t = Oe();
    return Vu(t, le.memoizedState, e);
  },
  useTransition: function() {
    var e = ti(lr)[0], t = Oe().memoizedState;
    return [e, t];
  },
  useMutableSource: Iu,
  useSyncExternalStore: Tu,
  useId: Qu,
  unstable_isNewReconciler: !1
}, Tf = { readContext: Fe, useCallback: bu, useContext: Fe, useEffect: Ds, useImperativeHandle: $u, useInsertionEffect: Fu, useLayoutEffect: Ou, useMemo: Uu, useReducer: ni, useRef: Ru, useState: function() {
  return ni(lr);
}, useDebugValue: Rs, useDeferredValue: function(e) {
  var t = Oe();
  return le === null ? t.memoizedState = e : Vu(t, le.memoizedState, e);
}, useTransition: function() {
  var e = ni(lr)[0], t = Oe().memoizedState;
  return [e, t];
}, useMutableSource: Iu, useSyncExternalStore: Tu, useId: Qu, unstable_isNewReconciler: !1 };
function be(e, t) {
  if (e && e.defaultProps) {
    t = q({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Oi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var kl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Qt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ye(), l = _t(e), i = nt(r, l);
  i.payload = t, n != null && (i.callback = n), t = wt(e, i, l), t !== null && (We(t, e, l, r), Or(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ye(), l = _t(e), i = nt(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = wt(e, i, l), t !== null && (We(t, e, l, r), Or(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ye(), r = _t(e), l = nt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = wt(e, l, r), t !== null && (We(t, e, r, n), Or(t, e, r));
} };
function bo(e, t, n, r, l, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Zn(n, r) || !Zn(l, i) : !0;
}
function Gu(e, t, n) {
  var r = !1, l = Et, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Fe(i) : (l = ke(t) ? Ot : me.current, r = t.contextTypes, i = (r = r != null) ? dn(e, l) : Et), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = kl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Uo(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && kl.enqueueReplaceState(t, t.state, null);
}
function Ai(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, js(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = Fe(i) : (i = ke(t) ? Ot : me.current, l.context = dn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Oi(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && kl.enqueueReplaceState(l, l.state, null), il(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function hn(e, t) {
  try {
    var n = "", r = t;
    do
      n += nd(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ri(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function $i(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Lf = typeof WeakMap == "function" ? WeakMap : Map;
function Ku(e, t, n) {
  n = nt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    cl || (cl = !0, Yi = r), $i(e, t);
  }, n;
}
function Yu(e, t, n) {
  n = nt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      $i(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    $i(e, t), typeof r != "function" && (xt === null ? xt = /* @__PURE__ */ new Set([this]) : xt.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Vo(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Lf();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Wf.bind(null, e, t, n), t.then(e, e));
}
function Qo(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Wo(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = nt(-1, 1), t.tag = 2, wt(n, t, 1))), n.lanes |= 1), e);
}
var Mf = ot.ReactCurrentOwner, _e = !1;
function he(e, t, n, r) {
  t.child = e === null ? Eu(t, null, n, r) : pn(t, e.child, n, r);
}
function Ho(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return an(t, l), r = Ps(e, t, n, r, i, l), n = zs(), e !== null && !_e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, st(e, t, l)) : (X && n && xs(t), t.flags |= 1, he(e, t, r, l), t.child);
}
function Bo(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Qs(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Xu(e, t, i, r, l)) : (e = Qr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Zn, n(s, r) && e.ref === t.ref) return st(e, t, l);
  }
  return t.flags |= 1, e = St(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Xu(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Zn(i, r) && e.ref === t.ref) if (_e = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (_e = !0);
    else return t.lanes = e.lanes, st(e, t, l);
  }
  return bi(e, t, n, r, l);
}
function Zu(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(nn, Ne), Ne |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, G(nn, Ne), Ne |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, G(nn, Ne), Ne |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, G(nn, Ne), Ne |= r;
  return he(e, t, l, n), t.child;
}
function Ju(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function bi(e, t, n, r, l) {
  var i = ke(n) ? Ot : me.current;
  return i = dn(t, i), an(t, l), n = Ps(e, t, n, r, i, l), r = zs(), e !== null && !_e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, st(e, t, l)) : (X && r && xs(t), t.flags |= 1, he(e, t, n, l), t.child);
}
function Go(e, t, n, r, l) {
  if (ke(n)) {
    var i = !0;
    el(t);
  } else i = !1;
  if (an(t, l), t.stateNode === null) br(e, t), Gu(t, n, r), Ai(t, n, r, l), r = !0;
  else if (e === null) {
    var s = t.stateNode, a = t.memoizedProps;
    s.props = a;
    var u = s.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = Fe(d) : (d = ke(n) ? Ot : me.current, d = dn(t, d));
    var v = n.getDerivedStateFromProps, y = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    y || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || u !== d) && Uo(t, s, r, d), ct = !1;
    var h = t.memoizedState;
    s.state = h, il(t, r, s, l), u = t.memoizedState, a !== r || h !== u || Se.current || ct ? (typeof v == "function" && (Oi(t, n, v, r), u = t.memoizedState), (a = ct || bo(t, n, a, r, h, u, d)) ? (y || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), s.props = r, s.state = u, s.context = d, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Nu(e, t), a = t.memoizedProps, d = t.type === t.elementType ? a : be(t.type, a), s.props = d, y = t.pendingProps, h = s.context, u = n.contextType, typeof u == "object" && u !== null ? u = Fe(u) : (u = ke(n) ? Ot : me.current, u = dn(t, u));
    var E = n.getDerivedStateFromProps;
    (v = typeof E == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== y || h !== u) && Uo(t, s, r, u), ct = !1, h = t.memoizedState, s.state = h, il(t, r, s, l);
    var N = t.memoizedState;
    a !== y || h !== N || Se.current || ct ? (typeof E == "function" && (Oi(t, n, E, r), N = t.memoizedState), (d = ct || bo(t, n, d, r, h, N, u) || !1) ? (v || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, N, u), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, N, u)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = N), s.props = r, s.state = N, s.context = u, r = d) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ui(e, t, n, r, i, l);
}
function Ui(e, t, n, r, l, i) {
  Ju(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return l && Po(t, n, !1), st(e, t, i);
  r = t.stateNode, Mf.current = t;
  var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = pn(t, e.child, null, i), t.child = pn(t, null, a, i)) : he(e, t, a, i), t.memoizedState = r.state, l && Po(t, n, !0), t.child;
}
function qu(e) {
  var t = e.stateNode;
  t.pendingContext ? Mo(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Mo(e, t.context, !1), Is(e, t.containerInfo);
}
function Ko(e, t, n, r, l) {
  return fn(), Ss(l), t.flags |= 256, he(e, t, n, r), t.child;
}
var Vi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Qi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ec(e, t, n) {
  var r = t.pendingProps, l = Z.current, i = !1, s = (t.flags & 128) !== 0, a;
  if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), G(Z, l & 1), e === null)
    return Ri(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Nl(s, r, 0, null), e = Ft(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Qi(n), t.memoizedState = Vi, e) : Fs(t, s));
  if (l = e.memoizedState, l !== null && (a = l.dehydrated, a !== null)) return Pf(e, t, s, r, a, l, n);
  if (i) {
    i = r.fallback, s = t.mode, l = e.child, a = l.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = St(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), a !== null ? i = St(a, i) : (i = Ft(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Qi(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Vi, r;
  }
  return i = e.child, e = i.sibling, r = St(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Fs(e, t) {
  return t = Nl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function jr(e, t, n, r) {
  return r !== null && Ss(r), pn(t, e.child, null, n), e = Fs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Pf(e, t, n, r, l, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ri(Error(I(422))), jr(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Nl({ mode: "visible", children: r.children }, l, 0, null), i = Ft(i, l, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && pn(t, e.child, null, s), t.child.memoizedState = Qi(s), t.memoizedState = Vi, i);
  if (!(t.mode & 1)) return jr(e, t, s, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var a = r.dgst;
    return r = a, i = Error(I(419)), r = ri(i, r, void 0), jr(e, t, s, r);
  }
  if (a = (s & e.childLanes) !== 0, _e || a) {
    if (r = oe, r !== null) {
      switch (s & -s) {
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
      l = l & (r.suspendedLanes | s) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, it(e, l), We(r, e, l, -1));
    }
    return Vs(), r = ri(Error(I(421))), jr(e, t, s, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Hf.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, je = vt(l.nextSibling), Ie = t, X = !0, Ve = null, e !== null && (Pe[ze++] = et, Pe[ze++] = tt, Pe[ze++] = At, et = e.id, tt = e.overflow, At = t), t = Fs(t, r.children), t.flags |= 4096, t);
}
function Yo(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Fi(e.return, t, n);
}
function li(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function tc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (he(e, t, r.children, n), r = Z.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Yo(e, n, t);
      else if (e.tag === 19) Yo(e, n, t);
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
  if (G(Z, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && sl(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), li(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && sl(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      li(t, !0, n, null, i);
      break;
    case "together":
      li(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function br(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function st(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), bt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(I(153));
  if (t.child !== null) {
    for (e = t.child, n = St(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = St(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function zf(e, t, n) {
  switch (t.tag) {
    case 3:
      qu(t), fn();
      break;
    case 5:
      ju(t);
      break;
    case 1:
      ke(t.type) && el(t);
      break;
    case 4:
      Is(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      G(rl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (G(Z, Z.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ec(e, t, n) : (G(Z, Z.current & 1), e = st(e, t, n), e !== null ? e.sibling : null);
      G(Z, Z.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return tc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), G(Z, Z.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Zu(e, t, n);
  }
  return st(e, t, n);
}
var nc, Wi, rc, lc;
nc = function(e, t) {
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
Wi = function() {
};
rc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Dt(Ze.current);
    var i = null;
    switch (n) {
      case "input":
        l = fi(e, l), r = fi(e, r), i = [];
        break;
      case "select":
        l = q({}, l, { value: void 0 }), r = q({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = hi(e, l), r = hi(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Jr);
    }
    yi(n, r);
    var s;
    n = null;
    for (d in l) if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null) if (d === "style") {
      var a = l[d];
      for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Wn.hasOwnProperty(d) ? i || (i = []) : (i = i || []).push(d, null));
    for (d in r) {
      var u = r[d];
      if (a = l != null ? l[d] : void 0, r.hasOwnProperty(d) && u !== a && (u != null || a != null)) if (d === "style") if (a) {
        for (s in a) !a.hasOwnProperty(s) || u && u.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in u) u.hasOwnProperty(s) && a[s] !== u[s] && (n || (n = {}), n[s] = u[s]);
      } else n || (i || (i = []), i.push(
        d,
        n
      )), n = u;
      else d === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, a = a ? a.__html : void 0, u != null && a !== u && (i = i || []).push(d, u)) : d === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(d, "" + u) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Wn.hasOwnProperty(d) ? (u != null && d === "onScroll" && K("scroll", e), i || a === u || (i = [])) : (i = i || []).push(d, u));
    }
    n && (i = i || []).push("style", n);
    var d = i;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
lc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Tn(e, t) {
  if (!X) switch (e.tailMode) {
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
function fe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Df(e, t, n) {
  var r = t.pendingProps;
  switch (_s(t), t.tag) {
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
      return fe(t), null;
    case 1:
      return ke(t.type) && qr(), fe(t), null;
    case 3:
      return r = t.stateNode, mn(), Y(Se), Y(me), Ls(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Cr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ve !== null && (Ji(Ve), Ve = null))), Wi(e, t), fe(t), null;
    case 5:
      Ts(t);
      var l = Dt(nr.current);
      if (n = t.type, e !== null && t.stateNode != null) rc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(I(166));
          return fe(t), null;
        }
        if (e = Dt(Ze.current), Cr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Ye] = t, r[er] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              K("cancel", r), K("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              K("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Dn.length; l++) K(Dn[l], r);
              break;
            case "source":
              K("error", r);
              break;
            case "img":
            case "image":
            case "link":
              K(
                "error",
                r
              ), K("load", r);
              break;
            case "details":
              K("toggle", r);
              break;
            case "input":
              ro(r, i), K("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, K("invalid", r);
              break;
            case "textarea":
              io(r, i), K("invalid", r);
          }
          yi(n, i), l = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var a = i[s];
            s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && Er(r.textContent, a, e), l = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && Er(
              r.textContent,
              a,
              e
            ), l = ["children", "" + a]) : Wn.hasOwnProperty(s) && a != null && s === "onScroll" && K("scroll", r);
          }
          switch (n) {
            case "input":
              gr(r), lo(r, i, !0);
              break;
            case "textarea":
              gr(r), so(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Jr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Pa(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Ye] = t, e[er] = r, nc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = vi(n, r), n) {
              case "dialog":
                K("cancel", e), K("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                K("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Dn.length; l++) K(Dn[l], e);
                l = r;
                break;
              case "source":
                K("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                K(
                  "error",
                  e
                ), K("load", e), l = r;
                break;
              case "details":
                K("toggle", e), l = r;
                break;
              case "input":
                ro(e, r), l = fi(e, r), K("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = q({}, r, { value: void 0 }), K("invalid", e);
                break;
              case "textarea":
                io(e, r), l = hi(e, r), K("invalid", e);
                break;
              default:
                l = r;
            }
            yi(n, l), a = l;
            for (i in a) if (a.hasOwnProperty(i)) {
              var u = a[i];
              i === "style" ? Ra(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && za(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Hn(e, u) : typeof u == "number" && Hn(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Wn.hasOwnProperty(i) ? u != null && i === "onScroll" && K("scroll", e) : u != null && ss(e, i, u, s));
            }
            switch (n) {
              case "input":
                gr(e), lo(e, r, !1);
                break;
              case "textarea":
                gr(e), so(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + kt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? rn(e, !!r.multiple, i, !1) : r.defaultValue != null && rn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Jr);
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
      return fe(t), null;
    case 6:
      if (e && t.stateNode != null) lc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(I(166));
        if (n = Dt(nr.current), Dt(Ze.current), Cr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ye] = t, (i = r.nodeValue !== n) && (e = Ie, e !== null)) switch (e.tag) {
            case 3:
              Er(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Er(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ye] = t, t.stateNode = r;
      }
      return fe(t), null;
    case 13:
      if (Y(Z), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (X && je !== null && t.mode & 1 && !(t.flags & 128)) Su(), fn(), t.flags |= 98560, i = !1;
        else if (i = Cr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(I(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(I(317));
            i[Ye] = t;
          } else fn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          fe(t), i = !1;
        } else Ve !== null && (Ji(Ve), Ve = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Z.current & 1 ? ie === 0 && (ie = 3) : Vs())), t.updateQueue !== null && (t.flags |= 4), fe(t), null);
    case 4:
      return mn(), Wi(e, t), e === null && Jn(t.stateNode.containerInfo), fe(t), null;
    case 10:
      return Cs(t.type._context), fe(t), null;
    case 17:
      return ke(t.type) && qr(), fe(t), null;
    case 19:
      if (Y(Z), i = t.memoizedState, i === null) return fe(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) Tn(i, !1);
      else {
        if (ie !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = sl(e), s !== null) {
            for (t.flags |= 128, Tn(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return G(Z, Z.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && ne() > gn && (t.flags |= 128, r = !0, Tn(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = sl(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Tn(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !X) return fe(t), null;
        } else 2 * ne() - i.renderingStartTime > gn && n !== 1073741824 && (t.flags |= 128, r = !0, Tn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ne(), t.sibling = null, n = Z.current, G(Z, r ? n & 1 | 2 : n & 1), t) : (fe(t), null);
    case 22:
    case 23:
      return Us(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ne & 1073741824 && (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : fe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(I(156, t.tag));
}
function Rf(e, t) {
  switch (_s(t), t.tag) {
    case 1:
      return ke(t.type) && qr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return mn(), Y(Se), Y(me), Ls(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ts(t), null;
    case 13:
      if (Y(Z), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(I(340));
        fn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Y(Z), null;
    case 4:
      return mn(), null;
    case 10:
      return Cs(t.type._context), null;
    case 22:
    case 23:
      return Us(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ir = !1, pe = !1, Ff = typeof WeakSet == "function" ? WeakSet : Set, z = null;
function tn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    te(e, t, r);
  }
  else n.current = null;
}
function Hi(e, t, n) {
  try {
    n();
  } catch (r) {
    te(e, t, r);
  }
}
var Xo = !1;
function Of(e, t) {
  if (Ii = Yr, e = uu(), ws(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset, i = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, i.nodeType;
        } catch {
          n = null;
          break e;
        }
        var s = 0, a = -1, u = -1, d = 0, v = 0, y = e, h = null;
        t: for (; ; ) {
          for (var E; y !== n || l !== 0 && y.nodeType !== 3 || (a = s + l), y !== i || r !== 0 && y.nodeType !== 3 || (u = s + r), y.nodeType === 3 && (s += y.nodeValue.length), (E = y.firstChild) !== null; )
            h = y, y = E;
          for (; ; ) {
            if (y === e) break t;
            if (h === n && ++d === l && (a = s), h === i && ++v === r && (u = s), (E = y.nextSibling) !== null) break;
            y = h, h = y.parentNode;
          }
          y = E;
        }
        n = a === -1 || u === -1 ? null : { start: a, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ti = { focusedElem: e, selectionRange: n }, Yr = !1, z = t; z !== null; ) if (t = z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, z = e;
  else for (; z !== null; ) {
    t = z;
    try {
      var N = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (N !== null) {
            var j = N.memoizedProps, F = N.memoizedState, c = t.stateNode, f = c.getSnapshotBeforeUpdate(t.elementType === t.type ? j : be(t.type, j), F);
            c.__reactInternalSnapshotBeforeUpdate = f;
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
          throw Error(I(163));
      }
    } catch (S) {
      te(t, t.return, S);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, z = e;
      break;
    }
    z = t.return;
  }
  return N = Xo, Xo = !1, N;
}
function Un(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && Hi(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function El(e, t) {
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
function Bi(e) {
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
function ic(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ic(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ye], delete t[er], delete t[Pi], delete t[wf], delete t[xf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function sc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Zo(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || sc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Gi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Jr));
  else if (r !== 4 && (e = e.child, e !== null)) for (Gi(e, t, n), e = e.sibling; e !== null; ) Gi(e, t, n), e = e.sibling;
}
function Ki(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ki(e, t, n), e = e.sibling; e !== null; ) Ki(e, t, n), e = e.sibling;
}
var ae = null, Ue = !1;
function at(e, t, n) {
  for (n = n.child; n !== null; ) oc(e, t, n), n = n.sibling;
}
function oc(e, t, n) {
  if (Xe && typeof Xe.onCommitFiberUnmount == "function") try {
    Xe.onCommitFiberUnmount(gl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      pe || tn(n, t);
    case 6:
      var r = ae, l = Ue;
      ae = null, at(e, t, n), ae = r, Ue = l, ae !== null && (Ue ? (e = ae, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ae.removeChild(n.stateNode));
      break;
    case 18:
      ae !== null && (Ue ? (e = ae, n = n.stateNode, e.nodeType === 8 ? Zl(e.parentNode, n) : e.nodeType === 1 && Zl(e, n), Yn(e)) : Zl(ae, n.stateNode));
      break;
    case 4:
      r = ae, l = Ue, ae = n.stateNode.containerInfo, Ue = !0, at(e, t, n), ae = r, Ue = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!pe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && Hi(n, t, s), l = l.next;
        } while (l !== r);
      }
      at(e, t, n);
      break;
    case 1:
      if (!pe && (tn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (a) {
        te(n, t, a);
      }
      at(e, t, n);
      break;
    case 21:
      at(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (pe = (r = pe) || n.memoizedState !== null, at(e, t, n), pe = r) : at(e, t, n);
      break;
    default:
      at(e, t, n);
  }
}
function Jo(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ff()), t.forEach(function(r) {
      var l = Bf.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Ae(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var i = e, s = t, a = s;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            ae = a.stateNode, Ue = !1;
            break e;
          case 3:
            ae = a.stateNode.containerInfo, Ue = !0;
            break e;
          case 4:
            ae = a.stateNode.containerInfo, Ue = !0;
            break e;
        }
        a = a.return;
      }
      if (ae === null) throw Error(I(160));
      oc(i, s, l), ae = null, Ue = !1;
      var u = l.alternate;
      u !== null && (u.return = null), l.return = null;
    } catch (d) {
      te(l, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ac(t, e), t = t.sibling;
}
function ac(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ae(t, e), Ge(e), r & 4) {
        try {
          Un(3, e, e.return), El(3, e);
        } catch (j) {
          te(e, e.return, j);
        }
        try {
          Un(5, e, e.return);
        } catch (j) {
          te(e, e.return, j);
        }
      }
      break;
    case 1:
      Ae(t, e), Ge(e), r & 512 && n !== null && tn(n, n.return);
      break;
    case 5:
      if (Ae(t, e), Ge(e), r & 512 && n !== null && tn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Hn(l, "");
        } catch (j) {
          te(e, e.return, j);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, a = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          a === "input" && i.type === "radio" && i.name != null && La(l, i), vi(a, s);
          var d = vi(a, i);
          for (s = 0; s < u.length; s += 2) {
            var v = u[s], y = u[s + 1];
            v === "style" ? Ra(l, y) : v === "dangerouslySetInnerHTML" ? za(l, y) : v === "children" ? Hn(l, y) : ss(l, v, y, d);
          }
          switch (a) {
            case "input":
              pi(l, i);
              break;
            case "textarea":
              Ma(l, i);
              break;
            case "select":
              var h = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var E = i.value;
              E != null ? rn(l, !!i.multiple, E, !1) : h !== !!i.multiple && (i.defaultValue != null ? rn(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : rn(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[er] = i;
        } catch (j) {
          te(e, e.return, j);
        }
      }
      break;
    case 6:
      if (Ae(t, e), Ge(e), r & 4) {
        if (e.stateNode === null) throw Error(I(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (j) {
          te(e, e.return, j);
        }
      }
      break;
    case 3:
      if (Ae(t, e), Ge(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Yn(t.containerInfo);
      } catch (j) {
        te(e, e.return, j);
      }
      break;
    case 4:
      Ae(t, e), Ge(e);
      break;
    case 13:
      Ae(t, e), Ge(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || ($s = ne())), r & 4 && Jo(e);
      break;
    case 22:
      if (v = n !== null && n.memoizedState !== null, e.mode & 1 ? (pe = (d = pe) || v, Ae(t, e), pe = d) : Ae(t, e), Ge(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !v && e.mode & 1) for (z = e, v = e.child; v !== null; ) {
          for (y = z = v; z !== null; ) {
            switch (h = z, E = h.child, h.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Un(4, h, h.return);
                break;
              case 1:
                tn(h, h.return);
                var N = h.stateNode;
                if (typeof N.componentWillUnmount == "function") {
                  r = h, n = h.return;
                  try {
                    t = r, N.props = t.memoizedProps, N.state = t.memoizedState, N.componentWillUnmount();
                  } catch (j) {
                    te(r, n, j);
                  }
                }
                break;
              case 5:
                tn(h, h.return);
                break;
              case 22:
                if (h.memoizedState !== null) {
                  ea(y);
                  continue;
                }
            }
            E !== null ? (E.return = h, z = E) : ea(y);
          }
          v = v.sibling;
        }
        e: for (v = null, y = e; ; ) {
          if (y.tag === 5) {
            if (v === null) {
              v = y;
              try {
                l = y.stateNode, d ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = y.stateNode, u = y.memoizedProps.style, s = u != null && u.hasOwnProperty("display") ? u.display : null, a.style.display = Da("display", s));
              } catch (j) {
                te(e, e.return, j);
              }
            }
          } else if (y.tag === 6) {
            if (v === null) try {
              y.stateNode.nodeValue = d ? "" : y.memoizedProps;
            } catch (j) {
              te(e, e.return, j);
            }
          } else if ((y.tag !== 22 && y.tag !== 23 || y.memoizedState === null || y === e) && y.child !== null) {
            y.child.return = y, y = y.child;
            continue;
          }
          if (y === e) break e;
          for (; y.sibling === null; ) {
            if (y.return === null || y.return === e) break e;
            v === y && (v = null), y = y.return;
          }
          v === y && (v = null), y.sibling.return = y.return, y = y.sibling;
        }
      }
      break;
    case 19:
      Ae(t, e), Ge(e), r & 4 && Jo(e);
      break;
    case 21:
      break;
    default:
      Ae(
        t,
        e
      ), Ge(e);
  }
}
function Ge(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (sc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(I(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Hn(l, ""), r.flags &= -33);
          var i = Zo(e);
          Ki(e, i, l);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, a = Zo(e);
          Gi(e, a, s);
          break;
        default:
          throw Error(I(161));
      }
    } catch (u) {
      te(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Af(e, t, n) {
  z = e, uc(e);
}
function uc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var l = z, i = l.child;
    if (l.tag === 22 && r) {
      var s = l.memoizedState !== null || Ir;
      if (!s) {
        var a = l.alternate, u = a !== null && a.memoizedState !== null || pe;
        a = Ir;
        var d = pe;
        if (Ir = s, (pe = u) && !d) for (z = l; z !== null; ) s = z, u = s.child, s.tag === 22 && s.memoizedState !== null ? ta(l) : u !== null ? (u.return = s, z = u) : ta(l);
        for (; i !== null; ) z = i, uc(i), i = i.sibling;
        z = l, Ir = a, pe = d;
      }
      qo(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, z = i) : qo(e);
  }
}
function qo(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            pe || El(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !pe) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : be(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Oo(t, i, r);
            break;
          case 3:
            var s = t.updateQueue;
            if (s !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Oo(t, s, n);
            }
            break;
          case 5:
            var a = t.stateNode;
            if (n === null && t.flags & 4) {
              n = a;
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
              var d = t.alternate;
              if (d !== null) {
                var v = d.memoizedState;
                if (v !== null) {
                  var y = v.dehydrated;
                  y !== null && Yn(y);
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
            throw Error(I(163));
        }
        pe || t.flags & 512 && Bi(t);
      } catch (h) {
        te(t, t.return, h);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, z = n;
      break;
    }
    z = t.return;
  }
}
function ea(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, z = n;
      break;
    }
    z = t.return;
  }
}
function ta(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            El(4, t);
          } catch (u) {
            te(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              te(t, l, u);
            }
          }
          var i = t.return;
          try {
            Bi(t);
          } catch (u) {
            te(t, i, u);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Bi(t);
          } catch (u) {
            te(t, s, u);
          }
      }
    } catch (u) {
      te(t, t.return, u);
    }
    if (t === e) {
      z = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, z = a;
      break;
    }
    z = t.return;
  }
}
var $f = Math.ceil, ul = ot.ReactCurrentDispatcher, Os = ot.ReactCurrentOwner, Re = ot.ReactCurrentBatchConfig, Q = 0, oe = null, re = null, ue = 0, Ne = 0, nn = Nt(0), ie = 0, sr = null, bt = 0, Cl = 0, As = 0, Vn = null, xe = null, $s = 0, gn = 1 / 0, Je = null, cl = !1, Yi = null, xt = null, Tr = !1, mt = null, dl = 0, Qn = 0, Xi = null, Ur = -1, Vr = 0;
function ye() {
  return Q & 6 ? ne() : Ur !== -1 ? Ur : Ur = ne();
}
function _t(e) {
  return e.mode & 1 ? Q & 2 && ue !== 0 ? ue & -ue : Sf.transition !== null ? (Vr === 0 && (Vr = Ga()), Vr) : (e = H, e !== 0 || (e = window.event, e = e === void 0 ? 16 : eu(e.type)), e) : 1;
}
function We(e, t, n, r) {
  if (50 < Qn) throw Qn = 0, Xi = null, Error(I(185));
  ar(e, n, r), (!(Q & 2) || e !== oe) && (e === oe && (!(Q & 2) && (Cl |= n), ie === 4 && ft(e, ue)), Ee(e, r), n === 1 && Q === 0 && !(t.mode & 1) && (gn = ne() + 500, _l && jt()));
}
function Ee(e, t) {
  var n = e.callbackNode;
  _d(e, t);
  var r = Kr(e, e === oe ? ue : 0);
  if (r === 0) n !== null && uo(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && uo(n), t === 1) e.tag === 0 ? _f(na.bind(null, e)) : wu(na.bind(null, e)), yf(function() {
      !(Q & 6) && jt();
    }), n = null;
    else {
      switch (Ka(r)) {
        case 1:
          n = ds;
          break;
        case 4:
          n = Ha;
          break;
        case 16:
          n = Gr;
          break;
        case 536870912:
          n = Ba;
          break;
        default:
          n = Gr;
      }
      n = yc(n, cc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function cc(e, t) {
  if (Ur = -1, Vr = 0, Q & 6) throw Error(I(327));
  var n = e.callbackNode;
  if (un() && e.callbackNode !== n) return null;
  var r = Kr(e, e === oe ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = fl(e, r);
  else {
    t = r;
    var l = Q;
    Q |= 2;
    var i = fc();
    (oe !== e || ue !== t) && (Je = null, gn = ne() + 500, Rt(e, t));
    do
      try {
        Vf();
        break;
      } catch (a) {
        dc(e, a);
      }
    while (!0);
    Es(), ul.current = i, Q = l, re !== null ? t = 0 : (oe = null, ue = 0, t = ie);
  }
  if (t !== 0) {
    if (t === 2 && (l = ki(e), l !== 0 && (r = l, t = Zi(e, l))), t === 1) throw n = sr, Rt(e, 0), ft(e, r), Ee(e, ne()), n;
    if (t === 6) ft(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !bf(l) && (t = fl(e, r), t === 2 && (i = ki(e), i !== 0 && (r = i, t = Zi(e, i))), t === 1)) throw n = sr, Rt(e, 0), ft(e, r), Ee(e, ne()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(I(345));
        case 2:
          Mt(e, xe, Je);
          break;
        case 3:
          if (ft(e, r), (r & 130023424) === r && (t = $s + 500 - ne(), 10 < t)) {
            if (Kr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ye(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Mi(Mt.bind(null, e, xe, Je), t);
            break;
          }
          Mt(e, xe, Je);
          break;
        case 4:
          if (ft(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var s = 31 - Qe(r);
            i = 1 << s, s = t[s], s > l && (l = s), r &= ~i;
          }
          if (r = l, r = ne() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * $f(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Mi(Mt.bind(null, e, xe, Je), r);
            break;
          }
          Mt(e, xe, Je);
          break;
        case 5:
          Mt(e, xe, Je);
          break;
        default:
          throw Error(I(329));
      }
    }
  }
  return Ee(e, ne()), e.callbackNode === n ? cc.bind(null, e) : null;
}
function Zi(e, t) {
  var n = Vn;
  return e.current.memoizedState.isDehydrated && (Rt(e, t).flags |= 256), e = fl(e, t), e !== 2 && (t = xe, xe = n, t !== null && Ji(t)), e;
}
function Ji(e) {
  xe === null ? xe = e : xe.push.apply(xe, e);
}
function bf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], i = l.getSnapshot;
        l = l.value;
        try {
          if (!He(i(), l)) return !1;
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
function ft(e, t) {
  for (t &= ~As, t &= ~Cl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Qe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function na(e) {
  if (Q & 6) throw Error(I(327));
  un();
  var t = Kr(e, 0);
  if (!(t & 1)) return Ee(e, ne()), null;
  var n = fl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ki(e);
    r !== 0 && (t = r, n = Zi(e, r));
  }
  if (n === 1) throw n = sr, Rt(e, 0), ft(e, t), Ee(e, ne()), n;
  if (n === 6) throw Error(I(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Mt(e, xe, Je), Ee(e, ne()), null;
}
function bs(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    Q = n, Q === 0 && (gn = ne() + 500, _l && jt());
  }
}
function Ut(e) {
  mt !== null && mt.tag === 0 && !(Q & 6) && un();
  var t = Q;
  Q |= 1;
  var n = Re.transition, r = H;
  try {
    if (Re.transition = null, H = 1, e) return e();
  } finally {
    H = r, Re.transition = n, Q = t, !(Q & 6) && jt();
  }
}
function Us() {
  Ne = nn.current, Y(nn);
}
function Rt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, gf(n)), re !== null) for (n = re.return; n !== null; ) {
    var r = n;
    switch (_s(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && qr();
        break;
      case 3:
        mn(), Y(Se), Y(me), Ls();
        break;
      case 5:
        Ts(r);
        break;
      case 4:
        mn();
        break;
      case 13:
        Y(Z);
        break;
      case 19:
        Y(Z);
        break;
      case 10:
        Cs(r.type._context);
        break;
      case 22:
      case 23:
        Us();
    }
    n = n.return;
  }
  if (oe = e, re = e = St(e.current, null), ue = Ne = t, ie = 0, sr = null, As = Cl = bt = 0, xe = Vn = null, zt !== null) {
    for (t = 0; t < zt.length; t++) if (n = zt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = l, r.next = s;
      }
      n.pending = r;
    }
    zt = null;
  }
  return e;
}
function dc(e, t) {
  do {
    var n = re;
    try {
      if (Es(), Ar.current = al, ol) {
        for (var r = J.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        ol = !1;
      }
      if ($t = 0, se = le = J = null, bn = !1, rr = 0, Os.current = null, n === null || n.return === null) {
        ie = 1, sr = t, re = null;
        break;
      }
      e: {
        var i = e, s = n.return, a = n, u = t;
        if (t = ue, a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var d = u, v = a, y = v.tag;
          if (!(v.mode & 1) && (y === 0 || y === 11 || y === 15)) {
            var h = v.alternate;
            h ? (v.updateQueue = h.updateQueue, v.memoizedState = h.memoizedState, v.lanes = h.lanes) : (v.updateQueue = null, v.memoizedState = null);
          }
          var E = Qo(s);
          if (E !== null) {
            E.flags &= -257, Wo(E, s, a, i, t), E.mode & 1 && Vo(i, d, t), t = E, u = d;
            var N = t.updateQueue;
            if (N === null) {
              var j = /* @__PURE__ */ new Set();
              j.add(u), t.updateQueue = j;
            } else N.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Vo(i, d, t), Vs();
              break e;
            }
            u = Error(I(426));
          }
        } else if (X && a.mode & 1) {
          var F = Qo(s);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256), Wo(F, s, a, i, t), Ss(hn(u, a));
            break e;
          }
        }
        i = u = hn(u, a), ie !== 4 && (ie = 2), Vn === null ? Vn = [i] : Vn.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var c = Ku(i, u, t);
              Fo(i, c);
              break e;
            case 1:
              a = u;
              var f = i.type, p = i.stateNode;
              if (!(i.flags & 128) && (typeof f.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (xt === null || !xt.has(p)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var S = Yu(i, a, t);
                Fo(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      mc(n);
    } catch (L) {
      t = L, re === n && n !== null && (re = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function fc() {
  var e = ul.current;
  return ul.current = al, e === null ? al : e;
}
function Vs() {
  (ie === 0 || ie === 3 || ie === 2) && (ie = 4), oe === null || !(bt & 268435455) && !(Cl & 268435455) || ft(oe, ue);
}
function fl(e, t) {
  var n = Q;
  Q |= 2;
  var r = fc();
  (oe !== e || ue !== t) && (Je = null, Rt(e, t));
  do
    try {
      Uf();
      break;
    } catch (l) {
      dc(e, l);
    }
  while (!0);
  if (Es(), Q = n, ul.current = r, re !== null) throw Error(I(261));
  return oe = null, ue = 0, ie;
}
function Uf() {
  for (; re !== null; ) pc(re);
}
function Vf() {
  for (; re !== null && !fd(); ) pc(re);
}
function pc(e) {
  var t = gc(e.alternate, e, Ne);
  e.memoizedProps = e.pendingProps, t === null ? mc(e) : re = t, Os.current = null;
}
function mc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Rf(n, t), n !== null) {
        n.flags &= 32767, re = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ie = 6, re = null;
        return;
      }
    } else if (n = Df(n, t, Ne), n !== null) {
      re = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      re = t;
      return;
    }
    re = t = e;
  } while (t !== null);
  ie === 0 && (ie = 5);
}
function Mt(e, t, n) {
  var r = H, l = Re.transition;
  try {
    Re.transition = null, H = 1, Qf(e, t, n, r);
  } finally {
    Re.transition = l, H = r;
  }
  return null;
}
function Qf(e, t, n, r) {
  do
    un();
  while (mt !== null);
  if (Q & 6) throw Error(I(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(I(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Sd(e, i), e === oe && (re = oe = null, ue = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Tr || (Tr = !0, yc(Gr, function() {
    return un(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Re.transition, Re.transition = null;
    var s = H;
    H = 1;
    var a = Q;
    Q |= 4, Os.current = null, Of(e, n), ac(n, e), uf(Ti), Yr = !!Ii, Ti = Ii = null, e.current = n, Af(n), pd(), Q = a, H = s, Re.transition = i;
  } else e.current = n;
  if (Tr && (Tr = !1, mt = e, dl = l), i = e.pendingLanes, i === 0 && (xt = null), gd(n.stateNode), Ee(e, ne()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (cl) throw cl = !1, e = Yi, Yi = null, e;
  return dl & 1 && e.tag !== 0 && un(), i = e.pendingLanes, i & 1 ? e === Xi ? Qn++ : (Qn = 0, Xi = e) : Qn = 0, jt(), null;
}
function un() {
  if (mt !== null) {
    var e = Ka(dl), t = Re.transition, n = H;
    try {
      if (Re.transition = null, H = 16 > e ? 16 : e, mt === null) var r = !1;
      else {
        if (e = mt, mt = null, dl = 0, Q & 6) throw Error(I(331));
        var l = Q;
        for (Q |= 4, z = e.current; z !== null; ) {
          var i = z, s = i.child;
          if (z.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var d = a[u];
                for (z = d; z !== null; ) {
                  var v = z;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Un(8, v, i);
                  }
                  var y = v.child;
                  if (y !== null) y.return = v, z = y;
                  else for (; z !== null; ) {
                    v = z;
                    var h = v.sibling, E = v.return;
                    if (ic(v), v === d) {
                      z = null;
                      break;
                    }
                    if (h !== null) {
                      h.return = E, z = h;
                      break;
                    }
                    z = E;
                  }
                }
              }
              var N = i.alternate;
              if (N !== null) {
                var j = N.child;
                if (j !== null) {
                  N.child = null;
                  do {
                    var F = j.sibling;
                    j.sibling = null, j = F;
                  } while (j !== null);
                }
              }
              z = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, z = s;
          else e: for (; z !== null; ) {
            if (i = z, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Un(9, i, i.return);
            }
            var c = i.sibling;
            if (c !== null) {
              c.return = i.return, z = c;
              break e;
            }
            z = i.return;
          }
        }
        var f = e.current;
        for (z = f; z !== null; ) {
          s = z;
          var p = s.child;
          if (s.subtreeFlags & 2064 && p !== null) p.return = s, z = p;
          else e: for (s = f; z !== null; ) {
            if (a = z, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  El(9, a);
              }
            } catch (L) {
              te(a, a.return, L);
            }
            if (a === s) {
              z = null;
              break e;
            }
            var S = a.sibling;
            if (S !== null) {
              S.return = a.return, z = S;
              break e;
            }
            z = a.return;
          }
        }
        if (Q = l, jt(), Xe && typeof Xe.onPostCommitFiberRoot == "function") try {
          Xe.onPostCommitFiberRoot(gl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      H = n, Re.transition = t;
    }
  }
  return !1;
}
function ra(e, t, n) {
  t = hn(n, t), t = Ku(e, t, 1), e = wt(e, t, 1), t = ye(), e !== null && (ar(e, 1, t), Ee(e, t));
}
function te(e, t, n) {
  if (e.tag === 3) ra(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      ra(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (xt === null || !xt.has(r))) {
        e = hn(n, e), e = Yu(t, e, 1), t = wt(t, e, 1), e = ye(), t !== null && (ar(t, 1, e), Ee(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Wf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ye(), e.pingedLanes |= e.suspendedLanes & n, oe === e && (ue & n) === n && (ie === 4 || ie === 3 && (ue & 130023424) === ue && 500 > ne() - $s ? Rt(e, 0) : As |= n), Ee(e, t);
}
function hc(e, t) {
  t === 0 && (e.mode & 1 ? (t = wr, wr <<= 1, !(wr & 130023424) && (wr = 4194304)) : t = 1);
  var n = ye();
  e = it(e, t), e !== null && (ar(e, t, n), Ee(e, n));
}
function Hf(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), hc(e, n);
}
function Bf(e, t) {
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
      throw Error(I(314));
  }
  r !== null && r.delete(t), hc(e, n);
}
var gc;
gc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Se.current) _e = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return _e = !1, zf(e, t, n);
    _e = !!(e.flags & 131072);
  }
  else _e = !1, X && t.flags & 1048576 && xu(t, nl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      br(e, t), e = t.pendingProps;
      var l = dn(t, me.current);
      an(t, n), l = Ps(null, t, r, e, l, n);
      var i = zs();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ke(r) ? (i = !0, el(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, js(t), l.updater = kl, t.stateNode = l, l._reactInternals = t, Ai(t, r, e, n), t = Ui(null, t, r, !0, i, n)) : (t.tag = 0, X && i && xs(t), he(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (br(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Kf(r), e = be(r, e), l) {
          case 0:
            t = bi(null, t, r, e, n);
            break e;
          case 1:
            t = Go(null, t, r, e, n);
            break e;
          case 11:
            t = Ho(null, t, r, e, n);
            break e;
          case 14:
            t = Bo(null, t, r, be(r.type, e), n);
            break e;
        }
        throw Error(I(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : be(r, l), bi(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : be(r, l), Go(e, t, r, l, n);
    case 3:
      e: {
        if (qu(t), e === null) throw Error(I(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, Nu(e, t), il(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = hn(Error(I(423)), t), t = Ko(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = hn(Error(I(424)), t), t = Ko(e, t, r, n, l);
          break e;
        } else for (je = vt(t.stateNode.containerInfo.firstChild), Ie = t, X = !0, Ve = null, n = Eu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (fn(), r === l) {
            t = st(e, t, n);
            break e;
          }
          he(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return ju(t), e === null && Ri(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = l.children, Li(r, l) ? s = null : i !== null && Li(r, i) && (t.flags |= 32), Ju(e, t), he(e, t, s, n), t.child;
    case 6:
      return e === null && Ri(t), null;
    case 13:
      return ec(e, t, n);
    case 4:
      return Is(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = pn(t, null, r, n) : he(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : be(r, l), Ho(e, t, r, l, n);
    case 7:
      return he(e, t, t.pendingProps, n), t.child;
    case 8:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, s = l.value, G(rl, r._currentValue), r._currentValue = s, i !== null) if (He(i.value, s)) {
          if (i.children === l.children && !Se.current) {
            t = st(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var a = i.dependencies;
          if (a !== null) {
            s = i.child;
            for (var u = a.firstContext; u !== null; ) {
              if (u.context === r) {
                if (i.tag === 1) {
                  u = nt(-1, n & -n), u.tag = 2;
                  var d = i.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var v = d.pending;
                    v === null ? u.next = u : (u.next = v.next, v.next = u), d.pending = u;
                  }
                }
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Fi(
                  i.return,
                  n,
                  t
                ), a.lanes |= n;
                break;
              }
              u = u.next;
            }
          } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (s = i.return, s === null) throw Error(I(341));
            s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Fi(s, n, t), s = i.sibling;
          } else s = i.child;
          if (s !== null) s.return = i;
          else for (s = i; s !== null; ) {
            if (s === t) {
              s = null;
              break;
            }
            if (i = s.sibling, i !== null) {
              i.return = s.return, s = i;
              break;
            }
            s = s.return;
          }
          i = s;
        }
        he(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, an(t, n), l = Fe(l), r = r(l), t.flags |= 1, he(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = be(r, t.pendingProps), l = be(r.type, l), Bo(e, t, r, l, n);
    case 15:
      return Xu(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : be(r, l), br(e, t), t.tag = 1, ke(r) ? (e = !0, el(t)) : e = !1, an(t, n), Gu(t, r, l), Ai(t, r, l, n), Ui(null, t, r, !0, e, n);
    case 19:
      return tc(e, t, n);
    case 22:
      return Zu(e, t, n);
  }
  throw Error(I(156, t.tag));
};
function yc(e, t) {
  return Wa(e, t);
}
function Gf(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function De(e, t, n, r) {
  return new Gf(e, t, n, r);
}
function Qs(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Kf(e) {
  if (typeof e == "function") return Qs(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === as) return 11;
    if (e === us) return 14;
  }
  return 2;
}
function St(e, t) {
  var n = e.alternate;
  return n === null ? (n = De(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Qr(e, t, n, r, l, i) {
  var s = 2;
  if (r = e, typeof e == "function") Qs(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Bt:
      return Ft(n.children, l, i, t);
    case os:
      s = 8, l |= 8;
      break;
    case ai:
      return e = De(12, n, t, l | 2), e.elementType = ai, e.lanes = i, e;
    case ui:
      return e = De(13, n, t, l), e.elementType = ui, e.lanes = i, e;
    case ci:
      return e = De(19, n, t, l), e.elementType = ci, e.lanes = i, e;
    case ja:
      return Nl(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Ca:
          s = 10;
          break e;
        case Na:
          s = 9;
          break e;
        case as:
          s = 11;
          break e;
        case us:
          s = 14;
          break e;
        case ut:
          s = 16, r = null;
          break e;
      }
      throw Error(I(130, e == null ? e : typeof e, ""));
  }
  return t = De(s, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Ft(e, t, n, r) {
  return e = De(7, e, r, t), e.lanes = n, e;
}
function Nl(e, t, n, r) {
  return e = De(22, e, r, t), e.elementType = ja, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ii(e, t, n) {
  return e = De(6, e, null, t), e.lanes = n, e;
}
function si(e, t, n) {
  return t = De(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Yf(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = bl(0), this.expirationTimes = bl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = bl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Ws(e, t, n, r, l, i, s, a, u) {
  return e = new Yf(e, t, n, a, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = De(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, js(i), e;
}
function Xf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ht, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function vc(e) {
  if (!e) return Et;
  e = e._reactInternals;
  e: {
    if (Qt(e) !== e || e.tag !== 1) throw Error(I(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(I(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ke(n)) return vu(e, n, t);
  }
  return t;
}
function wc(e, t, n, r, l, i, s, a, u) {
  return e = Ws(n, r, !0, e, l, i, s, a, u), e.context = vc(null), n = e.current, r = ye(), l = _t(n), i = nt(r, l), i.callback = t ?? null, wt(n, i, l), e.current.lanes = l, ar(e, l, r), Ee(e, r), e;
}
function jl(e, t, n, r) {
  var l = t.current, i = ye(), s = _t(l);
  return n = vc(n), t.context === null ? t.context = n : t.pendingContext = n, t = nt(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = wt(l, t, s), e !== null && (We(e, l, s, i), Or(e, l, s)), s;
}
function pl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function la(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Hs(e, t) {
  la(e, t), (e = e.alternate) && la(e, t);
}
function Zf() {
  return null;
}
var xc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Bs(e) {
  this._internalRoot = e;
}
Il.prototype.render = Bs.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(I(409));
  jl(e, t, null, null);
};
Il.prototype.unmount = Bs.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ut(function() {
      jl(null, e, null, null);
    }), t[lt] = null;
  }
};
function Il(e) {
  this._internalRoot = e;
}
Il.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Za();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < dt.length && t !== 0 && t < dt[n].priority; n++) ;
    dt.splice(n, 0, e), n === 0 && qa(e);
  }
};
function Gs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Tl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ia() {
}
function Jf(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var d = pl(s);
        i.call(d);
      };
    }
    var s = wc(t, r, e, 0, null, !1, !1, "", ia);
    return e._reactRootContainer = s, e[lt] = s.current, Jn(e.nodeType === 8 ? e.parentNode : e), Ut(), s;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var d = pl(u);
      a.call(d);
    };
  }
  var u = Ws(e, 0, !1, null, null, !1, !1, "", ia);
  return e._reactRootContainer = u, e[lt] = u.current, Jn(e.nodeType === 8 ? e.parentNode : e), Ut(function() {
    jl(t, u, n, r);
  }), u;
}
function Ll(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof l == "function") {
      var a = l;
      l = function() {
        var u = pl(s);
        a.call(u);
      };
    }
    jl(t, s, e, l);
  } else s = Jf(n, t, e, l, r);
  return pl(s);
}
Ya = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = zn(t.pendingLanes);
        n !== 0 && (fs(t, n | 1), Ee(t, ne()), !(Q & 6) && (gn = ne() + 500, jt()));
      }
      break;
    case 13:
      Ut(function() {
        var r = it(e, 1);
        if (r !== null) {
          var l = ye();
          We(r, e, 1, l);
        }
      }), Hs(e, 1);
  }
};
ps = function(e) {
  if (e.tag === 13) {
    var t = it(e, 134217728);
    if (t !== null) {
      var n = ye();
      We(t, e, 134217728, n);
    }
    Hs(e, 134217728);
  }
};
Xa = function(e) {
  if (e.tag === 13) {
    var t = _t(e), n = it(e, t);
    if (n !== null) {
      var r = ye();
      We(n, e, t, r);
    }
    Hs(e, t);
  }
};
Za = function() {
  return H;
};
Ja = function(e, t) {
  var n = H;
  try {
    return H = e, t();
  } finally {
    H = n;
  }
};
xi = function(e, t, n) {
  switch (t) {
    case "input":
      if (pi(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = xl(r);
            if (!l) throw Error(I(90));
            Ta(r), pi(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ma(e, n);
      break;
    case "select":
      t = n.value, t != null && rn(e, !!n.multiple, t, !1);
  }
};
Aa = bs;
$a = Ut;
var qf = { usingClientEntryPoint: !1, Events: [cr, Xt, xl, Fa, Oa, bs] }, Ln = { findFiberByHostInstance: Pt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ep = { bundleType: Ln.bundleType, version: Ln.version, rendererPackageName: Ln.rendererPackageName, rendererConfig: Ln.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ot.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Va(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Ln.findFiberByHostInstance || Zf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Lr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Lr.isDisabled && Lr.supportsFiber) try {
    gl = Lr.inject(ep), Xe = Lr;
  } catch {
  }
}
Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qf;
Le.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Gs(t)) throw Error(I(200));
  return Xf(e, t, null, n);
};
Le.createRoot = function(e, t) {
  if (!Gs(e)) throw Error(I(299));
  var n = !1, r = "", l = xc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Ws(e, 1, !1, null, null, n, !1, r, l), e[lt] = t.current, Jn(e.nodeType === 8 ? e.parentNode : e), new Bs(t);
};
Le.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(I(188)) : (e = Object.keys(e).join(","), Error(I(268, e)));
  return e = Va(t), e = e === null ? null : e.stateNode, e;
};
Le.flushSync = function(e) {
  return Ut(e);
};
Le.hydrate = function(e, t, n) {
  if (!Tl(t)) throw Error(I(200));
  return Ll(null, e, t, !0, n);
};
Le.hydrateRoot = function(e, t, n) {
  if (!Gs(e)) throw Error(I(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", s = xc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = wc(t, null, e, 1, n ?? null, l, !1, i, s), e[lt] = t.current, Jn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Il(t);
};
Le.render = function(e, t, n) {
  if (!Tl(t)) throw Error(I(200));
  return Ll(null, e, t, !1, n);
};
Le.unmountComponentAtNode = function(e) {
  if (!Tl(e)) throw Error(I(40));
  return e._reactRootContainer ? (Ut(function() {
    Ll(null, null, e, !1, function() {
      e._reactRootContainer = null, e[lt] = null;
    });
  }), !0) : !1;
};
Le.unstable_batchedUpdates = bs;
Le.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Tl(n)) throw Error(I(200));
  if (e == null || e._reactInternals === void 0) throw Error(I(38));
  return Ll(e, t, n, !1, r);
};
Le.version = "18.3.1-next-f1338f8080-20240426";
function _c() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_c);
    } catch (e) {
      console.error(e);
    }
}
_c(), _a.exports = Le;
var _n = _a.exports, Sc, sa = _n;
Sc = sa.createRoot, sa.hydrateRoot;
window.api = V;
const tp = async () => {
  const e = await V.fetchApi("/meld/home-dir");
  if (!e.ok)
    throw new Error("Failed to fetch home directory");
  return (await e.json()).home;
}, qi = async (e = 0, t = 30, n = "") => {
  const r = await V.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}`
  );
  if (!r.ok)
    throw new Error(`Failed to fetch images: ${r.statusText}`);
  return await r.json();
}, np = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await V.fetchApi(n);
  return r.ok ? await r.json() : [];
}, rp = async () => {
  const e = await V.fetchApi("/meld/search-suggestions");
  return e.ok ? await e.json() : [];
}, kc = async () => {
  const e = await V.fetchApi("/meld/settings");
  return e.ok ? await e.json() : {
    dev_mode: !1,
    "gallery.show_parent_image": !0,
    "gallery.hide_parent_images": !0,
    "sidebar.show_filename": !0,
    "sidebar.show_dimensions": !0,
    "sidebar.show_model_name": !0,
    "sidebar.show_positive_prompt": !0,
    "sidebar.show_negative_prompt": !1,
    "sidebar.show_tags": !0,
    "search.quick_suggestions": !0,
    "search.input_suggest": !0,
    "search.realtime_search": !0,
    "viewer.loop": !0,
    "fullscreen.show_icons": !0,
    "fullscreen.loop": !0,
    "fullscreen.show_details_by_default": !0,
    "fullscreen.details.show_filename": !0,
    "fullscreen.details.show_dimensions": !0,
    "fullscreen.details.show_created_at": !0,
    "fullscreen.details.show_tags": !0,
    "fullscreen.details.show_model_name": !0,
    "fullscreen.details.show_positive_prompt": !0,
    "fullscreen.details.show_negative_prompt": !0,
    "fullscreen.details.max_positive_prompt_lines": 7,
    "fullscreen.details.max_negative_prompt_lines": 7,
    "viewer.show_details_by_default": !0,
    "viewer.details.show_filename": !0,
    "viewer.details.show_dimensions": !0,
    "viewer.details.show_created_at": !0,
    "viewer.details.show_tags": !0,
    "viewer.details.show_model_name": !0,
    "viewer.details.show_positive_prompt": !0,
    "viewer.details.show_negative_prompt": !0,
    "viewer.details.max_positive_prompt_lines": 7,
    "viewer.details.max_negative_prompt_lines": 7,
    "gallery.page_size": 30,
    "viewer.thumbnail_window_size": 15,
    "viewer.show_thumbnails": !0,
    "viewer.show_icons": !0,
    "gallery.matching_strategy": "filename_phash",
    "gallery.lineage_max_depth": 5
  };
}, lp = async (e, t) => {
  if (!(await V.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  })).ok)
    throw new Error("Failed to save setting");
}, ip = async (e, t) => {
  if (!(await V.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  })).ok)
    throw new Error("Failed to link parent");
}, sp = async (e, t = 12) => {
  const n = await V.fetchApi(
    `/meld/suggest-parents?id=${e}&threshold=${t}`
  );
  return n.ok ? await n.json() : [];
}, Ec = async (e) => {
  const t = await V.fetchApi(`/meld/lineage?id=${e}`);
  return t.ok ? await t.json() : [];
}, op = async (e) => {
  const t = new FormData();
  t.append("image", e), t.append("overwrite", "true");
  const n = await V.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, oa = async (e, t = !0) => {
  const n = await V.fetchApi("/meld/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      delete_files: t
    })
  });
  if (!n.ok) {
    const r = await n.json();
    throw new Error(r.error || "Failed to delete images");
  }
}, Cc = async (e) => {
  const t = await V.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok)
    throw new Error("Failed to register image");
  return await t.json();
}, ap = async (e, t, n = !1, r) => {
  const l = await V.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  return l.ok ? await l.json() : { folders: [], images: [], image_count: 0 };
}, up = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await V.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  return l.ok ? await l.json() : {};
}, cp = async (e, t, n) => {
  const r = await V.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  return r.ok ? (await r.json()).count : 0;
}, dp = async (e) => {
  const t = await V.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to start scan");
  }
}, fp = async () => {
  if (!(await V.fetchApi("/meld/scan/cancel", {
    method: "POST"
  })).ok)
    throw new Error("Failed to cancel scan");
}, pp = async () => {
  const e = await V.fetchApi("/meld/favorites");
  return e.ok ? await e.json() : [];
}, mp = async (e, t) => {
  if (!(await V.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  })).ok)
    throw new Error("Failed to save favorite");
}, aa = async (e) => {
  if (!(await V.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  })).ok)
    throw new Error("Failed to delete favorite");
}, hp = async (e, t) => {
  if (!(await V.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  })).ok)
    throw new Error("Failed to update favorite");
}, Ks = async () => {
  const e = await V.fetchApi("/meld/tags");
  return e.ok ? await e.json() : [];
}, gp = async (e) => {
  const t = await V.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  if (!t.ok)
    throw new Error("Failed to create tag");
  return await t.json();
}, yp = async (e) => {
  if (!(await V.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  })).ok)
    throw new Error("Failed to delete tag");
}, vp = async (e, t) => {
  const n = await V.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  if (!n.ok) {
    const r = await n.json();
    throw new Error(r.error || "Failed to rename tag");
  }
}, wp = async (e, t) => {
  if (!(await V.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  })).ok)
    throw new Error("Failed to update image tags");
}, xp = async (e, t, n) => {
  if (!(await V.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  })).ok)
    throw new Error("Failed to bulk update image tags");
}, _p = async (e) => {
  const t = await V.fetchApi(`/meld/image/${e}/workflow`);
  if (!t.ok)
    throw new Error("Failed to fetch workflow");
  return await t.json();
}, Sp = async (e) => {
  const t = await V.fetchApi(`/meld/image/${e}/snapshot_data`);
  if (!t.ok)
    throw new Error("Failed to fetch snapshot data");
  return await t.json();
};
var Nc = { exports: {} }, Ml = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kp = k, Ep = Symbol.for("react.element"), Cp = Symbol.for("react.fragment"), Np = Object.prototype.hasOwnProperty, jp = kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ip = { key: !0, ref: !0, __self: !0, __source: !0 };
function jc(e, t, n) {
  var r, l = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) Np.call(t, r) && !Ip.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Ep, type: e, key: i, ref: s, props: l, _owner: jp.current };
}
Ml.Fragment = Cp;
Ml.jsx = jc;
Ml.jsxs = jc;
Nc.exports = Ml;
var o = Nc.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Tp = {
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
const Lp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), W = (e, t) => {
  const n = k.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: s,
      className: a = "",
      children: u,
      ...d
    }, v) => k.createElement(
      "svg",
      {
        ref: v,
        ...Tp,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: s ? Number(i) * 24 / Number(l) : i,
        className: ["lucide", `lucide-${Lp(e)}`, a].join(" "),
        ...d
      },
      [
        ...t.map(([y, h]) => k.createElement(y, h)),
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
const Mp = W("AlertTriangle", [
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
const Pp = W("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ua = W("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zp = W("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dp = W("Box", [
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
const Rp = W("Calendar", [
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
const Fp = W("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ic = W("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tc = W("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lc = W("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Op = W("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ap = W("Download", [
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
const $p = W("Folder", [
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
const bp = W("Info", [
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
const Up = W("LayoutGrid", [
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
const Vp = W("Maximize", [
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
const Qp = W("Minimize", [
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
const Wp = W("MoreVertical", [
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
const Mc = W("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hp = W("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bp = W("PlusCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ys = W("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ml = W("RefreshCw", [
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
const yn = W("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gp = W("Settings", [
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
const Kp = W("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ca = W("Star", [
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
const Sn = W("Tag", [
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
const Pl = W("Trash2", [
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
const Yp = W("Type", [
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
const Xp = W("Upload", [
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
const Ce = W("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
let hl = !1;
const Zp = (e) => {
  hl = e, hl && console.log("[Meld] Logger initialized in DEV mode.");
}, Jp = (...e) => {
  hl && console.log("[Meld]", ...e);
}, qp = (...e) => {
  hl && console.warn("[Meld]", ...e);
}, em = (...e) => {
  console.error("[Meld]", ...e);
}, ge = {
  log: Jp,
  warn: qp,
  error: em,
  init: Zp
}, tm = {
  images: [],
  selectedIds: /* @__PURE__ */ new Set(),
  isLoading: !1,
  error: null,
  lastUpdated: Date.now(),
  viewMode: "list",
  viewerImageId: null,
  viewerMode: "gallery",
  lineageImages: [],
  activeModal: { type: "none" },
  lastSelectedId: null,
  scanStatus: {
    isRunning: !1,
    isFinished: !1,
    shouldCancel: !1,
    progress: { current: 0, total: 0, phase: "" },
    newCount: 0,
    totalCount: 0
  },
  settings: {
    dev_mode: !1,
    "gallery.show_parent_image": !0,
    "gallery.hide_parent_images": !0,
    "sidebar.show_filename": !0,
    "sidebar.show_dimensions": !0,
    "sidebar.show_model_name": !0,
    "sidebar.show_positive_prompt": !0,
    "sidebar.show_negative_prompt": !1,
    "sidebar.show_tags": !0,
    "search.quick_suggestions": !0,
    "search.input_suggest": !0,
    "search.realtime_search": !0,
    "viewer.loop": !0,
    "fullscreen.show_icons": !0,
    "fullscreen.loop": !0,
    "fullscreen.show_details_by_default": !0,
    "fullscreen.details.show_filename": !0,
    "fullscreen.details.show_dimensions": !0,
    "fullscreen.details.show_created_at": !0,
    "fullscreen.details.show_tags": !0,
    "fullscreen.details.show_model_name": !0,
    "fullscreen.details.show_positive_prompt": !0,
    "fullscreen.details.show_negative_prompt": !0,
    "fullscreen.details.max_positive_prompt_lines": 7,
    "fullscreen.details.max_negative_prompt_lines": 7,
    "viewer.show_details_by_default": !0,
    "viewer.details.show_filename": !0,
    "viewer.details.show_dimensions": !0,
    "viewer.details.show_created_at": !0,
    "viewer.details.show_tags": !0,
    "viewer.details.show_model_name": !0,
    "viewer.details.show_positive_prompt": !0,
    "viewer.details.show_negative_prompt": !0,
    "viewer.details.max_positive_prompt_lines": 7,
    "viewer.details.max_negative_prompt_lines": 7,
    "gallery.page_size": 30,
    "viewer.thumbnail_window_size": 15,
    "viewer.show_thumbnails": !0,
    "viewer.show_icons": !0,
    "gallery.matching_strategy": "filename_phash",
    "gallery.lineage_max_depth": 5
  },
  pagination: {
    total: 0,
    offset: 0,
    limit: 30,
    hasMore: !1
  },
  searchQuery: "",
  favorites: []
};
function nm(e, t) {
  var n, r;
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "SET_IMAGES": {
      const { images: l, total: i, offset: s } = t.payload;
      let a = e.viewerImageId;
      return e.viewerMode === "gallery" && a !== null && !l.some((u) => u.id === a) && (a = null), {
        ...e,
        images: l,
        isLoading: !1,
        error: null,
        viewerImageId: a,
        pagination: {
          total: i,
          offset: s,
          limit: e.pagination.limit,
          hasMore: s + l.length < i
        }
      };
    }
    case "APPEND_IMAGES": {
      const { images: l, total: i, offset: s } = t.payload, a = [...e.images, ...l], u = Array.from(
        new Map(a.map((d) => [d.id, d])).values()
      );
      return {
        ...e,
        images: u,
        isLoading: !1,
        error: null,
        pagination: {
          ...e.pagination,
          total: i,
          offset: s,
          hasMore: s + l.length < i
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
      let i = e.lastSelectedId;
      return l.has(t.payload) ? (l.delete(t.payload), i === t.payload && (i = null)) : (l.add(t.payload), i = t.payload), {
        ...e,
        selectedIds: l,
        lastSelectedId: i
      };
    }
    case "SELECT_RANGE": {
      if (e.lastSelectedId === null) {
        const d = new Set(e.selectedIds);
        return d.add(t.payload), {
          ...e,
          selectedIds: d,
          lastSelectedId: t.payload
        };
      }
      const l = e.images.findIndex(
        (d) => d.id === e.lastSelectedId
      ), i = e.images.findIndex(
        (d) => d.id === t.payload
      );
      if (l === -1 || i === -1) return e;
      const [s, a] = [
        Math.min(l, i),
        Math.max(l, i)
      ], u = new Set(e.selectedIds);
      for (let d = s; d <= a; d++)
        u.add(e.images[d].id);
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
    case "SET_VIEW_MODE":
      return {
        ...e,
        viewMode: t.payload
      };
    case "REFRESH":
      return {
        ...e,
        lastUpdated: Date.now()
      };
    case "OPEN_VIEWER": {
      const l = t.payload, i = typeof l == "number" ? l : l.id, s = typeof l == "number" ? "gallery" : l.mode, a = e.viewerMode === "lineage" && s === "lineage" && e.lineageImages.some((u) => u.id === i);
      return {
        ...e,
        viewerImageId: i,
        viewerMode: s,
        lineageImages: a ? e.lineageImages : []
      };
    }
    case "CLOSE_VIEWER":
      return {
        ...e,
        viewerImageId: null,
        lineageImages: []
      };
    case "NEXT_IMAGE": {
      const i = ((n = t.payload) == null ? void 0 : n.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], s = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (d) => d.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && d.has_children)
      );
      if (e.viewerImageId === null || s.length === 0)
        return e;
      const a = s.findIndex(
        (d) => d.id === e.viewerImageId
      );
      if (a === -1 || a === s.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || a === s.length - 1 && !i)
        return e;
      const u = (a + 1) % s.length;
      return {
        ...e,
        viewerImageId: s[u].id
      };
    }
    case "PREVIOUS_IMAGE": {
      const i = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], s = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (d) => d.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && d.has_children)
      );
      if (e.viewerImageId === null || s.length === 0)
        return e;
      const a = s.findIndex(
        (d) => d.id === e.viewerImageId
      );
      if (a === -1 || a === 0 && e.viewerMode === "gallery" && e.pagination.hasMore || a === 0 && !i)
        return e;
      const u = (a - 1 + s.length) % s.length;
      return {
        ...e,
        viewerImageId: s[u].id
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
      }, i = { ...e.pagination };
      return t.payload["gallery.page_size"] !== void 0 && (i.limit = t.payload["gallery.page_size"]), {
        ...e,
        settings: l,
        pagination: i
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
const Pc = k.createContext(void 0), rm = ({
  children: e
}) => {
  const [t, n] = k.useReducer(nm, tm), r = k.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    try {
      const u = await qi(
        0,
        t.pagination.limit,
        t.searchQuery
      );
      n({ type: "SET_IMAGES", payload: u });
    } catch (u) {
      n({
        type: "SET_ERROR",
        payload: u instanceof Error ? u.message : String(u)
      });
    }
  }, [t.pagination.limit, t.searchQuery]), l = k.useCallback(async () => {
    if (!(t.isLoading || !t.pagination.hasMore)) {
      n({ type: "SET_LOADING", payload: !0 });
      try {
        const u = t.images.length, d = await qi(
          u,
          t.pagination.limit,
          t.searchQuery
        );
        n({ type: "APPEND_IMAGES", payload: d });
      } catch (u) {
        n({
          type: "SET_ERROR",
          payload: u instanceof Error ? u.message : String(u)
        });
      }
    }
  }, [
    t.isLoading,
    t.pagination.hasMore,
    t.pagination.limit,
    t.images.length,
    t.searchQuery
  ]), i = k.useCallback(async () => {
    try {
      const u = await pp();
      n({ type: "SET_FAVORITES", payload: u });
    } catch (u) {
      ge.error("Failed to load favorites", u);
    }
  }, []), s = k.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const u = Array.from(t.selectedIds), v = t.images.filter(
      (y) => t.selectedIds.has(y.id)
    ).some(
      (y) => y.parent_id || y.has_children
    );
    n({
      type: "OPEN_MODAL",
      payload: { type: "delete_confirm", imageIds: u, hasLineage: v }
    });
  }, [t.selectedIds, t.images]), a = k.useCallback(
    async (u, d) => {
      try {
        await lp(u, d), n({ type: "SET_SETTINGS", payload: { [u]: d } });
      } catch (v) {
        n({
          type: "SET_ERROR",
          payload: v instanceof Error ? v.message : String(v)
        });
      }
    },
    []
  );
  return k.useEffect(() => {
    (async () => {
      try {
        const d = await kc();
        n({ type: "SET_SETTINGS", payload: d });
      } catch (d) {
        ge.error("Failed to load settings", d);
      }
    })();
  }, []), k.useEffect(() => {
    i();
  }, [i]), k.useEffect(() => {
    const u = () => {
      r();
    }, d = (y) => {
      const h = y.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: h }
      });
    }, v = (y) => {
      const h = y.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !1,
          isFinished: !0,
          shouldCancel: !1,
          newCount: h.new_count || 0,
          totalCount: h.total_count || 0,
          progress: {
            current: h.total_count || t.scanStatus.progress.total,
            total: h.total_count || t.scanStatus.progress.total,
            phase: "completed"
          }
        }
      }), r();
    };
    return window.addEventListener("meld-refresh", u), window.addEventListener("meld-scan-progress", d), window.addEventListener("meld-scan-finished", v), () => {
      window.removeEventListener("meld-refresh", u), window.removeEventListener("meld-scan-progress", d), window.removeEventListener("meld-scan-finished", v);
    };
  }, [r, t.scanStatus.progress.total]), k.useEffect(() => {
    r();
  }, [r]), /* @__PURE__ */ o.jsx(
    Pc.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: r,
        loadMoreImages: l,
        refreshFavorites: i,
        deleteSelected: s,
        updateSetting: a
      },
      children: e
    }
  );
}, Be = () => {
  const e = k.useContext(Pc);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, lm = ({
  children: e,
  height: t = 150,
  rootMargin: n = "400px"
}) => {
  const [r, l] = k.useState(!1), i = k.useRef(null);
  return k.useEffect(() => {
    const s = new IntersectionObserver(
      ([u]) => {
        l(u.isIntersecting);
      },
      { rootMargin: n }
    ), a = i.current;
    return a && s.observe(a), () => {
      a && s.unobserve(a);
    };
  }, [n]), /* @__PURE__ */ o.jsx(
    "div",
    {
      ref: i,
      style: {
        minHeight: r ? "auto" : `${t}px`,
        width: "100%",
        containIntrinsicSize: `auto ${t}px`,
        contentVisibility: "auto"
      },
      children: r ? e : null
    }
  );
}, im = () => {
  const { state: e, dispatch: t, deleteSelected: n } = Be(), r = e.selectedIds.size;
  if (r === 0) return null;
  const l = () => {
    const i = e.images.filter(
      (a) => e.selectedIds.has(a.id)
    ), s = /* @__PURE__ */ new Set();
    for (const a of i)
      if (a.tags)
        for (const u of a.tags)
          s.add(u);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(s)
      }
    });
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "meld-bulk-bar", children: [
    /* @__PURE__ */ o.jsxs("span", { className: "meld-bulk-bar__info", children: [
      r,
      " items selected"
    ] }),
    /* @__PURE__ */ o.jsxs(
      "button",
      {
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--edit",
        onClick: l,
        children: [
          /* @__PURE__ */ o.jsx(
            Sn,
            {
              size: 16,
              style: { marginRight: "8px", verticalAlign: "middle" }
            }
          ),
          "Edit Tags"
        ]
      }
    ),
    /* @__PURE__ */ o.jsxs(
      "button",
      {
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--delete",
        onClick: n,
        children: [
          /* @__PURE__ */ o.jsx(
            Pl,
            {
              size: 16,
              style: { marginRight: "8px", verticalAlign: "middle" }
            }
          ),
          "Delete"
        ]
      }
    ),
    /* @__PURE__ */ o.jsxs(
      "button",
      {
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--cancel",
        onClick: () => t({ type: "CLEAR_SELECTION" }),
        children: [
          /* @__PURE__ */ o.jsx(Ce, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
          "Cancel"
        ]
      }
    )
  ] });
}, sm = ({
  imageIds: e,
  hasLineage: t
}) => {
  const { dispatch: n, refreshImages: r } = Be(), l = () => {
    n({ type: "CLOSE_MODAL" });
  }, i = async () => {
    try {
      n({ type: "SET_LOADING", payload: !0 }), await oa(e, !0), n({ type: "CLEAR_SELECTION" }), n({ type: "CLOSE_MODAL" }), await r();
    } catch (a) {
      n({
        type: "SET_ERROR",
        payload: a instanceof Error ? a.message : String(a)
      }), n({ type: "SET_LOADING", payload: !1 });
    }
  }, s = async () => {
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const a = new Set(e);
      for (const u of e) {
        const d = await Ec(u);
        for (const v of d)
          a.add(v.id);
      }
      await oa(Array.from(a), !0), n({ type: "CLEAR_SELECTION" }), n({ type: "CLOSE_MODAL" }), await r();
    } catch (a) {
      n({
        type: "SET_ERROR",
        payload: a instanceof Error ? a.message : String(a)
      }), n({ type: "SET_LOADING", payload: !1 });
    }
  };
  return _n.createPortal(
    /* @__PURE__ */ o.jsx("div", { className: "meld-modal-overlay", onClick: l, children: /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: "meld-modal-content meld-modal-content--small",
        onClick: (a) => a.stopPropagation(),
        children: [
          /* @__PURE__ */ o.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ o.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
              /* @__PURE__ */ o.jsx(Pl, { size: 20, color: "var(--meld-danger-color)" }),
              "Confirm Deletion"
            ] }),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: l,
                children: /* @__PURE__ */ o.jsx(Ce, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ o.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ o.jsxs(
            "div",
            {
              style: {
                padding: "10px 0",
                display: "flex",
                flexDirection: "column",
                gap: "15px"
              },
              children: [
                /* @__PURE__ */ o.jsxs("p", { children: [
                  "Are you sure you want to delete ",
                  /* @__PURE__ */ o.jsx("strong", { children: e.length }),
                  " ",
                  "selected items?"
                ] }),
                /* @__PURE__ */ o.jsxs(
                  "div",
                  {
                    style: {
                      padding: "12px",
                      backgroundColor: "var(--comfy-input-bg, rgba(255, 0, 0, 0.1))",
                      border: "1px solid var(--meld-danger-color)",
                      borderRadius: "4px",
                      display: "flex",
                      gap: "10px"
                    },
                    children: [
                      /* @__PURE__ */ o.jsx(
                        Mp,
                        {
                          size: 20,
                          style: { color: "var(--meld-danger-color)", flexShrink: 0 }
                        }
                      ),
                      /* @__PURE__ */ o.jsxs("div", { style: { fontSize: "13px" }, children: [
                        /* @__PURE__ */ o.jsx("strong", { children: "WARNING:" }),
                        " Physical files will be permanently deleted. This operation cannot be undone."
                      ] })
                    ]
                  }
                ),
                t && /* @__PURE__ */ o.jsxs(
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
                      /* @__PURE__ */ o.jsx("strong", { children: "Source" }),
                      " or descendants. You can choose to delete just the selected items or all related items in their lineage."
                    ]
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ o.jsxs("div", { className: "meld-modal-footer", children: [
            /* @__PURE__ */ o.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-secondary",
                onClick: l,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ o.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-danger",
                  onClick: i,
                  children: "Delete Selected"
                }
              ),
              t && /* @__PURE__ */ o.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-danger",
                  title: "Delete all images in the lineage (Source + all descendants)",
                  onClick: s,
                  children: "Delete All Related"
                }
              )
            ] })
          ] })
        ]
      }
    ) }),
    document.body
  );
}, om = ({ image: e }) => {
  const { state: t, dispatch: n } = Be(), r = t.selectedIds.has(e.id), [l, i] = k.useState(null), [s, a] = k.useState(!1), [u, d] = k.useState(null), [v, y] = k.useState(!1), h = k.useRef(null), E = async (g, R, C = !1) => {
    try {
      await navigator.clipboard.writeText(g), C ? (y(!0), setTimeout(() => y(!1), 2e3)) : (d(R), setTimeout(() => d(null), 2e3));
    } catch (M) {
      console.error("Failed to copy text: ", M);
    }
  };
  k.useEffect(() => {
    const g = (R) => {
      h.current && !h.current.contains(R.target) && a(!1);
    };
    return s && document.addEventListener("mousedown", g), () => {
      document.removeEventListener("mousedown", g);
    };
  }, [s]);
  const N = (g) => {
    const R = t.settings["gallery.lineage_max_depth"];
    if (R === 0) return [];
    if (g.ancestors && g.ancestors.length > 0)
      return g.ancestors.slice(0, R).map((x) => ({
        id: x.id,
        imgSrc: `/api/view?filename=${encodeURIComponent(x.filename)}&type=${x.type || "output"}${x.subfolder ? `&subfolder=${encodeURIComponent(x.subfolder)}` : ""}`
      }));
    const C = g.parent_id;
    if (!C || !g.parent_filename) return [];
    const M = t.images.find((x) => x.id === C);
    let m = null;
    if (M ? m = `/api/view?filename=${encodeURIComponent(M.filename)}&type=${M.type || "output"}${M.subfolder ? `&subfolder=${encodeURIComponent(M.subfolder)}` : ""}` : m = `/api/view?filename=${encodeURIComponent(g.parent_filename)}&type=${g.parent_type || "output"}${g.parent_subfolder ? `&subfolder=${encodeURIComponent(g.parent_subfolder)}` : ""}`, !m) return [];
    const w = {
      id: C || null,
      imgSrc: m
    };
    if (M && R > 1) {
      const x = N(M);
      return [w, ...x].slice(0, R);
    }
    return [w];
  }, j = N(e), F = e.subfolder ? `${e.subfolder}/${e.filename}` : e.filename, c = `/api/view?filename=${encodeURIComponent(e.filename)}&type=${e.type || "output"}${e.subfolder ? `&subfolder=${encodeURIComponent(e.subfolder)}` : ""}`, f = (g) => {
    g.shiftKey ? (g.preventDefault(), g.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : g.ctrlKey || g.metaKey || t.selectedIds.size > 0 ? (g.preventDefault(), g.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
  }, p = (g) => {
    g.shiftKey ? (g.preventDefault(), g.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : n({ type: "TOGGLE_SELECT", payload: e.id });
  }, S = (g) => {
    (g.shiftKey || g.ctrlKey || g.metaKey || t.selectedIds.size > 0) && g.preventDefault();
  }, L = (g) => {
    (g.key === "Enter" || g.key === " ") && (g.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
  }, _ = async () => {
    try {
      const g = await _p(e.id);
      if (!g.workflow) {
        alert("No workflow information is saved for this image.");
        return;
      }
      await window.app.loadGraphData(
        g.workflow
      ), console.log("Workflow restored successfully from Meld");
    } catch (g) {
      console.error("Error restoring workflow:", g), alert("Failed to restore workflow.");
    }
  }, T = async () => {
    try {
      const g = await Sp(e.id), R = "MeldUnifiedLoader", C = window.app, m = window.LiteGraph.createNode(R);
      if (!m) {
        console.error(`Node type ${R} not found.`), alert(
          `Node type ${R} not found. Please make sure the Meld Unified Loader node is installed.`
        );
        return;
      }
      const w = {
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
      if (m.widgets) {
        for (const [U, P] of Object.entries(w)) {
          const D = g[U];
          if (D != null) {
            const A = m.widgets.find(
              (B) => B.name === P
            );
            A && (A.value = D);
          }
        }
        const O = m.widgets.find(
          (U) => U.name === "control_after_generate"
        );
        O && (O.value = "fixed");
      }
      const x = C.canvas.ds.offset, $ = C.canvas.ds.scale;
      m.pos = [(-x[0] + 400) / $, (-x[1] + 300) / $], C.graph.add(m), C.canvas.selectNode(m), C.canvas.centerOnNode(m);
    } catch (g) {
      console.error("Error adding Unified Loader:", g), alert("Failed to load settings.");
    }
  };
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: `meld-image-card ${r ? "meld-image-card--selected" : ""}`,
      onClick: p,
      onMouseDown: S,
      onKeyDown: L,
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ o.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ o.jsx(
          "img",
          {
            src: c,
            className: "meld-image-card__thumbnail",
            alt: e.filename,
            loading: "lazy",
            onMouseDown: S,
            onClick: (g) => {
              g.stopPropagation(), f(g);
            }
          }
        ) }),
        /* @__PURE__ */ o.jsxs("div", { className: "meld-image-card__details", children: [
          (t.settings["sidebar.show_filename"] || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ o.jsxs("div", { className: "meld-image-card__filename", children: [
            t.settings["sidebar.show_filename"] && F,
            t.settings["sidebar.show_filename"] && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
            !t.settings["sidebar.show_filename"] && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
          ] }),
          t.settings["gallery.show_parent_image"] && j.length > 0 && /* @__PURE__ */ o.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
            /* @__PURE__ */ o.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
            /* @__PURE__ */ o.jsx("div", { className: "meld-lineage-thumbs", children: j.map(
              (g, R) => g.imgSrc && /* @__PURE__ */ o.jsx(
                "img",
                {
                  src: g.imgSrc,
                  className: "meld-lineage-badge__parent-thumb",
                  loading: "lazy",
                  onClick: (C) => {
                    C.stopPropagation(), n({
                      type: "OPEN_VIEWER",
                      payload: { id: g.id || e.id, mode: "lineage" }
                    });
                  },
                  title: R === 0 ? "Source" : R === 1 ? "Grand-Source" : `Ancestor (S${R + 1})`,
                  alt: "source thumb"
                },
                g.id || R
              )
            ) })
          ] }),
          t.settings["sidebar.show_model_name"] && /* @__PURE__ */ o.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (g) => {
                g.stopPropagation(), i({
                  title: "Model",
                  text: e.model_name || "-"
                });
              },
              children: [
                /* @__PURE__ */ o.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: (g) => {
                      g.stopPropagation(), E(e.model_name || "-", "Model");
                    },
                    children: u === "Model" ? "Copied!" : "Model"
                  }
                ),
                /* @__PURE__ */ o.jsx("div", { className: "meld-image-card__meta-content", children: e.model_name || "-" })
              ]
            }
          ),
          t.settings["sidebar.show_positive_prompt"] && /* @__PURE__ */ o.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (g) => {
                g.stopPropagation(), i({
                  title: "Positive Prompt",
                  text: e.positive_prompt || e.positive || "-"
                });
              },
              children: [
                /* @__PURE__ */ o.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: (g) => {
                      g.stopPropagation(), E(
                        e.positive_prompt || e.positive || "-",
                        "Positive"
                      );
                    },
                    children: u === "Positive" ? "Copied!" : "Positive"
                  }
                ),
                /* @__PURE__ */ o.jsx("div", { className: "meld-image-card__meta-content", children: e.positive_prompt || e.positive || "-" })
              ]
            }
          ),
          t.settings["sidebar.show_negative_prompt"] && /* @__PURE__ */ o.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (g) => {
                g.stopPropagation(), i({
                  title: "Negative Prompt",
                  text: e.negative_prompt || e.negative || "-"
                });
              },
              children: [
                /* @__PURE__ */ o.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: (g) => {
                      g.stopPropagation(), E(
                        e.negative_prompt || e.negative || "-",
                        "Negative"
                      );
                    },
                    children: u === "Negative" ? "Copied!" : "Negative"
                  }
                ),
                /* @__PURE__ */ o.jsx("div", { className: "meld-image-card__meta-content", children: e.negative_prompt || e.negative || "-" })
              ]
            }
          ),
          t.settings["sidebar.show_tags"] && /* @__PURE__ */ o.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (g) => {
                g.stopPropagation(), n({
                  type: "OPEN_MODAL",
                  payload: {
                    type: "tag_edit",
                    imageIds: [e.id],
                    tags: e.tags || []
                  }
                });
              },
              children: [
                /* @__PURE__ */ o.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                /* @__PURE__ */ o.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((g, R) => /* @__PURE__ */ o.jsx("span", { className: "meld-image-card__tag", children: g }, `${g}-${R}`)) : /* @__PURE__ */ o.jsx(
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
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "meld-image-card__menu-container", ref: h, children: [
          /* @__PURE__ */ o.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (g) => {
                g.stopPropagation(), a(!s);
              },
              title: "Menu",
              children: /* @__PURE__ */ o.jsx(Wp, { size: 16 })
            }
          ),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (g) => {
                g.stopPropagation(), T();
              },
              title: "Add Unified Loader",
              children: /* @__PURE__ */ o.jsx(ua, { size: 16 })
            }
          ),
          s && /* @__PURE__ */ o.jsxs("div", { className: "meld-image-card__menu", children: [
            /* @__PURE__ */ o.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (g) => {
                  g.stopPropagation(), T(), a(!1);
                },
                children: [
                  /* @__PURE__ */ o.jsx(ua, { size: 14 }),
                  /* @__PURE__ */ o.jsx("span", { children: "Add Unified Loader" })
                ]
              }
            ),
            /* @__PURE__ */ o.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (g) => {
                  g.stopPropagation(), _(), a(!1);
                },
                children: [
                  /* @__PURE__ */ o.jsx(ml, { size: 14 }),
                  /* @__PURE__ */ o.jsx("span", { children: "Restore Full Workflow" })
                ]
              }
            ),
            /* @__PURE__ */ o.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (g) => {
                  g.stopPropagation(), n({
                    type: "OPEN_MODAL",
                    payload: { type: "parent_selection", imageId: e.id }
                  }), a(!1);
                },
                children: [
                  /* @__PURE__ */ o.jsx(Bp, { size: 14 }),
                  /* @__PURE__ */ o.jsx("span", { children: "Add source image" })
                ]
              }
            ),
            /* @__PURE__ */ o.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (g) => {
                  g.stopPropagation(), n({
                    type: "OPEN_MODAL",
                    payload: {
                      type: "tag_edit",
                      imageIds: [e.id],
                      tags: e.tags || []
                    }
                  }), a(!1);
                },
                children: [
                  /* @__PURE__ */ o.jsx(Sn, { size: 14 }),
                  /* @__PURE__ */ o.jsx("span", { children: "Edit Tags" })
                ]
              }
            )
          ] })
        ] }),
        l && /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "meld-prompt-popup-overlay",
            onClick: (g) => {
              g.stopPropagation(), i(null);
            },
            children: /* @__PURE__ */ o.jsxs(
              "div",
              {
                className: "meld-prompt-popup-content",
                onClick: (g) => g.stopPropagation(),
                children: [
                  /* @__PURE__ */ o.jsxs("div", { className: "meld-prompt-popup-header", children: [
                    /* @__PURE__ */ o.jsx("span", { children: l.title }),
                    /* @__PURE__ */ o.jsxs(
                      "div",
                      {
                        style: { display: "flex", alignItems: "center", gap: "10px" },
                        children: [
                          v ? /* @__PURE__ */ o.jsx(
                            Ic,
                            {
                              size: 18,
                              style: { color: "var(--meld-success-color)" }
                            }
                          ) : /* @__PURE__ */ o.jsx(
                            Op,
                            {
                              className: "meld-prompt-popup-copy",
                              size: 18,
                              onClick: () => E(l.text, "", !0)
                            }
                          ),
                          /* @__PURE__ */ o.jsx(
                            Ce,
                            {
                              className: "meld-prompt-popup-close",
                              size: 18,
                              onClick: () => i(null)
                            }
                          )
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ o.jsx("div", { className: "meld-prompt-popup-text", children: l.text })
                ]
              }
            )
          }
        )
      ]
    }
  );
}, zc = k.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r
  }) => {
    const l = e.id === t, i = typeof n.parent_id == "number" && n.parent_id === e.id, s = typeof e.parent_id == "number" && e.parent_id === n.id, a = `/api/view?filename=${encodeURIComponent(e.filename)}&type=${e.type || "output"}${e.subfolder ? `&subfolder=${encodeURIComponent(e.subfolder)}` : ""}`;
    return /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-thumbnail-wrapper", children: /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: `meld-viewer-thumbnail ${l ? "meld-viewer-thumbnail--active" : ""} ${i ? "meld-viewer-thumbnail--parent" : ""} ${s ? "meld-viewer-thumbnail--child" : ""}`,
        onClick: () => r({
          type: "OPEN_VIEWER",
          payload: { id: e.id, mode: "gallery" }
          // Default to gallery mode when clicking a thumbnail
        }),
        title: e.filename,
        children: [
          /* @__PURE__ */ o.jsx("img", { src: a, alt: e.filename }),
          (i || s) && /* @__PURE__ */ o.jsx(
            "div",
            {
              className: `meld-viewer-thumbnail-relation-icon ${i ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`,
              children: i ? /* @__PURE__ */ o.jsx(zp, { size: 12 }) : /* @__PURE__ */ o.jsx(Pp, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
zc.displayName = "ThumbnailItem";
const am = () => {
  const { state: e, dispatch: t, loadMoreImages: n } = Be(), { viewerImageId: r, images: l, viewerMode: i, lineageImages: s } = e, [a, u] = k.useState(!1), [d, v] = k.useState(
    e.settings["viewer.show_details_by_default"]
  ), [y, h] = k.useState(null), E = y ?? e.settings["viewer.show_thumbnails"], [N, j] = k.useState(!1), [F, c] = k.useState(!1), f = k.useRef(null), p = k.useMemo(() => i === "lineage" ? s : l.filter(
    (m) => m.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && m.has_children)
  ), [i, s, l, e.settings]), S = k.useMemo(() => r === null ? -1 : p.findIndex((m) => m.id === r), [p, r]), L = k.useMemo(() => {
    if (!E || S === -1) return [];
    const m = e.settings["viewer.thumbnail_window_size"], w = Math.floor(m / 2);
    let x = Math.max(0, S - w);
    const $ = Math.min(p.length, x + m);
    return $ === p.length && (x = Math.max(0, $ - m)), p.slice(x, $).map((O, U) => ({
      img: O,
      absIndex: x + U
    }));
  }, [
    p,
    S,
    e.settings["viewer.thumbnail_window_size"],
    E
  ]), _ = (i === "lineage" && s.length > 0 ? s : l).find((m) => m.id === r), T = k.useCallback(
    (m) => {
      m && "stopPropagation" in m && m.stopPropagation();
      const w = f.current;
      w && (document.fullscreenElement ? document.exitFullscreen() : w.requestFullscreen().catch((x) => {
        console.error(
          `Error attempting to enable full-screen mode: ${x.message}`
        );
      }));
    },
    []
  ), g = k.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: a } });
  }, [t, a]), R = k.useCallback(async () => {
    const m = a ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"];
    if (S === 0 && i === "gallery" && e.pagination.hasMore && !F && m) {
      c(!0);
      try {
        const w = e.pagination.limit, x = e.pagination.total, $ = Math.max(0, x - w), O = await qi(
          $,
          w,
          e.searchQuery
        );
        if (t({ type: "APPEND_IMAGES", payload: O }), O.images.length > 0) {
          const U = O.images[O.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: U.id, mode: "gallery" }
          });
        }
      } catch (w) {
        console.error("Failed to jump to end:", w);
      } finally {
        c(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: a } });
  }, [
    S,
    i,
    e.pagination.hasMore,
    e.pagination.total,
    e.pagination.limit,
    e.searchQuery,
    e.settings,
    t,
    F,
    a
  ]);
  if (k.useEffect(() => {
    i !== "gallery" || r === null || e.isLoading || !e.pagination.hasMore || S !== -1 && S >= p.length - 15 && n();
  }, [
    r,
    p.length,
    i,
    e.isLoading,
    e.pagination.hasMore,
    n,
    S
  ]), k.useEffect(() => {
    const m = (x) => {
      r !== null && (x.key === "Escape" ? document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" }) : x.key === "ArrowRight" ? g() : x.key === "ArrowLeft" ? R() : x.key === "f" || x.key === "F" ? T(x) : (x.key === "i" || x.key === "I") && v(($) => !$));
    }, w = () => {
      const x = !!document.fullscreenElement;
      u(x), v(x ? e.settings["fullscreen.show_details_by_default"] : e.settings["viewer.show_details_by_default"]);
    };
    return window.addEventListener("keydown", m), document.addEventListener("fullscreenchange", w), () => {
      window.removeEventListener("keydown", m), document.removeEventListener("fullscreenchange", w);
    };
  }, [
    r,
    t,
    T,
    g,
    R,
    e.settings
  ]), k.useEffect(() => {
    i === "lineage" && r !== null && s.length === 0 && (j(!0), Ec(r).then((m) => {
      t({ type: "SET_LINEAGE", payload: m });
    }).catch((m) => {
      console.error("Failed to fetch lineage:", m);
    }).finally(() => {
      j(!1);
    }));
  }, [i, r, s.length, t]), k.useEffect(() => () => {
    document.fullscreenElement && document.exitFullscreen().catch(() => {
    });
  }, []), k.useEffect(() => {
    if (E && r !== null) {
      const m = document.querySelector(
        ".meld-viewer-thumbnail--active"
      );
      m && m.scrollIntoView({
        behavior: "auto",
        block: "nearest",
        inline: "center"
      });
    }
  }, [r, E]), k.useEffect(() => {
    if (r === null || p.length === 0) return;
    const m = p.findIndex(
      (O) => O.id === r
    );
    if (m === -1) return;
    const w = (O) => `/api/view?filename=${encodeURIComponent(O.filename)}&type=${O.type || "output"}${O.subfolder ? `&subfolder=${encodeURIComponent(O.subfolder)}` : ""}`, x = [
      m + 1,
      m + 2,
      m - 1
    ], $ = setTimeout(() => {
      for (const O of x)
        if (O >= 0 && O < p.length) {
          const U = p[O], P = new Image();
          P.src = w(U);
        }
    }, 150);
    return () => clearTimeout($);
  }, [r, p]), !_) return null;
  const C = `/api/view?filename=${encodeURIComponent(_.filename)}&type=${_.type || "output"}${_.subfolder ? `&subfolder=${encodeURIComponent(_.subfolder)}` : ""}`, M = a ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return _n.createPortal(
    /* @__PURE__ */ o.jsx(
      "div",
      {
        ref: f,
        className: "meld-viewer-overlay",
        style: { background: "rgba(0, 0, 0, 0.85)" },
        onClick: () => t({ type: "CLOSE_VIEWER" }),
        role: "button",
        tabIndex: 0,
        children: /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: `meld-viewer-content ${a ? "meld-viewer-content--fullscreen" : ""}`,
            onClick: (m) => m.stopPropagation(),
            children: [
              M && /* @__PURE__ */ o.jsxs("div", { className: "meld-viewer-actions", children: [
                !a && /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    className: `meld-viewer-action-btn ${E ? "meld-viewer-action-btn--active" : ""}`,
                    onClick: () => h(!E),
                    type: "button",
                    title: E ? "Hide Thumbnails" : "Show Thumbnails",
                    children: /* @__PURE__ */ o.jsx(Up, { size: 20 })
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    className: "meld-viewer-action-btn",
                    onClick: () => v(!d),
                    type: "button",
                    title: d ? "Hide Details (I)" : "Show Details (I)",
                    children: /* @__PURE__ */ o.jsx(bp, { size: 20 })
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    className: "meld-viewer-action-btn",
                    onClick: T,
                    type: "button",
                    title: a ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                    children: a ? /* @__PURE__ */ o.jsx(Qp, { size: 20 }) : /* @__PURE__ */ o.jsx(Vp, { size: 20 })
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                    onClick: () => t({ type: "CLOSE_VIEWER" }),
                    type: "button",
                    title: "Close (Esc)",
                    children: /* @__PURE__ */ o.jsx(Ce, { size: 20 })
                  }
                )
              ] }),
              M && /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: "meld-viewer-nav meld-viewer-nav--prev",
                  onClick: R,
                  type: "button",
                  disabled: F,
                  children: /* @__PURE__ */ o.jsx(Tc, { size: 32 })
                }
              ),
              /* @__PURE__ */ o.jsxs("div", { className: "meld-viewer-image-container", children: [
                F && /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ o.jsx(ml, { className: "animate-spin", size: 48 }) }),
                /* @__PURE__ */ o.jsx(
                  "img",
                  {
                    src: C,
                    alt: _.filename,
                    className: `meld-viewer-image ${F ? "meld-viewer-image--loading" : ""}`,
                    fetchpriority: "high"
                  }
                )
              ] }),
              M && /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: "meld-viewer-nav meld-viewer-nav--next",
                  onClick: g,
                  type: "button",
                  children: /* @__PURE__ */ o.jsx(Lc, { size: 32 })
                }
              ),
              d && /* @__PURE__ */ o.jsxs(
                "div",
                {
                  className: `meld-viewer-details-overlay ${a ? "meld-viewer-details-overlay--fullscreen" : ""} ${M ? "" : "meld-viewer-details-overlay--no-icons"}`,
                  children: [
                    (a ? e.settings["fullscreen.details.show_filename"] : e.settings["viewer.details.show_filename"]) && /* @__PURE__ */ o.jsxs("div", { className: "meld-viewer-details-item", children: [
                      /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-details-label", children: "Filename" }),
                      /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-details-value", children: _.filename })
                    ] }),
                    (a ? e.settings["fullscreen.details.show_dimensions"] : e.settings["viewer.details.show_dimensions"]) && _.width && _.height && /* @__PURE__ */ o.jsxs("div", { className: "meld-viewer-details-item", children: [
                      /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-details-label", children: "Dimensions" }),
                      /* @__PURE__ */ o.jsxs("div", { className: "meld-viewer-details-value", children: [
                        _.width,
                        " x ",
                        _.height,
                        " px"
                      ] })
                    ] }),
                    (a ? e.settings["fullscreen.details.show_created_at"] : e.settings["viewer.details.show_created_at"]) && /* @__PURE__ */ o.jsxs("div", { className: "meld-viewer-details-item", children: [
                      /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-details-label", children: "Created At" }),
                      /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-details-value", children: new Date(_.created_at * 1e3).toLocaleString() })
                    ] }),
                    (a ? e.settings["fullscreen.details.show_model_name"] : e.settings["viewer.details.show_model_name"]) && _.model_name && /* @__PURE__ */ o.jsxs("div", { className: "meld-viewer-details-item", children: [
                      /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-details-label", children: "Model" }),
                      /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-details-value", children: _.model_name })
                    ] }),
                    (a ? e.settings["fullscreen.details.show_positive_prompt"] : e.settings["viewer.details.show_positive_prompt"]) && (_.positive_prompt || _.positive) && /* @__PURE__ */ o.jsxs("div", { className: "meld-viewer-details-item", children: [
                      /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-details-label", children: "Positive" }),
                      /* @__PURE__ */ o.jsx(
                        "div",
                        {
                          className: "meld-viewer-details-value meld-viewer-details-value--prompt",
                          style: {
                            "--meld-prompt-max-lines": a ? e.settings["fullscreen.details.max_positive_prompt_lines"] : e.settings["viewer.details.max_positive_prompt_lines"]
                          },
                          children: _.positive_prompt || _.positive
                        }
                      )
                    ] }),
                    (a ? e.settings["fullscreen.details.show_negative_prompt"] : e.settings["viewer.details.show_negative_prompt"]) && (_.negative_prompt || _.negative) && /* @__PURE__ */ o.jsxs("div", { className: "meld-viewer-details-item", children: [
                      /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-details-label", children: "Negative" }),
                      /* @__PURE__ */ o.jsx(
                        "div",
                        {
                          className: "meld-viewer-details-value meld-viewer-details-value--prompt",
                          style: {
                            "--meld-prompt-max-lines": a ? e.settings["fullscreen.details.max_negative_prompt_lines"] : e.settings["viewer.details.max_negative_prompt_lines"]
                          },
                          children: _.negative_prompt || _.negative
                        }
                      )
                    ] }),
                    (a ? e.settings["fullscreen.details.show_tags"] : e.settings["viewer.details.show_tags"]) && _.tags && _.tags.length > 0 && /* @__PURE__ */ o.jsxs("div", { className: "meld-viewer-details-item", children: [
                      /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-details-label", children: "Tags" }),
                      /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-details-tags", children: _.tags.map((m) => /* @__PURE__ */ o.jsx("span", { className: "meld-viewer-details-tag", children: m }, m)) })
                    ] })
                  ]
                }
              ),
              !a && E && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-thumbnails-container", children: /* @__PURE__ */ o.jsxs("div", { className: "meld-viewer-thumbnails", children: [
                N ? /* @__PURE__ */ o.jsx(
                  "div",
                  {
                    style: {
                      padding: "10px",
                      color: "var(--meld-text-secondary)"
                    },
                    children: "Loading lineage..."
                  }
                ) : L.map(({ img: m }) => /* @__PURE__ */ o.jsx(
                  zc,
                  {
                    thumb: m,
                    viewerImageId: r,
                    currentImage: _,
                    dispatch: t
                  },
                  m.id
                )),
                i === "gallery" && e.isLoading && /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ o.jsx(ml, { className: "animate-spin", size: 20 }) })
              ] }) })
            ]
          }
        )
      }
    ),
    document.body
  );
}, um = () => {
  const { dispatch: e } = Be(), [t, n] = k.useState({
    type: "output",
    subfolder: "",
    custom_path: "",
    recursive: !0,
    auto_link_parent: !0,
    tags: []
  }), [r, l] = k.useState([]), [i, s] = k.useState([]), [a, u] = k.useState(0), [d, v] = k.useState(!1), [y, h] = k.useState([]), [E, N] = k.useState(""), [j, F] = k.useState(!1), [c, f] = k.useState(null);
  k.useEffect(() => {
    (async () => {
      try {
        const w = await tp();
        n((x) => ({ ...x, custom_path: w }));
      } catch (w) {
        console.error("Failed to fetch home directory:", w);
      }
    })();
  }, []), k.useEffect(() => {
    const m = new AbortController();
    return (async () => {
      const x = t.type === "custom" ? t.custom_path : t.subfolder;
      if (console.log(
        `[Meld] loadFolders started. Path: "${x}", Type: "${t.type}"`
      ), t.type === "custom" && !x) {
        console.log("[Meld] Custom path is empty, skipping load."), l([]), s([]), u(0);
        return;
      }
      v(!0);
      const $ = x, O = t.type;
      try {
        console.log("[Meld] Step 1: Fast load starting...");
        const U = await ap(
          t.type,
          x,
          !0,
          m.signal
        );
        if (m.signal.aborted) {
          console.log("[Meld] Step 1: Aborted.");
          return;
        }
        console.log(
          `[Meld] Step 1 complete. Found ${U.folders.length} folders, ${U.images.length} images.`
        ), l(U.folders), s(U.images), u(null);
        const P = U.folders.map((D) => D.name);
        P.length > 0 && (console.log(
          `[Meld] Step 2: Metadata fetch starting for ${P.length} folders...`
        ), up(
          O,
          $,
          P,
          m.signal
        ).then((D) => {
          if (m.signal.aborted) {
            console.log("[Meld] Step 2: Aborted.");
            return;
          }
          console.log("[Meld] Step 2: Metadata fetch complete."), l(
            (A) => A.map((B) => {
              const ee = D[B.name];
              return ee ? { ...B, count: ee.count, preview: ee.preview } : B;
            })
          );
        }).catch((D) => {
          D.name !== "AbortError" && console.error("[Meld] Step 2: Metadata fetch failed:", D);
        })), console.log("[Meld] Step 3: Path image count starting..."), cp(O, $, m.signal).then((D) => {
          if (m.signal.aborted) {
            console.log("[Meld] Step 3: Aborted.");
            return;
          }
          console.log(`[Meld] Step 3: Path image count complete: ${D}`), u(D);
        }).catch((D) => {
          D.name !== "AbortError" && console.error("[Meld] Step 3: Path image count failed:", D);
        });
      } catch (U) {
        if (U.name === "AbortError") {
          console.log("[Meld] Request aborted.");
          return;
        }
        console.error("[Meld] Failed to load folders:", U), l([]), s([]), u(0);
      } finally {
        m.signal.aborted || v(!1);
      }
    })(), () => {
      m.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const p = k.useCallback(async () => {
    F(!0);
    try {
      const m = await Ks();
      h(m);
    } catch (m) {
      console.error("Failed to fetch tags:", m);
    } finally {
      F(!1);
    }
  }, []);
  k.useEffect(() => {
    p();
  }, [p]), k.useEffect(() => {
    const m = (w) => {
      w.key === "Escape" && c && f(null);
    };
    return window.addEventListener("keydown", m), () => window.removeEventListener("keydown", m);
  }, [c]);
  const S = k.useMemo(() => y.filter(
    (m) => m.name.toLowerCase().includes(E.toLowerCase()) && !t.tags.includes(m.name)
  ), [y, E, t.tags]), L = (m) => {
    const w = m.trim();
    w && !t.tags.includes(w) && (n({ ...t, tags: [...t.tags, w] }), N(""));
  }, _ = (m) => {
    n({ ...t, tags: t.tags.filter((w) => w !== m) });
  }, T = (m) => {
    m.key === "Enter" && E.trim() && (m.preventDefault(), L(E.trim()));
  }, g = async () => {
    try {
      await dp(t), e({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !0,
          isFinished: !1,
          shouldCancel: !1,
          newCount: 0,
          progress: { current: 0, total: 0, phase: "registering" }
        }
      }), e({ type: "CLOSE_MODAL" });
    } catch (m) {
      console.error("Failed to start scan:", m), alert(`Failed to start scan: ${m}`);
    }
  }, R = (m) => m.type === "custom" ? `/api/meld/view-custom?filename=${encodeURIComponent(m.filename)}&subfolder=${encodeURIComponent(m.subfolder)}` : `/api/view?filename=${encodeURIComponent(m.filename)}&type=${m.type}&subfolder=${encodeURIComponent(m.subfolder)}`, C = (m) => {
    if (t.type === "custom") {
      const w = t.custom_path.includes("\\") ? "\\" : "/", x = t.custom_path.endsWith(w) ? `${t.custom_path}${m}` : `${t.custom_path}${w}${m}`;
      n({ ...t, custom_path: x });
    } else {
      const w = t.subfolder ? `${t.subfolder}/${m}` : m;
      n({ ...t, subfolder: w });
    }
  }, M = () => {
    if (t.type === "custom") {
      const m = t.custom_path.includes("\\") ? "\\" : "/", w = t.custom_path.split(m);
      if (w.length > 1) {
        w.pop();
        let x = w.join(m);
        x === "" && m === "/" && (x = "/"), n({ ...t, custom_path: x });
      }
    } else {
      const m = t.subfolder.split("/");
      m.pop(), n({ ...t, subfolder: m.join("/") });
    }
  };
  return _n.createPortal(
    /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: () => e({ type: "CLOSE_MODAL" }),
        children: [
          /* @__PURE__ */ o.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--large",
              onClick: (m) => m.stopPropagation(),
              children: [
                /* @__PURE__ */ o.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ o.jsx("h2", { children: "Import Images" }),
                  /* @__PURE__ */ o.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => e({ type: "CLOSE_MODAL" }),
                      children: /* @__PURE__ */ o.jsx(Ce, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ o.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ o.jsxs("div", { className: "meld-import-container", children: [
                  /* @__PURE__ */ o.jsxs("div", { className: "meld-import-sidebar", children: [
                    /* @__PURE__ */ o.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ o.jsx("label", { htmlFor: "base-location", children: "Base Location" }),
                      /* @__PURE__ */ o.jsxs(
                        "select",
                        {
                          id: "base-location",
                          value: t.type,
                          onChange: (m) => n({
                            ...t,
                            type: m.target.value,
                            subfolder: ""
                          }),
                          children: [
                            /* @__PURE__ */ o.jsx("option", { value: "output", children: "Output Directory" }),
                            /* @__PURE__ */ o.jsx("option", { value: "input", children: "Input Directory" }),
                            /* @__PURE__ */ o.jsx("option", { value: "custom", children: "Custom Path (Absolute)" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ o.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ o.jsx("span", { className: "meld-form-label", children: "Images Found" }),
                      /* @__PURE__ */ o.jsx("div", { className: "meld-path-count", children: a === null ? /* @__PURE__ */ o.jsx("span", { className: "meld-path-count--loading", children: "Scanning..." }) : `${a} images` })
                    ] }),
                    /* @__PURE__ */ o.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ o.jsxs("label", { children: [
                      /* @__PURE__ */ o.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: t.recursive,
                          onChange: (m) => n({ ...t, recursive: m.target.checked })
                        }
                      ),
                      "Recursive Scan"
                    ] }) }),
                    /* @__PURE__ */ o.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ o.jsxs("label", { children: [
                      /* @__PURE__ */ o.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: t.auto_link_parent,
                          onChange: (m) => n({
                            ...t,
                            auto_link_parent: m.target.checked
                          })
                        }
                      ),
                      "Auto Link Parent"
                    ] }) }),
                    /* @__PURE__ */ o.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ o.jsx("label", { htmlFor: "import-tags", children: "Tags to Add" }),
                      /* @__PURE__ */ o.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ o.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((m) => /* @__PURE__ */ o.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        m,
                        /* @__PURE__ */ o.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => _(m),
                            children: /* @__PURE__ */ o.jsx(Ce, { size: 12 })
                          }
                        )
                      ] }, m)) }),
                      /* @__PURE__ */ o.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ o.jsx(yn, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ o.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: E,
                            onChange: (m) => N(m.target.value),
                            onKeyDown: T
                          }
                        ),
                        E.trim() && !t.tags.includes(E.trim()) && /* @__PURE__ */ o.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => L(E),
                            children: /* @__PURE__ */ o.jsx(Ys, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ o.jsx("div", { className: "meld-tag-suggestions", children: j ? /* @__PURE__ */ o.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : S.length === 0 ? E && /* @__PURE__ */ o.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        E
                      ] }) : S.map((m) => /* @__PURE__ */ o.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => L(m.name),
                          children: m.name
                        },
                        m.id
                      )) })
                    ] }),
                    /* @__PURE__ */ o.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ o.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "meld-btn meld-btn-primary",
                        onClick: g,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ o.jsx(Hp, { size: 16 }),
                          "Start Import"
                        ]
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ o.jsxs("div", { className: "meld-import-browser", children: [
                    /* @__PURE__ */ o.jsxs("div", { className: "meld-browser-header", children: [
                      /* @__PURE__ */ o.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-browser-back",
                          disabled: t.type === "custom" ? t.custom_path === "/" || !t.custom_path.includes("/") && !t.custom_path.includes("\\") : !t.subfolder,
                          onClick: M,
                          children: [
                            /* @__PURE__ */ o.jsx(Tc, { size: 16 }),
                            "Back"
                          ]
                        }
                      ),
                      /* @__PURE__ */ o.jsx("div", { className: "meld-browser-path-container", children: t.type === "custom" ? /* @__PURE__ */ o.jsx(
                        "input",
                        {
                          type: "text",
                          className: "meld-browser-path-input",
                          value: t.custom_path,
                          onChange: (m) => n({ ...t, custom_path: m.target.value }),
                          placeholder: "Enter absolute path..."
                        }
                      ) : /* @__PURE__ */ o.jsxs("div", { className: "meld-browser-path-display", children: [
                        /* @__PURE__ */ o.jsxs("span", { className: "meld-browser-path-type", children: [
                          t.type,
                          "/"
                        ] }),
                        t.subfolder
                      ] }) })
                    ] }),
                    /* @__PURE__ */ o.jsx("div", { className: "meld-folder-list", children: d ? /* @__PURE__ */ o.jsx("div", { className: "meld-browser-loading", children: "Loading..." }) : r.length === 0 && i.length === 0 ? /* @__PURE__ */ o.jsx("div", { className: "meld-browser-empty", children: "No items found." }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                      r.map((m) => /* @__PURE__ */ o.jsxs(
                        "div",
                        {
                          className: "meld-folder-item",
                          onClick: () => C(m.name),
                          children: [
                            /* @__PURE__ */ o.jsx("div", { className: "meld-folder-icon-wrapper", children: m.preview ? /* @__PURE__ */ o.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: R(m.preview),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ o.jsx($p, { size: 16 }) }),
                            /* @__PURE__ */ o.jsx("span", { className: "meld-folder-name", children: m.name }),
                            /* @__PURE__ */ o.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${m.count === null ? "meld-folder-count--loading" : ""}`,
                                children: m.count !== null ? `${m.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ o.jsx(Lc, { size: 14 })
                          ]
                        },
                        m.name
                      )),
                      i.length > 0 && /* @__PURE__ */ o.jsx("div", { className: "meld-browser-image-grid", children: i.map((m) => /* @__PURE__ */ o.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => f(m),
                          children: /* @__PURE__ */ o.jsx(
                            "img",
                            {
                              src: R(m),
                              alt: m.filename,
                              title: m.filename
                            }
                          )
                        },
                        m.filename
                      )) })
                    ] }) })
                  ] })
                ] }) })
              ]
            }
          ),
          c && /* @__PURE__ */ o.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (m) => {
                m.stopPropagation(), f(null);
              },
              children: /* @__PURE__ */ o.jsxs(
                "div",
                {
                  className: "meld-import-preview-content",
                  onClick: (m) => m.stopPropagation(),
                  children: [
                    /* @__PURE__ */ o.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                      /* @__PURE__ */ o.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-import-preview-close",
                          onClick: () => f(null),
                          children: /* @__PURE__ */ o.jsx(Ce, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ o.jsx(
                        "img",
                        {
                          src: R(c),
                          alt: c.filename
                        }
                      )
                    ] }),
                    /* @__PURE__ */ o.jsx("div", { className: "meld-import-preview-info", children: c.filename })
                  ]
                }
              )
            }
          )
        ]
      }
    ),
    document.body
  );
}, cm = () => {
  const { state: e, dispatch: t } = Be(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await fp(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (a) {
      console.error("Failed to cancel scan:", a);
    }
  }, l = () => {
    t({
      type: "SET_SCAN_STATUS",
      payload: { isFinished: !1, isRunning: !1 }
    });
  }, i = n.progress.phase === "linking", s = i ? 100 : n.progress.total > 0 ? Math.round(
    n.progress.current / n.progress.total * 100
  ) : 0;
  return /* @__PURE__ */ o.jsx("div", { className: "meld-import-progress-sidebar", children: n.isRunning ? /* @__PURE__ */ o.jsxs("div", { className: "meld-scan-progress-compact", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "meld-scan-info", children: [
      /* @__PURE__ */ o.jsx("div", { className: "meld-scan-status-text-compact", children: n.shouldCancel ? /* @__PURE__ */ o.jsx("span", { className: "meld-status-cancelling", children: "Cancelling..." }) : i ? /* @__PURE__ */ o.jsx("span", { children: "Linking..." }) : /* @__PURE__ */ o.jsx("span", { children: "Scanning..." }) }),
      /* @__PURE__ */ o.jsxs("div", { className: "meld-progress-stats-compact", children: [
        n.progress.current,
        " / ",
        n.progress.total
      ] })
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "meld-progress-container-compact", children: /* @__PURE__ */ o.jsx(
      "div",
      {
        className: "meld-progress-bar",
        style: { width: `${s}%` }
      }
    ) }),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "button",
        className: "meld-btn-stop-compact",
        disabled: n.shouldCancel,
        onClick: r,
        title: "Stop Scan",
        children: /* @__PURE__ */ o.jsx(Kp, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ o.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ o.jsx(Fp, { size: 14, className: "meld-success-icon" }),
      /* @__PURE__ */ o.jsxs("span", { className: "meld-finished-text", children: [
        "Done! ",
        n.newCount,
        " new images"
      ] })
    ] }),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "button",
        className: "meld-btn-ok-compact",
        onClick: l,
        children: "OK"
      }
    )
  ] }) });
}, dm = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = Be(), [l, i] = k.useState([]), [s, a] = k.useState(!0), [u, d] = k.useState(!1), v = t.images.find((c) => c.id === e), y = k.useCallback(async () => {
    a(!0);
    try {
      const c = await sp(e);
      i(c);
    } catch (c) {
      console.error("Failed to load suggestions:", c);
    } finally {
      a(!1);
    }
  }, [e]);
  k.useEffect(() => {
    y();
  }, [y]);
  const h = async (c) => {
    try {
      await ip(e, c), await r(), n({ type: "CLOSE_MODAL" });
    } catch (f) {
      console.error("Failed to link parent:", f);
    }
  }, E = async (c) => {
    a(!0);
    try {
      const f = await op(c), { id: p } = await Cc({
        filename: f.name,
        subfolder: f.subfolder || "",
        type: f.type || "input"
      });
      await h(p);
    } catch (f) {
      console.error("Failed to upload/register image:", f);
    } finally {
      a(!1);
    }
  }, N = (c) => {
    c.preventDefault(), c.stopPropagation(), d(!1);
    const f = c.dataTransfer.files[0];
    f != null && f.type.startsWith("image/") && E(f);
  };
  if (!v) return null;
  const j = l.filter((c) => c.is_source_match), F = l.filter((c) => !c.is_source_match);
  return _n.createPortal(
    /* @__PURE__ */ o.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: () => n({ type: "CLOSE_MODAL" }),
        children: /* @__PURE__ */ o.jsxs("div", { className: "meld-modal-content", onClick: (c) => c.stopPropagation(), children: [
          /* @__PURE__ */ o.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ o.jsxs("h2", { children: [
              "Select Source for #",
              v.id
            ] }),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: () => n({ type: "CLOSE_MODAL" }),
                children: /* @__PURE__ */ o.jsx(Ce, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "meld-modal-body", children: [
            /* @__PURE__ */ o.jsxs(
              "div",
              {
                className: `meld-drop-zone ${u ? "meld-drop-zone--active" : ""}`,
                onDragEnter: (c) => {
                  c.preventDefault(), c.stopPropagation(), d(!0);
                },
                onDragOver: (c) => {
                  c.preventDefault(), c.stopPropagation(), c.dataTransfer.dropEffect = "copy", d(!0);
                },
                onDragLeave: (c) => {
                  c.preventDefault(), c.stopPropagation(), d(!1);
                },
                onDrop: N,
                children: [
                  /* @__PURE__ */ o.jsx(Xp, { size: 32 }),
                  /* @__PURE__ */ o.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            s ? /* @__PURE__ */ o.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ o.jsxs("div", { className: "meld-suggestions-container", children: [
              j.length > 0 && /* @__PURE__ */ o.jsxs("section", { children: [
                /* @__PURE__ */ o.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ o.jsx("div", { className: "meld-suggestion-grid", children: j.map((c) => /* @__PURE__ */ o.jsxs(
                  "div",
                  {
                    className: "meld-suggestion-card",
                    onClick: () => h(c.id),
                    children: [
                      /* @__PURE__ */ o.jsx(
                        "img",
                        {
                          src: `/api/view?filename=${encodeURIComponent(c.filename)}&type=${c.type || "output"}${c.subfolder ? `&subfolder=${encodeURIComponent(c.subfolder)}` : ""}`,
                          alt: c.filename
                        }
                      ),
                      /* @__PURE__ */ o.jsx("div", { className: "meld-suggestion-info", children: /* @__PURE__ */ o.jsx("span", { className: "meld-suggestion-filename", children: c.filename }) })
                    ]
                  },
                  c.id
                )) })
              ] }),
              /* @__PURE__ */ o.jsxs("section", { children: [
                /* @__PURE__ */ o.jsx("h3", { children: "Visual Matches (pHash)" }),
                F.length > 0 ? /* @__PURE__ */ o.jsx("div", { className: "meld-suggestion-grid", children: F.map((c) => /* @__PURE__ */ o.jsxs(
                  "div",
                  {
                    className: "meld-suggestion-card",
                    onClick: () => h(c.id),
                    children: [
                      /* @__PURE__ */ o.jsx(
                        "img",
                        {
                          src: `/api/view?filename=${encodeURIComponent(c.filename)}&type=${c.type || "output"}${c.subfolder ? `&subfolder=${encodeURIComponent(c.subfolder)}` : ""}`,
                          alt: c.filename
                        }
                      ),
                      /* @__PURE__ */ o.jsxs("div", { className: "meld-suggestion-info", children: [
                        /* @__PURE__ */ o.jsx("span", { className: "meld-suggestion-filename", children: c.filename }),
                        /* @__PURE__ */ o.jsxs("span", { className: "meld-suggestion-distance", children: [
                          "Match:",
                          " ",
                          Math.round((64 - c.distance) / 64 * 100),
                          "%"
                        ] })
                      ] })
                    ]
                  },
                  c.id
                )) }) : /* @__PURE__ */ o.jsx("p", { className: "meld-no-suggestions", children: "No visual matches found." })
              ] })
            ] })
          ] })
        ] })
      }
    ),
    document.body
  );
}, fm = () => {
  const { state: e, dispatch: t, refreshFavorites: n } = Be(), [r, l] = k.useState(e.searchQuery), [i, s] = k.useState([]), [a, u] = k.useState(!1), [d, v] = k.useState([]), [y, h] = k.useState(-1), [E, N] = k.useState(!1), [j, F] = k.useState(null), c = k.useRef(null);
  k.useEffect(() => {
    if (j) {
      const w = setTimeout(() => F(null), 3e3);
      return () => clearTimeout(w);
    }
  }, [j]);
  const f = k.useRef(null), p = k.useRef(e.searchQuery);
  k.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      v([]);
      return;
    }
    !r && !e.searchQuery ? rp().then((w) => {
      v(w);
    }) : v([]);
  }, [
    r,
    e.searchQuery,
    e.settings["search.quick_suggestions"]
  ]), k.useEffect(() => {
    l(e.searchQuery), p.current = e.searchQuery;
  }, [e.searchQuery]), k.useEffect(() => {
    var w;
    (w = c.current) == null || w.focus();
  }, []);
  const S = k.useCallback(
    (w, x = !0) => {
      p.current !== w && (t({ type: "SET_SEARCH_QUERY", payload: w }), x && u(!1), p.current = w);
    },
    [t]
  );
  k.useEffect(() => {
    const w = setTimeout(async () => {
      if (r === p.current)
        return;
      if (e.settings["search.realtime_search"] && S(r, !1), !e.settings["search.input_suggest"]) {
        s([]), u(!1);
        return;
      }
      const x = r.split(/\s+/), $ = x[x.length - 1];
      if ($) {
        const O = $.match(
          /^(pos|neg|model|date|after|before):(.*)$/i
        );
        if (O) {
          const U = O[1].toLowerCase(), P = O[2], D = await np(P, U);
          s(D), u(D.length > 0), h(-1);
        } else
          s([]), u(!1);
      } else
        s([]), u(!1);
    }, 300);
    return () => clearTimeout(w);
  }, [
    r,
    e.settings["search.realtime_search"],
    e.settings["search.input_suggest"],
    S
  ]);
  const L = (w) => {
    w.key === "Enter" ? S(r) : w.key === "Tab" ? a && y >= 0 && (_(i[y]), w.preventDefault()) : w.key === "ArrowDown" ? a && (h((x) => Math.min(x + 1, i.length - 1)), w.preventDefault()) : w.key === "ArrowUp" ? a && (h((x) => Math.max(x - 1, -1)), w.preventDefault()) : w.key === "Escape" && u(!1);
  }, _ = (w) => {
    var P;
    const x = r.split(/\s+/);
    x.pop();
    const O = ["date", "after", "before"].includes(w.type) ? w.value : `"${w.value}"`, U = `${[...x, `${w.type}:${O}`].join(" ").trim()} `;
    l(U), S(U), s([]), u(!1), (P = c.current) == null || P.focus();
  }, T = () => {
    l(""), S("");
  }, g = async (w, x, $) => {
    w.stopPropagation();
    const O = `Are you sure you want to delete the favorite "${$}"?`;
    if (window.confirm(O))
      try {
        await aa(x), await n();
      } catch (U) {
        ge.error("Failed to delete favorite", U);
      }
  }, R = async (w, x, $) => {
    w.stopPropagation();
    const O = window.prompt(
      "Enter a new name for this favorite:",
      $
    );
    if (!(O === null || O === $))
      try {
        await hp(x, O || $), await n();
      } catch (U) {
        ge.error("Failed to rename favorite", U);
      }
  }, C = (w, x) => {
    const O = ["date", "after", "before"].includes(w) ? x : `"${x}"`, U = `${w}:${O}`;
    l(U), S(U);
  }, M = async () => {
    if (!e.searchQuery || E) return;
    if (e.favorites.some(
      (x) => x.query === e.searchQuery
    )) {
      const x = e.favorites.find(($) => $.query === e.searchQuery);
      if (x) {
        N(!0);
        try {
          await aa(x.id), await n(), F("Favorite removed.");
        } catch ($) {
          console.error("Failed to delete favorite:", $);
        } finally {
          N(!1);
        }
      }
      return;
    }
    N(!0);
    try {
      await mp(e.searchQuery, e.searchQuery), await n(), F(
        `Favorite added!
You can select favorites when the search query is empty.`
      );
    } catch (x) {
      console.error("Failed to save favorite:", x);
    } finally {
      N(!1);
    }
  }, m = (w) => {
    switch (w) {
      case "tag":
        return /* @__PURE__ */ o.jsx(Sn, { size: 12 });
      case "model":
        return /* @__PURE__ */ o.jsx(Dp, { size: 12 });
      case "pos":
      case "neg":
        return /* @__PURE__ */ o.jsx(Yp, { size: 12 });
      case "date":
      case "after":
      case "before":
        return /* @__PURE__ */ o.jsx(Rp, { size: 12 });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: "meld-search-container",
      style: { display: "flex", flexDirection: "column", gap: "8px", flex: 1 },
      children: [
        /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: "meld-search-bar-wrapper",
            style: { position: "relative", width: "100%" },
            children: [
              j && /* @__PURE__ */ o.jsx(
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
                  children: j
                }
              ),
              /* @__PURE__ */ o.jsxs(
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
                    /* @__PURE__ */ o.jsx(
                      yn,
                      {
                        size: 18,
                        color: "var(--meld-text-secondary)",
                        style: { marginRight: "10px", flexShrink: 0 }
                      }
                    ),
                    /* @__PURE__ */ o.jsx(
                      "input",
                      {
                        ref: c,
                        type: "text",
                        value: r,
                        onChange: (w) => l(w.target.value),
                        onKeyDown: L,
                        onBlur: () => setTimeout(() => u(!1), 200),
                        onFocus: () => {
                          if (r === p.current) return;
                          const w = r.split(/\s+/), x = w[w.length - 1];
                          x != null && x.match(/^(pos|neg|model|date|after|before):/i) && u(!0);
                        },
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
                    e.searchQuery && /* @__PURE__ */ o.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: M,
                        disabled: E,
                        title: e.favorites.some((w) => w.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                        children: /* @__PURE__ */ o.jsx(
                          ca,
                          {
                            size: 16,
                            color: e.favorites.some((w) => w.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((w) => w.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                          }
                        )
                      }
                    ),
                    r && /* @__PURE__ */ o.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: T,
                        style: {
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "2px",
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0
                        },
                        children: /* @__PURE__ */ o.jsx(Ce, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              a && i.length > 0 && /* @__PURE__ */ o.jsx(
                "div",
                {
                  ref: f,
                  className: "meld-search-suggestions",
                  style: {
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    right: 0,
                    backgroundColor: "var(--comfy-menu-bg, #222)",
                    border: "1px solid var(--comfy-menu-border, #444)",
                    borderRadius: "0 0 6px 6px",
                    zIndex: 1e3,
                    marginTop: "2px",
                    maxHeight: "400px",
                    overflowY: "auto",
                    boxShadow: "0 8px 16px var(--comfy-menu-shadow, rgba(0,0,0,0.6))"
                  },
                  children: i.map((w, x) => /* @__PURE__ */ o.jsx(
                    "div",
                    {
                      onMouseDown: ($) => {
                        $.preventDefault(), _(w);
                      },
                      onMouseEnter: () => h(x),
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 14px",
                        cursor: "pointer",
                        backgroundColor: x === y ? "var(--comfy-menu-bg, #333)" : "transparent",
                        borderBottom: "1px solid var(--comfy-menu-border, #2a2a2a)"
                      },
                      children: /* @__PURE__ */ o.jsxs(
                        "div",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ o.jsx(
                              "span",
                              {
                                style: {
                                  color: "var(--meld-text-secondary)",
                                  display: "flex"
                                },
                                children: m(w.type)
                              }
                            ),
                            /* @__PURE__ */ o.jsx(
                              "span",
                              {
                                style: {
                                  color: "var(--comfy-input-text-active, #3b82f6)",
                                  fontSize: "11px",
                                  fontWeight: "bold",
                                  textTransform: "uppercase",
                                  width: "45px"
                                },
                                children: w.type
                              }
                            ),
                            /* @__PURE__ */ o.jsx(
                              "span",
                              {
                                style: {
                                  color: "var(--meld-text-color)",
                                  fontSize: "14px"
                                },
                                children: w.value
                              }
                            )
                          ]
                        }
                      )
                    },
                    `${w.type}:${w.value}`
                  ))
                }
              )
            ]
          }
        ),
        !r && !e.searchQuery && d.length > 0 && /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "meld-search-quick-suggestions",
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              padding: "0 4px"
            },
            children: d.map((w) => /* @__PURE__ */ o.jsxs(
              "button",
              {
                type: "button",
                onClick: () => C(w.type, w.value),
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
                onMouseEnter: (x) => {
                  x.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", x.currentTarget.style.borderColor = "var(--comfy-menu-border, #444)", x.currentTarget.style.color = "var(--meld-text-color)";
                },
                onMouseLeave: (x) => {
                  x.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", x.currentTarget.style.borderColor = "var(--comfy-menu-border, #333)", x.currentTarget.style.color = "var(--meld-text-color)";
                },
                children: [
                  /* @__PURE__ */ o.jsx(
                    "span",
                    {
                      style: {
                        display: "flex",
                        color: "var(--meld-text-secondary)"
                      },
                      children: m(w.type)
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
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
                  /* @__PURE__ */ o.jsx(
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
              `${w.type}:${w.value}`
            ))
          }
        ),
        !r && e.favorites.length > 0 && /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: "meld-search-favorites",
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              padding: "4px",
              marginTop: "4px",
              borderTop: "1px solid var(--comfy-menu-border, #333)",
              paddingTop: "12px"
            },
            children: [
              /* @__PURE__ */ o.jsxs(
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
                    /* @__PURE__ */ o.jsx(ca, { size: 12, fill: "var(--meld-text-secondary)" }),
                    "Favorites"
                  ]
                }
              ),
              /* @__PURE__ */ o.jsx(
                "div",
                {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px"
                  },
                  children: e.favorites.map((w) => /* @__PURE__ */ o.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        backgroundColor: "var(--comfy-input-bg, #2a2a2a)",
                        border: "1px solid var(--comfy-menu-border, #333)",
                        borderRadius: "6px",
                        padding: "8px 12px",
                        cursor: "pointer",
                        transition: "all 0.2s",
                        color: "var(--meld-text-color)",
                        fontSize: "13px",
                        gap: "10px"
                      },
                      onClick: () => {
                        l(w.query), S(w.query);
                      },
                      onMouseEnter: (x) => {
                        x.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", x.currentTarget.style.borderColor = "var(--meld-accent-color)", x.currentTarget.style.color = "var(--meld-text-color)";
                      },
                      onMouseLeave: (x) => {
                        x.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", x.currentTarget.style.borderColor = "var(--comfy-menu-border, #333)", x.currentTarget.style.color = "var(--meld-text-color)";
                      },
                      children: [
                        /* @__PURE__ */ o.jsxs(
                          "div",
                          {
                            style: {
                              display: "flex",
                              flexDirection: "column",
                              minWidth: 0,
                              flex: 1
                            },
                            children: [
                              /* @__PURE__ */ o.jsx(
                                "span",
                                {
                                  style: {
                                    fontWeight: "bold",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap"
                                  },
                                  children: w.name
                                }
                              ),
                              w.name !== w.query && /* @__PURE__ */ o.jsx(
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
                                  children: w.query
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ o.jsxs(
                          "div",
                          {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: "4px",
                              flexShrink: 0
                            },
                            children: [
                              /* @__PURE__ */ o.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: (x) => {
                                    x.stopPropagation(), R(x, w.id, w.name);
                                  },
                                  style: {
                                    background: "none",
                                    border: "none",
                                    color: "var(--meld-text-secondary)",
                                    padding: "6px",
                                    display: "flex",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    borderRadius: "4px",
                                    transition: "all 0.2s"
                                  },
                                  onMouseEnter: (x) => {
                                    x.currentTarget.style.color = "var(--meld-accent-color)", x.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(68, 136, 255, 0.1))";
                                  },
                                  onMouseLeave: (x) => {
                                    x.currentTarget.style.color = "var(--meld-text-secondary)", x.currentTarget.style.backgroundColor = "transparent";
                                  },
                                  title: "Rename favorite",
                                  children: /* @__PURE__ */ o.jsx(Mc, { size: 14 })
                                }
                              ),
                              /* @__PURE__ */ o.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: (x) => {
                                    x.stopPropagation(), g(x, w.id, w.name);
                                  },
                                  style: {
                                    background: "none",
                                    border: "none",
                                    color: "var(--meld-text-secondary)",
                                    padding: "6px",
                                    display: "flex",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    borderRadius: "4px",
                                    transition: "all 0.2s"
                                  },
                                  onMouseEnter: (x) => {
                                    x.currentTarget.style.color = "var(--meld-danger-color)", x.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,0,0,0.1))";
                                  },
                                  onMouseLeave: (x) => {
                                    x.currentTarget.style.color = "var(--meld-text-secondary)", x.currentTarget.style.backgroundColor = "transparent";
                                  },
                                  title: "Delete favorite",
                                  children: /* @__PURE__ */ o.jsx(Pl, { size: 14 })
                                }
                              )
                            ]
                          }
                        )
                      ]
                    },
                    w.id
                  ))
                }
              )
            ]
          }
        )
      ]
    }
  );
}, pm = () => {
  const { state: e, dispatch: t, updateSetting: n } = Be(), [r, l] = k.useState("General"), [i, s] = k.useState({
    ...e.settings
  }), [a, u] = k.useState(
    e.settings["gallery.page_size"].toString()
  ), [d, v] = k.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [y, h] = k.useState(e.settings["viewer.thumbnail_window_size"].toString()), [E, N] = k.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [j, F] = k.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    c,
    f
  ] = k.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    p,
    S
  ] = k.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), L = [
    {
      key: "gallery.page_size",
      label: "Page Size",
      description: "Number of images to display per page (10-10000).",
      type: "number",
      category: "General",
      min: 10,
      max: 1e4
    },
    {
      key: "gallery.hide_parent_images",
      label: "Hide Source Images",
      description: "Hide images that have been used as a basis for other images (sources).",
      type: "boolean",
      category: "General"
    },
    {
      key: "gallery.matching_strategy",
      label: "Source Matching Strategy",
      description: "Algorithm used to identify the source image.",
      type: "select",
      category: "General",
      options: [
        { value: "filename_phash", label: "Filename -> pHash" },
        { value: "phash_created", label: "pHash & Created Time" },
        { value: "phash_only", label: "pHash Only" }
      ]
    },
    {
      key: "gallery.lineage_max_depth",
      label: "Max Lineage Depth",
      description: "Maximum number of ancestor levels to fetch and display (1-10).",
      type: "number",
      category: "General",
      min: 1,
      max: 10
    },
    {
      key: "sidebar.show_filename",
      label: "Show Filename",
      description: "Display the filename on the card.",
      type: "boolean",
      category: "Sidebar"
    },
    {
      key: "sidebar.show_dimensions",
      label: "Show Dimensions",
      description: "Display the image dimensions (width x height) on the card.",
      type: "boolean",
      category: "Sidebar"
    },
    {
      key: "gallery.show_parent_image",
      label: "Show Source Info",
      description: "Display source image information and lineage link on image cards.",
      type: "boolean",
      category: "Sidebar"
    },
    {
      key: "sidebar.show_model_name",
      label: "Show Model Name",
      description: "Display the model name on the card.",
      type: "boolean",
      category: "Sidebar"
    },
    {
      key: "sidebar.show_positive_prompt",
      label: "Show Positive Prompt",
      description: "Display the positive prompt on the card.",
      type: "boolean",
      category: "Sidebar"
    },
    {
      key: "sidebar.show_negative_prompt",
      label: "Show Negative Prompt",
      description: "Display the negative prompt on the card.",
      type: "boolean",
      category: "Sidebar"
    },
    {
      key: "sidebar.show_tags",
      label: "Show Tags",
      description: "Display tags on the card.",
      type: "boolean",
      category: "Sidebar"
    },
    {
      key: "search.quick_suggestions",
      label: "Quick Suggestions",
      description: "Show suggested keywords when the search field is empty.",
      type: "boolean",
      category: "Search"
    },
    {
      key: "search.input_suggest",
      label: "Input Suggest",
      description: "Show suggestions when typing search prefixes (e.g. pos:).",
      type: "boolean",
      category: "Search"
    },
    {
      key: "search.realtime_search",
      label: "Real-time Search",
      description: "Perform search automatically while typing without pressing Enter.",
      type: "boolean",
      category: "Search"
    },
    {
      key: "viewer.loop",
      label: "Loop Navigation",
      description: "Loop to the beginning/end when navigating in the viewer.",
      type: "boolean",
      category: "View"
    },
    {
      key: "viewer.show_details_by_default",
      label: "Show by Default",
      description: "Show the image details panel automatically when opening the viewer.",
      type: "boolean",
      category: "View Details"
    },
    {
      key: "viewer.details.show_filename",
      label: "Show Filename",
      description: "Display the filename in the details panel.",
      type: "boolean",
      category: "View Details"
    },
    {
      key: "viewer.details.show_dimensions",
      label: "Show Dimensions",
      description: "Display dimensions in the details panel.",
      type: "boolean",
      category: "View Details"
    },
    {
      key: "viewer.details.show_created_at",
      label: "Show Created At",
      description: "Display generation date/time in the details panel.",
      type: "boolean",
      category: "View Details"
    },
    {
      key: "viewer.details.show_model_name",
      label: "Show Model",
      description: "Display model name in the details panel.",
      type: "boolean",
      category: "View Details"
    },
    {
      key: "viewer.details.show_positive_prompt",
      label: "Show Positive",
      description: "Display positive prompt in the details panel.",
      type: "boolean",
      category: "View Details"
    },
    {
      key: "viewer.details.show_negative_prompt",
      label: "Show Negative",
      description: "Display negative prompt in the details panel.",
      type: "boolean",
      category: "View Details"
    },
    {
      key: "viewer.details.max_positive_prompt_lines",
      label: "Max Positive Prompt Lines",
      description: "Maximum number of lines to display for the positive prompt.",
      type: "number",
      category: "View Details",
      min: 1,
      max: 100
    },
    {
      key: "viewer.details.max_negative_prompt_lines",
      label: "Max Negative Prompt Lines",
      description: "Maximum number of lines to display for the negative prompt.",
      type: "number",
      category: "View Details",
      min: 1,
      max: 100
    },
    {
      key: "viewer.details.show_tags",
      label: "Show Tags",
      description: "Display tags in the details panel.",
      type: "boolean",
      category: "View Details"
    },
    {
      key: "viewer.show_icons",
      label: "Show Tool Icons",
      description: "Display navigation and action icons in view mode.",
      type: "boolean",
      category: "View"
    },
    {
      key: "viewer.show_thumbnails",
      label: "Show Thumbnails",
      description: "Display the thumbnail strip at the bottom of the viewer. Disabling this can improve performance on slower systems.",
      type: "boolean",
      category: "View"
    },
    {
      key: "viewer.thumbnail_window_size",
      label: "Thumbnail Window Size",
      description: "Number of thumbnails to keep in the viewer (1-10000).",
      type: "number",
      category: "View",
      min: 1,
      max: 1e4
    },
    {
      key: "fullscreen.show_icons",
      label: "Show Tool Icons",
      description: "Display navigation and close icons in fullscreen mode.",
      type: "boolean",
      category: "Full Screen"
    },
    {
      key: "fullscreen.loop",
      label: "Loop Navigation",
      description: "Loop to the beginning/end when navigating in fullscreen.",
      type: "boolean",
      category: "Full Screen"
    },
    {
      key: "fullscreen.show_details_by_default",
      label: "Show Detail by Default",
      description: "Show the image details panel automatically when entering fullscreen.",
      type: "boolean",
      category: "Full Screen Detail"
    },
    {
      key: "fullscreen.details.show_filename",
      label: "Show Filename",
      description: "Display the filename in fullscreen details.",
      type: "boolean",
      category: "Full Screen Detail"
    },
    {
      key: "fullscreen.details.show_dimensions",
      label: "Show Dimensions",
      description: "Display dimensions in fullscreen details.",
      type: "boolean",
      category: "Full Screen Detail"
    },
    {
      key: "fullscreen.details.show_created_at",
      label: "Show Created At",
      description: "Display generation date/time in fullscreen details.",
      type: "boolean",
      category: "Full Screen Detail"
    },
    {
      key: "fullscreen.details.show_model_name",
      label: "Show Model",
      description: "Display model name in fullscreen details.",
      type: "boolean",
      category: "Full Screen Detail"
    },
    {
      key: "fullscreen.details.show_positive_prompt",
      label: "Show Positive",
      description: "Display positive prompt in fullscreen details.",
      type: "boolean",
      category: "Full Screen Detail"
    },
    {
      key: "fullscreen.details.show_negative_prompt",
      label: "Show Negative",
      description: "Display negative prompt in fullscreen details.",
      type: "boolean",
      category: "Full Screen Detail"
    },
    {
      key: "fullscreen.details.max_positive_prompt_lines",
      label: "Max Positive Prompt Lines",
      description: "Maximum number of lines to display for the positive prompt in fullscreen.",
      type: "number",
      category: "Full Screen Detail",
      min: 1,
      max: 100
    },
    {
      key: "fullscreen.details.max_negative_prompt_lines",
      label: "Max Negative Prompt Lines",
      description: "Maximum number of lines to display for the negative prompt in fullscreen.",
      type: "number",
      category: "Full Screen Detail",
      min: 1,
      max: 100
    },
    {
      key: "fullscreen.details.show_tags",
      label: "Show Tags",
      description: "Display tags in fullscreen details.",
      type: "boolean",
      category: "Full Screen Detail"
    }
  ], _ = async () => {
    const C = Object.keys(i).filter((M) => i[M] !== e.settings[M]);
    if (C.length > 0)
      for (const M of C)
        await n(M, i[M]);
    t({ type: "CLOSE_MODAL" });
  }, T = (C, M) => {
    s((m) => ({
      ...m,
      [C]: !M
    }));
  }, g = (C, M, m, w) => {
    C === "gallery.page_size" ? u(M) : C === "gallery.lineage_max_depth" ? v(M) : C === "viewer.thumbnail_window_size" ? h(M) : C === "viewer.details.max_positive_prompt_lines" ? N(M) : C === "viewer.details.max_negative_prompt_lines" ? F(M) : C === "fullscreen.details.max_positive_prompt_lines" ? f(M) : C === "fullscreen.details.max_negative_prompt_lines" && S(M);
    const x = Number.parseInt(M, 10);
    if (!Number.isNaN(x)) {
      let $ = x;
      m !== void 0 && $ < m && ($ = m), w !== void 0 && $ > w && ($ = w), s((O) => ({
        ...O,
        [C]: $
      }));
    }
  }, R = L.filter(
    (C) => C.category === r
  );
  return _n.createPortal(
    /* @__PURE__ */ o.jsx("div", { className: "meld-modal-overlay", onClick: _, children: /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: "meld-modal-content meld-settings-modal",
        onClick: (C) => C.stopPropagation(),
        children: [
          /* @__PURE__ */ o.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ o.jsx("h2", { children: "Settings" }),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: _,
                children: /* @__PURE__ */ o.jsx(Ce, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "meld-settings-layout", children: [
            /* @__PURE__ */ o.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ o.jsxs("div", { className: "meld-tabs", children: [
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "General" ? "active" : ""}`,
                  onClick: () => l("General"),
                  children: "General"
                }
              ),
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "Sidebar" ? "active" : ""}`,
                  onClick: () => l("Sidebar"),
                  children: "Sidebar"
                }
              ),
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "Search" ? "active" : ""}`,
                  onClick: () => l("Search"),
                  children: "Search"
                }
              ),
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "View" ? "active" : ""}`,
                  onClick: () => l("View"),
                  children: "View"
                }
              ),
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "View Details" ? "active" : ""}`,
                  onClick: () => l("View Details"),
                  children: "View Details"
                }
              ),
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "Full Screen" ? "active" : ""}`,
                  onClick: () => l("Full Screen"),
                  children: "Full Screen"
                }
              ),
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "Full Screen Detail" ? "active" : ""}`,
                  onClick: () => l("Full Screen Detail"),
                  children: "Full Screen Detail"
                }
              )
            ] }) }),
            /* @__PURE__ */ o.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ o.jsx("div", { className: "meld-settings-list", children: R.map((C) => {
              var M;
              return /* @__PURE__ */ o.jsxs("div", { className: "meld-settings-item", children: [
                /* @__PURE__ */ o.jsxs("div", { className: "meld-settings-item__info", children: [
                  /* @__PURE__ */ o.jsx("div", { className: "meld-settings-item__label", children: C.label }),
                  /* @__PURE__ */ o.jsx("div", { className: "meld-settings-item__description", children: C.description })
                ] }),
                /* @__PURE__ */ o.jsxs("div", { className: "meld-settings-item__control", children: [
                  C.type === "boolean" && /* @__PURE__ */ o.jsxs("label", { className: "meld-switch", children: [
                    /* @__PURE__ */ o.jsx(
                      "input",
                      {
                        type: "checkbox",
                        checked: !!i[C.key],
                        onChange: () => T(
                          C.key,
                          !!i[C.key]
                        )
                      }
                    ),
                    /* @__PURE__ */ o.jsx("span", { className: "meld-switch__slider" })
                  ] }),
                  C.type === "number" && /* @__PURE__ */ o.jsx(
                    "input",
                    {
                      type: "number",
                      className: "meld-number-input",
                      value: C.key === "gallery.page_size" ? a : C.key === "gallery.lineage_max_depth" ? d : C.key === "viewer.thumbnail_window_size" ? y : C.key === "viewer.details.max_positive_prompt_lines" ? E : C.key === "viewer.details.max_negative_prompt_lines" ? j : C.key === "fullscreen.details.max_positive_prompt_lines" ? c : C.key === "fullscreen.details.max_negative_prompt_lines" ? p : i[C.key],
                      min: C.min,
                      max: C.max,
                      onChange: (m) => g(
                        C.key,
                        m.target.value,
                        C.min,
                        C.max
                      ),
                      onBlur: () => {
                        C.key === "gallery.page_size" ? u(
                          i["gallery.page_size"].toString()
                        ) : C.key === "gallery.lineage_max_depth" ? v(
                          i["gallery.lineage_max_depth"].toString()
                        ) : C.key === "viewer.thumbnail_window_size" ? h(
                          i["viewer.thumbnail_window_size"].toString()
                        ) : C.key === "viewer.details.max_positive_prompt_lines" ? N(
                          i["viewer.details.max_positive_prompt_lines"].toString()
                        ) : C.key === "viewer.details.max_negative_prompt_lines" ? F(
                          i["viewer.details.max_negative_prompt_lines"].toString()
                        ) : C.key === "fullscreen.details.max_positive_prompt_lines" ? f(
                          i["fullscreen.details.max_positive_prompt_lines"].toString()
                        ) : C.key === "fullscreen.details.max_negative_prompt_lines" && S(
                          i["fullscreen.details.max_negative_prompt_lines"].toString()
                        );
                      }
                    }
                  ),
                  C.type === "select" && /* @__PURE__ */ o.jsx(
                    "select",
                    {
                      className: "meld-select",
                      value: i[C.key],
                      onChange: (m) => s((w) => ({
                        ...w,
                        [C.key]: m.target.value
                      })),
                      children: (M = C.options) == null ? void 0 : M.map((m) => /* @__PURE__ */ o.jsx("option", { value: m.value, children: m.label }, m.value))
                    }
                  )
                ] })
              ] }, C.key);
            }) }) })
          ] })
        ]
      }
    ) }),
    document.body
  );
}, mm = ({
  imageIds: e,
  initialTags: t,
  onClose: n
}) => {
  const { refreshImages: r } = Be(), [l, i] = k.useState([]), [s, a] = k.useState(t), [u, d] = k.useState(""), [v, y] = k.useState(!0), [h, E] = k.useState(!1), N = k.useRef(null), j = e.length > 1, F = k.useCallback(async () => {
    y(!0);
    try {
      const _ = await Ks();
      i(_);
    } catch (_) {
      console.error("Failed to fetch tags:", _);
    } finally {
      y(!1);
    }
  }, []);
  k.useEffect(() => {
    F();
  }, [F]), k.useEffect(() => {
    N.current && N.current.focus();
  }, []);
  const c = k.useMemo(() => l.filter(
    (_) => _.name.toLowerCase().includes(u.toLowerCase()) && !s.includes(_.name)
  ), [l, u, s]), f = (_) => {
    const T = _.trim();
    T && !s.includes(T) && (a([...s, T]), d(""));
  }, p = (_) => {
    a(s.filter((T) => T !== _));
  }, S = async () => {
    E(!0);
    try {
      if (j) {
        const _ = s.filter((g) => !t.includes(g)), T = t.filter(
          (g) => !s.includes(g)
        );
        await xp(e, _, T);
      } else
        await wp(e[0], s);
      await r(), n();
    } catch (_) {
      console.error("Failed to update tags:", _), alert("Failed to update tags.");
    } finally {
      E(!1);
    }
  }, L = (_) => {
    _.key === "Enter" && u.trim() ? (_.preventDefault(), f(u.trim())) : _.key === "Escape" && n();
  };
  return /* @__PURE__ */ o.jsx("div", { className: "meld-modal-overlay", onClick: n, children: /* @__PURE__ */ o.jsxs("div", { className: "meld-modal-content", onClick: (_) => _.stopPropagation(), children: [
    /* @__PURE__ */ o.jsxs("div", { className: "meld-modal-header", children: [
      /* @__PURE__ */ o.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ o.jsx(Sn, { size: 18 }),
        /* @__PURE__ */ o.jsx("h3", { style: { margin: 0 }, children: j ? `Edit Tags (${e.length} images)` : "Edit Tags" })
      ] }),
      /* @__PURE__ */ o.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ o.jsx(Ce, { size: 20 }) })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "meld-modal-body", children: [
      j && /* @__PURE__ */ o.jsx(
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
      /* @__PURE__ */ o.jsxs("div", { className: "meld-tag-edit-section", children: [
        /* @__PURE__ */ o.jsx("div", { className: "meld-tag-edit-label", children: j ? "Collective Tags" : "Selected Tags" }),
        /* @__PURE__ */ o.jsx("div", { className: "meld-tag-edit-selected", children: s.length === 0 ? /* @__PURE__ */ o.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : s.map((_) => /* @__PURE__ */ o.jsxs("span", { className: "meld-tag-edit-badge", children: [
          _,
          /* @__PURE__ */ o.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-edit-remove",
              onClick: () => p(_),
              children: /* @__PURE__ */ o.jsx(Ce, { size: 12 })
            }
          )
        ] }, _)) })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "meld-tag-edit-section", children: [
        /* @__PURE__ */ o.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
        /* @__PURE__ */ o.jsxs("div", { className: "meld-tag-search-container", children: [
          /* @__PURE__ */ o.jsx(yn, { size: 14, className: "meld-tag-search-icon" }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              ref: N,
              type: "text",
              className: "meld-tag-search-input",
              placeholder: "Search or create new tag...",
              value: u,
              onChange: (_) => d(_.target.value),
              onKeyDown: L
            }
          ),
          u.trim() && !s.includes(u.trim()) && /* @__PURE__ */ o.jsxs(
            "button",
            {
              type: "button",
              className: "meld-tag-add-btn",
              onClick: () => f(u),
              children: [
                /* @__PURE__ */ o.jsx(Ys, { size: 14 }),
                "Create"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "meld-tag-suggestions", children: v ? /* @__PURE__ */ o.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : c.length === 0 ? u ? /* @__PURE__ */ o.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ o.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : c.map((_) => /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            className: "meld-tag-suggestion-item",
            onClick: () => f(_.name),
            children: _.name
          },
          _.id
        )) })
      ] })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "meld-modal-footer", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          type: "button",
          className: "meld-btn meld-btn-secondary",
          onClick: n,
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          type: "button",
          className: "meld-btn meld-btn-primary",
          onClick: S,
          disabled: h,
          children: h ? "Saving..." : "Save Changes"
        }
      )
    ] })
  ] }) });
}, hm = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = k.useState([]), [l, i] = k.useState(!0), [s, a] = k.useState(""), [u, d] = k.useState(""), [v, y] = k.useState(!1), [h, E] = k.useState(null), [N, j] = k.useState(""), [F, c] = k.useState(!1), f = k.useRef(null), p = k.useCallback(async () => {
    i(!0);
    try {
      const M = await Ks();
      r(M);
    } catch (M) {
      console.error("Failed to fetch tags:", M);
    } finally {
      i(!1);
    }
  }, []);
  k.useEffect(() => {
    p();
  }, [p]), k.useEffect(() => {
    h !== null && f.current && (f.current.focus(), f.current.select());
  }, [h]);
  const S = async (M) => {
    M.preventDefault();
    const m = u.trim();
    if (!(!m || v)) {
      if (n.some((w) => w.name.toLowerCase() === m.toLowerCase())) {
        alert(`Tag "${m}" already exists.`);
        return;
      }
      y(!0);
      try {
        await gp(m), d(""), await p();
      } catch (w) {
        console.error("Failed to add tag:", w);
      } finally {
        y(!1);
      }
    }
  }, L = async (M, m) => {
    if (confirm(`Are you sure you want to delete tag "${m}"?`))
      try {
        await yp(M), await p();
      } catch (w) {
        console.error("Failed to delete tag:", w);
      }
  }, _ = (M) => {
    E(M.id), j(M.name);
  }, T = () => {
    E(null), j("");
  }, g = async (M) => {
    M.preventDefault();
    const m = N.trim();
    if (!m || h === null || F) return;
    const w = n.find((x) => x.id === h);
    if (w && w.name === m) {
      T();
      return;
    }
    if (n.some(
      (x) => x.id !== h && x.name.toLowerCase() === m.toLowerCase()
    )) {
      alert(`Tag "${m}" already exists.`);
      return;
    }
    c(!0);
    try {
      await vp(h, m), T(), await p();
    } catch (x) {
      console.error("Failed to rename tag:", x), alert(x instanceof Error ? x.message : "Failed to rename tag");
    } finally {
      c(!1);
    }
  }, R = (M) => {
    t(`tag:${M}`);
  }, C = k.useMemo(() => n.filter(
    (M) => M.name.toLowerCase().includes(s.toLowerCase())
  ), [n, s]);
  return /* @__PURE__ */ o.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ o.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ o.jsx(Sn, { size: 16 }),
        /* @__PURE__ */ o.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ o.jsx(Ce, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ o.jsxs("form", { className: "meld-tag-add-form", onSubmit: S, children: [
        /* @__PURE__ */ o.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: u,
            onChange: (M) => d(M.target.value),
            disabled: v
          }
        ),
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !u.trim() || v,
            children: [
              /* @__PURE__ */ o.jsx(Ys, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ o.jsx(yn, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: s,
            onChange: (M) => a(M.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ o.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ o.jsx("div", { className: "meld-tag-list", children: C.length === 0 ? /* @__PURE__ */ o.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : C.map((M) => /* @__PURE__ */ o.jsx("div", { className: "meld-tag-item", children: h === M.id ? /* @__PURE__ */ o.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: g,
          children: [
            /* @__PURE__ */ o.jsx(
              "input",
              {
                type: "text",
                ref: f,
                className: "meld-tag-rename-input",
                value: N,
                onChange: (m) => j(m.target.value),
                onKeyDown: (m) => m.key === "Escape" && T()
              }
            ),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: F || !N.trim(),
                children: /* @__PURE__ */ o.jsx(Ic, { size: 14 })
              }
            ),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: T,
                disabled: F,
                children: /* @__PURE__ */ o.jsx(Ce, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx("span", { className: "meld-tag-item__name", children: M.name }),
        /* @__PURE__ */ o.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ o.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => R(M.name),
              children: /* @__PURE__ */ o.jsx(yn, { size: 14 })
            }
          ),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => _(M),
              children: /* @__PURE__ */ o.jsx(Mc, { size: 14 })
            }
          ),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => L(M.id, M.name),
              children: /* @__PURE__ */ o.jsx(Pl, { size: 14 })
            }
          )
        ] })
      ] }) }, M.id)) })
    ] })
  ] });
}, gm = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r } = Be(), [l, i] = k.useState("gallery"), [s, a] = k.useState(""), u = e.searchQuery.trim() !== "", d = k.useRef(null), v = k.useRef(null), y = k.useMemo(
    () => e.images.filter(
      (h) => h.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && h.has_children)
    ),
    [e.images, e.settings]
  );
  return k.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && y.length === 0 && (ge.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    y.length,
    r
  ]), ge.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: y.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), k.useEffect(() => {
    const h = new IntersectionObserver(
      (N) => {
        N[0].isIntersecting && !e.isLoading && e.pagination.hasMore && (ge.log(
          "GalleryPanel: Load more triggered via IntersectionObserver"
        ), r());
      },
      { threshold: 0, rootMargin: "800px" }
    ), E = d.current;
    return E && h.observe(E), () => {
      E && h.unobserve(E);
    };
  }, [r, e.isLoading, e.pagination.hasMore]), k.useEffect(() => {
    const h = e.viewerImageId ?? v.current;
    if (h !== null && y.some((N) => N.id === h)) {
      const N = document.querySelector(
        `[data-image-id="${h}"]`
      );
      N && (N.scrollIntoView({ behavior: "smooth", block: "nearest" }), e.viewerImageId === null && (v.current = null));
    }
    e.viewerImageId !== null && (v.current = e.viewerImageId);
  }, [e.viewerImageId, y]), /* @__PURE__ */ o.jsxs("div", { className: "meld-gallery", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "meld-gallery__header", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "meld-gallery__actions", children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              l === "search" ? (e.searchQuery && (a(e.searchQuery), t({ type: "SET_SEARCH_QUERY", payload: "" })), i("gallery")) : (!e.searchQuery && s && t({
                type: "SET_SEARCH_QUERY",
                payload: s
              }), i("search"));
            },
            style: {
              background: "none",
              border: "none",
              color: u ? "var(--meld-success-color)" : l === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              fontWeight: u ? "bold" : "normal"
            },
            title: "Search",
            children: /* @__PURE__ */ o.jsx(yn, { size: 14 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            onClick: () => i(l === "tags" ? "gallery" : "tags"),
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
            children: /* @__PURE__ */ o.jsx(Sn, { size: 14 })
          }
        ),
        /* @__PURE__ */ o.jsx(
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
            children: /* @__PURE__ */ o.jsx(Ap, { size: 14 })
          }
        ),
        /* @__PURE__ */ o.jsx(
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
            children: /* @__PURE__ */ o.jsx(
              ml,
              {
                size: 14,
                className: e.isLoading ? "animate-spin" : ""
              }
            )
          }
        ),
        /* @__PURE__ */ o.jsx(
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
            children: /* @__PURE__ */ o.jsx(Gp, { size: 14 })
          }
        )
      ] }),
      l === "search" && /* @__PURE__ */ o.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ o.jsx(fm, {}) })
    ] }),
    /* @__PURE__ */ o.jsx(cm, {}),
    e.error && /* @__PURE__ */ o.jsx("div", { className: "meld-gallery__error", children: e.error }),
    l === "tags" ? /* @__PURE__ */ o.jsx(
      hm,
      {
        onClose: () => i("gallery"),
        onSearch: (h) => {
          t({ type: "SET_SEARCH_QUERY", payload: h }), i("search");
        }
      }
    ) : e.isLoading && y.length === 0 ? /* @__PURE__ */ o.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : y.length === 0 ? /* @__PURE__ */ o.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx("div", { className: "meld-gallery__list", children: y.map((h) => /* @__PURE__ */ o.jsx("div", { "data-image-id": h.id, children: /* @__PURE__ */ o.jsx(lm, { height: 150, children: /* @__PURE__ */ o.jsx(om, { image: h }) }) }, h.id)) }),
      /* @__PURE__ */ o.jsxs(
        "div",
        {
          ref: d,
          className: "meld-gallery__load-more",
          style: { height: "20px", margin: "20px 0", textAlign: "center" },
          children: [
            e.isLoading && /* @__PURE__ */ o.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
            !e.pagination.hasMore && y.length > 0 && /* @__PURE__ */ o.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ o.jsx(im, {}),
    e.viewerImageId !== null && /* @__PURE__ */ o.jsx(am, {}),
    e.activeModal.type === "parent_selection" && /* @__PURE__ */ o.jsx(dm, { imageId: e.activeModal.imageId }),
    e.activeModal.type === "import" && /* @__PURE__ */ o.jsx(um, {}),
    e.activeModal.type === "settings" && /* @__PURE__ */ o.jsx(pm, {}),
    e.activeModal.type === "tag_edit" && /* @__PURE__ */ o.jsx(
      mm,
      {
        imageIds: e.activeModal.imageIds,
        initialTags: e.activeModal.tags,
        onClose: () => t({ type: "CLOSE_MODAL" })
      }
    ),
    e.activeModal.type === "delete_confirm" && /* @__PURE__ */ o.jsx(
      sm,
      {
        imageIds: e.activeModal.imageIds,
        hasLineage: e.activeModal.hasLineage
      }
    )
  ] });
};
da.registerExtension({
  name: "Meld.UnifiedLoader",
  async beforeRegisterNodeDef(e, t, n) {
    t.name;
  },
  async nodeCreated(e) {
    if (e.comfyClass !== "MeldUnifiedLoader") return;
    const t = () => {
      var l, i;
      const n = (l = e.widgets) == null ? void 0 : l.find((s) => s.name === "positive"), r = (i = e.widgets) == null ? void 0 : i.find((s) => s.name === "negative");
      n && n.inputEl && (n.inputEl.style.borderLeft = "4px solid var(--comfy-input-text-active, #44bb44)", n.inputEl.style.paddingLeft = "8px"), r && r.inputEl && (r.inputEl.style.borderLeft = "4px solid var(--error-color, #ff4444)", r.inputEl.style.paddingLeft = "8px");
    };
    t(), setTimeout(t, 1), setTimeout(t, 100);
  }
});
const zl = document.createElement("link");
zl.rel = "stylesheet";
zl.type = "text/css";
zl.href = "/extensions/ComfyUI-Meld/js/style.css";
document.head.appendChild(zl);
let Mr = null, $e = null;
da.registerExtension({
  name: "ComfyUI.Meld",
  async beforeRegisterNodeDef(e, t, n) {
    if (t.name === "MeldSaveImage") {
      const r = e.prototype.onExecuted;
      e.prototype.onExecuted = function(...l) {
        r == null || r.apply(this, l);
        const i = n.ui.meld;
        i != null && i.isVisible() && i.refresh();
      };
    }
  },
  async setup(e) {
    var t;
    try {
      const n = await kc();
      ge.init(n.dev_mode), ge.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld] Failed to fetch settings", n), ge.init(!1);
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
      }, V.addEventListener("meld-image-saved", () => {
        var n;
        (n = e.ui.meld) == null || n.refresh();
      }), V.addEventListener("meld-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-scan-progress", { detail: n.detail })
        );
      }), V.addEventListener("meld-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-scan-finished", { detail: n.detail })
        ), (r = e.ui.meld) == null || r.refresh(), console.log("Meld: Import completed.");
      }), V.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const l of n.output.images)
              if (l.type === "output")
                try {
                  await Cc({
                    filename: l.filename,
                    subfolder: l.subfolder,
                    type: l.type
                  });
                } catch (i) {
                  console.error("Failed to auto-register image:", i);
                }
          }
        }
      );
      try {
        e.extensionManager.registerSidebarTab({
          id: "meld-gallery",
          icon: "meld-icon",
          title: "Meld",
          tooltip: "Meld Image Manager",
          type: "custom",
          render: (n) => {
            ge.log("Meld: render called", {
              el: n,
              galleryRoot: Mr,
              galleryContainer: $e
            }), $e || (ge.log("Meld: galleryContainer not found, creating new one"), $e = document.createElement("div"), $e.id = "meld-gallery-container", $e.style.height = "100%", $e.style.width = "100%", $e.style.display = "flex", $e.style.flexDirection = "column"), n.contains($e) || (ge.log("Meld: Appending galleryContainer to el"), n.appendChild($e)), Mr ? ge.log(
              "Meld: Gallery root already exists, React should handle re-render if needed"
            ) : (ge.log("Meld: Creating new gallery root"), Mr = Sc($e), Mr.render(
              qs.createElement(
                rm,
                null,
                qs.createElement(gm)
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
