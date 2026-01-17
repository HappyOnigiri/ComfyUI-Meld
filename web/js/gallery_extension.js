import { api as G } from "../../../scripts/api.js";
import { app as _o } from "../../../scripts/app.js";
function qc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var So = { exports: {} }, H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gr = Symbol.for("react.element"), ed = Symbol.for("react.portal"), td = Symbol.for("react.fragment"), nd = Symbol.for("react.strict_mode"), rd = Symbol.for("react.profiler"), ld = Symbol.for("react.provider"), id = Symbol.for("react.context"), ad = Symbol.for("react.forward_ref"), sd = Symbol.for("react.suspense"), od = Symbol.for("react.memo"), ud = Symbol.for("react.lazy"), ss = Symbol.iterator;
function cd(e) {
  return e === null || typeof e != "object" ? null : (e = ss && e[ss] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ko = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Eo = Object.assign, Co = {};
function In(e, t, n) {
  this.props = e, this.context = t, this.refs = Co, this.updater = n || ko;
}
In.prototype.isReactComponent = {};
In.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
In.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function No() {
}
No.prototype = In.prototype;
function oa(e, t, n) {
  this.props = e, this.context = t, this.refs = Co, this.updater = n || ko;
}
var ua = oa.prototype = new No();
ua.constructor = oa;
Eo(ua, In.prototype);
ua.isPureReactComponent = !0;
var os = Array.isArray, jo = Object.prototype.hasOwnProperty, ca = { current: null }, Io = { key: !0, ref: !0, __self: !0, __source: !0 };
function To(e, t, n) {
  var r, l = {}, i = null, a = null;
  if (t != null) for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t) jo.call(t, r) && !Io.hasOwnProperty(r) && (l[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = n;
  else if (1 < o) {
    for (var u = Array(o), f = 0; f < o; f++) u[f] = arguments[f + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in o = e.defaultProps, o) l[r] === void 0 && (l[r] = o[r]);
  return { $$typeof: gr, type: e, key: i, ref: a, props: l, _owner: ca.current };
}
function dd(e, t) {
  return { $$typeof: gr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function da(e) {
  return typeof e == "object" && e !== null && e.$$typeof === gr;
}
function fd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var us = /\/+/g;
function Vl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? fd("" + e.key) : t.toString(36);
}
function Ar(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else switch (i) {
    case "string":
    case "number":
      a = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case gr:
        case ed:
          a = !0;
      }
  }
  if (a) return a = e, l = l(a), e = r === "" ? "." + Vl(a, 0) : r, os(l) ? (n = "", e != null && (n = e.replace(us, "$&/") + "/"), Ar(l, t, n, "", function(f) {
    return f;
  })) : l != null && (da(l) && (l = dd(l, n + (!l.key || a && a.key === l.key ? "" : ("" + l.key).replace(us, "$&/") + "/") + e)), t.push(l)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", os(e)) for (var o = 0; o < e.length; o++) {
    i = e[o];
    var u = r + Vl(i, o);
    a += Ar(i, t, n, u, l);
  }
  else if (u = cd(e), typeof u == "function") for (e = u.call(e), o = 0; !(i = e.next()).done; ) i = i.value, u = r + Vl(i, o++), a += Ar(i, t, n, u, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function _r(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Ar(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function pd(e) {
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
var Ce = { current: null }, $r = { transition: null }, md = { ReactCurrentDispatcher: Ce, ReactCurrentBatchConfig: $r, ReactCurrentOwner: ca };
function Mo() {
  throw Error("act(...) is not supported in production builds of React.");
}
H.Children = { map: _r, forEach: function(e, t, n) {
  _r(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return _r(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return _r(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!da(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
H.Component = In;
H.Fragment = td;
H.Profiler = rd;
H.PureComponent = oa;
H.StrictMode = nd;
H.Suspense = sd;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = md;
H.act = Mo;
H.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Eo({}, e.props), l = e.key, i = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, a = ca.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
    for (u in t) jo.call(t, u) && !Io.hasOwnProperty(u) && (r[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    o = Array(u);
    for (var f = 0; f < u; f++) o[f] = arguments[f + 2];
    r.children = o;
  }
  return { $$typeof: gr, type: e.type, key: l, ref: i, props: r, _owner: a };
};
H.createContext = function(e) {
  return e = { $$typeof: id, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: ld, _context: e }, e.Consumer = e;
};
H.createElement = To;
H.createFactory = function(e) {
  var t = To.bind(null, e);
  return t.type = e, t;
};
H.createRef = function() {
  return { current: null };
};
H.forwardRef = function(e) {
  return { $$typeof: ad, render: e };
};
H.isValidElement = da;
H.lazy = function(e) {
  return { $$typeof: ud, _payload: { _status: -1, _result: e }, _init: pd };
};
H.memo = function(e, t) {
  return { $$typeof: od, type: e, compare: t === void 0 ? null : t };
};
H.startTransition = function(e) {
  var t = $r.transition;
  $r.transition = {};
  try {
    e();
  } finally {
    $r.transition = t;
  }
};
H.unstable_act = Mo;
H.useCallback = function(e, t) {
  return Ce.current.useCallback(e, t);
};
H.useContext = function(e) {
  return Ce.current.useContext(e);
};
H.useDebugValue = function() {
};
H.useDeferredValue = function(e) {
  return Ce.current.useDeferredValue(e);
};
H.useEffect = function(e, t) {
  return Ce.current.useEffect(e, t);
};
H.useId = function() {
  return Ce.current.useId();
};
H.useImperativeHandle = function(e, t, n) {
  return Ce.current.useImperativeHandle(e, t, n);
};
H.useInsertionEffect = function(e, t) {
  return Ce.current.useInsertionEffect(e, t);
};
H.useLayoutEffect = function(e, t) {
  return Ce.current.useLayoutEffect(e, t);
};
H.useMemo = function(e, t) {
  return Ce.current.useMemo(e, t);
};
H.useReducer = function(e, t, n) {
  return Ce.current.useReducer(e, t, n);
};
H.useRef = function(e) {
  return Ce.current.useRef(e);
};
H.useState = function(e) {
  return Ce.current.useState(e);
};
H.useSyncExternalStore = function(e, t, n) {
  return Ce.current.useSyncExternalStore(e, t, n);
};
H.useTransition = function() {
  return Ce.current.useTransition();
};
H.version = "18.3.1";
So.exports = H;
var y = So.exports;
const cs = /* @__PURE__ */ qc(y);
var Lo = { exports: {} }, Oe = {}, Po = { exports: {} }, Do = {};
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
  function t(T, A) {
    var $ = T.length;
    T.push(A);
    e: for (; 0 < $; ) {
      var Y = $ - 1 >>> 1, q = T[Y];
      if (0 < l(q, A)) T[Y] = A, T[$] = q, $ = Y;
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var A = T[0], $ = T.pop();
    if ($ !== A) {
      T[0] = $;
      e: for (var Y = 0, q = T.length, z = q >>> 1; Y < z; ) {
        var Q = 2 * (Y + 1) - 1, D = T[Q], Z = Q + 1, W = T[Z];
        if (0 > l(D, $)) Z < q && 0 > l(W, D) ? (T[Y] = W, T[Z] = $, Y = Z) : (T[Y] = D, T[Q] = $, Y = Q);
        else if (Z < q && 0 > l(W, $)) T[Y] = W, T[Z] = $, Y = Z;
        else break e;
      }
    }
    return A;
  }
  function l(T, A) {
    var $ = T.sortIndex - A.sortIndex;
    return $ !== 0 ? $ : T.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var a = Date, o = a.now();
    e.unstable_now = function() {
      return a.now() - o;
    };
  }
  var u = [], f = [], w = 1, x = null, h = 3, v = !1, g = !1, _ = !1, j = typeof setTimeout == "function" ? setTimeout : null, c = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(T) {
    for (var A = n(f); A !== null; ) {
      if (A.callback === null) r(f);
      else if (A.startTime <= T) r(f), A.sortIndex = A.expirationTime, t(u, A);
      else break;
      A = n(f);
    }
  }
  function E(T) {
    if (_ = !1, p(T), !g) if (n(u) !== null) g = !0, F(P);
    else {
      var A = n(f);
      A !== null && B(E, A.startTime - T);
    }
  }
  function P(T, A) {
    g = !1, _ && (_ = !1, c(I), I = -1), v = !0;
    var $ = h;
    try {
      for (p(A), x = n(u); x !== null && (!(x.expirationTime > A) || T && !k()); ) {
        var Y = x.callback;
        if (typeof Y == "function") {
          x.callback = null, h = x.priorityLevel;
          var q = Y(x.expirationTime <= A);
          A = e.unstable_now(), typeof q == "function" ? x.callback = q : x === n(u) && r(u), p(A);
        } else r(u);
        x = n(u);
      }
      if (x !== null) var z = !0;
      else {
        var Q = n(f);
        Q !== null && B(E, Q.startTime - A), z = !1;
      }
      return z;
    } finally {
      x = null, h = $, v = !1;
    }
  }
  var R = !1, C = null, I = -1, U = 5, M = -1;
  function k() {
    return !(e.unstable_now() - M < U);
  }
  function S() {
    if (C !== null) {
      var T = e.unstable_now();
      M = T;
      var A = !0;
      try {
        A = C(!0, T);
      } finally {
        A ? b() : (R = !1, C = null);
      }
    } else R = !1;
  }
  var b;
  if (typeof d == "function") b = function() {
    d(S);
  };
  else if (typeof MessageChannel < "u") {
    var m = new MessageChannel(), N = m.port2;
    m.port1.onmessage = S, b = function() {
      N.postMessage(null);
    };
  } else b = function() {
    j(S, 0);
  };
  function F(T) {
    C = T, R || (R = !0, b());
  }
  function B(T, A) {
    I = j(function() {
      T(e.unstable_now());
    }, A);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    g || v || (g = !0, F(P));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : U = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(T) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var A = 3;
        break;
      default:
        A = h;
    }
    var $ = h;
    h = A;
    try {
      return T();
    } finally {
      h = $;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, A) {
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
    var $ = h;
    h = T;
    try {
      return A();
    } finally {
      h = $;
    }
  }, e.unstable_scheduleCallback = function(T, A, $) {
    var Y = e.unstable_now();
    switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? Y + $ : Y) : $ = Y, T) {
      case 1:
        var q = -1;
        break;
      case 2:
        q = 250;
        break;
      case 5:
        q = 1073741823;
        break;
      case 4:
        q = 1e4;
        break;
      default:
        q = 5e3;
    }
    return q = $ + q, T = { id: w++, callback: A, priorityLevel: T, startTime: $, expirationTime: q, sortIndex: -1 }, $ > Y ? (T.sortIndex = $, t(f, T), n(u) === null && T === n(f) && (_ ? (c(I), I = -1) : _ = !0, B(E, $ - Y))) : (T.sortIndex = q, t(u, T), g || v || (g = !0, F(P))), T;
  }, e.unstable_shouldYield = k, e.unstable_wrapCallback = function(T) {
    var A = h;
    return function() {
      var $ = h;
      h = A;
      try {
        return T.apply(this, arguments);
      } finally {
        h = $;
      }
    };
  };
})(Do);
Po.exports = Do;
var hd = Po.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gd = y, be = hd;
function L(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var zo = /* @__PURE__ */ new Set(), qn = {};
function Xt(e, t) {
  wn(e, t), wn(e + "Capture", t);
}
function wn(e, t) {
  for (qn[e] = t, e = 0; e < t.length; e++) zo.add(t[e]);
}
var pt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), pi = Object.prototype.hasOwnProperty, yd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ds = {}, fs = {};
function vd(e) {
  return pi.call(fs, e) ? !0 : pi.call(ds, e) ? !1 : yd.test(e) ? fs[e] = !0 : (ds[e] = !0, !1);
}
function wd(e, t, n, r) {
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
function xd(e, t, n, r) {
  if (t === null || typeof t > "u" || wd(e, t, n, r)) return !0;
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
function Ne(e, t, n, r, l, i, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a;
}
var ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ge[e] = new Ne(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ge[t] = new Ne(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ge[e] = new Ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ge[e] = new Ne(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ge[e] = new Ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ge[e] = new Ne(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ge[e] = new Ne(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ge[e] = new Ne(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ge[e] = new Ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var fa = /[\-:]([a-z])/g;
function pa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    fa,
    pa
  );
  ge[t] = new Ne(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(fa, pa);
  ge[t] = new Ne(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(fa, pa);
  ge[t] = new Ne(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ge[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ge.xlinkHref = new Ne("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ge[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ma(e, t, n, r) {
  var l = ge.hasOwnProperty(t) ? ge[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (xd(t, n, l, r) && (n = null), r || l === null ? vd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var yt = gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Sr = Symbol.for("react.element"), en = Symbol.for("react.portal"), tn = Symbol.for("react.fragment"), ha = Symbol.for("react.strict_mode"), mi = Symbol.for("react.profiler"), Ro = Symbol.for("react.provider"), bo = Symbol.for("react.context"), ga = Symbol.for("react.forward_ref"), hi = Symbol.for("react.suspense"), gi = Symbol.for("react.suspense_list"), ya = Symbol.for("react.memo"), wt = Symbol.for("react.lazy"), Oo = Symbol.for("react.offscreen"), ps = Symbol.iterator;
function Ln(e) {
  return e === null || typeof e != "object" ? null : (e = ps && e[ps] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ae = Object.assign, Ul;
function An(e) {
  if (Ul === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ul = t && t[1] || "";
  }
  return `
` + Ul + e;
}
var Ql = !1;
function Wl(e, t) {
  if (!e || Ql) return "";
  Ql = !0;
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
      } catch (f) {
        var r = f;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (f) {
        r = f;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (var l = f.stack.split(`
`), i = r.stack.split(`
`), a = l.length - 1, o = i.length - 1; 1 <= a && 0 <= o && l[a] !== i[o]; ) o--;
      for (; 1 <= a && 0 <= o; a--, o--) if (l[a] !== i[o]) {
        if (a !== 1 || o !== 1)
          do
            if (a--, o--, 0 > o || l[a] !== i[o]) {
              var u = `
` + l[a].replace(" at new ", " at ");
              return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
            }
          while (1 <= a && 0 <= o);
        break;
      }
    }
  } finally {
    Ql = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? An(e) : "";
}
function _d(e) {
  switch (e.tag) {
    case 5:
      return An(e.type);
    case 16:
      return An("Lazy");
    case 13:
      return An("Suspense");
    case 19:
      return An("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Wl(e.type, !1), e;
    case 11:
      return e = Wl(e.type.render, !1), e;
    case 1:
      return e = Wl(e.type, !0), e;
    default:
      return "";
  }
}
function yi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case tn:
      return "Fragment";
    case en:
      return "Portal";
    case mi:
      return "Profiler";
    case ha:
      return "StrictMode";
    case hi:
      return "Suspense";
    case gi:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case bo:
      return (e.displayName || "Context") + ".Consumer";
    case Ro:
      return (e._context.displayName || "Context") + ".Provider";
    case ga:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ya:
      return t = e.displayName || null, t !== null ? t : yi(e.type) || "Memo";
    case wt:
      t = e._payload, e = e._init;
      try {
        return yi(e(t));
      } catch {
      }
  }
  return null;
}
function Sd(e) {
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
      return yi(t);
    case 8:
      return t === ha ? "StrictMode" : "Mode";
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
function Dt(e) {
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
function Fo(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function kd(e) {
  var t = Fo(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(a) {
      r = "" + a, i.call(this, a);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(a) {
      r = "" + a;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function kr(e) {
  e._valueTracker || (e._valueTracker = kd(e));
}
function Ao(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Fo(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Jr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function vi(e, t) {
  var n = t.checked;
  return ae({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ms(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Dt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function $o(e, t) {
  t = t.checked, t != null && ma(e, "checked", t, !1);
}
function wi(e, t) {
  $o(e, t);
  var n = Dt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? xi(e, t.type, n) : t.hasOwnProperty("defaultValue") && xi(e, t.type, Dt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function hs(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function xi(e, t, n) {
  (t !== "number" || Jr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var $n = Array.isArray;
function pn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Dt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function _i(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return ae({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function gs(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(L(92));
      if ($n(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Dt(n) };
}
function Vo(e, t) {
  var n = Dt(t.value), r = Dt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function ys(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Uo(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Si(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Uo(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Er, Qo = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Er = Er || document.createElement("div"), Er.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Er.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function er(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Qn = {
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
}, Ed = ["Webkit", "ms", "Moz", "O"];
Object.keys(Qn).forEach(function(e) {
  Ed.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Qn[t] = Qn[e];
  });
});
function Wo(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Qn.hasOwnProperty(e) && Qn[e] ? ("" + t).trim() : t + "px";
}
function Ho(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Wo(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Cd = ae({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ki(e, t) {
  if (t) {
    if (Cd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function Ei(e, t) {
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
var Ci = null;
function va(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ni = null, mn = null, hn = null;
function vs(e) {
  if (e = wr(e)) {
    if (typeof Ni != "function") throw Error(L(280));
    var t = e.stateNode;
    t && (t = jl(t), Ni(e.stateNode, e.type, t));
  }
}
function Bo(e) {
  mn ? hn ? hn.push(e) : hn = [e] : mn = e;
}
function Go() {
  if (mn) {
    var e = mn, t = hn;
    if (hn = mn = null, vs(e), t) for (e = 0; e < t.length; e++) vs(t[e]);
  }
}
function Ko(e, t) {
  return e(t);
}
function Yo() {
}
var Hl = !1;
function Xo(e, t, n) {
  if (Hl) return e(t, n);
  Hl = !0;
  try {
    return Ko(e, t, n);
  } finally {
    Hl = !1, (mn !== null || hn !== null) && (Yo(), Go());
  }
}
function tr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = jl(n);
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
var ji = !1;
if (pt) try {
  var Pn = {};
  Object.defineProperty(Pn, "passive", { get: function() {
    ji = !0;
  } }), window.addEventListener("test", Pn, Pn), window.removeEventListener("test", Pn, Pn);
} catch {
  ji = !1;
}
function Nd(e, t, n, r, l, i, a, o, u) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (w) {
    this.onError(w);
  }
}
var Wn = !1, qr = null, el = !1, Ii = null, jd = { onError: function(e) {
  Wn = !0, qr = e;
} };
function Id(e, t, n, r, l, i, a, o, u) {
  Wn = !1, qr = null, Nd.apply(jd, arguments);
}
function Td(e, t, n, r, l, i, a, o, u) {
  if (Id.apply(this, arguments), Wn) {
    if (Wn) {
      var f = qr;
      Wn = !1, qr = null;
    } else throw Error(L(198));
    el || (el = !0, Ii = f);
  }
}
function Zt(e) {
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
function Zo(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function ws(e) {
  if (Zt(e) !== e) throw Error(L(188));
}
function Md(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Zt(e), t === null) throw Error(L(188));
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
        if (i === n) return ws(l), e;
        if (i === r) return ws(l), t;
        i = i.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) n = l, r = i;
    else {
      for (var a = !1, o = l.child; o; ) {
        if (o === n) {
          a = !0, n = l, r = i;
          break;
        }
        if (o === r) {
          a = !0, r = l, n = i;
          break;
        }
        o = o.sibling;
      }
      if (!a) {
        for (o = i.child; o; ) {
          if (o === n) {
            a = !0, n = i, r = l;
            break;
          }
          if (o === r) {
            a = !0, r = i, n = l;
            break;
          }
          o = o.sibling;
        }
        if (!a) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function Jo(e) {
  return e = Md(e), e !== null ? qo(e) : null;
}
function qo(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = qo(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var eu = be.unstable_scheduleCallback, xs = be.unstable_cancelCallback, Ld = be.unstable_shouldYield, Pd = be.unstable_requestPaint, oe = be.unstable_now, Dd = be.unstable_getCurrentPriorityLevel, wa = be.unstable_ImmediatePriority, tu = be.unstable_UserBlockingPriority, tl = be.unstable_NormalPriority, zd = be.unstable_LowPriority, nu = be.unstable_IdlePriority, kl = null, at = null;
function Rd(e) {
  if (at && typeof at.onCommitFiberRoot == "function") try {
    at.onCommitFiberRoot(kl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Ze = Math.clz32 ? Math.clz32 : Fd, bd = Math.log, Od = Math.LN2;
function Fd(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (bd(e) / Od | 0) | 0;
}
var Cr = 64, Nr = 4194304;
function Vn(e) {
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
function nl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, a = n & 268435455;
  if (a !== 0) {
    var o = a & ~l;
    o !== 0 ? r = Vn(o) : (i &= a, i !== 0 && (r = Vn(i)));
  } else a = n & ~l, a !== 0 ? r = Vn(a) : i !== 0 && (r = Vn(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Ze(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Ad(e, t) {
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
function $d(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var a = 31 - Ze(i), o = 1 << a, u = l[a];
    u === -1 ? (!(o & n) || o & r) && (l[a] = Ad(o, t)) : u <= t && (e.expiredLanes |= o), i &= ~o;
  }
}
function Ti(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function ru() {
  var e = Cr;
  return Cr <<= 1, !(Cr & 4194240) && (Cr = 64), e;
}
function Bl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function yr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ze(t), e[t] = n;
}
function Vd(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ze(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function xa(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Ze(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var J = 0;
function lu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var iu, _a, au, su, ou, Mi = !1, jr = [], Ct = null, Nt = null, jt = null, nr = /* @__PURE__ */ new Map(), rr = /* @__PURE__ */ new Map(), _t = [], Ud = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function _s(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ct = null;
      break;
    case "dragenter":
    case "dragleave":
      Nt = null;
      break;
    case "mouseover":
    case "mouseout":
      jt = null;
      break;
    case "pointerover":
    case "pointerout":
      nr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      rr.delete(t.pointerId);
  }
}
function Dn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = wr(t), t !== null && _a(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Qd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Ct = Dn(Ct, e, t, n, r, l), !0;
    case "dragenter":
      return Nt = Dn(Nt, e, t, n, r, l), !0;
    case "mouseover":
      return jt = Dn(jt, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return nr.set(i, Dn(nr.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, rr.set(i, Dn(rr.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function uu(e) {
  var t = $t(e.target);
  if (t !== null) {
    var n = Zt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Zo(n), t !== null) {
          e.blockedOn = t, ou(e.priority, function() {
            au(n);
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
function Vr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Li(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ci = r, n.target.dispatchEvent(r), Ci = null;
    } else return t = wr(n), t !== null && _a(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ss(e, t, n) {
  Vr(e) && n.delete(t);
}
function Wd() {
  Mi = !1, Ct !== null && Vr(Ct) && (Ct = null), Nt !== null && Vr(Nt) && (Nt = null), jt !== null && Vr(jt) && (jt = null), nr.forEach(Ss), rr.forEach(Ss);
}
function zn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Mi || (Mi = !0, be.unstable_scheduleCallback(be.unstable_NormalPriority, Wd)));
}
function lr(e) {
  function t(l) {
    return zn(l, e);
  }
  if (0 < jr.length) {
    zn(jr[0], e);
    for (var n = 1; n < jr.length; n++) {
      var r = jr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Ct !== null && zn(Ct, e), Nt !== null && zn(Nt, e), jt !== null && zn(jt, e), nr.forEach(t), rr.forEach(t), n = 0; n < _t.length; n++) r = _t[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < _t.length && (n = _t[0], n.blockedOn === null); ) uu(n), n.blockedOn === null && _t.shift();
}
var gn = yt.ReactCurrentBatchConfig, rl = !0;
function Hd(e, t, n, r) {
  var l = J, i = gn.transition;
  gn.transition = null;
  try {
    J = 1, Sa(e, t, n, r);
  } finally {
    J = l, gn.transition = i;
  }
}
function Bd(e, t, n, r) {
  var l = J, i = gn.transition;
  gn.transition = null;
  try {
    J = 4, Sa(e, t, n, r);
  } finally {
    J = l, gn.transition = i;
  }
}
function Sa(e, t, n, r) {
  if (rl) {
    var l = Li(e, t, n, r);
    if (l === null) ni(e, t, r, ll, n), _s(e, r);
    else if (Qd(l, e, t, n, r)) r.stopPropagation();
    else if (_s(e, r), t & 4 && -1 < Ud.indexOf(e)) {
      for (; l !== null; ) {
        var i = wr(l);
        if (i !== null && iu(i), i = Li(e, t, n, r), i === null && ni(e, t, r, ll, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else ni(e, t, r, null, n);
  }
}
var ll = null;
function Li(e, t, n, r) {
  if (ll = null, e = va(r), e = $t(e), e !== null) if (t = Zt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Zo(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return ll = e, null;
}
function cu(e) {
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
      switch (Dd()) {
        case wa:
          return 1;
        case tu:
          return 4;
        case tl:
        case zd:
          return 16;
        case nu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kt = null, ka = null, Ur = null;
function du() {
  if (Ur) return Ur;
  var e, t = ka, n = t.length, r, l = "value" in kt ? kt.value : kt.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === l[i - r]; r++) ;
  return Ur = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Qr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Ir() {
  return !0;
}
function ks() {
  return !1;
}
function Fe(e) {
  function t(n, r, l, i, a) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = a, this.currentTarget = null;
    for (var o in e) e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(i) : i[o]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ir : ks, this.isPropagationStopped = ks, this;
  }
  return ae(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ir);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ir);
  }, persist: function() {
  }, isPersistent: Ir }), t;
}
var Tn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Ea = Fe(Tn), vr = ae({}, Tn, { view: 0, detail: 0 }), Gd = Fe(vr), Gl, Kl, Rn, El = ae({}, vr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ca, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Rn && (Rn && e.type === "mousemove" ? (Gl = e.screenX - Rn.screenX, Kl = e.screenY - Rn.screenY) : Kl = Gl = 0, Rn = e), Gl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Kl;
} }), Es = Fe(El), Kd = ae({}, El, { dataTransfer: 0 }), Yd = Fe(Kd), Xd = ae({}, vr, { relatedTarget: 0 }), Yl = Fe(Xd), Zd = ae({}, Tn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Jd = Fe(Zd), qd = ae({}, Tn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), ef = Fe(qd), tf = ae({}, Tn, { data: 0 }), Cs = Fe(tf), nf = {
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
}, rf = {
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
}, lf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function af(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = lf[e]) ? !!t[e] : !1;
}
function Ca() {
  return af;
}
var sf = ae({}, vr, { key: function(e) {
  if (e.key) {
    var t = nf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Qr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? rf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ca, charCode: function(e) {
  return e.type === "keypress" ? Qr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Qr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), of = Fe(sf), uf = ae({}, El, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ns = Fe(uf), cf = ae({}, vr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ca }), df = Fe(cf), ff = ae({}, Tn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), pf = Fe(ff), mf = ae({}, El, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), hf = Fe(mf), gf = [9, 13, 27, 32], Na = pt && "CompositionEvent" in window, Hn = null;
pt && "documentMode" in document && (Hn = document.documentMode);
var yf = pt && "TextEvent" in window && !Hn, fu = pt && (!Na || Hn && 8 < Hn && 11 >= Hn), js = " ", Is = !1;
function pu(e, t) {
  switch (e) {
    case "keyup":
      return gf.indexOf(t.keyCode) !== -1;
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
function mu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var nn = !1;
function vf(e, t) {
  switch (e) {
    case "compositionend":
      return mu(t);
    case "keypress":
      return t.which !== 32 ? null : (Is = !0, js);
    case "textInput":
      return e = t.data, e === js && Is ? null : e;
    default:
      return null;
  }
}
function wf(e, t) {
  if (nn) return e === "compositionend" || !Na && pu(e, t) ? (e = du(), Ur = ka = kt = null, nn = !1, e) : null;
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
      return fu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var xf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ts(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!xf[e.type] : t === "textarea";
}
function hu(e, t, n, r) {
  Bo(r), t = il(t, "onChange"), 0 < t.length && (n = new Ea("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Bn = null, ir = null;
function _f(e) {
  Nu(e, 0);
}
function Cl(e) {
  var t = an(e);
  if (Ao(t)) return e;
}
function Sf(e, t) {
  if (e === "change") return t;
}
var gu = !1;
if (pt) {
  var Xl;
  if (pt) {
    var Zl = "oninput" in document;
    if (!Zl) {
      var Ms = document.createElement("div");
      Ms.setAttribute("oninput", "return;"), Zl = typeof Ms.oninput == "function";
    }
    Xl = Zl;
  } else Xl = !1;
  gu = Xl && (!document.documentMode || 9 < document.documentMode);
}
function Ls() {
  Bn && (Bn.detachEvent("onpropertychange", yu), ir = Bn = null);
}
function yu(e) {
  if (e.propertyName === "value" && Cl(ir)) {
    var t = [];
    hu(t, ir, e, va(e)), Xo(_f, t);
  }
}
function kf(e, t, n) {
  e === "focusin" ? (Ls(), Bn = t, ir = n, Bn.attachEvent("onpropertychange", yu)) : e === "focusout" && Ls();
}
function Ef(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Cl(ir);
}
function Cf(e, t) {
  if (e === "click") return Cl(t);
}
function Nf(e, t) {
  if (e === "input" || e === "change") return Cl(t);
}
function jf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var qe = typeof Object.is == "function" ? Object.is : jf;
function ar(e, t) {
  if (qe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!pi.call(t, l) || !qe(e[l], t[l])) return !1;
  }
  return !0;
}
function Ps(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ds(e, t) {
  var n = Ps(e);
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
    n = Ps(n);
  }
}
function vu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? vu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function wu() {
  for (var e = window, t = Jr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Jr(e.document);
  }
  return t;
}
function ja(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function If(e) {
  var t = wu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && vu(n.ownerDocument.documentElement, n)) {
    if (r !== null && ja(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Ds(n, i);
        var a = Ds(
          n,
          r
        );
        l && a && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Tf = pt && "documentMode" in document && 11 >= document.documentMode, rn = null, Pi = null, Gn = null, Di = !1;
function zs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Di || rn == null || rn !== Jr(r) || (r = rn, "selectionStart" in r && ja(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Gn && ar(Gn, r) || (Gn = r, r = il(Pi, "onSelect"), 0 < r.length && (t = new Ea("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = rn)));
}
function Tr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var ln = { animationend: Tr("Animation", "AnimationEnd"), animationiteration: Tr("Animation", "AnimationIteration"), animationstart: Tr("Animation", "AnimationStart"), transitionend: Tr("Transition", "TransitionEnd") }, Jl = {}, xu = {};
pt && (xu = document.createElement("div").style, "AnimationEvent" in window || (delete ln.animationend.animation, delete ln.animationiteration.animation, delete ln.animationstart.animation), "TransitionEvent" in window || delete ln.transitionend.transition);
function Nl(e) {
  if (Jl[e]) return Jl[e];
  if (!ln[e]) return e;
  var t = ln[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in xu) return Jl[e] = t[n];
  return e;
}
var _u = Nl("animationend"), Su = Nl("animationiteration"), ku = Nl("animationstart"), Eu = Nl("transitionend"), Cu = /* @__PURE__ */ new Map(), Rs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Rt(e, t) {
  Cu.set(e, t), Xt(t, [e]);
}
for (var ql = 0; ql < Rs.length; ql++) {
  var ei = Rs[ql], Mf = ei.toLowerCase(), Lf = ei[0].toUpperCase() + ei.slice(1);
  Rt(Mf, "on" + Lf);
}
Rt(_u, "onAnimationEnd");
Rt(Su, "onAnimationIteration");
Rt(ku, "onAnimationStart");
Rt("dblclick", "onDoubleClick");
Rt("focusin", "onFocus");
Rt("focusout", "onBlur");
Rt(Eu, "onTransitionEnd");
wn("onMouseEnter", ["mouseout", "mouseover"]);
wn("onMouseLeave", ["mouseout", "mouseover"]);
wn("onPointerEnter", ["pointerout", "pointerover"]);
wn("onPointerLeave", ["pointerout", "pointerover"]);
Xt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Xt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Xt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Xt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Xt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Xt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Un = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Pf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Un));
function bs(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Td(r, t, void 0, e), e.currentTarget = null;
}
function Nu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var a = r.length - 1; 0 <= a; a--) {
        var o = r[a], u = o.instance, f = o.currentTarget;
        if (o = o.listener, u !== i && l.isPropagationStopped()) break e;
        bs(l, o, f), i = u;
      }
      else for (a = 0; a < r.length; a++) {
        if (o = r[a], u = o.instance, f = o.currentTarget, o = o.listener, u !== i && l.isPropagationStopped()) break e;
        bs(l, o, f), i = u;
      }
    }
  }
  if (el) throw e = Ii, el = !1, Ii = null, e;
}
function te(e, t) {
  var n = t[Fi];
  n === void 0 && (n = t[Fi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ju(t, e, 2, !1), n.add(r));
}
function ti(e, t, n) {
  var r = 0;
  t && (r |= 4), ju(n, e, r, t);
}
var Mr = "_reactListening" + Math.random().toString(36).slice(2);
function sr(e) {
  if (!e[Mr]) {
    e[Mr] = !0, zo.forEach(function(n) {
      n !== "selectionchange" && (Pf.has(n) || ti(n, !1, e), ti(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Mr] || (t[Mr] = !0, ti("selectionchange", !1, t));
  }
}
function ju(e, t, n, r) {
  switch (cu(t)) {
    case 1:
      var l = Hd;
      break;
    case 4:
      l = Bd;
      break;
    default:
      l = Sa;
  }
  n = l.bind(null, t, n, e), l = void 0, !ji || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function ni(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var a = r.tag;
    if (a === 3 || a === 4) {
      var o = r.stateNode.containerInfo;
      if (o === l || o.nodeType === 8 && o.parentNode === l) break;
      if (a === 4) for (a = r.return; a !== null; ) {
        var u = a.tag;
        if ((u === 3 || u === 4) && (u = a.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l)) return;
        a = a.return;
      }
      for (; o !== null; ) {
        if (a = $t(o), a === null) return;
        if (u = a.tag, u === 5 || u === 6) {
          r = i = a;
          continue e;
        }
        o = o.parentNode;
      }
    }
    r = r.return;
  }
  Xo(function() {
    var f = i, w = va(n), x = [];
    e: {
      var h = Cu.get(e);
      if (h !== void 0) {
        var v = Ea, g = e;
        switch (e) {
          case "keypress":
            if (Qr(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = of;
            break;
          case "focusin":
            g = "focus", v = Yl;
            break;
          case "focusout":
            g = "blur", v = Yl;
            break;
          case "beforeblur":
          case "afterblur":
            v = Yl;
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
            v = Es;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Yd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = df;
            break;
          case _u:
          case Su:
          case ku:
            v = Jd;
            break;
          case Eu:
            v = pf;
            break;
          case "scroll":
            v = Gd;
            break;
          case "wheel":
            v = hf;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = ef;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Ns;
        }
        var _ = (t & 4) !== 0, j = !_ && e === "scroll", c = _ ? h !== null ? h + "Capture" : null : h;
        _ = [];
        for (var d = f, p; d !== null; ) {
          p = d;
          var E = p.stateNode;
          if (p.tag === 5 && E !== null && (p = E, c !== null && (E = tr(d, c), E != null && _.push(or(d, E, p)))), j) break;
          d = d.return;
        }
        0 < _.length && (h = new v(h, g, null, n, w), x.push({ event: h, listeners: _ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", h && n !== Ci && (g = n.relatedTarget || n.fromElement) && ($t(g) || g[mt])) break e;
        if ((v || h) && (h = w.window === w ? w : (h = w.ownerDocument) ? h.defaultView || h.parentWindow : window, v ? (g = n.relatedTarget || n.toElement, v = f, g = g ? $t(g) : null, g !== null && (j = Zt(g), g !== j || g.tag !== 5 && g.tag !== 6) && (g = null)) : (v = null, g = f), v !== g)) {
          if (_ = Es, E = "onMouseLeave", c = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (_ = Ns, E = "onPointerLeave", c = "onPointerEnter", d = "pointer"), j = v == null ? h : an(v), p = g == null ? h : an(g), h = new _(E, d + "leave", v, n, w), h.target = j, h.relatedTarget = p, E = null, $t(w) === f && (_ = new _(c, d + "enter", g, n, w), _.target = p, _.relatedTarget = j, E = _), j = E, v && g) t: {
            for (_ = v, c = g, d = 0, p = _; p; p = qt(p)) d++;
            for (p = 0, E = c; E; E = qt(E)) p++;
            for (; 0 < d - p; ) _ = qt(_), d--;
            for (; 0 < p - d; ) c = qt(c), p--;
            for (; d--; ) {
              if (_ === c || c !== null && _ === c.alternate) break t;
              _ = qt(_), c = qt(c);
            }
            _ = null;
          }
          else _ = null;
          v !== null && Os(x, h, v, _, !1), g !== null && j !== null && Os(x, j, g, _, !0);
        }
      }
      e: {
        if (h = f ? an(f) : window, v = h.nodeName && h.nodeName.toLowerCase(), v === "select" || v === "input" && h.type === "file") var P = Sf;
        else if (Ts(h)) if (gu) P = Nf;
        else {
          P = Ef;
          var R = kf;
        }
        else (v = h.nodeName) && v.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (P = Cf);
        if (P && (P = P(e, f))) {
          hu(x, P, n, w);
          break e;
        }
        R && R(e, h, f), e === "focusout" && (R = h._wrapperState) && R.controlled && h.type === "number" && xi(h, "number", h.value);
      }
      switch (R = f ? an(f) : window, e) {
        case "focusin":
          (Ts(R) || R.contentEditable === "true") && (rn = R, Pi = f, Gn = null);
          break;
        case "focusout":
          Gn = Pi = rn = null;
          break;
        case "mousedown":
          Di = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Di = !1, zs(x, n, w);
          break;
        case "selectionchange":
          if (Tf) break;
        case "keydown":
        case "keyup":
          zs(x, n, w);
      }
      var C;
      if (Na) e: {
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
      else nn ? pu(e, n) && (I = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (I = "onCompositionStart");
      I && (fu && n.locale !== "ko" && (nn || I !== "onCompositionStart" ? I === "onCompositionEnd" && nn && (C = du()) : (kt = w, ka = "value" in kt ? kt.value : kt.textContent, nn = !0)), R = il(f, I), 0 < R.length && (I = new Cs(I, e, null, n, w), x.push({ event: I, listeners: R }), C ? I.data = C : (C = mu(n), C !== null && (I.data = C)))), (C = yf ? vf(e, n) : wf(e, n)) && (f = il(f, "onBeforeInput"), 0 < f.length && (w = new Cs("onBeforeInput", "beforeinput", null, n, w), x.push({ event: w, listeners: f }), w.data = C));
    }
    Nu(x, t);
  });
}
function or(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function il(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = tr(e, n), i != null && r.unshift(or(e, i, l)), i = tr(e, t), i != null && r.push(or(e, i, l))), e = e.return;
  }
  return r;
}
function qt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Os(e, t, n, r, l) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var o = n, u = o.alternate, f = o.stateNode;
    if (u !== null && u === r) break;
    o.tag === 5 && f !== null && (o = f, l ? (u = tr(n, i), u != null && a.unshift(or(n, u, o))) : l || (u = tr(n, i), u != null && a.push(or(n, u, o)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Df = /\r\n?/g, zf = /\u0000|\uFFFD/g;
function Fs(e) {
  return (typeof e == "string" ? e : "" + e).replace(Df, `
`).replace(zf, "");
}
function Lr(e, t, n) {
  if (t = Fs(t), Fs(e) !== t && n) throw Error(L(425));
}
function al() {
}
var zi = null, Ri = null;
function bi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Oi = typeof setTimeout == "function" ? setTimeout : void 0, Rf = typeof clearTimeout == "function" ? clearTimeout : void 0, As = typeof Promise == "function" ? Promise : void 0, bf = typeof queueMicrotask == "function" ? queueMicrotask : typeof As < "u" ? function(e) {
  return As.resolve(null).then(e).catch(Of);
} : Oi;
function Of(e) {
  setTimeout(function() {
    throw e;
  });
}
function ri(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), lr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  lr(t);
}
function It(e) {
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
function $s(e) {
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
var Mn = Math.random().toString(36).slice(2), it = "__reactFiber$" + Mn, ur = "__reactProps$" + Mn, mt = "__reactContainer$" + Mn, Fi = "__reactEvents$" + Mn, Ff = "__reactListeners$" + Mn, Af = "__reactHandles$" + Mn;
function $t(e) {
  var t = e[it];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[mt] || n[it]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = $s(e); e !== null; ) {
        if (n = e[it]) return n;
        e = $s(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function wr(e) {
  return e = e[it] || e[mt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function an(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function jl(e) {
  return e[ur] || null;
}
var Ai = [], sn = -1;
function bt(e) {
  return { current: e };
}
function ne(e) {
  0 > sn || (e.current = Ai[sn], Ai[sn] = null, sn--);
}
function ee(e, t) {
  sn++, Ai[sn] = e.current, e.current = t;
}
var zt = {}, xe = bt(zt), Te = bt(!1), Ht = zt;
function xn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return zt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Me(e) {
  return e = e.childContextTypes, e != null;
}
function sl() {
  ne(Te), ne(xe);
}
function Vs(e, t, n) {
  if (xe.current !== zt) throw Error(L(168));
  ee(xe, t), ee(Te, n);
}
function Iu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(L(108, Sd(e) || "Unknown", l));
  return ae({}, n, r);
}
function ol(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || zt, Ht = xe.current, ee(xe, e), ee(Te, Te.current), !0;
}
function Us(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n ? (e = Iu(e, t, Ht), r.__reactInternalMemoizedMergedChildContext = e, ne(Te), ne(xe), ee(xe, e)) : ne(Te), ee(Te, n);
}
var ut = null, Il = !1, li = !1;
function Tu(e) {
  ut === null ? ut = [e] : ut.push(e);
}
function $f(e) {
  Il = !0, Tu(e);
}
function Ot() {
  if (!li && ut !== null) {
    li = !0;
    var e = 0, t = J;
    try {
      var n = ut;
      for (J = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      ut = null, Il = !1;
    } catch (l) {
      throw ut !== null && (ut = ut.slice(e + 1)), eu(wa, Ot), l;
    } finally {
      J = t, li = !1;
    }
  }
  return null;
}
var on = [], un = 0, ul = null, cl = 0, Ae = [], $e = 0, Bt = null, ct = 1, dt = "";
function Ft(e, t) {
  on[un++] = cl, on[un++] = ul, ul = e, cl = t;
}
function Mu(e, t, n) {
  Ae[$e++] = ct, Ae[$e++] = dt, Ae[$e++] = Bt, Bt = e;
  var r = ct;
  e = dt;
  var l = 32 - Ze(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - Ze(t) + l;
  if (30 < i) {
    var a = l - l % 5;
    i = (r & (1 << a) - 1).toString(32), r >>= a, l -= a, ct = 1 << 32 - Ze(t) + l | n << l | r, dt = i + e;
  } else ct = 1 << i | n << l | r, dt = e;
}
function Ia(e) {
  e.return !== null && (Ft(e, 1), Mu(e, 1, 0));
}
function Ta(e) {
  for (; e === ul; ) ul = on[--un], on[un] = null, cl = on[--un], on[un] = null;
  for (; e === Bt; ) Bt = Ae[--$e], Ae[$e] = null, dt = Ae[--$e], Ae[$e] = null, ct = Ae[--$e], Ae[$e] = null;
}
var Re = null, ze = null, re = !1, Ye = null;
function Lu(e, t) {
  var n = Ve(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Qs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Re = e, ze = It(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Re = e, ze = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Bt !== null ? { id: ct, overflow: dt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ve(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Re = e, ze = null, !0) : !1;
    default:
      return !1;
  }
}
function $i(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Vi(e) {
  if (re) {
    var t = ze;
    if (t) {
      var n = t;
      if (!Qs(e, t)) {
        if ($i(e)) throw Error(L(418));
        t = It(n.nextSibling);
        var r = Re;
        t && Qs(e, t) ? Lu(r, n) : (e.flags = e.flags & -4097 | 2, re = !1, Re = e);
      }
    } else {
      if ($i(e)) throw Error(L(418));
      e.flags = e.flags & -4097 | 2, re = !1, Re = e;
    }
  }
}
function Ws(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Re = e;
}
function Pr(e) {
  if (e !== Re) return !1;
  if (!re) return Ws(e), re = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !bi(e.type, e.memoizedProps)), t && (t = ze)) {
    if ($i(e)) throw Pu(), Error(L(418));
    for (; t; ) Lu(e, t), t = It(t.nextSibling);
  }
  if (Ws(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ze = It(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      ze = null;
    }
  } else ze = Re ? It(e.stateNode.nextSibling) : null;
  return !0;
}
function Pu() {
  for (var e = ze; e; ) e = It(e.nextSibling);
}
function _n() {
  ze = Re = null, re = !1;
}
function Ma(e) {
  Ye === null ? Ye = [e] : Ye.push(e);
}
var Vf = yt.ReactCurrentBatchConfig;
function bn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var l = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
        var o = l.refs;
        a === null ? delete o[i] : o[i] = a;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function Dr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(L(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Hs(e) {
  var t = e._init;
  return t(e._payload);
}
function Du(e) {
  function t(c, d) {
    if (e) {
      var p = c.deletions;
      p === null ? (c.deletions = [d], c.flags |= 16) : p.push(d);
    }
  }
  function n(c, d) {
    if (!e) return null;
    for (; d !== null; ) t(c, d), d = d.sibling;
    return null;
  }
  function r(c, d) {
    for (c = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? c.set(d.key, d) : c.set(d.index, d), d = d.sibling;
    return c;
  }
  function l(c, d) {
    return c = Pt(c, d), c.index = 0, c.sibling = null, c;
  }
  function i(c, d, p) {
    return c.index = p, e ? (p = c.alternate, p !== null ? (p = p.index, p < d ? (c.flags |= 2, d) : p) : (c.flags |= 2, d)) : (c.flags |= 1048576, d);
  }
  function a(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function o(c, d, p, E) {
    return d === null || d.tag !== 6 ? (d = di(p, c.mode, E), d.return = c, d) : (d = l(d, p), d.return = c, d);
  }
  function u(c, d, p, E) {
    var P = p.type;
    return P === tn ? w(c, d, p.props.children, E, p.key) : d !== null && (d.elementType === P || typeof P == "object" && P !== null && P.$$typeof === wt && Hs(P) === d.type) ? (E = l(d, p.props), E.ref = bn(c, d, p), E.return = c, E) : (E = Xr(p.type, p.key, p.props, null, c.mode, E), E.ref = bn(c, d, p), E.return = c, E);
  }
  function f(c, d, p, E) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== p.containerInfo || d.stateNode.implementation !== p.implementation ? (d = fi(p, c.mode, E), d.return = c, d) : (d = l(d, p.children || []), d.return = c, d);
  }
  function w(c, d, p, E, P) {
    return d === null || d.tag !== 7 ? (d = Wt(p, c.mode, E, P), d.return = c, d) : (d = l(d, p), d.return = c, d);
  }
  function x(c, d, p) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = di("" + d, c.mode, p), d.return = c, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Sr:
          return p = Xr(d.type, d.key, d.props, null, c.mode, p), p.ref = bn(c, null, d), p.return = c, p;
        case en:
          return d = fi(d, c.mode, p), d.return = c, d;
        case wt:
          var E = d._init;
          return x(c, E(d._payload), p);
      }
      if ($n(d) || Ln(d)) return d = Wt(d, c.mode, p, null), d.return = c, d;
      Dr(c, d);
    }
    return null;
  }
  function h(c, d, p, E) {
    var P = d !== null ? d.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return P !== null ? null : o(c, d, "" + p, E);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Sr:
          return p.key === P ? u(c, d, p, E) : null;
        case en:
          return p.key === P ? f(c, d, p, E) : null;
        case wt:
          return P = p._init, h(
            c,
            d,
            P(p._payload),
            E
          );
      }
      if ($n(p) || Ln(p)) return P !== null ? null : w(c, d, p, E, null);
      Dr(c, p);
    }
    return null;
  }
  function v(c, d, p, E, P) {
    if (typeof E == "string" && E !== "" || typeof E == "number") return c = c.get(p) || null, o(d, c, "" + E, P);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Sr:
          return c = c.get(E.key === null ? p : E.key) || null, u(d, c, E, P);
        case en:
          return c = c.get(E.key === null ? p : E.key) || null, f(d, c, E, P);
        case wt:
          var R = E._init;
          return v(c, d, p, R(E._payload), P);
      }
      if ($n(E) || Ln(E)) return c = c.get(p) || null, w(d, c, E, P, null);
      Dr(d, E);
    }
    return null;
  }
  function g(c, d, p, E) {
    for (var P = null, R = null, C = d, I = d = 0, U = null; C !== null && I < p.length; I++) {
      C.index > I ? (U = C, C = null) : U = C.sibling;
      var M = h(c, C, p[I], E);
      if (M === null) {
        C === null && (C = U);
        break;
      }
      e && C && M.alternate === null && t(c, C), d = i(M, d, I), R === null ? P = M : R.sibling = M, R = M, C = U;
    }
    if (I === p.length) return n(c, C), re && Ft(c, I), P;
    if (C === null) {
      for (; I < p.length; I++) C = x(c, p[I], E), C !== null && (d = i(C, d, I), R === null ? P = C : R.sibling = C, R = C);
      return re && Ft(c, I), P;
    }
    for (C = r(c, C); I < p.length; I++) U = v(C, c, I, p[I], E), U !== null && (e && U.alternate !== null && C.delete(U.key === null ? I : U.key), d = i(U, d, I), R === null ? P = U : R.sibling = U, R = U);
    return e && C.forEach(function(k) {
      return t(c, k);
    }), re && Ft(c, I), P;
  }
  function _(c, d, p, E) {
    var P = Ln(p);
    if (typeof P != "function") throw Error(L(150));
    if (p = P.call(p), p == null) throw Error(L(151));
    for (var R = P = null, C = d, I = d = 0, U = null, M = p.next(); C !== null && !M.done; I++, M = p.next()) {
      C.index > I ? (U = C, C = null) : U = C.sibling;
      var k = h(c, C, M.value, E);
      if (k === null) {
        C === null && (C = U);
        break;
      }
      e && C && k.alternate === null && t(c, C), d = i(k, d, I), R === null ? P = k : R.sibling = k, R = k, C = U;
    }
    if (M.done) return n(
      c,
      C
    ), re && Ft(c, I), P;
    if (C === null) {
      for (; !M.done; I++, M = p.next()) M = x(c, M.value, E), M !== null && (d = i(M, d, I), R === null ? P = M : R.sibling = M, R = M);
      return re && Ft(c, I), P;
    }
    for (C = r(c, C); !M.done; I++, M = p.next()) M = v(C, c, I, M.value, E), M !== null && (e && M.alternate !== null && C.delete(M.key === null ? I : M.key), d = i(M, d, I), R === null ? P = M : R.sibling = M, R = M);
    return e && C.forEach(function(S) {
      return t(c, S);
    }), re && Ft(c, I), P;
  }
  function j(c, d, p, E) {
    if (typeof p == "object" && p !== null && p.type === tn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Sr:
          e: {
            for (var P = p.key, R = d; R !== null; ) {
              if (R.key === P) {
                if (P = p.type, P === tn) {
                  if (R.tag === 7) {
                    n(c, R.sibling), d = l(R, p.props.children), d.return = c, c = d;
                    break e;
                  }
                } else if (R.elementType === P || typeof P == "object" && P !== null && P.$$typeof === wt && Hs(P) === R.type) {
                  n(c, R.sibling), d = l(R, p.props), d.ref = bn(c, R, p), d.return = c, c = d;
                  break e;
                }
                n(c, R);
                break;
              } else t(c, R);
              R = R.sibling;
            }
            p.type === tn ? (d = Wt(p.props.children, c.mode, E, p.key), d.return = c, c = d) : (E = Xr(p.type, p.key, p.props, null, c.mode, E), E.ref = bn(c, d, p), E.return = c, c = E);
          }
          return a(c);
        case en:
          e: {
            for (R = p.key; d !== null; ) {
              if (d.key === R) if (d.tag === 4 && d.stateNode.containerInfo === p.containerInfo && d.stateNode.implementation === p.implementation) {
                n(c, d.sibling), d = l(d, p.children || []), d.return = c, c = d;
                break e;
              } else {
                n(c, d);
                break;
              }
              else t(c, d);
              d = d.sibling;
            }
            d = fi(p, c.mode, E), d.return = c, c = d;
          }
          return a(c);
        case wt:
          return R = p._init, j(c, d, R(p._payload), E);
      }
      if ($n(p)) return g(c, d, p, E);
      if (Ln(p)) return _(c, d, p, E);
      Dr(c, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, d !== null && d.tag === 6 ? (n(c, d.sibling), d = l(d, p), d.return = c, c = d) : (n(c, d), d = di(p, c.mode, E), d.return = c, c = d), a(c)) : n(c, d);
  }
  return j;
}
var Sn = Du(!0), zu = Du(!1), dl = bt(null), fl = null, cn = null, La = null;
function Pa() {
  La = cn = fl = null;
}
function Da(e) {
  var t = dl.current;
  ne(dl), e._currentValue = t;
}
function Ui(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function yn(e, t) {
  fl = e, La = cn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ie = !0), e.firstContext = null);
}
function Qe(e) {
  var t = e._currentValue;
  if (La !== e) if (e = { context: e, memoizedValue: t, next: null }, cn === null) {
    if (fl === null) throw Error(L(308));
    cn = e, fl.dependencies = { lanes: 0, firstContext: e };
  } else cn = cn.next = e;
  return t;
}
var Vt = null;
function za(e) {
  Vt === null ? Vt = [e] : Vt.push(e);
}
function Ru(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, za(t)) : (n.next = l.next, l.next = n), t.interleaved = n, ht(e, r);
}
function ht(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var xt = !1;
function Ra(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function bu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function ft(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Tt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, X & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, ht(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, za(r)) : (t.next = l.next, l.next = t), r.interleaved = t, ht(e, n);
}
function Wr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, xa(e, n);
  }
}
function Bs(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? l = i = a : i = i.next = a, n = n.next;
      } while (n !== null);
      i === null ? l = i = t : i = i.next = t;
    } else l = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function pl(e, t, n, r) {
  var l = e.updateQueue;
  xt = !1;
  var i = l.firstBaseUpdate, a = l.lastBaseUpdate, o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var u = o, f = u.next;
    u.next = null, a === null ? i = f : a.next = f, a = u;
    var w = e.alternate;
    w !== null && (w = w.updateQueue, o = w.lastBaseUpdate, o !== a && (o === null ? w.firstBaseUpdate = f : o.next = f, w.lastBaseUpdate = u));
  }
  if (i !== null) {
    var x = l.baseState;
    a = 0, w = f = u = null, o = i;
    do {
      var h = o.lane, v = o.eventTime;
      if ((r & h) === h) {
        w !== null && (w = w.next = {
          eventTime: v,
          lane: 0,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null
        });
        e: {
          var g = e, _ = o;
          switch (h = t, v = n, _.tag) {
            case 1:
              if (g = _.payload, typeof g == "function") {
                x = g.call(v, x, h);
                break e;
              }
              x = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = _.payload, h = typeof g == "function" ? g.call(v, x, h) : g, h == null) break e;
              x = ae({}, x, h);
              break e;
            case 2:
              xt = !0;
          }
        }
        o.callback !== null && o.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [o] : h.push(o));
      } else v = { eventTime: v, lane: h, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, w === null ? (f = w = v, u = x) : w = w.next = v, a |= h;
      if (o = o.next, o === null) {
        if (o = l.shared.pending, o === null) break;
        h = o, o = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
      }
    } while (!0);
    if (w === null && (u = x), l.baseState = u, l.firstBaseUpdate = f, l.lastBaseUpdate = w, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        a |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    Kt |= a, e.lanes = a, e.memoizedState = x;
  }
}
function Gs(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(L(191, l));
      l.call(r);
    }
  }
}
var xr = {}, st = bt(xr), cr = bt(xr), dr = bt(xr);
function Ut(e) {
  if (e === xr) throw Error(L(174));
  return e;
}
function ba(e, t) {
  switch (ee(dr, t), ee(cr, e), ee(st, xr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Si(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Si(t, e);
  }
  ne(st), ee(st, t);
}
function kn() {
  ne(st), ne(cr), ne(dr);
}
function Ou(e) {
  Ut(dr.current);
  var t = Ut(st.current), n = Si(t, e.type);
  t !== n && (ee(cr, e), ee(st, n));
}
function Oa(e) {
  cr.current === e && (ne(st), ne(cr));
}
var le = bt(0);
function ml(e) {
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
var ii = [];
function Fa() {
  for (var e = 0; e < ii.length; e++) ii[e]._workInProgressVersionPrimary = null;
  ii.length = 0;
}
var Hr = yt.ReactCurrentDispatcher, ai = yt.ReactCurrentBatchConfig, Gt = 0, ie = null, ce = null, fe = null, hl = !1, Kn = !1, fr = 0, Uf = 0;
function ye() {
  throw Error(L(321));
}
function Aa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!qe(e[n], t[n])) return !1;
  return !0;
}
function $a(e, t, n, r, l, i) {
  if (Gt = i, ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Hr.current = e === null || e.memoizedState === null ? Bf : Gf, e = n(r, l), Kn) {
    i = 0;
    do {
      if (Kn = !1, fr = 0, 25 <= i) throw Error(L(301));
      i += 1, fe = ce = null, t.updateQueue = null, Hr.current = Kf, e = n(r, l);
    } while (Kn);
  }
  if (Hr.current = gl, t = ce !== null && ce.next !== null, Gt = 0, fe = ce = ie = null, hl = !1, t) throw Error(L(300));
  return e;
}
function Va() {
  var e = fr !== 0;
  return fr = 0, e;
}
function lt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return fe === null ? ie.memoizedState = fe = e : fe = fe.next = e, fe;
}
function We() {
  if (ce === null) {
    var e = ie.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ce.next;
  var t = fe === null ? ie.memoizedState : fe.next;
  if (t !== null) fe = t, ce = e;
  else {
    if (e === null) throw Error(L(310));
    ce = e, e = { memoizedState: ce.memoizedState, baseState: ce.baseState, baseQueue: ce.baseQueue, queue: ce.queue, next: null }, fe === null ? ie.memoizedState = fe = e : fe = fe.next = e;
  }
  return fe;
}
function pr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function si(e) {
  var t = We(), n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = ce, l = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var a = l.next;
      l.next = i.next, i.next = a;
    }
    r.baseQueue = l = i, n.pending = null;
  }
  if (l !== null) {
    i = l.next, r = r.baseState;
    var o = a = null, u = null, f = i;
    do {
      var w = f.lane;
      if ((Gt & w) === w) u !== null && (u = u.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
      else {
        var x = {
          lane: w,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null
        };
        u === null ? (o = u = x, a = r) : u = u.next = x, ie.lanes |= w, Kt |= w;
      }
      f = f.next;
    } while (f !== null && f !== i);
    u === null ? a = r : u.next = o, qe(r, t.memoizedState) || (Ie = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, ie.lanes |= i, Kt |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function oi(e) {
  var t = We(), n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var a = l = l.next;
    do
      i = e(i, a.action), a = a.next;
    while (a !== l);
    qe(i, t.memoizedState) || (Ie = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Fu() {
}
function Au(e, t) {
  var n = ie, r = We(), l = t(), i = !qe(r.memoizedState, l);
  if (i && (r.memoizedState = l, Ie = !0), r = r.queue, Ua(Uu.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || fe !== null && fe.memoizedState.tag & 1) {
    if (n.flags |= 2048, mr(9, Vu.bind(null, n, r, l, t), void 0, null), pe === null) throw Error(L(349));
    Gt & 30 || $u(n, t, l);
  }
  return l;
}
function $u(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ie.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Vu(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Qu(t) && Wu(e);
}
function Uu(e, t, n) {
  return n(function() {
    Qu(t) && Wu(e);
  });
}
function Qu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !qe(e, n);
  } catch {
    return !0;
  }
}
function Wu(e) {
  var t = ht(e, 1);
  t !== null && Je(t, e, 1, -1);
}
function Ks(e) {
  var t = lt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: pr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Hf.bind(null, ie, e), [t.memoizedState, e];
}
function mr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ie.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Hu() {
  return We().memoizedState;
}
function Br(e, t, n, r) {
  var l = lt();
  ie.flags |= e, l.memoizedState = mr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Tl(e, t, n, r) {
  var l = We();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ce !== null) {
    var a = ce.memoizedState;
    if (i = a.destroy, r !== null && Aa(r, a.deps)) {
      l.memoizedState = mr(t, n, i, r);
      return;
    }
  }
  ie.flags |= e, l.memoizedState = mr(1 | t, n, i, r);
}
function Ys(e, t) {
  return Br(8390656, 8, e, t);
}
function Ua(e, t) {
  return Tl(2048, 8, e, t);
}
function Bu(e, t) {
  return Tl(4, 2, e, t);
}
function Gu(e, t) {
  return Tl(4, 4, e, t);
}
function Ku(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Yu(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Tl(4, 4, Ku.bind(null, t, e), n);
}
function Qa() {
}
function Xu(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Aa(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Zu(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Aa(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ju(e, t, n) {
  return Gt & 21 ? (qe(n, t) || (n = ru(), ie.lanes |= n, Kt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ie = !0), e.memoizedState = n);
}
function Qf(e, t) {
  var n = J;
  J = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ai.transition;
  ai.transition = {};
  try {
    e(!1), t();
  } finally {
    J = n, ai.transition = r;
  }
}
function qu() {
  return We().memoizedState;
}
function Wf(e, t, n) {
  var r = Lt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ec(e)) tc(t, n);
  else if (n = Ru(e, t, n, r), n !== null) {
    var l = ke();
    Je(n, e, r, l), nc(n, t, r);
  }
}
function Hf(e, t, n) {
  var r = Lt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ec(e)) tc(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var a = t.lastRenderedState, o = i(a, n);
      if (l.hasEagerState = !0, l.eagerState = o, qe(o, a)) {
        var u = t.interleaved;
        u === null ? (l.next = l, za(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Ru(e, t, l, r), n !== null && (l = ke(), Je(n, e, r, l), nc(n, t, r));
  }
}
function ec(e) {
  var t = e.alternate;
  return e === ie || t !== null && t === ie;
}
function tc(e, t) {
  Kn = hl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function nc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, xa(e, n);
  }
}
var gl = { readContext: Qe, useCallback: ye, useContext: ye, useEffect: ye, useImperativeHandle: ye, useInsertionEffect: ye, useLayoutEffect: ye, useMemo: ye, useReducer: ye, useRef: ye, useState: ye, useDebugValue: ye, useDeferredValue: ye, useTransition: ye, useMutableSource: ye, useSyncExternalStore: ye, useId: ye, unstable_isNewReconciler: !1 }, Bf = { readContext: Qe, useCallback: function(e, t) {
  return lt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Qe, useEffect: Ys, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Br(
    4194308,
    4,
    Ku.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Br(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Br(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = lt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = lt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Wf.bind(null, ie, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = lt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ks, useDebugValue: Qa, useDeferredValue: function(e) {
  return lt().memoizedState = e;
}, useTransition: function() {
  var e = Ks(!1), t = e[0];
  return e = Qf.bind(null, e[1]), lt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ie, l = lt();
  if (re) {
    if (n === void 0) throw Error(L(407));
    n = n();
  } else {
    if (n = t(), pe === null) throw Error(L(349));
    Gt & 30 || $u(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, Ys(Uu.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, mr(9, Vu.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = lt(), t = pe.identifierPrefix;
  if (re) {
    var n = dt, r = ct;
    n = (r & ~(1 << 32 - Ze(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = fr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Uf++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Gf = {
  readContext: Qe,
  useCallback: Xu,
  useContext: Qe,
  useEffect: Ua,
  useImperativeHandle: Yu,
  useInsertionEffect: Bu,
  useLayoutEffect: Gu,
  useMemo: Zu,
  useReducer: si,
  useRef: Hu,
  useState: function() {
    return si(pr);
  },
  useDebugValue: Qa,
  useDeferredValue: function(e) {
    var t = We();
    return Ju(t, ce.memoizedState, e);
  },
  useTransition: function() {
    var e = si(pr)[0], t = We().memoizedState;
    return [e, t];
  },
  useMutableSource: Fu,
  useSyncExternalStore: Au,
  useId: qu,
  unstable_isNewReconciler: !1
}, Kf = { readContext: Qe, useCallback: Xu, useContext: Qe, useEffect: Ua, useImperativeHandle: Yu, useInsertionEffect: Bu, useLayoutEffect: Gu, useMemo: Zu, useReducer: oi, useRef: Hu, useState: function() {
  return oi(pr);
}, useDebugValue: Qa, useDeferredValue: function(e) {
  var t = We();
  return ce === null ? t.memoizedState = e : Ju(t, ce.memoizedState, e);
}, useTransition: function() {
  var e = oi(pr)[0], t = We().memoizedState;
  return [e, t];
}, useMutableSource: Fu, useSyncExternalStore: Au, useId: qu, unstable_isNewReconciler: !1 };
function Ge(e, t) {
  if (e && e.defaultProps) {
    t = ae({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Qi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ae({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ml = { isMounted: function(e) {
  return (e = e._reactInternals) ? Zt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ke(), l = Lt(e), i = ft(r, l);
  i.payload = t, n != null && (i.callback = n), t = Tt(e, i, l), t !== null && (Je(t, e, l, r), Wr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ke(), l = Lt(e), i = ft(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Tt(e, i, l), t !== null && (Je(t, e, l, r), Wr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ke(), r = Lt(e), l = ft(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Tt(e, l, r), t !== null && (Je(t, e, r, n), Wr(t, e, r));
} };
function Xs(e, t, n, r, l, i, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, a) : t.prototype && t.prototype.isPureReactComponent ? !ar(n, r) || !ar(l, i) : !0;
}
function rc(e, t, n) {
  var r = !1, l = zt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Qe(i) : (l = Me(t) ? Ht : xe.current, r = t.contextTypes, i = (r = r != null) ? xn(e, l) : zt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ml, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Zs(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ml.enqueueReplaceState(t, t.state, null);
}
function Wi(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Ra(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = Qe(i) : (i = Me(t) ? Ht : xe.current, l.context = xn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Qi(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ml.enqueueReplaceState(l, l.state, null), pl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function En(e, t) {
  try {
    var n = "", r = t;
    do
      n += _d(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ui(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Hi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Yf = typeof WeakMap == "function" ? WeakMap : Map;
function lc(e, t, n) {
  n = ft(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    vl || (vl = !0, ta = r), Hi(e, t);
  }, n;
}
function ic(e, t, n) {
  n = ft(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Hi(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Hi(e, t), typeof r != "function" && (Mt === null ? Mt = /* @__PURE__ */ new Set([this]) : Mt.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function Js(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Yf();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = up.bind(null, e, t, n), t.then(e, e));
}
function qs(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function eo(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ft(-1, 1), t.tag = 2, Tt(n, t, 1))), n.lanes |= 1), e);
}
var Xf = yt.ReactCurrentOwner, Ie = !1;
function _e(e, t, n, r) {
  t.child = e === null ? zu(t, null, n, r) : Sn(t, e.child, n, r);
}
function to(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return yn(t, l), r = $a(e, t, n, r, i, l), n = Va(), e !== null && !Ie ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, gt(e, t, l)) : (re && n && Ia(t), t.flags |= 1, _e(e, t, r, l), t.child);
}
function no(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Za(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, ac(e, t, i, r, l)) : (e = Xr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var a = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : ar, n(a, r) && e.ref === t.ref) return gt(e, t, l);
  }
  return t.flags |= 1, e = Pt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function ac(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ar(i, r) && e.ref === t.ref) if (Ie = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (Ie = !0);
    else return t.lanes = e.lanes, gt(e, t, l);
  }
  return Bi(e, t, n, r, l);
}
function sc(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ee(fn, Pe), Pe |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ee(fn, Pe), Pe |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, ee(fn, Pe), Pe |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ee(fn, Pe), Pe |= r;
  return _e(e, t, l, n), t.child;
}
function oc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Bi(e, t, n, r, l) {
  var i = Me(n) ? Ht : xe.current;
  return i = xn(t, i), yn(t, l), n = $a(e, t, n, r, i, l), r = Va(), e !== null && !Ie ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, gt(e, t, l)) : (re && r && Ia(t), t.flags |= 1, _e(e, t, n, l), t.child);
}
function ro(e, t, n, r, l) {
  if (Me(n)) {
    var i = !0;
    ol(t);
  } else i = !1;
  if (yn(t, l), t.stateNode === null) Gr(e, t), rc(t, n, r), Wi(t, n, r, l), r = !0;
  else if (e === null) {
    var a = t.stateNode, o = t.memoizedProps;
    a.props = o;
    var u = a.context, f = n.contextType;
    typeof f == "object" && f !== null ? f = Qe(f) : (f = Me(n) ? Ht : xe.current, f = xn(t, f));
    var w = n.getDerivedStateFromProps, x = typeof w == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    x || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== r || u !== f) && Zs(t, a, r, f), xt = !1;
    var h = t.memoizedState;
    a.state = h, pl(t, r, a, l), u = t.memoizedState, o !== r || h !== u || Te.current || xt ? (typeof w == "function" && (Qi(t, n, w, r), u = t.memoizedState), (o = xt || Xs(t, n, o, r, h, u, f)) ? (x || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), a.props = r, a.state = u, a.context = f, r = o) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, bu(e, t), o = t.memoizedProps, f = t.type === t.elementType ? o : Ge(t.type, o), a.props = f, x = t.pendingProps, h = a.context, u = n.contextType, typeof u == "object" && u !== null ? u = Qe(u) : (u = Me(n) ? Ht : xe.current, u = xn(t, u));
    var v = n.getDerivedStateFromProps;
    (w = typeof v == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== x || h !== u) && Zs(t, a, r, u), xt = !1, h = t.memoizedState, a.state = h, pl(t, r, a, l);
    var g = t.memoizedState;
    o !== x || h !== g || Te.current || xt ? (typeof v == "function" && (Qi(t, n, v, r), g = t.memoizedState), (f = xt || Xs(t, n, f, r, h, g, u) || !1) ? (w || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, g, u), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, g, u)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), a.props = r, a.state = g, a.context = u, r = f) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Gi(e, t, n, r, i, l);
}
function Gi(e, t, n, r, l, i) {
  oc(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return l && Us(t, n, !1), gt(e, t, i);
  r = t.stateNode, Xf.current = t;
  var o = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = Sn(t, e.child, null, i), t.child = Sn(t, null, o, i)) : _e(e, t, o, i), t.memoizedState = r.state, l && Us(t, n, !0), t.child;
}
function uc(e) {
  var t = e.stateNode;
  t.pendingContext ? Vs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Vs(e, t.context, !1), ba(e, t.containerInfo);
}
function lo(e, t, n, r, l) {
  return _n(), Ma(l), t.flags |= 256, _e(e, t, n, r), t.child;
}
var Ki = { dehydrated: null, treeContext: null, retryLane: 0 };
function Yi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function cc(e, t, n) {
  var r = t.pendingProps, l = le.current, i = !1, a = (t.flags & 128) !== 0, o;
  if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), ee(le, l & 1), e === null)
    return Vi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, a = { mode: "hidden", children: a }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = Dl(a, r, 0, null), e = Wt(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Yi(n), t.memoizedState = Ki, e) : Wa(t, a));
  if (l = e.memoizedState, l !== null && (o = l.dehydrated, o !== null)) return Zf(e, t, a, r, o, l, n);
  if (i) {
    i = r.fallback, a = t.mode, l = e.child, o = l.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Pt(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), o !== null ? i = Pt(o, i) : (i = Wt(i, a, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, a = e.child.memoizedState, a = a === null ? Yi(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, i.memoizedState = a, i.childLanes = e.childLanes & ~n, t.memoizedState = Ki, r;
  }
  return i = e.child, e = i.sibling, r = Pt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Wa(e, t) {
  return t = Dl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function zr(e, t, n, r) {
  return r !== null && Ma(r), Sn(t, e.child, null, n), e = Wa(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Zf(e, t, n, r, l, i, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ui(Error(L(422))), zr(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Dl({ mode: "visible", children: r.children }, l, 0, null), i = Wt(i, l, a, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Sn(t, e.child, null, a), t.child.memoizedState = Yi(a), t.memoizedState = Ki, i);
  if (!(t.mode & 1)) return zr(e, t, a, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var o = r.dgst;
    return r = o, i = Error(L(419)), r = ui(i, r, void 0), zr(e, t, a, r);
  }
  if (o = (a & e.childLanes) !== 0, Ie || o) {
    if (r = pe, r !== null) {
      switch (a & -a) {
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
      l = l & (r.suspendedLanes | a) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, ht(e, l), Je(r, e, l, -1));
    }
    return Xa(), r = ui(Error(L(421))), zr(e, t, a, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = cp.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, ze = It(l.nextSibling), Re = t, re = !0, Ye = null, e !== null && (Ae[$e++] = ct, Ae[$e++] = dt, Ae[$e++] = Bt, ct = e.id, dt = e.overflow, Bt = t), t = Wa(t, r.children), t.flags |= 4096, t);
}
function io(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ui(e.return, t, n);
}
function ci(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function dc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (_e(e, t, r.children, n), r = le.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && io(e, n, t);
      else if (e.tag === 19) io(e, n, t);
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
  if (ee(le, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && ml(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ci(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && ml(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      ci(t, !0, n, null, i);
      break;
    case "together":
      ci(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Gr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function gt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Kt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (e = t.child, n = Pt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Pt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Jf(e, t, n) {
  switch (t.tag) {
    case 3:
      uc(t), _n();
      break;
    case 5:
      Ou(t);
      break;
    case 1:
      Me(t.type) && ol(t);
      break;
    case 4:
      ba(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      ee(dl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ee(le, le.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? cc(e, t, n) : (ee(le, le.current & 1), e = gt(e, t, n), e !== null ? e.sibling : null);
      ee(le, le.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return dc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ee(le, le.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, sc(e, t, n);
  }
  return gt(e, t, n);
}
var fc, Xi, pc, mc;
fc = function(e, t) {
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
Xi = function() {
};
pc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Ut(st.current);
    var i = null;
    switch (n) {
      case "input":
        l = vi(e, l), r = vi(e, r), i = [];
        break;
      case "select":
        l = ae({}, l, { value: void 0 }), r = ae({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = _i(e, l), r = _i(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = al);
    }
    ki(n, r);
    var a;
    n = null;
    for (f in l) if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null) if (f === "style") {
      var o = l[f];
      for (a in o) o.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
    } else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (qn.hasOwnProperty(f) ? i || (i = []) : (i = i || []).push(f, null));
    for (f in r) {
      var u = r[f];
      if (o = l != null ? l[f] : void 0, r.hasOwnProperty(f) && u !== o && (u != null || o != null)) if (f === "style") if (o) {
        for (a in o) !o.hasOwnProperty(a) || u && u.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
        for (a in u) u.hasOwnProperty(a) && o[a] !== u[a] && (n || (n = {}), n[a] = u[a]);
      } else n || (i || (i = []), i.push(
        f,
        n
      )), n = u;
      else f === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, o = o ? o.__html : void 0, u != null && o !== u && (i = i || []).push(f, u)) : f === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(f, "" + u) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (qn.hasOwnProperty(f) ? (u != null && f === "onScroll" && te("scroll", e), i || o === u || (i = [])) : (i = i || []).push(f, u));
    }
    n && (i = i || []).push("style", n);
    var f = i;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
mc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function On(e, t) {
  if (!re) switch (e.tailMode) {
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
function ve(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function qf(e, t, n) {
  var r = t.pendingProps;
  switch (Ta(t), t.tag) {
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
      return ve(t), null;
    case 1:
      return Me(t.type) && sl(), ve(t), null;
    case 3:
      return r = t.stateNode, kn(), ne(Te), ne(xe), Fa(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Pr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ye !== null && (la(Ye), Ye = null))), Xi(e, t), ve(t), null;
    case 5:
      Oa(t);
      var l = Ut(dr.current);
      if (n = t.type, e !== null && t.stateNode != null) pc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return ve(t), null;
        }
        if (e = Ut(st.current), Pr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[it] = t, r[ur] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              te("cancel", r), te("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              te("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Un.length; l++) te(Un[l], r);
              break;
            case "source":
              te("error", r);
              break;
            case "img":
            case "image":
            case "link":
              te(
                "error",
                r
              ), te("load", r);
              break;
            case "details":
              te("toggle", r);
              break;
            case "input":
              ms(r, i), te("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, te("invalid", r);
              break;
            case "textarea":
              gs(r, i), te("invalid", r);
          }
          ki(n, i), l = null;
          for (var a in i) if (i.hasOwnProperty(a)) {
            var o = i[a];
            a === "children" ? typeof o == "string" ? r.textContent !== o && (i.suppressHydrationWarning !== !0 && Lr(r.textContent, o, e), l = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (i.suppressHydrationWarning !== !0 && Lr(
              r.textContent,
              o,
              e
            ), l = ["children", "" + o]) : qn.hasOwnProperty(a) && o != null && a === "onScroll" && te("scroll", r);
          }
          switch (n) {
            case "input":
              kr(r), hs(r, i, !0);
              break;
            case "textarea":
              kr(r), ys(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = al);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          a = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Uo(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[it] = t, e[ur] = r, fc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = Ei(n, r), n) {
              case "dialog":
                te("cancel", e), te("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                te("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Un.length; l++) te(Un[l], e);
                l = r;
                break;
              case "source":
                te("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                te(
                  "error",
                  e
                ), te("load", e), l = r;
                break;
              case "details":
                te("toggle", e), l = r;
                break;
              case "input":
                ms(e, r), l = vi(e, r), te("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = ae({}, r, { value: void 0 }), te("invalid", e);
                break;
              case "textarea":
                gs(e, r), l = _i(e, r), te("invalid", e);
                break;
              default:
                l = r;
            }
            ki(n, l), o = l;
            for (i in o) if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "style" ? Ho(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Qo(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && er(e, u) : typeof u == "number" && er(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (qn.hasOwnProperty(i) ? u != null && i === "onScroll" && te("scroll", e) : u != null && ma(e, i, u, a));
            }
            switch (n) {
              case "input":
                kr(e), hs(e, r, !1);
                break;
              case "textarea":
                kr(e), ys(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Dt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? pn(e, !!r.multiple, i, !1) : r.defaultValue != null && pn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = al);
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
      return ve(t), null;
    case 6:
      if (e && t.stateNode != null) mc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (n = Ut(dr.current), Ut(st.current), Pr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[it] = t, (i = r.nodeValue !== n) && (e = Re, e !== null)) switch (e.tag) {
            case 3:
              Lr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Lr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[it] = t, t.stateNode = r;
      }
      return ve(t), null;
    case 13:
      if (ne(le), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (re && ze !== null && t.mode & 1 && !(t.flags & 128)) Pu(), _n(), t.flags |= 98560, i = !1;
        else if (i = Pr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(L(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(L(317));
            i[it] = t;
          } else _n(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ve(t), i = !1;
        } else Ye !== null && (la(Ye), Ye = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || le.current & 1 ? de === 0 && (de = 3) : Xa())), t.updateQueue !== null && (t.flags |= 4), ve(t), null);
    case 4:
      return kn(), Xi(e, t), e === null && sr(t.stateNode.containerInfo), ve(t), null;
    case 10:
      return Da(t.type._context), ve(t), null;
    case 17:
      return Me(t.type) && sl(), ve(t), null;
    case 19:
      if (ne(le), i = t.memoizedState, i === null) return ve(t), null;
      if (r = (t.flags & 128) !== 0, a = i.rendering, a === null) if (r) On(i, !1);
      else {
        if (de !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (a = ml(e), a !== null) {
            for (t.flags |= 128, On(i, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ee(le, le.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && oe() > Cn && (t.flags |= 128, r = !0, On(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ml(a), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), On(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !re) return ve(t), null;
        } else 2 * oe() - i.renderingStartTime > Cn && n !== 1073741824 && (t.flags |= 128, r = !0, On(i, !1), t.lanes = 4194304);
        i.isBackwards ? (a.sibling = t.child, t.child = a) : (n = i.last, n !== null ? n.sibling = a : t.child = a, i.last = a);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = oe(), t.sibling = null, n = le.current, ee(le, r ? n & 1 | 2 : n & 1), t) : (ve(t), null);
    case 22:
    case 23:
      return Ya(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Pe & 1073741824 && (ve(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ve(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function ep(e, t) {
  switch (Ta(t), t.tag) {
    case 1:
      return Me(t.type) && sl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return kn(), ne(Te), ne(xe), Fa(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Oa(t), null;
    case 13:
      if (ne(le), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(L(340));
        _n();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ne(le), null;
    case 4:
      return kn(), null;
    case 10:
      return Da(t.type._context), null;
    case 22:
    case 23:
      return Ya(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Rr = !1, we = !1, tp = typeof WeakSet == "function" ? WeakSet : Set, O = null;
function dn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    se(e, t, r);
  }
  else n.current = null;
}
function Zi(e, t, n) {
  try {
    n();
  } catch (r) {
    se(e, t, r);
  }
}
var ao = !1;
function np(e, t) {
  if (zi = rl, e = wu(), ja(e)) {
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
        var a = 0, o = -1, u = -1, f = 0, w = 0, x = e, h = null;
        t: for (; ; ) {
          for (var v; x !== n || l !== 0 && x.nodeType !== 3 || (o = a + l), x !== i || r !== 0 && x.nodeType !== 3 || (u = a + r), x.nodeType === 3 && (a += x.nodeValue.length), (v = x.firstChild) !== null; )
            h = x, x = v;
          for (; ; ) {
            if (x === e) break t;
            if (h === n && ++f === l && (o = a), h === i && ++w === r && (u = a), (v = x.nextSibling) !== null) break;
            x = h, h = x.parentNode;
          }
          x = v;
        }
        n = o === -1 || u === -1 ? null : { start: o, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ri = { focusedElem: e, selectionRange: n }, rl = !1, O = t; O !== null; ) if (t = O, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, O = e;
  else for (; O !== null; ) {
    t = O;
    try {
      var g = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (g !== null) {
            var _ = g.memoizedProps, j = g.memoizedState, c = t.stateNode, d = c.getSnapshotBeforeUpdate(t.elementType === t.type ? _ : Ge(t.type, _), j);
            c.__reactInternalSnapshotBeforeUpdate = d;
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
    } catch (E) {
      se(t, t.return, E);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, O = e;
      break;
    }
    O = t.return;
  }
  return g = ao, ao = !1, g;
}
function Yn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && Zi(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ll(e, t) {
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
function Ji(e) {
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
function hc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, hc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[it], delete t[ur], delete t[Fi], delete t[Ff], delete t[Af])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function gc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function so(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || gc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function qi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = al));
  else if (r !== 4 && (e = e.child, e !== null)) for (qi(e, t, n), e = e.sibling; e !== null; ) qi(e, t, n), e = e.sibling;
}
function ea(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (ea(e, t, n), e = e.sibling; e !== null; ) ea(e, t, n), e = e.sibling;
}
var me = null, Ke = !1;
function vt(e, t, n) {
  for (n = n.child; n !== null; ) yc(e, t, n), n = n.sibling;
}
function yc(e, t, n) {
  if (at && typeof at.onCommitFiberUnmount == "function") try {
    at.onCommitFiberUnmount(kl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      we || dn(n, t);
    case 6:
      var r = me, l = Ke;
      me = null, vt(e, t, n), me = r, Ke = l, me !== null && (Ke ? (e = me, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : me.removeChild(n.stateNode));
      break;
    case 18:
      me !== null && (Ke ? (e = me, n = n.stateNode, e.nodeType === 8 ? ri(e.parentNode, n) : e.nodeType === 1 && ri(e, n), lr(e)) : ri(me, n.stateNode));
      break;
    case 4:
      r = me, l = Ke, me = n.stateNode.containerInfo, Ke = !0, vt(e, t, n), me = r, Ke = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!we && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, a = i.destroy;
          i = i.tag, a !== void 0 && (i & 2 || i & 4) && Zi(n, t, a), l = l.next;
        } while (l !== r);
      }
      vt(e, t, n);
      break;
    case 1:
      if (!we && (dn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (o) {
        se(n, t, o);
      }
      vt(e, t, n);
      break;
    case 21:
      vt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (we = (r = we) || n.memoizedState !== null, vt(e, t, n), we = r) : vt(e, t, n);
      break;
    default:
      vt(e, t, n);
  }
}
function oo(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new tp()), t.forEach(function(r) {
      var l = dp.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function He(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var i = e, a = t, o = a;
      e: for (; o !== null; ) {
        switch (o.tag) {
          case 5:
            me = o.stateNode, Ke = !1;
            break e;
          case 3:
            me = o.stateNode.containerInfo, Ke = !0;
            break e;
          case 4:
            me = o.stateNode.containerInfo, Ke = !0;
            break e;
        }
        o = o.return;
      }
      if (me === null) throw Error(L(160));
      yc(i, a, l), me = null, Ke = !1;
      var u = l.alternate;
      u !== null && (u.return = null), l.return = null;
    } catch (f) {
      se(l, t, f);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) vc(t, e), t = t.sibling;
}
function vc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (He(t, e), rt(e), r & 4) {
        try {
          Yn(3, e, e.return), Ll(3, e);
        } catch (_) {
          se(e, e.return, _);
        }
        try {
          Yn(5, e, e.return);
        } catch (_) {
          se(e, e.return, _);
        }
      }
      break;
    case 1:
      He(t, e), rt(e), r & 512 && n !== null && dn(n, n.return);
      break;
    case 5:
      if (He(t, e), rt(e), r & 512 && n !== null && dn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          er(l, "");
        } catch (_) {
          se(e, e.return, _);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, a = n !== null ? n.memoizedProps : i, o = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          o === "input" && i.type === "radio" && i.name != null && $o(l, i), Ei(o, a);
          var f = Ei(o, i);
          for (a = 0; a < u.length; a += 2) {
            var w = u[a], x = u[a + 1];
            w === "style" ? Ho(l, x) : w === "dangerouslySetInnerHTML" ? Qo(l, x) : w === "children" ? er(l, x) : ma(l, w, x, f);
          }
          switch (o) {
            case "input":
              wi(l, i);
              break;
            case "textarea":
              Vo(l, i);
              break;
            case "select":
              var h = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var v = i.value;
              v != null ? pn(l, !!i.multiple, v, !1) : h !== !!i.multiple && (i.defaultValue != null ? pn(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : pn(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[ur] = i;
        } catch (_) {
          se(e, e.return, _);
        }
      }
      break;
    case 6:
      if (He(t, e), rt(e), r & 4) {
        if (e.stateNode === null) throw Error(L(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (_) {
          se(e, e.return, _);
        }
      }
      break;
    case 3:
      if (He(t, e), rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        lr(t.containerInfo);
      } catch (_) {
        se(e, e.return, _);
      }
      break;
    case 4:
      He(t, e), rt(e);
      break;
    case 13:
      He(t, e), rt(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Ga = oe())), r & 4 && oo(e);
      break;
    case 22:
      if (w = n !== null && n.memoizedState !== null, e.mode & 1 ? (we = (f = we) || w, He(t, e), we = f) : He(t, e), rt(e), r & 8192) {
        if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !w && e.mode & 1) for (O = e, w = e.child; w !== null; ) {
          for (x = O = w; O !== null; ) {
            switch (h = O, v = h.child, h.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Yn(4, h, h.return);
                break;
              case 1:
                dn(h, h.return);
                var g = h.stateNode;
                if (typeof g.componentWillUnmount == "function") {
                  r = h, n = h.return;
                  try {
                    t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                  } catch (_) {
                    se(r, n, _);
                  }
                }
                break;
              case 5:
                dn(h, h.return);
                break;
              case 22:
                if (h.memoizedState !== null) {
                  co(x);
                  continue;
                }
            }
            v !== null ? (v.return = h, O = v) : co(x);
          }
          w = w.sibling;
        }
        e: for (w = null, x = e; ; ) {
          if (x.tag === 5) {
            if (w === null) {
              w = x;
              try {
                l = x.stateNode, f ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (o = x.stateNode, u = x.memoizedProps.style, a = u != null && u.hasOwnProperty("display") ? u.display : null, o.style.display = Wo("display", a));
              } catch (_) {
                se(e, e.return, _);
              }
            }
          } else if (x.tag === 6) {
            if (w === null) try {
              x.stateNode.nodeValue = f ? "" : x.memoizedProps;
            } catch (_) {
              se(e, e.return, _);
            }
          } else if ((x.tag !== 22 && x.tag !== 23 || x.memoizedState === null || x === e) && x.child !== null) {
            x.child.return = x, x = x.child;
            continue;
          }
          if (x === e) break e;
          for (; x.sibling === null; ) {
            if (x.return === null || x.return === e) break e;
            w === x && (w = null), x = x.return;
          }
          w === x && (w = null), x.sibling.return = x.return, x = x.sibling;
        }
      }
      break;
    case 19:
      He(t, e), rt(e), r & 4 && oo(e);
      break;
    case 21:
      break;
    default:
      He(
        t,
        e
      ), rt(e);
  }
}
function rt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (gc(n)) {
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
          r.flags & 32 && (er(l, ""), r.flags &= -33);
          var i = so(e);
          ea(e, i, l);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, o = so(e);
          qi(e, o, a);
          break;
        default:
          throw Error(L(161));
      }
    } catch (u) {
      se(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function rp(e, t, n) {
  O = e, wc(e);
}
function wc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var l = O, i = l.child;
    if (l.tag === 22 && r) {
      var a = l.memoizedState !== null || Rr;
      if (!a) {
        var o = l.alternate, u = o !== null && o.memoizedState !== null || we;
        o = Rr;
        var f = we;
        if (Rr = a, (we = u) && !f) for (O = l; O !== null; ) a = O, u = a.child, a.tag === 22 && a.memoizedState !== null ? fo(l) : u !== null ? (u.return = a, O = u) : fo(l);
        for (; i !== null; ) O = i, wc(i), i = i.sibling;
        O = l, Rr = o, we = f;
      }
      uo(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, O = i) : uo(e);
  }
}
function uo(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            we || Ll(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !we) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Ge(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Gs(t, i, r);
            break;
          case 3:
            var a = t.updateQueue;
            if (a !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Gs(t, a, n);
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
              var f = t.alternate;
              if (f !== null) {
                var w = f.memoizedState;
                if (w !== null) {
                  var x = w.dehydrated;
                  x !== null && lr(x);
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
        we || t.flags & 512 && Ji(t);
      } catch (h) {
        se(t, t.return, h);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, O = n;
      break;
    }
    O = t.return;
  }
}
function co(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, O = n;
      break;
    }
    O = t.return;
  }
}
function fo(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ll(4, t);
          } catch (u) {
            se(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              se(t, l, u);
            }
          }
          var i = t.return;
          try {
            Ji(t);
          } catch (u) {
            se(t, i, u);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Ji(t);
          } catch (u) {
            se(t, a, u);
          }
      }
    } catch (u) {
      se(t, t.return, u);
    }
    if (t === e) {
      O = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      o.return = t.return, O = o;
      break;
    }
    O = t.return;
  }
}
var lp = Math.ceil, yl = yt.ReactCurrentDispatcher, Ha = yt.ReactCurrentOwner, Ue = yt.ReactCurrentBatchConfig, X = 0, pe = null, ue = null, he = 0, Pe = 0, fn = bt(0), de = 0, hr = null, Kt = 0, Pl = 0, Ba = 0, Xn = null, je = null, Ga = 0, Cn = 1 / 0, ot = null, vl = !1, ta = null, Mt = null, br = !1, Et = null, wl = 0, Zn = 0, na = null, Kr = -1, Yr = 0;
function ke() {
  return X & 6 ? oe() : Kr !== -1 ? Kr : Kr = oe();
}
function Lt(e) {
  return e.mode & 1 ? X & 2 && he !== 0 ? he & -he : Vf.transition !== null ? (Yr === 0 && (Yr = ru()), Yr) : (e = J, e !== 0 || (e = window.event, e = e === void 0 ? 16 : cu(e.type)), e) : 1;
}
function Je(e, t, n, r) {
  if (50 < Zn) throw Zn = 0, na = null, Error(L(185));
  yr(e, n, r), (!(X & 2) || e !== pe) && (e === pe && (!(X & 2) && (Pl |= n), de === 4 && St(e, he)), Le(e, r), n === 1 && X === 0 && !(t.mode & 1) && (Cn = oe() + 500, Il && Ot()));
}
function Le(e, t) {
  var n = e.callbackNode;
  $d(e, t);
  var r = nl(e, e === pe ? he : 0);
  if (r === 0) n !== null && xs(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && xs(n), t === 1) e.tag === 0 ? $f(po.bind(null, e)) : Tu(po.bind(null, e)), bf(function() {
      !(X & 6) && Ot();
    }), n = null;
    else {
      switch (lu(r)) {
        case 1:
          n = wa;
          break;
        case 4:
          n = tu;
          break;
        case 16:
          n = tl;
          break;
        case 536870912:
          n = nu;
          break;
        default:
          n = tl;
      }
      n = jc(n, xc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function xc(e, t) {
  if (Kr = -1, Yr = 0, X & 6) throw Error(L(327));
  var n = e.callbackNode;
  if (vn() && e.callbackNode !== n) return null;
  var r = nl(e, e === pe ? he : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = xl(e, r);
  else {
    t = r;
    var l = X;
    X |= 2;
    var i = Sc();
    (pe !== e || he !== t) && (ot = null, Cn = oe() + 500, Qt(e, t));
    do
      try {
        sp();
        break;
      } catch (o) {
        _c(e, o);
      }
    while (!0);
    Pa(), yl.current = i, X = l, ue !== null ? t = 0 : (pe = null, he = 0, t = de);
  }
  if (t !== 0) {
    if (t === 2 && (l = Ti(e), l !== 0 && (r = l, t = ra(e, l))), t === 1) throw n = hr, Qt(e, 0), St(e, r), Le(e, oe()), n;
    if (t === 6) St(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !ip(l) && (t = xl(e, r), t === 2 && (i = Ti(e), i !== 0 && (r = i, t = ra(e, i))), t === 1)) throw n = hr, Qt(e, 0), St(e, r), Le(e, oe()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          At(e, je, ot);
          break;
        case 3:
          if (St(e, r), (r & 130023424) === r && (t = Ga + 500 - oe(), 10 < t)) {
            if (nl(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ke(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Oi(At.bind(null, e, je, ot), t);
            break;
          }
          At(e, je, ot);
          break;
        case 4:
          if (St(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var a = 31 - Ze(r);
            i = 1 << a, a = t[a], a > l && (l = a), r &= ~i;
          }
          if (r = l, r = oe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * lp(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Oi(At.bind(null, e, je, ot), r);
            break;
          }
          At(e, je, ot);
          break;
        case 5:
          At(e, je, ot);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return Le(e, oe()), e.callbackNode === n ? xc.bind(null, e) : null;
}
function ra(e, t) {
  var n = Xn;
  return e.current.memoizedState.isDehydrated && (Qt(e, t).flags |= 256), e = xl(e, t), e !== 2 && (t = je, je = n, t !== null && la(t)), e;
}
function la(e) {
  je === null ? je = e : je.push.apply(je, e);
}
function ip(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], i = l.getSnapshot;
        l = l.value;
        try {
          if (!qe(i(), l)) return !1;
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
function St(e, t) {
  for (t &= ~Ba, t &= ~Pl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ze(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function po(e) {
  if (X & 6) throw Error(L(327));
  vn();
  var t = nl(e, 0);
  if (!(t & 1)) return Le(e, oe()), null;
  var n = xl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ti(e);
    r !== 0 && (t = r, n = ra(e, r));
  }
  if (n === 1) throw n = hr, Qt(e, 0), St(e, t), Le(e, oe()), n;
  if (n === 6) throw Error(L(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, At(e, je, ot), Le(e, oe()), null;
}
function Ka(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    X = n, X === 0 && (Cn = oe() + 500, Il && Ot());
  }
}
function Yt(e) {
  Et !== null && Et.tag === 0 && !(X & 6) && vn();
  var t = X;
  X |= 1;
  var n = Ue.transition, r = J;
  try {
    if (Ue.transition = null, J = 1, e) return e();
  } finally {
    J = r, Ue.transition = n, X = t, !(X & 6) && Ot();
  }
}
function Ya() {
  Pe = fn.current, ne(fn);
}
function Qt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Rf(n)), ue !== null) for (n = ue.return; n !== null; ) {
    var r = n;
    switch (Ta(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && sl();
        break;
      case 3:
        kn(), ne(Te), ne(xe), Fa();
        break;
      case 5:
        Oa(r);
        break;
      case 4:
        kn();
        break;
      case 13:
        ne(le);
        break;
      case 19:
        ne(le);
        break;
      case 10:
        Da(r.type._context);
        break;
      case 22:
      case 23:
        Ya();
    }
    n = n.return;
  }
  if (pe = e, ue = e = Pt(e.current, null), he = Pe = t, de = 0, hr = null, Ba = Pl = Kt = 0, je = Xn = null, Vt !== null) {
    for (t = 0; t < Vt.length; t++) if (n = Vt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, i = n.pending;
      if (i !== null) {
        var a = i.next;
        i.next = l, r.next = a;
      }
      n.pending = r;
    }
    Vt = null;
  }
  return e;
}
function _c(e, t) {
  do {
    var n = ue;
    try {
      if (Pa(), Hr.current = gl, hl) {
        for (var r = ie.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        hl = !1;
      }
      if (Gt = 0, fe = ce = ie = null, Kn = !1, fr = 0, Ha.current = null, n === null || n.return === null) {
        de = 1, hr = t, ue = null;
        break;
      }
      e: {
        var i = e, a = n.return, o = n, u = t;
        if (t = he, o.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var f = u, w = o, x = w.tag;
          if (!(w.mode & 1) && (x === 0 || x === 11 || x === 15)) {
            var h = w.alternate;
            h ? (w.updateQueue = h.updateQueue, w.memoizedState = h.memoizedState, w.lanes = h.lanes) : (w.updateQueue = null, w.memoizedState = null);
          }
          var v = qs(a);
          if (v !== null) {
            v.flags &= -257, eo(v, a, o, i, t), v.mode & 1 && Js(i, f, t), t = v, u = f;
            var g = t.updateQueue;
            if (g === null) {
              var _ = /* @__PURE__ */ new Set();
              _.add(u), t.updateQueue = _;
            } else g.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Js(i, f, t), Xa();
              break e;
            }
            u = Error(L(426));
          }
        } else if (re && o.mode & 1) {
          var j = qs(a);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256), eo(j, a, o, i, t), Ma(En(u, o));
            break e;
          }
        }
        i = u = En(u, o), de !== 4 && (de = 2), Xn === null ? Xn = [i] : Xn.push(i), i = a;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var c = lc(i, u, t);
              Bs(i, c);
              break e;
            case 1:
              o = u;
              var d = i.type, p = i.stateNode;
              if (!(i.flags & 128) && (typeof d.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Mt === null || !Mt.has(p)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var E = ic(i, o, t);
                Bs(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ec(n);
    } catch (P) {
      t = P, ue === n && n !== null && (ue = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Sc() {
  var e = yl.current;
  return yl.current = gl, e === null ? gl : e;
}
function Xa() {
  (de === 0 || de === 3 || de === 2) && (de = 4), pe === null || !(Kt & 268435455) && !(Pl & 268435455) || St(pe, he);
}
function xl(e, t) {
  var n = X;
  X |= 2;
  var r = Sc();
  (pe !== e || he !== t) && (ot = null, Qt(e, t));
  do
    try {
      ap();
      break;
    } catch (l) {
      _c(e, l);
    }
  while (!0);
  if (Pa(), X = n, yl.current = r, ue !== null) throw Error(L(261));
  return pe = null, he = 0, de;
}
function ap() {
  for (; ue !== null; ) kc(ue);
}
function sp() {
  for (; ue !== null && !Ld(); ) kc(ue);
}
function kc(e) {
  var t = Nc(e.alternate, e, Pe);
  e.memoizedProps = e.pendingProps, t === null ? Ec(e) : ue = t, Ha.current = null;
}
function Ec(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = ep(n, t), n !== null) {
        n.flags &= 32767, ue = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        de = 6, ue = null;
        return;
      }
    } else if (n = qf(n, t, Pe), n !== null) {
      ue = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ue = t;
      return;
    }
    ue = t = e;
  } while (t !== null);
  de === 0 && (de = 5);
}
function At(e, t, n) {
  var r = J, l = Ue.transition;
  try {
    Ue.transition = null, J = 1, op(e, t, n, r);
  } finally {
    Ue.transition = l, J = r;
  }
  return null;
}
function op(e, t, n, r) {
  do
    vn();
  while (Et !== null);
  if (X & 6) throw Error(L(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(L(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Vd(e, i), e === pe && (ue = pe = null, he = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || br || (br = !0, jc(tl, function() {
    return vn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Ue.transition, Ue.transition = null;
    var a = J;
    J = 1;
    var o = X;
    X |= 4, Ha.current = null, np(e, n), vc(n, e), If(Ri), rl = !!zi, Ri = zi = null, e.current = n, rp(n), Pd(), X = o, J = a, Ue.transition = i;
  } else e.current = n;
  if (br && (br = !1, Et = e, wl = l), i = e.pendingLanes, i === 0 && (Mt = null), Rd(n.stateNode), Le(e, oe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (vl) throw vl = !1, e = ta, ta = null, e;
  return wl & 1 && e.tag !== 0 && vn(), i = e.pendingLanes, i & 1 ? e === na ? Zn++ : (Zn = 0, na = e) : Zn = 0, Ot(), null;
}
function vn() {
  if (Et !== null) {
    var e = lu(wl), t = Ue.transition, n = J;
    try {
      if (Ue.transition = null, J = 16 > e ? 16 : e, Et === null) var r = !1;
      else {
        if (e = Et, Et = null, wl = 0, X & 6) throw Error(L(331));
        var l = X;
        for (X |= 4, O = e.current; O !== null; ) {
          var i = O, a = i.child;
          if (O.flags & 16) {
            var o = i.deletions;
            if (o !== null) {
              for (var u = 0; u < o.length; u++) {
                var f = o[u];
                for (O = f; O !== null; ) {
                  var w = O;
                  switch (w.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yn(8, w, i);
                  }
                  var x = w.child;
                  if (x !== null) x.return = w, O = x;
                  else for (; O !== null; ) {
                    w = O;
                    var h = w.sibling, v = w.return;
                    if (hc(w), w === f) {
                      O = null;
                      break;
                    }
                    if (h !== null) {
                      h.return = v, O = h;
                      break;
                    }
                    O = v;
                  }
                }
              }
              var g = i.alternate;
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
              O = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) a.return = i, O = a;
          else e: for (; O !== null; ) {
            if (i = O, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Yn(9, i, i.return);
            }
            var c = i.sibling;
            if (c !== null) {
              c.return = i.return, O = c;
              break e;
            }
            O = i.return;
          }
        }
        var d = e.current;
        for (O = d; O !== null; ) {
          a = O;
          var p = a.child;
          if (a.subtreeFlags & 2064 && p !== null) p.return = a, O = p;
          else e: for (a = d; O !== null; ) {
            if (o = O, o.flags & 2048) try {
              switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  Ll(9, o);
              }
            } catch (P) {
              se(o, o.return, P);
            }
            if (o === a) {
              O = null;
              break e;
            }
            var E = o.sibling;
            if (E !== null) {
              E.return = o.return, O = E;
              break e;
            }
            O = o.return;
          }
        }
        if (X = l, Ot(), at && typeof at.onPostCommitFiberRoot == "function") try {
          at.onPostCommitFiberRoot(kl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      J = n, Ue.transition = t;
    }
  }
  return !1;
}
function mo(e, t, n) {
  t = En(n, t), t = lc(e, t, 1), e = Tt(e, t, 1), t = ke(), e !== null && (yr(e, 1, t), Le(e, t));
}
function se(e, t, n) {
  if (e.tag === 3) mo(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      mo(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Mt === null || !Mt.has(r))) {
        e = En(n, e), e = ic(t, e, 1), t = Tt(t, e, 1), e = ke(), t !== null && (yr(t, 1, e), Le(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function up(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ke(), e.pingedLanes |= e.suspendedLanes & n, pe === e && (he & n) === n && (de === 4 || de === 3 && (he & 130023424) === he && 500 > oe() - Ga ? Qt(e, 0) : Ba |= n), Le(e, t);
}
function Cc(e, t) {
  t === 0 && (e.mode & 1 ? (t = Nr, Nr <<= 1, !(Nr & 130023424) && (Nr = 4194304)) : t = 1);
  var n = ke();
  e = ht(e, t), e !== null && (yr(e, t, n), Le(e, n));
}
function cp(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Cc(e, n);
}
function dp(e, t) {
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
  r !== null && r.delete(t), Cc(e, n);
}
var Nc;
Nc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Te.current) Ie = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ie = !1, Jf(e, t, n);
    Ie = !!(e.flags & 131072);
  }
  else Ie = !1, re && t.flags & 1048576 && Mu(t, cl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Gr(e, t), e = t.pendingProps;
      var l = xn(t, xe.current);
      yn(t, n), l = $a(null, t, r, e, l, n);
      var i = Va();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Me(r) ? (i = !0, ol(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ra(t), l.updater = Ml, t.stateNode = l, l._reactInternals = t, Wi(t, r, e, n), t = Gi(null, t, r, !0, i, n)) : (t.tag = 0, re && i && Ia(t), _e(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Gr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = pp(r), e = Ge(r, e), l) {
          case 0:
            t = Bi(null, t, r, e, n);
            break e;
          case 1:
            t = ro(null, t, r, e, n);
            break e;
          case 11:
            t = to(null, t, r, e, n);
            break e;
          case 14:
            t = no(null, t, r, Ge(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ge(r, l), Bi(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ge(r, l), ro(e, t, r, l, n);
    case 3:
      e: {
        if (uc(t), e === null) throw Error(L(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, bu(e, t), pl(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = En(Error(L(423)), t), t = lo(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = En(Error(L(424)), t), t = lo(e, t, r, n, l);
          break e;
        } else for (ze = It(t.stateNode.containerInfo.firstChild), Re = t, re = !0, Ye = null, n = zu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (_n(), r === l) {
            t = gt(e, t, n);
            break e;
          }
          _e(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Ou(t), e === null && Vi(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = l.children, bi(r, l) ? a = null : i !== null && bi(r, i) && (t.flags |= 32), oc(e, t), _e(e, t, a, n), t.child;
    case 6:
      return e === null && Vi(t), null;
    case 13:
      return cc(e, t, n);
    case 4:
      return ba(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Sn(t, null, r, n) : _e(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ge(r, l), to(e, t, r, l, n);
    case 7:
      return _e(e, t, t.pendingProps, n), t.child;
    case 8:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, a = l.value, ee(dl, r._currentValue), r._currentValue = a, i !== null) if (qe(i.value, a)) {
          if (i.children === l.children && !Te.current) {
            t = gt(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var o = i.dependencies;
          if (o !== null) {
            a = i.child;
            for (var u = o.firstContext; u !== null; ) {
              if (u.context === r) {
                if (i.tag === 1) {
                  u = ft(-1, n & -n), u.tag = 2;
                  var f = i.updateQueue;
                  if (f !== null) {
                    f = f.shared;
                    var w = f.pending;
                    w === null ? u.next = u : (u.next = w.next, w.next = u), f.pending = u;
                  }
                }
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Ui(
                  i.return,
                  n,
                  t
                ), o.lanes |= n;
                break;
              }
              u = u.next;
            }
          } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (a = i.return, a === null) throw Error(L(341));
            a.lanes |= n, o = a.alternate, o !== null && (o.lanes |= n), Ui(a, n, t), a = i.sibling;
          } else a = i.child;
          if (a !== null) a.return = i;
          else for (a = i; a !== null; ) {
            if (a === t) {
              a = null;
              break;
            }
            if (i = a.sibling, i !== null) {
              i.return = a.return, a = i;
              break;
            }
            a = a.return;
          }
          i = a;
        }
        _e(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, yn(t, n), l = Qe(l), r = r(l), t.flags |= 1, _e(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Ge(r, t.pendingProps), l = Ge(r.type, l), no(e, t, r, l, n);
    case 15:
      return ac(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ge(r, l), Gr(e, t), t.tag = 1, Me(r) ? (e = !0, ol(t)) : e = !1, yn(t, n), rc(t, r, l), Wi(t, r, l, n), Gi(null, t, r, !0, e, n);
    case 19:
      return dc(e, t, n);
    case 22:
      return sc(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function jc(e, t) {
  return eu(e, t);
}
function fp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ve(e, t, n, r) {
  return new fp(e, t, n, r);
}
function Za(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function pp(e) {
  if (typeof e == "function") return Za(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ga) return 11;
    if (e === ya) return 14;
  }
  return 2;
}
function Pt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ve(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Xr(e, t, n, r, l, i) {
  var a = 2;
  if (r = e, typeof e == "function") Za(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else e: switch (e) {
    case tn:
      return Wt(n.children, l, i, t);
    case ha:
      a = 8, l |= 8;
      break;
    case mi:
      return e = Ve(12, n, t, l | 2), e.elementType = mi, e.lanes = i, e;
    case hi:
      return e = Ve(13, n, t, l), e.elementType = hi, e.lanes = i, e;
    case gi:
      return e = Ve(19, n, t, l), e.elementType = gi, e.lanes = i, e;
    case Oo:
      return Dl(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Ro:
          a = 10;
          break e;
        case bo:
          a = 9;
          break e;
        case ga:
          a = 11;
          break e;
        case ya:
          a = 14;
          break e;
        case wt:
          a = 16, r = null;
          break e;
      }
      throw Error(L(130, e == null ? e : typeof e, ""));
  }
  return t = Ve(a, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Wt(e, t, n, r) {
  return e = Ve(7, e, r, t), e.lanes = n, e;
}
function Dl(e, t, n, r) {
  return e = Ve(22, e, r, t), e.elementType = Oo, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function di(e, t, n) {
  return e = Ve(6, e, null, t), e.lanes = n, e;
}
function fi(e, t, n) {
  return t = Ve(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function mp(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Bl(0), this.expirationTimes = Bl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Bl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Ja(e, t, n, r, l, i, a, o, u) {
  return e = new mp(e, t, n, o, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ve(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ra(i), e;
}
function hp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: en, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Ic(e) {
  if (!e) return zt;
  e = e._reactInternals;
  e: {
    if (Zt(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Me(t.type)) {
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
    if (Me(n)) return Iu(e, n, t);
  }
  return t;
}
function Tc(e, t, n, r, l, i, a, o, u) {
  return e = Ja(n, r, !0, e, l, i, a, o, u), e.context = Ic(null), n = e.current, r = ke(), l = Lt(n), i = ft(r, l), i.callback = t ?? null, Tt(n, i, l), e.current.lanes = l, yr(e, l, r), Le(e, r), e;
}
function zl(e, t, n, r) {
  var l = t.current, i = ke(), a = Lt(l);
  return n = Ic(n), t.context === null ? t.context = n : t.pendingContext = n, t = ft(i, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Tt(l, t, a), e !== null && (Je(e, l, a, i), Wr(e, l, a)), a;
}
function _l(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ho(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function qa(e, t) {
  ho(e, t), (e = e.alternate) && ho(e, t);
}
function gp() {
  return null;
}
var Mc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function es(e) {
  this._internalRoot = e;
}
Rl.prototype.render = es.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  zl(e, t, null, null);
};
Rl.prototype.unmount = es.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Yt(function() {
      zl(null, e, null, null);
    }), t[mt] = null;
  }
};
function Rl(e) {
  this._internalRoot = e;
}
Rl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = su();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < _t.length && t !== 0 && t < _t[n].priority; n++) ;
    _t.splice(n, 0, e), n === 0 && uu(e);
  }
};
function ts(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function bl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function go() {
}
function yp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var f = _l(a);
        i.call(f);
      };
    }
    var a = Tc(t, r, e, 0, null, !1, !1, "", go);
    return e._reactRootContainer = a, e[mt] = a.current, sr(e.nodeType === 8 ? e.parentNode : e), Yt(), a;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function() {
      var f = _l(u);
      o.call(f);
    };
  }
  var u = Ja(e, 0, !1, null, null, !1, !1, "", go);
  return e._reactRootContainer = u, e[mt] = u.current, sr(e.nodeType === 8 ? e.parentNode : e), Yt(function() {
    zl(t, u, n, r);
  }), u;
}
function Ol(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof l == "function") {
      var o = l;
      l = function() {
        var u = _l(a);
        o.call(u);
      };
    }
    zl(t, a, e, l);
  } else a = yp(n, t, e, l, r);
  return _l(a);
}
iu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Vn(t.pendingLanes);
        n !== 0 && (xa(t, n | 1), Le(t, oe()), !(X & 6) && (Cn = oe() + 500, Ot()));
      }
      break;
    case 13:
      Yt(function() {
        var r = ht(e, 1);
        if (r !== null) {
          var l = ke();
          Je(r, e, 1, l);
        }
      }), qa(e, 1);
  }
};
_a = function(e) {
  if (e.tag === 13) {
    var t = ht(e, 134217728);
    if (t !== null) {
      var n = ke();
      Je(t, e, 134217728, n);
    }
    qa(e, 134217728);
  }
};
au = function(e) {
  if (e.tag === 13) {
    var t = Lt(e), n = ht(e, t);
    if (n !== null) {
      var r = ke();
      Je(n, e, t, r);
    }
    qa(e, t);
  }
};
su = function() {
  return J;
};
ou = function(e, t) {
  var n = J;
  try {
    return J = e, t();
  } finally {
    J = n;
  }
};
Ni = function(e, t, n) {
  switch (t) {
    case "input":
      if (wi(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = jl(r);
            if (!l) throw Error(L(90));
            Ao(r), wi(r, l);
          }
        }
      }
      break;
    case "textarea":
      Vo(e, n);
      break;
    case "select":
      t = n.value, t != null && pn(e, !!n.multiple, t, !1);
  }
};
Ko = Ka;
Yo = Yt;
var vp = { usingClientEntryPoint: !1, Events: [wr, an, jl, Bo, Go, Ka] }, Fn = { findFiberByHostInstance: $t, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, wp = { bundleType: Fn.bundleType, version: Fn.version, rendererPackageName: Fn.rendererPackageName, rendererConfig: Fn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: yt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Jo(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Fn.findFiberByHostInstance || gp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Or = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Or.isDisabled && Or.supportsFiber) try {
    kl = Or.inject(wp), at = Or;
  } catch {
  }
}
Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vp;
Oe.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ts(t)) throw Error(L(200));
  return hp(e, t, null, n);
};
Oe.createRoot = function(e, t) {
  if (!ts(e)) throw Error(L(299));
  var n = !1, r = "", l = Mc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Ja(e, 1, !1, null, null, n, !1, r, l), e[mt] = t.current, sr(e.nodeType === 8 ? e.parentNode : e), new es(t);
};
Oe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(L(188)) : (e = Object.keys(e).join(","), Error(L(268, e)));
  return e = Jo(t), e = e === null ? null : e.stateNode, e;
};
Oe.flushSync = function(e) {
  return Yt(e);
};
Oe.hydrate = function(e, t, n) {
  if (!bl(t)) throw Error(L(200));
  return Ol(null, e, t, !0, n);
};
Oe.hydrateRoot = function(e, t, n) {
  if (!ts(e)) throw Error(L(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", a = Mc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = Tc(t, null, e, 1, n ?? null, l, !1, i, a), e[mt] = t.current, sr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Rl(t);
};
Oe.render = function(e, t, n) {
  if (!bl(t)) throw Error(L(200));
  return Ol(null, e, t, !1, n);
};
Oe.unmountComponentAtNode = function(e) {
  if (!bl(e)) throw Error(L(40));
  return e._reactRootContainer ? (Yt(function() {
    Ol(null, null, e, !1, function() {
      e._reactRootContainer = null, e[mt] = null;
    });
  }), !0) : !1;
};
Oe.unstable_batchedUpdates = Ka;
Oe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!bl(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return Ol(e, t, n, !1, r);
};
Oe.version = "18.3.1-next-f1338f8080-20240426";
function Lc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lc);
    } catch (e) {
      console.error(e);
    }
}
Lc(), Lo.exports = Oe;
var De = Lo.exports, Pc, yo = De;
Pc = yo.createRoot, yo.hydrateRoot;
window.api = G;
const xp = async () => {
  const e = await G.fetchApi("/meld/home-dir");
  if (!e.ok)
    throw new Error("Failed to fetch home directory");
  return (await e.json()).home;
}, Zr = async (e = 0, t = 30, n = "", r = "default", l = !1) => {
  const i = await G.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${l ? "&minimal=true" : ""}`
  );
  if (!i.ok)
    throw new Error(`Failed to fetch images: ${i.statusText}`);
  return await i.json();
}, _p = async (e) => {
  const t = await G.fetchApi(`/meld/image/${e}/details`);
  if (!t.ok)
    throw new Error(`Failed to fetch image details: ${t.statusText}`);
  return await t.json();
}, Sp = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await G.fetchApi(n);
  return r.ok ? await r.json() : [];
}, kp = async () => {
  const e = await G.fetchApi("/meld/search-suggestions");
  return e.ok ? await e.json() : [];
}, Dc = async () => {
  const e = await G.fetchApi("/meld/settings");
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
      "fullscreen.details.show_filename": "filename",
      "fullscreen.details.show_dimensions": !0,
      "fullscreen.details.show_created_at": !0,
      "fullscreen.details.show_tags": !0,
      "fullscreen.details.show_model_name": !0,
      "fullscreen.details.show_positive_prompt": !0,
      "fullscreen.details.show_negative_prompt": !0,
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
      "gallery.view_mode": "grid_details"
    };
  const t = await e.json();
  return typeof t["sidebar.show_filename"] == "boolean" && (t["sidebar.show_filename"] = t["sidebar.show_filename"] ? "filename" : "none"), typeof t["viewer.details.show_filename"] == "boolean" && (t["viewer.details.show_filename"] = t["viewer.details.show_filename"] ? "filename" : "none"), typeof t["fullscreen.details.show_filename"] == "boolean" && (t["fullscreen.details.show_filename"] = t["fullscreen.details.show_filename"] ? "filename" : "none"), t;
}, Ep = async (e, t) => {
  if (!(await G.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  })).ok)
    throw new Error("Failed to save setting");
}, Cp = async (e, t) => {
  if (!(await G.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  })).ok)
    throw new Error("Failed to link parent");
}, Np = async (e, t = 12) => {
  const n = await G.fetchApi(
    `/meld/suggest-parents?id=${e}&threshold=${t}`
  );
  return n.ok ? await n.json() : [];
}, ia = async (e) => {
  const t = await G.fetchApi(`/meld/lineage?id=${e}`);
  return t.ok ? await t.json() : [];
}, jp = async (e) => {
  const t = new FormData();
  t.append("image", e), t.append("overwrite", "true");
  const n = await G.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, aa = async (e, t = !1) => {
  const n = await G.fetchApi("/meld/bulk-delete", {
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
}, sa = async (e) => {
  const t = await G.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to restore images");
  }
}, zc = async (e) => {
  const t = await G.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok)
    throw new Error("Failed to register image");
  return await t.json();
}, Ip = async (e, t, n = !1, r) => {
  const l = await G.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  return l.ok ? await l.json() : { folders: [], images: [], image_count: 0 };
}, Tp = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await G.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  return l.ok ? await l.json() : {};
}, Mp = async (e, t, n) => {
  const r = await G.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  return r.ok ? (await r.json()).count : 0;
}, Lp = async (e) => {
  const t = await G.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to start scan");
  }
}, Pp = async () => {
  if (!(await G.fetchApi("/meld/scan/cancel", {
    method: "POST"
  })).ok)
    throw new Error("Failed to cancel scan");
}, Dp = async () => {
  const e = await G.fetchApi("/meld/favorites");
  return e.ok ? await e.json() : [];
}, zp = async (e, t) => {
  if (!(await G.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  })).ok)
    throw new Error("Failed to save favorite");
}, vo = async (e) => {
  if (!(await G.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  })).ok)
    throw new Error("Failed to delete favorite");
}, Rp = async (e, t) => {
  if (!(await G.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  })).ok)
    throw new Error("Failed to update favorite");
}, ns = async () => {
  const e = await G.fetchApi("/meld/tags");
  return e.ok ? await e.json() : [];
}, bp = async (e) => {
  const t = await G.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  if (!t.ok)
    throw new Error("Failed to create tag");
  return await t.json();
}, Op = async (e) => {
  if (!(await G.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  })).ok)
    throw new Error("Failed to delete tag");
}, Fp = async (e, t) => {
  const n = await G.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  if (!n.ok) {
    const r = await n.json();
    throw new Error(r.error || "Failed to rename tag");
  }
}, Ap = async (e, t) => {
  if (!(await G.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  })).ok)
    throw new Error("Failed to update image tags");
}, $p = async (e, t, n) => {
  if (!(await G.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  })).ok)
    throw new Error("Failed to bulk update image tags");
}, Vp = async (e) => {
  const t = await G.fetchApi(`/meld/image/${e}/workflow`);
  if (!t.ok)
    throw new Error("Failed to fetch workflow");
  return await t.json();
}, Up = async (e) => {
  const t = await G.fetchApi(`/meld/image/${e}/snapshot_data`);
  if (!t.ok)
    throw new Error("Failed to fetch snapshot data");
  return await t.json();
};
var Rc = { exports: {} }, Fl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qp = y, Wp = Symbol.for("react.element"), Hp = Symbol.for("react.fragment"), Bp = Object.prototype.hasOwnProperty, Gp = Qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Kp = { key: !0, ref: !0, __self: !0, __source: !0 };
function bc(e, t, n) {
  var r, l = {}, i = null, a = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t) Bp.call(t, r) && !Kp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Wp, type: e, key: i, ref: a, props: l, _owner: Gp.current };
}
Fl.Fragment = Hp;
Fl.jsx = bc;
Fl.jsxs = bc;
Rc.exports = Fl;
var s = Rc.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Yp = {
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
const Xp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), K = (e, t) => {
  const n = y.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: a,
      className: o = "",
      children: u,
      ...f
    }, w) => y.createElement(
      "svg",
      {
        ref: w,
        ...Yp,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: a ? Number(i) * 24 / Number(l) : i,
        className: ["lucide", `lucide-${Xp(e)}`, o].join(" "),
        ...f
      },
      [
        ...t.map(([x, h]) => y.createElement(x, h)),
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
const Zp = K("AlertTriangle", [
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
const Jp = K("ArrowBigRight", [
  ["path", { d: "M6 9h6V5l7 7-7 7v-4H6V9z", key: "7fvt9c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oc = K("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wo = K("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qp = K("ArrowUpDown", [
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
const Fc = K("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const em = K("Box", [
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
const tm = K("Calendar", [
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
const nm = K("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ac = K("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $c = K("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vc = K("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rm = K("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lm = K("Download", [
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
const im = K("Folder", [
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
const am = K("Info", [
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
const Uc = K("LayoutGrid", [
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
const sm = K("LayoutList", [
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
const om = K("Maximize", [
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
const um = K("Minimize", [
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
const cm = K("MoreVertical", [
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
const Qc = K("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dm = K("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fm = K("PlusCircle", [
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
const rs = K("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jn = K("RefreshCw", [
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
const Nn = K("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pm = K("Settings", [
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
const mm = K("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xo = K("Star", [
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
const Jt = K("Tag", [
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
const jn = K("Trash2", [
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
const hm = K("Type", [
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
const gm = K("Upload", [
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
const Ee = K("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
let Sl = !1;
const ym = (e) => {
  Sl = e, Sl && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, vm = (...e) => {
  Sl && console.log("[Meld]", ...e);
}, wm = (...e) => {
  Sl && console.warn("[Meld]", ...e);
}, xm = (...e) => {
  console.error("[Meld]", ...e);
}, V = {
  log: vm,
  warn: wm,
  error: xm,
  init: ym
}, _m = {
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
    updatedCount: 0,
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
    "fullscreen.details.show_filename": "filename",
    "fullscreen.details.show_dimensions": !0,
    "fullscreen.details.show_created_at": !0,
    "fullscreen.details.show_tags": !0,
    "fullscreen.details.show_model_name": !0,
    "fullscreen.details.show_positive_prompt": !0,
    "fullscreen.details.show_negative_prompt": !0,
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
    "gallery.view_mode": "grid_details"
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
function Sm(e, t) {
  var n, r;
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "REMOVE_IMAGES": {
      const l = new Set(t.payload), i = e.images.filter((o) => !l.has(o.id)), a = new Set(e.selectedIds);
      for (const o of t.payload)
        a.delete(o);
      return {
        ...e,
        images: i,
        selectedIds: a,
        pagination: {
          ...e.pagination,
          total: Math.max(0, e.pagination.total - t.payload.length)
        }
      };
    }
    case "ADD_IMAGES": {
      const l = t.payload, i = [...e.images, ...l], a = Array.from(
        new Map(i.map((o) => [o.id, o])).values()
      ).sort((o, u) => u.created_at - o.created_at);
      return {
        ...e,
        images: a,
        pagination: {
          ...e.pagination,
          total: e.pagination.total + l.length
        }
      };
    }
    case "UPDATE_IMAGE": {
      const l = t.payload, i = e.images.map(
        (o) => o.id === l.id ? l : o
      ), a = e.lineageImages.map(
        (o) => o.id === l.id ? l : o
      );
      return {
        ...e,
        images: i,
        lineageImages: a
      };
    }
    case "SET_IMAGES": {
      const { images: l, total: i, offset: a } = t.payload;
      let o = e.viewerImageId;
      return e.viewerMode === "gallery" && o !== null && !l.some((u) => u.id === o) && (o = null), {
        ...e,
        images: l,
        isLoading: !1,
        error: null,
        viewerImageId: o,
        pagination: {
          total: i,
          offset: a,
          limit: e.pagination.limit,
          hasMore: a + l.length < i
        }
      };
    }
    case "APPEND_IMAGES": {
      const { images: l, total: i, offset: a } = t.payload, o = [...e.images, ...l], u = Array.from(
        new Map(o.map((f) => [f.id, f])).values()
      );
      return {
        ...e,
        images: u,
        isLoading: !1,
        error: null,
        pagination: {
          ...e.pagination,
          total: i,
          offset: a,
          hasMore: a + l.length < i
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
        const f = new Set(e.selectedIds);
        return f.add(t.payload), {
          ...e,
          selectedIds: f,
          lastSelectedId: t.payload
        };
      }
      const l = e.images.findIndex(
        (f) => f.id === e.lastSelectedId
      ), i = e.images.findIndex(
        (f) => f.id === t.payload
      );
      if (l === -1 || i === -1) return e;
      const [a, o] = [
        Math.min(l, i),
        Math.max(l, i)
      ], u = new Set(e.selectedIds);
      for (let f = a; f <= o; f++)
        u.add(e.images[f].id);
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
      const l = t.payload, i = typeof l == "number" ? l : l.id, a = typeof l == "number" ? "gallery" : l.mode, o = e.viewerMode === "lineage" && a === "lineage" && e.lineageImages.some((u) => u.id === i);
      return {
        ...e,
        viewerImageId: i,
        viewerMode: a,
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
      const i = ((n = t.payload) == null ? void 0 : n.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], a = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (f) => f.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && f.has_children)
      );
      if (e.viewerImageId === null || a.length === 0)
        return e;
      const o = a.findIndex(
        (f) => f.id === e.viewerImageId
      );
      if (o === -1 || o === a.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || o === a.length - 1 && !i)
        return e;
      const u = (o + 1) % a.length;
      return {
        ...e,
        viewerImageId: a[u].id
      };
    }
    case "PREVIOUS_IMAGE": {
      const i = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], a = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (f) => f.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && f.has_children)
      );
      if (e.viewerImageId === null || a.length === 0)
        return e;
      const o = a.findIndex(
        (f) => f.id === e.viewerImageId
      );
      if (o === -1 || o === 0 && e.viewerMode === "gallery" && e.pagination.hasMore || o === 0 && !i)
        return e;
      const u = (o - 1 + a.length) % a.length;
      return {
        ...e,
        viewerImageId: a[u].id
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
      return t.payload["gallery.initial_load_count"] !== void 0 && (i.limit = t.payload["gallery.initial_load_count"]), {
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
const Wc = y.createContext(void 0), km = ({
  children: e
}) => {
  const [t, n] = y.useReducer(Sm, _m), r = y.useRef(t.images.length), l = y.useRef(0);
  y.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const i = y.useCallback(
    async (v, g, _) => {
      const j = t.settings["gallery.max_load_count"], c = 200;
      let d = v;
      for (; d < Math.min(g, j) && _ === l.current; )
        try {
          const p = Math.min(c, j - d);
          V.log("Background fetch: starting chunk", {
            offset: d,
            limit: p
          });
          const E = await Zr(
            d,
            p,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (_ !== l.current || (n({ type: "APPEND_IMAGES", payload: E }), d += E.images.length, E.images.length === 0 || d >= E.total))
            break;
          await new Promise((P) => setTimeout(P, 300));
        } catch (p) {
          V.error("Background fetch failed", p);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), a = y.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const v = performance.now(), g = ++l.current;
    try {
      const _ = t.searchQuery.trim() !== "", j = t.settings["gallery.initial_load_count"];
      V.log("refreshImages: starting initial fetch", {
        isSearch: _,
        fetchLimit: j,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const c = await Zr(
        0,
        j,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), d = performance.now() - v;
      V.log("refreshImages: initial fetch complete", {
        count: c.images.length,
        total: c.total,
        offset: c.offset,
        durationMs: d.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: c }), c.total > j && i(j, c.total, g);
    } catch (_) {
      V.error("refreshImages: fetch failed", _), n({
        type: "SET_ERROR",
        payload: _ instanceof Error ? _.message : String(_)
      });
    }
  }, [
    t.searchQuery,
    t.viewScope,
    t.settings,
    i
  ]), o = y.useCallback(async () => {
    if (t.isLoading || !t.pagination.hasMore) return;
    n({ type: "SET_LOADING", payload: !0 });
    const v = performance.now();
    try {
      const g = r.current, _ = t.searchQuery.trim() !== "", j = t.pagination.limit;
      V.log("loadMoreImages: starting fetch", {
        nextOffset: g,
        fetchLimit: j,
        isSearch: _
      });
      const c = await Zr(
        g,
        j,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), d = performance.now() - v;
      V.log("loadMoreImages: fetch complete", {
        count: c.images.length,
        total: c.total,
        offset: c.offset,
        durationMs: d.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: c });
    } catch (g) {
      V.error("loadMoreImages: fetch failed", g), n({
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
  ]), u = y.useCallback(async () => {
    try {
      const v = await Dp();
      n({ type: "SET_FAVORITES", payload: v });
    } catch (v) {
      V.error("Failed to load favorites", v);
    }
  }, []), f = y.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const v = Array.from(t.selectedIds), _ = t.images.filter(
      (j) => t.selectedIds.has(j.id)
    ).some(
      (j) => j.parent_id || j.has_children
    );
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: v,
        hasLineage: _,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), w = y.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const v = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 }), await sa(v), t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: v }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (g) {
      n({
        type: "SET_ERROR",
        payload: g instanceof Error ? g.message : String(g)
      });
    }
  }, [t.selectedIds, t.viewScope]), x = y.useCallback(
    async (v, g) => {
      try {
        await Ep(v, g), n({ type: "SET_SETTINGS", payload: { [v]: g } });
      } catch (_) {
        n({
          type: "SET_ERROR",
          payload: _ instanceof Error ? _.message : String(_)
        });
      }
    },
    []
  ), h = y.useCallback(
    async (v) => {
      const g = t.images.find((_) => _.id === v);
      if (g && !g.is_minimal)
        return g;
      try {
        V.log("fetchFullImageDetails: fetching full data", { id: v });
        const _ = await _p(v);
        return n({ type: "UPDATE_IMAGE", payload: _ }), _;
      } catch (_) {
        throw V.error("Failed to fetch image details", _), _;
      }
    },
    [t.images]
  );
  return y.useEffect(() => {
    (async () => {
      try {
        const g = await Dc();
        n({ type: "SET_SETTINGS", payload: g });
      } catch (g) {
        V.error("Failed to load settings", g);
      }
    })();
  }, []), y.useEffect(() => {
    u();
  }, [u]), y.useEffect(() => {
    const v = () => {
      a();
    }, g = (j) => {
      const c = j.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: c }
      });
    }, _ = (j) => {
      const c = j.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !1,
          isFinished: !0,
          shouldCancel: !1,
          newCount: c.new_count || 0,
          updatedCount: c.updated_count || 0,
          totalCount: c.total_count || 0,
          progress: {
            current: c.total_count || t.scanStatus.progress.total,
            total: c.total_count || t.scanStatus.progress.total,
            phase: "completed"
          }
        }
      }), a();
    };
    return window.addEventListener("meld-refresh", v), window.addEventListener("meld-scan-progress", g), window.addEventListener("meld-scan-finished", _), () => {
      window.removeEventListener("meld-refresh", v), window.removeEventListener("meld-scan-progress", g), window.removeEventListener("meld-scan-finished", _);
    };
  }, [a, t.scanStatus.progress.total]), y.useEffect(() => {
    a();
  }, [a]), /* @__PURE__ */ s.jsx(
    Wc.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: a,
        loadMoreImages: o,
        refreshFavorites: u,
        deleteSelected: f,
        restoreSelected: w,
        updateSetting: x,
        fetchFullImageDetails: h
      },
      children: e
    }
  );
}, et = () => {
  const e = y.useContext(Wc);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, Em = ({
  children: e,
  height: t = 150,
  rootMargin: n = "400px"
}) => {
  const [r, l] = y.useState(!1), i = y.useRef(null);
  return y.useEffect(() => {
    const a = new IntersectionObserver(
      ([u]) => {
        l(u.isIntersecting);
      },
      { rootMargin: n }
    ), o = i.current;
    return o && a.observe(o), () => {
      o && a.unobserve(o);
    };
  }, [n]), /* @__PURE__ */ s.jsx(
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
}, Cm = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = et(), l = e.selectedIds.size;
  if (l === 0) return null;
  const i = e.viewScope === "trash", a = () => {
    const o = e.images.filter(
      (f) => e.selectedIds.has(f.id)
    ), u = /* @__PURE__ */ new Set();
    for (const f of o)
      if (f.tags)
        for (const w of f.tags)
          u.add(w);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(u)
      }
    });
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-bulk-bar ${i ? "meld-bulk-bar--trash" : ""}`,
      children: [
        /* @__PURE__ */ s.jsxs("span", { className: "meld-bulk-bar__info", children: [
          l,
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
                  Jn,
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
                  jn,
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
              onClick: a,
              children: [
                /* @__PURE__ */ s.jsx(
                  Jt,
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
              className: "meld-bulk-bar__button meld-bulk-bar__button--delete",
              onClick: n,
              children: [
                /* @__PURE__ */ s.jsx(
                  jn,
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
              /* @__PURE__ */ s.jsx(Ee, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
              "Cancel"
            ]
          }
        )
      ]
    }
  );
}, Hc = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: l, dispatch: i } = et(), a = y.useRef(!0);
  y.useEffect(() => () => {
    a.current = !1;
  }, []);
  const o = y.useRef(l.viewerImageId);
  y.useEffect(() => {
    o.current = l.viewerImageId;
  }, [l.viewerImageId]);
  const u = y.useCallback(() => {
    i({ type: "CLOSE_MODAL" });
  }, [i]), f = y.useCallback(
    (h) => {
      if (!a.current) return;
      const v = o.current;
      if (v === null || !h.has(v))
        return;
      const g = l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
        (c) => c.exists !== !1 && !(l.settings["gallery.hide_parent_images"] && c.has_children)
      ), _ = g.findIndex(
        (c) => c.id === v
      );
      if (_ === -1) return;
      let j = !1;
      for (let c = _ + 1; c < g.length; c++)
        if (!h.has(g[c].id)) {
          i({
            type: "OPEN_VIEWER",
            payload: { id: g[c].id, mode: l.viewerMode }
          }), j = !0;
          break;
        }
      if (!j) {
        for (let c = _ - 1; c >= 0; c--)
          if (!h.has(g[c].id)) {
            i({
              type: "OPEN_VIEWER",
              payload: { id: g[c].id, mode: l.viewerMode }
            }), j = !0;
            break;
          }
      }
      j || i({ type: "CLOSE_VIEWER" });
    },
    [
      l.viewerMode,
      l.lineageImages,
      l.images,
      l.settings,
      i
    ]
  );
  y.useEffect(() => {
    const h = (v) => {
      v.key === "Escape" && u();
    };
    return window.addEventListener("keydown", h), () => window.removeEventListener("keydown", h);
  }, [u]);
  const w = async () => {
    try {
      i({ type: "SET_LOADING", payload: !0 });
      const h = l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
        (_) => _.exists !== !1 && !(l.settings["gallery.hide_parent_images"] && _.has_children)
      ), v = new Set(e), g = h.filter(
        (_) => v.has(_.id)
      );
      if (f(v), await aa(e, n), !a.current) return;
      !n && r && r(g), i({ type: "REMOVE_IMAGES", payload: e }), i({ type: "CLEAR_SELECTION" }), i({ type: "CLOSE_MODAL" });
    } catch (h) {
      i({
        type: "SET_ERROR",
        payload: h instanceof Error ? h.message : String(h)
      }), i({ type: "SET_LOADING", payload: !1 });
    }
  }, x = async () => {
    try {
      i({ type: "SET_LOADING", payload: !0 });
      const h = l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
        (_) => _.exists !== !1 && !(l.settings["gallery.hide_parent_images"] && _.has_children)
      ), v = new Set(e);
      for (const _ of e) {
        const j = await ia(_);
        if (!a.current) return;
        for (const c of j)
          v.add(c.id);
      }
      const g = h.filter(
        (_) => v.has(_.id)
      );
      if (f(v), await aa(Array.from(v), n), !a.current) return;
      !n && r && r(g), i({
        type: "REMOVE_IMAGES",
        payload: Array.from(v)
      }), i({ type: "CLEAR_SELECTION" }), i({ type: "CLOSE_MODAL" });
    } catch (h) {
      i({
        type: "SET_ERROR",
        payload: h instanceof Error ? h.message : String(h)
      }), i({ type: "SET_LOADING", payload: !1 });
    }
  };
  return De.createPortal(
    /* @__PURE__ */ s.jsx("div", { className: "meld-modal-overlay", onClick: u, children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-modal-content meld-modal-content--small",
        onClick: (h) => h.stopPropagation(),
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
              /* @__PURE__ */ s.jsx(jn, { size: 20, color: "var(--meld-danger-color)" }),
              n ? "Permanent Deletion" : "Move to Trash"
            ] }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: u,
                children: /* @__PURE__ */ s.jsx(Ee, { size: 20 })
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
                        Zp,
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
                      " or descendants. You can choose to delete just the selected items or all related items in their lineage."
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
                onClick: u,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-danger",
                  onClick: w,
                  children: n ? "Delete Permanently" : "Move to Trash"
                }
              ),
              t && /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-danger",
                  title: n ? "Permanently delete all images in the lineage" : "Move all images in the lineage to trash",
                  onClick: x,
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
}, Se = (e) => {
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
}, Nm = ({ image: e }) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = et(), l = t.selectedIds.has(e.id), a = (t.settings["gallery.view_mode"] || "grid_details") === "grid_only", [o, u] = y.useState(null), [f, w] = y.useState(!1), [x, h] = y.useState(null), [v, g] = y.useState(!1), _ = y.useRef(null), j = async (S, b, m = !1) => {
    try {
      await navigator.clipboard.writeText(S), m ? (g(!0), setTimeout(() => g(!1), 2e3)) : (h(b), setTimeout(() => h(null), 2e3));
    } catch (N) {
      console.error("Failed to copy text: ", N);
    }
  };
  y.useEffect(() => {
    const S = (m) => {
      m.key === "Escape" && (o ? u(null) : w(!1));
    }, b = (m) => {
      _.current && !_.current.contains(m.target) && w(!1);
    };
    return window.addEventListener("keydown", S), f && document.addEventListener("mousedown", b), () => {
      window.removeEventListener("keydown", S), document.removeEventListener("mousedown", b);
    };
  }, [f, o]);
  const c = (S) => {
    const b = t.settings["gallery.lineage_max_depth"];
    if (b === 0) return [];
    if (S.ancestors && S.ancestors.length > 0)
      return S.ancestors.slice(0, b).map((T) => ({
        id: T.id,
        imgSrc: Se(T)
      }));
    const m = S.parent_id;
    if (!m || !S.parent_filename) return [];
    const N = t.images.find((T) => T.id === m);
    let F = null;
    if (N ? F = Se(N) : F = Se({
      filename: S.parent_filename,
      subfolder: S.parent_subfolder || "",
      type: S.parent_type
    }), !F) return [];
    const B = {
      id: m || null,
      imgSrc: F
    };
    if (N && b > 1) {
      const T = c(N);
      return [B, ...T].slice(0, b);
    }
    return [B];
  }, d = c(e), E = t.settings["sidebar.show_filename"] === "filepath" ? `${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, P = Se(e), R = (S) => {
    S.shiftKey ? (S.preventDefault(), S.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : S.ctrlKey || S.metaKey || t.selectedIds.size > 0 ? (S.preventDefault(), S.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
  }, C = (S) => {
    S.shiftKey ? (S.preventDefault(), S.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : S.ctrlKey || S.metaKey || t.selectedIds.size > 0 ? (S.preventDefault(), S.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
  }, I = (S) => {
    (S.shiftKey || S.ctrlKey || S.metaKey || t.selectedIds.size > 0) && S.preventDefault();
  }, U = (S) => {
    (S.key === "Enter" || S.key === " ") && (S.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
  }, M = async () => {
    try {
      const S = await Vp(e.id);
      if (!S.workflow) {
        alert("No workflow information is saved for this image.");
        return;
      }
      await window.app.loadGraphData(
        S.workflow
      ), V.log("Workflow restored successfully from Meld");
    } catch (S) {
      V.error("Error restoring workflow:", S), alert("Failed to restore workflow.");
    }
  }, k = async () => {
    try {
      const S = await Up(e.id), b = "MeldUnifiedLoader", m = window.app, F = window.LiteGraph.createNode(b);
      if (!F) {
        console.error(`Node type ${b} not found.`), alert(
          `Node type ${b} not found. Please make sure the Meld Unified Loader node is installed.`
        );
        return;
      }
      const B = {
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
      if (F.widgets) {
        for (const [Y, q] of Object.entries(B)) {
          const z = S[Y];
          if (z != null) {
            const Q = F.widgets.find(
              (D) => D.name === q
            );
            Q && (Q.value = z);
          }
        }
        const $ = F.widgets.find(
          (Y) => Y.name === "control_after_generate"
        );
        $ && ($.value = "fixed");
      }
      const T = m.canvas.ds.offset, A = m.canvas.ds.scale;
      F.pos = [(-T[0] + 400) / A, (-T[1] + 300) / A], m.graph.add(F), m.canvas.selectNode(F), m.canvas.centerOnNode(F);
    } catch (S) {
      console.error("Error adding Unified Loader:", S), alert("Failed to load settings.");
    }
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-image-card ${l ? "meld-image-card--selected" : ""} ${a ? "meld-image-card--grid-only" : ""}`,
      onClick: C,
      onMouseDown: I,
      onKeyDown: U,
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ s.jsx(
          "img",
          {
            src: P,
            className: "meld-image-card__thumbnail",
            alt: e.filename,
            loading: "lazy",
            onMouseDown: I,
            onClick: (S) => {
              S.stopPropagation(), R(S);
            }
          }
        ) }),
        !a && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__details", children: [
          (t.settings["sidebar.show_filename"] !== "none" || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__filename", children: [
            t.settings["sidebar.show_filename"] !== "none" && E,
            t.settings["sidebar.show_filename"] !== "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
            t.settings["sidebar.show_filename"] === "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
          ] }),
          t.settings["gallery.show_parent_image"] && d.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
            /* @__PURE__ */ s.jsx("div", { className: "meld-lineage-thumbs", children: d.map(
              (S, b) => S.imgSrc && /* @__PURE__ */ s.jsx(
                "img",
                {
                  src: S.imgSrc,
                  className: "meld-lineage-badge__parent-thumb",
                  loading: "lazy",
                  onClick: (m) => {
                    m.stopPropagation(), n({
                      type: "OPEN_VIEWER",
                      payload: {
                        id: S.id || e.id,
                        mode: "lineage"
                      }
                    });
                  },
                  title: b === 0 ? "Source" : b === 1 ? "Grand-Source" : `Ancestor (S${b + 1})`,
                  alt: "source thumb"
                },
                S.id || b
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
                const b = await r(e.id);
                u({
                  title: "Model",
                  text: b.model_name || "-"
                });
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${x === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (S) => {
                      S.stopPropagation();
                      const b = await r(e.id);
                      j(b.model_name || "-", "Model");
                    },
                    children: x === "Model" ? "Copied!" : "Model"
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
                const b = await r(e.id);
                u({
                  title: "Positive Prompt",
                  text: b.positive_prompt || b.positive || "-"
                });
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${x === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (S) => {
                      S.stopPropagation();
                      const b = await r(e.id);
                      j(
                        b.positive_prompt || b.positive || "-",
                        "Positive"
                      );
                    },
                    children: x === "Positive" ? "Copied!" : "Positive"
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
                const b = await r(e.id);
                u({
                  title: "Negative Prompt",
                  text: b.negative_prompt || b.negative || "-"
                });
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${x === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (S) => {
                      S.stopPropagation();
                      const b = await r(e.id);
                      j(
                        b.negative_prompt || b.negative || "-",
                        "Negative"
                      );
                    },
                    children: x === "Negative" ? "Copied!" : "Negative"
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
                S.stopPropagation(), n({
                  type: "OPEN_MODAL",
                  payload: {
                    type: "tag_edit",
                    imageIds: [e.id],
                    tags: e.tags || []
                  }
                });
              },
              children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((S, b) => /* @__PURE__ */ s.jsx(
                  "span",
                  {
                    className: "meld-image-card__tag",
                    children: S
                  },
                  `${S}-${b}`
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
          )
        ] }),
        !a && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__menu-container", ref: _, children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (S) => {
                S.stopPropagation(), w(!f);
              },
              title: "Menu",
              children: /* @__PURE__ */ s.jsx(cm, { size: 16 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (S) => {
                S.stopPropagation(), k();
              },
              title: "Add Unified Loader",
              children: /* @__PURE__ */ s.jsx(wo, { size: 16 })
            }
          ),
          f && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__menu", children: [
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (S) => {
                  S.stopPropagation(), k(), w(!1);
                },
                children: [
                  /* @__PURE__ */ s.jsx(wo, { size: 14 }),
                  /* @__PURE__ */ s.jsx("span", { children: "Add Unified Loader" })
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (S) => {
                  S.stopPropagation(), M(), w(!1);
                },
                children: [
                  /* @__PURE__ */ s.jsx(Jp, { size: 14 }),
                  /* @__PURE__ */ s.jsx("span", { children: "Restore Full Workflow" })
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (S) => {
                  S.stopPropagation(), n({
                    type: "OPEN_MODAL",
                    payload: { type: "parent_selection", imageId: e.id }
                  }), w(!1);
                },
                children: [
                  /* @__PURE__ */ s.jsx(fm, { size: 14 }),
                  /* @__PURE__ */ s.jsx("span", { children: "Add source image" })
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (S) => {
                  S.stopPropagation(), n({
                    type: "OPEN_MODAL",
                    payload: {
                      type: "tag_edit",
                      imageIds: [e.id],
                      tags: e.tags || []
                    }
                  }), w(!1);
                },
                children: [
                  /* @__PURE__ */ s.jsx(Jt, { size: 14 }),
                  /* @__PURE__ */ s.jsx("span", { children: "Edit Tags" })
                ]
              }
            )
          ] })
        ] }),
        o && De.createPortal(
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-prompt-popup-overlay",
              onClick: (S) => {
                S.stopPropagation(), u(null);
              },
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-prompt-popup-content",
                  onClick: (S) => S.stopPropagation(),
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-prompt-popup-header", children: [
                      /* @__PURE__ */ s.jsx("span", { children: o.title }),
                      /* @__PURE__ */ s.jsxs(
                        "div",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            v ? /* @__PURE__ */ s.jsx(
                              Ac,
                              {
                                size: 18,
                                style: { color: "var(--meld-success-color)" }
                              }
                            ) : /* @__PURE__ */ s.jsx(
                              rm,
                              {
                                className: "meld-prompt-popup-copy",
                                size: 18,
                                onClick: () => j(o.text, "", !0)
                              }
                            ),
                            /* @__PURE__ */ s.jsx(
                              Ee,
                              {
                                className: "meld-prompt-popup-close",
                                size: 18,
                                onClick: () => u(null)
                              }
                            )
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-prompt-popup-text", children: o.text })
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
}, Bc = () => {
  const { dispatch: e } = et(), [t, n] = y.useState({
    type: "output",
    subfolder: "",
    custom_path: "",
    recursive: !0,
    auto_link_parent: !0,
    tags: []
  }), [r, l] = y.useState([]), [i, a] = y.useState([]), [o, u] = y.useState(0), [f, w] = y.useState(!1), [x, h] = y.useState([]), [v, g] = y.useState(""), [_, j] = y.useState(!1), [c, d] = y.useState(null);
  y.useEffect(() => {
    (async () => {
      try {
        const S = await xp();
        n((b) => ({ ...b, custom_path: S }));
      } catch (S) {
        V.error("Failed to fetch home directory:", S);
      }
    })();
  }, []), y.useEffect(() => {
    const k = new AbortController();
    return (async () => {
      const b = t.type === "custom" ? t.custom_path : t.subfolder;
      if (V.log(
        `loadFolders started. Path: "${b}", Type: "${t.type}"`
      ), t.type === "custom" && !b) {
        V.log("Custom path is empty, skipping load."), l([]), a([]), u(0);
        return;
      }
      w(!0);
      const m = b, N = t.type;
      try {
        V.log("Step 1: Fast load starting...");
        const F = await Ip(
          t.type,
          b,
          !0,
          k.signal
        );
        if (k.signal.aborted) {
          V.log("Step 1: Aborted.");
          return;
        }
        V.log(
          `Step 1 complete. Found ${F.folders.length} folders, ${F.images.length} images.`
        ), l(F.folders), a(F.images), u(null);
        const B = F.folders.map((T) => T.name);
        B.length > 0 && (V.log(
          `Step 2: Metadata fetch starting for ${B.length} folders...`
        ), Tp(
          N,
          m,
          B,
          k.signal
        ).then((T) => {
          if (k.signal.aborted) {
            V.log("Step 2: Aborted.");
            return;
          }
          V.log("Step 2: Metadata fetch complete."), l(
            (A) => A.map(($) => {
              const Y = T[$.name];
              return Y ? { ...$, count: Y.count, preview: Y.preview } : $;
            })
          );
        }).catch((T) => {
          T.name !== "AbortError" && V.error("Step 2: Metadata fetch failed:", T);
        })), V.log("Step 3: Path image count starting..."), Mp(N, m, k.signal).then((T) => {
          if (k.signal.aborted) {
            V.log("Step 3: Aborted.");
            return;
          }
          V.log(`Step 3: Path image count complete: ${T}`), u(T);
        }).catch((T) => {
          T.name !== "AbortError" && V.error("Step 3: Path image count failed:", T);
        });
      } catch (F) {
        if (F.name === "AbortError") {
          V.log("Request aborted.");
          return;
        }
        V.error("Failed to load folders:", F), l([]), a([]), u(0);
      } finally {
        k.signal.aborted || w(!1);
      }
    })(), () => {
      k.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const p = y.useCallback(async () => {
    j(!0);
    try {
      const k = await ns();
      h(k);
    } catch (k) {
      V.error("Failed to fetch tags:", k);
    } finally {
      j(!1);
    }
  }, []);
  y.useEffect(() => {
    p();
  }, [p]), y.useEffect(() => {
    const k = (S) => {
      S.key === "Escape" && (S.preventDefault(), S.stopImmediatePropagation(), c ? d(null) : e({ type: "CLOSE_MODAL" }));
    };
    return window.addEventListener("keydown", k, { capture: !0 }), () => window.removeEventListener("keydown", k, { capture: !0 });
  }, [c, e]);
  const E = y.useMemo(() => x.filter(
    (k) => k.name.toLowerCase().includes(v.toLowerCase()) && !t.tags.includes(k.name)
  ), [x, v, t.tags]), P = (k) => {
    const S = k.trim();
    S && !t.tags.includes(S) && (n({ ...t, tags: [...t.tags, S] }), g(""));
  }, R = (k) => {
    n({ ...t, tags: t.tags.filter((S) => S !== k) });
  }, C = (k) => {
    k.key === "Enter" && v.trim() && (k.preventDefault(), P(v.trim()));
  }, I = async () => {
    try {
      await Lp(t), e({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !0,
          isFinished: !1,
          shouldCancel: !1,
          newCount: 0,
          progress: { current: 0, total: 0, phase: "registering" }
        }
      }), e({ type: "CLOSE_MODAL" });
    } catch (k) {
      V.error("Failed to start scan:", k), alert(`Failed to start scan: ${k}`);
    }
  }, U = (k) => {
    if (t.type === "custom") {
      const S = t.custom_path.includes("\\") ? "\\" : "/", b = t.custom_path.endsWith(S) ? `${t.custom_path}${k}` : `${t.custom_path}${S}${k}`;
      n({ ...t, custom_path: b });
    } else {
      const S = t.subfolder ? `${t.subfolder}/${k}` : k;
      n({ ...t, subfolder: S });
    }
  }, M = () => {
    if (t.type === "custom") {
      const k = t.custom_path.includes("\\") ? "\\" : "/", S = t.custom_path.split(k);
      if (S.length > 1) {
        S.pop();
        let b = S.join(k);
        b === "" && k === "/" && (b = "/"), n({ ...t, custom_path: b });
      }
    } else {
      const k = t.subfolder.split("/");
      k.pop(), n({ ...t, subfolder: k.join("/") });
    }
  };
  return De.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: () => e({ type: "CLOSE_MODAL" }),
        children: [
          /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--large",
              onClick: (k) => k.stopPropagation(),
              children: [
                /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ s.jsx("h2", { children: "Import Images" }),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => e({ type: "CLOSE_MODAL" }),
                      children: /* @__PURE__ */ s.jsx(Ee, { size: 20 })
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
                          onChange: (k) => n({
                            ...t,
                            type: k.target.value,
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
                          onChange: (k) => n({ ...t, recursive: k.target.checked })
                        }
                      ),
                      "Recursive Scan"
                    ] }) }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ s.jsxs("label", { children: [
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: t.auto_link_parent,
                          onChange: (k) => n({
                            ...t,
                            auto_link_parent: k.target.checked
                          })
                        }
                      ),
                      "Auto Link Parent"
                    ] }) }),
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ s.jsx("label", { htmlFor: "import-tags", children: "Tags to Add" }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((k) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        k,
                        /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => R(k),
                            children: /* @__PURE__ */ s.jsx(Ee, { size: 12 })
                          }
                        )
                      ] }, k)) }),
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ s.jsx(Nn, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ s.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: v,
                            onChange: (k) => g(k.target.value),
                            onKeyDown: C
                          }
                        ),
                        v.trim() && !t.tags.includes(v.trim()) && /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => P(v),
                            children: /* @__PURE__ */ s.jsx(rs, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: _ ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : E.length === 0 ? v && /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        v
                      ] }) : E.map((k) => /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => P(k.name),
                          children: k.name
                        },
                        k.id
                      )) })
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ s.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "meld-btn meld-btn-primary",
                        onClick: I,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ s.jsx(dm, { size: 16 }),
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
                          onClick: M,
                          children: [
                            /* @__PURE__ */ s.jsx($c, { size: 16 }),
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
                          onChange: (k) => n({ ...t, custom_path: k.target.value }),
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
                    /* @__PURE__ */ s.jsx("div", { className: "meld-folder-list", children: f ? /* @__PURE__ */ s.jsx("div", { className: "meld-browser-loading", children: "Loading..." }) : r.length === 0 && i.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-browser-empty", children: "No items found." }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                      r.map((k) => /* @__PURE__ */ s.jsxs(
                        "div",
                        {
                          className: "meld-folder-item",
                          onClick: () => U(k.name),
                          children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-folder-icon-wrapper", children: k.preview ? /* @__PURE__ */ s.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: Se(k.preview),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ s.jsx(im, { size: 16 }) }),
                            /* @__PURE__ */ s.jsx("span", { className: "meld-folder-name", children: k.name }),
                            /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${k.count === null ? "meld-folder-count--loading" : ""}`,
                                children: k.count !== null ? `${k.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ s.jsx(Vc, { size: 14 })
                          ]
                        },
                        k.name
                      )),
                      i.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-browser-image-grid", children: i.map((k) => /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => d(k),
                          children: /* @__PURE__ */ s.jsx(
                            "img",
                            {
                              src: Se(k),
                              alt: k.filename,
                              title: k.filename
                            }
                          )
                        },
                        k.filename
                      )) })
                    ] }) })
                  ] })
                ] }) })
              ]
            }
          ),
          c && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (k) => {
                k.stopPropagation(), d(null);
              },
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-import-preview-content",
                  onClick: (k) => k.stopPropagation(),
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-import-preview-close",
                          onClick: () => d(null),
                          children: /* @__PURE__ */ s.jsx(Ee, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "img",
                        {
                          src: Se(c),
                          alt: c.filename
                        }
                      )
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-import-preview-info", children: c.filename })
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
}, Gc = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = et(), [l, i] = y.useState([]), [a, o] = y.useState(!0), [u, f] = y.useState(!1), w = t.images.find((c) => c.id === e), x = y.useCallback(async () => {
    o(!0);
    try {
      const c = await Np(e);
      i(c);
    } catch (c) {
      console.error("Failed to load suggestions:", c);
    } finally {
      o(!1);
    }
  }, [e]);
  y.useEffect(() => {
    x();
  }, [x]);
  const h = async (c) => {
    try {
      await Cp(e, c), await r(), n({ type: "CLOSE_MODAL" });
    } catch (d) {
      console.error("Failed to link parent:", d);
    }
  }, v = async (c) => {
    o(!0);
    try {
      const d = await jp(c), { id: p } = await zc({
        filename: d.name,
        subfolder: d.subfolder || "",
        type: d.type || "input"
      });
      await h(p);
    } catch (d) {
      console.error("Failed to upload/register image:", d);
    } finally {
      o(!1);
    }
  }, g = (c) => {
    c.preventDefault(), c.stopPropagation(), f(!1);
    const d = c.dataTransfer.files[0];
    d != null && d.type.startsWith("image/") && v(d);
  };
  if (!w) return null;
  const _ = l.filter((c) => c.is_source_match), j = l.filter((c) => !c.is_source_match);
  return De.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: () => n({ type: "CLOSE_MODAL" }),
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (c) => c.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("h2", { children: [
              "Select Source for #",
              w.id
            ] }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: () => n({ type: "CLOSE_MODAL" }),
                children: /* @__PURE__ */ s.jsx(Ee, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: `meld-drop-zone ${u ? "meld-drop-zone--active" : ""}`,
                onDragEnter: (c) => {
                  c.preventDefault(), c.stopPropagation(), f(!0);
                },
                onDragOver: (c) => {
                  c.preventDefault(), c.stopPropagation(), c.dataTransfer.dropEffect = "copy", f(!0);
                },
                onDragLeave: (c) => {
                  c.preventDefault(), c.stopPropagation(), f(!1);
                },
                onDrop: g,
                children: [
                  /* @__PURE__ */ s.jsx(gm, { size: 32 }),
                  /* @__PURE__ */ s.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            a ? /* @__PURE__ */ s.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestions-container", children: [
              _.length > 0 && /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: _.map((c) => /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    className: "meld-suggestion-card",
                    onClick: () => h(c.id),
                    children: [
                      /* @__PURE__ */ s.jsx("img", { src: Se(c), alt: c.filename }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-info", children: /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: c.filename }) })
                    ]
                  },
                  c.id
                )) })
              ] }),
              /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Visual Matches (pHash)" }),
                j.length > 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: j.map((c) => /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    className: "meld-suggestion-card",
                    onClick: () => h(c.id),
                    children: [
                      /* @__PURE__ */ s.jsx("img", { src: Se(c), alt: c.filename }),
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestion-info", children: [
                        /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: c.filename }),
                        /* @__PURE__ */ s.jsxs("span", { className: "meld-suggestion-distance", children: [
                          "Match:",
                          " ",
                          Math.round((64 - c.distance) / 64 * 100),
                          "%"
                        ] })
                      ] })
                    ]
                  },
                  c.id
                )) }) : /* @__PURE__ */ s.jsx("p", { className: "meld-no-suggestions", children: "No visual matches found." })
              ] })
            ] })
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, Kc = () => {
  const { state: e, dispatch: t, updateSetting: n } = et(), [r, l] = y.useState("General"), [i, a] = y.useState({
    ...e.settings
  }), [o, u] = y.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [f, w] = y.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [x, h] = y.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [v, g] = y.useState(e.settings["viewer.thumbnail_window_size"].toString()), [_, j] = y.useState(e.settings["gallery.trash_retention_days"].toString()), [c, d] = y.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [p, E] = y.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    P,
    R
  ] = y.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    C,
    I
  ] = y.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), U = [
    {
      key: "gallery.view_mode",
      label: "Gallery View Mode",
      description: "Choose between standard view with details or grid only view.",
      type: "select",
      category: "General",
      options: [
        { value: "grid_details", label: "Details View" },
        { value: "grid_only", label: "Grid Only View" }
      ]
    },
    {
      key: "gallery.initial_load_count",
      label: "Initial Load Count",
      description: "Number of images to load and display immediately (10-1000).",
      type: "number",
      category: "General",
      min: 10,
      max: 1e3
    },
    {
      key: "gallery.max_load_count",
      label: "Maximum Load Count",
      description: "Maximum number of images to load in the background (10-1000000).",
      type: "number",
      category: "General",
      min: 10,
      max: 1e6
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
      key: "viewer.small_image_mode",
      label: "Small Image Display",
      description: "Choose how to display images smaller than the viewer area.",
      type: "select",
      category: "View",
      options: [
        { value: "original", label: "Original Size" },
        { value: "fit", label: "Fit to Screen" }
      ]
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
      label: "Show Filename/Path",
      description: "Choose how to display the filename or path in the details.",
      type: "select",
      category: "View Details",
      options: [
        { value: "filename", label: "Filename" },
        { value: "filepath", label: "Filepath" },
        { value: "none", label: "None" }
      ]
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
      key: "viewer.details.show_source",
      label: "Show Source",
      description: "Display source image information in the details panel.",
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
      key: "fullscreen.small_image_mode",
      label: "Small Image Display",
      description: "Choose how to display images smaller than the screen in fullscreen.",
      type: "select",
      category: "Full Screen",
      options: [
        { value: "original", label: "Original Size" },
        { value: "fit", label: "Fit to Screen" }
      ]
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
      label: "Show Filename/Path",
      description: "Choose how to display the filename or path in fullscreen details.",
      type: "select",
      category: "Full Screen Detail",
      options: [
        { value: "filename", label: "Filename" },
        { value: "filepath", label: "Filepath" },
        { value: "none", label: "None" }
      ]
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
      key: "fullscreen.details.show_source",
      label: "Show Source",
      description: "Display source image information in fullscreen details.",
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
  ], M = async () => {
    const m = Object.keys(i).filter((N) => i[N] !== e.settings[N]);
    if (m.length > 0)
      for (const N of m)
        await n(N, i[N]);
    t({ type: "CLOSE_MODAL" });
  }, k = (m, N) => {
    a((F) => ({
      ...F,
      [m]: !N
    }));
  }, S = (m, N, F, B) => {
    m === "gallery.initial_load_count" ? u(N) : m === "gallery.max_load_count" ? w(N) : m === "gallery.lineage_max_depth" ? h(N) : m === "viewer.thumbnail_window_size" ? g(N) : m === "gallery.trash_retention_days" ? j(N) : m === "viewer.details.max_positive_prompt_lines" ? d(N) : m === "viewer.details.max_negative_prompt_lines" ? E(N) : m === "fullscreen.details.max_positive_prompt_lines" ? R(N) : m === "fullscreen.details.max_negative_prompt_lines" && I(N);
    const T = Number.parseInt(N, 10);
    if (!Number.isNaN(T)) {
      let A = T;
      F !== void 0 && A < F && (A = F), B !== void 0 && A > B && (A = B), a(($) => ({
        ...$,
        [m]: A
      }));
    }
  }, b = U.filter(
    (m) => m.category === r
  );
  return De.createPortal(
    /* @__PURE__ */ s.jsx("div", { className: "meld-modal-overlay", onClick: M, children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-modal-content meld-settings-modal",
        onClick: (m) => m.stopPropagation(),
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsx("h2", { children: "Settings" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: M,
                children: /* @__PURE__ */ s.jsx(Ee, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-layout", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-tabs", children: [
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "General" ? "active" : ""}`,
                  onClick: () => l("General"),
                  children: "General"
                }
              ),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "Sidebar" ? "active" : ""}`,
                  onClick: () => l("Sidebar"),
                  children: "Sidebar"
                }
              ),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "Search" ? "active" : ""}`,
                  onClick: () => l("Search"),
                  children: "Search"
                }
              ),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "View" ? "active" : ""}`,
                  onClick: () => l("View"),
                  children: "View"
                }
              ),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "View Details" ? "active" : ""}`,
                  onClick: () => l("View Details"),
                  children: "View Details"
                }
              ),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "Full Screen" ? "active" : ""}`,
                  onClick: () => l("Full Screen"),
                  children: "Full Screen"
                }
              ),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "Full Screen Detail" ? "active" : ""}`,
                  onClick: () => l("Full Screen Detail"),
                  children: "Full Screen Detail"
                }
              )
            ] }) }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-settings-list", children: b.map((m) => {
                var N;
                return /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item", children: [
                  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
                    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", children: m.label }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: m.description })
                  ] }),
                  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__control", children: [
                    m.type === "boolean" && /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: !!i[m.key],
                          onChange: () => k(
                            m.key,
                            !!i[m.key]
                          )
                        }
                      ),
                      /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
                    ] }),
                    m.type === "number" && /* @__PURE__ */ s.jsx(
                      "input",
                      {
                        type: "number",
                        className: "meld-number-input",
                        value: m.key === "gallery.initial_load_count" ? o : m.key === "gallery.max_load_count" ? f : m.key === "gallery.lineage_max_depth" ? x : m.key === "viewer.thumbnail_window_size" ? v : m.key === "viewer.details.max_positive_prompt_lines" ? c : m.key === "viewer.details.max_negative_prompt_lines" ? p : m.key === "fullscreen.details.max_positive_prompt_lines" ? P : m.key === "fullscreen.details.max_negative_prompt_lines" ? C : m.key === "gallery.trash_retention_days" ? _ : i[m.key],
                        min: m.min,
                        max: m.max,
                        onChange: (F) => S(
                          m.key,
                          F.target.value,
                          m.min,
                          m.max
                        ),
                        onBlur: () => {
                          m.key === "gallery.initial_load_count" ? u(
                            i["gallery.initial_load_count"].toString()
                          ) : m.key === "gallery.max_load_count" ? w(
                            i["gallery.max_load_count"].toString()
                          ) : m.key === "gallery.lineage_max_depth" ? h(
                            i["gallery.lineage_max_depth"].toString()
                          ) : m.key === "viewer.thumbnail_window_size" ? g(
                            i["viewer.thumbnail_window_size"].toString()
                          ) : m.key === "gallery.trash_retention_days" ? j(
                            i["gallery.trash_retention_days"].toString()
                          ) : m.key === "viewer.details.max_positive_prompt_lines" ? d(
                            i["viewer.details.max_positive_prompt_lines"].toString()
                          ) : m.key === "viewer.details.max_negative_prompt_lines" ? E(
                            i["viewer.details.max_negative_prompt_lines"].toString()
                          ) : m.key === "fullscreen.details.max_positive_prompt_lines" ? R(
                            i["fullscreen.details.max_positive_prompt_lines"].toString()
                          ) : m.key === "fullscreen.details.max_negative_prompt_lines" && I(
                            i["fullscreen.details.max_negative_prompt_lines"].toString()
                          );
                        }
                      }
                    ),
                    m.type === "select" && /* @__PURE__ */ s.jsx(
                      "select",
                      {
                        className: "meld-select",
                        value: i[m.key],
                        onChange: (F) => a((B) => ({
                          ...B,
                          [m.key]: F.target.value
                        })),
                        children: (N = m.options) == null ? void 0 : N.map((F) => /* @__PURE__ */ s.jsx("option", { value: F.value, children: F.label }, F.value))
                      }
                    )
                  ] })
                ] }, m.key);
              }) }),
              r === "General" && /* @__PURE__ */ s.jsx("div", { className: "meld-settings-extra", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item", children: [
                /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
                  /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", children: "Trash Management" }),
                  /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: "View and manage items currently in the trash bin." })
                ] }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__control", children: /* @__PURE__ */ s.jsx(
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
}, Xe = "none", Yc = ({
  imageIds: e,
  initialTags: t,
  onClose: n
}) => {
  const { dispatch: r, refreshImages: l } = et(), [i, a] = y.useState([]), [o, u] = y.useState(t), [f, w] = y.useState(""), [x, h] = y.useState(!0), [v, g] = y.useState(!1), _ = y.useRef(null), j = e.length > 1, c = y.useCallback(async () => {
    h(!0);
    try {
      const C = await ns();
      a(C);
    } catch (C) {
      console.error("Failed to fetch tags:", C);
    } finally {
      h(!1);
    }
  }, []);
  y.useEffect(() => {
    c();
  }, [c]), y.useEffect(() => {
    _.current && _.current.focus();
    const C = (I) => {
      I.key === "Escape" && (I.preventDefault(), I.stopPropagation(), I.stopImmediatePropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    };
    return window.addEventListener("keydown", C, { capture: !0 }), () => window.removeEventListener("keydown", C, {
      capture: !0
    });
  }, [n]);
  const d = y.useMemo(() => i.filter(
    (C) => C.name.toLowerCase().includes(f.toLowerCase()) && !o.includes(C.name)
  ), [i, f, o]), p = (C) => {
    const I = C.trim();
    if (I.toLowerCase() === Xe) {
      alert(
        `Tag name '${Xe}' is reserved for search and cannot be used.`
      );
      return;
    }
    I && !o.includes(I) && (u([...o, I]), w(""));
  }, E = (C) => {
    u(o.filter((I) => I !== C));
  }, P = async () => {
    g(!0);
    try {
      if (j) {
        const C = o.filter((U) => !t.includes(U)), I = t.filter(
          (U) => !o.includes(U)
        );
        await $p(e, C, I);
      } else
        await Ap(e[0], o);
      await l(), r({ type: "CLEAR_SELECTION" }), n();
    } catch (C) {
      console.error("Failed to update tags:", C), alert("Failed to update tags.");
    } finally {
      g(!1);
    }
  }, R = (C) => {
    C.key === "Enter" && f.trim() ? (C.preventDefault(), C.stopPropagation(), p(f.trim())) : C.key === "Escape" && (C.preventDefault(), C.stopPropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
    }));
  };
  return De.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: (C) => {
          C.stopPropagation(), n();
        },
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (C) => C.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(Jt, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: j ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(Ee, { size: 20 }) })
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
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: o.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : o.map((C) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                C,
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => E(C),
                    children: /* @__PURE__ */ s.jsx(Ee, { size: 12 })
                  }
                )
              ] }, C)) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ s.jsx(Nn, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    ref: _,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: f,
                    onChange: (C) => w(C.target.value),
                    onKeyDown: R
                  }
                ),
                f.trim() && !o.includes(f.trim()) && /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => p(f),
                    children: [
                      /* @__PURE__ */ s.jsx(rs, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: x ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : d.length === 0 ? f ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : d.map((C) => /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => p(C.name),
                  children: C.name
                },
                C.id
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
                onClick: P,
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
}, Xc = y.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r
  }) => {
    const l = e.id === t, i = typeof n.parent_id == "number" && n.parent_id === e.id, a = typeof e.parent_id == "number" && e.parent_id === n.id, o = Se(e);
    return /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail-wrapper", children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-viewer-thumbnail ${l ? "meld-viewer-thumbnail--active" : ""} ${i ? "meld-viewer-thumbnail--parent" : ""} ${a ? "meld-viewer-thumbnail--child" : ""}`,
        onClick: () => r({
          type: "OPEN_VIEWER",
          payload: { id: e.id, mode: "gallery" }
          // Default to gallery mode when clicking a thumbnail
        }),
        title: e.filename,
        children: [
          /* @__PURE__ */ s.jsx("img", { src: o, alt: e.filename }),
          (i || a) && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `meld-viewer-thumbnail-relation-icon ${i ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`,
              children: i ? /* @__PURE__ */ s.jsx(Fc, { size: 12 }) : /* @__PURE__ */ s.jsx(Oc, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
Xc.displayName = "ThumbnailItem";
const jm = () => {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = et(), { viewerImageId: l, images: i, viewerMode: a, lineageImages: o } = e, [u, f] = y.useState(!1), [w, x] = y.useState(
    e.settings["viewer.show_details_by_default"]
  ), [h, v] = y.useState(null), g = h ?? e.settings["viewer.show_thumbnails"], [_, j] = y.useState(!1), [c, d] = y.useState(!1), [p, E] = y.useState(null), P = y.useRef(null), R = y.useRef(!0);
  y.useEffect(() => () => {
    R.current = !1;
  }, []);
  const C = y.useRef(l);
  y.useEffect(() => {
    C.current = l;
  }, [l]);
  const I = y.useMemo(() => a === "lineage" ? o : i.filter(
    (z) => z.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && z.has_children)
  ), [a, o, i, e.settings]), U = y.useMemo(() => l === null ? -1 : I.findIndex((z) => z.id === l), [I, l]), M = y.useMemo(() => (a === "lineage" && o.length > 0 ? o : i).find((z) => z.id === l), [a, o, i, l]), k = y.useMemo(() => {
    if (!g || U === -1) return [];
    const z = e.settings["viewer.thumbnail_window_size"], Q = Math.floor(z / 2);
    let D = Math.max(0, U - Q);
    const Z = Math.min(I.length, D + z);
    return Z === I.length && (D = Math.max(0, Z - z)), I.slice(D, Z).map((W, tt) => ({
      img: W,
      absIndex: D + tt
    }));
  }, [
    I,
    U,
    e.settings["viewer.thumbnail_window_size"],
    g
  ]), S = y.useCallback(async () => {
    if (!M) return;
    const z = u ? e.settings["fullscreen.delete_mode"] : e.settings["viewer.delete_mode"];
    if (z === "confirm") {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "delete_confirm",
          imageIds: [M.id],
          hasLineage: !!(M.parent_id || M.has_children),
          isPermanent: e.viewScope === "trash"
        }
      });
      return;
    }
    try {
      const Q = e.viewScope === "trash", D = /* @__PURE__ */ new Set([M.id]);
      if (z === "lineage") {
        const Z = await ia(M.id);
        for (const W of Z)
          D.add(W.id);
      }
      if (!R.current || C.current === null) return;
      if (I.length > D.size) {
        let Z = !1;
        for (let W = U + 1; W < I.length; W++)
          if (!D.has(I[W].id)) {
            t({
              type: "OPEN_VIEWER",
              payload: { id: I[W].id, mode: a }
            }), Z = !0;
            break;
          }
        if (!Z) {
          for (let W = U - 1; W >= 0; W--)
            if (!D.has(I[W].id)) {
              t({
                type: "OPEN_VIEWER",
                payload: { id: I[W].id, mode: a }
              }), Z = !0;
              break;
            }
        }
        Z || t({ type: "CLOSE_VIEWER" });
      } else
        t({ type: "CLOSE_VIEWER" });
      if (await aa(Array.from(D), Q), !Q) {
        const Z = I.filter(
          (W) => D.has(W.id)
        );
        E(Z);
      }
      t({ type: "REMOVE_IMAGES", payload: Array.from(D) });
    } catch (Q) {
      t({
        type: "SET_ERROR",
        payload: Q instanceof Error ? Q.message : String(Q)
      });
    }
  }, [
    M,
    u,
    e.settings,
    e.viewScope,
    I,
    U,
    a,
    t
  ]), b = y.useCallback(() => {
    M && t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: [M.id],
        tags: M.tags || []
      }
    });
  }, [M, t]), m = y.useCallback(async () => {
    const z = u ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"];
    if (U === 0 && a === "gallery" && e.pagination.hasMore && !c && z) {
      d(!0);
      try {
        const Q = e.pagination.limit, D = e.pagination.total, Z = Math.max(0, D - Q), W = await Zr(
          Z,
          Q,
          e.searchQuery
        );
        if (!R.current || (t({ type: "APPEND_IMAGES", payload: W }), C.current === null)) return;
        if (W.images.length > 0) {
          const tt = W.images[W.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: tt.id, mode: "gallery" }
          });
        }
      } catch (Q) {
        console.error("Failed to jump to end:", Q);
      } finally {
        d(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: u } });
  }, [
    U,
    a,
    e.pagination.hasMore,
    e.pagination.total,
    e.pagination.limit,
    e.searchQuery,
    e.settings,
    t,
    c,
    u
  ]), N = y.useCallback(
    (z) => {
      z && "stopPropagation" in z && z.stopPropagation();
      const Q = P.current;
      Q && (document.fullscreenElement ? document.exitFullscreen() : Q.requestFullscreen().catch((D) => {
        console.error(
          `Error attempting to enable full-screen mode: ${D.message}`
        );
      }));
    },
    []
  ), F = y.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: u } });
  }, [t, u]), B = y.useCallback(async () => {
    if (M)
      try {
        const z = M.id;
        I.length > 1 ? F() : t({ type: "CLOSE_VIEWER" }), await sa([z]), t({ type: "REMOVE_IMAGES", payload: [z] });
      } catch (z) {
        t({
          type: "SET_ERROR",
          payload: z instanceof Error ? z.message : String(z)
        });
      }
  }, [M, I.length, F, t]), T = y.useCallback(async () => {
    if (!p || p.length === 0) return;
    const z = p.map((D) => D.id), Q = z[0];
    try {
      if (await sa(z), !R.current || (t({ type: "ADD_IMAGES", payload: p }), E(null), !R.current)) return;
      t({
        type: "OPEN_VIEWER",
        payload: { id: Q, mode: a }
      });
    } catch (D) {
      t({
        type: "SET_ERROR",
        payload: D instanceof Error ? D.message : String(D)
      });
    }
  }, [p, t, a]);
  y.useEffect(() => {
    a !== "gallery" || l === null || e.isLoading || !e.pagination.hasMore || U !== -1 && U >= I.length - 15 && n();
  }, [
    l,
    I.length,
    a,
    e.isLoading,
    e.pagination.hasMore,
    n,
    U
  ]), y.useEffect(() => {
    const z = (D) => {
      var ls, is, as;
      if (l === null) return;
      const Z = ((ls = document.activeElement) == null ? void 0 : ls.tagName) === "INPUT" || ((is = document.activeElement) == null ? void 0 : is.tagName) === "TEXTAREA" || ((as = document.activeElement) == null ? void 0 : as.isContentEditable), W = D.key === "Delete" || D.key === "Backspace", tt = D.key === "ArrowRight" || D.key === "ArrowLeft", nt = D.key === "f" || D.key === "F" || D.key === "i" || D.key === "I" || D.key === "t" || D.key === "T" || D.key === "r" || D.key === "R", $l = D.key === "Escape", Zc = (D.ctrlKey || D.metaKey) && (D.key === "z" || D.key === "Z");
      if (W || tt || nt || $l || Zc)
        if (Z)
          if ($l) {
            if (e.activeModal.type !== "none") {
              D.preventDefault(), D.stopPropagation();
              return;
            }
            D.preventDefault(), D.stopPropagation(), D.stopImmediatePropagation();
          } else
            return;
        else {
          if ($l && e.activeModal.type !== "none") {
            D.preventDefault(), D.stopPropagation();
            return;
          }
          D.preventDefault(), D.stopPropagation(), D.stopImmediatePropagation();
        }
      else
        return;
      D.key === "Escape" ? (e.activeModal.type !== "none" && t({ type: "CLOSE_MODAL" }), document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" })) : D.key === "ArrowRight" ? F() : D.key === "ArrowLeft" ? m() : D.key === "f" || D.key === "F" ? N(D) : D.key === "i" || D.key === "I" ? x((Jc) => !Jc) : D.key === "t" || D.key === "T" ? b() : (D.key === "r" || D.key === "R") && e.viewScope === "trash" ? B() : D.key === "Delete" ? S() : (D.ctrlKey || D.metaKey) && (D.key === "z" || D.key === "Z") && T();
    };
    window.addEventListener("keydown", z, { capture: !0 });
    const Q = () => {
      const D = !!document.fullscreenElement;
      f(D), x(D ? e.settings["fullscreen.show_details_by_default"] : e.settings["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", Q), () => {
      window.removeEventListener("keydown", z, { capture: !0 }), document.removeEventListener("fullscreenchange", Q);
    };
  }, [
    l,
    t,
    N,
    F,
    m,
    e.settings,
    S,
    e.activeModal.type,
    T,
    b,
    B,
    e.viewScope
  ]), y.useEffect(() => {
    l !== null && r(l).catch((z) => {
      console.error("Failed to fetch full image details for viewer:", z);
    });
  }, [l, r]), y.useEffect(() => {
    a === "lineage" && l !== null && o.length === 0 && (j(!0), ia(l).then((z) => {
      t({ type: "SET_LINEAGE", payload: z });
    }).catch((z) => {
      console.error("Failed to fetch lineage:", z);
    }).finally(() => {
      j(!1);
    }));
  }, [a, l, o.length, t]), y.useEffect(() => () => {
    document.fullscreenElement && document.exitFullscreen().catch(() => {
    });
  }, []), y.useEffect(() => {
    var z, Q;
    if (l !== null) {
      if (g) {
        const D = document.querySelector(
          ".meld-viewer-thumbnail--active"
        );
        D && D.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((z = document.activeElement) == null ? void 0 : z.tagName) === "CANVAS" && document.activeElement.blur(), (Q = P.current) == null || Q.focus();
    }
  }, [l, g]), y.useEffect(() => {
    if (l === null || I.length === 0) return;
    const z = I.findIndex(
      (W) => W.id === l
    );
    if (z === -1) return;
    const Q = (W) => Se(W), D = [
      z + 1,
      z + 2,
      z - 1
    ], Z = setTimeout(() => {
      for (const W of D)
        if (W >= 0 && W < I.length) {
          const tt = I[W], nt = new Image();
          nt.src = Q(tt);
        }
    }, 150);
    return () => clearTimeout(Z);
  }, [l, I]);
  const A = y.useCallback(
    (z) => {
      const Q = e.settings["gallery.lineage_max_depth"];
      if (Q === 0) return [];
      if (z.ancestors && z.ancestors.length > 0)
        return z.ancestors.slice(0, Q).map((nt) => ({
          id: nt.id,
          imgSrc: Se(nt)
        }));
      const D = z.parent_id;
      if (!D || !z.parent_filename) return [];
      const Z = i.find((nt) => nt.id === D);
      let W = null;
      if (Z ? W = Se(Z) : W = Se({
        filename: z.parent_filename,
        subfolder: z.parent_subfolder || "",
        type: z.parent_type
      }), !W) return [];
      const tt = {
        id: D || null,
        imgSrc: W
      };
      if (Z && Q > 1) {
        const nt = A(Z);
        return [tt, ...nt].slice(0, Q);
      }
      return [tt];
    },
    [e.settings, i]
  ), $ = y.useMemo(() => M ? A(M) : [], [M, A]);
  if (!M) return null;
  const Y = Se(M), q = u ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return De.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: P,
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
              className: `meld-viewer-content ${u ? "meld-viewer-content--fullscreen" : ""} ${g ? "meld-viewer-content--with-thumbnails" : ""}`,
              onClick: (z) => z.stopPropagation(),
              children: [
                q && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: B,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ s.jsx(Jn, { size: 20 })
                    }
                  ),
                  !u && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => v(!g),
                      type: "button",
                      title: g ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ s.jsx(Uc, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: b,
                      type: "button",
                      title: "Edit Tags (T)",
                      children: /* @__PURE__ */ s.jsx(Jt, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => x(!w),
                      type: "button",
                      title: w ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ s.jsx(am, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: N,
                      type: "button",
                      title: u ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                      children: u ? /* @__PURE__ */ s.jsx(um, { size: 20 }) : /* @__PURE__ */ s.jsx(om, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                      onClick: () => t({ type: "CLOSE_VIEWER" }),
                      type: "button",
                      title: "Close (Esc)",
                      children: /* @__PURE__ */ s.jsx(Ee, { size: 20 })
                    }
                  )
                ] }),
                q && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: m,
                    type: "button",
                    disabled: c,
                    children: /* @__PURE__ */ s.jsx($c, { size: 32 })
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-image-container", children: [
                  c && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ s.jsx(Jn, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ s.jsx(
                    "img",
                    {
                      src: Y,
                      alt: M.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[u ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${c ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                q && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: F,
                    type: "button",
                    children: /* @__PURE__ */ s.jsx(Vc, { size: 32 })
                  }
                ),
                w && /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    className: `meld-viewer-details-overlay ${u ? "meld-viewer-details-overlay--fullscreen" : ""} ${q ? "" : "meld-viewer-details-overlay--no-icons"}`,
                    children: [
                      (u ? e.settings["fullscreen.details.show_filename"] : e.settings["viewer.details.show_filename"]) !== "none" && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: (u ? e.settings["fullscreen.details.show_filename"] : e.settings["viewer.details.show_filename"]) === "filepath" ? "Filepath" : "Filename" }),
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: (u ? e.settings["fullscreen.details.show_filename"] : e.settings["viewer.details.show_filename"]) === "filepath" ? `${M.subfolder ? `${M.subfolder}/` : ""}${M.filename}` : M.filename })
                      ] }),
                      (u ? e.settings["fullscreen.details.show_dimensions"] : e.settings["viewer.details.show_dimensions"]) && M.width && M.height && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Dimensions" }),
                        /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-value", children: [
                          M.width,
                          " x ",
                          M.height,
                          " px"
                        ] })
                      ] }),
                      (u ? e.settings["fullscreen.details.show_created_at"] : e.settings["viewer.details.show_created_at"]) && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Created At" }),
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: new Date(M.created_at * 1e3).toLocaleString() })
                      ] }),
                      M.deleted_at && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Deleted At" }),
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: new Date(M.deleted_at * 1e3).toLocaleString() })
                      ] }),
                      (u ? e.settings["fullscreen.details.show_model_name"] : e.settings["viewer.details.show_model_name"]) && M.model_name && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Model" }),
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: M.model_name })
                      ] }),
                      (u ? e.settings["fullscreen.details.show_source"] : e.settings["viewer.details.show_source"]) && $.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Source" }),
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-tags", children: /* @__PURE__ */ s.jsx("div", { className: "meld-lineage-thumbs", children: $.map(
                          (z, Q) => z.imgSrc && /* @__PURE__ */ s.jsx(
                            "img",
                            {
                              src: z.imgSrc,
                              className: "meld-lineage-badge__parent-thumb",
                              style: { cursor: "pointer" },
                              loading: "lazy",
                              onClick: (D) => {
                                D.stopPropagation(), t({
                                  type: "OPEN_VIEWER",
                                  payload: {
                                    id: z.id || M.id,
                                    mode: "lineage"
                                  }
                                });
                              },
                              title: Q === 0 ? "Source" : Q === 1 ? "Grand-Source" : `Ancestor (S${Q + 1})`,
                              alt: "source thumb"
                            },
                            z.id || Q
                          )
                        ) }) })
                      ] }),
                      (u ? e.settings["fullscreen.details.show_positive_prompt"] : e.settings["viewer.details.show_positive_prompt"]) && (M.positive_prompt || M.positive) && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Positive" }),
                        /* @__PURE__ */ s.jsx(
                          "div",
                          {
                            className: "meld-viewer-details-value meld-viewer-details-value--prompt",
                            style: {
                              "--meld-prompt-max-lines": u ? e.settings["fullscreen.details.max_positive_prompt_lines"] : e.settings["viewer.details.max_positive_prompt_lines"]
                            },
                            children: M.positive_prompt || M.positive
                          }
                        )
                      ] }),
                      (u ? e.settings["fullscreen.details.show_negative_prompt"] : e.settings["viewer.details.show_negative_prompt"]) && (M.negative_prompt || M.negative) && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Negative" }),
                        /* @__PURE__ */ s.jsx(
                          "div",
                          {
                            className: "meld-viewer-details-value meld-viewer-details-value--prompt",
                            style: {
                              "--meld-prompt-max-lines": u ? e.settings["fullscreen.details.max_negative_prompt_lines"] : e.settings["viewer.details.max_negative_prompt_lines"]
                            },
                            children: M.negative_prompt || M.negative
                          }
                        )
                      ] }),
                      (u ? e.settings["fullscreen.details.show_tags"] : e.settings["viewer.details.show_tags"]) && M.tags && M.tags.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Tags" }),
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-tags", children: M.tags.map((z) => /* @__PURE__ */ s.jsx("span", { className: "meld-viewer-details-tag", children: z }, z)) })
                      ] })
                    ]
                  }
                ),
                !u && g && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnails-container", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-thumbnails", children: [
                  _ ? /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      style: {
                        padding: "10px",
                        color: "var(--meld-text-secondary)"
                      },
                      children: "Loading lineage..."
                    }
                  ) : k.map(({ img: z }) => /* @__PURE__ */ s.jsx(
                    Xc,
                    {
                      thumb: z,
                      viewerImageId: l,
                      currentImage: M,
                      dispatch: t
                    },
                    z.id
                  )),
                  a === "gallery" && e.isLoading && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ s.jsx(Jn, { className: "animate-spin", size: 20 }) })
                ] }) })
              ]
            }
          ),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ s.jsx(
            Hc,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: E
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ s.jsx(Gc, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ s.jsx(Bc, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ s.jsx(Kc, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ s.jsx(
            Yc,
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
}, Im = () => {
  const { state: e, dispatch: t } = et(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await Pp(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (o) {
      console.error("Failed to cancel scan:", o);
    }
  }, l = () => {
    t({
      type: "SET_SCAN_STATUS",
      payload: { isFinished: !1, isRunning: !1 }
    });
  }, i = n.progress.phase === "linking", a = i ? 100 : n.progress.total > 0 ? Math.round(
    n.progress.current / n.progress.total * 100
  ) : 0;
  return /* @__PURE__ */ s.jsx("div", { className: "meld-import-progress-sidebar", children: n.isRunning ? /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-progress-compact", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-info", children: [
      /* @__PURE__ */ s.jsx("div", { className: "meld-scan-status-text-compact", children: n.shouldCancel ? /* @__PURE__ */ s.jsx("span", { className: "meld-status-cancelling", children: "Cancelling..." }) : i ? /* @__PURE__ */ s.jsx("span", { children: "Linking..." }) : /* @__PURE__ */ s.jsx("span", { children: "Scanning..." }) }),
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
        style: { width: `${a}%` }
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
        children: /* @__PURE__ */ s.jsx(mm, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ s.jsx(nm, { size: 14, className: "meld-success-icon" }),
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
}, Tm = () => {
  const { state: e, dispatch: t, refreshFavorites: n } = et(), [r, l] = y.useState(e.searchQuery), [i, a] = y.useState([]), [o, u] = y.useState(!1), [f, w] = y.useState([]), [x, h] = y.useState(-1), [v, g] = y.useState(!1), [_, j] = y.useState(null), c = y.useRef(null);
  y.useEffect(() => {
    if (_) {
      const m = setTimeout(() => j(null), 3e3);
      return () => clearTimeout(m);
    }
  }, [_]);
  const d = y.useRef(null), p = y.useRef(e.searchQuery), E = r !== p.current;
  y.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      w([]);
      return;
    }
    !r && !e.searchQuery ? kp().then((m) => {
      w(m);
    }) : w([]);
  }, [
    r,
    e.searchQuery,
    e.settings["search.quick_suggestions"]
  ]), y.useEffect(() => {
    l(e.searchQuery), p.current = e.searchQuery;
  }, [e.searchQuery]), y.useEffect(() => {
    var m;
    (m = c.current) == null || m.focus();
  }, []);
  const P = y.useCallback(
    (m, N = !0) => {
      p.current !== m && (V.log("SearchBar: triggering search", { query: m }), t({ type: "SET_SEARCH_QUERY", payload: m }), N && u(!1), p.current = m);
    },
    [t]
  );
  y.useEffect(() => {
    const m = setTimeout(async () => {
      if (r === p.current)
        return;
      if (!e.settings["search.input_suggest"]) {
        a([]), u(!1);
        return;
      }
      const N = r.split(/\s+/), F = N[N.length - 1];
      if (F) {
        const B = F.match(
          /^[-!]?(tag|pos|neg|model|date|after|before|has_source|has_derivatives|sort):(.*)$/i
        );
        if (B) {
          const T = B[1].toLowerCase(), A = B[2], $ = await Sp(A, T);
          a($), u($.length > 0), h(-1);
        } else
          a([]), u(!1);
      } else
        a([]), u(!1);
    }, 300);
    return () => clearTimeout(m);
  }, [r, e.settings["search.input_suggest"]]);
  const R = (m) => {
    m.key === "Enter" ? P(r) : m.key === "Tab" ? o && x >= 0 && (C(i[x]), m.preventDefault()) : m.key === "ArrowDown" ? o && (h((N) => Math.min(N + 1, i.length - 1)), m.preventDefault()) : m.key === "ArrowUp" ? o && (h((N) => Math.max(N - 1, -1)), m.preventDefault()) : m.key === "Escape" && u(!1);
  }, C = (m) => {
    var z;
    const N = r.split(/\s+/), B = (N.pop() || "").match(/^([-!])/), T = B ? B[1] : "", Y = [
      "date",
      "after",
      "before",
      "has_source",
      "has_derivatives"
    ].includes(m.type) ? m.value : `"${m.value}"`, q = `${[
      ...N,
      `${T}${m.type}:${Y}`
    ].join(" ").trim()} `;
    l(q), a([]), u(!1), (z = c.current) == null || z.focus();
  }, I = () => {
    l(""), P("");
  }, U = async (m, N, F) => {
    m.stopPropagation();
    const B = `Are you sure you want to delete the favorite "${F}"?`;
    if (window.confirm(B))
      try {
        await vo(N), await n();
      } catch (T) {
        V.error("Failed to delete favorite", T);
      }
  }, M = async (m, N, F) => {
    m.stopPropagation();
    const B = window.prompt(
      "Enter a new name for this favorite:",
      F
    );
    if (!(B === null || B === F))
      try {
        await Rp(N, B || F), await n();
      } catch (T) {
        V.error("Failed to rename favorite", T);
      }
  }, k = (m, N) => {
    const T = [
      "date",
      "after",
      "before",
      "has_source",
      "has_derivatives"
    ].includes(m) ? N : `"${N}"`, A = `${m}:${T}`;
    l(A), P(A);
  }, S = async () => {
    if (!e.searchQuery || v) return;
    if (e.favorites.some(
      (N) => N.query === e.searchQuery
    )) {
      const N = e.favorites.find((F) => F.query === e.searchQuery);
      if (N) {
        g(!0);
        try {
          await vo(N.id), await n(), j("Favorite removed.");
        } catch (F) {
          V.error("Failed to delete favorite:", F);
        } finally {
          g(!1);
        }
      }
      return;
    }
    g(!0);
    try {
      await zp(e.searchQuery, e.searchQuery), await n(), j(
        `Favorite added!
You can select favorites when the search query is empty.`
      );
    } catch (N) {
      V.error("Failed to save favorite:", N);
    } finally {
      g(!1);
    }
  }, b = (m) => {
    switch (m) {
      case "tag":
        return /* @__PURE__ */ s.jsx(Jt, { size: 12 });
      case "model":
        return /* @__PURE__ */ s.jsx(em, { size: 12 });
      case "pos":
      case "neg":
        return /* @__PURE__ */ s.jsx(hm, { size: 12 });
      case "date":
      case "after":
      case "before":
        return /* @__PURE__ */ s.jsx(tm, { size: 12 });
      case "has_source":
        return /* @__PURE__ */ s.jsx(Fc, { size: 12 });
      case "has_derivatives":
        return /* @__PURE__ */ s.jsx(Oc, { size: 12 });
      case "sort":
        return /* @__PURE__ */ s.jsx(qp, { size: 12 });
      default:
        return null;
    }
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
              _ && /* @__PURE__ */ s.jsx(
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
                  children: _
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
                        onClick: () => P(r),
                        style: {
                          background: E ? "var(--meld-accent-color, #3b82f6)" : "var(--comfy-input-bg-active, rgba(255,255,255,0.03))",
                          border: E ? "1px solid var(--meld-border-color, rgba(255,255,255,0.2))" : "1px solid transparent",
                          cursor: "pointer",
                          padding: "6px 10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "10px",
                          flexShrink: 0,
                          borderRadius: "4px",
                          transition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                          boxShadow: E ? "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))" : "none"
                        },
                        onMouseEnter: (m) => {
                          m.currentTarget.style.transform = "translateY(-1px)", E ? (m.currentTarget.style.filter = "brightness(1.15)", m.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : m.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                        },
                        onMouseLeave: (m) => {
                          m.currentTarget.style.transform = "none", E ? (m.currentTarget.style.filter = "none", m.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : m.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                        },
                        onMouseDown: (m) => {
                          m.currentTarget.style.transform = "translateY(1px)", m.currentTarget.style.boxShadow = "none";
                        },
                        onMouseUp: (m) => {
                          m.currentTarget.style.transform = "translateY(-1px)";
                        },
                        title: "Search (Enter)",
                        children: [
                          /* @__PURE__ */ s.jsx(
                            Nn,
                            {
                              size: 16,
                              color: E ? "var(--meld-text-color, #fff)" : "var(--meld-text-secondary)",
                              style: {
                                transition: "color 0.2s",
                                filter: E ? "drop-shadow(0 1px 2px var(--meld-shadow-color, rgba(0,0,0,0.2)))" : "none"
                              }
                            }
                          ),
                          E && /* @__PURE__ */ s.jsx(
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
                        ref: c,
                        type: "text",
                        value: r,
                        onChange: (m) => {
                          const N = m.target.value;
                          l(N), N || P("");
                        },
                        onKeyDown: R,
                        onBlur: () => setTimeout(() => u(!1), 200),
                        onFocus: () => {
                          if (r === p.current) return;
                          const m = r.split(/\s+/), N = m[m.length - 1];
                          N != null && N.match(
                            /^[-!]?(tag|pos|neg|model|date|after|before|has_source|has_derivatives|sort):/i
                          ) && u(!0);
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
                    e.searchQuery && /* @__PURE__ */ s.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: S,
                        disabled: v,
                        title: e.favorites.some((m) => m.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                          xo,
                          {
                            size: 16,
                            color: e.favorites.some((m) => m.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((m) => m.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                          }
                        )
                      }
                    ),
                    r && /* @__PURE__ */ s.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: I,
                        style: {
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "2px",
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0
                        },
                        children: /* @__PURE__ */ s.jsx(Ee, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              o && i.length > 0 && /* @__PURE__ */ s.jsx(
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
                  children: i.map((m, N) => /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      onMouseDown: (F) => {
                        F.preventDefault(), C(m);
                      },
                      onMouseEnter: () => h(N),
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 14px",
                        cursor: "pointer",
                        backgroundColor: N === x ? "var(--comfy-menu-bg, #333)" : "transparent",
                        borderBottom: "1px solid var(--comfy-menu-border, #2a2a2a)"
                      },
                      children: /* @__PURE__ */ s.jsxs(
                        "div",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                style: {
                                  color: "var(--meld-text-secondary)",
                                  display: "flex"
                                },
                                children: b(m.type)
                              }
                            ),
                            /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                style: {
                                  color: "var(--comfy-input-text-active, #3b82f6)",
                                  fontSize: "11px",
                                  fontWeight: "bold",
                                  textTransform: "uppercase",
                                  width: "45px"
                                },
                                children: m.type
                              }
                            ),
                            /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                style: {
                                  color: m.value === Xe ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                                  fontSize: "14px",
                                  fontWeight: m.value === Xe ? "bold" : "normal"
                                },
                                children: m.value === Xe ? m.type === "tag" ? `Untagged (${Xe})` : `No ${m.type} (${Xe})` : m.value
                              }
                            )
                          ]
                        }
                      )
                    },
                    `${m.type}:${m.value}`
                  ))
                }
              )
            ]
          }
        ),
        !r && !e.searchQuery && f.length > 0 && /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "meld-search-quick-suggestions",
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              padding: "0 4px"
            },
            children: f.map((m) => /* @__PURE__ */ s.jsxs(
              "button",
              {
                type: "button",
                onClick: () => k(m.type, m.value),
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
                onMouseEnter: (N) => {
                  N.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", N.currentTarget.style.borderColor = "var(--comfy-menu-border, #444)", N.currentTarget.style.color = "var(--meld-text-color)";
                },
                onMouseLeave: (N) => {
                  N.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", N.currentTarget.style.borderColor = "var(--comfy-menu-border, #333)", N.currentTarget.style.color = "var(--meld-text-color)";
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "span",
                    {
                      style: {
                        display: "flex",
                        color: "var(--meld-text-secondary)"
                      },
                      children: b(m.type)
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
                      children: m.type
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "span",
                    {
                      style: {
                        maxWidth: "200px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      },
                      children: m.value
                    }
                  )
                ]
              },
              `${m.type}:${m.value}`
            ))
          }
        ),
        !r && e.favorites.length > 0 && /* @__PURE__ */ s.jsxs(
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
                    /* @__PURE__ */ s.jsx(xo, { size: 12, fill: "var(--meld-text-secondary)" }),
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
                  children: e.favorites.map((m) => /* @__PURE__ */ s.jsxs(
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
                        l(m.query), P(m.query);
                      },
                      onMouseEnter: (N) => {
                        N.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", N.currentTarget.style.borderColor = "var(--meld-accent-color)", N.currentTarget.style.color = "var(--meld-text-color)";
                      },
                      onMouseLeave: (N) => {
                        N.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", N.currentTarget.style.borderColor = "var(--comfy-menu-border, #333)", N.currentTarget.style.color = "var(--meld-text-color)";
                      },
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
                                  children: m.name
                                }
                              ),
                              m.name !== m.query && /* @__PURE__ */ s.jsx(
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
                                  children: m.query
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
                                  onClick: (N) => {
                                    N.stopPropagation(), M(N, m.id, m.name);
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
                                  onMouseEnter: (N) => {
                                    N.currentTarget.style.color = "var(--meld-accent-color)", N.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(68, 136, 255, 0.1))";
                                  },
                                  onMouseLeave: (N) => {
                                    N.currentTarget.style.color = "var(--meld-text-secondary)", N.currentTarget.style.backgroundColor = "transparent";
                                  },
                                  title: "Rename favorite",
                                  children: /* @__PURE__ */ s.jsx(Qc, { size: 14 })
                                }
                              ),
                              /* @__PURE__ */ s.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: (N) => {
                                    N.stopPropagation(), U(N, m.id, m.name);
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
                                  onMouseEnter: (N) => {
                                    N.currentTarget.style.color = "var(--meld-danger-color)", N.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,0,0,0.1))";
                                  },
                                  onMouseLeave: (N) => {
                                    N.currentTarget.style.color = "var(--meld-text-secondary)", N.currentTarget.style.backgroundColor = "transparent";
                                  },
                                  title: "Delete favorite",
                                  children: /* @__PURE__ */ s.jsx(jn, { size: 14 })
                                }
                              )
                            ]
                          }
                        )
                      ]
                    },
                    m.id
                  ))
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Mm = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = y.useState([]), [l, i] = y.useState(!0), [a, o] = y.useState(""), [u, f] = y.useState(""), [w, x] = y.useState(!1), [h, v] = y.useState(null), [g, _] = y.useState(""), [j, c] = y.useState(!1), d = y.useRef(null), p = y.useCallback(async () => {
    i(!0);
    try {
      const k = await ns();
      r(k);
    } catch (k) {
      console.error("Failed to fetch tags:", k);
    } finally {
      i(!1);
    }
  }, []);
  y.useEffect(() => {
    p();
  }, [p]), y.useEffect(() => {
    h !== null && d.current && (d.current.focus(), d.current.select());
  }, [h]);
  const E = async (k) => {
    k.preventDefault();
    const S = u.trim();
    if (!(!S || w)) {
      if (S.toLowerCase() === Xe) {
        alert(
          `Tag name '${Xe}' is reserved for search and cannot be used.`
        );
        return;
      }
      if (n.some((b) => b.name.toLowerCase() === S.toLowerCase())) {
        alert(`Tag "${S}" already exists.`);
        return;
      }
      x(!0);
      try {
        await bp(S), f(""), await p();
      } catch (b) {
        console.error("Failed to add tag:", b);
      } finally {
        x(!1);
      }
    }
  }, P = async (k, S) => {
    if (confirm(`Are you sure you want to delete tag "${S}"?`))
      try {
        await Op(k), await p();
      } catch (b) {
        console.error("Failed to delete tag:", b);
      }
  }, R = (k) => {
    v(k.id), _(k.name);
  }, C = () => {
    v(null), _("");
  }, I = async (k) => {
    k.preventDefault();
    const S = g.trim();
    if (!S || h === null || j) return;
    if (S.toLowerCase() === Xe) {
      alert(
        `Tag name '${Xe}' is reserved for search and cannot be used.`
      );
      return;
    }
    const b = n.find((m) => m.id === h);
    if (b && b.name === S) {
      C();
      return;
    }
    if (n.some(
      (m) => m.id !== h && m.name.toLowerCase() === S.toLowerCase()
    )) {
      alert(`Tag "${S}" already exists.`);
      return;
    }
    c(!0);
    try {
      await Fp(h, S), C(), await p();
    } catch (m) {
      console.error("Failed to rename tag:", m), alert(m instanceof Error ? m.message : "Failed to rename tag");
    } finally {
      c(!1);
    }
  }, U = (k) => {
    t(`tag:${k}`);
  }, M = y.useMemo(() => n.filter(
    (k) => k.name.toLowerCase().includes(a.toLowerCase())
  ), [n, a]);
  return /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(Jt, { size: 16 }),
        /* @__PURE__ */ s.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ s.jsx(Ee, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ s.jsxs("form", { className: "meld-tag-add-form", onSubmit: E, children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: u,
            onChange: (k) => f(k.target.value),
            disabled: w
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !u.trim() || w,
            children: [
              /* @__PURE__ */ s.jsx(rs, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ s.jsx(Nn, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: a,
            onChange: (k) => o(k.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-list", children: M.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : M.map((k) => /* @__PURE__ */ s.jsx("div", { className: "meld-tag-item", children: h === k.id ? /* @__PURE__ */ s.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: I,
          children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "text",
                ref: d,
                className: "meld-tag-rename-input",
                value: g,
                onChange: (S) => _(S.target.value),
                onKeyDown: (S) => S.key === "Escape" && C()
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: j || !g.trim(),
                children: /* @__PURE__ */ s.jsx(Ac, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: C,
                disabled: j,
                children: /* @__PURE__ */ s.jsx(Ee, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("span", { className: "meld-tag-item__name", children: k.name }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => U(k.name),
              children: /* @__PURE__ */ s.jsx(Nn, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => R(k),
              children: /* @__PURE__ */ s.jsx(Qc, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => P(k.id, k.name),
              children: /* @__PURE__ */ s.jsx(jn, { size: 14 })
            }
          )
        ] })
      ] }) }, k.id)) })
    ] })
  ] });
}, Lm = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = et(), [i, a] = y.useState("gallery"), [o, u] = y.useState(""), [f, w] = y.useState(e.pagination.limit);
  y.useEffect(() => {
    w(e.pagination.limit);
  }, [e.searchQuery, e.viewScope, e.pagination.limit]);
  const x = e.searchQuery.trim() !== "", h = y.useRef(null), v = y.useRef(null), g = y.useMemo(
    () => e.images.filter((j) => e.viewScope === "trash" ? j.exists !== !1 || e.settings["gallery.trash.show_missing"] : j.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && j.has_children)),
    [e.images, e.settings, e.viewScope]
  ), _ = y.useMemo(
    () => g.slice(0, f),
    [g, f]
  );
  return y.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && g.length === 0 && (V.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    g.length,
    r
  ]), V.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: g.length,
    visibleCount: _.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), y.useEffect(() => {
    const j = (c) => {
      c.key === "Escape" && (e.activeModal.type !== "none" ? (t({ type: "CLOSE_MODAL" }), c.preventDefault(), c.stopPropagation()) : e.selectedIds.size > 0 && (t({ type: "CLEAR_SELECTION" }), c.preventDefault(), c.stopPropagation()));
    };
    return window.addEventListener("keydown", j), () => window.removeEventListener("keydown", j);
  }, [e.activeModal.type, e.selectedIds.size, t]), y.useEffect(() => {
    const j = new IntersectionObserver(
      (d) => {
        if (d[0].isIntersecting) {
          if (e.isLoading) {
            V.log(
              "GalleryPanel: Intersection observed but already loading"
            );
            return;
          }
          f < g.length ? (V.log(
            "GalleryPanel: Increasing localLimit (local data available)",
            {
              oldLimit: f,
              newLimit: Math.min(
                f + e.pagination.limit,
                g.length
              ),
              totalAvailableLocally: g.length
            }
          ), w((p) => p + e.pagination.limit)) : e.pagination.hasMore ? (V.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : V.log(
            "GalleryPanel: Intersection observed but no more to load",
            {
              localCount: g.length,
              serverHasMore: e.pagination.hasMore
            }
          );
        }
      },
      { threshold: 0, rootMargin: "800px" }
    ), c = h.current;
    return c && j.observe(c), () => {
      c && j.unobserve(c);
    };
  }, [
    r,
    e.isLoading,
    e.pagination.hasMore,
    f,
    g.length,
    e.pagination.limit,
    e.images.length
  ]), y.useEffect(() => {
    const j = e.viewerImageId ?? v.current;
    if (j !== null && g.some((d) => d.id === j)) {
      const d = g.findIndex((E) => E.id === j);
      if (d >= f) {
        w(
          Math.ceil((d + 1) / e.pagination.limit) * e.pagination.limit
        );
        return;
      }
      const p = document.querySelector(
        `[data-image-id="${j}"]`
      );
      p && (p.scrollIntoView({ behavior: "smooth", block: "nearest" }), e.viewerImageId === null && (v.current = null));
    }
    e.viewerImageId !== null && (v.current = e.viewerImageId);
  }, [
    e.viewerImageId,
    g,
    f,
    e.pagination.limit
  ]), /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-gallery ${e.viewScope === "trash" ? "meld-gallery--trash" : ""}`,
      children: [
        /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__header", children: [
          e.viewScope === "trash" ? /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__trash-indicator", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__trash-label", children: [
              /* @__PURE__ */ s.jsx(jn, { size: 14 }),
              /* @__PURE__ */ s.jsx("span", { children: "Trash Bin" })
            ] }),
            /* @__PURE__ */ s.jsxs("label", { className: "meld-gallery__trash-toggle", children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.settings["gallery.trash.show_missing"] || !1,
                  onChange: (j) => l("gallery.trash.show_missing", j.target.checked)
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
                  /* @__PURE__ */ s.jsx(Ee, { size: 14 }),
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
                  i === "search" ? (u(e.searchQuery), e.searchQuery && t({ type: "SET_SEARCH_QUERY", payload: "" }), a("gallery")) : (!e.searchQuery && o && t({
                    type: "SET_SEARCH_QUERY",
                    payload: o
                  }), a("search"));
                },
                style: {
                  background: "none",
                  border: "none",
                  color: x ? "var(--meld-success-color)" : i === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: x ? "bold" : "normal"
                },
                title: "Search",
                children: /* @__PURE__ */ s.jsx(Nn, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  const c = (e.settings["gallery.view_mode"] || "grid_details") === "grid_details" ? "grid_only" : "grid_details";
                  l("gallery.view_mode", c);
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ s.jsx(sm, { size: 14 }) : /* @__PURE__ */ s.jsx(Uc, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => a(i === "tags" ? "gallery" : "tags"),
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
                children: /* @__PURE__ */ s.jsx(Jt, { size: 14 })
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
                children: /* @__PURE__ */ s.jsx(lm, { size: 14 })
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
                  Jn,
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
                children: /* @__PURE__ */ s.jsx(pm, { size: 14 })
              }
            )
          ] }),
          i === "search" && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ s.jsx(Tm, {}) })
        ] }),
        /* @__PURE__ */ s.jsx(Im, {}),
        e.error && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__error", children: e.error }),
        i === "tags" ? /* @__PURE__ */ s.jsx(
          Mm,
          {
            onClose: () => a("gallery"),
            onSearch: (j) => {
              t({ type: "SET_SEARCH_QUERY", payload: j }), a("search");
            }
          }
        ) : e.isLoading && g.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : _.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `meld-gallery__list ${e.settings["gallery.view_mode"] === "grid_only" ? "meld-gallery__list--grid-only" : ""}`,
              children: _.map((j) => /* @__PURE__ */ s.jsx("div", { "data-image-id": j.id, children: /* @__PURE__ */ s.jsx(Em, { height: 150, children: /* @__PURE__ */ s.jsx(Nm, { image: j }) }) }, j.id))
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "div",
            {
              ref: h,
              className: "meld-gallery__load-more",
              style: { height: "20px", margin: "20px 0", textAlign: "center" },
              children: [
                e.isLoading && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
                f >= g.length && !e.pagination.hasMore && _.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ s.jsx(Cm, {}),
        e.viewerImageId !== null && /* @__PURE__ */ s.jsx(jm, {}),
        e.viewerImageId === null && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          e.activeModal.type === "parent_selection" && De.createPortal(
            /* @__PURE__ */ s.jsx(Gc, { imageId: e.activeModal.imageId }),
            document.body
          ),
          e.activeModal.type === "import" && De.createPortal(/* @__PURE__ */ s.jsx(Bc, {}), document.body),
          e.activeModal.type === "settings" && De.createPortal(/* @__PURE__ */ s.jsx(Kc, {}), document.body),
          e.activeModal.type === "tag_edit" && De.createPortal(
            /* @__PURE__ */ s.jsx(
              Yc,
              {
                imageIds: e.activeModal.imageIds,
                initialTags: e.activeModal.tags,
                onClose: () => t({ type: "CLOSE_MODAL" })
              }
            ),
            document.body
          ),
          e.activeModal.type === "delete_confirm" && De.createPortal(
            /* @__PURE__ */ s.jsx(
              Hc,
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
_o.registerExtension({
  name: "Meld.UnifiedLoader",
  async beforeRegisterNodeDef(e, t, n) {
    t.name;
  },
  async nodeCreated(e) {
    if (e.comfyClass !== "MeldUnifiedLoader") return;
    const t = () => {
      var l, i;
      const n = (l = e.widgets) == null ? void 0 : l.find((a) => a.name === "positive"), r = (i = e.widgets) == null ? void 0 : i.find((a) => a.name === "negative");
      n && n.inputEl && (n.inputEl.style.borderLeft = "4px solid var(--comfy-input-text-active, #44bb44)", n.inputEl.style.paddingLeft = "8px"), r && r.inputEl && (r.inputEl.style.borderLeft = "4px solid var(--error-color, #ff4444)", r.inputEl.style.paddingLeft = "8px");
    };
    t(), setTimeout(t, 1), setTimeout(t, 100);
  }
});
const Al = document.createElement("link");
Al.rel = "stylesheet";
Al.type = "text/css";
Al.href = "/extensions/ComfyUI-Meld/js/style.css";
document.head.appendChild(Al);
let Fr = null, Be = null;
_o.registerExtension({
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
      const n = await Dc();
      V.init(n.dev_mode), V.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld] Failed to fetch settings", n), V.init(!1);
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
      }, G.addEventListener("meld-image-saved", () => {
        var n;
        (n = e.ui.meld) == null || n.refresh();
      }), G.addEventListener("meld-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-scan-progress", { detail: n.detail })
        );
      }), G.addEventListener("meld-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-scan-finished", { detail: n.detail })
        ), (r = e.ui.meld) == null || r.refresh(), V.log("Import completed.");
      }), G.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const l of n.output.images)
              if (l.type === "output")
                try {
                  await zc({
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
            V.log("render called", {
              el: n,
              galleryRoot: Fr,
              galleryContainer: Be
            }), Be || (V.log("galleryContainer not found, creating new one"), Be = document.createElement("div"), Be.id = "meld-gallery-container", Be.style.height = "100%", Be.style.width = "100%", Be.style.display = "flex", Be.style.flexDirection = "column"), n.contains(Be) || (V.log("Appending galleryContainer to el"), n.appendChild(Be)), Fr ? V.log(
              "[Meld] Gallery root already exists, React should handle re-render if needed"
            ) : (V.log("Creating new gallery root"), Fr = Pc(Be), Fr.render(
              cs.createElement(
                km,
                null,
                cs.createElement(Lm)
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
