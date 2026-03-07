import { api as ne } from "/scripts/api.js";
import { app as ld } from "/scripts/app.js";
var Ww = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Tm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var sd = { exports: {} }, ae = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pl = Symbol.for("react.element"), Lm = Symbol.for("react.portal"), Am = Symbol.for("react.fragment"), Rm = Symbol.for("react.strict_mode"), Dm = Symbol.for("react.profiler"), Pm = Symbol.for("react.provider"), zm = Symbol.for("react.context"), Om = Symbol.for("react.forward_ref"), Fm = Symbol.for("react.suspense"), $m = Symbol.for("react.memo"), Wm = Symbol.for("react.lazy"), ji = Symbol.iterator;
function Um(e) {
  return e === null || typeof e != "object" ? null : (e = ji && e[ji] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ad = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, od = Object.assign, id = {};
function yr(e, t, n) {
  this.props = e, this.context = t, this.refs = id, this.updater = n || ad;
}
yr.prototype.isReactComponent = {};
yr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
yr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function cd() {
}
cd.prototype = yr.prototype;
function ko(e, t, n) {
  this.props = e, this.context = t, this.refs = id, this.updater = n || ad;
}
var So = ko.prototype = new cd();
So.constructor = ko;
od(So, yr.prototype);
So.isPureReactComponent = !0;
var Ci = Array.isArray, dd = Object.prototype.hasOwnProperty, bo = { current: null }, ud = { key: !0, ref: !0, __self: !0, __source: !0 };
function fd(e, t, n) {
  var r, s = {}, a = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) dd.call(t, r) && !ud.hasOwnProperty(r) && (s[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) s.children = n;
  else if (1 < i) {
    for (var c = Array(i), d = 0; d < i; d++) c[d] = arguments[d + 2];
    s.children = c;
  }
  if (e && e.defaultProps) for (r in i = e.defaultProps, i) s[r] === void 0 && (s[r] = i[r]);
  return { $$typeof: pl, type: e, key: a, ref: o, props: s, _owner: bo.current };
}
function Vm(e, t) {
  return { $$typeof: pl, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function jo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === pl;
}
function Bm(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ei = /\/+/g;
function Gs(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Bm("" + e.key) : t.toString(36);
}
function Bl(e, t, n, r, s) {
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
        case pl:
        case Lm:
          o = !0;
      }
  }
  if (o) return o = e, s = s(o), e = r === "" ? "." + Gs(o, 0) : r, Ci(s) ? (n = "", e != null && (n = e.replace(Ei, "$&/") + "/"), Bl(s, t, n, "", function(d) {
    return d;
  })) : s != null && (jo(s) && (s = Vm(s, n + (!s.key || o && o.key === s.key ? "" : ("" + s.key).replace(Ei, "$&/") + "/") + e)), t.push(s)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Ci(e)) for (var i = 0; i < e.length; i++) {
    a = e[i];
    var c = r + Gs(a, i);
    o += Bl(a, t, n, c, s);
  }
  else if (c = Um(e), typeof c == "function") for (e = c.call(e), i = 0; !(a = e.next()).done; ) a = a.value, c = r + Gs(a, i++), o += Bl(a, t, n, c, s);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function kl(e, t, n) {
  if (e == null) return e;
  var r = [], s = 0;
  return Bl(e, r, "", "", function(a) {
    return t.call(n, a, s++);
  }), r;
}
function Qm(e) {
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
var Ke = { current: null }, Ql = { transition: null }, Hm = { ReactCurrentDispatcher: Ke, ReactCurrentBatchConfig: Ql, ReactCurrentOwner: bo };
function md() {
  throw Error("act(...) is not supported in production builds of React.");
}
ae.Children = { map: kl, forEach: function(e, t, n) {
  kl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return kl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return kl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!jo(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ae.Component = yr;
ae.Fragment = Am;
ae.Profiler = Dm;
ae.PureComponent = ko;
ae.StrictMode = Rm;
ae.Suspense = Fm;
ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hm;
ae.act = md;
ae.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = od({}, e.props), s = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = bo.current), t.key !== void 0 && (s = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (c in t) dd.call(t, c) && !ud.hasOwnProperty(c) && (r[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    i = Array(c);
    for (var d = 0; d < c; d++) i[d] = arguments[d + 2];
    r.children = i;
  }
  return { $$typeof: pl, type: e.type, key: s, ref: a, props: r, _owner: o };
};
ae.createContext = function(e) {
  return e = { $$typeof: zm, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Pm, _context: e }, e.Consumer = e;
};
ae.createElement = fd;
ae.createFactory = function(e) {
  var t = fd.bind(null, e);
  return t.type = e, t;
};
ae.createRef = function() {
  return { current: null };
};
ae.forwardRef = function(e) {
  return { $$typeof: Om, render: e };
};
ae.isValidElement = jo;
ae.lazy = function(e) {
  return { $$typeof: Wm, _payload: { _status: -1, _result: e }, _init: Qm };
};
ae.memo = function(e, t) {
  return { $$typeof: $m, type: e, compare: t === void 0 ? null : t };
};
ae.startTransition = function(e) {
  var t = Ql.transition;
  Ql.transition = {};
  try {
    e();
  } finally {
    Ql.transition = t;
  }
};
ae.unstable_act = md;
ae.useCallback = function(e, t) {
  return Ke.current.useCallback(e, t);
};
ae.useContext = function(e) {
  return Ke.current.useContext(e);
};
ae.useDebugValue = function() {
};
ae.useDeferredValue = function(e) {
  return Ke.current.useDeferredValue(e);
};
ae.useEffect = function(e, t) {
  return Ke.current.useEffect(e, t);
};
ae.useId = function() {
  return Ke.current.useId();
};
ae.useImperativeHandle = function(e, t, n) {
  return Ke.current.useImperativeHandle(e, t, n);
};
ae.useInsertionEffect = function(e, t) {
  return Ke.current.useInsertionEffect(e, t);
};
ae.useLayoutEffect = function(e, t) {
  return Ke.current.useLayoutEffect(e, t);
};
ae.useMemo = function(e, t) {
  return Ke.current.useMemo(e, t);
};
ae.useReducer = function(e, t, n) {
  return Ke.current.useReducer(e, t, n);
};
ae.useRef = function(e) {
  return Ke.current.useRef(e);
};
ae.useState = function(e) {
  return Ke.current.useState(e);
};
ae.useSyncExternalStore = function(e, t, n) {
  return Ke.current.useSyncExternalStore(e, t, n);
};
ae.useTransition = function() {
  return Ke.current.useTransition();
};
ae.version = "18.3.1";
sd.exports = ae;
var p = sd.exports;
const rn = /* @__PURE__ */ Tm(p);
var pd = { exports: {} }, ct = {}, hd = { exports: {} }, gd = {};
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
  function t(C, T) {
    var P = C.length;
    C.push(T);
    e: for (; 0 < P; ) {
      var U = P - 1 >>> 1, R = C[U];
      if (0 < s(R, T)) C[U] = T, C[P] = R, P = U;
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var T = C[0], P = C.pop();
    if (P !== T) {
      C[0] = P;
      e: for (var U = 0, R = C.length, F = R >>> 1; U < F; ) {
        var O = 2 * (U + 1) - 1, Z = C[O], re = O + 1, de = C[re];
        if (0 > s(Z, P)) re < R && 0 > s(de, Z) ? (C[U] = de, C[re] = P, U = re) : (C[U] = Z, C[O] = P, U = O);
        else if (re < R && 0 > s(de, P)) C[U] = de, C[re] = P, U = re;
        else break e;
      }
    }
    return T;
  }
  function s(C, T) {
    var P = C.sortIndex - T.sortIndex;
    return P !== 0 ? P : C.id - T.id;
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
  var c = [], d = [], h = 1, v = null, g = 3, b = !1, w = !1, x = !1, S = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function u(C) {
    for (var T = n(d); T !== null; ) {
      if (T.callback === null) r(d);
      else if (T.startTime <= C) r(d), T.sortIndex = T.expirationTime, t(c, T);
      else break;
      T = n(d);
    }
  }
  function y(C) {
    if (x = !1, u(C), !w) if (n(c) !== null) w = !0, M(_);
    else {
      var T = n(d);
      T !== null && A(y, T.startTime - C);
    }
  }
  function _(C, T) {
    w = !1, x && (x = !1, f(E), E = -1), b = !0;
    var P = g;
    try {
      for (u(T), v = n(c); v !== null && (!(v.expirationTime > T) || C && !L()); ) {
        var U = v.callback;
        if (typeof U == "function") {
          v.callback = null, g = v.priorityLevel;
          var R = U(v.expirationTime <= T);
          T = e.unstable_now(), typeof R == "function" ? v.callback = R : v === n(c) && r(c), u(T);
        } else r(c);
        v = n(c);
      }
      if (v !== null) var F = !0;
      else {
        var O = n(d);
        O !== null && A(y, O.startTime - T), F = !1;
      }
      return F;
    } finally {
      v = null, g = P, b = !1;
    }
  }
  var k = !1, j = null, E = -1, D = 5, N = -1;
  function L() {
    return !(e.unstable_now() - N < D);
  }
  function $() {
    if (j !== null) {
      var C = e.unstable_now();
      N = C;
      var T = !0;
      try {
        T = j(!0, C);
      } finally {
        T ? Q() : (k = !1, j = null);
      }
    } else k = !1;
  }
  var Q;
  if (typeof m == "function") Q = function() {
    m($);
  };
  else if (typeof MessageChannel < "u") {
    var I = new MessageChannel(), z = I.port2;
    I.port1.onmessage = $, Q = function() {
      z.postMessage(null);
    };
  } else Q = function() {
    S($, 0);
  };
  function M(C) {
    j = C, k || (k = !0, Q());
  }
  function A(C, T) {
    E = S(function() {
      C(e.unstable_now());
    }, T);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    w || b || (w = !0, M(_));
  }, e.unstable_forceFrameRate = function(C) {
    0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < C ? Math.floor(1e3 / C) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return g;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(C) {
    switch (g) {
      case 1:
      case 2:
      case 3:
        var T = 3;
        break;
      default:
        T = g;
    }
    var P = g;
    g = T;
    try {
      return C();
    } finally {
      g = P;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(C, T) {
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
    var P = g;
    g = C;
    try {
      return T();
    } finally {
      g = P;
    }
  }, e.unstable_scheduleCallback = function(C, T, P) {
    var U = e.unstable_now();
    switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? U + P : U) : P = U, C) {
      case 1:
        var R = -1;
        break;
      case 2:
        R = 250;
        break;
      case 5:
        R = 1073741823;
        break;
      case 4:
        R = 1e4;
        break;
      default:
        R = 5e3;
    }
    return R = P + R, C = { id: h++, callback: T, priorityLevel: C, startTime: P, expirationTime: R, sortIndex: -1 }, P > U ? (C.sortIndex = P, t(d, C), n(c) === null && C === n(d) && (x ? (f(E), E = -1) : x = !0, A(y, P - U))) : (C.sortIndex = R, t(c, C), w || b || (w = !0, M(_))), C;
  }, e.unstable_shouldYield = L, e.unstable_wrapCallback = function(C) {
    var T = g;
    return function() {
      var P = g;
      g = T;
      try {
        return C.apply(this, arguments);
      } finally {
        g = P;
      }
    };
  };
})(gd);
hd.exports = gd;
var Km = hd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gm = p, it = Km;
function B(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var yd = /* @__PURE__ */ new Set(), Hr = {};
function Pn(e, t) {
  ir(e, t), ir(e + "Capture", t);
}
function ir(e, t) {
  for (Hr[e] = t, e = 0; e < t.length; e++) yd.add(t[e]);
}
var Bt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ja = Object.prototype.hasOwnProperty, qm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ni = {}, Ii = {};
function Ym(e) {
  return ja.call(Ii, e) ? !0 : ja.call(Ni, e) ? !1 : qm.test(e) ? Ii[e] = !0 : (Ni[e] = !0, !1);
}
function Xm(e, t, n, r) {
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
function Zm(e, t, n, r) {
  if (t === null || typeof t > "u" || Xm(e, t, n, r)) return !0;
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
function Ge(e, t, n, r, s, a, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
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
var Co = /[\-:]([a-z])/g;
function Eo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Co,
    Eo
  );
  Fe[t] = new Ge(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Co, Eo);
  Fe[t] = new Ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Co, Eo);
  Fe[t] = new Ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Fe[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Fe.xlinkHref = new Ge("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Fe[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function No(e, t, n, r) {
  var s = Fe.hasOwnProperty(t) ? Fe[t] : null;
  (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Zm(t, n, s, r) && (n = null), r || s === null ? Ym(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName, r = s.attributeNamespace, n === null ? e.removeAttribute(t) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var qt = Gm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Sl = Symbol.for("react.element"), Vn = Symbol.for("react.portal"), Bn = Symbol.for("react.fragment"), Io = Symbol.for("react.strict_mode"), Ca = Symbol.for("react.profiler"), vd = Symbol.for("react.provider"), wd = Symbol.for("react.context"), Mo = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Na = Symbol.for("react.suspense_list"), To = Symbol.for("react.memo"), Jt = Symbol.for("react.lazy"), xd = Symbol.for("react.offscreen"), Mi = Symbol.iterator;
function Sr(e) {
  return e === null || typeof e != "object" ? null : (e = Mi && e[Mi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ce = Object.assign, qs;
function Lr(e) {
  if (qs === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    qs = t && t[1] || "";
  }
  return `
` + qs + e;
}
var Ys = !1;
function Xs(e, t) {
  if (!e || Ys) return "";
  Ys = !0;
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
      for (var s = d.stack.split(`
`), a = r.stack.split(`
`), o = s.length - 1, i = a.length - 1; 1 <= o && 0 <= i && s[o] !== a[i]; ) i--;
      for (; 1 <= o && 0 <= i; o--, i--) if (s[o] !== a[i]) {
        if (o !== 1 || i !== 1)
          do
            if (o--, i--, 0 > i || s[o] !== a[i]) {
              var c = `
` + s[o].replace(" at new ", " at ");
              return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c;
            }
          while (1 <= o && 0 <= i);
        break;
      }
    }
  } finally {
    Ys = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Lr(e) : "";
}
function Jm(e) {
  switch (e.tag) {
    case 5:
      return Lr(e.type);
    case 16:
      return Lr("Lazy");
    case 13:
      return Lr("Suspense");
    case 19:
      return Lr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Xs(e.type, !1), e;
    case 11:
      return e = Xs(e.type.render, !1), e;
    case 1:
      return e = Xs(e.type, !0), e;
    default:
      return "";
  }
}
function Ia(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Bn:
      return "Fragment";
    case Vn:
      return "Portal";
    case Ca:
      return "Profiler";
    case Io:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Na:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case wd:
      return (e.displayName || "Context") + ".Consumer";
    case vd:
      return (e._context.displayName || "Context") + ".Provider";
    case Mo:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case To:
      return t = e.displayName || null, t !== null ? t : Ia(e.type) || "Memo";
    case Jt:
      t = e._payload, e = e._init;
      try {
        return Ia(e(t));
      } catch {
      }
  }
  return null;
}
function ep(e) {
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
      return Ia(t);
    case 8:
      return t === Io ? "StrictMode" : "Mode";
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
function hn(e) {
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
function _d(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function tp(e) {
  var t = _d(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var s = n.get, a = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return s.call(this);
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
function bl(e) {
  e._valueTracker || (e._valueTracker = tp(e));
}
function kd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = _d(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ls(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ma(e, t) {
  var n = t.checked;
  return Ce({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ti(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = hn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Sd(e, t) {
  t = t.checked, t != null && No(e, "checked", t, !1);
}
function Ta(e, t) {
  Sd(e, t);
  var n = hn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? La(e, t.type, n) : t.hasOwnProperty("defaultValue") && La(e, t.type, hn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Li(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function La(e, t, n) {
  (t !== "number" || ls(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ar = Array.isArray;
function tr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++) s = t.hasOwnProperty("$" + e[n].value), e[n].selected !== s && (e[n].selected = s), s && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + hn(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        e[s].selected = !0, r && (e[s].defaultSelected = !0);
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function Aa(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(B(91));
  return Ce({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ai(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(B(92));
      if (Ar(n)) {
        if (1 < n.length) throw Error(B(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: hn(n) };
}
function bd(e, t) {
  var n = hn(t.value), r = hn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ri(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function jd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ra(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? jd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var jl, Cd = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, s) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, s);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (jl = jl || document.createElement("div"), jl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = jl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Kr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Pr = {
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
}, np = ["Webkit", "ms", "Moz", "O"];
Object.keys(Pr).forEach(function(e) {
  np.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Pr[t] = Pr[e];
  });
});
function Ed(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Pr.hasOwnProperty(e) && Pr[e] ? ("" + t).trim() : t + "px";
}
function Nd(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, s = Ed(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : e[n] = s;
  }
}
var rp = Ce({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Da(e, t) {
  if (t) {
    if (rp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(B(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(B(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(B(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(B(62));
  }
}
function Pa(e, t) {
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
var za = null;
function Lo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Oa = null, nr = null, rr = null;
function Di(e) {
  if (e = yl(e)) {
    if (typeof Oa != "function") throw Error(B(280));
    var t = e.stateNode;
    t && (t = As(t), Oa(e.stateNode, e.type, t));
  }
}
function Id(e) {
  nr ? rr ? rr.push(e) : rr = [e] : nr = e;
}
function Md() {
  if (nr) {
    var e = nr, t = rr;
    if (rr = nr = null, Di(e), t) for (e = 0; e < t.length; e++) Di(t[e]);
  }
}
function Td(e, t) {
  return e(t);
}
function Ld() {
}
var Zs = !1;
function Ad(e, t, n) {
  if (Zs) return e(t, n);
  Zs = !0;
  try {
    return Td(e, t, n);
  } finally {
    Zs = !1, (nr !== null || rr !== null) && (Ld(), Md());
  }
}
function Gr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = As(n);
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
  if (n && typeof n != "function") throw Error(B(231, t, typeof n));
  return n;
}
var Fa = !1;
if (Bt) try {
  var br = {};
  Object.defineProperty(br, "passive", { get: function() {
    Fa = !0;
  } }), window.addEventListener("test", br, br), window.removeEventListener("test", br, br);
} catch {
  Fa = !1;
}
function lp(e, t, n, r, s, a, o, i, c) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (h) {
    this.onError(h);
  }
}
var zr = !1, ss = null, as = !1, $a = null, sp = { onError: function(e) {
  zr = !0, ss = e;
} };
function ap(e, t, n, r, s, a, o, i, c) {
  zr = !1, ss = null, lp.apply(sp, arguments);
}
function op(e, t, n, r, s, a, o, i, c) {
  if (ap.apply(this, arguments), zr) {
    if (zr) {
      var d = ss;
      zr = !1, ss = null;
    } else throw Error(B(198));
    as || (as = !0, $a = d);
  }
}
function zn(e) {
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
function Rd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Pi(e) {
  if (zn(e) !== e) throw Error(B(188));
}
function ip(e) {
  var t = e.alternate;
  if (!t) {
    if (t = zn(e), t === null) throw Error(B(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var s = n.return;
    if (s === null) break;
    var a = s.alternate;
    if (a === null) {
      if (r = s.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === a.child) {
      for (a = s.child; a; ) {
        if (a === n) return Pi(s), e;
        if (a === r) return Pi(s), t;
        a = a.sibling;
      }
      throw Error(B(188));
    }
    if (n.return !== r.return) n = s, r = a;
    else {
      for (var o = !1, i = s.child; i; ) {
        if (i === n) {
          o = !0, n = s, r = a;
          break;
        }
        if (i === r) {
          o = !0, r = s, n = a;
          break;
        }
        i = i.sibling;
      }
      if (!o) {
        for (i = a.child; i; ) {
          if (i === n) {
            o = !0, n = a, r = s;
            break;
          }
          if (i === r) {
            o = !0, r = a, n = s;
            break;
          }
          i = i.sibling;
        }
        if (!o) throw Error(B(189));
      }
    }
    if (n.alternate !== r) throw Error(B(190));
  }
  if (n.tag !== 3) throw Error(B(188));
  return n.stateNode.current === n ? e : t;
}
function Dd(e) {
  return e = ip(e), e !== null ? Pd(e) : null;
}
function Pd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Pd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var zd = it.unstable_scheduleCallback, zi = it.unstable_cancelCallback, cp = it.unstable_shouldYield, dp = it.unstable_requestPaint, Ie = it.unstable_now, up = it.unstable_getCurrentPriorityLevel, Ao = it.unstable_ImmediatePriority, Od = it.unstable_UserBlockingPriority, os = it.unstable_NormalPriority, fp = it.unstable_LowPriority, Fd = it.unstable_IdlePriority, Is = null, Dt = null;
function mp(e) {
  if (Dt && typeof Dt.onCommitFiberRoot == "function") try {
    Dt.onCommitFiberRoot(Is, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Nt = Math.clz32 ? Math.clz32 : gp, pp = Math.log, hp = Math.LN2;
function gp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (pp(e) / hp | 0) | 0;
}
var Cl = 64, El = 4194304;
function Rr(e) {
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
function is(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, s = e.suspendedLanes, a = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var i = o & ~s;
    i !== 0 ? r = Rr(i) : (a &= o, a !== 0 && (r = Rr(a)));
  } else o = n & ~s, o !== 0 ? r = Rr(o) : a !== 0 && (r = Rr(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & s) && (s = r & -r, a = t & -t, s >= a || s === 16 && (a & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Nt(t), s = 1 << n, r |= e[n], t &= ~s;
  return r;
}
function yp(e, t) {
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
function vp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - Nt(a), i = 1 << o, c = s[o];
    c === -1 ? (!(i & n) || i & r) && (s[o] = yp(i, t)) : c <= t && (e.expiredLanes |= i), a &= ~i;
  }
}
function Wa(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function $d() {
  var e = Cl;
  return Cl <<= 1, !(Cl & 4194240) && (Cl = 64), e;
}
function Js(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function hl(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Nt(t), e[t] = n;
}
function wp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - Nt(n), a = 1 << s;
    t[s] = 0, r[s] = -1, e[s] = -1, n &= ~a;
  }
}
function Ro(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Nt(n), s = 1 << r;
    s & t | e[r] & t && (e[r] |= t), n &= ~s;
  }
}
var ue = 0;
function Wd(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ud, Do, Vd, Bd, Qd, Ua = !1, Nl = [], an = null, on = null, cn = null, qr = /* @__PURE__ */ new Map(), Yr = /* @__PURE__ */ new Map(), tn = [], xp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Oi(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      an = null;
      break;
    case "dragenter":
    case "dragleave":
      on = null;
      break;
    case "mouseover":
    case "mouseout":
      cn = null;
      break;
    case "pointerover":
    case "pointerout":
      qr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Yr.delete(t.pointerId);
  }
}
function jr(e, t, n, r, s, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [s] }, t !== null && (t = yl(t), t !== null && Do(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
}
function _p(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return an = jr(an, e, t, n, r, s), !0;
    case "dragenter":
      return on = jr(on, e, t, n, r, s), !0;
    case "mouseover":
      return cn = jr(cn, e, t, n, r, s), !0;
    case "pointerover":
      var a = s.pointerId;
      return qr.set(a, jr(qr.get(a) || null, e, t, n, r, s)), !0;
    case "gotpointercapture":
      return a = s.pointerId, Yr.set(a, jr(Yr.get(a) || null, e, t, n, r, s)), !0;
  }
  return !1;
}
function Hd(e) {
  var t = Cn(e.target);
  if (t !== null) {
    var n = zn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Rd(n), t !== null) {
          e.blockedOn = t, Qd(e.priority, function() {
            Vd(n);
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
function Hl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Va(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      za = r, n.target.dispatchEvent(r), za = null;
    } else return t = yl(n), t !== null && Do(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Fi(e, t, n) {
  Hl(e) && n.delete(t);
}
function kp() {
  Ua = !1, an !== null && Hl(an) && (an = null), on !== null && Hl(on) && (on = null), cn !== null && Hl(cn) && (cn = null), qr.forEach(Fi), Yr.forEach(Fi);
}
function Cr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ua || (Ua = !0, it.unstable_scheduleCallback(it.unstable_NormalPriority, kp)));
}
function Xr(e) {
  function t(s) {
    return Cr(s, e);
  }
  if (0 < Nl.length) {
    Cr(Nl[0], e);
    for (var n = 1; n < Nl.length; n++) {
      var r = Nl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (an !== null && Cr(an, e), on !== null && Cr(on, e), cn !== null && Cr(cn, e), qr.forEach(t), Yr.forEach(t), n = 0; n < tn.length; n++) r = tn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < tn.length && (n = tn[0], n.blockedOn === null); ) Hd(n), n.blockedOn === null && tn.shift();
}
var lr = qt.ReactCurrentBatchConfig, cs = !0;
function Sp(e, t, n, r) {
  var s = ue, a = lr.transition;
  lr.transition = null;
  try {
    ue = 1, Po(e, t, n, r);
  } finally {
    ue = s, lr.transition = a;
  }
}
function bp(e, t, n, r) {
  var s = ue, a = lr.transition;
  lr.transition = null;
  try {
    ue = 4, Po(e, t, n, r);
  } finally {
    ue = s, lr.transition = a;
  }
}
function Po(e, t, n, r) {
  if (cs) {
    var s = Va(e, t, n, r);
    if (s === null) ca(e, t, r, ds, n), Oi(e, r);
    else if (_p(s, e, t, n, r)) r.stopPropagation();
    else if (Oi(e, r), t & 4 && -1 < xp.indexOf(e)) {
      for (; s !== null; ) {
        var a = yl(s);
        if (a !== null && Ud(a), a = Va(e, t, n, r), a === null && ca(e, t, r, ds, n), a === s) break;
        s = a;
      }
      s !== null && r.stopPropagation();
    } else ca(e, t, r, null, n);
  }
}
var ds = null;
function Va(e, t, n, r) {
  if (ds = null, e = Lo(r), e = Cn(e), e !== null) if (t = zn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Rd(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return ds = e, null;
}
function Kd(e) {
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
      switch (up()) {
        case Ao:
          return 1;
        case Od:
          return 4;
        case os:
        case fp:
          return 16;
        case Fd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ln = null, zo = null, Kl = null;
function Gd() {
  if (Kl) return Kl;
  var e, t = zo, n = t.length, r, s = "value" in ln ? ln.value : ln.textContent, a = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === s[a - r]; r++) ;
  return Kl = s.slice(e, 1 < r ? 1 - r : void 0);
}
function Gl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Il() {
  return !0;
}
function $i() {
  return !1;
}
function dt(e) {
  function t(n, r, s, a, o) {
    this._reactName = n, this._targetInst = s, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(a) : a[i]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? Il : $i, this.isPropagationStopped = $i, this;
  }
  return Ce(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Il);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Il);
  }, persist: function() {
  }, isPersistent: Il }), t;
}
var vr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Oo = dt(vr), gl = Ce({}, vr, { view: 0, detail: 0 }), jp = dt(gl), ea, ta, Er, Ms = Ce({}, gl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Fo, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Er && (Er && e.type === "mousemove" ? (ea = e.screenX - Er.screenX, ta = e.screenY - Er.screenY) : ta = ea = 0, Er = e), ea);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ta;
} }), Wi = dt(Ms), Cp = Ce({}, Ms, { dataTransfer: 0 }), Ep = dt(Cp), Np = Ce({}, gl, { relatedTarget: 0 }), na = dt(Np), Ip = Ce({}, vr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Mp = dt(Ip), Tp = Ce({}, vr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Lp = dt(Tp), Ap = Ce({}, vr, { data: 0 }), Ui = dt(Ap), Rp = {
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
}, Dp = {
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
}, Pp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function zp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Pp[e]) ? !!t[e] : !1;
}
function Fo() {
  return zp;
}
var Op = Ce({}, gl, { key: function(e) {
  if (e.key) {
    var t = Rp[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Gl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Dp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Fo, charCode: function(e) {
  return e.type === "keypress" ? Gl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Gl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Fp = dt(Op), $p = Ce({}, Ms, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Vi = dt($p), Wp = Ce({}, gl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Fo }), Up = dt(Wp), Vp = Ce({}, vr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Bp = dt(Vp), Qp = Ce({}, Ms, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Hp = dt(Qp), Kp = [9, 13, 27, 32], $o = Bt && "CompositionEvent" in window, Or = null;
Bt && "documentMode" in document && (Or = document.documentMode);
var Gp = Bt && "TextEvent" in window && !Or, qd = Bt && (!$o || Or && 8 < Or && 11 >= Or), Bi = " ", Qi = !1;
function Yd(e, t) {
  switch (e) {
    case "keyup":
      return Kp.indexOf(t.keyCode) !== -1;
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
function Xd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Qn = !1;
function qp(e, t) {
  switch (e) {
    case "compositionend":
      return Xd(t);
    case "keypress":
      return t.which !== 32 ? null : (Qi = !0, Bi);
    case "textInput":
      return e = t.data, e === Bi && Qi ? null : e;
    default:
      return null;
  }
}
function Yp(e, t) {
  if (Qn) return e === "compositionend" || !$o && Yd(e, t) ? (e = Gd(), Kl = zo = ln = null, Qn = !1, e) : null;
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
      return qd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Xp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Hi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Xp[e.type] : t === "textarea";
}
function Zd(e, t, n, r) {
  Id(r), t = us(t, "onChange"), 0 < t.length && (n = new Oo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Fr = null, Zr = null;
function Zp(e) {
  cu(e, 0);
}
function Ts(e) {
  var t = Gn(e);
  if (kd(t)) return e;
}
function Jp(e, t) {
  if (e === "change") return t;
}
var Jd = !1;
if (Bt) {
  var ra;
  if (Bt) {
    var la = "oninput" in document;
    if (!la) {
      var Ki = document.createElement("div");
      Ki.setAttribute("oninput", "return;"), la = typeof Ki.oninput == "function";
    }
    ra = la;
  } else ra = !1;
  Jd = ra && (!document.documentMode || 9 < document.documentMode);
}
function Gi() {
  Fr && (Fr.detachEvent("onpropertychange", eu), Zr = Fr = null);
}
function eu(e) {
  if (e.propertyName === "value" && Ts(Zr)) {
    var t = [];
    Zd(t, Zr, e, Lo(e)), Ad(Zp, t);
  }
}
function eh(e, t, n) {
  e === "focusin" ? (Gi(), Fr = t, Zr = n, Fr.attachEvent("onpropertychange", eu)) : e === "focusout" && Gi();
}
function th(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ts(Zr);
}
function nh(e, t) {
  if (e === "click") return Ts(t);
}
function rh(e, t) {
  if (e === "input" || e === "change") return Ts(t);
}
function lh(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Mt = typeof Object.is == "function" ? Object.is : lh;
function Jr(e, t) {
  if (Mt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!ja.call(t, s) || !Mt(e[s], t[s])) return !1;
  }
  return !0;
}
function qi(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Yi(e, t) {
  var n = qi(e);
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
    n = qi(n);
  }
}
function tu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? tu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function nu() {
  for (var e = window, t = ls(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ls(e.document);
  }
  return t;
}
function Wo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function sh(e) {
  var t = nu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && tu(n.ownerDocument.documentElement, n)) {
    if (r !== null && Wo(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var s = n.textContent.length, a = Math.min(r.start, s);
        r = r.end === void 0 ? a : Math.min(r.end, s), !e.extend && a > r && (s = r, r = a, a = s), s = Yi(n, a);
        var o = Yi(
          n,
          r
        );
        s && o && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(s.node, s.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var ah = Bt && "documentMode" in document && 11 >= document.documentMode, Hn = null, Ba = null, $r = null, Qa = !1;
function Xi(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Qa || Hn == null || Hn !== ls(r) || (r = Hn, "selectionStart" in r && Wo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), $r && Jr($r, r) || ($r = r, r = us(Ba, "onSelect"), 0 < r.length && (t = new Oo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Hn)));
}
function Ml(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Kn = { animationend: Ml("Animation", "AnimationEnd"), animationiteration: Ml("Animation", "AnimationIteration"), animationstart: Ml("Animation", "AnimationStart"), transitionend: Ml("Transition", "TransitionEnd") }, sa = {}, ru = {};
Bt && (ru = document.createElement("div").style, "AnimationEvent" in window || (delete Kn.animationend.animation, delete Kn.animationiteration.animation, delete Kn.animationstart.animation), "TransitionEvent" in window || delete Kn.transitionend.transition);
function Ls(e) {
  if (sa[e]) return sa[e];
  if (!Kn[e]) return e;
  var t = Kn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ru) return sa[e] = t[n];
  return e;
}
var lu = Ls("animationend"), su = Ls("animationiteration"), au = Ls("animationstart"), ou = Ls("transitionend"), iu = /* @__PURE__ */ new Map(), Zi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function vn(e, t) {
  iu.set(e, t), Pn(t, [e]);
}
for (var aa = 0; aa < Zi.length; aa++) {
  var oa = Zi[aa], oh = oa.toLowerCase(), ih = oa[0].toUpperCase() + oa.slice(1);
  vn(oh, "on" + ih);
}
vn(lu, "onAnimationEnd");
vn(su, "onAnimationIteration");
vn(au, "onAnimationStart");
vn("dblclick", "onDoubleClick");
vn("focusin", "onFocus");
vn("focusout", "onBlur");
vn(ou, "onTransitionEnd");
ir("onMouseEnter", ["mouseout", "mouseover"]);
ir("onMouseLeave", ["mouseout", "mouseover"]);
ir("onPointerEnter", ["pointerout", "pointerover"]);
ir("onPointerLeave", ["pointerout", "pointerover"]);
Pn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Pn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Pn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Pn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Pn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Pn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Dr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ch = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));
function Ji(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, op(r, t, void 0, e), e.currentTarget = null;
}
function cu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], s = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var i = r[o], c = i.instance, d = i.currentTarget;
        if (i = i.listener, c !== a && s.isPropagationStopped()) break e;
        Ji(s, i, d), a = c;
      }
      else for (o = 0; o < r.length; o++) {
        if (i = r[o], c = i.instance, d = i.currentTarget, i = i.listener, c !== a && s.isPropagationStopped()) break e;
        Ji(s, i, d), a = c;
      }
    }
  }
  if (as) throw e = $a, as = !1, $a = null, e;
}
function we(e, t) {
  var n = t[Ya];
  n === void 0 && (n = t[Ya] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (du(t, e, 2, !1), n.add(r));
}
function ia(e, t, n) {
  var r = 0;
  t && (r |= 4), du(n, e, r, t);
}
var Tl = "_reactListening" + Math.random().toString(36).slice(2);
function el(e) {
  if (!e[Tl]) {
    e[Tl] = !0, yd.forEach(function(n) {
      n !== "selectionchange" && (ch.has(n) || ia(n, !1, e), ia(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Tl] || (t[Tl] = !0, ia("selectionchange", !1, t));
  }
}
function du(e, t, n, r) {
  switch (Kd(t)) {
    case 1:
      var s = Sp;
      break;
    case 4:
      s = bp;
      break;
    default:
      s = Po;
  }
  n = s.bind(null, t, n, e), s = void 0, !Fa || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), r ? s !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: s }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, { passive: s }) : e.addEventListener(t, n, !1);
}
function ca(e, t, n, r, s) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var i = r.stateNode.containerInfo;
      if (i === s || i.nodeType === 8 && i.parentNode === s) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var c = o.tag;
        if ((c === 3 || c === 4) && (c = o.stateNode.containerInfo, c === s || c.nodeType === 8 && c.parentNode === s)) return;
        o = o.return;
      }
      for (; i !== null; ) {
        if (o = Cn(i), o === null) return;
        if (c = o.tag, c === 5 || c === 6) {
          r = a = o;
          continue e;
        }
        i = i.parentNode;
      }
    }
    r = r.return;
  }
  Ad(function() {
    var d = a, h = Lo(n), v = [];
    e: {
      var g = iu.get(e);
      if (g !== void 0) {
        var b = Oo, w = e;
        switch (e) {
          case "keypress":
            if (Gl(n) === 0) break e;
          case "keydown":
          case "keyup":
            b = Fp;
            break;
          case "focusin":
            w = "focus", b = na;
            break;
          case "focusout":
            w = "blur", b = na;
            break;
          case "beforeblur":
          case "afterblur":
            b = na;
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
            b = Wi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            b = Ep;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            b = Up;
            break;
          case lu:
          case su:
          case au:
            b = Mp;
            break;
          case ou:
            b = Bp;
            break;
          case "scroll":
            b = jp;
            break;
          case "wheel":
            b = Hp;
            break;
          case "copy":
          case "cut":
          case "paste":
            b = Lp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            b = Vi;
        }
        var x = (t & 4) !== 0, S = !x && e === "scroll", f = x ? g !== null ? g + "Capture" : null : g;
        x = [];
        for (var m = d, u; m !== null; ) {
          u = m;
          var y = u.stateNode;
          if (u.tag === 5 && y !== null && (u = y, f !== null && (y = Gr(m, f), y != null && x.push(tl(m, y, u)))), S) break;
          m = m.return;
        }
        0 < x.length && (g = new b(g, w, null, n, h), v.push({ event: g, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (g = e === "mouseover" || e === "pointerover", b = e === "mouseout" || e === "pointerout", g && n !== za && (w = n.relatedTarget || n.fromElement) && (Cn(w) || w[Qt])) break e;
        if ((b || g) && (g = h.window === h ? h : (g = h.ownerDocument) ? g.defaultView || g.parentWindow : window, b ? (w = n.relatedTarget || n.toElement, b = d, w = w ? Cn(w) : null, w !== null && (S = zn(w), w !== S || w.tag !== 5 && w.tag !== 6) && (w = null)) : (b = null, w = d), b !== w)) {
          if (x = Wi, y = "onMouseLeave", f = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (x = Vi, y = "onPointerLeave", f = "onPointerEnter", m = "pointer"), S = b == null ? g : Gn(b), u = w == null ? g : Gn(w), g = new x(y, m + "leave", b, n, h), g.target = S, g.relatedTarget = u, y = null, Cn(h) === d && (x = new x(f, m + "enter", w, n, h), x.target = u, x.relatedTarget = S, y = x), S = y, b && w) t: {
            for (x = b, f = w, m = 0, u = x; u; u = Wn(u)) m++;
            for (u = 0, y = f; y; y = Wn(y)) u++;
            for (; 0 < m - u; ) x = Wn(x), m--;
            for (; 0 < u - m; ) f = Wn(f), u--;
            for (; m--; ) {
              if (x === f || f !== null && x === f.alternate) break t;
              x = Wn(x), f = Wn(f);
            }
            x = null;
          }
          else x = null;
          b !== null && ec(v, g, b, x, !1), w !== null && S !== null && ec(v, S, w, x, !0);
        }
      }
      e: {
        if (g = d ? Gn(d) : window, b = g.nodeName && g.nodeName.toLowerCase(), b === "select" || b === "input" && g.type === "file") var _ = Jp;
        else if (Hi(g)) if (Jd) _ = rh;
        else {
          _ = th;
          var k = eh;
        }
        else (b = g.nodeName) && b.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (_ = nh);
        if (_ && (_ = _(e, d))) {
          Zd(v, _, n, h);
          break e;
        }
        k && k(e, g, d), e === "focusout" && (k = g._wrapperState) && k.controlled && g.type === "number" && La(g, "number", g.value);
      }
      switch (k = d ? Gn(d) : window, e) {
        case "focusin":
          (Hi(k) || k.contentEditable === "true") && (Hn = k, Ba = d, $r = null);
          break;
        case "focusout":
          $r = Ba = Hn = null;
          break;
        case "mousedown":
          Qa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Qa = !1, Xi(v, n, h);
          break;
        case "selectionchange":
          if (ah) break;
        case "keydown":
        case "keyup":
          Xi(v, n, h);
      }
      var j;
      if ($o) e: {
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
      else Qn ? Yd(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (qd && n.locale !== "ko" && (Qn || E !== "onCompositionStart" ? E === "onCompositionEnd" && Qn && (j = Gd()) : (ln = h, zo = "value" in ln ? ln.value : ln.textContent, Qn = !0)), k = us(d, E), 0 < k.length && (E = new Ui(E, e, null, n, h), v.push({ event: E, listeners: k }), j ? E.data = j : (j = Xd(n), j !== null && (E.data = j)))), (j = Gp ? qp(e, n) : Yp(e, n)) && (d = us(d, "onBeforeInput"), 0 < d.length && (h = new Ui("onBeforeInput", "beforeinput", null, n, h), v.push({ event: h, listeners: d }), h.data = j));
    }
    cu(v, t);
  });
}
function tl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function us(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e, a = s.stateNode;
    s.tag === 5 && a !== null && (s = a, a = Gr(e, n), a != null && r.unshift(tl(e, a, s)), a = Gr(e, t), a != null && r.push(tl(e, a, s))), e = e.return;
  }
  return r;
}
function Wn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ec(e, t, n, r, s) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var i = n, c = i.alternate, d = i.stateNode;
    if (c !== null && c === r) break;
    i.tag === 5 && d !== null && (i = d, s ? (c = Gr(n, a), c != null && o.unshift(tl(n, c, i))) : s || (c = Gr(n, a), c != null && o.push(tl(n, c, i)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var dh = /\r\n?/g, uh = /\u0000|\uFFFD/g;
function tc(e) {
  return (typeof e == "string" ? e : "" + e).replace(dh, `
`).replace(uh, "");
}
function Ll(e, t, n) {
  if (t = tc(t), tc(e) !== t && n) throw Error(B(425));
}
function fs() {
}
var Ha = null, Ka = null;
function Ga(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var qa = typeof setTimeout == "function" ? setTimeout : void 0, fh = typeof clearTimeout == "function" ? clearTimeout : void 0, nc = typeof Promise == "function" ? Promise : void 0, mh = typeof queueMicrotask == "function" ? queueMicrotask : typeof nc < "u" ? function(e) {
  return nc.resolve(null).then(e).catch(ph);
} : qa;
function ph(e) {
  setTimeout(function() {
    throw e;
  });
}
function da(e, t) {
  var n = t, r = 0;
  do {
    var s = n.nextSibling;
    if (e.removeChild(n), s && s.nodeType === 8) if (n = s.data, n === "/$") {
      if (r === 0) {
        e.removeChild(s), Xr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = s;
  } while (n);
  Xr(t);
}
function dn(e) {
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
function rc(e) {
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
var wr = Math.random().toString(36).slice(2), Rt = "__reactFiber$" + wr, nl = "__reactProps$" + wr, Qt = "__reactContainer$" + wr, Ya = "__reactEvents$" + wr, hh = "__reactListeners$" + wr, gh = "__reactHandles$" + wr;
function Cn(e) {
  var t = e[Rt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Qt] || n[Rt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = rc(e); e !== null; ) {
        if (n = e[Rt]) return n;
        e = rc(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function yl(e) {
  return e = e[Rt] || e[Qt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Gn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(B(33));
}
function As(e) {
  return e[nl] || null;
}
var Xa = [], qn = -1;
function wn(e) {
  return { current: e };
}
function xe(e) {
  0 > qn || (e.current = Xa[qn], Xa[qn] = null, qn--);
}
function ve(e, t) {
  qn++, Xa[qn] = e.current, e.current = t;
}
var gn = {}, Be = wn(gn), tt = wn(!1), Tn = gn;
function cr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return gn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var s = {}, a;
  for (a in n) s[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = s), s;
}
function nt(e) {
  return e = e.childContextTypes, e != null;
}
function ms() {
  xe(tt), xe(Be);
}
function lc(e, t, n) {
  if (Be.current !== gn) throw Error(B(168));
  ve(Be, t), ve(tt, n);
}
function uu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(B(108, ep(e) || "Unknown", s));
  return Ce({}, n, r);
}
function ps(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || gn, Tn = Be.current, ve(Be, e), ve(tt, tt.current), !0;
}
function sc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(B(169));
  n ? (e = uu(e, t, Tn), r.__reactInternalMemoizedMergedChildContext = e, xe(tt), xe(Be), ve(Be, e)) : xe(tt), ve(tt, n);
}
var $t = null, Rs = !1, ua = !1;
function fu(e) {
  $t === null ? $t = [e] : $t.push(e);
}
function yh(e) {
  Rs = !0, fu(e);
}
function xn() {
  if (!ua && $t !== null) {
    ua = !0;
    var e = 0, t = ue;
    try {
      var n = $t;
      for (ue = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      $t = null, Rs = !1;
    } catch (s) {
      throw $t !== null && ($t = $t.slice(e + 1)), zd(Ao, xn), s;
    } finally {
      ue = t, ua = !1;
    }
  }
  return null;
}
var Yn = [], Xn = 0, hs = null, gs = 0, mt = [], pt = 0, Ln = null, Wt = 1, Ut = "";
function bn(e, t) {
  Yn[Xn++] = gs, Yn[Xn++] = hs, hs = e, gs = t;
}
function mu(e, t, n) {
  mt[pt++] = Wt, mt[pt++] = Ut, mt[pt++] = Ln, Ln = e;
  var r = Wt;
  e = Ut;
  var s = 32 - Nt(r) - 1;
  r &= ~(1 << s), n += 1;
  var a = 32 - Nt(t) + s;
  if (30 < a) {
    var o = s - s % 5;
    a = (r & (1 << o) - 1).toString(32), r >>= o, s -= o, Wt = 1 << 32 - Nt(t) + s | n << s | r, Ut = a + e;
  } else Wt = 1 << a | n << s | r, Ut = e;
}
function Uo(e) {
  e.return !== null && (bn(e, 1), mu(e, 1, 0));
}
function Vo(e) {
  for (; e === hs; ) hs = Yn[--Xn], Yn[Xn] = null, gs = Yn[--Xn], Yn[Xn] = null;
  for (; e === Ln; ) Ln = mt[--pt], mt[pt] = null, Ut = mt[--pt], mt[pt] = null, Wt = mt[--pt], mt[pt] = null;
}
var ot = null, at = null, ke = !1, Ct = null;
function pu(e, t) {
  var n = ht(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ac(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ot = e, at = dn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ot = e, at = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ln !== null ? { id: Wt, overflow: Ut } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ht(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ot = e, at = null, !0) : !1;
    default:
      return !1;
  }
}
function Za(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ja(e) {
  if (ke) {
    var t = at;
    if (t) {
      var n = t;
      if (!ac(e, t)) {
        if (Za(e)) throw Error(B(418));
        t = dn(n.nextSibling);
        var r = ot;
        t && ac(e, t) ? pu(r, n) : (e.flags = e.flags & -4097 | 2, ke = !1, ot = e);
      }
    } else {
      if (Za(e)) throw Error(B(418));
      e.flags = e.flags & -4097 | 2, ke = !1, ot = e;
    }
  }
}
function oc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ot = e;
}
function Al(e) {
  if (e !== ot) return !1;
  if (!ke) return oc(e), ke = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ga(e.type, e.memoizedProps)), t && (t = at)) {
    if (Za(e)) throw hu(), Error(B(418));
    for (; t; ) pu(e, t), t = dn(t.nextSibling);
  }
  if (oc(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(B(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              at = dn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      at = null;
    }
  } else at = ot ? dn(e.stateNode.nextSibling) : null;
  return !0;
}
function hu() {
  for (var e = at; e; ) e = dn(e.nextSibling);
}
function dr() {
  at = ot = null, ke = !1;
}
function Bo(e) {
  Ct === null ? Ct = [e] : Ct.push(e);
}
var vh = qt.ReactCurrentBatchConfig;
function Nr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(B(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(B(147, e));
      var s = r, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(o) {
        var i = s.refs;
        o === null ? delete i[a] : i[a] = o;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string") throw Error(B(284));
    if (!n._owner) throw Error(B(290, e));
  }
  return e;
}
function Rl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(B(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ic(e) {
  var t = e._init;
  return t(e._payload);
}
function gu(e) {
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
  function s(f, m) {
    return f = pn(f, m), f.index = 0, f.sibling = null, f;
  }
  function a(f, m, u) {
    return f.index = u, e ? (u = f.alternate, u !== null ? (u = u.index, u < m ? (f.flags |= 2, m) : u) : (f.flags |= 2, m)) : (f.flags |= 1048576, m);
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function i(f, m, u, y) {
    return m === null || m.tag !== 6 ? (m = va(u, f.mode, y), m.return = f, m) : (m = s(m, u), m.return = f, m);
  }
  function c(f, m, u, y) {
    var _ = u.type;
    return _ === Bn ? h(f, m, u.props.children, y, u.key) : m !== null && (m.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Jt && ic(_) === m.type) ? (y = s(m, u.props), y.ref = Nr(f, m, u), y.return = f, y) : (y = ts(u.type, u.key, u.props, null, f.mode, y), y.ref = Nr(f, m, u), y.return = f, y);
  }
  function d(f, m, u, y) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== u.containerInfo || m.stateNode.implementation !== u.implementation ? (m = wa(u, f.mode, y), m.return = f, m) : (m = s(m, u.children || []), m.return = f, m);
  }
  function h(f, m, u, y, _) {
    return m === null || m.tag !== 7 ? (m = Mn(u, f.mode, y, _), m.return = f, m) : (m = s(m, u), m.return = f, m);
  }
  function v(f, m, u) {
    if (typeof m == "string" && m !== "" || typeof m == "number") return m = va("" + m, f.mode, u), m.return = f, m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Sl:
          return u = ts(m.type, m.key, m.props, null, f.mode, u), u.ref = Nr(f, null, m), u.return = f, u;
        case Vn:
          return m = wa(m, f.mode, u), m.return = f, m;
        case Jt:
          var y = m._init;
          return v(f, y(m._payload), u);
      }
      if (Ar(m) || Sr(m)) return m = Mn(m, f.mode, u, null), m.return = f, m;
      Rl(f, m);
    }
    return null;
  }
  function g(f, m, u, y) {
    var _ = m !== null ? m.key : null;
    if (typeof u == "string" && u !== "" || typeof u == "number") return _ !== null ? null : i(f, m, "" + u, y);
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case Sl:
          return u.key === _ ? c(f, m, u, y) : null;
        case Vn:
          return u.key === _ ? d(f, m, u, y) : null;
        case Jt:
          return _ = u._init, g(
            f,
            m,
            _(u._payload),
            y
          );
      }
      if (Ar(u) || Sr(u)) return _ !== null ? null : h(f, m, u, y, null);
      Rl(f, u);
    }
    return null;
  }
  function b(f, m, u, y, _) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return f = f.get(u) || null, i(m, f, "" + y, _);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Sl:
          return f = f.get(y.key === null ? u : y.key) || null, c(m, f, y, _);
        case Vn:
          return f = f.get(y.key === null ? u : y.key) || null, d(m, f, y, _);
        case Jt:
          var k = y._init;
          return b(f, m, u, k(y._payload), _);
      }
      if (Ar(y) || Sr(y)) return f = f.get(u) || null, h(m, f, y, _, null);
      Rl(m, y);
    }
    return null;
  }
  function w(f, m, u, y) {
    for (var _ = null, k = null, j = m, E = m = 0, D = null; j !== null && E < u.length; E++) {
      j.index > E ? (D = j, j = null) : D = j.sibling;
      var N = g(f, j, u[E], y);
      if (N === null) {
        j === null && (j = D);
        break;
      }
      e && j && N.alternate === null && t(f, j), m = a(N, m, E), k === null ? _ = N : k.sibling = N, k = N, j = D;
    }
    if (E === u.length) return n(f, j), ke && bn(f, E), _;
    if (j === null) {
      for (; E < u.length; E++) j = v(f, u[E], y), j !== null && (m = a(j, m, E), k === null ? _ = j : k.sibling = j, k = j);
      return ke && bn(f, E), _;
    }
    for (j = r(f, j); E < u.length; E++) D = b(j, f, E, u[E], y), D !== null && (e && D.alternate !== null && j.delete(D.key === null ? E : D.key), m = a(D, m, E), k === null ? _ = D : k.sibling = D, k = D);
    return e && j.forEach(function(L) {
      return t(f, L);
    }), ke && bn(f, E), _;
  }
  function x(f, m, u, y) {
    var _ = Sr(u);
    if (typeof _ != "function") throw Error(B(150));
    if (u = _.call(u), u == null) throw Error(B(151));
    for (var k = _ = null, j = m, E = m = 0, D = null, N = u.next(); j !== null && !N.done; E++, N = u.next()) {
      j.index > E ? (D = j, j = null) : D = j.sibling;
      var L = g(f, j, N.value, y);
      if (L === null) {
        j === null && (j = D);
        break;
      }
      e && j && L.alternate === null && t(f, j), m = a(L, m, E), k === null ? _ = L : k.sibling = L, k = L, j = D;
    }
    if (N.done) return n(
      f,
      j
    ), ke && bn(f, E), _;
    if (j === null) {
      for (; !N.done; E++, N = u.next()) N = v(f, N.value, y), N !== null && (m = a(N, m, E), k === null ? _ = N : k.sibling = N, k = N);
      return ke && bn(f, E), _;
    }
    for (j = r(f, j); !N.done; E++, N = u.next()) N = b(j, f, E, N.value, y), N !== null && (e && N.alternate !== null && j.delete(N.key === null ? E : N.key), m = a(N, m, E), k === null ? _ = N : k.sibling = N, k = N);
    return e && j.forEach(function($) {
      return t(f, $);
    }), ke && bn(f, E), _;
  }
  function S(f, m, u, y) {
    if (typeof u == "object" && u !== null && u.type === Bn && u.key === null && (u = u.props.children), typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case Sl:
          e: {
            for (var _ = u.key, k = m; k !== null; ) {
              if (k.key === _) {
                if (_ = u.type, _ === Bn) {
                  if (k.tag === 7) {
                    n(f, k.sibling), m = s(k, u.props.children), m.return = f, f = m;
                    break e;
                  }
                } else if (k.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Jt && ic(_) === k.type) {
                  n(f, k.sibling), m = s(k, u.props), m.ref = Nr(f, k, u), m.return = f, f = m;
                  break e;
                }
                n(f, k);
                break;
              } else t(f, k);
              k = k.sibling;
            }
            u.type === Bn ? (m = Mn(u.props.children, f.mode, y, u.key), m.return = f, f = m) : (y = ts(u.type, u.key, u.props, null, f.mode, y), y.ref = Nr(f, m, u), y.return = f, f = y);
          }
          return o(f);
        case Vn:
          e: {
            for (k = u.key; m !== null; ) {
              if (m.key === k) if (m.tag === 4 && m.stateNode.containerInfo === u.containerInfo && m.stateNode.implementation === u.implementation) {
                n(f, m.sibling), m = s(m, u.children || []), m.return = f, f = m;
                break e;
              } else {
                n(f, m);
                break;
              }
              else t(f, m);
              m = m.sibling;
            }
            m = wa(u, f.mode, y), m.return = f, f = m;
          }
          return o(f);
        case Jt:
          return k = u._init, S(f, m, k(u._payload), y);
      }
      if (Ar(u)) return w(f, m, u, y);
      if (Sr(u)) return x(f, m, u, y);
      Rl(f, u);
    }
    return typeof u == "string" && u !== "" || typeof u == "number" ? (u = "" + u, m !== null && m.tag === 6 ? (n(f, m.sibling), m = s(m, u), m.return = f, f = m) : (n(f, m), m = va(u, f.mode, y), m.return = f, f = m), o(f)) : n(f, m);
  }
  return S;
}
var ur = gu(!0), yu = gu(!1), ys = wn(null), vs = null, Zn = null, Qo = null;
function Ho() {
  Qo = Zn = vs = null;
}
function Ko(e) {
  var t = ys.current;
  xe(ys), e._currentValue = t;
}
function eo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function sr(e, t) {
  vs = e, Qo = Zn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (et = !0), e.firstContext = null);
}
function vt(e) {
  var t = e._currentValue;
  if (Qo !== e) if (e = { context: e, memoizedValue: t, next: null }, Zn === null) {
    if (vs === null) throw Error(B(308));
    Zn = e, vs.dependencies = { lanes: 0, firstContext: e };
  } else Zn = Zn.next = e;
  return t;
}
var En = null;
function Go(e) {
  En === null ? En = [e] : En.push(e);
}
function vu(e, t, n, r) {
  var s = t.interleaved;
  return s === null ? (n.next = n, Go(t)) : (n.next = s.next, s.next = n), t.interleaved = n, Ht(e, r);
}
function Ht(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var en = !1;
function qo(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function wu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Vt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function un(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, ie & 2) {
    var s = r.pending;
    return s === null ? t.next = t : (t.next = s.next, s.next = t), r.pending = t, Ht(e, n);
  }
  return s = r.interleaved, s === null ? (t.next = t, Go(r)) : (t.next = s.next, s.next = t), r.interleaved = t, Ht(e, n);
}
function ql(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ro(e, n);
  }
}
function cc(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var s = null, a = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        a === null ? s = a = o : a = a.next = o, n = n.next;
      } while (n !== null);
      a === null ? s = a = t : a = a.next = t;
    } else s = a = t;
    n = { baseState: r.baseState, firstBaseUpdate: s, lastBaseUpdate: a, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function ws(e, t, n, r) {
  var s = e.updateQueue;
  en = !1;
  var a = s.firstBaseUpdate, o = s.lastBaseUpdate, i = s.shared.pending;
  if (i !== null) {
    s.shared.pending = null;
    var c = i, d = c.next;
    c.next = null, o === null ? a = d : o.next = d, o = c;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, i = h.lastBaseUpdate, i !== o && (i === null ? h.firstBaseUpdate = d : i.next = d, h.lastBaseUpdate = c));
  }
  if (a !== null) {
    var v = s.baseState;
    o = 0, h = d = c = null, i = a;
    do {
      var g = i.lane, b = i.eventTime;
      if ((r & g) === g) {
        h !== null && (h = h.next = {
          eventTime: b,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var w = e, x = i;
          switch (g = t, b = n, x.tag) {
            case 1:
              if (w = x.payload, typeof w == "function") {
                v = w.call(b, v, g);
                break e;
              }
              v = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = x.payload, g = typeof w == "function" ? w.call(b, v, g) : w, g == null) break e;
              v = Ce({}, v, g);
              break e;
            case 2:
              en = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, g = s.effects, g === null ? s.effects = [i] : g.push(i));
      } else b = { eventTime: b, lane: g, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, h === null ? (d = h = b, c = v) : h = h.next = b, o |= g;
      if (i = i.next, i === null) {
        if (i = s.shared.pending, i === null) break;
        g = i, i = g.next, g.next = null, s.lastBaseUpdate = g, s.shared.pending = null;
      }
    } while (!0);
    if (h === null && (c = v), s.baseState = c, s.firstBaseUpdate = d, s.lastBaseUpdate = h, t = s.shared.interleaved, t !== null) {
      s = t;
      do
        o |= s.lane, s = s.next;
      while (s !== t);
    } else a === null && (s.shared.lanes = 0);
    Rn |= o, e.lanes = o, e.memoizedState = v;
  }
}
function dc(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], s = r.callback;
    if (s !== null) {
      if (r.callback = null, r = n, typeof s != "function") throw Error(B(191, s));
      s.call(r);
    }
  }
}
var vl = {}, Pt = wn(vl), rl = wn(vl), ll = wn(vl);
function Nn(e) {
  if (e === vl) throw Error(B(174));
  return e;
}
function Yo(e, t) {
  switch (ve(ll, t), ve(rl, e), ve(Pt, vl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ra(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ra(t, e);
  }
  xe(Pt), ve(Pt, t);
}
function fr() {
  xe(Pt), xe(rl), xe(ll);
}
function xu(e) {
  Nn(ll.current);
  var t = Nn(Pt.current), n = Ra(t, e.type);
  t !== n && (ve(rl, e), ve(Pt, n));
}
function Xo(e) {
  rl.current === e && (xe(Pt), xe(rl));
}
var be = wn(0);
function xs(e) {
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
var fa = [];
function Zo() {
  for (var e = 0; e < fa.length; e++) fa[e]._workInProgressVersionPrimary = null;
  fa.length = 0;
}
var Yl = qt.ReactCurrentDispatcher, ma = qt.ReactCurrentBatchConfig, An = 0, je = null, Ae = null, De = null, _s = !1, Wr = !1, sl = 0, wh = 0;
function We() {
  throw Error(B(321));
}
function Jo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Mt(e[n], t[n])) return !1;
  return !0;
}
function ei(e, t, n, r, s, a) {
  if (An = a, je = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Yl.current = e === null || e.memoizedState === null ? Sh : bh, e = n(r, s), Wr) {
    a = 0;
    do {
      if (Wr = !1, sl = 0, 25 <= a) throw Error(B(301));
      a += 1, De = Ae = null, t.updateQueue = null, Yl.current = jh, e = n(r, s);
    } while (Wr);
  }
  if (Yl.current = ks, t = Ae !== null && Ae.next !== null, An = 0, De = Ae = je = null, _s = !1, t) throw Error(B(300));
  return e;
}
function ti() {
  var e = sl !== 0;
  return sl = 0, e;
}
function At() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return De === null ? je.memoizedState = De = e : De = De.next = e, De;
}
function wt() {
  if (Ae === null) {
    var e = je.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ae.next;
  var t = De === null ? je.memoizedState : De.next;
  if (t !== null) De = t, Ae = e;
  else {
    if (e === null) throw Error(B(310));
    Ae = e, e = { memoizedState: Ae.memoizedState, baseState: Ae.baseState, baseQueue: Ae.baseQueue, queue: Ae.queue, next: null }, De === null ? je.memoizedState = De = e : De = De.next = e;
  }
  return De;
}
function al(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function pa(e) {
  var t = wt(), n = t.queue;
  if (n === null) throw Error(B(311));
  n.lastRenderedReducer = e;
  var r = Ae, s = r.baseQueue, a = n.pending;
  if (a !== null) {
    if (s !== null) {
      var o = s.next;
      s.next = a.next, a.next = o;
    }
    r.baseQueue = s = a, n.pending = null;
  }
  if (s !== null) {
    a = s.next, r = r.baseState;
    var i = o = null, c = null, d = a;
    do {
      var h = d.lane;
      if ((An & h) === h) c !== null && (c = c.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var v = {
          lane: h,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        c === null ? (i = c = v, o = r) : c = c.next = v, je.lanes |= h, Rn |= h;
      }
      d = d.next;
    } while (d !== null && d !== a);
    c === null ? o = r : c.next = i, Mt(r, t.memoizedState) || (et = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    s = e;
    do
      a = s.lane, je.lanes |= a, Rn |= a, s = s.next;
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ha(e) {
  var t = wt(), n = t.queue;
  if (n === null) throw Error(B(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, s = n.pending, a = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var o = s = s.next;
    do
      a = e(a, o.action), o = o.next;
    while (o !== s);
    Mt(a, t.memoizedState) || (et = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function _u() {
}
function ku(e, t) {
  var n = je, r = wt(), s = t(), a = !Mt(r.memoizedState, s);
  if (a && (r.memoizedState = s, et = !0), r = r.queue, ni(ju.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || De !== null && De.memoizedState.tag & 1) {
    if (n.flags |= 2048, ol(9, bu.bind(null, n, r, s, t), void 0, null), Pe === null) throw Error(B(349));
    An & 30 || Su(n, t, s);
  }
  return s;
}
function Su(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = je.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, je.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function bu(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Cu(t) && Eu(e);
}
function ju(e, t, n) {
  return n(function() {
    Cu(t) && Eu(e);
  });
}
function Cu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Mt(e, n);
  } catch {
    return !0;
  }
}
function Eu(e) {
  var t = Ht(e, 1);
  t !== null && It(t, e, 1, -1);
}
function uc(e) {
  var t = At();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: al, lastRenderedState: e }, t.queue = e, e = e.dispatch = kh.bind(null, je, e), [t.memoizedState, e];
}
function ol(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = je.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, je.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Nu() {
  return wt().memoizedState;
}
function Xl(e, t, n, r) {
  var s = At();
  je.flags |= e, s.memoizedState = ol(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ds(e, t, n, r) {
  var s = wt();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Ae !== null) {
    var o = Ae.memoizedState;
    if (a = o.destroy, r !== null && Jo(r, o.deps)) {
      s.memoizedState = ol(t, n, a, r);
      return;
    }
  }
  je.flags |= e, s.memoizedState = ol(1 | t, n, a, r);
}
function fc(e, t) {
  return Xl(8390656, 8, e, t);
}
function ni(e, t) {
  return Ds(2048, 8, e, t);
}
function Iu(e, t) {
  return Ds(4, 2, e, t);
}
function Mu(e, t) {
  return Ds(4, 4, e, t);
}
function Tu(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Lu(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ds(4, 4, Tu.bind(null, t, e), n);
}
function ri() {
}
function Au(e, t) {
  var n = wt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Jo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ru(e, t) {
  var n = wt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Jo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Du(e, t, n) {
  return An & 21 ? (Mt(n, t) || (n = $d(), je.lanes |= n, Rn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, et = !0), e.memoizedState = n);
}
function xh(e, t) {
  var n = ue;
  ue = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ma.transition;
  ma.transition = {};
  try {
    e(!1), t();
  } finally {
    ue = n, ma.transition = r;
  }
}
function Pu() {
  return wt().memoizedState;
}
function _h(e, t, n) {
  var r = mn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, zu(e)) Ou(t, n);
  else if (n = vu(e, t, n, r), n !== null) {
    var s = He();
    It(n, e, r, s), Fu(n, t, r);
  }
}
function kh(e, t, n) {
  var r = mn(e), s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (zu(e)) Ou(t, s);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var o = t.lastRenderedState, i = a(o, n);
      if (s.hasEagerState = !0, s.eagerState = i, Mt(i, o)) {
        var c = t.interleaved;
        c === null ? (s.next = s, Go(t)) : (s.next = c.next, c.next = s), t.interleaved = s;
        return;
      }
    } catch {
    } finally {
    }
    n = vu(e, t, s, r), n !== null && (s = He(), It(n, e, r, s), Fu(n, t, r));
  }
}
function zu(e) {
  var t = e.alternate;
  return e === je || t !== null && t === je;
}
function Ou(e, t) {
  Wr = _s = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Fu(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ro(e, n);
  }
}
var ks = { readContext: vt, useCallback: We, useContext: We, useEffect: We, useImperativeHandle: We, useInsertionEffect: We, useLayoutEffect: We, useMemo: We, useReducer: We, useRef: We, useState: We, useDebugValue: We, useDeferredValue: We, useTransition: We, useMutableSource: We, useSyncExternalStore: We, useId: We, unstable_isNewReconciler: !1 }, Sh = { readContext: vt, useCallback: function(e, t) {
  return At().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: vt, useEffect: fc, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Xl(
    4194308,
    4,
    Tu.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Xl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Xl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = At();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = At();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = _h.bind(null, je, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = At();
  return e = { current: e }, t.memoizedState = e;
}, useState: uc, useDebugValue: ri, useDeferredValue: function(e) {
  return At().memoizedState = e;
}, useTransition: function() {
  var e = uc(!1), t = e[0];
  return e = xh.bind(null, e[1]), At().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = je, s = At();
  if (ke) {
    if (n === void 0) throw Error(B(407));
    n = n();
  } else {
    if (n = t(), Pe === null) throw Error(B(349));
    An & 30 || Su(r, t, n);
  }
  s.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return s.queue = a, fc(ju.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, ol(9, bu.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = At(), t = Pe.identifierPrefix;
  if (ke) {
    var n = Ut, r = Wt;
    n = (r & ~(1 << 32 - Nt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = sl++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = wh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, bh = {
  readContext: vt,
  useCallback: Au,
  useContext: vt,
  useEffect: ni,
  useImperativeHandle: Lu,
  useInsertionEffect: Iu,
  useLayoutEffect: Mu,
  useMemo: Ru,
  useReducer: pa,
  useRef: Nu,
  useState: function() {
    return pa(al);
  },
  useDebugValue: ri,
  useDeferredValue: function(e) {
    var t = wt();
    return Du(t, Ae.memoizedState, e);
  },
  useTransition: function() {
    var e = pa(al)[0], t = wt().memoizedState;
    return [e, t];
  },
  useMutableSource: _u,
  useSyncExternalStore: ku,
  useId: Pu,
  unstable_isNewReconciler: !1
}, jh = { readContext: vt, useCallback: Au, useContext: vt, useEffect: ni, useImperativeHandle: Lu, useInsertionEffect: Iu, useLayoutEffect: Mu, useMemo: Ru, useReducer: ha, useRef: Nu, useState: function() {
  return ha(al);
}, useDebugValue: ri, useDeferredValue: function(e) {
  var t = wt();
  return Ae === null ? t.memoizedState = e : Du(t, Ae.memoizedState, e);
}, useTransition: function() {
  var e = ha(al)[0], t = wt().memoizedState;
  return [e, t];
}, useMutableSource: _u, useSyncExternalStore: ku, useId: Pu, unstable_isNewReconciler: !1 };
function bt(e, t) {
  if (e && e.defaultProps) {
    t = Ce({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function to(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Ce({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ps = { isMounted: function(e) {
  return (e = e._reactInternals) ? zn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = He(), s = mn(e), a = Vt(r, s);
  a.payload = t, n != null && (a.callback = n), t = un(e, a, s), t !== null && (It(t, e, s, r), ql(t, e, s));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = He(), s = mn(e), a = Vt(r, s);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = un(e, a, s), t !== null && (It(t, e, s, r), ql(t, e, s));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = He(), r = mn(e), s = Vt(n, r);
  s.tag = 2, t != null && (s.callback = t), t = un(e, s, r), t !== null && (It(t, e, r, n), ql(t, e, r));
} };
function mc(e, t, n, r, s, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Jr(n, r) || !Jr(s, a) : !0;
}
function $u(e, t, n) {
  var r = !1, s = gn, a = t.contextType;
  return typeof a == "object" && a !== null ? a = vt(a) : (s = nt(t) ? Tn : Be.current, r = t.contextTypes, a = (r = r != null) ? cr(e, s) : gn), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ps, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function pc(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ps.enqueueReplaceState(t, t.state, null);
}
function no(e, t, n, r) {
  var s = e.stateNode;
  s.props = n, s.state = e.memoizedState, s.refs = {}, qo(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? s.context = vt(a) : (a = nt(t) ? Tn : Be.current, s.context = cr(e, a)), s.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (to(e, t, a, n), s.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), t !== s.state && Ps.enqueueReplaceState(s, s.state, null), ws(e, n, s, r), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}
function mr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Jm(r), r = r.return;
    while (r);
    var s = n;
  } catch (a) {
    s = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function ga(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ro(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Ch = typeof WeakMap == "function" ? WeakMap : Map;
function Wu(e, t, n) {
  n = Vt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    bs || (bs = !0, po = r), ro(e, t);
  }, n;
}
function Uu(e, t, n) {
  n = Vt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    n.payload = function() {
      return r(s);
    }, n.callback = function() {
      ro(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    ro(e, t), typeof r != "function" && (fn === null ? fn = /* @__PURE__ */ new Set([this]) : fn.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function hc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ch();
    var s = /* @__PURE__ */ new Set();
    r.set(t, s);
  } else s = r.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), r.set(t, s));
  s.has(n) || (s.add(n), e = $h.bind(null, e, t, n), t.then(e, e));
}
function gc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function yc(e, t, n, r, s) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = s, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Vt(-1, 1), t.tag = 2, un(n, t, 1))), n.lanes |= 1), e);
}
var Eh = qt.ReactCurrentOwner, et = !1;
function Qe(e, t, n, r) {
  t.child = e === null ? yu(t, null, n, r) : ur(t, e.child, n, r);
}
function vc(e, t, n, r, s) {
  n = n.render;
  var a = t.ref;
  return sr(t, s), r = ei(e, t, n, r, a, s), n = ti(), e !== null && !et ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, Kt(e, t, s)) : (ke && n && Uo(t), t.flags |= 1, Qe(e, t, r, s), t.child);
}
function wc(e, t, n, r, s) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !ui(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Vu(e, t, a, r, s)) : (e = ts(n.type, null, r, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & s)) {
    var o = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Jr, n(o, r) && e.ref === t.ref) return Kt(e, t, s);
  }
  return t.flags |= 1, e = pn(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Vu(e, t, n, r, s) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Jr(a, r) && e.ref === t.ref) if (et = !1, t.pendingProps = r = a, (e.lanes & s) !== 0) e.flags & 131072 && (et = !0);
    else return t.lanes = e.lanes, Kt(e, t, s);
  }
  return lo(e, t, n, r, s);
}
function Bu(e, t, n) {
  var r = t.pendingProps, s = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ve(er, st), st |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ve(er, st), st |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, ve(er, st), st |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, ve(er, st), st |= r;
  return Qe(e, t, s, n), t.child;
}
function Qu(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function lo(e, t, n, r, s) {
  var a = nt(n) ? Tn : Be.current;
  return a = cr(t, a), sr(t, s), n = ei(e, t, n, r, a, s), r = ti(), e !== null && !et ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, Kt(e, t, s)) : (ke && r && Uo(t), t.flags |= 1, Qe(e, t, n, s), t.child);
}
function xc(e, t, n, r, s) {
  if (nt(n)) {
    var a = !0;
    ps(t);
  } else a = !1;
  if (sr(t, s), t.stateNode === null) Zl(e, t), $u(t, n, r), no(t, n, r, s), r = !0;
  else if (e === null) {
    var o = t.stateNode, i = t.memoizedProps;
    o.props = i;
    var c = o.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = vt(d) : (d = nt(n) ? Tn : Be.current, d = cr(t, d));
    var h = n.getDerivedStateFromProps, v = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    v || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || c !== d) && pc(t, o, r, d), en = !1;
    var g = t.memoizedState;
    o.state = g, ws(t, r, o, s), c = t.memoizedState, i !== r || g !== c || tt.current || en ? (typeof h == "function" && (to(t, n, h, r), c = t.memoizedState), (i = en || mc(t, n, i, r, g, c, d)) ? (v || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = d, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, wu(e, t), i = t.memoizedProps, d = t.type === t.elementType ? i : bt(t.type, i), o.props = d, v = t.pendingProps, g = o.context, c = n.contextType, typeof c == "object" && c !== null ? c = vt(c) : (c = nt(n) ? Tn : Be.current, c = cr(t, c));
    var b = n.getDerivedStateFromProps;
    (h = typeof b == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== v || g !== c) && pc(t, o, r, c), en = !1, g = t.memoizedState, o.state = g, ws(t, r, o, s);
    var w = t.memoizedState;
    i !== v || g !== w || tt.current || en ? (typeof b == "function" && (to(t, n, b, r), w = t.memoizedState), (d = en || mc(t, n, d, r, g, w, c) || !1) ? (h || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, w, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, w, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), o.props = r, o.state = w, o.context = c, r = d) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return so(e, t, n, r, a, s);
}
function so(e, t, n, r, s, a) {
  Qu(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return s && sc(t, n, !1), Kt(e, t, a);
  r = t.stateNode, Eh.current = t;
  var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = ur(t, e.child, null, a), t.child = ur(t, null, i, a)) : Qe(e, t, i, a), t.memoizedState = r.state, s && sc(t, n, !0), t.child;
}
function Hu(e) {
  var t = e.stateNode;
  t.pendingContext ? lc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && lc(e, t.context, !1), Yo(e, t.containerInfo);
}
function _c(e, t, n, r, s) {
  return dr(), Bo(s), t.flags |= 256, Qe(e, t, n, r), t.child;
}
var ao = { dehydrated: null, treeContext: null, retryLane: 0 };
function oo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ku(e, t, n) {
  var r = t.pendingProps, s = be.current, a = !1, o = (t.flags & 128) !== 0, i;
  if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0), i ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1), ve(be, s & 1), e === null)
    return Ja(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = { mode: "hidden", children: o }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = Fs(o, r, 0, null), e = Mn(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = oo(n), t.memoizedState = ao, e) : li(t, o));
  if (s = e.memoizedState, s !== null && (i = s.dehydrated, i !== null)) return Nh(e, t, o, r, i, s, n);
  if (a) {
    a = r.fallback, o = t.mode, s = e.child, i = s.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== s ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = pn(s, c), r.subtreeFlags = s.subtreeFlags & 14680064), i !== null ? a = pn(i, a) : (a = Mn(a, o, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? oo(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = ao, r;
  }
  return a = e.child, e = a.sibling, r = pn(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function li(e, t) {
  return t = Fs({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Dl(e, t, n, r) {
  return r !== null && Bo(r), ur(t, e.child, null, n), e = li(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Nh(e, t, n, r, s, a, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ga(Error(B(422))), Dl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, s = t.mode, r = Fs({ mode: "visible", children: r.children }, s, 0, null), a = Mn(a, s, o, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && ur(t, e.child, null, o), t.child.memoizedState = oo(o), t.memoizedState = ao, a);
  if (!(t.mode & 1)) return Dl(e, t, o, null);
  if (s.data === "$!") {
    if (r = s.nextSibling && s.nextSibling.dataset, r) var i = r.dgst;
    return r = i, a = Error(B(419)), r = ga(a, r, void 0), Dl(e, t, o, r);
  }
  if (i = (o & e.childLanes) !== 0, et || i) {
    if (r = Pe, r !== null) {
      switch (o & -o) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
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
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      s = s & (r.suspendedLanes | o) ? 0 : s, s !== 0 && s !== a.retryLane && (a.retryLane = s, Ht(e, s), It(r, e, s, -1));
    }
    return di(), r = ga(Error(B(421))), Dl(e, t, o, r);
  }
  return s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Wh.bind(null, e), s._reactRetry = t, null) : (e = a.treeContext, at = dn(s.nextSibling), ot = t, ke = !0, Ct = null, e !== null && (mt[pt++] = Wt, mt[pt++] = Ut, mt[pt++] = Ln, Wt = e.id, Ut = e.overflow, Ln = t), t = li(t, r.children), t.flags |= 4096, t);
}
function kc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), eo(e.return, t, n);
}
function ya(e, t, n, r, s) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: s } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = s);
}
function Gu(e, t, n) {
  var r = t.pendingProps, s = r.revealOrder, a = r.tail;
  if (Qe(e, t, r.children, n), r = be.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && kc(e, n, t);
      else if (e.tag === 19) kc(e, n, t);
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
  if (ve(be, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (s) {
    case "forwards":
      for (n = t.child, s = null; n !== null; ) e = n.alternate, e !== null && xs(e) === null && (s = n), n = n.sibling;
      n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), ya(t, !1, s, n, a);
      break;
    case "backwards":
      for (n = null, s = t.child, t.child = null; s !== null; ) {
        if (e = s.alternate, e !== null && xs(e) === null) {
          t.child = s;
          break;
        }
        e = s.sibling, s.sibling = n, n = s, s = e;
      }
      ya(t, !0, n, null, a);
      break;
    case "together":
      ya(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Zl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Kt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Rn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(B(153));
  if (t.child !== null) {
    for (e = t.child, n = pn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = pn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Ih(e, t, n) {
  switch (t.tag) {
    case 3:
      Hu(t), dr();
      break;
    case 5:
      xu(t);
      break;
    case 1:
      nt(t.type) && ps(t);
      break;
    case 4:
      Yo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, s = t.memoizedProps.value;
      ve(ys, r._currentValue), r._currentValue = s;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ve(be, be.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ku(e, t, n) : (ve(be, be.current & 1), e = Kt(e, t, n), e !== null ? e.sibling : null);
      ve(be, be.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Gu(e, t, n);
        t.flags |= 128;
      }
      if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), ve(be, be.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Bu(e, t, n);
  }
  return Kt(e, t, n);
}
var qu, io, Yu, Xu;
qu = function(e, t) {
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
io = function() {
};
Yu = function(e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    e = t.stateNode, Nn(Pt.current);
    var a = null;
    switch (n) {
      case "input":
        s = Ma(e, s), r = Ma(e, r), a = [];
        break;
      case "select":
        s = Ce({}, s, { value: void 0 }), r = Ce({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        s = Aa(e, s), r = Aa(e, r), a = [];
        break;
      default:
        typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = fs);
    }
    Da(n, r);
    var o;
    n = null;
    for (d in s) if (!r.hasOwnProperty(d) && s.hasOwnProperty(d) && s[d] != null) if (d === "style") {
      var i = s[d];
      for (o in i) i.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Hr.hasOwnProperty(d) ? a || (a = []) : (a = a || []).push(d, null));
    for (d in r) {
      var c = r[d];
      if (i = s != null ? s[d] : void 0, r.hasOwnProperty(d) && c !== i && (c != null || i != null)) if (d === "style") if (i) {
        for (o in i) !i.hasOwnProperty(o) || c && c.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in c) c.hasOwnProperty(o) && i[o] !== c[o] && (n || (n = {}), n[o] = c[o]);
      } else n || (a || (a = []), a.push(
        d,
        n
      )), n = c;
      else d === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, i = i ? i.__html : void 0, c != null && i !== c && (a = a || []).push(d, c)) : d === "children" ? typeof c != "string" && typeof c != "number" || (a = a || []).push(d, "" + c) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Hr.hasOwnProperty(d) ? (c != null && d === "onScroll" && we("scroll", e), a || i === c || (a = [])) : (a = a || []).push(d, c));
    }
    n && (a = a || []).push("style", n);
    var d = a;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Xu = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ir(e, t) {
  if (!ke) switch (e.tailMode) {
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
  if (t) for (var s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags & 14680064, r |= s.flags & 14680064, s.return = e, s = s.sibling;
  else for (s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags, r |= s.flags, s.return = e, s = s.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Mh(e, t, n) {
  var r = t.pendingProps;
  switch (Vo(t), t.tag) {
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
      return nt(t.type) && ms(), Ue(t), null;
    case 3:
      return r = t.stateNode, fr(), xe(tt), xe(Be), Zo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Al(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ct !== null && (yo(Ct), Ct = null))), io(e, t), Ue(t), null;
    case 5:
      Xo(t);
      var s = Nn(ll.current);
      if (n = t.type, e !== null && t.stateNode != null) Yu(e, t, n, r, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(B(166));
          return Ue(t), null;
        }
        if (e = Nn(Pt.current), Al(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[Rt] = t, r[nl] = a, e = (t.mode & 1) !== 0, n) {
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
              for (s = 0; s < Dr.length; s++) we(Dr[s], r);
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
              Ti(r, a), we("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, we("invalid", r);
              break;
            case "textarea":
              Ai(r, a), we("invalid", r);
          }
          Da(n, a), s = null;
          for (var o in a) if (a.hasOwnProperty(o)) {
            var i = a[o];
            o === "children" ? typeof i == "string" ? r.textContent !== i && (a.suppressHydrationWarning !== !0 && Ll(r.textContent, i, e), s = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (a.suppressHydrationWarning !== !0 && Ll(
              r.textContent,
              i,
              e
            ), s = ["children", "" + i]) : Hr.hasOwnProperty(o) && i != null && o === "onScroll" && we("scroll", r);
          }
          switch (n) {
            case "input":
              bl(r), Li(r, a, !0);
              break;
            case "textarea":
              bl(r), Ri(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = fs);
          }
          r = s, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = s.nodeType === 9 ? s : s.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = jd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Rt] = t, e[nl] = r, qu(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = Pa(n, r), n) {
              case "dialog":
                we("cancel", e), we("close", e), s = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                we("load", e), s = r;
                break;
              case "video":
              case "audio":
                for (s = 0; s < Dr.length; s++) we(Dr[s], e);
                s = r;
                break;
              case "source":
                we("error", e), s = r;
                break;
              case "img":
              case "image":
              case "link":
                we(
                  "error",
                  e
                ), we("load", e), s = r;
                break;
              case "details":
                we("toggle", e), s = r;
                break;
              case "input":
                Ti(e, r), s = Ma(e, r), we("invalid", e);
                break;
              case "option":
                s = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, s = Ce({}, r, { value: void 0 }), we("invalid", e);
                break;
              case "textarea":
                Ai(e, r), s = Aa(e, r), we("invalid", e);
                break;
              default:
                s = r;
            }
            Da(n, s), i = s;
            for (a in i) if (i.hasOwnProperty(a)) {
              var c = i[a];
              a === "style" ? Nd(e, c) : a === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && Cd(e, c)) : a === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Kr(e, c) : typeof c == "number" && Kr(e, "" + c) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Hr.hasOwnProperty(a) ? c != null && a === "onScroll" && we("scroll", e) : c != null && No(e, a, c, o));
            }
            switch (n) {
              case "input":
                bl(e), Li(e, r, !1);
                break;
              case "textarea":
                bl(e), Ri(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + hn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? tr(e, !!r.multiple, a, !1) : r.defaultValue != null && tr(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = fs);
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
      if (e && t.stateNode != null) Xu(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(B(166));
        if (n = Nn(ll.current), Nn(Pt.current), Al(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Rt] = t, (a = r.nodeValue !== n) && (e = ot, e !== null)) switch (e.tag) {
            case 3:
              Ll(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Ll(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Rt] = t, t.stateNode = r;
      }
      return Ue(t), null;
    case 13:
      if (xe(be), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ke && at !== null && t.mode & 1 && !(t.flags & 128)) hu(), dr(), t.flags |= 98560, a = !1;
        else if (a = Al(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error(B(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(B(317));
            a[Rt] = t;
          } else dr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ue(t), a = !1;
        } else Ct !== null && (yo(Ct), Ct = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || be.current & 1 ? Re === 0 && (Re = 3) : di())), t.updateQueue !== null && (t.flags |= 4), Ue(t), null);
    case 4:
      return fr(), io(e, t), e === null && el(t.stateNode.containerInfo), Ue(t), null;
    case 10:
      return Ko(t.type._context), Ue(t), null;
    case 17:
      return nt(t.type) && ms(), Ue(t), null;
    case 19:
      if (xe(be), a = t.memoizedState, a === null) return Ue(t), null;
      if (r = (t.flags & 128) !== 0, o = a.rendering, o === null) if (r) Ir(a, !1);
      else {
        if (Re !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = xs(e), o !== null) {
            for (t.flags |= 128, Ir(a, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ve(be, be.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && Ie() > pr && (t.flags |= 128, r = !0, Ir(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = xs(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ir(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !ke) return Ue(t), null;
        } else 2 * Ie() - a.renderingStartTime > pr && n !== 1073741824 && (t.flags |= 128, r = !0, Ir(a, !1), t.lanes = 4194304);
        a.isBackwards ? (o.sibling = t.child, t.child = o) : (n = a.last, n !== null ? n.sibling = o : t.child = o, a.last = o);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Ie(), t.sibling = null, n = be.current, ve(be, r ? n & 1 | 2 : n & 1), t) : (Ue(t), null);
    case 22:
    case 23:
      return ci(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? st & 1073741824 && (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ue(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(B(156, t.tag));
}
function Th(e, t) {
  switch (Vo(t), t.tag) {
    case 1:
      return nt(t.type) && ms(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return fr(), xe(tt), xe(Be), Zo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Xo(t), null;
    case 13:
      if (xe(be), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(B(340));
        dr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return xe(be), null;
    case 4:
      return fr(), null;
    case 10:
      return Ko(t.type._context), null;
    case 22:
    case 23:
      return ci(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Pl = !1, Ve = !1, Lh = typeof WeakSet == "function" ? WeakSet : Set, q = null;
function Jn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Ne(e, t, r);
  }
  else n.current = null;
}
function co(e, t, n) {
  try {
    n();
  } catch (r) {
    Ne(e, t, r);
  }
}
var Sc = !1;
function Ah(e, t) {
  if (Ha = cs, e = nu(), Wo(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var s = r.anchorOffset, a = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, a.nodeType;
        } catch {
          n = null;
          break e;
        }
        var o = 0, i = -1, c = -1, d = 0, h = 0, v = e, g = null;
        t: for (; ; ) {
          for (var b; v !== n || s !== 0 && v.nodeType !== 3 || (i = o + s), v !== a || r !== 0 && v.nodeType !== 3 || (c = o + r), v.nodeType === 3 && (o += v.nodeValue.length), (b = v.firstChild) !== null; )
            g = v, v = b;
          for (; ; ) {
            if (v === e) break t;
            if (g === n && ++d === s && (i = o), g === a && ++h === r && (c = o), (b = v.nextSibling) !== null) break;
            v = g, g = v.parentNode;
          }
          v = b;
        }
        n = i === -1 || c === -1 ? null : { start: i, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ka = { focusedElem: e, selectionRange: n }, cs = !1, q = t; q !== null; ) if (t = q, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, q = e;
  else for (; q !== null; ) {
    t = q;
    try {
      var w = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var x = w.memoizedProps, S = w.memoizedState, f = t.stateNode, m = f.getSnapshotBeforeUpdate(t.elementType === t.type ? x : bt(t.type, x), S);
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
          throw Error(B(163));
      }
    } catch (y) {
      Ne(t, t.return, y);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, q = e;
      break;
    }
    q = t.return;
  }
  return w = Sc, Sc = !1, w;
}
function Ur(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var s = r = r.next;
    do {
      if ((s.tag & e) === e) {
        var a = s.destroy;
        s.destroy = void 0, a !== void 0 && co(t, n, a);
      }
      s = s.next;
    } while (s !== r);
  }
}
function zs(e, t) {
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
function uo(e) {
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
function Zu(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Zu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Rt], delete t[nl], delete t[Ya], delete t[hh], delete t[gh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Ju(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function bc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ju(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function fo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = fs));
  else if (r !== 4 && (e = e.child, e !== null)) for (fo(e, t, n), e = e.sibling; e !== null; ) fo(e, t, n), e = e.sibling;
}
function mo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (mo(e, t, n), e = e.sibling; e !== null; ) mo(e, t, n), e = e.sibling;
}
var ze = null, jt = !1;
function Zt(e, t, n) {
  for (n = n.child; n !== null; ) ef(e, t, n), n = n.sibling;
}
function ef(e, t, n) {
  if (Dt && typeof Dt.onCommitFiberUnmount == "function") try {
    Dt.onCommitFiberUnmount(Is, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ve || Jn(n, t);
    case 6:
      var r = ze, s = jt;
      ze = null, Zt(e, t, n), ze = r, jt = s, ze !== null && (jt ? (e = ze, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ze.removeChild(n.stateNode));
      break;
    case 18:
      ze !== null && (jt ? (e = ze, n = n.stateNode, e.nodeType === 8 ? da(e.parentNode, n) : e.nodeType === 1 && da(e, n), Xr(e)) : da(ze, n.stateNode));
      break;
    case 4:
      r = ze, s = jt, ze = n.stateNode.containerInfo, jt = !0, Zt(e, t, n), ze = r, jt = s;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ve && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        s = r = r.next;
        do {
          var a = s, o = a.destroy;
          a = a.tag, o !== void 0 && (a & 2 || a & 4) && co(n, t, o), s = s.next;
        } while (s !== r);
      }
      Zt(e, t, n);
      break;
    case 1:
      if (!Ve && (Jn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (i) {
        Ne(n, t, i);
      }
      Zt(e, t, n);
      break;
    case 21:
      Zt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ve = (r = Ve) || n.memoizedState !== null, Zt(e, t, n), Ve = r) : Zt(e, t, n);
      break;
    default:
      Zt(e, t, n);
  }
}
function jc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Lh()), t.forEach(function(r) {
      var s = Uh.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(s, s));
    });
  }
}
function kt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var s = n[r];
    try {
      var a = e, o = t, i = o;
      e: for (; i !== null; ) {
        switch (i.tag) {
          case 5:
            ze = i.stateNode, jt = !1;
            break e;
          case 3:
            ze = i.stateNode.containerInfo, jt = !0;
            break e;
          case 4:
            ze = i.stateNode.containerInfo, jt = !0;
            break e;
        }
        i = i.return;
      }
      if (ze === null) throw Error(B(160));
      ef(a, o, s), ze = null, jt = !1;
      var c = s.alternate;
      c !== null && (c.return = null), s.return = null;
    } catch (d) {
      Ne(s, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) tf(t, e), t = t.sibling;
}
function tf(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (kt(t, e), Lt(e), r & 4) {
        try {
          Ur(3, e, e.return), zs(3, e);
        } catch (x) {
          Ne(e, e.return, x);
        }
        try {
          Ur(5, e, e.return);
        } catch (x) {
          Ne(e, e.return, x);
        }
      }
      break;
    case 1:
      kt(t, e), Lt(e), r & 512 && n !== null && Jn(n, n.return);
      break;
    case 5:
      if (kt(t, e), Lt(e), r & 512 && n !== null && Jn(n, n.return), e.flags & 32) {
        var s = e.stateNode;
        try {
          Kr(s, "");
        } catch (x) {
          Ne(e, e.return, x);
        }
      }
      if (r & 4 && (s = e.stateNode, s != null)) {
        var a = e.memoizedProps, o = n !== null ? n.memoizedProps : a, i = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          i === "input" && a.type === "radio" && a.name != null && Sd(s, a), Pa(i, o);
          var d = Pa(i, a);
          for (o = 0; o < c.length; o += 2) {
            var h = c[o], v = c[o + 1];
            h === "style" ? Nd(s, v) : h === "dangerouslySetInnerHTML" ? Cd(s, v) : h === "children" ? Kr(s, v) : No(s, h, v, d);
          }
          switch (i) {
            case "input":
              Ta(s, a);
              break;
            case "textarea":
              bd(s, a);
              break;
            case "select":
              var g = s._wrapperState.wasMultiple;
              s._wrapperState.wasMultiple = !!a.multiple;
              var b = a.value;
              b != null ? tr(s, !!a.multiple, b, !1) : g !== !!a.multiple && (a.defaultValue != null ? tr(
                s,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : tr(s, !!a.multiple, a.multiple ? [] : "", !1));
          }
          s[nl] = a;
        } catch (x) {
          Ne(e, e.return, x);
        }
      }
      break;
    case 6:
      if (kt(t, e), Lt(e), r & 4) {
        if (e.stateNode === null) throw Error(B(162));
        s = e.stateNode, a = e.memoizedProps;
        try {
          s.nodeValue = a;
        } catch (x) {
          Ne(e, e.return, x);
        }
      }
      break;
    case 3:
      if (kt(t, e), Lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Xr(t.containerInfo);
      } catch (x) {
        Ne(e, e.return, x);
      }
      break;
    case 4:
      kt(t, e), Lt(e);
      break;
    case 13:
      kt(t, e), Lt(e), s = e.child, s.flags & 8192 && (a = s.memoizedState !== null, s.stateNode.isHidden = a, !a || s.alternate !== null && s.alternate.memoizedState !== null || (oi = Ie())), r & 4 && jc(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ve = (d = Ve) || h, kt(t, e), Ve = d) : kt(t, e), Lt(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !h && e.mode & 1) for (q = e, h = e.child; h !== null; ) {
          for (v = q = h; q !== null; ) {
            switch (g = q, b = g.child, g.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Ur(4, g, g.return);
                break;
              case 1:
                Jn(g, g.return);
                var w = g.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = g, n = g.return;
                  try {
                    t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                  } catch (x) {
                    Ne(r, n, x);
                  }
                }
                break;
              case 5:
                Jn(g, g.return);
                break;
              case 22:
                if (g.memoizedState !== null) {
                  Ec(v);
                  continue;
                }
            }
            b !== null ? (b.return = g, q = b) : Ec(v);
          }
          h = h.sibling;
        }
        e: for (h = null, v = e; ; ) {
          if (v.tag === 5) {
            if (h === null) {
              h = v;
              try {
                s = v.stateNode, d ? (a = s.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (i = v.stateNode, c = v.memoizedProps.style, o = c != null && c.hasOwnProperty("display") ? c.display : null, i.style.display = Ed("display", o));
              } catch (x) {
                Ne(e, e.return, x);
              }
            }
          } else if (v.tag === 6) {
            if (h === null) try {
              v.stateNode.nodeValue = d ? "" : v.memoizedProps;
            } catch (x) {
              Ne(e, e.return, x);
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
      kt(t, e), Lt(e), r & 4 && jc(e);
      break;
    case 21:
      break;
    default:
      kt(
        t,
        e
      ), Lt(e);
  }
}
function Lt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ju(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(B(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (Kr(s, ""), r.flags &= -33);
          var a = bc(e);
          mo(e, a, s);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, i = bc(e);
          fo(e, i, o);
          break;
        default:
          throw Error(B(161));
      }
    } catch (c) {
      Ne(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Rh(e, t, n) {
  q = e, nf(e);
}
function nf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; q !== null; ) {
    var s = q, a = s.child;
    if (s.tag === 22 && r) {
      var o = s.memoizedState !== null || Pl;
      if (!o) {
        var i = s.alternate, c = i !== null && i.memoizedState !== null || Ve;
        i = Pl;
        var d = Ve;
        if (Pl = o, (Ve = c) && !d) for (q = s; q !== null; ) o = q, c = o.child, o.tag === 22 && o.memoizedState !== null ? Nc(s) : c !== null ? (c.return = o, q = c) : Nc(s);
        for (; a !== null; ) q = a, nf(a), a = a.sibling;
        q = s, Pl = i, Ve = d;
      }
      Cc(e);
    } else s.subtreeFlags & 8772 && a !== null ? (a.return = s, q = a) : Cc(e);
  }
}
function Cc(e) {
  for (; q !== null; ) {
    var t = q;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ve || zs(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ve) if (n === null) r.componentDidMount();
            else {
              var s = t.elementType === t.type ? n.memoizedProps : bt(t.type, n.memoizedProps);
              r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && dc(t, a, r);
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
              dc(t, o, n);
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
                  v !== null && Xr(v);
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
            throw Error(B(163));
        }
        Ve || t.flags & 512 && uo(t);
      } catch (g) {
        Ne(t, t.return, g);
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
function Ec(e) {
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
function Nc(e) {
  for (; q !== null; ) {
    var t = q;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            zs(4, t);
          } catch (c) {
            Ne(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              Ne(t, s, c);
            }
          }
          var a = t.return;
          try {
            uo(t);
          } catch (c) {
            Ne(t, a, c);
          }
          break;
        case 5:
          var o = t.return;
          try {
            uo(t);
          } catch (c) {
            Ne(t, o, c);
          }
      }
    } catch (c) {
      Ne(t, t.return, c);
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
var Dh = Math.ceil, Ss = qt.ReactCurrentDispatcher, si = qt.ReactCurrentOwner, gt = qt.ReactCurrentBatchConfig, ie = 0, Pe = null, Te = null, Oe = 0, st = 0, er = wn(0), Re = 0, il = null, Rn = 0, Os = 0, ai = 0, Vr = null, Ze = null, oi = 0, pr = 1 / 0, Ft = null, bs = !1, po = null, fn = null, zl = !1, sn = null, js = 0, Br = 0, ho = null, Jl = -1, es = 0;
function He() {
  return ie & 6 ? Ie() : Jl !== -1 ? Jl : Jl = Ie();
}
function mn(e) {
  return e.mode & 1 ? ie & 2 && Oe !== 0 ? Oe & -Oe : vh.transition !== null ? (es === 0 && (es = $d()), es) : (e = ue, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Kd(e.type)), e) : 1;
}
function It(e, t, n, r) {
  if (50 < Br) throw Br = 0, ho = null, Error(B(185));
  hl(e, n, r), (!(ie & 2) || e !== Pe) && (e === Pe && (!(ie & 2) && (Os |= n), Re === 4 && nn(e, Oe)), rt(e, r), n === 1 && ie === 0 && !(t.mode & 1) && (pr = Ie() + 500, Rs && xn()));
}
function rt(e, t) {
  var n = e.callbackNode;
  vp(e, t);
  var r = is(e, e === Pe ? Oe : 0);
  if (r === 0) n !== null && zi(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && zi(n), t === 1) e.tag === 0 ? yh(Ic.bind(null, e)) : fu(Ic.bind(null, e)), mh(function() {
      !(ie & 6) && xn();
    }), n = null;
    else {
      switch (Wd(r)) {
        case 1:
          n = Ao;
          break;
        case 4:
          n = Od;
          break;
        case 16:
          n = os;
          break;
        case 536870912:
          n = Fd;
          break;
        default:
          n = os;
      }
      n = uf(n, rf.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function rf(e, t) {
  if (Jl = -1, es = 0, ie & 6) throw Error(B(327));
  var n = e.callbackNode;
  if (ar() && e.callbackNode !== n) return null;
  var r = is(e, e === Pe ? Oe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Cs(e, r);
  else {
    t = r;
    var s = ie;
    ie |= 2;
    var a = sf();
    (Pe !== e || Oe !== t) && (Ft = null, pr = Ie() + 500, In(e, t));
    do
      try {
        Oh();
        break;
      } catch (i) {
        lf(e, i);
      }
    while (!0);
    Ho(), Ss.current = a, ie = s, Te !== null ? t = 0 : (Pe = null, Oe = 0, t = Re);
  }
  if (t !== 0) {
    if (t === 2 && (s = Wa(e), s !== 0 && (r = s, t = go(e, s))), t === 1) throw n = il, In(e, 0), nn(e, r), rt(e, Ie()), n;
    if (t === 6) nn(e, r);
    else {
      if (s = e.current.alternate, !(r & 30) && !Ph(s) && (t = Cs(e, r), t === 2 && (a = Wa(e), a !== 0 && (r = a, t = go(e, a))), t === 1)) throw n = il, In(e, 0), nn(e, r), rt(e, Ie()), n;
      switch (e.finishedWork = s, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(B(345));
        case 2:
          jn(e, Ze, Ft);
          break;
        case 3:
          if (nn(e, r), (r & 130023424) === r && (t = oi + 500 - Ie(), 10 < t)) {
            if (is(e, 0) !== 0) break;
            if (s = e.suspendedLanes, (s & r) !== r) {
              He(), e.pingedLanes |= e.suspendedLanes & s;
              break;
            }
            e.timeoutHandle = qa(jn.bind(null, e, Ze, Ft), t);
            break;
          }
          jn(e, Ze, Ft);
          break;
        case 4:
          if (nn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var o = 31 - Nt(r);
            a = 1 << o, o = t[o], o > s && (s = o), r &= ~a;
          }
          if (r = s, r = Ie() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Dh(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = qa(jn.bind(null, e, Ze, Ft), r);
            break;
          }
          jn(e, Ze, Ft);
          break;
        case 5:
          jn(e, Ze, Ft);
          break;
        default:
          throw Error(B(329));
      }
    }
  }
  return rt(e, Ie()), e.callbackNode === n ? rf.bind(null, e) : null;
}
function go(e, t) {
  var n = Vr;
  return e.current.memoizedState.isDehydrated && (In(e, t).flags |= 256), e = Cs(e, t), e !== 2 && (t = Ze, Ze = n, t !== null && yo(t)), e;
}
function yo(e) {
  Ze === null ? Ze = e : Ze.push.apply(Ze, e);
}
function Ph(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var s = n[r], a = s.getSnapshot;
        s = s.value;
        try {
          if (!Mt(a(), s)) return !1;
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
function nn(e, t) {
  for (t &= ~ai, t &= ~Os, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Nt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ic(e) {
  if (ie & 6) throw Error(B(327));
  ar();
  var t = is(e, 0);
  if (!(t & 1)) return rt(e, Ie()), null;
  var n = Cs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Wa(e);
    r !== 0 && (t = r, n = go(e, r));
  }
  if (n === 1) throw n = il, In(e, 0), nn(e, t), rt(e, Ie()), n;
  if (n === 6) throw Error(B(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, jn(e, Ze, Ft), rt(e, Ie()), null;
}
function ii(e, t) {
  var n = ie;
  ie |= 1;
  try {
    return e(t);
  } finally {
    ie = n, ie === 0 && (pr = Ie() + 500, Rs && xn());
  }
}
function Dn(e) {
  sn !== null && sn.tag === 0 && !(ie & 6) && ar();
  var t = ie;
  ie |= 1;
  var n = gt.transition, r = ue;
  try {
    if (gt.transition = null, ue = 1, e) return e();
  } finally {
    ue = r, gt.transition = n, ie = t, !(ie & 6) && xn();
  }
}
function ci() {
  st = er.current, xe(er);
}
function In(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, fh(n)), Te !== null) for (n = Te.return; n !== null; ) {
    var r = n;
    switch (Vo(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ms();
        break;
      case 3:
        fr(), xe(tt), xe(Be), Zo();
        break;
      case 5:
        Xo(r);
        break;
      case 4:
        fr();
        break;
      case 13:
        xe(be);
        break;
      case 19:
        xe(be);
        break;
      case 10:
        Ko(r.type._context);
        break;
      case 22:
      case 23:
        ci();
    }
    n = n.return;
  }
  if (Pe = e, Te = e = pn(e.current, null), Oe = st = t, Re = 0, il = null, ai = Os = Rn = 0, Ze = Vr = null, En !== null) {
    for (t = 0; t < En.length; t++) if (n = En[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var s = r.next, a = n.pending;
      if (a !== null) {
        var o = a.next;
        a.next = s, r.next = o;
      }
      n.pending = r;
    }
    En = null;
  }
  return e;
}
function lf(e, t) {
  do {
    var n = Te;
    try {
      if (Ho(), Yl.current = ks, _s) {
        for (var r = je.memoizedState; r !== null; ) {
          var s = r.queue;
          s !== null && (s.pending = null), r = r.next;
        }
        _s = !1;
      }
      if (An = 0, De = Ae = je = null, Wr = !1, sl = 0, si.current = null, n === null || n.return === null) {
        Re = 1, il = t, Te = null;
        break;
      }
      e: {
        var a = e, o = n.return, i = n, c = t;
        if (t = Oe, i.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var d = c, h = i, v = h.tag;
          if (!(h.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var g = h.alternate;
            g ? (h.updateQueue = g.updateQueue, h.memoizedState = g.memoizedState, h.lanes = g.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var b = gc(o);
          if (b !== null) {
            b.flags &= -257, yc(b, o, i, a, t), b.mode & 1 && hc(a, d, t), t = b, c = d;
            var w = t.updateQueue;
            if (w === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(c), t.updateQueue = x;
            } else w.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              hc(a, d, t), di();
              break e;
            }
            c = Error(B(426));
          }
        } else if (ke && i.mode & 1) {
          var S = gc(o);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), yc(S, o, i, a, t), Bo(mr(c, i));
            break e;
          }
        }
        a = c = mr(c, i), Re !== 4 && (Re = 2), Vr === null ? Vr = [a] : Vr.push(a), a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var f = Wu(a, c, t);
              cc(a, f);
              break e;
            case 1:
              i = c;
              var m = a.type, u = a.stateNode;
              if (!(a.flags & 128) && (typeof m.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (fn === null || !fn.has(u)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var y = Uu(a, i, t);
                cc(a, y);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      of(n);
    } catch (_) {
      t = _, Te === n && n !== null && (Te = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function sf() {
  var e = Ss.current;
  return Ss.current = ks, e === null ? ks : e;
}
function di() {
  (Re === 0 || Re === 3 || Re === 2) && (Re = 4), Pe === null || !(Rn & 268435455) && !(Os & 268435455) || nn(Pe, Oe);
}
function Cs(e, t) {
  var n = ie;
  ie |= 2;
  var r = sf();
  (Pe !== e || Oe !== t) && (Ft = null, In(e, t));
  do
    try {
      zh();
      break;
    } catch (s) {
      lf(e, s);
    }
  while (!0);
  if (Ho(), ie = n, Ss.current = r, Te !== null) throw Error(B(261));
  return Pe = null, Oe = 0, Re;
}
function zh() {
  for (; Te !== null; ) af(Te);
}
function Oh() {
  for (; Te !== null && !cp(); ) af(Te);
}
function af(e) {
  var t = df(e.alternate, e, st);
  e.memoizedProps = e.pendingProps, t === null ? of(e) : Te = t, si.current = null;
}
function of(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Th(n, t), n !== null) {
        n.flags &= 32767, Te = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Re = 6, Te = null;
        return;
      }
    } else if (n = Mh(n, t, st), n !== null) {
      Te = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Te = t;
      return;
    }
    Te = t = e;
  } while (t !== null);
  Re === 0 && (Re = 5);
}
function jn(e, t, n) {
  var r = ue, s = gt.transition;
  try {
    gt.transition = null, ue = 1, Fh(e, t, n, r);
  } finally {
    gt.transition = s, ue = r;
  }
  return null;
}
function Fh(e, t, n, r) {
  do
    ar();
  while (sn !== null);
  if (ie & 6) throw Error(B(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(B(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (wp(e, a), e === Pe && (Te = Pe = null, Oe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || zl || (zl = !0, uf(os, function() {
    return ar(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = gt.transition, gt.transition = null;
    var o = ue;
    ue = 1;
    var i = ie;
    ie |= 4, si.current = null, Ah(e, n), tf(n, e), sh(Ka), cs = !!Ha, Ka = Ha = null, e.current = n, Rh(n), dp(), ie = i, ue = o, gt.transition = a;
  } else e.current = n;
  if (zl && (zl = !1, sn = e, js = s), a = e.pendingLanes, a === 0 && (fn = null), mp(n.stateNode), rt(e, Ie()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) s = t[n], r(s.value, { componentStack: s.stack, digest: s.digest });
  if (bs) throw bs = !1, e = po, po = null, e;
  return js & 1 && e.tag !== 0 && ar(), a = e.pendingLanes, a & 1 ? e === ho ? Br++ : (Br = 0, ho = e) : Br = 0, xn(), null;
}
function ar() {
  if (sn !== null) {
    var e = Wd(js), t = gt.transition, n = ue;
    try {
      if (gt.transition = null, ue = 16 > e ? 16 : e, sn === null) var r = !1;
      else {
        if (e = sn, sn = null, js = 0, ie & 6) throw Error(B(331));
        var s = ie;
        for (ie |= 4, q = e.current; q !== null; ) {
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
                      Ur(8, h, a);
                  }
                  var v = h.child;
                  if (v !== null) v.return = h, q = v;
                  else for (; q !== null; ) {
                    h = q;
                    var g = h.sibling, b = h.return;
                    if (Zu(h), h === d) {
                      q = null;
                      break;
                    }
                    if (g !== null) {
                      g.return = b, q = g;
                      break;
                    }
                    q = b;
                  }
                }
              }
              var w = a.alternate;
              if (w !== null) {
                var x = w.child;
                if (x !== null) {
                  w.child = null;
                  do {
                    var S = x.sibling;
                    x.sibling = null, x = S;
                  } while (x !== null);
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
                Ur(9, a, a.return);
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
                  zs(9, i);
              }
            } catch (_) {
              Ne(i, i.return, _);
            }
            if (i === o) {
              q = null;
              break e;
            }
            var y = i.sibling;
            if (y !== null) {
              y.return = i.return, q = y;
              break e;
            }
            q = i.return;
          }
        }
        if (ie = s, xn(), Dt && typeof Dt.onPostCommitFiberRoot == "function") try {
          Dt.onPostCommitFiberRoot(Is, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      ue = n, gt.transition = t;
    }
  }
  return !1;
}
function Mc(e, t, n) {
  t = mr(n, t), t = Wu(e, t, 1), e = un(e, t, 1), t = He(), e !== null && (hl(e, 1, t), rt(e, t));
}
function Ne(e, t, n) {
  if (e.tag === 3) Mc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Mc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (fn === null || !fn.has(r))) {
        e = mr(n, e), e = Uu(t, e, 1), t = un(t, e, 1), e = He(), t !== null && (hl(t, 1, e), rt(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function $h(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = He(), e.pingedLanes |= e.suspendedLanes & n, Pe === e && (Oe & n) === n && (Re === 4 || Re === 3 && (Oe & 130023424) === Oe && 500 > Ie() - oi ? In(e, 0) : ai |= n), rt(e, t);
}
function cf(e, t) {
  t === 0 && (e.mode & 1 ? (t = El, El <<= 1, !(El & 130023424) && (El = 4194304)) : t = 1);
  var n = He();
  e = Ht(e, t), e !== null && (hl(e, t, n), rt(e, n));
}
function Wh(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), cf(e, n);
}
function Uh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(B(314));
  }
  r !== null && r.delete(t), cf(e, n);
}
var df;
df = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || tt.current) et = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return et = !1, Ih(e, t, n);
    et = !!(e.flags & 131072);
  }
  else et = !1, ke && t.flags & 1048576 && mu(t, gs, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Zl(e, t), e = t.pendingProps;
      var s = cr(t, Be.current);
      sr(t, n), s = ei(null, t, r, e, s, n);
      var a = ti();
      return t.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, nt(r) ? (a = !0, ps(t)) : a = !1, t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, qo(t), s.updater = Ps, t.stateNode = s, s._reactInternals = t, no(t, r, e, n), t = so(null, t, r, !0, a, n)) : (t.tag = 0, ke && a && Uo(t), Qe(null, t, s, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Zl(e, t), e = t.pendingProps, s = r._init, r = s(r._payload), t.type = r, s = t.tag = Bh(r), e = bt(r, e), s) {
          case 0:
            t = lo(null, t, r, e, n);
            break e;
          case 1:
            t = xc(null, t, r, e, n);
            break e;
          case 11:
            t = vc(null, t, r, e, n);
            break e;
          case 14:
            t = wc(null, t, r, bt(r.type, e), n);
            break e;
        }
        throw Error(B(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : bt(r, s), lo(e, t, r, s, n);
    case 1:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : bt(r, s), xc(e, t, r, s, n);
    case 3:
      e: {
        if (Hu(t), e === null) throw Error(B(387));
        r = t.pendingProps, a = t.memoizedState, s = a.element, wu(e, t), ws(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          s = mr(Error(B(423)), t), t = _c(e, t, r, n, s);
          break e;
        } else if (r !== s) {
          s = mr(Error(B(424)), t), t = _c(e, t, r, n, s);
          break e;
        } else for (at = dn(t.stateNode.containerInfo.firstChild), ot = t, ke = !0, Ct = null, n = yu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (dr(), r === s) {
            t = Kt(e, t, n);
            break e;
          }
          Qe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return xu(t), e === null && Ja(t), r = t.type, s = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = s.children, Ga(r, s) ? o = null : a !== null && Ga(r, a) && (t.flags |= 32), Qu(e, t), Qe(e, t, o, n), t.child;
    case 6:
      return e === null && Ja(t), null;
    case 13:
      return Ku(e, t, n);
    case 4:
      return Yo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ur(t, null, r, n) : Qe(e, t, r, n), t.child;
    case 11:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : bt(r, s), vc(e, t, r, s, n);
    case 7:
      return Qe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Qe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Qe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, s = t.pendingProps, a = t.memoizedProps, o = s.value, ve(ys, r._currentValue), r._currentValue = o, a !== null) if (Mt(a.value, o)) {
          if (a.children === s.children && !tt.current) {
            t = Kt(e, t, n);
            break e;
          }
        } else for (a = t.child, a !== null && (a.return = t); a !== null; ) {
          var i = a.dependencies;
          if (i !== null) {
            o = a.child;
            for (var c = i.firstContext; c !== null; ) {
              if (c.context === r) {
                if (a.tag === 1) {
                  c = Vt(-1, n & -n), c.tag = 2;
                  var d = a.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var h = d.pending;
                    h === null ? c.next = c : (c.next = h.next, h.next = c), d.pending = c;
                  }
                }
                a.lanes |= n, c = a.alternate, c !== null && (c.lanes |= n), eo(
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
            if (o = a.return, o === null) throw Error(B(341));
            o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), eo(o, n, t), o = a.sibling;
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
        Qe(e, t, s.children, n), t = t.child;
      }
      return t;
    case 9:
      return s = t.type, r = t.pendingProps.children, sr(t, n), s = vt(s), r = r(s), t.flags |= 1, Qe(e, t, r, n), t.child;
    case 14:
      return r = t.type, s = bt(r, t.pendingProps), s = bt(r.type, s), wc(e, t, r, s, n);
    case 15:
      return Vu(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : bt(r, s), Zl(e, t), t.tag = 1, nt(r) ? (e = !0, ps(t)) : e = !1, sr(t, n), $u(t, r, s), no(t, r, s, n), so(null, t, r, !0, e, n);
    case 19:
      return Gu(e, t, n);
    case 22:
      return Bu(e, t, n);
  }
  throw Error(B(156, t.tag));
};
function uf(e, t) {
  return zd(e, t);
}
function Vh(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ht(e, t, n, r) {
  return new Vh(e, t, n, r);
}
function ui(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Bh(e) {
  if (typeof e == "function") return ui(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Mo) return 11;
    if (e === To) return 14;
  }
  return 2;
}
function pn(e, t) {
  var n = e.alternate;
  return n === null ? (n = ht(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ts(e, t, n, r, s, a) {
  var o = 2;
  if (r = e, typeof e == "function") ui(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Bn:
      return Mn(n.children, s, a, t);
    case Io:
      o = 8, s |= 8;
      break;
    case Ca:
      return e = ht(12, n, t, s | 2), e.elementType = Ca, e.lanes = a, e;
    case Ea:
      return e = ht(13, n, t, s), e.elementType = Ea, e.lanes = a, e;
    case Na:
      return e = ht(19, n, t, s), e.elementType = Na, e.lanes = a, e;
    case xd:
      return Fs(n, s, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case vd:
          o = 10;
          break e;
        case wd:
          o = 9;
          break e;
        case Mo:
          o = 11;
          break e;
        case To:
          o = 14;
          break e;
        case Jt:
          o = 16, r = null;
          break e;
      }
      throw Error(B(130, e == null ? e : typeof e, ""));
  }
  return t = ht(o, n, t, s), t.elementType = e, t.type = r, t.lanes = a, t;
}
function Mn(e, t, n, r) {
  return e = ht(7, e, r, t), e.lanes = n, e;
}
function Fs(e, t, n, r) {
  return e = ht(22, e, r, t), e.elementType = xd, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function va(e, t, n) {
  return e = ht(6, e, null, t), e.lanes = n, e;
}
function wa(e, t, n) {
  return t = ht(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Qh(e, t, n, r, s) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Js(0), this.expirationTimes = Js(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Js(0), this.identifierPrefix = r, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null;
}
function fi(e, t, n, r, s, a, o, i, c) {
  return e = new Qh(e, t, n, i, c), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = ht(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, qo(a), e;
}
function Hh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Vn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function ff(e) {
  if (!e) return gn;
  e = e._reactInternals;
  e: {
    if (zn(e) !== e || e.tag !== 1) throw Error(B(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (nt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(B(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (nt(n)) return uu(e, n, t);
  }
  return t;
}
function mf(e, t, n, r, s, a, o, i, c) {
  return e = fi(n, r, !0, e, s, a, o, i, c), e.context = ff(null), n = e.current, r = He(), s = mn(n), a = Vt(r, s), a.callback = t ?? null, un(n, a, s), e.current.lanes = s, hl(e, s, r), rt(e, r), e;
}
function $s(e, t, n, r) {
  var s = t.current, a = He(), o = mn(s);
  return n = ff(n), t.context === null ? t.context = n : t.pendingContext = n, t = Vt(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = un(s, t, o), e !== null && (It(e, s, o, a), ql(e, s, o)), o;
}
function Es(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Tc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function mi(e, t) {
  Tc(e, t), (e = e.alternate) && Tc(e, t);
}
function Kh() {
  return null;
}
var pf = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function pi(e) {
  this._internalRoot = e;
}
Ws.prototype.render = pi.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(B(409));
  $s(e, t, null, null);
};
Ws.prototype.unmount = pi.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Dn(function() {
      $s(null, e, null, null);
    }), t[Qt] = null;
  }
};
function Ws(e) {
  this._internalRoot = e;
}
Ws.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Bd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < tn.length && t !== 0 && t < tn[n].priority; n++) ;
    tn.splice(n, 0, e), n === 0 && Hd(e);
  }
};
function hi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Us(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Lc() {
}
function Gh(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var d = Es(o);
        a.call(d);
      };
    }
    var o = mf(t, r, e, 0, null, !1, !1, "", Lc);
    return e._reactRootContainer = o, e[Qt] = o.current, el(e.nodeType === 8 ? e.parentNode : e), Dn(), o;
  }
  for (; s = e.lastChild; ) e.removeChild(s);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var d = Es(c);
      i.call(d);
    };
  }
  var c = fi(e, 0, !1, null, null, !1, !1, "", Lc);
  return e._reactRootContainer = c, e[Qt] = c.current, el(e.nodeType === 8 ? e.parentNode : e), Dn(function() {
    $s(t, c, n, r);
  }), c;
}
function Vs(e, t, n, r, s) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof s == "function") {
      var i = s;
      s = function() {
        var c = Es(o);
        i.call(c);
      };
    }
    $s(t, o, e, s);
  } else o = Gh(n, t, e, s, r);
  return Es(o);
}
Ud = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Rr(t.pendingLanes);
        n !== 0 && (Ro(t, n | 1), rt(t, Ie()), !(ie & 6) && (pr = Ie() + 500, xn()));
      }
      break;
    case 13:
      Dn(function() {
        var r = Ht(e, 1);
        if (r !== null) {
          var s = He();
          It(r, e, 1, s);
        }
      }), mi(e, 1);
  }
};
Do = function(e) {
  if (e.tag === 13) {
    var t = Ht(e, 134217728);
    if (t !== null) {
      var n = He();
      It(t, e, 134217728, n);
    }
    mi(e, 134217728);
  }
};
Vd = function(e) {
  if (e.tag === 13) {
    var t = mn(e), n = Ht(e, t);
    if (n !== null) {
      var r = He();
      It(n, e, t, r);
    }
    mi(e, t);
  }
};
Bd = function() {
  return ue;
};
Qd = function(e, t) {
  var n = ue;
  try {
    return ue = e, t();
  } finally {
    ue = n;
  }
};
Oa = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ta(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = As(r);
            if (!s) throw Error(B(90));
            kd(r), Ta(r, s);
          }
        }
      }
      break;
    case "textarea":
      bd(e, n);
      break;
    case "select":
      t = n.value, t != null && tr(e, !!n.multiple, t, !1);
  }
};
Td = ii;
Ld = Dn;
var qh = { usingClientEntryPoint: !1, Events: [yl, Gn, As, Id, Md, ii] }, Mr = { findFiberByHostInstance: Cn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Yh = { bundleType: Mr.bundleType, version: Mr.version, rendererPackageName: Mr.rendererPackageName, rendererConfig: Mr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: qt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Dd(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Mr.findFiberByHostInstance || Kh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ol = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ol.isDisabled && Ol.supportsFiber) try {
    Is = Ol.inject(Yh), Dt = Ol;
  } catch {
  }
}
ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qh;
ct.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!hi(t)) throw Error(B(200));
  return Hh(e, t, null, n);
};
ct.createRoot = function(e, t) {
  if (!hi(e)) throw Error(B(299));
  var n = !1, r = "", s = pf;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = fi(e, 1, !1, null, null, n, !1, r, s), e[Qt] = t.current, el(e.nodeType === 8 ? e.parentNode : e), new pi(t);
};
ct.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(B(188)) : (e = Object.keys(e).join(","), Error(B(268, e)));
  return e = Dd(t), e = e === null ? null : e.stateNode, e;
};
ct.flushSync = function(e) {
  return Dn(e);
};
ct.hydrate = function(e, t, n) {
  if (!Us(t)) throw Error(B(200));
  return Vs(null, e, t, !0, n);
};
ct.hydrateRoot = function(e, t, n) {
  if (!hi(e)) throw Error(B(405));
  var r = n != null && n.hydratedSources || null, s = !1, a = "", o = pf;
  if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = mf(t, null, e, 1, n ?? null, s, !1, a, o), e[Qt] = t.current, el(e), r) for (e = 0; e < r.length; e++) n = r[e], s = n._getVersion, s = s(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(
    n,
    s
  );
  return new Ws(t);
};
ct.render = function(e, t, n) {
  if (!Us(t)) throw Error(B(200));
  return Vs(null, e, t, !1, n);
};
ct.unmountComponentAtNode = function(e) {
  if (!Us(e)) throw Error(B(40));
  return e._reactRootContainer ? (Dn(function() {
    Vs(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Qt] = null;
    });
  }), !0) : !1;
};
ct.unstable_batchedUpdates = ii;
ct.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Us(n)) throw Error(B(200));
  if (e == null || e._reactInternals === void 0) throw Error(B(38));
  return Vs(e, t, n, !1, r);
};
ct.version = "18.3.1-next-f1338f8080-20240426";
function hf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hf);
    } catch (e) {
      console.error(e);
    }
}
hf(), pd.exports = ct;
var ye = pd.exports, gf, Ac = ye;
gf = Ac.createRoot, Ac.hydrateRoot;
var yf = { exports: {} }, Bs = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xh = p, Zh = Symbol.for("react.element"), Jh = Symbol.for("react.fragment"), eg = Object.prototype.hasOwnProperty, tg = Xh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ng = { key: !0, ref: !0, __self: !0, __source: !0 };
function vf(e, t, n) {
  var r, s = {}, a = null, o = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) eg.call(t, r) && !ng.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) s[r] === void 0 && (s[r] = t[r]);
  return { $$typeof: Zh, type: e, key: a, ref: o, props: s, _owner: tg.current };
}
Bs.Fragment = Jh;
Bs.jsx = vf;
Bs.jsxs = vf;
yf.exports = Bs;
var l = yf.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var rg = {
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
const lg = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), J = (e, t) => {
  const n = p.forwardRef(
    ({
      color: r = "currentColor",
      size: s = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: o,
      className: i = "",
      children: c,
      ...d
    }, h) => p.createElement(
      "svg",
      {
        ref: h,
        ...rg,
        width: s,
        height: s,
        stroke: r,
        strokeWidth: o ? Number(a) * 24 / Number(s) : a,
        className: ["lucide", `lucide-${lg(e)}`, i].join(" "),
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
const wf = J("AlertCircle", [
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
const sg = J("AlertTriangle", [
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
const ag = J("ArrowDownNarrowWide", [
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
const xf = J("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const og = J("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ig = J("ArrowUpDown", [
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
const cg = J("ArrowUpNarrowWide", [
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
const _f = J("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kf = J("BarChart2", [
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
const dg = J("Box", [
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
const ug = J("Calendar", [
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
const fg = J("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lt = J("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mg = J("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sf = J("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gi = J("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pg = J("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const St = J("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cl = J("Download", [
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
const hg = J("Eraser", [
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
const yi = J("FileJson", [
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
const gg = J("FileText", [
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
const yg = J("Folder", [
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
const vg = J("Info", [
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
const wg = J("Lasso", [
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
const bf = J("LayoutGrid", [
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
const xg = J("LayoutList", [
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
const _g = J("Link2Off", [
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
const kg = J("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rc = J("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sg = J("Maximize", [
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
const bg = J("Menu", [
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
const jg = J("Minimize", [
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
const Cg = J("MoreVertical", [
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
const Eg = J("PanelBottom", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jf = J("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dl = J("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qs = J("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hr = J("RefreshCw", [
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
const Ng = J("ScanLine", [
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
const yn = J("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cf = J("Settings", [
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
const Ef = J("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gr = J("Star", [
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
const Ig = J("StickyNote", [
  ["path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z", key: "qazsjp" }],
  ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4", key: "40519r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xr = J("Tag", [
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
const Gt = J("Trash2", [
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
const Mg = J("Trash", [
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
const Tg = J("Type", [
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
const Lg = J("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11", key: "llx8ln" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ag = J("Upload", [
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
const Rg = J("Workflow", [
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
const pe = J("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dg = J("ZoomIn", [
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
const Pg = J("ZoomOut", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);
window.api = ne;
async function se(e) {
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
const Nf = (e) => typeof e == "object" && e !== null, Dc = (e) => {
  if (typeof e == "string")
    return e;
  if (Nf(e) && typeof e.message == "string")
    return e.message;
};
async function wl(e) {
  let t;
  try {
    t = await e.json();
  } catch {
    throw e.ok ? new Error("Failed to parse JSON response") : new Error(`${e.status} ${e.statusText}`);
  }
  if (!e.ok) {
    let n = `${e.status} ${e.statusText}`;
    if (Nf(t)) {
      const r = "error" in t ? t.error : void 0, s = Dc(r), a = "message" in t ? Dc(t.message) : void 0;
      n = s ?? a ?? n;
    }
    throw new Error(n);
  }
  return t;
}
const zg = async () => {
  const e = await ne.fetchApi("/meld/home-dir");
  return (await se(e)).home;
}, Le = ({
  onEscape: e,
  enabled: t = !0,
  capture: n = !0
}) => {
  p.useEffect(() => {
    if (!t) return;
    const r = (s) => {
      s.key === "Escape" && (s.preventDefault(), s.stopPropagation(), s.stopImmediatePropagation(), e());
    };
    return window.addEventListener("keydown", r, { capture: n }), () => window.removeEventListener("keydown", r, { capture: n });
  }, [e, t, n]);
};
let Ns = !1;
const Og = (e) => {
  Ns = e, Ns && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, Fg = (...e) => {
  Ns && console.log("[Meld]", ...e);
}, $g = (...e) => {
  Ns && console.warn("[Meld]", ...e);
}, Wg = (...e) => {
  console.error("[Meld]", ...e);
}, W = {
  log: Fg,
  warn: $g,
  error: Wg,
  init: Og
};
function ns(e, t) {
  const n = e;
  return {
    images: Array.isArray(n == null ? void 0 : n.images) ? n.images : [],
    total: typeof (n == null ? void 0 : n.total) == "number" ? n.total : (t == null ? void 0 : t.total) ?? 0,
    offset: typeof (n == null ? void 0 : n.offset) == "number" ? n.offset : (t == null ? void 0 : t.offset) ?? 0,
    limit: typeof (n == null ? void 0 : n.limit) == "number" ? n.limit : (t == null ? void 0 : t.limit) ?? 0
  };
}
const rs = async (e = 0, t = 30, n = "", r = "default", s = !1) => {
  const a = await ne.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${s ? "&minimal=true" : ""}`
  );
  return se(a);
}, If = async (e) => {
  const t = await ne.fetchApi(`/meld/image/${e}/details`);
  return se(t);
}, Ug = async (e, t = !1) => {
  const n = await ne.fetchApi("/meld/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      permanent: t
    })
  });
  await se(n);
}, vo = async (e) => {
  const t = await ne.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  return se(t);
}, Mf = async (e) => {
  const t = await ne.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  return se(t);
}, Pc = async (e, t) => {
  const n = await ne.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  });
  await se(n);
}, Vg = async (e, t, n) => {
  const r = t !== void 0 ? `&threshold=${t}` : "", s = await ne.fetchApi(`/meld/suggest-parents?id=${e}${r}`, { signal: n });
  try {
    return await se(s);
  } catch {
    return [];
  }
}, vi = async (e) => {
  const t = await ne.fetchApi(`/meld/lineage?id=${e}`);
  try {
    return await se(t);
  } catch {
    return [];
  }
}, Bg = async (e, t) => {
  const n = await ne.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  });
  await se(n);
}, Qg = async (e, t) => {
  const n = await ne.fetchApi("/meld/image-notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, userNotes: t })
  });
  return se(n);
}, Tf = async (e, t, n) => {
  const r = await ne.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  });
  await se(r);
}, Hg = async (e) => {
  const t = await ne.fetchApi(`/meld/image/${e}/workflow`);
  return se(t);
}, Kg = async (e) => {
  const t = await ne.fetchApi(`/meld/image/${e}/snapshot_data`);
  return se(t);
}, xa = (e, t) => {
  let n = e.replace(/\\/g, "/").split("/").pop() ?? "";
  return n === "." || n === ".." || n.startsWith("-") || (n = n.replace(/[\\:*?"<>|/\x00-\x1f\x7f\s]/g, "_"), n = n.replace(/[^a-zA-Z0-9\-_.]/g, "_"), n = n.replace(/\.{2,}/g, ".").replace(/[\s.]+$/, ""), !n || n === "." || n === ".." || n.startsWith("-") || n.length > 255) ? t : n;
}, Lf = async (e, t, n, r, s) => {
  const a = await ne.fetchApi("/meld/download/raw", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, removeMetadata: t, resizeMode: n, resizeValue: r, resizeFilter: s })
  });
  if (!a.ok) {
    let v = `Failed to fetch image ${e}: ${a.statusText || a.status}`;
    try {
      await se(a.clone());
    } catch (g) {
      const b = g instanceof Error ? g.message : String(g);
      b && (v = `Failed to fetch image ${e}: ${b}`);
    }
    throw new Error(v);
  }
  const o = (a.headers.get("Content-Type") || "").toLowerCase();
  if (o.includes("application/json") || o.includes("+json")) {
    let v = `Image ${e}: server returned JSON instead of binary data`;
    try {
      await se(a.clone()), v = `Image ${e}: server returned a JSON response on the binary download path`;
    } catch (g) {
      const b = g instanceof Error ? g.message : String(g);
      b && (v = b);
    }
    throw new Error(v);
  }
  const i = `image_${e}.png`, c = a.headers.get("Content-Disposition");
  let d = i;
  if (c) {
    const v = c.match(/filename\*=([^;\s]+)/i);
    if (v != null && v[1]) {
      let g = v[1];
      const b = g.match(/^([A-Za-z0-9-]+)'[^']*'(.*)$/);
      b != null && b[2] && (g = b[2]);
      try {
        d = xa(decodeURIComponent(g), i);
      } catch {
        const w = c.match(/filename="?([^"]+)"?/);
        w != null && w[1] && (d = xa(w[1], i));
      }
    } else if (c.includes("filename=")) {
      const g = c.match(/filename="?([^"]+)"?/);
      g != null && g[1] && (d = xa(g[1], i));
    }
  }
  return { blob: await a.blob(), filename: d };
}, zc = 500, Oc = 2 * 1024 * 1024 * 1024, Gg = async (e, t, n, r, s, a) => {
  const o = (await import("./jszip.min.js").then((x) => x.j)).default, i = new o(), c = e.length;
  if (c > zc)
    throw new Error(
      `ZIP entry limit reached (${zc} files). Please reduce the number of images.`
    );
  const d = /* @__PURE__ */ new Set();
  let h = 0, v = 0;
  for (const x of e) {
    a == null || a(h, c);
    const { blob: S, filename: f } = await Lf(
      x,
      t,
      n,
      r,
      s
    );
    if (v += S.size, v > Oc)
      throw new Error(
        `ZIP size limit reached (${Oc / 1024 / 1024 / 1024} GB). Please reduce the number of images.`
      );
    let m = f;
    if (d.has(m)) {
      const u = m.lastIndexOf("."), y = u > 0 ? m.slice(0, u) : m, _ = u > 0 ? m.slice(u) : "";
      let k = 2;
      for (; d.has(m); )
        m = `${y}_${k}${_}`, k++;
    }
    d.add(m), i.file(m, S), h += 1;
  }
  a == null || a(c, c);
  const g = await i.generateAsync({ type: "blob" }), b = window.URL.createObjectURL(g), w = document.createElement("a");
  w.href = b, w.download = `meld_images_${Date.now()}.zip`, document.body.appendChild(w), w.click(), window.URL.revokeObjectURL(b), document.body.removeChild(w);
}, qg = async (e, t, n, r, s) => {
  const { blob: a, filename: o } = await Lf(
    e,
    t,
    n,
    r,
    s
  ), i = window.URL.createObjectURL(a), c = document.createElement("a");
  c.href = i, c.download = o, document.body.appendChild(c), c.click(), window.URL.revokeObjectURL(i), document.body.removeChild(c);
}, Yg = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await ne.fetchApi(n);
  return se(r);
}, Xg = async () => {
  const e = await ne.fetchApi("/meld/search-suggestions");
  return se(e);
}, Zg = async () => {
  const e = await ne.fetchApi("/meld/search-keywords");
  return se(e);
}, Jg = async () => {
  const e = await ne.fetchApi("/meld/search-config");
  return se(e);
}, ey = async () => {
  const e = await ne.fetchApi("/meld/favorites");
  return se(e);
}, ty = async (e, t) => {
  const n = await ne.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  });
  await se(n);
}, Fc = async (e) => {
  const t = await ne.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  });
  await se(t);
}, ny = async (e, t, n) => {
  const r = await ne.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  });
  await se(r);
}, ry = {
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
  "fullscreen.details.core_prompt_count": 30,
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
  "viewer.details.core_prompt_count": 30,
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
}, Af = async () => {
  let e;
  try {
    const t = await ne.fetchApi("/meld/settings");
    e = await se(t);
  } catch (t) {
    return W.error("Failed to fetch settings, using defaults", t), ry;
  }
  return typeof e["sidebar.show_filename"] == "boolean" && (e["sidebar.show_filename"] = e["sidebar.show_filename"] ? "filename" : "none"), typeof e["viewer.details.show_filename"] == "boolean" && (e["viewer.details.show_filename"] = e["viewer.details.show_filename"] ? "filename" : "none"), typeof e["fullscreen.details.show_filename"] == "boolean" && (e["fullscreen.details.show_filename"] = e["fullscreen.details.show_filename"] ? "filename" : "none"), e;
}, ly = async (e, t) => {
  const n = await ne.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  });
  await se(n);
}, sy = async () => {
  const e = await ne.fetchApi("/meld/clear-thumbnail-cache", {
    method: "POST"
  });
  return se(e);
};
function Tr(e) {
  return Array.from(new Map(e.map((t) => [t.id, t])).values());
}
const ay = (e, t) => {
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "REMOVE_IMAGES": {
      const n = new Set(t.payload), r = Tr(e.images.filter((o) => !n.has(o.id))), s = Tr(
        e.lineageImages.filter((o) => !n.has(o.id))
      ), a = Math.max(
        0,
        e.pagination.total + (r.length - e.images.length)
      );
      return {
        ...e,
        images: r,
        lineageImages: s,
        pagination: {
          ...e.pagination,
          total: a
        }
      };
    }
    case "ADD_IMAGES": {
      const n = [...e.images, ...t.payload], r = Tr(n).sort(
        (a, o) => o.created_at - a.created_at
      ), s = Math.max(
        0,
        e.pagination.total + (r.length - e.images.length)
      );
      return {
        ...e,
        images: r,
        pagination: {
          ...e.pagination,
          total: s
        }
      };
    }
    case "UPDATE_IMAGE": {
      const n = t.payload, r = e.images.map(
        (a) => a.id === n.id ? n : a
      ), s = e.lineageImages.map(
        (a) => a.id === n.id ? n : a
      );
      return {
        ...e,
        images: r,
        lineageImages: s
      };
    }
    case "SET_IMAGES": {
      const { images: n, total: r, offset: s } = t.payload, a = Tr(n);
      return {
        ...e,
        images: a,
        isLoading: !1,
        error: null,
        pagination: {
          total: r,
          offset: s,
          limit: e.pagination.limit,
          // hasMore must use deduped length to preserve dedupe-aware pagination.
          hasMore: s + a.length < r
        }
      };
    }
    case "APPEND_IMAGES": {
      const { images: n, total: r, offset: s } = t.payload, a = [...e.images, ...n], o = Tr(a);
      return {
        ...e,
        images: o,
        isLoading: !1,
        error: null,
        pagination: {
          ...e.pagination,
          total: r,
          offset: s,
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
function Rf(e) {
  if (typeof e == "number")
    return !1;
  const t = e.initialMaskMode;
  return t ? t === "apply" || t === "run" ? t : t === !0 ? "run" : !1 : !1;
}
const oy = (e, t) => {
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
      const n = t.payload, r = Rf(n);
      if (!r)
        return e;
      const s = typeof n == "number" ? n : n.id;
      return {
        ...e,
        activeModal: {
          type: "mask_editor",
          imageId: s,
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
}, iy = (e, t) => {
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
      const [s, a] = [Math.min(n, r), Math.max(n, r)], o = new Set(e.selectedIds);
      for (let i = s; i <= a; i++) {
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
      return t.payload.forEach((s) => {
        n.delete(s), r === s && (r = null);
      }), {
        ...e,
        selectedIds: n,
        lastSelectedId: r
      };
    }
    case "REMOVE_IMAGES": {
      const n = new Set(t.payload), r = new Set(e.selectedIds);
      for (const s of n)
        r.delete(s);
      return {
        ...e,
        selectedIds: r,
        lastSelectedId: e.lastSelectedId !== null && n.has(e.lastSelectedId) ? null : e.lastSelectedId
      };
    }
    default:
      return e;
  }
}, cy = (e, t) => {
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
function $c(e, t) {
  const n = e.searchQuery.trim() !== "";
  return e.viewerMode === "lighttable" && e.viewerLightTableSlotId ? t ?? [] : e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
    (r) => r.exists !== !1 && (e.settings["gallery.show_parent_images"] || n || !r.has_children)
  );
}
const dy = (e, t) => {
  var n, r, s, a, o;
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
      const i = t.payload, c = typeof i == "number" ? i : i.id, d = typeof i == "number" ? "gallery" : i.mode, h = typeof i != "number" && i.mode === "lighttable" ? i.slotId : null, v = Rf(i), g = e.viewerMode === "lineage" && d === "lineage" && e.lineageImages.some((b) => b.id === c);
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
      const c = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], d = $c(e, (s = t.payload) == null ? void 0 : s.currentList);
      if (e.viewerImageId === null || d.length === 0) return e;
      const h = d.findIndex((b) => b.id === e.viewerImageId);
      if (h === -1 || h === d.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || h === d.length - 1 && !c)
        return e;
      const v = (h + 1) % d.length, g = d[v];
      return g ? {
        ...e,
        viewerImageId: g.id
      } : e;
    }
    case "PREVIOUS_IMAGE": {
      const c = ((a = t.payload) == null ? void 0 : a.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], d = $c(e, (o = t.payload) == null ? void 0 : o.currentList);
      if (e.viewerImageId === null || d.length === 0) return e;
      const h = d.findIndex((b) => b.id === e.viewerImageId);
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
}, uy = [
  dy,
  ay,
  iy,
  oy,
  cy
];
function fy(e, t) {
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
  } : uy.reduce((n, r) => r(n, t), e);
}
const my = {
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
    "fullscreen.details.show_core_prompt": !1,
    "fullscreen.details.core_prompt_count": 30,
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
    "viewer.details.core_prompt_count": 30,
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
function py(e, t) {
  return fy(e, t);
}
const Df = p.createContext(void 0), hy = ({ children: e }) => {
  const [t, n] = p.useReducer(py, my), r = p.useRef(t.images.length), s = p.useRef(0), a = p.useRef(/* @__PURE__ */ new Map());
  p.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const o = p.useCallback(
    async (w, x, S) => {
      const f = t.settings["gallery.max_load_count"], m = 200;
      let u = w;
      for (; u < Math.min(x, f) && S === s.current; )
        try {
          const y = Math.min(m, f - u);
          W.log("Background fetch: starting chunk", {
            offset: u,
            limit: y
          });
          const _ = await rs(
            u,
            y,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (S !== s.current) break;
          const { images: k, total: j } = ns(_, {
            total: x
          });
          if (n({
            type: "APPEND_IMAGES",
            payload: {
              images: k,
              total: j,
              offset: u,
              limit: y
            }
          }), u += k.length, k.length === 0 || u >= j) break;
          await new Promise((E) => setTimeout(E, 300));
        } catch (y) {
          W.error("Background fetch failed", y);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), i = p.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const w = performance.now(), x = ++s.current;
    try {
      const S = t.searchQuery.trim() !== "", f = t.settings["gallery.initial_load_count"];
      W.log("refreshImages: starting initial fetch", {
        isSearch: S,
        fetchLimit: f,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const m = await rs(
        0,
        f,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), u = ns(m, {
        total: t.pagination.total,
        offset: 0,
        limit: f
      }), y = performance.now() - w;
      W.log("refreshImages: initial fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: y.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: u }), u.total > f && o(f, u.total, x);
    } catch (S) {
      W.error("refreshImages: fetch failed", S), n({
        type: "SET_ERROR",
        payload: S instanceof Error ? S.message : String(S)
      });
    }
  }, [
    t.searchQuery,
    t.viewScope,
    t.settings,
    t.pagination.total,
    o
  ]), c = p.useCallback(async () => {
    if (t.isLoading || !t.pagination.hasMore) return;
    n({ type: "SET_LOADING", payload: !0 });
    const w = performance.now();
    try {
      const x = r.current, S = t.searchQuery.trim() !== "", f = t.pagination.limit;
      W.log("loadMoreImages: starting fetch", {
        nextOffset: x,
        fetchLimit: f,
        isSearch: S
      });
      const m = await rs(
        x,
        f,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), u = ns(m, {
        total: t.pagination.total,
        offset: x,
        limit: f
      }), y = performance.now() - w;
      W.log("loadMoreImages: fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: y.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: u });
    } catch (x) {
      W.error("loadMoreImages: fetch failed", x), n({
        type: "SET_ERROR",
        payload: x instanceof Error ? x.message : String(x)
      });
    }
  }, [
    t.isLoading,
    t.pagination.hasMore,
    t.pagination.limit,
    t.pagination.total,
    t.searchQuery,
    t.viewScope
  ]), d = p.useCallback(async () => {
    try {
      const w = await ey();
      n({ type: "SET_FAVORITES", payload: w });
    } catch (w) {
      W.error("Failed to load favorites", w);
    }
  }, []), h = p.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const w = Array.from(t.selectedIds), S = t.images.filter((f) => t.selectedIds.has(f.id)).some((f) => f.parent_id || f.has_children);
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: w,
        hasLineage: S,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), v = p.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const w = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const S = (await vo(w)).restored_ids || w;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: S }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (x) {
      n({
        type: "SET_ERROR",
        payload: x instanceof Error ? x.message : String(x)
      });
    }
  }, [t.selectedIds, t.viewScope]), g = p.useCallback(
    async (w, x) => {
      try {
        await ly(w, x), n({ type: "SET_SETTINGS", payload: { [w]: x } });
      } catch (S) {
        n({
          type: "SET_ERROR",
          payload: S instanceof Error ? S.message : String(S)
        });
      }
    },
    []
  ), b = p.useCallback(
    async (w) => {
      const x = t.images.find((u) => u.id === w);
      if (x && !x.is_minimal)
        return x;
      const S = t.lineageImages.find((u) => u.id === w);
      if (S && !S.is_minimal)
        return S;
      const f = a.current.get(w);
      if (f)
        return f;
      const m = (async () => {
        try {
          W.log("fetchFullImageDetails: fetching full data", { id: w });
          const u = await If(w);
          return n({ type: "UPDATE_IMAGE", payload: u }), u;
        } finally {
          a.current.delete(w);
        }
      })();
      return a.current.set(w, m), m;
    },
    [t.images, t.lineageImages]
  );
  return p.useEffect(() => {
    (async () => {
      try {
        const x = await Af();
        n({ type: "SET_SETTINGS", payload: x });
      } catch (x) {
        W.error("Failed to load settings", x);
      }
    })();
  }, []), p.useEffect(() => {
    d();
  }, [d]), p.useEffect(() => {
    const w = () => {
      i();
    }, x = (f) => {
      const m = f.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: m }
      });
    }, S = (f) => {
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
    return window.addEventListener("meld-refresh", w), window.addEventListener("meld-scan-progress", x), window.addEventListener("meld-scan-finished", S), () => {
      window.removeEventListener("meld-refresh", w), window.removeEventListener("meld-scan-progress", x), window.removeEventListener("meld-scan-finished", S);
    };
  }, [i, t.scanStatus.progress.total]), p.useEffect(() => {
    i();
  }, [i]), /* @__PURE__ */ l.jsx(
    Df.Provider,
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
        fetchFullImageDetails: b
      },
      children: e
    }
  );
}, he = () => {
  const e = p.useContext(Df);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, yt = (e, t = 200) => {
  if (!e.filename) return "";
  const n = encodeURIComponent, r = n(e.type || "output"), s = n(e.subfolder ?? "");
  return `/api/meld/view-thumb?${`filename=${n(e.filename)}&type=${r}&subfolder=${s}&size=${t}`}`;
}, wi = (e) => {
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
}, xi = async () => {
  const e = await ne.fetchApi("/meld/tags");
  return se(e);
}, gy = async (e) => {
  const t = await ne.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  return se(t);
}, yy = async (e) => {
  const t = await ne.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  });
  await se(t);
}, vy = async (e, t) => {
  const n = await ne.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  await se(n);
}, wy = (e) => {
  if (typeof e != "object" || e === null)
    return !1;
  const t = e;
  return typeof t.name == "string" && typeof t.subfolder == "string" && typeof t.type == "string";
}, xy = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await ne.fetchApi("/upload/image", {
    method: "POST",
    body: t
  }), r = await wl(n);
  if (!wy(r))
    throw new Error("Invalid upload image response shape");
  return r;
}, _y = async (e, t, n = !1, r) => {
  const s = await ne.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  try {
    return await se(s);
  } catch (a) {
    return W.error("Failed to fetch folders", a), { folders: [], images: [], image_count: 0 };
  }
}, ky = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const s = await ne.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  try {
    return await se(s);
  } catch (a) {
    return W.error("Failed to fetch folder metadata", a), {};
  }
}, Sy = async (e, t, n) => {
  const r = await ne.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  try {
    return (await se(r)).count;
  } catch {
    return 0;
  }
}, by = async (e) => {
  const t = await ne.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  await se(t);
}, jy = async () => {
  const e = await ne.fetchApi("/meld/scan/cancel", {
    method: "POST"
  });
  await se(e);
}, Pf = () => {
  const { dispatch: e } = he(), [t, n] = p.useState(() => {
    const I = localStorage.getItem("meld-import-config"), z = {
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
        const M = JSON.parse(I);
        return { ...z, ...M, tags: [] };
      } catch {
        return z;
      }
    return z;
  });
  p.useEffect(() => {
    const { tags: I, ...z } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(z));
  }, [t]);
  const [r, s] = p.useState([]), [a, o] = p.useState([]), [i, c] = p.useState(0), [d, h] = p.useState(!1), [v, g] = p.useState([]), [b, w] = p.useState(""), [x, S] = p.useState(!1), [f, m] = p.useState(null), u = p.useRef(!1), y = (I) => {
    I.target === I.currentTarget && (u.current = !0);
  }, _ = (I) => {
    I.target === I.currentTarget && u.current && e({ type: "CLOSE_MODAL" }), u.current = !1;
  };
  p.useEffect(() => {
    (async () => {
      try {
        const z = await zg();
        n((M) => M.custom_path ? M : { ...M, custom_path: z });
      } catch (z) {
        W.error("Failed to fetch home directory:", z);
      }
    })();
  }, []), p.useEffect(() => {
    const I = new AbortController();
    return (async () => {
      const M = t.type === "custom" ? t.custom_path : t.subfolder;
      if (W.log(`loadFolders started. Path: "${M}", Type: "${t.type}"`), t.type === "custom" && !M) {
        W.log("Custom path is empty, skipping load."), s([]), o([]), c(0), h(!1);
        return;
      }
      h(!0);
      const A = M, C = t.type;
      try {
        W.log("Step 1: Fast load starting...");
        const T = await _y(t.type, M, !0, I.signal);
        if (I.signal.aborted) {
          W.log("Step 1: Aborted.");
          return;
        }
        const P = Array.isArray(T == null ? void 0 : T.folders) ? T.folders : [], U = Array.isArray(T == null ? void 0 : T.images) ? T.images : [];
        W.log(`Step 1 complete. Found ${P.length} folders, ${U.length} images.`), s(P), o(U), c(null);
        const R = P.map((F) => F.name);
        R.length > 0 && (W.log(`Step 2: Metadata fetch starting for ${R.length} folders...`), ky(C, A, R, I.signal).then((F) => {
          if (I.signal.aborted) {
            W.log("Step 2: Aborted.");
            return;
          }
          W.log("Step 2: Metadata fetch complete."), s(
            (O) => O.map((Z) => {
              const re = F[Z.name];
              return re ? { ...Z, count: re.count, preview: re.preview } : Z;
            })
          );
        }).catch((F) => {
          F.name !== "AbortError" && W.error("Step 2: Metadata fetch failed:", F);
        })), W.log("Step 3: Path image count starting..."), Sy(C, A, I.signal).then((F) => {
          if (I.signal.aborted) {
            W.log("Step 3: Aborted.");
            return;
          }
          W.log(`Step 3: Path image count complete: ${F}`), c(F);
        }).catch((F) => {
          F.name !== "AbortError" && W.error("Step 3: Path image count failed:", F);
        });
      } catch (T) {
        if (T.name === "AbortError") {
          W.log("Request aborted.");
          return;
        }
        W.error("Failed to load folders:", T), s([]), o([]), c(0);
      } finally {
        I.signal.aborted || h(!1);
      }
    })(), () => {
      I.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const k = p.useCallback(async () => {
    S(!0);
    try {
      const I = await xi();
      g(I);
    } catch (I) {
      W.error("Failed to fetch tags:", I);
    } finally {
      S(!1);
    }
  }, []);
  p.useEffect(() => {
    k();
  }, [k]), Le({
    onEscape: p.useCallback(() => {
      f ? m(null) : e({ type: "CLOSE_MODAL" });
    }, [f, e])
  });
  const j = p.useMemo(() => v.filter(
    (I) => I.name.toLowerCase().includes(b.toLowerCase()) && !t.tags.includes(I.name)
  ), [v, b, t.tags]), E = (I) => {
    const z = I.trim();
    z && !t.tags.includes(z) && (n({ ...t, tags: [...t.tags, z] }), w(""));
  }, D = (I) => {
    n({ ...t, tags: t.tags.filter((z) => z !== I) });
  }, N = (I) => {
    I.key === "Enter" && b.trim() && (I.preventDefault(), E(b.trim()));
  }, L = async () => {
    try {
      await by(t), e({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !0,
          isFinished: !1,
          shouldCancel: !1,
          newCount: 0,
          progress: { current: 0, total: 0, phase: "registering" }
        }
      }), e({ type: "CLOSE_MODAL" });
    } catch (I) {
      W.error("Failed to start scan:", I), alert(`Failed to start scan: ${I}`);
    }
  }, $ = (I) => {
    if (t.type === "custom") {
      const z = t.custom_path.includes("\\") ? "\\" : "/", M = t.custom_path.endsWith(z) ? `${t.custom_path}${I}` : `${t.custom_path}${z}${I}`;
      n({ ...t, custom_path: M });
    } else {
      const z = t.subfolder ? `${t.subfolder}/${I}` : I;
      n({ ...t, subfolder: z });
    }
  }, Q = () => {
    if (t.type === "custom") {
      const I = t.custom_path.includes("\\") ? "\\" : "/", z = t.custom_path.split(I);
      if (z.length > 1) {
        z.pop();
        let M = z.join(I);
        M === "" && I === "/" && (M = "/"), n({ ...t, custom_path: M });
      }
    } else {
      const I = t.subfolder.split("/");
      I.pop(), n({ ...t, subfolder: I.join("/") });
    }
  };
  return ye.createPortal(
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: y,
        onMouseUp: _,
        children: [
          /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--large",
              onClick: (I) => I.stopPropagation(),
              children: [
                /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ l.jsx("h2", { children: "Import Images" }),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => e({ type: "CLOSE_MODAL" }),
                      children: /* @__PURE__ */ l.jsx(pe, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ l.jsxs("div", { className: "meld-import-container", children: [
                  /* @__PURE__ */ l.jsxs("div", { className: "meld-import-sidebar", children: [
                    /* @__PURE__ */ l.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ l.jsx("label", { htmlFor: "base-location", children: "Base Location" }),
                      /* @__PURE__ */ l.jsxs(
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
                            /* @__PURE__ */ l.jsx("option", { value: "output", children: "Output Directory" }),
                            /* @__PURE__ */ l.jsx("option", { value: "input", children: "Input Directory" }),
                            /* @__PURE__ */ l.jsx("option", { value: "custom", children: "Custom Path (Absolute)" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ l.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ l.jsx("span", { className: "meld-form-label", children: "Images Found" }),
                      /* @__PURE__ */ l.jsx("div", { className: "meld-path-count", children: i === null ? /* @__PURE__ */ l.jsx("span", { className: "meld-path-count--loading", children: "Scanning..." }) : `${i} images` })
                    ] }),
                    /* @__PURE__ */ l.jsx("div", { className: "meld-form-group--checkbox", children: /* @__PURE__ */ l.jsxs("label", { children: [
                      /* @__PURE__ */ l.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: t.recursive,
                          onChange: (I) => n({ ...t, recursive: I.target.checked })
                        }
                      ),
                      "Recursive Scan"
                    ] }) }),
                    /* @__PURE__ */ l.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ l.jsx("label", { htmlFor: "link-strategy", children: "Source Linking" }),
                      /* @__PURE__ */ l.jsxs(
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
                            /* @__PURE__ */ l.jsx("option", { value: "none", children: "Do not link" }),
                            /* @__PURE__ */ l.jsx("option", { value: "new_only", children: "Only for new images" }),
                            /* @__PURE__ */ l.jsx("option", { value: "all", children: "Reset for all images" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ l.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ l.jsx("label", { htmlFor: "import-tags", children: "Tags to Add" }),
                      /* @__PURE__ */ l.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ l.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((I) => /* @__PURE__ */ l.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        I,
                        /* @__PURE__ */ l.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => D(I),
                            children: /* @__PURE__ */ l.jsx(pe, { size: 12 })
                          }
                        )
                      ] }, I)) }),
                      /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ l.jsx(yn, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ l.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: b,
                            onChange: (I) => w(I.target.value),
                            onKeyDown: N
                          }
                        ),
                        b.trim() && !t.tags.includes(b.trim()) && /* @__PURE__ */ l.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => E(b),
                            children: /* @__PURE__ */ l.jsx(Qs, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions", children: x ? /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : j.length === 0 ? b && /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        b
                      ] }) : j.map((I) => /* @__PURE__ */ l.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => E(I.name),
                          children: I.name
                        },
                        I.id
                      )) })
                    ] }),
                    /* @__PURE__ */ l.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ l.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "meld-btn meld-btn--primary",
                        onClick: L,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ l.jsx(dl, { size: 16 }),
                          "Start Import"
                        ]
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ l.jsxs("div", { className: "meld-import-browser", children: [
                    /* @__PURE__ */ l.jsxs("div", { className: "meld-browser-header", children: [
                      /* @__PURE__ */ l.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-browser-back",
                          disabled: t.type === "custom" ? t.custom_path === "/" || !t.custom_path.includes("/") && !t.custom_path.includes("\\") : !t.subfolder,
                          onClick: Q,
                          children: [
                            /* @__PURE__ */ l.jsx(Sf, { size: 16 }),
                            "Back"
                          ]
                        }
                      ),
                      /* @__PURE__ */ l.jsx("div", { className: "meld-browser-path-container", children: t.type === "custom" ? /* @__PURE__ */ l.jsx(
                        "input",
                        {
                          type: "text",
                          className: "meld-browser-path-input",
                          value: t.custom_path,
                          onChange: (I) => n({ ...t, custom_path: I.target.value }),
                          placeholder: "Enter absolute path..."
                        }
                      ) : /* @__PURE__ */ l.jsxs("div", { className: "meld-browser-path-display", children: [
                        /* @__PURE__ */ l.jsxs("span", { className: "meld-browser-path-type", children: [
                          t.type,
                          "/"
                        ] }),
                        t.subfolder
                      ] }) })
                    ] }),
                    /* @__PURE__ */ l.jsx("div", { className: "meld-folder-list", children: d ? /* @__PURE__ */ l.jsx("div", { className: "meld-browser-loading", children: "Loading..." }) : r.length === 0 && a.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-browser-empty", children: "No items found." }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                      r.map((I) => /* @__PURE__ */ l.jsxs(
                        "div",
                        {
                          role: "button",
                          tabIndex: 0,
                          className: "meld-folder-item",
                          onClick: () => $(I.name),
                          onKeyDown: (z) => {
                            (z.key === "Enter" || z.key === " ") && (z.preventDefault(), $(I.name));
                          },
                          "aria-label": `Open folder ${I.name}`,
                          children: [
                            /* @__PURE__ */ l.jsx("div", { className: "meld-folder-icon-wrapper", children: I.preview ? /* @__PURE__ */ l.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: yt(I.preview, 64),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ l.jsx(yg, { size: 16 }) }),
                            /* @__PURE__ */ l.jsx("span", { className: "meld-folder-name", children: I.name }),
                            /* @__PURE__ */ l.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${I.count === null ? "meld-folder-count--loading" : ""}`,
                                children: I.count !== null ? `${I.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ l.jsx(gi, { size: 14 })
                          ]
                        },
                        I.name
                      )),
                      a.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "meld-browser-image-grid", children: a.map((I) => /* @__PURE__ */ l.jsx(
                        "div",
                        {
                          role: "button",
                          tabIndex: 0,
                          className: "meld-browser-image-item",
                          onClick: () => m(I),
                          onKeyDown: (z) => {
                            (z.key === "Enter" || z.key === " ") && (z.preventDefault(), m(I));
                          },
                          "aria-label": `Preview ${I.filename}`,
                          children: /* @__PURE__ */ l.jsx(
                            "img",
                            {
                              src: yt(I, 120),
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
          f && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (I) => {
                I.stopPropagation(), m(null);
              },
              children: /* @__PURE__ */ l.jsxs("div", { className: "meld-import-preview-content", onClick: (I) => I.stopPropagation(), children: [
                /* @__PURE__ */ l.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-import-preview-close",
                      onClick: () => m(null),
                      children: /* @__PURE__ */ l.jsx(pe, { size: 24 })
                    }
                  ),
                  /* @__PURE__ */ l.jsx("img", { src: yt(f, 400), alt: f.filename })
                ] }),
                /* @__PURE__ */ l.jsx("div", { className: "meld-import-preview-info", children: f.filename })
              ] })
            }
          )
        ]
      }
    ),
    document.fullscreenElement || document.body
  );
}, zf = "meld-download-options", Cy = [
  { value: "lanczos", label: "Lanczos (high quality)" },
  { value: "bicubic", label: "Bicubic" },
  { value: "bilinear", label: "Bilinear" },
  { value: "box", label: "Box" },
  { value: "hamming", label: "Hamming" },
  { value: "nearest", label: "Nearest (pixel art)" }
];
function Ey() {
  try {
    const e = localStorage.getItem(zf);
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
function Ny(e) {
  try {
    localStorage.setItem(zf, JSON.stringify(e));
  } catch {
  }
}
const Wc = "meld-download-modal-title", Iy = ({ imageIds: e, onSuccess: t, onClose: n }) => {
  const [r, s] = p.useState(() => Ey()), { format: a, removeMetadata: o, resizeMode: i, resizeValue: c, resizeFilter: d } = r, [h, v] = p.useState(!1), g = p.useRef(!0), [b, w] = p.useState(null), [x, S] = p.useState(String(c)), f = p.useRef(!1);
  p.useEffect(() => () => {
    g.current = !1;
  }, []), p.useEffect(() => {
    Ny(r);
  }, [r]), p.useEffect(() => {
    S(String(c));
  }, [c]);
  const m = (N) => {
    N.target === N.currentTarget && (f.current = !0);
  }, u = (N) => {
    N.target === N.currentTarget && f.current && (h || n()), f.current = !1;
  };
  Le({
    onEscape: () => {
      h || n();
    }
  });
  const y = (N) => {
    S(N);
    const L = Number(N);
    if (!Number.isFinite(L) || L <= 0)
      return;
    const I = Math.min(i === "percent" ? 99 : 99999, Math.max(1, Math.round(L)));
    s((z) => ({ ...z, resizeValue: I }));
  }, _ = async () => {
    if (e.length === 0) {
      n();
      return;
    }
    g.current = !0, v(!0);
    const N = e.length;
    w({ current: 0, total: N });
    try {
      if (a === "zip")
        await Gg(
          e,
          o,
          i,
          c,
          d,
          (L, $) => {
            g.current && w({ current: L, total: $ });
          }
        );
      else {
        let L = 0;
        for (const $ of e) {
          if (!g.current) break;
          w({ current: L, total: N }), await qg(
            $,
            o,
            i,
            c,
            d
          ), L += 1, g.current && w({ current: L, total: N }), await new Promise((Q) => requestAnimationFrame(() => Q()));
        }
      }
      if (!g.current) return;
      n(), t == null || t();
    } catch (L) {
      if (!g.current) return;
      W.error("Download failed:", L), alert("Failed to download images.");
    } finally {
      g.current && (v(!1), w(null));
    }
  }, k = i === "percent" ? "%" : "px", j = 1, E = i === "percent" ? 99 : 99999, D = i === "percent" ? "1-99" : "Max edge (px)";
  return ye.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: m,
        onMouseUp: u,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "meld-modal-content",
            onClick: (N) => N.stopPropagation(),
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": Wc,
            children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
                  /* @__PURE__ */ l.jsx(cl, { size: 18 }),
                  /* @__PURE__ */ l.jsxs("h3", { id: Wc, style: { margin: 0 }, children: [
                    "Download (",
                    e.length,
                    " image",
                    e.length > 1 ? "s" : "",
                    ")"
                  ] })
                ] }),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: n,
                    disabled: h,
                    children: /* @__PURE__ */ l.jsx(pe, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-body", style: { padding: "20px" }, children: [
                /* @__PURE__ */ l.jsxs("div", { style: { marginBottom: "20px" }, children: [
                  /* @__PURE__ */ l.jsx(
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
                  /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", gap: "16px" }, children: [
                    /* @__PURE__ */ l.jsxs(
                      "label",
                      {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                          cursor: "pointer"
                        },
                        children: [
                          /* @__PURE__ */ l.jsx(
                            "input",
                            {
                              type: "radio",
                              name: "format",
                              value: "zip",
                              checked: a === "zip",
                              onChange: () => s((N) => ({ ...N, format: "zip" })),
                              disabled: h
                            }
                          ),
                          "ZIP (Single File)"
                        ]
                      }
                    ),
                    /* @__PURE__ */ l.jsxs(
                      "label",
                      {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                          cursor: "pointer"
                        },
                        children: [
                          /* @__PURE__ */ l.jsx(
                            "input",
                            {
                              type: "radio",
                              name: "format",
                              value: "raw",
                              checked: a === "raw",
                              onChange: () => s((N) => ({ ...N, format: "raw" })),
                              disabled: h
                            }
                          ),
                          "Raw (Multiple Files)"
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ l.jsxs("div", { style: { marginBottom: "20px" }, children: [
                  /* @__PURE__ */ l.jsx(
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
                  /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "8px" }, children: [
                    /* @__PURE__ */ l.jsxs(
                      "label",
                      {
                        style: { display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" },
                        children: [
                          /* @__PURE__ */ l.jsx(
                            "input",
                            {
                              type: "radio",
                              name: "resizeMode",
                              value: "none",
                              checked: i === "none",
                              onChange: () => s((N) => ({ ...N, resizeMode: "none" })),
                              disabled: h
                            }
                          ),
                          "No resize"
                        ]
                      }
                    ),
                    /* @__PURE__ */ l.jsxs(
                      "label",
                      {
                        style: { display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" },
                        children: [
                          /* @__PURE__ */ l.jsx(
                            "input",
                            {
                              type: "radio",
                              name: "resizeMode",
                              value: "percent",
                              checked: i === "percent",
                              onChange: () => s((N) => ({ ...N, resizeMode: "percent", resizeValue: 50 })),
                              disabled: h
                            }
                          ),
                          "Resize (percentage)"
                        ]
                      }
                    ),
                    /* @__PURE__ */ l.jsxs(
                      "label",
                      {
                        style: { display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" },
                        children: [
                          /* @__PURE__ */ l.jsx(
                            "input",
                            {
                              type: "radio",
                              name: "resizeMode",
                              value: "max_edge",
                              checked: i === "max_edge",
                              onChange: () => s((N) => ({ ...N, resizeMode: "max_edge", resizeValue: 1024 })),
                              disabled: h
                            }
                          ),
                          "Resize (max edge)"
                        ]
                      }
                    )
                  ] }),
                  i !== "none" && /* @__PURE__ */ l.jsxs(
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
                        /* @__PURE__ */ l.jsx(
                          "input",
                          {
                            type: "number",
                            id: "resize-value",
                            min: j,
                            max: E,
                            step: 1,
                            value: x,
                            placeholder: D,
                            onChange: (N) => y(N.target.value),
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
                        /* @__PURE__ */ l.jsx("span", { style: { fontSize: "13px" }, children: k }),
                        i === "percent" && /* @__PURE__ */ l.jsx("span", { style: { fontSize: "12px", color: "var(--meld-text-secondary)" }, children: "(1-99)" }),
                        i === "max_edge" && /* @__PURE__ */ l.jsx("span", { style: { fontSize: "12px", color: "var(--meld-text-secondary)" }, children: "(max edge px)" })
                      ]
                    }
                  ),
                  i !== "none" && /* @__PURE__ */ l.jsxs(
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
                        /* @__PURE__ */ l.jsx("label", { htmlFor: "resize-filter", style: { fontSize: "13px" }, children: "Algorithm:" }),
                        /* @__PURE__ */ l.jsx(
                          "select",
                          {
                            id: "resize-filter",
                            value: d,
                            onChange: (N) => s((L) => ({
                              ...L,
                              resizeFilter: N.target.value
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
                            children: Cy.map((N) => /* @__PURE__ */ l.jsx("option", { value: N.value, children: N.label }, N.value))
                          }
                        )
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ l.jsxs("div", { children: [
                  /* @__PURE__ */ l.jsx(
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
                  /* @__PURE__ */ l.jsxs(
                    "label",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        cursor: "pointer"
                      },
                      children: [
                        /* @__PURE__ */ l.jsx(
                          "input",
                          {
                            type: "checkbox",
                            checked: o,
                            onChange: (N) => s((L) => ({ ...L, removeMetadata: N.target.checked })),
                            disabled: h
                          }
                        ),
                        "Remove metadata (ComfyUI workflow data) from downloaded images"
                      ]
                    }
                  )
                ] })
              ] }),
              h && b && /* @__PURE__ */ l.jsxs(
                "div",
                {
                  style: {
                    padding: "12px 20px",
                    borderTop: "1px solid var(--border-color, #555)"
                  },
                  children: [
                    /* @__PURE__ */ l.jsxs(
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
                          /* @__PURE__ */ l.jsx("span", { children: `${b.total} images - Processing ${b.current + 1 > b.total ? b.total : b.current + 1} of ${b.total}...` }),
                          /* @__PURE__ */ l.jsxs("span", { style: { color: "var(--meld-text-secondary)" }, children: [
                            Math.round(b.current / Math.max(1, b.total) * 100),
                            "%"
                          ] })
                        ]
                      }
                    ),
                    /* @__PURE__ */ l.jsx(
                      "div",
                      {
                        role: "progressbar",
                        "aria-label": "Download progress",
                        "aria-valuemin": 0,
                        "aria-valuemax": 100,
                        "aria-valuenow": Math.round(
                          b.current / Math.max(1, b.total) * 100
                        ),
                        style: {
                          width: "100%",
                          height: "4px",
                          background: "var(--comfy-input-bg, #1a1a1a)",
                          borderRadius: "2px",
                          overflow: "hidden"
                        },
                        children: /* @__PURE__ */ l.jsx(
                          "div",
                          {
                            style: {
                              height: "100%",
                              borderRadius: "2px",
                              transition: "width 0.3s ease",
                              width: `${b.current / Math.max(1, b.total) * 100}%`,
                              background: "var(--meld-accent, #4a9eff)"
                            }
                          }
                        )
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-footer", children: [
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-btn meld-btn--secondary",
                    onClick: n,
                    disabled: h,
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-btn meld-btn--primary",
                    onClick: _,
                    disabled: h,
                    style: { display: "flex", alignItems: "center", gap: "8px" },
                    children: h && b ? `Downloading ${Math.min(b.current + 1, b.total)}/${b.total}...` : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                      /* @__PURE__ */ l.jsx(cl, { size: 16 }),
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
}, Uc = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (d, h) => {
    const v = typeof d == "function" ? d(t) : d;
    if (!Object.is(v, t)) {
      const g = t;
      t = h ?? (typeof v != "object" || v === null) ? v : Object.assign({}, t, v), n.forEach((b) => b(t, g));
    }
  }, s = () => t, i = { setState: r, getState: s, getInitialState: () => c, subscribe: (d) => (n.add(d), () => n.delete(d)) }, c = t = e(r, s, i);
  return i;
}, My = (e) => e ? Uc(e) : Uc, Ty = (e) => e;
function Ly(e, t = Ty) {
  const n = rn.useSyncExternalStore(
    e.subscribe,
    rn.useCallback(() => t(e.getState()), [e, t]),
    rn.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return rn.useDebugValue(n), n;
}
const Ay = (e) => {
  const t = My(e), n = (r) => Ly(t, r);
  return Object.assign(n, t), n;
}, Ry = (e) => Ay;
function Dy(e, t) {
  let n;
  try {
    n = e();
  } catch {
    return;
  }
  return {
    getItem: (s) => {
      var a;
      const o = (c) => c === null ? null : JSON.parse(c, void 0), i = (a = n.getItem(s)) != null ? a : null;
      return i instanceof Promise ? i.then(o) : o(i);
    },
    setItem: (s, a) => n.setItem(s, JSON.stringify(a, void 0)),
    removeItem: (s) => n.removeItem(s)
  };
}
const wo = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return wo(r)(n);
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
        return wo(r)(n);
      }
    };
  }
}, Py = (e, t) => (n, r, s) => {
  let a = {
    storage: Dy(() => window.localStorage),
    partialize: (S) => S,
    version: 0,
    merge: (S, f) => ({
      ...f,
      ...S
    }),
    ...t
  }, o = !1, i = 0;
  const c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set();
  let h = a.storage;
  if (!h)
    return e(
      (...S) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
        ), n(...S);
      },
      r,
      s
    );
  const v = () => {
    const S = a.partialize({ ...r() });
    return h.setItem(a.name, {
      state: S,
      version: a.version
    });
  }, g = s.setState;
  s.setState = (S, f) => (g(S, f), v());
  const b = e(
    (...S) => (n(...S), v()),
    r,
    s
  );
  s.getInitialState = () => b;
  let w;
  const x = () => {
    var S, f;
    if (!h) return;
    const m = ++i;
    o = !1, c.forEach((y) => {
      var _;
      return y((_ = r()) != null ? _ : b);
    });
    const u = ((f = a.onRehydrateStorage) == null ? void 0 : f.call(a, (S = r()) != null ? S : b)) || void 0;
    return wo(h.getItem.bind(h))(a.name).then((y) => {
      if (y)
        if (typeof y.version == "number" && y.version !== a.version) {
          if (a.migrate) {
            const _ = a.migrate(
              y.state,
              y.version
            );
            return _ instanceof Promise ? _.then((k) => [!0, k]) : [!0, _];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, y.state];
      return [!1, void 0];
    }).then((y) => {
      var _;
      if (m !== i)
        return;
      const [k, j] = y;
      if (w = a.merge(
        j,
        (_ = r()) != null ? _ : b
      ), n(w, !0), k)
        return v();
    }).then(() => {
      m === i && (u == null || u(w, void 0), w = r(), o = !0, d.forEach((y) => y(w)));
    }).catch((y) => {
      m === i && (u == null || u(void 0, y));
    });
  };
  return s.persist = {
    setOptions: (S) => {
      a = {
        ...a,
        ...S
      }, S.storage && (h = S.storage);
    },
    clearStorage: () => {
      h == null || h.removeItem(a.name);
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
  }, a.skipHydration || x(), w || b;
}, zy = Py, Oy = [
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
let Fl = null;
const oe = Ry()(
  zy(
    (e) => ({
      isOpen: !1,
      slots: Oy,
      buckets: {},
      images: {},
      toastMessage: null,
      toastType: "info",
      setIsOpen: (t) => e({ isOpen: t }),
      addToBucket: (t, n, r) => e((s) => {
        const a = { ...s.buckets };
        for (const c in a) {
          const d = a[c] ?? [];
          a[c] = d.filter((h) => h !== n);
        }
        a[t] || (a[t] = []);
        const o = a[t] ?? [];
        o.includes(n) || (a[t] = [...o, n]);
        const i = { ...s.images };
        return r && (i[n] = r), { buckets: a, images: i };
      }),
      removeFromBucket: (t, n) => e((r) => {
        var i;
        const s = {
          ...r.buckets,
          [t]: ((i = r.buckets[t]) == null ? void 0 : i.filter((c) => c !== n)) || []
        }, a = Object.values(s).some((c) => c.includes(n)), o = { ...r.images };
        return a || delete o[n], { buckets: s, images: o };
      }),
      clearBucket: (t) => e((n) => {
        const r = {
          ...n.buckets,
          [t]: []
        }, s = new Set(Object.values(r).flat()), a = { ...n.images };
        for (const o of Object.keys(a))
          s.has(o) || delete a[o];
        return { buckets: r, images: a };
      }),
      updateSlot: (t, n) => e((r) => ({
        slots: r.slots.map((s) => s.id === t ? { ...s, ...n } : s)
      })),
      addSlot: (t) => e((n) => ({
        slots: [...n.slots, t]
      })),
      removeSlot: (t) => e((n) => {
        const r = n.slots.filter((i) => i.id !== t), s = { ...n.buckets };
        delete s[t];
        const a = new Set(Object.values(s).flat()), o = { ...n.images };
        for (const i of Object.keys(o))
          a.has(i) || delete o[i];
        return {
          slots: r,
          buckets: s,
          images: o
        };
      }),
      removeImages: (t) => e((n) => {
        const r = t.map(String), s = new Set(r), a = { ...n.buckets };
        let o = !1;
        for (const [c, d] of Object.entries(a)) {
          const h = d.filter((v) => !s.has(v));
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
        Fl && clearTimeout(Fl), e({ toastMessage: t, toastType: n }), Fl = setTimeout(() => {
          e({ toastMessage: null }), Fl = null;
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
), Of = async () => {
  const e = await ne.fetchApi("/meld/workflows");
  return se(e);
}, Ff = async (e) => {
  const t = await ne.fetchApi(`/meld/workflow/raw?name=${encodeURIComponent(e)}`);
  return se(t);
}, $f = (e) => e ? e.replace(/\s+/g, "").toLowerCase() : "", or = (e) => {
  const t = $f(e);
  return t === "meldimageloader" || t === "loadimage";
}, Qr = (e) => $f(e) === "loadimagemask", Fy = (e) => Array.isArray(e) && e.every(
  (t) => typeof t == "object" && t !== null && "id" in t && "type" in t
), _i = () => ({ executeWorkflow: p.useCallback(
  async (t, n, r, s) => {
    var x, S, f, m, u;
    if (!t || !n)
      throw new Error(
        `Missing required inputs for workflow execution: workflowName (${!!t}), image (${!!n})`
      );
    W.log("executeWorkflow called:", {
      workflowName: t,
      imageId: n.id,
      maskFilename: r,
      targetLoaderNodeId: s
    });
    const a = await Ff(t);
    W.log("Workflow fetched:", t);
    let o = s || null, i = null, c = !1;
    if (a.nodes && Array.isArray(a.nodes)) {
      if (c = !0, !o) {
        const _ = a.nodes.find((k) => or(k.type));
        _ && (o = String(_.id));
      }
      const y = a.nodes.find((_) => Qr(_.type));
      y && (i = String(y.id));
    } else {
      if (!o)
        for (const y in a) {
          const _ = a[y];
          if (or(_.class_type)) {
            o = y;
            break;
          }
        }
      for (const y in a) {
        const _ = a[y];
        if (Qr(_.class_type)) {
          i = y;
          break;
        }
      }
    }
    if (W.log("Node IDs found:", {
      loaderNodeId: o,
      maskNodeId: i,
      isUIFormat: c
    }), !o)
      throw new Error("Meld Image Loader or Load Image node not found in the selected workflow.");
    if (r && !i)
      throw W.warn("Mask filename provided but no mask node found in workflow JSON"), new Error(
        "Load Image (as Mask) node not found in the selected workflow, but a mask was provided."
      );
    let d = n.filename;
    if (n.subfolder && (d = `${n.subfolder}/${n.filename}`), n.type && n.type !== "input" && (d = `${d} [${n.type}]`), c) {
      const y = window.app;
      if (typeof y != "object" || y === null || !("graph" in y))
        throw new Error("Active ComfyUI graph is not available. Please open a workflow first.");
      const _ = y;
      if (!_.graph || !Fy(_.graph._nodes))
        throw new Error("Active ComfyUI graph is not available. Please open a workflow first.");
      const k = t.replace(/\.json$/i, "");
      let j = !1;
      const E = document.querySelectorAll(".workflow-tab");
      for (const L of Array.from(E)) {
        const $ = L.querySelector(".workflow-label"), Q = ((x = $ == null ? void 0 : $.textContent) == null ? void 0 : x.trim()) || ((S = L.textContent) == null ? void 0 : S.trim()) || "";
        if (Q === k || Q === t || Q.startsWith(`${k} `) || Q.startsWith(`${k}•`)) {
          L.click(), j = !0;
          break;
        }
      }
      j || await _.loadGraphData(a, !0, !0, t), await new Promise((L) => setTimeout(L, 200));
      const D = _.graph._nodes;
      W.log("Active graph nodes count:", D.length);
      const N = D.find(
        (L) => String(L.id) === o || or(L.type)
      );
      if (N) {
        const L = (f = N.widgets) == null ? void 0 : f.find(($) => $.name === "image");
        W.log("Updating loader node widget:", {
          nodeId: N.id,
          type: N.type,
          imagePath: d
        }), L && (L.value = d, typeof L.callback == "function" && L.callback(d));
      } else
        W.warn(
          "Loader node (MeldImageLoader/LoadImage) not found in active graph after loading"
        );
      if (r) {
        const L = D.find(
          ($) => String($.id) === i || Qr($.type)
        );
        if (W.log("Updating mask node widget:", {
          nodeId: L == null ? void 0 : L.id,
          maskFilename: r
        }), L) {
          const $ = (m = L.widgets) == null ? void 0 : m.find((I) => I.name === "image");
          $ && ($.value = `${r} [temp]`);
          const Q = (u = L.widgets) == null ? void 0 : u.find((I) => I.name === "channel");
          Q && (Q.value = "red");
        } else
          W.warn("LoadImageMask not found in active graph after loading");
      }
      _.graph.setDirtyCanvas(!0, !0);
      try {
        if (typeof _.queuePrompt != "function")
          throw new Error("queuePrompt is not available.");
        await _.queuePrompt(0);
        return;
      } catch (L) {
        throw W.error("Failed to queue workflow:", L), new Error("Failed to queue workflow. Check logs for details.");
      }
    }
    const h = JSON.parse(JSON.stringify(a));
    h[o].inputs.image = d, r && i && (h[i].inputs.image = `${r} [temp]`, h[i].inputs.channel = "red");
    const v = window.api;
    if (!(typeof v == "object" && v !== null && "fetchApi" in v && typeof v.fetchApi == "function"))
      throw new Error("ComfyUI API is not available. Please reload ComfyUI and try again.");
    const b = v, w = await b.fetchApi("/prompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: h,
        client_id: typeof b.clientId == "string" ? b.clientId : void 0
      })
    });
    return wl(w);
  },
  []
) }), Wf = (e) => !!(e && Array.isArray(e.widgets));
function $y(e) {
  let t = e.filename;
  return e.subfolder && (t = `${e.subfolder}/${e.filename}`), e.type && e.type !== "input" && (t = `${t} [${e.type}]`), t;
}
function ul(e, t) {
  var i, c;
  const n = window.app;
  if (!(n != null && n.graph))
    return { ok: !1, reason: "no_app_graph" };
  if (!Array.isArray(n.graph._nodes))
    return { ok: !1, reason: "no_loader_node" };
  const r = $y(e), s = n.graph._nodes.filter((d) => or(d.type));
  if (s.length === 0)
    return { ok: !1, reason: "no_loader_node" };
  let a = s[0];
  if (t) {
    const d = s.find((h) => String(h.id) === t);
    d && (a = d);
  }
  if (!Wf(a))
    return { ok: !1, reason: "no_widgets" };
  const o = a.widgets.find((d) => d.name === "image");
  return o ? (o.value = r, typeof o.callback == "function" && o.callback(r), (c = (i = n.graph).afterChange) == null || c.call(i), n.graph.setDirtyCanvas(!0, !0), { ok: !0 }) : { ok: !1, reason: "no_image_widget" };
}
const Wy = () => {
  const { dispatch: e } = he();
  return { injectMaskToGraph: p.useCallback(
    (n, r) => {
      var h, v;
      W.log("[Meld-Debug] injectMaskToGraph called with:", r), ul(n);
      const s = window.app;
      if (!(s != null && s.graph))
        return W.log("[Meld-Debug] injectMaskToGraph: No comfyApp.graph found"), !1;
      if (!Array.isArray(s.graph._nodes))
        return W.log("[Meld-Debug] injectMaskToGraph: comfyApp.graph._nodes is not an array"), !1;
      const a = s.graph._nodes.filter((g) => Qr(g.type));
      if (a.length === 0)
        return W.log("[Meld-Debug] injectMaskToGraph: No LoadImageMask nodes found in active graph"), e({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No 'Load Image (as Mask)' node found in the current workflow."
          }
        }), !1;
      const o = a[0];
      if (!o)
        return !1;
      if (!Wf(o))
        return W.log("[Meld-Debug] injectMaskToGraph: target mask node has no widgets", o.id), !1;
      const i = o.widgets.find((g) => g.name === "image"), c = `${r} [temp]`;
      W.log(
        "[Meld-Debug] injectMaskToGraph: Updating node",
        o.id,
        "widget 'image' with",
        c
      ), i && (i.value = c, typeof i.callback == "function" && i.callback(c));
      const d = o.widgets.find((g) => g.name === "channel");
      return d && (d.value = "red", typeof d.callback == "function" && d.callback("red")), (v = (h = s.graph).afterChange) == null || v.call(h), s.graph.setDirtyCanvas(!0, !0), !0;
    },
    [e]
  ) };
};
function $l(e, t) {
  return {
    data: new Uint8ClampedArray(e * t).fill(0),
    width: e,
    height: t
  };
}
function Uy(e, t, n = 255) {
  const { width: r, height: s } = e, a = document.createElement("canvas");
  a.width = r, a.height = s;
  const o = a.getContext("2d", { willReadFrequently: !0 });
  if (!o) return e;
  const i = xo(e, [255, 255, 255], 255);
  o.putImageData(i, 0, 0), o.fillStyle = n > 0 ? "white" : "black", o.beginPath(), t(o), o.fill();
  const c = o.getImageData(0, 0, r, s), d = new Uint8ClampedArray(r * s);
  for (let h = 0; h < r * s; h++) {
    const v = c.data[h * 4] ?? 0;
    d[h] = v > 128 ? 255 : 0;
  }
  return { ...e, data: d };
}
function xo(e, t = [255, 255, 255], n = 255) {
  const { data: r, width: s, height: a } = e, o = new ImageData(s, a), i = o.data;
  for (let c = 0; c < r.length; c++) {
    const d = r[c] ?? 0, h = c * 4;
    d > 0 ? (i[h] = t[0], i[h + 1] = t[1], i[h + 2] = t[2], i[h + 3] = n) : (i[h] = 0, i[h + 1] = 0, i[h + 2] = 0, i[h + 3] = 0);
  }
  return o;
}
function Vy(e) {
  return e.data.every((t) => t === 0);
}
const Vc = (e) => e === "rect" || e === "ellipse" || e === "lasso", ki = ({
  imageId: e,
  mode: t,
  sequenceData: n,
  onSuccess: r,
  onClose: s
}) => {
  const { state: a, dispatch: o } = he(), i = p.useMemo(() => a.images.find((V) => V.id === e) ?? a.lineageImages.find((V) => V.id === e) ?? oe.getState().images[String(e)], [a.images, a.lineageImages, e]), c = p.useRef(void 0);
  i && (c.current = i);
  const d = i ?? c.current, { injectMaskToGraph: h } = Wy(), { executeWorkflow: v } = _i();
  Le({ onEscape: s });
  const g = p.useRef(null), b = p.useRef(null), w = p.useRef(null), x = p.useRef(null), [S, f] = p.useState(!1), [m, u] = p.useState(() => {
    const V = localStorage.getItem("meld-mask-tool");
    return Vc(V) ? V : "rect";
  });
  p.useEffect(() => {
    Vc(m) && localStorage.setItem("meld-mask-tool", m);
  }, [m]);
  const [y, _] = p.useState({ x: 0, y: 0 }), [k, j] = p.useState({ x: 0, y: 0 }), [E, D] = p.useState([]), [N, L] = p.useState(null), [$, Q] = p.useState(!1), [I, z] = p.useState(1), [M, A] = p.useState({ x: 0, y: 0 }), [C, T] = p.useState(!1), [P, U] = p.useState(!1), R = p.useRef(null), F = p.useCallback(() => {
    const V = w.current, H = b.current;
    if (!V || !H) return null;
    const te = H.getBoundingClientRect(), Y = V.naturalWidth, le = V.naturalHeight;
    if (!Y || !le) return null;
    const ce = Y / le, Me = te.width / te.height;
    let ge, Se, _e = 0, $e = 0;
    return ce > Me ? (ge = te.width, Se = te.width / ce, $e = (te.height - Se) / 2) : (Se = te.height, ge = te.height * ce, _e = (te.width - ge) / 2), {
      left: _e,
      top: $e,
      width: ge,
      height: Se
    };
  }, []), O = p.useCallback(
    (V, H, te, Y) => {
      if (!V) return H;
      const le = V.getBoundingClientRect(), ce = le.width / 2, Me = le.height / 2, ge = {
        x: (ce - H.x) / te,
        y: (Me - H.y) / te
      };
      return { x: ce - ge.x * Y, y: Me - ge.y * Y };
    },
    []
  ), Z = p.useCallback(() => {
    z((V) => {
      const H = Math.min(V * 1.2, 20);
      return A((te) => O(b.current, te, V, H)), H;
    });
  }, [O]), re = p.useCallback(() => {
    z((V) => {
      const H = Math.max(0.1, V / 1.2);
      return A((te) => O(b.current, te, V, H)), H;
    });
  }, [O]), de = p.useCallback(() => {
    const V = g.current;
    if (!V) return;
    const H = V.getContext("2d");
    if (!H) return;
    H.clearRect(0, 0, V.width, V.height);
    const te = getComputedStyle(document.documentElement), Y = te.getPropertyValue("--comfy-input-bg-active") || te.getPropertyValue("--comfy-input-bg") || te.getPropertyValue("--bg-color") || "var(--comfy-input-bg)", le = F();
    if (x.current && le && (H.save(), H.globalAlpha = 0.5, H.drawImage(
      x.current,
      le.left,
      le.top,
      le.width,
      le.height
    ), H.restore()), S) {
      const ce = Math.min(y.x, k.x), Me = Math.min(y.y, k.y), ge = Math.abs(y.x - k.x), Se = Math.abs(y.y - k.y);
      if (H.save(), H.globalAlpha = 0.3, H.fillStyle = Y, H.strokeStyle = "white", H.lineWidth = 2, H.setLineDash([5, 5]), H.beginPath(), m === "rect")
        H.rect(ce, Me, ge, Se);
      else if (m === "ellipse") {
        const _e = ce + ge / 2, $e = Me + Se / 2;
        H.ellipse(_e, $e, ge / 2, Se / 2, 0, 0, 2 * Math.PI);
      } else if (m === "lasso" && E.length > 1) {
        const _e = E[0];
        if (_e) {
          H.moveTo(_e.x, _e.y);
          for (let $e = 1; $e < E.length; $e++) {
            const Yt = E[$e];
            Yt && H.lineTo(Yt.x, Yt.y);
          }
          H.closePath();
        }
      }
      H.fill(), H.globalAlpha = 1, H.stroke(), H.restore();
    }
  }, [S, y, k, m, E, F]), [fe, G] = p.useState([]), ee = p.useMemo(() => fe.length > 0 ? fe[fe.length - 1] : w.current ? $l(w.current.naturalWidth, w.current.naturalHeight) : null, [fe]);
  p.useEffect(() => {
    var V;
    (V = w.current) != null && V.naturalWidth && fe.length === 0 && G([
      $l(w.current.naturalWidth, w.current.naturalHeight)
    ]);
  }, [fe.length]);
  const qe = p.useCallback(() => {
    var V;
    (V = w.current) != null && V.naturalWidth && fe.length === 0 && G([
      $l(w.current.naturalWidth, w.current.naturalHeight)
    ]);
  }, [fe.length]), K = p.useRef(!1), xt = p.useRef(0), Ye = (V) => {
    V.target === V.currentTarget && (K.current = !0);
  }, Tt = (V) => {
    V.target === V.currentTarget && K.current && !S && s(), K.current = !1;
  };
  p.useEffect(() => {
    if (!ee) return;
    x.current || (x.current = document.createElement("canvas"));
    const V = x.current;
    V.width = ee.width, V.height = ee.height;
    const H = V.getContext("2d");
    if (!H) return;
    const te = xo(ee, [255, 255, 255], 255);
    H.putImageData(te, 0, 0), de();
  }, [ee, de]), p.useEffect(() => {
    S && de();
  }, [S, de]), p.useEffect(() => {
    const V = b.current;
    if (!V) return;
    const H = (te) => {
      te.preventDefault();
      const Y = te.deltaY > 0 ? 1 / 1.1 : 1.1;
      z((le) => {
        const ce = Math.min(Math.max(0.1, le * Y), 20);
        return A((Me) => {
          const ge = V.getBoundingClientRect(), Se = te.clientX - ge.left, _e = te.clientY - ge.top, $e = {
            x: (Se - Me.x) / le,
            y: (_e - Me.y) / le
          };
          return {
            x: Se - $e.x * ce,
            y: _e - $e.y * ce
          };
        }), ce;
      });
    };
    return V.addEventListener("wheel", H, { passive: !1 }), () => V.removeEventListener("wheel", H);
  }, []), p.useEffect(() => {
    if (!P) return;
    const V = (te) => {
      if (R.current) {
        const Y = te.clientX - R.current.clientX, le = te.clientY - R.current.clientY;
        A({
          x: R.current.panX + Y,
          y: R.current.panY + le
        });
      }
    }, H = () => {
      U(!1), R.current = null;
    };
    return window.addEventListener("mousemove", V), window.addEventListener("mouseup", H), () => {
      window.removeEventListener("mousemove", V), window.removeEventListener("mouseup", H);
    };
  }, [P]), p.useEffect(() => {
    const V = () => {
      b.current && g.current && (g.current.width = b.current.clientWidth, g.current.height = b.current.clientHeight, de());
    }, H = new ResizeObserver(V);
    return b.current && H.observe(b.current), V(), () => H.disconnect();
  }, [de]);
  const On = (V) => {
    var _e;
    const H = V.button === 2, te = V.button === 1, Y = C && V.button === 0;
    if (H || te || Y) {
      V.preventDefault(), V.stopPropagation(), R.current = {
        panX: M.x,
        panY: M.y,
        clientX: V.clientX,
        clientY: V.clientY
      }, U(!0);
      return;
    }
    if (V.button !== 0 || S || $ || Date.now() - xt.current < 100)
      return;
    V.preventDefault();
    const le = F(), ce = (_e = b.current) == null ? void 0 : _e.getBoundingClientRect();
    if (!le || !ce) return;
    f(!0);
    const Me = {
      x: (V.clientX - ce.left - M.x) / I,
      y: (V.clientY - ce.top - M.y) / I
    }, ge = Math.max(le.left, Math.min(Me.x, le.left + le.width)), Se = Math.max(le.top, Math.min(Me.y, le.top + le.height));
    _({ x: ge, y: Se }), j({ x: ge, y: Se }), D(m === "lasso" ? [{ x: ge, y: Se }] : []), L(null);
  };
  p.useEffect(() => {
    if (!S) return;
    const V = (te) => {
      var Se;
      const Y = F(), le = (Se = b.current) == null ? void 0 : Se.getBoundingClientRect();
      if (!Y || !le) return;
      const ce = {
        x: (te.clientX - le.left - M.x) / I,
        y: (te.clientY - le.top - M.y) / I
      }, Me = Math.max(Y.left, Math.min(ce.x, Y.left + Y.width)), ge = Math.max(Y.top, Math.min(ce.y, Y.top + Y.height));
      j({ x: Me, y: ge }), m === "lasso" && D((_e) => [..._e, { x: Me, y: ge }]);
    }, H = (te) => {
      var ce;
      const Y = F(), le = (ce = b.current) == null ? void 0 : ce.getBoundingClientRect();
      if (Y && le && ee && w.current) {
        const Me = {
          x: (te.clientX - le.left - M.x) / I,
          y: (te.clientY - le.top - M.y) / I
        }, ge = Math.max(Y.left, Math.min(Me.x, Y.left + Y.width)), Se = Math.max(Y.top, Math.min(Me.y, Y.top + Y.height)), _e = Math.min(y.x, ge), $e = Math.min(y.y, Se), Yt = Math.abs(y.x - ge), kr = Math.abs(y.y - Se), jm = m === "lasso";
        if (Yt > 5 || kr > 5 || jm && E.length > 2) {
          const Cm = w.current.naturalWidth, Em = w.current.naturalHeight, Fn = Cm / Y.width, $n = Em / Y.height, Nm = Uy(ee, (_n) => {
            if (m === "rect") {
              const kn = (_e - Y.left) * Fn, Sn = ($e - Y.top) * $n, Xt = Yt * Fn, _l = kr * $n;
              _n.rect(kn, Sn, Xt, _l);
            } else if (m === "ellipse") {
              const kn = (_e - Y.left) * Fn, Sn = ($e - Y.top) * $n, Xt = Yt * Fn, _l = kr * $n, Im = kn + Xt / 2, Mm = Sn + _l / 2;
              _n.ellipse(Im, Mm, Xt / 2, _l / 2, 0, 0, 2 * Math.PI);
            } else if (m === "lasso" && E.length > 2) {
              const kn = E[0];
              if (!kn) return;
              _n.moveTo(
                (kn.x - Y.left) * Fn,
                (kn.y - Y.top) * $n
              );
              for (let Sn = 1; Sn < E.length; Sn++) {
                const Xt = E[Sn];
                Xt && _n.lineTo((Xt.x - Y.left) * Fn, (Xt.y - Y.top) * $n);
              }
              _n.closePath();
            }
          });
          G((_n) => [..._n, Nm]);
        }
      }
      xt.current = Date.now(), f(!1), D([]);
    };
    return window.addEventListener("mousemove", V), window.addEventListener("mouseup", H), () => {
      window.removeEventListener("mousemove", V), window.removeEventListener("mouseup", H);
    };
  }, [
    S,
    y.x,
    y.y,
    F,
    ee,
    m,
    E,
    M.x,
    M.y,
    I
  ]);
  const _r = p.useCallback(() => {
    fe.length > 1 && G((V) => V.slice(0, -1));
  }, [fe.length]);
  p.useEffect(() => {
    const V = (Y) => {
      if (!Y) return !1;
      const le = Y, ce = le.tagName;
      return ce === "INPUT" || ce === "TEXTAREA" || ce === "BUTTON" || ce === "SELECT" || ce === "A" || le.isContentEditable || le.tabIndex != null && le.tabIndex >= 0;
    }, H = (Y) => {
      Y.code === "Space" && !Y.repeat && (V(Y.target) || (Y.preventDefault(), T(!0))), (Y.metaKey || Y.ctrlKey) && Y.key.toLowerCase() === "z" && !Y.shiftKey ? (Y.preventDefault(), Y.stopPropagation(), Y.stopImmediatePropagation(), _r()) : Y.key === "Escape" && (Y.preventDefault(), Y.stopPropagation(), Y.stopImmediatePropagation(), s(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    }, te = (Y) => {
      Y.code === "Space" && (V(Y.target) || (Y.preventDefault(), T(!1)));
    };
    return window.addEventListener("keydown", H, { capture: !0 }), window.addEventListener("keyup", te, { capture: !0 }), () => {
      window.removeEventListener("keydown", H, { capture: !0 }), window.removeEventListener("keyup", te, { capture: !0 });
    };
  }, [_r, s]);
  const xl = () => {
    if (w.current) {
      const V = $l(
        w.current.naturalWidth,
        w.current.naturalHeight
      );
      G((H) => [...H, V]);
    }
  }, Ee = async () => {
    if (!ee || !w.current) return null;
    Q(!0);
    try {
      const { width: V, height: H } = ee, te = document.createElement("canvas");
      te.width = V, te.height = H;
      const Y = te.getContext("2d");
      if (!Y) return null;
      const le = xo(ee, [255, 255, 255], 255);
      Y.putImageData(le, 0, 0);
      const ce = await new Promise(
        (kr) => te.toBlob(kr, "image/png")
      );
      if (!ce) return null;
      const ge = `meld_mask_${Date.now()}.png`, Se = new File([ce], ge, { type: "image/png" }), _e = new FormData();
      _e.append("image", Se), _e.append("type", "temp"), _e.append("overwrite", "true");
      const $e = await ne.fetchApi("/upload/image", {
        method: "POST",
        body: _e
      });
      return (await wl($e)).name ?? null;
    } catch (V) {
      return W.error("Error uploading mask:", V), null;
    } finally {
      Q(!1);
    }
  }, ut = async () => {
    if (!d) return;
    const V = await Ee();
    V && h(d, V) && (s(), o({ type: "CLOSE_VIEWER" }), r == null || r());
  }, _t = async () => {
    if (!d) return;
    const V = await Ee();
    V && (t === "run_sequence" && n ? (await v(
      n.workflowName,
      d,
      V,
      n.targetLoaderNodeId
    ), r == null || r()) : o({
      type: "OPEN_MODAL",
      payload: {
        type: "workflow_selection",
        images: [d],
        maskFilename: V,
        onSuccess: r
      }
    }));
  }, Ot = p.useMemo(() => ee && !Vy(ee), [ee]);
  return d ? /* @__PURE__ */ l.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onMouseDown: Ye,
      onMouseUp: Tt,
      role: "presentation",
      children: /* @__PURE__ */ l.jsxs(
        "div",
        {
          className: "meld-modal-content meld-mask-editor-modal",
          onClick: (V) => V.stopPropagation(),
          children: [
            /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
              /* @__PURE__ */ l.jsx("h3", { children: "Select Mask Area" }),
              /* @__PURE__ */ l.jsx("button", { className: "meld-modal-close", onClick: s, type: "button", children: /* @__PURE__ */ l.jsx(pe, { size: 20 }) })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-body", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-mask-editor-tool-selector", children: [
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${m === "rect" ? "meld-mask-tool-btn--active" : ""}`,
                    onClick: () => u("rect"),
                    type: "button",
                    title: "Rectangle Tool",
                    children: [
                      /* @__PURE__ */ l.jsx(Ef, { size: 18 }),
                      /* @__PURE__ */ l.jsx("span", { children: "Rect" })
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${m === "ellipse" ? "meld-mask-tool-btn--active" : ""}`,
                    onClick: () => u("ellipse"),
                    type: "button",
                    title: "Ellipse Tool",
                    children: [
                      /* @__PURE__ */ l.jsx(pg, { size: 18 }),
                      /* @__PURE__ */ l.jsx("span", { children: "Ellipse" })
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${m === "lasso" ? "meld-mask-tool-btn--active" : ""}`,
                    onClick: () => u("lasso"),
                    type: "button",
                    title: "Lasso Tool",
                    children: [
                      /* @__PURE__ */ l.jsx(wg, { size: 18 }),
                      /* @__PURE__ */ l.jsx("span", { children: "Lasso" })
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    style: {
                      width: 1,
                      backgroundColor: "var(--meld-border-color)",
                      margin: "0 4px"
                    }
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    className: "meld-mask-tool-btn",
                    onClick: re,
                    type: "button",
                    title: "Zoom Out",
                    "aria-label": "Zoom Out",
                    children: /* @__PURE__ */ l.jsx(Pg, { size: 18 })
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: "meld-mask-tool-btn",
                    onClick: () => {
                      z(1), A({ x: 0, y: 0 });
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
                      Math.round(I * 100),
                      "%"
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    className: "meld-mask-tool-btn",
                    onClick: Z,
                    type: "button",
                    title: "Zoom In",
                    "aria-label": "Zoom In",
                    children: /* @__PURE__ */ l.jsx(Dg, { size: 18 })
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsx(
                "div",
                {
                  ref: b,
                  className: "meld-mask-editor-canvas-container",
                  onMouseDown: On,
                  onContextMenu: (V) => V.preventDefault(),
                  role: "presentation",
                  style: {
                    cursor: P ? "grabbing" : C ? "grab" : "crosshair"
                  },
                  children: /* @__PURE__ */ l.jsxs(
                    "div",
                    {
                      className: "meld-mask-editor-transform-layer",
                      style: {
                        transform: `translate(${M.x}px, ${M.y}px) scale(${I})`,
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
                        /* @__PURE__ */ l.jsx(
                          "img",
                          {
                            ref: w,
                            src: wi(d),
                            alt: "To be masked",
                            className: "meld-mask-editor-image",
                            onDragStart: (V) => V.preventDefault(),
                            onLoad: qe
                          }
                        ),
                        /* @__PURE__ */ l.jsx(
                          "canvas",
                          {
                            ref: g,
                            className: "meld-mask-editor-canvas",
                            onDragStart: (V) => V.preventDefault()
                          }
                        )
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-mask-editor-footer", children: [
                /* @__PURE__ */ l.jsx("div", { className: "meld-mask-editor-hint", children: "Select a tool and drag on the image to create mask areas (Cmd/Ctrl+Z to undo)" }),
                /* @__PURE__ */ l.jsxs("div", { className: "meld-mask-editor-actions", children: [
                  t === "apply" ? /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--inject",
                      onClick: ut,
                      disabled: !Ot || $,
                      type: "button",
                      children: [
                        $ ? /* @__PURE__ */ l.jsx(Rc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ l.jsx(lt, { size: 16 }),
                        /* @__PURE__ */ l.jsx("span", { children: "Send" })
                      ]
                    }
                  ) : /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--run",
                      onClick: _t,
                      disabled: !Ot || $,
                      type: "button",
                      children: [
                        $ ? /* @__PURE__ */ l.jsx(Rc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ l.jsx(dl, { size: 16 }),
                        /* @__PURE__ */ l.jsx("span", { children: t === "run_sequence" && n ? n.currentIndex === n.totalCount - 1 ? "Queue (Last)" : `Queue (${n.currentIndex + 1}/${n.totalCount})` : "Queue" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--undo",
                      onClick: _r,
                      disabled: fe.length <= 1 || $,
                      type: "button",
                      title: "Undo last area",
                      children: [
                        /* @__PURE__ */ l.jsx(Lg, { size: 16 }),
                        /* @__PURE__ */ l.jsx("span", { children: "Undo" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--cancel",
                      onClick: xl,
                      disabled: !Ot || $,
                      type: "button",
                      title: "Clear all areas",
                      children: [
                        /* @__PURE__ */ l.jsx(pe, { size: 16 }),
                        /* @__PURE__ */ l.jsx("span", { children: "Clear" })
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
}, Uf = ({
  images: e,
  currentIndex: t,
  workflowName: n,
  targetLoaderNodeId: r,
  onSuccess: s,
  onClose: a
}) => {
  Le({ onEscape: a });
  const o = e[t];
  return p.useEffect(() => {
    o || a();
  }, [o, a]), o ? /* @__PURE__ */ l.jsx(
    ki,
    {
      imageId: o.id,
      mode: "run_sequence",
      sequenceData: {
        workflowName: n,
        targetLoaderNodeId: r,
        currentIndex: t,
        totalCount: e.length
      },
      onSuccess: s,
      onClose: a
    },
    o.id
  ) : null;
}, Vf = (e) => {
  const t = /(?:[^\s"']+|"[^"]*"|'[^']*')+/g;
  return e.trim().match(t) || [];
}, Wl = (e) => e.replace(/^["']|["']$/g, ""), By = (e) => e.trim() ? Vf(e).every((n) => !!(n === "next" || n === "prev" || n === "delete" || n.startsWith("tag:") && n.length > 4 || n.startsWith("-tag:") && n.length > 5 || n.startsWith("tag-toggle:") && n.length > 11 || n.startsWith("lt:") && n.length > 3)) : !0, Qy = (e, t) => {
  const n = Vf(e), r = {
    addTags: [],
    removeTags: [],
    toggleTags: [],
    moveNext: !1,
    movePrev: !1,
    isDeleted: !1,
    sendToLtSlot: null
  }, s = (t == null ? void 0 : t.tags) || [];
  for (const a of n)
    if (a.startsWith("tag:")) {
      const o = Wl(a.substring(4));
      o && !r.addTags.includes(o) && r.addTags.push(o);
    } else if (a.startsWith("-tag:")) {
      const o = Wl(a.substring(5));
      o && !r.removeTags.includes(o) && r.removeTags.push(o);
    } else if (a.startsWith("tag-toggle:")) {
      const o = Wl(a.substring(11));
      o && (t ? s.includes(o) ? r.removeTags.includes(o) || r.removeTags.push(o) : r.addTags.includes(o) || r.addTags.push(o) : r.toggleTags.includes(o) || r.toggleTags.push(o));
    } else if (a === "next")
      r.moveNext = !0;
    else if (a === "prev")
      r.movePrev = !0;
    else if (a === "delete")
      r.isDeleted = !0;
    else if (a.startsWith("lt:")) {
      const o = Wl(a.substring(3));
      o && (r.sendToLtSlot = o);
    }
  return r;
}, Hy = () => {
  const { state: e, dispatch: t, updateSetting: n } = he(), [r, s] = p.useState("Gallery"), [a, o] = p.useState({
    ...e.settings
  }), [i, c] = p.useState({}), [d, h] = p.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [v, g] = p.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [b, w] = p.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [x, S] = p.useState(
    e.settings["viewer.thumbnail_window_size"].toString()
  ), [f, m] = p.useState(
    e.settings["gallery.trash_retention_days"].toString()
  ), [u, y] = p.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [_, k] = p.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [j, E] = p.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [D, N] = p.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [L, $] = p.useState(
    e.settings["viewer.details.core_prompt_count"].toString()
  ), [Q, I] = p.useState(e.settings["fullscreen.details.max_positive_prompt_lines"].toString()), [z, M] = p.useState(e.settings["fullscreen.details.max_negative_prompt_lines"].toString()), [A, C] = p.useState(
    e.settings["fullscreen.details.core_prompt_count"].toString()
  ), [T, P] = p.useState(
    e.settings["sidebar.thumbnail_size"].toString()
  );
  return {
    activeTab: r,
    setActiveTab: s,
    localSettings: a,
    setLocalSettings: o,
    shortcutErrors: i,
    setShortcutErrors: c,
    handleClose: async () => {
      const G = Object.keys(a).filter(
        (ee) => a[ee] !== e.settings[ee] && !i[ee]
      );
      if (G.length > 0)
        for (const ee of G)
          await n(ee, a[ee]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (G, ee) => {
      o((qe) => ({
        ...qe,
        [G]: !ee
      }));
    },
    handleNumberChange: (G, ee, qe, K) => {
      G === "gallery.initial_load_count" ? h(ee) : G === "gallery.max_load_count" ? g(ee) : G === "gallery.lineage_max_depth" ? w(ee) : G === "viewer.thumbnail_window_size" ? S(ee) : G === "gallery.trash_retention_days" ? m(ee) : G === "gallery.auto_link_phash_threshold" ? y(ee) : G === "gallery.suggest_phash_threshold" ? k(ee) : G === "viewer.details.max_positive_prompt_lines" ? E(ee) : G === "viewer.details.max_negative_prompt_lines" ? N(ee) : G === "viewer.details.core_prompt_count" ? $(ee) : G === "fullscreen.details.max_positive_prompt_lines" ? I(ee) : G === "fullscreen.details.max_negative_prompt_lines" ? M(ee) : G === "fullscreen.details.core_prompt_count" ? C(ee) : G === "sidebar.thumbnail_size" && P(ee);
      const xt = Number.parseInt(ee, 10);
      if (!Number.isNaN(xt)) {
        let Ye = xt;
        qe !== void 0 && Ye < qe && (Ye = qe), K !== void 0 && Ye > K && (Ye = K), o((Tt) => ({
          ...Tt,
          [G]: Ye
        }));
      }
    },
    handleNumberBlur: (G) => {
      !G || !G.key || (G.key === "gallery.initial_load_count" ? h(a["gallery.initial_load_count"].toString()) : G.key === "gallery.max_load_count" ? g(a["gallery.max_load_count"].toString()) : G.key === "gallery.lineage_max_depth" ? w(a["gallery.lineage_max_depth"].toString()) : G.key === "viewer.thumbnail_window_size" ? S(a["viewer.thumbnail_window_size"].toString()) : G.key === "gallery.trash_retention_days" ? m(a["gallery.trash_retention_days"].toString()) : G.key === "gallery.auto_link_phash_threshold" ? y(a["gallery.auto_link_phash_threshold"].toString()) : G.key === "gallery.suggest_phash_threshold" ? k(a["gallery.suggest_phash_threshold"].toString()) : G.key === "viewer.details.max_positive_prompt_lines" ? E(
        a["viewer.details.max_positive_prompt_lines"].toString()
      ) : G.key === "viewer.details.max_negative_prompt_lines" ? N(
        a["viewer.details.max_negative_prompt_lines"].toString()
      ) : G.key === "viewer.details.core_prompt_count" ? $(a["viewer.details.core_prompt_count"].toString()) : G.key === "fullscreen.details.max_positive_prompt_lines" ? I(
        a["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : G.key === "fullscreen.details.max_negative_prompt_lines" ? M(
        a["fullscreen.details.max_negative_prompt_lines"].toString()
      ) : G.key === "fullscreen.details.core_prompt_count" ? C(
        a["fullscreen.details.core_prompt_count"].toString()
      ) : G.key === "sidebar.thumbnail_size" && P(a["sidebar.thumbnail_size"].toString()));
    },
    handleResetShortcuts: () => {
      o((G) => ({
        ...G,
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
              await sy(), t({
                type: "SHOW_TOAST",
                payload: "Thumbnail cache cleared"
              });
            } catch (G) {
              W.error("Failed to clear thumbnail cache:", G), t({
                type: "SET_ERROR",
                payload: "Failed to clear thumbnail cache"
              });
            }
          }
        }
      });
    },
    validateShortcut: (G) => typeof G != "string" ? !1 : By(G),
    // Input states
    initialLoadCountInput: d,
    maxLoadCountInput: v,
    lineageMaxDepthInput: b,
    thumbnailWindowSizeInput: x,
    trashRetentionDaysInput: f,
    autoLinkPhashThresholdInput: u,
    suggestPhashThresholdInput: _,
    maxPositivePromptLinesInput: j,
    maxNegativePromptLinesInput: D,
    fullscreenMaxPositivePromptLinesInput: Q,
    fullscreenMaxNegativePromptLinesInput: z,
    viewerCorePromptCountInput: L,
    fullscreenCorePromptCountInput: A,
    thumbnailSizeInput: T
  };
}, X = ({ label: e, description: t, children: n }) => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item__info", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__label", children: e }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__description", children: t })
  ] }),
  /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__control", children: n })
] }), Ky = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: s,
  maxPositivePromptLinesInput: a,
  maxNegativePromptLinesInput: o,
  fullscreenCorePromptCountInput: i
}) => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Navigation & Display" }),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Show Tool Icons",
        description: "Display navigation and close icons in fullscreen mode.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["fullscreen.show_icons"],
              onChange: () => n("fullscreen.show_icons", e["fullscreen.show_icons"])
            }
          ),
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Delete Mode",
        description: "Choose how images are deleted in fullscreen mode.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.delete_mode"],
            onChange: (c) => t((d) => ({
              ...d,
              "fullscreen.delete_mode": c.target.value
            })),
            children: [
              /* @__PURE__ */ l.jsx("option", { value: "confirm", children: "Confirmed" }),
              /* @__PURE__ */ l.jsx("option", { value: "target_only", children: "Unconfirmed (Target Only)" }),
              /* @__PURE__ */ l.jsx("option", { value: "lineage", children: "Unconfirmed (Include Lineage)" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Loop Navigation",
        description: "Loop to the beginning/end when navigating in fullscreen.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["fullscreen.loop"],
              onChange: () => n("fullscreen.loop", e["fullscreen.loop"])
            }
          ),
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Small Image Display",
        description: "Choose how to display images smaller than the screen in fullscreen.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.small_image_mode"],
            onChange: (c) => t((d) => ({
              ...d,
              "fullscreen.small_image_mode": c.target.value
            })),
            children: [
              /* @__PURE__ */ l.jsx("option", { value: "original", children: "Original Size" }),
              /* @__PURE__ */ l.jsx("option", { value: "fit", children: "Fit to Screen" })
            ]
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Details Panel" }),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Show Details by Default",
        description: "Show the image details panel automatically when entering fullscreen.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path in fullscreen details.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.details.show_filename"],
            onChange: (c) => t((d) => ({
              ...d,
              "fullscreen.details.show_filename": c.target.value
            })),
            children: [
              /* @__PURE__ */ l.jsx("option", { value: "filename", children: "Filename" }),
              /* @__PURE__ */ l.jsx("option", { value: "filepath", children: "Filepath" }),
              /* @__PURE__ */ l.jsx("option", { value: "none", children: "None" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Show Dimensions",
        description: "Display dimensions in fullscreen details.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Show Created At",
        description: "Display generation date/time in fullscreen details.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Show Source Info",
        description: "Display source image information in fullscreen details.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(X, { label: "Show Model", description: "Display model name in fullscreen details.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
      /* @__PURE__ */ l.jsx(
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
      /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
    ] }) }),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Show Positive",
        description: "Display positive prompt in fullscreen details.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Show Core Prompt",
        description: "Display a subset of keywords from the positive prompt based on rarity (bottom analytics counts).",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["fullscreen.details.show_core_prompt"],
              onChange: () => n(
                "fullscreen.details.show_core_prompt",
                e["fullscreen.details.show_core_prompt"]
              )
            }
          ),
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Core Prompt Keyword Count",
        description: "Number of rarity keywords to display in fullscreen.",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: i,
            min: 1,
            max: 100,
            onChange: (c) => r("fullscreen.details.core_prompt_count", c.target.value, 1, 100),
            onBlur: () => s({
              key: "fullscreen.details.core_prompt_count"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Max Positive Prompt Lines",
        description: "Maximum number of lines to display for the positive prompt in fullscreen.",
        children: /* @__PURE__ */ l.jsx(
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
            onBlur: () => s({
              key: "fullscreen.details.max_positive_prompt_lines"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Show Negative",
        description: "Display negative prompt in fullscreen details.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Show User Notes",
        description: "Display user notes in fullscreen details.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.details.show_user_notes"],
            onChange: (c) => t((d) => ({
              ...d,
              "fullscreen.details.show_user_notes": c.target.value
            })),
            children: [
              /* @__PURE__ */ l.jsx("option", { value: "always", children: "Always show" }),
              /* @__PURE__ */ l.jsx("option", { value: "if_present", children: "Show only when present" }),
              /* @__PURE__ */ l.jsx("option", { value: "hidden", children: "Always hide" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Max Negative Prompt Lines",
        description: "Maximum number of lines to display for the negative prompt in fullscreen.",
        children: /* @__PURE__ */ l.jsx(
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
            onBlur: () => s({
              key: "fullscreen.details.max_negative_prompt_lines"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(X, { label: "Show Tags", description: "Display tags in fullscreen details.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
      /* @__PURE__ */ l.jsx(
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
      /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
    ] }) })
  ] })
] });
function zt({ size: e = 24, color: t, children: n, ...r }) {
  return /* @__PURE__ */ l.jsx(
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
function Bf() {
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx("path", { d: "M18 16.6v2.8", stroke: "var(--meld-icon-halo, transparent)", strokeWidth: 4 }),
    /* @__PURE__ */ l.jsx("path", { d: "M16.6 18h2.8", stroke: "var(--meld-icon-halo, transparent)", strokeWidth: 4 }),
    /* @__PURE__ */ l.jsx("path", { d: "M18 16.6v2.8" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16.6 18h2.8" })
  ] });
}
function Qf(e) {
  return /* @__PURE__ */ l.jsxs(zt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M6 12h12" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14 8l4 4-4 4" })
  ] });
}
function Hf(e) {
  return /* @__PURE__ */ l.jsxs(zt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M4.5 5.5h7l2 2h6v11a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 12h4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 15h3" }),
    /* @__PURE__ */ l.jsx("path", { d: "M13 12l3 0" }),
    /* @__PURE__ */ l.jsx("path", { d: "M15.5 10.5l3 1.5-3 1.5" })
  ] });
}
function Kf(e) {
  return /* @__PURE__ */ l.jsxs(zt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ l.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16 8l4 4-4 4" })
  ] });
}
function Gf(e) {
  return /* @__PURE__ */ l.jsxs(zt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ l.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16 8l4 4-4 4" }),
    /* @__PURE__ */ l.jsx(Bf, {})
  ] });
}
function qf(e) {
  return /* @__PURE__ */ l.jsxs(zt, { ...e, children: [
    /* @__PURE__ */ l.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ l.jsx("path", { d: "M13 9l3 3-3 3" })
  ] });
}
function Yf(e) {
  return /* @__PURE__ */ l.jsxs(zt, { ...e, children: [
    /* @__PURE__ */ l.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ l.jsx("path", { d: "M13 9l3 3-3 3" }),
    /* @__PURE__ */ l.jsx(Bf, {})
  ] });
}
function Xf(e) {
  return /* @__PURE__ */ l.jsxs(zt, { ...e, children: [
    /* @__PURE__ */ l.jsx("rect", { x: "4.5", y: "6", width: "12.5", height: "10.5", rx: "2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M7.5 13l2-2 2 2 2.5-3 2.5 3" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14.5 17.5l5-5" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16.5 19.5l3-3" })
  ] });
}
function Zf(e) {
  return /* @__PURE__ */ l.jsxs(zt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M20 12l-8 8-9-9v-5a2 2 0 0 1 2-2h5z" }),
    /* @__PURE__ */ l.jsx("circle", { cx: "7.5", cy: "8.5", r: "1" })
  ] });
}
function Jf(e) {
  return /* @__PURE__ */ l.jsxs(zt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M15.5 4.5h-8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9l-3-4z" }),
    /* @__PURE__ */ l.jsx("path", { d: "M15.5 4.5v4h4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M9 11h6" }),
    /* @__PURE__ */ l.jsx("path", { d: "M9 15h6" })
  ] });
}
function em(e) {
  return /* @__PURE__ */ l.jsxs(zt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M7 7h10" }),
    /* @__PURE__ */ l.jsx("path", { d: "M9 7v-2h6v2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 7l1 12h6l1-12" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14.5 13.5a3.5 3.5 0 1 1-1.2-2.6" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14.5 9.5v3h-3" })
  ] });
}
const tm = [
  { id: "", label: "None", icon: null },
  {
    id: "add_unified_loader",
    label: "Add Unified Loader",
    icon: Qf
  },
  {
    id: "send_to_workflow",
    label: "Send to Workflow",
    icon: qf
  },
  {
    id: "send_to_workflow_mask",
    label: "Send to Workflow (Mask)",
    icon: Yf
  },
  { id: "queue_workflow", label: "Queue Workflow", icon: Kf },
  {
    id: "queue_workflow_mask",
    label: "Queue Workflow (Mask)",
    icon: Gf
  },
  {
    id: "restore_full_workflow",
    label: "Restore Full Workflow",
    icon: Hf
  },
  { id: "edit_tags", label: "Edit Tags", icon: Zf },
  { id: "edit_notes", label: "Edit Notes", icon: Jf },
  {
    id: "edit_source_image",
    label: "Edit Source Image",
    icon: Xf
  },
  {
    id: "restore_image",
    label: "Restore Image (Trash)",
    icon: em
  },
  { id: "delete_or_trash", label: "Delete / Trash", icon: Gt }
], Gy = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: s,
  thumbnailSizeInput: a,
  initialLoadCountInput: o,
  maxLoadCountInput: i
}) => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Card Appearance" }),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Thumbnail Size",
        description: "Size of the image thumbnails in the sidebar (50-500px).",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: a,
            min: 50,
            max: 500,
            onChange: (c) => r("sidebar.thumbnail_size", c.target.value, 50, 500),
            onBlur: () => s({ key: "sidebar.thumbnail_size" })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path on the card.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["sidebar.show_filename"],
            onChange: (c) => t((d) => ({
              ...d,
              "sidebar.show_filename": c.target.value
            })),
            children: [
              /* @__PURE__ */ l.jsx("option", { value: "filename", children: "Filename" }),
              /* @__PURE__ */ l.jsx("option", { value: "filepath", children: "Filepath" }),
              /* @__PURE__ */ l.jsx("option", { value: "none", children: "None" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Show Dimensions",
        description: "Display the image dimensions (width x height) on the card.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["sidebar.show_dimensions"],
              onChange: () => n("sidebar.show_dimensions", e["sidebar.show_dimensions"])
            }
          ),
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Show Created At",
        description: "Display the image creation date and time on the card.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["sidebar.show_created_at"],
              onChange: () => n("sidebar.show_created_at", e["sidebar.show_created_at"])
            }
          ),
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Show Source Images",
        description: "Display images that have been used as a basis for other images (sources). (Note: This setting is ignored during searches)",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Show Source Info",
        description: "Display source image information and lineage link on image cards.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(X, { label: "Show Model", description: "Display the model name on the card.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
      /* @__PURE__ */ l.jsx(
        "input",
        {
          type: "checkbox",
          checked: e["sidebar.show_model_name"],
          onChange: () => n("sidebar.show_model_name", e["sidebar.show_model_name"])
        }
      ),
      /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
    ] }) }),
    /* @__PURE__ */ l.jsx(X, { label: "Show Positive", description: "Display the positive prompt on the card.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
      /* @__PURE__ */ l.jsx(
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
      /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
    ] }) }),
    /* @__PURE__ */ l.jsx(X, { label: "Show Negative", description: "Display the negative prompt on the card.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
      /* @__PURE__ */ l.jsx(
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
      /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
    ] }) }),
    /* @__PURE__ */ l.jsx(X, { label: "Show User Notes", description: "Display user notes on the card.", children: /* @__PURE__ */ l.jsxs(
      "select",
      {
        className: "meld-select",
        value: e["sidebar.show_user_notes"],
        onChange: (c) => t((d) => ({
          ...d,
          "sidebar.show_user_notes": c.target.value
        })),
        children: [
          /* @__PURE__ */ l.jsx("option", { value: "always", children: "Always show" }),
          /* @__PURE__ */ l.jsx("option", { value: "if_present", children: "Show only when present" }),
          /* @__PURE__ */ l.jsx("option", { value: "hidden", children: "Always hide" })
        ]
      }
    ) }),
    /* @__PURE__ */ l.jsx(X, { label: "Show Tags", description: "Display tags on the card.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
      /* @__PURE__ */ l.jsx(
        "input",
        {
          type: "checkbox",
          checked: e["sidebar.show_tags"],
          onChange: () => n("sidebar.show_tags", e["sidebar.show_tags"])
        }
      ),
      /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
    ] }) })
  ] }),
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Search Behavior" }),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Show Quick Suggestions",
        description: "Show suggested keywords when the search field is empty.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["search.quick_suggestions"],
              onChange: () => n("search.quick_suggestions", e["search.quick_suggestions"])
            }
          ),
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Show Input Suggestions",
        description: "Show suggestions when typing search prefixes (e.g. pos:).",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["search.input_suggest"],
              onChange: () => n("search.input_suggest", e["search.input_suggest"])
            }
          ),
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    )
  ] }),
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "List Behavior" }),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Initial Load Count",
        description: "Number of images to load and display immediately (10-1000).",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: o,
            min: 10,
            max: 1e3,
            onChange: (c) => r("gallery.initial_load_count", c.target.value, 10, 1e3),
            onBlur: () => s({ key: "gallery.initial_load_count" })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Maximum Load Count",
        description: "Maximum number of images to load in the background (10-1000000).",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: i,
            min: 10,
            max: 1e6,
            onChange: (c) => r("gallery.max_load_count", c.target.value, 10, 1e6),
            onBlur: () => s({ key: "gallery.max_load_count" })
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Quick Shortcuts (Card)" }),
    [1, 2, 3].map((c) => /* @__PURE__ */ l.jsx(
      X,
      {
        label: `Quick Shortcut Slot ${c}`,
        description: `Choose an action for shortcut slot ${c}.`,
        children: /* @__PURE__ */ l.jsx(
          "select",
          {
            className: "meld-select",
            value: e[`gallery.quick_shortcut.${c}`],
            onChange: (d) => t((h) => ({
              ...h,
              [`gallery.quick_shortcut.${c}`]: d.target.value
            })),
            children: tm.map((d) => /* @__PURE__ */ l.jsx("option", { value: d.id, children: d.label }, d.id))
          }
        )
      },
      c
    ))
  ] })
] }), qy = () => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-list meld-information-tab", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "ComfyUI Meld" }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item", children: /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item__info", children: [
      /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__label", children: "Version" }),
      /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__description", children: "0.4.0" })
    ] }) })
  ] }),
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Author & Links" }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item", children: /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item__info", children: [
      /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__label", children: "Author" }),
      /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__description", children: "HappyOnigiri" })
    ] }) }),
    /* @__PURE__ */ l.jsx(
      "a",
      {
        href: "https://github.com/HappyOnigiri/ComfyUI-Meld",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "meld-settings-item meld-settings-item--link",
        style: { textDecoration: "none" },
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item__info", children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-settings-item__label",
              style: { color: "var(--meld-accent-color)" },
              children: "GitHub Repository"
            }
          ),
          /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__description", children: "Star the project or fork it" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "a",
      {
        href: "https://github.com/HappyOnigiri/ComfyUI-Meld/issues/new/choose",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "meld-settings-item meld-settings-item--link",
        style: { textDecoration: "none" },
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item__info", children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-settings-item__label",
              style: { color: "var(--meld-accent-color)" },
              children: "Bug Tracker"
            }
          ),
          /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__description", children: "Report issues or suggest features" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "a",
      {
        href: "https://x.com/H_OnigiriWorks",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "meld-settings-item meld-settings-item--link",
        style: { textDecoration: "none" },
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item__info", children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-settings-item__label",
              style: { color: "var(--meld-accent-color)" },
              children: "X (Twitter)"
            }
          ),
          /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__description", children: "Follow for updates and news" })
        ] })
      }
    )
  ] }),
  /* @__PURE__ */ l.jsxs(
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
] }), Yy = ({
  localSettings: e,
  setLocalSettings: t,
  shortcutErrors: n,
  setShortcutErrors: r,
  validateShortcut: s,
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
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-help", children: [
      /* @__PURE__ */ l.jsx("p", { children: "These shortcuts are available in both View and Full Screen modes." }),
      /* @__PURE__ */ l.jsxs("p", { children: [
        "You can combine multiple commands with spaces.",
        /* @__PURE__ */ l.jsx("br", {}),
        "Example: ",
        /* @__PURE__ */ l.jsx("code", { children: "tag:favorite next" }),
        " (Add tag and move to next)",
        /* @__PURE__ */ l.jsx("br", {}),
        "Use quotes for names with spaces. Example: ",
        /* @__PURE__ */ l.jsx("code", { children: 'lt:"My Best"' })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-help__commands", children: [
        /* @__PURE__ */ l.jsx("strong", { children: "Available commands:" }),
        /* @__PURE__ */ l.jsxs("ul", { children: [
          /* @__PURE__ */ l.jsxs("li", { children: [
            /* @__PURE__ */ l.jsx("code", { children: "tag:NAME" }),
            " - Add a tag"
          ] }),
          /* @__PURE__ */ l.jsxs("li", { children: [
            /* @__PURE__ */ l.jsx("code", { children: "-tag:NAME" }),
            " - Remove a tag"
          ] }),
          /* @__PURE__ */ l.jsxs("li", { children: [
            /* @__PURE__ */ l.jsx("code", { children: "tag-toggle:NAME" }),
            " - Toggle a tag"
          ] }),
          /* @__PURE__ */ l.jsxs("li", { children: [
            /* @__PURE__ */ l.jsx("code", { children: "lt:SLOT_ID" }),
            " - Send to Light Table (Example: ",
            /* @__PURE__ */ l.jsx("code", { children: "lt:keep" }),
            ",",
            " ",
            /* @__PURE__ */ l.jsx("code", { children: "lt:refine" }),
            ", ",
            /* @__PURE__ */ l.jsx("code", { children: "lt:trash" }),
            ")"
          ] }),
          /* @__PURE__ */ l.jsxs("li", { children: [
            /* @__PURE__ */ l.jsx("code", { children: "next" }),
            " / ",
            /* @__PURE__ */ l.jsx("code", { children: "prev" }),
            " - Navigate images"
          ] }),
          /* @__PURE__ */ l.jsxs("li", { children: [
            /* @__PURE__ */ l.jsx("code", { children: "delete" }),
            " - Delete image immediately (No confirm)"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-list", children: [
      i.map((c, d) => /* @__PURE__ */ l.jsx(
        X,
        {
          label: `Shortcut ${d === 9 ? 0 : d + 1} (Key: ${d === 9 ? 0 : d + 1})`,
          description: `Command to execute when pressing '${d === 9 ? 0 : d + 1}' in View/Full Screen mode.`,
          children: /* @__PURE__ */ l.jsx(
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
                const h = s(e[c] || "");
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
      /* @__PURE__ */ l.jsx(
        X,
        {
          label: "Show Cheat Sheet",
          description: "Display shortcut key guide in View/Full Screen mode.",
          children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
            /* @__PURE__ */ l.jsx(
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
            /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-extra", children: /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Reset Shortcuts",
        description: "Restore all shortcuts to their default values.",
        children: /* @__PURE__ */ l.jsx(
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
}, Xy = ({
  localSettings: e,
  handleNumberChange: t,
  handleNumberBlur: n,
  handleToggle: r,
  setLocalSettings: s,
  handleViewTrash: a,
  handleClearThumbnailCache: o,
  lineageMaxDepthInput: i,
  trashRetentionDaysInput: c,
  autoLinkPhashThresholdInput: d,
  suggestPhashThresholdInput: h
}) => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Image Matching" }),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Source Matching Strategy",
        description: "Algorithm used to identify the source image.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["gallery.matching_strategy"],
            onChange: (v) => s((g) => ({
              ...g,
              "gallery.matching_strategy": v.target.value
            })),
            children: [
              /* @__PURE__ */ l.jsx("option", { value: "phash_created", children: "pHash & Created Time" }),
              /* @__PURE__ */ l.jsx("option", { value: "filename_phash", children: "Filename -> pHash" }),
              /* @__PURE__ */ l.jsx("option", { value: "phash_only", children: "pHash Only" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Auto Linking Threshold (%)",
        description: "Minimum similarity percentage for automatic parent linking during creation or scan (0-100). Default: 92%. Should be strict to avoid false links.",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: d,
            min: 0,
            max: 100,
            onChange: (v) => t("gallery.auto_link_phash_threshold", v.target.value, 0, 100),
            onBlur: () => n({ key: "gallery.auto_link_phash_threshold" })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Source Suggestion Threshold (%)",
        description: "Minimum similarity percentage for showing candidates in manual 'Add Source' dialog (0-100). Default: 82%. Permissive enough to find ancestors.",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: h,
            min: 0,
            max: 100,
            onChange: (v) => t("gallery.suggest_phash_threshold", v.target.value, 0, 100),
            onBlur: () => n({ key: "gallery.suggest_phash_threshold" })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Inherit Tags from Source",
        description: "Automatically copy tags from the source image when a new image is registered or saved.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["gallery.inherit_tags"],
              onChange: () => r("gallery.inherit_tags", e["gallery.inherit_tags"])
            }
          ),
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    )
  ] }),
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Lineage" }),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Max Lineage Depth",
        description: "Maximum number of ancestor levels to fetch and display (1-10).",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: i,
            min: 1,
            max: 10,
            onChange: (v) => t("gallery.lineage_max_depth", v.target.value, 1, 10),
            onBlur: () => n({ key: "gallery.lineage_max_depth" })
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Thumbnail Cache" }),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Clear Thumbnail Cache",
        description: "Delete all cached thumbnails. They will be regenerated on next view.",
        children: /* @__PURE__ */ l.jsx(
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
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Trash" }),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Trash Retention Period (Days)",
        description: "How many days to keep deleted items in trash (0-365).",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: c,
            min: 0,
            max: 365,
            onChange: (v) => t("gallery.trash_retention_days", v.target.value, 0, 365),
            onBlur: () => n({ key: "gallery.trash_retention_days" })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Trash Management",
        description: "View and manage items currently in the trash bin.",
        children: /* @__PURE__ */ l.jsx(
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
] }), Zy = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: s,
  thumbnailWindowSizeInput: a,
  maxPositivePromptLinesInput: o,
  maxNegativePromptLinesInput: i,
  viewerCorePromptCountInput: c
}) => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Navigation & Display" }),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Loop Navigation",
        description: "Loop to the beginning/end when navigating in the viewer.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.loop"],
              onChange: () => n("viewer.loop", e["viewer.loop"])
            }
          ),
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Small Image Display",
        description: "Choose how to display images smaller than the viewer area.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.small_image_mode"],
            onChange: (d) => t((h) => ({
              ...h,
              "viewer.small_image_mode": d.target.value
            })),
            children: [
              /* @__PURE__ */ l.jsx("option", { value: "original", children: "Original Size" }),
              /* @__PURE__ */ l.jsx("option", { value: "fit", children: "Fit to Screen" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Show Tool Icons",
        description: "Display navigation and action icons in view mode.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.show_icons"],
              onChange: () => n("viewer.show_icons", e["viewer.show_icons"])
            }
          ),
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Show Thumbnails",
        description: "Display the thumbnail strip at the bottom of the viewer. Disabling this can improve performance on slower systems.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.show_thumbnails"],
              onChange: () => n("viewer.show_thumbnails", e["viewer.show_thumbnails"])
            }
          ),
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Thumbnail Window Size",
        description: "Number of thumbnails to keep in the viewer (1-10000).",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: a,
            min: 1,
            max: 1e4,
            onChange: (d) => r("viewer.thumbnail_window_size", d.target.value, 1, 1e4),
            onBlur: () => s({ key: "viewer.thumbnail_window_size" })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(X, { label: "Delete Mode", description: "Choose how images are deleted in view mode.", children: /* @__PURE__ */ l.jsxs(
      "select",
      {
        className: "meld-select",
        value: e["viewer.delete_mode"],
        onChange: (d) => t((h) => ({
          ...h,
          "viewer.delete_mode": d.target.value
        })),
        children: [
          /* @__PURE__ */ l.jsx("option", { value: "confirm", children: "Confirmed" }),
          /* @__PURE__ */ l.jsx("option", { value: "target_only", children: "Unconfirmed (Target Only)" }),
          /* @__PURE__ */ l.jsx("option", { value: "lineage", children: "Unconfirmed (Include Lineage)" })
        ]
      }
    ) })
  ] }),
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Details Panel" }),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Show Details by Default",
        description: "Show the image details panel automatically when opening the viewer.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path in the details.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.details.show_filename"],
            onChange: (d) => t((h) => ({
              ...h,
              "viewer.details.show_filename": d.target.value
            })),
            children: [
              /* @__PURE__ */ l.jsx("option", { value: "filename", children: "Filename" }),
              /* @__PURE__ */ l.jsx("option", { value: "filepath", children: "Filepath" }),
              /* @__PURE__ */ l.jsx("option", { value: "none", children: "None" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(X, { label: "Show Dimensions", description: "Display dimensions in the details panel.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
      /* @__PURE__ */ l.jsx(
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
      /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
    ] }) }),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Show Created At",
        description: "Display generation date/time in the details panel.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Show Source Info",
        description: "Display source image information in the details panel.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(X, { label: "Show Model", description: "Display model name in the details panel.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
      /* @__PURE__ */ l.jsx(
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
      /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
    ] }) }),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Show Positive",
        description: "Display positive prompt in the details panel.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Show Core Prompt",
        description: "Display a subset of keywords from the positive prompt based on rarity (bottom analytics counts).",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.details.show_core_prompt"],
              onChange: () => n(
                "viewer.details.show_core_prompt",
                e["viewer.details.show_core_prompt"]
              )
            }
          ),
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Core Prompt Keyword Count",
        description: "Number of rarity keywords to display.",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: c,
            min: 1,
            max: 100,
            onChange: (d) => r("viewer.details.core_prompt_count", d.target.value, 1, 100),
            onBlur: () => s({
              key: "viewer.details.core_prompt_count"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Max Positive Prompt Lines",
        description: "Maximum number of lines to display for the positive prompt.",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: o,
            min: 1,
            max: 100,
            onChange: (d) => r("viewer.details.max_positive_prompt_lines", d.target.value, 1, 100),
            onBlur: () => s({
              key: "viewer.details.max_positive_prompt_lines"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Show Negative",
        description: "Display negative prompt in the details panel.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(X, { label: "Show User Notes", description: "Display user notes in the details panel.", children: /* @__PURE__ */ l.jsxs(
      "select",
      {
        className: "meld-select",
        value: e["viewer.details.show_user_notes"],
        onChange: (d) => t((h) => ({
          ...h,
          "viewer.details.show_user_notes": d.target.value
        })),
        children: [
          /* @__PURE__ */ l.jsx("option", { value: "always", children: "Always show" }),
          /* @__PURE__ */ l.jsx("option", { value: "if_present", children: "Show only when present" }),
          /* @__PURE__ */ l.jsx("option", { value: "hidden", children: "Always hide" })
        ]
      }
    ) }),
    /* @__PURE__ */ l.jsx(
      X,
      {
        label: "Max Negative Prompt Lines",
        description: "Maximum number of lines to display for the negative prompt.",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: i,
            min: 1,
            max: 100,
            onChange: (d) => r("viewer.details.max_negative_prompt_lines", d.target.value, 1, 100),
            onBlur: () => s({
              key: "viewer.details.max_negative_prompt_lines"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(X, { label: "Show Tags", description: "Display tags in the details panel.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
      /* @__PURE__ */ l.jsx(
        "input",
        {
          type: "checkbox",
          checked: e["viewer.details.show_tags"],
          onChange: () => n("viewer.details.show_tags", e["viewer.details.show_tags"])
        }
      ),
      /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
    ] }) })
  ] })
] }), nm = () => {
  const {
    activeTab: e,
    setActiveTab: t,
    localSettings: n,
    setLocalSettings: r,
    shortcutErrors: s,
    setShortcutErrors: a,
    handleClose: o,
    handleToggle: i,
    handleNumberChange: c,
    handleNumberBlur: d,
    handleResetShortcuts: h,
    handleViewTrash: v,
    handleClearThumbnailCache: g,
    validateShortcut: b,
    // Input states
    initialLoadCountInput: w,
    maxLoadCountInput: x,
    lineageMaxDepthInput: S,
    thumbnailWindowSizeInput: f,
    trashRetentionDaysInput: m,
    autoLinkPhashThresholdInput: u,
    suggestPhashThresholdInput: y,
    maxPositivePromptLinesInput: _,
    maxNegativePromptLinesInput: k,
    fullscreenMaxPositivePromptLinesInput: j,
    fullscreenMaxNegativePromptLinesInput: E,
    viewerCorePromptCountInput: D,
    fullscreenCorePromptCountInput: N,
    thumbnailSizeInput: L
  } = Hy();
  Le({ onEscape: o });
  const $ = p.useRef(!1), Q = (T) => {
    T.target === T.currentTarget && ($.current = !0);
  }, I = (T) => {
    T.target === T.currentTarget && $.current && o(), $.current = !1;
  }, z = [
    { id: "Gallery", label: "Gallery" },
    { id: "View", label: "View" },
    { id: "Full Screen", label: "Full Screen" },
    { id: "Shortcuts", label: "Shortcuts" },
    { id: "System", label: "System" },
    { id: "Information", label: "Information" }
  ], M = (T) => T.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""), A = (T, P) => {
    if (T.key === "ArrowDown" || T.key === "ArrowRight") {
      T.preventDefault();
      const U = z[(P + 1) % z.length];
      U && t(U.id);
    } else if (T.key === "ArrowUp" || T.key === "ArrowLeft") {
      T.preventDefault();
      const U = z[(P - 1 + z.length) % z.length];
      U && t(U.id);
    }
  }, C = () => {
    switch (e) {
      case "System":
        return /* @__PURE__ */ l.jsx(
          Xy,
          {
            localSettings: n,
            handleNumberChange: c,
            handleNumberBlur: d,
            handleToggle: i,
            setLocalSettings: r,
            handleViewTrash: v,
            handleClearThumbnailCache: g,
            lineageMaxDepthInput: S,
            trashRetentionDaysInput: m,
            autoLinkPhashThresholdInput: u,
            suggestPhashThresholdInput: y
          }
        );
      case "Gallery":
        return /* @__PURE__ */ l.jsx(
          Gy,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailSizeInput: L,
            initialLoadCountInput: w,
            maxLoadCountInput: x
          }
        );
      case "View":
        return /* @__PURE__ */ l.jsx(
          Zy,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailWindowSizeInput: f,
            maxPositivePromptLinesInput: _,
            maxNegativePromptLinesInput: k,
            viewerCorePromptCountInput: D
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ l.jsx(
          Ky,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            maxPositivePromptLinesInput: j,
            maxNegativePromptLinesInput: E,
            fullscreenCorePromptCountInput: N
          }
        );
      case "Shortcuts":
        return /* @__PURE__ */ l.jsx(
          Yy,
          {
            localSettings: n,
            setLocalSettings: r,
            shortcutErrors: s,
            setShortcutErrors: a,
            validateShortcut: b,
            handleToggle: i,
            handleResetShortcuts: h
          }
        );
      case "Information":
        return /* @__PURE__ */ l.jsx(qy, {});
      default:
        return null;
    }
  };
  return ye.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: Q,
        onMouseUp: I,
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content meld-settings-modal", onClick: (T) => T.stopPropagation(), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ l.jsx("h2", { children: "Settings" }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: o,
                "aria-label": "Close",
                children: /* @__PURE__ */ l.jsx(pe, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-layout", children: [
            /* @__PURE__ */ l.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ l.jsx("div", { className: "meld-tabs", role: "tablist", children: z.map((T, P) => /* @__PURE__ */ l.jsx(
              "button",
              {
                id: `meld-settings-tab-${M(T.id)}`,
                type: "button",
                role: "tab",
                "aria-selected": e === T.id,
                tabIndex: e === T.id ? 0 : -1,
                "aria-controls": `meld-settings-tabpanel-${M(T.id)}`,
                className: `meld-tab ${e === T.id ? "active" : ""}`,
                onClick: () => t(T.id),
                onKeyDown: (U) => A(U, P),
                children: T.label
              },
              T.id
            )) }) }),
            /* @__PURE__ */ l.jsx(
              "div",
              {
                className: "meld-modal-body",
                role: "tabpanel",
                id: `meld-settings-tabpanel-${M(e)}`,
                "aria-labelledby": `meld-settings-tab-${M(e)}`,
                children: C()
              }
            )
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, Et = "none", fl = (e) => {
  e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
}, Je = (e) => {
  e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation();
}, Jy = () => {
  const e = document.activeElement;
  if (!(e instanceof HTMLElement))
    return !1;
  const t = e.tagName;
  return t === "INPUT" || t === "TEXTAREA" || !!e.isContentEditable;
}, rm = ({
  imageIds: e,
  initialTags: t,
  onClose: n,
  onSuccess: r
}) => {
  const { dispatch: s, refreshImages: a } = he(), [o, i] = p.useState([]), [c, d] = p.useState(t), [h, v] = p.useState(""), [g, b] = p.useState(!0), [w, x] = p.useState(!1), S = p.useRef(null), f = e.length > 1, m = p.useRef(!1), u = (N) => {
    N.target === N.currentTarget && (m.current = !0);
  }, y = (N) => {
    N.target === N.currentTarget && m.current && n(), m.current = !1;
  };
  p.useEffect(() => {
    let N = !0;
    return (async () => {
      b(!0);
      try {
        const $ = await xi();
        N && i($ || []);
      } catch ($) {
        N && W.error("Failed to fetch tags:", $);
      } finally {
        N && b(!1);
      }
    })(), () => {
      N = !1;
    };
  }, []), p.useEffect(() => {
    S.current && S.current.focus();
  }, []), Le({ onEscape: n });
  const _ = p.useMemo(() => o.filter(
    (N) => N.name.toLowerCase().includes(h.toLowerCase()) && !c.includes(N.name)
  ), [o, h, c]), k = (N) => {
    const L = N.trim();
    if (L.toLowerCase() === Et) {
      alert(`Tag name '${Et}' is reserved for search and cannot be used.`);
      return;
    }
    L && !c.includes(L) && (d([...c, L]), v(""));
  }, j = (N) => {
    d(c.filter((L) => L !== N));
  }, E = async () => {
    x(!0);
    try {
      if (f) {
        const N = c.filter(($) => !t.includes($)), L = t.filter(($) => !c.includes($));
        await Tf(e, N, L);
      } else {
        const N = e[0];
        if (N === void 0)
          throw new Error("No image selected");
        await Bg(N, c);
      }
      await a(), s({ type: "CLEAR_SELECTION" }), r == null || r(), n();
    } catch (N) {
      W.error("Failed to update tags:", N), alert("Failed to update tags.");
    } finally {
      x(!1);
    }
  }, D = (N) => {
    N.key === "Enter" && h.trim() && (Je(N), k(h.trim()));
  };
  return ye.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: u,
        onMouseUp: y,
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (N) => N.stopPropagation(), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ l.jsx(xr, { size: 18 }),
              /* @__PURE__ */ l.jsx("h3", { style: { margin: 0 }, children: f ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ l.jsx(pe, { size: 20 }) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-body", children: [
            f && /* @__PURE__ */ l.jsx(
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
            /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-edit-label", children: f ? "Collective Tags" : "Selected Tags" }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-edit-selected", children: c.length === 0 ? /* @__PURE__ */ l.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : c.map((N) => /* @__PURE__ */ l.jsxs("span", { className: "meld-tag-edit-badge", children: [
                N,
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => j(N),
                    children: /* @__PURE__ */ l.jsx(pe, { size: 12 })
                  }
                )
              ] }, N)) })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ l.jsx(yn, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ l.jsx(
                  "input",
                  {
                    ref: S,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: h,
                    onChange: (N) => v(N.target.value),
                    onKeyDown: D
                  }
                ),
                h.trim() && !c.includes(h.trim()) && /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => k(h),
                    children: [
                      /* @__PURE__ */ l.jsx(Qs, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions", children: g ? /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : _.length === 0 ? h ? /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : _.map((N) => /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => k(N.name),
                  children: N.name
                },
                N.id
              )) })
            ] })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-footer", children: [
            /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-btn meld-btn--secondary", onClick: n, children: "Cancel" }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn--primary",
                onClick: E,
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
}, Hs = (e, t) => {
  const n = p.useCallback(async (x) => vo(x), []), r = p.useCallback(
    async (x, S, f) => {
      await Tf(x, S, f);
    },
    []
  ), s = p.useCallback(async (x) => {
    try {
      const S = await Hg(x.id);
      return S.workflow ? (await window.app.loadGraphData(S.workflow), W.log("Workflow restored successfully from Meld"), !0) : (alert("No workflow information is saved for this image."), !1);
    } catch (S) {
      return W.error("Error restoring workflow:", S), alert("Failed to restore workflow."), !1;
    }
  }, []), a = p.useCallback(async (x) => {
    try {
      const S = await Kg(x.id), f = S.is_flux ? "MeldUnifiedFluxLoader" : "MeldUnifiedLoader", m = window.app, u = window.LiteGraph;
      if (!m.graph || !m.canvas || !u)
        return alert("ComfyUI graph is not ready. Please open a workflow first."), !1;
      const y = u.createNode(f);
      if (!y)
        return W.error(`Node type ${f} not found.`), alert(
          `Node type ${f} not found. Please make sure the Meld Unified Loader node is installed.`
        ), !1;
      const _ = S.is_flux ? {
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
      if (y.widgets) {
        for (const [D, N] of Object.entries(_)) {
          const L = S[D];
          if (L != null && L !== "") {
            const $ = y.widgets.find((Q) => Q.name === N);
            $ && ($.value = L);
          }
        }
        const E = y.widgets.find((D) => D.name === "control_after_generate");
        E && (E.value = "fixed");
      }
      const k = m.canvas.ds.offset, j = m.canvas.ds.scale;
      return y.pos = [(-k[0] + 400) / j, (-k[1] + 300) / j], m.graph.add(y), m.canvas.selectNode(y), m.canvas.centerOnNode(y), !0;
    } catch (S) {
      return W.error("Error adding Unified Loader:", S), alert("Failed to load settings."), !1;
    }
  }, []), o = p.useCallback(
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
  ), i = p.useCallback(
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
  ), c = p.useCallback(
    (x) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: x.id }
      });
    },
    [t]
  ), d = p.useCallback(
    (x) => {
      const S = window.app;
      if (!(S != null && S.graph))
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No active workflow graph found. Please open a workflow first."
          }
        }), !1;
      const f = S.graph._nodes.filter((u) => or(u.type));
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
            image: x,
            nodes: f.map((u) => ({
              id: String(u.id),
              type: u.type ?? "",
              title: u.title
            })),
            onSelect: (u) => {
              ul(x, u);
            }
          }
        }), !0;
      const m = ul(x);
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
    (x) => {
      const S = Array.isArray(x) ? x : [x];
      t({
        type: "OPEN_MODAL",
        payload: { type: "workflow_selection", images: S }
      });
    },
    [t]
  ), v = p.useCallback(
    async (x, S = "run") => {
      var m;
      W.log("handleRunWithMask called", x, S);
      const f = Array.isArray(x) ? x : [x];
      if (S === "apply") {
        const u = window.app, y = ((m = u == null ? void 0 : u.graph) == null ? void 0 : m._nodes) || [];
        W.log(
          "Current graph nodes:",
          y.map((E) => ({
            id: E.id,
            type: E.type ?? ""
          }))
        );
        const _ = y.some((E) => Qr(E.type)), k = y.some((E) => or(E.type));
        if (W.log("Nodes found:", { hasMaskNode: _, hasLoaderNode: k }), !_ || !k) {
          const E = [];
          k || E.push("'Meld Image Loader'"), _ || E.push("'Load Image (as Mask)'"), t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: `Required nodes missing in current workflow: ${E.join(" and ")}. Please add them to use the Mask Tool.`
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
        const j = f[0];
        if (!j) {
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
          payload: { type: "mask_editor", imageId: j.id, mode: S }
        });
        return;
      }
      try {
        if (!(await Of()).some((_) => _.valid && _.mask_count >= 1)) {
          t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: "No workflows found with at least one 'Load Image (as Mask)' node. Please save a compatible workflow first."
            }
          });
          return;
        }
      } catch (u) {
        W.error("[Meld] Error checking workflows:", u);
      }
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
    async (x, S) => {
      try {
        const f = x.id, u = (await vo([f])).restored_ids || [f];
        t({ type: "REMOVE_IMAGES", payload: u }), S == null || S();
      } catch (f) {
        t({
          type: "SET_ERROR",
          payload: f instanceof Error ? f.message : String(f)
        });
      }
    },
    [t]
  ), b = p.useCallback(
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
  ), w = p.useCallback(
    async (x, S) => {
      try {
        const f = await Qg(x, S);
        t({ type: "UPDATE_IMAGE", payload: f });
      } catch (f) {
        t({
          type: "SET_ERROR",
          payload: f instanceof Error ? f.message : String(f)
        });
      }
    },
    [t]
  );
  return {
    restoreImages: n,
    bulkUpdateImageTags: r,
    handleRestoreWorkflow: s,
    handleAddUnifiedLoader: a,
    handleEditTags: o,
    handleEditSource: c,
    handleSendToWorkflow: d,
    handleRunWithWorkflow: h,
    handleRunWithMask: v,
    handleRestore: g,
    handleDelete: b,
    handleEditNotes: i,
    handleUpdateUserNotes: w
  };
}, lm = ({ imageId: e, initialNotes: t, onClose: n }) => {
  const { state: r, dispatch: s } = he(), { handleUpdateUserNotes: a } = Hs(r, s), [o, i] = p.useState(t), [c, d] = p.useState(!1), h = p.useRef(null), v = p.useRef(!1), g = (x) => {
    x.target === x.currentTarget && (v.current = !0);
  }, b = (x) => {
    x.target === x.currentTarget && v.current && n(), v.current = !1;
  };
  p.useEffect(() => {
    h.current && h.current.focus();
  }, []);
  const w = p.useCallback(async () => {
    d(!0);
    try {
      await a(e, o), n();
    } catch (x) {
      W.error("Failed to update notes:", x), alert("Failed to update notes.");
    } finally {
      d(!1);
    }
  }, [a, e, o, n]);
  return p.useEffect(() => {
    const x = (S) => {
      S.key === "Enter" && (S.ctrlKey || S.metaKey) && S.target === h.current && (S.preventDefault(), S.stopPropagation(), S.stopImmediatePropagation(), w());
    };
    return window.addEventListener("keydown", x, { capture: !0 }), () => {
      window.removeEventListener("keydown", x, {
        capture: !0
      });
    };
  }, [w]), Le({ onEscape: n }), ye.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: g,
        onMouseUp: b,
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (x) => x.stopPropagation(), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ l.jsx(Ig, { size: 18 }),
              /* @__PURE__ */ l.jsx("h3", { style: { margin: 0 }, children: "Edit Notes" })
            ] }),
            /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, "aria-label": "Close", children: /* @__PURE__ */ l.jsx(pe, { size: 20 }) })
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ l.jsxs("div", { className: "meld-note-edit-section", children: [
            /* @__PURE__ */ l.jsx(
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
                onChange: (x) => i(x.target.value)
              }
            ),
            /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-footer", children: [
            /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-btn meld-btn--secondary", onClick: n, children: "Cancel" }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn--primary",
                onClick: w,
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
}, sm = ({
  image: e,
  nodes: t,
  onSelect: n
}) => {
  const { dispatch: r } = he(), s = p.useCallback(() => {
    r({ type: "CLOSE_MODAL" });
  }, [r]);
  Le({ onEscape: s });
  const a = p.useRef(!1), o = p.useCallback((c) => {
    c.target === c.currentTarget && (a.current = !0);
  }, []), i = p.useCallback(
    (c) => {
      c.target === c.currentTarget && a.current && s(), a.current = !1;
    },
    [s]
  );
  return ye.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: o,
        onMouseUp: i,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--small",
            onClick: (c) => c.stopPropagation(),
            children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ l.jsx("h2", { children: "Select Target Node" }),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: s,
                    "aria-label": "Close",
                    children: /* @__PURE__ */ l.jsx(pe, { size: 20, "aria-hidden": !0 })
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-body", children: [
                /* @__PURE__ */ l.jsxs(
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
                      /* @__PURE__ */ l.jsx("strong", { children: e.filename }),
                      ":"
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker__list", children: t.map((c) => /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-workflow-node-item",
                    onClick: () => {
                      n(c.id), s();
                    },
                    children: [
                      /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-node-item__info", children: [
                        /* @__PURE__ */ l.jsx("span", { className: "meld-workflow-node-item__title", children: c.title || c.type }),
                        /* @__PURE__ */ l.jsxs("span", { className: "meld-workflow-node-item__id", children: [
                          "#",
                          c.id
                        ] })
                      ] }),
                      /* @__PURE__ */ l.jsx(dl, { size: 12 })
                    ]
                  },
                  c.id
                )) })
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-btn meld-btn--secondary", onClick: s, children: "Cancel" }) })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, am = ({
  images: e,
  onExecute: t,
  onSuccess: n,
  isMaskMode: r
}) => {
  var z;
  const { dispatch: s } = he(), [a, o] = p.useState([]), [i, c] = p.useState(!0), [d, h] = p.useState(null), [v, g] = p.useState(!1), [b, w] = p.useState(null), [x, S] = p.useState({}), [f, m] = p.useState({}), [u, y] = p.useState(""), _ = p.useRef(null), k = p.useMemo(() => a.map((M) => {
    let A = M.valid, C = M.reason;
    return r && M.mask_count === 0 && (A = !1, C = "No 'Load Image (as Mask)' node found."), { ...M, valid: A, reason: C };
  }).sort((M, A) => M.valid !== A.valid ? M.valid ? -1 : 1 : M.name.localeCompare(A.name)), [a, r]), j = p.useMemo(() => {
    if (!u.trim()) return k;
    const M = u.toLowerCase();
    return k.filter((A) => A.name.toLowerCase().includes(M));
  }, [k, u]);
  p.useEffect(() => {
    let M = !0;
    return (async () => {
      try {
        c(!0);
        const C = await Of();
        M && (o(C), h(null));
      } catch (C) {
        M && h(C instanceof Error ? C.message : String(C));
      } finally {
        M && c(!1);
      }
    })(), () => {
      M = !1;
    };
  }, []), p.useEffect(() => {
    !i && _.current && _.current.focus();
  }, [i]);
  const E = p.useCallback(() => {
    s({ type: "CLOSE_MODAL" });
  }, [s]);
  Le({ onEscape: E });
  const D = p.useRef(!1), N = p.useCallback((M) => {
    M.target === M.currentTarget && (D.current = !0);
  }, []), L = p.useCallback(
    (M) => {
      M.target === M.currentTarget && D.current && E(), D.current = !1;
    },
    [E]
  ), $ = async (M, A) => {
    if (!v)
      try {
        g(!0);
        const C = await t(M, A);
        n == null || n(), C !== !1 && E();
      } catch (C) {
        h(C instanceof Error ? C.message : String(C));
      } finally {
        g(!1);
      }
  }, Q = async (M) => {
    if (!(x[M] || f[M]))
      try {
        m((P) => ({ ...P, [M]: !0 }));
        const A = await Ff(M), C = [], T = (P) => {
          if (!P) return !1;
          const U = P.replace(/\s+/g, "").toLowerCase();
          return r ? U === "loadimagemask" : U === "meldimageloader" || U === "loadimage";
        };
        if (A.nodes && Array.isArray(A.nodes)) {
          W.log("Extracting nodes from UI format workflow", A.nodes.length);
          for (const P of A.nodes)
            T(P.type) && (W.log("Found target node (UI):", P.id, P.type, P.title), C.push({
              id: String(P.id),
              type: P.type || "",
              title: P.title
            }));
        } else {
          W.log("Extracting nodes from API format workflow");
          for (const P in A) {
            const U = A[P];
            U && typeof U == "object" && T(U.class_type) && (W.log("Found target node (API):", P, U.class_type), C.push({
              id: P,
              type: U.class_type || ""
            }));
          }
        }
        C.length === 0 && W.warn("No loader nodes found in workflow JSON despite count > 0"), S((P) => ({ ...P, [M]: C }));
      } catch (A) {
        W.error("Failed to fetch workflow nodes:", A);
      } finally {
        m((A) => ({ ...A, [M]: !1 }));
      }
  }, I = (M) => {
    if (!M.valid || v) return;
    if ((r ? M.mask_count : M.loader_count + M.load_image_count) <= 1) {
      $(M.name);
      return;
    }
    b === M.name ? w(null) : (w(M.name), Q(M.name));
  };
  return ye.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: N,
        onMouseUp: L,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--large",
            onClick: (M) => M.stopPropagation(),
            children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ l.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ l.jsx(yi, { size: 20, color: "var(--meld-accent-color)" }),
                  "Queue via Workflow"
                ] }),
                /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-modal-close", onClick: E, children: /* @__PURE__ */ l.jsx(pe, { size: 20 }) })
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", style: { minHeight: "300px" }, children: i ? /* @__PURE__ */ l.jsxs("div", { className: "meld-loading-container", children: [
                /* @__PURE__ */ l.jsx("div", { className: "meld-loading-spinner" }),
                /* @__PURE__ */ l.jsx("span", { children: "Loading workflows..." })
              ] }) : d ? /* @__PURE__ */ l.jsxs("div", { className: "meld-error-container", children: [
                /* @__PURE__ */ l.jsx(wf, { size: 20 }),
                /* @__PURE__ */ l.jsx("span", { children: d })
              ] }) : a.length === 0 ? /* @__PURE__ */ l.jsx(
                "div",
                {
                  style: {
                    padding: "40px",
                    textAlign: "center",
                    color: "var(--meld-text-secondary)"
                  },
                  children: "No workflows found in ComfyUI/user/default/workflows"
                }
              ) : /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-list", children: [
                /* @__PURE__ */ l.jsxs(
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
                      /* @__PURE__ */ l.jsx("strong", { children: e.length > 1 ? `${e.length} images` : (z = e[0]) == null ? void 0 : z.filename }),
                      ". Workflows must have at least one ",
                      /* @__PURE__ */ l.jsx("strong", { children: "Meld Image Loader" }),
                      " or",
                      " ",
                      /* @__PURE__ */ l.jsx("strong", { children: "Load Image" }),
                      " node",
                      r && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                        " ",
                        "and one ",
                        /* @__PURE__ */ l.jsx("strong", { children: "Load Image (as Mask)" }),
                        " node"
                      ] }),
                      "."
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-search-container", style: { marginBottom: "12px" }, children: [
                  /* @__PURE__ */ l.jsx(yn, { className: "meld-tag-search-icon", size: 16 }),
                  /* @__PURE__ */ l.jsx(
                    "input",
                    {
                      ref: _,
                      type: "text",
                      className: "meld-tag-search-input",
                      placeholder: "Search workflows...",
                      value: u,
                      onChange: (M) => y(M.target.value)
                    }
                  ),
                  u && /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-tag-item__btn",
                      onClick: () => {
                        var M;
                        y(""), (M = _.current) == null || M.focus();
                      },
                      style: { padding: "4px" },
                      children: /* @__PURE__ */ l.jsx(pe, { size: 14 })
                    }
                  )
                ] }),
                j.length === 0 ? /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    style: {
                      padding: "20px",
                      textAlign: "center",
                      color: "var(--meld-text-secondary)"
                    },
                    children: "No workflows match your search."
                  }
                ) : j.map((M) => {
                  const A = r ? M.mask_count : M.loader_count + M.load_image_count, C = b === M.name, T = x[M.name] || [], P = f[M.name];
                  return /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-item-container", children: [
                    /* @__PURE__ */ l.jsxs(
                      "div",
                      {
                        className: `meld-workflow-item ${M.valid ? "" : "meld-workflow-item--invalid"} ${C ? "meld-workflow-item--expanded" : ""}`,
                        onClick: () => I(M),
                        title: M.reason || "Click to select",
                        children: [
                          /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-item__info", children: [
                            /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-item__name", children: M.name }),
                            !M.valid && /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-item__reason", children: M.reason }),
                            M.valid && /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-item__supports", children: A > 1 ? `Multiple loaders found (${A})` : r ? "Supports: Load Image (as Mask)" : `Supports: ${M.loader_count > 0 ? "Meld Loader" : "Load Image"}` })
                          ] }),
                          M.valid && A <= 1 && /* @__PURE__ */ l.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn--primary meld-btn-small",
                              disabled: v,
                              onClick: (U) => {
                                U.stopPropagation(), $(M.name);
                              },
                              children: [
                                /* @__PURE__ */ l.jsx(dl, { size: 14 }),
                                v ? "Queuing..." : "Queue"
                              ]
                            }
                          ),
                          M.valid && A > 1 && /* @__PURE__ */ l.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn--primary meld-btn-small",
                              disabled: v,
                              onClick: (U) => {
                                U.stopPropagation(), I(M);
                              },
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                              },
                              children: [
                                C ? "Close" : "Select Node",
                                /* @__PURE__ */ l.jsx(
                                  gi,
                                  {
                                    size: 14,
                                    style: {
                                      transform: C ? "rotate(90deg)" : "rotate(0deg)",
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
                    C && /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker", children: P ? /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-node-picker__loading", children: [
                      /* @__PURE__ */ l.jsx("div", { className: "meld-loading-spinner meld-loading-spinner--small" }),
                      /* @__PURE__ */ l.jsx("span", { children: "Loading nodes..." })
                    ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                      /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker__label", children: "Select target loader node:" }),
                      /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker__list", children: T.map((U) => /* @__PURE__ */ l.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-workflow-node-item",
                          disabled: v,
                          onClick: () => $(M.name, U.id),
                          children: [
                            /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-node-item__info", children: [
                              /* @__PURE__ */ l.jsx("span", { className: "meld-workflow-node-item__title", children: U.title || U.type }),
                              /* @__PURE__ */ l.jsxs("span", { className: "meld-workflow-node-item__id", children: [
                                "#",
                                U.id
                              ] })
                            ] }),
                            /* @__PURE__ */ l.jsx(dl, { size: 12 })
                          ]
                        },
                        U.id
                      )) })
                    ] }) })
                  ] }, M.name);
                })
              ] }) }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn--secondary",
                  onClick: E,
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
}, ev = ({ message: e, onConfirm: t, onCancel: n }) => {
  const r = p.useRef(null), s = p.useRef(null);
  return Le({ onEscape: n }), p.useEffect(() => {
    if (s.current = document.activeElement, r.current) {
      const o = r.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      o.length > 0 ? o[0].focus() : r.current.focus();
    }
    const a = (o) => {
      if (o.key === "Tab") {
        if (!r.current) return;
        const i = r.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (i.length === 0) return;
        const c = i.item(0), d = i.item(i.length - 1);
        if (!c || !d) return;
        o.shiftKey ? document.activeElement === c && (d.focus(), o.preventDefault()) : document.activeElement === d && (c.focus(), o.preventDefault());
      }
    };
    return document.addEventListener("keydown", a, { capture: !0 }), () => {
      document.removeEventListener("keydown", a, { capture: !0 }), s.current && typeof s.current.focus == "function" && s.current.focus();
    };
  }, []), /* @__PURE__ */ l.jsx(
    "div",
    {
      className: "meld-confirm-modal__overlay",
      onClick: n,
      onKeyDown: (a) => {
        a.key === "Enter" && n();
      },
      role: "presentation",
      children: /* @__PURE__ */ l.jsxs(
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
            /* @__PURE__ */ l.jsx("p", { className: "meld-confirm-modal__message", children: e }),
            /* @__PURE__ */ l.jsxs("div", { className: "meld-confirm-modal__actions", children: [
              /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-confirm-modal__btn meld-confirm-modal__btn--cancel",
                  onClick: n,
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ l.jsx(
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
}, _o = async (e, t) => {
  await Ug(e, t), oe.getState().removeImages(e);
}, om = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: s, dispatch: a } = he(), o = p.useRef(!0);
  p.useEffect(() => () => {
    o.current = !1;
  }, []);
  const i = p.useMemo(
    () => s.searchQuery.toLowerCase().includes("has_derivatives:yes") || s.searchQuery.toLowerCase().includes("has_derivatives:true") || s.searchQuery.toLowerCase().includes("has_derivatives:1"),
    [s.searchQuery]
  ), c = p.useMemo(() => s.searchQuery.trim() !== "", [s.searchQuery]), d = oe((u) => u.buckets), h = p.useMemo(() => s.viewerMode === "lighttable" && s.viewerLightTableSlotId ? (d[s.viewerLightTableSlotId] || []).map((y) => {
    const _ = Number.parseInt(y, 10);
    return s.images.find((k) => k.id === _) || s.lineageImages.find((k) => k.id === _) || null;
  }).filter((y) => y !== null) : s.viewerMode === "lineage" && s.lineageImages.length > 0 ? s.lineageImages : s.images.filter(
    (u) => u.exists !== !1 && (s.settings["gallery.show_parent_images"] && !c || !u.has_children || i)
  ), [
    s.viewerMode,
    s.viewerLightTableSlotId,
    d,
    s.lineageImages,
    s.images,
    s.settings,
    c,
    i
  ]), v = p.useRef(s.viewerImageId);
  p.useEffect(() => {
    v.current = s.viewerImageId;
  }, [s.viewerImageId]);
  const g = p.useCallback(() => {
    a({ type: "CLOSE_MODAL" });
  }, [a]);
  Le({ onEscape: g });
  const b = p.useRef(!1), w = p.useCallback((u) => {
    u.target === u.currentTarget && (b.current = !0);
  }, []), x = p.useCallback(
    (u) => {
      u.target === u.currentTarget && b.current && g(), b.current = !1;
    },
    [g]
  ), S = p.useCallback(
    (u) => {
      if (!o.current) return;
      const y = v.current;
      if (y === null || !u.has(y))
        return;
      const _ = h.findIndex(
        (j) => j.id === y
      );
      if (_ === -1) return;
      let k = !1;
      for (let j = _ + 1; j < h.length; j++) {
        const E = h[j];
        if (E && !u.has(E.id)) {
          a({
            type: "OPEN_VIEWER",
            payload: {
              id: E.id,
              mode: s.viewerMode,
              // Preserve slotId in lighttable mode to stay within the slot
              ...s.viewerMode === "lighttable" && s.viewerLightTableSlotId ? { slotId: s.viewerLightTableSlotId } : {}
            }
          }), k = !0;
          break;
        }
      }
      if (!k)
        for (let j = _ - 1; j >= 0; j--) {
          const E = h[j];
          if (E && !u.has(E.id)) {
            a({
              type: "OPEN_VIEWER",
              payload: {
                id: E.id,
                mode: s.viewerMode,
                // Preserve slotId in lighttable mode to stay within the slot
                ...s.viewerMode === "lighttable" && s.viewerLightTableSlotId ? { slotId: s.viewerLightTableSlotId } : {}
              }
            }), k = !0;
            break;
          }
        }
      k || a({ type: "CLOSE_VIEWER" });
    },
    [s.viewerMode, s.viewerLightTableSlotId, h, a]
  ), f = async () => {
    var u, y;
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const _ = new Set(e), k = h.filter((j) => _.has(j.id));
      if (S(_), await _o(e, n), !o.current) return;
      s.activeModal.type === "delete_confirm" && ((y = (u = s.activeModal).onSuccess) == null || y.call(u)), !n && r && r(k), a({ type: "REMOVE_IMAGES", payload: e }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (_) {
      a({
        type: "SET_ERROR",
        payload: _ instanceof Error ? _.message : String(_)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  }, m = async () => {
    var u, y;
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const _ = new Set(e);
      for (const j of e) {
        const E = await vi(j);
        if (!o.current) return;
        for (const D of E)
          _.add(D.id);
      }
      const k = h.filter((j) => _.has(j.id));
      if (S(_), await _o(Array.from(_), n), !o.current) return;
      s.activeModal.type === "delete_confirm" && ((y = (u = s.activeModal).onSuccess) == null || y.call(u)), !n && r && r(k), a({
        type: "REMOVE_IMAGES",
        payload: Array.from(_)
      }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (_) {
      a({
        type: "SET_ERROR",
        payload: _ instanceof Error ? _.message : String(_)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  };
  return ye.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: w,
        onMouseUp: x,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--small",
            onClick: (u) => u.stopPropagation(),
            children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ l.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ l.jsx(Gt, { size: 20, color: "var(--meld-danger-color)" }),
                  n ? "Permanent Deletion" : "Move to Trash"
                ] }),
                /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-modal-close", onClick: g, children: /* @__PURE__ */ l.jsx(pe, { size: 20 }) })
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ l.jsxs(
                "div",
                {
                  style: {
                    padding: "10px 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px"
                  },
                  children: [
                    /* @__PURE__ */ l.jsxs("p", { children: [
                      "Are you sure you want to ",
                      n ? "permanently delete" : "move to trash",
                      " ",
                      /* @__PURE__ */ l.jsx("strong", { children: e.length }),
                      " selected items?"
                    ] }),
                    /* @__PURE__ */ l.jsxs(
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
                          /* @__PURE__ */ l.jsx(
                            sg,
                            {
                              size: 20,
                              style: {
                                color: n ? "var(--meld-danger-color)" : "var(--meld-accent-color)",
                                flexShrink: 0
                              }
                            }
                          ),
                          /* @__PURE__ */ l.jsx("div", { style: { fontSize: "13px" }, children: n ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                            /* @__PURE__ */ l.jsx("strong", { children: "WARNING:" }),
                            " Physical files will be permanently deleted from the trash bin. This operation cannot be undone."
                          ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                            /* @__PURE__ */ l.jsx("strong", { children: "INFO:" }),
                            " Selected items will be moved to the trash bin. You can restore them later from the settings."
                          ] }) })
                        ]
                      }
                    ),
                    t && /* @__PURE__ */ l.jsxs(
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
                          /* @__PURE__ */ l.jsx("strong", { children: "Source" }),
                          " or derivatives. You can choose to delete just the selected items or all related items (lineage)."
                        ]
                      }
                    )
                  ]
                }
              ) }),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-footer", children: [
                /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-btn meld-btn--secondary", onClick: g, children: "Cancel" }),
                /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn--danger",
                      onClick: f,
                      children: n ? "Delete Permanently" : "Move to Trash"
                    }
                  ),
                  t && /* @__PURE__ */ l.jsx(
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
}, im = ({ message: e }) => {
  const { dispatch: t } = he(), n = p.useCallback(() => {
    t({ type: "CLOSE_MODAL" });
  }, [t]);
  return Le({ onEscape: n }), /* @__PURE__ */ l.jsx("div", { className: "meld-modal-overlay", onClick: n, children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (r) => r.stopPropagation(), children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
      /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ l.jsx(wf, { size: 20, color: "var(--meld-danger-color)" }),
        /* @__PURE__ */ l.jsx("h2", { children: "Error" })
      ] }),
      /* @__PURE__ */ l.jsx("button", { className: "meld-modal-close", onClick: n, type: "button", children: /* @__PURE__ */ l.jsx(pe, { size: 20 }) })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ l.jsx("div", { style: { padding: "20px 0", textAlign: "center", fontSize: "14px" }, children: e }) }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ l.jsx("button", { className: "meld-btn meld-btn--primary", onClick: n, type: "button", children: "OK" }) })
  ] }) });
}, cm = ({ imageId: e }) => {
  const { state: t, dispatch: n, refreshImages: r } = he(), [s, a] = p.useState([]), [o, i] = p.useState(!0), [c, d] = p.useState(!1), h = p.useCallback(() => {
    n({ type: "CLOSE_MODAL" });
  }, [n]);
  Le({ onEscape: h });
  const v = p.useRef(!1), g = (k) => {
    k.target === k.currentTarget && (v.current = !0);
  }, b = (k) => {
    k.target === k.currentTarget && v.current && h(), v.current = !1;
  }, w = t.images.find((k) => k.id === e), x = p.useCallback(
    async (k) => {
      i(!0);
      try {
        const j = t.settings["gallery.suggest_phash_threshold"], E = await Vg(e, j, k);
        k.aborted || a(E);
      } catch (j) {
        k.aborted || W.error("Failed to load suggestions:", j);
      } finally {
        k.aborted || i(!1);
      }
    },
    [e, t.settings]
  );
  p.useEffect(() => {
    const k = new AbortController();
    return x(k.signal), () => k.abort();
  }, [x]);
  const S = async (k) => {
    if (k == null) {
      W.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!w || k === w.parent_id) && !(w.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await Pc(e, k), await If(e), await r(), h();
      } catch (j) {
        W.error("Failed to link parent:", j);
      }
  }, f = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await Pc(e, null), await r(), h();
      } catch (k) {
        W.error("Failed to remove source:", k), alert("Failed to remove source image.");
      }
  }, m = async (k) => {
    i(!0);
    try {
      const j = await xy(k), { id: E } = await Mf({
        filename: j.name,
        subfolder: j.subfolder || "",
        type: j.type || "input"
      });
      if (E === e) {
        alert("Uploaded image is identical to the current image. Cannot set as source.");
        return;
      }
      await S(E);
    } catch (j) {
      W.error("Failed to upload/register image:", j);
    } finally {
      i(!1);
    }
  }, u = (k) => {
    k.preventDefault(), k.stopPropagation(), d(!1);
    const j = k.dataTransfer.files[0];
    j != null && j.type.startsWith("image/") && m(j);
  };
  if (!w) return null;
  const y = s.filter((k) => k.is_source_match), _ = s.filter((k) => !k.is_source_match);
  return ye.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: g,
        onMouseUp: b,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "meld-modal-content",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "parent-selection-modal-title",
            onClick: (k) => k.stopPropagation(),
            children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ l.jsxs("h2", { id: "parent-selection-modal-title", children: [
                  "Select Source for #",
                  w.id
                ] }),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: h,
                    "aria-label": "Close",
                    children: /* @__PURE__ */ l.jsx(pe, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-body", children: [
                w.parent_id && /* @__PURE__ */ l.jsxs(
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
                      /* @__PURE__ */ l.jsxs(
                        "div",
                        {
                          style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            minWidth: 0
                          },
                          children: [
                            /* @__PURE__ */ l.jsx(kg, { size: 16, color: "var(--meld-accent-color)" }),
                            /* @__PURE__ */ l.jsxs(
                              "div",
                              {
                                style: {
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "4px",
                                  minWidth: 0
                                },
                                children: [
                                  /* @__PURE__ */ l.jsx(
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
                                  /* @__PURE__ */ l.jsxs(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        minWidth: 0
                                      },
                                      children: [
                                        w.parent_filename && /* @__PURE__ */ l.jsx(
                                          "img",
                                          {
                                            src: yt(
                                              {
                                                filename: w.parent_filename,
                                                subfolder: w.parent_subfolder || "",
                                                type: w.parent_type || "output"
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
                                        /* @__PURE__ */ l.jsxs(
                                          "div",
                                          {
                                            style: {
                                              display: "flex",
                                              flexDirection: "column",
                                              minWidth: 0
                                            },
                                            children: [
                                              /* @__PURE__ */ l.jsx(
                                                "span",
                                                {
                                                  style: {
                                                    fontWeight: "bold",
                                                    fontSize: "0.95em",
                                                    whiteSpace: "nowrap",
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis"
                                                  },
                                                  children: w.parent_filename || "Unknown Image"
                                                }
                                              ),
                                              /* @__PURE__ */ l.jsxs(
                                                "span",
                                                {
                                                  style: {
                                                    color: "var(--meld-text-secondary)",
                                                    fontSize: "0.85em"
                                                  },
                                                  children: [
                                                    "#",
                                                    w.parent_id
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
                      /* @__PURE__ */ l.jsx(
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
                          children: /* @__PURE__ */ l.jsx(_g, { size: 16 })
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
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
                    onDrop: u,
                    children: [
                      /* @__PURE__ */ l.jsx(Ag, { size: 32 }),
                      /* @__PURE__ */ l.jsx("p", { children: "Drop an image file here to set it as source" })
                    ]
                  }
                ),
                o ? /* @__PURE__ */ l.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ l.jsxs("div", { className: "meld-suggestions-container", children: [
                  y.length > 0 && /* @__PURE__ */ l.jsxs("section", { children: [
                    /* @__PURE__ */ l.jsx("h3", { children: "Source Matches (from metadata)" }),
                    /* @__PURE__ */ l.jsx("div", { className: "meld-suggestion-grid", children: y.map((k) => {
                      const j = k.id === w.parent_id;
                      return /* @__PURE__ */ l.jsxs(
                        "div",
                        {
                          role: "button",
                          tabIndex: 0,
                          "aria-pressed": j,
                          "aria-current": j ? "true" : void 0,
                          "aria-label": `Select ${k.filename} as source${j ? " (current)" : ""}`,
                          className: `meld-suggestion-card ${j ? "meld-suggestion-card--current" : ""}`,
                          onClick: () => !j && S(k.id),
                          onKeyDown: (E) => {
                            (E.key === "Enter" || E.key === " ") && (E.preventDefault(), j || S(k.id));
                          },
                          style: {
                            cursor: j ? "default" : "pointer",
                            ...j ? {
                              borderColor: "var(--meld-accent-color)",
                              boxShadow: "0 0 0 2px var(--meld-accent-color)"
                            } : {}
                          },
                          children: [
                            /* @__PURE__ */ l.jsx("img", { src: yt(k, 64), alt: k.filename }),
                            /* @__PURE__ */ l.jsxs("div", { className: "meld-suggestion-info", children: [
                              /* @__PURE__ */ l.jsx("span", { className: "meld-suggestion-filename", children: k.filename }),
                              j && /* @__PURE__ */ l.jsx(
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
                  /* @__PURE__ */ l.jsxs("section", { children: [
                    /* @__PURE__ */ l.jsx("h3", { children: "Visual Matches (pHash)" }),
                    _.length > 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-suggestion-grid", children: _.map((k) => {
                      const j = k.id === w.parent_id;
                      return /* @__PURE__ */ l.jsxs(
                        "div",
                        {
                          role: "button",
                          tabIndex: 0,
                          "aria-pressed": j,
                          "aria-current": j ? "true" : void 0,
                          "aria-label": `Select ${k.filename} as source${j ? " (current)" : ""}`,
                          className: `meld-suggestion-card ${j ? "meld-suggestion-card--current" : ""}`,
                          onClick: () => !j && S(k.id),
                          onKeyDown: (E) => {
                            (E.key === "Enter" || E.key === " ") && (E.preventDefault(), j || S(k.id));
                          },
                          style: {
                            cursor: j ? "default" : "pointer",
                            ...j ? {
                              borderColor: "var(--meld-accent-color)",
                              boxShadow: "0 0 0 2px var(--meld-accent-color)"
                            } : {}
                          },
                          children: [
                            /* @__PURE__ */ l.jsx("img", { src: yt(k, 64), alt: k.filename }),
                            /* @__PURE__ */ l.jsxs("div", { className: "meld-suggestion-info", children: [
                              /* @__PURE__ */ l.jsx("span", { className: "meld-suggestion-filename", children: k.filename }),
                              /* @__PURE__ */ l.jsxs(
                                "div",
                                {
                                  style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginTop: "2px"
                                  },
                                  children: [
                                    /* @__PURE__ */ l.jsxs("span", { className: "meld-suggestion-distance", children: [
                                      "Match: ",
                                      Math.round((64 - k.distance) / 64 * 100),
                                      "%"
                                    ] }),
                                    j && /* @__PURE__ */ l.jsx(
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
                    }) }) : /* @__PURE__ */ l.jsx("p", { className: "meld-no-suggestions", children: "No visual matches found." })
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
}, tv = () => {
  const { state: e, dispatch: t } = he(), n = e.toastMessage;
  return p.useEffect(() => {
    if (n) {
      const r = setTimeout(() => {
        t({ type: "HIDE_TOAST" });
      }, 3e3);
      return () => clearTimeout(r);
    }
  }, [n, t]), n ? /* @__PURE__ */ l.jsx(
    "div",
    {
      className: `meld-toast ${e.toastType === "error" ? "meld-toast--error" : ""}`,
      role: "status",
      "aria-live": "polite",
      children: n
    }
  ) : null;
}, nv = () => {
  const { state: e, dispatch: t } = he(), { executeWorkflow: n } = _i();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    e.activeModal.type === "workflow_selection" && /* @__PURE__ */ l.jsx(
      am,
      {
        images: e.activeModal.images,
        isMaskMode: !!e.activeModal.maskFilename || !!e.activeModal.isMaskSequence,
        onExecute: async (r, s) => {
          if (e.activeModal.type === "workflow_selection") {
            if (e.activeModal.isMaskSequence)
              return t({
                type: "OPEN_MODAL",
                payload: {
                  type: "mask_sequence_step",
                  images: e.activeModal.images,
                  currentIndex: 0,
                  workflowName: r,
                  targetLoaderNodeId: s
                }
              }), !1;
            const a = e.activeModal.maskFilename, o = e.activeModal.onSuccess, i = e.activeModal.onError, d = (await Promise.allSettled(
              e.activeModal.images.map(
                (h) => n(r, h, a, s)
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
    e.activeModal.type === "node_selection" && /* @__PURE__ */ l.jsx(
      sm,
      {
        image: e.activeModal.image,
        nodes: e.activeModal.nodes,
        onSelect: (r) => {
          e.activeModal.type === "node_selection" && ul(e.activeModal.image, r);
        }
      }
    ),
    e.activeModal.type === "parent_selection" && /* @__PURE__ */ l.jsx(cm, { imageId: e.activeModal.imageId }),
    e.activeModal.type === "import" && /* @__PURE__ */ l.jsx(Pf, {}),
    e.activeModal.type === "settings" && /* @__PURE__ */ l.jsx(nm, {}),
    e.activeModal.type === "tag_edit" && ye.createPortal(
      /* @__PURE__ */ l.jsx(
        rm,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "error" && ye.createPortal(/* @__PURE__ */ l.jsx(im, { message: e.activeModal.message }), document.body),
    e.activeModal.type === "delete_confirm" && ye.createPortal(
      /* @__PURE__ */ l.jsx(
        om,
        {
          imageIds: e.activeModal.imageIds,
          hasLineage: e.activeModal.hasLineage,
          isPermanent: e.activeModal.isPermanent,
          onSuccess: () => {
            var r, s;
            e.activeModal.type === "delete_confirm" && ((s = (r = e.activeModal).onSuccess) == null || s.call(r));
          }
        }
      ),
      document.body
    ),
    e.activeModal.type === "mask_editor" && ye.createPortal(
      /* @__PURE__ */ l.jsx(
        ki,
        {
          imageId: e.activeModal.imageId,
          mode: e.activeModal.mode,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "mask_sequence_step" && ye.createPortal(
      /* @__PURE__ */ l.jsx(
        Uf,
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
    e.activeModal.type === "note_edit" && ye.createPortal(
      /* @__PURE__ */ l.jsx(
        lm,
        {
          imageId: e.activeModal.imageId,
          initialNotes: e.activeModal.notes,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "download_options" && ye.createPortal(
      /* @__PURE__ */ l.jsx(
        Iy,
        {
          imageIds: e.activeModal.imageIds,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.confirmModal && ye.createPortal(
      /* @__PURE__ */ l.jsx(
        ev,
        {
          message: e.confirmModal.message,
          onConfirm: () => {
            var r;
            (r = e.confirmModal) == null || r.onConfirm(), t({ type: "CLOSE_CONFIRM_MODAL" });
          },
          onCancel: () => {
            var r, s;
            (s = (r = e.confirmModal) == null ? void 0 : r.onCancel) == null || s.call(r), t({ type: "CLOSE_CONFIRM_MODAL" });
          }
        }
      ),
      document.body
    ),
    e.toastMessage && ye.createPortal(/* @__PURE__ */ l.jsx(tv, {}), document.body)
  ] });
}, dm = async (e) => {
  const t = await ne.fetchApi("/meld/analytics", { signal: e == null ? void 0 : e.signal });
  return se(t);
}, um = async (e, t) => {
  var i;
  const n = new URLSearchParams();
  n.set("limit", String(t.limit)), n.set("offset", String(t.offset)), t != null && t.sort && n.set("sort", t.sort), (i = t == null ? void 0 : t.q) != null && i.trim() && n.set("q", t.q.trim());
  const r = n.toString(), s = `/meld/analytics/${e}${r ? `?${r}` : ""}`, a = await ne.fetchApi(s, { signal: t == null ? void 0 : t.signal }), o = await wl(a);
  if (!o.success)
    throw new Error(o.error || "Failed to fetch analytics");
  return {
    data: o.data ?? [],
    total: o.total ?? 0
  };
}, fm = async (e) => {
  const t = await ne.fetchApi("/meld/analytics/refresh", {
    method: "POST",
    signal: e == null ? void 0 : e.signal
  });
  await se(t);
}, rv = async (e, t, n) => {
  if (!t || t.length === 0) return {};
  const r = await ne.fetchApi("/meld/analytics/counts", {
    method: "POST",
    body: JSON.stringify({ category: e, names: t }),
    signal: n == null ? void 0 : n.signal
  }), s = await wl(r);
  if (!s.success)
    throw new Error(s.error || "Failed to fetch analytics counts");
  return s.data ?? {};
}, lv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  fetchAnalyticsCategory: um,
  fetchAnalyticsCounts: rv,
  fetchAnalyticsSummary: dm,
  refreshAnalytics: fm
}, Symbol.toStringTag, { value: "Module" })), sv = "_meldAnalytics__headerRow_9nv4x_3", av = "_meldAnalytics__title_9nv4x_9", ov = "_meldAnalytics__controls_9nv4x_14", iv = "_meldAnalytics_9nv4x_3", cv = "_meldAnalytics__totalCard_9nv4x_26", dv = "_meldAnalytics__totalCardTitle_9nv4x_37", uv = "_meldAnalytics__totalCardValue_9nv4x_46", fv = "_meldAnalytics__grid_9nv4x_54", mv = "_meldAnalytics__section_9nv4x_60", pv = "_meldAnalytics__sectionHeader_9nv4x_71", hv = "_meldAnalytics__sectionTitle_9nv4x_83", gv = "_meldAnalytics__item_9nv4x_94", yv = "_meldAnalytics__itemLabel_9nv4x_111", vv = "_meldAnalytics__itemCount_9nv4x_118", wv = "_meldAnalytics__seeAllBtn_9nv4x_128", xv = "_meldAnalytics__fullView_9nv4x_149", _v = "_meldAnalytics__fullViewToolbar_9nv4x_155", kv = "_meldAnalytics__toolbarBtn_9nv4x_162", Sv = "_meldAnalytics__searchContainer_9nv4x_167", bv = "_meldAnalytics__searchIcon_9nv4x_179", jv = "_meldAnalytics__searchInput_9nv4x_184", Cv = "_meldAnalytics__fullList_9nv4x_197", Ev = "_meldAnalytics__fullListItem_9nv4x_204", Nv = "_meldAnalytics__refreshBtn_9nv4x_222", me = {
  meldAnalytics__headerRow: sv,
  meldAnalytics__title: av,
  meldAnalytics__controls: ov,
  meldAnalytics: iv,
  meldAnalytics__totalCard: cv,
  meldAnalytics__totalCardTitle: dv,
  meldAnalytics__totalCardValue: uv,
  meldAnalytics__grid: fv,
  meldAnalytics__section: mv,
  meldAnalytics__sectionHeader: pv,
  meldAnalytics__sectionTitle: hv,
  meldAnalytics__item: gv,
  meldAnalytics__itemLabel: yv,
  meldAnalytics__itemCount: vv,
  meldAnalytics__seeAllBtn: wv,
  meldAnalytics__fullView: xv,
  meldAnalytics__fullViewToolbar: _v,
  meldAnalytics__toolbarBtn: kv,
  meldAnalytics__searchContainer: Sv,
  meldAnalytics__searchIcon: bv,
  meldAnalytics__searchInput: jv,
  meldAnalytics__fullList: Cv,
  meldAnalytics__fullListItem: Ev,
  meldAnalytics__refreshBtn: Nv
}, Iv = {
  positive_prompts: "pos",
  negative_prompts: "neg",
  tags: "tag",
  models: "model",
  by_date: "date",
  by_resolution: "resolution"
};
function Mv(e, t) {
  const n = Iv[e];
  return n ? /[\s"]/.test(t) ? `${n}:"${t.replace(/"/g, '\\"')}"` : `${n}:${t}` : t;
}
function Tv(e) {
  return e.name !== void 0 ? e.name : e.date !== void 0 ? e.date : e.resolution !== void 0 ? e.resolution : "";
}
function Bc(e) {
  return Tv(e);
}
const Lv = ({ onClose: e, onSearchAndNavigate: t }) => {
  const { dispatch: n } = he(), [r, s] = p.useState(null), [a, o] = p.useState(!0), [i, c] = p.useState(!1), [d, h] = p.useState(null), [v, g] = p.useState([]), [b, w] = p.useState(0), [x, S] = p.useState(!1), [f, m] = p.useState(null), [u, y] = p.useState("count_desc"), [_, k] = p.useState(""), j = p.useRef(""), E = p.useRef(null), D = p.useRef(0);
  Le({
    onEscape: () => {
      d ? h(null) : e();
    }
  });
  const N = p.useCallback(async (z, M) => {
    const A = M;
    o(!0);
    try {
      const C = await dm({ signal: z });
      if (z != null && z.aborted || A !== void 0 && A !== D.current) return;
      s(C);
    } catch (C) {
      if (z != null && z.aborted || C && typeof C == "object" && C.name === "AbortError" || A !== void 0 && A !== D.current) return;
      throw s(null), C;
    } finally {
      !(z != null && z.aborted) && (A === void 0 || A === D.current) && o(!1);
    }
  }, []);
  p.useEffect(() => {
    const z = new AbortController();
    D.current += 1;
    const M = D.current;
    return N(z.signal, M).catch(() => {
    }), () => z.abort();
  }, [N]);
  const L = p.useCallback(
    async (z, M, A, C) => {
      S(!0), m(null);
      try {
        const { data: T, total: P } = await um(z, {
          limit: 500,
          offset: 0,
          sort: M,
          q: A.trim() || void 0,
          signal: C
        });
        if (C != null && C.aborted) return;
        g(T), w(P);
      } catch (T) {
        if (C != null && C.aborted || T && typeof T == "object" && T.name === "AbortError")
          return;
        const P = T instanceof Error ? T.message : typeof T == "string" ? T : "Unknown error";
        throw m(P), T;
      } finally {
        C != null && C.aborted || S(!1);
      }
    },
    []
  );
  p.useEffect(() => {
    if (!d) return;
    const z = j.current !== _;
    j.current = _;
    const M = new AbortController(), A = () => {
      L(d, u, _, M.signal).catch(() => {
      });
    };
    if (z) {
      const C = setTimeout(A, 300);
      return () => {
        clearTimeout(C), M.abort();
      };
    }
    return A(), () => M.abort();
  }, [d, u, _, L]);
  const $ = p.useCallback(async () => {
    var A;
    (A = E.current) == null || A.abort();
    const z = new AbortController();
    E.current = z;
    const M = z.signal;
    c(!0);
    try {
      if (await fm({ signal: M }), M.aborted) return;
      D.current += 1;
      const C = D.current;
      if (await N(M, C), M.aborted || (d && await L(d, u, _, M), M.aborted)) return;
      n({ type: "SHOW_TOAST", payload: "Analytics refreshed" });
    } catch (C) {
      if (M.aborted) return;
      const T = C instanceof Error ? C.message : typeof C == "string" ? C : "Unknown error";
      n({
        type: "SHOW_TOAST",
        payload: `Analytics refresh failed: ${T}`
      });
    } finally {
      M.aborted || c(!1);
    }
  }, [N, L, d, u, _, n]);
  p.useEffect(() => () => {
    var z;
    (z = E.current) == null || z.abort();
  }, []);
  const Q = p.useCallback(
    (z, M) => {
      const A = Mv(z, M);
      t ? t(A) : e();
    },
    [t, e]
  ), I = (z, M, A) => /* @__PURE__ */ l.jsxs("div", { className: me.meldAnalytics__section, children: [
    /* @__PURE__ */ l.jsxs("div", { className: me.meldAnalytics__sectionHeader, children: [
      /* @__PURE__ */ l.jsx("h3", { className: me.meldAnalytics__sectionTitle, children: z }),
      /* @__PURE__ */ l.jsxs(
        "button",
        {
          type: "button",
          className: me.meldAnalytics__seeAllBtn,
          onClick: () => {
            h(M), k(""), y("count_desc");
          },
          children: [
            "See all ",
            /* @__PURE__ */ l.jsx(og, { size: 14 })
          ]
        }
      )
    ] }),
    A.map((C, T) => {
      const P = Bc(C);
      return /* @__PURE__ */ l.jsxs(
        "div",
        {
          role: "button",
          tabIndex: 0,
          className: me.meldAnalytics__item,
          onClick: () => Q(M, P),
          onKeyDown: (U) => {
            (U.key === "Enter" || U.key === " ") && (U.preventDefault(), Q(M, P));
          },
          children: [
            /* @__PURE__ */ l.jsx("span", { className: me.meldAnalytics__itemLabel, children: P }),
            /* @__PURE__ */ l.jsx("span", { className: me.meldAnalytics__itemCount, children: C.count })
          ]
        },
        `${P}-${T}`
      );
    })
  ] }, M);
  return /* @__PURE__ */ l.jsxs("div", { className: "meld-analytics-view", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-analytics-header", children: [
      /* @__PURE__ */ l.jsxs("div", { className: me.meldAnalytics__headerRow, children: [
        /* @__PURE__ */ l.jsx(kf, { size: 16 }),
        /* @__PURE__ */ l.jsx("h3", { className: me.meldAnalytics__title, children: "Image Analytics" })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: me.meldAnalytics__controls, children: [
        /* @__PURE__ */ l.jsxs(
          "button",
          {
            type: "button",
            className: me.meldAnalytics__refreshBtn,
            onClick: $,
            disabled: i,
            title: "Refresh analytics",
            children: [
              /* @__PURE__ */ l.jsx(hr, { size: 14, className: i ? "animate-spin" : "" }),
              "Refresh"
            ]
          }
        ),
        /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "button",
            className: "meld-analytics-close",
            onClick: e,
            title: "Close and return to gallery",
            "aria-label": "Close and return to gallery",
            children: /* @__PURE__ */ l.jsx(pe, { size: 16 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-analytics-content", children: d ? /* @__PURE__ */ l.jsxs("div", { className: me.meldAnalytics__fullView, children: [
      /* @__PURE__ */ l.jsxs("div", { className: me.meldAnalytics__fullViewToolbar, children: [
        /* @__PURE__ */ l.jsxs("div", { className: me.meldAnalytics__searchContainer, children: [
          /* @__PURE__ */ l.jsx(yn, { size: 14, className: me.meldAnalytics__searchIcon }),
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "text",
              className: me.meldAnalytics__searchInput,
              placeholder: "Filter...",
              value: _,
              onChange: (z) => k(z.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ l.jsxs(
          "button",
          {
            type: "button",
            className: `meld-btn meld-btn--secondary ${me.meldAnalytics__toolbarBtn}`,
            onClick: () => y((z) => z === "count_desc" ? "count_asc" : "count_desc"),
            title: u === "count_desc" ? "Sort ascending" : "Sort descending",
            children: [
              u === "count_desc" ? /* @__PURE__ */ l.jsx(ag, { size: 14 }) : /* @__PURE__ */ l.jsx(cg, { size: 14 }),
              u === "count_desc" ? "Desc" : "Asc"
            ]
          }
        ),
        /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "button",
            className: `meld-btn meld-btn--secondary ${me.meldAnalytics__toolbarBtn}`,
            onClick: () => h(null),
            children: "Back"
          }
        )
      ] }),
      x ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__loading", children: "Loading..." }) : f ? /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__empty", role: "alert", children: [
        "Failed to load: ",
        f
      ] }) : /* @__PURE__ */ l.jsxs("div", { className: me.meldAnalytics__fullList, children: [
        v.map((z, M) => {
          const A = Bc(z);
          return /* @__PURE__ */ l.jsxs(
            "div",
            {
              role: "button",
              tabIndex: 0,
              className: me.meldAnalytics__fullListItem,
              onClick: () => Q(d, A),
              onKeyDown: (C) => {
                (C.key === "Enter" || C.key === " ") && (C.preventDefault(), Q(d, A));
              },
              children: [
                /* @__PURE__ */ l.jsxs("span", { className: me.meldAnalytics__itemLabel, children: [
                  M + 1,
                  ". ",
                  A
                ] }),
                /* @__PURE__ */ l.jsx("span", { className: me.meldAnalytics__itemCount, children: z.count })
              ]
            },
            `${A}-${M}`
          );
        }),
        v.length === 0 && /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__empty", children: "No items found." })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { style: { fontSize: 12, color: "var(--meld-text-secondary)" }, children: [
        b,
        " total"
      ] })
    ] }) : a ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__loading", children: "Loading analytics..." }) : r ? /* @__PURE__ */ l.jsxs("div", { className: me.meldAnalytics, children: [
      /* @__PURE__ */ l.jsxs("div", { className: me.meldAnalytics__totalCard, children: [
        /* @__PURE__ */ l.jsx("div", { className: me.meldAnalytics__totalCardTitle, children: "Total Images" }),
        /* @__PURE__ */ l.jsx("div", { className: me.meldAnalytics__totalCardValue, children: r.total_images.toLocaleString() })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: me.meldAnalytics__grid, children: [
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
    ] }) : /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__empty", children: "Failed to load analytics." }) })
  ] });
}, Av = () => {
  const { state: e, dispatch: t } = he(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await jy(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (h) {
      W.error("Failed to cancel scan:", h);
    }
  }, s = () => {
    t({
      type: "SET_SCAN_STATUS",
      payload: { isFinished: !1, isRunning: !1 }
    });
  }, a = n.progress.phase === "linking", { current: o, total: i } = n.progress, c = i > 0 ? o / i : 0, d = a ? 50 + Math.round(c * 50) : Math.round(c * 50);
  return /* @__PURE__ */ l.jsx("div", { className: "meld-import-progress-sidebar", children: n.isRunning ? /* @__PURE__ */ l.jsxs("div", { className: "meld-scan-progress--compact", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-scan-info", children: [
      /* @__PURE__ */ l.jsx("div", { className: "meld-scan__status-text--compact", children: n.shouldCancel ? /* @__PURE__ */ l.jsx("span", { className: "meld-scan__status--cancelling", children: "Cancelling..." }) : a ? /* @__PURE__ */ l.jsx("span", { children: "Linking..." }) : /* @__PURE__ */ l.jsx("span", { children: "Scanning..." }) }),
      /* @__PURE__ */ l.jsxs("div", { className: "meld-progress-stats--compact", children: [
        n.progress.current,
        " / ",
        n.progress.total
      ] })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-progress-container--compact", children: /* @__PURE__ */ l.jsx("div", { className: "meld-progress-bar", style: { width: `${d}%` } }) }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        type: "button",
        className: "meld-btn--stop--compact",
        disabled: n.shouldCancel,
        onClick: r,
        title: "Stop Scan",
        children: /* @__PURE__ */ l.jsx(Ef, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ l.jsxs("div", { className: "meld-scan-finished--compact", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ l.jsx(fg, { size: 14, className: "meld-success-icon" }),
      /* @__PURE__ */ l.jsxs("span", { className: "meld-finished-text", children: [
        "Done! ",
        n.newCount,
        " new, ",
        n.updatedCount,
        " updated"
      ] })
    ] }),
    /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-btn--ok--compact", onClick: s, children: "OK" })
  ] }) });
}, Si = {
  lightTable: {
    id: "meld-light-table-portal",
    preferredParentSelector: ".comfyui-body-bottom"
  },
  bulkActionBar: {
    id: "meld-bulk-bar-portal",
    preferredParentSelector: ".comfyui-body-bottom"
  }
}, Rv = Object.keys(Si), Qc = /* @__PURE__ */ new Map(), Hc = "data-meld-portal-root";
let _a = null, ka = null;
const Kc = ".comfyui-body-bottom";
function Gc(e) {
  var n, r, s, a;
  const t = `[${Hc}]`;
  for (let o = 0; o < e.length; o++) {
    const i = e.item(o);
    if (!i || i.nodeType !== 1) continue;
    const c = i;
    if ((n = c.hasAttribute) != null && n.call(c, Hc) || (r = c.querySelector) != null && r.call(c, t) || (s = c.matches) != null && s.call(c, Kc) || (a = c.querySelector) != null && a.call(c, Kc)) return !0;
  }
  return !1;
}
function Dv(e) {
  const t = document.querySelector(e);
  return t instanceof HTMLElement ? t : document.body;
}
function Pv(e) {
  const t = Si[e], n = document.getElementById(t.id);
  if (n instanceof HTMLDivElement)
    return n.dataset.meldPortalRoot = e, n;
  const r = document.createElement("div");
  return r.id = t.id, r.dataset.meldPortalRoot = e, r;
}
function mm(e) {
  const t = Si[e], n = Qc.get(e) ?? Pv(e);
  Qc.set(e, n);
  const r = Dv(t.preferredParentSelector);
  return (n.parentElement !== r || !document.contains(n)) && r.appendChild(n), n;
}
function pm() {
  for (const e of Rv)
    mm(e);
}
function qc() {
  ka === null && (ka = requestAnimationFrame(() => {
    ka = null, pm();
  }));
}
function hm(e) {
  return mm(e);
}
function zv() {
  _a || typeof document > "u" || !document.body || (pm(), _a = new MutationObserver((e) => {
    for (const t of e) {
      if (Gc(t.addedNodes)) {
        qc();
        return;
      }
      if (Gc(t.removedNodes)) {
        qc();
        return;
      }
    }
  }), _a.observe(document.body, {
    childList: !0,
    subtree: !0
  }));
}
const Ks = ({
  onKeyDown: e,
  enabled: t = !0
}) => {
  p.useEffect(() => {
    if (t)
      return window.addEventListener("keydown", e, { capture: !0 }), () => {
        window.removeEventListener("keydown", e, { capture: !0 });
      };
  }, [e, t]);
}, Ov = () => {
  const { state: e } = he(), t = oe((a) => a.slots), n = oe((a) => a.addToBucket), r = t.length > 0 && e.selectedIds.size > 0, s = p.useCallback(
    (a) => {
      if (Jy())
        return;
      const o = e.selectedIds;
      if (!o || o.size === 0)
        return;
      const i = t.find((c) => c.shortcutKey.toLowerCase() === a.key.toLowerCase());
      i && (fl(a), o.forEach((c) => {
        n(i.id, String(c));
      }));
    },
    [t, n, e.selectedIds]
  );
  Ks({ onKeyDown: s, enabled: r });
}, gm = ({ message: e, onConfirm: t, onCancel: n }) => (Le({ onEscape: n }), /* @__PURE__ */ l.jsx(
  "div",
  {
    className: "meld-confirm-modal__overlay",
    onClick: n,
    onKeyDown: (r) => {
      r.key === "Escape" && n();
    },
    role: "presentation",
    children: /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: "meld-confirm-modal__dialog",
        onClick: (r) => r.stopPropagation(),
        onKeyDown: (r) => r.stopPropagation(),
        role: "alertdialog",
        "aria-modal": "true",
        "aria-label": e,
        children: [
          /* @__PURE__ */ l.jsx("p", { className: "meld-confirm-modal__message", children: e }),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-confirm-modal__actions", children: [
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-confirm-modal__btn meld-confirm-modal__btn--cancel",
                onClick: n,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ l.jsx(
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
)), ml = ({
  enabled: e,
  insideRefs: t,
  onOutside: n,
  options: r
}) => {
  const s = (r == null ? void 0 : r.capture) ?? !0, a = (r == null ? void 0 : r.ignoreNonPrimary) ?? !0, o = p.useRef(t), i = p.useRef(n);
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
        const b = g.current;
        return b ? b.contains(h) : !1;
      }) || i.current(d);
    };
    return window.addEventListener("pointerdown", c, { capture: s }), () => {
      window.removeEventListener("pointerdown", c, {
        capture: s
      });
    };
  }, [e, s, a]);
}, Fv = (e, t, n, r, s) => {
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
            onSuccess: s
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
            onSuccess: s
          }
        });
        break;
      }
      case "move_folder":
        W.warn("move_folder action is not yet implemented"), s == null || s();
        break;
      case "queue_workflow":
        r({
          type: "OPEN_MODAL",
          payload: { type: "workflow_selection", images: n, onSuccess: s }
        });
        break;
      case "run_with_mask":
        t.length > 0 && r({
          type: "OPEN_MODAL",
          payload: {
            type: "workflow_selection",
            images: n.filter((a) => t.includes(a.id)),
            isMaskSequence: !0,
            onSuccess: s
          }
        });
        break;
      case "download":
        r({
          type: "OPEN_MODAL",
          payload: { type: "download_options", imageIds: t, onSuccess: s }
        });
        break;
      default:
        W.log(`Action ${e.type} executed on ${t.length} images`);
        break;
    }
}, $v = ({ config: e }) => {
  var U;
  const t = oe((R) => R.buckets), n = oe((R) => R.slots), r = oe((R) => R.images), s = n.length, { state: a, dispatch: o } = he(), [i, c] = p.useState(!1), [d, h] = p.useState(!1), [v, g] = p.useState(!1), [b, w] = p.useState(e.label), [x, S] = p.useState(e.color), [f, m] = p.useState([]), [u, y] = p.useState(null), _ = p.useRef(null), k = p.useRef(null);
  ml({
    enabled: i,
    insideRefs: [k],
    onOutside: () => c(!1)
  }), ml({
    enabled: v,
    insideRefs: [_],
    onOutside: () => g(!1)
  });
  const j = t[e.id] || [], E = j.length, D = j.map((R) => {
    const F = Number(R);
    let O = a.images.find((Z) => Z.id === F);
    return O || (O = a.lineageImages.find((Z) => Z.id === F)), O || (O = r[R]), O;
  }).filter(Boolean);
  p.useEffect(() => {
    m((R) => {
      const F = R.filter((O) => j.includes(String(O)));
      return F.length !== R.length ? F : R;
    });
  }, [j]);
  const N = f.filter((R) => j.includes(String(R))), L = N.length > 0, $ = (R) => {
    R.preventDefault(), R.stopPropagation(), R.currentTarget.classList.add("drag-over");
  }, Q = (R) => {
    R.currentTarget.classList.remove("drag-over");
  }, I = (R) => {
    R.preventDefault(), R.stopPropagation(), R.currentTarget.classList.remove("drag-over");
    const F = R.dataTransfer.getData("text/plain");
    F && F.split(",").forEach((Z) => {
      if (Z) {
        const re = Z.trim(), de = Number(re);
        let fe = a.images.find((G) => G.id === de);
        fe || (fe = a.lineageImages.find((G) => G.id === de)), oe.getState().addToBucket(e.id, re, fe);
      }
    });
  }, z = (R, F) => {
    R.stopPropagation();
    let O = [F];
    N.includes(F) ? O = N : (m([F]), y(F)), R.dataTransfer.setData("text/plain", O.join(",")), R.dataTransfer.setData("application/meld-lt-source-slot", e.id), R.dataTransfer.effectAllowed = "move";
  }, M = (R, F) => {
    if (R.dataTransfer.dropEffect === "none") {
      const O = N.includes(F) ? N : [F];
      O.forEach((Z) => {
        oe.getState().removeFromBucket(e.id, String(Z));
      }), m((Z) => Z.filter((re) => !O.includes(re)));
    }
  }, A = (R) => {
    if (E === 0) return;
    const F = {
      type: R
    }, O = L ? N : j.map(Number);
    if (O.length === 0) return;
    const Z = O.map((fe) => D.find((G) => G.id === fe)).filter(Boolean), re = {
      edit_tags: "Tags updated",
      delete: "Delete initiated",
      move_folder: "Moved to folder",
      queue_workflow: "Queued Workflow",
      run_with_mask: "Opened Mask Editor",
      download: "Opened Download Options"
    };
    Fv(F, O, Z, o, () => {
      oe.getState().showToast(re[R] ?? "Done");
    });
  }, C = () => {
    oe.getState().clearBucket(e.id), oe.getState().showToast(`Tab "${e.label}" cleared`), h(!1);
  }, T = () => {
    const R = oe.getState();
    R.slots.length <= 1 || (R.removeSlot(e.id), oe.getState().showToast(`Tab "${e.label}" deleted`));
  }, P = p.useCallback(
    (R, F) => {
      if (!R.repeat && (R.key === "Enter" || R.key === " "))
        if (R.preventDefault(), R.ctrlKey || R.metaKey)
          m(
            (O) => O.includes(F.id) ? O.filter((Z) => Z !== F.id) : [...O, F.id]
          ), y(F.id);
        else if (R.shiftKey && u !== null) {
          const O = D.findIndex((re) => re.id === F.id), Z = D.findIndex((re) => re.id === u);
          if (O !== -1 && Z !== -1) {
            const re = Math.min(O, Z), de = Math.max(O, Z), fe = D.slice(re, de + 1).map((G) => G.id);
            m((G) => Array.from(/* @__PURE__ */ new Set([...G, ...fe])));
          }
          y(F.id);
        } else
          m([]), y(null), o({
            type: "OPEN_VIEWER",
            payload: {
              id: F.id,
              mode: "lighttable",
              slotId: e.id
            }
          });
    },
    [D, u, o, e.id]
  );
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: "meld-lt-slot-panel",
      style: { "--slot-color": e.color },
      onDragOver: $,
      onDragLeave: Q,
      onDrop: I,
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "meld-lt-slot-panel__images", children: E === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-lt-slot-panel__empty", children: "Drag & Drop images here" }) : D.map((R) => {
          const F = yt(R);
          return /* @__PURE__ */ l.jsx(
            "div",
            {
              role: "button",
              tabIndex: 0,
              className: `meld-lt-slot-panel__image-wrapper${N.includes(R.id) ? " selected" : ""}`,
              draggable: !0,
              onClick: (O) => {
                if (O.ctrlKey || O.metaKey)
                  m(
                    (Z) => Z.includes(R.id) ? Z.filter((re) => re !== R.id) : [...Z, R.id]
                  ), y(R.id);
                else if (O.shiftKey && u !== null) {
                  const Z = D.findIndex((de) => de.id === R.id), re = D.findIndex((de) => de.id === u);
                  if (Z !== -1 && re !== -1) {
                    const de = Math.min(Z, re), fe = Math.max(Z, re), G = D.slice(de, fe + 1).map((ee) => ee.id);
                    m((ee) => Array.from(/* @__PURE__ */ new Set([...ee, ...G])));
                  }
                  y(R.id);
                } else
                  m([]), y(null), o({
                    type: "OPEN_VIEWER",
                    payload: {
                      id: R.id,
                      mode: "lighttable",
                      slotId: e.id
                    }
                  });
              },
              onKeyDown: (O) => P(O, R),
              onDragStart: (O) => z(O, R.id),
              onDragEnd: (O) => M(O, R.id),
              children: /* @__PURE__ */ l.jsx("img", { src: F, alt: R.filename, draggable: !1 })
            },
            R.id
          );
        }) }),
        /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__actions", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__action-menu-wrapper", ref: _, children: [
            /* @__PURE__ */ l.jsxs(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__action-btn",
                onClick: () => g(!v),
                disabled: E === 0,
                title: "Actions",
                children: [
                  L ? `Action (${N.length})` : "Action",
                  /* @__PURE__ */ l.jsx(mg, { size: 12 })
                ]
              }
            ),
            v && /* @__PURE__ */ l.jsx("div", { className: "meld-lt-slot__action-menu", children: [
              {
                type: "edit_tags",
                label: "Edit Tags",
                icon: xr
              },
              {
                type: "queue_workflow",
                label: "Queue Workflow",
                icon: yi
              },
              {
                type: "run_with_mask",
                label: "Queue Workflow (Mask)",
                icon: Rg
              },
              {
                type: "download",
                label: "Download",
                icon: cl
              },
              {
                type: "delete",
                label: "Delete",
                icon: Gt,
                danger: !0
              }
            ].map((R) => /* @__PURE__ */ l.jsxs(
              "div",
              {
                className: `meld-lt-slot__action-menu-item${R.danger ? " meld-lt-slot__action-menu-item--danger" : ""}${"disabled" in R && R.disabled ? " meld-lt-slot__action-menu-item--disabled" : ""}`,
                onMouseDown: (F) => F.stopPropagation(),
                onClick: () => {
                  "disabled" in R && R.disabled || (A(R.type), g(!1));
                },
                children: [
                  /* @__PURE__ */ l.jsx(R.icon, { size: 13 }),
                  /* @__PURE__ */ l.jsx("span", { children: R.label })
                ]
              },
              R.type
            )) })
          ] }),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-lt-slot__menu-btn",
              onClick: () => h(!0),
              title: "Clear Tab",
              disabled: E === 0,
              children: /* @__PURE__ */ l.jsx(hg, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__settings-wrapper", ref: k, children: [
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__menu-btn",
                onClick: () => c(!i),
                title: "Tab Settings",
                children: /* @__PURE__ */ l.jsx(Cf, { size: 14 })
              }
            ),
            i && /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__settings-popover", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__settings-row", children: [
                /* @__PURE__ */ l.jsx("label", { htmlFor: `slot-label-${e.id}`, children: "Tab Label:" }),
                /* @__PURE__ */ l.jsx(
                  "input",
                  {
                    id: `slot-label-${e.id}`,
                    value: b,
                    onChange: (R) => w(R.target.value),
                    placeholder: "e.g. Keep"
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__settings-row", children: [
                /* @__PURE__ */ l.jsx("label", { htmlFor: `slot-color-${e.id}`, children: "Tab Color:" }),
                /* @__PURE__ */ l.jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                      flex: 1
                    },
                    children: [
                      /* @__PURE__ */ l.jsx(
                        "input",
                        {
                          id: `slot-color-${e.id}`,
                          type: "color",
                          value: x.startsWith("var") ? ((U = x.match(/#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})/)) == null ? void 0 : U[0]) ?? "#9ca3af" : /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/i.test(x) ? x : "#9ca3af",
                          onChange: (R) => S(R.target.value),
                          style: { flexShrink: 0 }
                        }
                      ),
                      /* @__PURE__ */ l.jsx(
                        "input",
                        {
                          value: x,
                          onChange: (R) => S(R.target.value),
                          placeholder: "#hex or CSS var",
                          style: { flex: 1, minWidth: 0 }
                        }
                      )
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-lt-slot__settings-save",
                  onClick: () => {
                    const R = oe.getState(), F = b.trim();
                    if (!F) {
                      R.showToast("Error: Tab label cannot be empty", "error");
                      return;
                    }
                    if (R.slots.some(
                      (Z) => Z.id !== e.id && (Z.label.toLowerCase() === F.toLowerCase() || Z.id.toLowerCase() === F.toLowerCase())
                    )) {
                      R.showToast(`Error: "${F}" is already in use`, "error");
                      return;
                    }
                    R.updateSlot(e.id, {
                      label: F,
                      color: x
                    }), c(!1), R.showToast("Settings saved");
                  },
                  children: "Save Settings"
                }
              ),
              s > 1 && /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-lt-slot__settings-delete-btn",
                  onClick: T,
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
        d && /* @__PURE__ */ l.jsx(
          gm,
          {
            message: `Clear all items in the "${e.label}" tab?`,
            onConfirm: C,
            onCancel: () => h(!1)
          }
        )
      ]
    }
  );
}, Wv = () => {
  const e = oe((n) => n.toastMessage), t = oe((n) => n.toastType);
  return e ? /* @__PURE__ */ l.jsx(
    "div",
    {
      className: `meld-toast ${t === "error" ? "meld-toast--error" : ""}`,
      role: "status",
      "aria-live": "polite",
      children: e
    }
  ) : null;
}, Uv = () => {
  var b;
  Ov();
  const e = oe((w) => w.isOpen), t = oe((w) => w.setIsOpen), [n, r] = p.useState(!1);
  Le({
    onEscape: () => t(!1),
    enabled: e && !n
  }), p.useEffect(() => {
    e || r(!1);
  }, [e]);
  const s = oe((w) => w.slots), a = oe((w) => w.buckets), { state: o } = he(), [i, c] = p.useState(((b = s[0]) == null ? void 0 : b.id) || "keep"), d = hm("lightTable");
  if (!e) return null;
  const h = () => {
    const w = `slot_${Date.now().toString(36)}`;
    oe.getState().addSlot({
      id: w,
      label: `Tab ${s.length + 1}`,
      color: "var(--meld-text-secondary, #9ca3af)",
      shortcutKey: ""
    }), c(w);
  }, v = () => {
    s.forEach((w) => {
      oe.getState().clearBucket(w.id);
    }), oe.getState().showToast("All tabs cleared"), r(!1);
  }, g = /* @__PURE__ */ l.jsxs("div", { className: "meld-light-table", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-light-table__tabs", children: [
      s.map((w) => {
        var x;
        return /* @__PURE__ */ l.jsxs(
          "button",
          {
            type: "button",
            className: `meld-light-table__tab ${i === w.id ? "meld-light-table__tab--active" : ""}`,
            onClick: () => c(w.id),
            style: { "--tab-color": w.color },
            onDragOver: (S) => {
              S.preventDefault(), c(w.id);
            },
            onDrop: (S) => {
              S.preventDefault();
              const f = S.dataTransfer.getData("text/plain");
              f && f.split(",").forEach((u) => {
                if (u) {
                  const y = u.trim(), _ = o.images.find((k) => String(k.id) === y);
                  oe.getState().addToBucket(w.id, y, _);
                }
              });
            },
            children: [
              w.label,
              "  (",
              ((x = a[w.id]) == null ? void 0 : x.length) || 0,
              ")"
            ]
          },
          w.id
        );
      }),
      /* @__PURE__ */ l.jsx(
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
          children: /* @__PURE__ */ l.jsx(Qs, { size: 16 })
        }
      ),
      /* @__PURE__ */ l.jsx("div", { style: { flex: 1 } }),
      /* @__PURE__ */ l.jsxs(
        "button",
        {
          type: "button",
          className: "meld-light-table__clear-btn",
          onClick: () => r(!0),
          title: "Clear All Tabs",
          children: [
            /* @__PURE__ */ l.jsx(Mg, { size: 14 }),
            /* @__PURE__ */ l.jsx("span", { children: "Clear All" })
          ]
        }
      ),
      /* @__PURE__ */ l.jsx(
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
          children: /* @__PURE__ */ l.jsx(pe, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-light-table__content", children: s.map((w) => /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-light-table__tab-panel",
        style: { display: i === w.id ? "block" : "none" },
        children: /* @__PURE__ */ l.jsx($v, { config: w })
      },
      w.id
    )) }),
    n && /* @__PURE__ */ l.jsx(
      gm,
      {
        message: "Are you sure you want to clear all items in all tabs?",
        onConfirm: v,
        onCancel: () => r(!1)
      }
    ),
    /* @__PURE__ */ l.jsx(Wv, {})
  ] });
  return ye.createPortal(g, d);
}, ym = () => {
  const { state: e, refreshFavorites: t } = he(), [n, r] = p.useState(!1), [s, a] = p.useState(null), [o, i] = p.useState("info"), [c, d] = p.useState(null), [h, v] = p.useState(""), [g, b] = p.useState("");
  p.useEffect(() => {
    if (s) {
      const m = setTimeout(() => a(null), 3e3);
      return () => clearTimeout(m);
    }
  }, [s]);
  const w = p.useCallback(
    async (m, u, y) => {
      m.stopPropagation();
      const _ = `Are you sure you want to delete the favorite "${y}"?`;
      if (window.confirm(_))
        try {
          await Fc(u), await t();
        } catch (k) {
          W.error("Failed to delete favorite", k);
        }
    },
    [t]
  ), x = p.useCallback((m, u) => {
    m.stopPropagation(), d(u), v(u.name), b(u.query);
  }, []), S = p.useCallback(async () => {
    if (!(!c || !h.trim() || !g.trim()))
      try {
        r(!0), await ny(c.id, h, g), await t(), d(null);
      } catch (m) {
        W.error("Failed to update favorite", m), a("Failed to update favorite."), i("error");
      } finally {
        r(!1);
      }
  }, [c, h, g, t]), f = p.useCallback(async () => {
    if (!e.searchQuery || n) return !1;
    if (e.favorites.some((u) => u.query === e.searchQuery)) {
      const u = e.favorites.find((y) => y.query === e.searchQuery);
      if (u) {
        r(!0);
        try {
          return await Fc(u.id), await t(), !0;
        } catch (y) {
          return W.error("Failed to delete favorite:", y), !1;
        } finally {
          r(!1);
        }
      }
      return !1;
    }
    r(!0);
    try {
      return await ty(e.searchQuery, e.searchQuery), await t(), !0;
    } catch (u) {
      return W.error("Failed to save favorite:", u), !1;
    } finally {
      r(!1);
    }
  }, [e.searchQuery, e.favorites, n, t]);
  return {
    isSaving: n,
    toastMessage: s,
    toastType: o,
    editingFavorite: c,
    setEditingFavorite: d,
    editFavoriteName: h,
    setEditFavoriteName: v,
    editFavoriteQuery: g,
    setEditFavoriteQuery: b,
    handleDeleteFavorite: w,
    handleEditFavorite: x,
    handleSaveEditFavorite: S,
    handleSaveFavorite: f,
    setToastMessage: (m, u = "info") => {
      a(m), i(u);
    }
  };
}, vm = ({ fav: e, onSelect: t, onEdit: n, onDelete: r }) => {
  const [s, a] = p.useState(!1), [o, i] = p.useState(!1), [c, d] = p.useState(!1);
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: s ? "var(--comfy-menu-bg, #333)" : "var(--comfy-input-bg, #2a2a2a)",
        border: "1px solid",
        borderColor: s ? "var(--meld-accent-color)" : "var(--comfy-menu-border, #333)",
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
        /* @__PURE__ */ l.jsxs(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              minWidth: 0,
              flex: 1
            },
            children: [
              /* @__PURE__ */ l.jsx(
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
              e.name !== e.query && /* @__PURE__ */ l.jsx(
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
        /* @__PURE__ */ l.jsxs(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "4px",
              flexShrink: 0
            },
            children: [
              /* @__PURE__ */ l.jsx(
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
                  children: /* @__PURE__ */ l.jsx(jf, { size: 14 })
                }
              ),
              /* @__PURE__ */ l.jsx(
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
                  children: /* @__PURE__ */ l.jsx(Gt, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Vv = "_menu_jab2z_1", Bv = "_header_jab2z_14", Qv = "_title_jab2z_23", Hv = "_count_jab2z_32", Kv = "_list_jab2z_37", Gv = "_toast_jab2z_46", qv = "_editTitle_jab2z_56", Yv = "_form_jab2z_62", Xv = "_fieldGroup_jab2z_69", Zv = "_label_jab2z_75", Jv = "_input_jab2z_81", ew = "_textarea_jab2z_82", Xe = {
  menu: Vv,
  header: Bv,
  title: Qv,
  count: Hv,
  list: Kv,
  toast: Gv,
  editTitle: qv,
  form: Yv,
  fieldGroup: Xv,
  label: Zv,
  input: Jv,
  textarea: ew
}, tw = ({
  anchorRect: e,
  onClose: t,
  onSelect: n
}) => {
  const { state: r } = he(), {
    isSaving: s,
    toastMessage: a,
    editingFavorite: o,
    setEditingFavorite: i,
    editFavoriteName: c,
    setEditFavoriteName: d,
    editFavoriteQuery: h,
    setEditFavoriteQuery: v,
    handleDeleteFavorite: g,
    handleEditFavorite: b,
    handleSaveEditFavorite: w
  } = ym(), [x, S] = p.useState({ top: 0, left: 0 }), f = p.useRef(null), m = p.useRef(null);
  return Le({
    onEscape: () => {
      o ? i(null) : t();
    },
    enabled: !0
  }), ml({
    enabled: !!e && !o,
    insideRefs: [f],
    onOutside: () => t()
  }), p.useEffect(() => {
    if (e) {
      let _ = e.left;
      const k = e.bottom + 5;
      _ + 300 > window.innerWidth - 10 && (_ = window.innerWidth - 300 - 10), _ < 10 && (_ = 10), S({ top: k, left: _ });
    }
  }, [e]), p.useEffect(() => {
    o && m.current && m.current.focus();
  }, [o]), e ? ye.createPortal(
    /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs(
        "div",
        {
          ref: f,
          className: `${Xe.menu} meld-favorites-context-menu`,
          style: {
            top: x.top,
            left: x.left
          },
          children: [
            /* @__PURE__ */ l.jsxs("div", { className: Xe.header, children: [
              /* @__PURE__ */ l.jsxs("div", { className: Xe.title, children: [
                /* @__PURE__ */ l.jsx(
                  gr,
                  {
                    size: 14,
                    color: "var(--brand-yellow, #ffd700)",
                    fill: "var(--brand-yellow, #ffd700)"
                  }
                ),
                "Favorites"
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: Xe.count, children: [
                r.favorites.length,
                " items"
              ] })
            ] }),
            /* @__PURE__ */ l.jsx("div", { className: Xe.list, children: r.favorites.map((u) => /* @__PURE__ */ l.jsx(
              vm,
              {
                fav: u,
                onSelect: (y) => {
                  n(y), t();
                },
                onEdit: b,
                onDelete: g
              },
              u.id
            )) }),
            a && /* @__PURE__ */ l.jsx("div", { className: Xe.toast, children: a })
          ]
        }
      ),
      o && /* @__PURE__ */ l.jsx(
        "div",
        {
          className: "meld-modal-overlay meld-favorites-edit-modal-overlay",
          onMouseDown: (u) => {
            u.target === u.currentTarget && i(null);
          },
          children: /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--small",
              onClick: (u) => u.stopPropagation(),
              children: [
                /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ l.jsxs("h2", { className: Xe.editTitle, children: [
                    /* @__PURE__ */ l.jsx(gr, { size: 20, color: "var(--meld-accent-color)" }),
                    "Edit Favorite"
                  ] }),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => i(null),
                      children: /* @__PURE__ */ l.jsx(pe, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ l.jsxs("div", { className: Xe.form, children: [
                  /* @__PURE__ */ l.jsxs("div", { className: Xe.fieldGroup, children: [
                    /* @__PURE__ */ l.jsx("label", { htmlFor: "edit-favorite-name-ctx", className: Xe.label, children: "Name" }),
                    /* @__PURE__ */ l.jsx(
                      "input",
                      {
                        id: "edit-favorite-name-ctx",
                        ref: m,
                        type: "text",
                        value: c,
                        onChange: (u) => d(u.target.value),
                        placeholder: "Favorite Name",
                        className: Xe.input,
                        onKeyDown: (u) => {
                          u.key === "Enter" && (Je(u), w()), u.key === "Escape" && (Je(u), i(null));
                        }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ l.jsxs("div", { className: Xe.fieldGroup, children: [
                    /* @__PURE__ */ l.jsx("label", { htmlFor: "edit-favorite-query-ctx", className: Xe.label, children: "Search Query" }),
                    /* @__PURE__ */ l.jsx(
                      "textarea",
                      {
                        id: "edit-favorite-query-ctx",
                        value: h,
                        onChange: (u) => v(u.target.value),
                        placeholder: "Search Query",
                        rows: 3,
                        className: Xe.textarea,
                        onKeyDown: (u) => {
                          u.key === "Enter" && !u.shiftKey && (Je(u), w()), u.key === "Escape" && (Je(u), i(null));
                        }
                      }
                    )
                  ] })
                ] }) }),
                /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-footer", children: [
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn--secondary",
                      onClick: () => i(null),
                      children: "Cancel"
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn--primary",
                      onClick: w,
                      disabled: s || !c.trim() || !h.trim(),
                      children: s ? "Saving..." : "Save Changes"
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
}, Ul = (e) => {
  const t = [];
  let n = "", r = !1;
  for (let s = 0; s < e.length; s++) {
    const a = e[s];
    if (a === '"')
      r = !r, n += a;
    else if (a === " " && !r)
      for (t.push(n), n = ""; s + 1 < e.length && e[s + 1] === " "; )
        s++;
    else
      n += a;
  }
  return t.push(n), t;
}, nw = () => {
  const { state: e, dispatch: t, updateSetting: n } = he(), [r, s] = p.useState(e.searchQuery), [a, o] = p.useState([]), [i, c] = p.useState(!1), [d, h] = p.useState([]), [v, g] = p.useState([]), b = e.settings["search.show_all_keywords"], [w, x] = p.useState(-1), [S, f] = p.useState(null), m = p.useRef(null), u = p.useRef(e.searchQuery), y = p.useCallback(async () => {
    if (v.length > 0) return;
    const A = await Zg();
    g(A);
  }, [v.length]);
  p.useEffect(() => {
    let A = !0;
    return Jg().then((C) => {
      A && f(C);
    }).catch((C) => {
      A && W.error("Failed to fetch search config:", C);
    }), b && y().catch((C) => {
      A && W.error("Failed to fetch keywords:", C);
    }), () => {
      A = !1;
    };
  }, [y, b]);
  const _ = p.useMemo(() => {
    if (!S) return null;
    const A = S.all_prefixes.join("|");
    return new RegExp(`^[-!]?(${A}):(.*)$`, "i");
  }, [S]), k = p.useCallback(() => {
    const A = !b;
    A && y(), n("search.show_all_keywords", A);
  }, [b, y, n]), j = r !== u.current;
  p.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      h([]);
      return;
    }
    let A = !0;
    return Xg().then((C) => {
      A && h(C);
    }).catch((C) => {
      A && (W.error("Failed to fetch search suggestions:", C), h([]));
    }), () => {
      A = !1;
    };
  }, [e.settings["search.quick_suggestions"]]), p.useEffect(() => {
    s(e.searchQuery), u.current = e.searchQuery;
  }, [e.searchQuery]), p.useEffect(() => {
    var A;
    (A = m.current) == null || A.focus();
  }, []);
  const E = p.useCallback(
    (A, C = !0) => {
      u.current !== A && (W.log("SearchBar: triggering search", { query: A }), t({ type: "SET_SEARCH_QUERY", payload: A }), C && c(!1), u.current = A);
    },
    [t]
  );
  p.useEffect(() => {
    const A = setTimeout(async () => {
      if (r === u.current)
        return;
      if (!e.settings["search.input_suggest"] || !_) {
        o([]), c(!1);
        return;
      }
      const C = Ul(r), T = C[C.length - 1];
      if (T) {
        const P = T.match(_);
        if (P) {
          const U = P[1];
          let R = P[2];
          if (!U || R === void 0) {
            o([]), c(!1);
            return;
          }
          const F = U.toLowerCase();
          R.startsWith('"') && (R = R.substring(1)), R.endsWith('"') && (R = R.substring(0, R.length - 1));
          const O = await Yg(R, F);
          o(O), c(O.length > 0), x(-1);
        } else {
          const U = T.replace(/^([-!])/, "").toLowerCase();
          if (U && S) {
            const R = S.all_prefixes.filter((F) => F.startsWith(U)).map((F) => ({
              type: F,
              value: "",
              count: 0
            }));
            if (R.length > 0) {
              o(R), c(!0), x(-1);
              return;
            }
          }
          o([]), c(!1);
        }
      } else
        o([]), c(!1);
    }, 300);
    return () => clearTimeout(A);
  }, [r, e.settings["search.input_suggest"], _, S]);
  const D = p.useCallback(
    (A) => {
      var O;
      if (!A) return;
      const C = Ul(r), P = (C.pop() || "").match(/^([-!])/), U = P ? P[1] : "", F = ((S == null ? void 0 : S.no_quote_prefixes) || []).includes(A.type);
      if (A.value === "") {
        const Z = `${[...C, `${U}${A.type}:`].join(" ").trim()}`;
        s(Z);
      } else {
        const Z = F ? A.value : `"${A.value}"`, re = `${[...C, `${U}${A.type}:${Z}`].join(" ").trim()} `;
        s(re), o([]), c(!1);
      }
      (O = m.current) == null || O.focus();
    },
    [r, S]
  ), N = (A) => {
    if (A)
      if (A.key === "Enter")
        if (Je(A), i && w >= 0) {
          const C = a[w];
          C && D(C);
        } else
          E(r);
      else if (A.key === "Tab") {
        if (i && a.length > 0) {
          Je(A);
          const C = w >= 0 ? w : 0, T = a[C];
          T && D(T);
        }
      } else A.key === "ArrowDown" ? i && (Je(A), x((C) => Math.min(C + 1, a.length - 1))) : A.key === "ArrowUp" ? i && (Je(A), x((C) => Math.max(C - 1, -1))) : A.key === "Escape" && (Je(A), c(!1));
  }, L = p.useCallback(() => {
    s(""), E("");
  }, [E]), $ = p.useCallback(
    (A, C, T = !1) => {
      var qe;
      if (!A) return;
      const P = Ul(r), U = P[P.length - 1] || "";
      let R = !1;
      const F = U.replace(/^([-!])/, "").toLowerCase();
      F && A.toLowerCase().startsWith(F) && (R = !0);
      const O = U.match(/^([-!])/), Z = R && O ? O[1] : "";
      if (R && P.pop(), T) {
        const K = [...P, `${Z}${A}:`].filter(Boolean).join(" ");
        s(K), (qe = m.current) == null || qe.focus();
        return;
      }
      const fe = ((S == null ? void 0 : S.no_quote_prefixes) || []).includes(A) ? C : `"${C}"`, G = `${Z}${A}:${fe}`, ee = [...P, G].filter(Boolean).join(" ");
      s(ee), E(ee);
    },
    [r, E, S]
  ), Q = p.useCallback(
    (A) => {
      s(A), A || E("");
    },
    [E]
  ), I = p.useCallback(() => {
    if (r === u.current || !_) return;
    const A = Ul(r), C = A[A.length - 1];
    if (!C) return;
    const T = !!C.match(_), P = C.replace(/^([-!])/, "").toLowerCase(), U = P && (S == null ? void 0 : S.all_prefixes.some((R) => R.startsWith(P)));
    (T || U) && c(!0);
  }, [r, _, S]), z = p.useRef(null), M = p.useCallback(() => {
    z.current = setTimeout(() => c(!1), 200);
  }, []);
  return p.useEffect(() => () => {
    z.current && clearTimeout(z.current);
  }, []), {
    inputValue: r,
    setInputValue: s,
    suggestions: a,
    showSuggestions: i,
    setShowSuggestions: c,
    searchSuggestions: d,
    allKeywords: v,
    showAllKeywords: b,
    toggleShowAllKeywords: k,
    selectedIndex: w,
    setSelectedIndex: x,
    inputRef: m,
    isQueryChanged: j,
    handleSearch: E,
    handleKeyDown: N,
    applySuggestion: D,
    clearSearch: L,
    applySearchSuggestion: $,
    handleInputChange: Q,
    handleInputFocus: I,
    handleInputBlur: M
  };
}, Yc = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ l.jsx(xr, { size: 12 });
    case "model":
      return /* @__PURE__ */ l.jsx(dg, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ l.jsx(Tg, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ l.jsx(ug, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ l.jsx(_f, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ l.jsx(xf, { size: 12 });
    case "note":
      return /* @__PURE__ */ l.jsx(gg, { size: 12 });
    case "sort":
      return /* @__PURE__ */ l.jsx(ig, { size: 12 });
    default:
      return null;
  }
}, rw = ({
  showSuggestions: e,
  suggestions: t,
  selectedIndex: n,
  setSelectedIndex: r,
  applySuggestion: s,
  inputValue: a,
  searchQuery: o,
  searchSuggestions: i,
  allKeywords: c,
  showAllKeywords: d,
  toggleShowAllKeywords: h,
  applySearchSuggestion: v,
  favorites: g,
  onSelectFavorite: b,
  onEditFavorite: w,
  onDeleteFavorite: x
}) => {
  const S = (y, _, k) => /* @__PURE__ */ l.jsxs(
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
      onMouseEnter: (j) => {
        j.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", j.currentTarget.style.borderColor = "var(--comfy-menu-border, #444)", j.currentTarget.style.color = "var(--meld-text-color)";
      },
      onMouseLeave: (j) => {
        j.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", j.currentTarget.style.borderColor = "var(--comfy-menu-border, #333)", j.currentTarget.style.color = "var(--meld-text-color)";
      },
      children: [
        /* @__PURE__ */ l.jsx(
          "span",
          {
            style: {
              display: "flex",
              color: "var(--meld-text-secondary)"
            },
            children: Yc(y.type)
          }
        ),
        /* @__PURE__ */ l.jsx(
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
        k !== "all" && /* @__PURE__ */ l.jsx(
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
    `${k}-${y.type}:${y.value}:${_}`
  ), f = () => !e || t.length === 0 ? null : /* @__PURE__ */ l.jsx(
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
      children: t.map((y, _) => /* @__PURE__ */ l.jsx(
        "div",
        {
          onMouseDown: (k) => {
            k.preventDefault(), s(y);
          },
          onMouseEnter: () => r(_),
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 14px",
            cursor: "pointer",
            backgroundColor: _ === n ? "var(--comfy-input-bg-active, rgba(59, 130, 246, 0.15))" : "transparent",
            borderBottom: "1px solid var(--comfy-menu-border, #2a2a2a)",
            borderLeft: _ === n ? "3px solid var(--meld-accent-color, #3b82f6)" : "3px solid transparent",
            transition: "all 0.1s ease-out"
          },
          children: /* @__PURE__ */ l.jsxs(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "10px",
                transform: _ === n ? "translateX(2px)" : "none",
                transition: "transform 0.1s ease-out"
              },
              children: [
                /* @__PURE__ */ l.jsx(
                  "span",
                  {
                    style: {
                      color: _ === n ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-secondary)",
                      display: "flex",
                      transition: "color 0.1s"
                    },
                    children: Yc(y.type)
                  }
                ),
                /* @__PURE__ */ l.jsxs(
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
                /* @__PURE__ */ l.jsx(
                  "span",
                  {
                    style: {
                      color: y.value === Et ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                      fontSize: "14px",
                      fontWeight: y.value === Et ? "bold" : "normal"
                    },
                    children: y.value === Et ? y.type === "tag" ? `Untagged (${Et})` : `No ${y.type} (${Et})` : y.value
                  }
                )
              ]
            }
          )
        },
        `${y.type}:${y.value}`
      ))
    }
  ), m = () => i.length === 0 || a && a === o ? null : /* @__PURE__ */ l.jsxs(
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
        /* @__PURE__ */ l.jsx(
          "div",
          {
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              padding: "0 4px"
            },
            children: i.map((y, _) => S(y, _, "quick"))
          }
        ),
        /* @__PURE__ */ l.jsxs(
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
              /* @__PURE__ */ l.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 4px"
                  },
                  children: [
                    /* @__PURE__ */ l.jsx(
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
                    /* @__PURE__ */ l.jsx(
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
              d && /* @__PURE__ */ l.jsx(
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
                    (y, _) => S({ type: y, value: "" }, _, "all")
                  )
                }
              )
            ]
          }
        )
      ]
    }
  ), u = () => g.length === 0 || a && a === o ? null : /* @__PURE__ */ l.jsxs(
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
        /* @__PURE__ */ l.jsxs(
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
              /* @__PURE__ */ l.jsx(gr, { size: 12, fill: "var(--meld-text-secondary)" }),
              "Favorites"
            ]
          }
        ),
        /* @__PURE__ */ l.jsx(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "4px"
            },
            children: g.map((y) => /* @__PURE__ */ l.jsx(
              vm,
              {
                fav: y,
                onSelect: b,
                onEdit: w,
                onDelete: x
              },
              y.id
            ))
          }
        )
      ]
    }
  );
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      style: { position: "relative" },
      onMouseDown: (y) => {
        y.preventDefault();
      },
      children: [
        f(),
        m(),
        u()
      ]
    }
  );
}, lw = () => {
  const { state: e } = he(), {
    inputValue: t,
    setInputValue: n,
    suggestions: r,
    showSuggestions: s,
    searchSuggestions: a,
    allKeywords: o,
    showAllKeywords: i,
    toggleShowAllKeywords: c,
    selectedIndex: d,
    setSelectedIndex: h,
    inputRef: v,
    isQueryChanged: g,
    handleSearch: b,
    handleKeyDown: w,
    applySuggestion: x,
    clearSearch: S,
    applySearchSuggestion: f,
    handleInputChange: m,
    handleInputFocus: u,
    handleInputBlur: y
  } = nw(), {
    isSaving: _,
    toastMessage: k,
    toastType: j,
    editingFavorite: E,
    setEditingFavorite: D,
    editFavoriteName: N,
    setEditFavoriteName: L,
    editFavoriteQuery: $,
    setEditFavoriteQuery: Q,
    handleDeleteFavorite: I,
    handleEditFavorite: z,
    handleSaveEditFavorite: M,
    handleSaveFavorite: A,
    setToastMessage: C
  } = ym(), T = async () => {
    const O = e.favorites.some((re) => re.query === e.searchQuery);
    await A() && C(
      O ? "Removed from favorites." : "Added to favorites.",
      "info"
    );
  };
  Le({
    onEscape: () => D(null),
    enabled: !!E
  });
  const P = p.useRef(null), U = p.useRef(!1);
  p.useEffect(() => {
    E && P.current && P.current.focus();
  }, [E]);
  const R = (O) => {
    O.target === O.currentTarget && (U.current = !0);
  }, F = (O) => {
    O.target === O.currentTarget && U.current && D(null), U.current = !1;
  };
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: "meld-search-container",
      style: { display: "flex", flexDirection: "column", gap: "8px", flex: 1 },
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: "meld-search-bar-wrapper", style: { position: "relative", width: "100%" }, children: [
          k && /* @__PURE__ */ l.jsx(
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
                border: j === "error" ? "1px solid var(--brand-red, #ff4c4c)" : "1px solid var(--comfy-menu-border, #444)",
                animation: "meld-fade-in-down 0.3s ease-out",
                width: "max-content",
                maxWidth: "300px"
              },
              children: k
            }
          ),
          /* @__PURE__ */ l.jsxs(
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
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => b(t),
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
                    onMouseEnter: (O) => {
                      O.currentTarget.style.transform = "translateY(-1px)", g ? (O.currentTarget.style.filter = "brightness(1.15)", O.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : O.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                    },
                    onMouseLeave: (O) => {
                      O.currentTarget.style.transform = "none", g ? (O.currentTarget.style.filter = "none", O.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : O.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                    },
                    onMouseDown: (O) => {
                      O.currentTarget.style.transform = "translateY(1px)", O.currentTarget.style.boxShadow = "none";
                    },
                    onMouseUp: (O) => {
                      O.currentTarget.style.transform = "translateY(-1px)";
                    },
                    title: "Search (Enter)",
                    children: [
                      /* @__PURE__ */ l.jsx(
                        yn,
                        {
                          size: 16,
                          color: g ? "var(--meld-text-color, #fff)" : "var(--meld-text-secondary)",
                          style: {
                            transition: "color 0.2s",
                            filter: g ? "drop-shadow(0 1px 2px var(--meld-shadow-color, rgba(0,0,0,0.2)))" : "none"
                          }
                        }
                      ),
                      g && /* @__PURE__ */ l.jsx(
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
                /* @__PURE__ */ l.jsx(
                  "input",
                  {
                    ref: v,
                    type: "text",
                    value: t,
                    onChange: (O) => m(O.target.value),
                    onKeyDown: w,
                    onBlur: y,
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
                e.searchQuery && /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: T,
                    disabled: _,
                    "aria-label": e.favorites.some((O) => O.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
                    title: e.favorites.some((O) => O.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                    children: /* @__PURE__ */ l.jsx(
                      gr,
                      {
                        size: 16,
                        color: e.favorites.some((O) => O.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                        fill: e.favorites.some((O) => O.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                      }
                    )
                  }
                ),
                t && /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: S,
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
                    children: /* @__PURE__ */ l.jsx(pe, { size: 16, color: "var(--meld-text-secondary)" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ l.jsx(
            rw,
            {
              showSuggestions: s,
              suggestions: r,
              selectedIndex: d,
              setSelectedIndex: h,
              applySuggestion: x,
              inputValue: t,
              searchQuery: e.searchQuery,
              searchSuggestions: a,
              allKeywords: o,
              showAllKeywords: i,
              toggleShowAllKeywords: c,
              applySearchSuggestion: f,
              favorites: e.favorites,
              onSelectFavorite: (O) => {
                n(O), b(O);
              },
              onEditFavorite: z,
              onDeleteFavorite: I
            }
          )
        ] }),
        E && ye.createPortal(
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-modal-overlay meld-search-edit-modal-overlay",
              onMouseDown: R,
              onMouseUp: F,
              children: /* @__PURE__ */ l.jsxs(
                "div",
                {
                  className: "meld-modal-content meld-modal-content--small",
                  onClick: (O) => O.stopPropagation(),
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-labelledby": "edit-favorite-title",
                  children: [
                    /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                      /* @__PURE__ */ l.jsxs(
                        "h2",
                        {
                          id: "edit-favorite-title",
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ l.jsx(gr, { size: 20, color: "var(--meld-accent-color)" }),
                            "Edit Favorite"
                          ]
                        }
                      ),
                      /* @__PURE__ */ l.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-modal-close",
                          onClick: () => D(null),
                          children: /* @__PURE__ */ l.jsx(pe, { size: 20 })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ l.jsxs(
                      "div",
                      {
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          gap: "16px",
                          padding: "8px 0"
                        },
                        children: [
                          /* @__PURE__ */ l.jsxs(
                            "div",
                            {
                              style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "6px"
                              },
                              children: [
                                /* @__PURE__ */ l.jsx(
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
                                /* @__PURE__ */ l.jsx(
                                  "input",
                                  {
                                    id: "edit-favorite-name",
                                    ref: P,
                                    type: "text",
                                    value: N,
                                    onChange: (O) => L(O.target.value),
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
                                    onKeyDown: (O) => {
                                      O.key === "Enter" && (Je(O), M()), O.key === "Escape" && (Je(O), D(null));
                                    }
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ l.jsxs(
                            "div",
                            {
                              style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "6px"
                              },
                              children: [
                                /* @__PURE__ */ l.jsx(
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
                                /* @__PURE__ */ l.jsx(
                                  "textarea",
                                  {
                                    id: "edit-favorite-query",
                                    value: $,
                                    onChange: (O) => Q(O.target.value),
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
                                    onKeyDown: (O) => {
                                      O.key === "Enter" && !O.shiftKey && (Je(O), M()), O.key === "Escape" && (Je(O), D(null));
                                    }
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-footer", children: [
                      /* @__PURE__ */ l.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn--secondary",
                          onClick: () => D(null),
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ l.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn--primary",
                          onClick: M,
                          disabled: _ || !N.trim() || !$.trim(),
                          children: _ ? "Saving..." : "Save Changes"
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
}, sw = ({ onClose: e, onSearch: t }) => {
  const [n, r] = p.useState([]), [s, a] = p.useState(!0), [o, i] = p.useState(""), [c, d] = p.useState(""), [h, v] = p.useState(!1), [g, b] = p.useState(null), [w, x] = p.useState(""), [S, f] = p.useState(!1), m = p.useRef(null), u = p.useCallback(async () => {
    a(!0);
    try {
      const L = await xi();
      r(L);
    } catch (L) {
      W.error("Failed to fetch tags:", L);
    } finally {
      a(!1);
    }
  }, []);
  p.useEffect(() => {
    u();
  }, [u]), p.useEffect(() => {
    g !== null && m.current && (m.current.focus(), m.current.select());
  }, [g]);
  const y = async (L) => {
    L.preventDefault();
    const $ = c.trim();
    if (!(!$ || h)) {
      if ($.toLowerCase() === Et) {
        alert(`Tag name '${Et}' is reserved for search and cannot be used.`);
        return;
      }
      if (n.some((Q) => Q.name.toLowerCase() === $.toLowerCase())) {
        alert(`Tag "${$}" already exists.`);
        return;
      }
      v(!0);
      try {
        await gy($), d(""), await u();
      } catch (Q) {
        W.error("Failed to add tag:", Q);
      } finally {
        v(!1);
      }
    }
  }, _ = async (L, $) => {
    if (confirm(`Are you sure you want to delete tag "${$}"?`))
      try {
        await yy(L), await u();
      } catch (Q) {
        W.error("Failed to delete tag:", Q);
      }
  }, k = (L) => {
    b(L.id), x(L.name);
  }, j = () => {
    b(null), x("");
  }, E = async (L) => {
    L.preventDefault();
    const $ = w.trim();
    if (!$ || g === null || S) return;
    if ($.toLowerCase() === Et) {
      alert(`Tag name '${Et}' is reserved for search and cannot be used.`);
      return;
    }
    const Q = n.find((I) => I.id === g);
    if (Q && Q.name === $) {
      j();
      return;
    }
    if (n.some((I) => I.id !== g && I.name.toLowerCase() === $.toLowerCase())) {
      alert(`Tag "${$}" already exists.`);
      return;
    }
    f(!0);
    try {
      await vy(g, $), j(), await u();
    } catch (I) {
      W.error("Failed to rename tag:", I), alert(I instanceof Error ? I.message : "Failed to rename tag");
    } finally {
      f(!1);
    }
  }, D = (L) => {
    t(`tag:${L}`);
  }, N = p.useMemo(() => n.filter((L) => L.name.toLowerCase().includes(o.toLowerCase())), [n, o]);
  return /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ l.jsx(xr, { size: 16 }),
        /* @__PURE__ */ l.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ l.jsx(pe, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ l.jsxs("form", { className: "meld-tag-add-form", onSubmit: y, children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: c,
            onChange: (L) => d(L.target.value),
            disabled: h
          }
        ),
        /* @__PURE__ */ l.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn--primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !c.trim() || h,
            children: [
              /* @__PURE__ */ l.jsx(Qs, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ l.jsx(yn, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: o,
            onChange: (L) => i(L.target.value)
          }
        )
      ] }),
      s ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ l.jsx("div", { className: "meld-tag-list", children: N.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : N.map((L) => /* @__PURE__ */ l.jsx("div", { className: "meld-tag-item", children: g === L.id ? /* @__PURE__ */ l.jsxs("form", { className: "meld-tag-rename-form", onSubmit: E, children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "text",
            ref: m,
            className: "meld-tag-rename-input",
            value: w,
            onChange: ($) => x($.target.value),
            onKeyDown: ($) => $.key === "Escape" && j()
          }
        ),
        /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "submit",
            className: "meld-tag-item__btn meld-tag-item__btn--save",
            title: "Save",
            disabled: S || !w.trim(),
            children: /* @__PURE__ */ l.jsx(lt, { size: 14 })
          }
        ),
        /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "button",
            className: "meld-tag-item__btn",
            title: "Cancel",
            onClick: j,
            disabled: S,
            children: /* @__PURE__ */ l.jsx(pe, { size: 14 })
          }
        )
      ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx("span", { className: "meld-tag-item__name", children: L.name }),
        /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => D(L.name),
              children: /* @__PURE__ */ l.jsx(yn, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => k(L),
              children: /* @__PURE__ */ l.jsx(jf, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => _(L.id, L.name),
              children: /* @__PURE__ */ l.jsx(Gt, { size: 14 })
            }
          )
        ] })
      ] }) }, L.id)) })
    ] })
  ] });
}, Sa = 56, wm = (e, t) => {
  const n = p.useCallback(async (s) => vi(s), []), r = p.useCallback(
    (s) => {
      const a = t["gallery.lineage_max_depth"];
      if (a === 0) return [];
      if (s.ancestors && s.ancestors.length > 0)
        return s.ancestors.slice(0, a).map((h) => ({
          id: h.id,
          imgSrc: yt(h, Sa)
        }));
      const o = s.parent_id;
      if (!o || !s.parent_filename) return [];
      const i = e.find((h) => h.id === o);
      let c = null;
      if (i ? c = yt(i, Sa) : c = yt(
        {
          filename: s.parent_filename,
          subfolder: s.parent_subfolder || "",
          type: s.parent_type
        },
        Sa
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
}, Xc = ({
  currentThumbnails: e,
  currentIndex: t,
  removedIds: n,
  viewerMode: r,
  viewerLightTableSlotId: s,
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
      ...r === "lighttable" && s ? { slotId: s } : {}
    }
  } : { type: "CLOSE_VIEWER" }), o && o.length > 0 && a({ type: "REMOVE_IMAGES", payload: o });
}, aw = ({
  state: e,
  dispatch: t,
  image: n,
  isFullscreen: r,
  currentThumbnails: s,
  currentIndex: a,
  viewerMode: o,
  lineageImages: i,
  images: c,
  mountRefs: d,
  handleNext: h,
  handlePrevious: v,
  handleEditTags: g,
  handleRestore: b,
  fetchLineage: w,
  restoreImages: x,
  bulkUpdateImageTags: S
}) => {
  const [f, m] = p.useState(null), [u, y] = p.useState(
    null
  ), _ = p.useCallback(
    async (L = !1) => {
      if (!n) return;
      const $ = r ? e.settings["fullscreen.delete_mode"] : e.settings["viewer.delete_mode"];
      if (!L && $ === "confirm") {
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
      try {
        const Q = e.viewScope === "trash", I = /* @__PURE__ */ new Set([n.id]);
        let z = [];
        if ($ === "lineage") {
          z = await w(n.id);
          for (const M of z)
            I.add(M.id);
        }
        if (!d.isMountedRef.current || d.viewerImageIdRef.current === null || (await _o(Array.from(I), Q), !d.isMountedRef.current || d.viewerImageIdRef.current === null))
          return;
        if (Xc({
          currentThumbnails: s,
          currentIndex: a,
          removedIds: I,
          viewerMode: o,
          viewerLightTableSlotId: e.viewerLightTableSlotId,
          dispatch: t,
          removeImageIds: Array.from(I)
        }), !Q) {
          const M = [
            ...s,
            ...z,
            ...i,
            ...c
          ], A = /* @__PURE__ */ new Map();
          for (const T of M)
            A.set(T.id, T);
          const C = Array.from(I).map((T) => {
            const P = A.get(T);
            return P || {
              id: T,
              filename: `deleted_${T}`,
              subfolder: "",
              type: "custom",
              created_at: 0,
              positive: "",
              negative: "",
              tags: []
            };
          });
          m(C), y(null);
        }
      } catch (Q) {
        t({
          type: "SET_ERROR",
          payload: Q instanceof Error ? Q.message : String(Q)
        });
      }
    },
    [
      a,
      s,
      t,
      n,
      w,
      c,
      r,
      i,
      d,
      e.settings,
      e.viewScope,
      e.viewerLightTableSlotId,
      o
    ]
  ), k = p.useCallback(() => {
    n && g(n);
  }, [g, n]), j = p.useCallback(async () => {
    n && (s.length > 1 ? h() : t({ type: "CLOSE_VIEWER" }), await b(n));
  }, [s.length, t, h, b, n]), E = p.useCallback(async () => {
    if (!f || f.length === 0) return;
    const L = f.map(($) => $.id);
    try {
      const $ = await x(L);
      if (!d.isMountedRef.current) return;
      const Q = $.restored_ids || L, I = new Set(Q), z = f.filter((A) => I.has(A.id));
      if (z.length > 0 && t({ type: "ADD_IMAGES", payload: z }), e.viewScope === "trash" && t({ type: "REMOVE_IMAGES", payload: Q }), m(null), !d.isMountedRef.current) return;
      const M = Q[0];
      M !== void 0 && t({
        type: "OPEN_VIEWER",
        payload: {
          id: M,
          mode: o,
          ...o === "lighttable" && e.viewerLightTableSlotId ? { slotId: e.viewerLightTableSlotId } : {}
        }
      });
    } catch ($) {
      t({
        type: "SET_ERROR",
        payload: $ instanceof Error ? $.message : String($)
      });
    }
  }, [
    t,
    f,
    d.isMountedRef,
    x,
    e.viewScope,
    e.viewerLightTableSlotId,
    o
  ]), D = p.useCallback(async () => {
    if (f && f.length > 0) {
      await E();
      return;
    }
    if (!u || u.type !== "tags")
      return;
    const { imageId: L, addTags: $, removeTags: Q } = u;
    try {
      await S([L], $, Q);
      const I = (o === "lineage" ? i : c).find(
        (z) => z.id === L
      );
      if (I) {
        const z = [...I.tags];
        for (const A of $)
          z.includes(A) || z.push(A);
        const M = z.filter((A) => !Q.includes(A));
        t({
          type: "UPDATE_IMAGE",
          payload: { ...I, tags: M }
        }), t({
          type: "OPEN_VIEWER",
          payload: {
            id: L,
            mode: o,
            ...o === "lighttable" && e.viewerLightTableSlotId ? { slotId: e.viewerLightTableSlotId } : {}
          }
        });
      }
      y(null);
    } catch (I) {
      t({
        type: "SET_ERROR",
        payload: I instanceof Error ? I.message : String(I)
      });
    }
  }, [
    t,
    E,
    c,
    f,
    u,
    i,
    S,
    e.viewerLightTableSlotId,
    o
  ]), N = p.useCallback(
    async (L) => {
      if (!L || typeof L != "string" || !n) return;
      const $ = n.id, Q = [...n.tags], I = Qy(L, n), { addTags: z, removeTags: M, isDeleted: A, moveNext: C, movePrev: T, sendToLtSlot: P } = I;
      if (P) {
        const U = oe.getState(), R = U.slots.find(
          (F) => F.id.toLowerCase() === P.toLowerCase() || F.label.toLowerCase() === P.toLowerCase()
        );
        R ? (U.addToBucket(R.id, String($), n), U.showToast(`Sent to ${R.label}`), A || Xc({
          currentThumbnails: s,
          currentIndex: a,
          removedIds: /* @__PURE__ */ new Set([$]),
          viewerMode: o,
          viewerLightTableSlotId: e.viewerLightTableSlotId,
          dispatch: t,
          removeImageIds: [$]
        })) : (U.showToast(`Error: Light Table slot "${P}" not found`, "error"), W.warn(`Attempted to send to non-existent LT slot: ${P}`));
      }
      if (z.length > 0 || M.length > 0)
        try {
          await S([$], z, M);
          const U = [...Q];
          for (const F of z)
            U.includes(F) || U.push(F);
          const R = U.filter((F) => !M.includes(F));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...n, id: $, tags: R }
          }), y({
            type: "tags",
            imageId: $,
            addTags: [...M],
            removeTags: [...z]
          }), m(null);
        } catch (U) {
          W.error("Failed to update tags via shortcut:", U), t({
            type: "SET_ERROR",
            payload: U instanceof Error ? U.message : String(U)
          });
        }
      A ? await _(!0) : C ? h() : T && await v();
    },
    [
      a,
      s,
      t,
      S,
      _,
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
    handleDelete: _,
    handleTagEditAction: k,
    handleRestoreAction: j,
    handleUndo: D,
    executeCommand: N
  };
}, ow = ({
  overlayRef: e,
  settings: t,
  setShowDetails: n
}) => {
  const [r, s] = p.useState(!1), a = p.useCallback(
    (o) => {
      o && typeof o.stopPropagation == "function" && o.stopPropagation();
      const i = e.current;
      i && (document.fullscreenElement ? document.exitFullscreen() : i.requestFullscreen().catch((c) => {
        W.error(`Error attempting to enable full-screen mode: ${c.message}`);
      }));
    },
    [e]
  );
  return p.useEffect(() => {
    const o = () => {
      const i = !!document.fullscreenElement;
      s(i), n(i ? t["fullscreen.show_details_by_default"] : t["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", o), () => {
      document.removeEventListener("fullscreenchange", o);
    };
  }, [t, n]), { isFullscreen: r, toggleFullscreen: a };
}, iw = ({
  viewerImageId: e,
  activeModalType: t,
  viewScope: n,
  settings: r,
  dispatch: s,
  isMountedRef: a,
  toggleFullscreen: o,
  handleNext: i,
  handlePrevious: c,
  handleDelete: d,
  handleUndo: h,
  handleTagEditAction: v,
  handleRestoreAction: g,
  executeCommand: b,
  setShowDetails: w,
  setActiveShortcutKey: x
}) => {
  const S = p.useCallback(
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
      const y = f.key === "Delete" || f.key === "Backspace", _ = f.key === "ArrowRight" || f.key === "ArrowLeft" || f.key === "ArrowDown" || f.key === "ArrowUp", k = ["f", "F", "i", "I", "t", "T", "r", "R", "Enter"].includes(f.key), j = f.key === "Escape", E = (f.ctrlKey || f.metaKey) && (f.key === "z" || f.key === "Z" || f.code === "KeyZ"), D = /^[0-9]$/.test(f.key) && !f.ctrlKey && !f.metaKey && !f.altKey && f.code !== "KeyZ";
      if (y || _ || k || j || E || D)
        if (!u || j)
          fl(f);
        else
          return;
      else
        return;
      if (j)
        document.fullscreenElement ? document.exitFullscreen() : s({ type: "CLOSE_VIEWER" });
      else if (_)
        f.key === "ArrowRight" || f.key === "ArrowDown" ? i() : c();
      else if (k && (f.key === "f" || f.key === "F" || f.key === "Enter"))
        o(f);
      else if (k && (f.key === "i" || f.key === "I"))
        w((N) => !N);
      else if (k && (f.key === "t" || f.key === "T"))
        v();
      else if (k && (f.key === "r" || f.key === "R") && n === "trash")
        g();
      else if (y)
        d();
      else if (E)
        h();
      else if (D && !u) {
        const N = `viewer.shortcut.${f.key}`, L = r[N];
        typeof L == "string" && L && (x(f.key), setTimeout(() => {
          a.current && x(null);
        }, 500), b(L));
      }
    },
    [
      t,
      s,
      b,
      d,
      i,
      c,
      g,
      v,
      h,
      a,
      x,
      w,
      r,
      o,
      n,
      e
    ]
  );
  Ks({
    enabled: e !== null,
    onKeyDown: S
  });
}, cw = ({
  viewerMode: e,
  viewerImageId: t,
  lineageLength: n,
  dispatch: r,
  isMountedRef: s
}) => {
  const [a, o] = p.useState(!1), i = p.useRef(0);
  return p.useEffect(() => {
    let c = !1;
    if (e === "lineage" && t !== null && n === 0) {
      const d = ++i.current;
      o(!0), vi(t).then((h) => {
        !c && s.current && d === i.current && r({ type: "SET_LINEAGE", payload: h });
      }).catch((h) => {
        W.error("Failed to fetch lineage:", h);
      }).finally(() => {
        !c && s.current && d === i.current && o(!1);
      });
    }
    return () => {
      c = !0;
    };
  }, [r, s, n, t, e]), { isLoadingLineage: a };
}, dw = ({
  dispatch: e,
  isFullscreen: t,
  settings: n,
  currentThumbnails: r,
  currentIndex: s,
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
  }, [v, e, t]), b = p.useCallback(async () => {
    const w = t ? n["fullscreen.loop"] : n["viewer.loop"];
    if (s === 0 && a === "gallery" && o.hasMore && !c && w) {
      d(!0);
      try {
        const x = o.limit, S = o.total, f = Math.max(0, S - x), m = await rs(f, x, i);
        if (!h.isMountedRef.current) return;
        const u = ns(m, {
          total: o.total,
          offset: f,
          limit: x
        });
        if (e({ type: "APPEND_IMAGES", payload: u }), h.viewerImageIdRef.current === null) return;
        if (u.images.length > 0) {
          const y = u.images.at(-1);
          if (!y) return;
          e({
            type: "OPEN_VIEWER",
            payload: { id: y.id, mode: "gallery" }
          });
        }
      } catch (x) {
        W.error("Failed to jump to end:", x);
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
    s,
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
  return { handleNext: g, handlePrevious: b };
};
function uw(e) {
  const { ids: t, index: n, loopEnabled: r, hasMore: s } = e;
  if (t.length === 0 || n < 0 || n >= t.length)
    return { prevId: null, nextId: null };
  const a = n === 0, i = n === t.length - 1 ? s || !r ? null : t[0] ?? null : t[n + 1] ?? null;
  return { prevId: a ? s || !r ? null : t[t.length - 1] ?? null : t[n - 1] ?? null, nextId: i };
}
const fw = ({
  viewerImageId: e,
  currentThumbnails: t,
  currentIndex: n,
  isFullscreen: r,
  settings: s,
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
    const h = t.map((S) => S.id), v = h.indexOf(e);
    if (v === -1) return;
    const g = r ? s["fullscreen.loop"] : s["viewer.loop"], { prevId: b, nextId: w } = uw({
      ids: h,
      index: v,
      loopEnabled: g,
      hasMore: a && o === "gallery"
    }), x = setTimeout(() => {
      const S = [b, w].filter(
        (f) => f !== null && f !== e
      );
      S.length !== 0 && Promise.allSettled(S.map((f) => d(f))).then((f) => {
        for (const m of f)
          m.status === "rejected" && W.warn("Prefetching adjacent image details failed", m.reason);
      });
    }, 50);
    return () => clearTimeout(x);
  }, [
    t,
    d,
    a,
    r,
    s,
    e,
    o
  ]), p.useEffect(() => {
    if (e === null || t.length === 0 || n === -1) return;
    const h = [n + 1, n + 2, n - 1], v = setTimeout(() => {
      for (const g of h)
        if (g >= 0 && g < t.length) {
          const b = t[g];
          if (!b) continue;
          const w = new Image();
          w.src = wi(b);
        }
    }, 150);
    return () => clearTimeout(v);
  }, [n, t, e]);
};
function mw(e) {
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
const pw = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  var xl;
  const { viewerImageId: s, images: a, viewerMode: o, lineageImages: i, settings: c } = e, {
    restoreImages: d,
    bulkUpdateImageTags: h,
    handleEditTags: v,
    handleEditNotes: g,
    handleRestore: b,
    handleUpdateUserNotes: w,
    handleRestoreWorkflow: x,
    handleAddUnifiedLoader: S,
    handleSendToWorkflow: f,
    handleRunWithWorkflow: m,
    handleRunWithMask: u,
    handleEditSource: y
  } = Hs(e, t), { getParentChain: _, fetchLineage: k } = wm(a, c), [j, E] = p.useState(!1), [D, N] = p.useState(c["viewer.show_details_by_default"]), [L, $] = p.useState(null), Q = L ?? c["viewer.show_thumbnails"], [I, z] = p.useState(!1), [M, A] = p.useState(null), C = p.useRef(null), T = {
    isMountedRef: p.useRef(!0),
    viewerImageIdRef: p.useRef(s)
  };
  p.useEffect(() => (T.isMountedRef.current = !0, () => {
    T.isMountedRef.current = !1;
  }), [T.isMountedRef]), p.useEffect(() => {
    T.viewerImageIdRef.current = s;
  }, [T.viewerImageIdRef, s]);
  const P = p.useMemo(() => {
    const Ee = e.searchQuery.trim() !== "";
    if (o === "lighttable" && e.viewerLightTableSlotId) {
      const ut = oe.getState(), _t = ut.buckets[e.viewerLightTableSlotId] || [], Ot = new Map(a.map((H) => [H.id, H])), V = new Map(i.map((H) => [H.id, H]));
      return _t.map((H) => {
        const te = Number.parseInt(H, 10);
        return Ot.get(te) || V.get(te) || ut.images[H] || mw(te);
      });
    }
    return o === "lineage" ? i : a.filter(
      (ut) => ut.exists !== !1 && (c["gallery.show_parent_images"] || Ee || !ut.has_children)
    );
  }, [
    o,
    e.viewerLightTableSlotId,
    i,
    a,
    c,
    e.searchQuery
  ]), U = s === null ? -1 : P.findIndex((Ee) => Ee.id === s), F = (o === "lineage" && i.length > 0 ? i : o === "lighttable" ? P : a).find((Ee) => Ee.id === s) || (s === ((xl = e.viewerFallbackImage) == null ? void 0 : xl.id) ? e.viewerFallbackImage : void 0), { isFullscreen: O, toggleFullscreen: Z } = ow({
    overlayRef: C,
    settings: c,
    setShowDetails: N
  }), { handleNext: re, handlePrevious: de } = dw({
    dispatch: t,
    isFullscreen: O,
    settings: c,
    currentThumbnails: P,
    currentIndex: U,
    viewerMode: o,
    pagination: e.pagination,
    searchQuery: e.searchQuery,
    isJumping: I,
    setIsJumping: z,
    mountRefs: T
  }), {
    lastDeletedImages: fe,
    setLastDeletedImages: G,
    handleDelete: ee,
    handleTagEditAction: qe,
    handleRestoreAction: K,
    handleUndo: xt,
    executeCommand: Ye
  } = aw({
    state: e,
    dispatch: t,
    image: F,
    isFullscreen: O,
    currentThumbnails: P,
    currentIndex: U,
    viewerMode: o,
    lineageImages: i,
    images: a,
    mountRefs: T,
    handleNext: re,
    handlePrevious: de,
    handleEditTags: v,
    handleRestore: b,
    fetchLineage: k,
    restoreImages: d,
    bulkUpdateImageTags: h
  }), { isLoadingLineage: Tt } = cw({
    viewerMode: o,
    viewerImageId: s,
    lineageLength: i.length,
    dispatch: t,
    isMountedRef: T.isMountedRef
  });
  iw({
    viewerImageId: s,
    activeModalType: e.activeModal.type,
    viewScope: e.viewScope,
    settings: c,
    dispatch: t,
    isMountedRef: T.isMountedRef,
    toggleFullscreen: Z,
    handleNext: re,
    handlePrevious: de,
    handleDelete: () => {
      ee();
    },
    handleUndo: xt,
    handleTagEditAction: qe,
    handleRestoreAction: K,
    executeCommand: Ye,
    setShowDetails: N,
    setActiveShortcutKey: A
  }), p.useEffect(() => {
    s !== null && r(s).catch((Ee) => {
      W.error("Failed to fetch full image details for viewer:", Ee);
    });
  }, [r, s]), fw({
    viewerImageId: s,
    currentThumbnails: P,
    currentIndex: U,
    isFullscreen: O,
    settings: c,
    hasMore: e.pagination.hasMore,
    viewerMode: o,
    isLoading: e.isLoading,
    loadMoreImages: n,
    fetchFullImageDetails: r
  });
  const On = p.useMemo(() => {
    if (!Q || U === -1) return [];
    const Ee = c["viewer.thumbnail_window_size"], ut = Math.floor(Ee / 2);
    let _t = Math.max(0, U - ut);
    const Ot = Math.min(P.length, _t + Ee);
    return Ot === P.length && (_t = Math.max(0, Ot - Ee)), P.slice(_t, Ot).map((V, H) => ({
      img: V,
      absIndex: _t + H
    }));
  }, [P, U, c, Q]), _r = p.useMemo(() => F ? _(F) : [], [_, F]);
  return p.useEffect(() => {
    var Ee, ut;
    if (s !== null) {
      if (Q) {
        const _t = document.querySelector(".meld-viewer-thumbnail--active");
        _t && _t.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((Ee = document.activeElement) == null ? void 0 : Ee.tagName) === "CANVAS" && document.activeElement.blur(), (ut = C.current) == null || ut.focus();
    }
  }, [Q, s]), {
    isFullscreen: O,
    showDetails: D,
    setShowDetails: N,
    showThumbnails: Q,
    setShowThumbnailsOverride: $,
    isLoadingLineage: Tt,
    isJumping: I,
    isMenuOpen: j,
    setIsMenuOpen: E,
    activeShortcutKey: M,
    lastDeletedImages: fe,
    setLastDeletedImages: G,
    overlayRef: C,
    handleNext: re,
    handlePrevious: de,
    handleDelete: ee,
    handleUpdateUserNotes: w,
    handleEditNotes: () => F && g(F),
    handleTagEdit: qe,
    handleRestore: K,
    handleUndo: xt,
    handleRestoreWorkflow: async () => {
      if (!F) return;
      await x(F) && t({ type: "CLOSE_VIEWER" });
    },
    handleAddUnifiedLoader: async () => {
      if (!F) return;
      await S(F) && t({ type: "CLOSE_VIEWER" });
    },
    handleSendToWorkflow: () => {
      if (!F) return;
      f(F) && t({ type: "CLOSE_VIEWER" });
    },
    handleRunWithWorkflow: () => F && m(F),
    handleRunWithMask: (Ee) => F && u(F, Ee),
    handleEditSource: () => F && y(F),
    toggleFullscreen: Z,
    currentIndex: U,
    currentThumbnails: P,
    image: F,
    windowedThumbnails: On,
    parentChain: _r
  };
}, bi = ({
  isMenuOpen: e,
  setIsMenuOpen: t,
  menuRef: n,
  settings: r,
  onAddUnifiedLoader: s,
  onRestoreWorkflow: a,
  onSendToWorkflow: o,
  onRunWithWorkflow: i,
  onRunWithMask: c,
  onEditSource: d,
  onEditTags: h,
  onEditNotes: v,
  onDelete: g,
  onRestore: b,
  showRestore: w,
  deleteLabel: x,
  showQuickShortcuts: S = !0,
  variant: f = "default",
  iconSize: m = 16,
  buttonClassName: u = ""
}) => {
  const [y, _] = p.useState("left");
  p.useEffect(() => {
    e && n.current && (n.current.getBoundingClientRect().left < 200 ? _("right") : _("left"));
  }, [e, n]);
  const k = (D) => {
    switch (D) {
      case "add_unified_loader":
        return s;
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
        return b;
      case "delete_or_trash":
        return g;
      default:
        return null;
    }
  }, j = [
    r["gallery.quick_shortcut.1"],
    r["gallery.quick_shortcut.2"],
    r["gallery.quick_shortcut.3"]
  ].filter((D) => D && D !== ""), E = [
    "meld-image-card__menu-container",
    f === "thumbnail_overlay_top_right" && "meld-image-card__menu-container--thumbnail-overlay"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ l.jsxs("div", { className: E, ref: n, children: [
    /* @__PURE__ */ l.jsx(
      "button",
      {
        type: "button",
        className: `meld-image-card__menu-btn ${u}`,
        onClick: (D) => {
          D.stopPropagation(), t(!e);
        },
        title: "Menu",
        children: /* @__PURE__ */ l.jsx(Cg, { size: m })
      }
    ),
    S && j.map((D, N) => {
      const L = tm.find((I) => I.id === D);
      if (!L || !L.icon) return null;
      const $ = L.icon, Q = k(D);
      return !Q || D === "restore_image" && !w ? null : /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: `meld-image-card__menu-btn ${u}`,
          onClick: (I) => {
            I.stopPropagation(), Q();
          },
          title: L.label,
          children: /* @__PURE__ */ l.jsx($, { size: m })
        },
        `${D}-${N}`
      );
    }),
    e && /* @__PURE__ */ l.jsx(
      "div",
      {
        className: `meld-image-card__menu ${y === "right" ? "meld-image-card__menu--right" : ""}`,
        children: [
          {
            id: "add_unified_loader",
            label: "Add Unified Loader",
            icon: Qf,
            handler: s
          },
          {
            id: "send_to_workflow",
            label: "Send to Workflow",
            icon: qf,
            handler: o
          },
          {
            id: "send_to_workflow_mask",
            label: "Send to Workflow (Mask)",
            icon: Yf,
            handler: () => c("apply")
          },
          {
            id: "queue_workflow",
            label: "Queue Workflow",
            icon: Kf,
            handler: i
          },
          {
            id: "queue_workflow_mask",
            label: "Queue Workflow (Mask)",
            icon: Gf,
            handler: () => c("run")
          },
          {
            id: "restore_full_workflow",
            label: "Restore Full Workflow",
            icon: Hf,
            handler: a
          },
          {
            id: "edit_tags",
            label: "Edit Tags",
            icon: Zf,
            handler: h
          },
          {
            id: "edit_notes",
            label: "Edit Notes",
            icon: Jf,
            handler: v
          },
          {
            id: "edit_source_image",
            label: "Edit Source Image",
            icon: Xf,
            handler: d
          },
          ...w ? [
            {
              id: "restore_image",
              label: "Restore Image",
              icon: em,
              handler: b,
              color: "var(--meld-accent-color)"
            }
          ] : [],
          {
            id: "delete_or_trash",
            label: x,
            icon: Gt,
            handler: g,
            className: "meld-image-card__menu-item--danger",
            color: "var(--meld-danger-color)"
          }
        ].map((D) => /* @__PURE__ */ l.jsxs(
          "button",
          {
            type: "button",
            className: `meld-image-card__menu-item ${D.className || ""}`,
            onMouseDown: (N) => N.stopPropagation(),
            onClick: (N) => {
              N.preventDefault(), N.stopPropagation(), D.handler(), t(!1);
            },
            "aria-label": D.label,
            children: [
              /* @__PURE__ */ l.jsx(D.icon, { size: 14, color: D.color }),
              /* @__PURE__ */ l.jsx("span", { children: D.label })
            ]
          },
          D.id
        ))
      }
    )
  ] });
}, hw = ({
  settings: e,
  activeShortcutKey: t
}) => e["viewer.shortcut.show_cheat_sheet"] ? /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-cheat-sheet", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((n) => {
  const r = String(n), s = e[`viewer.shortcut.${r}`];
  return typeof s == "string" && s ? /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `meld-viewer-cheat-sheet__item ${t === r ? "meld-viewer-cheat-sheet__item--active" : ""}`,
      children: [
        /* @__PURE__ */ l.jsx("span", { className: "meld-viewer-cheat-sheet__key", children: n }),
        /* @__PURE__ */ l.jsx("span", { className: "meld-viewer-cheat-sheet__cmd", children: s.replace("tag-toggle:", "+/- ") })
      ]
    },
    n
  ) : null;
}) }) : null, gw = ({
  image: e,
  isFullscreen: t,
  settings: n,
  showIcons: r,
  parentChain: s,
  dispatch: a,
  onEditNotes: o
}) => {
  const [i, c] = p.useState("idle"), [d, h] = p.useState(null), v = p.useRef(null), g = p.useCallback(async (_, k) => {
    try {
      await navigator.clipboard.writeText(_), v.current && (clearTimeout(v.current), v.current = null), h(k), v.current = setTimeout(() => {
        h(null), v.current = null;
      }, 2e3);
    } catch {
    }
  }, []);
  p.useEffect(() => (c("idle"), h(null), () => {
    v.current && (clearTimeout(v.current), v.current = null);
  }), []);
  const b = t ? n["fullscreen.details.show_user_notes"] : n["viewer.details.show_user_notes"], w = b === "always" || b === "if_present" && e.user_notes, [x, S] = p.useState([]), [f, m] = p.useState(!1), u = t ? n["fullscreen.details.show_core_prompt"] : n["viewer.details.show_core_prompt"], y = t ? n["fullscreen.details.core_prompt_count"] : n["viewer.details.core_prompt_count"];
  return p.useEffect(() => {
    if (!u) {
      S([]);
      return;
    }
    const _ = e.positive_prompt || e.positive || "";
    if (!_.trim()) {
      S([]);
      return;
    }
    const k = Array.from(
      new Set(
        _.split(",").map((D) => D.trim()).filter((D) => D.length > 0)
      )
    );
    if (k.length === 0) {
      S([]);
      return;
    }
    let j = !0;
    return (async () => {
      m(!0);
      try {
        const { fetchAnalyticsCounts: D } = await Promise.resolve().then(() => lv), N = await D("positive_prompts", k);
        if (!j) return;
        const L = k.map(($) => ({
          name: $,
          count: N[$] ?? 0
        })).sort(($, Q) => $.count - Q.count);
        S(L.slice(0, y));
      } catch (D) {
        W.error("Failed to fetch core prompt counts", D);
      } finally {
        j && m(!1);
      }
    })(), () => {
      j = !1;
    };
  }, [e.positive_prompt, e.positive, u, y]), /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `meld-viewer-details-overlay ${t ? "meld-viewer-details-overlay--fullscreen" : ""} ${r ? "" : "meld-viewer-details-overlay--no-icons"}`,
      children: [
        (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) !== "none" && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) === "filepath" ? "Filepath" : "Filename" }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) === "filepath" ? "Copy filepath" : "Copy filename",
                onClick: (_) => {
                  _.stopPropagation();
                  const k = (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename;
                  g(k, "filepath");
                },
                children: d === "filepath" ? /* @__PURE__ */ l.jsx(lt, { size: 16 }) : /* @__PURE__ */ l.jsx(St, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-value", children: (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename })
        ] }),
        (t ? n["fullscreen.details.show_dimensions"] : n["viewer.details.show_dimensions"]) && e.width && e.height && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: "Dimensions" }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy dimensions",
                onClick: (_) => {
                  _.stopPropagation(), g(`${e.width} x ${e.height} px`, "dimensions");
                },
                children: d === "dimensions" ? /* @__PURE__ */ l.jsx(lt, { size: 16 }) : /* @__PURE__ */ l.jsx(St, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-value", children: [
            e.width,
            " x ",
            e.height,
            " px"
          ] })
        ] }),
        (t ? n["fullscreen.details.show_created_at"] : n["viewer.details.show_created_at"]) && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: "Created At" }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy created timestamp",
                onClick: (_) => {
                  _.stopPropagation(), g(new Date(e.created_at * 1e3).toLocaleString(), "created_at");
                },
                children: d === "created_at" ? /* @__PURE__ */ l.jsx(lt, { size: 16 }) : /* @__PURE__ */ l.jsx(St, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-value", children: new Date(e.created_at * 1e3).toLocaleString() })
        ] }),
        e.deleted_at && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: "Deleted At" }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy deleted timestamp",
                onClick: (_) => {
                  _.stopPropagation();
                  const k = e.deleted_at;
                  k && g(new Date(k * 1e3).toLocaleString(), "deleted_at");
                },
                children: d === "deleted_at" ? /* @__PURE__ */ l.jsx(lt, { size: 16 }) : /* @__PURE__ */ l.jsx(St, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-value", children: new Date(e.deleted_at * 1e3).toLocaleString() })
        ] }),
        (t ? n["fullscreen.details.show_model_name"] : n["viewer.details.show_model_name"]) && e.model_name && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: "Model" }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy model",
                onClick: (_) => {
                  _.stopPropagation();
                  const k = e.model_name;
                  k && g(k, "model");
                },
                children: d === "model" ? /* @__PURE__ */ l.jsx(lt, { size: 16 }) : /* @__PURE__ */ l.jsx(St, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-value", children: e.model_name })
        ] }),
        (t ? n["fullscreen.details.show_source"] : n["viewer.details.show_source"]) && s.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: "Source" }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-tags", children: /* @__PURE__ */ l.jsx("div", { className: "meld-lineage-thumbs", children: s.map(
            (_, k) => _.imgSrc && /* @__PURE__ */ l.jsx(
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
                onClick: (j) => {
                  j.stopPropagation(), a({
                    type: "OPEN_VIEWER",
                    payload: {
                      id: _.id || e.id,
                      mode: "lineage"
                    }
                  });
                },
                title: k === 0 ? "Source" : k === 1 ? "Grand-Source" : `Ancestor (S${k + 1})`,
                "aria-label": k === 0 ? "View source image" : k === 1 ? "View grand-source image" : `View ancestor image (S${k + 1})`,
                children: /* @__PURE__ */ l.jsx(
                  "img",
                  {
                    src: _.imgSrc,
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
              _.id || k
            )
          ) }) })
        ] }),
        (t ? n["fullscreen.details.show_positive_prompt"] : n["viewer.details.show_positive_prompt"]) && (e.positive_prompt || e.positive) && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: "Positive" }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy positive prompt",
                onClick: (_) => {
                  _.stopPropagation(), g(e.positive_prompt || e.positive || "", "positive");
                },
                children: d === "positive" ? /* @__PURE__ */ l.jsx(lt, { size: 16 }) : /* @__PURE__ */ l.jsx(St, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ l.jsx(
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
        u && (f || x.length > 0) && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-label", children: [
              "Core Prompt",
              f && /* @__PURE__ */ l.jsx("span", { className: "meld-notes__status", children: "Loading..." })
            ] }),
            !f && x.length > 0 && /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy core prompt",
                onClick: (_) => {
                  _.stopPropagation(), g(x.map((k) => k.name).join(", "), "core_prompt");
                },
                children: d === "core_prompt" ? /* @__PURE__ */ l.jsx(lt, { size: 16 }) : /* @__PURE__ */ l.jsx(St, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-tags", children: x.map((_, k) => /* @__PURE__ */ l.jsxs(
            "span",
            {
              className: "meld-viewer-details-tag",
              title: `Usage count: ${_.count}`,
              children: [
                _.name,
                " ",
                /* @__PURE__ */ l.jsxs("span", { className: "meld-viewer-details-tag-count", children: [
                  "(",
                  _.count,
                  ")"
                ] })
              ]
            },
            `${_.name}-${k}`
          )) })
        ] }),
        (t ? n["fullscreen.details.show_negative_prompt"] : n["viewer.details.show_negative_prompt"]) && (e.negative_prompt || e.negative) && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: "Negative" }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy negative prompt",
                onClick: (_) => {
                  _.stopPropagation(), g(e.negative_prompt || e.negative || "", "negative");
                },
                children: d === "negative" ? /* @__PURE__ */ l.jsx(lt, { size: 16 }) : /* @__PURE__ */ l.jsx(St, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ l.jsx(
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
        (t ? n["fullscreen.details.show_tags"] : n["viewer.details.show_tags"]) && e.tags && e.tags.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: "Tags" }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy tags",
                onClick: (_) => {
                  var k;
                  _.stopPropagation(), g(((k = e.tags) == null ? void 0 : k.join(", ")) ?? "", "tags");
                },
                children: d === "tags" ? /* @__PURE__ */ l.jsx(lt, { size: 16 }) : /* @__PURE__ */ l.jsx(St, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-tags", children: e.tags.map((_) => /* @__PURE__ */ l.jsx("span", { className: "meld-viewer-details-tag", children: _ }, _)) })
        ] }),
        w && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item meld-viewer-details-item--notes", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-label", children: [
              "Notes",
              i === "saving" && /* @__PURE__ */ l.jsx("span", { className: "meld-notes__status", children: "Saving..." })
            ] }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy notes",
                onClick: (_) => {
                  _.stopPropagation(), g(e.user_notes || "", "notes");
                },
                children: d === "notes" ? /* @__PURE__ */ l.jsx(lt, { size: 16 }) : /* @__PURE__ */ l.jsx(St, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-viewer-notes-preview",
              onClick: (_) => {
                _.stopPropagation(), o == null || o();
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
              children: e.user_notes || /* @__PURE__ */ l.jsx("span", { style: { color: "var(--meld-text-secondary)" }, children: "Add notes..." })
            }
          )
        ] })
      ]
    }
  );
}, xm = p.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r,
    viewerMode: s,
    lightTableSlotId: a
  }) => {
    const o = e.id === t, i = typeof n.parent_id == "number" && n.parent_id === e.id, c = typeof e.parent_id == "number" && e.parent_id === n.id, d = yt(e, 64);
    return /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-thumbnail-wrapper", children: /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: `meld-viewer-thumbnail ${o ? "meld-viewer-thumbnail--active" : ""} ${i ? "meld-viewer-thumbnail--parent" : ""} ${c ? "meld-viewer-thumbnail--child" : ""}`,
        onClick: () => r({
          type: "OPEN_VIEWER",
          payload: {
            id: e.id,
            mode: s,
            // Preserve slotId in lighttable mode
            ...s === "lighttable" && a ? { slotId: a } : {}
          }
        }),
        title: e.filename,
        children: [
          /* @__PURE__ */ l.jsx("img", { src: d, alt: e.filename }),
          (i || c) && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: `meld-viewer-thumbnail-relation-icon ${i ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`,
              title: i ? "Source Image" : "Derivative Image",
              children: i ? /* @__PURE__ */ l.jsx(_f, { size: 12 }) : /* @__PURE__ */ l.jsx(xf, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
xm.displayName = "ThumbnailItem";
const yw = ({
  windowedThumbnails: e,
  viewerImageId: t,
  currentImage: n,
  dispatch: r,
  isLoadingLineage: s,
  isLoading: a,
  viewerMode: o,
  lightTableSlotId: i
}) => /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-thumbnails-container", children: /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-thumbnails", children: [
  s ? /* @__PURE__ */ l.jsx(
    "div",
    {
      style: {
        padding: "10px",
        color: "var(--meld-text-secondary)"
      },
      children: "Loading lineage..."
    }
  ) : e.map(({ img: c }) => /* @__PURE__ */ l.jsx(
    xm,
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
  o === "gallery" && a && /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ l.jsx(hr, { className: "animate-spin", size: 20 }) })
] }) });
function vw() {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = he(), {
    isFullscreen: s,
    showDetails: a,
    setShowDetails: o,
    showThumbnails: i,
    setShowThumbnailsOverride: c,
    isLoadingLineage: d,
    isJumping: h,
    isMenuOpen: v,
    setIsMenuOpen: g,
    activeShortcutKey: b,
    setLastDeletedImages: w,
    overlayRef: x,
    handleNext: S,
    handlePrevious: f,
    handleTagEdit: m,
    handleEditNotes: u,
    handleRestore: y,
    handleRestoreWorkflow: _,
    handleAddUnifiedLoader: k,
    handleSendToWorkflow: j,
    handleRunWithWorkflow: E,
    handleRunWithMask: D,
    handleEditSource: N,
    handleDelete: L,
    toggleFullscreen: $,
    image: Q,
    windowedThumbnails: I,
    parentChain: z
  } = pw({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  }), M = p.useRef(null), A = p.useRef(null), { executeWorkflow: C } = _i(), T = p.useMemo(() => e.viewScope === "trash" ? "Delete Permanently" : "Move to Trash", [e.viewScope]);
  if (!Q) return null;
  const { viewerImageId: P, viewerMode: U } = e, R = s ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return ye.createPortal(
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: x,
        className: "meld-viewer-overlay",
        onClick: () => {
          e.activeModal.type === "none" && t({ type: "CLOSE_VIEWER" });
        },
        onKeyDown: (F) => {
          F.target === F.currentTarget && e.activeModal.type === "none" && (F.key === "Enter" || F.key === " " || F.key === "Spacebar") && (F.key === " " && F.preventDefault(), t({ type: "CLOSE_VIEWER" }));
        },
        role: "button",
        tabIndex: 0,
        "aria-label": "Close image viewer",
        children: [
          /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: `meld-viewer-content ${s ? "meld-viewer-content--fullscreen" : ""} ${i ? "meld-viewer-content--with-thumbnails" : ""}`,
              onClick: (F) => F.stopPropagation(),
              children: [
                R && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: y,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ l.jsx(hr, { size: 20 })
                    }
                  ),
                  !s && /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => c(!i),
                      type: "button",
                      title: i ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ l.jsx(bf, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => o(!a),
                      type: "button",
                      title: a ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ l.jsx(vg, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: $,
                      type: "button",
                      title: s ? "Exit Fullscreen (F/Enter)" : "Fullscreen (F/Enter)",
                      children: s ? /* @__PURE__ */ l.jsx(jg, { size: 20 }) : /* @__PURE__ */ l.jsx(Sg, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    bi,
                    {
                      isMenuOpen: v,
                      setIsMenuOpen: g,
                      menuRef: A,
                      settings: e.settings,
                      onAddUnifiedLoader: k,
                      onRestoreWorkflow: _,
                      onSendToWorkflow: j,
                      onRunWithWorkflow: E,
                      onRunWithMask: D,
                      onEditSource: N,
                      onEditTags: m,
                      onEditNotes: u,
                      onDelete: L,
                      deleteLabel: T,
                      showQuickShortcuts: !1,
                      iconSize: 20,
                      buttonClassName: "meld-viewer-action-btn"
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                      onClick: () => t({ type: "CLOSE_VIEWER" }),
                      type: "button",
                      title: "Close (Esc)",
                      children: /* @__PURE__ */ l.jsx(pe, { size: 20 })
                    }
                  )
                ] }),
                R && /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: f,
                    type: "button",
                    disabled: h,
                    title: "Previous (Left/Up)",
                    children: /* @__PURE__ */ l.jsx(Sf, { size: 32 })
                  }
                ),
                /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-image-container", children: [
                  h && /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ l.jsx(hr, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ l.jsx(
                    "img",
                    {
                      ref: M,
                      src: wi(Q),
                      alt: Q.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[s ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${h ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                R && /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: S,
                    type: "button",
                    title: "Next (Right/Down)",
                    children: /* @__PURE__ */ l.jsx(gi, { size: 32 })
                  }
                ),
                a && /* @__PURE__ */ l.jsx(
                  gw,
                  {
                    image: Q,
                    isFullscreen: s,
                    settings: e.settings,
                    showIcons: R,
                    parentChain: z,
                    dispatch: t,
                    onEditNotes: u
                  }
                ),
                !s && i && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ l.jsx(
                  yw,
                  {
                    windowedThumbnails: I,
                    viewerImageId: P,
                    currentImage: Q,
                    dispatch: t,
                    isLoadingLineage: d,
                    isLoading: e.isLoading,
                    viewerMode: U,
                    lightTableSlotId: e.viewerLightTableSlotId
                  }
                ),
                /* @__PURE__ */ l.jsx(hw, { settings: e.settings, activeShortcutKey: b })
              ]
            }
          ),
          e.activeModal.type === "workflow_selection" && /* @__PURE__ */ l.jsx(
            am,
            {
              images: e.activeModal.images,
              isMaskMode: !!e.activeModal.maskFilename || !!e.activeModal.isMaskSequence,
              onExecute: async (F, O) => {
                if (e.activeModal.type === "workflow_selection") {
                  if (e.activeModal.isMaskSequence)
                    return t({
                      type: "OPEN_MODAL",
                      payload: {
                        type: "mask_sequence_step",
                        images: e.activeModal.images,
                        currentIndex: 0,
                        workflowName: F,
                        targetLoaderNodeId: O
                      }
                    }), !1;
                  const Z = e.activeModal.maskFilename;
                  for (const re of e.activeModal.images)
                    await C(F, re, Z, O);
                  t({ type: "CLOSE_MODAL" }), t({ type: "CLOSE_VIEWER" });
                }
              }
            }
          ),
          e.activeModal.type === "node_selection" && /* @__PURE__ */ l.jsx(
            sm,
            {
              image: e.activeModal.image,
              nodes: e.activeModal.nodes,
              onSelect: (F) => {
                e.activeModal.type === "node_selection" && ul(e.activeModal.image, F);
              }
            }
          ),
          e.activeModal.type === "error" && /* @__PURE__ */ l.jsx(im, { message: e.activeModal.message }),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ l.jsx(
            om,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: w
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ l.jsx(cm, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ l.jsx(Pf, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ l.jsx(nm, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ l.jsx(
            rm,
            {
              imageIds: e.activeModal.imageIds,
              initialTags: e.activeModal.tags,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_editor" && /* @__PURE__ */ l.jsx(
            ki,
            {
              imageId: e.activeModal.imageId,
              mode: e.activeModal.mode,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_sequence_step" && /* @__PURE__ */ l.jsx(
            Uf,
            {
              images: e.activeModal.images,
              currentIndex: e.activeModal.currentIndex,
              workflowName: e.activeModal.workflowName,
              targetLoaderNodeId: e.activeModal.targetLoaderNodeId,
              onSuccess: () => {
                if (e.activeModal.type === "mask_sequence_step") {
                  const F = e.activeModal.currentIndex + 1;
                  F < e.activeModal.images.length ? t({
                    type: "OPEN_MODAL",
                    payload: {
                      ...e.activeModal,
                      currentIndex: F
                    }
                  }) : (t({ type: "CLOSE_MODAL" }), t({ type: "CLOSE_VIEWER" }));
                }
              },
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "note_edit" && /* @__PURE__ */ l.jsx(
            lm,
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
const ww = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: s } = he(), [a, o] = p.useState("gallery"), [i, c] = p.useState(""), d = e.searchQuery.trim() !== "", h = p.useRef(null), v = p.useRef(null), g = oe((S) => S.buckets), b = p.useMemo(() => {
    const S = /* @__PURE__ */ new Set();
    for (const f of Object.values(g))
      for (const m of f)
        S.add(Number(m));
    return S;
  }, [g]), w = p.useMemo(() => e.images.filter((S) => b.has(S.id) ? !1 : e.viewScope === "trash" ? S.exists !== !1 || e.settings["gallery.trash.show_missing"] : S.exists !== !1 && (e.settings["gallery.show_parent_images"] || d || !S.has_children)), [e.images, e.settings, e.viewScope, b, d]), x = w;
  return p.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && w.length === 0 && (W.log("GalleryPanel: Auto-loading more because all loaded images are hidden"), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    w.length,
    r
  ]), Ks({
    onKeyDown: (S) => {
      if (S.key !== "Escape")
        return;
      const f = !!document.querySelector(
        '[role="dialog"][aria-modal="true"], [role="alertdialog"][aria-modal="true"], .meld-modal-overlay'
      );
      e.activeModal.type !== "none" || f || e.selectedIds.size !== 0 && (t({ type: "CLEAR_SELECTION" }), fl(S));
    }
  }), p.useEffect(() => {
    const S = new IntersectionObserver(
      (m) => {
        const u = m[0];
        if (u && u.isIntersecting) {
          if (e.isLoading) {
            W.log("GalleryPanel: Intersection observed but already loading");
            return;
          }
          e.pagination.hasMore ? (W.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : W.log("GalleryPanel: Intersection observed but no more to load", {
            localCount: w.length,
            serverHasMore: e.pagination.hasMore
          });
        }
      },
      { threshold: 0, rootMargin: "800px" }
    ), f = h.current;
    return f && S.observe(f), () => {
      f && S.unobserve(f);
    };
  }, [
    r,
    e.isLoading,
    e.pagination.hasMore,
    w.length,
    e.images.length
  ]), p.useEffect(() => {
    e.viewerImageId !== null && (v.current = e.viewerImageId);
  }, [e.viewerImageId]), {
    state: e,
    dispatch: t,
    refreshImages: n,
    loadMoreImages: r,
    updateSetting: s,
    viewMode: a,
    setViewMode: o,
    lastSearchQuery: i,
    setLastSearchQuery: c,
    localLimit: e.pagination.limit,
    displayedImages: w,
    visibleImages: x,
    isSearchActive: d,
    loadMoreRef: h
  };
}, xw = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = he(), { handleRunWithWorkflow: s, handleRunWithMask: a } = Hs(e, t), o = e.selectedIds.size, [i, c] = p.useState(!1), [d, h] = p.useState(null), v = p.useRef(null), g = p.useRef(null), b = hm("bulkActionBar");
  if (Le({
    onEscape: () => c(!1),
    enabled: i
  }), ml({
    enabled: i,
    insideRefs: [v, g],
    onOutside: () => c(!1)
  }), o === 0) return null;
  const w = e.viewScope === "trash", x = () => e.images.filter((j) => e.selectedIds.has(j.id)), S = () => {
    if (i) {
      c(!1);
      return;
    }
    v.current && (h(v.current.getBoundingClientRect()), c(!0));
  }, f = (j) => {
    j(), c(!1);
  }, m = () => {
    const j = x(), E = /* @__PURE__ */ new Set();
    for (const D of j)
      if (D.tags)
        for (const N of D.tags)
          E.add(N);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(E)
      }
    });
  }, u = () => {
    const j = x();
    s(j);
  }, y = () => {
    const j = x();
    j.length > 0 && a(j, "run");
  }, _ = () => {
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "download_options",
        imageIds: Array.from(e.selectedIds)
      }
    });
  }, k = /* @__PURE__ */ l.jsxs("div", { className: `meld-bulk-bar ${w ? "meld-bulk-bar--trash" : ""}`, children: [
    /* @__PURE__ */ l.jsxs("span", { className: "meld-bulk-bar__info", children: [
      o,
      " items selected"
    ] }),
    /* @__PURE__ */ l.jsxs(
      "button",
      {
        ref: v,
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--action",
        onClick: S,
        children: [
          /* @__PURE__ */ l.jsx(bg, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
          "Action"
        ]
      }
    ),
    /* @__PURE__ */ l.jsxs(
      "button",
      {
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--cancel",
        onClick: () => t({ type: "CLEAR_SELECTION" }),
        children: [
          /* @__PURE__ */ l.jsx(pe, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
          "Cancel"
        ]
      }
    ),
    i && d && /* @__PURE__ */ l.jsx(
      "div",
      {
        ref: g,
        className: "meld-bulk-bar-menu",
        style: {
          bottom: window.innerHeight - d.top + 5,
          left: d.left
        },
        children: w ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--restore",
              onClick: () => f(r),
              children: [
                /* @__PURE__ */ l.jsx(hr, { size: 14 }),
                " Restore"
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--danger",
              onClick: () => f(n),
              children: [
                /* @__PURE__ */ l.jsx(Gt, { size: 14 }),
                " Delete Permanently"
              ]
            }
          )
        ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item",
              onClick: () => f(m),
              children: [
                /* @__PURE__ */ l.jsx(xr, { size: 14 }),
                " Edit Tags"
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item",
              onClick: () => f(u),
              children: [
                /* @__PURE__ */ l.jsx(yi, { size: 14 }),
                " Queue Workflow"
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item",
              onClick: () => f(y),
              children: [
                /* @__PURE__ */ l.jsx(Ng, { size: 14 }),
                " Queue Workflow (Mask)"
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item",
              onClick: () => f(_),
              children: [
                /* @__PURE__ */ l.jsx(cl, { size: 14 }),
                " Download"
              ]
            }
          ),
          /* @__PURE__ */ l.jsx("div", { className: "meld-bulk-bar-menu__divider" }),
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--danger",
              onClick: () => f(n),
              children: [
                /* @__PURE__ */ l.jsx(Gt, { size: 14 }),
                " Move to Trash"
              ]
            }
          )
        ] })
      }
    )
  ] });
  return ye.createPortal(k, b);
};
function Un(e, t, n) {
  let r = n.initialDeps ?? [], s, a = !0;
  function o() {
    var i, c, d;
    let h;
    n.key && ((i = n.debug) != null && i.call(n)) && (h = Date.now());
    const v = e();
    if (!(v.length !== r.length || v.some((w, x) => r[x] !== w)))
      return s;
    r = v;
    let b;
    if (n.key && ((c = n.debug) != null && c.call(n)) && (b = Date.now()), s = t(...v), n.key && ((d = n.debug) != null && d.call(n))) {
      const w = Math.round((Date.now() - h) * 100) / 100, x = Math.round((Date.now() - b) * 100) / 100, S = x / 16, f = (m, u) => {
        for (m = String(m); m.length < u; )
          m = " " + m;
        return m;
      };
      console.info(
        `%c⏱ ${f(x, 5)} /${f(w, 5)} ms`,
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
    return n != null && n.onChange && !(a && n.skipInitialOnChange) && n.onChange(s), a = !1, s;
  }
  return o.updateDeps = (i) => {
    r = i;
  }, o;
}
function Zc(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const _w = (e, t) => Math.abs(e - t) < 1.01, kw = (e, t, n) => {
  let r;
  return function(...s) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, s), n);
  };
}, Jc = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, Sw = (e) => e, bw = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let s = t; s <= n; s++)
    r.push(s);
  return r;
}, jw = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  const s = (o) => {
    const { width: i, height: c } = o;
    t({ width: Math.round(i), height: Math.round(c) });
  };
  if (s(Jc(n)), !r.ResizeObserver)
    return () => {
    };
  const a = new r.ResizeObserver((o) => {
    const i = () => {
      const c = o[0];
      if (c != null && c.borderBoxSize) {
        const d = c.borderBoxSize[0];
        if (d) {
          s({ width: d.inlineSize, height: d.blockSize });
          return;
        }
      }
      s(Jc(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
  });
  return a.observe(n, { box: "border-box" }), () => {
    a.unobserve(n);
  };
}, ed = {
  passive: !0
}, td = typeof window > "u" ? !0 : "onscrollend" in window, Cw = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let s = 0;
  const a = e.options.useScrollendEvent && td ? () => {
  } : kw(
    r,
    () => {
      t(s, !1);
    },
    e.options.isScrollingResetDelay
  ), o = (h) => () => {
    const { horizontal: v, isRtl: g } = e.options;
    s = v ? n.scrollLeft * (g && -1 || 1) : n.scrollTop, a(), t(s, h);
  }, i = o(!0), c = o(!1);
  n.addEventListener("scroll", i, ed);
  const d = e.options.useScrollendEvent && td;
  return d && n.addEventListener("scrollend", c, ed), () => {
    n.removeEventListener("scroll", i), d && n.removeEventListener("scrollend", c);
  };
}, Ew = (e, t, n) => {
  if (t != null && t.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Nw = (e, {
  adjustments: t = 0,
  behavior: n
}, r) => {
  var s, a;
  const o = e + t;
  (a = (s = r.scrollElement) == null ? void 0 : s.scrollTo) == null || a.call(s, {
    [r.options.horizontal ? "left" : "top"]: o,
    behavior: n
  });
};
class Iw {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.currentScrollToIndex = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let n = null;
      const r = () => n || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : n = new this.targetWindow.ResizeObserver((s) => {
        s.forEach((a) => {
          const o = () => {
            this._measureElement(a.target, a);
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(o) : o();
        });
      }));
      return {
        disconnect: () => {
          var s;
          (s = r()) == null || s.disconnect(), n = null;
        },
        observe: (s) => {
          var a;
          return (a = r()) == null ? void 0 : a.observe(s, { box: "border-box" });
        },
        unobserve: (s) => {
          var a;
          return (a = r()) == null ? void 0 : a.unobserve(s);
        }
      };
    })(), this.range = null, this.setOptions = (n) => {
      Object.entries(n).forEach(([r, s]) => {
        typeof s > "u" && delete n[r];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: Sw,
        rangeExtractor: bw,
        onChange: () => {
        },
        measureElement: Ew,
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
      var r, s;
      (s = (r = this.options).onChange) == null || s.call(r, this, n);
    }, this.maybeNotify = Un(
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
        this.scrollElement = r, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((n = this.scrollElement) == null ? void 0 : n.window) ?? null, this.elementsCache.forEach((s) => {
          this.observer.observe(s);
        }), this.unsubs.push(
          this.options.observeElementRect(this, (s) => {
            this.scrollRect = s, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (s, a) => {
            this.scrollAdjustments = 0, this.scrollDirection = a ? this.getScrollOffset() < s ? "forward" : "backward" : null, this.scrollOffset = s, this.isScrolling = a, this.maybeNotify();
          })
        ), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (n, r) => {
      const s = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
      for (let o = r - 1; o >= 0; o--) {
        const i = n[o];
        if (s.has(i.lane))
          continue;
        const c = a.get(
          i.lane
        );
        if (c == null || i.end > c.end ? a.set(i.lane, i) : i.end < c.end && s.set(i.lane, !0), s.size === this.options.lanes)
          break;
      }
      return a.size === this.options.lanes ? Array.from(a.values()).sort((o, i) => o.end === i.end ? o.index - i.index : o.end - i.end)[0] : void 0;
    }, this.getMeasurementOptions = Un(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled,
        this.options.lanes
      ],
      (n, r, s, a, o, i) => (this.prevLanes !== void 0 && this.prevLanes !== i && (this.lanesChangedFlag = !0), this.prevLanes = i, this.pendingMeasuredCacheIndexes = [], {
        count: n,
        paddingStart: r,
        scrollMargin: s,
        getItemKey: a,
        enabled: o,
        lanes: i
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Un(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: n, paddingStart: r, scrollMargin: s, getItemKey: a, enabled: o, lanes: i }, c) => {
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
          const b = h[g];
          b && (v[b.lane] = g);
        }
        for (let g = d; g < n; g++) {
          const b = a(g), w = this.laneAssignments.get(g);
          let x, S;
          if (w !== void 0 && this.options.lanes > 1) {
            x = w;
            const y = v[x], _ = y !== void 0 ? h[y] : void 0;
            S = _ ? _.end + this.options.gap : r + s;
          } else {
            const y = this.options.lanes === 1 ? h[g - 1] : this.getFurthestMeasurement(h, g);
            S = y ? y.end + this.options.gap : r + s, x = y ? y.lane : g % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(g, x);
          }
          const f = c.get(b), m = typeof f == "number" ? f : this.options.estimateSize(g), u = S + m;
          h[g] = {
            index: g,
            start: S,
            size: m,
            end: u,
            key: b,
            lane: x
          }, v[x] = g;
        }
        return this.measurementsCache = h, h;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = Un(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, r, s, a) => this.range = n.length > 0 && r > 0 ? Mw({
        measurements: n,
        outerSize: r,
        scrollOffset: s,
        lanes: a
      }) : null,
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Un(
      () => {
        let n = null, r = null;
        const s = this.calculateRange();
        return s && (n = s.startIndex, r = s.endIndex), this.maybeNotify.updateDeps([this.isScrolling, n, r]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          n,
          r
        ];
      },
      (n, r, s, a, o) => a === null || o === null ? [] : n({
        startIndex: a,
        endIndex: o,
        overscan: r,
        count: s
      }),
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (n) => {
      const r = this.options.indexAttribute, s = n.getAttribute(r);
      return s ? parseInt(s, 10) : (console.warn(
        `Missing attribute name '${r}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (n, r) => {
      const s = this.indexFromElement(n), a = this.measurementsCache[s];
      if (!a)
        return;
      const o = a.key, i = this.elementsCache.get(o);
      i !== n && (i && this.observer.unobserve(i), this.observer.observe(n), this.elementsCache.set(o, n)), n.isConnected && this.resizeItem(s, this.options.measureElement(n, r, this));
    }, this.resizeItem = (n, r) => {
      const s = this.measurementsCache[n];
      if (!s)
        return;
      const a = this.itemSizeCache.get(s.key) ?? s.size, o = r - a;
      o !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(s, o, this) : s.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += o,
        behavior: void 0
      }), this.pendingMeasuredCacheIndexes.push(s.index), this.itemSizeCache = new Map(this.itemSizeCache.set(s.key, r)), this.notify(!1));
    }, this.measureElement = (n) => {
      if (!n) {
        this.elementsCache.forEach((r, s) => {
          r.isConnected || (this.observer.unobserve(r), this.elementsCache.delete(s));
        });
        return;
      }
      this._measureElement(n, void 0);
    }, this.getVirtualItems = Un(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (n, r) => {
        const s = [];
        for (let a = 0, o = n.length; a < o; a++) {
          const i = n[a], c = r[i];
          s.push(c);
        }
        return s;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (n) => {
      const r = this.getMeasurements();
      if (r.length !== 0)
        return Zc(
          r[_m(
            0,
            r.length - 1,
            (s) => Zc(r[s]).start,
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
    }, this.getOffsetForAlignment = (n, r, s = 0) => {
      if (!this.scrollElement) return 0;
      const a = this.getSize(), o = this.getScrollOffset();
      r === "auto" && (r = n >= o + a ? "end" : "start"), r === "center" ? n += (s - a) / 2 : r === "end" && (n -= a);
      const i = this.getMaxScrollOffset();
      return Math.max(Math.min(i, n), 0);
    }, this.getOffsetForIndex = (n, r = "auto") => {
      n = Math.max(0, Math.min(n, this.options.count - 1));
      const s = this.measurementsCache[n];
      if (!s)
        return;
      const a = this.getSize(), o = this.getScrollOffset();
      if (r === "auto")
        if (s.end >= o + a - this.options.scrollPaddingEnd)
          r = "end";
        else if (s.start <= o + this.options.scrollPaddingStart)
          r = "start";
        else
          return [o, r];
      if (r === "end" && n === this.options.count - 1)
        return [this.getMaxScrollOffset(), r];
      const i = r === "end" ? s.end + this.options.scrollPaddingEnd : s.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(i, r, s.size),
        r
      ];
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.scrollToOffset = (n, { align: r = "start", behavior: s } = {}) => {
      s === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(n, r), {
        adjustments: void 0,
        behavior: s
      });
    }, this.scrollToIndex = (n, { align: r = "auto", behavior: s } = {}) => {
      s === "smooth" && this.isDynamicMode() && console.warn(
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
        this._scrollToOffset(v, { adjustments: void 0, behavior: s }), this.targetWindow.requestAnimationFrame(() => {
          if (!this.targetWindow) return;
          const b = () => {
            if (this.currentScrollToIndex !== n) return;
            const w = this.getScrollOffset(), x = this.getOffsetForIndex(n, g);
            if (!x) {
              console.warn("Failed to get offset for index:", n);
              return;
            }
            _w(x[0], w) || c(g);
          };
          this.isDynamicMode() ? this.targetWindow.requestAnimationFrame(b) : b();
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
      let s;
      if (r.length === 0)
        s = this.options.paddingStart;
      else if (this.options.lanes === 1)
        s = ((n = r[r.length - 1]) == null ? void 0 : n.end) ?? 0;
      else {
        const a = Array(this.options.lanes).fill(null);
        let o = r.length - 1;
        for (; o >= 0 && a.some((i) => i === null); ) {
          const i = r[o];
          a[i.lane] === null && (a[i.lane] = i.end), o--;
        }
        s = Math.max(...a.filter((i) => i !== null));
      }
      return Math.max(
        s - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (n, {
      adjustments: r,
      behavior: s
    }) => {
      this.options.scrollToFn(n, { behavior: s, adjustments: r }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(t);
  }
}
const _m = (e, t, n, r) => {
  for (; e <= t; ) {
    const s = (e + t) / 2 | 0, a = n(s);
    if (a < r)
      e = s + 1;
    else if (a > r)
      t = s - 1;
    else
      return s;
  }
  return e > 0 ? e - 1 : 0;
};
function Mw({
  measurements: e,
  outerSize: t,
  scrollOffset: n,
  lanes: r
}) {
  const s = e.length - 1, a = (c) => e[c].start;
  if (e.length <= r)
    return {
      startIndex: 0,
      endIndex: s
    };
  let o = _m(
    0,
    s,
    a,
    n
  ), i = o;
  if (r === 1)
    for (; i < s && e[i].end < n + t; )
      i++;
  else if (r > 1) {
    const c = Array(r).fill(0);
    for (; i < s && c.some((h) => h < n + t); ) {
      const h = e[i];
      c[h.lane] = h.end, i++;
    }
    const d = Array(r).fill(n + t);
    for (; o >= 0 && d.some((h) => h >= n); ) {
      const h = e[o];
      d[h.lane] = h.start, o--;
    }
    o = Math.max(0, o - o % r), i = Math.min(s, i + (r - 1 - i % r));
  }
  return { startIndex: o, endIndex: i };
}
const nd = typeof document < "u" ? p.useLayoutEffect : p.useEffect;
function Tw({
  useFlushSync: e = !0,
  ...t
}) {
  const n = p.useReducer(() => ({}), {})[1], r = {
    ...t,
    onChange: (a, o) => {
      var i;
      e && o ? ye.flushSync(n) : n(), (i = t.onChange) == null || i.call(t, a, o);
    }
  }, [s] = p.useState(
    () => new Iw(r)
  );
  return s.setOptions(r), nd(() => s._didMount(), []), nd(() => s._willUpdate()), s;
}
function Lw(e) {
  return Tw({
    observeElementRect: jw,
    observeElementOffset: Cw,
    scrollToFn: Nw,
    ...e
  });
}
const km = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = he(), s = t.selectedIds.has(e.id), a = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: o,
    handleAddUnifiedLoader: i,
    handleEditSource: c,
    handleEditTags: d,
    handleSendToWorkflow: h,
    handleRunWithWorkflow: v,
    handleRunWithMask: g,
    handleRestore: b,
    handleDelete: w,
    handleEditNotes: x,
    handleUpdateUserNotes: S
  } = Hs(t, n), { getParentChain: f } = wm(t.images, t.settings), [m, u] = p.useState(null), [y, _] = p.useState(!1), [k, j] = p.useState(null), [E, D] = p.useState(!1), N = p.useRef(null);
  ml({
    enabled: y,
    insideRefs: [N],
    onOutside: () => _(!1)
  });
  const L = async (K, xt, Ye = !1) => {
    try {
      await navigator.clipboard.writeText(K), Ye ? (D(!0), setTimeout(() => D(!1), 2e3)) : (j(xt), setTimeout(() => j(null), 2e3));
    } catch (Tt) {
      W.error("Failed to copy text: ", Tt);
    }
  }, $ = p.useCallback(
    (K) => {
      if (K.key === "Escape") {
        if (m) {
          fl(K), u(null);
          return;
        }
        y && (fl(K), _(!1));
      }
    },
    [m, y]
  );
  Ks({
    enabled: y || m !== null,
    onKeyDown: $
  });
  const Q = f(e), z = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, M = t.settings["sidebar.thumbnail_size"] || 100, A = yt(e, Math.min(400, Math.round(M * 1.5)));
  return {
    state: t,
    dispatch: n,
    isSelected: s,
    viewMode: a,
    popupContent: m,
    setPopupContent: u,
    isMenuOpen: y,
    setIsMenuOpen: _,
    copiedLabel: k,
    popupCopied: E,
    menuRef: N,
    parentChain: Q,
    displayFilename: z,
    imgSrc: A,
    handleCopy: L,
    handleClick: (K) => {
      !K || typeof K.preventDefault != "function" || (K.shiftKey ? (K.preventDefault(), K.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : K.ctrlKey || K.metaKey || t.selectedIds.size > 0 ? (K.preventDefault(), K.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id }));
    },
    handleSelectToggle: (K) => {
      !K || typeof K.preventDefault != "function" || (K.preventDefault(), K.stopPropagation(), K.shiftKey ? n({ type: "SELECT_RANGE", payload: e.id }) : n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleContainerClick: (K) => {
      !K || typeof K.preventDefault != "function" || (K.shiftKey ? (K.preventDefault(), K.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : K.ctrlKey || K.metaKey || t.selectedIds.size > 0 ? (K.preventDefault(), K.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : (K.preventDefault(), K.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })));
    },
    handleMouseDown: (K) => {
      !K || typeof K.preventDefault != "function" || !K.target || K.target instanceof Element && K.target.closest("textarea, input, button, .meld-image-card__meta-content") || !K.shiftKey && !K.ctrlKey && !K.metaKey && s || (K.shiftKey || K.ctrlKey || K.metaKey || t.selectedIds.size > 0) && K.preventDefault();
    },
    handleKeyDown: (K) => {
      var Ye, Tt, On;
      !K || typeof K.preventDefault != "function" || ((Ye = document.activeElement) == null ? void 0 : Ye.tagName) === "INPUT" || ((Tt = document.activeElement) == null ? void 0 : Tt.tagName) === "TEXTAREA" || (On = document.activeElement) != null && On.isContentEditable || (K.key === "Enter" || K.key === " ") && (K.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
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
      h(e);
    },
    handleRestore: () => {
      b(e);
    },
    handleDelete: () => {
      w(e);
    },
    handleRunWithWorkflow: () => {
      v(e);
    },
    handleRunWithMask: (K = "run") => g(e, K),
    handleUpdateUserNotes: (K) => S(e.id, K),
    fetchFullImageDetails: r
  };
}, Aw = ({
  title: e,
  text: t,
  onClose: n,
  onCopy: r,
  isCopied: s
}) => (Le({ onEscape: n }), ye.createPortal(
  /* @__PURE__ */ l.jsx(
    "div",
    {
      className: "meld-prompt-popup__overlay",
      onClick: (a) => {
        a.stopPropagation(), n();
      },
      children: /* @__PURE__ */ l.jsxs("div", { className: "meld-prompt-popup__content", onClick: (a) => a.stopPropagation(), children: [
        /* @__PURE__ */ l.jsxs("div", { className: "meld-prompt-popup__header", children: [
          /* @__PURE__ */ l.jsx("span", { children: e }),
          /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
            s ? /* @__PURE__ */ l.jsx(lt, { size: 18, style: { color: "var(--meld-success-color)" }, "aria-hidden": !0 }) : /* @__PURE__ */ l.jsx(
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
                children: /* @__PURE__ */ l.jsx(St, { size: 18 })
              }
            ),
            /* @__PURE__ */ l.jsx(
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
                children: /* @__PURE__ */ l.jsx(pe, { size: 18 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ l.jsx("div", { className: "meld-prompt-popup__text", children: t })
      ] })
    }
  ),
  document.body
)), Sm = rn.memo(({ image: e }) => {
  const {
    state: t,
    dispatch: n,
    isSelected: r,
    popupContent: s,
    setPopupContent: a,
    isMenuOpen: o,
    setIsMenuOpen: i,
    copiedLabel: c,
    popupCopied: d,
    menuRef: h,
    parentChain: v,
    displayFilename: g,
    imgSrc: b,
    handleCopy: w,
    handleClick: x,
    handleSelectToggle: S,
    handleContainerClick: f,
    handleMouseDown: m,
    handleKeyDown: u,
    handleRestoreWorkflow: y,
    handleAddUnifiedLoader: _,
    handleEditSource: k,
    handleEditTags: j,
    handleEditNotes: E,
    handleSendToWorkflow: D,
    handleRestore: N,
    handleDelete: L,
    handleRunWithWorkflow: $,
    handleRunWithMask: Q,
    fetchFullImageDetails: I
  } = km(e), [z, M] = p.useState("idle");
  p.useEffect(() => {
    e.user_notes && z === "saving" && M("idle");
  }, [e.user_notes, z]);
  const A = (C) => {
    C.stopPropagation();
    let T = String(e.id);
    r && t.selectedIds.size > 0 && (T = Array.from(t.selectedIds).join(",")), C.dataTransfer.setData("text/plain", T), oe.getState().setIsOpen(!0);
  };
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `meld-image-card ${r ? "meld-image-card--selected" : ""} ${o ? "meld-image-card--menu-open" : ""}`,
      onClick: f,
      onMouseDown: m,
      onKeyDown: u,
      role: "button",
      tabIndex: 0,
      draggable: !0,
      onDragStart: A,
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__thumbnail-wrapper", children: [
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: `meld-image-card__select-checkbox ${r ? "meld-image-card__select-checkbox--checked" : ""}`,
              onClick: S,
              "aria-label": "Toggle selection",
              role: "checkbox",
              "aria-checked": r,
              children: r && /* @__PURE__ */ l.jsxs(
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
                    /* @__PURE__ */ l.jsx("title", { children: "Selected" }),
                    /* @__PURE__ */ l.jsx("polyline", { points: "20 6 9 17 4 12" })
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ l.jsx(
            "img",
            {
              src: b,
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
              onClick: (C) => {
                C.stopPropagation(), x(C);
              }
            }
          )
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__details", children: [
          (t.settings["sidebar.show_filename"] !== "none" || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__filename", children: [
            t.settings["sidebar.show_filename"] !== "none" && g,
            t.settings["sidebar.show_filename"] !== "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
            t.settings["sidebar.show_filename"] === "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
          ] }),
          t.settings["gallery.show_parent_image"] && v.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
            /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
            /* @__PURE__ */ l.jsx("div", { className: "meld-lineage-thumbs", children: v.map(
              (C, T) => C.imgSrc && /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-lineage-badge__parent-thumb meld-lineage-badge__parent-thumb-btn",
                  style: {
                    padding: 0,
                    border: "none",
                    background: "none"
                  },
                  onClick: (P) => {
                    P.stopPropagation(), n({
                      type: "OPEN_VIEWER",
                      payload: {
                        id: C.id || e.id,
                        mode: "lineage"
                      }
                    });
                  },
                  title: T === 0 ? "Source" : T === 1 ? "Grand-Source" : `Ancestor (S${T + 1})`,
                  "aria-label": T === 0 ? "View source image" : T === 1 ? "View grand-source image" : `View ancestor image (S${T + 1})`,
                  children: /* @__PURE__ */ l.jsx(
                    "img",
                    {
                      src: C.imgSrc,
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
                C.id || T
              )
            ) })
          ] }),
          t.settings["sidebar.show_created_at"] && /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__meta-item", children: [
            /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-label", children: "Created At" }),
            /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-content", children: new Date(e.created_at * 1e3).toLocaleString() })
          ] }),
          t.viewScope === "trash" && e.deleted_at && /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__meta-item", children: [
            /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-label", children: "Deleted At" }),
            /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-content", children: new Date(e.deleted_at * 1e3).toLocaleString() })
          ] }),
          t.settings["sidebar.show_model_name"] && /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: async (C) => {
                C.stopPropagation();
                const T = await I(e.id);
                a({
                  title: "Model",
                  text: T.model_name || "-"
                });
              },
              children: [
                /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (C) => {
                      C.stopPropagation();
                      const T = await I(e.id);
                      w(T.model_name || "-", "Model");
                    },
                    children: c === "Model" ? "Copied!" : "Model"
                  }
                ),
                /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-content", children: e.model_name || "-" })
              ]
            }
          ),
          t.settings["sidebar.show_positive_prompt"] && /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: async (C) => {
                C.stopPropagation();
                const T = await I(e.id);
                a({
                  title: "Positive Prompt",
                  text: T.positive_prompt || T.positive || "-"
                });
              },
              children: [
                /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (C) => {
                      C.stopPropagation();
                      const T = await I(e.id);
                      w(T.positive_prompt || T.positive || "-", "Positive");
                    },
                    children: c === "Positive" ? "Copied!" : "Positive"
                  }
                ),
                /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-content", children: e.positive_prompt || e.positive || "-" })
              ]
            }
          ),
          t.settings["sidebar.show_negative_prompt"] && /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: async (C) => {
                C.stopPropagation();
                const T = await I(e.id);
                a({
                  title: "Negative Prompt",
                  text: T.negative_prompt || T.negative || "-"
                });
              },
              children: [
                /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (C) => {
                      C.stopPropagation();
                      const T = await I(e.id);
                      w(T.negative_prompt || T.negative || "-", "Negative");
                    },
                    children: c === "Negative" ? "Copied!" : "Negative"
                  }
                ),
                /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-content", children: e.negative_prompt || e.negative || "-" })
              ]
            }
          ),
          t.settings["sidebar.show_tags"] && /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (C) => {
                C.stopPropagation(), j();
              },
              children: [
                /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((C) => /* @__PURE__ */ l.jsx("span", { className: "meld-image-card__tag", children: C }, C)) : /* @__PURE__ */ l.jsx(
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
          (t.settings["sidebar.show_user_notes"] === "always" || t.settings["sidebar.show_user_notes"] === "if_present" && e.user_notes) && /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__meta-item meld-image-card__meta-item--notes", children: [
            /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__meta-label", children: [
              "Notes",
              z === "saving" && /* @__PURE__ */ l.jsx("span", { className: "meld-notes__status", children: "Saving..." })
            ] }),
            /* @__PURE__ */ l.jsx(
              "div",
              {
                className: "meld-image-card__meta-content",
                onClick: (C) => {
                  C.stopPropagation(), E();
                },
                children: /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__notes-preview", children: e.user_notes || /* @__PURE__ */ l.jsx("span", { className: "meld-notes__placeholder", children: "Add notes..." }) })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ l.jsx(
          bi,
          {
            isMenuOpen: o,
            setIsMenuOpen: i,
            menuRef: h,
            settings: t.settings,
            onAddUnifiedLoader: _,
            onRestoreWorkflow: y,
            onSendToWorkflow: D,
            onRunWithWorkflow: $,
            onRunWithMask: (C) => Q(C),
            onEditSource: k,
            onEditTags: j,
            onEditNotes: E,
            onRestore: N,
            showRestore: t.viewScope === "trash",
            onDelete: L,
            deleteLabel: t.viewScope === "trash" ? "Delete Permanently" : "Move to Trash"
          }
        ),
        s && /* @__PURE__ */ l.jsx(
          Aw,
          {
            title: s.title,
            text: s.text,
            onClose: () => a(null),
            onCopy: (C) => w(C, "", !0),
            isCopied: d
          }
        )
      ]
    }
  );
});
Sm.displayName = "DetailedImageCard";
const bm = rn.memo(({ image: e }) => {
  const {
    isSelected: t,
    imgSrc: n,
    handleContainerClick: r,
    handleMouseDown: s,
    handleKeyDown: a,
    handleClick: o,
    handleSelectToggle: i,
    isMenuOpen: c,
    setIsMenuOpen: d,
    menuRef: h,
    state: v,
    handleAddUnifiedLoader: g,
    handleRestoreWorkflow: b,
    handleSendToWorkflow: w,
    handleRunWithWorkflow: x,
    handleRunWithMask: S,
    handleEditSource: f,
    handleEditTags: m,
    handleEditNotes: u,
    handleDelete: y,
    handleRestore: _
  } = km(e), k = v.viewScope === "trash", j = k ? "Delete Permanently" : "Move to Trash", E = (D) => {
    D.stopPropagation();
    let N = String(e.id);
    t && v.selectedIds.size > 0 && (N = Array.from(v.selectedIds).join(",")), D.dataTransfer.setData("text/plain", N), oe.getState().setIsOpen(!0);
  };
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `meld-image-card meld-image-card--grid-only ${t ? "meld-image-card--selected" : ""} ${c ? "meld-image-card--menu-open" : ""}`,
      onClick: r,
      onMouseDown: s,
      onKeyDown: a,
      role: "button",
      tabIndex: 0,
      draggable: !0,
      onDragStart: E,
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__thumbnail-wrapper", children: [
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: `meld-image-card__select-checkbox ${t ? "meld-image-card__select-checkbox--checked" : ""}`,
              onClick: i,
              "aria-label": "Toggle selection",
              role: "checkbox",
              "aria-checked": t,
              children: t && /* @__PURE__ */ l.jsxs(
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
                    /* @__PURE__ */ l.jsx("title", { children: "Selected" }),
                    /* @__PURE__ */ l.jsx("polyline", { points: "20 6 9 17 4 12" })
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ l.jsx(
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
              onMouseDown: s,
              onClick: (D) => {
                D.stopPropagation(), o(D);
              }
            }
          )
        ] }),
        /* @__PURE__ */ l.jsx(
          bi,
          {
            isMenuOpen: c,
            setIsMenuOpen: d,
            menuRef: h,
            settings: v.settings,
            onAddUnifiedLoader: g,
            onRestoreWorkflow: b,
            onSendToWorkflow: w,
            onRunWithWorkflow: x,
            onRunWithMask: S,
            onEditSource: f,
            onEditTags: m,
            onEditNotes: u,
            onDelete: y,
            onRestore: _,
            showRestore: k,
            deleteLabel: j,
            showQuickShortcuts: !1,
            variant: "thumbnail_overlay_top_right"
          }
        )
      ]
    }
  );
});
bm.displayName = "SimpleImageCard";
const rd = ({ image: e }) => {
  const { state: t } = he();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ l.jsx(bm, { image: e }) : /* @__PURE__ */ l.jsx(Sm, { image: e });
}, ba = 6, Rw = 10, Dw = ({
  visibleImages: e,
  settings: t,
  loadMoreRef: n,
  viewerImageId: r,
  isLoading: s,
  hasMore: a
}) => {
  const o = p.useRef(null), [i, c] = p.useState(300), [d, h] = p.useState(!0), v = t["sidebar.thumbnail_size"] || 100, g = t["gallery.view_mode"] === "grid_only";
  p.useEffect(() => {
    const u = o.current;
    if (!u) return;
    const y = () => {
      c(u.clientWidth);
    };
    y();
    const _ = new ResizeObserver(y);
    return _.observe(u), () => _.disconnect();
  }, []), p.useEffect(() => {
    const u = o.current;
    if (!u) return;
    if (typeof IntersectionObserver > "u") {
      h(!0);
      return;
    }
    const y = new IntersectionObserver(
      (_) => {
        const k = _[0];
        k && h(k.isIntersecting);
      },
      { threshold: 0 }
    );
    return y.observe(u), () => y.disconnect();
  }, []);
  const b = v + 10, w = g ? Math.max(
    1,
    Math.floor((i - Rw * 2 + ba) / (b + ba))
  ) : 1, x = g ? Math.ceil(e.length / w) : e.length, S = g ? v + 14 : v + 40, f = Lw({
    count: x,
    getScrollElement: () => o.current,
    estimateSize: () => S,
    overscan: 5,
    enabled: d,
    getItemKey: (u) => {
      var y;
      return g ? `row-${u}-${w}` : ((y = e[u]) == null ? void 0 : y.id) ?? u;
    }
  });
  p.useEffect(() => {
    if (r === null) return;
    const u = e.findIndex((_) => _.id === r);
    if (u < 0) return;
    const y = g ? Math.floor(u / w) : u;
    f.scrollToIndex(y, {
      align: "center",
      behavior: "smooth"
    });
  }, [r, e, g, w, f]);
  const m = f.getVirtualItems();
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      ref: o,
      className: "meld-gallery__list-scroll",
      style: {
        "--meld-thumbnail-size": `${v}px`
      },
      children: [
        /* @__PURE__ */ l.jsx(
          "div",
          {
            className: `meld-gallery__list ${g ? "meld-gallery__list--grid-only meld-gallery__list--virtualized" : "meld-gallery__list--virtualized"}`,
            style: {
              height: `${f.getTotalSize()}px`,
              position: "relative"
            },
            children: m.map((u) => {
              if (g) {
                const _ = u.index * w, k = Math.min(_ + w, e.length), j = e.slice(_, k);
                return /* @__PURE__ */ l.jsx(
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
                      gap: ba,
                      alignItems: "flex-start"
                    },
                    children: j.map((E) => /* @__PURE__ */ l.jsx(
                      "div",
                      {
                        "data-image-id": E.id,
                        style: {
                          width: "auto",
                          flexShrink: 0,
                          display: "inline-block"
                        },
                        children: /* @__PURE__ */ l.jsx(
                          "div",
                          {
                            style: {
                              width: E.width && E.height ? Math.min(v, v * E.width / E.height) + 10 : v + 10,
                              minWidth: v + 10
                            },
                            children: /* @__PURE__ */ l.jsx(rd, { image: E })
                          }
                        )
                      },
                      E.id
                    ))
                  },
                  u.key
                );
              }
              const y = e[u.index];
              return y ? /* @__PURE__ */ l.jsx(
                "div",
                {
                  ref: f.measureElement,
                  "data-index": u.index,
                  "data-image-id": y.id,
                  className: "meld-gallery__virtual-row",
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${u.start}px)`
                  },
                  children: /* @__PURE__ */ l.jsx(rd, { image: y })
                },
                u.key
              ) : null;
            })
          }
        ),
        /* @__PURE__ */ l.jsxs(
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
              s && /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
              !s && !a && e.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
            ]
          }
        )
      ]
    }
  );
}, Pw = () => {
  const {
    state: e,
    dispatch: t,
    refreshImages: n,
    updateSetting: r,
    viewMode: s,
    setViewMode: a,
    lastSearchQuery: o,
    setLastSearchQuery: i,
    displayedImages: c,
    visibleImages: d,
    isSearchActive: h,
    loadMoreRef: v
  } = ww(), g = oe((j) => j.isOpen), b = oe((j) => j.setIsOpen), w = oe((j) => j.buckets), x = Object.values(w).some(
    (j) => j && j.length > 0
  );
  W.log("GalleryPanel: isLightTableOpen =", g);
  const [S, f] = p.useState(!1), [m, u] = p.useState(null), y = p.useRef(null), _ = p.useCallback(() => {
    y.current && (u(y.current.getBoundingClientRect()), f(!0));
  }, []), k = p.useCallback(
    (j) => {
      t({ type: "SET_SEARCH_QUERY", payload: j }), i(j), a("search"), f(!1);
    },
    [t, i, a]
  );
  return W.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: c.length,
    visibleCount: d.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `meld-gallery ${e.viewScope === "trash" ? "meld-gallery--trash" : ""}`,
      onDragOver: (j) => {
        j.dataTransfer.types.includes("application/meld-lt-source-slot") && (j.preventDefault(), j.dataTransfer.dropEffect = "move");
      },
      onDrop: (j) => {
        const E = j.dataTransfer.getData("application/meld-lt-source-slot");
        if (E) {
          j.preventDefault();
          const D = j.dataTransfer.getData("text/plain");
          if (D) {
            const N = D.split(","), L = [];
            N.forEach(($) => {
              if ($) {
                const Q = $.trim();
                oe.getState().removeFromBucket(E, Q);
                const I = Number(Q);
                Number.isNaN(I) || L.push(I);
              }
            }), L.length > 0 && t({ type: "DESELECT_IMAGES", payload: L });
          }
        }
      },
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__header", children: [
          e.viewScope === "trash" ? /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__trash-indicator", children: [
            /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__trash-label", children: [
              /* @__PURE__ */ l.jsx(Gt, { size: 14 }),
              /* @__PURE__ */ l.jsx("span", { children: "Trash Bin" })
            ] }),
            /* @__PURE__ */ l.jsxs("label", { className: "meld-gallery__trash-toggle", children: [
              /* @__PURE__ */ l.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.settings["gallery.trash.show_missing"] || !1,
                  onChange: (j) => r("gallery.trash.show_missing", j.target.checked)
                }
              ),
              /* @__PURE__ */ l.jsx("span", { children: "Show missing files" })
            ] }),
            /* @__PURE__ */ l.jsxs(
              "button",
              {
                type: "button",
                className: "meld-gallery__exit-trash",
                onClick: () => t({ type: "SET_VIEW_SCOPE", payload: "default" }),
                title: "Exit Trash View",
                children: [
                  /* @__PURE__ */ l.jsx(pe, { size: 14 }),
                  /* @__PURE__ */ l.jsx("span", { children: "Exit" })
                ]
              }
            )
          ] }) : /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__actions", children: [
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                onClick: () => a(s === "analytics" ? "gallery" : "analytics"),
                style: {
                  background: "none",
                  border: "none",
                  color: s === "analytics" ? "var(--meld-accent-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Image Analytics",
                children: /* @__PURE__ */ l.jsx(kf, { size: 14 })
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  s === "search" ? (i(e.searchQuery), e.searchQuery && t({ type: "SET_SEARCH_QUERY", payload: "" }), a("gallery")) : (!e.searchQuery && o && t({
                    type: "SET_SEARCH_QUERY",
                    payload: o
                  }), a("search"));
                },
                style: {
                  background: "none",
                  border: "none",
                  color: h ? "var(--meld-success-color)" : s === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: h ? "bold" : "normal"
                },
                title: "Search",
                children: /* @__PURE__ */ l.jsx(yn, { size: 14 })
              }
            ),
            e.favorites.length > 0 && /* @__PURE__ */ l.jsx(
              "button",
              {
                ref: y,
                type: "button",
                onClick: _,
                style: {
                  background: "none",
                  border: "none",
                  color: S ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Favorites",
                children: /* @__PURE__ */ l.jsx(gr, { size: 14, fill: S ? "var(--brand-yellow, #ffd700)" : "none" })
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                onClick: () => a(s === "tags" ? "gallery" : "tags"),
                style: {
                  background: "none",
                  border: "none",
                  color: s === "tags" ? "var(--meld-accent-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: s === "tags" ? "bold" : "normal"
                },
                title: "Tag Manager",
                children: /* @__PURE__ */ l.jsx(xr, { size: 14 })
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  const E = (e.settings["gallery.view_mode"] || "grid_details") === "grid_details" ? "grid_only" : "grid_details";
                  r("gallery.view_mode", E);
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ l.jsx(xg, { size: 14 }) : /* @__PURE__ */ l.jsx(bf, { size: 14 })
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  W.log(
                    "GalleryPanel: Toggle Light Table clicked, from",
                    g,
                    "to",
                    !g
                  ), b(!g);
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
                children: /* @__PURE__ */ l.jsxs("div", { style: { position: "relative" }, children: [
                  /* @__PURE__ */ l.jsx(
                    Eg,
                    {
                      size: 14,
                      fill: g ? "var(--brand-yellow, #ffd700)" : "none",
                      style: { opacity: g ? 1 : 0.8 }
                    }
                  ),
                  !g && x && /* @__PURE__ */ l.jsx(
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
            /* @__PURE__ */ l.jsx(
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
                children: /* @__PURE__ */ l.jsx(cl, { size: 14 })
              }
            ),
            /* @__PURE__ */ l.jsx(
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
                children: /* @__PURE__ */ l.jsx(hr, { size: 14, className: e.isLoading ? "animate-spin" : "" })
              }
            ),
            /* @__PURE__ */ l.jsx(
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
                children: /* @__PURE__ */ l.jsx(Cf, { size: 14 })
              }
            )
          ] }),
          s === "search" && /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ l.jsx(lw, {}) })
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__content", children: [
          /* @__PURE__ */ l.jsx(Av, {}),
          e.error && /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__error", children: e.error }),
          s === "analytics" ? /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-gallery__list-wrapper",
              style: {
                flex: 1,
                minHeight: 0,
                display: "flex",
                flexDirection: "column"
              },
              children: /* @__PURE__ */ l.jsx(
                Lv,
                {
                  onClose: () => a("gallery"),
                  onSearchAndNavigate: (j) => {
                    t({ type: "SET_SEARCH_QUERY", payload: j }), a("search");
                  }
                }
              )
            }
          ) : s === "tags" ? /* @__PURE__ */ l.jsx(
            sw,
            {
              onClose: () => a("gallery"),
              onSearch: (j) => {
                t({ type: "SET_SEARCH_QUERY", payload: j }), a("search");
              }
            }
          ) : e.isLoading && c.length === 0 ? /* @__PURE__ */ l.jsx(
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
              children: /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." })
            }
          ) : d.length === 0 ? /* @__PURE__ */ l.jsx(
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
              children: /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__empty", children: "No images found." })
            }
          ) : /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-gallery__list-wrapper",
              style: {
                flex: 1,
                minHeight: 0,
                display: "flex",
                flexDirection: "column"
              },
              children: /* @__PURE__ */ l.jsx(
                Dw,
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
          /* @__PURE__ */ l.jsx(xw, {})
        ] }),
        e.viewerImageId !== null && /* @__PURE__ */ l.jsx(vw, {}),
        /* @__PURE__ */ l.jsx(nv, {}),
        S && /* @__PURE__ */ l.jsx(
          tw,
          {
            anchorRect: m,
            onClose: () => f(!1),
            onSelect: k
          }
        ),
        /* @__PURE__ */ l.jsx(Uv, {})
      ]
    }
  );
};
ld.registerExtension({
  name: "Meld.UnifiedLoader",
  async beforeRegisterNodeDef(e, t, n) {
    t.name;
  },
  async nodeCreated(e) {
    function t(s) {
      return s !== null && typeof s == "object" && "comfyClass" in s && typeof s.comfyClass == "string" && Array.isArray(s.widgets);
    }
    if (!t(e)) return;
    const n = e;
    if (n.comfyClass !== "MeldUnifiedLoader") return;
    const r = () => {
      var o, i;
      const s = (o = n.widgets) == null ? void 0 : o.find((c) => c.name === "positive"), a = (i = n.widgets) == null ? void 0 : i.find((c) => c.name === "negative");
      s && s.inputEl && (s.inputEl.style.borderLeft = "4px solid var(--comfy-input-text-active, #44bb44)", s.inputEl.style.paddingLeft = "8px"), a && a.inputEl && (a.inputEl.style.borderLeft = "4px solid var(--error-color, #ff4444)", a.inputEl.style.paddingLeft = "8px");
    };
    r(), setTimeout(r, 1), setTimeout(r, 100);
  }
});
const zw = document.getElementById("meld-gallery-style");
if (!zw) {
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
let Vl = null, ft = null;
ld.registerExtension({
  name: "ComfyUI.Meld",
  async beforeRegisterNodeDef(e, t, n) {
    if (t.name === "MeldSaveImage") {
      const r = e.prototype.onExecuted;
      e.prototype.onExecuted = function(...s) {
        r == null || r.apply(this, s);
        const a = n.ui.meld;
        a != null && a.isVisible() && a.refresh();
      };
    }
  },
  async setup(e) {
    var n;
    zv();
    try {
      const r = await Af();
      W.init(r.dev_mode), W.log("Settings received:", r);
    } catch (r) {
      W.error("Failed to fetch settings", r), W.init(!1);
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
        } catch (s) {
          W.error("Error toggling sidebar:", s);
        }
      }
    }, ne.addEventListener("meld-image-saved", () => {
      var r;
      (r = e.ui.meld) == null || r.refresh();
    }), ne.addEventListener("meld-scan-progress", (r) => {
      window.dispatchEvent(new CustomEvent("meld-scan-progress", { detail: r.detail }));
    }), ne.addEventListener("meld-scan-finished", (r) => {
      var s;
      window.dispatchEvent(new CustomEvent("meld-scan-finished", { detail: r.detail })), (s = e.ui.meld) == null || s.refresh(), W.log("Import completed.");
    });
    function t(r) {
      if (!r || typeof r != "object") return !1;
      const s = r.output;
      if (!s || typeof s != "object") return !1;
      const a = s.images;
      if (!a || !Array.isArray(a)) return !1;
      for (const o of a) {
        if (!o || typeof o != "object") return !1;
        const i = o;
        if (typeof i.filename != "string" || typeof i.subfolder != "string" || typeof i.type != "string")
          return !1;
      }
      return !0;
    }
    ne.addEventListener("executed", async (r) => {
      var s;
      if (t(r.detail) && (s = r.detail.output) != null && s.images) {
        for (const a of r.detail.output.images)
          if (a.type === "output")
            try {
              await Mf({
                filename: a.filename,
                subfolder: a.subfolder,
                type: a.type
              });
            } catch (o) {
              W.error("Failed to auto-register image:", o);
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
          W.log("render called", {
            el: r,
            galleryRoot: Vl,
            galleryContainer: ft
          }), r.style.height = "100%", r.style.overflow = "hidden";
          let s = r.parentElement;
          for (; s && !s.classList.contains("sidebar-content-container"); )
            s.style.height = "100%", s.style.overflow = "hidden", s = s.parentElement;
          s && (s.style.overflow = "hidden"), ft || (W.log("galleryContainer not found, creating new one"), ft = document.createElement("div"), ft.id = "meld-gallery-container", ft.style.height = "100%", ft.style.width = "100%", ft.style.display = "flex", ft.style.flexDirection = "column", ft.style.overflow = "hidden"), r.contains(ft) || (W.log("Appending galleryContainer to el"), r.appendChild(ft)), Vl ? W.log("Gallery root already exists, React should handle re-render if needed") : (W.log("Creating new gallery root"), Vl = gf(ft), Vl.render(
            rn.createElement(hy, null, rn.createElement(Pw))
          ));
        }
      });
    } catch (r) {
      W.error("Error during sidebar registration:", r);
    }
  }
});
export {
  Ww as c,
  Tm as g
};
