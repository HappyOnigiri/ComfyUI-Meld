import { api as A } from "../../../scripts/api.js";
import { app as ca } from "../../../scripts/app.js";
function Ic(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var da = { exports: {} }, O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var or = Symbol.for("react.element"), Lc = Symbol.for("react.portal"), Mc = Symbol.for("react.fragment"), zc = Symbol.for("react.strict_mode"), Rc = Symbol.for("react.profiler"), Fc = Symbol.for("react.provider"), Oc = Symbol.for("react.context"), Dc = Symbol.for("react.forward_ref"), Ac = Symbol.for("react.suspense"), $c = Symbol.for("react.memo"), Uc = Symbol.for("react.lazy"), Xi = Symbol.iterator;
function Vc(e) {
  return e === null || typeof e != "object" ? null : (e = Xi && e[Xi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var fa = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, pa = Object.assign, ma = {};
function yn(e, t, n) {
  this.props = e, this.context = t, this.refs = ma, this.updater = n || fa;
}
yn.prototype.isReactComponent = {};
yn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
yn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ha() {
}
ha.prototype = yn.prototype;
function bo(e, t, n) {
  this.props = e, this.context = t, this.refs = ma, this.updater = n || fa;
}
var ei = bo.prototype = new ha();
ei.constructor = bo;
pa(ei, yn.prototype);
ei.isPureReactComponent = !0;
var Zi = Array.isArray, ga = Object.prototype.hasOwnProperty, ti = { current: null }, ya = { key: !0, ref: !0, __self: !0, __source: !0 };
function va(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) ga.call(t, r) && !ya.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), f = 0; f < u; f++) s[f] = arguments[f + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: or, type: e, key: o, ref: i, props: l, _owner: ti.current };
}
function Qc(e, t) {
  return { $$typeof: or, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ni(e) {
  return typeof e == "object" && e !== null && e.$$typeof === or;
}
function Wc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ji = /\/+/g;
function zl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Wc("" + e.key) : t.toString(36);
}
function Mr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (o) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case or:
        case Lc:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + zl(i, 0) : r, Zi(l) ? (n = "", e != null && (n = e.replace(Ji, "$&/") + "/"), Mr(l, t, n, "", function(f) {
    return f;
  })) : l != null && (ni(l) && (l = Qc(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Ji, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Zi(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var s = r + zl(o, u);
    i += Mr(o, t, n, s, l);
  }
  else if (s = Vc(e), typeof s == "function") for (e = s.call(e), u = 0; !(o = e.next()).done; ) o = o.value, s = r + zl(o, u++), i += Mr(o, t, n, s, l);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function mr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Mr(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function Bc(e) {
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
var ve = { current: null }, zr = { transition: null }, Hc = { ReactCurrentDispatcher: ve, ReactCurrentBatchConfig: zr, ReactCurrentOwner: ti };
function wa() {
  throw Error("act(...) is not supported in production builds of React.");
}
O.Children = { map: mr, forEach: function(e, t, n) {
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
  if (!ni(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
O.Component = yn;
O.Fragment = Mc;
O.Profiler = Rc;
O.PureComponent = bo;
O.StrictMode = zc;
O.Suspense = Ac;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hc;
O.act = wa;
O.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = pa({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = ti.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) ga.call(t, s) && !ya.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var f = 0; f < s; f++) u[f] = arguments[f + 2];
    r.children = u;
  }
  return { $$typeof: or, type: e.type, key: l, ref: o, props: r, _owner: i };
};
O.createContext = function(e) {
  return e = { $$typeof: Oc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Fc, _context: e }, e.Consumer = e;
};
O.createElement = va;
O.createFactory = function(e) {
  var t = va.bind(null, e);
  return t.type = e, t;
};
O.createRef = function() {
  return { current: null };
};
O.forwardRef = function(e) {
  return { $$typeof: Dc, render: e };
};
O.isValidElement = ni;
O.lazy = function(e) {
  return { $$typeof: Uc, _payload: { _status: -1, _result: e }, _init: Bc };
};
O.memo = function(e, t) {
  return { $$typeof: $c, type: e, compare: t === void 0 ? null : t };
};
O.startTransition = function(e) {
  var t = zr.transition;
  zr.transition = {};
  try {
    e();
  } finally {
    zr.transition = t;
  }
};
O.unstable_act = wa;
O.useCallback = function(e, t) {
  return ve.current.useCallback(e, t);
};
O.useContext = function(e) {
  return ve.current.useContext(e);
};
O.useDebugValue = function() {
};
O.useDeferredValue = function(e) {
  return ve.current.useDeferredValue(e);
};
O.useEffect = function(e, t) {
  return ve.current.useEffect(e, t);
};
O.useId = function() {
  return ve.current.useId();
};
O.useImperativeHandle = function(e, t, n) {
  return ve.current.useImperativeHandle(e, t, n);
};
O.useInsertionEffect = function(e, t) {
  return ve.current.useInsertionEffect(e, t);
};
O.useLayoutEffect = function(e, t) {
  return ve.current.useLayoutEffect(e, t);
};
O.useMemo = function(e, t) {
  return ve.current.useMemo(e, t);
};
O.useReducer = function(e, t, n) {
  return ve.current.useReducer(e, t, n);
};
O.useRef = function(e) {
  return ve.current.useRef(e);
};
O.useState = function(e) {
  return ve.current.useState(e);
};
O.useSyncExternalStore = function(e, t, n) {
  return ve.current.useSyncExternalStore(e, t, n);
};
O.useTransition = function() {
  return ve.current.useTransition();
};
O.version = "18.3.1";
da.exports = O;
var C = da.exports;
const qi = /* @__PURE__ */ Ic(C);
var xa = { exports: {} }, Pe = {}, Sa = { exports: {} }, ka = {};
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
  function t(T, z) {
    var F = T.length;
    T.push(z);
    e: for (; 0 < F; ) {
      var G = F - 1 >>> 1, oe = T[G];
      if (0 < l(oe, z)) T[G] = z, T[F] = oe, F = G;
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var z = T[0], F = T.pop();
    if (F !== z) {
      T[0] = F;
      e: for (var G = 0, oe = T.length, fr = oe >>> 1; G < fr; ) {
        var Tt = 2 * (G + 1) - 1, Ml = T[Tt], Pt = Tt + 1, pr = T[Pt];
        if (0 > l(Ml, F)) Pt < oe && 0 > l(pr, Ml) ? (T[G] = pr, T[Pt] = F, G = Pt) : (T[G] = Ml, T[Tt] = F, G = Tt);
        else if (Pt < oe && 0 > l(pr, F)) T[G] = pr, T[Pt] = F, G = Pt;
        else break e;
      }
    }
    return z;
  }
  function l(T, z) {
    var F = T.sortIndex - z.sortIndex;
    return F !== 0 ? F : T.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, u = i.now();
    e.unstable_now = function() {
      return i.now() - u;
    };
  }
  var s = [], f = [], h = 1, y = null, m = 3, w = !1, S = !1, _ = !1, N = typeof setTimeout == "function" ? setTimeout : null, c = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(T) {
    for (var z = n(f); z !== null; ) {
      if (z.callback === null) r(f);
      else if (z.startTime <= T) r(f), z.sortIndex = z.expirationTime, t(s, z);
      else break;
      z = n(f);
    }
  }
  function v(T) {
    if (_ = !1, p(T), !S) if (n(s) !== null) S = !0, ee(x);
    else {
      var z = n(f);
      z !== null && ne(v, z.startTime - T);
    }
  }
  function x(T, z) {
    S = !1, _ && (_ = !1, c(g), g = -1), w = !0;
    var F = m;
    try {
      for (p(z), y = n(s); y !== null && (!(y.expirationTime > z) || T && !Q()); ) {
        var G = y.callback;
        if (typeof G == "function") {
          y.callback = null, m = y.priorityLevel;
          var oe = G(y.expirationTime <= z);
          z = e.unstable_now(), typeof oe == "function" ? y.callback = oe : y === n(s) && r(s), p(z);
        } else r(s);
        y = n(s);
      }
      if (y !== null) var fr = !0;
      else {
        var Tt = n(f);
        Tt !== null && ne(v, Tt.startTime - z), fr = !1;
      }
      return fr;
    } finally {
      y = null, m = F, w = !1;
    }
  }
  var P = !1, L = null, g = -1, R = 5, M = -1;
  function Q() {
    return !(e.unstable_now() - M < R);
  }
  function Z() {
    if (L !== null) {
      var T = e.unstable_now();
      M = T;
      var z = !0;
      try {
        z = L(!0, T);
      } finally {
        z ? E() : (P = !1, L = null);
      }
    } else P = !1;
  }
  var E;
  if (typeof d == "function") E = function() {
    d(Z);
  };
  else if (typeof MessageChannel < "u") {
    var j = new MessageChannel(), q = j.port2;
    j.port1.onmessage = Z, E = function() {
      q.postMessage(null);
    };
  } else E = function() {
    N(Z, 0);
  };
  function ee(T) {
    L = T, P || (P = !0, E());
  }
  function ne(T, z) {
    g = N(function() {
      T(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    S || w || (S = !0, ee(x));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(T) {
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
      return T();
    } finally {
      m = F;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, z) {
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
    var F = m;
    m = T;
    try {
      return z();
    } finally {
      m = F;
    }
  }, e.unstable_scheduleCallback = function(T, z, F) {
    var G = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? G + F : G) : F = G, T) {
      case 1:
        var oe = -1;
        break;
      case 2:
        oe = 250;
        break;
      case 5:
        oe = 1073741823;
        break;
      case 4:
        oe = 1e4;
        break;
      default:
        oe = 5e3;
    }
    return oe = F + oe, T = { id: h++, callback: z, priorityLevel: T, startTime: F, expirationTime: oe, sortIndex: -1 }, F > G ? (T.sortIndex = F, t(f, T), n(s) === null && T === n(f) && (_ ? (c(g), g = -1) : _ = !0, ne(v, F - G))) : (T.sortIndex = oe, t(s, T), S || w || (S = !0, ee(x))), T;
  }, e.unstable_shouldYield = Q, e.unstable_wrapCallback = function(T) {
    var z = m;
    return function() {
      var F = m;
      m = z;
      try {
        return T.apply(this, arguments);
      } finally {
        m = F;
      }
    };
  };
})(ka);
Sa.exports = ka;
var Gc = Sa.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kc = C, Te = Gc;
function k(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var _a = /* @__PURE__ */ new Set(), Vn = {};
function Qt(e, t) {
  cn(e, t), cn(e + "Capture", t);
}
function cn(e, t) {
  for (Vn[e] = t, e = 0; e < t.length; e++) _a.add(t[e]);
}
var nt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), oo = Object.prototype.hasOwnProperty, Yc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, bi = {}, es = {};
function Xc(e) {
  return oo.call(es, e) ? !0 : oo.call(bi, e) ? !1 : Yc.test(e) ? es[e] = !0 : (bi[e] = !0, !1);
}
function Zc(e, t, n, r) {
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
function Jc(e, t, n, r) {
  if (t === null || typeof t > "u" || Zc(e, t, n, r)) return !0;
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
function we(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
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
var ri = /[\-:]([a-z])/g;
function li(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ri,
    li
  );
  ce[t] = new we(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ri, li);
  ce[t] = new we(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ri, li);
  ce[t] = new we(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ce[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ce.xlinkHref = new we("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ce[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function oi(e, t, n, r) {
  var l = ce.hasOwnProperty(t) ? ce[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Jc(t, n, l, r) && (n = null), r || l === null ? Xc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var it = Kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, hr = Symbol.for("react.element"), Ht = Symbol.for("react.portal"), Gt = Symbol.for("react.fragment"), ii = Symbol.for("react.strict_mode"), io = Symbol.for("react.profiler"), Ea = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), si = Symbol.for("react.forward_ref"), so = Symbol.for("react.suspense"), ao = Symbol.for("react.suspense_list"), ai = Symbol.for("react.memo"), ut = Symbol.for("react.lazy"), Na = Symbol.for("react.offscreen"), ts = Symbol.iterator;
function xn(e) {
  return e === null || typeof e != "object" ? null : (e = ts && e[ts] || e["@@iterator"], typeof e == "function" ? e : null);
}
var X = Object.assign, Rl;
function Tn(e) {
  if (Rl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Rl = t && t[1] || "";
  }
  return `
` + Rl + e;
}
var Fl = !1;
function Ol(e, t) {
  if (!e || Fl) return "";
  Fl = !0;
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
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; ) u--;
      for (; 1 <= i && 0 <= u; i--, u--) if (l[i] !== o[u]) {
        if (i !== 1 || u !== 1)
          do
            if (i--, u--, 0 > u || l[i] !== o[u]) {
              var s = `
` + l[i].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= i && 0 <= u);
        break;
      }
    }
  } finally {
    Fl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Tn(e) : "";
}
function qc(e) {
  switch (e.tag) {
    case 5:
      return Tn(e.type);
    case 16:
      return Tn("Lazy");
    case 13:
      return Tn("Suspense");
    case 19:
      return Tn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ol(e.type, !1), e;
    case 11:
      return e = Ol(e.type.render, !1), e;
    case 1:
      return e = Ol(e.type, !0), e;
    default:
      return "";
  }
}
function uo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Gt:
      return "Fragment";
    case Ht:
      return "Portal";
    case io:
      return "Profiler";
    case ii:
      return "StrictMode";
    case so:
      return "Suspense";
    case ao:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Ca:
      return (e.displayName || "Context") + ".Consumer";
    case Ea:
      return (e._context.displayName || "Context") + ".Provider";
    case si:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ai:
      return t = e.displayName || null, t !== null ? t : uo(e.type) || "Memo";
    case ut:
      t = e._payload, e = e._init;
      try {
        return uo(e(t));
      } catch {
      }
  }
  return null;
}
function bc(e) {
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
      return uo(t);
    case 8:
      return t === ii ? "StrictMode" : "Mode";
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
function _t(e) {
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
function ja(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function ed(e) {
  var t = ja(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r = "" + i, o.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function gr(e) {
  e._valueTracker || (e._valueTracker = ed(e));
}
function Ta(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = ja(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Br(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function co(e, t) {
  var n = t.checked;
  return X({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ns(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = _t(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Pa(e, t) {
  t = t.checked, t != null && oi(e, "checked", t, !1);
}
function fo(e, t) {
  Pa(e, t);
  var n = _t(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? po(e, t.type, n) : t.hasOwnProperty("defaultValue") && po(e, t.type, _t(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function rs(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function po(e, t, n) {
  (t !== "number" || Br(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Pn = Array.isArray;
function rn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + _t(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function mo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return X({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ls(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(k(92));
      if (Pn(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: _t(n) };
}
function Ia(e, t) {
  var n = _t(t.value), r = _t(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function os(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function La(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ho(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? La(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var yr, Ma = function(e) {
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
function Qn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Mn = {
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
}, td = ["Webkit", "ms", "Moz", "O"];
Object.keys(Mn).forEach(function(e) {
  td.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Mn[t] = Mn[e];
  });
});
function za(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Mn.hasOwnProperty(e) && Mn[e] ? ("" + t).trim() : t + "px";
}
function Ra(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = za(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var nd = X({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function go(e, t) {
  if (t) {
    if (nd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function yo(e, t) {
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
var vo = null;
function ui(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var wo = null, ln = null, on = null;
function is(e) {
  if (e = ar(e)) {
    if (typeof wo != "function") throw Error(k(280));
    var t = e.stateNode;
    t && (t = wl(t), wo(e.stateNode, e.type, t));
  }
}
function Fa(e) {
  ln ? on ? on.push(e) : on = [e] : ln = e;
}
function Oa() {
  if (ln) {
    var e = ln, t = on;
    if (on = ln = null, is(e), t) for (e = 0; e < t.length; e++) is(t[e]);
  }
}
function Da(e, t) {
  return e(t);
}
function Aa() {
}
var Dl = !1;
function $a(e, t, n) {
  if (Dl) return e(t, n);
  Dl = !0;
  try {
    return Da(e, t, n);
  } finally {
    Dl = !1, (ln !== null || on !== null) && (Aa(), Oa());
  }
}
function Wn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = wl(n);
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
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var xo = !1;
if (nt) try {
  var Sn = {};
  Object.defineProperty(Sn, "passive", { get: function() {
    xo = !0;
  } }), window.addEventListener("test", Sn, Sn), window.removeEventListener("test", Sn, Sn);
} catch {
  xo = !1;
}
function rd(e, t, n, r, l, o, i, u, s) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (h) {
    this.onError(h);
  }
}
var zn = !1, Hr = null, Gr = !1, So = null, ld = { onError: function(e) {
  zn = !0, Hr = e;
} };
function od(e, t, n, r, l, o, i, u, s) {
  zn = !1, Hr = null, rd.apply(ld, arguments);
}
function id(e, t, n, r, l, o, i, u, s) {
  if (od.apply(this, arguments), zn) {
    if (zn) {
      var f = Hr;
      zn = !1, Hr = null;
    } else throw Error(k(198));
    Gr || (Gr = !0, So = f);
  }
}
function Wt(e) {
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
function ss(e) {
  if (Wt(e) !== e) throw Error(k(188));
}
function sd(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Wt(e), t === null) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return ss(l), e;
        if (o === r) return ss(l), t;
        o = o.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) n = l, r = o;
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          i = !0, n = l, r = o;
          break;
        }
        if (u === r) {
          i = !0, r = l, n = o;
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            i = !0, n = o, r = l;
            break;
          }
          if (u === r) {
            i = !0, r = o, n = l;
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function Va(e) {
  return e = sd(e), e !== null ? Qa(e) : null;
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
var Wa = Te.unstable_scheduleCallback, as = Te.unstable_cancelCallback, ad = Te.unstable_shouldYield, ud = Te.unstable_requestPaint, b = Te.unstable_now, cd = Te.unstable_getCurrentPriorityLevel, ci = Te.unstable_ImmediatePriority, Ba = Te.unstable_UserBlockingPriority, Kr = Te.unstable_NormalPriority, dd = Te.unstable_LowPriority, Ha = Te.unstable_IdlePriority, hl = null, Ye = null;
function fd(e) {
  if (Ye && typeof Ye.onCommitFiberRoot == "function") try {
    Ye.onCommitFiberRoot(hl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Qe = Math.clz32 ? Math.clz32 : hd, pd = Math.log, md = Math.LN2;
function hd(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (pd(e) / md | 0) | 0;
}
var vr = 64, wr = 4194304;
function In(e) {
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
function Yr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = In(u) : (o &= i, o !== 0 && (r = In(o)));
  } else i = n & ~l, i !== 0 ? r = In(i) : o !== 0 && (r = In(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Qe(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function gd(e, t) {
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
function yd(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Qe(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & n) || u & r) && (l[i] = gd(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function ko(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ga() {
  var e = vr;
  return vr <<= 1, !(vr & 4194240) && (vr = 64), e;
}
function Al(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ir(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Qe(t), e[t] = n;
}
function vd(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Qe(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function di(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Qe(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var $ = 0;
function Ka(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ya, fi, Xa, Za, Ja, _o = !1, xr = [], ht = null, gt = null, yt = null, Bn = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map(), dt = [], wd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function us(e, t) {
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
      Bn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Hn.delete(t.pointerId);
  }
}
function kn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = ar(t), t !== null && fi(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function xd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ht = kn(ht, e, t, n, r, l), !0;
    case "dragenter":
      return gt = kn(gt, e, t, n, r, l), !0;
    case "mouseover":
      return yt = kn(yt, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Bn.set(o, kn(Bn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Hn.set(o, kn(Hn.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function qa(e) {
  var t = Mt(e.target);
  if (t !== null) {
    var n = Wt(t);
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
function Rr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Eo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      vo = r, n.target.dispatchEvent(r), vo = null;
    } else return t = ar(n), t !== null && fi(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function cs(e, t, n) {
  Rr(e) && n.delete(t);
}
function Sd() {
  _o = !1, ht !== null && Rr(ht) && (ht = null), gt !== null && Rr(gt) && (gt = null), yt !== null && Rr(yt) && (yt = null), Bn.forEach(cs), Hn.forEach(cs);
}
function _n(e, t) {
  e.blockedOn === t && (e.blockedOn = null, _o || (_o = !0, Te.unstable_scheduleCallback(Te.unstable_NormalPriority, Sd)));
}
function Gn(e) {
  function t(l) {
    return _n(l, e);
  }
  if (0 < xr.length) {
    _n(xr[0], e);
    for (var n = 1; n < xr.length; n++) {
      var r = xr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (ht !== null && _n(ht, e), gt !== null && _n(gt, e), yt !== null && _n(yt, e), Bn.forEach(t), Hn.forEach(t), n = 0; n < dt.length; n++) r = dt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < dt.length && (n = dt[0], n.blockedOn === null); ) qa(n), n.blockedOn === null && dt.shift();
}
var sn = it.ReactCurrentBatchConfig, Xr = !0;
function kd(e, t, n, r) {
  var l = $, o = sn.transition;
  sn.transition = null;
  try {
    $ = 1, pi(e, t, n, r);
  } finally {
    $ = l, sn.transition = o;
  }
}
function _d(e, t, n, r) {
  var l = $, o = sn.transition;
  sn.transition = null;
  try {
    $ = 4, pi(e, t, n, r);
  } finally {
    $ = l, sn.transition = o;
  }
}
function pi(e, t, n, r) {
  if (Xr) {
    var l = Eo(e, t, n, r);
    if (l === null) Yl(e, t, r, Zr, n), us(e, r);
    else if (xd(l, e, t, n, r)) r.stopPropagation();
    else if (us(e, r), t & 4 && -1 < wd.indexOf(e)) {
      for (; l !== null; ) {
        var o = ar(l);
        if (o !== null && Ya(o), o = Eo(e, t, n, r), o === null && Yl(e, t, r, Zr, n), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Yl(e, t, r, null, n);
  }
}
var Zr = null;
function Eo(e, t, n, r) {
  if (Zr = null, e = ui(r), e = Mt(e), e !== null) if (t = Wt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Ua(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Zr = e, null;
}
function ba(e) {
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
      switch (cd()) {
        case ci:
          return 1;
        case Ba:
          return 4;
        case Kr:
        case dd:
          return 16;
        case Ha:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var pt = null, mi = null, Fr = null;
function eu() {
  if (Fr) return Fr;
  var e, t = mi, n = t.length, r, l = "value" in pt ? pt.value : pt.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
  return Fr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Or(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Sr() {
  return !0;
}
function ds() {
  return !1;
}
function Ie(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Sr : ds, this.isPropagationStopped = ds, this;
  }
  return X(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Sr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Sr);
  }, persist: function() {
  }, isPersistent: Sr }), t;
}
var vn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, hi = Ie(vn), sr = X({}, vn, { view: 0, detail: 0 }), Ed = Ie(sr), $l, Ul, En, gl = X({}, sr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: gi, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== En && (En && e.type === "mousemove" ? ($l = e.screenX - En.screenX, Ul = e.screenY - En.screenY) : Ul = $l = 0, En = e), $l);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ul;
} }), fs = Ie(gl), Cd = X({}, gl, { dataTransfer: 0 }), Nd = Ie(Cd), jd = X({}, sr, { relatedTarget: 0 }), Vl = Ie(jd), Td = X({}, vn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Pd = Ie(Td), Id = X({}, vn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Ld = Ie(Id), Md = X({}, vn, { data: 0 }), ps = Ie(Md), zd = {
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
}, Rd = {
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
}, Fd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Od(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Fd[e]) ? !!t[e] : !1;
}
function gi() {
  return Od;
}
var Dd = X({}, sr, { key: function(e) {
  if (e.key) {
    var t = zd[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Or(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Rd[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: gi, charCode: function(e) {
  return e.type === "keypress" ? Or(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Or(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Ad = Ie(Dd), $d = X({}, gl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ms = Ie($d), Ud = X({}, sr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: gi }), Vd = Ie(Ud), Qd = X({}, vn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Wd = Ie(Qd), Bd = X({}, gl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Hd = Ie(Bd), Gd = [9, 13, 27, 32], yi = nt && "CompositionEvent" in window, Rn = null;
nt && "documentMode" in document && (Rn = document.documentMode);
var Kd = nt && "TextEvent" in window && !Rn, tu = nt && (!yi || Rn && 8 < Rn && 11 >= Rn), hs = " ", gs = !1;
function nu(e, t) {
  switch (e) {
    case "keyup":
      return Gd.indexOf(t.keyCode) !== -1;
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
function ru(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Kt = !1;
function Yd(e, t) {
  switch (e) {
    case "compositionend":
      return ru(t);
    case "keypress":
      return t.which !== 32 ? null : (gs = !0, hs);
    case "textInput":
      return e = t.data, e === hs && gs ? null : e;
    default:
      return null;
  }
}
function Xd(e, t) {
  if (Kt) return e === "compositionend" || !yi && nu(e, t) ? (e = eu(), Fr = mi = pt = null, Kt = !1, e) : null;
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
      return tu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Zd = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ys(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Zd[e.type] : t === "textarea";
}
function lu(e, t, n, r) {
  Fa(r), t = Jr(t, "onChange"), 0 < t.length && (n = new hi("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Fn = null, Kn = null;
function Jd(e) {
  hu(e, 0);
}
function yl(e) {
  var t = Zt(e);
  if (Ta(t)) return e;
}
function qd(e, t) {
  if (e === "change") return t;
}
var ou = !1;
if (nt) {
  var Ql;
  if (nt) {
    var Wl = "oninput" in document;
    if (!Wl) {
      var vs = document.createElement("div");
      vs.setAttribute("oninput", "return;"), Wl = typeof vs.oninput == "function";
    }
    Ql = Wl;
  } else Ql = !1;
  ou = Ql && (!document.documentMode || 9 < document.documentMode);
}
function ws() {
  Fn && (Fn.detachEvent("onpropertychange", iu), Kn = Fn = null);
}
function iu(e) {
  if (e.propertyName === "value" && yl(Kn)) {
    var t = [];
    lu(t, Kn, e, ui(e)), $a(Jd, t);
  }
}
function bd(e, t, n) {
  e === "focusin" ? (ws(), Fn = t, Kn = n, Fn.attachEvent("onpropertychange", iu)) : e === "focusout" && ws();
}
function ef(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return yl(Kn);
}
function tf(e, t) {
  if (e === "click") return yl(t);
}
function nf(e, t) {
  if (e === "input" || e === "change") return yl(t);
}
function rf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Be = typeof Object.is == "function" ? Object.is : rf;
function Yn(e, t) {
  if (Be(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!oo.call(t, l) || !Be(e[l], t[l])) return !1;
  }
  return !0;
}
function xs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ss(e, t) {
  var n = xs(e);
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
    n = xs(n);
  }
}
function su(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? su(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function au() {
  for (var e = window, t = Br(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Br(e.document);
  }
  return t;
}
function vi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function lf(e) {
  var t = au(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && su(n.ownerDocument.documentElement, n)) {
    if (r !== null && vi(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Ss(n, o);
        var i = Ss(
          n,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var of = nt && "documentMode" in document && 11 >= document.documentMode, Yt = null, Co = null, On = null, No = !1;
function ks(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  No || Yt == null || Yt !== Br(r) || (r = Yt, "selectionStart" in r && vi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), On && Yn(On, r) || (On = r, r = Jr(Co, "onSelect"), 0 < r.length && (t = new hi("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Yt)));
}
function kr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Xt = { animationend: kr("Animation", "AnimationEnd"), animationiteration: kr("Animation", "AnimationIteration"), animationstart: kr("Animation", "AnimationStart"), transitionend: kr("Transition", "TransitionEnd") }, Bl = {}, uu = {};
nt && (uu = document.createElement("div").style, "AnimationEvent" in window || (delete Xt.animationend.animation, delete Xt.animationiteration.animation, delete Xt.animationstart.animation), "TransitionEvent" in window || delete Xt.transitionend.transition);
function vl(e) {
  if (Bl[e]) return Bl[e];
  if (!Xt[e]) return e;
  var t = Xt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in uu) return Bl[e] = t[n];
  return e;
}
var cu = vl("animationend"), du = vl("animationiteration"), fu = vl("animationstart"), pu = vl("transitionend"), mu = /* @__PURE__ */ new Map(), _s = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ct(e, t) {
  mu.set(e, t), Qt(t, [e]);
}
for (var Hl = 0; Hl < _s.length; Hl++) {
  var Gl = _s[Hl], sf = Gl.toLowerCase(), af = Gl[0].toUpperCase() + Gl.slice(1);
  Ct(sf, "on" + af);
}
Ct(cu, "onAnimationEnd");
Ct(du, "onAnimationIteration");
Ct(fu, "onAnimationStart");
Ct("dblclick", "onDoubleClick");
Ct("focusin", "onFocus");
Ct("focusout", "onBlur");
Ct(pu, "onTransitionEnd");
cn("onMouseEnter", ["mouseout", "mouseover"]);
cn("onMouseLeave", ["mouseout", "mouseover"]);
cn("onPointerEnter", ["pointerout", "pointerover"]);
cn("onPointerLeave", ["pointerout", "pointerover"]);
Qt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Qt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Qt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Qt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Qt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Qt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ln = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), uf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));
function Es(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, id(r, t, void 0, e), e.currentTarget = null;
}
function hu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], s = u.instance, f = u.currentTarget;
        if (u = u.listener, s !== o && l.isPropagationStopped()) break e;
        Es(l, u, f), o = s;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], s = u.instance, f = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped()) break e;
        Es(l, u, f), o = s;
      }
    }
  }
  if (Gr) throw e = So, Gr = !1, So = null, e;
}
function W(e, t) {
  var n = t[Lo];
  n === void 0 && (n = t[Lo] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (gu(t, e, 2, !1), n.add(r));
}
function Kl(e, t, n) {
  var r = 0;
  t && (r |= 4), gu(n, e, r, t);
}
var _r = "_reactListening" + Math.random().toString(36).slice(2);
function Xn(e) {
  if (!e[_r]) {
    e[_r] = !0, _a.forEach(function(n) {
      n !== "selectionchange" && (uf.has(n) || Kl(n, !1, e), Kl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[_r] || (t[_r] = !0, Kl("selectionchange", !1, t));
  }
}
function gu(e, t, n, r) {
  switch (ba(t)) {
    case 1:
      var l = kd;
      break;
    case 4:
      l = _d;
      break;
    default:
      l = pi;
  }
  n = l.bind(null, t, n, e), l = void 0, !xo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Yl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var u = r.stateNode.containerInfo;
      if (u === l || u.nodeType === 8 && u.parentNode === l) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var s = i.tag;
        if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
        i = i.return;
      }
      for (; u !== null; ) {
        if (i = Mt(u), i === null) return;
        if (s = i.tag, s === 5 || s === 6) {
          r = o = i;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  $a(function() {
    var f = o, h = ui(n), y = [];
    e: {
      var m = mu.get(e);
      if (m !== void 0) {
        var w = hi, S = e;
        switch (e) {
          case "keypress":
            if (Or(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = Ad;
            break;
          case "focusin":
            S = "focus", w = Vl;
            break;
          case "focusout":
            S = "blur", w = Vl;
            break;
          case "beforeblur":
          case "afterblur":
            w = Vl;
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
            w = fs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Nd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Vd;
            break;
          case cu:
          case du:
          case fu:
            w = Pd;
            break;
          case pu:
            w = Wd;
            break;
          case "scroll":
            w = Ed;
            break;
          case "wheel":
            w = Hd;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Ld;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = ms;
        }
        var _ = (t & 4) !== 0, N = !_ && e === "scroll", c = _ ? m !== null ? m + "Capture" : null : m;
        _ = [];
        for (var d = f, p; d !== null; ) {
          p = d;
          var v = p.stateNode;
          if (p.tag === 5 && v !== null && (p = v, c !== null && (v = Wn(d, c), v != null && _.push(Zn(d, v, p)))), N) break;
          d = d.return;
        }
        0 < _.length && (m = new w(m, S, null, n, h), y.push({ event: m, listeners: _ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", m && n !== vo && (S = n.relatedTarget || n.fromElement) && (Mt(S) || S[rt])) break e;
        if ((w || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window, w ? (S = n.relatedTarget || n.toElement, w = f, S = S ? Mt(S) : null, S !== null && (N = Wt(S), S !== N || S.tag !== 5 && S.tag !== 6) && (S = null)) : (w = null, S = f), w !== S)) {
          if (_ = fs, v = "onMouseLeave", c = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (_ = ms, v = "onPointerLeave", c = "onPointerEnter", d = "pointer"), N = w == null ? m : Zt(w), p = S == null ? m : Zt(S), m = new _(v, d + "leave", w, n, h), m.target = N, m.relatedTarget = p, v = null, Mt(h) === f && (_ = new _(c, d + "enter", S, n, h), _.target = p, _.relatedTarget = N, v = _), N = v, w && S) t: {
            for (_ = w, c = S, d = 0, p = _; p; p = Bt(p)) d++;
            for (p = 0, v = c; v; v = Bt(v)) p++;
            for (; 0 < d - p; ) _ = Bt(_), d--;
            for (; 0 < p - d; ) c = Bt(c), p--;
            for (; d--; ) {
              if (_ === c || c !== null && _ === c.alternate) break t;
              _ = Bt(_), c = Bt(c);
            }
            _ = null;
          }
          else _ = null;
          w !== null && Cs(y, m, w, _, !1), S !== null && N !== null && Cs(y, N, S, _, !0);
        }
      }
      e: {
        if (m = f ? Zt(f) : window, w = m.nodeName && m.nodeName.toLowerCase(), w === "select" || w === "input" && m.type === "file") var x = qd;
        else if (ys(m)) if (ou) x = nf;
        else {
          x = ef;
          var P = bd;
        }
        else (w = m.nodeName) && w.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (x = tf);
        if (x && (x = x(e, f))) {
          lu(y, x, n, h);
          break e;
        }
        P && P(e, m, f), e === "focusout" && (P = m._wrapperState) && P.controlled && m.type === "number" && po(m, "number", m.value);
      }
      switch (P = f ? Zt(f) : window, e) {
        case "focusin":
          (ys(P) || P.contentEditable === "true") && (Yt = P, Co = f, On = null);
          break;
        case "focusout":
          On = Co = Yt = null;
          break;
        case "mousedown":
          No = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          No = !1, ks(y, n, h);
          break;
        case "selectionchange":
          if (of) break;
        case "keydown":
        case "keyup":
          ks(y, n, h);
      }
      var L;
      if (yi) e: {
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
      else Kt ? nu(e, n) && (g = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (g = "onCompositionStart");
      g && (tu && n.locale !== "ko" && (Kt || g !== "onCompositionStart" ? g === "onCompositionEnd" && Kt && (L = eu()) : (pt = h, mi = "value" in pt ? pt.value : pt.textContent, Kt = !0)), P = Jr(f, g), 0 < P.length && (g = new ps(g, e, null, n, h), y.push({ event: g, listeners: P }), L ? g.data = L : (L = ru(n), L !== null && (g.data = L)))), (L = Kd ? Yd(e, n) : Xd(e, n)) && (f = Jr(f, "onBeforeInput"), 0 < f.length && (h = new ps("onBeforeInput", "beforeinput", null, n, h), y.push({ event: h, listeners: f }), h.data = L));
    }
    hu(y, t);
  });
}
function Zn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Jr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Wn(e, n), o != null && r.unshift(Zn(e, o, l)), o = Wn(e, t), o != null && r.push(Zn(e, o, l))), e = e.return;
  }
  return r;
}
function Bt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Cs(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, f = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && f !== null && (u = f, l ? (s = Wn(n, o), s != null && i.unshift(Zn(n, s, u))) : l || (s = Wn(n, o), s != null && i.push(Zn(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var cf = /\r\n?/g, df = /\u0000|\uFFFD/g;
function Ns(e) {
  return (typeof e == "string" ? e : "" + e).replace(cf, `
`).replace(df, "");
}
function Er(e, t, n) {
  if (t = Ns(t), Ns(e) !== t && n) throw Error(k(425));
}
function qr() {
}
var jo = null, To = null;
function Po(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Io = typeof setTimeout == "function" ? setTimeout : void 0, ff = typeof clearTimeout == "function" ? clearTimeout : void 0, js = typeof Promise == "function" ? Promise : void 0, pf = typeof queueMicrotask == "function" ? queueMicrotask : typeof js < "u" ? function(e) {
  return js.resolve(null).then(e).catch(mf);
} : Io;
function mf(e) {
  setTimeout(function() {
    throw e;
  });
}
function Xl(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Gn(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Gn(t);
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
function Ts(e) {
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
var wn = Math.random().toString(36).slice(2), Ke = "__reactFiber$" + wn, Jn = "__reactProps$" + wn, rt = "__reactContainer$" + wn, Lo = "__reactEvents$" + wn, hf = "__reactListeners$" + wn, gf = "__reactHandles$" + wn;
function Mt(e) {
  var t = e[Ke];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[rt] || n[Ke]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ts(e); e !== null; ) {
        if (n = e[Ke]) return n;
        e = Ts(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function ar(e) {
  return e = e[Ke] || e[rt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Zt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function wl(e) {
  return e[Jn] || null;
}
var Mo = [], Jt = -1;
function Nt(e) {
  return { current: e };
}
function B(e) {
  0 > Jt || (e.current = Mo[Jt], Mo[Jt] = null, Jt--);
}
function V(e, t) {
  Jt++, Mo[Jt] = e.current, e.current = t;
}
var Et = {}, me = Nt(Et), ke = Nt(!1), Dt = Et;
function dn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Et;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n) l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function _e(e) {
  return e = e.childContextTypes, e != null;
}
function br() {
  B(ke), B(me);
}
function Ps(e, t, n) {
  if (me.current !== Et) throw Error(k(168));
  V(me, t), V(ke, n);
}
function yu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, bc(e) || "Unknown", l));
  return X({}, n, r);
}
function el(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Et, Dt = me.current, V(me, e), V(ke, ke.current), !0;
}
function Is(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n ? (e = yu(e, t, Dt), r.__reactInternalMemoizedMergedChildContext = e, B(ke), B(me), V(me, e)) : B(ke), V(ke, n);
}
var qe = null, xl = !1, Zl = !1;
function vu(e) {
  qe === null ? qe = [e] : qe.push(e);
}
function yf(e) {
  xl = !0, vu(e);
}
function jt() {
  if (!Zl && qe !== null) {
    Zl = !0;
    var e = 0, t = $;
    try {
      var n = qe;
      for ($ = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      qe = null, xl = !1;
    } catch (l) {
      throw qe !== null && (qe = qe.slice(e + 1)), Wa(ci, jt), l;
    } finally {
      $ = t, Zl = !1;
    }
  }
  return null;
}
var qt = [], bt = 0, tl = null, nl = 0, Le = [], Me = 0, At = null, be = 1, et = "";
function It(e, t) {
  qt[bt++] = nl, qt[bt++] = tl, tl = e, nl = t;
}
function wu(e, t, n) {
  Le[Me++] = be, Le[Me++] = et, Le[Me++] = At, At = e;
  var r = be;
  e = et;
  var l = 32 - Qe(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - Qe(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, be = 1 << 32 - Qe(t) + l | n << l | r, et = o + e;
  } else be = 1 << o | n << l | r, et = e;
}
function wi(e) {
  e.return !== null && (It(e, 1), wu(e, 1, 0));
}
function xi(e) {
  for (; e === tl; ) tl = qt[--bt], qt[bt] = null, nl = qt[--bt], qt[bt] = null;
  for (; e === At; ) At = Le[--Me], Le[Me] = null, et = Le[--Me], Le[Me] = null, be = Le[--Me], Le[Me] = null;
}
var je = null, Ne = null, H = !1, Ve = null;
function xu(e, t) {
  var n = ze(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ls(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, je = e, Ne = vt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, je = e, Ne = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = At !== null ? { id: be, overflow: et } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ze(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, je = e, Ne = null, !0) : !1;
    default:
      return !1;
  }
}
function zo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ro(e) {
  if (H) {
    var t = Ne;
    if (t) {
      var n = t;
      if (!Ls(e, t)) {
        if (zo(e)) throw Error(k(418));
        t = vt(n.nextSibling);
        var r = je;
        t && Ls(e, t) ? xu(r, n) : (e.flags = e.flags & -4097 | 2, H = !1, je = e);
      }
    } else {
      if (zo(e)) throw Error(k(418));
      e.flags = e.flags & -4097 | 2, H = !1, je = e;
    }
  }
}
function Ms(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  je = e;
}
function Cr(e) {
  if (e !== je) return !1;
  if (!H) return Ms(e), H = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Po(e.type, e.memoizedProps)), t && (t = Ne)) {
    if (zo(e)) throw Su(), Error(k(418));
    for (; t; ) xu(e, t), t = vt(t.nextSibling);
  }
  if (Ms(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ne = vt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ne = null;
    }
  } else Ne = je ? vt(e.stateNode.nextSibling) : null;
  return !0;
}
function Su() {
  for (var e = Ne; e; ) e = vt(e.nextSibling);
}
function fn() {
  Ne = je = null, H = !1;
}
function Si(e) {
  Ve === null ? Ve = [e] : Ve.push(e);
}
var vf = it.ReactCurrentBatchConfig;
function Cn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var u = l.refs;
        i === null ? delete u[o] : u[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function Nr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function zs(e) {
  var t = e._init;
  return t(e._payload);
}
function ku(e) {
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
    return c = kt(c, d), c.index = 0, c.sibling = null, c;
  }
  function o(c, d, p) {
    return c.index = p, e ? (p = c.alternate, p !== null ? (p = p.index, p < d ? (c.flags |= 2, d) : p) : (c.flags |= 2, d)) : (c.flags |= 1048576, d);
  }
  function i(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function u(c, d, p, v) {
    return d === null || d.tag !== 6 ? (d = ro(p, c.mode, v), d.return = c, d) : (d = l(d, p), d.return = c, d);
  }
  function s(c, d, p, v) {
    var x = p.type;
    return x === Gt ? h(c, d, p.props.children, v, p.key) : d !== null && (d.elementType === x || typeof x == "object" && x !== null && x.$$typeof === ut && zs(x) === d.type) ? (v = l(d, p.props), v.ref = Cn(c, d, p), v.return = c, v) : (v = Wr(p.type, p.key, p.props, null, c.mode, v), v.ref = Cn(c, d, p), v.return = c, v);
  }
  function f(c, d, p, v) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== p.containerInfo || d.stateNode.implementation !== p.implementation ? (d = lo(p, c.mode, v), d.return = c, d) : (d = l(d, p.children || []), d.return = c, d);
  }
  function h(c, d, p, v, x) {
    return d === null || d.tag !== 7 ? (d = Ot(p, c.mode, v, x), d.return = c, d) : (d = l(d, p), d.return = c, d);
  }
  function y(c, d, p) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = ro("" + d, c.mode, p), d.return = c, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case hr:
          return p = Wr(d.type, d.key, d.props, null, c.mode, p), p.ref = Cn(c, null, d), p.return = c, p;
        case Ht:
          return d = lo(d, c.mode, p), d.return = c, d;
        case ut:
          var v = d._init;
          return y(c, v(d._payload), p);
      }
      if (Pn(d) || xn(d)) return d = Ot(d, c.mode, p, null), d.return = c, d;
      Nr(c, d);
    }
    return null;
  }
  function m(c, d, p, v) {
    var x = d !== null ? d.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return x !== null ? null : u(c, d, "" + p, v);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case hr:
          return p.key === x ? s(c, d, p, v) : null;
        case Ht:
          return p.key === x ? f(c, d, p, v) : null;
        case ut:
          return x = p._init, m(
            c,
            d,
            x(p._payload),
            v
          );
      }
      if (Pn(p) || xn(p)) return x !== null ? null : h(c, d, p, v, null);
      Nr(c, p);
    }
    return null;
  }
  function w(c, d, p, v, x) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return c = c.get(p) || null, u(d, c, "" + v, x);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case hr:
          return c = c.get(v.key === null ? p : v.key) || null, s(d, c, v, x);
        case Ht:
          return c = c.get(v.key === null ? p : v.key) || null, f(d, c, v, x);
        case ut:
          var P = v._init;
          return w(c, d, p, P(v._payload), x);
      }
      if (Pn(v) || xn(v)) return c = c.get(p) || null, h(d, c, v, x, null);
      Nr(d, v);
    }
    return null;
  }
  function S(c, d, p, v) {
    for (var x = null, P = null, L = d, g = d = 0, R = null; L !== null && g < p.length; g++) {
      L.index > g ? (R = L, L = null) : R = L.sibling;
      var M = m(c, L, p[g], v);
      if (M === null) {
        L === null && (L = R);
        break;
      }
      e && L && M.alternate === null && t(c, L), d = o(M, d, g), P === null ? x = M : P.sibling = M, P = M, L = R;
    }
    if (g === p.length) return n(c, L), H && It(c, g), x;
    if (L === null) {
      for (; g < p.length; g++) L = y(c, p[g], v), L !== null && (d = o(L, d, g), P === null ? x = L : P.sibling = L, P = L);
      return H && It(c, g), x;
    }
    for (L = r(c, L); g < p.length; g++) R = w(L, c, g, p[g], v), R !== null && (e && R.alternate !== null && L.delete(R.key === null ? g : R.key), d = o(R, d, g), P === null ? x = R : P.sibling = R, P = R);
    return e && L.forEach(function(Q) {
      return t(c, Q);
    }), H && It(c, g), x;
  }
  function _(c, d, p, v) {
    var x = xn(p);
    if (typeof x != "function") throw Error(k(150));
    if (p = x.call(p), p == null) throw Error(k(151));
    for (var P = x = null, L = d, g = d = 0, R = null, M = p.next(); L !== null && !M.done; g++, M = p.next()) {
      L.index > g ? (R = L, L = null) : R = L.sibling;
      var Q = m(c, L, M.value, v);
      if (Q === null) {
        L === null && (L = R);
        break;
      }
      e && L && Q.alternate === null && t(c, L), d = o(Q, d, g), P === null ? x = Q : P.sibling = Q, P = Q, L = R;
    }
    if (M.done) return n(
      c,
      L
    ), H && It(c, g), x;
    if (L === null) {
      for (; !M.done; g++, M = p.next()) M = y(c, M.value, v), M !== null && (d = o(M, d, g), P === null ? x = M : P.sibling = M, P = M);
      return H && It(c, g), x;
    }
    for (L = r(c, L); !M.done; g++, M = p.next()) M = w(L, c, g, M.value, v), M !== null && (e && M.alternate !== null && L.delete(M.key === null ? g : M.key), d = o(M, d, g), P === null ? x = M : P.sibling = M, P = M);
    return e && L.forEach(function(Z) {
      return t(c, Z);
    }), H && It(c, g), x;
  }
  function N(c, d, p, v) {
    if (typeof p == "object" && p !== null && p.type === Gt && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case hr:
          e: {
            for (var x = p.key, P = d; P !== null; ) {
              if (P.key === x) {
                if (x = p.type, x === Gt) {
                  if (P.tag === 7) {
                    n(c, P.sibling), d = l(P, p.props.children), d.return = c, c = d;
                    break e;
                  }
                } else if (P.elementType === x || typeof x == "object" && x !== null && x.$$typeof === ut && zs(x) === P.type) {
                  n(c, P.sibling), d = l(P, p.props), d.ref = Cn(c, P, p), d.return = c, c = d;
                  break e;
                }
                n(c, P);
                break;
              } else t(c, P);
              P = P.sibling;
            }
            p.type === Gt ? (d = Ot(p.props.children, c.mode, v, p.key), d.return = c, c = d) : (v = Wr(p.type, p.key, p.props, null, c.mode, v), v.ref = Cn(c, d, p), v.return = c, c = v);
          }
          return i(c);
        case Ht:
          e: {
            for (P = p.key; d !== null; ) {
              if (d.key === P) if (d.tag === 4 && d.stateNode.containerInfo === p.containerInfo && d.stateNode.implementation === p.implementation) {
                n(c, d.sibling), d = l(d, p.children || []), d.return = c, c = d;
                break e;
              } else {
                n(c, d);
                break;
              }
              else t(c, d);
              d = d.sibling;
            }
            d = lo(p, c.mode, v), d.return = c, c = d;
          }
          return i(c);
        case ut:
          return P = p._init, N(c, d, P(p._payload), v);
      }
      if (Pn(p)) return S(c, d, p, v);
      if (xn(p)) return _(c, d, p, v);
      Nr(c, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, d !== null && d.tag === 6 ? (n(c, d.sibling), d = l(d, p), d.return = c, c = d) : (n(c, d), d = ro(p, c.mode, v), d.return = c, c = d), i(c)) : n(c, d);
  }
  return N;
}
var pn = ku(!0), _u = ku(!1), rl = Nt(null), ll = null, en = null, ki = null;
function _i() {
  ki = en = ll = null;
}
function Ei(e) {
  var t = rl.current;
  B(rl), e._currentValue = t;
}
function Fo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function an(e, t) {
  ll = e, ki = en = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Se = !0), e.firstContext = null);
}
function Fe(e) {
  var t = e._currentValue;
  if (ki !== e) if (e = { context: e, memoizedValue: t, next: null }, en === null) {
    if (ll === null) throw Error(k(308));
    en = e, ll.dependencies = { lanes: 0, firstContext: e };
  } else en = en.next = e;
  return t;
}
var zt = null;
function Ci(e) {
  zt === null ? zt = [e] : zt.push(e);
}
function Eu(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Ci(t)) : (n.next = l.next, l.next = n), t.interleaved = n, lt(e, r);
}
function lt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var ct = !1;
function Ni(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Cu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function tt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function wt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, D & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, lt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Ci(r)) : (t.next = l.next, l.next = t), r.interleaved = t, lt(e, n);
}
function Dr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, di(e, n);
  }
}
function Rs(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? l = o = i : o = o.next = i, n = n.next;
      } while (n !== null);
      o === null ? l = o = t : o = o.next = t;
    } else l = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function ol(e, t, n, r) {
  var l = e.updateQueue;
  ct = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, f = s.next;
    s.next = null, i === null ? o = f : i.next = f, i = s;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== i && (u === null ? h.firstBaseUpdate = f : u.next = f, h.lastBaseUpdate = s));
  }
  if (o !== null) {
    var y = l.baseState;
    i = 0, h = f = s = null, u = o;
    do {
      var m = u.lane, w = u.eventTime;
      if ((r & m) === m) {
        h !== null && (h = h.next = {
          eventTime: w,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var S = e, _ = u;
          switch (m = t, w = n, _.tag) {
            case 1:
              if (S = _.payload, typeof S == "function") {
                y = S.call(w, y, m);
                break e;
              }
              y = S;
              break e;
            case 3:
              S.flags = S.flags & -65537 | 128;
            case 0:
              if (S = _.payload, m = typeof S == "function" ? S.call(w, y, m) : S, m == null) break e;
              y = X({}, y, m);
              break e;
            case 2:
              ct = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [u] : m.push(u));
      } else w = { eventTime: w, lane: m, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (f = h = w, s = y) : h = h.next = w, i |= m;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        m = u, u = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (s = y), l.baseState = s, l.firstBaseUpdate = f, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    Ut |= i, e.lanes = i, e.memoizedState = y;
  }
}
function Fs(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(k(191, l));
      l.call(r);
    }
  }
}
var ur = {}, Xe = Nt(ur), qn = Nt(ur), bn = Nt(ur);
function Rt(e) {
  if (e === ur) throw Error(k(174));
  return e;
}
function ji(e, t) {
  switch (V(bn, t), V(qn, e), V(Xe, ur), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ho(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ho(t, e);
  }
  B(Xe), V(Xe, t);
}
function mn() {
  B(Xe), B(qn), B(bn);
}
function Nu(e) {
  Rt(bn.current);
  var t = Rt(Xe.current), n = ho(t, e.type);
  t !== n && (V(qn, e), V(Xe, n));
}
function Ti(e) {
  qn.current === e && (B(Xe), B(qn));
}
var K = Nt(0);
function il(e) {
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
var Jl = [];
function Pi() {
  for (var e = 0; e < Jl.length; e++) Jl[e]._workInProgressVersionPrimary = null;
  Jl.length = 0;
}
var Ar = it.ReactCurrentDispatcher, ql = it.ReactCurrentBatchConfig, $t = 0, Y = null, re = null, ie = null, sl = !1, Dn = !1, er = 0, wf = 0;
function de() {
  throw Error(k(321));
}
function Ii(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Be(e[n], t[n])) return !1;
  return !0;
}
function Li(e, t, n, r, l, o) {
  if ($t = o, Y = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ar.current = e === null || e.memoizedState === null ? _f : Ef, e = n(r, l), Dn) {
    o = 0;
    do {
      if (Dn = !1, er = 0, 25 <= o) throw Error(k(301));
      o += 1, ie = re = null, t.updateQueue = null, Ar.current = Cf, e = n(r, l);
    } while (Dn);
  }
  if (Ar.current = al, t = re !== null && re.next !== null, $t = 0, ie = re = Y = null, sl = !1, t) throw Error(k(300));
  return e;
}
function Mi() {
  var e = er !== 0;
  return er = 0, e;
}
function Ge() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ie === null ? Y.memoizedState = ie = e : ie = ie.next = e, ie;
}
function Oe() {
  if (re === null) {
    var e = Y.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = re.next;
  var t = ie === null ? Y.memoizedState : ie.next;
  if (t !== null) ie = t, re = e;
  else {
    if (e === null) throw Error(k(310));
    re = e, e = { memoizedState: re.memoizedState, baseState: re.baseState, baseQueue: re.baseQueue, queue: re.queue, next: null }, ie === null ? Y.memoizedState = ie = e : ie = ie.next = e;
  }
  return ie;
}
function tr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function bl(e) {
  var t = Oe(), n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = re, l = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, n.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var u = i = null, s = null, f = o;
    do {
      var h = f.lane;
      if (($t & h) === h) s !== null && (s = s.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
      else {
        var y = {
          lane: h,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null
        };
        s === null ? (u = s = y, i = r) : s = s.next = y, Y.lanes |= h, Ut |= h;
      }
      f = f.next;
    } while (f !== null && f !== o);
    s === null ? i = r : s.next = u, Be(r, t.memoizedState) || (Se = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, Y.lanes |= o, Ut |= o, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function eo(e) {
  var t = Oe(), n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    Be(o, t.memoizedState) || (Se = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function ju() {
}
function Tu(e, t) {
  var n = Y, r = Oe(), l = t(), o = !Be(r.memoizedState, l);
  if (o && (r.memoizedState = l, Se = !0), r = r.queue, zi(Lu.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ie !== null && ie.memoizedState.tag & 1) {
    if (n.flags |= 2048, nr(9, Iu.bind(null, n, r, l, t), void 0, null), se === null) throw Error(k(349));
    $t & 30 || Pu(n, t, l);
  }
  return l;
}
function Pu(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Y.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Y.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Iu(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Mu(t) && zu(e);
}
function Lu(e, t, n) {
  return n(function() {
    Mu(t) && zu(e);
  });
}
function Mu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Be(e, n);
  } catch {
    return !0;
  }
}
function zu(e) {
  var t = lt(e, 1);
  t !== null && We(t, e, 1, -1);
}
function Os(e) {
  var t = Ge();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: tr, lastRenderedState: e }, t.queue = e, e = e.dispatch = kf.bind(null, Y, e), [t.memoizedState, e];
}
function nr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Y.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Y.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ru() {
  return Oe().memoizedState;
}
function $r(e, t, n, r) {
  var l = Ge();
  Y.flags |= e, l.memoizedState = nr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Sl(e, t, n, r) {
  var l = Oe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (re !== null) {
    var i = re.memoizedState;
    if (o = i.destroy, r !== null && Ii(r, i.deps)) {
      l.memoizedState = nr(t, n, o, r);
      return;
    }
  }
  Y.flags |= e, l.memoizedState = nr(1 | t, n, o, r);
}
function Ds(e, t) {
  return $r(8390656, 8, e, t);
}
function zi(e, t) {
  return Sl(2048, 8, e, t);
}
function Fu(e, t) {
  return Sl(4, 2, e, t);
}
function Ou(e, t) {
  return Sl(4, 4, e, t);
}
function Du(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Au(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Sl(4, 4, Du.bind(null, t, e), n);
}
function Ri() {
}
function $u(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ii(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Uu(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ii(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Vu(e, t, n) {
  return $t & 21 ? (Be(n, t) || (n = Ga(), Y.lanes |= n, Ut |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Se = !0), e.memoizedState = n);
}
function xf(e, t) {
  var n = $;
  $ = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ql.transition;
  ql.transition = {};
  try {
    e(!1), t();
  } finally {
    $ = n, ql.transition = r;
  }
}
function Qu() {
  return Oe().memoizedState;
}
function Sf(e, t, n) {
  var r = St(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Wu(e)) Bu(t, n);
  else if (n = Eu(e, t, n, r), n !== null) {
    var l = ye();
    We(n, e, r, l), Hu(n, t, r);
  }
}
function kf(e, t, n) {
  var r = St(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Wu(e)) Bu(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var i = t.lastRenderedState, u = o(i, n);
      if (l.hasEagerState = !0, l.eagerState = u, Be(u, i)) {
        var s = t.interleaved;
        s === null ? (l.next = l, Ci(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Eu(e, t, l, r), n !== null && (l = ye(), We(n, e, r, l), Hu(n, t, r));
  }
}
function Wu(e) {
  var t = e.alternate;
  return e === Y || t !== null && t === Y;
}
function Bu(e, t) {
  Dn = sl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Hu(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, di(e, n);
  }
}
var al = { readContext: Fe, useCallback: de, useContext: de, useEffect: de, useImperativeHandle: de, useInsertionEffect: de, useLayoutEffect: de, useMemo: de, useReducer: de, useRef: de, useState: de, useDebugValue: de, useDeferredValue: de, useTransition: de, useMutableSource: de, useSyncExternalStore: de, useId: de, unstable_isNewReconciler: !1 }, _f = { readContext: Fe, useCallback: function(e, t) {
  return Ge().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Fe, useEffect: Ds, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, $r(
    4194308,
    4,
    Du.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return $r(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return $r(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ge();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ge();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Sf.bind(null, Y, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ge();
  return e = { current: e }, t.memoizedState = e;
}, useState: Os, useDebugValue: Ri, useDeferredValue: function(e) {
  return Ge().memoizedState = e;
}, useTransition: function() {
  var e = Os(!1), t = e[0];
  return e = xf.bind(null, e[1]), Ge().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Y, l = Ge();
  if (H) {
    if (n === void 0) throw Error(k(407));
    n = n();
  } else {
    if (n = t(), se === null) throw Error(k(349));
    $t & 30 || Pu(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, Ds(Lu.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, nr(9, Iu.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Ge(), t = se.identifierPrefix;
  if (H) {
    var n = et, r = be;
    n = (r & ~(1 << 32 - Qe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = er++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = wf++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Ef = {
  readContext: Fe,
  useCallback: $u,
  useContext: Fe,
  useEffect: zi,
  useImperativeHandle: Au,
  useInsertionEffect: Fu,
  useLayoutEffect: Ou,
  useMemo: Uu,
  useReducer: bl,
  useRef: Ru,
  useState: function() {
    return bl(tr);
  },
  useDebugValue: Ri,
  useDeferredValue: function(e) {
    var t = Oe();
    return Vu(t, re.memoizedState, e);
  },
  useTransition: function() {
    var e = bl(tr)[0], t = Oe().memoizedState;
    return [e, t];
  },
  useMutableSource: ju,
  useSyncExternalStore: Tu,
  useId: Qu,
  unstable_isNewReconciler: !1
}, Cf = { readContext: Fe, useCallback: $u, useContext: Fe, useEffect: zi, useImperativeHandle: Au, useInsertionEffect: Fu, useLayoutEffect: Ou, useMemo: Uu, useReducer: eo, useRef: Ru, useState: function() {
  return eo(tr);
}, useDebugValue: Ri, useDeferredValue: function(e) {
  var t = Oe();
  return re === null ? t.memoizedState = e : Vu(t, re.memoizedState, e);
}, useTransition: function() {
  var e = eo(tr)[0], t = Oe().memoizedState;
  return [e, t];
}, useMutableSource: ju, useSyncExternalStore: Tu, useId: Qu, unstable_isNewReconciler: !1 };
function $e(e, t) {
  if (e && e.defaultProps) {
    t = X({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Oo(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : X({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var kl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Wt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ye(), l = St(e), o = tt(r, l);
  o.payload = t, n != null && (o.callback = n), t = wt(e, o, l), t !== null && (We(t, e, l, r), Dr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ye(), l = St(e), o = tt(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = wt(e, o, l), t !== null && (We(t, e, l, r), Dr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ye(), r = St(e), l = tt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = wt(e, l, r), t !== null && (We(t, e, r, n), Dr(t, e, r));
} };
function As(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Yn(n, r) || !Yn(l, o) : !0;
}
function Gu(e, t, n) {
  var r = !1, l = Et, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Fe(o) : (l = _e(t) ? Dt : me.current, r = t.contextTypes, o = (r = r != null) ? dn(e, l) : Et), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = kl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function $s(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && kl.enqueueReplaceState(t, t.state, null);
}
function Do(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Ni(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = Fe(o) : (o = _e(t) ? Dt : me.current, l.context = dn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Oo(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && kl.enqueueReplaceState(l, l.state, null), ol(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function hn(e, t) {
  try {
    var n = "", r = t;
    do
      n += qc(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function to(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ao(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Nf = typeof WeakMap == "function" ? WeakMap : Map;
function Ku(e, t, n) {
  n = tt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    cl || (cl = !0, Yo = r), Ao(e, t);
  }, n;
}
function Yu(e, t, n) {
  n = tt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Ao(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Ao(e, t), typeof r != "function" && (xt === null ? xt = /* @__PURE__ */ new Set([this]) : xt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Us(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Nf();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Uf.bind(null, e, t, n), t.then(e, e));
}
function Vs(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Qs(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = tt(-1, 1), t.tag = 2, wt(n, t, 1))), n.lanes |= 1), e);
}
var jf = it.ReactCurrentOwner, Se = !1;
function he(e, t, n, r) {
  t.child = e === null ? _u(t, null, n, r) : pn(t, e.child, n, r);
}
function Ws(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return an(t, l), r = Li(e, t, n, r, o, l), n = Mi(), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ot(e, t, l)) : (H && n && wi(t), t.flags |= 1, he(e, t, r, l), t.child);
}
function Bs(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Qi(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Xu(e, t, o, r, l)) : (e = Wr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Yn, n(i, r) && e.ref === t.ref) return ot(e, t, l);
  }
  return t.flags |= 1, e = kt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Xu(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Yn(o, r) && e.ref === t.ref) if (Se = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (Se = !0);
    else return t.lanes = e.lanes, ot(e, t, l);
  }
  return $o(e, t, n, r, l);
}
function Zu(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, V(nn, Ce), Ce |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, V(nn, Ce), Ce |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, V(nn, Ce), Ce |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, V(nn, Ce), Ce |= r;
  return he(e, t, l, n), t.child;
}
function Ju(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function $o(e, t, n, r, l) {
  var o = _e(n) ? Dt : me.current;
  return o = dn(t, o), an(t, l), n = Li(e, t, n, r, o, l), r = Mi(), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ot(e, t, l)) : (H && r && wi(t), t.flags |= 1, he(e, t, n, l), t.child);
}
function Hs(e, t, n, r, l) {
  if (_e(n)) {
    var o = !0;
    el(t);
  } else o = !1;
  if (an(t, l), t.stateNode === null) Ur(e, t), Gu(t, n, r), Do(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, f = n.contextType;
    typeof f == "object" && f !== null ? f = Fe(f) : (f = _e(n) ? Dt : me.current, f = dn(t, f));
    var h = n.getDerivedStateFromProps, y = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    y || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== f) && $s(t, i, r, f), ct = !1;
    var m = t.memoizedState;
    i.state = m, ol(t, r, i, l), s = t.memoizedState, u !== r || m !== s || ke.current || ct ? (typeof h == "function" && (Oo(t, n, h, r), s = t.memoizedState), (u = ct || As(t, n, u, r, m, s, f)) ? (y || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = f, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Cu(e, t), u = t.memoizedProps, f = t.type === t.elementType ? u : $e(t.type, u), i.props = f, y = t.pendingProps, m = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = Fe(s) : (s = _e(n) ? Dt : me.current, s = dn(t, s));
    var w = n.getDerivedStateFromProps;
    (h = typeof w == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== y || m !== s) && $s(t, i, r, s), ct = !1, m = t.memoizedState, i.state = m, ol(t, r, i, l);
    var S = t.memoizedState;
    u !== y || m !== S || ke.current || ct ? (typeof w == "function" && (Oo(t, n, w, r), S = t.memoizedState), (f = ct || As(t, n, f, r, m, S, s) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, S, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, S, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), i.props = r, i.state = S, i.context = s, r = f) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Uo(e, t, n, r, o, l);
}
function Uo(e, t, n, r, l, o) {
  Ju(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Is(t, n, !1), ot(e, t, o);
  r = t.stateNode, jf.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = pn(t, e.child, null, o), t.child = pn(t, null, u, o)) : he(e, t, u, o), t.memoizedState = r.state, l && Is(t, n, !0), t.child;
}
function qu(e) {
  var t = e.stateNode;
  t.pendingContext ? Ps(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ps(e, t.context, !1), ji(e, t.containerInfo);
}
function Gs(e, t, n, r, l) {
  return fn(), Si(l), t.flags |= 256, he(e, t, n, r), t.child;
}
var Vo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Qo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function bu(e, t, n) {
  var r = t.pendingProps, l = K.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), V(K, l & 1), e === null)
    return Ro(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Cl(i, r, 0, null), e = Ot(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Qo(n), t.memoizedState = Vo, e) : Fi(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return Tf(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = kt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = kt(u, o) : (o = Ot(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Qo(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Vo, r;
  }
  return o = e.child, e = o.sibling, r = kt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Fi(e, t) {
  return t = Cl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function jr(e, t, n, r) {
  return r !== null && Si(r), pn(t, e.child, null, n), e = Fi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Tf(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = to(Error(k(422))), jr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Cl({ mode: "visible", children: r.children }, l, 0, null), o = Ot(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && pn(t, e.child, null, i), t.child.memoizedState = Qo(i), t.memoizedState = Vo, o);
  if (!(t.mode & 1)) return jr(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(k(419)), r = to(o, r, void 0), jr(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, Se || u) {
    if (r = se, r !== null) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, lt(e, l), We(r, e, l, -1));
    }
    return Vi(), r = to(Error(k(421))), jr(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Vf.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Ne = vt(l.nextSibling), je = t, H = !0, Ve = null, e !== null && (Le[Me++] = be, Le[Me++] = et, Le[Me++] = At, be = e.id, et = e.overflow, At = t), t = Fi(t, r.children), t.flags |= 4096, t);
}
function Ks(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Fo(e.return, t, n);
}
function no(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function ec(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (he(e, t, r.children, n), r = K.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Ks(e, n, t);
      else if (e.tag === 19) Ks(e, n, t);
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
  if (V(K, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && il(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), no(t, !1, l, n, o);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && il(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      no(t, !0, n, null, o);
      break;
    case "together":
      no(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Ur(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function ot(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Ut |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (e = t.child, n = kt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = kt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Pf(e, t, n) {
  switch (t.tag) {
    case 3:
      qu(t), fn();
      break;
    case 5:
      Nu(t);
      break;
    case 1:
      _e(t.type) && el(t);
      break;
    case 4:
      ji(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      V(rl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (V(K, K.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? bu(e, t, n) : (V(K, K.current & 1), e = ot(e, t, n), e !== null ? e.sibling : null);
      V(K, K.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return ec(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), V(K, K.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Zu(e, t, n);
  }
  return ot(e, t, n);
}
var tc, Wo, nc, rc;
tc = function(e, t) {
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
Wo = function() {
};
nc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Rt(Xe.current);
    var o = null;
    switch (n) {
      case "input":
        l = co(e, l), r = co(e, r), o = [];
        break;
      case "select":
        l = X({}, l, { value: void 0 }), r = X({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = mo(e, l), r = mo(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = qr);
    }
    go(n, r);
    var i;
    n = null;
    for (f in l) if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null) if (f === "style") {
      var u = l[f];
      for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (Vn.hasOwnProperty(f) ? o || (o = []) : (o = o || []).push(f, null));
    for (f in r) {
      var s = r[f];
      if (u = l != null ? l[f] : void 0, r.hasOwnProperty(f) && s !== u && (s != null || u != null)) if (f === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
      } else n || (o || (o = []), o.push(
        f,
        n
      )), n = s;
      else f === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(f, s)) : f === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(f, "" + s) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (Vn.hasOwnProperty(f) ? (s != null && f === "onScroll" && W("scroll", e), o || u === s || (o = [])) : (o = o || []).push(f, s));
    }
    n && (o = o || []).push("style", n);
    var f = o;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
rc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Nn(e, t) {
  if (!H) switch (e.tailMode) {
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
function If(e, t, n) {
  var r = t.pendingProps;
  switch (xi(t), t.tag) {
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
      return _e(t.type) && br(), fe(t), null;
    case 3:
      return r = t.stateNode, mn(), B(ke), B(me), Pi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Cr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ve !== null && (Jo(Ve), Ve = null))), Wo(e, t), fe(t), null;
    case 5:
      Ti(t);
      var l = Rt(bn.current);
      if (n = t.type, e !== null && t.stateNode != null) nc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return fe(t), null;
        }
        if (e = Rt(Xe.current), Cr(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Ke] = t, r[Jn] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              W("cancel", r), W("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              W("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Ln.length; l++) W(Ln[l], r);
              break;
            case "source":
              W("error", r);
              break;
            case "img":
            case "image":
            case "link":
              W(
                "error",
                r
              ), W("load", r);
              break;
            case "details":
              W("toggle", r);
              break;
            case "input":
              ns(r, o), W("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, W("invalid", r);
              break;
            case "textarea":
              ls(r, o), W("invalid", r);
          }
          go(n, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var u = o[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Er(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Er(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : Vn.hasOwnProperty(i) && u != null && i === "onScroll" && W("scroll", r);
          }
          switch (n) {
            case "input":
              gr(r), rs(r, o, !0);
              break;
            case "textarea":
              gr(r), os(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = qr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = La(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Ke] = t, e[Jn] = r, tc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = yo(n, r), n) {
              case "dialog":
                W("cancel", e), W("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                W("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Ln.length; l++) W(Ln[l], e);
                l = r;
                break;
              case "source":
                W("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                W(
                  "error",
                  e
                ), W("load", e), l = r;
                break;
              case "details":
                W("toggle", e), l = r;
                break;
              case "input":
                ns(e, r), l = co(e, r), W("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = X({}, r, { value: void 0 }), W("invalid", e);
                break;
              case "textarea":
                ls(e, r), l = mo(e, r), W("invalid", e);
                break;
              default:
                l = r;
            }
            go(n, l), u = l;
            for (o in u) if (u.hasOwnProperty(o)) {
              var s = u[o];
              o === "style" ? Ra(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Ma(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Qn(e, s) : typeof s == "number" && Qn(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Vn.hasOwnProperty(o) ? s != null && o === "onScroll" && W("scroll", e) : s != null && oi(e, o, s, i));
            }
            switch (n) {
              case "input":
                gr(e), rs(e, r, !1);
                break;
              case "textarea":
                gr(e), os(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + _t(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? rn(e, !!r.multiple, o, !1) : r.defaultValue != null && rn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = qr);
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
      if (e && t.stateNode != null) rc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (n = Rt(bn.current), Rt(Xe.current), Cr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ke] = t, (o = r.nodeValue !== n) && (e = je, e !== null)) switch (e.tag) {
            case 3:
              Er(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Er(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ke] = t, t.stateNode = r;
      }
      return fe(t), null;
    case 13:
      if (B(K), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (H && Ne !== null && t.mode & 1 && !(t.flags & 128)) Su(), fn(), t.flags |= 98560, o = !1;
        else if (o = Cr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(k(317));
            o[Ke] = t;
          } else fn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          fe(t), o = !1;
        } else Ve !== null && (Jo(Ve), Ve = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || K.current & 1 ? le === 0 && (le = 3) : Vi())), t.updateQueue !== null && (t.flags |= 4), fe(t), null);
    case 4:
      return mn(), Wo(e, t), e === null && Xn(t.stateNode.containerInfo), fe(t), null;
    case 10:
      return Ei(t.type._context), fe(t), null;
    case 17:
      return _e(t.type) && br(), fe(t), null;
    case 19:
      if (B(K), o = t.memoizedState, o === null) return fe(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) Nn(o, !1);
      else {
        if (le !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = il(e), i !== null) {
            for (t.flags |= 128, Nn(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return V(K, K.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && b() > gn && (t.flags |= 128, r = !0, Nn(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = il(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Nn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !H) return fe(t), null;
        } else 2 * b() - o.renderingStartTime > gn && n !== 1073741824 && (t.flags |= 128, r = !0, Nn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = b(), t.sibling = null, n = K.current, V(K, r ? n & 1 | 2 : n & 1), t) : (fe(t), null);
    case 22:
    case 23:
      return Ui(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ce & 1073741824 && (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : fe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function Lf(e, t) {
  switch (xi(t), t.tag) {
    case 1:
      return _e(t.type) && br(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return mn(), B(ke), B(me), Pi(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ti(t), null;
    case 13:
      if (B(K), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(k(340));
        fn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return B(K), null;
    case 4:
      return mn(), null;
    case 10:
      return Ei(t.type._context), null;
    case 22:
    case 23:
      return Ui(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Tr = !1, pe = !1, Mf = typeof WeakSet == "function" ? WeakSet : Set, I = null;
function tn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    J(e, t, r);
  }
  else n.current = null;
}
function Bo(e, t, n) {
  try {
    n();
  } catch (r) {
    J(e, t, r);
  }
}
var Ys = !1;
function zf(e, t) {
  if (jo = Xr, e = au(), vi(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType;
        } catch {
          n = null;
          break e;
        }
        var i = 0, u = -1, s = -1, f = 0, h = 0, y = e, m = null;
        t: for (; ; ) {
          for (var w; y !== n || l !== 0 && y.nodeType !== 3 || (u = i + l), y !== o || r !== 0 && y.nodeType !== 3 || (s = i + r), y.nodeType === 3 && (i += y.nodeValue.length), (w = y.firstChild) !== null; )
            m = y, y = w;
          for (; ; ) {
            if (y === e) break t;
            if (m === n && ++f === l && (u = i), m === o && ++h === r && (s = i), (w = y.nextSibling) !== null) break;
            y = m, m = y.parentNode;
          }
          y = w;
        }
        n = u === -1 || s === -1 ? null : { start: u, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (To = { focusedElem: e, selectionRange: n }, Xr = !1, I = t; I !== null; ) if (t = I, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, I = e;
  else for (; I !== null; ) {
    t = I;
    try {
      var S = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (S !== null) {
            var _ = S.memoizedProps, N = S.memoizedState, c = t.stateNode, d = c.getSnapshotBeforeUpdate(t.elementType === t.type ? _ : $e(t.type, _), N);
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
          throw Error(k(163));
      }
    } catch (v) {
      J(t, t.return, v);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, I = e;
      break;
    }
    I = t.return;
  }
  return S = Ys, Ys = !1, S;
}
function An(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Bo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function _l(e, t) {
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
function Ho(e) {
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
function lc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, lc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ke], delete t[Jn], delete t[Lo], delete t[hf], delete t[gf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function oc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Xs(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || oc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Go(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = qr));
  else if (r !== 4 && (e = e.child, e !== null)) for (Go(e, t, n), e = e.sibling; e !== null; ) Go(e, t, n), e = e.sibling;
}
function Ko(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ko(e, t, n), e = e.sibling; e !== null; ) Ko(e, t, n), e = e.sibling;
}
var ae = null, Ue = !1;
function at(e, t, n) {
  for (n = n.child; n !== null; ) ic(e, t, n), n = n.sibling;
}
function ic(e, t, n) {
  if (Ye && typeof Ye.onCommitFiberUnmount == "function") try {
    Ye.onCommitFiberUnmount(hl, n);
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
      ae !== null && (Ue ? (e = ae, n = n.stateNode, e.nodeType === 8 ? Xl(e.parentNode, n) : e.nodeType === 1 && Xl(e, n), Gn(e)) : Xl(ae, n.stateNode));
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
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Bo(n, t, i), l = l.next;
        } while (l !== r);
      }
      at(e, t, n);
      break;
    case 1:
      if (!pe && (tn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        J(n, t, u);
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
function Zs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Mf()), t.forEach(function(r) {
      var l = Qf.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function De(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var o = e, i = t, u = i;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            ae = u.stateNode, Ue = !1;
            break e;
          case 3:
            ae = u.stateNode.containerInfo, Ue = !0;
            break e;
          case 4:
            ae = u.stateNode.containerInfo, Ue = !0;
            break e;
        }
        u = u.return;
      }
      if (ae === null) throw Error(k(160));
      ic(o, i, l), ae = null, Ue = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (f) {
      J(l, t, f);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) sc(t, e), t = t.sibling;
}
function sc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (De(t, e), He(e), r & 4) {
        try {
          An(3, e, e.return), _l(3, e);
        } catch (_) {
          J(e, e.return, _);
        }
        try {
          An(5, e, e.return);
        } catch (_) {
          J(e, e.return, _);
        }
      }
      break;
    case 1:
      De(t, e), He(e), r & 512 && n !== null && tn(n, n.return);
      break;
    case 5:
      if (De(t, e), He(e), r & 512 && n !== null && tn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Qn(l, "");
        } catch (_) {
          J(e, e.return, _);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && o.type === "radio" && o.name != null && Pa(l, o), yo(u, i);
          var f = yo(u, o);
          for (i = 0; i < s.length; i += 2) {
            var h = s[i], y = s[i + 1];
            h === "style" ? Ra(l, y) : h === "dangerouslySetInnerHTML" ? Ma(l, y) : h === "children" ? Qn(l, y) : oi(l, h, y, f);
          }
          switch (u) {
            case "input":
              fo(l, o);
              break;
            case "textarea":
              Ia(l, o);
              break;
            case "select":
              var m = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var w = o.value;
              w != null ? rn(l, !!o.multiple, w, !1) : m !== !!o.multiple && (o.defaultValue != null ? rn(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : rn(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[Jn] = o;
        } catch (_) {
          J(e, e.return, _);
        }
      }
      break;
    case 6:
      if (De(t, e), He(e), r & 4) {
        if (e.stateNode === null) throw Error(k(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (_) {
          J(e, e.return, _);
        }
      }
      break;
    case 3:
      if (De(t, e), He(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Gn(t.containerInfo);
      } catch (_) {
        J(e, e.return, _);
      }
      break;
    case 4:
      De(t, e), He(e);
      break;
    case 13:
      De(t, e), He(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Ai = b())), r & 4 && Zs(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (pe = (f = pe) || h, De(t, e), pe = f) : De(t, e), He(e), r & 8192) {
        if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !h && e.mode & 1) for (I = e, h = e.child; h !== null; ) {
          for (y = I = h; I !== null; ) {
            switch (m = I, w = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                An(4, m, m.return);
                break;
              case 1:
                tn(m, m.return);
                var S = m.stateNode;
                if (typeof S.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount();
                  } catch (_) {
                    J(r, n, _);
                  }
                }
                break;
              case 5:
                tn(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  qs(y);
                  continue;
                }
            }
            w !== null ? (w.return = m, I = w) : qs(y);
          }
          h = h.sibling;
        }
        e: for (h = null, y = e; ; ) {
          if (y.tag === 5) {
            if (h === null) {
              h = y;
              try {
                l = y.stateNode, f ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = y.stateNode, s = y.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = za("display", i));
              } catch (_) {
                J(e, e.return, _);
              }
            }
          } else if (y.tag === 6) {
            if (h === null) try {
              y.stateNode.nodeValue = f ? "" : y.memoizedProps;
            } catch (_) {
              J(e, e.return, _);
            }
          } else if ((y.tag !== 22 && y.tag !== 23 || y.memoizedState === null || y === e) && y.child !== null) {
            y.child.return = y, y = y.child;
            continue;
          }
          if (y === e) break e;
          for (; y.sibling === null; ) {
            if (y.return === null || y.return === e) break e;
            h === y && (h = null), y = y.return;
          }
          h === y && (h = null), y.sibling.return = y.return, y = y.sibling;
        }
      }
      break;
    case 19:
      De(t, e), He(e), r & 4 && Zs(e);
      break;
    case 21:
      break;
    default:
      De(
        t,
        e
      ), He(e);
  }
}
function He(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (oc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Qn(l, ""), r.flags &= -33);
          var o = Xs(e);
          Ko(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Xs(e);
          Go(e, u, i);
          break;
        default:
          throw Error(k(161));
      }
    } catch (s) {
      J(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Rf(e, t, n) {
  I = e, ac(e);
}
function ac(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var l = I, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Tr;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || pe;
        u = Tr;
        var f = pe;
        if (Tr = i, (pe = s) && !f) for (I = l; I !== null; ) i = I, s = i.child, i.tag === 22 && i.memoizedState !== null ? bs(l) : s !== null ? (s.return = i, I = s) : bs(l);
        for (; o !== null; ) I = o, ac(o), o = o.sibling;
        I = l, Tr = u, pe = f;
      }
      Js(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, I = o) : Js(e);
  }
}
function Js(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            pe || _l(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !pe) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : $e(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && Fs(t, o, r);
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
              Fs(t, i, n);
            }
            break;
          case 5:
            var u = t.stateNode;
            if (n === null && t.flags & 4) {
              n = u;
              var s = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s.autoFocus && n.focus();
                  break;
                case "img":
                  s.src && (n.src = s.src);
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
                var h = f.memoizedState;
                if (h !== null) {
                  var y = h.dehydrated;
                  y !== null && Gn(y);
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
            throw Error(k(163));
        }
        pe || t.flags & 512 && Ho(t);
      } catch (m) {
        J(t, t.return, m);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, I = n;
      break;
    }
    I = t.return;
  }
}
function qs(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, I = n;
      break;
    }
    I = t.return;
  }
}
function bs(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            _l(4, t);
          } catch (s) {
            J(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              J(t, l, s);
            }
          }
          var o = t.return;
          try {
            Ho(t);
          } catch (s) {
            J(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ho(t);
          } catch (s) {
            J(t, i, s);
          }
      }
    } catch (s) {
      J(t, t.return, s);
    }
    if (t === e) {
      I = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, I = u;
      break;
    }
    I = t.return;
  }
}
var Ff = Math.ceil, ul = it.ReactCurrentDispatcher, Oi = it.ReactCurrentOwner, Re = it.ReactCurrentBatchConfig, D = 0, se = null, te = null, ue = 0, Ce = 0, nn = Nt(0), le = 0, rr = null, Ut = 0, El = 0, Di = 0, $n = null, xe = null, Ai = 0, gn = 1 / 0, Je = null, cl = !1, Yo = null, xt = null, Pr = !1, mt = null, dl = 0, Un = 0, Xo = null, Vr = -1, Qr = 0;
function ye() {
  return D & 6 ? b() : Vr !== -1 ? Vr : Vr = b();
}
function St(e) {
  return e.mode & 1 ? D & 2 && ue !== 0 ? ue & -ue : vf.transition !== null ? (Qr === 0 && (Qr = Ga()), Qr) : (e = $, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ba(e.type)), e) : 1;
}
function We(e, t, n, r) {
  if (50 < Un) throw Un = 0, Xo = null, Error(k(185));
  ir(e, n, r), (!(D & 2) || e !== se) && (e === se && (!(D & 2) && (El |= n), le === 4 && ft(e, ue)), Ee(e, r), n === 1 && D === 0 && !(t.mode & 1) && (gn = b() + 500, xl && jt()));
}
function Ee(e, t) {
  var n = e.callbackNode;
  yd(e, t);
  var r = Yr(e, e === se ? ue : 0);
  if (r === 0) n !== null && as(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && as(n), t === 1) e.tag === 0 ? yf(ea.bind(null, e)) : vu(ea.bind(null, e)), pf(function() {
      !(D & 6) && jt();
    }), n = null;
    else {
      switch (Ka(r)) {
        case 1:
          n = ci;
          break;
        case 4:
          n = Ba;
          break;
        case 16:
          n = Kr;
          break;
        case 536870912:
          n = Ha;
          break;
        default:
          n = Kr;
      }
      n = gc(n, uc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function uc(e, t) {
  if (Vr = -1, Qr = 0, D & 6) throw Error(k(327));
  var n = e.callbackNode;
  if (un() && e.callbackNode !== n) return null;
  var r = Yr(e, e === se ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = fl(e, r);
  else {
    t = r;
    var l = D;
    D |= 2;
    var o = dc();
    (se !== e || ue !== t) && (Je = null, gn = b() + 500, Ft(e, t));
    do
      try {
        Af();
        break;
      } catch (u) {
        cc(e, u);
      }
    while (!0);
    _i(), ul.current = o, D = l, te !== null ? t = 0 : (se = null, ue = 0, t = le);
  }
  if (t !== 0) {
    if (t === 2 && (l = ko(e), l !== 0 && (r = l, t = Zo(e, l))), t === 1) throw n = rr, Ft(e, 0), ft(e, r), Ee(e, b()), n;
    if (t === 6) ft(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Of(l) && (t = fl(e, r), t === 2 && (o = ko(e), o !== 0 && (r = o, t = Zo(e, o))), t === 1)) throw n = rr, Ft(e, 0), ft(e, r), Ee(e, b()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Lt(e, xe, Je);
          break;
        case 3:
          if (ft(e, r), (r & 130023424) === r && (t = Ai + 500 - b(), 10 < t)) {
            if (Yr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ye(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Io(Lt.bind(null, e, xe, Je), t);
            break;
          }
          Lt(e, xe, Je);
          break;
        case 4:
          if (ft(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Qe(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = b() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ff(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Io(Lt.bind(null, e, xe, Je), r);
            break;
          }
          Lt(e, xe, Je);
          break;
        case 5:
          Lt(e, xe, Je);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Ee(e, b()), e.callbackNode === n ? uc.bind(null, e) : null;
}
function Zo(e, t) {
  var n = $n;
  return e.current.memoizedState.isDehydrated && (Ft(e, t).flags |= 256), e = fl(e, t), e !== 2 && (t = xe, xe = n, t !== null && Jo(t)), e;
}
function Jo(e) {
  xe === null ? xe = e : xe.push.apply(xe, e);
}
function Of(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!Be(o(), l)) return !1;
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
  for (t &= ~Di, t &= ~El, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Qe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ea(e) {
  if (D & 6) throw Error(k(327));
  un();
  var t = Yr(e, 0);
  if (!(t & 1)) return Ee(e, b()), null;
  var n = fl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ko(e);
    r !== 0 && (t = r, n = Zo(e, r));
  }
  if (n === 1) throw n = rr, Ft(e, 0), ft(e, t), Ee(e, b()), n;
  if (n === 6) throw Error(k(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Lt(e, xe, Je), Ee(e, b()), null;
}
function $i(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    D = n, D === 0 && (gn = b() + 500, xl && jt());
  }
}
function Vt(e) {
  mt !== null && mt.tag === 0 && !(D & 6) && un();
  var t = D;
  D |= 1;
  var n = Re.transition, r = $;
  try {
    if (Re.transition = null, $ = 1, e) return e();
  } finally {
    $ = r, Re.transition = n, D = t, !(D & 6) && jt();
  }
}
function Ui() {
  Ce = nn.current, B(nn);
}
function Ft(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, ff(n)), te !== null) for (n = te.return; n !== null; ) {
    var r = n;
    switch (xi(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && br();
        break;
      case 3:
        mn(), B(ke), B(me), Pi();
        break;
      case 5:
        Ti(r);
        break;
      case 4:
        mn();
        break;
      case 13:
        B(K);
        break;
      case 19:
        B(K);
        break;
      case 10:
        Ei(r.type._context);
        break;
      case 22:
      case 23:
        Ui();
    }
    n = n.return;
  }
  if (se = e, te = e = kt(e.current, null), ue = Ce = t, le = 0, rr = null, Di = El = Ut = 0, xe = $n = null, zt !== null) {
    for (t = 0; t < zt.length; t++) if (n = zt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, o = n.pending;
      if (o !== null) {
        var i = o.next;
        o.next = l, r.next = i;
      }
      n.pending = r;
    }
    zt = null;
  }
  return e;
}
function cc(e, t) {
  do {
    var n = te;
    try {
      if (_i(), Ar.current = al, sl) {
        for (var r = Y.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        sl = !1;
      }
      if ($t = 0, ie = re = Y = null, Dn = !1, er = 0, Oi.current = null, n === null || n.return === null) {
        le = 1, rr = t, te = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, s = t;
        if (t = ue, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var f = s, h = u, y = h.tag;
          if (!(h.mode & 1) && (y === 0 || y === 11 || y === 15)) {
            var m = h.alternate;
            m ? (h.updateQueue = m.updateQueue, h.memoizedState = m.memoizedState, h.lanes = m.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var w = Vs(i);
          if (w !== null) {
            w.flags &= -257, Qs(w, i, u, o, t), w.mode & 1 && Us(o, f, t), t = w, s = f;
            var S = t.updateQueue;
            if (S === null) {
              var _ = /* @__PURE__ */ new Set();
              _.add(s), t.updateQueue = _;
            } else S.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Us(o, f, t), Vi();
              break e;
            }
            s = Error(k(426));
          }
        } else if (H && u.mode & 1) {
          var N = Vs(i);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256), Qs(N, i, u, o, t), Si(hn(s, u));
            break e;
          }
        }
        o = s = hn(s, u), le !== 4 && (le = 2), $n === null ? $n = [o] : $n.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var c = Ku(o, s, t);
              Rs(o, c);
              break e;
            case 1:
              u = s;
              var d = o.type, p = o.stateNode;
              if (!(o.flags & 128) && (typeof d.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (xt === null || !xt.has(p)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var v = Yu(o, u, t);
                Rs(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      pc(n);
    } catch (x) {
      t = x, te === n && n !== null && (te = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function dc() {
  var e = ul.current;
  return ul.current = al, e === null ? al : e;
}
function Vi() {
  (le === 0 || le === 3 || le === 2) && (le = 4), se === null || !(Ut & 268435455) && !(El & 268435455) || ft(se, ue);
}
function fl(e, t) {
  var n = D;
  D |= 2;
  var r = dc();
  (se !== e || ue !== t) && (Je = null, Ft(e, t));
  do
    try {
      Df();
      break;
    } catch (l) {
      cc(e, l);
    }
  while (!0);
  if (_i(), D = n, ul.current = r, te !== null) throw Error(k(261));
  return se = null, ue = 0, le;
}
function Df() {
  for (; te !== null; ) fc(te);
}
function Af() {
  for (; te !== null && !ad(); ) fc(te);
}
function fc(e) {
  var t = hc(e.alternate, e, Ce);
  e.memoizedProps = e.pendingProps, t === null ? pc(e) : te = t, Oi.current = null;
}
function pc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Lf(n, t), n !== null) {
        n.flags &= 32767, te = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        le = 6, te = null;
        return;
      }
    } else if (n = If(n, t, Ce), n !== null) {
      te = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      te = t;
      return;
    }
    te = t = e;
  } while (t !== null);
  le === 0 && (le = 5);
}
function Lt(e, t, n) {
  var r = $, l = Re.transition;
  try {
    Re.transition = null, $ = 1, $f(e, t, n, r);
  } finally {
    Re.transition = l, $ = r;
  }
  return null;
}
function $f(e, t, n, r) {
  do
    un();
  while (mt !== null);
  if (D & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(k(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (vd(e, o), e === se && (te = se = null, ue = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Pr || (Pr = !0, gc(Kr, function() {
    return un(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Re.transition, Re.transition = null;
    var i = $;
    $ = 1;
    var u = D;
    D |= 4, Oi.current = null, zf(e, n), sc(n, e), lf(To), Xr = !!jo, To = jo = null, e.current = n, Rf(n), ud(), D = u, $ = i, Re.transition = o;
  } else e.current = n;
  if (Pr && (Pr = !1, mt = e, dl = l), o = e.pendingLanes, o === 0 && (xt = null), fd(n.stateNode), Ee(e, b()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (cl) throw cl = !1, e = Yo, Yo = null, e;
  return dl & 1 && e.tag !== 0 && un(), o = e.pendingLanes, o & 1 ? e === Xo ? Un++ : (Un = 0, Xo = e) : Un = 0, jt(), null;
}
function un() {
  if (mt !== null) {
    var e = Ka(dl), t = Re.transition, n = $;
    try {
      if (Re.transition = null, $ = 16 > e ? 16 : e, mt === null) var r = !1;
      else {
        if (e = mt, mt = null, dl = 0, D & 6) throw Error(k(331));
        var l = D;
        for (D |= 4, I = e.current; I !== null; ) {
          var o = I, i = o.child;
          if (I.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var f = u[s];
                for (I = f; I !== null; ) {
                  var h = I;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      An(8, h, o);
                  }
                  var y = h.child;
                  if (y !== null) y.return = h, I = y;
                  else for (; I !== null; ) {
                    h = I;
                    var m = h.sibling, w = h.return;
                    if (lc(h), h === f) {
                      I = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = w, I = m;
                      break;
                    }
                    I = w;
                  }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var _ = S.child;
                if (_ !== null) {
                  S.child = null;
                  do {
                    var N = _.sibling;
                    _.sibling = null, _ = N;
                  } while (_ !== null);
                }
              }
              I = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, I = i;
          else e: for (; I !== null; ) {
            if (o = I, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                An(9, o, o.return);
            }
            var c = o.sibling;
            if (c !== null) {
              c.return = o.return, I = c;
              break e;
            }
            I = o.return;
          }
        }
        var d = e.current;
        for (I = d; I !== null; ) {
          i = I;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) p.return = i, I = p;
          else e: for (i = d; I !== null; ) {
            if (u = I, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  _l(9, u);
              }
            } catch (x) {
              J(u, u.return, x);
            }
            if (u === i) {
              I = null;
              break e;
            }
            var v = u.sibling;
            if (v !== null) {
              v.return = u.return, I = v;
              break e;
            }
            I = u.return;
          }
        }
        if (D = l, jt(), Ye && typeof Ye.onPostCommitFiberRoot == "function") try {
          Ye.onPostCommitFiberRoot(hl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      $ = n, Re.transition = t;
    }
  }
  return !1;
}
function ta(e, t, n) {
  t = hn(n, t), t = Ku(e, t, 1), e = wt(e, t, 1), t = ye(), e !== null && (ir(e, 1, t), Ee(e, t));
}
function J(e, t, n) {
  if (e.tag === 3) ta(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      ta(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (xt === null || !xt.has(r))) {
        e = hn(n, e), e = Yu(t, e, 1), t = wt(t, e, 1), e = ye(), t !== null && (ir(t, 1, e), Ee(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Uf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ye(), e.pingedLanes |= e.suspendedLanes & n, se === e && (ue & n) === n && (le === 4 || le === 3 && (ue & 130023424) === ue && 500 > b() - Ai ? Ft(e, 0) : Di |= n), Ee(e, t);
}
function mc(e, t) {
  t === 0 && (e.mode & 1 ? (t = wr, wr <<= 1, !(wr & 130023424) && (wr = 4194304)) : t = 1);
  var n = ye();
  e = lt(e, t), e !== null && (ir(e, t, n), Ee(e, n));
}
function Vf(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), mc(e, n);
}
function Qf(e, t) {
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
      throw Error(k(314));
  }
  r !== null && r.delete(t), mc(e, n);
}
var hc;
hc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || ke.current) Se = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Se = !1, Pf(e, t, n);
    Se = !!(e.flags & 131072);
  }
  else Se = !1, H && t.flags & 1048576 && wu(t, nl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ur(e, t), e = t.pendingProps;
      var l = dn(t, me.current);
      an(t, n), l = Li(null, t, r, e, l, n);
      var o = Mi();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, _e(r) ? (o = !0, el(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ni(t), l.updater = kl, t.stateNode = l, l._reactInternals = t, Do(t, r, e, n), t = Uo(null, t, r, !0, o, n)) : (t.tag = 0, H && o && wi(t), he(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ur(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Bf(r), e = $e(r, e), l) {
          case 0:
            t = $o(null, t, r, e, n);
            break e;
          case 1:
            t = Hs(null, t, r, e, n);
            break e;
          case 11:
            t = Ws(null, t, r, e, n);
            break e;
          case 14:
            t = Bs(null, t, r, $e(r.type, e), n);
            break e;
        }
        throw Error(k(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : $e(r, l), $o(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : $e(r, l), Hs(e, t, r, l, n);
    case 3:
      e: {
        if (qu(t), e === null) throw Error(k(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, Cu(e, t), ol(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          l = hn(Error(k(423)), t), t = Gs(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = hn(Error(k(424)), t), t = Gs(e, t, r, n, l);
          break e;
        } else for (Ne = vt(t.stateNode.containerInfo.firstChild), je = t, H = !0, Ve = null, n = _u(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (fn(), r === l) {
            t = ot(e, t, n);
            break e;
          }
          he(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Nu(t), e === null && Ro(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, Po(r, l) ? i = null : o !== null && Po(r, o) && (t.flags |= 32), Ju(e, t), he(e, t, i, n), t.child;
    case 6:
      return e === null && Ro(t), null;
    case 13:
      return bu(e, t, n);
    case 4:
      return ji(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = pn(t, null, r, n) : he(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : $e(r, l), Ws(e, t, r, l, n);
    case 7:
      return he(e, t, t.pendingProps, n), t.child;
    case 8:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, V(rl, r._currentValue), r._currentValue = i, o !== null) if (Be(o.value, i)) {
          if (o.children === l.children && !ke.current) {
            t = ot(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            i = o.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (o.tag === 1) {
                  s = tt(-1, n & -n), s.tag = 2;
                  var f = o.updateQueue;
                  if (f !== null) {
                    f = f.shared;
                    var h = f.pending;
                    h === null ? s.next = s : (s.next = h.next, h.next = s), f.pending = s;
                  }
                }
                o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Fo(
                  o.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              s = s.next;
            }
          } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (i = o.return, i === null) throw Error(k(341));
            i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Fo(i, n, t), i = o.sibling;
          } else i = o.child;
          if (i !== null) i.return = o;
          else for (i = o; i !== null; ) {
            if (i === t) {
              i = null;
              break;
            }
            if (o = i.sibling, o !== null) {
              o.return = i.return, i = o;
              break;
            }
            i = i.return;
          }
          o = i;
        }
        he(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, an(t, n), l = Fe(l), r = r(l), t.flags |= 1, he(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = $e(r, t.pendingProps), l = $e(r.type, l), Bs(e, t, r, l, n);
    case 15:
      return Xu(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : $e(r, l), Ur(e, t), t.tag = 1, _e(r) ? (e = !0, el(t)) : e = !1, an(t, n), Gu(t, r, l), Do(t, r, l, n), Uo(null, t, r, !0, e, n);
    case 19:
      return ec(e, t, n);
    case 22:
      return Zu(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function gc(e, t) {
  return Wa(e, t);
}
function Wf(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ze(e, t, n, r) {
  return new Wf(e, t, n, r);
}
function Qi(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Bf(e) {
  if (typeof e == "function") return Qi(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === si) return 11;
    if (e === ai) return 14;
  }
  return 2;
}
function kt(e, t) {
  var n = e.alternate;
  return n === null ? (n = ze(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Wr(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") Qi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Gt:
      return Ot(n.children, l, o, t);
    case ii:
      i = 8, l |= 8;
      break;
    case io:
      return e = ze(12, n, t, l | 2), e.elementType = io, e.lanes = o, e;
    case so:
      return e = ze(13, n, t, l), e.elementType = so, e.lanes = o, e;
    case ao:
      return e = ze(19, n, t, l), e.elementType = ao, e.lanes = o, e;
    case Na:
      return Cl(n, l, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Ea:
          i = 10;
          break e;
        case Ca:
          i = 9;
          break e;
        case si:
          i = 11;
          break e;
        case ai:
          i = 14;
          break e;
        case ut:
          i = 16, r = null;
          break e;
      }
      throw Error(k(130, e == null ? e : typeof e, ""));
  }
  return t = ze(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Ot(e, t, n, r) {
  return e = ze(7, e, r, t), e.lanes = n, e;
}
function Cl(e, t, n, r) {
  return e = ze(22, e, r, t), e.elementType = Na, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ro(e, t, n) {
  return e = ze(6, e, null, t), e.lanes = n, e;
}
function lo(e, t, n) {
  return t = ze(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Hf(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Al(0), this.expirationTimes = Al(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Al(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Wi(e, t, n, r, l, o, i, u, s) {
  return e = new Hf(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = ze(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ni(o), e;
}
function Gf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ht, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function yc(e) {
  if (!e) return Et;
  e = e._reactInternals;
  e: {
    if (Wt(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (_e(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (_e(n)) return yu(e, n, t);
  }
  return t;
}
function vc(e, t, n, r, l, o, i, u, s) {
  return e = Wi(n, r, !0, e, l, o, i, u, s), e.context = yc(null), n = e.current, r = ye(), l = St(n), o = tt(r, l), o.callback = t ?? null, wt(n, o, l), e.current.lanes = l, ir(e, l, r), Ee(e, r), e;
}
function Nl(e, t, n, r) {
  var l = t.current, o = ye(), i = St(l);
  return n = yc(n), t.context === null ? t.context = n : t.pendingContext = n, t = tt(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = wt(l, t, i), e !== null && (We(e, l, i, o), Dr(e, l, i)), i;
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
function na(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Bi(e, t) {
  na(e, t), (e = e.alternate) && na(e, t);
}
function Kf() {
  return null;
}
var wc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Hi(e) {
  this._internalRoot = e;
}
jl.prototype.render = Hi.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Nl(e, t, null, null);
};
jl.prototype.unmount = Hi.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Vt(function() {
      Nl(null, e, null, null);
    }), t[rt] = null;
  }
};
function jl(e) {
  this._internalRoot = e;
}
jl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Za();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < dt.length && t !== 0 && t < dt[n].priority; n++) ;
    dt.splice(n, 0, e), n === 0 && qa(e);
  }
};
function Gi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Tl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ra() {
}
function Yf(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var f = pl(i);
        o.call(f);
      };
    }
    var i = vc(t, r, e, 0, null, !1, !1, "", ra);
    return e._reactRootContainer = i, e[rt] = i.current, Xn(e.nodeType === 8 ? e.parentNode : e), Vt(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var f = pl(s);
      u.call(f);
    };
  }
  var s = Wi(e, 0, !1, null, null, !1, !1, "", ra);
  return e._reactRootContainer = s, e[rt] = s.current, Xn(e.nodeType === 8 ? e.parentNode : e), Vt(function() {
    Nl(t, s, n, r);
  }), s;
}
function Pl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = pl(i);
        u.call(s);
      };
    }
    Nl(t, i, e, l);
  } else i = Yf(n, t, e, l, r);
  return pl(i);
}
Ya = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = In(t.pendingLanes);
        n !== 0 && (di(t, n | 1), Ee(t, b()), !(D & 6) && (gn = b() + 500, jt()));
      }
      break;
    case 13:
      Vt(function() {
        var r = lt(e, 1);
        if (r !== null) {
          var l = ye();
          We(r, e, 1, l);
        }
      }), Bi(e, 1);
  }
};
fi = function(e) {
  if (e.tag === 13) {
    var t = lt(e, 134217728);
    if (t !== null) {
      var n = ye();
      We(t, e, 134217728, n);
    }
    Bi(e, 134217728);
  }
};
Xa = function(e) {
  if (e.tag === 13) {
    var t = St(e), n = lt(e, t);
    if (n !== null) {
      var r = ye();
      We(n, e, t, r);
    }
    Bi(e, t);
  }
};
Za = function() {
  return $;
};
Ja = function(e, t) {
  var n = $;
  try {
    return $ = e, t();
  } finally {
    $ = n;
  }
};
wo = function(e, t, n) {
  switch (t) {
    case "input":
      if (fo(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = wl(r);
            if (!l) throw Error(k(90));
            Ta(r), fo(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ia(e, n);
      break;
    case "select":
      t = n.value, t != null && rn(e, !!n.multiple, t, !1);
  }
};
Da = $i;
Aa = Vt;
var Xf = { usingClientEntryPoint: !1, Events: [ar, Zt, wl, Fa, Oa, $i] }, jn = { findFiberByHostInstance: Mt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Zf = { bundleType: jn.bundleType, version: jn.version, rendererPackageName: jn.rendererPackageName, rendererConfig: jn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: it.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Va(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: jn.findFiberByHostInstance || Kf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ir = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ir.isDisabled && Ir.supportsFiber) try {
    hl = Ir.inject(Zf), Ye = Ir;
  } catch {
  }
}
Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xf;
Pe.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Gi(t)) throw Error(k(200));
  return Gf(e, t, null, n);
};
Pe.createRoot = function(e, t) {
  if (!Gi(e)) throw Error(k(299));
  var n = !1, r = "", l = wc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Wi(e, 1, !1, null, null, n, !1, r, l), e[rt] = t.current, Xn(e.nodeType === 8 ? e.parentNode : e), new Hi(t);
};
Pe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","), Error(k(268, e)));
  return e = Va(t), e = e === null ? null : e.stateNode, e;
};
Pe.flushSync = function(e) {
  return Vt(e);
};
Pe.hydrate = function(e, t, n) {
  if (!Tl(t)) throw Error(k(200));
  return Pl(null, e, t, !0, n);
};
Pe.hydrateRoot = function(e, t, n) {
  if (!Gi(e)) throw Error(k(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = wc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = vc(t, null, e, 1, n ?? null, l, !1, o, i), e[rt] = t.current, Xn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new jl(t);
};
Pe.render = function(e, t, n) {
  if (!Tl(t)) throw Error(k(200));
  return Pl(null, e, t, !1, n);
};
Pe.unmountComponentAtNode = function(e) {
  if (!Tl(e)) throw Error(k(40));
  return e._reactRootContainer ? (Vt(function() {
    Pl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[rt] = null;
    });
  }), !0) : !1;
};
Pe.unstable_batchedUpdates = $i;
Pe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Tl(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Pl(e, t, n, !1, r);
};
Pe.version = "18.3.1-next-f1338f8080-20240426";
function xc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xc);
    } catch (e) {
      console.error(e);
    }
}
xc(), xa.exports = Pe;
var cr = xa.exports, Sc, la = cr;
Sc = la.createRoot, la.hydrateRoot;
window.api = A;
const oa = async (e = 0, t = 30, n = "") => {
  const r = await A.fetchApi(
    `/meld-nexus/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}`
  );
  if (!r.ok)
    throw new Error(`Failed to fetch images: ${r.statusText}`);
  return await r.json();
}, Jf = async (e, t) => {
  const n = `/meld-nexus/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await A.fetchApi(n);
  return r.ok ? await r.json() : [];
}, qf = async () => {
  const e = await A.fetchApi("/meld-nexus/search-suggestions");
  return e.ok ? await e.json() : [];
}, kc = async () => {
  const e = await A.fetchApi("/meld-nexus/settings");
  return e.ok ? await e.json() : {
    dev_mode: !1,
    "gallery.show_parent_image": !0,
    "gallery.hide_parent_images": !0,
    "sidebar.show_filename": !0,
    "sidebar.show_model_name": !0,
    "sidebar.show_positive_prompt": !0,
    "sidebar.show_negative_prompt": !1,
    "sidebar.show_tags": !0,
    "search.quick_suggestions": !0,
    "search.input_suggest": !0,
    "search.realtime_search": !0,
    "viewer.show_filename": !0,
    "fullscreen.show_filename": !0
  };
}, bf = async (e, t) => {
  if (!(await A.fetchApi("/meld-nexus/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  })).ok)
    throw new Error("Failed to save setting");
}, ep = async (e, t) => {
  if (!(await A.fetchApi("/meld-nexus/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  })).ok)
    throw new Error("Failed to link parent");
}, tp = async (e, t = 12) => {
  const n = await A.fetchApi(
    `/meld-nexus/suggest-parents?id=${e}&threshold=${t}`
  );
  return n.ok ? await n.json() : [];
}, np = async (e) => {
  const t = await A.fetchApi(`/meld-nexus/lineage?id=${e}`);
  return t.ok ? await t.json() : [];
}, rp = async (e) => {
  const t = new FormData();
  t.append("image", e), t.append("overwrite", "true");
  const n = await A.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, lp = async (e, t = !0) => {
  const n = await A.fetchApi("/meld-nexus/bulk-delete", {
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
}, _c = async (e) => {
  const t = await A.fetchApi("/meld-nexus/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok)
    throw new Error("Failed to register image");
  return await t.json();
}, op = async (e, t) => {
  const n = await A.fetchApi(
    `/meld-nexus/folders?type=${e}&path=${encodeURIComponent(t)}`
  );
  return n.ok ? await n.json() : [];
}, ip = async (e) => {
  const t = await A.fetchApi("/meld-nexus/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to start scan");
  }
}, sp = async () => {
  if (!(await A.fetchApi("/meld-nexus/scan/cancel", {
    method: "POST"
  })).ok)
    throw new Error("Failed to cancel scan");
}, ap = async () => {
  const e = await A.fetchApi("/meld-nexus/favorites");
  return e.ok ? await e.json() : [];
}, up = async (e, t) => {
  if (!(await A.fetchApi("/meld-nexus/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  })).ok)
    throw new Error("Failed to save favorite");
}, ia = async (e) => {
  if (!(await A.fetchApi("/meld-nexus/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  })).ok)
    throw new Error("Failed to delete favorite");
}, cp = async (e, t) => {
  if (!(await A.fetchApi("/meld-nexus/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  })).ok)
    throw new Error("Failed to update favorite");
}, Ec = async () => {
  const e = await A.fetchApi("/meld-nexus/tags");
  return e.ok ? await e.json() : [];
}, dp = async (e) => {
  const t = await A.fetchApi("/meld-nexus/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  if (!t.ok)
    throw new Error("Failed to create tag");
  return await t.json();
}, fp = async (e) => {
  if (!(await A.fetchApi(`/meld-nexus/tags?id=${e}`, {
    method: "DELETE"
  })).ok)
    throw new Error("Failed to delete tag");
}, pp = async (e, t) => {
  if (!(await A.fetchApi("/meld-nexus/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  })).ok)
    throw new Error("Failed to update image tags");
}, mp = async (e) => {
  const t = await A.fetchApi(`/meld-nexus/image/${e}/workflow`);
  if (!t.ok)
    throw new Error("Failed to fetch workflow");
  return await t.json();
}, hp = async (e) => {
  const t = await A.fetchApi(`/meld-nexus/image/${e}/snapshot_data`);
  if (!t.ok)
    throw new Error("Failed to fetch snapshot data");
  return await t.json();
};
var Cc = { exports: {} }, Il = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gp = C, yp = Symbol.for("react.element"), vp = Symbol.for("react.fragment"), wp = Object.prototype.hasOwnProperty, xp = gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Sp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Nc(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) wp.call(t, r) && !Sp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: yp, type: e, key: o, ref: i, props: l, _owner: xp.current };
}
Il.Fragment = vp;
Il.jsx = Nc;
Il.jsxs = Nc;
Cc.exports = Il;
var a = Cc.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var kp = {
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
const _p = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), U = (e, t) => {
  const n = C.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: i,
      className: u = "",
      children: s,
      ...f
    }, h) => C.createElement(
      "svg",
      {
        ref: h,
        ...kp,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: i ? Number(o) * 24 / Number(l) : o,
        className: ["lucide", `lucide-${_p(e)}`, u].join(" "),
        ...f
      },
      [
        ...t.map(([y, m]) => C.createElement(y, m)),
        ...Array.isArray(s) ? s : [s]
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
const Ep = U("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sa = U("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cp = U("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Np = U("Box", [
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
const jp = U("Calendar", [
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
const Tp = U("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pp = U("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qo = U("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jc = U("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ip = U("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lp = U("Download", [
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
const aa = U("Folder", [
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
const Mp = U("Maximize", [
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
const zp = U("Minimize", [
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
const Rp = U("MoreVertical", [
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
const Fp = U("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Op = U("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dp = U("PlusCircle", [
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
const Tc = U("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ki = U("RefreshCw", [
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
const lr = U("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ap = U("Settings", [
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
const $p = U("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ua = U("Star", [
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
const dr = U("Tag", [
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
const Yi = U("Trash2", [
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
const Up = U("Type", [
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
const Vp = U("Upload", [
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
const Ze = U("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
let ml = !1;
const Qp = (e) => {
  ml = e, ml && console.log("[Meld-Flow] Logger initialized in DEV mode.");
}, Wp = (...e) => {
  ml && console.log("[Meld-Flow]", ...e);
}, Bp = (...e) => {
  ml && console.warn("[Meld-Flow]", ...e);
}, Hp = (...e) => {
  console.error("[Meld-Flow]", ...e);
}, ge = {
  log: Wp,
  warn: Bp,
  error: Hp,
  init: Qp
}, Gp = {
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
    "sidebar.show_model_name": !0,
    "sidebar.show_positive_prompt": !0,
    "sidebar.show_negative_prompt": !1,
    "sidebar.show_tags": !0,
    "search.quick_suggestions": !0,
    "search.input_suggest": !0,
    "search.realtime_search": !0,
    "viewer.show_filename": !0,
    "fullscreen.show_filename": !0
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
function Kp(e, t) {
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "SET_IMAGES": {
      const { images: n, total: r, offset: l, limit: o } = t.payload;
      let i = e.viewerImageId;
      return e.viewerMode === "gallery" && i !== null && !n.some((u) => u.id === i) && (i = null), {
        ...e,
        images: n,
        isLoading: !1,
        error: null,
        viewerImageId: i,
        pagination: {
          total: r,
          offset: l,
          limit: o,
          hasMore: l + n.length < r
        }
      };
    }
    case "APPEND_IMAGES": {
      const { images: n, total: r, offset: l, limit: o } = t.payload, i = [...e.images, ...n], u = Array.from(
        new Map(i.map((s) => [s.id, s])).values()
      );
      return {
        ...e,
        images: u,
        isLoading: !1,
        error: null,
        pagination: {
          total: r,
          offset: l,
          limit: o,
          hasMore: l + n.length < r
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
        const u = new Set(e.selectedIds);
        return u.add(t.payload), {
          ...e,
          selectedIds: u,
          lastSelectedId: t.payload
        };
      }
      const n = e.images.findIndex(
        (u) => u.id === e.lastSelectedId
      ), r = e.images.findIndex(
        (u) => u.id === t.payload
      );
      if (n === -1 || r === -1) return e;
      const [l, o] = [
        Math.min(n, r),
        Math.max(n, r)
      ], i = new Set(e.selectedIds);
      for (let u = l; u <= o; u++)
        i.add(e.images[u].id);
      return {
        ...e,
        selectedIds: i,
        lastSelectedId: t.payload
      };
    }
    case "SELECT_ALL":
      return {
        ...e,
        selectedIds: new Set(
          e.images.map((n) => n.id)
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
      const n = t.payload, r = typeof n == "number" ? n : n.id, l = typeof n == "number" ? "gallery" : n.mode, o = e.viewerMode === "lineage" && l === "lineage" && e.lineageImages.some((i) => i.id === r);
      return {
        ...e,
        viewerImageId: r,
        viewerMode: l,
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
      const n = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (o) => o.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && o.has_children)
      );
      if (e.viewerImageId === null || n.length === 0)
        return e;
      const r = n.findIndex(
        (o) => o.id === e.viewerImageId
      );
      if (r === -1 || r === n.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore)
        return e;
      const l = (r + 1) % n.length;
      return {
        ...e,
        viewerImageId: n[l].id
      };
    }
    case "PREVIOUS_IMAGE": {
      const n = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (o) => o.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && o.has_children)
      );
      if (e.viewerImageId === null || n.length === 0)
        return e;
      const r = n.findIndex(
        (o) => o.id === e.viewerImageId
      );
      if (r === -1) return e;
      const l = (r - 1 + n.length) % n.length;
      return {
        ...e,
        viewerImageId: n[l].id
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
    case "SET_SETTINGS":
      return {
        ...e,
        settings: {
          ...e.settings,
          ...t.payload
        }
      };
    case "SET_SEARCH_QUERY":
      return {
        ...e,
        searchQuery: t.payload
      };
    default:
      return e;
  }
}
const Pc = C.createContext(void 0), Yp = ({
  children: e
}) => {
  const [t, n] = C.useReducer(Kp, Gp), r = C.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    try {
      const s = await oa(
        0,
        t.pagination.limit,
        t.searchQuery
      );
      n({ type: "SET_IMAGES", payload: s });
    } catch (s) {
      n({
        type: "SET_ERROR",
        payload: s instanceof Error ? s.message : String(s)
      });
    }
  }, [t.pagination.limit, t.searchQuery]), l = C.useCallback(async () => {
    if (!(t.isLoading || !t.pagination.hasMore)) {
      n({ type: "SET_LOADING", payload: !0 });
      try {
        const s = t.images.length, f = await oa(
          s,
          t.pagination.limit,
          t.searchQuery
        );
        n({ type: "APPEND_IMAGES", payload: f });
      } catch (s) {
        n({
          type: "SET_ERROR",
          payload: s instanceof Error ? s.message : String(s)
        });
      }
    }
  }, [
    t.isLoading,
    t.pagination.hasMore,
    t.pagination.limit,
    t.images.length,
    t.searchQuery
  ]), o = C.useCallback(async () => {
    try {
      const s = await ap();
      n({ type: "SET_FAVORITES", payload: s });
    } catch (s) {
      ge.error("Failed to load favorites", s);
    }
  }, []), i = C.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const s = Array.from(t.selectedIds), f = `Are you sure you want to delete the selected ${s.length} images?

[WARNING]
Physical files will also be permanently deleted. This operation cannot be undone.`;
    if (window.confirm(f)) {
      n({ type: "SET_LOADING", payload: !0 });
      try {
        await lp(s, !0), n({ type: "CLEAR_SELECTION" }), await r();
      } catch (h) {
        n({
          type: "SET_ERROR",
          payload: h instanceof Error ? h.message : String(h)
        });
      }
    }
  }, [t.selectedIds, r]), u = C.useCallback(
    async (s, f) => {
      try {
        await bf(s, f), n({ type: "SET_SETTINGS", payload: { [s]: f } });
      } catch (h) {
        n({
          type: "SET_ERROR",
          payload: h instanceof Error ? h.message : String(h)
        });
      }
    },
    []
  );
  return C.useEffect(() => {
    (async () => {
      try {
        const f = await kc();
        n({ type: "SET_SETTINGS", payload: f });
      } catch (f) {
        ge.error("Failed to load settings", f);
      }
    })();
  }, []), C.useEffect(() => {
    o();
  }, [o]), C.useEffect(() => {
    const s = () => {
      r();
    }, f = (y) => {
      const m = y.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: m }
      });
    }, h = (y) => {
      const m = y.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !1,
          isFinished: !0,
          shouldCancel: !1,
          newCount: m.new_count || 0,
          totalCount: m.total_count || 0,
          progress: {
            current: m.total_count || t.scanStatus.progress.total,
            total: m.total_count || t.scanStatus.progress.total,
            phase: "completed"
          }
        }
      }), r();
    };
    return window.addEventListener("meld-nexus-refresh", s), window.addEventListener("meld-nexus-scan-progress", f), window.addEventListener("meld-nexus-scan-finished", h), () => {
      window.removeEventListener("meld-nexus-refresh", s), window.removeEventListener(
        "meld-nexus-scan-progress",
        f
      ), window.removeEventListener(
        "meld-nexus-scan-finished",
        h
      );
    };
  }, [r, t.scanStatus.progress.total]), C.useEffect(() => {
    r();
  }, [r]), /* @__PURE__ */ a.jsx(
    Pc.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: r,
        loadMoreImages: l,
        refreshFavorites: o,
        deleteSelected: i,
        updateSetting: u
      },
      children: e
    }
  );
}, st = () => {
  const e = C.useContext(Pc);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, Xp = () => {
  const { state: e, dispatch: t, deleteSelected: n } = st(), r = e.selectedIds.size;
  return r === 0 ? null : /* @__PURE__ */ a.jsxs("div", { className: "meld-bulk-bar", children: [
    /* @__PURE__ */ a.jsxs("span", { className: "meld-bulk-bar__info", children: [
      r,
      " items selected"
    ] }),
    /* @__PURE__ */ a.jsxs(
      "button",
      {
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--delete",
        onClick: n,
        children: [
          /* @__PURE__ */ a.jsx(
            Yi,
            {
              size: 16,
              style: { marginRight: "8px", verticalAlign: "middle" }
            }
          ),
          "Delete"
        ]
      }
    ),
    /* @__PURE__ */ a.jsxs(
      "button",
      {
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--cancel",
        onClick: () => t({ type: "CLEAR_SELECTION" }),
        children: [
          /* @__PURE__ */ a.jsx(Ze, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
          "Cancel"
        ]
      }
    )
  ] });
}, Zp = ({ image: e }) => {
  const { state: t, dispatch: n } = st(), r = t.selectedIds.has(e.id), [l, o] = C.useState(null), [i, u] = C.useState(!1), [s, f] = C.useState(null), [h, y] = C.useState(!1), m = C.useRef(null), w = async (g, R, M = !1) => {
    try {
      await navigator.clipboard.writeText(g), M ? (y(!0), setTimeout(() => y(!1), 2e3)) : (f(R), setTimeout(() => f(null), 2e3));
    } catch (Q) {
      console.error("Failed to copy text: ", Q);
    }
  };
  C.useEffect(() => {
    const g = (R) => {
      m.current && !m.current.contains(R.target) && u(!1);
    };
    return i && document.addEventListener("mousedown", g), () => {
      document.removeEventListener("mousedown", g);
    };
  }, [i]);
  const S = (g, R = 0) => {
    if (R >= 5) return [];
    const M = g.parent_id;
    if (!M && !g.parent_filename) return [];
    const Q = M ? t.images.find((j) => j.id === M) : null;
    let Z = null;
    if (Q ? Z = `/api/view?filename=${encodeURIComponent(Q.filename)}&type=${Q.type || "output"}${Q.subfolder ? `&subfolder=${encodeURIComponent(Q.subfolder)}` : ""}` : M && g.parent_filename && (Z = `/api/view?filename=${encodeURIComponent(g.parent_filename)}&type=${g.parent_type || "output"}${g.parent_subfolder ? `&subfolder=${encodeURIComponent(g.parent_subfolder)}` : ""}`), !Z && !Q) return [];
    const E = {
      id: M || null,
      imgSrc: Z
    };
    return Q ? [E, ...S(Q, R + 1)] : [E];
  }, _ = S(e), N = e.subfolder ? `${e.subfolder}/${e.filename}` : e.filename, c = `/api/view?filename=${encodeURIComponent(e.filename)}&type=${e.type || "output"}${e.subfolder ? `&subfolder=${encodeURIComponent(e.subfolder)}` : ""}`, d = (g) => {
    g.shiftKey ? (g.preventDefault(), g.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : g.ctrlKey || g.metaKey || t.selectedIds.size > 0 ? (g.preventDefault(), g.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
  }, p = (g) => {
    g.shiftKey ? (g.preventDefault(), g.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : n({ type: "TOGGLE_SELECT", payload: e.id });
  }, v = (g) => {
    (g.shiftKey || g.ctrlKey || g.metaKey || t.selectedIds.size > 0) && g.preventDefault();
  }, x = (g) => {
    (g.key === "Enter" || g.key === " ") && (g.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
  }, P = async () => {
    try {
      const g = await mp(e.id);
      if (!g.workflow) {
        alert("No workflow information is saved for this image.");
        return;
      }
      await window.app.loadGraphData(
        g.workflow
      ), console.log("Workflow restored successfully from Meld Nexus");
    } catch (g) {
      console.error("Error restoring workflow:", g), alert("Failed to restore workflow.");
    }
  }, L = async () => {
    try {
      const g = await hp(e.id), R = "MeldUnifiedLoader", M = window.app, Z = window.LiteGraph.createNode(R);
      if (!Z) {
        console.error(`Node type ${R} not found.`), alert(
          `Node type ${R} not found. Please make sure the Meld Unified Loader node is installed.`
        );
        return;
      }
      const E = {
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
      if (Z.widgets) {
        for (const [ne, T] of Object.entries(E)) {
          const z = g[ne];
          if (z != null) {
            const F = Z.widgets.find(
              (G) => G.name === T
            );
            F && (F.value = z);
          }
        }
        const ee = Z.widgets.find(
          (ne) => ne.name === "control_after_generate"
        );
        ee && (ee.value = "fixed");
      }
      const j = M.canvas.ds.offset, q = M.canvas.ds.scale;
      Z.pos = [(-j[0] + 400) / q, (-j[1] + 300) / q], M.graph.add(Z), M.canvas.selectNode(Z), M.canvas.centerOnNode(Z);
    } catch (g) {
      console.error("Error adding Unified Loader:", g), alert("Failed to load settings.");
    }
  };
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `meld-image-card ${r ? "meld-image-card--selected" : ""}`,
      onClick: p,
      onMouseDown: v,
      onKeyDown: x,
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ a.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ a.jsx(
          "img",
          {
            src: c,
            className: "meld-image-card__thumbnail",
            alt: e.filename,
            loading: "lazy",
            onMouseDown: v,
            onClick: (g) => {
              g.stopPropagation(), d(g);
            }
          }
        ) }),
        /* @__PURE__ */ a.jsxs("div", { className: "meld-image-card__details", children: [
          t.settings["sidebar.show_filename"] && /* @__PURE__ */ a.jsx("div", { className: "meld-image-card__filename", children: N }),
          t.settings["gallery.show_parent_image"] && _.length > 0 && /* @__PURE__ */ a.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
            /* @__PURE__ */ a.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
            /* @__PURE__ */ a.jsx("div", { className: "meld-lineage-thumbs", children: _.map(
              (g, R) => g.imgSrc && /* @__PURE__ */ a.jsx(
                "img",
                {
                  src: g.imgSrc,
                  className: "meld-lineage-badge__parent-thumb",
                  onClick: (M) => {
                    M.stopPropagation(), n({
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
          t.settings["sidebar.show_model_name"] && /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (g) => {
                g.stopPropagation(), o({
                  title: "Model",
                  text: e.model_name || "-"
                });
              },
              children: [
                /* @__PURE__ */ a.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${s === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: (g) => {
                      g.stopPropagation(), w(e.model_name || "-", "Model");
                    },
                    children: s === "Model" ? "Copied!" : "Model"
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
              onClick: (g) => {
                g.stopPropagation(), o({
                  title: "Positive Prompt",
                  text: e.positive_prompt || e.positive || "-"
                });
              },
              children: [
                /* @__PURE__ */ a.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${s === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: (g) => {
                      g.stopPropagation(), w(
                        e.positive_prompt || e.positive || "-",
                        "Positive"
                      );
                    },
                    children: s === "Positive" ? "Copied!" : "Positive"
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
              onClick: (g) => {
                g.stopPropagation(), o({
                  title: "Negative Prompt",
                  text: e.negative_prompt || e.negative || "-"
                });
              },
              children: [
                /* @__PURE__ */ a.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${s === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: (g) => {
                      g.stopPropagation(), w(
                        e.negative_prompt || e.negative || "-",
                        "Negative"
                      );
                    },
                    children: s === "Negative" ? "Copied!" : "Negative"
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
              onClick: (g) => {
                g.stopPropagation(), n({
                  type: "OPEN_MODAL",
                  payload: {
                    type: "tag_edit",
                    imageId: e.id,
                    tags: e.tags || []
                  }
                });
              },
              children: [
                /* @__PURE__ */ a.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                /* @__PURE__ */ a.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((g, R) => /* @__PURE__ */ a.jsx("span", { className: "meld-image-card__tag", children: g }, `${g}-${R}`)) : /* @__PURE__ */ a.jsx(
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
              onClick: (g) => {
                g.stopPropagation(), u(!i);
              },
              title: "Menu",
              children: /* @__PURE__ */ a.jsx(Rp, { size: 16 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (g) => {
                g.stopPropagation(), L();
              },
              title: "Add Unified Loader",
              children: /* @__PURE__ */ a.jsx(sa, { size: 16 })
            }
          ),
          i && /* @__PURE__ */ a.jsxs("div", { className: "meld-image-card__menu", children: [
            /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (g) => {
                  g.stopPropagation(), L(), u(!1);
                },
                children: [
                  /* @__PURE__ */ a.jsx(sa, { size: 14 }),
                  /* @__PURE__ */ a.jsx("span", { children: "Add Unified Loader" })
                ]
              }
            ),
            /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (g) => {
                  g.stopPropagation(), P(), u(!1);
                },
                children: [
                  /* @__PURE__ */ a.jsx(Ki, { size: 14 }),
                  /* @__PURE__ */ a.jsx("span", { children: "Restore Full Workflow" })
                ]
              }
            ),
            /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (g) => {
                  g.stopPropagation(), n({
                    type: "OPEN_MODAL",
                    payload: { type: "parent_selection", imageId: e.id }
                  }), u(!1);
                },
                children: [
                  /* @__PURE__ */ a.jsx(Dp, { size: 14 }),
                  /* @__PURE__ */ a.jsx("span", { children: "Add source image" })
                ]
              }
            ),
            /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (g) => {
                  g.stopPropagation(), n({
                    type: "OPEN_MODAL",
                    payload: {
                      type: "tag_edit",
                      imageId: e.id,
                      tags: e.tags || []
                    }
                  }), u(!1);
                },
                children: [
                  /* @__PURE__ */ a.jsx(dr, { size: 14 }),
                  /* @__PURE__ */ a.jsx("span", { children: "Edit Tags" })
                ]
              }
            )
          ] })
        ] }),
        l && /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "meld-prompt-popup-overlay",
            onClick: (g) => {
              g.stopPropagation(), o(null);
            },
            children: /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: "meld-prompt-popup-content",
                onClick: (g) => g.stopPropagation(),
                children: [
                  /* @__PURE__ */ a.jsxs("div", { className: "meld-prompt-popup-header", children: [
                    /* @__PURE__ */ a.jsx("span", { children: l.title }),
                    /* @__PURE__ */ a.jsxs(
                      "div",
                      {
                        style: { display: "flex", alignItems: "center", gap: "10px" },
                        children: [
                          h ? /* @__PURE__ */ a.jsx(
                            Pp,
                            {
                              size: 18,
                              style: { color: "var(--meld-success-color)" }
                            }
                          ) : /* @__PURE__ */ a.jsx(
                            Ip,
                            {
                              className: "meld-prompt-popup-copy",
                              size: 18,
                              onClick: () => w(l.text, "", !0)
                            }
                          ),
                          /* @__PURE__ */ a.jsx(
                            Ze,
                            {
                              className: "meld-prompt-popup-close",
                              size: 18,
                              onClick: () => o(null)
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
        )
      ]
    }
  );
}, Jp = () => {
  const { state: e, dispatch: t, loadMoreImages: n } = st(), { viewerImageId: r, images: l, viewerMode: o, lineageImages: i } = e, [u, s] = C.useState(!1), [f, h] = C.useState(!1), y = C.useRef(null), m = o === "lineage" ? i : l.filter(
    (N) => N.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && N.has_children)
  ), w = (o === "lineage" && i.length > 0 ? i : l).find((N) => N.id === r), S = C.useCallback(
    (N) => {
      N && "stopPropagation" in N && N.stopPropagation();
      const c = y.current;
      c && (document.fullscreenElement ? document.exitFullscreen() : c.requestFullscreen().catch((d) => {
        console.error(
          `Error attempting to enable full-screen mode: ${d.message}`
        );
      }));
    },
    []
  );
  if (C.useEffect(() => {
    if (o !== "gallery" || r === null || e.isLoading || !e.pagination.hasMore)
      return;
    const N = m.findIndex(
      (c) => c.id === r
    );
    N !== -1 && N >= m.length - 15 && n();
  }, [
    r,
    m.length,
    o,
    e.isLoading,
    e.pagination.hasMore,
    n,
    m
  ]), C.useEffect(() => {
    const N = (d) => {
      r !== null && (d.key === "Escape" ? document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" }) : d.key === "ArrowRight" ? t({ type: "NEXT_IMAGE" }) : d.key === "ArrowLeft" ? t({ type: "PREVIOUS_IMAGE" }) : (d.key === "f" || d.key === "F") && S(d));
    }, c = () => {
      s(!!document.fullscreenElement);
    };
    return window.addEventListener("keydown", N), document.addEventListener("fullscreenchange", c), () => {
      window.removeEventListener("keydown", N), document.removeEventListener("fullscreenchange", c);
    };
  }, [r, t, S]), C.useEffect(() => {
    o === "lineage" && r !== null && i.length === 0 && (h(!0), np(r).then((N) => {
      t({ type: "SET_LINEAGE", payload: N });
    }).catch((N) => {
      console.error("Failed to fetch lineage:", N);
    }).finally(() => {
      h(!1);
    }));
  }, [o, r, i.length, t]), C.useEffect(() => () => {
    document.fullscreenElement && document.exitFullscreen().catch(() => {
    });
  }, []), C.useEffect(() => {
    if (r !== null) {
      const N = document.querySelector(
        ".meld-viewer-thumbnail--active"
      );
      N && N.scrollIntoView({
        behavior: "auto",
        block: "nearest",
        inline: "center"
      });
    }
  }, [r]), !w) return null;
  const _ = `/api/view?filename=${encodeURIComponent(w.filename)}&type=${w.type || "output"}${w.subfolder ? `&subfolder=${encodeURIComponent(w.subfolder)}` : ""}`;
  return cr.createPortal(
    /* @__PURE__ */ a.jsx(
      "div",
      {
        ref: y,
        className: "meld-viewer-overlay",
        style: { background: "rgba(0, 0, 0, 0.85)" },
        onClick: () => t({ type: "CLOSE_VIEWER" }),
        role: "button",
        tabIndex: 0,
        children: /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: `meld-viewer-content ${u ? "meld-viewer-content--fullscreen" : ""}`,
            onClick: (N) => N.stopPropagation(),
            children: [
              (!u && e.settings["viewer.show_filename"] || u && e.settings["fullscreen.show_filename"]) && /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-info", children: /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-filename", children: w.filename }) }),
              /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-actions", children: [
                /* @__PURE__ */ a.jsx(
                  "button",
                  {
                    className: "meld-viewer-action-btn",
                    onClick: S,
                    type: "button",
                    title: u ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                    children: u ? /* @__PURE__ */ a.jsx(zp, { size: 20 }) : /* @__PURE__ */ a.jsx(Mp, { size: 20 })
                  }
                ),
                /* @__PURE__ */ a.jsx(
                  "button",
                  {
                    className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                    onClick: () => t({ type: "CLOSE_VIEWER" }),
                    type: "button",
                    title: "Close (Esc)",
                    children: /* @__PURE__ */ a.jsx(Ze, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  className: "meld-viewer-nav meld-viewer-nav--prev",
                  onClick: () => t({ type: "PREVIOUS_IMAGE" }),
                  type: "button",
                  children: /* @__PURE__ */ a.jsx(qo, { size: 32 })
                }
              ),
              /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-image-container", children: /* @__PURE__ */ a.jsx(
                "img",
                {
                  src: _,
                  alt: w.filename,
                  className: "meld-viewer-image"
                }
              ) }),
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  className: "meld-viewer-nav meld-viewer-nav--next",
                  onClick: () => t({ type: "NEXT_IMAGE" }),
                  type: "button",
                  children: /* @__PURE__ */ a.jsx(jc, { size: 32 })
                }
              ),
              !u && /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-thumbnails-container", children: /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-thumbnails", children: [
                f ? /* @__PURE__ */ a.jsx(
                  "div",
                  {
                    style: {
                      padding: "10px",
                      color: "var(--meld-text-secondary)"
                    },
                    children: "Loading lineage..."
                  }
                ) : m.map((N, c) => {
                  const d = N.id === r, p = typeof w.parent_id == "number" && w.parent_id === N.id, v = typeof N.parent_id == "number" && N.parent_id === w.id, x = `/api/view?filename=${encodeURIComponent(N.filename)}&type=${N.type || "output"}${N.subfolder ? `&subfolder=${encodeURIComponent(N.subfolder)}` : ""}`;
                  return /* @__PURE__ */ a.jsxs(
                    "div",
                    {
                      className: "meld-viewer-thumbnail-wrapper",
                      children: [
                        o === "lineage" && c > 0 && /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-lineage-connector", children: /* @__PURE__ */ a.jsx(qo, { size: 16 }) }),
                        /* @__PURE__ */ a.jsxs(
                          "div",
                          {
                            className: `meld-viewer-thumbnail ${d ? "meld-viewer-thumbnail--active" : ""} ${p ? "meld-viewer-thumbnail--parent" : ""} ${v ? "meld-viewer-thumbnail--child" : ""}`,
                            onClick: () => t({
                              type: "OPEN_VIEWER",
                              payload: { id: N.id, mode: o }
                            }),
                            children: [
                              /* @__PURE__ */ a.jsx("img", { src: x, alt: N.filename }),
                              (p || v) && /* @__PURE__ */ a.jsx(
                                "div",
                                {
                                  className: `meld-viewer-thumbnail-relation-icon ${p ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`,
                                  children: p ? /* @__PURE__ */ a.jsx(Cp, { size: 12 }) : /* @__PURE__ */ a.jsx(Ep, { size: 12 })
                                }
                              ),
                              /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-thumbnail-label-v2", children: d ? "Current" : p ? "Source" : v ? "Derivative" : "" })
                            ]
                          }
                        )
                      ]
                    },
                    N.id
                  );
                }),
                o === "gallery" && e.isLoading && /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ a.jsx(Ki, { className: "animate-spin", size: 20 }) })
              ] }) })
            ]
          }
        )
      }
    ),
    document.body
  );
}, qp = () => {
  const { state: e, dispatch: t } = st(), { scanStatus: n } = e, [r, l] = C.useState({
    type: "output",
    subfolder: "",
    custom_path: "",
    recursive: !0,
    auto_link_parent: !0
  }), [o, i] = C.useState([]), [u, s] = C.useState(!1), f = C.useCallback(async () => {
    if (r.type !== "custom") {
      s(!0);
      try {
        const c = await op(r.type, r.subfolder);
        i(c);
      } catch (c) {
        console.error("Failed to load folders:", c);
      } finally {
        s(!1);
      }
    }
  }, [r.type, r.subfolder]);
  C.useEffect(() => {
    f();
  }, [f]);
  const h = async () => {
    try {
      await ip(r), t({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !0,
          isFinished: !1,
          shouldCancel: !1,
          newCount: 0,
          progress: { current: 0, total: 0, phase: "registering" }
        }
      });
    } catch (c) {
      console.error("Failed to start scan:", c), alert(`Failed to start scan: ${c}`);
    }
  }, y = async () => {
    try {
      await sp(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (c) {
      console.error("Failed to cancel scan:", c);
    }
  }, m = (c) => {
    const d = r.subfolder ? `${r.subfolder}/${c}` : c;
    l({ ...r, subfolder: d });
  }, w = () => {
    const c = r.subfolder.split("/");
    c.pop(), l({ ...r, subfolder: c.join("/") });
  }, S = () => {
    n.isFinished && t({ type: "SET_SCAN_STATUS", payload: { isFinished: !1 } }), t({ type: "CLOSE_MODAL" });
  }, _ = n.progress.phase === "linking", N = _ ? 100 : n.progress.total > 0 ? Math.round(
    n.progress.current / n.progress.total * 100
  ) : 0;
  return cr.createPortal(
    /* @__PURE__ */ a.jsx("div", { className: "meld-modal-overlay", onClick: S, children: /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "meld-modal-content meld-modal-content--large",
        onClick: (c) => c.stopPropagation(),
        children: [
          /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ a.jsx("h2", { children: "Import Images" }),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: S,
                children: /* @__PURE__ */ a.jsx(Ze, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ a.jsx("div", { className: "meld-modal-body", children: n.isRunning ? /* @__PURE__ */ a.jsxs("div", { className: "meld-scan-progress", children: [
            /* @__PURE__ */ a.jsx("div", { className: "meld-scan-status-text", children: n.shouldCancel ? /* @__PURE__ */ a.jsx("span", { className: "meld-status-cancelling", children: "Cancelling..." }) : _ ? /* @__PURE__ */ a.jsx("span", { children: "Linking parent images..." }) : /* @__PURE__ */ a.jsx("span", { children: "Scanning images..." }) }),
            /* @__PURE__ */ a.jsx("div", { className: "meld-progress-container", children: /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "meld-progress-bar",
                style: { width: `${N}%` }
              }
            ) }),
            /* @__PURE__ */ a.jsx("div", { className: "meld-progress-stats", children: _ ? /* @__PURE__ */ a.jsxs("span", { children: [
              "Processing relations: ",
              n.progress.current,
              " /",
              " ",
              n.progress.total
            ] }) : /* @__PURE__ */ a.jsxs("span", { children: [
              n.progress.current,
              " / ",
              n.progress.total
            ] }) }),
            /* @__PURE__ */ a.jsxs("div", { className: "meld-scan-actions", children: [
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-secondary",
                  onClick: S,
                  children: "Run in Background"
                }
              ),
              /* @__PURE__ */ a.jsxs(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-danger",
                  disabled: n.shouldCancel,
                  onClick: y,
                  children: [
                    /* @__PURE__ */ a.jsx($p, { size: 16 }),
                    "Stop Scan"
                  ]
                }
              )
            ] })
          ] }) : n.isFinished ? /* @__PURE__ */ a.jsxs("div", { className: "meld-scan-finished", children: [
            /* @__PURE__ */ a.jsx("div", { className: "meld-finished-icon", children: /* @__PURE__ */ a.jsx(Tp, { size: 64, color: "var(--meld-success)" }) }),
            /* @__PURE__ */ a.jsx("h3", { children: "Import Completed" }),
            /* @__PURE__ */ a.jsxs("p", { children: [
              "Successfully scanned ",
              /* @__PURE__ */ a.jsx("strong", { children: n.totalCount }),
              " ",
              "images.",
              /* @__PURE__ */ a.jsx("br", {}),
              "(",
              /* @__PURE__ */ a.jsx("strong", { children: n.newCount }),
              " new images were added to database)"
            ] }),
            /* @__PURE__ */ a.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-primary",
                onClick: S,
                style: { minWidth: "120px" },
                children: "Close"
              }
            ) })
          ] }) : /* @__PURE__ */ a.jsxs("div", { className: "meld-import-container", children: [
            /* @__PURE__ */ a.jsxs("div", { className: "meld-import-sidebar", children: [
              /* @__PURE__ */ a.jsxs("div", { className: "meld-form-group", children: [
                /* @__PURE__ */ a.jsx("label", { htmlFor: "base-location", children: "Base Location" }),
                /* @__PURE__ */ a.jsxs(
                  "select",
                  {
                    id: "base-location",
                    value: r.type,
                    onChange: (c) => l({
                      ...r,
                      type: c.target.value,
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
              r.type === "custom" ? /* @__PURE__ */ a.jsxs("div", { className: "meld-form-group", children: [
                /* @__PURE__ */ a.jsx("label", { htmlFor: "custom-path", children: "Absolute Path" }),
                /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    id: "custom-path",
                    type: "text",
                    placeholder: "C:\\path\\to\\images or /path/to/images",
                    value: r.custom_path,
                    onChange: (c) => l({ ...r, custom_path: c.target.value })
                  }
                )
              ] }) : /* @__PURE__ */ a.jsxs("div", { className: "meld-form-group", children: [
                /* @__PURE__ */ a.jsx("span", { className: "meld-form-label", children: "Current Path" }),
                /* @__PURE__ */ a.jsxs("div", { className: "meld-path-display", children: [
                  /* @__PURE__ */ a.jsxs("span", { children: [
                    r.type,
                    "/"
                  ] }),
                  r.subfolder
                ] })
              ] }),
              /* @__PURE__ */ a.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ a.jsxs("label", { children: [
                /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.recursive,
                    onChange: (c) => l({ ...r, recursive: c.target.checked })
                  }
                ),
                "Recursive Scan"
              ] }) }),
              /* @__PURE__ */ a.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ a.jsxs("label", { children: [
                /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.auto_link_parent,
                    onChange: (c) => l({
                      ...r,
                      auto_link_parent: c.target.checked
                    })
                  }
                ),
                "Auto Link Parent"
              ] }) }),
              /* @__PURE__ */ a.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ a.jsxs(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-primary",
                  onClick: h,
                  style: { width: "100%" },
                  children: [
                    /* @__PURE__ */ a.jsx(Op, { size: 16 }),
                    "Start Import"
                  ]
                }
              ) })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { className: "meld-import-browser", children: [
              r.type !== "custom" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
                /* @__PURE__ */ a.jsxs("div", { className: "meld-browser-header", children: [
                  /* @__PURE__ */ a.jsxs(
                    "button",
                    {
                      type: "button",
                      className: "meld-browser-back",
                      disabled: !r.subfolder,
                      onClick: w,
                      children: [
                        /* @__PURE__ */ a.jsx(qo, { size: 16 }),
                        "Back"
                      ]
                    }
                  ),
                  /* @__PURE__ */ a.jsx("span", { className: "meld-browser-title", children: "Browse Folders" })
                ] }),
                /* @__PURE__ */ a.jsx("div", { className: "meld-folder-list", children: u ? /* @__PURE__ */ a.jsx("div", { className: "meld-browser-loading", children: "Loading..." }) : o.length === 0 ? /* @__PURE__ */ a.jsx("div", { className: "meld-browser-empty", children: "No subfolders found." }) : o.map((c) => /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    className: "meld-folder-item",
                    onClick: () => m(c),
                    children: [
                      /* @__PURE__ */ a.jsx(aa, { size: 16 }),
                      /* @__PURE__ */ a.jsx("span", { children: c }),
                      /* @__PURE__ */ a.jsx(jc, { size: 14 })
                    ]
                  },
                  c
                )) })
              ] }),
              r.type === "custom" && /* @__PURE__ */ a.jsxs("div", { className: "meld-browser-info", children: [
                /* @__PURE__ */ a.jsx(aa, { size: 48 }),
                /* @__PURE__ */ a.jsx("p", { children: "Please enter an absolute path in the sidebar." }),
                /* @__PURE__ */ a.jsx(
                  "span",
                  {
                    style: {
                      fontSize: "11px",
                      color: "var(--meld-text-secondary)"
                    },
                    children: "Example: C:\\Users\\Me\\Pictures or /home/me/images"
                  }
                )
              ] })
            ] })
          ] }) })
        ]
      }
    ) }),
    document.body
  );
}, bp = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = st(), [l, o] = C.useState([]), [i, u] = C.useState(!0), [s, f] = C.useState(!1), h = t.images.find((c) => c.id === e), y = C.useCallback(async () => {
    u(!0);
    try {
      const c = await tp(e);
      o(c);
    } catch (c) {
      console.error("Failed to load suggestions:", c);
    } finally {
      u(!1);
    }
  }, [e]);
  C.useEffect(() => {
    y();
  }, [y]);
  const m = async (c) => {
    try {
      await ep(e, c), await r(), n({ type: "CLOSE_MODAL" });
    } catch (d) {
      console.error("Failed to link parent:", d);
    }
  }, w = async (c) => {
    u(!0);
    try {
      const d = await rp(c), { id: p } = await _c({
        filename: d.name,
        subfolder: d.subfolder || "",
        type: d.type || "input"
      });
      await m(p);
    } catch (d) {
      console.error("Failed to upload/register image:", d);
    } finally {
      u(!1);
    }
  }, S = (c) => {
    c.preventDefault(), c.stopPropagation(), f(!1);
    const d = c.dataTransfer.files[0];
    d != null && d.type.startsWith("image/") && w(d);
  };
  if (!h) return null;
  const _ = l.filter((c) => c.is_source_match), N = l.filter((c) => !c.is_source_match);
  return cr.createPortal(
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: () => n({ type: "CLOSE_MODAL" }),
        children: /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-content", onClick: (c) => c.stopPropagation(), children: [
          /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ a.jsxs("h2", { children: [
              "Select Source for #",
              h.id
            ] }),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: () => n({ type: "CLOSE_MODAL" }),
                children: /* @__PURE__ */ a.jsx(Ze, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-body", children: [
            /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: `meld-drop-zone ${s ? "meld-drop-zone--active" : ""}`,
                onDragEnter: (c) => {
                  c.preventDefault(), c.stopPropagation(), f(!0);
                },
                onDragOver: (c) => {
                  c.preventDefault(), c.stopPropagation(), c.dataTransfer.dropEffect = "copy", f(!0);
                },
                onDragLeave: (c) => {
                  c.preventDefault(), c.stopPropagation(), f(!1);
                },
                onDrop: S,
                children: [
                  /* @__PURE__ */ a.jsx(Vp, { size: 32 }),
                  /* @__PURE__ */ a.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            i ? /* @__PURE__ */ a.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ a.jsxs("div", { className: "meld-suggestions-container", children: [
              _.length > 0 && /* @__PURE__ */ a.jsxs("section", { children: [
                /* @__PURE__ */ a.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ a.jsx("div", { className: "meld-suggestion-grid", children: _.map((c) => /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    className: "meld-suggestion-card",
                    onClick: () => m(c.id),
                    children: [
                      /* @__PURE__ */ a.jsx(
                        "img",
                        {
                          src: `/api/view?filename=${encodeURIComponent(c.filename)}&type=${c.type || "output"}${c.subfolder ? `&subfolder=${encodeURIComponent(c.subfolder)}` : ""}`,
                          alt: c.filename
                        }
                      ),
                      /* @__PURE__ */ a.jsx("div", { className: "meld-suggestion-info", children: /* @__PURE__ */ a.jsx("span", { className: "meld-suggestion-filename", children: c.filename }) })
                    ]
                  },
                  c.id
                )) })
              ] }),
              /* @__PURE__ */ a.jsxs("section", { children: [
                /* @__PURE__ */ a.jsx("h3", { children: "Visual Matches (pHash)" }),
                N.length > 0 ? /* @__PURE__ */ a.jsx("div", { className: "meld-suggestion-grid", children: N.map((c) => /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    className: "meld-suggestion-card",
                    onClick: () => m(c.id),
                    children: [
                      /* @__PURE__ */ a.jsx(
                        "img",
                        {
                          src: `/api/view?filename=${encodeURIComponent(c.filename)}&type=${c.type || "output"}${c.subfolder ? `&subfolder=${encodeURIComponent(c.subfolder)}` : ""}`,
                          alt: c.filename
                        }
                      ),
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
    document.body
  );
}, em = () => {
  const { state: e, dispatch: t, refreshFavorites: n } = st(), [r, l] = C.useState(e.searchQuery), [o, i] = C.useState([]), [u, s] = C.useState(!1), [f, h] = C.useState([]), [y, m] = C.useState(-1), [w, S] = C.useState(!1), [_, N] = C.useState(null), c = C.useRef(null);
  C.useEffect(() => {
    if (_) {
      const E = setTimeout(() => N(null), 3e3);
      return () => clearTimeout(E);
    }
  }, [_]);
  const d = C.useRef(null), p = C.useRef(e.searchQuery);
  C.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      h([]);
      return;
    }
    !r && !e.searchQuery ? qf().then((E) => {
      h(E);
    }) : h([]);
  }, [
    r,
    e.searchQuery,
    e.settings["search.quick_suggestions"]
  ]), C.useEffect(() => {
    l(e.searchQuery), p.current = e.searchQuery;
  }, [e.searchQuery]), C.useEffect(() => {
    var E;
    (E = c.current) == null || E.focus();
  }, []);
  const v = C.useCallback(
    (E, j = !0) => {
      p.current !== E && (t({ type: "SET_SEARCH_QUERY", payload: E }), j && s(!1), p.current = E);
    },
    [t]
  );
  C.useEffect(() => {
    const E = setTimeout(async () => {
      if (r === p.current)
        return;
      if (e.settings["search.realtime_search"] && v(r, !1), !e.settings["search.input_suggest"]) {
        i([]), s(!1);
        return;
      }
      const j = r.split(/\s+/), q = j[j.length - 1];
      if (q) {
        const ee = q.match(
          /^(pos|neg|model|date|after|before):(.*)$/i
        );
        if (ee) {
          const ne = ee[1].toLowerCase(), T = ee[2], z = await Jf(T, ne);
          i(z), s(z.length > 0), m(-1);
        } else
          i([]), s(!1);
      } else
        i([]), s(!1);
    }, 300);
    return () => clearTimeout(E);
  }, [
    r,
    e.settings["search.realtime_search"],
    e.settings["search.input_suggest"],
    v
  ]);
  const x = (E) => {
    E.key === "Enter" ? v(r) : E.key === "Tab" ? u && y >= 0 && (P(o[y]), E.preventDefault()) : E.key === "ArrowDown" ? u && (m((j) => Math.min(j + 1, o.length - 1)), E.preventDefault()) : E.key === "ArrowUp" ? u && (m((j) => Math.max(j - 1, -1)), E.preventDefault()) : E.key === "Escape" && s(!1);
  }, P = (E) => {
    var T;
    const j = r.split(/\s+/);
    j.pop();
    const ee = ["date", "after", "before"].includes(E.type) ? E.value : `"${E.value}"`, ne = `${[...j, `${E.type}:${ee}`].join(" ").trim()} `;
    l(ne), v(ne), i([]), s(!1), (T = c.current) == null || T.focus();
  }, L = () => {
    l(""), v("");
  }, g = async (E, j, q) => {
    E.stopPropagation();
    const ee = `Are you sure you want to delete the favorite "${q}"?`;
    if (window.confirm(ee))
      try {
        await ia(j), await n();
      } catch (ne) {
        ge.error("Failed to delete favorite", ne);
      }
  }, R = async (E, j, q) => {
    E.stopPropagation();
    const ee = window.prompt(
      "Enter a new name for this favorite:",
      q
    );
    if (!(ee === null || ee === q))
      try {
        await cp(j, ee || q), await n();
      } catch (ne) {
        ge.error("Failed to rename favorite", ne);
      }
  }, M = (E, j) => {
    const ee = ["date", "after", "before"].includes(E) ? j : `"${j}"`, ne = `${E}:${ee}`;
    l(ne), v(ne);
  }, Q = async () => {
    if (!e.searchQuery || w) return;
    if (e.favorites.some(
      (j) => j.query === e.searchQuery
    )) {
      const j = e.favorites.find((q) => q.query === e.searchQuery);
      if (j) {
        S(!0);
        try {
          await ia(j.id), await n(), N("Favorite removed.");
        } catch (q) {
          console.error("Failed to delete favorite:", q);
        } finally {
          S(!1);
        }
      }
      return;
    }
    S(!0);
    try {
      await up(e.searchQuery, e.searchQuery), await n(), N(
        "Favorite added! You can select favorites when the search query is empty."
      );
    } catch (j) {
      console.error("Failed to save favorite:", j);
    } finally {
      S(!1);
    }
  }, Z = (E) => {
    switch (E) {
      case "tag":
        return /* @__PURE__ */ a.jsx(dr, { size: 12 });
      case "model":
        return /* @__PURE__ */ a.jsx(Np, { size: 12 });
      case "pos":
      case "neg":
        return /* @__PURE__ */ a.jsx(Up, { size: 12 });
      case "date":
      case "after":
      case "before":
        return /* @__PURE__ */ a.jsx(jp, { size: 12 });
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
              _ && /* @__PURE__ */ a.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    top: "-45px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "var(--comfy-menu-bg, #333)",
                    color: "var(--meld-text-color)",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    fontSize: "12px",
                    zIndex: 1e3,
                    whiteSpace: "nowrap",
                    boxShadow: "0 4px 12px var(--comfy-menu-shadow, rgba(0,0,0,0.5))",
                    pointerEvents: "none",
                    fontWeight: "bold",
                    border: "1px solid var(--comfy-menu-border, #444)",
                    animation: "meld-fade-in 0.3s ease-out"
                  },
                  children: _
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
                      lr,
                      {
                        size: 18,
                        color: "var(--meld-text-secondary)",
                        style: { marginRight: "10px", flexShrink: 0 }
                      }
                    ),
                    /* @__PURE__ */ a.jsx(
                      "input",
                      {
                        ref: c,
                        type: "text",
                        value: r,
                        onChange: (E) => l(E.target.value),
                        onKeyDown: x,
                        onBlur: () => setTimeout(() => s(!1), 200),
                        onFocus: () => {
                          if (r === p.current) return;
                          const E = r.split(/\s+/), j = E[E.length - 1];
                          j != null && j.match(/^(pos|neg|model|date|after|before):/i) && s(!0);
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
                        onClick: Q,
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
                          ua,
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
                        onClick: L,
                        style: {
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "2px",
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0
                        },
                        children: /* @__PURE__ */ a.jsx(Ze, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              u && o.length > 0 && /* @__PURE__ */ a.jsx(
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
                  children: o.map((E, j) => /* @__PURE__ */ a.jsx(
                    "div",
                    {
                      onMouseDown: (q) => {
                        q.preventDefault(), P(E);
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
                                children: Z(E.type)
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
                                  color: "var(--meld-text-color)",
                                  fontSize: "14px"
                                },
                                children: E.value
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
                onClick: () => M(E.type, E.value),
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
                      children: Z(E.type)
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
                    /* @__PURE__ */ a.jsx(ua, { size: 12, fill: "var(--meld-text-secondary)" }),
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
                        l(E.query), v(E.query);
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
                                  onClick: (j) => {
                                    j.stopPropagation(), R(j, E.id, E.name);
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
                                  children: /* @__PURE__ */ a.jsx(Fp, { size: 14 })
                                }
                              ),
                              /* @__PURE__ */ a.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: (j) => {
                                    j.stopPropagation(), g(j, E.id, E.name);
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
                                  children: /* @__PURE__ */ a.jsx(Yi, { size: 14 })
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
}, tm = () => {
  const { state: e, dispatch: t, updateSetting: n } = st(), [r, l] = C.useState("General"), o = [
    {
      key: "gallery.hide_parent_images",
      label: "Hide Source Images",
      description: "Hide images that have been used as a basis for other images (sources).",
      type: "boolean",
      category: "General"
    },
    {
      key: "sidebar.show_filename",
      label: "Show Filename",
      description: "Display the filename on the card.",
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
      key: "viewer.show_filename",
      label: "Show Filename",
      description: "Display the filename in the image viewer.",
      type: "boolean",
      category: "View"
    },
    {
      key: "fullscreen.show_filename",
      label: "Show Filename",
      description: "Display the filename in fullscreen mode.",
      type: "boolean",
      category: "Full Screen"
    }
  ], i = (s, f) => {
    n(s, !f);
  }, u = o.filter(
    (s) => s.category === r
  );
  return cr.createPortal(
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: () => t({ type: "CLOSE_MODAL" }),
        children: /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: "meld-modal-content meld-settings-modal",
            onClick: (s) => s.stopPropagation(),
            children: [
              /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ a.jsx("h2", { children: "Settings" }),
                /* @__PURE__ */ a.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: () => t({ type: "CLOSE_MODAL" }),
                    children: /* @__PURE__ */ a.jsx(Ze, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ a.jsxs("div", { className: "meld-tabs", children: [
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
                    className: `meld-tab ${r === "Full Screen" ? "active" : ""}`,
                    onClick: () => l("Full Screen"),
                    children: "Full Screen"
                  }
                )
              ] }),
              /* @__PURE__ */ a.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ a.jsx("div", { className: "meld-settings-list", children: u.map((s) => /* @__PURE__ */ a.jsxs("div", { className: "meld-settings-item", children: [
                /* @__PURE__ */ a.jsxs("div", { className: "meld-settings-item__info", children: [
                  /* @__PURE__ */ a.jsx("div", { className: "meld-settings-item__label", children: s.label }),
                  /* @__PURE__ */ a.jsx("div", { className: "meld-settings-item__description", children: s.description })
                ] }),
                /* @__PURE__ */ a.jsx("div", { className: "meld-settings-item__control", children: s.type === "boolean" && /* @__PURE__ */ a.jsxs("label", { className: "meld-switch", children: [
                  /* @__PURE__ */ a.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: !!e.settings[s.key],
                      onChange: () => i(s.key, !!e.settings[s.key])
                    }
                  ),
                  /* @__PURE__ */ a.jsx("span", { className: "meld-switch__slider" })
                ] }) })
              ] }, s.key)) }) })
            ]
          }
        )
      }
    ),
    document.body
  );
}, nm = ({
  imageId: e,
  initialTags: t,
  onClose: n
}) => {
  const { refreshImages: r } = st(), [l, o] = C.useState([]), [i, u] = C.useState(t), [s, f] = C.useState(""), [h, y] = C.useState(!0), [m, w] = C.useState(!1), S = C.useRef(null), _ = C.useCallback(async () => {
    y(!0);
    try {
      const x = await Ec();
      o(x);
    } catch (x) {
      console.error("Failed to fetch tags:", x);
    } finally {
      y(!1);
    }
  }, []);
  C.useEffect(() => {
    _();
  }, [_]), C.useEffect(() => {
    S.current && S.current.focus();
  }, []);
  const N = C.useMemo(() => l.filter(
    (x) => x.name.toLowerCase().includes(s.toLowerCase()) && !i.includes(x.name)
  ), [l, s, i]), c = (x) => {
    const P = x.trim();
    P && !i.includes(P) && (u([...i, P]), f(""));
  }, d = (x) => {
    u(i.filter((P) => P !== x));
  }, p = async () => {
    w(!0);
    try {
      await pp(e, i), await r(), n();
    } catch (x) {
      console.error("Failed to update tags:", x), alert("Failed to update tags.");
    } finally {
      w(!1);
    }
  }, v = (x) => {
    x.key === "Enter" && s.trim() ? (x.preventDefault(), c(s.trim())) : x.key === "Escape" && n();
  };
  return /* @__PURE__ */ a.jsx("div", { className: "meld-modal-overlay", onClick: n, children: /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-content", onClick: (x) => x.stopPropagation(), children: [
    /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-header", children: [
      /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ a.jsx(dr, { size: 18 }),
        /* @__PURE__ */ a.jsx("h3", { style: { margin: 0 }, children: "Edit Tags" })
      ] }),
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ a.jsx(Ze, { size: 20 }) })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-body", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-edit-section", children: [
        /* @__PURE__ */ a.jsx("div", { className: "meld-tag-edit-label", children: "Selected Tags" }),
        /* @__PURE__ */ a.jsx("div", { className: "meld-tag-edit-selected", children: i.length === 0 ? /* @__PURE__ */ a.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : i.map((x) => /* @__PURE__ */ a.jsxs("span", { className: "meld-tag-edit-badge", children: [
          x,
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-edit-remove",
              onClick: () => d(x),
              children: /* @__PURE__ */ a.jsx(Ze, { size: 12 })
            }
          )
        ] }, x)) })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-edit-section", children: [
        /* @__PURE__ */ a.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
        /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-search-container", children: [
          /* @__PURE__ */ a.jsx(lr, { size: 14, className: "meld-tag-search-icon" }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              ref: S,
              type: "text",
              className: "meld-tag-search-input",
              placeholder: "Search or create new tag...",
              value: s,
              onChange: (x) => f(x.target.value),
              onKeyDown: v
            }
          ),
          s.trim() && !i.includes(s.trim()) && /* @__PURE__ */ a.jsxs(
            "button",
            {
              type: "button",
              className: "meld-tag-add-btn",
              onClick: () => c(s),
              children: [
                /* @__PURE__ */ a.jsx(Tc, { size: 14 }),
                "Create"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "meld-tag-suggestions", children: h ? /* @__PURE__ */ a.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : N.length === 0 ? s ? /* @__PURE__ */ a.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ a.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : N.map((x) => /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            className: "meld-tag-suggestion-item",
            onClick: () => c(x.name),
            children: x.name
          },
          x.id
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
          onClick: p,
          disabled: m,
          children: m ? "Saving..." : "Save Changes"
        }
      )
    ] })
  ] }) });
}, rm = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = C.useState([]), [l, o] = C.useState(!0), [i, u] = C.useState(""), [s, f] = C.useState(""), [h, y] = C.useState(!1), m = C.useCallback(async () => {
    o(!0);
    try {
      const c = await Ec();
      r(c);
    } catch (c) {
      console.error("Failed to fetch tags:", c);
    } finally {
      o(!1);
    }
  }, []);
  C.useEffect(() => {
    m();
  }, [m]);
  const w = async (c) => {
    if (c.preventDefault(), !(!s.trim() || h)) {
      y(!0);
      try {
        await dp(s.trim()), f(""), await m();
      } catch (d) {
        console.error("Failed to add tag:", d);
      } finally {
        y(!1);
      }
    }
  }, S = async (c, d) => {
    if (confirm(`Are you sure you want to delete tag "${d}"?`))
      try {
        await fp(c), await m();
      } catch (p) {
        console.error("Failed to delete tag:", p);
      }
  }, _ = (c) => {
    t(`tag:${c}`);
  }, N = C.useMemo(() => n.filter(
    (c) => c.name.toLowerCase().includes(i.toLowerCase())
  ), [n, i]);
  return /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ a.jsx(dr, { size: 16 }),
        /* @__PURE__ */ a.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ a.jsx(Ze, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ a.jsxs("form", { className: "meld-tag-add-form", onSubmit: w, children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: s,
            onChange: (c) => f(c.target.value),
            disabled: h
          }
        ),
        /* @__PURE__ */ a.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !s.trim() || h,
            children: [
              /* @__PURE__ */ a.jsx(Tc, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ a.jsx(lr, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: i,
            onChange: (c) => u(c.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ a.jsx("div", { className: "meld-tag-list", children: N.length === 0 ? /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : N.map((c) => /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-item", children: [
        /* @__PURE__ */ a.jsx("span", { className: "meld-tag-item__name", children: c.name }),
        /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => _(c.name),
              children: /* @__PURE__ */ a.jsx(lr, { size: 14 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => S(c.id, c.name),
              children: /* @__PURE__ */ a.jsx(Yi, { size: 14 })
            }
          )
        ] })
      ] }, c.id)) })
    ] })
  ] });
}, lm = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r } = st(), [l, o] = C.useState("gallery"), i = e.searchQuery.trim() !== "", u = C.useRef(null), s = e.images.filter(
    (f) => f.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && f.has_children)
  );
  return C.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && s.length === 0 && (ge.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    s.length,
    r
  ]), ge.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: s.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), C.useEffect(() => {
    const f = new IntersectionObserver(
      (y) => {
        y[0].isIntersecting && !e.isLoading && e.pagination.hasMore && (ge.log(
          "GalleryPanel: Load more triggered via IntersectionObserver"
        ), r());
      },
      { threshold: 0, rootMargin: "800px" }
    ), h = u.current;
    return h && f.observe(h), () => {
      h && f.unobserve(h);
    };
  }, [r, e.isLoading, e.pagination.hasMore]), /* @__PURE__ */ a.jsxs("div", { className: "meld-gallery", children: [
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          marginBottom: "15px",
          gap: "10px"
        },
        children: [
          /* @__PURE__ */ a.jsxs(
            "div",
            {
              style: {
                display: "flex",
                justifyContent: "flex-end",
                gap: "15px",
                flexShrink: 0,
                paddingTop: "4px"
              },
              children: [
                /* @__PURE__ */ a.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => o(l === "search" ? "gallery" : "search"),
                    style: {
                      background: "none",
                      border: "none",
                      color: i ? "var(--meld-success-color)" : l === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      fontWeight: i ? "bold" : "normal"
                    },
                    title: "Search",
                    children: /* @__PURE__ */ a.jsx(lr, { size: 14 })
                  }
                ),
                /* @__PURE__ */ a.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => o(l === "tags" ? "gallery" : "tags"),
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
                    children: /* @__PURE__ */ a.jsx(dr, { size: 14 })
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
                    children: /* @__PURE__ */ a.jsx(Lp, { size: 14 })
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
                      Ki,
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
                    children: /* @__PURE__ */ a.jsx(Ap, { size: 14 })
                  }
                )
              ]
            }
          ),
          l === "search" && /* @__PURE__ */ a.jsx("div", { style: { width: "100%" }, children: /* @__PURE__ */ a.jsx(em, {}) })
        ]
      }
    ),
    e.error && /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__error", children: e.error }),
    l === "tags" ? /* @__PURE__ */ a.jsx(
      rm,
      {
        onClose: () => o("gallery"),
        onSearch: (f) => {
          t({ type: "SET_SEARCH_QUERY", payload: f }), o("search");
        }
      }
    ) : e.isLoading && s.length === 0 ? /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : s.length === 0 ? /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__list", children: s.map((f) => /* @__PURE__ */ a.jsx(Zp, { image: f }, f.id)) }),
      /* @__PURE__ */ a.jsxs(
        "div",
        {
          ref: u,
          className: "meld-gallery__load-more",
          style: { height: "20px", margin: "20px 0", textAlign: "center" },
          children: [
            e.isLoading && /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
            !e.pagination.hasMore && s.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx(Xp, {}),
    e.viewerImageId !== null && /* @__PURE__ */ a.jsx(Jp, {}),
    e.activeModal.type === "parent_selection" && /* @__PURE__ */ a.jsx(bp, { imageId: e.activeModal.imageId }),
    e.activeModal.type === "import" && /* @__PURE__ */ a.jsx(qp, {}),
    e.activeModal.type === "settings" && /* @__PURE__ */ a.jsx(tm, {}),
    e.activeModal.type === "tag_edit" && /* @__PURE__ */ a.jsx(
      nm,
      {
        imageId: e.activeModal.imageId,
        initialTags: e.activeModal.tags,
        onClose: () => t({ type: "CLOSE_MODAL" })
      }
    )
  ] });
};
ca.registerExtension({
  name: "Meld.UnifiedLoader",
  async beforeRegisterNodeDef(e, t, n) {
    t.name;
  },
  async nodeCreated(e) {
    if (e.comfyClass !== "MeldUnifiedLoader") return;
    const t = () => {
      var l, o;
      const n = (l = e.widgets) == null ? void 0 : l.find((i) => i.name === "positive"), r = (o = e.widgets) == null ? void 0 : o.find((i) => i.name === "negative");
      n && n.inputEl && (n.inputEl.style.borderLeft = "4px solid var(--comfy-input-text-active, #44bb44)", n.inputEl.style.paddingLeft = "8px"), r && r.inputEl && (r.inputEl.style.borderLeft = "4px solid var(--error-color, #ff4444)", r.inputEl.style.paddingLeft = "8px");
    };
    t(), setTimeout(t, 1), setTimeout(t, 100);
  }
});
const Ll = document.createElement("link");
Ll.rel = "stylesheet";
Ll.type = "text/css";
Ll.href = "/extensions/ComfyUI-Meld-Flow/js/style.css";
document.head.appendChild(Ll);
let Lr = null, Ae = null;
ca.registerExtension({
  name: "ComfyUI.MeldNexus",
  async beforeRegisterNodeDef(e, t, n) {
    if (t.name === "MeldNexusSaveImage") {
      const r = e.prototype.onExecuted;
      e.prototype.onExecuted = function(...l) {
        r == null || r.apply(this, l);
        const o = n.ui.meldNexus;
        o != null && o.isVisible() && o.refresh();
      };
    }
  },
  async setup(e) {
    var t;
    try {
      const n = await kc();
      ge.init(n.dev_mode), ge.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld-Flow] Failed to fetch settings", n), ge.init(!1);
    }
    if ((t = e.extensionManager) != null && t.registerSidebarTab) {
      e.ui.meldNexus = {
        refresh: () => {
          window.dispatchEvent(new CustomEvent("meld-nexus-refresh"));
        },
        isVisible: () => {
          const n = document.getElementById("meld-flow-gallery-container");
          return n && n.offsetParent !== null;
        },
        toggle: () => {
          var n;
          try {
            (n = e.extensionManager) == null || n.setSidebarTabActive("meld-flow-gallery");
          } catch (r) {
            console.error("Error toggling sidebar:", r);
          }
        }
      }, A.addEventListener("meld-nexus-image-saved", () => {
        var n;
        (n = e.ui.meldNexus) == null || n.refresh();
      }), A.addEventListener("meld-nexus-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-nexus-scan-progress", { detail: n.detail })
        );
      }), A.addEventListener("meld-nexus-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-nexus-scan-finished", { detail: n.detail })
        ), (r = e.ui.meldNexus) == null || r.refresh(), console.log("Meld Nexus: Import completed.");
      }), A.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const l of n.output.images)
              if (l.type === "output")
                try {
                  await _c({
                    filename: l.filename,
                    subfolder: l.subfolder,
                    type: l.type
                  });
                } catch (o) {
                  console.error("Failed to auto-register image:", o);
                }
          }
        }
      );
      try {
        e.extensionManager.registerSidebarTab({
          id: "meld-flow-gallery",
          icon: "meld-nexus-icon",
          title: "Nexus",
          tooltip: "Meld Flow: Nexus",
          type: "custom",
          render: (n) => {
            ge.log("MeldNexus: render called", {
              el: n,
              galleryRoot: Lr,
              galleryContainer: Ae
            }), Ae || (ge.log(
              "MeldNexus: galleryContainer not found, creating new one"
            ), Ae = document.createElement("div"), Ae.id = "meld-flow-gallery-container", Ae.style.height = "100%", Ae.style.width = "100%", Ae.style.display = "flex", Ae.style.flexDirection = "column"), n.contains(Ae) || (ge.log("MeldNexus: Appending galleryContainer to el"), n.appendChild(Ae)), Lr ? ge.log(
              "MeldNexus: Gallery root already exists, React should handle re-render if needed"
            ) : (ge.log("MeldNexus: Creating new gallery root"), Lr = Sc(Ae), Lr.render(
              qi.createElement(
                Yp,
                null,
                qi.createElement(lm)
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
