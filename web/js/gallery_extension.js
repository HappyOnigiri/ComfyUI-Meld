import { api as Q } from "../../../scripts/api.js";
import { app as fa } from "../../../scripts/app.js";
function Rc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var pa = { exports: {} }, $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var or = Symbol.for("react.element"), Fc = Symbol.for("react.portal"), Oc = Symbol.for("react.fragment"), Ac = Symbol.for("react.strict_mode"), $c = Symbol.for("react.profiler"), bc = Symbol.for("react.provider"), Uc = Symbol.for("react.context"), Vc = Symbol.for("react.forward_ref"), Qc = Symbol.for("react.suspense"), Wc = Symbol.for("react.memo"), Hc = Symbol.for("react.lazy"), Xs = Symbol.iterator;
function Bc(e) {
  return e === null || typeof e != "object" ? null : (e = Xs && e[Xs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ma = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ha = Object.assign, ga = {};
function vn(e, t, n) {
  this.props = e, this.context = t, this.refs = ga, this.updater = n || ma;
}
vn.prototype.isReactComponent = {};
vn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
vn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ya() {
}
ya.prototype = vn.prototype;
function es(e, t, n) {
  this.props = e, this.context = t, this.refs = ga, this.updater = n || ma;
}
var ts = es.prototype = new ya();
ts.constructor = es;
ha(ts, vn.prototype);
ts.isPureReactComponent = !0;
var Zs = Array.isArray, va = Object.prototype.hasOwnProperty, ns = { current: null }, wa = { key: !0, ref: !0, __self: !0, __source: !0 };
function xa(e, t, n) {
  var r, l = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) va.call(t, r) && !wa.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), c = 0; c < a; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) l[r] === void 0 && (l[r] = a[r]);
  return { $$typeof: or, type: e, key: i, ref: s, props: l, _owner: ns.current };
}
function Gc(e, t) {
  return { $$typeof: or, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function rs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === or;
}
function Kc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Js = /\/+/g;
function Rl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Kc("" + e.key) : t.toString(36);
}
function Mr(e, t, n, r, l) {
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
        case Fc:
          s = !0;
      }
  }
  if (s) return s = e, l = l(s), e = r === "" ? "." + Rl(s, 0) : r, Zs(l) ? (n = "", e != null && (n = e.replace(Js, "$&/") + "/"), Mr(l, t, n, "", function(c) {
    return c;
  })) : l != null && (rs(l) && (l = Gc(l, n + (!l.key || s && s.key === l.key ? "" : ("" + l.key).replace(Js, "$&/") + "/") + e)), t.push(l)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Zs(e)) for (var a = 0; a < e.length; a++) {
    i = e[a];
    var u = r + Rl(i, a);
    s += Mr(i, t, n, u, l);
  }
  else if (u = Bc(e), typeof u == "function") for (e = u.call(e), a = 0; !(i = e.next()).done; ) i = i.value, u = r + Rl(i, a++), s += Mr(i, t, n, u, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function mr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Mr(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function Yc(e) {
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
var ve = { current: null }, zr = { transition: null }, Xc = { ReactCurrentDispatcher: ve, ReactCurrentBatchConfig: zr, ReactCurrentOwner: ns };
function _a() {
  throw Error("act(...) is not supported in production builds of React.");
}
$.Children = { map: mr, forEach: function(e, t, n) {
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
$.Component = vn;
$.Fragment = Oc;
$.Profiler = $c;
$.PureComponent = es;
$.StrictMode = Ac;
$.Suspense = Qc;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xc;
$.act = _a;
$.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ha({}, e.props), l = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = ns.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (u in t) va.call(t, u) && !wa.hasOwnProperty(u) && (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var c = 0; c < u; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: or, type: e.type, key: l, ref: i, props: r, _owner: s };
};
$.createContext = function(e) {
  return e = { $$typeof: Uc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: bc, _context: e }, e.Consumer = e;
};
$.createElement = xa;
$.createFactory = function(e) {
  var t = xa.bind(null, e);
  return t.type = e, t;
};
$.createRef = function() {
  return { current: null };
};
$.forwardRef = function(e) {
  return { $$typeof: Vc, render: e };
};
$.isValidElement = rs;
$.lazy = function(e) {
  return { $$typeof: Hc, _payload: { _status: -1, _result: e }, _init: Yc };
};
$.memo = function(e, t) {
  return { $$typeof: Wc, type: e, compare: t === void 0 ? null : t };
};
$.startTransition = function(e) {
  var t = zr.transition;
  zr.transition = {};
  try {
    e();
  } finally {
    zr.transition = t;
  }
};
$.unstable_act = _a;
$.useCallback = function(e, t) {
  return ve.current.useCallback(e, t);
};
$.useContext = function(e) {
  return ve.current.useContext(e);
};
$.useDebugValue = function() {
};
$.useDeferredValue = function(e) {
  return ve.current.useDeferredValue(e);
};
$.useEffect = function(e, t) {
  return ve.current.useEffect(e, t);
};
$.useId = function() {
  return ve.current.useId();
};
$.useImperativeHandle = function(e, t, n) {
  return ve.current.useImperativeHandle(e, t, n);
};
$.useInsertionEffect = function(e, t) {
  return ve.current.useInsertionEffect(e, t);
};
$.useLayoutEffect = function(e, t) {
  return ve.current.useLayoutEffect(e, t);
};
$.useMemo = function(e, t) {
  return ve.current.useMemo(e, t);
};
$.useReducer = function(e, t, n) {
  return ve.current.useReducer(e, t, n);
};
$.useRef = function(e) {
  return ve.current.useRef(e);
};
$.useState = function(e) {
  return ve.current.useState(e);
};
$.useSyncExternalStore = function(e, t, n) {
  return ve.current.useSyncExternalStore(e, t, n);
};
$.useTransition = function() {
  return ve.current.useTransition();
};
$.version = "18.3.1";
pa.exports = $;
var S = pa.exports;
const qs = /* @__PURE__ */ Rc(S);
var Sa = { exports: {} }, Le = {}, ka = { exports: {} }, Ea = {};
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
  function t(P, F) {
    var O = P.length;
    P.push(F);
    e: for (; 0 < O; ) {
      var X = O - 1 >>> 1, ie = P[X];
      if (0 < l(ie, F)) P[X] = F, P[O] = ie, O = X;
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var F = P[0], O = P.pop();
    if (O !== F) {
      P[0] = O;
      e: for (var X = 0, ie = P.length, fr = ie >>> 1; X < fr; ) {
        var Tt = 2 * (X + 1) - 1, Dl = P[Tt], It = Tt + 1, pr = P[It];
        if (0 > l(Dl, O)) It < ie && 0 > l(pr, Dl) ? (P[X] = pr, P[It] = O, X = It) : (P[X] = Dl, P[Tt] = O, X = Tt);
        else if (It < ie && 0 > l(pr, O)) P[X] = pr, P[It] = O, X = It;
        else break e;
      }
    }
    return F;
  }
  function l(P, F) {
    var O = P.sortIndex - F.sortIndex;
    return O !== 0 ? O : P.id - F.id;
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
  var u = [], c = [], y = 1, g = null, h = 3, k = !1, C = !1, N = !1, R = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(P) {
    for (var F = n(c); F !== null; ) {
      if (F.callback === null) r(c);
      else if (F.startTime <= P) r(c), F.sortIndex = F.expirationTime, t(u, F);
      else break;
      F = n(c);
    }
  }
  function _(P) {
    if (N = !1, m(P), !C) if (n(u) !== null) C = !0, A(I);
    else {
      var F = n(c);
      F !== null && B(_, F.startTime - P);
    }
  }
  function I(P, F) {
    C = !1, N && (N = !1, d(p), p = -1), k = !0;
    var O = h;
    try {
      for (m(F), g = n(u); g !== null && (!(g.expirationTime > F) || P && !z()); ) {
        var X = g.callback;
        if (typeof X == "function") {
          g.callback = null, h = g.priorityLevel;
          var ie = X(g.expirationTime <= F);
          F = e.unstable_now(), typeof ie == "function" ? g.callback = ie : g === n(u) && r(u), m(F);
        } else r(u);
        g = n(u);
      }
      if (g !== null) var fr = !0;
      else {
        var Tt = n(c);
        Tt !== null && B(_, Tt.startTime - F), fr = !1;
      }
      return fr;
    } finally {
      g = null, h = O, k = !1;
    }
  }
  var w = !1, T = null, p = -1, M = 5, L = -1;
  function z() {
    return !(e.unstable_now() - L < M);
  }
  function v() {
    if (T !== null) {
      var P = e.unstable_now();
      L = P;
      var F = !0;
      try {
        F = T(!0, P);
      } finally {
        F ? x() : (w = !1, T = null);
      }
    } else w = !1;
  }
  var x;
  if (typeof f == "function") x = function() {
    f(v);
  };
  else if (typeof MessageChannel < "u") {
    var E = new MessageChannel(), V = E.port2;
    E.port1.onmessage = v, x = function() {
      V.postMessage(null);
    };
  } else x = function() {
    R(v, 0);
  };
  function A(P) {
    T = P, w || (w = !0, x());
  }
  function B(P, F) {
    p = R(function() {
      P(e.unstable_now());
    }, F);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, e.unstable_continueExecution = function() {
    C || k || (C = !0, A(I));
  }, e.unstable_forceFrameRate = function(P) {
    0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < P ? Math.floor(1e3 / P) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(P) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var F = 3;
        break;
      default:
        F = h;
    }
    var O = h;
    h = F;
    try {
      return P();
    } finally {
      h = O;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(P, F) {
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
    var O = h;
    h = P;
    try {
      return F();
    } finally {
      h = O;
    }
  }, e.unstable_scheduleCallback = function(P, F, O) {
    var X = e.unstable_now();
    switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? X + O : X) : O = X, P) {
      case 1:
        var ie = -1;
        break;
      case 2:
        ie = 250;
        break;
      case 5:
        ie = 1073741823;
        break;
      case 4:
        ie = 1e4;
        break;
      default:
        ie = 5e3;
    }
    return ie = O + ie, P = { id: y++, callback: F, priorityLevel: P, startTime: O, expirationTime: ie, sortIndex: -1 }, O > X ? (P.sortIndex = O, t(c, P), n(u) === null && P === n(c) && (N ? (d(p), p = -1) : N = !0, B(_, O - X))) : (P.sortIndex = ie, t(u, P), C || k || (C = !0, A(I))), P;
  }, e.unstable_shouldYield = z, e.unstable_wrapCallback = function(P) {
    var F = h;
    return function() {
      var O = h;
      h = F;
      try {
        return P.apply(this, arguments);
      } finally {
        h = O;
      }
    };
  };
})(Ea);
ka.exports = Ea;
var Zc = ka.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jc = S, Te = Zc;
function j(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ca = /* @__PURE__ */ new Set(), Wn = {};
function Vt(e, t) {
  cn(e, t), cn(e + "Capture", t);
}
function cn(e, t) {
  for (Wn[e] = t, e = 0; e < t.length; e++) Ca.add(t[e]);
}
var rt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), oi = Object.prototype.hasOwnProperty, qc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, eo = {}, to = {};
function ed(e) {
  return oi.call(to, e) ? !0 : oi.call(eo, e) ? !1 : qc.test(e) ? to[e] = !0 : (eo[e] = !0, !1);
}
function td(e, t, n, r) {
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
function nd(e, t, n, r) {
  if (t === null || typeof t > "u" || td(e, t, n, r)) return !0;
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
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (nd(t, n, l, r) && (n = null), r || l === null ? ed(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ot = Jc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, hr = Symbol.for("react.element"), Ht = Symbol.for("react.portal"), Bt = Symbol.for("react.fragment"), os = Symbol.for("react.strict_mode"), ai = Symbol.for("react.profiler"), Na = Symbol.for("react.provider"), ja = Symbol.for("react.context"), as = Symbol.for("react.forward_ref"), ui = Symbol.for("react.suspense"), ci = Symbol.for("react.suspense_list"), us = Symbol.for("react.memo"), ut = Symbol.for("react.lazy"), Ta = Symbol.for("react.offscreen"), no = Symbol.iterator;
function kn(e) {
  return e === null || typeof e != "object" ? null : (e = no && e[no] || e["@@iterator"], typeof e == "function" ? e : null);
}
var q = Object.assign, Fl;
function Pn(e) {
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
  return (e = e ? e.displayName || e.name : "") ? Pn(e) : "";
}
function rd(e) {
  switch (e.tag) {
    case 5:
      return Pn(e.type);
    case 16:
      return Pn("Lazy");
    case 13:
      return Pn("Suspense");
    case 19:
      return Pn("SuspenseList");
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
    case ja:
      return (e.displayName || "Context") + ".Consumer";
    case Na:
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
function ld(e) {
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
function id(e) {
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
  e._valueTracker || (e._valueTracker = id(e));
}
function La(e) {
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
function Pa(e, t) {
  t = t.checked, t != null && ss(e, "checked", t, !1);
}
function pi(e, t) {
  Pa(e, t);
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
var Mn = Array.isArray;
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
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return q({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function io(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(j(92));
      if (Mn(n)) {
        if (1 < n.length) throw Error(j(93));
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
function za(e) {
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
  return e == null || e === "http://www.w3.org/1999/xhtml" ? za(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var yr, Da = function(e) {
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
}, sd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Rn).forEach(function(e) {
  sd.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Rn[t] = Rn[e];
  });
});
function Ra(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Rn.hasOwnProperty(e) && Rn[e] ? ("" + t).trim() : t + "px";
}
function Fa(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Ra(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var od = q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function yi(e, t) {
  if (t) {
    if (od[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(j(62));
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
    if (typeof xi != "function") throw Error(j(280));
    var t = e.stateNode;
    t && (t = xl(t), xi(e.stateNode, e.type, t));
  }
}
function Oa(e) {
  ln ? sn ? sn.push(e) : sn = [e] : ln = e;
}
function Aa() {
  if (ln) {
    var e = ln, t = sn;
    if (sn = ln = null, oo(e), t) for (e = 0; e < t.length; e++) oo(t[e]);
  }
}
function $a(e, t) {
  return e(t);
}
function ba() {
}
var $l = !1;
function Ua(e, t, n) {
  if ($l) return e(t, n);
  $l = !0;
  try {
    return $a(e, t, n);
  } finally {
    $l = !1, (ln !== null || sn !== null) && (ba(), Aa());
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
  if (n && typeof n != "function") throw Error(j(231, t, typeof n));
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
function ad(e, t, n, r, l, i, s, a, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (y) {
    this.onError(y);
  }
}
var Fn = !1, Hr = null, Br = !1, Si = null, ud = { onError: function(e) {
  Fn = !0, Hr = e;
} };
function cd(e, t, n, r, l, i, s, a, u) {
  Fn = !1, Hr = null, ad.apply(ud, arguments);
}
function dd(e, t, n, r, l, i, s, a, u) {
  if (cd.apply(this, arguments), Fn) {
    if (Fn) {
      var c = Hr;
      Fn = !1, Hr = null;
    } else throw Error(j(198));
    Br || (Br = !0, Si = c);
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
function Va(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function ao(e) {
  if (Qt(e) !== e) throw Error(j(188));
}
function fd(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Qt(e), t === null) throw Error(j(188));
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
      throw Error(j(188));
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
        if (!s) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function Qa(e) {
  return e = fd(e), e !== null ? Wa(e) : null;
}
function Wa(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Wa(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ha = Te.unstable_scheduleCallback, uo = Te.unstable_cancelCallback, pd = Te.unstable_shouldYield, md = Te.unstable_requestPaint, te = Te.unstable_now, hd = Te.unstable_getCurrentPriorityLevel, ds = Te.unstable_ImmediatePriority, Ba = Te.unstable_UserBlockingPriority, Gr = Te.unstable_NormalPriority, gd = Te.unstable_LowPriority, Ga = Te.unstable_IdlePriority, gl = null, Ye = null;
function yd(e) {
  if (Ye && typeof Ye.onCommitFiberRoot == "function") try {
    Ye.onCommitFiberRoot(gl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Qe = Math.clz32 ? Math.clz32 : xd, vd = Math.log, wd = Math.LN2;
function xd(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (vd(e) / wd | 0) | 0;
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
function _d(e, t) {
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
function Sd(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Qe(i), a = 1 << s, u = l[s];
    u === -1 ? (!(a & n) || a & r) && (l[s] = _d(a, t)) : u <= t && (e.expiredLanes |= a), i &= ~a;
  }
}
function ki(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ka() {
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
function kd(e, t) {
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
var W = 0;
function Ya(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Xa, ps, Za, Ja, qa, Ei = !1, xr = [], ht = null, gt = null, yt = null, Gn = /* @__PURE__ */ new Map(), Kn = /* @__PURE__ */ new Map(), dt = [], Ed = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
function Cd(e, t, n, r, l) {
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
function eu(e) {
  var t = Mt(e.target);
  if (t !== null) {
    var n = Qt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Va(n), t !== null) {
          e.blockedOn = t, qa(e.priority, function() {
            Za(n);
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
function Nd() {
  Ei = !1, ht !== null && Dr(ht) && (ht = null), gt !== null && Dr(gt) && (gt = null), yt !== null && Dr(yt) && (yt = null), Gn.forEach(fo), Kn.forEach(fo);
}
function Nn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ei || (Ei = !0, Te.unstable_scheduleCallback(Te.unstable_NormalPriority, Nd)));
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
  for (; 0 < dt.length && (n = dt[0], n.blockedOn === null); ) eu(n), n.blockedOn === null && dt.shift();
}
var on = ot.ReactCurrentBatchConfig, Yr = !0;
function jd(e, t, n, r) {
  var l = W, i = on.transition;
  on.transition = null;
  try {
    W = 1, ms(e, t, n, r);
  } finally {
    W = l, on.transition = i;
  }
}
function Td(e, t, n, r) {
  var l = W, i = on.transition;
  on.transition = null;
  try {
    W = 4, ms(e, t, n, r);
  } finally {
    W = l, on.transition = i;
  }
}
function ms(e, t, n, r) {
  if (Yr) {
    var l = Ci(e, t, n, r);
    if (l === null) Xl(e, t, r, Xr, n), co(e, r);
    else if (Cd(l, e, t, n, r)) r.stopPropagation();
    else if (co(e, r), t & 4 && -1 < Ed.indexOf(e)) {
      for (; l !== null; ) {
        var i = cr(l);
        if (i !== null && Xa(i), i = Ci(e, t, n, r), i === null && Xl(e, t, r, Xr, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Xl(e, t, r, null, n);
  }
}
var Xr = null;
function Ci(e, t, n, r) {
  if (Xr = null, e = cs(r), e = Mt(e), e !== null) if (t = Qt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Va(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Xr = e, null;
}
function tu(e) {
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
      switch (hd()) {
        case ds:
          return 1;
        case Ba:
          return 4;
        case Gr:
        case gd:
          return 16;
        case Ga:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var pt = null, hs = null, Rr = null;
function nu() {
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
function Pe(e) {
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
}, defaultPrevented: 0, isTrusted: 0 }, gs = Pe(wn), ur = q({}, wn, { view: 0, detail: 0 }), Id = Pe(ur), Ul, Vl, jn, yl = q({}, ur, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ys, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== jn && (jn && e.type === "mousemove" ? (Ul = e.screenX - jn.screenX, Vl = e.screenY - jn.screenY) : Vl = Ul = 0, jn = e), Ul);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Vl;
} }), mo = Pe(yl), Ld = q({}, yl, { dataTransfer: 0 }), Pd = Pe(Ld), Md = q({}, ur, { relatedTarget: 0 }), Ql = Pe(Md), zd = q({}, wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Dd = Pe(zd), Rd = q({}, wn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Fd = Pe(Rd), Od = q({}, wn, { data: 0 }), ho = Pe(Od), Ad = {
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
}, $d = {
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
}, bd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Ud(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = bd[e]) ? !!t[e] : !1;
}
function ys() {
  return Ud;
}
var Vd = q({}, ur, { key: function(e) {
  if (e.key) {
    var t = Ad[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Fr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? $d[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ys, charCode: function(e) {
  return e.type === "keypress" ? Fr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Fr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Qd = Pe(Vd), Wd = q({}, yl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), go = Pe(Wd), Hd = q({}, ur, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ys }), Bd = Pe(Hd), Gd = q({}, wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Kd = Pe(Gd), Yd = q({}, yl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Xd = Pe(Yd), Zd = [9, 13, 27, 32], vs = rt && "CompositionEvent" in window, On = null;
rt && "documentMode" in document && (On = document.documentMode);
var Jd = rt && "TextEvent" in window && !On, ru = rt && (!vs || On && 8 < On && 11 >= On), yo = " ", vo = !1;
function lu(e, t) {
  switch (e) {
    case "keyup":
      return Zd.indexOf(t.keyCode) !== -1;
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
function iu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Gt = !1;
function qd(e, t) {
  switch (e) {
    case "compositionend":
      return iu(t);
    case "keypress":
      return t.which !== 32 ? null : (vo = !0, yo);
    case "textInput":
      return e = t.data, e === yo && vo ? null : e;
    default:
      return null;
  }
}
function ef(e, t) {
  if (Gt) return e === "compositionend" || !vs && lu(e, t) ? (e = nu(), Rr = hs = pt = null, Gt = !1, e) : null;
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
      return ru && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var tf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function wo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!tf[e.type] : t === "textarea";
}
function su(e, t, n, r) {
  Oa(r), t = Zr(t, "onChange"), 0 < t.length && (n = new gs("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var An = null, Xn = null;
function nf(e) {
  yu(e, 0);
}
function vl(e) {
  var t = Xt(e);
  if (La(t)) return e;
}
function rf(e, t) {
  if (e === "change") return t;
}
var ou = !1;
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
  ou = Wl && (!document.documentMode || 9 < document.documentMode);
}
function _o() {
  An && (An.detachEvent("onpropertychange", au), Xn = An = null);
}
function au(e) {
  if (e.propertyName === "value" && vl(Xn)) {
    var t = [];
    su(t, Xn, e, cs(e)), Ua(nf, t);
  }
}
function lf(e, t, n) {
  e === "focusin" ? (_o(), An = t, Xn = n, An.attachEvent("onpropertychange", au)) : e === "focusout" && _o();
}
function sf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return vl(Xn);
}
function of(e, t) {
  if (e === "click") return vl(t);
}
function af(e, t) {
  if (e === "input" || e === "change") return vl(t);
}
function uf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var He = typeof Object.is == "function" ? Object.is : uf;
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
function uu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? uu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function cu() {
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
function cf(e) {
  var t = cu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && uu(n.ownerDocument.documentElement, n)) {
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
var df = rt && "documentMode" in document && 11 >= document.documentMode, Kt = null, Ni = null, $n = null, ji = !1;
function Eo(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ji || Kt == null || Kt !== Wr(r) || (r = Kt, "selectionStart" in r && ws(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), $n && Zn($n, r) || ($n = r, r = Zr(Ni, "onSelect"), 0 < r.length && (t = new gs("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Kt)));
}
function Sr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Yt = { animationend: Sr("Animation", "AnimationEnd"), animationiteration: Sr("Animation", "AnimationIteration"), animationstart: Sr("Animation", "AnimationStart"), transitionend: Sr("Transition", "TransitionEnd") }, Bl = {}, du = {};
rt && (du = document.createElement("div").style, "AnimationEvent" in window || (delete Yt.animationend.animation, delete Yt.animationiteration.animation, delete Yt.animationstart.animation), "TransitionEvent" in window || delete Yt.transitionend.transition);
function wl(e) {
  if (Bl[e]) return Bl[e];
  if (!Yt[e]) return e;
  var t = Yt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in du) return Bl[e] = t[n];
  return e;
}
var fu = wl("animationend"), pu = wl("animationiteration"), mu = wl("animationstart"), hu = wl("transitionend"), gu = /* @__PURE__ */ new Map(), Co = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ct(e, t) {
  gu.set(e, t), Vt(t, [e]);
}
for (var Gl = 0; Gl < Co.length; Gl++) {
  var Kl = Co[Gl], ff = Kl.toLowerCase(), pf = Kl[0].toUpperCase() + Kl.slice(1);
  Ct(ff, "on" + pf);
}
Ct(fu, "onAnimationEnd");
Ct(pu, "onAnimationIteration");
Ct(mu, "onAnimationStart");
Ct("dblclick", "onDoubleClick");
Ct("focusin", "onFocus");
Ct("focusout", "onBlur");
Ct(hu, "onTransitionEnd");
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
var Dn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dn));
function No(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, dd(r, t, void 0, e), e.currentTarget = null;
}
function yu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var a = r[s], u = a.instance, c = a.currentTarget;
        if (a = a.listener, u !== i && l.isPropagationStopped()) break e;
        No(l, a, c), i = u;
      }
      else for (s = 0; s < r.length; s++) {
        if (a = r[s], u = a.instance, c = a.currentTarget, a = a.listener, u !== i && l.isPropagationStopped()) break e;
        No(l, a, c), i = u;
      }
    }
  }
  if (Br) throw e = Si, Br = !1, Si = null, e;
}
function G(e, t) {
  var n = t[Mi];
  n === void 0 && (n = t[Mi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (vu(t, e, 2, !1), n.add(r));
}
function Yl(e, t, n) {
  var r = 0;
  t && (r |= 4), vu(n, e, r, t);
}
var kr = "_reactListening" + Math.random().toString(36).slice(2);
function Jn(e) {
  if (!e[kr]) {
    e[kr] = !0, Ca.forEach(function(n) {
      n !== "selectionchange" && (mf.has(n) || Yl(n, !1, e), Yl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[kr] || (t[kr] = !0, Yl("selectionchange", !1, t));
  }
}
function vu(e, t, n, r) {
  switch (tu(t)) {
    case 1:
      var l = jd;
      break;
    case 4:
      l = Td;
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
        if (s = Mt(a), s === null) return;
        if (u = s.tag, u === 5 || u === 6) {
          r = i = s;
          continue e;
        }
        a = a.parentNode;
      }
    }
    r = r.return;
  }
  Ua(function() {
    var c = i, y = cs(n), g = [];
    e: {
      var h = gu.get(e);
      if (h !== void 0) {
        var k = gs, C = e;
        switch (e) {
          case "keypress":
            if (Fr(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = Qd;
            break;
          case "focusin":
            C = "focus", k = Ql;
            break;
          case "focusout":
            C = "blur", k = Ql;
            break;
          case "beforeblur":
          case "afterblur":
            k = Ql;
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
            k = mo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = Pd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = Bd;
            break;
          case fu:
          case pu:
          case mu:
            k = Dd;
            break;
          case hu:
            k = Kd;
            break;
          case "scroll":
            k = Id;
            break;
          case "wheel":
            k = Xd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = Fd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = go;
        }
        var N = (t & 4) !== 0, R = !N && e === "scroll", d = N ? h !== null ? h + "Capture" : null : h;
        N = [];
        for (var f = c, m; f !== null; ) {
          m = f;
          var _ = m.stateNode;
          if (m.tag === 5 && _ !== null && (m = _, d !== null && (_ = Bn(f, d), _ != null && N.push(qn(f, _, m)))), R) break;
          f = f.return;
        }
        0 < N.length && (h = new k(h, C, null, n, y), g.push({ event: h, listeners: N }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", h && n !== wi && (C = n.relatedTarget || n.fromElement) && (Mt(C) || C[lt])) break e;
        if ((k || h) && (h = y.window === y ? y : (h = y.ownerDocument) ? h.defaultView || h.parentWindow : window, k ? (C = n.relatedTarget || n.toElement, k = c, C = C ? Mt(C) : null, C !== null && (R = Qt(C), C !== R || C.tag !== 5 && C.tag !== 6) && (C = null)) : (k = null, C = c), k !== C)) {
          if (N = mo, _ = "onMouseLeave", d = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (N = go, _ = "onPointerLeave", d = "onPointerEnter", f = "pointer"), R = k == null ? h : Xt(k), m = C == null ? h : Xt(C), h = new N(_, f + "leave", k, n, y), h.target = R, h.relatedTarget = m, _ = null, Mt(y) === c && (N = new N(d, f + "enter", C, n, y), N.target = m, N.relatedTarget = R, _ = N), R = _, k && C) t: {
            for (N = k, d = C, f = 0, m = N; m; m = Wt(m)) f++;
            for (m = 0, _ = d; _; _ = Wt(_)) m++;
            for (; 0 < f - m; ) N = Wt(N), f--;
            for (; 0 < m - f; ) d = Wt(d), m--;
            for (; f--; ) {
              if (N === d || d !== null && N === d.alternate) break t;
              N = Wt(N), d = Wt(d);
            }
            N = null;
          }
          else N = null;
          k !== null && jo(g, h, k, N, !1), C !== null && R !== null && jo(g, R, C, N, !0);
        }
      }
      e: {
        if (h = c ? Xt(c) : window, k = h.nodeName && h.nodeName.toLowerCase(), k === "select" || k === "input" && h.type === "file") var I = rf;
        else if (wo(h)) if (ou) I = af;
        else {
          I = sf;
          var w = lf;
        }
        else (k = h.nodeName) && k.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (I = of);
        if (I && (I = I(e, c))) {
          su(g, I, n, y);
          break e;
        }
        w && w(e, h, c), e === "focusout" && (w = h._wrapperState) && w.controlled && h.type === "number" && mi(h, "number", h.value);
      }
      switch (w = c ? Xt(c) : window, e) {
        case "focusin":
          (wo(w) || w.contentEditable === "true") && (Kt = w, Ni = c, $n = null);
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
          ji = !1, Eo(g, n, y);
          break;
        case "selectionchange":
          if (df) break;
        case "keydown":
        case "keyup":
          Eo(g, n, y);
      }
      var T;
      if (vs) e: {
        switch (e) {
          case "compositionstart":
            var p = "onCompositionStart";
            break e;
          case "compositionend":
            p = "onCompositionEnd";
            break e;
          case "compositionupdate":
            p = "onCompositionUpdate";
            break e;
        }
        p = void 0;
      }
      else Gt ? lu(e, n) && (p = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (p = "onCompositionStart");
      p && (ru && n.locale !== "ko" && (Gt || p !== "onCompositionStart" ? p === "onCompositionEnd" && Gt && (T = nu()) : (pt = y, hs = "value" in pt ? pt.value : pt.textContent, Gt = !0)), w = Zr(c, p), 0 < w.length && (p = new ho(p, e, null, n, y), g.push({ event: p, listeners: w }), T ? p.data = T : (T = iu(n), T !== null && (p.data = T)))), (T = Jd ? qd(e, n) : ef(e, n)) && (c = Zr(c, "onBeforeInput"), 0 < c.length && (y = new ho("onBeforeInput", "beforeinput", null, n, y), g.push({ event: y, listeners: c }), y.data = T));
    }
    yu(g, t);
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
    var a = n, u = a.alternate, c = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 && c !== null && (a = c, l ? (u = Bn(n, i), u != null && s.unshift(qn(n, u, a))) : l || (u = Bn(n, i), u != null && s.push(qn(n, u, a)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var hf = /\r\n?/g, gf = /\u0000|\uFFFD/g;
function To(e) {
  return (typeof e == "string" ? e : "" + e).replace(hf, `
`).replace(gf, "");
}
function Er(e, t, n) {
  if (t = To(t), To(e) !== t && n) throw Error(j(425));
}
function Jr() {
}
var Ti = null, Ii = null;
function Li(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Pi = typeof setTimeout == "function" ? setTimeout : void 0, yf = typeof clearTimeout == "function" ? clearTimeout : void 0, Io = typeof Promise == "function" ? Promise : void 0, vf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Io < "u" ? function(e) {
  return Io.resolve(null).then(e).catch(wf);
} : Pi;
function wf(e) {
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
var xn = Math.random().toString(36).slice(2), Ke = "__reactFiber$" + xn, er = "__reactProps$" + xn, lt = "__reactContainer$" + xn, Mi = "__reactEvents$" + xn, xf = "__reactListeners$" + xn, _f = "__reactHandles$" + xn;
function Mt(e) {
  var t = e[Ke];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[lt] || n[Ke]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Lo(e); e !== null; ) {
        if (n = e[Ke]) return n;
        e = Lo(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function cr(e) {
  return e = e[Ke] || e[lt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Xt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function xl(e) {
  return e[er] || null;
}
var zi = [], Zt = -1;
function Nt(e) {
  return { current: e };
}
function K(e) {
  0 > Zt || (e.current = zi[Zt], zi[Zt] = null, Zt--);
}
function H(e, t) {
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
  K(Se), K(me);
}
function Po(e, t, n) {
  if (me.current !== Et) throw Error(j(168));
  H(me, t), H(Se, n);
}
function wu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(j(108, ld(e) || "Unknown", l));
  return q({}, n, r);
}
function el(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Et, Ot = me.current, H(me, e), H(Se, Se.current), !0;
}
function Mo(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n ? (e = wu(e, t, Ot), r.__reactInternalMemoizedMergedChildContext = e, K(Se), K(me), H(me, e)) : K(Se), H(Se, n);
}
var qe = null, _l = !1, Jl = !1;
function xu(e) {
  qe === null ? qe = [e] : qe.push(e);
}
function Sf(e) {
  _l = !0, xu(e);
}
function jt() {
  if (!Jl && qe !== null) {
    Jl = !0;
    var e = 0, t = W;
    try {
      var n = qe;
      for (W = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      qe = null, _l = !1;
    } catch (l) {
      throw qe !== null && (qe = qe.slice(e + 1)), Ha(ds, jt), l;
    } finally {
      W = t, Jl = !1;
    }
  }
  return null;
}
var Jt = [], qt = 0, tl = null, nl = 0, Me = [], ze = 0, At = null, et = 1, tt = "";
function Lt(e, t) {
  Jt[qt++] = nl, Jt[qt++] = tl, tl = e, nl = t;
}
function _u(e, t, n) {
  Me[ze++] = et, Me[ze++] = tt, Me[ze++] = At, At = e;
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
  e.return !== null && (Lt(e, 1), _u(e, 1, 0));
}
function _s(e) {
  for (; e === tl; ) tl = Jt[--qt], Jt[qt] = null, nl = Jt[--qt], Jt[qt] = null;
  for (; e === At; ) At = Me[--ze], Me[ze] = null, tt = Me[--ze], Me[ze] = null, et = Me[--ze], Me[ze] = null;
}
var je = null, Ne = null, Y = !1, Ve = null;
function Su(e, t) {
  var n = De(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function zo(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, je = e, Ne = vt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, je = e, Ne = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = At !== null ? { id: et, overflow: tt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = De(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, je = e, Ne = null, !0) : !1;
    default:
      return !1;
  }
}
function Di(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ri(e) {
  if (Y) {
    var t = Ne;
    if (t) {
      var n = t;
      if (!zo(e, t)) {
        if (Di(e)) throw Error(j(418));
        t = vt(n.nextSibling);
        var r = je;
        t && zo(e, t) ? Su(r, n) : (e.flags = e.flags & -4097 | 2, Y = !1, je = e);
      }
    } else {
      if (Di(e)) throw Error(j(418));
      e.flags = e.flags & -4097 | 2, Y = !1, je = e;
    }
  }
}
function Do(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  je = e;
}
function Cr(e) {
  if (e !== je) return !1;
  if (!Y) return Do(e), Y = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Li(e.type, e.memoizedProps)), t && (t = Ne)) {
    if (Di(e)) throw ku(), Error(j(418));
    for (; t; ) Su(e, t), t = vt(t.nextSibling);
  }
  if (Do(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(j(317));
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
function ku() {
  for (var e = Ne; e; ) e = vt(e.nextSibling);
}
function fn() {
  Ne = je = null, Y = !1;
}
function Ss(e) {
  Ve === null ? Ve = [e] : Ve.push(e);
}
var kf = ot.ReactCurrentBatchConfig;
function Tn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
      var l = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var a = l.refs;
        s === null ? delete a[i] : a[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function Nr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ro(e) {
  var t = e._init;
  return t(e._payload);
}
function Eu(e) {
  function t(d, f) {
    if (e) {
      var m = d.deletions;
      m === null ? (d.deletions = [f], d.flags |= 16) : m.push(f);
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
    return d = St(d, f), d.index = 0, d.sibling = null, d;
  }
  function i(d, f, m) {
    return d.index = m, e ? (m = d.alternate, m !== null ? (m = m.index, m < f ? (d.flags |= 2, f) : m) : (d.flags |= 2, f)) : (d.flags |= 1048576, f);
  }
  function s(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function a(d, f, m, _) {
    return f === null || f.tag !== 6 ? (f = ii(m, d.mode, _), f.return = d, f) : (f = l(f, m), f.return = d, f);
  }
  function u(d, f, m, _) {
    var I = m.type;
    return I === Bt ? y(d, f, m.props.children, _, m.key) : f !== null && (f.elementType === I || typeof I == "object" && I !== null && I.$$typeof === ut && Ro(I) === f.type) ? (_ = l(f, m.props), _.ref = Tn(d, f, m), _.return = d, _) : (_ = Qr(m.type, m.key, m.props, null, d.mode, _), _.ref = Tn(d, f, m), _.return = d, _);
  }
  function c(d, f, m, _) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== m.containerInfo || f.stateNode.implementation !== m.implementation ? (f = si(m, d.mode, _), f.return = d, f) : (f = l(f, m.children || []), f.return = d, f);
  }
  function y(d, f, m, _, I) {
    return f === null || f.tag !== 7 ? (f = Ft(m, d.mode, _, I), f.return = d, f) : (f = l(f, m), f.return = d, f);
  }
  function g(d, f, m) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = ii("" + f, d.mode, m), f.return = d, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case hr:
          return m = Qr(f.type, f.key, f.props, null, d.mode, m), m.ref = Tn(d, null, f), m.return = d, m;
        case Ht:
          return f = si(f, d.mode, m), f.return = d, f;
        case ut:
          var _ = f._init;
          return g(d, _(f._payload), m);
      }
      if (Mn(f) || kn(f)) return f = Ft(f, d.mode, m, null), f.return = d, f;
      Nr(d, f);
    }
    return null;
  }
  function h(d, f, m, _) {
    var I = f !== null ? f.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return I !== null ? null : a(d, f, "" + m, _);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case hr:
          return m.key === I ? u(d, f, m, _) : null;
        case Ht:
          return m.key === I ? c(d, f, m, _) : null;
        case ut:
          return I = m._init, h(
            d,
            f,
            I(m._payload),
            _
          );
      }
      if (Mn(m) || kn(m)) return I !== null ? null : y(d, f, m, _, null);
      Nr(d, m);
    }
    return null;
  }
  function k(d, f, m, _, I) {
    if (typeof _ == "string" && _ !== "" || typeof _ == "number") return d = d.get(m) || null, a(f, d, "" + _, I);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case hr:
          return d = d.get(_.key === null ? m : _.key) || null, u(f, d, _, I);
        case Ht:
          return d = d.get(_.key === null ? m : _.key) || null, c(f, d, _, I);
        case ut:
          var w = _._init;
          return k(d, f, m, w(_._payload), I);
      }
      if (Mn(_) || kn(_)) return d = d.get(m) || null, y(f, d, _, I, null);
      Nr(f, _);
    }
    return null;
  }
  function C(d, f, m, _) {
    for (var I = null, w = null, T = f, p = f = 0, M = null; T !== null && p < m.length; p++) {
      T.index > p ? (M = T, T = null) : M = T.sibling;
      var L = h(d, T, m[p], _);
      if (L === null) {
        T === null && (T = M);
        break;
      }
      e && T && L.alternate === null && t(d, T), f = i(L, f, p), w === null ? I = L : w.sibling = L, w = L, T = M;
    }
    if (p === m.length) return n(d, T), Y && Lt(d, p), I;
    if (T === null) {
      for (; p < m.length; p++) T = g(d, m[p], _), T !== null && (f = i(T, f, p), w === null ? I = T : w.sibling = T, w = T);
      return Y && Lt(d, p), I;
    }
    for (T = r(d, T); p < m.length; p++) M = k(T, d, p, m[p], _), M !== null && (e && M.alternate !== null && T.delete(M.key === null ? p : M.key), f = i(M, f, p), w === null ? I = M : w.sibling = M, w = M);
    return e && T.forEach(function(z) {
      return t(d, z);
    }), Y && Lt(d, p), I;
  }
  function N(d, f, m, _) {
    var I = kn(m);
    if (typeof I != "function") throw Error(j(150));
    if (m = I.call(m), m == null) throw Error(j(151));
    for (var w = I = null, T = f, p = f = 0, M = null, L = m.next(); T !== null && !L.done; p++, L = m.next()) {
      T.index > p ? (M = T, T = null) : M = T.sibling;
      var z = h(d, T, L.value, _);
      if (z === null) {
        T === null && (T = M);
        break;
      }
      e && T && z.alternate === null && t(d, T), f = i(z, f, p), w === null ? I = z : w.sibling = z, w = z, T = M;
    }
    if (L.done) return n(
      d,
      T
    ), Y && Lt(d, p), I;
    if (T === null) {
      for (; !L.done; p++, L = m.next()) L = g(d, L.value, _), L !== null && (f = i(L, f, p), w === null ? I = L : w.sibling = L, w = L);
      return Y && Lt(d, p), I;
    }
    for (T = r(d, T); !L.done; p++, L = m.next()) L = k(T, d, p, L.value, _), L !== null && (e && L.alternate !== null && T.delete(L.key === null ? p : L.key), f = i(L, f, p), w === null ? I = L : w.sibling = L, w = L);
    return e && T.forEach(function(v) {
      return t(d, v);
    }), Y && Lt(d, p), I;
  }
  function R(d, f, m, _) {
    if (typeof m == "object" && m !== null && m.type === Bt && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case hr:
          e: {
            for (var I = m.key, w = f; w !== null; ) {
              if (w.key === I) {
                if (I = m.type, I === Bt) {
                  if (w.tag === 7) {
                    n(d, w.sibling), f = l(w, m.props.children), f.return = d, d = f;
                    break e;
                  }
                } else if (w.elementType === I || typeof I == "object" && I !== null && I.$$typeof === ut && Ro(I) === w.type) {
                  n(d, w.sibling), f = l(w, m.props), f.ref = Tn(d, w, m), f.return = d, d = f;
                  break e;
                }
                n(d, w);
                break;
              } else t(d, w);
              w = w.sibling;
            }
            m.type === Bt ? (f = Ft(m.props.children, d.mode, _, m.key), f.return = d, d = f) : (_ = Qr(m.type, m.key, m.props, null, d.mode, _), _.ref = Tn(d, f, m), _.return = d, d = _);
          }
          return s(d);
        case Ht:
          e: {
            for (w = m.key; f !== null; ) {
              if (f.key === w) if (f.tag === 4 && f.stateNode.containerInfo === m.containerInfo && f.stateNode.implementation === m.implementation) {
                n(d, f.sibling), f = l(f, m.children || []), f.return = d, d = f;
                break e;
              } else {
                n(d, f);
                break;
              }
              else t(d, f);
              f = f.sibling;
            }
            f = si(m, d.mode, _), f.return = d, d = f;
          }
          return s(d);
        case ut:
          return w = m._init, R(d, f, w(m._payload), _);
      }
      if (Mn(m)) return C(d, f, m, _);
      if (kn(m)) return N(d, f, m, _);
      Nr(d, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, f !== null && f.tag === 6 ? (n(d, f.sibling), f = l(f, m), f.return = d, d = f) : (n(d, f), f = ii(m, d.mode, _), f.return = d, d = f), s(d)) : n(d, f);
  }
  return R;
}
var pn = Eu(!0), Cu = Eu(!1), rl = Nt(null), ll = null, en = null, ks = null;
function Es() {
  ks = en = ll = null;
}
function Cs(e) {
  var t = rl.current;
  K(rl), e._currentValue = t;
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
    if (ll === null) throw Error(j(308));
    en = e, ll.dependencies = { lanes: 0, firstContext: e };
  } else en = en.next = e;
  return t;
}
var zt = null;
function Ns(e) {
  zt === null ? zt = [e] : zt.push(e);
}
function Nu(e, t, n, r) {
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
function ju(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function nt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function wt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, b & 2) {
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
    var u = a, c = u.next;
    u.next = null, s === null ? i = c : s.next = c, s = u;
    var y = e.alternate;
    y !== null && (y = y.updateQueue, a = y.lastBaseUpdate, a !== s && (a === null ? y.firstBaseUpdate = c : a.next = c, y.lastBaseUpdate = u));
  }
  if (i !== null) {
    var g = l.baseState;
    s = 0, y = c = u = null, a = i;
    do {
      var h = a.lane, k = a.eventTime;
      if ((r & h) === h) {
        y !== null && (y = y.next = {
          eventTime: k,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var C = e, N = a;
          switch (h = t, k = n, N.tag) {
            case 1:
              if (C = N.payload, typeof C == "function") {
                g = C.call(k, g, h);
                break e;
              }
              g = C;
              break e;
            case 3:
              C.flags = C.flags & -65537 | 128;
            case 0:
              if (C = N.payload, h = typeof C == "function" ? C.call(k, g, h) : C, h == null) break e;
              g = q({}, g, h);
              break e;
            case 2:
              ct = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [a] : h.push(a));
      } else k = { eventTime: k, lane: h, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, y === null ? (c = y = k, u = g) : y = y.next = k, s |= h;
      if (a = a.next, a === null) {
        if (a = l.shared.pending, a === null) break;
        h = a, a = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
      }
    } while (!0);
    if (y === null && (u = g), l.baseState = u, l.firstBaseUpdate = c, l.lastBaseUpdate = y, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        s |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    bt |= s, e.lanes = s, e.memoizedState = g;
  }
}
function Oo(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(j(191, l));
      l.call(r);
    }
  }
}
var dr = {}, Xe = Nt(dr), tr = Nt(dr), nr = Nt(dr);
function Dt(e) {
  if (e === dr) throw Error(j(174));
  return e;
}
function Ts(e, t) {
  switch (H(nr, t), H(tr, e), H(Xe, dr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : gi(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = gi(t, e);
  }
  K(Xe), H(Xe, t);
}
function mn() {
  K(Xe), K(tr), K(nr);
}
function Tu(e) {
  Dt(nr.current);
  var t = Dt(Xe.current), n = gi(t, e.type);
  t !== n && (H(tr, e), H(Xe, n));
}
function Is(e) {
  tr.current === e && (K(Xe), K(tr));
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
var Ar = ot.ReactCurrentDispatcher, ei = ot.ReactCurrentBatchConfig, $t = 0, J = null, re = null, se = null, ol = !1, bn = !1, rr = 0, Ef = 0;
function de() {
  throw Error(j(321));
}
function Ps(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!He(e[n], t[n])) return !1;
  return !0;
}
function Ms(e, t, n, r, l, i) {
  if ($t = i, J = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ar.current = e === null || e.memoizedState === null ? Tf : If, e = n(r, l), bn) {
    i = 0;
    do {
      if (bn = !1, rr = 0, 25 <= i) throw Error(j(301));
      i += 1, se = re = null, t.updateQueue = null, Ar.current = Lf, e = n(r, l);
    } while (bn);
  }
  if (Ar.current = al, t = re !== null && re.next !== null, $t = 0, se = re = J = null, ol = !1, t) throw Error(j(300));
  return e;
}
function zs() {
  var e = rr !== 0;
  return rr = 0, e;
}
function Ge() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return se === null ? J.memoizedState = se = e : se = se.next = e, se;
}
function Oe() {
  if (re === null) {
    var e = J.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = re.next;
  var t = se === null ? J.memoizedState : se.next;
  if (t !== null) se = t, re = e;
  else {
    if (e === null) throw Error(j(310));
    re = e, e = { memoizedState: re.memoizedState, baseState: re.baseState, baseQueue: re.baseQueue, queue: re.queue, next: null }, se === null ? J.memoizedState = se = e : se = se.next = e;
  }
  return se;
}
function lr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ti(e) {
  var t = Oe(), n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = re, l = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var s = l.next;
      l.next = i.next, i.next = s;
    }
    r.baseQueue = l = i, n.pending = null;
  }
  if (l !== null) {
    i = l.next, r = r.baseState;
    var a = s = null, u = null, c = i;
    do {
      var y = c.lane;
      if (($t & y) === y) u !== null && (u = u.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var g = {
          lane: y,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        u === null ? (a = u = g, s = r) : u = u.next = g, J.lanes |= y, bt |= y;
      }
      c = c.next;
    } while (c !== null && c !== i);
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
  if (n === null) throw Error(j(311));
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
function Lu(e, t) {
  var n = J, r = Oe(), l = t(), i = !He(r.memoizedState, l);
  if (i && (r.memoizedState = l, _e = !0), r = r.queue, Ds(zu.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || se !== null && se.memoizedState.tag & 1) {
    if (n.flags |= 2048, ir(9, Mu.bind(null, n, r, l, t), void 0, null), oe === null) throw Error(j(349));
    $t & 30 || Pu(n, t, l);
  }
  return l;
}
function Pu(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = J.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, J.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Mu(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Du(t) && Ru(e);
}
function zu(e, t, n) {
  return n(function() {
    Du(t) && Ru(e);
  });
}
function Du(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !He(e, n);
  } catch {
    return !0;
  }
}
function Ru(e) {
  var t = it(e, 1);
  t !== null && We(t, e, 1, -1);
}
function Ao(e) {
  var t = Ge();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: lr, lastRenderedState: e }, t.queue = e, e = e.dispatch = jf.bind(null, J, e), [t.memoizedState, e];
}
function ir(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = J.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, J.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Fu() {
  return Oe().memoizedState;
}
function $r(e, t, n, r) {
  var l = Ge();
  J.flags |= e, l.memoizedState = ir(1 | t, n, void 0, r === void 0 ? null : r);
}
function Sl(e, t, n, r) {
  var l = Oe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (re !== null) {
    var s = re.memoizedState;
    if (i = s.destroy, r !== null && Ps(r, s.deps)) {
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
function Ou(e, t) {
  return Sl(4, 2, e, t);
}
function Au(e, t) {
  return Sl(4, 4, e, t);
}
function $u(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function bu(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Sl(4, 4, $u.bind(null, t, e), n);
}
function Rs() {
}
function Uu(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ps(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Vu(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ps(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Qu(e, t, n) {
  return $t & 21 ? (He(n, t) || (n = Ka(), J.lanes |= n, bt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, _e = !0), e.memoizedState = n);
}
function Cf(e, t) {
  var n = W;
  W = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ei.transition;
  ei.transition = {};
  try {
    e(!1), t();
  } finally {
    W = n, ei.transition = r;
  }
}
function Wu() {
  return Oe().memoizedState;
}
function Nf(e, t, n) {
  var r = _t(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Hu(e)) Bu(t, n);
  else if (n = Nu(e, t, n, r), n !== null) {
    var l = ye();
    We(n, e, r, l), Gu(n, t, r);
  }
}
function jf(e, t, n) {
  var r = _t(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Hu(e)) Bu(t, l);
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
    n = Nu(e, t, l, r), n !== null && (l = ye(), We(n, e, r, l), Gu(n, t, r));
  }
}
function Hu(e) {
  var t = e.alternate;
  return e === J || t !== null && t === J;
}
function Bu(e, t) {
  bn = ol = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Gu(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, fs(e, n);
  }
}
var al = { readContext: Fe, useCallback: de, useContext: de, useEffect: de, useImperativeHandle: de, useInsertionEffect: de, useLayoutEffect: de, useMemo: de, useReducer: de, useRef: de, useState: de, useDebugValue: de, useDeferredValue: de, useTransition: de, useMutableSource: de, useSyncExternalStore: de, useId: de, unstable_isNewReconciler: !1 }, Tf = { readContext: Fe, useCallback: function(e, t) {
  return Ge().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Fe, useEffect: $o, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, $r(
    4194308,
    4,
    $u.bind(null, t, e),
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
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Nf.bind(null, J, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ge();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ao, useDebugValue: Rs, useDeferredValue: function(e) {
  return Ge().memoizedState = e;
}, useTransition: function() {
  var e = Ao(!1), t = e[0];
  return e = Cf.bind(null, e[1]), Ge().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = J, l = Ge();
  if (Y) {
    if (n === void 0) throw Error(j(407));
    n = n();
  } else {
    if (n = t(), oe === null) throw Error(j(349));
    $t & 30 || Pu(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, $o(zu.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, ir(9, Mu.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Ge(), t = oe.identifierPrefix;
  if (Y) {
    var n = tt, r = et;
    n = (r & ~(1 << 32 - Qe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = rr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Ef++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, If = {
  readContext: Fe,
  useCallback: Uu,
  useContext: Fe,
  useEffect: Ds,
  useImperativeHandle: bu,
  useInsertionEffect: Ou,
  useLayoutEffect: Au,
  useMemo: Vu,
  useReducer: ti,
  useRef: Fu,
  useState: function() {
    return ti(lr);
  },
  useDebugValue: Rs,
  useDeferredValue: function(e) {
    var t = Oe();
    return Qu(t, re.memoizedState, e);
  },
  useTransition: function() {
    var e = ti(lr)[0], t = Oe().memoizedState;
    return [e, t];
  },
  useMutableSource: Iu,
  useSyncExternalStore: Lu,
  useId: Wu,
  unstable_isNewReconciler: !1
}, Lf = { readContext: Fe, useCallback: Uu, useContext: Fe, useEffect: Ds, useImperativeHandle: bu, useInsertionEffect: Ou, useLayoutEffect: Au, useMemo: Vu, useReducer: ni, useRef: Fu, useState: function() {
  return ni(lr);
}, useDebugValue: Rs, useDeferredValue: function(e) {
  var t = Oe();
  return re === null ? t.memoizedState = e : Qu(t, re.memoizedState, e);
}, useTransition: function() {
  var e = ni(lr)[0], t = Oe().memoizedState;
  return [e, t];
}, useMutableSource: Iu, useSyncExternalStore: Lu, useId: Wu, unstable_isNewReconciler: !1 };
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
function Ku(e, t, n) {
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
      n += rd(r), r = r.return;
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
var Pf = typeof WeakMap == "function" ? WeakMap : Map;
function Yu(e, t, n) {
  n = nt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    cl || (cl = !0, Yi = r), $i(e, t);
  }, n;
}
function Xu(e, t, n) {
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
    r = e.pingCache = new Pf();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Hf.bind(null, e, t, n), t.then(e, e));
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
  t.child = e === null ? Cu(t, null, n, r) : pn(t, e.child, n, r);
}
function Ho(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return an(t, l), r = Ms(e, t, n, r, i, l), n = zs(), e !== null && !_e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, st(e, t, l)) : (Y && n && xs(t), t.flags |= 1, he(e, t, r, l), t.child);
}
function Bo(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Qs(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Zu(e, t, i, r, l)) : (e = Qr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Zn, n(s, r) && e.ref === t.ref) return st(e, t, l);
  }
  return t.flags |= 1, e = St(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Zu(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Zn(i, r) && e.ref === t.ref) if (_e = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (_e = !0);
    else return t.lanes = e.lanes, st(e, t, l);
  }
  return bi(e, t, n, r, l);
}
function Ju(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, H(nn, Ce), Ce |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, H(nn, Ce), Ce |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, H(nn, Ce), Ce |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, H(nn, Ce), Ce |= r;
  return he(e, t, l, n), t.child;
}
function qu(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function bi(e, t, n, r, l) {
  var i = ke(n) ? Ot : me.current;
  return i = dn(t, i), an(t, l), n = Ms(e, t, n, r, i, l), r = zs(), e !== null && !_e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, st(e, t, l)) : (Y && r && xs(t), t.flags |= 1, he(e, t, n, l), t.child);
}
function Go(e, t, n, r, l) {
  if (ke(n)) {
    var i = !0;
    el(t);
  } else i = !1;
  if (an(t, l), t.stateNode === null) br(e, t), Ku(t, n, r), Ai(t, n, r, l), r = !0;
  else if (e === null) {
    var s = t.stateNode, a = t.memoizedProps;
    s.props = a;
    var u = s.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Fe(c) : (c = ke(n) ? Ot : me.current, c = dn(t, c));
    var y = n.getDerivedStateFromProps, g = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    g || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || u !== c) && Uo(t, s, r, c), ct = !1;
    var h = t.memoizedState;
    s.state = h, il(t, r, s, l), u = t.memoizedState, a !== r || h !== u || Se.current || ct ? (typeof y == "function" && (Oi(t, n, y, r), u = t.memoizedState), (a = ct || bo(t, n, a, r, h, u, c)) ? (g || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), s.props = r, s.state = u, s.context = c, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, ju(e, t), a = t.memoizedProps, c = t.type === t.elementType ? a : be(t.type, a), s.props = c, g = t.pendingProps, h = s.context, u = n.contextType, typeof u == "object" && u !== null ? u = Fe(u) : (u = ke(n) ? Ot : me.current, u = dn(t, u));
    var k = n.getDerivedStateFromProps;
    (y = typeof k == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== g || h !== u) && Uo(t, s, r, u), ct = !1, h = t.memoizedState, s.state = h, il(t, r, s, l);
    var C = t.memoizedState;
    a !== g || h !== C || Se.current || ct ? (typeof k == "function" && (Oi(t, n, k, r), C = t.memoizedState), (c = ct || bo(t, n, c, r, h, C, u) || !1) ? (y || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, C, u), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, C, u)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = C), s.props = r, s.state = C, s.context = u, r = c) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ui(e, t, n, r, i, l);
}
function Ui(e, t, n, r, l, i) {
  qu(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return l && Mo(t, n, !1), st(e, t, i);
  r = t.stateNode, Mf.current = t;
  var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = pn(t, e.child, null, i), t.child = pn(t, null, a, i)) : he(e, t, a, i), t.memoizedState = r.state, l && Mo(t, n, !0), t.child;
}
function ec(e) {
  var t = e.stateNode;
  t.pendingContext ? Po(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Po(e, t.context, !1), Ts(e, t.containerInfo);
}
function Ko(e, t, n, r, l) {
  return fn(), Ss(l), t.flags |= 256, he(e, t, n, r), t.child;
}
var Vi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Qi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function tc(e, t, n) {
  var r = t.pendingProps, l = Z.current, i = !1, s = (t.flags & 128) !== 0, a;
  if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), H(Z, l & 1), e === null)
    return Ri(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Nl(s, r, 0, null), e = Ft(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Qi(n), t.memoizedState = Vi, e) : Fs(t, s));
  if (l = e.memoizedState, l !== null && (a = l.dehydrated, a !== null)) return zf(e, t, s, r, a, l, n);
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
function zf(e, t, n, r, l, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ri(Error(j(422))), jr(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Nl({ mode: "visible", children: r.children }, l, 0, null), i = Ft(i, l, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && pn(t, e.child, null, s), t.child.memoizedState = Qi(s), t.memoizedState = Vi, i);
  if (!(t.mode & 1)) return jr(e, t, s, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var a = r.dgst;
    return r = a, i = Error(j(419)), r = ri(i, r, void 0), jr(e, t, s, r);
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
    return Vs(), r = ri(Error(j(421))), jr(e, t, s, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Bf.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, Ne = vt(l.nextSibling), je = t, Y = !0, Ve = null, e !== null && (Me[ze++] = et, Me[ze++] = tt, Me[ze++] = At, et = e.id, tt = e.overflow, At = t), t = Fs(t, r.children), t.flags |= 4096, t);
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
function nc(e, t, n) {
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
  if (H(Z, r), !(t.mode & 1)) t.memoizedState = null;
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
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (e = t.child, n = St(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = St(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Df(e, t, n) {
  switch (t.tag) {
    case 3:
      ec(t), fn();
      break;
    case 5:
      Tu(t);
      break;
    case 1:
      ke(t.type) && el(t);
      break;
    case 4:
      Ts(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      H(rl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (H(Z, Z.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? tc(e, t, n) : (H(Z, Z.current & 1), e = st(e, t, n), e !== null ? e.sibling : null);
      H(Z, Z.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return nc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), H(Z, Z.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ju(e, t, n);
  }
  return st(e, t, n);
}
var rc, Wi, lc, ic;
rc = function(e, t) {
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
lc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Dt(Xe.current);
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
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var a = l[c];
      for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Wn.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (a = l != null ? l[c] : void 0, r.hasOwnProperty(c) && u !== a && (u != null || a != null)) if (c === "style") if (a) {
        for (s in a) !a.hasOwnProperty(s) || u && u.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in u) u.hasOwnProperty(s) && a[s] !== u[s] && (n || (n = {}), n[s] = u[s]);
      } else n || (i || (i = []), i.push(
        c,
        n
      )), n = u;
      else c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, a = a ? a.__html : void 0, u != null && a !== u && (i = i || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Wn.hasOwnProperty(c) ? (u != null && c === "onScroll" && G("scroll", e), i || a === u || (i = [])) : (i = i || []).push(c, u));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
ic = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function In(e, t) {
  if (!Y) switch (e.tailMode) {
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
function Rf(e, t, n) {
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
      return r = t.stateNode, mn(), K(Se), K(me), Ls(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Cr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ve !== null && (Ji(Ve), Ve = null))), Wi(e, t), fe(t), null;
    case 5:
      Is(t);
      var l = Dt(nr.current);
      if (n = t.type, e !== null && t.stateNode != null) lc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return fe(t), null;
        }
        if (e = Dt(Xe.current), Cr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Ke] = t, r[er] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              G("cancel", r), G("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Dn.length; l++) G(Dn[l], r);
              break;
            case "source":
              G("error", r);
              break;
            case "img":
            case "image":
            case "link":
              G(
                "error",
                r
              ), G("load", r);
              break;
            case "details":
              G("toggle", r);
              break;
            case "input":
              ro(r, i), G("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, G("invalid", r);
              break;
            case "textarea":
              io(r, i), G("invalid", r);
          }
          yi(n, i), l = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var a = i[s];
            s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && Er(r.textContent, a, e), l = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && Er(
              r.textContent,
              a,
              e
            ), l = ["children", "" + a]) : Wn.hasOwnProperty(s) && a != null && s === "onScroll" && G("scroll", r);
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
          s = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = za(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Ke] = t, e[er] = r, rc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = vi(n, r), n) {
              case "dialog":
                G("cancel", e), G("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                G("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Dn.length; l++) G(Dn[l], e);
                l = r;
                break;
              case "source":
                G("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                G(
                  "error",
                  e
                ), G("load", e), l = r;
                break;
              case "details":
                G("toggle", e), l = r;
                break;
              case "input":
                ro(e, r), l = fi(e, r), G("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = q({}, r, { value: void 0 }), G("invalid", e);
                break;
              case "textarea":
                io(e, r), l = hi(e, r), G("invalid", e);
                break;
              default:
                l = r;
            }
            yi(n, l), a = l;
            for (i in a) if (a.hasOwnProperty(i)) {
              var u = a[i];
              i === "style" ? Fa(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Da(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Hn(e, u) : typeof u == "number" && Hn(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Wn.hasOwnProperty(i) ? u != null && i === "onScroll" && G("scroll", e) : u != null && ss(e, i, u, s));
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
      if (e && t.stateNode != null) ic(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
        if (n = Dt(nr.current), Dt(Xe.current), Cr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ke] = t, (i = r.nodeValue !== n) && (e = je, e !== null)) switch (e.tag) {
            case 3:
              Er(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Er(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ke] = t, t.stateNode = r;
      }
      return fe(t), null;
    case 13:
      if (K(Z), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Y && Ne !== null && t.mode & 1 && !(t.flags & 128)) ku(), fn(), t.flags |= 98560, i = !1;
        else if (i = Cr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(j(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(j(317));
            i[Ke] = t;
          } else fn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          fe(t), i = !1;
        } else Ve !== null && (Ji(Ve), Ve = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Z.current & 1 ? le === 0 && (le = 3) : Vs())), t.updateQueue !== null && (t.flags |= 4), fe(t), null);
    case 4:
      return mn(), Wi(e, t), e === null && Jn(t.stateNode.containerInfo), fe(t), null;
    case 10:
      return Cs(t.type._context), fe(t), null;
    case 17:
      return ke(t.type) && qr(), fe(t), null;
    case 19:
      if (K(Z), i = t.memoizedState, i === null) return fe(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) In(i, !1);
      else {
        if (le !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = sl(e), s !== null) {
            for (t.flags |= 128, In(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return H(Z, Z.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && te() > gn && (t.flags |= 128, r = !0, In(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = sl(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), In(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !Y) return fe(t), null;
        } else 2 * te() - i.renderingStartTime > gn && n !== 1073741824 && (t.flags |= 128, r = !0, In(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = te(), t.sibling = null, n = Z.current, H(Z, r ? n & 1 | 2 : n & 1), t) : (fe(t), null);
    case 22:
    case 23:
      return Us(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ce & 1073741824 && (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : fe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function Ff(e, t) {
  switch (_s(t), t.tag) {
    case 1:
      return ke(t.type) && qr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return mn(), K(Se), K(me), Ls(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Is(t), null;
    case 13:
      if (K(Z), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(j(340));
        fn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return K(Z), null;
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
var Tr = !1, pe = !1, Of = typeof WeakSet == "function" ? WeakSet : Set, D = null;
function tn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ee(e, t, r);
  }
  else n.current = null;
}
function Hi(e, t, n) {
  try {
    n();
  } catch (r) {
    ee(e, t, r);
  }
}
var Xo = !1;
function Af(e, t) {
  if (Ti = Yr, e = cu(), ws(e)) {
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
        var s = 0, a = -1, u = -1, c = 0, y = 0, g = e, h = null;
        t: for (; ; ) {
          for (var k; g !== n || l !== 0 && g.nodeType !== 3 || (a = s + l), g !== i || r !== 0 && g.nodeType !== 3 || (u = s + r), g.nodeType === 3 && (s += g.nodeValue.length), (k = g.firstChild) !== null; )
            h = g, g = k;
          for (; ; ) {
            if (g === e) break t;
            if (h === n && ++c === l && (a = s), h === i && ++y === r && (u = s), (k = g.nextSibling) !== null) break;
            g = h, h = g.parentNode;
          }
          g = k;
        }
        n = a === -1 || u === -1 ? null : { start: a, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ii = { focusedElem: e, selectionRange: n }, Yr = !1, D = t; D !== null; ) if (t = D, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, D = e;
  else for (; D !== null; ) {
    t = D;
    try {
      var C = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (C !== null) {
            var N = C.memoizedProps, R = C.memoizedState, d = t.stateNode, f = d.getSnapshotBeforeUpdate(t.elementType === t.type ? N : be(t.type, N), R);
            d.__reactInternalSnapshotBeforeUpdate = f;
          }
          break;
        case 3:
          var m = t.stateNode.containerInfo;
          m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(j(163));
      }
    } catch (_) {
      ee(t, t.return, _);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, D = e;
      break;
    }
    D = t.return;
  }
  return C = Xo, Xo = !1, C;
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
function sc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, sc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ke], delete t[er], delete t[Mi], delete t[xf], delete t[_f])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function oc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Zo(e) {
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
  for (n = n.child; n !== null; ) ac(e, t, n), n = n.sibling;
}
function ac(e, t, n) {
  if (Ye && typeof Ye.onCommitFiberUnmount == "function") try {
    Ye.onCommitFiberUnmount(gl, n);
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
        ee(n, t, a);
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
    n === null && (n = e.stateNode = new Of()), t.forEach(function(r) {
      var l = Gf.bind(null, e, r);
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
      if (ae === null) throw Error(j(160));
      ac(i, s, l), ae = null, Ue = !1;
      var u = l.alternate;
      u !== null && (u.return = null), l.return = null;
    } catch (c) {
      ee(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) uc(t, e), t = t.sibling;
}
function uc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ae(t, e), Be(e), r & 4) {
        try {
          Un(3, e, e.return), El(3, e);
        } catch (N) {
          ee(e, e.return, N);
        }
        try {
          Un(5, e, e.return);
        } catch (N) {
          ee(e, e.return, N);
        }
      }
      break;
    case 1:
      Ae(t, e), Be(e), r & 512 && n !== null && tn(n, n.return);
      break;
    case 5:
      if (Ae(t, e), Be(e), r & 512 && n !== null && tn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Hn(l, "");
        } catch (N) {
          ee(e, e.return, N);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, a = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          a === "input" && i.type === "radio" && i.name != null && Pa(l, i), vi(a, s);
          var c = vi(a, i);
          for (s = 0; s < u.length; s += 2) {
            var y = u[s], g = u[s + 1];
            y === "style" ? Fa(l, g) : y === "dangerouslySetInnerHTML" ? Da(l, g) : y === "children" ? Hn(l, g) : ss(l, y, g, c);
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
              var k = i.value;
              k != null ? rn(l, !!i.multiple, k, !1) : h !== !!i.multiple && (i.defaultValue != null ? rn(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : rn(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[er] = i;
        } catch (N) {
          ee(e, e.return, N);
        }
      }
      break;
    case 6:
      if (Ae(t, e), Be(e), r & 4) {
        if (e.stateNode === null) throw Error(j(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (N) {
          ee(e, e.return, N);
        }
      }
      break;
    case 3:
      if (Ae(t, e), Be(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Yn(t.containerInfo);
      } catch (N) {
        ee(e, e.return, N);
      }
      break;
    case 4:
      Ae(t, e), Be(e);
      break;
    case 13:
      Ae(t, e), Be(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || ($s = te())), r & 4 && Jo(e);
      break;
    case 22:
      if (y = n !== null && n.memoizedState !== null, e.mode & 1 ? (pe = (c = pe) || y, Ae(t, e), pe = c) : Ae(t, e), Be(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !y && e.mode & 1) for (D = e, y = e.child; y !== null; ) {
          for (g = D = y; D !== null; ) {
            switch (h = D, k = h.child, h.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Un(4, h, h.return);
                break;
              case 1:
                tn(h, h.return);
                var C = h.stateNode;
                if (typeof C.componentWillUnmount == "function") {
                  r = h, n = h.return;
                  try {
                    t = r, C.props = t.memoizedProps, C.state = t.memoizedState, C.componentWillUnmount();
                  } catch (N) {
                    ee(r, n, N);
                  }
                }
                break;
              case 5:
                tn(h, h.return);
                break;
              case 22:
                if (h.memoizedState !== null) {
                  ea(g);
                  continue;
                }
            }
            k !== null ? (k.return = h, D = k) : ea(g);
          }
          y = y.sibling;
        }
        e: for (y = null, g = e; ; ) {
          if (g.tag === 5) {
            if (y === null) {
              y = g;
              try {
                l = g.stateNode, c ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = g.stateNode, u = g.memoizedProps.style, s = u != null && u.hasOwnProperty("display") ? u.display : null, a.style.display = Ra("display", s));
              } catch (N) {
                ee(e, e.return, N);
              }
            }
          } else if (g.tag === 6) {
            if (y === null) try {
              g.stateNode.nodeValue = c ? "" : g.memoizedProps;
            } catch (N) {
              ee(e, e.return, N);
            }
          } else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === e) && g.child !== null) {
            g.child.return = g, g = g.child;
            continue;
          }
          if (g === e) break e;
          for (; g.sibling === null; ) {
            if (g.return === null || g.return === e) break e;
            y === g && (y = null), g = g.return;
          }
          y === g && (y = null), g.sibling.return = g.return, g = g.sibling;
        }
      }
      break;
    case 19:
      Ae(t, e), Be(e), r & 4 && Jo(e);
      break;
    case 21:
      break;
    default:
      Ae(
        t,
        e
      ), Be(e);
  }
}
function Be(e) {
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
        throw Error(j(160));
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
          throw Error(j(161));
      }
    } catch (u) {
      ee(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function $f(e, t, n) {
  D = e, cc(e);
}
function cc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var l = D, i = l.child;
    if (l.tag === 22 && r) {
      var s = l.memoizedState !== null || Tr;
      if (!s) {
        var a = l.alternate, u = a !== null && a.memoizedState !== null || pe;
        a = Tr;
        var c = pe;
        if (Tr = s, (pe = u) && !c) for (D = l; D !== null; ) s = D, u = s.child, s.tag === 22 && s.memoizedState !== null ? ta(l) : u !== null ? (u.return = s, D = u) : ta(l);
        for (; i !== null; ) D = i, cc(i), i = i.sibling;
        D = l, Tr = a, pe = c;
      }
      qo(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, D = i) : qo(e);
  }
}
function qo(e) {
  for (; D !== null; ) {
    var t = D;
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
              var c = t.alternate;
              if (c !== null) {
                var y = c.memoizedState;
                if (y !== null) {
                  var g = y.dehydrated;
                  g !== null && Yn(g);
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
            throw Error(j(163));
        }
        pe || t.flags & 512 && Bi(t);
      } catch (h) {
        ee(t, t.return, h);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, D = n;
      break;
    }
    D = t.return;
  }
}
function ea(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, D = n;
      break;
    }
    D = t.return;
  }
}
function ta(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            El(4, t);
          } catch (u) {
            ee(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ee(t, l, u);
            }
          }
          var i = t.return;
          try {
            Bi(t);
          } catch (u) {
            ee(t, i, u);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Bi(t);
          } catch (u) {
            ee(t, s, u);
          }
      }
    } catch (u) {
      ee(t, t.return, u);
    }
    if (t === e) {
      D = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, D = a;
      break;
    }
    D = t.return;
  }
}
var bf = Math.ceil, ul = ot.ReactCurrentDispatcher, Os = ot.ReactCurrentOwner, Re = ot.ReactCurrentBatchConfig, b = 0, oe = null, ne = null, ue = 0, Ce = 0, nn = Nt(0), le = 0, sr = null, bt = 0, Cl = 0, As = 0, Vn = null, xe = null, $s = 0, gn = 1 / 0, Je = null, cl = !1, Yi = null, xt = null, Ir = !1, mt = null, dl = 0, Qn = 0, Xi = null, Ur = -1, Vr = 0;
function ye() {
  return b & 6 ? te() : Ur !== -1 ? Ur : Ur = te();
}
function _t(e) {
  return e.mode & 1 ? b & 2 && ue !== 0 ? ue & -ue : kf.transition !== null ? (Vr === 0 && (Vr = Ka()), Vr) : (e = W, e !== 0 || (e = window.event, e = e === void 0 ? 16 : tu(e.type)), e) : 1;
}
function We(e, t, n, r) {
  if (50 < Qn) throw Qn = 0, Xi = null, Error(j(185));
  ar(e, n, r), (!(b & 2) || e !== oe) && (e === oe && (!(b & 2) && (Cl |= n), le === 4 && ft(e, ue)), Ee(e, r), n === 1 && b === 0 && !(t.mode & 1) && (gn = te() + 500, _l && jt()));
}
function Ee(e, t) {
  var n = e.callbackNode;
  Sd(e, t);
  var r = Kr(e, e === oe ? ue : 0);
  if (r === 0) n !== null && uo(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && uo(n), t === 1) e.tag === 0 ? Sf(na.bind(null, e)) : xu(na.bind(null, e)), vf(function() {
      !(b & 6) && jt();
    }), n = null;
    else {
      switch (Ya(r)) {
        case 1:
          n = ds;
          break;
        case 4:
          n = Ba;
          break;
        case 16:
          n = Gr;
          break;
        case 536870912:
          n = Ga;
          break;
        default:
          n = Gr;
      }
      n = vc(n, dc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function dc(e, t) {
  if (Ur = -1, Vr = 0, b & 6) throw Error(j(327));
  var n = e.callbackNode;
  if (un() && e.callbackNode !== n) return null;
  var r = Kr(e, e === oe ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = fl(e, r);
  else {
    t = r;
    var l = b;
    b |= 2;
    var i = pc();
    (oe !== e || ue !== t) && (Je = null, gn = te() + 500, Rt(e, t));
    do
      try {
        Qf();
        break;
      } catch (a) {
        fc(e, a);
      }
    while (!0);
    Es(), ul.current = i, b = l, ne !== null ? t = 0 : (oe = null, ue = 0, t = le);
  }
  if (t !== 0) {
    if (t === 2 && (l = ki(e), l !== 0 && (r = l, t = Zi(e, l))), t === 1) throw n = sr, Rt(e, 0), ft(e, r), Ee(e, te()), n;
    if (t === 6) ft(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Uf(l) && (t = fl(e, r), t === 2 && (i = ki(e), i !== 0 && (r = i, t = Zi(e, i))), t === 1)) throw n = sr, Rt(e, 0), ft(e, r), Ee(e, te()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          Pt(e, xe, Je);
          break;
        case 3:
          if (ft(e, r), (r & 130023424) === r && (t = $s + 500 - te(), 10 < t)) {
            if (Kr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ye(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Pi(Pt.bind(null, e, xe, Je), t);
            break;
          }
          Pt(e, xe, Je);
          break;
        case 4:
          if (ft(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var s = 31 - Qe(r);
            i = 1 << s, s = t[s], s > l && (l = s), r &= ~i;
          }
          if (r = l, r = te() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * bf(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Pi(Pt.bind(null, e, xe, Je), r);
            break;
          }
          Pt(e, xe, Je);
          break;
        case 5:
          Pt(e, xe, Je);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return Ee(e, te()), e.callbackNode === n ? dc.bind(null, e) : null;
}
function Zi(e, t) {
  var n = Vn;
  return e.current.memoizedState.isDehydrated && (Rt(e, t).flags |= 256), e = fl(e, t), e !== 2 && (t = xe, xe = n, t !== null && Ji(t)), e;
}
function Ji(e) {
  xe === null ? xe = e : xe.push.apply(xe, e);
}
function Uf(e) {
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
  if (b & 6) throw Error(j(327));
  un();
  var t = Kr(e, 0);
  if (!(t & 1)) return Ee(e, te()), null;
  var n = fl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ki(e);
    r !== 0 && (t = r, n = Zi(e, r));
  }
  if (n === 1) throw n = sr, Rt(e, 0), ft(e, t), Ee(e, te()), n;
  if (n === 6) throw Error(j(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Pt(e, xe, Je), Ee(e, te()), null;
}
function bs(e, t) {
  var n = b;
  b |= 1;
  try {
    return e(t);
  } finally {
    b = n, b === 0 && (gn = te() + 500, _l && jt());
  }
}
function Ut(e) {
  mt !== null && mt.tag === 0 && !(b & 6) && un();
  var t = b;
  b |= 1;
  var n = Re.transition, r = W;
  try {
    if (Re.transition = null, W = 1, e) return e();
  } finally {
    W = r, Re.transition = n, b = t, !(b & 6) && jt();
  }
}
function Us() {
  Ce = nn.current, K(nn);
}
function Rt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, yf(n)), ne !== null) for (n = ne.return; n !== null; ) {
    var r = n;
    switch (_s(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && qr();
        break;
      case 3:
        mn(), K(Se), K(me), Ls();
        break;
      case 5:
        Is(r);
        break;
      case 4:
        mn();
        break;
      case 13:
        K(Z);
        break;
      case 19:
        K(Z);
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
  if (oe = e, ne = e = St(e.current, null), ue = Ce = t, le = 0, sr = null, As = Cl = bt = 0, xe = Vn = null, zt !== null) {
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
function fc(e, t) {
  do {
    var n = ne;
    try {
      if (Es(), Ar.current = al, ol) {
        for (var r = J.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        ol = !1;
      }
      if ($t = 0, se = re = J = null, bn = !1, rr = 0, Os.current = null, n === null || n.return === null) {
        le = 1, sr = t, ne = null;
        break;
      }
      e: {
        var i = e, s = n.return, a = n, u = t;
        if (t = ue, a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var c = u, y = a, g = y.tag;
          if (!(y.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var h = y.alternate;
            h ? (y.updateQueue = h.updateQueue, y.memoizedState = h.memoizedState, y.lanes = h.lanes) : (y.updateQueue = null, y.memoizedState = null);
          }
          var k = Qo(s);
          if (k !== null) {
            k.flags &= -257, Wo(k, s, a, i, t), k.mode & 1 && Vo(i, c, t), t = k, u = c;
            var C = t.updateQueue;
            if (C === null) {
              var N = /* @__PURE__ */ new Set();
              N.add(u), t.updateQueue = N;
            } else C.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Vo(i, c, t), Vs();
              break e;
            }
            u = Error(j(426));
          }
        } else if (Y && a.mode & 1) {
          var R = Qo(s);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256), Wo(R, s, a, i, t), Ss(hn(u, a));
            break e;
          }
        }
        i = u = hn(u, a), le !== 4 && (le = 2), Vn === null ? Vn = [i] : Vn.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var d = Yu(i, u, t);
              Fo(i, d);
              break e;
            case 1:
              a = u;
              var f = i.type, m = i.stateNode;
              if (!(i.flags & 128) && (typeof f.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (xt === null || !xt.has(m)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var _ = Xu(i, a, t);
                Fo(i, _);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      hc(n);
    } catch (I) {
      t = I, ne === n && n !== null && (ne = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function pc() {
  var e = ul.current;
  return ul.current = al, e === null ? al : e;
}
function Vs() {
  (le === 0 || le === 3 || le === 2) && (le = 4), oe === null || !(bt & 268435455) && !(Cl & 268435455) || ft(oe, ue);
}
function fl(e, t) {
  var n = b;
  b |= 2;
  var r = pc();
  (oe !== e || ue !== t) && (Je = null, Rt(e, t));
  do
    try {
      Vf();
      break;
    } catch (l) {
      fc(e, l);
    }
  while (!0);
  if (Es(), b = n, ul.current = r, ne !== null) throw Error(j(261));
  return oe = null, ue = 0, le;
}
function Vf() {
  for (; ne !== null; ) mc(ne);
}
function Qf() {
  for (; ne !== null && !pd(); ) mc(ne);
}
function mc(e) {
  var t = yc(e.alternate, e, Ce);
  e.memoizedProps = e.pendingProps, t === null ? hc(e) : ne = t, Os.current = null;
}
function hc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Ff(n, t), n !== null) {
        n.flags &= 32767, ne = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        le = 6, ne = null;
        return;
      }
    } else if (n = Rf(n, t, Ce), n !== null) {
      ne = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ne = t;
      return;
    }
    ne = t = e;
  } while (t !== null);
  le === 0 && (le = 5);
}
function Pt(e, t, n) {
  var r = W, l = Re.transition;
  try {
    Re.transition = null, W = 1, Wf(e, t, n, r);
  } finally {
    Re.transition = l, W = r;
  }
  return null;
}
function Wf(e, t, n, r) {
  do
    un();
  while (mt !== null);
  if (b & 6) throw Error(j(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(j(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (kd(e, i), e === oe && (ne = oe = null, ue = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ir || (Ir = !0, vc(Gr, function() {
    return un(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Re.transition, Re.transition = null;
    var s = W;
    W = 1;
    var a = b;
    b |= 4, Os.current = null, Af(e, n), uc(n, e), cf(Ii), Yr = !!Ti, Ii = Ti = null, e.current = n, $f(n), md(), b = a, W = s, Re.transition = i;
  } else e.current = n;
  if (Ir && (Ir = !1, mt = e, dl = l), i = e.pendingLanes, i === 0 && (xt = null), yd(n.stateNode), Ee(e, te()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (cl) throw cl = !1, e = Yi, Yi = null, e;
  return dl & 1 && e.tag !== 0 && un(), i = e.pendingLanes, i & 1 ? e === Xi ? Qn++ : (Qn = 0, Xi = e) : Qn = 0, jt(), null;
}
function un() {
  if (mt !== null) {
    var e = Ya(dl), t = Re.transition, n = W;
    try {
      if (Re.transition = null, W = 16 > e ? 16 : e, mt === null) var r = !1;
      else {
        if (e = mt, mt = null, dl = 0, b & 6) throw Error(j(331));
        var l = b;
        for (b |= 4, D = e.current; D !== null; ) {
          var i = D, s = i.child;
          if (D.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var c = a[u];
                for (D = c; D !== null; ) {
                  var y = D;
                  switch (y.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Un(8, y, i);
                  }
                  var g = y.child;
                  if (g !== null) g.return = y, D = g;
                  else for (; D !== null; ) {
                    y = D;
                    var h = y.sibling, k = y.return;
                    if (sc(y), y === c) {
                      D = null;
                      break;
                    }
                    if (h !== null) {
                      h.return = k, D = h;
                      break;
                    }
                    D = k;
                  }
                }
              }
              var C = i.alternate;
              if (C !== null) {
                var N = C.child;
                if (N !== null) {
                  C.child = null;
                  do {
                    var R = N.sibling;
                    N.sibling = null, N = R;
                  } while (N !== null);
                }
              }
              D = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, D = s;
          else e: for (; D !== null; ) {
            if (i = D, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Un(9, i, i.return);
            }
            var d = i.sibling;
            if (d !== null) {
              d.return = i.return, D = d;
              break e;
            }
            D = i.return;
          }
        }
        var f = e.current;
        for (D = f; D !== null; ) {
          s = D;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) m.return = s, D = m;
          else e: for (s = f; D !== null; ) {
            if (a = D, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  El(9, a);
              }
            } catch (I) {
              ee(a, a.return, I);
            }
            if (a === s) {
              D = null;
              break e;
            }
            var _ = a.sibling;
            if (_ !== null) {
              _.return = a.return, D = _;
              break e;
            }
            D = a.return;
          }
        }
        if (b = l, jt(), Ye && typeof Ye.onPostCommitFiberRoot == "function") try {
          Ye.onPostCommitFiberRoot(gl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      W = n, Re.transition = t;
    }
  }
  return !1;
}
function ra(e, t, n) {
  t = hn(n, t), t = Yu(e, t, 1), e = wt(e, t, 1), t = ye(), e !== null && (ar(e, 1, t), Ee(e, t));
}
function ee(e, t, n) {
  if (e.tag === 3) ra(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      ra(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (xt === null || !xt.has(r))) {
        e = hn(n, e), e = Xu(t, e, 1), t = wt(t, e, 1), e = ye(), t !== null && (ar(t, 1, e), Ee(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Hf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ye(), e.pingedLanes |= e.suspendedLanes & n, oe === e && (ue & n) === n && (le === 4 || le === 3 && (ue & 130023424) === ue && 500 > te() - $s ? Rt(e, 0) : As |= n), Ee(e, t);
}
function gc(e, t) {
  t === 0 && (e.mode & 1 ? (t = wr, wr <<= 1, !(wr & 130023424) && (wr = 4194304)) : t = 1);
  var n = ye();
  e = it(e, t), e !== null && (ar(e, t, n), Ee(e, n));
}
function Bf(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), gc(e, n);
}
function Gf(e, t) {
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
      throw Error(j(314));
  }
  r !== null && r.delete(t), gc(e, n);
}
var yc;
yc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Se.current) _e = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return _e = !1, Df(e, t, n);
    _e = !!(e.flags & 131072);
  }
  else _e = !1, Y && t.flags & 1048576 && _u(t, nl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      br(e, t), e = t.pendingProps;
      var l = dn(t, me.current);
      an(t, n), l = Ms(null, t, r, e, l, n);
      var i = zs();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ke(r) ? (i = !0, el(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, js(t), l.updater = kl, t.stateNode = l, l._reactInternals = t, Ai(t, r, e, n), t = Ui(null, t, r, !0, i, n)) : (t.tag = 0, Y && i && xs(t), he(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (br(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Yf(r), e = be(r, e), l) {
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
        throw Error(j(
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
        if (ec(t), e === null) throw Error(j(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, ju(e, t), il(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = hn(Error(j(423)), t), t = Ko(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = hn(Error(j(424)), t), t = Ko(e, t, r, n, l);
          break e;
        } else for (Ne = vt(t.stateNode.containerInfo.firstChild), je = t, Y = !0, Ve = null, n = Cu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
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
      return Tu(t), e === null && Ri(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = l.children, Li(r, l) ? s = null : i !== null && Li(r, i) && (t.flags |= 32), qu(e, t), he(e, t, s, n), t.child;
    case 6:
      return e === null && Ri(t), null;
    case 13:
      return tc(e, t, n);
    case 4:
      return Ts(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = pn(t, null, r, n) : he(e, t, r, n), t.child;
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
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, s = l.value, H(rl, r._currentValue), r._currentValue = s, i !== null) if (He(i.value, s)) {
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
                  var c = i.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var y = c.pending;
                    y === null ? u.next = u : (u.next = y.next, y.next = u), c.pending = u;
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
            if (s = i.return, s === null) throw Error(j(341));
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
      return Zu(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : be(r, l), br(e, t), t.tag = 1, ke(r) ? (e = !0, el(t)) : e = !1, an(t, n), Ku(t, r, l), Ai(t, r, l, n), Ui(null, t, r, !0, e, n);
    case 19:
      return nc(e, t, n);
    case 22:
      return Ju(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function vc(e, t) {
  return Ha(e, t);
}
function Kf(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function De(e, t, n, r) {
  return new Kf(e, t, n, r);
}
function Qs(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Yf(e) {
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
    case Ta:
      return Nl(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Na:
          s = 10;
          break e;
        case ja:
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
      throw Error(j(130, e == null ? e : typeof e, ""));
  }
  return t = De(s, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Ft(e, t, n, r) {
  return e = De(7, e, r, t), e.lanes = n, e;
}
function Nl(e, t, n, r) {
  return e = De(22, e, r, t), e.elementType = Ta, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ii(e, t, n) {
  return e = De(6, e, null, t), e.lanes = n, e;
}
function si(e, t, n) {
  return t = De(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Xf(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = bl(0), this.expirationTimes = bl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = bl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Ws(e, t, n, r, l, i, s, a, u) {
  return e = new Xf(e, t, n, a, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = De(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, js(i), e;
}
function Zf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ht, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function wc(e) {
  if (!e) return Et;
  e = e._reactInternals;
  e: {
    if (Qt(e) !== e || e.tag !== 1) throw Error(j(170));
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
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ke(n)) return wu(e, n, t);
  }
  return t;
}
function xc(e, t, n, r, l, i, s, a, u) {
  return e = Ws(n, r, !0, e, l, i, s, a, u), e.context = wc(null), n = e.current, r = ye(), l = _t(n), i = nt(r, l), i.callback = t ?? null, wt(n, i, l), e.current.lanes = l, ar(e, l, r), Ee(e, r), e;
}
function jl(e, t, n, r) {
  var l = t.current, i = ye(), s = _t(l);
  return n = wc(n), t.context === null ? t.context = n : t.pendingContext = n, t = nt(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = wt(l, t, s), e !== null && (We(e, l, s, i), Or(e, l, s)), s;
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
function Jf() {
  return null;
}
var _c = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Bs(e) {
  this._internalRoot = e;
}
Tl.prototype.render = Bs.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  jl(e, t, null, null);
};
Tl.prototype.unmount = Bs.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ut(function() {
      jl(null, e, null, null);
    }), t[lt] = null;
  }
};
function Tl(e) {
  this._internalRoot = e;
}
Tl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Ja();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < dt.length && t !== 0 && t < dt[n].priority; n++) ;
    dt.splice(n, 0, e), n === 0 && eu(e);
  }
};
function Gs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Il(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ia() {
}
function qf(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var c = pl(s);
        i.call(c);
      };
    }
    var s = xc(t, r, e, 0, null, !1, !1, "", ia);
    return e._reactRootContainer = s, e[lt] = s.current, Jn(e.nodeType === 8 ? e.parentNode : e), Ut(), s;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var c = pl(u);
      a.call(c);
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
  } else s = qf(n, t, e, l, r);
  return pl(s);
}
Xa = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = zn(t.pendingLanes);
        n !== 0 && (fs(t, n | 1), Ee(t, te()), !(b & 6) && (gn = te() + 500, jt()));
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
Za = function(e) {
  if (e.tag === 13) {
    var t = _t(e), n = it(e, t);
    if (n !== null) {
      var r = ye();
      We(n, e, t, r);
    }
    Hs(e, t);
  }
};
Ja = function() {
  return W;
};
qa = function(e, t) {
  var n = W;
  try {
    return W = e, t();
  } finally {
    W = n;
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
            if (!l) throw Error(j(90));
            La(r), pi(r, l);
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
$a = bs;
ba = Ut;
var ep = { usingClientEntryPoint: !1, Events: [cr, Xt, xl, Oa, Aa, bs] }, Ln = { findFiberByHostInstance: Mt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, tp = { bundleType: Ln.bundleType, version: Ln.version, rendererPackageName: Ln.rendererPackageName, rendererConfig: Ln.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ot.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Qa(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Ln.findFiberByHostInstance || Jf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Lr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Lr.isDisabled && Lr.supportsFiber) try {
    gl = Lr.inject(tp), Ye = Lr;
  } catch {
  }
}
Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ep;
Le.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Gs(t)) throw Error(j(200));
  return Zf(e, t, null, n);
};
Le.createRoot = function(e, t) {
  if (!Gs(e)) throw Error(j(299));
  var n = !1, r = "", l = _c;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Ws(e, 1, !1, null, null, n, !1, r, l), e[lt] = t.current, Jn(e.nodeType === 8 ? e.parentNode : e), new Bs(t);
};
Le.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","), Error(j(268, e)));
  return e = Qa(t), e = e === null ? null : e.stateNode, e;
};
Le.flushSync = function(e) {
  return Ut(e);
};
Le.hydrate = function(e, t, n) {
  if (!Il(t)) throw Error(j(200));
  return Ll(null, e, t, !0, n);
};
Le.hydrateRoot = function(e, t, n) {
  if (!Gs(e)) throw Error(j(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", s = _c;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = xc(t, null, e, 1, n ?? null, l, !1, i, s), e[lt] = t.current, Jn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Tl(t);
};
Le.render = function(e, t, n) {
  if (!Il(t)) throw Error(j(200));
  return Ll(null, e, t, !1, n);
};
Le.unmountComponentAtNode = function(e) {
  if (!Il(e)) throw Error(j(40));
  return e._reactRootContainer ? (Ut(function() {
    Ll(null, null, e, !1, function() {
      e._reactRootContainer = null, e[lt] = null;
    });
  }), !0) : !1;
};
Le.unstable_batchedUpdates = bs;
Le.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Il(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return Ll(e, t, n, !1, r);
};
Le.version = "18.3.1-next-f1338f8080-20240426";
function Sc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sc);
    } catch (e) {
      console.error(e);
    }
}
Sc(), Sa.exports = Le;
var _n = Sa.exports, kc, sa = _n;
kc = sa.createRoot, sa.hydrateRoot;
window.api = Q;
const qi = async (e = 0, t = 30, n = "") => {
  const r = await Q.fetchApi(
    `/meld-nexus/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}`
  );
  if (!r.ok)
    throw new Error(`Failed to fetch images: ${r.statusText}`);
  return await r.json();
}, np = async (e, t) => {
  const n = `/meld-nexus/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await Q.fetchApi(n);
  return r.ok ? await r.json() : [];
}, rp = async () => {
  const e = await Q.fetchApi("/meld-nexus/search-suggestions");
  return e.ok ? await e.json() : [];
}, Ec = async () => {
  const e = await Q.fetchApi("/meld-nexus/settings");
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
    "gallery.matching_strategy": "filename_phash"
  };
}, lp = async (e, t) => {
  if (!(await Q.fetchApi("/meld-nexus/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  })).ok)
    throw new Error("Failed to save setting");
}, ip = async (e, t) => {
  if (!(await Q.fetchApi("/meld-nexus/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  })).ok)
    throw new Error("Failed to link parent");
}, sp = async (e, t = 12) => {
  const n = await Q.fetchApi(
    `/meld-nexus/suggest-parents?id=${e}&threshold=${t}`
  );
  return n.ok ? await n.json() : [];
}, Cc = async (e) => {
  const t = await Q.fetchApi(`/meld-nexus/lineage?id=${e}`);
  return t.ok ? await t.json() : [];
}, op = async (e) => {
  const t = new FormData();
  t.append("image", e), t.append("overwrite", "true");
  const n = await Q.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, oa = async (e, t = !0) => {
  const n = await Q.fetchApi("/meld-nexus/bulk-delete", {
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
}, Nc = async (e) => {
  const t = await Q.fetchApi("/meld-nexus/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok)
    throw new Error("Failed to register image");
  return await t.json();
}, ap = async (e, t) => {
  const n = await Q.fetchApi(
    `/meld-nexus/folders?type=${e}&path=${encodeURIComponent(t)}`
  );
  return n.ok ? await n.json() : [];
}, up = async (e) => {
  const t = await Q.fetchApi("/meld-nexus/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to start scan");
  }
}, cp = async () => {
  if (!(await Q.fetchApi("/meld-nexus/scan/cancel", {
    method: "POST"
  })).ok)
    throw new Error("Failed to cancel scan");
}, dp = async () => {
  const e = await Q.fetchApi("/meld-nexus/favorites");
  return e.ok ? await e.json() : [];
}, fp = async (e, t) => {
  if (!(await Q.fetchApi("/meld-nexus/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  })).ok)
    throw new Error("Failed to save favorite");
}, aa = async (e) => {
  if (!(await Q.fetchApi("/meld-nexus/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  })).ok)
    throw new Error("Failed to delete favorite");
}, pp = async (e, t) => {
  if (!(await Q.fetchApi("/meld-nexus/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  })).ok)
    throw new Error("Failed to update favorite");
}, Ks = async () => {
  const e = await Q.fetchApi("/meld-nexus/tags");
  return e.ok ? await e.json() : [];
}, mp = async (e) => {
  const t = await Q.fetchApi("/meld-nexus/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  if (!t.ok)
    throw new Error("Failed to create tag");
  return await t.json();
}, hp = async (e) => {
  if (!(await Q.fetchApi(`/meld-nexus/tags?id=${e}`, {
    method: "DELETE"
  })).ok)
    throw new Error("Failed to delete tag");
}, gp = async (e, t) => {
  const n = await Q.fetchApi("/meld-nexus/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  if (!n.ok) {
    const r = await n.json();
    throw new Error(r.error || "Failed to rename tag");
  }
}, yp = async (e, t) => {
  if (!(await Q.fetchApi("/meld-nexus/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  })).ok)
    throw new Error("Failed to update image tags");
}, vp = async (e, t, n) => {
  if (!(await Q.fetchApi("/meld-nexus/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  })).ok)
    throw new Error("Failed to bulk update image tags");
}, wp = async (e) => {
  const t = await Q.fetchApi(`/meld-nexus/image/${e}/workflow`);
  if (!t.ok)
    throw new Error("Failed to fetch workflow");
  return await t.json();
}, xp = async (e) => {
  const t = await Q.fetchApi(`/meld-nexus/image/${e}/snapshot_data`);
  if (!t.ok)
    throw new Error("Failed to fetch snapshot data");
  return await t.json();
};
var jc = { exports: {} }, Pl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _p = S, Sp = Symbol.for("react.element"), kp = Symbol.for("react.fragment"), Ep = Object.prototype.hasOwnProperty, Cp = _p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Np = { key: !0, ref: !0, __self: !0, __source: !0 };
function Tc(e, t, n) {
  var r, l = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) Ep.call(t, r) && !Np.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Sp, type: e, key: i, ref: s, props: l, _owner: Cp.current };
}
Pl.Fragment = kp;
Pl.jsx = Tc;
Pl.jsxs = Tc;
jc.exports = Pl;
var o = jc.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var jp = {
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
const Tp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), U = (e, t) => {
  const n = S.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: s,
      className: a = "",
      children: u,
      ...c
    }, y) => S.createElement(
      "svg",
      {
        ref: y,
        ...jp,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: s ? Number(i) * 24 / Number(l) : i,
        className: ["lucide", `lucide-${Tp(e)}`, a].join(" "),
        ...c
      },
      [
        ...t.map(([g, h]) => S.createElement(g, h)),
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
const Ip = U("AlertTriangle", [
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
const Lp = U("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ua = U("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pp = U("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mp = U("Box", [
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
const zp = U("Calendar", [
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
const Dp = U("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ic = U("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lc = U("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pc = U("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rp = U("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fp = U("Download", [
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
const ca = U("Folder", [
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
const Op = U("Info", [
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
const Ap = U("LayoutGrid", [
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
const $p = U("Maximize", [
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
const bp = U("Minimize", [
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
const Up = U("MoreVertical", [
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
const Mc = U("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vp = U("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qp = U("PlusCircle", [
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
const Ys = U("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ml = U("RefreshCw", [
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
const yn = U("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wp = U("Settings", [
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
const Hp = U("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const da = U("Star", [
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
const Sn = U("Tag", [
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
const Ml = U("Trash2", [
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
const Bp = U("Type", [
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
const Gp = U("Upload", [
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
const Ie = U("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
let hl = !1;
const Kp = (e) => {
  hl = e, hl && console.log("[Meld-Flow] Logger initialized in DEV mode.");
}, Yp = (...e) => {
  hl && console.log("[Meld-Flow]", ...e);
}, Xp = (...e) => {
  hl && console.warn("[Meld-Flow]", ...e);
}, Zp = (...e) => {
  console.error("[Meld-Flow]", ...e);
}, ge = {
  log: Yp,
  warn: Xp,
  error: Zp,
  init: Kp
}, Jp = {
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
    "gallery.matching_strategy": "filename_phash"
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
function qp(e, t) {
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
        new Map(a.map((c) => [c.id, c])).values()
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
      const [s, a] = [
        Math.min(l, i),
        Math.max(l, i)
      ], u = new Set(e.selectedIds);
      for (let c = s; c <= a; c++)
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
        (c) => c.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && c.has_children)
      );
      if (e.viewerImageId === null || s.length === 0)
        return e;
      const a = s.findIndex(
        (c) => c.id === e.viewerImageId
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
        (c) => c.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && c.has_children)
      );
      if (e.viewerImageId === null || s.length === 0)
        return e;
      const a = s.findIndex(
        (c) => c.id === e.viewerImageId
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
const zc = S.createContext(void 0), em = ({
  children: e
}) => {
  const [t, n] = S.useReducer(qp, Jp), r = S.useCallback(async () => {
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
  }, [t.pagination.limit, t.searchQuery]), l = S.useCallback(async () => {
    if (!(t.isLoading || !t.pagination.hasMore)) {
      n({ type: "SET_LOADING", payload: !0 });
      try {
        const u = t.images.length, c = await qi(
          u,
          t.pagination.limit,
          t.searchQuery
        );
        n({ type: "APPEND_IMAGES", payload: c });
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
  ]), i = S.useCallback(async () => {
    try {
      const u = await dp();
      n({ type: "SET_FAVORITES", payload: u });
    } catch (u) {
      ge.error("Failed to load favorites", u);
    }
  }, []), s = S.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const u = Array.from(t.selectedIds), y = t.images.filter(
      (g) => t.selectedIds.has(g.id)
    ).some(
      (g) => g.parent_id || g.has_children
    );
    n({
      type: "OPEN_MODAL",
      payload: { type: "delete_confirm", imageIds: u, hasLineage: y }
    });
  }, [t.selectedIds, t.images]), a = S.useCallback(
    async (u, c) => {
      try {
        await lp(u, c), n({ type: "SET_SETTINGS", payload: { [u]: c } });
      } catch (y) {
        n({
          type: "SET_ERROR",
          payload: y instanceof Error ? y.message : String(y)
        });
      }
    },
    []
  );
  return S.useEffect(() => {
    (async () => {
      try {
        const c = await Ec();
        n({ type: "SET_SETTINGS", payload: c });
      } catch (c) {
        ge.error("Failed to load settings", c);
      }
    })();
  }, []), S.useEffect(() => {
    i();
  }, [i]), S.useEffect(() => {
    const u = () => {
      r();
    }, c = (g) => {
      const h = g.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: h }
      });
    }, y = (g) => {
      const h = g.detail;
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
    return window.addEventListener("meld-nexus-refresh", u), window.addEventListener("meld-nexus-scan-progress", c), window.addEventListener("meld-nexus-scan-finished", y), () => {
      window.removeEventListener("meld-nexus-refresh", u), window.removeEventListener(
        "meld-nexus-scan-progress",
        c
      ), window.removeEventListener(
        "meld-nexus-scan-finished",
        y
      );
    };
  }, [r, t.scanStatus.progress.total]), S.useEffect(() => {
    r();
  }, [r]), /* @__PURE__ */ o.jsx(
    zc.Provider,
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
}, Ze = () => {
  const e = S.useContext(zc);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, tm = ({
  children: e,
  height: t = 150,
  rootMargin: n = "400px"
}) => {
  const [r, l] = S.useState(!1), i = S.useRef(null);
  return S.useEffect(() => {
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
}, nm = () => {
  const { state: e, dispatch: t, deleteSelected: n } = Ze(), r = e.selectedIds.size;
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
            Ml,
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
          /* @__PURE__ */ o.jsx(Ie, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
          "Cancel"
        ]
      }
    )
  ] });
}, rm = ({
  imageIds: e,
  hasLineage: t
}) => {
  const { dispatch: n, refreshImages: r } = Ze(), l = () => {
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
        const c = await Cc(u);
        for (const y of c)
          a.add(y.id);
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
              /* @__PURE__ */ o.jsx(Ml, { size: 20, color: "var(--meld-danger-color)" }),
              "Confirm Deletion"
            ] }),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: l,
                children: /* @__PURE__ */ o.jsx(Ie, { size: 20 })
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
                        Ip,
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
}, lm = ({ image: e }) => {
  const { state: t, dispatch: n } = Ze(), r = t.selectedIds.has(e.id), [l, i] = S.useState(null), [s, a] = S.useState(!1), [u, c] = S.useState(null), [y, g] = S.useState(!1), h = S.useRef(null), k = async (p, M, L = !1) => {
    try {
      await navigator.clipboard.writeText(p), L ? (g(!0), setTimeout(() => g(!1), 2e3)) : (c(M), setTimeout(() => c(null), 2e3));
    } catch (z) {
      console.error("Failed to copy text: ", z);
    }
  };
  S.useEffect(() => {
    const p = (M) => {
      h.current && !h.current.contains(M.target) && a(!1);
    };
    return s && document.addEventListener("mousedown", p), () => {
      document.removeEventListener("mousedown", p);
    };
  }, [s]);
  const C = (p, M = 0) => {
    if (M >= 5) return [];
    const L = p.parent_id;
    if (!L && !p.parent_filename) return [];
    const z = L ? t.images.find((E) => E.id === L) : null;
    let v = null;
    if (z ? v = `/api/view?filename=${encodeURIComponent(z.filename)}&type=${z.type || "output"}${z.subfolder ? `&subfolder=${encodeURIComponent(z.subfolder)}` : ""}` : L && p.parent_filename && (v = `/api/view?filename=${encodeURIComponent(p.parent_filename)}&type=${p.parent_type || "output"}${p.parent_subfolder ? `&subfolder=${encodeURIComponent(p.parent_subfolder)}` : ""}`), !v && !z) return [];
    const x = {
      id: L || null,
      imgSrc: v
    };
    return z ? [x, ...C(z, M + 1)] : [x];
  }, N = C(e), R = e.subfolder ? `${e.subfolder}/${e.filename}` : e.filename, d = `/api/view?filename=${encodeURIComponent(e.filename)}&type=${e.type || "output"}${e.subfolder ? `&subfolder=${encodeURIComponent(e.subfolder)}` : ""}`, f = (p) => {
    p.shiftKey ? (p.preventDefault(), p.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : p.ctrlKey || p.metaKey || t.selectedIds.size > 0 ? (p.preventDefault(), p.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
  }, m = (p) => {
    p.shiftKey ? (p.preventDefault(), p.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : n({ type: "TOGGLE_SELECT", payload: e.id });
  }, _ = (p) => {
    (p.shiftKey || p.ctrlKey || p.metaKey || t.selectedIds.size > 0) && p.preventDefault();
  }, I = (p) => {
    (p.key === "Enter" || p.key === " ") && (p.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
  }, w = async () => {
    try {
      const p = await wp(e.id);
      if (!p.workflow) {
        alert("No workflow information is saved for this image.");
        return;
      }
      await window.app.loadGraphData(
        p.workflow
      ), console.log("Workflow restored successfully from Meld Nexus");
    } catch (p) {
      console.error("Error restoring workflow:", p), alert("Failed to restore workflow.");
    }
  }, T = async () => {
    try {
      const p = await xp(e.id), M = "MeldUnifiedLoader", L = window.app, v = window.LiteGraph.createNode(M);
      if (!v) {
        console.error(`Node type ${M} not found.`), alert(
          `Node type ${M} not found. Please make sure the Meld Unified Loader node is installed.`
        );
        return;
      }
      const x = {
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
      if (v.widgets) {
        for (const [B, P] of Object.entries(x)) {
          const F = p[B];
          if (F != null) {
            const O = v.widgets.find(
              (X) => X.name === P
            );
            O && (O.value = F);
          }
        }
        const A = v.widgets.find(
          (B) => B.name === "control_after_generate"
        );
        A && (A.value = "fixed");
      }
      const E = L.canvas.ds.offset, V = L.canvas.ds.scale;
      v.pos = [(-E[0] + 400) / V, (-E[1] + 300) / V], L.graph.add(v), L.canvas.selectNode(v), L.canvas.centerOnNode(v);
    } catch (p) {
      console.error("Error adding Unified Loader:", p), alert("Failed to load settings.");
    }
  };
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: `meld-image-card ${r ? "meld-image-card--selected" : ""}`,
      onClick: m,
      onMouseDown: _,
      onKeyDown: I,
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ o.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ o.jsx(
          "img",
          {
            src: d,
            className: "meld-image-card__thumbnail",
            alt: e.filename,
            loading: "lazy",
            onMouseDown: _,
            onClick: (p) => {
              p.stopPropagation(), f(p);
            }
          }
        ) }),
        /* @__PURE__ */ o.jsxs("div", { className: "meld-image-card__details", children: [
          (t.settings["sidebar.show_filename"] || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ o.jsxs("div", { className: "meld-image-card__filename", children: [
            t.settings["sidebar.show_filename"] && R,
            t.settings["sidebar.show_filename"] && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
            !t.settings["sidebar.show_filename"] && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
          ] }),
          t.settings["gallery.show_parent_image"] && N.length > 0 && /* @__PURE__ */ o.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
            /* @__PURE__ */ o.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
            /* @__PURE__ */ o.jsx("div", { className: "meld-lineage-thumbs", children: N.map(
              (p, M) => p.imgSrc && /* @__PURE__ */ o.jsx(
                "img",
                {
                  src: p.imgSrc,
                  className: "meld-lineage-badge__parent-thumb",
                  loading: "lazy",
                  onClick: (L) => {
                    L.stopPropagation(), n({
                      type: "OPEN_VIEWER",
                      payload: { id: p.id || e.id, mode: "lineage" }
                    });
                  },
                  title: M === 0 ? "Source" : M === 1 ? "Grand-Source" : `Ancestor (S${M + 1})`,
                  alt: "source thumb"
                },
                p.id || M
              )
            ) })
          ] }),
          t.settings["sidebar.show_model_name"] && /* @__PURE__ */ o.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (p) => {
                p.stopPropagation(), i({
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
                    onClick: (p) => {
                      p.stopPropagation(), k(e.model_name || "-", "Model");
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
              onClick: (p) => {
                p.stopPropagation(), i({
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
                    onClick: (p) => {
                      p.stopPropagation(), k(
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
              onClick: (p) => {
                p.stopPropagation(), i({
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
                    onClick: (p) => {
                      p.stopPropagation(), k(
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
              onClick: (p) => {
                p.stopPropagation(), n({
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
                /* @__PURE__ */ o.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((p, M) => /* @__PURE__ */ o.jsx("span", { className: "meld-image-card__tag", children: p }, `${p}-${M}`)) : /* @__PURE__ */ o.jsx(
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
              onClick: (p) => {
                p.stopPropagation(), a(!s);
              },
              title: "Menu",
              children: /* @__PURE__ */ o.jsx(Up, { size: 16 })
            }
          ),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (p) => {
                p.stopPropagation(), T();
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
                onClick: (p) => {
                  p.stopPropagation(), T(), a(!1);
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
                onClick: (p) => {
                  p.stopPropagation(), w(), a(!1);
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
                onClick: (p) => {
                  p.stopPropagation(), n({
                    type: "OPEN_MODAL",
                    payload: { type: "parent_selection", imageId: e.id }
                  }), a(!1);
                },
                children: [
                  /* @__PURE__ */ o.jsx(Qp, { size: 14 }),
                  /* @__PURE__ */ o.jsx("span", { children: "Add source image" })
                ]
              }
            ),
            /* @__PURE__ */ o.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (p) => {
                  p.stopPropagation(), n({
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
            onClick: (p) => {
              p.stopPropagation(), i(null);
            },
            children: /* @__PURE__ */ o.jsxs(
              "div",
              {
                className: "meld-prompt-popup-content",
                onClick: (p) => p.stopPropagation(),
                children: [
                  /* @__PURE__ */ o.jsxs("div", { className: "meld-prompt-popup-header", children: [
                    /* @__PURE__ */ o.jsx("span", { children: l.title }),
                    /* @__PURE__ */ o.jsxs(
                      "div",
                      {
                        style: { display: "flex", alignItems: "center", gap: "10px" },
                        children: [
                          y ? /* @__PURE__ */ o.jsx(
                            Ic,
                            {
                              size: 18,
                              style: { color: "var(--meld-success-color)" }
                            }
                          ) : /* @__PURE__ */ o.jsx(
                            Rp,
                            {
                              className: "meld-prompt-popup-copy",
                              size: 18,
                              onClick: () => k(l.text, "", !0)
                            }
                          ),
                          /* @__PURE__ */ o.jsx(
                            Ie,
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
}, Dc = S.memo(
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
              children: i ? /* @__PURE__ */ o.jsx(Pp, { size: 12 }) : /* @__PURE__ */ o.jsx(Lp, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
Dc.displayName = "ThumbnailItem";
const im = () => {
  const { state: e, dispatch: t, loadMoreImages: n } = Ze(), { viewerImageId: r, images: l, viewerMode: i, lineageImages: s } = e, [a, u] = S.useState(!1), [c, y] = S.useState(
    e.settings["viewer.show_details_by_default"]
  ), [g, h] = S.useState(null), k = g ?? e.settings["viewer.show_thumbnails"], [C, N] = S.useState(!1), [R, d] = S.useState(!1), f = S.useRef(null), m = S.useMemo(() => i === "lineage" ? s : l.filter(
    (v) => v.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && v.has_children)
  ), [i, s, l, e.settings]), _ = S.useMemo(() => r === null ? -1 : m.findIndex((v) => v.id === r), [m, r]), I = S.useMemo(() => {
    if (!k || _ === -1) return [];
    const v = e.settings["viewer.thumbnail_window_size"], x = Math.floor(v / 2);
    let E = Math.max(0, _ - x);
    const V = Math.min(m.length, E + v);
    return V === m.length && (E = Math.max(0, V - v)), m.slice(E, V).map((A, B) => ({
      img: A,
      absIndex: E + B
    }));
  }, [
    m,
    _,
    e.settings["viewer.thumbnail_window_size"],
    k
  ]), w = (i === "lineage" && s.length > 0 ? s : l).find((v) => v.id === r), T = S.useCallback(
    (v) => {
      v && "stopPropagation" in v && v.stopPropagation();
      const x = f.current;
      x && (document.fullscreenElement ? document.exitFullscreen() : x.requestFullscreen().catch((E) => {
        console.error(
          `Error attempting to enable full-screen mode: ${E.message}`
        );
      }));
    },
    []
  ), p = S.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: a } });
  }, [t, a]), M = S.useCallback(async () => {
    const v = a ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"];
    if (_ === 0 && i === "gallery" && e.pagination.hasMore && !R && v) {
      d(!0);
      try {
        const x = e.pagination.limit, E = e.pagination.total, V = Math.max(0, E - x), A = await qi(
          V,
          x,
          e.searchQuery
        );
        if (t({ type: "APPEND_IMAGES", payload: A }), A.images.length > 0) {
          const B = A.images[A.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: B.id, mode: "gallery" }
          });
        }
      } catch (x) {
        console.error("Failed to jump to end:", x);
      } finally {
        d(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: a } });
  }, [
    _,
    i,
    e.pagination.hasMore,
    e.pagination.total,
    e.pagination.limit,
    e.searchQuery,
    e.settings,
    t,
    R,
    a
  ]);
  if (S.useEffect(() => {
    i !== "gallery" || r === null || e.isLoading || !e.pagination.hasMore || _ !== -1 && _ >= m.length - 15 && n();
  }, [
    r,
    m.length,
    i,
    e.isLoading,
    e.pagination.hasMore,
    n,
    _
  ]), S.useEffect(() => {
    const v = (E) => {
      r !== null && (E.key === "Escape" ? document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" }) : E.key === "ArrowRight" ? p() : E.key === "ArrowLeft" ? M() : E.key === "f" || E.key === "F" ? T(E) : (E.key === "i" || E.key === "I") && y((V) => !V));
    }, x = () => {
      const E = !!document.fullscreenElement;
      u(E), y(E ? e.settings["fullscreen.show_details_by_default"] : e.settings["viewer.show_details_by_default"]);
    };
    return window.addEventListener("keydown", v), document.addEventListener("fullscreenchange", x), () => {
      window.removeEventListener("keydown", v), document.removeEventListener("fullscreenchange", x);
    };
  }, [
    r,
    t,
    T,
    p,
    M,
    e.settings
  ]), S.useEffect(() => {
    i === "lineage" && r !== null && s.length === 0 && (N(!0), Cc(r).then((v) => {
      t({ type: "SET_LINEAGE", payload: v });
    }).catch((v) => {
      console.error("Failed to fetch lineage:", v);
    }).finally(() => {
      N(!1);
    }));
  }, [i, r, s.length, t]), S.useEffect(() => () => {
    document.fullscreenElement && document.exitFullscreen().catch(() => {
    });
  }, []), S.useEffect(() => {
    if (k && r !== null) {
      const v = document.querySelector(
        ".meld-viewer-thumbnail--active"
      );
      v && v.scrollIntoView({
        behavior: "auto",
        block: "nearest",
        inline: "center"
      });
    }
  }, [r, k]), S.useEffect(() => {
    if (r === null || m.length === 0) return;
    const v = m.findIndex(
      (A) => A.id === r
    );
    if (v === -1) return;
    const x = (A) => `/api/view?filename=${encodeURIComponent(A.filename)}&type=${A.type || "output"}${A.subfolder ? `&subfolder=${encodeURIComponent(A.subfolder)}` : ""}`, E = [
      v + 1,
      v + 2,
      v - 1
    ], V = setTimeout(() => {
      for (const A of E)
        if (A >= 0 && A < m.length) {
          const B = m[A], P = new Image();
          P.src = x(B);
        }
    }, 150);
    return () => clearTimeout(V);
  }, [r, m]), !w) return null;
  const L = `/api/view?filename=${encodeURIComponent(w.filename)}&type=${w.type || "output"}${w.subfolder ? `&subfolder=${encodeURIComponent(w.subfolder)}` : ""}`, z = a ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
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
            onClick: (v) => v.stopPropagation(),
            children: [
              z && /* @__PURE__ */ o.jsxs("div", { className: "meld-viewer-actions", children: [
                !a && /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    className: `meld-viewer-action-btn ${k ? "meld-viewer-action-btn--active" : ""}`,
                    onClick: () => h(!k),
                    type: "button",
                    title: k ? "Hide Thumbnails" : "Show Thumbnails",
                    children: /* @__PURE__ */ o.jsx(Ap, { size: 20 })
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    className: "meld-viewer-action-btn",
                    onClick: () => y(!c),
                    type: "button",
                    title: c ? "Hide Details (I)" : "Show Details (I)",
                    children: /* @__PURE__ */ o.jsx(Op, { size: 20 })
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    className: "meld-viewer-action-btn",
                    onClick: T,
                    type: "button",
                    title: a ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                    children: a ? /* @__PURE__ */ o.jsx(bp, { size: 20 }) : /* @__PURE__ */ o.jsx($p, { size: 20 })
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                    onClick: () => t({ type: "CLOSE_VIEWER" }),
                    type: "button",
                    title: "Close (Esc)",
                    children: /* @__PURE__ */ o.jsx(Ie, { size: 20 })
                  }
                )
              ] }),
              z && /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: "meld-viewer-nav meld-viewer-nav--prev",
                  onClick: M,
                  type: "button",
                  disabled: R,
                  children: /* @__PURE__ */ o.jsx(Lc, { size: 32 })
                }
              ),
              /* @__PURE__ */ o.jsxs("div", { className: "meld-viewer-image-container", children: [
                R && /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ o.jsx(ml, { className: "animate-spin", size: 48 }) }),
                /* @__PURE__ */ o.jsx(
                  "img",
                  {
                    src: L,
                    alt: w.filename,
                    className: `meld-viewer-image ${R ? "meld-viewer-image--loading" : ""}`,
                    fetchpriority: "high"
                  }
                )
              ] }),
              z && /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: "meld-viewer-nav meld-viewer-nav--next",
                  onClick: p,
                  type: "button",
                  children: /* @__PURE__ */ o.jsx(Pc, { size: 32 })
                }
              ),
              c && /* @__PURE__ */ o.jsxs(
                "div",
                {
                  className: `meld-viewer-details-overlay ${a ? "meld-viewer-details-overlay--fullscreen" : ""} ${z ? "" : "meld-viewer-details-overlay--no-icons"}`,
                  children: [
                    (a ? e.settings["fullscreen.details.show_filename"] : e.settings["viewer.details.show_filename"]) && /* @__PURE__ */ o.jsxs("div", { className: "meld-viewer-details-item", children: [
                      /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-details-label", children: "Filename" }),
                      /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-details-value", children: w.filename })
                    ] }),
                    (a ? e.settings["fullscreen.details.show_dimensions"] : e.settings["viewer.details.show_dimensions"]) && w.width && w.height && /* @__PURE__ */ o.jsxs("div", { className: "meld-viewer-details-item", children: [
                      /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-details-label", children: "Dimensions" }),
                      /* @__PURE__ */ o.jsxs("div", { className: "meld-viewer-details-value", children: [
                        w.width,
                        " x ",
                        w.height,
                        " px"
                      ] })
                    ] }),
                    (a ? e.settings["fullscreen.details.show_created_at"] : e.settings["viewer.details.show_created_at"]) && /* @__PURE__ */ o.jsxs("div", { className: "meld-viewer-details-item", children: [
                      /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-details-label", children: "Created At" }),
                      /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-details-value", children: new Date(w.created_at * 1e3).toLocaleString() })
                    ] }),
                    (a ? e.settings["fullscreen.details.show_model_name"] : e.settings["viewer.details.show_model_name"]) && w.model_name && /* @__PURE__ */ o.jsxs("div", { className: "meld-viewer-details-item", children: [
                      /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-details-label", children: "Model" }),
                      /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-details-value", children: w.model_name })
                    ] }),
                    (a ? e.settings["fullscreen.details.show_positive_prompt"] : e.settings["viewer.details.show_positive_prompt"]) && (w.positive_prompt || w.positive) && /* @__PURE__ */ o.jsxs("div", { className: "meld-viewer-details-item", children: [
                      /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-details-label", children: "Positive" }),
                      /* @__PURE__ */ o.jsx(
                        "div",
                        {
                          className: "meld-viewer-details-value meld-viewer-details-value--prompt",
                          style: {
                            "--meld-prompt-max-lines": a ? e.settings["fullscreen.details.max_positive_prompt_lines"] : e.settings["viewer.details.max_positive_prompt_lines"]
                          },
                          children: w.positive_prompt || w.positive
                        }
                      )
                    ] }),
                    (a ? e.settings["fullscreen.details.show_negative_prompt"] : e.settings["viewer.details.show_negative_prompt"]) && (w.negative_prompt || w.negative) && /* @__PURE__ */ o.jsxs("div", { className: "meld-viewer-details-item", children: [
                      /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-details-label", children: "Negative" }),
                      /* @__PURE__ */ o.jsx(
                        "div",
                        {
                          className: "meld-viewer-details-value meld-viewer-details-value--prompt",
                          style: {
                            "--meld-prompt-max-lines": a ? e.settings["fullscreen.details.max_negative_prompt_lines"] : e.settings["viewer.details.max_negative_prompt_lines"]
                          },
                          children: w.negative_prompt || w.negative
                        }
                      )
                    ] }),
                    (a ? e.settings["fullscreen.details.show_tags"] : e.settings["viewer.details.show_tags"]) && w.tags && w.tags.length > 0 && /* @__PURE__ */ o.jsxs("div", { className: "meld-viewer-details-item", children: [
                      /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-details-label", children: "Tags" }),
                      /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-details-tags", children: w.tags.map((v) => /* @__PURE__ */ o.jsx("span", { className: "meld-viewer-details-tag", children: v }, v)) })
                    ] })
                  ]
                }
              ),
              !a && k && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-thumbnails-container", children: /* @__PURE__ */ o.jsxs("div", { className: "meld-viewer-thumbnails", children: [
                C ? /* @__PURE__ */ o.jsx(
                  "div",
                  {
                    style: {
                      padding: "10px",
                      color: "var(--meld-text-secondary)"
                    },
                    children: "Loading lineage..."
                  }
                ) : I.map(({ img: v }) => /* @__PURE__ */ o.jsx(
                  Dc,
                  {
                    thumb: v,
                    viewerImageId: r,
                    currentImage: w,
                    dispatch: t
                  },
                  v.id
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
}, sm = () => {
  const { state: e, dispatch: t } = Ze(), { scanStatus: n } = e, [r, l] = S.useState({
    type: "output",
    subfolder: "",
    custom_path: "",
    recursive: !0,
    auto_link_parent: !0,
    tags: []
  }), [i, s] = S.useState([]), [a, u] = S.useState(!1), [c, y] = S.useState([]), [g, h] = S.useState(""), [k, C] = S.useState(!1), N = S.useCallback(async () => {
    if (r.type !== "custom") {
      u(!0);
      try {
        const v = await ap(r.type, r.subfolder);
        s(v);
      } catch (v) {
        console.error("Failed to load folders:", v);
      } finally {
        u(!1);
      }
    }
  }, [r.type, r.subfolder]);
  S.useEffect(() => {
    N();
  }, [N]);
  const R = S.useCallback(async () => {
    C(!0);
    try {
      const v = await Ks();
      y(v);
    } catch (v) {
      console.error("Failed to fetch tags:", v);
    } finally {
      C(!1);
    }
  }, []);
  S.useEffect(() => {
    R();
  }, [R]);
  const d = S.useMemo(() => c.filter(
    (v) => v.name.toLowerCase().includes(g.toLowerCase()) && !r.tags.includes(v.name)
  ), [c, g, r.tags]), f = (v) => {
    const x = v.trim();
    x && !r.tags.includes(x) && (l({ ...r, tags: [...r.tags, x] }), h(""));
  }, m = (v) => {
    l({ ...r, tags: r.tags.filter((x) => x !== v) });
  }, _ = (v) => {
    v.key === "Enter" && g.trim() && (v.preventDefault(), f(g.trim()));
  }, I = async () => {
    try {
      await up(r), t({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !0,
          isFinished: !1,
          shouldCancel: !1,
          newCount: 0,
          progress: { current: 0, total: 0, phase: "registering" }
        }
      });
    } catch (v) {
      console.error("Failed to start scan:", v), alert(`Failed to start scan: ${v}`);
    }
  }, w = async () => {
    try {
      await cp(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (v) {
      console.error("Failed to cancel scan:", v);
    }
  }, T = (v) => {
    const x = r.subfolder ? `${r.subfolder}/${v}` : v;
    l({ ...r, subfolder: x });
  }, p = () => {
    const v = r.subfolder.split("/");
    v.pop(), l({ ...r, subfolder: v.join("/") });
  }, M = () => {
    n.isFinished && t({ type: "SET_SCAN_STATUS", payload: { isFinished: !1 } }), t({ type: "CLOSE_MODAL" });
  }, L = n.progress.phase === "linking", z = L ? 100 : n.progress.total > 0 ? Math.round(
    n.progress.current / n.progress.total * 100
  ) : 0;
  return _n.createPortal(
    /* @__PURE__ */ o.jsx("div", { className: "meld-modal-overlay", onClick: M, children: /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: "meld-modal-content meld-modal-content--large",
        onClick: (v) => v.stopPropagation(),
        children: [
          /* @__PURE__ */ o.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ o.jsx("h2", { children: "Import Images" }),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: M,
                children: /* @__PURE__ */ o.jsx(Ie, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ o.jsx("div", { className: "meld-modal-body", children: n.isRunning ? /* @__PURE__ */ o.jsxs("div", { className: "meld-scan-progress", children: [
            /* @__PURE__ */ o.jsx("div", { className: "meld-scan-status-text", children: n.shouldCancel ? /* @__PURE__ */ o.jsx("span", { className: "meld-status-cancelling", children: "Cancelling..." }) : L ? /* @__PURE__ */ o.jsx("span", { children: "Linking parent images..." }) : /* @__PURE__ */ o.jsx("span", { children: "Scanning images..." }) }),
            /* @__PURE__ */ o.jsx("div", { className: "meld-progress-container", children: /* @__PURE__ */ o.jsx(
              "div",
              {
                className: "meld-progress-bar",
                style: { width: `${z}%` }
              }
            ) }),
            /* @__PURE__ */ o.jsx("div", { className: "meld-progress-stats", children: L ? /* @__PURE__ */ o.jsxs("span", { children: [
              "Processing relations: ",
              n.progress.current,
              " /",
              " ",
              n.progress.total
            ] }) : /* @__PURE__ */ o.jsxs("span", { children: [
              n.progress.current,
              " / ",
              n.progress.total
            ] }) }),
            /* @__PURE__ */ o.jsxs("div", { className: "meld-scan-actions", children: [
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-secondary",
                  onClick: M,
                  children: "Run in Background"
                }
              ),
              /* @__PURE__ */ o.jsxs(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-danger",
                  disabled: n.shouldCancel,
                  onClick: w,
                  children: [
                    /* @__PURE__ */ o.jsx(Hp, { size: 16 }),
                    "Stop Scan"
                  ]
                }
              )
            ] })
          ] }) : n.isFinished ? /* @__PURE__ */ o.jsxs("div", { className: "meld-scan-finished", children: [
            /* @__PURE__ */ o.jsx("div", { className: "meld-finished-icon", children: /* @__PURE__ */ o.jsx(Dp, { size: 64, color: "var(--meld-success)" }) }),
            /* @__PURE__ */ o.jsx("h3", { children: "Import Completed" }),
            /* @__PURE__ */ o.jsxs("p", { children: [
              "Successfully scanned ",
              /* @__PURE__ */ o.jsx("strong", { children: n.totalCount }),
              " ",
              "images.",
              /* @__PURE__ */ o.jsx("br", {}),
              "(",
              /* @__PURE__ */ o.jsx("strong", { children: n.newCount }),
              " new images were added to database)"
            ] }),
            /* @__PURE__ */ o.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ o.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-primary",
                onClick: M,
                style: { minWidth: "120px" },
                children: "Close"
              }
            ) })
          ] }) : /* @__PURE__ */ o.jsxs("div", { className: "meld-import-container", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "meld-import-sidebar", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "meld-form-group", children: [
                /* @__PURE__ */ o.jsx("label", { htmlFor: "base-location", children: "Base Location" }),
                /* @__PURE__ */ o.jsxs(
                  "select",
                  {
                    id: "base-location",
                    value: r.type,
                    onChange: (v) => l({
                      ...r,
                      type: v.target.value,
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
              r.type === "custom" ? /* @__PURE__ */ o.jsxs("div", { className: "meld-form-group", children: [
                /* @__PURE__ */ o.jsx("label", { htmlFor: "custom-path", children: "Absolute Path" }),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    id: "custom-path",
                    type: "text",
                    placeholder: "C:\\path\\to\\images or /path/to/images",
                    value: r.custom_path,
                    onChange: (v) => l({ ...r, custom_path: v.target.value })
                  }
                )
              ] }) : /* @__PURE__ */ o.jsxs("div", { className: "meld-form-group", children: [
                /* @__PURE__ */ o.jsx("span", { className: "meld-form-label", children: "Current Path" }),
                /* @__PURE__ */ o.jsxs("div", { className: "meld-path-display", children: [
                  /* @__PURE__ */ o.jsxs("span", { children: [
                    r.type,
                    "/"
                  ] }),
                  r.subfolder
                ] })
              ] }),
              /* @__PURE__ */ o.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ o.jsxs("label", { children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.recursive,
                    onChange: (v) => l({ ...r, recursive: v.target.checked })
                  }
                ),
                "Recursive Scan"
              ] }) }),
              /* @__PURE__ */ o.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ o.jsxs("label", { children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.auto_link_parent,
                    onChange: (v) => l({
                      ...r,
                      auto_link_parent: v.target.checked
                    })
                  }
                ),
                "Auto Link Parent"
              ] }) }),
              /* @__PURE__ */ o.jsxs("div", { className: "meld-form-group", children: [
                /* @__PURE__ */ o.jsx("label", { htmlFor: "import-tags", children: "Tags to Add" }),
                /* @__PURE__ */ o.jsx("div", { className: "meld-tag-edit-selected", children: r.tags.length === 0 ? /* @__PURE__ */ o.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : r.tags.map((v) => /* @__PURE__ */ o.jsxs("span", { className: "meld-tag-edit-badge", children: [
                  v,
                  /* @__PURE__ */ o.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-tag-edit-remove",
                      onClick: () => m(v),
                      children: /* @__PURE__ */ o.jsx(Ie, { size: 12 })
                    }
                  )
                ] }, v)) }),
                /* @__PURE__ */ o.jsxs("div", { className: "meld-tag-search-container", children: [
                  /* @__PURE__ */ o.jsx(yn, { size: 14, className: "meld-tag-search-icon" }),
                  /* @__PURE__ */ o.jsx(
                    "input",
                    {
                      id: "import-tags",
                      type: "text",
                      className: "meld-tag-search-input",
                      placeholder: "Search or create tag...",
                      value: g,
                      onChange: (v) => h(v.target.value),
                      onKeyDown: _
                    }
                  ),
                  g.trim() && !r.tags.includes(g.trim()) && /* @__PURE__ */ o.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-tag-add-btn",
                      onClick: () => f(g),
                      children: /* @__PURE__ */ o.jsx(Ys, { size: 14 })
                    }
                  )
                ] }),
                /* @__PURE__ */ o.jsx("div", { className: "meld-tag-suggestions", children: k ? /* @__PURE__ */ o.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : d.length === 0 ? g && /* @__PURE__ */ o.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                  "New tag: ",
                  g
                ] }) : d.map((v) => /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-suggestion-item",
                    onClick: () => f(v.name),
                    children: v.name
                  },
                  v.id
                )) })
              ] }),
              /* @__PURE__ */ o.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ o.jsxs(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-primary",
                  onClick: I,
                  style: { width: "100%" },
                  children: [
                    /* @__PURE__ */ o.jsx(Vp, { size: 16 }),
                    "Start Import"
                  ]
                }
              ) })
            ] }),
            /* @__PURE__ */ o.jsxs("div", { className: "meld-import-browser", children: [
              r.type !== "custom" && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                /* @__PURE__ */ o.jsxs("div", { className: "meld-browser-header", children: [
                  /* @__PURE__ */ o.jsxs(
                    "button",
                    {
                      type: "button",
                      className: "meld-browser-back",
                      disabled: !r.subfolder,
                      onClick: p,
                      children: [
                        /* @__PURE__ */ o.jsx(Lc, { size: 16 }),
                        "Back"
                      ]
                    }
                  ),
                  /* @__PURE__ */ o.jsx("span", { className: "meld-browser-title", children: "Browse Folders" })
                ] }),
                /* @__PURE__ */ o.jsx("div", { className: "meld-folder-list", children: a ? /* @__PURE__ */ o.jsx("div", { className: "meld-browser-loading", children: "Loading..." }) : i.length === 0 ? /* @__PURE__ */ o.jsx("div", { className: "meld-browser-empty", children: "No subfolders found." }) : i.map((v) => /* @__PURE__ */ o.jsxs(
                  "div",
                  {
                    className: "meld-folder-item",
                    onClick: () => T(v),
                    children: [
                      /* @__PURE__ */ o.jsx(ca, { size: 16 }),
                      /* @__PURE__ */ o.jsx("span", { children: v }),
                      /* @__PURE__ */ o.jsx(Pc, { size: 14 })
                    ]
                  },
                  v
                )) })
              ] }),
              r.type === "custom" && /* @__PURE__ */ o.jsxs("div", { className: "meld-browser-info", children: [
                /* @__PURE__ */ o.jsx(ca, { size: 48 }),
                /* @__PURE__ */ o.jsx("p", { children: "Please enter an absolute path in the sidebar." }),
                /* @__PURE__ */ o.jsx(
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
}, om = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = Ze(), [l, i] = S.useState([]), [s, a] = S.useState(!0), [u, c] = S.useState(!1), y = t.images.find((d) => d.id === e), g = S.useCallback(async () => {
    a(!0);
    try {
      const d = await sp(e);
      i(d);
    } catch (d) {
      console.error("Failed to load suggestions:", d);
    } finally {
      a(!1);
    }
  }, [e]);
  S.useEffect(() => {
    g();
  }, [g]);
  const h = async (d) => {
    try {
      await ip(e, d), await r(), n({ type: "CLOSE_MODAL" });
    } catch (f) {
      console.error("Failed to link parent:", f);
    }
  }, k = async (d) => {
    a(!0);
    try {
      const f = await op(d), { id: m } = await Nc({
        filename: f.name,
        subfolder: f.subfolder || "",
        type: f.type || "input"
      });
      await h(m);
    } catch (f) {
      console.error("Failed to upload/register image:", f);
    } finally {
      a(!1);
    }
  }, C = (d) => {
    d.preventDefault(), d.stopPropagation(), c(!1);
    const f = d.dataTransfer.files[0];
    f != null && f.type.startsWith("image/") && k(f);
  };
  if (!y) return null;
  const N = l.filter((d) => d.is_source_match), R = l.filter((d) => !d.is_source_match);
  return _n.createPortal(
    /* @__PURE__ */ o.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: () => n({ type: "CLOSE_MODAL" }),
        children: /* @__PURE__ */ o.jsxs("div", { className: "meld-modal-content", onClick: (d) => d.stopPropagation(), children: [
          /* @__PURE__ */ o.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ o.jsxs("h2", { children: [
              "Select Source for #",
              y.id
            ] }),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: () => n({ type: "CLOSE_MODAL" }),
                children: /* @__PURE__ */ o.jsx(Ie, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "meld-modal-body", children: [
            /* @__PURE__ */ o.jsxs(
              "div",
              {
                className: `meld-drop-zone ${u ? "meld-drop-zone--active" : ""}`,
                onDragEnter: (d) => {
                  d.preventDefault(), d.stopPropagation(), c(!0);
                },
                onDragOver: (d) => {
                  d.preventDefault(), d.stopPropagation(), d.dataTransfer.dropEffect = "copy", c(!0);
                },
                onDragLeave: (d) => {
                  d.preventDefault(), d.stopPropagation(), c(!1);
                },
                onDrop: C,
                children: [
                  /* @__PURE__ */ o.jsx(Gp, { size: 32 }),
                  /* @__PURE__ */ o.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            s ? /* @__PURE__ */ o.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ o.jsxs("div", { className: "meld-suggestions-container", children: [
              N.length > 0 && /* @__PURE__ */ o.jsxs("section", { children: [
                /* @__PURE__ */ o.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ o.jsx("div", { className: "meld-suggestion-grid", children: N.map((d) => /* @__PURE__ */ o.jsxs(
                  "div",
                  {
                    className: "meld-suggestion-card",
                    onClick: () => h(d.id),
                    children: [
                      /* @__PURE__ */ o.jsx(
                        "img",
                        {
                          src: `/api/view?filename=${encodeURIComponent(d.filename)}&type=${d.type || "output"}${d.subfolder ? `&subfolder=${encodeURIComponent(d.subfolder)}` : ""}`,
                          alt: d.filename
                        }
                      ),
                      /* @__PURE__ */ o.jsx("div", { className: "meld-suggestion-info", children: /* @__PURE__ */ o.jsx("span", { className: "meld-suggestion-filename", children: d.filename }) })
                    ]
                  },
                  d.id
                )) })
              ] }),
              /* @__PURE__ */ o.jsxs("section", { children: [
                /* @__PURE__ */ o.jsx("h3", { children: "Visual Matches (pHash)" }),
                R.length > 0 ? /* @__PURE__ */ o.jsx("div", { className: "meld-suggestion-grid", children: R.map((d) => /* @__PURE__ */ o.jsxs(
                  "div",
                  {
                    className: "meld-suggestion-card",
                    onClick: () => h(d.id),
                    children: [
                      /* @__PURE__ */ o.jsx(
                        "img",
                        {
                          src: `/api/view?filename=${encodeURIComponent(d.filename)}&type=${d.type || "output"}${d.subfolder ? `&subfolder=${encodeURIComponent(d.subfolder)}` : ""}`,
                          alt: d.filename
                        }
                      ),
                      /* @__PURE__ */ o.jsxs("div", { className: "meld-suggestion-info", children: [
                        /* @__PURE__ */ o.jsx("span", { className: "meld-suggestion-filename", children: d.filename }),
                        /* @__PURE__ */ o.jsxs("span", { className: "meld-suggestion-distance", children: [
                          "Match:",
                          " ",
                          Math.round((64 - d.distance) / 64 * 100),
                          "%"
                        ] })
                      ] })
                    ]
                  },
                  d.id
                )) }) : /* @__PURE__ */ o.jsx("p", { className: "meld-no-suggestions", children: "No visual matches found." })
              ] })
            ] })
          ] })
        ] })
      }
    ),
    document.body
  );
}, am = () => {
  const { state: e, dispatch: t, refreshFavorites: n } = Ze(), [r, l] = S.useState(e.searchQuery), [i, s] = S.useState([]), [a, u] = S.useState(!1), [c, y] = S.useState([]), [g, h] = S.useState(-1), [k, C] = S.useState(!1), [N, R] = S.useState(null), d = S.useRef(null);
  S.useEffect(() => {
    if (N) {
      const x = setTimeout(() => R(null), 3e3);
      return () => clearTimeout(x);
    }
  }, [N]);
  const f = S.useRef(null), m = S.useRef(e.searchQuery);
  S.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      y([]);
      return;
    }
    !r && !e.searchQuery ? rp().then((x) => {
      y(x);
    }) : y([]);
  }, [
    r,
    e.searchQuery,
    e.settings["search.quick_suggestions"]
  ]), S.useEffect(() => {
    l(e.searchQuery), m.current = e.searchQuery;
  }, [e.searchQuery]), S.useEffect(() => {
    var x;
    (x = d.current) == null || x.focus();
  }, []);
  const _ = S.useCallback(
    (x, E = !0) => {
      m.current !== x && (t({ type: "SET_SEARCH_QUERY", payload: x }), E && u(!1), m.current = x);
    },
    [t]
  );
  S.useEffect(() => {
    const x = setTimeout(async () => {
      if (r === m.current)
        return;
      if (e.settings["search.realtime_search"] && _(r, !1), !e.settings["search.input_suggest"]) {
        s([]), u(!1);
        return;
      }
      const E = r.split(/\s+/), V = E[E.length - 1];
      if (V) {
        const A = V.match(
          /^(pos|neg|model|date|after|before):(.*)$/i
        );
        if (A) {
          const B = A[1].toLowerCase(), P = A[2], F = await np(P, B);
          s(F), u(F.length > 0), h(-1);
        } else
          s([]), u(!1);
      } else
        s([]), u(!1);
    }, 300);
    return () => clearTimeout(x);
  }, [
    r,
    e.settings["search.realtime_search"],
    e.settings["search.input_suggest"],
    _
  ]);
  const I = (x) => {
    x.key === "Enter" ? _(r) : x.key === "Tab" ? a && g >= 0 && (w(i[g]), x.preventDefault()) : x.key === "ArrowDown" ? a && (h((E) => Math.min(E + 1, i.length - 1)), x.preventDefault()) : x.key === "ArrowUp" ? a && (h((E) => Math.max(E - 1, -1)), x.preventDefault()) : x.key === "Escape" && u(!1);
  }, w = (x) => {
    var P;
    const E = r.split(/\s+/);
    E.pop();
    const A = ["date", "after", "before"].includes(x.type) ? x.value : `"${x.value}"`, B = `${[...E, `${x.type}:${A}`].join(" ").trim()} `;
    l(B), _(B), s([]), u(!1), (P = d.current) == null || P.focus();
  }, T = () => {
    l(""), _("");
  }, p = async (x, E, V) => {
    x.stopPropagation();
    const A = `Are you sure you want to delete the favorite "${V}"?`;
    if (window.confirm(A))
      try {
        await aa(E), await n();
      } catch (B) {
        ge.error("Failed to delete favorite", B);
      }
  }, M = async (x, E, V) => {
    x.stopPropagation();
    const A = window.prompt(
      "Enter a new name for this favorite:",
      V
    );
    if (!(A === null || A === V))
      try {
        await pp(E, A || V), await n();
      } catch (B) {
        ge.error("Failed to rename favorite", B);
      }
  }, L = (x, E) => {
    const A = ["date", "after", "before"].includes(x) ? E : `"${E}"`, B = `${x}:${A}`;
    l(B), _(B);
  }, z = async () => {
    if (!e.searchQuery || k) return;
    if (e.favorites.some(
      (E) => E.query === e.searchQuery
    )) {
      const E = e.favorites.find((V) => V.query === e.searchQuery);
      if (E) {
        C(!0);
        try {
          await aa(E.id), await n(), R("Favorite removed.");
        } catch (V) {
          console.error("Failed to delete favorite:", V);
        } finally {
          C(!1);
        }
      }
      return;
    }
    C(!0);
    try {
      await fp(e.searchQuery, e.searchQuery), await n(), R(
        `Favorite added!
You can select favorites when the search query is empty.`
      );
    } catch (E) {
      console.error("Failed to save favorite:", E);
    } finally {
      C(!1);
    }
  }, v = (x) => {
    switch (x) {
      case "tag":
        return /* @__PURE__ */ o.jsx(Sn, { size: 12 });
      case "model":
        return /* @__PURE__ */ o.jsx(Mp, { size: 12 });
      case "pos":
      case "neg":
        return /* @__PURE__ */ o.jsx(Bp, { size: 12 });
      case "date":
      case "after":
      case "before":
        return /* @__PURE__ */ o.jsx(zp, { size: 12 });
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
              N && /* @__PURE__ */ o.jsx(
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
                  children: N
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
                        ref: d,
                        type: "text",
                        value: r,
                        onChange: (x) => l(x.target.value),
                        onKeyDown: I,
                        onBlur: () => setTimeout(() => u(!1), 200),
                        onFocus: () => {
                          if (r === m.current) return;
                          const x = r.split(/\s+/), E = x[x.length - 1];
                          E != null && E.match(/^(pos|neg|model|date|after|before):/i) && u(!0);
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
                        onClick: z,
                        disabled: k,
                        title: e.favorites.some((x) => x.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                          da,
                          {
                            size: 16,
                            color: e.favorites.some((x) => x.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((x) => x.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
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
                        children: /* @__PURE__ */ o.jsx(Ie, { size: 16, color: "var(--meld-text-secondary)" })
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
                  children: i.map((x, E) => /* @__PURE__ */ o.jsx(
                    "div",
                    {
                      onMouseDown: (V) => {
                        V.preventDefault(), w(x);
                      },
                      onMouseEnter: () => h(E),
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 14px",
                        cursor: "pointer",
                        backgroundColor: E === g ? "var(--comfy-menu-bg, #333)" : "transparent",
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
                                children: v(x.type)
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
                                children: x.type
                              }
                            ),
                            /* @__PURE__ */ o.jsx(
                              "span",
                              {
                                style: {
                                  color: "var(--meld-text-color)",
                                  fontSize: "14px"
                                },
                                children: x.value
                              }
                            )
                          ]
                        }
                      )
                    },
                    `${x.type}:${x.value}`
                  ))
                }
              )
            ]
          }
        ),
        !r && !e.searchQuery && c.length > 0 && /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "meld-search-quick-suggestions",
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              padding: "0 4px"
            },
            children: c.map((x) => /* @__PURE__ */ o.jsxs(
              "button",
              {
                type: "button",
                onClick: () => L(x.type, x.value),
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
                onMouseEnter: (E) => {
                  E.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", E.currentTarget.style.borderColor = "var(--comfy-menu-border, #444)", E.currentTarget.style.color = "var(--meld-text-color)";
                },
                onMouseLeave: (E) => {
                  E.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", E.currentTarget.style.borderColor = "var(--comfy-menu-border, #333)", E.currentTarget.style.color = "var(--meld-text-color)";
                },
                children: [
                  /* @__PURE__ */ o.jsx(
                    "span",
                    {
                      style: {
                        display: "flex",
                        color: "var(--meld-text-secondary)"
                      },
                      children: v(x.type)
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
                      children: x.type
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
                      children: x.value
                    }
                  )
                ]
              },
              `${x.type}:${x.value}`
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
                    /* @__PURE__ */ o.jsx(da, { size: 12, fill: "var(--meld-text-secondary)" }),
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
                  children: e.favorites.map((x) => /* @__PURE__ */ o.jsxs(
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
                        l(x.query), _(x.query);
                      },
                      onMouseEnter: (E) => {
                        E.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", E.currentTarget.style.borderColor = "var(--meld-accent-color)", E.currentTarget.style.color = "var(--meld-text-color)";
                      },
                      onMouseLeave: (E) => {
                        E.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", E.currentTarget.style.borderColor = "var(--comfy-menu-border, #333)", E.currentTarget.style.color = "var(--meld-text-color)";
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
                                  children: x.name
                                }
                              ),
                              x.name !== x.query && /* @__PURE__ */ o.jsx(
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
                                  children: x.query
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
                                  onClick: (E) => {
                                    E.stopPropagation(), M(E, x.id, x.name);
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
                                  onMouseEnter: (E) => {
                                    E.currentTarget.style.color = "var(--meld-accent-color)", E.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(68, 136, 255, 0.1))";
                                  },
                                  onMouseLeave: (E) => {
                                    E.currentTarget.style.color = "var(--meld-text-secondary)", E.currentTarget.style.backgroundColor = "transparent";
                                  },
                                  title: "Rename favorite",
                                  children: /* @__PURE__ */ o.jsx(Mc, { size: 14 })
                                }
                              ),
                              /* @__PURE__ */ o.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: (E) => {
                                    E.stopPropagation(), p(E, x.id, x.name);
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
                                  onMouseEnter: (E) => {
                                    E.currentTarget.style.color = "var(--meld-danger-color)", E.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,0,0,0.1))";
                                  },
                                  onMouseLeave: (E) => {
                                    E.currentTarget.style.color = "var(--meld-text-secondary)", E.currentTarget.style.backgroundColor = "transparent";
                                  },
                                  title: "Delete favorite",
                                  children: /* @__PURE__ */ o.jsx(Ml, { size: 14 })
                                }
                              )
                            ]
                          }
                        )
                      ]
                    },
                    x.id
                  ))
                }
              )
            ]
          }
        )
      ]
    }
  );
}, um = () => {
  const { state: e, dispatch: t, updateSetting: n } = Ze(), [r, l] = S.useState("General"), [i, s] = S.useState({
    ...e.settings
  }), [a, u] = S.useState(
    e.settings["gallery.page_size"].toString()
  ), [c, y] = S.useState(e.settings["viewer.thumbnail_window_size"].toString()), [g, h] = S.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [k, C] = S.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    N,
    R
  ] = S.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    d,
    f
  ] = S.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), m = [
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
    const p = Object.keys(i).filter((M) => i[M] !== e.settings[M]);
    if (p.length > 0)
      for (const M of p)
        await n(M, i[M]);
    t({ type: "CLOSE_MODAL" });
  }, I = (p, M) => {
    s((L) => ({
      ...L,
      [p]: !M
    }));
  }, w = (p, M, L, z) => {
    p === "gallery.page_size" ? u(M) : p === "viewer.thumbnail_window_size" ? y(M) : p === "viewer.details.max_positive_prompt_lines" ? h(M) : p === "viewer.details.max_negative_prompt_lines" ? C(M) : p === "fullscreen.details.max_positive_prompt_lines" ? R(M) : p === "fullscreen.details.max_negative_prompt_lines" && f(M);
    const v = Number.parseInt(M, 10);
    if (!Number.isNaN(v)) {
      let x = v;
      L !== void 0 && x < L && (x = L), z !== void 0 && x > z && (x = z), s((E) => ({
        ...E,
        [p]: x
      }));
    }
  }, T = m.filter(
    (p) => p.category === r
  );
  return _n.createPortal(
    /* @__PURE__ */ o.jsx("div", { className: "meld-modal-overlay", onClick: _, children: /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: "meld-modal-content meld-settings-modal",
        onClick: (p) => p.stopPropagation(),
        children: [
          /* @__PURE__ */ o.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ o.jsx("h2", { children: "Settings" }),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: _,
                children: /* @__PURE__ */ o.jsx(Ie, { size: 20 })
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
            /* @__PURE__ */ o.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ o.jsx("div", { className: "meld-settings-list", children: T.map((p) => {
              var M;
              return /* @__PURE__ */ o.jsxs("div", { className: "meld-settings-item", children: [
                /* @__PURE__ */ o.jsxs("div", { className: "meld-settings-item__info", children: [
                  /* @__PURE__ */ o.jsx("div", { className: "meld-settings-item__label", children: p.label }),
                  /* @__PURE__ */ o.jsx("div", { className: "meld-settings-item__description", children: p.description })
                ] }),
                /* @__PURE__ */ o.jsxs("div", { className: "meld-settings-item__control", children: [
                  p.type === "boolean" && /* @__PURE__ */ o.jsxs("label", { className: "meld-switch", children: [
                    /* @__PURE__ */ o.jsx(
                      "input",
                      {
                        type: "checkbox",
                        checked: !!i[p.key],
                        onChange: () => I(
                          p.key,
                          !!i[p.key]
                        )
                      }
                    ),
                    /* @__PURE__ */ o.jsx("span", { className: "meld-switch__slider" })
                  ] }),
                  p.type === "number" && /* @__PURE__ */ o.jsx(
                    "input",
                    {
                      type: "number",
                      className: "meld-number-input",
                      value: p.key === "gallery.page_size" ? a : p.key === "viewer.thumbnail_window_size" ? c : p.key === "viewer.details.max_positive_prompt_lines" ? g : p.key === "viewer.details.max_negative_prompt_lines" ? k : p.key === "fullscreen.details.max_positive_prompt_lines" ? N : p.key === "fullscreen.details.max_negative_prompt_lines" ? d : i[p.key],
                      min: p.min,
                      max: p.max,
                      onChange: (L) => w(
                        p.key,
                        L.target.value,
                        p.min,
                        p.max
                      ),
                      onBlur: () => {
                        p.key === "gallery.page_size" ? u(
                          i["gallery.page_size"].toString()
                        ) : p.key === "viewer.thumbnail_window_size" ? y(
                          i["viewer.thumbnail_window_size"].toString()
                        ) : p.key === "viewer.details.max_positive_prompt_lines" ? h(
                          i["viewer.details.max_positive_prompt_lines"].toString()
                        ) : p.key === "viewer.details.max_negative_prompt_lines" ? C(
                          i["viewer.details.max_negative_prompt_lines"].toString()
                        ) : p.key === "fullscreen.details.max_positive_prompt_lines" ? R(
                          i["fullscreen.details.max_positive_prompt_lines"].toString()
                        ) : p.key === "fullscreen.details.max_negative_prompt_lines" && f(
                          i["fullscreen.details.max_negative_prompt_lines"].toString()
                        );
                      }
                    }
                  ),
                  p.type === "select" && /* @__PURE__ */ o.jsx(
                    "select",
                    {
                      className: "meld-select",
                      value: i[p.key],
                      onChange: (L) => s((z) => ({
                        ...z,
                        [p.key]: L.target.value
                      })),
                      children: (M = p.options) == null ? void 0 : M.map((L) => /* @__PURE__ */ o.jsx("option", { value: L.value, children: L.label }, L.value))
                    }
                  )
                ] })
              ] }, p.key);
            }) }) })
          ] })
        ]
      }
    ) }),
    document.body
  );
}, cm = ({
  imageIds: e,
  initialTags: t,
  onClose: n
}) => {
  const { refreshImages: r } = Ze(), [l, i] = S.useState([]), [s, a] = S.useState(t), [u, c] = S.useState(""), [y, g] = S.useState(!0), [h, k] = S.useState(!1), C = S.useRef(null), N = e.length > 1, R = S.useCallback(async () => {
    g(!0);
    try {
      const w = await Ks();
      i(w);
    } catch (w) {
      console.error("Failed to fetch tags:", w);
    } finally {
      g(!1);
    }
  }, []);
  S.useEffect(() => {
    R();
  }, [R]), S.useEffect(() => {
    C.current && C.current.focus();
  }, []);
  const d = S.useMemo(() => l.filter(
    (w) => w.name.toLowerCase().includes(u.toLowerCase()) && !s.includes(w.name)
  ), [l, u, s]), f = (w) => {
    const T = w.trim();
    T && !s.includes(T) && (a([...s, T]), c(""));
  }, m = (w) => {
    a(s.filter((T) => T !== w));
  }, _ = async () => {
    k(!0);
    try {
      if (N) {
        const w = s.filter((p) => !t.includes(p)), T = t.filter(
          (p) => !s.includes(p)
        );
        await vp(e, w, T);
      } else
        await yp(e[0], s);
      await r(), n();
    } catch (w) {
      console.error("Failed to update tags:", w), alert("Failed to update tags.");
    } finally {
      k(!1);
    }
  }, I = (w) => {
    w.key === "Enter" && u.trim() ? (w.preventDefault(), f(u.trim())) : w.key === "Escape" && n();
  };
  return /* @__PURE__ */ o.jsx("div", { className: "meld-modal-overlay", onClick: n, children: /* @__PURE__ */ o.jsxs("div", { className: "meld-modal-content", onClick: (w) => w.stopPropagation(), children: [
    /* @__PURE__ */ o.jsxs("div", { className: "meld-modal-header", children: [
      /* @__PURE__ */ o.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ o.jsx(Sn, { size: 18 }),
        /* @__PURE__ */ o.jsx("h3", { style: { margin: 0 }, children: N ? `Edit Tags (${e.length} images)` : "Edit Tags" })
      ] }),
      /* @__PURE__ */ o.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ o.jsx(Ie, { size: 20 }) })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "meld-modal-body", children: [
      N && /* @__PURE__ */ o.jsx(
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
        /* @__PURE__ */ o.jsx("div", { className: "meld-tag-edit-label", children: N ? "Collective Tags" : "Selected Tags" }),
        /* @__PURE__ */ o.jsx("div", { className: "meld-tag-edit-selected", children: s.length === 0 ? /* @__PURE__ */ o.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : s.map((w) => /* @__PURE__ */ o.jsxs("span", { className: "meld-tag-edit-badge", children: [
          w,
          /* @__PURE__ */ o.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-edit-remove",
              onClick: () => m(w),
              children: /* @__PURE__ */ o.jsx(Ie, { size: 12 })
            }
          )
        ] }, w)) })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "meld-tag-edit-section", children: [
        /* @__PURE__ */ o.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
        /* @__PURE__ */ o.jsxs("div", { className: "meld-tag-search-container", children: [
          /* @__PURE__ */ o.jsx(yn, { size: 14, className: "meld-tag-search-icon" }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              ref: C,
              type: "text",
              className: "meld-tag-search-input",
              placeholder: "Search or create new tag...",
              value: u,
              onChange: (w) => c(w.target.value),
              onKeyDown: I
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
        /* @__PURE__ */ o.jsx("div", { className: "meld-tag-suggestions", children: y ? /* @__PURE__ */ o.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : d.length === 0 ? u ? /* @__PURE__ */ o.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ o.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : d.map((w) => /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            className: "meld-tag-suggestion-item",
            onClick: () => f(w.name),
            children: w.name
          },
          w.id
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
          onClick: _,
          disabled: h,
          children: h ? "Saving..." : "Save Changes"
        }
      )
    ] })
  ] }) });
}, dm = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = S.useState([]), [l, i] = S.useState(!0), [s, a] = S.useState(""), [u, c] = S.useState(""), [y, g] = S.useState(!1), [h, k] = S.useState(null), [C, N] = S.useState(""), [R, d] = S.useState(!1), f = S.useRef(null), m = S.useCallback(async () => {
    i(!0);
    try {
      const z = await Ks();
      r(z);
    } catch (z) {
      console.error("Failed to fetch tags:", z);
    } finally {
      i(!1);
    }
  }, []);
  S.useEffect(() => {
    m();
  }, [m]), S.useEffect(() => {
    h !== null && f.current && (f.current.focus(), f.current.select());
  }, [h]);
  const _ = async (z) => {
    z.preventDefault();
    const v = u.trim();
    if (!(!v || y)) {
      if (n.some((x) => x.name.toLowerCase() === v.toLowerCase())) {
        alert(`Tag "${v}" already exists.`);
        return;
      }
      g(!0);
      try {
        await mp(v), c(""), await m();
      } catch (x) {
        console.error("Failed to add tag:", x);
      } finally {
        g(!1);
      }
    }
  }, I = async (z, v) => {
    if (confirm(`Are you sure you want to delete tag "${v}"?`))
      try {
        await hp(z), await m();
      } catch (x) {
        console.error("Failed to delete tag:", x);
      }
  }, w = (z) => {
    k(z.id), N(z.name);
  }, T = () => {
    k(null), N("");
  }, p = async (z) => {
    z.preventDefault();
    const v = C.trim();
    if (!v || h === null || R) return;
    const x = n.find((E) => E.id === h);
    if (x && x.name === v) {
      T();
      return;
    }
    if (n.some(
      (E) => E.id !== h && E.name.toLowerCase() === v.toLowerCase()
    )) {
      alert(`Tag "${v}" already exists.`);
      return;
    }
    d(!0);
    try {
      await gp(h, v), T(), await m();
    } catch (E) {
      console.error("Failed to rename tag:", E), alert(E instanceof Error ? E.message : "Failed to rename tag");
    } finally {
      d(!1);
    }
  }, M = (z) => {
    t(`tag:${z}`);
  }, L = S.useMemo(() => n.filter(
    (z) => z.name.toLowerCase().includes(s.toLowerCase())
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
          children: /* @__PURE__ */ o.jsx(Ie, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ o.jsxs("form", { className: "meld-tag-add-form", onSubmit: _, children: [
        /* @__PURE__ */ o.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: u,
            onChange: (z) => c(z.target.value),
            disabled: y
          }
        ),
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !u.trim() || y,
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
            onChange: (z) => a(z.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ o.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ o.jsx("div", { className: "meld-tag-list", children: L.length === 0 ? /* @__PURE__ */ o.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : L.map((z) => /* @__PURE__ */ o.jsx("div", { className: "meld-tag-item", children: h === z.id ? /* @__PURE__ */ o.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: p,
          children: [
            /* @__PURE__ */ o.jsx(
              "input",
              {
                type: "text",
                ref: f,
                className: "meld-tag-rename-input",
                value: C,
                onChange: (v) => N(v.target.value),
                onKeyDown: (v) => v.key === "Escape" && T()
              }
            ),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: R || !C.trim(),
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
                disabled: R,
                children: /* @__PURE__ */ o.jsx(Ie, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx("span", { className: "meld-tag-item__name", children: z.name }),
        /* @__PURE__ */ o.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ o.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => M(z.name),
              children: /* @__PURE__ */ o.jsx(yn, { size: 14 })
            }
          ),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => w(z),
              children: /* @__PURE__ */ o.jsx(Mc, { size: 14 })
            }
          ),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => I(z.id, z.name),
              children: /* @__PURE__ */ o.jsx(Ml, { size: 14 })
            }
          )
        ] })
      ] }) }, z.id)) })
    ] })
  ] });
}, fm = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r } = Ze(), [l, i] = S.useState("gallery"), [s, a] = S.useState(""), u = e.searchQuery.trim() !== "", c = S.useRef(null), y = S.useRef(null), g = S.useMemo(
    () => e.images.filter(
      (h) => h.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && h.has_children)
    ),
    [e.images, e.settings]
  );
  return S.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && g.length === 0 && (ge.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    g.length,
    r
  ]), ge.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: g.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), S.useEffect(() => {
    const h = new IntersectionObserver(
      (C) => {
        C[0].isIntersecting && !e.isLoading && e.pagination.hasMore && (ge.log(
          "GalleryPanel: Load more triggered via IntersectionObserver"
        ), r());
      },
      { threshold: 0, rootMargin: "800px" }
    ), k = c.current;
    return k && h.observe(k), () => {
      k && h.unobserve(k);
    };
  }, [r, e.isLoading, e.pagination.hasMore]), S.useEffect(() => {
    const h = e.viewerImageId ?? y.current;
    if (h !== null && g.some((C) => C.id === h)) {
      const C = document.querySelector(
        `[data-image-id="${h}"]`
      );
      C && (C.scrollIntoView({ behavior: "smooth", block: "nearest" }), e.viewerImageId === null && (y.current = null));
    }
    e.viewerImageId !== null && (y.current = e.viewerImageId);
  }, [e.viewerImageId, g]), /* @__PURE__ */ o.jsxs("div", { className: "meld-gallery", children: [
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
            children: /* @__PURE__ */ o.jsx(Fp, { size: 14 })
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
            children: /* @__PURE__ */ o.jsx(Wp, { size: 14 })
          }
        )
      ] }),
      l === "search" && /* @__PURE__ */ o.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ o.jsx(am, {}) })
    ] }),
    e.error && /* @__PURE__ */ o.jsx("div", { className: "meld-gallery__error", children: e.error }),
    l === "tags" ? /* @__PURE__ */ o.jsx(
      dm,
      {
        onClose: () => i("gallery"),
        onSearch: (h) => {
          t({ type: "SET_SEARCH_QUERY", payload: h }), i("search");
        }
      }
    ) : e.isLoading && g.length === 0 ? /* @__PURE__ */ o.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : g.length === 0 ? /* @__PURE__ */ o.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx("div", { className: "meld-gallery__list", children: g.map((h) => /* @__PURE__ */ o.jsx("div", { "data-image-id": h.id, children: /* @__PURE__ */ o.jsx(tm, { height: 150, children: /* @__PURE__ */ o.jsx(lm, { image: h }) }) }, h.id)) }),
      /* @__PURE__ */ o.jsxs(
        "div",
        {
          ref: c,
          className: "meld-gallery__load-more",
          style: { height: "20px", margin: "20px 0", textAlign: "center" },
          children: [
            e.isLoading && /* @__PURE__ */ o.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
            !e.pagination.hasMore && g.length > 0 && /* @__PURE__ */ o.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ o.jsx(nm, {}),
    e.viewerImageId !== null && /* @__PURE__ */ o.jsx(im, {}),
    e.activeModal.type === "parent_selection" && /* @__PURE__ */ o.jsx(om, { imageId: e.activeModal.imageId }),
    e.activeModal.type === "import" && /* @__PURE__ */ o.jsx(sm, {}),
    e.activeModal.type === "settings" && /* @__PURE__ */ o.jsx(um, {}),
    e.activeModal.type === "tag_edit" && /* @__PURE__ */ o.jsx(
      cm,
      {
        imageIds: e.activeModal.imageIds,
        initialTags: e.activeModal.tags,
        onClose: () => t({ type: "CLOSE_MODAL" })
      }
    ),
    e.activeModal.type === "delete_confirm" && /* @__PURE__ */ o.jsx(
      rm,
      {
        imageIds: e.activeModal.imageIds,
        hasLineage: e.activeModal.hasLineage
      }
    )
  ] });
};
fa.registerExtension({
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
zl.href = "/extensions/ComfyUI-Meld-Flow/js/style.css";
document.head.appendChild(zl);
let Pr = null, $e = null;
fa.registerExtension({
  name: "ComfyUI.MeldNexus",
  async beforeRegisterNodeDef(e, t, n) {
    if (t.name === "MeldNexusSaveImage") {
      const r = e.prototype.onExecuted;
      e.prototype.onExecuted = function(...l) {
        r == null || r.apply(this, l);
        const i = n.ui.meldNexus;
        i != null && i.isVisible() && i.refresh();
      };
    }
  },
  async setup(e) {
    var t;
    try {
      const n = await Ec();
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
      }, Q.addEventListener("meld-nexus-image-saved", () => {
        var n;
        (n = e.ui.meldNexus) == null || n.refresh();
      }), Q.addEventListener("meld-nexus-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-nexus-scan-progress", { detail: n.detail })
        );
      }), Q.addEventListener("meld-nexus-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-nexus-scan-finished", { detail: n.detail })
        ), (r = e.ui.meldNexus) == null || r.refresh(), console.log("Meld Nexus: Import completed.");
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
                  await Nc({
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
          id: "meld-flow-gallery",
          icon: "meld-nexus-icon",
          title: "Nexus",
          tooltip: "Meld Flow: Nexus",
          type: "custom",
          render: (n) => {
            ge.log("MeldNexus: render called", {
              el: n,
              galleryRoot: Pr,
              galleryContainer: $e
            }), $e || (ge.log(
              "MeldNexus: galleryContainer not found, creating new one"
            ), $e = document.createElement("div"), $e.id = "meld-flow-gallery-container", $e.style.height = "100%", $e.style.width = "100%", $e.style.display = "flex", $e.style.flexDirection = "column"), n.contains($e) || (ge.log("MeldNexus: Appending galleryContainer to el"), n.appendChild($e)), Pr ? ge.log(
              "MeldNexus: Gallery root already exists, React should handle re-render if needed"
            ) : (ge.log("MeldNexus: Creating new gallery root"), Pr = kc($e), Pr.render(
              qs.createElement(
                em,
                null,
                qs.createElement(fm)
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
