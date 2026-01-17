import { api as Q } from "../../../scripts/api.js";
import { app as go } from "../../../scripts/app.js";
function Hc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var yo = { exports: {} }, $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fr = Symbol.for("react.element"), Bc = Symbol.for("react.portal"), Gc = Symbol.for("react.fragment"), Kc = Symbol.for("react.strict_mode"), Yc = Symbol.for("react.profiler"), Xc = Symbol.for("react.provider"), Zc = Symbol.for("react.context"), Jc = Symbol.for("react.forward_ref"), qc = Symbol.for("react.suspense"), ed = Symbol.for("react.memo"), td = Symbol.for("react.lazy"), na = Symbol.iterator;
function nd(e) {
  return e === null || typeof e != "object" ? null : (e = na && e[na] || e["@@iterator"], typeof e == "function" ? e : null);
}
var vo = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, wo = Object.assign, xo = {};
function En(e, t, n) {
  this.props = e, this.context = t, this.refs = xo, this.updater = n || vo;
}
En.prototype.isReactComponent = {};
En.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
En.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function _o() {
}
_o.prototype = En.prototype;
function rs(e, t, n) {
  this.props = e, this.context = t, this.refs = xo, this.updater = n || vo;
}
var ls = rs.prototype = new _o();
ls.constructor = rs;
wo(ls, En.prototype);
ls.isPureReactComponent = !0;
var ra = Array.isArray, So = Object.prototype.hasOwnProperty, is = { current: null }, ko = { key: !0, ref: !0, __self: !0, __source: !0 };
function Eo(e, t, n) {
  var r, l = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) So.call(t, r) && !ko.hasOwnProperty(r) && (l[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = n;
  else if (1 < o) {
    for (var u = Array(o), c = 0; c < o; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in o = e.defaultProps, o) l[r] === void 0 && (l[r] = o[r]);
  return { $$typeof: fr, type: e, key: i, ref: s, props: l, _owner: is.current };
}
function rd(e, t) {
  return { $$typeof: fr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ss(e) {
  return typeof e == "object" && e !== null && e.$$typeof === fr;
}
function ld(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var la = /\/+/g;
function Ol(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? ld("" + e.key) : t.toString(36);
}
function Rr(e, t, n, r, l) {
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
        case fr:
        case Bc:
          s = !0;
      }
  }
  if (s) return s = e, l = l(s), e = r === "" ? "." + Ol(s, 0) : r, ra(l) ? (n = "", e != null && (n = e.replace(la, "$&/") + "/"), Rr(l, t, n, "", function(c) {
    return c;
  })) : l != null && (ss(l) && (l = rd(l, n + (!l.key || s && s.key === l.key ? "" : ("" + l.key).replace(la, "$&/") + "/") + e)), t.push(l)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", ra(e)) for (var o = 0; o < e.length; o++) {
    i = e[o];
    var u = r + Ol(i, o);
    s += Rr(i, t, n, u, l);
  }
  else if (u = nd(e), typeof u == "function") for (e = u.call(e), o = 0; !(i = e.next()).done; ) i = i.value, u = r + Ol(i, o++), s += Rr(i, t, n, u, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function yr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Rr(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function id(e) {
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
var _e = { current: null }, Or = { transition: null }, sd = { ReactCurrentDispatcher: _e, ReactCurrentBatchConfig: Or, ReactCurrentOwner: is };
function Co() {
  throw Error("act(...) is not supported in production builds of React.");
}
$.Children = { map: yr, forEach: function(e, t, n) {
  yr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return yr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return yr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ss(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
$.Component = En;
$.Fragment = Gc;
$.Profiler = Yc;
$.PureComponent = rs;
$.StrictMode = Kc;
$.Suspense = qc;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sd;
$.act = Co;
$.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = wo({}, e.props), l = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = is.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
    for (u in t) So.call(t, u) && !ko.hasOwnProperty(u) && (r[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    o = Array(u);
    for (var c = 0; c < u; c++) o[c] = arguments[c + 2];
    r.children = o;
  }
  return { $$typeof: fr, type: e.type, key: l, ref: i, props: r, _owner: s };
};
$.createContext = function(e) {
  return e = { $$typeof: Zc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Xc, _context: e }, e.Consumer = e;
};
$.createElement = Eo;
$.createFactory = function(e) {
  var t = Eo.bind(null, e);
  return t.type = e, t;
};
$.createRef = function() {
  return { current: null };
};
$.forwardRef = function(e) {
  return { $$typeof: Jc, render: e };
};
$.isValidElement = ss;
$.lazy = function(e) {
  return { $$typeof: td, _payload: { _status: -1, _result: e }, _init: id };
};
$.memo = function(e, t) {
  return { $$typeof: ed, type: e, compare: t === void 0 ? null : t };
};
$.startTransition = function(e) {
  var t = Or.transition;
  Or.transition = {};
  try {
    e();
  } finally {
    Or.transition = t;
  }
};
$.unstable_act = Co;
$.useCallback = function(e, t) {
  return _e.current.useCallback(e, t);
};
$.useContext = function(e) {
  return _e.current.useContext(e);
};
$.useDebugValue = function() {
};
$.useDeferredValue = function(e) {
  return _e.current.useDeferredValue(e);
};
$.useEffect = function(e, t) {
  return _e.current.useEffect(e, t);
};
$.useId = function() {
  return _e.current.useId();
};
$.useImperativeHandle = function(e, t, n) {
  return _e.current.useImperativeHandle(e, t, n);
};
$.useInsertionEffect = function(e, t) {
  return _e.current.useInsertionEffect(e, t);
};
$.useLayoutEffect = function(e, t) {
  return _e.current.useLayoutEffect(e, t);
};
$.useMemo = function(e, t) {
  return _e.current.useMemo(e, t);
};
$.useReducer = function(e, t, n) {
  return _e.current.useReducer(e, t, n);
};
$.useRef = function(e) {
  return _e.current.useRef(e);
};
$.useState = function(e) {
  return _e.current.useState(e);
};
$.useSyncExternalStore = function(e, t, n) {
  return _e.current.useSyncExternalStore(e, t, n);
};
$.useTransition = function() {
  return _e.current.useTransition();
};
$.version = "18.3.1";
yo.exports = $;
var x = yo.exports;
const ia = /* @__PURE__ */ Hc(x);
var No = { exports: {} }, ze = {}, jo = { exports: {} }, Io = {};
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
  function t(T, M) {
    var O = T.length;
    T.push(M);
    e: for (; 0 < O; ) {
      var z = O - 1 >>> 1, V = T[z];
      if (0 < l(V, M)) T[z] = M, T[O] = V, O = z;
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var M = T[0], O = T.pop();
    if (O !== M) {
      T[0] = O;
      e: for (var z = 0, V = T.length, K = V >>> 1; z < K; ) {
        var ae = 2 * (z + 1) - 1, zt = T[ae], Ze = ae + 1, Kt = T[Ze];
        if (0 > l(zt, O)) Ze < V && 0 > l(Kt, zt) ? (T[z] = Kt, T[Ze] = O, z = Ze) : (T[z] = zt, T[ae] = O, z = ae);
        else if (Ze < V && 0 > l(Kt, O)) T[z] = Kt, T[Ze] = O, z = Ze;
        else break e;
      }
    }
    return M;
  }
  function l(T, M) {
    var O = T.sortIndex - M.sortIndex;
    return O !== 0 ? O : T.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var s = Date, o = s.now();
    e.unstable_now = function() {
      return s.now() - o;
    };
  }
  var u = [], c = [], g = 1, y = null, m = 3, h = !1, S = !1, C = !1, A = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(T) {
    for (var M = n(c); M !== null; ) {
      if (M.callback === null) r(c);
      else if (M.startTime <= T) r(c), M.sortIndex = M.expirationTime, t(u, M);
      else break;
      M = n(c);
    }
  }
  function k(T) {
    if (C = !1, p(T), !S) if (n(u) !== null) S = !0, U(D);
    else {
      var M = n(c);
      M !== null && B(k, M.startTime - T);
    }
  }
  function D(T, M) {
    S = !1, C && (C = !1, f(P), P = -1), h = !0;
    var O = m;
    try {
      for (p(M), y = n(u); y !== null && (!(y.expirationTime > M) || T && !v()); ) {
        var z = y.callback;
        if (typeof z == "function") {
          y.callback = null, m = y.priorityLevel;
          var V = z(y.expirationTime <= M);
          M = e.unstable_now(), typeof V == "function" ? y.callback = V : y === n(u) && r(u), p(M);
        } else r(u);
        y = n(u);
      }
      if (y !== null) var K = !0;
      else {
        var ae = n(c);
        ae !== null && B(k, ae.startTime - M), K = !1;
      }
      return K;
    } finally {
      y = null, m = O, h = !1;
    }
  }
  var N = !1, R = null, P = -1, _ = 5, I = -1;
  function v() {
    return !(e.unstable_now() - I < _);
  }
  function E() {
    if (R !== null) {
      var T = e.unstable_now();
      I = T;
      var M = !0;
      try {
        M = R(!0, T);
      } finally {
        M ? w() : (N = !1, R = null);
      }
    } else N = !1;
  }
  var w;
  if (typeof d == "function") w = function() {
    d(E);
  };
  else if (typeof MessageChannel < "u") {
    var j = new MessageChannel(), b = j.port2;
    j.port1.onmessage = E, w = function() {
      b.postMessage(null);
    };
  } else w = function() {
    A(E, 0);
  };
  function U(T) {
    R = T, N || (N = !0, w());
  }
  function B(T, M) {
    P = A(function() {
      T(e.unstable_now());
    }, M);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    S || h || (S = !0, U(D));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _ = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(T) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var M = 3;
        break;
      default:
        M = m;
    }
    var O = m;
    m = M;
    try {
      return T();
    } finally {
      m = O;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, M) {
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
    var O = m;
    m = T;
    try {
      return M();
    } finally {
      m = O;
    }
  }, e.unstable_scheduleCallback = function(T, M, O) {
    var z = e.unstable_now();
    switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? z + O : z) : O = z, T) {
      case 1:
        var V = -1;
        break;
      case 2:
        V = 250;
        break;
      case 5:
        V = 1073741823;
        break;
      case 4:
        V = 1e4;
        break;
      default:
        V = 5e3;
    }
    return V = O + V, T = { id: g++, callback: M, priorityLevel: T, startTime: O, expirationTime: V, sortIndex: -1 }, O > z ? (T.sortIndex = O, t(c, T), n(u) === null && T === n(c) && (C ? (f(P), P = -1) : C = !0, B(k, O - z))) : (T.sortIndex = V, t(u, T), S || h || (S = !0, U(D))), T;
  }, e.unstable_shouldYield = v, e.unstable_wrapCallback = function(T) {
    var M = m;
    return function() {
      var O = m;
      m = M;
      try {
        return T.apply(this, arguments);
      } finally {
        m = O;
      }
    };
  };
})(Io);
jo.exports = Io;
var ad = jo.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var od = x, Pe = ad;
function L(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var To = /* @__PURE__ */ new Set(), Yn = {};
function Bt(e, t) {
  hn(e, t), hn(e + "Capture", t);
}
function hn(e, t) {
  for (Yn[e] = t, e = 0; e < t.length; e++) To.add(t[e]);
}
var ot = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), oi = Object.prototype.hasOwnProperty, ud = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, sa = {}, aa = {};
function cd(e) {
  return oi.call(aa, e) ? !0 : oi.call(sa, e) ? !1 : ud.test(e) ? aa[e] = !0 : (sa[e] = !0, !1);
}
function dd(e, t, n, r) {
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
function fd(e, t, n, r) {
  if (t === null || typeof t > "u" || dd(e, t, n, r)) return !0;
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
function Se(e, t, n, r, l, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  fe[e] = new Se(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  fe[t] = new Se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  fe[e] = new Se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  fe[e] = new Se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  fe[e] = new Se(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  fe[e] = new Se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  fe[e] = new Se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  fe[e] = new Se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  fe[e] = new Se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var as = /[\-:]([a-z])/g;
function os(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    as,
    os
  );
  fe[t] = new Se(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(as, os);
  fe[t] = new Se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(as, os);
  fe[t] = new Se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  fe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new Se("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  fe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function us(e, t, n, r) {
  var l = fe.hasOwnProperty(t) ? fe[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (fd(t, n, l, r) && (n = null), r || l === null ? cd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ft = od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, vr = Symbol.for("react.element"), Xt = Symbol.for("react.portal"), Zt = Symbol.for("react.fragment"), cs = Symbol.for("react.strict_mode"), ui = Symbol.for("react.profiler"), Mo = Symbol.for("react.provider"), Lo = Symbol.for("react.context"), ds = Symbol.for("react.forward_ref"), ci = Symbol.for("react.suspense"), di = Symbol.for("react.suspense_list"), fs = Symbol.for("react.memo"), mt = Symbol.for("react.lazy"), Po = Symbol.for("react.offscreen"), oa = Symbol.iterator;
function In(e) {
  return e === null || typeof e != "object" ? null : (e = oa && e[oa] || e["@@iterator"], typeof e == "function" ? e : null);
}
var te = Object.assign, Fl;
function On(e) {
  if (Fl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Fl = t && t[1] || "";
  }
  return `
` + Fl + e;
}
var Al = !1;
function bl(e, t) {
  if (!e || Al) return "";
  Al = !0;
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
`), i = r.stack.split(`
`), s = l.length - 1, o = i.length - 1; 1 <= s && 0 <= o && l[s] !== i[o]; ) o--;
      for (; 1 <= s && 0 <= o; s--, o--) if (l[s] !== i[o]) {
        if (s !== 1 || o !== 1)
          do
            if (s--, o--, 0 > o || l[s] !== i[o]) {
              var u = `
` + l[s].replace(" at new ", " at ");
              return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
            }
          while (1 <= s && 0 <= o);
        break;
      }
    }
  } finally {
    Al = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? On(e) : "";
}
function pd(e) {
  switch (e.tag) {
    case 5:
      return On(e.type);
    case 16:
      return On("Lazy");
    case 13:
      return On("Suspense");
    case 19:
      return On("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = bl(e.type, !1), e;
    case 11:
      return e = bl(e.type.render, !1), e;
    case 1:
      return e = bl(e.type, !0), e;
    default:
      return "";
  }
}
function fi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Zt:
      return "Fragment";
    case Xt:
      return "Portal";
    case ui:
      return "Profiler";
    case cs:
      return "StrictMode";
    case ci:
      return "Suspense";
    case di:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Lo:
      return (e.displayName || "Context") + ".Consumer";
    case Mo:
      return (e._context.displayName || "Context") + ".Provider";
    case ds:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case fs:
      return t = e.displayName || null, t !== null ? t : fi(e.type) || "Memo";
    case mt:
      t = e._payload, e = e._init;
      try {
        return fi(e(t));
      } catch {
      }
  }
  return null;
}
function md(e) {
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
      return fi(t);
    case 8:
      return t === cs ? "StrictMode" : "Mode";
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
function It(e) {
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
function zo(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function hd(e) {
  var t = zo(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function wr(e) {
  e._valueTracker || (e._valueTracker = hd(e));
}
function Do(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = zo(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Gr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function pi(e, t) {
  var n = t.checked;
  return te({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ua(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = It(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Ro(e, t) {
  t = t.checked, t != null && us(e, "checked", t, !1);
}
function mi(e, t) {
  Ro(e, t);
  var n = It(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? hi(e, t.type, n) : t.hasOwnProperty("defaultValue") && hi(e, t.type, It(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ca(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function hi(e, t, n) {
  (t !== "number" || Gr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Fn = Array.isArray;
function un(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + It(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function gi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return te({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function da(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(L(92));
      if (Fn(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: It(n) };
}
function Oo(e, t) {
  var n = It(t.value), r = It(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function fa(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Fo(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function yi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Fo(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var xr, Ao = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (xr = xr || document.createElement("div"), xr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = xr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Xn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var $n = {
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
}, gd = ["Webkit", "ms", "Moz", "O"];
Object.keys($n).forEach(function(e) {
  gd.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), $n[t] = $n[e];
  });
});
function bo(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || $n.hasOwnProperty(e) && $n[e] ? ("" + t).trim() : t + "px";
}
function $o(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = bo(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var yd = te({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function vi(e, t) {
  if (t) {
    if (yd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function wi(e, t) {
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
var xi = null;
function ps(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var _i = null, cn = null, dn = null;
function pa(e) {
  if (e = hr(e)) {
    if (typeof _i != "function") throw Error(L(280));
    var t = e.stateNode;
    t && (t = kl(t), _i(e.stateNode, e.type, t));
  }
}
function Uo(e) {
  cn ? dn ? dn.push(e) : dn = [e] : cn = e;
}
function Vo() {
  if (cn) {
    var e = cn, t = dn;
    if (dn = cn = null, pa(e), t) for (e = 0; e < t.length; e++) pa(t[e]);
  }
}
function Qo(e, t) {
  return e(t);
}
function Wo() {
}
var $l = !1;
function Ho(e, t, n) {
  if ($l) return e(t, n);
  $l = !0;
  try {
    return Qo(e, t, n);
  } finally {
    $l = !1, (cn !== null || dn !== null) && (Wo(), Vo());
  }
}
function Zn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = kl(n);
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
  if (n && typeof n != "function") throw Error(L(231, t, typeof n));
  return n;
}
var Si = !1;
if (ot) try {
  var Tn = {};
  Object.defineProperty(Tn, "passive", { get: function() {
    Si = !0;
  } }), window.addEventListener("test", Tn, Tn), window.removeEventListener("test", Tn, Tn);
} catch {
  Si = !1;
}
function vd(e, t, n, r, l, i, s, o, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (g) {
    this.onError(g);
  }
}
var Un = !1, Kr = null, Yr = !1, ki = null, wd = { onError: function(e) {
  Un = !0, Kr = e;
} };
function xd(e, t, n, r, l, i, s, o, u) {
  Un = !1, Kr = null, vd.apply(wd, arguments);
}
function _d(e, t, n, r, l, i, s, o, u) {
  if (xd.apply(this, arguments), Un) {
    if (Un) {
      var c = Kr;
      Un = !1, Kr = null;
    } else throw Error(L(198));
    Yr || (Yr = !0, ki = c);
  }
}
function Gt(e) {
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
function Bo(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function ma(e) {
  if (Gt(e) !== e) throw Error(L(188));
}
function Sd(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Gt(e), t === null) throw Error(L(188));
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
        if (i === n) return ma(l), e;
        if (i === r) return ma(l), t;
        i = i.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) n = l, r = i;
    else {
      for (var s = !1, o = l.child; o; ) {
        if (o === n) {
          s = !0, n = l, r = i;
          break;
        }
        if (o === r) {
          s = !0, r = l, n = i;
          break;
        }
        o = o.sibling;
      }
      if (!s) {
        for (o = i.child; o; ) {
          if (o === n) {
            s = !0, n = i, r = l;
            break;
          }
          if (o === r) {
            s = !0, r = i, n = l;
            break;
          }
          o = o.sibling;
        }
        if (!s) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function Go(e) {
  return e = Sd(e), e !== null ? Ko(e) : null;
}
function Ko(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ko(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Yo = Pe.unstable_scheduleCallback, ha = Pe.unstable_cancelCallback, kd = Pe.unstable_shouldYield, Ed = Pe.unstable_requestPaint, re = Pe.unstable_now, Cd = Pe.unstable_getCurrentPriorityLevel, ms = Pe.unstable_ImmediatePriority, Xo = Pe.unstable_UserBlockingPriority, Xr = Pe.unstable_NormalPriority, Nd = Pe.unstable_LowPriority, Zo = Pe.unstable_IdlePriority, wl = null, tt = null;
function jd(e) {
  if (tt && typeof tt.onCommitFiberRoot == "function") try {
    tt.onCommitFiberRoot(wl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Ge = Math.clz32 ? Math.clz32 : Md, Id = Math.log, Td = Math.LN2;
function Md(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Id(e) / Td | 0) | 0;
}
var _r = 64, Sr = 4194304;
function An(e) {
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
function Zr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var o = s & ~l;
    o !== 0 ? r = An(o) : (i &= s, i !== 0 && (r = An(i)));
  } else s = n & ~l, s !== 0 ? r = An(s) : i !== 0 && (r = An(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Ge(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Ld(e, t) {
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
function Pd(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Ge(i), o = 1 << s, u = l[s];
    u === -1 ? (!(o & n) || o & r) && (l[s] = Ld(o, t)) : u <= t && (e.expiredLanes |= o), i &= ~o;
  }
}
function Ei(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Jo() {
  var e = _r;
  return _r <<= 1, !(_r & 4194240) && (_r = 64), e;
}
function Ul(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function pr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ge(t), e[t] = n;
}
function zd(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ge(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function hs(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Ge(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var G = 0;
function qo(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var eu, gs, tu, nu, ru, Ci = !1, kr = [], xt = null, _t = null, St = null, Jn = /* @__PURE__ */ new Map(), qn = /* @__PURE__ */ new Map(), gt = [], Dd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ga(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      xt = null;
      break;
    case "dragenter":
    case "dragleave":
      _t = null;
      break;
    case "mouseover":
    case "mouseout":
      St = null;
      break;
    case "pointerover":
    case "pointerout":
      Jn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      qn.delete(t.pointerId);
  }
}
function Mn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = hr(t), t !== null && gs(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Rd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return xt = Mn(xt, e, t, n, r, l), !0;
    case "dragenter":
      return _t = Mn(_t, e, t, n, r, l), !0;
    case "mouseover":
      return St = Mn(St, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return Jn.set(i, Mn(Jn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, qn.set(i, Mn(qn.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function lu(e) {
  var t = Ot(e.target);
  if (t !== null) {
    var n = Gt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Bo(n), t !== null) {
          e.blockedOn = t, ru(e.priority, function() {
            tu(n);
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
function Fr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ni(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      xi = r, n.target.dispatchEvent(r), xi = null;
    } else return t = hr(n), t !== null && gs(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function ya(e, t, n) {
  Fr(e) && n.delete(t);
}
function Od() {
  Ci = !1, xt !== null && Fr(xt) && (xt = null), _t !== null && Fr(_t) && (_t = null), St !== null && Fr(St) && (St = null), Jn.forEach(ya), qn.forEach(ya);
}
function Ln(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ci || (Ci = !0, Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority, Od)));
}
function er(e) {
  function t(l) {
    return Ln(l, e);
  }
  if (0 < kr.length) {
    Ln(kr[0], e);
    for (var n = 1; n < kr.length; n++) {
      var r = kr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (xt !== null && Ln(xt, e), _t !== null && Ln(_t, e), St !== null && Ln(St, e), Jn.forEach(t), qn.forEach(t), n = 0; n < gt.length; n++) r = gt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < gt.length && (n = gt[0], n.blockedOn === null); ) lu(n), n.blockedOn === null && gt.shift();
}
var fn = ft.ReactCurrentBatchConfig, Jr = !0;
function Fd(e, t, n, r) {
  var l = G, i = fn.transition;
  fn.transition = null;
  try {
    G = 1, ys(e, t, n, r);
  } finally {
    G = l, fn.transition = i;
  }
}
function Ad(e, t, n, r) {
  var l = G, i = fn.transition;
  fn.transition = null;
  try {
    G = 4, ys(e, t, n, r);
  } finally {
    G = l, fn.transition = i;
  }
}
function ys(e, t, n, r) {
  if (Jr) {
    var l = Ni(e, t, n, r);
    if (l === null) Zl(e, t, r, qr, n), ga(e, r);
    else if (Rd(l, e, t, n, r)) r.stopPropagation();
    else if (ga(e, r), t & 4 && -1 < Dd.indexOf(e)) {
      for (; l !== null; ) {
        var i = hr(l);
        if (i !== null && eu(i), i = Ni(e, t, n, r), i === null && Zl(e, t, r, qr, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Zl(e, t, r, null, n);
  }
}
var qr = null;
function Ni(e, t, n, r) {
  if (qr = null, e = ps(r), e = Ot(e), e !== null) if (t = Gt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Bo(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return qr = e, null;
}
function iu(e) {
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
      switch (Cd()) {
        case ms:
          return 1;
        case Xo:
          return 4;
        case Xr:
        case Nd:
          return 16;
        case Zo:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var vt = null, vs = null, Ar = null;
function su() {
  if (Ar) return Ar;
  var e, t = vs, n = t.length, r, l = "value" in vt ? vt.value : vt.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === l[i - r]; r++) ;
  return Ar = l.slice(e, 1 < r ? 1 - r : void 0);
}
function br(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Er() {
  return !0;
}
function va() {
  return !1;
}
function De(e) {
  function t(n, r, l, i, s) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var o in e) e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(i) : i[o]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Er : va, this.isPropagationStopped = va, this;
  }
  return te(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Er);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Er);
  }, persist: function() {
  }, isPersistent: Er }), t;
}
var Cn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ws = De(Cn), mr = te({}, Cn, { view: 0, detail: 0 }), bd = De(mr), Vl, Ql, Pn, xl = te({}, mr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: xs, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Pn && (Pn && e.type === "mousemove" ? (Vl = e.screenX - Pn.screenX, Ql = e.screenY - Pn.screenY) : Ql = Vl = 0, Pn = e), Vl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ql;
} }), wa = De(xl), $d = te({}, xl, { dataTransfer: 0 }), Ud = De($d), Vd = te({}, mr, { relatedTarget: 0 }), Wl = De(Vd), Qd = te({}, Cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Wd = De(Qd), Hd = te({}, Cn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Bd = De(Hd), Gd = te({}, Cn, { data: 0 }), xa = De(Gd), Kd = {
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
}, Yd = {
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
}, Xd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Zd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Xd[e]) ? !!t[e] : !1;
}
function xs() {
  return Zd;
}
var Jd = te({}, mr, { key: function(e) {
  if (e.key) {
    var t = Kd[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = br(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Yd[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: xs, charCode: function(e) {
  return e.type === "keypress" ? br(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? br(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), qd = De(Jd), ef = te({}, xl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), _a = De(ef), tf = te({}, mr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: xs }), nf = De(tf), rf = te({}, Cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), lf = De(rf), sf = te({}, xl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), af = De(sf), of = [9, 13, 27, 32], _s = ot && "CompositionEvent" in window, Vn = null;
ot && "documentMode" in document && (Vn = document.documentMode);
var uf = ot && "TextEvent" in window && !Vn, au = ot && (!_s || Vn && 8 < Vn && 11 >= Vn), Sa = " ", ka = !1;
function ou(e, t) {
  switch (e) {
    case "keyup":
      return of.indexOf(t.keyCode) !== -1;
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
function uu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Jt = !1;
function cf(e, t) {
  switch (e) {
    case "compositionend":
      return uu(t);
    case "keypress":
      return t.which !== 32 ? null : (ka = !0, Sa);
    case "textInput":
      return e = t.data, e === Sa && ka ? null : e;
    default:
      return null;
  }
}
function df(e, t) {
  if (Jt) return e === "compositionend" || !_s && ou(e, t) ? (e = su(), Ar = vs = vt = null, Jt = !1, e) : null;
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
      return au && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ff = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ea(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ff[e.type] : t === "textarea";
}
function cu(e, t, n, r) {
  Uo(r), t = el(t, "onChange"), 0 < t.length && (n = new ws("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Qn = null, tr = null;
function pf(e) {
  _u(e, 0);
}
function _l(e) {
  var t = tn(e);
  if (Do(t)) return e;
}
function mf(e, t) {
  if (e === "change") return t;
}
var du = !1;
if (ot) {
  var Hl;
  if (ot) {
    var Bl = "oninput" in document;
    if (!Bl) {
      var Ca = document.createElement("div");
      Ca.setAttribute("oninput", "return;"), Bl = typeof Ca.oninput == "function";
    }
    Hl = Bl;
  } else Hl = !1;
  du = Hl && (!document.documentMode || 9 < document.documentMode);
}
function Na() {
  Qn && (Qn.detachEvent("onpropertychange", fu), tr = Qn = null);
}
function fu(e) {
  if (e.propertyName === "value" && _l(tr)) {
    var t = [];
    cu(t, tr, e, ps(e)), Ho(pf, t);
  }
}
function hf(e, t, n) {
  e === "focusin" ? (Na(), Qn = t, tr = n, Qn.attachEvent("onpropertychange", fu)) : e === "focusout" && Na();
}
function gf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return _l(tr);
}
function yf(e, t) {
  if (e === "click") return _l(t);
}
function vf(e, t) {
  if (e === "input" || e === "change") return _l(t);
}
function wf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ye = typeof Object.is == "function" ? Object.is : wf;
function nr(e, t) {
  if (Ye(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!oi.call(t, l) || !Ye(e[l], t[l])) return !1;
  }
  return !0;
}
function ja(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ia(e, t) {
  var n = ja(e);
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
    n = ja(n);
  }
}
function pu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? pu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function mu() {
  for (var e = window, t = Gr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Gr(e.document);
  }
  return t;
}
function Ss(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function xf(e) {
  var t = mu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && pu(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ss(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Ia(n, i);
        var s = Ia(
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
var _f = ot && "documentMode" in document && 11 >= document.documentMode, qt = null, ji = null, Wn = null, Ii = !1;
function Ta(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ii || qt == null || qt !== Gr(r) || (r = qt, "selectionStart" in r && Ss(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Wn && nr(Wn, r) || (Wn = r, r = el(ji, "onSelect"), 0 < r.length && (t = new ws("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = qt)));
}
function Cr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var en = { animationend: Cr("Animation", "AnimationEnd"), animationiteration: Cr("Animation", "AnimationIteration"), animationstart: Cr("Animation", "AnimationStart"), transitionend: Cr("Transition", "TransitionEnd") }, Gl = {}, hu = {};
ot && (hu = document.createElement("div").style, "AnimationEvent" in window || (delete en.animationend.animation, delete en.animationiteration.animation, delete en.animationstart.animation), "TransitionEvent" in window || delete en.transitionend.transition);
function Sl(e) {
  if (Gl[e]) return Gl[e];
  if (!en[e]) return e;
  var t = en[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in hu) return Gl[e] = t[n];
  return e;
}
var gu = Sl("animationend"), yu = Sl("animationiteration"), vu = Sl("animationstart"), wu = Sl("transitionend"), xu = /* @__PURE__ */ new Map(), Ma = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Mt(e, t) {
  xu.set(e, t), Bt(t, [e]);
}
for (var Kl = 0; Kl < Ma.length; Kl++) {
  var Yl = Ma[Kl], Sf = Yl.toLowerCase(), kf = Yl[0].toUpperCase() + Yl.slice(1);
  Mt(Sf, "on" + kf);
}
Mt(gu, "onAnimationEnd");
Mt(yu, "onAnimationIteration");
Mt(vu, "onAnimationStart");
Mt("dblclick", "onDoubleClick");
Mt("focusin", "onFocus");
Mt("focusout", "onBlur");
Mt(wu, "onTransitionEnd");
hn("onMouseEnter", ["mouseout", "mouseover"]);
hn("onMouseLeave", ["mouseout", "mouseover"]);
hn("onPointerEnter", ["pointerout", "pointerover"]);
hn("onPointerLeave", ["pointerout", "pointerover"]);
Bt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Bt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Bt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Bt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Bt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Bt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var bn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ef = new Set("cancel close invalid load scroll toggle".split(" ").concat(bn));
function La(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, _d(r, t, void 0, e), e.currentTarget = null;
}
function _u(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var o = r[s], u = o.instance, c = o.currentTarget;
        if (o = o.listener, u !== i && l.isPropagationStopped()) break e;
        La(l, o, c), i = u;
      }
      else for (s = 0; s < r.length; s++) {
        if (o = r[s], u = o.instance, c = o.currentTarget, o = o.listener, u !== i && l.isPropagationStopped()) break e;
        La(l, o, c), i = u;
      }
    }
  }
  if (Yr) throw e = ki, Yr = !1, ki = null, e;
}
function X(e, t) {
  var n = t[zi];
  n === void 0 && (n = t[zi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Su(t, e, 2, !1), n.add(r));
}
function Xl(e, t, n) {
  var r = 0;
  t && (r |= 4), Su(n, e, r, t);
}
var Nr = "_reactListening" + Math.random().toString(36).slice(2);
function rr(e) {
  if (!e[Nr]) {
    e[Nr] = !0, To.forEach(function(n) {
      n !== "selectionchange" && (Ef.has(n) || Xl(n, !1, e), Xl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Nr] || (t[Nr] = !0, Xl("selectionchange", !1, t));
  }
}
function Su(e, t, n, r) {
  switch (iu(t)) {
    case 1:
      var l = Fd;
      break;
    case 4:
      l = Ad;
      break;
    default:
      l = ys;
  }
  n = l.bind(null, t, n, e), l = void 0, !Si || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Zl(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var s = r.tag;
    if (s === 3 || s === 4) {
      var o = r.stateNode.containerInfo;
      if (o === l || o.nodeType === 8 && o.parentNode === l) break;
      if (s === 4) for (s = r.return; s !== null; ) {
        var u = s.tag;
        if ((u === 3 || u === 4) && (u = s.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l)) return;
        s = s.return;
      }
      for (; o !== null; ) {
        if (s = Ot(o), s === null) return;
        if (u = s.tag, u === 5 || u === 6) {
          r = i = s;
          continue e;
        }
        o = o.parentNode;
      }
    }
    r = r.return;
  }
  Ho(function() {
    var c = i, g = ps(n), y = [];
    e: {
      var m = xu.get(e);
      if (m !== void 0) {
        var h = ws, S = e;
        switch (e) {
          case "keypress":
            if (br(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = qd;
            break;
          case "focusin":
            S = "focus", h = Wl;
            break;
          case "focusout":
            S = "blur", h = Wl;
            break;
          case "beforeblur":
          case "afterblur":
            h = Wl;
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
            h = wa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = Ud;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = nf;
            break;
          case gu:
          case yu:
          case vu:
            h = Wd;
            break;
          case wu:
            h = lf;
            break;
          case "scroll":
            h = bd;
            break;
          case "wheel":
            h = af;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = Bd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = _a;
        }
        var C = (t & 4) !== 0, A = !C && e === "scroll", f = C ? m !== null ? m + "Capture" : null : m;
        C = [];
        for (var d = c, p; d !== null; ) {
          p = d;
          var k = p.stateNode;
          if (p.tag === 5 && k !== null && (p = k, f !== null && (k = Zn(d, f), k != null && C.push(lr(d, k, p)))), A) break;
          d = d.return;
        }
        0 < C.length && (m = new h(m, S, null, n, g), y.push({ event: m, listeners: C }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", h = e === "mouseout" || e === "pointerout", m && n !== xi && (S = n.relatedTarget || n.fromElement) && (Ot(S) || S[ut])) break e;
        if ((h || m) && (m = g.window === g ? g : (m = g.ownerDocument) ? m.defaultView || m.parentWindow : window, h ? (S = n.relatedTarget || n.toElement, h = c, S = S ? Ot(S) : null, S !== null && (A = Gt(S), S !== A || S.tag !== 5 && S.tag !== 6) && (S = null)) : (h = null, S = c), h !== S)) {
          if (C = wa, k = "onMouseLeave", f = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (C = _a, k = "onPointerLeave", f = "onPointerEnter", d = "pointer"), A = h == null ? m : tn(h), p = S == null ? m : tn(S), m = new C(k, d + "leave", h, n, g), m.target = A, m.relatedTarget = p, k = null, Ot(g) === c && (C = new C(f, d + "enter", S, n, g), C.target = p, C.relatedTarget = A, k = C), A = k, h && S) t: {
            for (C = h, f = S, d = 0, p = C; p; p = Yt(p)) d++;
            for (p = 0, k = f; k; k = Yt(k)) p++;
            for (; 0 < d - p; ) C = Yt(C), d--;
            for (; 0 < p - d; ) f = Yt(f), p--;
            for (; d--; ) {
              if (C === f || f !== null && C === f.alternate) break t;
              C = Yt(C), f = Yt(f);
            }
            C = null;
          }
          else C = null;
          h !== null && Pa(y, m, h, C, !1), S !== null && A !== null && Pa(y, A, S, C, !0);
        }
      }
      e: {
        if (m = c ? tn(c) : window, h = m.nodeName && m.nodeName.toLowerCase(), h === "select" || h === "input" && m.type === "file") var D = mf;
        else if (Ea(m)) if (du) D = vf;
        else {
          D = gf;
          var N = hf;
        }
        else (h = m.nodeName) && h.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (D = yf);
        if (D && (D = D(e, c))) {
          cu(y, D, n, g);
          break e;
        }
        N && N(e, m, c), e === "focusout" && (N = m._wrapperState) && N.controlled && m.type === "number" && hi(m, "number", m.value);
      }
      switch (N = c ? tn(c) : window, e) {
        case "focusin":
          (Ea(N) || N.contentEditable === "true") && (qt = N, ji = c, Wn = null);
          break;
        case "focusout":
          Wn = ji = qt = null;
          break;
        case "mousedown":
          Ii = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ii = !1, Ta(y, n, g);
          break;
        case "selectionchange":
          if (_f) break;
        case "keydown":
        case "keyup":
          Ta(y, n, g);
      }
      var R;
      if (_s) e: {
        switch (e) {
          case "compositionstart":
            var P = "onCompositionStart";
            break e;
          case "compositionend":
            P = "onCompositionEnd";
            break e;
          case "compositionupdate":
            P = "onCompositionUpdate";
            break e;
        }
        P = void 0;
      }
      else Jt ? ou(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (au && n.locale !== "ko" && (Jt || P !== "onCompositionStart" ? P === "onCompositionEnd" && Jt && (R = su()) : (vt = g, vs = "value" in vt ? vt.value : vt.textContent, Jt = !0)), N = el(c, P), 0 < N.length && (P = new xa(P, e, null, n, g), y.push({ event: P, listeners: N }), R ? P.data = R : (R = uu(n), R !== null && (P.data = R)))), (R = uf ? cf(e, n) : df(e, n)) && (c = el(c, "onBeforeInput"), 0 < c.length && (g = new xa("onBeforeInput", "beforeinput", null, n, g), y.push({ event: g, listeners: c }), g.data = R));
    }
    _u(y, t);
  });
}
function lr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function el(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = Zn(e, n), i != null && r.unshift(lr(e, i, l)), i = Zn(e, t), i != null && r.push(lr(e, i, l))), e = e.return;
  }
  return r;
}
function Yt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Pa(e, t, n, r, l) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var o = n, u = o.alternate, c = o.stateNode;
    if (u !== null && u === r) break;
    o.tag === 5 && c !== null && (o = c, l ? (u = Zn(n, i), u != null && s.unshift(lr(n, u, o))) : l || (u = Zn(n, i), u != null && s.push(lr(n, u, o)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Cf = /\r\n?/g, Nf = /\u0000|\uFFFD/g;
function za(e) {
  return (typeof e == "string" ? e : "" + e).replace(Cf, `
`).replace(Nf, "");
}
function jr(e, t, n) {
  if (t = za(t), za(e) !== t && n) throw Error(L(425));
}
function tl() {
}
var Ti = null, Mi = null;
function Li(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Pi = typeof setTimeout == "function" ? setTimeout : void 0, jf = typeof clearTimeout == "function" ? clearTimeout : void 0, Da = typeof Promise == "function" ? Promise : void 0, If = typeof queueMicrotask == "function" ? queueMicrotask : typeof Da < "u" ? function(e) {
  return Da.resolve(null).then(e).catch(Tf);
} : Pi;
function Tf(e) {
  setTimeout(function() {
    throw e;
  });
}
function Jl(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), er(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  er(t);
}
function kt(e) {
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
function Ra(e) {
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
var Nn = Math.random().toString(36).slice(2), et = "__reactFiber$" + Nn, ir = "__reactProps$" + Nn, ut = "__reactContainer$" + Nn, zi = "__reactEvents$" + Nn, Mf = "__reactListeners$" + Nn, Lf = "__reactHandles$" + Nn;
function Ot(e) {
  var t = e[et];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[ut] || n[et]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ra(e); e !== null; ) {
        if (n = e[et]) return n;
        e = Ra(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function hr(e) {
  return e = e[et] || e[ut], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function tn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function kl(e) {
  return e[ir] || null;
}
var Di = [], nn = -1;
function Lt(e) {
  return { current: e };
}
function Z(e) {
  0 > nn || (e.current = Di[nn], Di[nn] = null, nn--);
}
function Y(e, t) {
  nn++, Di[nn] = e.current, e.current = t;
}
var Tt = {}, ge = Lt(Tt), Ce = Lt(!1), Ut = Tt;
function gn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Tt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Ne(e) {
  return e = e.childContextTypes, e != null;
}
function nl() {
  Z(Ce), Z(ge);
}
function Oa(e, t, n) {
  if (ge.current !== Tt) throw Error(L(168));
  Y(ge, t), Y(Ce, n);
}
function ku(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(L(108, md(e) || "Unknown", l));
  return te({}, n, r);
}
function rl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Tt, Ut = ge.current, Y(ge, e), Y(Ce, Ce.current), !0;
}
function Fa(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n ? (e = ku(e, t, Ut), r.__reactInternalMemoizedMergedChildContext = e, Z(Ce), Z(ge), Y(ge, e)) : Z(Ce), Y(Ce, n);
}
var lt = null, El = !1, ql = !1;
function Eu(e) {
  lt === null ? lt = [e] : lt.push(e);
}
function Pf(e) {
  El = !0, Eu(e);
}
function Pt() {
  if (!ql && lt !== null) {
    ql = !0;
    var e = 0, t = G;
    try {
      var n = lt;
      for (G = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      lt = null, El = !1;
    } catch (l) {
      throw lt !== null && (lt = lt.slice(e + 1)), Yo(ms, Pt), l;
    } finally {
      G = t, ql = !1;
    }
  }
  return null;
}
var rn = [], ln = 0, ll = null, il = 0, Re = [], Oe = 0, Vt = null, it = 1, st = "";
function Dt(e, t) {
  rn[ln++] = il, rn[ln++] = ll, ll = e, il = t;
}
function Cu(e, t, n) {
  Re[Oe++] = it, Re[Oe++] = st, Re[Oe++] = Vt, Vt = e;
  var r = it;
  e = st;
  var l = 32 - Ge(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - Ge(t) + l;
  if (30 < i) {
    var s = l - l % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, l -= s, it = 1 << 32 - Ge(t) + l | n << l | r, st = i + e;
  } else it = 1 << i | n << l | r, st = e;
}
function ks(e) {
  e.return !== null && (Dt(e, 1), Cu(e, 1, 0));
}
function Es(e) {
  for (; e === ll; ) ll = rn[--ln], rn[ln] = null, il = rn[--ln], rn[ln] = null;
  for (; e === Vt; ) Vt = Re[--Oe], Re[Oe] = null, st = Re[--Oe], Re[Oe] = null, it = Re[--Oe], Re[Oe] = null;
}
var Le = null, Me = null, J = !1, Be = null;
function Nu(e, t) {
  var n = Fe(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Aa(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Le = e, Me = kt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Le = e, Me = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Vt !== null ? { id: it, overflow: st } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Fe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Le = e, Me = null, !0) : !1;
    default:
      return !1;
  }
}
function Ri(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Oi(e) {
  if (J) {
    var t = Me;
    if (t) {
      var n = t;
      if (!Aa(e, t)) {
        if (Ri(e)) throw Error(L(418));
        t = kt(n.nextSibling);
        var r = Le;
        t && Aa(e, t) ? Nu(r, n) : (e.flags = e.flags & -4097 | 2, J = !1, Le = e);
      }
    } else {
      if (Ri(e)) throw Error(L(418));
      e.flags = e.flags & -4097 | 2, J = !1, Le = e;
    }
  }
}
function ba(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Le = e;
}
function Ir(e) {
  if (e !== Le) return !1;
  if (!J) return ba(e), J = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Li(e.type, e.memoizedProps)), t && (t = Me)) {
    if (Ri(e)) throw ju(), Error(L(418));
    for (; t; ) Nu(e, t), t = kt(t.nextSibling);
  }
  if (ba(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Me = kt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Me = null;
    }
  } else Me = Le ? kt(e.stateNode.nextSibling) : null;
  return !0;
}
function ju() {
  for (var e = Me; e; ) e = kt(e.nextSibling);
}
function yn() {
  Me = Le = null, J = !1;
}
function Cs(e) {
  Be === null ? Be = [e] : Be.push(e);
}
var zf = ft.ReactCurrentBatchConfig;
function zn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var l = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var o = l.refs;
        s === null ? delete o[i] : o[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function Tr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(L(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function $a(e) {
  var t = e._init;
  return t(e._payload);
}
function Iu(e) {
  function t(f, d) {
    if (e) {
      var p = f.deletions;
      p === null ? (f.deletions = [d], f.flags |= 16) : p.push(d);
    }
  }
  function n(f, d) {
    if (!e) return null;
    for (; d !== null; ) t(f, d), d = d.sibling;
    return null;
  }
  function r(f, d) {
    for (f = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? f.set(d.key, d) : f.set(d.index, d), d = d.sibling;
    return f;
  }
  function l(f, d) {
    return f = jt(f, d), f.index = 0, f.sibling = null, f;
  }
  function i(f, d, p) {
    return f.index = p, e ? (p = f.alternate, p !== null ? (p = p.index, p < d ? (f.flags |= 2, d) : p) : (f.flags |= 2, d)) : (f.flags |= 1048576, d);
  }
  function s(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function o(f, d, p, k) {
    return d === null || d.tag !== 6 ? (d = si(p, f.mode, k), d.return = f, d) : (d = l(d, p), d.return = f, d);
  }
  function u(f, d, p, k) {
    var D = p.type;
    return D === Zt ? g(f, d, p.props.children, k, p.key) : d !== null && (d.elementType === D || typeof D == "object" && D !== null && D.$$typeof === mt && $a(D) === d.type) ? (k = l(d, p.props), k.ref = zn(f, d, p), k.return = f, k) : (k = Br(p.type, p.key, p.props, null, f.mode, k), k.ref = zn(f, d, p), k.return = f, k);
  }
  function c(f, d, p, k) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== p.containerInfo || d.stateNode.implementation !== p.implementation ? (d = ai(p, f.mode, k), d.return = f, d) : (d = l(d, p.children || []), d.return = f, d);
  }
  function g(f, d, p, k, D) {
    return d === null || d.tag !== 7 ? (d = $t(p, f.mode, k, D), d.return = f, d) : (d = l(d, p), d.return = f, d);
  }
  function y(f, d, p) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = si("" + d, f.mode, p), d.return = f, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case vr:
          return p = Br(d.type, d.key, d.props, null, f.mode, p), p.ref = zn(f, null, d), p.return = f, p;
        case Xt:
          return d = ai(d, f.mode, p), d.return = f, d;
        case mt:
          var k = d._init;
          return y(f, k(d._payload), p);
      }
      if (Fn(d) || In(d)) return d = $t(d, f.mode, p, null), d.return = f, d;
      Tr(f, d);
    }
    return null;
  }
  function m(f, d, p, k) {
    var D = d !== null ? d.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return D !== null ? null : o(f, d, "" + p, k);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case vr:
          return p.key === D ? u(f, d, p, k) : null;
        case Xt:
          return p.key === D ? c(f, d, p, k) : null;
        case mt:
          return D = p._init, m(
            f,
            d,
            D(p._payload),
            k
          );
      }
      if (Fn(p) || In(p)) return D !== null ? null : g(f, d, p, k, null);
      Tr(f, p);
    }
    return null;
  }
  function h(f, d, p, k, D) {
    if (typeof k == "string" && k !== "" || typeof k == "number") return f = f.get(p) || null, o(d, f, "" + k, D);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case vr:
          return f = f.get(k.key === null ? p : k.key) || null, u(d, f, k, D);
        case Xt:
          return f = f.get(k.key === null ? p : k.key) || null, c(d, f, k, D);
        case mt:
          var N = k._init;
          return h(f, d, p, N(k._payload), D);
      }
      if (Fn(k) || In(k)) return f = f.get(p) || null, g(d, f, k, D, null);
      Tr(d, k);
    }
    return null;
  }
  function S(f, d, p, k) {
    for (var D = null, N = null, R = d, P = d = 0, _ = null; R !== null && P < p.length; P++) {
      R.index > P ? (_ = R, R = null) : _ = R.sibling;
      var I = m(f, R, p[P], k);
      if (I === null) {
        R === null && (R = _);
        break;
      }
      e && R && I.alternate === null && t(f, R), d = i(I, d, P), N === null ? D = I : N.sibling = I, N = I, R = _;
    }
    if (P === p.length) return n(f, R), J && Dt(f, P), D;
    if (R === null) {
      for (; P < p.length; P++) R = y(f, p[P], k), R !== null && (d = i(R, d, P), N === null ? D = R : N.sibling = R, N = R);
      return J && Dt(f, P), D;
    }
    for (R = r(f, R); P < p.length; P++) _ = h(R, f, P, p[P], k), _ !== null && (e && _.alternate !== null && R.delete(_.key === null ? P : _.key), d = i(_, d, P), N === null ? D = _ : N.sibling = _, N = _);
    return e && R.forEach(function(v) {
      return t(f, v);
    }), J && Dt(f, P), D;
  }
  function C(f, d, p, k) {
    var D = In(p);
    if (typeof D != "function") throw Error(L(150));
    if (p = D.call(p), p == null) throw Error(L(151));
    for (var N = D = null, R = d, P = d = 0, _ = null, I = p.next(); R !== null && !I.done; P++, I = p.next()) {
      R.index > P ? (_ = R, R = null) : _ = R.sibling;
      var v = m(f, R, I.value, k);
      if (v === null) {
        R === null && (R = _);
        break;
      }
      e && R && v.alternate === null && t(f, R), d = i(v, d, P), N === null ? D = v : N.sibling = v, N = v, R = _;
    }
    if (I.done) return n(
      f,
      R
    ), J && Dt(f, P), D;
    if (R === null) {
      for (; !I.done; P++, I = p.next()) I = y(f, I.value, k), I !== null && (d = i(I, d, P), N === null ? D = I : N.sibling = I, N = I);
      return J && Dt(f, P), D;
    }
    for (R = r(f, R); !I.done; P++, I = p.next()) I = h(R, f, P, I.value, k), I !== null && (e && I.alternate !== null && R.delete(I.key === null ? P : I.key), d = i(I, d, P), N === null ? D = I : N.sibling = I, N = I);
    return e && R.forEach(function(E) {
      return t(f, E);
    }), J && Dt(f, P), D;
  }
  function A(f, d, p, k) {
    if (typeof p == "object" && p !== null && p.type === Zt && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case vr:
          e: {
            for (var D = p.key, N = d; N !== null; ) {
              if (N.key === D) {
                if (D = p.type, D === Zt) {
                  if (N.tag === 7) {
                    n(f, N.sibling), d = l(N, p.props.children), d.return = f, f = d;
                    break e;
                  }
                } else if (N.elementType === D || typeof D == "object" && D !== null && D.$$typeof === mt && $a(D) === N.type) {
                  n(f, N.sibling), d = l(N, p.props), d.ref = zn(f, N, p), d.return = f, f = d;
                  break e;
                }
                n(f, N);
                break;
              } else t(f, N);
              N = N.sibling;
            }
            p.type === Zt ? (d = $t(p.props.children, f.mode, k, p.key), d.return = f, f = d) : (k = Br(p.type, p.key, p.props, null, f.mode, k), k.ref = zn(f, d, p), k.return = f, f = k);
          }
          return s(f);
        case Xt:
          e: {
            for (N = p.key; d !== null; ) {
              if (d.key === N) if (d.tag === 4 && d.stateNode.containerInfo === p.containerInfo && d.stateNode.implementation === p.implementation) {
                n(f, d.sibling), d = l(d, p.children || []), d.return = f, f = d;
                break e;
              } else {
                n(f, d);
                break;
              }
              else t(f, d);
              d = d.sibling;
            }
            d = ai(p, f.mode, k), d.return = f, f = d;
          }
          return s(f);
        case mt:
          return N = p._init, A(f, d, N(p._payload), k);
      }
      if (Fn(p)) return S(f, d, p, k);
      if (In(p)) return C(f, d, p, k);
      Tr(f, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, d !== null && d.tag === 6 ? (n(f, d.sibling), d = l(d, p), d.return = f, f = d) : (n(f, d), d = si(p, f.mode, k), d.return = f, f = d), s(f)) : n(f, d);
  }
  return A;
}
var vn = Iu(!0), Tu = Iu(!1), sl = Lt(null), al = null, sn = null, Ns = null;
function js() {
  Ns = sn = al = null;
}
function Is(e) {
  var t = sl.current;
  Z(sl), e._currentValue = t;
}
function Fi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function pn(e, t) {
  al = e, Ns = sn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ee = !0), e.firstContext = null);
}
function $e(e) {
  var t = e._currentValue;
  if (Ns !== e) if (e = { context: e, memoizedValue: t, next: null }, sn === null) {
    if (al === null) throw Error(L(308));
    sn = e, al.dependencies = { lanes: 0, firstContext: e };
  } else sn = sn.next = e;
  return t;
}
var Ft = null;
function Ts(e) {
  Ft === null ? Ft = [e] : Ft.push(e);
}
function Mu(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Ts(t)) : (n.next = l.next, l.next = n), t.interleaved = n, ct(e, r);
}
function ct(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var ht = !1;
function Ms(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Lu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function at(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Et(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, W & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, ct(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Ts(r)) : (t.next = l.next, l.next = t), r.interleaved = t, ct(e, n);
}
function $r(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, hs(e, n);
  }
}
function Ua(e, t) {
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
function ol(e, t, n, r) {
  var l = e.updateQueue;
  ht = !1;
  var i = l.firstBaseUpdate, s = l.lastBaseUpdate, o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var u = o, c = u.next;
    u.next = null, s === null ? i = c : s.next = c, s = u;
    var g = e.alternate;
    g !== null && (g = g.updateQueue, o = g.lastBaseUpdate, o !== s && (o === null ? g.firstBaseUpdate = c : o.next = c, g.lastBaseUpdate = u));
  }
  if (i !== null) {
    var y = l.baseState;
    s = 0, g = c = u = null, o = i;
    do {
      var m = o.lane, h = o.eventTime;
      if ((r & m) === m) {
        g !== null && (g = g.next = {
          eventTime: h,
          lane: 0,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null
        });
        e: {
          var S = e, C = o;
          switch (m = t, h = n, C.tag) {
            case 1:
              if (S = C.payload, typeof S == "function") {
                y = S.call(h, y, m);
                break e;
              }
              y = S;
              break e;
            case 3:
              S.flags = S.flags & -65537 | 128;
            case 0:
              if (S = C.payload, m = typeof S == "function" ? S.call(h, y, m) : S, m == null) break e;
              y = te({}, y, m);
              break e;
            case 2:
              ht = !0;
          }
        }
        o.callback !== null && o.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [o] : m.push(o));
      } else h = { eventTime: h, lane: m, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, g === null ? (c = g = h, u = y) : g = g.next = h, s |= m;
      if (o = o.next, o === null) {
        if (o = l.shared.pending, o === null) break;
        m = o, o = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
      }
    } while (!0);
    if (g === null && (u = y), l.baseState = u, l.firstBaseUpdate = c, l.lastBaseUpdate = g, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        s |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    Wt |= s, e.lanes = s, e.memoizedState = y;
  }
}
function Va(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(L(191, l));
      l.call(r);
    }
  }
}
var gr = {}, nt = Lt(gr), sr = Lt(gr), ar = Lt(gr);
function At(e) {
  if (e === gr) throw Error(L(174));
  return e;
}
function Ls(e, t) {
  switch (Y(ar, t), Y(sr, e), Y(nt, gr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : yi(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = yi(t, e);
  }
  Z(nt), Y(nt, t);
}
function wn() {
  Z(nt), Z(sr), Z(ar);
}
function Pu(e) {
  At(ar.current);
  var t = At(nt.current), n = yi(t, e.type);
  t !== n && (Y(sr, e), Y(nt, n));
}
function Ps(e) {
  sr.current === e && (Z(nt), Z(sr));
}
var q = Lt(0);
function ul(e) {
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
var ei = [];
function zs() {
  for (var e = 0; e < ei.length; e++) ei[e]._workInProgressVersionPrimary = null;
  ei.length = 0;
}
var Ur = ft.ReactCurrentDispatcher, ti = ft.ReactCurrentBatchConfig, Qt = 0, ee = null, ie = null, oe = null, cl = !1, Hn = !1, or = 0, Df = 0;
function pe() {
  throw Error(L(321));
}
function Ds(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ye(e[n], t[n])) return !1;
  return !0;
}
function Rs(e, t, n, r, l, i) {
  if (Qt = i, ee = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ur.current = e === null || e.memoizedState === null ? Af : bf, e = n(r, l), Hn) {
    i = 0;
    do {
      if (Hn = !1, or = 0, 25 <= i) throw Error(L(301));
      i += 1, oe = ie = null, t.updateQueue = null, Ur.current = $f, e = n(r, l);
    } while (Hn);
  }
  if (Ur.current = dl, t = ie !== null && ie.next !== null, Qt = 0, oe = ie = ee = null, cl = !1, t) throw Error(L(300));
  return e;
}
function Os() {
  var e = or !== 0;
  return or = 0, e;
}
function qe() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return oe === null ? ee.memoizedState = oe = e : oe = oe.next = e, oe;
}
function Ue() {
  if (ie === null) {
    var e = ee.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ie.next;
  var t = oe === null ? ee.memoizedState : oe.next;
  if (t !== null) oe = t, ie = e;
  else {
    if (e === null) throw Error(L(310));
    ie = e, e = { memoizedState: ie.memoizedState, baseState: ie.baseState, baseQueue: ie.baseQueue, queue: ie.queue, next: null }, oe === null ? ee.memoizedState = oe = e : oe = oe.next = e;
  }
  return oe;
}
function ur(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ni(e) {
  var t = Ue(), n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = ie, l = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var s = l.next;
      l.next = i.next, i.next = s;
    }
    r.baseQueue = l = i, n.pending = null;
  }
  if (l !== null) {
    i = l.next, r = r.baseState;
    var o = s = null, u = null, c = i;
    do {
      var g = c.lane;
      if ((Qt & g) === g) u !== null && (u = u.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var y = {
          lane: g,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        u === null ? (o = u = y, s = r) : u = u.next = y, ee.lanes |= g, Wt |= g;
      }
      c = c.next;
    } while (c !== null && c !== i);
    u === null ? s = r : u.next = o, Ye(r, t.memoizedState) || (Ee = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, ee.lanes |= i, Wt |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ri(e) {
  var t = Ue(), n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var s = l = l.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== l);
    Ye(i, t.memoizedState) || (Ee = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function zu() {
}
function Du(e, t) {
  var n = ee, r = Ue(), l = t(), i = !Ye(r.memoizedState, l);
  if (i && (r.memoizedState = l, Ee = !0), r = r.queue, Fs(Fu.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || oe !== null && oe.memoizedState.tag & 1) {
    if (n.flags |= 2048, cr(9, Ou.bind(null, n, r, l, t), void 0, null), ue === null) throw Error(L(349));
    Qt & 30 || Ru(n, t, l);
  }
  return l;
}
function Ru(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ee.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ee.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Ou(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Au(t) && bu(e);
}
function Fu(e, t, n) {
  return n(function() {
    Au(t) && bu(e);
  });
}
function Au(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ye(e, n);
  } catch {
    return !0;
  }
}
function bu(e) {
  var t = ct(e, 1);
  t !== null && Ke(t, e, 1, -1);
}
function Qa(e) {
  var t = qe();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ur, lastRenderedState: e }, t.queue = e, e = e.dispatch = Ff.bind(null, ee, e), [t.memoizedState, e];
}
function cr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ee.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ee.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function $u() {
  return Ue().memoizedState;
}
function Vr(e, t, n, r) {
  var l = qe();
  ee.flags |= e, l.memoizedState = cr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Cl(e, t, n, r) {
  var l = Ue();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ie !== null) {
    var s = ie.memoizedState;
    if (i = s.destroy, r !== null && Ds(r, s.deps)) {
      l.memoizedState = cr(t, n, i, r);
      return;
    }
  }
  ee.flags |= e, l.memoizedState = cr(1 | t, n, i, r);
}
function Wa(e, t) {
  return Vr(8390656, 8, e, t);
}
function Fs(e, t) {
  return Cl(2048, 8, e, t);
}
function Uu(e, t) {
  return Cl(4, 2, e, t);
}
function Vu(e, t) {
  return Cl(4, 4, e, t);
}
function Qu(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Wu(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Cl(4, 4, Qu.bind(null, t, e), n);
}
function As() {
}
function Hu(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ds(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Bu(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ds(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Gu(e, t, n) {
  return Qt & 21 ? (Ye(n, t) || (n = Jo(), ee.lanes |= n, Wt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ee = !0), e.memoizedState = n);
}
function Rf(e, t) {
  var n = G;
  G = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ti.transition;
  ti.transition = {};
  try {
    e(!1), t();
  } finally {
    G = n, ti.transition = r;
  }
}
function Ku() {
  return Ue().memoizedState;
}
function Of(e, t, n) {
  var r = Nt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Yu(e)) Xu(t, n);
  else if (n = Mu(e, t, n, r), n !== null) {
    var l = we();
    Ke(n, e, r, l), Zu(n, t, r);
  }
}
function Ff(e, t, n) {
  var r = Nt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Yu(e)) Xu(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, o = i(s, n);
      if (l.hasEagerState = !0, l.eagerState = o, Ye(o, s)) {
        var u = t.interleaved;
        u === null ? (l.next = l, Ts(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Mu(e, t, l, r), n !== null && (l = we(), Ke(n, e, r, l), Zu(n, t, r));
  }
}
function Yu(e) {
  var t = e.alternate;
  return e === ee || t !== null && t === ee;
}
function Xu(e, t) {
  Hn = cl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Zu(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, hs(e, n);
  }
}
var dl = { readContext: $e, useCallback: pe, useContext: pe, useEffect: pe, useImperativeHandle: pe, useInsertionEffect: pe, useLayoutEffect: pe, useMemo: pe, useReducer: pe, useRef: pe, useState: pe, useDebugValue: pe, useDeferredValue: pe, useTransition: pe, useMutableSource: pe, useSyncExternalStore: pe, useId: pe, unstable_isNewReconciler: !1 }, Af = { readContext: $e, useCallback: function(e, t) {
  return qe().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: $e, useEffect: Wa, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Vr(
    4194308,
    4,
    Qu.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Vr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Vr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = qe();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = qe();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Of.bind(null, ee, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = qe();
  return e = { current: e }, t.memoizedState = e;
}, useState: Qa, useDebugValue: As, useDeferredValue: function(e) {
  return qe().memoizedState = e;
}, useTransition: function() {
  var e = Qa(!1), t = e[0];
  return e = Rf.bind(null, e[1]), qe().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ee, l = qe();
  if (J) {
    if (n === void 0) throw Error(L(407));
    n = n();
  } else {
    if (n = t(), ue === null) throw Error(L(349));
    Qt & 30 || Ru(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, Wa(Fu.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, cr(9, Ou.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = qe(), t = ue.identifierPrefix;
  if (J) {
    var n = st, r = it;
    n = (r & ~(1 << 32 - Ge(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = or++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Df++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, bf = {
  readContext: $e,
  useCallback: Hu,
  useContext: $e,
  useEffect: Fs,
  useImperativeHandle: Wu,
  useInsertionEffect: Uu,
  useLayoutEffect: Vu,
  useMemo: Bu,
  useReducer: ni,
  useRef: $u,
  useState: function() {
    return ni(ur);
  },
  useDebugValue: As,
  useDeferredValue: function(e) {
    var t = Ue();
    return Gu(t, ie.memoizedState, e);
  },
  useTransition: function() {
    var e = ni(ur)[0], t = Ue().memoizedState;
    return [e, t];
  },
  useMutableSource: zu,
  useSyncExternalStore: Du,
  useId: Ku,
  unstable_isNewReconciler: !1
}, $f = { readContext: $e, useCallback: Hu, useContext: $e, useEffect: Fs, useImperativeHandle: Wu, useInsertionEffect: Uu, useLayoutEffect: Vu, useMemo: Bu, useReducer: ri, useRef: $u, useState: function() {
  return ri(ur);
}, useDebugValue: As, useDeferredValue: function(e) {
  var t = Ue();
  return ie === null ? t.memoizedState = e : Gu(t, ie.memoizedState, e);
}, useTransition: function() {
  var e = ri(ur)[0], t = Ue().memoizedState;
  return [e, t];
}, useMutableSource: zu, useSyncExternalStore: Du, useId: Ku, unstable_isNewReconciler: !1 };
function We(e, t) {
  if (e && e.defaultProps) {
    t = te({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ai(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : te({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Nl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Gt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = we(), l = Nt(e), i = at(r, l);
  i.payload = t, n != null && (i.callback = n), t = Et(e, i, l), t !== null && (Ke(t, e, l, r), $r(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = we(), l = Nt(e), i = at(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Et(e, i, l), t !== null && (Ke(t, e, l, r), $r(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = we(), r = Nt(e), l = at(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Et(e, l, r), t !== null && (Ke(t, e, r, n), $r(t, e, r));
} };
function Ha(e, t, n, r, l, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !nr(n, r) || !nr(l, i) : !0;
}
function Ju(e, t, n) {
  var r = !1, l = Tt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = $e(i) : (l = Ne(t) ? Ut : ge.current, r = t.contextTypes, i = (r = r != null) ? gn(e, l) : Tt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Nl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Ba(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Nl.enqueueReplaceState(t, t.state, null);
}
function bi(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Ms(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = $e(i) : (i = Ne(t) ? Ut : ge.current, l.context = gn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Ai(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Nl.enqueueReplaceState(l, l.state, null), ol(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function xn(e, t) {
  try {
    var n = "", r = t;
    do
      n += pd(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function li(e, t, n) {
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
var Uf = typeof WeakMap == "function" ? WeakMap : Map;
function qu(e, t, n) {
  n = at(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    pl || (pl = !0, Xi = r), $i(e, t);
  }, n;
}
function ec(e, t, n) {
  n = at(-1, n), n.tag = 3;
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
    $i(e, t), typeof r != "function" && (Ct === null ? Ct = /* @__PURE__ */ new Set([this]) : Ct.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Ga(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Uf();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = tp.bind(null, e, t, n), t.then(e, e));
}
function Ka(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ya(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = at(-1, 1), t.tag = 2, Et(n, t, 1))), n.lanes |= 1), e);
}
var Vf = ft.ReactCurrentOwner, Ee = !1;
function ye(e, t, n, r) {
  t.child = e === null ? Tu(t, null, n, r) : vn(t, e.child, n, r);
}
function Xa(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return pn(t, l), r = Rs(e, t, n, r, i, l), n = Os(), e !== null && !Ee ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, dt(e, t, l)) : (J && n && ks(t), t.flags |= 1, ye(e, t, r, l), t.child);
}
function Za(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Bs(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, tc(e, t, i, r, l)) : (e = Br(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : nr, n(s, r) && e.ref === t.ref) return dt(e, t, l);
  }
  return t.flags |= 1, e = jt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function tc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (nr(i, r) && e.ref === t.ref) if (Ee = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (Ee = !0);
    else return t.lanes = e.lanes, dt(e, t, l);
  }
  return Ui(e, t, n, r, l);
}
function nc(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Y(on, Ie), Ie |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Y(on, Ie), Ie |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Y(on, Ie), Ie |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Y(on, Ie), Ie |= r;
  return ye(e, t, l, n), t.child;
}
function rc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ui(e, t, n, r, l) {
  var i = Ne(n) ? Ut : ge.current;
  return i = gn(t, i), pn(t, l), n = Rs(e, t, n, r, i, l), r = Os(), e !== null && !Ee ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, dt(e, t, l)) : (J && r && ks(t), t.flags |= 1, ye(e, t, n, l), t.child);
}
function Ja(e, t, n, r, l) {
  if (Ne(n)) {
    var i = !0;
    rl(t);
  } else i = !1;
  if (pn(t, l), t.stateNode === null) Qr(e, t), Ju(t, n, r), bi(t, n, r, l), r = !0;
  else if (e === null) {
    var s = t.stateNode, o = t.memoizedProps;
    s.props = o;
    var u = s.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = $e(c) : (c = Ne(n) ? Ut : ge.current, c = gn(t, c));
    var g = n.getDerivedStateFromProps, y = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    y || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (o !== r || u !== c) && Ba(t, s, r, c), ht = !1;
    var m = t.memoizedState;
    s.state = m, ol(t, r, s, l), u = t.memoizedState, o !== r || m !== u || Ce.current || ht ? (typeof g == "function" && (Ai(t, n, g, r), u = t.memoizedState), (o = ht || Ha(t, n, o, r, m, u, c)) ? (y || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), s.props = r, s.state = u, s.context = c, r = o) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Lu(e, t), o = t.memoizedProps, c = t.type === t.elementType ? o : We(t.type, o), s.props = c, y = t.pendingProps, m = s.context, u = n.contextType, typeof u == "object" && u !== null ? u = $e(u) : (u = Ne(n) ? Ut : ge.current, u = gn(t, u));
    var h = n.getDerivedStateFromProps;
    (g = typeof h == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (o !== y || m !== u) && Ba(t, s, r, u), ht = !1, m = t.memoizedState, s.state = m, ol(t, r, s, l);
    var S = t.memoizedState;
    o !== y || m !== S || Ce.current || ht ? (typeof h == "function" && (Ai(t, n, h, r), S = t.memoizedState), (c = ht || Ha(t, n, c, r, m, S, u) || !1) ? (g || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, S, u), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, S, u)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), s.props = r, s.state = S, s.context = u, r = c) : (typeof s.componentDidUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Vi(e, t, n, r, i, l);
}
function Vi(e, t, n, r, l, i) {
  rc(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return l && Fa(t, n, !1), dt(e, t, i);
  r = t.stateNode, Vf.current = t;
  var o = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = vn(t, e.child, null, i), t.child = vn(t, null, o, i)) : ye(e, t, o, i), t.memoizedState = r.state, l && Fa(t, n, !0), t.child;
}
function lc(e) {
  var t = e.stateNode;
  t.pendingContext ? Oa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Oa(e, t.context, !1), Ls(e, t.containerInfo);
}
function qa(e, t, n, r, l) {
  return yn(), Cs(l), t.flags |= 256, ye(e, t, n, r), t.child;
}
var Qi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Wi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ic(e, t, n) {
  var r = t.pendingProps, l = q.current, i = !1, s = (t.flags & 128) !== 0, o;
  if ((o = s) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Y(q, l & 1), e === null)
    return Oi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Tl(s, r, 0, null), e = $t(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Wi(n), t.memoizedState = Qi, e) : bs(t, s));
  if (l = e.memoizedState, l !== null && (o = l.dehydrated, o !== null)) return Qf(e, t, s, r, o, l, n);
  if (i) {
    i = r.fallback, s = t.mode, l = e.child, o = l.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = jt(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), o !== null ? i = jt(o, i) : (i = $t(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Wi(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Qi, r;
  }
  return i = e.child, e = i.sibling, r = jt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function bs(e, t) {
  return t = Tl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Mr(e, t, n, r) {
  return r !== null && Cs(r), vn(t, e.child, null, n), e = bs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Qf(e, t, n, r, l, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = li(Error(L(422))), Mr(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Tl({ mode: "visible", children: r.children }, l, 0, null), i = $t(i, l, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && vn(t, e.child, null, s), t.child.memoizedState = Wi(s), t.memoizedState = Qi, i);
  if (!(t.mode & 1)) return Mr(e, t, s, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var o = r.dgst;
    return r = o, i = Error(L(419)), r = li(i, r, void 0), Mr(e, t, s, r);
  }
  if (o = (s & e.childLanes) !== 0, Ee || o) {
    if (r = ue, r !== null) {
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
      l = l & (r.suspendedLanes | s) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, ct(e, l), Ke(r, e, l, -1));
    }
    return Hs(), r = li(Error(L(421))), Mr(e, t, s, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = np.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, Me = kt(l.nextSibling), Le = t, J = !0, Be = null, e !== null && (Re[Oe++] = it, Re[Oe++] = st, Re[Oe++] = Vt, it = e.id, st = e.overflow, Vt = t), t = bs(t, r.children), t.flags |= 4096, t);
}
function eo(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Fi(e.return, t, n);
}
function ii(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function sc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (ye(e, t, r.children, n), r = q.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && eo(e, n, t);
      else if (e.tag === 19) eo(e, n, t);
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
  if (Y(q, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && ul(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ii(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && ul(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      ii(t, !0, n, null, i);
      break;
    case "together":
      ii(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Qr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function dt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Wt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (e = t.child, n = jt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = jt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Wf(e, t, n) {
  switch (t.tag) {
    case 3:
      lc(t), yn();
      break;
    case 5:
      Pu(t);
      break;
    case 1:
      Ne(t.type) && rl(t);
      break;
    case 4:
      Ls(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      Y(sl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Y(q, q.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ic(e, t, n) : (Y(q, q.current & 1), e = dt(e, t, n), e !== null ? e.sibling : null);
      Y(q, q.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return sc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Y(q, q.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, nc(e, t, n);
  }
  return dt(e, t, n);
}
var ac, Hi, oc, uc;
ac = function(e, t) {
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
Hi = function() {
};
oc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, At(nt.current);
    var i = null;
    switch (n) {
      case "input":
        l = pi(e, l), r = pi(e, r), i = [];
        break;
      case "select":
        l = te({}, l, { value: void 0 }), r = te({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = gi(e, l), r = gi(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = tl);
    }
    vi(n, r);
    var s;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var o = l[c];
      for (s in o) o.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Yn.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (o = l != null ? l[c] : void 0, r.hasOwnProperty(c) && u !== o && (u != null || o != null)) if (c === "style") if (o) {
        for (s in o) !o.hasOwnProperty(s) || u && u.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in u) u.hasOwnProperty(s) && o[s] !== u[s] && (n || (n = {}), n[s] = u[s]);
      } else n || (i || (i = []), i.push(
        c,
        n
      )), n = u;
      else c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, o = o ? o.__html : void 0, u != null && o !== u && (i = i || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Yn.hasOwnProperty(c) ? (u != null && c === "onScroll" && X("scroll", e), i || o === u || (i = [])) : (i = i || []).push(c, u));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
uc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Dn(e, t) {
  if (!J) switch (e.tailMode) {
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
function me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Hf(e, t, n) {
  var r = t.pendingProps;
  switch (Es(t), t.tag) {
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
      return me(t), null;
    case 1:
      return Ne(t.type) && nl(), me(t), null;
    case 3:
      return r = t.stateNode, wn(), Z(Ce), Z(ge), zs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ir(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Be !== null && (qi(Be), Be = null))), Hi(e, t), me(t), null;
    case 5:
      Ps(t);
      var l = At(ar.current);
      if (n = t.type, e !== null && t.stateNode != null) oc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return me(t), null;
        }
        if (e = At(nt.current), Ir(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[et] = t, r[ir] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              X("cancel", r), X("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              X("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < bn.length; l++) X(bn[l], r);
              break;
            case "source":
              X("error", r);
              break;
            case "img":
            case "image":
            case "link":
              X(
                "error",
                r
              ), X("load", r);
              break;
            case "details":
              X("toggle", r);
              break;
            case "input":
              ua(r, i), X("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, X("invalid", r);
              break;
            case "textarea":
              da(r, i), X("invalid", r);
          }
          vi(n, i), l = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var o = i[s];
            s === "children" ? typeof o == "string" ? r.textContent !== o && (i.suppressHydrationWarning !== !0 && jr(r.textContent, o, e), l = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (i.suppressHydrationWarning !== !0 && jr(
              r.textContent,
              o,
              e
            ), l = ["children", "" + o]) : Yn.hasOwnProperty(s) && o != null && s === "onScroll" && X("scroll", r);
          }
          switch (n) {
            case "input":
              wr(r), ca(r, i, !0);
              break;
            case "textarea":
              wr(r), fa(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = tl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Fo(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[et] = t, e[ir] = r, ac(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = wi(n, r), n) {
              case "dialog":
                X("cancel", e), X("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                X("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < bn.length; l++) X(bn[l], e);
                l = r;
                break;
              case "source":
                X("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                X(
                  "error",
                  e
                ), X("load", e), l = r;
                break;
              case "details":
                X("toggle", e), l = r;
                break;
              case "input":
                ua(e, r), l = pi(e, r), X("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = te({}, r, { value: void 0 }), X("invalid", e);
                break;
              case "textarea":
                da(e, r), l = gi(e, r), X("invalid", e);
                break;
              default:
                l = r;
            }
            vi(n, l), o = l;
            for (i in o) if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "style" ? $o(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Ao(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Xn(e, u) : typeof u == "number" && Xn(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Yn.hasOwnProperty(i) ? u != null && i === "onScroll" && X("scroll", e) : u != null && us(e, i, u, s));
            }
            switch (n) {
              case "input":
                wr(e), ca(e, r, !1);
                break;
              case "textarea":
                wr(e), fa(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + It(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? un(e, !!r.multiple, i, !1) : r.defaultValue != null && un(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = tl);
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
      return me(t), null;
    case 6:
      if (e && t.stateNode != null) uc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (n = At(ar.current), At(nt.current), Ir(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[et] = t, (i = r.nodeValue !== n) && (e = Le, e !== null)) switch (e.tag) {
            case 3:
              jr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && jr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[et] = t, t.stateNode = r;
      }
      return me(t), null;
    case 13:
      if (Z(q), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (J && Me !== null && t.mode & 1 && !(t.flags & 128)) ju(), yn(), t.flags |= 98560, i = !1;
        else if (i = Ir(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(L(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(L(317));
            i[et] = t;
          } else yn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          me(t), i = !1;
        } else Be !== null && (qi(Be), Be = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || q.current & 1 ? se === 0 && (se = 3) : Hs())), t.updateQueue !== null && (t.flags |= 4), me(t), null);
    case 4:
      return wn(), Hi(e, t), e === null && rr(t.stateNode.containerInfo), me(t), null;
    case 10:
      return Is(t.type._context), me(t), null;
    case 17:
      return Ne(t.type) && nl(), me(t), null;
    case 19:
      if (Z(q), i = t.memoizedState, i === null) return me(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) Dn(i, !1);
      else {
        if (se !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = ul(e), s !== null) {
            for (t.flags |= 128, Dn(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return Y(q, q.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && re() > _n && (t.flags |= 128, r = !0, Dn(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ul(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Dn(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !J) return me(t), null;
        } else 2 * re() - i.renderingStartTime > _n && n !== 1073741824 && (t.flags |= 128, r = !0, Dn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = re(), t.sibling = null, n = q.current, Y(q, r ? n & 1 | 2 : n & 1), t) : (me(t), null);
    case 22:
    case 23:
      return Ws(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ie & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : me(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function Bf(e, t) {
  switch (Es(t), t.tag) {
    case 1:
      return Ne(t.type) && nl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return wn(), Z(Ce), Z(ge), zs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ps(t), null;
    case 13:
      if (Z(q), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(L(340));
        yn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Z(q), null;
    case 4:
      return wn(), null;
    case 10:
      return Is(t.type._context), null;
    case 22:
    case 23:
      return Ws(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Lr = !1, he = !1, Gf = typeof WeakSet == "function" ? WeakSet : Set, F = null;
function an(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ne(e, t, r);
  }
  else n.current = null;
}
function Bi(e, t, n) {
  try {
    n();
  } catch (r) {
    ne(e, t, r);
  }
}
var to = !1;
function Kf(e, t) {
  if (Ti = Jr, e = mu(), Ss(e)) {
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
        var s = 0, o = -1, u = -1, c = 0, g = 0, y = e, m = null;
        t: for (; ; ) {
          for (var h; y !== n || l !== 0 && y.nodeType !== 3 || (o = s + l), y !== i || r !== 0 && y.nodeType !== 3 || (u = s + r), y.nodeType === 3 && (s += y.nodeValue.length), (h = y.firstChild) !== null; )
            m = y, y = h;
          for (; ; ) {
            if (y === e) break t;
            if (m === n && ++c === l && (o = s), m === i && ++g === r && (u = s), (h = y.nextSibling) !== null) break;
            y = m, m = y.parentNode;
          }
          y = h;
        }
        n = o === -1 || u === -1 ? null : { start: o, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Mi = { focusedElem: e, selectionRange: n }, Jr = !1, F = t; F !== null; ) if (t = F, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, F = e;
  else for (; F !== null; ) {
    t = F;
    try {
      var S = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (S !== null) {
            var C = S.memoizedProps, A = S.memoizedState, f = t.stateNode, d = f.getSnapshotBeforeUpdate(t.elementType === t.type ? C : We(t.type, C), A);
            f.__reactInternalSnapshotBeforeUpdate = d;
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
          throw Error(L(163));
      }
    } catch (k) {
      ne(t, t.return, k);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, F = e;
      break;
    }
    F = t.return;
  }
  return S = to, to = !1, S;
}
function Bn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && Bi(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function jl(e, t) {
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
function Gi(e) {
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
function cc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, cc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[et], delete t[ir], delete t[zi], delete t[Mf], delete t[Lf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function dc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function no(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || dc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ki(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = tl));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ki(e, t, n), e = e.sibling; e !== null; ) Ki(e, t, n), e = e.sibling;
}
function Yi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Yi(e, t, n), e = e.sibling; e !== null; ) Yi(e, t, n), e = e.sibling;
}
var ce = null, He = !1;
function pt(e, t, n) {
  for (n = n.child; n !== null; ) fc(e, t, n), n = n.sibling;
}
function fc(e, t, n) {
  if (tt && typeof tt.onCommitFiberUnmount == "function") try {
    tt.onCommitFiberUnmount(wl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      he || an(n, t);
    case 6:
      var r = ce, l = He;
      ce = null, pt(e, t, n), ce = r, He = l, ce !== null && (He ? (e = ce, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ce.removeChild(n.stateNode));
      break;
    case 18:
      ce !== null && (He ? (e = ce, n = n.stateNode, e.nodeType === 8 ? Jl(e.parentNode, n) : e.nodeType === 1 && Jl(e, n), er(e)) : Jl(ce, n.stateNode));
      break;
    case 4:
      r = ce, l = He, ce = n.stateNode.containerInfo, He = !0, pt(e, t, n), ce = r, He = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!he && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && Bi(n, t, s), l = l.next;
        } while (l !== r);
      }
      pt(e, t, n);
      break;
    case 1:
      if (!he && (an(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (o) {
        ne(n, t, o);
      }
      pt(e, t, n);
      break;
    case 21:
      pt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (he = (r = he) || n.memoizedState !== null, pt(e, t, n), he = r) : pt(e, t, n);
      break;
    default:
      pt(e, t, n);
  }
}
function ro(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Gf()), t.forEach(function(r) {
      var l = rp.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Ve(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var i = e, s = t, o = s;
      e: for (; o !== null; ) {
        switch (o.tag) {
          case 5:
            ce = o.stateNode, He = !1;
            break e;
          case 3:
            ce = o.stateNode.containerInfo, He = !0;
            break e;
          case 4:
            ce = o.stateNode.containerInfo, He = !0;
            break e;
        }
        o = o.return;
      }
      if (ce === null) throw Error(L(160));
      fc(i, s, l), ce = null, He = !1;
      var u = l.alternate;
      u !== null && (u.return = null), l.return = null;
    } catch (c) {
      ne(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) pc(t, e), t = t.sibling;
}
function pc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ve(t, e), Je(e), r & 4) {
        try {
          Bn(3, e, e.return), jl(3, e);
        } catch (C) {
          ne(e, e.return, C);
        }
        try {
          Bn(5, e, e.return);
        } catch (C) {
          ne(e, e.return, C);
        }
      }
      break;
    case 1:
      Ve(t, e), Je(e), r & 512 && n !== null && an(n, n.return);
      break;
    case 5:
      if (Ve(t, e), Je(e), r & 512 && n !== null && an(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Xn(l, "");
        } catch (C) {
          ne(e, e.return, C);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, o = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          o === "input" && i.type === "radio" && i.name != null && Ro(l, i), wi(o, s);
          var c = wi(o, i);
          for (s = 0; s < u.length; s += 2) {
            var g = u[s], y = u[s + 1];
            g === "style" ? $o(l, y) : g === "dangerouslySetInnerHTML" ? Ao(l, y) : g === "children" ? Xn(l, y) : us(l, g, y, c);
          }
          switch (o) {
            case "input":
              mi(l, i);
              break;
            case "textarea":
              Oo(l, i);
              break;
            case "select":
              var m = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var h = i.value;
              h != null ? un(l, !!i.multiple, h, !1) : m !== !!i.multiple && (i.defaultValue != null ? un(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : un(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[ir] = i;
        } catch (C) {
          ne(e, e.return, C);
        }
      }
      break;
    case 6:
      if (Ve(t, e), Je(e), r & 4) {
        if (e.stateNode === null) throw Error(L(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (C) {
          ne(e, e.return, C);
        }
      }
      break;
    case 3:
      if (Ve(t, e), Je(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        er(t.containerInfo);
      } catch (C) {
        ne(e, e.return, C);
      }
      break;
    case 4:
      Ve(t, e), Je(e);
      break;
    case 13:
      Ve(t, e), Je(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Vs = re())), r & 4 && ro(e);
      break;
    case 22:
      if (g = n !== null && n.memoizedState !== null, e.mode & 1 ? (he = (c = he) || g, Ve(t, e), he = c) : Ve(t, e), Je(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !g && e.mode & 1) for (F = e, g = e.child; g !== null; ) {
          for (y = F = g; F !== null; ) {
            switch (m = F, h = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Bn(4, m, m.return);
                break;
              case 1:
                an(m, m.return);
                var S = m.stateNode;
                if (typeof S.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount();
                  } catch (C) {
                    ne(r, n, C);
                  }
                }
                break;
              case 5:
                an(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  io(y);
                  continue;
                }
            }
            h !== null ? (h.return = m, F = h) : io(y);
          }
          g = g.sibling;
        }
        e: for (g = null, y = e; ; ) {
          if (y.tag === 5) {
            if (g === null) {
              g = y;
              try {
                l = y.stateNode, c ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (o = y.stateNode, u = y.memoizedProps.style, s = u != null && u.hasOwnProperty("display") ? u.display : null, o.style.display = bo("display", s));
              } catch (C) {
                ne(e, e.return, C);
              }
            }
          } else if (y.tag === 6) {
            if (g === null) try {
              y.stateNode.nodeValue = c ? "" : y.memoizedProps;
            } catch (C) {
              ne(e, e.return, C);
            }
          } else if ((y.tag !== 22 && y.tag !== 23 || y.memoizedState === null || y === e) && y.child !== null) {
            y.child.return = y, y = y.child;
            continue;
          }
          if (y === e) break e;
          for (; y.sibling === null; ) {
            if (y.return === null || y.return === e) break e;
            g === y && (g = null), y = y.return;
          }
          g === y && (g = null), y.sibling.return = y.return, y = y.sibling;
        }
      }
      break;
    case 19:
      Ve(t, e), Je(e), r & 4 && ro(e);
      break;
    case 21:
      break;
    default:
      Ve(
        t,
        e
      ), Je(e);
  }
}
function Je(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (dc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Xn(l, ""), r.flags &= -33);
          var i = no(e);
          Yi(e, i, l);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, o = no(e);
          Ki(e, o, s);
          break;
        default:
          throw Error(L(161));
      }
    } catch (u) {
      ne(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Yf(e, t, n) {
  F = e, mc(e);
}
function mc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var l = F, i = l.child;
    if (l.tag === 22 && r) {
      var s = l.memoizedState !== null || Lr;
      if (!s) {
        var o = l.alternate, u = o !== null && o.memoizedState !== null || he;
        o = Lr;
        var c = he;
        if (Lr = s, (he = u) && !c) for (F = l; F !== null; ) s = F, u = s.child, s.tag === 22 && s.memoizedState !== null ? so(l) : u !== null ? (u.return = s, F = u) : so(l);
        for (; i !== null; ) F = i, mc(i), i = i.sibling;
        F = l, Lr = o, he = c;
      }
      lo(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, F = i) : lo(e);
  }
}
function lo(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            he || jl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !he) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : We(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Va(t, i, r);
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
              Va(t, s, n);
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
                var g = c.memoizedState;
                if (g !== null) {
                  var y = g.dehydrated;
                  y !== null && er(y);
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
            throw Error(L(163));
        }
        he || t.flags & 512 && Gi(t);
      } catch (m) {
        ne(t, t.return, m);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, F = n;
      break;
    }
    F = t.return;
  }
}
function io(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, F = n;
      break;
    }
    F = t.return;
  }
}
function so(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            jl(4, t);
          } catch (u) {
            ne(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ne(t, l, u);
            }
          }
          var i = t.return;
          try {
            Gi(t);
          } catch (u) {
            ne(t, i, u);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Gi(t);
          } catch (u) {
            ne(t, s, u);
          }
      }
    } catch (u) {
      ne(t, t.return, u);
    }
    if (t === e) {
      F = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      o.return = t.return, F = o;
      break;
    }
    F = t.return;
  }
}
var Xf = Math.ceil, fl = ft.ReactCurrentDispatcher, $s = ft.ReactCurrentOwner, be = ft.ReactCurrentBatchConfig, W = 0, ue = null, le = null, de = 0, Ie = 0, on = Lt(0), se = 0, dr = null, Wt = 0, Il = 0, Us = 0, Gn = null, ke = null, Vs = 0, _n = 1 / 0, rt = null, pl = !1, Xi = null, Ct = null, Pr = !1, wt = null, ml = 0, Kn = 0, Zi = null, Wr = -1, Hr = 0;
function we() {
  return W & 6 ? re() : Wr !== -1 ? Wr : Wr = re();
}
function Nt(e) {
  return e.mode & 1 ? W & 2 && de !== 0 ? de & -de : zf.transition !== null ? (Hr === 0 && (Hr = Jo()), Hr) : (e = G, e !== 0 || (e = window.event, e = e === void 0 ? 16 : iu(e.type)), e) : 1;
}
function Ke(e, t, n, r) {
  if (50 < Kn) throw Kn = 0, Zi = null, Error(L(185));
  pr(e, n, r), (!(W & 2) || e !== ue) && (e === ue && (!(W & 2) && (Il |= n), se === 4 && yt(e, de)), je(e, r), n === 1 && W === 0 && !(t.mode & 1) && (_n = re() + 500, El && Pt()));
}
function je(e, t) {
  var n = e.callbackNode;
  Pd(e, t);
  var r = Zr(e, e === ue ? de : 0);
  if (r === 0) n !== null && ha(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ha(n), t === 1) e.tag === 0 ? Pf(ao.bind(null, e)) : Eu(ao.bind(null, e)), If(function() {
      !(W & 6) && Pt();
    }), n = null;
    else {
      switch (qo(r)) {
        case 1:
          n = ms;
          break;
        case 4:
          n = Xo;
          break;
        case 16:
          n = Xr;
          break;
        case 536870912:
          n = Zo;
          break;
        default:
          n = Xr;
      }
      n = Sc(n, hc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function hc(e, t) {
  if (Wr = -1, Hr = 0, W & 6) throw Error(L(327));
  var n = e.callbackNode;
  if (mn() && e.callbackNode !== n) return null;
  var r = Zr(e, e === ue ? de : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = hl(e, r);
  else {
    t = r;
    var l = W;
    W |= 2;
    var i = yc();
    (ue !== e || de !== t) && (rt = null, _n = re() + 500, bt(e, t));
    do
      try {
        qf();
        break;
      } catch (o) {
        gc(e, o);
      }
    while (!0);
    js(), fl.current = i, W = l, le !== null ? t = 0 : (ue = null, de = 0, t = se);
  }
  if (t !== 0) {
    if (t === 2 && (l = Ei(e), l !== 0 && (r = l, t = Ji(e, l))), t === 1) throw n = dr, bt(e, 0), yt(e, r), je(e, re()), n;
    if (t === 6) yt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Zf(l) && (t = hl(e, r), t === 2 && (i = Ei(e), i !== 0 && (r = i, t = Ji(e, i))), t === 1)) throw n = dr, bt(e, 0), yt(e, r), je(e, re()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          Rt(e, ke, rt);
          break;
        case 3:
          if (yt(e, r), (r & 130023424) === r && (t = Vs + 500 - re(), 10 < t)) {
            if (Zr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              we(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Pi(Rt.bind(null, e, ke, rt), t);
            break;
          }
          Rt(e, ke, rt);
          break;
        case 4:
          if (yt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var s = 31 - Ge(r);
            i = 1 << s, s = t[s], s > l && (l = s), r &= ~i;
          }
          if (r = l, r = re() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Xf(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Pi(Rt.bind(null, e, ke, rt), r);
            break;
          }
          Rt(e, ke, rt);
          break;
        case 5:
          Rt(e, ke, rt);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return je(e, re()), e.callbackNode === n ? hc.bind(null, e) : null;
}
function Ji(e, t) {
  var n = Gn;
  return e.current.memoizedState.isDehydrated && (bt(e, t).flags |= 256), e = hl(e, t), e !== 2 && (t = ke, ke = n, t !== null && qi(t)), e;
}
function qi(e) {
  ke === null ? ke = e : ke.push.apply(ke, e);
}
function Zf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], i = l.getSnapshot;
        l = l.value;
        try {
          if (!Ye(i(), l)) return !1;
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
function yt(e, t) {
  for (t &= ~Us, t &= ~Il, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ge(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ao(e) {
  if (W & 6) throw Error(L(327));
  mn();
  var t = Zr(e, 0);
  if (!(t & 1)) return je(e, re()), null;
  var n = hl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ei(e);
    r !== 0 && (t = r, n = Ji(e, r));
  }
  if (n === 1) throw n = dr, bt(e, 0), yt(e, t), je(e, re()), n;
  if (n === 6) throw Error(L(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Rt(e, ke, rt), je(e, re()), null;
}
function Qs(e, t) {
  var n = W;
  W |= 1;
  try {
    return e(t);
  } finally {
    W = n, W === 0 && (_n = re() + 500, El && Pt());
  }
}
function Ht(e) {
  wt !== null && wt.tag === 0 && !(W & 6) && mn();
  var t = W;
  W |= 1;
  var n = be.transition, r = G;
  try {
    if (be.transition = null, G = 1, e) return e();
  } finally {
    G = r, be.transition = n, W = t, !(W & 6) && Pt();
  }
}
function Ws() {
  Ie = on.current, Z(on);
}
function bt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, jf(n)), le !== null) for (n = le.return; n !== null; ) {
    var r = n;
    switch (Es(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && nl();
        break;
      case 3:
        wn(), Z(Ce), Z(ge), zs();
        break;
      case 5:
        Ps(r);
        break;
      case 4:
        wn();
        break;
      case 13:
        Z(q);
        break;
      case 19:
        Z(q);
        break;
      case 10:
        Is(r.type._context);
        break;
      case 22:
      case 23:
        Ws();
    }
    n = n.return;
  }
  if (ue = e, le = e = jt(e.current, null), de = Ie = t, se = 0, dr = null, Us = Il = Wt = 0, ke = Gn = null, Ft !== null) {
    for (t = 0; t < Ft.length; t++) if (n = Ft[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = l, r.next = s;
      }
      n.pending = r;
    }
    Ft = null;
  }
  return e;
}
function gc(e, t) {
  do {
    var n = le;
    try {
      if (js(), Ur.current = dl, cl) {
        for (var r = ee.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        cl = !1;
      }
      if (Qt = 0, oe = ie = ee = null, Hn = !1, or = 0, $s.current = null, n === null || n.return === null) {
        se = 1, dr = t, le = null;
        break;
      }
      e: {
        var i = e, s = n.return, o = n, u = t;
        if (t = de, o.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var c = u, g = o, y = g.tag;
          if (!(g.mode & 1) && (y === 0 || y === 11 || y === 15)) {
            var m = g.alternate;
            m ? (g.updateQueue = m.updateQueue, g.memoizedState = m.memoizedState, g.lanes = m.lanes) : (g.updateQueue = null, g.memoizedState = null);
          }
          var h = Ka(s);
          if (h !== null) {
            h.flags &= -257, Ya(h, s, o, i, t), h.mode & 1 && Ga(i, c, t), t = h, u = c;
            var S = t.updateQueue;
            if (S === null) {
              var C = /* @__PURE__ */ new Set();
              C.add(u), t.updateQueue = C;
            } else S.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Ga(i, c, t), Hs();
              break e;
            }
            u = Error(L(426));
          }
        } else if (J && o.mode & 1) {
          var A = Ka(s);
          if (A !== null) {
            !(A.flags & 65536) && (A.flags |= 256), Ya(A, s, o, i, t), Cs(xn(u, o));
            break e;
          }
        }
        i = u = xn(u, o), se !== 4 && (se = 2), Gn === null ? Gn = [i] : Gn.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var f = qu(i, u, t);
              Ua(i, f);
              break e;
            case 1:
              o = u;
              var d = i.type, p = i.stateNode;
              if (!(i.flags & 128) && (typeof d.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Ct === null || !Ct.has(p)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var k = ec(i, o, t);
                Ua(i, k);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      wc(n);
    } catch (D) {
      t = D, le === n && n !== null && (le = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function yc() {
  var e = fl.current;
  return fl.current = dl, e === null ? dl : e;
}
function Hs() {
  (se === 0 || se === 3 || se === 2) && (se = 4), ue === null || !(Wt & 268435455) && !(Il & 268435455) || yt(ue, de);
}
function hl(e, t) {
  var n = W;
  W |= 2;
  var r = yc();
  (ue !== e || de !== t) && (rt = null, bt(e, t));
  do
    try {
      Jf();
      break;
    } catch (l) {
      gc(e, l);
    }
  while (!0);
  if (js(), W = n, fl.current = r, le !== null) throw Error(L(261));
  return ue = null, de = 0, se;
}
function Jf() {
  for (; le !== null; ) vc(le);
}
function qf() {
  for (; le !== null && !kd(); ) vc(le);
}
function vc(e) {
  var t = _c(e.alternate, e, Ie);
  e.memoizedProps = e.pendingProps, t === null ? wc(e) : le = t, $s.current = null;
}
function wc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Bf(n, t), n !== null) {
        n.flags &= 32767, le = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        se = 6, le = null;
        return;
      }
    } else if (n = Hf(n, t, Ie), n !== null) {
      le = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      le = t;
      return;
    }
    le = t = e;
  } while (t !== null);
  se === 0 && (se = 5);
}
function Rt(e, t, n) {
  var r = G, l = be.transition;
  try {
    be.transition = null, G = 1, ep(e, t, n, r);
  } finally {
    be.transition = l, G = r;
  }
  return null;
}
function ep(e, t, n, r) {
  do
    mn();
  while (wt !== null);
  if (W & 6) throw Error(L(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(L(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (zd(e, i), e === ue && (le = ue = null, de = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Pr || (Pr = !0, Sc(Xr, function() {
    return mn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = be.transition, be.transition = null;
    var s = G;
    G = 1;
    var o = W;
    W |= 4, $s.current = null, Kf(e, n), pc(n, e), xf(Mi), Jr = !!Ti, Mi = Ti = null, e.current = n, Yf(n), Ed(), W = o, G = s, be.transition = i;
  } else e.current = n;
  if (Pr && (Pr = !1, wt = e, ml = l), i = e.pendingLanes, i === 0 && (Ct = null), jd(n.stateNode), je(e, re()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (pl) throw pl = !1, e = Xi, Xi = null, e;
  return ml & 1 && e.tag !== 0 && mn(), i = e.pendingLanes, i & 1 ? e === Zi ? Kn++ : (Kn = 0, Zi = e) : Kn = 0, Pt(), null;
}
function mn() {
  if (wt !== null) {
    var e = qo(ml), t = be.transition, n = G;
    try {
      if (be.transition = null, G = 16 > e ? 16 : e, wt === null) var r = !1;
      else {
        if (e = wt, wt = null, ml = 0, W & 6) throw Error(L(331));
        var l = W;
        for (W |= 4, F = e.current; F !== null; ) {
          var i = F, s = i.child;
          if (F.flags & 16) {
            var o = i.deletions;
            if (o !== null) {
              for (var u = 0; u < o.length; u++) {
                var c = o[u];
                for (F = c; F !== null; ) {
                  var g = F;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bn(8, g, i);
                  }
                  var y = g.child;
                  if (y !== null) y.return = g, F = y;
                  else for (; F !== null; ) {
                    g = F;
                    var m = g.sibling, h = g.return;
                    if (cc(g), g === c) {
                      F = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = h, F = m;
                      break;
                    }
                    F = h;
                  }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var C = S.child;
                if (C !== null) {
                  S.child = null;
                  do {
                    var A = C.sibling;
                    C.sibling = null, C = A;
                  } while (C !== null);
                }
              }
              F = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, F = s;
          else e: for (; F !== null; ) {
            if (i = F, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Bn(9, i, i.return);
            }
            var f = i.sibling;
            if (f !== null) {
              f.return = i.return, F = f;
              break e;
            }
            F = i.return;
          }
        }
        var d = e.current;
        for (F = d; F !== null; ) {
          s = F;
          var p = s.child;
          if (s.subtreeFlags & 2064 && p !== null) p.return = s, F = p;
          else e: for (s = d; F !== null; ) {
            if (o = F, o.flags & 2048) try {
              switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  jl(9, o);
              }
            } catch (D) {
              ne(o, o.return, D);
            }
            if (o === s) {
              F = null;
              break e;
            }
            var k = o.sibling;
            if (k !== null) {
              k.return = o.return, F = k;
              break e;
            }
            F = o.return;
          }
        }
        if (W = l, Pt(), tt && typeof tt.onPostCommitFiberRoot == "function") try {
          tt.onPostCommitFiberRoot(wl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      G = n, be.transition = t;
    }
  }
  return !1;
}
function oo(e, t, n) {
  t = xn(n, t), t = qu(e, t, 1), e = Et(e, t, 1), t = we(), e !== null && (pr(e, 1, t), je(e, t));
}
function ne(e, t, n) {
  if (e.tag === 3) oo(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      oo(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ct === null || !Ct.has(r))) {
        e = xn(n, e), e = ec(t, e, 1), t = Et(t, e, 1), e = we(), t !== null && (pr(t, 1, e), je(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function tp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = we(), e.pingedLanes |= e.suspendedLanes & n, ue === e && (de & n) === n && (se === 4 || se === 3 && (de & 130023424) === de && 500 > re() - Vs ? bt(e, 0) : Us |= n), je(e, t);
}
function xc(e, t) {
  t === 0 && (e.mode & 1 ? (t = Sr, Sr <<= 1, !(Sr & 130023424) && (Sr = 4194304)) : t = 1);
  var n = we();
  e = ct(e, t), e !== null && (pr(e, t, n), je(e, n));
}
function np(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), xc(e, n);
}
function rp(e, t) {
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
      throw Error(L(314));
  }
  r !== null && r.delete(t), xc(e, n);
}
var _c;
_c = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ce.current) Ee = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ee = !1, Wf(e, t, n);
    Ee = !!(e.flags & 131072);
  }
  else Ee = !1, J && t.flags & 1048576 && Cu(t, il, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Qr(e, t), e = t.pendingProps;
      var l = gn(t, ge.current);
      pn(t, n), l = Rs(null, t, r, e, l, n);
      var i = Os();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ne(r) ? (i = !0, rl(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ms(t), l.updater = Nl, t.stateNode = l, l._reactInternals = t, bi(t, r, e, n), t = Vi(null, t, r, !0, i, n)) : (t.tag = 0, J && i && ks(t), ye(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Qr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = ip(r), e = We(r, e), l) {
          case 0:
            t = Ui(null, t, r, e, n);
            break e;
          case 1:
            t = Ja(null, t, r, e, n);
            break e;
          case 11:
            t = Xa(null, t, r, e, n);
            break e;
          case 14:
            t = Za(null, t, r, We(r.type, e), n);
            break e;
        }
        throw Error(L(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : We(r, l), Ui(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : We(r, l), Ja(e, t, r, l, n);
    case 3:
      e: {
        if (lc(t), e === null) throw Error(L(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, Lu(e, t), ol(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = xn(Error(L(423)), t), t = qa(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = xn(Error(L(424)), t), t = qa(e, t, r, n, l);
          break e;
        } else for (Me = kt(t.stateNode.containerInfo.firstChild), Le = t, J = !0, Be = null, n = Tu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (yn(), r === l) {
            t = dt(e, t, n);
            break e;
          }
          ye(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Pu(t), e === null && Oi(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = l.children, Li(r, l) ? s = null : i !== null && Li(r, i) && (t.flags |= 32), rc(e, t), ye(e, t, s, n), t.child;
    case 6:
      return e === null && Oi(t), null;
    case 13:
      return ic(e, t, n);
    case 4:
      return Ls(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = vn(t, null, r, n) : ye(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : We(r, l), Xa(e, t, r, l, n);
    case 7:
      return ye(e, t, t.pendingProps, n), t.child;
    case 8:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, s = l.value, Y(sl, r._currentValue), r._currentValue = s, i !== null) if (Ye(i.value, s)) {
          if (i.children === l.children && !Ce.current) {
            t = dt(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var o = i.dependencies;
          if (o !== null) {
            s = i.child;
            for (var u = o.firstContext; u !== null; ) {
              if (u.context === r) {
                if (i.tag === 1) {
                  u = at(-1, n & -n), u.tag = 2;
                  var c = i.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var g = c.pending;
                    g === null ? u.next = u : (u.next = g.next, g.next = u), c.pending = u;
                  }
                }
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Fi(
                  i.return,
                  n,
                  t
                ), o.lanes |= n;
                break;
              }
              u = u.next;
            }
          } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (s = i.return, s === null) throw Error(L(341));
            s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), Fi(s, n, t), s = i.sibling;
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
        ye(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, pn(t, n), l = $e(l), r = r(l), t.flags |= 1, ye(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = We(r, t.pendingProps), l = We(r.type, l), Za(e, t, r, l, n);
    case 15:
      return tc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : We(r, l), Qr(e, t), t.tag = 1, Ne(r) ? (e = !0, rl(t)) : e = !1, pn(t, n), Ju(t, r, l), bi(t, r, l, n), Vi(null, t, r, !0, e, n);
    case 19:
      return sc(e, t, n);
    case 22:
      return nc(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function Sc(e, t) {
  return Yo(e, t);
}
function lp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Fe(e, t, n, r) {
  return new lp(e, t, n, r);
}
function Bs(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function ip(e) {
  if (typeof e == "function") return Bs(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ds) return 11;
    if (e === fs) return 14;
  }
  return 2;
}
function jt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Fe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Br(e, t, n, r, l, i) {
  var s = 2;
  if (r = e, typeof e == "function") Bs(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Zt:
      return $t(n.children, l, i, t);
    case cs:
      s = 8, l |= 8;
      break;
    case ui:
      return e = Fe(12, n, t, l | 2), e.elementType = ui, e.lanes = i, e;
    case ci:
      return e = Fe(13, n, t, l), e.elementType = ci, e.lanes = i, e;
    case di:
      return e = Fe(19, n, t, l), e.elementType = di, e.lanes = i, e;
    case Po:
      return Tl(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Mo:
          s = 10;
          break e;
        case Lo:
          s = 9;
          break e;
        case ds:
          s = 11;
          break e;
        case fs:
          s = 14;
          break e;
        case mt:
          s = 16, r = null;
          break e;
      }
      throw Error(L(130, e == null ? e : typeof e, ""));
  }
  return t = Fe(s, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function $t(e, t, n, r) {
  return e = Fe(7, e, r, t), e.lanes = n, e;
}
function Tl(e, t, n, r) {
  return e = Fe(22, e, r, t), e.elementType = Po, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function si(e, t, n) {
  return e = Fe(6, e, null, t), e.lanes = n, e;
}
function ai(e, t, n) {
  return t = Fe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function sp(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ul(0), this.expirationTimes = Ul(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ul(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Gs(e, t, n, r, l, i, s, o, u) {
  return e = new sp(e, t, n, o, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Fe(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ms(i), e;
}
function ap(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Xt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function kc(e) {
  if (!e) return Tt;
  e = e._reactInternals;
  e: {
    if (Gt(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ne(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ne(n)) return ku(e, n, t);
  }
  return t;
}
function Ec(e, t, n, r, l, i, s, o, u) {
  return e = Gs(n, r, !0, e, l, i, s, o, u), e.context = kc(null), n = e.current, r = we(), l = Nt(n), i = at(r, l), i.callback = t ?? null, Et(n, i, l), e.current.lanes = l, pr(e, l, r), je(e, r), e;
}
function Ml(e, t, n, r) {
  var l = t.current, i = we(), s = Nt(l);
  return n = kc(n), t.context === null ? t.context = n : t.pendingContext = n, t = at(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Et(l, t, s), e !== null && (Ke(e, l, s, i), $r(e, l, s)), s;
}
function gl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function uo(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ks(e, t) {
  uo(e, t), (e = e.alternate) && uo(e, t);
}
function op() {
  return null;
}
var Cc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ys(e) {
  this._internalRoot = e;
}
Ll.prototype.render = Ys.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  Ml(e, t, null, null);
};
Ll.prototype.unmount = Ys.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ht(function() {
      Ml(null, e, null, null);
    }), t[ut] = null;
  }
};
function Ll(e) {
  this._internalRoot = e;
}
Ll.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = nu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < gt.length && t !== 0 && t < gt[n].priority; n++) ;
    gt.splice(n, 0, e), n === 0 && lu(e);
  }
};
function Xs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Pl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function co() {
}
function up(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var c = gl(s);
        i.call(c);
      };
    }
    var s = Ec(t, r, e, 0, null, !1, !1, "", co);
    return e._reactRootContainer = s, e[ut] = s.current, rr(e.nodeType === 8 ? e.parentNode : e), Ht(), s;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function() {
      var c = gl(u);
      o.call(c);
    };
  }
  var u = Gs(e, 0, !1, null, null, !1, !1, "", co);
  return e._reactRootContainer = u, e[ut] = u.current, rr(e.nodeType === 8 ? e.parentNode : e), Ht(function() {
    Ml(t, u, n, r);
  }), u;
}
function zl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof l == "function") {
      var o = l;
      l = function() {
        var u = gl(s);
        o.call(u);
      };
    }
    Ml(t, s, e, l);
  } else s = up(n, t, e, l, r);
  return gl(s);
}
eu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = An(t.pendingLanes);
        n !== 0 && (hs(t, n | 1), je(t, re()), !(W & 6) && (_n = re() + 500, Pt()));
      }
      break;
    case 13:
      Ht(function() {
        var r = ct(e, 1);
        if (r !== null) {
          var l = we();
          Ke(r, e, 1, l);
        }
      }), Ks(e, 1);
  }
};
gs = function(e) {
  if (e.tag === 13) {
    var t = ct(e, 134217728);
    if (t !== null) {
      var n = we();
      Ke(t, e, 134217728, n);
    }
    Ks(e, 134217728);
  }
};
tu = function(e) {
  if (e.tag === 13) {
    var t = Nt(e), n = ct(e, t);
    if (n !== null) {
      var r = we();
      Ke(n, e, t, r);
    }
    Ks(e, t);
  }
};
nu = function() {
  return G;
};
ru = function(e, t) {
  var n = G;
  try {
    return G = e, t();
  } finally {
    G = n;
  }
};
_i = function(e, t, n) {
  switch (t) {
    case "input":
      if (mi(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = kl(r);
            if (!l) throw Error(L(90));
            Do(r), mi(r, l);
          }
        }
      }
      break;
    case "textarea":
      Oo(e, n);
      break;
    case "select":
      t = n.value, t != null && un(e, !!n.multiple, t, !1);
  }
};
Qo = Qs;
Wo = Ht;
var cp = { usingClientEntryPoint: !1, Events: [hr, tn, kl, Uo, Vo, Qs] }, Rn = { findFiberByHostInstance: Ot, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, dp = { bundleType: Rn.bundleType, version: Rn.version, rendererPackageName: Rn.rendererPackageName, rendererConfig: Rn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ft.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Go(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Rn.findFiberByHostInstance || op, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var zr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zr.isDisabled && zr.supportsFiber) try {
    wl = zr.inject(dp), tt = zr;
  } catch {
  }
}
ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cp;
ze.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xs(t)) throw Error(L(200));
  return ap(e, t, null, n);
};
ze.createRoot = function(e, t) {
  if (!Xs(e)) throw Error(L(299));
  var n = !1, r = "", l = Cc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Gs(e, 1, !1, null, null, n, !1, r, l), e[ut] = t.current, rr(e.nodeType === 8 ? e.parentNode : e), new Ys(t);
};
ze.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(L(188)) : (e = Object.keys(e).join(","), Error(L(268, e)));
  return e = Go(t), e = e === null ? null : e.stateNode, e;
};
ze.flushSync = function(e) {
  return Ht(e);
};
ze.hydrate = function(e, t, n) {
  if (!Pl(t)) throw Error(L(200));
  return zl(null, e, t, !0, n);
};
ze.hydrateRoot = function(e, t, n) {
  if (!Xs(e)) throw Error(L(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", s = Cc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Ec(t, null, e, 1, n ?? null, l, !1, i, s), e[ut] = t.current, rr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Ll(t);
};
ze.render = function(e, t, n) {
  if (!Pl(t)) throw Error(L(200));
  return zl(null, e, t, !1, n);
};
ze.unmountComponentAtNode = function(e) {
  if (!Pl(e)) throw Error(L(40));
  return e._reactRootContainer ? (Ht(function() {
    zl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[ut] = null;
    });
  }), !0) : !1;
};
ze.unstable_batchedUpdates = Qs;
ze.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Pl(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return zl(e, t, n, !1, r);
};
ze.version = "18.3.1-next-f1338f8080-20240426";
function Nc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nc);
    } catch (e) {
      console.error(e);
    }
}
Nc(), No.exports = ze;
var Te = No.exports, jc, fo = Te;
jc = fo.createRoot, fo.hydrateRoot;
window.api = Q;
const fp = async () => {
  const e = await Q.fetchApi("/meld/home-dir");
  if (!e.ok)
    throw new Error("Failed to fetch home directory");
  return (await e.json()).home;
}, es = async (e = 0, t = 30, n = "", r = "default") => {
  const l = await Q.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}`
  );
  if (!l.ok)
    throw new Error(`Failed to fetch images: ${l.statusText}`);
  return await l.json();
}, pp = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await Q.fetchApi(n);
  return r.ok ? await r.json() : [];
}, mp = async () => {
  const e = await Q.fetchApi("/meld/search-suggestions");
  return e.ok ? await e.json() : [];
}, Ic = async () => {
  const e = await Q.fetchApi("/meld/settings");
  if (!e.ok)
    return {
      dev_mode: !1,
      "gallery.show_parent_image": !0,
      "gallery.hide_parent_images": !0,
      "sidebar.show_filename": "filename",
      "sidebar.show_dimensions": !0,
      "sidebar.show_created_at": !1,
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
      "viewer.delete_mode": "confirm",
      "fullscreen.delete_mode": "confirm",
      "gallery.matching_strategy": "phash_created",
      "gallery.lineage_max_depth": 5,
      "gallery.trash_retention_days": 30,
      "gallery.trash.show_missing": !1
    };
  const t = await e.json();
  return typeof t["sidebar.show_filename"] == "boolean" && (t["sidebar.show_filename"] = t["sidebar.show_filename"] ? "filename" : "none"), t;
}, hp = async (e, t) => {
  if (!(await Q.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  })).ok)
    throw new Error("Failed to save setting");
}, gp = async (e, t) => {
  if (!(await Q.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  })).ok)
    throw new Error("Failed to link parent");
}, yp = async (e, t = 12) => {
  const n = await Q.fetchApi(
    `/meld/suggest-parents?id=${e}&threshold=${t}`
  );
  return n.ok ? await n.json() : [];
}, ts = async (e) => {
  const t = await Q.fetchApi(`/meld/lineage?id=${e}`);
  return t.ok ? await t.json() : [];
}, vp = async (e) => {
  const t = new FormData();
  t.append("image", e), t.append("overwrite", "true");
  const n = await Q.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, ns = async (e, t = !1) => {
  const n = await Q.fetchApi("/meld/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      permanent: t
    })
  });
  if (!n.ok) {
    const r = await n.json();
    throw new Error(r.error || "Failed to delete images");
  }
}, Tc = async (e) => {
  const t = await Q.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to restore images");
  }
}, Mc = async (e) => {
  const t = await Q.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok)
    throw new Error("Failed to register image");
  return await t.json();
}, wp = async (e, t, n = !1, r) => {
  const l = await Q.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  return l.ok ? await l.json() : { folders: [], images: [], image_count: 0 };
}, xp = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await Q.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  return l.ok ? await l.json() : {};
}, _p = async (e, t, n) => {
  const r = await Q.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  return r.ok ? (await r.json()).count : 0;
}, Sp = async (e) => {
  const t = await Q.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to start scan");
  }
}, kp = async () => {
  if (!(await Q.fetchApi("/meld/scan/cancel", {
    method: "POST"
  })).ok)
    throw new Error("Failed to cancel scan");
}, Ep = async () => {
  const e = await Q.fetchApi("/meld/favorites");
  return e.ok ? await e.json() : [];
}, Cp = async (e, t) => {
  if (!(await Q.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  })).ok)
    throw new Error("Failed to save favorite");
}, po = async (e) => {
  if (!(await Q.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  })).ok)
    throw new Error("Failed to delete favorite");
}, Np = async (e, t) => {
  if (!(await Q.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  })).ok)
    throw new Error("Failed to update favorite");
}, Zs = async () => {
  const e = await Q.fetchApi("/meld/tags");
  return e.ok ? await e.json() : [];
}, jp = async (e) => {
  const t = await Q.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  if (!t.ok)
    throw new Error("Failed to create tag");
  return await t.json();
}, Ip = async (e) => {
  if (!(await Q.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  })).ok)
    throw new Error("Failed to delete tag");
}, Tp = async (e, t) => {
  const n = await Q.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  if (!n.ok) {
    const r = await n.json();
    throw new Error(r.error || "Failed to rename tag");
  }
}, Mp = async (e, t) => {
  if (!(await Q.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  })).ok)
    throw new Error("Failed to update image tags");
}, Lp = async (e, t, n) => {
  if (!(await Q.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  })).ok)
    throw new Error("Failed to bulk update image tags");
}, Pp = async (e) => {
  const t = await Q.fetchApi(`/meld/image/${e}/workflow`);
  if (!t.ok)
    throw new Error("Failed to fetch workflow");
  return await t.json();
}, zp = async (e) => {
  const t = await Q.fetchApi(`/meld/image/${e}/snapshot_data`);
  if (!t.ok)
    throw new Error("Failed to fetch snapshot data");
  return await t.json();
};
var Lc = { exports: {} }, Dl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dp = x, Rp = Symbol.for("react.element"), Op = Symbol.for("react.fragment"), Fp = Object.prototype.hasOwnProperty, Ap = Dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, bp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Pc(e, t, n) {
  var r, l = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) Fp.call(t, r) && !bp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Rp, type: e, key: i, ref: s, props: l, _owner: Ap.current };
}
Dl.Fragment = Op;
Dl.jsx = Pc;
Dl.jsxs = Pc;
Lc.exports = Dl;
var a = Lc.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var $p = {
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
const Up = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), H = (e, t) => {
  const n = x.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: s,
      className: o = "",
      children: u,
      ...c
    }, g) => x.createElement(
      "svg",
      {
        ref: g,
        ...$p,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: s ? Number(i) * 24 / Number(l) : i,
        className: ["lucide", `lucide-${Up(e)}`, o].join(" "),
        ...c
      },
      [
        ...t.map(([y, m]) => x.createElement(y, m)),
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
const Vp = H("AlertTriangle", [
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
const Qp = H("ArrowBigRight", [
  ["path", { d: "M6 9h6V5l7 7-7 7v-4H6V9z", key: "7fvt9c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wp = H("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mo = H("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hp = H("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bp = H("Box", [
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
const Gp = H("Calendar", [
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
const Kp = H("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zc = H("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dc = H("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rc = H("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yp = H("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xp = H("Download", [
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
const Zp = H("Folder", [
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
const Jp = H("Info", [
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
const qp = H("LayoutGrid", [
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
const em = H("Maximize", [
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
const tm = H("Minimize", [
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
const nm = H("MoreVertical", [
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
const Oc = H("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rm = H("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lm = H("PlusCircle", [
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
const Js = H("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yl = H("RefreshCw", [
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
const Sn = H("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const im = H("Settings", [
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
const sm = H("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ho = H("Star", [
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
const jn = H("Tag", [
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
const kn = H("Trash2", [
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
const am = H("Type", [
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
const om = H("Upload", [
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
const xe = H("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
let vl = !1;
const um = (e) => {
  vl = e, vl && console.log("[Meld] Logger initialized in DEV mode.");
}, cm = (...e) => {
  vl && console.log("[Meld]", ...e);
}, dm = (...e) => {
  vl && console.warn("[Meld]", ...e);
}, fm = (...e) => {
  console.error("[Meld]", ...e);
}, ve = {
  log: cm,
  warn: dm,
  error: fm,
  init: um
}, pm = {
  images: [],
  selectedIds: /* @__PURE__ */ new Set(),
  isLoading: !1,
  error: null,
  lastUpdated: Date.now(),
  viewMode: "list",
  viewScope: "default",
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
    "sidebar.show_filename": "filename",
    "sidebar.show_dimensions": !0,
    "sidebar.show_created_at": !1,
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
    "viewer.delete_mode": "confirm",
    "fullscreen.delete_mode": "confirm",
    "gallery.matching_strategy": "phash_created",
    "gallery.lineage_max_depth": 5,
    "gallery.trash_retention_days": 30,
    "gallery.trash.show_missing": !1
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
function mm(e, t) {
  var n, r;
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "SET_IMAGES": {
      const { images: l, total: i, offset: s } = t.payload;
      let o = e.viewerImageId;
      return e.viewerMode === "gallery" && o !== null && !l.some((u) => u.id === o) && (o = null), {
        ...e,
        images: l,
        isLoading: !1,
        error: null,
        viewerImageId: o,
        pagination: {
          total: i,
          offset: s,
          limit: e.pagination.limit,
          hasMore: s + l.length < i
        }
      };
    }
    case "APPEND_IMAGES": {
      const { images: l, total: i, offset: s } = t.payload, o = [...e.images, ...l], u = Array.from(
        new Map(o.map((c) => [c.id, c])).values()
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
        const c = new Set(e.selectedIds);
        return c.add(t.payload), {
          ...e,
          selectedIds: c,
          lastSelectedId: t.payload
        };
      }
      const l = e.images.findIndex(
        (c) => c.id === e.lastSelectedId
      ), i = e.images.findIndex(
        (c) => c.id === t.payload
      );
      if (l === -1 || i === -1) return e;
      const [s, o] = [
        Math.min(l, i),
        Math.max(l, i)
      ], u = new Set(e.selectedIds);
      for (let c = s; c <= o; c++)
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
    case "SET_VIEW_MODE":
      return {
        ...e,
        viewMode: t.payload
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
      return {
        ...e,
        lastUpdated: Date.now()
      };
    case "OPEN_VIEWER": {
      const l = t.payload, i = typeof l == "number" ? l : l.id, s = typeof l == "number" ? "gallery" : l.mode, o = e.viewerMode === "lineage" && s === "lineage" && e.lineageImages.some((u) => u.id === i);
      return {
        ...e,
        viewerImageId: i,
        viewerMode: s,
        lineageImages: o ? e.lineageImages : []
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
        (c) => c.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && c.has_children)
      );
      if (e.viewerImageId === null || s.length === 0)
        return e;
      const o = s.findIndex(
        (c) => c.id === e.viewerImageId
      );
      if (o === -1 || o === s.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || o === s.length - 1 && !i)
        return e;
      const u = (o + 1) % s.length;
      return {
        ...e,
        viewerImageId: s[u].id
      };
    }
    case "PREVIOUS_IMAGE": {
      const i = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], s = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (c) => c.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && c.has_children)
      );
      if (e.viewerImageId === null || s.length === 0)
        return e;
      const o = s.findIndex(
        (c) => c.id === e.viewerImageId
      );
      if (o === -1 || o === 0 && e.viewerMode === "gallery" && e.pagination.hasMore || o === 0 && !i)
        return e;
      const u = (o - 1 + s.length) % s.length;
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
const Fc = x.createContext(void 0), hm = ({
  children: e
}) => {
  const [t, n] = x.useReducer(mm, pm), r = x.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    try {
      const c = await es(
        0,
        t.pagination.limit,
        t.searchQuery,
        t.viewScope
      );
      n({ type: "SET_IMAGES", payload: c });
    } catch (c) {
      n({
        type: "SET_ERROR",
        payload: c instanceof Error ? c.message : String(c)
      });
    }
  }, [t.pagination.limit, t.searchQuery, t.viewScope]), l = x.useCallback(async () => {
    if (!(t.isLoading || !t.pagination.hasMore)) {
      n({ type: "SET_LOADING", payload: !0 });
      try {
        const c = t.images.length, g = await es(
          c,
          t.pagination.limit,
          t.searchQuery,
          t.viewScope
        );
        n({ type: "APPEND_IMAGES", payload: g });
      } catch (c) {
        n({
          type: "SET_ERROR",
          payload: c instanceof Error ? c.message : String(c)
        });
      }
    }
  }, [
    t.isLoading,
    t.pagination.hasMore,
    t.pagination.limit,
    t.images.length,
    t.searchQuery,
    t.viewScope
  ]), i = x.useCallback(async () => {
    try {
      const c = await Ep();
      n({ type: "SET_FAVORITES", payload: c });
    } catch (c) {
      ve.error("Failed to load favorites", c);
    }
  }, []), s = x.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const c = Array.from(t.selectedIds), y = t.images.filter(
      (m) => t.selectedIds.has(m.id)
    ).some(
      (m) => m.parent_id || m.has_children
    );
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: c,
        hasLineage: y,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), o = x.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const c = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 }), await Tc(c), n({ type: "CLEAR_SELECTION" }), await r();
    } catch (g) {
      n({
        type: "SET_ERROR",
        payload: g instanceof Error ? g.message : String(g)
      });
    }
  }, [t.selectedIds, r]), u = x.useCallback(
    async (c, g) => {
      try {
        await hp(c, g), n({ type: "SET_SETTINGS", payload: { [c]: g } });
      } catch (y) {
        n({
          type: "SET_ERROR",
          payload: y instanceof Error ? y.message : String(y)
        });
      }
    },
    []
  );
  return x.useEffect(() => {
    (async () => {
      try {
        const g = await Ic();
        n({ type: "SET_SETTINGS", payload: g });
      } catch (g) {
        ve.error("Failed to load settings", g);
      }
    })();
  }, []), x.useEffect(() => {
    i();
  }, [i]), x.useEffect(() => {
    const c = () => {
      r();
    }, g = (m) => {
      const h = m.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: h }
      });
    }, y = (m) => {
      const h = m.detail;
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
    return window.addEventListener("meld-refresh", c), window.addEventListener("meld-scan-progress", g), window.addEventListener("meld-scan-finished", y), () => {
      window.removeEventListener("meld-refresh", c), window.removeEventListener("meld-scan-progress", g), window.removeEventListener("meld-scan-finished", y);
    };
  }, [r, t.scanStatus.progress.total]), x.useEffect(() => {
    r();
  }, [r]), /* @__PURE__ */ a.jsx(
    Fc.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: r,
        loadMoreImages: l,
        refreshFavorites: i,
        deleteSelected: s,
        restoreSelected: o,
        updateSetting: u
      },
      children: e
    }
  );
}, Xe = () => {
  const e = x.useContext(Fc);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, gm = ({
  children: e,
  height: t = 150,
  rootMargin: n = "400px"
}) => {
  const [r, l] = x.useState(!1), i = x.useRef(null);
  return x.useEffect(() => {
    const s = new IntersectionObserver(
      ([u]) => {
        l(u.isIntersecting);
      },
      { rootMargin: n }
    ), o = i.current;
    return o && s.observe(o), () => {
      o && s.unobserve(o);
    };
  }, [n]), /* @__PURE__ */ a.jsx(
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
}, ym = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = Xe(), l = e.selectedIds.size;
  if (l === 0) return null;
  const i = e.viewScope === "trash", s = () => {
    const o = e.images.filter(
      (c) => e.selectedIds.has(c.id)
    ), u = /* @__PURE__ */ new Set();
    for (const c of o)
      if (c.tags)
        for (const g of c.tags)
          u.add(g);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(u)
      }
    });
  };
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `meld-bulk-bar ${i ? "meld-bulk-bar--trash" : ""}`,
      children: [
        /* @__PURE__ */ a.jsxs("span", { className: "meld-bulk-bar__info", children: [
          l,
          " items selected"
        ] }),
        i ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--restore",
              onClick: r,
              children: [
                /* @__PURE__ */ a.jsx(
                  yl,
                  {
                    size: 16,
                    style: { marginRight: "8px", verticalAlign: "middle" }
                  }
                ),
                "Restore"
              ]
            }
          ),
          /* @__PURE__ */ a.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--delete",
              onClick: n,
              children: [
                /* @__PURE__ */ a.jsx(
                  kn,
                  {
                    size: 16,
                    style: { marginRight: "8px", verticalAlign: "middle" }
                  }
                ),
                "Delete Permanently"
              ]
            }
          )
        ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--edit",
              onClick: s,
              children: [
                /* @__PURE__ */ a.jsx(
                  jn,
                  {
                    size: 16,
                    style: { marginRight: "8px", verticalAlign: "middle" }
                  }
                ),
                "Edit Tags"
              ]
            }
          ),
          /* @__PURE__ */ a.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--delete",
              onClick: n,
              children: [
                /* @__PURE__ */ a.jsx(
                  kn,
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
        /* @__PURE__ */ a.jsxs(
          "button",
          {
            type: "button",
            className: "meld-bulk-bar__button meld-bulk-bar__button--cancel",
            onClick: () => t({ type: "CLEAR_SELECTION" }),
            children: [
              /* @__PURE__ */ a.jsx(xe, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
              "Cancel"
            ]
          }
        )
      ]
    }
  );
}, Ac = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: l, dispatch: i, refreshImages: s } = Xe(), o = x.useRef(!0);
  x.useEffect(() => () => {
    o.current = !1;
  }, []);
  const u = x.useRef(l.viewerImageId);
  x.useEffect(() => {
    u.current = l.viewerImageId;
  }, [l.viewerImageId]);
  const c = x.useCallback(() => {
    i({ type: "CLOSE_MODAL" });
  }, [i]), g = x.useCallback(
    (h) => {
      if (!o.current) return;
      const S = u.current;
      if (S === null || !h.has(S))
        return;
      const C = l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
        (d) => d.exists !== !1 && !(l.settings["gallery.hide_parent_images"] && d.has_children)
      ), A = C.findIndex(
        (d) => d.id === S
      );
      if (A === -1) return;
      let f = !1;
      for (let d = 1; d < C.length; d++) {
        const p = (A + d) % C.length;
        if (!h.has(C[p].id)) {
          i({
            type: "OPEN_VIEWER",
            payload: { id: C[p].id, mode: l.viewerMode }
          }), f = !0;
          break;
        }
      }
      f || i({ type: "CLOSE_VIEWER" });
    },
    [
      l.viewerMode,
      l.lineageImages,
      l.images,
      l.settings,
      i
    ]
  );
  x.useEffect(() => {
    const h = (S) => {
      S.key === "Escape" && c();
    };
    return window.addEventListener("keydown", h), () => window.removeEventListener("keydown", h);
  }, [c]);
  const y = async () => {
    try {
      i({ type: "SET_LOADING", payload: !0 });
      const h = new Set(e);
      if (g(h), await ns(e, n), !o.current) return;
      !n && r && r(e), i({ type: "CLEAR_SELECTION" }), i({ type: "CLOSE_MODAL" }), await s();
    } catch (h) {
      i({
        type: "SET_ERROR",
        payload: h instanceof Error ? h.message : String(h)
      }), i({ type: "SET_LOADING", payload: !1 });
    }
  }, m = async () => {
    try {
      i({ type: "SET_LOADING", payload: !0 });
      const h = new Set(e);
      for (const S of e) {
        const C = await ts(S);
        if (!o.current) return;
        for (const A of C)
          h.add(A.id);
      }
      g(h), await ns(Array.from(h), n), !n && r && r(Array.from(h)), i({ type: "CLEAR_SELECTION" }), i({ type: "CLOSE_MODAL" }), await s();
    } catch (h) {
      i({
        type: "SET_ERROR",
        payload: h instanceof Error ? h.message : String(h)
      }), i({ type: "SET_LOADING", payload: !1 });
    }
  };
  return Te.createPortal(
    /* @__PURE__ */ a.jsx("div", { className: "meld-modal-overlay", onClick: c, children: /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "meld-modal-content meld-modal-content--small",
        onClick: (h) => h.stopPropagation(),
        children: [
          /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ a.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
              /* @__PURE__ */ a.jsx(kn, { size: 20, color: "var(--meld-danger-color)" }),
              n ? "Permanent Deletion" : "Move to Trash"
            ] }),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: c,
                children: /* @__PURE__ */ a.jsx(xe, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ a.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ a.jsxs(
            "div",
            {
              style: {
                padding: "10px 0",
                display: "flex",
                flexDirection: "column",
                gap: "15px"
              },
              children: [
                /* @__PURE__ */ a.jsxs("p", { children: [
                  "Are you sure you want to",
                  " ",
                  n ? "permanently delete" : "move to trash",
                  " ",
                  /* @__PURE__ */ a.jsx("strong", { children: e.length }),
                  " selected items?"
                ] }),
                /* @__PURE__ */ a.jsxs(
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
                      /* @__PURE__ */ a.jsx(
                        Vp,
                        {
                          size: 20,
                          style: {
                            color: n ? "var(--meld-danger-color)" : "var(--meld-accent-color)",
                            flexShrink: 0
                          }
                        }
                      ),
                      /* @__PURE__ */ a.jsx("div", { style: { fontSize: "13px" }, children: n ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
                        /* @__PURE__ */ a.jsx("strong", { children: "WARNING:" }),
                        " Physical files will be permanently deleted from the trash bin. This operation cannot be undone."
                      ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
                        /* @__PURE__ */ a.jsx("strong", { children: "INFO:" }),
                        " Selected items will be moved to the trash bin. You can restore them later from the settings."
                      ] }) })
                    ]
                  }
                ),
                t && /* @__PURE__ */ a.jsxs(
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
                      /* @__PURE__ */ a.jsx("strong", { children: "Source" }),
                      " or descendants. You can choose to delete just the selected items or all related items in their lineage."
                    ]
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-footer", children: [
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-secondary",
                onClick: c,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-danger",
                  onClick: y,
                  children: n ? "Delete Permanently" : "Move to Trash"
                }
              ),
              t && /* @__PURE__ */ a.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-danger",
                  title: n ? "Permanently delete all images in the lineage" : "Move all images in the lineage to trash",
                  onClick: m,
                  children: n ? "Delete All Related" : "Move All Related"
                }
              )
            ] })
          ] })
        ]
      }
    ) }),
    document.fullscreenElement || document.body
  );
}, Ae = (e) => {
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
}, vm = ({ image: e }) => {
  const { state: t, dispatch: n } = Xe(), r = t.selectedIds.has(e.id), [l, i] = x.useState(null), [s, o] = x.useState(!1), [u, c] = x.useState(null), [g, y] = x.useState(!1), m = x.useRef(null), h = async (_, I, v = !1) => {
    try {
      await navigator.clipboard.writeText(_), v ? (y(!0), setTimeout(() => y(!1), 2e3)) : (c(I), setTimeout(() => c(null), 2e3));
    } catch (E) {
      console.error("Failed to copy text: ", E);
    }
  };
  x.useEffect(() => {
    const _ = (v) => {
      v.key === "Escape" && (l ? i(null) : o(!1));
    }, I = (v) => {
      m.current && !m.current.contains(v.target) && o(!1);
    };
    return window.addEventListener("keydown", _), s && document.addEventListener("mousedown", I), () => {
      window.removeEventListener("keydown", _), document.removeEventListener("mousedown", I);
    };
  }, [s, l]);
  const S = (_) => {
    const I = t.settings["gallery.lineage_max_depth"];
    if (I === 0) return [];
    if (_.ancestors && _.ancestors.length > 0)
      return _.ancestors.slice(0, I).map((b) => ({
        id: b.id,
        imgSrc: Ae(b)
      }));
    const v = _.parent_id;
    if (!v || !_.parent_filename) return [];
    const E = t.images.find((b) => b.id === v);
    let w = null;
    if (E ? w = Ae(E) : w = Ae({
      filename: _.parent_filename,
      subfolder: _.parent_subfolder || "",
      type: _.parent_type
    }), !w) return [];
    const j = {
      id: v || null,
      imgSrc: w
    };
    if (E && I > 1) {
      const b = S(E);
      return [j, ...b].slice(0, I);
    }
    return [j];
  }, C = S(e), f = t.settings["sidebar.show_filename"] === "filepath" ? `${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, d = Ae(e), p = (_) => {
    _.shiftKey ? (_.preventDefault(), _.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : _.ctrlKey || _.metaKey || t.selectedIds.size > 0 ? (_.preventDefault(), _.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
  }, k = (_) => {
    _.shiftKey ? (_.preventDefault(), _.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : n({ type: "TOGGLE_SELECT", payload: e.id });
  }, D = (_) => {
    (_.shiftKey || _.ctrlKey || _.metaKey || t.selectedIds.size > 0) && _.preventDefault();
  }, N = (_) => {
    (_.key === "Enter" || _.key === " ") && (_.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
  }, R = async () => {
    try {
      const _ = await Pp(e.id);
      if (!_.workflow) {
        alert("No workflow information is saved for this image.");
        return;
      }
      await window.app.loadGraphData(
        _.workflow
      ), console.log("Workflow restored successfully from Meld");
    } catch (_) {
      console.error("Error restoring workflow:", _), alert("Failed to restore workflow.");
    }
  }, P = async () => {
    try {
      const _ = await zp(e.id), I = "MeldUnifiedLoader", v = window.app, w = window.LiteGraph.createNode(I);
      if (!w) {
        console.error(`Node type ${I} not found.`), alert(
          `Node type ${I} not found. Please make sure the Meld Unified Loader node is installed.`
        );
        return;
      }
      const j = {
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
      if (w.widgets) {
        for (const [T, M] of Object.entries(j)) {
          const O = _[T];
          if (O != null) {
            const z = w.widgets.find(
              (V) => V.name === M
            );
            z && (z.value = O);
          }
        }
        const B = w.widgets.find(
          (T) => T.name === "control_after_generate"
        );
        B && (B.value = "fixed");
      }
      const b = v.canvas.ds.offset, U = v.canvas.ds.scale;
      w.pos = [(-b[0] + 400) / U, (-b[1] + 300) / U], v.graph.add(w), v.canvas.selectNode(w), v.canvas.centerOnNode(w);
    } catch (_) {
      console.error("Error adding Unified Loader:", _), alert("Failed to load settings.");
    }
  };
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `meld-image-card ${r ? "meld-image-card--selected" : ""}`,
      onClick: k,
      onMouseDown: D,
      onKeyDown: N,
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ a.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ a.jsx(
          "img",
          {
            src: d,
            className: "meld-image-card__thumbnail",
            alt: e.filename,
            loading: "lazy",
            onMouseDown: D,
            onClick: (_) => {
              _.stopPropagation(), p(_);
            }
          }
        ) }),
        /* @__PURE__ */ a.jsxs("div", { className: "meld-image-card__details", children: [
          (t.settings["sidebar.show_filename"] !== "none" || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ a.jsxs("div", { className: "meld-image-card__filename", children: [
            t.settings["sidebar.show_filename"] !== "none" && f,
            t.settings["sidebar.show_filename"] !== "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
            t.settings["sidebar.show_filename"] === "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
          ] }),
          t.settings["gallery.show_parent_image"] && C.length > 0 && /* @__PURE__ */ a.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
            /* @__PURE__ */ a.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
            /* @__PURE__ */ a.jsx("div", { className: "meld-lineage-thumbs", children: C.map(
              (_, I) => _.imgSrc && /* @__PURE__ */ a.jsx(
                "img",
                {
                  src: _.imgSrc,
                  className: "meld-lineage-badge__parent-thumb",
                  loading: "lazy",
                  onClick: (v) => {
                    v.stopPropagation(), n({
                      type: "OPEN_VIEWER",
                      payload: { id: _.id || e.id, mode: "lineage" }
                    });
                  },
                  title: I === 0 ? "Source" : I === 1 ? "Grand-Source" : `Ancestor (S${I + 1})`,
                  alt: "source thumb"
                },
                _.id || I
              )
            ) })
          ] }),
          t.settings["sidebar.show_created_at"] && /* @__PURE__ */ a.jsxs("div", { className: "meld-image-card__meta-item", children: [
            /* @__PURE__ */ a.jsx("div", { className: "meld-image-card__meta-label", children: "Created At" }),
            /* @__PURE__ */ a.jsx("div", { className: "meld-image-card__meta-content", children: new Date(e.created_at * 1e3).toLocaleString() })
          ] }),
          t.viewScope === "trash" && e.deleted_at && /* @__PURE__ */ a.jsxs("div", { className: "meld-image-card__meta-item", children: [
            /* @__PURE__ */ a.jsx("div", { className: "meld-image-card__meta-label", children: "Deleted At" }),
            /* @__PURE__ */ a.jsx("div", { className: "meld-image-card__meta-content", children: new Date(e.deleted_at * 1e3).toLocaleString() })
          ] }),
          t.settings["sidebar.show_model_name"] && /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (_) => {
                _.stopPropagation(), i({
                  title: "Model",
                  text: e.model_name || "-"
                });
              },
              children: [
                /* @__PURE__ */ a.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: (_) => {
                      _.stopPropagation(), h(e.model_name || "-", "Model");
                    },
                    children: u === "Model" ? "Copied!" : "Model"
                  }
                ),
                /* @__PURE__ */ a.jsx("div", { className: "meld-image-card__meta-content", children: e.model_name || "-" })
              ]
            }
          ),
          t.settings["sidebar.show_positive_prompt"] && /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (_) => {
                _.stopPropagation(), i({
                  title: "Positive Prompt",
                  text: e.positive_prompt || e.positive || "-"
                });
              },
              children: [
                /* @__PURE__ */ a.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: (_) => {
                      _.stopPropagation(), h(
                        e.positive_prompt || e.positive || "-",
                        "Positive"
                      );
                    },
                    children: u === "Positive" ? "Copied!" : "Positive"
                  }
                ),
                /* @__PURE__ */ a.jsx("div", { className: "meld-image-card__meta-content", children: e.positive_prompt || e.positive || "-" })
              ]
            }
          ),
          t.settings["sidebar.show_negative_prompt"] && /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (_) => {
                _.stopPropagation(), i({
                  title: "Negative Prompt",
                  text: e.negative_prompt || e.negative || "-"
                });
              },
              children: [
                /* @__PURE__ */ a.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: (_) => {
                      _.stopPropagation(), h(
                        e.negative_prompt || e.negative || "-",
                        "Negative"
                      );
                    },
                    children: u === "Negative" ? "Copied!" : "Negative"
                  }
                ),
                /* @__PURE__ */ a.jsx("div", { className: "meld-image-card__meta-content", children: e.negative_prompt || e.negative || "-" })
              ]
            }
          ),
          t.settings["sidebar.show_tags"] && /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (_) => {
                _.stopPropagation(), n({
                  type: "OPEN_MODAL",
                  payload: {
                    type: "tag_edit",
                    imageIds: [e.id],
                    tags: e.tags || []
                  }
                });
              },
              children: [
                /* @__PURE__ */ a.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                /* @__PURE__ */ a.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((_, I) => /* @__PURE__ */ a.jsx("span", { className: "meld-image-card__tag", children: _ }, `${_}-${I}`)) : /* @__PURE__ */ a.jsx(
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
        /* @__PURE__ */ a.jsxs("div", { className: "meld-image-card__menu-container", ref: m, children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (_) => {
                _.stopPropagation(), o(!s);
              },
              title: "Menu",
              children: /* @__PURE__ */ a.jsx(nm, { size: 16 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (_) => {
                _.stopPropagation(), P();
              },
              title: "Add Unified Loader",
              children: /* @__PURE__ */ a.jsx(mo, { size: 16 })
            }
          ),
          s && /* @__PURE__ */ a.jsxs("div", { className: "meld-image-card__menu", children: [
            /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (_) => {
                  _.stopPropagation(), P(), o(!1);
                },
                children: [
                  /* @__PURE__ */ a.jsx(mo, { size: 14 }),
                  /* @__PURE__ */ a.jsx("span", { children: "Add Unified Loader" })
                ]
              }
            ),
            /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (_) => {
                  _.stopPropagation(), R(), o(!1);
                },
                children: [
                  /* @__PURE__ */ a.jsx(Qp, { size: 14 }),
                  /* @__PURE__ */ a.jsx("span", { children: "Restore Full Workflow" })
                ]
              }
            ),
            /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (_) => {
                  _.stopPropagation(), n({
                    type: "OPEN_MODAL",
                    payload: { type: "parent_selection", imageId: e.id }
                  }), o(!1);
                },
                children: [
                  /* @__PURE__ */ a.jsx(lm, { size: 14 }),
                  /* @__PURE__ */ a.jsx("span", { children: "Add source image" })
                ]
              }
            ),
            /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (_) => {
                  _.stopPropagation(), n({
                    type: "OPEN_MODAL",
                    payload: {
                      type: "tag_edit",
                      imageIds: [e.id],
                      tags: e.tags || []
                    }
                  }), o(!1);
                },
                children: [
                  /* @__PURE__ */ a.jsx(jn, { size: 14 }),
                  /* @__PURE__ */ a.jsx("span", { children: "Edit Tags" })
                ]
              }
            )
          ] })
        ] }),
        l && Te.createPortal(
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "meld-prompt-popup-overlay",
              onClick: (_) => {
                _.stopPropagation(), i(null);
              },
              children: /* @__PURE__ */ a.jsxs(
                "div",
                {
                  className: "meld-prompt-popup-content",
                  onClick: (_) => _.stopPropagation(),
                  children: [
                    /* @__PURE__ */ a.jsxs("div", { className: "meld-prompt-popup-header", children: [
                      /* @__PURE__ */ a.jsx("span", { children: l.title }),
                      /* @__PURE__ */ a.jsxs(
                        "div",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            g ? /* @__PURE__ */ a.jsx(
                              zc,
                              {
                                size: 18,
                                style: { color: "var(--meld-success-color)" }
                              }
                            ) : /* @__PURE__ */ a.jsx(
                              Yp,
                              {
                                className: "meld-prompt-popup-copy",
                                size: 18,
                                onClick: () => h(l.text, "", !0)
                              }
                            ),
                            /* @__PURE__ */ a.jsx(
                              xe,
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
                    /* @__PURE__ */ a.jsx("div", { className: "meld-prompt-popup-text", children: l.text })
                  ]
                }
              )
            }
          ),
          document.body
        )
      ]
    }
  );
}, bc = () => {
  const { dispatch: e } = Xe(), [t, n] = x.useState({
    type: "output",
    subfolder: "",
    custom_path: "",
    recursive: !0,
    auto_link_parent: !0,
    tags: []
  }), [r, l] = x.useState([]), [i, s] = x.useState([]), [o, u] = x.useState(0), [c, g] = x.useState(!1), [y, m] = x.useState([]), [h, S] = x.useState(""), [C, A] = x.useState(!1), [f, d] = x.useState(null);
  x.useEffect(() => {
    (async () => {
      try {
        const E = await fp();
        n((w) => ({ ...w, custom_path: E }));
      } catch (E) {
        console.error("Failed to fetch home directory:", E);
      }
    })();
  }, []), x.useEffect(() => {
    const v = new AbortController();
    return (async () => {
      const w = t.type === "custom" ? t.custom_path : t.subfolder;
      if (console.log(
        `[Meld] loadFolders started. Path: "${w}", Type: "${t.type}"`
      ), t.type === "custom" && !w) {
        console.log("[Meld] Custom path is empty, skipping load."), l([]), s([]), u(0);
        return;
      }
      g(!0);
      const j = w, b = t.type;
      try {
        console.log("[Meld] Step 1: Fast load starting...");
        const U = await wp(
          t.type,
          w,
          !0,
          v.signal
        );
        if (v.signal.aborted) {
          console.log("[Meld] Step 1: Aborted.");
          return;
        }
        console.log(
          `[Meld] Step 1 complete. Found ${U.folders.length} folders, ${U.images.length} images.`
        ), l(U.folders), s(U.images), u(null);
        const B = U.folders.map((T) => T.name);
        B.length > 0 && (console.log(
          `[Meld] Step 2: Metadata fetch starting for ${B.length} folders...`
        ), xp(
          b,
          j,
          B,
          v.signal
        ).then((T) => {
          if (v.signal.aborted) {
            console.log("[Meld] Step 2: Aborted.");
            return;
          }
          console.log("[Meld] Step 2: Metadata fetch complete."), l(
            (M) => M.map((O) => {
              const z = T[O.name];
              return z ? { ...O, count: z.count, preview: z.preview } : O;
            })
          );
        }).catch((T) => {
          T.name !== "AbortError" && console.error("[Meld] Step 2: Metadata fetch failed:", T);
        })), console.log("[Meld] Step 3: Path image count starting..."), _p(b, j, v.signal).then((T) => {
          if (v.signal.aborted) {
            console.log("[Meld] Step 3: Aborted.");
            return;
          }
          console.log(`[Meld] Step 3: Path image count complete: ${T}`), u(T);
        }).catch((T) => {
          T.name !== "AbortError" && console.error("[Meld] Step 3: Path image count failed:", T);
        });
      } catch (U) {
        if (U.name === "AbortError") {
          console.log("[Meld] Request aborted.");
          return;
        }
        console.error("[Meld] Failed to load folders:", U), l([]), s([]), u(0);
      } finally {
        v.signal.aborted || g(!1);
      }
    })(), () => {
      v.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const p = x.useCallback(async () => {
    A(!0);
    try {
      const v = await Zs();
      m(v);
    } catch (v) {
      console.error("Failed to fetch tags:", v);
    } finally {
      A(!1);
    }
  }, []);
  x.useEffect(() => {
    p();
  }, [p]), x.useEffect(() => {
    const v = (E) => {
      E.key === "Escape" && f && d(null);
    };
    return window.addEventListener("keydown", v), () => window.removeEventListener("keydown", v);
  }, [f]);
  const k = x.useMemo(() => y.filter(
    (v) => v.name.toLowerCase().includes(h.toLowerCase()) && !t.tags.includes(v.name)
  ), [y, h, t.tags]), D = (v) => {
    const E = v.trim();
    E && !t.tags.includes(E) && (n({ ...t, tags: [...t.tags, E] }), S(""));
  }, N = (v) => {
    n({ ...t, tags: t.tags.filter((E) => E !== v) });
  }, R = (v) => {
    v.key === "Enter" && h.trim() && (v.preventDefault(), D(h.trim()));
  }, P = async () => {
    try {
      await Sp(t), e({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !0,
          isFinished: !1,
          shouldCancel: !1,
          newCount: 0,
          progress: { current: 0, total: 0, phase: "registering" }
        }
      }), e({ type: "CLOSE_MODAL" });
    } catch (v) {
      console.error("Failed to start scan:", v), alert(`Failed to start scan: ${v}`);
    }
  }, _ = (v) => {
    if (t.type === "custom") {
      const E = t.custom_path.includes("\\") ? "\\" : "/", w = t.custom_path.endsWith(E) ? `${t.custom_path}${v}` : `${t.custom_path}${E}${v}`;
      n({ ...t, custom_path: w });
    } else {
      const E = t.subfolder ? `${t.subfolder}/${v}` : v;
      n({ ...t, subfolder: E });
    }
  }, I = () => {
    if (t.type === "custom") {
      const v = t.custom_path.includes("\\") ? "\\" : "/", E = t.custom_path.split(v);
      if (E.length > 1) {
        E.pop();
        let w = E.join(v);
        w === "" && v === "/" && (w = "/"), n({ ...t, custom_path: w });
      }
    } else {
      const v = t.subfolder.split("/");
      v.pop(), n({ ...t, subfolder: v.join("/") });
    }
  };
  return Te.createPortal(
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: () => e({ type: "CLOSE_MODAL" }),
        children: [
          /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--large",
              onClick: (v) => v.stopPropagation(),
              children: [
                /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ a.jsx("h2", { children: "Import Images" }),
                  /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => e({ type: "CLOSE_MODAL" }),
                      children: /* @__PURE__ */ a.jsx(xe, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ a.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ a.jsxs("div", { className: "meld-import-container", children: [
                  /* @__PURE__ */ a.jsxs("div", { className: "meld-import-sidebar", children: [
                    /* @__PURE__ */ a.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ a.jsx("label", { htmlFor: "base-location", children: "Base Location" }),
                      /* @__PURE__ */ a.jsxs(
                        "select",
                        {
                          id: "base-location",
                          value: t.type,
                          onChange: (v) => n({
                            ...t,
                            type: v.target.value,
                            subfolder: ""
                          }),
                          children: [
                            /* @__PURE__ */ a.jsx("option", { value: "output", children: "Output Directory" }),
                            /* @__PURE__ */ a.jsx("option", { value: "input", children: "Input Directory" }),
                            /* @__PURE__ */ a.jsx("option", { value: "custom", children: "Custom Path (Absolute)" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ a.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ a.jsx("span", { className: "meld-form-label", children: "Images Found" }),
                      /* @__PURE__ */ a.jsx("div", { className: "meld-path-count", children: o === null ? /* @__PURE__ */ a.jsx("span", { className: "meld-path-count--loading", children: "Scanning..." }) : `${o} images` })
                    ] }),
                    /* @__PURE__ */ a.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ a.jsxs("label", { children: [
                      /* @__PURE__ */ a.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: t.recursive,
                          onChange: (v) => n({ ...t, recursive: v.target.checked })
                        }
                      ),
                      "Recursive Scan"
                    ] }) }),
                    /* @__PURE__ */ a.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ a.jsxs("label", { children: [
                      /* @__PURE__ */ a.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: t.auto_link_parent,
                          onChange: (v) => n({
                            ...t,
                            auto_link_parent: v.target.checked
                          })
                        }
                      ),
                      "Auto Link Parent"
                    ] }) }),
                    /* @__PURE__ */ a.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ a.jsx("label", { htmlFor: "import-tags", children: "Tags to Add" }),
                      /* @__PURE__ */ a.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ a.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((v) => /* @__PURE__ */ a.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        v,
                        /* @__PURE__ */ a.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => N(v),
                            children: /* @__PURE__ */ a.jsx(xe, { size: 12 })
                          }
                        )
                      ] }, v)) }),
                      /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ a.jsx(Sn, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ a.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: h,
                            onChange: (v) => S(v.target.value),
                            onKeyDown: R
                          }
                        ),
                        h.trim() && !t.tags.includes(h.trim()) && /* @__PURE__ */ a.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => D(h),
                            children: /* @__PURE__ */ a.jsx(Js, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ a.jsx("div", { className: "meld-tag-suggestions", children: C ? /* @__PURE__ */ a.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : k.length === 0 ? h && /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        h
                      ] }) : k.map((v) => /* @__PURE__ */ a.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => D(v.name),
                          children: v.name
                        },
                        v.id
                      )) })
                    ] }),
                    /* @__PURE__ */ a.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ a.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "meld-btn meld-btn-primary",
                        onClick: P,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ a.jsx(rm, { size: 16 }),
                          "Start Import"
                        ]
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ a.jsxs("div", { className: "meld-import-browser", children: [
                    /* @__PURE__ */ a.jsxs("div", { className: "meld-browser-header", children: [
                      /* @__PURE__ */ a.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-browser-back",
                          disabled: t.type === "custom" ? t.custom_path === "/" || !t.custom_path.includes("/") && !t.custom_path.includes("\\") : !t.subfolder,
                          onClick: I,
                          children: [
                            /* @__PURE__ */ a.jsx(Dc, { size: 16 }),
                            "Back"
                          ]
                        }
                      ),
                      /* @__PURE__ */ a.jsx("div", { className: "meld-browser-path-container", children: t.type === "custom" ? /* @__PURE__ */ a.jsx(
                        "input",
                        {
                          type: "text",
                          className: "meld-browser-path-input",
                          value: t.custom_path,
                          onChange: (v) => n({ ...t, custom_path: v.target.value }),
                          placeholder: "Enter absolute path..."
                        }
                      ) : /* @__PURE__ */ a.jsxs("div", { className: "meld-browser-path-display", children: [
                        /* @__PURE__ */ a.jsxs("span", { className: "meld-browser-path-type", children: [
                          t.type,
                          "/"
                        ] }),
                        t.subfolder
                      ] }) })
                    ] }),
                    /* @__PURE__ */ a.jsx("div", { className: "meld-folder-list", children: c ? /* @__PURE__ */ a.jsx("div", { className: "meld-browser-loading", children: "Loading..." }) : r.length === 0 && i.length === 0 ? /* @__PURE__ */ a.jsx("div", { className: "meld-browser-empty", children: "No items found." }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
                      r.map((v) => /* @__PURE__ */ a.jsxs(
                        "div",
                        {
                          className: "meld-folder-item",
                          onClick: () => _(v.name),
                          children: [
                            /* @__PURE__ */ a.jsx("div", { className: "meld-folder-icon-wrapper", children: v.preview ? /* @__PURE__ */ a.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: Ae(v.preview),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ a.jsx(Zp, { size: 16 }) }),
                            /* @__PURE__ */ a.jsx("span", { className: "meld-folder-name", children: v.name }),
                            /* @__PURE__ */ a.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${v.count === null ? "meld-folder-count--loading" : ""}`,
                                children: v.count !== null ? `${v.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ a.jsx(Rc, { size: 14 })
                          ]
                        },
                        v.name
                      )),
                      i.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "meld-browser-image-grid", children: i.map((v) => /* @__PURE__ */ a.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => d(v),
                          children: /* @__PURE__ */ a.jsx(
                            "img",
                            {
                              src: Ae(v),
                              alt: v.filename,
                              title: v.filename
                            }
                          )
                        },
                        v.filename
                      )) })
                    ] }) })
                  ] })
                ] }) })
              ]
            }
          ),
          f && /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (v) => {
                v.stopPropagation(), d(null);
              },
              children: /* @__PURE__ */ a.jsxs(
                "div",
                {
                  className: "meld-import-preview-content",
                  onClick: (v) => v.stopPropagation(),
                  children: [
                    /* @__PURE__ */ a.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                      /* @__PURE__ */ a.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-import-preview-close",
                          onClick: () => d(null),
                          children: /* @__PURE__ */ a.jsx(xe, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ a.jsx(
                        "img",
                        {
                          src: Ae(f),
                          alt: f.filename
                        }
                      )
                    ] }),
                    /* @__PURE__ */ a.jsx("div", { className: "meld-import-preview-info", children: f.filename })
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
}, $c = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = Xe(), [l, i] = x.useState([]), [s, o] = x.useState(!0), [u, c] = x.useState(!1), g = t.images.find((f) => f.id === e), y = x.useCallback(async () => {
    o(!0);
    try {
      const f = await yp(e);
      i(f);
    } catch (f) {
      console.error("Failed to load suggestions:", f);
    } finally {
      o(!1);
    }
  }, [e]);
  x.useEffect(() => {
    y();
  }, [y]);
  const m = async (f) => {
    try {
      await gp(e, f), await r(), n({ type: "CLOSE_MODAL" });
    } catch (d) {
      console.error("Failed to link parent:", d);
    }
  }, h = async (f) => {
    o(!0);
    try {
      const d = await vp(f), { id: p } = await Mc({
        filename: d.name,
        subfolder: d.subfolder || "",
        type: d.type || "input"
      });
      await m(p);
    } catch (d) {
      console.error("Failed to upload/register image:", d);
    } finally {
      o(!1);
    }
  }, S = (f) => {
    f.preventDefault(), f.stopPropagation(), c(!1);
    const d = f.dataTransfer.files[0];
    d != null && d.type.startsWith("image/") && h(d);
  };
  if (!g) return null;
  const C = l.filter((f) => f.is_source_match), A = l.filter((f) => !f.is_source_match);
  return Te.createPortal(
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: () => n({ type: "CLOSE_MODAL" }),
        children: /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-content", onClick: (f) => f.stopPropagation(), children: [
          /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ a.jsxs("h2", { children: [
              "Select Source for #",
              g.id
            ] }),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: () => n({ type: "CLOSE_MODAL" }),
                children: /* @__PURE__ */ a.jsx(xe, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-body", children: [
            /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: `meld-drop-zone ${u ? "meld-drop-zone--active" : ""}`,
                onDragEnter: (f) => {
                  f.preventDefault(), f.stopPropagation(), c(!0);
                },
                onDragOver: (f) => {
                  f.preventDefault(), f.stopPropagation(), f.dataTransfer.dropEffect = "copy", c(!0);
                },
                onDragLeave: (f) => {
                  f.preventDefault(), f.stopPropagation(), c(!1);
                },
                onDrop: S,
                children: [
                  /* @__PURE__ */ a.jsx(om, { size: 32 }),
                  /* @__PURE__ */ a.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            s ? /* @__PURE__ */ a.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ a.jsxs("div", { className: "meld-suggestions-container", children: [
              C.length > 0 && /* @__PURE__ */ a.jsxs("section", { children: [
                /* @__PURE__ */ a.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ a.jsx("div", { className: "meld-suggestion-grid", children: C.map((f) => /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    className: "meld-suggestion-card",
                    onClick: () => m(f.id),
                    children: [
                      /* @__PURE__ */ a.jsx("img", { src: Ae(f), alt: f.filename }),
                      /* @__PURE__ */ a.jsx("div", { className: "meld-suggestion-info", children: /* @__PURE__ */ a.jsx("span", { className: "meld-suggestion-filename", children: f.filename }) })
                    ]
                  },
                  f.id
                )) })
              ] }),
              /* @__PURE__ */ a.jsxs("section", { children: [
                /* @__PURE__ */ a.jsx("h3", { children: "Visual Matches (pHash)" }),
                A.length > 0 ? /* @__PURE__ */ a.jsx("div", { className: "meld-suggestion-grid", children: A.map((f) => /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    className: "meld-suggestion-card",
                    onClick: () => m(f.id),
                    children: [
                      /* @__PURE__ */ a.jsx("img", { src: Ae(f), alt: f.filename }),
                      /* @__PURE__ */ a.jsxs("div", { className: "meld-suggestion-info", children: [
                        /* @__PURE__ */ a.jsx("span", { className: "meld-suggestion-filename", children: f.filename }),
                        /* @__PURE__ */ a.jsxs("span", { className: "meld-suggestion-distance", children: [
                          "Match:",
                          " ",
                          Math.round((64 - f.distance) / 64 * 100),
                          "%"
                        ] })
                      ] })
                    ]
                  },
                  f.id
                )) }) : /* @__PURE__ */ a.jsx("p", { className: "meld-no-suggestions", children: "No visual matches found." })
              ] })
            ] })
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, Uc = () => {
  const { state: e, dispatch: t, updateSetting: n } = Xe(), [r, l] = x.useState("General"), [i, s] = x.useState({
    ...e.settings
  }), [o, u] = x.useState(
    e.settings["gallery.page_size"].toString()
  ), [c, g] = x.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [y, m] = x.useState(e.settings["viewer.thumbnail_window_size"].toString()), [h, S] = x.useState(e.settings["gallery.trash_retention_days"].toString()), [C, A] = x.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [f, d] = x.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    p,
    k
  ] = x.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    D,
    N
  ] = x.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), R = [
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
        { value: "phash_created", label: "pHash & Created Time" },
        { value: "filename_phash", label: "Filename -> pHash" },
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
      key: "gallery.trash_retention_days",
      label: "Trash Retention Period (Days)",
      description: "How many days to keep deleted items in trash (0-365).",
      type: "number",
      category: "General",
      min: 0,
      max: 365
    },
    {
      key: "sidebar.show_filename",
      label: "Show Filename/Path",
      description: "Choose how to display the filename or path on the card.",
      type: "select",
      category: "Sidebar",
      options: [
        { value: "filename", label: "Filename" },
        { value: "filepath", label: "Filepath" },
        { value: "none", label: "None" }
      ]
    },
    {
      key: "sidebar.show_dimensions",
      label: "Show Dimensions",
      description: "Display the image dimensions (width x height) on the card.",
      type: "boolean",
      category: "Sidebar"
    },
    {
      key: "sidebar.show_created_at",
      label: "Show Created At",
      description: "Display the image creation date and time on the card.",
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
      key: "viewer.delete_mode",
      label: "Delete Mode",
      description: "Choose how images are deleted in view mode.",
      type: "select",
      category: "View",
      options: [
        { value: "confirm", label: "Confirmed" },
        { value: "target_only", label: "Unconfirmed (Target Only)" },
        { value: "lineage", label: "Unconfirmed (Include Lineage)" }
      ]
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
      key: "fullscreen.delete_mode",
      label: "Delete Mode",
      description: "Choose how images are deleted in fullscreen mode.",
      type: "select",
      category: "Full Screen",
      options: [
        { value: "confirm", label: "Confirmed" },
        { value: "target_only", label: "Unconfirmed (Target Only)" },
        { value: "lineage", label: "Unconfirmed (Include Lineage)" }
      ]
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
  ], P = async () => {
    const E = Object.keys(i).filter((w) => i[w] !== e.settings[w]);
    if (E.length > 0)
      for (const w of E)
        await n(w, i[w]);
    t({ type: "CLOSE_MODAL" });
  }, _ = (E, w) => {
    s((j) => ({
      ...j,
      [E]: !w
    }));
  }, I = (E, w, j, b) => {
    E === "gallery.page_size" ? u(w) : E === "gallery.lineage_max_depth" ? g(w) : E === "viewer.thumbnail_window_size" ? m(w) : E === "gallery.trash_retention_days" ? S(w) : E === "viewer.details.max_positive_prompt_lines" ? A(w) : E === "viewer.details.max_negative_prompt_lines" ? d(w) : E === "fullscreen.details.max_positive_prompt_lines" ? k(w) : E === "fullscreen.details.max_negative_prompt_lines" && N(w);
    const U = Number.parseInt(w, 10);
    if (!Number.isNaN(U)) {
      let B = U;
      j !== void 0 && B < j && (B = j), b !== void 0 && B > b && (B = b), s((T) => ({
        ...T,
        [E]: B
      }));
    }
  }, v = R.filter(
    (E) => E.category === r
  );
  return Te.createPortal(
    /* @__PURE__ */ a.jsx("div", { className: "meld-modal-overlay", onClick: P, children: /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "meld-modal-content meld-settings-modal",
        onClick: (E) => E.stopPropagation(),
        children: [
          /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ a.jsx("h2", { children: "Settings" }),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: P,
                children: /* @__PURE__ */ a.jsx(xe, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "meld-settings-layout", children: [
            /* @__PURE__ */ a.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ a.jsxs("div", { className: "meld-tabs", children: [
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "General" ? "active" : ""}`,
                  onClick: () => l("General"),
                  children: "General"
                }
              ),
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "Sidebar" ? "active" : ""}`,
                  onClick: () => l("Sidebar"),
                  children: "Sidebar"
                }
              ),
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "Search" ? "active" : ""}`,
                  onClick: () => l("Search"),
                  children: "Search"
                }
              ),
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "View" ? "active" : ""}`,
                  onClick: () => l("View"),
                  children: "View"
                }
              ),
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "View Details" ? "active" : ""}`,
                  onClick: () => l("View Details"),
                  children: "View Details"
                }
              ),
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "Full Screen" ? "active" : ""}`,
                  onClick: () => l("Full Screen"),
                  children: "Full Screen"
                }
              ),
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "Full Screen Detail" ? "active" : ""}`,
                  onClick: () => l("Full Screen Detail"),
                  children: "Full Screen Detail"
                }
              )
            ] }) }),
            /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-body", children: [
              /* @__PURE__ */ a.jsx("div", { className: "meld-settings-list", children: v.map((E) => {
                var w;
                return /* @__PURE__ */ a.jsxs("div", { className: "meld-settings-item", children: [
                  /* @__PURE__ */ a.jsxs("div", { className: "meld-settings-item__info", children: [
                    /* @__PURE__ */ a.jsx("div", { className: "meld-settings-item__label", children: E.label }),
                    /* @__PURE__ */ a.jsx("div", { className: "meld-settings-item__description", children: E.description })
                  ] }),
                  /* @__PURE__ */ a.jsxs("div", { className: "meld-settings-item__control", children: [
                    E.type === "boolean" && /* @__PURE__ */ a.jsxs("label", { className: "meld-switch", children: [
                      /* @__PURE__ */ a.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: !!i[E.key],
                          onChange: () => _(
                            E.key,
                            !!i[E.key]
                          )
                        }
                      ),
                      /* @__PURE__ */ a.jsx("span", { className: "meld-switch__slider" })
                    ] }),
                    E.type === "number" && /* @__PURE__ */ a.jsx(
                      "input",
                      {
                        type: "number",
                        className: "meld-number-input",
                        value: E.key === "gallery.page_size" ? o : E.key === "gallery.lineage_max_depth" ? c : E.key === "viewer.thumbnail_window_size" ? y : E.key === "viewer.details.max_positive_prompt_lines" ? C : E.key === "viewer.details.max_negative_prompt_lines" ? f : E.key === "fullscreen.details.max_positive_prompt_lines" ? p : E.key === "fullscreen.details.max_negative_prompt_lines" ? D : E.key === "gallery.trash_retention_days" ? h : i[E.key],
                        min: E.min,
                        max: E.max,
                        onChange: (j) => I(
                          E.key,
                          j.target.value,
                          E.min,
                          E.max
                        ),
                        onBlur: () => {
                          E.key === "gallery.page_size" ? u(
                            i["gallery.page_size"].toString()
                          ) : E.key === "gallery.lineage_max_depth" ? g(
                            i["gallery.lineage_max_depth"].toString()
                          ) : E.key === "viewer.thumbnail_window_size" ? m(
                            i["viewer.thumbnail_window_size"].toString()
                          ) : E.key === "gallery.trash_retention_days" ? S(
                            i["gallery.trash_retention_days"].toString()
                          ) : E.key === "viewer.details.max_positive_prompt_lines" ? A(
                            i["viewer.details.max_positive_prompt_lines"].toString()
                          ) : E.key === "viewer.details.max_negative_prompt_lines" ? d(
                            i["viewer.details.max_negative_prompt_lines"].toString()
                          ) : E.key === "fullscreen.details.max_positive_prompt_lines" ? k(
                            i["fullscreen.details.max_positive_prompt_lines"].toString()
                          ) : E.key === "fullscreen.details.max_negative_prompt_lines" && N(
                            i["fullscreen.details.max_negative_prompt_lines"].toString()
                          );
                        }
                      }
                    ),
                    E.type === "select" && /* @__PURE__ */ a.jsx(
                      "select",
                      {
                        className: "meld-select",
                        value: i[E.key],
                        onChange: (j) => s((b) => ({
                          ...b,
                          [E.key]: j.target.value
                        })),
                        children: (w = E.options) == null ? void 0 : w.map((j) => /* @__PURE__ */ a.jsx("option", { value: j.value, children: j.label }, j.value))
                      }
                    )
                  ] })
                ] }, E.key);
              }) }),
              r === "General" && /* @__PURE__ */ a.jsx("div", { className: "meld-settings-extra", children: /* @__PURE__ */ a.jsxs("div", { className: "meld-settings-item", children: [
                /* @__PURE__ */ a.jsxs("div", { className: "meld-settings-item__info", children: [
                  /* @__PURE__ */ a.jsx("div", { className: "meld-settings-item__label", children: "Trash Management" }),
                  /* @__PURE__ */ a.jsx("div", { className: "meld-settings-item__description", children: "View and manage items currently in the trash bin." })
                ] }),
                /* @__PURE__ */ a.jsx("div", { className: "meld-settings-item__control", children: /* @__PURE__ */ a.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-button meld-button--secondary",
                    onClick: () => {
                      t({ type: "SET_VIEW_SCOPE", payload: "trash" }), t({ type: "CLOSE_MODAL" });
                    },
                    children: "View Trash"
                  }
                ) })
              ] }) })
            ] })
          ] })
        ]
      }
    ) }),
    document.fullscreenElement || document.body
  );
}, Vc = ({
  imageIds: e,
  initialTags: t,
  onClose: n
}) => {
  const { refreshImages: r } = Xe(), [l, i] = x.useState([]), [s, o] = x.useState(t), [u, c] = x.useState(""), [g, y] = x.useState(!0), [m, h] = x.useState(!1), S = x.useRef(null), C = e.length > 1, A = x.useCallback(async () => {
    y(!0);
    try {
      const N = await Zs();
      i(N);
    } catch (N) {
      console.error("Failed to fetch tags:", N);
    } finally {
      y(!1);
    }
  }, []);
  x.useEffect(() => {
    A();
  }, [A]), x.useEffect(() => {
    S.current && S.current.focus();
  }, []);
  const f = x.useMemo(() => l.filter(
    (N) => N.name.toLowerCase().includes(u.toLowerCase()) && !s.includes(N.name)
  ), [l, u, s]), d = (N) => {
    const R = N.trim();
    R && !s.includes(R) && (o([...s, R]), c(""));
  }, p = (N) => {
    o(s.filter((R) => R !== N));
  }, k = async () => {
    h(!0);
    try {
      if (C) {
        const N = s.filter((P) => !t.includes(P)), R = t.filter(
          (P) => !s.includes(P)
        );
        await Lp(e, N, R);
      } else
        await Mp(e[0], s);
      await r(), n();
    } catch (N) {
      console.error("Failed to update tags:", N), alert("Failed to update tags.");
    } finally {
      h(!1);
    }
  }, D = (N) => {
    N.key === "Enter" && u.trim() ? (N.preventDefault(), d(u.trim())) : N.key === "Escape" && n();
  };
  return Te.createPortal(
    /* @__PURE__ */ a.jsx("div", { className: "meld-modal-overlay", onClick: n, children: /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-content", onClick: (N) => N.stopPropagation(), children: [
      /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-header", children: [
        /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
          /* @__PURE__ */ a.jsx(jn, { size: 18 }),
          /* @__PURE__ */ a.jsx("h3", { style: { margin: 0 }, children: C ? `Edit Tags (${e.length} images)` : "Edit Tags" })
        ] }),
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ a.jsx(xe, { size: 20 }) })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-body", children: [
        C && /* @__PURE__ */ a.jsx(
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
        /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-edit-section", children: [
          /* @__PURE__ */ a.jsx("div", { className: "meld-tag-edit-label", children: C ? "Collective Tags" : "Selected Tags" }),
          /* @__PURE__ */ a.jsx("div", { className: "meld-tag-edit-selected", children: s.length === 0 ? /* @__PURE__ */ a.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : s.map((N) => /* @__PURE__ */ a.jsxs("span", { className: "meld-tag-edit-badge", children: [
            N,
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-edit-remove",
                onClick: () => p(N),
                children: /* @__PURE__ */ a.jsx(xe, { size: 12 })
              }
            )
          ] }, N)) })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-edit-section", children: [
          /* @__PURE__ */ a.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
          /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-search-container", children: [
            /* @__PURE__ */ a.jsx(Sn, { size: 14, className: "meld-tag-search-icon" }),
            /* @__PURE__ */ a.jsx(
              "input",
              {
                ref: S,
                type: "text",
                className: "meld-tag-search-input",
                placeholder: "Search or create new tag...",
                value: u,
                onChange: (N) => c(N.target.value),
                onKeyDown: D
              }
            ),
            u.trim() && !s.includes(u.trim()) && /* @__PURE__ */ a.jsxs(
              "button",
              {
                type: "button",
                className: "meld-tag-add-btn",
                onClick: () => d(u),
                children: [
                  /* @__PURE__ */ a.jsx(Js, { size: 14 }),
                  "Create"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ a.jsx("div", { className: "meld-tag-suggestions", children: g ? /* @__PURE__ */ a.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : f.length === 0 ? u ? /* @__PURE__ */ a.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ a.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : f.map((N) => /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-suggestion-item",
              onClick: () => d(N.name),
              children: N.name
            },
            N.id
          )) })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-footer", children: [
        /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            className: "meld-btn meld-btn-secondary",
            onClick: n,
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            className: "meld-btn meld-btn-primary",
            onClick: k,
            disabled: m,
            children: m ? "Saving..." : "Save Changes"
          }
        )
      ] })
    ] }) }),
    document.fullscreenElement || document.body
  );
}, Qc = x.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r
  }) => {
    const l = e.id === t, i = typeof n.parent_id == "number" && n.parent_id === e.id, s = typeof e.parent_id == "number" && e.parent_id === n.id, o = Ae(e);
    return /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-thumbnail-wrapper", children: /* @__PURE__ */ a.jsxs(
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
          /* @__PURE__ */ a.jsx("img", { src: o, alt: e.filename }),
          (i || s) && /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `meld-viewer-thumbnail-relation-icon ${i ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`,
              children: i ? /* @__PURE__ */ a.jsx(Hp, { size: 12 }) : /* @__PURE__ */ a.jsx(Wp, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
Qc.displayName = "ThumbnailItem";
const wm = () => {
  const { state: e, dispatch: t, loadMoreImages: n, refreshImages: r } = Xe(), { viewerImageId: l, images: i, viewerMode: s, lineageImages: o } = e, [u, c] = x.useState(!1), [g, y] = x.useState(
    e.settings["viewer.show_details_by_default"]
  ), [m, h] = x.useState(null), S = m ?? e.settings["viewer.show_thumbnails"], [C, A] = x.useState(!1), [f, d] = x.useState(!1), [p, k] = x.useState(null), D = x.useRef(null), N = x.useRef(!0);
  x.useEffect(() => () => {
    N.current = !1;
  }, []);
  const R = x.useRef(l);
  x.useEffect(() => {
    R.current = l;
  }, [l]);
  const P = x.useMemo(() => s === "lineage" ? o : i.filter(
    (M) => M.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && M.has_children)
  ), [s, o, i, e.settings]), _ = x.useMemo(() => l === null ? -1 : P.findIndex((M) => M.id === l), [P, l]), I = x.useMemo(() => (s === "lineage" && o.length > 0 ? o : i).find((M) => M.id === l), [s, o, i, l]), v = x.useMemo(() => {
    if (!S || _ === -1) return [];
    const M = e.settings["viewer.thumbnail_window_size"], O = Math.floor(M / 2);
    let z = Math.max(0, _ - O);
    const V = Math.min(P.length, z + M);
    return V === P.length && (z = Math.max(0, V - M)), P.slice(z, V).map((K, ae) => ({
      img: K,
      absIndex: z + ae
    }));
  }, [
    P,
    _,
    e.settings["viewer.thumbnail_window_size"],
    S
  ]), E = x.useCallback(async () => {
    if (!I) return;
    const M = u ? e.settings["fullscreen.delete_mode"] : e.settings["viewer.delete_mode"];
    if (M === "confirm") {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "delete_confirm",
          imageIds: [I.id],
          hasLineage: !!(I.parent_id || I.has_children),
          isPermanent: e.viewScope === "trash"
        }
      });
      return;
    }
    try {
      const O = e.viewScope === "trash", z = /* @__PURE__ */ new Set([I.id]);
      if (M === "lineage") {
        const V = await ts(I.id);
        for (const K of V)
          z.add(K.id);
      }
      if (!N.current || R.current === null) return;
      if (P.length > z.size) {
        let V = !1;
        for (let K = 1; K < P.length; K++) {
          const ae = (_ + K) % P.length;
          if (!z.has(P[ae].id)) {
            t({
              type: "OPEN_VIEWER",
              payload: { id: P[ae].id, mode: s }
            }), V = !0;
            break;
          }
        }
        V || t({ type: "CLOSE_VIEWER" });
      } else
        t({ type: "CLOSE_VIEWER" });
      await ns(Array.from(z), O), k(O ? null : Array.from(z)), await r();
    } catch (O) {
      t({
        type: "SET_ERROR",
        payload: O instanceof Error ? O.message : String(O)
      });
    }
  }, [
    I,
    u,
    e.settings,
    e.viewScope,
    P,
    _,
    s,
    t,
    r
  ]), w = x.useCallback(async () => {
    if (!p || p.length === 0) return;
    const M = p[0];
    try {
      if (await Tc(p), !N.current || (k(null), await r(), !N.current)) return;
      t({
        type: "OPEN_VIEWER",
        payload: { id: M, mode: s }
      });
    } catch (O) {
      t({
        type: "SET_ERROR",
        payload: O instanceof Error ? O.message : String(O)
      });
    }
  }, [p, r, t, s]), j = x.useCallback(
    (M) => {
      M && "stopPropagation" in M && M.stopPropagation();
      const O = D.current;
      O && (document.fullscreenElement ? document.exitFullscreen() : O.requestFullscreen().catch((z) => {
        console.error(
          `Error attempting to enable full-screen mode: ${z.message}`
        );
      }));
    },
    []
  ), b = x.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: u } });
  }, [t, u]), U = x.useCallback(async () => {
    const M = u ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"];
    if (_ === 0 && s === "gallery" && e.pagination.hasMore && !f && M) {
      d(!0);
      try {
        const O = e.pagination.limit, z = e.pagination.total, V = Math.max(0, z - O), K = await es(
          V,
          O,
          e.searchQuery
        );
        if (!N.current || (t({ type: "APPEND_IMAGES", payload: K }), R.current === null)) return;
        if (K.images.length > 0) {
          const ae = K.images[K.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: ae.id, mode: "gallery" }
          });
        }
      } catch (O) {
        console.error("Failed to jump to end:", O);
      } finally {
        d(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: u } });
  }, [
    _,
    s,
    e.pagination.hasMore,
    e.pagination.total,
    e.pagination.limit,
    e.searchQuery,
    e.settings,
    t,
    f,
    u
  ]);
  if (x.useEffect(() => {
    s !== "gallery" || l === null || e.isLoading || !e.pagination.hasMore || _ !== -1 && _ >= P.length - 15 && n();
  }, [
    l,
    P.length,
    s,
    e.isLoading,
    e.pagination.hasMore,
    n,
    _
  ]), x.useEffect(() => {
    const M = (z) => {
      var qs, ea, ta;
      if (l === null) return;
      const V = ((qs = document.activeElement) == null ? void 0 : qs.tagName) === "INPUT" || ((ea = document.activeElement) == null ? void 0 : ea.tagName) === "TEXTAREA" || ((ta = document.activeElement) == null ? void 0 : ta.isContentEditable), K = z.key === "Delete" || z.key === "Backspace", ae = z.key === "ArrowRight" || z.key === "ArrowLeft", zt = z.key === "f" || z.key === "F" || z.key === "i" || z.key === "I", Ze = z.key === "Escape", Kt = (z.ctrlKey || z.metaKey) && (z.key === "z" || z.key === "Z");
      if (K || ae || zt || Ze || Kt)
        if (!V)
          z.preventDefault(), z.stopPropagation(), z.stopImmediatePropagation();
        else if (Ze)
          z.preventDefault(), z.stopPropagation(), z.stopImmediatePropagation();
        else
          return;
      else
        return;
      if (z.key === "Escape") {
        if (e.activeModal.type !== "none") return;
        document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" });
      } else z.key === "ArrowRight" ? b() : z.key === "ArrowLeft" ? U() : z.key === "f" || z.key === "F" ? j(z) : z.key === "i" || z.key === "I" ? y((Wc) => !Wc) : z.key === "Delete" ? E() : (z.ctrlKey || z.metaKey) && (z.key === "z" || z.key === "Z") && w();
    };
    window.addEventListener("keydown", M, { capture: !0 });
    const O = () => {
      const z = !!document.fullscreenElement;
      c(z), y(z ? e.settings["fullscreen.show_details_by_default"] : e.settings["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", O), () => {
      window.removeEventListener("keydown", M, { capture: !0 }), document.removeEventListener("fullscreenchange", O);
    };
  }, [
    l,
    t,
    j,
    b,
    U,
    e.settings,
    E,
    e.activeModal.type,
    w
  ]), x.useEffect(() => {
    s === "lineage" && l !== null && o.length === 0 && (A(!0), ts(l).then((M) => {
      t({ type: "SET_LINEAGE", payload: M });
    }).catch((M) => {
      console.error("Failed to fetch lineage:", M);
    }).finally(() => {
      A(!1);
    }));
  }, [s, l, o.length, t]), x.useEffect(() => () => {
    document.fullscreenElement && document.exitFullscreen().catch(() => {
    });
  }, []), x.useEffect(() => {
    var M, O;
    if (l !== null) {
      if (S) {
        const z = document.querySelector(
          ".meld-viewer-thumbnail--active"
        );
        z && z.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((M = document.activeElement) == null ? void 0 : M.tagName) === "CANVAS" && document.activeElement.blur(), (O = D.current) == null || O.focus();
    }
  }, [l, S]), x.useEffect(() => {
    if (l === null || P.length === 0) return;
    const M = P.findIndex(
      (K) => K.id === l
    );
    if (M === -1) return;
    const O = (K) => Ae(K), z = [
      M + 1,
      M + 2,
      M - 1
    ], V = setTimeout(() => {
      for (const K of z)
        if (K >= 0 && K < P.length) {
          const ae = P[K], zt = new Image();
          zt.src = O(ae);
        }
    }, 150);
    return () => clearTimeout(V);
  }, [l, P]), !I) return null;
  const B = Ae(I), T = u ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return Te.createPortal(
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        ref: D,
        className: "meld-viewer-overlay",
        style: { background: "rgba(0, 0, 0, 0.85)" },
        onClick: () => t({ type: "CLOSE_VIEWER" }),
        role: "button",
        tabIndex: 0,
        children: [
          /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: `meld-viewer-content ${u ? "meld-viewer-content--fullscreen" : ""}`,
              onClick: (M) => M.stopPropagation(),
              children: [
                T && /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-actions", children: [
                  !u && /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      className: `meld-viewer-action-btn ${S ? "meld-viewer-action-btn--active" : ""}`,
                      onClick: () => h(!S),
                      type: "button",
                      title: S ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ a.jsx(qp, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => y(!g),
                      type: "button",
                      title: g ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ a.jsx(Jp, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: j,
                      type: "button",
                      title: u ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                      children: u ? /* @__PURE__ */ a.jsx(tm, { size: 20 }) : /* @__PURE__ */ a.jsx(em, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                      onClick: () => t({ type: "CLOSE_VIEWER" }),
                      type: "button",
                      title: "Close (Esc)",
                      children: /* @__PURE__ */ a.jsx(xe, { size: 20 })
                    }
                  )
                ] }),
                T && /* @__PURE__ */ a.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: U,
                    type: "button",
                    disabled: f,
                    children: /* @__PURE__ */ a.jsx(Dc, { size: 32 })
                  }
                ),
                /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-image-container", children: [
                  f && /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ a.jsx(yl, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ a.jsx(
                    "img",
                    {
                      src: B,
                      alt: I.filename,
                      className: `meld-viewer-image ${f ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                T && /* @__PURE__ */ a.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: b,
                    type: "button",
                    children: /* @__PURE__ */ a.jsx(Rc, { size: 32 })
                  }
                ),
                g && /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    className: `meld-viewer-details-overlay ${u ? "meld-viewer-details-overlay--fullscreen" : ""} ${T ? "" : "meld-viewer-details-overlay--no-icons"}`,
                    children: [
                      (u ? e.settings["fullscreen.details.show_filename"] : e.settings["viewer.details.show_filename"]) && /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-label", children: "Filename" }),
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-value", children: I.filename })
                      ] }),
                      (u ? e.settings["fullscreen.details.show_dimensions"] : e.settings["viewer.details.show_dimensions"]) && I.width && I.height && /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-label", children: "Dimensions" }),
                        /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-details-value", children: [
                          I.width,
                          " x ",
                          I.height,
                          " px"
                        ] })
                      ] }),
                      (u ? e.settings["fullscreen.details.show_created_at"] : e.settings["viewer.details.show_created_at"]) && /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-label", children: "Created At" }),
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-value", children: new Date(I.created_at * 1e3).toLocaleString() })
                      ] }),
                      I.deleted_at && /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-label", children: "Deleted At" }),
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-value", children: new Date(I.deleted_at * 1e3).toLocaleString() })
                      ] }),
                      (u ? e.settings["fullscreen.details.show_model_name"] : e.settings["viewer.details.show_model_name"]) && I.model_name && /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-label", children: "Model" }),
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-value", children: I.model_name })
                      ] }),
                      (u ? e.settings["fullscreen.details.show_positive_prompt"] : e.settings["viewer.details.show_positive_prompt"]) && (I.positive_prompt || I.positive) && /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-label", children: "Positive" }),
                        /* @__PURE__ */ a.jsx(
                          "div",
                          {
                            className: "meld-viewer-details-value meld-viewer-details-value--prompt",
                            style: {
                              "--meld-prompt-max-lines": u ? e.settings["fullscreen.details.max_positive_prompt_lines"] : e.settings["viewer.details.max_positive_prompt_lines"]
                            },
                            children: I.positive_prompt || I.positive
                          }
                        )
                      ] }),
                      (u ? e.settings["fullscreen.details.show_negative_prompt"] : e.settings["viewer.details.show_negative_prompt"]) && (I.negative_prompt || I.negative) && /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-label", children: "Negative" }),
                        /* @__PURE__ */ a.jsx(
                          "div",
                          {
                            className: "meld-viewer-details-value meld-viewer-details-value--prompt",
                            style: {
                              "--meld-prompt-max-lines": u ? e.settings["fullscreen.details.max_negative_prompt_lines"] : e.settings["viewer.details.max_negative_prompt_lines"]
                            },
                            children: I.negative_prompt || I.negative
                          }
                        )
                      ] }),
                      (u ? e.settings["fullscreen.details.show_tags"] : e.settings["viewer.details.show_tags"]) && I.tags && I.tags.length > 0 && /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-label", children: "Tags" }),
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-tags", children: I.tags.map((M) => /* @__PURE__ */ a.jsx("span", { className: "meld-viewer-details-tag", children: M }, M)) })
                      ] })
                    ]
                  }
                ),
                !u && S && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-thumbnails-container", children: /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-thumbnails", children: [
                  C ? /* @__PURE__ */ a.jsx(
                    "div",
                    {
                      style: {
                        padding: "10px",
                        color: "var(--meld-text-secondary)"
                      },
                      children: "Loading lineage..."
                    }
                  ) : v.map(({ img: M }) => /* @__PURE__ */ a.jsx(
                    Qc,
                    {
                      thumb: M,
                      viewerImageId: l,
                      currentImage: I,
                      dispatch: t
                    },
                    M.id
                  )),
                  s === "gallery" && e.isLoading && /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ a.jsx(yl, { className: "animate-spin", size: 20 }) })
                ] }) })
              ]
            }
          ),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ a.jsx(
            Ac,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: k
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ a.jsx($c, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ a.jsx(bc, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ a.jsx(Uc, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ a.jsx(
            Vc,
            {
              imageIds: e.activeModal.imageIds,
              initialTags: e.activeModal.tags,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          )
        ]
      }
    ),
    document.body
  );
}, xm = () => {
  const { state: e, dispatch: t } = Xe(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await kp(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (o) {
      console.error("Failed to cancel scan:", o);
    }
  }, l = () => {
    t({
      type: "SET_SCAN_STATUS",
      payload: { isFinished: !1, isRunning: !1 }
    });
  }, i = n.progress.phase === "linking", s = i ? 100 : n.progress.total > 0 ? Math.round(
    n.progress.current / n.progress.total * 100
  ) : 0;
  return /* @__PURE__ */ a.jsx("div", { className: "meld-import-progress-sidebar", children: n.isRunning ? /* @__PURE__ */ a.jsxs("div", { className: "meld-scan-progress-compact", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "meld-scan-info", children: [
      /* @__PURE__ */ a.jsx("div", { className: "meld-scan-status-text-compact", children: n.shouldCancel ? /* @__PURE__ */ a.jsx("span", { className: "meld-status-cancelling", children: "Cancelling..." }) : i ? /* @__PURE__ */ a.jsx("span", { children: "Linking..." }) : /* @__PURE__ */ a.jsx("span", { children: "Scanning..." }) }),
      /* @__PURE__ */ a.jsxs("div", { className: "meld-progress-stats-compact", children: [
        n.progress.current,
        " / ",
        n.progress.total
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "meld-progress-container-compact", children: /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "meld-progress-bar",
        style: { width: `${s}%` }
      }
    ) }),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        type: "button",
        className: "meld-btn-stop-compact",
        disabled: n.shouldCancel,
        onClick: r,
        title: "Stop Scan",
        children: /* @__PURE__ */ a.jsx(sm, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ a.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ a.jsx(Kp, { size: 14, className: "meld-success-icon" }),
      /* @__PURE__ */ a.jsxs("span", { className: "meld-finished-text", children: [
        "Done! ",
        n.newCount,
        " new images"
      ] })
    ] }),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        type: "button",
        className: "meld-btn-ok-compact",
        onClick: l,
        children: "OK"
      }
    )
  ] }) });
}, _m = () => {
  const { state: e, dispatch: t, refreshFavorites: n } = Xe(), [r, l] = x.useState(e.searchQuery), [i, s] = x.useState([]), [o, u] = x.useState(!1), [c, g] = x.useState([]), [y, m] = x.useState(-1), [h, S] = x.useState(!1), [C, A] = x.useState(null), f = x.useRef(null);
  x.useEffect(() => {
    if (C) {
      const w = setTimeout(() => A(null), 3e3);
      return () => clearTimeout(w);
    }
  }, [C]);
  const d = x.useRef(null), p = x.useRef(e.searchQuery);
  x.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      g([]);
      return;
    }
    !r && !e.searchQuery ? mp().then((w) => {
      g(w);
    }) : g([]);
  }, [
    r,
    e.searchQuery,
    e.settings["search.quick_suggestions"]
  ]), x.useEffect(() => {
    l(e.searchQuery), p.current = e.searchQuery;
  }, [e.searchQuery]), x.useEffect(() => {
    var w;
    (w = f.current) == null || w.focus();
  }, []);
  const k = x.useCallback(
    (w, j = !0) => {
      p.current !== w && (t({ type: "SET_SEARCH_QUERY", payload: w }), j && u(!1), p.current = w);
    },
    [t]
  );
  x.useEffect(() => {
    const w = setTimeout(async () => {
      if (r === p.current)
        return;
      if (e.settings["search.realtime_search"] && k(r, !1), !e.settings["search.input_suggest"]) {
        s([]), u(!1);
        return;
      }
      const j = r.split(/\s+/), b = j[j.length - 1];
      if (b) {
        const U = b.match(
          /^(pos|neg|model|date|after|before):(.*)$/i
        );
        if (U) {
          const B = U[1].toLowerCase(), T = U[2], M = await pp(T, B);
          s(M), u(M.length > 0), m(-1);
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
    k
  ]);
  const D = (w) => {
    w.key === "Enter" ? k(r) : w.key === "Tab" ? o && y >= 0 && (N(i[y]), w.preventDefault()) : w.key === "ArrowDown" ? o && (m((j) => Math.min(j + 1, i.length - 1)), w.preventDefault()) : w.key === "ArrowUp" ? o && (m((j) => Math.max(j - 1, -1)), w.preventDefault()) : w.key === "Escape" && u(!1);
  }, N = (w) => {
    var T;
    const j = r.split(/\s+/);
    j.pop();
    const U = ["date", "after", "before"].includes(w.type) ? w.value : `"${w.value}"`, B = `${[...j, `${w.type}:${U}`].join(" ").trim()} `;
    l(B), k(B), s([]), u(!1), (T = f.current) == null || T.focus();
  }, R = () => {
    l(""), k("");
  }, P = async (w, j, b) => {
    w.stopPropagation();
    const U = `Are you sure you want to delete the favorite "${b}"?`;
    if (window.confirm(U))
      try {
        await po(j), await n();
      } catch (B) {
        ve.error("Failed to delete favorite", B);
      }
  }, _ = async (w, j, b) => {
    w.stopPropagation();
    const U = window.prompt(
      "Enter a new name for this favorite:",
      b
    );
    if (!(U === null || U === b))
      try {
        await Np(j, U || b), await n();
      } catch (B) {
        ve.error("Failed to rename favorite", B);
      }
  }, I = (w, j) => {
    const U = ["date", "after", "before"].includes(w) ? j : `"${j}"`, B = `${w}:${U}`;
    l(B), k(B);
  }, v = async () => {
    if (!e.searchQuery || h) return;
    if (e.favorites.some(
      (j) => j.query === e.searchQuery
    )) {
      const j = e.favorites.find((b) => b.query === e.searchQuery);
      if (j) {
        S(!0);
        try {
          await po(j.id), await n(), A("Favorite removed.");
        } catch (b) {
          console.error("Failed to delete favorite:", b);
        } finally {
          S(!1);
        }
      }
      return;
    }
    S(!0);
    try {
      await Cp(e.searchQuery, e.searchQuery), await n(), A(
        `Favorite added!
You can select favorites when the search query is empty.`
      );
    } catch (j) {
      console.error("Failed to save favorite:", j);
    } finally {
      S(!1);
    }
  }, E = (w) => {
    switch (w) {
      case "tag":
        return /* @__PURE__ */ a.jsx(jn, { size: 12 });
      case "model":
        return /* @__PURE__ */ a.jsx(Bp, { size: 12 });
      case "pos":
      case "neg":
        return /* @__PURE__ */ a.jsx(am, { size: 12 });
      case "date":
      case "after":
      case "before":
        return /* @__PURE__ */ a.jsx(Gp, { size: 12 });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "meld-search-container",
      style: { display: "flex", flexDirection: "column", gap: "8px", flex: 1 },
      children: [
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: "meld-search-bar-wrapper",
            style: { position: "relative", width: "100%" },
            children: [
              C && /* @__PURE__ */ a.jsx(
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
                  children: C
                }
              ),
              /* @__PURE__ */ a.jsxs(
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
                    /* @__PURE__ */ a.jsx(
                      Sn,
                      {
                        size: 18,
                        color: "var(--meld-text-secondary)",
                        style: { marginRight: "10px", flexShrink: 0 }
                      }
                    ),
                    /* @__PURE__ */ a.jsx(
                      "input",
                      {
                        ref: f,
                        type: "text",
                        value: r,
                        onChange: (w) => l(w.target.value),
                        onKeyDown: D,
                        onBlur: () => setTimeout(() => u(!1), 200),
                        onFocus: () => {
                          if (r === p.current) return;
                          const w = r.split(/\s+/), j = w[w.length - 1];
                          j != null && j.match(/^(pos|neg|model|date|after|before):/i) && u(!0);
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
                    e.searchQuery && /* @__PURE__ */ a.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: v,
                        disabled: h,
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
                        children: /* @__PURE__ */ a.jsx(
                          ho,
                          {
                            size: 16,
                            color: e.favorites.some((w) => w.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((w) => w.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                          }
                        )
                      }
                    ),
                    r && /* @__PURE__ */ a.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: R,
                        style: {
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "2px",
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0
                        },
                        children: /* @__PURE__ */ a.jsx(xe, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              o && i.length > 0 && /* @__PURE__ */ a.jsx(
                "div",
                {
                  ref: d,
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
                  children: i.map((w, j) => /* @__PURE__ */ a.jsx(
                    "div",
                    {
                      onMouseDown: (b) => {
                        b.preventDefault(), N(w);
                      },
                      onMouseEnter: () => m(j),
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 14px",
                        cursor: "pointer",
                        backgroundColor: j === y ? "var(--comfy-menu-bg, #333)" : "transparent",
                        borderBottom: "1px solid var(--comfy-menu-border, #2a2a2a)"
                      },
                      children: /* @__PURE__ */ a.jsxs(
                        "div",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ a.jsx(
                              "span",
                              {
                                style: {
                                  color: "var(--meld-text-secondary)",
                                  display: "flex"
                                },
                                children: E(w.type)
                              }
                            ),
                            /* @__PURE__ */ a.jsx(
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
                            /* @__PURE__ */ a.jsx(
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
        !r && !e.searchQuery && c.length > 0 && /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "meld-search-quick-suggestions",
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              padding: "0 4px"
            },
            children: c.map((w) => /* @__PURE__ */ a.jsxs(
              "button",
              {
                type: "button",
                onClick: () => I(w.type, w.value),
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
                  /* @__PURE__ */ a.jsx(
                    "span",
                    {
                      style: {
                        display: "flex",
                        color: "var(--meld-text-secondary)"
                      },
                      children: E(w.type)
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
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
                  /* @__PURE__ */ a.jsx(
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
        !r && e.favorites.length > 0 && /* @__PURE__ */ a.jsxs(
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
              /* @__PURE__ */ a.jsxs(
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
                    /* @__PURE__ */ a.jsx(ho, { size: 12, fill: "var(--meld-text-secondary)" }),
                    "Favorites"
                  ]
                }
              ),
              /* @__PURE__ */ a.jsx(
                "div",
                {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px"
                  },
                  children: e.favorites.map((w) => /* @__PURE__ */ a.jsxs(
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
                        l(w.query), k(w.query);
                      },
                      onMouseEnter: (j) => {
                        j.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", j.currentTarget.style.borderColor = "var(--meld-accent-color)", j.currentTarget.style.color = "var(--meld-text-color)";
                      },
                      onMouseLeave: (j) => {
                        j.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", j.currentTarget.style.borderColor = "var(--comfy-menu-border, #333)", j.currentTarget.style.color = "var(--meld-text-color)";
                      },
                      children: [
                        /* @__PURE__ */ a.jsxs(
                          "div",
                          {
                            style: {
                              display: "flex",
                              flexDirection: "column",
                              minWidth: 0,
                              flex: 1
                            },
                            children: [
                              /* @__PURE__ */ a.jsx(
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
                              w.name !== w.query && /* @__PURE__ */ a.jsx(
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
                        /* @__PURE__ */ a.jsxs(
                          "div",
                          {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: "4px",
                              flexShrink: 0
                            },
                            children: [
                              /* @__PURE__ */ a.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: (j) => {
                                    j.stopPropagation(), _(j, w.id, w.name);
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
                                  onMouseEnter: (j) => {
                                    j.currentTarget.style.color = "var(--meld-accent-color)", j.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(68, 136, 255, 0.1))";
                                  },
                                  onMouseLeave: (j) => {
                                    j.currentTarget.style.color = "var(--meld-text-secondary)", j.currentTarget.style.backgroundColor = "transparent";
                                  },
                                  title: "Rename favorite",
                                  children: /* @__PURE__ */ a.jsx(Oc, { size: 14 })
                                }
                              ),
                              /* @__PURE__ */ a.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: (j) => {
                                    j.stopPropagation(), P(j, w.id, w.name);
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
                                  onMouseEnter: (j) => {
                                    j.currentTarget.style.color = "var(--meld-danger-color)", j.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,0,0,0.1))";
                                  },
                                  onMouseLeave: (j) => {
                                    j.currentTarget.style.color = "var(--meld-text-secondary)", j.currentTarget.style.backgroundColor = "transparent";
                                  },
                                  title: "Delete favorite",
                                  children: /* @__PURE__ */ a.jsx(kn, { size: 14 })
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
}, Sm = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = x.useState([]), [l, i] = x.useState(!0), [s, o] = x.useState(""), [u, c] = x.useState(""), [g, y] = x.useState(!1), [m, h] = x.useState(null), [S, C] = x.useState(""), [A, f] = x.useState(!1), d = x.useRef(null), p = x.useCallback(async () => {
    i(!0);
    try {
      const v = await Zs();
      r(v);
    } catch (v) {
      console.error("Failed to fetch tags:", v);
    } finally {
      i(!1);
    }
  }, []);
  x.useEffect(() => {
    p();
  }, [p]), x.useEffect(() => {
    m !== null && d.current && (d.current.focus(), d.current.select());
  }, [m]);
  const k = async (v) => {
    v.preventDefault();
    const E = u.trim();
    if (!(!E || g)) {
      if (n.some((w) => w.name.toLowerCase() === E.toLowerCase())) {
        alert(`Tag "${E}" already exists.`);
        return;
      }
      y(!0);
      try {
        await jp(E), c(""), await p();
      } catch (w) {
        console.error("Failed to add tag:", w);
      } finally {
        y(!1);
      }
    }
  }, D = async (v, E) => {
    if (confirm(`Are you sure you want to delete tag "${E}"?`))
      try {
        await Ip(v), await p();
      } catch (w) {
        console.error("Failed to delete tag:", w);
      }
  }, N = (v) => {
    h(v.id), C(v.name);
  }, R = () => {
    h(null), C("");
  }, P = async (v) => {
    v.preventDefault();
    const E = S.trim();
    if (!E || m === null || A) return;
    const w = n.find((j) => j.id === m);
    if (w && w.name === E) {
      R();
      return;
    }
    if (n.some(
      (j) => j.id !== m && j.name.toLowerCase() === E.toLowerCase()
    )) {
      alert(`Tag "${E}" already exists.`);
      return;
    }
    f(!0);
    try {
      await Tp(m, E), R(), await p();
    } catch (j) {
      console.error("Failed to rename tag:", j), alert(j instanceof Error ? j.message : "Failed to rename tag");
    } finally {
      f(!1);
    }
  }, _ = (v) => {
    t(`tag:${v}`);
  }, I = x.useMemo(() => n.filter(
    (v) => v.name.toLowerCase().includes(s.toLowerCase())
  ), [n, s]);
  return /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ a.jsx(jn, { size: 16 }),
        /* @__PURE__ */ a.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ a.jsx(xe, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ a.jsxs("form", { className: "meld-tag-add-form", onSubmit: k, children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: u,
            onChange: (v) => c(v.target.value),
            disabled: g
          }
        ),
        /* @__PURE__ */ a.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !u.trim() || g,
            children: [
              /* @__PURE__ */ a.jsx(Js, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ a.jsx(Sn, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: s,
            onChange: (v) => o(v.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ a.jsx("div", { className: "meld-tag-list", children: I.length === 0 ? /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : I.map((v) => /* @__PURE__ */ a.jsx("div", { className: "meld-tag-item", children: m === v.id ? /* @__PURE__ */ a.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: P,
          children: [
            /* @__PURE__ */ a.jsx(
              "input",
              {
                type: "text",
                ref: d,
                className: "meld-tag-rename-input",
                value: S,
                onChange: (E) => C(E.target.value),
                onKeyDown: (E) => E.key === "Escape" && R()
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: A || !S.trim(),
                children: /* @__PURE__ */ a.jsx(zc, { size: 14 })
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: R,
                disabled: A,
                children: /* @__PURE__ */ a.jsx(xe, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("span", { className: "meld-tag-item__name", children: v.name }),
        /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => _(v.name),
              children: /* @__PURE__ */ a.jsx(Sn, { size: 14 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => N(v),
              children: /* @__PURE__ */ a.jsx(Oc, { size: 14 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => D(v.id, v.name),
              children: /* @__PURE__ */ a.jsx(kn, { size: 14 })
            }
          )
        ] })
      ] }) }, v.id)) })
    ] })
  ] });
}, km = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = Xe(), [i, s] = x.useState("gallery"), [o, u] = x.useState(""), c = e.searchQuery.trim() !== "", g = x.useRef(null), y = x.useRef(null), m = x.useMemo(
    () => e.images.filter((h) => e.viewScope === "trash" ? h.exists !== !1 || e.settings["gallery.trash.show_missing"] : h.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && h.has_children)),
    [e.images, e.settings, e.viewScope]
  );
  return x.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && m.length === 0 && (ve.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    m.length,
    r
  ]), ve.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: m.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), x.useEffect(() => {
    const h = (S) => {
      S.key === "Escape" && e.activeModal.type !== "none" && e.viewerImageId === null && t({ type: "CLOSE_MODAL" });
    };
    return window.addEventListener("keydown", h), () => window.removeEventListener("keydown", h);
  }, [e.activeModal.type, e.viewerImageId, t]), x.useEffect(() => {
    const h = new IntersectionObserver(
      (C) => {
        C[0].isIntersecting && !e.isLoading && e.pagination.hasMore && (ve.log(
          "GalleryPanel: Load more triggered via IntersectionObserver"
        ), r());
      },
      { threshold: 0, rootMargin: "800px" }
    ), S = g.current;
    return S && h.observe(S), () => {
      S && h.unobserve(S);
    };
  }, [r, e.isLoading, e.pagination.hasMore]), x.useEffect(() => {
    const h = e.viewerImageId ?? y.current;
    if (h !== null && m.some((C) => C.id === h)) {
      const C = document.querySelector(
        `[data-image-id="${h}"]`
      );
      C && (C.scrollIntoView({ behavior: "smooth", block: "nearest" }), e.viewerImageId === null && (y.current = null));
    }
    e.viewerImageId !== null && (y.current = e.viewerImageId);
  }, [e.viewerImageId, m]), /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `meld-gallery ${e.viewScope === "trash" ? "meld-gallery--trash" : ""}`,
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: "meld-gallery__header", children: [
          e.viewScope === "trash" ? /* @__PURE__ */ a.jsxs("div", { className: "meld-gallery__trash-indicator", children: [
            /* @__PURE__ */ a.jsxs("div", { className: "meld-gallery__trash-label", children: [
              /* @__PURE__ */ a.jsx(kn, { size: 14 }),
              /* @__PURE__ */ a.jsx("span", { children: "Trash Bin" })
            ] }),
            /* @__PURE__ */ a.jsxs("label", { className: "meld-gallery__trash-toggle", children: [
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.settings["gallery.trash.show_missing"] || !1,
                  onChange: (h) => l("gallery.trash.show_missing", h.target.checked)
                }
              ),
              /* @__PURE__ */ a.jsx("span", { children: "Show missing files" })
            ] }),
            /* @__PURE__ */ a.jsxs(
              "button",
              {
                type: "button",
                className: "meld-gallery__exit-trash",
                onClick: () => t({ type: "SET_VIEW_SCOPE", payload: "default" }),
                title: "Exit Trash View",
                children: [
                  /* @__PURE__ */ a.jsx(xe, { size: 14 }),
                  /* @__PURE__ */ a.jsx("span", { children: "Exit" })
                ]
              }
            )
          ] }) : /* @__PURE__ */ a.jsxs("div", { className: "meld-gallery__actions", children: [
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  i === "search" ? (e.searchQuery && (u(e.searchQuery), t({ type: "SET_SEARCH_QUERY", payload: "" })), s("gallery")) : (!e.searchQuery && o && t({
                    type: "SET_SEARCH_QUERY",
                    payload: o
                  }), s("search"));
                },
                style: {
                  background: "none",
                  border: "none",
                  color: c ? "var(--meld-success-color)" : i === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: c ? "bold" : "normal"
                },
                title: "Search",
                children: /* @__PURE__ */ a.jsx(Sn, { size: 14 })
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                onClick: () => s(i === "tags" ? "gallery" : "tags"),
                style: {
                  background: "none",
                  border: "none",
                  color: i === "tags" ? "var(--meld-accent-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: i === "tags" ? "bold" : "normal"
                },
                title: "Tag Manager",
                children: /* @__PURE__ */ a.jsx(jn, { size: 14 })
              }
            ),
            /* @__PURE__ */ a.jsx(
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
                children: /* @__PURE__ */ a.jsx(Xp, { size: 14 })
              }
            ),
            /* @__PURE__ */ a.jsx(
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
                children: /* @__PURE__ */ a.jsx(
                  yl,
                  {
                    size: 14,
                    className: e.isLoading ? "animate-spin" : ""
                  }
                )
              }
            ),
            /* @__PURE__ */ a.jsx(
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
                children: /* @__PURE__ */ a.jsx(im, { size: 14 })
              }
            )
          ] }),
          i === "search" && /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ a.jsx(_m, {}) })
        ] }),
        /* @__PURE__ */ a.jsx(xm, {}),
        e.error && /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__error", children: e.error }),
        i === "tags" ? /* @__PURE__ */ a.jsx(
          Sm,
          {
            onClose: () => s("gallery"),
            onSearch: (h) => {
              t({ type: "SET_SEARCH_QUERY", payload: h }), s("search");
            }
          }
        ) : e.isLoading && m.length === 0 ? /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : m.length === 0 ? /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__list", children: m.map((h) => /* @__PURE__ */ a.jsx("div", { "data-image-id": h.id, children: /* @__PURE__ */ a.jsx(gm, { height: 150, children: /* @__PURE__ */ a.jsx(vm, { image: h }) }) }, h.id)) }),
          /* @__PURE__ */ a.jsxs(
            "div",
            {
              ref: g,
              className: "meld-gallery__load-more",
              style: { height: "20px", margin: "20px 0", textAlign: "center" },
              children: [
                e.isLoading && /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
                !e.pagination.hasMore && m.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ a.jsx(ym, {}),
        e.viewerImageId !== null && /* @__PURE__ */ a.jsx(wm, {}),
        e.viewerImageId === null && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          e.activeModal.type === "parent_selection" && Te.createPortal(
            /* @__PURE__ */ a.jsx($c, { imageId: e.activeModal.imageId }),
            document.body
          ),
          e.activeModal.type === "import" && Te.createPortal(/* @__PURE__ */ a.jsx(bc, {}), document.body),
          e.activeModal.type === "settings" && Te.createPortal(/* @__PURE__ */ a.jsx(Uc, {}), document.body),
          e.activeModal.type === "tag_edit" && Te.createPortal(
            /* @__PURE__ */ a.jsx(
              Vc,
              {
                imageIds: e.activeModal.imageIds,
                initialTags: e.activeModal.tags,
                onClose: () => t({ type: "CLOSE_MODAL" })
              }
            ),
            document.body
          ),
          e.activeModal.type === "delete_confirm" && Te.createPortal(
            /* @__PURE__ */ a.jsx(
              Ac,
              {
                imageIds: e.activeModal.imageIds,
                hasLineage: e.activeModal.hasLineage,
                isPermanent: e.activeModal.isPermanent
              }
            ),
            document.body
          )
        ] })
      ]
    }
  );
};
go.registerExtension({
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
const Rl = document.createElement("link");
Rl.rel = "stylesheet";
Rl.type = "text/css";
Rl.href = "/extensions/ComfyUI-Meld/js/style.css";
document.head.appendChild(Rl);
let Dr = null, Qe = null;
go.registerExtension({
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
      const n = await Ic();
      ve.init(n.dev_mode), ve.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld] Failed to fetch settings", n), ve.init(!1);
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
      }, Q.addEventListener("meld-image-saved", () => {
        var n;
        (n = e.ui.meld) == null || n.refresh();
      }), Q.addEventListener("meld-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-scan-progress", { detail: n.detail })
        );
      }), Q.addEventListener("meld-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-scan-finished", { detail: n.detail })
        ), (r = e.ui.meld) == null || r.refresh(), console.log("Meld: Import completed.");
      }), Q.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const l of n.output.images)
              if (l.type === "output")
                try {
                  await Mc({
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
            ve.log("Meld: render called", {
              el: n,
              galleryRoot: Dr,
              galleryContainer: Qe
            }), Qe || (ve.log("Meld: galleryContainer not found, creating new one"), Qe = document.createElement("div"), Qe.id = "meld-gallery-container", Qe.style.height = "100%", Qe.style.width = "100%", Qe.style.display = "flex", Qe.style.flexDirection = "column"), n.contains(Qe) || (ve.log("Meld: Appending galleryContainer to el"), n.appendChild(Qe)), Dr ? ve.log(
              "Meld: Gallery root already exists, React should handle re-render if needed"
            ) : (ve.log("Meld: Creating new gallery root"), Dr = jc(Qe), Dr.render(
              ia.createElement(
                hm,
                null,
                ia.createElement(km)
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
