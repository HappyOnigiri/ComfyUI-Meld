import { api as Q } from "../../../scripts/api.js";
import { app as po } from "../../../scripts/app.js";
function Uc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var mo = { exports: {} }, V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dr = Symbol.for("react.element"), Vc = Symbol.for("react.portal"), Qc = Symbol.for("react.fragment"), Wc = Symbol.for("react.strict_mode"), Hc = Symbol.for("react.profiler"), Bc = Symbol.for("react.provider"), Gc = Symbol.for("react.context"), Kc = Symbol.for("react.forward_ref"), Yc = Symbol.for("react.suspense"), Xc = Symbol.for("react.memo"), Zc = Symbol.for("react.lazy"), qs = Symbol.iterator;
function Jc(e) {
  return e === null || typeof e != "object" ? null : (e = qs && e[qs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ho = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, go = Object.assign, yo = {};
function Sn(e, t, n) {
  this.props = e, this.context = t, this.refs = yo, this.updater = n || ho;
}
Sn.prototype.isReactComponent = {};
Sn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Sn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function vo() {
}
vo.prototype = Sn.prototype;
function rs(e, t, n) {
  this.props = e, this.context = t, this.refs = yo, this.updater = n || ho;
}
var ls = rs.prototype = new vo();
ls.constructor = rs;
go(ls, Sn.prototype);
ls.isPureReactComponent = !0;
var ea = Array.isArray, wo = Object.prototype.hasOwnProperty, is = { current: null }, xo = { key: !0, ref: !0, __self: !0, __source: !0 };
function _o(e, t, n) {
  var r, l = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) wo.call(t, r) && !xo.hasOwnProperty(r) && (l[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = n;
  else if (1 < o) {
    for (var u = Array(o), c = 0; c < o; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in o = e.defaultProps, o) l[r] === void 0 && (l[r] = o[r]);
  return { $$typeof: dr, type: e, key: i, ref: s, props: l, _owner: is.current };
}
function qc(e, t) {
  return { $$typeof: dr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ss(e) {
  return typeof e == "object" && e !== null && e.$$typeof === dr;
}
function ed(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var ta = /\/+/g;
function Ol(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? ed("" + e.key) : t.toString(36);
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
        case dr:
        case Vc:
          s = !0;
      }
  }
  if (s) return s = e, l = l(s), e = r === "" ? "." + Ol(s, 0) : r, ea(l) ? (n = "", e != null && (n = e.replace(ta, "$&/") + "/"), Rr(l, t, n, "", function(c) {
    return c;
  })) : l != null && (ss(l) && (l = qc(l, n + (!l.key || s && s.key === l.key ? "" : ("" + l.key).replace(ta, "$&/") + "/") + e)), t.push(l)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", ea(e)) for (var o = 0; o < e.length; o++) {
    i = e[o];
    var u = r + Ol(i, o);
    s += Rr(i, t, n, u, l);
  }
  else if (u = Jc(e), typeof u == "function") for (e = u.call(e), o = 0; !(i = e.next()).done; ) i = i.value, u = r + Ol(i, o++), s += Rr(i, t, n, u, l);
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
function td(e) {
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
var we = { current: null }, Or = { transition: null }, nd = { ReactCurrentDispatcher: we, ReactCurrentBatchConfig: Or, ReactCurrentOwner: is };
function So() {
  throw Error("act(...) is not supported in production builds of React.");
}
V.Children = { map: yr, forEach: function(e, t, n) {
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
V.Component = Sn;
V.Fragment = Qc;
V.Profiler = Hc;
V.PureComponent = rs;
V.StrictMode = Wc;
V.Suspense = Yc;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nd;
V.act = So;
V.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = go({}, e.props), l = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = is.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
    for (u in t) wo.call(t, u) && !xo.hasOwnProperty(u) && (r[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    o = Array(u);
    for (var c = 0; c < u; c++) o[c] = arguments[c + 2];
    r.children = o;
  }
  return { $$typeof: dr, type: e.type, key: l, ref: i, props: r, _owner: s };
};
V.createContext = function(e) {
  return e = { $$typeof: Gc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Bc, _context: e }, e.Consumer = e;
};
V.createElement = _o;
V.createFactory = function(e) {
  var t = _o.bind(null, e);
  return t.type = e, t;
};
V.createRef = function() {
  return { current: null };
};
V.forwardRef = function(e) {
  return { $$typeof: Kc, render: e };
};
V.isValidElement = ss;
V.lazy = function(e) {
  return { $$typeof: Zc, _payload: { _status: -1, _result: e }, _init: td };
};
V.memo = function(e, t) {
  return { $$typeof: Xc, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function(e) {
  var t = Or.transition;
  Or.transition = {};
  try {
    e();
  } finally {
    Or.transition = t;
  }
};
V.unstable_act = So;
V.useCallback = function(e, t) {
  return we.current.useCallback(e, t);
};
V.useContext = function(e) {
  return we.current.useContext(e);
};
V.useDebugValue = function() {
};
V.useDeferredValue = function(e) {
  return we.current.useDeferredValue(e);
};
V.useEffect = function(e, t) {
  return we.current.useEffect(e, t);
};
V.useId = function() {
  return we.current.useId();
};
V.useImperativeHandle = function(e, t, n) {
  return we.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function(e, t) {
  return we.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function(e, t) {
  return we.current.useLayoutEffect(e, t);
};
V.useMemo = function(e, t) {
  return we.current.useMemo(e, t);
};
V.useReducer = function(e, t, n) {
  return we.current.useReducer(e, t, n);
};
V.useRef = function(e) {
  return we.current.useRef(e);
};
V.useState = function(e) {
  return we.current.useState(e);
};
V.useSyncExternalStore = function(e, t, n) {
  return we.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function() {
  return we.current.useTransition();
};
V.version = "18.3.1";
mo.exports = V;
var x = mo.exports;
const na = /* @__PURE__ */ Uc(x);
var ko = { exports: {} }, Me = {}, Eo = { exports: {} }, Co = {};
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
  function t(C, P) {
    var F = C.length;
    C.push(P);
    e: for (; 0 < F; ) {
      var A = F - 1 >>> 1, B = C[A];
      if (0 < l(B, P)) C[A] = P, C[F] = B, F = A;
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var P = C[0], F = C.pop();
    if (F !== P) {
      C[0] = F;
      e: for (var A = 0, B = C.length, Bt = B >>> 1; A < Bt; ) {
        var Lt = 2 * (A + 1) - 1, Rl = C[Lt], Mt = Lt + 1, gr = C[Mt];
        if (0 > l(Rl, F)) Mt < B && 0 > l(gr, Rl) ? (C[A] = gr, C[Mt] = F, A = Mt) : (C[A] = Rl, C[Lt] = F, A = Lt);
        else if (Mt < B && 0 > l(gr, F)) C[A] = gr, C[Mt] = F, A = Mt;
        else break e;
      }
    }
    return P;
  }
  function l(C, P) {
    var F = C.sortIndex - P.sortIndex;
    return F !== 0 ? F : C.id - P.id;
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
  var u = [], c = [], g = 1, h = null, m = 3, w = !1, S = !1, j = !1, b = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(C) {
    for (var P = n(c); P !== null; ) {
      if (P.callback === null) r(c);
      else if (P.startTime <= C) r(c), P.sortIndex = P.expirationTime, t(u, P);
      else break;
      P = n(c);
    }
  }
  function k(C) {
    if (j = !1, p(C), !S) if (n(u) !== null) S = !0, U(z);
    else {
      var P = n(c);
      P !== null && D(k, P.startTime - C);
    }
  }
  function z(C, P) {
    S = !1, j && (j = !1, d(T), T = -1), w = !0;
    var F = m;
    try {
      for (p(P), h = n(u); h !== null && (!(h.expirationTime > P) || C && !y()); ) {
        var A = h.callback;
        if (typeof A == "function") {
          h.callback = null, m = h.priorityLevel;
          var B = A(h.expirationTime <= P);
          P = e.unstable_now(), typeof B == "function" ? h.callback = B : h === n(u) && r(u), p(P);
        } else r(u);
        h = n(u);
      }
      if (h !== null) var Bt = !0;
      else {
        var Lt = n(c);
        Lt !== null && D(k, Lt.startTime - P), Bt = !1;
      }
      return Bt;
    } finally {
      h = null, m = F, w = !1;
    }
  }
  var _ = !1, M = null, T = -1, E = 5, R = -1;
  function y() {
    return !(e.unstable_now() - R < E);
  }
  function N() {
    if (M !== null) {
      var C = e.unstable_now();
      R = C;
      var P = !0;
      try {
        P = M(!0, C);
      } finally {
        P ? v() : (_ = !1, M = null);
      }
    } else _ = !1;
  }
  var v;
  if (typeof f == "function") v = function() {
    f(N);
  };
  else if (typeof MessageChannel < "u") {
    var I = new MessageChannel(), $ = I.port2;
    I.port1.onmessage = N, v = function() {
      $.postMessage(null);
    };
  } else v = function() {
    b(N, 0);
  };
  function U(C) {
    M = C, _ || (_ = !0, v());
  }
  function D(C, P) {
    T = b(function() {
      C(e.unstable_now());
    }, P);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    S || w || (S = !0, U(z));
  }, e.unstable_forceFrameRate = function(C) {
    0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : E = 0 < C ? Math.floor(1e3 / C) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(C) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var P = 3;
        break;
      default:
        P = m;
    }
    var F = m;
    m = P;
    try {
      return C();
    } finally {
      m = F;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(C, P) {
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
    var F = m;
    m = C;
    try {
      return P();
    } finally {
      m = F;
    }
  }, e.unstable_scheduleCallback = function(C, P, F) {
    var A = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? A + F : A) : F = A, C) {
      case 1:
        var B = -1;
        break;
      case 2:
        B = 250;
        break;
      case 5:
        B = 1073741823;
        break;
      case 4:
        B = 1e4;
        break;
      default:
        B = 5e3;
    }
    return B = F + B, C = { id: g++, callback: P, priorityLevel: C, startTime: F, expirationTime: B, sortIndex: -1 }, F > A ? (C.sortIndex = F, t(c, C), n(u) === null && C === n(c) && (j ? (d(T), T = -1) : j = !0, D(k, F - A))) : (C.sortIndex = B, t(u, C), S || w || (S = !0, U(z))), C;
  }, e.unstable_shouldYield = y, e.unstable_wrapCallback = function(C) {
    var P = m;
    return function() {
      var F = m;
      m = P;
      try {
        return C.apply(this, arguments);
      } finally {
        m = F;
      }
    };
  };
})(Co);
Eo.exports = Co;
var rd = Eo.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ld = x, Le = rd;
function L(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var No = /* @__PURE__ */ new Set(), Gn = {};
function Wt(e, t) {
  pn(e, t), pn(e + "Capture", t);
}
function pn(e, t) {
  for (Gn[e] = t, e = 0; e < t.length; e++) No.add(t[e]);
}
var it = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), oi = Object.prototype.hasOwnProperty, id = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ra = {}, la = {};
function sd(e) {
  return oi.call(la, e) ? !0 : oi.call(ra, e) ? !1 : id.test(e) ? la[e] = !0 : (ra[e] = !0, !1);
}
function ad(e, t, n, r) {
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
function od(e, t, n, r) {
  if (t === null || typeof t > "u" || ad(e, t, n, r)) return !0;
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
function xe(e, t, n, r, l, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ce[e] = new xe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ce[t] = new xe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ce[e] = new xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ce[e] = new xe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ce[e] = new xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ce[e] = new xe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ce[e] = new xe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ce[e] = new xe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ce[e] = new xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
  ce[t] = new xe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(as, os);
  ce[t] = new xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(as, os);
  ce[t] = new xe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ce[e] = new xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ce.xlinkHref = new xe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ce[e] = new xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function us(e, t, n, r) {
  var l = ce.hasOwnProperty(t) ? ce[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (od(t, n, l, r) && (n = null), r || l === null ? sd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ut = ld.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, vr = Symbol.for("react.element"), Kt = Symbol.for("react.portal"), Yt = Symbol.for("react.fragment"), cs = Symbol.for("react.strict_mode"), ui = Symbol.for("react.profiler"), jo = Symbol.for("react.provider"), Io = Symbol.for("react.context"), ds = Symbol.for("react.forward_ref"), ci = Symbol.for("react.suspense"), di = Symbol.for("react.suspense_list"), fs = Symbol.for("react.memo"), dt = Symbol.for("react.lazy"), To = Symbol.for("react.offscreen"), ia = Symbol.iterator;
function Nn(e) {
  return e === null || typeof e != "object" ? null : (e = ia && e[ia] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ee = Object.assign, Fl;
function Dn(e) {
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
  return (e = e ? e.displayName || e.name : "") ? Dn(e) : "";
}
function ud(e) {
  switch (e.tag) {
    case 5:
      return Dn(e.type);
    case 16:
      return Dn("Lazy");
    case 13:
      return Dn("Suspense");
    case 19:
      return Dn("SuspenseList");
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
    case Yt:
      return "Fragment";
    case Kt:
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
    case Io:
      return (e.displayName || "Context") + ".Consumer";
    case jo:
      return (e._context.displayName || "Context") + ".Provider";
    case ds:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case fs:
      return t = e.displayName || null, t !== null ? t : fi(e.type) || "Memo";
    case dt:
      t = e._payload, e = e._init;
      try {
        return fi(e(t));
      } catch {
      }
  }
  return null;
}
function cd(e) {
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
function Ct(e) {
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
function Lo(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function dd(e) {
  var t = Lo(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  e._valueTracker || (e._valueTracker = dd(e));
}
function Mo(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Lo(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
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
  return ee({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function sa(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Ct(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Po(e, t) {
  t = t.checked, t != null && us(e, "checked", t, !1);
}
function mi(e, t) {
  Po(e, t);
  var n = Ct(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? hi(e, t.type, n) : t.hasOwnProperty("defaultValue") && hi(e, t.type, Ct(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function aa(e, t, n) {
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
var Rn = Array.isArray;
function an(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ct(n), t = null, l = 0; l < e.length; l++) {
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
  return ee({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function oa(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(L(92));
      if (Rn(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Ct(n) };
}
function zo(e, t) {
  var n = Ct(t.value), r = Ct(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function ua(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Do(e) {
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
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Do(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var xr, Ro = function(e) {
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
function Kn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var An = {
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
}, fd = ["Webkit", "ms", "Moz", "O"];
Object.keys(An).forEach(function(e) {
  fd.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), An[t] = An[e];
  });
});
function Oo(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || An.hasOwnProperty(e) && An[e] ? ("" + t).trim() : t + "px";
}
function Fo(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Oo(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var pd = ee({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function vi(e, t) {
  if (t) {
    if (pd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(L(137, e));
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
var _i = null, on = null, un = null;
function ca(e) {
  if (e = mr(e)) {
    if (typeof _i != "function") throw Error(L(280));
    var t = e.stateNode;
    t && (t = Sl(t), _i(e.stateNode, e.type, t));
  }
}
function Ao(e) {
  on ? un ? un.push(e) : un = [e] : on = e;
}
function bo() {
  if (on) {
    var e = on, t = un;
    if (un = on = null, ca(e), t) for (e = 0; e < t.length; e++) ca(t[e]);
  }
}
function $o(e, t) {
  return e(t);
}
function Uo() {
}
var $l = !1;
function Vo(e, t, n) {
  if ($l) return e(t, n);
  $l = !0;
  try {
    return $o(e, t, n);
  } finally {
    $l = !1, (on !== null || un !== null) && (Uo(), bo());
  }
}
function Yn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Sl(n);
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
if (it) try {
  var jn = {};
  Object.defineProperty(jn, "passive", { get: function() {
    Si = !0;
  } }), window.addEventListener("test", jn, jn), window.removeEventListener("test", jn, jn);
} catch {
  Si = !1;
}
function md(e, t, n, r, l, i, s, o, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (g) {
    this.onError(g);
  }
}
var bn = !1, Kr = null, Yr = !1, ki = null, hd = { onError: function(e) {
  bn = !0, Kr = e;
} };
function gd(e, t, n, r, l, i, s, o, u) {
  bn = !1, Kr = null, md.apply(hd, arguments);
}
function yd(e, t, n, r, l, i, s, o, u) {
  if (gd.apply(this, arguments), bn) {
    if (bn) {
      var c = Kr;
      bn = !1, Kr = null;
    } else throw Error(L(198));
    Yr || (Yr = !0, ki = c);
  }
}
function Ht(e) {
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
function Qo(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function da(e) {
  if (Ht(e) !== e) throw Error(L(188));
}
function vd(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Ht(e), t === null) throw Error(L(188));
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
        if (i === n) return da(l), e;
        if (i === r) return da(l), t;
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
function Wo(e) {
  return e = vd(e), e !== null ? Ho(e) : null;
}
function Ho(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ho(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Bo = Le.unstable_scheduleCallback, fa = Le.unstable_cancelCallback, wd = Le.unstable_shouldYield, xd = Le.unstable_requestPaint, ne = Le.unstable_now, _d = Le.unstable_getCurrentPriorityLevel, ms = Le.unstable_ImmediatePriority, Go = Le.unstable_UserBlockingPriority, Xr = Le.unstable_NormalPriority, Sd = Le.unstable_LowPriority, Ko = Le.unstable_IdlePriority, vl = null, Je = null;
function kd(e) {
  if (Je && typeof Je.onCommitFiberRoot == "function") try {
    Je.onCommitFiberRoot(vl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var He = Math.clz32 ? Math.clz32 : Nd, Ed = Math.log, Cd = Math.LN2;
function Nd(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Ed(e) / Cd | 0) | 0;
}
var _r = 64, Sr = 4194304;
function On(e) {
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
    o !== 0 ? r = On(o) : (i &= s, i !== 0 && (r = On(i)));
  } else s = n & ~l, s !== 0 ? r = On(s) : i !== 0 && (r = On(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - He(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function jd(e, t) {
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
function Id(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - He(i), o = 1 << s, u = l[s];
    u === -1 ? (!(o & n) || o & r) && (l[s] = jd(o, t)) : u <= t && (e.expiredLanes |= o), i &= ~o;
  }
}
function Ei(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Yo() {
  var e = _r;
  return _r <<= 1, !(_r & 4194240) && (_r = 64), e;
}
function Ul(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function fr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - He(t), e[t] = n;
}
function Td(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - He(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function hs(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - He(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var G = 0;
function Xo(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Zo, gs, Jo, qo, eu, Ci = !1, kr = [], yt = null, vt = null, wt = null, Xn = /* @__PURE__ */ new Map(), Zn = /* @__PURE__ */ new Map(), pt = [], Ld = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function pa(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      yt = null;
      break;
    case "dragenter":
    case "dragleave":
      vt = null;
      break;
    case "mouseover":
    case "mouseout":
      wt = null;
      break;
    case "pointerover":
    case "pointerout":
      Xn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Zn.delete(t.pointerId);
  }
}
function In(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = mr(t), t !== null && gs(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Md(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return yt = In(yt, e, t, n, r, l), !0;
    case "dragenter":
      return vt = In(vt, e, t, n, r, l), !0;
    case "mouseover":
      return wt = In(wt, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return Xn.set(i, In(Xn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, Zn.set(i, In(Zn.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function tu(e) {
  var t = Dt(e.target);
  if (t !== null) {
    var n = Ht(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Qo(n), t !== null) {
          e.blockedOn = t, eu(e.priority, function() {
            Jo(n);
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
    } else return t = mr(n), t !== null && gs(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function ma(e, t, n) {
  Fr(e) && n.delete(t);
}
function Pd() {
  Ci = !1, yt !== null && Fr(yt) && (yt = null), vt !== null && Fr(vt) && (vt = null), wt !== null && Fr(wt) && (wt = null), Xn.forEach(ma), Zn.forEach(ma);
}
function Tn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ci || (Ci = !0, Le.unstable_scheduleCallback(Le.unstable_NormalPriority, Pd)));
}
function Jn(e) {
  function t(l) {
    return Tn(l, e);
  }
  if (0 < kr.length) {
    Tn(kr[0], e);
    for (var n = 1; n < kr.length; n++) {
      var r = kr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (yt !== null && Tn(yt, e), vt !== null && Tn(vt, e), wt !== null && Tn(wt, e), Xn.forEach(t), Zn.forEach(t), n = 0; n < pt.length; n++) r = pt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < pt.length && (n = pt[0], n.blockedOn === null); ) tu(n), n.blockedOn === null && pt.shift();
}
var cn = ut.ReactCurrentBatchConfig, Jr = !0;
function zd(e, t, n, r) {
  var l = G, i = cn.transition;
  cn.transition = null;
  try {
    G = 1, ys(e, t, n, r);
  } finally {
    G = l, cn.transition = i;
  }
}
function Dd(e, t, n, r) {
  var l = G, i = cn.transition;
  cn.transition = null;
  try {
    G = 4, ys(e, t, n, r);
  } finally {
    G = l, cn.transition = i;
  }
}
function ys(e, t, n, r) {
  if (Jr) {
    var l = Ni(e, t, n, r);
    if (l === null) Zl(e, t, r, qr, n), pa(e, r);
    else if (Md(l, e, t, n, r)) r.stopPropagation();
    else if (pa(e, r), t & 4 && -1 < Ld.indexOf(e)) {
      for (; l !== null; ) {
        var i = mr(l);
        if (i !== null && Zo(i), i = Ni(e, t, n, r), i === null && Zl(e, t, r, qr, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Zl(e, t, r, null, n);
  }
}
var qr = null;
function Ni(e, t, n, r) {
  if (qr = null, e = ps(r), e = Dt(e), e !== null) if (t = Ht(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Qo(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return qr = e, null;
}
function nu(e) {
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
      switch (_d()) {
        case ms:
          return 1;
        case Go:
          return 4;
        case Xr:
        case Sd:
          return 16;
        case Ko:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ht = null, vs = null, Ar = null;
function ru() {
  if (Ar) return Ar;
  var e, t = vs, n = t.length, r, l = "value" in ht ? ht.value : ht.textContent, i = l.length;
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
function ha() {
  return !1;
}
function Pe(e) {
  function t(n, r, l, i, s) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var o in e) e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(i) : i[o]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Er : ha, this.isPropagationStopped = ha, this;
  }
  return ee(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Er);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Er);
  }, persist: function() {
  }, isPersistent: Er }), t;
}
var kn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ws = Pe(kn), pr = ee({}, kn, { view: 0, detail: 0 }), Rd = Pe(pr), Vl, Ql, Ln, wl = ee({}, pr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: xs, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Ln && (Ln && e.type === "mousemove" ? (Vl = e.screenX - Ln.screenX, Ql = e.screenY - Ln.screenY) : Ql = Vl = 0, Ln = e), Vl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ql;
} }), ga = Pe(wl), Od = ee({}, wl, { dataTransfer: 0 }), Fd = Pe(Od), Ad = ee({}, pr, { relatedTarget: 0 }), Wl = Pe(Ad), bd = ee({}, kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), $d = Pe(bd), Ud = ee({}, kn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Vd = Pe(Ud), Qd = ee({}, kn, { data: 0 }), ya = Pe(Qd), Wd = {
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
}, Hd = {
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
}, Bd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Gd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Bd[e]) ? !!t[e] : !1;
}
function xs() {
  return Gd;
}
var Kd = ee({}, pr, { key: function(e) {
  if (e.key) {
    var t = Wd[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = br(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Hd[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: xs, charCode: function(e) {
  return e.type === "keypress" ? br(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? br(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Yd = Pe(Kd), Xd = ee({}, wl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), va = Pe(Xd), Zd = ee({}, pr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: xs }), Jd = Pe(Zd), qd = ee({}, kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ef = Pe(qd), tf = ee({}, wl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), nf = Pe(tf), rf = [9, 13, 27, 32], _s = it && "CompositionEvent" in window, $n = null;
it && "documentMode" in document && ($n = document.documentMode);
var lf = it && "TextEvent" in window && !$n, lu = it && (!_s || $n && 8 < $n && 11 >= $n), wa = " ", xa = !1;
function iu(e, t) {
  switch (e) {
    case "keyup":
      return rf.indexOf(t.keyCode) !== -1;
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
function su(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Xt = !1;
function sf(e, t) {
  switch (e) {
    case "compositionend":
      return su(t);
    case "keypress":
      return t.which !== 32 ? null : (xa = !0, wa);
    case "textInput":
      return e = t.data, e === wa && xa ? null : e;
    default:
      return null;
  }
}
function af(e, t) {
  if (Xt) return e === "compositionend" || !_s && iu(e, t) ? (e = ru(), Ar = vs = ht = null, Xt = !1, e) : null;
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
      return lu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var of = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function _a(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!of[e.type] : t === "textarea";
}
function au(e, t, n, r) {
  Ao(r), t = el(t, "onChange"), 0 < t.length && (n = new ws("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Un = null, qn = null;
function uf(e) {
  vu(e, 0);
}
function xl(e) {
  var t = qt(e);
  if (Mo(t)) return e;
}
function cf(e, t) {
  if (e === "change") return t;
}
var ou = !1;
if (it) {
  var Hl;
  if (it) {
    var Bl = "oninput" in document;
    if (!Bl) {
      var Sa = document.createElement("div");
      Sa.setAttribute("oninput", "return;"), Bl = typeof Sa.oninput == "function";
    }
    Hl = Bl;
  } else Hl = !1;
  ou = Hl && (!document.documentMode || 9 < document.documentMode);
}
function ka() {
  Un && (Un.detachEvent("onpropertychange", uu), qn = Un = null);
}
function uu(e) {
  if (e.propertyName === "value" && xl(qn)) {
    var t = [];
    au(t, qn, e, ps(e)), Vo(uf, t);
  }
}
function df(e, t, n) {
  e === "focusin" ? (ka(), Un = t, qn = n, Un.attachEvent("onpropertychange", uu)) : e === "focusout" && ka();
}
function ff(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return xl(qn);
}
function pf(e, t) {
  if (e === "click") return xl(t);
}
function mf(e, t) {
  if (e === "input" || e === "change") return xl(t);
}
function hf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ge = typeof Object.is == "function" ? Object.is : hf;
function er(e, t) {
  if (Ge(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!oi.call(t, l) || !Ge(e[l], t[l])) return !1;
  }
  return !0;
}
function Ea(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ca(e, t) {
  var n = Ea(e);
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
    n = Ea(n);
  }
}
function cu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? cu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function du() {
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
function gf(e) {
  var t = du(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && cu(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ss(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Ca(n, i);
        var s = Ca(
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
var yf = it && "documentMode" in document && 11 >= document.documentMode, Zt = null, ji = null, Vn = null, Ii = !1;
function Na(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ii || Zt == null || Zt !== Gr(r) || (r = Zt, "selectionStart" in r && Ss(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Vn && er(Vn, r) || (Vn = r, r = el(ji, "onSelect"), 0 < r.length && (t = new ws("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Zt)));
}
function Cr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Jt = { animationend: Cr("Animation", "AnimationEnd"), animationiteration: Cr("Animation", "AnimationIteration"), animationstart: Cr("Animation", "AnimationStart"), transitionend: Cr("Transition", "TransitionEnd") }, Gl = {}, fu = {};
it && (fu = document.createElement("div").style, "AnimationEvent" in window || (delete Jt.animationend.animation, delete Jt.animationiteration.animation, delete Jt.animationstart.animation), "TransitionEvent" in window || delete Jt.transitionend.transition);
function _l(e) {
  if (Gl[e]) return Gl[e];
  if (!Jt[e]) return e;
  var t = Jt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in fu) return Gl[e] = t[n];
  return e;
}
var pu = _l("animationend"), mu = _l("animationiteration"), hu = _l("animationstart"), gu = _l("transitionend"), yu = /* @__PURE__ */ new Map(), ja = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function jt(e, t) {
  yu.set(e, t), Wt(t, [e]);
}
for (var Kl = 0; Kl < ja.length; Kl++) {
  var Yl = ja[Kl], vf = Yl.toLowerCase(), wf = Yl[0].toUpperCase() + Yl.slice(1);
  jt(vf, "on" + wf);
}
jt(pu, "onAnimationEnd");
jt(mu, "onAnimationIteration");
jt(hu, "onAnimationStart");
jt("dblclick", "onDoubleClick");
jt("focusin", "onFocus");
jt("focusout", "onBlur");
jt(gu, "onTransitionEnd");
pn("onMouseEnter", ["mouseout", "mouseover"]);
pn("onMouseLeave", ["mouseout", "mouseover"]);
pn("onPointerEnter", ["pointerout", "pointerover"]);
pn("onPointerLeave", ["pointerout", "pointerover"]);
Wt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Wt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Wt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Wt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Wt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Wt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Fn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), xf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fn));
function Ia(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, yd(r, t, void 0, e), e.currentTarget = null;
}
function vu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var o = r[s], u = o.instance, c = o.currentTarget;
        if (o = o.listener, u !== i && l.isPropagationStopped()) break e;
        Ia(l, o, c), i = u;
      }
      else for (s = 0; s < r.length; s++) {
        if (o = r[s], u = o.instance, c = o.currentTarget, o = o.listener, u !== i && l.isPropagationStopped()) break e;
        Ia(l, o, c), i = u;
      }
    }
  }
  if (Yr) throw e = ki, Yr = !1, ki = null, e;
}
function Y(e, t) {
  var n = t[zi];
  n === void 0 && (n = t[zi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (wu(t, e, 2, !1), n.add(r));
}
function Xl(e, t, n) {
  var r = 0;
  t && (r |= 4), wu(n, e, r, t);
}
var Nr = "_reactListening" + Math.random().toString(36).slice(2);
function tr(e) {
  if (!e[Nr]) {
    e[Nr] = !0, No.forEach(function(n) {
      n !== "selectionchange" && (xf.has(n) || Xl(n, !1, e), Xl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Nr] || (t[Nr] = !0, Xl("selectionchange", !1, t));
  }
}
function wu(e, t, n, r) {
  switch (nu(t)) {
    case 1:
      var l = zd;
      break;
    case 4:
      l = Dd;
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
        if (s = Dt(o), s === null) return;
        if (u = s.tag, u === 5 || u === 6) {
          r = i = s;
          continue e;
        }
        o = o.parentNode;
      }
    }
    r = r.return;
  }
  Vo(function() {
    var c = i, g = ps(n), h = [];
    e: {
      var m = yu.get(e);
      if (m !== void 0) {
        var w = ws, S = e;
        switch (e) {
          case "keypress":
            if (br(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = Yd;
            break;
          case "focusin":
            S = "focus", w = Wl;
            break;
          case "focusout":
            S = "blur", w = Wl;
            break;
          case "beforeblur":
          case "afterblur":
            w = Wl;
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
            w = ga;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Fd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Jd;
            break;
          case pu:
          case mu:
          case hu:
            w = $d;
            break;
          case gu:
            w = ef;
            break;
          case "scroll":
            w = Rd;
            break;
          case "wheel":
            w = nf;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Vd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = va;
        }
        var j = (t & 4) !== 0, b = !j && e === "scroll", d = j ? m !== null ? m + "Capture" : null : m;
        j = [];
        for (var f = c, p; f !== null; ) {
          p = f;
          var k = p.stateNode;
          if (p.tag === 5 && k !== null && (p = k, d !== null && (k = Yn(f, d), k != null && j.push(nr(f, k, p)))), b) break;
          f = f.return;
        }
        0 < j.length && (m = new w(m, S, null, n, g), h.push({ event: m, listeners: j }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", m && n !== xi && (S = n.relatedTarget || n.fromElement) && (Dt(S) || S[st])) break e;
        if ((w || m) && (m = g.window === g ? g : (m = g.ownerDocument) ? m.defaultView || m.parentWindow : window, w ? (S = n.relatedTarget || n.toElement, w = c, S = S ? Dt(S) : null, S !== null && (b = Ht(S), S !== b || S.tag !== 5 && S.tag !== 6) && (S = null)) : (w = null, S = c), w !== S)) {
          if (j = ga, k = "onMouseLeave", d = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (j = va, k = "onPointerLeave", d = "onPointerEnter", f = "pointer"), b = w == null ? m : qt(w), p = S == null ? m : qt(S), m = new j(k, f + "leave", w, n, g), m.target = b, m.relatedTarget = p, k = null, Dt(g) === c && (j = new j(d, f + "enter", S, n, g), j.target = p, j.relatedTarget = b, k = j), b = k, w && S) t: {
            for (j = w, d = S, f = 0, p = j; p; p = Gt(p)) f++;
            for (p = 0, k = d; k; k = Gt(k)) p++;
            for (; 0 < f - p; ) j = Gt(j), f--;
            for (; 0 < p - f; ) d = Gt(d), p--;
            for (; f--; ) {
              if (j === d || d !== null && j === d.alternate) break t;
              j = Gt(j), d = Gt(d);
            }
            j = null;
          }
          else j = null;
          w !== null && Ta(h, m, w, j, !1), S !== null && b !== null && Ta(h, b, S, j, !0);
        }
      }
      e: {
        if (m = c ? qt(c) : window, w = m.nodeName && m.nodeName.toLowerCase(), w === "select" || w === "input" && m.type === "file") var z = cf;
        else if (_a(m)) if (ou) z = mf;
        else {
          z = ff;
          var _ = df;
        }
        else (w = m.nodeName) && w.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (z = pf);
        if (z && (z = z(e, c))) {
          au(h, z, n, g);
          break e;
        }
        _ && _(e, m, c), e === "focusout" && (_ = m._wrapperState) && _.controlled && m.type === "number" && hi(m, "number", m.value);
      }
      switch (_ = c ? qt(c) : window, e) {
        case "focusin":
          (_a(_) || _.contentEditable === "true") && (Zt = _, ji = c, Vn = null);
          break;
        case "focusout":
          Vn = ji = Zt = null;
          break;
        case "mousedown":
          Ii = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ii = !1, Na(h, n, g);
          break;
        case "selectionchange":
          if (yf) break;
        case "keydown":
        case "keyup":
          Na(h, n, g);
      }
      var M;
      if (_s) e: {
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
      else Xt ? iu(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (lu && n.locale !== "ko" && (Xt || T !== "onCompositionStart" ? T === "onCompositionEnd" && Xt && (M = ru()) : (ht = g, vs = "value" in ht ? ht.value : ht.textContent, Xt = !0)), _ = el(c, T), 0 < _.length && (T = new ya(T, e, null, n, g), h.push({ event: T, listeners: _ }), M ? T.data = M : (M = su(n), M !== null && (T.data = M)))), (M = lf ? sf(e, n) : af(e, n)) && (c = el(c, "onBeforeInput"), 0 < c.length && (g = new ya("onBeforeInput", "beforeinput", null, n, g), h.push({ event: g, listeners: c }), g.data = M));
    }
    vu(h, t);
  });
}
function nr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function el(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = Yn(e, n), i != null && r.unshift(nr(e, i, l)), i = Yn(e, t), i != null && r.push(nr(e, i, l))), e = e.return;
  }
  return r;
}
function Gt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ta(e, t, n, r, l) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var o = n, u = o.alternate, c = o.stateNode;
    if (u !== null && u === r) break;
    o.tag === 5 && c !== null && (o = c, l ? (u = Yn(n, i), u != null && s.unshift(nr(n, u, o))) : l || (u = Yn(n, i), u != null && s.push(nr(n, u, o)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var _f = /\r\n?/g, Sf = /\u0000|\uFFFD/g;
function La(e) {
  return (typeof e == "string" ? e : "" + e).replace(_f, `
`).replace(Sf, "");
}
function jr(e, t, n) {
  if (t = La(t), La(e) !== t && n) throw Error(L(425));
}
function tl() {
}
var Ti = null, Li = null;
function Mi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Pi = typeof setTimeout == "function" ? setTimeout : void 0, kf = typeof clearTimeout == "function" ? clearTimeout : void 0, Ma = typeof Promise == "function" ? Promise : void 0, Ef = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ma < "u" ? function(e) {
  return Ma.resolve(null).then(e).catch(Cf);
} : Pi;
function Cf(e) {
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
        e.removeChild(l), Jn(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Jn(t);
}
function xt(e) {
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
function Pa(e) {
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
var En = Math.random().toString(36).slice(2), Ze = "__reactFiber$" + En, rr = "__reactProps$" + En, st = "__reactContainer$" + En, zi = "__reactEvents$" + En, Nf = "__reactListeners$" + En, jf = "__reactHandles$" + En;
function Dt(e) {
  var t = e[Ze];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[st] || n[Ze]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Pa(e); e !== null; ) {
        if (n = e[Ze]) return n;
        e = Pa(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function mr(e) {
  return e = e[Ze] || e[st], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function qt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function Sl(e) {
  return e[rr] || null;
}
var Di = [], en = -1;
function It(e) {
  return { current: e };
}
function X(e) {
  0 > en || (e.current = Di[en], Di[en] = null, en--);
}
function K(e, t) {
  en++, Di[en] = e.current, e.current = t;
}
var Nt = {}, me = It(Nt), ke = It(!1), bt = Nt;
function mn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Nt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Ee(e) {
  return e = e.childContextTypes, e != null;
}
function nl() {
  X(ke), X(me);
}
function za(e, t, n) {
  if (me.current !== Nt) throw Error(L(168));
  K(me, t), K(ke, n);
}
function xu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(L(108, cd(e) || "Unknown", l));
  return ee({}, n, r);
}
function rl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Nt, bt = me.current, K(me, e), K(ke, ke.current), !0;
}
function Da(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n ? (e = xu(e, t, bt), r.__reactInternalMemoizedMergedChildContext = e, X(ke), X(me), K(me, e)) : X(ke), K(ke, n);
}
var tt = null, kl = !1, ql = !1;
function _u(e) {
  tt === null ? tt = [e] : tt.push(e);
}
function If(e) {
  kl = !0, _u(e);
}
function Tt() {
  if (!ql && tt !== null) {
    ql = !0;
    var e = 0, t = G;
    try {
      var n = tt;
      for (G = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      tt = null, kl = !1;
    } catch (l) {
      throw tt !== null && (tt = tt.slice(e + 1)), Bo(ms, Tt), l;
    } finally {
      G = t, ql = !1;
    }
  }
  return null;
}
var tn = [], nn = 0, ll = null, il = 0, ze = [], De = 0, $t = null, nt = 1, rt = "";
function Pt(e, t) {
  tn[nn++] = il, tn[nn++] = ll, ll = e, il = t;
}
function Su(e, t, n) {
  ze[De++] = nt, ze[De++] = rt, ze[De++] = $t, $t = e;
  var r = nt;
  e = rt;
  var l = 32 - He(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - He(t) + l;
  if (30 < i) {
    var s = l - l % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, l -= s, nt = 1 << 32 - He(t) + l | n << l | r, rt = i + e;
  } else nt = 1 << i | n << l | r, rt = e;
}
function ks(e) {
  e.return !== null && (Pt(e, 1), Su(e, 1, 0));
}
function Es(e) {
  for (; e === ll; ) ll = tn[--nn], tn[nn] = null, il = tn[--nn], tn[nn] = null;
  for (; e === $t; ) $t = ze[--De], ze[De] = null, rt = ze[--De], ze[De] = null, nt = ze[--De], ze[De] = null;
}
var Te = null, Ie = null, Z = !1, We = null;
function ku(e, t) {
  var n = Re(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ra(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Te = e, Ie = xt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Te = e, Ie = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = $t !== null ? { id: nt, overflow: rt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Re(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Te = e, Ie = null, !0) : !1;
    default:
      return !1;
  }
}
function Ri(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Oi(e) {
  if (Z) {
    var t = Ie;
    if (t) {
      var n = t;
      if (!Ra(e, t)) {
        if (Ri(e)) throw Error(L(418));
        t = xt(n.nextSibling);
        var r = Te;
        t && Ra(e, t) ? ku(r, n) : (e.flags = e.flags & -4097 | 2, Z = !1, Te = e);
      }
    } else {
      if (Ri(e)) throw Error(L(418));
      e.flags = e.flags & -4097 | 2, Z = !1, Te = e;
    }
  }
}
function Oa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Te = e;
}
function Ir(e) {
  if (e !== Te) return !1;
  if (!Z) return Oa(e), Z = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Mi(e.type, e.memoizedProps)), t && (t = Ie)) {
    if (Ri(e)) throw Eu(), Error(L(418));
    for (; t; ) ku(e, t), t = xt(t.nextSibling);
  }
  if (Oa(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ie = xt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ie = null;
    }
  } else Ie = Te ? xt(e.stateNode.nextSibling) : null;
  return !0;
}
function Eu() {
  for (var e = Ie; e; ) e = xt(e.nextSibling);
}
function hn() {
  Ie = Te = null, Z = !1;
}
function Cs(e) {
  We === null ? We = [e] : We.push(e);
}
var Tf = ut.ReactCurrentBatchConfig;
function Mn(e, t, n) {
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
function Fa(e) {
  var t = e._init;
  return t(e._payload);
}
function Cu(e) {
  function t(d, f) {
    if (e) {
      var p = d.deletions;
      p === null ? (d.deletions = [f], d.flags |= 16) : p.push(f);
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
    return d = Et(d, f), d.index = 0, d.sibling = null, d;
  }
  function i(d, f, p) {
    return d.index = p, e ? (p = d.alternate, p !== null ? (p = p.index, p < f ? (d.flags |= 2, f) : p) : (d.flags |= 2, f)) : (d.flags |= 1048576, f);
  }
  function s(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function o(d, f, p, k) {
    return f === null || f.tag !== 6 ? (f = si(p, d.mode, k), f.return = d, f) : (f = l(f, p), f.return = d, f);
  }
  function u(d, f, p, k) {
    var z = p.type;
    return z === Yt ? g(d, f, p.props.children, k, p.key) : f !== null && (f.elementType === z || typeof z == "object" && z !== null && z.$$typeof === dt && Fa(z) === f.type) ? (k = l(f, p.props), k.ref = Mn(d, f, p), k.return = d, k) : (k = Br(p.type, p.key, p.props, null, d.mode, k), k.ref = Mn(d, f, p), k.return = d, k);
  }
  function c(d, f, p, k) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== p.containerInfo || f.stateNode.implementation !== p.implementation ? (f = ai(p, d.mode, k), f.return = d, f) : (f = l(f, p.children || []), f.return = d, f);
  }
  function g(d, f, p, k, z) {
    return f === null || f.tag !== 7 ? (f = At(p, d.mode, k, z), f.return = d, f) : (f = l(f, p), f.return = d, f);
  }
  function h(d, f, p) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = si("" + f, d.mode, p), f.return = d, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case vr:
          return p = Br(f.type, f.key, f.props, null, d.mode, p), p.ref = Mn(d, null, f), p.return = d, p;
        case Kt:
          return f = ai(f, d.mode, p), f.return = d, f;
        case dt:
          var k = f._init;
          return h(d, k(f._payload), p);
      }
      if (Rn(f) || Nn(f)) return f = At(f, d.mode, p, null), f.return = d, f;
      Tr(d, f);
    }
    return null;
  }
  function m(d, f, p, k) {
    var z = f !== null ? f.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return z !== null ? null : o(d, f, "" + p, k);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case vr:
          return p.key === z ? u(d, f, p, k) : null;
        case Kt:
          return p.key === z ? c(d, f, p, k) : null;
        case dt:
          return z = p._init, m(
            d,
            f,
            z(p._payload),
            k
          );
      }
      if (Rn(p) || Nn(p)) return z !== null ? null : g(d, f, p, k, null);
      Tr(d, p);
    }
    return null;
  }
  function w(d, f, p, k, z) {
    if (typeof k == "string" && k !== "" || typeof k == "number") return d = d.get(p) || null, o(f, d, "" + k, z);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case vr:
          return d = d.get(k.key === null ? p : k.key) || null, u(f, d, k, z);
        case Kt:
          return d = d.get(k.key === null ? p : k.key) || null, c(f, d, k, z);
        case dt:
          var _ = k._init;
          return w(d, f, p, _(k._payload), z);
      }
      if (Rn(k) || Nn(k)) return d = d.get(p) || null, g(f, d, k, z, null);
      Tr(f, k);
    }
    return null;
  }
  function S(d, f, p, k) {
    for (var z = null, _ = null, M = f, T = f = 0, E = null; M !== null && T < p.length; T++) {
      M.index > T ? (E = M, M = null) : E = M.sibling;
      var R = m(d, M, p[T], k);
      if (R === null) {
        M === null && (M = E);
        break;
      }
      e && M && R.alternate === null && t(d, M), f = i(R, f, T), _ === null ? z = R : _.sibling = R, _ = R, M = E;
    }
    if (T === p.length) return n(d, M), Z && Pt(d, T), z;
    if (M === null) {
      for (; T < p.length; T++) M = h(d, p[T], k), M !== null && (f = i(M, f, T), _ === null ? z = M : _.sibling = M, _ = M);
      return Z && Pt(d, T), z;
    }
    for (M = r(d, M); T < p.length; T++) E = w(M, d, T, p[T], k), E !== null && (e && E.alternate !== null && M.delete(E.key === null ? T : E.key), f = i(E, f, T), _ === null ? z = E : _.sibling = E, _ = E);
    return e && M.forEach(function(y) {
      return t(d, y);
    }), Z && Pt(d, T), z;
  }
  function j(d, f, p, k) {
    var z = Nn(p);
    if (typeof z != "function") throw Error(L(150));
    if (p = z.call(p), p == null) throw Error(L(151));
    for (var _ = z = null, M = f, T = f = 0, E = null, R = p.next(); M !== null && !R.done; T++, R = p.next()) {
      M.index > T ? (E = M, M = null) : E = M.sibling;
      var y = m(d, M, R.value, k);
      if (y === null) {
        M === null && (M = E);
        break;
      }
      e && M && y.alternate === null && t(d, M), f = i(y, f, T), _ === null ? z = y : _.sibling = y, _ = y, M = E;
    }
    if (R.done) return n(
      d,
      M
    ), Z && Pt(d, T), z;
    if (M === null) {
      for (; !R.done; T++, R = p.next()) R = h(d, R.value, k), R !== null && (f = i(R, f, T), _ === null ? z = R : _.sibling = R, _ = R);
      return Z && Pt(d, T), z;
    }
    for (M = r(d, M); !R.done; T++, R = p.next()) R = w(M, d, T, R.value, k), R !== null && (e && R.alternate !== null && M.delete(R.key === null ? T : R.key), f = i(R, f, T), _ === null ? z = R : _.sibling = R, _ = R);
    return e && M.forEach(function(N) {
      return t(d, N);
    }), Z && Pt(d, T), z;
  }
  function b(d, f, p, k) {
    if (typeof p == "object" && p !== null && p.type === Yt && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case vr:
          e: {
            for (var z = p.key, _ = f; _ !== null; ) {
              if (_.key === z) {
                if (z = p.type, z === Yt) {
                  if (_.tag === 7) {
                    n(d, _.sibling), f = l(_, p.props.children), f.return = d, d = f;
                    break e;
                  }
                } else if (_.elementType === z || typeof z == "object" && z !== null && z.$$typeof === dt && Fa(z) === _.type) {
                  n(d, _.sibling), f = l(_, p.props), f.ref = Mn(d, _, p), f.return = d, d = f;
                  break e;
                }
                n(d, _);
                break;
              } else t(d, _);
              _ = _.sibling;
            }
            p.type === Yt ? (f = At(p.props.children, d.mode, k, p.key), f.return = d, d = f) : (k = Br(p.type, p.key, p.props, null, d.mode, k), k.ref = Mn(d, f, p), k.return = d, d = k);
          }
          return s(d);
        case Kt:
          e: {
            for (_ = p.key; f !== null; ) {
              if (f.key === _) if (f.tag === 4 && f.stateNode.containerInfo === p.containerInfo && f.stateNode.implementation === p.implementation) {
                n(d, f.sibling), f = l(f, p.children || []), f.return = d, d = f;
                break e;
              } else {
                n(d, f);
                break;
              }
              else t(d, f);
              f = f.sibling;
            }
            f = ai(p, d.mode, k), f.return = d, d = f;
          }
          return s(d);
        case dt:
          return _ = p._init, b(d, f, _(p._payload), k);
      }
      if (Rn(p)) return S(d, f, p, k);
      if (Nn(p)) return j(d, f, p, k);
      Tr(d, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, f !== null && f.tag === 6 ? (n(d, f.sibling), f = l(f, p), f.return = d, d = f) : (n(d, f), f = si(p, d.mode, k), f.return = d, d = f), s(d)) : n(d, f);
  }
  return b;
}
var gn = Cu(!0), Nu = Cu(!1), sl = It(null), al = null, rn = null, Ns = null;
function js() {
  Ns = rn = al = null;
}
function Is(e) {
  var t = sl.current;
  X(sl), e._currentValue = t;
}
function Fi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function dn(e, t) {
  al = e, Ns = rn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Se = !0), e.firstContext = null);
}
function Ae(e) {
  var t = e._currentValue;
  if (Ns !== e) if (e = { context: e, memoizedValue: t, next: null }, rn === null) {
    if (al === null) throw Error(L(308));
    rn = e, al.dependencies = { lanes: 0, firstContext: e };
  } else rn = rn.next = e;
  return t;
}
var Rt = null;
function Ts(e) {
  Rt === null ? Rt = [e] : Rt.push(e);
}
function ju(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Ts(t)) : (n.next = l.next, l.next = n), t.interleaved = n, at(e, r);
}
function at(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var ft = !1;
function Ls(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Iu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function lt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function _t(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, W & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, at(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Ts(r)) : (t.next = l.next, l.next = t), r.interleaved = t, at(e, n);
}
function $r(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, hs(e, n);
  }
}
function Aa(e, t) {
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
  ft = !1;
  var i = l.firstBaseUpdate, s = l.lastBaseUpdate, o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var u = o, c = u.next;
    u.next = null, s === null ? i = c : s.next = c, s = u;
    var g = e.alternate;
    g !== null && (g = g.updateQueue, o = g.lastBaseUpdate, o !== s && (o === null ? g.firstBaseUpdate = c : o.next = c, g.lastBaseUpdate = u));
  }
  if (i !== null) {
    var h = l.baseState;
    s = 0, g = c = u = null, o = i;
    do {
      var m = o.lane, w = o.eventTime;
      if ((r & m) === m) {
        g !== null && (g = g.next = {
          eventTime: w,
          lane: 0,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null
        });
        e: {
          var S = e, j = o;
          switch (m = t, w = n, j.tag) {
            case 1:
              if (S = j.payload, typeof S == "function") {
                h = S.call(w, h, m);
                break e;
              }
              h = S;
              break e;
            case 3:
              S.flags = S.flags & -65537 | 128;
            case 0:
              if (S = j.payload, m = typeof S == "function" ? S.call(w, h, m) : S, m == null) break e;
              h = ee({}, h, m);
              break e;
            case 2:
              ft = !0;
          }
        }
        o.callback !== null && o.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [o] : m.push(o));
      } else w = { eventTime: w, lane: m, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, g === null ? (c = g = w, u = h) : g = g.next = w, s |= m;
      if (o = o.next, o === null) {
        if (o = l.shared.pending, o === null) break;
        m = o, o = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
      }
    } while (!0);
    if (g === null && (u = h), l.baseState = u, l.firstBaseUpdate = c, l.lastBaseUpdate = g, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        s |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    Vt |= s, e.lanes = s, e.memoizedState = h;
  }
}
function ba(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(L(191, l));
      l.call(r);
    }
  }
}
var hr = {}, qe = It(hr), lr = It(hr), ir = It(hr);
function Ot(e) {
  if (e === hr) throw Error(L(174));
  return e;
}
function Ms(e, t) {
  switch (K(ir, t), K(lr, e), K(qe, hr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : yi(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = yi(t, e);
  }
  X(qe), K(qe, t);
}
function yn() {
  X(qe), X(lr), X(ir);
}
function Tu(e) {
  Ot(ir.current);
  var t = Ot(qe.current), n = yi(t, e.type);
  t !== n && (K(lr, e), K(qe, n));
}
function Ps(e) {
  lr.current === e && (X(qe), X(lr));
}
var J = It(0);
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
var Ur = ut.ReactCurrentDispatcher, ti = ut.ReactCurrentBatchConfig, Ut = 0, q = null, le = null, se = null, cl = !1, Qn = !1, sr = 0, Lf = 0;
function de() {
  throw Error(L(321));
}
function Ds(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ge(e[n], t[n])) return !1;
  return !0;
}
function Rs(e, t, n, r, l, i) {
  if (Ut = i, q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ur.current = e === null || e.memoizedState === null ? Df : Rf, e = n(r, l), Qn) {
    i = 0;
    do {
      if (Qn = !1, sr = 0, 25 <= i) throw Error(L(301));
      i += 1, se = le = null, t.updateQueue = null, Ur.current = Of, e = n(r, l);
    } while (Qn);
  }
  if (Ur.current = dl, t = le !== null && le.next !== null, Ut = 0, se = le = q = null, cl = !1, t) throw Error(L(300));
  return e;
}
function Os() {
  var e = sr !== 0;
  return sr = 0, e;
}
function Xe() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return se === null ? q.memoizedState = se = e : se = se.next = e, se;
}
function be() {
  if (le === null) {
    var e = q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = le.next;
  var t = se === null ? q.memoizedState : se.next;
  if (t !== null) se = t, le = e;
  else {
    if (e === null) throw Error(L(310));
    le = e, e = { memoizedState: le.memoizedState, baseState: le.baseState, baseQueue: le.baseQueue, queue: le.queue, next: null }, se === null ? q.memoizedState = se = e : se = se.next = e;
  }
  return se;
}
function ar(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ni(e) {
  var t = be(), n = t.queue;
  if (n === null) throw Error(L(311));
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
    var o = s = null, u = null, c = i;
    do {
      var g = c.lane;
      if ((Ut & g) === g) u !== null && (u = u.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var h = {
          lane: g,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        u === null ? (o = u = h, s = r) : u = u.next = h, q.lanes |= g, Vt |= g;
      }
      c = c.next;
    } while (c !== null && c !== i);
    u === null ? s = r : u.next = o, Ge(r, t.memoizedState) || (Se = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, q.lanes |= i, Vt |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ri(e) {
  var t = be(), n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var s = l = l.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== l);
    Ge(i, t.memoizedState) || (Se = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Lu() {
}
function Mu(e, t) {
  var n = q, r = be(), l = t(), i = !Ge(r.memoizedState, l);
  if (i && (r.memoizedState = l, Se = !0), r = r.queue, Fs(Du.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || se !== null && se.memoizedState.tag & 1) {
    if (n.flags |= 2048, or(9, zu.bind(null, n, r, l, t), void 0, null), ae === null) throw Error(L(349));
    Ut & 30 || Pu(n, t, l);
  }
  return l;
}
function Pu(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = q.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, q.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function zu(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Ru(t) && Ou(e);
}
function Du(e, t, n) {
  return n(function() {
    Ru(t) && Ou(e);
  });
}
function Ru(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ge(e, n);
  } catch {
    return !0;
  }
}
function Ou(e) {
  var t = at(e, 1);
  t !== null && Be(t, e, 1, -1);
}
function $a(e) {
  var t = Xe();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ar, lastRenderedState: e }, t.queue = e, e = e.dispatch = zf.bind(null, q, e), [t.memoizedState, e];
}
function or(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = q.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, q.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Fu() {
  return be().memoizedState;
}
function Vr(e, t, n, r) {
  var l = Xe();
  q.flags |= e, l.memoizedState = or(1 | t, n, void 0, r === void 0 ? null : r);
}
function El(e, t, n, r) {
  var l = be();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (le !== null) {
    var s = le.memoizedState;
    if (i = s.destroy, r !== null && Ds(r, s.deps)) {
      l.memoizedState = or(t, n, i, r);
      return;
    }
  }
  q.flags |= e, l.memoizedState = or(1 | t, n, i, r);
}
function Ua(e, t) {
  return Vr(8390656, 8, e, t);
}
function Fs(e, t) {
  return El(2048, 8, e, t);
}
function Au(e, t) {
  return El(4, 2, e, t);
}
function bu(e, t) {
  return El(4, 4, e, t);
}
function $u(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Uu(e, t, n) {
  return n = n != null ? n.concat([e]) : null, El(4, 4, $u.bind(null, t, e), n);
}
function As() {
}
function Vu(e, t) {
  var n = be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ds(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Qu(e, t) {
  var n = be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ds(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Wu(e, t, n) {
  return Ut & 21 ? (Ge(n, t) || (n = Yo(), q.lanes |= n, Vt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Se = !0), e.memoizedState = n);
}
function Mf(e, t) {
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
function Hu() {
  return be().memoizedState;
}
function Pf(e, t, n) {
  var r = kt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Bu(e)) Gu(t, n);
  else if (n = ju(e, t, n, r), n !== null) {
    var l = ye();
    Be(n, e, r, l), Ku(n, t, r);
  }
}
function zf(e, t, n) {
  var r = kt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Bu(e)) Gu(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, o = i(s, n);
      if (l.hasEagerState = !0, l.eagerState = o, Ge(o, s)) {
        var u = t.interleaved;
        u === null ? (l.next = l, Ts(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = ju(e, t, l, r), n !== null && (l = ye(), Be(n, e, r, l), Ku(n, t, r));
  }
}
function Bu(e) {
  var t = e.alternate;
  return e === q || t !== null && t === q;
}
function Gu(e, t) {
  Qn = cl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ku(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, hs(e, n);
  }
}
var dl = { readContext: Ae, useCallback: de, useContext: de, useEffect: de, useImperativeHandle: de, useInsertionEffect: de, useLayoutEffect: de, useMemo: de, useReducer: de, useRef: de, useState: de, useDebugValue: de, useDeferredValue: de, useTransition: de, useMutableSource: de, useSyncExternalStore: de, useId: de, unstable_isNewReconciler: !1 }, Df = { readContext: Ae, useCallback: function(e, t) {
  return Xe().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ae, useEffect: Ua, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Vr(
    4194308,
    4,
    $u.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Vr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Vr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Xe();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Xe();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Pf.bind(null, q, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Xe();
  return e = { current: e }, t.memoizedState = e;
}, useState: $a, useDebugValue: As, useDeferredValue: function(e) {
  return Xe().memoizedState = e;
}, useTransition: function() {
  var e = $a(!1), t = e[0];
  return e = Mf.bind(null, e[1]), Xe().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = q, l = Xe();
  if (Z) {
    if (n === void 0) throw Error(L(407));
    n = n();
  } else {
    if (n = t(), ae === null) throw Error(L(349));
    Ut & 30 || Pu(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, Ua(Du.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, or(9, zu.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Xe(), t = ae.identifierPrefix;
  if (Z) {
    var n = rt, r = nt;
    n = (r & ~(1 << 32 - He(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = sr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Lf++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Rf = {
  readContext: Ae,
  useCallback: Vu,
  useContext: Ae,
  useEffect: Fs,
  useImperativeHandle: Uu,
  useInsertionEffect: Au,
  useLayoutEffect: bu,
  useMemo: Qu,
  useReducer: ni,
  useRef: Fu,
  useState: function() {
    return ni(ar);
  },
  useDebugValue: As,
  useDeferredValue: function(e) {
    var t = be();
    return Wu(t, le.memoizedState, e);
  },
  useTransition: function() {
    var e = ni(ar)[0], t = be().memoizedState;
    return [e, t];
  },
  useMutableSource: Lu,
  useSyncExternalStore: Mu,
  useId: Hu,
  unstable_isNewReconciler: !1
}, Of = { readContext: Ae, useCallback: Vu, useContext: Ae, useEffect: Fs, useImperativeHandle: Uu, useInsertionEffect: Au, useLayoutEffect: bu, useMemo: Qu, useReducer: ri, useRef: Fu, useState: function() {
  return ri(ar);
}, useDebugValue: As, useDeferredValue: function(e) {
  var t = be();
  return le === null ? t.memoizedState = e : Wu(t, le.memoizedState, e);
}, useTransition: function() {
  var e = ri(ar)[0], t = be().memoizedState;
  return [e, t];
}, useMutableSource: Lu, useSyncExternalStore: Mu, useId: Hu, unstable_isNewReconciler: !1 };
function Ve(e, t) {
  if (e && e.defaultProps) {
    t = ee({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ai(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ee({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Cl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Ht(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ye(), l = kt(e), i = lt(r, l);
  i.payload = t, n != null && (i.callback = n), t = _t(e, i, l), t !== null && (Be(t, e, l, r), $r(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ye(), l = kt(e), i = lt(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = _t(e, i, l), t !== null && (Be(t, e, l, r), $r(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ye(), r = kt(e), l = lt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = _t(e, l, r), t !== null && (Be(t, e, r, n), $r(t, e, r));
} };
function Va(e, t, n, r, l, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !er(n, r) || !er(l, i) : !0;
}
function Yu(e, t, n) {
  var r = !1, l = Nt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Ae(i) : (l = Ee(t) ? bt : me.current, r = t.contextTypes, i = (r = r != null) ? mn(e, l) : Nt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Cl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Qa(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Cl.enqueueReplaceState(t, t.state, null);
}
function bi(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Ls(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = Ae(i) : (i = Ee(t) ? bt : me.current, l.context = mn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Ai(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Cl.enqueueReplaceState(l, l.state, null), ol(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function vn(e, t) {
  try {
    var n = "", r = t;
    do
      n += ud(r), r = r.return;
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
var Ff = typeof WeakMap == "function" ? WeakMap : Map;
function Xu(e, t, n) {
  n = lt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    pl || (pl = !0, Xi = r), $i(e, t);
  }, n;
}
function Zu(e, t, n) {
  n = lt(-1, n), n.tag = 3;
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
    $i(e, t), typeof r != "function" && (St === null ? St = /* @__PURE__ */ new Set([this]) : St.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Wa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ff();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Zf.bind(null, e, t, n), t.then(e, e));
}
function Ha(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ba(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = lt(-1, 1), t.tag = 2, _t(n, t, 1))), n.lanes |= 1), e);
}
var Af = ut.ReactCurrentOwner, Se = !1;
function he(e, t, n, r) {
  t.child = e === null ? Nu(t, null, n, r) : gn(t, e.child, n, r);
}
function Ga(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return dn(t, l), r = Rs(e, t, n, r, i, l), n = Os(), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ot(e, t, l)) : (Z && n && ks(t), t.flags |= 1, he(e, t, r, l), t.child);
}
function Ka(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Bs(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Ju(e, t, i, r, l)) : (e = Br(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : er, n(s, r) && e.ref === t.ref) return ot(e, t, l);
  }
  return t.flags |= 1, e = Et(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ju(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (er(i, r) && e.ref === t.ref) if (Se = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (Se = !0);
    else return t.lanes = e.lanes, ot(e, t, l);
  }
  return Ui(e, t, n, r, l);
}
function qu(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, K(sn, Ne), Ne |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, K(sn, Ne), Ne |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, K(sn, Ne), Ne |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, K(sn, Ne), Ne |= r;
  return he(e, t, l, n), t.child;
}
function ec(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ui(e, t, n, r, l) {
  var i = Ee(n) ? bt : me.current;
  return i = mn(t, i), dn(t, l), n = Rs(e, t, n, r, i, l), r = Os(), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ot(e, t, l)) : (Z && r && ks(t), t.flags |= 1, he(e, t, n, l), t.child);
}
function Ya(e, t, n, r, l) {
  if (Ee(n)) {
    var i = !0;
    rl(t);
  } else i = !1;
  if (dn(t, l), t.stateNode === null) Qr(e, t), Yu(t, n, r), bi(t, n, r, l), r = !0;
  else if (e === null) {
    var s = t.stateNode, o = t.memoizedProps;
    s.props = o;
    var u = s.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Ae(c) : (c = Ee(n) ? bt : me.current, c = mn(t, c));
    var g = n.getDerivedStateFromProps, h = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    h || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (o !== r || u !== c) && Qa(t, s, r, c), ft = !1;
    var m = t.memoizedState;
    s.state = m, ol(t, r, s, l), u = t.memoizedState, o !== r || m !== u || ke.current || ft ? (typeof g == "function" && (Ai(t, n, g, r), u = t.memoizedState), (o = ft || Va(t, n, o, r, m, u, c)) ? (h || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), s.props = r, s.state = u, s.context = c, r = o) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Iu(e, t), o = t.memoizedProps, c = t.type === t.elementType ? o : Ve(t.type, o), s.props = c, h = t.pendingProps, m = s.context, u = n.contextType, typeof u == "object" && u !== null ? u = Ae(u) : (u = Ee(n) ? bt : me.current, u = mn(t, u));
    var w = n.getDerivedStateFromProps;
    (g = typeof w == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (o !== h || m !== u) && Qa(t, s, r, u), ft = !1, m = t.memoizedState, s.state = m, ol(t, r, s, l);
    var S = t.memoizedState;
    o !== h || m !== S || ke.current || ft ? (typeof w == "function" && (Ai(t, n, w, r), S = t.memoizedState), (c = ft || Va(t, n, c, r, m, S, u) || !1) ? (g || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, S, u), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, S, u)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), s.props = r, s.state = S, s.context = u, r = c) : (typeof s.componentDidUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Vi(e, t, n, r, i, l);
}
function Vi(e, t, n, r, l, i) {
  ec(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return l && Da(t, n, !1), ot(e, t, i);
  r = t.stateNode, Af.current = t;
  var o = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = gn(t, e.child, null, i), t.child = gn(t, null, o, i)) : he(e, t, o, i), t.memoizedState = r.state, l && Da(t, n, !0), t.child;
}
function tc(e) {
  var t = e.stateNode;
  t.pendingContext ? za(e, t.pendingContext, t.pendingContext !== t.context) : t.context && za(e, t.context, !1), Ms(e, t.containerInfo);
}
function Xa(e, t, n, r, l) {
  return hn(), Cs(l), t.flags |= 256, he(e, t, n, r), t.child;
}
var Qi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Wi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function nc(e, t, n) {
  var r = t.pendingProps, l = J.current, i = !1, s = (t.flags & 128) !== 0, o;
  if ((o = s) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), K(J, l & 1), e === null)
    return Oi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Il(s, r, 0, null), e = At(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Wi(n), t.memoizedState = Qi, e) : bs(t, s));
  if (l = e.memoizedState, l !== null && (o = l.dehydrated, o !== null)) return bf(e, t, s, r, o, l, n);
  if (i) {
    i = r.fallback, s = t.mode, l = e.child, o = l.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Et(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), o !== null ? i = Et(o, i) : (i = At(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Wi(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Qi, r;
  }
  return i = e.child, e = i.sibling, r = Et(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function bs(e, t) {
  return t = Il({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Lr(e, t, n, r) {
  return r !== null && Cs(r), gn(t, e.child, null, n), e = bs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function bf(e, t, n, r, l, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = li(Error(L(422))), Lr(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Il({ mode: "visible", children: r.children }, l, 0, null), i = At(i, l, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && gn(t, e.child, null, s), t.child.memoizedState = Wi(s), t.memoizedState = Qi, i);
  if (!(t.mode & 1)) return Lr(e, t, s, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var o = r.dgst;
    return r = o, i = Error(L(419)), r = li(i, r, void 0), Lr(e, t, s, r);
  }
  if (o = (s & e.childLanes) !== 0, Se || o) {
    if (r = ae, r !== null) {
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
      l = l & (r.suspendedLanes | s) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, at(e, l), Be(r, e, l, -1));
    }
    return Hs(), r = li(Error(L(421))), Lr(e, t, s, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Jf.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, Ie = xt(l.nextSibling), Te = t, Z = !0, We = null, e !== null && (ze[De++] = nt, ze[De++] = rt, ze[De++] = $t, nt = e.id, rt = e.overflow, $t = t), t = bs(t, r.children), t.flags |= 4096, t);
}
function Za(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Fi(e.return, t, n);
}
function ii(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function rc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (he(e, t, r.children, n), r = J.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Za(e, n, t);
      else if (e.tag === 19) Za(e, n, t);
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
  if (K(J, r), !(t.mode & 1)) t.memoizedState = null;
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
function ot(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Vt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (e = t.child, n = Et(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Et(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function $f(e, t, n) {
  switch (t.tag) {
    case 3:
      tc(t), hn();
      break;
    case 5:
      Tu(t);
      break;
    case 1:
      Ee(t.type) && rl(t);
      break;
    case 4:
      Ms(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      K(sl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (K(J, J.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? nc(e, t, n) : (K(J, J.current & 1), e = ot(e, t, n), e !== null ? e.sibling : null);
      K(J, J.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return rc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), K(J, J.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, qu(e, t, n);
  }
  return ot(e, t, n);
}
var lc, Hi, ic, sc;
lc = function(e, t) {
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
ic = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Ot(qe.current);
    var i = null;
    switch (n) {
      case "input":
        l = pi(e, l), r = pi(e, r), i = [];
        break;
      case "select":
        l = ee({}, l, { value: void 0 }), r = ee({}, r, { value: void 0 }), i = [];
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
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Gn.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (o = l != null ? l[c] : void 0, r.hasOwnProperty(c) && u !== o && (u != null || o != null)) if (c === "style") if (o) {
        for (s in o) !o.hasOwnProperty(s) || u && u.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in u) u.hasOwnProperty(s) && o[s] !== u[s] && (n || (n = {}), n[s] = u[s]);
      } else n || (i || (i = []), i.push(
        c,
        n
      )), n = u;
      else c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, o = o ? o.__html : void 0, u != null && o !== u && (i = i || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Gn.hasOwnProperty(c) ? (u != null && c === "onScroll" && Y("scroll", e), i || o === u || (i = [])) : (i = i || []).push(c, u));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
sc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Pn(e, t) {
  if (!Z) switch (e.tailMode) {
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
function Uf(e, t, n) {
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
      return fe(t), null;
    case 1:
      return Ee(t.type) && nl(), fe(t), null;
    case 3:
      return r = t.stateNode, yn(), X(ke), X(me), zs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ir(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, We !== null && (qi(We), We = null))), Hi(e, t), fe(t), null;
    case 5:
      Ps(t);
      var l = Ot(ir.current);
      if (n = t.type, e !== null && t.stateNode != null) ic(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return fe(t), null;
        }
        if (e = Ot(qe.current), Ir(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Ze] = t, r[rr] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              Y("cancel", r), Y("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Y("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Fn.length; l++) Y(Fn[l], r);
              break;
            case "source":
              Y("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Y(
                "error",
                r
              ), Y("load", r);
              break;
            case "details":
              Y("toggle", r);
              break;
            case "input":
              sa(r, i), Y("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, Y("invalid", r);
              break;
            case "textarea":
              oa(r, i), Y("invalid", r);
          }
          vi(n, i), l = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var o = i[s];
            s === "children" ? typeof o == "string" ? r.textContent !== o && (i.suppressHydrationWarning !== !0 && jr(r.textContent, o, e), l = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (i.suppressHydrationWarning !== !0 && jr(
              r.textContent,
              o,
              e
            ), l = ["children", "" + o]) : Gn.hasOwnProperty(s) && o != null && s === "onScroll" && Y("scroll", r);
          }
          switch (n) {
            case "input":
              wr(r), aa(r, i, !0);
              break;
            case "textarea":
              wr(r), ua(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = tl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Do(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Ze] = t, e[rr] = r, lc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = wi(n, r), n) {
              case "dialog":
                Y("cancel", e), Y("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Y("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Fn.length; l++) Y(Fn[l], e);
                l = r;
                break;
              case "source":
                Y("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                Y(
                  "error",
                  e
                ), Y("load", e), l = r;
                break;
              case "details":
                Y("toggle", e), l = r;
                break;
              case "input":
                sa(e, r), l = pi(e, r), Y("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = ee({}, r, { value: void 0 }), Y("invalid", e);
                break;
              case "textarea":
                oa(e, r), l = gi(e, r), Y("invalid", e);
                break;
              default:
                l = r;
            }
            vi(n, l), o = l;
            for (i in o) if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "style" ? Fo(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Ro(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Kn(e, u) : typeof u == "number" && Kn(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Gn.hasOwnProperty(i) ? u != null && i === "onScroll" && Y("scroll", e) : u != null && us(e, i, u, s));
            }
            switch (n) {
              case "input":
                wr(e), aa(e, r, !1);
                break;
              case "textarea":
                wr(e), ua(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ct(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? an(e, !!r.multiple, i, !1) : r.defaultValue != null && an(
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
      return fe(t), null;
    case 6:
      if (e && t.stateNode != null) sc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (n = Ot(ir.current), Ot(qe.current), Ir(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ze] = t, (i = r.nodeValue !== n) && (e = Te, e !== null)) switch (e.tag) {
            case 3:
              jr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && jr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ze] = t, t.stateNode = r;
      }
      return fe(t), null;
    case 13:
      if (X(J), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Z && Ie !== null && t.mode & 1 && !(t.flags & 128)) Eu(), hn(), t.flags |= 98560, i = !1;
        else if (i = Ir(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(L(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(L(317));
            i[Ze] = t;
          } else hn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          fe(t), i = !1;
        } else We !== null && (qi(We), We = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || J.current & 1 ? ie === 0 && (ie = 3) : Hs())), t.updateQueue !== null && (t.flags |= 4), fe(t), null);
    case 4:
      return yn(), Hi(e, t), e === null && tr(t.stateNode.containerInfo), fe(t), null;
    case 10:
      return Is(t.type._context), fe(t), null;
    case 17:
      return Ee(t.type) && nl(), fe(t), null;
    case 19:
      if (X(J), i = t.memoizedState, i === null) return fe(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) Pn(i, !1);
      else {
        if (ie !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = ul(e), s !== null) {
            for (t.flags |= 128, Pn(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return K(J, J.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && ne() > wn && (t.flags |= 128, r = !0, Pn(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ul(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Pn(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !Z) return fe(t), null;
        } else 2 * ne() - i.renderingStartTime > wn && n !== 1073741824 && (t.flags |= 128, r = !0, Pn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ne(), t.sibling = null, n = J.current, K(J, r ? n & 1 | 2 : n & 1), t) : (fe(t), null);
    case 22:
    case 23:
      return Ws(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ne & 1073741824 && (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : fe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function Vf(e, t) {
  switch (Es(t), t.tag) {
    case 1:
      return Ee(t.type) && nl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return yn(), X(ke), X(me), zs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ps(t), null;
    case 13:
      if (X(J), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(L(340));
        hn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return X(J), null;
    case 4:
      return yn(), null;
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
var Mr = !1, pe = !1, Qf = typeof WeakSet == "function" ? WeakSet : Set, O = null;
function ln(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    te(e, t, r);
  }
  else n.current = null;
}
function Bi(e, t, n) {
  try {
    n();
  } catch (r) {
    te(e, t, r);
  }
}
var Ja = !1;
function Wf(e, t) {
  if (Ti = Jr, e = du(), Ss(e)) {
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
        var s = 0, o = -1, u = -1, c = 0, g = 0, h = e, m = null;
        t: for (; ; ) {
          for (var w; h !== n || l !== 0 && h.nodeType !== 3 || (o = s + l), h !== i || r !== 0 && h.nodeType !== 3 || (u = s + r), h.nodeType === 3 && (s += h.nodeValue.length), (w = h.firstChild) !== null; )
            m = h, h = w;
          for (; ; ) {
            if (h === e) break t;
            if (m === n && ++c === l && (o = s), m === i && ++g === r && (u = s), (w = h.nextSibling) !== null) break;
            h = m, m = h.parentNode;
          }
          h = w;
        }
        n = o === -1 || u === -1 ? null : { start: o, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Li = { focusedElem: e, selectionRange: n }, Jr = !1, O = t; O !== null; ) if (t = O, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, O = e;
  else for (; O !== null; ) {
    t = O;
    try {
      var S = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (S !== null) {
            var j = S.memoizedProps, b = S.memoizedState, d = t.stateNode, f = d.getSnapshotBeforeUpdate(t.elementType === t.type ? j : Ve(t.type, j), b);
            d.__reactInternalSnapshotBeforeUpdate = f;
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
      te(t, t.return, k);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, O = e;
      break;
    }
    O = t.return;
  }
  return S = Ja, Ja = !1, S;
}
function Wn(e, t, n) {
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
function Nl(e, t) {
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
function ac(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ac(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ze], delete t[rr], delete t[zi], delete t[Nf], delete t[jf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function oc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function qa(e) {
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
var oe = null, Qe = !1;
function ct(e, t, n) {
  for (n = n.child; n !== null; ) uc(e, t, n), n = n.sibling;
}
function uc(e, t, n) {
  if (Je && typeof Je.onCommitFiberUnmount == "function") try {
    Je.onCommitFiberUnmount(vl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      pe || ln(n, t);
    case 6:
      var r = oe, l = Qe;
      oe = null, ct(e, t, n), oe = r, Qe = l, oe !== null && (Qe ? (e = oe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : oe.removeChild(n.stateNode));
      break;
    case 18:
      oe !== null && (Qe ? (e = oe, n = n.stateNode, e.nodeType === 8 ? Jl(e.parentNode, n) : e.nodeType === 1 && Jl(e, n), Jn(e)) : Jl(oe, n.stateNode));
      break;
    case 4:
      r = oe, l = Qe, oe = n.stateNode.containerInfo, Qe = !0, ct(e, t, n), oe = r, Qe = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!pe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && Bi(n, t, s), l = l.next;
        } while (l !== r);
      }
      ct(e, t, n);
      break;
    case 1:
      if (!pe && (ln(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (o) {
        te(n, t, o);
      }
      ct(e, t, n);
      break;
    case 21:
      ct(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (pe = (r = pe) || n.memoizedState !== null, ct(e, t, n), pe = r) : ct(e, t, n);
      break;
    default:
      ct(e, t, n);
  }
}
function eo(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Qf()), t.forEach(function(r) {
      var l = qf.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function $e(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var i = e, s = t, o = s;
      e: for (; o !== null; ) {
        switch (o.tag) {
          case 5:
            oe = o.stateNode, Qe = !1;
            break e;
          case 3:
            oe = o.stateNode.containerInfo, Qe = !0;
            break e;
          case 4:
            oe = o.stateNode.containerInfo, Qe = !0;
            break e;
        }
        o = o.return;
      }
      if (oe === null) throw Error(L(160));
      uc(i, s, l), oe = null, Qe = !1;
      var u = l.alternate;
      u !== null && (u.return = null), l.return = null;
    } catch (c) {
      te(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) cc(t, e), t = t.sibling;
}
function cc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ($e(t, e), Ye(e), r & 4) {
        try {
          Wn(3, e, e.return), Nl(3, e);
        } catch (j) {
          te(e, e.return, j);
        }
        try {
          Wn(5, e, e.return);
        } catch (j) {
          te(e, e.return, j);
        }
      }
      break;
    case 1:
      $e(t, e), Ye(e), r & 512 && n !== null && ln(n, n.return);
      break;
    case 5:
      if ($e(t, e), Ye(e), r & 512 && n !== null && ln(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Kn(l, "");
        } catch (j) {
          te(e, e.return, j);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, o = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          o === "input" && i.type === "radio" && i.name != null && Po(l, i), wi(o, s);
          var c = wi(o, i);
          for (s = 0; s < u.length; s += 2) {
            var g = u[s], h = u[s + 1];
            g === "style" ? Fo(l, h) : g === "dangerouslySetInnerHTML" ? Ro(l, h) : g === "children" ? Kn(l, h) : us(l, g, h, c);
          }
          switch (o) {
            case "input":
              mi(l, i);
              break;
            case "textarea":
              zo(l, i);
              break;
            case "select":
              var m = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var w = i.value;
              w != null ? an(l, !!i.multiple, w, !1) : m !== !!i.multiple && (i.defaultValue != null ? an(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : an(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[rr] = i;
        } catch (j) {
          te(e, e.return, j);
        }
      }
      break;
    case 6:
      if ($e(t, e), Ye(e), r & 4) {
        if (e.stateNode === null) throw Error(L(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (j) {
          te(e, e.return, j);
        }
      }
      break;
    case 3:
      if ($e(t, e), Ye(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Jn(t.containerInfo);
      } catch (j) {
        te(e, e.return, j);
      }
      break;
    case 4:
      $e(t, e), Ye(e);
      break;
    case 13:
      $e(t, e), Ye(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Vs = ne())), r & 4 && eo(e);
      break;
    case 22:
      if (g = n !== null && n.memoizedState !== null, e.mode & 1 ? (pe = (c = pe) || g, $e(t, e), pe = c) : $e(t, e), Ye(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !g && e.mode & 1) for (O = e, g = e.child; g !== null; ) {
          for (h = O = g; O !== null; ) {
            switch (m = O, w = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Wn(4, m, m.return);
                break;
              case 1:
                ln(m, m.return);
                var S = m.stateNode;
                if (typeof S.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount();
                  } catch (j) {
                    te(r, n, j);
                  }
                }
                break;
              case 5:
                ln(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  no(h);
                  continue;
                }
            }
            w !== null ? (w.return = m, O = w) : no(h);
          }
          g = g.sibling;
        }
        e: for (g = null, h = e; ; ) {
          if (h.tag === 5) {
            if (g === null) {
              g = h;
              try {
                l = h.stateNode, c ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (o = h.stateNode, u = h.memoizedProps.style, s = u != null && u.hasOwnProperty("display") ? u.display : null, o.style.display = Oo("display", s));
              } catch (j) {
                te(e, e.return, j);
              }
            }
          } else if (h.tag === 6) {
            if (g === null) try {
              h.stateNode.nodeValue = c ? "" : h.memoizedProps;
            } catch (j) {
              te(e, e.return, j);
            }
          } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
            h.child.return = h, h = h.child;
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            g === h && (g = null), h = h.return;
          }
          g === h && (g = null), h.sibling.return = h.return, h = h.sibling;
        }
      }
      break;
    case 19:
      $e(t, e), Ye(e), r & 4 && eo(e);
      break;
    case 21:
      break;
    default:
      $e(
        t,
        e
      ), Ye(e);
  }
}
function Ye(e) {
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
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Kn(l, ""), r.flags &= -33);
          var i = qa(e);
          Yi(e, i, l);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, o = qa(e);
          Ki(e, o, s);
          break;
        default:
          throw Error(L(161));
      }
    } catch (u) {
      te(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Hf(e, t, n) {
  O = e, dc(e);
}
function dc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var l = O, i = l.child;
    if (l.tag === 22 && r) {
      var s = l.memoizedState !== null || Mr;
      if (!s) {
        var o = l.alternate, u = o !== null && o.memoizedState !== null || pe;
        o = Mr;
        var c = pe;
        if (Mr = s, (pe = u) && !c) for (O = l; O !== null; ) s = O, u = s.child, s.tag === 22 && s.memoizedState !== null ? ro(l) : u !== null ? (u.return = s, O = u) : ro(l);
        for (; i !== null; ) O = i, dc(i), i = i.sibling;
        O = l, Mr = o, pe = c;
      }
      to(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, O = i) : to(e);
  }
}
function to(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            pe || Nl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !pe) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Ve(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && ba(t, i, r);
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
              ba(t, s, n);
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
                  var h = g.dehydrated;
                  h !== null && Jn(h);
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
        pe || t.flags & 512 && Gi(t);
      } catch (m) {
        te(t, t.return, m);
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
function no(e) {
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
function ro(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Nl(4, t);
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
            Gi(t);
          } catch (u) {
            te(t, i, u);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Gi(t);
          } catch (u) {
            te(t, s, u);
          }
      }
    } catch (u) {
      te(t, t.return, u);
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
var Bf = Math.ceil, fl = ut.ReactCurrentDispatcher, $s = ut.ReactCurrentOwner, Fe = ut.ReactCurrentBatchConfig, W = 0, ae = null, re = null, ue = 0, Ne = 0, sn = It(0), ie = 0, ur = null, Vt = 0, jl = 0, Us = 0, Hn = null, _e = null, Vs = 0, wn = 1 / 0, et = null, pl = !1, Xi = null, St = null, Pr = !1, gt = null, ml = 0, Bn = 0, Zi = null, Wr = -1, Hr = 0;
function ye() {
  return W & 6 ? ne() : Wr !== -1 ? Wr : Wr = ne();
}
function kt(e) {
  return e.mode & 1 ? W & 2 && ue !== 0 ? ue & -ue : Tf.transition !== null ? (Hr === 0 && (Hr = Yo()), Hr) : (e = G, e !== 0 || (e = window.event, e = e === void 0 ? 16 : nu(e.type)), e) : 1;
}
function Be(e, t, n, r) {
  if (50 < Bn) throw Bn = 0, Zi = null, Error(L(185));
  fr(e, n, r), (!(W & 2) || e !== ae) && (e === ae && (!(W & 2) && (jl |= n), ie === 4 && mt(e, ue)), Ce(e, r), n === 1 && W === 0 && !(t.mode & 1) && (wn = ne() + 500, kl && Tt()));
}
function Ce(e, t) {
  var n = e.callbackNode;
  Id(e, t);
  var r = Zr(e, e === ae ? ue : 0);
  if (r === 0) n !== null && fa(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && fa(n), t === 1) e.tag === 0 ? If(lo.bind(null, e)) : _u(lo.bind(null, e)), Ef(function() {
      !(W & 6) && Tt();
    }), n = null;
    else {
      switch (Xo(r)) {
        case 1:
          n = ms;
          break;
        case 4:
          n = Go;
          break;
        case 16:
          n = Xr;
          break;
        case 536870912:
          n = Ko;
          break;
        default:
          n = Xr;
      }
      n = wc(n, fc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function fc(e, t) {
  if (Wr = -1, Hr = 0, W & 6) throw Error(L(327));
  var n = e.callbackNode;
  if (fn() && e.callbackNode !== n) return null;
  var r = Zr(e, e === ae ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = hl(e, r);
  else {
    t = r;
    var l = W;
    W |= 2;
    var i = mc();
    (ae !== e || ue !== t) && (et = null, wn = ne() + 500, Ft(e, t));
    do
      try {
        Yf();
        break;
      } catch (o) {
        pc(e, o);
      }
    while (!0);
    js(), fl.current = i, W = l, re !== null ? t = 0 : (ae = null, ue = 0, t = ie);
  }
  if (t !== 0) {
    if (t === 2 && (l = Ei(e), l !== 0 && (r = l, t = Ji(e, l))), t === 1) throw n = ur, Ft(e, 0), mt(e, r), Ce(e, ne()), n;
    if (t === 6) mt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Gf(l) && (t = hl(e, r), t === 2 && (i = Ei(e), i !== 0 && (r = i, t = Ji(e, i))), t === 1)) throw n = ur, Ft(e, 0), mt(e, r), Ce(e, ne()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          zt(e, _e, et);
          break;
        case 3:
          if (mt(e, r), (r & 130023424) === r && (t = Vs + 500 - ne(), 10 < t)) {
            if (Zr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ye(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Pi(zt.bind(null, e, _e, et), t);
            break;
          }
          zt(e, _e, et);
          break;
        case 4:
          if (mt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var s = 31 - He(r);
            i = 1 << s, s = t[s], s > l && (l = s), r &= ~i;
          }
          if (r = l, r = ne() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Bf(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Pi(zt.bind(null, e, _e, et), r);
            break;
          }
          zt(e, _e, et);
          break;
        case 5:
          zt(e, _e, et);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return Ce(e, ne()), e.callbackNode === n ? fc.bind(null, e) : null;
}
function Ji(e, t) {
  var n = Hn;
  return e.current.memoizedState.isDehydrated && (Ft(e, t).flags |= 256), e = hl(e, t), e !== 2 && (t = _e, _e = n, t !== null && qi(t)), e;
}
function qi(e) {
  _e === null ? _e = e : _e.push.apply(_e, e);
}
function Gf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], i = l.getSnapshot;
        l = l.value;
        try {
          if (!Ge(i(), l)) return !1;
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
function mt(e, t) {
  for (t &= ~Us, t &= ~jl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - He(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function lo(e) {
  if (W & 6) throw Error(L(327));
  fn();
  var t = Zr(e, 0);
  if (!(t & 1)) return Ce(e, ne()), null;
  var n = hl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ei(e);
    r !== 0 && (t = r, n = Ji(e, r));
  }
  if (n === 1) throw n = ur, Ft(e, 0), mt(e, t), Ce(e, ne()), n;
  if (n === 6) throw Error(L(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, zt(e, _e, et), Ce(e, ne()), null;
}
function Qs(e, t) {
  var n = W;
  W |= 1;
  try {
    return e(t);
  } finally {
    W = n, W === 0 && (wn = ne() + 500, kl && Tt());
  }
}
function Qt(e) {
  gt !== null && gt.tag === 0 && !(W & 6) && fn();
  var t = W;
  W |= 1;
  var n = Fe.transition, r = G;
  try {
    if (Fe.transition = null, G = 1, e) return e();
  } finally {
    G = r, Fe.transition = n, W = t, !(W & 6) && Tt();
  }
}
function Ws() {
  Ne = sn.current, X(sn);
}
function Ft(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, kf(n)), re !== null) for (n = re.return; n !== null; ) {
    var r = n;
    switch (Es(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && nl();
        break;
      case 3:
        yn(), X(ke), X(me), zs();
        break;
      case 5:
        Ps(r);
        break;
      case 4:
        yn();
        break;
      case 13:
        X(J);
        break;
      case 19:
        X(J);
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
  if (ae = e, re = e = Et(e.current, null), ue = Ne = t, ie = 0, ur = null, Us = jl = Vt = 0, _e = Hn = null, Rt !== null) {
    for (t = 0; t < Rt.length; t++) if (n = Rt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = l, r.next = s;
      }
      n.pending = r;
    }
    Rt = null;
  }
  return e;
}
function pc(e, t) {
  do {
    var n = re;
    try {
      if (js(), Ur.current = dl, cl) {
        for (var r = q.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        cl = !1;
      }
      if (Ut = 0, se = le = q = null, Qn = !1, sr = 0, $s.current = null, n === null || n.return === null) {
        ie = 1, ur = t, re = null;
        break;
      }
      e: {
        var i = e, s = n.return, o = n, u = t;
        if (t = ue, o.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var c = u, g = o, h = g.tag;
          if (!(g.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = g.alternate;
            m ? (g.updateQueue = m.updateQueue, g.memoizedState = m.memoizedState, g.lanes = m.lanes) : (g.updateQueue = null, g.memoizedState = null);
          }
          var w = Ha(s);
          if (w !== null) {
            w.flags &= -257, Ba(w, s, o, i, t), w.mode & 1 && Wa(i, c, t), t = w, u = c;
            var S = t.updateQueue;
            if (S === null) {
              var j = /* @__PURE__ */ new Set();
              j.add(u), t.updateQueue = j;
            } else S.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Wa(i, c, t), Hs();
              break e;
            }
            u = Error(L(426));
          }
        } else if (Z && o.mode & 1) {
          var b = Ha(s);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256), Ba(b, s, o, i, t), Cs(vn(u, o));
            break e;
          }
        }
        i = u = vn(u, o), ie !== 4 && (ie = 2), Hn === null ? Hn = [i] : Hn.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var d = Xu(i, u, t);
              Aa(i, d);
              break e;
            case 1:
              o = u;
              var f = i.type, p = i.stateNode;
              if (!(i.flags & 128) && (typeof f.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (St === null || !St.has(p)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var k = Zu(i, o, t);
                Aa(i, k);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      gc(n);
    } catch (z) {
      t = z, re === n && n !== null && (re = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function mc() {
  var e = fl.current;
  return fl.current = dl, e === null ? dl : e;
}
function Hs() {
  (ie === 0 || ie === 3 || ie === 2) && (ie = 4), ae === null || !(Vt & 268435455) && !(jl & 268435455) || mt(ae, ue);
}
function hl(e, t) {
  var n = W;
  W |= 2;
  var r = mc();
  (ae !== e || ue !== t) && (et = null, Ft(e, t));
  do
    try {
      Kf();
      break;
    } catch (l) {
      pc(e, l);
    }
  while (!0);
  if (js(), W = n, fl.current = r, re !== null) throw Error(L(261));
  return ae = null, ue = 0, ie;
}
function Kf() {
  for (; re !== null; ) hc(re);
}
function Yf() {
  for (; re !== null && !wd(); ) hc(re);
}
function hc(e) {
  var t = vc(e.alternate, e, Ne);
  e.memoizedProps = e.pendingProps, t === null ? gc(e) : re = t, $s.current = null;
}
function gc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Vf(n, t), n !== null) {
        n.flags &= 32767, re = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ie = 6, re = null;
        return;
      }
    } else if (n = Uf(n, t, Ne), n !== null) {
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
function zt(e, t, n) {
  var r = G, l = Fe.transition;
  try {
    Fe.transition = null, G = 1, Xf(e, t, n, r);
  } finally {
    Fe.transition = l, G = r;
  }
  return null;
}
function Xf(e, t, n, r) {
  do
    fn();
  while (gt !== null);
  if (W & 6) throw Error(L(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(L(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Td(e, i), e === ae && (re = ae = null, ue = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Pr || (Pr = !0, wc(Xr, function() {
    return fn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Fe.transition, Fe.transition = null;
    var s = G;
    G = 1;
    var o = W;
    W |= 4, $s.current = null, Wf(e, n), cc(n, e), gf(Li), Jr = !!Ti, Li = Ti = null, e.current = n, Hf(n), xd(), W = o, G = s, Fe.transition = i;
  } else e.current = n;
  if (Pr && (Pr = !1, gt = e, ml = l), i = e.pendingLanes, i === 0 && (St = null), kd(n.stateNode), Ce(e, ne()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (pl) throw pl = !1, e = Xi, Xi = null, e;
  return ml & 1 && e.tag !== 0 && fn(), i = e.pendingLanes, i & 1 ? e === Zi ? Bn++ : (Bn = 0, Zi = e) : Bn = 0, Tt(), null;
}
function fn() {
  if (gt !== null) {
    var e = Xo(ml), t = Fe.transition, n = G;
    try {
      if (Fe.transition = null, G = 16 > e ? 16 : e, gt === null) var r = !1;
      else {
        if (e = gt, gt = null, ml = 0, W & 6) throw Error(L(331));
        var l = W;
        for (W |= 4, O = e.current; O !== null; ) {
          var i = O, s = i.child;
          if (O.flags & 16) {
            var o = i.deletions;
            if (o !== null) {
              for (var u = 0; u < o.length; u++) {
                var c = o[u];
                for (O = c; O !== null; ) {
                  var g = O;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wn(8, g, i);
                  }
                  var h = g.child;
                  if (h !== null) h.return = g, O = h;
                  else for (; O !== null; ) {
                    g = O;
                    var m = g.sibling, w = g.return;
                    if (ac(g), g === c) {
                      O = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = w, O = m;
                      break;
                    }
                    O = w;
                  }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var j = S.child;
                if (j !== null) {
                  S.child = null;
                  do {
                    var b = j.sibling;
                    j.sibling = null, j = b;
                  } while (j !== null);
                }
              }
              O = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, O = s;
          else e: for (; O !== null; ) {
            if (i = O, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Wn(9, i, i.return);
            }
            var d = i.sibling;
            if (d !== null) {
              d.return = i.return, O = d;
              break e;
            }
            O = i.return;
          }
        }
        var f = e.current;
        for (O = f; O !== null; ) {
          s = O;
          var p = s.child;
          if (s.subtreeFlags & 2064 && p !== null) p.return = s, O = p;
          else e: for (s = f; O !== null; ) {
            if (o = O, o.flags & 2048) try {
              switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  Nl(9, o);
              }
            } catch (z) {
              te(o, o.return, z);
            }
            if (o === s) {
              O = null;
              break e;
            }
            var k = o.sibling;
            if (k !== null) {
              k.return = o.return, O = k;
              break e;
            }
            O = o.return;
          }
        }
        if (W = l, Tt(), Je && typeof Je.onPostCommitFiberRoot == "function") try {
          Je.onPostCommitFiberRoot(vl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      G = n, Fe.transition = t;
    }
  }
  return !1;
}
function io(e, t, n) {
  t = vn(n, t), t = Xu(e, t, 1), e = _t(e, t, 1), t = ye(), e !== null && (fr(e, 1, t), Ce(e, t));
}
function te(e, t, n) {
  if (e.tag === 3) io(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      io(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (St === null || !St.has(r))) {
        e = vn(n, e), e = Zu(t, e, 1), t = _t(t, e, 1), e = ye(), t !== null && (fr(t, 1, e), Ce(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Zf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ye(), e.pingedLanes |= e.suspendedLanes & n, ae === e && (ue & n) === n && (ie === 4 || ie === 3 && (ue & 130023424) === ue && 500 > ne() - Vs ? Ft(e, 0) : Us |= n), Ce(e, t);
}
function yc(e, t) {
  t === 0 && (e.mode & 1 ? (t = Sr, Sr <<= 1, !(Sr & 130023424) && (Sr = 4194304)) : t = 1);
  var n = ye();
  e = at(e, t), e !== null && (fr(e, t, n), Ce(e, n));
}
function Jf(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), yc(e, n);
}
function qf(e, t) {
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
  r !== null && r.delete(t), yc(e, n);
}
var vc;
vc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || ke.current) Se = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Se = !1, $f(e, t, n);
    Se = !!(e.flags & 131072);
  }
  else Se = !1, Z && t.flags & 1048576 && Su(t, il, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Qr(e, t), e = t.pendingProps;
      var l = mn(t, me.current);
      dn(t, n), l = Rs(null, t, r, e, l, n);
      var i = Os();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ee(r) ? (i = !0, rl(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ls(t), l.updater = Cl, t.stateNode = l, l._reactInternals = t, bi(t, r, e, n), t = Vi(null, t, r, !0, i, n)) : (t.tag = 0, Z && i && ks(t), he(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Qr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = tp(r), e = Ve(r, e), l) {
          case 0:
            t = Ui(null, t, r, e, n);
            break e;
          case 1:
            t = Ya(null, t, r, e, n);
            break e;
          case 11:
            t = Ga(null, t, r, e, n);
            break e;
          case 14:
            t = Ka(null, t, r, Ve(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ve(r, l), Ui(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ve(r, l), Ya(e, t, r, l, n);
    case 3:
      e: {
        if (tc(t), e === null) throw Error(L(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, Iu(e, t), ol(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = vn(Error(L(423)), t), t = Xa(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = vn(Error(L(424)), t), t = Xa(e, t, r, n, l);
          break e;
        } else for (Ie = xt(t.stateNode.containerInfo.firstChild), Te = t, Z = !0, We = null, n = Nu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (hn(), r === l) {
            t = ot(e, t, n);
            break e;
          }
          he(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Tu(t), e === null && Oi(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = l.children, Mi(r, l) ? s = null : i !== null && Mi(r, i) && (t.flags |= 32), ec(e, t), he(e, t, s, n), t.child;
    case 6:
      return e === null && Oi(t), null;
    case 13:
      return nc(e, t, n);
    case 4:
      return Ms(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = gn(t, null, r, n) : he(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ve(r, l), Ga(e, t, r, l, n);
    case 7:
      return he(e, t, t.pendingProps, n), t.child;
    case 8:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, s = l.value, K(sl, r._currentValue), r._currentValue = s, i !== null) if (Ge(i.value, s)) {
          if (i.children === l.children && !ke.current) {
            t = ot(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var o = i.dependencies;
          if (o !== null) {
            s = i.child;
            for (var u = o.firstContext; u !== null; ) {
              if (u.context === r) {
                if (i.tag === 1) {
                  u = lt(-1, n & -n), u.tag = 2;
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
        he(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, dn(t, n), l = Ae(l), r = r(l), t.flags |= 1, he(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Ve(r, t.pendingProps), l = Ve(r.type, l), Ka(e, t, r, l, n);
    case 15:
      return Ju(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ve(r, l), Qr(e, t), t.tag = 1, Ee(r) ? (e = !0, rl(t)) : e = !1, dn(t, n), Yu(t, r, l), bi(t, r, l, n), Vi(null, t, r, !0, e, n);
    case 19:
      return rc(e, t, n);
    case 22:
      return qu(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function wc(e, t) {
  return Bo(e, t);
}
function ep(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Re(e, t, n, r) {
  return new ep(e, t, n, r);
}
function Bs(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function tp(e) {
  if (typeof e == "function") return Bs(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ds) return 11;
    if (e === fs) return 14;
  }
  return 2;
}
function Et(e, t) {
  var n = e.alternate;
  return n === null ? (n = Re(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Br(e, t, n, r, l, i) {
  var s = 2;
  if (r = e, typeof e == "function") Bs(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Yt:
      return At(n.children, l, i, t);
    case cs:
      s = 8, l |= 8;
      break;
    case ui:
      return e = Re(12, n, t, l | 2), e.elementType = ui, e.lanes = i, e;
    case ci:
      return e = Re(13, n, t, l), e.elementType = ci, e.lanes = i, e;
    case di:
      return e = Re(19, n, t, l), e.elementType = di, e.lanes = i, e;
    case To:
      return Il(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case jo:
          s = 10;
          break e;
        case Io:
          s = 9;
          break e;
        case ds:
          s = 11;
          break e;
        case fs:
          s = 14;
          break e;
        case dt:
          s = 16, r = null;
          break e;
      }
      throw Error(L(130, e == null ? e : typeof e, ""));
  }
  return t = Re(s, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function At(e, t, n, r) {
  return e = Re(7, e, r, t), e.lanes = n, e;
}
function Il(e, t, n, r) {
  return e = Re(22, e, r, t), e.elementType = To, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function si(e, t, n) {
  return e = Re(6, e, null, t), e.lanes = n, e;
}
function ai(e, t, n) {
  return t = Re(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function np(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ul(0), this.expirationTimes = Ul(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ul(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Gs(e, t, n, r, l, i, s, o, u) {
  return e = new np(e, t, n, o, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Re(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ls(i), e;
}
function rp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Kt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function xc(e) {
  if (!e) return Nt;
  e = e._reactInternals;
  e: {
    if (Ht(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ee(t.type)) {
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
    if (Ee(n)) return xu(e, n, t);
  }
  return t;
}
function _c(e, t, n, r, l, i, s, o, u) {
  return e = Gs(n, r, !0, e, l, i, s, o, u), e.context = xc(null), n = e.current, r = ye(), l = kt(n), i = lt(r, l), i.callback = t ?? null, _t(n, i, l), e.current.lanes = l, fr(e, l, r), Ce(e, r), e;
}
function Tl(e, t, n, r) {
  var l = t.current, i = ye(), s = kt(l);
  return n = xc(n), t.context === null ? t.context = n : t.pendingContext = n, t = lt(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = _t(l, t, s), e !== null && (Be(e, l, s, i), $r(e, l, s)), s;
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
function so(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ks(e, t) {
  so(e, t), (e = e.alternate) && so(e, t);
}
function lp() {
  return null;
}
var Sc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ys(e) {
  this._internalRoot = e;
}
Ll.prototype.render = Ys.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  Tl(e, t, null, null);
};
Ll.prototype.unmount = Ys.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Qt(function() {
      Tl(null, e, null, null);
    }), t[st] = null;
  }
};
function Ll(e) {
  this._internalRoot = e;
}
Ll.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = qo();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < pt.length && t !== 0 && t < pt[n].priority; n++) ;
    pt.splice(n, 0, e), n === 0 && tu(e);
  }
};
function Xs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ml(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ao() {
}
function ip(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var c = gl(s);
        i.call(c);
      };
    }
    var s = _c(t, r, e, 0, null, !1, !1, "", ao);
    return e._reactRootContainer = s, e[st] = s.current, tr(e.nodeType === 8 ? e.parentNode : e), Qt(), s;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function() {
      var c = gl(u);
      o.call(c);
    };
  }
  var u = Gs(e, 0, !1, null, null, !1, !1, "", ao);
  return e._reactRootContainer = u, e[st] = u.current, tr(e.nodeType === 8 ? e.parentNode : e), Qt(function() {
    Tl(t, u, n, r);
  }), u;
}
function Pl(e, t, n, r, l) {
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
    Tl(t, s, e, l);
  } else s = ip(n, t, e, l, r);
  return gl(s);
}
Zo = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = On(t.pendingLanes);
        n !== 0 && (hs(t, n | 1), Ce(t, ne()), !(W & 6) && (wn = ne() + 500, Tt()));
      }
      break;
    case 13:
      Qt(function() {
        var r = at(e, 1);
        if (r !== null) {
          var l = ye();
          Be(r, e, 1, l);
        }
      }), Ks(e, 1);
  }
};
gs = function(e) {
  if (e.tag === 13) {
    var t = at(e, 134217728);
    if (t !== null) {
      var n = ye();
      Be(t, e, 134217728, n);
    }
    Ks(e, 134217728);
  }
};
Jo = function(e) {
  if (e.tag === 13) {
    var t = kt(e), n = at(e, t);
    if (n !== null) {
      var r = ye();
      Be(n, e, t, r);
    }
    Ks(e, t);
  }
};
qo = function() {
  return G;
};
eu = function(e, t) {
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
            var l = Sl(r);
            if (!l) throw Error(L(90));
            Mo(r), mi(r, l);
          }
        }
      }
      break;
    case "textarea":
      zo(e, n);
      break;
    case "select":
      t = n.value, t != null && an(e, !!n.multiple, t, !1);
  }
};
$o = Qs;
Uo = Qt;
var sp = { usingClientEntryPoint: !1, Events: [mr, qt, Sl, Ao, bo, Qs] }, zn = { findFiberByHostInstance: Dt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ap = { bundleType: zn.bundleType, version: zn.version, rendererPackageName: zn.rendererPackageName, rendererConfig: zn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ut.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Wo(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: zn.findFiberByHostInstance || lp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var zr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zr.isDisabled && zr.supportsFiber) try {
    vl = zr.inject(ap), Je = zr;
  } catch {
  }
}
Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sp;
Me.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xs(t)) throw Error(L(200));
  return rp(e, t, null, n);
};
Me.createRoot = function(e, t) {
  if (!Xs(e)) throw Error(L(299));
  var n = !1, r = "", l = Sc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Gs(e, 1, !1, null, null, n, !1, r, l), e[st] = t.current, tr(e.nodeType === 8 ? e.parentNode : e), new Ys(t);
};
Me.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(L(188)) : (e = Object.keys(e).join(","), Error(L(268, e)));
  return e = Wo(t), e = e === null ? null : e.stateNode, e;
};
Me.flushSync = function(e) {
  return Qt(e);
};
Me.hydrate = function(e, t, n) {
  if (!Ml(t)) throw Error(L(200));
  return Pl(null, e, t, !0, n);
};
Me.hydrateRoot = function(e, t, n) {
  if (!Xs(e)) throw Error(L(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", s = Sc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = _c(t, null, e, 1, n ?? null, l, !1, i, s), e[st] = t.current, tr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Ll(t);
};
Me.render = function(e, t, n) {
  if (!Ml(t)) throw Error(L(200));
  return Pl(null, e, t, !1, n);
};
Me.unmountComponentAtNode = function(e) {
  if (!Ml(e)) throw Error(L(40));
  return e._reactRootContainer ? (Qt(function() {
    Pl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[st] = null;
    });
  }), !0) : !1;
};
Me.unstable_batchedUpdates = Qs;
Me.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ml(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return Pl(e, t, n, !1, r);
};
Me.version = "18.3.1-next-f1338f8080-20240426";
function kc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kc);
    } catch (e) {
      console.error(e);
    }
}
kc(), ko.exports = Me;
var je = ko.exports, Ec, oo = je;
Ec = oo.createRoot, oo.hydrateRoot;
window.api = Q;
const op = async () => {
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
}, up = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await Q.fetchApi(n);
  return r.ok ? await r.json() : [];
}, cp = async () => {
  const e = await Q.fetchApi("/meld/search-suggestions");
  return e.ok ? await e.json() : [];
}, Cc = async () => {
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
}, dp = async (e, t) => {
  if (!(await Q.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  })).ok)
    throw new Error("Failed to save setting");
}, fp = async (e, t) => {
  if (!(await Q.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  })).ok)
    throw new Error("Failed to link parent");
}, pp = async (e, t = 12) => {
  const n = await Q.fetchApi(
    `/meld/suggest-parents?id=${e}&threshold=${t}`
  );
  return n.ok ? await n.json() : [];
}, ts = async (e) => {
  const t = await Q.fetchApi(`/meld/lineage?id=${e}`);
  return t.ok ? await t.json() : [];
}, mp = async (e) => {
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
}, Nc = async (e) => {
  const t = await Q.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to restore images");
  }
}, jc = async (e) => {
  const t = await Q.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok)
    throw new Error("Failed to register image");
  return await t.json();
}, hp = async (e, t, n = !1, r) => {
  const l = await Q.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  return l.ok ? await l.json() : { folders: [], images: [], image_count: 0 };
}, gp = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await Q.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  return l.ok ? await l.json() : {};
}, yp = async (e, t, n) => {
  const r = await Q.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  return r.ok ? (await r.json()).count : 0;
}, vp = async (e) => {
  const t = await Q.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to start scan");
  }
}, wp = async () => {
  if (!(await Q.fetchApi("/meld/scan/cancel", {
    method: "POST"
  })).ok)
    throw new Error("Failed to cancel scan");
}, xp = async () => {
  const e = await Q.fetchApi("/meld/favorites");
  return e.ok ? await e.json() : [];
}, _p = async (e, t) => {
  if (!(await Q.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  })).ok)
    throw new Error("Failed to save favorite");
}, uo = async (e) => {
  if (!(await Q.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  })).ok)
    throw new Error("Failed to delete favorite");
}, Sp = async (e, t) => {
  if (!(await Q.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  })).ok)
    throw new Error("Failed to update favorite");
}, Zs = async () => {
  const e = await Q.fetchApi("/meld/tags");
  return e.ok ? await e.json() : [];
}, kp = async (e) => {
  const t = await Q.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  if (!t.ok)
    throw new Error("Failed to create tag");
  return await t.json();
}, Ep = async (e) => {
  if (!(await Q.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  })).ok)
    throw new Error("Failed to delete tag");
}, Cp = async (e, t) => {
  const n = await Q.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  if (!n.ok) {
    const r = await n.json();
    throw new Error(r.error || "Failed to rename tag");
  }
}, Np = async (e, t) => {
  if (!(await Q.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  })).ok)
    throw new Error("Failed to update image tags");
}, jp = async (e, t, n) => {
  if (!(await Q.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  })).ok)
    throw new Error("Failed to bulk update image tags");
}, Ip = async (e) => {
  const t = await Q.fetchApi(`/meld/image/${e}/workflow`);
  if (!t.ok)
    throw new Error("Failed to fetch workflow");
  return await t.json();
}, Tp = async (e) => {
  const t = await Q.fetchApi(`/meld/image/${e}/snapshot_data`);
  if (!t.ok)
    throw new Error("Failed to fetch snapshot data");
  return await t.json();
};
var Ic = { exports: {} }, zl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lp = x, Mp = Symbol.for("react.element"), Pp = Symbol.for("react.fragment"), zp = Object.prototype.hasOwnProperty, Dp = Lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Rp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Tc(e, t, n) {
  var r, l = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) zp.call(t, r) && !Rp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Mp, type: e, key: i, ref: s, props: l, _owner: Dp.current };
}
zl.Fragment = Pp;
zl.jsx = Tc;
zl.jsxs = Tc;
Ic.exports = zl;
var a = Ic.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Op = {
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
const Fp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), H = (e, t) => {
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
        ...Op,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: s ? Number(i) * 24 / Number(l) : i,
        className: ["lucide", `lucide-${Fp(e)}`, o].join(" "),
        ...c
      },
      [
        ...t.map(([h, m]) => x.createElement(h, m)),
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
const Ap = H("AlertTriangle", [
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
const bp = H("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const co = H("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $p = H("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Up = H("Box", [
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
const Vp = H("Calendar", [
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
const Qp = H("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lc = H("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mc = H("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pc = H("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wp = H("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hp = H("Download", [
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
const Bp = H("Folder", [
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
const Gp = H("Info", [
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
const Kp = H("LayoutGrid", [
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
const Yp = H("Maximize", [
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
const Xp = H("Minimize", [
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
const Zp = H("MoreVertical", [
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
const zc = H("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jp = H("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qp = H("PlusCircle", [
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
const cr = H("RefreshCw", [
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
const xn = H("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const em = H("Settings", [
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
const tm = H("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fo = H("Star", [
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
const Cn = H("Tag", [
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
const _n = H("Trash2", [
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
const nm = H("Type", [
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
const rm = H("Upload", [
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
const ve = H("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
let yl = !1;
const lm = (e) => {
  yl = e, yl && console.log("[Meld] Logger initialized in DEV mode.");
}, im = (...e) => {
  yl && console.log("[Meld]", ...e);
}, sm = (...e) => {
  yl && console.warn("[Meld]", ...e);
}, am = (...e) => {
  console.error("[Meld]", ...e);
}, ge = {
  log: im,
  warn: sm,
  error: am,
  init: lm
}, om = {
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
function um(e, t) {
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
const Dc = x.createContext(void 0), cm = ({
  children: e
}) => {
  const [t, n] = x.useReducer(um, om), r = x.useCallback(async () => {
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
      const c = await xp();
      n({ type: "SET_FAVORITES", payload: c });
    } catch (c) {
      ge.error("Failed to load favorites", c);
    }
  }, []), s = x.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const c = Array.from(t.selectedIds), h = t.images.filter(
      (m) => t.selectedIds.has(m.id)
    ).some(
      (m) => m.parent_id || m.has_children
    );
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: c,
        hasLineage: h,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), o = x.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const c = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 }), await Nc(c), n({ type: "CLEAR_SELECTION" }), await r();
    } catch (g) {
      n({
        type: "SET_ERROR",
        payload: g instanceof Error ? g.message : String(g)
      });
    }
  }, [t.selectedIds, r]), u = x.useCallback(
    async (c, g) => {
      try {
        await dp(c, g), n({ type: "SET_SETTINGS", payload: { [c]: g } });
      } catch (h) {
        n({
          type: "SET_ERROR",
          payload: h instanceof Error ? h.message : String(h)
        });
      }
    },
    []
  );
  return x.useEffect(() => {
    (async () => {
      try {
        const g = await Cc();
        n({ type: "SET_SETTINGS", payload: g });
      } catch (g) {
        ge.error("Failed to load settings", g);
      }
    })();
  }, []), x.useEffect(() => {
    i();
  }, [i]), x.useEffect(() => {
    const c = () => {
      r();
    }, g = (m) => {
      const w = m.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: w }
      });
    }, h = (m) => {
      const w = m.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !1,
          isFinished: !0,
          shouldCancel: !1,
          newCount: w.new_count || 0,
          totalCount: w.total_count || 0,
          progress: {
            current: w.total_count || t.scanStatus.progress.total,
            total: w.total_count || t.scanStatus.progress.total,
            phase: "completed"
          }
        }
      }), r();
    };
    return window.addEventListener("meld-refresh", c), window.addEventListener("meld-scan-progress", g), window.addEventListener("meld-scan-finished", h), () => {
      window.removeEventListener("meld-refresh", c), window.removeEventListener("meld-scan-progress", g), window.removeEventListener("meld-scan-finished", h);
    };
  }, [r, t.scanStatus.progress.total]), x.useEffect(() => {
    r();
  }, [r]), /* @__PURE__ */ a.jsx(
    Dc.Provider,
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
}, Ke = () => {
  const e = x.useContext(Dc);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, dm = ({
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
}, fm = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = Ke(), l = e.selectedIds.size;
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
                  cr,
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
                  _n,
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
                  Cn,
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
                  _n,
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
              /* @__PURE__ */ a.jsx(ve, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
              "Cancel"
            ]
          }
        )
      ]
    }
  );
}, Rc = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: l, dispatch: i, refreshImages: s } = Ke(), o = x.useCallback(() => {
    i({ type: "CLOSE_MODAL" });
  }, [i]), u = x.useCallback(
    (h) => {
      if (l.viewerImageId === null || !h.has(l.viewerImageId))
        return;
      const m = l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
        (j) => j.exists !== !1 && !(l.settings["gallery.hide_parent_images"] && j.has_children)
      ), w = m.findIndex(
        (j) => j.id === l.viewerImageId
      );
      if (w === -1) return;
      let S = !1;
      for (let j = 1; j < m.length; j++) {
        const b = (w + j) % m.length;
        if (!h.has(m[b].id)) {
          i({
            type: "OPEN_VIEWER",
            payload: { id: m[b].id, mode: l.viewerMode }
          }), S = !0;
          break;
        }
      }
      S || i({ type: "CLOSE_VIEWER" });
    },
    [
      l.viewerImageId,
      l.viewerMode,
      l.lineageImages,
      l.images,
      l.settings,
      i
    ]
  );
  x.useEffect(() => {
    const h = (m) => {
      m.key === "Escape" && o();
    };
    return window.addEventListener("keydown", h), () => window.removeEventListener("keydown", h);
  }, [o]);
  const c = async () => {
    try {
      i({ type: "SET_LOADING", payload: !0 });
      const h = new Set(e);
      u(h), await ns(e, n), !n && r && r(e), i({ type: "CLEAR_SELECTION" }), i({ type: "CLOSE_MODAL" }), await s();
    } catch (h) {
      i({
        type: "SET_ERROR",
        payload: h instanceof Error ? h.message : String(h)
      }), i({ type: "SET_LOADING", payload: !1 });
    }
  }, g = async () => {
    try {
      i({ type: "SET_LOADING", payload: !0 });
      const h = new Set(e);
      for (const m of e) {
        const w = await ts(m);
        for (const S of w)
          h.add(S.id);
      }
      u(h), await ns(Array.from(h), n), !n && r && r(Array.from(h)), i({ type: "CLEAR_SELECTION" }), i({ type: "CLOSE_MODAL" }), await s();
    } catch (h) {
      i({
        type: "SET_ERROR",
        payload: h instanceof Error ? h.message : String(h)
      }), i({ type: "SET_LOADING", payload: !1 });
    }
  };
  return je.createPortal(
    /* @__PURE__ */ a.jsx("div", { className: "meld-modal-overlay", onClick: o, children: /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "meld-modal-content meld-modal-content--small",
        onClick: (h) => h.stopPropagation(),
        children: [
          /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ a.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
              /* @__PURE__ */ a.jsx(_n, { size: 20, color: "var(--meld-danger-color)" }),
              n ? "Permanent Deletion" : "Move to Trash"
            ] }),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: o,
                children: /* @__PURE__ */ a.jsx(ve, { size: 20 })
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
                        Ap,
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
                onClick: o,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-danger",
                  onClick: c,
                  children: n ? "Delete Permanently" : "Move to Trash"
                }
              ),
              t && /* @__PURE__ */ a.jsx(
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
    ) }),
    document.fullscreenElement || document.body
  );
}, Oe = (e) => {
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
}, pm = ({ image: e }) => {
  const { state: t, dispatch: n } = Ke(), r = t.selectedIds.has(e.id), [l, i] = x.useState(null), [s, o] = x.useState(!1), [u, c] = x.useState(null), [g, h] = x.useState(!1), m = x.useRef(null), w = async (E, R, y = !1) => {
    try {
      await navigator.clipboard.writeText(E), y ? (h(!0), setTimeout(() => h(!1), 2e3)) : (c(R), setTimeout(() => c(null), 2e3));
    } catch (N) {
      console.error("Failed to copy text: ", N);
    }
  };
  x.useEffect(() => {
    const E = (y) => {
      y.key === "Escape" && (l ? i(null) : o(!1));
    }, R = (y) => {
      m.current && !m.current.contains(y.target) && o(!1);
    };
    return window.addEventListener("keydown", E), s && document.addEventListener("mousedown", R), () => {
      window.removeEventListener("keydown", E), document.removeEventListener("mousedown", R);
    };
  }, [s, l]);
  const S = (E) => {
    const R = t.settings["gallery.lineage_max_depth"];
    if (R === 0) return [];
    if (E.ancestors && E.ancestors.length > 0)
      return E.ancestors.slice(0, R).map(($) => ({
        id: $.id,
        imgSrc: Oe($)
      }));
    const y = E.parent_id;
    if (!y || !E.parent_filename) return [];
    const N = t.images.find(($) => $.id === y);
    let v = null;
    if (N ? v = Oe(N) : v = Oe({
      filename: E.parent_filename,
      subfolder: E.parent_subfolder || "",
      type: E.parent_type
    }), !v) return [];
    const I = {
      id: y || null,
      imgSrc: v
    };
    if (N && R > 1) {
      const $ = S(N);
      return [I, ...$].slice(0, R);
    }
    return [I];
  }, j = S(e), d = t.settings["sidebar.show_filename"] === "filepath" ? `${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, f = Oe(e), p = (E) => {
    E.shiftKey ? (E.preventDefault(), E.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : E.ctrlKey || E.metaKey || t.selectedIds.size > 0 ? (E.preventDefault(), E.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
  }, k = (E) => {
    E.shiftKey ? (E.preventDefault(), E.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : n({ type: "TOGGLE_SELECT", payload: e.id });
  }, z = (E) => {
    (E.shiftKey || E.ctrlKey || E.metaKey || t.selectedIds.size > 0) && E.preventDefault();
  }, _ = (E) => {
    (E.key === "Enter" || E.key === " ") && (E.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
  }, M = async () => {
    try {
      const E = await Ip(e.id);
      if (!E.workflow) {
        alert("No workflow information is saved for this image.");
        return;
      }
      await window.app.loadGraphData(
        E.workflow
      ), console.log("Workflow restored successfully from Meld");
    } catch (E) {
      console.error("Error restoring workflow:", E), alert("Failed to restore workflow.");
    }
  }, T = async () => {
    try {
      const E = await Tp(e.id), R = "MeldUnifiedLoader", y = window.app, v = window.LiteGraph.createNode(R);
      if (!v) {
        console.error(`Node type ${R} not found.`), alert(
          `Node type ${R} not found. Please make sure the Meld Unified Loader node is installed.`
        );
        return;
      }
      const I = {
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
        for (const [C, P] of Object.entries(I)) {
          const F = E[C];
          if (F != null) {
            const A = v.widgets.find(
              (B) => B.name === P
            );
            A && (A.value = F);
          }
        }
        const D = v.widgets.find(
          (C) => C.name === "control_after_generate"
        );
        D && (D.value = "fixed");
      }
      const $ = y.canvas.ds.offset, U = y.canvas.ds.scale;
      v.pos = [(-$[0] + 400) / U, (-$[1] + 300) / U], y.graph.add(v), y.canvas.selectNode(v), y.canvas.centerOnNode(v);
    } catch (E) {
      console.error("Error adding Unified Loader:", E), alert("Failed to load settings.");
    }
  };
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `meld-image-card ${r ? "meld-image-card--selected" : ""}`,
      onClick: k,
      onMouseDown: z,
      onKeyDown: _,
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ a.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ a.jsx(
          "img",
          {
            src: f,
            className: "meld-image-card__thumbnail",
            alt: e.filename,
            loading: "lazy",
            onMouseDown: z,
            onClick: (E) => {
              E.stopPropagation(), p(E);
            }
          }
        ) }),
        /* @__PURE__ */ a.jsxs("div", { className: "meld-image-card__details", children: [
          (t.settings["sidebar.show_filename"] !== "none" || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ a.jsxs("div", { className: "meld-image-card__filename", children: [
            t.settings["sidebar.show_filename"] !== "none" && d,
            t.settings["sidebar.show_filename"] !== "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
            t.settings["sidebar.show_filename"] === "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
          ] }),
          t.settings["gallery.show_parent_image"] && j.length > 0 && /* @__PURE__ */ a.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
            /* @__PURE__ */ a.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
            /* @__PURE__ */ a.jsx("div", { className: "meld-lineage-thumbs", children: j.map(
              (E, R) => E.imgSrc && /* @__PURE__ */ a.jsx(
                "img",
                {
                  src: E.imgSrc,
                  className: "meld-lineage-badge__parent-thumb",
                  loading: "lazy",
                  onClick: (y) => {
                    y.stopPropagation(), n({
                      type: "OPEN_VIEWER",
                      payload: { id: E.id || e.id, mode: "lineage" }
                    });
                  },
                  title: R === 0 ? "Source" : R === 1 ? "Grand-Source" : `Ancestor (S${R + 1})`,
                  alt: "source thumb"
                },
                E.id || R
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
              onClick: (E) => {
                E.stopPropagation(), i({
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
                    onClick: (E) => {
                      E.stopPropagation(), w(e.model_name || "-", "Model");
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
              onClick: (E) => {
                E.stopPropagation(), i({
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
                    onClick: (E) => {
                      E.stopPropagation(), w(
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
              onClick: (E) => {
                E.stopPropagation(), i({
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
                    onClick: (E) => {
                      E.stopPropagation(), w(
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
              onClick: (E) => {
                E.stopPropagation(), n({
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
                /* @__PURE__ */ a.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((E, R) => /* @__PURE__ */ a.jsx("span", { className: "meld-image-card__tag", children: E }, `${E}-${R}`)) : /* @__PURE__ */ a.jsx(
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
              onClick: (E) => {
                E.stopPropagation(), o(!s);
              },
              title: "Menu",
              children: /* @__PURE__ */ a.jsx(Zp, { size: 16 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (E) => {
                E.stopPropagation(), T();
              },
              title: "Add Unified Loader",
              children: /* @__PURE__ */ a.jsx(co, { size: 16 })
            }
          ),
          s && /* @__PURE__ */ a.jsxs("div", { className: "meld-image-card__menu", children: [
            /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (E) => {
                  E.stopPropagation(), T(), o(!1);
                },
                children: [
                  /* @__PURE__ */ a.jsx(co, { size: 14 }),
                  /* @__PURE__ */ a.jsx("span", { children: "Add Unified Loader" })
                ]
              }
            ),
            /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (E) => {
                  E.stopPropagation(), M(), o(!1);
                },
                children: [
                  /* @__PURE__ */ a.jsx(cr, { size: 14 }),
                  /* @__PURE__ */ a.jsx("span", { children: "Restore Full Workflow" })
                ]
              }
            ),
            /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (E) => {
                  E.stopPropagation(), n({
                    type: "OPEN_MODAL",
                    payload: { type: "parent_selection", imageId: e.id }
                  }), o(!1);
                },
                children: [
                  /* @__PURE__ */ a.jsx(qp, { size: 14 }),
                  /* @__PURE__ */ a.jsx("span", { children: "Add source image" })
                ]
              }
            ),
            /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (E) => {
                  E.stopPropagation(), n({
                    type: "OPEN_MODAL",
                    payload: {
                      type: "tag_edit",
                      imageIds: [e.id],
                      tags: e.tags || []
                    }
                  }), o(!1);
                },
                children: [
                  /* @__PURE__ */ a.jsx(Cn, { size: 14 }),
                  /* @__PURE__ */ a.jsx("span", { children: "Edit Tags" })
                ]
              }
            )
          ] })
        ] }),
        l && je.createPortal(
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "meld-prompt-popup-overlay",
              onClick: (E) => {
                E.stopPropagation(), i(null);
              },
              children: /* @__PURE__ */ a.jsxs(
                "div",
                {
                  className: "meld-prompt-popup-content",
                  onClick: (E) => E.stopPropagation(),
                  children: [
                    /* @__PURE__ */ a.jsxs("div", { className: "meld-prompt-popup-header", children: [
                      /* @__PURE__ */ a.jsx("span", { children: l.title }),
                      /* @__PURE__ */ a.jsxs(
                        "div",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            g ? /* @__PURE__ */ a.jsx(
                              Lc,
                              {
                                size: 18,
                                style: { color: "var(--meld-success-color)" }
                              }
                            ) : /* @__PURE__ */ a.jsx(
                              Wp,
                              {
                                className: "meld-prompt-popup-copy",
                                size: 18,
                                onClick: () => w(l.text, "", !0)
                              }
                            ),
                            /* @__PURE__ */ a.jsx(
                              ve,
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
}, Oc = () => {
  const { dispatch: e } = Ke(), [t, n] = x.useState({
    type: "output",
    subfolder: "",
    custom_path: "",
    recursive: !0,
    auto_link_parent: !0,
    tags: []
  }), [r, l] = x.useState([]), [i, s] = x.useState([]), [o, u] = x.useState(0), [c, g] = x.useState(!1), [h, m] = x.useState([]), [w, S] = x.useState(""), [j, b] = x.useState(!1), [d, f] = x.useState(null);
  x.useEffect(() => {
    (async () => {
      try {
        const N = await op();
        n((v) => ({ ...v, custom_path: N }));
      } catch (N) {
        console.error("Failed to fetch home directory:", N);
      }
    })();
  }, []), x.useEffect(() => {
    const y = new AbortController();
    return (async () => {
      const v = t.type === "custom" ? t.custom_path : t.subfolder;
      if (console.log(
        `[Meld] loadFolders started. Path: "${v}", Type: "${t.type}"`
      ), t.type === "custom" && !v) {
        console.log("[Meld] Custom path is empty, skipping load."), l([]), s([]), u(0);
        return;
      }
      g(!0);
      const I = v, $ = t.type;
      try {
        console.log("[Meld] Step 1: Fast load starting...");
        const U = await hp(
          t.type,
          v,
          !0,
          y.signal
        );
        if (y.signal.aborted) {
          console.log("[Meld] Step 1: Aborted.");
          return;
        }
        console.log(
          `[Meld] Step 1 complete. Found ${U.folders.length} folders, ${U.images.length} images.`
        ), l(U.folders), s(U.images), u(null);
        const D = U.folders.map((C) => C.name);
        D.length > 0 && (console.log(
          `[Meld] Step 2: Metadata fetch starting for ${D.length} folders...`
        ), gp(
          $,
          I,
          D,
          y.signal
        ).then((C) => {
          if (y.signal.aborted) {
            console.log("[Meld] Step 2: Aborted.");
            return;
          }
          console.log("[Meld] Step 2: Metadata fetch complete."), l(
            (P) => P.map((F) => {
              const A = C[F.name];
              return A ? { ...F, count: A.count, preview: A.preview } : F;
            })
          );
        }).catch((C) => {
          C.name !== "AbortError" && console.error("[Meld] Step 2: Metadata fetch failed:", C);
        })), console.log("[Meld] Step 3: Path image count starting..."), yp($, I, y.signal).then((C) => {
          if (y.signal.aborted) {
            console.log("[Meld] Step 3: Aborted.");
            return;
          }
          console.log(`[Meld] Step 3: Path image count complete: ${C}`), u(C);
        }).catch((C) => {
          C.name !== "AbortError" && console.error("[Meld] Step 3: Path image count failed:", C);
        });
      } catch (U) {
        if (U.name === "AbortError") {
          console.log("[Meld] Request aborted.");
          return;
        }
        console.error("[Meld] Failed to load folders:", U), l([]), s([]), u(0);
      } finally {
        y.signal.aborted || g(!1);
      }
    })(), () => {
      y.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const p = x.useCallback(async () => {
    b(!0);
    try {
      const y = await Zs();
      m(y);
    } catch (y) {
      console.error("Failed to fetch tags:", y);
    } finally {
      b(!1);
    }
  }, []);
  x.useEffect(() => {
    p();
  }, [p]), x.useEffect(() => {
    const y = (N) => {
      N.key === "Escape" && d && f(null);
    };
    return window.addEventListener("keydown", y), () => window.removeEventListener("keydown", y);
  }, [d]);
  const k = x.useMemo(() => h.filter(
    (y) => y.name.toLowerCase().includes(w.toLowerCase()) && !t.tags.includes(y.name)
  ), [h, w, t.tags]), z = (y) => {
    const N = y.trim();
    N && !t.tags.includes(N) && (n({ ...t, tags: [...t.tags, N] }), S(""));
  }, _ = (y) => {
    n({ ...t, tags: t.tags.filter((N) => N !== y) });
  }, M = (y) => {
    y.key === "Enter" && w.trim() && (y.preventDefault(), z(w.trim()));
  }, T = async () => {
    try {
      await vp(t), e({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !0,
          isFinished: !1,
          shouldCancel: !1,
          newCount: 0,
          progress: { current: 0, total: 0, phase: "registering" }
        }
      }), e({ type: "CLOSE_MODAL" });
    } catch (y) {
      console.error("Failed to start scan:", y), alert(`Failed to start scan: ${y}`);
    }
  }, E = (y) => {
    if (t.type === "custom") {
      const N = t.custom_path.includes("\\") ? "\\" : "/", v = t.custom_path.endsWith(N) ? `${t.custom_path}${y}` : `${t.custom_path}${N}${y}`;
      n({ ...t, custom_path: v });
    } else {
      const N = t.subfolder ? `${t.subfolder}/${y}` : y;
      n({ ...t, subfolder: N });
    }
  }, R = () => {
    if (t.type === "custom") {
      const y = t.custom_path.includes("\\") ? "\\" : "/", N = t.custom_path.split(y);
      if (N.length > 1) {
        N.pop();
        let v = N.join(y);
        v === "" && y === "/" && (v = "/"), n({ ...t, custom_path: v });
      }
    } else {
      const y = t.subfolder.split("/");
      y.pop(), n({ ...t, subfolder: y.join("/") });
    }
  };
  return je.createPortal(
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
              onClick: (y) => y.stopPropagation(),
              children: [
                /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ a.jsx("h2", { children: "Import Images" }),
                  /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => e({ type: "CLOSE_MODAL" }),
                      children: /* @__PURE__ */ a.jsx(ve, { size: 20 })
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
                          onChange: (y) => n({
                            ...t,
                            type: y.target.value,
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
                          onChange: (y) => n({ ...t, recursive: y.target.checked })
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
                          onChange: (y) => n({
                            ...t,
                            auto_link_parent: y.target.checked
                          })
                        }
                      ),
                      "Auto Link Parent"
                    ] }) }),
                    /* @__PURE__ */ a.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ a.jsx("label", { htmlFor: "import-tags", children: "Tags to Add" }),
                      /* @__PURE__ */ a.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ a.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((y) => /* @__PURE__ */ a.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        y,
                        /* @__PURE__ */ a.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => _(y),
                            children: /* @__PURE__ */ a.jsx(ve, { size: 12 })
                          }
                        )
                      ] }, y)) }),
                      /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ a.jsx(xn, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ a.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: w,
                            onChange: (y) => S(y.target.value),
                            onKeyDown: M
                          }
                        ),
                        w.trim() && !t.tags.includes(w.trim()) && /* @__PURE__ */ a.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => z(w),
                            children: /* @__PURE__ */ a.jsx(Js, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ a.jsx("div", { className: "meld-tag-suggestions", children: j ? /* @__PURE__ */ a.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : k.length === 0 ? w && /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        w
                      ] }) : k.map((y) => /* @__PURE__ */ a.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => z(y.name),
                          children: y.name
                        },
                        y.id
                      )) })
                    ] }),
                    /* @__PURE__ */ a.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ a.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "meld-btn meld-btn-primary",
                        onClick: T,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ a.jsx(Jp, { size: 16 }),
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
                          onClick: R,
                          children: [
                            /* @__PURE__ */ a.jsx(Mc, { size: 16 }),
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
                          onChange: (y) => n({ ...t, custom_path: y.target.value }),
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
                      r.map((y) => /* @__PURE__ */ a.jsxs(
                        "div",
                        {
                          className: "meld-folder-item",
                          onClick: () => E(y.name),
                          children: [
                            /* @__PURE__ */ a.jsx("div", { className: "meld-folder-icon-wrapper", children: y.preview ? /* @__PURE__ */ a.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: Oe(y.preview),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ a.jsx(Bp, { size: 16 }) }),
                            /* @__PURE__ */ a.jsx("span", { className: "meld-folder-name", children: y.name }),
                            /* @__PURE__ */ a.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${y.count === null ? "meld-folder-count--loading" : ""}`,
                                children: y.count !== null ? `${y.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ a.jsx(Pc, { size: 14 })
                          ]
                        },
                        y.name
                      )),
                      i.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "meld-browser-image-grid", children: i.map((y) => /* @__PURE__ */ a.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => f(y),
                          children: /* @__PURE__ */ a.jsx(
                            "img",
                            {
                              src: Oe(y),
                              alt: y.filename,
                              title: y.filename
                            }
                          )
                        },
                        y.filename
                      )) })
                    ] }) })
                  ] })
                ] }) })
              ]
            }
          ),
          d && /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (y) => {
                y.stopPropagation(), f(null);
              },
              children: /* @__PURE__ */ a.jsxs(
                "div",
                {
                  className: "meld-import-preview-content",
                  onClick: (y) => y.stopPropagation(),
                  children: [
                    /* @__PURE__ */ a.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                      /* @__PURE__ */ a.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-import-preview-close",
                          onClick: () => f(null),
                          children: /* @__PURE__ */ a.jsx(ve, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ a.jsx(
                        "img",
                        {
                          src: Oe(d),
                          alt: d.filename
                        }
                      )
                    ] }),
                    /* @__PURE__ */ a.jsx("div", { className: "meld-import-preview-info", children: d.filename })
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
}, Fc = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = Ke(), [l, i] = x.useState([]), [s, o] = x.useState(!0), [u, c] = x.useState(!1), g = t.images.find((d) => d.id === e), h = x.useCallback(async () => {
    o(!0);
    try {
      const d = await pp(e);
      i(d);
    } catch (d) {
      console.error("Failed to load suggestions:", d);
    } finally {
      o(!1);
    }
  }, [e]);
  x.useEffect(() => {
    h();
  }, [h]);
  const m = async (d) => {
    try {
      await fp(e, d), await r(), n({ type: "CLOSE_MODAL" });
    } catch (f) {
      console.error("Failed to link parent:", f);
    }
  }, w = async (d) => {
    o(!0);
    try {
      const f = await mp(d), { id: p } = await jc({
        filename: f.name,
        subfolder: f.subfolder || "",
        type: f.type || "input"
      });
      await m(p);
    } catch (f) {
      console.error("Failed to upload/register image:", f);
    } finally {
      o(!1);
    }
  }, S = (d) => {
    d.preventDefault(), d.stopPropagation(), c(!1);
    const f = d.dataTransfer.files[0];
    f != null && f.type.startsWith("image/") && w(f);
  };
  if (!g) return null;
  const j = l.filter((d) => d.is_source_match), b = l.filter((d) => !d.is_source_match);
  return je.createPortal(
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: () => n({ type: "CLOSE_MODAL" }),
        children: /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-content", onClick: (d) => d.stopPropagation(), children: [
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
                children: /* @__PURE__ */ a.jsx(ve, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-body", children: [
            /* @__PURE__ */ a.jsxs(
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
                onDrop: S,
                children: [
                  /* @__PURE__ */ a.jsx(rm, { size: 32 }),
                  /* @__PURE__ */ a.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            s ? /* @__PURE__ */ a.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ a.jsxs("div", { className: "meld-suggestions-container", children: [
              j.length > 0 && /* @__PURE__ */ a.jsxs("section", { children: [
                /* @__PURE__ */ a.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ a.jsx("div", { className: "meld-suggestion-grid", children: j.map((d) => /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    className: "meld-suggestion-card",
                    onClick: () => m(d.id),
                    children: [
                      /* @__PURE__ */ a.jsx("img", { src: Oe(d), alt: d.filename }),
                      /* @__PURE__ */ a.jsx("div", { className: "meld-suggestion-info", children: /* @__PURE__ */ a.jsx("span", { className: "meld-suggestion-filename", children: d.filename }) })
                    ]
                  },
                  d.id
                )) })
              ] }),
              /* @__PURE__ */ a.jsxs("section", { children: [
                /* @__PURE__ */ a.jsx("h3", { children: "Visual Matches (pHash)" }),
                b.length > 0 ? /* @__PURE__ */ a.jsx("div", { className: "meld-suggestion-grid", children: b.map((d) => /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    className: "meld-suggestion-card",
                    onClick: () => m(d.id),
                    children: [
                      /* @__PURE__ */ a.jsx("img", { src: Oe(d), alt: d.filename }),
                      /* @__PURE__ */ a.jsxs("div", { className: "meld-suggestion-info", children: [
                        /* @__PURE__ */ a.jsx("span", { className: "meld-suggestion-filename", children: d.filename }),
                        /* @__PURE__ */ a.jsxs("span", { className: "meld-suggestion-distance", children: [
                          "Match:",
                          " ",
                          Math.round((64 - d.distance) / 64 * 100),
                          "%"
                        ] })
                      ] })
                    ]
                  },
                  d.id
                )) }) : /* @__PURE__ */ a.jsx("p", { className: "meld-no-suggestions", children: "No visual matches found." })
              ] })
            ] })
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, Ac = () => {
  const { state: e, dispatch: t, updateSetting: n } = Ke(), [r, l] = x.useState("General"), [i, s] = x.useState({
    ...e.settings
  }), [o, u] = x.useState(
    e.settings["gallery.page_size"].toString()
  ), [c, g] = x.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [h, m] = x.useState(e.settings["viewer.thumbnail_window_size"].toString()), [w, S] = x.useState(e.settings["gallery.trash_retention_days"].toString()), [j, b] = x.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [d, f] = x.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    p,
    k
  ] = x.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    z,
    _
  ] = x.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), M = [
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
  ], T = async () => {
    const N = Object.keys(i).filter((v) => i[v] !== e.settings[v]);
    if (N.length > 0)
      for (const v of N)
        await n(v, i[v]);
    t({ type: "CLOSE_MODAL" });
  }, E = (N, v) => {
    s((I) => ({
      ...I,
      [N]: !v
    }));
  }, R = (N, v, I, $) => {
    N === "gallery.page_size" ? u(v) : N === "gallery.lineage_max_depth" ? g(v) : N === "viewer.thumbnail_window_size" ? m(v) : N === "gallery.trash_retention_days" ? S(v) : N === "viewer.details.max_positive_prompt_lines" ? b(v) : N === "viewer.details.max_negative_prompt_lines" ? f(v) : N === "fullscreen.details.max_positive_prompt_lines" ? k(v) : N === "fullscreen.details.max_negative_prompt_lines" && _(v);
    const U = Number.parseInt(v, 10);
    if (!Number.isNaN(U)) {
      let D = U;
      I !== void 0 && D < I && (D = I), $ !== void 0 && D > $ && (D = $), s((C) => ({
        ...C,
        [N]: D
      }));
    }
  }, y = M.filter(
    (N) => N.category === r
  );
  return je.createPortal(
    /* @__PURE__ */ a.jsx("div", { className: "meld-modal-overlay", onClick: T, children: /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "meld-modal-content meld-settings-modal",
        onClick: (N) => N.stopPropagation(),
        children: [
          /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ a.jsx("h2", { children: "Settings" }),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: T,
                children: /* @__PURE__ */ a.jsx(ve, { size: 20 })
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
              /* @__PURE__ */ a.jsx("div", { className: "meld-settings-list", children: y.map((N) => {
                var v;
                return /* @__PURE__ */ a.jsxs("div", { className: "meld-settings-item", children: [
                  /* @__PURE__ */ a.jsxs("div", { className: "meld-settings-item__info", children: [
                    /* @__PURE__ */ a.jsx("div", { className: "meld-settings-item__label", children: N.label }),
                    /* @__PURE__ */ a.jsx("div", { className: "meld-settings-item__description", children: N.description })
                  ] }),
                  /* @__PURE__ */ a.jsxs("div", { className: "meld-settings-item__control", children: [
                    N.type === "boolean" && /* @__PURE__ */ a.jsxs("label", { className: "meld-switch", children: [
                      /* @__PURE__ */ a.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: !!i[N.key],
                          onChange: () => E(
                            N.key,
                            !!i[N.key]
                          )
                        }
                      ),
                      /* @__PURE__ */ a.jsx("span", { className: "meld-switch__slider" })
                    ] }),
                    N.type === "number" && /* @__PURE__ */ a.jsx(
                      "input",
                      {
                        type: "number",
                        className: "meld-number-input",
                        value: N.key === "gallery.page_size" ? o : N.key === "gallery.lineage_max_depth" ? c : N.key === "viewer.thumbnail_window_size" ? h : N.key === "viewer.details.max_positive_prompt_lines" ? j : N.key === "viewer.details.max_negative_prompt_lines" ? d : N.key === "fullscreen.details.max_positive_prompt_lines" ? p : N.key === "fullscreen.details.max_negative_prompt_lines" ? z : N.key === "gallery.trash_retention_days" ? w : i[N.key],
                        min: N.min,
                        max: N.max,
                        onChange: (I) => R(
                          N.key,
                          I.target.value,
                          N.min,
                          N.max
                        ),
                        onBlur: () => {
                          N.key === "gallery.page_size" ? u(
                            i["gallery.page_size"].toString()
                          ) : N.key === "gallery.lineage_max_depth" ? g(
                            i["gallery.lineage_max_depth"].toString()
                          ) : N.key === "viewer.thumbnail_window_size" ? m(
                            i["viewer.thumbnail_window_size"].toString()
                          ) : N.key === "gallery.trash_retention_days" ? S(
                            i["gallery.trash_retention_days"].toString()
                          ) : N.key === "viewer.details.max_positive_prompt_lines" ? b(
                            i["viewer.details.max_positive_prompt_lines"].toString()
                          ) : N.key === "viewer.details.max_negative_prompt_lines" ? f(
                            i["viewer.details.max_negative_prompt_lines"].toString()
                          ) : N.key === "fullscreen.details.max_positive_prompt_lines" ? k(
                            i["fullscreen.details.max_positive_prompt_lines"].toString()
                          ) : N.key === "fullscreen.details.max_negative_prompt_lines" && _(
                            i["fullscreen.details.max_negative_prompt_lines"].toString()
                          );
                        }
                      }
                    ),
                    N.type === "select" && /* @__PURE__ */ a.jsx(
                      "select",
                      {
                        className: "meld-select",
                        value: i[N.key],
                        onChange: (I) => s(($) => ({
                          ...$,
                          [N.key]: I.target.value
                        })),
                        children: (v = N.options) == null ? void 0 : v.map((I) => /* @__PURE__ */ a.jsx("option", { value: I.value, children: I.label }, I.value))
                      }
                    )
                  ] })
                ] }, N.key);
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
}, bc = ({
  imageIds: e,
  initialTags: t,
  onClose: n
}) => {
  const { refreshImages: r } = Ke(), [l, i] = x.useState([]), [s, o] = x.useState(t), [u, c] = x.useState(""), [g, h] = x.useState(!0), [m, w] = x.useState(!1), S = x.useRef(null), j = e.length > 1, b = x.useCallback(async () => {
    h(!0);
    try {
      const _ = await Zs();
      i(_);
    } catch (_) {
      console.error("Failed to fetch tags:", _);
    } finally {
      h(!1);
    }
  }, []);
  x.useEffect(() => {
    b();
  }, [b]), x.useEffect(() => {
    S.current && S.current.focus();
  }, []);
  const d = x.useMemo(() => l.filter(
    (_) => _.name.toLowerCase().includes(u.toLowerCase()) && !s.includes(_.name)
  ), [l, u, s]), f = (_) => {
    const M = _.trim();
    M && !s.includes(M) && (o([...s, M]), c(""));
  }, p = (_) => {
    o(s.filter((M) => M !== _));
  }, k = async () => {
    w(!0);
    try {
      if (j) {
        const _ = s.filter((T) => !t.includes(T)), M = t.filter(
          (T) => !s.includes(T)
        );
        await jp(e, _, M);
      } else
        await Np(e[0], s);
      await r(), n();
    } catch (_) {
      console.error("Failed to update tags:", _), alert("Failed to update tags.");
    } finally {
      w(!1);
    }
  }, z = (_) => {
    _.key === "Enter" && u.trim() ? (_.preventDefault(), f(u.trim())) : _.key === "Escape" && n();
  };
  return je.createPortal(
    /* @__PURE__ */ a.jsx("div", { className: "meld-modal-overlay", onClick: n, children: /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-content", onClick: (_) => _.stopPropagation(), children: [
      /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-header", children: [
        /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
          /* @__PURE__ */ a.jsx(Cn, { size: 18 }),
          /* @__PURE__ */ a.jsx("h3", { style: { margin: 0 }, children: j ? `Edit Tags (${e.length} images)` : "Edit Tags" })
        ] }),
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ a.jsx(ve, { size: 20 }) })
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
          /* @__PURE__ */ a.jsx("div", { className: "meld-tag-edit-selected", children: s.length === 0 ? /* @__PURE__ */ a.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : s.map((_) => /* @__PURE__ */ a.jsxs("span", { className: "meld-tag-edit-badge", children: [
            _,
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-edit-remove",
                onClick: () => p(_),
                children: /* @__PURE__ */ a.jsx(ve, { size: 12 })
              }
            )
          ] }, _)) })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-edit-section", children: [
          /* @__PURE__ */ a.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
          /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-search-container", children: [
            /* @__PURE__ */ a.jsx(xn, { size: 14, className: "meld-tag-search-icon" }),
            /* @__PURE__ */ a.jsx(
              "input",
              {
                ref: S,
                type: "text",
                className: "meld-tag-search-input",
                placeholder: "Search or create new tag...",
                value: u,
                onChange: (_) => c(_.target.value),
                onKeyDown: z
              }
            ),
            u.trim() && !s.includes(u.trim()) && /* @__PURE__ */ a.jsxs(
              "button",
              {
                type: "button",
                className: "meld-tag-add-btn",
                onClick: () => f(u),
                children: [
                  /* @__PURE__ */ a.jsx(Js, { size: 14 }),
                  "Create"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ a.jsx("div", { className: "meld-tag-suggestions", children: g ? /* @__PURE__ */ a.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : d.length === 0 ? u ? /* @__PURE__ */ a.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ a.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : d.map((_) => /* @__PURE__ */ a.jsx(
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
}, $c = x.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r
  }) => {
    const l = e.id === t, i = typeof n.parent_id == "number" && n.parent_id === e.id, s = typeof e.parent_id == "number" && e.parent_id === n.id, o = Oe(e);
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
              children: i ? /* @__PURE__ */ a.jsx($p, { size: 12 }) : /* @__PURE__ */ a.jsx(bp, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
$c.displayName = "ThumbnailItem";
const mm = () => {
  const { state: e, dispatch: t, loadMoreImages: n, refreshImages: r } = Ke(), { viewerImageId: l, images: i, viewerMode: s, lineageImages: o } = e, [u, c] = x.useState(!1), [g, h] = x.useState(
    e.settings["viewer.show_details_by_default"]
  ), [m, w] = x.useState(null), S = m ?? e.settings["viewer.show_thumbnails"], [j, b] = x.useState(!1), [d, f] = x.useState(!1), [p, k] = x.useState(null), z = x.useRef(null), _ = x.useMemo(() => s === "lineage" ? o : i.filter(
    (D) => D.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && D.has_children)
  ), [s, o, i, e.settings]), M = x.useMemo(() => l === null ? -1 : _.findIndex((D) => D.id === l), [_, l]), T = x.useMemo(() => (s === "lineage" && o.length > 0 ? o : i).find((D) => D.id === l), [s, o, i, l]), E = x.useMemo(() => {
    if (!S || M === -1) return [];
    const D = e.settings["viewer.thumbnail_window_size"], C = Math.floor(D / 2);
    let P = Math.max(0, M - C);
    const F = Math.min(_.length, P + D);
    return F === _.length && (P = Math.max(0, F - D)), _.slice(P, F).map((A, B) => ({
      img: A,
      absIndex: P + B
    }));
  }, [
    _,
    M,
    e.settings["viewer.thumbnail_window_size"],
    S
  ]), R = x.useCallback(async () => {
    if (!T) return;
    const D = u ? e.settings["fullscreen.delete_mode"] : e.settings["viewer.delete_mode"];
    if (D === "confirm") {
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
      const C = e.viewScope === "trash", P = /* @__PURE__ */ new Set([T.id]);
      if (D === "lineage") {
        const F = await ts(T.id);
        for (const A of F)
          P.add(A.id);
      }
      if (_.length > P.size) {
        let F = !1;
        for (let A = 1; A < _.length; A++) {
          const B = (M + A) % _.length;
          if (!P.has(_[B].id)) {
            t({
              type: "OPEN_VIEWER",
              payload: { id: _[B].id, mode: s }
            }), F = !0;
            break;
          }
        }
        F || t({ type: "CLOSE_VIEWER" });
      } else
        t({ type: "CLOSE_VIEWER" });
      await ns(Array.from(P), C), k(C ? null : Array.from(P)), await r();
    } catch (C) {
      t({
        type: "SET_ERROR",
        payload: C instanceof Error ? C.message : String(C)
      });
    }
  }, [
    T,
    u,
    e.settings,
    e.viewScope,
    _,
    M,
    s,
    t,
    r
  ]), y = x.useCallback(async () => {
    if (!p || p.length === 0) return;
    const D = p[0];
    try {
      await Nc(p), k(null), await r(), t({
        type: "OPEN_VIEWER",
        payload: { id: D, mode: s }
      });
    } catch (C) {
      t({
        type: "SET_ERROR",
        payload: C instanceof Error ? C.message : String(C)
      });
    }
  }, [p, r, t, s]), N = x.useCallback(
    (D) => {
      D && "stopPropagation" in D && D.stopPropagation();
      const C = z.current;
      C && (document.fullscreenElement ? document.exitFullscreen() : C.requestFullscreen().catch((P) => {
        console.error(
          `Error attempting to enable full-screen mode: ${P.message}`
        );
      }));
    },
    []
  ), v = x.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: u } });
  }, [t, u]), I = x.useCallback(async () => {
    const D = u ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"];
    if (M === 0 && s === "gallery" && e.pagination.hasMore && !d && D) {
      f(!0);
      try {
        const C = e.pagination.limit, P = e.pagination.total, F = Math.max(0, P - C), A = await es(
          F,
          C,
          e.searchQuery
        );
        if (t({ type: "APPEND_IMAGES", payload: A }), A.images.length > 0) {
          const B = A.images[A.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: B.id, mode: "gallery" }
          });
        }
      } catch (C) {
        console.error("Failed to jump to end:", C);
      } finally {
        f(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: u } });
  }, [
    M,
    s,
    e.pagination.hasMore,
    e.pagination.total,
    e.pagination.limit,
    e.searchQuery,
    e.settings,
    t,
    d,
    u
  ]);
  if (x.useEffect(() => {
    s !== "gallery" || l === null || e.isLoading || !e.pagination.hasMore || M !== -1 && M >= _.length - 15 && n();
  }, [
    l,
    _.length,
    s,
    e.isLoading,
    e.pagination.hasMore,
    n,
    M
  ]), x.useEffect(() => {
    const D = (P) => {
      var F, A;
      if (l !== null && !(((F = document.activeElement) == null ? void 0 : F.tagName) === "INPUT" || ((A = document.activeElement) == null ? void 0 : A.tagName) === "TEXTAREA"))
        if (P.key === "Escape") {
          if (e.activeModal.type !== "none") return;
          document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" });
        } else P.key === "ArrowRight" ? v() : P.key === "ArrowLeft" ? I() : P.key === "f" || P.key === "F" ? N(P) : P.key === "i" || P.key === "I" ? h((B) => !B) : P.key === "Delete" ? R() : (P.ctrlKey || P.metaKey) && (P.key === "z" || P.key === "Z") && (P.preventDefault(), y());
    }, C = () => {
      const P = !!document.fullscreenElement;
      c(P), h(P ? e.settings["fullscreen.show_details_by_default"] : e.settings["viewer.show_details_by_default"]);
    };
    return window.addEventListener("keydown", D), document.addEventListener("fullscreenchange", C), () => {
      window.removeEventListener("keydown", D), document.removeEventListener("fullscreenchange", C);
    };
  }, [
    l,
    t,
    N,
    v,
    I,
    e.settings,
    R,
    e.activeModal.type,
    y
  ]), x.useEffect(() => {
    s === "lineage" && l !== null && o.length === 0 && (b(!0), ts(l).then((D) => {
      t({ type: "SET_LINEAGE", payload: D });
    }).catch((D) => {
      console.error("Failed to fetch lineage:", D);
    }).finally(() => {
      b(!1);
    }));
  }, [s, l, o.length, t]), x.useEffect(() => () => {
    document.fullscreenElement && document.exitFullscreen().catch(() => {
    });
  }, []), x.useEffect(() => {
    if (S && l !== null) {
      const D = document.querySelector(
        ".meld-viewer-thumbnail--active"
      );
      D && D.scrollIntoView({
        behavior: "auto",
        block: "nearest",
        inline: "center"
      });
    }
  }, [l, S]), x.useEffect(() => {
    if (l === null || _.length === 0) return;
    const D = _.findIndex(
      (A) => A.id === l
    );
    if (D === -1) return;
    const C = (A) => Oe(A), P = [
      D + 1,
      D + 2,
      D - 1
    ], F = setTimeout(() => {
      for (const A of P)
        if (A >= 0 && A < _.length) {
          const B = _[A], Bt = new Image();
          Bt.src = C(B);
        }
    }, 150);
    return () => clearTimeout(F);
  }, [l, _]), !T) return null;
  const $ = Oe(T), U = u ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return je.createPortal(
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        ref: z,
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
              onClick: (D) => D.stopPropagation(),
              children: [
                U && /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-actions", children: [
                  !u && /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      className: `meld-viewer-action-btn ${S ? "meld-viewer-action-btn--active" : ""}`,
                      onClick: () => w(!S),
                      type: "button",
                      title: S ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ a.jsx(Kp, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => h(!g),
                      type: "button",
                      title: g ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ a.jsx(Gp, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: N,
                      type: "button",
                      title: u ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                      children: u ? /* @__PURE__ */ a.jsx(Xp, { size: 20 }) : /* @__PURE__ */ a.jsx(Yp, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                      onClick: () => t({ type: "CLOSE_VIEWER" }),
                      type: "button",
                      title: "Close (Esc)",
                      children: /* @__PURE__ */ a.jsx(ve, { size: 20 })
                    }
                  )
                ] }),
                U && /* @__PURE__ */ a.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: I,
                    type: "button",
                    disabled: d,
                    children: /* @__PURE__ */ a.jsx(Mc, { size: 32 })
                  }
                ),
                /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-image-container", children: [
                  d && /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ a.jsx(cr, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ a.jsx(
                    "img",
                    {
                      src: $,
                      alt: T.filename,
                      className: `meld-viewer-image ${d ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                U && /* @__PURE__ */ a.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: v,
                    type: "button",
                    children: /* @__PURE__ */ a.jsx(Pc, { size: 32 })
                  }
                ),
                g && /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    className: `meld-viewer-details-overlay ${u ? "meld-viewer-details-overlay--fullscreen" : ""} ${U ? "" : "meld-viewer-details-overlay--no-icons"}`,
                    children: [
                      (u ? e.settings["fullscreen.details.show_filename"] : e.settings["viewer.details.show_filename"]) && /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-label", children: "Filename" }),
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-value", children: T.filename })
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
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-tags", children: T.tags.map((D) => /* @__PURE__ */ a.jsx("span", { className: "meld-viewer-details-tag", children: D }, D)) })
                      ] })
                    ]
                  }
                ),
                !u && S && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-thumbnails-container", children: /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-thumbnails", children: [
                  j ? /* @__PURE__ */ a.jsx(
                    "div",
                    {
                      style: {
                        padding: "10px",
                        color: "var(--meld-text-secondary)"
                      },
                      children: "Loading lineage..."
                    }
                  ) : E.map(({ img: D }) => /* @__PURE__ */ a.jsx(
                    $c,
                    {
                      thumb: D,
                      viewerImageId: l,
                      currentImage: T,
                      dispatch: t
                    },
                    D.id
                  )),
                  s === "gallery" && e.isLoading && /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ a.jsx(cr, { className: "animate-spin", size: 20 }) })
                ] }) })
              ]
            }
          ),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ a.jsx(
            Rc,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: k
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ a.jsx(Fc, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ a.jsx(Oc, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ a.jsx(Ac, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ a.jsx(
            bc,
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
}, hm = () => {
  const { state: e, dispatch: t } = Ke(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await wp(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
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
        children: /* @__PURE__ */ a.jsx(tm, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ a.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ a.jsx(Qp, { size: 14, className: "meld-success-icon" }),
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
}, gm = () => {
  const { state: e, dispatch: t, refreshFavorites: n } = Ke(), [r, l] = x.useState(e.searchQuery), [i, s] = x.useState([]), [o, u] = x.useState(!1), [c, g] = x.useState([]), [h, m] = x.useState(-1), [w, S] = x.useState(!1), [j, b] = x.useState(null), d = x.useRef(null);
  x.useEffect(() => {
    if (j) {
      const v = setTimeout(() => b(null), 3e3);
      return () => clearTimeout(v);
    }
  }, [j]);
  const f = x.useRef(null), p = x.useRef(e.searchQuery);
  x.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      g([]);
      return;
    }
    !r && !e.searchQuery ? cp().then((v) => {
      g(v);
    }) : g([]);
  }, [
    r,
    e.searchQuery,
    e.settings["search.quick_suggestions"]
  ]), x.useEffect(() => {
    l(e.searchQuery), p.current = e.searchQuery;
  }, [e.searchQuery]), x.useEffect(() => {
    var v;
    (v = d.current) == null || v.focus();
  }, []);
  const k = x.useCallback(
    (v, I = !0) => {
      p.current !== v && (t({ type: "SET_SEARCH_QUERY", payload: v }), I && u(!1), p.current = v);
    },
    [t]
  );
  x.useEffect(() => {
    const v = setTimeout(async () => {
      if (r === p.current)
        return;
      if (e.settings["search.realtime_search"] && k(r, !1), !e.settings["search.input_suggest"]) {
        s([]), u(!1);
        return;
      }
      const I = r.split(/\s+/), $ = I[I.length - 1];
      if ($) {
        const U = $.match(
          /^(pos|neg|model|date|after|before):(.*)$/i
        );
        if (U) {
          const D = U[1].toLowerCase(), C = U[2], P = await up(C, D);
          s(P), u(P.length > 0), m(-1);
        } else
          s([]), u(!1);
      } else
        s([]), u(!1);
    }, 300);
    return () => clearTimeout(v);
  }, [
    r,
    e.settings["search.realtime_search"],
    e.settings["search.input_suggest"],
    k
  ]);
  const z = (v) => {
    v.key === "Enter" ? k(r) : v.key === "Tab" ? o && h >= 0 && (_(i[h]), v.preventDefault()) : v.key === "ArrowDown" ? o && (m((I) => Math.min(I + 1, i.length - 1)), v.preventDefault()) : v.key === "ArrowUp" ? o && (m((I) => Math.max(I - 1, -1)), v.preventDefault()) : v.key === "Escape" && u(!1);
  }, _ = (v) => {
    var C;
    const I = r.split(/\s+/);
    I.pop();
    const U = ["date", "after", "before"].includes(v.type) ? v.value : `"${v.value}"`, D = `${[...I, `${v.type}:${U}`].join(" ").trim()} `;
    l(D), k(D), s([]), u(!1), (C = d.current) == null || C.focus();
  }, M = () => {
    l(""), k("");
  }, T = async (v, I, $) => {
    v.stopPropagation();
    const U = `Are you sure you want to delete the favorite "${$}"?`;
    if (window.confirm(U))
      try {
        await uo(I), await n();
      } catch (D) {
        ge.error("Failed to delete favorite", D);
      }
  }, E = async (v, I, $) => {
    v.stopPropagation();
    const U = window.prompt(
      "Enter a new name for this favorite:",
      $
    );
    if (!(U === null || U === $))
      try {
        await Sp(I, U || $), await n();
      } catch (D) {
        ge.error("Failed to rename favorite", D);
      }
  }, R = (v, I) => {
    const U = ["date", "after", "before"].includes(v) ? I : `"${I}"`, D = `${v}:${U}`;
    l(D), k(D);
  }, y = async () => {
    if (!e.searchQuery || w) return;
    if (e.favorites.some(
      (I) => I.query === e.searchQuery
    )) {
      const I = e.favorites.find(($) => $.query === e.searchQuery);
      if (I) {
        S(!0);
        try {
          await uo(I.id), await n(), b("Favorite removed.");
        } catch ($) {
          console.error("Failed to delete favorite:", $);
        } finally {
          S(!1);
        }
      }
      return;
    }
    S(!0);
    try {
      await _p(e.searchQuery, e.searchQuery), await n(), b(
        `Favorite added!
You can select favorites when the search query is empty.`
      );
    } catch (I) {
      console.error("Failed to save favorite:", I);
    } finally {
      S(!1);
    }
  }, N = (v) => {
    switch (v) {
      case "tag":
        return /* @__PURE__ */ a.jsx(Cn, { size: 12 });
      case "model":
        return /* @__PURE__ */ a.jsx(Up, { size: 12 });
      case "pos":
      case "neg":
        return /* @__PURE__ */ a.jsx(nm, { size: 12 });
      case "date":
      case "after":
      case "before":
        return /* @__PURE__ */ a.jsx(Vp, { size: 12 });
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
              j && /* @__PURE__ */ a.jsx(
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
                      xn,
                      {
                        size: 18,
                        color: "var(--meld-text-secondary)",
                        style: { marginRight: "10px", flexShrink: 0 }
                      }
                    ),
                    /* @__PURE__ */ a.jsx(
                      "input",
                      {
                        ref: d,
                        type: "text",
                        value: r,
                        onChange: (v) => l(v.target.value),
                        onKeyDown: z,
                        onBlur: () => setTimeout(() => u(!1), 200),
                        onFocus: () => {
                          if (r === p.current) return;
                          const v = r.split(/\s+/), I = v[v.length - 1];
                          I != null && I.match(/^(pos|neg|model|date|after|before):/i) && u(!0);
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
                        onClick: y,
                        disabled: w,
                        title: e.favorites.some((v) => v.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                          fo,
                          {
                            size: 16,
                            color: e.favorites.some((v) => v.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((v) => v.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                          }
                        )
                      }
                    ),
                    r && /* @__PURE__ */ a.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: M,
                        style: {
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "2px",
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0
                        },
                        children: /* @__PURE__ */ a.jsx(ve, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              o && i.length > 0 && /* @__PURE__ */ a.jsx(
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
                  children: i.map((v, I) => /* @__PURE__ */ a.jsx(
                    "div",
                    {
                      onMouseDown: ($) => {
                        $.preventDefault(), _(v);
                      },
                      onMouseEnter: () => m(I),
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 14px",
                        cursor: "pointer",
                        backgroundColor: I === h ? "var(--comfy-menu-bg, #333)" : "transparent",
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
                                children: N(v.type)
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
                                children: v.type
                              }
                            ),
                            /* @__PURE__ */ a.jsx(
                              "span",
                              {
                                style: {
                                  color: "var(--meld-text-color)",
                                  fontSize: "14px"
                                },
                                children: v.value
                              }
                            )
                          ]
                        }
                      )
                    },
                    `${v.type}:${v.value}`
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
            children: c.map((v) => /* @__PURE__ */ a.jsxs(
              "button",
              {
                type: "button",
                onClick: () => R(v.type, v.value),
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
                onMouseEnter: (I) => {
                  I.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", I.currentTarget.style.borderColor = "var(--comfy-menu-border, #444)", I.currentTarget.style.color = "var(--meld-text-color)";
                },
                onMouseLeave: (I) => {
                  I.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", I.currentTarget.style.borderColor = "var(--comfy-menu-border, #333)", I.currentTarget.style.color = "var(--meld-text-color)";
                },
                children: [
                  /* @__PURE__ */ a.jsx(
                    "span",
                    {
                      style: {
                        display: "flex",
                        color: "var(--meld-text-secondary)"
                      },
                      children: N(v.type)
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
                      children: v.type
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
                      children: v.value
                    }
                  )
                ]
              },
              `${v.type}:${v.value}`
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
                    /* @__PURE__ */ a.jsx(fo, { size: 12, fill: "var(--meld-text-secondary)" }),
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
                  children: e.favorites.map((v) => /* @__PURE__ */ a.jsxs(
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
                        l(v.query), k(v.query);
                      },
                      onMouseEnter: (I) => {
                        I.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", I.currentTarget.style.borderColor = "var(--meld-accent-color)", I.currentTarget.style.color = "var(--meld-text-color)";
                      },
                      onMouseLeave: (I) => {
                        I.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", I.currentTarget.style.borderColor = "var(--comfy-menu-border, #333)", I.currentTarget.style.color = "var(--meld-text-color)";
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
                                  children: v.name
                                }
                              ),
                              v.name !== v.query && /* @__PURE__ */ a.jsx(
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
                                  children: v.query
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
                                  onClick: (I) => {
                                    I.stopPropagation(), E(I, v.id, v.name);
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
                                  onMouseEnter: (I) => {
                                    I.currentTarget.style.color = "var(--meld-accent-color)", I.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(68, 136, 255, 0.1))";
                                  },
                                  onMouseLeave: (I) => {
                                    I.currentTarget.style.color = "var(--meld-text-secondary)", I.currentTarget.style.backgroundColor = "transparent";
                                  },
                                  title: "Rename favorite",
                                  children: /* @__PURE__ */ a.jsx(zc, { size: 14 })
                                }
                              ),
                              /* @__PURE__ */ a.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: (I) => {
                                    I.stopPropagation(), T(I, v.id, v.name);
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
                                  onMouseEnter: (I) => {
                                    I.currentTarget.style.color = "var(--meld-danger-color)", I.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,0,0,0.1))";
                                  },
                                  onMouseLeave: (I) => {
                                    I.currentTarget.style.color = "var(--meld-text-secondary)", I.currentTarget.style.backgroundColor = "transparent";
                                  },
                                  title: "Delete favorite",
                                  children: /* @__PURE__ */ a.jsx(_n, { size: 14 })
                                }
                              )
                            ]
                          }
                        )
                      ]
                    },
                    v.id
                  ))
                }
              )
            ]
          }
        )
      ]
    }
  );
}, ym = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = x.useState([]), [l, i] = x.useState(!0), [s, o] = x.useState(""), [u, c] = x.useState(""), [g, h] = x.useState(!1), [m, w] = x.useState(null), [S, j] = x.useState(""), [b, d] = x.useState(!1), f = x.useRef(null), p = x.useCallback(async () => {
    i(!0);
    try {
      const y = await Zs();
      r(y);
    } catch (y) {
      console.error("Failed to fetch tags:", y);
    } finally {
      i(!1);
    }
  }, []);
  x.useEffect(() => {
    p();
  }, [p]), x.useEffect(() => {
    m !== null && f.current && (f.current.focus(), f.current.select());
  }, [m]);
  const k = async (y) => {
    y.preventDefault();
    const N = u.trim();
    if (!(!N || g)) {
      if (n.some((v) => v.name.toLowerCase() === N.toLowerCase())) {
        alert(`Tag "${N}" already exists.`);
        return;
      }
      h(!0);
      try {
        await kp(N), c(""), await p();
      } catch (v) {
        console.error("Failed to add tag:", v);
      } finally {
        h(!1);
      }
    }
  }, z = async (y, N) => {
    if (confirm(`Are you sure you want to delete tag "${N}"?`))
      try {
        await Ep(y), await p();
      } catch (v) {
        console.error("Failed to delete tag:", v);
      }
  }, _ = (y) => {
    w(y.id), j(y.name);
  }, M = () => {
    w(null), j("");
  }, T = async (y) => {
    y.preventDefault();
    const N = S.trim();
    if (!N || m === null || b) return;
    const v = n.find((I) => I.id === m);
    if (v && v.name === N) {
      M();
      return;
    }
    if (n.some(
      (I) => I.id !== m && I.name.toLowerCase() === N.toLowerCase()
    )) {
      alert(`Tag "${N}" already exists.`);
      return;
    }
    d(!0);
    try {
      await Cp(m, N), M(), await p();
    } catch (I) {
      console.error("Failed to rename tag:", I), alert(I instanceof Error ? I.message : "Failed to rename tag");
    } finally {
      d(!1);
    }
  }, E = (y) => {
    t(`tag:${y}`);
  }, R = x.useMemo(() => n.filter(
    (y) => y.name.toLowerCase().includes(s.toLowerCase())
  ), [n, s]);
  return /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ a.jsx(Cn, { size: 16 }),
        /* @__PURE__ */ a.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ a.jsx(ve, { size: 16 })
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
            onChange: (y) => c(y.target.value),
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
        /* @__PURE__ */ a.jsx(xn, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: s,
            onChange: (y) => o(y.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ a.jsx("div", { className: "meld-tag-list", children: R.length === 0 ? /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : R.map((y) => /* @__PURE__ */ a.jsx("div", { className: "meld-tag-item", children: m === y.id ? /* @__PURE__ */ a.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: T,
          children: [
            /* @__PURE__ */ a.jsx(
              "input",
              {
                type: "text",
                ref: f,
                className: "meld-tag-rename-input",
                value: S,
                onChange: (N) => j(N.target.value),
                onKeyDown: (N) => N.key === "Escape" && M()
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: b || !S.trim(),
                children: /* @__PURE__ */ a.jsx(Lc, { size: 14 })
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: M,
                disabled: b,
                children: /* @__PURE__ */ a.jsx(ve, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("span", { className: "meld-tag-item__name", children: y.name }),
        /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => E(y.name),
              children: /* @__PURE__ */ a.jsx(xn, { size: 14 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => _(y),
              children: /* @__PURE__ */ a.jsx(zc, { size: 14 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => z(y.id, y.name),
              children: /* @__PURE__ */ a.jsx(_n, { size: 14 })
            }
          )
        ] })
      ] }) }, y.id)) })
    ] })
  ] });
}, vm = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = Ke(), [i, s] = x.useState("gallery"), [o, u] = x.useState(""), c = e.searchQuery.trim() !== "", g = x.useRef(null), h = x.useRef(null), m = x.useMemo(
    () => e.images.filter((w) => e.viewScope === "trash" ? w.exists !== !1 || e.settings["gallery.trash.show_missing"] : w.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && w.has_children)),
    [e.images, e.settings, e.viewScope]
  );
  return x.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && m.length === 0 && (ge.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    m.length,
    r
  ]), ge.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: m.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), x.useEffect(() => {
    const w = (S) => {
      S.key === "Escape" && e.activeModal.type !== "none" && e.viewerImageId === null && t({ type: "CLOSE_MODAL" });
    };
    return window.addEventListener("keydown", w), () => window.removeEventListener("keydown", w);
  }, [e.activeModal.type, e.viewerImageId, t]), x.useEffect(() => {
    const w = new IntersectionObserver(
      (j) => {
        j[0].isIntersecting && !e.isLoading && e.pagination.hasMore && (ge.log(
          "GalleryPanel: Load more triggered via IntersectionObserver"
        ), r());
      },
      { threshold: 0, rootMargin: "800px" }
    ), S = g.current;
    return S && w.observe(S), () => {
      S && w.unobserve(S);
    };
  }, [r, e.isLoading, e.pagination.hasMore]), x.useEffect(() => {
    const w = e.viewerImageId ?? h.current;
    if (w !== null && m.some((j) => j.id === w)) {
      const j = document.querySelector(
        `[data-image-id="${w}"]`
      );
      j && (j.scrollIntoView({ behavior: "smooth", block: "nearest" }), e.viewerImageId === null && (h.current = null));
    }
    e.viewerImageId !== null && (h.current = e.viewerImageId);
  }, [e.viewerImageId, m]), /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `meld-gallery ${e.viewScope === "trash" ? "meld-gallery--trash" : ""}`,
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: "meld-gallery__header", children: [
          e.viewScope === "trash" ? /* @__PURE__ */ a.jsxs("div", { className: "meld-gallery__trash-indicator", children: [
            /* @__PURE__ */ a.jsxs("div", { className: "meld-gallery__trash-label", children: [
              /* @__PURE__ */ a.jsx(_n, { size: 14 }),
              /* @__PURE__ */ a.jsx("span", { children: "Trash Bin" })
            ] }),
            /* @__PURE__ */ a.jsxs("label", { className: "meld-gallery__trash-toggle", children: [
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.settings["gallery.trash.show_missing"] || !1,
                  onChange: (w) => l("gallery.trash.show_missing", w.target.checked)
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
                  /* @__PURE__ */ a.jsx(ve, { size: 14 }),
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
                children: /* @__PURE__ */ a.jsx(xn, { size: 14 })
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
                children: /* @__PURE__ */ a.jsx(Cn, { size: 14 })
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
                children: /* @__PURE__ */ a.jsx(Hp, { size: 14 })
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
                  cr,
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
                children: /* @__PURE__ */ a.jsx(em, { size: 14 })
              }
            )
          ] }),
          i === "search" && /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ a.jsx(gm, {}) })
        ] }),
        /* @__PURE__ */ a.jsx(hm, {}),
        e.error && /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__error", children: e.error }),
        i === "tags" ? /* @__PURE__ */ a.jsx(
          ym,
          {
            onClose: () => s("gallery"),
            onSearch: (w) => {
              t({ type: "SET_SEARCH_QUERY", payload: w }), s("search");
            }
          }
        ) : e.isLoading && m.length === 0 ? /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : m.length === 0 ? /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__list", children: m.map((w) => /* @__PURE__ */ a.jsx("div", { "data-image-id": w.id, children: /* @__PURE__ */ a.jsx(dm, { height: 150, children: /* @__PURE__ */ a.jsx(pm, { image: w }) }) }, w.id)) }),
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
        /* @__PURE__ */ a.jsx(fm, {}),
        e.viewerImageId !== null && /* @__PURE__ */ a.jsx(mm, {}),
        e.viewerImageId === null && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          e.activeModal.type === "parent_selection" && je.createPortal(
            /* @__PURE__ */ a.jsx(Fc, { imageId: e.activeModal.imageId }),
            document.body
          ),
          e.activeModal.type === "import" && je.createPortal(/* @__PURE__ */ a.jsx(Oc, {}), document.body),
          e.activeModal.type === "settings" && je.createPortal(/* @__PURE__ */ a.jsx(Ac, {}), document.body),
          e.activeModal.type === "tag_edit" && je.createPortal(
            /* @__PURE__ */ a.jsx(
              bc,
              {
                imageIds: e.activeModal.imageIds,
                initialTags: e.activeModal.tags,
                onClose: () => t({ type: "CLOSE_MODAL" })
              }
            ),
            document.body
          ),
          e.activeModal.type === "delete_confirm" && je.createPortal(
            /* @__PURE__ */ a.jsx(
              Rc,
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
po.registerExtension({
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
const Dl = document.createElement("link");
Dl.rel = "stylesheet";
Dl.type = "text/css";
Dl.href = "/extensions/ComfyUI-Meld/js/style.css";
document.head.appendChild(Dl);
let Dr = null, Ue = null;
po.registerExtension({
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
      const n = await Cc();
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
                  await jc({
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
              galleryRoot: Dr,
              galleryContainer: Ue
            }), Ue || (ge.log("Meld: galleryContainer not found, creating new one"), Ue = document.createElement("div"), Ue.id = "meld-gallery-container", Ue.style.height = "100%", Ue.style.width = "100%", Ue.style.display = "flex", Ue.style.flexDirection = "column"), n.contains(Ue) || (ge.log("Meld: Appending galleryContainer to el"), n.appendChild(Ue)), Dr ? ge.log(
              "Meld: Gallery root already exists, React should handle re-render if needed"
            ) : (ge.log("Meld: Creating new gallery root"), Dr = Ec(Ue), Dr.render(
              na.createElement(
                cm,
                null,
                na.createElement(vm)
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
