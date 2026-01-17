import { api as B } from "../../../scripts/api.js";
import { app as xo } from "../../../scripts/app.js";
function qc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var So = { exports: {} }, G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gr = Symbol.for("react.element"), ed = Symbol.for("react.portal"), td = Symbol.for("react.fragment"), nd = Symbol.for("react.strict_mode"), rd = Symbol.for("react.profiler"), ld = Symbol.for("react.provider"), id = Symbol.for("react.context"), sd = Symbol.for("react.forward_ref"), ad = Symbol.for("react.suspense"), od = Symbol.for("react.memo"), ud = Symbol.for("react.lazy"), aa = Symbol.iterator;
function cd(e) {
  return e === null || typeof e != "object" ? null : (e = aa && e[aa] || e["@@iterator"], typeof e == "function" ? e : null);
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
function os(e, t, n) {
  this.props = e, this.context = t, this.refs = Co, this.updater = n || ko;
}
var us = os.prototype = new No();
us.constructor = os;
Eo(us, In.prototype);
us.isPureReactComponent = !0;
var oa = Array.isArray, jo = Object.prototype.hasOwnProperty, cs = { current: null }, Io = { key: !0, ref: !0, __self: !0, __source: !0 };
function To(e, t, n) {
  var r, l = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) jo.call(t, r) && !Io.hasOwnProperty(r) && (l[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = n;
  else if (1 < o) {
    for (var u = Array(o), f = 0; f < o; f++) u[f] = arguments[f + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in o = e.defaultProps, o) l[r] === void 0 && (l[r] = o[r]);
  return { $$typeof: gr, type: e, key: i, ref: s, props: l, _owner: cs.current };
}
function dd(e, t) {
  return { $$typeof: gr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ds(e) {
  return typeof e == "object" && e !== null && e.$$typeof === gr;
}
function fd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var ua = /\/+/g;
function Vl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? fd("" + e.key) : t.toString(36);
}
function Ar(e, t, n, r, l) {
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
        case gr:
        case ed:
          s = !0;
      }
  }
  if (s) return s = e, l = l(s), e = r === "" ? "." + Vl(s, 0) : r, oa(l) ? (n = "", e != null && (n = e.replace(ua, "$&/") + "/"), Ar(l, t, n, "", function(f) {
    return f;
  })) : l != null && (ds(l) && (l = dd(l, n + (!l.key || s && s.key === l.key ? "" : ("" + l.key).replace(ua, "$&/") + "/") + e)), t.push(l)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", oa(e)) for (var o = 0; o < e.length; o++) {
    i = e[o];
    var u = r + Vl(i, o);
    s += Ar(i, t, n, u, l);
  }
  else if (u = cd(e), typeof u == "function") for (e = u.call(e), o = 0; !(i = e.next()).done; ) i = i.value, u = r + Vl(i, o++), s += Ar(i, t, n, u, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function xr(e, t, n) {
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
var Ce = { current: null }, $r = { transition: null }, md = { ReactCurrentDispatcher: Ce, ReactCurrentBatchConfig: $r, ReactCurrentOwner: cs };
function Mo() {
  throw Error("act(...) is not supported in production builds of React.");
}
G.Children = { map: xr, forEach: function(e, t, n) {
  xr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return xr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return xr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ds(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
G.Component = In;
G.Fragment = td;
G.Profiler = rd;
G.PureComponent = os;
G.StrictMode = nd;
G.Suspense = ad;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = md;
G.act = Mo;
G.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Eo({}, e.props), l = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = cs.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
    for (u in t) jo.call(t, u) && !Io.hasOwnProperty(u) && (r[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    o = Array(u);
    for (var f = 0; f < u; f++) o[f] = arguments[f + 2];
    r.children = o;
  }
  return { $$typeof: gr, type: e.type, key: l, ref: i, props: r, _owner: s };
};
G.createContext = function(e) {
  return e = { $$typeof: id, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: ld, _context: e }, e.Consumer = e;
};
G.createElement = To;
G.createFactory = function(e) {
  var t = To.bind(null, e);
  return t.type = e, t;
};
G.createRef = function() {
  return { current: null };
};
G.forwardRef = function(e) {
  return { $$typeof: sd, render: e };
};
G.isValidElement = ds;
G.lazy = function(e) {
  return { $$typeof: ud, _payload: { _status: -1, _result: e }, _init: pd };
};
G.memo = function(e, t) {
  return { $$typeof: od, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function(e) {
  var t = $r.transition;
  $r.transition = {};
  try {
    e();
  } finally {
    $r.transition = t;
  }
};
G.unstable_act = Mo;
G.useCallback = function(e, t) {
  return Ce.current.useCallback(e, t);
};
G.useContext = function(e) {
  return Ce.current.useContext(e);
};
G.useDebugValue = function() {
};
G.useDeferredValue = function(e) {
  return Ce.current.useDeferredValue(e);
};
G.useEffect = function(e, t) {
  return Ce.current.useEffect(e, t);
};
G.useId = function() {
  return Ce.current.useId();
};
G.useImperativeHandle = function(e, t, n) {
  return Ce.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function(e, t) {
  return Ce.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function(e, t) {
  return Ce.current.useLayoutEffect(e, t);
};
G.useMemo = function(e, t) {
  return Ce.current.useMemo(e, t);
};
G.useReducer = function(e, t, n) {
  return Ce.current.useReducer(e, t, n);
};
G.useRef = function(e) {
  return Ce.current.useRef(e);
};
G.useState = function(e) {
  return Ce.current.useState(e);
};
G.useSyncExternalStore = function(e, t, n) {
  return Ce.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function() {
  return Ce.current.useTransition();
};
G.version = "18.3.1";
So.exports = G;
var y = So.exports;
const ca = /* @__PURE__ */ qc(y);
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
  function t(h, z) {
    var F = h.length;
    h.push(z);
    e: for (; 0 < F; ) {
      var H = F - 1 >>> 1, Z = h[H];
      if (0 < l(Z, z)) h[H] = z, h[F] = Z, F = H;
      else break e;
    }
  }
  function n(h) {
    return h.length === 0 ? null : h[0];
  }
  function r(h) {
    if (h.length === 0) return null;
    var z = h[0], F = h.pop();
    if (F !== z) {
      h[0] = F;
      e: for (var H = 0, Z = h.length, R = Z >>> 1; H < R; ) {
        var U = 2 * (H + 1) - 1, D = h[U], J = U + 1, W = h[J];
        if (0 > l(D, F)) J < Z && 0 > l(W, D) ? (h[H] = W, h[J] = F, H = J) : (h[H] = D, h[U] = F, H = U);
        else if (J < Z && 0 > l(W, F)) h[H] = W, h[J] = F, H = J;
        else break e;
      }
    }
    return z;
  }
  function l(h, z) {
    var F = h.sortIndex - z.sortIndex;
    return F !== 0 ? F : h.id - z.id;
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
  var u = [], f = [], _ = 1, x = null, m = 3, w = !1, g = !1, S = !1, j = typeof setTimeout == "function" ? setTimeout : null, c = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(h) {
    for (var z = n(f); z !== null; ) {
      if (z.callback === null) r(f);
      else if (z.startTime <= h) r(f), z.sortIndex = z.expirationTime, t(u, z);
      else break;
      z = n(f);
    }
  }
  function C(h) {
    if (S = !1, p(h), !g) if (n(u) !== null) g = !0, V(L);
    else {
      var z = n(f);
      z !== null && X(C, z.startTime - h);
    }
  }
  function L(h, z) {
    g = !1, S && (S = !1, c(I), I = -1), w = !0;
    var F = m;
    try {
      for (p(z), x = n(u); x !== null && (!(x.expirationTime > z) || h && !k()); ) {
        var H = x.callback;
        if (typeof H == "function") {
          x.callback = null, m = x.priorityLevel;
          var Z = H(x.expirationTime <= z);
          z = e.unstable_now(), typeof Z == "function" ? x.callback = Z : x === n(u) && r(u), p(z);
        } else r(u);
        x = n(u);
      }
      if (x !== null) var R = !0;
      else {
        var U = n(f);
        U !== null && X(C, U.startTime - z), R = !1;
      }
      return R;
    } finally {
      x = null, m = F, w = !1;
    }
  }
  var O = !1, N = null, I = -1, Q = 5, T = -1;
  function k() {
    return !(e.unstable_now() - T < Q);
  }
  function v() {
    if (N !== null) {
      var h = e.unstable_now();
      T = h;
      var z = !0;
      try {
        z = N(!0, h);
      } finally {
        z ? b() : (O = !1, N = null);
      }
    } else O = !1;
  }
  var b;
  if (typeof d == "function") b = function() {
    d(v);
  };
  else if (typeof MessageChannel < "u") {
    var E = new MessageChannel(), P = E.port2;
    E.port1.onmessage = v, b = function() {
      P.postMessage(null);
    };
  } else b = function() {
    j(v, 0);
  };
  function V(h) {
    N = h, O || (O = !0, b());
  }
  function X(h, z) {
    I = j(function() {
      h(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(h) {
    h.callback = null;
  }, e.unstable_continueExecution = function() {
    g || w || (g = !0, V(L));
  }, e.unstable_forceFrameRate = function(h) {
    0 > h || 125 < h ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Q = 0 < h ? Math.floor(1e3 / h) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(h) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var z = 3;
        break;
      default:
        z = m;
    }
    var F = m;
    m = z;
    try {
      return h();
    } finally {
      m = F;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(h, z) {
    switch (h) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        h = 3;
    }
    var F = m;
    m = h;
    try {
      return z();
    } finally {
      m = F;
    }
  }, e.unstable_scheduleCallback = function(h, z, F) {
    var H = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? H + F : H) : F = H, h) {
      case 1:
        var Z = -1;
        break;
      case 2:
        Z = 250;
        break;
      case 5:
        Z = 1073741823;
        break;
      case 4:
        Z = 1e4;
        break;
      default:
        Z = 5e3;
    }
    return Z = F + Z, h = { id: _++, callback: z, priorityLevel: h, startTime: F, expirationTime: Z, sortIndex: -1 }, F > H ? (h.sortIndex = F, t(f, h), n(u) === null && h === n(f) && (S ? (c(I), I = -1) : S = !0, X(C, F - H))) : (h.sortIndex = Z, t(u, h), g || w || (g = !0, V(L))), h;
  }, e.unstable_shouldYield = k, e.unstable_wrapCallback = function(h) {
    var z = m;
    return function() {
      var F = m;
      m = z;
      try {
        return h.apply(this, arguments);
      } finally {
        m = F;
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
function M(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ro = /* @__PURE__ */ new Set(), qn = {};
function Xt(e, t) {
  wn(e, t), wn(e + "Capture", t);
}
function wn(e, t) {
  for (qn[e] = t, e = 0; e < t.length; e++) Ro.add(t[e]);
}
var pt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), pi = Object.prototype.hasOwnProperty, yd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, da = {}, fa = {};
function vd(e) {
  return pi.call(fa, e) ? !0 : pi.call(da, e) ? !1 : yd.test(e) ? fa[e] = !0 : (da[e] = !0, !1);
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
function _d(e, t, n, r) {
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
function Ne(e, t, n, r, l, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
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
var fs = /[\-:]([a-z])/g;
function ps(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    fs,
    ps
  );
  ge[t] = new Ne(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(fs, ps);
  ge[t] = new Ne(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(fs, ps);
  ge[t] = new Ne(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ge[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ge.xlinkHref = new Ne("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ge[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ms(e, t, n, r) {
  var l = ge.hasOwnProperty(t) ? ge[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (_d(t, n, l, r) && (n = null), r || l === null ? vd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var yt = gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Sr = Symbol.for("react.element"), en = Symbol.for("react.portal"), tn = Symbol.for("react.fragment"), hs = Symbol.for("react.strict_mode"), mi = Symbol.for("react.profiler"), zo = Symbol.for("react.provider"), bo = Symbol.for("react.context"), gs = Symbol.for("react.forward_ref"), hi = Symbol.for("react.suspense"), gi = Symbol.for("react.suspense_list"), ys = Symbol.for("react.memo"), wt = Symbol.for("react.lazy"), Oo = Symbol.for("react.offscreen"), pa = Symbol.iterator;
function Ln(e) {
  return e === null || typeof e != "object" ? null : (e = pa && e[pa] || e["@@iterator"], typeof e == "function" ? e : null);
}
var se = Object.assign, Ul;
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
    Ql = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? An(e) : "";
}
function xd(e) {
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
    case hs:
      return "StrictMode";
    case hi:
      return "Suspense";
    case gi:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case bo:
      return (e.displayName || "Context") + ".Consumer";
    case zo:
      return (e._context.displayName || "Context") + ".Provider";
    case gs:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ys:
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
      return t === hs ? "StrictMode" : "Mode";
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
function Zr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function vi(e, t) {
  var n = t.checked;
  return se({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ma(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Dt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function $o(e, t) {
  t = t.checked, t != null && ms(e, "checked", t, !1);
}
function wi(e, t) {
  $o(e, t);
  var n = Dt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? _i(e, t.type, n) : t.hasOwnProperty("defaultValue") && _i(e, t.type, Dt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ha(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function _i(e, t, n) {
  (t !== "number" || Zr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
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
function xi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
  return se({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ga(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(M(92));
      if ($n(n)) {
        if (1 < n.length) throw Error(M(93));
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
function ya(e) {
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
var Cd = se({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ki(e, t) {
  if (t) {
    if (Cd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(M(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(M(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(M(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(M(62));
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
function vs(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ni = null, mn = null, hn = null;
function va(e) {
  if (e = wr(e)) {
    if (typeof Ni != "function") throw Error(M(280));
    var t = e.stateNode;
    t && (t = jl(t), Ni(e.stateNode, e.type, t));
  }
}
function Go(e) {
  mn ? hn ? hn.push(e) : hn = [e] : mn = e;
}
function Bo() {
  if (mn) {
    var e = mn, t = hn;
    if (hn = mn = null, va(e), t) for (e = 0; e < t.length; e++) va(t[e]);
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
    Hl = !1, (mn !== null || hn !== null) && (Yo(), Bo());
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
  if (n && typeof n != "function") throw Error(M(231, t, typeof n));
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
function Nd(e, t, n, r, l, i, s, o, u) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (_) {
    this.onError(_);
  }
}
var Wn = !1, qr = null, el = !1, Ii = null, jd = { onError: function(e) {
  Wn = !0, qr = e;
} };
function Id(e, t, n, r, l, i, s, o, u) {
  Wn = !1, qr = null, Nd.apply(jd, arguments);
}
function Td(e, t, n, r, l, i, s, o, u) {
  if (Id.apply(this, arguments), Wn) {
    if (Wn) {
      var f = qr;
      Wn = !1, qr = null;
    } else throw Error(M(198));
    el || (el = !0, Ii = f);
  }
}
function Jt(e) {
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
function Jo(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function wa(e) {
  if (Jt(e) !== e) throw Error(M(188));
}
function Md(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Jt(e), t === null) throw Error(M(188));
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
        if (i === n) return wa(l), e;
        if (i === r) return wa(l), t;
        i = i.sibling;
      }
      throw Error(M(188));
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
        if (!s) throw Error(M(189));
      }
    }
    if (n.alternate !== r) throw Error(M(190));
  }
  if (n.tag !== 3) throw Error(M(188));
  return n.stateNode.current === n ? e : t;
}
function Zo(e) {
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
var eu = be.unstable_scheduleCallback, _a = be.unstable_cancelCallback, Ld = be.unstable_shouldYield, Pd = be.unstable_requestPaint, oe = be.unstable_now, Dd = be.unstable_getCurrentPriorityLevel, ws = be.unstable_ImmediatePriority, tu = be.unstable_UserBlockingPriority, tl = be.unstable_NormalPriority, Rd = be.unstable_LowPriority, nu = be.unstable_IdlePriority, kl = null, st = null;
function zd(e) {
  if (st && typeof st.onCommitFiberRoot == "function") try {
    st.onCommitFiberRoot(kl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Je = Math.clz32 ? Math.clz32 : Fd, bd = Math.log, Od = Math.LN2;
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
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var o = s & ~l;
    o !== 0 ? r = Vn(o) : (i &= s, i !== 0 && (r = Vn(i)));
  } else s = n & ~l, s !== 0 ? r = Vn(s) : i !== 0 && (r = Vn(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Je(t), l = 1 << n, r |= e[n], t &= ~l;
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
    var s = 31 - Je(i), o = 1 << s, u = l[s];
    u === -1 ? (!(o & n) || o & r) && (l[s] = Ad(o, t)) : u <= t && (e.expiredLanes |= o), i &= ~o;
  }
}
function Ti(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function ru() {
  var e = Cr;
  return Cr <<= 1, !(Cr & 4194240) && (Cr = 64), e;
}
function Gl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function yr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Je(t), e[t] = n;
}
function Vd(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Je(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function _s(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Je(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var q = 0;
function lu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var iu, xs, su, au, ou, Mi = !1, jr = [], Ct = null, Nt = null, jt = null, nr = /* @__PURE__ */ new Map(), rr = /* @__PURE__ */ new Map(), xt = [], Ud = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function xa(e, t) {
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
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = wr(t), t !== null && xs(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
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
    var n = Jt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Jo(n), t !== null) {
          e.blockedOn = t, ou(e.priority, function() {
            su(n);
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
    } else return t = wr(n), t !== null && xs(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Sa(e, t, n) {
  Vr(e) && n.delete(t);
}
function Wd() {
  Mi = !1, Ct !== null && Vr(Ct) && (Ct = null), Nt !== null && Vr(Nt) && (Nt = null), jt !== null && Vr(jt) && (jt = null), nr.forEach(Sa), rr.forEach(Sa);
}
function Rn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Mi || (Mi = !0, be.unstable_scheduleCallback(be.unstable_NormalPriority, Wd)));
}
function lr(e) {
  function t(l) {
    return Rn(l, e);
  }
  if (0 < jr.length) {
    Rn(jr[0], e);
    for (var n = 1; n < jr.length; n++) {
      var r = jr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Ct !== null && Rn(Ct, e), Nt !== null && Rn(Nt, e), jt !== null && Rn(jt, e), nr.forEach(t), rr.forEach(t), n = 0; n < xt.length; n++) r = xt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < xt.length && (n = xt[0], n.blockedOn === null); ) uu(n), n.blockedOn === null && xt.shift();
}
var gn = yt.ReactCurrentBatchConfig, rl = !0;
function Hd(e, t, n, r) {
  var l = q, i = gn.transition;
  gn.transition = null;
  try {
    q = 1, Ss(e, t, n, r);
  } finally {
    q = l, gn.transition = i;
  }
}
function Gd(e, t, n, r) {
  var l = q, i = gn.transition;
  gn.transition = null;
  try {
    q = 4, Ss(e, t, n, r);
  } finally {
    q = l, gn.transition = i;
  }
}
function Ss(e, t, n, r) {
  if (rl) {
    var l = Li(e, t, n, r);
    if (l === null) ni(e, t, r, ll, n), xa(e, r);
    else if (Qd(l, e, t, n, r)) r.stopPropagation();
    else if (xa(e, r), t & 4 && -1 < Ud.indexOf(e)) {
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
  if (ll = null, e = vs(r), e = $t(e), e !== null) if (t = Jt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Jo(t), e !== null) return e;
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
        case ws:
          return 1;
        case tu:
          return 4;
        case tl:
        case Rd:
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
var kt = null, ks = null, Ur = null;
function du() {
  if (Ur) return Ur;
  var e, t = ks, n = t.length, r, l = "value" in kt ? kt.value : kt.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === l[i - r]; r++) ;
  return Ur = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Qr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Ir() {
  return !0;
}
function ka() {
  return !1;
}
function Fe(e) {
  function t(n, r, l, i, s) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var o in e) e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(i) : i[o]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ir : ka, this.isPropagationStopped = ka, this;
  }
  return se(t.prototype, { preventDefault: function() {
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
}, defaultPrevented: 0, isTrusted: 0 }, Es = Fe(Tn), vr = se({}, Tn, { view: 0, detail: 0 }), Bd = Fe(vr), Bl, Kl, zn, El = se({}, vr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Cs, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== zn && (zn && e.type === "mousemove" ? (Bl = e.screenX - zn.screenX, Kl = e.screenY - zn.screenY) : Kl = Bl = 0, zn = e), Bl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Kl;
} }), Ea = Fe(El), Kd = se({}, El, { dataTransfer: 0 }), Yd = Fe(Kd), Xd = se({}, vr, { relatedTarget: 0 }), Yl = Fe(Xd), Jd = se({}, Tn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Zd = Fe(Jd), qd = se({}, Tn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), ef = Fe(qd), tf = se({}, Tn, { data: 0 }), Ca = Fe(tf), nf = {
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
function sf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = lf[e]) ? !!t[e] : !1;
}
function Cs() {
  return sf;
}
var af = se({}, vr, { key: function(e) {
  if (e.key) {
    var t = nf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Qr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? rf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Cs, charCode: function(e) {
  return e.type === "keypress" ? Qr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Qr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), of = Fe(af), uf = se({}, El, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Na = Fe(uf), cf = se({}, vr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Cs }), df = Fe(cf), ff = se({}, Tn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), pf = Fe(ff), mf = se({}, El, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), hf = Fe(mf), gf = [9, 13, 27, 32], Ns = pt && "CompositionEvent" in window, Hn = null;
pt && "documentMode" in document && (Hn = document.documentMode);
var yf = pt && "TextEvent" in window && !Hn, fu = pt && (!Ns || Hn && 8 < Hn && 11 >= Hn), ja = " ", Ia = !1;
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
      return t.which !== 32 ? null : (Ia = !0, ja);
    case "textInput":
      return e = t.data, e === ja && Ia ? null : e;
    default:
      return null;
  }
}
function wf(e, t) {
  if (nn) return e === "compositionend" || !Ns && pu(e, t) ? (e = du(), Ur = ks = kt = null, nn = !1, e) : null;
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
var _f = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ta(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!_f[e.type] : t === "textarea";
}
function hu(e, t, n, r) {
  Go(r), t = il(t, "onChange"), 0 < t.length && (n = new Es("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Gn = null, ir = null;
function xf(e) {
  Nu(e, 0);
}
function Cl(e) {
  var t = sn(e);
  if (Ao(t)) return e;
}
function Sf(e, t) {
  if (e === "change") return t;
}
var gu = !1;
if (pt) {
  var Xl;
  if (pt) {
    var Jl = "oninput" in document;
    if (!Jl) {
      var Ma = document.createElement("div");
      Ma.setAttribute("oninput", "return;"), Jl = typeof Ma.oninput == "function";
    }
    Xl = Jl;
  } else Xl = !1;
  gu = Xl && (!document.documentMode || 9 < document.documentMode);
}
function La() {
  Gn && (Gn.detachEvent("onpropertychange", yu), ir = Gn = null);
}
function yu(e) {
  if (e.propertyName === "value" && Cl(ir)) {
    var t = [];
    hu(t, ir, e, vs(e)), Xo(xf, t);
  }
}
function kf(e, t, n) {
  e === "focusin" ? (La(), Gn = t, ir = n, Gn.attachEvent("onpropertychange", yu)) : e === "focusout" && La();
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
function sr(e, t) {
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
function Pa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Da(e, t) {
  var n = Pa(e);
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
    n = Pa(n);
  }
}
function vu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? vu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function wu() {
  for (var e = window, t = Zr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Zr(e.document);
  }
  return t;
}
function js(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function If(e) {
  var t = wu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && vu(n.ownerDocument.documentElement, n)) {
    if (r !== null && js(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Da(n, i);
        var s = Da(
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
var Tf = pt && "documentMode" in document && 11 >= document.documentMode, rn = null, Pi = null, Bn = null, Di = !1;
function Ra(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Di || rn == null || rn !== Zr(r) || (r = rn, "selectionStart" in r && js(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Bn && sr(Bn, r) || (Bn = r, r = il(Pi, "onSelect"), 0 < r.length && (t = new Es("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = rn)));
}
function Tr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var ln = { animationend: Tr("Animation", "AnimationEnd"), animationiteration: Tr("Animation", "AnimationIteration"), animationstart: Tr("Animation", "AnimationStart"), transitionend: Tr("Transition", "TransitionEnd") }, Zl = {}, _u = {};
pt && (_u = document.createElement("div").style, "AnimationEvent" in window || (delete ln.animationend.animation, delete ln.animationiteration.animation, delete ln.animationstart.animation), "TransitionEvent" in window || delete ln.transitionend.transition);
function Nl(e) {
  if (Zl[e]) return Zl[e];
  if (!ln[e]) return e;
  var t = ln[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in _u) return Zl[e] = t[n];
  return e;
}
var xu = Nl("animationend"), Su = Nl("animationiteration"), ku = Nl("animationstart"), Eu = Nl("transitionend"), Cu = /* @__PURE__ */ new Map(), za = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function zt(e, t) {
  Cu.set(e, t), Xt(t, [e]);
}
for (var ql = 0; ql < za.length; ql++) {
  var ei = za[ql], Mf = ei.toLowerCase(), Lf = ei[0].toUpperCase() + ei.slice(1);
  zt(Mf, "on" + Lf);
}
zt(xu, "onAnimationEnd");
zt(Su, "onAnimationIteration");
zt(ku, "onAnimationStart");
zt("dblclick", "onDoubleClick");
zt("focusin", "onFocus");
zt("focusout", "onBlur");
zt(Eu, "onTransitionEnd");
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
function ba(e, t, n) {
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
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var o = r[s], u = o.instance, f = o.currentTarget;
        if (o = o.listener, u !== i && l.isPropagationStopped()) break e;
        ba(l, o, f), i = u;
      }
      else for (s = 0; s < r.length; s++) {
        if (o = r[s], u = o.instance, f = o.currentTarget, o = o.listener, u !== i && l.isPropagationStopped()) break e;
        ba(l, o, f), i = u;
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
function ar(e) {
  if (!e[Mr]) {
    e[Mr] = !0, Ro.forEach(function(n) {
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
      l = Gd;
      break;
    default:
      l = Ss;
  }
  n = l.bind(null, t, n, e), l = void 0, !ji || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function ni(e, t, n, r, l) {
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
        if (s = $t(o), s === null) return;
        if (u = s.tag, u === 5 || u === 6) {
          r = i = s;
          continue e;
        }
        o = o.parentNode;
      }
    }
    r = r.return;
  }
  Xo(function() {
    var f = i, _ = vs(n), x = [];
    e: {
      var m = Cu.get(e);
      if (m !== void 0) {
        var w = Es, g = e;
        switch (e) {
          case "keypress":
            if (Qr(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = of;
            break;
          case "focusin":
            g = "focus", w = Yl;
            break;
          case "focusout":
            g = "blur", w = Yl;
            break;
          case "beforeblur":
          case "afterblur":
            w = Yl;
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
            w = Ea;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Yd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = df;
            break;
          case xu:
          case Su:
          case ku:
            w = Zd;
            break;
          case Eu:
            w = pf;
            break;
          case "scroll":
            w = Bd;
            break;
          case "wheel":
            w = hf;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = ef;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Na;
        }
        var S = (t & 4) !== 0, j = !S && e === "scroll", c = S ? m !== null ? m + "Capture" : null : m;
        S = [];
        for (var d = f, p; d !== null; ) {
          p = d;
          var C = p.stateNode;
          if (p.tag === 5 && C !== null && (p = C, c !== null && (C = tr(d, c), C != null && S.push(or(d, C, p)))), j) break;
          d = d.return;
        }
        0 < S.length && (m = new w(m, g, null, n, _), x.push({ event: m, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", m && n !== Ci && (g = n.relatedTarget || n.fromElement) && ($t(g) || g[mt])) break e;
        if ((w || m) && (m = _.window === _ ? _ : (m = _.ownerDocument) ? m.defaultView || m.parentWindow : window, w ? (g = n.relatedTarget || n.toElement, w = f, g = g ? $t(g) : null, g !== null && (j = Jt(g), g !== j || g.tag !== 5 && g.tag !== 6) && (g = null)) : (w = null, g = f), w !== g)) {
          if (S = Ea, C = "onMouseLeave", c = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (S = Na, C = "onPointerLeave", c = "onPointerEnter", d = "pointer"), j = w == null ? m : sn(w), p = g == null ? m : sn(g), m = new S(C, d + "leave", w, n, _), m.target = j, m.relatedTarget = p, C = null, $t(_) === f && (S = new S(c, d + "enter", g, n, _), S.target = p, S.relatedTarget = j, C = S), j = C, w && g) t: {
            for (S = w, c = g, d = 0, p = S; p; p = qt(p)) d++;
            for (p = 0, C = c; C; C = qt(C)) p++;
            for (; 0 < d - p; ) S = qt(S), d--;
            for (; 0 < p - d; ) c = qt(c), p--;
            for (; d--; ) {
              if (S === c || c !== null && S === c.alternate) break t;
              S = qt(S), c = qt(c);
            }
            S = null;
          }
          else S = null;
          w !== null && Oa(x, m, w, S, !1), g !== null && j !== null && Oa(x, j, g, S, !0);
        }
      }
      e: {
        if (m = f ? sn(f) : window, w = m.nodeName && m.nodeName.toLowerCase(), w === "select" || w === "input" && m.type === "file") var L = Sf;
        else if (Ta(m)) if (gu) L = Nf;
        else {
          L = Ef;
          var O = kf;
        }
        else (w = m.nodeName) && w.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (L = Cf);
        if (L && (L = L(e, f))) {
          hu(x, L, n, _);
          break e;
        }
        O && O(e, m, f), e === "focusout" && (O = m._wrapperState) && O.controlled && m.type === "number" && _i(m, "number", m.value);
      }
      switch (O = f ? sn(f) : window, e) {
        case "focusin":
          (Ta(O) || O.contentEditable === "true") && (rn = O, Pi = f, Bn = null);
          break;
        case "focusout":
          Bn = Pi = rn = null;
          break;
        case "mousedown":
          Di = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Di = !1, Ra(x, n, _);
          break;
        case "selectionchange":
          if (Tf) break;
        case "keydown":
        case "keyup":
          Ra(x, n, _);
      }
      var N;
      if (Ns) e: {
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
      I && (fu && n.locale !== "ko" && (nn || I !== "onCompositionStart" ? I === "onCompositionEnd" && nn && (N = du()) : (kt = _, ks = "value" in kt ? kt.value : kt.textContent, nn = !0)), O = il(f, I), 0 < O.length && (I = new Ca(I, e, null, n, _), x.push({ event: I, listeners: O }), N ? I.data = N : (N = mu(n), N !== null && (I.data = N)))), (N = yf ? vf(e, n) : wf(e, n)) && (f = il(f, "onBeforeInput"), 0 < f.length && (_ = new Ca("onBeforeInput", "beforeinput", null, n, _), x.push({ event: _, listeners: f }), _.data = N));
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
function Oa(e, t, n, r, l) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var o = n, u = o.alternate, f = o.stateNode;
    if (u !== null && u === r) break;
    o.tag === 5 && f !== null && (o = f, l ? (u = tr(n, i), u != null && s.unshift(or(n, u, o))) : l || (u = tr(n, i), u != null && s.push(or(n, u, o)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Df = /\r\n?/g, Rf = /\u0000|\uFFFD/g;
function Fa(e) {
  return (typeof e == "string" ? e : "" + e).replace(Df, `
`).replace(Rf, "");
}
function Lr(e, t, n) {
  if (t = Fa(t), Fa(e) !== t && n) throw Error(M(425));
}
function sl() {
}
var Ri = null, zi = null;
function bi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Oi = typeof setTimeout == "function" ? setTimeout : void 0, zf = typeof clearTimeout == "function" ? clearTimeout : void 0, Aa = typeof Promise == "function" ? Promise : void 0, bf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Aa < "u" ? function(e) {
  return Aa.resolve(null).then(e).catch(Of);
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
function $a(e) {
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
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = $a(e); e !== null; ) {
        if (n = e[it]) return n;
        e = $a(e);
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
function sn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(M(33));
}
function jl(e) {
  return e[ur] || null;
}
var Ai = [], an = -1;
function bt(e) {
  return { current: e };
}
function ne(e) {
  0 > an || (e.current = Ai[an], Ai[an] = null, an--);
}
function ee(e, t) {
  an++, Ai[an] = e.current, e.current = t;
}
var Rt = {}, _e = bt(Rt), Te = bt(!1), Ht = Rt;
function _n(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Rt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Me(e) {
  return e = e.childContextTypes, e != null;
}
function al() {
  ne(Te), ne(_e);
}
function Va(e, t, n) {
  if (_e.current !== Rt) throw Error(M(168));
  ee(_e, t), ee(Te, n);
}
function Iu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(M(108, Sd(e) || "Unknown", l));
  return se({}, n, r);
}
function ol(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Rt, Ht = _e.current, ee(_e, e), ee(Te, Te.current), !0;
}
function Ua(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(M(169));
  n ? (e = Iu(e, t, Ht), r.__reactInternalMemoizedMergedChildContext = e, ne(Te), ne(_e), ee(_e, e)) : ne(Te), ee(Te, n);
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
    var e = 0, t = q;
    try {
      var n = ut;
      for (q = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      ut = null, Il = !1;
    } catch (l) {
      throw ut !== null && (ut = ut.slice(e + 1)), eu(ws, Ot), l;
    } finally {
      q = t, li = !1;
    }
  }
  return null;
}
var on = [], un = 0, ul = null, cl = 0, Ae = [], $e = 0, Gt = null, ct = 1, dt = "";
function Ft(e, t) {
  on[un++] = cl, on[un++] = ul, ul = e, cl = t;
}
function Mu(e, t, n) {
  Ae[$e++] = ct, Ae[$e++] = dt, Ae[$e++] = Gt, Gt = e;
  var r = ct;
  e = dt;
  var l = 32 - Je(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - Je(t) + l;
  if (30 < i) {
    var s = l - l % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, l -= s, ct = 1 << 32 - Je(t) + l | n << l | r, dt = i + e;
  } else ct = 1 << i | n << l | r, dt = e;
}
function Is(e) {
  e.return !== null && (Ft(e, 1), Mu(e, 1, 0));
}
function Ts(e) {
  for (; e === ul; ) ul = on[--un], on[un] = null, cl = on[--un], on[un] = null;
  for (; e === Gt; ) Gt = Ae[--$e], Ae[$e] = null, dt = Ae[--$e], Ae[$e] = null, ct = Ae[--$e], Ae[$e] = null;
}
var ze = null, Re = null, re = !1, Ye = null;
function Lu(e, t) {
  var n = Ve(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Qa(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ze = e, Re = It(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ze = e, Re = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Gt !== null ? { id: ct, overflow: dt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ve(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ze = e, Re = null, !0) : !1;
    default:
      return !1;
  }
}
function $i(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Vi(e) {
  if (re) {
    var t = Re;
    if (t) {
      var n = t;
      if (!Qa(e, t)) {
        if ($i(e)) throw Error(M(418));
        t = It(n.nextSibling);
        var r = ze;
        t && Qa(e, t) ? Lu(r, n) : (e.flags = e.flags & -4097 | 2, re = !1, ze = e);
      }
    } else {
      if ($i(e)) throw Error(M(418));
      e.flags = e.flags & -4097 | 2, re = !1, ze = e;
    }
  }
}
function Wa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ze = e;
}
function Pr(e) {
  if (e !== ze) return !1;
  if (!re) return Wa(e), re = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !bi(e.type, e.memoizedProps)), t && (t = Re)) {
    if ($i(e)) throw Pu(), Error(M(418));
    for (; t; ) Lu(e, t), t = It(t.nextSibling);
  }
  if (Wa(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(M(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Re = It(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Re = null;
    }
  } else Re = ze ? It(e.stateNode.nextSibling) : null;
  return !0;
}
function Pu() {
  for (var e = Re; e; ) e = It(e.nextSibling);
}
function xn() {
  Re = ze = null, re = !1;
}
function Ms(e) {
  Ye === null ? Ye = [e] : Ye.push(e);
}
var Vf = yt.ReactCurrentBatchConfig;
function bn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(M(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(M(147, e));
      var l = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var o = l.refs;
        s === null ? delete o[i] : o[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(M(284));
    if (!n._owner) throw Error(M(290, e));
  }
  return e;
}
function Dr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(M(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ha(e) {
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
  function s(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function o(c, d, p, C) {
    return d === null || d.tag !== 6 ? (d = di(p, c.mode, C), d.return = c, d) : (d = l(d, p), d.return = c, d);
  }
  function u(c, d, p, C) {
    var L = p.type;
    return L === tn ? _(c, d, p.props.children, C, p.key) : d !== null && (d.elementType === L || typeof L == "object" && L !== null && L.$$typeof === wt && Ha(L) === d.type) ? (C = l(d, p.props), C.ref = bn(c, d, p), C.return = c, C) : (C = Xr(p.type, p.key, p.props, null, c.mode, C), C.ref = bn(c, d, p), C.return = c, C);
  }
  function f(c, d, p, C) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== p.containerInfo || d.stateNode.implementation !== p.implementation ? (d = fi(p, c.mode, C), d.return = c, d) : (d = l(d, p.children || []), d.return = c, d);
  }
  function _(c, d, p, C, L) {
    return d === null || d.tag !== 7 ? (d = Wt(p, c.mode, C, L), d.return = c, d) : (d = l(d, p), d.return = c, d);
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
          var C = d._init;
          return x(c, C(d._payload), p);
      }
      if ($n(d) || Ln(d)) return d = Wt(d, c.mode, p, null), d.return = c, d;
      Dr(c, d);
    }
    return null;
  }
  function m(c, d, p, C) {
    var L = d !== null ? d.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return L !== null ? null : o(c, d, "" + p, C);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Sr:
          return p.key === L ? u(c, d, p, C) : null;
        case en:
          return p.key === L ? f(c, d, p, C) : null;
        case wt:
          return L = p._init, m(
            c,
            d,
            L(p._payload),
            C
          );
      }
      if ($n(p) || Ln(p)) return L !== null ? null : _(c, d, p, C, null);
      Dr(c, p);
    }
    return null;
  }
  function w(c, d, p, C, L) {
    if (typeof C == "string" && C !== "" || typeof C == "number") return c = c.get(p) || null, o(d, c, "" + C, L);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case Sr:
          return c = c.get(C.key === null ? p : C.key) || null, u(d, c, C, L);
        case en:
          return c = c.get(C.key === null ? p : C.key) || null, f(d, c, C, L);
        case wt:
          var O = C._init;
          return w(c, d, p, O(C._payload), L);
      }
      if ($n(C) || Ln(C)) return c = c.get(p) || null, _(d, c, C, L, null);
      Dr(d, C);
    }
    return null;
  }
  function g(c, d, p, C) {
    for (var L = null, O = null, N = d, I = d = 0, Q = null; N !== null && I < p.length; I++) {
      N.index > I ? (Q = N, N = null) : Q = N.sibling;
      var T = m(c, N, p[I], C);
      if (T === null) {
        N === null && (N = Q);
        break;
      }
      e && N && T.alternate === null && t(c, N), d = i(T, d, I), O === null ? L = T : O.sibling = T, O = T, N = Q;
    }
    if (I === p.length) return n(c, N), re && Ft(c, I), L;
    if (N === null) {
      for (; I < p.length; I++) N = x(c, p[I], C), N !== null && (d = i(N, d, I), O === null ? L = N : O.sibling = N, O = N);
      return re && Ft(c, I), L;
    }
    for (N = r(c, N); I < p.length; I++) Q = w(N, c, I, p[I], C), Q !== null && (e && Q.alternate !== null && N.delete(Q.key === null ? I : Q.key), d = i(Q, d, I), O === null ? L = Q : O.sibling = Q, O = Q);
    return e && N.forEach(function(k) {
      return t(c, k);
    }), re && Ft(c, I), L;
  }
  function S(c, d, p, C) {
    var L = Ln(p);
    if (typeof L != "function") throw Error(M(150));
    if (p = L.call(p), p == null) throw Error(M(151));
    for (var O = L = null, N = d, I = d = 0, Q = null, T = p.next(); N !== null && !T.done; I++, T = p.next()) {
      N.index > I ? (Q = N, N = null) : Q = N.sibling;
      var k = m(c, N, T.value, C);
      if (k === null) {
        N === null && (N = Q);
        break;
      }
      e && N && k.alternate === null && t(c, N), d = i(k, d, I), O === null ? L = k : O.sibling = k, O = k, N = Q;
    }
    if (T.done) return n(
      c,
      N
    ), re && Ft(c, I), L;
    if (N === null) {
      for (; !T.done; I++, T = p.next()) T = x(c, T.value, C), T !== null && (d = i(T, d, I), O === null ? L = T : O.sibling = T, O = T);
      return re && Ft(c, I), L;
    }
    for (N = r(c, N); !T.done; I++, T = p.next()) T = w(N, c, I, T.value, C), T !== null && (e && T.alternate !== null && N.delete(T.key === null ? I : T.key), d = i(T, d, I), O === null ? L = T : O.sibling = T, O = T);
    return e && N.forEach(function(v) {
      return t(c, v);
    }), re && Ft(c, I), L;
  }
  function j(c, d, p, C) {
    if (typeof p == "object" && p !== null && p.type === tn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Sr:
          e: {
            for (var L = p.key, O = d; O !== null; ) {
              if (O.key === L) {
                if (L = p.type, L === tn) {
                  if (O.tag === 7) {
                    n(c, O.sibling), d = l(O, p.props.children), d.return = c, c = d;
                    break e;
                  }
                } else if (O.elementType === L || typeof L == "object" && L !== null && L.$$typeof === wt && Ha(L) === O.type) {
                  n(c, O.sibling), d = l(O, p.props), d.ref = bn(c, O, p), d.return = c, c = d;
                  break e;
                }
                n(c, O);
                break;
              } else t(c, O);
              O = O.sibling;
            }
            p.type === tn ? (d = Wt(p.props.children, c.mode, C, p.key), d.return = c, c = d) : (C = Xr(p.type, p.key, p.props, null, c.mode, C), C.ref = bn(c, d, p), C.return = c, c = C);
          }
          return s(c);
        case en:
          e: {
            for (O = p.key; d !== null; ) {
              if (d.key === O) if (d.tag === 4 && d.stateNode.containerInfo === p.containerInfo && d.stateNode.implementation === p.implementation) {
                n(c, d.sibling), d = l(d, p.children || []), d.return = c, c = d;
                break e;
              } else {
                n(c, d);
                break;
              }
              else t(c, d);
              d = d.sibling;
            }
            d = fi(p, c.mode, C), d.return = c, c = d;
          }
          return s(c);
        case wt:
          return O = p._init, j(c, d, O(p._payload), C);
      }
      if ($n(p)) return g(c, d, p, C);
      if (Ln(p)) return S(c, d, p, C);
      Dr(c, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, d !== null && d.tag === 6 ? (n(c, d.sibling), d = l(d, p), d.return = c, c = d) : (n(c, d), d = di(p, c.mode, C), d.return = c, c = d), s(c)) : n(c, d);
  }
  return j;
}
var Sn = Du(!0), Ru = Du(!1), dl = bt(null), fl = null, cn = null, Ls = null;
function Ps() {
  Ls = cn = fl = null;
}
function Ds(e) {
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
  fl = e, Ls = cn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ie = !0), e.firstContext = null);
}
function Qe(e) {
  var t = e._currentValue;
  if (Ls !== e) if (e = { context: e, memoizedValue: t, next: null }, cn === null) {
    if (fl === null) throw Error(M(308));
    cn = e, fl.dependencies = { lanes: 0, firstContext: e };
  } else cn = cn.next = e;
  return t;
}
var Vt = null;
function Rs(e) {
  Vt === null ? Vt = [e] : Vt.push(e);
}
function zu(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Rs(t)) : (n.next = l.next, l.next = n), t.interleaved = n, ht(e, r);
}
function ht(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var _t = !1;
function zs(e) {
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
  if (r = r.shared, Y & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, ht(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Rs(r)) : (t.next = l.next, l.next = t), r.interleaved = t, ht(e, n);
}
function Wr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, _s(e, n);
  }
}
function Ga(e, t) {
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
function pl(e, t, n, r) {
  var l = e.updateQueue;
  _t = !1;
  var i = l.firstBaseUpdate, s = l.lastBaseUpdate, o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var u = o, f = u.next;
    u.next = null, s === null ? i = f : s.next = f, s = u;
    var _ = e.alternate;
    _ !== null && (_ = _.updateQueue, o = _.lastBaseUpdate, o !== s && (o === null ? _.firstBaseUpdate = f : o.next = f, _.lastBaseUpdate = u));
  }
  if (i !== null) {
    var x = l.baseState;
    s = 0, _ = f = u = null, o = i;
    do {
      var m = o.lane, w = o.eventTime;
      if ((r & m) === m) {
        _ !== null && (_ = _.next = {
          eventTime: w,
          lane: 0,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null
        });
        e: {
          var g = e, S = o;
          switch (m = t, w = n, S.tag) {
            case 1:
              if (g = S.payload, typeof g == "function") {
                x = g.call(w, x, m);
                break e;
              }
              x = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = S.payload, m = typeof g == "function" ? g.call(w, x, m) : g, m == null) break e;
              x = se({}, x, m);
              break e;
            case 2:
              _t = !0;
          }
        }
        o.callback !== null && o.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [o] : m.push(o));
      } else w = { eventTime: w, lane: m, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, _ === null ? (f = _ = w, u = x) : _ = _.next = w, s |= m;
      if (o = o.next, o === null) {
        if (o = l.shared.pending, o === null) break;
        m = o, o = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
      }
    } while (!0);
    if (_ === null && (u = x), l.baseState = u, l.firstBaseUpdate = f, l.lastBaseUpdate = _, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        s |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    Kt |= s, e.lanes = s, e.memoizedState = x;
  }
}
function Ba(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(M(191, l));
      l.call(r);
    }
  }
}
var _r = {}, at = bt(_r), cr = bt(_r), dr = bt(_r);
function Ut(e) {
  if (e === _r) throw Error(M(174));
  return e;
}
function bs(e, t) {
  switch (ee(dr, t), ee(cr, e), ee(at, _r), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Si(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Si(t, e);
  }
  ne(at), ee(at, t);
}
function kn() {
  ne(at), ne(cr), ne(dr);
}
function Ou(e) {
  Ut(dr.current);
  var t = Ut(at.current), n = Si(t, e.type);
  t !== n && (ee(cr, e), ee(at, n));
}
function Os(e) {
  cr.current === e && (ne(at), ne(cr));
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
function Fs() {
  for (var e = 0; e < ii.length; e++) ii[e]._workInProgressVersionPrimary = null;
  ii.length = 0;
}
var Hr = yt.ReactCurrentDispatcher, si = yt.ReactCurrentBatchConfig, Bt = 0, ie = null, ce = null, fe = null, hl = !1, Kn = !1, fr = 0, Uf = 0;
function ye() {
  throw Error(M(321));
}
function As(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!qe(e[n], t[n])) return !1;
  return !0;
}
function $s(e, t, n, r, l, i) {
  if (Bt = i, ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Hr.current = e === null || e.memoizedState === null ? Gf : Bf, e = n(r, l), Kn) {
    i = 0;
    do {
      if (Kn = !1, fr = 0, 25 <= i) throw Error(M(301));
      i += 1, fe = ce = null, t.updateQueue = null, Hr.current = Kf, e = n(r, l);
    } while (Kn);
  }
  if (Hr.current = gl, t = ce !== null && ce.next !== null, Bt = 0, fe = ce = ie = null, hl = !1, t) throw Error(M(300));
  return e;
}
function Vs() {
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
    if (e === null) throw Error(M(310));
    ce = e, e = { memoizedState: ce.memoizedState, baseState: ce.baseState, baseQueue: ce.baseQueue, queue: ce.queue, next: null }, fe === null ? ie.memoizedState = fe = e : fe = fe.next = e;
  }
  return fe;
}
function pr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ai(e) {
  var t = We(), n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = ce, l = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var s = l.next;
      l.next = i.next, i.next = s;
    }
    r.baseQueue = l = i, n.pending = null;
  }
  if (l !== null) {
    i = l.next, r = r.baseState;
    var o = s = null, u = null, f = i;
    do {
      var _ = f.lane;
      if ((Bt & _) === _) u !== null && (u = u.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
      else {
        var x = {
          lane: _,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null
        };
        u === null ? (o = u = x, s = r) : u = u.next = x, ie.lanes |= _, Kt |= _;
      }
      f = f.next;
    } while (f !== null && f !== i);
    u === null ? s = r : u.next = o, qe(r, t.memoizedState) || (Ie = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = u, n.lastRenderedState = r;
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
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var s = l = l.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== l);
    qe(i, t.memoizedState) || (Ie = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Fu() {
}
function Au(e, t) {
  var n = ie, r = We(), l = t(), i = !qe(r.memoizedState, l);
  if (i && (r.memoizedState = l, Ie = !0), r = r.queue, Us(Uu.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || fe !== null && fe.memoizedState.tag & 1) {
    if (n.flags |= 2048, mr(9, Vu.bind(null, n, r, l, t), void 0, null), pe === null) throw Error(M(349));
    Bt & 30 || $u(n, t, l);
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
  t !== null && Ze(t, e, 1, -1);
}
function Ka(e) {
  var t = lt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: pr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Hf.bind(null, ie, e), [t.memoizedState, e];
}
function mr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ie.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Hu() {
  return We().memoizedState;
}
function Gr(e, t, n, r) {
  var l = lt();
  ie.flags |= e, l.memoizedState = mr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Tl(e, t, n, r) {
  var l = We();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ce !== null) {
    var s = ce.memoizedState;
    if (i = s.destroy, r !== null && As(r, s.deps)) {
      l.memoizedState = mr(t, n, i, r);
      return;
    }
  }
  ie.flags |= e, l.memoizedState = mr(1 | t, n, i, r);
}
function Ya(e, t) {
  return Gr(8390656, 8, e, t);
}
function Us(e, t) {
  return Tl(2048, 8, e, t);
}
function Gu(e, t) {
  return Tl(4, 2, e, t);
}
function Bu(e, t) {
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
function Qs() {
}
function Xu(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && As(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ju(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && As(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Zu(e, t, n) {
  return Bt & 21 ? (qe(n, t) || (n = ru(), ie.lanes |= n, Kt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ie = !0), e.memoizedState = n);
}
function Qf(e, t) {
  var n = q;
  q = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = si.transition;
  si.transition = {};
  try {
    e(!1), t();
  } finally {
    q = n, si.transition = r;
  }
}
function qu() {
  return We().memoizedState;
}
function Wf(e, t, n) {
  var r = Lt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ec(e)) tc(t, n);
  else if (n = zu(e, t, n, r), n !== null) {
    var l = ke();
    Ze(n, e, r, l), nc(n, t, r);
  }
}
function Hf(e, t, n) {
  var r = Lt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ec(e)) tc(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, o = i(s, n);
      if (l.hasEagerState = !0, l.eagerState = o, qe(o, s)) {
        var u = t.interleaved;
        u === null ? (l.next = l, Rs(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = zu(e, t, l, r), n !== null && (l = ke(), Ze(n, e, r, l), nc(n, t, r));
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
    r &= e.pendingLanes, n |= r, t.lanes = n, _s(e, n);
  }
}
var gl = { readContext: Qe, useCallback: ye, useContext: ye, useEffect: ye, useImperativeHandle: ye, useInsertionEffect: ye, useLayoutEffect: ye, useMemo: ye, useReducer: ye, useRef: ye, useState: ye, useDebugValue: ye, useDeferredValue: ye, useTransition: ye, useMutableSource: ye, useSyncExternalStore: ye, useId: ye, unstable_isNewReconciler: !1 }, Gf = { readContext: Qe, useCallback: function(e, t) {
  return lt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Qe, useEffect: Ya, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Gr(
    4194308,
    4,
    Ku.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Gr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Gr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = lt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = lt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Wf.bind(null, ie, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = lt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ka, useDebugValue: Qs, useDeferredValue: function(e) {
  return lt().memoizedState = e;
}, useTransition: function() {
  var e = Ka(!1), t = e[0];
  return e = Qf.bind(null, e[1]), lt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ie, l = lt();
  if (re) {
    if (n === void 0) throw Error(M(407));
    n = n();
  } else {
    if (n = t(), pe === null) throw Error(M(349));
    Bt & 30 || $u(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, Ya(Uu.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, mr(9, Vu.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = lt(), t = pe.identifierPrefix;
  if (re) {
    var n = dt, r = ct;
    n = (r & ~(1 << 32 - Je(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = fr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Uf++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Bf = {
  readContext: Qe,
  useCallback: Xu,
  useContext: Qe,
  useEffect: Us,
  useImperativeHandle: Yu,
  useInsertionEffect: Gu,
  useLayoutEffect: Bu,
  useMemo: Ju,
  useReducer: ai,
  useRef: Hu,
  useState: function() {
    return ai(pr);
  },
  useDebugValue: Qs,
  useDeferredValue: function(e) {
    var t = We();
    return Zu(t, ce.memoizedState, e);
  },
  useTransition: function() {
    var e = ai(pr)[0], t = We().memoizedState;
    return [e, t];
  },
  useMutableSource: Fu,
  useSyncExternalStore: Au,
  useId: qu,
  unstable_isNewReconciler: !1
}, Kf = { readContext: Qe, useCallback: Xu, useContext: Qe, useEffect: Us, useImperativeHandle: Yu, useInsertionEffect: Gu, useLayoutEffect: Bu, useMemo: Ju, useReducer: oi, useRef: Hu, useState: function() {
  return oi(pr);
}, useDebugValue: Qs, useDeferredValue: function(e) {
  var t = We();
  return ce === null ? t.memoizedState = e : Zu(t, ce.memoizedState, e);
}, useTransition: function() {
  var e = oi(pr)[0], t = We().memoizedState;
  return [e, t];
}, useMutableSource: Fu, useSyncExternalStore: Au, useId: qu, unstable_isNewReconciler: !1 };
function Be(e, t) {
  if (e && e.defaultProps) {
    t = se({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Qi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : se({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ml = { isMounted: function(e) {
  return (e = e._reactInternals) ? Jt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ke(), l = Lt(e), i = ft(r, l);
  i.payload = t, n != null && (i.callback = n), t = Tt(e, i, l), t !== null && (Ze(t, e, l, r), Wr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ke(), l = Lt(e), i = ft(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Tt(e, i, l), t !== null && (Ze(t, e, l, r), Wr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ke(), r = Lt(e), l = ft(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Tt(e, l, r), t !== null && (Ze(t, e, r, n), Wr(t, e, r));
} };
function Xa(e, t, n, r, l, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !sr(n, r) || !sr(l, i) : !0;
}
function rc(e, t, n) {
  var r = !1, l = Rt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Qe(i) : (l = Me(t) ? Ht : _e.current, r = t.contextTypes, i = (r = r != null) ? _n(e, l) : Rt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ml, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Ja(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ml.enqueueReplaceState(t, t.state, null);
}
function Wi(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, zs(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = Qe(i) : (i = Me(t) ? Ht : _e.current, l.context = _n(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Qi(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ml.enqueueReplaceState(l, l.state, null), pl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function En(e, t) {
  try {
    var n = "", r = t;
    do
      n += xd(r), r = r.return;
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
    vl || (vl = !0, ts = r), Hi(e, t);
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
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Za(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Yf();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = up.bind(null, e, t, n), t.then(e, e));
}
function qa(e) {
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
function xe(e, t, n, r) {
  t.child = e === null ? Ru(t, null, n, r) : Sn(t, e.child, n, r);
}
function to(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return yn(t, l), r = $s(e, t, n, r, i, l), n = Vs(), e !== null && !Ie ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, gt(e, t, l)) : (re && n && Is(t), t.flags |= 1, xe(e, t, r, l), t.child);
}
function no(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Js(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, sc(e, t, i, r, l)) : (e = Xr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : sr, n(s, r) && e.ref === t.ref) return gt(e, t, l);
  }
  return t.flags |= 1, e = Pt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function sc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (sr(i, r) && e.ref === t.ref) if (Ie = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (Ie = !0);
    else return t.lanes = e.lanes, gt(e, t, l);
  }
  return Gi(e, t, n, r, l);
}
function ac(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ee(fn, Pe), Pe |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ee(fn, Pe), Pe |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, ee(fn, Pe), Pe |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ee(fn, Pe), Pe |= r;
  return xe(e, t, l, n), t.child;
}
function oc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Gi(e, t, n, r, l) {
  var i = Me(n) ? Ht : _e.current;
  return i = _n(t, i), yn(t, l), n = $s(e, t, n, r, i, l), r = Vs(), e !== null && !Ie ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, gt(e, t, l)) : (re && r && Is(t), t.flags |= 1, xe(e, t, n, l), t.child);
}
function ro(e, t, n, r, l) {
  if (Me(n)) {
    var i = !0;
    ol(t);
  } else i = !1;
  if (yn(t, l), t.stateNode === null) Br(e, t), rc(t, n, r), Wi(t, n, r, l), r = !0;
  else if (e === null) {
    var s = t.stateNode, o = t.memoizedProps;
    s.props = o;
    var u = s.context, f = n.contextType;
    typeof f == "object" && f !== null ? f = Qe(f) : (f = Me(n) ? Ht : _e.current, f = _n(t, f));
    var _ = n.getDerivedStateFromProps, x = typeof _ == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    x || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (o !== r || u !== f) && Ja(t, s, r, f), _t = !1;
    var m = t.memoizedState;
    s.state = m, pl(t, r, s, l), u = t.memoizedState, o !== r || m !== u || Te.current || _t ? (typeof _ == "function" && (Qi(t, n, _, r), u = t.memoizedState), (o = _t || Xa(t, n, o, r, m, u, f)) ? (x || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), s.props = r, s.state = u, s.context = f, r = o) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, bu(e, t), o = t.memoizedProps, f = t.type === t.elementType ? o : Be(t.type, o), s.props = f, x = t.pendingProps, m = s.context, u = n.contextType, typeof u == "object" && u !== null ? u = Qe(u) : (u = Me(n) ? Ht : _e.current, u = _n(t, u));
    var w = n.getDerivedStateFromProps;
    (_ = typeof w == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (o !== x || m !== u) && Ja(t, s, r, u), _t = !1, m = t.memoizedState, s.state = m, pl(t, r, s, l);
    var g = t.memoizedState;
    o !== x || m !== g || Te.current || _t ? (typeof w == "function" && (Qi(t, n, w, r), g = t.memoizedState), (f = _t || Xa(t, n, f, r, m, g, u) || !1) ? (_ || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, g, u), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, g, u)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), s.props = r, s.state = g, s.context = u, r = f) : (typeof s.componentDidUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Bi(e, t, n, r, i, l);
}
function Bi(e, t, n, r, l, i) {
  oc(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return l && Ua(t, n, !1), gt(e, t, i);
  r = t.stateNode, Xf.current = t;
  var o = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = Sn(t, e.child, null, i), t.child = Sn(t, null, o, i)) : xe(e, t, o, i), t.memoizedState = r.state, l && Ua(t, n, !0), t.child;
}
function uc(e) {
  var t = e.stateNode;
  t.pendingContext ? Va(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Va(e, t.context, !1), bs(e, t.containerInfo);
}
function lo(e, t, n, r, l) {
  return xn(), Ms(l), t.flags |= 256, xe(e, t, n, r), t.child;
}
var Ki = { dehydrated: null, treeContext: null, retryLane: 0 };
function Yi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function cc(e, t, n) {
  var r = t.pendingProps, l = le.current, i = !1, s = (t.flags & 128) !== 0, o;
  if ((o = s) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), ee(le, l & 1), e === null)
    return Vi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Dl(s, r, 0, null), e = Wt(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Yi(n), t.memoizedState = Ki, e) : Ws(t, s));
  if (l = e.memoizedState, l !== null && (o = l.dehydrated, o !== null)) return Jf(e, t, s, r, o, l, n);
  if (i) {
    i = r.fallback, s = t.mode, l = e.child, o = l.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Pt(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), o !== null ? i = Pt(o, i) : (i = Wt(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Yi(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Ki, r;
  }
  return i = e.child, e = i.sibling, r = Pt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ws(e, t) {
  return t = Dl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Rr(e, t, n, r) {
  return r !== null && Ms(r), Sn(t, e.child, null, n), e = Ws(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Jf(e, t, n, r, l, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ui(Error(M(422))), Rr(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Dl({ mode: "visible", children: r.children }, l, 0, null), i = Wt(i, l, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Sn(t, e.child, null, s), t.child.memoizedState = Yi(s), t.memoizedState = Ki, i);
  if (!(t.mode & 1)) return Rr(e, t, s, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var o = r.dgst;
    return r = o, i = Error(M(419)), r = ui(i, r, void 0), Rr(e, t, s, r);
  }
  if (o = (s & e.childLanes) !== 0, Ie || o) {
    if (r = pe, r !== null) {
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
      l = l & (r.suspendedLanes | s) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, ht(e, l), Ze(r, e, l, -1));
    }
    return Xs(), r = ui(Error(M(421))), Rr(e, t, s, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = cp.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, Re = It(l.nextSibling), ze = t, re = !0, Ye = null, e !== null && (Ae[$e++] = ct, Ae[$e++] = dt, Ae[$e++] = Gt, ct = e.id, dt = e.overflow, Gt = t), t = Ws(t, r.children), t.flags |= 4096, t);
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
  if (xe(e, t, r.children, n), r = le.current, r & 2) r = r & 1 | 2, t.flags |= 128;
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
function Br(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function gt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Kt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(M(153));
  if (t.child !== null) {
    for (e = t.child, n = Pt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Pt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Zf(e, t, n) {
  switch (t.tag) {
    case 3:
      uc(t), xn();
      break;
    case 5:
      Ou(t);
      break;
    case 1:
      Me(t.type) && ol(t);
      break;
    case 4:
      bs(t, t.stateNode.containerInfo);
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
      return t.lanes = 0, ac(e, t, n);
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
    e = t.stateNode, Ut(at.current);
    var i = null;
    switch (n) {
      case "input":
        l = vi(e, l), r = vi(e, r), i = [];
        break;
      case "select":
        l = se({}, l, { value: void 0 }), r = se({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = xi(e, l), r = xi(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = sl);
    }
    ki(n, r);
    var s;
    n = null;
    for (f in l) if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null) if (f === "style") {
      var o = l[f];
      for (s in o) o.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (qn.hasOwnProperty(f) ? i || (i = []) : (i = i || []).push(f, null));
    for (f in r) {
      var u = r[f];
      if (o = l != null ? l[f] : void 0, r.hasOwnProperty(f) && u !== o && (u != null || o != null)) if (f === "style") if (o) {
        for (s in o) !o.hasOwnProperty(s) || u && u.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in u) u.hasOwnProperty(s) && o[s] !== u[s] && (n || (n = {}), n[s] = u[s]);
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
  switch (Ts(t), t.tag) {
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
      return Me(t.type) && al(), ve(t), null;
    case 3:
      return r = t.stateNode, kn(), ne(Te), ne(_e), Fs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Pr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ye !== null && (ls(Ye), Ye = null))), Xi(e, t), ve(t), null;
    case 5:
      Os(t);
      var l = Ut(dr.current);
      if (n = t.type, e !== null && t.stateNode != null) pc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(M(166));
          return ve(t), null;
        }
        if (e = Ut(at.current), Pr(t)) {
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
              ma(r, i), te("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, te("invalid", r);
              break;
            case "textarea":
              ga(r, i), te("invalid", r);
          }
          ki(n, i), l = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var o = i[s];
            s === "children" ? typeof o == "string" ? r.textContent !== o && (i.suppressHydrationWarning !== !0 && Lr(r.textContent, o, e), l = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (i.suppressHydrationWarning !== !0 && Lr(
              r.textContent,
              o,
              e
            ), l = ["children", "" + o]) : qn.hasOwnProperty(s) && o != null && s === "onScroll" && te("scroll", r);
          }
          switch (n) {
            case "input":
              kr(r), ha(r, i, !0);
              break;
            case "textarea":
              kr(r), ya(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = sl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Uo(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[it] = t, e[ur] = r, fc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = Ei(n, r), n) {
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
                ma(e, r), l = vi(e, r), te("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = se({}, r, { value: void 0 }), te("invalid", e);
                break;
              case "textarea":
                ga(e, r), l = xi(e, r), te("invalid", e);
                break;
              default:
                l = r;
            }
            ki(n, l), o = l;
            for (i in o) if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "style" ? Ho(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Qo(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && er(e, u) : typeof u == "number" && er(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (qn.hasOwnProperty(i) ? u != null && i === "onScroll" && te("scroll", e) : u != null && ms(e, i, u, s));
            }
            switch (n) {
              case "input":
                kr(e), ha(e, r, !1);
                break;
              case "textarea":
                kr(e), ya(e);
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
                typeof l.onClick == "function" && (e.onclick = sl);
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
        if (typeof r != "string" && t.stateNode === null) throw Error(M(166));
        if (n = Ut(dr.current), Ut(at.current), Pr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[it] = t, (i = r.nodeValue !== n) && (e = ze, e !== null)) switch (e.tag) {
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
        if (re && Re !== null && t.mode & 1 && !(t.flags & 128)) Pu(), xn(), t.flags |= 98560, i = !1;
        else if (i = Pr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(M(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(M(317));
            i[it] = t;
          } else xn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ve(t), i = !1;
        } else Ye !== null && (ls(Ye), Ye = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || le.current & 1 ? de === 0 && (de = 3) : Xs())), t.updateQueue !== null && (t.flags |= 4), ve(t), null);
    case 4:
      return kn(), Xi(e, t), e === null && ar(t.stateNode.containerInfo), ve(t), null;
    case 10:
      return Ds(t.type._context), ve(t), null;
    case 17:
      return Me(t.type) && al(), ve(t), null;
    case 19:
      if (ne(le), i = t.memoizedState, i === null) return ve(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) On(i, !1);
      else {
        if (de !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = ml(e), s !== null) {
            for (t.flags |= 128, On(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ee(le, le.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && oe() > Cn && (t.flags |= 128, r = !0, On(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ml(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), On(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !re) return ve(t), null;
        } else 2 * oe() - i.renderingStartTime > Cn && n !== 1073741824 && (t.flags |= 128, r = !0, On(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = oe(), t.sibling = null, n = le.current, ee(le, r ? n & 1 | 2 : n & 1), t) : (ve(t), null);
    case 22:
    case 23:
      return Ys(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Pe & 1073741824 && (ve(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ve(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, t.tag));
}
function ep(e, t) {
  switch (Ts(t), t.tag) {
    case 1:
      return Me(t.type) && al(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return kn(), ne(Te), ne(_e), Fs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Os(t), null;
    case 13:
      if (ne(le), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(M(340));
        xn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ne(le), null;
    case 4:
      return kn(), null;
    case 10:
      return Ds(t.type._context), null;
    case 22:
    case 23:
      return Ys(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var zr = !1, we = !1, tp = typeof WeakSet == "function" ? WeakSet : Set, A = null;
function dn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ae(e, t, r);
  }
  else n.current = null;
}
function Ji(e, t, n) {
  try {
    n();
  } catch (r) {
    ae(e, t, r);
  }
}
var so = !1;
function np(e, t) {
  if (Ri = rl, e = wu(), js(e)) {
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
        var s = 0, o = -1, u = -1, f = 0, _ = 0, x = e, m = null;
        t: for (; ; ) {
          for (var w; x !== n || l !== 0 && x.nodeType !== 3 || (o = s + l), x !== i || r !== 0 && x.nodeType !== 3 || (u = s + r), x.nodeType === 3 && (s += x.nodeValue.length), (w = x.firstChild) !== null; )
            m = x, x = w;
          for (; ; ) {
            if (x === e) break t;
            if (m === n && ++f === l && (o = s), m === i && ++_ === r && (u = s), (w = x.nextSibling) !== null) break;
            x = m, m = x.parentNode;
          }
          x = w;
        }
        n = o === -1 || u === -1 ? null : { start: o, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (zi = { focusedElem: e, selectionRange: n }, rl = !1, A = t; A !== null; ) if (t = A, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, A = e;
  else for (; A !== null; ) {
    t = A;
    try {
      var g = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (g !== null) {
            var S = g.memoizedProps, j = g.memoizedState, c = t.stateNode, d = c.getSnapshotBeforeUpdate(t.elementType === t.type ? S : Be(t.type, S), j);
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
          throw Error(M(163));
      }
    } catch (C) {
      ae(t, t.return, C);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, A = e;
      break;
    }
    A = t.return;
  }
  return g = so, so = !1, g;
}
function Yn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && Ji(t, n, i);
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
function Zi(e) {
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
function ao(e) {
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
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = sl));
  else if (r !== 4 && (e = e.child, e !== null)) for (qi(e, t, n), e = e.sibling; e !== null; ) qi(e, t, n), e = e.sibling;
}
function es(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (es(e, t, n), e = e.sibling; e !== null; ) es(e, t, n), e = e.sibling;
}
var me = null, Ke = !1;
function vt(e, t, n) {
  for (n = n.child; n !== null; ) yc(e, t, n), n = n.sibling;
}
function yc(e, t, n) {
  if (st && typeof st.onCommitFiberUnmount == "function") try {
    st.onCommitFiberUnmount(kl, n);
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
          var i = l, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && Ji(n, t, s), l = l.next;
        } while (l !== r);
      }
      vt(e, t, n);
      break;
    case 1:
      if (!we && (dn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (o) {
        ae(n, t, o);
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
      var i = e, s = t, o = s;
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
      if (me === null) throw Error(M(160));
      yc(i, s, l), me = null, Ke = !1;
      var u = l.alternate;
      u !== null && (u.return = null), l.return = null;
    } catch (f) {
      ae(l, t, f);
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
        } catch (S) {
          ae(e, e.return, S);
        }
        try {
          Yn(5, e, e.return);
        } catch (S) {
          ae(e, e.return, S);
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
        } catch (S) {
          ae(e, e.return, S);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, o = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          o === "input" && i.type === "radio" && i.name != null && $o(l, i), Ei(o, s);
          var f = Ei(o, i);
          for (s = 0; s < u.length; s += 2) {
            var _ = u[s], x = u[s + 1];
            _ === "style" ? Ho(l, x) : _ === "dangerouslySetInnerHTML" ? Qo(l, x) : _ === "children" ? er(l, x) : ms(l, _, x, f);
          }
          switch (o) {
            case "input":
              wi(l, i);
              break;
            case "textarea":
              Vo(l, i);
              break;
            case "select":
              var m = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var w = i.value;
              w != null ? pn(l, !!i.multiple, w, !1) : m !== !!i.multiple && (i.defaultValue != null ? pn(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : pn(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[ur] = i;
        } catch (S) {
          ae(e, e.return, S);
        }
      }
      break;
    case 6:
      if (He(t, e), rt(e), r & 4) {
        if (e.stateNode === null) throw Error(M(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (S) {
          ae(e, e.return, S);
        }
      }
      break;
    case 3:
      if (He(t, e), rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        lr(t.containerInfo);
      } catch (S) {
        ae(e, e.return, S);
      }
      break;
    case 4:
      He(t, e), rt(e);
      break;
    case 13:
      He(t, e), rt(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Bs = oe())), r & 4 && oo(e);
      break;
    case 22:
      if (_ = n !== null && n.memoizedState !== null, e.mode & 1 ? (we = (f = we) || _, He(t, e), we = f) : He(t, e), rt(e), r & 8192) {
        if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !_ && e.mode & 1) for (A = e, _ = e.child; _ !== null; ) {
          for (x = A = _; A !== null; ) {
            switch (m = A, w = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Yn(4, m, m.return);
                break;
              case 1:
                dn(m, m.return);
                var g = m.stateNode;
                if (typeof g.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                  } catch (S) {
                    ae(r, n, S);
                  }
                }
                break;
              case 5:
                dn(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  co(x);
                  continue;
                }
            }
            w !== null ? (w.return = m, A = w) : co(x);
          }
          _ = _.sibling;
        }
        e: for (_ = null, x = e; ; ) {
          if (x.tag === 5) {
            if (_ === null) {
              _ = x;
              try {
                l = x.stateNode, f ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (o = x.stateNode, u = x.memoizedProps.style, s = u != null && u.hasOwnProperty("display") ? u.display : null, o.style.display = Wo("display", s));
              } catch (S) {
                ae(e, e.return, S);
              }
            }
          } else if (x.tag === 6) {
            if (_ === null) try {
              x.stateNode.nodeValue = f ? "" : x.memoizedProps;
            } catch (S) {
              ae(e, e.return, S);
            }
          } else if ((x.tag !== 22 && x.tag !== 23 || x.memoizedState === null || x === e) && x.child !== null) {
            x.child.return = x, x = x.child;
            continue;
          }
          if (x === e) break e;
          for (; x.sibling === null; ) {
            if (x.return === null || x.return === e) break e;
            _ === x && (_ = null), x = x.return;
          }
          _ === x && (_ = null), x.sibling.return = x.return, x = x.sibling;
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
        throw Error(M(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (er(l, ""), r.flags &= -33);
          var i = ao(e);
          es(e, i, l);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, o = ao(e);
          qi(e, o, s);
          break;
        default:
          throw Error(M(161));
      }
    } catch (u) {
      ae(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function rp(e, t, n) {
  A = e, wc(e);
}
function wc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; A !== null; ) {
    var l = A, i = l.child;
    if (l.tag === 22 && r) {
      var s = l.memoizedState !== null || zr;
      if (!s) {
        var o = l.alternate, u = o !== null && o.memoizedState !== null || we;
        o = zr;
        var f = we;
        if (zr = s, (we = u) && !f) for (A = l; A !== null; ) s = A, u = s.child, s.tag === 22 && s.memoizedState !== null ? fo(l) : u !== null ? (u.return = s, A = u) : fo(l);
        for (; i !== null; ) A = i, wc(i), i = i.sibling;
        A = l, zr = o, we = f;
      }
      uo(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, A = i) : uo(e);
  }
}
function uo(e) {
  for (; A !== null; ) {
    var t = A;
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
              var l = t.elementType === t.type ? n.memoizedProps : Be(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Ba(t, i, r);
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
              Ba(t, s, n);
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
                var _ = f.memoizedState;
                if (_ !== null) {
                  var x = _.dehydrated;
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
            throw Error(M(163));
        }
        we || t.flags & 512 && Zi(t);
      } catch (m) {
        ae(t, t.return, m);
      }
    }
    if (t === e) {
      A = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, A = n;
      break;
    }
    A = t.return;
  }
}
function co(e) {
  for (; A !== null; ) {
    var t = A;
    if (t === e) {
      A = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, A = n;
      break;
    }
    A = t.return;
  }
}
function fo(e) {
  for (; A !== null; ) {
    var t = A;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ll(4, t);
          } catch (u) {
            ae(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ae(t, l, u);
            }
          }
          var i = t.return;
          try {
            Zi(t);
          } catch (u) {
            ae(t, i, u);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Zi(t);
          } catch (u) {
            ae(t, s, u);
          }
      }
    } catch (u) {
      ae(t, t.return, u);
    }
    if (t === e) {
      A = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      o.return = t.return, A = o;
      break;
    }
    A = t.return;
  }
}
var lp = Math.ceil, yl = yt.ReactCurrentDispatcher, Hs = yt.ReactCurrentOwner, Ue = yt.ReactCurrentBatchConfig, Y = 0, pe = null, ue = null, he = 0, Pe = 0, fn = bt(0), de = 0, hr = null, Kt = 0, Pl = 0, Gs = 0, Xn = null, je = null, Bs = 0, Cn = 1 / 0, ot = null, vl = !1, ts = null, Mt = null, br = !1, Et = null, wl = 0, Jn = 0, ns = null, Kr = -1, Yr = 0;
function ke() {
  return Y & 6 ? oe() : Kr !== -1 ? Kr : Kr = oe();
}
function Lt(e) {
  return e.mode & 1 ? Y & 2 && he !== 0 ? he & -he : Vf.transition !== null ? (Yr === 0 && (Yr = ru()), Yr) : (e = q, e !== 0 || (e = window.event, e = e === void 0 ? 16 : cu(e.type)), e) : 1;
}
function Ze(e, t, n, r) {
  if (50 < Jn) throw Jn = 0, ns = null, Error(M(185));
  yr(e, n, r), (!(Y & 2) || e !== pe) && (e === pe && (!(Y & 2) && (Pl |= n), de === 4 && St(e, he)), Le(e, r), n === 1 && Y === 0 && !(t.mode & 1) && (Cn = oe() + 500, Il && Ot()));
}
function Le(e, t) {
  var n = e.callbackNode;
  $d(e, t);
  var r = nl(e, e === pe ? he : 0);
  if (r === 0) n !== null && _a(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && _a(n), t === 1) e.tag === 0 ? $f(po.bind(null, e)) : Tu(po.bind(null, e)), bf(function() {
      !(Y & 6) && Ot();
    }), n = null;
    else {
      switch (lu(r)) {
        case 1:
          n = ws;
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
      n = jc(n, _c.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function _c(e, t) {
  if (Kr = -1, Yr = 0, Y & 6) throw Error(M(327));
  var n = e.callbackNode;
  if (vn() && e.callbackNode !== n) return null;
  var r = nl(e, e === pe ? he : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = _l(e, r);
  else {
    t = r;
    var l = Y;
    Y |= 2;
    var i = Sc();
    (pe !== e || he !== t) && (ot = null, Cn = oe() + 500, Qt(e, t));
    do
      try {
        ap();
        break;
      } catch (o) {
        xc(e, o);
      }
    while (!0);
    Ps(), yl.current = i, Y = l, ue !== null ? t = 0 : (pe = null, he = 0, t = de);
  }
  if (t !== 0) {
    if (t === 2 && (l = Ti(e), l !== 0 && (r = l, t = rs(e, l))), t === 1) throw n = hr, Qt(e, 0), St(e, r), Le(e, oe()), n;
    if (t === 6) St(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !ip(l) && (t = _l(e, r), t === 2 && (i = Ti(e), i !== 0 && (r = i, t = rs(e, i))), t === 1)) throw n = hr, Qt(e, 0), St(e, r), Le(e, oe()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          At(e, je, ot);
          break;
        case 3:
          if (St(e, r), (r & 130023424) === r && (t = Bs + 500 - oe(), 10 < t)) {
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
            var s = 31 - Je(r);
            i = 1 << s, s = t[s], s > l && (l = s), r &= ~i;
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
          throw Error(M(329));
      }
    }
  }
  return Le(e, oe()), e.callbackNode === n ? _c.bind(null, e) : null;
}
function rs(e, t) {
  var n = Xn;
  return e.current.memoizedState.isDehydrated && (Qt(e, t).flags |= 256), e = _l(e, t), e !== 2 && (t = je, je = n, t !== null && ls(t)), e;
}
function ls(e) {
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
  for (t &= ~Gs, t &= ~Pl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Je(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function po(e) {
  if (Y & 6) throw Error(M(327));
  vn();
  var t = nl(e, 0);
  if (!(t & 1)) return Le(e, oe()), null;
  var n = _l(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ti(e);
    r !== 0 && (t = r, n = rs(e, r));
  }
  if (n === 1) throw n = hr, Qt(e, 0), St(e, t), Le(e, oe()), n;
  if (n === 6) throw Error(M(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, At(e, je, ot), Le(e, oe()), null;
}
function Ks(e, t) {
  var n = Y;
  Y |= 1;
  try {
    return e(t);
  } finally {
    Y = n, Y === 0 && (Cn = oe() + 500, Il && Ot());
  }
}
function Yt(e) {
  Et !== null && Et.tag === 0 && !(Y & 6) && vn();
  var t = Y;
  Y |= 1;
  var n = Ue.transition, r = q;
  try {
    if (Ue.transition = null, q = 1, e) return e();
  } finally {
    q = r, Ue.transition = n, Y = t, !(Y & 6) && Ot();
  }
}
function Ys() {
  Pe = fn.current, ne(fn);
}
function Qt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, zf(n)), ue !== null) for (n = ue.return; n !== null; ) {
    var r = n;
    switch (Ts(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && al();
        break;
      case 3:
        kn(), ne(Te), ne(_e), Fs();
        break;
      case 5:
        Os(r);
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
        Ds(r.type._context);
        break;
      case 22:
      case 23:
        Ys();
    }
    n = n.return;
  }
  if (pe = e, ue = e = Pt(e.current, null), he = Pe = t, de = 0, hr = null, Gs = Pl = Kt = 0, je = Xn = null, Vt !== null) {
    for (t = 0; t < Vt.length; t++) if (n = Vt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = l, r.next = s;
      }
      n.pending = r;
    }
    Vt = null;
  }
  return e;
}
function xc(e, t) {
  do {
    var n = ue;
    try {
      if (Ps(), Hr.current = gl, hl) {
        for (var r = ie.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        hl = !1;
      }
      if (Bt = 0, fe = ce = ie = null, Kn = !1, fr = 0, Hs.current = null, n === null || n.return === null) {
        de = 1, hr = t, ue = null;
        break;
      }
      e: {
        var i = e, s = n.return, o = n, u = t;
        if (t = he, o.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var f = u, _ = o, x = _.tag;
          if (!(_.mode & 1) && (x === 0 || x === 11 || x === 15)) {
            var m = _.alternate;
            m ? (_.updateQueue = m.updateQueue, _.memoizedState = m.memoizedState, _.lanes = m.lanes) : (_.updateQueue = null, _.memoizedState = null);
          }
          var w = qa(s);
          if (w !== null) {
            w.flags &= -257, eo(w, s, o, i, t), w.mode & 1 && Za(i, f, t), t = w, u = f;
            var g = t.updateQueue;
            if (g === null) {
              var S = /* @__PURE__ */ new Set();
              S.add(u), t.updateQueue = S;
            } else g.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Za(i, f, t), Xs();
              break e;
            }
            u = Error(M(426));
          }
        } else if (re && o.mode & 1) {
          var j = qa(s);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256), eo(j, s, o, i, t), Ms(En(u, o));
            break e;
          }
        }
        i = u = En(u, o), de !== 4 && (de = 2), Xn === null ? Xn = [i] : Xn.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var c = lc(i, u, t);
              Ga(i, c);
              break e;
            case 1:
              o = u;
              var d = i.type, p = i.stateNode;
              if (!(i.flags & 128) && (typeof d.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Mt === null || !Mt.has(p)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var C = ic(i, o, t);
                Ga(i, C);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ec(n);
    } catch (L) {
      t = L, ue === n && n !== null && (ue = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Sc() {
  var e = yl.current;
  return yl.current = gl, e === null ? gl : e;
}
function Xs() {
  (de === 0 || de === 3 || de === 2) && (de = 4), pe === null || !(Kt & 268435455) && !(Pl & 268435455) || St(pe, he);
}
function _l(e, t) {
  var n = Y;
  Y |= 2;
  var r = Sc();
  (pe !== e || he !== t) && (ot = null, Qt(e, t));
  do
    try {
      sp();
      break;
    } catch (l) {
      xc(e, l);
    }
  while (!0);
  if (Ps(), Y = n, yl.current = r, ue !== null) throw Error(M(261));
  return pe = null, he = 0, de;
}
function sp() {
  for (; ue !== null; ) kc(ue);
}
function ap() {
  for (; ue !== null && !Ld(); ) kc(ue);
}
function kc(e) {
  var t = Nc(e.alternate, e, Pe);
  e.memoizedProps = e.pendingProps, t === null ? Ec(e) : ue = t, Hs.current = null;
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
  var r = q, l = Ue.transition;
  try {
    Ue.transition = null, q = 1, op(e, t, n, r);
  } finally {
    Ue.transition = l, q = r;
  }
  return null;
}
function op(e, t, n, r) {
  do
    vn();
  while (Et !== null);
  if (Y & 6) throw Error(M(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(M(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Vd(e, i), e === pe && (ue = pe = null, he = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || br || (br = !0, jc(tl, function() {
    return vn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Ue.transition, Ue.transition = null;
    var s = q;
    q = 1;
    var o = Y;
    Y |= 4, Hs.current = null, np(e, n), vc(n, e), If(zi), rl = !!Ri, zi = Ri = null, e.current = n, rp(n), Pd(), Y = o, q = s, Ue.transition = i;
  } else e.current = n;
  if (br && (br = !1, Et = e, wl = l), i = e.pendingLanes, i === 0 && (Mt = null), zd(n.stateNode), Le(e, oe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (vl) throw vl = !1, e = ts, ts = null, e;
  return wl & 1 && e.tag !== 0 && vn(), i = e.pendingLanes, i & 1 ? e === ns ? Jn++ : (Jn = 0, ns = e) : Jn = 0, Ot(), null;
}
function vn() {
  if (Et !== null) {
    var e = lu(wl), t = Ue.transition, n = q;
    try {
      if (Ue.transition = null, q = 16 > e ? 16 : e, Et === null) var r = !1;
      else {
        if (e = Et, Et = null, wl = 0, Y & 6) throw Error(M(331));
        var l = Y;
        for (Y |= 4, A = e.current; A !== null; ) {
          var i = A, s = i.child;
          if (A.flags & 16) {
            var o = i.deletions;
            if (o !== null) {
              for (var u = 0; u < o.length; u++) {
                var f = o[u];
                for (A = f; A !== null; ) {
                  var _ = A;
                  switch (_.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yn(8, _, i);
                  }
                  var x = _.child;
                  if (x !== null) x.return = _, A = x;
                  else for (; A !== null; ) {
                    _ = A;
                    var m = _.sibling, w = _.return;
                    if (hc(_), _ === f) {
                      A = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = w, A = m;
                      break;
                    }
                    A = w;
                  }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var S = g.child;
                if (S !== null) {
                  g.child = null;
                  do {
                    var j = S.sibling;
                    S.sibling = null, S = j;
                  } while (S !== null);
                }
              }
              A = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, A = s;
          else e: for (; A !== null; ) {
            if (i = A, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Yn(9, i, i.return);
            }
            var c = i.sibling;
            if (c !== null) {
              c.return = i.return, A = c;
              break e;
            }
            A = i.return;
          }
        }
        var d = e.current;
        for (A = d; A !== null; ) {
          s = A;
          var p = s.child;
          if (s.subtreeFlags & 2064 && p !== null) p.return = s, A = p;
          else e: for (s = d; A !== null; ) {
            if (o = A, o.flags & 2048) try {
              switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  Ll(9, o);
              }
            } catch (L) {
              ae(o, o.return, L);
            }
            if (o === s) {
              A = null;
              break e;
            }
            var C = o.sibling;
            if (C !== null) {
              C.return = o.return, A = C;
              break e;
            }
            A = o.return;
          }
        }
        if (Y = l, Ot(), st && typeof st.onPostCommitFiberRoot == "function") try {
          st.onPostCommitFiberRoot(kl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      q = n, Ue.transition = t;
    }
  }
  return !1;
}
function mo(e, t, n) {
  t = En(n, t), t = lc(e, t, 1), e = Tt(e, t, 1), t = ke(), e !== null && (yr(e, 1, t), Le(e, t));
}
function ae(e, t, n) {
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
  r !== null && r.delete(t), t = ke(), e.pingedLanes |= e.suspendedLanes & n, pe === e && (he & n) === n && (de === 4 || de === 3 && (he & 130023424) === he && 500 > oe() - Bs ? Qt(e, 0) : Gs |= n), Le(e, t);
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
      throw Error(M(314));
  }
  r !== null && r.delete(t), Cc(e, n);
}
var Nc;
Nc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Te.current) Ie = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ie = !1, Zf(e, t, n);
    Ie = !!(e.flags & 131072);
  }
  else Ie = !1, re && t.flags & 1048576 && Mu(t, cl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Br(e, t), e = t.pendingProps;
      var l = _n(t, _e.current);
      yn(t, n), l = $s(null, t, r, e, l, n);
      var i = Vs();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Me(r) ? (i = !0, ol(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, zs(t), l.updater = Ml, t.stateNode = l, l._reactInternals = t, Wi(t, r, e, n), t = Bi(null, t, r, !0, i, n)) : (t.tag = 0, re && i && Is(t), xe(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Br(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = pp(r), e = Be(r, e), l) {
          case 0:
            t = Gi(null, t, r, e, n);
            break e;
          case 1:
            t = ro(null, t, r, e, n);
            break e;
          case 11:
            t = to(null, t, r, e, n);
            break e;
          case 14:
            t = no(null, t, r, Be(r.type, e), n);
            break e;
        }
        throw Error(M(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Be(r, l), Gi(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Be(r, l), ro(e, t, r, l, n);
    case 3:
      e: {
        if (uc(t), e === null) throw Error(M(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, bu(e, t), pl(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = En(Error(M(423)), t), t = lo(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = En(Error(M(424)), t), t = lo(e, t, r, n, l);
          break e;
        } else for (Re = It(t.stateNode.containerInfo.firstChild), ze = t, re = !0, Ye = null, n = Ru(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (xn(), r === l) {
            t = gt(e, t, n);
            break e;
          }
          xe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Ou(t), e === null && Vi(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = l.children, bi(r, l) ? s = null : i !== null && bi(r, i) && (t.flags |= 32), oc(e, t), xe(e, t, s, n), t.child;
    case 6:
      return e === null && Vi(t), null;
    case 13:
      return cc(e, t, n);
    case 4:
      return bs(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Sn(t, null, r, n) : xe(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Be(r, l), to(e, t, r, l, n);
    case 7:
      return xe(e, t, t.pendingProps, n), t.child;
    case 8:
      return xe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return xe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, s = l.value, ee(dl, r._currentValue), r._currentValue = s, i !== null) if (qe(i.value, s)) {
          if (i.children === l.children && !Te.current) {
            t = gt(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var o = i.dependencies;
          if (o !== null) {
            s = i.child;
            for (var u = o.firstContext; u !== null; ) {
              if (u.context === r) {
                if (i.tag === 1) {
                  u = ft(-1, n & -n), u.tag = 2;
                  var f = i.updateQueue;
                  if (f !== null) {
                    f = f.shared;
                    var _ = f.pending;
                    _ === null ? u.next = u : (u.next = _.next, _.next = u), f.pending = u;
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
          } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (s = i.return, s === null) throw Error(M(341));
            s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), Ui(s, n, t), s = i.sibling;
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
        xe(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, yn(t, n), l = Qe(l), r = r(l), t.flags |= 1, xe(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Be(r, t.pendingProps), l = Be(r.type, l), no(e, t, r, l, n);
    case 15:
      return sc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Be(r, l), Br(e, t), t.tag = 1, Me(r) ? (e = !0, ol(t)) : e = !1, yn(t, n), rc(t, r, l), Wi(t, r, l, n), Bi(null, t, r, !0, e, n);
    case 19:
      return dc(e, t, n);
    case 22:
      return ac(e, t, n);
  }
  throw Error(M(156, t.tag));
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
function Js(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function pp(e) {
  if (typeof e == "function") return Js(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === gs) return 11;
    if (e === ys) return 14;
  }
  return 2;
}
function Pt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ve(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Xr(e, t, n, r, l, i) {
  var s = 2;
  if (r = e, typeof e == "function") Js(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case tn:
      return Wt(n.children, l, i, t);
    case hs:
      s = 8, l |= 8;
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
        case zo:
          s = 10;
          break e;
        case bo:
          s = 9;
          break e;
        case gs:
          s = 11;
          break e;
        case ys:
          s = 14;
          break e;
        case wt:
          s = 16, r = null;
          break e;
      }
      throw Error(M(130, e == null ? e : typeof e, ""));
  }
  return t = Ve(s, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
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
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Gl(0), this.expirationTimes = Gl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Zs(e, t, n, r, l, i, s, o, u) {
  return e = new mp(e, t, n, o, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ve(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, zs(i), e;
}
function hp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: en, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Ic(e) {
  if (!e) return Rt;
  e = e._reactInternals;
  e: {
    if (Jt(e) !== e || e.tag !== 1) throw Error(M(170));
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
    throw Error(M(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Me(n)) return Iu(e, n, t);
  }
  return t;
}
function Tc(e, t, n, r, l, i, s, o, u) {
  return e = Zs(n, r, !0, e, l, i, s, o, u), e.context = Ic(null), n = e.current, r = ke(), l = Lt(n), i = ft(r, l), i.callback = t ?? null, Tt(n, i, l), e.current.lanes = l, yr(e, l, r), Le(e, r), e;
}
function Rl(e, t, n, r) {
  var l = t.current, i = ke(), s = Lt(l);
  return n = Ic(n), t.context === null ? t.context = n : t.pendingContext = n, t = ft(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Tt(l, t, s), e !== null && (Ze(e, l, s, i), Wr(e, l, s)), s;
}
function xl(e) {
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
function qs(e, t) {
  ho(e, t), (e = e.alternate) && ho(e, t);
}
function gp() {
  return null;
}
var Mc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ea(e) {
  this._internalRoot = e;
}
zl.prototype.render = ea.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(M(409));
  Rl(e, t, null, null);
};
zl.prototype.unmount = ea.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Yt(function() {
      Rl(null, e, null, null);
    }), t[mt] = null;
  }
};
function zl(e) {
  this._internalRoot = e;
}
zl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = au();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < xt.length && t !== 0 && t < xt[n].priority; n++) ;
    xt.splice(n, 0, e), n === 0 && uu(e);
  }
};
function ta(e) {
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
        var f = xl(s);
        i.call(f);
      };
    }
    var s = Tc(t, r, e, 0, null, !1, !1, "", go);
    return e._reactRootContainer = s, e[mt] = s.current, ar(e.nodeType === 8 ? e.parentNode : e), Yt(), s;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function() {
      var f = xl(u);
      o.call(f);
    };
  }
  var u = Zs(e, 0, !1, null, null, !1, !1, "", go);
  return e._reactRootContainer = u, e[mt] = u.current, ar(e.nodeType === 8 ? e.parentNode : e), Yt(function() {
    Rl(t, u, n, r);
  }), u;
}
function Ol(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof l == "function") {
      var o = l;
      l = function() {
        var u = xl(s);
        o.call(u);
      };
    }
    Rl(t, s, e, l);
  } else s = yp(n, t, e, l, r);
  return xl(s);
}
iu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Vn(t.pendingLanes);
        n !== 0 && (_s(t, n | 1), Le(t, oe()), !(Y & 6) && (Cn = oe() + 500, Ot()));
      }
      break;
    case 13:
      Yt(function() {
        var r = ht(e, 1);
        if (r !== null) {
          var l = ke();
          Ze(r, e, 1, l);
        }
      }), qs(e, 1);
  }
};
xs = function(e) {
  if (e.tag === 13) {
    var t = ht(e, 134217728);
    if (t !== null) {
      var n = ke();
      Ze(t, e, 134217728, n);
    }
    qs(e, 134217728);
  }
};
su = function(e) {
  if (e.tag === 13) {
    var t = Lt(e), n = ht(e, t);
    if (n !== null) {
      var r = ke();
      Ze(n, e, t, r);
    }
    qs(e, t);
  }
};
au = function() {
  return q;
};
ou = function(e, t) {
  var n = q;
  try {
    return q = e, t();
  } finally {
    q = n;
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
            if (!l) throw Error(M(90));
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
Ko = Ks;
Yo = Yt;
var vp = { usingClientEntryPoint: !1, Events: [wr, sn, jl, Go, Bo, Ks] }, Fn = { findFiberByHostInstance: $t, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, wp = { bundleType: Fn.bundleType, version: Fn.version, rendererPackageName: Fn.rendererPackageName, rendererConfig: Fn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: yt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Zo(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Fn.findFiberByHostInstance || gp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Or = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Or.isDisabled && Or.supportsFiber) try {
    kl = Or.inject(wp), st = Or;
  } catch {
  }
}
Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vp;
Oe.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ta(t)) throw Error(M(200));
  return hp(e, t, null, n);
};
Oe.createRoot = function(e, t) {
  if (!ta(e)) throw Error(M(299));
  var n = !1, r = "", l = Mc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Zs(e, 1, !1, null, null, n, !1, r, l), e[mt] = t.current, ar(e.nodeType === 8 ? e.parentNode : e), new ea(t);
};
Oe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(M(188)) : (e = Object.keys(e).join(","), Error(M(268, e)));
  return e = Zo(t), e = e === null ? null : e.stateNode, e;
};
Oe.flushSync = function(e) {
  return Yt(e);
};
Oe.hydrate = function(e, t, n) {
  if (!bl(t)) throw Error(M(200));
  return Ol(null, e, t, !0, n);
};
Oe.hydrateRoot = function(e, t, n) {
  if (!ta(e)) throw Error(M(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", s = Mc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Tc(t, null, e, 1, n ?? null, l, !1, i, s), e[mt] = t.current, ar(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new zl(t);
};
Oe.render = function(e, t, n) {
  if (!bl(t)) throw Error(M(200));
  return Ol(null, e, t, !1, n);
};
Oe.unmountComponentAtNode = function(e) {
  if (!bl(e)) throw Error(M(40));
  return e._reactRootContainer ? (Yt(function() {
    Ol(null, null, e, !1, function() {
      e._reactRootContainer = null, e[mt] = null;
    });
  }), !0) : !1;
};
Oe.unstable_batchedUpdates = Ks;
Oe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!bl(n)) throw Error(M(200));
  if (e == null || e._reactInternals === void 0) throw Error(M(38));
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
window.api = B;
const _p = async () => {
  const e = await B.fetchApi("/meld/home-dir");
  if (!e.ok)
    throw new Error("Failed to fetch home directory");
  return (await e.json()).home;
}, Jr = async (e = 0, t = 30, n = "", r = "default", l = !1) => {
  const i = await B.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${l ? "&minimal=true" : ""}`
  );
  if (!i.ok)
    throw new Error(`Failed to fetch images: ${i.statusText}`);
  return await i.json();
}, xp = async (e) => {
  const t = await B.fetchApi(`/meld/image/${e}/details`);
  if (!t.ok)
    throw new Error(`Failed to fetch image details: ${t.statusText}`);
  return await t.json();
}, Sp = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await B.fetchApi(n);
  return r.ok ? await r.json() : [];
}, kp = async () => {
  const e = await B.fetchApi("/meld/search-suggestions");
  return e.ok ? await e.json() : [];
}, Dc = async () => {
  const e = await B.fetchApi("/meld/settings");
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
      "gallery.view_mode": "grid_details",
      "gallery.related_phash_threshold": 8,
      "gallery.suggest_phash_threshold": 12
    };
  const t = await e.json();
  return typeof t["sidebar.show_filename"] == "boolean" && (t["sidebar.show_filename"] = t["sidebar.show_filename"] ? "filename" : "none"), typeof t["viewer.details.show_filename"] == "boolean" && (t["viewer.details.show_filename"] = t["viewer.details.show_filename"] ? "filename" : "none"), typeof t["fullscreen.details.show_filename"] == "boolean" && (t["fullscreen.details.show_filename"] = t["fullscreen.details.show_filename"] ? "filename" : "none"), t;
}, Ep = async (e, t) => {
  if (!(await B.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  })).ok)
    throw new Error("Failed to save setting");
}, Cp = async (e, t) => {
  if (!(await B.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  })).ok)
    throw new Error("Failed to link parent");
}, Np = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await B.fetchApi(
    `/meld/suggest-parents?id=${e}${n}`
  );
  return r.ok ? await r.json() : [];
}, is = async (e) => {
  const t = await B.fetchApi(`/meld/lineage?id=${e}`);
  return t.ok ? await t.json() : [];
}, jp = async (e) => {
  const t = new FormData();
  t.append("image", e), t.append("overwrite", "true");
  const n = await B.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, ss = async (e, t = !1) => {
  const n = await B.fetchApi("/meld/bulk-delete", {
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
}, as = async (e) => {
  const t = await B.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to restore images");
  }
}, Rc = async (e) => {
  const t = await B.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok)
    throw new Error("Failed to register image");
  return await t.json();
}, Ip = async (e, t, n = !1, r) => {
  const l = await B.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  return l.ok ? await l.json() : { folders: [], images: [], image_count: 0 };
}, Tp = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await B.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  return l.ok ? await l.json() : {};
}, Mp = async (e, t, n) => {
  const r = await B.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  return r.ok ? (await r.json()).count : 0;
}, Lp = async (e) => {
  const t = await B.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to start scan");
  }
}, Pp = async () => {
  if (!(await B.fetchApi("/meld/scan/cancel", {
    method: "POST"
  })).ok)
    throw new Error("Failed to cancel scan");
}, Dp = async () => {
  const e = await B.fetchApi("/meld/favorites");
  return e.ok ? await e.json() : [];
}, Rp = async (e, t) => {
  if (!(await B.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  })).ok)
    throw new Error("Failed to save favorite");
}, vo = async (e) => {
  if (!(await B.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  })).ok)
    throw new Error("Failed to delete favorite");
}, zp = async (e, t) => {
  if (!(await B.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  })).ok)
    throw new Error("Failed to update favorite");
}, na = async () => {
  const e = await B.fetchApi("/meld/tags");
  return e.ok ? await e.json() : [];
}, bp = async (e) => {
  const t = await B.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  if (!t.ok)
    throw new Error("Failed to create tag");
  return await t.json();
}, Op = async (e) => {
  if (!(await B.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  })).ok)
    throw new Error("Failed to delete tag");
}, Fp = async (e, t) => {
  const n = await B.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  if (!n.ok) {
    const r = await n.json();
    throw new Error(r.error || "Failed to rename tag");
  }
}, Ap = async (e, t) => {
  if (!(await B.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  })).ok)
    throw new Error("Failed to update image tags");
}, $p = async (e, t, n) => {
  if (!(await B.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  })).ok)
    throw new Error("Failed to bulk update image tags");
}, Vp = async (e) => {
  const t = await B.fetchApi(`/meld/image/${e}/workflow`);
  if (!t.ok)
    throw new Error("Failed to fetch workflow");
  return await t.json();
}, Up = async (e) => {
  const t = await B.fetchApi(`/meld/image/${e}/snapshot_data`);
  if (!t.ok)
    throw new Error("Failed to fetch snapshot data");
  return await t.json();
};
var zc = { exports: {} }, Fl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qp = y, Wp = Symbol.for("react.element"), Hp = Symbol.for("react.fragment"), Gp = Object.prototype.hasOwnProperty, Bp = Qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Kp = { key: !0, ref: !0, __self: !0, __source: !0 };
function bc(e, t, n) {
  var r, l = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) Gp.call(t, r) && !Kp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Wp, type: e, key: i, ref: s, props: l, _owner: Bp.current };
}
Fl.Fragment = Hp;
Fl.jsx = bc;
Fl.jsxs = bc;
zc.exports = Fl;
var a = zc.exports;
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
      absoluteStrokeWidth: s,
      className: o = "",
      children: u,
      ...f
    }, _) => y.createElement(
      "svg",
      {
        ref: _,
        ...Yp,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: s ? Number(i) * 24 / Number(l) : i,
        className: ["lucide", `lucide-${Xp(e)}`, o].join(" "),
        ...f
      },
      [
        ...t.map(([x, m]) => y.createElement(x, m)),
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
const Jp = K("AlertTriangle", [
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
const Zp = K("ArrowBigRight", [
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
const sm = K("Info", [
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
const am = K("LayoutList", [
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
const ra = K("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zn = K("RefreshCw", [
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
const _o = K("Star", [
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
const Zt = K("Tag", [
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
}, _m = (...e) => {
  console.error("[Meld]", ...e);
}, $ = {
  log: vm,
  warn: wm,
  error: _m,
  init: ym
}, xm = {
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
    "gallery.view_mode": "grid_details",
    "gallery.related_phash_threshold": 8,
    "gallery.suggest_phash_threshold": 12
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
      const l = new Set(t.payload), i = e.images.filter((o) => !l.has(o.id)), s = new Set(e.selectedIds);
      for (const o of t.payload)
        s.delete(o);
      return {
        ...e,
        images: i,
        selectedIds: s,
        pagination: {
          ...e.pagination,
          total: Math.max(0, e.pagination.total - t.payload.length)
        }
      };
    }
    case "ADD_IMAGES": {
      const l = t.payload, i = [...e.images, ...l], s = Array.from(
        new Map(i.map((o) => [o.id, o])).values()
      ).sort((o, u) => u.created_at - o.created_at);
      return {
        ...e,
        images: s,
        pagination: {
          ...e.pagination,
          total: e.pagination.total + l.length
        }
      };
    }
    case "UPDATE_IMAGE": {
      const l = t.payload, i = e.images.map(
        (o) => o.id === l.id ? l : o
      ), s = e.lineageImages.map(
        (o) => o.id === l.id ? l : o
      );
      return {
        ...e,
        images: i,
        lineageImages: s
      };
    }
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
      const [s, o] = [
        Math.min(l, i),
        Math.max(l, i)
      ], u = new Set(e.selectedIds);
      for (let f = s; f <= o; f++)
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
        (f) => f.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && f.has_children)
      );
      if (e.viewerImageId === null || s.length === 0)
        return e;
      const o = s.findIndex(
        (f) => f.id === e.viewerImageId
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
        (f) => f.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && f.has_children)
      );
      if (e.viewerImageId === null || s.length === 0)
        return e;
      const o = s.findIndex(
        (f) => f.id === e.viewerImageId
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
  const [t, n] = y.useReducer(Sm, xm), r = y.useRef(t.images.length), l = y.useRef(0);
  y.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const i = y.useCallback(
    async (w, g, S) => {
      const j = t.settings["gallery.max_load_count"], c = 200;
      let d = w;
      for (; d < Math.min(g, j) && S === l.current; )
        try {
          const p = Math.min(c, j - d);
          $.log("Background fetch: starting chunk", {
            offset: d,
            limit: p
          });
          const C = await Jr(
            d,
            p,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (S !== l.current || (n({ type: "APPEND_IMAGES", payload: C }), d += C.images.length, C.images.length === 0 || d >= C.total))
            break;
          await new Promise((L) => setTimeout(L, 300));
        } catch (p) {
          $.error("Background fetch failed", p);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), s = y.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const w = performance.now(), g = ++l.current;
    try {
      const S = t.searchQuery.trim() !== "", j = t.settings["gallery.initial_load_count"];
      $.log("refreshImages: starting initial fetch", {
        isSearch: S,
        fetchLimit: j,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const c = await Jr(
        0,
        j,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), d = performance.now() - w;
      $.log("refreshImages: initial fetch complete", {
        count: c.images.length,
        total: c.total,
        offset: c.offset,
        durationMs: d.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: c }), c.total > j && i(j, c.total, g);
    } catch (S) {
      $.error("refreshImages: fetch failed", S), n({
        type: "SET_ERROR",
        payload: S instanceof Error ? S.message : String(S)
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
    const w = performance.now();
    try {
      const g = r.current, S = t.searchQuery.trim() !== "", j = t.pagination.limit;
      $.log("loadMoreImages: starting fetch", {
        nextOffset: g,
        fetchLimit: j,
        isSearch: S
      });
      const c = await Jr(
        g,
        j,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), d = performance.now() - w;
      $.log("loadMoreImages: fetch complete", {
        count: c.images.length,
        total: c.total,
        offset: c.offset,
        durationMs: d.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: c });
    } catch (g) {
      $.error("loadMoreImages: fetch failed", g), n({
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
      const w = await Dp();
      n({ type: "SET_FAVORITES", payload: w });
    } catch (w) {
      $.error("Failed to load favorites", w);
    }
  }, []), f = y.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const w = Array.from(t.selectedIds), S = t.images.filter(
      (j) => t.selectedIds.has(j.id)
    ).some(
      (j) => j.parent_id || j.has_children
    );
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: w,
        hasLineage: S,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), _ = y.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const w = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 }), await as(w), t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: w }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (g) {
      n({
        type: "SET_ERROR",
        payload: g instanceof Error ? g.message : String(g)
      });
    }
  }, [t.selectedIds, t.viewScope]), x = y.useCallback(
    async (w, g) => {
      try {
        await Ep(w, g), n({ type: "SET_SETTINGS", payload: { [w]: g } });
      } catch (S) {
        n({
          type: "SET_ERROR",
          payload: S instanceof Error ? S.message : String(S)
        });
      }
    },
    []
  ), m = y.useCallback(
    async (w) => {
      const g = t.images.find((S) => S.id === w);
      if (g && !g.is_minimal)
        return g;
      try {
        $.log("fetchFullImageDetails: fetching full data", { id: w });
        const S = await xp(w);
        return n({ type: "UPDATE_IMAGE", payload: S }), S;
      } catch (S) {
        throw $.error("Failed to fetch image details", S), S;
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
        $.error("Failed to load settings", g);
      }
    })();
  }, []), y.useEffect(() => {
    u();
  }, [u]), y.useEffect(() => {
    const w = () => {
      s();
    }, g = (j) => {
      const c = j.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: c }
      });
    }, S = (j) => {
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
      }), s();
    };
    return window.addEventListener("meld-refresh", w), window.addEventListener("meld-scan-progress", g), window.addEventListener("meld-scan-finished", S), () => {
      window.removeEventListener("meld-refresh", w), window.removeEventListener("meld-scan-progress", g), window.removeEventListener("meld-scan-finished", S);
    };
  }, [s, t.scanStatus.progress.total]), y.useEffect(() => {
    s();
  }, [s]), /* @__PURE__ */ a.jsx(
    Wc.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: s,
        loadMoreImages: o,
        refreshFavorites: u,
        deleteSelected: f,
        restoreSelected: _,
        updateSetting: x,
        fetchFullImageDetails: m
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
}, Cm = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = et(), l = e.selectedIds.size;
  if (l === 0) return null;
  const i = e.viewScope === "trash", s = () => {
    const o = e.images.filter(
      (f) => e.selectedIds.has(f.id)
    ), u = /* @__PURE__ */ new Set();
    for (const f of o)
      if (f.tags)
        for (const _ of f.tags)
          u.add(_);
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
                  Zn,
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
        ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--edit",
              onClick: s,
              children: [
                /* @__PURE__ */ a.jsx(
                  Zt,
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
        /* @__PURE__ */ a.jsxs(
          "button",
          {
            type: "button",
            className: "meld-bulk-bar__button meld-bulk-bar__button--cancel",
            onClick: () => t({ type: "CLEAR_SELECTION" }),
            children: [
              /* @__PURE__ */ a.jsx(Ee, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
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
  const { state: l, dispatch: i } = et(), s = y.useRef(!0);
  y.useEffect(() => () => {
    s.current = !1;
  }, []);
  const o = y.useRef(l.viewerImageId);
  y.useEffect(() => {
    o.current = l.viewerImageId;
  }, [l.viewerImageId]);
  const u = y.useCallback(() => {
    i({ type: "CLOSE_MODAL" });
  }, [i]), f = y.useCallback(
    (m) => {
      if (!s.current) return;
      const w = o.current;
      if (w === null || !m.has(w))
        return;
      const g = l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
        (c) => c.exists !== !1 && !(l.settings["gallery.hide_parent_images"] && c.has_children)
      ), S = g.findIndex(
        (c) => c.id === w
      );
      if (S === -1) return;
      let j = !1;
      for (let c = S + 1; c < g.length; c++)
        if (!m.has(g[c].id)) {
          i({
            type: "OPEN_VIEWER",
            payload: { id: g[c].id, mode: l.viewerMode }
          }), j = !0;
          break;
        }
      if (!j) {
        for (let c = S - 1; c >= 0; c--)
          if (!m.has(g[c].id)) {
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
    const m = (w) => {
      w.key === "Escape" && u();
    };
    return window.addEventListener("keydown", m), () => window.removeEventListener("keydown", m);
  }, [u]);
  const _ = async () => {
    try {
      i({ type: "SET_LOADING", payload: !0 });
      const m = l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
        (S) => S.exists !== !1 && !(l.settings["gallery.hide_parent_images"] && S.has_children)
      ), w = new Set(e), g = m.filter(
        (S) => w.has(S.id)
      );
      if (f(w), await ss(e, n), !s.current) return;
      !n && r && r(g), i({ type: "REMOVE_IMAGES", payload: e }), i({ type: "CLEAR_SELECTION" }), i({ type: "CLOSE_MODAL" });
    } catch (m) {
      i({
        type: "SET_ERROR",
        payload: m instanceof Error ? m.message : String(m)
      }), i({ type: "SET_LOADING", payload: !1 });
    }
  }, x = async () => {
    try {
      i({ type: "SET_LOADING", payload: !0 });
      const m = l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
        (S) => S.exists !== !1 && !(l.settings["gallery.hide_parent_images"] && S.has_children)
      ), w = new Set(e);
      for (const S of e) {
        const j = await is(S);
        if (!s.current) return;
        for (const c of j)
          w.add(c.id);
      }
      const g = m.filter(
        (S) => w.has(S.id)
      );
      if (f(w), await ss(Array.from(w), n), !s.current) return;
      !n && r && r(g), i({
        type: "REMOVE_IMAGES",
        payload: Array.from(w)
      }), i({ type: "CLEAR_SELECTION" }), i({ type: "CLOSE_MODAL" });
    } catch (m) {
      i({
        type: "SET_ERROR",
        payload: m instanceof Error ? m.message : String(m)
      }), i({ type: "SET_LOADING", payload: !1 });
    }
  };
  return De.createPortal(
    /* @__PURE__ */ a.jsx("div", { className: "meld-modal-overlay", onClick: u, children: /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "meld-modal-content meld-modal-content--small",
        onClick: (m) => m.stopPropagation(),
        children: [
          /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ a.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
              /* @__PURE__ */ a.jsx(jn, { size: 20, color: "var(--meld-danger-color)" }),
              n ? "Permanent Deletion" : "Move to Trash"
            ] }),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: u,
                children: /* @__PURE__ */ a.jsx(Ee, { size: 20 })
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
                        Jp,
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
                onClick: u,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-danger",
                  onClick: _,
                  children: n ? "Delete Permanently" : "Move to Trash"
                }
              ),
              t && /* @__PURE__ */ a.jsx(
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
  const { state: t, dispatch: n, fetchFullImageDetails: r } = et(), l = t.selectedIds.has(e.id), s = (t.settings["gallery.view_mode"] || "grid_details") === "grid_only", [o, u] = y.useState(null), [f, _] = y.useState(!1), [x, m] = y.useState(null), [w, g] = y.useState(!1), S = y.useRef(null), j = async (v, b, E = !1) => {
    try {
      await navigator.clipboard.writeText(v), E ? (g(!0), setTimeout(() => g(!1), 2e3)) : (m(b), setTimeout(() => m(null), 2e3));
    } catch (P) {
      console.error("Failed to copy text: ", P);
    }
  };
  y.useEffect(() => {
    const v = (E) => {
      E.key === "Escape" && (o ? u(null) : _(!1));
    }, b = (E) => {
      S.current && !S.current.contains(E.target) && _(!1);
    };
    return window.addEventListener("keydown", v), f && document.addEventListener("mousedown", b), () => {
      window.removeEventListener("keydown", v), document.removeEventListener("mousedown", b);
    };
  }, [f, o]);
  const c = (v) => {
    const b = t.settings["gallery.lineage_max_depth"];
    if (b === 0) return [];
    if (v.ancestors && v.ancestors.length > 0)
      return v.ancestors.slice(0, b).map((h) => ({
        id: h.id,
        imgSrc: Se(h)
      }));
    const E = v.parent_id;
    if (!E || !v.parent_filename) return [];
    const P = t.images.find((h) => h.id === E);
    let V = null;
    if (P ? V = Se(P) : V = Se({
      filename: v.parent_filename,
      subfolder: v.parent_subfolder || "",
      type: v.parent_type
    }), !V) return [];
    const X = {
      id: E || null,
      imgSrc: V
    };
    if (P && b > 1) {
      const h = c(P);
      return [X, ...h].slice(0, b);
    }
    return [X];
  }, d = c(e), C = t.settings["sidebar.show_filename"] === "filepath" ? `${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, L = Se(e), O = (v) => {
    v.shiftKey ? (v.preventDefault(), v.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : v.ctrlKey || v.metaKey || t.selectedIds.size > 0 ? (v.preventDefault(), v.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
  }, N = (v) => {
    v.shiftKey ? (v.preventDefault(), v.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : v.ctrlKey || v.metaKey || t.selectedIds.size > 0 ? (v.preventDefault(), v.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
  }, I = (v) => {
    (v.shiftKey || v.ctrlKey || v.metaKey || t.selectedIds.size > 0) && v.preventDefault();
  }, Q = (v) => {
    (v.key === "Enter" || v.key === " ") && (v.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
  }, T = async () => {
    try {
      const v = await Vp(e.id);
      if (!v.workflow) {
        alert("No workflow information is saved for this image.");
        return;
      }
      await window.app.loadGraphData(
        v.workflow
      ), $.log("Workflow restored successfully from Meld");
    } catch (v) {
      $.error("Error restoring workflow:", v), alert("Failed to restore workflow.");
    }
  }, k = async () => {
    try {
      const v = await Up(e.id), b = "MeldUnifiedLoader", E = window.app, V = window.LiteGraph.createNode(b);
      if (!V) {
        console.error(`Node type ${b} not found.`), alert(
          `Node type ${b} not found. Please make sure the Meld Unified Loader node is installed.`
        );
        return;
      }
      const X = {
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
      if (V.widgets) {
        for (const [H, Z] of Object.entries(X)) {
          const R = v[H];
          if (R != null) {
            const U = V.widgets.find(
              (D) => D.name === Z
            );
            U && (U.value = R);
          }
        }
        const F = V.widgets.find(
          (H) => H.name === "control_after_generate"
        );
        F && (F.value = "fixed");
      }
      const h = E.canvas.ds.offset, z = E.canvas.ds.scale;
      V.pos = [(-h[0] + 400) / z, (-h[1] + 300) / z], E.graph.add(V), E.canvas.selectNode(V), E.canvas.centerOnNode(V);
    } catch (v) {
      console.error("Error adding Unified Loader:", v), alert("Failed to load settings.");
    }
  };
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `meld-image-card ${l ? "meld-image-card--selected" : ""} ${s ? "meld-image-card--grid-only" : ""}`,
      onClick: N,
      onMouseDown: I,
      onKeyDown: Q,
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ a.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ a.jsx(
          "img",
          {
            src: L,
            className: "meld-image-card__thumbnail",
            alt: e.filename,
            loading: "lazy",
            onMouseDown: I,
            onClick: (v) => {
              v.stopPropagation(), O(v);
            }
          }
        ) }),
        !s && /* @__PURE__ */ a.jsxs("div", { className: "meld-image-card__details", children: [
          (t.settings["sidebar.show_filename"] !== "none" || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ a.jsxs("div", { className: "meld-image-card__filename", children: [
            t.settings["sidebar.show_filename"] !== "none" && C,
            t.settings["sidebar.show_filename"] !== "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
            t.settings["sidebar.show_filename"] === "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
          ] }),
          t.settings["gallery.show_parent_image"] && d.length > 0 && /* @__PURE__ */ a.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
            /* @__PURE__ */ a.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
            /* @__PURE__ */ a.jsx("div", { className: "meld-lineage-thumbs", children: d.map(
              (v, b) => v.imgSrc && /* @__PURE__ */ a.jsx(
                "img",
                {
                  src: v.imgSrc,
                  className: "meld-lineage-badge__parent-thumb",
                  loading: "lazy",
                  onClick: (E) => {
                    E.stopPropagation(), n({
                      type: "OPEN_VIEWER",
                      payload: {
                        id: v.id || e.id,
                        mode: "lineage"
                      }
                    });
                  },
                  title: b === 0 ? "Source" : b === 1 ? "Grand-Source" : `Ancestor (S${b + 1})`,
                  alt: "source thumb"
                },
                v.id || b
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
              onClick: async (v) => {
                v.stopPropagation();
                const b = await r(e.id);
                u({
                  title: "Model",
                  text: b.model_name || "-"
                });
              },
              children: [
                /* @__PURE__ */ a.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${x === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (v) => {
                      v.stopPropagation();
                      const b = await r(e.id);
                      j(b.model_name || "-", "Model");
                    },
                    children: x === "Model" ? "Copied!" : "Model"
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
              onClick: async (v) => {
                v.stopPropagation();
                const b = await r(e.id);
                u({
                  title: "Positive Prompt",
                  text: b.positive_prompt || b.positive || "-"
                });
              },
              children: [
                /* @__PURE__ */ a.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${x === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (v) => {
                      v.stopPropagation();
                      const b = await r(e.id);
                      j(
                        b.positive_prompt || b.positive || "-",
                        "Positive"
                      );
                    },
                    children: x === "Positive" ? "Copied!" : "Positive"
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
              onClick: async (v) => {
                v.stopPropagation();
                const b = await r(e.id);
                u({
                  title: "Negative Prompt",
                  text: b.negative_prompt || b.negative || "-"
                });
              },
              children: [
                /* @__PURE__ */ a.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${x === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (v) => {
                      v.stopPropagation();
                      const b = await r(e.id);
                      j(
                        b.negative_prompt || b.negative || "-",
                        "Negative"
                      );
                    },
                    children: x === "Negative" ? "Copied!" : "Negative"
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
              onClick: (v) => {
                v.stopPropagation(), n({
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
                /* @__PURE__ */ a.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((v, b) => /* @__PURE__ */ a.jsx(
                  "span",
                  {
                    className: "meld-image-card__tag",
                    children: v
                  },
                  `${v}-${b}`
                )) : /* @__PURE__ */ a.jsx(
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
        !s && /* @__PURE__ */ a.jsxs("div", { className: "meld-image-card__menu-container", ref: S, children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (v) => {
                v.stopPropagation(), _(!f);
              },
              title: "Menu",
              children: /* @__PURE__ */ a.jsx(cm, { size: 16 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (v) => {
                v.stopPropagation(), k();
              },
              title: "Add Unified Loader",
              children: /* @__PURE__ */ a.jsx(wo, { size: 16 })
            }
          ),
          f && /* @__PURE__ */ a.jsxs("div", { className: "meld-image-card__menu", children: [
            /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (v) => {
                  v.stopPropagation(), k(), _(!1);
                },
                children: [
                  /* @__PURE__ */ a.jsx(wo, { size: 14 }),
                  /* @__PURE__ */ a.jsx("span", { children: "Add Unified Loader" })
                ]
              }
            ),
            /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (v) => {
                  v.stopPropagation(), T(), _(!1);
                },
                children: [
                  /* @__PURE__ */ a.jsx(Zp, { size: 14 }),
                  /* @__PURE__ */ a.jsx("span", { children: "Restore Full Workflow" })
                ]
              }
            ),
            /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (v) => {
                  v.stopPropagation(), n({
                    type: "OPEN_MODAL",
                    payload: { type: "parent_selection", imageId: e.id }
                  }), _(!1);
                },
                children: [
                  /* @__PURE__ */ a.jsx(fm, { size: 14 }),
                  /* @__PURE__ */ a.jsx("span", { children: "Add source image" })
                ]
              }
            ),
            /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (v) => {
                  v.stopPropagation(), n({
                    type: "OPEN_MODAL",
                    payload: {
                      type: "tag_edit",
                      imageIds: [e.id],
                      tags: e.tags || []
                    }
                  }), _(!1);
                },
                children: [
                  /* @__PURE__ */ a.jsx(Zt, { size: 14 }),
                  /* @__PURE__ */ a.jsx("span", { children: "Edit Tags" })
                ]
              }
            )
          ] })
        ] }),
        o && De.createPortal(
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "meld-prompt-popup-overlay",
              onClick: (v) => {
                v.stopPropagation(), u(null);
              },
              children: /* @__PURE__ */ a.jsxs(
                "div",
                {
                  className: "meld-prompt-popup-content",
                  onClick: (v) => v.stopPropagation(),
                  children: [
                    /* @__PURE__ */ a.jsxs("div", { className: "meld-prompt-popup-header", children: [
                      /* @__PURE__ */ a.jsx("span", { children: o.title }),
                      /* @__PURE__ */ a.jsxs(
                        "div",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            w ? /* @__PURE__ */ a.jsx(
                              Ac,
                              {
                                size: 18,
                                style: { color: "var(--meld-success-color)" }
                              }
                            ) : /* @__PURE__ */ a.jsx(
                              rm,
                              {
                                className: "meld-prompt-popup-copy",
                                size: 18,
                                onClick: () => j(o.text, "", !0)
                              }
                            ),
                            /* @__PURE__ */ a.jsx(
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
                    /* @__PURE__ */ a.jsx("div", { className: "meld-prompt-popup-text", children: o.text })
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
}, Gc = () => {
  const { dispatch: e } = et(), [t, n] = y.useState(() => {
    const k = localStorage.getItem("meld-import-config"), v = {
      type: "output",
      subfolder: "",
      custom_path: "",
      recursive: !0,
      auto_link_parent: !0,
      link_strategy: "new_only",
      tags: []
    };
    if (k)
      try {
        const b = JSON.parse(k);
        return { ...v, ...b, tags: [] };
      } catch {
        return v;
      }
    return v;
  });
  y.useEffect(() => {
    const { tags: k, ...v } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(v));
  }, [t]);
  const [r, l] = y.useState([]), [i, s] = y.useState([]), [o, u] = y.useState(0), [f, _] = y.useState(!1), [x, m] = y.useState([]), [w, g] = y.useState(""), [S, j] = y.useState(!1), [c, d] = y.useState(null);
  y.useEffect(() => {
    (async () => {
      try {
        const v = await _p();
        n((b) => b.custom_path ? b : { ...b, custom_path: v });
      } catch (v) {
        $.error("Failed to fetch home directory:", v);
      }
    })();
  }, []), y.useEffect(() => {
    const k = new AbortController();
    return (async () => {
      const b = t.type === "custom" ? t.custom_path : t.subfolder;
      if ($.log(
        `loadFolders started. Path: "${b}", Type: "${t.type}"`
      ), t.type === "custom" && !b) {
        $.log("Custom path is empty, skipping load."), l([]), s([]), u(0);
        return;
      }
      _(!0);
      const E = b, P = t.type;
      try {
        $.log("Step 1: Fast load starting...");
        const V = await Ip(
          t.type,
          b,
          !0,
          k.signal
        );
        if (k.signal.aborted) {
          $.log("Step 1: Aborted.");
          return;
        }
        $.log(
          `Step 1 complete. Found ${V.folders.length} folders, ${V.images.length} images.`
        ), l(V.folders), s(V.images), u(null);
        const X = V.folders.map((h) => h.name);
        X.length > 0 && ($.log(
          `Step 2: Metadata fetch starting for ${X.length} folders...`
        ), Tp(
          P,
          E,
          X,
          k.signal
        ).then((h) => {
          if (k.signal.aborted) {
            $.log("Step 2: Aborted.");
            return;
          }
          $.log("Step 2: Metadata fetch complete."), l(
            (z) => z.map((F) => {
              const H = h[F.name];
              return H ? { ...F, count: H.count, preview: H.preview } : F;
            })
          );
        }).catch((h) => {
          h.name !== "AbortError" && $.error("Step 2: Metadata fetch failed:", h);
        })), $.log("Step 3: Path image count starting..."), Mp(P, E, k.signal).then((h) => {
          if (k.signal.aborted) {
            $.log("Step 3: Aborted.");
            return;
          }
          $.log(`Step 3: Path image count complete: ${h}`), u(h);
        }).catch((h) => {
          h.name !== "AbortError" && $.error("Step 3: Path image count failed:", h);
        });
      } catch (V) {
        if (V.name === "AbortError") {
          $.log("Request aborted.");
          return;
        }
        $.error("Failed to load folders:", V), l([]), s([]), u(0);
      } finally {
        k.signal.aborted || _(!1);
      }
    })(), () => {
      k.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const p = y.useCallback(async () => {
    j(!0);
    try {
      const k = await na();
      m(k);
    } catch (k) {
      $.error("Failed to fetch tags:", k);
    } finally {
      j(!1);
    }
  }, []);
  y.useEffect(() => {
    p();
  }, [p]), y.useEffect(() => {
    const k = (v) => {
      v.key === "Escape" && (v.preventDefault(), v.stopImmediatePropagation(), c ? d(null) : e({ type: "CLOSE_MODAL" }));
    };
    return window.addEventListener("keydown", k, { capture: !0 }), () => window.removeEventListener("keydown", k, { capture: !0 });
  }, [c, e]);
  const C = y.useMemo(() => x.filter(
    (k) => k.name.toLowerCase().includes(w.toLowerCase()) && !t.tags.includes(k.name)
  ), [x, w, t.tags]), L = (k) => {
    const v = k.trim();
    v && !t.tags.includes(v) && (n({ ...t, tags: [...t.tags, v] }), g(""));
  }, O = (k) => {
    n({ ...t, tags: t.tags.filter((v) => v !== k) });
  }, N = (k) => {
    k.key === "Enter" && w.trim() && (k.preventDefault(), L(w.trim()));
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
      $.error("Failed to start scan:", k), alert(`Failed to start scan: ${k}`);
    }
  }, Q = (k) => {
    if (t.type === "custom") {
      const v = t.custom_path.includes("\\") ? "\\" : "/", b = t.custom_path.endsWith(v) ? `${t.custom_path}${k}` : `${t.custom_path}${v}${k}`;
      n({ ...t, custom_path: b });
    } else {
      const v = t.subfolder ? `${t.subfolder}/${k}` : k;
      n({ ...t, subfolder: v });
    }
  }, T = () => {
    if (t.type === "custom") {
      const k = t.custom_path.includes("\\") ? "\\" : "/", v = t.custom_path.split(k);
      if (v.length > 1) {
        v.pop();
        let b = v.join(k);
        b === "" && k === "/" && (b = "/"), n({ ...t, custom_path: b });
      }
    } else {
      const k = t.subfolder.split("/");
      k.pop(), n({ ...t, subfolder: k.join("/") });
    }
  };
  return De.createPortal(
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
              onClick: (k) => k.stopPropagation(),
              children: [
                /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ a.jsx("h2", { children: "Import Images" }),
                  /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => e({ type: "CLOSE_MODAL" }),
                      children: /* @__PURE__ */ a.jsx(Ee, { size: 20 })
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
                          onChange: (k) => n({
                            ...t,
                            type: k.target.value,
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
                          onChange: (k) => n({ ...t, recursive: k.target.checked })
                        }
                      ),
                      "Recursive Scan"
                    ] }) }),
                    /* @__PURE__ */ a.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ a.jsx("label", { htmlFor: "link-strategy", children: "Parent Linking" }),
                      /* @__PURE__ */ a.jsxs(
                        "select",
                        {
                          id: "link-strategy",
                          value: t.link_strategy,
                          onChange: (k) => n({
                            ...t,
                            link_strategy: k.target.value,
                            auto_link_parent: k.target.value !== "none"
                          }),
                          children: [
                            /* @__PURE__ */ a.jsx("option", { value: "none", children: "Do not link" }),
                            /* @__PURE__ */ a.jsx("option", { value: "new_only", children: "Only for new images" }),
                            /* @__PURE__ */ a.jsx("option", { value: "all", children: "Reset for all images" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ a.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ a.jsx("label", { htmlFor: "import-tags", children: "Tags to Add" }),
                      /* @__PURE__ */ a.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ a.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((k) => /* @__PURE__ */ a.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        k,
                        /* @__PURE__ */ a.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => O(k),
                            children: /* @__PURE__ */ a.jsx(Ee, { size: 12 })
                          }
                        )
                      ] }, k)) }),
                      /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ a.jsx(Nn, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ a.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: w,
                            onChange: (k) => g(k.target.value),
                            onKeyDown: N
                          }
                        ),
                        w.trim() && !t.tags.includes(w.trim()) && /* @__PURE__ */ a.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => L(w),
                            children: /* @__PURE__ */ a.jsx(ra, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ a.jsx("div", { className: "meld-tag-suggestions", children: S ? /* @__PURE__ */ a.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : C.length === 0 ? w && /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        w
                      ] }) : C.map((k) => /* @__PURE__ */ a.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => L(k.name),
                          children: k.name
                        },
                        k.id
                      )) })
                    ] }),
                    /* @__PURE__ */ a.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ a.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "meld-btn meld-btn-primary",
                        onClick: I,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ a.jsx(dm, { size: 16 }),
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
                          onClick: T,
                          children: [
                            /* @__PURE__ */ a.jsx($c, { size: 16 }),
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
                          onChange: (k) => n({ ...t, custom_path: k.target.value }),
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
                    /* @__PURE__ */ a.jsx("div", { className: "meld-folder-list", children: f ? /* @__PURE__ */ a.jsx("div", { className: "meld-browser-loading", children: "Loading..." }) : r.length === 0 && i.length === 0 ? /* @__PURE__ */ a.jsx("div", { className: "meld-browser-empty", children: "No items found." }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
                      r.map((k) => /* @__PURE__ */ a.jsxs(
                        "div",
                        {
                          className: "meld-folder-item",
                          onClick: () => Q(k.name),
                          children: [
                            /* @__PURE__ */ a.jsx("div", { className: "meld-folder-icon-wrapper", children: k.preview ? /* @__PURE__ */ a.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: Se(k.preview),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ a.jsx(im, { size: 16 }) }),
                            /* @__PURE__ */ a.jsx("span", { className: "meld-folder-name", children: k.name }),
                            /* @__PURE__ */ a.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${k.count === null ? "meld-folder-count--loading" : ""}`,
                                children: k.count !== null ? `${k.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ a.jsx(Vc, { size: 14 })
                          ]
                        },
                        k.name
                      )),
                      i.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "meld-browser-image-grid", children: i.map((k) => /* @__PURE__ */ a.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => d(k),
                          children: /* @__PURE__ */ a.jsx(
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
          c && /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (k) => {
                k.stopPropagation(), d(null);
              },
              children: /* @__PURE__ */ a.jsxs(
                "div",
                {
                  className: "meld-import-preview-content",
                  onClick: (k) => k.stopPropagation(),
                  children: [
                    /* @__PURE__ */ a.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                      /* @__PURE__ */ a.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-import-preview-close",
                          onClick: () => d(null),
                          children: /* @__PURE__ */ a.jsx(Ee, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ a.jsx(
                        "img",
                        {
                          src: Se(c),
                          alt: c.filename
                        }
                      )
                    ] }),
                    /* @__PURE__ */ a.jsx("div", { className: "meld-import-preview-info", children: c.filename })
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
}, Bc = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = et(), [l, i] = y.useState([]), [s, o] = y.useState(!0), [u, f] = y.useState(!1), _ = t.images.find((c) => c.id === e), x = y.useCallback(async () => {
    o(!0);
    try {
      const c = t.settings["gallery.suggest_phash_threshold"], d = await Np(e, c);
      i(d);
    } catch (c) {
      console.error("Failed to load suggestions:", c);
    } finally {
      o(!1);
    }
  }, [e, t.settings]);
  y.useEffect(() => {
    x();
  }, [x]);
  const m = async (c) => {
    try {
      await Cp(e, c), await r(), n({ type: "CLOSE_MODAL" });
    } catch (d) {
      console.error("Failed to link parent:", d);
    }
  }, w = async (c) => {
    o(!0);
    try {
      const d = await jp(c), { id: p } = await Rc({
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
  }, g = (c) => {
    c.preventDefault(), c.stopPropagation(), f(!1);
    const d = c.dataTransfer.files[0];
    d != null && d.type.startsWith("image/") && w(d);
  };
  if (!_) return null;
  const S = l.filter((c) => c.is_source_match), j = l.filter((c) => !c.is_source_match);
  return De.createPortal(
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: () => n({ type: "CLOSE_MODAL" }),
        children: /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-content", onClick: (c) => c.stopPropagation(), children: [
          /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ a.jsxs("h2", { children: [
              "Select Source for #",
              _.id
            ] }),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: () => n({ type: "CLOSE_MODAL" }),
                children: /* @__PURE__ */ a.jsx(Ee, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-body", children: [
            /* @__PURE__ */ a.jsxs(
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
                  /* @__PURE__ */ a.jsx(gm, { size: 32 }),
                  /* @__PURE__ */ a.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            s ? /* @__PURE__ */ a.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ a.jsxs("div", { className: "meld-suggestions-container", children: [
              S.length > 0 && /* @__PURE__ */ a.jsxs("section", { children: [
                /* @__PURE__ */ a.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ a.jsx("div", { className: "meld-suggestion-grid", children: S.map((c) => /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    className: "meld-suggestion-card",
                    onClick: () => m(c.id),
                    children: [
                      /* @__PURE__ */ a.jsx("img", { src: Se(c), alt: c.filename }),
                      /* @__PURE__ */ a.jsx("div", { className: "meld-suggestion-info", children: /* @__PURE__ */ a.jsx("span", { className: "meld-suggestion-filename", children: c.filename }) })
                    ]
                  },
                  c.id
                )) })
              ] }),
              /* @__PURE__ */ a.jsxs("section", { children: [
                /* @__PURE__ */ a.jsx("h3", { children: "Visual Matches (pHash)" }),
                j.length > 0 ? /* @__PURE__ */ a.jsx("div", { className: "meld-suggestion-grid", children: j.map((c) => /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    className: "meld-suggestion-card",
                    onClick: () => m(c.id),
                    children: [
                      /* @__PURE__ */ a.jsx("img", { src: Se(c), alt: c.filename }),
                      /* @__PURE__ */ a.jsxs("div", { className: "meld-suggestion-info", children: [
                        /* @__PURE__ */ a.jsx("span", { className: "meld-suggestion-filename", children: c.filename }),
                        /* @__PURE__ */ a.jsxs("span", { className: "meld-suggestion-distance", children: [
                          "Match:",
                          " ",
                          Math.round((64 - c.distance) / 64 * 100),
                          "%"
                        ] })
                      ] })
                    ]
                  },
                  c.id
                )) }) : /* @__PURE__ */ a.jsx("p", { className: "meld-no-suggestions", children: "No visual matches found." })
              ] })
            ] })
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, Kc = () => {
  const { state: e, dispatch: t, updateSetting: n } = et(), [r, l] = y.useState("General"), [i, s] = y.useState({
    ...e.settings
  }), [o, u] = y.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [f, _] = y.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [x, m] = y.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [w, g] = y.useState(e.settings["viewer.thumbnail_window_size"].toString()), [S, j] = y.useState(e.settings["gallery.trash_retention_days"].toString()), [c, d] = y.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [p, C] = y.useState(
    e.settings["gallery.related_phash_threshold"].toString()
  ), [L, O] = y.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [N, I] = y.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    Q,
    T
  ] = y.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    k,
    v
  ] = y.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), b = [
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
      key: "gallery.suggest_phash_threshold",
      label: "Parent Suggestion Threshold",
      description: "Maximum pHash distance for automatic parent linking (0-64). Default: 12. Recommended: 8-16. Smaller is stricter.",
      type: "number",
      category: "General",
      min: 0,
      max: 64
    },
    {
      key: "gallery.related_phash_threshold",
      label: "Related Images Threshold",
      description: "Maximum pHash distance for 'Similar Images' view (0-64). Default: 8. Recommended: 4-12. Smaller is stricter.",
      type: "number",
      category: "General",
      min: 0,
      max: 64
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
  ], E = async () => {
    const h = Object.keys(i).filter((z) => i[z] !== e.settings[z]);
    if (h.length > 0)
      for (const z of h)
        await n(z, i[z]);
    t({ type: "CLOSE_MODAL" });
  }, P = (h, z) => {
    s((F) => ({
      ...F,
      [h]: !z
    }));
  }, V = (h, z, F, H) => {
    h === "gallery.initial_load_count" ? u(z) : h === "gallery.max_load_count" ? _(z) : h === "gallery.lineage_max_depth" ? m(z) : h === "viewer.thumbnail_window_size" ? g(z) : h === "gallery.trash_retention_days" ? j(z) : h === "gallery.suggest_phash_threshold" ? d(z) : h === "gallery.related_phash_threshold" ? C(z) : h === "viewer.details.max_positive_prompt_lines" ? O(z) : h === "viewer.details.max_negative_prompt_lines" ? I(z) : h === "fullscreen.details.max_positive_prompt_lines" ? T(z) : h === "fullscreen.details.max_negative_prompt_lines" && v(z);
    const Z = Number.parseInt(z, 10);
    if (!Number.isNaN(Z)) {
      let R = Z;
      F !== void 0 && R < F && (R = F), H !== void 0 && R > H && (R = H), s((U) => ({
        ...U,
        [h]: R
      }));
    }
  }, X = b.filter(
    (h) => h.category === r
  );
  return De.createPortal(
    /* @__PURE__ */ a.jsx("div", { className: "meld-modal-overlay", onClick: E, children: /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "meld-modal-content meld-settings-modal",
        onClick: (h) => h.stopPropagation(),
        children: [
          /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ a.jsx("h2", { children: "Settings" }),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: E,
                children: /* @__PURE__ */ a.jsx(Ee, { size: 20 })
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
              /* @__PURE__ */ a.jsx("div", { className: "meld-settings-list", children: X.map((h) => {
                var z;
                return /* @__PURE__ */ a.jsxs("div", { className: "meld-settings-item", children: [
                  /* @__PURE__ */ a.jsxs("div", { className: "meld-settings-item__info", children: [
                    /* @__PURE__ */ a.jsx("div", { className: "meld-settings-item__label", children: h.label }),
                    /* @__PURE__ */ a.jsx("div", { className: "meld-settings-item__description", children: h.description })
                  ] }),
                  /* @__PURE__ */ a.jsxs("div", { className: "meld-settings-item__control", children: [
                    h.type === "boolean" && /* @__PURE__ */ a.jsxs("label", { className: "meld-switch", children: [
                      /* @__PURE__ */ a.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: !!i[h.key],
                          onChange: () => P(
                            h.key,
                            !!i[h.key]
                          )
                        }
                      ),
                      /* @__PURE__ */ a.jsx("span", { className: "meld-switch__slider" })
                    ] }),
                    h.type === "number" && /* @__PURE__ */ a.jsx(
                      "input",
                      {
                        type: "number",
                        className: "meld-number-input",
                        value: h.key === "gallery.initial_load_count" ? o : h.key === "gallery.max_load_count" ? f : h.key === "gallery.lineage_max_depth" ? x : h.key === "viewer.thumbnail_window_size" ? w : h.key === "viewer.details.max_positive_prompt_lines" ? L : h.key === "viewer.details.max_negative_prompt_lines" ? N : h.key === "fullscreen.details.max_positive_prompt_lines" ? Q : h.key === "fullscreen.details.max_negative_prompt_lines" ? k : h.key === "gallery.trash_retention_days" ? S : h.key === "gallery.suggest_phash_threshold" ? c : h.key === "gallery.related_phash_threshold" ? p : i[h.key],
                        min: h.min,
                        max: h.max,
                        onChange: (F) => V(
                          h.key,
                          F.target.value,
                          h.min,
                          h.max
                        ),
                        onBlur: () => {
                          h.key === "gallery.initial_load_count" ? u(
                            i["gallery.initial_load_count"].toString()
                          ) : h.key === "gallery.max_load_count" ? _(
                            i["gallery.max_load_count"].toString()
                          ) : h.key === "gallery.lineage_max_depth" ? m(
                            i["gallery.lineage_max_depth"].toString()
                          ) : h.key === "viewer.thumbnail_window_size" ? g(
                            i["viewer.thumbnail_window_size"].toString()
                          ) : h.key === "gallery.trash_retention_days" ? j(
                            i["gallery.trash_retention_days"].toString()
                          ) : h.key === "gallery.suggest_phash_threshold" ? d(
                            i["gallery.suggest_phash_threshold"].toString()
                          ) : h.key === "gallery.related_phash_threshold" ? C(
                            i["gallery.related_phash_threshold"].toString()
                          ) : h.key === "viewer.details.max_positive_prompt_lines" ? O(
                            i["viewer.details.max_positive_prompt_lines"].toString()
                          ) : h.key === "viewer.details.max_negative_prompt_lines" ? I(
                            i["viewer.details.max_negative_prompt_lines"].toString()
                          ) : h.key === "fullscreen.details.max_positive_prompt_lines" ? T(
                            i["fullscreen.details.max_positive_prompt_lines"].toString()
                          ) : h.key === "fullscreen.details.max_negative_prompt_lines" && v(
                            i["fullscreen.details.max_negative_prompt_lines"].toString()
                          );
                        }
                      }
                    ),
                    h.type === "select" && /* @__PURE__ */ a.jsx(
                      "select",
                      {
                        className: "meld-select",
                        value: i[h.key],
                        onChange: (F) => s((H) => ({
                          ...H,
                          [h.key]: F.target.value
                        })),
                        children: (z = h.options) == null ? void 0 : z.map((F) => /* @__PURE__ */ a.jsx("option", { value: F.value, children: F.label }, F.value))
                      }
                    )
                  ] })
                ] }, h.key);
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
}, Xe = "none", Yc = ({
  imageIds: e,
  initialTags: t,
  onClose: n
}) => {
  const { dispatch: r, refreshImages: l } = et(), [i, s] = y.useState([]), [o, u] = y.useState(t), [f, _] = y.useState(""), [x, m] = y.useState(!0), [w, g] = y.useState(!1), S = y.useRef(null), j = e.length > 1, c = y.useCallback(async () => {
    m(!0);
    try {
      const N = await na();
      s(N);
    } catch (N) {
      console.error("Failed to fetch tags:", N);
    } finally {
      m(!1);
    }
  }, []);
  y.useEffect(() => {
    c();
  }, [c]), y.useEffect(() => {
    S.current && S.current.focus();
    const N = (I) => {
      I.key === "Escape" && (I.preventDefault(), I.stopPropagation(), I.stopImmediatePropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    };
    return window.addEventListener("keydown", N, { capture: !0 }), () => window.removeEventListener("keydown", N, {
      capture: !0
    });
  }, [n]);
  const d = y.useMemo(() => i.filter(
    (N) => N.name.toLowerCase().includes(f.toLowerCase()) && !o.includes(N.name)
  ), [i, f, o]), p = (N) => {
    const I = N.trim();
    if (I.toLowerCase() === Xe) {
      alert(
        `Tag name '${Xe}' is reserved for search and cannot be used.`
      );
      return;
    }
    I && !o.includes(I) && (u([...o, I]), _(""));
  }, C = (N) => {
    u(o.filter((I) => I !== N));
  }, L = async () => {
    g(!0);
    try {
      if (j) {
        const N = o.filter((Q) => !t.includes(Q)), I = t.filter(
          (Q) => !o.includes(Q)
        );
        await $p(e, N, I);
      } else
        await Ap(e[0], o);
      await l(), r({ type: "CLEAR_SELECTION" }), n();
    } catch (N) {
      console.error("Failed to update tags:", N), alert("Failed to update tags.");
    } finally {
      g(!1);
    }
  }, O = (N) => {
    N.key === "Enter" && f.trim() ? (N.preventDefault(), N.stopPropagation(), p(f.trim())) : N.key === "Escape" && (N.preventDefault(), N.stopPropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
    }));
  };
  return De.createPortal(
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: (N) => {
          N.stopPropagation(), n();
        },
        children: /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-content", onClick: (N) => N.stopPropagation(), children: [
          /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ a.jsx(Zt, { size: 18 }),
              /* @__PURE__ */ a.jsx("h3", { style: { margin: 0 }, children: j ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ a.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ a.jsx(Ee, { size: 20 }) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-body", children: [
            j && /* @__PURE__ */ a.jsx(
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
              /* @__PURE__ */ a.jsx("div", { className: "meld-tag-edit-label", children: j ? "Collective Tags" : "Selected Tags" }),
              /* @__PURE__ */ a.jsx("div", { className: "meld-tag-edit-selected", children: o.length === 0 ? /* @__PURE__ */ a.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : o.map((N) => /* @__PURE__ */ a.jsxs("span", { className: "meld-tag-edit-badge", children: [
                N,
                /* @__PURE__ */ a.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => C(N),
                    children: /* @__PURE__ */ a.jsx(Ee, { size: 12 })
                  }
                )
              ] }, N)) })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ a.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ a.jsx(Nn, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    ref: S,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: f,
                    onChange: (N) => _(N.target.value),
                    onKeyDown: O
                  }
                ),
                f.trim() && !o.includes(f.trim()) && /* @__PURE__ */ a.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => p(f),
                    children: [
                      /* @__PURE__ */ a.jsx(ra, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ a.jsx("div", { className: "meld-tag-suggestions", children: x ? /* @__PURE__ */ a.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : d.length === 0 ? f ? /* @__PURE__ */ a.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ a.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : d.map((N) => /* @__PURE__ */ a.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => p(N.name),
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
                onClick: L,
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
}, Xc = y.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r
  }) => {
    const l = e.id === t, i = typeof n.parent_id == "number" && n.parent_id === e.id, s = typeof e.parent_id == "number" && e.parent_id === n.id, o = Se(e);
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
              children: i ? /* @__PURE__ */ a.jsx(Fc, { size: 12 }) : /* @__PURE__ */ a.jsx(Oc, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
Xc.displayName = "ThumbnailItem";
const jm = () => {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = et(), { viewerImageId: l, images: i, viewerMode: s, lineageImages: o } = e, [u, f] = y.useState(!1), [_, x] = y.useState(
    e.settings["viewer.show_details_by_default"]
  ), [m, w] = y.useState(null), g = m ?? e.settings["viewer.show_thumbnails"], [S, j] = y.useState(!1), [c, d] = y.useState(!1), [p, C] = y.useState(null), L = y.useRef(null), O = y.useRef(!0);
  y.useEffect(() => () => {
    O.current = !1;
  }, []);
  const N = y.useRef(l);
  y.useEffect(() => {
    N.current = l;
  }, [l]);
  const I = y.useMemo(() => s === "lineage" ? o : i.filter(
    (R) => R.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && R.has_children)
  ), [s, o, i, e.settings]), Q = y.useMemo(() => l === null ? -1 : I.findIndex((R) => R.id === l), [I, l]), T = y.useMemo(() => (s === "lineage" && o.length > 0 ? o : i).find((R) => R.id === l), [s, o, i, l]), k = y.useMemo(() => {
    if (!g || Q === -1) return [];
    const R = e.settings["viewer.thumbnail_window_size"], U = Math.floor(R / 2);
    let D = Math.max(0, Q - U);
    const J = Math.min(I.length, D + R);
    return J === I.length && (D = Math.max(0, J - R)), I.slice(D, J).map((W, tt) => ({
      img: W,
      absIndex: D + tt
    }));
  }, [
    I,
    Q,
    e.settings["viewer.thumbnail_window_size"],
    g
  ]), v = y.useCallback(async () => {
    if (!T) return;
    const R = u ? e.settings["fullscreen.delete_mode"] : e.settings["viewer.delete_mode"];
    if (R === "confirm") {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "delete_confirm",
          imageIds: [T.id],
          hasLineage: !!(T.parent_id || T.has_children),
          isPermanent: e.viewScope === "trash"
        }
      });
      return;
    }
    try {
      const U = e.viewScope === "trash", D = /* @__PURE__ */ new Set([T.id]);
      if (R === "lineage") {
        const J = await is(T.id);
        for (const W of J)
          D.add(W.id);
      }
      if (!O.current || N.current === null) return;
      if (I.length > D.size) {
        let J = !1;
        for (let W = Q + 1; W < I.length; W++)
          if (!D.has(I[W].id)) {
            t({
              type: "OPEN_VIEWER",
              payload: { id: I[W].id, mode: s }
            }), J = !0;
            break;
          }
        if (!J) {
          for (let W = Q - 1; W >= 0; W--)
            if (!D.has(I[W].id)) {
              t({
                type: "OPEN_VIEWER",
                payload: { id: I[W].id, mode: s }
              }), J = !0;
              break;
            }
        }
        J || t({ type: "CLOSE_VIEWER" });
      } else
        t({ type: "CLOSE_VIEWER" });
      if (await ss(Array.from(D), U), !U) {
        const J = I.filter(
          (W) => D.has(W.id)
        );
        C(J);
      }
      t({ type: "REMOVE_IMAGES", payload: Array.from(D) });
    } catch (U) {
      t({
        type: "SET_ERROR",
        payload: U instanceof Error ? U.message : String(U)
      });
    }
  }, [
    T,
    u,
    e.settings,
    e.viewScope,
    I,
    Q,
    s,
    t
  ]), b = y.useCallback(() => {
    T && t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: [T.id],
        tags: T.tags || []
      }
    });
  }, [T, t]), E = y.useCallback(async () => {
    const R = u ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"];
    if (Q === 0 && s === "gallery" && e.pagination.hasMore && !c && R) {
      d(!0);
      try {
        const U = e.pagination.limit, D = e.pagination.total, J = Math.max(0, D - U), W = await Jr(
          J,
          U,
          e.searchQuery
        );
        if (!O.current || (t({ type: "APPEND_IMAGES", payload: W }), N.current === null)) return;
        if (W.images.length > 0) {
          const tt = W.images[W.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: tt.id, mode: "gallery" }
          });
        }
      } catch (U) {
        console.error("Failed to jump to end:", U);
      } finally {
        d(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: u } });
  }, [
    Q,
    s,
    e.pagination.hasMore,
    e.pagination.total,
    e.pagination.limit,
    e.searchQuery,
    e.settings,
    t,
    c,
    u
  ]), P = y.useCallback(
    (R) => {
      R && "stopPropagation" in R && R.stopPropagation();
      const U = L.current;
      U && (document.fullscreenElement ? document.exitFullscreen() : U.requestFullscreen().catch((D) => {
        console.error(
          `Error attempting to enable full-screen mode: ${D.message}`
        );
      }));
    },
    []
  ), V = y.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: u } });
  }, [t, u]), X = y.useCallback(async () => {
    if (T)
      try {
        const R = T.id;
        I.length > 1 ? V() : t({ type: "CLOSE_VIEWER" }), await as([R]), t({ type: "REMOVE_IMAGES", payload: [R] });
      } catch (R) {
        t({
          type: "SET_ERROR",
          payload: R instanceof Error ? R.message : String(R)
        });
      }
  }, [T, I.length, V, t]), h = y.useCallback(async () => {
    if (!p || p.length === 0) return;
    const R = p.map((D) => D.id), U = R[0];
    try {
      if (await as(R), !O.current || (t({ type: "ADD_IMAGES", payload: p }), C(null), !O.current)) return;
      t({
        type: "OPEN_VIEWER",
        payload: { id: U, mode: s }
      });
    } catch (D) {
      t({
        type: "SET_ERROR",
        payload: D instanceof Error ? D.message : String(D)
      });
    }
  }, [p, t, s]);
  y.useEffect(() => {
    s !== "gallery" || l === null || e.isLoading || !e.pagination.hasMore || Q !== -1 && Q >= I.length - 15 && n();
  }, [
    l,
    I.length,
    s,
    e.isLoading,
    e.pagination.hasMore,
    n,
    Q
  ]), y.useEffect(() => {
    const R = (D) => {
      var la, ia, sa;
      if (l === null) return;
      const J = ((la = document.activeElement) == null ? void 0 : la.tagName) === "INPUT" || ((ia = document.activeElement) == null ? void 0 : ia.tagName) === "TEXTAREA" || ((sa = document.activeElement) == null ? void 0 : sa.isContentEditable), W = D.key === "Delete" || D.key === "Backspace", tt = D.key === "ArrowRight" || D.key === "ArrowLeft", nt = D.key === "f" || D.key === "F" || D.key === "i" || D.key === "I" || D.key === "t" || D.key === "T" || D.key === "r" || D.key === "R", $l = D.key === "Escape", Jc = (D.ctrlKey || D.metaKey) && (D.key === "z" || D.key === "Z");
      if (W || tt || nt || $l || Jc)
        if (J)
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
      D.key === "Escape" ? (e.activeModal.type !== "none" && t({ type: "CLOSE_MODAL" }), document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" })) : D.key === "ArrowRight" ? V() : D.key === "ArrowLeft" ? E() : D.key === "f" || D.key === "F" ? P(D) : D.key === "i" || D.key === "I" ? x((Zc) => !Zc) : D.key === "t" || D.key === "T" ? b() : (D.key === "r" || D.key === "R") && e.viewScope === "trash" ? X() : D.key === "Delete" ? v() : (D.ctrlKey || D.metaKey) && (D.key === "z" || D.key === "Z") && h();
    };
    window.addEventListener("keydown", R, { capture: !0 });
    const U = () => {
      const D = !!document.fullscreenElement;
      f(D), x(D ? e.settings["fullscreen.show_details_by_default"] : e.settings["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", U), () => {
      window.removeEventListener("keydown", R, { capture: !0 }), document.removeEventListener("fullscreenchange", U);
    };
  }, [
    l,
    t,
    P,
    V,
    E,
    e.settings,
    v,
    e.activeModal.type,
    h,
    b,
    X,
    e.viewScope
  ]), y.useEffect(() => {
    l !== null && r(l).catch((R) => {
      console.error("Failed to fetch full image details for viewer:", R);
    });
  }, [l, r]), y.useEffect(() => {
    s === "lineage" && l !== null && o.length === 0 && (j(!0), is(l).then((R) => {
      t({ type: "SET_LINEAGE", payload: R });
    }).catch((R) => {
      console.error("Failed to fetch lineage:", R);
    }).finally(() => {
      j(!1);
    }));
  }, [s, l, o.length, t]), y.useEffect(() => () => {
    document.fullscreenElement && document.exitFullscreen().catch(() => {
    });
  }, []), y.useEffect(() => {
    var R, U;
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
      ((R = document.activeElement) == null ? void 0 : R.tagName) === "CANVAS" && document.activeElement.blur(), (U = L.current) == null || U.focus();
    }
  }, [l, g]), y.useEffect(() => {
    if (l === null || I.length === 0) return;
    const R = I.findIndex(
      (W) => W.id === l
    );
    if (R === -1) return;
    const U = (W) => Se(W), D = [
      R + 1,
      R + 2,
      R - 1
    ], J = setTimeout(() => {
      for (const W of D)
        if (W >= 0 && W < I.length) {
          const tt = I[W], nt = new Image();
          nt.src = U(tt);
        }
    }, 150);
    return () => clearTimeout(J);
  }, [l, I]);
  const z = y.useCallback(
    (R) => {
      const U = e.settings["gallery.lineage_max_depth"];
      if (U === 0) return [];
      if (R.ancestors && R.ancestors.length > 0)
        return R.ancestors.slice(0, U).map((nt) => ({
          id: nt.id,
          imgSrc: Se(nt)
        }));
      const D = R.parent_id;
      if (!D || !R.parent_filename) return [];
      const J = i.find((nt) => nt.id === D);
      let W = null;
      if (J ? W = Se(J) : W = Se({
        filename: R.parent_filename,
        subfolder: R.parent_subfolder || "",
        type: R.parent_type
      }), !W) return [];
      const tt = {
        id: D || null,
        imgSrc: W
      };
      if (J && U > 1) {
        const nt = z(J);
        return [tt, ...nt].slice(0, U);
      }
      return [tt];
    },
    [e.settings, i]
  ), F = y.useMemo(() => T ? z(T) : [], [T, z]);
  if (!T) return null;
  const H = Se(T), Z = u ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return De.createPortal(
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        ref: L,
        className: "meld-viewer-overlay",
        onClick: () => {
          e.activeModal.type === "none" && t({ type: "CLOSE_VIEWER" });
        },
        role: "button",
        tabIndex: 0,
        children: [
          /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: `meld-viewer-content ${u ? "meld-viewer-content--fullscreen" : ""} ${g ? "meld-viewer-content--with-thumbnails" : ""}`,
              onClick: (R) => R.stopPropagation(),
              children: [
                Z && /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: X,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ a.jsx(Zn, { size: 20 })
                    }
                  ),
                  !u && /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => w(!g),
                      type: "button",
                      title: g ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ a.jsx(Uc, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: b,
                      type: "button",
                      title: "Edit Tags (T)",
                      children: /* @__PURE__ */ a.jsx(Zt, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => x(!_),
                      type: "button",
                      title: _ ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ a.jsx(sm, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: P,
                      type: "button",
                      title: u ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                      children: u ? /* @__PURE__ */ a.jsx(um, { size: 20 }) : /* @__PURE__ */ a.jsx(om, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                      onClick: () => t({ type: "CLOSE_VIEWER" }),
                      type: "button",
                      title: "Close (Esc)",
                      children: /* @__PURE__ */ a.jsx(Ee, { size: 20 })
                    }
                  )
                ] }),
                Z && /* @__PURE__ */ a.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: E,
                    type: "button",
                    disabled: c,
                    children: /* @__PURE__ */ a.jsx($c, { size: 32 })
                  }
                ),
                /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-image-container", children: [
                  c && /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ a.jsx(Zn, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ a.jsx(
                    "img",
                    {
                      src: H,
                      alt: T.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[u ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${c ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                Z && /* @__PURE__ */ a.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: V,
                    type: "button",
                    children: /* @__PURE__ */ a.jsx(Vc, { size: 32 })
                  }
                ),
                _ && /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    className: `meld-viewer-details-overlay ${u ? "meld-viewer-details-overlay--fullscreen" : ""} ${Z ? "" : "meld-viewer-details-overlay--no-icons"}`,
                    children: [
                      (u ? e.settings["fullscreen.details.show_filename"] : e.settings["viewer.details.show_filename"]) !== "none" && /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-label", children: (u ? e.settings["fullscreen.details.show_filename"] : e.settings["viewer.details.show_filename"]) === "filepath" ? "Filepath" : "Filename" }),
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-value", children: (u ? e.settings["fullscreen.details.show_filename"] : e.settings["viewer.details.show_filename"]) === "filepath" ? `${T.subfolder ? `${T.subfolder}/` : ""}${T.filename}` : T.filename })
                      ] }),
                      (u ? e.settings["fullscreen.details.show_dimensions"] : e.settings["viewer.details.show_dimensions"]) && T.width && T.height && /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-label", children: "Dimensions" }),
                        /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-details-value", children: [
                          T.width,
                          " x ",
                          T.height,
                          " px"
                        ] })
                      ] }),
                      (u ? e.settings["fullscreen.details.show_created_at"] : e.settings["viewer.details.show_created_at"]) && /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-label", children: "Created At" }),
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-value", children: new Date(T.created_at * 1e3).toLocaleString() })
                      ] }),
                      T.deleted_at && /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-label", children: "Deleted At" }),
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-value", children: new Date(T.deleted_at * 1e3).toLocaleString() })
                      ] }),
                      (u ? e.settings["fullscreen.details.show_model_name"] : e.settings["viewer.details.show_model_name"]) && T.model_name && /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-label", children: "Model" }),
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-value", children: T.model_name })
                      ] }),
                      (u ? e.settings["fullscreen.details.show_source"] : e.settings["viewer.details.show_source"]) && F.length > 0 && /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-label", children: "Source" }),
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-tags", children: /* @__PURE__ */ a.jsx("div", { className: "meld-lineage-thumbs", children: F.map(
                          (R, U) => R.imgSrc && /* @__PURE__ */ a.jsx(
                            "img",
                            {
                              src: R.imgSrc,
                              className: "meld-lineage-badge__parent-thumb",
                              style: { cursor: "pointer" },
                              loading: "lazy",
                              onClick: (D) => {
                                D.stopPropagation(), t({
                                  type: "OPEN_VIEWER",
                                  payload: {
                                    id: R.id || T.id,
                                    mode: "lineage"
                                  }
                                });
                              },
                              title: U === 0 ? "Source" : U === 1 ? "Grand-Source" : `Ancestor (S${U + 1})`,
                              alt: "source thumb"
                            },
                            R.id || U
                          )
                        ) }) })
                      ] }),
                      (u ? e.settings["fullscreen.details.show_positive_prompt"] : e.settings["viewer.details.show_positive_prompt"]) && (T.positive_prompt || T.positive) && /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-label", children: "Positive" }),
                        /* @__PURE__ */ a.jsx(
                          "div",
                          {
                            className: "meld-viewer-details-value meld-viewer-details-value--prompt",
                            style: {
                              "--meld-prompt-max-lines": u ? e.settings["fullscreen.details.max_positive_prompt_lines"] : e.settings["viewer.details.max_positive_prompt_lines"]
                            },
                            children: T.positive_prompt || T.positive
                          }
                        )
                      ] }),
                      (u ? e.settings["fullscreen.details.show_negative_prompt"] : e.settings["viewer.details.show_negative_prompt"]) && (T.negative_prompt || T.negative) && /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-label", children: "Negative" }),
                        /* @__PURE__ */ a.jsx(
                          "div",
                          {
                            className: "meld-viewer-details-value meld-viewer-details-value--prompt",
                            style: {
                              "--meld-prompt-max-lines": u ? e.settings["fullscreen.details.max_negative_prompt_lines"] : e.settings["viewer.details.max_negative_prompt_lines"]
                            },
                            children: T.negative_prompt || T.negative
                          }
                        )
                      ] }),
                      (u ? e.settings["fullscreen.details.show_tags"] : e.settings["viewer.details.show_tags"]) && T.tags && T.tags.length > 0 && /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-label", children: "Tags" }),
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-tags", children: T.tags.map((R) => /* @__PURE__ */ a.jsx("span", { className: "meld-viewer-details-tag", children: R }, R)) })
                      ] })
                    ]
                  }
                ),
                !u && g && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-thumbnails-container", children: /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-thumbnails", children: [
                  S ? /* @__PURE__ */ a.jsx(
                    "div",
                    {
                      style: {
                        padding: "10px",
                        color: "var(--meld-text-secondary)"
                      },
                      children: "Loading lineage..."
                    }
                  ) : k.map(({ img: R }) => /* @__PURE__ */ a.jsx(
                    Xc,
                    {
                      thumb: R,
                      viewerImageId: l,
                      currentImage: T,
                      dispatch: t
                    },
                    R.id
                  )),
                  s === "gallery" && e.isLoading && /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ a.jsx(Zn, { className: "animate-spin", size: 20 }) })
                ] }) })
              ]
            }
          ),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ a.jsx(
            Hc,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: C
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ a.jsx(Bc, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ a.jsx(Gc, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ a.jsx(Kc, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ a.jsx(
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
        children: /* @__PURE__ */ a.jsx(mm, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ a.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ a.jsx(nm, { size: 14, className: "meld-success-icon" }),
      /* @__PURE__ */ a.jsxs("span", { className: "meld-finished-text", children: [
        "Done! ",
        n.newCount,
        " new, ",
        n.updatedCount,
        " updated"
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
}, Tm = () => {
  const { state: e, dispatch: t, refreshFavorites: n } = et(), [r, l] = y.useState(e.searchQuery), [i, s] = y.useState([]), [o, u] = y.useState(!1), [f, _] = y.useState([]), [x, m] = y.useState(-1), [w, g] = y.useState(!1), [S, j] = y.useState(null), c = y.useRef(null);
  y.useEffect(() => {
    if (S) {
      const E = setTimeout(() => j(null), 3e3);
      return () => clearTimeout(E);
    }
  }, [S]);
  const d = y.useRef(null), p = y.useRef(e.searchQuery), C = r !== p.current;
  y.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      _([]);
      return;
    }
    !r && !e.searchQuery ? kp().then((E) => {
      _(E);
    }) : _([]);
  }, [
    r,
    e.searchQuery,
    e.settings["search.quick_suggestions"]
  ]), y.useEffect(() => {
    l(e.searchQuery), p.current = e.searchQuery;
  }, [e.searchQuery]), y.useEffect(() => {
    var E;
    (E = c.current) == null || E.focus();
  }, []);
  const L = y.useCallback(
    (E, P = !0) => {
      p.current !== E && ($.log("SearchBar: triggering search", { query: E }), t({ type: "SET_SEARCH_QUERY", payload: E }), P && u(!1), p.current = E);
    },
    [t]
  );
  y.useEffect(() => {
    const E = setTimeout(async () => {
      if (r === p.current)
        return;
      if (!e.settings["search.input_suggest"]) {
        s([]), u(!1);
        return;
      }
      const P = r.split(/\s+/), V = P[P.length - 1];
      if (V) {
        const X = V.match(
          /^[-!]?(tag|pos|neg|model|date|after|before|has_source|has_derivatives|sort):(.*)$/i
        );
        if (X) {
          const h = X[1].toLowerCase(), z = X[2], F = await Sp(z, h);
          s(F), u(F.length > 0), m(-1);
        } else
          s([]), u(!1);
      } else
        s([]), u(!1);
    }, 300);
    return () => clearTimeout(E);
  }, [r, e.settings["search.input_suggest"]]);
  const O = (E) => {
    E.key === "Enter" ? L(r) : E.key === "Tab" ? o && x >= 0 && (N(i[x]), E.preventDefault()) : E.key === "ArrowDown" ? o && (m((P) => Math.min(P + 1, i.length - 1)), E.preventDefault()) : E.key === "ArrowUp" ? o && (m((P) => Math.max(P - 1, -1)), E.preventDefault()) : E.key === "Escape" && u(!1);
  }, N = (E) => {
    var R;
    const P = r.split(/\s+/), X = (P.pop() || "").match(/^([-!])/), h = X ? X[1] : "", H = [
      "date",
      "after",
      "before",
      "has_source",
      "has_derivatives"
    ].includes(E.type) ? E.value : `"${E.value}"`, Z = `${[
      ...P,
      `${h}${E.type}:${H}`
    ].join(" ").trim()} `;
    l(Z), s([]), u(!1), (R = c.current) == null || R.focus();
  }, I = () => {
    l(""), L("");
  }, Q = async (E, P, V) => {
    E.stopPropagation();
    const X = `Are you sure you want to delete the favorite "${V}"?`;
    if (window.confirm(X))
      try {
        await vo(P), await n();
      } catch (h) {
        $.error("Failed to delete favorite", h);
      }
  }, T = async (E, P, V) => {
    E.stopPropagation();
    const X = window.prompt(
      "Enter a new name for this favorite:",
      V
    );
    if (!(X === null || X === V))
      try {
        await zp(P, X || V), await n();
      } catch (h) {
        $.error("Failed to rename favorite", h);
      }
  }, k = (E, P) => {
    const h = [
      "date",
      "after",
      "before",
      "has_source",
      "has_derivatives"
    ].includes(E) ? P : `"${P}"`, z = `${E}:${h}`;
    l(z), L(z);
  }, v = async () => {
    if (!e.searchQuery || w) return;
    if (e.favorites.some(
      (P) => P.query === e.searchQuery
    )) {
      const P = e.favorites.find((V) => V.query === e.searchQuery);
      if (P) {
        g(!0);
        try {
          await vo(P.id), await n(), j("Favorite removed.");
        } catch (V) {
          $.error("Failed to delete favorite:", V);
        } finally {
          g(!1);
        }
      }
      return;
    }
    g(!0);
    try {
      await Rp(e.searchQuery, e.searchQuery), await n(), j(
        `Favorite added!
You can select favorites when the search query is empty.`
      );
    } catch (P) {
      $.error("Failed to save favorite:", P);
    } finally {
      g(!1);
    }
  }, b = (E) => {
    switch (E) {
      case "tag":
        return /* @__PURE__ */ a.jsx(Zt, { size: 12 });
      case "model":
        return /* @__PURE__ */ a.jsx(em, { size: 12 });
      case "pos":
      case "neg":
        return /* @__PURE__ */ a.jsx(hm, { size: 12 });
      case "date":
      case "after":
      case "before":
        return /* @__PURE__ */ a.jsx(tm, { size: 12 });
      case "has_source":
        return /* @__PURE__ */ a.jsx(Fc, { size: 12 });
      case "has_derivatives":
        return /* @__PURE__ */ a.jsx(Oc, { size: 12 });
      case "sort":
        return /* @__PURE__ */ a.jsx(qp, { size: 12 });
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
              S && /* @__PURE__ */ a.jsx(
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
                  children: S
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
                    /* @__PURE__ */ a.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => L(r),
                        style: {
                          background: C ? "var(--meld-accent-color, #3b82f6)" : "var(--comfy-input-bg-active, rgba(255,255,255,0.03))",
                          border: C ? "1px solid var(--meld-border-color, rgba(255,255,255,0.2))" : "1px solid transparent",
                          cursor: "pointer",
                          padding: "6px 10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "10px",
                          flexShrink: 0,
                          borderRadius: "4px",
                          transition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                          boxShadow: C ? "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))" : "none"
                        },
                        onMouseEnter: (E) => {
                          E.currentTarget.style.transform = "translateY(-1px)", C ? (E.currentTarget.style.filter = "brightness(1.15)", E.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : E.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                        },
                        onMouseLeave: (E) => {
                          E.currentTarget.style.transform = "none", C ? (E.currentTarget.style.filter = "none", E.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : E.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                        },
                        onMouseDown: (E) => {
                          E.currentTarget.style.transform = "translateY(1px)", E.currentTarget.style.boxShadow = "none";
                        },
                        onMouseUp: (E) => {
                          E.currentTarget.style.transform = "translateY(-1px)";
                        },
                        title: "Search (Enter)",
                        children: [
                          /* @__PURE__ */ a.jsx(
                            Nn,
                            {
                              size: 16,
                              color: C ? "var(--meld-text-color, #fff)" : "var(--meld-text-secondary)",
                              style: {
                                transition: "color 0.2s",
                                filter: C ? "drop-shadow(0 1px 2px var(--meld-shadow-color, rgba(0,0,0,0.2)))" : "none"
                              }
                            }
                          ),
                          C && /* @__PURE__ */ a.jsx(
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
                    /* @__PURE__ */ a.jsx(
                      "input",
                      {
                        ref: c,
                        type: "text",
                        value: r,
                        onChange: (E) => {
                          const P = E.target.value;
                          l(P), P || L("");
                        },
                        onKeyDown: O,
                        onBlur: () => setTimeout(() => u(!1), 200),
                        onFocus: () => {
                          if (r === p.current) return;
                          const E = r.split(/\s+/), P = E[E.length - 1];
                          P != null && P.match(
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
                    e.searchQuery && /* @__PURE__ */ a.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: v,
                        disabled: w,
                        title: e.favorites.some((E) => E.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                          _o,
                          {
                            size: 16,
                            color: e.favorites.some((E) => E.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((E) => E.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                          }
                        )
                      }
                    ),
                    r && /* @__PURE__ */ a.jsx(
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
                        children: /* @__PURE__ */ a.jsx(Ee, { size: 16, color: "var(--meld-text-secondary)" })
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
                  children: i.map((E, P) => /* @__PURE__ */ a.jsx(
                    "div",
                    {
                      onMouseDown: (V) => {
                        V.preventDefault(), N(E);
                      },
                      onMouseEnter: () => m(P),
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 14px",
                        cursor: "pointer",
                        backgroundColor: P === x ? "var(--comfy-menu-bg, #333)" : "transparent",
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
                                children: b(E.type)
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
                                children: E.type
                              }
                            ),
                            /* @__PURE__ */ a.jsx(
                              "span",
                              {
                                style: {
                                  color: E.value === Xe ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                                  fontSize: "14px",
                                  fontWeight: E.value === Xe ? "bold" : "normal"
                                },
                                children: E.value === Xe ? E.type === "tag" ? `Untagged (${Xe})` : `No ${E.type} (${Xe})` : E.value
                              }
                            )
                          ]
                        }
                      )
                    },
                    `${E.type}:${E.value}`
                  ))
                }
              )
            ]
          }
        ),
        !r && !e.searchQuery && f.length > 0 && /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "meld-search-quick-suggestions",
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              padding: "0 4px"
            },
            children: f.map((E) => /* @__PURE__ */ a.jsxs(
              "button",
              {
                type: "button",
                onClick: () => k(E.type, E.value),
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
                onMouseEnter: (P) => {
                  P.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", P.currentTarget.style.borderColor = "var(--comfy-menu-border, #444)", P.currentTarget.style.color = "var(--meld-text-color)";
                },
                onMouseLeave: (P) => {
                  P.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", P.currentTarget.style.borderColor = "var(--comfy-menu-border, #333)", P.currentTarget.style.color = "var(--meld-text-color)";
                },
                children: [
                  /* @__PURE__ */ a.jsx(
                    "span",
                    {
                      style: {
                        display: "flex",
                        color: "var(--meld-text-secondary)"
                      },
                      children: b(E.type)
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
                      children: E.type
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
                      children: E.value
                    }
                  )
                ]
              },
              `${E.type}:${E.value}`
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
                    /* @__PURE__ */ a.jsx(_o, { size: 12, fill: "var(--meld-text-secondary)" }),
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
                  children: e.favorites.map((E) => /* @__PURE__ */ a.jsxs(
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
                        l(E.query), L(E.query);
                      },
                      onMouseEnter: (P) => {
                        P.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", P.currentTarget.style.borderColor = "var(--meld-accent-color)", P.currentTarget.style.color = "var(--meld-text-color)";
                      },
                      onMouseLeave: (P) => {
                        P.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", P.currentTarget.style.borderColor = "var(--comfy-menu-border, #333)", P.currentTarget.style.color = "var(--meld-text-color)";
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
                                  children: E.name
                                }
                              ),
                              E.name !== E.query && /* @__PURE__ */ a.jsx(
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
                                  children: E.query
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
                                  onClick: (P) => {
                                    P.stopPropagation(), T(P, E.id, E.name);
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
                                  onMouseEnter: (P) => {
                                    P.currentTarget.style.color = "var(--meld-accent-color)", P.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(68, 136, 255, 0.1))";
                                  },
                                  onMouseLeave: (P) => {
                                    P.currentTarget.style.color = "var(--meld-text-secondary)", P.currentTarget.style.backgroundColor = "transparent";
                                  },
                                  title: "Rename favorite",
                                  children: /* @__PURE__ */ a.jsx(Qc, { size: 14 })
                                }
                              ),
                              /* @__PURE__ */ a.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: (P) => {
                                    P.stopPropagation(), Q(P, E.id, E.name);
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
                                  onMouseEnter: (P) => {
                                    P.currentTarget.style.color = "var(--meld-danger-color)", P.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,0,0,0.1))";
                                  },
                                  onMouseLeave: (P) => {
                                    P.currentTarget.style.color = "var(--meld-text-secondary)", P.currentTarget.style.backgroundColor = "transparent";
                                  },
                                  title: "Delete favorite",
                                  children: /* @__PURE__ */ a.jsx(jn, { size: 14 })
                                }
                              )
                            ]
                          }
                        )
                      ]
                    },
                    E.id
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
  const [n, r] = y.useState([]), [l, i] = y.useState(!0), [s, o] = y.useState(""), [u, f] = y.useState(""), [_, x] = y.useState(!1), [m, w] = y.useState(null), [g, S] = y.useState(""), [j, c] = y.useState(!1), d = y.useRef(null), p = y.useCallback(async () => {
    i(!0);
    try {
      const k = await na();
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
    m !== null && d.current && (d.current.focus(), d.current.select());
  }, [m]);
  const C = async (k) => {
    k.preventDefault();
    const v = u.trim();
    if (!(!v || _)) {
      if (v.toLowerCase() === Xe) {
        alert(
          `Tag name '${Xe}' is reserved for search and cannot be used.`
        );
        return;
      }
      if (n.some((b) => b.name.toLowerCase() === v.toLowerCase())) {
        alert(`Tag "${v}" already exists.`);
        return;
      }
      x(!0);
      try {
        await bp(v), f(""), await p();
      } catch (b) {
        console.error("Failed to add tag:", b);
      } finally {
        x(!1);
      }
    }
  }, L = async (k, v) => {
    if (confirm(`Are you sure you want to delete tag "${v}"?`))
      try {
        await Op(k), await p();
      } catch (b) {
        console.error("Failed to delete tag:", b);
      }
  }, O = (k) => {
    w(k.id), S(k.name);
  }, N = () => {
    w(null), S("");
  }, I = async (k) => {
    k.preventDefault();
    const v = g.trim();
    if (!v || m === null || j) return;
    if (v.toLowerCase() === Xe) {
      alert(
        `Tag name '${Xe}' is reserved for search and cannot be used.`
      );
      return;
    }
    const b = n.find((E) => E.id === m);
    if (b && b.name === v) {
      N();
      return;
    }
    if (n.some(
      (E) => E.id !== m && E.name.toLowerCase() === v.toLowerCase()
    )) {
      alert(`Tag "${v}" already exists.`);
      return;
    }
    c(!0);
    try {
      await Fp(m, v), N(), await p();
    } catch (E) {
      console.error("Failed to rename tag:", E), alert(E instanceof Error ? E.message : "Failed to rename tag");
    } finally {
      c(!1);
    }
  }, Q = (k) => {
    t(`tag:${k}`);
  }, T = y.useMemo(() => n.filter(
    (k) => k.name.toLowerCase().includes(s.toLowerCase())
  ), [n, s]);
  return /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ a.jsx(Zt, { size: 16 }),
        /* @__PURE__ */ a.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ a.jsx(Ee, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ a.jsxs("form", { className: "meld-tag-add-form", onSubmit: C, children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: u,
            onChange: (k) => f(k.target.value),
            disabled: _
          }
        ),
        /* @__PURE__ */ a.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !u.trim() || _,
            children: [
              /* @__PURE__ */ a.jsx(ra, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ a.jsx(Nn, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: s,
            onChange: (k) => o(k.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ a.jsx("div", { className: "meld-tag-list", children: T.length === 0 ? /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : T.map((k) => /* @__PURE__ */ a.jsx("div", { className: "meld-tag-item", children: m === k.id ? /* @__PURE__ */ a.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: I,
          children: [
            /* @__PURE__ */ a.jsx(
              "input",
              {
                type: "text",
                ref: d,
                className: "meld-tag-rename-input",
                value: g,
                onChange: (v) => S(v.target.value),
                onKeyDown: (v) => v.key === "Escape" && N()
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: j || !g.trim(),
                children: /* @__PURE__ */ a.jsx(Ac, { size: 14 })
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: N,
                disabled: j,
                children: /* @__PURE__ */ a.jsx(Ee, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("span", { className: "meld-tag-item__name", children: k.name }),
        /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => Q(k.name),
              children: /* @__PURE__ */ a.jsx(Nn, { size: 14 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => O(k),
              children: /* @__PURE__ */ a.jsx(Qc, { size: 14 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => L(k.id, k.name),
              children: /* @__PURE__ */ a.jsx(jn, { size: 14 })
            }
          )
        ] })
      ] }) }, k.id)) })
    ] })
  ] });
}, Lm = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = et(), [i, s] = y.useState("gallery"), [o, u] = y.useState(""), [f, _] = y.useState(e.pagination.limit);
  y.useEffect(() => {
    _(e.pagination.limit);
  }, [e.searchQuery, e.viewScope, e.pagination.limit]);
  const x = e.searchQuery.trim() !== "", m = y.useRef(null), w = y.useRef(null), g = y.useMemo(
    () => e.images.filter((j) => e.viewScope === "trash" ? j.exists !== !1 || e.settings["gallery.trash.show_missing"] : j.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && j.has_children)),
    [e.images, e.settings, e.viewScope]
  ), S = y.useMemo(
    () => g.slice(0, f),
    [g, f]
  );
  return y.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && g.length === 0 && ($.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    g.length,
    r
  ]), $.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: g.length,
    visibleCount: S.length,
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
            $.log(
              "GalleryPanel: Intersection observed but already loading"
            );
            return;
          }
          f < g.length ? ($.log(
            "GalleryPanel: Increasing localLimit (local data available)",
            {
              oldLimit: f,
              newLimit: Math.min(
                f + e.pagination.limit,
                g.length
              ),
              totalAvailableLocally: g.length
            }
          ), _((p) => p + e.pagination.limit)) : e.pagination.hasMore ? ($.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : $.log(
            "GalleryPanel: Intersection observed but no more to load",
            {
              localCount: g.length,
              serverHasMore: e.pagination.hasMore
            }
          );
        }
      },
      { threshold: 0, rootMargin: "800px" }
    ), c = m.current;
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
    const j = e.viewerImageId ?? w.current;
    if (j !== null && g.some((d) => d.id === j)) {
      const d = g.findIndex((C) => C.id === j);
      if (d >= f) {
        _(
          Math.ceil((d + 1) / e.pagination.limit) * e.pagination.limit
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
    f,
    e.pagination.limit
  ]), /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `meld-gallery ${e.viewScope === "trash" ? "meld-gallery--trash" : ""}`,
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: "meld-gallery__header", children: [
          e.viewScope === "trash" ? /* @__PURE__ */ a.jsxs("div", { className: "meld-gallery__trash-indicator", children: [
            /* @__PURE__ */ a.jsxs("div", { className: "meld-gallery__trash-label", children: [
              /* @__PURE__ */ a.jsx(jn, { size: 14 }),
              /* @__PURE__ */ a.jsx("span", { children: "Trash Bin" })
            ] }),
            /* @__PURE__ */ a.jsxs("label", { className: "meld-gallery__trash-toggle", children: [
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.settings["gallery.trash.show_missing"] || !1,
                  onChange: (j) => l("gallery.trash.show_missing", j.target.checked)
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
                  /* @__PURE__ */ a.jsx(Ee, { size: 14 }),
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
                  i === "search" ? (u(e.searchQuery), e.searchQuery && t({ type: "SET_SEARCH_QUERY", payload: "" }), s("gallery")) : (!e.searchQuery && o && t({
                    type: "SET_SEARCH_QUERY",
                    payload: o
                  }), s("search"));
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
                children: /* @__PURE__ */ a.jsx(Nn, { size: 14 })
              }
            ),
            /* @__PURE__ */ a.jsx(
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ a.jsx(am, { size: 14 }) : /* @__PURE__ */ a.jsx(Uc, { size: 14 })
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
                children: /* @__PURE__ */ a.jsx(Zt, { size: 14 })
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
                children: /* @__PURE__ */ a.jsx(lm, { size: 14 })
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
                  Zn,
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
                children: /* @__PURE__ */ a.jsx(pm, { size: 14 })
              }
            )
          ] }),
          i === "search" && /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ a.jsx(Tm, {}) })
        ] }),
        /* @__PURE__ */ a.jsx(Im, {}),
        e.error && /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__error", children: e.error }),
        i === "tags" ? /* @__PURE__ */ a.jsx(
          Mm,
          {
            onClose: () => s("gallery"),
            onSearch: (j) => {
              t({ type: "SET_SEARCH_QUERY", payload: j }), s("search");
            }
          }
        ) : e.isLoading && g.length === 0 ? /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : S.length === 0 ? /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `meld-gallery__list ${e.settings["gallery.view_mode"] === "grid_only" ? "meld-gallery__list--grid-only" : ""}`,
              children: S.map((j) => /* @__PURE__ */ a.jsx("div", { "data-image-id": j.id, children: /* @__PURE__ */ a.jsx(Em, { height: 150, children: /* @__PURE__ */ a.jsx(Nm, { image: j }) }) }, j.id))
            }
          ),
          /* @__PURE__ */ a.jsxs(
            "div",
            {
              ref: m,
              className: "meld-gallery__load-more",
              style: { height: "20px", margin: "20px 0", textAlign: "center" },
              children: [
                e.isLoading && /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
                f >= g.length && !e.pagination.hasMore && S.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ a.jsx(Cm, {}),
        e.viewerImageId !== null && /* @__PURE__ */ a.jsx(jm, {}),
        e.viewerImageId === null && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          e.activeModal.type === "parent_selection" && De.createPortal(
            /* @__PURE__ */ a.jsx(Bc, { imageId: e.activeModal.imageId }),
            document.body
          ),
          e.activeModal.type === "import" && De.createPortal(/* @__PURE__ */ a.jsx(Gc, {}), document.body),
          e.activeModal.type === "settings" && De.createPortal(/* @__PURE__ */ a.jsx(Kc, {}), document.body),
          e.activeModal.type === "tag_edit" && De.createPortal(
            /* @__PURE__ */ a.jsx(
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
            /* @__PURE__ */ a.jsx(
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
xo.registerExtension({
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
const Al = document.createElement("link");
Al.rel = "stylesheet";
Al.type = "text/css";
Al.href = "/extensions/ComfyUI-Meld/js/style.css";
document.head.appendChild(Al);
let Fr = null, Ge = null;
xo.registerExtension({
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
      $.init(n.dev_mode), $.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld] Failed to fetch settings", n), $.init(!1);
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
      }, B.addEventListener("meld-image-saved", () => {
        var n;
        (n = e.ui.meld) == null || n.refresh();
      }), B.addEventListener("meld-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-scan-progress", { detail: n.detail })
        );
      }), B.addEventListener("meld-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-scan-finished", { detail: n.detail })
        ), (r = e.ui.meld) == null || r.refresh(), $.log("Import completed.");
      }), B.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const l of n.output.images)
              if (l.type === "output")
                try {
                  await Rc({
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
            $.log("render called", {
              el: n,
              galleryRoot: Fr,
              galleryContainer: Ge
            }), Ge || ($.log("galleryContainer not found, creating new one"), Ge = document.createElement("div"), Ge.id = "meld-gallery-container", Ge.style.height = "100%", Ge.style.width = "100%", Ge.style.display = "flex", Ge.style.flexDirection = "column"), n.contains(Ge) || ($.log("Appending galleryContainer to el"), n.appendChild(Ge)), Fr ? $.log(
              "[Meld] Gallery root already exists, React should handle re-render if needed"
            ) : ($.log("Creating new gallery root"), Fr = Pc(Ge), Fr.render(
              ca.createElement(
                km,
                null,
                ca.createElement(Lm)
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
