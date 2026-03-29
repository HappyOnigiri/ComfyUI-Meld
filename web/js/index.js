import { api as te } from "/scripts/api.js";
import { app as ad } from "/scripts/app.js";
var Jw = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Af(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var od = { exports: {} }, ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hl = Symbol.for("react.element"), Df = Symbol.for("react.portal"), Rf = Symbol.for("react.fragment"), Pf = Symbol.for("react.strict_mode"), Of = Symbol.for("react.profiler"), zf = Symbol.for("react.provider"), Ff = Symbol.for("react.context"), $f = Symbol.for("react.forward_ref"), Wf = Symbol.for("react.suspense"), Uf = Symbol.for("react.memo"), Vf = Symbol.for("react.lazy"), Ci = Symbol.iterator;
function Bf(e) {
  return e === null || typeof e != "object" ? null : (e = Ci && e[Ci] || e["@@iterator"], typeof e == "function" ? e : null);
}
var id = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, cd = Object.assign, dd = {};
function vr(e, t, n) {
  this.props = e, this.context = t, this.refs = dd, this.updater = n || id;
}
vr.prototype.isReactComponent = {};
vr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
vr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ud() {
}
ud.prototype = vr.prototype;
function ko(e, t, n) {
  this.props = e, this.context = t, this.refs = dd, this.updater = n || id;
}
var bo = ko.prototype = new ud();
bo.constructor = ko;
cd(bo, vr.prototype);
bo.isPureReactComponent = !0;
var Ei = Array.isArray, md = Object.prototype.hasOwnProperty, So = { current: null }, fd = { key: !0, ref: !0, __self: !0, __source: !0 };
function pd(e, t, n) {
  var r, s = {}, a = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) md.call(t, r) && !fd.hasOwnProperty(r) && (s[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) s.children = n;
  else if (1 < i) {
    for (var c = Array(i), d = 0; d < i; d++) c[d] = arguments[d + 2];
    s.children = c;
  }
  if (e && e.defaultProps) for (r in i = e.defaultProps, i) s[r] === void 0 && (s[r] = i[r]);
  return { $$typeof: hl, type: e, key: a, ref: o, props: s, _owner: So.current };
}
function Qf(e, t) {
  return { $$typeof: hl, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function jo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === hl;
}
function Hf(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ni = /\/+/g;
function Gs(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Hf("" + e.key) : t.toString(36);
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
        case hl:
        case Df:
          o = !0;
      }
  }
  if (o) return o = e, s = s(o), e = r === "" ? "." + Gs(o, 0) : r, Ei(s) ? (n = "", e != null && (n = e.replace(Ni, "$&/") + "/"), Bl(s, t, n, "", function(d) {
    return d;
  })) : s != null && (jo(s) && (s = Qf(s, n + (!s.key || o && o.key === s.key ? "" : ("" + s.key).replace(Ni, "$&/") + "/") + e)), t.push(s)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Ei(e)) for (var i = 0; i < e.length; i++) {
    a = e[i];
    var c = r + Gs(a, i);
    o += Bl(a, t, n, c, s);
  }
  else if (c = Bf(e), typeof c == "function") for (e = c.call(e), i = 0; !(a = e.next()).done; ) a = a.value, c = r + Gs(a, i++), o += Bl(a, t, n, c, s);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function bl(e, t, n) {
  if (e == null) return e;
  var r = [], s = 0;
  return Bl(e, r, "", "", function(a) {
    return t.call(n, a, s++);
  }), r;
}
function Kf(e) {
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
var Ge = { current: null }, Ql = { transition: null }, Gf = { ReactCurrentDispatcher: Ge, ReactCurrentBatchConfig: Ql, ReactCurrentOwner: So };
function hd() {
  throw Error("act(...) is not supported in production builds of React.");
}
ie.Children = { map: bl, forEach: function(e, t, n) {
  bl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return bl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return bl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!jo(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ie.Component = vr;
ie.Fragment = Rf;
ie.Profiler = Of;
ie.PureComponent = ko;
ie.StrictMode = Pf;
ie.Suspense = Wf;
ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gf;
ie.act = hd;
ie.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = cd({}, e.props), s = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = So.current), t.key !== void 0 && (s = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (c in t) md.call(t, c) && !fd.hasOwnProperty(c) && (r[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    i = Array(c);
    for (var d = 0; d < c; d++) i[d] = arguments[d + 2];
    r.children = i;
  }
  return { $$typeof: hl, type: e.type, key: s, ref: a, props: r, _owner: o };
};
ie.createContext = function(e) {
  return e = { $$typeof: Ff, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: zf, _context: e }, e.Consumer = e;
};
ie.createElement = pd;
ie.createFactory = function(e) {
  var t = pd.bind(null, e);
  return t.type = e, t;
};
ie.createRef = function() {
  return { current: null };
};
ie.forwardRef = function(e) {
  return { $$typeof: $f, render: e };
};
ie.isValidElement = jo;
ie.lazy = function(e) {
  return { $$typeof: Vf, _payload: { _status: -1, _result: e }, _init: Kf };
};
ie.memo = function(e, t) {
  return { $$typeof: Uf, type: e, compare: t === void 0 ? null : t };
};
ie.startTransition = function(e) {
  var t = Ql.transition;
  Ql.transition = {};
  try {
    e();
  } finally {
    Ql.transition = t;
  }
};
ie.unstable_act = hd;
ie.useCallback = function(e, t) {
  return Ge.current.useCallback(e, t);
};
ie.useContext = function(e) {
  return Ge.current.useContext(e);
};
ie.useDebugValue = function() {
};
ie.useDeferredValue = function(e) {
  return Ge.current.useDeferredValue(e);
};
ie.useEffect = function(e, t) {
  return Ge.current.useEffect(e, t);
};
ie.useId = function() {
  return Ge.current.useId();
};
ie.useImperativeHandle = function(e, t, n) {
  return Ge.current.useImperativeHandle(e, t, n);
};
ie.useInsertionEffect = function(e, t) {
  return Ge.current.useInsertionEffect(e, t);
};
ie.useLayoutEffect = function(e, t) {
  return Ge.current.useLayoutEffect(e, t);
};
ie.useMemo = function(e, t) {
  return Ge.current.useMemo(e, t);
};
ie.useReducer = function(e, t, n) {
  return Ge.current.useReducer(e, t, n);
};
ie.useRef = function(e) {
  return Ge.current.useRef(e);
};
ie.useState = function(e) {
  return Ge.current.useState(e);
};
ie.useSyncExternalStore = function(e, t, n) {
  return Ge.current.useSyncExternalStore(e, t, n);
};
ie.useTransition = function() {
  return Ge.current.useTransition();
};
ie.version = "18.3.1";
od.exports = ie;
var p = od.exports;
const gt = /* @__PURE__ */ Af(p);
var gd = { exports: {} }, dt = {}, yd = { exports: {} }, vd = {};
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
  function t(j, T) {
    var z = j.length;
    j.push(T);
    e: for (; 0 < z; ) {
      var W = z - 1 >>> 1, A = j[W];
      if (0 < s(A, T)) j[W] = T, j[z] = A, z = W;
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var T = j[0], z = j.pop();
    if (z !== T) {
      j[0] = z;
      e: for (var W = 0, A = j.length, R = A >>> 1; W < R; ) {
        var P = 2 * (W + 1) - 1, Z = j[P], J = P + 1, oe = j[J];
        if (0 > s(Z, z)) J < A && 0 > s(oe, Z) ? (j[W] = oe, j[J] = z, W = J) : (j[W] = Z, j[P] = z, W = P);
        else if (J < A && 0 > s(oe, z)) j[W] = oe, j[J] = z, W = J;
        else break e;
      }
    }
    return T;
  }
  function s(j, T) {
    var z = j.sortIndex - T.sortIndex;
    return z !== 0 ? z : j.id - T.id;
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
  var c = [], d = [], h = 1, w = null, y = 3, S = !1, x = !1, k = !1, b = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function u(j) {
    for (var T = n(d); T !== null; ) {
      if (T.callback === null) r(d);
      else if (T.startTime <= j) r(d), T.sortIndex = T.expirationTime, t(c, T);
      else break;
      T = n(d);
    }
  }
  function g(j) {
    if (k = !1, u(j), !x) if (n(c) !== null) x = !0, M(_);
    else {
      var T = n(d);
      T !== null && U(g, T.startTime - j);
    }
  }
  function _(j, T) {
    x = !1, k && (k = !1, m(I), I = -1), S = !0;
    var z = y;
    try {
      for (u(T), w = n(c); w !== null && (!(w.expirationTime > T) || j && !L()); ) {
        var W = w.callback;
        if (typeof W == "function") {
          w.callback = null, y = w.priorityLevel;
          var A = W(w.expirationTime <= T);
          T = e.unstable_now(), typeof A == "function" ? w.callback = A : w === n(c) && r(c), u(T);
        } else r(c);
        w = n(c);
      }
      if (w !== null) var R = !0;
      else {
        var P = n(d);
        P !== null && U(g, P.startTime - T), R = !1;
      }
      return R;
    } finally {
      w = null, y = z, S = !1;
    }
  }
  var v = !1, C = null, I = -1, D = 5, N = -1;
  function L() {
    return !(e.unstable_now() - N < D);
  }
  function $() {
    if (C !== null) {
      var j = e.unstable_now();
      N = j;
      var T = !0;
      try {
        T = C(!0, j);
      } finally {
        T ? H() : (v = !1, C = null);
      }
    } else v = !1;
  }
  var H;
  if (typeof f == "function") H = function() {
    f($);
  };
  else if (typeof MessageChannel < "u") {
    var E = new MessageChannel(), O = E.port2;
    E.port1.onmessage = $, H = function() {
      O.postMessage(null);
    };
  } else H = function() {
    b($, 0);
  };
  function M(j) {
    C = j, v || (v = !0, H());
  }
  function U(j, T) {
    I = b(function() {
      j(e.unstable_now());
    }, T);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(j) {
    j.callback = null;
  }, e.unstable_continueExecution = function() {
    x || S || (x = !0, M(_));
  }, e.unstable_forceFrameRate = function(j) {
    0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < j ? Math.floor(1e3 / j) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return y;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(j) {
    switch (y) {
      case 1:
      case 2:
      case 3:
        var T = 3;
        break;
      default:
        T = y;
    }
    var z = y;
    y = T;
    try {
      return j();
    } finally {
      y = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(j, T) {
    switch (j) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        j = 3;
    }
    var z = y;
    y = j;
    try {
      return T();
    } finally {
      y = z;
    }
  }, e.unstable_scheduleCallback = function(j, T, z) {
    var W = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? W + z : W) : z = W, j) {
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
    return A = z + A, j = { id: h++, callback: T, priorityLevel: j, startTime: z, expirationTime: A, sortIndex: -1 }, z > W ? (j.sortIndex = z, t(d, j), n(c) === null && j === n(d) && (k ? (m(I), I = -1) : k = !0, U(g, z - W))) : (j.sortIndex = A, t(c, j), x || S || (x = !0, M(_))), j;
  }, e.unstable_shouldYield = L, e.unstable_wrapCallback = function(j) {
    var T = y;
    return function() {
      var z = y;
      y = T;
      try {
        return j.apply(this, arguments);
      } finally {
        y = z;
      }
    };
  };
})(vd);
yd.exports = vd;
var qf = yd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yf = p, ct = qf;
function Q(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var wd = /* @__PURE__ */ new Set(), Kr = {};
function zn(e, t) {
  cr(e, t), cr(e + "Capture", t);
}
function cr(e, t) {
  for (Kr[e] = t, e = 0; e < t.length; e++) wd.add(t[e]);
}
var Qt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ja = Object.prototype.hasOwnProperty, Xf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ii = {}, Mi = {};
function Zf(e) {
  return ja.call(Mi, e) ? !0 : ja.call(Ii, e) ? !1 : Xf.test(e) ? Mi[e] = !0 : (Ii[e] = !0, !1);
}
function Jf(e, t, n, r) {
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
function ep(e, t, n, r) {
  if (t === null || typeof t > "u" || Jf(e, t, n, r)) return !0;
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
function qe(e, t, n, r, s, a, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
}
var $e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  $e[e] = new qe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  $e[t] = new qe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  $e[e] = new qe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  $e[e] = new qe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  $e[e] = new qe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  $e[e] = new qe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  $e[e] = new qe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  $e[e] = new qe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  $e[e] = new qe(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
  $e[t] = new qe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Co, Eo);
  $e[t] = new qe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Co, Eo);
  $e[t] = new qe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  $e[e] = new qe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
$e.xlinkHref = new qe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  $e[e] = new qe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function No(e, t, n, r) {
  var s = $e.hasOwnProperty(t) ? $e[t] : null;
  (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ep(t, n, s, r) && (n = null), r || s === null ? Zf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName, r = s.attributeNamespace, n === null ? e.removeAttribute(t) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Yt = Yf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Sl = Symbol.for("react.element"), Bn = Symbol.for("react.portal"), Qn = Symbol.for("react.fragment"), Io = Symbol.for("react.strict_mode"), Ca = Symbol.for("react.profiler"), xd = Symbol.for("react.provider"), _d = Symbol.for("react.context"), Mo = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Na = Symbol.for("react.suspense_list"), To = Symbol.for("react.memo"), tn = Symbol.for("react.lazy"), kd = Symbol.for("react.offscreen"), Ti = Symbol.iterator;
function Sr(e) {
  return e === null || typeof e != "object" ? null : (e = Ti && e[Ti] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ee = Object.assign, qs;
function Ar(e) {
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
  return (e = e ? e.displayName || e.name : "") ? Ar(e) : "";
}
function tp(e) {
  switch (e.tag) {
    case 5:
      return Ar(e.type);
    case 16:
      return Ar("Lazy");
    case 13:
      return Ar("Suspense");
    case 19:
      return Ar("SuspenseList");
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
    case Qn:
      return "Fragment";
    case Bn:
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
    case _d:
      return (e.displayName || "Context") + ".Consumer";
    case xd:
      return (e._context.displayName || "Context") + ".Provider";
    case Mo:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case To:
      return t = e.displayName || null, t !== null ? t : Ia(e.type) || "Memo";
    case tn:
      t = e._payload, e = e._init;
      try {
        return Ia(e(t));
      } catch {
      }
  }
  return null;
}
function np(e) {
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
function gn(e) {
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
function bd(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function rp(e) {
  var t = bd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function jl(e) {
  e._valueTracker || (e._valueTracker = rp(e));
}
function Sd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = bd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
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
  return Ee({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Li(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = gn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function jd(e, t) {
  t = t.checked, t != null && No(e, "checked", t, !1);
}
function Ta(e, t) {
  jd(e, t);
  var n = gn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? La(e, t.type, n) : t.hasOwnProperty("defaultValue") && La(e, t.type, gn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ai(e, t, n) {
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
var Dr = Array.isArray;
function nr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++) s = t.hasOwnProperty("$" + e[n].value), e[n].selected !== s && (e[n].selected = s), s && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + gn(n), t = null, s = 0; s < e.length; s++) {
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
  if (t.dangerouslySetInnerHTML != null) throw Error(Q(91));
  return Ee({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Di(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(Q(92));
      if (Dr(n)) {
        if (1 < n.length) throw Error(Q(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: gn(n) };
}
function Cd(e, t) {
  var n = gn(t.value), r = gn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ri(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ed(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Da(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Ed(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Cl, Nd = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, s) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, s);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Cl = Cl || document.createElement("div"), Cl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Cl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Gr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Or = {
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
}, lp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Or).forEach(function(e) {
  lp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Or[t] = Or[e];
  });
});
function Id(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Or.hasOwnProperty(e) && Or[e] ? ("" + t).trim() : t + "px";
}
function Md(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, s = Id(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : e[n] = s;
  }
}
var sp = Ee({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ra(e, t) {
  if (t) {
    if (sp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(Q(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(Q(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(Q(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(Q(62));
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
var Oa = null;
function Lo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var za = null, rr = null, lr = null;
function Pi(e) {
  if (e = vl(e)) {
    if (typeof za != "function") throw Error(Q(280));
    var t = e.stateNode;
    t && (t = As(t), za(e.stateNode, e.type, t));
  }
}
function Td(e) {
  rr ? lr ? lr.push(e) : lr = [e] : rr = e;
}
function Ld() {
  if (rr) {
    var e = rr, t = lr;
    if (lr = rr = null, Pi(e), t) for (e = 0; e < t.length; e++) Pi(t[e]);
  }
}
function Ad(e, t) {
  return e(t);
}
function Dd() {
}
var Zs = !1;
function Rd(e, t, n) {
  if (Zs) return e(t, n);
  Zs = !0;
  try {
    return Ad(e, t, n);
  } finally {
    Zs = !1, (rr !== null || lr !== null) && (Dd(), Ld());
  }
}
function qr(e, t) {
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
  if (n && typeof n != "function") throw Error(Q(231, t, typeof n));
  return n;
}
var Fa = !1;
if (Qt) try {
  var jr = {};
  Object.defineProperty(jr, "passive", { get: function() {
    Fa = !0;
  } }), window.addEventListener("test", jr, jr), window.removeEventListener("test", jr, jr);
} catch {
  Fa = !1;
}
function ap(e, t, n, r, s, a, o, i, c) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (h) {
    this.onError(h);
  }
}
var zr = !1, ss = null, as = !1, $a = null, op = { onError: function(e) {
  zr = !0, ss = e;
} };
function ip(e, t, n, r, s, a, o, i, c) {
  zr = !1, ss = null, ap.apply(op, arguments);
}
function cp(e, t, n, r, s, a, o, i, c) {
  if (ip.apply(this, arguments), zr) {
    if (zr) {
      var d = ss;
      zr = !1, ss = null;
    } else throw Error(Q(198));
    as || (as = !0, $a = d);
  }
}
function Fn(e) {
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
function Pd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Oi(e) {
  if (Fn(e) !== e) throw Error(Q(188));
}
function dp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Fn(e), t === null) throw Error(Q(188));
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
        if (a === n) return Oi(s), e;
        if (a === r) return Oi(s), t;
        a = a.sibling;
      }
      throw Error(Q(188));
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
        if (!o) throw Error(Q(189));
      }
    }
    if (n.alternate !== r) throw Error(Q(190));
  }
  if (n.tag !== 3) throw Error(Q(188));
  return n.stateNode.current === n ? e : t;
}
function Od(e) {
  return e = dp(e), e !== null ? zd(e) : null;
}
function zd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = zd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Fd = ct.unstable_scheduleCallback, zi = ct.unstable_cancelCallback, up = ct.unstable_shouldYield, mp = ct.unstable_requestPaint, Me = ct.unstable_now, fp = ct.unstable_getCurrentPriorityLevel, Ao = ct.unstable_ImmediatePriority, $d = ct.unstable_UserBlockingPriority, os = ct.unstable_NormalPriority, pp = ct.unstable_LowPriority, Wd = ct.unstable_IdlePriority, Is = null, Pt = null;
function hp(e) {
  if (Pt && typeof Pt.onCommitFiberRoot == "function") try {
    Pt.onCommitFiberRoot(Is, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Mt = Math.clz32 ? Math.clz32 : vp, gp = Math.log, yp = Math.LN2;
function vp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (gp(e) / yp | 0) | 0;
}
var El = 64, Nl = 4194304;
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
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Mt(t), s = 1 << n, r |= e[n], t &= ~s;
  return r;
}
function wp(e, t) {
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
function xp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - Mt(a), i = 1 << o, c = s[o];
    c === -1 ? (!(i & n) || i & r) && (s[o] = wp(i, t)) : c <= t && (e.expiredLanes |= i), a &= ~i;
  }
}
function Wa(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ud() {
  var e = El;
  return El <<= 1, !(El & 4194240) && (El = 64), e;
}
function Js(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function gl(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Mt(t), e[t] = n;
}
function _p(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - Mt(n), a = 1 << s;
    t[s] = 0, r[s] = -1, e[s] = -1, n &= ~a;
  }
}
function Do(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Mt(n), s = 1 << r;
    s & t | e[r] & t && (e[r] |= t), n &= ~s;
  }
}
var ue = 0;
function Vd(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Bd, Ro, Qd, Hd, Kd, Ua = !1, Il = [], on = null, cn = null, dn = null, Yr = /* @__PURE__ */ new Map(), Xr = /* @__PURE__ */ new Map(), rn = [], kp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Fi(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      on = null;
      break;
    case "dragenter":
    case "dragleave":
      cn = null;
      break;
    case "mouseover":
    case "mouseout":
      dn = null;
      break;
    case "pointerover":
    case "pointerout":
      Yr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Xr.delete(t.pointerId);
  }
}
function Cr(e, t, n, r, s, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [s] }, t !== null && (t = vl(t), t !== null && Ro(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
}
function bp(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return on = Cr(on, e, t, n, r, s), !0;
    case "dragenter":
      return cn = Cr(cn, e, t, n, r, s), !0;
    case "mouseover":
      return dn = Cr(dn, e, t, n, r, s), !0;
    case "pointerover":
      var a = s.pointerId;
      return Yr.set(a, Cr(Yr.get(a) || null, e, t, n, r, s)), !0;
    case "gotpointercapture":
      return a = s.pointerId, Xr.set(a, Cr(Xr.get(a) || null, e, t, n, r, s)), !0;
  }
  return !1;
}
function Gd(e) {
  var t = En(e.target);
  if (t !== null) {
    var n = Fn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Pd(n), t !== null) {
          e.blockedOn = t, Kd(e.priority, function() {
            Qd(n);
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
      Oa = r, n.target.dispatchEvent(r), Oa = null;
    } else return t = vl(n), t !== null && Ro(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function $i(e, t, n) {
  Hl(e) && n.delete(t);
}
function Sp() {
  Ua = !1, on !== null && Hl(on) && (on = null), cn !== null && Hl(cn) && (cn = null), dn !== null && Hl(dn) && (dn = null), Yr.forEach($i), Xr.forEach($i);
}
function Er(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ua || (Ua = !0, ct.unstable_scheduleCallback(ct.unstable_NormalPriority, Sp)));
}
function Zr(e) {
  function t(s) {
    return Er(s, e);
  }
  if (0 < Il.length) {
    Er(Il[0], e);
    for (var n = 1; n < Il.length; n++) {
      var r = Il[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (on !== null && Er(on, e), cn !== null && Er(cn, e), dn !== null && Er(dn, e), Yr.forEach(t), Xr.forEach(t), n = 0; n < rn.length; n++) r = rn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < rn.length && (n = rn[0], n.blockedOn === null); ) Gd(n), n.blockedOn === null && rn.shift();
}
var sr = Yt.ReactCurrentBatchConfig, cs = !0;
function jp(e, t, n, r) {
  var s = ue, a = sr.transition;
  sr.transition = null;
  try {
    ue = 1, Po(e, t, n, r);
  } finally {
    ue = s, sr.transition = a;
  }
}
function Cp(e, t, n, r) {
  var s = ue, a = sr.transition;
  sr.transition = null;
  try {
    ue = 4, Po(e, t, n, r);
  } finally {
    ue = s, sr.transition = a;
  }
}
function Po(e, t, n, r) {
  if (cs) {
    var s = Va(e, t, n, r);
    if (s === null) ca(e, t, r, ds, n), Fi(e, r);
    else if (bp(s, e, t, n, r)) r.stopPropagation();
    else if (Fi(e, r), t & 4 && -1 < kp.indexOf(e)) {
      for (; s !== null; ) {
        var a = vl(s);
        if (a !== null && Bd(a), a = Va(e, t, n, r), a === null && ca(e, t, r, ds, n), a === s) break;
        s = a;
      }
      s !== null && r.stopPropagation();
    } else ca(e, t, r, null, n);
  }
}
var ds = null;
function Va(e, t, n, r) {
  if (ds = null, e = Lo(r), e = En(e), e !== null) if (t = Fn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Pd(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return ds = e, null;
}
function qd(e) {
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
      switch (fp()) {
        case Ao:
          return 1;
        case $d:
          return 4;
        case os:
        case pp:
          return 16;
        case Wd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var sn = null, Oo = null, Kl = null;
function Yd() {
  if (Kl) return Kl;
  var e, t = Oo, n = t.length, r, s = "value" in sn ? sn.value : sn.textContent, a = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === s[a - r]; r++) ;
  return Kl = s.slice(e, 1 < r ? 1 - r : void 0);
}
function Gl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Ml() {
  return !0;
}
function Wi() {
  return !1;
}
function ut(e) {
  function t(n, r, s, a, o) {
    this._reactName = n, this._targetInst = s, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(a) : a[i]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? Ml : Wi, this.isPropagationStopped = Wi, this;
  }
  return Ee(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ml);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ml);
  }, persist: function() {
  }, isPersistent: Ml }), t;
}
var wr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, zo = ut(wr), yl = Ee({}, wr, { view: 0, detail: 0 }), Ep = ut(yl), ea, ta, Nr, Ms = Ee({}, yl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Fo, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Nr && (Nr && e.type === "mousemove" ? (ea = e.screenX - Nr.screenX, ta = e.screenY - Nr.screenY) : ta = ea = 0, Nr = e), ea);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ta;
} }), Ui = ut(Ms), Np = Ee({}, Ms, { dataTransfer: 0 }), Ip = ut(Np), Mp = Ee({}, yl, { relatedTarget: 0 }), na = ut(Mp), Tp = Ee({}, wr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Lp = ut(Tp), Ap = Ee({}, wr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Dp = ut(Ap), Rp = Ee({}, wr, { data: 0 }), Vi = ut(Rp), Pp = {
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
}, Op = {
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
}, zp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Fp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = zp[e]) ? !!t[e] : !1;
}
function Fo() {
  return Fp;
}
var $p = Ee({}, yl, { key: function(e) {
  if (e.key) {
    var t = Pp[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Gl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Op[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Fo, charCode: function(e) {
  return e.type === "keypress" ? Gl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Gl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Wp = ut($p), Up = Ee({}, Ms, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Bi = ut(Up), Vp = Ee({}, yl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Fo }), Bp = ut(Vp), Qp = Ee({}, wr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Hp = ut(Qp), Kp = Ee({}, Ms, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Gp = ut(Kp), qp = [9, 13, 27, 32], $o = Qt && "CompositionEvent" in window, Fr = null;
Qt && "documentMode" in document && (Fr = document.documentMode);
var Yp = Qt && "TextEvent" in window && !Fr, Xd = Qt && (!$o || Fr && 8 < Fr && 11 >= Fr), Qi = " ", Hi = !1;
function Zd(e, t) {
  switch (e) {
    case "keyup":
      return qp.indexOf(t.keyCode) !== -1;
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
function Jd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Hn = !1;
function Xp(e, t) {
  switch (e) {
    case "compositionend":
      return Jd(t);
    case "keypress":
      return t.which !== 32 ? null : (Hi = !0, Qi);
    case "textInput":
      return e = t.data, e === Qi && Hi ? null : e;
    default:
      return null;
  }
}
function Zp(e, t) {
  if (Hn) return e === "compositionend" || !$o && Zd(e, t) ? (e = Yd(), Kl = Oo = sn = null, Hn = !1, e) : null;
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
      return Xd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Jp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ki(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Jp[e.type] : t === "textarea";
}
function eu(e, t, n, r) {
  Td(r), t = us(t, "onChange"), 0 < t.length && (n = new zo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var $r = null, Jr = null;
function eh(e) {
  uu(e, 0);
}
function Ts(e) {
  var t = qn(e);
  if (Sd(t)) return e;
}
function th(e, t) {
  if (e === "change") return t;
}
var tu = !1;
if (Qt) {
  var ra;
  if (Qt) {
    var la = "oninput" in document;
    if (!la) {
      var Gi = document.createElement("div");
      Gi.setAttribute("oninput", "return;"), la = typeof Gi.oninput == "function";
    }
    ra = la;
  } else ra = !1;
  tu = ra && (!document.documentMode || 9 < document.documentMode);
}
function qi() {
  $r && ($r.detachEvent("onpropertychange", nu), Jr = $r = null);
}
function nu(e) {
  if (e.propertyName === "value" && Ts(Jr)) {
    var t = [];
    eu(t, Jr, e, Lo(e)), Rd(eh, t);
  }
}
function nh(e, t, n) {
  e === "focusin" ? (qi(), $r = t, Jr = n, $r.attachEvent("onpropertychange", nu)) : e === "focusout" && qi();
}
function rh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ts(Jr);
}
function lh(e, t) {
  if (e === "click") return Ts(t);
}
function sh(e, t) {
  if (e === "input" || e === "change") return Ts(t);
}
function ah(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Lt = typeof Object.is == "function" ? Object.is : ah;
function el(e, t) {
  if (Lt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!ja.call(t, s) || !Lt(e[s], t[s])) return !1;
  }
  return !0;
}
function Yi(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Xi(e, t) {
  var n = Yi(e);
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
    n = Yi(n);
  }
}
function ru(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ru(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function lu() {
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
function oh(e) {
  var t = lu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && ru(n.ownerDocument.documentElement, n)) {
    if (r !== null && Wo(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var s = n.textContent.length, a = Math.min(r.start, s);
        r = r.end === void 0 ? a : Math.min(r.end, s), !e.extend && a > r && (s = r, r = a, a = s), s = Xi(n, a);
        var o = Xi(
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
var ih = Qt && "documentMode" in document && 11 >= document.documentMode, Kn = null, Ba = null, Wr = null, Qa = !1;
function Zi(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Qa || Kn == null || Kn !== ls(r) || (r = Kn, "selectionStart" in r && Wo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Wr && el(Wr, r) || (Wr = r, r = us(Ba, "onSelect"), 0 < r.length && (t = new zo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Kn)));
}
function Tl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Gn = { animationend: Tl("Animation", "AnimationEnd"), animationiteration: Tl("Animation", "AnimationIteration"), animationstart: Tl("Animation", "AnimationStart"), transitionend: Tl("Transition", "TransitionEnd") }, sa = {}, su = {};
Qt && (su = document.createElement("div").style, "AnimationEvent" in window || (delete Gn.animationend.animation, delete Gn.animationiteration.animation, delete Gn.animationstart.animation), "TransitionEvent" in window || delete Gn.transitionend.transition);
function Ls(e) {
  if (sa[e]) return sa[e];
  if (!Gn[e]) return e;
  var t = Gn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in su) return sa[e] = t[n];
  return e;
}
var au = Ls("animationend"), ou = Ls("animationiteration"), iu = Ls("animationstart"), cu = Ls("transitionend"), du = /* @__PURE__ */ new Map(), Ji = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function wn(e, t) {
  du.set(e, t), zn(t, [e]);
}
for (var aa = 0; aa < Ji.length; aa++) {
  var oa = Ji[aa], ch = oa.toLowerCase(), dh = oa[0].toUpperCase() + oa.slice(1);
  wn(ch, "on" + dh);
}
wn(au, "onAnimationEnd");
wn(ou, "onAnimationIteration");
wn(iu, "onAnimationStart");
wn("dblclick", "onDoubleClick");
wn("focusin", "onFocus");
wn("focusout", "onBlur");
wn(cu, "onTransitionEnd");
cr("onMouseEnter", ["mouseout", "mouseover"]);
cr("onMouseLeave", ["mouseout", "mouseover"]);
cr("onPointerEnter", ["pointerout", "pointerover"]);
cr("onPointerLeave", ["pointerout", "pointerover"]);
zn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
zn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
zn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
zn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
zn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
zn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Pr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), uh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Pr));
function ec(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, cp(r, t, void 0, e), e.currentTarget = null;
}
function uu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], s = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var i = r[o], c = i.instance, d = i.currentTarget;
        if (i = i.listener, c !== a && s.isPropagationStopped()) break e;
        ec(s, i, d), a = c;
      }
      else for (o = 0; o < r.length; o++) {
        if (i = r[o], c = i.instance, d = i.currentTarget, i = i.listener, c !== a && s.isPropagationStopped()) break e;
        ec(s, i, d), a = c;
      }
    }
  }
  if (as) throw e = $a, as = !1, $a = null, e;
}
function xe(e, t) {
  var n = t[Ya];
  n === void 0 && (n = t[Ya] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (mu(t, e, 2, !1), n.add(r));
}
function ia(e, t, n) {
  var r = 0;
  t && (r |= 4), mu(n, e, r, t);
}
var Ll = "_reactListening" + Math.random().toString(36).slice(2);
function tl(e) {
  if (!e[Ll]) {
    e[Ll] = !0, wd.forEach(function(n) {
      n !== "selectionchange" && (uh.has(n) || ia(n, !1, e), ia(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ll] || (t[Ll] = !0, ia("selectionchange", !1, t));
  }
}
function mu(e, t, n, r) {
  switch (qd(t)) {
    case 1:
      var s = jp;
      break;
    case 4:
      s = Cp;
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
        if (o = En(i), o === null) return;
        if (c = o.tag, c === 5 || c === 6) {
          r = a = o;
          continue e;
        }
        i = i.parentNode;
      }
    }
    r = r.return;
  }
  Rd(function() {
    var d = a, h = Lo(n), w = [];
    e: {
      var y = du.get(e);
      if (y !== void 0) {
        var S = zo, x = e;
        switch (e) {
          case "keypress":
            if (Gl(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = Wp;
            break;
          case "focusin":
            x = "focus", S = na;
            break;
          case "focusout":
            x = "blur", S = na;
            break;
          case "beforeblur":
          case "afterblur":
            S = na;
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
            S = Ui;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = Ip;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = Bp;
            break;
          case au:
          case ou:
          case iu:
            S = Lp;
            break;
          case cu:
            S = Hp;
            break;
          case "scroll":
            S = Ep;
            break;
          case "wheel":
            S = Gp;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = Dp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = Bi;
        }
        var k = (t & 4) !== 0, b = !k && e === "scroll", m = k ? y !== null ? y + "Capture" : null : y;
        k = [];
        for (var f = d, u; f !== null; ) {
          u = f;
          var g = u.stateNode;
          if (u.tag === 5 && g !== null && (u = g, m !== null && (g = qr(f, m), g != null && k.push(nl(f, g, u)))), b) break;
          f = f.return;
        }
        0 < k.length && (y = new S(y, x, null, n, h), w.push({ event: y, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (y = e === "mouseover" || e === "pointerover", S = e === "mouseout" || e === "pointerout", y && n !== Oa && (x = n.relatedTarget || n.fromElement) && (En(x) || x[Ht])) break e;
        if ((S || y) && (y = h.window === h ? h : (y = h.ownerDocument) ? y.defaultView || y.parentWindow : window, S ? (x = n.relatedTarget || n.toElement, S = d, x = x ? En(x) : null, x !== null && (b = Fn(x), x !== b || x.tag !== 5 && x.tag !== 6) && (x = null)) : (S = null, x = d), S !== x)) {
          if (k = Ui, g = "onMouseLeave", m = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (k = Bi, g = "onPointerLeave", m = "onPointerEnter", f = "pointer"), b = S == null ? y : qn(S), u = x == null ? y : qn(x), y = new k(g, f + "leave", S, n, h), y.target = b, y.relatedTarget = u, g = null, En(h) === d && (k = new k(m, f + "enter", x, n, h), k.target = u, k.relatedTarget = b, g = k), b = g, S && x) t: {
            for (k = S, m = x, f = 0, u = k; u; u = Un(u)) f++;
            for (u = 0, g = m; g; g = Un(g)) u++;
            for (; 0 < f - u; ) k = Un(k), f--;
            for (; 0 < u - f; ) m = Un(m), u--;
            for (; f--; ) {
              if (k === m || m !== null && k === m.alternate) break t;
              k = Un(k), m = Un(m);
            }
            k = null;
          }
          else k = null;
          S !== null && tc(w, y, S, k, !1), x !== null && b !== null && tc(w, b, x, k, !0);
        }
      }
      e: {
        if (y = d ? qn(d) : window, S = y.nodeName && y.nodeName.toLowerCase(), S === "select" || S === "input" && y.type === "file") var _ = th;
        else if (Ki(y)) if (tu) _ = sh;
        else {
          _ = rh;
          var v = nh;
        }
        else (S = y.nodeName) && S.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (_ = lh);
        if (_ && (_ = _(e, d))) {
          eu(w, _, n, h);
          break e;
        }
        v && v(e, y, d), e === "focusout" && (v = y._wrapperState) && v.controlled && y.type === "number" && La(y, "number", y.value);
      }
      switch (v = d ? qn(d) : window, e) {
        case "focusin":
          (Ki(v) || v.contentEditable === "true") && (Kn = v, Ba = d, Wr = null);
          break;
        case "focusout":
          Wr = Ba = Kn = null;
          break;
        case "mousedown":
          Qa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Qa = !1, Zi(w, n, h);
          break;
        case "selectionchange":
          if (ih) break;
        case "keydown":
        case "keyup":
          Zi(w, n, h);
      }
      var C;
      if ($o) e: {
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
      else Hn ? Zd(e, n) && (I = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (I = "onCompositionStart");
      I && (Xd && n.locale !== "ko" && (Hn || I !== "onCompositionStart" ? I === "onCompositionEnd" && Hn && (C = Yd()) : (sn = h, Oo = "value" in sn ? sn.value : sn.textContent, Hn = !0)), v = us(d, I), 0 < v.length && (I = new Vi(I, e, null, n, h), w.push({ event: I, listeners: v }), C ? I.data = C : (C = Jd(n), C !== null && (I.data = C)))), (C = Yp ? Xp(e, n) : Zp(e, n)) && (d = us(d, "onBeforeInput"), 0 < d.length && (h = new Vi("onBeforeInput", "beforeinput", null, n, h), w.push({ event: h, listeners: d }), h.data = C));
    }
    uu(w, t);
  });
}
function nl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function us(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e, a = s.stateNode;
    s.tag === 5 && a !== null && (s = a, a = qr(e, n), a != null && r.unshift(nl(e, a, s)), a = qr(e, t), a != null && r.push(nl(e, a, s))), e = e.return;
  }
  return r;
}
function Un(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function tc(e, t, n, r, s) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var i = n, c = i.alternate, d = i.stateNode;
    if (c !== null && c === r) break;
    i.tag === 5 && d !== null && (i = d, s ? (c = qr(n, a), c != null && o.unshift(nl(n, c, i))) : s || (c = qr(n, a), c != null && o.push(nl(n, c, i)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var mh = /\r\n?/g, fh = /\u0000|\uFFFD/g;
function nc(e) {
  return (typeof e == "string" ? e : "" + e).replace(mh, `
`).replace(fh, "");
}
function Al(e, t, n) {
  if (t = nc(t), nc(e) !== t && n) throw Error(Q(425));
}
function ms() {
}
var Ha = null, Ka = null;
function Ga(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var qa = typeof setTimeout == "function" ? setTimeout : void 0, ph = typeof clearTimeout == "function" ? clearTimeout : void 0, rc = typeof Promise == "function" ? Promise : void 0, hh = typeof queueMicrotask == "function" ? queueMicrotask : typeof rc < "u" ? function(e) {
  return rc.resolve(null).then(e).catch(gh);
} : qa;
function gh(e) {
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
        e.removeChild(s), Zr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = s;
  } while (n);
  Zr(t);
}
function un(e) {
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
function lc(e) {
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
var xr = Math.random().toString(36).slice(2), Rt = "__reactFiber$" + xr, rl = "__reactProps$" + xr, Ht = "__reactContainer$" + xr, Ya = "__reactEvents$" + xr, yh = "__reactListeners$" + xr, vh = "__reactHandles$" + xr;
function En(e) {
  var t = e[Rt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ht] || n[Rt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = lc(e); e !== null; ) {
        if (n = e[Rt]) return n;
        e = lc(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function vl(e) {
  return e = e[Rt] || e[Ht], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function qn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(Q(33));
}
function As(e) {
  return e[rl] || null;
}
var Xa = [], Yn = -1;
function xn(e) {
  return { current: e };
}
function _e(e) {
  0 > Yn || (e.current = Xa[Yn], Xa[Yn] = null, Yn--);
}
function ve(e, t) {
  Yn++, Xa[Yn] = e.current, e.current = t;
}
var yn = {}, Qe = xn(yn), nt = xn(!1), An = yn;
function dr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return yn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var s = {}, a;
  for (a in n) s[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = s), s;
}
function rt(e) {
  return e = e.childContextTypes, e != null;
}
function fs() {
  _e(nt), _e(Qe);
}
function sc(e, t, n) {
  if (Qe.current !== yn) throw Error(Q(168));
  ve(Qe, t), ve(nt, n);
}
function fu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(Q(108, np(e) || "Unknown", s));
  return Ee({}, n, r);
}
function ps(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || yn, An = Qe.current, ve(Qe, e), ve(nt, nt.current), !0;
}
function ac(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(Q(169));
  n ? (e = fu(e, t, An), r.__reactInternalMemoizedMergedChildContext = e, _e(nt), _e(Qe), ve(Qe, e)) : _e(nt), ve(nt, n);
}
var Wt = null, Ds = !1, ua = !1;
function pu(e) {
  Wt === null ? Wt = [e] : Wt.push(e);
}
function wh(e) {
  Ds = !0, pu(e);
}
function _n() {
  if (!ua && Wt !== null) {
    ua = !0;
    var e = 0, t = ue;
    try {
      var n = Wt;
      for (ue = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Wt = null, Ds = !1;
    } catch (s) {
      throw Wt !== null && (Wt = Wt.slice(e + 1)), Fd(Ao, _n), s;
    } finally {
      ue = t, ua = !1;
    }
  }
  return null;
}
var Xn = [], Zn = 0, hs = null, gs = 0, pt = [], ht = 0, Dn = null, Ut = 1, Vt = "";
function jn(e, t) {
  Xn[Zn++] = gs, Xn[Zn++] = hs, hs = e, gs = t;
}
function hu(e, t, n) {
  pt[ht++] = Ut, pt[ht++] = Vt, pt[ht++] = Dn, Dn = e;
  var r = Ut;
  e = Vt;
  var s = 32 - Mt(r) - 1;
  r &= ~(1 << s), n += 1;
  var a = 32 - Mt(t) + s;
  if (30 < a) {
    var o = s - s % 5;
    a = (r & (1 << o) - 1).toString(32), r >>= o, s -= o, Ut = 1 << 32 - Mt(t) + s | n << s | r, Vt = a + e;
  } else Ut = 1 << a | n << s | r, Vt = e;
}
function Uo(e) {
  e.return !== null && (jn(e, 1), hu(e, 1, 0));
}
function Vo(e) {
  for (; e === hs; ) hs = Xn[--Zn], Xn[Zn] = null, gs = Xn[--Zn], Xn[Zn] = null;
  for (; e === Dn; ) Dn = pt[--ht], pt[ht] = null, Vt = pt[--ht], pt[ht] = null, Ut = pt[--ht], pt[ht] = null;
}
var it = null, ot = null, be = !1, Nt = null;
function gu(e, t) {
  var n = yt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function oc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, it = e, ot = un(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, it = e, ot = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Dn !== null ? { id: Ut, overflow: Vt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = yt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, it = e, ot = null, !0) : !1;
    default:
      return !1;
  }
}
function Za(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ja(e) {
  if (be) {
    var t = ot;
    if (t) {
      var n = t;
      if (!oc(e, t)) {
        if (Za(e)) throw Error(Q(418));
        t = un(n.nextSibling);
        var r = it;
        t && oc(e, t) ? gu(r, n) : (e.flags = e.flags & -4097 | 2, be = !1, it = e);
      }
    } else {
      if (Za(e)) throw Error(Q(418));
      e.flags = e.flags & -4097 | 2, be = !1, it = e;
    }
  }
}
function ic(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  it = e;
}
function Dl(e) {
  if (e !== it) return !1;
  if (!be) return ic(e), be = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ga(e.type, e.memoizedProps)), t && (t = ot)) {
    if (Za(e)) throw yu(), Error(Q(418));
    for (; t; ) gu(e, t), t = un(t.nextSibling);
  }
  if (ic(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(Q(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ot = un(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      ot = null;
    }
  } else ot = it ? un(e.stateNode.nextSibling) : null;
  return !0;
}
function yu() {
  for (var e = ot; e; ) e = un(e.nextSibling);
}
function ur() {
  ot = it = null, be = !1;
}
function Bo(e) {
  Nt === null ? Nt = [e] : Nt.push(e);
}
var xh = Yt.ReactCurrentBatchConfig;
function Ir(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(Q(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(Q(147, e));
      var s = r, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(o) {
        var i = s.refs;
        o === null ? delete i[a] : i[a] = o;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string") throw Error(Q(284));
    if (!n._owner) throw Error(Q(290, e));
  }
  return e;
}
function Rl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(Q(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function cc(e) {
  var t = e._init;
  return t(e._payload);
}
function vu(e) {
  function t(m, f) {
    if (e) {
      var u = m.deletions;
      u === null ? (m.deletions = [f], m.flags |= 16) : u.push(f);
    }
  }
  function n(m, f) {
    if (!e) return null;
    for (; f !== null; ) t(m, f), f = f.sibling;
    return null;
  }
  function r(m, f) {
    for (m = /* @__PURE__ */ new Map(); f !== null; ) f.key !== null ? m.set(f.key, f) : m.set(f.index, f), f = f.sibling;
    return m;
  }
  function s(m, f) {
    return m = hn(m, f), m.index = 0, m.sibling = null, m;
  }
  function a(m, f, u) {
    return m.index = u, e ? (u = m.alternate, u !== null ? (u = u.index, u < f ? (m.flags |= 2, f) : u) : (m.flags |= 2, f)) : (m.flags |= 1048576, f);
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function i(m, f, u, g) {
    return f === null || f.tag !== 6 ? (f = va(u, m.mode, g), f.return = m, f) : (f = s(f, u), f.return = m, f);
  }
  function c(m, f, u, g) {
    var _ = u.type;
    return _ === Qn ? h(m, f, u.props.children, g, u.key) : f !== null && (f.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === tn && cc(_) === f.type) ? (g = s(f, u.props), g.ref = Ir(m, f, u), g.return = m, g) : (g = ts(u.type, u.key, u.props, null, m.mode, g), g.ref = Ir(m, f, u), g.return = m, g);
  }
  function d(m, f, u, g) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== u.containerInfo || f.stateNode.implementation !== u.implementation ? (f = wa(u, m.mode, g), f.return = m, f) : (f = s(f, u.children || []), f.return = m, f);
  }
  function h(m, f, u, g, _) {
    return f === null || f.tag !== 7 ? (f = Ln(u, m.mode, g, _), f.return = m, f) : (f = s(f, u), f.return = m, f);
  }
  function w(m, f, u) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = va("" + f, m.mode, u), f.return = m, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Sl:
          return u = ts(f.type, f.key, f.props, null, m.mode, u), u.ref = Ir(m, null, f), u.return = m, u;
        case Bn:
          return f = wa(f, m.mode, u), f.return = m, f;
        case tn:
          var g = f._init;
          return w(m, g(f._payload), u);
      }
      if (Dr(f) || Sr(f)) return f = Ln(f, m.mode, u, null), f.return = m, f;
      Rl(m, f);
    }
    return null;
  }
  function y(m, f, u, g) {
    var _ = f !== null ? f.key : null;
    if (typeof u == "string" && u !== "" || typeof u == "number") return _ !== null ? null : i(m, f, "" + u, g);
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case Sl:
          return u.key === _ ? c(m, f, u, g) : null;
        case Bn:
          return u.key === _ ? d(m, f, u, g) : null;
        case tn:
          return _ = u._init, y(
            m,
            f,
            _(u._payload),
            g
          );
      }
      if (Dr(u) || Sr(u)) return _ !== null ? null : h(m, f, u, g, null);
      Rl(m, u);
    }
    return null;
  }
  function S(m, f, u, g, _) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return m = m.get(u) || null, i(f, m, "" + g, _);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Sl:
          return m = m.get(g.key === null ? u : g.key) || null, c(f, m, g, _);
        case Bn:
          return m = m.get(g.key === null ? u : g.key) || null, d(f, m, g, _);
        case tn:
          var v = g._init;
          return S(m, f, u, v(g._payload), _);
      }
      if (Dr(g) || Sr(g)) return m = m.get(u) || null, h(f, m, g, _, null);
      Rl(f, g);
    }
    return null;
  }
  function x(m, f, u, g) {
    for (var _ = null, v = null, C = f, I = f = 0, D = null; C !== null && I < u.length; I++) {
      C.index > I ? (D = C, C = null) : D = C.sibling;
      var N = y(m, C, u[I], g);
      if (N === null) {
        C === null && (C = D);
        break;
      }
      e && C && N.alternate === null && t(m, C), f = a(N, f, I), v === null ? _ = N : v.sibling = N, v = N, C = D;
    }
    if (I === u.length) return n(m, C), be && jn(m, I), _;
    if (C === null) {
      for (; I < u.length; I++) C = w(m, u[I], g), C !== null && (f = a(C, f, I), v === null ? _ = C : v.sibling = C, v = C);
      return be && jn(m, I), _;
    }
    for (C = r(m, C); I < u.length; I++) D = S(C, m, I, u[I], g), D !== null && (e && D.alternate !== null && C.delete(D.key === null ? I : D.key), f = a(D, f, I), v === null ? _ = D : v.sibling = D, v = D);
    return e && C.forEach(function(L) {
      return t(m, L);
    }), be && jn(m, I), _;
  }
  function k(m, f, u, g) {
    var _ = Sr(u);
    if (typeof _ != "function") throw Error(Q(150));
    if (u = _.call(u), u == null) throw Error(Q(151));
    for (var v = _ = null, C = f, I = f = 0, D = null, N = u.next(); C !== null && !N.done; I++, N = u.next()) {
      C.index > I ? (D = C, C = null) : D = C.sibling;
      var L = y(m, C, N.value, g);
      if (L === null) {
        C === null && (C = D);
        break;
      }
      e && C && L.alternate === null && t(m, C), f = a(L, f, I), v === null ? _ = L : v.sibling = L, v = L, C = D;
    }
    if (N.done) return n(
      m,
      C
    ), be && jn(m, I), _;
    if (C === null) {
      for (; !N.done; I++, N = u.next()) N = w(m, N.value, g), N !== null && (f = a(N, f, I), v === null ? _ = N : v.sibling = N, v = N);
      return be && jn(m, I), _;
    }
    for (C = r(m, C); !N.done; I++, N = u.next()) N = S(C, m, I, N.value, g), N !== null && (e && N.alternate !== null && C.delete(N.key === null ? I : N.key), f = a(N, f, I), v === null ? _ = N : v.sibling = N, v = N);
    return e && C.forEach(function($) {
      return t(m, $);
    }), be && jn(m, I), _;
  }
  function b(m, f, u, g) {
    if (typeof u == "object" && u !== null && u.type === Qn && u.key === null && (u = u.props.children), typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case Sl:
          e: {
            for (var _ = u.key, v = f; v !== null; ) {
              if (v.key === _) {
                if (_ = u.type, _ === Qn) {
                  if (v.tag === 7) {
                    n(m, v.sibling), f = s(v, u.props.children), f.return = m, m = f;
                    break e;
                  }
                } else if (v.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === tn && cc(_) === v.type) {
                  n(m, v.sibling), f = s(v, u.props), f.ref = Ir(m, v, u), f.return = m, m = f;
                  break e;
                }
                n(m, v);
                break;
              } else t(m, v);
              v = v.sibling;
            }
            u.type === Qn ? (f = Ln(u.props.children, m.mode, g, u.key), f.return = m, m = f) : (g = ts(u.type, u.key, u.props, null, m.mode, g), g.ref = Ir(m, f, u), g.return = m, m = g);
          }
          return o(m);
        case Bn:
          e: {
            for (v = u.key; f !== null; ) {
              if (f.key === v) if (f.tag === 4 && f.stateNode.containerInfo === u.containerInfo && f.stateNode.implementation === u.implementation) {
                n(m, f.sibling), f = s(f, u.children || []), f.return = m, m = f;
                break e;
              } else {
                n(m, f);
                break;
              }
              else t(m, f);
              f = f.sibling;
            }
            f = wa(u, m.mode, g), f.return = m, m = f;
          }
          return o(m);
        case tn:
          return v = u._init, b(m, f, v(u._payload), g);
      }
      if (Dr(u)) return x(m, f, u, g);
      if (Sr(u)) return k(m, f, u, g);
      Rl(m, u);
    }
    return typeof u == "string" && u !== "" || typeof u == "number" ? (u = "" + u, f !== null && f.tag === 6 ? (n(m, f.sibling), f = s(f, u), f.return = m, m = f) : (n(m, f), f = va(u, m.mode, g), f.return = m, m = f), o(m)) : n(m, f);
  }
  return b;
}
var mr = vu(!0), wu = vu(!1), ys = xn(null), vs = null, Jn = null, Qo = null;
function Ho() {
  Qo = Jn = vs = null;
}
function Ko(e) {
  var t = ys.current;
  _e(ys), e._currentValue = t;
}
function eo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function ar(e, t) {
  vs = e, Qo = Jn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (tt = !0), e.firstContext = null);
}
function xt(e) {
  var t = e._currentValue;
  if (Qo !== e) if (e = { context: e, memoizedValue: t, next: null }, Jn === null) {
    if (vs === null) throw Error(Q(308));
    Jn = e, vs.dependencies = { lanes: 0, firstContext: e };
  } else Jn = Jn.next = e;
  return t;
}
var Nn = null;
function Go(e) {
  Nn === null ? Nn = [e] : Nn.push(e);
}
function xu(e, t, n, r) {
  var s = t.interleaved;
  return s === null ? (n.next = n, Go(t)) : (n.next = s.next, s.next = n), t.interleaved = n, Kt(e, r);
}
function Kt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var nn = !1;
function qo(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function _u(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Bt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function mn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, ce & 2) {
    var s = r.pending;
    return s === null ? t.next = t : (t.next = s.next, s.next = t), r.pending = t, Kt(e, n);
  }
  return s = r.interleaved, s === null ? (t.next = t, Go(r)) : (t.next = s.next, s.next = t), r.interleaved = t, Kt(e, n);
}
function ql(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Do(e, n);
  }
}
function dc(e, t) {
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
  nn = !1;
  var a = s.firstBaseUpdate, o = s.lastBaseUpdate, i = s.shared.pending;
  if (i !== null) {
    s.shared.pending = null;
    var c = i, d = c.next;
    c.next = null, o === null ? a = d : o.next = d, o = c;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, i = h.lastBaseUpdate, i !== o && (i === null ? h.firstBaseUpdate = d : i.next = d, h.lastBaseUpdate = c));
  }
  if (a !== null) {
    var w = s.baseState;
    o = 0, h = d = c = null, i = a;
    do {
      var y = i.lane, S = i.eventTime;
      if ((r & y) === y) {
        h !== null && (h = h.next = {
          eventTime: S,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var x = e, k = i;
          switch (y = t, S = n, k.tag) {
            case 1:
              if (x = k.payload, typeof x == "function") {
                w = x.call(S, w, y);
                break e;
              }
              w = x;
              break e;
            case 3:
              x.flags = x.flags & -65537 | 128;
            case 0:
              if (x = k.payload, y = typeof x == "function" ? x.call(S, w, y) : x, y == null) break e;
              w = Ee({}, w, y);
              break e;
            case 2:
              nn = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, y = s.effects, y === null ? s.effects = [i] : y.push(i));
      } else S = { eventTime: S, lane: y, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, h === null ? (d = h = S, c = w) : h = h.next = S, o |= y;
      if (i = i.next, i === null) {
        if (i = s.shared.pending, i === null) break;
        y = i, i = y.next, y.next = null, s.lastBaseUpdate = y, s.shared.pending = null;
      }
    } while (!0);
    if (h === null && (c = w), s.baseState = c, s.firstBaseUpdate = d, s.lastBaseUpdate = h, t = s.shared.interleaved, t !== null) {
      s = t;
      do
        o |= s.lane, s = s.next;
      while (s !== t);
    } else a === null && (s.shared.lanes = 0);
    Pn |= o, e.lanes = o, e.memoizedState = w;
  }
}
function uc(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], s = r.callback;
    if (s !== null) {
      if (r.callback = null, r = n, typeof s != "function") throw Error(Q(191, s));
      s.call(r);
    }
  }
}
var wl = {}, Ot = xn(wl), ll = xn(wl), sl = xn(wl);
function In(e) {
  if (e === wl) throw Error(Q(174));
  return e;
}
function Yo(e, t) {
  switch (ve(sl, t), ve(ll, e), ve(Ot, wl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Da(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Da(t, e);
  }
  _e(Ot), ve(Ot, t);
}
function fr() {
  _e(Ot), _e(ll), _e(sl);
}
function ku(e) {
  In(sl.current);
  var t = In(Ot.current), n = Da(t, e.type);
  t !== n && (ve(ll, e), ve(Ot, n));
}
function Xo(e) {
  ll.current === e && (_e(Ot), _e(ll));
}
var je = xn(0);
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
var ma = [];
function Zo() {
  for (var e = 0; e < ma.length; e++) ma[e]._workInProgressVersionPrimary = null;
  ma.length = 0;
}
var Yl = Yt.ReactCurrentDispatcher, fa = Yt.ReactCurrentBatchConfig, Rn = 0, Ce = null, De = null, Pe = null, _s = !1, Ur = !1, al = 0, _h = 0;
function Ue() {
  throw Error(Q(321));
}
function Jo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Lt(e[n], t[n])) return !1;
  return !0;
}
function ei(e, t, n, r, s, a) {
  if (Rn = a, Ce = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Yl.current = e === null || e.memoizedState === null ? jh : Ch, e = n(r, s), Ur) {
    a = 0;
    do {
      if (Ur = !1, al = 0, 25 <= a) throw Error(Q(301));
      a += 1, Pe = De = null, t.updateQueue = null, Yl.current = Eh, e = n(r, s);
    } while (Ur);
  }
  if (Yl.current = ks, t = De !== null && De.next !== null, Rn = 0, Pe = De = Ce = null, _s = !1, t) throw Error(Q(300));
  return e;
}
function ti() {
  var e = al !== 0;
  return al = 0, e;
}
function Dt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Pe === null ? Ce.memoizedState = Pe = e : Pe = Pe.next = e, Pe;
}
function _t() {
  if (De === null) {
    var e = Ce.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = De.next;
  var t = Pe === null ? Ce.memoizedState : Pe.next;
  if (t !== null) Pe = t, De = e;
  else {
    if (e === null) throw Error(Q(310));
    De = e, e = { memoizedState: De.memoizedState, baseState: De.baseState, baseQueue: De.baseQueue, queue: De.queue, next: null }, Pe === null ? Ce.memoizedState = Pe = e : Pe = Pe.next = e;
  }
  return Pe;
}
function ol(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function pa(e) {
  var t = _t(), n = t.queue;
  if (n === null) throw Error(Q(311));
  n.lastRenderedReducer = e;
  var r = De, s = r.baseQueue, a = n.pending;
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
      if ((Rn & h) === h) c !== null && (c = c.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var w = {
          lane: h,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        c === null ? (i = c = w, o = r) : c = c.next = w, Ce.lanes |= h, Pn |= h;
      }
      d = d.next;
    } while (d !== null && d !== a);
    c === null ? o = r : c.next = i, Lt(r, t.memoizedState) || (tt = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    s = e;
    do
      a = s.lane, Ce.lanes |= a, Pn |= a, s = s.next;
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ha(e) {
  var t = _t(), n = t.queue;
  if (n === null) throw Error(Q(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, s = n.pending, a = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var o = s = s.next;
    do
      a = e(a, o.action), o = o.next;
    while (o !== s);
    Lt(a, t.memoizedState) || (tt = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function bu() {
}
function Su(e, t) {
  var n = Ce, r = _t(), s = t(), a = !Lt(r.memoizedState, s);
  if (a && (r.memoizedState = s, tt = !0), r = r.queue, ni(Eu.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || Pe !== null && Pe.memoizedState.tag & 1) {
    if (n.flags |= 2048, il(9, Cu.bind(null, n, r, s, t), void 0, null), Oe === null) throw Error(Q(349));
    Rn & 30 || ju(n, t, s);
  }
  return s;
}
function ju(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ce.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ce.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Cu(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Nu(t) && Iu(e);
}
function Eu(e, t, n) {
  return n(function() {
    Nu(t) && Iu(e);
  });
}
function Nu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Lt(e, n);
  } catch {
    return !0;
  }
}
function Iu(e) {
  var t = Kt(e, 1);
  t !== null && Tt(t, e, 1, -1);
}
function mc(e) {
  var t = Dt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ol, lastRenderedState: e }, t.queue = e, e = e.dispatch = Sh.bind(null, Ce, e), [t.memoizedState, e];
}
function il(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ce.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ce.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Mu() {
  return _t().memoizedState;
}
function Xl(e, t, n, r) {
  var s = Dt();
  Ce.flags |= e, s.memoizedState = il(1 | t, n, void 0, r === void 0 ? null : r);
}
function Rs(e, t, n, r) {
  var s = _t();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (De !== null) {
    var o = De.memoizedState;
    if (a = o.destroy, r !== null && Jo(r, o.deps)) {
      s.memoizedState = il(t, n, a, r);
      return;
    }
  }
  Ce.flags |= e, s.memoizedState = il(1 | t, n, a, r);
}
function fc(e, t) {
  return Xl(8390656, 8, e, t);
}
function ni(e, t) {
  return Rs(2048, 8, e, t);
}
function Tu(e, t) {
  return Rs(4, 2, e, t);
}
function Lu(e, t) {
  return Rs(4, 4, e, t);
}
function Au(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Du(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Rs(4, 4, Au.bind(null, t, e), n);
}
function ri() {
}
function Ru(e, t) {
  var n = _t();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Jo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Pu(e, t) {
  var n = _t();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Jo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ou(e, t, n) {
  return Rn & 21 ? (Lt(n, t) || (n = Ud(), Ce.lanes |= n, Pn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, tt = !0), e.memoizedState = n);
}
function kh(e, t) {
  var n = ue;
  ue = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = fa.transition;
  fa.transition = {};
  try {
    e(!1), t();
  } finally {
    ue = n, fa.transition = r;
  }
}
function zu() {
  return _t().memoizedState;
}
function bh(e, t, n) {
  var r = pn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Fu(e)) $u(t, n);
  else if (n = xu(e, t, n, r), n !== null) {
    var s = Ke();
    Tt(n, e, r, s), Wu(n, t, r);
  }
}
function Sh(e, t, n) {
  var r = pn(e), s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Fu(e)) $u(t, s);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var o = t.lastRenderedState, i = a(o, n);
      if (s.hasEagerState = !0, s.eagerState = i, Lt(i, o)) {
        var c = t.interleaved;
        c === null ? (s.next = s, Go(t)) : (s.next = c.next, c.next = s), t.interleaved = s;
        return;
      }
    } catch {
    } finally {
    }
    n = xu(e, t, s, r), n !== null && (s = Ke(), Tt(n, e, r, s), Wu(n, t, r));
  }
}
function Fu(e) {
  var t = e.alternate;
  return e === Ce || t !== null && t === Ce;
}
function $u(e, t) {
  Ur = _s = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Wu(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Do(e, n);
  }
}
var ks = { readContext: xt, useCallback: Ue, useContext: Ue, useEffect: Ue, useImperativeHandle: Ue, useInsertionEffect: Ue, useLayoutEffect: Ue, useMemo: Ue, useReducer: Ue, useRef: Ue, useState: Ue, useDebugValue: Ue, useDeferredValue: Ue, useTransition: Ue, useMutableSource: Ue, useSyncExternalStore: Ue, useId: Ue, unstable_isNewReconciler: !1 }, jh = { readContext: xt, useCallback: function(e, t) {
  return Dt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: xt, useEffect: fc, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Xl(
    4194308,
    4,
    Au.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Xl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Xl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Dt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Dt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = bh.bind(null, Ce, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Dt();
  return e = { current: e }, t.memoizedState = e;
}, useState: mc, useDebugValue: ri, useDeferredValue: function(e) {
  return Dt().memoizedState = e;
}, useTransition: function() {
  var e = mc(!1), t = e[0];
  return e = kh.bind(null, e[1]), Dt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Ce, s = Dt();
  if (be) {
    if (n === void 0) throw Error(Q(407));
    n = n();
  } else {
    if (n = t(), Oe === null) throw Error(Q(349));
    Rn & 30 || ju(r, t, n);
  }
  s.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return s.queue = a, fc(Eu.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, il(9, Cu.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = Dt(), t = Oe.identifierPrefix;
  if (be) {
    var n = Vt, r = Ut;
    n = (r & ~(1 << 32 - Mt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = al++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = _h++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Ch = {
  readContext: xt,
  useCallback: Ru,
  useContext: xt,
  useEffect: ni,
  useImperativeHandle: Du,
  useInsertionEffect: Tu,
  useLayoutEffect: Lu,
  useMemo: Pu,
  useReducer: pa,
  useRef: Mu,
  useState: function() {
    return pa(ol);
  },
  useDebugValue: ri,
  useDeferredValue: function(e) {
    var t = _t();
    return Ou(t, De.memoizedState, e);
  },
  useTransition: function() {
    var e = pa(ol)[0], t = _t().memoizedState;
    return [e, t];
  },
  useMutableSource: bu,
  useSyncExternalStore: Su,
  useId: zu,
  unstable_isNewReconciler: !1
}, Eh = { readContext: xt, useCallback: Ru, useContext: xt, useEffect: ni, useImperativeHandle: Du, useInsertionEffect: Tu, useLayoutEffect: Lu, useMemo: Pu, useReducer: ha, useRef: Mu, useState: function() {
  return ha(ol);
}, useDebugValue: ri, useDeferredValue: function(e) {
  var t = _t();
  return De === null ? t.memoizedState = e : Ou(t, De.memoizedState, e);
}, useTransition: function() {
  var e = ha(ol)[0], t = _t().memoizedState;
  return [e, t];
}, useMutableSource: bu, useSyncExternalStore: Su, useId: zu, unstable_isNewReconciler: !1 };
function Ct(e, t) {
  if (e && e.defaultProps) {
    t = Ee({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function to(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Ee({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ps = { isMounted: function(e) {
  return (e = e._reactInternals) ? Fn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ke(), s = pn(e), a = Bt(r, s);
  a.payload = t, n != null && (a.callback = n), t = mn(e, a, s), t !== null && (Tt(t, e, s, r), ql(t, e, s));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ke(), s = pn(e), a = Bt(r, s);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = mn(e, a, s), t !== null && (Tt(t, e, s, r), ql(t, e, s));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ke(), r = pn(e), s = Bt(n, r);
  s.tag = 2, t != null && (s.callback = t), t = mn(e, s, r), t !== null && (Tt(t, e, r, n), ql(t, e, r));
} };
function pc(e, t, n, r, s, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !el(n, r) || !el(s, a) : !0;
}
function Uu(e, t, n) {
  var r = !1, s = yn, a = t.contextType;
  return typeof a == "object" && a !== null ? a = xt(a) : (s = rt(t) ? An : Qe.current, r = t.contextTypes, a = (r = r != null) ? dr(e, s) : yn), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ps, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function hc(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ps.enqueueReplaceState(t, t.state, null);
}
function no(e, t, n, r) {
  var s = e.stateNode;
  s.props = n, s.state = e.memoizedState, s.refs = {}, qo(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? s.context = xt(a) : (a = rt(t) ? An : Qe.current, s.context = dr(e, a)), s.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (to(e, t, a, n), s.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), t !== s.state && Ps.enqueueReplaceState(s, s.state, null), ws(e, n, s, r), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}
function pr(e, t) {
  try {
    var n = "", r = t;
    do
      n += tp(r), r = r.return;
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
var Nh = typeof WeakMap == "function" ? WeakMap : Map;
function Vu(e, t, n) {
  n = Bt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ss || (Ss = !0, po = r), ro(e, t);
  }, n;
}
function Bu(e, t, n) {
  n = Bt(-1, n), n.tag = 3;
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
function gc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Nh();
    var s = /* @__PURE__ */ new Set();
    r.set(t, s);
  } else s = r.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), r.set(t, s));
  s.has(n) || (s.add(n), e = Uh.bind(null, e, t, n), t.then(e, e));
}
function yc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function vc(e, t, n, r, s) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = s, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Bt(-1, 1), t.tag = 2, mn(n, t, 1))), n.lanes |= 1), e);
}
var Ih = Yt.ReactCurrentOwner, tt = !1;
function He(e, t, n, r) {
  t.child = e === null ? wu(t, null, n, r) : mr(t, e.child, n, r);
}
function wc(e, t, n, r, s) {
  n = n.render;
  var a = t.ref;
  return ar(t, s), r = ei(e, t, n, r, a, s), n = ti(), e !== null && !tt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, Gt(e, t, s)) : (be && n && Uo(t), t.flags |= 1, He(e, t, r, s), t.child);
}
function xc(e, t, n, r, s) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !ui(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Qu(e, t, a, r, s)) : (e = ts(n.type, null, r, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & s)) {
    var o = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : el, n(o, r) && e.ref === t.ref) return Gt(e, t, s);
  }
  return t.flags |= 1, e = hn(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Qu(e, t, n, r, s) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (el(a, r) && e.ref === t.ref) if (tt = !1, t.pendingProps = r = a, (e.lanes & s) !== 0) e.flags & 131072 && (tt = !0);
    else return t.lanes = e.lanes, Gt(e, t, s);
  }
  return lo(e, t, n, r, s);
}
function Hu(e, t, n) {
  var r = t.pendingProps, s = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ve(tr, at), at |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ve(tr, at), at |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, ve(tr, at), at |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, ve(tr, at), at |= r;
  return He(e, t, s, n), t.child;
}
function Ku(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function lo(e, t, n, r, s) {
  var a = rt(n) ? An : Qe.current;
  return a = dr(t, a), ar(t, s), n = ei(e, t, n, r, a, s), r = ti(), e !== null && !tt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, Gt(e, t, s)) : (be && r && Uo(t), t.flags |= 1, He(e, t, n, s), t.child);
}
function _c(e, t, n, r, s) {
  if (rt(n)) {
    var a = !0;
    ps(t);
  } else a = !1;
  if (ar(t, s), t.stateNode === null) Zl(e, t), Uu(t, n, r), no(t, n, r, s), r = !0;
  else if (e === null) {
    var o = t.stateNode, i = t.memoizedProps;
    o.props = i;
    var c = o.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = xt(d) : (d = rt(n) ? An : Qe.current, d = dr(t, d));
    var h = n.getDerivedStateFromProps, w = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    w || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || c !== d) && hc(t, o, r, d), nn = !1;
    var y = t.memoizedState;
    o.state = y, ws(t, r, o, s), c = t.memoizedState, i !== r || y !== c || nt.current || nn ? (typeof h == "function" && (to(t, n, h, r), c = t.memoizedState), (i = nn || pc(t, n, i, r, y, c, d)) ? (w || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = d, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, _u(e, t), i = t.memoizedProps, d = t.type === t.elementType ? i : Ct(t.type, i), o.props = d, w = t.pendingProps, y = o.context, c = n.contextType, typeof c == "object" && c !== null ? c = xt(c) : (c = rt(n) ? An : Qe.current, c = dr(t, c));
    var S = n.getDerivedStateFromProps;
    (h = typeof S == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== w || y !== c) && hc(t, o, r, c), nn = !1, y = t.memoizedState, o.state = y, ws(t, r, o, s);
    var x = t.memoizedState;
    i !== w || y !== x || nt.current || nn ? (typeof S == "function" && (to(t, n, S, r), x = t.memoizedState), (d = nn || pc(t, n, d, r, y, x, c) || !1) ? (h || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, x, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, x, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), o.props = r, o.state = x, o.context = c, r = d) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return so(e, t, n, r, a, s);
}
function so(e, t, n, r, s, a) {
  Ku(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return s && ac(t, n, !1), Gt(e, t, a);
  r = t.stateNode, Ih.current = t;
  var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = mr(t, e.child, null, a), t.child = mr(t, null, i, a)) : He(e, t, i, a), t.memoizedState = r.state, s && ac(t, n, !0), t.child;
}
function Gu(e) {
  var t = e.stateNode;
  t.pendingContext ? sc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && sc(e, t.context, !1), Yo(e, t.containerInfo);
}
function kc(e, t, n, r, s) {
  return ur(), Bo(s), t.flags |= 256, He(e, t, n, r), t.child;
}
var ao = { dehydrated: null, treeContext: null, retryLane: 0 };
function oo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function qu(e, t, n) {
  var r = t.pendingProps, s = je.current, a = !1, o = (t.flags & 128) !== 0, i;
  if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0), i ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1), ve(je, s & 1), e === null)
    return Ja(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = { mode: "hidden", children: o }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = Fs(o, r, 0, null), e = Ln(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = oo(n), t.memoizedState = ao, e) : li(t, o));
  if (s = e.memoizedState, s !== null && (i = s.dehydrated, i !== null)) return Mh(e, t, o, r, i, s, n);
  if (a) {
    a = r.fallback, o = t.mode, s = e.child, i = s.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== s ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = hn(s, c), r.subtreeFlags = s.subtreeFlags & 14680064), i !== null ? a = hn(i, a) : (a = Ln(a, o, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? oo(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = ao, r;
  }
  return a = e.child, e = a.sibling, r = hn(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function li(e, t) {
  return t = Fs({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Pl(e, t, n, r) {
  return r !== null && Bo(r), mr(t, e.child, null, n), e = li(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Mh(e, t, n, r, s, a, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ga(Error(Q(422))), Pl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, s = t.mode, r = Fs({ mode: "visible", children: r.children }, s, 0, null), a = Ln(a, s, o, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && mr(t, e.child, null, o), t.child.memoizedState = oo(o), t.memoizedState = ao, a);
  if (!(t.mode & 1)) return Pl(e, t, o, null);
  if (s.data === "$!") {
    if (r = s.nextSibling && s.nextSibling.dataset, r) var i = r.dgst;
    return r = i, a = Error(Q(419)), r = ga(a, r, void 0), Pl(e, t, o, r);
  }
  if (i = (o & e.childLanes) !== 0, tt || i) {
    if (r = Oe, r !== null) {
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
      s = s & (r.suspendedLanes | o) ? 0 : s, s !== 0 && s !== a.retryLane && (a.retryLane = s, Kt(e, s), Tt(r, e, s, -1));
    }
    return di(), r = ga(Error(Q(421))), Pl(e, t, o, r);
  }
  return s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Vh.bind(null, e), s._reactRetry = t, null) : (e = a.treeContext, ot = un(s.nextSibling), it = t, be = !0, Nt = null, e !== null && (pt[ht++] = Ut, pt[ht++] = Vt, pt[ht++] = Dn, Ut = e.id, Vt = e.overflow, Dn = t), t = li(t, r.children), t.flags |= 4096, t);
}
function bc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), eo(e.return, t, n);
}
function ya(e, t, n, r, s) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: s } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = s);
}
function Yu(e, t, n) {
  var r = t.pendingProps, s = r.revealOrder, a = r.tail;
  if (He(e, t, r.children, n), r = je.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && bc(e, n, t);
      else if (e.tag === 19) bc(e, n, t);
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
  if (ve(je, r), !(t.mode & 1)) t.memoizedState = null;
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
function Gt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Pn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(Q(153));
  if (t.child !== null) {
    for (e = t.child, n = hn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = hn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Th(e, t, n) {
  switch (t.tag) {
    case 3:
      Gu(t), ur();
      break;
    case 5:
      ku(t);
      break;
    case 1:
      rt(t.type) && ps(t);
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
        return r.dehydrated !== null ? (ve(je, je.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? qu(e, t, n) : (ve(je, je.current & 1), e = Gt(e, t, n), e !== null ? e.sibling : null);
      ve(je, je.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Yu(e, t, n);
        t.flags |= 128;
      }
      if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), ve(je, je.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Hu(e, t, n);
  }
  return Gt(e, t, n);
}
var Xu, io, Zu, Ju;
Xu = function(e, t) {
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
Zu = function(e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    e = t.stateNode, In(Ot.current);
    var a = null;
    switch (n) {
      case "input":
        s = Ma(e, s), r = Ma(e, r), a = [];
        break;
      case "select":
        s = Ee({}, s, { value: void 0 }), r = Ee({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        s = Aa(e, s), r = Aa(e, r), a = [];
        break;
      default:
        typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ms);
    }
    Ra(n, r);
    var o;
    n = null;
    for (d in s) if (!r.hasOwnProperty(d) && s.hasOwnProperty(d) && s[d] != null) if (d === "style") {
      var i = s[d];
      for (o in i) i.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Kr.hasOwnProperty(d) ? a || (a = []) : (a = a || []).push(d, null));
    for (d in r) {
      var c = r[d];
      if (i = s != null ? s[d] : void 0, r.hasOwnProperty(d) && c !== i && (c != null || i != null)) if (d === "style") if (i) {
        for (o in i) !i.hasOwnProperty(o) || c && c.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in c) c.hasOwnProperty(o) && i[o] !== c[o] && (n || (n = {}), n[o] = c[o]);
      } else n || (a || (a = []), a.push(
        d,
        n
      )), n = c;
      else d === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, i = i ? i.__html : void 0, c != null && i !== c && (a = a || []).push(d, c)) : d === "children" ? typeof c != "string" && typeof c != "number" || (a = a || []).push(d, "" + c) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Kr.hasOwnProperty(d) ? (c != null && d === "onScroll" && xe("scroll", e), a || i === c || (a = [])) : (a = a || []).push(d, c));
    }
    n && (a = a || []).push("style", n);
    var d = a;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Ju = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Mr(e, t) {
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
function Ve(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags & 14680064, r |= s.flags & 14680064, s.return = e, s = s.sibling;
  else for (s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags, r |= s.flags, s.return = e, s = s.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Lh(e, t, n) {
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
      return Ve(t), null;
    case 1:
      return rt(t.type) && fs(), Ve(t), null;
    case 3:
      return r = t.stateNode, fr(), _e(nt), _e(Qe), Zo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Dl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Nt !== null && (yo(Nt), Nt = null))), io(e, t), Ve(t), null;
    case 5:
      Xo(t);
      var s = In(sl.current);
      if (n = t.type, e !== null && t.stateNode != null) Zu(e, t, n, r, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(Q(166));
          return Ve(t), null;
        }
        if (e = In(Ot.current), Dl(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[Rt] = t, r[rl] = a, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              xe("cancel", r), xe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              xe("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < Pr.length; s++) xe(Pr[s], r);
              break;
            case "source":
              xe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              xe(
                "error",
                r
              ), xe("load", r);
              break;
            case "details":
              xe("toggle", r);
              break;
            case "input":
              Li(r, a), xe("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, xe("invalid", r);
              break;
            case "textarea":
              Di(r, a), xe("invalid", r);
          }
          Ra(n, a), s = null;
          for (var o in a) if (a.hasOwnProperty(o)) {
            var i = a[o];
            o === "children" ? typeof i == "string" ? r.textContent !== i && (a.suppressHydrationWarning !== !0 && Al(r.textContent, i, e), s = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (a.suppressHydrationWarning !== !0 && Al(
              r.textContent,
              i,
              e
            ), s = ["children", "" + i]) : Kr.hasOwnProperty(o) && i != null && o === "onScroll" && xe("scroll", r);
          }
          switch (n) {
            case "input":
              jl(r), Ai(r, a, !0);
              break;
            case "textarea":
              jl(r), Ri(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = ms);
          }
          r = s, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = s.nodeType === 9 ? s : s.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ed(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Rt] = t, e[rl] = r, Xu(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = Pa(n, r), n) {
              case "dialog":
                xe("cancel", e), xe("close", e), s = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                xe("load", e), s = r;
                break;
              case "video":
              case "audio":
                for (s = 0; s < Pr.length; s++) xe(Pr[s], e);
                s = r;
                break;
              case "source":
                xe("error", e), s = r;
                break;
              case "img":
              case "image":
              case "link":
                xe(
                  "error",
                  e
                ), xe("load", e), s = r;
                break;
              case "details":
                xe("toggle", e), s = r;
                break;
              case "input":
                Li(e, r), s = Ma(e, r), xe("invalid", e);
                break;
              case "option":
                s = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, s = Ee({}, r, { value: void 0 }), xe("invalid", e);
                break;
              case "textarea":
                Di(e, r), s = Aa(e, r), xe("invalid", e);
                break;
              default:
                s = r;
            }
            Ra(n, s), i = s;
            for (a in i) if (i.hasOwnProperty(a)) {
              var c = i[a];
              a === "style" ? Md(e, c) : a === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && Nd(e, c)) : a === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Gr(e, c) : typeof c == "number" && Gr(e, "" + c) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Kr.hasOwnProperty(a) ? c != null && a === "onScroll" && xe("scroll", e) : c != null && No(e, a, c, o));
            }
            switch (n) {
              case "input":
                jl(e), Ai(e, r, !1);
                break;
              case "textarea":
                jl(e), Ri(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + gn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? nr(e, !!r.multiple, a, !1) : r.defaultValue != null && nr(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = ms);
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
      return Ve(t), null;
    case 6:
      if (e && t.stateNode != null) Ju(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(Q(166));
        if (n = In(sl.current), In(Ot.current), Dl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Rt] = t, (a = r.nodeValue !== n) && (e = it, e !== null)) switch (e.tag) {
            case 3:
              Al(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Al(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Rt] = t, t.stateNode = r;
      }
      return Ve(t), null;
    case 13:
      if (_e(je), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (be && ot !== null && t.mode & 1 && !(t.flags & 128)) yu(), ur(), t.flags |= 98560, a = !1;
        else if (a = Dl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error(Q(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(Q(317));
            a[Rt] = t;
          } else ur(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ve(t), a = !1;
        } else Nt !== null && (yo(Nt), Nt = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || je.current & 1 ? Re === 0 && (Re = 3) : di())), t.updateQueue !== null && (t.flags |= 4), Ve(t), null);
    case 4:
      return fr(), io(e, t), e === null && tl(t.stateNode.containerInfo), Ve(t), null;
    case 10:
      return Ko(t.type._context), Ve(t), null;
    case 17:
      return rt(t.type) && fs(), Ve(t), null;
    case 19:
      if (_e(je), a = t.memoizedState, a === null) return Ve(t), null;
      if (r = (t.flags & 128) !== 0, o = a.rendering, o === null) if (r) Mr(a, !1);
      else {
        if (Re !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = xs(e), o !== null) {
            for (t.flags |= 128, Mr(a, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ve(je, je.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && Me() > hr && (t.flags |= 128, r = !0, Mr(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = xs(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Mr(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !be) return Ve(t), null;
        } else 2 * Me() - a.renderingStartTime > hr && n !== 1073741824 && (t.flags |= 128, r = !0, Mr(a, !1), t.lanes = 4194304);
        a.isBackwards ? (o.sibling = t.child, t.child = o) : (n = a.last, n !== null ? n.sibling = o : t.child = o, a.last = o);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Me(), t.sibling = null, n = je.current, ve(je, r ? n & 1 | 2 : n & 1), t) : (Ve(t), null);
    case 22:
    case 23:
      return ci(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? at & 1073741824 && (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ve(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(Q(156, t.tag));
}
function Ah(e, t) {
  switch (Vo(t), t.tag) {
    case 1:
      return rt(t.type) && fs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return fr(), _e(nt), _e(Qe), Zo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Xo(t), null;
    case 13:
      if (_e(je), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(Q(340));
        ur();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return _e(je), null;
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
var Ol = !1, Be = !1, Dh = typeof WeakSet == "function" ? WeakSet : Set, q = null;
function er(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Ie(e, t, r);
  }
  else n.current = null;
}
function co(e, t, n) {
  try {
    n();
  } catch (r) {
    Ie(e, t, r);
  }
}
var Sc = !1;
function Rh(e, t) {
  if (Ha = cs, e = lu(), Wo(e)) {
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
        var o = 0, i = -1, c = -1, d = 0, h = 0, w = e, y = null;
        t: for (; ; ) {
          for (var S; w !== n || s !== 0 && w.nodeType !== 3 || (i = o + s), w !== a || r !== 0 && w.nodeType !== 3 || (c = o + r), w.nodeType === 3 && (o += w.nodeValue.length), (S = w.firstChild) !== null; )
            y = w, w = S;
          for (; ; ) {
            if (w === e) break t;
            if (y === n && ++d === s && (i = o), y === a && ++h === r && (c = o), (S = w.nextSibling) !== null) break;
            w = y, y = w.parentNode;
          }
          w = S;
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
      var x = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (x !== null) {
            var k = x.memoizedProps, b = x.memoizedState, m = t.stateNode, f = m.getSnapshotBeforeUpdate(t.elementType === t.type ? k : Ct(t.type, k), b);
            m.__reactInternalSnapshotBeforeUpdate = f;
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
          throw Error(Q(163));
      }
    } catch (g) {
      Ie(t, t.return, g);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, q = e;
      break;
    }
    q = t.return;
  }
  return x = Sc, Sc = !1, x;
}
function Vr(e, t, n) {
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
function Os(e, t) {
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
function em(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, em(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Rt], delete t[rl], delete t[Ya], delete t[yh], delete t[vh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function tm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function jc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || tm(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function mo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ms));
  else if (r !== 4 && (e = e.child, e !== null)) for (mo(e, t, n), e = e.sibling; e !== null; ) mo(e, t, n), e = e.sibling;
}
function fo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (fo(e, t, n), e = e.sibling; e !== null; ) fo(e, t, n), e = e.sibling;
}
var ze = null, Et = !1;
function en(e, t, n) {
  for (n = n.child; n !== null; ) nm(e, t, n), n = n.sibling;
}
function nm(e, t, n) {
  if (Pt && typeof Pt.onCommitFiberUnmount == "function") try {
    Pt.onCommitFiberUnmount(Is, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Be || er(n, t);
    case 6:
      var r = ze, s = Et;
      ze = null, en(e, t, n), ze = r, Et = s, ze !== null && (Et ? (e = ze, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ze.removeChild(n.stateNode));
      break;
    case 18:
      ze !== null && (Et ? (e = ze, n = n.stateNode, e.nodeType === 8 ? da(e.parentNode, n) : e.nodeType === 1 && da(e, n), Zr(e)) : da(ze, n.stateNode));
      break;
    case 4:
      r = ze, s = Et, ze = n.stateNode.containerInfo, Et = !0, en(e, t, n), ze = r, Et = s;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Be && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        s = r = r.next;
        do {
          var a = s, o = a.destroy;
          a = a.tag, o !== void 0 && (a & 2 || a & 4) && co(n, t, o), s = s.next;
        } while (s !== r);
      }
      en(e, t, n);
      break;
    case 1:
      if (!Be && (er(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (i) {
        Ie(n, t, i);
      }
      en(e, t, n);
      break;
    case 21:
      en(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Be = (r = Be) || n.memoizedState !== null, en(e, t, n), Be = r) : en(e, t, n);
      break;
    default:
      en(e, t, n);
  }
}
function Cc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Dh()), t.forEach(function(r) {
      var s = Bh.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(s, s));
    });
  }
}
function St(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var s = n[r];
    try {
      var a = e, o = t, i = o;
      e: for (; i !== null; ) {
        switch (i.tag) {
          case 5:
            ze = i.stateNode, Et = !1;
            break e;
          case 3:
            ze = i.stateNode.containerInfo, Et = !0;
            break e;
          case 4:
            ze = i.stateNode.containerInfo, Et = !0;
            break e;
        }
        i = i.return;
      }
      if (ze === null) throw Error(Q(160));
      nm(a, o, s), ze = null, Et = !1;
      var c = s.alternate;
      c !== null && (c.return = null), s.return = null;
    } catch (d) {
      Ie(s, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) rm(t, e), t = t.sibling;
}
function rm(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (St(t, e), At(e), r & 4) {
        try {
          Vr(3, e, e.return), Os(3, e);
        } catch (k) {
          Ie(e, e.return, k);
        }
        try {
          Vr(5, e, e.return);
        } catch (k) {
          Ie(e, e.return, k);
        }
      }
      break;
    case 1:
      St(t, e), At(e), r & 512 && n !== null && er(n, n.return);
      break;
    case 5:
      if (St(t, e), At(e), r & 512 && n !== null && er(n, n.return), e.flags & 32) {
        var s = e.stateNode;
        try {
          Gr(s, "");
        } catch (k) {
          Ie(e, e.return, k);
        }
      }
      if (r & 4 && (s = e.stateNode, s != null)) {
        var a = e.memoizedProps, o = n !== null ? n.memoizedProps : a, i = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          i === "input" && a.type === "radio" && a.name != null && jd(s, a), Pa(i, o);
          var d = Pa(i, a);
          for (o = 0; o < c.length; o += 2) {
            var h = c[o], w = c[o + 1];
            h === "style" ? Md(s, w) : h === "dangerouslySetInnerHTML" ? Nd(s, w) : h === "children" ? Gr(s, w) : No(s, h, w, d);
          }
          switch (i) {
            case "input":
              Ta(s, a);
              break;
            case "textarea":
              Cd(s, a);
              break;
            case "select":
              var y = s._wrapperState.wasMultiple;
              s._wrapperState.wasMultiple = !!a.multiple;
              var S = a.value;
              S != null ? nr(s, !!a.multiple, S, !1) : y !== !!a.multiple && (a.defaultValue != null ? nr(
                s,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : nr(s, !!a.multiple, a.multiple ? [] : "", !1));
          }
          s[rl] = a;
        } catch (k) {
          Ie(e, e.return, k);
        }
      }
      break;
    case 6:
      if (St(t, e), At(e), r & 4) {
        if (e.stateNode === null) throw Error(Q(162));
        s = e.stateNode, a = e.memoizedProps;
        try {
          s.nodeValue = a;
        } catch (k) {
          Ie(e, e.return, k);
        }
      }
      break;
    case 3:
      if (St(t, e), At(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Zr(t.containerInfo);
      } catch (k) {
        Ie(e, e.return, k);
      }
      break;
    case 4:
      St(t, e), At(e);
      break;
    case 13:
      St(t, e), At(e), s = e.child, s.flags & 8192 && (a = s.memoizedState !== null, s.stateNode.isHidden = a, !a || s.alternate !== null && s.alternate.memoizedState !== null || (oi = Me())), r & 4 && Cc(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (Be = (d = Be) || h, St(t, e), Be = d) : St(t, e), At(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !h && e.mode & 1) for (q = e, h = e.child; h !== null; ) {
          for (w = q = h; q !== null; ) {
            switch (y = q, S = y.child, y.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Vr(4, y, y.return);
                break;
              case 1:
                er(y, y.return);
                var x = y.stateNode;
                if (typeof x.componentWillUnmount == "function") {
                  r = y, n = y.return;
                  try {
                    t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                  } catch (k) {
                    Ie(r, n, k);
                  }
                }
                break;
              case 5:
                er(y, y.return);
                break;
              case 22:
                if (y.memoizedState !== null) {
                  Nc(w);
                  continue;
                }
            }
            S !== null ? (S.return = y, q = S) : Nc(w);
          }
          h = h.sibling;
        }
        e: for (h = null, w = e; ; ) {
          if (w.tag === 5) {
            if (h === null) {
              h = w;
              try {
                s = w.stateNode, d ? (a = s.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (i = w.stateNode, c = w.memoizedProps.style, o = c != null && c.hasOwnProperty("display") ? c.display : null, i.style.display = Id("display", o));
              } catch (k) {
                Ie(e, e.return, k);
              }
            }
          } else if (w.tag === 6) {
            if (h === null) try {
              w.stateNode.nodeValue = d ? "" : w.memoizedProps;
            } catch (k) {
              Ie(e, e.return, k);
            }
          } else if ((w.tag !== 22 && w.tag !== 23 || w.memoizedState === null || w === e) && w.child !== null) {
            w.child.return = w, w = w.child;
            continue;
          }
          if (w === e) break e;
          for (; w.sibling === null; ) {
            if (w.return === null || w.return === e) break e;
            h === w && (h = null), w = w.return;
          }
          h === w && (h = null), w.sibling.return = w.return, w = w.sibling;
        }
      }
      break;
    case 19:
      St(t, e), At(e), r & 4 && Cc(e);
      break;
    case 21:
      break;
    default:
      St(
        t,
        e
      ), At(e);
  }
}
function At(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (tm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(Q(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (Gr(s, ""), r.flags &= -33);
          var a = jc(e);
          fo(e, a, s);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, i = jc(e);
          mo(e, i, o);
          break;
        default:
          throw Error(Q(161));
      }
    } catch (c) {
      Ie(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ph(e, t, n) {
  q = e, lm(e);
}
function lm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; q !== null; ) {
    var s = q, a = s.child;
    if (s.tag === 22 && r) {
      var o = s.memoizedState !== null || Ol;
      if (!o) {
        var i = s.alternate, c = i !== null && i.memoizedState !== null || Be;
        i = Ol;
        var d = Be;
        if (Ol = o, (Be = c) && !d) for (q = s; q !== null; ) o = q, c = o.child, o.tag === 22 && o.memoizedState !== null ? Ic(s) : c !== null ? (c.return = o, q = c) : Ic(s);
        for (; a !== null; ) q = a, lm(a), a = a.sibling;
        q = s, Ol = i, Be = d;
      }
      Ec(e);
    } else s.subtreeFlags & 8772 && a !== null ? (a.return = s, q = a) : Ec(e);
  }
}
function Ec(e) {
  for (; q !== null; ) {
    var t = q;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Be || Os(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Be) if (n === null) r.componentDidMount();
            else {
              var s = t.elementType === t.type ? n.memoizedProps : Ct(t.type, n.memoizedProps);
              r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && uc(t, a, r);
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
              uc(t, o, n);
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
                  var w = h.dehydrated;
                  w !== null && Zr(w);
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
            throw Error(Q(163));
        }
        Be || t.flags & 512 && uo(t);
      } catch (y) {
        Ie(t, t.return, y);
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
function Nc(e) {
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
function Ic(e) {
  for (; q !== null; ) {
    var t = q;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Os(4, t);
          } catch (c) {
            Ie(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              Ie(t, s, c);
            }
          }
          var a = t.return;
          try {
            uo(t);
          } catch (c) {
            Ie(t, a, c);
          }
          break;
        case 5:
          var o = t.return;
          try {
            uo(t);
          } catch (c) {
            Ie(t, o, c);
          }
      }
    } catch (c) {
      Ie(t, t.return, c);
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
var Oh = Math.ceil, bs = Yt.ReactCurrentDispatcher, si = Yt.ReactCurrentOwner, vt = Yt.ReactCurrentBatchConfig, ce = 0, Oe = null, Ae = null, Fe = 0, at = 0, tr = xn(0), Re = 0, cl = null, Pn = 0, zs = 0, ai = 0, Br = null, Je = null, oi = 0, hr = 1 / 0, $t = null, Ss = !1, po = null, fn = null, zl = !1, an = null, js = 0, Qr = 0, ho = null, Jl = -1, es = 0;
function Ke() {
  return ce & 6 ? Me() : Jl !== -1 ? Jl : Jl = Me();
}
function pn(e) {
  return e.mode & 1 ? ce & 2 && Fe !== 0 ? Fe & -Fe : xh.transition !== null ? (es === 0 && (es = Ud()), es) : (e = ue, e !== 0 || (e = window.event, e = e === void 0 ? 16 : qd(e.type)), e) : 1;
}
function Tt(e, t, n, r) {
  if (50 < Qr) throw Qr = 0, ho = null, Error(Q(185));
  gl(e, n, r), (!(ce & 2) || e !== Oe) && (e === Oe && (!(ce & 2) && (zs |= n), Re === 4 && ln(e, Fe)), lt(e, r), n === 1 && ce === 0 && !(t.mode & 1) && (hr = Me() + 500, Ds && _n()));
}
function lt(e, t) {
  var n = e.callbackNode;
  xp(e, t);
  var r = is(e, e === Oe ? Fe : 0);
  if (r === 0) n !== null && zi(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && zi(n), t === 1) e.tag === 0 ? wh(Mc.bind(null, e)) : pu(Mc.bind(null, e)), hh(function() {
      !(ce & 6) && _n();
    }), n = null;
    else {
      switch (Vd(r)) {
        case 1:
          n = Ao;
          break;
        case 4:
          n = $d;
          break;
        case 16:
          n = os;
          break;
        case 536870912:
          n = Wd;
          break;
        default:
          n = os;
      }
      n = mm(n, sm.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function sm(e, t) {
  if (Jl = -1, es = 0, ce & 6) throw Error(Q(327));
  var n = e.callbackNode;
  if (or() && e.callbackNode !== n) return null;
  var r = is(e, e === Oe ? Fe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Cs(e, r);
  else {
    t = r;
    var s = ce;
    ce |= 2;
    var a = om();
    (Oe !== e || Fe !== t) && ($t = null, hr = Me() + 500, Tn(e, t));
    do
      try {
        $h();
        break;
      } catch (i) {
        am(e, i);
      }
    while (!0);
    Ho(), bs.current = a, ce = s, Ae !== null ? t = 0 : (Oe = null, Fe = 0, t = Re);
  }
  if (t !== 0) {
    if (t === 2 && (s = Wa(e), s !== 0 && (r = s, t = go(e, s))), t === 1) throw n = cl, Tn(e, 0), ln(e, r), lt(e, Me()), n;
    if (t === 6) ln(e, r);
    else {
      if (s = e.current.alternate, !(r & 30) && !zh(s) && (t = Cs(e, r), t === 2 && (a = Wa(e), a !== 0 && (r = a, t = go(e, a))), t === 1)) throw n = cl, Tn(e, 0), ln(e, r), lt(e, Me()), n;
      switch (e.finishedWork = s, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(Q(345));
        case 2:
          Cn(e, Je, $t);
          break;
        case 3:
          if (ln(e, r), (r & 130023424) === r && (t = oi + 500 - Me(), 10 < t)) {
            if (is(e, 0) !== 0) break;
            if (s = e.suspendedLanes, (s & r) !== r) {
              Ke(), e.pingedLanes |= e.suspendedLanes & s;
              break;
            }
            e.timeoutHandle = qa(Cn.bind(null, e, Je, $t), t);
            break;
          }
          Cn(e, Je, $t);
          break;
        case 4:
          if (ln(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var o = 31 - Mt(r);
            a = 1 << o, o = t[o], o > s && (s = o), r &= ~a;
          }
          if (r = s, r = Me() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Oh(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = qa(Cn.bind(null, e, Je, $t), r);
            break;
          }
          Cn(e, Je, $t);
          break;
        case 5:
          Cn(e, Je, $t);
          break;
        default:
          throw Error(Q(329));
      }
    }
  }
  return lt(e, Me()), e.callbackNode === n ? sm.bind(null, e) : null;
}
function go(e, t) {
  var n = Br;
  return e.current.memoizedState.isDehydrated && (Tn(e, t).flags |= 256), e = Cs(e, t), e !== 2 && (t = Je, Je = n, t !== null && yo(t)), e;
}
function yo(e) {
  Je === null ? Je = e : Je.push.apply(Je, e);
}
function zh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var s = n[r], a = s.getSnapshot;
        s = s.value;
        try {
          if (!Lt(a(), s)) return !1;
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
function ln(e, t) {
  for (t &= ~ai, t &= ~zs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Mt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Mc(e) {
  if (ce & 6) throw Error(Q(327));
  or();
  var t = is(e, 0);
  if (!(t & 1)) return lt(e, Me()), null;
  var n = Cs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Wa(e);
    r !== 0 && (t = r, n = go(e, r));
  }
  if (n === 1) throw n = cl, Tn(e, 0), ln(e, t), lt(e, Me()), n;
  if (n === 6) throw Error(Q(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Cn(e, Je, $t), lt(e, Me()), null;
}
function ii(e, t) {
  var n = ce;
  ce |= 1;
  try {
    return e(t);
  } finally {
    ce = n, ce === 0 && (hr = Me() + 500, Ds && _n());
  }
}
function On(e) {
  an !== null && an.tag === 0 && !(ce & 6) && or();
  var t = ce;
  ce |= 1;
  var n = vt.transition, r = ue;
  try {
    if (vt.transition = null, ue = 1, e) return e();
  } finally {
    ue = r, vt.transition = n, ce = t, !(ce & 6) && _n();
  }
}
function ci() {
  at = tr.current, _e(tr);
}
function Tn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, ph(n)), Ae !== null) for (n = Ae.return; n !== null; ) {
    var r = n;
    switch (Vo(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && fs();
        break;
      case 3:
        fr(), _e(nt), _e(Qe), Zo();
        break;
      case 5:
        Xo(r);
        break;
      case 4:
        fr();
        break;
      case 13:
        _e(je);
        break;
      case 19:
        _e(je);
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
  if (Oe = e, Ae = e = hn(e.current, null), Fe = at = t, Re = 0, cl = null, ai = zs = Pn = 0, Je = Br = null, Nn !== null) {
    for (t = 0; t < Nn.length; t++) if (n = Nn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var s = r.next, a = n.pending;
      if (a !== null) {
        var o = a.next;
        a.next = s, r.next = o;
      }
      n.pending = r;
    }
    Nn = null;
  }
  return e;
}
function am(e, t) {
  do {
    var n = Ae;
    try {
      if (Ho(), Yl.current = ks, _s) {
        for (var r = Ce.memoizedState; r !== null; ) {
          var s = r.queue;
          s !== null && (s.pending = null), r = r.next;
        }
        _s = !1;
      }
      if (Rn = 0, Pe = De = Ce = null, Ur = !1, al = 0, si.current = null, n === null || n.return === null) {
        Re = 1, cl = t, Ae = null;
        break;
      }
      e: {
        var a = e, o = n.return, i = n, c = t;
        if (t = Fe, i.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var d = c, h = i, w = h.tag;
          if (!(h.mode & 1) && (w === 0 || w === 11 || w === 15)) {
            var y = h.alternate;
            y ? (h.updateQueue = y.updateQueue, h.memoizedState = y.memoizedState, h.lanes = y.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var S = yc(o);
          if (S !== null) {
            S.flags &= -257, vc(S, o, i, a, t), S.mode & 1 && gc(a, d, t), t = S, c = d;
            var x = t.updateQueue;
            if (x === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(c), t.updateQueue = k;
            } else x.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              gc(a, d, t), di();
              break e;
            }
            c = Error(Q(426));
          }
        } else if (be && i.mode & 1) {
          var b = yc(o);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256), vc(b, o, i, a, t), Bo(pr(c, i));
            break e;
          }
        }
        a = c = pr(c, i), Re !== 4 && (Re = 2), Br === null ? Br = [a] : Br.push(a), a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var m = Vu(a, c, t);
              dc(a, m);
              break e;
            case 1:
              i = c;
              var f = a.type, u = a.stateNode;
              if (!(a.flags & 128) && (typeof f.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (fn === null || !fn.has(u)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var g = Bu(a, i, t);
                dc(a, g);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      cm(n);
    } catch (_) {
      t = _, Ae === n && n !== null && (Ae = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function om() {
  var e = bs.current;
  return bs.current = ks, e === null ? ks : e;
}
function di() {
  (Re === 0 || Re === 3 || Re === 2) && (Re = 4), Oe === null || !(Pn & 268435455) && !(zs & 268435455) || ln(Oe, Fe);
}
function Cs(e, t) {
  var n = ce;
  ce |= 2;
  var r = om();
  (Oe !== e || Fe !== t) && ($t = null, Tn(e, t));
  do
    try {
      Fh();
      break;
    } catch (s) {
      am(e, s);
    }
  while (!0);
  if (Ho(), ce = n, bs.current = r, Ae !== null) throw Error(Q(261));
  return Oe = null, Fe = 0, Re;
}
function Fh() {
  for (; Ae !== null; ) im(Ae);
}
function $h() {
  for (; Ae !== null && !up(); ) im(Ae);
}
function im(e) {
  var t = um(e.alternate, e, at);
  e.memoizedProps = e.pendingProps, t === null ? cm(e) : Ae = t, si.current = null;
}
function cm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Ah(n, t), n !== null) {
        n.flags &= 32767, Ae = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Re = 6, Ae = null;
        return;
      }
    } else if (n = Lh(n, t, at), n !== null) {
      Ae = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Ae = t;
      return;
    }
    Ae = t = e;
  } while (t !== null);
  Re === 0 && (Re = 5);
}
function Cn(e, t, n) {
  var r = ue, s = vt.transition;
  try {
    vt.transition = null, ue = 1, Wh(e, t, n, r);
  } finally {
    vt.transition = s, ue = r;
  }
  return null;
}
function Wh(e, t, n, r) {
  do
    or();
  while (an !== null);
  if (ce & 6) throw Error(Q(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(Q(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (_p(e, a), e === Oe && (Ae = Oe = null, Fe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || zl || (zl = !0, mm(os, function() {
    return or(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = vt.transition, vt.transition = null;
    var o = ue;
    ue = 1;
    var i = ce;
    ce |= 4, si.current = null, Rh(e, n), rm(n, e), oh(Ka), cs = !!Ha, Ka = Ha = null, e.current = n, Ph(n), mp(), ce = i, ue = o, vt.transition = a;
  } else e.current = n;
  if (zl && (zl = !1, an = e, js = s), a = e.pendingLanes, a === 0 && (fn = null), hp(n.stateNode), lt(e, Me()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) s = t[n], r(s.value, { componentStack: s.stack, digest: s.digest });
  if (Ss) throw Ss = !1, e = po, po = null, e;
  return js & 1 && e.tag !== 0 && or(), a = e.pendingLanes, a & 1 ? e === ho ? Qr++ : (Qr = 0, ho = e) : Qr = 0, _n(), null;
}
function or() {
  if (an !== null) {
    var e = Vd(js), t = vt.transition, n = ue;
    try {
      if (vt.transition = null, ue = 16 > e ? 16 : e, an === null) var r = !1;
      else {
        if (e = an, an = null, js = 0, ce & 6) throw Error(Q(331));
        var s = ce;
        for (ce |= 4, q = e.current; q !== null; ) {
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
                      Vr(8, h, a);
                  }
                  var w = h.child;
                  if (w !== null) w.return = h, q = w;
                  else for (; q !== null; ) {
                    h = q;
                    var y = h.sibling, S = h.return;
                    if (em(h), h === d) {
                      q = null;
                      break;
                    }
                    if (y !== null) {
                      y.return = S, q = y;
                      break;
                    }
                    q = S;
                  }
                }
              }
              var x = a.alternate;
              if (x !== null) {
                var k = x.child;
                if (k !== null) {
                  x.child = null;
                  do {
                    var b = k.sibling;
                    k.sibling = null, k = b;
                  } while (k !== null);
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
                Vr(9, a, a.return);
            }
            var m = a.sibling;
            if (m !== null) {
              m.return = a.return, q = m;
              break e;
            }
            q = a.return;
          }
        }
        var f = e.current;
        for (q = f; q !== null; ) {
          o = q;
          var u = o.child;
          if (o.subtreeFlags & 2064 && u !== null) u.return = o, q = u;
          else e: for (o = f; q !== null; ) {
            if (i = q, i.flags & 2048) try {
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  Os(9, i);
              }
            } catch (_) {
              Ie(i, i.return, _);
            }
            if (i === o) {
              q = null;
              break e;
            }
            var g = i.sibling;
            if (g !== null) {
              g.return = i.return, q = g;
              break e;
            }
            q = i.return;
          }
        }
        if (ce = s, _n(), Pt && typeof Pt.onPostCommitFiberRoot == "function") try {
          Pt.onPostCommitFiberRoot(Is, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      ue = n, vt.transition = t;
    }
  }
  return !1;
}
function Tc(e, t, n) {
  t = pr(n, t), t = Vu(e, t, 1), e = mn(e, t, 1), t = Ke(), e !== null && (gl(e, 1, t), lt(e, t));
}
function Ie(e, t, n) {
  if (e.tag === 3) Tc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Tc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (fn === null || !fn.has(r))) {
        e = pr(n, e), e = Bu(t, e, 1), t = mn(t, e, 1), e = Ke(), t !== null && (gl(t, 1, e), lt(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Uh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ke(), e.pingedLanes |= e.suspendedLanes & n, Oe === e && (Fe & n) === n && (Re === 4 || Re === 3 && (Fe & 130023424) === Fe && 500 > Me() - oi ? Tn(e, 0) : ai |= n), lt(e, t);
}
function dm(e, t) {
  t === 0 && (e.mode & 1 ? (t = Nl, Nl <<= 1, !(Nl & 130023424) && (Nl = 4194304)) : t = 1);
  var n = Ke();
  e = Kt(e, t), e !== null && (gl(e, t, n), lt(e, n));
}
function Vh(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), dm(e, n);
}
function Bh(e, t) {
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
      throw Error(Q(314));
  }
  r !== null && r.delete(t), dm(e, n);
}
var um;
um = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || nt.current) tt = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return tt = !1, Th(e, t, n);
    tt = !!(e.flags & 131072);
  }
  else tt = !1, be && t.flags & 1048576 && hu(t, gs, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Zl(e, t), e = t.pendingProps;
      var s = dr(t, Qe.current);
      ar(t, n), s = ei(null, t, r, e, s, n);
      var a = ti();
      return t.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, rt(r) ? (a = !0, ps(t)) : a = !1, t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, qo(t), s.updater = Ps, t.stateNode = s, s._reactInternals = t, no(t, r, e, n), t = so(null, t, r, !0, a, n)) : (t.tag = 0, be && a && Uo(t), He(null, t, s, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Zl(e, t), e = t.pendingProps, s = r._init, r = s(r._payload), t.type = r, s = t.tag = Hh(r), e = Ct(r, e), s) {
          case 0:
            t = lo(null, t, r, e, n);
            break e;
          case 1:
            t = _c(null, t, r, e, n);
            break e;
          case 11:
            t = wc(null, t, r, e, n);
            break e;
          case 14:
            t = xc(null, t, r, Ct(r.type, e), n);
            break e;
        }
        throw Error(Q(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : Ct(r, s), lo(e, t, r, s, n);
    case 1:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : Ct(r, s), _c(e, t, r, s, n);
    case 3:
      e: {
        if (Gu(t), e === null) throw Error(Q(387));
        r = t.pendingProps, a = t.memoizedState, s = a.element, _u(e, t), ws(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          s = pr(Error(Q(423)), t), t = kc(e, t, r, n, s);
          break e;
        } else if (r !== s) {
          s = pr(Error(Q(424)), t), t = kc(e, t, r, n, s);
          break e;
        } else for (ot = un(t.stateNode.containerInfo.firstChild), it = t, be = !0, Nt = null, n = wu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (ur(), r === s) {
            t = Gt(e, t, n);
            break e;
          }
          He(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return ku(t), e === null && Ja(t), r = t.type, s = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = s.children, Ga(r, s) ? o = null : a !== null && Ga(r, a) && (t.flags |= 32), Ku(e, t), He(e, t, o, n), t.child;
    case 6:
      return e === null && Ja(t), null;
    case 13:
      return qu(e, t, n);
    case 4:
      return Yo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = mr(t, null, r, n) : He(e, t, r, n), t.child;
    case 11:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : Ct(r, s), wc(e, t, r, s, n);
    case 7:
      return He(e, t, t.pendingProps, n), t.child;
    case 8:
      return He(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return He(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, s = t.pendingProps, a = t.memoizedProps, o = s.value, ve(ys, r._currentValue), r._currentValue = o, a !== null) if (Lt(a.value, o)) {
          if (a.children === s.children && !nt.current) {
            t = Gt(e, t, n);
            break e;
          }
        } else for (a = t.child, a !== null && (a.return = t); a !== null; ) {
          var i = a.dependencies;
          if (i !== null) {
            o = a.child;
            for (var c = i.firstContext; c !== null; ) {
              if (c.context === r) {
                if (a.tag === 1) {
                  c = Bt(-1, n & -n), c.tag = 2;
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
            if (o = a.return, o === null) throw Error(Q(341));
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
        He(e, t, s.children, n), t = t.child;
      }
      return t;
    case 9:
      return s = t.type, r = t.pendingProps.children, ar(t, n), s = xt(s), r = r(s), t.flags |= 1, He(e, t, r, n), t.child;
    case 14:
      return r = t.type, s = Ct(r, t.pendingProps), s = Ct(r.type, s), xc(e, t, r, s, n);
    case 15:
      return Qu(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : Ct(r, s), Zl(e, t), t.tag = 1, rt(r) ? (e = !0, ps(t)) : e = !1, ar(t, n), Uu(t, r, s), no(t, r, s, n), so(null, t, r, !0, e, n);
    case 19:
      return Yu(e, t, n);
    case 22:
      return Hu(e, t, n);
  }
  throw Error(Q(156, t.tag));
};
function mm(e, t) {
  return Fd(e, t);
}
function Qh(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function yt(e, t, n, r) {
  return new Qh(e, t, n, r);
}
function ui(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Hh(e) {
  if (typeof e == "function") return ui(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Mo) return 11;
    if (e === To) return 14;
  }
  return 2;
}
function hn(e, t) {
  var n = e.alternate;
  return n === null ? (n = yt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ts(e, t, n, r, s, a) {
  var o = 2;
  if (r = e, typeof e == "function") ui(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Qn:
      return Ln(n.children, s, a, t);
    case Io:
      o = 8, s |= 8;
      break;
    case Ca:
      return e = yt(12, n, t, s | 2), e.elementType = Ca, e.lanes = a, e;
    case Ea:
      return e = yt(13, n, t, s), e.elementType = Ea, e.lanes = a, e;
    case Na:
      return e = yt(19, n, t, s), e.elementType = Na, e.lanes = a, e;
    case kd:
      return Fs(n, s, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case xd:
          o = 10;
          break e;
        case _d:
          o = 9;
          break e;
        case Mo:
          o = 11;
          break e;
        case To:
          o = 14;
          break e;
        case tn:
          o = 16, r = null;
          break e;
      }
      throw Error(Q(130, e == null ? e : typeof e, ""));
  }
  return t = yt(o, n, t, s), t.elementType = e, t.type = r, t.lanes = a, t;
}
function Ln(e, t, n, r) {
  return e = yt(7, e, r, t), e.lanes = n, e;
}
function Fs(e, t, n, r) {
  return e = yt(22, e, r, t), e.elementType = kd, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function va(e, t, n) {
  return e = yt(6, e, null, t), e.lanes = n, e;
}
function wa(e, t, n) {
  return t = yt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Kh(e, t, n, r, s) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Js(0), this.expirationTimes = Js(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Js(0), this.identifierPrefix = r, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null;
}
function mi(e, t, n, r, s, a, o, i, c) {
  return e = new Kh(e, t, n, i, c), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = yt(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, qo(a), e;
}
function Gh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Bn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function fm(e) {
  if (!e) return yn;
  e = e._reactInternals;
  e: {
    if (Fn(e) !== e || e.tag !== 1) throw Error(Q(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (rt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(Q(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (rt(n)) return fu(e, n, t);
  }
  return t;
}
function pm(e, t, n, r, s, a, o, i, c) {
  return e = mi(n, r, !0, e, s, a, o, i, c), e.context = fm(null), n = e.current, r = Ke(), s = pn(n), a = Bt(r, s), a.callback = t ?? null, mn(n, a, s), e.current.lanes = s, gl(e, s, r), lt(e, r), e;
}
function $s(e, t, n, r) {
  var s = t.current, a = Ke(), o = pn(s);
  return n = fm(n), t.context === null ? t.context = n : t.pendingContext = n, t = Bt(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = mn(s, t, o), e !== null && (Tt(e, s, o, a), ql(e, s, o)), o;
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
function Lc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function fi(e, t) {
  Lc(e, t), (e = e.alternate) && Lc(e, t);
}
function qh() {
  return null;
}
var hm = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function pi(e) {
  this._internalRoot = e;
}
Ws.prototype.render = pi.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(Q(409));
  $s(e, t, null, null);
};
Ws.prototype.unmount = pi.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    On(function() {
      $s(null, e, null, null);
    }), t[Ht] = null;
  }
};
function Ws(e) {
  this._internalRoot = e;
}
Ws.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Hd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < rn.length && t !== 0 && t < rn[n].priority; n++) ;
    rn.splice(n, 0, e), n === 0 && Gd(e);
  }
};
function hi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Us(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Ac() {
}
function Yh(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var d = Es(o);
        a.call(d);
      };
    }
    var o = pm(t, r, e, 0, null, !1, !1, "", Ac);
    return e._reactRootContainer = o, e[Ht] = o.current, tl(e.nodeType === 8 ? e.parentNode : e), On(), o;
  }
  for (; s = e.lastChild; ) e.removeChild(s);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var d = Es(c);
      i.call(d);
    };
  }
  var c = mi(e, 0, !1, null, null, !1, !1, "", Ac);
  return e._reactRootContainer = c, e[Ht] = c.current, tl(e.nodeType === 8 ? e.parentNode : e), On(function() {
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
  } else o = Yh(n, t, e, s, r);
  return Es(o);
}
Bd = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Rr(t.pendingLanes);
        n !== 0 && (Do(t, n | 1), lt(t, Me()), !(ce & 6) && (hr = Me() + 500, _n()));
      }
      break;
    case 13:
      On(function() {
        var r = Kt(e, 1);
        if (r !== null) {
          var s = Ke();
          Tt(r, e, 1, s);
        }
      }), fi(e, 1);
  }
};
Ro = function(e) {
  if (e.tag === 13) {
    var t = Kt(e, 134217728);
    if (t !== null) {
      var n = Ke();
      Tt(t, e, 134217728, n);
    }
    fi(e, 134217728);
  }
};
Qd = function(e) {
  if (e.tag === 13) {
    var t = pn(e), n = Kt(e, t);
    if (n !== null) {
      var r = Ke();
      Tt(n, e, t, r);
    }
    fi(e, t);
  }
};
Hd = function() {
  return ue;
};
Kd = function(e, t) {
  var n = ue;
  try {
    return ue = e, t();
  } finally {
    ue = n;
  }
};
za = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ta(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = As(r);
            if (!s) throw Error(Q(90));
            Sd(r), Ta(r, s);
          }
        }
      }
      break;
    case "textarea":
      Cd(e, n);
      break;
    case "select":
      t = n.value, t != null && nr(e, !!n.multiple, t, !1);
  }
};
Ad = ii;
Dd = On;
var Xh = { usingClientEntryPoint: !1, Events: [vl, qn, As, Td, Ld, ii] }, Tr = { findFiberByHostInstance: En, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Zh = { bundleType: Tr.bundleType, version: Tr.version, rendererPackageName: Tr.rendererPackageName, rendererConfig: Tr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Yt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Od(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Tr.findFiberByHostInstance || qh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Fl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Fl.isDisabled && Fl.supportsFiber) try {
    Is = Fl.inject(Zh), Pt = Fl;
  } catch {
  }
}
dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xh;
dt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!hi(t)) throw Error(Q(200));
  return Gh(e, t, null, n);
};
dt.createRoot = function(e, t) {
  if (!hi(e)) throw Error(Q(299));
  var n = !1, r = "", s = hm;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = mi(e, 1, !1, null, null, n, !1, r, s), e[Ht] = t.current, tl(e.nodeType === 8 ? e.parentNode : e), new pi(t);
};
dt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(Q(188)) : (e = Object.keys(e).join(","), Error(Q(268, e)));
  return e = Od(t), e = e === null ? null : e.stateNode, e;
};
dt.flushSync = function(e) {
  return On(e);
};
dt.hydrate = function(e, t, n) {
  if (!Us(t)) throw Error(Q(200));
  return Vs(null, e, t, !0, n);
};
dt.hydrateRoot = function(e, t, n) {
  if (!hi(e)) throw Error(Q(405));
  var r = n != null && n.hydratedSources || null, s = !1, a = "", o = hm;
  if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = pm(t, null, e, 1, n ?? null, s, !1, a, o), e[Ht] = t.current, tl(e), r) for (e = 0; e < r.length; e++) n = r[e], s = n._getVersion, s = s(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(
    n,
    s
  );
  return new Ws(t);
};
dt.render = function(e, t, n) {
  if (!Us(t)) throw Error(Q(200));
  return Vs(null, e, t, !1, n);
};
dt.unmountComponentAtNode = function(e) {
  if (!Us(e)) throw Error(Q(40));
  return e._reactRootContainer ? (On(function() {
    Vs(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ht] = null;
    });
  }), !0) : !1;
};
dt.unstable_batchedUpdates = ii;
dt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Us(n)) throw Error(Q(200));
  if (e == null || e._reactInternals === void 0) throw Error(Q(38));
  return Vs(e, t, n, !1, r);
};
dt.version = "18.3.1-next-f1338f8080-20240426";
function gm() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gm);
    } catch (e) {
      console.error(e);
    }
}
gm(), gd.exports = dt;
var ye = gd.exports, ym, Dc = ye;
ym = Dc.createRoot, Dc.hydrateRoot;
var vm = { exports: {} }, Bs = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jh = p, eg = Symbol.for("react.element"), tg = Symbol.for("react.fragment"), ng = Object.prototype.hasOwnProperty, rg = Jh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, lg = { key: !0, ref: !0, __self: !0, __source: !0 };
function wm(e, t, n) {
  var r, s = {}, a = null, o = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) ng.call(t, r) && !lg.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) s[r] === void 0 && (s[r] = t[r]);
  return { $$typeof: eg, type: e, key: a, ref: o, props: s, _owner: rg.current };
}
Bs.Fragment = tg;
Bs.jsx = wm;
Bs.jsxs = wm;
vm.exports = Bs;
var l = vm.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var sg = {
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
const ag = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), ee = (e, t) => {
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
        ...sg,
        width: s,
        height: s,
        stroke: r,
        strokeWidth: o ? Number(a) * 24 / Number(s) : a,
        className: ["lucide", `lucide-${ag(e)}`, i].join(" "),
        ...d
      },
      [
        ...t.map(([w, y]) => p.createElement(w, y)),
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
const xm = ee("AlertCircle", [
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
const og = ee("AlertTriangle", [
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
const ig = ee("ArrowDownNarrowWide", [
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
const _m = ee("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cg = ee("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dg = ee("ArrowUpDown", [
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
const ug = ee("ArrowUpNarrowWide", [
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
const km = ee("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bm = ee("BarChart2", [
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
const mg = ee("Box", [
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
const fg = ee("Calendar", [
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
const pg = ee("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const st = ee("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hg = ee("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sm = ee("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gi = ee("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gg = ee("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jt = ee("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dl = ee("Download", [
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
const yg = ee("Eraser", [
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
const yi = ee("FileJson", [
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
const vg = ee("FileText", [
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
const wg = ee("Folder", [
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
const xg = ee("Info", [
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
const _g = ee("Lasso", [
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
const vi = ee("LayoutGrid", [
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
const kg = ee("LayoutList", [
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
const bg = ee("Link2Off", [
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
const Sg = ee("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rc = ee("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jg = ee("Maximize", [
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
const Cg = ee("Menu", [
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
const Eg = ee("Minimize", [
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
const Ng = ee("MoreVertical", [
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
const Ig = ee("PanelBottom", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jm = ee("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ul = ee("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qs = ee("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gr = ee("RefreshCw", [
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
const Mg = ee("ScanLine", [
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
const vn = ee("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cm = ee("Settings", [
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
const Em = ee("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yr = ee("Star", [
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
const Tg = ee("StickyNote", [
  ["path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z", key: "qazsjp" }],
  ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4", key: "40519r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _r = ee("Tag", [
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
const qt = ee("Trash2", [
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
const Lg = ee("Trash", [
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
const Ag = ee("Type", [
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
const Dg = ee("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11", key: "llx8ln" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rg = ee("Upload", [
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
const Pg = ee("Workflow", [
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
const he = ee("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Og = ee("ZoomIn", [
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
const zg = ee("ZoomOut", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);
window.api = te;
async function re(e) {
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
const Nm = (e) => typeof e == "object" && e !== null, Pc = (e) => {
  if (typeof e == "string")
    return e;
  if (Nm(e) && typeof e.message == "string")
    return e.message;
};
async function xl(e) {
  let t;
  try {
    t = await e.json();
  } catch {
    throw e.ok ? new Error("Failed to parse JSON response") : new Error(`${e.status} ${e.statusText}`);
  }
  if (!e.ok) {
    let n = `${e.status} ${e.statusText}`;
    if (Nm(t)) {
      const r = "error" in t ? t.error : void 0, s = Pc(r), a = "message" in t ? Pc(t.message) : void 0;
      n = s ?? a ?? n;
    }
    throw new Error(n);
  }
  return t;
}
const Fg = async () => {
  const e = await te.fetchApi("/meld/home-dir");
  return (await re(e)).home;
}, Te = ({
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
const $g = (e) => {
  Ns = e, Ns && console.log("[Meld] Logger initialized in DEV mode (COMFYUI_MELD_DEV=true).");
}, Wg = (...e) => {
  Ns && console.log("[Meld]", ...e);
}, Ug = (...e) => {
  Ns && console.warn("[Meld]", ...e);
}, Vg = (...e) => {
  console.error("[Meld]", ...e);
}, F = {
  log: Wg,
  warn: Ug,
  error: Vg,
  init: $g
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
  const a = await te.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${s ? "&minimal=true" : ""}`
  );
  return re(a);
}, Im = async (e) => {
  const t = await te.fetchApi(`/meld/image/${e}/details`);
  return re(t);
}, Bg = async (e, t = !1) => {
  const n = await te.fetchApi("/meld/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      permanent: t
    })
  });
  await re(n);
}, vo = async (e) => {
  const t = await te.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  return re(t);
}, Mm = async (e) => {
  const t = await te.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  return re(t);
}, Oc = async (e, t) => {
  const n = await te.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  });
  await re(n);
}, Qg = async (e, t, n) => {
  const r = t !== void 0 ? `&threshold=${t}` : "", s = await te.fetchApi(`/meld/suggest-parents?id=${e}${r}`, { signal: n });
  try {
    return await re(s);
  } catch {
    return [];
  }
}, wi = async (e) => {
  const t = await te.fetchApi(`/meld/lineage?id=${e}`);
  try {
    return await re(t);
  } catch {
    return [];
  }
}, Hg = async (e, t) => {
  const n = await te.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  });
  await re(n);
}, Kg = async (e, t) => {
  const n = await te.fetchApi("/meld/image-notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, userNotes: t })
  });
  return re(n);
}, Tm = async (e, t, n) => {
  const r = await te.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  });
  await re(r);
}, Gg = async (e) => {
  const t = await te.fetchApi(`/meld/image/${e}/workflow`);
  return re(t);
}, qg = async (e) => {
  const t = await te.fetchApi(`/meld/image/${e}/snapshot_data`);
  return re(t);
}, xa = (e, t) => {
  let n = e.replace(/\\/g, "/").split("/").pop() ?? "";
  return n === "." || n === ".." || n.startsWith("-") || (n = n.replace(/[\\:*?"<>|/\x00-\x1f\x7f\s]/g, "_"), n = n.replace(/[^a-zA-Z0-9\-_.]/g, "_"), n = n.replace(/\.{2,}/g, ".").replace(/[\s.]+$/, ""), !n || n === "." || n === ".." || n.startsWith("-") || n.length > 255) ? t : n;
}, Lm = async (e, t, n, r, s) => {
  const a = await te.fetchApi("/meld/download/raw", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, removeMetadata: t, resizeMode: n, resizeValue: r, resizeFilter: s })
  });
  if (!a.ok) {
    let w = `Failed to fetch image ${e}: ${a.statusText || a.status}`;
    try {
      await re(a.clone());
    } catch (y) {
      const S = y instanceof Error ? y.message : String(y);
      S && (w = `Failed to fetch image ${e}: ${S}`);
    }
    throw new Error(w);
  }
  const o = (a.headers.get("Content-Type") || "").toLowerCase();
  if (o.includes("application/json") || o.includes("+json")) {
    let w = `Image ${e}: server returned JSON instead of binary data`;
    try {
      await re(a.clone()), w = `Image ${e}: server returned a JSON response on the binary download path`;
    } catch (y) {
      const S = y instanceof Error ? y.message : String(y);
      S && (w = S);
    }
    throw new Error(w);
  }
  const i = `image_${e}.png`, c = a.headers.get("Content-Disposition");
  let d = i;
  if (c) {
    const w = c.match(/filename\*=([^;\s]+)/i);
    if (w != null && w[1]) {
      let y = w[1];
      const S = y.match(/^([A-Za-z0-9-]+)'[^']*'(.*)$/);
      S != null && S[2] && (y = S[2]);
      try {
        d = xa(decodeURIComponent(y), i);
      } catch {
        const x = c.match(/filename="?([^"]+)"?/);
        x != null && x[1] && (d = xa(x[1], i));
      }
    } else if (c.includes("filename=")) {
      const y = c.match(/filename="?([^"]+)"?/);
      y != null && y[1] && (d = xa(y[1], i));
    }
  }
  return { blob: await a.blob(), filename: d };
}, zc = 500, Fc = 2 * 1024 * 1024 * 1024, Yg = async (e, t, n, r, s, a) => {
  const o = (await import("./jszip.min.js").then((k) => k.j)).default, i = new o(), c = e.length;
  if (c > zc)
    throw new Error(
      `ZIP entry limit reached (${zc} files). Please reduce the number of images.`
    );
  const d = /* @__PURE__ */ new Set();
  let h = 0, w = 0;
  for (const k of e) {
    a == null || a(h, c);
    const { blob: b, filename: m } = await Lm(
      k,
      t,
      n,
      r,
      s
    );
    if (w += b.size, w > Fc)
      throw new Error(
        `ZIP size limit reached (${Fc / 1024 / 1024 / 1024} GB). Please reduce the number of images.`
      );
    let f = m;
    if (d.has(f)) {
      const u = f.lastIndexOf("."), g = u > 0 ? f.slice(0, u) : f, _ = u > 0 ? f.slice(u) : "";
      let v = 2;
      for (; d.has(f); )
        f = `${g}_${v}${_}`, v++;
    }
    d.add(f), i.file(f, b), h += 1;
  }
  a == null || a(c, c);
  const y = await i.generateAsync({ type: "blob" }), S = window.URL.createObjectURL(y), x = document.createElement("a");
  x.href = S, x.download = `meld_images_${Date.now()}.zip`, document.body.appendChild(x), x.click(), window.URL.revokeObjectURL(S), document.body.removeChild(x);
}, Xg = async (e, t, n, r, s) => {
  const { blob: a, filename: o } = await Lm(
    e,
    t,
    n,
    r,
    s
  ), i = window.URL.createObjectURL(a), c = document.createElement("a");
  c.href = i, c.download = o, document.body.appendChild(c), c.click(), window.URL.revokeObjectURL(i), document.body.removeChild(c);
}, Zg = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await te.fetchApi(n);
  return re(r);
}, Jg = async () => {
  const e = await te.fetchApi("/meld/search-suggestions");
  return re(e);
}, ey = async () => {
  const e = await te.fetchApi("/meld/search-keywords");
  return re(e);
}, ty = async () => {
  const e = await te.fetchApi("/meld/search-config");
  return re(e);
}, ny = async () => {
  const e = await te.fetchApi("/meld/favorites");
  return re(e);
}, ry = async (e, t) => {
  const n = await te.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  });
  await re(n);
}, $c = async (e) => {
  const t = await te.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  });
  await re(t);
}, ly = async (e, t, n) => {
  const r = await te.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  });
  await re(r);
}, sy = {
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
}, Am = async () => {
  let e;
  try {
    const t = await te.fetchApi("/meld/settings");
    e = await re(t);
  } catch (t) {
    return F.error("Failed to fetch settings, using defaults", t), sy;
  }
  return typeof e["sidebar.show_filename"] == "boolean" && (e["sidebar.show_filename"] = e["sidebar.show_filename"] ? "filename" : "none"), typeof e["viewer.details.show_filename"] == "boolean" && (e["viewer.details.show_filename"] = e["viewer.details.show_filename"] ? "filename" : "none"), typeof e["fullscreen.details.show_filename"] == "boolean" && (e["fullscreen.details.show_filename"] = e["fullscreen.details.show_filename"] ? "filename" : "none"), e;
}, ay = async (e, t) => {
  const n = await te.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  });
  await re(n);
}, oy = async () => {
  const e = await te.fetchApi("/meld/clear-thumbnail-cache", {
    method: "POST"
  });
  return re(e);
};
function Lr(e) {
  return Array.from(new Map(e.map((t) => [t.id, t])).values());
}
const iy = (e, t) => {
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "REMOVE_IMAGES": {
      const n = new Set(t.payload), r = Lr(e.images.filter((o) => !n.has(o.id))), s = Lr(
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
      const n = [...e.images, ...t.payload], r = Lr(n).sort(
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
      const { images: n, total: r, offset: s } = t.payload, a = Lr(n);
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
      const { images: n, total: r, offset: s } = t.payload, a = [...e.images, ...n], o = Lr(a);
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
function Dm(e) {
  if (typeof e == "number")
    return !1;
  const t = e.initialMaskMode;
  return t ? t === "apply" || t === "run" ? t : t === !0 ? "run" : !1 : !1;
}
const cy = (e, t) => {
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
      const n = t.payload, r = Dm(n);
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
}, dy = (e, t) => {
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
}, uy = (e, t) => {
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
function Wc(e, t) {
  const n = e.searchQuery.trim() !== "";
  return e.viewerMode === "lighttable" && e.viewerLightTableSlotId ? t ?? [] : e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
    (r) => r.exists !== !1 && (e.settings["gallery.show_parent_images"] || n || !r.has_children)
  );
}
const my = (e, t) => {
  var n, r, s, a, o;
  switch (t.type) {
    case "SET_IMAGES": {
      const { images: i } = t.payload;
      let c = e.viewerImageId, d = null;
      if (e.viewerMode === "gallery" && c !== null && !i.some((h) => h.id === c)) {
        const h = e.images.find((w) => w.id === c) || (((n = e.viewerFallbackImage) == null ? void 0 : n.id) === c ? e.viewerFallbackImage : void 0);
        h ? d = h : c = null;
      }
      return {
        ...e,
        viewerImageId: c,
        viewerFallbackImage: d
      };
    }
    case "OPEN_VIEWER": {
      const i = t.payload, c = typeof i == "number" ? i : i.id, d = typeof i == "number" ? "gallery" : i.mode, h = typeof i != "number" && i.mode === "lighttable" ? i.slotId : null, w = Dm(i), y = e.viewerMode === "lineage" && d === "lineage" && e.lineageImages.some((S) => S.id === c);
      return {
        ...e,
        viewerImageId: c,
        viewerMode: d,
        viewerLightTableSlotId: h,
        viewerInitialMaskMode: w,
        lineageImages: y ? e.lineageImages : []
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
      const c = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], d = Wc(e, (s = t.payload) == null ? void 0 : s.currentList);
      if (e.viewerImageId === null || d.length === 0) return e;
      const h = d.findIndex((S) => S.id === e.viewerImageId);
      if (h === -1 || h === d.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || h === d.length - 1 && !c)
        return e;
      const w = (h + 1) % d.length, y = d[w];
      return y ? {
        ...e,
        viewerImageId: y.id
      } : e;
    }
    case "PREVIOUS_IMAGE": {
      const c = ((a = t.payload) == null ? void 0 : a.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], d = Wc(e, (o = t.payload) == null ? void 0 : o.currentList);
      if (e.viewerImageId === null || d.length === 0) return e;
      const h = d.findIndex((S) => S.id === e.viewerImageId);
      if (h === -1 || h === 0 && !c)
        return e;
      const w = (h - 1 + d.length) % d.length, y = d[w];
      return y ? {
        ...e,
        viewerImageId: y.id
      } : e;
    }
    default:
      return e;
  }
}, fy = [
  my,
  iy,
  dy,
  cy,
  uy
];
function py(e, t) {
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
  } : fy.reduce((n, r) => r(n, t), e);
}
const hy = {
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
function gy(e, t) {
  return py(e, t);
}
const Rm = p.createContext(void 0), yy = ({ children: e }) => {
  const [t, n] = p.useReducer(gy, hy), r = p.useRef(t.images.length), s = p.useRef(0), a = p.useRef(/* @__PURE__ */ new Map());
  p.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const o = p.useCallback(
    async (x, k, b) => {
      const m = t.settings["gallery.max_load_count"], f = 200;
      let u = x;
      for (; u < Math.min(k, m) && b === s.current; )
        try {
          const g = Math.min(f, m - u);
          F.log("Background fetch: starting chunk", {
            offset: u,
            limit: g
          });
          const _ = await rs(
            u,
            g,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (b !== s.current) break;
          const { images: v, total: C } = ns(_, {
            total: k
          });
          if (n({
            type: "APPEND_IMAGES",
            payload: {
              images: v,
              total: C,
              offset: u,
              limit: g
            }
          }), u += v.length, v.length === 0 || u >= C) break;
          await new Promise((I) => setTimeout(I, 300));
        } catch (g) {
          F.error("Background fetch failed", g);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), i = p.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const x = performance.now(), k = ++s.current;
    try {
      const b = t.searchQuery.trim() !== "", m = t.settings["gallery.initial_load_count"];
      F.log("refreshImages: starting initial fetch", {
        isSearch: b,
        fetchLimit: m,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const f = await rs(
        0,
        m,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), u = ns(f, {
        total: t.pagination.total,
        offset: 0,
        limit: m
      }), g = performance.now() - x;
      F.log("refreshImages: initial fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: g.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: u }), u.total > m && o(m, u.total, k);
    } catch (b) {
      F.error("refreshImages: fetch failed", b), n({
        type: "SET_ERROR",
        payload: b instanceof Error ? b.message : String(b)
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
    const x = performance.now();
    try {
      const k = r.current, b = t.searchQuery.trim() !== "", m = t.pagination.limit;
      F.log("loadMoreImages: starting fetch", {
        nextOffset: k,
        fetchLimit: m,
        isSearch: b
      });
      const f = await rs(
        k,
        m,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), u = ns(f, {
        total: t.pagination.total,
        offset: k,
        limit: m
      }), g = performance.now() - x;
      F.log("loadMoreImages: fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: g.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: u });
    } catch (k) {
      F.error("loadMoreImages: fetch failed", k), n({
        type: "SET_ERROR",
        payload: k instanceof Error ? k.message : String(k)
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
      const x = await ny();
      n({ type: "SET_FAVORITES", payload: x });
    } catch (x) {
      F.error("Failed to load favorites", x);
    }
  }, []), h = p.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const x = Array.from(t.selectedIds), b = t.images.filter((m) => t.selectedIds.has(m.id)).some((m) => m.parent_id || m.has_children);
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: x,
        hasLineage: b,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), w = p.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const x = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const b = (await vo(x)).restored_ids || x;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: b }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (k) {
      n({
        type: "SET_ERROR",
        payload: k instanceof Error ? k.message : String(k)
      });
    }
  }, [t.selectedIds, t.viewScope]), y = p.useCallback(
    async (x, k) => {
      try {
        await ay(x, k), n({ type: "SET_SETTINGS", payload: { [x]: k } });
      } catch (b) {
        n({
          type: "SET_ERROR",
          payload: b instanceof Error ? b.message : String(b)
        });
      }
    },
    []
  ), S = p.useCallback(
    async (x) => {
      const k = t.images.find((u) => u.id === x);
      if (k && !k.is_minimal && "positive_prompt_keywords" in k)
        return k;
      const b = t.lineageImages.find((u) => u.id === x);
      if (b && !b.is_minimal && "positive_prompt_keywords" in b)
        return b;
      const m = a.current.get(x);
      if (m)
        return m;
      const f = (async () => {
        try {
          F.log("fetchFullImageDetails: fetching full data", { id: x });
          const u = await Im(x);
          return n({ type: "UPDATE_IMAGE", payload: u }), u;
        } finally {
          a.current.delete(x);
        }
      })();
      return a.current.set(x, f), f;
    },
    [t.images, t.lineageImages]
  );
  return p.useEffect(() => {
    (async () => {
      try {
        const k = await Am();
        n({ type: "SET_SETTINGS", payload: k });
      } catch (k) {
        F.error("Failed to load settings", k);
      }
    })();
  }, []), p.useEffect(() => {
    d();
  }, [d]), p.useEffect(() => {
    const x = () => {
      i();
    }, k = (m) => {
      const f = m.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: f }
      });
    }, b = (m) => {
      const f = m.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !1,
          isFinished: !0,
          shouldCancel: !1,
          newCount: f.new_count || 0,
          updatedCount: f.updated_count || 0,
          totalCount: f.total_count || 0,
          progress: {
            current: f.total_count || t.scanStatus.progress.total,
            total: f.total_count || t.scanStatus.progress.total,
            phase: "completed"
          }
        }
      }), i();
    };
    return window.addEventListener("meld-refresh", x), window.addEventListener("meld-scan-progress", k), window.addEventListener("meld-scan-finished", b), () => {
      window.removeEventListener("meld-refresh", x), window.removeEventListener("meld-scan-progress", k), window.removeEventListener("meld-scan-finished", b);
    };
  }, [i, t.scanStatus.progress.total]), p.useEffect(() => {
    i();
  }, [i]), /* @__PURE__ */ l.jsx(
    Rm.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: i,
        loadMoreImages: c,
        refreshFavorites: d,
        deleteSelected: h,
        restoreSelected: w,
        updateSetting: y,
        fetchFullImageDetails: S
      },
      children: e
    }
  );
}, fe = () => {
  const e = p.useContext(Rm);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, wt = (e, t = 200) => {
  if (!e.filename) return "";
  const n = encodeURIComponent, r = n(e.type || "output"), s = n(e.subfolder ?? "");
  return `/api/meld/view-thumb?${`filename=${n(e.filename)}&type=${r}&subfolder=${s}&size=${t}`}`;
}, xi = (e) => {
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
}, _i = async () => {
  const e = await te.fetchApi("/meld/tags");
  return re(e);
}, vy = async (e) => {
  const t = await te.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  return re(t);
}, wy = async (e) => {
  const t = await te.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  });
  await re(t);
}, xy = async (e, t) => {
  const n = await te.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  await re(n);
}, _y = (e) => {
  if (typeof e != "object" || e === null)
    return !1;
  const t = e;
  return typeof t.name == "string" && typeof t.subfolder == "string" && typeof t.type == "string";
}, ky = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await te.fetchApi("/upload/image", {
    method: "POST",
    body: t
  }), r = await xl(n);
  if (!_y(r))
    throw new Error("Invalid upload image response shape");
  return r;
}, by = async (e, t, n = !1, r) => {
  const s = await te.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  try {
    return await re(s);
  } catch (a) {
    return F.error("Failed to fetch folders", a), { folders: [], images: [], image_count: 0 };
  }
}, Sy = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const s = await te.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  try {
    return await re(s);
  } catch (a) {
    return F.error("Failed to fetch folder metadata", a), {};
  }
}, jy = async (e, t, n) => {
  const r = await te.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  try {
    return (await re(r)).count;
  } catch {
    return 0;
  }
}, Cy = async (e) => {
  const t = await te.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  await re(t);
}, Ey = async () => {
  const e = await te.fetchApi("/meld/scan/cancel", {
    method: "POST"
  });
  await re(e);
}, Pm = () => {
  const { dispatch: e } = fe(), [t, n] = p.useState(() => {
    const E = localStorage.getItem("meld-import-config"), O = {
      type: "output",
      subfolder: "",
      custom_path: "",
      recursive: !0,
      auto_link_parent: !0,
      link_strategy: "new_only",
      tags: []
    };
    if (E)
      try {
        const M = JSON.parse(E);
        return { ...O, ...M, tags: [] };
      } catch {
        return O;
      }
    return O;
  });
  p.useEffect(() => {
    const { tags: E, ...O } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(O));
  }, [t]);
  const [r, s] = p.useState([]), [a, o] = p.useState([]), [i, c] = p.useState(0), [d, h] = p.useState(!1), [w, y] = p.useState([]), [S, x] = p.useState(""), [k, b] = p.useState(!1), [m, f] = p.useState(null), u = p.useRef(!1), g = (E) => {
    E.target === E.currentTarget && (u.current = !0);
  }, _ = (E) => {
    E.target === E.currentTarget && u.current && e({ type: "CLOSE_MODAL" }), u.current = !1;
  };
  p.useEffect(() => {
    (async () => {
      try {
        const O = await Fg();
        n((M) => M.custom_path ? M : { ...M, custom_path: O });
      } catch (O) {
        F.error("Failed to fetch home directory:", O);
      }
    })();
  }, []), p.useEffect(() => {
    const E = new AbortController();
    return (async () => {
      const M = t.type === "custom" ? t.custom_path : t.subfolder;
      if (F.log(`loadFolders started. Path: "${M}", Type: "${t.type}"`), t.type === "custom" && !M) {
        F.log("Custom path is empty, skipping load."), s([]), o([]), c(0), h(!1);
        return;
      }
      h(!0);
      const U = M, j = t.type;
      try {
        F.log("Step 1: Fast load starting...");
        const T = await by(t.type, M, !0, E.signal);
        if (E.signal.aborted) {
          F.log("Step 1: Aborted.");
          return;
        }
        const z = Array.isArray(T == null ? void 0 : T.folders) ? T.folders : [], W = Array.isArray(T == null ? void 0 : T.images) ? T.images : [];
        F.log(`Step 1 complete. Found ${z.length} folders, ${W.length} images.`), s(z), o(W), c(null);
        const A = z.map((R) => R.name);
        A.length > 0 && (F.log(`Step 2: Metadata fetch starting for ${A.length} folders...`), Sy(j, U, A, E.signal).then((R) => {
          if (E.signal.aborted) {
            F.log("Step 2: Aborted.");
            return;
          }
          F.log("Step 2: Metadata fetch complete."), s(
            (P) => P.map((Z) => {
              const J = R[Z.name];
              return J ? { ...Z, count: J.count, preview: J.preview } : Z;
            })
          );
        }).catch((R) => {
          R.name !== "AbortError" && F.error("Step 2: Metadata fetch failed:", R);
        })), F.log("Step 3: Path image count starting..."), jy(j, U, E.signal).then((R) => {
          if (E.signal.aborted) {
            F.log("Step 3: Aborted.");
            return;
          }
          F.log(`Step 3: Path image count complete: ${R}`), c(R);
        }).catch((R) => {
          R.name !== "AbortError" && F.error("Step 3: Path image count failed:", R);
        });
      } catch (T) {
        if (T.name === "AbortError") {
          F.log("Request aborted.");
          return;
        }
        F.error("Failed to load folders:", T), s([]), o([]), c(0);
      } finally {
        E.signal.aborted || h(!1);
      }
    })(), () => {
      E.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const v = p.useCallback(async () => {
    b(!0);
    try {
      const E = await _i();
      y(E);
    } catch (E) {
      F.error("Failed to fetch tags:", E);
    } finally {
      b(!1);
    }
  }, []);
  p.useEffect(() => {
    v();
  }, [v]), Te({
    onEscape: p.useCallback(() => {
      m ? f(null) : e({ type: "CLOSE_MODAL" });
    }, [m, e])
  });
  const C = p.useMemo(() => w.filter(
    (E) => E.name.toLowerCase().includes(S.toLowerCase()) && !t.tags.includes(E.name)
  ), [w, S, t.tags]), I = (E) => {
    const O = E.trim();
    O && !t.tags.includes(O) && (n({ ...t, tags: [...t.tags, O] }), x(""));
  }, D = (E) => {
    n({ ...t, tags: t.tags.filter((O) => O !== E) });
  }, N = (E) => {
    E.key === "Enter" && S.trim() && (E.preventDefault(), I(S.trim()));
  }, L = async () => {
    try {
      await Cy(t), e({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !0,
          isFinished: !1,
          shouldCancel: !1,
          newCount: 0,
          progress: { current: 0, total: 0, phase: "registering" }
        }
      }), e({ type: "CLOSE_MODAL" });
    } catch (E) {
      F.error("Failed to start scan:", E), alert(`Failed to start scan: ${E}`);
    }
  }, $ = (E) => {
    if (t.type === "custom") {
      const O = t.custom_path.includes("\\") ? "\\" : "/", M = t.custom_path.endsWith(O) ? `${t.custom_path}${E}` : `${t.custom_path}${O}${E}`;
      n({ ...t, custom_path: M });
    } else {
      const O = t.subfolder ? `${t.subfolder}/${E}` : E;
      n({ ...t, subfolder: O });
    }
  }, H = () => {
    if (t.type === "custom") {
      const E = t.custom_path.includes("\\") ? "\\" : "/", O = t.custom_path.split(E);
      if (O.length > 1) {
        O.pop();
        let M = O.join(E);
        M === "" && E === "/" && (M = "/"), n({ ...t, custom_path: M });
      }
    } else {
      const E = t.subfolder.split("/");
      E.pop(), n({ ...t, subfolder: E.join("/") });
    }
  };
  return ye.createPortal(
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: g,
        onMouseUp: _,
        children: [
          /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--large",
              onClick: (E) => E.stopPropagation(),
              children: [
                /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ l.jsx("h2", { children: "Import Images" }),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => e({ type: "CLOSE_MODAL" }),
                      children: /* @__PURE__ */ l.jsx(he, { size: 20 })
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
                          onChange: (E) => n({
                            ...t,
                            type: E.target.value,
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
                          onChange: (E) => n({ ...t, recursive: E.target.checked })
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
                          onChange: (E) => n({
                            ...t,
                            link_strategy: E.target.value,
                            auto_link_parent: E.target.value !== "none"
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
                      /* @__PURE__ */ l.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ l.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((E) => /* @__PURE__ */ l.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        E,
                        /* @__PURE__ */ l.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => D(E),
                            children: /* @__PURE__ */ l.jsx(he, { size: 12 })
                          }
                        )
                      ] }, E)) }),
                      /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ l.jsx(vn, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ l.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: S,
                            onChange: (E) => x(E.target.value),
                            onKeyDown: N
                          }
                        ),
                        S.trim() && !t.tags.includes(S.trim()) && /* @__PURE__ */ l.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => I(S),
                            children: /* @__PURE__ */ l.jsx(Qs, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions", children: k ? /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : C.length === 0 ? S && /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        S
                      ] }) : C.map((E) => /* @__PURE__ */ l.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => I(E.name),
                          children: E.name
                        },
                        E.id
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
                          /* @__PURE__ */ l.jsx(ul, { size: 16 }),
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
                          onClick: H,
                          children: [
                            /* @__PURE__ */ l.jsx(Sm, { size: 16 }),
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
                          onChange: (E) => n({ ...t, custom_path: E.target.value }),
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
                      r.map((E) => /* @__PURE__ */ l.jsxs(
                        "div",
                        {
                          role: "button",
                          tabIndex: 0,
                          className: "meld-folder-item",
                          onClick: () => $(E.name),
                          onKeyDown: (O) => {
                            (O.key === "Enter" || O.key === " ") && (O.preventDefault(), $(E.name));
                          },
                          "aria-label": `Open folder ${E.name}`,
                          children: [
                            /* @__PURE__ */ l.jsx("div", { className: "meld-folder-icon-wrapper", children: E.preview ? /* @__PURE__ */ l.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: wt(E.preview, 64),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ l.jsx(wg, { size: 16 }) }),
                            /* @__PURE__ */ l.jsx("span", { className: "meld-folder-name", children: E.name }),
                            /* @__PURE__ */ l.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${E.count === null ? "meld-folder-count--loading" : ""}`,
                                children: E.count !== null ? `${E.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ l.jsx(gi, { size: 14 })
                          ]
                        },
                        E.name
                      )),
                      a.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "meld-browser-image-grid", children: a.map((E) => /* @__PURE__ */ l.jsx(
                        "div",
                        {
                          role: "button",
                          tabIndex: 0,
                          className: "meld-browser-image-item",
                          onClick: () => f(E),
                          onKeyDown: (O) => {
                            (O.key === "Enter" || O.key === " ") && (O.preventDefault(), f(E));
                          },
                          "aria-label": `Preview ${E.filename}`,
                          children: /* @__PURE__ */ l.jsx(
                            "img",
                            {
                              src: wt(E, 120),
                              alt: E.filename,
                              title: E.filename
                            }
                          )
                        },
                        E.filename
                      )) })
                    ] }) })
                  ] })
                ] }) })
              ]
            }
          ),
          m && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (E) => {
                E.stopPropagation(), f(null);
              },
              children: /* @__PURE__ */ l.jsxs("div", { className: "meld-import-preview-content", onClick: (E) => E.stopPropagation(), children: [
                /* @__PURE__ */ l.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-import-preview-close",
                      onClick: () => f(null),
                      children: /* @__PURE__ */ l.jsx(he, { size: 24 })
                    }
                  ),
                  /* @__PURE__ */ l.jsx("img", { src: wt(m, 400), alt: m.filename })
                ] }),
                /* @__PURE__ */ l.jsx("div", { className: "meld-import-preview-info", children: m.filename })
              ] })
            }
          )
        ]
      }
    ),
    document.fullscreenElement || document.body
  );
}, Om = "meld-download-options", Ny = [
  { value: "lanczos", label: "Lanczos (high quality)" },
  { value: "bicubic", label: "Bicubic" },
  { value: "bilinear", label: "Bilinear" },
  { value: "box", label: "Box" },
  { value: "hamming", label: "Hamming" },
  { value: "nearest", label: "Nearest (pixel art)" }
];
function Iy() {
  try {
    const e = localStorage.getItem(Om);
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
function My(e) {
  try {
    localStorage.setItem(Om, JSON.stringify(e));
  } catch {
  }
}
const Uc = "meld-download-modal-title", Ty = ({ imageIds: e, onSuccess: t, onClose: n }) => {
  const [r, s] = p.useState(() => Iy()), { format: a, removeMetadata: o, resizeMode: i, resizeValue: c, resizeFilter: d } = r, [h, w] = p.useState(!1), y = p.useRef(!0), [S, x] = p.useState(null), [k, b] = p.useState(String(c)), m = p.useRef(!1);
  p.useEffect(() => () => {
    y.current = !1;
  }, []), p.useEffect(() => {
    My(r);
  }, [r]), p.useEffect(() => {
    b(String(c));
  }, [c]);
  const f = (N) => {
    N.target === N.currentTarget && (m.current = !0);
  }, u = (N) => {
    N.target === N.currentTarget && m.current && (h || n()), m.current = !1;
  };
  Te({
    onEscape: () => {
      h || n();
    }
  });
  const g = (N) => {
    b(N);
    const L = Number(N);
    if (!Number.isFinite(L) || L <= 0)
      return;
    const E = Math.min(i === "percent" ? 99 : 99999, Math.max(1, Math.round(L)));
    s((O) => ({ ...O, resizeValue: E }));
  }, _ = async () => {
    if (e.length === 0) {
      n();
      return;
    }
    y.current = !0, w(!0);
    const N = e.length;
    x({ current: 0, total: N });
    try {
      if (a === "zip")
        await Yg(
          e,
          o,
          i,
          c,
          d,
          (L, $) => {
            y.current && x({ current: L, total: $ });
          }
        );
      else {
        let L = 0;
        for (const $ of e) {
          if (!y.current) break;
          x({ current: L, total: N }), await Xg(
            $,
            o,
            i,
            c,
            d
          ), L += 1, y.current && x({ current: L, total: N }), await new Promise((H) => requestAnimationFrame(() => H()));
        }
      }
      if (!y.current) return;
      n(), t == null || t();
    } catch (L) {
      if (!y.current) return;
      F.error("Download failed:", L), alert("Failed to download images.");
    } finally {
      y.current && (w(!1), x(null));
    }
  }, v = i === "percent" ? "%" : "px", C = 1, I = i === "percent" ? 99 : 99999, D = i === "percent" ? "1-99" : "Max edge (px)";
  return ye.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: f,
        onMouseUp: u,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "meld-modal-content",
            onClick: (N) => N.stopPropagation(),
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": Uc,
            children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
                  /* @__PURE__ */ l.jsx(dl, { size: 18 }),
                  /* @__PURE__ */ l.jsxs("h3", { id: Uc, style: { margin: 0 }, children: [
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
                    children: /* @__PURE__ */ l.jsx(he, { size: 20 })
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
                            min: C,
                            max: I,
                            step: 1,
                            value: k,
                            placeholder: D,
                            onChange: (N) => g(N.target.value),
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
                        /* @__PURE__ */ l.jsx("span", { style: { fontSize: "13px" }, children: v }),
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
                            children: Ny.map((N) => /* @__PURE__ */ l.jsx("option", { value: N.value, children: N.label }, N.value))
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
              h && S && /* @__PURE__ */ l.jsxs(
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
                          /* @__PURE__ */ l.jsx("span", { children: `${S.total} images - Processing ${S.current + 1 > S.total ? S.total : S.current + 1} of ${S.total}...` }),
                          /* @__PURE__ */ l.jsxs("span", { style: { color: "var(--meld-text-secondary)" }, children: [
                            Math.round(S.current / Math.max(1, S.total) * 100),
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
                          S.current / Math.max(1, S.total) * 100
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
                              width: `${S.current / Math.max(1, S.total) * 100}%`,
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
                    children: h && S ? `Downloading ${Math.min(S.current + 1, S.total)}/${S.total}...` : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                      /* @__PURE__ */ l.jsx(dl, { size: 16 }),
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
}, Vc = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (d, h) => {
    const w = typeof d == "function" ? d(t) : d;
    if (!Object.is(w, t)) {
      const y = t;
      t = h ?? (typeof w != "object" || w === null) ? w : Object.assign({}, t, w), n.forEach((S) => S(t, y));
    }
  }, s = () => t, i = { setState: r, getState: s, getInitialState: () => c, subscribe: (d) => (n.add(d), () => n.delete(d)) }, c = t = e(r, s, i);
  return i;
}, Ly = (e) => e ? Vc(e) : Vc, Ay = (e) => e;
function Dy(e, t = Ay) {
  const n = gt.useSyncExternalStore(
    e.subscribe,
    gt.useCallback(() => t(e.getState()), [e, t]),
    gt.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return gt.useDebugValue(n), n;
}
const Ry = (e) => {
  const t = Ly(e), n = (r) => Dy(t, r);
  return Object.assign(n, t), n;
}, Py = (e) => Ry;
function Oy(e, t) {
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
}, zy = (e, t) => (n, r, s) => {
  let a = {
    storage: Oy(() => window.localStorage),
    partialize: (b) => b,
    version: 0,
    merge: (b, m) => ({
      ...m,
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
      s
    );
  const w = () => {
    const b = a.partialize({ ...r() });
    return h.setItem(a.name, {
      state: b,
      version: a.version
    });
  }, y = s.setState;
  s.setState = (b, m) => (y(b, m), w());
  const S = e(
    (...b) => (n(...b), w()),
    r,
    s
  );
  s.getInitialState = () => S;
  let x;
  const k = () => {
    var b, m;
    if (!h) return;
    const f = ++i;
    o = !1, c.forEach((g) => {
      var _;
      return g((_ = r()) != null ? _ : S);
    });
    const u = ((m = a.onRehydrateStorage) == null ? void 0 : m.call(a, (b = r()) != null ? b : S)) || void 0;
    return wo(h.getItem.bind(h))(a.name).then((g) => {
      if (g)
        if (typeof g.version == "number" && g.version !== a.version) {
          if (a.migrate) {
            const _ = a.migrate(
              g.state,
              g.version
            );
            return _ instanceof Promise ? _.then((v) => [!0, v]) : [!0, _];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, g.state];
      return [!1, void 0];
    }).then((g) => {
      var _;
      if (f !== i)
        return;
      const [v, C] = g;
      if (x = a.merge(
        C,
        (_ = r()) != null ? _ : S
      ), n(x, !0), v)
        return w();
    }).then(() => {
      f === i && (u == null || u(x, void 0), x = r(), o = !0, d.forEach((g) => g(x)));
    }).catch((g) => {
      f === i && (u == null || u(void 0, g));
    });
  };
  return s.persist = {
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
    rehydrate: () => k(),
    hasHydrated: () => o,
    onHydrate: (b) => (c.add(b), () => {
      c.delete(b);
    }),
    onFinishHydration: (b) => (d.add(b), () => {
      d.delete(b);
    })
  }, a.skipHydration || k(), x || S;
}, Fy = zy, $y = [
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
let Mn = null;
const zm = () => $y.map((e) => ({ ...e })), se = Py()(
  Fy(
    (e) => ({
      isOpen: !1,
      slots: zm(),
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
        if (!t) return n;
        const r = t.map(String), s = new Set(r), a = { ...n.buckets };
        let o = !1;
        for (const [c, d] of Object.entries(a)) {
          const h = d.filter((w) => !s.has(w));
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
        Mn && clearTimeout(Mn), e({ toastMessage: t, toastType: n }), Mn = setTimeout(() => {
          e({ toastMessage: null }), Mn = null;
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
), Wy = () => {
  var e, t;
  Mn && (clearTimeout(Mn), Mn = null), se.setState((n) => ({
    ...n,
    isOpen: !1,
    slots: zm(),
    buckets: {},
    images: {},
    toastMessage: null,
    toastType: "info"
  })), (t = (e = se.persist) == null ? void 0 : e.clearStorage) == null || t.call(e);
}, Fm = async () => {
  const e = await te.fetchApi("/meld/workflows");
  return re(e);
}, $m = async (e) => {
  const t = await te.fetchApi(`/meld/workflow/raw?name=${encodeURIComponent(e)}`);
  return re(t);
}, Wm = (e) => e ? e.replace(/\s+/g, "").toLowerCase() : "", ir = (e) => {
  const t = Wm(e);
  return t === "meldimageloader" || t === "loadimage";
}, Hr = (e) => Wm(e) === "loadimagemask", Uy = (e) => Array.isArray(e) && e.every(
  (t) => typeof t == "object" && t !== null && "id" in t && "type" in t
), ki = () => ({ executeWorkflow: p.useCallback(
  async (t, n, r, s) => {
    var k, b, m, f, u;
    if (!t || !n)
      throw new Error(
        `Missing required inputs for workflow execution: workflowName (${!!t}), image (${!!n})`
      );
    F.log("executeWorkflow called:", {
      workflowName: t,
      imageId: n.id,
      maskFilename: r,
      targetLoaderNodeId: s
    });
    const a = await $m(t);
    F.log("Workflow fetched:", t);
    let o = s || null, i = null, c = !1;
    if (a.nodes && Array.isArray(a.nodes)) {
      if (c = !0, !o) {
        const _ = a.nodes.find((v) => ir(v.type));
        _ && (o = String(_.id));
      }
      const g = a.nodes.find((_) => Hr(_.type));
      g && (i = String(g.id));
    } else {
      if (!o)
        for (const g in a) {
          const _ = a[g];
          if (ir(_.class_type)) {
            o = g;
            break;
          }
        }
      for (const g in a) {
        const _ = a[g];
        if (Hr(_.class_type)) {
          i = g;
          break;
        }
      }
    }
    if (F.log("Node IDs found:", {
      loaderNodeId: o,
      maskNodeId: i,
      isUIFormat: c
    }), !o)
      throw new Error("Meld Image Loader or Load Image node not found in the selected workflow.");
    if (r && !i)
      throw F.warn("Mask filename provided but no mask node found in workflow JSON"), new Error(
        "Load Image (as Mask) node not found in the selected workflow, but a mask was provided."
      );
    let d = n.filename;
    if (n.subfolder && (d = `${n.subfolder}/${n.filename}`), n.type && n.type !== "input" && (d = `${d} [${n.type}]`), c) {
      const g = window.app;
      if (typeof g != "object" || g === null || !("graph" in g))
        throw new Error("Active ComfyUI graph is not available. Please open a workflow first.");
      const _ = g;
      if (!_.graph || !Uy(_.graph._nodes))
        throw new Error("Active ComfyUI graph is not available. Please open a workflow first.");
      const v = t.replace(/\.json$/i, "");
      let C = !1;
      const I = document.querySelectorAll(".workflow-tab");
      for (const L of Array.from(I)) {
        const $ = L.querySelector(".workflow-label"), H = ((k = $ == null ? void 0 : $.textContent) == null ? void 0 : k.trim()) || ((b = L.textContent) == null ? void 0 : b.trim()) || "";
        if (H === v || H === t || H.startsWith(`${v} `) || H.startsWith(`${v}•`)) {
          L.click(), C = !0;
          break;
        }
      }
      C || await _.loadGraphData(a, !0, !0, t), await new Promise((L) => setTimeout(L, 200));
      const D = _.graph._nodes;
      F.log("Active graph nodes count:", D.length);
      const N = D.find(
        (L) => String(L.id) === o || ir(L.type)
      );
      if (N) {
        const L = (m = N.widgets) == null ? void 0 : m.find(($) => $.name === "image");
        F.log("Updating loader node widget:", {
          nodeId: N.id,
          type: N.type,
          imagePath: d
        }), L && (L.value = d, typeof L.callback == "function" && L.callback(d));
      } else
        F.warn(
          "Loader node (MeldImageLoader/LoadImage) not found in active graph after loading"
        );
      if (r) {
        const L = D.find(
          ($) => String($.id) === i || Hr($.type)
        );
        if (F.log("Updating mask node widget:", {
          nodeId: L == null ? void 0 : L.id,
          maskFilename: r
        }), L) {
          const $ = (f = L.widgets) == null ? void 0 : f.find((E) => E.name === "image");
          $ && ($.value = `${r} [temp]`);
          const H = (u = L.widgets) == null ? void 0 : u.find((E) => E.name === "channel");
          H && (H.value = "red");
        } else
          F.warn("LoadImageMask not found in active graph after loading");
      }
      _.graph.setDirtyCanvas(!0, !0);
      try {
        if (typeof _.queuePrompt != "function")
          throw new Error("queuePrompt is not available.");
        await _.queuePrompt(0);
        return;
      } catch (L) {
        throw F.error("Failed to queue workflow:", L), new Error("Failed to queue workflow. Check logs for details.");
      }
    }
    const h = JSON.parse(JSON.stringify(a));
    h[o].inputs.image = d, r && i && (h[i].inputs.image = `${r} [temp]`, h[i].inputs.channel = "red");
    const w = window.api;
    if (!(typeof w == "object" && w !== null && "fetchApi" in w && typeof w.fetchApi == "function"))
      throw new Error("ComfyUI API is not available. Please reload ComfyUI and try again.");
    const S = w, x = await S.fetchApi("/prompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: h,
        client_id: typeof S.clientId == "string" ? S.clientId : void 0
      })
    });
    return xl(x);
  },
  []
) }), Um = (e) => !!(e && Array.isArray(e.widgets));
function Vy(e) {
  let t = e.filename;
  return e.subfolder && (t = `${e.subfolder}/${e.filename}`), e.type && e.type !== "input" && (t = `${t} [${e.type}]`), t;
}
function ml(e, t) {
  var i, c;
  const n = window.app;
  if (!(n != null && n.graph))
    return { ok: !1, reason: "no_app_graph" };
  if (!Array.isArray(n.graph._nodes))
    return { ok: !1, reason: "no_loader_node" };
  const r = Vy(e), s = n.graph._nodes.filter((d) => ir(d.type));
  if (s.length === 0)
    return { ok: !1, reason: "no_loader_node" };
  let a = s[0];
  if (t) {
    const d = s.find((h) => String(h.id) === t);
    d && (a = d);
  }
  if (!Um(a))
    return { ok: !1, reason: "no_widgets" };
  const o = a.widgets.find((d) => d.name === "image");
  return o ? (o.value = r, typeof o.callback == "function" && o.callback(r), (c = (i = n.graph).afterChange) == null || c.call(i), n.graph.setDirtyCanvas(!0, !0), { ok: !0 }) : { ok: !1, reason: "no_image_widget" };
}
const By = () => {
  const { dispatch: e } = fe();
  return { injectMaskToGraph: p.useCallback(
    (n, r) => {
      var h, w;
      F.log("[Meld-Debug] injectMaskToGraph called with:", r), ml(n);
      const s = window.app;
      if (!(s != null && s.graph))
        return F.log("[Meld-Debug] injectMaskToGraph: No comfyApp.graph found"), !1;
      if (!Array.isArray(s.graph._nodes))
        return F.log("[Meld-Debug] injectMaskToGraph: comfyApp.graph._nodes is not an array"), !1;
      const a = s.graph._nodes.filter((y) => Hr(y.type));
      if (a.length === 0)
        return F.log("[Meld-Debug] injectMaskToGraph: No LoadImageMask nodes found in active graph"), e({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No 'Load Image (as Mask)' node found in the current workflow."
          }
        }), !1;
      const o = a[0];
      if (!o)
        return !1;
      if (!Um(o))
        return F.log("[Meld-Debug] injectMaskToGraph: target mask node has no widgets", o.id), !1;
      const i = o.widgets.find((y) => y.name === "image"), c = `${r} [temp]`;
      F.log(
        "[Meld-Debug] injectMaskToGraph: Updating node",
        o.id,
        "widget 'image' with",
        c
      ), i && (i.value = c, typeof i.callback == "function" && i.callback(c));
      const d = o.widgets.find((y) => y.name === "channel");
      return d && (d.value = "red", typeof d.callback == "function" && d.callback("red")), (w = (h = s.graph).afterChange) == null || w.call(h), s.graph.setDirtyCanvas(!0, !0), !0;
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
function Qy(e, t, n = 255) {
  const { width: r, height: s } = e, a = document.createElement("canvas");
  a.width = r, a.height = s;
  const o = a.getContext("2d", { willReadFrequently: !0 });
  if (!o) return e;
  const i = xo(e, [255, 255, 255], 255);
  o.putImageData(i, 0, 0), o.fillStyle = n > 0 ? "white" : "black", o.beginPath(), t(o), o.fill();
  const c = o.getImageData(0, 0, r, s), d = new Uint8ClampedArray(r * s);
  for (let h = 0; h < r * s; h++) {
    const w = c.data[h * 4] ?? 0;
    d[h] = w > 128 ? 255 : 0;
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
function Hy(e) {
  return e.data.every((t) => t === 0);
}
const Bc = (e) => e === "rect" || e === "ellipse" || e === "lasso", bi = ({
  imageId: e,
  mode: t,
  sequenceData: n,
  onSuccess: r,
  onClose: s
}) => {
  const { state: a, dispatch: o } = fe(), i = p.useMemo(() => a.images.find((V) => V.id === e) ?? a.lineageImages.find((V) => V.id === e) ?? se.getState().images[String(e)], [a.images, a.lineageImages, e]), c = p.useRef(void 0);
  i && (c.current = i);
  const d = i ?? c.current, { injectMaskToGraph: h } = By(), { executeWorkflow: w } = ki();
  Te({ onEscape: s });
  const y = p.useRef(null), S = p.useRef(null), x = p.useRef(null), k = p.useRef(null), [b, m] = p.useState(!1), [f, u] = p.useState(() => {
    try {
      const V = typeof localStorage < "u" ? localStorage.getItem("meld-mask-tool") : null;
      return Bc(V) ? V : "rect";
    } catch {
      return "rect";
    }
  });
  p.useEffect(() => {
    try {
      typeof localStorage < "u" && Bc(f) && localStorage.setItem("meld-mask-tool", f);
    } catch {
    }
  }, [f]);
  const [g, _] = p.useState({ x: 0, y: 0 }), [v, C] = p.useState({ x: 0, y: 0 }), [I, D] = p.useState([]), [N, L] = p.useState(null), [$, H] = p.useState(!1), [E, O] = p.useState(1), [M, U] = p.useState({ x: 0, y: 0 }), [j, T] = p.useState(!1), [z, W] = p.useState(!1), A = p.useRef(null), R = p.useCallback(() => {
    const V = x.current, G = S.current;
    if (!V || !G) return null;
    const ne = G.getBoundingClientRect(), X = V.naturalWidth, le = V.naturalHeight;
    if (!X || !le) return null;
    const de = X / le, Le = ne.width / ne.height;
    let ge, Se, ke = 0, We = 0;
    return de > Le ? (ge = ne.width, Se = ne.width / de, We = (ne.height - Se) / 2) : (Se = ne.height, ge = ne.height * de, ke = (ne.width - ge) / 2), {
      left: ke,
      top: We,
      width: ge,
      height: Se
    };
  }, []), P = p.useCallback(
    (V, G, ne, X) => {
      if (!V) return G;
      const le = V.getBoundingClientRect(), de = le.width / 2, Le = le.height / 2, ge = {
        x: (de - G.x) / ne,
        y: (Le - G.y) / ne
      };
      return { x: de - ge.x * X, y: Le - ge.y * X };
    },
    []
  ), Z = p.useCallback(() => {
    O((V) => {
      const G = Math.min(V * 1.2, 20);
      return U((ne) => P(S.current, ne, V, G)), G;
    });
  }, [P]), J = p.useCallback(() => {
    O((V) => {
      const G = Math.max(0.1, V / 1.2);
      return U((ne) => P(S.current, ne, V, G)), G;
    });
  }, [P]), oe = p.useCallback(() => {
    const V = y.current;
    if (!V) return;
    const G = V.getContext("2d");
    if (!G) return;
    G.clearRect(0, 0, V.width, V.height);
    const ne = getComputedStyle(document.documentElement), X = ne.getPropertyValue("--comfy-input-bg-active") || ne.getPropertyValue("--comfy-input-bg") || ne.getPropertyValue("--bg-color") || "var(--comfy-input-bg)", le = R();
    if (k.current && le && (G.save(), G.globalAlpha = 0.5, G.drawImage(
      k.current,
      le.left,
      le.top,
      le.width,
      le.height
    ), G.restore()), b) {
      const de = Math.min(g.x, v.x), Le = Math.min(g.y, v.y), ge = Math.abs(g.x - v.x), Se = Math.abs(g.y - v.y);
      if (G.save(), G.globalAlpha = 0.3, G.fillStyle = X, G.strokeStyle = "white", G.lineWidth = 2, G.setLineDash([5, 5]), G.beginPath(), f === "rect")
        G.rect(de, Le, ge, Se);
      else if (f === "ellipse") {
        const ke = de + ge / 2, We = Le + Se / 2;
        G.ellipse(ke, We, ge / 2, Se / 2, 0, 0, 2 * Math.PI);
      } else if (f === "lasso" && I.length > 1) {
        const ke = I[0];
        if (ke) {
          G.moveTo(ke.x, ke.y);
          for (let We = 1; We < I.length; We++) {
            const Zt = I[We];
            Zt && G.lineTo(Zt.x, Zt.y);
          }
          G.closePath();
        }
      }
      G.fill(), G.globalAlpha = 1, G.stroke(), G.restore();
    }
  }, [b, g, v, f, I, R]), [me, we] = p.useState([]), B = p.useMemo(() => me.length > 0 ? me[me.length - 1] : x.current ? $l(x.current.naturalWidth, x.current.naturalHeight) : null, [me]);
  p.useEffect(() => {
    var V;
    (V = x.current) != null && V.naturalWidth && me.length === 0 && we([
      $l(x.current.naturalWidth, x.current.naturalHeight)
    ]);
  }, [me.length]);
  const ae = p.useCallback(() => {
    var V;
    (V = x.current) != null && V.naturalWidth && me.length === 0 && we([
      $l(x.current.naturalWidth, x.current.naturalHeight)
    ]);
  }, [me.length]), K = p.useRef(!1), Ye = p.useRef(0), kt = (V) => {
    V.target === V.currentTarget && (K.current = !0);
  }, Xe = (V) => {
    V.target === V.currentTarget && K.current && !b && s(), K.current = !1;
  };
  p.useEffect(() => {
    if (!B) return;
    k.current || (k.current = document.createElement("canvas"));
    const V = k.current;
    V.width = B.width, V.height = B.height;
    const G = V.getContext("2d");
    if (!G) return;
    const ne = xo(B, [255, 255, 255], 255);
    G.putImageData(ne, 0, 0), oe();
  }, [B, oe]), p.useEffect(() => {
    b && oe();
  }, [b, oe]), p.useEffect(() => {
    const V = S.current;
    if (!V) return;
    const G = (ne) => {
      ne.preventDefault();
      const X = ne.deltaY > 0 ? 1 / 1.1 : 1.1;
      O((le) => {
        const de = Math.min(Math.max(0.1, le * X), 20);
        return U((Le) => {
          const ge = V.getBoundingClientRect(), Se = ne.clientX - ge.left, ke = ne.clientY - ge.top, We = {
            x: (Se - Le.x) / le,
            y: (ke - Le.y) / le
          };
          return {
            x: Se - We.x * de,
            y: ke - We.y * de
          };
        }), de;
      });
    };
    return V.addEventListener("wheel", G, { passive: !1 }), () => V.removeEventListener("wheel", G);
  }, []), p.useEffect(() => {
    if (!z) return;
    const V = (ne) => {
      if (A.current) {
        const X = ne.clientX - A.current.clientX, le = ne.clientY - A.current.clientY;
        U({
          x: A.current.panX + X,
          y: A.current.panY + le
        });
      }
    }, G = () => {
      W(!1), A.current = null;
    };
    return window.addEventListener("mousemove", V), window.addEventListener("mouseup", G), () => {
      window.removeEventListener("mousemove", V), window.removeEventListener("mouseup", G);
    };
  }, [z]), p.useEffect(() => {
    const V = () => {
      S.current && y.current && (y.current.width = S.current.clientWidth, y.current.height = S.current.clientHeight, oe());
    }, G = new ResizeObserver(V);
    return S.current && G.observe(S.current), V(), () => G.disconnect();
  }, [oe]);
  const Xt = (V) => {
    var ke;
    const G = V.button === 2, ne = V.button === 1, X = j && V.button === 0;
    if (G || ne || X) {
      V.preventDefault(), V.stopPropagation(), A.current = {
        panX: M.x,
        panY: M.y,
        clientX: V.clientX,
        clientY: V.clientY
      }, W(!0);
      return;
    }
    if (V.button !== 0 || b || $ || Date.now() - Ye.current < 100)
      return;
    V.preventDefault();
    const le = R(), de = (ke = S.current) == null ? void 0 : ke.getBoundingClientRect();
    if (!le || !de) return;
    m(!0);
    const Le = {
      x: (V.clientX - de.left - M.x) / E,
      y: (V.clientY - de.top - M.y) / E
    }, ge = Math.max(le.left, Math.min(Le.x, le.left + le.width)), Se = Math.max(le.top, Math.min(Le.y, le.top + le.height));
    _({ x: ge, y: Se }), C({ x: ge, y: Se }), D(f === "lasso" ? [{ x: ge, y: Se }] : []), L(null);
  };
  p.useEffect(() => {
    if (!b) return;
    const V = (ne) => {
      var Se;
      const X = R(), le = (Se = S.current) == null ? void 0 : Se.getBoundingClientRect();
      if (!X || !le) return;
      const de = {
        x: (ne.clientX - le.left - M.x) / E,
        y: (ne.clientY - le.top - M.y) / E
      }, Le = Math.max(X.left, Math.min(de.x, X.left + X.width)), ge = Math.max(X.top, Math.min(de.y, X.top + X.height));
      C({ x: Le, y: ge }), f === "lasso" && D((ke) => [...ke, { x: Le, y: ge }]);
    }, G = (ne) => {
      var de;
      const X = R(), le = (de = S.current) == null ? void 0 : de.getBoundingClientRect();
      if (X && le && B && x.current) {
        const Le = {
          x: (ne.clientX - le.left - M.x) / E,
          y: (ne.clientY - le.top - M.y) / E
        }, ge = Math.max(X.left, Math.min(Le.x, X.left + X.width)), Se = Math.max(X.top, Math.min(Le.y, X.top + X.height)), ke = Math.min(g.x, ge), We = Math.min(g.y, Se), Zt = Math.abs(g.x - ge), br = Math.abs(g.y - Se), Ef = f === "lasso";
        if (Zt > 5 || br > 5 || Ef && I.length > 2) {
          const Nf = x.current.naturalWidth, If = x.current.naturalHeight, $n = Nf / X.width, Wn = If / X.height, Mf = Qy(B, (kn) => {
            if (f === "rect") {
              const bn = (ke - X.left) * $n, Sn = (We - X.top) * Wn, Jt = Zt * $n, kl = br * Wn;
              kn.rect(bn, Sn, Jt, kl);
            } else if (f === "ellipse") {
              const bn = (ke - X.left) * $n, Sn = (We - X.top) * Wn, Jt = Zt * $n, kl = br * Wn, Tf = bn + Jt / 2, Lf = Sn + kl / 2;
              kn.ellipse(Tf, Lf, Jt / 2, kl / 2, 0, 0, 2 * Math.PI);
            } else if (f === "lasso" && I.length > 2) {
              const bn = I[0];
              if (!bn) return;
              kn.moveTo(
                (bn.x - X.left) * $n,
                (bn.y - X.top) * Wn
              );
              for (let Sn = 1; Sn < I.length; Sn++) {
                const Jt = I[Sn];
                Jt && kn.lineTo((Jt.x - X.left) * $n, (Jt.y - X.top) * Wn);
              }
              kn.closePath();
            }
          });
          we((kn) => [...kn, Mf]);
        }
      }
      Ye.current = Date.now(), m(!1), D([]);
    };
    return window.addEventListener("mousemove", V), window.addEventListener("mouseup", G), () => {
      window.removeEventListener("mousemove", V), window.removeEventListener("mouseup", G);
    };
  }, [
    b,
    g.x,
    g.y,
    R,
    B,
    f,
    I,
    M.x,
    M.y,
    E
  ]);
  const kr = p.useCallback(() => {
    me.length > 1 && we((V) => V.slice(0, -1));
  }, [me.length]);
  p.useEffect(() => {
    const V = (X) => {
      if (!X) return !1;
      const le = X, de = le.tagName;
      return de === "INPUT" || de === "TEXTAREA" || de === "BUTTON" || de === "SELECT" || de === "A" || le.isContentEditable || le.tabIndex != null && le.tabIndex >= 0;
    }, G = (X) => {
      X.code === "Space" && !X.repeat && (V(X.target) || (X.preventDefault(), T(!0))), (X.metaKey || X.ctrlKey) && X.key.toLowerCase() === "z" && !X.shiftKey ? (X.preventDefault(), X.stopPropagation(), X.stopImmediatePropagation(), kr()) : X.key === "Escape" && (X.preventDefault(), X.stopPropagation(), X.stopImmediatePropagation(), s(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    }, ne = (X) => {
      X.code === "Space" && (V(X.target) || (X.preventDefault(), T(!1)));
    };
    return window.addEventListener("keydown", G, { capture: !0 }), window.addEventListener("keyup", ne, { capture: !0 }), () => {
      window.removeEventListener("keydown", G, { capture: !0 }), window.removeEventListener("keyup", ne, { capture: !0 });
    };
  }, [kr, s]);
  const _l = () => {
    if (x.current) {
      const V = $l(
        x.current.naturalWidth,
        x.current.naturalHeight
      );
      we((G) => [...G, V]);
    }
  }, Ne = async () => {
    if (!B || !x.current) return null;
    H(!0);
    try {
      const { width: V, height: G } = B, ne = document.createElement("canvas");
      ne.width = V, ne.height = G;
      const X = ne.getContext("2d");
      if (!X) return null;
      const le = xo(B, [255, 255, 255], 255);
      X.putImageData(le, 0, 0);
      const de = await new Promise(
        (br) => ne.toBlob(br, "image/png")
      );
      if (!de) return null;
      const ge = `meld_mask_${Date.now()}.png`, Se = new File([de], ge, { type: "image/png" }), ke = new FormData();
      ke.append("image", Se), ke.append("type", "temp"), ke.append("overwrite", "true");
      const We = await te.fetchApi("/upload/image", {
        method: "POST",
        body: ke
      });
      return (await xl(We)).name ?? null;
    } catch (V) {
      return F.error("Error uploading mask:", V), null;
    } finally {
      H(!1);
    }
  }, mt = async () => {
    if (!d) return;
    const V = await Ne();
    V && h(d, V) && (s(), o({ type: "CLOSE_VIEWER" }), r == null || r());
  }, bt = async () => {
    if (!d) return;
    const V = await Ne();
    V && (t === "run_sequence" && n ? (await w(
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
  }, Ft = p.useMemo(() => B && !Hy(B), [B]);
  return d ? /* @__PURE__ */ l.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onMouseDown: kt,
      onMouseUp: Xe,
      role: "presentation",
      children: /* @__PURE__ */ l.jsxs(
        "div",
        {
          className: "meld-modal-content meld-mask-editor-modal",
          onClick: (V) => V.stopPropagation(),
          children: [
            /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
              /* @__PURE__ */ l.jsx("h3", { children: "Select Mask Area" }),
              /* @__PURE__ */ l.jsx("button", { className: "meld-modal-close", onClick: s, type: "button", children: /* @__PURE__ */ l.jsx(he, { size: 20 }) })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-body", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-mask-editor-tool-selector", children: [
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${f === "rect" ? "meld-mask-tool-btn--active" : ""}`,
                    onClick: () => u("rect"),
                    type: "button",
                    title: "Rectangle Tool",
                    children: [
                      /* @__PURE__ */ l.jsx(Em, { size: 18 }),
                      /* @__PURE__ */ l.jsx("span", { children: "Rect" })
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${f === "ellipse" ? "meld-mask-tool-btn--active" : ""}`,
                    onClick: () => u("ellipse"),
                    type: "button",
                    title: "Ellipse Tool",
                    children: [
                      /* @__PURE__ */ l.jsx(gg, { size: 18 }),
                      /* @__PURE__ */ l.jsx("span", { children: "Ellipse" })
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${f === "lasso" ? "meld-mask-tool-btn--active" : ""}`,
                    onClick: () => u("lasso"),
                    type: "button",
                    title: "Lasso Tool",
                    children: [
                      /* @__PURE__ */ l.jsx(_g, { size: 18 }),
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
                    onClick: J,
                    type: "button",
                    title: "Zoom Out",
                    "aria-label": "Zoom Out",
                    children: /* @__PURE__ */ l.jsx(zg, { size: 18 })
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: "meld-mask-tool-btn",
                    onClick: () => {
                      O(1), U({ x: 0, y: 0 });
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
                      Math.round(E * 100),
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
                    children: /* @__PURE__ */ l.jsx(Og, { size: 18 })
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsx(
                "div",
                {
                  ref: S,
                  className: "meld-mask-editor-canvas-container",
                  onMouseDown: Xt,
                  onContextMenu: (V) => V.preventDefault(),
                  role: "presentation",
                  style: {
                    cursor: z ? "grabbing" : j ? "grab" : "crosshair"
                  },
                  children: /* @__PURE__ */ l.jsxs(
                    "div",
                    {
                      className: "meld-mask-editor-transform-layer",
                      style: {
                        transform: `translate(${M.x}px, ${M.y}px) scale(${E})`,
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
                            ref: x,
                            src: xi(d),
                            alt: "To be masked",
                            className: "meld-mask-editor-image",
                            onDragStart: (V) => V.preventDefault(),
                            onLoad: ae
                          }
                        ),
                        /* @__PURE__ */ l.jsx(
                          "canvas",
                          {
                            ref: y,
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
                      onClick: mt,
                      disabled: !Ft || $,
                      type: "button",
                      children: [
                        $ ? /* @__PURE__ */ l.jsx(Rc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ l.jsx(st, { size: 16 }),
                        /* @__PURE__ */ l.jsx("span", { children: "Send" })
                      ]
                    }
                  ) : /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--run",
                      onClick: bt,
                      disabled: !Ft || $,
                      type: "button",
                      children: [
                        $ ? /* @__PURE__ */ l.jsx(Rc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ l.jsx(ul, { size: 16 }),
                        /* @__PURE__ */ l.jsx("span", { children: t === "run_sequence" && n ? n.currentIndex === n.totalCount - 1 ? "Queue (Last)" : `Queue (${n.currentIndex + 1}/${n.totalCount})` : "Queue" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--undo",
                      onClick: kr,
                      disabled: me.length <= 1 || $,
                      type: "button",
                      title: "Undo last area",
                      children: [
                        /* @__PURE__ */ l.jsx(Dg, { size: 16 }),
                        /* @__PURE__ */ l.jsx("span", { children: "Undo" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--cancel",
                      onClick: _l,
                      disabled: !Ft || $,
                      type: "button",
                      title: "Clear all areas",
                      children: [
                        /* @__PURE__ */ l.jsx(he, { size: 16 }),
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
}, Vm = ({
  images: e,
  currentIndex: t,
  workflowName: n,
  targetLoaderNodeId: r,
  onSuccess: s,
  onClose: a
}) => {
  Te({ onEscape: a });
  const o = e[t];
  return p.useEffect(() => {
    o || a();
  }, [o, a]), o ? /* @__PURE__ */ l.jsx(
    bi,
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
}, Bm = (e) => {
  const t = /(?:[^\s"']+|"[^"]*"|'[^']*')+/g;
  return e.trim().match(t) || [];
}, Wl = (e) => e.replace(/^["']|["']$/g, ""), Ky = (e) => e.trim() ? Bm(e).every((n) => !!(n === "next" || n === "prev" || n === "delete" || n.startsWith("tag:") && n.length > 4 || n.startsWith("-tag:") && n.length > 5 || n.startsWith("tag-toggle:") && n.length > 11 || n.startsWith("lt:") && n.length > 3)) : !0, Gy = (e, t) => {
  const n = Bm(e), r = {
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
}, qy = async () => {
  const e = await te.fetchApi("/meld/databases");
  return re(e);
}, Yy = async (e, t = !1) => {
  const n = await te.fetchApi("/meld/databases", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, switch_to_new: t })
  });
  return re(n);
}, Xy = async (e) => {
  const t = await te.fetchApi("/meld/databases/switch", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  return re(t);
}, Zy = async (e, t) => {
  const n = await te.fetchApi("/meld/databases/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, confirm_text: t })
  });
  return re(n);
}, Jy = async (e, t) => {
  const n = await te.fetchApi("/meld/databases/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, new_name: t })
  });
  return re(n);
}, Qc = [
  "Light Table contents will be cleared.",
  "Search keywords, suggestions, and in-flight cache will be reinitialized.",
  "Current selection, viewer state, open modals, and search results will be reset.",
  "Database-specific settings may change after the switch.",
  "Switching is blocked while scan or analytics refresh is running."
], ev = () => {
  const { dispatch: e } = fe(), [t, n] = p.useState(null), [r, s] = p.useState(""), [a, o] = p.useState({}), [i, c] = p.useState(!1), d = p.useCallback(async () => {
    try {
      c(!0);
      const u = await qy();
      n(u);
    } catch (u) {
      F.error("Failed to fetch databases", u), e({
        type: "SET_ERROR",
        payload: u instanceof Error ? u.message : "Failed to fetch databases"
      });
    } finally {
      c(!1);
    }
  }, [e]);
  p.useEffect(() => {
    d();
  }, [d]);
  const h = p.useCallback((u) => {
    window.dispatchEvent(new CustomEvent("meld-database-changed", { detail: u }));
  }, []), w = (t == null ? void 0 : t.active_database) ?? null, y = (t == null ? void 0 : t.databases) ?? [], S = p.useCallback((u, g) => {
    o((_) => ({
      ..._,
      [u]: g
    }));
  }, []), x = p.useCallback(
    (u) => a[u] ?? u,
    [a]
  ), k = p.useCallback(async () => {
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
          try {
            const g = await Yy(u, !1);
            n(g), s("");
          } catch (g) {
            throw F.error("Failed to create database", g), e({
              type: "SET_ERROR",
              payload: g instanceof Error ? g.message : "Failed to create database"
            }), g;
          } finally {
            c(!1);
          }
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
          details: Qc,
          confirmLabel: "Switch Database",
          onConfirm: async () => {
            c(!0);
            try {
              const g = await Xy(u.name);
              n(g), h(g);
            } catch (g) {
              throw F.error("Failed to switch database", g), e({
                type: "SET_ERROR",
                payload: g instanceof Error ? g.message : "Failed to switch database"
              }), g;
            } finally {
              c(!1);
            }
          }
        }
      });
    },
    [e, h]
  ), m = p.useCallback(
    (u) => {
      const g = [
        `The database file "${u.filename}" will be permanently deleted.`,
        'Type "delete" to confirm the operation.'
      ];
      u.is_active && (g.push(
        "The app will switch to another database or recreate default.db automatically."
      ), g.push(...Qc)), e({
        type: "OPEN_CONFIRM_MODAL",
        payload: {
          title: "Delete Database",
          message: `Delete database "${u.name}" permanently?`,
          details: g,
          confirmLabel: "Delete Database",
          danger: !0,
          requiredText: "delete",
          requiredTextLabel: 'Type "delete" to enable deletion.',
          onConfirm: async (_) => {
            c(!0);
            try {
              const v = await Zy(
                u.name,
                _ ?? ""
              );
              n(v), (u.is_active || (t == null ? void 0 : t.active_database) !== v.active_database || (t == null ? void 0 : t.database_generation) !== v.database_generation) && h(v);
            } catch (v) {
              throw F.error("Failed to delete database", v), e({
                type: "SET_ERROR",
                payload: v instanceof Error ? v.message : "Failed to delete database"
              }), v;
            } finally {
              c(!1);
            }
          }
        }
      });
    },
    [e, h, t == null ? void 0 : t.active_database, t == null ? void 0 : t.database_generation]
  ), f = p.useCallback(
    (u) => {
      const g = x(u.name).trim();
      if (!g) {
        e({ type: "SET_ERROR", payload: "New database name is required" });
        return;
      }
      if (g === u.name) {
        e({ type: "SET_ERROR", payload: "New database name must be different" });
        return;
      }
      e({
        type: "OPEN_CONFIRM_MODAL",
        payload: {
          title: "Rename Database",
          message: `Rename database "${u.name}" to "${g}"?`,
          details: [
            "The database file and runtime directories will be renamed together.",
            "Current database contents are preserved."
          ],
          confirmLabel: "Rename Database",
          onConfirm: async () => {
            c(!0);
            try {
              const _ = await Jy(u.name, g);
              n(_), o((v) => ({
                ...v,
                [g]: g
              }));
            } catch (_) {
              throw F.error("Failed to rename database", _), e({
                type: "SET_ERROR",
                payload: _ instanceof Error ? _.message : "Failed to rename database"
              }), _;
            } finally {
              c(!1);
            }
          }
        }
      });
    },
    [e, x]
  );
  return p.useMemo(
    () => ({
      databases: y,
      activeDatabaseName: w,
      databaseNameInput: r,
      setDatabaseNameInput: s,
      getRenameDraftForDatabase: x,
      setRenameDraftForDatabase: S,
      isLoading: i,
      loadDatabases: d,
      submitCreateDatabase: k,
      confirmRenameDatabase: f,
      confirmSwitchDatabase: b,
      confirmDeleteDatabase: m
    }),
    [
      y,
      w,
      r,
      x,
      S,
      i,
      d,
      k,
      f,
      b,
      m
    ]
  );
}, tv = () => {
  const { state: e, dispatch: t, updateSetting: n } = fe(), r = ev(), [s, a] = p.useState("Gallery"), [o, i] = p.useState({
    ...e.settings
  }), [c, d] = p.useState({}), [h, w] = p.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [y, S] = p.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [x, k] = p.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [b, m] = p.useState(
    e.settings["viewer.thumbnail_window_size"].toString()
  ), [f, u] = p.useState(
    e.settings["gallery.trash_retention_days"].toString()
  ), [g, _] = p.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [v, C] = p.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [I, D] = p.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [N, L] = p.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [$, H] = p.useState(
    e.settings["viewer.details.core_prompt_count"].toString()
  ), [E, O] = p.useState(e.settings["fullscreen.details.max_positive_prompt_lines"].toString()), [M, U] = p.useState(e.settings["fullscreen.details.max_negative_prompt_lines"].toString()), [j, T] = p.useState(
    e.settings["fullscreen.details.core_prompt_count"].toString()
  ), [z, W] = p.useState(
    e.settings["sidebar.thumbnail_size"].toString()
  );
  return {
    activeTab: s,
    setActiveTab: a,
    localSettings: o,
    setLocalSettings: i,
    shortcutErrors: c,
    setShortcutErrors: d,
    handleClose: async () => {
      const B = Object.keys(o).filter(
        (ae) => o[ae] !== e.settings[ae] && !c[ae]
      );
      if (B.length > 0)
        for (const ae of B)
          await n(ae, o[ae]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (B, ae) => {
      i((K) => ({
        ...K,
        [B]: !ae
      }));
    },
    handleNumberChange: (B, ae, K, Ye) => {
      B === "gallery.initial_load_count" ? w(ae) : B === "gallery.max_load_count" ? S(ae) : B === "gallery.lineage_max_depth" ? k(ae) : B === "viewer.thumbnail_window_size" ? m(ae) : B === "gallery.trash_retention_days" ? u(ae) : B === "gallery.auto_link_phash_threshold" ? _(ae) : B === "gallery.suggest_phash_threshold" ? C(ae) : B === "viewer.details.max_positive_prompt_lines" ? D(ae) : B === "viewer.details.max_negative_prompt_lines" ? L(ae) : B === "viewer.details.core_prompt_count" ? H(ae) : B === "fullscreen.details.max_positive_prompt_lines" ? O(ae) : B === "fullscreen.details.max_negative_prompt_lines" ? U(ae) : B === "fullscreen.details.core_prompt_count" ? T(ae) : B === "sidebar.thumbnail_size" && W(ae);
      const kt = Number.parseInt(ae, 10);
      if (!Number.isNaN(kt)) {
        let Xe = kt;
        K !== void 0 && Xe < K && (Xe = K), Ye !== void 0 && Xe > Ye && (Xe = Ye), i((Xt) => ({
          ...Xt,
          [B]: Xe
        }));
      }
    },
    handleNumberBlur: (B) => {
      !B || !B.key || (B.key === "gallery.initial_load_count" ? w(o["gallery.initial_load_count"].toString()) : B.key === "gallery.max_load_count" ? S(o["gallery.max_load_count"].toString()) : B.key === "gallery.lineage_max_depth" ? k(o["gallery.lineage_max_depth"].toString()) : B.key === "viewer.thumbnail_window_size" ? m(o["viewer.thumbnail_window_size"].toString()) : B.key === "gallery.trash_retention_days" ? u(o["gallery.trash_retention_days"].toString()) : B.key === "gallery.auto_link_phash_threshold" ? _(o["gallery.auto_link_phash_threshold"].toString()) : B.key === "gallery.suggest_phash_threshold" ? C(o["gallery.suggest_phash_threshold"].toString()) : B.key === "viewer.details.max_positive_prompt_lines" ? D(
        o["viewer.details.max_positive_prompt_lines"].toString()
      ) : B.key === "viewer.details.max_negative_prompt_lines" ? L(
        o["viewer.details.max_negative_prompt_lines"].toString()
      ) : B.key === "viewer.details.core_prompt_count" ? H(o["viewer.details.core_prompt_count"].toString()) : B.key === "fullscreen.details.max_positive_prompt_lines" ? O(
        o["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : B.key === "fullscreen.details.max_negative_prompt_lines" ? U(
        o["fullscreen.details.max_negative_prompt_lines"].toString()
      ) : B.key === "fullscreen.details.core_prompt_count" ? T(
        o["fullscreen.details.core_prompt_count"].toString()
      ) : B.key === "sidebar.thumbnail_size" && W(o["sidebar.thumbnail_size"].toString()));
    },
    handleResetShortcuts: () => {
      i((B) => ({
        ...B,
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
            try {
              await oy(), t({
                type: "SHOW_TOAST",
                payload: "Thumbnail cache cleared"
              });
            } catch (B) {
              F.error("Failed to clear thumbnail cache:", B), t({
                type: "SET_ERROR",
                payload: "Failed to clear thumbnail cache"
              });
            }
          }
        }
      });
    },
    validateShortcut: (B) => typeof B != "string" ? !1 : Ky(B),
    // Input states
    initialLoadCountInput: h,
    maxLoadCountInput: y,
    lineageMaxDepthInput: x,
    thumbnailWindowSizeInput: b,
    trashRetentionDaysInput: f,
    autoLinkPhashThresholdInput: g,
    suggestPhashThresholdInput: v,
    maxPositivePromptLinesInput: I,
    maxNegativePromptLinesInput: N,
    fullscreenMaxPositivePromptLinesInput: E,
    fullscreenMaxNegativePromptLinesInput: M,
    viewerCorePromptCountInput: $,
    fullscreenCorePromptCountInput: j,
    thumbnailSizeInput: z,
    ...r
  };
}, Y = ({
  label: e,
  description: t,
  children: n,
  labelId: r
}) => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item__info", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__label", id: r, children: e }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__description", children: t })
  ] }),
  /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__control", children: n })
] }), nv = ({
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
    /* @__PURE__ */ l.jsx(Y, { label: "Show Model", description: "Display model name in fullscreen details.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
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
      Y,
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
      Y,
      {
        label: "Show Core Prompt",
        description: "Display a subset of keywords from the positive prompt based on rarity (bottom analytics counts).",
        labelId: "fullscreen-show-core-prompt-label",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Core Prompt Keyword Count",
        description: "Number of rarity keywords to display in fullscreen.",
        labelId: "fullscreen-core-prompt-count-label",
        children: /* @__PURE__ */ l.jsx(
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
            onBlur: () => s({
              key: "fullscreen.details.core_prompt_count"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
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
      Y,
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
      Y,
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
      Y,
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
    /* @__PURE__ */ l.jsx(Y, { label: "Show Tags", description: "Display tags in fullscreen details.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
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
function Qm() {
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx("path", { d: "M18 16.6v2.8", stroke: "var(--meld-icon-halo, transparent)", strokeWidth: 4 }),
    /* @__PURE__ */ l.jsx("path", { d: "M16.6 18h2.8", stroke: "var(--meld-icon-halo, transparent)", strokeWidth: 4 }),
    /* @__PURE__ */ l.jsx("path", { d: "M18 16.6v2.8" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16.6 18h2.8" })
  ] });
}
function Hm(e) {
  return /* @__PURE__ */ l.jsxs(zt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M6 12h12" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14 8l4 4-4 4" })
  ] });
}
function Km(e) {
  return /* @__PURE__ */ l.jsxs(zt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M4.5 5.5h7l2 2h6v11a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 12h4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 15h3" }),
    /* @__PURE__ */ l.jsx("path", { d: "M13 12l3 0" }),
    /* @__PURE__ */ l.jsx("path", { d: "M15.5 10.5l3 1.5-3 1.5" })
  ] });
}
function Gm(e) {
  return /* @__PURE__ */ l.jsxs(zt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ l.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16 8l4 4-4 4" })
  ] });
}
function qm(e) {
  return /* @__PURE__ */ l.jsxs(zt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ l.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16 8l4 4-4 4" }),
    /* @__PURE__ */ l.jsx(Qm, {})
  ] });
}
function Ym(e) {
  return /* @__PURE__ */ l.jsxs(zt, { ...e, children: [
    /* @__PURE__ */ l.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ l.jsx("path", { d: "M13 9l3 3-3 3" })
  ] });
}
function Xm(e) {
  return /* @__PURE__ */ l.jsxs(zt, { ...e, children: [
    /* @__PURE__ */ l.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ l.jsx("path", { d: "M13 9l3 3-3 3" }),
    /* @__PURE__ */ l.jsx(Qm, {})
  ] });
}
function Zm(e) {
  return /* @__PURE__ */ l.jsxs(zt, { ...e, children: [
    /* @__PURE__ */ l.jsx("rect", { x: "4.5", y: "6", width: "12.5", height: "10.5", rx: "2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M7.5 13l2-2 2 2 2.5-3 2.5 3" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14.5 17.5l5-5" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16.5 19.5l3-3" })
  ] });
}
function Jm(e) {
  return /* @__PURE__ */ l.jsxs(zt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M20 12l-8 8-9-9v-5a2 2 0 0 1 2-2h5z" }),
    /* @__PURE__ */ l.jsx("circle", { cx: "7.5", cy: "8.5", r: "1" })
  ] });
}
function ef(e) {
  return /* @__PURE__ */ l.jsxs(zt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M15.5 4.5h-8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9l-3-4z" }),
    /* @__PURE__ */ l.jsx("path", { d: "M15.5 4.5v4h4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M9 11h6" }),
    /* @__PURE__ */ l.jsx("path", { d: "M9 15h6" })
  ] });
}
function tf(e) {
  return /* @__PURE__ */ l.jsxs(zt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M7 7h10" }),
    /* @__PURE__ */ l.jsx("path", { d: "M9 7v-2h6v2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 7l1 12h6l1-12" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14.5 13.5a3.5 3.5 0 1 1-1.2-2.6" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14.5 9.5v3h-3" })
  ] });
}
const nf = [
  { id: "", label: "None", icon: null },
  {
    id: "add_unified_loader",
    label: "Add Unified Loader",
    icon: Hm
  },
  {
    id: "send_to_workflow",
    label: "Send to Workflow",
    icon: Ym
  },
  {
    id: "send_to_workflow_mask",
    label: "Send to Workflow (Mask)",
    icon: Xm
  },
  { id: "queue_workflow", label: "Queue Workflow", icon: Gm },
  {
    id: "queue_workflow_mask",
    label: "Queue Workflow (Mask)",
    icon: qm
  },
  {
    id: "restore_full_workflow",
    label: "Restore Full Workflow",
    icon: Km
  },
  { id: "edit_tags", label: "Edit Tags", icon: Jm },
  { id: "edit_notes", label: "Edit Notes", icon: ef },
  {
    id: "edit_source_image",
    label: "Edit Source Image",
    icon: Zm
  },
  {
    id: "restore_image",
    label: "Restore Image (Trash)",
    icon: tf
  },
  { id: "delete_or_trash", label: "Delete / Trash", icon: qt }
], rv = ({
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
    /* @__PURE__ */ l.jsx(Y, { label: "Show Model", description: "Display the model name on the card.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
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
    /* @__PURE__ */ l.jsx(Y, { label: "Show Positive", description: "Display the positive prompt on the card.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
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
    /* @__PURE__ */ l.jsx(Y, { label: "Show Negative", description: "Display the negative prompt on the card.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
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
    /* @__PURE__ */ l.jsx(Y, { label: "Show User Notes", description: "Display user notes on the card.", children: /* @__PURE__ */ l.jsxs(
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
    /* @__PURE__ */ l.jsx(Y, { label: "Show Tags", description: "Display tags on the card.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
            children: nf.map((d) => /* @__PURE__ */ l.jsx("option", { value: d.id, children: d.label }, d.id))
          }
        )
      },
      c
    ))
  ] })
] }), lv = () => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-list meld-information-tab", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "ComfyUI Meld" }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item", children: /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item__info", children: [
      /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__label", children: "Version" }),
      /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__description", children: "1.0.0" })
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
] }), sv = ({
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
        Y,
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
                t((w) => ({
                  ...w,
                  [c]: h.target.value
                }));
              },
              onBlur: () => {
                const h = s(e[c] || "");
                r((w) => ({
                  ...w,
                  [c]: !h
                }));
              }
            }
          )
        },
        c
      )),
      /* @__PURE__ */ l.jsx(
        Y,
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
      Y,
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
}, av = ({
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
  suggestPhashThresholdInput: h,
  databases: w,
  activeDatabaseName: y,
  databaseNameInput: S,
  setDatabaseNameInput: x,
  getRenameDraftForDatabase: k,
  setRenameDraftForDatabase: b,
  isDatabaseLoading: m,
  handleCreateDatabase: f,
  handleRenameDatabase: u,
  handleSwitchDatabase: g,
  handleDeleteDatabase: _
}) => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Image Matching" }),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Source Matching Strategy",
        description: "Algorithm used to identify the source image.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["gallery.matching_strategy"],
            onChange: (v) => s((C) => ({
              ...C,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Database" }),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Create Database",
        description: "Create a new empty database file. Creation uses a confirmation modal.",
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-inline-actions", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "text",
              className: "meld-input",
              value: S,
              onChange: (v) => x(v.target.value),
              placeholder: "database_name",
              disabled: m,
              "aria-label": "Database name"
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-button meld-button--secondary",
              onClick: f,
              disabled: m || S.trim().length === 0,
              children: "Create"
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-database-list", role: "list", "aria-label": "Database list", children: w.map((v) => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-database-card", role: "listitem", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-database-card__info", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-database-card__title-row", children: [
          /* @__PURE__ */ l.jsx("span", { className: "meld-settings-database-card__title", children: v.name }),
          v.is_active && /* @__PURE__ */ l.jsx("span", { className: "meld-settings-database-card__badge", children: "Active" })
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-database-card__meta", children: [
          /* @__PURE__ */ l.jsx("span", { children: v.filename }),
          /* @__PURE__ */ l.jsxs("span", { children: [
            v.image_count,
            " images"
          ] }),
          y === v.name && /* @__PURE__ */ l.jsx("span", { children: "Currently loaded" })
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-database-card__actions", children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "text",
            className: "meld-input meld-settings-database-card__rename-input",
            value: k(v.name),
            onChange: (C) => b(v.name, C.target.value),
            placeholder: "new_database_name",
            disabled: m,
            "aria-label": `Rename ${v.name}`
          }
        ),
        /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "button",
            className: "meld-button meld-button--secondary",
            onClick: () => u(v),
            disabled: m || k(v.name).trim().length === 0 || k(v.name).trim() === v.name,
            children: "Rename"
          }
        ),
        /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "button",
            className: "meld-button meld-button--secondary",
            onClick: () => g(v),
            disabled: m || v.is_active,
            children: "Switch"
          }
        ),
        /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "button",
            className: "meld-btn meld-btn--danger",
            onClick: () => _(v),
            disabled: m || !v.can_delete,
            children: "Delete"
          }
        )
      ] })
    ] }, v.name)) })
  ] }),
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Thumbnail Cache" }),
    /* @__PURE__ */ l.jsx(
      Y,
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
      Y,
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
      Y,
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
] }), ov = ({
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
    /* @__PURE__ */ l.jsx(Y, { label: "Delete Mode", description: "Choose how images are deleted in view mode.", children: /* @__PURE__ */ l.jsxs(
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
      Y,
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
      Y,
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
    /* @__PURE__ */ l.jsx(Y, { label: "Show Dimensions", description: "Display dimensions in the details panel.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
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
      Y,
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
      Y,
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
    /* @__PURE__ */ l.jsx(Y, { label: "Show Model", description: "Display model name in the details panel.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
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
      Y,
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
      Y,
      {
        label: "Show Core Prompt",
        description: "Display a subset of keywords from the positive prompt based on rarity (bottom analytics counts).",
        labelId: "viewer-details-show-core-prompt-label",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Core Prompt Keyword Count",
        description: "Number of rarity keywords to display.",
        labelId: "viewer-details-core-prompt-count-label",
        children: /* @__PURE__ */ l.jsx(
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
            onBlur: () => s({
              key: "viewer.details.core_prompt_count"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
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
      Y,
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
    /* @__PURE__ */ l.jsx(Y, { label: "Show User Notes", description: "Display user notes in the details panel.", children: /* @__PURE__ */ l.jsxs(
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
      Y,
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
    /* @__PURE__ */ l.jsx(Y, { label: "Show Tags", description: "Display tags in the details panel.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
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
] }), rf = () => {
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
    handleViewTrash: w,
    handleClearThumbnailCache: y,
    validateShortcut: S,
    // Input states
    initialLoadCountInput: x,
    maxLoadCountInput: k,
    lineageMaxDepthInput: b,
    thumbnailWindowSizeInput: m,
    trashRetentionDaysInput: f,
    autoLinkPhashThresholdInput: u,
    suggestPhashThresholdInput: g,
    maxPositivePromptLinesInput: _,
    maxNegativePromptLinesInput: v,
    fullscreenMaxPositivePromptLinesInput: C,
    fullscreenMaxNegativePromptLinesInput: I,
    viewerCorePromptCountInput: D,
    fullscreenCorePromptCountInput: N,
    thumbnailSizeInput: L,
    databases: $,
    activeDatabaseName: H,
    databaseNameInput: E,
    setDatabaseNameInput: O,
    getRenameDraftForDatabase: M,
    setRenameDraftForDatabase: U,
    isLoading: j,
    submitCreateDatabase: T,
    confirmRenameDatabase: z,
    confirmSwitchDatabase: W,
    confirmDeleteDatabase: A
  } = tv();
  Te({ onEscape: o });
  const R = p.useRef(!1), P = (B) => {
    B.target === B.currentTarget && (R.current = !0);
  }, Z = (B) => {
    B.target === B.currentTarget && R.current && o(), R.current = !1;
  }, J = [
    { id: "Gallery", label: "Gallery" },
    { id: "View", label: "View" },
    { id: "Full Screen", label: "Full Screen" },
    { id: "Shortcuts", label: "Shortcuts" },
    { id: "System", label: "System" },
    { id: "Information", label: "Information" }
  ], oe = (B) => B.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""), me = (B, ae) => {
    if (B.key === "ArrowDown" || B.key === "ArrowRight") {
      B.preventDefault();
      const K = J[(ae + 1) % J.length];
      K && t(K.id);
    } else if (B.key === "ArrowUp" || B.key === "ArrowLeft") {
      B.preventDefault();
      const K = J[(ae - 1 + J.length) % J.length];
      K && t(K.id);
    }
  }, we = () => {
    switch (e) {
      case "System":
        return /* @__PURE__ */ l.jsx(
          av,
          {
            localSettings: n,
            handleNumberChange: c,
            handleNumberBlur: d,
            handleToggle: i,
            setLocalSettings: r,
            handleViewTrash: w,
            handleClearThumbnailCache: y,
            lineageMaxDepthInput: b,
            trashRetentionDaysInput: f,
            autoLinkPhashThresholdInput: u,
            suggestPhashThresholdInput: g,
            databases: $,
            activeDatabaseName: H,
            databaseNameInput: E,
            setDatabaseNameInput: O,
            getRenameDraftForDatabase: M,
            setRenameDraftForDatabase: U,
            isDatabaseLoading: j,
            handleCreateDatabase: T,
            handleRenameDatabase: z,
            handleSwitchDatabase: W,
            handleDeleteDatabase: A
          }
        );
      case "Gallery":
        return /* @__PURE__ */ l.jsx(
          rv,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailSizeInput: L,
            initialLoadCountInput: x,
            maxLoadCountInput: k
          }
        );
      case "View":
        return /* @__PURE__ */ l.jsx(
          ov,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailWindowSizeInput: m,
            maxPositivePromptLinesInput: _,
            maxNegativePromptLinesInput: v,
            viewerCorePromptCountInput: D
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ l.jsx(
          nv,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            maxPositivePromptLinesInput: C,
            maxNegativePromptLinesInput: I,
            fullscreenCorePromptCountInput: N
          }
        );
      case "Shortcuts":
        return /* @__PURE__ */ l.jsx(
          sv,
          {
            localSettings: n,
            setLocalSettings: r,
            shortcutErrors: s,
            setShortcutErrors: a,
            validateShortcut: S,
            handleToggle: i,
            handleResetShortcuts: h
          }
        );
      case "Information":
        return /* @__PURE__ */ l.jsx(lv, {});
      default:
        return null;
    }
  };
  return ye.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: P,
        onMouseUp: Z,
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content meld-settings-modal", onClick: (B) => B.stopPropagation(), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ l.jsx("h2", { children: "Settings" }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: o,
                "aria-label": "Close",
                children: /* @__PURE__ */ l.jsx(he, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-layout", children: [
            /* @__PURE__ */ l.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ l.jsx("div", { className: "meld-tabs", role: "tablist", children: J.map((B, ae) => /* @__PURE__ */ l.jsx(
              "button",
              {
                id: `meld-settings-tab-${oe(B.id)}`,
                type: "button",
                role: "tab",
                "aria-selected": e === B.id,
                tabIndex: e === B.id ? 0 : -1,
                "aria-controls": `meld-settings-tabpanel-${oe(B.id)}`,
                className: `meld-tab ${e === B.id ? "active" : ""}`,
                onClick: () => t(B.id),
                onKeyDown: (K) => me(K, ae),
                children: B.label
              },
              B.id
            )) }) }),
            /* @__PURE__ */ l.jsx(
              "div",
              {
                className: "meld-modal-body",
                role: "tabpanel",
                id: `meld-settings-tabpanel-${oe(e)}`,
                "aria-labelledby": `meld-settings-tab-${oe(e)}`,
                children: we()
              }
            )
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, It = "none", fl = (e) => {
  e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
}, et = (e) => {
  e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation();
}, iv = () => {
  const e = document.activeElement;
  if (!(e instanceof HTMLElement))
    return !1;
  const t = e.tagName;
  return t === "INPUT" || t === "TEXTAREA" || !!e.isContentEditable;
}, lf = ({
  imageIds: e,
  initialTags: t,
  onClose: n,
  onSuccess: r
}) => {
  const { dispatch: s, refreshImages: a } = fe(), [o, i] = p.useState([]), [c, d] = p.useState(t), [h, w] = p.useState(""), [y, S] = p.useState(!0), [x, k] = p.useState(!1), b = p.useRef(null), m = e.length > 1, f = p.useRef(!1), u = (N) => {
    N.target === N.currentTarget && (f.current = !0);
  }, g = (N) => {
    N.target === N.currentTarget && f.current && n(), f.current = !1;
  };
  p.useEffect(() => {
    let N = !0;
    return (async () => {
      S(!0);
      try {
        const $ = await _i();
        N && i($ || []);
      } catch ($) {
        N && F.error("Failed to fetch tags:", $);
      } finally {
        N && S(!1);
      }
    })(), () => {
      N = !1;
    };
  }, []), p.useEffect(() => {
    b.current && b.current.focus();
  }, []), Te({ onEscape: n });
  const _ = p.useMemo(() => o.filter(
    (N) => N.name.toLowerCase().includes(h.toLowerCase()) && !c.includes(N.name)
  ), [o, h, c]), v = (N) => {
    const L = N.trim();
    if (L.toLowerCase() === It) {
      alert(`Tag name '${It}' is reserved for search and cannot be used.`);
      return;
    }
    L && !c.includes(L) && (d([...c, L]), w(""));
  }, C = (N) => {
    d(c.filter((L) => L !== N));
  }, I = async () => {
    k(!0);
    try {
      if (m) {
        const N = c.filter(($) => !t.includes($)), L = t.filter(($) => !c.includes($));
        await Tm(e, N, L);
      } else {
        const N = e[0];
        if (N === void 0)
          throw new Error("No image selected");
        await Hg(N, c);
      }
      await a(), s({ type: "CLEAR_SELECTION" }), r == null || r(), n();
    } catch (N) {
      F.error("Failed to update tags:", N), alert("Failed to update tags.");
    } finally {
      k(!1);
    }
  }, D = (N) => {
    N.key === "Enter" && h.trim() && (et(N), v(h.trim()));
  };
  return ye.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: u,
        onMouseUp: g,
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (N) => N.stopPropagation(), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ l.jsx(_r, { size: 18 }),
              /* @__PURE__ */ l.jsx("h3", { style: { margin: 0 }, children: m ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ l.jsx(he, { size: 20 }) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-body", children: [
            m && /* @__PURE__ */ l.jsx(
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
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-edit-label", children: m ? "Collective Tags" : "Selected Tags" }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-edit-selected", children: c.length === 0 ? /* @__PURE__ */ l.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : c.map((N) => /* @__PURE__ */ l.jsxs("span", { className: "meld-tag-edit-badge", children: [
                N,
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => C(N),
                    children: /* @__PURE__ */ l.jsx(he, { size: 12 })
                  }
                )
              ] }, N)) })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ l.jsx(vn, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ l.jsx(
                  "input",
                  {
                    ref: b,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: h,
                    onChange: (N) => w(N.target.value),
                    onKeyDown: D
                  }
                ),
                h.trim() && !c.includes(h.trim()) && /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => v(h),
                    children: [
                      /* @__PURE__ */ l.jsx(Qs, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions", children: y ? /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : _.length === 0 ? h ? /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : _.map((N) => /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => v(N.name),
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
                onClick: I,
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
}, Hs = (e, t) => {
  const n = p.useCallback(async (k) => vo(k), []), r = p.useCallback(
    async (k, b, m) => {
      await Tm(k, b, m);
    },
    []
  ), s = p.useCallback(async (k) => {
    try {
      const b = await Gg(k.id);
      return b.workflow ? (await window.app.loadGraphData(b.workflow), F.log("Workflow restored successfully from Meld"), !0) : (alert("No workflow information is saved for this image."), !1);
    } catch (b) {
      return F.error("Error restoring workflow:", b), alert("Failed to restore workflow."), !1;
    }
  }, []), a = p.useCallback(async (k) => {
    try {
      const b = await qg(k.id), m = b.is_flux ? "MeldUnifiedFluxLoader" : "MeldUnifiedLoader", f = window.app, u = window.LiteGraph;
      if (!f.graph || !f.canvas || !u)
        return alert("ComfyUI graph is not ready. Please open a workflow first."), !1;
      const g = u.createNode(m);
      if (!g)
        return F.error(`Node type ${m} not found.`), alert(
          `Node type ${m} not found. Please make sure the Meld Unified Loader node is installed.`
        ), !1;
      const _ = b.is_flux ? {
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
      if (g.widgets) {
        for (const [D, N] of Object.entries(_)) {
          const L = b[D];
          if (L != null && L !== "") {
            const $ = g.widgets.find((H) => H.name === N);
            $ && ($.value = L);
          }
        }
        const I = g.widgets.find((D) => D.name === "control_after_generate");
        I && (I.value = "fixed");
      }
      const v = f.canvas.ds.offset, C = f.canvas.ds.scale;
      return g.pos = [(-v[0] + 400) / C, (-v[1] + 300) / C], f.graph.add(g), f.canvas.selectNode(g), f.canvas.centerOnNode(g), !0;
    } catch (b) {
      return F.error("Error adding Unified Loader:", b), alert("Failed to load settings."), !1;
    }
  }, []), o = p.useCallback(
    (k) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "tag_edit",
          imageIds: [k.id],
          tags: k.tags || []
        }
      });
    },
    [t]
  ), i = p.useCallback(
    (k) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "note_edit",
          imageId: k.id,
          notes: k.user_notes || ""
        }
      });
    },
    [t]
  ), c = p.useCallback(
    (k) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: k.id }
      });
    },
    [t]
  ), d = p.useCallback(
    (k) => {
      const b = window.app;
      if (!(b != null && b.graph))
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No active workflow graph found. Please open a workflow first."
          }
        }), !1;
      const m = b.graph._nodes.filter((u) => ir(u.type));
      if (m.length === 0)
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
          }
        }), !1;
      if (m.length > 1)
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "node_selection",
            image: k,
            nodes: m.map((u) => ({
              id: String(u.id),
              type: u.type ?? "",
              title: u.title
            })),
            onSelect: (u) => {
              ml(k, u);
            }
          }
        }), !0;
      const f = ml(k);
      return f.ok ? !0 : (t({
        type: "OPEN_MODAL",
        payload: {
          type: "error",
          message: f.reason === "no_app_graph" ? "No active workflow graph found. Please open a workflow first." : f.reason === "no_widgets" || f.reason === "no_image_widget" ? "The selected loader node does not expose an image widget." : "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
        }
      }), !1);
    },
    [t]
  ), h = p.useCallback(
    (k) => {
      const b = Array.isArray(k) ? k : [k];
      t({
        type: "OPEN_MODAL",
        payload: { type: "workflow_selection", images: b }
      });
    },
    [t]
  ), w = p.useCallback(
    async (k, b = "run") => {
      var f;
      F.log("handleRunWithMask called", k, b);
      const m = Array.isArray(k) ? k : [k];
      if (b === "apply") {
        const u = window.app, g = ((f = u == null ? void 0 : u.graph) == null ? void 0 : f._nodes) || [];
        F.log(
          "Current graph nodes:",
          g.map((I) => ({
            id: I.id,
            type: I.type ?? ""
          }))
        );
        const _ = g.some((I) => Hr(I.type)), v = g.some((I) => ir(I.type));
        if (F.log("Nodes found:", { hasMaskNode: _, hasLoaderNode: v }), !_ || !v) {
          const I = [];
          v || I.push("'Meld Image Loader'"), _ || I.push("'Load Image (as Mask)'"), t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: `Required nodes missing in current workflow: ${I.join(" and ")}. Please add them to use the Mask Tool.`
            }
          });
          return;
        }
        if (m.length > 1) {
          t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: "'Apply' mode without queueing only supports single image selection."
            }
          });
          return;
        }
        const C = m[0];
        if (!C) {
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
          payload: { type: "mask_editor", imageId: C.id, mode: b }
        });
        return;
      }
      try {
        if (!(await Fm()).some((_) => _.valid && _.mask_count >= 1)) {
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
        F.error("[Meld] Error checking workflows:", u);
      }
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "workflow_selection",
          images: m,
          isMaskSequence: !0
        }
      });
    },
    [t]
  ), y = p.useCallback(
    async (k, b) => {
      try {
        const m = k.id, u = (await vo([m])).restored_ids || [m];
        t({ type: "REMOVE_IMAGES", payload: u }), b == null || b();
      } catch (m) {
        t({
          type: "SET_ERROR",
          payload: m instanceof Error ? m.message : String(m)
        });
      }
    },
    [t]
  ), S = p.useCallback(
    (k) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "delete_confirm",
          imageIds: [k.id],
          hasLineage: !!(k.parent_id || k.has_children),
          isPermanent: e.viewScope === "trash"
        }
      });
    },
    [e.viewScope, t]
  ), x = p.useCallback(
    async (k, b) => {
      try {
        const m = await Kg(k, b);
        t({ type: "UPDATE_IMAGE", payload: m });
      } catch (m) {
        t({
          type: "SET_ERROR",
          payload: m instanceof Error ? m.message : String(m)
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
    handleRunWithMask: w,
    handleRestore: y,
    handleDelete: S,
    handleEditNotes: i,
    handleUpdateUserNotes: x
  };
}, sf = ({ imageId: e, initialNotes: t, onClose: n }) => {
  const { state: r, dispatch: s } = fe(), { handleUpdateUserNotes: a } = Hs(r, s), [o, i] = p.useState(t), [c, d] = p.useState(!1), h = p.useRef(null), w = p.useRef(!1), y = (k) => {
    k.target === k.currentTarget && (w.current = !0);
  }, S = (k) => {
    k.target === k.currentTarget && w.current && n(), w.current = !1;
  };
  p.useEffect(() => {
    h.current && h.current.focus();
  }, []);
  const x = p.useCallback(async () => {
    d(!0);
    try {
      await a(e, o), n();
    } catch (k) {
      F.error("Failed to update notes:", k), alert("Failed to update notes.");
    } finally {
      d(!1);
    }
  }, [a, e, o, n]);
  return p.useEffect(() => {
    const k = (b) => {
      b.key === "Enter" && (b.ctrlKey || b.metaKey) && b.target === h.current && (b.preventDefault(), b.stopPropagation(), b.stopImmediatePropagation(), x());
    };
    return window.addEventListener("keydown", k, { capture: !0 }), () => {
      window.removeEventListener("keydown", k, {
        capture: !0
      });
    };
  }, [x]), Te({ onEscape: n }), ye.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: y,
        onMouseUp: S,
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (k) => k.stopPropagation(), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ l.jsx(Tg, { size: 18 }),
              /* @__PURE__ */ l.jsx("h3", { style: { margin: 0 }, children: "Edit Notes" })
            ] }),
            /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, "aria-label": "Close", children: /* @__PURE__ */ l.jsx(he, { size: 20 }) })
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
                onChange: (k) => i(k.target.value)
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
}, af = ({
  image: e,
  nodes: t,
  onSelect: n
}) => {
  const { dispatch: r } = fe(), s = p.useCallback(() => {
    r({ type: "CLOSE_MODAL" });
  }, [r]);
  Te({ onEscape: s });
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
                    children: /* @__PURE__ */ l.jsx(he, { size: 20, "aria-hidden": !0 })
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
                      /* @__PURE__ */ l.jsx(ul, { size: 12 })
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
}, of = ({
  images: e,
  onExecute: t,
  onSuccess: n,
  isMaskMode: r
}) => {
  var O;
  const { dispatch: s } = fe(), [a, o] = p.useState([]), [i, c] = p.useState(!0), [d, h] = p.useState(null), [w, y] = p.useState(!1), [S, x] = p.useState(null), [k, b] = p.useState({}), [m, f] = p.useState({}), [u, g] = p.useState(""), _ = p.useRef(null), v = p.useMemo(() => a.map((M) => {
    let U = M.valid, j = M.reason;
    return r && M.mask_count === 0 && (U = !1, j = "No 'Load Image (as Mask)' node found."), { ...M, valid: U, reason: j };
  }).sort((M, U) => M.valid !== U.valid ? M.valid ? -1 : 1 : M.name.localeCompare(U.name)), [a, r]), C = p.useMemo(() => {
    if (!u.trim()) return v;
    const M = u.toLowerCase();
    return v.filter((U) => U.name.toLowerCase().includes(M));
  }, [v, u]);
  p.useEffect(() => {
    let M = !0;
    return (async () => {
      try {
        c(!0);
        const j = await Fm();
        M && (o(j), h(null));
      } catch (j) {
        M && h(j instanceof Error ? j.message : String(j));
      } finally {
        M && c(!1);
      }
    })(), () => {
      M = !1;
    };
  }, []), p.useEffect(() => {
    !i && _.current && _.current.focus();
  }, [i]);
  const I = p.useCallback(() => {
    s({ type: "CLOSE_MODAL" });
  }, [s]);
  Te({ onEscape: I });
  const D = p.useRef(!1), N = p.useCallback((M) => {
    M.target === M.currentTarget && (D.current = !0);
  }, []), L = p.useCallback(
    (M) => {
      M.target === M.currentTarget && D.current && I(), D.current = !1;
    },
    [I]
  ), $ = async (M, U) => {
    if (!w)
      try {
        y(!0);
        const j = await t(M, U);
        n == null || n(), j !== !1 && I();
      } catch (j) {
        h(j instanceof Error ? j.message : String(j));
      } finally {
        y(!1);
      }
  }, H = async (M) => {
    if (!(k[M] || m[M]))
      try {
        f((z) => ({ ...z, [M]: !0 }));
        const U = await $m(M), j = [], T = (z) => {
          if (!z) return !1;
          const W = z.replace(/\s+/g, "").toLowerCase();
          return r ? W === "loadimagemask" : W === "meldimageloader" || W === "loadimage";
        };
        if (U.nodes && Array.isArray(U.nodes)) {
          F.log("Extracting nodes from UI format workflow", U.nodes.length);
          for (const z of U.nodes)
            T(z.type) && (F.log("Found target node (UI):", z.id, z.type, z.title), j.push({
              id: String(z.id),
              type: z.type || "",
              title: z.title
            }));
        } else {
          F.log("Extracting nodes from API format workflow");
          for (const z in U) {
            const W = U[z];
            W && typeof W == "object" && T(W.class_type) && (F.log("Found target node (API):", z, W.class_type), j.push({
              id: z,
              type: W.class_type || ""
            }));
          }
        }
        j.length === 0 && F.warn("No loader nodes found in workflow JSON despite count > 0"), b((z) => ({ ...z, [M]: j }));
      } catch (U) {
        F.error("Failed to fetch workflow nodes:", U);
      } finally {
        f((U) => ({ ...U, [M]: !1 }));
      }
  }, E = (M) => {
    if (!M.valid || w) return;
    if ((r ? M.mask_count : M.loader_count + M.load_image_count) <= 1) {
      $(M.name);
      return;
    }
    S === M.name ? x(null) : (x(M.name), H(M.name));
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
                /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-modal-close", onClick: I, children: /* @__PURE__ */ l.jsx(he, { size: 20 }) })
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", style: { minHeight: "300px" }, children: i ? /* @__PURE__ */ l.jsxs("div", { className: "meld-loading-container", children: [
                /* @__PURE__ */ l.jsx("div", { className: "meld-loading-spinner" }),
                /* @__PURE__ */ l.jsx("span", { children: "Loading workflows..." })
              ] }) : d ? /* @__PURE__ */ l.jsxs("div", { className: "meld-error-container", children: [
                /* @__PURE__ */ l.jsx(xm, { size: 20 }),
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
                      /* @__PURE__ */ l.jsx("strong", { children: e.length > 1 ? `${e.length} images` : (O = e[0]) == null ? void 0 : O.filename }),
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
                  /* @__PURE__ */ l.jsx(vn, { className: "meld-tag-search-icon", size: 16 }),
                  /* @__PURE__ */ l.jsx(
                    "input",
                    {
                      ref: _,
                      type: "text",
                      className: "meld-tag-search-input",
                      placeholder: "Search workflows...",
                      value: u,
                      onChange: (M) => g(M.target.value)
                    }
                  ),
                  u && /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-tag-item__btn",
                      onClick: () => {
                        var M;
                        g(""), (M = _.current) == null || M.focus();
                      },
                      style: { padding: "4px" },
                      children: /* @__PURE__ */ l.jsx(he, { size: 14 })
                    }
                  )
                ] }),
                C.length === 0 ? /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    style: {
                      padding: "20px",
                      textAlign: "center",
                      color: "var(--meld-text-secondary)"
                    },
                    children: "No workflows match your search."
                  }
                ) : C.map((M) => {
                  const U = r ? M.mask_count : M.loader_count + M.load_image_count, j = S === M.name, T = k[M.name] || [], z = m[M.name];
                  return /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-item-container", children: [
                    /* @__PURE__ */ l.jsxs(
                      "div",
                      {
                        className: `meld-workflow-item ${M.valid ? "" : "meld-workflow-item--invalid"} ${j ? "meld-workflow-item--expanded" : ""}`,
                        onClick: () => E(M),
                        title: M.reason || "Click to select",
                        children: [
                          /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-item__info", children: [
                            /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-item__name", children: M.name }),
                            !M.valid && /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-item__reason", children: M.reason }),
                            M.valid && /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-item__supports", children: U > 1 ? `Multiple loaders found (${U})` : r ? "Supports: Load Image (as Mask)" : `Supports: ${M.loader_count > 0 ? "Meld Loader" : "Load Image"}` })
                          ] }),
                          M.valid && U <= 1 && /* @__PURE__ */ l.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn--primary meld-btn-small",
                              disabled: w,
                              onClick: (W) => {
                                W.stopPropagation(), $(M.name);
                              },
                              children: [
                                /* @__PURE__ */ l.jsx(ul, { size: 14 }),
                                w ? "Queuing..." : "Queue"
                              ]
                            }
                          ),
                          M.valid && U > 1 && /* @__PURE__ */ l.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn--primary meld-btn-small",
                              disabled: w,
                              onClick: (W) => {
                                W.stopPropagation(), E(M);
                              },
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                              },
                              children: [
                                j ? "Close" : "Select Node",
                                /* @__PURE__ */ l.jsx(
                                  gi,
                                  {
                                    size: 14,
                                    style: {
                                      transform: j ? "rotate(90deg)" : "rotate(0deg)",
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
                    j && /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker", children: z ? /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-node-picker__loading", children: [
                      /* @__PURE__ */ l.jsx("div", { className: "meld-loading-spinner meld-loading-spinner--small" }),
                      /* @__PURE__ */ l.jsx("span", { children: "Loading nodes..." })
                    ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                      /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker__label", children: "Select target loader node:" }),
                      /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker__list", children: T.map((W) => /* @__PURE__ */ l.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-workflow-node-item",
                          disabled: w,
                          onClick: () => $(M.name, W.id),
                          children: [
                            /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-node-item__info", children: [
                              /* @__PURE__ */ l.jsx("span", { className: "meld-workflow-node-item__title", children: W.title || W.type }),
                              /* @__PURE__ */ l.jsxs("span", { className: "meld-workflow-node-item__id", children: [
                                "#",
                                W.id
                              ] })
                            ] }),
                            /* @__PURE__ */ l.jsx(ul, { size: 12 })
                          ]
                        },
                        W.id
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
                  onClick: I,
                  disabled: w,
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
}, cv = ({
  title: e,
  message: t,
  details: n,
  confirmLabel: r = "OK",
  cancelLabel: s = "Cancel",
  danger: a = !1,
  requiredText: o,
  requiredTextLabel: i,
  onConfirm: c,
  onCancel: d
}) => {
  const h = p.useRef(null), w = p.useRef(null), [y, S] = p.useState(""), [x, k] = p.useState(!1);
  Te({ onEscape: x ? () => {
  } : d ?? (() => {
  }) }), p.useEffect(() => {
    if (w.current = document.activeElement, h.current) {
      const f = h.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      f.length > 0 ? f[0].focus() : h.current.focus();
    }
    const m = (f) => {
      if (f.key === "Tab") {
        if (!h.current) return;
        const u = h.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (u.length === 0) return;
        const g = u.item(0), _ = u.item(u.length - 1);
        if (!g || !_) return;
        f.shiftKey ? document.activeElement === g && (_.focus(), f.preventDefault()) : document.activeElement === _ && (g.focus(), f.preventDefault());
      }
    };
    return document.addEventListener("keydown", m, { capture: !0 }), () => {
      document.removeEventListener("keydown", m, { capture: !0 }), w.current && typeof w.current.focus == "function" && w.current.focus();
    };
  }, []);
  const b = x || !!o && y !== o;
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      className: "meld-confirm-modal__overlay",
      onClick: () => {
        x || d == null || d();
      },
      onKeyDown: (m) => {
        m.key === "Enter" && !x && (d == null || d());
      },
      role: "presentation",
      children: /* @__PURE__ */ l.jsxs(
        "div",
        {
          ref: h,
          className: "meld-confirm-modal__dialog",
          onClick: (m) => m.stopPropagation(),
          onKeyDown: (m) => m.stopPropagation(),
          role: "alertdialog",
          "aria-modal": "true",
          "aria-label": e || t,
          tabIndex: -1,
          children: [
            e && /* @__PURE__ */ l.jsx("h3", { className: "meld-confirm-modal__title", children: e }),
            /* @__PURE__ */ l.jsx("p", { className: "meld-confirm-modal__message", children: t }),
            n && n.length > 0 && /* @__PURE__ */ l.jsx("ul", { className: "meld-confirm-modal__details", children: n.map((m) => /* @__PURE__ */ l.jsx("li", { children: m }, m)) }),
            o && /* @__PURE__ */ l.jsxs("div", { className: "meld-confirm-modal__input-group", children: [
              /* @__PURE__ */ l.jsx("label", { className: "meld-confirm-modal__input-label", htmlFor: "meld-confirm-modal-input", children: i || `Type "${o}" to confirm.` }),
              /* @__PURE__ */ l.jsx(
                "input",
                {
                  id: "meld-confirm-modal-input",
                  type: "text",
                  className: "meld-confirm-modal__input",
                  value: y,
                  onChange: (m) => S(m.target.value),
                  autoComplete: "off",
                  autoCapitalize: "off",
                  spellCheck: !1,
                  disabled: x
                }
              )
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "meld-confirm-modal__actions", children: [
              /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-confirm-modal__btn meld-confirm-modal__btn--cancel",
                  onClick: () => d == null ? void 0 : d(),
                  disabled: x,
                  children: s
                }
              ),
              /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-confirm-modal__btn meld-confirm-modal__btn--confirm${a ? " meld-confirm-modal__btn--danger" : ""}`,
                  onClick: async () => {
                    if (!b) {
                      k(!0);
                      try {
                        await Promise.resolve(c(y));
                      } catch {
                      } finally {
                        k(!1);
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
}, _o = async (e, t) => {
  await Bg(e, t), se.getState().removeImages(e);
}, cf = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: s, dispatch: a } = fe(), o = p.useRef(!0);
  p.useEffect(() => () => {
    o.current = !1;
  }, []);
  const i = p.useMemo(
    () => s.searchQuery.toLowerCase().includes("has_derivatives:yes") || s.searchQuery.toLowerCase().includes("has_derivatives:true") || s.searchQuery.toLowerCase().includes("has_derivatives:1"),
    [s.searchQuery]
  ), c = p.useMemo(() => s.searchQuery.trim() !== "", [s.searchQuery]), d = se((u) => u.buckets), h = p.useMemo(() => s.viewerMode === "lighttable" && s.viewerLightTableSlotId ? (d[s.viewerLightTableSlotId] || []).map((g) => {
    const _ = Number.parseInt(g, 10);
    return s.images.find((v) => v.id === _) || s.lineageImages.find((v) => v.id === _) || null;
  }).filter((g) => g !== null) : s.viewerMode === "lineage" && s.lineageImages.length > 0 ? s.lineageImages : s.images.filter(
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
  ]), w = p.useRef(s.viewerImageId);
  p.useEffect(() => {
    w.current = s.viewerImageId;
  }, [s.viewerImageId]);
  const y = p.useCallback(() => {
    a({ type: "CLOSE_MODAL" });
  }, [a]);
  Te({ onEscape: y });
  const S = p.useRef(!1), x = p.useCallback((u) => {
    u.target === u.currentTarget && (S.current = !0);
  }, []), k = p.useCallback(
    (u) => {
      u.target === u.currentTarget && S.current && y(), S.current = !1;
    },
    [y]
  ), b = p.useCallback(
    (u) => {
      if (!o.current) return;
      const g = w.current;
      if (g === null || !u.has(g))
        return;
      const _ = h.findIndex(
        (C) => C.id === g
      );
      if (_ === -1) return;
      let v = !1;
      for (let C = _ + 1; C < h.length; C++) {
        const I = h[C];
        if (I && !u.has(I.id)) {
          a({
            type: "OPEN_VIEWER",
            payload: {
              id: I.id,
              mode: s.viewerMode,
              // Preserve slotId in lighttable mode to stay within the slot
              ...s.viewerMode === "lighttable" && s.viewerLightTableSlotId ? { slotId: s.viewerLightTableSlotId } : {}
            }
          }), v = !0;
          break;
        }
      }
      if (!v)
        for (let C = _ - 1; C >= 0; C--) {
          const I = h[C];
          if (I && !u.has(I.id)) {
            a({
              type: "OPEN_VIEWER",
              payload: {
                id: I.id,
                mode: s.viewerMode,
                // Preserve slotId in lighttable mode to stay within the slot
                ...s.viewerMode === "lighttable" && s.viewerLightTableSlotId ? { slotId: s.viewerLightTableSlotId } : {}
              }
            }), v = !0;
            break;
          }
        }
      v || a({ type: "CLOSE_VIEWER" });
    },
    [s.viewerMode, s.viewerLightTableSlotId, h, a]
  ), m = async () => {
    var u, g;
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const _ = new Set(e), v = h.filter((C) => _.has(C.id));
      if (b(_), await _o(e, n), !o.current) return;
      s.activeModal.type === "delete_confirm" && ((g = (u = s.activeModal).onSuccess) == null || g.call(u)), !n && r && r(v), a({ type: "REMOVE_IMAGES", payload: e }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (_) {
      a({
        type: "SET_ERROR",
        payload: _ instanceof Error ? _.message : String(_)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  }, f = async () => {
    var u, g;
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const _ = new Set(e);
      for (const C of e) {
        const I = await wi(C);
        if (!o.current) return;
        for (const D of I)
          _.add(D.id);
      }
      const v = h.filter((C) => _.has(C.id));
      if (b(_), await _o(Array.from(_), n), !o.current) return;
      s.activeModal.type === "delete_confirm" && ((g = (u = s.activeModal).onSuccess) == null || g.call(u)), !n && r && r(v), a({
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
        onMouseDown: x,
        onMouseUp: k,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--small",
            onClick: (u) => u.stopPropagation(),
            children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ l.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ l.jsx(qt, { size: 20, color: "var(--meld-danger-color)" }),
                  n ? "Permanent Deletion" : "Move to Trash"
                ] }),
                /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-modal-close", onClick: y, children: /* @__PURE__ */ l.jsx(he, { size: 20 }) })
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
                            og,
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
                /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-btn meld-btn--secondary", onClick: y, children: "Cancel" }),
                /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn--danger",
                      onClick: m,
                      children: n ? "Delete Permanently" : "Move to Trash"
                    }
                  ),
                  t && /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn--danger",
                      title: n ? "Permanently delete all images in the lineage" : "Move all images in the lineage to trash",
                      onClick: f,
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
}, df = ({ message: e }) => {
  const { dispatch: t } = fe(), n = p.useCallback(() => {
    t({ type: "CLOSE_MODAL" });
  }, [t]);
  return Te({ onEscape: n }), /* @__PURE__ */ l.jsx("div", { className: "meld-modal-overlay", onClick: n, children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (r) => r.stopPropagation(), children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
      /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ l.jsx(xm, { size: 20, color: "var(--meld-danger-color)" }),
        /* @__PURE__ */ l.jsx("h2", { children: "Error" })
      ] }),
      /* @__PURE__ */ l.jsx("button", { className: "meld-modal-close", onClick: n, type: "button", children: /* @__PURE__ */ l.jsx(he, { size: 20 }) })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ l.jsx("div", { style: { padding: "20px 0", textAlign: "center", fontSize: "14px" }, children: e }) }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ l.jsx("button", { className: "meld-btn meld-btn--primary", onClick: n, type: "button", children: "OK" }) })
  ] }) });
}, uf = ({ imageId: e }) => {
  const { state: t, dispatch: n, refreshImages: r } = fe(), [s, a] = p.useState([]), [o, i] = p.useState(!0), [c, d] = p.useState(!1), h = p.useCallback(() => {
    n({ type: "CLOSE_MODAL" });
  }, [n]);
  Te({ onEscape: h });
  const w = p.useRef(!1), y = (v) => {
    v.target === v.currentTarget && (w.current = !0);
  }, S = (v) => {
    v.target === v.currentTarget && w.current && h(), w.current = !1;
  }, x = t.images.find((v) => v.id === e), k = p.useCallback(
    async (v) => {
      i(!0);
      try {
        const C = t.settings["gallery.suggest_phash_threshold"], I = await Qg(e, C, v);
        v.aborted || a(I);
      } catch (C) {
        v.aborted || F.error("Failed to load suggestions:", C);
      } finally {
        v.aborted || i(!1);
      }
    },
    [e, t.settings]
  );
  p.useEffect(() => {
    const v = new AbortController();
    return k(v.signal), () => v.abort();
  }, [k]);
  const b = async (v) => {
    if (v == null) {
      F.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!x || v === x.parent_id) && !(x.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await Oc(e, v), await Im(e), await r(), h();
      } catch (C) {
        F.error("Failed to link parent:", C);
      }
  }, m = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await Oc(e, null), await r(), h();
      } catch (v) {
        F.error("Failed to remove source:", v), alert("Failed to remove source image.");
      }
  }, f = async (v) => {
    i(!0);
    try {
      const C = await ky(v), { id: I } = await Mm({
        filename: C.name,
        subfolder: C.subfolder || "",
        type: C.type || "input"
      });
      if (I === e) {
        alert("Uploaded image is identical to the current image. Cannot set as source.");
        return;
      }
      await b(I);
    } catch (C) {
      F.error("Failed to upload/register image:", C);
    } finally {
      i(!1);
    }
  }, u = (v) => {
    v.preventDefault(), v.stopPropagation(), d(!1);
    const C = v.dataTransfer.files[0];
    C != null && C.type.startsWith("image/") && f(C);
  };
  if (!x) return null;
  const g = s.filter((v) => v.is_source_match), _ = s.filter((v) => !v.is_source_match);
  return ye.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: y,
        onMouseUp: S,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "meld-modal-content",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "parent-selection-modal-title",
            onClick: (v) => v.stopPropagation(),
            children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ l.jsxs("h2", { id: "parent-selection-modal-title", children: [
                  "Select Source for #",
                  x.id
                ] }),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: h,
                    "aria-label": "Close",
                    children: /* @__PURE__ */ l.jsx(he, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-body", children: [
                x.parent_id && /* @__PURE__ */ l.jsxs(
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
                            /* @__PURE__ */ l.jsx(Sg, { size: 16, color: "var(--meld-accent-color)" }),
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
                                        x.parent_filename && /* @__PURE__ */ l.jsx(
                                          "img",
                                          {
                                            src: wt(
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
                                                  children: x.parent_filename || "Unknown Image"
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
                          onClick: m,
                          title: "Remove Source",
                          children: /* @__PURE__ */ l.jsx(bg, { size: 16 })
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "div",
                  {
                    className: `meld-drop-zone ${c ? "meld-drop-zone--active" : ""}`,
                    onDragEnter: (v) => {
                      v.preventDefault(), v.stopPropagation(), d(!0);
                    },
                    onDragOver: (v) => {
                      v.preventDefault(), v.stopPropagation(), v.dataTransfer.dropEffect = "copy", d(!0);
                    },
                    onDragLeave: (v) => {
                      v.preventDefault(), v.stopPropagation(), d(!1);
                    },
                    onDrop: u,
                    children: [
                      /* @__PURE__ */ l.jsx(Rg, { size: 32 }),
                      /* @__PURE__ */ l.jsx("p", { children: "Drop an image file here to set it as source" })
                    ]
                  }
                ),
                o ? /* @__PURE__ */ l.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ l.jsxs("div", { className: "meld-suggestions-container", children: [
                  g.length > 0 && /* @__PURE__ */ l.jsxs("section", { children: [
                    /* @__PURE__ */ l.jsx("h3", { children: "Source Matches (from metadata)" }),
                    /* @__PURE__ */ l.jsx("div", { className: "meld-suggestion-grid", children: g.map((v) => {
                      const C = v.id === x.parent_id;
                      return /* @__PURE__ */ l.jsxs(
                        "div",
                        {
                          role: "button",
                          tabIndex: 0,
                          "aria-pressed": C,
                          "aria-current": C ? "true" : void 0,
                          "aria-label": `Select ${v.filename} as source${C ? " (current)" : ""}`,
                          className: `meld-suggestion-card ${C ? "meld-suggestion-card--current" : ""}`,
                          onClick: () => !C && b(v.id),
                          onKeyDown: (I) => {
                            (I.key === "Enter" || I.key === " ") && (I.preventDefault(), C || b(v.id));
                          },
                          style: {
                            cursor: C ? "default" : "pointer",
                            ...C ? {
                              borderColor: "var(--meld-accent-color)",
                              boxShadow: "0 0 0 2px var(--meld-accent-color)"
                            } : {}
                          },
                          children: [
                            /* @__PURE__ */ l.jsx("img", { src: wt(v, 64), alt: v.filename }),
                            /* @__PURE__ */ l.jsxs("div", { className: "meld-suggestion-info", children: [
                              /* @__PURE__ */ l.jsx("span", { className: "meld-suggestion-filename", children: v.filename }),
                              C && /* @__PURE__ */ l.jsx(
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
                        v.id
                      );
                    }) })
                  ] }),
                  /* @__PURE__ */ l.jsxs("section", { children: [
                    /* @__PURE__ */ l.jsx("h3", { children: "Visual Matches (pHash)" }),
                    _.length > 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-suggestion-grid", children: _.map((v) => {
                      const C = v.id === x.parent_id;
                      return /* @__PURE__ */ l.jsxs(
                        "div",
                        {
                          role: "button",
                          tabIndex: 0,
                          "aria-pressed": C,
                          "aria-current": C ? "true" : void 0,
                          "aria-label": `Select ${v.filename} as source${C ? " (current)" : ""}`,
                          className: `meld-suggestion-card ${C ? "meld-suggestion-card--current" : ""}`,
                          onClick: () => !C && b(v.id),
                          onKeyDown: (I) => {
                            (I.key === "Enter" || I.key === " ") && (I.preventDefault(), C || b(v.id));
                          },
                          style: {
                            cursor: C ? "default" : "pointer",
                            ...C ? {
                              borderColor: "var(--meld-accent-color)",
                              boxShadow: "0 0 0 2px var(--meld-accent-color)"
                            } : {}
                          },
                          children: [
                            /* @__PURE__ */ l.jsx("img", { src: wt(v, 64), alt: v.filename }),
                            /* @__PURE__ */ l.jsxs("div", { className: "meld-suggestion-info", children: [
                              /* @__PURE__ */ l.jsx("span", { className: "meld-suggestion-filename", children: v.filename }),
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
                                      Math.round((64 - v.distance) / 64 * 100),
                                      "%"
                                    ] }),
                                    C && /* @__PURE__ */ l.jsx(
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
                        v.id
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
}, dv = () => {
  const { state: e, dispatch: t } = fe(), n = e.toastMessage;
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
}, uv = () => {
  const { state: e, dispatch: t } = fe(), { executeWorkflow: n } = ki();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    e.activeModal.type === "workflow_selection" && /* @__PURE__ */ l.jsx(
      of,
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
      af,
      {
        image: e.activeModal.image,
        nodes: e.activeModal.nodes,
        onSelect: (r) => {
          e.activeModal.type === "node_selection" && ml(e.activeModal.image, r);
        }
      }
    ),
    e.activeModal.type === "parent_selection" && /* @__PURE__ */ l.jsx(uf, { imageId: e.activeModal.imageId }),
    e.activeModal.type === "import" && /* @__PURE__ */ l.jsx(Pm, {}),
    e.activeModal.type === "settings" && /* @__PURE__ */ l.jsx(rf, {}),
    e.activeModal.type === "tag_edit" && ye.createPortal(
      /* @__PURE__ */ l.jsx(
        lf,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "error" && ye.createPortal(/* @__PURE__ */ l.jsx(df, { message: e.activeModal.message }), document.body),
    e.activeModal.type === "delete_confirm" && ye.createPortal(
      /* @__PURE__ */ l.jsx(
        cf,
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
        bi,
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
        Vm,
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
        sf,
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
        Ty,
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
        cv,
        {
          ...e.confirmModal,
          onConfirm: async (r) => {
            var s;
            await ((s = e.confirmModal) == null ? void 0 : s.onConfirm(r)), t({ type: "CLOSE_CONFIRM_MODAL" });
          },
          onCancel: () => {
            var r, s;
            (s = (r = e.confirmModal) == null ? void 0 : r.onCancel) == null || s.call(r), t({ type: "CLOSE_CONFIRM_MODAL" });
          }
        }
      ),
      document.body
    ),
    e.toastMessage && ye.createPortal(/* @__PURE__ */ l.jsx(dv, {}), document.body)
  ] });
}, mf = async (e) => {
  const t = await te.fetchApi("/meld/analytics", { signal: e == null ? void 0 : e.signal });
  return re(t);
}, ff = async (e, t) => {
  var i;
  const n = new URLSearchParams();
  n.set("limit", String(t.limit)), n.set("offset", String(t.offset)), t != null && t.sort && n.set("sort", t.sort), (i = t == null ? void 0 : t.q) != null && i.trim() && n.set("q", t.q.trim());
  const r = n.toString(), s = `/meld/analytics/${e}${r ? `?${r}` : ""}`, a = await te.fetchApi(s, { signal: t == null ? void 0 : t.signal }), o = await xl(a);
  if (!o.success)
    throw new Error(o.error || "Failed to fetch analytics");
  return {
    data: o.data ?? [],
    total: o.total ?? 0
  };
}, pf = async (e) => {
  const t = await te.fetchApi("/meld/analytics/refresh", {
    method: "POST",
    signal: e == null ? void 0 : e.signal
  });
  await re(t);
}, mv = async (e, t, n) => {
  if (!t || t.length === 0) return {};
  const r = await te.fetchApi("/meld/analytics/counts", {
    method: "POST",
    body: JSON.stringify({ category: e, names: t }),
    signal: n == null ? void 0 : n.signal
  }), s = await xl(r);
  if (!s.success)
    throw new Error(s.error || "Failed to fetch analytics counts");
  return s.data ?? {};
}, fv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  fetchAnalyticsCategory: ff,
  fetchAnalyticsCounts: mv,
  fetchAnalyticsSummary: mf,
  refreshAnalytics: pf
}, Symbol.toStringTag, { value: "Module" })), pv = "_meldAnalytics__headerRow_9nv4x_3", hv = "_meldAnalytics__title_9nv4x_9", gv = "_meldAnalytics__controls_9nv4x_14", yv = "_meldAnalytics_9nv4x_3", vv = "_meldAnalytics__totalCard_9nv4x_26", wv = "_meldAnalytics__totalCardTitle_9nv4x_37", xv = "_meldAnalytics__totalCardValue_9nv4x_46", _v = "_meldAnalytics__grid_9nv4x_54", kv = "_meldAnalytics__section_9nv4x_60", bv = "_meldAnalytics__sectionHeader_9nv4x_71", Sv = "_meldAnalytics__sectionTitle_9nv4x_83", jv = "_meldAnalytics__item_9nv4x_94", Cv = "_meldAnalytics__itemLabel_9nv4x_111", Ev = "_meldAnalytics__itemCount_9nv4x_118", Nv = "_meldAnalytics__seeAllBtn_9nv4x_128", Iv = "_meldAnalytics__fullView_9nv4x_149", Mv = "_meldAnalytics__fullViewToolbar_9nv4x_155", Tv = "_meldAnalytics__toolbarBtn_9nv4x_162", Lv = "_meldAnalytics__searchContainer_9nv4x_167", Av = "_meldAnalytics__searchIcon_9nv4x_179", Dv = "_meldAnalytics__searchInput_9nv4x_184", Rv = "_meldAnalytics__fullList_9nv4x_197", Pv = "_meldAnalytics__fullListItem_9nv4x_204", Ov = "_meldAnalytics__refreshBtn_9nv4x_222", pe = {
  meldAnalytics__headerRow: pv,
  meldAnalytics__title: hv,
  meldAnalytics__controls: gv,
  meldAnalytics: yv,
  meldAnalytics__totalCard: vv,
  meldAnalytics__totalCardTitle: wv,
  meldAnalytics__totalCardValue: xv,
  meldAnalytics__grid: _v,
  meldAnalytics__section: kv,
  meldAnalytics__sectionHeader: bv,
  meldAnalytics__sectionTitle: Sv,
  meldAnalytics__item: jv,
  meldAnalytics__itemLabel: Cv,
  meldAnalytics__itemCount: Ev,
  meldAnalytics__seeAllBtn: Nv,
  meldAnalytics__fullView: Iv,
  meldAnalytics__fullViewToolbar: Mv,
  meldAnalytics__toolbarBtn: Tv,
  meldAnalytics__searchContainer: Lv,
  meldAnalytics__searchIcon: Av,
  meldAnalytics__searchInput: Dv,
  meldAnalytics__fullList: Rv,
  meldAnalytics__fullListItem: Pv,
  meldAnalytics__refreshBtn: Ov
}, zv = {
  positive_prompts: "pos",
  negative_prompts: "neg",
  tags: "tag",
  models: "model",
  by_date: "date",
  by_resolution: "resolution"
};
function Fv(e, t) {
  const n = zv[e];
  return n ? /[\s"]/.test(t) ? `${n}:"${t.replace(/"/g, '\\"')}"` : `${n}:${t}` : t;
}
function $v(e) {
  return e.name !== void 0 ? e.name : e.date !== void 0 ? e.date : e.resolution !== void 0 ? e.resolution : "";
}
function Hc(e) {
  return $v(e);
}
const Wv = ({ onClose: e, onSearchAndNavigate: t }) => {
  const { dispatch: n } = fe(), [r, s] = p.useState(null), [a, o] = p.useState(!0), [i, c] = p.useState(!1), [d, h] = p.useState(null), [w, y] = p.useState([]), [S, x] = p.useState(0), [k, b] = p.useState(!1), [m, f] = p.useState(null), [u, g] = p.useState("count_desc"), [_, v] = p.useState(""), C = p.useRef(""), I = p.useRef(null), D = p.useRef(0);
  Te({
    onEscape: () => {
      d ? h(null) : e();
    }
  });
  const N = p.useCallback(async (O, M) => {
    const U = M;
    o(!0);
    try {
      const j = await mf({ signal: O });
      if (O != null && O.aborted || U !== void 0 && U !== D.current) return;
      s(j);
    } catch (j) {
      if (O != null && O.aborted || j && typeof j == "object" && j.name === "AbortError" || U !== void 0 && U !== D.current) return;
      throw s(null), j;
    } finally {
      !(O != null && O.aborted) && (U === void 0 || U === D.current) && o(!1);
    }
  }, []);
  p.useEffect(() => {
    const O = new AbortController();
    D.current += 1;
    const M = D.current;
    return N(O.signal, M).catch(() => {
    }), () => O.abort();
  }, [N]);
  const L = p.useCallback(
    async (O, M, U, j) => {
      b(!0), f(null);
      try {
        const { data: T, total: z } = await ff(O, {
          limit: 500,
          offset: 0,
          sort: M,
          q: U.trim() || void 0,
          signal: j
        });
        if (j != null && j.aborted) return;
        y(T), x(z);
      } catch (T) {
        if (j != null && j.aborted || T && typeof T == "object" && T.name === "AbortError")
          return;
        const z = T instanceof Error ? T.message : typeof T == "string" ? T : "Unknown error";
        throw f(z), T;
      } finally {
        j != null && j.aborted || b(!1);
      }
    },
    []
  );
  p.useEffect(() => {
    if (!d) return;
    const O = C.current !== _;
    C.current = _;
    const M = new AbortController(), U = () => {
      L(d, u, _, M.signal).catch(() => {
      });
    };
    if (O) {
      const j = setTimeout(U, 300);
      return () => {
        clearTimeout(j), M.abort();
      };
    }
    return U(), () => M.abort();
  }, [d, u, _, L]);
  const $ = p.useCallback(async () => {
    var U;
    (U = I.current) == null || U.abort();
    const O = new AbortController();
    I.current = O;
    const M = O.signal;
    c(!0);
    try {
      if (await pf({ signal: M }), M.aborted) return;
      D.current += 1;
      const j = D.current;
      if (await N(M, j), M.aborted || (d && await L(d, u, _, M), M.aborted)) return;
      n({ type: "SHOW_TOAST", payload: "Analytics refreshed" });
    } catch (j) {
      if (M.aborted) return;
      const T = j instanceof Error ? j.message : typeof j == "string" ? j : "Unknown error";
      n({
        type: "SHOW_TOAST",
        payload: `Analytics refresh failed: ${T}`
      });
    } finally {
      M.aborted || c(!1);
    }
  }, [N, L, d, u, _, n]);
  p.useEffect(() => () => {
    var O;
    (O = I.current) == null || O.abort();
  }, []);
  const H = p.useCallback(
    (O, M) => {
      const U = Fv(O, M);
      t ? t(U) : e();
    },
    [t, e]
  ), E = (O, M, U) => /* @__PURE__ */ l.jsxs("div", { className: pe.meldAnalytics__section, children: [
    /* @__PURE__ */ l.jsxs("div", { className: pe.meldAnalytics__sectionHeader, children: [
      /* @__PURE__ */ l.jsx("h3", { className: pe.meldAnalytics__sectionTitle, children: O }),
      /* @__PURE__ */ l.jsxs(
        "button",
        {
          type: "button",
          className: pe.meldAnalytics__seeAllBtn,
          onClick: () => {
            h(M), v(""), g("count_desc");
          },
          children: [
            "See all ",
            /* @__PURE__ */ l.jsx(cg, { size: 14 })
          ]
        }
      )
    ] }),
    U.map((j, T) => {
      const z = Hc(j);
      return /* @__PURE__ */ l.jsxs(
        "div",
        {
          role: "button",
          tabIndex: 0,
          className: pe.meldAnalytics__item,
          onClick: () => H(M, z),
          onKeyDown: (W) => {
            (W.key === "Enter" || W.key === " ") && (W.preventDefault(), H(M, z));
          },
          children: [
            /* @__PURE__ */ l.jsx("span", { className: pe.meldAnalytics__itemLabel, children: z }),
            /* @__PURE__ */ l.jsx("span", { className: pe.meldAnalytics__itemCount, children: j.count })
          ]
        },
        `${z}-${T}`
      );
    })
  ] }, M);
  return /* @__PURE__ */ l.jsxs("div", { className: "meld-analytics-view", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-analytics-header", children: [
      /* @__PURE__ */ l.jsxs("div", { className: pe.meldAnalytics__headerRow, children: [
        /* @__PURE__ */ l.jsx(bm, { size: 16 }),
        /* @__PURE__ */ l.jsx("h3", { className: pe.meldAnalytics__title, children: "Image Analytics" })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: pe.meldAnalytics__controls, children: [
        /* @__PURE__ */ l.jsxs(
          "button",
          {
            type: "button",
            className: pe.meldAnalytics__refreshBtn,
            onClick: $,
            disabled: i,
            title: "Refresh analytics",
            children: [
              /* @__PURE__ */ l.jsx(gr, { size: 14, className: i ? "animate-spin" : "" }),
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
            children: /* @__PURE__ */ l.jsx(he, { size: 16 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-analytics-content", children: d ? /* @__PURE__ */ l.jsxs("div", { className: pe.meldAnalytics__fullView, children: [
      /* @__PURE__ */ l.jsxs("div", { className: pe.meldAnalytics__fullViewToolbar, children: [
        /* @__PURE__ */ l.jsxs("div", { className: pe.meldAnalytics__searchContainer, children: [
          /* @__PURE__ */ l.jsx(vn, { size: 14, className: pe.meldAnalytics__searchIcon }),
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "text",
              className: pe.meldAnalytics__searchInput,
              placeholder: "Filter...",
              value: _,
              onChange: (O) => v(O.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ l.jsxs(
          "button",
          {
            type: "button",
            className: `meld-btn meld-btn--secondary ${pe.meldAnalytics__toolbarBtn}`,
            onClick: () => g((O) => O === "count_desc" ? "count_asc" : "count_desc"),
            title: u === "count_desc" ? "Sort ascending" : "Sort descending",
            children: [
              u === "count_desc" ? /* @__PURE__ */ l.jsx(ig, { size: 14 }) : /* @__PURE__ */ l.jsx(ug, { size: 14 }),
              u === "count_desc" ? "Desc" : "Asc"
            ]
          }
        ),
        /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "button",
            className: `meld-btn meld-btn--secondary ${pe.meldAnalytics__toolbarBtn}`,
            onClick: () => h(null),
            children: "Back"
          }
        )
      ] }),
      k ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__loading", children: "Loading..." }) : m ? /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__empty", role: "alert", children: [
        "Failed to load: ",
        m
      ] }) : /* @__PURE__ */ l.jsxs("div", { className: pe.meldAnalytics__fullList, children: [
        w.map((O, M) => {
          const U = Hc(O);
          return /* @__PURE__ */ l.jsxs(
            "div",
            {
              role: "button",
              tabIndex: 0,
              className: pe.meldAnalytics__fullListItem,
              onClick: () => H(d, U),
              onKeyDown: (j) => {
                (j.key === "Enter" || j.key === " ") && (j.preventDefault(), H(d, U));
              },
              children: [
                /* @__PURE__ */ l.jsxs("span", { className: pe.meldAnalytics__itemLabel, children: [
                  M + 1,
                  ". ",
                  U
                ] }),
                /* @__PURE__ */ l.jsx("span", { className: pe.meldAnalytics__itemCount, children: O.count })
              ]
            },
            `${U}-${M}`
          );
        }),
        w.length === 0 && /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__empty", children: "No items found." })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { style: { fontSize: 12, color: "var(--meld-text-secondary)" }, children: [
        S,
        " total"
      ] })
    ] }) : a ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__loading", children: "Loading analytics..." }) : r ? /* @__PURE__ */ l.jsxs("div", { className: pe.meldAnalytics, children: [
      /* @__PURE__ */ l.jsxs("div", { className: pe.meldAnalytics__totalCard, children: [
        /* @__PURE__ */ l.jsx("div", { className: pe.meldAnalytics__totalCardTitle, children: "Total Images" }),
        /* @__PURE__ */ l.jsx("div", { className: pe.meldAnalytics__totalCardValue, children: r.total_images.toLocaleString() })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: pe.meldAnalytics__grid, children: [
        E(
          "Positive Prompt (top 5)",
          "positive_prompts",
          r.positive_prompts
        ),
        E(
          "Negative Prompt (top 5)",
          "negative_prompts",
          r.negative_prompts
        ),
        E("Tag (top 5)", "tags", r.tags),
        E("Model (top 5)", "models", r.models),
        E("Created Date (top 5)", "by_date", r.by_date),
        E("Resolution (top 5)", "by_resolution", r.by_resolution)
      ] })
    ] }) : /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__empty", children: "Failed to load analytics." }) })
  ] });
}, Uv = () => {
  const { state: e, dispatch: t } = fe(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await Ey(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (h) {
      F.error("Failed to cancel scan:", h);
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
        children: /* @__PURE__ */ l.jsx(Em, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ l.jsxs("div", { className: "meld-scan-finished--compact", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ l.jsx(pg, { size: 14, className: "meld-success-icon" }),
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
}, Vv = Object.keys(Si), Kc = /* @__PURE__ */ new Map(), Gc = "data-meld-portal-root";
let _a = null, ka = null;
const qc = ".comfyui-body-bottom";
function Yc(e) {
  var n, r, s, a;
  const t = `[${Gc}]`;
  for (let o = 0; o < e.length; o++) {
    const i = e.item(o);
    if (!i || i.nodeType !== 1) continue;
    const c = i;
    if ((n = c.hasAttribute) != null && n.call(c, Gc) || (r = c.querySelector) != null && r.call(c, t) || (s = c.matches) != null && s.call(c, qc) || (a = c.querySelector) != null && a.call(c, qc)) return !0;
  }
  return !1;
}
function Bv(e) {
  const t = document.querySelector(e);
  return t instanceof HTMLElement ? t : document.body;
}
function Qv(e) {
  const t = Si[e], n = document.getElementById(t.id);
  if (n instanceof HTMLDivElement)
    return n.dataset.meldPortalRoot = e, n;
  const r = document.createElement("div");
  return r.id = t.id, r.dataset.meldPortalRoot = e, r;
}
function hf(e) {
  const t = Si[e], n = Kc.get(e) ?? Qv(e);
  Kc.set(e, n);
  const r = Bv(t.preferredParentSelector);
  return (n.parentElement !== r || !document.contains(n)) && r.appendChild(n), n;
}
function gf() {
  for (const e of Vv)
    hf(e);
}
function Xc() {
  ka === null && (ka = requestAnimationFrame(() => {
    ka = null, gf();
  }));
}
function yf(e) {
  return hf(e);
}
function Hv() {
  _a || typeof document > "u" || !document.body || (gf(), _a = new MutationObserver((e) => {
    for (const t of e) {
      if (Yc(t.addedNodes)) {
        Xc();
        return;
      }
      if (Yc(t.removedNodes)) {
        Xc();
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
}, Kv = () => {
  const { state: e } = fe(), t = se((a) => a.slots), n = se((a) => a.addToBucket), r = t.length > 0 && e.selectedIds.size > 0, s = p.useCallback(
    (a) => {
      if (iv())
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
}, vf = ({ message: e, onConfirm: t, onCancel: n }) => (Te({ onEscape: n }), /* @__PURE__ */ l.jsx(
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
)), pl = ({
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
      o.current.some((y) => {
        const S = y.current;
        return S ? S.contains(h) : !1;
      }) || i.current(d);
    };
    return window.addEventListener("pointerdown", c, { capture: s }), () => {
      window.removeEventListener("pointerdown", c, {
        capture: s
      });
    };
  }, [e, s, a]);
}, Gv = (e, t, n, r, s) => {
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
        F.warn("move_folder action is not yet implemented"), s == null || s();
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
        F.log(`Action ${e.type} executed on ${t.length} images`);
        break;
    }
}, qv = ({ config: e }) => {
  var W;
  const t = se((A) => A.buckets), n = se((A) => A.slots), r = se((A) => A.images), s = n.length, { state: a, dispatch: o } = fe(), [i, c] = p.useState(!1), [d, h] = p.useState(!1), [w, y] = p.useState(!1), [S, x] = p.useState(e.label), [k, b] = p.useState(e.color), [m, f] = p.useState([]), [u, g] = p.useState(null), _ = p.useRef(null), v = p.useRef(null);
  pl({
    enabled: i,
    insideRefs: [v],
    onOutside: () => c(!1)
  }), pl({
    enabled: w,
    insideRefs: [_],
    onOutside: () => y(!1)
  });
  const C = t[e.id] || [], I = C.length, D = C.map((A) => {
    const R = Number(A);
    let P = a.images.find((Z) => Z.id === R);
    return P || (P = a.lineageImages.find((Z) => Z.id === R)), P || (P = r[A]), P;
  }).filter(Boolean);
  p.useEffect(() => {
    f((A) => {
      const R = A.filter((P) => C.includes(String(P)));
      return R.length !== A.length ? R : A;
    });
  }, [C]);
  const N = m.filter((A) => C.includes(String(A))), L = N.length > 0, $ = (A) => {
    A.preventDefault(), A.stopPropagation(), A.currentTarget.classList.add("drag-over");
  }, H = (A) => {
    A.currentTarget.classList.remove("drag-over");
  }, E = (A) => {
    A.preventDefault(), A.stopPropagation(), A.currentTarget.classList.remove("drag-over");
    const R = A.dataTransfer.getData("text/plain");
    R && R.split(",").forEach((Z) => {
      if (Z) {
        const J = Z.trim(), oe = Number(J);
        let me = a.images.find((we) => we.id === oe);
        me || (me = a.lineageImages.find((we) => we.id === oe)), se.getState().addToBucket(e.id, J, me);
      }
    });
  }, O = (A, R) => {
    A.stopPropagation();
    let P = [R];
    N.includes(R) ? P = N : (f([R]), g(R)), A.dataTransfer.setData("text/plain", P.join(",")), A.dataTransfer.setData("application/meld-lt-source-slot", e.id), A.dataTransfer.effectAllowed = "move";
  }, M = (A, R) => {
    if (A.dataTransfer.dropEffect === "none") {
      const P = N.includes(R) ? N : [R];
      P.forEach((Z) => {
        se.getState().removeFromBucket(e.id, String(Z));
      }), f((Z) => Z.filter((J) => !P.includes(J)));
    }
  }, U = (A) => {
    if (I === 0) return;
    const R = {
      type: A
    }, P = L ? N : C.map(Number);
    if (P.length === 0) return;
    const Z = P.map((me) => D.find((we) => we.id === me)).filter(Boolean), J = {
      edit_tags: "Tags updated",
      delete: "Delete initiated",
      move_folder: "Moved to folder",
      queue_workflow: "Queued Workflow",
      run_with_mask: "Opened Mask Editor",
      download: "Opened Download Options"
    };
    Gv(R, P, Z, o, () => {
      se.getState().showToast(J[A] ?? "Done");
    });
  }, j = () => {
    se.getState().clearBucket(e.id), se.getState().showToast(`Tab "${e.label}" cleared`), h(!1);
  }, T = () => {
    const A = se.getState();
    A.slots.length <= 1 || (A.removeSlot(e.id), se.getState().showToast(`Tab "${e.label}" deleted`));
  }, z = p.useCallback(
    (A, R) => {
      if (!A.repeat && (A.key === "Enter" || A.key === " "))
        if (A.preventDefault(), A.ctrlKey || A.metaKey)
          f(
            (P) => P.includes(R.id) ? P.filter((Z) => Z !== R.id) : [...P, R.id]
          ), g(R.id);
        else if (A.shiftKey && u !== null) {
          const P = D.findIndex((J) => J.id === R.id), Z = D.findIndex((J) => J.id === u);
          if (P !== -1 && Z !== -1) {
            const J = Math.min(P, Z), oe = Math.max(P, Z), me = D.slice(J, oe + 1).map((we) => we.id);
            f((we) => Array.from(/* @__PURE__ */ new Set([...we, ...me])));
          }
          g(R.id);
        } else
          f([]), g(null), o({
            type: "OPEN_VIEWER",
            payload: {
              id: R.id,
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
      onDragLeave: H,
      onDrop: E,
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "meld-lt-slot-panel__images", children: I === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-lt-slot-panel__empty", children: "Drag & Drop images here" }) : D.map((A) => {
          const R = wt(A);
          return /* @__PURE__ */ l.jsx(
            "div",
            {
              role: "button",
              tabIndex: 0,
              className: `meld-lt-slot-panel__image-wrapper${N.includes(A.id) ? " selected" : ""}`,
              draggable: !0,
              onClick: (P) => {
                if (P.ctrlKey || P.metaKey)
                  f(
                    (Z) => Z.includes(A.id) ? Z.filter((J) => J !== A.id) : [...Z, A.id]
                  ), g(A.id);
                else if (P.shiftKey && u !== null) {
                  const Z = D.findIndex((oe) => oe.id === A.id), J = D.findIndex((oe) => oe.id === u);
                  if (Z !== -1 && J !== -1) {
                    const oe = Math.min(Z, J), me = Math.max(Z, J), we = D.slice(oe, me + 1).map((B) => B.id);
                    f((B) => Array.from(/* @__PURE__ */ new Set([...B, ...we])));
                  }
                  g(A.id);
                } else
                  f([]), g(null), o({
                    type: "OPEN_VIEWER",
                    payload: {
                      id: A.id,
                      mode: "lighttable",
                      slotId: e.id
                    }
                  });
              },
              onKeyDown: (P) => z(P, A),
              onDragStart: (P) => O(P, A.id),
              onDragEnd: (P) => M(P, A.id),
              children: /* @__PURE__ */ l.jsx("img", { src: R, alt: A.filename, draggable: !1 })
            },
            A.id
          );
        }) }),
        /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__actions", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__action-menu-wrapper", ref: _, children: [
            /* @__PURE__ */ l.jsxs(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__action-btn",
                onClick: () => y(!w),
                disabled: I === 0,
                title: "Actions",
                children: [
                  L ? `Action (${N.length})` : "Action",
                  /* @__PURE__ */ l.jsx(hg, { size: 12 })
                ]
              }
            ),
            w && /* @__PURE__ */ l.jsx("div", { className: "meld-lt-slot__action-menu", children: [
              {
                type: "edit_tags",
                label: "Edit Tags",
                icon: _r
              },
              {
                type: "queue_workflow",
                label: "Queue Workflow",
                icon: yi
              },
              {
                type: "run_with_mask",
                label: "Queue Workflow (Mask)",
                icon: Pg
              },
              {
                type: "download",
                label: "Download",
                icon: dl
              },
              {
                type: "delete",
                label: "Delete",
                icon: qt,
                danger: !0
              }
            ].map((A) => /* @__PURE__ */ l.jsxs(
              "div",
              {
                className: `meld-lt-slot__action-menu-item${A.danger ? " meld-lt-slot__action-menu-item--danger" : ""}${"disabled" in A && A.disabled ? " meld-lt-slot__action-menu-item--disabled" : ""}`,
                onMouseDown: (R) => R.stopPropagation(),
                onClick: () => {
                  "disabled" in A && A.disabled || (U(A.type), y(!1));
                },
                children: [
                  /* @__PURE__ */ l.jsx(A.icon, { size: 13 }),
                  /* @__PURE__ */ l.jsx("span", { children: A.label })
                ]
              },
              A.type
            )) })
          ] }),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-lt-slot__menu-btn",
              onClick: () => h(!0),
              title: "Clear Tab",
              disabled: I === 0,
              children: /* @__PURE__ */ l.jsx(yg, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__settings-wrapper", ref: v, children: [
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__menu-btn",
                onClick: () => c(!i),
                title: "Tab Settings",
                children: /* @__PURE__ */ l.jsx(Cm, { size: 14 })
              }
            ),
            i && /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__settings-popover", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__settings-row", children: [
                /* @__PURE__ */ l.jsx("label", { htmlFor: `slot-label-${e.id}`, children: "Tab Label:" }),
                /* @__PURE__ */ l.jsx(
                  "input",
                  {
                    id: `slot-label-${e.id}`,
                    value: S,
                    onChange: (A) => x(A.target.value),
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
                          value: k.startsWith("var") ? ((W = k.match(/#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})/)) == null ? void 0 : W[0]) ?? "#9ca3af" : /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/i.test(k) ? k : "#9ca3af",
                          onChange: (A) => b(A.target.value),
                          style: { flexShrink: 0 }
                        }
                      ),
                      /* @__PURE__ */ l.jsx(
                        "input",
                        {
                          value: k,
                          onChange: (A) => b(A.target.value),
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
                    const A = se.getState(), R = S.trim();
                    if (!R) {
                      A.showToast("Error: Tab label cannot be empty", "error");
                      return;
                    }
                    if (A.slots.some(
                      (Z) => Z.id !== e.id && (Z.label.toLowerCase() === R.toLowerCase() || Z.id.toLowerCase() === R.toLowerCase())
                    )) {
                      A.showToast(`Error: "${R}" is already in use`, "error");
                      return;
                    }
                    A.updateSlot(e.id, {
                      label: R,
                      color: k
                    }), c(!1), A.showToast("Settings saved");
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
          vf,
          {
            message: `Clear all items in the "${e.label}" tab?`,
            onConfirm: j,
            onCancel: () => h(!1)
          }
        )
      ]
    }
  );
}, Yv = () => {
  const e = se((n) => n.toastMessage), t = se((n) => n.toastType);
  return e ? /* @__PURE__ */ l.jsx(
    "div",
    {
      className: `meld-toast ${t === "error" ? "meld-toast--error" : ""}`,
      role: "status",
      "aria-live": "polite",
      children: e
    }
  ) : null;
}, Xv = () => {
  var S;
  Kv();
  const e = se((x) => x.isOpen), t = se((x) => x.setIsOpen), [n, r] = p.useState(!1);
  Te({
    onEscape: () => t(!1),
    enabled: e && !n
  }), p.useEffect(() => {
    e || r(!1);
  }, [e]);
  const s = se((x) => x.slots), a = se((x) => x.buckets), { state: o } = fe(), [i, c] = p.useState(((S = s[0]) == null ? void 0 : S.id) || "keep"), d = yf("lightTable");
  if (!e) return null;
  const h = () => {
    const x = `slot_${Date.now().toString(36)}`;
    se.getState().addSlot({
      id: x,
      label: `Tab ${s.length + 1}`,
      color: "var(--meld-text-secondary, #9ca3af)",
      shortcutKey: ""
    }), c(x);
  }, w = () => {
    s.forEach((x) => {
      se.getState().clearBucket(x.id);
    }), se.getState().showToast("All tabs cleared"), r(!1);
  }, y = /* @__PURE__ */ l.jsxs("div", { className: "meld-light-table", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-light-table__tabs", children: [
      s.map((x) => {
        var k;
        return /* @__PURE__ */ l.jsxs(
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
              const m = b.dataTransfer.getData("text/plain");
              m && m.split(",").forEach((u) => {
                if (u) {
                  const g = u.trim(), _ = o.images.find((v) => String(v.id) === g);
                  se.getState().addToBucket(x.id, g, _);
                }
              });
            },
            children: [
              x.label,
              "  (",
              ((k = a[x.id]) == null ? void 0 : k.length) || 0,
              ")"
            ]
          },
          x.id
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
            /* @__PURE__ */ l.jsx(Lg, { size: 14 }),
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
          children: /* @__PURE__ */ l.jsx(he, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-light-table__content", children: s.map((x) => /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-light-table__tab-panel",
        style: { display: i === x.id ? "block" : "none" },
        children: /* @__PURE__ */ l.jsx(qv, { config: x })
      },
      x.id
    )) }),
    n && /* @__PURE__ */ l.jsx(
      vf,
      {
        message: "Are you sure you want to clear all items in all tabs?",
        onConfirm: w,
        onCancel: () => r(!1)
      }
    ),
    /* @__PURE__ */ l.jsx(Yv, {})
  ] });
  return ye.createPortal(y, d);
}, wf = () => {
  const { state: e, refreshFavorites: t } = fe(), [n, r] = p.useState(!1), [s, a] = p.useState(null), [o, i] = p.useState("info"), [c, d] = p.useState(null), [h, w] = p.useState(""), [y, S] = p.useState("");
  p.useEffect(() => {
    if (s) {
      const f = setTimeout(() => a(null), 3e3);
      return () => clearTimeout(f);
    }
  }, [s]);
  const x = p.useCallback(
    async (f, u, g) => {
      f.stopPropagation();
      const _ = `Are you sure you want to delete the favorite "${g}"?`;
      if (window.confirm(_))
        try {
          await $c(u), await t();
        } catch (v) {
          F.error("Failed to delete favorite", v);
        }
    },
    [t]
  ), k = p.useCallback((f, u) => {
    f.stopPropagation(), d(u), w(u.name), S(u.query);
  }, []), b = p.useCallback(async () => {
    if (!(!c || !h.trim() || !y.trim()))
      try {
        r(!0), await ly(c.id, h, y), await t(), d(null);
      } catch (f) {
        F.error("Failed to update favorite", f), a("Failed to update favorite."), i("error");
      } finally {
        r(!1);
      }
  }, [c, h, y, t]), m = p.useCallback(async () => {
    if (!e.searchQuery || n) return !1;
    if (e.favorites.some((u) => u.query === e.searchQuery)) {
      const u = e.favorites.find((g) => g.query === e.searchQuery);
      if (u) {
        r(!0);
        try {
          return await $c(u.id), await t(), !0;
        } catch (g) {
          return F.error("Failed to delete favorite:", g), !1;
        } finally {
          r(!1);
        }
      }
      return !1;
    }
    r(!0);
    try {
      return await ry(e.searchQuery, e.searchQuery), await t(), !0;
    } catch (u) {
      return F.error("Failed to save favorite:", u), !1;
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
    setEditFavoriteName: w,
    editFavoriteQuery: y,
    setEditFavoriteQuery: S,
    handleDeleteFavorite: x,
    handleEditFavorite: k,
    handleSaveEditFavorite: b,
    handleSaveFavorite: m,
    setToastMessage: (f, u = "info") => {
      a(f), i(u);
    }
  };
}, xf = ({ fav: e, onSelect: t, onEdit: n, onDelete: r }) => {
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
                  children: /* @__PURE__ */ l.jsx(jm, { size: 14 })
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
                  children: /* @__PURE__ */ l.jsx(qt, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Zv = "_menu_jab2z_1", Jv = "_header_jab2z_14", ew = "_title_jab2z_23", tw = "_count_jab2z_32", nw = "_list_jab2z_37", rw = "_toast_jab2z_46", lw = "_editTitle_jab2z_56", sw = "_form_jab2z_62", aw = "_fieldGroup_jab2z_69", ow = "_label_jab2z_75", iw = "_input_jab2z_81", cw = "_textarea_jab2z_82", Ze = {
  menu: Zv,
  header: Jv,
  title: ew,
  count: tw,
  list: nw,
  toast: rw,
  editTitle: lw,
  form: sw,
  fieldGroup: aw,
  label: ow,
  input: iw,
  textarea: cw
}, dw = ({
  anchorRect: e,
  onClose: t,
  onSelect: n
}) => {
  const { state: r } = fe(), {
    isSaving: s,
    toastMessage: a,
    editingFavorite: o,
    setEditingFavorite: i,
    editFavoriteName: c,
    setEditFavoriteName: d,
    editFavoriteQuery: h,
    setEditFavoriteQuery: w,
    handleDeleteFavorite: y,
    handleEditFavorite: S,
    handleSaveEditFavorite: x
  } = wf(), [k, b] = p.useState({ top: 0, left: 0 }), m = p.useRef(null), f = p.useRef(null);
  return Te({
    onEscape: () => {
      o ? i(null) : t();
    },
    enabled: !0
  }), pl({
    enabled: !!e && !o,
    insideRefs: [m],
    onOutside: () => t()
  }), p.useEffect(() => {
    if (e) {
      let _ = e.left;
      const v = e.bottom + 5;
      _ + 300 > window.innerWidth - 10 && (_ = window.innerWidth - 300 - 10), _ < 10 && (_ = 10), b({ top: v, left: _ });
    }
  }, [e]), p.useEffect(() => {
    o && f.current && f.current.focus();
  }, [o]), e ? ye.createPortal(
    /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs(
        "div",
        {
          ref: m,
          className: `${Ze.menu} meld-favorites-context-menu`,
          style: {
            top: k.top,
            left: k.left
          },
          children: [
            /* @__PURE__ */ l.jsxs("div", { className: Ze.header, children: [
              /* @__PURE__ */ l.jsxs("div", { className: Ze.title, children: [
                /* @__PURE__ */ l.jsx(
                  yr,
                  {
                    size: 14,
                    color: "var(--brand-yellow, #ffd700)",
                    fill: "var(--brand-yellow, #ffd700)"
                  }
                ),
                "Favorites"
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: Ze.count, children: [
                r.favorites.length,
                " items"
              ] })
            ] }),
            /* @__PURE__ */ l.jsx("div", { className: Ze.list, children: r.favorites.map((u) => /* @__PURE__ */ l.jsx(
              xf,
              {
                fav: u,
                onSelect: (g) => {
                  n(g), t();
                },
                onEdit: S,
                onDelete: y
              },
              u.id
            )) }),
            a && /* @__PURE__ */ l.jsx("div", { className: Ze.toast, children: a })
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
                  /* @__PURE__ */ l.jsxs("h2", { className: Ze.editTitle, children: [
                    /* @__PURE__ */ l.jsx(yr, { size: 20, color: "var(--meld-accent-color)" }),
                    "Edit Favorite"
                  ] }),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => i(null),
                      children: /* @__PURE__ */ l.jsx(he, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ l.jsxs("div", { className: Ze.form, children: [
                  /* @__PURE__ */ l.jsxs("div", { className: Ze.fieldGroup, children: [
                    /* @__PURE__ */ l.jsx("label", { htmlFor: "edit-favorite-name-ctx", className: Ze.label, children: "Name" }),
                    /* @__PURE__ */ l.jsx(
                      "input",
                      {
                        id: "edit-favorite-name-ctx",
                        ref: f,
                        type: "text",
                        value: c,
                        onChange: (u) => d(u.target.value),
                        placeholder: "Favorite Name",
                        className: Ze.input,
                        onKeyDown: (u) => {
                          u.key === "Enter" && (et(u), x()), u.key === "Escape" && (et(u), i(null));
                        }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ l.jsxs("div", { className: Ze.fieldGroup, children: [
                    /* @__PURE__ */ l.jsx("label", { htmlFor: "edit-favorite-query-ctx", className: Ze.label, children: "Search Query" }),
                    /* @__PURE__ */ l.jsx(
                      "textarea",
                      {
                        id: "edit-favorite-query-ctx",
                        value: h,
                        onChange: (u) => w(u.target.value),
                        placeholder: "Search Query",
                        rows: 3,
                        className: Ze.textarea,
                        onKeyDown: (u) => {
                          u.key === "Enter" && !u.shiftKey && (et(u), x()), u.key === "Escape" && (et(u), i(null));
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
                      onClick: x,
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
}, uw = () => {
  const { state: e, dispatch: t, updateSetting: n } = fe(), [r, s] = p.useState(e.searchQuery), [a, o] = p.useState([]), [i, c] = p.useState(!1), [d, h] = p.useState([]), [w, y] = p.useState([]), S = e.settings["search.show_all_keywords"], [x, k] = p.useState(-1), [b, m] = p.useState(null), f = p.useRef(null), u = p.useRef(e.searchQuery), g = p.useRef(!0);
  p.useEffect(() => () => {
    g.current = !1;
  }, []);
  const _ = p.useCallback(async () => {
    if (w.length > 0) return;
    const j = await ey();
    g.current && y(j);
  }, [w.length]);
  p.useEffect(() => {
    let j = !0;
    return ty().then((T) => {
      j && m(T);
    }).catch((T) => {
      j && F.error("Failed to fetch search config:", T);
    }), S && _().catch((T) => {
      j && F.error("Failed to fetch keywords:", T);
    }), () => {
      j = !1;
    };
  }, [_, S]);
  const v = p.useMemo(() => {
    if (!b) return null;
    const j = b.all_prefixes.join("|");
    return new RegExp(`^[-!]?(${j}):(.*)$`, "i");
  }, [b]), C = p.useCallback(() => {
    const j = !S;
    j && _(), n("search.show_all_keywords", j);
  }, [S, _, n]), I = r !== u.current;
  p.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      h([]);
      return;
    }
    let j = !0;
    return Jg().then((T) => {
      j && h(T);
    }).catch((T) => {
      j && (F.error("Failed to fetch search suggestions:", T), h([]));
    }), () => {
      j = !1;
    };
  }, [e.settings["search.quick_suggestions"]]), p.useEffect(() => {
    s(e.searchQuery), u.current = e.searchQuery;
  }, [e.searchQuery]), p.useEffect(() => {
    var j;
    (j = f.current) == null || j.focus();
  }, []);
  const D = p.useCallback(
    (j, T = !0) => {
      u.current !== j && (F.log("SearchBar: triggering search", { query: j }), t({ type: "SET_SEARCH_QUERY", payload: j }), T && c(!1), u.current = j);
    },
    [t]
  );
  p.useEffect(() => {
    const j = setTimeout(async () => {
      if (r === u.current)
        return;
      if (!e.settings["search.input_suggest"] || !v) {
        o([]), c(!1);
        return;
      }
      const T = Ul(r), z = T[T.length - 1];
      if (z) {
        const W = z.match(v);
        if (W) {
          const A = W[1];
          let R = W[2];
          if (!A || R === void 0) {
            o([]), c(!1);
            return;
          }
          const P = A.toLowerCase();
          R.startsWith('"') && (R = R.substring(1)), R.endsWith('"') && (R = R.substring(0, R.length - 1));
          const Z = await Zg(R, P);
          o(Z), c(Z.length > 0), k(-1);
        } else {
          const A = z.replace(/^([-!])/, "").toLowerCase();
          if (A && b) {
            const R = b.all_prefixes.filter((P) => P.startsWith(A)).map((P) => ({
              type: P,
              value: "",
              count: 0
            }));
            if (R.length > 0) {
              o(R), c(!0), k(-1);
              return;
            }
          }
          o([]), c(!1);
        }
      } else
        o([]), c(!1);
    }, 300);
    return () => clearTimeout(j);
  }, [r, e.settings["search.input_suggest"], v, b]);
  const N = p.useCallback(
    (j) => {
      var Z;
      if (!j) return;
      const T = Ul(r), W = (T.pop() || "").match(/^([-!])/), A = W ? W[1] : "", P = ((b == null ? void 0 : b.no_quote_prefixes) || []).includes(j.type);
      if (j.value === "") {
        const J = `${[...T, `${A}${j.type}:`].join(" ").trim()}`;
        s(J);
      } else {
        const J = P ? j.value : `"${j.value}"`, oe = `${[...T, `${A}${j.type}:${J}`].join(" ").trim()} `;
        s(oe), o([]), c(!1);
      }
      (Z = f.current) == null || Z.focus();
    },
    [r, b]
  ), L = (j) => {
    if (j)
      if (j.key === "Enter")
        if (et(j), i && x >= 0) {
          const T = a[x];
          T && N(T);
        } else
          D(r);
      else if (j.key === "Tab") {
        if (i && a.length > 0) {
          et(j);
          const T = x >= 0 ? x : 0, z = a[T];
          z && N(z);
        }
      } else j.key === "ArrowDown" ? i && (et(j), k((T) => Math.min(T + 1, a.length - 1))) : j.key === "ArrowUp" ? i && (et(j), k((T) => Math.max(T - 1, -1))) : j.key === "Escape" && (et(j), c(!1));
  }, $ = p.useCallback(() => {
    s(""), D("");
  }, [D]), H = p.useCallback(
    (j, T, z = !1) => {
      var K;
      if (!j) return;
      const W = Ul(r), A = W[W.length - 1] || "";
      let R = !1;
      const P = A.replace(/^([-!])/, "").toLowerCase();
      P && j.toLowerCase().startsWith(P) && (R = !0);
      const Z = A.match(/^([-!])/), J = R && Z ? Z[1] : "";
      if (R && W.pop(), z) {
        const Ye = [...W, `${J}${j}:`].filter(Boolean).join(" ");
        s(Ye), (K = f.current) == null || K.focus();
        return;
      }
      const we = ((b == null ? void 0 : b.no_quote_prefixes) || []).includes(j) ? T : `"${T}"`, B = `${J}${j}:${we}`, ae = [...W, B].filter(Boolean).join(" ");
      s(ae), D(ae);
    },
    [r, D, b]
  ), E = p.useCallback(
    (j) => {
      s(j), j || D("");
    },
    [D]
  ), O = p.useCallback(() => {
    if (r === u.current || !v) return;
    const j = Ul(r), T = j[j.length - 1];
    if (!T) return;
    const z = !!T.match(v), W = T.replace(/^([-!])/, "").toLowerCase(), A = W && (b == null ? void 0 : b.all_prefixes.some((R) => R.startsWith(W)));
    (z || A) && c(!0);
  }, [r, v, b]), M = p.useRef(null), U = p.useCallback(() => {
    M.current = setTimeout(() => c(!1), 200);
  }, []);
  return p.useEffect(() => () => {
    M.current && clearTimeout(M.current);
  }, []), {
    inputValue: r,
    setInputValue: s,
    suggestions: a,
    showSuggestions: i,
    setShowSuggestions: c,
    searchSuggestions: d,
    allKeywords: w,
    showAllKeywords: S,
    toggleShowAllKeywords: C,
    selectedIndex: x,
    setSelectedIndex: k,
    inputRef: f,
    isQueryChanged: I,
    handleSearch: D,
    handleKeyDown: L,
    applySuggestion: N,
    clearSearch: $,
    applySearchSuggestion: H,
    handleInputChange: E,
    handleInputFocus: O,
    handleInputBlur: U
  };
}, Zc = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ l.jsx(_r, { size: 12 });
    case "model":
      return /* @__PURE__ */ l.jsx(mg, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ l.jsx(Ag, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ l.jsx(fg, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ l.jsx(km, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ l.jsx(_m, { size: 12 });
    case "note":
      return /* @__PURE__ */ l.jsx(vg, { size: 12 });
    case "sort":
      return /* @__PURE__ */ l.jsx(dg, { size: 12 });
    default:
      return null;
  }
}, mw = ({
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
  applySearchSuggestion: w,
  favorites: y,
  onSelectFavorite: S,
  onEditFavorite: x,
  onDeleteFavorite: k
}) => {
  const b = (g, _, v) => /* @__PURE__ */ l.jsxs(
    "button",
    {
      type: "button",
      onClick: () => w(g.type, g.value, v === "all"),
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
        /* @__PURE__ */ l.jsx(
          "span",
          {
            style: {
              display: "flex",
              color: "var(--meld-text-secondary)"
            },
            children: Zc(g.type)
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
            children: g.type
          }
        ),
        v !== "all" && /* @__PURE__ */ l.jsx(
          "span",
          {
            style: {
              maxWidth: "200px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: g.value
          }
        )
      ]
    },
    `${v}-${g.type}:${g.value}:${_}`
  ), m = () => !e || t.length === 0 ? null : /* @__PURE__ */ l.jsx(
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
      children: t.map((g, _) => /* @__PURE__ */ l.jsx(
        "div",
        {
          onMouseDown: (v) => {
            v.preventDefault(), s(g);
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
                    children: Zc(g.type)
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
                      width: g.type.length > 8 ? "auto" : "60px",
                      flexShrink: 0
                    },
                    children: [
                      g.type,
                      ":"
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  "span",
                  {
                    style: {
                      color: g.value === It ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                      fontSize: "14px",
                      fontWeight: g.value === It ? "bold" : "normal"
                    },
                    children: g.value === It ? g.type === "tag" ? `Untagged (${It})` : `No ${g.type} (${It})` : g.value
                  }
                )
              ]
            }
          )
        },
        `${g.type}:${g.value}`
      ))
    }
  ), f = () => i.length === 0 || a && a === o ? null : /* @__PURE__ */ l.jsxs(
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
            children: i.map((g, _) => b(g, _, "quick"))
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
                  children: Array.from(new Set(c.map((g) => g.type))).map(
                    (g, _) => b({ type: g, value: "" }, _, "all")
                  )
                }
              )
            ]
          }
        )
      ]
    }
  ), u = () => y.length === 0 || a && a === o ? null : /* @__PURE__ */ l.jsxs(
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
              /* @__PURE__ */ l.jsx(yr, { size: 12, fill: "var(--meld-text-secondary)" }),
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
            children: y.map((g) => /* @__PURE__ */ l.jsx(
              xf,
              {
                fav: g,
                onSelect: S,
                onEdit: x,
                onDelete: k
              },
              g.id
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
      onMouseDown: (g) => {
        g.preventDefault();
      },
      children: [
        m(),
        f(),
        u()
      ]
    }
  );
}, fw = () => {
  const { state: e } = fe(), {
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
    inputRef: w,
    isQueryChanged: y,
    handleSearch: S,
    handleKeyDown: x,
    applySuggestion: k,
    clearSearch: b,
    applySearchSuggestion: m,
    handleInputChange: f,
    handleInputFocus: u,
    handleInputBlur: g
  } = uw(), {
    isSaving: _,
    toastMessage: v,
    toastType: C,
    editingFavorite: I,
    setEditingFavorite: D,
    editFavoriteName: N,
    setEditFavoriteName: L,
    editFavoriteQuery: $,
    setEditFavoriteQuery: H,
    handleDeleteFavorite: E,
    handleEditFavorite: O,
    handleSaveEditFavorite: M,
    handleSaveFavorite: U,
    setToastMessage: j
  } = wf(), T = async () => {
    const P = e.favorites.some((J) => J.query === e.searchQuery);
    await U() && j(
      P ? "Removed from favorites." : "Added to favorites.",
      "info"
    );
  };
  Te({
    onEscape: () => D(null),
    enabled: !!I
  });
  const z = p.useRef(null), W = p.useRef(!1);
  p.useEffect(() => {
    I && z.current && z.current.focus();
  }, [I]);
  const A = (P) => {
    P.target === P.currentTarget && (W.current = !0);
  }, R = (P) => {
    P.target === P.currentTarget && W.current && D(null), W.current = !1;
  };
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: "meld-search-container",
      style: { display: "flex", flexDirection: "column", gap: "8px", flex: 1 },
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: "meld-search-bar-wrapper", style: { position: "relative", width: "100%" }, children: [
          v && /* @__PURE__ */ l.jsx(
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
              children: v
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
                    onClick: () => S(t),
                    style: {
                      background: y ? "var(--meld-accent-color, #3b82f6)" : "var(--comfy-input-bg-active, rgba(255,255,255,0.03))",
                      border: y ? "1px solid var(--meld-border-color, rgba(255,255,255,0.2))" : "1px solid transparent",
                      cursor: "pointer",
                      padding: "6px 10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "10px",
                      flexShrink: 0,
                      borderRadius: "4px",
                      transition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                      boxShadow: y ? "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))" : "none"
                    },
                    onMouseEnter: (P) => {
                      P.currentTarget.style.transform = "translateY(-1px)", y ? (P.currentTarget.style.filter = "brightness(1.15)", P.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : P.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                    },
                    onMouseLeave: (P) => {
                      P.currentTarget.style.transform = "none", y ? (P.currentTarget.style.filter = "none", P.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : P.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                    },
                    onMouseDown: (P) => {
                      P.currentTarget.style.transform = "translateY(1px)", P.currentTarget.style.boxShadow = "none";
                    },
                    onMouseUp: (P) => {
                      P.currentTarget.style.transform = "translateY(-1px)";
                    },
                    title: "Search (Enter)",
                    children: [
                      /* @__PURE__ */ l.jsx(
                        vn,
                        {
                          size: 16,
                          color: y ? "var(--meld-text-color, #fff)" : "var(--meld-text-secondary)",
                          style: {
                            transition: "color 0.2s",
                            filter: y ? "drop-shadow(0 1px 2px var(--meld-shadow-color, rgba(0,0,0,0.2)))" : "none"
                          }
                        }
                      ),
                      y && /* @__PURE__ */ l.jsx(
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
                    ref: w,
                    type: "text",
                    value: t,
                    onChange: (P) => f(P.target.value),
                    onKeyDown: x,
                    onBlur: g,
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
                    "aria-label": e.favorites.some((P) => P.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
                    title: e.favorites.some((P) => P.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                      yr,
                      {
                        size: 16,
                        color: e.favorites.some((P) => P.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                        fill: e.favorites.some((P) => P.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                      }
                    )
                  }
                ),
                t && /* @__PURE__ */ l.jsx(
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
                    children: /* @__PURE__ */ l.jsx(he, { size: 16, color: "var(--meld-text-secondary)" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ l.jsx(
            mw,
            {
              showSuggestions: s,
              suggestions: r,
              selectedIndex: d,
              setSelectedIndex: h,
              applySuggestion: k,
              inputValue: t,
              searchQuery: e.searchQuery,
              searchSuggestions: a,
              allKeywords: o,
              showAllKeywords: i,
              toggleShowAllKeywords: c,
              applySearchSuggestion: m,
              favorites: e.favorites,
              onSelectFavorite: (P) => {
                n(P), S(P);
              },
              onEditFavorite: O,
              onDeleteFavorite: E
            }
          )
        ] }),
        I && ye.createPortal(
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-modal-overlay meld-search-edit-modal-overlay",
              onMouseDown: A,
              onMouseUp: R,
              children: /* @__PURE__ */ l.jsxs(
                "div",
                {
                  className: "meld-modal-content meld-modal-content--small",
                  onClick: (P) => P.stopPropagation(),
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
                            /* @__PURE__ */ l.jsx(yr, { size: 20, color: "var(--meld-accent-color)" }),
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
                          children: /* @__PURE__ */ l.jsx(he, { size: 20 })
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
                                    ref: z,
                                    type: "text",
                                    value: N,
                                    onChange: (P) => L(P.target.value),
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
                                    onKeyDown: (P) => {
                                      P.key === "Enter" && (et(P), M()), P.key === "Escape" && (et(P), D(null));
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
                                    onChange: (P) => H(P.target.value),
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
                                    onKeyDown: (P) => {
                                      P.key === "Enter" && !P.shiftKey && (et(P), M()), P.key === "Escape" && (et(P), D(null));
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
}, pw = ({ onClose: e, onSearch: t }) => {
  const [n, r] = p.useState([]), [s, a] = p.useState(!0), [o, i] = p.useState(""), [c, d] = p.useState(""), [h, w] = p.useState(!1), [y, S] = p.useState(null), [x, k] = p.useState(""), [b, m] = p.useState(!1), f = p.useRef(null), u = p.useCallback(async () => {
    a(!0);
    try {
      const L = await _i();
      r(L);
    } catch (L) {
      F.error("Failed to fetch tags:", L);
    } finally {
      a(!1);
    }
  }, []);
  p.useEffect(() => {
    u();
  }, [u]), p.useEffect(() => {
    y !== null && f.current && (f.current.focus(), f.current.select());
  }, [y]);
  const g = async (L) => {
    L.preventDefault();
    const $ = c.trim();
    if (!(!$ || h)) {
      if ($.toLowerCase() === It) {
        alert(`Tag name '${It}' is reserved for search and cannot be used.`);
        return;
      }
      if (n.some((H) => H.name.toLowerCase() === $.toLowerCase())) {
        alert(`Tag "${$}" already exists.`);
        return;
      }
      w(!0);
      try {
        await vy($), d(""), await u();
      } catch (H) {
        F.error("Failed to add tag:", H);
      } finally {
        w(!1);
      }
    }
  }, _ = async (L, $) => {
    if (confirm(`Are you sure you want to delete tag "${$}"?`))
      try {
        await wy(L), await u();
      } catch (H) {
        F.error("Failed to delete tag:", H);
      }
  }, v = (L) => {
    S(L.id), k(L.name);
  }, C = () => {
    S(null), k("");
  }, I = async (L) => {
    L.preventDefault();
    const $ = x.trim();
    if (!$ || y === null || b) return;
    if ($.toLowerCase() === It) {
      alert(`Tag name '${It}' is reserved for search and cannot be used.`);
      return;
    }
    const H = n.find((E) => E.id === y);
    if (H && H.name === $) {
      C();
      return;
    }
    if (n.some((E) => E.id !== y && E.name.toLowerCase() === $.toLowerCase())) {
      alert(`Tag "${$}" already exists.`);
      return;
    }
    m(!0);
    try {
      await xy(y, $), C(), await u();
    } catch (E) {
      F.error("Failed to rename tag:", E), alert(E instanceof Error ? E.message : "Failed to rename tag");
    } finally {
      m(!1);
    }
  }, D = (L) => {
    t(`tag:${L}`);
  }, N = p.useMemo(() => n.filter((L) => L.name.toLowerCase().includes(o.toLowerCase())), [n, o]);
  return /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ l.jsx(_r, { size: 16 }),
        /* @__PURE__ */ l.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ l.jsx(he, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ l.jsxs("form", { className: "meld-tag-add-form", onSubmit: g, children: [
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
        /* @__PURE__ */ l.jsx(vn, { size: 14, className: "meld-tag-search-icon" }),
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
      s ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ l.jsx("div", { className: "meld-tag-list", children: N.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : N.map((L) => /* @__PURE__ */ l.jsx("div", { className: "meld-tag-item", children: y === L.id ? /* @__PURE__ */ l.jsxs("form", { className: "meld-tag-rename-form", onSubmit: I, children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "text",
            ref: f,
            className: "meld-tag-rename-input",
            value: x,
            onChange: ($) => k($.target.value),
            onKeyDown: ($) => $.key === "Escape" && C()
          }
        ),
        /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "submit",
            className: "meld-tag-item__btn meld-tag-item__btn--save",
            title: "Save",
            disabled: b || !x.trim(),
            children: /* @__PURE__ */ l.jsx(st, { size: 14 })
          }
        ),
        /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "button",
            className: "meld-tag-item__btn",
            title: "Cancel",
            onClick: C,
            disabled: b,
            children: /* @__PURE__ */ l.jsx(he, { size: 14 })
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
              children: /* @__PURE__ */ l.jsx(vn, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => v(L),
              children: /* @__PURE__ */ l.jsx(jm, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => _(L.id, L.name),
              children: /* @__PURE__ */ l.jsx(qt, { size: 14 })
            }
          )
        ] })
      ] }) }, L.id)) })
    ] })
  ] });
}, ba = 56, _f = (e, t) => {
  const n = p.useCallback(async (s) => wi(s), []), r = p.useCallback(
    (s) => {
      const a = t["gallery.lineage_max_depth"];
      if (a === 0) return [];
      if (s.ancestors && s.ancestors.length > 0)
        return s.ancestors.slice(0, a).map((h) => ({
          id: h.id,
          imgSrc: wt(h, ba)
        }));
      const o = s.parent_id;
      if (!o || !s.parent_filename) return [];
      const i = e.find((h) => h.id === o);
      let c = null;
      if (i ? c = wt(i, ba) : c = wt(
        {
          filename: s.parent_filename,
          subfolder: s.parent_subfolder || "",
          type: s.parent_type
        },
        ba
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
}, Jc = ({
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
}, hw = ({
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
  handlePrevious: w,
  handleEditTags: y,
  handleRestore: S,
  fetchLineage: x,
  restoreImages: k,
  bulkUpdateImageTags: b
}) => {
  const [m, f] = p.useState(null), [u, g] = p.useState(
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
        const H = e.viewScope === "trash", E = /* @__PURE__ */ new Set([n.id]);
        let O = [];
        if ($ === "lineage") {
          O = await x(n.id);
          for (const M of O)
            E.add(M.id);
        }
        if (!d.isMountedRef.current || d.viewerImageIdRef.current === null || (await _o(Array.from(E), H), !d.isMountedRef.current || d.viewerImageIdRef.current === null))
          return;
        if (Jc({
          currentThumbnails: s,
          currentIndex: a,
          removedIds: E,
          viewerMode: o,
          viewerLightTableSlotId: e.viewerLightTableSlotId,
          dispatch: t,
          removeImageIds: Array.from(E)
        }), !H) {
          const M = [
            ...s,
            ...O,
            ...i,
            ...c
          ], U = /* @__PURE__ */ new Map();
          for (const T of M)
            U.set(T.id, T);
          const j = Array.from(E).map((T) => {
            const z = U.get(T);
            return z || {
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
          f(j), g(null);
        }
      } catch (H) {
        t({
          type: "SET_ERROR",
          payload: H instanceof Error ? H.message : String(H)
        });
      }
    },
    [
      a,
      s,
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
  ), v = p.useCallback(() => {
    n && y(n);
  }, [y, n]), C = p.useCallback(async () => {
    n && (s.length > 1 ? h() : t({ type: "CLOSE_VIEWER" }), await S(n));
  }, [s.length, t, h, S, n]), I = p.useCallback(async () => {
    if (!m || m.length === 0) return;
    const L = m.map(($) => $.id);
    try {
      const $ = await k(L);
      if (!d.isMountedRef.current) return;
      const H = $.restored_ids || L, E = new Set(H), O = m.filter((U) => E.has(U.id));
      if (O.length > 0 && t({ type: "ADD_IMAGES", payload: O }), e.viewScope === "trash" && t({ type: "REMOVE_IMAGES", payload: H }), f(null), !d.isMountedRef.current) return;
      const M = H[0];
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
    m,
    d.isMountedRef,
    k,
    e.viewScope,
    e.viewerLightTableSlotId,
    o
  ]), D = p.useCallback(async () => {
    if (m && m.length > 0) {
      await I();
      return;
    }
    if (!u || u.type !== "tags")
      return;
    const { imageId: L, addTags: $, removeTags: H } = u;
    try {
      await b([L], $, H);
      const E = (o === "lineage" ? i : c).find(
        (O) => O.id === L
      );
      if (E) {
        const O = [...E.tags];
        for (const U of $)
          O.includes(U) || O.push(U);
        const M = O.filter((U) => !H.includes(U));
        t({
          type: "UPDATE_IMAGE",
          payload: { ...E, tags: M }
        }), t({
          type: "OPEN_VIEWER",
          payload: {
            id: L,
            mode: o,
            ...o === "lighttable" && e.viewerLightTableSlotId ? { slotId: e.viewerLightTableSlotId } : {}
          }
        });
      }
      g(null);
    } catch (E) {
      t({
        type: "SET_ERROR",
        payload: E instanceof Error ? E.message : String(E)
      });
    }
  }, [
    t,
    I,
    c,
    m,
    u,
    i,
    b,
    e.viewerLightTableSlotId,
    o
  ]), N = p.useCallback(
    async (L) => {
      if (!L || typeof L != "string" || !n) return;
      const $ = n.id, H = [...n.tags], E = Gy(L, n), { addTags: O, removeTags: M, isDeleted: U, moveNext: j, movePrev: T, sendToLtSlot: z } = E;
      if (z) {
        const W = se.getState(), A = W.slots.find(
          (R) => R.id.toLowerCase() === z.toLowerCase() || R.label.toLowerCase() === z.toLowerCase()
        );
        A ? (W.addToBucket(A.id, String($), n), W.showToast(`Sent to ${A.label}`), U || Jc({
          currentThumbnails: s,
          currentIndex: a,
          removedIds: /* @__PURE__ */ new Set([$]),
          viewerMode: o,
          viewerLightTableSlotId: e.viewerLightTableSlotId,
          dispatch: t,
          removeImageIds: [$]
        })) : (W.showToast(`Error: Light Table slot "${z}" not found`, "error"), F.warn(`Attempted to send to non-existent LT slot: ${z}`));
      }
      if (O.length > 0 || M.length > 0)
        try {
          await b([$], O, M);
          const W = [...H];
          for (const R of O)
            W.includes(R) || W.push(R);
          const A = W.filter((R) => !M.includes(R));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...n, id: $, tags: A }
          }), g({
            type: "tags",
            imageId: $,
            addTags: [...M],
            removeTags: [...O]
          }), f(null);
        } catch (W) {
          F.error("Failed to update tags via shortcut:", W), t({
            type: "SET_ERROR",
            payload: W instanceof Error ? W.message : String(W)
          });
        }
      U ? await _(!0) : j ? h() : T && await w();
    },
    [
      a,
      s,
      t,
      b,
      _,
      h,
      w,
      n,
      e.viewerLightTableSlotId,
      o
    ]
  );
  return {
    lastDeletedImages: m,
    setLastDeletedImages: f,
    handleDelete: _,
    handleTagEditAction: v,
    handleRestoreAction: C,
    handleUndo: D,
    executeCommand: N
  };
}, gw = ({
  overlayRef: e,
  settings: t,
  setShowDetails: n
}) => {
  const [r, s] = p.useState(!1), a = p.useCallback(
    (o) => {
      o && typeof o.stopPropagation == "function" && o.stopPropagation();
      const i = e.current;
      i && (document.fullscreenElement ? document.exitFullscreen() : i.requestFullscreen().catch((c) => {
        F.error(`Error attempting to enable full-screen mode: ${c.message}`);
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
}, yw = ({
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
  handleTagEditAction: w,
  handleRestoreAction: y,
  executeCommand: S,
  setShowDetails: x,
  setActiveShortcutKey: k
}) => {
  const b = p.useCallback(
    (m) => {
      if (!(m.target instanceof HTMLElement))
        return;
      const f = m.target, u = f.tagName === "INPUT" || f.tagName === "TEXTAREA" || f.isContentEditable;
      if (u && m.key !== "Escape") {
        m.key === "Enter" && (m.ctrlKey || m.metaKey) && m.preventDefault();
        return;
      }
      if (e === null || t !== "none")
        return;
      const g = m.key === "Delete" || m.key === "Backspace", _ = m.key === "ArrowRight" || m.key === "ArrowLeft" || m.key === "ArrowDown" || m.key === "ArrowUp", v = ["f", "F", "i", "I", "t", "T", "r", "R", "Enter"].includes(m.key), C = m.key === "Escape", I = (m.ctrlKey || m.metaKey) && (m.key === "z" || m.key === "Z" || m.code === "KeyZ"), D = /^[0-9]$/.test(m.key) && !m.ctrlKey && !m.metaKey && !m.altKey && m.code !== "KeyZ";
      if (g || _ || v || C || I || D)
        if (!u || C)
          fl(m);
        else
          return;
      else
        return;
      if (C)
        document.fullscreenElement ? document.exitFullscreen() : s({ type: "CLOSE_VIEWER" });
      else if (_)
        m.key === "ArrowRight" || m.key === "ArrowDown" ? i() : c();
      else if (v && (m.key === "f" || m.key === "F" || m.key === "Enter"))
        o(m);
      else if (v && (m.key === "i" || m.key === "I"))
        x((N) => !N);
      else if (v && (m.key === "t" || m.key === "T"))
        w();
      else if (v && (m.key === "r" || m.key === "R") && n === "trash")
        y();
      else if (g)
        d();
      else if (I)
        h();
      else if (D && !u) {
        const N = `viewer.shortcut.${m.key}`, L = r[N];
        typeof L == "string" && L && (k(m.key), setTimeout(() => {
          a.current && k(null);
        }, 500), S(L));
      }
    },
    [
      t,
      s,
      S,
      d,
      i,
      c,
      y,
      w,
      h,
      a,
      k,
      x,
      r,
      o,
      n,
      e
    ]
  );
  Ks({
    enabled: e !== null,
    onKeyDown: b
  });
}, vw = ({
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
      o(!0), wi(t).then((h) => {
        !c && s.current && d === i.current && r({ type: "SET_LINEAGE", payload: h });
      }).catch((h) => {
        F.error("Failed to fetch lineage:", h);
      }).finally(() => {
        !c && s.current && d === i.current && o(!1);
      });
    }
    return () => {
      c = !0;
    };
  }, [r, s, n, t, e]), { isLoadingLineage: a };
}, ww = ({
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
  const w = a === "lighttable" ? r : void 0, y = p.useCallback(() => {
    e({
      type: "NEXT_IMAGE",
      payload: { isFullscreen: t, currentList: w }
    });
  }, [w, e, t]), S = p.useCallback(async () => {
    const x = t ? n["fullscreen.loop"] : n["viewer.loop"];
    if (s === 0 && a === "gallery" && o.hasMore && !c && x) {
      d(!0);
      try {
        const k = o.limit, b = o.total, m = Math.max(0, b - k), f = await rs(m, k, i);
        if (!h.isMountedRef.current) return;
        const u = ns(f, {
          total: o.total,
          offset: m,
          limit: k
        });
        if (e({ type: "APPEND_IMAGES", payload: u }), h.viewerImageIdRef.current === null) return;
        if (u.images.length > 0) {
          const g = u.images.at(-1);
          if (!g) return;
          e({
            type: "OPEN_VIEWER",
            payload: { id: g.id, mode: "gallery" }
          });
        }
      } catch (k) {
        F.error("Failed to jump to end:", k);
      } finally {
        d(!1);
      }
    } else
      e({
        type: "PREVIOUS_IMAGE",
        payload: { isFullscreen: t, currentList: w }
      });
  }, [
    w,
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
  return { handleNext: y, handlePrevious: S };
};
function xw(e) {
  const { ids: t, index: n, loopEnabled: r, hasMore: s } = e;
  if (t.length === 0 || n < 0 || n >= t.length)
    return { prevId: null, nextId: null };
  const a = n === 0, i = n === t.length - 1 ? s || !r ? null : t[0] ?? null : t[n + 1] ?? null;
  return { prevId: a ? s || !r ? null : t[t.length - 1] ?? null : t[n - 1] ?? null, nextId: i };
}
const _w = ({
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
    const h = t.map((b) => b.id), w = h.indexOf(e);
    if (w === -1) return;
    const y = r ? s["fullscreen.loop"] : s["viewer.loop"], { prevId: S, nextId: x } = xw({
      ids: h,
      index: w,
      loopEnabled: y,
      hasMore: a && o === "gallery"
    }), k = setTimeout(() => {
      const b = [S, x].filter(
        (m) => m !== null && m !== e
      );
      b.length !== 0 && Promise.allSettled(b.map((m) => d(m))).then((m) => {
        for (const f of m)
          f.status === "rejected" && F.warn("Prefetching adjacent image details failed", f.reason);
      });
    }, 50);
    return () => clearTimeout(k);
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
    const h = [n + 1, n + 2, n - 1], w = setTimeout(() => {
      for (const y of h)
        if (y >= 0 && y < t.length) {
          const S = t[y];
          if (!S) continue;
          const x = new Image();
          x.src = xi(S);
        }
    }, 150);
    return () => clearTimeout(w);
  }, [n, t, e]);
};
function kw(e) {
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
const bw = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  var _l;
  const { viewerImageId: s, images: a, viewerMode: o, lineageImages: i, settings: c } = e, {
    restoreImages: d,
    bulkUpdateImageTags: h,
    handleEditTags: w,
    handleEditNotes: y,
    handleRestore: S,
    handleUpdateUserNotes: x,
    handleRestoreWorkflow: k,
    handleAddUnifiedLoader: b,
    handleSendToWorkflow: m,
    handleRunWithWorkflow: f,
    handleRunWithMask: u,
    handleEditSource: g
  } = Hs(e, t), { getParentChain: _, fetchLineage: v } = _f(a, c), [C, I] = p.useState(!1), [D, N] = p.useState(c["viewer.show_details_by_default"]), [L, $] = p.useState(null), H = L ?? c["viewer.show_thumbnails"], [E, O] = p.useState(!1), [M, U] = p.useState(null), j = p.useRef(null), T = {
    isMountedRef: p.useRef(!0),
    viewerImageIdRef: p.useRef(s)
  };
  p.useEffect(() => (T.isMountedRef.current = !0, () => {
    T.isMountedRef.current = !1;
  }), [T.isMountedRef]), p.useEffect(() => {
    T.viewerImageIdRef.current = s;
  }, [T.viewerImageIdRef, s]);
  const z = p.useMemo(() => {
    const Ne = e.searchQuery.trim() !== "";
    if (o === "lighttable" && e.viewerLightTableSlotId) {
      const mt = se.getState(), bt = mt.buckets[e.viewerLightTableSlotId] || [], Ft = new Map(a.map((G) => [G.id, G])), V = new Map(i.map((G) => [G.id, G]));
      return bt.map((G) => {
        const ne = Number.parseInt(G, 10);
        return Ft.get(ne) || V.get(ne) || mt.images[G] || kw(ne);
      });
    }
    return o === "lineage" ? i : a.filter(
      (mt) => mt.exists !== !1 && (c["gallery.show_parent_images"] || Ne || !mt.has_children)
    );
  }, [
    o,
    e.viewerLightTableSlotId,
    i,
    a,
    c,
    e.searchQuery
  ]), W = s === null ? -1 : z.findIndex((Ne) => Ne.id === s), R = (o === "lineage" && i.length > 0 ? i : o === "lighttable" ? z : a).find((Ne) => Ne.id === s) || (s === ((_l = e.viewerFallbackImage) == null ? void 0 : _l.id) ? e.viewerFallbackImage : void 0), { isFullscreen: P, toggleFullscreen: Z } = gw({
    overlayRef: j,
    settings: c,
    setShowDetails: N
  }), { handleNext: J, handlePrevious: oe } = ww({
    dispatch: t,
    isFullscreen: P,
    settings: c,
    currentThumbnails: z,
    currentIndex: W,
    viewerMode: o,
    pagination: e.pagination,
    searchQuery: e.searchQuery,
    isJumping: E,
    setIsJumping: O,
    mountRefs: T
  }), {
    lastDeletedImages: me,
    setLastDeletedImages: we,
    handleDelete: B,
    handleTagEditAction: ae,
    handleRestoreAction: K,
    handleUndo: Ye,
    executeCommand: kt
  } = hw({
    state: e,
    dispatch: t,
    image: R,
    isFullscreen: P,
    currentThumbnails: z,
    currentIndex: W,
    viewerMode: o,
    lineageImages: i,
    images: a,
    mountRefs: T,
    handleNext: J,
    handlePrevious: oe,
    handleEditTags: w,
    handleRestore: S,
    fetchLineage: v,
    restoreImages: d,
    bulkUpdateImageTags: h
  }), { isLoadingLineage: Xe } = vw({
    viewerMode: o,
    viewerImageId: s,
    lineageLength: i.length,
    dispatch: t,
    isMountedRef: T.isMountedRef
  });
  yw({
    viewerImageId: s,
    activeModalType: e.activeModal.type,
    viewScope: e.viewScope,
    settings: c,
    dispatch: t,
    isMountedRef: T.isMountedRef,
    toggleFullscreen: Z,
    handleNext: J,
    handlePrevious: oe,
    handleDelete: () => {
      B();
    },
    handleUndo: Ye,
    handleTagEditAction: ae,
    handleRestoreAction: K,
    executeCommand: kt,
    setShowDetails: N,
    setActiveShortcutKey: U
  }), p.useEffect(() => {
    s !== null && r(s).catch((Ne) => {
      F.error("Failed to fetch full image details for viewer:", Ne);
    });
  }, [r, s]), _w({
    viewerImageId: s,
    currentThumbnails: z,
    currentIndex: W,
    isFullscreen: P,
    settings: c,
    hasMore: e.pagination.hasMore,
    viewerMode: o,
    isLoading: e.isLoading,
    loadMoreImages: n,
    fetchFullImageDetails: r
  });
  const Xt = p.useMemo(() => {
    if (!H || W === -1) return [];
    const Ne = c["viewer.thumbnail_window_size"], mt = Math.floor(Ne / 2);
    let bt = Math.max(0, W - mt);
    const Ft = Math.min(z.length, bt + Ne);
    return Ft === z.length && (bt = Math.max(0, Ft - Ne)), z.slice(bt, Ft).map((V, G) => ({
      img: V,
      absIndex: bt + G
    }));
  }, [z, W, c, H]), kr = p.useMemo(() => R ? _(R) : [], [_, R]);
  return p.useEffect(() => {
    var Ne, mt;
    if (s !== null) {
      if (H) {
        const bt = document.querySelector(".meld-viewer-thumbnail--active");
        bt && bt.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((Ne = document.activeElement) == null ? void 0 : Ne.tagName) === "CANVAS" && document.activeElement.blur(), (mt = j.current) == null || mt.focus();
    }
  }, [H, s]), {
    isFullscreen: P,
    showDetails: D,
    setShowDetails: N,
    showThumbnails: H,
    setShowThumbnailsOverride: $,
    isLoadingLineage: Xe,
    isJumping: E,
    isMenuOpen: C,
    setIsMenuOpen: I,
    activeShortcutKey: M,
    lastDeletedImages: me,
    setLastDeletedImages: we,
    overlayRef: j,
    handleNext: J,
    handlePrevious: oe,
    handleDelete: B,
    handleUpdateUserNotes: x,
    handleEditNotes: () => R && y(R),
    handleTagEdit: ae,
    handleRestore: K,
    handleUndo: Ye,
    handleRestoreWorkflow: async () => {
      if (!R) return;
      await k(R) && t({ type: "CLOSE_VIEWER" });
    },
    handleAddUnifiedLoader: async () => {
      if (!R) return;
      await b(R) && t({ type: "CLOSE_VIEWER" });
    },
    handleSendToWorkflow: () => {
      if (!R) return;
      m(R) && t({ type: "CLOSE_VIEWER" });
    },
    handleRunWithWorkflow: () => R && f(R),
    handleRunWithMask: (Ne) => R && u(R, Ne),
    handleEditSource: () => R && g(R),
    toggleFullscreen: Z,
    currentIndex: W,
    currentThumbnails: z,
    image: R,
    windowedThumbnails: Xt,
    parentChain: kr
  };
}, ji = ({
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
  onEditNotes: w,
  onDelete: y,
  onRestore: S,
  showRestore: x,
  deleteLabel: k,
  showQuickShortcuts: b = !0,
  variant: m = "default",
  iconSize: f = 16,
  buttonClassName: u = ""
}) => {
  const [g, _] = p.useState("left");
  p.useEffect(() => {
    e && n.current && (n.current.getBoundingClientRect().left < 200 ? _("right") : _("left"));
  }, [e, n]);
  const v = (D) => {
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
        return w;
      case "restore_image":
        return S;
      case "delete_or_trash":
        return y;
      default:
        return null;
    }
  }, C = [
    r["gallery.quick_shortcut.1"],
    r["gallery.quick_shortcut.2"],
    r["gallery.quick_shortcut.3"]
  ].filter((D) => D && D !== ""), I = [
    "meld-image-card__menu-container",
    m === "thumbnail_overlay_top_right" && "meld-image-card__menu-container--thumbnail-overlay"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ l.jsxs("div", { className: I, ref: n, children: [
    /* @__PURE__ */ l.jsx(
      "button",
      {
        type: "button",
        className: `meld-image-card__menu-btn ${u}`,
        onClick: (D) => {
          D.stopPropagation(), t(!e);
        },
        title: "Menu",
        children: /* @__PURE__ */ l.jsx(Ng, { size: f })
      }
    ),
    b && C.map((D, N) => {
      const L = nf.find((E) => E.id === D);
      if (!L || !L.icon) return null;
      const $ = L.icon, H = v(D);
      return !H || D === "restore_image" && !x ? null : /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: `meld-image-card__menu-btn ${u}`,
          onClick: (E) => {
            E.stopPropagation(), H();
          },
          title: L.label,
          children: /* @__PURE__ */ l.jsx($, { size: f })
        },
        `${D}-${N}`
      );
    }),
    e && /* @__PURE__ */ l.jsx(
      "div",
      {
        className: `meld-image-card__menu ${g === "right" ? "meld-image-card__menu--right" : ""}`,
        children: [
          {
            id: "add_unified_loader",
            label: "Add Unified Loader",
            icon: Hm,
            handler: s
          },
          {
            id: "send_to_workflow",
            label: "Send to Workflow",
            icon: Ym,
            handler: o
          },
          {
            id: "send_to_workflow_mask",
            label: "Send to Workflow (Mask)",
            icon: Xm,
            handler: () => c("apply")
          },
          {
            id: "queue_workflow",
            label: "Queue Workflow",
            icon: Gm,
            handler: i
          },
          {
            id: "queue_workflow_mask",
            label: "Queue Workflow (Mask)",
            icon: qm,
            handler: () => c("run")
          },
          {
            id: "restore_full_workflow",
            label: "Restore Full Workflow",
            icon: Km,
            handler: a
          },
          {
            id: "edit_tags",
            label: "Edit Tags",
            icon: Jm,
            handler: h
          },
          {
            id: "edit_notes",
            label: "Edit Notes",
            icon: ef,
            handler: w
          },
          {
            id: "edit_source_image",
            label: "Edit Source Image",
            icon: Zm,
            handler: d
          },
          ...x ? [
            {
              id: "restore_image",
              label: "Restore Image",
              icon: tf,
              handler: S,
              color: "var(--meld-accent-color)"
            }
          ] : [],
          {
            id: "delete_or_trash",
            label: k,
            icon: qt,
            handler: y,
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
}, Sw = ({
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
}) }) : null, jw = ({
  image: e,
  isFullscreen: t,
  settings: n,
  showIcons: r,
  parentChain: s,
  dispatch: a,
  onEditNotes: o
}) => {
  const [i, c] = p.useState("idle"), [d, h] = p.useState(null), w = p.useRef(null), y = p.useCallback(async (_, v) => {
    try {
      await navigator.clipboard.writeText(_), w.current && (clearTimeout(w.current), w.current = null), h(v), w.current = setTimeout(() => {
        h(null), w.current = null;
      }, 2e3);
    } catch {
    }
  }, []);
  p.useEffect(() => (c("idle"), h(null), () => {
    w.current && (clearTimeout(w.current), w.current = null);
  }), []);
  const S = t ? n["fullscreen.details.show_user_notes"] : n["viewer.details.show_user_notes"], x = S === "always" || S === "if_present" && e.user_notes, [k, b] = p.useState([]), [m, f] = p.useState(!1), u = t ? n["fullscreen.details.show_core_prompt"] : n["viewer.details.show_core_prompt"], g = t ? n["fullscreen.details.core_prompt_count"] : n["viewer.details.core_prompt_count"];
  return p.useEffect(() => {
    if (!u) {
      f(!1), b([]);
      return;
    }
    const _ = Array.isArray(e.positive_prompt_keywords) && e.positive_prompt_keywords.length > 0 ? e.positive_prompt_keywords : [], v = Array.from(new Set(_));
    if (v.length === 0) {
      f(!1), b([]);
      return;
    }
    const C = new AbortController();
    return (async () => {
      f(!0);
      try {
        const { fetchAnalyticsCounts: D } = await Promise.resolve().then(() => fv), N = await D("positive_prompts", v, {
          signal: C.signal
        });
        if (C.signal.aborted) {
          f(!1), b([]);
          return;
        }
        const L = v.map(($) => ({
          name: $,
          count: N[$] ?? 0
        })).sort(($, H) => $.count - H.count);
        b(L.slice(0, g));
      } catch (D) {
        if (D instanceof Error && D.name === "AbortError") {
          f(!1), b([]);
          return;
        }
        F.error("Failed to fetch core prompt counts", D), f(!1), b([]);
      } finally {
        C.signal.aborted || f(!1);
      }
    })(), () => {
      C.abort(), f(!1), b([]);
    };
  }, [e.positive_prompt_keywords, u, g]), /* @__PURE__ */ l.jsxs(
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
                  const v = (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename;
                  y(v, "filepath");
                },
                children: d === "filepath" ? /* @__PURE__ */ l.jsx(st, { size: 16 }) : /* @__PURE__ */ l.jsx(jt, { size: 16 })
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
                  _.stopPropagation(), y(`${e.width} x ${e.height} px`, "dimensions");
                },
                children: d === "dimensions" ? /* @__PURE__ */ l.jsx(st, { size: 16 }) : /* @__PURE__ */ l.jsx(jt, { size: 16 })
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
                  _.stopPropagation(), y(new Date(e.created_at * 1e3).toLocaleString(), "created_at");
                },
                children: d === "created_at" ? /* @__PURE__ */ l.jsx(st, { size: 16 }) : /* @__PURE__ */ l.jsx(jt, { size: 16 })
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
                  const v = e.deleted_at;
                  v && y(new Date(v * 1e3).toLocaleString(), "deleted_at");
                },
                children: d === "deleted_at" ? /* @__PURE__ */ l.jsx(st, { size: 16 }) : /* @__PURE__ */ l.jsx(jt, { size: 16 })
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
                  const v = e.model_name;
                  v && y(v, "model");
                },
                children: d === "model" ? /* @__PURE__ */ l.jsx(st, { size: 16 }) : /* @__PURE__ */ l.jsx(jt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-value", children: e.model_name })
        ] }),
        (t ? n["fullscreen.details.show_source"] : n["viewer.details.show_source"]) && s.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: "Source" }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-tags", children: /* @__PURE__ */ l.jsx("div", { className: "meld-lineage-thumbs", children: s.map(
            (_, v) => _.imgSrc && /* @__PURE__ */ l.jsx(
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
                      id: _.id || e.id,
                      mode: "lineage"
                    }
                  });
                },
                title: v === 0 ? "Source" : v === 1 ? "Grand-Source" : `Ancestor (S${v + 1})`,
                "aria-label": v === 0 ? "View source image" : v === 1 ? "View grand-source image" : `View ancestor image (S${v + 1})`,
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
              _.id || v
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
                  _.stopPropagation(), y(e.positive_prompt || e.positive || "", "positive");
                },
                children: d === "positive" ? /* @__PURE__ */ l.jsx(st, { size: 16 }) : /* @__PURE__ */ l.jsx(jt, { size: 16 })
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
        u && (m || k.length > 0) && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-label", children: [
              "Core Prompt",
              m && /* @__PURE__ */ l.jsx("span", { className: "meld-notes__status", role: "status", "aria-live": "polite", children: "Loading..." })
            ] }),
            !m && k.length > 0 && /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy core prompt",
                onClick: (_) => {
                  _.stopPropagation(), y(k.map((v) => v.name).join(", "), "core_prompt");
                },
                children: d === "core_prompt" ? /* @__PURE__ */ l.jsx(st, { size: 16 }) : /* @__PURE__ */ l.jsx(jt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-tags", children: k.map((_, v) => /* @__PURE__ */ l.jsxs(
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
            `${_.name}-${v}`
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
                  _.stopPropagation(), y(e.negative_prompt || e.negative || "", "negative");
                },
                children: d === "negative" ? /* @__PURE__ */ l.jsx(st, { size: 16 }) : /* @__PURE__ */ l.jsx(jt, { size: 16 })
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
                  var v;
                  _.stopPropagation(), y(((v = e.tags) == null ? void 0 : v.join(", ")) ?? "", "tags");
                },
                children: d === "tags" ? /* @__PURE__ */ l.jsx(st, { size: 16 }) : /* @__PURE__ */ l.jsx(jt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-tags", children: e.tags.map((_) => /* @__PURE__ */ l.jsx("span", { className: "meld-viewer-details-tag", children: _ }, _)) })
        ] }),
        x && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item meld-viewer-details-item--notes", children: [
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
                  _.stopPropagation(), y(e.user_notes || "", "notes");
                },
                children: d === "notes" ? /* @__PURE__ */ l.jsx(st, { size: 16 }) : /* @__PURE__ */ l.jsx(jt, { size: 16 })
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
}, kf = p.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r,
    viewerMode: s,
    lightTableSlotId: a
  }) => {
    const o = e.id === t, i = typeof n.parent_id == "number" && n.parent_id === e.id, c = typeof e.parent_id == "number" && e.parent_id === n.id, d = wt(e, 64);
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
              children: i ? /* @__PURE__ */ l.jsx(km, { size: 12 }) : /* @__PURE__ */ l.jsx(_m, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
kf.displayName = "ThumbnailItem";
const Cw = ({
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
    kf,
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
  o === "gallery" && a && /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ l.jsx(gr, { className: "animate-spin", size: 20 }) })
] }) });
function Ew() {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = fe(), {
    isFullscreen: s,
    showDetails: a,
    setShowDetails: o,
    showThumbnails: i,
    setShowThumbnailsOverride: c,
    isLoadingLineage: d,
    isJumping: h,
    isMenuOpen: w,
    setIsMenuOpen: y,
    activeShortcutKey: S,
    setLastDeletedImages: x,
    overlayRef: k,
    handleNext: b,
    handlePrevious: m,
    handleTagEdit: f,
    handleEditNotes: u,
    handleRestore: g,
    handleRestoreWorkflow: _,
    handleAddUnifiedLoader: v,
    handleSendToWorkflow: C,
    handleRunWithWorkflow: I,
    handleRunWithMask: D,
    handleEditSource: N,
    handleDelete: L,
    toggleFullscreen: $,
    image: H,
    windowedThumbnails: E,
    parentChain: O
  } = bw({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  }), M = p.useRef(null), U = p.useRef(null), { executeWorkflow: j } = ki(), T = p.useMemo(() => e.viewScope === "trash" ? "Delete Permanently" : "Move to Trash", [e.viewScope]);
  if (!H) return null;
  const { viewerImageId: z, viewerMode: W } = e, A = s ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return ye.createPortal(
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: k,
        className: "meld-viewer-overlay",
        onClick: () => {
          e.activeModal.type === "none" && t({ type: "CLOSE_VIEWER" });
        },
        onKeyDown: (R) => {
          R.target === R.currentTarget && e.activeModal.type === "none" && (R.key === "Enter" || R.key === " " || R.key === "Spacebar") && (R.key === " " && R.preventDefault(), t({ type: "CLOSE_VIEWER" }));
        },
        role: "button",
        tabIndex: 0,
        "aria-label": "Close image viewer",
        children: [
          /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: `meld-viewer-content ${s ? "meld-viewer-content--fullscreen" : ""} ${i ? "meld-viewer-content--with-thumbnails" : ""}`,
              onClick: (R) => R.stopPropagation(),
              children: [
                A && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: g,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ l.jsx(gr, { size: 20 })
                    }
                  ),
                  !s && /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => c(!i),
                      type: "button",
                      title: i ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ l.jsx(vi, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => o(!a),
                      type: "button",
                      title: a ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ l.jsx(xg, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: $,
                      type: "button",
                      title: s ? "Exit Fullscreen (F/Enter)" : "Fullscreen (F/Enter)",
                      children: s ? /* @__PURE__ */ l.jsx(Eg, { size: 20 }) : /* @__PURE__ */ l.jsx(jg, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    ji,
                    {
                      isMenuOpen: w,
                      setIsMenuOpen: y,
                      menuRef: U,
                      settings: e.settings,
                      onAddUnifiedLoader: v,
                      onRestoreWorkflow: _,
                      onSendToWorkflow: C,
                      onRunWithWorkflow: I,
                      onRunWithMask: D,
                      onEditSource: N,
                      onEditTags: f,
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
                      children: /* @__PURE__ */ l.jsx(he, { size: 20 })
                    }
                  )
                ] }),
                A && /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: m,
                    type: "button",
                    disabled: h,
                    title: "Previous (Left/Up)",
                    children: /* @__PURE__ */ l.jsx(Sm, { size: 32 })
                  }
                ),
                /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-image-container", children: [
                  h && /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ l.jsx(gr, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ l.jsx(
                    "img",
                    {
                      ref: M,
                      src: xi(H),
                      alt: H.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[s ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${h ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                A && /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: b,
                    type: "button",
                    title: "Next (Right/Down)",
                    children: /* @__PURE__ */ l.jsx(gi, { size: 32 })
                  }
                ),
                a && /* @__PURE__ */ l.jsx(
                  jw,
                  {
                    image: H,
                    isFullscreen: s,
                    settings: e.settings,
                    showIcons: A,
                    parentChain: O,
                    dispatch: t,
                    onEditNotes: u
                  }
                ),
                !s && i && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ l.jsx(
                  Cw,
                  {
                    windowedThumbnails: E,
                    viewerImageId: z,
                    currentImage: H,
                    dispatch: t,
                    isLoadingLineage: d,
                    isLoading: e.isLoading,
                    viewerMode: W,
                    lightTableSlotId: e.viewerLightTableSlotId
                  }
                ),
                /* @__PURE__ */ l.jsx(Sw, { settings: e.settings, activeShortcutKey: S })
              ]
            }
          ),
          e.activeModal.type === "workflow_selection" && /* @__PURE__ */ l.jsx(
            of,
            {
              images: e.activeModal.images,
              isMaskMode: !!e.activeModal.maskFilename || !!e.activeModal.isMaskSequence,
              onExecute: async (R, P) => {
                if (e.activeModal.type === "workflow_selection") {
                  if (e.activeModal.isMaskSequence)
                    return t({
                      type: "OPEN_MODAL",
                      payload: {
                        type: "mask_sequence_step",
                        images: e.activeModal.images,
                        currentIndex: 0,
                        workflowName: R,
                        targetLoaderNodeId: P
                      }
                    }), !1;
                  const Z = e.activeModal.maskFilename;
                  for (const J of e.activeModal.images)
                    await j(R, J, Z, P);
                  t({ type: "CLOSE_MODAL" }), t({ type: "CLOSE_VIEWER" });
                }
              }
            }
          ),
          e.activeModal.type === "node_selection" && /* @__PURE__ */ l.jsx(
            af,
            {
              image: e.activeModal.image,
              nodes: e.activeModal.nodes,
              onSelect: (R) => {
                e.activeModal.type === "node_selection" && ml(e.activeModal.image, R);
              }
            }
          ),
          e.activeModal.type === "error" && /* @__PURE__ */ l.jsx(df, { message: e.activeModal.message }),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ l.jsx(
            cf,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: x
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ l.jsx(uf, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ l.jsx(Pm, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ l.jsx(rf, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ l.jsx(
            lf,
            {
              imageIds: e.activeModal.imageIds,
              initialTags: e.activeModal.tags,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_editor" && /* @__PURE__ */ l.jsx(
            bi,
            {
              imageId: e.activeModal.imageId,
              mode: e.activeModal.mode,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_sequence_step" && /* @__PURE__ */ l.jsx(
            Vm,
            {
              images: e.activeModal.images,
              currentIndex: e.activeModal.currentIndex,
              workflowName: e.activeModal.workflowName,
              targetLoaderNodeId: e.activeModal.targetLoaderNodeId,
              onSuccess: () => {
                if (e.activeModal.type === "mask_sequence_step") {
                  const R = e.activeModal.currentIndex + 1;
                  R < e.activeModal.images.length ? t({
                    type: "OPEN_MODAL",
                    payload: {
                      ...e.activeModal,
                      currentIndex: R
                    }
                  }) : (t({ type: "CLOSE_MODAL" }), t({ type: "CLOSE_VIEWER" }));
                }
              },
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "note_edit" && /* @__PURE__ */ l.jsx(
            sf,
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
const Nw = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: s } = fe(), [a, o] = p.useState("gallery"), [i, c] = p.useState(""), d = e.searchQuery.trim() !== "", h = p.useRef(null), w = p.useRef(null), y = se((b) => b.buckets), S = p.useMemo(() => {
    const b = /* @__PURE__ */ new Set();
    for (const m of Object.values(y))
      for (const f of m)
        b.add(Number(f));
    return b;
  }, [y]), x = p.useMemo(() => e.images.filter((b) => S.has(b.id) ? !1 : e.viewScope === "trash" ? b.exists !== !1 || e.settings["gallery.trash.show_missing"] : b.exists !== !1 && (e.settings["gallery.show_parent_images"] || d || !b.has_children)), [e.images, e.settings, e.viewScope, S, d]), k = x;
  return p.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && x.length === 0 && (F.log("GalleryPanel: Auto-loading more because all loaded images are hidden"), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    x.length,
    r
  ]), Ks({
    onKeyDown: (b) => {
      if (b.key !== "Escape")
        return;
      const m = !!document.querySelector(
        '[role="dialog"][aria-modal="true"], [role="alertdialog"][aria-modal="true"], .meld-modal-overlay'
      );
      e.activeModal.type !== "none" || m || e.selectedIds.size !== 0 && (t({ type: "CLEAR_SELECTION" }), fl(b));
    }
  }), p.useEffect(() => {
    const b = new IntersectionObserver(
      (f) => {
        const u = f[0];
        if (u && u.isIntersecting) {
          if (e.isLoading) {
            F.log("GalleryPanel: Intersection observed but already loading");
            return;
          }
          e.pagination.hasMore ? (F.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : F.log("GalleryPanel: Intersection observed but no more to load", {
            localCount: x.length,
            serverHasMore: e.pagination.hasMore
          });
        }
      },
      { threshold: 0, rootMargin: "800px" }
    ), m = h.current;
    return m && b.observe(m), () => {
      m && b.unobserve(m);
    };
  }, [
    r,
    e.isLoading,
    e.pagination.hasMore,
    x.length,
    e.images.length
  ]), p.useEffect(() => {
    e.viewerImageId !== null && (w.current = e.viewerImageId);
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
    displayedImages: x,
    visibleImages: k,
    isSearchActive: d,
    loadMoreRef: h
  };
}, Iw = ({ slots: e, onSelect: t, onCancel: n }) => (Te({ onEscape: n }), /* @__PURE__ */ l.jsx("div", { className: "meld-tab-select-modal__overlay", onClick: n, role: "presentation", children: /* @__PURE__ */ l.jsxs(
  "div",
  {
    className: "meld-tab-select-modal__dialog",
    onClick: (r) => r.stopPropagation(),
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Select Light Table tab",
    children: [
      /* @__PURE__ */ l.jsx("p", { className: "meld-tab-select-modal__title", children: "Select a tab" }),
      /* @__PURE__ */ l.jsx("div", { className: "meld-tab-select-modal__list", children: e.map((r) => /* @__PURE__ */ l.jsx(
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
) })), Mw = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = fe(), { handleRunWithWorkflow: s, handleRunWithMask: a } = Hs(e, t), o = e.selectedIds.size, i = se((E) => E.slots), c = se((E) => E.addToBucket), d = se((E) => E.showToast), [h, w] = p.useState(!1), [y, S] = p.useState(null), [x, k] = p.useState(!1), b = p.useRef(null), m = p.useRef(null), f = yf("bulkActionBar");
  if (Te({
    onEscape: () => w(!1),
    enabled: h
  }), pl({
    enabled: h,
    insideRefs: [b, m],
    onOutside: () => w(!1)
  }), o === 0) return null;
  const u = e.viewScope === "trash", g = () => e.images.filter((E) => e.selectedIds.has(E.id)), _ = () => {
    if (h) {
      w(!1);
      return;
    }
    b.current && (S(b.current.getBoundingClientRect()), w(!0));
  }, v = (E) => {
    E(), w(!1);
  }, C = () => {
    const E = g(), O = /* @__PURE__ */ new Set();
    for (const M of E)
      if (M.tags)
        for (const U of M.tags)
          O.add(U);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(O)
      }
    });
  }, I = () => {
    const E = g();
    s(E);
  }, D = () => {
    const E = g();
    E.length > 0 && a(E, "run");
  }, N = () => {
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "download_options",
        imageIds: Array.from(e.selectedIds)
      }
    });
  }, L = () => {
    const E = i[0];
    if (E)
      if (i.length === 1) {
        for (const O of e.selectedIds)
          c(E.id, String(O));
        d(`${o} image(s) sent to "${E.label}"`), w(!1);
      } else
        w(!1), k(!0);
  }, $ = (E, O) => {
    for (const M of e.selectedIds)
      c(E, String(M));
    d(`${o} image(s) sent to "${O}"`), k(!1);
  }, H = /* @__PURE__ */ l.jsxs("div", { className: `meld-bulk-bar ${u ? "meld-bulk-bar--trash" : ""}`, children: [
    /* @__PURE__ */ l.jsxs("span", { className: "meld-bulk-bar__info", children: [
      o,
      " items selected"
    ] }),
    /* @__PURE__ */ l.jsxs(
      "button",
      {
        ref: b,
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--action",
        onClick: _,
        children: [
          /* @__PURE__ */ l.jsx(Cg, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
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
          /* @__PURE__ */ l.jsx(he, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
          "Cancel"
        ]
      }
    ),
    h && y && /* @__PURE__ */ l.jsx(
      "div",
      {
        ref: m,
        className: "meld-bulk-bar-menu",
        style: {
          bottom: window.innerHeight - y.top + 5,
          left: y.left
        },
        children: u ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--restore",
              onClick: () => v(r),
              children: [
                /* @__PURE__ */ l.jsx(gr, { size: 14 }),
                " Restore"
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--danger",
              onClick: () => v(n),
              children: [
                /* @__PURE__ */ l.jsx(qt, { size: 14 }),
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
              onClick: () => v(C),
              children: [
                /* @__PURE__ */ l.jsx(_r, { size: 14 }),
                " Edit Tags"
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item",
              onClick: () => v(I),
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
              onClick: () => v(D),
              children: [
                /* @__PURE__ */ l.jsx(Mg, { size: 14 }),
                " Queue Workflow (Mask)"
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item",
              onClick: () => v(N),
              children: [
                /* @__PURE__ */ l.jsx(dl, { size: 14 }),
                " Download"
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item",
              onClick: L,
              disabled: i.length === 0,
              children: [
                /* @__PURE__ */ l.jsx(vi, { size: 14 }),
                " Send to Light Table"
              ]
            }
          ),
          /* @__PURE__ */ l.jsx("div", { className: "meld-bulk-bar-menu__divider" }),
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--danger",
              onClick: () => v(n),
              children: [
                /* @__PURE__ */ l.jsx(qt, { size: 14 }),
                " Move to Trash"
              ]
            }
          )
        ] })
      }
    ),
    x && /* @__PURE__ */ l.jsx(
      Iw,
      {
        slots: i,
        onSelect: $,
        onCancel: () => k(!1)
      }
    )
  ] });
  return ye.createPortal(H, f);
};
function Vn(e, t, n) {
  let r = n.initialDeps ?? [], s, a = !0;
  function o() {
    var i, c, d;
    let h;
    n.key && ((i = n.debug) != null && i.call(n)) && (h = Date.now());
    const w = e();
    if (!(w.length !== r.length || w.some((x, k) => r[k] !== x)))
      return s;
    r = w;
    let S;
    if (n.key && ((c = n.debug) != null && c.call(n)) && (S = Date.now()), s = t(...w), n.key && ((d = n.debug) != null && d.call(n))) {
      const x = Math.round((Date.now() - h) * 100) / 100, k = Math.round((Date.now() - S) * 100) / 100, b = k / 16, m = (f, u) => {
        for (f = String(f); f.length < u; )
          f = " " + f;
        return f;
      };
      console.info(
        `%c⏱ ${m(k, 5)} /${m(x, 5)} ms`,
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
    return n != null && n.onChange && !(a && n.skipInitialOnChange) && n.onChange(s), a = !1, s;
  }
  return o.updateDeps = (i) => {
    r = i;
  }, o;
}
function ed(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Tw = (e, t) => Math.abs(e - t) < 1.01, Lw = (e, t, n) => {
  let r;
  return function(...s) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, s), n);
  };
}, td = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, Aw = (e) => e, Dw = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let s = t; s <= n; s++)
    r.push(s);
  return r;
}, Rw = (e, t) => {
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
  if (s(td(n)), !r.ResizeObserver)
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
      s(td(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
  });
  return a.observe(n, { box: "border-box" }), () => {
    a.unobserve(n);
  };
}, nd = {
  passive: !0
}, rd = typeof window > "u" ? !0 : "onscrollend" in window, Pw = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let s = 0;
  const a = e.options.useScrollendEvent && rd ? () => {
  } : Lw(
    r,
    () => {
      t(s, !1);
    },
    e.options.isScrollingResetDelay
  ), o = (h) => () => {
    const { horizontal: w, isRtl: y } = e.options;
    s = w ? n.scrollLeft * (y && -1 || 1) : n.scrollTop, a(), t(s, h);
  }, i = o(!0), c = o(!1);
  n.addEventListener("scroll", i, nd);
  const d = e.options.useScrollendEvent && rd;
  return d && n.addEventListener("scrollend", c, nd), () => {
    n.removeEventListener("scroll", i), d && n.removeEventListener("scrollend", c);
  };
}, Ow = (e, t, n) => {
  if (t != null && t.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, zw = (e, {
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
class Fw {
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
        getItemKey: Aw,
        rangeExtractor: Dw,
        onChange: () => {
        },
        measureElement: Ow,
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
    }, this.maybeNotify = Vn(
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
    }, this.getMeasurementOptions = Vn(
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
    ), this.getMeasurements = Vn(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: n, paddingStart: r, scrollMargin: s, getItemKey: a, enabled: o, lanes: i }, c) => {
        if (!o)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > n)
          for (const y of this.laneAssignments.keys())
            y >= n && this.laneAssignments.delete(y);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((y) => {
          this.itemSizeCache.set(y.key, y.size);
        }));
        const d = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === n && (this.lanesSettling = !1);
        const h = this.measurementsCache.slice(0, d), w = new Array(i).fill(
          void 0
        );
        for (let y = 0; y < d; y++) {
          const S = h[y];
          S && (w[S.lane] = y);
        }
        for (let y = d; y < n; y++) {
          const S = a(y), x = this.laneAssignments.get(y);
          let k, b;
          if (x !== void 0 && this.options.lanes > 1) {
            k = x;
            const g = w[k], _ = g !== void 0 ? h[g] : void 0;
            b = _ ? _.end + this.options.gap : r + s;
          } else {
            const g = this.options.lanes === 1 ? h[y - 1] : this.getFurthestMeasurement(h, y);
            b = g ? g.end + this.options.gap : r + s, k = g ? g.lane : y % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(y, k);
          }
          const m = c.get(S), f = typeof m == "number" ? m : this.options.estimateSize(y), u = b + f;
          h[y] = {
            index: y,
            start: b,
            size: f,
            end: u,
            key: S,
            lane: k
          }, w[k] = y;
        }
        return this.measurementsCache = h, h;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = Vn(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, r, s, a) => this.range = n.length > 0 && r > 0 ? $w({
        measurements: n,
        outerSize: r,
        scrollOffset: s,
        lanes: a
      }) : null,
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Vn(
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
    }, this.getVirtualItems = Vn(
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
        return ed(
          r[bf(
            0,
            r.length - 1,
            (s) => ed(r[s]).start,
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
        const [w, y] = h;
        this._scrollToOffset(w, { adjustments: void 0, behavior: s }), this.targetWindow.requestAnimationFrame(() => {
          if (!this.targetWindow) return;
          const S = () => {
            if (this.currentScrollToIndex !== n) return;
            const x = this.getScrollOffset(), k = this.getOffsetForIndex(n, y);
            if (!k) {
              console.warn("Failed to get offset for index:", n);
              return;
            }
            Tw(k[0], x) || c(y);
          };
          this.isDynamicMode() ? this.targetWindow.requestAnimationFrame(S) : S();
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
const bf = (e, t, n, r) => {
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
function $w({
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
  let o = bf(
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
const ld = typeof document < "u" ? p.useLayoutEffect : p.useEffect;
function Ww({
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
    () => new Fw(r)
  );
  return s.setOptions(r), ld(() => s._didMount(), []), ld(() => s._willUpdate()), s;
}
function Uw(e) {
  return Ww({
    observeElementRect: Rw,
    observeElementOffset: Pw,
    scrollToFn: zw,
    ...e
  });
}
const Sf = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = fe(), s = t.selectedIds.has(e.id), a = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: o,
    handleAddUnifiedLoader: i,
    handleEditSource: c,
    handleEditTags: d,
    handleSendToWorkflow: h,
    handleRunWithWorkflow: w,
    handleRunWithMask: y,
    handleRestore: S,
    handleDelete: x,
    handleEditNotes: k,
    handleUpdateUserNotes: b
  } = Hs(t, n), { getParentChain: m } = _f(t.images, t.settings), [f, u] = p.useState(null), [g, _] = p.useState(!1), [v, C] = p.useState(null), [I, D] = p.useState(!1), N = p.useRef(null);
  pl({
    enabled: g,
    insideRefs: [N],
    onOutside: () => _(!1)
  });
  const L = async (K, Ye, kt = !1) => {
    try {
      await navigator.clipboard.writeText(K), kt ? (D(!0), setTimeout(() => D(!1), 2e3)) : (C(Ye), setTimeout(() => C(null), 2e3));
    } catch (Xe) {
      F.error("Failed to copy text: ", Xe);
    }
  }, $ = p.useCallback(
    (K) => {
      if (K.key === "Escape") {
        if (f) {
          fl(K), u(null);
          return;
        }
        g && (fl(K), _(!1));
      }
    },
    [f, g]
  );
  Ks({
    enabled: g || f !== null,
    onKeyDown: $
  });
  const H = m(e), O = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, M = t.settings["sidebar.thumbnail_size"] || 100, U = wt(e, Math.min(400, Math.round(M * 1.5)));
  return {
    state: t,
    dispatch: n,
    isSelected: s,
    viewMode: a,
    popupContent: f,
    setPopupContent: u,
    isMenuOpen: g,
    setIsMenuOpen: _,
    copiedLabel: v,
    popupCopied: I,
    menuRef: N,
    parentChain: H,
    displayFilename: O,
    imgSrc: U,
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
      var kt, Xe, Xt;
      !K || typeof K.preventDefault != "function" || ((kt = document.activeElement) == null ? void 0 : kt.tagName) === "INPUT" || ((Xe = document.activeElement) == null ? void 0 : Xe.tagName) === "TEXTAREA" || (Xt = document.activeElement) != null && Xt.isContentEditable || (K.key === "Enter" || K.key === " ") && (K.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
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
      k(e);
    },
    handleSendToWorkflow: () => {
      h(e);
    },
    handleRestore: () => {
      S(e);
    },
    handleDelete: () => {
      x(e);
    },
    handleRunWithWorkflow: () => {
      w(e);
    },
    handleRunWithMask: (K = "run") => y(e, K),
    handleUpdateUserNotes: (K) => b(e.id, K),
    fetchFullImageDetails: r
  };
}, Vw = ({
  title: e,
  text: t,
  onClose: n,
  onCopy: r,
  isCopied: s
}) => (Te({ onEscape: n }), ye.createPortal(
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
            s ? /* @__PURE__ */ l.jsx(st, { size: 18, style: { color: "var(--meld-success-color)" }, "aria-hidden": !0 }) : /* @__PURE__ */ l.jsx(
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
                children: /* @__PURE__ */ l.jsx(jt, { size: 18 })
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
                children: /* @__PURE__ */ l.jsx(he, { size: 18 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ l.jsx("div", { className: "meld-prompt-popup__text", children: t })
      ] })
    }
  ),
  document.body
)), jf = gt.memo(({ image: e }) => {
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
    parentChain: w,
    displayFilename: y,
    imgSrc: S,
    handleCopy: x,
    handleClick: k,
    handleSelectToggle: b,
    handleContainerClick: m,
    handleMouseDown: f,
    handleKeyDown: u,
    handleRestoreWorkflow: g,
    handleAddUnifiedLoader: _,
    handleEditSource: v,
    handleEditTags: C,
    handleEditNotes: I,
    handleSendToWorkflow: D,
    handleRestore: N,
    handleDelete: L,
    handleRunWithWorkflow: $,
    handleRunWithMask: H,
    fetchFullImageDetails: E
  } = Sf(e), [O, M] = p.useState("idle");
  p.useEffect(() => {
    e.user_notes && O === "saving" && M("idle");
  }, [e.user_notes, O]);
  const U = (j) => {
    j.stopPropagation();
    let T = String(e.id);
    r && t.selectedIds.size > 0 && (T = Array.from(t.selectedIds).join(",")), j.dataTransfer.setData("text/plain", T), se.getState().setIsOpen(!0);
  };
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `meld-image-card ${r ? "meld-image-card--selected" : ""} ${o ? "meld-image-card--menu-open" : ""}`,
      onClick: m,
      onMouseDown: f,
      onKeyDown: u,
      role: "button",
      tabIndex: 0,
      draggable: !0,
      onDragStart: U,
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__thumbnail-wrapper", children: [
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: `meld-image-card__select-checkbox ${r ? "meld-image-card__select-checkbox--checked" : ""}`,
              onClick: b,
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
              src: S,
              className: "meld-image-card__thumbnail",
              alt: e.filename,
              loading: "lazy",
              draggable: !1,
              width: e.width || void 0,
              height: e.height || void 0,
              style: {
                aspectRatio: e.width && e.height ? `${e.width} / ${e.height}` : void 0
              },
              onMouseDown: f,
              onClick: (j) => {
                j.stopPropagation(), k(j);
              }
            }
          )
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__details", children: [
          (t.settings["sidebar.show_filename"] !== "none" || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__filename", children: [
            t.settings["sidebar.show_filename"] !== "none" && y,
            t.settings["sidebar.show_filename"] !== "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
            t.settings["sidebar.show_filename"] === "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
          ] }),
          t.settings["gallery.show_parent_image"] && w.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
            /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
            /* @__PURE__ */ l.jsx("div", { className: "meld-lineage-thumbs", children: w.map(
              (j, T) => j.imgSrc && /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-lineage-badge__parent-thumb meld-lineage-badge__parent-thumb-btn",
                  style: {
                    padding: 0,
                    border: "none",
                    background: "none"
                  },
                  onClick: (z) => {
                    z.stopPropagation(), n({
                      type: "OPEN_VIEWER",
                      payload: {
                        id: j.id || e.id,
                        mode: "lineage"
                      }
                    });
                  },
                  title: T === 0 ? "Source" : T === 1 ? "Grand-Source" : `Ancestor (S${T + 1})`,
                  "aria-label": T === 0 ? "View source image" : T === 1 ? "View grand-source image" : `View ancestor image (S${T + 1})`,
                  children: /* @__PURE__ */ l.jsx(
                    "img",
                    {
                      src: j.imgSrc,
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
                j.id || T
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
              onClick: async (j) => {
                j.stopPropagation();
                const T = await E(e.id);
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
                    onClick: async (j) => {
                      j.stopPropagation();
                      const T = await E(e.id);
                      x(T.model_name || "-", "Model");
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
              onClick: async (j) => {
                j.stopPropagation();
                const T = await E(e.id);
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
                    onClick: async (j) => {
                      j.stopPropagation();
                      const T = await E(e.id);
                      x(T.positive_prompt || T.positive || "-", "Positive");
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
              onClick: async (j) => {
                j.stopPropagation();
                const T = await E(e.id);
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
                    onClick: async (j) => {
                      j.stopPropagation();
                      const T = await E(e.id);
                      x(T.negative_prompt || T.negative || "-", "Negative");
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
              onClick: (j) => {
                j.stopPropagation(), C();
              },
              children: [
                /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((j) => /* @__PURE__ */ l.jsx("span", { className: "meld-image-card__tag", children: j }, j)) : /* @__PURE__ */ l.jsx(
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
              O === "saving" && /* @__PURE__ */ l.jsx("span", { className: "meld-notes__status", children: "Saving..." })
            ] }),
            /* @__PURE__ */ l.jsx(
              "div",
              {
                className: "meld-image-card__meta-content",
                onClick: (j) => {
                  j.stopPropagation(), I();
                },
                children: /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__notes-preview", children: e.user_notes || /* @__PURE__ */ l.jsx("span", { className: "meld-notes__placeholder", children: "Add notes..." }) })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ l.jsx(
          ji,
          {
            isMenuOpen: o,
            setIsMenuOpen: i,
            menuRef: h,
            settings: t.settings,
            onAddUnifiedLoader: _,
            onRestoreWorkflow: g,
            onSendToWorkflow: D,
            onRunWithWorkflow: $,
            onRunWithMask: (j) => H(j),
            onEditSource: v,
            onEditTags: C,
            onEditNotes: I,
            onRestore: N,
            showRestore: t.viewScope === "trash",
            onDelete: L,
            deleteLabel: t.viewScope === "trash" ? "Delete Permanently" : "Move to Trash"
          }
        ),
        s && /* @__PURE__ */ l.jsx(
          Vw,
          {
            title: s.title,
            text: s.text,
            onClose: () => a(null),
            onCopy: (j) => x(j, "", !0),
            isCopied: d
          }
        )
      ]
    }
  );
});
jf.displayName = "DetailedImageCard";
const Cf = gt.memo(({ image: e }) => {
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
    state: w,
    handleAddUnifiedLoader: y,
    handleRestoreWorkflow: S,
    handleSendToWorkflow: x,
    handleRunWithWorkflow: k,
    handleRunWithMask: b,
    handleEditSource: m,
    handleEditTags: f,
    handleEditNotes: u,
    handleDelete: g,
    handleRestore: _
  } = Sf(e), v = w.viewScope === "trash", C = v ? "Delete Permanently" : "Move to Trash", I = (D) => {
    D.stopPropagation();
    let N = String(e.id);
    t && w.selectedIds.size > 0 && (N = Array.from(w.selectedIds).join(",")), D.dataTransfer.setData("text/plain", N), se.getState().setIsOpen(!0);
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
      onDragStart: I,
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
          ji,
          {
            isMenuOpen: c,
            setIsMenuOpen: d,
            menuRef: h,
            settings: w.settings,
            onAddUnifiedLoader: y,
            onRestoreWorkflow: S,
            onSendToWorkflow: x,
            onRunWithWorkflow: k,
            onRunWithMask: b,
            onEditSource: m,
            onEditTags: f,
            onEditNotes: u,
            onDelete: g,
            onRestore: _,
            showRestore: v,
            deleteLabel: C,
            showQuickShortcuts: !1,
            variant: "thumbnail_overlay_top_right"
          }
        )
      ]
    }
  );
});
Cf.displayName = "SimpleImageCard";
const sd = ({ image: e }) => {
  const { state: t } = fe();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ l.jsx(Cf, { image: e }) : /* @__PURE__ */ l.jsx(jf, { image: e });
}, Sa = 6, Bw = 10, Qw = ({
  visibleImages: e,
  settings: t,
  loadMoreRef: n,
  viewerImageId: r,
  isLoading: s,
  hasMore: a
}) => {
  const o = p.useRef(null), [i, c] = p.useState(300), [d, h] = p.useState(!0), w = t["sidebar.thumbnail_size"] || 100, y = t["gallery.view_mode"] === "grid_only";
  p.useEffect(() => {
    const u = o.current;
    if (!u) return;
    const g = () => {
      c(u.clientWidth);
    };
    g();
    const _ = new ResizeObserver(g);
    return _.observe(u), () => _.disconnect();
  }, []), p.useEffect(() => {
    const u = o.current;
    if (!u) return;
    if (typeof IntersectionObserver > "u") {
      h(!0);
      return;
    }
    const g = new IntersectionObserver(
      (_) => {
        const v = _[0];
        v && h(v.isIntersecting);
      },
      { threshold: 0 }
    );
    return g.observe(u), () => g.disconnect();
  }, []);
  const S = w + 10, x = y ? Math.max(
    1,
    Math.floor((i - Bw * 2 + Sa) / (S + Sa))
  ) : 1, k = y ? Math.ceil(e.length / x) : e.length, b = y ? w + 14 : w + 40, m = Uw({
    count: k,
    getScrollElement: () => o.current,
    estimateSize: () => b,
    overscan: 5,
    enabled: d,
    getItemKey: (u) => {
      var g;
      return y ? `row-${u}-${x}` : ((g = e[u]) == null ? void 0 : g.id) ?? u;
    }
  });
  p.useEffect(() => {
    if (r === null) return;
    const u = e.findIndex((_) => _.id === r);
    if (u < 0) return;
    const g = y ? Math.floor(u / x) : u;
    m.scrollToIndex(g, {
      align: "center",
      behavior: "smooth"
    });
  }, [r, e, y, x, m]);
  const f = m.getVirtualItems();
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      ref: o,
      className: "meld-gallery__list-scroll",
      style: {
        "--meld-thumbnail-size": `${w}px`
      },
      children: [
        /* @__PURE__ */ l.jsx(
          "div",
          {
            className: `meld-gallery__list ${y ? "meld-gallery__list--grid-only meld-gallery__list--virtualized" : "meld-gallery__list--virtualized"}`,
            style: {
              height: `${m.getTotalSize()}px`,
              position: "relative"
            },
            children: f.map((u) => {
              if (y) {
                const _ = u.index * x, v = Math.min(_ + x, e.length), C = e.slice(_, v);
                return /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    ref: m.measureElement,
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
                      gap: Sa,
                      alignItems: "flex-start"
                    },
                    children: C.map((I) => /* @__PURE__ */ l.jsx(
                      "div",
                      {
                        "data-image-id": I.id,
                        style: {
                          width: "auto",
                          flexShrink: 0,
                          display: "inline-block"
                        },
                        children: /* @__PURE__ */ l.jsx(
                          "div",
                          {
                            style: {
                              width: I.width && I.height ? Math.min(w, w * I.width / I.height) + 10 : w + 10,
                              minWidth: w + 10
                            },
                            children: /* @__PURE__ */ l.jsx(sd, { image: I })
                          }
                        )
                      },
                      I.id
                    ))
                  },
                  u.key
                );
              }
              const g = e[u.index];
              return g ? /* @__PURE__ */ l.jsx(
                "div",
                {
                  ref: m.measureElement,
                  "data-index": u.index,
                  "data-image-id": g.id,
                  className: "meld-gallery__virtual-row",
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${u.start}px)`
                  },
                  children: /* @__PURE__ */ l.jsx(sd, { image: g })
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
}, Hw = () => {
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
    loadMoreRef: w
  } = Nw(), y = se((C) => C.isOpen), S = se((C) => C.setIsOpen), x = se((C) => C.buckets), k = Object.values(x).some(
    (C) => C && C.length > 0
  );
  F.log("GalleryPanel: isLightTableOpen =", y);
  const [b, m] = p.useState(!1), [f, u] = p.useState(null), g = p.useRef(null), _ = p.useCallback(() => {
    g.current && (u(g.current.getBoundingClientRect()), m(!0));
  }, []), v = p.useCallback(
    (C) => {
      t({ type: "SET_SEARCH_QUERY", payload: C }), i(C), a("search"), m(!1);
    },
    [t, i, a]
  );
  return F.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: c.length,
    visibleCount: d.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `meld-gallery ${e.viewScope === "trash" ? "meld-gallery--trash" : ""}`,
      onDragOver: (C) => {
        C.dataTransfer.types.includes("application/meld-lt-source-slot") && (C.preventDefault(), C.dataTransfer.dropEffect = "move");
      },
      onDrop: (C) => {
        const I = C.dataTransfer.getData("application/meld-lt-source-slot");
        if (I) {
          C.preventDefault();
          const D = C.dataTransfer.getData("text/plain");
          if (D) {
            const N = D.split(","), L = [];
            N.forEach(($) => {
              if ($) {
                const H = $.trim();
                se.getState().removeFromBucket(I, H);
                const E = Number(H);
                Number.isNaN(E) || L.push(E);
              }
            }), L.length > 0 && t({ type: "DESELECT_IMAGES", payload: L });
          }
        }
      },
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__header", children: [
          e.viewScope === "trash" ? /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__trash-indicator", children: [
            /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__trash-label", children: [
              /* @__PURE__ */ l.jsx(qt, { size: 14 }),
              /* @__PURE__ */ l.jsx("span", { children: "Trash Bin" })
            ] }),
            /* @__PURE__ */ l.jsxs("label", { className: "meld-gallery__trash-toggle", children: [
              /* @__PURE__ */ l.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.settings["gallery.trash.show_missing"] || !1,
                  onChange: (C) => r("gallery.trash.show_missing", C.target.checked)
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
                  /* @__PURE__ */ l.jsx(he, { size: 14 }),
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
                children: /* @__PURE__ */ l.jsx(bm, { size: 14 })
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
                children: /* @__PURE__ */ l.jsx(vn, { size: 14 })
              }
            ),
            e.favorites.length > 0 && /* @__PURE__ */ l.jsx(
              "button",
              {
                ref: g,
                type: "button",
                onClick: _,
                style: {
                  background: "none",
                  border: "none",
                  color: b ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Favorites",
                children: /* @__PURE__ */ l.jsx(yr, { size: 14, fill: b ? "var(--brand-yellow, #ffd700)" : "none" })
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
                children: /* @__PURE__ */ l.jsx(_r, { size: 14 })
              }
            ),
            /* @__PURE__ */ l.jsx(
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ l.jsx(kg, { size: 14 }) : /* @__PURE__ */ l.jsx(vi, { size: 14 })
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  F.log(
                    "GalleryPanel: Toggle Light Table clicked, from",
                    y,
                    "to",
                    !y
                  ), S(!y);
                },
                style: {
                  background: "none",
                  border: "none",
                  color: y ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                  position: "relative",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Light Table",
                children: /* @__PURE__ */ l.jsxs("div", { style: { position: "relative" }, children: [
                  /* @__PURE__ */ l.jsx(
                    Ig,
                    {
                      size: 14,
                      fill: y ? "var(--brand-yellow, #ffd700)" : "none",
                      style: { opacity: y ? 1 : 0.8 }
                    }
                  ),
                  !y && k && /* @__PURE__ */ l.jsx(
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
                children: /* @__PURE__ */ l.jsx(dl, { size: 14 })
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
                children: /* @__PURE__ */ l.jsx(gr, { size: 14, className: e.isLoading ? "animate-spin" : "" })
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
                children: /* @__PURE__ */ l.jsx(Cm, { size: 14 })
              }
            )
          ] }),
          s === "search" && /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ l.jsx(fw, {}) })
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__content", children: [
          /* @__PURE__ */ l.jsx(Uv, {}),
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
                Wv,
                {
                  onClose: () => a("gallery"),
                  onSearchAndNavigate: (C) => {
                    t({ type: "SET_SEARCH_QUERY", payload: C }), a("search");
                  }
                }
              )
            }
          ) : s === "tags" ? /* @__PURE__ */ l.jsx(
            pw,
            {
              onClose: () => a("gallery"),
              onSearch: (C) => {
                t({ type: "SET_SEARCH_QUERY", payload: C }), a("search");
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
                Qw,
                {
                  visibleImages: d,
                  settings: e.settings,
                  loadMoreRef: w,
                  viewerImageId: e.viewerImageId,
                  isLoading: e.isLoading,
                  hasMore: e.pagination.hasMore
                }
              )
            }
          ),
          /* @__PURE__ */ l.jsx(Mw, {})
        ] }),
        e.viewerImageId !== null && /* @__PURE__ */ l.jsx(Ew, {}),
        /* @__PURE__ */ l.jsx(uv, {}),
        b && /* @__PURE__ */ l.jsx(
          dw,
          {
            anchorRect: f,
            onClose: () => m(!1),
            onSelect: v
          }
        ),
        /* @__PURE__ */ l.jsx(Xv, {})
      ]
    }
  );
};
ad.registerExtension({
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
const Kw = document.getElementById("meld-gallery-style");
if (!Kw) {
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
const Gw = () => gt.createElement(yy, null, gt.createElement(Hw)), qw = () => {
  const [e, t] = gt.useState(0);
  return gt.useEffect(() => {
    const n = () => {
      Wy(), t((r) => r + 1);
    };
    return window.addEventListener("meld-database-changed", n), () => {
      window.removeEventListener("meld-database-changed", n);
    };
  }, []), gt.createElement(Gw, { key: e });
};
ad.registerExtension({
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
    Hv();
    try {
      const r = await Am();
      F.init(r.dev_mode), F.log("Settings received:", r);
    } catch (r) {
      F.error("Failed to fetch settings", r), F.init(!1);
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
          F.error("Error toggling sidebar:", s);
        }
      }
    }, te.addEventListener("meld-image-saved", () => {
      var r;
      (r = e.ui.meld) == null || r.refresh();
    }), te.addEventListener("meld-scan-progress", (r) => {
      window.dispatchEvent(new CustomEvent("meld-scan-progress", { detail: r.detail }));
    }), te.addEventListener("meld-scan-finished", (r) => {
      var s;
      window.dispatchEvent(new CustomEvent("meld-scan-finished", { detail: r.detail })), (s = e.ui.meld) == null || s.refresh(), F.log("Import completed.");
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
    te.addEventListener("executed", async (r) => {
      var s;
      if (t(r.detail) && (s = r.detail.output) != null && s.images) {
        for (const a of r.detail.output.images)
          if (a.type === "output")
            try {
              await Mm({
                filename: a.filename,
                subfolder: a.subfolder,
                type: a.type
              });
            } catch (o) {
              F.error("Failed to auto-register image:", o);
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
          F.log("render called", {
            el: r,
            galleryRoot: Vl,
            galleryContainer: ft
          }), r.style.height = "100%", r.style.overflow = "hidden";
          let s = r.parentElement;
          for (; s && !s.classList.contains("sidebar-content-container"); )
            s.style.height = "100%", s.style.overflow = "hidden", s = s.parentElement;
          s && (s.style.overflow = "hidden"), ft || (F.log("galleryContainer not found, creating new one"), ft = document.createElement("div"), ft.id = "meld-gallery-container", ft.style.height = "100%", ft.style.width = "100%", ft.style.display = "flex", ft.style.flexDirection = "column", ft.style.overflow = "hidden"), r.contains(ft) || (F.log("Appending galleryContainer to el"), r.appendChild(ft)), Vl ? F.log("Gallery root already exists, React should handle re-render if needed") : (F.log("Creating new gallery root"), Vl = ym(ft), Vl.render(gt.createElement(qw)));
        }
      });
    } catch (r) {
      F.error("Error during sidebar registration:", r);
    }
  }
});
export {
  Jw as c,
  Af as g
};
